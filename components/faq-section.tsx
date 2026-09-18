"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
  return (
    <section id="faq" className="vega-section">
      <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div>
          <p className="vega-eyebrow mb-4">FAQ</p>
          <h2 className="vega-heading">Perguntas frequentes</h2>
        </div>
        <Accordion type="single" collapsible className="border-t border-white/20">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/15">
              <AccordionTrigger className="py-6 text-left text-base font-medium text-white hover:text-[#ff6f61] hover:no-underline md:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl pr-6 pb-6 text-base leading-relaxed text-[#b9b9b9]">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
