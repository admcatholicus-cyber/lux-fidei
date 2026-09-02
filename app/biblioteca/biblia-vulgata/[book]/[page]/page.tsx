import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { books, findBook, bookMeta } from '../../data/books';
import { loadBook } from '../../data/loader';
import PageReader from '../../components/PageReader';

type Params = { book: string; page: string };

export async function generateStaticParams(): Promise<Params[]> {
  const out: Params[] = [];
  for (const b of books) {
    for (let i = 1; i <= b.pageCount; i++) {
      out.push({ book: b.slug, page: String(i) });
    }
  }
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { book, page } = await params;
  const info = findBook(book);
  if (!info) return { title: bookMeta.title };
  return {
    title: `${info.title} — pág. ${page} | ${bookMeta.title}`,
    description: `${bookMeta.title}: ${info.title}, página ${page} de ${info.pageCount}.`,
  };
}

export default async function BiblePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { book: slug, page: pageStr } = await params;
  const info = findBook(slug);
  if (!info) notFound();

  const pageNum = Number.parseInt(pageStr, 10);
  if (!Number.isFinite(pageNum) || pageNum < 1 || pageNum > info.pageCount) {
    notFound();
  }

  const data = await loadBook(slug);
  if (!data) notFound();

  const pageIndex = pageNum - 1;
  const current = data.pages[pageIndex];
  if (!current) notFound();

  const bookIdx = books.findIndex((b) => b.slug === slug);
  const prevBook = bookIdx > 0 ? books[bookIdx - 1] : null;
  const nextBook = bookIdx < books.length - 1 ? books[bookIdx + 1] : null;

  const prev =
    pageNum > 1
      ? { href: `/biblioteca/biblia-vulgata/${slug}/${pageNum - 1}`, label: `pág. ${pageNum - 1}` }
      : prevBook
      ? {
          href: `/biblioteca/biblia-vulgata/${prevBook.slug}/${prevBook.pageCount}`,
          label: `${prevBook.title}`,
        }
      : null;

  const next =
    pageNum < info.pageCount
      ? { href: `/biblioteca/biblia-vulgata/${slug}/${pageNum + 1}`, label: `pág. ${pageNum + 1}` }
      : nextBook
      ? { href: `/biblioteca/biblia-vulgata/${nextBook.slug}/1`, label: `${nextBook.title}` }
      : null;

  return (
    <PageReader
      book={info}
      pageNumber={pageNum}
      totalPages={info.pageCount}
      paragraphs={current.paragraphs}
      pdfPage={current.pdfPage}
      prev={prev}
      next={next}
      allBooks={books.map((b) => ({
        slug: b.slug,
        title: b.title,
        roman: b.roman,
        number: b.number,
        testament: b.testament,
        pageCount: b.pageCount,
      }))}
    />
  );
}
