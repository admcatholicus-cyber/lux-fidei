import styles from '../../../../_styles/especificos/leigos/sao-isidoro-lavrador/IconografiaSantoIsidoro.module.css';
import { GaleriaIsidoro } from './GaleriaIsidoro';

const atributos = [
  [
    "A vara e o arado",
    "Instrumento de trabalho diário e ferramenta com a qual fez brotar a água. Sinal da santificação pelo labor braçal.",
  ],
  [
    "Os anjos lavrando",
    "O selo iconográfico exclusivo de Isidoro: enquanto o corpo repousa em oração, o Céu trabalha ao seu lado.",
  ],
  [
    "A parelha de bois",
    "Companheiros silenciosos da lida castelhana, representam a criação submetida a Deus através do homem justo.",
  ],
  [
    "O feixe de trigo",
    "Símbolo da colheita santa, da providência que nunca falha e da caridade que multiplica o pão.",
  ],
  [
    "Traje camponês",
    "A recusa do ornamento. A arte o veste com a simplicidade da terra, lembrando que a santidade não exige dignidade eclesiástica.",
  ],
];

export function IconografiaSantoIsidoro() {
  return (
    <article className={styles.page}>
      
      {/* BLOCO I — HERO */}
      <section className={styles.hero} aria-labelledby="iconografia-titulo">
        <div className={styles.heroImage} aria-hidden="true" />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroContent}>
          <p className={styles.kicker}>✦ Dossiê visual · Castela · Séculos XVII–XXI</p>
          <h1 id="iconografia-titulo">
            A luz celestial
            <br />
            sobre os campos de Madri
          </h1>
          <p className={styles.heroLead}>
            Sem deixar tratados escritos, a vida de <strong>Santo Isidoro Lavrador</strong> 
            foi contada pelas mãos de pintores e escultores através da terra, dos anjos e do arado.
          </p>
        </div>
      </section>

      {/* BLOCO II — GRAMÁTICA VISUAL */}
      <section className={styles.attributes} aria-labelledby="atributos-titulo">
        <header className={styles.sectionHead}>
          <p className={styles.eyebrow}>01 · Gramática isidoriana</p>
          <h2 id="atributos-titulo">A identidade visual da santidade camponesa</h2>
        </header>
        <div className={styles.attributeGrid}>
          {atributos.map(([titulo, texto], index) => (
            <div className={styles.attributeCard} key={titulo}>
              <span className={styles.attrNum}>0{index + 1}</span>
              <h3>{titulo}</h3>
              <p>{texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOCO III — INTRODUÇÃO CURTA */}
      <section className={styles.introBloco}>
        <p>
          A iconografia isidoriana floresce de modo extraordinário após a canonização de 1622. A partir do século XVII, 
          as escolas de pintura de Madri e Sevilha espalham a imagem do lavrador por todo o império hispânico. 
          Longe dos gabinetes dos doutores e dos coros monásticos, a arte encontrou em Isidoro a poesia visual 
          de uma santidade enraizada na terra: céus dramáticos, vestes rústicas e a irrupção do divino no meio da rotina agrícola.
        </p>
      </section>

      {/* BLOCO IV — MURO DE OBRAS */}
      <GaleriaIsidoro />

      {/* BLOCO V — NOTA FINAL */}
      <section className={styles.notaFinal}>
        <p className={styles.eyebrow}>Nota sobre as obras</p>
        <p>
          As imagens reunidas neste acervo pertencem ao domínio público e refletem séculos de veneração artística 
          ao padroeiro dos lavradores, desde as matrizes barrocas até as grandes esculturas retabulares.
        </p>
      </section>

    </article>
  );
}