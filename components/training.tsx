"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { trainingModes } from "@/data/training"
import { VisualPanel } from "@/components/visual-panel"

export function Training() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="entrenamiento" className="py-20 sm:py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <motion.div
          className="mb-12 sm:mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="text-primary text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em]">
              02 / Entrenamiento
            </span>
          </div>
          <h2 className="font-display uppercase tracking-tight leading-[0.9] text-[clamp(2.25rem,6vw,5.5rem)] text-balance">
            Entrená <span className="text-primary">a tu manera.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {trainingModes.map((mode, index) => (
            <motion.a
              key={mode.id}
              href={mode.href}
              className="group relative flex flex-col overflow-hidden rounded-sm border border-white/10 hover:border-primary/50 transition-colors bg-card"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              <VisualPanel
                className="aspect-[4/3]"
                mark={String(index + 1).padStart(2, "0")}
                image={mode.image}
                imageClassName="absolute inset-0 m-auto w-[50%] h-[50%] object-contain opacity-90 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-primary text-[11px] font-semibold uppercase tracking-[0.25em]">
                  {mode.tagline}
                </span>
                <div className="flex items-center gap-3 mt-2 mb-3">
                  <mode.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-2xl uppercase tracking-wide text-foreground">
                    {mode.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{mode.description}</p>
                <span className="inline-flex items-center gap-2 mt-4 text-sm font-semibold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors">
                  {mode.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
