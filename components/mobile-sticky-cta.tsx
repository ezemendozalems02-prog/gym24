"use client"

import { whatsappUrl } from "@/lib/site-config"

export function MobileStickyCTA() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#050505]/95 backdrop-blur-md border-t border-white/10 px-4 py-3">
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full py-3.5 bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm rounded-sm"
      >
        Quiero ser parte
      </a>
    </div>
  )
}
