import { Plus } from "lucide-react"
import Reveal from "@/components/reveal"
import { faqs } from "@/lib/faqs"

/*
  <details> nativo em vez de accordion controlado: as respostas ficam no HTML
  (o Radix so' monta o conteudo ao abrir, o que as escondia do Google e de
  quem navega sem JS) e o comportamento de expandir nao depende de script.
*/
export default function FaqSection() {
  return (
    <section id="faq" className="slide on-light">
      <div className="container-vega grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">Dúvidas</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-section mt-5">Perguntas frequentes</h2>
          </Reveal>
        </div>

        <Reveal className="border-t border-current/20">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-current/15">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-base font-semibold transition-colors hover:text-brand md:text-lg [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus
                  className="h-5 w-5 shrink-0 text-brand transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-2xl pb-6 pr-6 text-base leading-[1.8]">{faq.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
