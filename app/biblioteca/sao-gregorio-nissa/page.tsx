import type { Metadata } from "next";
import Link from "next/link";
import { gregorioMetadata } from "./data/metadata";
import styles from "./biblioteca-gregorio.module.css";

export const metadata: Metadata = {
  title: "São Gregório de Nissa — Lux Fidei",
  description: gregorioMetadata.biografia,
};

export default function PaginaGregorioNissa() {
  const { nome, subtitulo, biografia, obras } = gregorioMetadata;

  return (
    <div className={styles.pagina}>
      <nav className={styles.topoNav}>
        <Link href="/biblioteca" className={styles.linkVoltar}>
          ← Voltar à Biblioteca
        </Link>
        <span className={styles.migalhas}>Biblioteca / São Gregório de Nissa</span>
      </nav>

      <div className={styles.capaContainer}>
        <div className={styles.capaIcone}>✝</div>
        <h1 className={styles.capaNome}>{nome}</h1>
        <p className={styles.capaSubtitulo}>{subtitulo}</p>
        <p className={styles.capaBiografia}>{biografia}</p>
      </div>

      <section className={styles.secoes}>
        <h2 className={styles.secoesTitulo}>Obras disponíveis</h2>
        <div className={styles.secoesGrid}>
          {obras.map((obra) => (
            <Link key={obra.slug} href={obra.rota} className={styles.cardSecao}>
              <div className={styles.cardSecaoIcone}>{obra.icone}</div>
              <h3 className={styles.cardSecaoTitulo}>{obra.titulo}</h3>
              <p className={styles.cardSecaoDescricao}>{obra.descricao}</p>
              <p className={styles.cardSecaoContagem}>
                {obra.capitulosCount} capítulo{obra.capitulosCount !== 1 ? "s" : ""}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <footer className={styles.rodape}>
        <p>
          Edição digital preparada para <strong>Lux Fidei</strong> a partir de
          fontes em domínio público e da tradição patrística.
        </p>
      </footer>
    </div>
  );
}
