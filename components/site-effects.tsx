"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[60]"
      style={{ scaleX }}
    />
  )
}

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    if (!canHover) return
    setEnabled(true)

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  if (!enabled) return null

  return (
    <div
      className="cursor-dot"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)` }}
      aria-hidden="true"
    />
  )
}
