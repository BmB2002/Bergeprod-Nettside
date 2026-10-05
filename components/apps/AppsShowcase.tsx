"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { App } from "@/lib/apps";
import { AppIcon, Arrow, PlatformPills, appScreens, cardBackground, ease, fadeUp, projectHref, stagger } from "./shared";

function Hero() {
  return (
    <motion.section
      className="mx-auto max-w-7xl px-6 pb-12 pt-10 md:px-10 md:pb-14 md:pt-16"
      initial="hidden"
      animate="show"
      variants={stagger}
    >
      <motion.p variants={fadeUp} className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/50">
        App-prosjekter
      </motion.p>
      <motion.h1
        variants={fadeUp}
        className="mt-5 text-[clamp(2.75rem,6.5vw,4.5rem)] font-bold leading-[1.02] tracking-tight"
      >
        Apper jeg har
        <br />
        <span className="bg-gradient-to-r from-[#a9b1be] to-[#7d8593] bg-clip-text text-transparent">utviklet.</span>
      </motion.h1>
      <motion.p variants={fadeUp} className="mt-6 max-w-md text-lg leading-relaxed text-white/55">
        En samling av appene jeg har designet, utviklet og lansert. Fokus på enkle, nyttige verktøy og morsomme
        opplevelser.
      </motion.p>
    </motion.section>
  );
}

function AppCard({ app, index }: { app: App; index: number }) {
  const released = Boolean(app.appStoreUrl || app.googlePlayUrl);
  const phone = appScreens(app, "w-[210px] sm:w-[215px] lg:w-[215px] xl:w-[235px]")[0];

  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.9, delay: (index % 2) * 0.12, ease } },
      }}
      className="group relative overflow-hidden rounded-[1.25rem] border border-white/[0.08] transition-colors duration-500 hover:border-white/20 sm:h-[400px]"
      style={{ background: cardBackground(app.accent) }}
    >
      <div className="relative z-10 flex flex-col p-7 sm:h-full sm:max-w-[54%] sm:p-8">
        <div className="flex items-start gap-4">
          <AppIcon app={app} />
          {!released && (
            <span
              className="mt-1 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: app.accent, borderColor: `${app.accent}55`, background: `${app.accent}14` }}
            >
              Kommer snart
            </span>
          )}
        </div>
        <h2 className="mt-5 text-[1.9rem] font-bold leading-tight tracking-tight">
          <Link href={projectHref(app)}>{app.name}</Link>
        </h2>
        <p className="mt-2 text-[15px] leading-relaxed text-white/60">{app.short}</p>

        <div className="mt-5">
          <PlatformPills platforms={app.platforms} />
        </div>

        <Link
          href={projectHref(app)}
          className="mt-6 inline-flex w-fit items-center gap-3 rounded-full border border-white/80 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white hover:text-black sm:mt-auto"
        >
          Se prosjekt
          <Arrow />
        </Link>
      </div>

      {phone && (
        <motion.div
          aria-hidden
          variants={{
            hidden: { opacity: 0, y: 80, rotate: 4 },
            show: { opacity: 1, y: 0, rotate: 12, transition: { duration: 1.2, delay: 0.2 + (index % 2) * 0.12, ease } },
          }}
          className="pointer-events-none relative -mb-32 mt-2 flex justify-center sm:absolute sm:right-[7%] sm:top-6 sm:m-0"
        >
          <div className="transition-transform duration-700 ease-out group-hover:-translate-y-2">{phone}</div>
        </motion.div>
      )}
    </motion.article>
  );
}

// Placeholder cards that hint at more apps on the way
const upcoming = [
  { title: "Neste app", text: "Noe nytt er under utvikling. Mer om det snart.", accent: "#4f8cff" },
  { title: "Flere på vei", text: "Flere idéer står på tegnebrettet og blir til apper etter hvert.", accent: "#a66bff" },
];

function ComingSoonCard({ title, text, accent, index }: { title: string; text: string; accent: string; index: number }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.9, delay: (index % 2) * 0.12, ease } },
      }}
      className="relative overflow-hidden rounded-[1.25rem] border border-dashed border-white/[0.14] sm:h-[400px]"
      style={{
        background: [
          `radial-gradient(90% 80% at 88% 0%, ${accent}26 0%, transparent 62%)`,
          "linear-gradient(180deg, rgba(255,255,255,0.015) 0%, rgba(0,0,0,0.3) 100%)",
          "#121315",
        ].join(", "),
      }}
    >
      <div className="relative z-10 flex flex-col p-7 sm:h-full sm:max-w-[54%] sm:p-8">
        <div className="flex items-start gap-4">
          <div
            className="grid h-20 w-20 shrink-0 place-items-center rounded-[22%] border border-dashed md:h-24 md:w-24"
            style={{ borderColor: `${accent}55`, background: `${accent}12`, color: accent }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>
          <span
            className="mt-1 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: accent, borderColor: `${accent}55`, background: `${accent}14` }}
          >
            Kommer snart
          </span>
        </div>
        <h2 className="mt-5 text-[1.9rem] font-bold leading-tight tracking-tight text-white/85">{title}</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-white/50">{text}</p>
        <span className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-white/40 sm:mt-auto">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: accent }} />
          Under utvikling
        </span>
      </div>

      {/* Empty phone with loading bars */}
      <motion.div
        aria-hidden
        variants={{
          hidden: { opacity: 0, y: 80, rotate: 4 },
          show: { opacity: 1, y: 0, rotate: 12, transition: { duration: 1.2, delay: 0.2 + (index % 2) * 0.12, ease } },
        }}
        className="pointer-events-none relative -mb-32 mt-2 flex justify-center opacity-60 sm:absolute sm:right-[7%] sm:top-6 sm:m-0"
      >
        <div className="w-[210px] rounded-[16%/7.4%] border border-white/15 bg-white/[0.03] p-[2.4%] xl:w-[235px]">
          <div className="relative aspect-[640/1385] overflow-hidden rounded-[13%/6%] border border-white/10 bg-black/40 p-[10%] pt-[22%]">
            <div className="absolute left-1/2 top-[2%] h-[3.4%] w-[30%] -translate-x-1/2 rounded-full bg-white/10" />
            <div className="h-[9%] w-2/3 animate-pulse rounded-lg" style={{ background: `${accent}33` }} />
            <div className="mt-[8%] h-[22%] animate-pulse rounded-2xl bg-white/[0.06]" />
            <div className="mt-[8%] h-[7%] w-full animate-pulse rounded-lg bg-white/[0.06]" />
            <div className="mt-[5%] h-[7%] w-5/6 animate-pulse rounded-lg bg-white/[0.06]" />
            <div className="mt-[5%] h-[7%] w-4/6 animate-pulse rounded-lg bg-white/[0.06]" />
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function AppsShowcase({ apps }: { apps: App[] }) {
  return (
    <>
      <Hero />
      <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-10 md:px-8 lg:grid-cols-2">
        {apps.map((app, i) => (
          <AppCard key={app.slug} app={app} index={i} />
        ))}
        {upcoming.map((u, i) => (
          <ComingSoonCard key={u.title} {...u} index={apps.length + i} />
        ))}
      </section>
    </>
  );
}
