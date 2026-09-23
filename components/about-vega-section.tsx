import Reveal from "@/components/reveal"

const partners = [
  {
    name: "João Guilherme",
    role: "IA Engineer",
    detail: "Automações, integrações de modelos de linguagem e a ponte com quem contrata.",
  },
  {
    name: "Guilherme Lima",
    role: "DevOps",
    detail: "Nuvem, entrega contínua e os sistemas que a Vega coloca de pé.",
  },
  {
    name: "Igor Batista",
    role: "Redes e Segurança da Informação",
    detail: "Roteamento, firewall e o desenho da rede que sustenta a operação.",
  },
]

export default function AboutVegaSection() {
  return (
    <section id="vega" className="slide on-light">
      <div className="container-vega">
        <div className="grid gap-10 md:grid-cols-2 md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow">A Vega</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-section mt-5">
                Três pessoas, duas frentes, nada terceirizado.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-base leading-[1.8] md:max-w-md md:justify-self-end">
              Infraestrutura e desenvolvimento na mesma casa. É o que nos deixa resolver o problema
              onde ele está, em vez de abrir chamado com o fornecedor de alguém.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-lg bg-current/15 sm:grid-cols-3">
          {partners.map((partner, index) => (
            <Reveal as="li" key={partner.name} delay={index * 0.06} className="bg-paper p-7">
              <p className="font-display text-xl">{partner.name}</p>
              <p className="mt-2 text-sm font-semibold text-brand">{partner.role}</p>
              <p className="mt-4 text-sm leading-[1.75]">{partner.detail}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
