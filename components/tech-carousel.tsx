import Image from "next/image"
import { technologies } from "@/lib/technologies"

/*
  Marquee em CSS: a lista e' renderizada duas vezes e a faixa desliza -50%,
  entao o fim da primeira copia encaixa no inicio da segunda. Os cards usam
  margin, nao gap, para que -50% caia exatamente na emenda.
*/
export default function TechCarousel() {
  const items = [...technologies, ...technologies]

  return (
    <div className="marquee group" role="region" aria-label="Tecnologias com que trabalhamos">
      <ul className="marquee-track flex py-2">
        {items.map((tech, index) => (
          <li
            key={`${tech.name}-${index}`}
            aria-hidden={index >= technologies.length ? true : undefined}
            className="mr-4 flex h-24 w-40 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white px-5 md:h-28 md:w-48"
          >
            {tech.logo ? (
              <Image
                src={tech.logo}
                alt={tech.name}
                width={160}
                height={64}
                sizes="192px"
                style={{ transform: tech.scale ? `scale(${tech.scale})` : undefined }}
                className="h-full w-full object-contain"
              />
            ) : (
              <span className="text-center text-base font-bold tracking-tight text-[#1a1a1a] md:text-lg">
                {tech.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
