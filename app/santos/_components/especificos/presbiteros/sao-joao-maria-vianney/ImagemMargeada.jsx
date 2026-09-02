// C:\Users\kitten\Documents\lux-fidei\app\santos\_components\especificos\presbiteros\sao-joao-maria-vianney\ImagemMargeada.jsx

import styles from '@/app/santos/_styles/especificos/presbiteros/sao-joao-maria-vianney/ImagemMargeada.module.css';

export default function ImagemMargeada({ src, alt, legenda, lado = 'direita' }) {
  return (
    <figure className={`${styles.figura} ${styles[lado]}`}>
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