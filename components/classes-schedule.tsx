"use client"

import { useState, useMemo } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, User, Users } from "lucide-react"
import { classes, disciplines, weekDays, type Discipline, type GymClass } from "@/data/classes"
import { BookingModal } from "@/components/booking-modal"
import { cn } from "@/lib/utils"

export function ClassesSchedule() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [filter, setFilter] = useState<Discipline | "Todas">("Todas")
  const [selected, setSelected] = useState<GymClass | null>(null)

  const filtered = useMemo(
    () => classes.filter((c) => filter === "Todas" || c.discipline === filter),
    [filter],
  )

  const byDay = useMemo(() => {
    const map = new Map<string, GymClass[]>()
    weekDays.forEach((day) => map.set(day, []))
    filtered.forEach((c) => map.get(c.day)?.push(c))
    return map
  }, [filtered])

  return (
    <section id="clases" className="py-20 sm:py-24 md:py-32 bg-[#070707] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <motion.div
          className="mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="text-primary text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em]">
              03 / Clases
            </span>
          </div>
          <h2 className="font-display uppercase tracking-tight leading-[0.9] text-[clamp(2.25rem,6vw,5.5rem)] text-balance">
            Encontrá <span className="text-primary">tu clase.</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-10 scrollbar-hide">
          {(["Todas", ...disciplines] as const).map((d) => (
            <button
              key={d}
              onClick={() => setFilter(d)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wide whitespace-nowrap transition-all duration-300 border",
                filter === d
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-white/15 text-muted-foreground hover:border-primary/50 hover:text-foreground",
              )}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Desktop dashboard grid */}
        <div className="hidden lg:grid lg:grid-cols-6 gap-4">
          {weekDays.map((day) => (
            <div key={day} className="flex flex-col gap-3">
              <span className="text-white/50 text-xs font-semibold uppercase tracking-[0.2em] pb-2 border-b border-white/10">
                {day}
              </span>
              {(byDay.get(day) ?? []).map((c) => (
                <ClassCard key={c.id} gymClass={c} onReserve={() => setSelected(c)} />
              ))}
              {(byDay.get(day) ?? []).length === 0 && (
                <span className="text-white/20 text-xs uppercase tracking-wide py-4">—</span>
              )}
            </div>
          ))}
        </div>

        {/* Mobile list grouped by day */}
        <div className="lg:hidden space-y-8">
          {weekDays.map((day) => {
            const items = byDay.get(day) ?? []
            if (items.length === 0) return null
            return (
              <div key={day}>
                <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">{day}</span>
                <div className="grid sm:grid-cols-2 gap-3 mt-3">
                  {items.map((c) => (
                    <ClassCard key={c.id} gymClass={c} onReserve={() => setSelected(c)} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <BookingModal gymClass={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

function ClassCard({ gymClass, onReserve }: { gymClass: GymClass; onReserve: () => void }) {
  return (
    <div className="bg-[#0F0F0F] border border-white/10 hover:border-primary/40 rounded-sm p-4 transition-colors flex flex-col gap-3">
      <span className="font-display text-xl uppercase tracking-wide text-foreground">{gymClass.discipline}</span>
      <div className="flex items-center gap-2 text-white/60 text-xs">
        <Clock className="w-3.5 h-3.5 text-primary" />
        <span>{gymClass.time} hs · {gymClass.duration}</span>
      </div>
      <div className="flex items-center gap-2 text-white/60 text-xs">
        <User className="w-3.5 h-3.5 text-primary" />
        <span>{gymClass.instructor}</span>
      </div>
      <div className="flex items-center gap-2 text-white/60 text-xs">
        <Users className="w-3.5 h-3.5 text-primary" />
        <span>{gymClass.spotsLeft} cupos</span>
      </div>
      <button
        onClick={onReserve}
        className="mt-1 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:gap-2.5 transition-all"
      >
        Reservar →
      </button>
    </div>
  )
}
