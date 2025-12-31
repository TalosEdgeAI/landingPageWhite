import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FlaskConical, TrendingUp, Target, ArrowRight, ShieldCheck, Activity, Database, Zap, Lock, BarChart, Clock } from "lucide-react"
import Link from "next/link"

export default function LaboratorioPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 font-sans selection:bg-primary/30 selection:text-slate-900">

      {/* 2. Bloco 1 — Introdução Conceitual (Hero Section) */}
      <section className="relative min-h-[80vh] flex items-center pt-24 pb-20 bg-slate-950 overflow-hidden">
        {/* Hero Background Image with Overlay */}
        <div className="absolute inset-0 z-0 text-center flex items-center justify-center">
          <img
            src="/images/laboratorio/hero_stress_test.png"
            alt="Stress Testing Abstract"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 text-[10px] font-bold uppercase tracking-[0.3em]">
            <FlaskConical className="h-3 w-3" />
            <span>Validação sob Estresse</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Ciência Validada em <br />
            <span className="text-primary italic">Cenários Reais</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 font-light leading-relaxed max-w-3xl mx-auto">
            Modelos não são validados em condições ideais. O foco do Laboratório Talos é robustez, estresse e resiliência em cenários adversos. Performance só importa quando o risco é máximo.
          </p>
          <div className="pt-10 flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* 3. Bloco 2 — Metodologia de Validação Científica */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(var(--primary-rgb),0.02)_0%,transparent_50%)]" />

        <div className="container mx-auto px-4 max-w-6xl relative">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Como validamos nossos modelos</h2>
            <p className="text-slate-500 font-light italic">Rigor técnico antes da implementação em produção.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Fonte de Dados",
                icon: <Database className="h-6 w-6 text-primary" />,
                details: ["Datasets públicos", "Bases anonimizadas", "Dados sintéticos", "Privacidade total"]
              },
              {
                title: "Simulações de Estresse",
                icon: <Activity className="h-6 w-6 text-primary" />,
                details: ["Crises econômicas", "Picos de inadimplência", "Queda de recorrência", "Mudanças de comportamento"]
              },
              {
                title: "Avaliação de Robustez",
                icon: <Zap className="h-6 w-6 text-primary" />,
                details: ["Estabilidade do modelo", "Sensibilidade a ruído", "Data drift analysis", "Capacidade de generalização"]
              },
              {
                title: "Critérios de Aprovação",
                icon: <ShieldCheck className="h-6 w-6 text-primary" />,
                details: ["Acurácia sob estresse", "Antecedência de sinal", "Impacto financeiro", "Risco controlado"]
              }
            ].map((step, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 space-y-6 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 group">
                <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center border border-slate-100 shadow-sm group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                  <div className="group-hover:text-slate-950 transition-colors">
                    {step.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900">{step.title}</h4>
                <ul className="space-y-3">
                  {step.details.map((detail, j) => (
                    <li key={j} className="flex items-center space-x-2 text-sm text-slate-500 font-light">
                      <div className="h-1 w-1 rounded-full bg-primary/40" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bloco 3 — Benchmarks Validados */}
      <section className="py-32 bg-slate-950 text-white selection:bg-primary selection:text-slate-950">
        <div className="container mx-auto px-4 max-w-6xl space-y-32">

          {/* Benchmark 1 — Setor Financeiro */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Benchmark Bancário</span>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                  Recuperação de Crédito sob <br />
                  <span className="text-primary italic">Estresse Financeiro</span>
                </h3>
              </div>
              <p className="text-slate-400 font-light text-lg leading-relaxed italic">
                Simulação baseada em datasets públicos de instituições financeiras de médio porte. Ambiente com alta volatilidade econômica. Objetivo: antecipar risco sem aumentar agressividade de cobrança.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-2">
                  <div className="text-4xl font-black text-primary">+15%</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Ganho incremental</div>
                </div>
                <div className="space-y-2 text-slate-400">
                  <div className="text-sm font-bold uppercase tracking-widest border-l border-primary/30 pl-4">Risco</div>
                  <div className="text-xs font-light italic pl-4">Identificação antes do atraso explícito</div>
                </div>
              </div>

              <div className="p-6 bg-white/5 rounded-3xl border border-white/10 flex items-start space-x-4">
                <BarChart className="h-6 w-6 text-primary shrink-0" />
                <p className="text-sm text-slate-400 font-light italic">
                  "O modelo permitiu uma ação preventiva e renegociação estratégica, mantendo a saúde da carteira sem endurecimento de política de cobrança."
                </p>
              </div>
            </div>

            <div className="p-12 bg-white/5 rounded-[3rem] border border-white/10 relative overflow-hidden group items-center justify-center flex min-h-[400px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px]" />
              {/* Simplified Visual Bar Chart Representation */}
              <div className="flex items-end space-x-6 h-64 relative z-10">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 bg-slate-800 rounded-t-2xl transition-all duration-700 h-32 group-hover:h-24" />
                  <span className="text-[10px] uppercase font-bold text-slate-500">Tradicional</span>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 bg-primary rounded-t-2xl shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] h-48" />
                  <span className="text-[10px] uppercase font-bold text-primary">Modelo Talos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benchmark 2 — SaaS */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="lg:order-last space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Benchmark SaaS</span>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                  Previsão de Churn em <br />
                  <span className="text-primary italic">Operações Recorrentes</span>
                </h3>
              </div>
              <p className="text-slate-400 font-light text-lg leading-relaxed italic">
                Avaliação em contratos SMB e Enterprise. Foco em churn silencioso (queda de engajamento, sinais indiretos). Inteligência que gera score acionável, não apenas alertas.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-2">
                  <div className="text-4xl font-black text-primary">85%</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Acurácia Média</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-black text-primary">60 dias</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Antecedência</div>
                </div>
              </div>

              <div className="p-6 bg-white/5 rounded-3xl border border-white/10 flex items-start space-x-4">
                <Zap className="h-6 w-6 text-primary shrink-0" />
                <p className="text-sm text-slate-400 font-light italic">
                  "Identificação de risco crítico com tempo suficiente para ação estratégica, focando na base que realmente pode ser recuperada."
                </p>
              </div>
            </div>

            <div className="p-12 bg-white/5 rounded-[3rem] border border-white/10 relative overflow-hidden group min-h-[400px] flex items-center">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[100px]" />
              {/* Timeline Visual */}
              <div className="space-y-12 relative z-10 pt-4 w-full">
                <div className="flex justify-between items-center px-4">
                  <span className="text-[10px] font-bold uppercase text-slate-500 tracking-tighter">Hoje</span>
                  <span className="text-[10px] font-bold uppercase text-slate-500 tracking-tighter">+30 dias</span>
                  <span className="text-[10px] font-bold uppercase text-primary tracking-tighter">+60 dias</span>
                </div>
                <div className="relative h-4 bg-slate-800 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-[85%] bg-gradient-to-r from-slate-900 via-primary to-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)]" />
                </div>
                <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-sm font-bold text-white tracking-tight uppercase">Janela de Ação Estratégica</span>
                  </div>
                  <div className="text-primary font-black text-xs">RELEVÂNCIA MÁXIMA</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Bloco 4 — Governança, Ética e Privacidade */}
      <section className="py-24 bg-white border-y border-slate-100 italic">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="p-10 md:p-14 bg-slate-50 rounded-[3rem] border border-slate-200 flex flex-col md:flex-row items-center gap-10">
            <div className="h-20 w-20 rounded-full bg-slate-900 flex items-center justify-center shrink-0 shadow-lg shadow-slate-200">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 uppercase tracking-widest">Protocolo de Governança & Compliance</h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed">
                Todos os benchmarks realizados no Talos Research Lab seguem protocolos rigorosos de anonimização e governança. Não expomos dados sensíveis, em conformidade total com LGPD e normas regulatórias de instituições financeiras. Robustez científica sem comprometer a privacidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bloco 5 — Programa Early Adopter (CTA) */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-slate-950 rounded-[4rem] text-white p-12 md:p-24 flex flex-col items-center text-center space-y-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] -translate-y-1/2 translate-x-1/2" />

            <Badge variant="outline" className="px-6 py-2 border-primary/20 text-primary bg-primary/5 uppercase tracking-[0.4em] font-black pointer-events-none">
              Inscrições Restritas
            </Badge>

            <div className="space-y-6 relative">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Programa <span className="text-primary italic">Early Adopter</span> Talos</h2>
              <p className="text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
                Selecionamos operações recorrentes complexas para participar do nosso programa de validação avançada. Acesso prioritário à nossa ciência de dados e acompanhamento direto do time executivo.
              </p>
            </div>

            <Button asChild size="lg" className="h-16 px-12 bg-primary text-slate-950 font-bold text-lg rounded-full shadow-2xl shadow-primary/20 hover:scale-105 transition-all">
              <Link href="/contato">
                Candidatar minha Operação
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <div className="pt-8 border-t border-white/5 w-full flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
              <span>Scientific Rigor</span>
              <span>Data Privacy first</span>
              <span>Financial Impact</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <div className="py-12 text-center text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">
        Talos Intelligence &copy; 2025 | Scientific Validation Unit
      </div>
    </div>
  )
}

function Badge({ children, className, variant }: { children: React.ReactNode, className?: string, variant?: string }) {
  return (
    <div className={cn(
      "inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      variant === "outline" ? "border-slate-800 text-slate-400 shadow-sm" : "bg-primary text-primary-foreground shadow-md shadow-primary/20",
      className
    )}>
      {children}
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
