import styles from '../../_styles/biografia.module.css';

interface Props {
  items: string[];
}

export default function Lista({ items }: Props) {
  return (
    <ul className={styles.lista}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}