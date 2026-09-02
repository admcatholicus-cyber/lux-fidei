'use client';

import Image from 'next/image';
import styles from '../../../../../_styles/especificos/martires/santa-afra-de-augsburgo/iconografia/galeria.module.css';

export default function PecaDestaque({
  src,
  alt,
  titulo,
  descricao,
  autor,
  data,
  tecnica,
  localizacao,
  largura,
  altura,
  invertido = false,
  children,
}: {
  src: string;
  alt: string;
  titulo: string;
  descricao: string;
  autor?: string;
  data?: string;
  tecnica?: string;
  localizacao?: string;
  largura: number;
  altura: number;
  invertido?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className={`${styles.pecaDestaque} ${invertido ? styles.pecaInvertida : ''}`}>
      <div className={styles.pecaImagemLado}>
        <div className={styles.pecaMoldura}>
          <Image
            src={src}
            alt={alt}
            width={largura}
            height={altura}
            className={styles.pecaImagem}
            quality={85}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className={styles.pecaTextoLado}>
        <span className={styles.pecaFioBorda} />
        <h3 className={styles.pecaTitulo}>{titulo}</h3>

        <div className={styles.pecaFichaLinha}>
          {autor && (
            <div className={styles.pecaFichaItem}>
              <span className={styles.pecaFichaLabel}>Artista</span>
              <span>{autor}</span>
            </div>
          )}
          {data && (
            <div className={styles.pecaFichaItem}>
              <span className={styles.pecaFichaLabel}>Período</span>
              <span>{data}</span>
            </div>
          )}
          {tecnica && (
            <div className={styles.pecaFichaItem}>
              <span className={styles.pecaFichaLabel}>Técnica</span>
              <span>{tecnica}</span>
            </div>
          )}
          {localizacao && (
            <div className={styles.pecaFichaItem}>
              <span className={styles.pecaFichaLabel}>Localização</span>
              <span>{localizacao}</span>
            </div>
          )}
        </div>

        <p className={styles.pecaDescricao}>{descricao}</p>

        {children && <div className={styles.pecaExtra}>{children}</div>}
      </div>
    </div>
  );
}