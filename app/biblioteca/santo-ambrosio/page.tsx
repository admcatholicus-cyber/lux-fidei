import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { obraMetadata } from "./data/metadata";
import CapaObra from "./components/CapaObra";
import styles from "./biblioteca-ambrosio.module.css";
import BarraSecoes from "./components/BarraSecoes";

export const metadata: Metadata = {
  title: "Santo Ambrósio de Milão — De Spiritu Sancto | Lux Fidei",
  description: obraMetadata.notaGeral,
};

export default function PaginaObraAmbrosio() {
  const { notaGeral, secoes, notaEditorial, bibliografia } = obraMetadata;

  return (
    <div className={styles.pagina}>
      <nav className={styles.topoNav}>
        <Link href="/biblioteca" className={styles.linkVoltar}>
          ← Voltar à Biblioteca
        </Link>
        <span className={styles.migalhas}>Biblioteca / Santo Ambrósio</span>
      </nav>
      <BarraSecoes ativa="indice" />
      <CapaObra />

      <section className={styles.notaGeral}>
        <p>{notaGeral}</p>
      </section>

      <section className={styles.secoes}>
        <h2 className={styles.secoesTitulo}>Índice da obra</h2>
        <div className={styles.obrasGrid}>
          {secoes.map((s) => (
            <Link href={s.href} key={s.id} className={styles.cardObra}>
              <div className={styles.capaContainer}>
                {s.capa ? (
                  <Image
                    src={s.capa}
                    alt={`Capa da obra ${s.titulo}`}
                    width={300}
                    height={420}
                    className={styles.imagemCapaHorizontal}
                  />
                ) : (
                  <div className={styles.capaFallback}>{s.icone}</div>
                )}
              </div>
              <div className={styles.cardObraConteudo}>
                <div>
                  <div className={styles.cardHeaderArea}>
                    <h3 className={styles.cardObraTitulo}>{s.titulo}</h3>
                    {s.tituloLatim && (
                      <span className={styles.tituloLatim}>
                        {s.tituloLatim}
                      </span>
                    )}
                  </div>
                  <p className={styles.cardObraDescricao}>{s.descricao}</p>
                </div>
                <div className={styles.cardObraFooter}>
                  <span className={styles.capitulosBadge}>{s.contagem}</span>
                  <span className={styles.lerAgoraBtn}>
                    Acessar Obra <span>&rarr;</span>
                  </span>
                </div>
              </div>
            </Link>
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
          Edição digital preparada para <strong>Lux Fidei</strong> a partir de
          fontes em domínio público e da tradição patrística latina.
        </p>
      </footer>
    </div>
  );
}
