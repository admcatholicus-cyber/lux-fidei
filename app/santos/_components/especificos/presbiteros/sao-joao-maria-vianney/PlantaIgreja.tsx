import React from 'react';
import styles from '../../../../_styles/especificos/presbiteros/sao-joao-maria-vianney/PlantaIgreja.module.css';

interface PlantaIgrejaProps {
  fase: 'antes' | 'depois';
  ano: string;
  elementos: string[];
}

export function PlantaIgreja({ fase, ano, elementos }: PlantaIgrejaProps) {
  const isAntes = fase === 'antes';

  return (
    <div className={`${styles.card} ${isAntes ? styles.cardAntes : styles.cardDepois}`}>
      <div className={styles.header}>
        <h4 className={`${styles.title} ${isAntes ? styles.titleAntes : styles.titleDepois}`}>
          A Igreja de Ars — {fase.charAt(0).toUpperCase() + fase.slice(1)}
        </h4>
        <span className={`${styles.badge} ${isAntes ? styles.badgeAntes : styles.badgeDepois}`}>
          {ano}
        </span>
      </div>

      <ul className={styles.list}>
        {elementos.map((item, index) => (
          <li key={index} className={styles.item}>
            <span className={`${styles.dot} ${isAntes ? styles.dotAntes : styles.dotDepois}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}