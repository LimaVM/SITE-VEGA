"use client"

import { useEffect, useRef, type ElementType, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type Props = {
  children: ReactNode
  className?: string
  as?: ElementType
  /** Atraso em segundos, para escalonar itens de uma mesma lista. */
  delay?: number
}

/*
  Entrada por scroll. Sem animacao os filhos continuam visiveis:
  a opacidade so' e' tocada depois que o GSAP assume, entao uma falha
  de JS nunca deixa conteudo invisivel.
*/
export default function Reveal({ children, className, as: Tag = "div", delay = 0 }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          delay,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [delay])

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
