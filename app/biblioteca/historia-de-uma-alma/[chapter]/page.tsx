import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { chapters, bookMeta } from '../data/chapters';
import ChapterReader from '../components/ChapterReader';

type Params = { chapter: string };

export function generateStaticParams(): Params[] {
  return chapters.map((c) => ({ chapter: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { chapter: slug } = await params;
  const ch = chapters.find((c) => c.slug === slug);
  if (!ch) return { title: bookMeta.title };
  return {
    title: `${ch.roman} — ${ch.title} | ${bookMeta.title}`,
    description: ch.subtitle,
  };
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { chapter: slug } = await params;
  const index = chapters.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();
  const ch = chapters[index];
  const prev = chapters[index - 1] ?? null;
  const next = chapters[index + 1] ?? null;

  return (
    <ChapterReader
      chapter={ch}
      prev={prev}
      next={next}
      total={chapters.length}
      allChapters={chapters.map((c) => ({
        slug: c.slug,
        roman: c.roman,
        title: c.title,
        number: c.number,
      }))}
    />
  );
}
