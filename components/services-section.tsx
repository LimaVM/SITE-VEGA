import {
  Server,
  Cloud,
  Activity,
  Users,
  Network,
  Shield,
  Lock,
  Database,
  Monitor,
} from "lucide-react"

const services = [
  {
    icon: Server,
    title: "Infraestrutura Gerenciada",
    description: "Acompanhamos servidores e ambientes de TI para manter a operação estável e organizada.",
    color: "#e53935",
  },
  {
    icon: Activity,
    title: "Monitoramento Proativo",
    description: "Observamos disponibilidade, desempenho e alertas para identificar problemas antes que afetem a rotina.",
    color: "#ff6f61",
  },
  {
    icon: Users,
    title: "Suporte ao Usuário",
    description: "Ajudamos sua equipe a resolver incidentes e solicitações do dia a dia com atendimento remoto.",
    color: "#e53935",
  },
  {
    icon: Shield,
    title: "Segurança Gerenciada",
    description: "Acompanhamos controles de proteção e reforçamos a segurança de dispositivos, servidores e acessos.",
    color: "#ff6f61",
  },
  {
    icon: Network,
    title: "Redes Corporativas",
    description: "Gerenciamos a conectividade entre escritórios, usuários e serviços para uma operação mais confiável.",
    color: "#e53935",
  },
  {
    icon: Lock,
    title: "Identidade e Acessos",
    description: "Organizamos permissões e acessos para que cada pessoa utilize os recursos de que precisa com segurança.",
    color: "#ff6f61",
  },
  {
    icon: Database,
    title: "Backup e Recuperação",
    description: "Acompanhamos rotinas de backup e planos de recuperação para proteger informações essenciais.",
    color: "#e53935",
  },
  {
    icon: Cloud,
    title: "Nuvem e Virtualização",
    description: "Administramos ambientes em nuvem e recursos virtuais com foco em disponibilidade e controle.",
    color: "#ff6f61",
  },
  {
    icon: Monitor,
    title: "Gestão de Dispositivos",
    description: "Cuidamos de estações de trabalho e atualizações para manter os equipamentos prontos para uso.",
    color: "#ff6f61",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="vega-section border-y border-white/10 bg-[#151515]">
      <div className="container mx-auto px-6">
        <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <p className="vega-eyebrow mb-4">Nossos Serviços</p>
            <h2 className="vega-heading">O que Oferecemos</h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-[#b9b9b9] md:justify-self-end">
            Tecnologia acompanhada de ponta a ponta para dar mais tranquilidade à sua operação.
          </p>
        </div>
        <div className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="border-t border-white/15 py-8 md:py-10">
              <service.icon className="mb-5 h-6 w-6 text-[#e53935]" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mb-3 text-xl font-semibold tracking-tight text-white">{service.title}</h3>
              <p className="text-base leading-relaxed text-[#b9b9b9]">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
