"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import FallbackImage from "./FallbackImage";

const stats = [
  { value: "Dokumentar", label: "Langform-fortelling" },
  { value: "Kommersiell", label: "Merke- & produktfilmer" },
  { value: "Kortfilm", label: "Narrativ & kunst" },
  { value: "Bedrift", label: "Bedrifts- & sosiale" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <SectionHeading label="Om" title="Bjørn Magnus Berge." />
            <Reveal className="mt-8" delay={120}>
              <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-ink-soft">
                <FallbackImage
                  src="/me.jpg"
                  alt="Bjørn Magnus Berge"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7 md:pt-16">
            <Reveal delay={80}>
              <div className="space-y-6 text-lg leading-relaxed text-white/70">
                <p>
                  Jeg er en filmskaper og videograf som jobber under navnet{" "}
                  <span className="text-white">BERGE</span>. Fra intime
                  dokumentarer til dristige kommersielle filmer hjelper jeg
                  mennesker og merker å fortelle historier som berører.
                </p>
                <p>
                  Hvert prosjekt starter med et spørsmål — hvilket følelse
                  ønsker vi å etterlate oss? Derfra håndterer jeg håndverket
                  fra ende til ende: konsept, filming og klipping, slik at den
                  endelige filmen føles gjennomtenkt i hver eneste ramme.
                </p>
                <p>
                  Basert i Norge, tilgjengelig over hele landet. La oss lage noe
                  verdt å se.
                </p>
              </div>
            </Reveal>

            <motion.div
              className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.value}
                  className="bg-ink p-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ backgroundColor: "rgb(17, 17, 17)" }}
                >
                  <p className="text-xl font-semibold text-white">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-mute">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
