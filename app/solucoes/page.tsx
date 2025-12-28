"use client"

import { Button } from "@/components/ui/button"
import { Shield, Radar, RefreshCw, Layout, Search, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function SolucoesPage() {
  const modules = [
    {
      id: "protecao",
      badge: "Revenue Protection",
      badgeColor: "bg-primary text-white",
      title: "Predictive Risk Shield™",
      headline: "Pare de cobrar atrasos. Comece a prevenir perdas.",
      description: "A régua de cobrança tradicional é reativa e desgasta o relacionamento com bons clientes. Nosso modelo proprietário analisa milhares de variáveis comportamentais para identificar a propensão ao atraso antes da data de vencimento, permitindo uma abordagem cirúrgica.",
      icon: <Shield className="h-12 w-12 text-primary" />,
      features: [
        { label: "Lista de Risco Diário", desc: "Identificação proativa de clientes com alta probabilidade de default." },
        { label: "Segmentação Inteligente", desc: "Separação automática entre 'esquecidos' e 'sem caixa' para ação sem atrito." },
        { label: "Impacto Financeiro", desc: "Redução direta do DSO (Days Sales Outstanding) e proteção imediata do fluxo de caixa." }
      ],
      visual: (
        <div className="relative w-full h-full bg-slate-50 rounded-2xl border border-slate-300 p-6 shadow-inner overflow-hidden">
          <div className="space-y-4">
            <div className="h-4 w-1/3 bg-slate-200 rounded" />
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-slate-100" />
                  <div className="h-3 w-24 bg-slate-100 rounded" />
                </div>
                <div className={cn(
                  "px-2 py-1 rounded text-[10px] font-bold uppercase",
                  i === 1 ? "bg-red-100 text-red-600" : i === 2 ? "bg-amber-100 text-amber-600" : "bg-emerald-100 text-emerald-600"
                )}>
                  {i === 1 ? "Alto Risco" : i === 2 ? "Médio" : "Baixo"}
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
        </div>
      )
    },
    {
      id: "retencao",
      badge: "Retention Intelligence",
      badgeColor: "bg-purple-600 text-white",
      title: "Churn Radar",
      headline: "Identifique o 'risco silencioso' meses antes do cancelamento.",
      description: "A maioria dos clientes toma a decisão de cancelar muito antes de comunicar a empresa. Utilizamos algoritmos de Deep Learning para detectar micro-mudanças nos padrões de uso e engajamento que sinalizam insatisfação, invisíveis ao olho humano.",
      icon: <Radar className="h-12 w-12 text-purple-600" />,
      features: [
        { label: "Probabilidade de Saída", desc: "Score dinâmico atualizado em tempo real para cada conta." },
        { label: "Diagnóstico de Causa Raiz", desc: "A IA aponta o motivo provável (Preço, Suporte Técnico ou Aderência ao Produto)." },
        { label: "Impacto Financeiro", desc: "Aumento do LTV (Lifetime Value) e blindagem da carteira de clientes recorrentes." }
      ],
      visual: (
        <div className="relative w-full h-full bg-slate-900 rounded-2xl border border-slate-800 p-8 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500 via-transparent to-transparent" />
          <div className="relative w-48 h-48 border border-purple-500/30 rounded-full flex items-center justify-center">
            <div className="absolute inset-0 border border-purple-500/20 rounded-full animate-ping" />
            <div className="w-32 h-32 border border-purple-500/50 rounded-full flex items-center justify-center">
              <Radar className="h-12 w-12 text-purple-500 animate-pulse" />
            </div>
            <div className="absolute top-4 right-4 h-3 w-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
          </div>
        </div>
      )
    },
    {
      id: "onboarding",
      badge: "Strategic Foundation",
      badgeColor: "bg-teal-600 text-white",
      title: "Data Maturity & Blueprint",
      headline: "O primeiro passo para uma operação Data-Driven.",
      description: "Não aplicamos IA em dados sujos. Antes da implementação dos modelos preditivos, realizamos uma auditoria forense na sua base histórica. Higienizamos, organizamos e clusterizamos seus clientes para garantir a máxima acurácia dos algoritmos.",
      icon: <Search className="h-12 w-12 text-teal-600" />,
      features: [
        { label: "Data Health Score", desc: "Relatório completo sobre a qualidade e consistência dos seus dados financeiros." },
        { label: "Clusterização Comportamental", desc: "Mapeamento inédito das 'Personas de Pagamento' da sua base." },
        { label: "Impacto Financeiro", desc: "Visibilidade imediata de gargalos operacionais e preparação do terreno para escala." }
      ],
      visual: (
        <div className="relative w-full h-full bg-white rounded-2xl border border-slate-200 p-8 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={cn(
                "h-12 w-12 rounded-lg flex items-center justify-center transition-all duration-500",
                i <= 2 ? "bg-teal-100 text-teal-600 scale-110" : "bg-slate-100 text-slate-400"
              )}>
                <RefreshCw className={cn("h-6 w-6", i <= 2 ? "animate-spin-slow" : "")} />
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 right-4 bg-teal-600 text-white text-[10px] font-bold px-2 py-1 rounded">
            HYGIENE: 98%
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Section Header */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4 block">NOSSOS MÓDULOS</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            O Ecossistema de Inteligência Financeira
          </h1>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            Uma suíte completa de algoritmos proprietários desenhada para cobrir todo o ciclo de vida da receita.
          </p>
        </div>
      </section>

      {/* Modules Sections */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-[1200px] space-y-32">
          {modules.map((module, idx) => (
            <div
              key={module.id}
              className={cn(
                "flex flex-col lg:flex-row items-center gap-16 lg:gap-24",
                idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
              )}
            >
              {/* Text Side content */}
              <div className="lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <Badge className={cn("rounded-full px-4 py-1 font-semibold uppercase tracking-wider text-[10px]", module.badgeColor)}>
                    {module.badge}
                  </Badge>
                  <div className="flex items-center space-x-4">
                    {module.icon}
                    <h2 className="text-2xl font-bold text-slate-800 italic tracking-tight">{module.title}</h2>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                    {module.headline}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    {module.description}
                  </p>
                </div>

                <ul className="space-y-6">
                  {module.features.map((feature, fIdx) => (
                    <li key={fIdx} className="group">
                      <div className="flex items-start space-x-4">
                        <div className="mt-1 bg-emerald-50 rounded-full p-1 group-hover:bg-emerald-100 transition-colors">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        </div>
                        <div className="space-y-1">
                          <span className="font-bold text-slate-800 text-sm block">{feature.label}</span>
                          <p className="text-sm text-slate-500 leading-relaxed italic">{feature.desc}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Link
                    href="/tecnologia"
                    className="text-sm font-semibold text-slate-500 hover:text-primary flex items-center space-x-2 transition-colors group"
                  >
                    <span>Ver detalhes técnicos</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Visual Side content */}
              <div className="lg:w-1/2 w-full aspect-square md:aspect-video lg:aspect-square group cursor-pointer">
                <div className="relative w-full h-full transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl">
                  {module.visual}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Pronto para elevar sua maturidade de dados?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 h-14 text-lg font-bold">
              <Link href="/contato">Solicitar Diagnóstico</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-10 h-14 text-lg">
              <Link href="/tecnologia">Nossa Ciência</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
