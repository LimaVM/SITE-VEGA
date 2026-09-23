"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import VegaLogo from "@/components/vega-logo"
import { whatsappContactUrl } from "@/lib/contact"

const links = [
  { href: "#vega", label: "A Vega" },
  { href: "#redes", label: "Redes" },
  { href: "#sistemas", label: "Sistemas" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#faq", label: "Dúvidas" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-white/10 bg-deep/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-vega flex h-20 items-center justify-between">
        <Link href="#inicio" aria-label="Vega — Início" onClick={() => setOpen(false)}>
          <VegaLogo className="h-7 w-auto text-white" title={null} />
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ice transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button
          asChild
          className="hidden rounded-sm bg-brand px-6 font-semibold text-brand-ink hover:bg-brand-hover md:inline-flex"
        >
          <Link href={whatsappContactUrl} target="_blank" rel="noopener noreferrer">
            Falar com a Vega
          </Link>
        </Button>

        <button
          type="button"
          className="-mr-2 rounded-sm p-3 text-white md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-movel"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <nav
        id="menu-movel"
        aria-label="Navegação móvel"
        hidden={!open}
        className="border-t border-white/10 bg-deep px-4 pb-6 md:hidden"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block border-b border-white/10 py-4 text-base text-ice"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Button
          asChild
          className="mt-5 w-full rounded-sm bg-brand font-semibold text-brand-ink hover:bg-brand-hover"
        >
          <Link href={whatsappContactUrl} target="_blank" rel="noopener noreferrer">
            Falar com a Vega
          </Link>
        </Button>
      </nav>
    </header>
  )
}
