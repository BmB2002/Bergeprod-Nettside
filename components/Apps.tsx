"use client";

import Reveal from "./Reveal";

const app = {
  name: "Dønk",
  tagline: "Den ultimate festappen",
  description: "Dønk er en festapp tilgjengelig på både App Store og Google Play. Appen er laget for å gjøre fester morsommere og mer engasjerende — og har blitt en suksess i Norge.",
  appStoreUrl: "https://apps.apple.com/no/app/d%C3%B8nk/id6762613600?l=nb",
  googlePlayUrl: "https://play.google.com/store/apps/details?id=com.bjorn.dronk",
  screenshots: ["/donk1.PNG", "/donk2.jpg"],
};

function PhoneFrame({ image }: { image: string | null }) {
  return (
    <div className="relative w-44 shrink-0 overflow-hidden rounded-[2rem] border border-white/15 bg-ink-soft shadow-2xl md:w-56">
      {/* Phone notch */}
      <div className="flex justify-center py-2">
        <div className="h-1.5 w-12 rounded-full bg-white/15" />
      </div>
      {/* Screen */}
      <div className="relative aspect-[9/19]">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt="App screenshot" className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-white/20">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <line x1="12" y1="18" x2="12" y2="18.01" />
            </svg>
            <p className="text-[10px] uppercase tracking-widest">Skjermbilde</p>
          </div>
        )}
      </div>
      {/* Home bar */}
      <div className="flex justify-center py-2.5">
        <div className="h-1 w-10 rounded-full bg-white/15" />
      </div>
    </div>
  );
}

function StoreBadge({ store, url }: { store: "apple" | "google"; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-5 py-3 transition-all hover:border-white/30 hover:bg-white/10"
    >
      {store === "apple" ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
          <path d="M3.18 23.76c.3.17.65.19.96.07l12.45-7.2-2.78-2.78-10.63 9.91zM.48 1.1C.18 1.42 0 1.9 0 2.53v18.94c0 .63.18 1.11.48 1.43l.08.07 10.61-10.61v-.25L.56 1.03l-.08.07zM20.93 10.03l-2.99-1.73-3.1 3.1 3.1 3.1 3.01-1.74c.86-.5.86-1.3-.02-1.73zM3.18.24L15.63 7.44l-2.78 2.78L2.22.31c.3-.12.66-.1.96.07v-.14z" />
        </svg>
      )}
      <div>
        <p className="text-[9px] uppercase tracking-widest text-white/40">
          {store === "apple" ? "Last ned på" : "Få den på"}
        </p>
        <p className="text-sm font-semibold text-white">
          {store === "apple" ? "App Store" : "Google Play"}
        </p>
      </div>
    </a>
  );
}

export default function Apps() {
  return (
    <section id="apps" className="border-t border-line py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        <Reveal>
          <p className="label mb-4">Tjenester</p>
          <p className="text-[clamp(3rem,7vw,6rem)] font-black leading-none tracking-tighter text-white">
            APPUTVIKLING
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left: info */}
          <div>
            <Reveal delay={60}>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                {app.name}
              </h2>
              <p className="mt-2 text-lg text-white/40">{app.tagline}</p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-base leading-relaxed text-white/50">
                {app.description}
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 flex flex-wrap gap-4">
                <StoreBadge store="apple" url={app.appStoreUrl} />
                <StoreBadge store="google" url={app.googlePlayUrl} />
              </div>
            </Reveal>
            <Reveal delay={240}>
              <a
                href="#contact"
                className="mt-8 inline-block rounded-full bg-white px-10 py-3.5 text-sm font-semibold uppercase tracking-widest text-ink transition-all duration-300 hover:bg-white/80"
              >
                Ta kontakt
              </a>
            </Reveal>
          </div>

          {/* Right: phone screenshots */}
          <Reveal delay={100}>
            <div className="flex items-end justify-center gap-6 md:gap-8">
              {app.screenshots.map((img, i) => (
                <div
                  key={i}
                  style={{
                    transform: `rotate(6deg) translateY(${i === 1 ? -28 : 0}px)`,
                  }}
                >
                  <PhoneFrame image={img} />
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
