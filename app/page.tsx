import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MarqueeBanner } from "@/components/marquee-banner"
import { Manifiesto } from "@/components/manifiesto"
import { ArenaSection } from "@/components/arena-section"
import { Training } from "@/components/training"
import { ClassesSchedule } from "@/components/classes-schedule"
import { Gym24 } from "@/components/gym-24"
import { Experience } from "@/components/experience"
import { Community } from "@/components/community"
import { InstagramGrid } from "@/components/instagram-grid"
import { Testimonials } from "@/components/testimonials"
import { Memberships } from "@/components/memberships"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MobileStickyCTA } from "@/components/mobile-sticky-cta"
import { CustomCursor } from "@/components/site-effects"

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <MarqueeBanner />
        <Manifiesto />
        <ArenaSection />
        <Training />
        <ClassesSchedule />
        <Gym24 />
        <Experience />
        <Community />
        <InstagramGrid />
        <Testimonials />
        <Memberships />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileStickyCTA />
    </>
  )
}
