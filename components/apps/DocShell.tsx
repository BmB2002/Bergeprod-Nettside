import Link from "next/link";
import type { App } from "@/lib/apps";
import { AppIcon, Arrow, cardBackground } from "./shared";

export default function DocShell({
  app,
  label,
  heading,
  meta,
  children,
}: {
  app: App;
  label: string;
  heading: string;
  meta?: string;
  children: React.ReactNode;
}) {
  const tabs = [
    { title: "Support", href: `/${app.slug}/support` },
    { title: "Personvern", href: `/${app.slug}/privacy` },
    { title: "Brukervilkår", href: `/${app.slug}/terms` },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 pb-10 pt-4 md:px-8">
      <Link href={`/${app.slug}`} className="inline-flex items-center gap-2 px-2 text-sm text-white/55 transition-colors hover:text-white">
        <Arrow className="rotate-180" />
        {app.name}
      </Link>

      <header
        className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/[0.08] p-7 sm:p-10"
        style={{ background: cardBackground(app.accent) }}
      >
        <div className="flex items-center gap-5">
          <AppIcon app={app} className="h-16 w-16 md:h-20 md:w-20" />
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.35em]" style={{ color: app.accent }}>
              {app.name} — {label}
            </p>
            <h1 className="mt-2 text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.05] tracking-tight">{heading}</h1>
          </div>
        </div>
        {meta && <p className="mt-6 text-sm text-white/50">{meta}</p>}
        <nav className="mt-8 flex flex-wrap gap-3">
          {tabs.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                t.title === label
                  ? "border-white bg-white font-semibold text-black"
                  : "border-white/15 bg-black/30 text-white/80 hover:border-white/40 hover:text-white"
              }`}
            >
              {t.title}
            </Link>
          ))}
        </nav>
      </header>

      <div className="mt-5 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.03] p-7 sm:p-10">{children}</div>
    </div>
  );
}
