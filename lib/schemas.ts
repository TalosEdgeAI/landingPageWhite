import { z } from "zod"

export const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Nome completo é obrigatório" }),
    email: z.string().email({ message: "E-mail corporativo inválido" }),
    empresa: z.string().min(2, { message: "Nome da empresa é obrigatório" }),
    tamanhoOperacao: z.enum(["Até R$100 mil", "R$100 mil – R$500 mil", "R$500 mil – R$2 milhões", "Acima de R$2 milhões"], {
        required_error: "Selecione o tamanho da operação",
    }),
    ticketMedio: z.enum(["Até R$100", "R$100 – R$500", "R$500 – R$2.000", "Acima de R$2.000"]).optional(),
    dorPrincipal: z.enum([
        "Inadimplência / atrasos recorrentes",
        "Cancelamento de clientes (churn)",
        "Crescer receita na base atual (LTV / Upsell)",
        "Não sei exatamente — preciso de um diagnóstico"
    ], {
        required_error: "Selecione a dor principal",
    }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
