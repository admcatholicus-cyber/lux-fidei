import layout from '../_styles/layout.module.css';
import content from '../_styles/content.module.css';
import cards from '../_styles/cards.module.css';

const TEOLOGAIS = [
  { icone: 'fa-cross', titulo: 'Fé', desc: 'O santo crê com firmeza inabalável, mesmo na obscuridade. A fé heroica resiste a todas as tentações contra a fé e ilumina toda a vida.' },
  { icone: 'fa-anchor', titulo: 'Esperança', desc: 'O santo espera firmemente em Deus, sem presunção nem desespero. Confia na misericórdia divina mesmo nos momentos mais sombrios.' },
  { icone: 'fa-heart', titulo: 'Caridade', desc: <>É a <strong>«forma de todas as virtudes»</strong> (STh II-II, q. 23, a. 8). A caridade heroica ama a Deus sobre todas as coisas e ao próximo como a si mesmo, até o sacrifício total. <strong>A santidade é essencialmente a perfeição da caridade.</strong></> },
];

const CARDEAIS = [
  { icone: 'fa-eye', titulo: 'Prudência', desc: 'O santo discerne com retidão o que Deus quer em cada situação concreta. A prudência sobrenatural é iluminada pelos dons do Espírito Santo.' },
  { icone: 'fa-gavel', titulo: 'Justiça', desc: 'O santo dá a cada um o que lhe é devido: a Deus, o culto; ao próximo, o respeito e o direito; a si mesmo, a dignidade de filho de Deus.' },
  { icone: 'fa-shield-alt', titulo: 'Fortaleza', desc: 'O santo enfrenta dificuldades, perseguições e sofrimentos com firmeza e constância, sem fugir nem desanimar.' },
  { icone: 'fa-balance-scale-left', titulo: 'Temperança', desc: 'O santo modera os prazeres sensíveis e ordena os apetites sob o governo da razão iluminada pela fé.' },
];

export default function Moral() {
  return (
    <section id="moral" className={`${layout.secao} ${layout.secaoEscura}`}>
      <div className={layout.container}>
        <div className={layout.secaoCabecalho}>
          <p className={layout.secaoSupratitulo}>Capítulo X</p>
          <h2 className={layout.secaoTitulo}>Teologia Moral e Santidade</h2>
          <div className={layout.secaoSeparador}>
            <span className={layout.separadorLinha} />
            <i className="fas fa-balance-scale"></i>
            <span className={layout.separadorLinha} />
          </div>
        </div>

        <div className={content.conteudoTexto}>
          <h3>Santidade como vida virtuosa heroica</h3>
          <p>
            Do ponto de vista da teologia moral, a santidade é a <strong>prática heroica das virtudes</strong>. O Código de Direito Canônico e as normas para as causas dos santos estabelecem que, para ser declarado santo, é necessário provar o <strong>exercício heroico das virtudes teologais</strong> (fé, esperança e caridade), das <strong>virtudes cardeais</strong> (prudência, justiça, fortaleza e temperança) e das <strong>virtudes conexas</strong>.
          </p>

          <h4>As virtudes teologais e a santidade</h4>
          <div className={cards.virtudesGrid}>
            {TEOLOGAIS.map((v) => (
              <div key={v.titulo} className={cards.virtudeCard}>
                <h5><i className={`fas ${v.icone}`}></i> {v.titulo}</h5>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>

          <h4>As virtudes cardeais e a santidade</h4>
          <div className={cards.virtudesGrid}>
            {CARDEAIS.map((v) => (
              <div key={v.titulo} className={cards.virtudeCard}>
                <h5><i className={`fas ${v.icone}`}></i> {v.titulo}</h5>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>

          <h3>Santidade e pecado</h3>
          <p>
            A santidade é <strong>incompatível com o pecado mortal</strong>. O pecado mortal destrói a graça santificante e rompe a amizade com Deus. Porém, a santidade <strong>convive com imperfeições e pecados veniais</strong> — todo santo, exceto Nossa Senhora, teve imperfeições. A diferença é que o santo <strong>luta contra elas</strong>, arrepende-se e busca a purificação constante.
          </p>
          <p>
            O pecado é o <strong>anti-santidade</strong>, a <strong>desordem</strong> que se opõe à ordem divina. A santidade, portanto, implica sempre <strong>conversão contínua</strong>: afastar-se do pecado e voltar-se para Deus.
          </p>

          <h3>Santidade e consciência moral</h3>
          <p>
            O santo é alguém com uma <strong>consciência moral reta e delicada</strong>. Não é escrupuloso (o que é uma patologia espiritual), mas é profundamente sensível ao que agrada ou desagrada a Deus. A santidade implica a <strong>formação contínua da consciência</strong> à luz da Revelação e do Magistério.
          </p>

          <h3>Heroicidade das virtudes</h3>
          <p>
            O conceito de <strong>«heroicidade das virtudes»</strong> é central no processo de canonização. Não basta praticar as virtudes de modo comum; é necessário praticá-las de modo <strong>constante, pronto, com alegria e acima do nível ordinário</strong>. O Papa Bento XIV (Próspero Lambertini), em <em>De Servorum Dei Beatificatione</em>, definiu que as virtudes heroicas são praticadas <em>«com prontidão, facilidade e gosto, de modo superior ao comum, para um fim sobrenatural, sem raciocínio humano»</em>.
          </p>
        </div>
      </div>
    </section>
  );
}