import Image from "next/image"

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-rose-200 to-pink-200 p-4 rounded-2xl shadow-lg">
            <Image
              src="/img/logo.jpeg"
              alt="Milenas Nails Logo"
              width={240}
              height={120}
              className="object-contain rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  )
}
