"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Activity,
    ArrowUpRight,
    ArrowDownRight,
    ChevronDown,
    ChevronUp,
    Zap, // Comercial
    FileCheck, // Financeiro
    Bot, // IA
    MessageSquare,
    CheckCircle2,
    Clock,
    Terminal, // Console
    RefreshCw
} from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

// Definição dos Dados de Cada Modelo (Automação)
const tabs = [
    {
        id: "comercial",
        label: "Comercial & CRM",
        icon: Zap,
        color: "from-blue-500 to-cyan-500",
        description: "Enriquecimento de leads e cadência automática no WhatsApp.",
        kpis: [
            { label: "TAREFAS EXECUTADAS HOJE", value: "14.205", change: "+12%", trend: "up", color: "text-green-500", chartType: "bar" },
            { label: "TEMPO ECONOMIZADO (MÊS)", value: "142h", change: "30min", trend: "up", color: "text-amber-500", chartType: "progress" },
        ],
        logs: [
            {
                icon: MessageSquare,
                title: "Novo Lead: Construtora Silva",
                subtitle: "Enriquecido e enviado p/ CRM",
                status: "Success",
                statusColor: "text-green-500 bg-green-500/10",
                timestamp: "10:42 AM"
            },
            {
                icon: Zap,
                title: "Follow-up WhatsApp #882",
                subtitle: "Mensagem de re-engajamento enviada",
                status: "Success",
                statusColor: "text-green-500 bg-green-500/10",
                timestamp: "10:41 AM"
            },
            {
                icon: Terminal,
                title: "Webhook Integrator",
                subtitle: "Sincronização Pipefy <-> Salesforce",
                status: "Processing...",
                statusColor: "text-blue-400 bg-blue-400/10",
                timestamp: "Now"
            }
        ]
    },
    {
        id: "financeiro",
        label: "Financeiro Automático",
        icon: FileCheck,
        color: "from-green-500 to-emerald-600",
        description: "Emissão de notas, baixa de boletos e conciliação bancária.",
        kpis: [
            { label: "NOTAS EMITIDAS (MÊS)", value: "843", change: "+5%", trend: "up", color: "text-emerald-500", chartType: "bar" },
            { label: "CONCILIAÇÃO BANCÁRIA", value: "99.8%", change: "Automação", trend: "up", color: "text-blue-400", chartType: "progress" },
        ],
        logs: [
            {
                icon: FileCheck,
                title: "Nota Fiscal #4492 Emitida",
                subtitle: "Cliente: Tech Solutions Ltda",
                status: "Success",
                statusColor: "text-green-500 bg-green-500/10",
                timestamp: "10:38 AM"
            },
            {
                icon: Activity,
                title: "Conciliação Bancária #9921",
                subtitle: "Baixa automática de boleto (Itau)",
                status: "Success",
                statusColor: "text-green-500 bg-green-500/10",
                timestamp: "10:35 AM"
            },
            {
                icon: Terminal,
                title: "Relatório DRE Diário",
                subtitle: "Gerando PDF e enviando p/ Slack",
                status: "Processing...",
                statusColor: "text-amber-500 bg-amber-500/10",
                timestamp: "Now"
            }
        ]
    },
    {
        id: "ia",
        label: "Agentes de IA",
        icon: Bot,
        color: "from-purple-500 to-indigo-600",
        description: "Triagem de e-mails e suporte L1 rodando 24/7.",
        kpis: [
            { label: "TICKETS RESOLVIDOS (IA)", value: "1.205", change: "92% Aut.", trend: "up", color: "text-purple-400", chartType: "bar" },
            { label: "TEMPO DE RESPOSTA", value: "45s", change: "-98%", trend: "down", color: "text-[#CEFF05]", chartType: "progress" },
        ],
        logs: [
            {
                icon: Bot,
                title: "Triagem de Suporte (IA)",
                subtitle: "Ticket classificado como 'Urgente'",
                status: "Success",
                statusColor: "text-green-500 bg-green-500/10",
                timestamp: "10:44 AM"
            },
            {
                icon: MessageSquare,
                title: "Resposta Automática L1",
                subtitle: "Dúvida sobre 2ª via de boleto",
                status: "Sent",
                statusColor: "text-green-500 bg-green-500/10",
                timestamp: "10:43 AM"
            },
            {
                icon: Terminal,
                title: "Análise de Sentimento",
                subtitle: "Monitorando redes sociais",
                status: "Listening...",
                statusColor: "text-blue-400 bg-blue-400/10 animate-pulse",
                timestamp: "Live"
            }
        ]
    }
]

