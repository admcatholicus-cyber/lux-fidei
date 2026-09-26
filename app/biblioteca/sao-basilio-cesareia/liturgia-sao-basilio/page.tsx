import type { Metadata } from "next";
import Link from "next/link";
import {
  getTodosCapitulosLiturgiaSaoBasilio,
  estatisticasCapitulosLiturgiaSaoBasilio,
} from "../lib/basilio-helpers";
import styles from "../biblioteca-basilio.module.css";

export const metadata: Metadata = {
  title: "Divina Liturgia de São Basílio — São Basílio de Cesareia | Lux Fidei",
  description:
    "A venerável eucologia e anáfora eucarística composta e compilada por São Basílio, em tradução bilíngue inglês/português.",
};

export default function PaginaLiturgiaSaoBasilio() {
  const capitulos = getTodosCapitulosLiturgiaSaoBasilio();
  const stats = estatisticasCapitulosLiturgiaSaoBasilio();

  return (
    <div className={styles.pagina}>
      <nav className={styles.topoNav}>
        <Link
          href="/biblioteca/sao-basilio-cesareia"
          className={styles.linkVoltar}
        >
          ← Voltar ao índice da obra
        </Link>
        <span className={styles.migalhas}>
          Biblioteca / Liturgia de São Basílio
        </span>
      </nav>

      <header className={styles.cabecalhoSecao}>
        <div className={styles.cabecalhoSecaoIcone}>📜</div>
        <h1 className={styles.cabecalhoSecaoTitulo}>Que Não Há Três Deuses</h1>
        <p className={styles.cabecalhoSecaoDescricao}>
          Tratado dogmático dirigido ao bispo Ablábio sobre a unicidade da
          essência divina e a distinção das Pessoas da Santíssima Trindade.
          Tradução bilíngue inglês/português brasileiro.
        </p>

        <div className={styles.heroStats}>
          <span>🗓️ {capitulos[0]?.data.original || "Século IV"}</span>
          <span>•</span>
          <span>{stats.total} capítulos</span>
          <span>•</span>
          <span>{stats.autenticas} autênticos</span>
        </div>
      </header>

      <main className={styles.gridCapitulos}>
        {capitulos.map((cap) => (
          <Link
            key={cap.id}
            href={`/biblioteca/sao-basilio-cesareia/liturgia-sao-basilio/${cap.id}`}
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
