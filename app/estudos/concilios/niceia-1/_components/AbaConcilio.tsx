'use client'

import styles from '../niceia-1.module.css'
import { Accordion } from './Accordion'
import { TabsInternas } from './TabsInternas'
import { CanonCard } from './CanonCard'
import { SubNav } from './SubNav'
import { DebateArena } from '../../_shared/DebateArena'
import { debatesArena } from '../_data/debatesArena'
import { IconDebates, IconStop, IconDNA, IconMicroscope, IconCross, IconBook, IconScales, IconMoon, IconScissors, IconWind, IconGlobe } from './Icons'
import { canonesData } from '../_data/canones'
import { participantesData } from '../_data/participantes'
import { convocacaoDados } from '../_data/outrosDados'
import { preHistoriaHomoousiosData } from '../_data/antecedentes'
import { anatemasComentario, anatemasNotaHistorica } from '../_data/anatemasComentario'
import { credoDossie } from '../documentos/_data/2a-credo'

const NAV_ITENS = [
  { id: 'abertura', label: 'Abertura' },
  { id: 'logistica', label: 'Logística' },
  { id: 'participantes', label: 'Participantes' },
  { id: 'debates', label: 'Debates' },
  { id: 'ario', label: 'Ário' },
  { id: 'homoousios', label: 'Homoousios' },
  { id: 'filosofia', label: 'Filosofia' },
  { id: 'credo', label: 'Credo' },
  { id: 'anatemas', label: 'Anátemas' },
  { id: 'exegese', label: 'Exegese' },
  { id: 'canones', label: 'Cânones' },
  { id: 'pascoa', label: 'Páscoa' },
  { id: 'cismas', label: 'Cismas' },
]

