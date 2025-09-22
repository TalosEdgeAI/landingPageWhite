import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Users, Award, Target, Zap, ArrowRight, Sparkles, Trophy, Lightbulb, Rocket } from "lucide-react"

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative py-40 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 mb-12">
            <Brain className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-normal text-gray-600 tracking-wide">Nossa História</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-thin mb-12 leading-tight tracking-tight">
            <span className="block text-gray-900">Pioneiros em</span>
            <span className="block text-gray-400 font-extralight">Inteligência</span>
            <span className="block text-gray-900">Artificial</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Desde 2025, transformamos dados em vantagem competitiva através de soluções de IA personalizadas que
            revolucionam negócios e criam o futuro.
          </p>
        </div>
      </section>

      {/* Nossa Missão */}
      <section className="py-32 px-4 relative bg-gray-50">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-8 shadow-sm">
                <Target className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-normal text-gray-600 tracking-wide">Nossa Missão</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-thin text-gray-900 mb-8 leading-tight tracking-tight">
                Democratizar o<span className="block text-gray-400 font-extralight">Poder da IA</span>
              </h2>

              <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light">
                Acreditamos que toda empresa, independente do tamanho, deve ter acesso às tecnologias mais avançadas de
                Inteligência Artificial. Nossa missão é tornar isso realidade.
              </p>

              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-lg font-normal text-gray-900">Inovação constante e pesquisa de ponta</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-lg font-normal text-gray-900">Parcerias estratégicas de longo prazo</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-lg font-normal text-gray-900">Resultados mensuráveis e impacto real</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/equipe-de-especialistas-em-ia-trabalhando-com-algo.jpg"
                alt="Equipe AI Boutique"
                className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-32 px-4 relative bg-white">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 mb-8">
              <Users className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-normal text-gray-600 tracking-wide">Nossa Equipe</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-thin text-gray-900 mb-6 leading-tight tracking-tight">
              Especialistas
              <span className="block text-gray-400 font-extralight">de Elite</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Pesquisadores, programadores e engenheiros com experiência em grandes corporações e startups unicórnio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl rounded-3xl">
              <CardHeader className="text-center pb-4 pt-8">
                <div className="w-24 h-24 bg-gray-900 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Brain className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-2xl font-normal text-gray-900 mb-2">Murilo Costa Salem</CardTitle>
                <CardDescription className="text-gray-600 text-lg font-normal">Head of Deep Learning & Computer Vision</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4 font-light">
                  Cientista da Computação com atuação em Inteligência Artificial. Especialista em algoritmos de Deep Learning e Visão Computacional.
                </p>
                <div className="flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl rounded-3xl">
              <CardHeader className="text-center pb-4 pt-8">
                <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Target className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-2xl font-normal text-gray-900 mb-2">Daniel Henrique Pontes</CardTitle>
                <CardDescription className="text-gray-600 text-lg font-normal">Head of Generative AI</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4 font-light">
                  Cientista da Computação com atuação em Inteligência Artificial. Especialista em modelos generativos fluentes que convertem.
                </p>
                <div className="flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl rounded-3xl">
              <CardHeader className="text-center pb-4 pt-8">
                <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Target className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-2xl font-normal text-gray-900 mb-2">Marcos Lima Alves</CardTitle>
                <CardDescription className="text-gray-600 text-lg font-normal">Head of Machine Learning</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4 font-light">
                  Cientista da Computação com atuação em Inteligência Artificial. Especialista em modelos que convertem.
                </p>
                <div className="flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl rounded-3xl">
              <CardHeader className="text-center pb-4 pt-8">
                <div className="w-24 h-24 bg-gray-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Zap className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-2xl font-normal text-gray-900 mb-2">João Carrett</CardTitle>
                <CardDescription className="text-gray-600 text-lg font-normal">Head of MLOps</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4 font-light">
                  Engenheiro da Computação com atuação em ML Operations. Especialista em escalar modelos de forma contínua e íntegra.
                </p>
                <div className="flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-32 px-4 relative overflow-hidden bg-gray-50">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-8 shadow-sm">
              <Award className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-normal text-gray-600 tracking-wide">Nossos Valores</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-thin text-gray-900 mb-6 tracking-tight">
              Princípios que
              <span className="block text-gray-400 font-extralight">Nos Guiam</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Excelência</h3>
              <p className="text-gray-600 font-light">
                Buscamos sempre a perfeição técnica e resultados excepcionais em cada projeto.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Inovação</h3>
              <p className="text-gray-600 font-light">
                Estamos sempre na vanguarda das tecnologias emergentes e metodologias disruptivas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Parceria</h3>
              <p className="text-gray-600 font-light">
                Construímos relacionamentos duradouros baseados em confiança e resultados mútuos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Impacto</h3>
              <p className="text-gray-600 font-light">
                Focamos em soluções que geram transformação real e valor mensurável para nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative overflow-hidden bg-white">
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-thin text-gray-900 mb-8 leading-tight tracking-tight">
            Vamos Construir o<span className="block text-gray-400 font-extralight">Futuro Juntos?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Conheça nossa equipe e descubra como podemos transformar sua visão em realidade!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contato">
            <Button
              size="lg"         
              className="bg-gray-900 hover:bg-gray-800 text-white border-0 px-12 py-5 rounded-full font-normal text-xl transition-all duration-300"
            >
              Agendar Reunião
              <Sparkles className="ml-3 h-6 w-6" />
            </Button>
            </Link>
            <Link href={"/casos"}>
            <Button
              size="lg"
              variant="outline"
              className="border border-gray-300 text-gray-900 hover:bg-gray-100 bg-transparent px-12 py-5 rounded-full font-normal text-xl transition-all duration-300"
            >
              Ver Nossos Cases
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
