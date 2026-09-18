import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" })
const siteUrl = "https://site-vega.vercel.app"
const title = "Vega Network | Serviços Gerenciados de TI"
const description =
  "Serviços gerenciados de TI para empresas: monitoramento, suporte, segurança, backup e gestão de infraestrutura e nuvem."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Vega Network",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
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