export function AbaConcilio() {
  return (
    <>
      <SubNav itens={NAV_ITENS} />

      {/* BLOCO 1 · id="abertura" */}
      <section className={`${styles.secao} secao-anchor`} id="abertura">
        <figure className={styles.secaoIlustracao}>
          <img
            src="/estudos/concilios/niceia-1/o-concilio/sessao-inaugural.webp"
            alt="Sessão Inaugural do Concílio de Niceia"
            className={styles.secaoIlustracaoImg}
            loading="lazy"
          />
          <figcaption className={styles.secaoIlustracaoLegenda}>
            Afresco histórico representando a assembleia solene do I Concílio Ecumênico presidida pelo Imperador Constantino I.
          </figcaption>
        </figure>
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>Convocação e Abertura</h2>
        </div>
        <Accordion id="conv1" titulo={<><strong>{convocacaoDados.titulo}</strong></>} defaultAberto={true}>
          <p>{convocacaoDados.intro}</p>
          <ol>
            {convocacaoDados.motivos.map((motivo, i) => (
              <li key={i}>{motivo}</li>
            ))}
          </ol>
        </Accordion>
        <Accordion id="conv2" titulo={<><strong>A Cerimônia de Abertura</strong></>}>
          <p>A sessão inaugural foi descrita por Eusébio de Cesareia. Os bispos foram recebidos no edifício central do palácio imperial. Constantino entrou vestido de púrpura e ouro, mas recusou sentar-se antes que os bispos permitissem, demonstrando reverência aos mártires e confessores presentes.</p>
          <p>Entre os confessores que impressionaram o imperador destacava-se <strong>Pafnúcio do Egito</strong>, monge e bispo da Tebaida, a quem os perseguidores haviam arrancado o olho direito e cortado o tendão da perna esquerda. Segundo a tradição, Constantino teria se aproximado de Pafnúcio e <strong>beijado reverentemente a órbita vazia</strong> do confessor, honrando nele as cicatrizes da fé.</p>
          <p>Outro confessor notável era <strong>Paulo de Neocesareia</strong>, cujas mãos tinham sido queimadas com ferro em brasa. A presença desses mártires vivos dava ao concílio uma autoridade moral incomparável: muitos dos padres haviam sobrevivido à Grande Perseguição de Diocleciano e Licínio.</p>
          <p>Eusébio registra ainda o discurso de abertura de Constantino, proferido em latim e traduzido aos bispos, no qual o imperador declarava que <em>&ldquo;a discórdia na Igreja de Deus é mais grave e perigosa do que qualquer guerra ou batalha&rdquo;</em>, e os exortava à concórdia.</p>
          <p><strong>Línguas:</strong> Os debates foram em grego. Constantino falava latim e usava intérprete, barreira que ajuda a explicar o domínio teológico dos orientais nos trabalhos conciliares.</p>
        </Accordion>
      </section>

      {/* BLOCO 2 · id="logistica" */}
      <section className={`${styles.secao} secao-anchor`} id="logistica">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>Logística Imperial</h2>
        </div>
        <Accordion id="conv4" titulo={<><strong>Logística Imperial e Transporte</strong></>}>
          <p>A convocação de uma assembleia de escala inédita exigiu a mobilização da máquina estatal romana. Segundo Eusébio, Constantino franqueou aos bispos e suas comitivas o uso gratuito do <em>cursus publicus</em> — o serviço postal imperial de transporte de tração animal, privilégio reservado a altos magistrados do Estado.</p>
          <p>Toda a hospedagem, alimentação e manutenção dos prelados durante os meses do concílio foram custeadas diretamente pelo tesouro imperial. O tempo de viagem variava drasticamente: enquanto bispos da Ásia Menor chegavam em poucos dias, a comitiva de Alexandria levou cerca de três semanas de navegação e marcha, e Ósio de Córdova viajou por mais de dois meses atravessando o Ocidente.</p>
          <p>Cada bispo tinha direito a viajar acompañado de dois presbíteros e três diáconos (foi assim que o jovem diácono Atanásio integrou a comitiva de Alexandre). Fontes como Sócrates e Sozômeno relatam ainda a presença de filósofos e dialéticos pagãos atraídos pelos debates. Entre os grandes ausentes notáveis figuravam o Papa Silvestre I de Roma e todo o episcopado da Britânia Romana, enquanto da Gália esteve presente apenas Nicásio de Die.</p>
        </Accordion>
      </section>

      {/* BLOCO 3 · id="participantes" — FUSÃO V + VII */}
      <section className={`${styles.secao} secao-anchor`} id="participantes">
        <figure className={styles.secaoIlustracao}>
          <img
            src="/estudos/concilios/niceia-1/o-concilio/padres-conciliares.webp"
            alt="Os Padres Conciliares reunidos em Niceia"
            className={styles.secaoIlustracaoImg}
            loading="lazy"
          />
          <figcaption className={styles.secaoIlustracaoLegenda}>
            Os Santos Padres do Concílio de Niceia reunidos em torno do texto das Escrituras.
          </figcaption>
        </figure>
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>Participantes e Figuras-Chave</h2>
        </div>
        <div className={styles.participantesGrid}>
          {participantesData.map((p, i) => (
            <div key={i} className={styles.participanteCard}>
              <h4 className={styles.participanteNome}>{p.figura}</h4>
              <p className={styles.participantePapel}>{p.posicao}</p>
              <p className={styles.participanteDescricao}>{p.destinoApos325}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOCO 4 · id="debates" */}
      <section className={`${styles.secao} secao-anchor`} id="debates">
        <figure className={styles.secaoIlustracao}>
          <img
            src="/estudos/concilios/niceia-1/o-concilio/discurso-debate.webp"
            alt="Debate teológico no plenário de Niceia"
            className={styles.secaoIlustracaoImg}
            loading="lazy"
          />
          <figcaption className={styles.secaoIlustracaoLegenda}>
            Representação dos acesos debates cristológicos no plenário conciliar perante o tribunal imperial.
          </figcaption>
        </figure>
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}><IconDebates size={20} style={{ verticalAlign: '-3px', marginRight: '8px' }} />Os Debates</h2>
        </div>
        <DebateArena debates={debatesArena} />
      </section>

      {/* BLOCO 5 · id="ario" */}
      <section className={`${styles.secao} secao-anchor`} id="ario">
        <figure className={styles.secaoIlustracao}>
          <img
            src="/estudos/concilios/niceia-1/o-concilio/icone-credo-ario.webp"
            alt="Ícone Ortodoxo de Niceia com Ário derrotado"
            className={styles.secaoIlustracaoImg}
            loading="lazy"
          />
          <figcaption className={styles.secaoIlustracaoLegenda}>
            Ícone tradicional de Niceia I: os bispos sustentam a confissão de fé enquanto Ário figura derrotado ao rodapé.
          </figcaption>
        </figure>
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}><IconStop size={20} style={{ verticalAlign: '-3px', marginRight: '8px' }} />Ário e o Arianismo</h2>
        </div>
        <TabsInternas tabs={[
          { id: 'ar1', label: 'Quem era Ário', content: (<><p>Ário nasceu por volta de 256 na Líbia e foi discípulo do presbítero e mártir Luciano de Antioquia. Serviu inicialmente como diácono sob o bispo Pedro de Alexandria, de quem foi excomungado por apoiar o movimento meleciano. Posteriormente readmitido, foi ordenado presbítero sob o bispo Aquilas por volta de 312 e encarregado da influente igreja urbana de Baucalis, em Alexandria.</p><p>Epifânio traça seu retrato físico e comportamental: um homem alto, magro, trajando túnica curta (<em>colóbion</em>), de postura grave e discurso profundamente sedutor. Gozava de imensa popularidade entre as virgens consagradas e o povo simples. Para difundir sua teologia entre a população geral, compôs a <em>Thalia</em> (&ldquo;O Banquete&rdquo;) em metro sotadeu, além de canções populares adaptadas para marinheiros, moleiros e viajantes.</p><p>Após a condenação no Concílio de Niceia (325), foi exilado na Ilíria, retornando do exílio por volta de 327/328. Teve sua reabilitação aprovada no Sínodo de Jerusalém em 335 e faleceu subitamente em Constantinopla em 336.</p><p><strong>O que sobrevive:</strong> três cartas e fragmentos da <em>Thalia</em>.</p></>) },
          { id: 'ar2', label: 'A Doutrina', content: (<><p><strong>As Teses Teológicas de Ário:</strong></p><ol style={{ paddingLeft: '20px', marginBottom: '16px', lineHeight: '1.6' }}><li><strong>Solidão do Pai:</strong> Somente o Pai é não-gerado (<em>agénnētos</em>) e sem princípio; o Filho tem um princípio derivado.</li><li><strong>Não-coeternidade:</strong> Houve um momento em que o Filho não existia (&ldquo;houve quando não era&rdquo;).</li><li><strong>Criação do Nada:</strong> O Filho foi criado do nada (<em>ex ouk óntōn</em>) pela vontade do Pai.</li><li><strong>Transcendência e Incognoscibilidade:</strong> O Filho não conhece o Pai perfeitamente nem compreende sua própria essência.</li><li><strong>Mutabilidade Moral:</strong> É mutável por natureza (<em>treptós</em>), porém mantido imutável pela virtude de sua vontade.</li><li><strong>Tríade Dessemelhante:</strong> Pai, Filho e Espírito Santo constituem uma Tríade de três hipóstases totalmente dessemelhantes.</li><li><strong>Modelo Logos-sarx:</strong> Em Cristo, o <em>Logos</em> criado assume um corpo humano ocupando diretamente o lugar da alma racional.</li></ol><p><strong>Passagens Bíblicas Invocadas pelos Arianos:</strong></p><p style={{ fontStyle: 'italic', color: '#4b5563' }}>Provérbios 8,22; João 14,28; João 17,3; Marcos 13,32; Colossenses 1,15; Hebreus 3,2; Atos 2,36; Filipenses 2,9.</p></>) },
          { id: 'ar2b', label: 'Por que era atraente', content: (<><p>O arianismo possuía uma força de atração considerável no século IV por diversos fatores teológicos, filosóficos e sociais:</p><ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}><li><strong>Monoteísmo estrito:</strong> Alinhava-se ao monoteísmo rigoroso (Deuteronômio 6,4).</li><li><strong>Literalismo bíblico:</strong> Oferecia uma leitura direta das passagens de limitação de Jesus.</li><li><strong>Coerência filosófica:</strong> Preservava a transcendência absoluta do Não-Gerado.</li><li><strong>Soteriologia do exemplo:</strong> Um Cristo que vence por esforço moral constituía um modelo imitável.</li><li><strong>Apelo popular:</strong> Músicas rítmicas da <em>Thalia</em> espalhavam as doutrinas nos ambientes de trabalho.</li><li><strong>Apoio de prelados influentes:</strong> Contava com Eusébio de Nicomédia, Eusébio de Cesareia e outros.</li><li><strong>Continuidade aparente:</strong> Parecia dar continuidade à teologia subordinacionista de Orígenes.</li></ul></>) },
          { id: 'ar2c', label: 'Cristologia Logos-sarx', content: (<><p>Para Ário e continuadores da tradição subordinacionista, Cristo não possuía uma alma humana racional: o <em>Logos</em> criado unira-se diretamente à carne (<em>sarx</em>). Dentro desse esquema, os textos bíblicos que relatam fraqueza, dor ou ignorância humana em Jesus não podiam ser atribuídos a uma natureza humana separada, sendo tomados como prova direta da mutabilidade e finitude do próprio <em>Logos</em>.</p><p>Eustácio de Antioquia foi o primeiro teólogo a rebatê-los afirmando categoricamente a presença de uma alma humana racional em Cristo. Esse mesmo modelo <em>Logos-sarx</em> reapareceria mais tarde na heresia apolinarista (condenada em 381).</p></>) },
          { id: 'ar2d', label: 'Ário na pesquisa moderna', content: (<><p>A historiografia acadêmica sobre Ário e o arianismo evoluiu drasticamente ao longo dos séculos:</p><ul style={{ paddingLeft: '20px', lineHeight: '1.6', fontSize: '0.92rem' }}><li><strong>Newman 1833:</strong> Viu Ário como um teólogo de matriz antioquena e judaizante, herdeiro de Paulo de Samósata.</li><li><strong>Gwatkin 1882:</strong> Interpretou o arianismo como a transformação da teologia em racionalismo helênico.</li><li><strong>Harnack:</strong> Apontou Ário como um herdeiro direto da escola de Luciano de Antioquia.</li><li><strong>Lorenz 1979:</strong> Refutou categoricamente a tese do Ário &ldquo;judaizante&rdquo; (<em>Arius judaizans?</em>).</li><li><strong>Gregg–Groh 1981:</strong> Propuseram que a motivação central de Ário era soteriológica, centrada no Cristo como exemplo de promoção moral.</li><li><strong>Kannengiesser:</strong> Destacou a figura de Ário prioritariamente como um exegeta bíblico.</li><li><strong>Williams 1987/2001:</strong> Redefiniu Ário como um teólogo alexandrino conservador e neoplatônico, envolvido em uma disputa local sobre autoridade e herança origenista.</li><li><strong>Hanson 1988:</strong> Demonstrou que ninguém tinha a resposta dogmática pronta em 325 e que Ário foi uma figura periférica na longa &ldquo;busca pela doutrina de Deus&rdquo;.</li><li><strong>Vaggione 2000:</strong> Analisou a continuidade do movimento em Eunômio e nos grupos neoarianos.</li><li><strong>Ayres 2004 e Gwynn 2007:</strong> Provaram que &ldquo;arianismo&rdquo; foi um rótulo polêmico criado por Atanásio, devendo-se analisar trajetórias diversas (eusebiana, alexandrina, marceliana, ocidental).</li><li><strong>Anatolios 2011:</strong> Aprofundou a construção da teologia trinitária e soteriológica do século IV.</li><li><strong>Fernández 2024–25:</strong> Promoveu uma rigorosa releitura crítica das fontes contemporâneas do conflito.</li></ul></>) },
          { id: 'ar4', label: 'A Resposta', content: <p>Atanásio argumentava a soteriologia: se Cristo não é plenamente Deus, sua morte não nos redime infinitamente e Ele não pode deificar a humanidade.</p> }
        ]} />
      </section>

      {/* BLOCO 6 · id="homoousios" */}
      <section className={`${styles.secao} secao-anchor`} id="homoousios">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}><IconDNA size={20} style={{ verticalAlign: '-3px', marginRight: '8px' }} />Pré-História do <em>Homoousios</em></h2>
        </div>
        <TabsInternas tabs={preHistoriaHomoousiosData.map(p => ({
          id: p.id,
          label: p.subtitulo,
          content: (<><h3>{p.titulo}</h3>{p.conteudo.split('\n\n').map((par, i) => (<p key={i} style={{ marginBottom: '12px', lineHeight: '1.6' }}>{par}</p>))}</>)
        }))} />
      </section>

      {/* BLOCO 7 · id="filosofia" */}
      <section className={`${styles.secao} secao-anchor`} id="filosofia">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}><IconMicroscope size={20} style={{ verticalAlign: '-3px', marginRight: '8px' }} />Filosofia Trinitária: <em>Ousía</em> e <em>Hypóstasis</em></h2>
        </div>
        <TabsInternas tabs={[
          { id: 'fil-ousia', label: 'Ousía', content: (<><p>O termo <em>ousía</em> (οὐσία) tem raízes filosóficas ricas e diversificadas. Aristóteles (<em>Categorias</em> 5) distinguia &ldquo;substância primeira&rdquo; da &ldquo;segunda&rdquo;; na <em>Metafísica</em> Z, define <em>ousía</em> como &ldquo;aquilo que é&rdquo;. Os estoicos utilizavam a palavra para designar o substrato material — o que gerou a suspeita persistente de que <em>homoousios</em> significasse &ldquo;feito da mesma matéria física&rdquo;.</p><p>Já na tradição platônica, <em>ousía</em> apontava para a realidade inteligível imutável. Nas Escrituras, o uso é bastante raro (aparece em Lc 15,12–13 com sentido puramente material). Entre os cristãos, Orígenes foi pioneiro na apropriação técnica; no Ocidente, Tertuliano cunhou <em>substantia</em>.</p><p>A pergunta que Niceia deixou em aberto e que só seria resolvida décadas depois pelos Capadócios: a <em>ousía</em> comum ao Pai e ao Filho deve ser entendida como genérica ou como única e numericamente idêntica?</p></>) },
          { id: 'fil-hypostasis', label: 'Hypóstasis', content: (<><p>A etimologia de <em>hypóstasis</em> vem do verbo <em>hyphístēmi</em> (colocar-se por baixo, sustentar) — literalmente &ldquo;aquilo que está por baixo&rdquo;. Aparece na Bíblia em Hebreus 1,3 e em Sabedoria 16,21.</p><p>Orígenes falava tecnicamente de &ldquo;três hipóstases&rdquo; (<em>Comentário a João</em> II.10), inaugurando a linguagem que o Oriente tomaria como tradicional.</p><p>Por essa razão, o anátema do Credo Niceno (&ldquo;quem afirmar que o Filho é de outra <em>hypóstasis</em> ou <em>ousía</em>&rdquo;) tratou as duas palavras como sinônimas — o que gerou décadas de confusão entre Ocidente (&ldquo;uma única hipóstase&rdquo;) e Oriente (&ldquo;três hipóstases&rdquo;) até o Sínodo de Alexandria em 362.</p></>) },
          { id: 'fil-agennetos', label: 'Agénnētos × Agénētos', content: (<><p>Existe outra letra decisiva na controvérsia: a diferença entre <em>agénnētos</em> (não gerado, do verbo <em>gennáō</em>) e <em>agénētos</em> (não vindo a ser, incriado, do verbo <em>gígnomai</em>). Grafias quase idênticas, frequentemente confundidas nos manuscritos.</p><p>Ário e Eusébio de Cesareia partiam do axioma &ldquo;somente o Pai é <em>agénnētos</em>&rdquo; para concluir que o Filho seria criatura. Atanásio refutou mostrando que <em>agénētos</em> é termo filosófico, não bíblico, argumentando que o Filho é <em>gennētós</em> (gerado) sem por isso ser <em>genētós</em> (feito, criado).</p><p>Os Capadócios formalizaram definitivamente esta distinção.</p></>) },
          { id: 'fil-generico', label: 'Genérico ou numérico? (Stead)', content: (<><p>Existem três leituras historicamente possíveis do <em>homoousios</em> tal como formulado em 325:</p><ul style={{ paddingLeft: '20px', lineHeight: '1.7' }}><li><strong>(a) Genérica:</strong> Pai e Filho seriam da mesma &ldquo;espécie&rdquo; divina. Leitura preferida por Eusébio.</li><li><strong>(b) Numérica:</strong> Existe uma só substância divina numericamente idêntica. Leitura tipicamente latina e defendida por Atanásio a partir de c. 350.</li><li><strong>(c) Material/derivativa:</strong> O Filho como &ldquo;porção&rdquo; material desprendida do Pai. Excluída pela glosa de Constantino.</li></ul><p>Christopher Stead e R.P.C. Hanson demonstraram que, em 325, o termo era deliberadamente aberto — sua &ldquo;densificação&rdquo; numérica é obra dos anos 350–360.</p></>) },
          { id: 'fil-platonismo', label: 'Platonismo médio e neoplatonismo', content: (<><p>O pano de fundo filosófico deve muito ao platonismo médio e ao neoplatonismo. Fílon de Alexandria falava em um <em>deúteros theós</em>. Numênio de Apameia articulou uma teologia de &ldquo;segundo deus&rdquo; — noção herdada por Orígenes.</p><p>Plotino ofereceu o modelo da processão do Nous a partir do Uno sem qualquer diminuição — imagem que serve tanto para pensar a fórmula &ldquo;Luz da Luz&rdquo; quanto (na leitura oposta) para justificar o subordinacionismo. Porfírio, autor do <em>Contra os cristãos</em>, era objeto de tal repulsa cristã que Constantino chegou a chamar os arianos de &ldquo;porfirianos&rdquo;. Jâmblico e sua lógica também deixaram marcas na argumentação de Ário (segundo Rowan Williams).</p><p><strong>Conclusão:</strong> Niceia utilizou o vocabulário técnico da filosofia grega para negar sua própria estrutura hierárquica — afirmando que o Filho não é &ldquo;segundo&rdquo;.</p></>) },
          { id: 'fil-lexico', label: 'Léxico rápido', content: (<><p>Vocabulário técnico essencial para navegar os debates trinitários do século IV:</p><ul style={{ paddingLeft: '20px', lineHeight: '1.7', fontSize: '0.92rem' }}><li><strong><em>Ktísma</em>:</strong> criatura.</li><li><strong><em>Poíēma</em>:</strong> coisa feita, produto.</li><li><strong><em>Génnēma</em>:</strong> rebento, gerado.</li><li><strong><em>Agénnētos / Agénētos</em>:</strong> não gerado / não vindo a ser (distinção capital: cf. aba anterior).</li><li><strong><em>Monogenḗs</em>:</strong> unigênito; em Jo 1,18 existe a variante textual <em>monogenḗs theós</em> (nos manuscritos P66, P75, א, B) contra <em>monogenḗs huiós</em> na tradição majoritária.</li><li><strong><em>Prōtótokos</em>:</strong> primogênito (Cl 1,15).</li><li><strong><em>Prósōpon</em>:</strong> rosto, máscara, pessoa — suspeito de sabelianismo se usado sozinho.</li><li><strong><em>Phýsis</em>:</strong> natureza.</li><li><strong><em>Hómoios / Homoioúsios / Homooúsios / Anómoios</em>:</strong> semelhante / de substância semelhante / consubstancial / dessemelhante.</li><li><strong><em>Ek tēs ousías</em>:</strong> &ldquo;da substância&rdquo; (do Pai).</li>            <li><strong><em>Theotókos</em>:</strong> Mãe de Deus, &ldquo;aquela que dá à luz Deus&rdquo; — já em Alexandre de Alexandria, quase um século antes do Concílio de Éfeso.</li></ul></>) }
        ]} />
      </section>

      {/* BLOCO 8 · id="credo" */}
      <section className={`${styles.secao} secao-anchor`} id="credo">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}><IconCross size={20} style={{ verticalAlign: '-3px', marginRight: '8px' }} />O Credo de Niceia</h2>
        </div>
        <div className={styles.caixaDestaque}>
          <p style={{ fontStyle: 'italic', lineHeight: '1.8', textAlign: 'justify' }}>
            &ldquo;Cremos em um só Deus, Pai todo-poderoso, criador de todas as coisas visíveis e invisíveis. E em um só Senhor Jesus Cristo, Filho de Deus, gerado do Pai como Unigênito, isto é, da substância (<em>ousía</em>) do Pai, Deus de Deus, Luz da Luz, Deus verdadeiro de Deus verdadeiro, <strong>gerado, não criado, consubstancial ao Pai</strong> (<em>homoousios tō Patri</em>), por quem todas as coisas foram feitas, tanto as do céu como as da terra; que por causa de nós, homens, e por causa da nossa salvação, desceu, se encarnou e se fez homem; sofreu e ressuscitou ao terceiro dia; subiu aos céus e virá para julgar os vivos e os mortos. E no Espírito Santo.&rdquo;
          </p>
          <p style={{ marginTop: '12px', fontSize: '0.85rem', color: '#5b3d24' }}><em>Grego, latim, notas filológicas e anátemas comentados: Dossiê 2A.</em></p>
        </div>
        <h3 style={{ marginTop: '32px', color: '#2b1130', fontFamily: 'Georgia, serif' }}>Tabela Comparativa: Credo de 325 × 381</h3>
        <p style={{ marginTop: '12px', fontSize: '0.88rem', color: '#4b5563' }}><strong>Nota crítica:</strong> O texto integral do credo de 381 só é atestado documentalmente nas atas do Concílio de Calcedônia (451), o que gerou o famoso debate crítico Hort/Harnack × Kelly/Ritter sobre sua história redacional. A versão de Epifânio (<em>Ancoratus</em> 118, 374) é a mais antiga aproximação disponível. O acréscimo do <em>Filioque</em> pertence à história litúrgica posterior (séc. VI–XI).</p>
        <div className={styles.caixaAlerta} style={{ marginTop: '24px', background: '#faf7f2', borderColor: '#c5a059' }}>
          <h3 style={{ margin: '0 0 12px 0', fontFamily: 'Georgia, serif', color: '#2b1130', fontSize: '1.05rem' }}><IconWind size={18} style={{ verticalAlign: '-3px', marginRight: '8px' }} />Por que só &ldquo;E no Espírito Santo&rdquo;?</h3>
          <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: '1.7', color: '#38302c' }}>
            Em 325, a questão dogmática urgente era exclusivamente a divindade do Filho; a pneumatologia permaneceu, portanto, em &ldquo;estado embrionário&rdquo; na forma laconicamente batismal. Foi apenas entre 359–361 que Atanásio, nas <em>Cartas a Serapião</em>, combateu os &ldquo;trópicos&rdquo; egípcios (que consideravam o Espírito uma criatura, invocando Amós 4,13 LXX e 1 Timóteo 5,21). Basílio de Cesareia produziu o clássico <em>De Spiritu Sancto</em> (375), defendendo a doxologia &ldquo;com o Espírito&rdquo;; Macedônio deu nome ao partido negador, chamado <em>pneumatômacos</em> (&ldquo;combatentes contra o Espírito&rdquo;). O Concílio de Constantinopla de 381 e o Tomus sinodal de 382 consolidaram a resposta dogmática — embora o texto de 381 tenha estrategicamente evitado aplicar diretamente <em>homoousios</em> ao Espírito, preferindo a fórmula da coadoração.
          </p>
        </div>
        <div style={{ marginTop: '24px' }}>
          <h3 style={{ color: '#2b1130', fontFamily: 'Georgia, serif' }}>Observações Adicionais sobre o Credo</h3>
          <p><strong>(a) &ldquo;Cremos&rdquo; no plural:</strong> O texto original é um credo sinodal assinado pelo colégio dos bispos, não recitado individualmente.</p>
          <p><strong>(b) &ldquo;Igreja católica e apostólica&rdquo;:</strong> Aparece pela primeira vez em texto conciliar dentro dos anátemas do Credo de 325.</p>
          <p><strong>(c) O anátema como gênero novo:</strong> Niceia inaugura o modelo credo + condenação, padrão para Calcedônia, Trento e Vaticano I.</p>
          <p><strong>(d) Genealogia dos credos:</strong> Cesareia → Niceia 325 → Antioquia 341 → Sirmium 357 → Datado 359 → Constantinopla 381 — detalhada no Dossiê 2A.</p>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════
          SEÇÃO · Os Anátemas de 325
          ═════════════════════════════════════════════════════════════ */}
      <section className={`${styles.secao} secao-anchor`} id="anatemas">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>
            <IconStop size={20} style={{ verticalAlign: '-3px', marginRight: '8px' }} />
            Os Anátemas de 325
          </h2>
        </div>

        <p className={styles.introSecao}>
          Anexadas ao final do Credo de Niceia, quatro cláusulas de condenação
          formam o &ldquo;coração cortante&rdquo; do concílio. Cada uma responde a uma
          fórmula ariana precisa — traçando as fronteiras exatas entre a fé
          apostólica e as teses de Ário.
        </p>

        {/* Cards dos 4 anátemas */}
        <div className={styles.anatemasGrid}>
          {anatemasComentario.map((anatema) => {
            const doDossie = credoDossie.anatemas?.find(
              (a: any) => a.termo === anatema.formulaGrega
            )
            return (
              <article key={anatema.ordem} className={styles.anatemaCard}>
                <header className={styles.anatemaHeader}>
                  <span className={styles.anatemaNumero}>Anátema {anatema.ordem}</span>
                  <p className={styles.anatemaGrego}>{anatema.formulaGrega}</p>
                  {doDossie?.traducao && (
                    <p className={styles.anatemaPortugues}>
                      &ldquo;{doDossie.traducao}&rdquo;
                    </p>
                  )}
                </header>

                <div className={styles.anatemaCorpo}>
                  <div className={styles.anatemaBloco}>
                    <h4 className={styles.anatemaBlocoTitulo}>Tese ariana correspondente</h4>
                    <p>{anatema.teseArianaCorrespondente}</p>
                  </div>

                  <div className={styles.anatemaBloco}>
                    <h4 className={styles.anatemaBlocoTitulo}>Comentário teológico</h4>
                    <p>{anatema.comentarioTeologico}</p>
                  </div>

                  <div className={styles.anatemaBlocoDestaque}>
                    <h4 className={styles.anatemaBlocoTitulo}>Implicação doutrinária</h4>
                    <p>{anatema.implicacaoDoutrinaria}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Notas históricas — 3 cards horizontais */}
        <div className={styles.anatemasNotasGrid}>
          <div className={styles.anatemaNota}>
            <h4 className={styles.anatemaNotaTitulo}>Origem em Antioquia (início de 325)</h4>
            <p>{anatemasNotaHistorica.origem}</p>
          </div>
          <div className={styles.anatemaNota}>
            <h4 className={styles.anatemaNotaTitulo}>Ausência em Constantinopla I (381)</h4>
            <p>{anatemasNotaHistorica.ausenciaEm381}</p>
          </div>
          <div className={styles.anatemaNota}>
            <h4 className={styles.anatemaNotaTitulo}>Transmissão textual</h4>
            <p>{anatemasNotaHistorica.transmissao}</p>
          </div>
        </div>
      </section>

      {/* BLOCO 9 · id="exegese" */}
      <section className={`${styles.secao} secao-anchor`} id="exegese">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}><IconBook size={20} style={{ verticalAlign: '-3px', marginRight: '8px' }} />A Batalha Exegética: os versículos em disputa</h2>
        </div>
        <p>Grande parte da controvérsia ariana foi travada versículo a versículo. Cada lado invocava passagens bíblicas específicas para sustentar sua posição.</p>
        <div style={{ marginTop: '24px' }}>
          <h3 style={{ color: '#2b1130', fontFamily: 'Georgia, serif' }}>A Regra Exegética de Atanásio</h3>
          <p><strong>(a) O <em>skopós</em> das Escrituras:</strong> Atanásio formulou uma regra hermenêutica decisiva — existe um &ldquo;duplo relato do Salvador nas Escrituras: sempre Deus e Filho... e depois, por nós, feito homem&rdquo;.</p>
          <p><strong>(b) &ldquo;Gerado, não criado&rdquo; e &ldquo;da substância do Pai&rdquo;:</strong> As duas expressões do Credo Niceno constituem a resposta direta aos textos-chave da argumentação ariana.</p>
          <p><strong>(c) Limite intrínseco do método:</strong> A regra atanasiana pressupõe implicitamente a doutrina das duas naturezas em Cristo — formulada dogmaticamente em Calcedônia (451).</p>
        </div>
      </section>

      {/* BLOCO 10 · id="canones" */}
      <section className={`${styles.secao} secao-anchor`} id="canones">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}><IconScales size={20} style={{ verticalAlign: '-3px', marginRight: '8px' }} />Os 20 Cânones Disciplinares</h2>
        </div>
        <p>Clique em qualquer cânone para expandir os detalhes. São a primeira legislação eclesiástica de alcance universal da história cristã.</p>
        <div className={styles.canonesGrid}>
          {canonesData.map(c => <CanonCard key={c.num} {...c} />)}
        </div>
      </section>

      {/* BLOCO 11 · id="pascoa" */}
      <section className={`${styles.secao} secao-anchor`} id="pascoa">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}><IconMoon size={20} style={{ verticalAlign: '-3px', marginRight: '8px' }} />A Questão da Páscoa</h2>
        </div>
        <h3>O consenso e os registros textuais</h3>
          <p>O concílio exigiu uniformidade universal: <em>&ldquo;todos os irmãos do Oriente celebrem com Roma, Alexandria e nós&rdquo;</em>. Constantino reforçou a determinação em tom fortemente antijudaico: <em>&ldquo;nada em comum com os judeus&rdquo;</em>.</p>
        <p><strong>O que não sobreviveu:</strong> Não há cânone pascal numérico entre os 20 cânones nicenos preservados. Estabeleceu-se uma divisão prática de funções: o Patriarcado de Alexandria calculava a data exata e informava a Sé de Roma.</p>
        <div className={styles.caixaAlerta}>
          <strong>Nota Técnica:</strong> A famosa fórmula &ldquo;primeiro domingo após a primeira lua cheia posterior ao equinócio da primavera&rdquo; não é um cânone literal de 325, mas a síntese computacional do método astronômico alexandrino.
        </div>
      </section>

      {/* BLOCO 12 · id="cismas" */}
      <section className={`${styles.secao} secao-anchor`} id="cismas">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}><IconScissors size={20} style={{ verticalAlign: '-3px', marginRight: '8px' }} />O Cisma Meleciano e Outras Heresias</h2>
        </div>
        <h3>Os <em>Katharoi</em> (&ldquo;Puros&rdquo;)</h3>
        <p>Cisma de matriz rigorista surgido em Roma no século III sob Novaciano, que recusava a reconciliação canônica aos <em>lapsi</em>. O Cânone 8 determinou que seus clérigos fossem recebidos na comunhão católica mediante imposição de mãos, sem necessidade de reordenação.</p>
        <h3>Critérios de Discernimento em Niceia</h3>
        <p>A práxis conciliar estabeleceu uma distinção teológica e canônica basilar entre <strong>heresia</strong> (desvio substantivo da fé trinitária) e <strong>cisma</strong> (ruptura disciplinar ou jurisdicional).</p>
      </section>

    </>
  )
}
