"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { openWhatsApp } from "@/hooks/send-whatsapp"
import { Calendar, Clock, AlertCircle, CheckCircle, XCircle, Phone } from "lucide-react"

export function AppointmentsSection() {
  const policies = [
    {
      icon: Calendar,
      title: "Reserva de Turnos",
      items: [
        "Se debe abonar una seña de $10.000 al momento de la reserva",
        "Confirmar disponibilidad con 24 horas de anticipación",
        "Especificar el servicio deseado al momento de la reserva",
        "Proporcionar nombre completo y número de contacto",
        "Enviar comprobante de pago de la seña por WhatsApp",
      ],
      color: "text-[#8b6a4f]",
      bgColor: "bg-[#f8f1e8]",
      borderColor: "border-[#e7d8c6]",
    },
    {
      icon: Clock,
      title: "Puntualidad",
      items: [
        "Llegar 5 minutos antes de la hora pactada",
        "Tolerancia máxima de 15 minutos de retraso",
        "Pasados los 15 minutos, el turno queda cancelado, sin reembolso de la seña",
        "En caso de retraso, comunicarse inmediatamente",
      ],
      color: "text-[#7d6248]",
      bgColor: "bg-[#f4eadf]",
      borderColor: "border-[#dfccb7]",
    },
    {
      icon: XCircle,
      title: "Cancelaciones",
      items: [
        "En caso de no asistir sin previo aviso, el servicio debera ser abonado en su totalidad",
        "La seña es contemplada solo en el caso de cancelación con 24 horas de anticipación",
        "La seña solo reserva el turno deseado, y no congela el valor del servicio",
      ],
      color: "text-[#926f53]",
      bgColor: "bg-[#f7ede3]",
      borderColor: "border-[#e3cfba]",
    },
    {
      icon: AlertCircle,
      title: "Políticas Generales",
      items: [
        "Traer las manos limpias",
        "El pago se realiza al finalizar el servicio",
        "No se permite asistir con niños o acompañantes",
      ],
      color: "text-[#6f5741]",
      bgColor: "bg-[#efe1d2]",
      borderColor: "border-[#d5bca3]",
    },
  ]

  return (
    <section id="turnos" className="py-16 px-4 bg-gradient-to-br from-[#f6efe6] to-[#eee0cf]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Calendar className="w-12 h-12 text-[#b88f6a] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#5f4632] mb-4">
            Reserva tu{" "}
            <span className="bg-gradient-to-r from-[#c9a27e] to-[#b88f6a] bg-clip-text text-transparent">Turno</span>
          </h2>
          <p className="text-lg text-[#7a634f] max-w-2xl mx-auto">
            Conoce nuestras políticas para una mejor experiencia en tu cita
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {policies.map((policy, index) => (
            <Card
              key={index}
              className={`${policy.bgColor} ${policy.borderColor} border-2 hover:shadow-lg transition-all duration-300 group`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 ${policy.bgColor} rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <policy.icon className={`w-6 h-6 ${policy.color}`} />
                  </div>
                  <h3 className={`text-xl font-bold ${policy.color}`}>{policy.title}</h3>
                </div>

                <ul className="space-y-3">
                  {policy.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className={`w-4 h-4 ${policy.color} mr-3 mt-0.5 flex-shrink-0`} />
                      <span className="text-[#6e5743] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-[#efe1d2] to-[#e7d5c2] border-[#d9c2aa] border-2">
          <CardContent className="p-8 text-center">
            <Phone className="w-16 h-16 text-[#9f7a58] mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-[#5f4632] mb-4">¿Lista para tu cita?</h3>
            <p className="text-[#7a634f] mb-6 max-w-2xl mx-auto">
              Reserva tu turno ahora y disfruta de nuestros servicios profesionales. Nuestro equipo está listo para
              brindarte la mejor atención.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-[#c9a27e] to-[#b88f6a] hover:from-[#b88f6a] hover:to-[#a97d57] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Reservar por WhatsApp
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
