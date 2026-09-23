"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import VegaLogo from "@/components/vega-logo"

gsap.registerPlugin(ScrollTrigger)

const FRAME_COUNT = 81
const LAST_FRAME = `/rack/frame-${String(FRAME_COUNT).padStart(4, "0")}.webp`
const framePath = (i: number) => `/rack/frame-${String(i + 1).padStart(4, "0")}.webp`

export default function RackOpening() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const hintRef = useRef<HTMLDivElement>(null)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true)
      return
    }

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    const frames: HTMLImageElement[] = []
    const state = { index: 0 }
    let disposed = false

    const draw = () => {
      const img = frames[Math.round(state.index)]
      if (!img?.complete || !img.naturalWidth) return

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr
        canvas.height = h * dpr
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight)
      const dw = img.naturalWidth * scale
      const dh = img.naturalHeight * scale
      ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh)
    }

    const load = (i: number) =>
      new Promise<void>((resolve) => {
        const img = new Image()
        img.decoding = "async"
        img.onload = img.onerror = () => resolve()
        img.src = framePath(i)
        frames[i] = img
      })

    /* O primeiro frame sozinho primeiro, para haver imagem antes do resto baixar. */
    load(0).then(async () => {
      if (disposed) return
      draw()
      for (let i = 1; i < FRAME_COUNT; i += 1) {
        if (disposed) return
        await load(i)
      }
      draw()
    })

    const gsapCtx = gsap.context(() => {
      gsap.to(state, {
        index: FRAME_COUNT - 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        },
        onUpdate: draw,
      })

      /* O logo entra quando a camera ja' se aproximou do rack, nao na primeira tela. */
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0, y: 30, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: { trigger: section, start: "26% top", end: "46% top", scrub: 0.6 },
        },
      )

      gsap.to(hintRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "12% top", scrub: true },
      })
    }, section)

    const onResize = () => draw()
    window.addEventListener("resize", onResize)

    return () => {
      disposed = true
      window.removeEventListener("resize", onResize)
      gsapCtx.revert()
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      id="inicio"
      className={reduced ? "relative" : "relative h-[360svh]"}
      aria-labelledby="abertura-titulo"
    >
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden bg-deep">
        {reduced ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={LAST_FRAME}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
        )}

        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LAST_FRAME}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </noscript>

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_5%,color-mix(in_oklab,var(--deep)_80%,transparent)_60%,var(--deep)_100%)]"
        />

        <div
          ref={overlayRef}
          className="relative z-10 px-6 text-center opacity-0 motion-reduce:opacity-100"
        >
          <VegaLogo className="mx-auto h-14 w-auto text-white sm:h-20 md:h-24" title={null} />
          <h1 id="abertura-titulo" className="heading-display mt-7 text-white">
            Soluções Empresariais
          </h1>
        </div>

        <div
          ref={hintRef}
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-ice/70 md:flex"
        >
          <span>Role</span>
          <span className="h-10 w-px bg-gradient-to-b from-brand to-transparent" />
        </div>
      </div>
    </div>
  )
}
