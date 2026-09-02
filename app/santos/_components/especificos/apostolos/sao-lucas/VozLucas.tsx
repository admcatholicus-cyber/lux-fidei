import styles from '../../../../_styles/especificos/apostolos/sao-lucas/frases/biblioteca.module.css';

interface VozLucasProps {
  contexto: string;
  referencia: string;
  original?: string;
  linguaOriginal?: string;
  children: React.ReactNode;
}

export default function VozLucas({
  contexto,
  referencia,
  original,
  linguaOriginal = 'Grego original',
  children,
}: VozLucasProps) {
  return (
    <article className={styles.vozLucas}>
      <div className={styles.vozSelo}>
        <span className={styles.vozSeloPena}>✒</span>
        <span className={styles.vozSeloTexto}>Lucas em primeira pessoa</span>
      </div>

      <div className={styles.vozContexto}>{contexto}</div>

      <div className={styles.vozTexto}>
        {children}
      </div>

      {original && (
        <details className={styles.vozOriginal}>
          <summary className={styles.vozOriginalSummary}>{linguaOriginal}</summary>
          <div className={styles.vozOriginalTexto}>{original}</div>
        </details>
      )}

      <footer className={styles.vozReferencia}>
        <span className={styles.vozRefOrn}>—</span>
        {referencia}
      </footer>
    </article>
  );
}