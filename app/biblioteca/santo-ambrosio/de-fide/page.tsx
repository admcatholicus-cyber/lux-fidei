import type { Metadata } from "next";
import Link from "next/link";
import {
  getTodosCapitulosDeFide,
  estatisticasCapitulosDeFide,
} from "../lib/ambrosio-helpers";
import styles from "../biblioteca-ambrosio.module.css";
import BarraSecoes from "../components/BarraSecoes";

export const metadata: Metadata = {
  title: "De Fide — Santo Ambrósio | Lux Fidei",
  description:
    "Tratado de Santo Ambrósio sobre a Fé cristã, em tradução bilíngue inglês/português.",
};

export default function PaginaDeFide() {
  const capitulos = getTodosCapitulosDeFide();
  const stats = estatisticasCapitulosDeFide();

  return (
    <div className={styles.pagina}>
      <nav className={styles.topoNav}>
        <Link href="/biblioteca/santo-ambrosio" className={styles.linkVoltar}>
          ← Voltar ao índice da obra
        </Link>
        <span className={styles.migalhas}>Biblioteca / De Fide</span>
      </nav>
      <BarraSecoes ativa="de-fide" />

      <header className={styles.cabecalhoSecao}>
        <div className={styles.cabecalhoSecaoIcone}>✝</div>
        <h1 className={styles.cabecalhoSecaoTitulo}>De Fide</h1>
        <p className={styles.cabecalhoSecaoDescricao}>
          Tratado sobre a Fé cristã, dirigido ao Imperador Graciano, defendendo
          a doutrina nicena contra os arianos. Tradução bilíngue
          inglês/português brasileiro.
        </p>

        <div className={styles.estatisticasBanner}>
          <span className={styles.estatisticaItem}>
            <strong>{stats.total}</strong> capítulos
          </span>
          <span className={styles.estatisticaItem}>
            <strong>{stats.autenticas}</strong> autênticos
          </span>
          <span className={styles.estatisticaItem}>
            <strong>{stats.tradicionais}</strong> tradicionais
          </span>
          <span className={styles.estatisticaItem}>
            <strong>{stats.atribuidas}</strong> atribuídos
          </span>
        </div>
      </header>

      <main className={styles.gridCapitulos}>
        {capitulos.map((cap) => (
          <Link
            key={cap.id}
            href={`/biblioteca/santo-ambrosio/de-fide/${cap.id}`}
            className={styles.leitorCard}
          >
            <div className={styles.leitorCardTop}>
              <span className={styles.leitorCardNumero}>Cap. {cap.numero}</span>
              <span
                className={`${styles.etiqueta} ${
                  cap.autenticidade === "autêntica"
                    ? styles.statusAutentico
                    : cap.autenticidade === "tradicional"
                      ? styles.statusTradicional
                      : styles.statusProvavel
                }`}
              >
                {cap.autenticidade}
              </span>
            </div>

            <h2 className={styles.leitorCardTitulo}>{cap.titulo}</h2>
            {cap.subtitulo && (
              <p className={styles.leitorCardSubtitulo}>{cap.subtitulo}</p>
            )}

            <p className={styles.leitorCardData}>📅 {cap.data.original}</p>

            {cap.contextoHistorico && (
              <p className={styles.leitorCardContexto}>
                {cap.contextoHistorico}
              </p>
            )}

            <div style={{ marginBottom: 12 }}>
              {cap.temas.map((tema) => (
                <span key={tema} className={styles.temaTag}>
                  {tema}
                </span>
              ))}
            </div>

            <div className={styles.leitorCardRodape}>
              <span>📖 Ler em inglês e português</span>
              <span>→</span>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}
