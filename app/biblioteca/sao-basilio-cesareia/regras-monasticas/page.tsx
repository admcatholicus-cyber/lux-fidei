import type { Metadata } from "next";
import Link from "next/link";
import {
  getTodosCapitulosRegrasMonasticas,
  estatisticasCapitulosRegrasMonasticas,
} from "../lib/basilio-helpers";
import styles from "../biblioteca-basilio.module.css";

export const metadata: Metadata = {
  title: "Regras Monásticas — São Basílio de Cesareia | Lux Fidei",
  description:
    "O documento fundador do monaquismo oriental por São Basílio, em tradução bilíngue inglês/português.",
};

export default function PaginaRegrasMonasticas() {
  const capitulos = getTodosCapitulosRegrasMonasticas();
  const stats = estatisticasCapitulosRegrasMonasticas();

  return (
    <div className={styles.pagina}>
      <nav className={styles.topoNav}>
        <Link
          href="/biblioteca/sao-basilio-cesareia"
          className={styles.linkVoltar}
        >
          ← Voltar ao índice da obra
        </Link>
        <span className={styles.migalhas}>Biblioteca / Regras Monásticas</span>
      </nav>

      <header className={styles.cabecalhoSecao}>
        <div className={styles.cabecalhoSecaoIcone}>🕯️</div>
        <h1 className={styles.cabecalhoSecaoTitulo}>
          Regras Monásticas (Grandes e Pequenas)
        </h1>
        <p className={styles.cabecalhoSecaoDescricao}>
          O documento fundador do monaquismo oriental. Na forma de perguntas e
          respostas, Basílio delineia a vida ascética e comunitária cristã
          fundamentada no amor a Deus e ao próximo. Tradução bilíngue
          inglês/português brasileiro.
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
            href={`/biblioteca/sao-basilio-cesareia/regras-monasticas/${cap.id}`}
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
