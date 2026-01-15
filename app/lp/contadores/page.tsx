"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
    CheckCircle2,
    ArrowRight,
    ShieldCheck,
    Bot,
    Zap,
    BarChart3,
    Loader2,
    FileSpreadsheet,
    Mail,
    Plug,
    Eye,
    MessageSquare,
    FolderOpen,
    LineChart,
    AlertTriangle,
    Users,
    Clock,
    Terminal,
    ArrowDown,
    Lock,
    Server,
    Cloud,
    KeyRound,
    FileCheck,
    Rocket,
    Play,
    Check,
    X
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
import { useIsMobile } from "@/hooks/use-mobile"
import { useToast } from "@/hooks/use-toast"
import { Suspense } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuilding } from "@fortawesome/free-regular-svg-icons"

// Schema específico para contadores
const accountantFormSchema = z.object({
    name: z.string().min(2, { message: "Nome é obrigatório" }),
    email: z.string().email({ message: "E-mail inválido" }),
    phone: z.string().min(10, { message: "Telefone inválido" }).optional(),
    empresa: z.string().min(2, { message: "Nome do escritório é obrigatório" }),
    cnpjsCarteira: z.enum(["<50", "50-200", "200+"], {
        required_error: "Selecione a quantidade de CNPJs",
    }),
    softwareContabil: z.string().min(2, { message: "Informe o software utilizado" }),
})

type AccountantFormData = z.infer<typeof accountantFormSchema>

export default function ContadoresLandingPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center text-slate-900">Carregando...</div>}>
            <ContadoresLandingPageContent />
        </Suspense>
    )
}

