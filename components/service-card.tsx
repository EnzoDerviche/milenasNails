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
          ? "bg-gradient-to-br from-[#efe1d2] to-[#e4d1bc] border-[#cfb39a]"
          : "bg-white/85 backdrop-blur-sm border-[#e6d8c8]"
      } hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}
    >
      {isPopular && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-[#c9a27e] to-[#b88f6a] text-white px-3 py-1 rounded-full text-xs font-semibold">
          MÁS POPULAR
        </div>
      )}
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <div
            className={`w-16 h-16 ${
              isPopular ? "bg-gradient-to-r from-[#c9a27e] to-[#b88f6a]" : "bg-gradient-to-r from-[#ead8c5] to-[#dbc1a7]"
            } rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className={`w-8 h-8 ${isPopular ? "text-white" : "text-[#9f7a58]"}`} />
          </div>
          <h3 className="text-xl font-bold text-[#5f4632] mb-1">{title}</h3>
          <div className={`text-3xl font-bold ${isPopular ? "text-[#7b5a40]" : "text-[#8b6a4f]"}`}>{price}</div>
          {originalPrice && <div className="text-sm text-[#9f8a74] line-through mb-2">{originalPrice}</div>}
        </div>
        <p className="text-[#7a634f] text-sm leading-relaxed text-center font-bold mb-2">Duracion: {time}</p>
        <p className="text-[#7a634f] text-sm leading-relaxed text-center font-bold mb-2">{subDescription}</p>
        <p className="text-[#7a634f] text-sm leading-relaxed text-center">{description}</p>
        <ul className="text-[#7a634f] space-y-2 text-sm mt-4">
          {features?.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-[#b88f6a] mr-2 mt-0.5">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
