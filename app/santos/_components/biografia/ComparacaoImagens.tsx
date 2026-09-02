'use client';

import { ReactNode } from 'react';
import styles from '../../_styles/biografia.module.css';

type ComparacaoImagensProps = {
  esquerda: { src: string; alt: string; legenda?: string; titulo?: string };
  direita:  { src: string; alt: string; legenda?: string; titulo?: string };
  descricao?: ReactNode;
};

export default function ComparacaoImagens({
  esquerda,
  direita,
  descricao,
}: ComparacaoImagensProps) {
  return (
    <div className={styles.compWrap}>
      <div className={styles.compGrid}>
        <figure className={styles.compItem}>
          <div className={styles.compImgWrap}>
            <img src={esquerda.src} alt={esquerda.alt} loading="lazy" />
          </div>
          {(esquerda.titulo || esquerda.legenda) && (
            <figcaption className={styles.compCap}>
              {esquerda.titulo && <strong>{esquerda.titulo}</strong>}
              {esquerda.legenda && <span>{esquerda.legenda}</span>}
            </figcaption>
          )}
        </figure>

        <div className={styles.compVs}>⚔</div>

        <figure className={styles.compItem}>
          <div className={styles.compImgWrap}>
            <img src={direita.src} alt={direita.alt} loading="lazy" />
          </div>
          {(direita.titulo || direita.legenda) && (
            <figcaption className={styles.compCap}>
              {direita.titulo && <strong>{direita.titulo}</strong>}
              {direita.legenda && <span>{direita.legenda}</span>}
            </figcaption>
          )}
        </figure>
      </div>
      {descricao && <p className={styles.compDesc}>{descricao}</p>}
    </div>
  );
}