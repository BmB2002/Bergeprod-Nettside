"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { App } from "@/lib/apps";
import { AppIcon, Arrow, PlatformPills, appScreens, cardBackground, ease, fadeUp, stagger } from "./shared";

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
          <Link href={`/${app.slug}`}>{app.name}</Link>
        </h2>
        <p className="mt-2 text-[15px] leading-relaxed text-white/60">{app.short}</p>

        <div className="mt-5">
          <PlatformPills platforms={app.platforms} />
        </div>

        <Link
          href={`/${app.slug}`}
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

export default function AppsShowcase({ apps }: { apps: App[] }) {
  return (
    <>
      <Hero />
      <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-10 md:px-8 lg:grid-cols-2">
        {apps.map((app, i) => (
          <AppCard key={app.slug} app={app} index={i} />
        ))}
      </section>
    </>
  );
}
