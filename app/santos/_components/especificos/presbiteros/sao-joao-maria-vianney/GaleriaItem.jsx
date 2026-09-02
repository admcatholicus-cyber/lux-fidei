// C:\Users\kitten\Documents\lux-fidei\app\santos\_components\especificos\presbiteros\sao-joao-maria-vianney\GaleriaItem.jsx

import styles from '@/app/santos/_styles/especificos/presbiteros/sao-joao-maria-vianney/GaleriaItem.module.css';

export default function GaleriaItem({ src, alt, legenda }) {
  return (
    <figure className={styles.item}>
      <div className={styles.moldura}>
        <img
          src={src}
          alt={alt}
          className={styles.imagem}
          loading="lazy"
        />
      </div>
      {legenda && (
        <figcaption className={styles.legenda}>{legenda}</figcaption>
      )}
    </figure>
  );
}