import { ReactNode } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-gabriel-arcanjo/devocionario.module.css';

type Props = {
  titulo?: string;
  children: ReactNode;
};

export default function AlertaDevocional({ titulo = 'Atenção', children }: Props) {
  return (
    <aside className={styles.alerta}>
      <div className={styles.alertaIcone}>⚠</div>
      <div>
        <h3 className={styles.alertaTitulo}>{titulo}</h3>
        <div className={styles.alertaCorpo}>{children}</div>
      </div>
    </aside>
  );
}