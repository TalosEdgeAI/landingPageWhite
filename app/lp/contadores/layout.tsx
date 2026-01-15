import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Automação com IA para Contabilidade | Talos",
    description: "Elimine a digitação manual, blinde sua operação contra multas e venda consultoria financeira de alto valor. Tecnologia Talos para escritórios de contabilidade.",
    openGraph: {
        title: "Automação com IA para Contabilidade | Talos",
        description: "Transforme seu escritório em uma fintech de contabilidade com IA.",
        type: "website",
    },
}

export default function ContadoresLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-white">
            <main>{children}</main>
        </div>
    )
}
