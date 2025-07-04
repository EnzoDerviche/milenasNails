"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { openWhatsApp } from "@/hooks/send-whatsapp"
import { Star, Sparkles, Instagram } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <Sparkles className="w-12 h-12 text-rose-400 mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Bienvenida a{" "}
            <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
              Milenas Nails
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Tu salón de uñas de confianza, donde la belleza y el cuidado
            personal se encuentran. Ofrecemos servicios de manicura, pedicura,
            nail art y diseños únicos en un ambiente relajante y acogedor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/70 backdrop-blur-sm border-rose-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Star className="w-8 h-8 text-rose-400 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">
                Atención Personalizada
              </h3>
              <p className="text-gray-600 text-sm">
                Cada cliente es única, por eso adaptamos nuestros servicios a
                tus gustos y necesidades.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-rose-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Sparkles className="w-8 h-8 text-rose-400 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">
                Diseños Únicos
              </h3>
              <p className="text-gray-600 text-sm">
                Creamos nail art personalizado y seguimos las últimas tendencias
                en decoración de uñas.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-rose-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Star className="w-8 h-8 text-rose-400 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">
                Ambiente Relajante
              </h3>
              <p className="text-gray-600 text-sm">
                Disfruta de un momento de paz y relajación mientras cuidamos la
                belleza de tus manos.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col items-center">
        <Button
          onClick={openWhatsApp}
          className="bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Reservar Cita por WhatsApp
        </Button>
        <Button
          onClick={openWhatsApp}
          className="bg-gradient-to-r mt-5 from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <a
            href="https://instagram.com/milenas.nailss"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            Visita nuestro Instagram
            <Instagram className="w-5 h-5" />
          </a>
        </Button>
        </div>
      </div>
    </section>
  );
}
