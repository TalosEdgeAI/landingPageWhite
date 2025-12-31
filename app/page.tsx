import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, RefreshCw, TrendingUp, CheckCircle2, Search } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="hero-neural">
        <div className="hero-content-neural">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/20">
            <span className="h-2 w-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium">IA Preditiva de Alta Precisão</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-tight max-w-5xl mx-auto">
            Transforme seus Dados Financeiros em <span className="text-accent underline decoration-accent/30">Caixa Livre</span>.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            IA preditiva para reduzir Inadimplência e Churn antes que eles aconteçam.
            Sem caixas pretas, focado exclusivamente em ROI e geração de caixa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" className="bg-[#CEFF05] text-slate-950 hover:bg-[#CEFF05]/90 text-lg px-8 py-7 h-auto rounded-full font-bold transition-transform hover:scale-105">
              <Link href="/contato">
                Simular potencial de economia
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="!bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white text-lg px-8 py-7 h-auto rounded-full backdrop-blur-sm transition-all shadow-lg shadow-black/20">
              <Link href="/solucoes">Conhecer Soluções</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-slate-50 border-y border-border">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Seção: O Problema (Problem Aware)</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                O custo invisível da cobrança reativa.
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed font-light italic">
                "Você só descobre que o cliente saiu quando o pagamento falha? Isso é tarde demais. Grandes operações perdem milhões anualmente usando réguas estáticas que olham para o retrovisor. Nossa IA muda o paradigma: de reagir ao erro para prever o risco."
              </p>
            </div>

            <div className="lg:w-1/2 w-full">
              {/* Timeline Comparison Visual - Overhauled for Premium Alignment */}
              <div className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-slate-200 shadow-[0_30px_70px_rgba(0,0,0,0.08)] relative overflow-hidden flex flex-col items-center">
                {/* Background accents for depth */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-slate-50 rounded-full blur-[120px] -z-10 opacity-70" />

                <div className="w-full space-y-16 relative">

                  {/* 1. Timeline (dias) - Aligned Center */}
                  <div className="relative w-full">
                    <div className="flex justify-between items-center px-2 relative z-10 transition-all">
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">Dia -15</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="bg-slate-950 text-white px-5 py-2.5 rounded-full border border-slate-800 shadow-2xl flex items-center justify-center -translate-y-2 ring-4 ring-white">
                          <span className="text-[10px] font-black uppercase tracking-[0.25em] whitespace-nowrap">
                            Vencimento (Dia 0)
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">Dia +15</span>
                      </div>
                    </div>
                    {/* Background track line */}
                    <div className="absolute top-[18px] left-0 w-full h-[1.5px] bg-slate-100 -z-0" />
                  </div>

                  {/* 2. Régua Tradicional (Reative - Gray/Red) */}
                  <div className="space-y-5">
                    <div className="flex items-center justify-between px-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Régua Tradicional</span>
                      <span className="text-[10px] italic text-slate-400 font-semibold uppercase tracking-tighter">Fluxo Reativo / Ineficiente</span>
                    </div>
                    <div className="relative h-16 bg-slate-50/50 rounded-2xl border border-slate-100 flex items-center overflow-hidden shadow-inner">
                      {/* Grey baseline */}
                      <div className="absolute left-0 top-0 bottom-0 w-[50%] bg-slate-100/40" />
                      {/* Red reactive zone */}
                      <div className="absolute left-[50%] right-0 top-0 bottom-0 bg-red-50/80 flex items-center px-10 border-l-4 border-red-500">
                        <div className="flex space-x-4 items-center">
                          <div className="h-2 w-2 rounded-full bg-red-500 animate-[pulse_1.5s_infinite]" />
                          <div className="flex flex-col">
                            <span className="text-[10px] font-black text-red-600 uppercase tracking-widest leading-none mb-1">Cobrança Tardia</span>
                            <span className="text-[9px] text-red-400 font-bold uppercase tracking-tight">Perda de Relacionamento</span>
                          </div>
                        </div>
                      </div>
                      {/* Vertical marker for Day 0 */}
                      <div className="absolute left-[50%] top-0 bottom-0 w-px bg-red-500/20 z-10" />
                      <div className="ml-10 text-[11px] font-bold text-slate-200 uppercase relative z-10 pointer-events-none tracking-[0.2em] italic">Atraso Exposto</div>
                    </div>
                  </div>

                  {/* 3. Indicador de Risco (The "A-ha" moment) */}
                  <div className="relative flex justify-center h-4">
                    <div className="absolute left-[20%] -top-10 flex flex-col items-center space-y-2 group">
                      <div className="bg-slate-900 text-white text-[11px] font-black px-6 py-3 rounded-2xl shadow-2xl flex items-center space-x-3 border border-white/10 transition-transform group-hover:scale-110">
                        <div className="p-1.5 bg-white/5 rounded-lg border border-white/10">
                          <Search className="h-4 w-4 text-[#CEFF05]" />
                        </div>
                        <span className="uppercase tracking-[0.15em]">Risco Detectado</span>
                      </div>
                      <div className="w-px h-12 bg-gradient-to-b from-slate-900 via-slate-400 to-transparent" />
                    </div>
                  </div>

                  {/* 4. Modelo Preditivo (Proactive - Deep Blue/Soft Emerald) */}
                  <div className="space-y-5">
                    <div className="flex items-center justify-between px-2">
                      <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Modelo Preditivo Talos</span>
                      <div className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] italic text-emerald-600 font-black uppercase tracking-tight">Intervenção de Precisão</span>
                      </div>
                    </div>
                    <div className="relative h-28 bg-slate-950 rounded-[3rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-full bg-emerald-500/5 blur-3xl" />

                      {/* Predictive active zone (Soft Emerald) */}
                      <div className="absolute left-[15%] right-[50.5%] top-3 bottom-3 bg-emerald-500/10 border border-emerald-500/20 rounded-[2.5rem] flex items-center justify-center px-10 shadow-inner group transition-all hover:bg-emerald-500/15">
                        <div className="text-center">
                          <span className="text-[11px] font-black text-emerald-300 uppercase tracking-[0.2em] block leading-[1.4] drop-shadow-xl">
                            ZONA DE RECUPERAÇÃO <br /> DE RECEITA IA
                          </span>
                        </div>
                      </div>

                      {/* Vertical mark for Day 0 */}
                      <div className="absolute left-[50%] top-0 bottom-0 w-px bg-white/10 z-10" />

                      {/* Progress/Track Details */}
                      <div className="absolute left-[15%] right-[50%] bottom-0 h-1.5 bg-gradient-to-r from-transparent via-emerald-500 to-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.8)] opacity-70" />
                      <div className="ml-16 text-[10px] font-black text-white/10 relative z-10 pointer-events-none uppercase tracking-[0.5em] italic">AI Predictive Shield</div>
                    </div>
                  </div>

                  {/* 5. Texto explicativo final */}
                  <div className="pt-12 border-t border-slate-100 flex flex-col items-center space-y-4">
                    <p className="text-sm text-slate-600 italic font-semibold text-center leading-relaxed max-w-sm">
                      “Prevemos o comportamento do pagador até 15 dias antes da falha.”
                    </p>
                    <div className="flex space-x-3 opacity-30">
                      <div className="h-1 w-1 rounded-full bg-slate-400" />
                      <div className="h-1 w-12 rounded-full bg-slate-300" />
                      <div className="h-1 w-1 rounded-full bg-slate-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Estratégias de Inteligência de Receita</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nossos modelos proprietários atuam nos três pilares vitais da saúde financeira B2B.
          </p>
        </div>
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Previsão de Inadimplência",
              desc: "Antecipe o risco de atraso em faturas antes mesmo do vencimento, permitindo ações preventivas suaves.",
              icon: <Shield className="h-10 w-10 text-accent" />,
            },
            {
              title: "Retenção Automática",
              desc: "Identifique padrões de churn latentes e ative gatilhos de retenção baseados em comportamento de uso.",
              icon: <RefreshCw className="h-10 w-10 text-accent" />,
            },
            {
              title: "Maximização de LTV",
              desc: "Determine o momento exato para expansão de conta (upsell) com base na propensão de compra e health score.",
              icon: <TrendingUp className="h-10 w-10 text-accent" />,
            },
          ].map((item, idx) => (
            <Card key={idx} className="border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="pt-10 pb-8 px-8 text-center">
                <div className="mb-6 flex justify-center">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed italic">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Social Proof / Authority Section */}
      <section className="py-24 border-t border-border bg-slate-50">
        <div className="container mx-auto flex flex-col items-center">
          <div className="bg-white p-8 md:p-12 rounded-2xl border border-border shadow-sm max-w-4xl w-full flex flex-col md:flex-row items-center gap-8">
            <div className="h-20 w-20 flex-shrink-0 bg-primary/5 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
            <div>
              <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Autoridade Científica</p>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Tecnologia desenvolvida em ambiente acadêmico, agora aplicada ao mercado de alta complexidade.
              </h3>
              <p className="text-muted-foreground italic leading-relaxed">
                Nossos algoritmos foram validados exaustivamente para garantir que o ROI seja previsível e mensurável desde o primeiro dia de operação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full" />
        </div>
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Pronto para liderar com previsibilidade?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Junte-se ao programa de parceiros e descubra o potencial oculto nos seus dados.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-8 h-auto">
            <Link href="/contato">Falar com um Especialista</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
