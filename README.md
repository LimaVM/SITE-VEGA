# Vega Network

Site institucional da Vega Network, com foco em serviços gerenciados de TI (MSP) para empresas. Apresenta a gestão de infraestrutura, monitoramento, suporte, segurança, backup e nuvem.

## Desenvolvimento local

Requer Node.js e pnpm.

```bash
pnpm install
pnpm dev
```

Abra `http://localhost:3000` no navegador. Para validar a versão de produção, execute `pnpm build`.

## Conteúdo

- As seções da página inicial estão em `components/` e são reunidas em `app/page.tsx`.
- O título e a descrição usados por buscadores estão em `app/layout.tsx`.
- A mensagem de contato do WhatsApp está em `lib/contact.ts`.

O site é desenvolvido com Next.js, React e Tailwind CSS.
