import layout from '../_styles/layout.module.css';
import content from '../_styles/content.module.css';
import cards from '../_styles/cards.module.css';

function Citacao({ texto, referencia }: { texto: string; referencia: string }) {
  return (
    <div className={content.citacaoBloco}>
      <div className={content.citacaoIcone}>
        <i className="fas fa-quote-left"></i>
      </div>
      <blockquote>{texto}</blockquote>
      <cite>{referencia}</cite>
    </div>
  );
}

export default function Escrituras() {
  return (
    <section id="escrituras" className={`${layout.secao} ${layout.secaoClara}`}>
      <div className={layout.container}>
        <div className={layout.secaoCabecalho}>
          <p className={layout.secaoSupratitulo}>Capítulo III</p>
          <h2 className={layout.secaoTitulo}>Santidade nas Sagradas Escrituras</h2>
          <div className={layout.secaoSeparador}>
            <span className={layout.separadorLinha} />
            <i className="fas fa-bible"></i>
            <span className={layout.separadorLinha} />
          </div>
        </div>

        {/* ANTIGO TESTAMENTO */}
        <div id="at-santidade" className={content.conteudoTexto}>
          <h3 className={content.subtituloGrande}>A. Antigo Testamento</h3>

          <h4>1. A santidade de Deus como fundamento</h4>
          <p>
            O Antigo Testamento apresenta a santidade como <strong>o atributo divino por excelência</strong>. Mais do que onipotência, mais do que onisciência, é a santidade que define quem Deus é na Sua essência mais íntima. A grande teofania de Isaías revela isso de modo insuperável:
          </p>

          <Citacao
            texto="«Santo, Santo, Santo é o Senhor dos Exércitos! Toda a terra está cheia da Sua glória!»"
            referencia="— Isaías 6,3"
          />

          <p>
            A tríplice repetição (<em>Trisagion</em>) não é mero recurso literário: é o <strong>superlativo absoluto hebraico</strong>, indicando que a santidade de Deus é infinita, insuperável, incomensurável. Santo Tomás de Aquino comenta que esta tripla invocação corresponde às três Pessoas divinas e à perfeição absoluta da santidade de Deus (cf. <em>In Isaiam</em>, cap. 6).
          </p>

          <h4>2. A santidade e a Lei de Santidade (Levítico 17-26)</h4>
          <p>
            O chamado «Código de Santidade» do Levítico constitui o coração legislativo do Pentateuco sobre a santidade. Seu princípio fundamental é:
          </p>

          <Citacao
            texto="«Sede santos, porque Eu, o Senhor vosso Deus, sou Santo.»"
            referencia="— Levítico 19,2"
          />

          <p>Este imperativo revela três verdades capitais:</p>
          <ol className={content.listaTeologica}>
            <li><strong>A santidade humana tem fundamento na santidade divina.</strong> O homem deve ser santo <em>porque</em> Deus é santo. A santidade do homem é imitação e participação, não invenção autônoma.</li>
            <li><strong>A santidade é um mandamento, não uma sugestão.</strong> Deus ordena a santidade. Ela não é opcional para o crente.</li>
            <li><strong>A santidade abrange toda a vida.</strong> O Código de Santidade regula culto, relações sociais, sexualidade, justiça, alimentação — mostrando que nada está fora do alcance da santidade.</li>
          </ol>

          <h4>3. Santidade cúltica e ritual</h4>
          <p>
            No Antigo Testamento, há uma forte ligação entre santidade e <strong>culto</strong>. São declarados santos:
          </p>
          <ul className={content.listaTeologica}>
            <li>O <strong>Templo</strong> e o Santo dos Santos (1Rs 8,10-11)</li>
            <li>O <strong>sábado</strong> (Gn 2,3; Ex 20,8)</li>
            <li>Os <strong>sacerdotes levíticos</strong> (Lv 21,6-8)</li>
            <li>Os <strong>objetos do culto</strong> (Ex 30,29)</li>
            <li>As <strong>ofertas</strong> e os <strong>sacrifícios</strong> (Lv 2,3)</li>
            <li>O <strong>Nome de Deus</strong> (Lv 22,32)</li>
          </ul>
          <p>
            Esta santidade cúltica, porém, nunca foi um fim em si mesma. Os profetas denunciaram veementemente a separação entre culto externo e santidade interior:
          </p>

          <Citacao
            texto="«Que me importa a multidão dos vossos sacrifícios? — diz o Senhor. [...] Lavai-vos, purificai-vos! Tirai da Minha vista as vossas más ações! Cessai de fazer o mal, aprendei a fazer o bem!»"
            referencia="— Isaías 1,11.16-17"
          />

          <h4>4. Santidade nos Profetas: a interiorização</h4>
          <p>
            Os profetas representam um <strong>avanço decisivo</strong> na compreensão da santidade. Não negam o culto, mas insistem que a santidade verdadeira é <strong>interior</strong>, <strong>ética</strong> e <strong>relacional</strong>. Destaques:
          </p>

          <div className={cards.profetasGrid}>
            {[
              { nome: 'Isaías', desc: <>Chama Deus de «o Santo de Israel» (mais de 25 vezes). Enfatiza que a santidade de Deus exige <strong>justiça</strong> e <strong>pureza</strong> no povo (Is 5,16).</> },
              { nome: 'Ezequiel', desc: <>Anuncia a <strong>renovação interior</strong> como obra de Deus: «Dar-vos-ei um coração novo e porei em vós um espírito novo» (Ez 36,26-27). A santidade será fruto do Espírito de Deus.</> },
              { nome: 'Oseias', desc: <>Revela a santidade divina como <strong>amor fiel</strong> mesmo diante da infidelidade humana (Os 11,9). A santidade de Deus não é fria distância, mas amor ardente.</> },
              { nome: 'Jeremias', desc: <>Promete a «nova aliança» escrita no coração (Jr 31,33), antecipando a santificação interior pelo Espírito.</> },
            ].map((p) => (
              <div key={p.nome} className={cards.profetaCard}>
                <h5>{p.nome}</h5>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>

          <h4>5. Santidade nos Salmos e livros sapienciais</h4>
          <p>
            Os Salmos expressam tanto o <strong>temor</strong> diante da santidade de Deus quanto o <strong>desejo</strong> de participar dela:
          </p>

          <Citacao
            texto="«Quem subirá ao monte do Senhor? Quem permanecerá no Seu lugar santo? Aquele que tem as mãos inocentes e o coração puro.»"
            referencia="— Salmo 24 (23), 3-4"
          />
          <Citacao
            texto="«Criai em mim, ó Deus, um coração puro, e renovai em mim um espírito firme.»"
            referencia="— Salmo 51 (50), 12"
          />
        </div>

        {/* NOVO TESTAMENTO */}
        <div id="nt-santidade" className={content.conteudoTexto}>
          <h3 className={content.subtituloGrande}>B. Novo Testamento</h3>

          <h4>1. Jesus Cristo: a Santidade encarnada</h4>
          <p>
            No Novo Testamento, a santidade deixa de ser apenas um atributo divino contemplado à distância e <strong>torna-se uma Pessoa</strong>: Jesus Cristo. Ele é «o Santo de Deus» (Mc 1,24; Lc 4,34; Jo 6,69). Nele, a santidade divina se faz acessível, visível, imitável. A Encarnação é o evento supremo da santidade: o Santo faz-se homem para que o homem possa participar da Sua santidade.
          </p>

          <Citacao
            texto="«Por eles Eu me santifico a Mim mesmo, para que também eles sejam santificados na verdade.»"
            referencia="— João 17,19"
          />

          <p>
            Cristo se «santifica» não no sentido de que precisasse tornar-se mais santo, mas no sentido de que <strong>se consagra totalmente ao Pai</strong> para que a Sua santidade seja comunicada aos discípulos. Toda a missão de Cristo é santificadora.
          </p>

          <h4>2. O ensinamento de Jesus sobre a santidade</h4>
          <p>Jesus não usa frequentemente a palavra «santo», mas todo o Seu ensinamento é sobre santidade sob outros nomes:</p>
          <ul className={content.listaTeologica}>
            <li><strong>As Bem-aventuranças</strong> (Mt 5,1-12) — o «programa de santidade» do cristão.</li>
            <li><strong>«Sede perfeitos como vosso Pai celeste é perfeito»</strong> (Mt 5,48) — equivalente neotestamentário de Lv 19,2.</li>
            <li><strong>Pureza de coração</strong> — «Bem-aventurados os puros de coração, porque verão a Deus» (Mt 5,8).</li>
            <li><strong>Interioridade contra exteriorismo</strong> — toda a polêmica contra o farisaísmo (Mt 23).</li>
            <li><strong>Amor como essência</strong> — o mandamento do amor (Mt 22,37-40) revela que a santidade se consuma na caridade.</li>
          </ul>

          <h4>3. São Paulo: a santificação em Cristo</h4>
          <p>
            São Paulo é o teólogo neotestamentário que mais desenvolveu a doutrina da santificação. Para ele, os cristãos já são chamados <strong>«santos»</strong> (<em>hágioi</em>) em virtude do Batismo (Rm 1,7; 1Cor 1,2; Ef 1,1), mas devem <strong>tornar-se efetivamente</strong> o que já são ontologicamente:
          </p>

          <Citacao texto="«Esta é a vontade de Deus: a vossa santificação.»" referencia="— 1 Tessalonicenses 4,3" />

          <div className={cards.paulinoConceitos}>
            {[
              { titulo: 'Justificação e santificação', desc: <>A justificação (ser declarado justo) e a santificação (tornar-se santo) estão intimamente ligadas. Cristo «tornou-se para nós sabedoria, justiça, santificação e redenção» (1Cor 1,30).</> },
              { titulo: 'Templo do Espírito Santo', desc: <>«Não sabeis que o vosso corpo é templo do Espírito Santo?» (1Cor 6,19). A santidade atinge o corpo, não apenas a alma.</> },
              { titulo: 'Vida no Espírito', desc: <>A santificação é obra do Espírito Santo no cristão: «O fruto do Espírito é amor, alegria, paz, paciência, bondade...» (Gl 5,22-23).</> },
              { titulo: 'Configuração a Cristo', desc: <>«Já não sou eu que vivo, mas é Cristo que vive em mim» (Gl 2,20). A santidade paulina é cristiforme.</> },
            ].map((c, i) => (
              <div key={i} className={cards.conceitoCard}>
                <h5>{c.titulo}</h5>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>

          <h4>4. Carta aos Hebreus</h4>
          <Citacao
            texto="«Procurai a paz com todos e a santificação, sem a qual ninguém verá o Senhor.»"
            referencia="— Hebreus 12,14"
          />
          <p>
            Este versículo é capital: a santidade não é ornamento, é <strong>condição para ver a Deus</strong>. Sem ela, o homem permanece incapaz de entrar na presença divina.
          </p>

          <h4>5. São Pedro</h4>
          <Citacao
            texto="«Assim como é santo aquele que vos chamou, sede também vós santos em todo o vosso comportamento, porque está escrito: Sede santos, porque Eu sou Santo.»"
            referencia="— 1 Pedro 1,15-16"
          />
          <p>
            São Pedro retoma Levítico 19,2, confirmando a <strong>continuidade entre Antigo e Novo Testamento</strong> quanto ao chamado à santidade, mas agora com uma diferença decisiva: a santidade é possível porque Cristo nos redimiu e o Espírito Santo nos habita.
          </p>

          <h4>6. São João: a santidade como comunhão</h4>
          <p>
            Para São João, a santidade é essencialmente <strong>permanecer em Deus</strong>: «Deus é luz e nele não há trevas. Se dizemos que temos comunhão com Ele e andamos nas trevas, mentimos» (1Jo 1,5-6). A santidade joanina é comunhão luminosa com Deus-Luz e Deus-Amor.
          </p>

          <h4>7. Apocalipse: a santidade escatológica</h4>
          <Citacao texto="«O que é santo, que se santifique ainda mais.»" referencia="— Apocalipse 22,11" />
          <p>
            O Apocalipse apresenta a santidade consumada: os santos «lavaram as suas vestes no sangue do Cordeiro» (Ap 7,14) e estão diante do trono de Deus por toda a eternidade. A santidade, que na terra é combate, no céu é glória definitiva.
          </p>
        </div>
      </div>
    </section>
  );
}