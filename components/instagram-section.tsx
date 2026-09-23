import Image from "next/image"
import Link from "next/link"
import { Instagram, ArrowUpRight } from "lucide-react"
import Reveal from "@/components/reveal"
import { instagramHandle, instagramUrl } from "@/lib/contact"

const posts = [1, 2, 3, 4, 5, 6].map((n) => ({
  src: `/images/instagram/post-${n}.webp`,
  alt: `Publicação ${n} do Instagram da Vega sobre automação e inteligência artificial`,
}))

export default function InstagramSection() {
  return (
    <section id="instagram" className="slide bg-deep-raised">
      <div className="container-vega">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-2">
                <Instagram className="h-4 w-4" aria-hidden="true" />
                No Instagram
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-section mt-5 text-white">
                O que a gente anda publicando
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 self-start text-base font-semibold text-brand transition-colors hover:text-white md:self-auto"
            >
              {instagramHandle}
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-12">
        <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {posts.map((post) => (
            <li
              key={post.src}
              className="w-56 shrink-0 snap-center overflow-hidden rounded-lg sm:w-64 md:w-72"
            >
              <Link
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                tabIndex={-1}
                aria-hidden="true"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  width={720}
                  height={960}
                  sizes="(min-width: 768px) 288px, 224px"
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
