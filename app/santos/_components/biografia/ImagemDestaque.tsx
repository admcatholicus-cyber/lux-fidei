'use client';

import { ReactNode } from 'react';
import styles from '../../_styles/biografia.module.css';

type ImagemDestaqueProps = {
  src: string;
  alt: string;
  titulo?: string;
  subtitulo?: ReactNode;
  credito?: string;
  altura?: 'baixa' | 'media' | 'alta';
  posicaoTexto?: 'inferior' | 'centro' | 'superior';
};

export default function ImagemDestaque({
  src,
  alt,
  titulo,
  subtitulo,
  credito,
  altura = 'media',
  posicaoTexto = 'inferior',
}: ImagemDestaqueProps) {
  const classes = [
    styles.imgHero,
    styles[`imgHero_${altura}`],
    styles[`imgHero_${posicaoTexto}`],
  ].join(' ');

  return (
    <div className={classes}>
      <img src={src} alt={alt} className={styles.imgHeroEl} loading="lazy" />
      <div className={styles.imgHeroOverlay} />
      {(titulo || subtitulo) && (
        <div className={styles.imgHeroTexto}>
          {titulo && <h3 className={styles.imgHeroTitulo}>{titulo}</h3>}
          {subtitulo && <p className={styles.imgHeroSub}>{subtitulo}</p>}
        </div>
      )}
      {credito && <span className={styles.imgHeroCred}>{credito}</span>}
    </div>
  );
}