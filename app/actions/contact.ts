"use server"

import { contactFormSchema } from "@/lib/schemas"

export async function submitContactForm(data: unknown) {
    const result = contactFormSchema.safeParse(data)

    if (!result.success) {
        return {
            success: false,
            message: "Por favor, verifique os campos e tente novamente.",
            errors: result.error.flatten().fieldErrors,
        }
    }

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would send the email or save to database
    // e.g., await sendEmail(result.data)

    console.log("Form submitted:", result.data)

    return {
        success: true,
        message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
    }
}
