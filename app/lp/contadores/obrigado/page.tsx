"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight, Calendar, FileSpreadsheet } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ObrigadoContadores() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 selection:bg-[#CEFF05] selection:text-slate-950">
            {/* Background */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(206,255,5,0.05)_0%,transparent_60%)]" />

            <motion.div
                className="relative z-10 text-center max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Success Icon */}
                <motion.div
                    className="w-24 h-24 mx-auto mb-8 bg-[#CEFF05]/20 rounded-full flex items-center justify-center border border-[#CEFF05]/50"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                >
                    <CheckCircle2 className="w-12 h-12 text-[#CEFF05]" />
                </motion.div>

                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Solicitação Recebida!
                </h1>

                <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                    Nossa equipe técnica analisará seu perfil e entrará em contato em até <strong className="text-slate-900">24 horas úteis</strong> para agendar seu diagnóstico gratuito.
                </p>

                {/* Next Steps */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-8 text-left">
                    <h3 className="text-sm font-bold uppercase text-[#CEFF05] tracking-wider mb-4">Próximos Passos</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-[#CEFF05]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Calendar className="w-4 h-4 text-slate-900" />
                            </div>
                            <div>
                                <p className="text-slate-900 font-medium">Agendamento de Reunião</p>
                                <p className="text-sm text-slate-500">Um especialista entrará em contato para definir o melhor horário.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-[#CEFF05]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                <FileSpreadsheet className="w-4 h-4 text-slate-900" />
                            </div>
                            <div>
                                <p className="text-slate-900 font-medium">Diagnóstico Personalizado</p>
                                <p className="text-sm text-slate-500">Mapeamento dos processos que podem ser automatizados no seu escritório.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <Link href="/">
                    <Button
                        variant="outline"
                        className="border-slate-200 text-slate-700 hover:bg-slate-50 rounded-full px-6"
                    >
                        Voltar ao Site
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </motion.div>

            {/* Footer */}
            <div className="fixed bottom-6 text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
                    Talos for Accountants &copy; 2026
                </p>
            </div>
        </div>
    )
}
