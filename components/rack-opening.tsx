"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import VegaLogo from "@/components/vega-logo"

gsap.registerPlugin(ScrollTrigger)

/*
  Os quadros vem do video em 2K/60fps e nao sao equidistantes no tempo. O video
  original anda ~14x mais devagar no comeco que no fim; em tempo uniforme, isso
  virava uma pausa logo depois do zoom. Cada quadro foi escolhido pelo movimento
  de camera medido (zoom + deslocamento), para seguir a curva de velocidade abaixo.
*/
const FRAME_COUNT = 120
const LOAD_CONCURRENCY = 6
const BG = "#010206"
const framePath = (hd: boolean, i: number) =>
  `/rack${hd ? "/hd" : ""}/frame-${String(i + 1).padStart(4, "0")}.webp`
const platePath = (hd: boolean) => `/rack/plate-${hd ? "hd" : "sd"}.webp`

/*
  Posicao do rack no 1o quadro (fracao da largura/altura do quadro).
  A "placa" e' esse mesmo quadro com o ceu do video estendido em volta
  (35% de cada lado, 20% em cima e embaixo): o repouso e a aproximacao usam
  a mesma imagem que abre o video, entao nao ha troca visivel.
  Os quadros passam por um ajuste de preto que iguala o ceu inteiro em #010206:
  o video trazia uma faixa mais azulada em volta do rack.
*/
const RACK_IN_FRAME = { cx: 0.4952, cy: 0.4781, h: 0.834, aspect: 2580 / 1440 }
const PLATE_PAD = { x: 0.35, y: 0.2 }
/** Altura do rack em repouso, em fracao da tela: afastado, inteiro, com respiro. */
const IDLE_HEIGHT = 0.64

/*
  Linha do tempo da abertura, em fracao do scroll da secao:
  0.000-0.138  1o quadro com ceu estendido: a camera se aproxima do rack
  0.138-0.800  video: desce pelo rack e entra na porta RJ45
  0.700-0.800  a tela escurece com a camera ainda andando
  0.800-1.000  o logo se monta: estrela, chevrons, nome, descritor
*/
const T = { zoomEnd: 0.138, framesEnd: 0.8, blackStart: 0.7, blackEnd: 0.8 }

/*
  Uma curva de velocidade so' para zoom e video: a camera sai do repouso,
  acelera suave (sen^2) ate' 30% do scroll e segue em velocidade constante ate'
  a porta. VELOCITY_RAMP e T.zoomEnd sao os mesmos usados para escolher os quadros;
  mudar um sem refazer os quadros reabre o degrau na emenda.
*/
const VELOCITY_RAMP = 0.3
const distance = (u: number) =>
  u < VELOCITY_RAMP
    ? u / 2 - (VELOCITY_RAMP / (2 * Math.PI)) * Math.sin((Math.PI * u) / VELOCITY_RAMP)
    : VELOCITY_RAMP / 2 + (u - VELOCITY_RAMP)
const zoomEase = (t: number) => distance(t * T.zoomEnd) / distance(T.zoomEnd)

