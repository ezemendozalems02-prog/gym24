"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { navLinks, whatsappUrl } from "@/lib/site-config"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    }, 120)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#")}
            className="flex items-center gap-0.5 bg-transparent border-none cursor-pointer shrink-0"
          >
            <span className="font-display text-3xl sm:text-4xl uppercase tracking-tight leading-none">
              <span className="text-foreground">NLD</span>
              <span className="text-primary">/</span>
              <span className="text-foreground">24</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 pl-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors text-[13px] font-semibold uppercase tracking-wider cursor-pointer bg-transparent border-none whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
            <span className="h-4 w-px bg-white/15" />
            <button
              onClick={() => handleNavClick("#planes")}
              className="text-muted-foreground hover:text-foreground transition-colors text-[13px] font-semibold uppercase tracking-wider cursor-pointer bg-transparent border-none whitespace-nowrap"
            >
              Ingresar
            </button>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 xl:px-6 py-2.5 bg-primary text-primary-foreground font-bold text-[13px] uppercase tracking-wider rounded-sm cursor-pointer border border-primary hover:bg-transparent hover:text-primary transition-colors whitespace-nowrap"
            >
              Quiero ser parte
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Abrir menú"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#050505] lg:hidden flex flex-col"
          >
            <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
              <span className="font-display text-3xl uppercase tracking-tight">
                <span className="text-foreground">NLD</span>
                <span className="text-primary">/</span>
                <span className="text-foreground">24</span>
              </span>
              <button onClick={() => setIsOpen(false)} className="p-2 text-foreground" aria-label="Cerrar menú">
                <X className="w-7 h-7" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center gap-2 px-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                  className="text-left font-display text-5xl sm:text-6xl uppercase tracking-tight text-foreground/90 hover:text-primary transition-colors bg-transparent border-none cursor-pointer py-1"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => handleNavClick("#planes")}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * navLinks.length + 0.1 }}
                className="text-left font-display text-5xl sm:text-6xl uppercase tracking-tight text-foreground/50 hover:text-primary transition-colors bg-transparent border-none cursor-pointer py-1"
              >
                Ingresar
              </motion.button>
            </nav>

            <div className="px-6 pb-10">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-4 bg-primary text-primary-foreground font-bold text-center uppercase tracking-wider rounded-sm cursor-pointer border-none"
              >
                Quiero ser parte
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
