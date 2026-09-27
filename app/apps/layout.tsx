import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apps — BERGE",
  description: "Apper designet og utviklet av Bjørn Magnus Berge.",
};

export default function AppsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-ink text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-trimmed.png" alt="BERGE" className="h-7 w-auto md:h-8" />
            <span className="label">Apps</span>
          </Link>
          <a
            href="https://bergeprod.no"
            className="text-sm text-mute transition-colors hover:text-white"
          >
            bergeprod.no ↗
          </a>
        </div>
      </header>

      <main className="flex-1 pt-16">{children}</main>

      <footer className="border-t border-line py-8 text-center">
        <p className="text-xs text-white/25">
          © {new Date().getFullYear()} Bjørn Magnus Berge — BERGE
        </p>
      </footer>
    </div>
  );
}
