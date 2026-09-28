import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const APPS_HOST = "apps.bergeprod.no";
const MAIN_HOSTS = ["bergeprod.no", "www.bergeprod.no"];

// Norwegian browsers get Norwegian; any other stated language gets English.
// No header at all (bots, curl) falls back to Norwegian.
function preferredLang(acceptLanguage: string | null): "no" | "en" {
  if (!acceptLanguage) return "no";
  const tags = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().toLowerCase().split(";");
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      return { primary: tag.split("-")[0], q: q ? Number(q.slice(2)) || 0 : 1 };
    })
    .filter((t) => t.primary && t.q > 0)
    .sort((a, b) => b.q - a.q);
  for (const t of tags) {
    if (t.primary === "nb" || t.primary === "nn" || t.primary === "no") return "no";
    if (t.primary === "en") return "en";
  }
  return tags.length ? "en" : "no";
}

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").split(":")[0];
  const { pathname, searchParams } = request.nextUrl;

  if (host.startsWith("apps.")) {
    // Old English addresses: /<slug>/en/privacy -> /<slug>/privacy?lang=en
    const legacy = pathname.match(/^\/([^/]+)\/en\/(privacy|terms)\/?$/);
    if (legacy) {
      const url = request.nextUrl.clone();
      url.pathname = `/${legacy[1]}/${legacy[2]}`;
      url.searchParams.set("lang", "en");
      return NextResponse.redirect(url, 308);
    }

    // Privacy and terms share one address per app; the language decides which version is served
    const legal = pathname.match(/^\/([^/]+)\/(privacy|terms)\/?$/);
    if (legal) {
      const param = searchParams.get("lang");
      const lang = param === "en" || param === "no" ? param : preferredLang(request.headers.get("accept-language"));
      const url = request.nextUrl.clone();
      url.pathname = lang === "en" ? `/apps/${legal[1]}/en/${legal[2]}` : `/apps/${legal[1]}/${legal[2]}`;
      return NextResponse.rewrite(url);
    }

    // apps.bergeprod.no/<path> is served by app/apps/<path>
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? "/apps" : `/apps${pathname}`;
    return NextResponse.rewrite(url);
  }

  // Keep a single public address: bergeprod.no/apps/... -> apps.bergeprod.no/...
  if (MAIN_HOSTS.includes(host) && (pathname === "/apps" || pathname.startsWith("/apps/"))) {
    const rest = pathname.slice("/apps".length) || "/";
    return NextResponse.redirect(`https://${APPS_HOST}${rest}${request.nextUrl.search}`, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Skip Next internals and static files (anything with a file extension)
  matcher: ["/((?!_next/|.*\\..*).*)"],
};
