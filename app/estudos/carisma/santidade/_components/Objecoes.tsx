import layout from '../_styles/layout.module.css';
import content from '../_styles/content.module.css';
import cards from '../_styles/cards.module.css';

const OBJECOES = [
  {
    pergunta: 'Objeção 1: «A santidade é impossível para o homem comum»',
    resposta: <p>A santidade seria impossível se dependesse apenas das forças humanas. Mas ela é obra da <strong>graça de Deus</strong>, que é oferecida a todos. «O que é impossível aos homens é possível a Deus» (Lc 18,27). Os santos não foram super-homens; foram homens e mulheres fracos que se deixaram transformar pela graça. Santa Teresinha, São Francisco, o Beato Carlo Acutis — todos eram pessoas comuns que cooperaram com uma graça extraordinária.</p>,
  },
  {
    pergunta: 'Objeção 2: «Se todos são chamados à santidade, por que tão poucos são santos?»',
    resposta: <p>Porque a santidade exige <strong>cooperação livre</strong> com a graça. Deus oferece a graça a todos, mas não a impõe. A liberdade humana pode resistir, negligenciar ou recusar. A pouca santidade no mundo não se deve à falta de graça, mas à <strong>falta de correspondência</strong>. Além disso, é possível que haja muito mais santos ocultos do que imaginamos — santos sem canonização, santos do anonimato.</p>,
  },
  {
    pergunta: 'Objeção 3: «A santidade é incompatível com a vida moderna»',
    resposta: <p>O Papa Francisco, em <em>Gaudete et Exsultate</em>, responde diretamente: a santidade é possível «aqui e agora», nas circunstâncias concretas de cada pessoa. Beato Carlo Acutis usava a internet; Santa Gianna era médica; São Josemaria vivia no meio da cidade. A santidade não exige fuga do mundo, mas <strong>transformação do mundo de dentro</strong>, pela graça.</p>,
  },
  {
    pergunta: 'Objeção 4: «Se Deus é santo, por que permite o mal?»',
    resposta: <p>A santidade de Deus não é negada pelo mal, mas <strong>manifestada na Sua resposta ao mal</strong>: a Redenção. Deus permite o mal porque respeita a liberdade que criou, mas tira dele um bem maior. A Cruz é a prova suprema: do maior mal (o assassinato do Filho de Deus) veio o maior bem (a salvação da humanidade). A santidade de Deus é compatível com a permissão do mal porque Deus é suficientemente poderoso e sábio para ordenar tudo ao bem (cf. Santo Agostinho, <em>Enchiridion</em>, 11).</p>,
  },
  {
    pergunta: 'Objeção 5: «A Igreja canoniza santos, mas não é ela mesma pecadora?»',
    resposta: <p>A Igreja é <strong>santa nos seus meios</strong> (sacramentos, doutrina, Escritura) e <strong>pecadora nos seus membros</strong>. Mas a presença de membros pecadores não anula a santidade essencial da Igreja, assim como a presença de doentes num hospital não anula a sua finalidade curativa. Aliás, o fato de a Igreja produzir santos em todas as épocas — mesmo em épocas de grave crise interna — é precisamente a <strong>prova da sua santidade essencial</strong>.</p>,
  },
  {
    pergunta: 'Objeção 6 (protestante): «A santidade é imputada, não infusa»',
    resposta: <p>Lutero ensinou que a justificação é meramente forense: Deus declara o pecador justo sem o transformar interiormente (<em>simul iustus et peccator</em>). A Igreja Católica, no Concílio de Trento, definiu solenemente que a justificação é uma <strong>verdadeira santificação interior</strong>: a graça não cobre o pecado como neve cobre o esterco (imagem de Lutero), mas <strong>realmente transforma a alma</strong>, infundindo nela a vida divina (DS 1528-1531). A santidade católica é <strong>real, ontológica e transformadora</strong>, não mera declaração jurídica.</p>,
  },
];

export default function Objecoes() {
  return (
    <section id="objecoes" className={`${layout.secao} ${layout.secaoClara}`}>
      <div className={layout.container}>
        <div className={layout.secaoCabecalho}>
          <p className={layout.secaoSupratitulo}>Capítulo XV</p>
          <h2 className={layout.secaoTitulo}>Objeções e Respostas</h2>
          <div className={layout.secaoSeparador}>
            <span className={layout.separadorLinha} />
            <i className="fas fa-comments"></i>
            <span className={layout.separadorLinha} />
          </div>
          <p className={layout.secaoDescricao}>Questões disputadas sobre a santidade</p>
        </div>

        <div className={content.conteudoTexto}>
          <div className={cards.objecoesLista}>
            {OBJECOES.map((o, i) => (
              <div key={i} className={cards.objecaoCard}>
                <div className={cards.objecaoHeader}>
                  <h4><i className="fas fa-question-circle"></i> {o.pergunta}</h4>
                </div>
                <div className={cards.objecaoResposta}>
                  <h5><i className="fas fa-check-circle"></i> Resposta:</h5>
                  {o.resposta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}