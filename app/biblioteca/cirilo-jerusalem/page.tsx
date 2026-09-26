import Link from "next/link";
import type { Metadata } from "next";
import { catequeses, bookMeta } from "./data/catequeses";
import styles from "./cirilo-landing.module.css";

export const metadata: Metadata = {
  title: `${bookMeta.title} | ${bookMeta.authorShort}`,
  description: bookMeta.description,
};

export default function CiriloJerusalemPage() {
  const preBatismais = catequeses.filter((c) => c.tipo === "pre-batismal");
  const mistagogicas = catequeses.filter((c) => c.tipo === "mistagogica");

  return (
    <main className={styles.landingContainer}>
      <nav className={styles.topNav}>
        <Link href="/biblioteca" className={styles.backButton}>
          &larr; Voltar à Biblioteca
        </Link>
      </nav>

      <header className={styles.headerObra}>
        <span className={styles.badgeObra}>
          Biblioteca Patrística · Século IV
        </span>
        <h1 className={styles.tituloObra}>{bookMeta.title}</h1>
        <p className={styles.autorObra}>{bookMeta.author}</p>
        <p className={styles.descricaoObra}>{bookMeta.description}</p>
      </header>

      <section className={styles.secaoCatequeses}>
        <div className={styles.secaoHeader}>
          <h2>Catequeses Pré-Batismais</h2>
          <p>
            Proferidas durante a Quaresma aos catecúmenos que se preparavam para
            receber o Batismo na Vigília Pascal.
          </p>
        </div>
        <div className={styles.gridCapitulos}>
          {preBatismais.map((c) => (
            <Link
              key={c.slug}
              href={`/biblioteca/cirilo-jerusalem/${c.slug}`}
              className={styles.cardCapitulo}
            >
              <span className={styles.numeroCapitulo}>
                Catequese {c.number}
              </span>
              <h3 className={styles.tituloCapitulo}>{c.titulo}</h3>
              {c.subtitulo && (
                <p className={styles.subtituloCapitulo}>{c.subtitulo}</p>
              )}
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.secaoCatequeses}>
        <div className={styles.secaoHeader}>
          <h2>Catequeses Mistagógicas</h2>
          <p>
            Proferidas na semana da oitava de Páscoa aos neófitos, explicando os
            mistérios do Batismo, Crisma e Eucaristia.
          </p>
        </div>
        <div className={styles.gridCapitulos}>
          {mistagogicas.map((c) => (
            <Link
              key={c.slug}
              href={`/biblioteca/cirilo-jerusalem/${c.slug}`}
              className={styles.cardCapitulo}
            >
              <span className={styles.numeroCapitulo}>
                Mistagógica {c.number}
              </span>
              <h3 className={styles.tituloCapitulo}>{c.titulo}</h3>
              {c.subtitulo && (
                <p className={styles.subtituloCapitulo}>{c.subtitulo}</p>
              )}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
