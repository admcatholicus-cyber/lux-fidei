import type { ReactNode } from 'react';
import styles from '../../_styles/biografia.module.css';

interface Props {
  children: ReactNode;
}

export default function Destaque({ children }: Props) {
  return <div className={styles.destaque}>{children}</div>;
}