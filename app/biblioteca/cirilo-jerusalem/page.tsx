import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { bookMeta, colecoesCirilo } from "./data/catequeses";
import styles from "./components/CatequeseReader.module.css";

export const metadata: Metadata = {
  title: `${bookMeta.title} | ${bookMeta.authorShort}`,
  description: bookMeta.description,
};

export default function CiriloJerusalemPage() {
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
        <h1 className={styles.tituloObra}>{bookMeta.author}</h1>
        <p className={styles.autorObra}>{bookMeta.title}</p>
        <p className={styles.descricaoObra}>{bookMeta.description}</p>
      </header>

      <section className={styles.secaoObras}>
        <h2 className={styles.secaoTitulo}>Obras disponíveis</h2>
        <div className={styles.obrasGrid}>
          {colecoesCirilo.map((colecao) => (
            <div key={colecao.slug} className={styles.cardObra}>
              <div className={styles.capaContainer}>
                <Image
                  src={colecao.capa}
                  alt={`Capa de ${colecao.titulo}`}
                  width={300}
                  height={420}
                  className={styles.imagemCapaHorizontal}
                />
              </div>
              <div className={styles.cardObraConteudo}>
                <div>
                  <div className={styles.cardHeaderArea}>
                    <h3 className={styles.cardObraTitulo}>{colecao.titulo}</h3>
                    {colecao.tituloLatim && (
                      <span className={styles.tituloLatim}>
                        {colecao.tituloLatim}
                      </span>
                    )}
                  </div>
                  <p className={styles.cardObraDescricao}>
                    {colecao.descricao}
                  </p>
                </div>
                <div className={styles.cardObraFooter}>
                  <span className={styles.capitulosBadge}>
                    {colecao.capitulosCount} catequeses
                  </span>
                  <Link href={colecao.rota} className={styles.lerAgoraBtn}>
                    Acessar Obra <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
