import type { Metadata } from "next";
import Link from "next/link";
import {
  getTodosCapitulosDeSpirituSancto,
  estatisticasCapitulos,
} from "../lib/ambrosio-helpers";
import styles from "../biblioteca-ambrosio.module.css";
import BarraSecoes from "../components/BarraSecoes";

export const metadata: Metadata = {
  title: "De Spiritu Sancto — Santo Ambrósio | Lux Fidei",
  description:
    "Tratado pneumático de Santo Ambrósio sobre o Espírito Santo, em tradução bilíngue latim/português.",
};

export default function PaginaDeSpirituSancto() {
  const capitulos = getTodosCapitulosDeSpirituSancto();
  const stats = estatisticasCapitulos();

  return (
    <div className={styles.pagina}>
      <nav className={styles.topoNav}>
        <Link href="/biblioteca/santo-ambrosio" className={styles.linkVoltar}>
          ← Voltar ao índice da obra
        </Link>
        <span className={styles.migalhas}>Biblioteca / De Spiritu Sancto</span>
      </nav>
      <BarraSecoes ativa="de-spiritu-sancto" />

      <header className={styles.cabecalhoSecao}>
        <div className={styles.cabecalhoSecaoIcone}>🕊</div>
        <h1 className={styles.cabecalhoSecaoTitulo}>De Spiritu Sancto</h1>
        <p className={styles.cabecalhoSecaoDescricao}>
          Tratado pneumático em três livros, dirigido ao Imperador Graciano,
          sobre a divindade, as obras e a Processão do Espírito Santo. Tradução
          bilíngue latim/português brasileiro.
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
            href={`/biblioteca/santo-ambrosio/de-spiritu-sancto/${cap.id}`}
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
              <span>📖 Ler em {cap.original.idioma} e português</span>
              <span>→</span>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}
