import type { Metadata } from "next";
import Link from "next/link";
import { todosSermoes } from "../lib/sermoes-helpers";
import styles from "../biblioteca-vianney.module.css";

export const metadata: Metadata = {
  title: "Sermões Célebres do Cura d'Ars | Lux Fidei",
  description: "Os grandes sermões doutrinais de São João Maria Vianney.",
};

export default function PaginaListaSermoes() {
  const sermoes = todosSermoes();

  return (
    <div className={styles.pagina}>
      <nav className={styles.topoNav}>
        <Link href="/biblioteca/sao-joao-maria-vianney" className={styles.linkVoltar}>
          ← Voltar à Capa da Obra
        </Link>
        <span className={styles.migalhas}>Biblioteca / Sermões Célebres</span>
      </nav>

      <header className={styles.cabecalhoSecao}>
        <h1 className={styles.cabecalhoSecaoTitulo}>Sermões Célebres</h1>
        <p className={styles.cabecalhoSecaoDescricao}>
          Os grandes sermões doutrinais do Cura d'Ars sobre as verdades eternas:
          o Juízo Final, o Inferno, o Amor de Deus, a Oração, a Santa Eucaristia e a Confissão.
        </p>
      </header>

      <main className={styles.gridSermoes}>
        {sermoes.map((sermao) => (
          <Link key={sermao.id} href={`/biblioteca/sao-joao-maria-vianney/sermoes/${sermao.id}`} className={styles.cardSermao}>
            <div className={styles.cardSermaoBadge}>
              Tomo {sermao.volume} · Tema: {sermao.temaDoutrinal}
            </div>

            <h2 className={styles.cardSermaoTitulo}>{sermao.tituloPortugues}</h2>
            <p className={styles.cardSermaoPrevia}>
              “{sermao.portugues.texto.substring(0, 160)}...”
            </p>

            <div className={styles.cardSermaoRodape}>
              <span>📖 Ler sermão completo</span>
              <span>→</span>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}