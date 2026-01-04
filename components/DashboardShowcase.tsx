"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    PieChart,
    BarChart3,
    TrendingUp,
    AlertTriangle,
    Users,
    Activity,
    ArrowUpRight,
    ArrowDownRight,
    ChevronDown,
    ChevronUp
} from "lucide-react"

// Definição dos Dados de Cada Modelo
const tabs = [
    {
        id: "churn",
        label: "Retenção (Churn)",
        icon: Users,
        color: "from-orange-500 to-amber-500",
        description: "Identifique quem vai sair antes do pedido de cancelamento.",
        kpis: [
            { label: "Risco da Carteira", value: "24.6%", change: "+3.2%", trend: "up", color: "text-red-500" },
            { label: "Receita em Risco", value: "R$ 142k", change: "MRR", trend: "neutral", color: "text-orange-500" },
        ],
        clients: [
            {
                name: "Varejo Express Ltda",
                status: "Crítico",
                value: "92% Risco",
                valueColor: "text-red-500",
                details: [
                    { label: "Probabilidade de Saída (Churn Rate)", value: "92%", description: "CFO: 'Este cliente tem 92% de chance de cancelar nos próximos 30 dias.'", highlight: false },
                    { label: "Receita em Risco (MRR)", value: "R$ 15.000", description: "CFO: 'Se sair, perdemos R$ 15k de receita recorrente mensal imediatamente.'", highlight: false },
                    { label: "Lifetime Value Restante", value: "R$ 45.000", description: "CFO: 'Previsão de apenas mais 3 meses de vida útil se nada for feito.'", highlight: false },
                    { label: "Perda Esperada (EL)", value: "R$ 13.800", description: "CFO: 'Ponderando o risco, já consideramos R$ 13.8k como perdidos este mês.'", highlight: true }
                ]
            },
            {
                name: "Tech Solutions SA",
                status: "Alerta",
                value: "78% Risco",
                valueColor: "text-orange-500",
                details: [
                    { label: "Probabilidade de Saída (Churn Rate)", value: "78%", description: "CFO: 'Alerta ligado: Engajamento caiu drasticamente. Risco alto.'", highlight: false },
                    { label: "Receita em Risco (MRR)", value: "R$ 8.500", description: "CFO: 'Contrato de médio porte em risco de não renovação.'", highlight: false },
                    { label: "Saúde da Conta", value: "Baixa", description: "CFO: 'NPS caiu para detrator. Requer ação imediata de CS.'", highlight: false },
                    { label: "Perda Esperada (EL)", value: "R$ 6.630", description: "CFO: 'Risco ponderado financeiro de R$ 6.6k.'", highlight: true }
                ]
            },
            {
                name: "Grupo Horizonte",
                status: "Atenção",
                value: "64% Risco",
                valueColor: "text-yellow-500",
                details: [
                    { label: "Probabilidade de Saída (Churn Rate)", value: "64%", description: "CFO: 'Sinal amarelo. Uso da plataforma diminuiu 20%.'", highlight: false },
                    { label: "Receita em Risco (MRR)", value: "R$ 22.000", description: "CFO: 'Grande conta. A perda seria significativa para o quarter.'", highlight: false },
                    { label: "Tendência", value: "Piora", description: "CFO: 'Sem intervenção, vai virar risco crítico em 15 dias.'", highlight: false },
                    { label: "Perda Esperada (EL)", value: "R$ 14.080", description: "CFO: 'Valor em risco ponderado elevado.'", highlight: true }
                ]
            }
        ]
    },
    {
        id: "credit",
        label: "Risco de Crédito",
        icon: AlertTriangle,
        color: "from-red-600 to-rose-600",
        description: "Análise de solvência e probabilidade de default (PD) por cliente.",
        kpis: [
            { label: "Inadimplência Projetada", value: "R$ 38k", change: "-12%", trend: "down", color: "text-green-500" },
            { label: "Score Médio da Base", value: "685", change: "Regular", trend: "up", color: "text-emerald-500" },
        ],
        clients: [
            {
                name: "Construtora Ideal",
                status: "Negativado",
                value: "Score 340",
                valueColor: "text-red-500",
                details: [
                    { label: "Probabilidade de Default (PD)", value: "15%", description: "CFO: 'Este cliente tem 15% de chance de calote.'", highlight: false },
                    { label: "Exposure at Default (EAD)", value: "R$ 50.000", description: "CFO: 'Se ele quebrar hoje, perdemos R$ 50.000 que estão em aberto.'", highlight: false },
                    { label: "Loss Given Default (LGD)", value: "R$ 40.000", description: "CFO: 'Desses R$ 50k, recuperamos 20% via jurídico. O prejuízo real (LGD) é R$ 40k.'", highlight: false },
                    { label: "Perda Esperada (EL)", value: "R$ 7.500", description: "CFO: 'A Métrica Suprema: Valor ponderado de perda para provisão.'", highlight: true }
                ]
            },
            {
                name: "Logística Veloz",
                status: "Endividado",
                value: "Score 420",
                valueColor: "text-orange-500",
                details: [
                    { label: "Probabilidade de Default (PD)", value: "12%", description: "CFO: 'Risco moderado-alto. Histórico de atrasos recentes.'", highlight: false },
                    { label: "Exposure at Default (EAD)", value: "R$ 80.000", description: "CFO: 'Alta exposição. Faturas grandes em aberto.'", highlight: false },
                    { label: "Loss Given Default (LGD)", value: "R$ 48.000", description: "CFO: 'Garantias cobrem 40%. Risco líquido de R$ 48k.'", highlight: false },
                    { label: "Perda Esperada (EL)", value: "R$ 9.600", description: "CFO: 'Provisão recomendada para este contrato.'", highlight: true }
                ]
            },
            {
                name: "Móveis & Decor",
                status: "Monitorar",
                value: "Score 580",
                valueColor: "text-yellow-500",
                details: [
                    { label: "Probabilidade de Default (PD)", value: "5%", description: "CFO: 'Cliente estável mas setor em crise.'", highlight: false },
                    { label: "Exposure at Default (EAD)", value: "R$ 25.000", description: "CFO: 'Exposição controlada dentro do limite.'", highlight: false },
                    { label: "Loss Given Default (LGD)", value: "R$ 15.000", description: "CFO: 'Recuperação estimada de 40% em caso de falência.'", highlight: false },
                    { label: "Perda Esperada (EL)", value: "R$ 1.250", description: "CFO: 'Baixo impacto imediato, mas manter radar ligado.'", highlight: true }
                ]
            }
        ]
    },
    {
        id: "ltv",
        label: "LTV & Growth",
        icon: TrendingUp,
        color: "from-[#CEFF05] to-green-500",
        description: "Descubra o potencial máximo de receita de cada conta.",
        kpis: [
            { label: "LTV Projetado", value: "R$ 12.5M", change: "+18%", trend: "up", color: "text-[#CEFF05]" },
            { label: "Oportunidades Upsell", value: "87", change: "Contas", trend: "up", color: "text-blue-400" },
        ],
        clients: [
            {
                name: "Indústria Global",
                status: "Upsell Ready",
                value: "+ R$ 15k/mês",
                valueColor: "text-[#CEFF05]",
                details: [
                    { label: "Potencial de Upsell", value: "R$ 15.000/mês", description: "CFO: 'Cliente maduro. Pronto para o plano Enterprise.'", highlight: false },
                    { label: "Probabilidade de Conversão", value: "85%", description: "CFO: 'Alta aderência às features do plano superior.'", highlight: false },
                    { label: "Incremento no LTV", value: "+ R$ 540.000", description: "CFO: 'Em 36 meses, este upsell gera meio milhão a mais.'", highlight: false },
                    { label: "LTV Projetado Total", value: "R$ 1.2M", description: "CFO: 'Cliente estratégico. Prioridade máxima comercial.'", highlight: true }
                ]
            },
            {
                name: "Rede Farmácias",
                status: "Cross-sell",
                value: "+ R$ 8k/mês",
                valueColor: "text-emerald-400",
                details: [
                    { label: "Potencial de Cross-sell", value: "R$ 8.000/mês", description: "CFO: 'Pode contratar o módulo de Analytics adicional.'", highlight: false },
                    { label: "Probabilidade de Conversão", value: "60%", description: "CFO: 'Interesse demonstrado em reuniões recentes.'", highlight: false },
                    { label: "Incremento no LTV", value: "+ R$ 192.000", description: "CFO: 'Valor significativo no longo prazo.'", highlight: false },
                    { label: "LTV Projetado Total", value: "R$ 580.000", description: "CFO: 'Expansão saudável da conta.'", highlight: true }
                ]
            },
            {
                name: "Start Bank",
                status: "Renovação",
                value: "Alto Risco",
                valueColor: "text-white",
                details: [
                    { label: "Risco de Downsell", value: "Alto", description: "CFO: 'Cliente cortando custos. Risco de reduzir o plano.'", highlight: false },
                    { label: "Receita em Jogo", value: "R$ 5.000/mês", description: "CFO: 'Parte da receita mensal pode ser perdida.'", highlight: false },
                    { label: "Ação Recomendada", value: "Defesa", description: "CFO: 'Oferecer desconto fidelidade para travar contrato.'", highlight: false },
                    { label: "LTV Preservado", value: "R$ 120.000", description: "CFO: 'O foco é manter o que já temos.'", highlight: true }
                ]
            }
        ]
    }
]

