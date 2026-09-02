import styles from '../../_styles/biografia.module.css';

type MetricaProps = {
  numero: string;
  legenda: string;
};

export function Metricas({ children }: { children: React.ReactNode }) {
  return <div className={styles.metricas}>{children}</div>;
}

export function Metrica({ numero, legenda }: MetricaProps) {
  return (
    <div className={styles.metrica}>
      <div className={styles.metricaNum}>{numero}</div>
      <div className={styles.metricaLeg}>{legenda}</div>
    </div>
  );
}