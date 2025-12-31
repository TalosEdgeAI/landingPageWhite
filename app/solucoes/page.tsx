"use client"

import { Button } from "@/components/ui/button"
import {
  ShieldAlert,
  UserMinus,
  Search,
  BarChart3,
  Zap,
  DollarSign,
  Users,
  Target,
  LineChart,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  CheckCircle2
} from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function SolucoesPage() {
  const primaryModules = [
    {
      id: "inadimplencia",
      title: "Previsão de Inadimplência",
      subtitle: "Pare de cobrar atrasos. Comece a prevenir perdas.",
      description: "Solução de IA que identifica clientes com maior probabilidade de atrasar ou deixar de pagar obrigações financeiras futuras. O modelo analisa histórico de pagamentos, comportamento e padrões de risco para permitir ações preventivas como cobrança proativa, renegociação automática e ajustes de política de crédito.",
      impact: "Redução direta de perdas financeiras, diminuição do DSO e proteção imediata do fluxo de caixa.",
      icon: <ShieldAlert className="h-10 w-10 text-primary" />,
      visual: (
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
          <img
            src="/images/solucoes/inadimplencia.png"
            alt="Visualização de Previsão de Inadimplência"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
        </div>
      )
    },
    {
      id: "churn",
      title: "Previsão de Churn",
      subtitle: "Identifique o risco silencioso antes do cancelamento.",
      description: "Modelo preditivo que identifica clientes com maior risco de cancelamento e aponta os principais fatores que contribuem para essa decisão. Permite atuação antecipada por meio de ações automáticas ou direcionadas, como retenção personalizada, contato humano estratégico ou ajuste de oferta.",
      impact: "Redução de churn, aumento do LTV e blindagem da carteira de clientes recorrentes.",
      icon: <UserMinus className="h-10 w-10 text-primary" />,
      visual: (
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
          <img
            src="/images/solucoes/churn_prediction.png"
            alt="Visualização de Previsão de Churn"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
        </div>
      )
    },
    {
      id: "auditoria",
      title: "Auditoria de Maturidade de Dados",
      subtitle: "O primeiro passo para uma operação realmente data-driven.",
      description: "Serviço estruturado de diagnóstico que avalia a qualidade, disponibilidade, governança e uso estratégico dos dados da empresa. Identifica lacunas técnicas e organizacionais que impactam diretamente a eficácia de modelos de IA e automação.",
      impact: "Visibilidade imediata de gargalos operacionais e preparação do terreno para escala com segurança.",
      icon: <Search className="h-10 w-10 text-primary" />,
      visual: (
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
          <img
            src="/images/solucoes/data_maturity.png"
            alt="Visualização de Auditoria de Dados"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
        </div>
      )
    }
  ]

  const secondaryModules = [
    {
      title: "LTV Forecasting",
      description: "Orientar decisões de CAC, segmentação e priorização de clientes com maior potencial ao longo do tempo.",
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      title: "Next Best Offer",
      description: "Aumentar ARPU e conversão ao recomendar a melhor oferta para cada cliente no momento certo.",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Precificação Dinâmica",
      description: "Maximizar receita e margem com preços e condições orientados por dados.",
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: "Clusterização de Personas",
      description: "Criar personas acionáveis com base em comportamento real, não apenas dados demográficos.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Lead Scoring de Topo",
      description: "Priorizar leads com maior probabilidade de conversão e reduzir CAC.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Acompanhamento Estratégico",
      description: "Garantir evolução constante, alinhamento ao negócio e maximização contínua de ROI.",
      icon: <LineChart className="h-6 w-6" />
    }
  ]

  return (
    <div className="flex flex-col w-full bg-white font-sans">
      {/* 2.1 Headline principal */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(var(--primary-rgb),0.05)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 max-w-5xl text-center relative">
          <Badge variant="outline" className="mb-6 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] border-primary/20 text-primary bg-primary/5">
            Nossos Módulos
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            O Ecossistema de <span className="text-primary italic">Inteligência Financeira</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Uma suíte de algoritmos proprietários desenhada para proteger, otimizar e expandir a receita ao longo de todo o ciclo de vida do cliente. As soluções da Talos são modulares e evoluem conforme a maturidade analítica do negócio.
          </p>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl inline-block">
            <p className="text-sm font-medium text-slate-500">
              Nem todas as empresas começam pelo mesmo módulo. Nosso diagnóstico inicial identifica onde existe maior impacto financeiro imediato.
            </p>
          </div>
        </div>
      </section>

      {/* 3.1 Produtos Principais */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-40">
            {primaryModules.map((module, idx) => (
              <div
                key={module.id}
                id={module.id}
                className={cn(
                  "flex flex-col lg:flex-row items-center gap-16 lg:gap-24 scroll-mt-24",
                  idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
                )}
              >
                <div className="lg:w-1/2 space-y-8">
                  <div className="space-y-4">
                    <div className="p-3 bg-primary/10 rounded-2xl inline-block">
                      {module.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                      {module.title}
                    </h2>
                    <h3 className="text-xl font-semibold text-primary italic">
                      {module.subtitle}
                    </h3>
                    <p className="text-lg text-slate-600 font-light leading-relaxed">
                      {module.description}
                    </p>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-primary">
                    <span className="text-xs font-bold uppercase tracking-[0.1em] text-slate-400 block mb-2">Impacto Financeiro</span>
                    <p className="text-slate-700 font-medium">
                      {module.impact}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/tecnologia"
                      className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-primary transition-colors group"
                    >
                      <span>Ver detalhes técnicos</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className="lg:w-1/2 w-full aspect-[4/3] relative">
                  {module.visual}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.2 Produtos Secundários */}
      <section className="py-32 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Camadas Avançadas</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Sua evolução natural para maximizar o valor de cada cliente e a eficiência da operação de ponta a ponta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secondaryModules.map((item, idx) => (
              <div key={idx} className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-12 w-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed italic">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Resumo executivo - Ciclo Completo */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="p-10 md:p-20 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-50" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] translate-y-1/2 -translate-x-1/2 opacity-30" />

            <div className="relative space-y-16">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">O ciclo completo da <span className="text-primary italic">inteligência de receita</span></h2>
                <p className="text-slate-400 text-lg font-light">
                  Da prevenção de perdas à expansão sustentável, com decisões orientadas por dados.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                {/* Visual Connector Line (Desktop) */}
                <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {[
                  {
                    num: "01",
                    label: "Proteger receita",
                    desc: "Antes de crescer, é preciso estancar perdas invisíveis. Inadimplência e churn previstos antes do impacto no caixa."
                  },
                  {
                    num: "02",
                    label: "Aumentar maturidade analítica",
                    desc: "IA só funciona bem quando os dados estão prontos. Dados, personas e scoring como base sólida de decisão."
                  },
                  {
                    num: "03",
                    label: "Expandir receita",
                    desc: "Crescer com eficiência é crescer com inteligência. LTV, NBO e precificação orientada por comportamento."
                  },
                  {
                    num: "04",
                    label: "Garantir evolução contínua",
                    desc: "Resultados consistentes exigem adaptação contínua. ROI sustentável com acompanhamento estratégico."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center space-y-6 group relative">
                    <div className="relative">
                      <div className="h-20 w-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl font-black text-primary group-hover:bg-primary group-hover:text-slate-900 transition-all duration-500 scale-100 group-hover:scale-110 shadow-xl group-hover:shadow-primary/20">
                        {item.num}
                      </div>
                      {/* Suble flow indicator for mobile/tablet */}
                      <div className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 text-white/20">
                        <ArrowRight className="h-4 w-4 rotate-90" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-bold text-xl text-white group-hover:text-primary transition-colors">{item.label}</h4>
                      <p className="text-slate-400 text-sm font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-12 border-t border-white/5 flex flex-col items-center space-y-2">
                <div className="uppercase tracking-[0.4em] text-[10px] font-black text-slate-600">
                  Talos Intelligence Ecosystem
                </div>
                <div className="text-xs italic text-slate-500 font-light">
                  Um sistema vivo, não um conjunto de ferramentas.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Único */}
      <section className="pb-32 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Pronto para transformar seus resultados?</h2>
              <p className="text-slate-500 font-light">
                Identifique onde sua receita está vazando e por onde faz mais sentido começar.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-sm font-bold text-primary uppercase tracking-wider">
                Essa conversa costuma revelar perdas ocultas de receita em 20–30 minutos.
              </p>
              <Button asChild size="lg" className="h-16 px-12 text-lg font-bold rounded-full shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90 transition-all hover:scale-105">
                <Link href="/contato">Solicitar Diagnóstico</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
