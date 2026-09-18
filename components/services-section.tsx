const services = [
  {
    title: "Infraestrutura Gerenciada",
    description: "Acompanhamos servidores e ambientes de TI para manter a operação estável e organizada.",
  },
  {
    title: "Monitoramento Proativo",
    description: "Observamos disponibilidade, desempenho e alertas para identificar problemas antes que afetem a rotina.",
  },
  {
    title: "Suporte à sua equipe",
    description: "Ajudamos sua equipe a resolver incidentes, manter a rede protegida, otimizada e estável.",
  },
  {
    title: "Segurança Gerenciada",
    description: "Acompanhamos controles de proteção e reforçamos a segurança de dispositivos, servidores e acessos.",
  },
  {
    title: "Redes Corporativas",
    description: "Gerenciamos a conectividade entre escritórios, usuários e serviços para uma operação mais confiável.",
  },
  {
    title: "Identidade e Acessos",
    description: "Organizamos permissões e acessos para que cada pessoa utilize os recursos de que precisa com segurança.",
  },
  {
    title: "Backup e Recuperação",
    description: "Acompanhamos rotinas de backup e planos de recuperação para proteger informações essenciais.",
  },
  {
    title: "Nuvem e Virtualização",
    description: "Administramos ambientes em nuvem e recursos virtuais com foco em disponibilidade e controle.",
  },
  {
    title: "Gestão de Dispositivos",
    description: "Cuidamos de estações de trabalho e atualizações para manter os equipamentos prontos para uso.",
  },
]

const groups = [
  { id: "gestao", title: "Gestão", services: [services[0], services[4], services[7]] },
  { id: "protecao", title: "Proteção", services: [services[3], services[5], services[6]] },
  { id: "suporte", title: "Suporte", services: [services[1], services[2], services[8]] },
]

export default function ServicesSection() {
  return (
    <section id="services" className="vega-section vega-light border-t border-black/10 bg-[#f5f4f0]">
      <div className="container mx-auto px-6">
        <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end lg:mb-16">
          <div>
            <p className="vega-eyebrow mb-4">Nossos Serviços</p>
            <h2 className="vega-heading">O que Oferecemos</h2>
          </div>
          <p className="max-w-md text-base leading-[1.8] text-[#595955] md:justify-self-end md:text-lg">
            Tecnologia acompanhada de ponta a ponta para dar mais tranquilidade à sua operação.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-black/15">
          {groups.map((group, index) => (
            <section id={group.id} key={group.id} aria-labelledby={`${group.id}-heading`} className="service-group lg:px-8 lg:first:pl-0 lg:last:pr-0">
              <div className="mb-7 flex items-baseline justify-between border-b-2 border-[#242424] pb-5">
                <h3 id={`${group.id}-heading`} className="text-3xl font-medium tracking-tight text-[#171717]">{group.title}</h3>
                <span className="font-mono text-xs text-[#bd302d]" aria-hidden="true">0{index + 1}</span>
              </div>
              <div className="space-y-8">
                {group.services.map((service) => (
                  <article key={service.title}>
                    <h4 className="mb-3 text-base font-bold text-[#242424]">{service.title}</h4>
                    <p className="text-sm leading-[1.8] text-[#595955]">{service.description}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
