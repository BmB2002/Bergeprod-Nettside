"use client";

import Reveal from "./Reveal";

const websites = [
  {
    title: "Donk",
    description: "[Beskrivelse av nettsiden — hva den gjør, hvem den er laget for, og hvilke teknologier som ble brukt.]",
    url: "https://www.donkapp.no/",
    label: "Besøk donkapp.no",
    image: "/donkweb.png",
  },
  {
    title: "Solglimt Omsorg",
    description: "En omsorgstjeneste i Ålesund som tilbyr profesjonelle tjenester for eldre. Nettstedet presenterer tjenestene deres og gjør det enkelt for familier å få kontakt.",
    url: "https://solglimtomsorg.no",
    label: "Kommer snart",
    image: "/solglimt.png",
    comingSoon: true,
  },
];

function BrowserFrame({ image, title, url }: { image: string | null; title: string; url: string }) {
  const domain = url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-ink-soft">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-white/8 bg-white/5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <div className="ml-3 flex-1 rounded-full bg-white/8 px-3 py-1 text-[10px] text-white/25 tracking-wide">
          {domain}
        </div>
      </div>
      {/* Preview */}
      <div className="relative aspect-[16/10]">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={title} className="h-full w-full object-cover object-top" />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-white/20">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
            <p className="text-xs uppercase tracking-widest">Forhåndsvisning</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function WebDesigns() {
  return (
    <section id="web" className="border-t border-line py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        <Reveal>
          <p className="label mb-4">Tjenester</p>
          <p className="text-[clamp(3rem,7vw,6rem)] font-black leading-none tracking-tighter text-white">
            WEBUTVIKLING
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {websites.map((site, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="flex flex-col gap-6">
                <BrowserFrame image={site.image} title={site.title} url={site.url} />
                <div>
                  <h3 className="text-xl font-semibold text-white">{site.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">{site.description}</p>
                  {site.comingSoon ? (
                    <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-2.5 text-sm text-white/50">
                      {site.label}
                    </div>
                  ) : (
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-2.5 text-sm text-white/70 transition-all hover:border-white/50 hover:text-white"
                    >
                      {site.label}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-8">
          <a
            href="#contact"
            className="inline-block rounded-full bg-white px-10 py-3.5 text-sm font-semibold uppercase tracking-widest text-ink transition-all duration-300 hover:bg-white/80"
          >
            Ta kontakt
          </a>
        </Reveal>

      </div>
    </section>
  );
}
