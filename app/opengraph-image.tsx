import { ImageResponse } from "next/og"

export const alt = "Vega Network — Serviços Gerenciados de TI"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "72px 80px",
          backgroundColor: "#080808",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 14, height: 36, marginRight: 20, backgroundColor: "#e53935" }} />
          <span style={{ fontSize: 36, fontWeight: 700, letterSpacing: 8 }}>VEGA</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ marginBottom: 22, color: "#ff6f61", fontSize: 24, fontWeight: 700, letterSpacing: 3 }}>
            SERVIÇOS GERENCIADOS DE TI
          </span>
          <span style={{ maxWidth: 980, fontSize: 78, fontWeight: 700, lineHeight: 1.05 }}>
            Sua TI em boas mãos.
          </span>
          <span style={{ marginTop: 30, color: "#c4c4c4", fontSize: 28 }}>
            Monitoramento, segurança e suporte para empresas.
          </span>
        </div>

        <div style={{ width: 260, height: 7, backgroundColor: "#e53935" }} />
      </div>
    ),
    size,
  )
}
