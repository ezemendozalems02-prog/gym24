"use client"

import { useEffect, useState } from "react"
import { siteConfig } from "@/lib/site-config"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, new Date(siteConfig.openingDateISO).getTime() - Date.now())
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  }
}

const units: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "Días" },
  { key: "hours", label: "Hs" },
  { key: "minutes", label: "Min" },
  { key: "seconds", label: "Seg" },
]

export function Countdown({ className }: { className?: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTimeLeft(getTimeLeft())
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={className}>
      <div className="flex items-center gap-2 mb-2">
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-blink-dot" />
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/50">
          Opening October 2026
        </span>
      </div>
      <div className="flex items-end gap-3 sm:gap-5">
        {units.map((unit, i) => (
          <div key={unit.key} className="flex items-end gap-3 sm:gap-5">
            <div className="flex flex-col items-start">
              <span className="font-display text-3xl sm:text-5xl text-foreground tabular-nums leading-none">
                {timeLeft ? String(timeLeft[unit.key]).padStart(2, "0") : "--"}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white/40 mt-1">
                {unit.label}
              </span>
            </div>
            {i < units.length - 1 && (
              <span className="font-display text-2xl sm:text-4xl text-primary/50 pb-3 sm:pb-4">:</span>
            )}
          </div>
        ))}
      </div>
      <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/40 mt-3">
        Para la apertura
      </p>
    </div>
  )
}
