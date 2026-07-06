"use client";

import Reveal from "./Reveal";


export default function Offerings() {
  return (
    <section id="offerings" className="border-t border-line py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Section label */}
        <Reveal>
          <p className="label mb-4">Tjenester</p>
        </Reveal>

        {/* DRONE — media left, text right — NO, text left media right */}
        <div className="mt-2 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">

          {/* Left: text */}
          <div>
            <Reveal delay={60}>
              <p className="text-[clamp(4rem,10vw,8rem)] font-black leading-none tracking-tighter text-white">
                DRONE
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-4 text-xl font-medium leading-snug text-white/90 md:text-2xl">
                Trenger du profesjonelt droneopptak?
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-4 text-base leading-relaxed text-white/50">
                Med DJI Mavic 4 Pro leverer jeg dronebilder og -video i toppklasse. Kameraet gir ekstremt skarp kvalitet og silkemyk stabilisering — perfekt for alt fra eiendom og natur til reklameproduksjon.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2.5">
                <span className="h-2 w-2 rounded-full bg-white/60" />
                <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
                  DJI Mavic 4 Pro
                </span>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <a
                href="#contact"
                className="mt-6 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-widest text-ink transition-all duration-300 hover:bg-white/80"
              >
                Ta kontakt
              </a>
            </Reveal>
          </div>

          {/* Right: drone video + drone image */}
          <div className="flex flex-col gap-5">
            <Reveal delay={100}>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <video
                  src="/dronevideo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/drone.jpg" alt="DJI Mavic 4 Pro" className="h-full w-full object-cover" />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Divider */}
        <div className="my-20 border-t border-line" />

        {/* VIDEO — media left, text right */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">

          {/* Left: video + image placeholders */}
          <div className="flex flex-col gap-5">
            <Reveal delay={100}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/fx3.jpg" alt="Sony FX3" className="h-full w-full object-cover" />
              </div>
            </Reveal>
          </div>

          {/* Right: text */}
          <div>
            <Reveal delay={60}>
              <p className="text-[clamp(4rem,10vw,8rem)] font-black leading-none tracking-tighter text-white">
                VIDEO
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-4 text-xl font-medium leading-snug text-white/90 md:text-2xl">
                Profesjonell videoproduksjon.
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-4 text-base leading-relaxed text-white/50">
                Med Sony FX3 som hovedkamera produserer jeg video med kinoestetikk og ekstraordinær bildekvalitet. Fra kortfilm til kommersielle promoer — jeg tar hånd om hele prosessen fra idé til ferdig film.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2.5">
                <span className="h-2 w-2 rounded-full bg-white/60" />
                <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
                  Sony FX3
                </span>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <a
                href="#contact"
                className="mt-6 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-widest text-ink transition-all duration-300 hover:bg-white/80"
              >
                Ta kontakt
              </a>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
