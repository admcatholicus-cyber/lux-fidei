import styles from '../../../../../_styles/especificos/martires/santa-afra-de-augsburgo/frases/biblioteca.module.css';

export default function TextoLiturgico({
  tipo,
  referencia,
  tempo,
  original,
  children,
}: {
  tipo: string;
  referencia?: string;
  tempo?: string;
  original?: string;
  children: React.ReactNode;
}) {
  return (
    <article className={styles.liturgico}>
      <div className={styles.liturgicoMoldura}>
        <div className={styles.liturgicoCabecalho}>
          <span className={styles.liturgicoSimbolo}>✠</span>
          <div className={styles.liturgicoTipos}>
            <span className={styles.liturgicoTipo}>{tipo}</span>
            {referencia && (
              <span className={styles.liturgicoRef}>{referencia}</span>
            )}
          </div>
          {tempo && <span className={styles.liturgicoTempo}>{tempo}</span>}
        </div>

        <div className={styles.liturgicoTexto}>{children}</div>

        {original && (
          <details className={styles.liturgicoOriginal}>
            <summary className={styles.liturgicoOriginalSumario}>
              Texto latino original
            </summary>
            <p className={styles.liturgicoOriginalTexto}>{original}</p>
          </details>
        )}
      </div>
    </article>
  );
}