import type { NextConfig } from "next";
import createMDX from "@next/mdx";

/* ══════════════════════════════════════════════════════════════
   LUX FIDEI · next.config.ts
   Next.js 16 + Turbopack + MDX + TypeScript
   ══════════════════════════════════════════════════════════════ */

const nextConfig: NextConfig = {
  /* ─────────────────────────────────────────────────────────────
     1. EXTENSÕES DE PÁGINA
     Permite que arquivos .mdx e .md sejam tratados como páginas
     ───────────────────────────────────────────────────────────── */
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  /* ─────────────────────────────────────────────────────────────
     2. BUILD — ignora erros de TS/ESLint durante o build
     (útil em dev; considere remover em produção final)
     ───────────────────────────────────────────────────────────── */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  /* ─────────────────────────────────────────────────────────────
     3. IMAGENS
     - qualities: níveis de compressão permitidos no <Image>
     - formats: WebP e AVIF para arquivos menores/mais rápidos
     - minimumCacheTTL: cache de 30 dias no CDN da Vercel
     - dangerouslyAllowSVG: caso um dia precise carregar SVG
     ───────────────────────────────────────────────────────────── */
  images: {
    qualities: [50, 75, 85, 90, 95, 100],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 dias
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  /* ─────────────────────────────────────────────────────────────
     4. TURBOPACK + MDX
     Registra o loader de MDX para funcionar com Turbopack
     ───────────────────────────────────────────────────────────── */
  turbopack: {
    rules: {
      "*.mdx": {
        loaders: ["@mdx-js/loader"],
        as: "*.tsx",
      },
    },
  },

  /* ─────────────────────────────────────────────────────────────
     5. PERFORMANCE
     ───────────────────────────────────────────────────────────── */
  reactStrictMode: true,
  poweredByHeader: false, // remove header "X-Powered-By: Next.js"
  compress: true,

  /* ─────────────────────────────────────────────────────────────
     6. LOGGING (dev) — mostra requests de fetch no terminal
     ───────────────────────────────────────────────────────────── */
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
};

/* ══════════════════════════════════════════════════════════════
   MDX WRAPPER
   Plugins remark/rehype podem ser adicionados aqui no futuro
   (ex: remark-gfm, rehype-slug, rehype-autolink-headings)
   ══════════════════════════════════════════════════════════════ */
const withMDX = createMDX({
  options: {
    // remarkPlugins: [],
    // rehypePlugins: [],
  },
});

export default withMDX(nextConfig);