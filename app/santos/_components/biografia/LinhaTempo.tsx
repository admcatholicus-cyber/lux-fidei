import styles from '../../_styles/biografia.module.css';

type PassoProps = {
  numero: string;
  titulo: string;
  children: React.ReactNode;
};

export function LinhaTempo({ children }: { children: React.ReactNode }) {
  return <div className={styles.linhaTempo}>{children}</div>;
}

export function Passo({ numero, titulo, children }: PassoProps) {
  return (
    <div className={styles.passo}>
      <div className={styles.passoNum}>{numero}</div>
      <div className={styles.passoCorpo}>
        <strong className={styles.passoTitulo}>{titulo}</strong>
        {children}
      </div>
    </div>
  );
}