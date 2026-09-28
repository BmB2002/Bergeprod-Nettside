import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apper — BERGE",
  description: "Apper designet og utviklet av Bjørn Magnus Berge.",
};

const socials = [
  {
    label: "E-post",
    href: "mailto:kontakt.bergemedia@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/bm.berge",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bj%C3%B8rn-magnus-berge-47a197279/",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V21h-4z" />
      </svg>
    ),
  },
];

export default function AppsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex min-h-screen flex-col text-white"
      style={{ background: "radial-gradient(120% 55% at 25% 0%, #1f2023 0%, #0d0e10 55%, #0b0c0d 100%)" }}
    >
      <header className="mx-auto flex h-24 w-full max-w-7xl items-center justify-center px-6 md:px-10">
        <Link href="/" aria-label="BERGE apper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-trimmed.png" alt="BERGE" className="h-7 w-auto md:h-8" />
        </Link>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-10 md:px-10">
        <div>
          <p className="text-[15px] font-semibold">Bjørn Magnus Berge</p>
          <p className="mt-1 text-sm text-white/45">Apper • Verktøy • Idéer</p>
          <a
            href="https://bergeprod.no/personvern"
            className="mt-3 inline-block text-xs text-white/40 transition-colors hover:text-white"
          >
            Personvern for nettsiden
          </a>
        </div>
        <div className="flex gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/85 transition-colors hover:border-white/40 hover:text-white"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
