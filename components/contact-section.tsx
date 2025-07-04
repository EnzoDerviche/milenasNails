"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { openWhatsApp } from "@/hooks/send-whatsapp"
import { MapPin, Clock, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Visitanos y Contactanos</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-white/70 backdrop-blur-sm border-rose-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-rose-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Dirección</h3>
                    <p className="text-gray-600">
                      Calle 413 n47, Piso 1, Depto 5<br />
                      Juan Maria Gutierrez, Berazategui<br />
                      (Rotonda de Alpargatas)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-rose-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-rose-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Horarios de Atención</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>
                        <strong>Lunes a Viernes:</strong> 10:00hs - 18:00hs
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-rose-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-rose-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-4">Contacto</h3>
                    <div className="space-y-3">
                      <Button onClick={openWhatsApp} className="w-full bg-green-500 hover:bg-green-600 text-white">
                        <Phone className="w-4 h-4 mr-2" />
                        WhatsApp: +54 9 11 7366 0873
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="h-96 lg:h-full min-h-[400px]">
            <Card className="h-full bg-white/70 backdrop-blur-sm border-rose-200">
              <CardContent className="p-0 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.6541426368276!2d-58.19077242431528!3d-34.83978737000371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a327fff5dbea3f%3A0xc04df5bfa734cd76!2sC.%20413%2047%2C%20B1890%20Juan%20Mar%C3%ADa%20Guti%C3%A9rrez%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1751663957623!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "0.75rem" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Milenas Nails"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
