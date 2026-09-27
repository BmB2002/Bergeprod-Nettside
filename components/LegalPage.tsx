import Link from "next/link";
import type { App, LegalDoc } from "@/lib/apps";

export default function LegalPage({
  app,
  doc,
  fallbackHeading,
}: {
  app: App;
  doc: LegalDoc | null;
  fallbackHeading: string;
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
      <Link href="/" className="text-sm text-mute transition-colors hover:text-white">
        ← Alle apper
      </Link>

      <p className="label mt-10">{app.name}</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
        {doc?.heading ?? fallbackHeading}
      </h1>

      {doc ? (
        <>
          <p className="mt-4 text-sm text-white/40">{doc.updated}</p>
          {doc.intro && <p className="mt-8 text-base leading-relaxed text-white/70">{doc.intro}</p>}

          <div className="mt-12 space-y-10">
            {doc.sections.map((s) => (
              <section key={s.title}>
                <h2 className="text-lg font-semibold text-white">{s.title}</h2>
                {s.paragraphs?.map((p, i) => (
                  <p key={i} className="mt-3 text-base leading-relaxed text-white/65">
                    {p}
                  </p>
                ))}
                {s.items && (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-white/65 marker:text-white/30">
                    {s.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </>
      ) : (
        <p className="mt-8 text-base text-white/60">Denne siden publiseres snart.</p>
      )}

      <p className="mt-16 border-t border-line pt-8 text-base text-white/60">
        Spørsmål? Kontakt oss på{" "}
        <a href={`mailto:${app.contactEmail}`} className="text-white underline underline-offset-4">
          {app.contactEmail}
        </a>
      </p>
    </article>
  );
}
