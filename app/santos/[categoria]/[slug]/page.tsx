// app/santos/[categoria]/[slug]/page.tsx
import { redirect } from 'next/navigation';

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