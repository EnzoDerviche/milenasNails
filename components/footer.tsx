import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-rose-400 to-pink-500 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Layout responsivo: vertical en móvil, horizontal en desktop */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <h3 className="text-2xl font-bold text-center md:text-left">Milenas Nails</h3>

          <a
            href="https://instagram.com/milenas.nailss"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-200 transition-colors duration-300 order-last md:order-none"
          >
            <Instagram className="w-8 h-8" />
          </a>

          <h4 className="font-bold text-center md:text-right text-sm md:text-base max-w-xs md:max-w-none">
            Tu belleza y la salud de tus uñas, es nuestra prioridad.
          </h4>
        </div>
      </div>
    </footer>
  )
}
