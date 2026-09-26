import type { Metadata } from "next";
import Image from "next/image";
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
        <span className={styles.migalhas}>
          Biblioteca / São Gregório de Nissa
        </span>
      </nav>

      <div className={styles.capaContainer}>
        <div className={styles.capaIcone}>✝</div>
        <h1 className={styles.capaNome}>{nome}</h1>
        <p className={styles.capaSubtitulo}>{subtitulo}</p>
        <p className={styles.capaBiografia}>{biografia}</p>
      </div>

      <section className={styles.secoes}>
        <h2 className={styles.secoesTitulo}>Obras disponíveis</h2>
        <div className={styles.obrasGrid}>
          {obras.map((obra) => (
            <Link href={obra.rota} key={obra.slug} className={styles.cardObra}>
              <div className={styles.capaObraContainer}>
                {obra.capa ? (
                  <Image
                    src={obra.capa}
                    alt={`Capa da obra ${obra.titulo}`}
                    width={300}
                    height={420}
                    className={styles.imagemCapaHorizontal}
                  />
                ) : (
                  <div className={styles.capaFallback}>{obra.icone}</div>
                )}
              </div>
              <div className={styles.cardObraConteudo}>
                <div>
                  <div className={styles.cardHeaderArea}>
                    <h3 className={styles.cardObraTitulo}>{obra.titulo}</h3>
                    {obra.tituloLatim && (
                      <span className={styles.tituloLatim}>
                        {obra.tituloLatim}
                      </span>
                    )}
                  </div>
                  <p className={styles.cardObraDescricao}>{obra.descricao}</p>
                </div>
                <div className={styles.cardObraFooter}>
                  <span className={styles.capitulosBadge}>
                    {obra.capitulosCount} capítulo
                    {obra.capitulosCount !== 1 ? "s" : ""}
                  </span>
                  <span className={styles.lerAgoraBtn}>
                    Acessar Obra <span>&rarr;</span>
                  </span>
                </div>
              </div>
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
