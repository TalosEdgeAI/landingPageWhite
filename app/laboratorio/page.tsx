import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FlaskConical, TrendingDown, Target, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function LaboratorioPage() {
  const benchmarks = [
    {
      tag: "Benchmark Bancário",
      headline: "+15% na recuperação de crédito",
      sub: "Simulação baseada no dataset de instituições financeiras de médio porte.",
      metric: "15%",
      metricLabel: "Incumbency Recovery",
      icon: <TrendingDown className="h-8 w-8 text-accent" />
    },
    {
      tag: "Benchmark SaaS / Recorrência",
      headline: "Previsão de Churn com 85% de acurácia",
      sub: "Identificação de risco com 60 dias de antecedência em contratos enterprise.",
      metric: "85%",
      metricLabel: "Acertividade Média",
      icon: <Target className="h-8 w-8 text-accent" />
    }
  ]

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-accent text-accent-foreground px-4 py-2 rounded-full mb-6 border border-accent text-xs font-bold uppercase tracking-widest">
            <FlaskConical className="h-4 w-4" />
            <span>Laboratório de Benchmarks</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Performance Validada</h1>
          <p className="text-xl text-slate-300 font-light leading-relaxed">
            Exploramos datasets públicos e simulações complexas para demonstrar o poder de nossa modelagem preditiva em cenários reais de estresse financeiro.
          </p>
        </div>
      </section>

      {/* Benchmark Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {benchmarks.map((item, idx) => (
              <Card key={idx} className="overflow-hidden border-border hover:border-accent transition-all duration-300 shadow-lg">
                <CardContent className="p-0 flex flex-col sm:flex-row h-full">
                  <div className="p-8 sm:w-2/3 space-y-6">
                    <span className="inline-block px-3 py-1 bg-secondary text-primary text-[10px] font-bold rounded uppercase tracking-tighter">
                      {item.tag}
                    </span>
                    <h3 className="text-2xl font-bold text-primary leading-tight">
                      {item.headline}
                    </h3>
                    <p className="text-muted-foreground text-sm italic">
                      {item.sub}
                    </p>
                    <div className="pt-4">
                      {item.icon}
                    </div>
                  </div>
                  <div className="bg-primary p-8 sm:w-1/3 flex flex-col items-center justify-center text-center space-y-2">
                    <span className="text-5xl font-bold text-accent">{item.metric}</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-tight">
                      {item.metricLabel}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Early Adopter CTA */}
      <section className="py-24 bg-slate-50 border-y border-border">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-border shadow-2xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-5 rounded-bl-full" />

            <div className="space-y-6 flex-grow">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Quer ser nosso próximo Benchmark?</h2>
              <p className="text-lg text-muted-foreground italic leading-relaxed">
                Estamos selecionando empresas parceiras para o programa <strong>Early Adopter</strong>. Tenha acesso prioritário à nossa ciência de dados e condições exclusivas de implementação.
              </p>
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 px-8">
                <Link href="/contato">
                  Falar com um Especialista
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="hidden md:block w-1/3">
              <div className="relative">
                <div className="h-48 w-48 bg-accent/20 rounded-full border border-accent flex items-center justify-center animate-pulse">
                  <FlaskConical className="h-20 w-20 text-accent/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
