import type { App, LegalBlock, LegalDoc, LegalSection } from "@/lib/apps";
import DocShell from "./apps/DocShell";

const linkClass = "text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white";

// Renders **bold** and [label](href) inside a plain string
function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) return <strong key={i} className="font-semibold text-white">{bold[1]}</strong>;
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const external = link[2].startsWith("http");
          return (
            <a
              key={i}
              href={link[2]}
              className={linkClass}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link[1]}
            </a>
          );
        }
        return part;
      })}
    </>
  );
}

const body = "text-[15px] leading-relaxed text-white/65 md:text-base";

function Block({ block, accent }: { block: LegalBlock; accent: string }) {
  switch (block.type) {
    case "p":
      return <p className={`mt-3 ${body}`}><Rich text={block.text} /></p>;
    case "short":
      return (
        <p
          className="mt-4 rounded-xl border px-4 py-3 text-[15px] leading-relaxed text-white/85"
          style={{ borderColor: `${accent}40`, background: `${accent}12` }}
        >
          <strong className="font-semibold" style={{ color: accent }}>Kort fortalt: </strong>
          <Rich text={block.text} />
        </p>
      );
    case "ul":
      return (
        <ul className={`mt-3 list-disc space-y-2 pl-5 marker:text-white/30 ${body}`}>
          {block.items.map((item, i) => (
            <li key={i}><Rich text={item} /></li>
          ))}
        </ul>
      );
    case "h3":
      return (
        <h3 id={block.id} className="mt-8 scroll-mt-8 text-base font-semibold text-white md:text-[17px]">
          {block.text}
        </h3>
      );
    case "table":
      return (
        <div className="mt-4 overflow-x-auto rounded-xl border border-white/[0.08]">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm leading-relaxed">
            <thead>
              <tr className="bg-white/[0.05]">
                {block.head.map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold text-white">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-t border-white/[0.06] align-top">
                  {row.map((cell, c) => (
                    <td key={c} className="px-4 py-3 text-white/65"><Rich text={cell} /></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "address":
      return (
        <address className={`mt-4 not-italic ${body}`}>
          {block.lines.map((line, i) => (
            <span key={i} className="block"><Rich text={line} /></span>
          ))}
        </address>
      );
    case "qa":
      return (
        <dl className="mt-4 space-y-4">
          {block.items.map((item) => (
            <div key={item.q}>
              <dt className="text-[15px] font-semibold text-white md:text-base">{item.q}</dt>
              <dd className={`mt-1 ${body}`}><Rich text={item.a} /></dd>
            </div>
          ))}
        </dl>
      );
  }
}

function Section({ section, accent }: { section: LegalSection; accent: string }) {
  const content = (
    <>
      <h2 className="text-lg font-semibold text-white md:text-xl">{section.title}</h2>
      {section.paragraphs?.map((p, i) => (
        <p key={i} className={`mt-3 ${body}`}><Rich text={p} /></p>
      ))}
      {section.items && (
        <ul className={`mt-3 list-disc space-y-2 pl-5 marker:text-white/30 ${body}`}>
          {section.items.map((item, i) => (
            <li key={i}><Rich text={item} /></li>
          ))}
        </ul>
      )}
      {section.blocks?.map((b, i) => <Block key={i} block={b} accent={accent} />)}
    </>
  );

  if (section.summary) {
    return (
      <section
        className="rounded-[1.25rem] border p-6 sm:p-8"
        style={{ borderColor: `${accent}33`, background: `linear-gradient(160deg, ${accent}1a, transparent 70%)` }}
      >
        {content}
      </section>
    );
  }
  return (
    <section id={section.id} className="scroll-mt-8">
      {content}
    </section>
  );
}

export default function LegalPage({
  app,
  doc,
  label,
  fallbackHeading,
}: {
  app: App;
  doc: LegalDoc | null;
  label: "Personvern" | "Brukervilkår";
  fallbackHeading: string;
}) {
  if (!doc) {
    return (
      <DocShell app={app} label={label} heading={fallbackHeading}>
        <p className="text-base text-white/60">Denne siden publiseres snart.</p>
      </DocShell>
    );
  }

  return (
    <DocShell app={app} label={label} heading={doc.heading} meta={doc.updated}>
      <LegalBody doc={doc} accent={app.accent} contactEmail={app.contactEmail} />
    </DocShell>
  );
}

export function LegalBody({ doc, accent, contactEmail }: { doc: LegalDoc; accent: string; contactEmail: string }) {
  const intro = typeof doc.intro === "string" ? [doc.intro] : doc.intro ?? [];
  const tocSections = doc.toc ? doc.sections.filter((s) => s.id) : [];
  const hasContactSection = doc.sections.some((s) => s.id === "kontakt");
  const summaryIndex = doc.sections.findIndex((s) => s.summary);

  const toc = tocSections.length > 0 && (
    <nav aria-label="Innhold" className="rounded-[1.25rem] border border-white/[0.08] bg-black/25 p-6 sm:p-8">
      <h2 className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/45">Innhold</h2>
      <ol className="mt-5 grid gap-x-8 gap-y-2 text-[15px] sm:grid-cols-2">
        {tocSections.map((t) => (
          <li key={t.id}>
            <a href={`#${t.id}`} className="text-white/75 transition-colors hover:text-white">
              {t.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );

  return (
    <>
      {intro.map((p, i) => (
        <p key={i} className={`text-base leading-relaxed text-white/75 md:text-[17px] ${i ? "mt-4" : ""}`}>
          <Rich text={p} />
        </p>
      ))}

      <div className={`space-y-12 ${intro.length ? "mt-10" : ""}`}>
        {summaryIndex === -1 && toc}
        {doc.sections.map((s, i) => (
          <div key={s.title} className="space-y-12">
            <Section section={s} accent={accent} />
            {i === summaryIndex && toc}
          </div>
        ))}
      </div>

      {!hasContactSection && (
        <p className="mt-12 border-t border-white/[0.08] pt-8 text-[15px] text-white/60">
          Spørsmål? Kontakt oss på{" "}
          <a href={`mailto:${contactEmail}`} className={linkClass}>
            {contactEmail}
          </a>
        </p>
      )}
    </>
  );
}
