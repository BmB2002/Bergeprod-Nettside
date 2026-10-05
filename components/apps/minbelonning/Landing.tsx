import type { App } from "@/lib/apps";
import PhoneFrame from "../PhoneFrame";
import { AppStoreButton, MbFooter, MbHeader, body, cream, display, green, navy } from "./Chrome";
import { Float, MotionRoot, Reveal } from "./Motion";

const img = (name: string) => `/apps/minbelonning/${name}`;


const highlights = [
  { label: "Enkelt å bruke", icon: "icon-clipboard.webp" },
  { label: "For hele familien", icon: "icon-family.webp" },
  { label: "Motiverer barna", icon: "coins-stack.webp" },
  { label: "Ryddigere hverdag", icon: "icon-house.webp" },
];

const steps = [
  { title: "Lag oppgaver", text: "Velg hva som skal gjøres og sett belønning.", image: "icon-clipboard.webp", bg: "#fde4ea", badge: "#f2547d" },
  { title: "Barna gjør oppgavene", text: "De har oversikt og krysser av når de er ferdige.", image: "kid-boy.webp", bg: "#e2eeff", badge: "#2f7ff5" },
  { title: "Tjen belønning", text: "Barna tjener penger fra familiepotten.", image: "coins-stack.webp", bg: "#e2f4e5", badge: green },
];

const screens = [
  { top: "Hele familien", accent: "samlet", text: "Foreldre setter opp familien. Barna kobler seg enkelt til.", image: "/apps/minbelonning-parent-home.jpg" },
  { top: "Gjør oppgaver", accent: "morsommere", text: "Motiverer barna – helt uten mas.", image: "/apps/minbelonning-welcome.jpg" },
  { top: "Små", accent: "oppgaver.", text: "Støvsuge, rydde, dekke bordet …", image: "/apps/minbelonning-child-home.jpg" },
  { top: "Ekte", accent: "belønning.", text: "Hver godkjente oppgave teller.", image: "/apps/minbelonning-earned.jpg" },
  { top: "Innsats som", accent: "lønner seg", text: "Godkjenn oppgaven – belønningen lander med en gang.", image: "/apps/minbelonning-leaderboard.jpg" },
];

const audiences = [
  {
    badge: "For foreldre",
    top: "Få en ryddigere",
    accent: "hverdag",
    text: "Lag oppgaver, sett belønning og følg med på fremgangen. En enkel måte å skape gode vaner hjemme.",
    items: ["Sett oppgaver og belønning", "Følg med på fremgang", "Tilpasset hele familien"],
    cta: "Les mer for foreldre",
    href: "#slik-fungerer-det",
    image: "parent-mom.webp",
    bg: "linear-gradient(135deg, #fff6df 0%, #ffedc4 100%)",
    color: "#ffc83d",
    badgeBg: "#ffd75e",
    badgeText: navy,
    buttonText: navy,
  },
  {
    badge: "For barna",
    top: "Gjør husarbeid",
    accent: "gøy",
    text: "Se oppgaver, gjør dem, og tjen penger fra familiepotten. Følg med på din egen fremgang og se hvem som leder.",
    items: ["Tjen belønning for innsats", "Se egne oppgaver", "Gøy og motiverende design"],
    cta: "Les mer for barn",
    href: "#appen",
    image: "kid-boy.webp",
    bg: "linear-gradient(135deg, #eaf3ff 0%, #d9e9ff 100%)",
    color: "#2f7ff5",
    badgeBg: "#cfe1ff",
    badgeText: "#2f6fe0",
    buttonText: "#ffffff",
  },
];

const habits = [
  { label: "Sterkere samarbeid", icon: "icon-family.webp" },
  { label: "Motiverte barn", icon: "icon-controller.webp" },
  { label: "Gode vaner", icon: "icon-leaderboard.webp" },
  { label: "Enklere hverdag", icon: "icon-house.webp" },
];

