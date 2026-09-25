import { ShieldCheck, Blocks, Clock } from "lucide-react"
import Reveal from "@/components/reveal"

const gaps = [
  {
    icon: ShieldCheck,
    title: "Segurança",
    detail: "Proteção pensada desde o projeto, e não remendada depois do incidente.",
  },
  {
    icon: Blocks,
    title: "Sistemas sob medida",
    detail: "Ferramentas feitas para o jeito como a sua empresa trabalha — e não o contrário.",
  },
  {
    icon: Clock,
    title: "Tempo de volta",
    detail: "Menos horas apagando incêndio, mais horas cuidando do que faz o negócio andar.",
  },
]

/** Estrela do simbolo da Vega (mesmo traco do logo). */
function VegaStar({ className }: { className?: string }) {
  return (
    <svg viewBox="102.69 93.51 91.23 98.43" className={className} aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M 193.92,142.73 C 173.39,142.73 148.31,169.8 148.31,191.94 C 148.31,169.8 123.22,142.73 102.69,142.73 C 123.22,142.73 148.31,115.66 148.31,93.51 C 148.31,115.66 173.39,142.73 193.92,142.73 Z"
      />
    </svg>
  )
}

/*
  Um caminho de leitura so': titulo fixo a esquerda e a historia em capitulos
  numerados a direita, todos com a mesma hierarquia. O fecho fica numa faixa propria.
*/
export default function CompanySection() {
  return (
    <section id="quem-somos" className="slide relative bg-deep">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(90%,60rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/60 to-transparent"
      />
      <div className="container-vega">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="eyebrow">A Vega</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="heading-section mt-5 text-white">
                  O parceiro que resolve o problema —{" "}
                  <span className="text-brand">sem criar outro no lugar.</span>
                </h2>
              </Reveal>
            </div>
          </div>

          <ol className="border-t border-white/10 lg:col-span-7">
            <Chapter number="01" title="Por que nascemos">
              <p>
                A Vega Soluções Empresariais nasceu para resolver uma queixa que quase toda empresa
                tem: o fornecedor que, em vez de tirar o problema da frente, cria mais um.
              </p>
            </Chapter>

            <Chapter number="02" title="Quem somos">
              <p>
                Um grupo de amigos com anos de estrada dentro de provedores de internet e empresas
                de tecnologia. Foi lá de dentro que enxergamos o que faltava no mercado.
              </p>
            </Chapter>

            <Chapter number="03" title="O que enxergamos de dentro">
              <p>
                Três lacunas que se repetiam de empresa em empresa. Juntamos o que cada um sabe
                fazer para cobrir exatamente essas:
              </p>
              <ul className="mt-6 space-y-5">
                {gaps.map(({ icon: Icon, title, detail }) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand/10">
                      <Icon className="h-5 w-5 text-brand" aria-hidden="true" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{title}</p>
                      <p className="mt-1 text-sm leading-[1.7] text-ice/85 sm:text-base">{detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Chapter>

            <Chapter number="04" title="Por que “Vega”">
              <p>
                Vega é a estrela que a astronomia usa como ponto zero para medir o brilho das
                outras: a referência pela qual o resto do céu é comparado. É esse o papel que
                queremos ter na tecnologia da sua empresa.
              </p>
            </Chapter>
          </ol>
        </div>

        <Reveal>
          <div className="mt-6 border-t border-white/10 pt-14 lg:mt-8">
            <VegaStar className="h-8 w-8 text-brand" />
            <p className="mt-6 max-w-4xl text-pretty text-2xl font-semibold leading-[1.35] tracking-[-0.02em] text-white sm:text-3xl">
              Não queremos ser só mais um contratado, nem ter você como mais um nome na carteira.{" "}
              <span className="text-brand">Queremos ser o parceiro que a sua empresa sempre quis.</span>
            </p>
            <p className="mt-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-ice/80">
              <span aria-hidden="true" className="h-px w-10 bg-brand" />
              Isso é a Vega Soluções Empresariais.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Chapter({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <Reveal
      as="li"
      className="grid grid-cols-[2.75rem_1fr] gap-x-4 border-b border-white/10 py-8 last:border-b-0 sm:grid-cols-[3.5rem_1fr] sm:py-10"
    >
      <span className="pt-1 font-mono text-sm text-brand">{number}</span>
      <div>
        <h3 className="text-lg font-semibold text-white sm:text-xl">{title}</h3>
        <div className="mt-3 text-base leading-[1.8] text-ice sm:text-lg">{children}</div>
      </div>
    </Reveal>
  )
}
