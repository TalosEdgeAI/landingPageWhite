import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Eye, Cpu, ArrowRight, Zap, Target, Sparkles, BarChart3, Shield, Clock, Rocket } from "lucide-react"
import Link from "next/link"

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 mb-8">
            <Cpu className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-600">Soluções Premium</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-thin mb-8 leading-tight">
            <span className="block text-gray-900">Serviços de</span>
            <span className="block text-gray-500 font-light">Inteligência</span>
            <span className="block text-gray-900">Artificial</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Transformamos dados em vantagem competitiva através de soluções personalizadas de
            <span className="text-gray-800 font-medium"> Machine Learning</span>,
            <span className="text-gray-800 font-medium"> Deep Learning</span> e
            <span className="text-gray-800 font-medium"> Visão Computacional</span>
          </p>
        </div>
      </section>

      {/* Serviços Principais */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Link href="/servicos/machine-learning">
              <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg group cursor-pointer h-full">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                    <Brain className="h-8 w-8 text-gray-700" />
                  </div>
                  <CardTitle className="text-2xl font-light text-gray-900 mb-3">Machine Learning</CardTitle>
                  <CardDescription className="text-gray-600 text-lg font-light">
                    Algoritmos inteligentes que aprendem e evoluem com seus dados para otimizar processos e prever
                    tendências
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="font-light">Análise preditiva avançada</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="font-light">Sistemas de recomendação personalizados</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="font-light">Detecção de anomalias em tempo real</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="font-light">Otimização de processos automatizada</span>
                    </li>
                  </ul>
                  <div className="flex items-center text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/servicos/deep-learning">
              <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg group cursor-pointer h-full">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                    <Cpu className="h-8 w-8 text-gray-700" />
                  </div>
                  <CardTitle className="text-2xl font-light text-gray-900 mb-3">Deep Learning</CardTitle>
                  <CardDescription className="text-gray-600 text-lg font-light">
                    Redes neurais profundas que simulam o cérebro humano para resolver problemas complexos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="font-light">Processamento de linguagem natural</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="font-light">Reconhecimento de padrões complexos</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="font-light">Análise de sentimentos avançada</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="font-light">Chatbots e assistentes inteligentes</span>
                    </li>
                  </ul>
                  <div className="flex items-center text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/servicos/visao-computacional">
              <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg group cursor-pointer h-full">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                    <Eye className="h-8 w-8 text-gray-700" />
                  </div>
                  <CardTitle className="text-2xl font-light text-gray-900 mb-3">Visão Computacional</CardTitle>
                  <CardDescription className="text-gray-600 text-lg font-light">
                    Sistemas que veem e interpretam o mundo visual com precisão sobre-humana
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="font-light">Reconhecimento facial avançado</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="font-light">Detecção de objetos em tempo real</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="font-light">Controle de qualidade automatizado</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="font-light">Análise médica de imagens</span>
                    </li>
                  </ul>
                  <div className="flex items-center text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Processo de Trabalho */}
      <section className="py-32 px-4 relative bg-gray-50">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6">
              <Target className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Nosso Processo</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-thin text-gray-900 mb-6 leading-tight">
              Como Trabalhamos
              <span className="block text-gray-500 font-light">com Você</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Metodologia comprovada que garante resultados excepcionais em cada projeto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-white border border-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <BarChart3 className="h-10 w-10 text-gray-700" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">1. Análise</h3>
              <p className="text-gray-600 font-light">
                Entendemos profundamente seu negócio, dados e objetivos estratégicos.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-white border border-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Target className="h-10 w-10 text-gray-700" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">2. Estratégia</h3>
              <p className="text-gray-600 font-light">
                Desenvolvemos uma estratégia personalizada com tecnologias adequadas.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-white border border-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Rocket className="h-10 w-10 text-gray-700" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">3. Implementação</h3>
              <p className="text-gray-600 font-light">
                Construímos e testamos soluções robustas com metodologias ágeis.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-white border border-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Shield className="h-10 w-10 text-gray-700" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">4. Suporte</h3>
              <p className="text-gray-600 font-light">
                Oferecemos suporte contínuo e otimização para máximo desempenho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Vantagens</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-thin text-gray-900 mb-6">
              Por que Escolher
              <span className="block text-gray-500 font-light">a AI Boutique?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Implementação Rápida</h3>
              <p className="text-gray-600 font-light">
                Metodologias ágeis que entregam resultados em semanas, não meses.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Segurança Garantida</h3>
              <p className="text-gray-600 font-light">Protocolos de segurança enterprise e compliance com LGPD/GDPR.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">ROI Comprovado</h3>
              <p className="text-gray-600 font-light">
                Soluções que geram retorno mensurável e vantagem competitiva real.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <Brain className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Expertise Premium</h3>
              <p className="text-gray-600 font-light">Equipe com PhDs e experiência em grandes corporações globais.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Escalabilidade</h3>
              <p className="text-gray-600 font-light">
                Arquiteturas que crescem com seu negócio e se adaptam às mudanças.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Suporte 24/7</h3>
              <p className="text-gray-600 font-light">
                Monitoramento contínuo e suporte técnico especializado sempre disponível.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative overflow-hidden bg-gray-50">
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-thin text-gray-900 mb-8 leading-tight">
            Pronto para
            <span className="block text-gray-500 font-light">Transformar?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Descubra como nossas soluções de IA podem revolucionar seu negócio e criar vantagem competitiva sustentável
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white border-0 px-10 py-5 rounded-full font-medium text-xl transition-all duration-300 hover:scale-105"
            >
              Consultoria Gratuita
              <Sparkles className="ml-3 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent px-10 py-5 rounded-full font-medium text-xl transition-all duration-300 hover:scale-105"
            >
              Ver Cases de Sucesso
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
