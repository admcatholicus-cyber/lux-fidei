import { ReactNode } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-miguel-arcanjo/biblioteca.module.css';

type DialogoMiguelProps = {
  referencia: string;
  cena?: string;
  locutor?: string;
  original?: string;
  children: ReactNode;
};

export default function DialogoMiguel({
  referencia,
  cena,
  locutor,
  original,
  children,
}: DialogoMiguelProps) {
  return (
    <article className={styles.dialogo}>
      <div className={styles.dialogoBadge}>Escritura</div>
      <div className={styles.dialogoReferencia}>{referencia}</div>

      {cena && (
        <div className={styles.dialogoCena}>
          <span className={styles.dialogoCenaLabel}>Cena</span>
          <span className={styles.dialogoCenaTexto}>{cena}</span>
        </div>
      )}

      {locutor && <div className={styles.dialogoLocutor}>{locutor} diz:</div>}

      <div className={styles.dialogoTexto}>{children}</div>

      {original && (
        <details className={styles.dialogoOriginal}>
          <summary>Texto original</summary>
          <div>{original}</div>
        </details>
      )}
    </article>
  );
}