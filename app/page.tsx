"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ImageCarousel } from "@/components/image-carousel"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { FloatingSocial } from "@/components/floating-social"
import { AppointmentsSection } from "@/components/appointments-section"

export default function MilenasNailsLanding() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100">
      <Navigation />
      <Header />
      <HeroSection/>
      <ServicesSection/>
      <AppointmentsSection />
      <ImageCarousel />
      <ContactSection/>
      <Footer />
      <FloatingSocial />
    </div>
  )
}
