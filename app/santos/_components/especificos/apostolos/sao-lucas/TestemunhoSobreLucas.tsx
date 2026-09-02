import styles from '../../../../_styles/especificos/apostolos/sao-lucas/frases/biblioteca.module.css';

interface TestemunhoSobreLucasProps {
  autor: string;
  qualificacao: string;
  obra: string;
  fonte?: string;
  epoca?: string;
  original?: string;
  children: React.ReactNode;
}

export default function TestemunhoSobreLucas({
  autor,
  qualificacao,
  obra,
  fonte,
  epoca,
  original,
  children,
}: TestemunhoSobreLucasProps) {
  return (
    <article className={styles.testemunho}>
      <header className={styles.testHeader}>
        <div className={styles.testMonograma}>✠</div>
        <div className={styles.testIdent}>
          <div className={styles.testAutor}>{autor}</div>
          <div className={styles.testQualif}>{qualificacao}</div>
          {epoca && <div className={styles.testEpoca}>{epoca}</div>}
        </div>
      </header>

      <blockquote className={styles.testTexto}>
        <span className={styles.testAspaAbre}>“</span>
        {children}
        <span className={styles.testAspaFecha}>”</span>
      </blockquote>

      {original && (
        <details className={styles.testOriginal}>
          <summary className={styles.testOriginalSummary}>Original em latim</summary>
          <div className={styles.testOriginalTexto}>{original}</div>
        </details>
      )}

      <footer className={styles.testRodape}>
        <div className={styles.testObra}>{obra}</div>
        {fonte && <div className={styles.testFonte}>{fonte}</div>}
      </footer>
    </article>
  );
}