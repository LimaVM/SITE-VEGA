import Reveal from "@/components/reveal"
import TechCarousel from "@/components/tech-carousel"

export default function TechnologiesSection() {
  return (
    <section id="tecnologias" aria-labelledby="tecnologias-titulo" className="slide bg-deep">
      <div className="container-vega">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">Base tecnológica</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="tecnologias-titulo" className="heading-section mt-5 text-white">
              As ferramentas que sustentam o trabalho
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-[1.8] text-ice">
              Da rede à nuvem, trabalhamos com plataformas consolidadas — e desenvolvemos por cima
              delas o que a sua operação precisa.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-14">
        <TechCarousel />
      </Reveal>
    </section>
  )
}
