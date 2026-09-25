import Link from "next/link"
import { ArrowUpRight, Lock, RefreshCw, BellRing, HardDriveDownload, Globe2, Radar } from "lucide-react"
import Reveal from "@/components/reveal"

const orbitaFeatures = [
  {
    icon: Lock,
    label: "Arquivos cifrados",
    detail: "Cada backup vira um arquivo .vega, com 2FA obrigatório no primeiro acesso.",
  },
  {
    icon: HardDriveDownload,
    label: "Destino duplicado",
    detail: "A mesma cópia vai para dois provedores de nuvem diferentes.",
  },
  {
    icon: RefreshCw,
    label: "Restauração testada",
    detail: "Teste periódico de recuperação, com relatório e runbook do que fazer.",
  },
  {
    icon: BellRing,
    label: "Falhou, você sabe",
    detail: "Alerta imediato quando um job de backup não fecha.",
  },
]

export default function SystemsSection() {
  return (
    <section id="sistemas" className="slide bg-deep-raised">
      <div className="container-vega">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="flex flex-col rounded-lg border border-brand/30 bg-brand/[0.06] p-7 md:p-9">
            <div className="flex items-baseline gap-3">
              <h3 className="font-display text-2xl text-white md:text-3xl">Órbita</h3>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">Backup</span>
            </div>
            <p className="mt-4 text-sm leading-[1.8] text-ice sm:text-base">
              Copia os arquivos dos seus servidores seguindo a regra{" "}
              <strong className="text-white">3-2-1-1-0</strong>: três cópias, em dois tipos de
              mídia, uma fora da empresa, uma imutável — e zero erro na verificação.
            </p>

            <ul className="mt-7 grid gap-5 sm:grid-cols-2">
              {orbitaFeatures.map((feature) => {
                const Icon = feature.icon
                return (
                  <li key={feature.label} className="flex gap-3">
                    <Icon
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                      aria-hidden="true"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="text-sm font-semibold text-white">{feature.label}</p>
                      <p className="mt-1 text-xs leading-[1.6] text-ice/80">{feature.detail}</p>
                    </div>
                  </li>
                )
              })}
            </ul>

            <blockquote className="mt-auto pt-8">
              <p className="border-l-2 border-brand pl-5 text-base italic leading-[1.6] text-white sm:text-lg">
                Backup que nunca foi restaurado não é backup — é esperança.
              </p>
            </blockquote>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal
              delay={0.08}
              className="flex flex-col rounded-lg border border-white/15 bg-deep p-7"
            >
              <div className="flex items-baseline gap-3">
                <h3 className="font-display text-2xl text-white">Pulsar</h3>
                <span className="rounded-sm bg-brand px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-brand-ink">
                  No ar
                </span>
              </div>
              <p className="mt-4 text-sm leading-[1.8] text-ice">
                Nossa ferramenta pública e gratuita de consulta de rede. Mostra seu IPv4, IPv6 e
                ASN, desenha o mapa de conectividade BGP e permite consultar qualquer prefixo, IP ou
                sistema autônomo.
              </p>
              <p className="mt-4 flex items-center gap-2 text-xs text-ice/70">
                <Globe2 className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" strokeWidth={1.5} />
                Nenhum dado é armazenado.
              </p>
              <Link
                href="https://meuip.vegasolucoes.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-brand transition-colors hover:text-white"
              >
                Abrir o Pulsar
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>

            <Reveal
              delay={0.12}
              className="rounded-lg border border-dashed border-white/20 bg-deep p-7"
            >
              <div className="flex items-baseline gap-3">
                <h3 className="text-lg font-semibold text-white">Monitoramento</h3>
                <span className="text-xs font-medium uppercase tracking-wider text-ice/60">
                  Em desenvolvimento
                </span>
              </div>
              <p className="mt-4 flex gap-3 text-sm leading-[1.75] text-ice/85">
                <Radar className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" strokeWidth={1.5} />
                Nossa própria plataforma de observação de ambiente, em construção. Coleta por SNMP e
                por API, com a leitura do que importa feita por nós — não por um painel genérico.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
