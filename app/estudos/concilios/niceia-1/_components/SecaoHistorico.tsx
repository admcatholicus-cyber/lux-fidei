'use client'

import Link from 'next/link'
import styles from '../niceia-1.module.css'
import { Accordion } from './Accordion'
import { TabsInternas } from './TabsInternas'
import { fichaTecnica } from '../_data/ficha'
import { participantesData, assinaturasData } from '../_data/participantes'
import { 
  sinodoAntioquiaData, 
  precedentesConciliaresData, 
  cronologiaCriseData, 
  sinodosPreviosData 
} from '../_data/antecedentes'
import { convocacaoDados, reacaoEusebianaData } from '../_data/outrosDados'

export function SecaoHistorico() {
  return (
    <>
      {/* 1. FICHA TÉCNICA */}
      <section className={`${styles.secao} secao-anchor`} id="ficha">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>
            <span style={{ color: '#c5a059', marginRight: '10px' }}>I.</span> 
            Ficha Técnica
          </h2>
        </div>
        <div className={styles.caixaDestaque} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          <div><strong>Nome:</strong> {fichaTecnica.nome}</div>
          <div><strong>Nomes Antigos:</strong> Νικαία Αʹ · ἡ ἐν Νικαίᾳ σύνοδος (hē en Nikaíā sýnodos) · Concilium Nicaenum Primum</div>
          <div><strong>Ano:</strong> {fichaTecnica.ano}</div>
          <div>
            <strong>Abertura:</strong> {fichaTecnica.dataAbertura.tradicional}
<div style={{ fontSize: '0.8rem', color: '#666', marginTop: '4px' }}>
  * {fichaTecnica.dataAbertura.nota}
</div>
          </div>
          <div><strong>Encerramento:</strong> {fichaTecnica.dataEncerramento}</div>
          <div><strong>Local:</strong> Niceia, Bitínia (Edifício central do Palácio Imperial, atual İznik, Turquia)</div>
          <div><strong>Convocador:</strong> {fichaTecnica.convocador}</div>
          <div><strong>Presidência:</strong> {fichaTecnica.presidencia}</div>
          <div><strong>Papa:</strong> {fichaTecnica.papa}</div>
          <div><strong>Participantes:</strong> {fichaTecnica.participantes}</div>
          <div style={{ gridColumn: '1 / -1' }}><strong>Documentos:</strong> {fichaTecnica.documentos.join(' • ')}</div>
          
          {/* NOVOS CAMPOS ACADÊMICOS */}
          <div style={{ gridColumn: '1 / -1' }}><strong>Numeração:</strong> {fichaTecnica.numeracao}</div>
          <div><strong>Festa Litúrgica:</strong> {fichaTecnica.festaLiturgica}</div>
          <div style={{ gridColumn: '1 / -1' }}><strong>Edições de Referência:</strong> {fichaTecnica.edicoesReferencia}</div>
          <div>
            <strong>Concílio Seguinte:</strong>{' '}
            <Link href={`/estudos/concilios/${fichaTecnica.concilioSeguinte.slug}`} style={{ color: '#5b2c83', fontWeight: 600, textDecoration: 'none' }}>
              {fichaTecnica.concilioSeguinte.nome} →
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ANTECEDENTES */}
      <section className={`${styles.secao} secao-anchor`} id="antecedentes">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>
            <span style={{ color: '#c5a059', marginRight: '10px' }}>II.</span> 
            Antecedentes e Causas Imediatas
          </h2>
        </div>

        {/* Precedentes Conciliares */}
        <Accordion id="ant0" titulo={<><strong>{precedentesConciliaresData.titulo}</strong></>}>
          {precedentesConciliaresData.conteudo.map((p, i) => <p key={i}>{p}</p>)}
        </Accordion>

        <Accordion id="ant1" titulo={<><strong>A Igreja após o Edito de Milão (313)</strong></>}>
          <p>Após séculos de perseguição, o Edito de Milão (313), promulgado por Constantino I e Licínio, concedeu liberdade religiosa a todos os cultos no Império Romano, inaugurando uma era radicalmente nova para o Cristianismo. A Igreja podia reunir-se, debater e estruturar-se publicamente sem risco de martírio.</p>
          <p>Paradoxalmente, essa liberdade trouxe consigo novas tensões internas. Sem o laço unificador da perseguição externa, disputas doutrinárias e jurisdicionais emergiram com força.</p>
        </Accordion>

        {/* O Caso de Ário + Adendo sobre Luciano de Antioquia */}
        <Accordion id="ant2" titulo={<><strong>O Caso de Ário em Alexandria (c. 318)</strong></>}>
          <p>Por volta de 318, o presbítero Ário passou a pregar abertamente em Alexandria uma doutrina que seu bispo, Alexandre, julgava gravemente errônea. Alexandre convocou um sínodo local (c. 318–320), que condenou Ário e o excomungou. Ário, porém, refugiou-se na Palestina, tornando a querela um problema universal.</p>
          <p>
            Ao buscar apoio fora do Egito, Ário dirige-se a Eusébio de Nicomédia tratando-o como <em>"colucianista"</em> (<em>sylloukianistēs</em>) — referência ao mestre comum de ambos, o presbítero e mártir Luciano de Antioquia († 312). Essa rede de condiscípulos lucianistas deu à facção ariana uma sólida articulação político-eclesiástica no Oriente. A existência de uma "escola de Luciano" doutrinalmente homogênea é discutida pela historiografia moderna (Hanson, Williams), mas o laço de solidariedade interpessoal entre seus alunos foi decisivo para expandir o conflito.
          </p>
        </Accordion>

        {/* Debate Cronológico */}
        <Accordion id="ant2b" titulo={<><strong>{cronologiaCriseData.titulo}</strong></>}>
          {cronologiaCriseData.conteudo.map((p, i) => <p key={i}>{p}</p>)}
        </Accordion>

        {/* Os Sínodos Prévios */}
        <Accordion id="ant2c" titulo={<><strong>{sinodosPreviosData.titulo}</strong></>}>
          {sinodosPreviosData.itens.map((item, i) => (
            <div key={i} style={{ marginBottom: '12px' }}>
              <strong>{item.fase}:</strong> {item.texto}
            </div>
          ))}
        </Accordion>

        {/* Antioquia 325 */}
        <Accordion id="ant3" titulo={<><strong>{sinodoAntioquiaData.titulo}</strong> <span className={styles.tag}>Importante</span></>}>
          {sinodoAntioquiaData.conteudo.map((p, i) => <p key={i}>{p}</p>)}
        </Accordion>
      </section>

      {/* 3. CONTEXTO HISTÓRICO */}
      <section className={`${styles.secao} secao-anchor`} id="contexto">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>
            <span style={{ color: '#c5a059', marginRight: '10px' }}>III.</span> 
            Contexto Histórico Amplo
          </h2>
        </div>
        <TabsInternas tabs={[
          {
            id: 'ctx1', 
            label: 'O Império em 325',
            content: (
              <>
                <p>
                  O cenário geopolítico de 325 era o resultado direto do colapso do sistema da Tetrarquia criado por Diocleciano em 293. Após a abdicação de Diocleciano (305) e a vitória sobre Maxêncio na Batalha da Ponte Mílvia (312), Constantino travou uma guerra decisiva contra seu cunhado e coimperador Licínio em 324 (batalhas de Adrianópolis e Crisópolis).
                </p>
                <p>
                  Com a execução de Licínio em 325, Constantino unificou o Império Romano sob um único governante. A capital efetiva da administração deslocava-se definitivamente para o Oriente: Nicomédia servia como residência imperial provisória, enquanto a nova capital, Constantinopla, fora fundada ritualmente em 8 de novembro de 324 (sendo dedicada solenemente em 11 de maio de 330).
                </p>
                <p>
                  Niceia, situada a apenas 35 km de Nicomédia, oferecia o clima ameno e a infraestrutura logística ideal para acolher o sínodo, que coincidiu com as celebrações dos vinte anos de reinado do imperador (as <em>Vicennalia</em>, jul. 325) e as reuniões em Nicomédia e Roma (326).
                </p>
              </>
            )
          },
          {
            id: 'ctx2', 
            label: 'Política e Religião',
            content: (
              <>
                <p>
                  A relação de Constantino com a Igreja era complexa e pragmática. Embora permanecesse como catecúmeno até as vésperas de sua morte (sendo batizado somente em maio de 337 por Eusébio de Nicomédia), Constantino autodefinia-se famosamente como &ldquo;o bispo estabelecido por Deus para os assuntos de fora&rdquo; (<em>epískopos tōn ektós</em>).
                </p>
                <p>
                  Sua legislação favoreceu massivamente o Cristianismo: concedeu isenções fiscais ao clero, instituiu o direito de alforria de escravos nas igrejas (<em>manumissio in ecclesia</em>) e oficializou o domingo como dia de descanso civil (321). Contudo, imagens do <em>Sol Invictus</em> continuaram estampando as moedas imperiais até c. 325, e a execução trágica de seu filho Crispo e de sua esposa Fausta em 326 revela as sombras de sua corte.
                </p>
                <p>
                  Esta aliança inaugurou um modelo em que o poder político protegia a Igreja e garantia a execução civil de seus cânones, enquanto exigia em troca a unidade doutrinária como garantia da coesão do Estado — gênese do que a historiografia chamaria de <em>cesaropapismo</em> no Ocidente e <em>sinfonia</em> no Oriente.
                </p>
              </>
            )
          },
          {
            id: 'ctx3', 
            label: 'Eclesiologia Pré-Nicena',
            content: (
              <>
                <p>
                  A prática conciliar já possuía longa tradição regional: desde os sínodos do século II contra o montanismo e sobre a data da Páscoa (c. 190), passando pelos concílios africanos presididos por Cipriano de Cartago (251–256) e pelos sínodos de Antioquia (264–268). Contudo, todas essas assembleias eram estritamente provinciais ou regionais.
                </p>
                <p>
                  A novidade radical de Niceia foi o caráter universal ou &ldquo;ecumênico&rdquo;. O termo <em>oikoumenikē sýnodos</em> aparece pela primeira vez aplicado a Niceia em Eusébio, na carta do Sínodo de Constantinopla de 382 e em Atanásio.
                </p>
                <p>
                  A teologia posterior estabeleceria os critérios para que um concílio seja considerado ecumênico: a convocação de todas as igrejas do mundo habitado (<em>oikoumēnē</em>), a recepção universal de suas decisões por toda a Igreja e a confirmação formal da Sé de Roma (princípio formulado pelo Papa Júlio I). É por essa ausência de recepção ecumênica que sínodos numerosos como Arles (314) e Antioquia (325) permaneceram classificados como regionais.
                </p>
              </>
            )
          }
        ]} />

        {/* QUADRO: O MUNDO CRISTÃO EM 325 */}
        <div className={styles.caixaAlerta} style={{ marginTop: '24px', background: '#faf7f2', borderColor: '#c5a059' }}>
          <h3 style={{ margin: '0 0 12px 0', fontFamily: 'Georgia, serif', color: '#2b1130', fontSize: '1.1rem' }}>
            🌍 Quadro: O Mundo Cristão em 325 d.C.
          </h3>
          <p style={{ margin: '0 0 12px 0', fontSize: '0.92rem', color: '#4a403c', lineHeight: '1.6' }}>
            A dimensão &ldquo;ecumênica&rdquo; de Niceia estendeu-se para além das fronteiras do Império Romano (onde viviam ~50–60 milhões de habitantes, dos quais estima-se que 10% fossem cristãos em 325):
          </p>
                   <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px', fontSize: '0.88rem', color: '#38302c' }}>
            <div><strong>• Império Romano:</strong> ~10% de cristãos.</div>
            <div><strong>• Pérsia Sassânida:</strong> A Igreja do Oriente (bispo João da Pérsia).</div>
            <div><strong>• Reino da Armênia:</strong> Primeiro estado cristão; Aristaces em Niceia.</div>
            <div><strong>• Geórgia (Iberia) e Etiópia:</strong> Em conversão (Santa Nino e Frumêncio).</div>
          <div><strong>• Chipre e Arábia:</strong> Representadas por Espiridião de Trimitonte, Cirilo de Pafos e Nicômaco de Bostra.</div>
            <div><strong>• Balcãs (Dácia/Mésia):</strong> Protógenes de Sárdica e Pisto de Marcianópolis.</div>
            <div><strong>• Acaia, Trácia e Ponto:</strong> Representação sólida.</div>
            <div><strong>• Territórios Góticos e Índia:</strong> Teófilo dos Godos e João "da Grande Índia".</div>
          </div>
        </div>
      </section>

      {/* 4. CONVOCAÇÃO */}
      <section className={`${styles.secao} secao-anchor`} id="convocacao">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>
            <span style={{ color: '#c5a059', marginRight: '10px' }}>IV.</span> 
            Convocação e Abertura
          </h2>
        </div>

        {/* ITEM 8: LINHA DO TEMPO DO CONCÍLIO */}
        <div className={styles.caixaAlerta} style={{ marginBottom: '24px', background: '#fdfcf7', borderColor: '#c5a059' }}>
          <h3 style={{ margin: '0 0 12px 0', fontFamily: 'Georgia, serif', color: '#2b1130', fontSize: '1.1rem' }}>
            ⏳ Linha do Tempo do Concílio (outubro de 324 – dezembro de 325)
          </h3>
          <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.88rem', color: '#38302c', lineHeight: '1.65' }}>
            <li><strong>Set./Out. 324:</strong> Batalha de Crisópolis; Constantino unifica o Império e escreve a Alexandre e Ário.</li>
            <li><strong>Inverno 324/325:</strong> Ósio de Córdova vai a Alexandria, preside sínodo e trata do Cisma Colutiano.</li>
            <li><strong>Início de 325:</strong> Sínodo de Antioquia excomunga provisoriamente Eusébio de Cesareia e convoca concílio para Ancira.</li>
            <li><strong>Primavera de 325:</strong> Constantino transfere a sede do concílio de Ancira para Niceia.</li>
            <li><strong>20 de maio de 325:</strong> Início formal dos trabalhos e reuniões preliminares.</li>
            <li><strong>Maio–Junho de 325:</strong> Debates teológicos; leitura e rejeição da carta de Eusébio de Nicomédia; apresentação do credo de Cesareia.</li>
            <li><strong>19 de junho de 325:</strong> Sessão solene e assinatura do Símbolo Niceno (listas latinas / atas de Calcedônia).</li>
            <li><strong>Junho–Julho de 325:</strong> Promulgação dos 20 Cânones, resolução do cálculo da Páscoa e do Cisma Meleciano; Carta Sinodal aos Egípcios e encíclicas imperiais.</li>
            <li><strong>25 de julho de 325:</strong> Banquete das <em>Vicennalia</em> imperiais e discurso de despedida de Constantino.</li>
             <li><strong>Agosto de 325:</strong> Dispersão dos bispos; exílio de Ário e seus bispos aliados. O edito imperial isenta os rigoristas Novacianos da perseguição anti-herética.</li>
             <li><strong>Nov./Dez. de 325:</strong> Exílio de Eusébio de Nicomédia e Teógnis de Niceia por recusa de subscrição plena.</li>
          </ul>
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
          <p>A sessão inaugural foi descrita por Eusébio de Cesareia na <em>Vita Constantini</em>. Os bispos foram recebidos no edifício central do palácio imperial. Constantino entrou vestido de púrpura e ouro, mas recusou sentar-se antes que os bispos permitissem, demonstrando reverência aos mártires e confessores presentes.</p>
          <p>Entre os confessores que impressionaram o imperador destacava-se <strong>Pafnúcio do Egito</strong>, monge e bispo da Tebaida, a quem os perseguidores haviam arrancado o olho direito e cortado o tendão da perna esquerda. Segundo a tradição preservada por Rufino de Aquileia e Sócrates Escolástico, Constantino teria se aproximado de Pafnúcio e <strong>beijado reverentemente a órbita vazia</strong> do confessor, honrando nele as cicatrizes da fé.</p>
          <p>Outro confessor notável era <strong>Paulo de Neocesareia</strong>, cujas mãos tinham sido queimadas com ferro em brasa. A presença desses mártires vivos dava ao concílio uma autoridade moral incomparável: muitos dos padres haviam sobrevivido à Grande Perseguição de Diocleciano e Licínio.</p>
          <p>Eusébio registra ainda o discurso de abertura de Constantino, proferido em latim e traduzido aos bispos, no qual o imperador declarava que <em>"a discórdia na Igreja de Deus é mais grave e perigosa do que qualquer guerra ou batalha"</em>, e os exortava à concórdia.</p>
          <p><strong>Línguas:</strong> Os debates foram em grego. Constantino falava latim e usava intérprete, barreira que ajuda a explicar o domínio teológico dos orientais nos trabalhos conciliares.</p>
        </Accordion>

        {/* ITEM 9: QUANTOS BISPOS? QUEM DIZ O QUÊ */}
        <Accordion id="conv3" titulo={<><strong>Quantos bispos? Quem diz o quê</strong></>}>
          <p>
            A contagem dos participantes em Niceia varia sensivelmente entre as fontes antigas contemporâneas e a tradição posterior:
          </p>
          <table className={styles.tabelaFiguras} style={{ marginBottom: '16px' }}>
            <thead>
              <tr>
                <th>Fonte Antiga</th>
                <th>Número Citado</th>
                <th>Obra / Referência</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Eusébio de Cesareia</td><td>"mais de 250"</td><td><em>Vita Constantini</em> III.8</td></tr>
              <tr><td>Eustácio de Antioquia</td><td>"cerca de 270"</td><td>citado por Teodoreto, <em>HE</em> I.8</td></tr>
              <tr><td>Constantino I</td><td>"mais de 300"</td><td>Carta aos Alexandrinos (Urk. 25 §5)</td></tr>
              <tr><td>Atanásio de Alexandria</td><td>"cerca de 300" / "318"</td><td><em>De decretis</em> 3 (c. 350) / <em>Ad Afros</em> 2; <em>Hist. Ar.</em> 66</td></tr>
              <tr><td>Hilário de Poitiers</td><td>318</td><td><em>De synodis</em> 86</td></tr>
              <tr><td>Sozômeno</td><td>"cerca de 320"</td><td><em>Historia Ecclesiastica</em> I.17</td></tr>
              <tr><td>Epifânio de Salamina</td><td>318</td><td><em>Panarion</em> 69.11</td></tr>
              <tr><td>Eutíquio de Alexandria (séc. X)</td><td>2048 (lenda)</td><td><em>Anais</em> (crônica árabe medieval)</td></tr>
            </tbody>
          </table>
                  <p>
            A fixação dogmática no número <strong>318</strong> ocorreu a partir de c. 350 com Atanásio e Hilário, adquirindo valor místico: evocava os 318 servos treinados por Abraão (Gn 14,14). Na exegese grega antiga, 318 escreve-se <strong>ΤΙΗ</strong> — o <strong>Τ</strong> representa a Cruz e o <strong>ΙΗ</strong> o nome de Jesus.
          </p>
        </Accordion>

        {/* ITEM 10: LOGÍSTICA IMPERIAL */}
        <Accordion id="conv4" titulo={<><strong>Logística Imperial e Transporte</strong></>}>
          <p>
            A convocação de uma assembleia de escala inédita exigiu a mobilização da máquina estatal romana. Segundo Eusébio, Constantino franqueou aos bispos e suas comitivas o uso gratuito do <em>cursus publicus</em> — o serviço postal imperial de transporte de tração animal (cavalos, carruagens e mulas), privilégio reservado a altos magistrados do Estado.
          </p>
          <p>
            Toda a hospedagem, alimentação e manutenção dos prelados durante os meses do concílio foram custeadas diretamente pelo tesouro imperial (<em>fiscus</em>). O tempo de viagem variava drasticamente: enquanto bispos da Ásia Menor chegavam em poucos dias, a comitiva de Alexandria levou cerca de três semanas de navegação e marcha, e Ósio de Córdova viajou por mais de dois meses atravessando o Ocidente.
          </p>
          <p>
            Cada bispo tinha direito a viajar acompanhado de dois presbíteros e três diáconos (foi assim que o jovem diácono Atanásio integrou a comitiva de Alexandre). Fontes como Sócrates e Sozômeno relatam ainda a presença de filósofos e dialéticos pagãos atraídos pelos debates. Entre os grandes ausentes notáveis figuravam o Papa Silvestre I de Roma (impossibilitado pela idade avançada) e todo o episcopado da Britânia Romana, enquanto da Gália esteve presente apenas Nicásio de Die.
          </p>
        </Accordion>

        {/* ITEM 11: ONDE EXATAMENTE? PALÁCIO OU IGREJA */}
        <Accordion id="conv5" titulo={<><strong>Onde exatamente? Palácio ou Igreja</strong></>}>
          <p>
            A localização física exata dos debates dividiu a historiografia. Eusébio afirma expressamente que a sessão solene de abertura ocorreu &ldquo;no edifício central do palácio imperial&rdquo; (<em>en tō mesaitatō oikō tōn basileiōn</em>), um vasto recinto adaptado com fileiras de assentos ao longo das paredes.
          </p>
          <p>
            Historiadores modernos (como Hefele e Chadwick) sugerem uma divisão funcional: enquanto as sessões solenes com a presença de Constantino ocorriam no complexo palatino, as reuniões de trabalho ordinárias e os debates teológicos diários podem ter sido sediados na principal igreja catedral da cidade.
          </p>
          <p>
            O Palácio Imperial de Niceia nunca foi localizado arqueologicamente. A popular imagem romantizada do &ldquo;concílio à beira do lago&rdquo; decorre de uma confusão frequente com a basílica submersa descoberta em 2014 na margem do Lago de İznik — uma igreja mártir dedicada a São Neófito, construída c. 390 d.C. e destruída por um terremoto em 740 d.C., portanto posterior ao concílio de 325.
          </p>
        </Accordion>
      </section>

      {/* 5. PARTICIPANTES E ASSINATURAS */}
      <section className={`${styles.secao} secao-anchor`} id="participantes">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>
            <span style={{ color: '#c5a059', marginRight: '10px' }}>V.</span> 
            Participantes e Figuras-Chave
          </h2>
        </div>
        <table className={styles.tabelaFiguras}>
          <thead>
            <tr>
              <th>Figura</th>
              <th>Posição / Papel</th>
              <th>Posição Doutrinária</th>
              <th>Destino após 325</th>
            </tr>
          </thead>
          <tbody>
            {participantesData.map((p, i) => (
              <tr key={i}>
                <td><strong>{p.figura}</strong></td>
                <td>{p.posicao}<br/><span style={{fontSize:'0.85em', color:'#555'}}>{p.papel}</span></td>
                <td>{p.doutrina}</td>
                <td>{p.destinoApos325}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 6. LISTAS DE ASSINATURAS E MAPA SVG */}
      <section className={`${styles.secao} secao-anchor`} id="assinaturas">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>
            <span style={{ color: '#c5a059', marginRight: '10px' }}>VI.</span> 
            Listas de Assinaturas
          </h2>
        </div>
        
        {/* ABAS COM AS FAMÍLIAS DE LISTAS */}
        <TabsInternas tabs={assinaturasData.map(a => ({
          id: a.id,
          label: a.titulo,
          content: (
            <div>
              {a.conteudo.split('\n\n').map((paragrafo, idx) => (
                <p key={idx} style={{ marginBottom: '12px', lineHeight: '1.6' }}>
                  {paragrafo}
                </p>
              ))}
            </div>
          )
        }))} />

    
      </section>

     
            {/* 7. AUTORIDADES */}
      <section className={`${styles.secao} secao-anchor`} id="autoridades">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>
            <span style={{ color: '#c5a059', marginRight: '10px' }}>VII.</span> 
            Autoridades Envolvidas
          </h2>
        </div>

        <Accordion id="aut1" titulo={<><strong>Constantino I</strong> (O Imperador)</>}>
          <p>Nascido provavelmente em Naisso (Niš, Sérvia). Seu papel em Niceia foi de convocador e árbitro político. Aceitou o <em>homoousios</em> como solução para unificar o império.</p>
        </Accordion>

        <Accordion id="aut2" titulo={<><strong>Papa Silvestre I</strong> (O Ausente)</>}>
          <p>Enviou dois presbíteros (Vítor e Vincêncio) que assinaram o Credo em seu nome, ocupando os primeiros lugares na lista protocolar.</p>
        </Accordion>

        <Accordion id="aut3" titulo={<><strong>Atanásio de Alexandria</strong> ("Contra o Mundo")</>}>
          <p>Foi a Niceia como jovem diácono. Tornar-se-ia a grande voz do Credo, sofrendo 5 exílios pelas mãos de imperadores arianos ao longo de décadas.</p>
        </Accordion>

        <Accordion id="aut4" titulo={<><strong>Ósio de Córdova</strong> (c. 256–357/358)</>}>
          <p>Confessor da fé sob Maximiano e bispo presente no Sínodo de Elvira. Principal conselheiro teológico de Constantino desde 312/313, liderou missões em Alexandria (324) e presidiu o Sínodo de Antioquia (325) antes de assumir a presidência teológica de Niceia. Presidiu também o Sínodo de Sárdica (343). Celebre por sua corajosa carta ao imperador Constâncio II exortando: <em>"Não te intrometas nos assuntos da Igreja"</em>, antes de ser coagido, centenário, a assinar a fórmula de Sirmium em 357.</p>
        </Accordion>

        <Accordion id="aut5" titulo={<><strong>Alexandre de Alexandria</strong> († 328)</>}>
          <p>Bispo de Alexandria (312–328) e primeiro grande oponente de Ário. Autor de importantes encíclicas teológicas que estabeleceram as bases da resposta nicena e o uso precoce do título <em>Theotókos</em> para a Virgem Maria. Faleceu em 17 de abril de 328, sendo sucedido por Atanásio.</p>
        </Accordion>

        <Accordion id="aut6" titulo={<><strong>Eustácio de Antioquia</strong> (Líder Antiorigenista)</>}>
          <p>Natural de Side (Panfília) e bispo de Bereia, foi elevado à Sé de Antioquia em 324/325. Segundo Teodoreto, foi o encarregado de proferir o discurso panegírico de abertura perante Constantino em Niceia. Antiorigenista convicto (autor de <em>De engastrimytho</em> e estudos sobre Provérbios 8,22 e a alma humana de Cristo), foi deposto sob acusações de sabelianismo e calúnia, deflagrando o longo Cisma Eustaciano em Antioquia (que durou até 415).</p>
        </Accordion>

        <Accordion id="aut7" titulo={<><strong>Marcelo de Ancira</strong> (O Niceno Radical)</>}>
          <p>Bispo de Ancira antes de 314, combateu o arianismo em sua obra contra Astério (335/336). Sua teologia rigorosa foi acusada de apagar as distinções pessoais na Trindade e descambar para o sabelianismo, levando à sua deposição em 336. Absolvido no sínodo romano de 340/341 e em Sárdica, a controvérsia gerada por suas teses motivou a inclusão posterior da cláusula antimarceliana no Credo de 381: <em>"cujo reino não terá fim"</em>. Teve como discípulo Fotino de Sirmium.</p>
        </Accordion>

        <Accordion id="aut8" titulo={<><strong>Eusébio de Nicomédia</strong> († 341)</>}>
          <p>Bispo de Berito, transferido para Nicomédia (c. 318) e posteriormente para Constantinopla (c. 338). Articulador político de enorme influência devido aos seus laços com a corte e com Basilina (mãe do futuro imperador Juliano). Batizou Constantino I em seu leito de morte em 337 e consagrou Úlfilas como bispo dos Godos em 341, ano de seu falecimento.</p>
        </Accordion>

        <Accordion id="aut9" titulo={<><strong>Eusébio de Cesareia</strong> (c. 260–339/340)</>}>
          <p>Erudito e bispo de Cesareia Marítima, discípulo do mártir Pânfilo. Autor de obras fundamentais como a <em>História Eclesiástica</em>, <em>Crônica</em>, <em>Vita Constantini</em>, <em>Contra Marcellum</em> e <em>De ecclesiastica theologia</em>. Recusou a transferência para a Sé de Antioquia (c. 327), ato elogiado por Constantino. Atuou ativamente no Sínodo de Tiro (335) e em Constantinopla (336) na oposição a Atanásio e Marcelo de Ancira.</p>
        </Accordion>

        <Accordion id="aut10" titulo={<><strong>Constância</strong> (Patrona na Corte)</>}>
          <p>Meia-irmã de Constantino I e viúva do imperador Licínio. Mantinha sob sua proteção um presbítero de tendência ariana, por cujo intermédio exerceu constante influência na corte imperial. Seu empenho junto a Constantino em seu leito de morte desempenhou papel crucial na revogação dos exílios e na reaproximação formal do imperador com Ário.</p>
        </Accordion>
      </section>

           {/* 8. REAÇÃO EUSEBIANA */}
      <section className={`${styles.secao} secao-anchor`} id="reacao-eusebiana">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>
            <span style={{ color: '#c5a059', marginRight: '10px' }}>VIII.</span> 
            A Reação Eusebiana (327–338)
          </h2>
        </div>
        <p>{reacaoEusebianaData.conteudo}</p>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
          {reacaoEusebianaData.eventos.map((ev, i) => (
            <li key={i} style={{ marginBottom: '8px' }}>{ev}</li>
          ))}
        </ul>
        <p style={{ marginTop: '16px', fontWeight: 600, color: '#c5a059' }}>
          → A crise continua em Pós-Concílio (339–381).
        </p>
      </section>
    </>
  )
}