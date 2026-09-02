'use client';

import { ReactNode } from 'react';
import styles from '../../_styles/biografia.module.css';

type ItemGaleria = {
  src: string;
  alt: string;
  legenda?: string;
};

type GaleriaProps = {
  itens: ItemGaleria[];
  colunas?: 2 | 3 | 4;
  titulo?: ReactNode;
};

export default function Galeria({ itens, colunas = 3, titulo }: GaleriaProps) {
  return (
    <div className={styles.galeriaWrap}>
      {titulo && <h4 className={styles.galeriaTitulo}>{titulo}</h4>}
      <div className={`${styles.galeriaGrid} ${styles[`galeriaCols_${colunas}`]}`}>
        {itens.map((item, i) => (
          <figure key={i} className={styles.galeriaItem}>
            <div className={styles.galeriaImgWrap}>
              <img src={item.src} alt={item.alt} loading="lazy" />
            </div>
            {item.legenda && (
              <figcaption className={styles.galeriaLegenda}>
                {item.legenda}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}