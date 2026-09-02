import styles from "../../../../_styles/especificos/arcanjos/sao-gabriel-arcanjo/EtimologiaSignificado.module.css";

const leituras = [
  {
    numero: "01",
    titulo: "Força de Deus",
    texto:
      "A tradução latina tradicional, fortitudo Dei, preserva a ideia de vigor que atravessa a raiz g-b-r.",
  },
  {
    numero: "02",
    titulo: "Homem de vigor",
    texto:
      "Gever não significa apenas homem em sentido genérico: evoca força, valentia e presença — uma nuance que o português costuma perder.",
  },
  {
    numero: "03",
    titulo: "Deus é forte",
    texto:
      "Como nome teofórico, Gabriel não fala somente do anjo: aponta para Deus como origem e medida de toda força verdadeira.",
  },
  {
    numero: "04",
    titulo: "A força a serviço de Deus",
    texto:
      "Na leitura cristã, o nome encontra sua expressão na missão: Gabriel não anuncia a si mesmo, mas aquele que o envia.",
  },
];

/**
 * Bloco editorial para a seção "O Nome Gabriel".
 *
 * A seção foi pensada para ser autônoma: não depende de imagens,
 * fontes externas ou estilos globais para manter a composição visual.
 */
export default function EtimologiaSignificado() {
  return (
    <section className={styles.section} aria-labelledby="etimologia-significado-titulo">
     

      <div className={styles.introGrid}>
        <div className={styles.introCopy}>
          <p className={styles.kicker}>Uma palavra, várias camadas</p>
          <p className={styles.lead}>
            O nome de Gabriel não é um rótulo acrescentado ao anjo depois de sua
            missão. Ele já carrega, em sua forma semítica, uma afirmação sobre a
            força que vem de Deus e a serviço de quem essa força é colocada.
          </p>
        </div>

        <div className={styles.nameCard} aria-label="Nome de Gabriel em hebraico">
          <span className={styles.nameCardLabel}>Hebraico bíblico</span>
          <span className={styles.hebrewName} lang="he" dir="rtl">
            גַּבְרִיאֵל
          </span>
          <span className={styles.transliteration} lang="he-Latn">
            Gavrîʾēl
          </span>
          <span className={styles.nameCardMeaning}>força de Deus</span>
        </div>
      </div>

      <article className={styles.article}>
        <div className={styles.articleBody}>
          <p className={styles.dropCapParagraph}>
            <span className={styles.dropCap} aria-hidden="true">
              O
            </span>
            nome hebraico <span className={styles.hebrewInline} lang="he" dir="rtl">גַּבְרִיאֵל</span> —
            transliterado <em>Gavrîʾēl</em>, com acento na última sílaba — é um
            nome teofórico: uma composição que traz o elemento divino <span className={styles.hebrewInline} lang="he" dir="rtl">אֵל</span>{" "}
            (<em>ʾEl</em>). A análise tradicional aproxima seu primeiro elemento
            da raiz semítica <em>g-b-r</em>, associada a força, vigor e
            valentia, e de <span className={styles.hebrewInline} lang="he" dir="rtl">גֶּבֶר</span> (<em>gever</em>),
            “homem de vigor”.
          </p>

          <p>
            Essa nuance merece cuidado. <em>Gever</em> não é simplesmente um
            sinônimo de “homem”: <span className={styles.hebrewInline} lang="he" dir="rtl">אָדָם</span> (<em>ʾadam</em>)
            ressalta o ser humano em sua dimensão terrena e genérica, enquanto
            <span className={styles.hebrewInline} lang="he" dir="rtl">אִישׁ</span> (<em>ʾish</em>) designa o varão ou a pessoa em
            contraposição a outra. Em <em>gever</em>, a linguagem se concentra
            no vigor, na firmeza e na capacidade de agir.
          </p>

          <p>
            Por isso, “força de Deus” é uma tradução legítima e consagrada, mas
            não esgota o campo de sentido do nome. O hebraico permite perceber
            uma relação entre identidade, origem e missão: aquilo que Gabriel
            traz não nasce nele; vem de Deus e retorna a Deus.
          </p>
        </div>

        <aside className={styles.wordBreakdown} aria-label="Composição do nome Gabriel">
          <p className={styles.asideLabel}>A composição do nome</p>
          <div className={styles.parts}>
            <div className={styles.part}>
              <span className={styles.partWord} lang="he" dir="rtl">גֶּבֶר</span>
              <span className={styles.partLatin}>gever</span>
              <span className={styles.partMeaning}>vigor · homem forte</span>
            </div>
            <span className={styles.plus} aria-hidden="true">+</span>
            <div className={styles.part}>
              <span className={styles.partWord} lang="he" dir="rtl">אֵל</span>
              <span className={styles.partLatin}>ʾEl</span>
              <span className={styles.partMeaning}>Deus</span>
            </div>
          </div>
          <div className={styles.asideLine} aria-hidden="true" />
          <p className={styles.asideResult}>
            <span>Gavrîʾēl</span>
            <strong>força de Deus</strong>
          </p>
        </aside>
      </article>

      <div className={styles.readingsHeader}>
        <div>
          <p className={styles.kicker}>O que o nome pode sugerir</p>
          <h3 className={styles.readingsTitle}>Quatro ênfases de leitura</h3>
        </div>
        <p className={styles.readingsIntro}>
          Não são quatro traduções equivalentes. São aproximações semânticas que
          iluminam aspectos diferentes do mesmo nome.
        </p>
      </div>

      <div className={styles.readingsGrid}>
        {leituras.map((leitura) => (
          <article className={styles.readingCard} key={leitura.numero}>
            <span className={styles.readingNumber}>{leitura.numero}</span>
            <div>
              <h4>{leitura.titulo}</h4>
              <p>{leitura.texto}</p>
            </div>
          </article>
        ))}
      </div>

      <aside className={styles.editorNote}>
        <span className={styles.noteIcon} aria-hidden="true">i</span>
        <p>
          <strong>Nota filológica.</strong> A forma <em>fortitudo Dei</em> é a
          tradução latina tradicional. As demais formulações são paráfrases ou
          ênfases interpretativas; por isso, devem ser apresentadas como
          possibilidades de leitura, e não como quatro definições dogmáticas do
          nome.
        </p>
      </aside>
    </section>
  );
}
