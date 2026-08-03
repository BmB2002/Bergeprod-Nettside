"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const skillGroups = [
  {
    category: "Produksjon",
    items: ["Filmproduksjon", "Kinematografi", "Droneoperatør", "Sony FX3", "DJI Mavic 4 Pro"],
  },
  {
    category: "Post-produksjon",
    items: ["Klipping & Post", "Fargekorrigering", "Motion Graphics", "Adobe Premiere Pro", "DaVinci Resolve", "Photoshop"],
  },
  {
    category: "Design & Utvikling",
    items: ["UI/UX Design", "Web Development", "React & Next.js", "App Development", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "AI & Verktøy",
    items: ["AI-assistert utvikling", "ChatGPT", "Claude", "AI-optialisering", "Automation"],
  },
  {
    category: "Kreativt",
    items: ["Historiefortelling", "Videoproduksjon", "Innholdsproduksjon"],
  },
];

const experience = [
  {
    title: "Freelance Filmskaper, Webdesigner & Apputvikler",
    company: "BERGE",
    years: "2024 – nå",
    description:
      "Produserer film, video, nettsider og mobilapper for bedrifter og privatpersoner over hele Norge. Har designet og utviklet nettsider som donkapp.no, samt mobilapper som Dønk (tilgjengelig på App Store og Google Play). Filmkunder inkluderer OCLIN, Sølvtrans, Brannvernforeningen, Mental Helse Norge og Hexagon Purus.",
  },
  {
    title: "Filmskaper & Klipper",
    company: "AVIA",
    years: "Vår 2026",
    description:
      "Filmet og klippet videoer for bedriften, hovedsakelig innhold til sosiale medier.",
  },
  {
    title: "Teknisk ansvarlig for filmvisning",
    company: "Kulturhuset Ålesund",
    years: "Sommer 2025",
    description:
      "Teknisk ansvarlig for filmvisning ved Kulturhuset Ålesund sommeren 2025.",
  },
];

const education = [
  {
    degree: "Bachelorgrad i Medieproduksjon",
    school: "Høgskulen i Volda",
    years: "2023 – 2026",
  },
];

const label = {
  letterSpacing: "0.35em",
  textTransform: "uppercase" as const,
  fontSize: "0.7rem",
  fontWeight: 500,
  color: "#8a8a8a",
};

