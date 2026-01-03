"use client"

import { useState } from "react"
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
            const result = await submitContactForm(values)
            if (result.success) {
                setIsSuccess(true)
                // Disparar evento de conversão do Google Ads aqui
                if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'conversion', {
                        'send_to': 'AW-SEU_ID_AQUI/LABEL_CONVERSAO_AQUI'
                    });
                }
            } else {
                toast({ title: "Erro", description: "Tente novamente.", variant: "destructive" })
            }
        } catch (error) {
            toast({ title: "Erro", description: "Erro inesperado.", variant: "destructive" })
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
                    <Button onClick={scrollToForm} className="bg-slate-900 text-white hover:bg-primary hover:scale-105 transition-all rounded-full font-bold px-6">
                        Solicitar Diagnóstico
                    </Button>
                </div>
            </header>

            {/* 2. Hero Section: Foco em Dor e Promessa */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden bg-slate-50">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(var(--primary-rgb),0.05)_0%,transparent_60%)]" />

                <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
                    <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 shadow-sm px-4 py-1.5 rounded-full mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Pare de perder receita hoje</span>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                        Sua operação está vazando <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Dinheiro Invisível?</span>
                    </h1>

                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Nossa <strong>IA preditiva</strong> identifica <strong>Inadimplência</strong> e <strong>Churn</strong> antes que eles impactem seu caixa.
                        Sem caixas pretas, <strong>focado exclusivamente em ROI.</strong>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button onClick={scrollToForm} size="lg" className="bg-[#CEFF05] text-slate-950 hover:bg-[#CEFF05]/90 text-lg px-8 py-7 h-auto rounded-full font-bold shadow-xl shadow-[#CEFF05]/20 hover:scale-105 transition-all w-full sm:w-auto">
                            Simular Economia Agora
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <div className="flex items-center space-x-2 text-sm text-slate-500 font-medium px-4">
                            <ShieldCheck className="h-4 w-4 text-primary" />
                            <span>Dados 100% Blindados (LGPD)</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Visual Problem (Timeline Component - Reused for Impact) */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-red-500 mb-3">O Custo da Reação</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Por que esperar o vencimento é um erro caro.</h3>
                    </div>

                    {/* Visual Timeline (Simplificado para Mobile/Desktop) */}
                    <div className="max-w-5xl mx-auto bg-slate-50 p-6 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-2xl relative overflow-hidden">
                        {/* Aqui inserimos a estrutura visual da Timeline que você já tem no Home, 
                    mas focada na comparação visual rápida. */}
                        <div className="space-y-12">
                            {/* Régua Reativa */}
                            <div className="opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                <div className="flex justify-between text-xs font-bold uppercase text-slate-400 mb-2">
                                    <span>Dia -15</span>
                                    <span className="text-red-500">Vencimento (Dia 0)</span>
                                    <span>Dia +15</span>
                                </div>
                                <div className="h-12 bg-slate-200 rounded-xl relative overflow-hidden flex items-center">
                                    <div className="w-1/2 h-full border-r-2 border-red-500/50 relative">
                                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-slate-500 font-medium">Silêncio...</span>
                                    </div>
                                    <div className="flex-1 h-full bg-red-100 flex items-center pl-4">
                                        <span className="text-xs font-bold text-red-600 flex items-center gap-2">
                                            <ShieldAlert className="h-4 w-4" /> Cobrança Tardia
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Régua Talos */}
                            <div className="relative transform md:scale-105 transition-transform">
                                <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-black uppercase text-[#CEFF05] bg-slate-900 px-3 py-1 rounded-md shadow-lg hidden md:block">
                                    Talos AI
                                </div>
                                <div className="h-20 bg-slate-900 rounded-2xl relative overflow-hidden flex items-center shadow-2xl shadow-primary/20 border border-primary/20">
                                    {/* Zona de IA */}
                                    <div className="absolute left-[15%] w-[35%] h-[80%] bg-[#CEFF05]/10 border border-[#CEFF05]/30 rounded-xl flex flex-col items-center justify-center text-center">
                                        <Zap className="h-4 w-4 text-[#CEFF05] mb-1 animate-pulse" />
                                        <span className="text-[10px] font-bold text-[#CEFF05] uppercase leading-tight">Intervenção<br />Preventiva</span>
                                    </div>

                                    {/* Linha do tempo */}
                                    <div className="w-full h-px bg-white/10 absolute top-1/2" />
                                    <div className="absolute left-1/2 h-full w-px bg-white/20" /> {/* Dia 0 */}

                                    <div className="absolute right-10 text-right">
                                        <span className="text-white font-bold text-sm block">Receita Salva</span>
                                        <span className="text-xs text-slate-400">Antes do problema escalar</span>
                                    </div>
                                </div>
                            </div>
                        </div>
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

            {/* 5. Soluções Cards (Simplificado para Leads) */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">O que a Talos resolve para você</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-primary/50 transition-colors group">
                            <ShieldAlert className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Previsão de Inadimplência</h3>
                            <p className="text-slate-500 leading-relaxed">Antecipe quem vai atrasar e aja preventivamente sem atrito desnecessário.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-primary/50 transition-colors group">
                            <UserMinus className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Retenção (Churn)</h3>
                            <p className="text-slate-500 leading-relaxed">Identifique o risco silencioso de cancelamento antes que o cliente vá embora.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-primary/50 transition-colors group">
                            <Database className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Auditoria de Dados</h3>
                            <p className="text-slate-500 leading-relaxed">Descubra se seus dados estão prontos para IA e onde estão as falhas de governança.</p>
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
                                            <div className="h-10 w-10 rounded-full ring-2 ring-white/20 bg-gradient-to-br from-blue-500 to-blue-700 grid place-items-center text-[11px] font-extrabold text-white shadow-lg relative z-30 leading-none text-center">JD</div>
                                            <div className="h-10 w-10 rounded-full ring-2 ring-white/20 bg-gradient-to-br from-purple-500 to-purple-700 grid place-items-center text-[11px] font-extrabold text-white shadow-lg relative z-20 leading-none text-center">MA</div>
                                            <div className="h-10 w-10 rounded-full ring-2 ring-white/20 bg-gradient-to-br from-pink-500 to-pink-700 grid place-items-center text-[11px] font-extrabold text-white shadow-lg relative z-10 leading-none text-center">RK</div>
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
                                    <p className="text-slate-500">Nossa equipe de inteligência entrará em contato em breve para agendar a apresentação do diagnóstico.</p>
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

                                        <Button type="submit" disabled={isSubmitting} className="w-full h-14 text-lg font-bold bg-[#CEFF05] text-slate-900 hover:bg-[#CEFF05]/80 rounded-xl shadow-xl shadow-[#CEFF05]/20 mt-4">
                                            {isSubmitting ? <Loader2 className="animate-spin" /> : "Solicitar Análise Gratuita"}
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
