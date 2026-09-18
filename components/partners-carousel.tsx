"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const partners = [
  {
    name: "Ubiquiti",
    logo: "/images/ubiquiti.webp",
  },
  {
    name: "Cisco",
    logo: "/images/cisco.webp",
  },
  {
    name: "Oracle Cloud",
    logo: "/images/oracle-cloud.webp",
  },
  {
    name: "MikroTik",
    logo: "/images/mikrotik.webp",
  },
  {
    name: "Huawei",
    logo: "/images/huawei.webp",
  },
  {
    name: "VMware",
    logo: "/images/vmware.webp",
  },
  {
    name: "Linux",
    logo: "/images/linux.webp",
  },
  {
    name: "Datacom",
    logo: "/images/datacom.webp",
  },
  {
    name: "Windows Server",
    logo: "/images/windows-server.webp",
  },
]

const allPartners = [...partners, ...partners, ...partners]

export default function PartnersCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const animate = () => {
      scrollPosition += scrollSpeed

      if (scrollPosition >= scrollContainer.scrollWidth / 3) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    const handleMouseEnter = () => cancelAnimationFrame(animationId)
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate)
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section className="py-16 relative overflow-hidden border-y border-gray-800/50">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e53935]/10 border border-[#e53935]/30 mb-4">
            <span className="w-2 h-2 bg-[#e53935] rounded-full animate-pulse" />
            <span className="text-sm text-[#e53935] font-medium">Tecnologias do seu ambiente</span>
          </div>
          <h3 className="text-2xl md:text-3xl text-white font-bold">
            Uma operação conectada às <span className="gradient-text">suas tecnologias</span>
          </h3>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Servidores, nuvem, virtualização e redes corporativas em uma gestão integrada.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

          <div ref={scrollRef} className="flex gap-8 overflow-x-hidden py-8" style={{ scrollBehavior: "auto" }}>
            {allPartners.map((partner, index) => (
              <div key={`${partner.name}-${index}`} className="flex-shrink-0 group">
                <div className="w-56 h-32 flex items-center justify-center p-6 rounded-2xl bg-white border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-[#e53935]/50">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    width={180}
                    height={80}
                    className="object-contain max-h-20"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {["Nuvem", "Virtualização", "Servidores", "Redes Corporativas", "TI Gerenciada"].map(
            (tag, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 text-sm hover:border-[#e53935]/30 hover:text-white transition-all cursor-default"
              >
                {tag}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
