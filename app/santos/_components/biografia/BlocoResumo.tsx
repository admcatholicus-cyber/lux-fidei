import styles from '../../_styles/biografia.module.css';

type BlocoResumoProps = {
  titulo?: string;
  children: React.ReactNode;
};

export default function BlocoResumo({ titulo, children }: BlocoResumoProps) {
  return (
    <div className={styles.blocoResumo}>
      {titulo && <h3 className={styles.blocoResumoTitulo}>{titulo}</h3>}
      {children}
    </div>
  );
}