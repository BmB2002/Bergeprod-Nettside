import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const APPS_HOST = "apps.bergeprod.no";
const MAIN_HOSTS = ["bergeprod.no", "www.bergeprod.no"];

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").split(":")[0];
  const { pathname } = request.nextUrl;

  // apps.bergeprod.no/<path> is served by app/apps/<path>
  if (host.startsWith("apps.")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? "/apps" : `/apps${pathname}`;
    return NextResponse.rewrite(url);
  }

  // Keep a single public address: bergeprod.no/apps/... -> apps.bergeprod.no/...
  if (MAIN_HOSTS.includes(host) && (pathname === "/apps" || pathname.startsWith("/apps/"))) {
    const rest = pathname.slice("/apps".length) || "/";
    return NextResponse.redirect(`https://${APPS_HOST}${rest}`, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Skip Next internals and static files (anything with a file extension)
  matcher: ["/((?!_next/|.*\\..*).*)"],
};
