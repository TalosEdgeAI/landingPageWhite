import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, RefreshCw, TrendingUp, CheckCircle2 } from "lucide-react"
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
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-7 h-auto">
              <Link href="/contato">
                Simular potencial de economia
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10 hover:text-white text-lg px-8 py-7 h-auto backdrop-blur-sm">
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
              {/* Timeline Comparison Visual */}
              <div className="bg-white p-8 rounded-3xl border border-border shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Timeline Comparison</div>
                </div>

                <div className="space-y-12 relative pt-8">
                  {/* Traditional Timeline */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                      <span>Dia -15</span>
                      <span>Vencimento (Dia 0)</span>
                      <span>Dia +15</span>
                    </div>
                    <div className="relative h-12 bg-slate-100 rounded-full flex items-center px-2">
                      <span className="absolute left-[50%] h-8 w-1 bg-red-500 rounded-full" /> {/* Vencimento mark */}
                      <div className="absolute right-4 flex items-center space-x-2">
                        <div className="h-6 w-16 bg-red-100 border border-red-200 rounded text-[9px] font-bold text-red-600 flex items-center justify-center">Cobrança</div>
                        <div className="h-6 w-16 bg-red-100 border border-red-200 rounded text-[9px] font-bold text-red-600 flex items-center justify-center">Ação Reativa</div>
                      </div>
                      <div className="ml-4 text-[11px] font-bold text-slate-400">Régua Tradicional</div>
                    </div>
                  </div>

                  {/* Predictive Timeline */}
                  <div className="space-y-4">
                    <div className="relative h-16 bg-slate-900 rounded-full flex items-center px-2 border-2 border-accent/20">
                      <span className="absolute left-[50%] h-10 w-1 bg-white/20 rounded-full" /> {/* Vencimento mark */}

                      {/* Zona de Recuperação */}
                      <div className="absolute left-[15%] right-[50%] h-10 bg-accent/20 border border-accent/40 rounded-lg flex items-center justify-center">
                        <span className="text-[10px] font-bold text-accent uppercase tracking-widest animate-pulse">Zona de Recuperação de Receita IA</span>
                      </div>

                      <div className="absolute left-[20%] -top-10">
                        <div className="bg-accent text-primary text-[9px] font-bold px-2 py-1 rounded shadow-lg flex flex-col items-center">
                          <span>Risco Detectado</span>
                          <div className="w-0.5 h-4 bg-accent" />
                        </div>
                      </div>

                      <div className="ml-4 text-[11px] font-bold text-white/60 relative z-10">Modelo Preditivo Talos</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 text-center">
                    <p className="text-xs text-slate-500 italic">Prevemos o comportamento do pagador até 15 dias antes da falha.</p>
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
