import type { Metadata } from "next";
import Link from "next/link";
import {
  getTodosCapitulosGrandeCatequese,
  estatisticasCapitulosGrandeCatequese,
} from "../lib/gregorio-helpers";
import styles from "../biblioteca-gregorio.module.css";

export const metadata: Metadata = {
  title: "A Grande Catequese — São Gregório de Nissa | Lux Fidei",
  description:
    "Manual de teologia dogmática de São Gregório de Nissa, em tradução bilíngue inglês/português.",
};

export default function PaginaGrandeCatequese() {
  const capitulos = getTodosCapitulosGrandeCatequese();
  const stats = estatisticasCapitulosGrandeCatequese();

  return (
    <div className={styles.pagina}>
      <nav className={styles.topoNav}>
        <Link
          href="/biblioteca/sao-gregorio-nissa"
          className={styles.linkVoltar}
        >
          ← Voltar ao índice da obra
        </Link>
        <span className={styles.migalhas}>Biblioteca / A Grande Catequese</span>
      </nav>

      <header className={styles.cabecalhoSecao}>
        <div className={styles.cabecalhoSecaoIcone}>📖</div>
        <h1 className={styles.cabecalhoSecaoTitulo}>A Grande Catequese</h1>
        <p className={styles.cabecalhoSecaoDescricao}>
          O magistral manual de teologia dogmática de São Gregório, no qual ele
          expõe e defende os mistérios da Trindade, Encarnação, Redenção e os
          Sacramentos. Tradução bilíngue inglês/português brasileiro.
        </p>

        <div className={styles.estatisticasBanner}>
          <span className={styles.estatisticaItem}>
            <strong>{stats.total}</strong> capítulo
            {stats.total !== 1 ? "s" : ""}
          </span>
          <span className={styles.estatisticaItem}>
            <strong>{stats.autenticas}</strong> autêntico
            {stats.autenticas !== 1 ? "s" : ""}
          </span>
        </div>
      </header>

      <main className={styles.gridCapitulos}>
        {capitulos.map((cap) => (
          <Link
            key={cap.id}
            href={`/biblioteca/sao-gregorio-nissa/grande-catequese/${cap.id}`}
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
