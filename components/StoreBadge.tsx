export default function StoreBadge({ store, url }: { store: "apple" | "google"; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-5 py-3 transition-all hover:border-white/30 hover:bg-white/10"
    >
      {store === "apple" ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
          <path d="M3.18 23.76c.3.17.65.19.96.07l12.45-7.2-2.78-2.78-10.63 9.91zM.48 1.1C.18 1.42 0 1.9 0 2.53v18.94c0 .63.18 1.11.48 1.43l.08.07 10.61-10.61v-.25L.56 1.03l-.08.07zM20.93 10.03l-2.99-1.73-3.1 3.1 3.1 3.1 3.01-1.74c.86-.5.86-1.3-.02-1.73zM3.18.24L15.63 7.44l-2.78 2.78L2.22.31c.3-.12.66-.1.96.07v-.14z" />
        </svg>
      )}
      <div>
        <p className="text-[9px] uppercase tracking-widest text-white/40">
          {store === "apple" ? "Last ned på" : "Få den på"}
        </p>
        <p className="text-sm font-semibold text-white">
          {store === "apple" ? "App Store" : "Google Play"}
        </p>
      </div>
    </a>
  );
}
