type Props = {
  className?: string
  /** Rotulo acessivel; use null quando houver texto adjacente que ja nomeia a marca. */
  title?: string | null
  /**
    stacked: "SOLUCOES EMPRESARIAIS" sob o nome, na largura exata dele (abertura, rodape).
    inline: descritor em duas linhas ao lado do nome, legivel em tamanho de cabecalho.
  */
  variant?: "stacked" | "inline"
}

/*
  Simbolo e nome VEGA sao os tracos do ativo original (logo-vega.svg), sem redesenho.
  O descritor e' texto em Geist; textLength trava a largura para que a composicao
  nao dependa das metricas da fonte carregada.
*/
const TAGLINE_FONT = { fontFamily: "var(--font-geist), ui-sans-serif, sans-serif" }

export default function VegaLogo({
  className,
  title = "Vega Soluções Empresariais",
  variant = "stacked",
}: Props) {
  const inline = variant === "inline"
  const wordmarkShift = inline ? 0 : -38

  return (
    <svg
      viewBox={inline ? "0 0 1760 305.22" : "0 0 1000 305.22"}
      className={className}
      role={title ? "img" : undefined}
      aria-label={title ?? undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <g data-part="chevron-top" fill="#FF3900">
        <path d="M 67.64,81.22 L 148.87,0.0 L 230.09,81.22 L 202.73,108.58 L 148.87,54.72 L 95.0,108.58 Z" />
      </g>
      <g data-part="chevron-bottom" fill="#FF3900">
        <path d="M 0.0,155.42 L 148.87,305.22 L 297.73,155.42 L 259.51,117.44 L 148.87,228.78 L 38.22,117.44 Z" />
      </g>
      <g data-part="star" fill="currentColor">
        <path d="M 193.92,142.73 C 173.39,142.73 148.31,169.8 148.31,191.94 C 148.31,169.8 123.22,142.73 102.69,142.73 C 123.22,142.73 148.31,115.66 148.31,93.51 C 148.31,115.66 173.39,142.73 193.92,142.73 Z" />
      </g>
      <g data-part="wordmark" fill="currentColor">
        <g transform={`translate(0 ${wordmarkShift})`}>
          <path d="M 337.56,94.55 L 414.56,223.05 L 491.56,94.55 L 472.11,94.55 L 414.56,190.59 L 357.01,94.55 Z" />
          <path d="M 528.11,94.55 L 544.8,94.55 L 544.8,223.05 L 528.11,223.05 Z" />
          <path d="M 528.11,94.55 L 627.57,94.55 L 627.57,111.23 L 528.11,111.23 Z" />
          <path d="M 528.11,151.62 L 627.57,151.62 L 627.57,168.3 L 528.11,168.3 Z" />
          <path d="M 528.11,206.37 L 627.57,206.37 L 627.57,223.05 L 528.11,223.05 Z" />
          <path d="M 795.5,200.07 C 778.26,221.36 749.79,230.01 723.63,221.89 C 697.46,213.78 678.88,190.54 676.72,163.23 C 674.56,135.92 689.25,110.05 713.82,97.92 C 738.38,85.79 767.86,89.85 788.23,108.17 L 777.07,120.58 C 761.78,106.82 739.65,103.77 721.2,112.88 C 702.76,121.98 691.72,141.41 693.35,161.91 C 694.97,182.42 708.92,199.87 728.57,205.96 C 748.22,212.06 769.59,205.56 782.53,189.57 Z" />
          <path d="M 788.4,166.49 L 805.09,166.49 L 805.09,237.53 L 788.4,237.53 Z" />
          <path d="M 924.77,87.8 L 849.53,223.05 L 868.62,223.05 L 924.77,122.11 Z" />
          <path d="M 924.77,87.8 L 1000.0,223.05 L 980.91,223.05 L 924.77,122.11 Z" />
          <path d="M 871.55,183.46 L 977.98,183.46 L 987.26,200.14 L 862.27,200.14 Z" />
        </g>
      </g>

      {inline ? (
        <g data-part="tagline" fill="currentColor" style={TAGLINE_FONT} fontWeight={500}>
          <rect x="1058" y="94.55" width="10" height="128.5" fill="#FF3900" />
          <text x="1100" y="140" fontSize="76" letterSpacing="5">
            SOLUÇÕES
          </text>
          <text x="1100" y="223.05" fontSize="76" textLength="660" lengthAdjust="spacing">
            EMPRESARIAIS
          </text>
        </g>
      ) : (
        <g data-part="tagline" fill="currentColor" style={TAGLINE_FONT} fontWeight={500}>
          <text x="337.56" y="248" fontSize="42" textLength="662.44" lengthAdjust="spacing">
            SOLUÇÕES EMPRESARIAIS
          </text>
        </g>
      )}
    </svg>
  )
}
