import type { ReactNode } from 'react';
import styles from '../../_styles/biografia.module.css';

interface Props {
  titulo: string;
  children: ReactNode;
}

export default function SecaoEscura({ titulo, children }: Props) {
  return (
    <aside className={styles.secaoEscura}>
      <div className={styles.secaoEscuraBg} aria-hidden="true">
        <span className={styles.secaoEscuraBgBlob} />
      </div>

      <div className={styles.secaoEscuraInner}>
        <div className={styles.secaoEscuraHeader}>
          <span className={styles.secaoEscuraOrnamento}>✦</span>
          <span className={styles.secaoEscuraEyebrow}>Nota do Editor</span>
          <span className={styles.secaoEscuraLinha} />
        </div>

        <h3 className={styles.secaoEscuraTitulo}>{titulo}</h3>

        <div className={styles.secaoEscuraCorpo}>{children}</div>

        <div className={styles.secaoEscuraFooter} aria-hidden="true">
          <span className={styles.secaoEscuraFooterOrn}>❦</span>
        </div>
      </div>
    </aside>
  );
}