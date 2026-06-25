"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const services = [
  {
    n: "01",
    title: "Dokumentar",
    body: "Langform, karakterdrevet fortelling. Fra forskning og intervjuer til sluttklipp — filmer som fanger virkeligheten med ærlighet og håndverk.",
  },
  {
    n: "02",
    title: "Kortfilm",
    body: "Narrative og eksperimentelle verk. Konseptutvikling, regi og cinematografi for historier som fortjener storskjermen.",
  },
  {
    n: "03",
    title: "Kommersielle filmer",
    body: "Merke- og produktfilmer bygget for å selge en følelse. Skaperisk, stoppende innhold tilpasset kampanjer og sosiale medier.",
  },
  {
    n: "04",
    title: "Bedriftsvideo",
    body: "Bedrifthistorier, rekrutteringsfilmer og casestudier som gjør bedrifter menneskelige og verdt å jobbe med.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading label="Tjenester" title="Det jeg gjør bak linsen." />

        <motion.div
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              className="h-full bg-ink p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (i % 2) * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ backgroundColor: "rgb(17, 17, 17)" }}
            >
              <div className="flex items-start justify-between">
                <span className="text-sm text-mute">{s.n}</span>
                <motion.span
                  className="h-px bg-line"
                  initial={{ width: 40 }}
                  whileHover={{ width: 64, backgroundColor: "white" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-white md:text-3xl">
                {s.title}
              </h3>
              <p className="mt-4 max-w-md leading-relaxed text-white/60">
                {s.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
