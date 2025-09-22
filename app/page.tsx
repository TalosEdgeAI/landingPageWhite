import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Eye, Cpu, ArrowRight, CheckCircle, Star, Users, Award, Sparkles, Zap, Target } from "lucide-react"
import Image from "next/image"


export default function AIBoutiqueLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
            <div className="flex items-center">
            <Image
              src="/talosnobg.png" // coloca o logo na pasta public/
              alt="Talos Logo"
              width={100}
              height={65}
              className="object-contain"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-12">
            <a
              href="/sobre"
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-normal text-lg tracking-wide"
            >
              Sobre
            </a>
            <a
              href="/servicos"
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-normal text-lg tracking-wide"
            >
              Serviços
            </a>
            <a
              href="/casos"
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-normal text-lg tracking-wide"
            >
              Cases
            </a>
            <a
              href="/planos"
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-normal text-lg tracking-wide"
            >
              Planos
            </a>
            <a
              href="/contato"
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-normal text-lg tracking-wide"
            >
              Contato
            </a>
          </nav>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white border-0 px-6 py-3 rounded-full font-normal text-base transition-all duration-300">
            Começar Agora
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      <section className="relative py-40 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 mb-12">
            <Sparkles className="h-4 w-4 text-gray-500" />
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent backdrop-blur-sm rounded-full border border-white/30 shadow-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100/40 via-transparent to-gray-200/40 rounded-full"></div>
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-gray-300/10 to-transparent rounded-full"></div>
              <span className="relative text-sm font-normal text-gray-600 tracking-wide z-10">
                Pioneiros em Inteligência Artificial
              </span>
            </div>
          </div>

          {/* Container para o efeito de vidro holográfico */}
          <div className="relative mb-12">
            <h1 className="text-6xl md:text-8xl font-thin leading-tight tracking-tight relative z-10">
              <span className="block text-gray-900">Transforme</span>
              <span className="block text-gray-400 font-extralight">o Futuro</span>
              <span className="block text-gray-900">com IA</span>
            </h1>
            
            {/* Efeito de vidro esfumaçado holográfico */}
            <div className="absolute -inset-8 -bottom-12 flex justify-center items-center pointer-events-none z-0">
              <div className="w-full max-w-3xl h-48 bg-gradient-to-br from-blue-100/30 via-purple-100/20 to-cyan-100/30 
                            backdrop-blur-3xl rounded-full 
                            border border-white/30 
                            shadow-lg 
                            animate-pulse-slow
                            transform rotate-3
                            opacity-70
                            mix-blend-overlay">
                {/* Efeito de luz holográfica */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                              animate-shimmer rounded-full"></div>
              </div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-500 mb-16 max-w-4xl mx-auto leading-relaxed font-light relative z-10">
            Boutique especializada em soluções de <span className="text-gray-800 font-normal">Machine Learning</span>,
            <span className="text-gray-800 font-normal"> Deep Learning</span> e
            <span className="text-gray-800 font-normal"> Visão Computacional</span> que revolucionam negócios
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white border-0 px-10 py-4 rounded-full font-normal text-lg transition-all duration-300"
            >
              Consultoria Gratuita
              <Zap className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border border-gray-300 text-gray-900 hover:bg-gray-50 bg-transparent px-10 py-4 rounded-full font-normal text-lg transition-all duration-300"
            >
              Ver Projetos
              <Target className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

      
      </section>

      <section id="sobre" className="py-32 px-4 relative bg-gray-50">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-8 shadow-sm">
                <Brain className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-normal text-gray-600 tracking-wide">Expertise Premium</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-thin text-gray-900 mb-8 leading-tight tracking-tight">
                Dados que se tornam
                <span className="block text-gray-400 font-extralight">Resultados</span>
              </h2>

              <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light">
                Nossa boutique reúne especialistas com mais de 10 anos transformando dados em vantagem competitiva
                através de soluções de IA sob medida.
              </p>

              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-lg font-normal text-gray-900">Soluções 100% personalizadas</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-lg font-normal text-gray-900">Implementação ágil e eficiente</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-lg font-normal text-gray-900">Suporte contínuo e treinamento</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <img
                src="/modern-ai-team-working-with-data-visualization-and.jpg"
                alt="Equipe de especialistas em IA"
                className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="py-32 px-4 relative bg-white">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 mb-8">
              <Cpu className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-normal text-gray-600 tracking-wide">Serviços Premium</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-thin text-gray-900 mb-6 leading-tight tracking-tight">
              Soluções que
              <span className="block text-gray-400 font-extralight">Revolucionam</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Tecnologias de ponta que transformam dados em insights acionáveis e vantagem competitiva
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl rounded-3xl">
              <CardHeader className="pb-4 pt-8">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-normal text-gray-900 mb-3">Machine Learning</CardTitle>
                <CardDescription className="text-gray-600 text-lg font-light">
                  Algoritmos inteligentes que aprendem e evoluem com seus dados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="font-light">Análise preditiva avançada</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="font-light">Sistemas de recomendação</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="font-light">Detecção de anomalias</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="font-light">Otimização de processos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl rounded-3xl">
              <CardHeader className="pb-4 pt-8">
                <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mb-6">
                  <Cpu className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-normal text-gray-900 mb-3">Deep Learning</CardTitle>
                <CardDescription className="text-gray-600 text-lg font-light">
                  Redes neurais que simulam o cérebro humano para resolver problemas complexos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="font-light">Processamento de linguagem natural</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="font-light">Reconhecimento de padrões</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="font-light">Análise de sentimentos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="font-light">Chatbots inteligentes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl rounded-3xl">
              <CardHeader className="pb-4 pt-8">
                <div className="w-16 h-16 bg-gray-500 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-normal text-gray-900 mb-3">Visão Computacional</CardTitle>
                <CardDescription className="text-gray-600 text-lg font-light">
                  Sistemas que veem e interpretam o mundo visual com precisão sobre-humana
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-gray-600">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 relative overflow-hidden bg-gray-50">
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-6xl md:text-7xl font-thin text-gray-900 mb-4">50+</div>
              <div className="text-gray-600 text-lg font-light tracking-wide">Projetos Entregues</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-thin text-gray-900 mb-4">98%</div>
              <div className="text-gray-600 text-lg font-light tracking-wide">Taxa de Sucesso</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-thin text-gray-900 mb-4">15+</div>
              <div className="text-gray-600 text-lg font-light tracking-wide">Setores Atendidos</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-thin text-gray-900 mb-4">24/7</div>
              <div className="text-gray-600 text-lg font-light tracking-wide">Suporte Técnico</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 relative bg-white">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 mb-8">
              <Star className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-normal text-gray-600 tracking-wide">Depoimentos</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-thin text-gray-900 mb-6 tracking-tight">
              Clientes que
              <span className="block text-gray-400 font-extralight">Transformaram</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-500 rounded-3xl">
              <CardContent className="pt-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gray-400 text-gray-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed font-light">
                  "A solução de IA aumentou nossa eficiência operacional em 40%. Profissionais excepcionais com visão
                  futurista!"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-normal text-gray-900 text-lg">Maria Silva</div>
                    <div className="text-gray-500 font-light">CEO, TechCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-500 rounded-3xl">
              <CardContent className="pt-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gray-400 text-gray-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed font-light">
                  "Implementação rápida e resultados imediatos. O sistema de visão computacional revolucionou nosso
                  controle de qualidade."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-normal text-gray-900 text-lg">João Santos</div>
                    <div className="text-gray-500 font-light">Diretor, IndustriaMax</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-500 rounded-3xl">
              <CardContent className="pt-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gray-400 text-gray-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed font-light">
                  "Suporte excepcional e expertise técnica incomparável. Recomendo para qualquer empresa que busca
                  inovação em IA."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-normal text-gray-900 text-lg">Ana Costa</div>
                    <div className="text-gray-500 font-light">CTO, DataFlow</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contato" className="py-32 px-4 relative overflow-hidden bg-gray-50">
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-thin text-gray-900 mb-8 leading-tight tracking-tight">
            Pronto para o<span className="block text-gray-400 font-extralight">Futuro?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Entre em contato e descubra como nossas soluções de IA podem transformar seu negócio em uma potência
            tecnológica
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white border-0 px-12 py-5 rounded-full font-normal text-xl transition-all duration-300"
            >
              Consultoria Gratuita
              <Sparkles className="ml-3 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border border-gray-300 text-gray-900 hover:bg-gray-100 bg-transparent px-12 py-5 rounded-full font-normal text-xl transition-all duration-300"
            >
              Falar com Especialista
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-16 px-4 bg-white border-t border-gray-100">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Brain className="h-8 w-8 text-gray-800" />
                <span className="text-xl font-light text-gray-900">AI Boutique</span>
              </div>
              <p className="text-gray-600 leading-relaxed font-light">
                Especialistas em soluções de Inteligência Artificial para empresas que querem liderar o futuro.
              </p>
            </div>
            <div>
              <h4 className="font-normal text-gray-900 mb-6 text-lg">Serviços</h4>
              <ul className="space-y-3 text-gray-600 font-light">
                <li className="hover:text-gray-900 transition-colors cursor-pointer">Machine Learning</li>
                <li className="hover:text-gray-900 transition-colors cursor-pointer">Deep Learning</li>
                <li className="hover:text-gray-900 transition-colors cursor-pointer">Visão Computacional</li>
                <li className="hover:text-gray-900 transition-colors cursor-pointer">Consultoria em IA</li>
              </ul>
            </div>
            <div>
              <h4 className="font-normal text-gray-900 mb-6 text-lg">Empresa</h4>
              <ul className="space-y-3 text-gray-600 font-light">
                <li className="hover:text-gray-900 transition-colors cursor-pointer">Sobre Nós</li>
                <li className="hover:text-gray-900 transition-colors cursor-pointer">Casos de Sucesso</li>
                <li className="hover:text-gray-900 transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-gray-900 transition-colors cursor-pointer">Carreiras</li>
              </ul>
            </div>
            <div>
              <h4 className="font-normal text-gray-900 mb-6 text-lg">Contato</h4>
              <ul className="space-y-3 text-gray-600 font-light">
                <li className="hover:text-gray-900 transition-colors">contato@talosai.com.br</li>
                <li className="hover:text-gray-900 transition-colors">+55 (53) 9995-1170</li>
                <li className="hover:text-gray-900 transition-colors">Pelotas, RS</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-12 pt-8 text-center">
            <p className="text-gray-500 font-light">
              &copy; 2025 Talos AI. Todos os direitos reservados. Construindo o futuro com IA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
