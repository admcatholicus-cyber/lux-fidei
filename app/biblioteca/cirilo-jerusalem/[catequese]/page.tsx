import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { catequeses, bookMeta } from '../data/catequeses';
import CatequeseReader from '../components/CatequeseReader';

type Params = { catequese: string };

export function generateStaticParams(): Params[] {
  return catequeses.map((c) => ({ catequese: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { catequese: slug } = await params;
  const c = catequeses.find((c) => c.slug === slug);
  if (!c) return { title: bookMeta.title };
  return {
    title: `Cat. ${c.number} — ${c.titulo} | ${bookMeta.title}`,
    description: c.subtitulo ?? c.titulo,
  };
}

export default async function CatequesePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { catequese: slug } = await params;
  const index = catequeses.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();
  const c = catequeses[index];
  const prev = catequeses[index - 1] ?? null;
  const next = catequeses[index + 1] ?? null;

  return (
    <CatequeseReader
      catequese={c}
      prev={prev}
      next={next}
      total={catequeses.length}
      allCatequeses={catequeses.map((c) => ({
        slug: c.slug,
        titulo: c.titulo,
        number: c.number,
        tipo: c.tipo,
      }))}
    />
  );
}
