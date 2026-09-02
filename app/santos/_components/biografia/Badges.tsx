import styles from '../../_styles/biografia.module.css';

type BadgeTipo =
  | 'data'
  | 'local'
  | 'reliquia'
  | 'canonico'
  | 'historico'
  | 'papal'
  | 'cultura'
  | 'global';

type BadgeProps = {
  tipo?: BadgeTipo;
  children: React.ReactNode;
};

const tipoMap: Record<BadgeTipo, string> = {
  data: 'badgeData',
  local: 'badgeLocal',
  reliquia: 'badgeReliquia',
  canonico: 'badgeCanonico',
  historico: 'badgeHistorico',
  papal: 'badgePapal',
  cultura: 'badgeCultura',
  global: 'badgeGlobal',
};

export function Badges({ children }: { children: React.ReactNode }) {
  return <div className={styles.badges}>{children}</div>;
}

export function Badge({ tipo = 'data', children }: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[tipoMap[tipo]]}`}>
      {children}
    </span>
  );
}