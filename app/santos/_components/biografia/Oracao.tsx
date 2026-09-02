import type { ReactNode } from 'react';
import styles from '../../_styles/biografia.module.css';

interface Props {
  titulo?: string;
  children: ReactNode;
}

export default function Oracao({ titulo = 'Oração', children }: Props) {
  return (
    <div className={styles.oracao}>
      <span className={styles.oracaoTitulo}>{titulo}</span>
      {children}
    </div>
  );
}