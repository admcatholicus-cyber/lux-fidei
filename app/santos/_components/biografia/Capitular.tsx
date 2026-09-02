import type { ReactNode } from 'react';
import styles from '../../_styles/biografia.module.css';

interface Props {
  children: ReactNode;
}

export default function Capitular({ children }: Props) {
  return <span className={styles.capitular}>{children}</span>;
}