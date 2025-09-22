import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Brain, Mail, Phone, MapPin, Clock, Sparkles, ArrowRight, MessageCircle, Calendar, Zap } from "lucide-react"

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 mb-8">
            <MessageCircle className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-600">Fale Conosco</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-thin mb-8 leading-tight">
            <span className="block text-gray-900">Vamos</span>
            <span className="block text-gray-500">Conversar?</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Pronto para transformar seu negócio com IA? Nossa equipe de especialistas está aqui para criar a solução
            perfeita para você.
          </p>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Formulário */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-600">Prospectar Orçamento</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 leading-tight">
                Conte-nos sobre
                <span className="block text-gray-500">Seu Projeto</span>
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                Preencha o formulário e receba uma análise personalizada de como a IA pode revolucionar seu negócio.
              </p>

              <Card className="bg-white border border-gray-200 rounded-3xl shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nome" className="text-gray-900 font-medium">
                          Nome Completo
                        </Label>
                        <Input
                          id="nome"
                          placeholder="Seu nome"
                          className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-gray-400 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="empresa" className="text-gray-900 font-medium">
                          Empresa
                        </Label>
                        <Input
                          id="empresa"
                          placeholder="Nome da empresa"
                          className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-gray-400 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-900 font-medium">
                          E-mail
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-gray-400 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefone" className="text-gray-900 font-medium">
                          Telefone
                        </Label>
                        <Input
                          id="telefone"
                          placeholder="(11) 99999-9999"
                          className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-gray-400 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="servico" className="text-gray-900 font-medium">
                        Serviço de Interesse
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-900 rounded-xl">
                          <SelectValue placeholder="Selecione um serviço" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-gray-200">
                          <SelectItem value="machine-learning">Machine Learning</SelectItem>
                          <SelectItem value="deep-learning">Deep Learning</SelectItem>
                          <SelectItem value="visao-computacional">Visão Computacional</SelectItem>
                          <SelectItem value="consultoria">Chatbots</SelectItem>
                          <SelectItem value="consultoria">Automação e n8n</SelectItem>
                          <SelectItem value="consultoria">Consultoria em IA</SelectItem>
                          <SelectItem value="todos">Todos os Serviços</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="orcamento" className="text-gray-900 font-medium">
                        Orçamento Estimado
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-900 rounded-xl">
                          <SelectValue placeholder="Selecione uma faixa" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-gray-200">
                          <SelectItem value="1k-5k">R$ 1k - 5k</SelectItem>
                          <SelectItem value="5k-10k">R$ 5k - 10k</SelectItem>
                          <SelectItem value="10k-20k">R$ 10k - 20k</SelectItem>
                          <SelectItem value="20k-50k">R$ 20k - 50k</SelectItem>
                          <SelectItem value="50k-100k">R$ 50k - 100k</SelectItem>
                          <SelectItem value="100k+">R$ 100k+</SelectItem>
                          <SelectItem value="nao-sei">Não tenho certeza</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem" className="text-gray-900 font-medium">
                        Descreva seu Projeto
                      </Label>
                      <Textarea
                        id="mensagem"
                        placeholder="Conte-nos sobre seu desafio, objetivos e como podemos ajudar..."
                        rows={5}
                        className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-gray-400 resize-none rounded-xl"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white border-0 py-4 rounded-full font-light text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      Enviar Solicitação
                      <Zap className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 mb-6">
                <Brain className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-600">Informações</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-thin text-gray-900 mb-6">
                Outras Formas de
                <span className="block text-gray-500">Contato</span>
              </h3>

              <div className="space-y-6">
                <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-lg group rounded-3xl">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">E-mail</h4>
                        <p className="text-gray-600">contato@talosai.com.br</p>
                        <p className="text-gray-500 text-sm font-light">Resposta em até 2 horas</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-lg group rounded-3xl">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">Telefone</h4>
                        <p className="text-gray-600">+55 (53) 9995-1170</p>
                        <p className="text-gray-500 text-sm font-light">WhatsApp disponível</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-lg group rounded-3xl">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">Escritório</h4>
                        <p className="text-gray-600">Pelotas, RS</p>
                        <p className="text-gray-500 text-sm font-light">Reuniões remotas</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-lg group rounded-3xl">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">Horário</h4>
                        <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                        <p className="text-gray-500 text-sm font-light">Suporte 24/7 para clientes</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              </div>
            </div>
          </div>
      </section>

      <Footer />
    </div>
  )
}
