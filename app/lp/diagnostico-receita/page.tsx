"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    CheckCircle2,
    ShieldAlert,
    UserMinus,
    ArrowRight,
    ShieldCheck,
    Database,
    Activity,
    Lock,
    Loader2,
    Phone,
    Mail,
    Building2,
    User,
    Zap,
    BarChart3
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

// Importe seu schema e action reais aqui
import { contactFormSchema, type ContactFormData } from "@/lib/schemas"
import { submitContactForm } from "@/app/actions/contact"
import { useToast } from "@/hooks/use-toast"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuilding } from "@fortawesome/free-regular-svg-icons"
import FinancialImpactChart from "@/components/FinancialImpactChart"
import HeroRadarAnimation from "@/components/HeroRadarAnimation"

export default function GoogleAdsLandingPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const { toast } = useToast()

    const form = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            empresa: "",
            tamanhoOperacao: undefined,
            dorPrincipal: undefined,
        },
    })

    async function onSubmit(values: ContactFormData) {
        setIsSubmitting(true)
        try {
            // Call the API to send email via Resend
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })

            const result = await response.json()

            if (response.ok && result.success) {
                setIsSuccess(true)
                form.reset() // Reset form on success
                toast({
                    title: "Sucesso!",
                    description: "Sua solicitação foi enviada. Entraremos em contato em breve!",
                })

                // Disparar evento de conversão do Google Ads aqui
                if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'conversion', {
                        'send_to': 'AW-SEU_ID_AQUI/LABEL_CONVERSAO_AQUI'
                    });
                }
            } else {
                toast({
                    title: "Erro",
                    description: result.error || "Tente novamente.",
                    variant: "destructive"
                })
            }
        } catch (error) {
            console.error('Form submission error:', error)
            toast({
                title: "Erro",
                description: "Erro ao enviar formulário. Tente novamente.",
                variant: "destructive"
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const scrollToForm = () => {
        document.getElementById("diagnostico-form")?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className="flex flex-col w-full min-h-screen bg-white selection:bg-[#CEFF05] selection:text-slate-950 font-sans">

            {/* 1. Header Minimalista (Sem navegação de fuga) */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 h-20">
                <div className="container mx-auto px-4 h-full flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        {/* Seu Logo Aqui */}
                        <img src="/TALOS.png" alt="Talos AI" className="h-10 w-auto" />
                        {/* <div className="h-8 w-8 bg-slate-900 rounded-lg flex items-center justify-center text-[#CEFF05] font-black">T</div>
             <span className="text-xl font-bold text-slate-900 tracking-tight">Talos<span className="text-primary">.AI</span></span> */}
                    </div>
                    <Button onClick={scrollToForm} className="bg-[#CEFF05] text-slate-950 hover:bg-[#CEFF05]/90 hover:scale-105 transition-all rounded-full font-bold px-6 shadow-lg shadow-[#CEFF05]/20">
                        Solicitar Diagnóstico
                    </Button>
                </div>
            </header>


            {/* 2. Hero Section: Foco em Dor e Promessa (Layout: Command Center) */}
            <section className="pt-20 pb-20 lg:pt-20 lg:pb-40 relative overflow-hidden bg-slate-50 flex flex-col items-center">

                {/* Background: Gradiente Neural Sutil */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(var(--primary-rgb),0.05)_0%,transparent_60%)] pointer-events-none" />

                {/* --- SATÉLITES FLUTUANTES (Desktop Only) --- */}
                {/* Lógica: Absolute positioning para não afetar o fluxo do texto central */}

                {/* Satélite Esquerdo: O Risco (Storytelling: O Problema) */}
                <motion.div
                    className="hidden lg:block absolute left-[5%] top-[40%] xl:top-[45%] z-20 w-64 p-4 rounded-2xl bg-white/80 border border-red-100 shadow-xl backdrop-blur-md"
                    initial={{ opacity: 0, x: -100, rotate: -10 }}
                    animate={{
                        opacity: 1,
                        x: [0, 5, 0, -5, 0],
                        y: [0, -5, 0, 5, 0],
                        rotate: -3,
                        scale: [1, 1.02, 1, 1.02, 1],
                    }}
                    transition={{
                        opacity: { duration: 0.8, delay: 0.5 },
                        x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                        y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 0.8, delay: 0.5, type: "spring", stiffness: 50 },
                    }}
                >
                    {/* Header do Card */}
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-red-100 rounded-lg text-red-600 shadow-sm">
                            <ShieldAlert className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">Alerta Crítico</p>
                            <p className="text-xs font-bold text-slate-900">Cliente #4922</p>
                        </div>
                    </div>
                    {/* Dado Crítico */}
                    <div className="flex justify-between items-center text-xs bg-red-50 p-2 rounded-lg border border-red-100">
                        <span className="text-slate-600 font-medium">Risco de Churn:</span>
                        <span className="text-red-600 font-black text-sm">94%</span>
                    </div>
                </motion.div>

                {/* Satélite Direito: A Solução (Storytelling: A Resolução) */}
                <motion.div
                    className="hidden lg:block absolute right-[5%] top-[50%] xl:top-[55%] z-20 w-72 p-5 rounded-3xl bg-[#0B0F19]/95 border border-[#CEFF05]/30 shadow-2xl shadow-[#CEFF05]/10 backdrop-blur-md"
                    initial={{ opacity: 0, x: 100, rotate: 10 }}
                    animate={{
                        opacity: 1,
                        x: [0, -6, 0, 6, 0],
                        y: [0, 6, 0, -6, 0],
                        rotate: 3,
                        scale: [1, 1.02, 1, 1.02, 1],
                    }}
                    transition={{
                        opacity: { duration: 0.8, delay: 1.2 },
                        x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
                        y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
                        scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 0.8, delay: 1.2, type: "spring", stiffness: 60 },
                    }}
                >
                    {/* Header do Card */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-[#CEFF05] rounded-full text-slate-900 shadow-[0_0_10px_rgba(206,255,5,0.4)]">
                                <Zap className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-bold uppercase text-[#CEFF05] tracking-widest">Ação Automática</span>
                        </div>
                        {/* Status Indicator */}
                        <div className="flex items-center gap-1.5">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-[10px] font-bold text-green-500">Ativo</span>
                        </div>
                    </div>
                    {/* Dado de Valor */}
                    <div className="space-y-1">
                        <p className="text-xs text-slate-400 font-medium">Receita Retida (Mês):</p>
                        <p className="text-3xl font-mono font-bold text-white tracking-tight">
                            R$ 14.250<span className="text-slate-500 text-lg">,00</span>
                        </p>
                    </div>
                </motion.div>

                {/* Satélite Esquerdo Inferior: Credit Risk (Storytelling: Outro Problema) */}
                <motion.div
                    className="hidden lg:block absolute left-[8%] top-[60%] xl:top-[65%] z-20 w-64 p-4 rounded-2xl bg-white/80 border border-orange-100 shadow-xl backdrop-blur-md"
                    initial={{ opacity: 0, y: 50, rotate: 5 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        rotate: 2,
                    }}
                    transition={{ duration: 0.8, delay: 0.9, type: "spring", stiffness: 50 }}
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                    {/* Header do Card */}
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-orange-100 rounded-lg text-orange-600 shadow-sm">
                            <ShieldAlert className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">Risco de Crédito</p>
                            <p className="text-xs font-bold text-slate-900">Empresa #7834</p>
                        </div>
                    </div>
                    {/* Dado Crítico */}
                    <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-xs bg-orange-50 p-2 rounded-lg border border-orange-100">
                            <span className="text-slate-600 font-medium">Score de Crédito:</span>
                            <span className="text-orange-600 font-black text-sm">320</span>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-slate-500">
                            <span>Prob. Inadimplência:</span>
                            <span className="font-bold text-orange-600">78%</span>
                        </div>
                    </div>
                </motion.div>


                {/* --- CONTEÚDO CENTRAL (Texto & CTA) --- */}
                <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">

                    {/* 1. Badge (Pulsante) */}
                    <motion.div
                        className="inline-flex items-center space-x-2 bg-white border border-slate-200 shadow-sm px-4 py-1.5 rounded-full mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Pare de perder receita hoje</span>
                    </motion.div>

                    {/* 2. Título Principal (H1) */}
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Sua operação está vazando <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Dinheiro Invisível?</span>
                    </motion.h1>

                    {/* 3. Subtítulo (P) */}
                    <motion.p
                        className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Nossa <strong>IA preditiva</strong> identifica <strong>Inadimplência</strong> e <strong>Churn</strong> antes que eles impactem seu caixa.
                        Sem caixas pretas, <strong>focado exclusivamente em ROI.</strong>
                    </motion.p>

                    {/* 4. Botões (CTA) */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Button
                            onClick={scrollToForm}
                            size="lg"
                            className="bg-[#CEFF05] text-slate-950 hover:bg-[#CEFF05]/90 text-lg px-8 py-7 h-auto rounded-full font-bold shadow-xl shadow-[#CEFF05]/20 hover:scale-105 transition-all w-full sm:w-auto"
                        >
                            Simular Economia Agora
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>

                        <div className="flex items-center space-x-2 text-sm text-slate-500 font-medium px-4">
                            <ShieldCheck className="h-4 w-4 text-primary" />
                            <span>Dados 100% Blindados (LGPD)</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. The Visual Problem (Financial Alligator Chart) */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-red-500 mb-3">O Custo da Reação</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Por que esperar o vencimento é um erro caro.</h3>
                    </div>

                    {/* New Financial Impact Chart Component */}
                    <div className="max-w-6xl mx-auto">
                        <FinancialImpactChart />
                    </div>

                    {/* CTA Button - Outside Chart */}
                    <div className="mt-12 flex justify-center">
                        <motion.button
                            onClick={scrollToForm}
                            className="px-8 py-4 text-lg font-bold bg-[#CEFF05] text-slate-900 hover:bg-[#CEFF05]/80 rounded-xl shadow-xl shadow-[#CEFF05]/20 transition-colors"
                            animate={{
                                scale: [1, 1.03, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            Parar de Perder Dinheiro
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* 4. Social Proof & Benchmarks (Argumentos Lógicos) */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <Badge variant="outline" className="border-[#CEFF05] text-[#CEFF05] uppercase tracking-widest">Resultados Comprovados</Badge>
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                Ciência validada em <br />
                                <span className="text-[#CEFF05]">Cenários de Estresse.</span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Nossos modelos não são apenas teóricos. Eles foram estressados em ambientes bancários e operações de SaaS de alto volume.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {[
                                    "Recuperação +15% superior à régua tradicional.",
                                    "Predição de Churn com 60 dias de antecedência.",
                                    "Redução drástica de False Positives na cobrança."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-3">
                                        <CheckCircle2 className="h-5 w-5 text-[#CEFF05]" />
                                        <span className="font-medium text-slate-200">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex items-center gap-6">
                                <div className="h-16 w-16 bg-[#CEFF05] rounded-full flex items-center justify-center text-slate-900">
                                    <Activity className="h-8 w-8" />
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-white">+15%</div>
                                    <div className="text-sm text-slate-400 uppercase tracking-wider font-bold">Recuperação de Crédito</div>
                                </div>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex items-center gap-6">
                                <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center text-white">
                                    <UserMinus className="h-8 w-8" />
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-white">85%</div>
                                    <div className="text-sm text-slate-400 uppercase tracking-wider font-bold">Acurácia de Churn</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Soluções Cards (Grid 2x2 - Motor de Inteligência) */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">O Motor de Inteligência Talos</h2>
                        <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
                            Uma suíte completa para proteger e expandir sua receita recorrente.
                        </p>
                    </div>

                    {/* Grid 2x2 para Desktop, 1 coluna para Mobile */}
                    <div className="grid md:grid-cols-2 gap-4">

                        {/* 1. Inadimplência (Defesa) */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-red-200 transition-colors group">
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <ShieldAlert className="h-5 w-5 text-red-500" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Blindagem de Caixa</h3>
                                    <p className="text-sm text-slate-500">Antecipe inadimplência com <strong>scores de risco</strong> e aja <strong>antes do vencimento</strong>.</p>
                                </div>
                            </div>
                        </div>

                        {/* 2. Churn (Defesa) */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-orange-200 transition-colors group">
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <UserMinus className="h-5 w-5 text-orange-500" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Retenção Inteligente</h3>
                                    <p className="text-sm text-slate-500">Identifique <strong>risco de cancelamento</strong> com <strong>60 dias de antecedência</strong>.</p>
                                </div>
                            </div>
                        </div>

                        {/* 3. Growth (Ataque) - NBO/Pricing */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-[#CEFF05] transition-colors group">
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 bg-[#CEFF05]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <Zap className="h-5 w-5 text-slate-900" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Expansão de Receita</h3>
                                    <p className="text-sm text-slate-500">Sugere <strong>Preço Ideal</strong> de renovação e <strong>Upsell (NBO)</strong> personalizado.</p>
                                </div>
                            </div>
                        </div>

                        {/* 4. Save List (Inteligência) */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors group">
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <BarChart3 className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Priorização por ROI</h3>
                                    <p className="text-sm text-slate-500">Receba a <strong>"Save List"</strong> ordenada por <strong>impacto financeiro real</strong>.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 6. FORMULÁRIO DE CONVERSÃO (O Grande Final) */}
            <section id="diagnostico-form" className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-12 translate-x-32 hidden lg:block" />

                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">

                        {/* Lado Esquerdo: Copy de Venda do Diagnóstico */}
                        <div className="lg:w-2/5 p-12 lg:p-16 text-white relative">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_#CEFF05_0%,transparent_15%)] opacity-20" />
                            <div className="space-y-8 relative z-10">
                                <div>
                                    <h2 className="text-3xl font-bold mb-4">Solicite seu Diagnóstico Técnico</h2>
                                    <p className="text-slate-400 font-light text-lg">
                                        Descubra o potencial oculto de recuperação e expansão de receita da sua operação.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                                            <Lock className="h-5 w-5 text-[#CEFF05]" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">Privacidade Total (NDA)</h4>
                                            <p className="text-xs text-slate-400">Seus dados nunca são compartilhados.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                                            <BarChart3 className="h-5 w-5 text-[#CEFF05]" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">Estimativa de ROI</h4>
                                            <p className="text-xs text-slate-400">Projeção financeira clara ao final.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-10 border-t border-white/10">
                                    <div className="flex items-center gap-4">
                                        {/* Avatares Empilhados para dar sensação de comunidade */}
                                        <div className="flex -space-x-3">
                                            <div className="h-10 w-10 rounded-full ring-2 ring-white/20 bg-gradient-to-br from-blue-500 to-blue-700 grid place-items-center text-white shadow-lg relative z-30">
                                                <FontAwesomeIcon icon={faBuilding} className="h-5 w-5" />
                                            </div>
                                            <div className="h-10 w-10 rounded-full ring-2 ring-white/20 bg-gradient-to-br from-purple-500 to-purple-700 grid place-items-center text-white shadow-lg relative z-20">
                                                <FontAwesomeIcon icon={faBuilding} className="h-5 w-5" />
                                            </div>
                                            <div className="h-10 w-10 rounded-full ring-2 ring-white/20 bg-gradient-to-br from-pink-500 to-pink-700 grid place-items-center text-white shadow-lg relative z-10">
                                                <FontAwesomeIcon icon={faBuilding} className="h-5 w-5" />
                                            </div>
                                        </div>

                                        <div className="flex flex-col">
                                            <p className="text-xs text-slate-300 font-medium">
                                                <span className="text-[#CEFF05] font-bold">3 empresas</span> já enviaram o formulário de diagnóstico hoje.
                                            </p>
                                            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">
                                                Última solicitação: há 14 min
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Lado Direito: O Formulário */}
                        <div className="lg:w-3/5 bg-white p-8 lg:p-16">
                            {isSuccess ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in duration-500">
                                    <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                                        <CheckCircle2 className="h-12 w-12" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">Solicitação Recebida!</h3>
                                    <p className="text-slate-500">Nossa equipe de inteligência entrará em contato em breve para agendar a reunião.</p>
                                    <Button variant="outline" onClick={() => setIsSuccess(false)}>Enviar outro contato</Button>
                                </div>
                            ) : (
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-xs font-bold uppercase text-slate-400">Nome</FormLabel>
                                                        <FormControl><Input placeholder="Seu nome" className="bg-slate-50 border-0" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="phone"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-xs font-bold uppercase text-slate-400">WhatsApp</FormLabel>
                                                        <FormControl><Input placeholder="(00) 00000-0000" className="bg-slate-50 border-0" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-xs font-bold uppercase text-slate-400">E-mail Corporativo</FormLabel>
                                                    <FormControl><Input placeholder="voce@empresa.com" className="bg-slate-50 border-0" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <FormField
                                                control={form.control}
                                                name="empresa"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-xs font-bold uppercase text-slate-400">Empresa</FormLabel>
                                                        <FormControl><Input placeholder="Nome da Empresa" className="bg-slate-50 border-0" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="tamanhoOperacao"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-xs font-bold uppercase text-slate-400">Tamanho (MRR)</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger className="bg-slate-50 border-0">
                                                                    <SelectValue placeholder="Selecione" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="Até R$100 mil">Até R$100 mil</SelectItem>
                                                                <SelectItem value="R$100 mil – R$500 mil">R$100 mil – R$500 mil</SelectItem>
                                                                <SelectItem value="R$500 mil – R$2 milhões">R$500 mil – R$2 milhões</SelectItem>
                                                                <SelectItem value="Acima de R$2 milhões">Acima de R$2 milhões</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="dorPrincipal"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-xs font-bold uppercase text-slate-400 mb-3 block">Maior desafio hoje</FormLabel>
                                                    <FormControl>
                                                        <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-1 gap-3">
                                                            {["Inadimplência / atrasos recorrentes", "Cancelamento de clientes (churn)", "Crescer receita na base atual (LTV / Upsell)"].map((opt) => (
                                                                <FormItem key={opt} className="flex items-center space-x-3 space-y-0 p-3 rounded-lg border border-slate-100 cursor-pointer hover:bg-slate-50 [&:has(:checked)]:border-primary [&:has(:checked)]:bg-primary/5">
                                                                    <FormControl>
                                                                        <RadioGroupItem value={opt} />
                                                                    </FormControl>
                                                                    <FormLabel className="font-normal cursor-pointer w-full text-slate-700 text-sm">{opt}</FormLabel>
                                                                </FormItem>
                                                            ))}
                                                        </RadioGroup>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <Button type="submit" disabled={isSubmitting} className="w-full h-14 text-lg font-bold bg-[#CEFF05] text-slate-900 hover:bg-[#CEFF05]/80 rounded-xl shadow-xl shadow-[#CEFF05]/20 mt-4 transition-all hover:scale-[1.02]">
                                            {isSubmitting ? <Loader2 className="animate-spin" /> : "Parar de Perder Dinheiro"}
                                        </Button>
                                    </form>
                                </Form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Footer Simplificado (Sem links externos) */}
            <footer className="bg-white py-12 border-t border-slate-100 text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
                    Talos Intelligence &copy; 2025
                </p>
            </footer>

        </div>
    )
}
