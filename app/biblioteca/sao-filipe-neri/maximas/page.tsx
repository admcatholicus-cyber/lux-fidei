import type { Metadata } from "next";
import Link from "next/link";
import { todasMaximas, maximaDoDia } from "../lib/maximas-helpers";
import EtiquetaStatus from "../components/EtiquetaStatus";
import styles from "../biblioteca-filipe.module.css";
import BarraSecoes from "../components/BarraSecoes";

export const metadata: Metadata = {
  title: "Máximas Espirituais de São Filipe Néri | Lux Fidei",
  description: "366 máximas espirituais de São Filipe Néri para todos os dias do ano.",
};

const ORDEM_MESES = [
  "janeiro", "fevereiro", "março", "abril",
  "maio", "junho", "julho", "agosto",
  "setembro", "outubro", "novembro", "dezembro",
];

export default async function PaginaMaximas({
  searchParams,
}: {
  searchParams: Promise<{ mes?: string }>;
}) {
  const { mes: mesFiltro } = await searchParams;
  const mesAtivo = mesFiltro ? mesFiltro.toLowerCase() : "janeiro";

  const todas = todasMaximas();
  const doDia = maximaDoDia();
  const filtradas = todas.filter((m) => m.mes.toLowerCase() === mesAtivo);

  return (
    <div className={styles.pagina}>
      <nav className={styles.topoNav}>
        <Link href="/biblioteca/sao-filipe-neri" className={styles.linkVoltar}>
          ← Voltar ao índice da obra
        </Link>
        <span className={styles.migalhas}>Biblioteca / Máximas Espirituais</span>
      </nav>
 <BarraSecoes ativa="maximas" />
      <header className={styles.cabecalhoSecao}>
        <div className={styles.cabecalhoSecaoIcone}>✦</div>
        <h1 className={styles.cabecalhoSecaoTitulo}>Máximas Espirituais</h1>
        <p className={styles.cabecalhoSecaoDescricao}>
          366 frases, conselhos e ditos memoráveis de São Filipe Néri,
          organizados para todos os dias do ano pela tradição do Oratório.
        </p>
      </header>

      {doDia && (
        <section className={styles.cardMaximaDia}>
          <p className={styles.cardMaximaDiaHeader}>✦ Máxima de hoje ({doDia.dia} de {doDia.mes}) ✦</p>
          <p className={styles.cardMaximaDiaTexto}>“{doDia.portugues.texto}”</p>
          <Link href={`/biblioteca/sao-filipe-neri/maximas/${doDia.id}`} className={styles.cardMaximaDiaAcao}>
            Ver detalhes e texto original →
          </Link>
        </section>
      )}

      <nav className={styles.mesesGrid}>
        {ORDEM_MESES.map((m) => (
          <Link
            key={m}
            href={`/biblioteca/sao-filipe-neri/maximas?mes=${m}`}
            className={`${styles.btnMes} ${mesAtivo === m ? styles.btnMesAtivo : ""}`}
          >
            {m.charAt(0).toUpperCase() + m.slice(1)}
          </Link>
        ))}
      </nav>

      <main className={styles.gridMaximas}>
        {filtradas.map((m) => (
          <Link key={m.id} href={`/biblioteca/sao-filipe-neri/maximas/${m.id}`} className={styles.cardMaxima}>
            <div className={styles.cardMaximaHeader}>
              <span>{m.dia} de {m.mes}</span>
              <EtiquetaStatus status="tradicional" compacto />
            </div>

            <p className={styles.cardMaximaTexto}>“{m.portugues.texto}”</p>
            <span className={styles.cardMaximaTema}>Tema: {m.tema}</span>
          </Link>
        ))}
      </main>
    </div>
  );
}