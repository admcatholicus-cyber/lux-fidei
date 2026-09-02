import type { Metadata } from "next";
import Link from "next/link";
import { todasOracoes } from "../lib/sermoes-helpers";
import styles from "../biblioteca-vianney.module.css";

export const metadata: Metadata = {
  title: "Orações do Cura d'Ars | Lux Fidei",
  description: "Orações, atos de fé e fórmulas espirituais de São João Maria Vianney.",
};

export default function PaginaListaOracoes() {
  const oracoesLista = todasOracoes();

  return (
    <div className={styles.pagina}>
      <nav className={styles.topoNav}>
        <Link href="/biblioteca/sao-joao-maria-vianney" className={styles.linkVoltar}>
          ← Voltar à Capa da Obra
        </Link>
        <span className={styles.migalhas}>Biblioteca / Orações Espirituais</span>
      </nav>

      <header className={styles.cabecalhoSecao}>
        <h1 className={styles.cabecalhoSecaoTitulo}>Orações & Fórmulas Espirituais</h1>
        <p className={styles.cabecalhoSecaoDescricao}>
          Orações, atos de fé, esperança, caridade, contrição e fórmulas de devoção transmitidas e rezadas por São João Maria Vianney.
        </p>
      </header>

      <main className={styles.gridSermoes}>
        {oracoesLista.map((oracao) => (
          <Link key={oracao.id} href={`/biblioteca/sao-joao-maria-vianney/oracoes/${oracao.id}`} className={styles.cardSermao}>
            <div className={styles.cardSermaoBadge}>
              {oracao.tipo || "Oração Espiritual"}
            </div>

            <h2 className={styles.cardSermaoTitulo}>{oracao.tituloPortugues}</h2>
            <p className={styles.cardSermaoPrevia}>
              “{(oracao.portugues?.texto || oracao.original?.texto || "").substring(0, 160)}...”
            </p>

            <div className={styles.cardSermaoRodape}>
              <span>📖 Rezar oração completa</span>
              <span>→</span>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}