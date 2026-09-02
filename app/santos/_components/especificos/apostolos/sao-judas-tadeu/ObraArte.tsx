import type { ReactNode } from 'react';
import Image from 'next/image';
import styles from '../../../../_styles/especificos/apostolos/sao-judas-tadeu/iconografia/obra.module.css';

interface ObraArteProps {
  src: string;
  alt: string;
  largura: number;
  altura: number;
  titulo: string;
  artista?: string;
  data?: string;
  tecnica?: string;
  localizacao?: string;
  dimensoes?: string;
  children: ReactNode;
}

export default function ObraArte({
  src,
  alt,
  largura,
  altura,
  titulo,
  artista,
  data,
  tecnica,
  localizacao,
  dimensoes,
  children,
}: ObraArteProps) {
  return (
    <figure className={styles.obra}>
      <div className={styles.obraImagemContainer}>
        <Image
          src={src}
          alt={alt}
          width={largura}
          height={altura}
          className={styles.obraImagem}
          quality={85}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        />
      </div>

      <figcaption className={styles.obraInfo}>
        <h4 className={styles.obraTitulo}>{titulo}</h4>

        <dl className={styles.obraMetadados}>
          {artista && (
            <>
              <dt className={styles.obraLabel}>Artista</dt>
              <dd className={styles.obraValor}>{artista}</dd>
            </>
          )}
          {data && (
            <>
              <dt className={styles.obraLabel}>Data</dt>
              <dd className={styles.obraValor}>{data}</dd>
            </>
          )}
          {tecnica && (
            <>
              <dt className={styles.obraLabel}>Técnica</dt>
              <dd className={styles.obraValor}>{tecnica}</dd>
            </>
          )}
          {dimensoes && (
            <>
              <dt className={styles.obraLabel}>Dimensões</dt>
              <dd className={styles.obraValor}>{dimensoes}</dd>
            </>
          )}
          {localizacao && (
            <>
              <dt className={styles.obraLabel}>Localização</dt>
              <dd className={styles.obraValor}>{localizacao}</dd>
            </>
          )}
        </dl>

        <div className={styles.obraAnalise}>{children}</div>
      </figcaption>
    </figure>
  );
}