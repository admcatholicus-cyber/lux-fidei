import styles from '../../../../../_styles/especificos/martires/santa-afra-de-augsburgo/frases/biblioteca.module.css';

export default function TestemunhoEclesial({
  autor,
  qualificacao,
  obra,
  data,
  original,
  fonte,
  children,
}: {
  autor: string;
  qualificacao?: string;
  obra?: string;
  data?: string;
  original?: string;
  fonte?: string;
  children: React.ReactNode;
}) {
  const iniciais = autor
    .split(' ')
    .filter((p) => p.length > 2)
    .slice(0, 2)
    .map((p) => p[0])
    .join('');

  return (
    <article className={styles.testemunho}>
      <div className={styles.testemunhoLateral}>
        <span className={styles.testemunhoMonograma}>{iniciais}</span>
      </div>

      <div className={styles.testemunhoCorpo}>
        <div className={styles.testemunhoCabecalho}>
          <span className={styles.testemunhoAutor}>{autor}</span>
          {qualificacao && (
            <span className={styles.testemunhoQualificacao}>
              {qualificacao}
            </span>
          )}
          <div className={styles.testemunhoMeta}>
            {obra && <span className={styles.testemunhoObra}>{obra}</span>}
            {data && <span className={styles.testemunhoData}>{data}</span>}
          </div>
        </div>

        <div className={styles.testemunhoTexto}>
          <span className={styles.testemunhoAspas}>❝</span>
          {children}
          <span className={styles.testemunhoAspas}>❞</span>
        </div>

        {original && (
          <details className={styles.testemunhoOriginalDetalhe}>
            <summary className={styles.testemunhoOriginalSumario}>
              Texto original
            </summary>
            <p className={styles.testemunhoOriginalTexto}>{original}</p>
          </details>
        )}

        {fonte && <span className={styles.testemunhoFonte}>{fonte}</span>}
      </div>
    </article>
  );
}