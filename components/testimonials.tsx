"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star } from "lucide-react"
import { testimonials } from "@/data/testimonials"

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-[#070707] relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em]">
            07 / Testimonios
          </span>
          <h2 className="font-display uppercase tracking-tight leading-[0.9] text-[clamp(2rem,5.5vw,4.5rem)] mt-4">
            La experiencia <span className="text-primary">NLD.</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-4 max-w-md mx-auto">
            Placeholders — se reemplazan por testimonios reales una vez abierto el Arena.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-[#0D0D0D] border border-white/10 rounded-sm p-6 flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                  <span className="text-white/40 font-display text-lg">?</span>
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed italic">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
