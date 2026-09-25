import Reveal from "@/components/reveal"

export default function InvisibleNetworkSection() {
  return (
    <section id="rede-invisivel" className="slide relative overflow-hidden bg-deep">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--brand)_12%,transparent)_0%,transparent_60%)]"
      />
      <div className="container-vega relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">O que entregamos</p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="heading-display mt-6 text-white">
              Rede boa <span className="text-brand">não aparece.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-10 max-w-2xl text-lg leading-[1.75] text-ice sm:text-xl">
              Ninguém comenta que o link passou o dia inteiro de pé. Que o firewall barrou uma
              tentativa de acesso no meio da tarde. Que o failover chaveou às 3 da manhã e a
              operação nem percebeu.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-[1.75] text-white sm:text-xl">
              Infraestrutura bem feita é invisível por definição — só vira assunto quando falta. O
              nosso trabalho é fazer com que ela continue invisível.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
