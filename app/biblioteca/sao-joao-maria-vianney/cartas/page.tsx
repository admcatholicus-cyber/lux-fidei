import type { Metadata } from "next";
import Link from "next/link";
import { todasCartas } from "../lib/sermoes-helpers";
import styles from "../biblioteca-vianney.module.css";

export const metadata: Metadata = {
  title: "Cartas e Epistolário do Cura d'Ars | Lux Fidei",
  description: "A correspondência e direção espiritual de São João Maria Vianney.",
};

export default function PaginaListaCartas() {
  const cartasLista = todasCartas();

  return (
    <div className={styles.pagina}>
      <nav className={styles.topoNav}>
        <Link href="/biblioteca/sao-joao-maria-vianney" className={styles.linkVoltar}>
          ← Voltar à Capa da Obra
        </Link>
        <span className={styles.migalhas}>Biblioteca / Correspondência</span>
      </nav>

      <header className={styles.cabecalhoSecao}>
        <h1 className={styles.cabecalhoSecaoTitulo}>Cartas & Epistolário</h1>
        <p className={styles.cabecalhoSecaoDescricao}>
          A direção espiritual e correspondência de São João Maria Vianney direcionada a fiéis, sacerdotes, religiosos e bispos.
        </p>
      </header>

      <main className={styles.gridSermoes}>
        {cartasLista.map((carta) => (
          <Link key={carta.id} href={`/biblioteca/sao-joao-maria-vianney/cartas/${carta.id}`} className={styles.cardSermao}>
            <div className={styles.cardSermaoBadge}>
              Carta nº {carta.numero} · Destinatário: {carta.destinatario?.nome || "Diversos"}
            </div>

            <h2 className={styles.cardSermaoTitulo}>Carta a {carta.destinatario?.nome || "Correspondência"}</h2>
            <p className={styles.cardSermaoPrevia}>
              “{(carta.portugues?.texto || carta.original?.texto || "").substring(0, 160)}...”
            </p>

            <div className={styles.cardSermaoRodape}>
              <span>📖 Ler carta completa</span>
              <span>→</span>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}