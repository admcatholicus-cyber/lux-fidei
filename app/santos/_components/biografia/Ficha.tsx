import styles from '../../_styles/biografia.module.css';

type FichaItemProps = {
  label: string;
  children: React.ReactNode;
};

export function Ficha({ children }: { children: React.ReactNode }) {
  return <div className={styles.ficha}>{children}</div>;
}

export function FichaItem({ label, children }: FichaItemProps) {
  return (
    <div className={styles.fichaItem}>
      <strong className={styles.fichaItemLabel}>{label}</strong>
      {children}
    </div>
  );
}