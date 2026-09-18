import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" })

export const metadata: Metadata = {
  title: "Vega Network | Serviços Gerenciados de TI",
  description:
    "Serviços gerenciados de TI para empresas: monitoramento, suporte, segurança, backup e gestão de infraestrutura e nuvem.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${jetbrains.variable} font-mono antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
