'use client'

import styles from '../niceia-1.module.css'
import { Accordion } from './Accordion'
import { TabsInternas } from './TabsInternas'
import { PartidoCard } from './PartidoCard'
import { preHistoriaHomoousiosData } from '../_data/antecedentes'

export function SecaoDoutrina() {
  return (
    <>
      {/* 1. ÁRIO */}
      <section className={`${styles.secao} secao-anchor`} id="ario">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>⛔ Ário e o Arianismo</h2>
        </div>
        <TabsInternas tabs={[
          {
            id: 'ar1', 
            label: 'Quem era Ário',
            content: (
              <>
                <p>
                  Ário nasceu por volta de 256 na Líbia e foi discípulo do presbítero e mártir Luciano de Antioquia. Serviu inicialmente como diácono sob o bispo Pedro de Alexandria, de quem foi excomungado por apoiar o movimento meleciano. Posteriormente readmitido, foi ordenado presbítero sob o bispo Aquilas por volta de 312 e encarregado da influente igreja urbana de Baucalis, em Alexandria.
                </p>
                <p>
                  Epifânio traça seu retrato físico e comportamental: um homem alto, magro, trajando túnica curta (<em>colóbion</em>), de postura grave e discurso profundamente sedutor. Gozava de imensa popularidade entre as virgens consagradas e o povo simples. Para difundir sua teologia entre a população geral, compôs a <em>Thalia</em> ("O Banquete") em metro sotadeu, além de canções populares adaptadas para marinheiros, moleiros e viajantes.
                </p>
                <p>
                  Após a condenação no Concílio de Niceia (325), foi exilado na Ilíria, retornando do exílio c. 327/328. Teve sua reabilitação aprovada no Sínodo de Jerusalém em 335 e faleceu subitamente em Constantinopla em 336.
                </p>
                <p>
                  <strong>O que sobrevive:</strong> três cartas e fragmentos da <em>Thalia</em>.
                </p>
              </>
            )
          },
          {
            id: 'ar2', 
            label: 'A Doutrina',
            content: (
              <>
                <p><strong>As Teses Teológicas de Ário:</strong></p>
                <ol style={{ paddingLeft: '20px', marginBottom: '16px', lineHeight: '1.6' }}>
                  <li><strong>Solidão do Pai:</strong> Somente o Pai é não-gerado (<em>agénnētos</em>) e sem princípio; o Filho tem um princípio derivado.</li>
                  <li><strong>Não-coeternidade:</strong> Houve um momento em que o Filho não existia ("houve quando não era") e antes de ser gerado Ele não era.</li>
                  <li><strong>Criação do Nada:</strong> O Filho foi criado do nada (<em>ex ouk óntōn</em>) pela vontade do Pai — uma "criatura perfeita, mas não como uma das criaturas".</li>
                  <li><strong>Transcendência e Incognoscibilidade:</strong> O Filho não conhece o Pai perfeitamente nem compreende sua própria essência (<em>ousía</em>).</li>
                  <li><strong>Mutabilidade Moral:</strong> É mutável por natureza (<em>treptós</em>), porém mantido imutável pela virtude de sua vontade e presciência divina.</li>
                  <li><strong>Tríade Dessemelhante:</strong> Pai, Filho e Espírito Santo constituem uma Tríade de três hipóstases totalmente dessemelhantes entre si.</li>
                  <li><strong>Modelo Logos-sarx:</strong> Em Cristo, o <em>Logos</em> criado assume um corpo humano ocupando diretamente o lugar da alma racional.</li>
                </ol>
                <p><strong>Passagens Bíblicas Invocadas pelos Arianos:</strong></p>
                <p style={{ fontStyle: 'italic', color: '#4b5563' }}>
                  Provérbios 8,22; João 14,28; João 17,3; Marcos 13,32; Colossenses 1,15; Hebreus 3,2; Atos 2,36; Filipenses 2,9.
                </p>
              </>
            )
          },
          {
            id: 'ar2b', 
            label: 'Por que era atraente',
            content: (
              <>
                <p>
                  O arianismo possuía uma força de atração considerável no século IV por diversos fatores teológicos, filosóficos e sociais:
                </p>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                  <li><strong>Monoteísmo estrito:</strong> Alinhava-se ao monoteísmo rigoroso (Deuteronômio 6,4), parecendo defender a fé contra o risco do politeísmo ou de divisões materiais da essência divina.</li>
                  <li><strong>Literalismo bíblico:</strong> Oferecia uma leitura direta e sem rodeios das passagens de limitação de Jesus nos Evangelhos.</li>
                  <li><strong>Coerência filosófica:</strong> Preservava a transcendência absoluta do Não-Gerado, garantindo a imutabilidade de Deus.</li>
                  <li><strong>Soteriologia do exemplo:</strong> Um Cristo que vence por esforço moral constituía um modelo perfeitamente imitável pelos fiéis.</li>
                  <li><strong>Apelo popular:</strong> Músicas rítmicas e poemas da <em>Thalia</em> espalhavam as doutrinas nos ambientes de trabalho e transporte.</li>
                  <li><strong>Apoio de prelados influentes:</strong> Contava com o respaldo de bispos cultos e bem posicionados na corte imperial, como Eusébio de Nicomédia, Eusébio de Cesareia, Patrófilo de Citópolis e Paulino de Tiro.</li>
                  <li><strong>Continuidade aparente:</strong> Parecia dar continuidade legítima à teologia subordinacionista de Orígenes e Dionísio de Alexandria.</li>
                </ul>
              </>
            )
          },
          {
            id: 'ar2c', 
            label: 'Cristologia Logos-sarx',
            content: (
              <>
                <p>
                  Para Ário e continuadores da tradição subordinacionista (como Eudóxio e Eunômio), Cristo não possuía uma alma humana racional: o <em>Logos</em> criado unira-se diretamente à carne (<em>sarx</em>).
                </p>
                <p>
                  Dentro desse esquema, os textos bíblicos que relatam fraqueza, dor ou ignorância humana em Jesus (como o desconhecimento do dia final em Marcos 13,32, a agonia em Lucas 22,44 e a perturbação em João 12,27) não podiam ser atribuídos a uma natureza humana separada, sendo tomados como prova direta da mutabilidade e finitude do próprio <em>Logos</em>.
                </p>
                <p>
                  Eustácio de Antioquia foi o primeiro teólogo a rebatê-los afirmando categoricamente a presença de uma alma humana racional em Cristo. Esse mesmo modelo <em>Logos-sarx</em> reapareceria mais tarde na heresia apolinarista (condenada em 381). Atanásio de Alexandria hesitou por anos sobre o tema, afirmando explicitamente a alma humana integral de Cristo apenas no <em>Tomus ad Antiochenos</em>.
                </p>
              </>
            )
          },
          {
            id: 'ar2d', 
            label: 'Ário na pesquisa moderna',
            content: (
              <>
                <p>
                  A historiografia acadêmica sobre Ário e o arianismo evoluiu drasticamente ao longo dos séculos:
                </p>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.6', fontSize: '0.92rem' }}>
                  <li><strong>Newman 1833:</strong> Viu Ário como um teólogo de matriz antioquena e judaizante, herdeiro de Paulo de Samósata.</li>
                  <li><strong>Gwatkin 1882:</strong> Interpretou o arianismo como a transformação da teologia em racionalismo helênico.</li>
                  <li><strong>Harnack:</strong> Apontou Ário como um herdeiro direto da escola de Luciano de Antioquia.</li>
                  <li><strong>Lorenz 1979:</strong> Refutou categoricamente a tese do Ário "judaizante" (<em>Arius judaizans?</em>).</li>
                  <li><strong>Gregg–Groh 1981:</strong> Propuseram que a motivação central de Ário era soteriológica, centrada no Cristo como exemplo de promoção moral.</li>
                  <li><strong>Kannengiesser:</strong> Destacou a figura de Ário prioritariamente como um exegeta bíblico.</li>
                  <li><strong>Williams 1987/2001:</strong> Redefiniu Ário como um teólogo alexandrino conservador e neoplatônico, envolvido em uma disputa local sobre autoridade e herança origenista.</li>
                  <li><strong>Hanson 1988:</strong> Demonstrou que ninguém tinha a resposta dogmática pronta em 325 e que Ário foi uma figura periférica na longa "busca pela doutrina de Deus".</li>
                  <li><strong>Vaggione 2000:</strong> Analisou a continuidade do movimento em Eunômio e nos grupos neoarianos.</li>
                  <li><strong>Ayres 2004 e Gwynn 2007:</strong> Provaram que "arianismo" foi um rótulo polêmico criado por Atanásio, devendo-se analisar trajetórias diversas (eusebiana, alexandrina, marceliana, ocidental).</li>
                  <li><strong>Anatolios 2011:</strong> Aprofundou a construção da teologia trinitária e soteriológica do século IV.</li>
                  <li><strong>Fernández 2024–25:</strong> Promoveu uma rigorosa releitura crítica das fontes contemporâneas do conflito.</li>
                </ul>
              </>
            )
          },
          {
            id: 'ar4', 
            label: 'A Resposta',
            content: <p>Atanásio argumentava a soteriologia: se Cristo não é plenamente Deus, sua morte não nos redime infinitamente e Ele não pode deificar a humanidade.</p>
          }
        ]} />
      </section>

      {/* 2. PRÉ-HISTÓRIA DO HOMOOUSIOS */}
      <section className={`${styles.secao} secao-anchor`} id="pre-homoousios">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>🧬 Pré-História do <em>Homoousios</em></h2>
        </div>
        <TabsInternas tabs={preHistoriaHomoousiosData.map(p => ({
          id: p.id,
          label: p.subtitulo,
          content: (
            <>
              <h3>{p.titulo}</h3>
              {p.conteudo.split('\n\n').map((par, i) => (
                <p key={i} style={{ marginBottom: '12px', lineHeight: '1.6' }}>{par}</p>
              ))}
            </>
          )
        }))} />
      </section>

      {/* 3. PARTIDOS TEOLÓGICOS */}
      <section className={`${styles.secao} secao-anchor`} id="partidos">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>🗂️ Correntes Teológicas do Século IV</h2>
        </div>
        <p>A crise não foi apenas "Atanásio vs. Ário". Ao longo do século IV, diversas correntes teológicas surgiram no Oriente e no Ocidente (algumas formadas apenas nas décadas após Niceia):</p>
        <div className={styles.mapaPartidos}>
          <PartidoCard tipo="homoiousiano" titulo="⚖️ Centro Eusebiano (325–350)" texto="Eusébio de Cesareia, Eusébio de Nicomédia, Astério e Acácio. Teologia origenista das 'três hipóstases'; o Filho é 'imagem exata da ousía, vontade, poder e glória do Pai'. Recusam homoousios como sabeliano/material, mas não são arianos no sentido estrito (rejeitam o 'do nada')." />
          <PartidoCard tipo="ariano" titulo="⛔ Anomeus" texto="O Filho é completamente diferente (ἀνόμοιος) do Pai. Aécio e Eunômio lideraram essa vertente radical nos anos 350." />
          <PartidoCard tipo="anomoio" titulo="↘️ Homoianos" texto="O Filho é semelhante ao Pai 'segundo as Escrituras'. Fórmula vaga politicamente útil (357–359)." />
          <PartidoCard tipo="ariano" titulo="⚠️ Marcelianos" texto="Marcelo de Ancira e Fotino de Sirmium. Uma só hipóstase; o Logos 'se expande' em Tríade na economia e 'se contrai' no fim (1 Cor 15,28). Condenados em Constantinopla 336, Antioquia 341 (4ª fórmula) e Sirmium 351. Alvo da cláusula 'cujo reino não terá fim' (381)." />
          <PartidoCard tipo="homoiousiano" titulo="🔶 Homoiousianos" texto="Substância semelhante (ὁμοιούσιος). Formaram um partido claro em 358 com Basílio de Ancira. Eram o centro oriental." />
          <PartidoCard tipo="niceno" titulo="✅ Nicenos (Homoousianos)" texto="Mesma substância (ὁμοούσιος). Venceram em Niceia e, após décadas de exílio, triunfariam definitivamente em 381." />
        </div>

        <div className={styles.caixaAlerta} style={{ marginTop: '24px', background: '#faf7f2', borderColor: '#c5a059' }}>
          <h3 style={{ margin: '0 0 12px 0', fontFamily: 'Georgia, serif', color: '#2b1130', fontSize: '1.05rem' }}>
            📝 Partidos ou trajetórias? / A questão do iota
          </h3>
          <p style={{ margin: '0 0 8px 0', fontSize: '0.92rem', lineHeight: '1.6', color: '#38302c' }}>
            <strong>(a) Uma releitura contemporânea:</strong> Autores como Lewis Ayres e David Gwynn alertam que os "partidos" são rótulos polêmicos posteriores criados na literatura de controvérsia; convém falar antes de <em>trajetórias teológicas</em> que se cruzam e se transformam ao longo das décadas.
          </p>
          <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: '1.6', color: '#38302c' }}>
            <strong>(b) <em>Homoousios</em> × <em>Homoiousios</em>:</strong> Edward Gibbon celebrizou a expressão de que a controvérsia se resumia à "diferença de um único ditongo". Mas o iota (ι) importa profundamente: semelhança admite graus e comparações, enquanto identidade é absoluta. Atanásio estende a mão aos homoiousianos afirmando que "não são inimigos, mas irmãos que discordam da palavra".
          </p>
        </div>
      </section>

      {/* 4. DEBATES E ADOÇÃO DO TERMO */}
      <section className={`${styles.secao} secao-anchor`} id="debates">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>🗣️ Debates e Adoção do Termo</h2>
        </div>

        <Accordion id="deb-presid" titulo={<><strong>Quem presidiu o concílio?</strong></>}>
          <p>A questão da presidência efetiva do concílio é um dos temas mais debatidos pela crítica histórica, com quatro candidatos apoiados por fontes antigas:</p>
          <ul style={{ paddingLeft: '20px', lineHeight: '1.7', marginBottom: '12px' }}>
            <li><strong>Ósio de Córdova:</strong> Assina em primeiro lugar todas as listas subscritas. Atanásio exclama retoricamente: "de que sínodo não foi ele o chefe?".</li>
            <li><strong>Eustácio de Antioquia:</strong> Segundo Teodoreto, foi o primeiro a falar, saudando solenemente o imperador. João de Antioquia e Fácundo de Hermíane referem-se a ele como presidente.</li>
            <li><strong>Eusébio de Cesareia:</strong> Na <em>Vita Constantini</em>, "o primeiro da fila da direita" faz o discurso de abertura — provável autorreferência.</li>
            <li><strong>Alexandre de Alexandria:</strong> A <em>Historia Ecclesiastica</em> anônima o coloca ao lado de Ósio.</li>
          </ul>
          <p>A tese católica tradicional sustentava que Ósio presidiu como legado do Papa Silvestre, juntamente com os presbíteros Vítor e Vincêncio. Constantino, por sua vez, foi "presidente" apenas no aspecto protocolar, autodesignando-se "coservo" dos bispos.</p>
          <p><strong>Posição da página:</strong> presidência efetiva de Ósio, papel de honra litúrgico de Eustácio e discurso inaugural de Eusébio.</p>
        </Accordion>

        <Accordion id="deb-rasgada" titulo={<><strong>A carta eusebiana rasgada</strong></>}>
          <p>O primeiro texto lido no plenário conciliar foi a profissão de fé apresentada por Eusébio de Nicomédia, que foi imediatamente rejeitada e literalmente rasgada em público.</p>
          <p>Consequência decisiva: os eusebianos passam à defensiva teológica, e é precisamente da linguagem dessa carta rejeitada que os padres extraíram o critério distintivo do <em>homoousios</em>.</p>
        </Accordion>

        <Accordion id="deb-credo-cesareia" titulo={<><strong>O Credo de Cesareia</strong></>}>
          <p>Eusébio de Cesareia apresentou seu credo batismal. Até meados do séc. XX, estudiosos como Hort e Harnack achavam que este texto foi o rascunho de Niceia. Hoje, graças a J.N.D. Kelly, sabe-se que a base do Credo de Niceia foi, na verdade, um credo batismal siro-palestino (provavelmente de Jerusalém), e que Eusébio apresentou o seu apenas para se livrar da excomunhão sofrida em Antioquia.</p>
        </Accordion>

        <Accordion id="deb-origem" titulo={<><strong>De onde veio a palavra? Quatro versões antigas</strong></>}>
          <p>As fontes antigas divergem consideravelmente sobre a origem exata da adoção do termo <em>homoousios</em> em Niceia:</p>
          <ol style={{ paddingLeft: '20px', lineHeight: '1.7' }}>
            <li><strong>Ambrósio:</strong> Nasceu da própria carta de Eusébio de Nicomédia — "se dissermos que é Deus verdadeiro e incriado, começaremos a dizer <em>homoousios</em>". Ironicamente, os padres adotaram a palavra que o próprio adversário rejeitava.</li>
            <li><strong>Eusébio de Cesareia:</strong> Foi o próprio "sapientíssimo e piíssimo imperador" quem propôs a palavra e a glosou pessoalmente ("não segundo afecções corporais, nem por divisão ou corte").</li>
            <li><strong>Filostórgio:</strong> Alexandre de Alexandria e Ósio de Córdova teriam combinado o termo antecipadamente em Nicomédia, antes mesmo do concílio começar.</li>
            <li><strong>Atanásio:</strong> Os padres queriam usar apenas expressões bíblicas ("Luz", "Poder", "Imagem"), mas os eusebianos "piscavam e cochichavam" reinterpretando cada uma delas — obrigando os nicenos a apelar às expressões precisas "da <em>ousía</em>" e <em>homoousios</em>.</li>
          </ol>
          <p><strong>Síntese moderna:</strong> proposta ocidental (Ósio, com Alexandre), aval imperial de Constantino, e fonte remota latina (a fórmula <em>una substantia</em> de Tertuliano).</p>
        </Accordion>

        <Accordion id="deb-constantino" titulo={<><strong>O papel de Constantino e a glosa imperial</strong></>}>
          <p>Segundo Eusébio, Constantino contribuiu ativamente propondo a glosa autêntica do <em>homoousios</em> e permitindo posteriormente a Eusébio assinar o texto conciliar "pela paz".</p>
          <p>A leitura crítica moderna de Barnes e Ayres sublinha que Constantino avalizou uma fórmula elaborada por outros (bispos e teólogos), não sendo ele próprio um teólogo. Sua carta aos alexandrinos é bastante reveladora: "eu também, como um de vós" e "o juízo de trezentos bispos é a sentença de Deus".</p>
          <p>Uma inovação fundamental deste episódio foi o uso do exílio como sanção civil por heresia — pela primeira vez na história, uma pena estatal foi aplicada por divergência doutrinária.</p>
        </Accordion>

        <Accordion id="deb-desfecho" titulo={<><strong>O desfecho: quem assinou o quê</strong></>}>
          <p>Havia cerca de dezessete resistentes iniciais ao texto conciliar, número que se reduziu progressivamente a apenas dois irredutíveis: Secundo de Ptolemaida e Teona de Marmárica.</p>
          <p>Eusébio de Nicomédia e Teógnis de Niceia assinaram o Credo mas recusaram-se a subscrever os anátemas. Eusébio de Cesareia assinou acompanhando o texto de uma carta pública de justificação.</p>
          <p>Como sanção imediata, Ário, Secundo e Teona foram exilados na Ilíria, e os escritos de Ário foram publicamente queimados por decreto imperial. Eusébio de Nicomédia e Teógnis seriam exilados em dezembro de 325 por recusa de subscrição plena.</p>
        </Accordion>

        <Accordion id="deb-atanasio" titulo={<><strong>Atanásio falou em Niceia?</strong></>}>
          <p>Gregório Nazianzeno declara que Atanásio, ainda diácono, foi "primeiro entre os reunidos". Sócrates e Sozômeno afirmam que ele "contendeu vigorosamente" nos debates, e Rufino o confirma.</p>
          <p>Curiosamente, o próprio Atanásio nunca reivindica ter tido protagonismo pessoal: fala apenas como testemunha nos escritos <em>De decretis</em> e <em>Ad Afros</em>. Eusébio de Cesareia silencia inteiramente sobre ele.</p>
          <p><strong>Avaliação crítica:</strong> presença certa em Niceia, protagonismo provável mas historicamente indemonstrável.</p>
        </Accordion>
      </section>

      {/* 5. FILOSOFIA TRINITÁRIA */}
      <section className={`${styles.secao} secao-anchor`} id="filosofia">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>🔬 Filosofia Trinitária: <em>Ousía</em> e <em>Hypóstasis</em></h2>
        </div>

        <TabsInternas tabs={[
          {
            id: 'fil-ousia',
            label: 'Ousía',
            content: (
              <>
                <p>
                  O termo <em>ousía</em> (οὐσία) tem raízes filosóficas ricas e diversificadas. Aristóteles distinguia "substância primeira" (este indivíduo concreto) da "segunda" (a espécie ou gênero comum); na <em>Metafísica</em> Z, define <em>ousía</em> como "aquilo que é". Os estoicos utilizavam a palavra para designar o substrato material — o que gerou a suspeita persistente de que <em>homoousios</em> significasse "feito da mesma matéria física" (interpretação combatida pela glosa de Constantino).
                </p>
                <p>
                  Já na tradição platônica, <em>ousía</em> apontava para a realidade inteligível imutável. Nas Escrituras, o uso é bastante raro (aparece em Lc 15,12–13 com sentido puramente material: "bens" ou "propriedade"). Entre os cristãos, Orígenes foi pioneiro na apropriação técnica; no Ocidente, Tertuliano cunhou a expressão latina paralela <em>substantia</em>.
                </p>
                <p>
                  A pergunta que Niceia deixou em aberto e que só seria resolvida décadas depois pelos Capadócios: a <em>ousía</em> comum ao Pai e ao Filho deve ser entendida como genérica (comum, como a "humanidade" partilhada por vários homens) ou como única e numericamente idêntica?
                </p>
              </>
            )
          },
          {
            id: 'fil-hypostasis',
            label: 'Hypóstasis',
            content: (
              <>
                <p>
                  A etimologia da palavra <em>hypóstasis</em> vem do verbo <em>hyphístēmi</em> (colocar-se por baixo, sustentar) — literalmente "aquilo que está por baixo", o sedimento, o fundamento subsistente. Na filosofia estoica e na medicina antiga, denotava a existência concreta e individualizada. Aparece na Bíblia em Hebreus 1,3 (o Filho é "expressão da sua <em>hypóstasis</em>") e em Sabedoria 16,21.
                </p>
                <p>
                  Orígenes falava tecnicamente de "três hipóstases", inaugurando a linguagem que o Oriente tomaria como tradicional. No plano puramente filosófico, Plotino oferecia um vocabulário paralelo neoplatônico.
                </p>
                <p>
                  Por essa razão, o anátema do Credo Niceno ("quem afirmar que o Filho é de outra <em>hypóstasis</em> ou <em>ousía</em>") tratou as duas palavras como sinônimas — o que gerou décadas de confusão. Isso fez com que o Ocidente e Alexandria (que sustentavam "uma única hipóstase") e o Oriente (que falava de "três hipóstases") desconfiassem mutuamente até o Sínodo de Alexandria em 362.
                </p>
              </>
            )
          },
          {
            id: 'fil-agennetos',
            label: 'Agénnētos × Agénētos',
            content: (
              <>
                <p>
                  Existe outra letra decisiva na controvérsia trinitária, além do iota do <em>homoiousios</em>: a diferença entre <em>agénnētos</em> (não gerado, do verbo <em>gennáō</em> — gerar) e <em>agénētos</em> (não vindo a ser, incriado, do verbo <em>gígnomai</em> — vir a ser). Grafias quase idênticas, frequentemente confundidas nos manuscritos antigos.
                </p>
                <p>
                  Ário e Eusébio de Cesareia partiam do axioma "somente o Pai é <em>agénnētos</em>" para concluir que o Filho, sendo <em>gennētós</em> (gerado), seria também <em>genētós</em> (criatura). Atanásio refutou essa deriva mostrando que <em>agénētos</em> é termo filosófico, não bíblico e ambíguo, argumentando que o Filho é <em>gennētós</em> (gerado) sem por isso ser <em>genētós</em> (feito, criado).
                </p>
                <p>
                  Os Capadócios formalizaram definitivamente esta distinção. Eunômio, na direção oposta radical, fez de <em>agénnētos</em> o próprio nome definidor da <em>ousía</em> divina — origem do partido dos anomeus.
                </p>
              </>
            )
          },
          {
            id: 'fil-generico',
            label: 'Genérico ou numérico? (Stead)',
            content: (
              <>
                <p>
                  Existem três leituras historicamente possíveis do <em>homoousios</em> tal como formulado em 325:
                </p>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.7' }}>
                  <li><strong>(a) Genérica:</strong> Pai e Filho seriam da mesma "espécie" divina, assim como dois homens são <em>homoousioi</em> por partilharem a humanidade. Leitura preferida por Eusébio e por muitos orientais.</li>
                  <li><strong>(b) Numérica:</strong> Existe uma só substância divina numericamente idêntica. Leitura tipicamente latina (<em>una substantia</em>) e defendida por Atanásio a partir de c. 350.</li>
                  <li><strong>(c) Material/derivativa:</strong> O Filho como "porção" material desprendida do Pai. Excluída expressamente pela glosa de Constantino e pelos anátemas do Credo.</li>
                </ul>
                <p>
                  Christopher Stead, em <em>Divine Substance</em>, e R.P.C. Hanson demonstraram que, em 325, o termo era deliberadamente aberto — sua "densificação" no sentido numérico é obra dos anos 350–360. Justamente por isso o texto de 381 pôde mantê-lo intacto depois da fórmula esclarecedora "<em>mia ousía, treis hypostáseis</em>".
                </p>
              </>
            )
          },
          {
            id: 'fil-platonismo',
            label: 'Platonismo médio e neoplatonismo',
            content: (
              <>
                <p>
                  O pano de fundo filosófico da controvérsia deve muito ao platonismo médio e ao neoplatonismo. Fílon de Alexandria falava em um <em>deúteros theós</em> (segundo Deus) e no Logos. Numênio de Apameia, no séc. II, articulou uma teologia de "segundo deus" — noção de subordinação hierárquica herdada por Orígenes.
                </p>
                <p>
                  Plotino ofereceu o modelo da processão do Nous a partir do Uno sem qualquer diminuição — imagem que serve tanto para pensar a fórmula "Luz da Luz" quanto (na leitura oposta) para justificar o subordinacionismo. Porfírio, autor do <em>Contra os cristãos</em>, era objeto de tal repulsa cristã que Constantino chegou a chamar os arianos de "porfirianos". Jâmblico e sua lógica também deixaram marcas na argumentação de Ário.
                </p>
                <p>
                  <strong>Conclusão:</strong> Niceia utilizou o vocabulário técnico da filosofia grega para negar sua própria estrutura hierárquica — afirmando que o Filho não é "segundo".
                </p>
              </>
            )
          },
          {
            id: 'fil-lexico',
            label: 'Léxico rápido',
            content: (
              <>
                <p>Vocabulário técnico essencial para navegar os debates trinitários do século IV:</p>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.7', fontSize: '0.92rem' }}>
                  <li><strong><em>Ktísma</em>:</strong> criatura.</li>
                  <li><strong><em>Poíēma</em>:</strong> coisa feita, produto.</li>
                  <li><strong><em>Génnēma</em>:</strong> rebento, gerado.</li>
                  <li><strong><em>Agénnētos / Agénētos</em>:</strong> não gerado / não vindo a ser (distinção capital: cf. aba anterior).</li>
                  <li><strong><em>Monogenḗs</em>:</strong> unigênito; em Jo 1,18 existe a variante textual <em>monogenḗs theós</em> (nos manuscritos P66, P75, א, B) contra <em>monogenḗs huiós</em> na tradição majoritária.</li>
                  <li><strong><em>Prōtótokos</em>:</strong> primogênito (Cl 1,15).</li>
                  <li><strong><em>Prósōpon</em>:</strong> rosto, máscara, pessoa — suspeito de sabelianismo se usado sozinho.</li>
                  <li><strong><em>Phýsis</em>:</strong> natureza.</li>
                  <li><strong><em>Hómoios / Homoioúsios / Homooúsios / Anómoios</em>:</strong> semelhante / de substância semelhante / consubstancial / dessemelhante.</li>
                  <li><strong><em>Ek tēs ousías</em>:</strong> "da substância" (do Pai).</li>
                  <li><strong><em>Theotókos</em>:</strong> Mãe de Deus, "aquela que dá à luz Deus" — já em Alexandre de Alexandria, quase um século antes do Concílio de Éfeso.</li>
                </ul>
              </>
            )
          }
        ]} />
      </section>

      {/* 6. CREDO DE NICEIA */}
      <section className={`${styles.secao} secao-anchor`} id="credo">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>✝️ O Credo de Niceia</h2>
        </div>

        <div className={styles.caixaDestaque}>
          <p style={{ fontStyle: 'italic', lineHeight: '1.8', textAlign: 'justify' }}>
            "Cremos em um só Deus, Pai todo-poderoso, criador de todas as coisas visíveis e invisíveis. E em um só Senhor Jesus Cristo, Filho de Deus, gerado do Pai como Unigênito, isto é, da substância (<em>ousía</em>) do Pai, Deus de Deus, Luz da Luz, Deus verdadeiro de Deus verdadeiro, <strong>gerado, não criado, consubstancial ao Pai</strong> (<em>homoousios tō Patri</em>), por quem todas as coisas foram feitas, tanto as do céu como as da terra; que por causa de nós, homens, e por causa da nossa salvação, desceu, se encarnou e se fez homem; sofreu e ressuscitou ao terceiro dia; subiu aos céus e virá para julgar os vivos e os mortos. E no Espírito Santo. Aos que dizem: 'Houve um tempo em que Ele não era', ou 'Antes de ser gerado, não era', ou ainda 'Foi feito do nada', ou os que afirmam que é de outra hipóstase ou <em>ousía</em>, ou que o Filho de Deus é criatura, mutável ou modificável — a estes anatematiza a Igreja católica e apostólica."
          </p>
          <p style={{ marginTop: '12px', fontSize: '0.85rem', color: '#5b3d24' }}>
            <em>Grego, latim, notas filológicas e anátemas comentados: Dossiê 2A.</em>
          </p>
        </div>

        {/* TABELA 325 x 381 */}
        <h3 style={{ marginTop: '32px', color: '#2b1130', fontFamily: 'Georgia, serif' }}>
          Tabela Comparativa: Credo de 325 × 381
        </h3>
        <div style={{ overflowX: 'auto', marginTop: '12px' }}>
          <table className={styles.tabelaFiguras}>
            <thead>
              <tr>
                <th style={{ width: '32%' }}>Credo Niceno (325)</th>
                <th style={{ width: '36%' }}>Credo Constantinopolitano (381)</th>
                <th style={{ width: '32%' }}>Motivo da Mudança</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>"criador de todas as coisas visíveis e invisíveis"</td>
                <td>"criador do céu e da terra, de todas as coisas visíveis e invisíveis"</td>
                <td>Assimilação da fonte batismal de Jerusalém/Constantinopla.</td>
              </tr>
              <tr>
                <td>"gerado do Pai como Unigênito, isto é, da substância do Pai"</td>
                <td>"nascido do Pai antes de todos os séculos"</td>
                <td>"da substância do Pai" é retirado — julgado redundante em face de <em>homoousios</em>.</td>
              </tr>
              <tr>
                <td>"Deus de Deus, Luz da Luz"</td>
                <td>"Luz da Luz" (grego) / "Deum de Deo, Lumen de Lumine" (latim)</td>
                <td>O grego omite "Deus de Deus"; o latim conserva <em>Deum de Deo</em>.</td>
              </tr>
              <tr>
                <td>"por quem todas as coisas foram feitas, tanto as do céu como as da terra"</td>
                <td>"por quem todas as coisas foram feitas"</td>
                <td>Simplificação estilística e supressão do desdobramento.</td>
              </tr>
              <tr>
                <td>"desceu, se encarnou e se fez homem"</td>
                <td>"desceu dos céus e se encarnou pelo Espírito Santo, no seio da Virgem Maria, e se fez homem"</td>
                <td>Precisão antidocética; Maria entra formalmente no Credo.</td>
              </tr>
              <tr>
                <td>"sofreu e ressuscitou ao terceiro dia"</td>
                <td>"foi crucificado por nós sob Pôncio Pilatos; padeceu e foi sepultado; ressuscitou ao terceiro dia, conforme as Escrituras"</td>
                <td>Referência histórica a Pilatos e fidelidade a 1 Cor 15,3–4.</td>
              </tr>
              <tr>
                <td>"subiu aos céus"</td>
                <td>"subiu aos céus, está sentado à direita do Pai"</td>
                <td>Complemento da narrativa da glorificação.</td>
              </tr>
              <tr>
                <td>"virá para julgar os vivos e os mortos"</td>
                <td>"de novo há de vir, em sua glória, para julgar os vivos e os mortos; e o seu reino não terá fim"</td>
                <td>A cláusula "não terá fim" é antimarceliana (cf. Lc 1,33).</td>
              </tr>
              <tr>
                <td>"E no Espírito Santo."</td>
                <td>"E no Espírito Santo, Senhor que dá a vida, e procede do Pai; e com o Pai e o Filho é adorado e glorificado: ele que falou pelos profetas"</td>
                <td>Contra os pneumatômacos; estratégia de Basílio: dizer "coadorado" sem usar <em>homoousios</em>.</td>
              </tr>
              <tr>
                <td>(ausente)</td>
                <td>"E na Igreja, una, santa, católica e apostólica. Professo um só batismo para remissão dos pecados. E espero a ressurreição dos mortos e a vida do mundo que há de vir."</td>
                <td>Acréscimos eclesiológicos e escatológicos.</td>
              </tr>
              <tr>
                <td>Anátemas contra teses arianas</td>
                <td>Suprimidos</td>
                <td>O texto passa de definição sinodal a símbolo batismal-litúrgico.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: '12px', fontSize: '0.88rem', color: '#4b5563' }}>
          <strong>Nota crítica:</strong> O texto integral do credo de 381 só é atestado documentalmente nas atas do Concílio de Calcedônia (451), o que gerou o famoso debate crítico Hort/Harnack × Kelly/Ritter sobre sua história redacional. A versão de Epifânio é a mais antiga aproximação disponível. O acréscimo do <em>Filioque</em> pertence à história litúrgica posterior (séc. VI–XI).
        </p>

        {/* BOX ESPÍRITO SANTO */}
        <div className={styles.caixaAlerta} style={{ marginTop: '24px', background: '#faf7f2', borderColor: '#c5a059' }}>
          <h3 style={{ margin: '0 0 12px 0', fontFamily: 'Georgia, serif', color: '#2b1130', fontSize: '1.05rem' }}>
            💨 Por que só "E no Espírito Santo"?
          </h3>
          <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: '1.7', color: '#38302c' }}>
            Em 325, a questão dogmática urgente era exclusivamente a divindade do Filho; a pneumatologia permaneceu, portanto, em "estado embrionário" na forma laconicamente batismal. Foi apenas entre 359–361 que Atanásio, nas <em>Cartas a Serapião</em>, combateu os "trópicos" egípcios (que consideravam o Espírito uma criatura, invocando Amós 4,13 LXX e 1 Timóteo 5,21). Basílio de Cesareia produziu o clássico <em>De Spiritu Sancto</em> (375), defendendo a doxologia "com o Espírito"; Macedônio deu nome ao partido negador, chamado <em>pneumatômacos</em> ("combatentes contra o Espírito"). O Concílio de Constantinopla de 381 e o Tomus sinodal de 382 consolidaram a resposta dogmática — embora o texto de 381 tenha estrategicamente evitado aplicar diretamente <em>homoousios</em> ao Espírito, preferindo a fórmula da coadoração.
          </p>
        </div>

        {/* PARÁGRAFOS COMPLEMENTARES */}
        <div style={{ marginTop: '24px' }}>
          <h3 style={{ color: '#2b1130', fontFamily: 'Georgia, serif' }}>Observações Adicionais sobre o Credo</h3>
          <p><strong>(a) "Cremos" no plural:</strong> O texto original é um credo sinodal assinado pelo colégio dos bispos, não recitado individualmente pelos fiéis (Kelly). A forma "Creio" (singular) é uma adaptação litúrgica posterior, própria da recepção batismal do símbolo.</p>
          <p><strong>(b) "Igreja católica e apostólica":</strong> Aparece pela primeira vez em texto conciliar dentro dos anátemas do Credo de 325 — a primeira conjunção formal das duas notas em documento oficial de concílio.</p>
          <p><strong>(c) O anátema como gênero novo:</strong> Símbolos anteriores da fé eram exclusivamente positivos. Niceia inaugura o modelo credo + condenação, que se tornaria padrão para Calcedônia, Trento e Vaticano I.</p>
          <p><strong>(d) Genealogia dos credos:</strong> A cadeia histórica Cesareia → Niceia 325 → Antioquia 341 → Sirmium 357 → Datado 359 → Constantinopla 381 é reconstruída detalhadamente em tabela específica no Dossiê 2A.</p>
        </div>
      </section>

      {/* 7. BATALHA EXEGÉTICA */}
      <section className={`${styles.secao} secao-anchor`} id="batalha-exegetica">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>📖 A Batalha Exegética: os versículos em disputa</h2>
        </div>
        <p>
          Grande parte da controvérsia ariana foi travada versículo a versículo. Cada lado invocava passagens bíblicas específicas para sustentar sua posição teológica. Abaixo, a compilação sistemática dos textos disputados, com a leitura ariana (A), a leitura nicena (N) e as principais fontes onde a controvérsia foi respondida:
        </p>

        <div style={{ overflowX: 'auto', marginTop: '16px' }}>
          <table className={styles.tabelaFiguras}>
            <thead>
              <tr>
                <th>Versículo</th>
                <th>Leitura Ariana (A)</th>
                <th>Leitura Nicena (N)</th>
                <th>Onde se responde</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Pr 8,22 LXX</strong><br /><em>"O Senhor me criou (éktisen) princípio dos seus caminhos"</em></td>
                <td>A Sabedoria = Filho criado.</td>
                <td>Refere-se à humanidade/encarnação ("me criou para as obras"); o hebraico <em>qānānî</em> = "possuiu / adquiriu" (Áquila: <em>ektḗsato</em>; Jerônimo: <em>possedit</em>).</td>
                <td>Atanásio, <em>C. Ar.</em> II.18–82; Eustácio; Marcelo; Basílio; Gregório de Nissa.</td>
              </tr>
              <tr>
                <td><strong>Jo 14,28</strong> — "O Pai é maior do que eu"</td>
                <td>Inferioridade de natureza.</td>
                <td>Segundo a humanidade assumida; ou enquanto o Pai é origem/princípio.</td>
                <td>Atanásio, <em>C. Ar.</em> I.58; Gregório Nazianzeno, <em>Or.</em> 30.7.</td>
              </tr>
              <tr>
                <td><strong>Jo 17,3</strong> — "o único Deus verdadeiro"</td>
                <td>Só o Pai é "verdadeiro Deus".</td>
                <td>"Verdadeiro" opõe-se aos ídolos; 1 Jo 5,20 chama o Filho "Deus verdadeiro".</td>
                <td>O próprio Credo responde: "Deus verdadeiro de Deus verdadeiro".</td>
              </tr>
              <tr>
                <td><strong>Jo 20,17</strong> — "meu Deus e vosso Deus"</td>
                <td>Subordinação do Filho.</td>
                <td>Economia da encarnação; falado enquanto homem.</td>
                <td>Atanásio; tradição nicena.</td>
              </tr>
              <tr>
                <td><strong>Cl 1,15</strong> — "primogênito de toda a criação"</td>
                <td>Primeira criatura.</td>
                <td><em>Prōtótokos</em> ≠ <em>prōtóktistos</em>; "primogênito" em relação à criação como seu princípio.</td>
                <td>Atanásio, <em>C. Ar.</em> II.62–64.</td>
              </tr>
              <tr>
                <td><strong>Hb 1,3</strong> — "expressão da sua hypóstasis"</td>
                <td>Imagem distinta e inferior.</td>
                <td>Imagem da substância → mesma natureza.</td>
                <td>Alexandre; tradição nicena.</td>
              </tr>
              <tr>
                <td><strong>Hb 3,2</strong> — "fiel àquele que o fez (poiḗsanti)"</td>
                <td>"Fez" = criou.</td>
                <td>Constituiu apóstolo e sumo sacerdote (ato ministerial).</td>
                <td>Atanásio, <em>C. Ar.</em> II.1–11.</td>
              </tr>
              <tr>
                <td><strong>At 2,36</strong> — "Deus o fez Senhor e Cristo"</td>
                <td>Promoção do Filho a Senhor.</td>
                <td>Segundo a carne, na ressurreição.</td>
                <td>Atanásio, <em>C. Ar.</em> II.11–18.</td>
              </tr>
              <tr>
                <td><strong>Fl 2,9</strong> — "Deus o exaltou"</td>
                <td>Promoção por mérito.</td>
                <td>Exaltação da humanidade assumida.</td>
                <td>Atanásio, <em>C. Ar.</em> I.37–45.</td>
              </tr>
              <tr>
                <td><strong>Mc 13,32</strong> — "nem o Filho sabe"</td>
                <td>Ignorância = criatura.</td>
                <td>Como homem, segundo sua humanidade.</td>
                <td>Atanásio, <em>C. Ar.</em> III.42–50.</td>
              </tr>
              <tr>
                <td><strong>Jo 10,30</strong> — "Eu e o Pai somos um"</td>
                <td>Unidade apenas de vontade.</td>
                <td>Unidade de natureza (<em>ousía</em>).</td>
                <td>Atanásio, <em>C. Ar.</em> III.1–6.</td>
              </tr>
              <tr>
                <td><strong>Jo 1,1–3</strong></td>
                <td>Logos criado no princípio.</td>
                <td>"Tudo foi feito por Ele" → Ele não é uma das coisas feitas.</td>
                <td>Alexandre; tradição nicena.</td>
              </tr>
              <tr>
                <td><strong>Jo 1,18</strong></td>
                <td>Variante textual <em>huiós</em>.</td>
                <td>Variante <em>monogenḗs theós</em> (Deus unigênito) atestada em P66, P75, א, B.</td>
                <td>Crítica textual moderna.</td>
              </tr>
              <tr>
                <td><strong>Sl 2,7</strong> — "hoje te gerei"</td>
                <td>Geração no tempo.</td>
                <td>"Hoje" eterno, ato intemporal do Pai.</td>
                <td>Tradição patrística.</td>
              </tr>
              <tr>
                <td><strong>Sl 109(110),3 LXX</strong> — "antes da estrela da manhã te gerei"</td>
                <td>Não usado a favor.</td>
                <td>Geração eterna.</td>
                <td>Alexandre.</td>
              </tr>
              <tr>
                <td><strong>Is 53,8</strong> — "quem narrará a sua geração?"</td>
                <td>Inefabilidade (também usado por A).</td>
                <td>Inefabilidade da geração eterna.</td>
                <td>Usado por ambos os lados.</td>
              </tr>
              <tr>
                <td><strong>Sb 7,25–26</strong> — "efluência… imagem da sua bondade"</td>
                <td>Não usado.</td>
                <td>O Filho como emanação eterna e imagem consubstancial.</td>
                <td>Alexandre.</td>
              </tr>
              <tr>
                <td><strong>1 Cor 1,24</strong> — "Cristo, poder e sabedoria de Deus"</td>
                <td>Não usado.</td>
                <td>Deus nunca esteve sem sua Sabedoria → o Filho é coeterno.</td>
                <td>Alexandre.</td>
              </tr>
              <tr>
                <td><strong>Am 4,13 LXX</strong> — "que cria o espírito"</td>
                <td>Usado posteriormente contra a divindade do Espírito Santo.</td>
                <td>Refere-se ao vento, não ao Espírito Santo (Atanásio).</td>
                <td>Atanásio, Cartas a Serapião.</td>
              </tr>
              <tr>
                <td><strong>Dt 6,4 / Mt 28,19</strong></td>
                <td>Dt 6,4: monoteísmo estrito (base ariana).</td>
                <td>Mt 28,19: fórmula batismal trinitária.</td>
                <td>Os dois polos da controvérsia.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* PARÁGRAFOS DE MÉTODO */}
        <div style={{ marginTop: '24px' }}>
          <h3 style={{ color: '#2b1130', fontFamily: 'Georgia, serif' }}>A Regra Exegética de Atanásio</h3>
          <p>
            <strong>(a) O <em>skopós</em> das Escrituras:</strong> Atanásio formulou uma regra hermenêutica decisiva em <em>Contra Arianos</em> — existe um "duplo relato do Salvador nas Escrituras: sempre Deus e Filho... e depois, por nós, feito homem". Cada texto bíblico controverso deve ser lido perguntando-se "de qual natureza (divina ou humana) o texto está falando?". Alexandre já praticava intuitivamente essa regra, e Gregório Nazianzeno a formulou tecnicamente: "atribui o mais alto à divindade, o mais baixo ao composto".
          </p>
          <p>
            <strong>(b) "Gerado, não criado" e "da substância do Pai":</strong> Estas duas expressões do Credo Niceno constituem a resposta direta e explícita aos textos-chave da argumentação ariana, especialmente Provérbios 8,22 e Hebreus 3,2.
          </p>
          <p>
            <strong>(c) Limite intrínseco do método:</strong> A regra atanasiana pressupõe implicitamente a doutrina das duas naturezas em Cristo — precisamente o que o Concílio de Calcedônia (451) viria a formular dogmaticamente, um século depois de Niceia.
          </p>
        </div>
      </section>

      {/* 8. CAPADÓCIOS */}
      <section className={`${styles.secao} secao-anchor`} id="capadocios">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>🏔️ A Solução dos Grandes Capadócios</h2>
        </div>
        <p>
          A confusão terminológica sobre <em>ousía</em> e <em>hypóstasis</em> só foi resolvida nos anos 370 pelos três grandes Padres Capadócios: Basílio Magno, Gregório de Nissa e Gregório Nazianzeno. Eles forjaram a fórmula dogmática definitiva: <strong>Mia Ousía, Treis Hypostáseis</strong> (uma essência, três hipóstases/pessoas). Eles não "copiaram" Niceia — deram à Niceia a precisão filosófica que faltava para unificar a Igreja em 381.
        </p>

        {/* PERFIS DOS CAPADÓCIOS */}
        <div className={styles.recepcaoGrid}>
          <div className={styles.caixaDestaque}>
            <h4 style={{ margin: '0 0 8px 0', color: '#2b1130', fontFamily: 'Georgia, serif' }}>
              Basílio de Cesareia (c. 330–379)
            </h4>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>
              Autor do <em>Contra Eunômio</em> (364) e do decisivo <em>De Spiritu Sancto</em> (375). Na <em>Epistula</em> 125 (376), exigiu o Credo de 325 acrescido do anátema explícito aos pneumatômacos. Suas cartas 214.4 e 236.6 fixam a distinção capital: <em>ousía</em> = o comum, <em>hypóstasis</em> = o próprio individuante.
            </p>
          </div>
          <div className={styles.caixaDestaque}>
            <h4 style={{ margin: '0 0 8px 0', color: '#2b1130', fontFamily: 'Georgia, serif' }}>
              Gregório Nazianzeno (c. 329–390)
            </h4>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>
              Autor das cinco <em>Orações Teológicas</em>. Presidiu por algum tempo o Concílio de Constantinopla em 381 antes de renunciar em meio a conflitos. Sua <em>Oração</em> 21 é um elogio memorável a Atanásio.
            </p>
          </div>
          <div className={styles.caixaDestaque}>
            <h4 style={{ margin: '0 0 8px 0', color: '#2b1130', fontFamily: 'Georgia, serif' }}>
              Gregório de Nissa (c. 335–395)
            </h4>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>
              Autor do influente tratado <em>Ad Ablabium</em> ("Que não há três deuses") e do vasto <em>Contra Eunômio</em>. Esteve presente e ativo no Concílio de Constantinopla (381) e no sínodo do ano seguinte (382).
            </p>
          </div>
        </div>

        {/* PONTE ALEXANDRIA 362 */}
        <div style={{ marginTop: '24px' }}>
          <h3 style={{ color: '#2b1130', fontFamily: 'Georgia, serif' }}>A Ponte Teológica: Alexandria 362</h3>
          <p>
            O <em>Tomus ad Antiochenos</em> (362) representou um marco decisivo de reconciliação: Atanásio reuniu os bispos que voltavam do exílio sob Juliano e aceitou como ortodoxas tanto a fórmula "uma hipóstase" (= uma <em>ousía</em>) quanto "três hipóstases" (= três subsistentes), desde que se afirmasse claramente o <em>homoousios</em> e se rejeitassem simultaneamente Sabélio e Ário. A reconciliação com os homoiousianos já vinha sendo preparada por Atanásio em <em>De synodis</em>. Contudo, o duradouro cisma antioqueno (dividindo Melécio × Paulino) impediu a plena unidade até 415. Basílio firmou a base indispensável tomando Niceia como fundamento, e o Concílio de Constantinopla (381) consagrou definitivamente a síntese teológica.
          </p>
        </div>

        {/* NOTAS HISTORIOGRÁFICAS */}
        <div className={styles.caixaAlerta} style={{ marginTop: '24px', background: '#fdfcf7', borderColor: '#c5a059' }}>
          <h3 style={{ margin: '0 0 12px 0', fontFamily: 'Georgia, serif', color: '#2b1130', fontSize: '1.05rem' }}>
            📚 Notas Historiográficas Críticas
          </h3>
          <p style={{ margin: '0 0 8px 0', fontSize: '0.92rem', lineHeight: '1.6', color: '#38302c' }}>
            <strong>(a) Releitura criativa:</strong> Historiadores modernos como Lewis Ayres e Michel R. Barnes sustentam que os Capadócios não "explicam" simplesmente Niceia — eles a <em>releem</em> criativamente. O texto de 325 não distinguia rigorosamente entre <em>ousía</em> e <em>hypóstasis</em>; a distinção terminológica é obra específica dos anos 360–380.
          </p>
          <p style={{ margin: '0 0 8px 0', fontSize: '0.92rem', lineHeight: '1.6', color: '#38302c' }}>
            <strong>(b) Atanásio permanece "antigo":</strong> Ainda em 369, Atanásio escrevia em <em>Ad Afros</em> que "<em>hypóstasis</em> é <em>ousía</em>", equiparando os dois termos — prova documental de que a sinonímia nicena permanecia sendo, para ele, a linguagem tradicional e correta.
          </p>
          <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: '1.6', color: '#38302c' }}>
            <strong>(c) Reação latina:</strong> Jerônimo, em sua <em>Epistula</em> 15 ao Papa Dâmaso (376/7), recusou expressamente a fórmula "três hipóstases" tomando-a como triteísmo velado — sinal de que a confusão terminológica entre Oriente e Ocidente persistiu até a definitiva pacificação de 381.
          </p>
        </div>
      </section>
    </>
  )
}