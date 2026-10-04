"use client";

import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";
import type { App } from "@/lib/apps";
import StoreBadge from "@/components/StoreBadge";
import PhoneFrame from "./PhoneFrame";
import { Coin, Icon, IconTile, Star } from "./Decor";
import { AppIcon, Arrow, appScreens, ease, fadeUp, stagger } from "./shared";

const inView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: "0px 0px -60px 0px" },
  variants: stagger,
} as const;

// Slow bob for the coins and stars around the hero phones
function Float({ className, delay = 0, children }: { className: string; delay?: number; children: React.ReactNode }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
      transition={{
        opacity: { duration: 0.8, delay: 0.6 + delay },
        scale: { duration: 0.8, delay: 0.6 + delay, ease },
        y: { duration: 5, delay, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      {children}
    </motion.div>
  );
}

export default function AppDetail({ app }: { app: App }) {
  const released = Boolean(app.appStoreUrl || app.googlePlayUrl);
  const [front, back] = app.heroScreenshots ?? app.screenshots;
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
    <MotionConfig reducedMotion="user">
      <div className="overflow-x-clip">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-2 md:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white">
            <Arrow className="rotate-180" />
            Alle prosjekter
          </Link>

          {/* Hero */}
          <section className="mt-6 grid items-center gap-y-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-x-6">
            <motion.div initial="hidden" animate="show" variants={stagger} className="relative z-10">
              <motion.div variants={fadeUp} className="flex items-start gap-5">
                <AppIcon app={app} className="h-20 w-20 md:h-24 md:w-24" />
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.35em]" style={{ color: app.accent }}>
                  {app.category}
                </p>
              </motion.div>
              {app.logo ? (
                <motion.div variants={fadeUp} className="mt-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={app.logo}
                    alt={app.name}
                    className="w-[300px] max-w-full drop-shadow-[0_14px_30px_rgba(0,0,0,0.55)] md:w-[360px]"
                  />
                </motion.div>
              ) : (
                <motion.p variants={fadeUp} className="mt-5 text-[clamp(2.5rem,5.5vw,4rem)] font-bold leading-[1.02] tracking-tight">
                  {app.name}
                </motion.p>
              )}
              <motion.h1
                variants={fadeUp}
                className="mt-6 max-w-lg text-[clamp(1.9rem,3.6vw,2.6rem)] font-extrabold leading-[1.1] tracking-tight"
              >
                {app.tagline}
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-[17px]">
                {app.description}
              </motion.p>
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
              {app.highlights && (
                <motion.ul variants={fadeUp} className="mt-9 grid max-w-xl grid-cols-4 gap-2">
                  {app.highlights.map((h) => (
                    <li key={h.label} className="flex flex-col items-center gap-2 text-center text-[12px] font-medium leading-tight text-white/80 sm:text-[13px]">
                      <Icon name={h.icon} color={h.color} fill={`${h.color}33`} size={28} />
                      {h.label}
                    </li>
                  ))}
                </motion.ul>
              )}
            </motion.div>

            <div className="relative mx-auto aspect-[56/54] w-full max-w-[580px]">
              <div
                className="pointer-events-none absolute -inset-[15%] blur-2xl"
                style={{ background: `radial-gradient(closest-side, ${app.accent}99, ${app.accent}38 55%, transparent)` }}
              />
              {back && (
                <motion.div
                  className="absolute left-[53%] top-[10%] z-10 w-[40%]"
                  initial={{ opacity: 0, y: 90, rotate: 4 }}
                  animate={{ opacity: 1, y: 0, rotate: 13 }}
                  transition={{ duration: 1.2, delay: 0.45, ease }}
                >
                  <PhoneFrame image={back} alt={`${app.name} skjermbilde`} className="w-full" />
                </motion.div>
              )}
              {front && (
                <motion.div
                  className="absolute left-[12%] top-0 z-20 w-[44%]"
                  initial={{ opacity: 0, y: 90, rotate: 0 }}
                  animate={{ opacity: 1, y: 0, rotate: 5 }}
                  transition={{ duration: 1.2, delay: 0.3, ease }}
                >
                  <PhoneFrame image={front} alt={`${app.name} skjermbilde`} className="w-full" />
                </motion.div>
              )}
              <Float className="left-[0%] top-[18%] z-30 w-[15%] -rotate-[18deg]">
                <Coin className="w-full drop-shadow-[0_10px_20px_rgba(255,170,0,0.35)]" />
              </Float>
              <Float className="left-[5%] top-[42%] z-30 w-[7%]" delay={1.2}>
                <Star className="w-full drop-shadow-[0_0_14px_rgba(255,190,30,0.55)]" />
              </Float>
              <Float className="right-[0%] top-[50%] z-30 w-[14%] rotate-[20deg]" delay={0.6}>
                <Coin className="w-full drop-shadow-[0_10px_20px_rgba(255,170,0,0.35)]" />
              </Float>
              <Float className="right-[2%] top-[72%] z-30 w-[6%]" delay={1.8}>
                <Star className="w-full drop-shadow-[0_0_14px_rgba(255,190,30,0.55)]" />
              </Float>
            </div>
          </section>

          {/* Steps */}
          {app.steps && (
            <motion.section {...inView} className="relative z-10 mt-8 lg:mt-4">
              <h2 className="sr-only">Slik fungerer det</h2>
              <ol className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {app.steps.map((s, i) => (
                  <motion.li
                    key={s.title}
                    variants={fadeUp}
                    className="relative flex flex-col items-center rounded-[1.25rem] border border-white/[0.08] bg-[#141517]/90 px-4 pb-6 pt-7 text-center sm:px-6"
                  >
                    <span className="absolute left-4 top-4 text-[11px] font-semibold tabular-nums text-white/30">0{i + 1}</span>
                    <IconTile name={s.icon} color={s.color} />
                    <h3 className="mt-5 text-[16px] font-bold sm:text-[17px]">{s.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/60 sm:text-sm">{s.text}</p>
                  </motion.li>
                ))}
              </ol>
            </motion.section>
          )}

          {/* For parents / for kids */}
          {app.audiences && (
            <motion.section {...inView} className="mt-5 grid gap-5 lg:grid-cols-2">
              {app.audiences.map((a) => (
                <motion.article
                  key={a.eyebrow}
                  variants={fadeUp}
                  className="relative grid overflow-hidden rounded-[1.5rem] border border-white/[0.08] sm:grid-cols-[minmax(0,1fr)_190px]"
                  style={{
                    background: [
                      `radial-gradient(70% 90% at 92% 15%, ${a.color}40 0%, transparent 65%)`,
                      `radial-gradient(60% 60% at 0% 100%, ${a.color}12 0%, transparent 70%)`,
                      "#141517",
                    ].join(", "),
                  }}
                >
                  <div className="relative z-10 p-7 sm:p-8 sm:pr-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.35em]" style={{ color: a.color }}>
                      {a.eyebrow}
                    </p>
                    <h2 className="mt-3 text-[1.7rem] font-extrabold leading-tight tracking-tight md:text-[1.9rem]">{a.heading}</h2>
                    <ul className="mt-5 space-y-3">
                      {a.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-white/75">
                          <span
                            className="mt-[3px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full"
                            style={{ background: `${a.color}26` }}
                          >
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={a.color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                              <path d="m5 12.5 4.5 4.5L19 7.5" />
                            </svg>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative h-[230px] sm:h-auto">
                    <motion.div
                      className="absolute left-1/2 top-6 w-[180px] -translate-x-1/2 sm:left-2 sm:top-10 sm:w-[200px] sm:translate-x-0"
                      variants={{
                        hidden: { opacity: 0, y: 60, rotate: 2 },
                        show: { opacity: 1, y: 0, rotate: 8, transition: { duration: 1.1, delay: 0.2, ease } },
                      }}
                    >
                      <PhoneFrame image={a.screenshot} alt={`${app.name} skjermbilde`} className="w-full" />
                    </motion.div>
                  </div>
                </motion.article>
              ))}
            </motion.section>
          )}

          {/* Safety, subscription and the like */}
          {app.about && (
            <motion.section {...inView} className="mt-16 md:mt-24">
              {app.about.paragraphs.map((p) => (
                <motion.p
                  key={p}
                  variants={fadeUp}
                  className="mx-auto max-w-3xl text-center text-[clamp(1.35rem,2.6vw,1.9rem)] font-semibold leading-snug tracking-tight text-white/90"
                >
                  {p}
                </motion.p>
              ))}
              <div className="mt-12 grid gap-5 md:grid-cols-2">
                {app.about.sections.map((s) => (
                  <motion.div
                    key={s.title}
                    variants={fadeUp}
                    className="rounded-[1.5rem] border border-white/[0.08] bg-[#141517] p-7 sm:p-8"
                  >
                    <div className="flex items-center gap-4">
                      {s.icon && <IconTile name={s.icon} color={s.color ?? app.accent} className="h-12 w-12 [&_svg]:h-6 [&_svg]:w-6" />}
                      <h2 className="text-xl font-bold">{s.title}</h2>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-white/75">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: s.color ?? app.accent }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {s.note && <p className="mt-6 border-t border-white/[0.08] pt-5 text-sm leading-relaxed text-white/45">{s.note}</p>}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {!app.about && !app.steps && (
            <motion.section {...inView} className="mt-10 rounded-[1.25rem] border border-white/[0.08] bg-white/[0.03] p-7 sm:p-9">
              <motion.p variants={fadeUp} className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/45">
                Funksjoner
              </motion.p>
              <ul className="mt-6 space-y-4">
                {app.features.map((f) => (
                  <motion.li key={f} variants={fadeUp} className="flex items-start gap-3 text-[15px] leading-relaxed text-white/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: app.accent }} />
                    {f}
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          )}

          {app.screenshots.length > 2 && (
            <motion.section {...inView} className="mt-5 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.03] py-7 sm:py-10">
              <motion.p variants={fadeUp} className="px-7 text-[11px] font-medium uppercase tracking-[0.35em] text-white/45 sm:px-10">
                Skjermbilder
              </motion.p>
              <div className="mt-8 flex snap-x gap-5 overflow-x-auto px-7 pb-4 sm:px-10 [&>:first-child]:ml-auto [&>:last-child]:mr-auto">
                {gallery.map((phone, i) => (
                  <motion.div key={i} variants={fadeUp} className="shrink-0 snap-center">
                    {phone}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          <motion.section
            {...inView}
            className={`mt-5 grid gap-5 sm:grid-cols-2 ${links.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
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
      </div>
    </MotionConfig>
  );
}
