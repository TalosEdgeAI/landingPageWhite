"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Calendar, ArrowRight, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ThankYouPage() {
    // Disparar evento de conversão do Google Ads quando a página carrega
    useEffect(() => {
        // Google Ads Conversion Tracking
        // NOTA: Substitua 'LABEL_CONVERSAO' pelo rótulo de conversão do Google Ads
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'conversion', {
                'send_to': 'AW-17848976773/LABEL_CONVERSAO'
            });
        }

        // Meta Pixel Conversion Tracking
        if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'Lead');
        }

        // Google Analytics Event
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'generate_lead', {
                'event_category': 'engagement',
                'event_label': 'diagnostico_receita_form'
            });
        }
    }, []);

    return (
        <div className="flex flex-col w-full min-h-screen bg-white selection:bg-[#CEFF05] selection:text-slate-950 font-sans">

            {/* Header Minimalista */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 h-20">
                <div className="container mx-auto px-4 h-full flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <img src="/TALOS.png" alt="Talos AI" className="h-10 w-auto" />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center pt-20 pb-12 px-4">
                <div className="max-w-2xl w-full text-center">

                    {/* Success Animation */}
                    <motion.div
                        className="mb-8"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                    >
                        <div className="h-32 w-32 bg-gradient-to-br from-[#CEFF05] to-[#9ECC00] rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-[#CEFF05]/30">
                            <CheckCircle2 className="h-16 w-16 text-slate-900" />
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Solicitação Enviada!
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="text-xl text-slate-600 mb-8 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Obrigado por seu interesse! Nossa equipe de inteligência <br className="hidden md:block" />
                        entrará em contato em <strong>até 24 horas úteis</strong>.
                    </motion.p>

                    {/* Next Steps Card */}
                    <motion.div
                        className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center justify-center gap-2">
                            <Calendar className="h-5 w-5 text-primary" />
                            Próximos Passos
                        </h2>

                        <div className="space-y-4 text-left max-w-md mx-auto">
                            {[
                                { step: 1, text: "Você receberá um email de confirmação" },
                                { step: 2, text: "Nossa equipe analisará seu perfil de operação" },
                                { step: 3, text: "Agendaremos uma reunião de diagnóstico técnico" },
                                { step: 4, text: "Apresentaremos uma projeção de ROI personalizada" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                                        {item.step}
                                    </div>
                                    <span className="text-slate-700">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="text-sm text-slate-500 space-y-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <p className="font-medium text-slate-700">Precisa falar conosco antes?</p>
                        <div className="flex items-center justify-center gap-6 text-slate-600">
                            <a href="mailto:talos.contato@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                                <Mail className="h-4 w-4" />
                                talos.contato@gmail.com
                            </a>
                        </div>
                    </motion.div>

                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white py-8 border-t border-slate-100 text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
                    Talos Intelligence &copy; 2025
                </p>
            </footer>

        </div>
    )
}