export default function DashboardShowcase() {
    const [activeTab, setActiveTab] = useState(tabs[0])

    return (
        <section className="pb-24 pt-0 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Cabeçalho da Seção */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Visibilidade Total, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">Entregue na sua Mão.</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Nossa IA processa milhões de dados e entrega o que importa: relatórios executivos e dashboards acionáveis para cada pilar financeiro.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* Lado Esquerdo: Navegação (Tabs) */}
                    <div className="lg:w-1/3 space-y-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab)}
                                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 group relative overflow-hidden ${activeTab.id === tab.id
                                    ? "bg-white border-primary shadow-xl shadow-primary/10 scale-105"
                                    : "bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50"
                                    }`}
                            >
                                {/* Indicador Ativo */}
                                {activeTab.id === tab.id && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-green-600"
                                    />
                                )}

                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${tab.color} text-white shadow-lg`}>
                                        <tab.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className={`font-bold text-lg ${activeTab.id === tab.id ? "text-slate-900" : "text-slate-600"}`}>
                                            {tab.label}
                                        </h3>
                                        <p className="text-sm text-slate-400 mt-1 leading-snug">
                                            {tab.description}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}

                        {/* --- INÍCIO: IMPLEMENTAÇÃO DO BOTÃO FLUTUANTE --- */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="relative mt-8 pl-6"
                        >
                            <motion.button
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-primary/30 rounded-full shadow-sm text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors relative z-10 cursor-default"
                                animate={{
                                    y: ["0%", "-8%", "0%"],
                                    boxShadow: ["0 2px 5px rgba(0,0,0,0.05)", "0 5px 15px rgba(206,255,5,0.2)", "0 2px 5px rgba(0,0,0,0.05)"]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Clique nos exemplos de empresa ao lado para ver a análise.
                            </motion.button>

                            <svg className="absolute top-full left-2/3 w-16 h-16 text-slate-400/60 pointer-events-none transform -translate-y-2 -translate-x-8" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20,10 Q20,60 80,40" markerEnd="url(#arrowhead)" />
                                <defs>
                                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                                    </marker>
                                </defs>
                            </svg>
                        </motion.div>
                        {/* --- FIM: IMPLEMENTAÇÃO DO BOTÃO FLUTUANTE --- */}

                    </div>

                    {/* Lado Direito: O Dashboard (Visualização) */}
                    <div className="lg:w-2/3">
                        <div className={`relative bg-[#0B0F19] rounded-[2rem] border border-slate-800 shadow-2xl p-4 md:p-8 aspect-[4/3] md:aspect-auto flex flex-col overflow-hidden`}>

                            {/* Barra de Ferramentas Fake */}
                            <div className="flex items-center justify-between mb-8 px-2">
                                <div className="flex items-center gap-3">
                                    <div className="h-3 w-3 rounded-full bg-red-500/50" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                                    <div className="h-3 w-3 rounded-full bg-green-500/50" />
                                    <div className="h-6 w-[1px] bg-slate-800 mx-2" />
                                    <span className="text-slate-400 text-sm font-mono">talos_intelligence_v2.pdf</span>
                                </div>
                                <div className="text-xs font-bold text-[#CEFF05] uppercase tracking-widest border border-[#CEFF05]/30 px-3 py-1 rounded-full">
                                    Live Data
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab.id}
                                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.98 }}
                                    transition={{ duration: 0.4 }}
                                    className="flex-1 flex flex-col gap-6"
                                >
                                    {/* Grid de KPIs */}
                                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                                        {/* Widget 1: KPI Principal */}
                                        <div className="col-span-2 md:col-span-1 bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
                                            <div className="flex items-start justify-between mb-4">
                                                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">{activeTab.kpis[0].label}</span>
                                                <Activity className="h-5 w-5 text-slate-500" />
                                            </div>
                                            <div className="flex items-end gap-3">
                                                <span className="text-4xl font-mono font-bold text-white">{activeTab.kpis[0].value}</span>
                                                <span className={`text-sm font-bold flex items-center mb-1 ${activeTab.kpis[0].color}`}>
                                                    {activeTab.kpis[0].trend === 'up' ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                                                    {activeTab.kpis[0].change}
                                                </span>
                                            </div>
                                            <div className="mt-4 h-12 flex items-end gap-1 opacity-50">
                                                {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
                                                    <div key={i} style={{ height: `${h}%` }} className={`flex-1 rounded-t-sm ${activeTab.kpis[0].trend === 'up' ? 'bg-emerald-500' : 'bg-red-500'}`} />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Widget 2: KPI Secundário */}
                                        <div className="col-span-2 md:col-span-1 bg-slate-800/30 rounded-2xl p-6 border border-slate-700/30 backdrop-blur-sm">
                                            <div className="flex items-start justify-between mb-4">
                                                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">{activeTab.kpis[1].label}</span>
                                                <PieChart className="h-5 w-5 text-slate-500" />
                                            </div>
                                            <div className="flex items-end gap-3">
                                                <span className="text-4xl font-mono font-bold text-white">{activeTab.kpis[1].value}</span>
                                                <span className={`text-sm font-bold mb-1 ${activeTab.kpis[1].color}`}>
                                                    {activeTab.kpis[1].change}
                                                </span>
                                            </div>
                                            <div className="mt-6 w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                                                <div className={`h-full bg-gradient-to-r ${activeTab.color} w-[70%]`} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Widget 3: Tabela de Detalhes (Lista Expandida) */}
                                    <div className="bg-slate-900/80 rounded-2xl p-6 border border-slate-800 overflow-hidden relative">
                                        <h4 className="text-white text-sm font-bold mb-4 flex items-center gap-2">
                                            <BarChart3 className="h-4 w-4 text-[#CEFF05]" />
                                            Análise Detalhada (Top 3 Clientes)
                                        </h4>
                                        <div className="space-y-4">
                                            {activeTab.clients.map((client, i) => (
                                                <ClientCard key={i} client={client} activeTabColor={activeTab.color} />
                                            ))}
                                        </div>
                                    </div>

                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Sombra Glow embaixo do dashboard */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 blur-[120px] -z-10 rounded-full pointer-events-none" />
                    </div>

                </div>
            </div>
        </section>
    )
}

