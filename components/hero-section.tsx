import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { whatsappContactUrl } from "@/lib/contact"

const pillars = [
  { title: "Gestão", description: "Infraestrutura e nuvem", href: "#gestao" },
  { title: "Proteção", description: "Dados e ambientes", href: "#protecao" },
  { title: "Suporte", description: "Pessoas e operações", href: "#suporte" },
]

export default function HeroSection() {
  return (
    <section id="inicio" className="bg-[#101010] pt-36 pb-16 md:pt-44 md:pb-24">
      <div className="container mx-auto grid gap-14 px-6 lg:grid-cols-[1.7fr_1fr] lg:items-end lg:gap-24">
        <div>
          <p className="mb-8 flex items-center gap-3 text-sm font-medium text-[#d6d6d6]">
            <span className="h-px w-8 bg-[#d32f2f]" aria-hidden="true" />Serviços Gerenciados de TI
          </p>
          <h1 className="text-[3.3rem] font-medium leading-[1.05] tracking-[-0.055em] text-white sm:text-7xl xl:text-[5.8rem]">
            Sua TI em<br /><span className="text-[#f05b50]">boas mãos.</span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-[1.8] text-[#b9b9b9] md:text-lg">
            Monitoramos, protegemos e damos suporte à tecnologia da sua empresa.
            <span className="text-white"> Você foca no negócio; nós cuidamos da TI.</span>
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-7">
            <Button asChild className="vega-button bg-[#d32f2f] text-white hover:bg-[#c62828]">
              <Link href={whatsappContactUrl} target="_blank" rel="noopener noreferrer">
                Fale Conosco <ArrowUpRight className="h-5 w-5" />
              </Link>
            </Button>
            <Link href="#services" className="inline-flex min-h-12 items-center justify-center gap-3 text-sm font-medium text-white underline-offset-8 hover:underline sm:justify-start">
              Ver Serviços <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <nav aria-label="Áreas de atuação" className="border-t border-white/20 lg:mb-1">
          {pillars.map((pillar, index) => (
            <Link key={pillar.title} href={pillar.href} className="group flex items-center gap-5 border-b border-white/20 py-6 transition-colors hover:bg-white/[0.03] lg:py-8">
              <span className="self-start pt-2 font-mono text-xs text-[#f05b50]" aria-hidden="true">0{index + 1}</span>
              <div className="flex-1">
                <p className="text-2xl font-medium tracking-tight text-white lg:text-3xl">{pillar.title}</p>
                <p className="mt-1 text-sm text-[#b9b9b9]">{pillar.description}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-[#b9b9b9] transition-colors group-hover:text-[#f05b50]" aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </div>
    </section>
  )
}
