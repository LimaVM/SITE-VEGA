import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { whatsappContactUrl } from "@/lib/contact"

export default function AboutSection() {
  return (
    <section id="about" className="vega-section">

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-sm lg:order-1">
            <Image
              src="/team-meeting-in-modern-office-with-people-discussi.webp"
              alt="Equipe em reunião"
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div
            className="order-1 space-y-6 lg:order-2"
          >
            <div className="vega-eyebrow">
              <span className="text-inherit">Sobre nós</span>
            </div>

            <h2 className="vega-heading">
              Quem <span className="text-white">somos?</span>
            </h2>

            <div className="space-y-4 text-[#b9b9b9] text-base leading-relaxed">
              <p>
                Na <span className="text-[#e53935] font-semibold">Vega</span>, cuidamos da operação de TI de empresas
                que precisam de tecnologia confiável para trabalhar e crescer. Unimos monitoramento, suporte e
                segurança para reduzir interrupções e dar mais visibilidade ao ambiente.
              </p>
              <p>
                Atuamos de forma contínua em estações de trabalho, servidores, redes e nuvem. Entendemos o seu
                ambiente, organizamos prioridades e acompanhamos a evolução da infraestrutura junto com a sua equipe.
              </p>
            </div>

            <Button
              asChild
              className="vega-button bg-transparent border border-white/25 text-white hover:bg-white/5"
            >
              <Link
                href={whatsappContactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Começar agora
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