// Little yellow, blue and pink dashes scattered over the cream sections
const confetti: { top: string; left: string; rotate: number; color: string }[] = [
  { top: "8%", left: "3%", rotate: -35, color: "#ffc83d" },
  { top: "14%", left: "36%", rotate: 30, color: "#5aa2ff" },
  { top: "6%", left: "58%", rotate: -20, color: "#ffc83d" },
  { top: "12%", left: "92%", rotate: 40, color: "#ffc83d" },
  { top: "70%", left: "96%", rotate: -30, color: "#ff7aa0" },
  { top: "85%", left: "1.5%", rotate: 25, color: "#5aa2ff" },
];

function Confetti() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {confetti.map((c, i) => (
        <span
          key={i}
          className="absolute h-6 w-[7px] rounded-full"
          style={{ top: c.top, left: c.left, background: c.color, transform: `rotate(${c.rotate}deg)` }}
        />
      ))}
    </div>
  );
}

function Decor({ src, className }: { src: string; className: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={img(src)} alt="" className={className} />;
}

function Check({ color, round }: { color: string; round?: boolean }) {
  return (
    <span className={`grid h-6 w-6 shrink-0 place-items-center ${round ? "rounded-full" : "rounded-md"}`} style={{ background: color }}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="m5 12.5 4.5 4.5L19 7.5" />
      </svg>
    </span>
  );
}

function TwoTone({ top, accent, className = "" }: { top: string; accent: string; className?: string }) {
  return (
    <span className={`${display.className} block font-bold leading-[1.05] tracking-tight ${className}`} style={{ color: navy }}>
      {top}
      <span className="block" style={{ color: green }}>
        {accent}
      </span>
    </span>
  );
}

// The hero scene is 1774x887. On desktop the hero is a bit taller than 2:1, so the image always shows
// its full height (top included) and only loses a little at the sides. It fades into the cream at the bottom.
const heroMask = {
  maskImage: "linear-gradient(to top, transparent 0%, #000 14%)",
  WebkitMaskImage: "linear-gradient(to top, transparent 0%, #000 14%)",
} as const;

const heroMaskMobile = {
  maskImage: "linear-gradient(to bottom, transparent 0%, #000 18%, #000 85%, transparent 100%)",
  WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 18%, #000 85%, transparent 100%)",
} as const;

export default function MinBelonningLanding({ app }: { app: App }) {
  return (
    <MotionRoot>
      <div className={`${body.className} min-h-screen overflow-x-clip`} style={{ background: cream, color: navy }}>
        {/* Hero */}
        <section className="relative flex flex-col" style={{ background: "linear-gradient(180deg, #fff8ea 0%, #fdf2df 100%)", minHeight: "min(52vw, 1000px)" }}>
          <div className="pointer-events-none absolute inset-0 hidden lg:block" style={heroMask}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img("hero-scene.webp")} alt="" className="h-full w-full object-cover object-top" />
          </div>

          <MbHeader app={app} />

          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 pb-6 pt-6 lg:flex lg:flex-1 lg:items-center lg:pb-20 lg:pt-4">
            <Reveal className="max-w-[540px] xl:-ml-11 lg:max-w-[calc(min(540px,36vw)+5.5rem)] lg:rounded-[2.25rem] lg:bg-white/75 lg:p-11 lg:shadow-[0_40px_90px_-40px_rgba(120,70,0,0.5)] lg:ring-1 lg:ring-white lg:backdrop-blur-xl">
              {app.appStoreUrl && (
                <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#e3f5e8] px-3.5 py-1.5 text-[13px] font-extrabold" style={{ color: green }}>
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" style={{ background: green }} />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full" style={{ background: green }} />
                  </span>
                  Ute nå på App Store
                </p>
              )}
              <h1 className={`${display.className} text-[clamp(2.7rem,4.1vw,4.4rem)] font-bold leading-[1.02] tracking-tight`}>
                Gjør oppgaver
                <span className="block" style={{ color: green }}>
                  <span
                    className="px-1"
                    style={{ background: "linear-gradient(transparent 62%, #ffd84a 62%, #ffd84a 90%, transparent 90%)" }}
                  >
                    morsommere
                  </span>
                </span>
              </h1>
              <p className="mt-6 text-[19px] font-semibold leading-snug md:text-xl">
                Motiverer barna til å hjelpe hjemme
                <br />– med ekte belønning.
              </p>
              <div className="mt-8">
                <AppStoreButton url={app.appStoreUrl} large />
              </div>
              <ul className="mt-9 grid max-w-[440px] grid-cols-4 gap-2 border-t pt-7" style={{ borderColor: "rgba(35,38,80,0.1)" }}>
                {highlights.map((h) => (
                  <li key={h.label} className="flex flex-col items-center gap-2 text-center text-[12px] font-bold leading-tight sm:text-[13px]">
                    <Decor src={h.icon} className="h-10 w-10 object-contain" />
                    {h.label}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img("hero-scene.webp")}
              alt=""
              className="-mx-5 mt-6 w-[calc(100%+2.5rem)] max-w-none lg:hidden"
              style={heroMaskMobile}
            />
          </div>

        </section>

        {/* How it works */}
        <section id="slik-fungerer-det" className="relative scroll-mt-6 py-16 md:py-24">
          <Confetti />
          <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-5 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)]">
            <Reveal>
              <p className="text-[13px] font-extrabold uppercase tracking-[0.18em]" style={{ color: "#f2547d" }}>
                Enkelt og moro
              </p>
              <h2 className="mt-3 text-[clamp(2.3rem,4.5vw,3.2rem)]">
                <TwoTone top="Hvordan det" accent="fungerer?" />
              </h2>
              <p className="mt-5 max-w-[340px] text-[17px] leading-relaxed opacity-80">
                Lag oppgaver, barna gjør dem, og tjener belønning. En enklere hverdag for hele familien.
              </p>
              <a
                href="#appen"
                className="mt-8 inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-[15px] font-extrabold shadow-[0_10px_22px_-12px_rgba(200,140,0,0.9)] transition-transform hover:-translate-y-0.5"
                style={{ background: "#ffc83d" }}
              >
                <span className="grid h-6 w-6 place-items-center rounded-full" style={{ background: navy }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="white" aria-hidden>
                    <path d="M7 4.5v15l13-7.5z" />
                  </svg>
                </span>
                Se hvordan det fungerer
              </a>
            </Reveal>

            <ol className="grid gap-6 pt-4 sm:grid-cols-3 sm:gap-5">
              {steps.map((s, i) => (
                <li key={s.title}>
                  <Reveal delay={i * 0.1} className="relative h-full">
                    <div
                      className="flex h-full flex-col items-center rounded-[2rem] px-5 pb-7 pt-10 text-center"
                      style={{ background: s.bg }}
                    >
                      <span
                        className={`${display.className} absolute -top-4 left-1/2 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full text-[17px] font-bold text-white ring-4 ring-[#fdf7ec]`}
                        style={{ background: s.badge }}
                      >
                        {i + 1}
                      </span>
                      <Decor src={s.image} className="h-32 w-auto max-w-full object-contain drop-shadow-[0_10px_14px_rgba(0,0,0,0.12)]" />
                      <h3 className={`${display.className} mt-5 text-[19px] font-bold leading-tight`}>{s.title}</h3>
                      <p className="mt-2 text-[14px] leading-snug opacity-75">{s.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Screens */}
        <section id="appen" className="relative scroll-mt-6 pb-16 md:pb-24">
          <Float className="-left-6 top-[46%] z-10 w-24 md:w-28">
            <Decor src="coin-front.webp" className="w-full" />
          </Float>
          <Float className="left-[39%] -top-6 z-10 hidden w-14 md:block" delay={0.8}>
            <Decor src="coin-tilt-2.webp" className="w-full" />
          </Float>
          <Float className="right-[18%] bottom-6 z-10 hidden w-16 md:block" delay={1.6}>
            <Decor src="coin-flat.webp" className="w-full" />
          </Float>
          <Float className="-right-4 top-[8%] z-10 w-20 md:w-24" delay={2.2}>
            <Decor src="coin-tilt-1.webp" className="w-full" />
          </Float>

          <h2 className="sr-only">Slik ser appen ut</h2>
          <div className="mx-auto max-w-[1200px] px-5">
            <ul className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0">
              {screens.map((s, i) => (
                <li key={s.accent} className="w-[230px] shrink-0 snap-center lg:w-auto">
                  <Reveal delay={i * 0.08} className="flex h-full flex-col items-center rounded-[2rem] bg-white/70 px-4 pb-4 pt-6 text-center shadow-[0_20px_40px_-30px_rgba(60,40,0,0.5)]">
                    <h3 className="text-[22px]">
                      <TwoTone top={s.top} accent={s.accent} />
                    </h3>
                    <p className="mt-2 min-h-[2.6em] text-[13px] leading-snug opacity-70">{s.text}</p>
                    <PhoneFrame image={s.image} alt={`${app.name}: ${s.top} ${s.accent}`} className="mt-4 w-full max-w-[200px]" />
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* For parents / for kids */}
        <section className="relative pb-16 md:pb-24">
          <div className="mx-auto grid max-w-[1200px] gap-6 px-5 lg:grid-cols-2">
            {audiences.map((a, i) => (
              <Reveal key={a.badge} delay={i * 0.1} className="h-full">
                <article
                  className="relative flex h-full flex-col overflow-hidden rounded-[2rem] p-7 sm:min-h-[430px] sm:p-9"
                  style={{ background: a.bg }}
                >
                  <div className="relative z-10 sm:max-w-[58%]">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide"
                      style={{ background: a.badgeBg, color: a.badgeText }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z" />
                      </svg>
                      {a.badge}
                    </span>
                    <h2 className="mt-4 text-[clamp(2rem,3.4vw,2.6rem)]">
                      <TwoTone top={a.top} accent={a.accent} />
                    </h2>
                    <p className="mt-4 text-[15px] leading-relaxed opacity-80">{a.text}</p>
                    <ul className="mt-5 space-y-3">
                      {a.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[15px] font-bold">
                          <Check color={a.color} round={a.color !== "#ffc83d"} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={a.href}
                      className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-extrabold transition-transform hover:-translate-y-0.5"
                      style={{ background: a.color, color: a.buttonText }}
                    >
                      {a.cta}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </a>
                  </div>
                  <Decor
                    src={a.image}
                    className="pointer-events-none relative -mb-9 ml-auto mt-4 h-60 w-auto max-w-none object-contain object-bottom sm:absolute sm:bottom-0 sm:right-0 sm:m-0 sm:h-[86%] sm:max-w-[48%]"
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Good habits */}
        <section className="relative">
          <Confetti />
          <div className="relative mx-auto grid max-w-[1200px] items-center gap-6 px-5 lg:grid-cols-2">
            <Reveal className="py-6 lg:py-16">
              <h2 className="text-[clamp(2.3rem,4.5vw,3.2rem)]">
                <TwoTone top="Bygg gode vaner" accent="sammen" />
              </h2>
              <p className="mt-5 max-w-[460px] text-[17px] leading-relaxed opacity-80">
                Min Belønning gjør husarbeid til noe barna faktisk gleder seg til. Mer samarbeid, mindre mas – og en morsommere hverdag for hele familien.
              </p>
              <ul className="mt-8 grid max-w-[460px] grid-cols-2 gap-3">
                {habits.map((h) => (
                  <li
                    key={h.label}
                    className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-[14px] font-bold shadow-[0_10px_24px_-18px_rgba(60,40,0,0.6)]"
                  >
                    <Decor src={h.icon} className="h-8 w-8 shrink-0 object-contain" />
                    {h.label}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.15} className="relative mx-auto w-full max-w-[520px]">
              <Decor src="jar.webp" className="relative z-10 -mb-10 w-full drop-shadow-[0_24px_30px_rgba(120,80,0,0.25)] md:-mb-16" />
              <Float className="-left-4 top-[6%] z-20 w-16 md:w-20">
                <Decor src="coin-tilt-1.webp" className="w-full" />
              </Float>
              <Float className="-right-2 top-0 z-20 w-20 md:w-24" delay={1.2}>
                <Decor src="coin-front.webp" className="w-full rotate-12" />
              </Float>
            </Reveal>
          </div>
        </section>

        <MbFooter app={app} />
      </div>
    </MotionRoot>
  );
}
