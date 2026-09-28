"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { App } from "@/lib/apps";
import StoreBadge from "@/components/StoreBadge";
import { AppIcon, Arrow, PlatformPills, appScreens, cardBackground, ease, fadeUp, stagger } from "./shared";

export default function AppDetail({ app }: { app: App }) {
  const released = Boolean(app.appStoreUrl || app.googlePlayUrl);
  const phones = appScreens(app, "w-[145px] sm:w-[230px] lg:w-[260px]").slice(0, 2);
  const gallery = appScreens(app, "w-[170px] sm:w-[190px] lg:w-[200px]");
  const stores = [
    app.platforms.includes("ios") && "App Store",
    app.platforms.includes("android") && "Google Play",
  ]
    .filter(Boolean)
    .join(" og ");

  const links = [
    { title: "Support", text: "Få hjelp, meld fra om feil eller send et forslag.", href: `/${app.slug}/support` },
    { title: "Personvern", text: "Hvilke data appen samler inn og hvorfor.", href: `/${app.slug}/privacy` },
    { title: "Brukervilkår", text: "Vilkårene for å bruke appen.", href: `/${app.slug}/terms` },
    ...(app.website
      ? [{ title: "Nettside", text: app.website.replace(/^https?:\/\/(www\.)?/, ""), href: app.website, external: true }]
      : []),
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 pb-10 pt-4 md:px-8">
      <Link href="/" className="inline-flex items-center gap-2 px-2 text-sm text-white/55 transition-colors hover:text-white">
        <Arrow className="rotate-180" />
        Alle prosjekter
      </Link>

      <section
        className="relative mt-6 overflow-hidden rounded-[1.5rem] border border-white/[0.08] lg:min-h-[560px]"
        style={{ background: cardBackground(app.accent) }}
      >
        <motion.div
          className="relative z-10 p-7 sm:p-10 lg:max-w-[52%] lg:p-12"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <AppIcon app={app} className="h-24 w-24 md:h-28 md:w-28" />
          </motion.div>
          <motion.p variants={fadeUp} className="mt-7 text-[11px] font-medium uppercase tracking-[0.35em]" style={{ color: app.accent }}>
            {app.category}
          </motion.p>
          {app.logo ? (
            <motion.h1 variants={fadeUp} className="mt-4">
              <span className="sr-only">{app.name}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={app.logo} alt="" className="h-20 w-auto max-w-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] md:h-24" />
            </motion.h1>
          ) : (
            <motion.h1 variants={fadeUp} className="mt-3 text-[clamp(2.5rem,5.5vw,4rem)] font-bold leading-[1.02] tracking-tight">
              {app.name}
            </motion.h1>
          )}
          <motion.p variants={fadeUp} className="mt-3 text-lg text-white/55">
            {app.tagline}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-[17px]">
            {app.description}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-7">
            <PlatformPills platforms={app.platforms} />
          </motion.div>
          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-4">
            {app.appStoreUrl && <StoreBadge store="apple" url={app.appStoreUrl} />}
            {app.googlePlayUrl && <StoreBadge store="google" url={app.googlePlayUrl} />}
            {!released && (
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-5 py-3 text-sm font-semibold">
                <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: app.accent }} />
                Kommer snart til {stores}
              </span>
            )}
          </motion.div>
        </motion.div>

        <div className="pointer-events-none relative -mb-40 flex justify-center gap-4 px-4 sm:gap-6 lg:absolute lg:bottom-0 lg:right-[3%] lg:top-10 lg:mb-0 lg:items-start">
          {phones.map((phone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100, rotate: 4 }}
              animate={{ opacity: 1, y: 0, rotate: 12 }}
              transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease }}
              className={i === 1 ? "mt-16 lg:mt-24" : ""}
            >
              {phone}
            </motion.div>
          ))}
        </div>
      </section>

      {app.about && (
        <motion.section
          className="mt-5 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.03] p-7 sm:p-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -60px 0px" }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/45">
            Om appen
          </motion.p>
          {app.about.paragraphs.map((p) => (
            <motion.p key={p} variants={fadeUp} className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
              {p}
            </motion.p>
          ))}
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {app.about.sections.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="rounded-[1.25rem] border border-white/[0.06] bg-black/25 p-6 sm:p-7 md:[&:nth-child(odd):last-child]:col-span-2 md:[&:nth-child(odd):last-child_ul]:columns-2 md:[&:nth-child(odd):last-child_ul]:gap-10"
              >
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: app.accent }}>
                  {s.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-white/75">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: app.accent }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          {app.about.note && (
            <motion.p variants={fadeUp} className="mt-8 max-w-3xl text-sm leading-relaxed text-white/45">
              {app.about.note}
            </motion.p>
          )}
        </motion.section>
      )}

      {app.screenshots.length > 2 && (
        <motion.section
          className="mt-5 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.03] py-7 sm:py-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -60px 0px" }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="px-7 text-[11px] font-medium uppercase tracking-[0.35em] text-white/45 sm:px-10">
            Skjermbilder
          </motion.p>
          <div className="mt-8 flex snap-x gap-5 overflow-x-auto px-7 pb-4 sm:px-10 lg:justify-center">
            {gallery.map((phone, i) => (
              <motion.div key={i} variants={fadeUp} className="shrink-0 snap-center">
                {phone}
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      <motion.section
        className={`mt-5 grid gap-5 ${app.about ? "" : "md:grid-cols-2"}`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -60px 0px" }}
        variants={stagger}
      >
        {!app.about && (
          <motion.div variants={fadeUp} className="rounded-[1.25rem] border border-white/[0.08] bg-white/[0.03] p-7 sm:p-9">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/45">Funksjoner</p>
            <ul className="mt-6 space-y-4">
              {app.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[15px] leading-relaxed text-white/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: app.accent }} />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
        <motion.dl variants={fadeUp} className="grid grid-cols-1 gap-px overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3">
          {app.stats.map((s) => (
            <div key={s.label} className="flex flex-col justify-between gap-8 bg-[#111214] p-7">
              <dt className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/45">{s.label}</dt>
              <dd className="text-2xl font-semibold leading-tight">{s.value}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.section>

      <motion.section
        className={`mt-5 grid gap-5 sm:grid-cols-2 ${links.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -60px 0px" }}
        variants={stagger}
      >
        {links.map((l) => {
          const external = "external" in l && l.external;
          const Tag = external ? "a" : Link;
          return (
            <motion.div key={l.title} variants={fadeUp}>
              <Tag
                href={l.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex h-full flex-col rounded-[1.25rem] border border-white/[0.08] bg-white/[0.03] p-7 transition-colors hover:border-white/25 hover:bg-white/[0.05]"
              >
                <span className="flex items-center justify-between text-lg font-semibold">
                  {l.title}
                  <Arrow className={`transition-transform duration-300 ${external ? "-rotate-45" : ""} group-hover:translate-x-1`} />
                </span>
                <span className="mt-2 text-sm leading-relaxed text-white/50">{l.text}</span>
              </Tag>
            </motion.div>
          );
        })}
      </motion.section>
    </div>
  );
}
