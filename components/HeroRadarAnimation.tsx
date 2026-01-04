"use client"

import { motion } from "framer-motion"
import { AlertTriangle, TrendingUp, CheckCircle2 } from "lucide-react"

export default function HeroRadarAnimation() {
    return (
        <div className="relative w-full h-[450px] flex items-center justify-center perspective-1000">

            {/* 1. Elementos de Fundo (Contexto Abstrato) */}
            {/* Um glow suave para dar contraste aos vidros */}
            <div className="absolute w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[80px] animate-pulse" />

            {/* 2. CARD 1: O PROBLEMA (Fica atrás/embaixo) */}
            <motion.div
                className="absolute z-10 w-72 p-5 rounded-3xl border border-white/40 shadow-xl backdrop-blur-md bg-white/60"
                initial={{ opacity: 0, y: 100, rotate: -5 }}
                animate={{
                    opacity: 1,
                    y: -20, // Sobe um pouco para dar espaço ao próximo
                    rotate: -6, // Leve inclinação para estilo
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.2
                }}
                // Animação contínua de flutuação
                whileHover={{ scale: 1.02 }}
            >
                {/* Cabeçalho do Card */}
                <div className="flex items-center justify-between mb-3 opacity-80">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-red-100 rounded-full text-red-600">
                            <AlertTriangle className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">Risco Detectado</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">há 2m</span>
                </div>

                {/* Conteúdo */}
                <div className="space-y-1">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-slate-800">Indústria XYZ</span>
                        <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full border border-red-100">Crítico</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-slate-900">94%</span>
                        <span className="text-xs text-slate-500">Prob. Inadimplência</span>
                    </div>
                </div>
            </motion.div>


            {/* 3. CARD 2: A SOLUÇÃO (Fica na frente, sobrepondo) */}
            <motion.div
                className="absolute z-20 w-80 p-6 rounded-3xl border border-white/60 shadow-2xl backdrop-blur-lg bg-white/80"
                // Começa invisível e maior
                initial={{ opacity: 0, y: 120, scale: 0.9, rotate: 5 }}
                // Anima para a posição final
                animate={{
                    opacity: 1,
                    y: 40, // Fica mais abaixo que o primeiro
                    scale: 1,
                    rotate: 3 // Inclinação oposta para criar dinamismo visual
                }}
                transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 15,
                    delay: 1.2 // DELAY IMPORTANTE: Espera o usuário processar o erro
                }}
            >
                {/* Efeito de "Scan" passando pelo card (Opcional, mas muito premium) */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                    <motion.div
                        className="w-full h-[10px] bg-gradient-to-r from-transparent via-[#CEFF05]/50 to-transparent blur-md"
                        animate={{ top: ['-10%', '150%'] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
                    />
                </div>

                {/* Cabeçalho */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-[#CEFF05] rounded-full text-slate-900 shadow-sm">
                            <TrendingUp className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">Receita Salva</span>
                    </div>
                    <div className="flex gap-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] text-green-600 font-bold">Ativo</span>
                    </div>
                </div>

                {/* Conteúdo Principal */}
                <div className="mb-4">
                    <p className="text-xs text-slate-500 mb-1">Valor Recuperado (Estimado)</p>
                    <p className="text-3xl font-black text-slate-900 tracking-tight">R$ 14.250<span className="text-slate-400 text-lg">,00</span></p>
                </div>

                {/* Ação Realizada (Footer do Card) */}
                <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="bg-green-100 text-green-700 p-1 rounded-full">
                        <CheckCircle2 className="w-3 h-3" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-700 uppercase">Automação:</span>
                        <span className="text-xs text-slate-500 leading-none">Oferta de retenção enviada.</span>
                    </div>
                </div>
            </motion.div>

        </div>
    )
}
