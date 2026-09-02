import styles from '../../_styles/biografia.module.css';

type GridProps = {
  cols?: 2 | 3 | 4;
  children: React.ReactNode;
};

export default function Grid({ cols = 2, children }: GridProps) {
  const cls = cols === 3 ? styles.grid3 : cols === 4 ? styles.grid4 : styles.grid2;
  return <div className={cls}>{children}</div>;
}