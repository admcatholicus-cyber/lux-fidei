import layout from '../_styles/layout.module.css';
import content from '../_styles/content.module.css';

interface Categoria {
  titulo?: string;
  itens: React.ReactNode[];
}

interface Grupo {
  titulo: string;
  categorias: Categoria[];
}

const GRUPOS: Grupo[] = [
  {
    titulo: 'Fontes primárias',
    categorias: [
      {
        titulo: 'Sagrada Escritura',
        itens: [<>Bíblia Sagrada — edição da CNBB ou edição de Jerusalém.</>],
      },
      {
        titulo: 'Magistério',
        itens: [
          <>CONCÍLIO VATICANO II. <em>Lumen Gentium</em>, especialmente cap. V. 1964.</>,
          <>CONCÍLIO DE TRENTO. Decreto sobre a Justificação, sessão VI. 1547.</>,
          <>CATECISMO DA IGREJA CATÓLICA. Especialmente nn. 2012-2016, 823-829.</>,
          <>JOÃO PAULO II. Exortação apostólica <em>Novo Millennio Ineunte</em>. 2001.</>,
          <>FRANCISCO. Exortação apostólica <em>Gaudete et Exsultate</em>. 2018.</>,
          <>JOÃO PAULO II. Carta apostólica <em>Salvifici Doloris</em>. 1984.</>,
        ],
      },
    ],
  },
  {
    titulo: 'Patrística',
    categorias: [{
      itens: [
        <>IRENEU DE LYON. <em>Adversus Haereses</em>.</>,
        <>ATANÁSIO DE ALEXANDRIA. <em>De Incarnatione Verbi Dei</em>.</>,
        <>BASÍLIO MAGNO. <em>De Spiritu Sancto</em>.</>,
        <>GREGÓRIO DE NISSA. <em>A Vida de Moisés</em>.</>,
        <>AGOSTINHO DE HIPONA. <em>Confissões</em>; <em>A Cidade de Deus</em>; <em>Enchiridion</em>.</>,
        <>JOÃO CRISÓSTOMO. <em>Homilias sobre Mateus</em>.</>,
        <>GREGÓRIO MAGNO. <em>Regra Pastoral</em>.</>,
      ],
    }],
  },
  {
    titulo: 'Doutores da Igreja e Clássicos espirituais',
    categorias: [{
      itens: [
        <>TOMÁS DE AQUINO. <em>Summa Theologiae</em>, especialmente I-II, qq. 109-114; II-II, qq. 23-24, 81, 184.</>,
        <>BOAVENTURA. <em>Itinerarium mentis in Deum</em>.</>,
        <>TERESA DE JESUS. <em>O Castelo Interior</em>; <em>Vida</em>.</>,
        <>JOÃO DA CRUZ. <em>Subida do Monte Carmelo</em>; <em>Noite Escura</em>; <em>Cântico Espiritual</em>; <em>Chama Viva de Amor</em>.</>,
        <>FRANCISCO DE SALES. <em>Introdução à Vida Devota</em>; <em>Tratado do Amor de Deus</em>.</>,
        <>AFONSO MARIA DE LIGÓRIO. <em>Prática do Amor a Jesus Cristo</em>.</>,
        <>TERESA DE LISIEUX. <em>História de uma Alma</em>.</>,
      ],
    }],
  },
  {
    titulo: 'Teologia sistemática e espiritual',
    categorias: [{
      itens: [
        <>GARRIGOU-LAGRANGE, Réginald. <em>As Três Idades da Vida Interior</em>. 2 vols.</>,
        <>GARRIGOU-LAGRANGE, Réginald. <em>Perfeição Cristã e Contemplação</em>. 2 vols.</>,
        <>TANQUEREY, Adolphe. <em>Compêndio de Teologia Ascética e Mística</em>.</>,
        <>ROYO MARÍN, Antonio. <em>Teologia da Perfeição Cristã</em>.</>,
        <>AUMANN, Jordan. <em>Spiritual Theology</em>.</>,
        <>PHILIPPE, Jacques. <em>Chamados à Vida</em>; <em>A Liberdade Interior</em>.</>,
      ],
    }],
  },
  {
    titulo: 'Filosofia',
    categorias: [{
      itens: [
        <>OTTO, Rudolf. <em>O Sagrado</em> (<em>Das Heilige</em>). 1917.</>,
        <>MARITAIN, Jacques. <em>Os Graus do Saber</em>.</>,
        <>VON HILDEBRAND, Dietrich. <em>Santidade e Transformação em Cristo</em> (<em>Transformation in Christ</em>).</>,
        <>STEIN, Edith. <em>A Ciência da Cruz</em>.</>,
        <>PASCAL, Blaise. <em>Pensamentos</em>.</>,
      ],
    }],
  },
  {
    titulo: 'Hagiografia e estudos sobre os santos',
    categorias: [{
      itens: [
        <>BENTO XIV (Próspero Lambertini). <em>De Servorum Dei Beatificatione et Beatorum Canonizatione</em>.</>,
        <>BUTLER, Alban. <em>Vidas dos Santos</em>.</>,
        <>RATZINGER, Joseph (BENTO XVI). Catequeses sobre os santos (Audiências gerais 2006-2012).</>,
      ],
    }],
  },
];

export default function Bibliografia() {
  return (
    <section id="bibliografia" className={`${layout.secao} ${layout.secaoClara}`}>
      <div className={layout.container}>
        <div className={layout.secaoCabecalho}>
          <p className={layout.secaoSupratitulo}>Referências</p>
          <h2 className={layout.secaoTitulo}>Bibliografia</h2>
          <div className={layout.secaoSeparador}>
            <span className={layout.separadorLinha} />
            <i className="fas fa-book"></i>
            <span className={layout.separadorLinha} />
          </div>
        </div>

        <div className={content.conteudoTexto}>
          {GRUPOS.map((grupo) => (
            <div key={grupo.titulo}>
              <h3>{grupo.titulo}</h3>
              <div className={content.biblioLista}>
                {grupo.categorias.map((cat, idx) => (
                  <div key={idx} className={content.biblioCategoria}>
                    {cat.titulo && <h4>{cat.titulo}</h4>}
                    <ul>
                      {cat.itens.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}