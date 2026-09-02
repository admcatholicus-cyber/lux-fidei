import { ReactNode } from 'react';
import styles from '@/app/santos/_styles/especificos/arcanjos/sao-gabriel-arcanjo/antologia.module.css';

type Props = {
  id: string;
  romano: string;
  titulo: string;
  epigrafe?: string;
  children: ReactNode;
};

export default function CapituloGabriel({ id, romano, titulo, epigrafe, children }: Props) {
  return (
    <section id={id} className={styles.capitulo}>
      <header className={styles.capituloHeader}>
        <div className={styles.capituloRomano}>{romano}</div>
        <h2 className={styles.capituloTitulo}>{titulo}</h2>
        {epigrafe && <p className={styles.capituloEpigrafe}>{epigrafe}</p>}
      </header>
      <div className={styles.capituloCorpo}>{children}</div>
    </section>
  );
}