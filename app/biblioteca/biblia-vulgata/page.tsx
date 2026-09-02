// app/biblioteca/biblia-vulgata/page.tsx
import Link from 'next/link';
import type { Metadata } from 'next';
import { books, bookMeta } from './data/books';
import styles from './components/Reader.module.css';
import RegistrarHistorico from './components/RegistrarHistorico';

export const metadata: Metadata = {
  title: `${bookMeta.title} — Biblioteca`,
  description: bookMeta.description,
};

export default function BibliaVulgataPage() {
  const at = books.filter((b) => b.testament === 'AT');
  const nt = books.filter((b) => b.testament === 'NT');

  return (
    <main className={styles.cover}>
      {/* Registra a Bíblia no histórico (sem barra de progresso) */}
      <RegistrarHistorico ultimoCapitulo="Índice dos livros" />

      <div className={styles.coverInner}>

        <nav className={styles.back} aria-label="Navegação de retorno">
          <Link href="/biblioteca">← Biblioteca</Link>
        </nav>

        <header className={styles.coverHead}>
          <p className={styles.eyebrow}>Sagrada Escritura</p>
          <h1 className={styles.coverTitle}>{bookMeta.title}</h1>
          <p className={styles.coverAuthor}>{bookMeta.subtitle}</p>
        </header>

        <section className={styles.meta} aria-label="Informações da obra">
          <dl>
            <div>
              <dt>Tradutor</dt>
              <dd>{bookMeta.translator}</dd>
            </div>
            <div>
              <dt>Original</dt>
              <dd>{bookMeta.originalLanguage}</dd>
            </div>
            <div>
              <dt>Edição-base</dt>
              <dd>{bookMeta.edition}</dd>
            </div>
          </dl>
        </section>

        <nav className={styles.toc} aria-label="Índice dos livros">

          <section aria-labelledby="heading-at">
            <h2 id="heading-at">Antigo Testamento</h2>
            <ol className={styles.tocGrid}>
              {at.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/biblioteca/biblia-vulgata/${b.slug}/1`}
                    className={styles.tocItem}
                  >
                    <span className={styles.tocRoman}>{b.roman}</span>
                    <span className={styles.tocTitle}>{b.title}</span>
                    <span className={styles.tocPages}>{b.pageCount}&nbsp;pág.</span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="heading-nt">
            <h2 id="heading-nt">Novo Testamento</h2>
            <ol className={styles.tocGrid} start={at.length + 1}>
              {nt.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/biblioteca/biblia-vulgata/${b.slug}/1`}
                    className={styles.tocItem}
                  >
                    <span className={styles.tocRoman}>{b.roman}</span>
                    <span className={styles.tocTitle}>{b.title}</span>
                    <span className={styles.tocPages}>{b.pageCount}&nbsp;pág.</span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>

        </nav>

      </div>
    </main>
  );
}