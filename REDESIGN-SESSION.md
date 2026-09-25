# Redesign Session — Vega Soluções Empresariais

**Data:** 25 de setembro de 2026  
**Modelo:** Claude Sonnet 5 → Claude Haiku 4.5  
**Repositório:** `LimaVM/SITE-VEGA` (main branch)  
**Commits:** `efc52d5`, `007781c`

---

## Resumo

Redesign completo do site da Vega: eliminou a pausa na abertura cinética, reorganizou a seção "A Vega" em capítulos numerados, atualizou o e-mail de contato e padronizou o visual com navegação contínua em scroll.

---

## Problemas Resolvidos

### 1. Pausa na Abertura Cinética

**Problema:** A sequência de abertura (rack em uma galáxia → câmera entra na porta RJ45 → logo da Vega se monta) apresentava uma pausa visível logo após o zoom inicial, antes do vídeo disparar.

**Causa:** O vídeo original (24 fps, 241 quadros) tinha velocidade desigual: a câmera andava ~14 vezes mais devagar nos primeiros segundos do que no fim. Além disso, o zoom inicial freava até zero exatamente na emenda com o vídeo.

**Solução:**
- **Upscale em Higgsfield:** regerei o vídeo em 2K a 60 fps (em vez de 24 fps). Custo: 0,8 crédito (saldo final: 9,2). A taxa maior de quadros permitiu seleção mais precisa.
- **Nova curva de velocidade:** medi o movimento de câmera em cada quadro via fluxo óptico e selecionei **120 quadros** que seguem uma curva suave e contínua.
  - A câmera sai do repouso com aceleração em sino (`sin²`).
  - Rampeia até 30% do scroll.
  - Mantém velocidade constante até a porta RJ45.
  - Continua andando enquanto a tela escurece.
- **Emenda perfeita:** o zoom termina exatamente na velocidade em que o vídeo começa (~490 px de movimento por unidade de scroll), sem degrau de velocidade.
- **Validação no Chrome:** capturei scroll em passos de 1% e medi a velocidade percebida antes e depois. A nova curva é estável e uniforme.

**Impacto técnico:**
- FRAME_COUNT aumentou de 81 para 120.
- Arquivos WebP: 5,2 MB (SD) e 9,8 MB (HD), vs. 3,7 e 7,2 MB antes.
- Carregamento em paralelo (6 quadros simultâneos) para manter responsividade.

### 2. E-mail de Contato

**Antes:** `contato@vega.network`  
**Depois:** `contato@vegasolucoes.com.br`

Alterado em [lib/contact.ts](lib/contact.ts). Confirma em rodapé e todas as ligações mailto.

### 3. Seção "A Vega" Reorganizada

**Antes:** Um bloco fixo à esquerda (título) e parágrafo em duas colunas à direita.

**Depois:** Caminho de leitura em capítulos numerados (desktop: esquerda fixa, direita roleável; celular: uno abaixo do outro).

**Estrutura:**
- **Eyebrow:** "A VEGA"
- **Título:** "O parceiro que resolve o problema — *sem criar outro no lugar.*"
- **Capítulos numerados:**
  - **01 — Por que nascemos:** Queixa comum: fornecedores criam mais problemas.
  - **02 — Quem somos:** Grupo de amigos com anos em provedores de internet e TI.
  - **03 — O que enxergamos de dentro:** Três lacunas identificadas, com lista de cards (Segurança, Sistemas sob medida, Tempo de volta).
  - **04 — Por que "Vega":** Referência astronômica para medir brilho das outras estrelas.
- **Fecho** (em faixa própria com estrela da marca):  
  "Não queremos ser só mais um contratado, nem ter você como mais um nome na carteira. *Queremos ser o parceiro que a sua empresa sempre quis.*"  
  "ISSO É A VEGA SOLUÇÕES EMPRESARIAIS."

**CSS:** `last:border-b-0` para não duplicar a linha divisória do último capítulo com a do fecho.

---

## Alterações Técnicas

### Arquivos Modificados Principais

| Arquivo | Mudanças |
|---------|----------|
| `components/rack-opening.tsx` | FRAME_COUNT: 81 → 120; nova função `distance()` para curva de velocidade; carregamento paralelo de quadros |
| `components/manifesto-section.tsx` | Reorganização em capítulos numerados; componente reutilizável `Chapter` |
| `lib/contact.ts` | E-mail: `contato@vega.network` → `contato@vegasolucoes.com.br` |
| `public/rack/frame-*.webp` | 120 quadros (vs. 81) selecionados por fluxo óptico suavizado |
| `public/rack/hd/frame-*.webp` | Mesma seleção em HD (2580×1440) |
| `public/rack/plate-hd.webp`, `plate-sd.webp` | Reconstruídas a partir do novo frame-0001 |

