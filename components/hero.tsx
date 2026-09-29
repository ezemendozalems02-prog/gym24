"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, MapPin } from "lucide-react"
import type { Variants } from "framer-motion"
import { VisualPanel } from "@/components/visual-panel"
import { Countdown } from "@/components/countdown"
import { siteConfig, whatsappUrl } from "@/lib/site-config"

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  const lineReveal: Variants = {
    hidden: { opacity: 0, y: "110%" },
    visible: (i: number) => ({
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.7,
        delay: 0.2 + i * 0.12,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Generative background */}
      <div className="absolute inset-0">
        <VisualPanel
          className="absolute inset-0 w-full h-full"
          glow
          mark="NLD"
          image="/images/hero-lift.svg"
          imageClassName="absolute right-[-2%] bottom-0 w-[60%] h-[85%] object-contain object-bottom drop-shadow-[0_0_35px_rgba(255,212,0,0.18)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/70 via-transparent to-transparent" />
        {/* light streak */}
        <div className="hidden md:block absolute top-0 right-[15%] w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 pt-28 pb-20">
        {/* Microlabel */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="h-px w-10 bg-primary" />
          <span className="text-primary text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em]">
            Arena NLD 24hs
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-display uppercase tracking-tight leading-[0.85] text-balance mb-6 text-[clamp(2.75rem,10vw,8rem)]">
          <span className="block overflow-hidden">
            <motion.span
              className="block text-foreground"
              custom={0}
              variants={lineReveal}
              initial="hidden"
              animate="visible"
            >
              Entrená
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-primary"
              custom={1}
              variants={lineReveal}
              initial="hidden"
              animate="visible"
            >
              sin límites.
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="font-display text-lg sm:text-2xl text-foreground/90 tracking-wide mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          24 HORAS · 365 DÍAS
        </motion.p>

        {/* Subtitle */}
        <motion.p
          className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-10 text-pretty"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          Un nuevo espacio de entrenamiento llega a {siteConfig.city}. Equipamiento, clases,
          comunidad y una experiencia diseñada para que entrenes a tu manera.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider rounded-sm group hover:opacity-90 transition-opacity"
          >
            Quiero ser parte
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={() => scrollTo("el-arena")}
            className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-transparent text-foreground font-bold uppercase tracking-wider rounded-sm border border-white/20 hover:border-primary hover:text-primary transition-colors"
          >
            Conocer el Arena
          </button>
        </motion.div>

        {/* Countdown + location */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-16"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.05 }}
        >
          <Countdown />
          <div className="flex items-center gap-2 text-white/70">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm uppercase tracking-widest">{siteConfig.city}</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("el-arena")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll hacia abajo"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  )
}
