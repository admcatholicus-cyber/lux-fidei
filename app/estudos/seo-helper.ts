// app/estudos/seo-helper.ts
import type { Metadata } from 'next';

// ⚠️ Mude para o seu domínio exato (com ou sem www)
export const BASE_URL = 'https://lux-fidei.vercel.app';

interface StudySeoProps {
  title: string;
  description: string;
  path: string; // Ex: '/estudos/sacramentos/crisma'
}

export function createStudyMetadata({ title, description, path }: StudySeoProps): Metadata {
  const fullUrl = `${BASE_URL}${path}`;

  return {
    title: `${title} | Lux Fidei`,
    description,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: `${title} | Lux Fidei`,
      description,
      url: fullUrl,
      type: 'article',
      siteName: 'Lux Fidei',
      locale: 'pt_BR',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Lux Fidei`,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}