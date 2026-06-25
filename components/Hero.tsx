"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex h-svh min-h-[600px] w-full items-center justify-center overflow-hidden"
    >
      {/* Background media with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 h-full w-full">
        <video
          src="/homevideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Light touch: a subtle bottom fade so the hero blends into the page,
          plus a faint vignette for logo legibility. Kept light so the GIF stays bright. */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/10" />

      {/* Content with staggered animations */}
      <motion.div
        className="relative z-10 w-full px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.p
          className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Filmskaper | Klipper | Videograf
        </motion.p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          src="/logo-trimmed.png"
          alt="BERGE"
          className="mx-auto w-[85%] max-w-3xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        />
        <motion.p
          className="mx-auto mt-8 max-w-md text-balance text-base text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] md:text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Skaperisk film &amp; video av Bjørn Magnus Berge.
        </motion.p>
        <motion.div
          className="mt-10 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <motion.a
            href="#work"
            className="rounded-full bg-white px-7 py-3 text-sm font-medium text-ink transition-all duration-300"
            whileHover={{ scale: 1.08, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            Se arbeider
          </motion.a>
          <motion.a
            href="#contact"
            className="rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white transition-all duration-300"
            whileHover={{ borderColor: "white", boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.98 }}
          >
            Kontakt
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="h-12 w-px animate-pulse bg-gradient-to-b from-white/0 to-white/60" />
      </div>
    </section>
  );
}
