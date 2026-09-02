import { ReactNode } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-gabriel-arcanjo/devocionario.module.css';

type Props = {
  titulo: string;
  children: ReactNode;
};

export default function ContextoDevocional({ titulo, children }: Props) {
  return (
    <details className={styles.contexto}>
      <summary className={styles.contextoSummary}>
        <span className={styles.contextoLabel}>Contexto e história</span>
        <span className={styles.contextoTituloInner}>{titulo}</span>
      </summary>
      <div className={styles.contextoCorpo}>{children}</div>
    </details>
  );
}