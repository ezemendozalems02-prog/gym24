import type { Metadata, Viewport } from 'next'
import { Manrope, Anton } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
})

const siteUrl = "https://arenanld.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Arena NLD 24HS | Gimnasio 24 Horas en Ciudad Jardín',
  description:
    'Arena NLD 24HS — entrenamiento, clases y comunidad en Ciudad Jardín. Entrená 24 horas, 365 días. Próxima apertura octubre 2026.',
  keywords: [
    'gimnasio Ciudad Jardín',
    'gimnasio 24 horas Ciudad Jardín',
    'gym 24 horas Ciudad Jardín',
    'gimnasio El Palomar',
    'gimnasio zona oeste',
    'clases funcional Ciudad Jardín',
    'bungee Ciudad Jardín',
    'yoga Ciudad Jardín',
    'Animal Flow Ciudad Jardín',
    'Arena NLD',
  ],
  generator: 'v0.app',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: siteUrl,
    siteName: 'Arena NLD 24HS',
    title: 'Arena NLD 24HS | Gimnasio 24 Horas en Ciudad Jardín',
    description:
      'Entrenamiento · Salud · Comunidad. 24 horas, 365 días. Ciudad Jardín, Buenos Aires. Apertura octubre 2026.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arena NLD 24HS | Gimnasio 24 Horas en Ciudad Jardín',
    description: 'Entrenamiento · Salud · Comunidad. 24 horas, 365 días. Ciudad Jardín, Buenos Aires.',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "Arena NLD 24HS",
  description:
    "Gimnasio 24 horas, 365 días en Ciudad Jardín, Buenos Aires. Entrenamiento, clases funcionales, bungee, yoga y Animal Flow. Apertura octubre 2026.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ciudad Jardín",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  openingHours: "Mo-Su 00:00-24:00",
  sameAs: ["https://instagram.com/arenanld"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${manrope.variable} ${anton.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
