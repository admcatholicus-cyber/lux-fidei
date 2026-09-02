import { redirect } from 'next/navigation';
import { findBook } from '../data/books';
import { notFound } from 'next/navigation';

type Params = { book: string };

export default async function BookIndex({
  params,
}: {
  params: Promise<Params>;
}) {
  const { book } = await params;
  if (!findBook(book)) notFound();
  redirect(`/biblioteca/biblia-vulgata/${book}/1`);
}
