import { Brain, ShieldCheck, Lock, Globe } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-primary">Talos AI</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transformando dados financeiros em caixa livre através de inteligência artificial preditiva e ciência de dados de alta precisão.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-4">Soluções</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/solucoes#inadimplencia" className="hover:text-primary transition-colors">
                  Previsão de Inadimplência
                </Link>
              </li>
              <li>
                <Link href="/solucoes#churn" className="hover:text-primary transition-colors">
                  Previsão de Churn
                </Link>
              </li>
              <li>
                <Link href="/solucoes#auditoria" className="hover:text-primary transition-colors">
                  Auditoria de Dados
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/sobre" className="hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/laboratorio" className="hover:text-primary transition-colors">
                  Laboratório
                </Link>
              </li>
              <li>
                <Link href="/tecnologia" className="hover:text-primary transition-colors">
                  Tecnologia & Segurança
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-4">Segurança & Compliance</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <ShieldCheck className="h-5 w-5 text-accent" />
                <span>LGPD Compliant</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Lock className="h-5 w-5 text-accent" />
                <span>Criptografia Ponta a Ponta</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Globe className="h-5 w-5 text-accent" />
                <span>Infraestrutura Isolada</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Talos AI. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>São Paulo, SP</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
