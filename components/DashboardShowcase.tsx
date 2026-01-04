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
            { name: "Varejo Express Ltda", status: "Crítico", value: "92% Risco", valueColor: "text-red-500" },
            { name: "Tech Solutions SA", status: "Alerta", value: "78% Risco", valueColor: "text-orange-500" },
            { name: "Grupo Horizonte", status: "Atenção", value: "64% Risco", valueColor: "text-yellow-500" }
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
            { name: "Construtora Ideal", status: "Negativado", value: "Score 340", valueColor: "text-red-500" },
            { name: "Logística Veloz", status: "Endividado", value: "Score 420", valueColor: "text-orange-500" },
            { name: "Móveis & Decor", status: "Monitorar", value: "Score 580", valueColor: "text-yellow-500" }
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
            { name: "Indústria Global", status: "Upsell Ready", value: "+ R$ 15k/mês", valueColor: "text-[#CEFF05]" },
            { name: "Rede Farmácias", status: "Cross-sell", value: "+ R$ 8k/mês", valueColor: "text-emerald-400" },
            { name: "Start Bank", status: "Renovação", value: "Alto Risco", valueColor: "text-white" }
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
                    </div>

                    {/* Lado Direito: O Dashboard (Visualização) */}
                    <div className="lg:w-2/3">
                        <div className={`relative bg-[#0B0F19] rounded-[2rem] border border-slate-800 shadow-2xl p-4 md:p-8 aspect-[4/3] md:aspect-auto md:h-[600px] flex flex-col overflow-hidden`}>

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
                                    className="flex-1 grid grid-cols-2 gap-4 md:gap-6"
                                >

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
                                        {/* Mini Chart SVG */}
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

                                    {/* Widget 3: Tabela de Detalhes (Lista Simulada) */}
                                    <div className="col-span-2 bg-slate-900/80 rounded-2xl p-6 border border-slate-800 overflow-hidden relative">
                                        <h4 className="text-white text-sm font-bold mb-4 flex items-center gap-2">
                                            <BarChart3 className="h-4 w-4 text-[#CEFF05]" />
                                            Análise Detalhada (Top 3 Clientes)
                                        </h4>
                                        <div className="space-y-3">
                                            {activeTab.clients.map((client, i) => (
                                                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`h-8 w-8 rounded-full bg-gradient-to-br ${activeTab.color} opacity-20 flex items-center justify-center`}>
                                                            <span className="text-white text-xs font-bold">{client.name.charAt(0)}</span>
                                                        </div>
                                                        <div>
                                                            <div className="text-white text-sm font-medium">{client.name}</div>
                                                            <div className="text-slate-400 text-xs">{client.status}</div>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className={`text-sm font-bold ${client.valueColor}`}>{client.value}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Overlay de gradiente para dar fade no fim da lista */}
                                        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#0B0F19] to-transparent" />
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
