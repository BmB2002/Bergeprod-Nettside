import type { App, Lang, LegalBlock, LegalDoc, LegalSection } from "@/lib/apps";
import DocShell from "./apps/DocShell";
import { LangSwitch } from "./apps/LangSwitch";

const ui: Record<Lang, { short: string; toc: string; question: string; soon: string }> = {
  no: {
    short: "Kort fortalt:",
    toc: "Innhold",
    question: "Spørsmål? Kontakt oss på",
    soon: "Denne siden publiseres snart.",
  },
  en: {
    short: "In short:",
    toc: "Contents",
    question: "Questions? Contact us at",
    soon: "This page will be published soon.",
  },
};

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

function Block({ block, accent, lang }: { block: LegalBlock; accent: string; lang: Lang }) {
  switch (block.type) {
    case "p":
      return <p className={`mt-3 ${body}`}><Rich text={block.text} /></p>;
    case "short":
      return (
        <p
          className="mt-4 rounded-xl border px-4 py-3 text-[15px] leading-relaxed text-white/85"
          style={{ borderColor: `${accent}40`, background: `${accent}12` }}
        >
          <strong className="font-semibold" style={{ color: accent }}>{ui[lang].short} </strong>
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

function Section({ section, accent, lang }: { section: LegalSection; accent: string; lang: Lang }) {
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
      {section.blocks?.map((b, i) => <Block key={i} block={b} accent={accent} lang={lang} />)}
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
  kind,
  lang = "no",
}: {
  app: App;
  kind: "privacy" | "terms";
  lang?: Lang;
}) {
  const noDoc = kind === "privacy" ? app.privacy : app.terms;
  const enDoc = kind === "privacy" ? app.privacyEn : app.termsEn;

  const render = (l: Lang, doc: LegalDoc | null) => {
    if (!doc) {
      const fallback = { no: { privacy: "Personvernerklæring", terms: "Brukervilkår" }, en: { privacy: "Privacy Policy", terms: "Terms of Use" } };
      return (
        <DocShell app={app} kind={kind} lang={l} heading={fallback[l][kind]}>
          <p className="text-base text-white/60">{ui[l].soon}</p>
        </DocShell>
      );
    }
    return (
      <DocShell app={app} kind={kind} lang={l} heading={doc.heading} meta={doc.updated}>
        <LegalBody doc={doc} accent={app.accent} contactEmail={app.contactEmail} />
      </DocShell>
    );
  };

  // No English version: always Norwegian, no toggle
  if (!enDoc) return render("no", noDoc);

  return <LangSwitch initial={lang} no={render("no", noDoc)} en={render("en", enDoc)} />;
}

export function LegalBody({ doc, accent, contactEmail }: { doc: LegalDoc; accent: string; contactEmail: string }) {
  const lang = doc.lang ?? "no";
  const intro = typeof doc.intro === "string" ? [doc.intro] : doc.intro ?? [];
  const tocSections = doc.toc ? doc.sections.filter((s) => s.id) : [];
  const hasContactSection = doc.sections.some((s) => s.id === "kontakt" || s.id === "contact");
  const summaryIndex = doc.sections.findIndex((s) => s.summary);

  const toc = tocSections.length > 0 && (
    <nav aria-label={ui[lang].toc} className="rounded-[1.25rem] border border-white/[0.08] bg-black/25 p-6 sm:p-8">
      <h2 className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/45">{ui[lang].toc}</h2>
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
            <Section section={s} accent={accent} lang={lang} />
            {i === summaryIndex && toc}
          </div>
        ))}
      </div>

      {!hasContactSection && (
        <p className="mt-12 border-t border-white/[0.08] pt-8 text-[15px] text-white/60">
          {ui[lang].question}{" "}
          <a href={`mailto:${contactEmail}`} className={linkClass}>
            {contactEmail}
          </a>
        </p>
      )}
    </>
  );
}
