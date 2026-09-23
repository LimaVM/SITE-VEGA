import { Workflow, BrainCircuit, Gauge, MessagesSquare, Bot, Blocks, type LucideIcon } from "lucide-react"
import Reveal from "@/components/reveal"

type Solution = { title: string; description: string; icon: LucideIcon }

const solutions: Solution[] = [
  {
    title: "Automações",
    description:
      "Tarefa que alguém refaz toda semana, do mesmo jeito, é tarefa que não precisa de gente. Mapeamos o processo e o transformamos em rotina que roda sozinha — e avisa quando falha.",
    icon: Workflow,
  },
  {
    title: "Integrações de LLM",
    description:
      "Modelos de linguagem ligados aos seus dados e sistemas, não a um chat genérico. É a diferença entre uma IA que responde qualquer coisa e uma que responde sobre a sua operação.",
    icon: BrainCircuit,
  },
  {
    title: "Sites de alta performance",
    description:
      "Site que carrega rápido, aparece na busca e funciona no celular de quem está com pressa. Construído do zero, sem tema pronto arrastando peso que você não usa.",
    icon: Gauge,
  },
  {
    title: "Bots",
    description:
      "Atendimento e rotinas nos canais que sua empresa já usa, com caminho claro para falar com uma pessoa quando o assunto sai do script.",
    icon: MessagesSquare,
  },
  {
    title: "Agentes",
    description:
      "Um passo além do bot: agentes que consultam sistemas, executam ações e devolvem o resultado — com registro do que fizeram e limite do que podem fazer.",
    icon: Bot,
  },
  {
    title: "Sistemas sob medida",
    description:
      "Quando a planilha compartilhada já não dá conta e nenhum software de prateleira encaixa, construímos a ferramenta na medida do processo que você já tem.",
    icon: Blocks,
  },
]

export default function SolutionsSection() {
  return (
    <section id="solucoes" className="slide on-light">
      <div className="container-vega">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow">Soluções empresariais</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-section mt-5">
                Depois que a base está de pé, dá para construir em cima.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-base leading-[1.8] md:justify-self-end md:max-w-md">
              Infraestrutura confiável é o começo. A partir dela, desenvolvemos o que a sua operação
              precisa e não existe pronto na prateleira.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <Reveal as="li" key={solution.title} delay={Math.min(index, 5) * 0.05}>
                <Icon className="h-6 w-6 text-brand" aria-hidden="true" strokeWidth={1.5} />
                <h3 className="mt-5 border-b border-current/15 pb-4 text-lg font-semibold">
                  {solution.title}
                </h3>
                <p className="mt-4 text-sm leading-[1.8]">{solution.description}</p>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
