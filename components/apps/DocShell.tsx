import Link from "next/link";
import type { App, Lang } from "@/lib/apps";
import { AppIcon, Arrow, cardBackground, projectHref } from "./shared";
import BergeShell from "./BergeShell";
import { LangToggle } from "./LangSwitch";
import { MbShell, display } from "./minbelonning/Chrome";

export type DocKind = "support" | "privacy" | "terms";

const labels: Record<Lang, Record<DocKind, string>> = {
  no: { support: "Support", privacy: "Personvern", terms: "Brukervilkår" },
  en: { support: "Support", privacy: "Privacy", terms: "Terms" },
};

// One address per page. ?lang keeps the chosen language when moving between privacy and terms.
function docHref(app: App, kind: DocKind, lang: Lang) {
  return hasEnglish(app, kind) ? `/${app.slug}/${kind}?lang=${lang}` : `/${app.slug}/${kind}`;
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
    href: docHref(app, k, lang),
  }));

  const light = Boolean(app.lightTheme);

  const page = (
    <div className="mx-auto max-w-4xl px-4 pb-10 pt-4 md:px-8">
      <Link href={projectHref(app)} className="inline-flex items-center gap-2 px-2 text-sm text-(color:--doc-soft) transition-colors hover:text-(color:--doc-fg)">
        <Arrow className="rotate-180" />
        {name}
      </Link>

      <header
        className="relative mt-6 overflow-hidden rounded-[1.5rem] border border-(color:--doc-line) p-7 sm:p-10"
        style={{
          background: light
            ? `radial-gradient(80% 90% at 100% 0%, ${app.accent}1f 0%, transparent 60%), linear-gradient(135deg, #fff8e6 0%, #ffffff 100%)`
            : cardBackground(app.accent),
        }}
      >
        {hasEnglish(app, kind) && <LangToggle current={lang} />}

        <div className="flex items-center gap-5">
          <AppIcon app={app} className="h-16 w-16 md:h-20 md:w-20" />
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.35em]" style={{ color: app.accent }}>
              {name} — {labels[lang][kind]}
            </p>
            <h1 className={`mt-2 text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.05] tracking-tight ${light ? display.className : ""}`}>{heading}</h1>
          </div>
        </div>
        {meta && <p className="mt-6 text-sm text-(color:--doc-muted)">{meta}</p>}
        <nav className="mt-8 flex flex-wrap gap-3">
          {tabs.map((t) => (
            <Link
              key={t.kind}
              href={t.href}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                t.kind === kind
                  ? "border-(color:--doc-active-bg) bg-(color:--doc-active-bg) font-semibold text-(color:--doc-active-fg)"
                  : "border-(color:--doc-line-strong) bg-(color:--doc-chip) text-(color:--doc-text) hover:border-(color:--doc-hover-line) hover:text-(color:--doc-fg)"
              }`}
            >
              {t.title}
            </Link>
          ))}
        </nav>
      </header>

      <div
        lang={lang === "en" ? "en" : "nb"}
        className="mt-5 rounded-[1.5rem] border border-(color:--doc-line) bg-(color:--doc-panel) p-7 sm:p-10"
      >
        {children}
      </div>
    </div>
  );

  return light ? <MbShell app={app}>{page}</MbShell> : <BergeShell>{page}</BergeShell>;
}
