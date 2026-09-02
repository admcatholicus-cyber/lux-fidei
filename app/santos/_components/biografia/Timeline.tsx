import styles from '../../_styles/biografia.module.css';

export interface TimelineEvento {
  data: string;
  descricao: string;
}

interface Props {
  eventos: TimelineEvento[];
}

export default function Timeline({ eventos }: Props) {
  return (
    <div className={styles.timeline}>
      {eventos.map((e, i) => (
        <div key={i} className={styles.timelineItem}>
          <strong>{e.data}</strong>
          {e.descricao}
        </div>
      ))}
    </div>
  );
}