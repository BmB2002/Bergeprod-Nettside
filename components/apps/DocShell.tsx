import Link from "next/link";
import type { App, Lang } from "@/lib/apps";
import { AppIcon, Arrow, cardBackground, projectHref } from "./shared";

export type DocKind = "support" | "privacy" | "terms";

const labels: Record<Lang, Record<DocKind, string>> = {
  no: { support: "Support", privacy: "Personvern", terms: "Brukervilkår" },
  en: { support: "Support", privacy: "Privacy", terms: "Terms" },
};

// Norwegian pages live at /<slug>/<kind>, English at /<slug>/en/<kind>
export function docHref(app: App, kind: DocKind, lang: Lang) {
  return lang === "en" && kind !== "support" ? `/${app.slug}/en/${kind}` : `/${app.slug}/${kind}`;
}

export function hasEnglish(app: App, kind: DocKind) {
  return (kind === "privacy" && !!app.privacyEn) || (kind === "terms" && !!app.termsEn);
}

export default function DocShell({
  app,
  kind,
  lang = "no",
  heading,
  meta,
  children,
}: {
  app: App;
  kind: DocKind;
  lang?: Lang;
  heading: string;
  meta?: string;
  children: React.ReactNode;
}) {
  const name = lang === "en" && app.nameEn ? app.nameEn : app.name;
  const tabs = (["support", "privacy", "terms"] as DocKind[]).map((k) => ({
    kind: k,
    title: labels[lang][k],
    // Stay in the current language when switching tabs, if that version exists
    href: docHref(app, k, lang === "en" && hasEnglish(app, k) ? "en" : "no"),
  }));
  const toggle = hasEnglish(app, kind)
    ? (["no", "en"] as Lang[]).map((l) => ({ lang: l, href: docHref(app, kind, l) }))
    : null;

  return (
    <div className="mx-auto max-w-4xl px-4 pb-10 pt-4 md:px-8">
      <Link href={projectHref(app)} className="inline-flex items-center gap-2 px-2 text-sm text-white/55 transition-colors hover:text-white">
        <Arrow className="rotate-180" />
        {name}
      </Link>

      <header
        className="relative mt-6 overflow-hidden rounded-[1.5rem] border border-white/[0.08] p-7 sm:p-10"
        style={{ background: cardBackground(app.accent) }}
      >
        {toggle && (
          <nav
            aria-label={lang === "en" ? "Language" : "Språk"}
            className="mb-6 flex w-fit rounded-full border border-white/15 bg-black/40 p-1 text-xs font-semibold sm:absolute sm:right-8 sm:top-8 sm:mb-0"
          >
            {toggle.map((t) => (
              <Link
                key={t.lang}
                href={t.href}
                hrefLang={t.lang === "no" ? "nb" : "en"}
                aria-current={t.lang === lang ? "page" : undefined}
                className={`rounded-full px-3.5 py-1.5 tracking-wider transition-colors ${
                  t.lang === lang ? "bg-white text-black" : "text-white/60 hover:text-white"
                }`}
              >
                {t.lang.toUpperCase()}
              </Link>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-5">
          <AppIcon app={app} className="h-16 w-16 md:h-20 md:w-20" />
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.35em]" style={{ color: app.accent }}>
              {name} — {labels[lang][kind]}
            </p>
            <h1 className="mt-2 text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.05] tracking-tight">{heading}</h1>
          </div>
        </div>
        {meta && <p className="mt-6 text-sm text-white/50">{meta}</p>}
        <nav className="mt-8 flex flex-wrap gap-3">
          {tabs.map((t) => (
            <Link
              key={t.kind}
              href={t.href}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                t.kind === kind
                  ? "border-white bg-white font-semibold text-black"
                  : "border-white/15 bg-black/30 text-white/80 hover:border-white/40 hover:text-white"
              }`}
            >
              {t.title}
            </Link>
          ))}
        </nav>
      </header>

      <div
        lang={lang === "en" ? "en" : "nb"}
        className="mt-5 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.03] p-7 sm:p-10"
      >
        {children}
      </div>
    </div>
  );
}
