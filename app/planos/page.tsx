import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Eye, Cpu, Check, Star, Zap, Crown, Rocket, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function PlanosPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 mb-8">
            <Crown className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-600">Planos Premium</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-thin mb-8 leading-tight">
            <span className="block text-gray-900">Planos &</span>
            <span className="block text-gray-500 font-light">Ofertas</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Escolha o plano ideal para transformar seu negócio com
            <span className="text-gray-800 font-medium"> soluções de IA personalizadas</span>
          </p>
        </div>
      </section>

      {/* Machine Learning Plans */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 mb-6">
              <Brain className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Machine Learning</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-thin text-gray-900 mb-6">
              Planos de
              <span className="block text-gray-500 font-light">Machine Learning</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Starter ML */}
            <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg relative">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-gray-300 text-gray-600">
                    Starter
                  </Badge>
                  <div className="text-right">
                    <div className="text-3xl font-light text-gray-900">R$ 15k</div>
                    <div className="text-sm text-gray-500">por projeto</div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-light text-gray-900">ML Essencial</CardTitle>
                <CardDescription className="text-gray-600 font-light">
                  Perfeito para empresas iniciando sua jornada em IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Análise preditiva básica</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">1 modelo de ML personalizado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Dashboard básico</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Suporte por 3 meses</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Treinamento da equipe</span>
                  </li>
                </ul>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white border-0 font-medium">
                  Começar Agora
                </Button>
              </CardContent>
            </Card>

            {/* Professional ML */}
            <Card className="bg-white border-2 border-gray-400 hover:border-gray-500 transition-all duration-300 hover:shadow-xl relative scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gray-900 text-white px-4 py-1">
                  <Star className="h-3 w-3 mr-1" />
                  Mais Popular
                </Badge>
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-gray-400 text-gray-700">
                    Professional
                  </Badge>
                  <div className="text-right">
                    <div className="text-3xl font-light text-gray-900">R$ 35k</div>
                    <div className="text-sm text-gray-500">por projeto</div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-light text-gray-900">ML Avançado</CardTitle>
                <CardDescription className="text-gray-600 font-light">
                  Para empresas que querem maximizar o potencial dos dados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">Análise preditiva avançada</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">3 modelos de ML personalizados</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">Sistema de recomendação</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">Dashboard interativo</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">API completa</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">Suporte por 6 meses</span>
                  </li>
                </ul>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white border-0 font-medium">
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise ML */}
            <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg relative">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-gray-300 text-gray-600">
                    Enterprise
                  </Badge>
                  <div className="text-right">
                    <div className="text-3xl font-light text-gray-900">R$ 75k+</div>
                    <div className="text-sm text-gray-500">customizado</div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-light text-gray-900">ML Enterprise</CardTitle>
                <CardDescription className="text-gray-600 font-light">
                  Solução completa para grandes corporações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Modelos ML ilimitados</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">AutoML personalizado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Infraestrutura dedicada</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Suporte 24/7</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Consultoria estratégica</span>
                  </li>
                </ul>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white border-0 font-medium">
                  Falar com Especialista
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Deep Learning Plans */}
      <section className="py-20 px-4 relative bg-gray-50">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6">
              <Cpu className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Deep Learning</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-thin text-gray-900 mb-6">
              Planos de
              <span className="block text-gray-500 font-light">Deep Learning</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Starter DL */}
            <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg relative">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-gray-300 text-gray-600">
                    Starter
                  </Badge>
                  <div className="text-right">
                    <div className="text-3xl font-light text-gray-900">R$ 25k</div>
                    <div className="text-sm text-gray-500">por projeto</div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-light text-gray-900">DL Básico</CardTitle>
                <CardDescription className="text-gray-600 font-light">
                  Introdução ao poder das redes neurais profundas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Processamento de texto básico</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">1 modelo neural personalizado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Análise de sentimentos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Suporte por 3 meses</span>
                  </li>
                </ul>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white border-0 font-medium">
                  Começar Agora
                </Button>
              </CardContent>
            </Card>

            {/* Professional DL */}
            <Card className="bg-white border-2 border-gray-400 hover:border-gray-500 transition-all duration-300 hover:shadow-xl relative scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gray-900 text-white px-4 py-1">
                  <Zap className="h-3 w-3 mr-1" />
                  Recomendado
                </Badge>
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-gray-400 text-gray-700">
                    Professional
                  </Badge>
                  <div className="text-right">
                    <div className="text-3xl font-light text-gray-900">R$ 50k</div>
                    <div className="text-sm text-gray-500">por projeto</div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-light text-gray-900">DL Avançado</CardTitle>
                <CardDescription className="text-gray-600 font-light">
                  Soluções completas de processamento inteligente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">NLP avançado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">Chatbot inteligente</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">Reconhecimento de padrões</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">API completa</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">Suporte por 6 meses</span>
                  </li>
                </ul>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white border-0 font-medium">
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise DL */}
            <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg relative">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-gray-300 text-gray-600">
                    Enterprise
                  </Badge>
                  <div className="text-right">
                    <div className="text-3xl font-light text-gray-900">R$ 100k+</div>
                    <div className="text-sm text-gray-500">customizado</div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-light text-gray-900">DL Enterprise</CardTitle>
                <CardDescription className="text-gray-600 font-light">
                  Transformação digital completa com IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Modelos neurais ilimitados</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Assistente IA personalizado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Infraestrutura GPU dedicada</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Suporte 24/7</span>
                  </li>
                </ul>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white border-0 font-medium">
                  Falar com Especialista
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Computer Vision Plans */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 mb-6">
              <Eye className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Visão Computacional</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-thin text-gray-900 mb-6">
              Planos de
              <span className="block text-gray-500 font-light">Visão Computacional</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Starter CV */}
            <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg relative">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-gray-300 text-gray-600">
                    Starter
                  </Badge>
                  <div className="text-right">
                    <div className="text-3xl font-light text-gray-900">R$ 30k</div>
                    <div className="text-sm text-gray-500">por projeto</div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-light text-gray-900">CV Essencial</CardTitle>
                <CardDescription className="text-gray-600 font-light">
                  Primeiros passos na automação visual
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Detecção de objetos básica</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">1 modelo de visão personalizado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Classificação de imagens</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Suporte por 3 meses</span>
                  </li>
                </ul>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white border-0 font-medium">
                  Começar Agora
                </Button>
              </CardContent>
            </Card>

            {/* Professional CV */}
            <Card className="bg-white border-2 border-gray-400 hover:border-gray-500 transition-all duration-300 hover:shadow-xl relative scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gray-900 text-white px-4 py-1">
                  <Rocket className="h-3 w-3 mr-1" />
                  Mais Vendido
                </Badge>
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-gray-400 text-gray-700">
                    Professional
                  </Badge>
                  <div className="text-right">
                    <div className="text-3xl font-light text-gray-900">R$ 65k</div>
                    <div className="text-sm text-gray-500">por projeto</div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-light text-gray-900">CV Avançado</CardTitle>
                <CardDescription className="text-gray-600 font-light">
                  Automação visual completa para sua empresa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">Reconhecimento facial avançado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">Detecção em tempo real</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">Controle de qualidade automatizado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">Dashboard de monitoramento</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">Suporte por 6 meses</span>
                  </li>
                </ul>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white border-0 font-medium">
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise CV */}
            <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg relative">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-gray-300 text-gray-600">
                    Enterprise
                  </Badge>
                  <div className="text-right">
                    <div className="text-3xl font-light text-gray-900">R$ 120k+</div>
                    <div className="text-sm text-gray-500">customizado</div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-light text-gray-900">CV Enterprise</CardTitle>
                <CardDescription className="text-gray-600 font-light">
                  Visão computacional em escala industrial
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Modelos de visão ilimitados</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Análise médica de imagens</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Edge computing integrado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Suporte 24/7</span>
                  </li>
                </ul>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white border-0 font-medium">
                  Falar com Especialista
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Automation Plans */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 mb-6">
              <Brain className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Automation</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-thin text-gray-900 mb-6">
              Planos de
              <span className="block text-gray-500 font-light">Chatbots/Automation</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Starter ML */}
            <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg relative">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-gray-300 text-gray-600">
                    Starter
                  </Badge>
                  <div className="text-right">
                    <div className="text-3xl font-light text-gray-900">R$ 15k</div>
                    <div className="text-sm text-gray-500">por projeto</div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-light text-gray-900">Chatbots/Automation Essencial</CardTitle>
                <CardDescription className="text-gray-600 font-light">
                  Perfeito para empresas iniciando sua jornada em IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Análise preditiva básica</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">1 modelo de Chatbots/Automation personalizado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Dashboard básico</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Suporte por 3 meses</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Treinamento da equipe</span>
                  </li>
                </ul>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white border-0 font-medium">
                  Começar Agora
                </Button>
              </CardContent>
            </Card>

            {/* Professional ML */}
            <Card className="bg-white border-2 border-gray-400 hover:border-gray-500 transition-all duration-300 hover:shadow-xl relative scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gray-900 text-white px-4 py-1">
                  <Star className="h-3 w-3 mr-1" />
                  Mais Popular
                </Badge>
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-gray-400 text-gray-700">
                    Professional
                  </Badge>
                  <div className="text-right">
                    <div className="text-3xl font-light text-gray-900">R$ 35k</div>
                    <div className="text-sm text-gray-500">por projeto</div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-light text-gray-900">Chatbots/Automation Avançado</CardTitle>
                <CardDescription className="text-gray-600 font-light">
                  Para empresas que querem maximizar o potencial dos dados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">Análise preditiva avançada</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">3 modelos de Chatbots/Automation personalizados</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">Sistema de recomendação</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">Dashboard interativo</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">API completa</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">Suporte por 6 meses</span>
                  </li>
                </ul>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white border-0 font-medium">
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise ML */}
            <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg relative">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-gray-300 text-gray-600">
                    Enterprise
                  </Badge>
                  <div className="text-right">
                    <div className="text-3xl font-light text-gray-900">R$ 75k+</div>
                    <div className="text-sm text-gray-500">customizado</div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-light text-gray-900">Chatbots/Automation Enterprise</CardTitle>
                <CardDescription className="text-gray-600 font-light">
                  Solução completa para grandes corporações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Modelos Chatbots/Automation ilimitados</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">AutoChatbots/Automation personalizado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Infraestrutura dedicada</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Suporte 24/7</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Consultoria estratégica</span>
                  </li>
                </ul>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white border-0 font-medium">
                  Falar com Especialista
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* n8n Plans */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 mb-6">
              <Brain className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">n8n</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-thin text-gray-900 mb-6">
              Planos de
              <span className="block text-gray-500 font-light">n8n</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Starter ML */}
            <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg relative">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-gray-300 text-gray-600">
                    Starter
                  </Badge>
                  <div className="text-right">
                    <div className="text-3xl font-light text-gray-900">R$ 15k</div>
                    <div className="text-sm text-gray-500">por projeto</div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-light text-gray-900">n8n Essencial</CardTitle>
                <CardDescription className="text-gray-600 font-light">
                  Perfeito para empresas iniciando sua jornada em IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Análise preditiva básica</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">1 modelo de n8n personalizado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Dashboard básico</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Suporte por 3 meses</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Treinamento da equipe</span>
                  </li>
                </ul>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white border-0 font-medium">
                  Começar Agora
                </Button>
              </CardContent>
            </Card>

            {/* Professional ML */}
            <Card className="bg-white border-2 border-gray-400 hover:border-gray-500 transition-all duration-300 hover:shadow-xl relative scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gray-900 text-white px-4 py-1">
                  <Star className="h-3 w-3 mr-1" />
                  Mais Popular
                </Badge>
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-gray-400 text-gray-700">
                    Professional
                  </Badge>
                  <div className="text-right">
                    <div className="text-3xl font-light text-gray-900">R$ 35k</div>
                    <div className="text-sm text-gray-500">por projeto</div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-light text-gray-900">n8n Avançado</CardTitle>
                <CardDescription className="text-gray-600 font-light">
                  Para empresas que querem maximizar o potencial dos dados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">Análise preditiva avançada</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">3 modelos de n8n personalizados</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">Sistema de recomendação</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">Dashboard interativo</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">API completa</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-600 font-light">Suporte por 6 meses</span>
                  </li>
                </ul>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white border-0 font-medium">
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise ML */}
            <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg relative">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-gray-300 text-gray-600">
                    Enterprise
                  </Badge>
                  <div className="text-right">
                    <div className="text-3xl font-light text-gray-900">R$ 75k+</div>
                    <div className="text-sm text-gray-500">customizado</div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-light text-gray-900">n8n Enterprise</CardTitle>
                <CardDescription className="text-gray-600 font-light">
                  Solução completa para grandes corporações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Modelos v ilimitados</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Auton8n personalizado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Infraestrutura dedicada</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Suporte 24/7</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600 font-light">Consultoria estratégica</span>
                  </li>
                </ul>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white border-0 font-medium">
                  Falar com Especialista
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 relative bg-gray-50">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-thin text-gray-900 mb-6">
              Compare
              <span className="block text-gray-500 font-light">Todos os Planos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Encontre a solução perfeita para suas necessidades de IA
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="pb-4 text-gray-900 font-medium">Recursos</th>
                  <th className="pb-4 text-center text-gray-700 font-medium">Starter</th>
                  <th className="pb-4 text-center text-gray-700 font-medium">Professional</th>
                  <th className="pb-4 text-center text-gray-700 font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-4 font-light">Modelos personalizados</td>
                  <td className="py-4 text-center font-light">1-2</td>
                  <td className="py-4 text-center font-light">3-5</td>
                  <td className="py-4 text-center font-light">Ilimitados</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 font-light">Tempo de suporte</td>
                  <td className="py-4 text-center font-light">3 meses</td>
                  <td className="py-4 text-center font-light">6 meses</td>
                  <td className="py-4 text-center font-light">24/7</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 font-light">API completa</td>
                  <td className="py-4 text-center font-light">-</td>
                  <td className="py-4 text-center font-light">✓</td>
                  <td className="py-4 text-center font-light">✓</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 font-light">Infraestrutura dedicada</td>
                  <td className="py-4 text-center font-light">-</td>
                  <td className="py-4 text-center font-light">-</td>
                  <td className="py-4 text-center font-light">✓</td>
                </tr>
                <tr>
                  <td className="py-4 font-light">Consultoria estratégica</td>
                  <td className="py-4 text-center font-light">-</td>
                  <td className="py-4 text-center font-light">Básica</td>
                  <td className="py-4 text-center font-light">Completa</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-thin text-gray-900 mb-8 leading-tight">
            Não Sabe Qual
            <span className="block text-gray-500 font-light">Escolher?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Fale com nossos especialistas e descubra qual plano é ideal para transformar seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contato">
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white border-0 px-10 py-5 rounded-full font-medium text-xl transition-all duration-300 hover:scale-105"
              >
                Consultoria Gratuita
                <Sparkles className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <Link href="/casos">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent px-10 py-5 rounded-full font-medium text-xl transition-all duration-300 hover:scale-105"
              >
                Ver Cases de Sucesso
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
