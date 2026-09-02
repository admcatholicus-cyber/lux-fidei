import layout from '../_styles/layout.module.css';
import content from '../_styles/content.module.css';
import cards from '../_styles/cards.module.css';

const ESTADOS = [
  { icone: 'fa-ring', titulo: 'Santidade no matrimônio', desc: 'Os esposos santificam-se pelo amor fiel, fecundo e indissolúvel; pela educação cristã dos filhos; pela vivência do lar como «igreja doméstica». Santos modelos: São Luís e Santa Zélia Martin, Santa Gianna Beretta Molla.' },
  { icone: 'fa-briefcase', titulo: 'Santidade no trabalho', desc: <>O trabalho feito com competência, honestidade e oferecido a Deus é caminho de santificação. São Josemaria Escrivá ensinou: <em>«Santificar o trabalho, santificar-se no trabalho, santificar os outros com o trabalho»</em>.</> },
  { icone: 'fa-pray', titulo: 'Santidade na vida consagrada', desc: 'Os consagrados vivem os conselhos evangélicos (pobreza, castidade, obediência) como caminhos radicais de santidade, testemunhando a primazia de Deus.' },
  { icone: 'fa-hands', titulo: 'Santidade no sacerdócio', desc: 'O sacerdote santifica-se pela celebração dos sacramentos, pela pregação fiel, pela caridade pastoral e pela identificação com Cristo Sacerdote.' },
  { icone: 'fa-user-graduate', titulo: 'Santidade na juventude', desc: 'Os jovens são chamados à santidade já agora, não «depois de velhos». Santos jovens: São Domingos Sávio, Beato Carlo Acutis, Santa Maria Goretti.' },
  { icone: 'fa-heartbeat', titulo: 'Santidade no sofrimento', desc: <>O sofrimento aceito e unido à Cruz de Cristo é caminho privilegiado de santificação. São João Paulo II escreveu sobre o «Evangelho do sofrimento» em <em>Salvifici Doloris</em>.</> },
];

export default function VocacaoUniversal() {
  return (
    <section id="vocacao-universal" className={`${layout.secao} ${layout.secaoClara}`}>
      <div className={layout.container}>
        <div className={layout.secaoCabecalho}>
          <p className={layout.secaoSupratitulo}>Capítulo XI</p>
          <h2 className={layout.secaoTitulo}>Vocação Universal à Santidade</h2>
          <div className={layout.secaoSeparador}>
            <span className={layout.separadorLinha} />
            <i className="fas fa-users"></i>
            <span className={layout.separadorLinha} />
          </div>
        </div>

        <div className={content.conteudoTexto}>
          <p>
            A doutrina da <strong>vocação universal à santidade</strong> é uma das afirmações mais importantes do Concílio Vaticano II. Embora sempre presente implicitamente na Tradição, foi solenemente proclamada na <em>Lumen Gentium</em>, capítulo V:
          </p>

          <div className={content.citacaoBloco}>
            <div className={content.citacaoIcone}><i className="fas fa-quote-left"></i></div>
            <blockquote>«Todos os fiéis de qualquer estado ou ordem são chamados à plenitude da vida cristã e à perfeição da caridade; santidade esta que promove, mesmo na sociedade terrena, um modo de vida mais humano.»</blockquote>
            <cite>— Lumen Gentium, 40</cite>
          </div>

          <h3>Implicações desta doutrina</h3>
          <ol className={content.listaTeologica}>
            <li><strong>A santidade não é reservada a religiosos e clérigos.</strong> Todo batizado — leigo, consagrado, ordenado — é chamado à mesma plenitude de santidade.</li>
            <li><strong>Cada estado de vida tem seu caminho próprio de santidade.</strong> O leigo santifica-se no matrimônio, no trabalho, na vida social; o religioso, na vida consagrada; o sacerdote, no ministério.</li>
            <li><strong>A santidade é possível em todas as circunstâncias.</strong> Não depende de condições externas favoráveis, mas da cooperação com a graça.</li>
            <li><strong>A santidade é obrigação, não opção.</strong> Não é um «extra» para os mais fervorosos, mas o dever fundamental de todo cristão.</li>
          </ol>

          <div id="estados-vida">
            <h3>Santidade nos diversos estados de vida</h3>

            <div className={cards.estadosGrid}>
              {ESTADOS.map((e) => (
                <div key={e.titulo} className={cards.estadoCard}>
                  <div className={cards.estadoIcone}><i className={`fas ${e.icone}`}></i></div>
                  <h4>{e.titulo}</h4>
                  <p>{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}