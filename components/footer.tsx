import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-rose-400 to-pink-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">Milenas Nails</h3>
          <a
            href="https://instagram.com/milenasnails"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-200 transition-colors duration-300"
          >
            <Instagram className="w-8 h-8" />
          </a>
          <h3 className="text-2xl font-bold">Tu belleza, nuestra pasión</h3>
        </div>
      </div>
    </footer>
  )
}
