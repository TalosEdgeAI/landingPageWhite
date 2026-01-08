export default function LandingPageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-white">
            {/* Note que NÃO importamos Navbar ou Footer aqui propositalmente */}
            {/* Google Ads tag já está no layout principal (app/layout.tsx) */}
            <main>{children}</main>
        </div>
    )
}
