import layout from '../_styles/layout.module.css';
import content from '../_styles/content.module.css';
import cards from '../_styles/cards.module.css';

const MARIA = [
  { icone: 'fa-gem', titulo: 'A Imaculada Conceição', desc: <>Maria foi preservada do pecado original desde o primeiro instante da sua concepção, por singular graça de Deus em vista dos méritos de Cristo (dogma definido por Pio IX em 1854). Ela é a <strong>única criatura que nunca conheceu a menor mancha de pecado</strong>. Sua santidade é absolutamente perfeita desde o início.</> },
  { icone: 'fa-dove', titulo: 'Cheia de Graça', desc: <>O anjo a saúda como <em>«Kecharitomene»</em> — «cheia de graça» (Lc 1,28). Esta plenitude de graça significa que Maria possui a <strong>santidade em grau supremo entre todas as criaturas</strong>. Sua graça é superior à de todos os anjos e santos juntos.</> },
  { icone: 'fa-hand-holding-heart', titulo: 'Modelo perfeito de resposta', desc: <>O <em>«Fiat»</em> de Maria (Lc 1,38) é o ato humano mais perfeito de cooperação com a graça. Ela é o modelo de como a criatura deve acolher a santidade de Deus: com humildade, disponibilidade e amor total.</> },
  { icone: 'fa-crown', titulo: 'Mãe da Igreja e dos santos', desc: <>Maria é Mãe da Igreja (LG 53) e, portanto, Mãe de todos os santos. Sua intercessão maternal acompanha cada alma no caminho da santidade.</> },
  { icone: 'fa-cloud', titulo: 'A Assunta', desc: <>Elevada ao Céu em corpo e alma (dogma de 1950), Maria é o <strong>ícone escatológico da santidade consumada</strong>: o que ela já é, a Igreja inteira espera ser.</> },
];

export default function Maria() {
  return (
    <section id="maria-santidade" className={`${layout.secao} ${layout.secaoEscura}`}>
      <div className={layout.container}>
        <div className={layout.secaoCabecalho}>
          <p className={layout.secaoSupratitulo}>Capítulo XIV</p>
          <h2 className={layout.secaoTitulo}>Maria Santíssima e a Santidade</h2>
          <div className={layout.secaoSeparador}>
            <span className={layout.separadorLinha} />
            <i className="fas fa-star-of-life"></i>
            <span className={layout.separadorLinha} />
          </div>
        </div>

        <div className={content.conteudoTexto}>
          <p>Maria ocupa um lugar <strong>absolutamente singular</strong> na teologia da santidade. Ela é:</p>

          <div className={cards.mariaGrid}>
            {MARIA.map((m) => (
              <div key={m.titulo} className={cards.mariaCard}>
                <h4><i className={`fas ${m.icone}`}></i> {m.titulo}</h4>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>

          <div className={content.citacaoBloco}>
            <div className={content.citacaoIcone}><i className="fas fa-quote-left"></i></div>
            <blockquote>
              «A Bem-aventurada Virgem, predestinada desde toda a eternidade, juntamente com a Encarnação do Verbo, para Mãe de Deus, foi na terra, por disposição da Providência divina, a Mãe excelsa do divino Redentor, de modo singular a generosa cooperadora entre todas as criaturas e a humilde serva do Senhor.»
            </blockquote>
            <cite>— Lumen Gentium, 61</cite>
          </div>
        </div>
      </div>
    </section>
  );
}