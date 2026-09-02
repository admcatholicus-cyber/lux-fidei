import type { ReactNode } from 'react';
import styles from '../../_styles/biografia.module.css';

interface Props {
  numero: string;
  titulo: string;
  children: ReactNode;
}

export default function Section({ numero, titulo, children }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionMarca}>
          <span className={styles.sectionNum}>{numero}</span>
          <span className={styles.sectionLinha}></span>
        </div>
        <h3 className={styles.sectionTitulo}>{titulo}</h3>
      </div>
      {children}
    </section>
  );
}