function ClientCard({ client, activeTabColor }: { client: any, activeTabColor: string }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="rounded-xl bg-white/5 border border-white/5 overflow-hidden hover:bg-white/10 transition-all duration-300">
            {/* Header do Card - Sempre Visível */}
            <div
                className="p-4 flex items-center justify-between cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${activeTabColor} opacity-20 flex items-center justify-center`}>
                        <span className="text-white font-bold">{client.name.charAt(0)}</span>
                    </div>
                    <div>
                        <div className="text-white font-medium">{client.name}</div>
                        <div className="text-slate-400 text-xs">{client.status}</div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className={`text-sm font-bold ${client.valueColor}`}>{client.value}</div>
                    {isOpen ? <ChevronUp className="h-4 w-4 text-slate-500" /> : <ChevronDown className="h-4 w-4 text-slate-500" />}
                </div>
            </div>

            {/* Detalhes Expansíveis */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-black/20"
                    >
                        <div className="p-4 pt-0 grid gap-3">
                            <div className="h-[1px] w-full bg-white/10 mb-2" />
                            {client.details.map((detail: any, idx: number) => (
                                <div key={idx} className={`text-sm ${detail.highlight ? 'bg-[#CEFF05]/10 p-3 rounded-lg border border-[#CEFF05]/20' : ''}`}>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className={`font-semibold ${detail.highlight ? 'text-[#CEFF05]' : 'text-slate-300'}`}>
                                            {detail.label}
                                        </span>
                                        <span className={`font-mono font-bold ${detail.highlight ? 'text-[#CEFF05]' : 'text-white'}`}>
                                            {detail.value}
                                        </span>
                                    </div>
                                    <p className={`${detail.highlight ? 'text-[#CEFF05]/80' : 'text-slate-500'} text-xs italic`}>
                                        {detail.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
