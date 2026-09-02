import type { ReactNode } from 'react';
import styles from '../../_styles/biografia.module.css';

interface Props {
  children: ReactNode;
}

export default function Nota({ children }: Props) {
  return <aside className={styles.nota}>{children}</aside>;
}