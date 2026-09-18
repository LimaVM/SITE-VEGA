import Link from "next/link"
import { Button } from "@/components/ui/button"
import VegaLogo from "@/components/vega-logo"
import { whatsappContactUrl } from "@/lib/contact"
import { ArrowRight, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] pt-16 pb-8 md:pt-20">

      <div className="container mx-auto px-6 mb-20 relative z-10">
        <div className="border-l-2 border-[#e53935] pl-6 py-2 md:pl-10">
          <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-8">
            <div>
              <h3 className="text-3xl md:text-4xl text-white font-semibold tracking-tight mb-4">
                Pronto para <span className="text-white">simplificar</span> sua TI?
              </h3>
              <p className="text-gray-400">Converse com a Vega sobre os serviços gerenciados para sua empresa.</p>
            </div>
            <Button
              asChild
              className="vega-button shrink-0 bg-[#e53935] hover:bg-[#c62828] text-white group"
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
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <VegaLogo />
            <p className="text-gray-400 text-sm leading-relaxed">
              Serviços gerenciados de TI para empresas. Cuidamos de infraestrutura, segurança e suporte para sua
              equipe trabalhar com confiança.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#e53935] rounded-full" />
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
              <span className="w-2 h-2 bg-[#e53935] rounded-full" />
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
                <a href="tel:+5577999105385" className="flex items-center gap-3 hover:text-[#e53935] transition-colors">
                  <Phone className="w-4 h-4 text-[#e53935]" />
                  +55 77 99910-5385
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
