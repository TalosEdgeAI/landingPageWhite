"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Brain, CheckCircle2, Loader2, ShieldCheck, Mail, Building2, User } from "lucide-react"
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
import { Checkbox } from "@/components/ui/checkbox"
import { contactFormSchema, type ContactFormData } from "@/lib/schemas"
import { submitContactForm } from "@/app/actions/contact"
import { useToast } from "@/hooks/use-toast"

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
      volumeClientes: undefined,
      desafios: [],
      outroDesafio: "",
      message: "",
    },
  })

  const selectedDesafios = form.watch("desafios")
  const showOutroInput = selectedDesafios.includes("Outro")

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

  const challenges = [
    { id: "Inadimplência", label: "Inadimplência" },
    { id: "Churn", label: "Churn / Cancelamento" },
    { id: "LTV", label: "Expansão de LTV / Upsell" },
    { id: "Outro", label: "Outro" },
  ]

  if (isSuccess) {
    return (
      <div className="container mx-auto py-12 md:py-24 flex flex-col items-center justify-center text-center space-y-8 min-h-[60vh]">
        <div className="h-20 w-20 bg-accent/20 rounded-full flex items-center justify-center text-accent">
          <CheckCircle2 className="h-12 w-12" />
        </div>
        <h1 className="text-4xl font-bold text-primary">Diagnóstico Solicitado com Sucesso.</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Nossa equipe técnica fará uma pré-análise baseada nas informações enviadas.
          Aguarde nosso contato nas próximas 24 horas.
        </p>
        <Button asChild className="bg-primary text-white">
          <a href="/">Voltar para Home</a>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-background">
      {/* Sidebar Info */}
      <div className="lg:w-2/5 bg-primary text-white p-12 lg:p-24 flex flex-col justify-between">
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-accent">
              <Brain className="h-6 w-6" />
              <span className="font-bold uppercase tracking-widest text-xs">Diagnóstico Técnico</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Agende uma conversa com nossos especialistas.
            </h1>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              Não é uma conversa de vendas. É um diagnóstico técnico sobre o potencial de recuperação de receita da sua carteira ativa.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="h-10 w-10 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-bold">Privacidade Total</h4>
                <p className="text-sm text-slate-400">Seus dados corporativos são tratados sob rigoroso NDA automático.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="h-10 w-10 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-bold">ROI Estimado</h4>
                <p className="text-sm text-slate-400">Ao final da conversa, entregaremos uma estimativa real de impacto financeiro.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 text-sm text-slate-500">
          São Paulo, Brasil | Worldwide Delivery
        </div>
      </div>

      {/* Form Area */}
      <div className="lg:w-3/5 p-8 lg:p-24">
        <div className="max-w-2xl mx-auto space-y-10">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-primary italic">Formulário de Qualificação</h2>
            <p className="text-muted-foreground italic text-sm text-slate-500">Preencha os campos abaixo para contextualizar seu cenário.</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Completo</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="Seu nome" className="pl-10" {...field} />
                        </div>
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
                      <FormLabel>E-mail Corporativo</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="exemplo@empresa.com" className="pl-10" {...field} />
                        </div>
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
                      <FormLabel>Nome da Empresa</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="Empresa S.A." className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="volumeClientes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Volume de Clientes</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o volume" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="<1k">Menos de 1.000 clientes</SelectItem>
                          <SelectItem value="1k-10k">1.000 a 10.000 clientes</SelectItem>
                          <SelectItem value="10k+">Mais de 10.000 clientes</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="desafios"
                render={() => (
                  <FormItem>
                    <div className="mb-4 text-sm font-semibold">Qual seu maior desafio atual?</div>
                    <div className="grid grid-cols-2 gap-4">
                      {challenges.map((challenge) => (
                        <FormField
                          key={challenge.id}
                          control={form.control}
                          name="desafios"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={challenge.id}
                                className="flex flex-row items-start space-x-3 space-y-0 rounded-lg border p-4 hover:bg-slate-50 transition-colors"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(challenge.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, challenge.id])
                                        : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== challenge.id
                                          )
                                        )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal cursor-pointer w-full">
                                  {challenge.label}
                                </FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {showOutroInput && (
                <FormField
                  control={form.control}
                  name="outroDesafio"
                  render={({ field }) => (
                    <FormItem className="animate-in fade-in slide-in-from-top-2 duration-300">
                      <FormLabel>Descreva seu desafio</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Fale brevemente sobre sua necessidade..."
                          {...field}
                          className="bg-slate-50 border-accent/20 focus:border-accent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <Button type="submit" className="w-full bg-primary text-white py-8 text-lg font-bold shadow-2xl shadow-primary/20 transition-all hover:scale-[1.01]" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Processando...
                  </>
                ) : (
                  "Solicitar Diagnóstico Técnico"
                )}
              </Button>
            </form>
          </Form>

          <p className="text-center text-xs text-slate-400 font-light italic">
            Ao enviar este formulário, você concorda que a Talos AI processará seus dados para fins de agendamento diagnósitico sob conformidade com a LGPD.
          </p>
        </div>
      </div>
    </div>
  )
}
