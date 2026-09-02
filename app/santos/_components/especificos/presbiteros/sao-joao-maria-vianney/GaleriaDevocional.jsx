// C:\Users\kitten\Documents\lux-fidei\app\santos\_components\especificos\presbiteros\sao-joao-maria-vianney\GaleriaDevocional.jsx

import styles from '@/app/santos/_styles/especificos/presbiteros/sao-joao-maria-vianney/GaleriaDevocional.module.css';

export default function GaleriaDevocional({ children, colunas = 2, legenda }) {
  return (
    <div className={styles.galeria} data-colunas={colunas}>
      <div className={styles.grade}>
        {children}
      </div>
      {legenda && (
        <p className={styles.legendaGaleria}>{legenda}</p>
      )}
    </div>
  );
}