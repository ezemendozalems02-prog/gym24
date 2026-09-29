"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { VisualPanel } from "@/components/visual-panel"
import { siteConfig, whatsappUrl } from "@/lib/site-config"

export function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-28 sm:py-40 overflow-hidden bg-background" ref={ref}>
      <VisualPanel className="absolute inset-0" mark="NLD" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/30" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.h2
          className="font-display uppercase leading-[0.85] text-[clamp(3rem,13vw,10rem)] text-foreground"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Tu <span className="text-primary">Arena</span>
          <br />
          te espera.
        </motion.h2>

        <motion.p
          className="font-display text-xl sm:text-2xl uppercase tracking-[0.2em] text-white/70 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Arena NLD 24hs · {siteConfig.city}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12"
        >
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 sm:px-14 py-5 sm:py-6 bg-primary text-primary-foreground font-bold text-lg sm:text-xl uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity group"
          >
            Quiero ser parte
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
