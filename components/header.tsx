"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import VegaLogo from "@/components/vega-logo"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { whatsappContactUrl } from "@/lib/contact"

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#about", label: "Quem somos" },
  { href: "#services", label: "Serviços" },
  { href: "#faq", label: "Dúvidas" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#101010]">
      <div className="container mx-auto flex h-24 items-center justify-between px-6">
        <Link href="#inicio" aria-label="Vega — Início" onClick={() => setMobileMenuOpen(false)}><VegaLogo /></Link>
        <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-[#b9b9b9] transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="hidden rounded-sm bg-[#d32f2f] px-6 text-white hover:bg-[#c62828] md:inline-flex">
          <Link href={whatsappContactUrl} target="_blank" rel="noopener noreferrer">Contato</Link>
        </Button>
        <button
          className="rounded-sm p-3 text-white md:hidden"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <nav id="mobile-navigation" aria-label="Navegação móvel" hidden={!mobileMenuOpen} className="border-t border-white/10 bg-[#101010] px-6 pb-6 md:hidden">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="block border-b border-white/10 py-4 text-base text-gray-200" onClick={() => setMobileMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Button asChild className="mt-5 w-full rounded-sm bg-[#d32f2f] text-white hover:bg-[#c62828]">
          <Link href={whatsappContactUrl} target="_blank" rel="noopener noreferrer">Contato</Link>
        </Button>
      </nav>
    </header>
  )
}
