import layout from '../_styles/layout.module.css';
import content from '../_styles/content.module.css';
import cards from '../_styles/cards.module.css';

const TABELA = [
  ['Hebraico', 'קָדוֹשׁ (qadosh)', 'Separado, transcendente, outro', 'Raiz primária bíblica'],
  ['Hebraico', 'קָדַשׁ (qadash)', 'Separar, consagrar, santificar', 'Forma verbal'],
  ['Grego (LXX)', 'ἅγιος (hágios)', 'Santo, consagrado, dedicado a Deus', 'Tradução da Septuaginta'],
  ['Grego', 'ἁγιασμός (hagiasmós)', 'Santificação, processo de tornar-se santo', 'Usado por São Paulo'],
  ['Grego', 'ὅσιος (hósios)', 'Piedoso, devoto, justo diante de Deus', 'Nuance de piedade interior'],
  ['Latim', 'sanctus', 'Inviolável, consagrado, sagrado', 'De sancire (tornar inviolável)'],
  ['Latim', 'sanctitas', 'Santidade, qualidade do que é santo', 'Substantivo abstrato'],
  ['Latim', 'sanctificatio', 'Ato de santificar, santificação', 'Processo ativo'],
];

export default function Etimologia() {
  return (
    <section id="etimologia" className={`${layout.secao} ${layout.secaoEscura}`}>
      <div className={layout.container}>
        <div className={layout.secaoCabecalho}>
          <p className={layout.secaoSupratitulo}>Capítulo II</p>
          <h2 className={layout.secaoTitulo}>Etimologia e Semântica</h2>
          <div className={layout.secaoSeparador}>
            <span className={layout.separadorLinha} />
            <i className="fas fa-language"></i>
            <span className={layout.separadorLinha} />
          </div>
        </div>

        <div className={content.conteudoTexto}>
          <h3>Raízes hebraicas</h3>
          <p>
            O conceito bíblico de santidade tem raiz no hebraico <strong>קָדוֹשׁ (qadosh)</strong>, cuja ideia fundamental é a de <strong>separação</strong>, <strong>transcendência</strong>, <strong>alteridade</strong>. Dizer que Deus é <em>qadosh</em> significa afirmar que Ele é <strong>absolutamente outro</strong>, radicalmente distinto de tudo o que é criado, profano ou impuro. O verbo <strong>קָדַשׁ (qadash)</strong> significa «separar», «consagrar», «santificar».
          </p>

          <div className={content.tabelaEtimologia}>
            <table>
              <thead>
                <tr>
                  <th>Língua</th>
                  <th>Termo</th>
                  <th>Significado nuclear</th>
                  <th>Observação</th>
                </tr>
              </thead>
              <tbody>
                {TABELA.map((row, i) => (
                  <tr key={i}>
                    <td>{row[0]}</td>
                    <td><strong>{row[1].split(' ')[0]}</strong> {row[1].split(' ').slice(1).join(' ')}</td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3>Dupla dimensão do conceito</h3>
          <p>
            A análise filológica revela que «santidade» comporta sempre uma <strong>dupla dimensão</strong>:
          </p>
          <div className={cards.duplaDimensao}>
            <div className={cards.dimensaoCard}>
              <h4><i className="fas fa-arrow-up"></i> Dimensão negativa (separação)</h4>
              <p>Ser santo implica <strong>separar-se</strong> do que é impuro, profano, pecaminoso. É o aspecto de <strong>ruptura</strong> com o mundo decaído.</p>
            </div>
            <div className={cards.dimensaoCard}>
              <h4><i className="fas fa-arrow-down"></i> Dimensão positiva (consagração)</h4>
              <p>Ser santo implica <strong>ser consagrado a Deus</strong>, pertencer-Lhe, estar imerso na Sua vida. É o aspecto de <strong>comunhão</strong> com o Divino.</p>
            </div>
          </div>

          <h3>Evolução semântica</h3>
          <p>
            No Antigo Testamento, a santidade começa muito ligada ao <strong>culto</strong> (lugares santos, objetos santos, tempos santos), mas evolui progressivamente para uma dimensão <strong>ética e interior</strong> (especialmente nos profetas). No Novo Testamento, com Cristo e São Paulo, a santidade se torna plenamente <strong>pessoal, interior, cristológica e pneumatológica</strong>: é a vida do Espírito Santo no batizado que o torna realmente santo.
          </p>

          <h3>Distinção terminológica importante</h3>
          <div className={cards.distincoesGrid}>
            {[
              { titulo: 'Santidade ontológica', desc: <>A santidade que pertence a Deus por natureza. Ele <em>é</em> Santo. Não se torna santo, não cresce em santidade: Ele é a própria Santidade subsistente.</> },
              { titulo: 'Santidade participada', desc: 'A santidade que a criatura recebe de Deus por graça. O homem não é santo por natureza, mas torna-se santo ao participar da vida divina.' },
              { titulo: 'Santidade objetiva', desc: 'A santidade de coisas, lugares, tempos e instituições enquanto consagrados a Deus (ex.: a Igreja é objetivamente santa).' },
              { titulo: 'Santidade subjetiva', desc: 'A santidade pessoal do indivíduo, que depende da sua cooperação com a graça.' },
            ].map((d, i) => (
              <div key={i} className={cards.distincaoItem}>
                <h4>{d.titulo}</h4>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}