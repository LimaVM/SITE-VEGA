import Link from "next/link"
import { ArrowRight, Mail, Phone, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import VegaLogo from "@/components/vega-logo"
import Reveal from "@/components/reveal"
import {
  whatsappContactUrl,
  whatsappNumber,
  whatsappDisplay,
  contactEmail,
  instagramHandle,
  instagramUrl,
} from "@/lib/contact"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#manifesto", label: "O nome" },
  { href: "#vega", label: "A Vega" },
  { href: "#redes", label: "Redes e infraestrutura" },
  { href: "#sistemas", label: "Órbita e Pulsar" },
  { href: "#solucoes", label: "Soluções empresariais" },
  { href: "#instagram", label: "Instagram" },
  { href: "#faq", label: "Perguntas frequentes" },
]

export default function Footer() {
  return (
    <footer className="bg-deep pt-20 md:pt-28">
      <div className="container-vega">
        <Reveal>
          <div className="border-b border-white/15 pb-16 md:pb-20">
            <p className="max-w-3xl text-pretty text-2xl leading-[1.45] text-ice sm:text-3xl md:text-4xl md:leading-[1.35]">
              Quando sua operação depende da internet, você não precisa de alguém que apareça.{" "}
              <span className="text-white">Precisa de alguém que não falhe.</span>
            </p>
            <Button
              asChild
              className="group mt-10 h-13 rounded-sm bg-brand px-7 text-base font-semibold text-brand-ink hover:bg-brand-hover"
            >
              <Link
                href={whatsappContactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Falar com a Vega
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] lg:gap-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <VegaLogo className="h-8 w-auto text-white" />
            <p className="mt-6 max-w-sm text-sm leading-[1.8] text-ice/80">
              Infraestrutura, redes e segurança gerenciadas para empresas — com sistemas de
              monitoramento e backup desenvolvidos por nós. E o desenvolvimento do que a sua
              operação precisa e não existe pronto.
            </p>
          </div>

          <nav aria-labelledby="rodape-navegacao">
            <h2 id="rodape-navegacao" className="text-sm font-semibold text-white">
              Navegar
            </h2>
            <ul className="mt-6 space-y-4">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ice/80 transition-colors hover:text-brand">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-white">Contato</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="flex items-center gap-3 text-ice/80 transition-colors hover:text-brand"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${whatsappNumber}`}
                  className="flex items-center gap-3 text-ice/80 transition-colors hover:text-brand"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-ice/80 transition-colors hover:text-brand"
                >
                  <Instagram className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-8">
          <p className="text-sm text-ice/60">
            © {new Date().getFullYear()} Vega Soluções Empresariais — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
