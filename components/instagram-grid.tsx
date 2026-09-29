"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Instagram } from "lucide-react"
import { VisualPanel } from "@/components/visual-panel"
import { siteConfig } from "@/lib/site-config"

const gridImages = [
  "/images/training-gym-libre.svg",
  "/images/training-funcional.svg",
  "/images/community-group.svg",
  "/images/training-bungee.svg",
  "/images/training-yoga.svg",
  "/images/training-animal-flow.svg",
]

export function InstagramGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em]">
            06 / Instagram
          </span>
          <h2 className="font-display uppercase tracking-tight leading-[0.9] text-[clamp(2rem,5.5vw,4.5rem)] mt-4">
            Follow the movement.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.a
              key={i}
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-sm block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <VisualPanel
                className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                mark={String(i + 1).padStart(2, "0")}
                image={gridImages[i]}
                imageClassName="absolute inset-0 m-auto w-[55%] h-[55%] object-contain opacity-90"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground font-display text-xl uppercase tracking-wide hover:text-primary transition-colors"
          >
            {siteConfig.instagramHandle}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
