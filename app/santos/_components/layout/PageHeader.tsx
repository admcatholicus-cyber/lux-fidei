import styles from '../../_styles/santo.module.css';

interface PageHeaderProps {
  numero: string;       // "V" (algarismo romano)
  titulo: string;       // "Espiritualidade"
  subtitulo: string;    // "Oração, Eucaristia e Teologia Vivida"
}

export default function PageHeader({ numero, titulo, subtitulo }: PageHeaderProps) {
  return (
    <header className={styles.pageHeader}>
      <div className={styles.pageNumero}>{numero}</div>
      <h1 className={styles.pageTitulo}>{titulo}</h1>
      <p className={styles.pageSubtitulo}>{subtitulo}</p>
      <div className={styles.pageOrnamento}>✦</div>
    </header>
  );
}