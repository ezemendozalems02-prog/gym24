"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Play } from "lucide-react"
import { VisualPanel } from "@/components/visual-panel"

const stats = [
  { value: "24HS", label: "Entrenamiento todos los días" },
  { value: "365", label: "Días al año" },
  { value: "100%", label: "Experiencia NLD" },
  { value: "∞", label: "Posibilidades" },
]

export function ArenaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="el-arena" className="py-20 md:py-32 bg-[#070707] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="mb-12 sm:mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="text-primary text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em]">
              01 / El Arena
            </span>
          </div>
          <h2 className="font-display uppercase tracking-tight leading-[0.9] text-[clamp(2.25rem,6vw,5.5rem)] text-balance">
            Conocé <span className="text-primary">el Arena.</span>
          </h2>
        </motion.div>

        {/* Editorial layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-16 sm:mb-20">
          <motion.div
            className="col-span-2 row-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <VisualPanel
              className="h-full min-h-[280px] sm:min-h-[420px] rounded-sm"
              label="El Arena — imagen próxima apertura"
              image="/images/arena-rack.svg"
              imageClassName="absolute inset-0 m-auto w-[75%] h-[60%] object-contain opacity-90"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <VisualPanel className="h-full min-h-[130px] sm:min-h-[200px] rounded-sm" mark="24" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <VisualPanel className="h-full min-h-[130px] sm:min-h-[200px] rounded-sm" mark="NLD" />
          </motion.div>

          <motion.div
            className="col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <VisualPanel className="relative h-full min-h-[130px] sm:min-h-[200px] rounded-sm" mark="PLAY" glow={false} label="Recorré el Arena — video próximamente">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/90">
                  <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground ml-0.5" />
                </span>
              </div>
            </VisualPanel>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 pt-12 border-t border-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <span className="font-display text-5xl sm:text-6xl md:text-7xl text-primary tracking-tight">
                {stat.value}
              </span>
              <span className="text-white/60 text-xs sm:text-sm uppercase tracking-wider mt-3 font-medium max-w-[140px]">
                {stat.label}
              </span>
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
