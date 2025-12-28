import { ShieldCheck, Lock, Binary, Cpu, Layers, Database, BarChart3, ArrowRight } from "lucide-react"

export default function TecnologiaPage() {
    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <section className="py-24 bg-slate-50 border-b border-border">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <div className="inline-flex items-center space-x-2 text-primary font-bold uppercase tracking-widest text-xs mb-4">
                        <Binary className="h-4 w-4" />
                        <span>Robustez & Ciência</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight">
                        Ciência de Dados de Nível Enterprise
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed font-light">
                        Não acreditamos em "caixas pretas". Nossos modelos são baseados em arquiteturas explicáveis,
                        garantindo que cada insight financeiro seja acompanhado de evidências e lastro matemático.
                    </p>
                </div>
            </section>

            {/* Nossa Ciência Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary italic">Modelagem Preditiva Proprietária</h2>
                        <p className="text-lg text-slate-700 leading-relaxed italic">
                            Utilizamos análise de Séries Temporais e Redes Neurais recorrentes customizadas para o comportamento transacional brasileiro.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { icon: <Cpu className="h-6 w-6" />, title: "Explainable AI", desc: "Decisões que seu C-Level pode auditar." },
                                { icon: <Layers className="h-6 w-6" />, title: "Time Series", desc: "Análise dinâmica de sazonalidade e tendências." },
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-secondary rounded-xl border border-border">
                                    <div className="text-primary mb-4">{item.icon}</div>
                                    <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-primary rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-12">
                            <div className="w-full h-full border border-white/20 rounded-full animate-[spin_20s_linear_infinite] flex items-center justify-center">
                                <div className="w-2/3 h-2/3 border border-accent/40 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="h-32 w-32 bg-accent/20 rounded-full blur-3xl animate-pulse" />
                                <Binary className="h-24 w-24 text-white opacity-40" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Diagrama de Processo */}
            <section className="py-24 bg-primary text-white overflow-hidden">
                <div className="container mx-auto px-4 text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Fluxo de Inteligência</h2>
                    <p className="text-slate-400">Como transformamos dados brutos em decisões de receita.</p>
                </div>
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
                        {/* Connection lines for desktop */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-y-1/2" />

                        {[
                            { step: "01", icon: <Database />, label: "Conexão Segura", sub: "Ingestão via API ou Batch." },
                            { step: "02", icon: <Binary />, label: "Processamento IA", sub: "Modelagem e Validação." },
                            { step: "03", icon: <BarChart3 />, label: "Dashboard & Alertas", sub: "Entrega de Valor e ROI." },
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center bg-primary p-8 rounded-2xl border border-white/20 w-full md:w-1/3">
                                <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center text-accent mb-6">
                                    {item.icon}
                                </div>
                                <span className="text-accent text-xs font-bold mb-2">{item.step}</span>
                                <h4 className="text-xl font-bold mb-2">{item.label}</h4>
                                <p className="text-sm text-slate-400 text-center">{item.sub}</p>
                                {i < 2 && <ArrowRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-accent/50" />}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Segurança Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <ShieldCheck className="h-16 w-16 text-accent mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Segurança Inegociável</h2>
                        <p className="text-muted-foreground text-lg italic">Seus dados são seu maior ativo. Nós os tratamos como tais.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Anonimização Total",
                                desc: "Dados sensíveis são criptografados ou anonimizados antes mesmo da primeira etapa de treinamento da IA.",
                                icon: <Lock className="h-8 w-8 text-primary" />
                            },
                            {
                                title: "LGPD Compliance",
                                desc: "Processos e infraestrutura desenhados sob as normas mais rigorosas de proteção de dados brasileiras.",
                                icon: <ShieldCheck className="h-8 w-8 text-primary" />
                            },
                            {
                                title: "Infraestrutura Isolada",
                                desc: "Seus dados nunca são compartilhados ou utilizados para treinar modelos de outros clientes. Ambiente dedicado.",
                                icon: <Layers className="h-8 w-8 text-primary" />
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 border border-border rounded-2xl bg-slate-50">
                                <div className="mb-6">{item.icon}</div>
                                <h4 className="text-xl font-bold text-primary mb-4">{item.title}</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed italic">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
