import styles from '../../../../_styles/especificos/apostolos/sao-lucas/frases/biblioteca.module.css';

interface DocumentoIgrejaProps {
  documento: string;
  autoridade?: string;
  data?: string;
  referencia?: string;
  fontesRodape?: string;
  brasao?: string;
  children: React.ReactNode;
}

export default function DocumentoIgreja({
  documento,
  autoridade,
  data,
  referencia,
  fontesRodape,
  brasao = '⛨',
  children,
}: DocumentoIgrejaProps) {
  return (
    <article className={styles.documento}>
      <div className={styles.docFaixaTop}>
        <span className={styles.docBrasao}>{brasao}</span>
        <span className={styles.docFaixaTexto}>Magistério da Igreja</span>
        <span className={styles.docBrasao}>{brasao}</span>
      </div>

      <header className={styles.docHeader}>
        <h4 className={styles.docTitulo}>{documento}</h4>
        {autoridade && <div className={styles.docAutoridade}>{autoridade}</div>}
        {data && <div className={styles.docData}>{data}</div>}
        {referencia && <div className={styles.docReferencia}>{referencia}</div>}
      </header>

      <div className={styles.docTexto}>
        {children}
      </div>

      {fontesRodape && (
        <footer className={styles.docRodape}>
          <div className={styles.docRodapeOrn}>· · ·</div>
          <div className={styles.docFontesRodape}>{fontesRodape}</div>
        </footer>
      )}
    </article>
  );
}