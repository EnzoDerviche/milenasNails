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
      description:
        "Tratamiento completo de manos con limado, cutícula, esmaltado tradicional e hidratación. Perfecto para mantener tus uñas saludables y hermosas.",
    },
    {
      icon: Sparkles,
      title: "Semipermanente",
      price: "$12.000",
      description:
        "Esmaltado de larga duración con gel que mantiene tus uñas perfectas por 3-4 semanas. Incluye preparación completa y secado profesional.",
    },
    {
      icon: Palette,
      title: "Nail Art",
      price: "$15.000",
      description:
        "Diseños únicos y personalizados con técnicas artísticas. Desde patrones simples hasta decoraciones elaboradas con strass y detalles especiales.",
    },
    {
      icon: Star,
      title: "Pedicura Spa",
      price: "$10.000",
      description:
        "Experiencia relajante para tus pies con baño, exfoliación, masaje y esmaltado. El cuidado perfecto para lucir pies suaves y hermosos.",
    },
    {
      icon: Crown,
      title: "Kapping",
      price: "$18.000",
      description:
        "Extensión profesional de uñas con tips de alta calidad. Esculpido perfecto con esmaltado semipermanente y diseño básico incluido.",
    },
    {
      icon: Sparkles,
      title: "Combo Completo",
      price: "$20.000",
      originalPrice: "$28.000",
      description:
        "La experiencia completa: manicura y pedicura con esmaltado semipermanente. Incluye diseño simple e hidratación total de manos y pies.",
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
