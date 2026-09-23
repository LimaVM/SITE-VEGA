"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { technologies } from "@/lib/technologies"

const SPEED = 0.45

export default function TechCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    /*
      A lista e' renderizada duas vezes; quando o scroll passa da metade,
      volta uma metade para tras. O salto cai sobre conteudo identico,
      entao o laco parece continuo.
    */
    const tick = () => {
      if (pausedRef.current) return
      const half = track.scrollWidth / 2
      if (half <= 0) return
      track.scrollLeft += SPEED
      if (track.scrollLeft >= half) track.scrollLeft -= half
    }

    gsap.ticker.add(tick)
    return () => gsap.ticker.remove(tick)
  }, [])

  const pause = () => {
    pausedRef.current = true
  }
  const resume = () => {
    pausedRef.current = false
  }

  const nudge = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({ left: direction * 320, behavior: "smooth" })
  }

  const items = [...technologies, ...technologies]

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocusCapture={pause}
        onBlurCapture={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
        className="flex gap-4 overflow-x-auto scroll-smooth px-1 py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            aria-hidden={index >= technologies.length ? true : undefined}
            className="flex h-24 w-40 shrink-0 items-center justify-center rounded-xl bg-white px-5 md:h-28 md:w-48"
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
          </div>
        ))}
      </div>

      {/* Degrade nas pontas, para os cards entrarem e sairem sem corte seco. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-deep to-transparent md:w-24"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-deep to-transparent md:w-24"
      />

      <button
        type="button"
        onClick={() => nudge(-1)}
        aria-label="Ver tecnologias anteriores"
        className="absolute left-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-deep/80 text-white backdrop-blur transition-colors hover:border-brand hover:text-brand md:flex"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => nudge(1)}
        aria-label="Ver próximas tecnologias"
        className="absolute right-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-deep/80 text-white backdrop-blur transition-colors hover:border-brand hover:text-brand md:flex"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  )
}
