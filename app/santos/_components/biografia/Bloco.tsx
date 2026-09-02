import type { ReactNode } from 'react';
import styles from '../../_styles/biografia.module.css';

interface Props {
  titulo: string;
  children: ReactNode;
}

export default function Bloco({ titulo, children }: Props) {
  return (
    <article className={styles.bloco}>
      <h4 className={styles.blocoTitulo}>{titulo}</h4>
      <div className={styles.blocoCorpo}>{children}</div>
    </article>
  );
}