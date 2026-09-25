"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/*
  Lenis dirige o scroll e o GSAP ticker dirige o Lenis, para que
  o canvas da abertura desenhe no mesmo tick do ScrollTrigger.
  Um rAF proprio aqui produziria o engasgo tipico de scroll cinematografico.
*/
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const lenis = new Lenis({ lerp: 0.085, smoothWheel: true, anchors: { offset: -80 } })
    lenis.on("scroll", ScrollTrigger.update)

    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener("load", refresh)

    return () => {
      window.removeEventListener("load", refresh)
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [])

  return null
}
