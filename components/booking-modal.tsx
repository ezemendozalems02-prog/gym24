"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, Clock, User, Users, CheckCircle2 } from "lucide-react"
import type { GymClass } from "@/data/classes"

interface BookingModalProps {
  gymClass: GymClass | null
  onClose: () => void
}

export function BookingModal({ gymClass, onClose }: BookingModalProps) {
  const [confirmed, setConfirmed] = useState(false)

  useEffect(() => {
    if (gymClass) {
      setConfirmed(false)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [gymClass])

  return (
    <AnimatePresence>
      {gymClass && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-md bg-[#0D0D0D] border border-primary/30 rounded-sm p-6 sm:p-8"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            {!confirmed ? (
              <>
                <span className="text-primary text-[11px] font-semibold uppercase tracking-[0.3em]">
                  Reservar clase
                </span>
                <h3 className="font-display text-4xl uppercase text-foreground mt-2 mb-6">
                  {gymClass.discipline}
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-white/80">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm uppercase tracking-wide">{gymClass.day}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm uppercase tracking-wide">
                      {gymClass.time} hs · {gymClass.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <User className="w-4 h-4 text-primary" />
                    <span className="text-sm uppercase tracking-wide">Instructor: {gymClass.instructor}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm uppercase tracking-wide">
                      {gymClass.spotsLeft} cupos disponibles
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setConfirmed(true)}
                  className="w-full py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity"
                >
                  Reservar mi lugar
                </button>
              </>
            ) : (
              <motion.div
                className="text-center py-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle2 className="w-14 h-14 text-primary mx-auto mb-4" />
                <h3 className="font-display text-3xl uppercase text-foreground mb-2">
                  ¡Reserva confirmada!
                </h3>
                <p className="text-white/60 text-sm mb-8">
                  {gymClass.discipline} · {gymClass.day} {gymClass.time} hs
                </p>
                <button
                  onClick={onClose}
                  className="w-full py-4 border border-white/20 text-foreground font-bold uppercase tracking-wider rounded-sm hover:border-primary hover:text-primary transition-colors"
                >
                  Listo
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
