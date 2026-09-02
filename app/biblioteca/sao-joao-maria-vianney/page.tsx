import type { Metadata } from "next";
import Link from "next/link";
import { obraMetadata } from "./data/metadata";
import CardSecao from "./components/CardSecao";
import styles from "./biblioteca-vianney.module.css";

export const metadata: Metadata = {
  title: "São João Maria Vianney — Sermões e Catequeses | Lux Fidei",
  description: obraMetadata.notaGeral,
};

export default function PaginaObraVianney() {
  const { santo, obra, notaGeral, secoes, notaEditorial, bibliografia } = obraMetadata;

  return (
    <div className={styles.pagina}>
      <nav className={styles.topoNav}>
        <Link href="/biblioteca" className={styles.linkVoltar}>
          ← Voltar à Biblioteca Geral
        </Link>
        <span className={styles.migalhas}>Biblioteca / São João Maria Vianney</span>
      </nav>

      <header className={styles.capa}>
        <p className={styles.capaSupratitulo}>Lux Fidei · Biblioteca</p>
        <h1 className={styles.capaTitulo}>{santo.nome}</h1>
        <p className={styles.capaVida}>{santo.vida}</p>
        <p className={styles.capaSubtitulo}>{santo.titulo}</p>

        <div className={styles.capaSeparador}>·  ·  ·</div>

        <h2 className={styles.capaObraTitulo}>{obra.tituloLongo}</h2>

        <blockquote className={styles.capaEpigrafe}>
          <p>“{obra.epigrafe}”</p>
          <footer>— {obra.epigrafeFonte}</footer>
        </blockquote>
      </header>

      <section className={styles.notaGeral}>
        <p>{notaGeral}</p>
      </section>

      <section className={styles.secoes}>
        <h2 className={styles.secoesTitulo}>Índice da Obra</h2>
        <div className={styles.secoesGrid}>
          {secoes.map((s) => (
            <CardSecao
              key={s.id}
              icone={s.icone}
              titulo={s.titulo}
              descricao={s.descricao}
              contagem={s.contagem}
              href={s.hrefReal ?? s.href}
            />
          ))}
        </div>
      </section>

      <section className={styles.notaEditorial} style={{ maxWidth: 820, margin: "40px auto", padding: 30, background: "#f3ede2", borderRadius: 4, borderLeft: "3px solid #b08a3c" }}>
        <h3 style={{ fontFamily: "Libre Baskerville, serif", fontSize: 18, margin: "0 0 16px" }}>{notaEditorial.titulo}</h3>
        {notaEditorial.paragrafos.map((p, i) => (
          <p key={i} style={{ fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}>{p}</p>
        ))}
      </section>

      <section className={styles.bibliografia} style={{ maxWidth: 820, margin: "40px auto", padding: "0 20px" }}>
        <h3 style={{ fontFamily: "Libre Baskerville, serif", fontSize: 16, textAlign: "center", margin: "0 0 16px" }}>Edições e Fontes de Referência</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {bibliografia.map((item, i) => (
            <li key={i} style={{ fontSize: 13, padding: "8px 0", borderBottom: "1px dotted #e4dcd0", color: "#6e6056" }}>{item}</li>
          ))}
        </ul>
      </section>

      <footer className={styles.rodape} style={{ textAlign: "center", marginTop: 60, fontSize: 12, color: "#6e6056" }}>
        <p>Edição digital do Cura d'Ars preparada para <strong>Lux Fidei</strong>.</p>
      </footer>
    </div>
  );
}