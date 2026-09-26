'use client'

import styles from '../niceia-1.module.css'
import { Accordion } from './Accordion'
import { TabsInternas } from './TabsInternas'
import { PartidoCard } from './PartidoCard'
import { MitoCard } from './MitoCard'
import { SubNav } from './SubNav'
import { FichaTecnica } from './FichaTecnica'
import { IconHourglass, IconGlobe, IconCycle, IconPencil, IconScales, IconStop, IconGlobeLines, IconCandle, IconXmark, IconPalette, IconParty, IconFlask, IconBooks, IconScroll, IconConcilio } from './Icons'
import Link from 'next/link'
import { mitosData } from '../_data/mitos'
import {
  recepcaoEcumênicaTradiccoes,
  recepcaoModernidadeData,
  recepcaoIslaData,
  recepcaoNeoArianismosData,
  impactoDuradouroPontos,
  lendasData,
  arqueologiaData,
  liturgiaFestaData,
  aniversario2025Data,
  bibliografiaData,
  reacaoEusebianaData,
} from '../_data/outrosDados'
import {
  sinodoAntioquiaData,
  precedentesConciliaresData,
  cronologiaCriseData,
  sinodosPreviosData,
} from '../_data/antecedentes'
import { tradicaoCanonicaData } from '../_data/canones'

const NAV_ITENS = [
  { id: 'cronologia', label: 'Cronologia' },
  { id: 'antecedentes', label: 'Antecedentes' },
  { id: 'contexto', label: 'Contexto' },
  { id: 'evidencias', label: 'Evidências' },
  { id: 'crise', label: 'Crise' },
  { id: 'recepcao', label: 'Recepção' },
  { id: 'liturgia', label: 'Liturgia' },
  { id: 'mitos', label: 'Mitos' },
  { id: 'lendas', label: 'Lendas' },
  { id: 'jubileu', label: 'Jubileu' },
  { id: 'historiografia', label: 'Historiografia' },
  { id: 'fontes', label: 'Fontes' },
]

