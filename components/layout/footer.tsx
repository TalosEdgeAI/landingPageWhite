import { Brain } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-16 px-4 bg-white border-t border-gray-100">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Brain className="h-8 w-8 text-gray-800" />
              <span className="text-xl font-light text-gray-900">AI Boutique</span>
            </Link>
            <p className="text-gray-600 leading-relaxed font-light">
              Especialistas em soluções de Inteligência Artificial para empresas que querem liderar o futuro.
            </p>
          </div>
          <div>
            <h4 className="font-normal text-gray-900 mb-6 text-lg">Serviços</h4>
            <ul className="space-y-3 text-gray-600 font-light">
              <li>
                <Link href="/servicos/machine-learning" className="hover:text-gray-900 transition-colors">
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/servicos/deep-learning" className="hover:text-gray-900 transition-colors">
                  Deep Learning
                </Link>
              </li>
              <li>
                <Link href="/servicos/visao-computacional" className="hover:text-gray-900 transition-colors">
                  Visão Computacional
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="hover:text-gray-900 transition-colors">
                  Consultoria em IA
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-normal text-gray-900 mb-6 text-lg">Empresa</h4>
            <ul className="space-y-3 text-gray-600 font-light">
              <li>
                <Link href="/sobre" className="hover:text-gray-900 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/casos" className="hover:text-gray-900 transition-colors">
                  Casos de Sucesso
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-900 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/carreiras" className="hover:text-gray-900 transition-colors">
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-normal text-gray-900 mb-6 text-lg">Contato</h4>
            <ul className="space-y-3 text-gray-600 font-light">
              <li className="hover:text-gray-900 transition-colors">contato@aiboutique.com.br</li>
              <li className="hover:text-gray-900 transition-colors">+55 (11) 9999-9999</li>
              <li className="hover:text-gray-900 transition-colors">São Paulo, SP</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 mt-12 pt-8 text-center">
          <p className="text-gray-500 font-light">
            &copy; 2024 AI Boutique. Todos os direitos reservados. Construindo o futuro com IA.
          </p>
        </div>
      </div>
    </footer>
  )
}
