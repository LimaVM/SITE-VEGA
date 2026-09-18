import Image from "next/image"

const technologies = [
  { name: "Windows Server", logo: "/images/windows-server.webp" },
  { name: "VMware", logo: "/images/vmware.webp" },
  { name: "Linux", logo: "/images/linux.webp" },
  { name: "Cisco", logo: "/images/cisco.webp" },
  { name: "Oracle Cloud", logo: "/images/oracle-cloud.webp" },
  { name: "Ubiquiti", logo: "/images/ubiquiti.webp" },
  { name: "Huawei", logo: "/images/huawei.webp" },
  { name: "MikroTik", logo: "/images/mikrotik.webp" },
  { name: "Datacom", logo: "/images/datacom.webp" },
]

export default function TechnologiesSection() {
  return (
    <section aria-labelledby="technologies-heading" className="relative border-y border-white/10 bg-[#0d0d0d] py-16 md:py-20">
      <div className="container relative mx-auto px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#ff6f61] md:text-sm">
            Nossa base tecnológica
          </p>
          <h2 id="technologies-heading" className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
            Trabalhamos com as maiores tecnologias do mercado
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base">
            Da rede à nuvem, usamos soluções confiáveis para cuidar da tecnologia que faz sua empresa funcionar.
          </p>
        </div>

        <ul className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3 sm:gap-4" aria-label="Tecnologias com que trabalhamos">
          {technologies.map((technology) => (
            <li
              key={technology.name}
              className="flex h-24 w-[calc(50%-0.375rem)] items-center justify-center rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:h-28 sm:w-44 sm:p-5 md:h-32 md:w-48"
            >
              <Image
                src={technology.logo}
                alt={technology.name}
                width={160}
                height={72}
                className="h-full w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
