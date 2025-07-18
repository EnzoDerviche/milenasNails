import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  price: string
  originalPrice?: string
  subDescription?: string
  time: string
  features?: string[]
  description?: string
  isPopular?: boolean
}

export function ServiceCard({ icon: Icon, title, price, originalPrice, description, isPopular, time, features, subDescription }: ServiceCardProps) {
  return (
    <Card
      className={`${
        isPopular
          ? "bg-gradient-to-br from-rose-100 to-pink-100 border-rose-300"
          : "bg-white/80 backdrop-blur-sm border-rose-200"
      } hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}
    >
      {isPopular && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
          MÁS POPULAR
        </div>
      )}
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <div
            className={`w-16 h-16 ${
              isPopular ? "bg-gradient-to-r from-rose-300 to-pink-300" : "bg-gradient-to-r from-rose-200 to-pink-200"
            } rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className={`w-8 h-8 ${isPopular ? "text-white" : "text-rose-500"}`} />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
          <div className={`text-3xl font-bold ${isPopular ? "text-rose-600" : "text-rose-500"}`}>{price}</div>
          {originalPrice && <div className="text-sm text-gray-500 line-through mb-2">{originalPrice}</div>}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed text-center font-bold mb-2">Duracion: {time}</p>
        <p className="text-gray-600 text-sm leading-relaxed text-center font-bold mb-2">{subDescription}</p>
        <p className="text-gray-600 text-sm leading-relaxed text-center">{description}</p>
        <ul className="text-gray-600 space-y-2 text-sm mt-4">
          {features?.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-rose-400 mr-2 mt-0.5">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
