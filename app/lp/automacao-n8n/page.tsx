"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    CheckCircle2,
    AlertTriangle,
    Clock,
    ArrowRight,
    ShieldCheck,
    Bot,
    Workflow,
    Cpu,
    Database,
    Zap,
    BarChart3,
    Loader2,
    FileSpreadsheet,
    Network,
    MessageSquare,
    Lock
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
import { useIsMobile } from "@/hooks/use-mobile"

import { contactFormSchema, type ContactFormData } from "@/lib/schemas"
import { useToast } from "@/hooks/use-toast"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuilding } from "@fortawesome/free-regular-svg-icons"

import AutomationDashboardShowcase from "@/components/AutomationDashboardShowcase"

import { Suspense } from "react"

export default function AutomationLandingPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <AutomationLandingPageContent />
        </Suspense>
    )
}

function AutomationLandingPageContent() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { toast } = useToast()
    const isMobile = useIsMobile()

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
            const trackingData = {
                utm_source: searchParams.get("utm_source"),
                utm_medium: searchParams.get("utm_medium"),
                utm_campaign: searchParams.get("utm_campaign"),
                oferta_origem: searchParams.get("oferta"),
            }

            const payload = {
                ...values,
                source: "lp-automacao-n8n",
                tracking: trackingData
            }

            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })

            const result = await response.json()

            if (response.ok && result.success) {
                form.reset()
                router.push('/lp/automacao-n8n/obrigado')
                return
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
        document.getElementById("consultoria-form")?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className="flex flex-col w-full min-h-screen bg-white selection:bg-[#CEFF05] selection:text-slate-950 font-sans">

            {/* 1. Header Minimalista */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 h-20">
                <div className="container mx-auto px-4 h-full flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <img src="/TALOS.png" alt="Talos AI" className="h-10 w-auto" />
                    </div>
                    <Button onClick={scrollToForm} className="bg-[#CEFF05] text-slate-950 hover:bg-[#CEFF05]/90 hover:scale-105 transition-all rounded-full font-bold px-6 shadow-lg shadow-[#CEFF05]/20">
                        Agendar Consultoria
                    </Button>
                </div>
            </header>


            {/* 2. Hero Section: Automação vs Manual */}
            <section className="pt-20 pb-20 lg:pt-20 lg:pb-40 relative overflow-hidden bg-slate-50 flex flex-col items-center">

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(var(--primary-rgb),0.05)_0%,transparent_60%)] pointer-events-none" />

                {/* --- SATÉLITES FLUTUANTES (Versão Automação) --- */}
                {!isMobile && (
                    <>
                        {/* Satélite Esquerdo: O Problema (Processo Manual/Erro) */}
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
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-red-100 rounded-lg text-red-600 shadow-sm">
                                    <FileSpreadsheet className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">Gargalo Operacional</p>
                                    <p className="text-xs font-bold text-slate-900">Planilha Financeira_vFinal.xlsx</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center text-xs bg-red-50 p-2 rounded-lg border border-red-100">
                                <span className="text-slate-600 font-medium">Tempo Gasto (Semana):</span>
                                <span className="text-red-600 font-black text-sm">12h 30min</span>
                            </div>
                        </motion.div>

                        {/* Satélite Direito: A Solução (Workflow n8n) */}
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
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="p-1.5 bg-[#CEFF05] rounded-full text-slate-900 shadow-[0_0_10px_rgba(206,255,5,0.4)]">
                                        <Workflow className="w-4 h-4" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase text-[#CEFF05] tracking-widest">n8n Workflow</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    <span className="text-[10px] font-bold text-green-500">Executando</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-slate-400 font-medium">Processos Automatizados:</p>
                                <p className="text-3xl font-mono font-bold text-white tracking-tight">
                                    1.420<span className="text-slate-500 text-lg">/dia</span>
                                </p>
                            </div>
                        </motion.div>

                        {/* Satélite Esquerdo Inferior: Erro de API/Integração */}
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
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-orange-100 rounded-lg text-orange-600 shadow-sm">
                                    <AlertTriangle className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">Falha Humana</p>
                                    <p className="text-xs font-bold text-slate-900">CRM vs ERP</p>
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <div className="flex justify-between items-center text-xs bg-orange-50 p-2 rounded-lg border border-orange-100">
                                    <span className="text-slate-600 font-medium">Dados Incorretos:</span>
                                    <span className="text-orange-600 font-black text-sm">18%</span>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}


                {/* --- CONTEÚDO CENTRAL --- */}
                <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">

                    <motion.div
                        className="inline-flex items-center space-x-2 bg-white border border-slate-200 shadow-sm px-4 py-1.5 rounded-full mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Elimine o trabalho repetitivo</span>
                    </motion.div>

                    <motion.h1
                        className="text-[clamp(2.5rem,8vw,4.5rem)] font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Sua operação está afogada em <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Tarefas Manuais?</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Criamos fluxos inteligentes no <strong>n8n</strong> e <strong>Agentes de IA</strong> que conectam suas ferramentas.
                        Deixe os robôs trabalharem enquanto sua equipe foca na <strong>estratégia.</strong>
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Button
                            onClick={scrollToForm}
                            size="lg"
                            className="bg-[#CEFF05] text-slate-900 hover:bg-[#CEFF05]/90 text-lg px-8 py-6 h-auto min-h-[56px] rounded-full font-bold shadow-xl shadow-[#CEFF05]/20 hover:scale-105 transition-all w-full sm:w-auto"
                        >
                            Automatizar Minha Empresa
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>

                        <div className="flex items-center space-x-2 text-sm text-slate-500 font-medium px-4">
                            <Workflow className="h-4 w-4 text-primary" />
                            <span>Integração com +1000 Apps</span>
                        </div>
                    </motion.div>

                    {/* --- LOGO MARQUEE --- */}
                    <motion.div
                        className="mt-16 w-full max-w-5xl mx-auto overflow-hidden relative"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10" />

                        <div className="flex w-full">
                            <motion.div
                                className="flex gap-16 items-center whitespace-nowrap px-8"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                                style={{ width: "max-content" }}
                            >
                                {[
                                    { name: "Omie", domain: "omie.com.br" },
                                    { name: "Salesforce", domain: "salesforce.com" },
                                    { name: "ContaAzul", domain: "contaazul.com" },
                                    { name: "HubSpot", domain: "hubspot.com" },
                                    { name: "Totvs", domain: "totvs.com" },
                                    { name: "Pipedrive", domain: "pipedrive.com" },
                                    { name: "Bling", domain: "bling.com.br" },
                                    { name: "RD Station", domain: "rdstation.com" },
                                    { name: "Zendesk", domain: "zendesk.com" },
                                    { name: "Slack", domain: "slack.com" },
                                    { name: "Asana", domain: "asana.com" },
                                    { name: "Google", domain: "google.com" },
                                    // Duplicate for infinite loop
                                    { name: "Omie", domain: "omie.com.br" },
                                    { name: "Salesforce", domain: "salesforce.com" },
                                    { name: "ContaAzul", domain: "contaazul.com" },
                                    { name: "HubSpot", domain: "hubspot.com" },
                                    { name: "Totvs", domain: "totvs.com" },
                                    { name: "Pipedrive", domain: "pipedrive.com" },
                                    { name: "Bling", domain: "bling.com.br" },
                                    { name: "RD Station", domain: "rdstation.com" },
                                    { name: "Zendesk", domain: "zendesk.com" },
                                    { name: "Slack", domain: "slack.com" },
                                    { name: "Asana", domain: "asana.com" },
                                    { name: "Google", domain: "google.com" },
                                ].map((tool, index) => (
                                    <div key={index} className="flex flex-row items-center gap-4 px-6 py-3 rounded-xl bg-white/60 border border-slate-100 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 cursor-pointer group whitespace-nowrap min-w-max">
                                        <img
                                            src={`https://unavatar.io/${tool.domain}?fallback=${`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=128`}`}
                                            alt={`${tool.name} logo`}
                                            className="h-6 w-6 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 shrink-0"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />
                                        <span className="text-sm font-bold text-slate-500 group-hover:text-slate-900 transition-colors">{tool.name}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. The Problem Section */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-red-500 mb-3">O Custo do &quot;Copiar e Colar&quot;</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Por que escalar com pessoas é caro e lento.</h3>
                    </div>

                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                            <Clock className="w-12 h-12 mx-auto text-slate-400 mb-4" />
                            <h4 className="text-4xl font-black text-slate-900 mb-2">32%</h4>
                            <p className="text-sm text-slate-500">Do tempo da equipe é gasto em coleta de dados manual.</p>
                        </div>
                        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 bg-red-100 rounded-bl-xl">
                                <AlertTriangle className="w-4 h-4 text-red-500" />
                            </div>
                            <FileSpreadsheet className="w-12 h-12 mx-auto text-red-400 mb-4" />
                            <h4 className="text-4xl font-black text-slate-900 mb-2">3/10</h4>
                            <p className="text-sm text-slate-500">Planilhas complexas contêm erros críticos de fórmula ou digitação.</p>
                        </div>
                        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                            <Zap className="w-12 h-12 mx-auto text-[#CEFF05] fill-slate-900 mb-4" />
                            <h4 className="text-4xl font-black text-slate-900 mb-2">24/7</h4>
                            <p className="text-sm text-slate-500">É o tempo que sua operação <strong>deveria</strong> estar rodando.</p>
                        </div>
                    </div>

                    {/* --- ROI CALCULATOR --- */}
                    <div className="mt-20 max-w-3xl mx-auto">
                        <ROICalculator />
                    </div>

                    <div className="mt-12 flex justify-center">
                        <motion.button
                            onClick={scrollToForm}
                            className="px-8 py-4 text-lg font-bold bg-[#CEFF05] text-slate-900 hover:bg-[#CEFF05]/80 rounded-xl shadow-xl shadow-[#CEFF05]/20 transition-colors"
                            whileHover={{ scale: 1.05 }}
                        >
                            Eliminar Gargalos Agora
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* 4. Social Proof & Benchmarks (Dark Mode) */}
            <section className="py-16 md:py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start md:items-center">
                        <div className="space-y-6">
                            <Badge variant="outline" className="border-[#CEFF05] text-[#CEFF05] uppercase tracking-widest">Tecnologia Validada</Badge>
                            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight">
                                Orquestração de dados <br />
                                <span className="text-[#CEFF05]">Sem Limites.</span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Utilizamos n8n em infraestrutura proprietária para garantir segurança, velocidade e capacidade de processamento massivo.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {[
                                    "Integração nativa com ERPs e CRMs.",
                                    "Agentes de IA (OpenAI/Anthropic) nos fluxos.",
                                    "Logs detalhados e tratamento de erros automático."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-3">
                                        <CheckCircle2 className="h-5 w-5 text-[#CEFF05]" />
                                        <span className="font-medium text-slate-200">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl flex items-center gap-6">
                                <div className="h-16 w-16 bg-[#CEFF05] rounded-full flex items-center justify-center text-slate-900 shrink-0">
                                    <Cpu className="h-8 w-8" />
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-white">+50k</div>
                                    <div className="text-sm text-slate-400 uppercase tracking-wider font-bold">Execuções Diárias</div>
                                </div>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl flex items-center gap-6">
                                <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0">
                                    <ShieldCheck className="h-8 w-8" />
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-white">0%</div>
                                    <div className="text-sm text-slate-400 uppercase tracking-wider font-bold">Perda de Dados</div>
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
                        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-slate-900">O Motor de Automação Talos</h2>
                        <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
                            Transformamos processos caóticos em fluxos lineares e automáticos.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">

                        {/* 1. Comercial */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors group">
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <Database className="h-5 w-5 text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">CRM Autopilot</h3>
                                    <p className="text-sm text-slate-500">Enriquecimento de leads automático, distribuição para vendedores e <strong>follow-up no WhatsApp</strong> sem intervenção humana.</p>
                                </div>
                            </div>
                        </div>

                        {/* 2. Financeiro */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-green-200 transition-colors group">
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <BarChart3 className="h-5 w-5 text-green-500" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Financeiro Blindado</h3>
                                    <p className="text-sm text-slate-500">Emissão de NFS-e, conciliação bancária automática e <strong>alertas de inadimplência</strong> direto no Slack/Teams.</p>
                                </div>
                            </div>
                        </div>

                        {/* 3. IA Agents */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-[#CEFF05] transition-colors group">
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 bg-[#CEFF05]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <Bot className="h-5 w-5 text-slate-900" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Agentes de IA</h3>
                                    <p className="text-sm text-slate-500">Triagem de e-mails, suporte L1 automático e <strong>análise de sentimentos</strong> em conversas com clientes.</p>
                                </div>
                            </div>
                        </div>

                        {/* 4. Conectividade */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-purple-200 transition-colors group">
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <Network className="h-5 w-5 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">API Gateway</h3>
                                    <p className="text-sm text-slate-500">Conectamos seu <strong>sistema legado</strong> (ERP antigo, banco de dados local) com ferramentas modernas na nuvem.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Showcase Visual - Reutilizando ou adaptando */}
            <AutomationDashboardShowcase />

            {/* 6. FORMULÁRIO DE CONVERSÃO */}
            <section id="consultoria-form" className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-12 translate-x-32 hidden lg:block" />

                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">

                        {/* Lado Esquerdo: Copy de Venda */}
                        <div className="lg:w-2/5 p-12 lg:p-16 text-white relative">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_#CEFF05_0%,transparent_15%)] opacity-20" />
                            <div className="space-y-8 relative z-10">
                                <div>
                                    <h2 className="text-3xl font-bold mb-4">Mapeamento de Processos Gratuito</h2>
                                    <p className="text-slate-400 font-light text-lg">
                                        Descubra quais processos da sua empresa podem ser automatizados hoje e quanto você vai economizar.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                                            <Workflow className="h-5 w-5 text-[#CEFF05]" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">Desenho do Fluxo</h4>
                                            <p className="text-xs text-slate-400">Entregamos um desenho técnico da solução.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                                            <Bot className="h-5 w-5 text-[#CEFF05]" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">IA Feasibility</h4>
                                            <p className="text-xs text-slate-400">Análise de viabilidade para uso de IA.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Proof / FOMO */}
                                <div className="pt-8 border-t border-white/10 mt-8">
                                    <div className="flex items-center gap-4">
                                        <div className="flex -space-x-4">
                                            <div className="h-10 w-10 rounded-full bg-blue-500 border-2 border-slate-900 flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faBuilding} className="h-4 w-4" />
                                            </div>
                                            <div className="h-10 w-10 rounded-full bg-purple-500 border-2 border-slate-900 flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faBuilding} className="h-4 w-4" />
                                            </div>
                                            <div className="h-10 w-10 rounded-full bg-pink-500 border-2 border-slate-900 flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faBuilding} className="h-4 w-4" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">
                                                <span className="text-[#CEFF05] font-bold">3 empresas</span> já enviaram o formulário de diagnóstico hoje.
                                            </p>
                                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-1">
                                                Última solicitação: Há 14 min
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Lado Direito: O Formulário */}
                        <div className="lg:w-3/5 bg-white p-8 lg:p-16">
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
                                                    <FormLabel className="text-xs font-bold uppercase text-slate-400">Receita Mensal (MRR)</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger className="bg-slate-50 border-0">
                                                                <SelectValue placeholder="Selecione" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="Até R$100 mil">Até R$100 mil</SelectItem>
                                                            <SelectItem value="R$100 mil – R$500 mil">R$100 mil – R$500 mil</SelectItem>
                                                            <SelectItem value="Acima de R$500 mil">Acima de R$500 mil</SelectItem>
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
                                                <FormLabel className="text-xs font-bold uppercase text-slate-400 mb-3 block">O que você quer automatizar?</FormLabel>
                                                <FormControl>
                                                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-1 gap-3">
                                                        {[
                                                            "Processos Financeiros (Boletos/Notas)",
                                                            "Processos Comerciais (CRM/Leads)",
                                                            "Integração de Sistemas (API/Banco)",
                                                            "Agentes de IA / Atendimento"
                                                        ].map((opt) => (
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
                                        {isSubmitting ? <Loader2 className="animate-spin" /> : "Solicitar Mapeamento Gratuito"}
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-white py-12 border-t border-slate-100 text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
                    Talos Automation &copy; 2025
                </p>
            </footer>

        </div>
    )
}

function ROICalculator() {
    const [hours, setHours] = useState(2)
    const [rate, setRate] = useState(50)

    // Calculo: Horas * Custo * 252 dias úteis (aprox)
    const yearlyLoss = hours * rate * 252

    return (
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-800 relative overflow-hidden text-center md:text-left">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#CEFF05] blur-[100px] opacity-10 pointer-events-none" />

            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-8">
                    <div>
                        <h4 className="text-2xl font-bold text-white mb-2">Calculadora de Desperdício</h4>
                        <p className="text-slate-400 text-sm">Descubra quanto sua empresa perde por ano com tarefas manuais.</p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label className="text-xs font-bold uppercase text-[#CEFF05] tracking-widest">Horas Manuais / Dia</label>
                                <span className="text-white font-mono font-bold">{hours}h</span>
                            </div>
                            <input
                                type="range"
                                min="1" max="24" step="1"
                                value={hours}
                                onChange={(e) => setHours(Number(e.target.value))}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#CEFF05]"
                            />
                            <p className="text-xs text-slate-500">Tempo total da equipe gasto em tarefas repetitivas.</p>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label className="text-xs font-bold uppercase text-[#CEFF05] tracking-widest">Custo Médio / Hora</label>
                                <span className="text-white font-mono font-bold">R$ {rate}</span>
                            </div>
                            <input
                                type="range"
                                min="20" max="200" step="5"
                                value={rate}
                                onChange={(e) => setRate(Number(e.target.value))}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#CEFF05]"
                            />
                            <p className="text-xs text-slate-500">Salário médio + encargos da equipe envolvida.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/5 flex flex-col items-center justify-center text-center space-y-2">
                    <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Você perde aproximadamente</span>
                    <div className="text-5xl md:text-6xl font-black text-red-500 tracking-tighter">
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(yearlyLoss)}
                    </div>
                    <span className="text-slate-500 text-sm">por ano em produtividade.</span>

                    <div className="pt-6 w-full">
                        <div className="h-px w-full bg-white/10 mb-6" />
                        <p className="text-white/80 text-sm leading-relaxed">
                            Com <strong className="text-[#CEFF05]">Talos Automation</strong>, você recupera esse capital e reinveste em crescimento.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