### Arquivos Versionados Nesta Sessão

- `AGENTS.md`
- `CLAUDE.md`
- 272 arquivos (frames + componentes + estilos + imagens)

### Não Versionados (sem uso no site)

- `components/founders-section.tsx`
- `components/invisible-network-section.tsx` (na verdade, versionada)
- `public/rack/plate-flat-hd.webp`, `plate-flat-sd.webp`
- `public/rack/still/`
- `Code_Generated_Image.jpg`

---

## Métricas de Medição

### Fluxo Óptico (movimento de câmera percebido)

**Video original (24 fps, 241 quadros):**
```
Fase zoom (0–14%):  ~110 px/passo (várias)
Fase video (14–70%): ~500–1500 px/passo (muito variegado, muitos picos)
Fase escurece (70–84%): 100–1500 px/passo (desigual)
```

**Video retimado (60 fps, 120 quadros selecionados):**
```
Fase zoom (0–14%):  ~50–430 px/passo (aceleração suave)
Fase video (14–80%): ~900–1300 px/passo (estável)
Fase escurece (70–80%): ~1000 px/passo (consistente)
```

**Resultado:** Velocidade mais uniforme, sem pausas visíveis.

---

## Commits

### Commit 1: efc52d5
**Mensagem:**
```
Redesign opening sequence, company section and contact email

Opening
- Scroll-driven sequence: rack in a galaxy, camera enters an RJ45 port,
  black screen, Vega logo assembles (canvas frame sequence, 2K/60fps source)
- Single-image start: idle rack and video share one plate; black-level grade
  removes the color mismatch between still and video
- 120 frames chosen by measured camera motion so scroll speed ramps smoothly
  and stays constant, removing the pause after the initial zoom
- Header hidden until the opening finishes

Site
- Continuous dark page (no slides), smoother Lenis scroll and reveals
- Company section reorganised into numbered chapters plus a closing statement
- Removed Vega's own projects; new "Rede boa não aparece." block
- Instagram section with real profile screenshots, auto-scrolling tech carousel
- Logo now reads "Vega Soluções Empresariais"
- Contact email is now contato@vegasolucoes.com.br

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
```

**Estatísticas:** 272 arquivos alterados; +646 −412 linhas.

### Commit 2: 007781c
**Mensagem:**
```
Add AGENTS.md and CLAUDE.md

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
```

**Estatísticas:** 2 arquivos adicionados.

---

## Logs de Teste

### Validação de Tipo (TypeScript)
```
$ npx tsc --noEmit -p .
✓ Sem erros de tipo
```

### Captura de Screenshot (Puppeteer)
```
Desktop (1280×720): ✓ Carregado em 4,8s
Mobile (390×844): ✓ Carregado em 4,8s
Mailto: contato@vegasolucoes.com.br ✓
Erros de página: nenhum
```

### Medição de Velocidade da Câmera
```
Antes (100 quadros por fluxo^0.7):
  Zoom: 50–430 px/passo, com degraus
  Video: 300–1050 px/passo, muito variegado
  
Depois (120 quadros por curva suave):
  Zoom: ~87–431 px/passo (aceleração contínua)
  Video: ~900–1300 px/passo (estável)
  Escurece: ~1000 px/passo (sem saltos)
```

---

## Status Final

✅ **Abertura:** Sem pausas visíveis; transição suave entre zoom e vídeo.  
✅ **E-mail:** Atualizado em todo o site.  
✅ **Seção "A Vega":** Reorganizada em capítulos, testada em desktop e celular.  
✅ **Commits:** Enviados para `LimaVM/SITE-VEGA` main (push bem-sucedido).  
✅ **Testes:** TypeScript, screenshots, medições ópticas.

**Servidor local:** `http://localhost:3000` ativo durante a sessão.

---

## Saldo de Créditos Higgsfield

- **Antes:** 12,6 créditos
- **Upscale 60fps:** −0,8 créditos
- **Depois:** 9,2 créditos
- **Plano:** Free (sem assinatura)
- **Workspace:** Única conta conectada

---

## Próximas Etapas (Opcional)

1. Limpar arquivos não versionados se não forem usar.
2. Revisar a abertura em diferentes navegadores e dispositivos.
3. Medir métricas de performance (Lighthouse).
4. Publicar para produção (deploy).

---

**Gerado em:** 25 de setembro de 2026  
**Duração da sessão:** ~2 horas  
**Modelo usado:** Sonnet 5 (principal), Haiku 4.5 (final)
