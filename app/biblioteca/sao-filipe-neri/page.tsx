import type { Metadata } from "next";
import Link from "next/link";
import { obraMetadata } from "./data/metadata";
import CapaObra from "./components/CapaObra";
import CardSecao from "./components/CardSecao";
import styles from "./biblioteca-filipe.module.css";
import BarraSecoes from "./components/BarraSecoes";

export const metadata: Metadata = {
  title: "São Filipe Néri — Escritos e Máximas | Lux Fidei",
  description: obraMetadata.notaGeral,
};

export default function PaginaObraFilipe() {
  const { notaGeral, secoes, notaEditorial, bibliografia } = obraMetadata;

  return (
    <div className={styles.pagina}>
      {/* NAVEGAÇÃO SUPERIOR */}
      <nav className={styles.topoNav}>
        <Link href="/biblioteca" className={styles.linkVoltar}>
          ← Voltar à Biblioteca
        </Link>
        <span className={styles.migalhas}>Biblioteca / São Filipe Néri</span>
      </nav>
   <BarraSecoes ativa="indice" />
      <CapaObra />

      <section className={styles.notaGeral}>
        <p>{notaGeral}</p>
      </section>

      <section className={styles.secoes}>
        <h2 className={styles.secoesTitulo}>Índice da obra</h2>
        <div className={styles.secoesGrid}>
          {secoes.map((s) => (
            <CardSecao
              key={s.id}
              icone={s.icone}
              titulo={s.titulo}
              descricao={s.descricao}
              contagem={s.contagem}
              href={s.href}
            />
          ))}
        </div>
      </section>

      <section className={styles.notaEditorial}>
        <h2 className={styles.notaEditorialTitulo}>{notaEditorial.titulo}</h2>
        {notaEditorial.paragrafos.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      <section className={styles.bibliografia}>
        <h2 className={styles.bibliografiaTitulo}>Bibliografia crítica</h2>
        <ul>
          {bibliografia.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <footer className={styles.rodape}>
        <p>
          Edição digital preparada para <strong>Lux Fidei</strong> a partir de fontes em domínio público
          e da tradição oratoriana.
        </p>
      </footer>
    </div>
  );
}