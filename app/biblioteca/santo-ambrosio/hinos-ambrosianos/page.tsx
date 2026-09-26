import type { Metadata } from "next";
import Link from "next/link";
import {
  getTodosHinosAmbrosianos,
  estatisticasHinosAmbrosianos,
} from "../lib/ambrosio-helpers";
import styles from "../biblioteca-ambrosio.module.css";
import BarraSecoes from "../components/BarraSecoes";

export const metadata: Metadata = {
  title: "Hinos Ambrosianos — Santo Ambrósio | Lux Fidei",
  description:
    "Coleção canônica de 15 hinos litúrgicos em Latim e Português, atribuídos a Santo Ambrósio.",
};

export default function PaginaHinosAmbrosianos() {
  const hinos = getTodosHinosAmbrosianos();
  const stats = estatisticasHinosAmbrosianos();

  return (
    <div className={styles.pagina}>
      <nav className={styles.topoNav}>
        <Link href="/biblioteca/santo-ambrosio" className={styles.linkVoltar}>
          ← Voltar ao índice da obra
        </Link>
        <span className={styles.migalhas}>Biblioteca / Hinos Ambrosianos</span>
      </nav>
      <BarraSecoes ativa="hinos-ambrosianos" />

      <header className={styles.cabecalhoSecao}>
        <div className={styles.cabecalhoSecaoIcone}>🎵</div>
        <h1 className={styles.cabecalhoSecaoTitulo}>Hinos Ambrosianos</h1>
        <p className={styles.cabecalhoSecaoDescricao}>
          Coleção canônica de 15 hinos litúrgicos latinos compostos para as
          Horas e Festas, fundamentais para a hinodia ocidental. Tradução
          bilíngue latim/português brasileiro.
        </p>

        <div className={styles.estatisticasBanner}>
          <span className={styles.estatisticaItem}>
            <strong>{stats.total}</strong> hinos
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
        {hinos.map((hino) => (
          <Link
            key={hino.id}
            href={`/biblioteca/santo-ambrosio/hinos-ambrosianos/${hino.id}`}
            className={styles.leitorCard}
          >
            <div className={styles.leitorCardTop}>
              <span className={styles.leitorCardNumero}>
                Hino {hino.numero}
              </span>
              <span
                className={`${styles.etiqueta} ${
                  hino.autenticidade === "autêntica"
                    ? styles.statusAutentico
                    : hino.autenticidade === "tradicional"
                      ? styles.statusTradicional
                      : styles.statusProvavel
                }`}
              >
                {hino.autenticidade}
              </span>
            </div>

            <h2 className={styles.leitorCardTitulo}>{hino.titulo}</h2>
            {hino.subtitulo && (
              <p className={styles.leitorCardSubtitulo}>{hino.subtitulo}</p>
            )}

            <p className={styles.leitorCardData}>📅 {hino.data.original}</p>

            {hino.contextoHistorico && (
              <p className={styles.leitorCardContexto}>
                {hino.contextoHistorico}
              </p>
            )}

            <div style={{ marginBottom: 12 }}>
              {hino.temas.map((tema) => (
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
