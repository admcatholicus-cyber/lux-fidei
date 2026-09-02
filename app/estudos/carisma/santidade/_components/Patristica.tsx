import layout from '../_styles/layout.module.css';
import content from '../_styles/content.module.css';
import cards from '../_styles/cards.module.css';

const PADRES = [
  {
    nome: 'Santo Ireneu de Lyon (†202)',
    frase: '«A glória de Deus é o homem vivo; e a vida do homem é a visão de Deus.»',
    desc: <>Para Ireneu, a santidade é a <strong>plenitude da vida humana</strong>. O homem foi criado para crescer até a plena semelhança com Deus. A santidade é <strong>divinização</strong> (<em>theosis</em>).</>,
  },
  {
    nome: 'Santo Atanásio de Alexandria (†373)',
    frase: '«Deus se fez homem para que o homem se fizesse Deus.»',
    desc: <>Formulação clássica da doutrina da <strong>divinização</strong>. A santidade é a <strong>deificação da criatura pela graça</strong>.</>,
  },
  {
    nome: 'São Basílio Magno (†379)',
    desc: <>Desenvolveu a <strong>espiritualidade do Espírito Santo</strong> como Santificador. Em <em>De Spiritu Sancto</em>, mostra que é o Espírito quem torna a alma santa, iluminando-a e purificando-a.</>,
  },
  {
    nome: 'São Gregório de Nissa (†394)',
    desc: <>Autor de <em>A Vida de Moisés</em>, onde apresenta a santidade como <strong>epectase</strong>: progresso infinito na participação em Deus. O santo nunca «chega», mas avança eternamente para Deus, de glória em glória.</>,
  },
  {
    nome: 'Santo Agostinho de Hipona (†430)',
    frase: '«Fizeste-nos para Ti, Senhor, e o nosso coração está inquieto enquanto não repousar em Ti.»',
    desc: <>Agostinho é o grande doutor da <strong>graça e da interioridade</strong>. Para ele, a santidade é a vitória da graça no coração humano, a ordenação de todos os amores sob o amor de Deus (<em>ordo amoris</em>). Distinguiu entre <em>uti</em> (usar) e <em>frui</em> (fruir): o santo é aquele que frui de Deus e usa as criaturas, nunca o contrário.</>,
  },
  {
    nome: 'São João Crisóstomo (†407)',
    desc: <>O «boca de ouro» insistiu na <strong>santidade prática e social</strong>. A santidade não é fuga do mundo, mas transformação do mundo pela caridade, pela justiça e pela coerência de vida.</>,
  },
  {
    nome: 'São Gregório Magno (†604)',
    desc: <>Papa e Padre da Igreja, escreveu extensamente sobre a <strong>vida contemplativa como cume da santidade</strong> e sobre a responsabilidade dos pastores na santificação do rebanho (<em>Regra Pastoral</em>).</>,
  },
];

export default function Patristica() {
  return (
    <section id="patristica" className={`${layout.secao} ${layout.secaoEscura}`}>
      <div className={layout.container}>
        <div className={layout.secaoCabecalho}>
          <p className={layout.secaoSupratitulo}>Capítulo VI</p>
          <h2 className={layout.secaoTitulo}>A Santidade na Patrística</h2>
          <div className={layout.secaoSeparador}>
            <span className={layout.separadorLinha} />
            <i className="fas fa-book"></i>
            <span className={layout.separadorLinha} />
          </div>
        </div>

        <div className={content.conteudoTexto}>
          <p>Os Padres da Igreja desenvolveram e transmitiram a doutrina da santidade nos primeiros séculos do cristianismo. Cada um acentuou aspectos complementares:</p>

          <div className={cards.padresGrid}>
            {PADRES.map((p) => (
              <div key={p.nome} className={cards.padreCard}>
                <h4>{p.nome}</h4>
                {p.frase && <p className={cards.padreFrase}><em>{p.frase}</em></p>}
                <p>{p.desc}</p>
              </div>
            ))}
          </div>

          <h3>A doutrina patrística da divinização (<em>theosis</em>)</h3>
          <p>
            Um dos contributos mais profundos da Patrística ao tema da santidade é a doutrina da <strong>theosis</strong> (divinização). Presente tanto nos Padres gregos quanto nos latinos, esta doutrina afirma que a santidade não é mero aperfeiçoamento moral, mas <strong>participação real na natureza divina</strong>. O homem, pela graça, é elevado acima da sua condição natural e tornado <strong>consorte da natureza divina</strong> (2Pd 1,4).
          </p>
          <p>
            A theosis não significa que o homem se torna Deus por natureza (isso seria panteísmo), mas que ele participa <strong>por graça</strong> no que Deus é <strong>por natureza</strong>. É uma participação analógica, real mas não igualitária.
          </p>
        </div>
      </div>
    </section>
  );
}