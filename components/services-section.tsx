"use client"

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
import { useEffect, useRef, useState } from "react"

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
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisibleCards((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]") ?? []
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#e53935]/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10" ref={sectionRef}>
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e53935]/10 border border-[#e53935]/30 mb-6">
            <span className="w-2 h-2 bg-[#e53935] rounded-full animate-pulse" />
            <span className="text-sm text-[#e53935] font-medium">Nossos Serviços</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            O que <span className="gradient-text">Oferecemos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Tecnologia acompanhada de ponta a ponta para dar mais tranquilidade à sua operação.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`glass-card rounded-2xl p-8 group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-[#e53935]/50 ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Icon container */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                  boxShadow: `0 0 30px ${service.color}20`,
                }}
              >
                <service.icon
                  className="w-7 h-7 transition-all duration-300 group-hover:scale-110"
                  style={{ color: service.color }}
                />
              </div>

              {/* Content */}
              <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-[#e53935] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>

              {/* Hover effect line */}
              <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-[#e53935] to-[#ff6f61] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
