"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle2, Loader2, ShieldCheck, Mail, Building2, User, DollarSign, Target, HeartHandshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { contactFormSchema, type ContactFormData } from "@/lib/schemas"
import { submitContactForm } from "@/app/actions/contact"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function ContatoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      empresa: "",
      tamanhoOperacao: undefined,
      ticketMedio: undefined,
      dorPrincipal: undefined,
    },
  })

  async function onSubmit(values: ContactFormData) {
    setIsSubmitting(true)
    try {
      const result = await submitContactForm(values)
      if (result.success) {
        setIsSuccess(true)
        toast({
          title: "Sinal recebido.",
          description: "Nossos especialistas analisarão seus dados e entrarão em contato.",
        })
      } else {
        toast({
          variant: "destructive",
          title: "Erro ao enviar",
          description: result.message,
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro inesperado",
        description: "Tente novamente mais tarde.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="container mx-auto py-12 md:py-24 flex flex-col items-center justify-center text-center space-y-8 min-h-[60vh]">
        <div className="h-20 w-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
          <CheckCircle2 className="h-12 w-12" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Diagnóstico Solicitado com Sucesso.</h1>
        <p className="text-xl text-slate-500 max-w-2xl font-light">
          Nossa equipe técnica fará uma pré-análise baseada nas informações enviadas.
          Aguarde nosso contato nas próximas 24 horas.
        </p>
        <Button asChild size="lg" className="bg-primary text-white px-10 rounded-full">
          <Link href="/">Voltar para Home</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* 2. Coluna esquerda: narrativa, confiança, posicionamento */}
      <div className="lg:w-[45%] bg-slate-900 text-white p-12 lg:p-24 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(var(--primary-rgb),0.1)_0%,transparent_50%)]" />

        <div className="space-y-16 relative">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              Agende uma conversa com nossos especialistas
            </h1>
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
              Não é uma conversa de vendas. É um diagnóstico técnico sobre o potencial de recuperação e expansão de receita da sua operação.
            </p>
          </div>

          <div className="space-y-10">
            {/* Bloco Privacidade */}
            <div className="flex items-start space-x-5 group">
              <div className="h-12 w-12 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-lg">Privacidade Total</h4>
                <p className="text-sm text-slate-400 font-light">Seus dados corporativos são tratados sob NDA automático.</p>
              </div>
            </div>

            {/* Bloco ROI */}
            <div className="flex items-start space-x-5 group">
              <div className="h-12 w-12 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-lg">ROI Estimado</h4>
                <p className="text-sm text-slate-400 font-light">Ao final da conversa, entregamos uma estimativa real de impacto financeiro.</p>
              </div>
            </div>

            {/* Bloco Diagnóstico */}
            <div className="flex items-start space-x-5 group">
              <div className="h-12 w-12 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <HeartHandshake className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-lg">Foco em Resultado</h4>
                <p className="text-sm text-slate-400 font-light">Conversa direta com especialistas que entendem de operação e IA.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
          São Paulo, Brasil | Worldwide Delivery
        </div>
      </div>

      {/* 4. Estrutura do formulário (coluna direita) */}
      <div className="lg:w-[55%] p-8 lg:p-24 bg-white">
        <div className="max-w-xl mx-auto space-y-12">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-slate-900 italic tracking-tight underline decoration-primary underline-offset-8">Diagnóstico de Maturidade</h2>
            <p className="text-slate-500 font-light italic text-sm">Preencha os campos abaixo para contextualizar seu cenário em menos de 2 minutos.</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
              <div className="space-y-8">
                {/* 4.1 Campos básicos (obrigatórios) */}
                <div className="grid md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-bold uppercase tracking-widest text-slate-400">Nome Completo</FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <User className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 group-focus-within:text-primary transition-colors" />
                            <Input placeholder="Seu nome" className="pl-8 border-0 border-b-2 rounded-none border-slate-100 focus-visible:ring-0 focus-visible:border-primary transition-all pr-0" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage className="text-[10px]" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-bold uppercase tracking-widest text-slate-400">E-mail Corporativo</FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <Mail className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 group-focus-within:text-primary transition-colors" />
                            <Input placeholder="exemplo@empresa.com" className="pl-8 border-0 border-b-2 rounded-none border-slate-100 focus-visible:ring-0 focus-visible:border-primary transition-all pr-0" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage className="text-[10px]" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="empresa"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-bold uppercase tracking-widest text-slate-400">Nome da Empresa</FormLabel>
                      <FormControl>
                        <div className="relative group">
                          <Building2 className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 group-focus-within:text-primary transition-colors" />
                          <Input placeholder="Sua empresa S.A." className="pl-8 border-0 border-b-2 rounded-none border-slate-100 focus-visible:ring-0 focus-visible:border-primary transition-all pr-0" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage className="text-[10px]" />
                    </FormItem>
                  )}
                />

                {/* 4.2 Qualificação de porte (obrigatória) */}
                <FormField
                  control={form.control}
                  name="tamanhoOperacao"
                  render={({ field }) => (
                    <FormItem className="space-y-4">
                      <FormLabel className="text-xs font-bold uppercase tracking-widest text-slate-400">Tamanho da Operação (MRR aproximado)</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="grid md:grid-cols-2 gap-4"
                        >
                          {["Até R$100 mil", "R$100 mil – R$500 mil", "R$500 mil – R$2 milhões", "Acima de R$2 milhões"].map((option) => (
                            <FormItem key={option} className="flex items-center space-x-3 space-y-0 p-4 border rounded-xl hover:bg-slate-50 transition-colors cursor-pointer border-slate-100 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                              <FormControl>
                                <RadioGroupItem value={option} />
                              </FormControl>
                              <FormLabel className="font-medium text-sm text-slate-600 cursor-pointer w-full">
                                {option}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage className="text-[10px]" />
                    </FormItem>
                  )}
                />

                {/* 4.3 Contexto econômico (Opcional) */}
                <FormField
                  control={form.control}
                  name="ticketMedio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-bold uppercase tracking-widest text-slate-400">Ticket Médio Mensal por Cliente (Opcional)</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-0 border-b-2 rounded-none border-slate-100 px-0 focus:ring-0 focus:border-primary">
                            <SelectValue placeholder="Selecione o ticket médio" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Até R$100">Até R$100</SelectItem>
                          <SelectItem value="R$100 – R$500">R$100 – R$500</SelectItem>
                          <SelectItem value="R$500 – R$2.000">R$500 – R$2.000</SelectItem>
                          <SelectItem value="Acima de R$2.000">Acima de R$2.000</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-[10px]" />
                    </FormItem>
                  )}
                />

                {/* 4.4 Dor principal (campo estratégico) */}
                <FormField
                  control={form.control}
                  name="dorPrincipal"
                  render={({ field }) => (
                    <FormItem className="space-y-4">
                      <FormLabel className="text-xs font-bold uppercase tracking-widest text-slate-400">Qual dor mais impacta sua receita hoje?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="space-y-3"
                        >
                          {[
                            "Inadimplência / atrasos recorrentes",
                            "Cancelamento de clientes (churn)",
                            "Crescer receita na base atual (LTV / Upsell)",
                            "Não sei exatamente — preciso de um diagnóstico"
                          ].map((option) => (
                            <FormItem key={option} className="flex items-center space-x-3 space-y-0 p-4 border rounded-xl hover:bg-slate-50 transition-colors cursor-pointer border-slate-100 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                              <FormControl>
                                <RadioGroupItem value={option} />
                              </FormControl>
                              <FormLabel className="font-medium text-sm text-slate-600 cursor-pointer w-full">
                                {option}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage className="text-[10px]" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-6">
                <Button type="submit" className="w-full bg-slate-900 text-white py-10 text-xl font-bold rounded-2xl shadow-xl hover:bg-primary transition-all hover:scale-[1.01]" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                      Analisando Perfil...
                    </>
                  ) : (
                    "Agendar Diagnóstico Técnico"
                  )}
                </Button>

                <p className="text-center text-[10px] text-slate-400 font-light leading-relaxed">
                  Esta é uma conversa estritamente técnica. Ao solicitar, você concorda que a Talos AI processará seus dados para fins de agendamento diagnósitico sob conformidade com a LGPD e NDA corporativo.
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
