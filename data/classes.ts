export type Discipline = "Funcional" | "Bungee" | "Yoga" | "Animal Flow"

export const disciplines: Discipline[] = ["Funcional", "Bungee", "Yoga", "Animal Flow"]

export const weekDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"] as const

export interface GymClass {
  id: string
  discipline: Discipline
  day: (typeof weekDays)[number]
  time: string
  duration: string
  instructor: string
  capacity: number
  spotsLeft: number
}

export const classes: GymClass[] = [
  { id: "func-lun-08", discipline: "Funcional", day: "Lunes", time: "08:00", duration: "50 min", instructor: "Nico", capacity: 16, spotsLeft: 9 },
  { id: "func-lun-18", discipline: "Funcional", day: "Lunes", time: "18:00", duration: "50 min", instructor: "Nico", capacity: 16, spotsLeft: 4 },
  { id: "bungee-lun-16", discipline: "Bungee", day: "Lunes", time: "16:00", duration: "45 min", instructor: "Male", capacity: 10, spotsLeft: 8 },
  { id: "yoga-mar-07", discipline: "Yoga", day: "Martes", time: "07:00", duration: "60 min", instructor: "Caro", capacity: 14, spotsLeft: 6 },
  { id: "func-mar-19", discipline: "Funcional", day: "Martes", time: "19:00", duration: "50 min", instructor: "Nico", capacity: 16, spotsLeft: 11 },
  { id: "yoga-mie-12", discipline: "Yoga", day: "Miércoles", time: "12:00", duration: "60 min", instructor: "Caro", capacity: 14, spotsLeft: 8 },
  { id: "animal-mie-14", discipline: "Animal Flow", day: "Miércoles", time: "14:00", duration: "45 min", instructor: "Fran", capacity: 12, spotsLeft: 5 },
  { id: "bungee-mie-17", discipline: "Bungee", day: "Miércoles", time: "17:00", duration: "45 min", instructor: "Male", capacity: 10, spotsLeft: 8 },
  { id: "func-jue-08", discipline: "Funcional", day: "Jueves", time: "08:00", duration: "50 min", instructor: "Nico", capacity: 16, spotsLeft: 12 },
  { id: "animal-jue-18", discipline: "Animal Flow", day: "Jueves", time: "18:00", duration: "45 min", instructor: "Fran", capacity: 12, spotsLeft: 3 },
  { id: "bungee-vie-16", discipline: "Bungee", day: "Viernes", time: "16:00", duration: "45 min", instructor: "Male", capacity: 10, spotsLeft: 10 },
  { id: "func-vie-19", discipline: "Funcional", day: "Viernes", time: "19:00", duration: "50 min", instructor: "Nico", capacity: 16, spotsLeft: 7 },
  { id: "yoga-sab-10", discipline: "Yoga", day: "Sábado", time: "10:00", duration: "60 min", instructor: "Caro", capacity: 14, spotsLeft: 9 },
  { id: "animal-sab-11", discipline: "Animal Flow", day: "Sábado", time: "11:00", duration: "45 min", instructor: "Fran", capacity: 12, spotsLeft: 6 },
]
