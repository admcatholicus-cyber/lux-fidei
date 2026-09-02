import { ReactNode } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-gabriel-arcanjo/devocionario.module.css';

type Props = {
  titulo?: string;
  children: ReactNode;
};

export default function ComoRezar({ titulo = 'Como rezar esta devoção', children }: Props) {
  return (
    <aside className={styles.comoRezar}>
      <h3 className={styles.comoRezarTitulo}>{titulo}</h3>
      <div className={styles.comoRezarCorpo}>{children}</div>
    </aside>
  );
}