import Link from "next/link";
import { Fredoka, Nunito } from "next/font/google";
import type { App } from "@/lib/apps";

// Shared look for every Min Belønning page: fonts, colors, header, footer
export const display = Fredoka({ subsets: ["latin"], weight: ["600", "700"] });
export const body = Nunito({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

export const navy = "#232650";
export const green = "#2e9a52";
export const cream = "#fdf7ec";

function pageLinks(app: App) {
  return [
    { label: "Personvern", href: `/${app.slug}/privacy` },
    { label: "Vilkår", href: `/${app.slug}/terms` },
    { label: "Kontakt", href: `/${app.slug}/support` },
  ];
}

const appleIcon = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

export function AppStoreButton({ url, light = false, large = false }: { url?: string; light?: boolean; large?: boolean }) {
  if (!url) {
    return (
      <span className="inline-flex items-center rounded-2xl bg-white/80 px-5 py-3 font-bold" style={{ color: navy }}>
        Kommer snart til App Store
      </span>
    );
  }
  if (large) {
    // The hero's main call to action: bigger, glossy, with a glow and a sheen that sweeps across
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center gap-4 overflow-hidden rounded-[22px] px-7 py-4 text-white ring-4 ring-white/70 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] sm:px-8"
        style={{
          background: "linear-gradient(180deg, #3fbf6b 0%, #2e9a52 55%, #26864a 100%)",
          boxShadow: "inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12), 0 22px 40px -14px rgba(46,154,82,0.85)",
        }}
      >
        <span aria-hidden className="mb-shine pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/45 to-transparent" />
        <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="relative -mt-1">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <span className="relative text-left">
          <span className="block text-[13px] font-semibold leading-tight opacity-90">Last ned på</span>
          <span className="block text-[26px] font-extrabold leading-none tracking-tight">App Store</span>
        </span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="relative ml-1 transition-transform duration-300 group-hover:translate-x-1">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    );
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-2xl px-5 py-2.5 shadow-[0_10px_24px_-12px_rgba(0,0,0,0.45)] transition-transform hover:-translate-y-0.5 ${
        light ? "bg-white" : "text-white"
      }`}
      style={light ? { color: "#111" } : { background: green }}
    >
      {appleIcon}
      <span className="text-left">
        <span className="block text-[11px] leading-tight opacity-80">Last ned på</span>
        <span className="block text-[19px] font-extrabold leading-tight tracking-tight">App Store</span>
      </span>
    </a>
  );
}

export function MbHeader({ app }: { app: App }) {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-5 py-4 md:py-5">
      <Link href={`/${app.slug}`} aria-label={app.name}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={app.logo} alt={app.name} className="h-11 w-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.12)] md:h-14" />
      </Link>
      <nav aria-label="Min Belønning" className="flex items-center gap-3 text-[14px] font-bold sm:gap-7 sm:text-[15px]">
        {pageLinks(app).map((l) =>
          l.label === "Kontakt" ? (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-white shadow-[0_8px_18px_-10px_rgba(46,154,82,0.9)] transition-transform hover:-translate-y-0.5 sm:px-5 sm:py-2.5"
              style={{ background: green }}
            >
              {l.label}
            </Link>
          ) : (
            <Link key={l.href} href={l.href} className="transition-opacity hover:opacity-70">
              {l.label}
            </Link>
          ),
        )}
      </nav>
    </header>
  );
}

export function MbFooter({ app }: { app: App }) {
  return (
    <footer className="relative text-white">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block h-[60px] w-full md:h-[110px]" aria-hidden>
        <path d="M0 70C220 118 430 10 720 46s520 62 720 4v70H0z" fill={green} />
      </svg>
      <div style={{ background: `linear-gradient(180deg, ${green} 0%, #278a48 100%)` }}>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 pb-10 pt-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={app.icon} alt="" className="h-20 w-20 rounded-[22%] shadow-[0_12px_24px_-12px_rgba(0,0,0,0.5)] ring-2 ring-white/30 md:h-24 md:w-24" />
            <div>
              <h2 className={`${display.className} text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-[1.1]`}>
                Last ned
                <br />
                Min Belønning i dag
              </h2>
              <p className="mt-2 text-[16px] font-semibold text-white/85">Gjør husarbeid gøy for hele familien!</p>
            </div>
          </div>
          <div className="self-start md:self-auto">
            <AppStoreButton url={app.appStoreUrl} light />
          </div>
        </div>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 border-t border-white/20 px-5 py-6 text-[14px] sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Min Belønning bunn" className="flex flex-wrap gap-x-6 gap-y-2 font-bold">
            {pageLinks(app).map((l) => (
              <Link key={l.href} href={l.href} className="transition-opacity hover:opacity-75">
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="text-white/75">
            © {new Date().getFullYear()} Berge Media ENK ·{" "}
            <Link href="/" className="underline-offset-2 hover:underline">
              Flere apper
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

// Cream page with the Min Belønning header and footer, used around the support and legal pages
export function MbShell({ app, children }: { app: App; children: React.ReactNode }) {
  return (
    <div className={`${body.className} doc-light flex min-h-screen flex-col overflow-x-clip`} style={{ background: cream, color: navy }}>
      <MbHeader app={app} />
      <main className="flex-1 pb-12">{children}</main>
      <MbFooter app={app} />
    </div>
  );
}
