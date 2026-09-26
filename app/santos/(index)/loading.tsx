import styles from '../santos.module.css';

export default function Loading() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroOrnamento} aria-hidden="true">✦ ✦ ✦</div>
        <h1 className={styles.heroTitulo}>Santos da Igreja</h1>
        <p className={styles.heroSubtitulo}>Carregando...</p>
      </section>

      <section className={styles.grid} aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={styles.card} style={{ opacity: 1, transform: 'none' }}>
            <div className={`${styles.cardImg} ${styles.skeleton}`} />
            <div className={styles.cardContent}>
              <div
                className={styles.skeleton}
                style={{
                  height: 20,
                  width: '70%',
                  margin: '20px auto 10px',
                  borderRadius: 4,
                }}
              />
            </div>
            <div className={styles.cardCTA}>
              <div
                className={styles.skeleton}
                style={{ height: 40, borderRadius: 10 }}
              />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}