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
    <section aria-labelledby="technologies-heading" className="vega-section vega-light border-y border-black/10 bg-white">
      <div className="container relative mx-auto px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <p className="vega-eyebrow mb-4">
            Nossa base tecnológica
          </p>
          <h2 id="technologies-heading" className="text-3xl font-medium leading-tight tracking-[-0.035em] text-[#171717] md:text-4xl">
            Trabalhamos com as maiores tecnologias do mercado
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#595955]">
            Da rede à nuvem, usamos soluções confiáveis para cuidar da tecnologia que faz sua empresa funcionar.
          </p>
        </div>

        <ul className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-5 gap-y-2 md:gap-x-10 md:gap-y-4" aria-label="Tecnologias com que trabalhamos">
          {technologies.map((technology) => (
            <li
              key={technology.name}
              className="flex h-20 w-[calc(50%-0.625rem)] items-center justify-center p-3 sm:w-36 md:h-24 md:w-40 md:p-4"
            >
              <Image
                src={technology.logo}
                alt={technology.name}
                width={160}
                height={72}
                className={`h-full w-full object-contain ${["Windows Server", "VMware", "Datacom"].includes(technology.name) ? "scale-125" : ""}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