function ContadoresLandingPageContent() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { toast } = useToast()
    const isMobile = useIsMobile()

    const form = useForm<AccountantFormData>({
        resolver: zodResolver(accountantFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            empresa: "",
            cnpjsCarteira: undefined,
            softwareContabil: "",
        },
    })

    async function onSubmit(values: AccountantFormData) {
        setIsSubmitting(true)
        try {
            const trackingData = {
                utm_source: searchParams.get("utm_source"),
                utm_medium: searchParams.get("utm_medium"),
                utm_campaign: searchParams.get("utm_campaign"),
            }

            const payload = {
                ...values,
                source: "lp-contadores",
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
                router.push('/lp/contadores/obrigado')
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
        document.getElementById("form-contadores")?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className="flex flex-col w-full min-h-screen bg-white selection:bg-[#CEFF05] selection:text-slate-950 font-sans">

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 h-20">
                <div className="container mx-auto px-4 h-full flex items-center justify-between max-w-7xl">
                    <div className="flex items-center space-x-2">
                        <img src="/TALOS.png" alt="Talos AI" className="h-10 w-auto" />
                    </div>
                    <Button
                        onClick={scrollToForm}
                        className="bg-[#CEFF05] text-slate-950 hover:bg-[#CEFF05]/90 hover:scale-105 transition-all rounded-full font-bold px-6 shadow-lg shadow-[#CEFF05]/20"
                    >
                        Agendar Diagnóstico
                    </Button>
                </div>
            </header>

            {/* 1. HERO SECTION */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden bg-slate-50">
                {/* Background glow effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(var(--primary-rgb),0.05)_0%,transparent_60%)] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left: Content */}
                        <div className="text-center lg:text-left">
                            <motion.div
                                className="inline-flex items-center space-x-2 bg-white border border-slate-200 shadow-sm px-4 py-1.5 rounded-full mb-6"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Para Escritórios de Contabilidade</span>
                            </motion.div>

                            <motion.h1
                                className="text-[clamp(2rem,6vw,3.5rem)] font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Transforme seu Escritório em uma{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                                    Fintech de Contabilidade.
                                </span>
                            </motion.h1>

                            <motion.p
                                className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Elimine a digitação manual, blinde sua operação contra multas e venda consultoria financeira de alto valor.
                                <strong className="text-slate-900"> Tecnologia Talos adaptada para a realidade contábil.</strong>
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <Button
                                    onClick={scrollToForm}
                                    size="lg"
                                    className="bg-[#CEFF05] text-slate-900 hover:bg-[#CEFF05]/90 text-lg px-8 py-6 h-auto min-h-[56px] rounded-full font-bold shadow-xl shadow-[#CEFF05]/20 hover:scale-105 transition-all w-full sm:w-auto"
                                >
                                    Agendar Diagnóstico do Escritório
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </motion.div>
                        </div>

                        {/* Right: Animated Visual */}
                        <motion.div
                            className="relative hidden lg:flex items-center justify-center"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <FunnelAnimation />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. A DOR SECTION */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-red-500 mb-3">O Problema</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Sua operação é uma fábrica de dados com <span className="text-red-500">máquinas quebradas.</span>
                        </h3>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Seus analistas gastam 40% do tempo baixando notas e cobrando extratos.
                            A Talos assume o "trabalho de robô" para sua equipe fazer o trabalho de contador.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center">
                            <Clock className="w-10 h-10 mx-auto text-slate-400 mb-4" />
                            <h3 className="text-4xl font-black text-slate-900 mb-2">40%</h3>
                            <p className="text-sm text-slate-500">Do tempo gasto em coleta manual de dados</p>
                        </div>
                        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 bg-red-100 rounded-bl-xl">
                                <AlertTriangle className="w-4 h-4 text-red-500" />
                            </div>
                            <FileSpreadsheet className="w-10 h-10 mx-auto text-red-400 mb-4" />
                            <h3 className="text-4xl font-black text-slate-900 mb-2">R$500</h3>
                            <p className="text-sm text-slate-500">Custo médio de uma multa por atraso de CND</p>
                        </div>
                        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center">
                            <Zap className="w-10 h-10 mx-auto text-[#CEFF05] fill-slate-900 mb-4" />
                            <h3 className="text-4xl font-black text-slate-900 mb-2">3x</h3>
                            <p className="text-sm text-slate-500">Mais clientes atendidos com a mesma equipe</p>
                        </div>
                    </div>

                    {/* Cost Calculator */}
                    <DigitacaoCalculator />
                </div>
            </section>

            {/* 3. PRODUTO 1 - ESTEIRA FISCAL BLINDADA */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="border-primary text-primary uppercase tracking-widest mb-4">
                            Saneamento de Dados
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Esteira Fiscal <span className="text-primary">Blindada</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Card 1: Robô de CNDs */}
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-[#CEFF05] transition-all group"
                            whileHover={{ y: -5 }}
                        >
                            <div className="h-14 w-14 bg-[#CEFF05]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#CEFF05]/30 transition-colors">
                                <Eye className="h-7 w-7 text-slate-900" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Robô de CNDs</h3>
                            <p className="text-slate-500 text-sm mb-4">
                                Monitoramento 24/7 de CNDs Federais, Estaduais e Municipais. Bypass de Captchas e alerta crítico no Slack antes do cliente descobrir a dívida.
                            </p>
                            <Badge className="bg-slate-100 text-slate-700 text-xs font-mono">
                                Puppeteer Anti-Captcha
                            </Badge>
                        </motion.div>

                        {/* Card 2: Coleta de Extratos */}
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-all group"
                            whileHover={{ y: -5 }}
                        >
                            <div className="h-14 w-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                                <Plug className="h-7 w-7 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Coleta de Extratos</h3>
                            <p className="text-slate-500 text-sm mb-4">
                                Adeus "manda o OFX". Integração direta via API (Pluggy/Belvo) e scraping seguro. Dados normalizados direto no seu ERP.
                            </p>
                            <Badge className="bg-blue-50 text-blue-600 text-xs font-mono">
                                Open Finance API
                            </Badge>
                        </motion.div>

                        {/* Card 3: Triagem de E-mail */}
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-purple-200 transition-all group"
                            whileHover={{ y: -5 }}
                        >
                            <div className="h-14 w-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                                <Mail className="h-7 w-7 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Triagem de E-mail</h3>
                            <p className="text-slate-500 text-sm mb-4">
                                IA que lê a caixa 'fiscal@', faz OCR nos anexos, classifica e salva na pasta correta do servidor. Zero intervenção humana.
                            </p>
                            <Badge className="bg-purple-50 text-purple-600 text-xs font-mono">
                                AI Agent + OCR
                            </Badge>
                        </motion.div>
                    </div>

                    {/* Terminal CND Monitor */}
                    <div className="mt-16">
                        <CNDTerminalMonitor />
                    </div>
                </div>
            </section>

            {/* 4. COMPATIBILIDADE - "Não mexemos no seu Dinossauro" */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="border-green-500 text-green-600 uppercase tracking-widest mb-4">
                            Compatibilidade
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Seu ERP é local? <span className="text-primary">Sem problemas.</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Não exigimos que você troque de sistema nem migre para a nuvem. Instalamos o <strong className="text-slate-900">Talos Agent</strong> no seu servidor local (Windows/Linux) que cria um túnel seguro para nossos robôs operarem seu sistema desktop como se fosse um humano clicando.
                        </p>
                    </div>

                    {/* Hybrid Connection Visual */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                        {/* Left: Local Server */}
                        <motion.div
                            className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 text-center w-full md:w-64"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="h-16 w-16 mx-auto bg-slate-200 rounded-2xl flex items-center justify-center mb-4">
                                <Server className="h-8 w-8 text-slate-600" />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-1">Seu Servidor Local</h4>
                            <p className="text-xs text-slate-500">Windows Server / Linux</p>
                            <div className="mt-4 flex flex-wrap gap-2 justify-center">
                                <Badge className="bg-slate-200 text-slate-600 text-[10px]">Domínio</Badge>
                                <Badge className="bg-slate-200 text-slate-600 text-[10px]">Alterdata</Badge>
                            </div>
                        </motion.div>

                        {/* Middle: Secure Tunnel */}
                        <motion.div
                            className="flex flex-col items-center py-4"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="hidden md:flex items-center gap-2">
                                <div className="w-16 h-0.5 bg-gradient-to-r from-slate-300 to-green-400"></div>
                                <motion.div
                                    className="h-20 w-20 bg-green-100 border-2 border-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-400/20"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Lock className="h-8 w-8 text-green-600" />
                                </motion.div>
                                <div className="w-16 h-0.5 bg-gradient-to-r from-green-400 to-[#CEFF05]"></div>
                            </div>
                            <div className="md:hidden flex flex-col items-center gap-2">
                                <div className="w-0.5 h-8 bg-gradient-to-b from-slate-300 to-green-400"></div>
                                <motion.div
                                    className="h-16 w-16 bg-green-100 border-2 border-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-400/20"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Lock className="h-6 w-6 text-green-600" />
                                </motion.div>
                                <div className="w-0.5 h-8 bg-gradient-to-b from-green-400 to-[#CEFF05]"></div>
                            </div>
                            <p className="text-xs font-bold text-green-600 mt-2 uppercase tracking-wider">Talos Secure Tunnel</p>
                            <p className="text-[10px] text-slate-400 mt-1">Criptografia AES-256</p>
                        </motion.div>

                        {/* Right: Talos Cloud */}
                        <motion.div
                            className="bg-slate-900 border border-slate-700 rounded-2xl p-6 md:p-8 text-center w-full md:w-64"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="h-16 w-16 mx-auto bg-[#CEFF05]/20 rounded-2xl flex items-center justify-center mb-4">
                                <Cloud className="h-8 w-8 text-[#CEFF05]" />
                            </div>
                            <h4 className="font-bold text-white mb-1">Nuvem Talos</h4>
                            <p className="text-xs text-slate-400">Robôs RPA + IA Agents</p>
                            <div className="mt-4 flex flex-wrap gap-2 justify-center">
                                <Badge className="bg-[#CEFF05]/20 text-[#CEFF05] text-[10px]">24/7</Badge>
                                <Badge className="bg-[#CEFF05]/20 text-[#CEFF05] text-[10px]">Auto-Scale</Badge>
                            </div>
                        </motion.div>
                    </div>

                    <p className="text-center text-sm text-slate-500 mt-8 max-w-xl mx-auto">
                        <strong className="text-slate-700">90% dos escritórios usam sistemas Desktop.</strong> Nós sabemos que você não pode parar para "migrar para a nuvem". O Talos Agent resolve isso.
                    </p>
                </div>
            </section>

            {/* 5. COMPARATIVO FINANCEIRO - "Talos vs. Assistente" */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="border-amber-500 text-amber-600 uppercase tracking-widest mb-4">
                            Comparativo Financeiro
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            O Custo Real da <span className="text-amber-500">Operação Manual</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Compare o custo da automação com a alternativa real: contratar mais um funcionário.
                        </p>
                    </div>

                    {/* Comparison Table */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Column 1: Assistente Fiscal Jr */}
                        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                            <div className="bg-slate-100 p-6 text-center border-b border-slate-200">
                                <div className="h-14 w-14 mx-auto bg-slate-200 rounded-full flex items-center justify-center mb-3">
                                    <Users className="h-7 w-7 text-slate-500" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Assistente Fiscal Jr.</h3>
                                <p className="text-3xl font-black text-slate-700 mt-2">R$ 3.800<span className="text-sm font-normal text-slate-400">/mês</span></p>
                                <p className="text-xs text-slate-400 mt-1">Salário + Encargos (CLT)</p>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="flex items-center gap-3">
                                    <X className="h-5 w-5 text-red-400 flex-shrink-0" />
                                    <span className="text-sm text-slate-600">Trabalha 8h/dia (seg-sex)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <X className="h-5 w-5 text-red-400 flex-shrink-0" />
                                    <span className="text-sm text-slate-600">Comete erros por cansaço/distração</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <X className="h-5 w-5 text-red-400 flex-shrink-0" />
                                    <span className="text-sm text-slate-600">Fica doente, tira férias, 13º salário</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <AlertTriangle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                                    <span className="text-sm text-slate-600">Passivo Trabalhista</span>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Talos Automation */}
                        <div className="bg-slate-900 rounded-2xl border border-[#CEFF05]/30 overflow-hidden shadow-xl relative">
                            <div className="absolute top-4 right-4">
                                <Badge className="bg-[#CEFF05] text-slate-900 text-[10px] font-bold">RECOMENDADO</Badge>
                            </div>
                            <div className="bg-slate-800 p-6 text-center border-b border-slate-700">
                                <div className="h-14 w-14 mx-auto bg-[#CEFF05]/20 rounded-full flex items-center justify-center mb-3">
                                    <Zap className="h-7 w-7 text-[#CEFF05]" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Talos Automation</h3>
                                <p className="text-3xl font-black text-[#CEFF05] mt-2">A partir de R$ 997<span className="text-sm font-normal text-slate-400">/mês</span></p>
                                <p className="text-xs text-slate-400 mt-1">Custo Fixo para até 50 CNPJs</p>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="flex items-center gap-3">
                                    <Check className="h-5 w-5 text-[#CEFF05] flex-shrink-0" />
                                    <span className="text-sm text-slate-300">Trabalha <strong className="text-white">24h/dia (seg-dom)</strong></span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="h-5 w-5 text-[#CEFF05] flex-shrink-0" />
                                    <span className="text-sm text-slate-300"><strong className="text-white">Zero erros</strong> de digitação</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="h-5 w-5 text-[#CEFF05] flex-shrink-0" />
                                    <span className="text-sm text-slate-300">Disponibilidade <strong className="text-white">99.9%</strong></span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="h-5 w-5 text-[#CEFF05] flex-shrink-0" />
                                    <span className="text-sm text-slate-300">Custo <strong className="text-white">100% Dedutível</strong> (Despesa)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hook */}
                    <div className="mt-12 text-center bg-[#CEFF05]/10 border border-[#CEFF05]/30 rounded-2xl p-6 md:p-8">
                        <p className="text-lg md:text-xl font-bold text-slate-900">
                            "Pare de contratar pessoas para fazer <span className="text-red-500 line-through">trabalho de robô</span>.
                        </p>
                        <p className="text-lg md:text-xl font-bold text-slate-900 mt-1">
                            Contrate pessoas para <span className="text-primary">pensar</span>, e a Talos para <span className="text-primary">operar</span>."
                        </p>
                    </div>
                </div>
            </section>

            {/* 6. PRODUTO 2 - ONBOARDING & ATENDIMENTO */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text */}
                        <div>
                            <Badge variant="outline" className="border-primary text-primary uppercase tracking-widest mb-4">
                                Experiência do Cliente
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Atendimento que <span className="text-primary">não para</span> no feriado.
                            </h2>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="h-10 w-10 bg-[#CEFF05]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <FolderOpen className="h-5 w-5 text-slate-900" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Onboarding Zero-Touch</h4>
                                        <p className="text-sm text-slate-500">
                                            Contrato assinado = Pastas criadas no Drive + Tarefas no Asana + Grupo de WhatsApp criado automaticamente.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="h-10 w-10 bg-[#CEFF05]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Bot className="h-5 w-5 text-slate-900" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Concierge Fiscal (RAG)</h4>
                                        <p className="text-sm text-slate-500">
                                            O cliente pergunta "Qual a alíquota de ISS?" no WhatsApp e a IA responde baseada na legislação e no regime tributário dele.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: WhatsApp Mockup */}
                        <div className="flex justify-center">
                            <WhatsAppMockup />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PRODUTO 3 - BPO & CONSULTORIA */}
            <section className="py-16 md:py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="border-[#CEFF05] text-[#CEFF05] uppercase tracking-widest mb-4">
                            High Ticket
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Pare de vender DARF. Venda <span className="text-[#CEFF05]">Inteligência Financeira.</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Entregue aos seus clientes painéis de previsão de caixa e risco de quebra com a <strong className="text-white">Sua Marca</strong>.
                            Use a IA da Talos para ser o CFO que seu cliente precisa.
                        </p>
                    </div>

                    {/* Dashboard Preview */}
                    <WhiteLabelDashboard />

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                            <LineChart className="w-8 h-8 mx-auto text-[#CEFF05] mb-3" />
                            <h4 className="font-bold text-white mb-2">Previsão de Inadimplência</h4>
                            <p className="text-xs text-slate-400">Identifique clientes em risco antes que virem problema.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                            <ShieldCheck className="w-8 h-8 mx-auto text-[#CEFF05] mb-3" />
                            <h4 className="font-bold text-white mb-2">Auditoria de Riscos</h4>
                            <p className="text-xs text-slate-400">Score de saúde financeira automatizado para cada CNPJ.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                            <BarChart3 className="w-8 h-8 mx-auto text-[#CEFF05] mb-3" />
                            <h4 className="font-bold text-white mb-2">Túnel Contábil</h4>
                            <p className="text-xs text-slate-400">De-Para inteligente de lançamentos com IA.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. COMPLIANCE - LGPD & SEGURANÇA */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="border-blue-500 text-blue-600 uppercase tracking-widest mb-4">
                            Segurança & Compliance
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Blindagem de Dados e <span className="text-blue-600">Segurança Bancária</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Você é o guardião dos dados das empresas. Garantimos que nossos padrões de segurança
                            estão no mesmo nível dos maiores bancos digitais do país.
                        </p>
                    </div>

                    {/* Security Badges Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <motion.div
                            className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:border-blue-300 transition-all"
                            whileHover={{ y: -5 }}
                        >
                            <div className="h-14 w-14 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <ShieldCheck className="h-7 w-7 text-green-600" />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">LGPD Compliant</h4>
                            <p className="text-sm text-slate-500">
                                Seus dados não são usados para treinar IAs públicas. Total conformidade com a lei.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:border-blue-300 transition-all"
                            whileHover={{ y: -5 }}
                        >
                            <div className="h-14 w-14 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <Lock className="h-7 w-7 text-blue-600" />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">Criptografia AES-256</h4>
                            <p className="text-sm text-slate-500">
                                Mesmo nível de segurança dos maiores bancos digitais do Brasil.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:border-blue-300 transition-all"
                            whileHover={{ y: -5 }}
                        >
                            <div className="h-14 w-14 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
                                <FileCheck className="h-7 w-7 text-purple-600" />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">NDA (Sigilo Jurídico)</h4>
                            <p className="text-sm text-slate-500">
                                Contrato de confidencialidade assinado no dia 1, antes de qualquer acesso.
                            </p>
                        </motion.div>
                    </div>

                    {/* Key Message */}
                    <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-center">
                        <KeyRound className="h-10 w-10 mx-auto text-[#CEFF05] mb-4" />
                        <p className="text-white text-lg font-medium max-w-2xl mx-auto">
                            "Nós <span className="text-[#CEFF05] font-bold">não armazenamos</span> as senhas dos seus clientes.
                            Utilizamos <span className="text-[#CEFF05] font-bold">tokens de acesso criptografados</span> que expiram automaticamente."
                        </p>
                    </div>
                </div>
            </section>

            {/* 9. STACK TECNOLÓGICO */}
            <section className="py-16 bg-slate-50 border-y border-slate-200 overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">
                            Plugamos no ecossistema que você já usa.
                        </h2>
                        <p className="text-slate-500 text-sm">Integração nativa com os principais ERPs e ferramentas contábeis.</p>
                    </div>
                </div>

                {/* Logo Marquee */}
                <LogoMarquee />
            </section>

            {/* 10. TIMELINE - ONBOARDING EM 7 DIAS */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="border-primary text-primary uppercase tracking-widest mb-4">
                            Implementação Rápida
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Rodando na sua operação em até <span className="text-primary">7 dias</span>.
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Sem meses de configuração. Sem parar sua equipe para treinamentos intermináveis.
                            Em uma semana você já está economizando horas de trabalho.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Desktop Timeline Line */}
                        <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-slate-200 rounded-full">
                            <motion.div
                                className="h-full bg-gradient-to-r from-primary to-green-400 rounded-full"
                                initial={{ width: "0%" }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                viewport={{ once: true }}
                            />
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {/* Day 1 */}
                            <motion.div
                                className="relative text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="h-16 w-16 mx-auto bg-[#CEFF05] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#CEFF05]/20 relative z-10">
                                    <Plug className="h-7 w-7 text-slate-900" />
                                </div>
                                <Badge className="bg-slate-900 text-white mb-2">DIA 1</Badge>
                                <h4 className="font-bold text-slate-900 mb-2">Conexão & Instalação</h4>
                                <p className="text-sm text-slate-500">
                                    Conexão das APIs e instalação do Talos Agent no seu servidor local.
                                </p>
                            </motion.div>

                            {/* Day 3 */}
                            <motion.div
                                className="relative text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="h-16 w-16 mx-auto bg-[#CEFF05] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#CEFF05]/20 relative z-10">
                                    <FolderOpen className="h-7 w-7 text-slate-900" />
                                </div>
                                <Badge className="bg-slate-900 text-white mb-2">DIA 3</Badge>
                                <h4 className="font-bold text-slate-900 mb-2">Mapeamento</h4>
                                <p className="text-sm text-slate-500">
                                    Mapeamento das pastas e regras fiscais específicas do seu escritório.
                                </p>
                            </motion.div>

                            {/* Day 5 */}
                            <motion.div
                                className="relative text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <div className="h-16 w-16 mx-auto bg-[#CEFF05] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#CEFF05]/20 relative z-10">
                                    <Eye className="h-7 w-7 text-slate-900" />
                                </div>
                                <Badge className="bg-slate-900 text-white mb-2">DIA 5</Badge>
                                <h4 className="font-bold text-slate-900 mb-2">Teste Assistido</h4>
                                <p className="text-sm text-slate-500">
                                    O robô roda, um humano valida. Ajustes finos antes do go-live.
                                </p>
                            </motion.div>

                            {/* Day 7 */}
                            <motion.div
                                className="relative text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="h-16 w-16 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-green-500/20 relative z-10">
                                    <Rocket className="h-7 w-7 text-white" />
                                </div>
                                <Badge className="bg-green-600 text-white mb-2">DIA 7</Badge>
                                <h4 className="font-bold text-slate-900 mb-2">Go-Live 🎉</h4>
                                <p className="text-sm text-slate-500">
                                    Sua equipe para de digitar. Os robôs assumem o trabalho repetitivo.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 11. FORMULÁRIO */}
            <section id="form-contadores" className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-12 translate-x-32 hidden lg:block" />

                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">

                        {/* Lado Esquerdo: Copy de Venda */}
                        <div className="lg:w-2/5 p-12 lg:p-16 text-white relative">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_#CEFF05_0%,transparent_15%)] opacity-20" />
                            <div className="space-y-8 relative z-10">
                                <div>
                                    <h2 className="text-3xl font-bold mb-4">Diagnóstico do Escritório Gratuito</h2>
                                    <p className="text-slate-400 font-light text-lg">
                                        Descubra quais processos podem ser automatizados e quanto você vai economizar.
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
                                                <span className="text-[#CEFF05] font-bold">3 escritórios</span> já enviaram o formulário de diagnóstico hoje.
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
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Seu nome"
                                                            className="bg-slate-50 border-0"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-xs font-bold uppercase text-slate-400">E-mail</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="seu@email.com"
                                                            className="bg-slate-50 border-0"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="empresa"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-xs font-bold uppercase text-slate-400">Nome do Escritório</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Meu Escritório Contábil"
                                                            className="bg-slate-50 border-0"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="cnpjsCarteira"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-xs font-bold uppercase text-slate-400">CNPJs na Carteira</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger className="bg-slate-50 border-0">
                                                                <SelectValue placeholder="Selecione" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="<50">Menos de 50</SelectItem>
                                                            <SelectItem value="50-200">50 a 200</SelectItem>
                                                            <SelectItem value="200+">Mais de 200</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="softwareContabil"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-xs font-bold uppercase text-slate-400">Software Contábil Utilizado</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-slate-50 border-0">
                                                            <SelectValue placeholder="Selecione seu ERP" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="dominio">Domínio Sistemas (Thomson Reuters)</SelectItem>
                                                        <SelectItem value="alterdata">Alterdata</SelectItem>
                                                        <SelectItem value="questor">Questor</SelectItem>
                                                        <SelectItem value="sci">SCI</SelectItem>
                                                        <SelectItem value="contmatic">Contmatic</SelectItem>
                                                        <SelectItem value="omie-contaazul">Omie / ContaAzul</SelectItem>
                                                        <SelectItem value="outro">Outro</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full h-14 text-lg font-bold bg-[#CEFF05] text-slate-900 hover:bg-[#CEFF05]/80 rounded-xl shadow-xl shadow-[#CEFF05]/20 mt-4 transition-all hover:scale-[1.02]"
                                    >
                                        {isSubmitting ? <Loader2 className="animate-spin" /> : "Solicitar Demonstração Técnica"}
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-white py-12 border-t border-slate-100 text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
                    Talos for Accountants &copy; 2026
                </p>
            </footer>

            <ExitIntentModal />
            <StickyMobileCTA onClick={scrollToForm} />
        </div>
    )
}

// ============================================
// COMPONENTES AUXILIARES
// ============================================

function FunnelAnimation() {
    return (
        <div className="relative w-80 h-80">
            {/* Paper stack - entrada */}
            <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2"
                animate={{ x: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="space-y-1">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="w-16 h-20 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg border border-slate-300 shadow-lg"
                            style={{ transform: `rotate(${(i - 1.5) * 5}deg) translateX(${i * 2}px)` }}
                        >
                            <div className="p-2 space-y-1">
                                <div className="h-1 bg-slate-400 rounded w-3/4" />
                                <div className="h-1 bg-slate-400 rounded w-1/2" />
                                <div className="h-1 bg-slate-400 rounded w-2/3" />
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Funnel center */}
            <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-b from-[#CEFF05]/30 to-[#CEFF05]/10 rounded-full border border-[#CEFF05]/50 flex items-center justify-center"
                animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 20px rgba(206,255,5,0.2)", "0 0 40px rgba(206,255,5,0.4)", "0 0 20px rgba(206,255,5,0.2)"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <Zap className="w-10 h-10 text-slate-900" />
            </motion.div>

            {/* Arrow indicators */}
            <motion.div
                className="absolute left-[30%] top-1/2 -translate-y-1/2"
                animate={{ x: [0, 5, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <ArrowRight className="w-6 h-6 text-slate-500" />
            </motion.div>

            <motion.div
                className="absolute right-[30%] top-1/2 -translate-y-1/2"
                animate={{ x: [0, 5, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            >
                <ArrowRight className="w-6 h-6 text-slate-500" />
            </motion.div>

            {/* Clean Dashboard - saída */}
            <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2"
                animate={{ x: [0, -5, 0], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                <div className="w-24 h-20 bg-white rounded-xl border border-slate-200 shadow-xl p-3 overflow-hidden">
                    <div className="flex gap-1 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    </div>
                    <div className="space-y-1.5">
                        <div className="flex gap-1">
                            <div className="h-2 bg-[#CEFF05] rounded w-1/2" />
                            <div className="h-2 bg-blue-400 rounded w-1/3" />
                        </div>
                        <div className="h-6 bg-slate-100 rounded flex items-end p-1 gap-0.5">
                            {[40, 60, 30, 80, 50].map((h, i) => (
                                <div key={i} className="flex-1 bg-[#CEFF05] rounded-t" style={{ height: `${h}%` }} />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

function DigitacaoCalculator() {
    const [clientes, setClientes] = useState(100)
    const [horasPorCliente, setHorasPorCliente] = useState(2)

    const custoHora = 35 // Custo médio hora analista
    const custoMensal = clientes * horasPorCliente * custoHora
    const custoAnual = custoMensal * 12

    return (
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#CEFF05] blur-[100px] opacity-10 pointer-events-none" />

            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Calculadora de Desperdício</h3>
                        <p className="text-slate-400 text-sm">Descubra quanto seu escritório perde por mês em digitação manual.</p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label className="text-xs font-bold uppercase text-[#CEFF05] tracking-widest">Clientes Ativos</label>
                                <span className="text-white font-mono font-bold">{clientes}</span>
                            </div>
                            <input
                                type="range"
                                min="10" max="500" step="10"
                                value={clientes}
                                onChange={(e) => setClientes(Number(e.target.value))}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#CEFF05]"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label className="text-xs font-bold uppercase text-[#CEFF05] tracking-widest">Horas/Mês por Cliente</label>
                                <span className="text-white font-mono font-bold">{horasPorCliente}h</span>
                            </div>
                            <input
                                type="range"
                                min="0.5" max="10" step="0.5"
                                value={horasPorCliente}
                                onChange={(e) => setHorasPorCliente(Number(e.target.value))}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#CEFF05]"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/5 flex flex-col items-center justify-center text-center space-y-2">
                    <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Você perde aproximadamente</span>
                    <div className="text-5xl md:text-6xl font-black text-red-500 tracking-tighter">
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(custoMensal)}
                    </div>
                    <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">por mês em digitação manual</span>

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

function CNDTerminalMonitor() {
    const [logs, setLogs] = useState<string[]>([])

    const logMessages = [
        "[INFO] Consultando CNPJ 12.345.678/0001-90...",
        "[OK] CND Federal: NEGATIVA (Sem débitos)",
        "[INFO] Consultando CNPJ 98.765.432/0001-10...",
        "[CRITICAL] CND Federal: POSITIVA! (Débito Detectado)",
        "[ACTION] Disparando alerta Slack p/ equipe fiscal...",
        "[SUCCESS] Alerta enviado com sucesso.",
        "[INFO] Consultando CND Municipal (Prefeitura SP)...",
        "[OK] CND Municipal: NEGATIVA (Sem pendências)",
        "[INFO] Próxima verificação agendada: 24h",
    ]

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            if (index < logMessages.length) {
                setLogs(prev => [...prev.slice(-8), logMessages[index]])
                index++
            } else {
                index = 0
                setLogs([])
            }
        }, 1500)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 text-center">
                    <span className="text-xs font-mono text-slate-400">talos-cnd-monitor — bash — 80x24</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs text-green-400 font-mono">LIVE</span>
                </div>
            </div>

            {/* Terminal Content */}
            <div className="p-4 font-mono text-sm h-64 overflow-hidden bg-[#0a0a0a]">
                <AnimatePresence>
                    {logs.filter(Boolean).map((log, i) => (
                        <motion.div
                            key={`${i}-${log}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            className={`mb-1 ${log?.includes("[OK]") || log?.includes("[SUCCESS]") ? "text-green-400" :
                                log?.includes("[CRITICAL]") ? "text-red-500 font-bold animate-pulse" :
                                    log?.includes("[ACTION]") ? "text-amber-400 font-bold" :
                                        "text-slate-400"
                                }`}
                        >
                            <span className="text-slate-600 mr-2">{new Date().toLocaleTimeString('pt-BR')}</span>
                            {log}
                        </motion.div>
                    ))}
                </AnimatePresence>
                <motion.span
                    className="text-[#CEFF05]"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                >
                    █
                </motion.span>
            </div>
        </div>
    )
}

function WhatsAppMockup() {
    const [visibleMessages, setVisibleMessages] = useState(0)

    const messages = [
        { from: "client", text: "Boa tarde! Me manda a guia do Simples deste mês?" },
        { from: "talos", text: "Olá, Sr. João! Aqui está sua guia do DAS referente a 01/2026." },
        { from: "talos", text: "📎 DAS_01_2026.pdf", isFile: true },
        { from: "client", text: "Qual a alíquota de ISS para minha empresa?" },
        { from: "talos", text: "Baseado no seu regime (Simples Nacional) e atividade (CNAE 6201-5), a alíquota de ISS é de 2,5% sobre o faturamento. Posso ajudar com mais alguma coisa?" },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleMessages(prev => {
                if (prev < messages.length) return prev + 1
                return 0
            })
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="w-72 bg-[#0B141A] rounded-3xl border border-slate-300 overflow-hidden shadow-2xl">
            {/* WhatsApp Header */}
            <div className="bg-[#1F2C33] px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#CEFF05] to-green-500 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-slate-900" />
                </div>
                <div className="flex-1">
                    <p className="text-white text-sm font-medium">Talos AI</p>
                    <p className="text-xs text-green-400">online</p>
                </div>
            </div>

            {/* Chat Area */}
            <div className="p-4 h-80 space-y-3 overflow-hidden" style={{ backgroundColor: '#0B141A' }}>
                <AnimatePresence>
                    {messages.slice(0, visibleMessages).map((msg, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            className={`flex ${msg.from === "client" ? "justify-end" : "justify-start"}`}
                        >
                            <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.from === "client"
                                ? "bg-[#005C4B] text-white rounded-br-md"
                                : "bg-[#1F2C33] text-white rounded-bl-md"
                                }`}>
                                {msg.isFile ? (
                                    <div className="flex items-center gap-2 bg-white/10 rounded-lg p-2">
                                        <FileSpreadsheet className="w-8 h-8 text-red-400" />
                                        <div>
                                            <p className="text-xs font-medium">DAS_01_2026.pdf</p>
                                            <p className="text-[10px] text-slate-400">12.4 KB • PDF</p>
                                        </div>
                                    </div>
                                ) : (
                                    msg.text
                                )}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    )
}

function WhiteLabelDashboard() {
    return (
        <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
            {/* Dashboard Header */}
            <div className="bg-slate-700 px-6 py-4 flex items-center justify-between border-b border-slate-600">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#CEFF05] to-green-500 rounded-lg flex items-center justify-center">
                        <span className="text-slate-900 font-bold text-sm">SC</span>
                    </div>
                    <span className="text-white font-bold">Sua Contabilidade</span>
                    <Badge className="bg-[#CEFF05]/20 text-[#CEFF05] text-[10px]">White Label</Badge>
                </div>
                <div className="text-xs text-slate-400">Powered by Talos AI</div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 grid md:grid-cols-3 gap-6">
                {/* KPI Cards */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Saúde Financeira</p>
                    <p className="text-3xl font-bold text-[#CEFF05]">87%</p>
                    <div className="mt-2 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full w-[87%] bg-gradient-to-r from-[#CEFF05] to-green-400 rounded-full" />
                    </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Risco de Inadimplência</p>
                    <p className="text-3xl font-bold text-amber-400">Baixo</p>
                    <p className="text-xs text-slate-500 mt-2">Score: 720/850</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Previsão Caixa (30d)</p>
                    <p className="text-3xl font-bold text-white">R$ 42k</p>
                    <p className="text-xs text-green-400 mt-2">↑ 12% vs. mês anterior</p>
                </div>
            </div>

            {/* Chart placeholder */}
            <div className="px-6 pb-6">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 h-40 flex items-end gap-2">
                    {[35, 42, 28, 55, 48, 62, 45, 70, 58, 65, 72, 68].map((h, i) => (
                        <motion.div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-[#CEFF05] to-green-400 rounded-t"
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                        />
                    ))}
                </div>
                <p className="text-center text-xs text-slate-500 mt-2">Fluxo de Caixa - Últimos 12 meses</p>
            </div>
        </div>
    )
}

function LogoMarquee() {
    const tools = [
        { name: "Domínio Sistemas", domain: "dominiosistemas.com.br" },
        { name: "Alterdata", domain: "alterdata.com.br" },
        { name: "Omie", domain: "omie.com.br" },
        { name: "ContaAzul", domain: "contaazul.com" },
        { name: "Pluggy", domain: "pluggy.ai" },
        { name: "Receita Federal", domain: "gov.br" },
        { name: "Prefeitura SP", domain: "prefeitura.sp.gov.br" },
        { name: "WhatsApp", domain: "whatsapp.com" },
        { name: "Slack", domain: "slack.com" },
        { name: "Google Drive", domain: "google.com" },
    ]

    const doubledTools = [...tools, ...tools]

    return (
        <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10" />

            <motion.div
                className="flex gap-8 items-center whitespace-nowrap px-8"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            >
                {doubledTools.map((tool, index) => (
                    <div key={index} className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-slate-100 shadow-sm">
                        <img
                            src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=32`}
                            alt={tool.name}
                            className="w-5 h-5 grayscale opacity-60"
                        />
                        <span className="text-sm text-slate-500 font-medium">{tool.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

function StickyMobileCTA({ onClick }: { onClick: () => void }) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 600) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
                >
                    <Button
                        onClick={onClick}
                        className="w-full bg-[#CEFF05] text-slate-900 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] rounded-xl py-6 font-bold text-lg hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] transition-all"
                    >
                        Agendar Diagnóstico
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

function ExitIntentModal() {
    const [isVisible, setIsVisible] = useState(false)
    const [hasTriggered, setHasTriggered] = useState(false)
    const [loading, setLoading] = useState(false)
    const [sent, setSent] = useState(false)
    const { toast } = useToast()

    // URL do Webhook do n8n (Production URL - workflow ativo roda automaticamente)
    const N8N_WEBHOOK_URL = 'http://localhost:5678/webhook/auditoria-fiscal'

    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            // Se o mouse sair pelo topo da página (intenção de fechar aba)
            // E ainda não tiver disparado nesta sessão
            if (e.clientY <= 0 && !hasTriggered) {
                setIsVisible(true)
                setHasTriggered(true) // Garante que só aparece 1x por sessão
            }
        }

        document.addEventListener('mouseleave', handleMouseLeave)
        return () => document.removeEventListener('mouseleave', handleMouseLeave)
    }, [hasTriggered])

    const formatCNPJ = (value: string) => {
        // Remove tudo que não é número
        const numbers = value.replace(/\D/g, '')
        // Limita a 14 dígitos
        return numbers.slice(0, 14)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.currentTarget)
        const data = {
            email: formData.get('email'),
            cnpjs: [
                formData.get('cnpj1'),
                formData.get('cnpj2'),
                formData.get('cnpj3')
            ].filter(Boolean).map(cnpj => String(cnpj).replace(/\D/g, '')) // Remove pontuação
        }

        try {
            const response = await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                setSent(true)
                // Fecha o modal após 4 segundos mostrando sucesso
                setTimeout(() => setIsVisible(false), 4000)
            } else {
                throw new Error('Erro na requisição')
            }
        } catch (error) {
            console.error('Erro ao enviar:', error)
            toast({
                title: "Erro de conexão",
                description: "Não foi possível conectar ao servidor. Tente novamente.",
                variant: "destructive"
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={(e) => e.target === e.currentTarget && setIsVisible(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        className="w-full max-w-lg bg-slate-900 border border-red-500/30 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
                    >
                        {/* Background glow */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-red-500/10 blur-[100px] pointer-events-none" />
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] pointer-events-none" />

                        {/* Botão Fechar X */}
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors z-10"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        {!sent ? (
                            <div className="relative z-10">
                                {/* Header */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="p-3 bg-red-500/20 rounded-xl border border-red-500/30 flex-shrink-0">
                                        <AlertTriangle className="w-6 h-6 text-red-500" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-white mb-1">
                                            ⚠️ Teste Cego de Risco Fiscal
                                        </h2>
                                        <p className="text-sm text-slate-400">
                                            Seus analistas disseram que está tudo ok. <strong className="text-white">O robô da Talos diz a mesma coisa?</strong>
                                        </p>
                                    </div>
                                </div>

                                <p className="text-slate-400 mb-6 text-sm leading-relaxed bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                                    Insira <strong className="text-[#CEFF05]">3 CNPJs aleatórios</strong> da sua carteira e receba o dossiê de situação cadastral no seu e-mail em <strong className="text-white">5 minutos</strong>.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="text-xs font-bold uppercase text-slate-400 mb-1.5 block">
                                            Seu E-mail Corporativo
                                        </label>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="contador@seuescritorio.com.br"
                                            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white focus:border-[#CEFF05] focus:ring-1 focus:ring-[#CEFF05] outline-none transition-all"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-xs font-bold uppercase text-slate-400 mb-1.5 block">
                                            CNPJs para Auditar
                                        </label>
                                        <div className="grid grid-cols-3 gap-2">
                                            <input
                                                name="cnpj1"
                                                type="text"
                                                placeholder="CNPJ 1"
                                                onChange={(e) => e.target.value = formatCNPJ(e.target.value)}
                                                className="bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white text-sm focus:border-[#CEFF05] outline-none font-mono"
                                                required
                                            />
                                            <input
                                                name="cnpj2"
                                                type="text"
                                                placeholder="CNPJ 2"
                                                onChange={(e) => e.target.value = formatCNPJ(e.target.value)}
                                                className="bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white text-sm focus:border-[#CEFF05] outline-none font-mono"
                                            />
                                            <input
                                                name="cnpj3"
                                                type="text"
                                                placeholder="CNPJ 3"
                                                onChange={(e) => e.target.value = formatCNPJ(e.target.value)}
                                                className="bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white text-sm focus:border-[#CEFF05] outline-none font-mono"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-[#CEFF05] text-slate-900 font-bold py-4 rounded-xl hover:bg-[#CEFF05]/90 transition-all mt-2 flex justify-center items-center gap-2 shadow-lg shadow-[#CEFF05]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="h-5 w-5 animate-spin" />
                                                Processando...
                                            </>
                                        ) : (
                                            <>
                                                <Eye className="h-5 w-5" />
                                                Auditar Agora (Grátis)
                                            </>
                                        )}
                                    </button>
                                </form>

                                <p className="text-xs text-slate-600 mt-4 text-center">
                                    🔒 Dados consultados diretamente na base da Receita Federal em tempo real.
                                    <br />
                                    A Talos garante sigilo absoluto. Nenhum dado é armazenado após a consulta.
                                </p>
                            </div>
                        ) : (
                            <div className="text-center py-8 relative z-10">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    className="h-20 w-20 mx-auto bg-[#CEFF05]/20 rounded-full flex items-center justify-center mb-6 border border-[#CEFF05]/30"
                                >
                                    <CheckCircle2 className="h-10 w-10 text-[#CEFF05]" />
                                </motion.div>
                                <h3 className="text-2xl text-white font-bold mb-2">Robôs Iniciados!</h3>
                                <p className="text-slate-400">
                                    Verifique sua caixa de entrada em <strong className="text-white">2 minutos</strong>.
                                </p>
                                <p className="text-xs text-slate-500 mt-4">
                                    O relatório será enviado com a situação cadastral de cada CNPJ.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
