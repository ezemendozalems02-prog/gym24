export const siteConfig = {
  name: "Arena NLD 24hs",
  shortName: "NLD",
  claim: "Una nueva forma de vivir NLD.",
  pillars: ["Entrenamiento", "Salud", "Comunidad"],
  schedule: "24 horas · 365 días",
  city: "Ciudad Jardín",
  region: "Buenos Aires",
  country: "AR",
  openingLabel: "Octubre 2026",
  // ISO date used by the countdown — update when the real opening date is confirmed.
  openingDateISO: "2026-10-01T00:00:00-03:00",
  instagram: "https://instagram.com/arenanld",
  instagramHandle: "@arenanld",
  tiktok: "https://tiktok.com/@arenanld",
  // Placeholder — reemplazar por el número real del Arena antes de publicar.
  whatsappNumber: "5491100000000",
  whatsappDefaultMessage: "Hola Arena NLD, quiero conocer los planes y clases disponibles",
}

export function whatsappUrl(message: string = siteConfig.whatsappDefaultMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "El Arena", href: "#el-arena" },
  { label: "Entrenamiento", href: "#entrenamiento" },
  { label: "Clases", href: "#clases" },
  { label: "Planes", href: "#planes" },
  { label: "Comunidad", href: "#comunidad" },
]
