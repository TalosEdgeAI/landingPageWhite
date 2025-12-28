import { Button } from "@/components/ui/button"
import { Brain, ShieldCheck, TrendingUp, BookOpen, Microscope, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function SobrePage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-6 block">Nossa Origem & Propósito</h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
            Ciência de Dados com Rigor Acadêmico.
          </h2>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            Unimos o estado da arte da pesquisa em Inteligência Artificial à dinâmica crítica do mercado financeiro B2B.
          </p>
        </div>
      </section>

      {/* Storytelling Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center max-w-6xl">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 text-primary">
              <Microscope className="h-6 w-6" />
              <span className="font-bold uppercase tracking-widest text-xs">A Narrativa de Origem</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Nascidos na Academia. <br />
              <span className="text-slate-400 font-light italic">Forjados para o Mercado.</span>
            </h3>
            <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
              <p>
                A Talos AI nasceu como uma spin-off de pesquisa dentro do ecossistema de Inteligência Artificial da <strong>Universidade de Tecnologia Aplicada</strong>.
              </p>
              <p>
                Identificamos uma lacuna crítica entre o estado da arte da pesquisa científica e as ferramentas financeiras disponíveis no mercado. Enquanto a academia avançava em modelos de <strong>Deep Learning para séries temporais</strong>, o mercado corporativo ainda dependia de estatística linear básica.
              </p>
              <p className="italic border-l-4 border-primary pl-6 bg-slate-50 py-4">
                "Nossa missão é fechar essa lacuna (Bridging the Gap). Transformamos teses validadas e publicações científicas em algoritmos robustos de proteção de receita, trazendo o rigor do laboratório para a dinâmica do fluxo de caixa."
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="aspect-square bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-12">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
              <BookOpen className="h-32 w-32 text-primary opacity-20 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-64 w-64 border border-white/10 rounded-full animate-[spin_30s_linear_infinite]" />
                <div className="h-48 w-48 border border-white/5 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Nossos Pilares</h3>
            <p className="text-slate-400 italic">Valores inegociáveis que sustentam nossa tecnologia.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Rigor Científico",
                desc: "Não utilizamos 'caixas pretas'. Cada modelo preditivo é construído sobre metodologias auditáveis e revisadas por pares.",
                icon: <GraduationCap className="h-10 w-10 text-accent" />
              },
              {
                title: "Ética de Dados",
                desc: "A privacidade não é um recurso, é a base. Nossa arquitetura foi desenhada para processar inteligência sem comprometer o sigilo bancário.",
                icon: <ShieldCheck className="h-10 w-10 text-accent" />
              },
              {
                title: "Foco em ROI",
                desc: "A tecnologia é apenas o meio. O fim é sempre a eficiência de capital e a redução de perdas financeiras.",
                icon: <TrendingUp className="h-10 w-10 text-accent" />
              }
            ].map((pillar, i) => (
              <div key={i} className="p-8 rounded-2xl border border-border bg-slate-50 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="mb-6">{pillar.icon}</div>
                <h4 className="text-xl font-bold mb-4">{pillar.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed italic">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Council Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-block p-4 bg-slate-50 rounded-full mb-8">
            <Brain className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-12 italic">Corpo Técnico & Pesquisa</h3>
          <ul className="space-y-6 text-left max-w-2xl mx-auto">
            {[
              "Pesquisadores com publicações internacionais em conferências de IA (NeurIPS, ICML).",
              "Especialistas em Modelagem Estocástica e Séries Temporais de alta frequência.",
              "Membros ativos de grupos de pesquisa em Inteligência Artificial aplicada às finanças.",
              "Doutores e Mestres em Ciência da Computação e Engenharia de Software."
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-4 border-b border-slate-100 pb-4 last:border-0 hover:pl-2 transition-all group">
                <div className="h-2 w-2 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                <span className="text-slate-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Interessado no rigor por trás dos nossos números?
          </h2>
          <Button asChild size="lg" className="bg-primary text-white hover:bg-primary px-12 h-14 text-lg">
            <Link href="/contato">Agendar Diálogo Técnico</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
