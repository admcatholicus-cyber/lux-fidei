// app/santos/[categoria]/[slug]/page.tsx
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { gerarMetadataSantoRaiz } from '../../_lib/gerarMetadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string; slug: string }>;
}): Promise<Metadata> {
  const { categoria, slug } = await params;
  try {
    const { meta } = await import(`../../_content/${categoria}/${slug}/meta`);
    return gerarMetadataSantoRaiz(meta);
  } catch {
    return { title: 'Lux Fidei — Santos da Igreja Católica' };
  }
}
export default async function SantoPage({
  params,
}: {
  params: Promise<{ categoria: string; slug: string }>;
}) {
  const { categoria, slug } = await params;
  
  const { meta } = await import(
    `../../_content/${categoria}/${slug}/meta`
  );
  
  const primeiraAba = meta.abas[0].slug;
  redirect(`/santos/${categoria}/${slug}/${primeiraAba}`);
}