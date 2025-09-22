import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

import { ArrowRight, TrendingUp, Users, ShoppingCart, Factory, Heart, Car, Sparkles, Target} from "lucide-react"

export default function CasosPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 mb-8">
            <Target className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-600">Cases de Sucesso</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-thin mb-8 leading-tight">
            <span className="block text-gray-900">Resultados</span>
            <span className="block text-gray-500">Extraordinários</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Conheça empresas que transformaram seus negócios com nossas soluções de IA e alcançaram resultados
            mensuráveis e sustentáveis
          </p>
        </div>
      </section>

      {/* Cases Principais */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="grid gap-12">
            {/* Case 1 - E-commerce */}
            <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-lg group overflow-hidden rounded-3xl">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center">
                      <ShoppingCart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-gray-900">MegaShop Brasil</h3>
                      <p className="text-gray-500 font-light">E-commerce • Varejo</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-gray-100 text-gray-700 border-gray-200 font-light">Machine Learning</Badge>
                    <Badge className="bg-gray-100 text-gray-700 border-gray-200 font-light">
                      Sistema de Recomendação
                    </Badge>
                    <Badge className="bg-gray-100 text-gray-700 border-gray-200 font-light">Análise Preditiva</Badge>
                  </div>

                  <h4 className="text-xl font-medium text-gray-900 mb-4">Sistema de Recomendação Personalizada</h4>

                  <p className="text-gray-600 mb-6 leading-relaxed font-light">
                    Implementamos um sistema de recomendação baseado em ML que analisa comportamento de compra,
                    histórico de navegação e preferências para sugerir produtos personalizados em tempo real.
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-thin text-gray-900">+45%</div>
                      <div className="text-sm text-gray-500 font-light">Conversão</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-thin text-gray-900">+32%</div>
                      <div className="text-sm text-gray-500 font-light">Ticket Médio</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-thin text-gray-900">+28%</div>
                      <div className="text-sm text-gray-500 font-light">Receita</div>
                    </div>
                  </div>

                  <Button className="bg-gray-900 hover:bg-gray-800 text-white border-0 rounded-full font-light">
                    Ver Case Completo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="relative p-12">
                  <img
                    src="/dashboard-de-e-commerce-com-gr-ficos-de-recomenda-.jpg"
                    alt="Dashboard MegaShop"
                    className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </Card>

            {/* Case 2 - Indústria */}
            <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-lg group overflow-hidden rounded-3xl">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative p-12 order-2 lg:order-1">
                  <img
                    src="/sistema-de-vis-o-computacional-em-linha-de-produ--.jpg"
                    alt="Sistema AutoTech"
                    className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-12 order-1 lg:order-2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center">
                      <Factory className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-gray-900">AutoTech Industries</h3>
                      <p className="text-gray-500 font-light">Indústria Automotiva • Manufatura</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-gray-100 text-gray-700 border-gray-200 font-light">Visão Computacional</Badge>
                    <Badge className="bg-gray-100 text-gray-700 border-gray-200 font-light">
                      Controle de Qualidade
                    </Badge>
                    <Badge className="bg-gray-100 text-gray-700 border-gray-200 font-light">Automação</Badge>
                  </div>

                  <h4 className="text-xl font-medium text-gray-900 mb-4">Controle de Qualidade Automatizado</h4>

                  <p className="text-gray-600 mb-6 leading-relaxed font-light">
                    Desenvolvemos um sistema de visão computacional que detecta defeitos microscópicos em peças
                    automotivas com precisão superior à inspeção humana, operando 24/7.
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-thin text-gray-900">99.8%</div>
                      <div className="text-sm text-gray-500 font-light">Precisão</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-thin text-gray-900">-67%</div>
                      <div className="text-sm text-gray-500 font-light">Defeitos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-thin text-gray-900">+40%</div>
                      <div className="text-sm text-gray-500 font-light">Produtividade</div>
                    </div>
                  </div>

                  <Button className="bg-gray-900 hover:bg-gray-800 text-white border-0 rounded-full font-light">
                    Ver Case Completo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Case 3 - Saúde */}
            <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-lg group overflow-hidden rounded-3xl">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-gray-900">MedCenter São Paulo</h3>
                      <p className="text-gray-500 font-light">Saúde • Diagnóstico por Imagem</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-gray-100 text-gray-700 border-gray-200 font-light">Deep Learning</Badge>
                    <Badge className="bg-gray-100 text-gray-700 border-gray-200 font-light">Análise de Imagens</Badge>
                    <Badge className="bg-gray-100 text-gray-700 border-gray-200 font-light">Diagnóstico Médico</Badge>
                  </div>

                  <h4 className="text-xl font-medium text-gray-900 mb-4">Diagnóstico Assistido por IA</h4>

                  <p className="text-gray-600 mb-6 leading-relaxed font-light">
                    Sistema de deep learning para análise de exames de radiologia que auxilia médicos na detecção
                    precoce de anomalias, reduzindo tempo de diagnóstico e aumentando precisão.
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-thin text-gray-900">+85%</div>
                      <div className="text-sm text-gray-500 font-light">Precisão</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-thin text-gray-900">-50%</div>
                      <div className="text-sm text-gray-500 font-light">Tempo</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-thin text-gray-900">+30%</div>
                      <div className="text-sm text-gray-500 font-light">Detecção Precoce</div>
                    </div>
                  </div>

                  <Button className="bg-gray-900 hover:bg-gray-800 text-white border-0 rounded-full font-light">
                    Ver Case Completo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="relative p-12">
                  <img
                    src="/interface-m-dica-com-an-lise-de-raio-x-por-ia-most.jpg"
                    alt="Sistema MedCenter"
                    className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Estatísticas Gerais */}
      <section className="py-32 px-4 relative overflow-hidden bg-gray-50">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Impacto Global</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-thin text-gray-900 mb-6">
              Resultados que
              <span className="block text-gray-500">Falam por Si</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-6xl md:text-7xl font-thin text-gray-900 mb-4 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-700 text-lg font-medium mb-2">Projetos Entregues</div>
              <div className="text-gray-500 text-sm font-light">Em 15+ setores diferentes</div>
            </div>
            <div className="group">
              <div className="text-6xl md:text-7xl font-thin text-gray-900 mb-4 group-hover:scale-110 transition-transform duration-300">
                +40%
              </div>
              <div className="text-gray-700 text-lg font-medium mb-2">Aumento Médio ROI</div>
              <div className="text-gray-500 text-sm font-light">Nos primeiros 6 meses</div>
            </div>
            <div className="group">
              <div className="text-6xl md:text-7xl font-thin text-gray-900 mb-4 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-gray-700 text-lg font-medium mb-2">Taxa de Sucesso</div>
              <div className="text-gray-500 text-sm font-light">Projetos concluídos com êxito</div>
            </div>
            <div className="group">
              <div className="text-6xl md:text-7xl font-thin text-gray-900 mb-4 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-gray-700 text-lg font-medium mb-2">Suporte Contínuo</div>
              <div className="text-gray-500 text-sm font-light">Monitoramento e otimização</div>
            </div>
          </div>
        </div>
      </section>

      {/* Setores Atendidos */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 mb-6">
              <Users className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Setores</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-thin text-gray-900 mb-6 leading-tight">
              Experiência
              <span className="block text-gray-500">Multissetorial</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Aplicamos IA em diversos segmentos, sempre com soluções personalizadas para cada realidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShoppingCart, name: "E-commerce & Varejo", projects: "12 projetos" },
              { icon: Factory, name: "Indústria & Manufatura", projects: "8 projetos" },
              { icon: Heart, name: "Saúde & Medicina", projects: "6 projetos" },
              { icon: Car, name: "Automotivo", projects: "5 projetos" },
              { icon: TrendingUp, name: "Fintech & Bancos", projects: "7 projetos" },
              { icon: Users, name: "Recursos Humanos", projects: "4 projetos" },
            ].map((setor, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-3xl p-6 hover:border-gray-300 transition-all duration-500 hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <setor.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{setor.name}</h3>
                <p className="text-gray-500 text-sm font-light">{setor.projects}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative overflow-hidden bg-gray-50">
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-thin text-gray-900 mb-8 leading-tight">
            Seu Próximo
            <span className="block text-gray-500">Case de Sucesso</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Junte-se às empresas que já transformaram seus negócios com nossas soluções de IA. Vamos criar o próximo
            case extraordinário juntos.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">

            <Link href={"/contato"}>
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white border-0 px-10 py-5 rounded-full font-light text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Iniciar Meu Projeto
              <Sparkles className="ml-3 h-6 w-6" />
            </Button>
            </Link>

            <Link href={"/contato"}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 text-gray-900 hover:bg-gray-100 bg-transparent px-10 py-5 rounded-full font-light text-xl transition-all duration-300 hover:scale-105"
            >
              Falar com Especialista
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
