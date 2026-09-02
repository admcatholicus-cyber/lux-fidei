/**
 * Iconografia de São Filipe Néri
 * Direção de estilo: Roma oratoriana — matéria, fogo interior, colarinho aberto.
 */
import styles from '../../../../../_styles/especificos/presbiteros/sao-filipe-neri/iconografia/IconografiaSaoFilipeNeri.module.css';

import { IconografiaGaleria } from "./IconografiaGaleria";

const atributos = [
  [
    "Colarinho aberto",
    "Marca quase exclusiva de Filipe: o peito não tolera o tecido fechado depois da dilatação do coração. Na arte, o colletto slacciato diz mais sobre ele do que qualquer aureola.",
  ],
  [
    "Coração e costelas",
    "Não é só um Sagrado Coração genérico. A tradição visual nereana aponta para o Pentecostes de 1544: o peito dilatado, o arco das costelas, o fogo que ficou no corpo.",
  ],
  [
    "Batina e casula vermelha",
    "O padre de Roma, não o monge do deserto. Vermelho e tecido litúrgico lembram o fogo do Espírito e a Missa onde ele entrava em êxtase.",
  ],
  [
    "Livro e conversa",
    "Menos cátedra, mais Oratório: leitura espiritual, diálogo, formação de almas. O livro aparece como instrumento pastoral, não como troféu erudito.",
  ],
  
];

const percurso = [
  [
    "1595–1622",
    "Do rosto vivo ao culto",
    "Ainda fresco o corpo, a comunidade fixa o semblante: máscaras, retratos próximos e a biografia visual que prepara beatificação e canonização. O Filipe “real” vira Filipe reconhecível.",
  ],
  [
    "Século XVII",
    "O barroco do peito em fogo",
    "Pintores e escultores traduzem o êxtase, o Pentecostes e o coração dilatado. A oração deixa de ser postura quieta e vira drama: mãos, tecido, luz e peito aberto.",
  ],
  [
    "Século XVIII",
    "O padre devocional",
    "Estampas e retábulos estabilizam a fórmula: lírios, livro, paramentos, olhar ao alto. Filipe circula para capelas, casas e Oratórios fora de Roma.",
  ],
  [
    "Séc. XIX–XX",
    "Memória impressa e relíquia",
    "Séries narrativas, gravuras populares e a fixação do túmulo na Chiesa Nuova. A imagem serve tanto à devoção doméstica quanto à peregrinação romana.",
  ],
];

const chavesDeLeitura = [
  [
    "Não confundir com outros santos do peito",
    "Coração em chamas aparece em várias iconografias. Em Filipe, o sinal é histórico e anatômico: a tradição do Pentecostes nas catacumbas e a constatação post-mortem das costelas arqueadas.",
  ],
  [
    "Alegria não é leveza vazia",
    "O sorriso, o humor e a conversa com jovens não cancelam o místico. A boa iconografia nereana segura as duas faces: o padre acessível e o homem dilatado pelo Espírito.",
  ],
  [
    "Roma é personagem",
    "Catacumbas, San Girolamo, Vallicella, confessionário, ruas. Quando a cena perde a cidade, Filipe vira um santo abstrato. Quando a cidade permanece, ele volta a ser o Apóstolo de Roma.",
  ],
];

export function IconografiaSaoFilipeNeri() {
  return (
    <article className={styles.page}>
      <section className={styles.hero} aria-labelledby="iconografia-titulo">
        <div className={styles.heroImage} aria-hidden="true" />
        <div className={styles.heroGrain} aria-hidden="true" />
        <div className={styles.heroContent}>
          <p className={styles.kicker}>✦ Dossiê visual · Roma · 1515–1595</p>
          <p className={styles.roman}>XIX</p>
          <h1 id="iconografia-titulo">
            O peito aberto
            <br />
            que a arte não conseguiu fechar.
          </h1>
          <p className={styles.heroLead}>
            A iconografia de <strong>São Filipe Néri</strong> não começa por um
            símbolo inventado. Começa por um corpo marcado: colarinho aberto,
            coração dilatado, êxtases na Missa, catacumbas, confessionário e a
            Roma que ele reconquistou pela caridade.
          </p>
        </div>
        
      </section>

      <section className={styles.attributes} aria-labelledby="atributos-titulo">
        <header className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>01 · Gramática nereana</p>
            <h2 id="atributos-titulo">
              Como a arte
              <br />
              reconhece Filipe
            </h2>
          </div>
          <p>
            Antes de ser “o santo da alegria” em estampa devocional, Filipe foi
            um padre romano de peito dilatado, humor cortante e presença
            urbana. A imagem boa guarda essa densidade.
          </p>
        </header>
        <div className={styles.attributeGrid}>
          {atributos.map(([titulo, texto], index) => (
            <section className={styles.attributeCard} key={titulo}>
              <span>0{index + 1}</span>
              <i aria-hidden="true">✦</i>
              <h3>{titulo}</h3>
              <p>{texto}</p>
            </section>
          ))}
        </div>
      </section>

      <section className={styles.timeline} aria-labelledby="percurso-titulo">
        <div className={styles.timelineImage} aria-hidden="true" />
        <div className={styles.timelineContent}>
          <p className={styles.eyebrow}>02 · Da morte à memória visual</p>
          <h2 id="percurso-titulo">
            Como Roma
            <br />
            aprendeu a pintá-lo
          </h2>
          <p className={styles.timelineLead}>
            A imagem de Filipe nasce perto do leito de morte e do Oratório.
            Depois o barroco a dilata, a estampa a populariza e o túmulo da
            Chiesa Nuova a fixa como destino de peregrinação.
          </p>
          <ol>
            {percurso.map(([data, titulo, texto]) => (
              <li key={data}>
                <span>{data}</span>
                <div>
                  <h3>{titulo}</h3>
                  <p>{texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      

      <IconografiaGaleria />
    </article>
  );
}