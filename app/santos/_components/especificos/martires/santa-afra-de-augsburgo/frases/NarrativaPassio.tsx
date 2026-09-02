import styles from '../../../../../_styles/especificos/martires/santa-afra-de-augsburgo/frases/biblioteca.module.css';

export default function NarrativaPassio({
  titulo,
  referencia,
  original,
  children,
}: {
  titulo: string;
  referencia?: string;
  original?: string;
  children: React.ReactNode;
}) {
  return (
    <article className={styles.narrativa}>
      <div className={styles.narrativaFio} />
      <div className={styles.narrativaInterior}>
        <div className={styles.narrativaCabecalho}>
          <span className={styles.narrativaIcone}>📜</span>
          <div>
            <h4 className={styles.narrativaTitulo}>{titulo}</h4>
            {referencia && (
              <span className={styles.narrativaRef}>{referencia}</span>
            )}
          </div>
        </div>

        <div className={styles.narrativaTexto}>{children}</div>

        {original && (
          <details className={styles.narrativaOriginal}>
            <summary className={styles.narrativaOriginalSumario}>
              Texto latino
            </summary>
            <p className={styles.narrativaOriginalTexto}>{original}</p>
          </details>
        )}
      </div>
    </article>
  );
}