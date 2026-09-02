import layout from '../_styles/layout.module.css';
import content from '../_styles/content.module.css';
import cards from '../_styles/cards.module.css';

const FILOSOFOS = [
  { nome: 'Jacques Maritain (†1973)', desc: <>Distinguiu entre <strong>santidade e perfeição moral natural</strong>. O santo não é simplesmente um homem bom; é um homem transformado pela graça. A santidade é um fenômeno sobrenatural irredutível à ética filosófica.</> },
  { nome: 'Dietrich von Hildebrand (†1977)', desc: <>Em <em>Santidade e Transformação em Cristo</em>, Hildebrand analisa as <strong>atitudes fundamentais</strong> que constituem a santidade: reverência, fidelidade, consciência de responsabilidade, veracidade e, acima de tudo, o <strong>«valor-resposta» ao amor de Deus</strong>.</> },
  { nome: 'Edith Stein / Santa Teresa Benedita da Cruz (†1942)', desc: <>Filósofa fenomenóloga convertida e mártir, Edith Stein viu na santidade a <strong>realização plena da pessoa humana</strong>. A abertura a Deus é o ato mais autenticamente humano, e a santidade é a plenitude da verdade pessoal.</> },
  { nome: 'Blaise Pascal (†1662)', desc: <>Embora não formalmente católico em sentido estrito da ortodoxia (jansenismo), Pascal intuiu genialmente que o homem tem três ordens: <strong>corpo, espírito e caridade</strong>. A santidade pertence à ordem da caridade, que é infinitamente superior às ordens da inteligência e da matéria.</> },
];

export default function Filosofia() {
  return (
    <section id="filosofia" className={`${layout.secao} ${layout.secaoEscura}`}>
      <div className={layout.container}>
        <div className={layout.secaoCabecalho}>
          <p className={layout.secaoSupratitulo}>Capítulo VIII</p>
          <h2 className={layout.secaoTitulo}>Filosofia da Santidade</h2>
          <div className={layout.secaoSeparador}>
            <span className={layout.separadorLinha} />
            <i className="fas fa-lightbulb"></i>
            <span className={layout.separadorLinha} />
          </div>
        </div>

        <div className={content.conteudoTexto}>
          <h3>Santidade e metafísica</h3>
          <p>
            Do ponto de vista metafísico, a santidade de Deus está ligada à Sua <strong>simplicidade absoluta</strong> e à Sua <strong>perfeição pura</strong>. Deus é <em>Ipsum Esse Subsistens</em> (o Próprio Ser Subsistente), e como tal é absolutamente isento de qualquer composição, potencialidade, defeito ou limitação. Sua santidade é a expressão da Sua <strong>pureza ontológica</strong>: Ele é puro Ato, puro Bem, pura Verdade.
          </p>
          <p>
            A santidade participada da criatura é, metafisicamente, uma <strong>elevação ontológica</strong>: pela graça, o ser humano recebe uma <strong>nova forma sobrenatural</strong> que o eleva acima da sua natureza e o torna proporcionado à visão de Deus.
          </p>

          <h3>Santidade e ética filosófica</h3>
          <p>
            Na tradição aristotélico-tomista, a vida virtuosa é a realização da <strong>eudaimonia</strong> (felicidade/beatitude). A santidade cristã leva este ideal ao seu cumprimento sobrenatural: a <strong>beatitude perfeita</strong> não está na virtude natural, mas na visão de Deus, que só a graça pode proporcionar.
          </p>
          <p>
            A santidade, portanto, não contradiz a ética natural, mas a <strong>completa, eleva e transfigura</strong>. O santo não é menos virtuoso que o filósofo estoico ou aristotélico; é <strong>infinitamente mais</strong>, porque suas virtudes são informadas pela caridade sobrenatural e ordenadas a um fim que transcende toda capacidade natural.
          </p>

          <h3>A noção do Sagrado: Rudolf Otto e a perspectiva católica</h3>
          <p>
            O filósofo e teólogo luterano <strong>Rudolf Otto</strong>, na obra <em>O Sagrado</em> (1917), descreveu a experiência do santo como o <strong><em>mysterium tremendum et fascinans</em></strong>: um mistério que simultaneamente aterroriza (pela transcendência absoluta) e fascina (pela beleza irresistível). Embora vindo de fora da tradição católica, esta análise fenomenológica é valiosa:
          </p>
          <ul className={content.listaTeologica}>
            <li><strong><em>Tremendum</em></strong>: o aspecto terrível da santidade divina. Isaías cai prostrado (Is 6,5), Pedro diz «Afasta-te de mim, Senhor, porque sou um homem pecador» (Lc 5,8).</li>
            <li><strong><em>Fascinans</em></strong>: o aspecto atraente da santidade divina. Os santos são irresistivelmente atraídos por Deus; a santidade é bela.</li>
          </ul>
          <p>
            A perspectiva católica aceita e completa Otto: o «numinoso» não é apenas uma categoria religiosa genérica, mas a experiência do Deus vivo e pessoal que se revelou em Cristo.
          </p>

          <h3>Filósofos católicos sobre a santidade</h3>
          <div className={cards.filosofosGrid}>
            {FILOSOFOS.map((f) => (
              <div key={f.nome} className={cards.filosofoCard}>
                <h4>{f.nome}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}