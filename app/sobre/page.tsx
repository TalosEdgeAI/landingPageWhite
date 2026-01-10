import { Button } from "@/components/ui/button"
import { Brain, ShieldCheck, TrendingUp, BookOpen, Microscope, GraduationCap, Target, Cpu } from "lucide-react"
import Link from "next/link"

export default function SobrePage() {
  return (
    <div className="flex flex-col w-full bg-white font-sans selection:bg-primary/30 selection:text-slate-900">

      {/* 🔹 Bloco 1 — Origem & Propósito (Hero Section) */}
      <section className="relative pt-32 pb-20 bg-slate-50 border-b border-slate-100 overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(var(--primary-rgb),0.05)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 max-w-4xl relative">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6 block">Nossa Origem & Propósito</span>
          <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
            Ciência de Dados Aplicada à <span className="text-primary italic">Receita</span>.
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
            Integramos Ciência de Dados avançada com automações robustas. Criamos ecossistemas que resolvem desafios de fluxo de caixa e escalabilidade, substituindo o trabalho manual por inteligência e velocidade.
          </p>
          <div className="mt-12 h-px w-24 bg-primary/20 mx-auto" />
        </div>
      </section>

      {/* 🔹 Bloco 2 — Narrativa de Origem (Origem em Pesquisa Aplicada) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-20 items-center max-w-6xl relative">
          <div className="space-y-10 relative">
            <div className="inline-flex items-center space-x-2 text-primary">
              <Cpu className="h-5 w-5" />
              <span className="font-bold uppercase tracking-[0.2em] text-[10px]">Origem em Pesquisa Aplicada</span>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                A ciência a serviço do <br />
                <span className="text-slate-400 font-light italic">impacto financeiro.</span>
              </h3>

              <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                <p>
                  A Talos IA nasce da vivência direta com pesquisa avançada em Inteligência Artificial, mas foi estruturada desde o primeiro dia para produção, escala e impacto financeiro real.
                </p>
                <p>
                  Identificamos que enquanto a ciência avançava em modelos de <strong>Deep Learning para séries temporais</strong>, o mercado ainda operava sob ferramentas reativas. Nossa existência é a resposta a essa lacuna: operacionalizar o estado da arte para proteger e expandir a receita corporativa.
                </p>
              </div>
            </div>

            {/* 🔹 Bloco 3 — Missão (Operacional) */}
            <div className="p-10 bg-slate-50 rounded-[3rem] border-l-8 border-primary relative group">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Target className="h-12 w-12 text-primary" />
              </div>
              <p className="text-xl text-slate-900 font-medium leading-relaxed italic">
                "Transformamos pesquisa científica validada em modelos preditivos auditáveis que atuam diretamente sobre inadimplência, churn e eficiência de capital."
              </p>
            </div>
          </div>

          <div className="relative justify-self-center lg:justify-self-end">
            <div className="aspect-square w-full max-w-md bg-white rounded-[4rem] overflow-hidden shadow-2xl flex items-center justify-center p-16 relative border border-slate-100">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#0f172a_1px,transparent_1px)] [background-size:24px_24px]" />
              <BookOpen className="h-32 w-32 text-primary opacity-80 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-80 w-80 border border-slate-200 rounded-full animate-[spin_40s_linear_infinite]" />
                <div className="h-64 w-64 border border-slate-300 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
              </div>
              <div className="absolute bottom-10 left-10 p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-100 text-slate-900 space-y-2 shadow-lg">
                <div className="text-[10px] font-black uppercase tracking-widest text-primary">Validado</div>
                <div className="text-xs font-light">Modelagem de Séries Temporais</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Bloco 4 — Pilares (Affirmation + Consequence) - Light Mode */}
      <section className="py-32 bg-slate-50 text-slate-900 selection:bg-primary selection:text-slate-900 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-24 space-y-4">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Valores Inegociáveis</h3>
            <p className="text-slate-500 font-light italic">A base de nossa confiança técnica e ética.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Rigor Científico",
                affirmation: "Modelos Auditáveis",
                consequence: "Decisões totalmente explicáveis para times financeiros, técnicos e jurídicos.",
                icon: <GraduationCap className="h-10 w-10 text-primary" />
              },
              {
                title: "Ética de Dados",
                affirmation: "Arquitetura Segura",
                consequence: "Processamento de inteligência em conformidade total com sigilo e governança corporativa.",
                icon: <ShieldCheck className="h-10 w-10 text-primary" />
              },
              {
                title: "Foco em ROI",
                affirmation: "Eficiência de Capital",
                consequence: "A tecnologia como meio para redução direta de perdas e expansão de margem.",
                icon: <TrendingUp className="h-10 w-10 text-primary" />
              }
            ].map((pillar, i) => (
              <div key={i} className="p-10 rounded-[3rem] border border-slate-200 bg-white space-y-8 group hover:shadow-xl transition-all duration-500">
                <div className="h-16 w-16 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-slate-100">
                  <div className="text-primary group-hover:text-white transition-colors">
                    {pillar.icon}
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold">{pillar.title}</h4>
                  <div className="space-y-2">
                    <p className="text-slate-700 font-bold text-xs uppercase tracking-widest opacity-80">{pillar.affirmation}</p>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">{pillar.consequence}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Bloco 5 — Corpo Técnico & Pesquisa (Institutional Credentials) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="h-12 w-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight italic">Corpo Técnico & <br />Credenciais</h3>
              </div>

              <div className="space-y-8">
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  Nosso time combina experiência acumulada em modelagem estocástica e IA avançada, com atuação estratégica em desafios críticos de mercado.
                </p>
                <ul className="space-y-4">
                  {[
                    "Especialistas em Modelagem Estocástica e Séries Temporais.",
                    "Experiência com implementações de IA em operações financeiras e SaaS.",
                    "Domínio de protocolos de Governança de Dados e Compliance.",
                    "Foco em explicabilidade e auditoria de modelos preditivos."
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-primary/20 transition-all">
                      <div className="h-2 w-2 bg-primary rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]" />
                      <span className="text-slate-700 font-medium text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-12 bg-slate-50 border border-slate-100 rounded-[4rem] relative overflow-hidden text-center space-y-8 shadow-sm">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-3xl" />
              <div className="relative z-10 space-y-4">
                <div className="text-5xl font-black text-slate-900 tracking-tighter">Science<span className="text-primary">.</span></div>
                <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">Validada por rigor e prática</div>
              </div>
              <p className="text-sm text-slate-400 font-light italic relative z-10 px-6">
                Combinamos o rigor das publicações internacionais com a pragmática do fluxo de caixa enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Bloco 6 — CTA Section (Agendar Diálogo Técnico) */}
      <section className="py-32 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-12 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 blur-[100px] pointer-events-none" />

          <div className="space-y-6 relative">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Interessado no rigor por trás <br />dos nossos <span className="text-primary italic">resultados?</span>
            </h2>
            <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
              Inicie um diálogo técnico para entender como nossos modelos podem ser auditados e integrados à sua infraestrutura de dados.
            </p>
          </div>

          <Button asChild size="lg" className="bg-primary text-white font-bold hover:bg-primary/90 px-12 h-16 text-lg rounded-full shadow-2xl shadow-primary/20 transition-transform hover:scale-105">
            <Link href="/contato">Agendar Diálogo Técnico</Link>
          </Button>

          <div className="pt-8 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
            Talos Intelligence &copy; 2025 | Corporate Governance
          </div>
        </div>
      </section>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
