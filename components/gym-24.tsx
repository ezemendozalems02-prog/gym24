"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const moments = [
  { time: "05:00", label: "Entrenamiento temprano" },
  { time: "14:00", label: "Entrenamiento durante el día" },
  { time: "23:00", label: "Entrenamiento nocturno" },
]

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const duration = 1400
    const start = Date.now()
    const tick = () => {
      const progress = Math.min((Date.now() - start) / duration, 1)
      setDisplay(Math.floor((1 - Math.pow(1 - progress, 3)) * value))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, value])

  return (
    <span ref={ref} className="font-display text-[9rem] sm:text-[14rem] md:text-[18rem] leading-none text-primary tabular-nums">
      {display}
    </span>
  )
}

export function Gym24() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-[#070707] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-[0.4]" style={{
        backgroundImage: "radial-gradient(circle at 50% 30%, rgba(255,212,0,0.08) 0%, transparent 60%)",
      }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <AnimatedNumber value={24} />
        <div className="flex items-center justify-center gap-4 -mt-4 sm:-mt-8">
          <span className="font-display text-3xl sm:text-5xl uppercase tracking-widest text-foreground">Horas</span>
          <span className="h-8 w-px bg-white/20" />
          <span className="font-display text-3xl sm:text-5xl uppercase tracking-widest text-foreground">365 días</span>
        </div>

        <motion.p
          className="text-muted-foreground text-base sm:text-xl max-w-xl mx-auto mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tu entrenamiento no debería depender del horario.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto mt-14">
          {moments.map((moment, i) => (
            <motion.div
              key={moment.time}
              className="border border-white/10 rounded-sm p-6 hover:border-primary/40 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
            >
              <span className="font-display text-3xl sm:text-4xl text-primary tracking-wide">{moment.time}</span>
              <p className="text-white/60 text-sm mt-2 uppercase tracking-wide">{moment.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-foreground mt-14"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Entrená cuando vos querés.
        </motion.p>
      </div>
    </section>
  )
}
