"use client"

import { Button } from "@/components/ui/button"
import { Palette, Heart, Sparkles, Star, Crown, Brush, Flower } from "lucide-react"
import { ServiceCard } from "./service-card"
import { openWhatsApp } from "@/hooks/send-whatsapp"

export function ServicesSection() {
 const services = [
  {
    icon: Heart,
    title: "Manicura Rusa",
    price: "$10.000",
    time: "45 min",
    description:
      "Uso del torno en su totalidad. Permite trabajar las uñas y cutículas con precisión y seguridad. Se enfoca en la limpieza profunda.",
  },
  {
    icon: Sparkles,
    title: "Semipermanente",
    price: "$15.000",
    time: "1h 15 min",
    description:
      "Esmaltado de secado inmediato y de larga duración. Se aplica un esmalte específico y se seca con lámpara UV o LED. Su duración es de 2 a 3 semanas.",
  },
  {
    icon: Brush,
    title: "Capping con base Rubber",
    price: "$18.000",
    time: "1h 30 min",
    description:
      "Aplicación de una capa de gel sobre la uña que actúa como barrera protectora. Ayuda a que la uña crezca sin romperse, ideal para uñas débiles. A diferencia de las uñas esculpidas, este servicio no alarga la uña, sino que acompaña su crecimiento. Su duración es de 2 a 3 semanas.",
  },
  {
    icon: Star,
    title: "Capping con Polygel",
    price: "$20.000",
    time: "1h 45 min",
    description:
      "Aplicación de una capa de polygel sobre la uña. A diferencia del gel, este material es más rígido y resistente, ideal para uñas que necesitan mayor soporte. Este servicio no alarga la uña, sino que acompaña su crecimiento. Su duración es de 2 a 3 semanas.",
  },
  {
    icon: Crown,
    title: "Uñas Esculpidas en Polygel",
    price: "$22.000",
    subDescription: "(N1 y N2) $1.500 adicionales por largo de uña",
    time: "2h 15 min",
    isPopular: true,
    description:
      "Extensiones construidas sobre la uña natural con material polygel. Permiten reconstruir uñas mordidas o lucir uñas más largas. Se puede moldear la forma y longitud para obtener diferentes estilos. Su duración es de 2 a 3 semanas.",
  },
  {
    icon: Flower,
    title: "Tecnicas",
    price: "$10.000",
    subDescription: "Valor por uña",
    time: "40 min extra",
    features: [
      "Babyboomer: $1.000",
      "Encapsulados: $1.500",
      "French Reversa Tradicional: $1.500",
      "French Reversa Fantasia: $2.000",
    ],
    description: 'SET: Decoración en todas las uñas, combinando diferentes tipos de técnicas y Nail Art. Valor: $10.000',
  },
  {
    icon: Palette,
    title: "Nail Art Básico",
    price: "$500",
    time: "15 min extra",
    subDescription:
      "(Valor por uña)",
    description: 'SET: Decoración en todas las uñas, combinando diferentes tipos de Nail Art. Valor: $5.000',
    features: [
      "Dibujos a mano alzada",
      "Polvos cromados",
      "Diseños con aerógrafo",
    ],
  },
];

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