export default function RackOpening() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const blackRef = useRef<HTMLDivElement>(null)
  const logoWrapRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const hintRef = useRef<HTMLDivElement>(null)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    const logoWrap = logoWrapRef.current
    if (!canvas || !section || !logoWrap) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true)
      return
    }

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const hd = window.innerWidth * dpr > 1700

    const frames: HTMLImageElement[] = []
    const plate = new Image()
    plate.decoding = "async"
    const state = { zoom: 0, index: 0 }
    const float = { y: 0.5 }
    let progress = 0
    let disposed = false

    const ready = (img?: HTMLImageElement) => !!img && img.complete && img.naturalWidth > 0

    const draw = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
        canvas.width = Math.round(w * dpr)
        canvas.height = Math.round(h * dpr)
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.fillStyle = BG
      ctx.fillRect(0, 0, w, h)

      // Quadro em "cover": e' onde o video roda.
      const cover = Math.max(w / RACK_IN_FRAME.aspect, h)
      const coverRect = {
        w: RACK_IN_FRAME.aspect * cover,
        h: cover,
        x: (w - RACK_IN_FRAME.aspect * cover) / 2,
        y: (h - cover) / 2,
      }

      if (state.index < 0.5 && ready(plate)) {
        // Repouso: o mesmo quadro, menor, com o rack centrado e flutuando.
        const bob = (float.y - 0.5) * 16 * Math.max(0, 1 - progress / 0.05)
        const idleH = (h * IDLE_HEIGHT) / RACK_IN_FRAME.h
        const idleW = idleH * RACK_IN_FRAME.aspect
        const idle = {
          w: idleW,
          h: idleH,
          x: w / 2 - RACK_IN_FRAME.cx * idleW,
          y: h / 2 - RACK_IN_FRAME.cy * idleH + bob,
        }
        const z = state.zoom
        const r = {
          w: idle.w + (coverRect.w - idle.w) * z,
          h: idle.h + (coverRect.h - idle.h) * z,
          x: idle.x + (coverRect.x - idle.x) * z,
          y: idle.y + (coverRect.y - idle.y) * z,
        }
        const px = r.x - r.w * PLATE_PAD.x
        const py = r.y - r.h * PLATE_PAD.y
        const pw = r.w * (1 + 2 * PLATE_PAD.x)
        const ph = r.h * (1 + 2 * PLATE_PAD.y)
        ctx.drawImage(plate, px, py, pw, ph)
        return
      }

      // Quadro disponivel mais proximo do pedido (os quadros chegam em sequencia).
      for (let i = Math.round(state.index); i >= 0; i -= 1) {
        if (ready(frames[i])) {
          ctx.drawImage(frames[i], coverRect.x, coverRect.y, coverRect.w, coverRect.h)
          return
        }
      }
      if (ready(plate)) {
        ctx.drawImage(
          plate,
          coverRect.x - coverRect.w * PLATE_PAD.x,
          coverRect.y - coverRect.h * PLATE_PAD.y,
          coverRect.w * (1 + 2 * PLATE_PAD.x),
          coverRect.h * (1 + 2 * PLATE_PAD.y),
        )
      }
    }

    // Decodifica fora da thread principal: o 1o drawImage de um quadro nao decodificado trava.
    const load = (img: HTMLImageElement, src: string) =>
      new Promise<void>((resolve) => {
        img.onload = () => img.decode().catch(() => {}).then(() => resolve())
        img.onerror = () => resolve()
        img.src = src
      })

    // Varios quadros em paralelo, sempre na ordem do video.
    let nextFrame = 0
    const loadWorker = async () => {
      while (!disposed && nextFrame < FRAME_COUNT) {
        const i = nextFrame
        nextFrame += 1
        const img = new Image()
        img.decoding = "async"
        frames[i] = img
        await load(img, framePath(hd, i))
        if (!disposed && state.index >= 0.5 && Math.round(state.index) >= i) draw()
      }
    }

    load(plate, platePath(hd)).then(() => {
      if (disposed) return
      draw()
      for (let k = 0; k < LOAD_CONCURRENCY; k += 1) loadWorker()
    })

    const q = (part: string) => logoWrap.querySelector(`[data-part="${part}"]`)
    const star = q("star")
    const chevTop = q("chevron-top")
    const chevBottom = q("chevron-bottom")
    const wordmark = q("wordmark")
    const tagline = q("tagline")

    const idleTick = () => {
      if (progress < 0.06) draw()
    }
    gsap.ticker.add(idleTick)

    const gsapCtx = gsap.context(() => {
      gsap.to(float, { y: 1, duration: 3.4, ease: "sine.inOut", yoyo: true, repeat: -1, startAt: { y: 0 } })

      gsap.set([star, chevTop, chevBottom], { transformOrigin: "50% 50%" })
      gsap.set(star, { scale: 0, rotation: -120, opacity: 0 })
      gsap.set(chevTop, { y: -140, opacity: 0 })
      gsap.set(chevBottom, { y: 140, opacity: 0 })
      gsap.set(wordmark, { clipPath: "inset(0 100% 0 0)" })
      gsap.set(tagline, { opacity: 0, y: 24 })

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          onUpdate: (self) => {
            progress = self.progress
          },
        },
      })

      tl.to(state, { zoom: 1, duration: T.zoomEnd, ease: zoomEase, onUpdate: draw }, 0)
        .to(hintRef.current, { opacity: 0, duration: 0.04 }, 0)
        .to(state, { index: FRAME_COUNT - 1, duration: T.framesEnd - T.zoomEnd, onUpdate: draw }, T.zoomEnd)
        .to(blackRef.current, { opacity: 1, duration: T.blackEnd - T.blackStart, ease: "power1.in" }, T.blackStart)
        .set(logoWrap, { opacity: 1 }, T.blackEnd)
        .fromTo(glowRef.current, { opacity: 0, scale: 0.2 }, { opacity: 1, scale: 1, duration: 0.07, ease: "power2.out" }, 0.8)
        .to(star, { scale: 1, rotation: 0, opacity: 1, duration: 0.07, ease: "back.out(2)" }, 0.82)
        .to(chevTop, { y: 0, opacity: 1, duration: 0.07, ease: "power3.out" }, 0.86)
        .to(chevBottom, { y: 0, opacity: 1, duration: 0.07, ease: "power3.out" }, 0.86)
        .to(wordmark, { clipPath: "inset(0 0% 0 0)", duration: 0.07, ease: "power2.inOut" }, 0.9)
        .to(tagline, { opacity: 1, y: 0, duration: 0.05, ease: "power2.out" }, 0.95)
        .to(glowRef.current, { opacity: 0.35, duration: 0.03 }, 0.97)
        .set({}, {}, 1)
    }, section)

    const onResize = () => draw()
    window.addEventListener("resize", onResize)

    return () => {
      disposed = true
      window.removeEventListener("resize", onResize)
      gsap.ticker.remove(idleTick)
      gsapCtx.revert()
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      id="inicio"
      className={reduced ? "relative" : "relative h-[560svh]"}
      aria-labelledby="abertura-titulo"
    >
      <h1 id="abertura-titulo" className="sr-only">
        Vega Soluções Empresariais
      </h1>

      <div
        className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden"
        style={{ backgroundColor: BG }}
      >
        {reduced ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={platePath(false)}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />
        ) : (
          <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
        )}

        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={platePath(false)}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />
        </noscript>

        <div ref={blackRef} aria-hidden="true" className="absolute inset-0 bg-black opacity-0" />

        <div
          ref={logoWrapRef}
          className={`relative z-10 px-6 ${reduced ? "opacity-100" : "opacity-0"}`}
        >
          <div
            ref={glowRef}
            aria-hidden="true"
            className="absolute left-[15%] top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--brand)_45%,transparent)_0%,transparent_65%)] opacity-0 blur-2xl"
          />
          <VegaLogo className="relative h-20 w-auto text-white sm:h-28 md:h-36" title={null} />
        </div>

        <noscript>
          <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
            <VegaLogo className="h-20 w-auto text-white sm:h-28" title={null} />
          </div>
        </noscript>

        <div
          ref={hintRef}
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-ice/70"
        >
          <span>Role para entrar</span>
          <span className="h-10 w-px bg-gradient-to-b from-brand to-transparent" />
        </div>
      </div>
    </div>
  )
}
