import Reveal from "@/components/reveal"

export default function ManifestoSection() {
  return (
    <section id="manifesto" className="slide relative overflow-hidden bg-deep">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(90%,60rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/60 to-transparent"
      />
      <div className="container-vega">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="eyebrow">O nome</p>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-8 text-xl leading-[1.7] text-ice sm:text-2xl sm:leading-[1.65]">
              A gente escolheu o nome antes de escolher o logo, a cor, o site.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-[1.75] text-ice/85 sm:text-xl">
              Vega é a estrela que serviu de régua pra todas as outras — o ponto zero da escala de
              brilho, a referência pela qual o resto do céu foi medido. E, por um acaso bonito da
              mecânica celeste, ela já foi a estrela do norte e vai ser de novo.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="heading-section mt-10 text-white">
              A estrela pela qual <span className="text-brand">se navega.</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
