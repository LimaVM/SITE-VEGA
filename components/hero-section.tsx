import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { whatsappContactUrl } from "@/lib/contact"

export default function HeroSection() {
  return (
    <section id="inicio" className="vega-hero pt-36 pb-16 md:pt-44 md:pb-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <p className="vega-eyebrow mb-7">Serviços Gerenciados de TI</p>
            <h1 className="max-w-3xl text-[3.5rem] font-semibold leading-[1.04] tracking-[-0.055em] text-white sm:text-7xl xl:text-[6rem]">
              Sua TI em<br />boas mãos<span className="text-[#e53935]">.</span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-[#b9b9b9] md:text-xl">
              Monitoramos, protegemos e damos suporte à tecnologia da sua empresa.
              <span className="text-white"> Você foca no negócio; nós cuidamos da TI.</span>
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="vega-button bg-[#e53935] text-white hover:bg-[#c62828]">
                <Link href={whatsappContactUrl} target="_blank" rel="noopener noreferrer">
                  Fale Conosco <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="vega-button border-white/25 bg-transparent text-white hover:bg-white/5 hover:text-white">
                <Link href="#services">Ver Serviços</Link>
              </Button>
            </div>
          </div>
          <div className="vega-brand-panel hidden items-center justify-center lg:flex" aria-hidden="true">
            <Image src="/images/vega-logo.webp" alt="" width={260} height={260} className="relative z-10 h-auto w-56 object-contain" />
          </div>
        </div>
        <div className="mt-14 grid grid-cols-3 gap-4 border-t border-white/15 pt-7 md:mt-20 md:gap-8">
          {[
            { number: "Gestão", label: "Infraestrutura e nuvem" },
            { number: "Proteção", label: "Dados e ambientes" },
            { number: "Suporte", label: "Pessoas e operações" },
          ].map((stat) => (
            <div key={stat.number}>
              <div className="mb-2 text-base font-semibold text-white md:text-lg">{stat.number}</div>
              <div className="text-xs leading-relaxed text-[#a3a3a3] md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
