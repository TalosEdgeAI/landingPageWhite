"use client"

import { motion } from "framer-motion"
import { AlertTriangle, TrendingUp, ShieldCheck } from "lucide-react"

export default function CashFlowChart() {
    // Configuração das Curvas SVG (Bezier Curves para suavidade)
    // M = Move to, L = Line to, C = Cubic Bezier

    // Caminho Comum (Do início até o Dia -15)
    const pathCommon = "M 0 150 L 200 150"

    // Caminho Talos (Sobe levemente e estabiliza)
    // Começa em 200,150 (onde o comum termina)
    const pathTalos = "M 200 150 C 300 150, 400 120, 800 100"

    // Caminho Tradicional (Queda brusca após Dia 0)
    // O Dia 0 seria visualmente em X=450 aprox.
    const pathLegacy = "M 200 150 C 350 150, 450 180, 500 300 L 800 350"

    return (
        <div className="w-full bg-slate-950 rounded-3xl p-6 md:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">

            {/* Título da Seção */}
            <div className="absolute top-8 left-8 z-10">
                <h3 className="text-white text-lg font-bold flex items-center gap-2">
                    <TrendingUp className="text-[#CEFF05] h-5 w-5" />
                    Projeção de Fluxo de Caixa
                </h3>
            </div>

            {/* Container SVG Responsivo */}
            <div className="relative w-full h-[400px] mt-8">
                <svg
                    viewBox="0 0 800 400"
                    className="w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                >
                    <defs>
                        {/* Gradiente para a área de perda (vermelho) */}
                        <linearGradient id="gradientLoss" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                        </linearGradient>

                        {/* Glow para a linha Talos */}
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Grid Lines (Contexto) */}
                    <line x1="450" y1="0" x2="450" y2="400" stroke="#334155" strokeWidth="1" strokeDasharray="5,5" />
                    <text x="455" y="390" fill="#64748b" fontSize="12" fontWeight="bold">DIA 0 (VENCIMENTO)</text>

                    <line x1="200" y1="0" x2="200" y2="400" stroke="#334155" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
                    <text x="205" y="30" fill="#94a3b8" fontSize="12" fontWeight="bold">DIA -15 (ALERTA TALOS)</text>

                    {/* Área de Perda (O Gap entre as linhas) */}
                    {/* Desenhamos um shape fechado entre a linha verde e vermelha para pintar o meio */}
                    <motion.path
                        d={`M 200 150 C 300 150, 400 120, 800 100 L 800 350 L 500 300 C 450 180, 350 150, 200 150 Z`}
                        fill="url(#gradientLoss)"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    />

                    {/* Linha Comum (Passado) */}
                    <motion.path
                        d={pathCommon}
                        stroke="#94a3b8"
                        strokeWidth="3"
                        fill="transparent"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 0.8, ease: "linear" }}
                    />

                    {/* Linha Tradicional (Vermelha - Queda) */}
                    <motion.path
                        d={pathLegacy}
                        stroke="#ef4444"
                        strokeWidth="3"
                        fill="transparent"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                    />

                    {/* Linha Talos (Verde - Sucesso) */}
                    <motion.path
                        d={pathTalos}
                        stroke="#CEFF05"
                        strokeWidth="4"
                        fill="transparent"
                        filter="url(#glow)"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                    />

                    {/* Ponto de Intervenção (Onde a mágica acontece) */}
                    <motion.circle
                        cx="200"
                        cy="150"
                        r="6"
                        fill="#CEFF05"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.8, type: "spring" }}
                    />

                    {/* Ponto de Falha (Tradicional) */}
                    <motion.circle
                        cx="500"
                        cy="300"
                        r="4"
                        fill="#ef4444"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 1.8 }}
                    />

                </svg>

                {/* Labels Flutuantes (HTML sobre o SVG para melhor acessibilidade e styling) */}

                {/* Label: Solução Talos */}
                <motion.div
                    className="absolute top-[15%] right-[5%] bg-slate-900/90 border border-[#CEFF05]/30 p-3 rounded-lg shadow-xl backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                >
                    <div className="flex items-center gap-2 mb-1">
                        <ShieldCheck className="text-[#CEFF05] h-4 w-4" />
                        <span className="text-[#CEFF05] font-bold text-xs uppercase tracking-wider">Com Talos</span>
                    </div>
                    <div className="text-white font-mono text-lg font-bold">R$ 0 Perdas</div>
                    <div className="text-slate-400 text-xs">Caixa Protegido</div>
                </motion.div>

                {/* Label: Cenário Atual */}
                <motion.div
                    className="absolute bottom-[5%] right-[20%] bg-red-950/80 border border-red-500/30 p-3 rounded-lg shadow-xl backdrop-blur-sm"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2 }}
                >
                    <div className="flex items-center gap-2 mb-1">
                        <AlertTriangle className="text-red-500 h-4 w-4" />
                        <span className="text-red-500 font-bold text-xs uppercase tracking-wider">Sem Proteção</span>
                    </div>
                    <div className="text-white font-mono text-lg font-bold">-R$ 200k</div>
                    <div className="text-red-200/60 text-xs">Inadimplência Realizada</div>
                </motion.div>

                {/* Annotation: Onde o Talos age */}
                <motion.div
                    className="absolute top-[25%] left-[26%] max-w-[150px]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <p className="text-[#CEFF05] text-xs font-bold mb-1">↑ IA identifica o risco aqui</p>
                    <p className="text-slate-400 text-[10px] leading-tight">15 dias antes do vencimento, permitindo ação suave.</p>
                </motion.div>

                {/* Annotation: Onde a equipe age hoje */}
                <motion.div
                    className="absolute bottom-[15%] left-[55%] max-w-[150px]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <p className="text-red-400 text-xs font-bold mb-1">↓ Sua equipe reage aqui</p>
                    <p className="text-slate-500 text-[10px] leading-tight">5 dias após o atraso. O cliente já está incomodado e o caixa impactado.</p>
                </motion.div>

            </div>
        </div>
    )
}
