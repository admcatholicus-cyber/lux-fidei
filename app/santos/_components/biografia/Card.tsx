import styles from '../../_styles/biografia.module.css';

type CardProps = {
  titulo?: string;
  children: React.ReactNode;
};

export default function Card({ titulo, children }: CardProps) {
  return (
    <div className={styles.card}>
      {titulo && <h4 className={styles.cardTitulo}>{titulo}</h4>}
      {children}
    </div>
  );
}