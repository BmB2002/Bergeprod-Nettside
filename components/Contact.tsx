"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const EMAIL = "kontakt.bergemedia@gmail.com";

const socials = [
  { label: "Instagram", href: "https://instagram.com/bm.berge" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bj%C3%B8rn-magnus-berge-47a197279/" },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="label mb-6">Kontakt</p>
          <a
            href={`mailto:${EMAIL}`}
            className="block text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white transition-colors hover:text-white/60 sm:text-6xl md:text-7xl"
          >
            La oss lage
            <br />
            noe sammen.
          </a>
        </Reveal>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-10 border-t border-line pt-10 md:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            viewport={{ once: true }}
          >
            <p className="label mb-3">E-post</p>
            <motion.a
              href={`mailto:${EMAIL}`}
              className="text-lg text-white transition-colors"
              whileHover={{ color: "#999999" }}
            >
              {EMAIL}
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="label mb-3">Basert i</p>
            <p className="text-lg text-white">Norge — tilgjengelig over hele landet</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="label mb-3">Følg</p>
            <ul className="flex flex-col gap-2">
              {socials.map((s, i) => (
                <motion.li
                  key={s.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-white transition-colors"
                    whileHover={{ color: "#999999", x: 4 }}
                  >
                    {s.label} ↗
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
