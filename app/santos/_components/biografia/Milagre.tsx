import type { ReactNode } from 'react';
import styles from '../../_styles/biografia.module.css';

interface Props {
  num?: string;
  titulo: string;
  children: ReactNode;
}

export default function Milagre({ num, titulo, children }: Props) {
  return (
    <div className={styles.milagre}>
      {num && <span className={styles.milagreNum}>{num}</span>}
      <h3>{titulo}</h3>
      <p>{children}</p>
    </div>
  );
}