"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { categories, projects, type Project } from "@/lib/projects";
import Reveal from "./Reveal";
import VideoModal from "./VideoModal";

type Filter = "All" | (typeof categories)[number];
const filters: Filter[] = ["All", ...categories];

function thumbnailFor(p: Project): string | undefined {
  if (p.image) return p.image;
  if (p.youtubeId)
    return `https://img.youtube.com/vi/${p.youtubeId}/maxresdefault.jpg`;
}

function PlayOverlay({ size = "md" }: { size?: "lg" | "md" }) {
  const cls = size === "lg" ? "h-16 w-16" : "h-11 w-11";
  const ico = size === "lg" ? 22 : 16;
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <div className={`flex items-center justify-center rounded-full bg-white/90 text-ink ${cls}`}>
        <svg width={ico} height={ico} viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
}

function Thumb({
  project,
  size = "md",
  autoplay = false,
}: {
  project: Project;
  size?: "lg" | "md";
  autoplay?: boolean;
}) {
  const [ready, setReady] = useState(false);
  const thumb = thumbnailFor(project);
  const isPlayable = Boolean(project.youtubeId || project.href);
  return (
    <div
      className={`relative overflow-hidden rounded-md bg-ink-soft ${
        size === "lg" ? "aspect-video w-full sm:w-4/5 mx-auto" : "aspect-video w-full sm:w-80 lg:w-[420px] shrink-0"
      }`}
    >
      {/* Autoplay iframe sits underneath */}
      {project.youtubeId && autoplay && (
        <iframe
          className="absolute inset-0 h-full w-full pointer-events-none"
          src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${project.youtubeId}&modestbranding=1&rel=0&iv_load_policy=3&cc_load_policy=0`}
          allow="autoplay; encrypted-media"
          onLoad={() => setTimeout(() => setReady(true), 1000)}
        />
      )}

      {/* Thumbnail sits on top, fades out once iframe is playing */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${ready ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        {thumb ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumb}
            alt={project.title}
            className="h-full w-full object-cover"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              if (project.youtubeId && img.src.includes("maxresdefault"))
                img.src = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;
            }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink-soft to-ink">
            <span className="text-3xl font-bold tracking-[0.3em] text-white/5">BERGE</span>
          </div>
        )}
      </div>

      <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {isPlayable && <PlayOverlay size={size} />}
    </div>
  );
}

function Wrap({
  project,
  onPlay,
  children,
}: {
  project: Project;
  onPlay: () => void;
  children: React.ReactNode;
}) {
  if (project.youtubeId)
    return (
      <button type="button" onClick={onPlay} className="group block w-full text-left">
        {children}
      </button>
    );
  if (project.href)
    return (
      <a href={project.href} target="_blank" rel="noopener noreferrer" className="group block">
        {children}
      </a>
    );
  return <div className="group block">{children}</div>;
}

// Featured: large thumbnail, text below
function FeaturedRow({ project, onPlay, autoplay }: { project: Project; onPlay: () => void; autoplay?: boolean }) {
  return (
    <Wrap project={project} onPlay={onPlay}>
      <div className="border-b border-line py-12">
        <Thumb project={project} size="lg" autoplay={autoplay} />
        <div className="mx-auto mt-5 flex w-full items-start justify-between gap-6 sm:w-4/5">
          <div>
            <h3 className="text-2xl font-semibold leading-tight text-white transition-colors group-hover:text-white/80 lg:text-3xl">
              {project.title}
            </h3>
            {project.client && (
              <p className="mt-1.5 text-sm text-white/50">{project.client}</p>
            )}
            {project.description && (
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/35">
                {project.description}
              </p>
            )}
          </div>
          <div className="shrink-0 text-right">
            <p className="text-xs uppercase tracking-widest text-mute">{project.category}</p>
            <p className="mt-1 text-xs text-mute">{project.year}</p>
          </div>
        </div>
      </div>
    </Wrap>
  );
}

// Regular: small thumbnail alternating left / right, compact text beside
function RegularRow({
  project,
  flip,
  onPlay,
  autoplay,
}: {
  project: Project;
  flip: boolean;
  onPlay: () => void;
  autoplay?: boolean;
}) {
  const meta = (
    <div className={`flex flex-1 flex-col justify-center gap-2 ${flip ? "sm:items-end sm:text-right" : ""}`}>
      <p className="text-xs uppercase tracking-widest text-mute">{project.category}</p>
      <h3 className="text-base font-medium leading-snug text-white transition-colors group-hover:text-white/75 lg:text-lg">
        {project.title}
      </h3>
      {project.client && <p className="text-xs text-white/45">{project.client}</p>}
      {project.description && (
        <p className="mt-1 text-xs leading-relaxed text-white/35">{project.description}</p>
      )}
      <p className="text-xs text-mute">{project.year}</p>
    </div>
  );

  return (
    <Wrap project={project} onPlay={onPlay}>
      <div
        className={`flex flex-col gap-5 border-b border-line py-7 sm:flex-row sm:items-center sm:gap-8 ${
          flip ? "sm:flex-row-reverse" : ""
        }`}
      >
        <Thumb project={project} size="md" autoplay={autoplay} />
        {meta}
      </div>
    </Wrap>
  );
}

const INITIAL_COUNT = 4;

export default function Work() {
  const [active, setActive] = useState<Filter>("All");
  const [playing, setPlaying] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const shown =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  // In category views all films are small; in "All" view featured films get the big treatment
  const isAllView = active === "All";
  let flipCount = 0;
  const rows = shown.map((p) => {
    if (isAllView && p.featured) return { project: p, flip: false };
    const flip = flipCount % 2 === 1;
    flipCount++;
    return { project: p, flip };
  });

  const visibleRows = isAllView && !showAll ? rows.slice(0, INITIAL_COUNT) : rows;
  const hasMore = isAllView && !showAll && rows.length > INITIAL_COUNT;

  return (
    <section id="work" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Reveal>
          <p className="text-[clamp(4rem,10vw,8rem)] font-black leading-none tracking-tighter text-white">
            FILMER
          </p>
          <p className="mt-3 text-sm text-white/40">Velg kategori</p>
        </Reveal>

        <Reveal className="mt-10">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <motion.button
                key={f}
                onClick={() => { setActive(f); setShowAll(false); }}
                className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                  active === f
                    ? "border-white bg-white text-ink"
                    : "border-line text-mute hover:border-white/40 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {f}
              </motion.button>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 border-t border-line">
          {visibleRows.map(({ project: p, flip }, i) => (
            <motion.div
              key={`${p.title}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              viewport={{ once: true }}
            >
              {isAllView && p.featured ? (
                <FeaturedRow project={p} onPlay={() => setPlaying(p)} autoplay={i < INITIAL_COUNT} />
              ) : (
                <RegularRow project={p} flip={flip} onPlay={() => setPlaying(p)} autoplay={i < INITIAL_COUNT} />
              )}
            </motion.div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 flex justify-center">
            <motion.button
              onClick={() => setShowAll(true)}
              className="rounded-full bg-white px-12 py-4 text-sm font-semibold uppercase tracking-widest text-ink transition-all duration-300 hover:bg-white/80"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              SE MER
            </motion.button>
          </div>
        )}

        {isAllView && showAll && (
          <div className="mt-12 flex justify-center">
            <motion.button
              onClick={() => setShowAll(false)}
              className="rounded-full bg-white px-12 py-4 text-sm font-semibold uppercase tracking-widest text-ink transition-all duration-300 hover:bg-white/80"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              SE MINDRE
            </motion.button>
          </div>
        )}
      </div>

      {playing?.youtubeId && (
        <VideoModal
          youtubeId={playing.youtubeId}
          title={playing.title}
          onClose={() => setPlaying(null)}
        />
      )}
    </section>
  );
}
