import type { Metadata } from 'next';

const SITE_URL = 'https://lux-fidei.vercel.app';

type Aba = {
  slug: string;
  label: string;
  titulo?: string;
  subtitulo?: string;
  description?: string;
  destaque?: boolean;
};

type SantoMeta = {
  nome: string;
  titulo?: string;
  subtitulo?: string;
  categoria: string;
  slug: string;
  abas: Aba[];
};

function limitar(txt: string, max = 160): string {
  const t = txt.replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  return t.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';
}

/**
 * Gera metadata única (title + description + canonical) para cada aba
 * de cada santo. Resolve o problema de páginas duplicadas no Google.
 */
export function gerarMetadataAba(
  santo: SantoMeta,
  abaSlug: string,
): Metadata {
  const aba = santo.abas.find((a) => a.slug === abaSlug);

  const tituloAba = aba?.titulo || aba?.label || 'Biografia';

  // Descrição em cascata: description > subtitulo > gerada
  const descricaoBase =
    aba?.description ||
    aba?.subtitulo ||
    (santo.titulo
      ? `${tituloAba} de ${santo.nome}. ${santo.titulo}.`
      : `${tituloAba} de ${santo.nome}: vida, doutrina e devoção na tradição da Igreja Católica.`);

  const description = limitar(descricaoBase);

  const url = `${SITE_URL}/santos/${santo.categoria}/${santo.slug}/${abaSlug}`;
  const title = `${santo.nome}: ${tituloAba} — Lux Fidei`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Lux Fidei',
      locale: 'pt_BR',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

/**
 * Metadata para a URL raiz do santo (/santos/cat/slug sem aba).
 * O middleware já redireciona para a primeira aba com 308,
 * mas isso garante canonical correto se algum bot chegar aqui antes.
 */
export function gerarMetadataSantoRaiz(santo: SantoMeta): Metadata {
  const primeiraAba = santo.abas[0]?.slug;
  const canonical = primeiraAba
    ? `${SITE_URL}/santos/${santo.categoria}/${santo.slug}/${primeiraAba}`
    : `${SITE_URL}/santos/${santo.categoria}/${santo.slug}`;

  const description = limitar(
    santo.subtitulo ||
      santo.titulo ||
      `Vida, doutrina e devoção de ${santo.nome} na tradição da Igreja Católica.`,
  );

  return {
    title: `${santo.nome} — Lux Fidei`,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${santo.nome} — Lux Fidei`,
      description,
      url: canonical,
      siteName: 'Lux Fidei',
      locale: 'pt_BR',
      type: 'article',
    },
  };
}