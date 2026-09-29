"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, HeartPulse, Users2, Sparkles } from "lucide-react"

const concepts = [
  { icon: Zap, title: "Performance", text: "Superá tus límites." },
  { icon: HeartPulse, title: "Wellness", text: "Cuidá tu cuerpo." },
  { icon: Users2, title: "Community", text: "Entrená acompañado." },
  { icon: Sparkles, title: "Lifestyle", text: "Viví NLD." },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="mb-12 sm:mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="text-primary text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em]">
              04 / Experiencia
            </span>
          </div>
          <h2 className="font-display uppercase tracking-tight leading-[0.9] text-[clamp(2.25rem,6vw,5.5rem)] text-balance">
            Más que <span className="text-primary">entrenamiento.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {concepts.map((concept, index) => (
            <motion.div
              key={concept.title}
              className="bg-background p-8 flex flex-col gap-4 group hover:bg-[#0D0D0D] transition-colors"
              initial={{ opacity: 0, y: index % 2 === 0 ? 30 : -30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <concept.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-2xl uppercase tracking-wide text-foreground">{concept.title}</h3>
              <p className="text-muted-foreground text-sm">{concept.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
