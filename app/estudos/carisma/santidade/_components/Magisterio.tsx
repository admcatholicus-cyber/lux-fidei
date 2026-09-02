import layout from '../_styles/layout.module.css';
import content from '../_styles/content.module.css';
import cards from '../_styles/cards.module.css';

const TIMELINE = [
  {
    ano: '1545-1563',
    titulo: 'Concílio de Trento',
    desc: <>Definiu solenemente a doutrina da <strong>justificação</strong>, distinguindo-a do erro protestante. Ensinou que a justificação é verdadeira <strong>santificação interior</strong> (não mera imputação externa), que a graça pode ser perdida pelo pecado mortal e recuperada pela Penitência, e que o homem deve cooperar com a graça para crescer em santidade (Decreto sobre a Justificação, sessão VI).</>,
  },
  {
    ano: '1869-1870',
    titulo: 'Concílio Vaticano I',
    desc: 'Embora focado na fé e na razão, reafirmou a santidade de Deus e a capacidade da razão de conhecer a existência de Deus, fundamento da busca da santidade.',
  },
  {
    ano: '1962-1965',
    titulo: <>Concílio Vaticano II — <em>Lumen Gentium</em>, cap. V</>,
    desc: <>O documento mais importante do Magistério sobre a <strong>vocação universal à santidade</strong>. Declarou solenemente que <em>«todos os fiéis de qualquer estado ou ordem são chamados à plenitude da vida cristã e à perfeição da caridade»</em> (LG 40). A santidade não é privilégio de religiosos e clérigos, mas chamado de <strong>todo batizado</strong>.</>,
  },
  {
    ano: '2001',
    titulo: <>São João Paulo II — <em>Novo Millennio Ineunte</em></>,
    desc: <>No limiar do terceiro milênio, João Paulo II declarou que <em>«não hesito em dizer que a perspectiva em que deve colocar-se todo o caminho pastoral é a da santidade»</em> (NMI 30). Definiu a santidade como <em>«alto grau da vida cristã ordinária»</em> e insistiu que ela deve ser proposta a todos.</>,
  },
  {
    ano: '2018',
    titulo: <>Papa Francisco — <em>Gaudete et Exsultate</em></>,
    desc: <>Exortação apostólica inteiramente dedicada ao <strong>chamado à santidade no mundo atual</strong>. Francisco insiste na santidade «da porta ao lado», nas «pequenas santidades» do cotidiano, e adverte contra duas tentações contemporâneas: o <strong>gnosticismo</strong> (santidade como conhecimento elitista) e o <strong>pelagianismo</strong> (santidade como conquista humana sem graça).</>,
  },
  {
    ano: '1992',
    titulo: 'Catecismo da Igreja Católica',
    desc: <>O CIC trata da santidade em múltiplas passagens. Destaque para: CIC 2013 (<em>«Todos os fiéis são chamados à santidade cristã»</em>), CIC 2015 (<em>«O caminho da perfeição passa pela cruz»</em>), CIC 828 (<em>«Canonizando alguns fiéis, a Igreja proclama o exercício heroico das virtudes»</em>).</>,
  },
];

export default function Magisterio() {
  return (
    <section id="magisterio" className={`${layout.secao} ${layout.secaoClara}`}>
      <div className={layout.container}>
        <div className={layout.secaoCabecalho}>
          <p className={layout.secaoSupratitulo}>Capítulo V</p>
          <h2 className={layout.secaoTitulo}>Magistério da Igreja sobre a Santidade</h2>
          <div className={layout.secaoSeparador}>
            <span className={layout.separadorLinha} />
            <i className="fas fa-scroll"></i>
            <span className={layout.separadorLinha} />
          </div>
        </div>

        <div className={content.conteudoTexto}>
          <p>
            O Magistério da Igreja, ao longo dos séculos, pronunciou-se repetidamente sobre a santidade. Apresentamos os documentos mais relevantes:
          </p>

          <div className={cards.magisterioTimeline}>
            {TIMELINE.map((item, i) => (
              <div key={i} className={cards.timelineItem}>
                <div className={cards.timelineMarcador}>
                  <span className={cards.timelineAno}>{item.ano}</span>
                </div>
                <div className={cards.timelineConteudo}>
                  <h4>{item.titulo}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h3>Outros documentos relevantes</h3>
          <ul className={content.listaTeologica}>
            <li><strong>Pio XI</strong>, <em>Rerum Omnium Perturbationem</em> (1923) — sobre São Francisco de Sales e a santidade acessível.</li>
            <li><strong>Pio XII</strong>, <em>Mystici Corporis</em> (1943) — a santidade da Igreja enquanto Corpo Místico de Cristo.</li>
            <li><strong>Paulo VI</strong>, <em>Evangelii Nuntiandi</em> (1975) — a santidade como condição para a evangelização autêntica.</li>
            <li><strong>Bento XVI</strong>, catequeses sobre os santos (2006-2012) — apresentou dezenas de santos como modelos concretos.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}