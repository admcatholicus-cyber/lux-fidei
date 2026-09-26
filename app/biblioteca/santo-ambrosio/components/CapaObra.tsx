import { obraMetadata } from "../data/metadata";
import styles from "../biblioteca-ambrosio.module.css";

export default function CapaObra() {
  const { santo, obra } = obraMetadata;

  return (
    <header className={styles.capa}>
      <div className={styles.capaOrnamentoTop}>❦</div>

      <div className={styles.capaBloco}>
        <p className={styles.capaSupratitulo}>Lux Fidei · Biblioteca</p>
        <h1 className={styles.capaTitulo}>{santo.nome}</h1>
        <p className={styles.capaVida}>{santo.vida}</p>
        <p className={styles.capaSubtitulo}>{santo.titulo}</p>

        <div className={styles.capaSeparador}>· · ·</div>

        <h2 className={styles.capaObraTitulo}>{obra.tituloLongo}</h2>
      </div>

      <blockquote className={styles.capaEpigrafe}>
        <p>&ldquo;{obra.epigrafe}&rdquo;</p>
        <footer>— {obra.epigrafeFonte}</footer>
      </blockquote>

      <div className={styles.capaOrnamentoBottom}>❦</div>
    </header>
  );
}
