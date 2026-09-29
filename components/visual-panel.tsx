import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface VisualPanelProps {
  className?: string
  label?: string
  mark?: string
  glow?: boolean
  image?: string
  imageClassName?: string
  children?: ReactNode
}

/**
 * Generative dark/yellow panel used everywhere real Arena photography would
 * normally go. The gym opens in Oct 2026, so there is no real photography yet —
 * this keeps the premium look without borrowing imagery from unrelated brands.
 * `image` renders an original brand pictogram (see public/images) as a reference
 * illustration on top of the panel.
 */
export function VisualPanel({
  className,
  label,
  mark = "NLD",
  glow = true,
  image,
  imageClassName,
  children,
}: VisualPanelProps) {
  return (
    <div className={cn("relative overflow-hidden bg-[#0A0A0A]", className)}>
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,212,0,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(255,212,0,0.09) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#0A0A0A] to-[#050505]" />
      {glow && (
        <div className="absolute -bottom-1/3 -right-1/4 w-2/3 h-2/3 rounded-full bg-[#FFD400]/10 blur-[90px]" />
      )}
      <span
        aria-hidden="true"
        className="absolute -right-[6%] -bottom-[12%] font-[var(--font-display)] font-normal uppercase leading-none text-white/[0.05] select-none"
        style={{ fontSize: "min(40vw, 18rem)" }}
      >
        {mark}
      </span>
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className={
            imageClassName ??
            "absolute inset-0 m-auto w-[55%] h-[55%] object-contain opacity-90 drop-shadow-[0_0_25px_rgba(255,212,0,0.15)]"
          }
        />
      )}
      <div className="absolute inset-0 grain" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
      {label && (
        <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FFD400]" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/50">{label}</span>
        </div>
      )}
      {children}
    </div>
  )
}
