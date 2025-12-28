import { z } from "zod"

export const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Nome completo é obrigatório" }),
    email: z.string().email({ message: "E-mail corporativo inválido" }),
    empresa: z.string().min(2, { message: "Nome da empresa é obrigatório" }),
    volumeClientes: z.enum(["<1k", "1k-10k", "10k+"], {
        required_error: "Selecione o volume de clientes",
    }),
    desafios: z.array(z.string()).min(1, { message: "Selecione pelo menos um desafio" }),
    outroDesafio: z.string().optional(),
    message: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
