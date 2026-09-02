import styles from '../../_styles/biografia.module.css';

export interface InfoItemData {
  label: string;
  valor: string;
}

interface Props {
  items: InfoItemData[];
}

export default function InfoGrid({ items }: Props) {
  return (
    <div className={styles.infoGrid}>
      {items.map((item, i) => (
        <div key={i} className={styles.infoItem}>
          <span className={styles.infoLabel}>{item.label}</span>
          <span className={styles.infoValor}>{item.valor}</span>
        </div>
      ))}
    </div>
  );
}