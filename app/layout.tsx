import type React from "react"
import type { Metadata, Viewport } from "next"
import { Archivo_Black, Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { faqs } from "@/lib/faqs"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
})

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
  display: "swap",
})

const siteUrl = "https://www.vegasolucoes.com.br"
const title = "Vega Soluções Empresariais"
const description =
  "Infraestrutura, redes e segurança gerenciadas para empresas. E automações, agentes e sistemas sob medida para a sua operação."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Vega",
  },
  description,
  applicationName: title,
  authors: [{ name: title }],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: title,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#0B0810",
  colorScheme: "dark",
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organizacao`,
      name: title,
      url: siteUrl,
      description,
      sameAs: ["https://www.instagram.com/vegasolucoes_"],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.variable} ${archivoBlack.variable} font-sans`}>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-brand focus:px-4 focus:py-2 focus:font-semibold focus:text-brand-ink"
        >
          Pular para o conteúdo
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Analytics />
      </body>
    </html>
  )
}
