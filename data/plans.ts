export interface Plan {
  id: string
  name: string
  price: string
  period: string
  description: string
  benefits: string[]
  featured?: boolean
}

// Precios placeholder — editables desde el futuro panel administrativo.
export const plans: Plan[] = [
  {
    id: "start",
    name: "NLD Start",
    price: "A confirmar",
    period: "/ mes",
    description: "Acceso al gimnasio, 24 horas, 365 días.",
    benefits: ["Acceso ilimitado al Arena", "Gym libre 24hs", "App de reservas"],
  },
  {
    id: "plus",
    name: "NLD Plus",
    price: "A confirmar",
    period: "/ mes",
    description: "Gym + clases grupales.",
    benefits: [
      "Todo lo de NLD Start",
      "Funcional, Yoga y Animal Flow",
      "Reserva de clases sin cargo",
    ],
    featured: true,
  },
  {
    id: "full",
    name: "NLD Full",
    price: "A confirmar",
    period: "/ mes",
    description: "Gym + todas las clases + beneficios.",
    benefits: [
      "Todo lo de NLD Plus",
      "Bungee incluido",
      "Beneficios y descuentos exclusivos",
    ],
  },
]
