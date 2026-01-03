"use client"

import { Button } from "@/components/ui/button"
import { Brain, ArrowRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Soluções", href: "/solucoes" },
    { name: "Tecnologia & Segurança", href: "/tecnologia" },
    { name: "Laboratório", href: "/laboratorio" },
    { name: "Sobre Nós", href: "/sobre" },
  ]

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {/* <Brain className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-primary tracking-tight">Talos AI</span> */}
          <img src="/TALOS.png" alt="Talos AI" className="h-12 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-6 shadow-lg shadow-accent/20">
            <Link href="/contato">
              Agendar Diagnóstico
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
