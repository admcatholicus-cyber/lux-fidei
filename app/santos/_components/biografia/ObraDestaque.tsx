'use client';

import { ReactNode } from 'react';
import styles from '../../_styles/biografia.module.css';

type ObraDestaqueProps = {
  src: string;
  alt: string;
  artista: string;
  titulo: string;
  data: string;
  local: string;
  tecnica?: string;
  children: ReactNode;
  inverter?: boolean;
};

export default function ObraDestaque({
  src,
  alt,
  artista,
  titulo,
  data,
  local,
  tecnica,
  children,
  inverter = false,
}: ObraDestaqueProps) {
  return (
    <div className={`${styles.obraWrap} ${inverter ? styles.obraInvertido : ''}`}>
      <div className={styles.obraImg}>
        <img src={src} alt={alt} loading="lazy" />
      </div>
      <div className={styles.obraTexto}>
        <div className={styles.obraFicha}>
          <span className={styles.obraFichaLabel}>Obra</span>
          <h4 className={styles.obraTitulo}><em>{titulo}</em></h4>
          <p className={styles.obraArtista}>{artista}</p>
          <div className={styles.obraMeta}>
            <span>{data}</span>
            {tecnica && <><span>·</span><span>{tecnica}</span></>}
          </div>
          <p className={styles.obraLocal}>{local}</p>
        </div>
        <div className={styles.obraAnalise}>{children}</div>
      </div>
    </div>
  );
}