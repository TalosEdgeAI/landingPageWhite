"use client"

import { motion } from "framer-motion"
import { TrendingUp, ShieldCheck, AlertTriangle, Activity, Target, Shield } from "lucide-react"

export default function FinancialImpactChart() {
    // Configuração das Curvas (SVG Paths)
    // Ajustado para criar o "Gap" visual entre as linhas
    const startY = 200
    const endX = 800

    // Caminho Verde (Talos) - Sobe levemente (Recuperação)
    const pathTalos = `M 0 ${startY} L 250 ${startY} C 400 ${startY}, 500 150, ${endX} 140`

    // Caminho Vermelho (Atual) - Cai drasticamente (Perda)
    const pathLegacy = `M 0 ${startY} L 250 ${startY} C 400 ${startY}, 500 350, ${endX} 400`

    // Área do Gap (Preenchimento Vermelho/Laranja)
    // Desenha a linha verde, desce até a vermelha, volta pela vermelha até o início
    const pathGap = `M 250 ${startY} C 400 ${startY}, 500 150, ${endX} 140 L ${endX} 400 C 500 350, 400 ${startY}, 250 ${startY} Z`

    return (
        <div className="w-full max-w-6xl mx-auto bg-[#0B0F19] rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col lg:flex-row">

            {/* --- COLUNA ESQUERDA: O GRÁFICO (70%) --- */}
            <div className="lg:w-[70%] p-6 md:p-10 relative">
                <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-white text-lg font-bold flex items-center gap-2">
                        <TrendingUp className="text-[#CEFF05] h-5 w-5" />
                        Projeção de Impacto Financeiro (Fluxo de Caixa)
                    </h3>
                </div>

                {/* Container SVG */}
                <div className="relative w-full h-[400px]">
                    <svg viewBox="0 0 800 450" className="w-full h-full overflow-visible">
                        <defs>
                            {/* Gradiente do Gap de Perda */}
                            <linearGradient id="gradientGap" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#FF4D4D" stopOpacity="0.1" />
                                <stop offset="100%" stopColor="#FF4D4D" stopOpacity="0.4" />
                            </linearGradient>

                            {/* Glow Verde */}
                            <filter id="glowGreen" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Linhas de Grade Verticais (Marcadores de Tempo) */}
                        <line x1="250" y1="50" x2="250" y2="450" stroke="#334155" strokeDasharray="4 4" opacity="0.5" />
                        <text x="255" y="70" fill="#64748b" fontSize="10" fontWeight="bold">DIA -15 (ALERTA TALOS)</text>

                        <line x1="450" y1="50" x2="450" y2="450" stroke="#334155" strokeDasharray="4 4" opacity="0.3" />
                        <text x="455" y="440" fill="#64748b" fontSize="10" fontWeight="bold">DIA 0 (VENCIMENTO)</text>

                        <line x1="650" y1="50" x2="650" y2="450" stroke="#334155" strokeDasharray="4 4" opacity="0.3" />
                        <text x="655" y="440" fill="#64748b" fontSize="10" fontWeight="bold">DIA +5</text>

                        {/* A "Boca do Jacaré" (Área de Perda Evitada) */}
                        <motion.path
                            d={pathGap}
                            fill="url(#gradientGap)"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        />

                        {/* Linha Vermelha (Legado) */}
                        <motion.path
                            d={pathLegacy}
                            fill="none"
                            stroke="#FF4D4D"
                            strokeWidth="3"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />

                        {/* Linha Verde (Talos) */}
                        <motion.path
                            d={pathTalos}
                            fill="none"
                            stroke="#CEFF05"
                            strokeWidth="4"
                            filter="url(#glowGreen)"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />

                        {/* Ponto Final Verde */}
                        <motion.circle cx={endX} cy="140" r="6" fill="#CEFF05"
                            initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.5 }}
                        />

                    </svg>

                    {/* --- CARDS FLUTUANTES (HTML sobre SVG) --- */}

                    {/* Card Talos (O Herói) */}
                    <motion.div
                        className="absolute top-0 right-0 bg-[#0B0F19]/90 border border-[#CEFF05] p-4 rounded-xl shadow-[0_0_30px_rgba(206,255,5,0.15)] backdrop-blur-md w-64"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.8 }}
                    >
                        <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-2">
                            <ShieldCheck className="text-[#CEFF05] h-4 w-4" />
                            <span className="text-[#CEFF05] font-bold text-xs uppercase tracking-widest">~82% Redução de Perdas</span>
                        </div>
                        <div className="space-y-1">
                            <div className="flex justify-between text-xs text-slate-400">
                                <span>Inadimplência Mitigada</span>
                            </div>
                            <div className="flex justify-between items-end">
                                <span className="text-slate-500 text-[12px]">Perda Residual Estimada:</span>
                                <span className="text-white font-mono font-bold">-R$ 36k</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card Legado (O Vilão) */}
                    <motion.div
                        className="absolute bottom-[8%] right-[50%] bg-red-950/80 border border-red-500/50 p-4 rounded-xl backdrop-blur-sm w-56"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2 }}
                    >
                        <div className="flex items-center gap-2 mb-1">
                            <AlertTriangle className="text-red-500 h-4 w-4" />
                            <span className="text-red-500 font-bold text-xs uppercase">Perda Realizada</span>
                        </div>
                        <div className="text-white font-mono text-2xl font-bold">-R$ 200k</div>
                        <div className="text-red-200/50 text-[12px] leading-tight mt-1">
                            Inadimplência consolidada. Ação tardia.
                        </div>
                    </motion.div>

                    {/* Annotation: Início */}
                    <motion.div className="absolute top-[35%] left-[28%] w-40"
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }}
                    >
                        <p className="text-[#CEFF05] text-[10px] font-bold mb-1">↑ IA Identifica Risco & Inicia Ação Preventiva (Suave)</p>
                    </motion.div>



                </div>
            </div>

            {/* --- COLUNA DIREITA: KPIs ESTRATÉGICOS (30%) --- */}
            <div className="lg:w-[30%] bg-[#111625] border-l border-slate-800 p-8 flex flex-col justify-between relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#CEFF05] to-transparent opacity-50" />

                <div className="mb-6">
                    <h4 className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 text-center">KPIs Estratégicos (30 dias)</h4>

                    {/* KPI 1: Receita Recuperada */}
                    <div className="mb-10 text-center relative group">
                        <div className="w-24 h-12 border-t-4 border-[#CEFF05] rounded-t-full mx-auto mb-3 shadow-[0_-10px_20px_rgba(206,255,5,0.1)]" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2">
                            <Activity className="h-6 w-6 text-[#CEFF05]" />
                        </div>
                        <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">Receita Recuperada</div>
                        <div className="text-3xl font-mono font-bold text-white group-hover:text-[#CEFF05] transition-colors">
                            R$ 164k
                        </div>
                    </div>

                    {/* KPI 2: ROI */}
                    <div className="mb-10 text-center relative group">
                        <div className="w-24 h-12 border-t-4 border-emerald-500 rounded-t-full mx-auto mb-3" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2">
                            <Target className="h-6 w-6 text-emerald-500" />
                        </div>
                        <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">ROI Estimado</div>
                        <div className="text-3xl font-mono font-bold text-white group-hover:text-emerald-400 transition-colors">
                            15x
                        </div>
                    </div>

                    {/* KPI 3: Risco da Carteira */}
                    <div className="text-center relative group">
                        <div className="w-24 h-12 border-t-4 border-amber-500 rounded-t-full mx-auto mb-3" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2">
                            <Shield className="h-6 w-6 text-amber-500" />
                        </div>
                        <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">Risco da Carteira</div>
                        <div className="text-2xl font-bold text-amber-500">
                            MÉDIO
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-800">
                    <p className="text-[10px] text-slate-500 text-center leading-relaxed">
                        *Dados baseados na simulação atual. O gap visual representa a margem de contribuição protegida.
                    </p>
                </div>
            </div>

        </div>
    )
}
