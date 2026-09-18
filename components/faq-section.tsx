"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useEffect, useRef, useState } from "react"
import { MessageCircle } from "lucide-react"

const faqs = [
  {
    question: "O que são serviços gerenciados de TI?",
    answer:
      "É o acompanhamento contínuo do ambiente de TI da sua empresa. A Vega reúne monitoramento, manutenção, suporte e segurança para manter pessoas e sistemas trabalhando bem.",
  },
  {
    question: "Vocês podem assumir a gestão da nossa TI atual?",
    answer:
      "Sim. Começamos entendendo os equipamentos, sistemas e processos existentes. A partir desse levantamento, definimos com você o escopo de gestão e as prioridades da operação.",
  },
  {
    question: "Quais partes do ambiente podem ser gerenciadas?",
    answer:
      "Podemos acompanhar estações de trabalho, servidores, redes corporativas, ambientes em nuvem, backups e controles de acesso. O plano é ajustado às necessidades da sua empresa.",
  },
  {
    question: "Como funciona o suporte aos usuários?",
    answer:
      "Sua equipe pode acionar o suporte para incidentes e solicitações do dia a dia. Os canais, horários e níveis de atendimento são definidos no plano contratado.",
  },
  {
    question: "Como vocês cuidam de segurança e backup?",
    answer:
      "Avaliamos os controles existentes, acompanhamos rotinas de proteção e verificamos a estratégia de backup e recuperação. As ações recomendadas dependem dos riscos e prioridades do seu ambiente.",
  },
  {
    question: "Como começa a gestão dos serviços?",
    answer:
      "Conversamos sobre sua operação, mapeamos o ambiente e definimos responsabilidades, serviços e próximos passos. Assim, a transição acontece com clareza para sua equipe.",
  },
]

export default function FaqSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="faq" className="py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e53935]/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e53935]/10 border border-[#e53935]/30 mb-6">
            <MessageCircle className="w-4 h-4 text-[#e53935]" />
            <span className="text-sm text-[#e53935] font-medium">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white font-bold">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={`glass-card rounded-2xl px-6 overflow-hidden transition-all duration-500 data-[state=open]:border-[#e53935]/50 data-[state=open]:glow-red ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <AccordionTrigger className="text-white hover:no-underline text-left py-6 hover:text-[#e53935] transition-colors">
                <span className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#e53935]/20 flex items-center justify-center text-[#e53935] text-sm font-bold">
                    {index + 1}
                  </span>
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pb-6 pl-12">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
