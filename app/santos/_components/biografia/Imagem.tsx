'use client';

import { ReactNode } from 'react';
import styles from '../../_styles/biografia.module.css';

type ImagemProps = {
  src: string;
  alt: string;
  legenda?: ReactNode;
  credito?: string;
  largura?: 'estreita' | 'media' | 'larga' | 'total';
  posicao?: 'centro' | 'esquerda' | 'direita';
};

export default function Imagem({
  src,
  alt,
  legenda,
  credito,
  largura = 'media',
  posicao = 'centro',
}: ImagemProps) {
  const classes = [
    styles.imgFig,
    styles[`imgFig_${largura}`],
    styles[`imgFig_${posicao}`],
  ].join(' ');

  return (
    <figure className={classes}>
      <div className={styles.imgWrap}>
        <img src={src} alt={alt} className={styles.imgEl} loading="lazy" />
      </div>
      {(legenda || credito) && (
        <figcaption className={styles.imgCap}>
          {legenda && <span className={styles.imgLeg}>{legenda}</span>}
          {credito && <span className={styles.imgCred}>{credito}</span>}
        </figcaption>
      )}
    </figure>
  );
}