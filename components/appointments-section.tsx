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
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
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
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: XCircle,
      title: "Cancelaciones",
      items: [
        "En caso de no asistir sin previo aviso, el servicio debera ser abonado en su totalidad",
        "La seña es contemplada solo en el caso de cancelación con 24 horas de anticipación",
        "La seña solo reserva el turno deseado, y no congela el valor del servicio",
      ],
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      icon: AlertCircle,
      title: "Políticas Generales",
      items: [
        "Traer las manos limpias",
        "El pago se realiza al finalizar el servicio",
        "No se permite asistir con niños o acompañantes",
      ],
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
  ]

  return (
    <section id="turnos" className="py-16 px-4 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Calendar className="w-12 h-12 text-rose-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Reserva tu{" "}
            <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">Turno</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-rose-100 to-pink-100 border-rose-200 border-2">
          <CardContent className="p-8 text-center">
            <Phone className="w-16 h-16 text-rose-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Lista para tu cita?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Reserva tu turno ahora y disfruta de nuestros servicios profesionales. Nuestro equipo está listo para
              brindarte la mejor atención.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
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
