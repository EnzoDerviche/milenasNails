"use client"

import { openWhatsApp } from "@/hooks/send-whatsapp"
import { Instagram, MessageCircle } from "lucide-react"

export function FloatingSocial() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <button
        onClick={openWhatsApp}
        className="group bg-gradient-to-r from-[#c9a27e] to-[#b88f6a] hover:from-[#b88f6a] hover:to-[#a97d57] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />

        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#5f4632] text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Escribinos por WhatsApp
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#5f4632]"></div>
        </div>
      </button>

      <a
        href="https://instagram.com/milenas.nailss"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-gradient-to-r from-[#dbc1a7] to-[#c9a27e] hover:from-[#c9a27e] hover:to-[#b88f6a] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Seguinos en Instagram"
      >
        <Instagram className="w-6 h-6" />

        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#5f4632] text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Seguinos en Instagram
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#5f4632]"></div>
        </div>
      </a>
    </div>
  )
}
