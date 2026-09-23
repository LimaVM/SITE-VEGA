import {
  Server,
  Network,
  Cloud,
  ShieldCheck,
  KeyRound,
  DatabaseBackup,
  Activity,
  Headset,
  type LucideIcon,
} from "lucide-react"
import Reveal from "@/components/reveal"

type Service = { title: string; description: string; icon: LucideIcon }

const services: Service[] = [
  {
    title: "Infraestrutura Gerenciada",
    description:
      "Servidores, virtualização e os serviços que a operação usa todo dia, acompanhados de perto para que problema apareça como aviso, não como parada.",
    icon: Server,
  },
  {
    title: "Redes Corporativas",
    description:
      "Conectividade entre unidades, usuários e sistemas: segmentação, roteamento e links redundantes desenhados para o tráfego que você realmente tem.",
    icon: Network,
  },
  {
    title: "Nuvem e Virtualização",
    description:
      "Ambientes em nuvem e máquinas virtuais dimensionados ao que você usa, com controle de acesso e de custo.",
    icon: Cloud,
  },
  {
    title: "Segurança Gerenciada",
    description:
      "Firewall, controle de borda e políticas de proteção em dispositivos e servidores, revisados conforme a operação muda.",
    icon: ShieldCheck,
  },
  {
    title: "Identidade e Acessos",
    description:
      "Quem acessa o quê, com qual permissão — e o que acontece no dia em que alguém entra ou sai da empresa.",
    icon: KeyRound,
  },
  {
    title: "Backup e Recuperação",
    description:
      "Rotina de cópia dos arquivos dos seus servidores, com retenção definida, verificação de integridade e teste de restauração — porque backup que ninguém testa não protege ninguém.",
    icon: DatabaseBackup,
  },
  {
    title: "Monitoramento",
    description:
      "Disponibilidade, desempenho e alertas do ambiente observados de forma contínua, para que a falha chegue até nós antes de chegar até você.",
    icon: Activity,
  },
  {
    title: "Retaguarda para o seu TI",
    description:
      "Trabalhamos com empresas que já têm um profissional ou uma equipe de TI. Entramos como especialista de apoio — em rede, segurança e infraestrutura — para quem já cuida do ambiente e precisa de reforço, não de substituto.",
    icon: Headset,
  },
]

export default function ServicesSection() {
  return (
    <section id="redes" className="slide bg-deep">
      <div className="container-vega">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">Redes e infraestrutura</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-section mt-5 text-white">
              A operação de TI que sua empresa não deveria precisar pensar.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-[1.8] text-ice sm:text-lg">
              Cuidamos de servidores, redes, nuvem e segurança de forma contínua — ao lado de quem
              já responde pela TI da sua empresa.
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal
                as="li"
                key={service.title}
                delay={Math.min(index, 5) * 0.04}
                className="flex flex-col gap-4 bg-deep p-6"
              >
                <Icon className="h-6 w-6 text-brand" aria-hidden="true" strokeWidth={1.5} />
                <div>
                  <h3 className="text-base font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-[1.7] text-ice/85">{service.description}</p>
                </div>
              </Reveal>
            )
          })}
        </ul>

        <Reveal>
          <blockquote className="mx-auto mt-14 max-w-2xl border-l-2 border-brand pl-6 sm:pl-8">
            <p className="text-base leading-[1.75] text-ice sm:text-lg">
              Rede boa é assim: ninguém percebe que existe. Ninguém comenta que o link está de pé,
              que o firewall barrou alguma coisa, que o failover chaveou às 3 da manhã e a operação
              nem sentiu.
            </p>
            <p className="mt-4 text-base leading-[1.75] text-white sm:text-lg">
              O trabalho bem feito em infraestrutura é invisível por definição. Só aparece quando
              falta.
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