function Fade({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


export default function CV() {
  return (
    <div className="section-dividers min-h-screen bg-[#0a0a0a] font-sans text-white overflow-hidden">

      {/* ── Header ── */}
      <header className="fixed inset-x-0 top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
          <Link href="/" className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Tilbake
          </Link>
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-trimmed.png" alt="BERGE" className="h-7 w-auto md:h-8" />
          </Link>
          <Link
            href="/#contact"
            className="rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-widest text-[#0a0a0a] transition-all hover:bg-white/80"
          >
            Kontakt
          </Link>
        </div>
      </header>

      <main className="pt-16">

        {/* ── Hero ── */}
        <section className="relative flex min-h-[100vh] flex-col items-center justify-center overflow-hidden px-6 text-center">

          {/* Background video */}
          <div className="absolute inset-0">
            <video
              src="/homevideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0a0a0a]/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/30" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col items-center gap-5"
          >
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-24 w-24 overflow-hidden rounded-full border border-white/20 md:h-40 md:w-40"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/me.JPG" alt="Bjørn Magnus Berge" className="h-full w-full object-cover" />
            </motion.div>

            {/* Name */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-3xl font-black tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)] sm:text-5xl md:text-7xl"
              >
                Bjørn Magnus Berge
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-2 text-[10px] font-medium uppercase tracking-[0.25em] text-white/60 sm:text-sm sm:tracking-[0.35em]"
              >
                Filmskaper&nbsp;&nbsp;·&nbsp;&nbsp;Klipper&nbsp;&nbsp;·&nbsp;&nbsp;Webdesigner&nbsp;&nbsp;·&nbsp;&nbsp;Apputvikler
              </motion.p>
            </div>

            {/* Intro */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="max-w-lg text-sm leading-relaxed text-white/55 md:text-base"
            >
              Jeg er filmskaper, klipper, webdesigner og apputvikler under navnet BERGE. Jeg lager alt fra kortfilm til kommersielle filmer, moderne nettsider og mobilapper — og tar hånd om hele prosessen fra idé til ferdig produkt.
            </motion.p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</p>
            <div className="h-12 w-px animate-pulse bg-gradient-to-b from-white/0 to-white/50" />
          </motion.div>
        </section>

        {/* ── Skills ── */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6 md:px-10">
            <Fade>
              <p style={label} className="mb-2">Ferdigheter</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Hva jeg kan.</h2>
            </Fade>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {skillGroups.map((group, gi) => (
                <Fade key={group.category} delay={gi * 0.1}>
                  <motion.div
                    whileHover={{ rotateX: 5, rotateY: -5, y: -8 }}
                    transition={{ duration: 0.3 }}
                    style={{ perspective: 1000 }}
                    className="group relative rounded-xl bg-white/[0.03] p-6 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative">
                      <p style={label} className="mb-4">{group.category}</p>
                      <ul className="flex flex-col gap-2.5">
                        {group.items.map((skill, si) => (
                          <motion.li
                            key={skill}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: si * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2.5 text-sm text-white/70 group-hover:text-white/90 transition-colors"
                          >
                            <span className="h-1 w-1 shrink-0 rounded-full bg-white/30 group-hover:bg-white/60 transition-colors" />
                            {skill}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6 md:px-10">
            <Fade>
              <p style={label} className="mb-2">Erfaring</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Arbeidserfaring.</h2>
            </Fade>
            <div className="relative mt-12">
              <div className="absolute left-0 top-2 h-full w-px bg-white/10 md:left-6" />
              <div className="flex flex-col gap-10 pl-6 md:pl-16">
                {experience.map((e, i) => (
                  <Fade key={i} delay={i * 0.1}>
                    <div className="relative group">
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                        className="absolute -left-[1.85rem] top-6 h-3 w-3 rounded-full bg-white/30 md:-left-[2.85rem]"
                      />
                      <div className="absolute -left-[1.85rem] top-6 h-3 w-3 rounded-full border border-white/30 bg-[#0a0a0a] md:-left-[2.85rem]" />
                      <motion.div
                        whileHover={{ rotateY: -5, x: 8 }}
                        transition={{ duration: 0.3 }}
                        style={{ perspective: 1000 }}
                        className="rounded-xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur-sm hover:border-white/20 hover:shadow-xl transition-all duration-300"
                      >
                        <div className="relative">
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <div>
                              <h3 className="text-lg font-semibold text-white group-hover:text-white transition-colors">{e.title}</h3>
                              <p className="mt-0.5 text-sm text-white/50 group-hover:text-white/70 transition-colors">{e.company}</p>
                            </div>
                            <motion.span
                              whileHover={{ scale: 1.05 }}
                              className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40 group-hover:border-white/30 group-hover:text-white/60 transition-all"
                            >
                              {e.years}
                            </motion.span>
                          </div>
                          <p className="mt-4 text-sm leading-relaxed text-white/45 group-hover:text-white/65 transition-colors">{e.description}</p>
                        </div>
                      </motion.div>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Education ── */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6 md:px-10">
            <Fade>
              <p style={label} className="mb-2">Utdanning</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Utdanning.</h2>
            </Fade>
            <div className="mt-10 flex flex-col gap-6">
              {education.map((e, i) => (
                <Fade key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ rotateX: 3, y: -4 }}
                    style={{ perspective: 1000 }}
                    className="group relative flex flex-wrap items-center justify-between gap-4 rounded-xl bg-white/[0.03] p-6 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative">
                      <h3 className="text-base font-semibold text-white group-hover:text-white transition-colors">{e.degree}</h3>
                      <p className="mt-1 text-sm text-white/50 group-hover:text-white/70 transition-colors">{e.school}</p>
                    </div>
                    <motion.span
                      whileHover={{ scale: 1.08 }}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40 group-hover:border-white/30 group-hover:text-white/60 transition-all"
                    >
                      {e.years}
                    </motion.span>
                  </motion.div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ── Portfolio CTA ── */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6 md:px-10">
            <div className="grid gap-6 lg:grid-cols-2 auto-rows-fr">
              {/* Films */}
              <Fade>
                <motion.div
                  whileHover={{
                    y: -12,
                    boxShadow: "0 0 0 1px rgba(255,255,255,0.15), 0 20px 60px -20px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)"
                  }}
                  className="relative overflow-hidden rounded-2xl h-full transition-all duration-300"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 10px 40px -15px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)"
                  }}
                >
                  {/* 3D layer effect */}
                  <div className="absolute inset-0 rounded-2xl border border-white/5" style={{ top: "2px", left: "2px", right: "4px", bottom: "4px" }} />
                  <div className="absolute inset-0 rounded-2xl border border-white/3" style={{ top: "4px", left: "4px", right: "6px", bottom: "6px" }} />
                  {/* Thumbnail collage background */}
                  <div className="absolute inset-0 grid grid-cols-3 opacity-50">
                    {["JZYX1nl7ocU","eduXzrgCcwQ","I1QNJpKJHdc","8fbqmpe4Zv4","uec_HZa0jYQ","bG11gaLaUZI"].map((id) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img key={id} src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt="" className="h-full w-full object-cover" />
                    ))}
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/95 via-[#0a0a0a]/80 to-[#0a0a0a]/95" />

                  {/* Content */}
                  <div className="relative z-10 px-10 py-16 text-center md:py-24">
                    <p style={label} className="mb-6">Portfolio</p>
                    <p className="text-[clamp(2rem,6vw,4rem)] font-black leading-none tracking-tighter text-white">
                      20+ filmer.
                    </p>
                    <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-white/45">
                      Fra kortfilm og drone til kommersielle promoer — alt samlet på én side.
                    </p>
                    <Link
                      href="/#work"
                      className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-10 py-4 text-sm font-semibold uppercase tracking-widest text-[#0a0a0a] transition-all hover:bg-white/90"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      Se filmer
                    </Link>
                  </div>
                </motion.div>
              </Fade>

              {/* Web & Apps Combined */}
              <Fade delay={0.1}>
                <motion.div
                  whileHover={{
                    y: -12,
                    boxShadow: "0 0 0 1px rgba(255,255,255,0.15), 0 20px 60px -20px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)"
                  }}
                  className="relative overflow-hidden rounded-2xl h-full flex flex-col justify-center transition-all duration-300"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 10px 40px -15px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)"
                  }}
                >
                  {/* 3D layer effect */}
                  <div className="absolute inset-0 rounded-2xl border border-white/5" style={{ top: "2px", left: "2px", right: "4px", bottom: "4px" }} />
                  <div className="absolute inset-0 rounded-2xl border border-white/3" style={{ top: "4px", left: "4px", right: "6px", bottom: "6px" }} />
                  {/* Web screenshot background */}
                  <div className="absolute inset-0 opacity-30">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/donkweb.png" alt="" className="h-full w-full object-cover" />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/95 via-[#0a0a0a]/80 to-[#0a0a0a]/95" />

                  <div className="relative z-10 px-10 py-16 text-center md:py-24">
                    <p style={label} className="mb-6">Portfolio</p>
                    <p className="text-[clamp(2rem,6vw,4rem)] font-black leading-none tracking-tighter text-white">
                      Web & App.
                    </p>
                    <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-white/45">
                      Moderne nettsider og iOS/Android-løsninger.
                    </p>
                    <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
                      <Link
                        href="/#web"
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-xs font-semibold uppercase tracking-widest text-[#0a0a0a] transition-all hover:bg-white/90"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <path d="M3 9h18M9 21V9" />
                        </svg>
                        Webutvikling
                      </Link>
                      <Link
                        href="/#apps"
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-xs font-semibold uppercase tracking-widest text-[#0a0a0a] transition-all hover:bg-white/90"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="5" y="2" width="14" height="20" rx="2" />
                          <line x1="12" y1="18" x2="12" y2="18.01" />
                        </svg>
                        Apputvikling
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </Fade>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6 md:px-10">
            <Fade>
              <p style={label} className="mb-2">Kontakt</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ta kontakt.</h2>
            </Fade>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  label: "E-post",
                  value: "kontakt.bergemedia@gmail.com",
                  href: "mailto:kontakt.bergemedia@gmail.com",
                },
                {
                  label: "LinkedIn",
                  value: "Bjørn Magnus Berge",
                  href: "https://www.linkedin.com/in/bj%C3%B8rn-magnus-berge-47a197279/",
                },
                {
                  label: "Instagram",
                  value: "@bm.berge",
                  href: "https://instagram.com/bm.berge",
                },
              ].map((item, i) => (
                <Fade key={item.label} delay={i * 0.08}>
                  <motion.a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ rotateY: 5, y: -6 }}
                    style={{ perspective: 1000 }}
                    className="group relative flex flex-col gap-2 rounded-xl bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:bg-white/[0.06] hover:shadow-xl"
                  >
                    <div className="relative">
                      <p style={label}>{item.label}</p>
                      <p className="text-sm text-white transition-colors group-hover:text-white/70">{item.value} ↗</p>
                    </div>
                  </motion.a>
                </Fade>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="py-8 text-center">
        <p className="text-xs text-white/25">© {new Date().getFullYear()} Bjørn Magnus Berge — BERGE</p>
      </footer>
    </div>
  );
}
