import type { Metadata } from "next";
import Link from "next/link";
import {
  getTodosCapitulosDeOfficiis,
  estatisticasCapitulosDeOfficiis,
} from "../lib/ambrosio-helpers";
import styles from "../biblioteca-ambrosio.module.css";
import BarraSecoes from "../components/BarraSecoes";

export const metadata: Metadata = {
  title: "De Officiis Ministrorum — Santo Ambrósio | Lux Fidei",
  description:
    "Tratado de Santo Ambrósio sobre os deveres dos ministros, em tradução bilíngue latim/português.",
};

export default function PaginaDeOfficiis() {
  const capitulos = getTodosCapitulosDeOfficiis();
  const stats = estatisticasCapitulosDeOfficiis();

  return (
    <div className={styles.pagina}>
      <nav className={styles.topoNav}>
        <Link href="/biblioteca/santo-ambrosio" className={styles.linkVoltar}>
          ← Voltar ao índice da obra
        </Link>
        <span className={styles.migalhas}>
          Biblioteca / De Officiis Ministrorum
        </span>
      </nav>
      <BarraSecoes ativa="de-officiis" />

      <header className={styles.cabecalhoSecao}>
        <div className={styles.cabecalhoSecaoIcone}>📜</div>
        <h1 className={styles.cabecalhoSecaoTitulo}>De Officiis Ministrorum</h1>
        <p className={styles.cabecalhoSecaoDescricao}>
          Tratado em três livros sobre os deveres morais do clero e a ética
          cristã, tomando como modelo Cícero e as Escrituras. Tradução bilíngue
          latim/português brasileiro.
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
            href={`/biblioteca/santo-ambrosio/de-officiis/${cap.id}`}
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
              <span>📖 Ler em latim e português</span>
              <span>→</span>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}
