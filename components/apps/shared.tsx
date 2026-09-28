import type { Variants } from "framer-motion";
import type { App, Platform } from "@/lib/apps";
import PhoneFrame from "./PhoneFrame";

export const ease = [0.22, 1, 0.36, 1] as const;

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

// Warm light from the top-right fading into a dark "table" at the bottom, tinted per app
export function cardBackground(accent: string) {
  return [
    `radial-gradient(90% 80% at 88% 0%, ${accent}66 0%, transparent 62%)`,
    `radial-gradient(70% 60% at 100% 100%, ${accent}26 0%, transparent 70%)`,
    "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.35) 100%)",
    "#141517",
  ].join(", ");
}

export function AppIcon({ app, className = "h-20 w-20 md:h-24 md:w-24" }: { app: App; className?: string }) {
  return (
    <div className={`${className} shrink-0 overflow-hidden rounded-[22%] shadow-[0_12px_30px_-10px_rgba(0,0,0,0.8)] ring-1 ring-white/10`}>
      {app.icon && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={app.icon} alt={`${app.name} ikon`} className="h-full w-full object-cover" />
      )}
    </div>
  );
}

const platformMeta: Record<Platform, { label: string; icon: React.ReactNode }> = {
  ios: {
    label: "iOS",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
  },
  android: {
    label: "Android",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M3.18 23.76c.3.17.65.19.96.07l12.45-7.2-2.78-2.78-10.63 9.91zM.48 1.1C.18 1.42 0 1.9 0 2.53v18.94c0 .63.18 1.11.48 1.43l.08.07 10.61-10.61v-.25L.56 1.03l-.08.07zM20.93 10.03l-2.99-1.73-3.1 3.1 3.1 3.1 3.01-1.74c.86-.5.86-1.3-.02-1.73zM3.18.24L15.63 7.44l-2.78 2.78L2.22.31c.3-.12.66-.1.96.07v-.14z" />
      </svg>
    ),
  },
  web: {
    label: "Nettside",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
  },
  windows: {
    label: "Windows",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M2 4.5 10 3.4v7.9H2zm0 15 8 1.1v-7.8H2zm9 1.2 11 1.5v-9.4H11zm0-17.4v8H22V1.8z" />
      </svg>
    ),
  },
};

export function PlatformPills({ platforms }: { platforms: Platform[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {platforms.map((p) => (
        <span
          key={p}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-sm text-white/90 backdrop-blur-sm"
        >
          {platformMeta[p].icon}
          {platformMeta[p].label}
        </span>
      ))}
    </div>
  );
}

export function appScreens(app: App, frameClass?: string): React.ReactNode[] {
  return app.screenshots.map((src, i) => (
    <PhoneFrame key={src} image={src} alt={`${app.name} skjermbilde ${i + 1}`} className={frameClass} />
  ));
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
