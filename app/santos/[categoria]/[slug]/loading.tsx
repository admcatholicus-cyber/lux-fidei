import styles from '../../_styles/santo.module.css';

const pulse = {
  background: 'linear-gradient(90deg, #ece7dc 25%, #f5f0e5 50%, #ece7dc 75%)',
  backgroundSize: '200% 100%',
  animation: 'skeleton-pulse 1.5s infinite',
  borderRadius: 4,
} as const;

export default function Loading() {
  return (
    <div className={styles.page}>
      <style>{`
        @keyframes skeleton-pulse {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      <div className={styles.wrap}>
        {/* ── Cabeçalho do santo ── */}
        <div className={styles.cabecalho}>
          <div
            style={{
              ...pulse,
              width: 320,
              height: 42,
              margin: '0 auto 14px',
              borderRadius: 4,
            }}
          />

          <div className={styles.divisor}>
            <span className={styles.divisorLinha} />
            <span className={styles.divisorOrn}>✦</span>
            <span className={styles.divisorLinha} />
          </div>

          <div
            style={{
              ...pulse,
              width: 180,
              height: 12,
              margin: '8px auto 14px',
            }}
          />

          <div
            style={{
              ...pulse,
              width: 260,
              height: 14,
              margin: '0 auto',
            }}
          />
        </div>

        {/* ── Barra de abas ── */}
        <nav className={styles.nav}>
          <ul className={styles.lista}>
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i}>
                <div
                  style={{
                    ...pulse,
                    width: '60%',
                    height: 10,
                    margin: '0 auto',
                  }}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* ── Área de conteúdo ── */}
      <main className={styles.main}>
        <div style={{ padding: '40px 0' }}>
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              style={{
                ...pulse,
                width: i === 2 ? '55%' : '80%',
                height: 14,
                margin: '0 auto 16px',
              }}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
