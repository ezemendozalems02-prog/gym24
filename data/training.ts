import type { LucideIcon } from "lucide-react"
import { Dumbbell, Flame, Wind, Sparkles, Activity } from "lucide-react"

export interface TrainingMode {
  id: string
  icon: LucideIcon
  image: string
  title: string
  tagline: string
  description: string
  cta: string
  href: string
}

export const trainingModes: TrainingMode[] = [
  {
    id: "gym-libre",
    icon: Dumbbell,
    image: "/images/training-gym-libre.svg",
    title: "Gym Libre",
    tagline: "24HS · EQUIPAMIENTO COMPLETO",
    description: "Entrená libremente utilizando el equipamiento del Arena, cuando quieras, a tu ritmo.",
    cta: "Conocer gym",
    href: "#el-arena",
  },
  {
    id: "funcional",
    icon: Flame,
    image: "/images/training-funcional.svg",
    title: "Entrenamiento Funcional",
    tagline: "FUERZA · RESISTENCIA · MOVILIDAD",
    description: "Entrenamientos dinámicos orientados a fuerza, resistencia, movilidad y rendimiento.",
    cta: "Ver clases",
    href: "#clases",
  },
  {
    id: "bungee",
    icon: Sparkles,
    image: "/images/training-bungee.svg",
    title: "Bungee",
    tagline: "ENTRENÁ VOLANDO",
    description: "Una experiencia de entrenamiento diferente. Fuerza, suspensión y control en el aire.",
    cta: "Ver clases",
    href: "#clases",
  },
  {
    id: "yoga",
    icon: Wind,
    image: "/images/training-yoga.svg",
    title: "Yoga",
    tagline: "MOVIMIENTO Y BIENESTAR",
    description: "Espacio de respiración, movilidad y conexión con el cuerpo para equilibrar el entrenamiento.",
    cta: "Ver clases",
    href: "#clases",
  },
  {
    id: "animal-flow",
    icon: Activity,
    image: "/images/training-animal-flow.svg",
    title: "Animal Flow",
    tagline: "MOVIMIENTO Y CONTROL",
    description: "Una disciplina enfocada en movilidad, control corporal y movimiento natural.",
    cta: "Ver clases",
    href: "#clases",
  },
]
