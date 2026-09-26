import type { Metadata } from "next";
import Link from "next/link";
import {
  getTodosCapitulosDeSpirituSanctoBasilio,
  estatisticasCapitulosDeSpirituSanctoBasilio,
} from "../lib/basilio-helpers";
import styles from "../biblioteca-basilio.module.css";

export const metadata: Metadata = {
  title: "De Spiritu Sancto — São Basílio de Cesareia | Lux Fidei",
  description:
    "A obra-prima pneumatológica de Basílio que fundamentou a divindade do Espírito Santo no Concílio de 381, em tradução bilíngue inglês/português.",
};

export default function PaginaDeSpirituSanctoBasilio() {
  const capitulos = getTodosCapitulosDeSpirituSanctoBasilio();
  const stats = estatisticasCapitulosDeSpirituSanctoBasilio();

  return (
    <div className={styles.pagina}>
      <nav className={styles.topoNav}>
        <Link
          href="/biblioteca/sao-basilio-cesareia"
          className={styles.linkVoltar}
        >
          ← Voltar ao índice da obra
        </Link>
        <span className={styles.migalhas}>Biblioteca / De Spiritu Sancto</span>
      </nav>

      <header className={styles.cabecalhoSecao}>
        <div className={styles.cabecalhoSecaoIcone}>🕊️</div>
        <h1 className={styles.cabecalhoSecaoTitulo}>
          De Spiritu Sancto — Sobre o Espírito Santo
        </h1>
        <p className={styles.cabecalhoSecaoDescricao}>
          A obra-prima pneumatológica de Basílio que fundamentou a divindade do
          Espírito Santo no Concílio de 381, argumentando a partir da liturgia e
          da fórmula batismal. Tradução bilíngue inglês/português brasileiro.
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
            href={`/biblioteca/sao-basilio-cesareia/de-spiritu-sancto-basilio/${cap.id}`}
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
