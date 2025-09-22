import { Button } from "@/components/ui/button"
import { Brain, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/talosnobg.png" // coloca a imagem dentro da pasta public/
            alt="Talos AI Logo"
            width={100}     // ajusta tamanho conforme precisar
            height={65}
            className="object-contain"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-12">
          <Link
            href="/sobre"
            className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-normal text-lg tracking-wide"
          >
            Sobre
          </Link>
          <Link
            href="/servicos"
            className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-normal text-lg tracking-wide"
          >
            Serviços
          </Link>
          <Link
            href="/planos"
            className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-normal text-lg tracking-wide"
          >
            Planos
          </Link>
          <Link
            href="/casos"
            className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-normal text-lg tracking-wide"
          >
            Cases
          </Link>
          <Link
            href="/contato"
            className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-normal text-lg tracking-wide"
          >
            Contato
          </Link>
        </nav>
        <Link href="/planos">
          <Button className="bg-gray-900 hover:bg-gray-800 text-white border-0 px-6 py-3 rounded-full font-normal text-base transition-all duration-300">
            Ver Planos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </header>
  )
}
