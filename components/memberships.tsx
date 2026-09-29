"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check } from "lucide-react"
import { plans } from "@/data/plans"
import { whatsappUrl } from "@/lib/site-config"

export function Memberships() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} id="planes" className="py-20 sm:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-[11px] sm:text-xs uppercase tracking-[0.3em] font-semibold">
            08 / Planes
          </span>
          <h2 className="font-display uppercase tracking-tight leading-[0.9] text-[clamp(2.25rem,6vw,5.5rem)] text-balance mt-4">
            Elegí <span className="text-primary">tu forma de entrenar.</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-4">
            Precios a confirmar — próximamente editables desde el panel administrativo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`relative rounded-sm p-8 ${
                plan.featured
                  ? "bg-[#0F0F0F] border-2 border-primary shadow-[0_0_40px_rgba(255,212,0,0.15)]"
                  : "bg-[#0A0A0A] border border-white/10"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                    Más elegido
                  </span>
                </div>
              )}

              <h3
                className={`font-display text-2xl sm:text-3xl uppercase text-center mb-2 ${
                  plan.featured ? "text-primary" : "text-foreground"
                }`}
              >
                {plan.name}
              </h3>
              <p className="text-white/50 text-sm text-center mb-6">{plan.description}</p>

              <div className="text-center mb-8">
                <span className="font-display text-3xl text-foreground">{plan.price}</span>
                <span className="text-white/40 text-sm ml-1">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.featured ? "text-primary" : "text-white/60"}`} />
                    <span className="text-white/80 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappUrl(`Hola Arena NLD, quiero consultar el plan ${plan.name}`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-full py-4 rounded-sm font-bold uppercase tracking-wider text-sm transition-all duration-300 ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-white/20 text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                Consultar plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
