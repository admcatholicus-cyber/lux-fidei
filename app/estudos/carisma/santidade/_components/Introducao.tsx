import layout from '../_styles/layout.module.css';
import content from '../_styles/content.module.css';
import cards from '../_styles/cards.module.css';

export default function Introducao() {
  return (
    <section id="introducao" className={`${layout.secao} ${layout.secaoClara}`}>
      <div className={layout.container}>
        <div className={layout.secaoCabecalho}>
          <p className={layout.secaoSupratitulo}>Capítulo I</p>
          <h2 className={layout.secaoTitulo}>Introdução Geral</h2>
          <div className={layout.secaoSeparador}>
            <span className={layout.separadorLinha} />
            <i className="fas fa-feather-alt"></i>
            <span className={layout.separadorLinha} />
          </div>
        </div>

        <div className={content.conteudoTexto}>
          <h3>O que é santidade?</h3>
          <p>
            A santidade, no sentido católico mais pleno, não é simplesmente uma qualidade moral, um estado psicológico ou uma conquista humana. Ela é, antes de tudo, um <strong>atributo essencial de Deus</strong> e, derivadamente, a <strong>participação da criatura na vida divina</strong> pela graça santificante. Dizer que alguém é santo significa dizer que essa pessoa foi separada do profano, consagrada a Deus e, sobretudo, que <strong>a vida de Deus habita nela</strong>.
          </p>
          <p>
            A santidade não é reservada a uma elite espiritual; é o <strong>chamado fundamental de todo batizado</strong>. O Concílio Vaticano II, na Constituição Dogmática <em>Lumen Gentium</em>, dedicou todo o capítulo V a esta verdade: <em>«Todos os fiéis de qualquer estado ou ordem são chamados à plenitude da vida cristã e à perfeição da caridade»</em> (LG 40).
          </p>

          <h3>Por que estudar santidade?</h3>
          <p>
            O estudo da santidade não é um exercício acadêmico estéril. Ele é, como afirmou o Papa Bento XVI, <em>«a chave hermenêutica mais profunda para compreender a própria Revelação»</em>. Toda a Sagrada Escritura, toda a Tradição, todo o Magistério, toda a Liturgia, todos os sacramentos e toda a vida da Igreja convergem para um único fim: <strong>tornar o homem santo</strong>, isto é, <strong>fazê-lo participar da santidade de Deus</strong>.
          </p>

          <div className={content.citacaoBloco}>
            <div className={content.citacaoIcone}>
              <i className="fas fa-quote-left"></i>
            </div>
            <blockquote>«Deus não nos chamou para a impureza, mas para a santificação.»</blockquote>
            <cite>— 1 Tessalonicenses 4,7</cite>
          </div>

          <h3>A santidade como fim último da economia salvífica</h3>
          <p>
            No plano da economia da salvação, a santidade é simultaneamente <strong>ponto de partida e ponto de chegada</strong>. Ponto de partida, porque Deus, que é Santo, cria o homem para a comunhão consigo. Ponto de chegada, porque toda a obra redentora de Cristo — Encarnação, Paixão, Morte, Ressurreição, envio do Espírito Santo, fundação da Igreja, instituição dos sacramentos — tem como finalidade última <strong>restaurar no homem a santidade perdida pelo pecado original</strong> e conduzi-lo à santidade consumada na glória.
          </p>

          <h3>Dimensões do estudo</h3>
          <p>Este compêndio aborda a santidade nas seguintes dimensões:</p>

          <div className={cards.listaDimensoes}>
            {[
              { icone: 'fa-scroll', titulo: 'Bíblica', desc: 'O fundamento escriturístico no Antigo e Novo Testamento.' },
              { icone: 'fa-church', titulo: 'Dogmática', desc: 'A santidade como atributo divino, propriedade da Igreja e vocação do batizado.' },
              { icone: 'fa-balance-scale', titulo: 'Moral', desc: 'A santidade como vida virtuosa e luta contra o pecado.' },
              { icone: 'fa-fire', titulo: 'Mística', desc: 'As três vias da vida espiritual rumo à união com Deus.' },
              { icone: 'fa-lightbulb', titulo: 'Filosófica', desc: 'A santidade à luz da razão natural, da metafísica e da ética.' },
              { icone: 'fa-users', titulo: 'Patrística e Magisterial', desc: 'O testemunho dos Padres da Igreja e o ensinamento dos Papas e Concílios.' },
              { icone: 'fa-star', titulo: 'Hagiográfica', desc: 'Os santos como realização concreta e visível da santidade.' },
            ].map((d) => (
              <div key={d.titulo} className={cards.dimensaoItem}>
                <div className={cards.dimensaoIcone}>
                  <i className={`fas ${d.icone}`}></i>
                </div>
                <div className={cards.dimensaoTexto}>
                  <h4>{d.titulo}</h4>
                  <p>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}