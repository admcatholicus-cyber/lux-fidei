import type { ReactNode } from 'react';
import styles from '../../_styles/biografia.module.css';

interface Props {
  children: ReactNode;
  fonte?: string;
}

export default function Citacao({ children, fonte }: Props) {
  return (
    <blockquote className={styles.citacao}>
      <div className={styles.citacaoTexto}>{children}</div>
      {fonte && <cite className={styles.fonte}>{fonte}</cite>}
    </blockquote>
  );
}