export function AbaSobre() {
  return (
    <>
      <div
        style={{
          position: 'relative',
          background: 'linear-gradient(180deg, #ffffff 0%, #faf7f1 100%)',
          border: '1px solid #e2d7c3',
          borderRadius: '16px',
          padding: '2.75rem 2.25rem 2.5rem',
          margin: '2rem 0 3.5rem',
          boxShadow: '0 12px 40px rgba(43, 17, 48, 0.08)',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #3a1f5c 0%, #c5a059 50%, #3a1f5c 100%)' }} />
        <div style={{ position: 'absolute', top: '-40%', left: '50%', transform: 'translateX(-50%)', width: '420px', height: '420px', background: 'radial-gradient(circle, rgba(197,160,89,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#f7f1e5', border: '1px solid #e4dac8', color: '#8c6d31', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: '999px', marginBottom: '1.35rem' }}>
          <svg width="6" height="6" viewBox="0 0 6 6" fill="#c5a059"><circle cx="3" cy="3" r="3" /></svg>
          Acervo crítico · Fontes primárias
        </div>
        <h2 style={{ margin: '0 0 0.85rem', fontFamily: 'Georgia, Times New Roman, serif', fontSize: 'clamp(1.45rem, 2.5vw, 1.85rem)', fontWeight: 700, color: '#2b1130', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
          Entre no Dossiê Documental de Niceia
        </h2>
        <p style={{ margin: '0 auto 1.75rem', maxWidth: '640px', fontSize: '1.05rem', lineHeight: 1.7, color: '#4a403c' }}>
          O Credo em grego e latim com aparato filológico, os{' '}
          <strong style={{ color: '#2b1130' }}>20 Cânones na íntegra</strong>, as cartas de Constantino, os textos de Ário e Alexandre, e a concordância das{' '}
          <strong style={{ color: '#2b1130' }}>34 Urkunden</strong> de Opitz — tudo organizado para estudo sério.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '2rem' }}>
          {[
            { text: '2A Credo', aba: '2a' },
            { text: '2B Cânones', aba: '2b' },
            { text: '2D Constantino', aba: '2d' },
            { text: '2E Ário', aba: '2e' },
            { text: '2I Historiadores', aba: '2i' },
            { text: '2J Assinaturas', aba: '2j' },
            { text: '2K Urkunden', aba: '2k' },
            { text: '2L Legislação', aba: '2l' },
            { text: '2M Fontes Litúrgicas', aba: '2m' },
          ].map((item) => (
            <Link key={item.text} href={`/estudos/concilios/niceia-1/documentos?aba=${item.aba}`} style={{ background: '#fff', border: '1px solid #e4dac8', color: '#5b2c83', fontSize: '0.78rem', fontWeight: 600, padding: '6px 12px', borderRadius: '999px', fontFamily: 'Georgia, serif', textDecoration: 'none', transition: 'all 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.background = '#5b2c83'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#5b2c83' }} onMouseOut={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#5b2c83'; e.currentTarget.style.borderColor = '#e4dac8' }}>
              {item.text}
            </Link>
          ))}
        </div>
        <Link href="/estudos/concilios/niceia-1/documentos" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'linear-gradient(135deg, #3a1f5c 0%, #5b2c83 100%)', color: '#ffffff', textDecoration: 'none', padding: '1rem 2.1rem', borderRadius: '999px', fontFamily: 'Georgia, Times New Roman, serif', fontSize: '1.05rem', fontWeight: 700, boxShadow: '0 8px 24px rgba(91, 44, 131, 0.28)', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 14px 32px rgba(91, 44, 131, 0.35)' }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(91, 44, 131, 0.28)' }}>
          <span>Abrir o Dossiê Completo (2A–2M)</span>
          <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>→</span>
        </Link>
        <p style={{ margin: '1.1rem 0 0', fontSize: '0.82rem', color: '#8a7e74', fontStyle: 'italic' }}>
          Leitura crítica · textos originais · aparato histórico
        </p>
      </div>

      <FichaTecnica />

      <SubNav itens={NAV_ITENS} />

      {/* BLOCO 1 · id="cronologia" — FUSÃO: timeline IV + VIII + Pós-Concílio */}
      <section className={`${styles.secao} secao-anchor`} id="cronologia">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}><IconHourglass size={20} style={{ verticalAlign: '-3px', marginRight: '8px' }} />Cronologia: de 313 a 381</h2>
        </div>
        <p>O concílio não é um ponto no calendário: é o meio de uma linha. Aqui está a sequência completa — antes, durante e depois dos 37 dias.</p>
        <ul className={styles.linhaTempoList}>
          <li><span className={styles.ltData}>Set./Out. 324:</span> Batalha de Crisópolis; Constantino unifica o Império e escreve a Alexandre e Ário.</li>
          <li><span className={styles.ltData}>Inverno 324/325:</span> Ósio de Córdova vai a Alexandria, preside sínodo e trata do Cisma Colutiano.</li>
          <li><span className={styles.ltData}>Início de 325:</span> Sínodo de Antioquia excomunga provisoriamente Eusébio de Cesareia e convoca concílio para Ancira.</li>
          <li><span className={styles.ltData}>Primavera de 325:</span> Constantino transfere a sede do concílio de Ancira para Niceia.</li>
          <li><span className={styles.ltData}>20 de maio de 325:</span> Início formal dos trabalhos e reuniões preliminares.</li>
          <li><span className={styles.ltData}>Maio–Junho de 325:</span> Debates teológicos; leitura e rejeição da carta de Eusébio de Nicomédia; apresentação do credo de Cesareia.</li>
          <li><span className={styles.ltData}>19 de junho de 325:</span> Sessão solene e assinatura do Símbolo Niceno.</li>
          <li><span className={styles.ltData}>Junho–Julho de 325:</span> Promulgação dos 20 Cânones, resolução do cálculo da Páscoa e do Cisma Meleciano.</li>
          <li><span className={styles.ltData}>25 de julho de 325:</span> Banquete das <em>Vicennalia</em> imperiais e discurso de despedida de Constantino.</li>
          <li><span className={styles.ltData}>Agosto de 325:</span> Dispersão dos bispos; exílio de Ário e seus bispos aliados.</li>
          <li><span className={styles.ltData}>Nov./Dez. de 325:</span> Exílio de Eusébio de Nicomédia e Teógnis de Niceia.</li>
          <li><span className={styles.ltData}>327–328:</span> Reabilitação formal de Eusébio de Nicomédia e Teógnis de Niceia.</li>
          <li><span className={styles.ltData}>c. 327–330:</span> Deposição de Eustácio de Antioquia.</li>
          <li><span className={styles.ltData}>335 (Sínodo de Tiro):</span> Deposição de Atanásio de Alexandria. Constantino o exila para Tréveris.</li>
          <li><span className={styles.ltData}>336 (Constantinopla):</span> Deposição de Marcelo de Ancira. Morte súbita de Ário.</li>
          <li><span className={styles.ltData}>22 de maio de 337:</span> Morte de Constantino I.</li>
          <li><span className={styles.ltData}>339:</span> Atanásio foge para Roma; Gregório da Capadócia é instalado em Alexandria.</li>
          <li><span className={styles.ltData}>341:</span> Antioquia in encaeniis: quatro fórmulas sem o homoousios.</li>
          <li><span className={styles.ltData}>343:</span> Sárdica: Ósio preside; Cânones 3–5 sobre recursos a Roma.</li>
          <li><span className={styles.ltData}>356:</span> Terceiro exílio de Atanásio.</li>
          <li><span className={styles.ltData}>360:</span> Constantinopla: triunfo homoiano. Jerônimo: &ldquo;O mundo gemeu ao ver-se ariano&rdquo;.</li>
          <li><span className={styles.ltData}>362:</span> Sínodo de Alexandria: distinção entre &ldquo;uma ousía&rdquo; e &ldquo;três hypostáseis&rdquo;.</li>
          <li><span className={styles.ltData}>373:</span> Morte de Atanásio.</li>
          <li><span className={styles.ltData}>378:</span> Batalha de Adrianópolis; morte de Valente.</li>
          <li><span className={styles.ltData}>380:</span> Edito Cunctos Populos: Teodósio I impõe a fé nicena.</li>
          <li><span className={styles.ltData}>381:</span> Concílio de Constantinopla I: confirmação de Niceia e Credo ampliado.</li>
          <li><span className={styles.ltData}>382:</span> Sínodo de Constantinopla consolida &ldquo;mia ousía, treis hypostáseis&rdquo;.</li>
        </ul>
      </section>

      {/* BLOCO 2 · id="antecedentes" — Seção inteira II */}
      <section className={`${styles.secao} secao-anchor`} id="antecedentes">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>Antecedentes e Causas Imediatas</h2>
        </div>
        <Accordion id="ant0" titulo={<><strong>{precedentesConciliaresData.titulo}</strong></>}>
          {precedentesConciliaresData.conteudo.map((p, i) => <p key={i}>{p}</p>)}
        </Accordion>
        <Accordion id="ant1" titulo={<><strong>A Igreja após o Edito de Milão (313)</strong></>}>
          <p>Após séculos de perseguição, o Edito de Milão (313) concedeu liberdade religiosa a todos os cultos, inaugurando uma era radicalmente nova para o Cristianismo. Paradoxalmente, essa liberdade trouxe novas tensões internas. Sem o laço unificador da perseguição externa, disputas doutrinárias emergiram com força.</p>
        </Accordion>
        <Accordion id="ant2" titulo={<><strong>O Caso de Ário em Alexandria (c. 318)</strong></>}>
          <p>Por volta de 318, o presbítero Ário passou a pregar abertamente em Alexandria uma doutrina que seu bispo, Alexandre, julgava gravemente errônea. Alexandre convocou um sínodo local, que condenou Ário e o excomungou. Ário refugiou-se na Palestina, tornando a querela um problema universal.</p>
          <p>Ao buscar apoio fora do Egito, Ário dirige-se a Eusébio de Nicomédia tratando-o como <em>&ldquo;colucianista&rdquo;</em> (<em>sylloukianistēs</em>) — referência ao mestre comum de ambos, o presbítero e mártir Luciano de Antioquia († 312). Essa rede de condiscípulos lucianistas deu à facção ariana uma sólida articulação político-eclesiástica no Oriente. A existência de uma &ldquo;escola de Luciano&rdquo; doutrinalmente homogênea é discutida pela historiografia moderna, mas o laço de solidariedade interpessoal entre seus alunos foi decisivo para expandir o conflito.</p>
        </Accordion>
        <Accordion id="ant2b" titulo={<><strong>{cronologiaCriseData.titulo}</strong></>}>
          {cronologiaCriseData.conteudo.map((p, i) => <p key={i}>{p}</p>)}
        </Accordion>
        <Accordion id="ant2c" titulo={<><strong>{sinodosPreviosData.titulo}</strong></>}>
          {sinodosPreviosData.itens.map((item, i) => (
            <div key={i} style={{ marginBottom: '12px' }}><strong>{item.fase}:</strong> {item.texto}</div>
          ))}
        </Accordion>
        <Accordion id="ant3" titulo={<><strong>{sinodoAntioquiaData.titulo}</strong> <span className={styles.tag}>Importante</span></>}>
          {sinodoAntioquiaData.conteudo.map((p, i) => <p key={i}>{p}</p>)}
        </Accordion>
      </section>

      {/* BLOCO 3 · id="contexto" — Seção inteira III + divergências pascais */}
      <section className={`${styles.secao} secao-anchor`} id="contexto">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>Contexto Histórico Amplo</h2>
        </div>
        <TabsInternas tabs={[
          { id: 'ctx1', label: 'O Império em 325', content: (<><p>O cenário geopolítico de 325 era o resultado direto do colapso do sistema da Tetrarquia. Após a vitória sobre Licínio em 324, Constantino unificou o Império. A capital efetiva deslocava-se para o Oriente: Nicomédia servia como residência imperial provisória, enquanto Constantinopla fora fundada em 8 de novembro de 324.</p><p>Niceia, situada a apenas 35 km de Nicomédia, oferecia o clima ameno e a infraestrutura logística ideal para acolher o sínodo, que coincidiu com as celebrações dos vinte anos de reinado do imperador (<em>Vicennalia</em>).</p></>) },
          { id: 'ctx2', label: 'Política e Religião', content: (<>          <p>A relação de Constantino com a Igreja era complexa e pragmática. Embora permanecesse como catecúmeno até as vésperas de sua morte, Constantino autodefinia-se como &ldquo;o bispo estabelecido por Deus para os assuntos de fora&rdquo; (<em>epískopos tōn ektós</em>).</p><p>Sua legislação favoreceu massivamente o Cristianismo, contudo, imagens do <em>Sol Invictus</em> continuaram estampando as moedas até c. 325. Esta aliança inaugurou o modelo de <em>cesaropapismo</em> no Ocidente e <em>sinfonia</em> no Oriente.</p></>) },
          { id: 'ctx3', label: 'Eclesiologia Pré-Nicena', content: (<>          <p>A prática conciliar já possuía longa tradição regional. Contudo, todas essas assembleias eram estritamente provinciais. A novidade radical de Niceia foi o caráter universal. O termo <em>oikoumenikē sýnodos</em> aparece pela primeira vez aplicado a Niceia em Eusébio.</p></>) }
        ]} />
        <div className={styles.caixaAlerta} style={{ marginTop: '24px', background: '#faf7f2', borderColor: '#c5a059' }}>
          <h3 style={{ margin: '0 0 12px 0', fontFamily: 'Georgia, serif', color: '#2b1130', fontSize: '1.1rem' }}><IconGlobe size={18} style={{ verticalAlign: '-3px', marginRight: '8px' }} />Quadro: O Mundo Cristão em 325 d.C.</h3>
          <p style={{ margin: '0 0 12px 0', fontSize: '0.92rem', color: '#4a403c', lineHeight: '1.6' }}>A dimensão &ldquo;ecumênica&rdquo; de Niceia estendeu-se para além das fronteiras do Império Romano:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px', fontSize: '0.88rem', color: '#38302c' }}>
            <div><strong>• Império Romano:</strong> ~10% de cristãos.</div>
            <div><strong>• Pérsia Sassânida:</strong> A Igreja do Oriente (bispo João da Pérsia).</div>
            <div><strong>• Reino da Armênia:</strong> Primeiro estado cristão; Aristaces em Niceia.</div>
            <div><strong>• Geórgia e Etiópia:</strong> Em conversão (Santa Nino e Frumêncio).</div>
            <div><strong>• Chipre e Arábia:</strong> Representadas por Espiridião de Trimitonte.</div>
            <div><strong>• Territórios Góticos e Índia:</strong> Teófilo dos Godos e João &ldquo;da Grande Índia&rdquo;.</div>
          </div>
        </div>
        <h3 style={{ marginTop: '24px', color: '#2b1130', fontFamily: 'Georgia, serif' }}>As divergências pascais pré-nicenas</h3>
        <p>No século II, Policarpo de Esmirna e o papa Aniceto debateram em Roma (c. 155) divergências de calendário sem romper a comunhão. Por volta de 190, o papa Vítor I ameaçou excomungar as igrejas da Ásia Menor. O desafio técnico envolvia a fixação do equinócio vernal e o ciclo lunar.</p>
      </section>

      {/* BLOCO 4 · id="evidencias" — "Quantos bispos" + "Onde exatamente" + Listas de Assinaturas */}
      <section className={`${styles.secao} secao-anchor`} id="evidencias">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>🔎 As evidências: quantos, onde e quem assinou</h2>
        </div>
        <Accordion id="conv3" titulo={<><strong>Quantos bispos? Quem diz o quê</strong></>}>
          <p>A contagem dos participantes em Niceia varia sensivelmente entre as fontes antigas:</p>
          <table className={styles.tabelaFiguras} style={{ marginBottom: '16px' }}>
            <thead><tr><th>Fonte Antiga</th><th>Número Citado</th><th>Obra / Referência</th></tr></thead>
            <tbody>
              <tr><td>Eusébio de Cesareia</td><td>&ldquo;mais de 250&rdquo;</td><td><em>Vita Constantini</em></td></tr>
              <tr><td>Eustácio de Antioquia</td><td>&ldquo;cerca de 270&rdquo;</td><td>citado por Teodoreto</td></tr>
              <tr><td>Constantino I</td><td>&ldquo;mais de 300&rdquo;</td><td>Carta aos Alexandrinos</td></tr>
              <tr><td>Atanásio</td><td>&ldquo;cerca de 300&rdquo; / &ldquo;318&rdquo;</td><td><em>De decretis</em> / <em>Ad Afros</em></td></tr>
              <tr><td>Hilário de Poitiers</td><td>318</td><td><em>De synodis</em></td></tr>
              <tr><td>Sozômeno</td><td>&ldquo;cerca de 320&rdquo;</td><td><em>HE</em></td></tr>
              <tr><td>Epifânio de Salamina</td><td>318</td><td><em>Panarion</em></td></tr>
            </tbody>
          </table>
          <p>A fixação dogmática no número <strong>318</strong> ocorreu a partir de c. 350 com Atanásio e Hilário, adquirindo valor místico: evocava os 318 servos treinados por Abraão (Gn 14,14). Na exegese grega antiga, 318 escreve-se <strong>ΤΙΗ</strong> — o <strong>Τ</strong> representa a Cruz e o <strong>ΙΗ</strong> o nome de Jesus.</p>
        </Accordion>
        <Accordion id="conv5" titulo={<><strong>Onde exatamente? Palácio ou Igreja</strong></>}>
          <p>A localização física exata dos debates dividiu a historiografia. Eusébio afirma que a sessão solene ocorreu &ldquo;no edifício central do palácio imperial&rdquo;. Historiadores modernos sugerem uma divisão funcional: enquanto as sessões solenes com a presença de Constantino ocorriam no complexo palatino, as reuniões de trabalho ordinárias e os debates teológicos diários podem ter sido sediados na principal igreja catedral da cidade.</p>
          <p>O Palácio Imperial de Niceia nunca foi localizado arqueologicamente. A imagem do &ldquo;concílio à beira do lago&rdquo; decorre de confusão com a basílica submersa descoberta em 2014 — igreja mártir dedicada a São Neófito, construída c. 390, portanto posterior ao concílio.</p>
        </Accordion>
      </section>

      {/* BLOCO 5 · id="crise" — Análise Reação Eusebiana + Capadócios + Correntes + Paulo de Samósata + Páscoa */}
      <section className={`${styles.secao} secao-anchor`} id="crise">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}><IconCycle size={20} style={{ verticalAlign: '-3px', marginRight: '8px' }} />A longa crise e a solução (325–381)</h2>
        </div>
        <p>{reacaoEusebianaData.conteudo}</p>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
          {reacaoEusebianaData.eventos.map((ev, i) => (<li key={i} style={{ marginBottom: '8px' }}>{ev}</li>))}
        </ul>
        <div className={styles.caixaAlerta} style={{ marginTop: '24px', background: '#faf7f2', borderColor: '#c5a059' }}>
          <h3 style={{ margin: '0 0 12px 0', fontFamily: 'Georgia, serif', color: '#2b1130', fontSize: '1.05rem' }}><IconPencil size={18} style={{ verticalAlign: '-3px', marginRight: '8px' }} />Partidos ou trajetórias? / A questão do iota</h3>
          <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: '1.6', color: '#38302c' }}><strong>(a) Uma releitura contemporânea:</strong> Autores como Lewis Ayres e David Gwynn alertam que os &ldquo;partidos&rdquo; são rótulos polêmicos posteriores.</p>
        </div>
        <h3 style={{ marginTop: '24px', color: '#2b1130', fontFamily: 'Georgia, serif' }}>Correntes Teológicas do Século IV</h3>
        <div className={styles.mapaPartidos}>
          <PartidoCard tipo="homoiousiano" titulo={<><IconScales size={16} style={{ verticalAlign: '-3px', marginRight: '6px' }} />Centro Eusebiano (325–350)</>} texto="Eusébio de Cesareia, Eusébio de Nicomédia, Astério e Acácio. Teologia origenista das 'três hipóstases'." />
          <PartidoCard tipo="ariano" titulo={<><IconStop size={16} style={{ verticalAlign: '-3px', marginRight: '6px' }} />Anomeus</>} texto="O Filho é completamente diferente do Pai. Aécio e Eunômio lideraram essa vertente radical nos anos 350." />
          <PartidoCard tipo="anomoio" titulo="↘️ Homoianos" texto="O Filho é semelhante ao Pai 'segundo as Escrituras'. Fórmula vaga politicamente útil (357–359)." />
          <PartidoCard tipo="ariano" titulo="⚠️ Marcelianos" texto="Marcelo de Ancira e Fotino de Sirmium. Uma só hipóstase; o Logos 'se expande' em Tríade na economia." />
          <PartidoCard tipo="homoiousiano" titulo="🔶 Homoiousianos" texto="Substância semelhante (ὁμοιούσιος). Formaram um partido claro em 358 com Basílio de Ancira." />
          <PartidoCard tipo="niceno" titulo="✅ Nicenos (Homoousianos)" texto="Mesma substância (ὁμοούσιος). Venceram em Niceia e, após décadas de exílio, triunfariam definitivamente em 381." />
        </div>
        <h3 className={styles.subtitulo}>A Solução dos Grandes Capadócios</h3>
        <p>A confusão terminológica sobre <em>ousía</em> e <em>hypóstasis</em> só foi resolvida nos anos 370 pelos três grandes Padres Capadócios. Eles forjaram a fórmula dogmática definitiva: <strong>Mia Ousía, Treis Hypostáseis</strong>.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '20px' }}>
          <div className={styles.caixaDestaque}><h4 style={{ margin: '0 0 8px 0', color: '#2b1130', fontFamily: 'Georgia, serif' }}>Basílio de Cesareia (c. 330–379)</h4><p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>Autor do <em>Contra Eunômio</em> (364) e do decisivo <em>De Spiritu Sancto</em> (375). Suas cartas fixam a distinção: <em>ousía</em> = o comum, <em>hypóstasis</em> = o próprio individuante.</p></div>
          <div className={styles.caixaDestaque}><h4 style={{ margin: '0 0 8px 0', color: '#2b1130', fontFamily: 'Georgia, serif' }}>Gregório Nazianzeno (c. 329–390)</h4><p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>Autor das cinco <em>Orações Teológicas</em> (Or. 27–31, 380). Presidiu por algum tempo o Concílio de Constantinopla em 381.</p></div>
          <div className={styles.caixaDestaque}><h4 style={{ margin: '0 0 8px 0', color: '#2b1130', fontFamily: 'Georgia, serif' }}>Gregório de Nissa (c. 335–395)</h4><p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>Autor do <em>Ad Ablabium</em> e do <em>Contra Eunômio</em>. Presente no Concílio de Constantinopla (381).</p></div>
        </div>
        <h3 style={{ marginTop: '24px', color: '#2b1130', fontFamily: 'Georgia, serif' }}>Desdobramentos históricos e o horizonte ecumênico</h3>
        <p>O Concílio de Antioquia (341, cân. 1) depôs quem insistisse em celebrar com o cômputo judaico. O ciclo alexandrino de 19 anos foi recepcionado no Ocidente por Vitório de Aquitânia (457) e consolidado por Dionísio Exíguo (525). Em <strong>2025</strong>, os 1700 anos do concílio coincidem com a celebração conjunta da Páscoa em <strong>20 de abril</strong>.</p>
      </section>

      {/* BLOCO 6 · id="recepcao" — Recepção Ecumênica Global */}
      <section className={`${styles.secao} secao-anchor`} id="recepcao">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}><IconGlobeLines size={20} style={{ verticalAlign: '-3px', marginRight: '8px' }} />Recepção Ecumênica Global</h2>
        </div>
        <p>O Credo de Niceia é a profissão de fé mais universal do cristianismo. Abaixo, a recepção pelas diferentes tradições:</p>
        <h3 className={styles.subtitulo}>Recepção pelas Tradições Cristãs</h3>
        <div className={styles.recepcaoGrid}>
          {recepcaoEcumênicaTradiccoes.map((t, idx) => (
            <div key={idx} className={styles.recepcaoCard}>
              <div className={styles.cardIconBox}>
                {idx === 0 && <svg viewBox="0 0 24 24"><path d="M12 2v20M5 7h14" /></svg>}
                {idx === 1 && <svg viewBox="0 0 24 24"><path d="M12 2C8 2 4 6 4 10c0 6 8 12 8 12s8-6 8-12c0-4-4-8-8-8z" /><circle cx="12" cy="10" r="2" /></svg>}
                {idx === 2 && <svg viewBox="0 0 24 24"><path d="M12 2v8M8 6l4 4 4-4M4 14c2 2 4 3 8 3s6-1 8-3" /><path d="M6 18c2 1 4 2 6 2s4-1 6-2" /></svg>}
                {idx === 3 && <svg viewBox="0 0 24 24"><path d="M4 19V5a2 2 0 012-2h8l6 6v10a2 2 0 01-2 2H6a2 2 0 01-2-2z" /><path d="M14 3v6h6" /><path d="M9 13h6M9 17h4" /></svg>}
                {idx === 4 && <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>}
              </div>
              <div className={styles.cardBody}>
                <h4 className={styles.cardTitle}>{t.titulo}</h4>
                <p className={styles.cardText}>{t.conteudo}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className={styles.subtitulo}>Recepção por Tradições Não-Nicenas</h3>
        <div className={styles.recepcaoGrid}>
          <div className={styles.recepcaoCard}>
            <div className={styles.cardIconBox}>
              <svg viewBox="0 0 24 24"><path d="M4 19V5a2 2 0 012-2h8l6 6v10a2 2 0 01-2 2H6a2 2 0 01-2-2z" /><path d="M14 3v6h6" /><path d="M9 13h6M9 17h4" /></svg>
            </div>
            <div className={styles.cardBody}>
              <h4 className={styles.cardTitle}>{recepcaoModernidadeData.titulo}</h4>
              <p className={styles.cardText}>{recepcaoModernidadeData.conteudo}</p>
            </div>
          </div>
          <div className={styles.recepcaoCard}>
            <div className={styles.cardIconBox}>
              <svg viewBox="0 0 24 24"><path d="M12 2C8 2 4 6 4 10c0 6 8 12 8 12s8-6 8-12c0-4-4-8-8-8z" /><circle cx="12" cy="10" r="2" /></svg>
            </div>
            <div className={styles.cardBody}>
              <h4 className={styles.cardTitle}>{recepcaoIslaData.titulo}</h4>
              <p className={styles.cardText}>{recepcaoIslaData.conteudo}</p>
            </div>
          </div>
          <div className={styles.recepcaoCard}>
            <div className={styles.cardIconBox}>
              <svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
            </div>
            <div className={styles.cardBody}>
              <h4 className={styles.cardTitle}>{recepcaoNeoArianismosData.titulo}</h4>
              <p className={styles.cardText}>{recepcaoNeoArianismosData.conteudo}</p>
            </div>
          </div>
        </div>
        <h3 className={styles.subtitulo}>Impacto Duradouro na Civilização</h3>
        <div className={styles.impactoGrid}>
          {impactoDuradouroPontos.map((imp, idx) => (
            <div key={idx} className={styles.impactoCard}>
              <div className={styles.cardIconBox}>
                {idx === 0 && <svg viewBox="0 0 24 24"><path d="M3 21h18M3 7v14M21 7v14M6 7V4h12v3M9 21V11h6v10" /></svg>}
                {idx === 1 && <svg viewBox="0 0 24 24"><path d="M12 2v20M5 7h14" /></svg>}
                {idx === 2 && <svg viewBox="0 0 24 24"><path d="M7 11V7a5 5 0 0110 0v4M5 11h14v10H5z" /><path d="M12 15v4" /></svg>}
                {idx === 3 && <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M3 9h18" /></svg>}
                {idx === 4 && <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>}
              </div>
              <div className={styles.cardBody}>
                <h4 className={styles.cardTitle}>{imp.titulo}</h4>
                <p className={styles.cardText}>{imp.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BLOCO 7 · id="liturgia" */}
      <section className={`${styles.secao} secao-anchor`} id="liturgia">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}><IconCandle size={20} style={{ verticalAlign: '-3px', marginRight: '8px' }} />Liturgia, Música e Iconografia</h2>
        </div>
        <TabsInternas tabs={[
          { id: 'lit-festa', label: 'Festa dos 318 Padres', content: (<><h3>{liturgiaFestaData.titulo}</h3><p>{liturgiaFestaData.conteudo}</p></>) },
          { id: 'lit-missa', label: 'Do Sínodo à Missa', content: (<><h3>A Entrada do Credo na Liturgia Eucarística</h3><p>O Símbolo Niceno não foi composto para o culto diário. Foi introduzido na missa em Antioquia (476) e Constantinopla (511). No Ocidente, ingressou no III Concílio de Toledo (589) com a adição do Filioque, sendo adotado em Roma apenas em 1014.</p></>) },
          { id: 'lit-musica', label: 'O Credo na Música', content: (<><h3>Grandes Obras Musicais</h3><p>Do cantochão monódico à polifonia de Palestrina e Machaut. O Credo atingiu o apogeu barroco na Missa em Si menor de J. S. Bach, e no repertório clássico de Mozart, Beethoven, Rachmaninoff e Pärt.</p></>) },
          { id: 'lit-iconografia', label: 'Iconografia Conciliar', content: (<><h3>Representações Visuais</h3><p>O tipo bizantino retrata Constantino I ao centro, os bispos em semicírculo com os pergaminhos do Credo, a Hetimasía e Ário prostrado e vencido aos seus pés.</p></>) }
        ]} />
      </section>

      {/* BLOCO 8 · id="mitos" */}
      <section className={`${styles.secao} secao-anchor`} id="mitos">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}><IconXmark size={20} style={{ verticalAlign: '-3px', marginRight: '8px' }} />Mitos Populares Desmentidos</h2>
        </div>
        <p>Devido à cultura pop e panfletos anticatólicos, Niceia atrai muitas lendas modernas. Abaixo desmentimos as 12 principais:</p>
        <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
          {mitosData.map(mito => <MitoCard key={mito.id} {...mito} />)}
        </div>
      </section>

      {/* BLOCO 9 · id="lendas" */}
      <section className={`${styles.secao} secao-anchor`} id="lendas">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}><IconPalette size={20} style={{ verticalAlign: '-3px', marginRight: '8px' }} />Lendas Antigas e Arqueologia</h2>
        </div>
        <TabsInternas tabs={[
          ...lendasData.map((l, i) => ({ id: `lenda-${i}`, label: l.titulo, content: <><h3>{l.titulo}</h3><p>{l.conteudo}</p></> })),
          { id: 'arq', label: 'Basílica Submersa', content: <><h3>{arqueologiaData.titulo}</h3><p>{arqueologiaData.conteudo}</p></> }
        ]} />
      </section>

      {/* BLOCO 10 · id="jubileu" */}
      <section className={`${styles.secao} secao-anchor`} id="aniversario-1700">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}><IconParty size={20} style={{ verticalAlign: '-3px', marginRight: '8px' }} />{aniversario2025Data.titulo}</h2>
        </div>
        <p>{aniversario2025Data.conteudo}</p>
        <ul style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
          {aniversario2025Data.pontos.map((pt, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{pt}</li>)}
        </ul>
      </section>

      {/* BLOCO 11 · id="historiografia" */}
      <section className={`${styles.secao} secao-anchor`} id="historiografia">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}><IconFlask size={20} style={{ verticalAlign: '-3px', marginRight: '8px' }} />História das fontes e dos debates</h2>
        </div>
        <Accordion id="deb-origem" titulo={<><strong>De onde veio a palavra? Quatro versões antigas</strong></>}>
          <p>As fontes antigas divergem consideravelmente sobre a origem exata da adoção do termo <em>homoousios</em>:</p>
          <ol style={{ paddingLeft: '20px', lineHeight: '1.7' }}>
            <li><strong>Ambrósio (<em>De fide</em>):</strong> Nasceu da própria carta de Eusébio de Nicomédia.</li>
            <li><strong>Eusébio de Cesareia:</strong> Foi o &ldquo;sapientíssimo e piíssimo imperador&rdquo; quem propôs a palavra.</li>
            <li><strong>Filostórgio (<em>HE</em>):</strong> Alexandre e Ósio teriam combinado o termo antecipadamente.</li>
            <li><strong>Atanásio (<em>De decretis</em>):</strong> Os padres foram obrigados a apelar às expressões precisas &ldquo;da <em>ousía</em>&rdquo; e <em>homoousios</em>.</li>
          </ol>
          <p><strong>Síntese moderna:</strong> proposta ocidental (Ósio, com Alexandre), aval imperial de Constantino, e fonte remota latina (<em>una substantia</em> de Tertuliano).</p>
        </Accordion>
        <Accordion id="deb-atanasio" titulo={<><strong>Atanásio falou em Niceia?</strong></>}>
          <p>Gregório Nazianzeno declara que Atanásio, ainda diácono, foi &ldquo;primeiro entre os reunidos&rdquo;. Sócrates e Sozômeno afirmam que ele &ldquo;contendeu vigorosamente&rdquo;. Curiosamente, o próprio Atanásio nunca reivindica ter tido protagonismo pessoal.</p>
          <p><strong>Avaliação crítica:</strong> presença certa em Niceia, protagonismo provável mas historicamente indemonstrável.</p>
        </Accordion>
          <h3 style={{ marginTop: '24px', color: '#2b1130', fontFamily: 'Georgia, serif' }}><IconBooks size={18} style={{ verticalAlign: '-3px', marginRight: '8px' }} />Notas Historiográficas Críticas</h3>
        <p><strong>(a) Releitura criativa:</strong> Historiadores como Lewis Ayres sustentam que os Capadócios não &ldquo;explicam&rdquo; simplesmente Niceia — eles a <em>releem</em> criativamente.</p>
        <p><strong>(b) Atanásio permanece &ldquo;antigo&rdquo;:</strong> Ainda em 369, Atanásio escrevia que &ldquo;<em>hypóstasis</em> é <em>ousía</em>&rdquo;.</p>
        <p><strong>(c) Reação latina:</strong> Jerônimo recusou a fórmula &ldquo;três hipóstases&rdquo; tomando-a como triteísmo velado.</p>
          <h3 style={{ marginTop: '24px', color: '#2b1130', fontFamily: 'Georgia, serif' }}><IconScroll size={18} style={{ verticalAlign: '-3px', marginRight: '8px' }} />Tradição Canônica Posterior</h3>
        <TabsInternas tabs={tradicaoCanonicaData.map((item) => ({
          id: item.id,
          label: item.titulo,
          content: (<><h3>{item.titulo}</h3><p><strong>Resumo:</strong> {item.resumo}</p><p>{item.conteudo}</p></>)
        }))} />
      </section>

      {/* BLOCO 12 · id="fontes" */}
      <section className={`${styles.secao} secao-anchor`} id="fontes">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}><IconBooks size={20} style={{ verticalAlign: '-3px', marginRight: '8px' }} />Fontes e Historiografia</h2>
        </div>
        <TabsInternas tabs={[
          { id: 'bib1', label: 'Fontes Primárias', content: <ul>{bibliografiaData.oficiais.map((o, i) => <li key={i}>{o}</li>)}</ul> },
          { id: 'bib2', label: 'Em Português', content: <ul>{bibliografiaData.livrosPt.map((l, i) => <li key={i}>{l}</li>)}</ul> },
          { id: 'bib3', label: 'Acadêmica', content: <ul>{bibliografiaData.livrosEn.map((l, i) => <li key={i}>{l}</li>)}</ul> },
          { id: 'bib4', label: 'Fontes Online', content: <ul>{bibliografiaData.online.map((on, i) => <li key={i}>{on}</li>)}</ul> },
          { id: 'bib5', label: 'Crítica das Fontes', content: <ul>{bibliografiaData.criticaFontes.map((c, i) => <li key={i}>{c}</li>)}</ul> },
          { id: 'bib6', label: 'Aporias e Incertezas', content: <ul>{bibliografiaData.aporias.map((a, i) => <li key={i}>{a}</li>)}</ul> }
        ]} />
      </section>
    </>
  )
}
