import styles from '../_styles/layout.module.css';

export default function Hero() {
  return (
    <header id="hero" className={styles.hero}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <p className={styles.heroSupratitulo}>Compêndio Teológico Completo</p>
        <h1 className={styles.heroTitulo}>SANTIDADE</h1>

        <div className={styles.heroSeparador}>
          <span className={styles.separadorLinha} />
          <i className="fas fa-cross"></i>
          <span className={styles.separadorLinha} />
        </div>

        <p className={styles.heroSubtitulo}>
          «Sede santos, porque Eu, o Senhor vosso Deus, sou Santo»
        </p>
        <p className={styles.heroReferencia}>— Levítico 19,2</p>

        <p className={styles.heroDescricao}>
          Um estudo exaustivo sobre a santidade em todas as suas dimensões: bíblica,
          dogmática, moral, mística, filosófica, patrística, magisterial e hagiográfica.
          Destinado a teólogos, seminaristas, padres, filósofos e a todo fiel que deseja
          compreender em profundidade o chamado supremo do cristão.
        </p>

        <div className={styles.heroAcoes}>
          <a href="#introducao" className={styles.btnHeroPrimario}>
            Iniciar Estudo
          </a>
          <a href="#indice-completo" className={styles.btnHeroSecundario}>
            Índice Completo
          </a>
        </div>
      </div>
    </header>
  );
}