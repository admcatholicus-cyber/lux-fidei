import layout from '../_styles/layout.module.css';
import content from '../_styles/content.module.css';
import cards from '../_styles/cards.module.css';

interface Doutor {
  nome: string;
  titulo: string;
  corpo: React.ReactNode;
  citacao?: { texto: string; ref: string };
}

const DOUTORES: Doutor[] = [
  {
    nome: 'Santo Tomás de Aquino (†1274)',
    titulo: 'Doctor Angelicus — Doctor Communis',
    corpo: (
      <>
        <p>Na <em>Summa Theologiae</em>, Tomás apresenta a santidade como:</p>
        <ul>
          <li>Atributo divino essencial: Deus é a <strong>Santidade subsistente</strong> (I, q. 6).</li>
          <li><strong>Perfeição da caridade</strong>: a santidade do homem consiste na perfeição da caridade, que ordena todas as virtudes ao amor de Deus (II-II, q. 184, a. 1).</li>
          <li><strong>Estado de graça</strong>: o homem é santo enquanto possui a graça santificante que o torna agradável a Deus (I-II, q. 110).</li>
          <li>O <strong>fim último</strong> do homem é a visão beatífica — a contemplação face a face da santidade de Deus (I-II, q. 3, a. 8).</li>
        </ul>
      </>
    ),
    citacao: {
      texto: '«A santidade consiste principalmente na caridade, porque é a caridade que nos une a Deus, fim último da vida humana.»',
      ref: '— STh II-II, q. 184, a. 1',
    },
  },
  {
    nome: 'São Boaventura (†1274)',
    titulo: 'Doctor Seraphicus',
    corpo: (
      <p>Na tradição franciscana, São Boaventura apresenta a santidade como <strong>itinerário da mente para Deus</strong> (<em>Itinerarium mentis in Deum</em>). O caminho da santidade passa por três etapas: purificação, iluminação e união. A santidade é, em última instância, a <strong>sabedoria do amor</strong> que conduz à união extática com Deus.</p>
    ),
  },
  {
    nome: 'Santa Teresa de Jesus (†1582)',
    titulo: 'Doutora da Igreja',
    corpo: (
      <p>Em <em>O Castelo Interior</em>, Santa Teresa descreve o caminho da santidade como a travessia de <strong>sete moradas</strong> da alma até a morada mais interior, onde habita Deus. A santidade é <strong>intimidade com Deus</strong>, matrimônio espiritual, união transformante. Teresa insiste que a santidade autêntica se verifica pelas <strong>obras</strong> e pela <strong>humildade</strong>, não pelos fenômenos extraordinários.</p>
    ),
    citacao: {
      texto: '«Deus não olha tanto a grandeza das obras, mas o amor com que são feitas.»',
      ref: '— Santa Teresa de Jesus',
    },
  },
  {
    nome: 'São João da Cruz (†1591)',
    titulo: 'Doctor Mysticus',
    corpo: (
      <p>O doutor da «noite escura» ensina que a santidade exige <strong>purificação radical</strong>. A alma deve passar pela noite dos sentidos e pela noite do espírito para ser purificada de todo apego desordenado e alcançar a <strong>união transformante com Deus</strong>. O caminho é doloroso, mas o fruto é a santidade consumada.</p>
    ),
    citacao: {
      texto: '«Para chegar ao que não sabes, deves ir por onde não sabes. Para chegar ao que não possuis, deves ir por onde não possuis. Para chegar ao que não és, deves ir por onde não és.»',
      ref: '— São João da Cruz, Subida do Monte Carmelo',
    },
  },
  {
    nome: 'São Francisco de Sales (†1622)',
    titulo: 'Doutor do Amor de Deus',
    corpo: (
      <p>
        A originalidade de São Francisco de Sales está em mostrar que a <strong>devoção deve adaptar-se ao estado de vida</strong> de cada pessoa. A santidade de um monge não se expressa da mesma forma que a de uma mãe, de um comerciante ou de um soldado. A mesma caridade assume <strong>formas diferentes</strong> conforme os deveres concretos de cada vocação. Por isso, a santidade salesiana é profundamente realista: <strong>não retira a pessoa de suas obrigações</strong>, mas ensina a vivê-las com amor, equilíbrio e constância.
      </p>
    ),
},
  {
    nome: 'Santo Afonso Maria de Ligório (†1787)',
    titulo: 'Doctor Zelantissimus',
    corpo: (
      <p>Fundador dos Redentoristas, Santo Afonso escreveu extensamente sobre a <strong>santidade prática</strong>. Sua obra <em>Prática do Amor a Jesus Cristo</em> é um tratado sobre como viver a santidade no cotidiano. Insistiu que a santidade consiste na <strong>conformidade com a vontade de Deus</strong> em todas as circunstâncias.</p>
    ),
  },
  {
    nome: 'Santa Teresa de Lisieux (†1897)',
    titulo: 'Doutora da Igreja — A Pequena Via',
    corpo: (
      <p>Santa Teresinha do Menino Jesus descobriu a <strong>«pequena via»</strong> da santidade: fazer com grande amor as coisas pequenas. A santidade não consiste em grandes penitências ou obras extraordinárias, mas na <strong>confiança total em Deus</strong> e na <strong>oferta de cada gesto cotidiano</strong> com amor. Esta doutrina influenciou profundamente o magistério posterior sobre a vocação universal à santidade.</p>
    ),
    citacao: {
      texto: '«A santidade não consiste nesta ou naquela prática, mas numa disposição do coração que nos torna humildes e pequenos nos braços de Deus, conscientes da nossa fraqueza e confiantes até à audácia na Sua bondade de Pai.»',
      ref: '— Santa Teresa de Lisieux',
    },
  },
];

export default function Doutores() {
  return (
    <section id="doutores" className={`${layout.secao} ${layout.secaoClara}`}>
      <div className={layout.container}>
        <div className={layout.secaoCabecalho}>
          <p className={layout.secaoSupratitulo}>Capítulo VII</p>
          <h2 className={layout.secaoTitulo}>Doutores da Igreja e a Santidade</h2>
          <div className={layout.secaoSeparador}>
            <span className={layout.separadorLinha} />
            <i className="fas fa-graduation-cap"></i>
            <span className={layout.separadorLinha} />
          </div>
        </div>

        <div className={content.conteudoTexto}>
          <p>
            Os Doutores da Igreja são aqueles santos cujo ensinamento foi reconhecido como particularmente iluminador para toda a Igreja. Vários deles contribuíram decisivamente para a compreensão da santidade:
          </p>

          <div className={cards.doutoresLista}>
            {DOUTORES.map((d) => (
              <div key={d.nome} className={cards.doutorCard}>
                <div className={cards.doutorHeader}>
                  <h4>{d.nome}</h4>
                  <p className={cards.doutorTitulo}>{d.titulo}</p>
                </div>
                <div className={cards.doutorBody}>
                  {d.corpo}
                  {d.citacao && (
                    <div className={content.citacaoBloco}>
                      <blockquote>{d.citacao.texto}</blockquote>
                      <cite>{d.citacao.ref}</cite>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}