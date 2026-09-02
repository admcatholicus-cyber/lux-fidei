import styles from '../../_styles/biografia.module.css';

type CardDestaqueProps = {
  titulo?: string;
  children: React.ReactNode;
};

export default function CardDestaque({ titulo, children }: CardDestaqueProps) {
  return (
    <div className={styles.cardDestaque}>
      {titulo && <h4 className={styles.cardDestaqueTitulo}>{titulo}</h4>}
      {children}
    </div>
  );
}