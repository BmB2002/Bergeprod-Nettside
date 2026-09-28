import type { Metadata } from "next";
import Link from "next/link";
import { LegalBody } from "@/components/LegalPage";
import Footer from "@/components/Footer";
import { websitePrivacy } from "@/lib/legal/website-privacy";

export const metadata: Metadata = {
  title: "Personvern — BERGE",
  description: "Slik behandles personopplysninger på bergeprod.no.",
};

export default function PersonvernPage() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <header className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Tilbake
        </Link>
        <Link href="/" aria-label="BERGE — forsiden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-trimmed.png" alt="BERGE" className="h-7 w-auto md:h-8" />
        </Link>
        <span className="w-16" aria-hidden />
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-24 pt-10 md:px-10 md:pt-16">
        <p className="label">Personvern</p>
        <h1 className="mt-4 text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight">
          {websitePrivacy.heading}
        </h1>
        <p className="mt-4 text-sm text-white/45">{websitePrivacy.updated}</p>
        <div className="mt-12">
          <LegalBody doc={websitePrivacy} accent="#ffffff" contactEmail="hei@bergeprod.no" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
