// C:\Users\kitten\Documents\lux-fidei\app\santos\_components\especificos\presbiteros\sao-joao-maria-vianney\PainelIconografico.jsx

import styles from '@/app/santos/_styles/especificos/presbiteros/sao-joao-maria-vianney/PainelIconografico.module.css';

export default function PainelIconografico({ src, alt, children, alinhamento = 'inferior' }) {
  return (
    <div className={`${styles.painel} ${styles[alinhamento]}`}>
      <img
        src={src}
        alt={alt}
        className={styles.imagemFundo}
        loading="lazy"
      />
      <div className={styles.overlay} />
      {children && (
        <div className={styles.conteudo}>
          {children}
        </div>
      )}
    </div>
  );
}