import type { Metadata } from "next";
import Link from "next/link";
import {
  getTodosCapitulosDeAnimaEtResurrectione,
  estatisticasCapitulosDeAnimaEtResurrectione,
} from "../lib/gregorio-helpers";
import styles from "../biblioteca-gregorio.module.css";

export const metadata: Metadata = {
  title: "Sobre a Alma e a Ressurreição — São Gregório de Nissa | Lux Fidei",
  description:
    "Diálogo entre São Gregório de Nissa e Santa Macrina sobre a imortalidade da alma e a ressurreição da carne, em tradução bilíngue.",
};

export default function PaginaDeAnimaEtResurrectione() {
  const capitulos = getTodosCapitulosDeAnimaEtResurrectione();
  const stats = estatisticasCapitulosDeAnimaEtResurrectione();

  return (
    <div className={styles.pagina}>
      <nav className={styles.topoNav}>
        <Link
          href="/biblioteca/sao-gregorio-nissa"
          className={styles.linkVoltar}
        >
          ← Voltar ao índice da obra
        </Link>
        <span className={styles.migalhas}>
          Biblioteca / Sobre a Alma e a Ressurreição
        </span>
      </nav>

      <header className={styles.cabecalhoSecao}>
        <div className={styles.cabecalhoSecaoIcone}>📖</div>
        <h1 className={styles.cabecalhoSecaoTitulo}>
          Sobre a Alma e a Ressurreição
        </h1>
        <p className={styles.cabecalhoSecaoDescricao}>
          Diálogo entre São Gregório de Nissa e sua irmã Santa Macrina sobre a
          imortalidade da alma, o estado intermediário após a morte e a
          ressurreição final da carne. Tradução bilíngue.
        </p>

        <div className={styles.estatisticasBanner}>
          <span className={styles.estatisticaItem}>
            <strong>{stats.total}</strong> parte{stats.total !== 1 ? "s" : ""}
          </span>
          <span className={styles.estatisticaItem}>
            <strong>{stats.autenticas}</strong> autêntico{stats.autenticas !== 1 ? "s" : ""}
          </span>
        </div>
      </header>

      <main className={styles.gridCapitulos}>
        {capitulos.map((cap) => (
          <Link
            key={cap.id}
            href={`/biblioteca/sao-gregorio-nissa/de-anima-et-resurrectione/${cap.id}`}
            className={styles.leitorCard}
          >
            <div className={styles.leitorCardTop}>
              <span className={styles.leitorCardNumero}>
                Parte {cap.numero}
              </span>
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
