import Image from "next/image"
import Link from "next/link"
import { Instagram, ArrowUpRight, Link2 } from "lucide-react"
import Reveal from "@/components/reveal"
import { instagramHandle, instagramUrl } from "@/lib/contact"

/*
  Posts recortados de um print real do perfil. A segunda fileira sai cortada
  no print; aqui ela fica sob um degrade, como a tela de um celular rolando.
  Contadores de seguidores ficam de fora de proposito: envelhecem no dia seguinte.
*/
const posts = [
  { src: "/images/instagram/post-1.webp", alt: "Post: Sua empresa sempre conectada", full: true },
  { src: "/images/instagram/post-2.webp", alt: "Post: astronauta da Vega", full: true },
  { src: "/images/instagram/post-3.webp", alt: "Post: Vamos turbinar sua rede?", full: true },
  { src: "/images/instagram/post-4.webp", alt: "Post: Firewall sem manutenção é só uma caixa com luz acesa", full: false },
  { src: "/images/instagram/post-5.webp", alt: "Post: Suporte especializado", full: false },
  { src: "/images/instagram/post-6.webp", alt: "Post: Mitigação DDoS para ASN", full: false },
]

export default function InstagramSection() {
  const handle = instagramHandle.replace("@", "")

  return (
    <section id="instagram" className="slide relative overflow-hidden bg-deep">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full bg-brand/15 blur-3xl"
      />
      <div className="container-vega relative grid items-center gap-14 lg:grid-cols-[1fr_auto] lg:gap-24">
        <div className="max-w-xl">
          <Reveal>
            <p className="eyebrow flex items-center gap-2">
              <Instagram className="h-4 w-4" aria-hidden="true" />
              No Instagram
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-section mt-5 text-white">
              Acompanhe o que a gente anda publicando.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-[1.8] text-ice sm:text-lg">
              Redes, segurança e cloud explicados sem rodeio — e os bastidores do que a Vega está
              construindo.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex h-12 items-center gap-2 rounded-sm bg-brand px-6 font-semibold text-brand-ink transition-colors hover:bg-brand-hover"
            >
              Seguir {instagramHandle}
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mx-auto w-full max-w-[22rem]">
          <Link
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir o perfil ${instagramHandle} no Instagram`}
            className="block rounded-[2.6rem] border border-white/15 bg-black p-2.5 shadow-2xl shadow-black/60 transition-transform duration-500 hover:-translate-y-1"
          >
            <div className="overflow-hidden rounded-[2.1rem] bg-[#0c0c0f]">
              <div className="flex justify-center pt-2.5" aria-hidden="true">
                <span className="h-5 w-24 rounded-full bg-black" />
              </div>

              <div className="px-4 pb-3 pt-3">
                <p className="text-center text-sm font-semibold text-white">{handle}</p>

                <div className="mt-4 flex items-center gap-4">
                  <Image
                    src="/images/instagram/avatar.webp"
                    alt=""
                    width={176}
                    height={176}
                    sizes="72px"
                    className="h-[4.5rem] w-[4.5rem] shrink-0 scale-[1.08] rounded-full object-cover"
                  />
                  <div className="min-w-0 text-[0.8rem] leading-snug text-white">
                    <p className="font-semibold">Vega</p>
                    <p className="mt-1 text-white/85">Soluções em TI para empresas</p>
                    <p className="text-white/85">Especialistas em redes, segurança e cloud</p>
                    <p className="mt-1 flex items-center gap-1 text-[#9fc2ff]">
                      <Link2 className="h-3 w-3" aria-hidden="true" />
                      vegasolucoes.com.br
                    </p>
                  </div>
                </div>

                <span className="mt-4 block rounded-lg bg-brand py-1.5 text-center text-[0.8rem] font-semibold text-brand-ink">
                  Seguir
                </span>
              </div>

              <div className="relative grid grid-cols-3 gap-px bg-[#0c0c0f]">
                {posts.map((post) => (
                  <Image
                    key={post.src}
                    src={post.src}
                    alt={post.alt}
                    width={245}
                    height={post.full ? 325 : 219}
                    sizes="112px"
                    loading="lazy"
                    className={`w-full object-cover object-top ${post.full ? "aspect-[245/325]" : "aspect-[245/219]"}`}
                  />
                ))}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0c0c0f] to-transparent"
                />
              </div>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
