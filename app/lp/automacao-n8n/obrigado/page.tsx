"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ObrigadoPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white p-4 relative overflow-hidden">

            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(206,255,5,0.1)_0%,transparent_70%)] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-lg relative z-10"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                    className="w-24 h-24 bg-[#CEFF05] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(206,255,5,0.4)]"
                >
                    <CheckCircle2 className="w-12 h-12 text-slate-900" />
                </motion.div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6">Solicitação Recebida!</h1>

                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                    Nossa equipe de automação já recebeu seus dados. Em breve entraremos em contato para agendar seu mapeamento de processos gratuito.
                </p>

                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl mb-8">
                    <p className="text-sm text-slate-300 font-medium">
                        Enquanto isso, prepare-se: pense nos processos mais repetitivos que sua equipe executa hoje. É por lá que vamos começar.
                    </p>
                </div>

                <Link href="/">
                    <Button className="bg-transparent border border-slate-700 text-white hover:bg-white/10 rounded-full px-8 py-6">
                        Voltar para a Home
                    </Button>
                </Link>
            </motion.div>
        </div>
    )
}
