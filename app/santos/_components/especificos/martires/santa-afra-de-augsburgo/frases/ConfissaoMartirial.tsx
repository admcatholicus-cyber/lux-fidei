import styles from '../../../../../_styles/especificos/martires/santa-afra-de-augsburgo/frases/biblioteca.module.css';

export default function ConfissaoMartirial({
  locutor,
  qualificacao,
  contexto,
  original,
  fonte,
  children,
}: {
  locutor: string;
  qualificacao?: string;
  contexto?: string;
  original?: string;
  fonte?: string;
  children: React.ReactNode;
}) {
  const isAfra =
    locutor.toLowerCase().includes('afra') ||
    locutor.toLowerCase().includes('santa');

  return (
    <article className={`${styles.confissao} ${isAfra ? styles.confissaoAfra : styles.confissaoJuiz}`}>
      <div className={styles.confissaoBarra} />

      <div className={styles.confissaoInterior}>
        <div className={styles.confissaoTopo}>
          <span className={styles.confissaoLocutor}>{locutor}</span>
          {qualificacao && (
            <span className={styles.confissaoQualificacao}>{qualificacao}</span>
          )}
        </div>

        {contexto && (
          <p className={styles.confissaoContexto}>
            <em>{contexto}</em>
          </p>
        )}

        <div className={styles.confissaoTexto}>
          <span className={styles.confissaoAspas}>❝</span>
          {children}
          <span className={styles.confissaoAspas}>❞</span>
        </div>

        {original && (
          <details className={styles.confissaoOriginal}>
            <summary className={styles.confissaoOriginalSumario}>
              Texto latino
            </summary>
            <p className={styles.confissaoOriginalTexto}>{original}</p>
          </details>
        )}

        {fonte && <span className={styles.confissaoFonte}>{fonte}</span>}
      </div>
    </article>
  );
}