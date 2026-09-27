"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import type { App } from "@/lib/apps";
import StoreBadge from "@/components/StoreBadge";
import PhoneFrame from "./PhoneFrame";
import { ChildScreen, MinBelonningIcon, ParentScreen } from "./MinBelonningPreview";

const ease = [0.22, 1, 0.36, 1] as const;

const generatedScreens: Record<string, React.ReactNode[]> = {
  minbelonning: [<ChildScreen key="child" />, <ParentScreen key="parent" />],
};

const generatedIcons: Record<string, React.ReactNode> = {
  minbelonning: <MinBelonningIcon />,
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

function Hero({ apps }: { apps: App[] }) {
  const letters = "APPS".split("");
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-32">
      <motion.p
        className="label"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
      >
        Portefølje — {String(apps.length).padStart(2, "0")} apper
      </motion.p>

      <h1 className="mt-4 flex overflow-hidden text-[clamp(4.5rem,18vw,15rem)] font-black leading-[0.85] tracking-tighter">
        {letters.map((l, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.15 + i * 0.07, ease }}
          >
            {l}
          </motion.span>
        ))}
      </h1>

      <motion.div
        className="mt-10 grid gap-10 md:grid-cols-2 md:items-end"
        initial="hidden"
        animate="show"
        variants={stagger}
      >
        <motion.p variants={fadeUp} className="max-w-md text-lg leading-relaxed text-white/60 md:text-xl">
          Apper jeg har designet og utviklet — fra idé og design til ferdig app i App Store og Google Play.
        </motion.p>

        <motion.ul variants={stagger} className="flex flex-col border-t border-line">
          {apps.map((app, i) => (
            <motion.li key={app.slug} variants={fadeUp}>
              <a
                href={`#${app.slug}`}
                className="group flex items-center justify-between border-b border-line py-4 transition-colors hover:text-white"
              >
                <span className="flex items-baseline gap-5">
                  <span className="text-xs tabular-nums text-mute">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-xl font-semibold text-white/80 transition-colors group-hover:text-white">
                    {app.name}
                  </span>
                </span>
                <span className="text-sm text-mute transition-transform duration-300 group-hover:translate-y-0.5">
                  {app.category} ↓
                </span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}

function AppIcon({ app }: { app: App }) {
  return (
    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-[22%] ring-1 ring-white/10 md:h-20 md:w-20">
      {app.icon ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={app.icon} alt={`${app.name} ikon`} className="h-full w-full object-cover" />
      ) : (
        generatedIcons[app.slug]
      )}
    </div>
  );
}

function Phones({ app }: { app: App }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const backY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [50, -50]);
  const frontY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [110, -110]);

  const screens = app.screenshots.length
    ? app.screenshots.slice(0, 2).map((src, i) => <PhoneFrame key={src} image={src} alt={`${app.name} skjermbilde ${i + 1}`} />)
    : (generatedScreens[app.slug] ?? []).map((screen, i) => <PhoneFrame key={i}>{screen}</PhoneFrame>);

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center overflow-hidden rounded-[2rem] border border-line px-4 py-16 md:py-24"
      style={{ background: `linear-gradient(160deg, ${app.accent}1f 0%, transparent 55%), #0e0e0e` }}
    >
      <div className="flex items-end gap-4 sm:gap-6 md:gap-8">
        {screens.map((phone, i) => (
          <motion.div key={i} style={{ y: i === 0 ? backY : frontY }} className={i === 1 ? "mb-10 md:mb-16" : ""}>
            <motion.div
              initial={{ opacity: 0, y: 90, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: 6 }}
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 1.1, delay: 0.15 + i * 0.15, ease }}
            >
              {phone}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AppSection({ app, index }: { app: App; index: number }) {
  const flip = index % 2 === 1;
  const released = Boolean(app.appStoreUrl || app.googlePlayUrl);

  return (
    <section id={app.slug} className="scroll-mt-16 border-t border-line py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 md:px-10 lg:grid-cols-2 lg:gap-20">
        <motion.div
          className={flip ? "lg:order-2" : ""}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -120px 0px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="text-sm tabular-nums text-mute">{String(index + 1).padStart(2, "0")}</span>
            <span className="h-px w-10 bg-line" />
            <span className="label" style={{ color: app.accent }}>
              {app.category}
            </span>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-5">
            <AppIcon app={app} />
            <div>
              <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-none tracking-tighter">{app.name}</h2>
              <p className="mt-2 text-base text-white/45 md:text-lg">{app.tagline}</p>
            </div>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-8 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
            {app.description}
          </motion.p>

          <motion.ul variants={stagger} className="mt-8 flex flex-col gap-3">
            {app.features.map((f) => (
              <motion.li key={f} variants={fadeUp} className="flex items-start gap-3 text-sm text-white/70 md:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: app.accent }} />
                {f}
              </motion.li>
            ))}
          </motion.ul>

          <motion.dl variants={fadeUp} className="mt-10 grid grid-cols-3 divide-x divide-line border-y border-line">
            {app.stats.map((s) => (
              <div key={s.label} className="px-3 py-4 first:pl-0">
                <dt className="text-[10px] uppercase tracking-[0.2em] text-mute">{s.label}</dt>
                <dd className="mt-1 text-sm font-semibold text-white md:text-base">{s.value}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            {app.appStoreUrl && <StoreBadge store="apple" url={app.appStoreUrl} />}
            {app.googlePlayUrl && <StoreBadge store="google" url={app.googlePlayUrl} />}
            {!released && (
              <span className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold">
                <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: app.accent }} />
                Kommer snart til App Store og Google Play
              </span>
            )}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            {app.website && (
              <a
                href={app.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 transition-colors hover:text-white"
              >
                {app.website.replace(/^https?:\/\/(www\.)?/, "")} ↗
              </a>
            )}
            <Link href={`/${app.slug}/privacy`} className="text-white/45 underline-offset-4 transition-colors hover:text-white hover:underline">
              Personvern
            </Link>
            <Link href={`/${app.slug}/terms`} className="text-white/45 underline-offset-4 transition-colors hover:text-white hover:underline">
              Brukervilkår
            </Link>
          </motion.div>
        </motion.div>

        <div className={flip ? "lg:order-1" : ""}>
          <Phones app={app} />
        </div>
      </div>
    </section>
  );
}

export default function AppsShowcase({ apps }: { apps: App[] }) {
  return (
    <>
      <Hero apps={apps} />
      {apps.map((app, i) => (
        <AppSection key={app.slug} app={app} index={i} />
      ))}
      <section className="border-t border-line py-24 text-center md:py-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="mx-auto max-w-2xl px-6"
        >
          <motion.p variants={fadeUp} className="label">Kontakt</motion.p>
          <motion.p variants={fadeUp} className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight tracking-tighter">
            Spørsmål om appene?
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="mailto:kontakt.bergemedia@gmail.com"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-white/80"
          >
            Send e-post
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}
