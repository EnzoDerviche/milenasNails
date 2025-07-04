"use client"

import { Button } from "@/components/ui/button"
import { Palette, Heart, Sparkles, Star, Crown } from "lucide-react"
import { ServiceCard } from "./service-card"
import { openWhatsApp } from "@/hooks/send-whatsapp"

export function ServicesSection() {
  const services = [
    {
      icon: Heart,
      title: "Manicura Clásica",
      price: "$8.000",
      features: [
        "Limado y forma de uñas",
        "Cutícula y limpieza profunda",
        "Esmaltado tradicional",
        "Hidratación de manos",
        "Duración: 45 minutos",
      ],
    },
    {
      icon: Sparkles,
      title: "Semipermanente",
      price: "$12.000",
      features: [
        "Preparación completa de uñas",
        "Esmaltado gel de larga duración",
        "Secado con lámpara UV/LED",
        "Duración: 3-4 semanas",
        "Tiempo: 60 minutos",
      ],
    },
    {
      icon: Palette,
      title: "Nail Art",
      price: "$15.000",
      features: [
        "Diseños personalizados",
        "Decoraciones con strass",
        "Técnicas de arte manual",
        "Esmaltado semipermanente",
        "Duración: 90 minutos",
      ],
    },
    {
      icon: Star,
      title: "Pedicura Spa",
      price: "$10.000",
      features: [
        "Baño de pies relajante",
        "Exfoliación y masaje",
        "Tratamiento de cutículas",
        "Esmaltado tradicional",
        "Duración: 75 minutos",
      ],
    },
    {
      icon: Crown,
      title: "Kapping",
      price: "$18.000",
      features: [
        "Extensión de uñas con tips",
        "Esculpido y forma perfecta",
        "Esmaltado semipermanente",
        "Diseño básico incluido",
        "Duración: 2 horas",
      ],
    },
    {
      icon: Sparkles,
      title: "Combo Completo",
      price: "$20.000",
      originalPrice: "$28.000",
      features: [
        "Manicura + Pedicura",
        "Esmaltado semipermanente",
        "Diseño simple incluido",
        "Hidratación completa",
        "Duración: 2.5 horas",
      ],
      isPopular: true,
    },
  ]

  return (
    <section id="servicios" className="py-16 px-4 bg-white/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Palette className="w-12 h-12 text-rose-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra amplia gama de servicios diseñados para realzar tu belleza natural
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">¿Necesitas algo específico? Consultanos por servicios personalizados</p>
          <Button
            onClick={openWhatsApp}
            className="bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Consultar Precios Personalizados
          </Button>
        </div>
      </div>
    </section>
  )
}
