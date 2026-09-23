export type Technology = {
  name: string
  /** Caminho do logo. Ausente = o card mostra o nome em tipografia. */
  logo?: string
  /** Logos que se perdem no card branco por serem claros demais. */
  scale?: number
}

/*
  VMware saiu: nao aparece em nenhum projeto da Vega.
  Grafana nao entra: foi descartado por decisao do time.
  Marcas sem logo (Grandstream, Intelbras, Starlink, AWS, Zabbix) nao existem
  em bancos de icone de licenca livre; o card usa o nome, sem imitar a marca.
*/
export const technologies: Technology[] = [
  { name: "MikroTik", logo: "/images/mikrotik.webp" },
  { name: "Huawei", logo: "/images/huawei.webp" },
  { name: "Ubiquiti", logo: "/images/ubiquiti.webp" },
  { name: "Cisco", logo: "/images/cisco.webp" },
  { name: "Fortinet", logo: "/images/tech/fortinet.svg", scale: 0.72 },
  { name: "TP-Link", logo: "/images/tech/tp-link.svg", scale: 0.72 },
  { name: "Grandstream" },
  { name: "Intelbras" },
  { name: "Starlink" },
  { name: "Oracle Cloud", logo: "/images/oracle-cloud.webp" },
  { name: "AWS" },
  { name: "Proxmox", logo: "/images/tech/proxmox.svg", scale: 0.72 },
  { name: "Cloudflare", logo: "/images/tech/cloudflare.svg", scale: 0.78 },
  { name: "Zabbix" },
  { name: "Linux", logo: "/images/linux.webp", scale: 1.15 },
  { name: "Windows Server", logo: "/images/windows-server.webp", scale: 1.15 },
  { name: "PostgreSQL", logo: "/images/tech/postgresql.svg", scale: 0.72 },
  { name: "Datacom", logo: "/images/datacom.webp", scale: 1.15 },
]
