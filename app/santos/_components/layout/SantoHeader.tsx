import styles from '../../_styles/santo.module.css';

interface SantoHeaderProps {
  nome: string;         // "São João Maria Vianney"
  titulo: string;       // "Presbítero · Pastor"
  subtitulo: string;    // "Pároco de Ars, confessor..."
}

export default function SantoHeader({ nome, titulo, subtitulo }: SantoHeaderProps) {
  return (
    <div className={styles.cabecalho}>
      <h1 className={styles.santoNome}>{nome}</h1>
      <div className={styles.divisor}>
        <span className={styles.divisorLinha}></span>
        <span className={styles.divisorOrn}>✦</span>
        <span className={styles.divisorLinha}></span>
      </div>
      <p className={styles.santoTitulo}>{titulo}</p>
      <p className={styles.introFrase}>{subtitulo}</p>
    </div>
  );
}