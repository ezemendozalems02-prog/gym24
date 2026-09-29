"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { VisualPanel } from "@/components/visual-panel"

const steps = ["Entrená", "Conectá", "Evolucioná"]

export function Community() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="comunidad" className="py-20 sm:py-24 md:py-32 bg-[#070707] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Mosaic */}
          <motion.div
            className="grid grid-cols-3 gap-3 sm:gap-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <VisualPanel
                key={i}
                className={i === 4 ? "col-span-1 row-span-1 aspect-square" : "aspect-square"}
                mark={i % 3 === 0 ? "NLD" : "24"}
                glow={i === 4}
              />
            ))}
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px w-12 bg-primary" />
              <span className="text-primary text-[11px] font-semibold uppercase tracking-[0.3em]">
                05 / Comunidad
              </span>
            </div>

            <h2 className="font-display uppercase tracking-tight leading-[0.9] text-[clamp(2.25rem,6vw,5rem)] text-balance mb-6">
              NLD <span className="text-primary">somos nosotros.</span>
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Personas diferentes. Objetivos diferentes. Una misma energía.
            </p>

            <div className="flex flex-wrap gap-3">
              {steps.map((step, i) => (
                <motion.span
                  key={step}
                  className="px-5 py-2.5 border border-white/15 text-foreground font-display text-lg uppercase tracking-wide rounded-sm hover:border-primary hover:text-primary transition-colors"
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  {step}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
