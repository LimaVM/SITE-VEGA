import Link from "next/link"
import { Button } from "@/components/ui/button"
import VegaLogo from "@/components/vega-logo"
import { whatsappContactUrl } from "@/lib/contact"
import { ArrowRight, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#101010] pt-16 pb-8 md:pt-24">

      <div className="container mx-auto px-6 mb-20 relative z-10">
        <div className="border-b border-white/20 pb-14 md:pb-20">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            <div>
              <h3 className="max-w-2xl text-4xl md:text-5xl text-white font-medium tracking-[-0.04em] leading-tight mb-5">
                Pronto para <span className="text-[#f05b50]">simplificar</span> sua TI?
              </h3>
              <p className="text-gray-400">Converse com a Vega sobre os serviços gerenciados para sua empresa.</p>
            </div>
            <Button
              asChild
              className="vega-button shrink-0 bg-white hover:bg-[#ecece8] text-[#171717] group"
            >
              <Link href={whatsappContactUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Fale Conosco
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-20 mb-16">
          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
            <VegaLogo />
            <p className="text-gray-400 text-sm leading-relaxed">
              Serviços gerenciados de TI para empresas. Cuidamos de infraestrutura, segurança e suporte para sua
              equipe trabalhar com confiança.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              Explore
            </h3>
            <ul className="space-y-4">
              {[
                { href: "#inicio", label: "Início" },
                { href: "#about", label: "Quem somos" },
                { href: "#services", label: "Serviços" },
                { href: "#faq", label: "Perguntas frequentes" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-[#e53935] text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              Contato
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a href="mailto:contato@vega.network" className="flex items-center gap-3 hover:text-[#e53935] transition-colors">
                  <Mail className="w-4 h-4 text-[#e53935]" />
                  contato@vega.network
                </a>
              </li>
              <li>
                <a href="tel:+559381155696" className="flex items-center gap-3 hover:text-[#e53935] transition-colors">
                  <Phone className="w-4 h-4 text-[#e53935]" />
                  +55 93 8115-5696
                </a>
              </li>
              <li>
                <a href={whatsappContactUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#e53935] transition-colors">
                  Conversar pelo WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800/50 text-center md:text-left">
          <p className="text-gray-500 text-sm">© Vega Network — Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
