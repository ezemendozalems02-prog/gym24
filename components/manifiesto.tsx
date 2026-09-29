"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { siteConfig } from "@/lib/site-config"

function WordReveal({ text, className, startDelay = 0 }: { text: string; className?: string; startDelay?: number }) {
  const words = text.split(" ")
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: startDelay + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export function Manifiesto() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-40 bg-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-display uppercase leading-[0.92] text-[clamp(2.25rem,7.5vw,6rem)] text-balance">
          <WordReveal text="No es solo un gimnasio." className="block text-foreground" />
          <WordReveal
            text="Es tu Arena."
            className="block text-primary"
            startDelay={0.5}
          />
        </h2>

        <motion.p
          className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-8 leading-relaxed text-pretty"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Un espacio creado para quienes quieren entrenar, evolucionar y formar parte de una
          comunidad que no se detiene.
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-10">
          {siteConfig.pillars.map((pillar, i) => (
            <motion.span
              key={pillar}
              className="px-5 py-2.5 border border-primary/40 text-primary font-display text-lg sm:text-xl uppercase tracking-wide rounded-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 1.2 + i * 0.12 }}
            >
              {pillar}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