export default function AutomationDashboardShowcase() {
    const [activeTab, setActiveTab] = useState(tabs[0])
    const isMobile = useIsMobile()

    return (
        <section className="pb-24 pt-0 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Cabeçalho da Seção */}
                <div className="text-center mb-16">
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-slate-900 mb-4 leading-tight">
                        Seu Negócio, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Rodando no Piloto Automático.</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">
                        Visualize em tempo real seus robôs trabalhando, integrando dados e executando tarefas enquanto você foca na estratégia.
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
                                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-blue-600"
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

                    {/* Lado Direito: O Dashboard (Visualização Console) */}
                    <div className="lg:w-2/3">
                        <div className={`relative bg-[#0B0F19] rounded-[2rem] border border-slate-800 shadow-2xl p-4 md:p-8 min-h-[400px] md:aspect-auto flex flex-col overflow-hidden`}>

                            {/* Barra de Ferramentas (Console Style) */}
                            <div className="flex items-center justify-between mb-8 px-2 border-b border-slate-800 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-3 w-3 rounded-full bg-red-500/50" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                                    <div className="h-3 w-3 rounded-full bg-green-500/50" />
                                    <div className="h-6 w-[1px] bg-slate-800 mx-2" />
                                    <Terminal className="h-4 w-4 text-slate-500" />
                                    <span className="text-slate-400 text-sm font-mono tracking-tight">workflow_execution_log.json</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-[#CEFF05] uppercase tracking-widest border border-[#CEFF05]/30 px-3 py-1 rounded-full animate-pulse bg-[#CEFF05]/5">
                                    <div className="h-2 w-2 rounded-full bg-[#CEFF05]" />
                                    Live Data
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3, ease: "circOut" }}
                                    className="flex-1 flex flex-col gap-6"
                                >
                                    {/* Grid de KPIs (Produtividade) */}
                                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                                        {/* Widget 1: Histograma */}
                                        <div className="col-span-2 md:col-span-1 bg-slate-900 rounded-xl p-5 border border-slate-800 relative overflow-hidden group hover:border-slate-700 transition-colors">
                                            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                                <activeTab.icon className="h-16 w-16 text-white" />
                                            </div>
                                            <div className="flex items-start justify-between mb-4 relative z-10">
                                                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">{activeTab.kpis[0].label}</span>
                                            </div>
                                            <div className="flex items-end gap-2 relative z-10 mb-2">
                                                <span className="text-3xl font-mono font-bold text-white tracking-tighter">{activeTab.kpis[0].value}</span>
                                                <span className={`text-xs font-bold flex items-center mb-1.5 px-1.5 py-0.5 rounded ${activeTab.kpis[0].color} bg-white/5`}>
                                                    {activeTab.kpis[0].trend === 'up' ? <ArrowUpRight className="h-3 w-3 mr-0.5" /> : <ArrowDownRight className="h-3 w-3 mr-0.5" />}
                                                    {activeTab.kpis[0].change}
                                                </span>
                                            </div>
                                            {/* Mini Chart Visualization */}
                                            <div className="h-8 flex items-end gap-1 opacity-60">
                                                {[30, 45, 35, 60, 50, 85, 95, 70, 60, 80].map((h, i) => (
                                                    <div key={i} style={{ height: `${h}%` }} className={`flex-1 rounded-t-sm ${activeTab.kpis[0].chartType === 'bar' ? 'bg-emerald-500' : 'bg-blue-500'}`} />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Widget 2: Barra de Progresso */}
                                        <div className="col-span-2 md:col-span-1 bg-slate-900 rounded-xl p-5 border border-slate-800 relative overflow-hidden group hover:border-slate-700 transition-colors">
                                            <div className="flex items-start justify-between mb-4">
                                                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">{activeTab.kpis[1].label}</span>
                                                <Clock className="h-4 w-4 text-slate-600" />
                                            </div>
                                            <div className="flex items-end gap-2 mb-3">
                                                <span className="text-3xl font-mono font-bold text-white tracking-tighter">{activeTab.kpis[1].value}</span>
                                                <span className={`text-xs font-bold mb-1.5 text-slate-400`}>
                                                    {activeTab.kpis[1].change}
                                                </span>
                                            </div>
                                            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: "0%" }}
                                                    animate={{ width: "75%" }}
                                                    transition={{ duration: 1, delay: 0.2 }}
                                                    className={`h-full bg-gradient-to-r ${activeTab.color}`}
                                                />
                                            </div>
                                            <p className="text-[10px] text-slate-500 mt-2 text-right">Meta mensal: 82% atingida</p>
                                        </div>
                                    </div>

                                    {/* Log de Atividades (Console Output) */}
                                    <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden flex-1 flex flex-col">
                                        <div className="bg-slate-900/50 px-4 py-3 border-b border-slate-800 flex justify-between items-center">
                                            <h4 className="text-slate-300 text-xs font-bold font-mono flex items-center gap-2">
                                                <Terminal className="h-3 w-3 text-blue-500" />
                                                CONSOLE_OUTPUT
                                            </h4>
                                            <RefreshCw className="h-3 w-3 text-slate-600 animate-spin" style={{ animationDuration: '3s' }} />
                                        </div>
                                        <div className="p-2 space-y-1">
                                            {activeTab.logs.map((log, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className={`p-2 rounded-md bg-slate-800 text-slate-400 group-hover:text-white transition-colors`}>
                                                            <log.icon className="h-4 w-4" />
                                                        </div>
                                                        <div>
                                                            <div className="text-slate-200 text-sm font-medium font-mono">{log.title}</div>
                                                            <div className="text-slate-500 text-xs">{log.subtitle}</div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col items-end gap-1">
                                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${log.statusColor}`}>
                                                            {log.status}
                                                        </span>
                                                        <span className="text-[10px] text-slate-600 font-mono">{log.timestamp}</span>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Sombra Glow embaixo do dashboard */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/10 blur-[100px] -z-10 rounded-full pointer-events-none" />
                    </div>

                </div>
            </div >
        </section >
    )
}
