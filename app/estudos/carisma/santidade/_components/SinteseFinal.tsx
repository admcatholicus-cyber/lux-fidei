import layout from '../_styles/layout.module.css';
import content from '../_styles/content.module.css';
import cards from '../_styles/cards.module.css';

const TESES = [
  [
    'I',
    <>
      <strong>Deus é Santo por essência.</strong> A santidade não é um atributo acidental de Deus,
      mas o que Ele é na Sua identidade mais profunda.
    </>,
  ],
  [
    'II',
    <>
      <strong>A santidade de Deus é trinitária.</strong> O Pai é a fonte, o Filho é a revelação
      encarnada, o Espírito Santo é o agente da santificação.
    </>,
  ],
  [
    'III',
    <>
      <strong>A santidade humana é participação na santidade divina.</strong> O homem não é santo
      por natureza, mas por graça.
    </>,
  ],
  [
    'IV',
    <>
      <strong>A graça santificante é o princípio formal da santidade no homem.</strong> Sem ela,
      não há santidade verdadeira.
    </>,
  ],
  [
    'V',
    <>
      <strong>A santidade consiste essencialmente na perfeição da caridade.</strong> É a caridade
      que une o homem a Deus e ordena todas as demais virtudes.
    </>,
  ],
  [
    'VI',
    <>
      <strong>Todos os batizados são chamados à santidade.</strong> Não há exceção de estado,
      condição, época ou cultura.
    </>,
  ],
  [
    'VII',
    <>
      <strong>A santidade é dom de Deus e tarefa do homem.</strong> A graça tem a primazia absoluta,
      mas exige a cooperação livre.
    </>,
  ],
  [
    'VIII',
    <>
      <strong>A santidade é progressiva.</strong> Cresce pelo exercício das virtudes, pela recepção
      dos sacramentos e pela docilidade ao Espírito Santo.
    </>,
  ],
  [
    'IX',
    <>
      <strong>A santidade exige purificação também das ilusões espirituais.</strong> Além dos
      pecados exteriores, é preciso combater a soberba espiritual, o farisaísmo, o escrúpulo,
      a vaidade religiosa, a busca de consolações e o apego à própria vontade.
    </>,
  ],
  [
    'X',
    <>
      <strong>A santidade é inseparável da humildade.</strong> Sem humildade, toda aparente
      santidade é ilusão ou soberba espiritual.
    </>,
  ],
  [
    'XI',
    <>
      <strong>A santidade é verificada pelas obras.</strong> Não basta o sentimento; a santidade
      produz frutos visíveis de virtude.
    </>,
  ],
  [
    'XII',
    <>
      <strong>Os sacramentos são os meios ordinários de santificação.</strong> Especialmente
      a Eucaristia e a Penitência.
    </>,
  ],
  [
    'XIII',
    <>
      <strong>A Igreja é santa nos seus meios, embora tenha membros pecadores.</strong> A santidade
      da Igreja é essencial e indestrutível.
    </>,
  ],
  [
    'XIV',
    <>
      <strong>A santidade de um membro edifica todo o Corpo de Cristo.</strong> Na comunhão dos
      santos, o bem espiritual de cada fiel beneficia toda a Igreja, assim como o pecado de um
      membro fere a comunhão.
    </>,
  ],
  [
    'XV',
    <>
      <strong>Maria Santíssima é o modelo supremo de santidade entre as criaturas.</strong>
      Imaculada, cheia de graça, perfeitamente conformada a Cristo.
    </>,
  ],
  [
    'XVI',
    <>
      <strong>Os carismas devem ser ordenados pela caridade e discernidos pela Igreja.</strong>
      Dons extraordinários podem edificar o Corpo de Cristo, mas não substituem a conversão,
      a humildade, a obediência, a vida sacramental e a comunhão eclesial.
    </>,
  ],
  [
    'XVII',
    <>
      <strong>A santidade possui dimensão missionária.</strong> O santo evangeliza antes pelo que
      é do que pelo que diz; sua vida torna visível a beleza do Evangelho e a força transformadora
      da graça.
    </>,
  ],
  [
    'XVIII',
    <>
      <strong>A santidade é o fim de toda a economia da salvação.</strong> Tudo o que Deus fez
      e faz na história visa tornar o homem santo.
    </>,
  ],
  [
    'XIX',
    <>
      <strong>A santidade terrena é caminho; a celeste é pátria.</strong> A santidade consumada é
      a visão beatífica, para a qual a santidade terrestre é preparação.
    </>,
  ],
  [
    'XX',
    <>
      <strong>A santidade é a maior necessidade da Igreja e do mundo.</strong> Como disse São João
      Paulo II: <em>«O mundo precisa de santos»</em>.
    </>,
  ],
] as const;

export default function SinteseFinal() {
  return (
    <section id="sintese" className={`${layout.secao} ${layout.secaoEscura}`}>
      <div className={layout.container}>
        <div className={layout.secaoCabecalho}>
          <p className={layout.secaoSupratitulo}>Capítulo XVI</p>

          <h2 className={layout.secaoTitulo}>Síntese Final</h2>

          <div className={layout.secaoSeparador}>
            <span className={layout.separadorLinha} />
            <i className="fas fa-bookmark"></i>
            <span className={layout.separadorLinha} />
          </div>
        </div>

        <div className={content.conteudoTexto}>
          <h3>Vinte teses sobre a santidade</h3>

          <p>
            À guisa de síntese, apresentamos vinte teses que resumem toda a doutrina católica
            sobre a santidade:
          </p>

          <div className={cards.tesesLista}>
            {TESES.map(([num, texto]) => (
              <div key={num} className={cards.teseItem}>
                <div className={cards.teseNumero}>{num}</div>
                <p>{texto}</p>
              </div>
            ))}
          </div>

          <div className={`${content.citacaoBloco} ${content.citacaoFinal}`}>
            <div className={content.citacaoIcone}>
              <i className="fas fa-quote-left"></i>
            </div>

            <blockquote>
              «Não hesito em dizer que a perspectiva em que deve colocar-se todo o caminho pastoral
              é a da santidade. [...] É preciso redescobrir o pleno sentido prático desta grande
              ideia: a santidade não é um caminho extraordinário para poucos, mas é a alta medida da
              vida cristã ordinária.»
            </blockquote>

            <cite>
              — São João Paulo II, <em>Novo Millennio Ineunte</em>, 30-31
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}