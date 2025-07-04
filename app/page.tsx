"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ImageCarousel } from "@/components/image-carousel"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function MilenasNailsLanding() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100">
      <Header />
      <HeroSection/>
      <ServicesSection/>
      <ImageCarousel />
      <ContactSection/>
      <Footer />
    </div>
  )
}
