import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DocShell from "@/components/apps/DocShell";
import { Arrow } from "@/components/apps/shared";
import { apps, getApp } from "@/lib/apps";

export function generateStaticParams() {
  return apps.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const app = getApp((await params).slug);
  return { title: app ? `Support — ${app.name}` : "Support" };
}

export default async function SupportPage({ params }: { params: Promise<{ slug: string }> }) {
  const app = getApp((await params).slug);
  if (!app) notFound();
  const { support } = app;

  return (
    <DocShell app={app} kind="support" heading="Hvordan kan vi hjelpe?">
      <p className="text-base leading-relaxed text-(color:--doc-text) md:text-[17px]">{support.intro}</p>

      <div className={`mt-8 grid gap-4 ${support.channels.length > 1 ? "sm:grid-cols-2" : ""}`}>
        {support.channels.map((c) => (
          <a
            key={c.title}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group flex flex-col rounded-[1.25rem] border border-(color:--doc-line) bg-(color:--doc-inset) p-6 transition-colors hover:border-(color:--doc-hover-line)"
          >
            <span className="flex items-center justify-between text-lg font-semibold">
              {c.title}
              <Arrow className="-rotate-45 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
            <span className="mt-2 text-sm leading-relaxed text-(color:--doc-soft)">{c.description}</span>
            <span className="mt-5 text-[15px] font-medium" style={{ color: app.accent }}>
              {c.label}
            </span>
          </a>
        ))}
      </div>

      <h2 className="mt-14 text-[11px] font-medium uppercase tracking-[0.35em] text-(color:--doc-muted)">Ofte stilte spørsmål</h2>
      <div className="mt-5 divide-y divide-(color:--doc-line) border-y border-(color:--doc-line)">
        {support.faq.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium text-(color:--doc-fg) [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="text-xl leading-none text-(color:--doc-muted) transition-transform duration-300 group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 pr-10 text-[15px] leading-relaxed text-(color:--doc-soft)">{f.a}</p>
          </details>
        ))}
      </div>
    </DocShell>
  );
}
