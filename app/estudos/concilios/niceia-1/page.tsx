// app/concilios/niceia-i/page.tsx
'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import styles from './niceia-1.module.css'
import { useRouter } from 'next/navigation'
/* ─────────────────────────────────────────
   TIPOS
───────────────────────────────────────── */
type SumarioTab = 'p-hist' | 'p-dout' | 'p-disc' | 'p-legado'

/* ─────────────────────────────────────────
   DADOS — SUMÁRIO
───────────────────────────────────────── */
const sumarioData: Record<SumarioTab, { ic: string; label: string; href: string; tempo: string }[]> = {
  'p-hist': [
    { ic: '📌', label: 'Ficha Técnica', href: '#ficha', tempo: '1 min' },
    { ic: '📜', label: 'Antecedentes e Causas', href: '#antecedentes', tempo: '3 min' },
    { ic: '🏛️', label: 'Contexto Histórico Amplo', href: '#contexto', tempo: '3 min' },
    { ic: '📣', label: 'Convocação e Abertura', href: '#convocacao', tempo: '3 min' },
    { ic: '👥', label: 'Participantes e Figuras-Chave', href: '#participantes', tempo: '4 min' },
    { ic: '👑', label: 'Papas, Imperadores e Autoridades', href: '#autoridades', tempo: '4 min' },
    { ic: '🔄', label: 'Pós-Concílio: Crise Ariana', href: '#pos-concilio', tempo: '5 min' },
  ],
  'p-dout': [
    { ic: '⛔', label: 'Ário e o Arianismo', href: '#ario', tempo: '4 min' },
    { ic: '🗂️', label: 'Os Seis Partidos Teológicos', href: '#partidos', tempo: '3 min' },
    { ic: '🗣️', label: 'Debates Internos', href: '#debates', tempo: '3 min' },
    { ic: '🔬', label: 'Filosofia Trinitária: ousía e hypóstasis', href: '#filosofia', tempo: '5 min' },
    { ic: '✝️', label: 'O Credo — Texto e Análise', href: '#credo', tempo: '5 min' },
    { ic: '⚠️', label: 'Heresias Combatidas', href: '#heresias', tempo: '3 min' },
    { ic: '🏔️', label: 'Os Capadócios e a Recepção Nicena', href: '#capadocios', tempo: '4 min' },
  ],
  'p-disc': [
    { ic: '⚖️', label: 'Os 20 Cânones Disciplinares', href: '#canones', tempo: '8 min' },
    { ic: '🌕', label: 'A Questão da Páscoa', href: '#pascoa', tempo: '3 min' },
    { ic: '✂️', label: 'O Cisma Meleciano', href: '#melecio', tempo: '3 min' },
  ],
  'p-legado': [
    { ic: '🌐', label: 'Recepção Ecumênica', href: '#recepcao', tempo: '4 min' },
    { ic: '🕯️', label: 'Dimensão Litúrgica do Credo', href: '#liturgia', tempo: '3 min' },
    { ic: '🌍', label: 'Impacto Duradouro', href: '#impacto', tempo: '4 min' },
    { ic: '📚', label: 'Fontes e Historiografia', href: '#fontes', tempo: '3 min' },
  ],
}

const sumarioTabLabels: { id: SumarioTab; label: string }[] = [
  { id: 'p-hist', label: '📜 Histórico' },
  { id: 'p-dout', label: '✝️ Doutrina' },
  { id: 'p-disc', label: '⚖️ Disciplina' },
  { id: 'p-legado', label: '🌍 Legado' },
]

/* ─────────────────────────────────────────
   DADOS — NAV LATERAL
───────────────────────────────────────── */
const navItems = [
  { href: '#ficha', label: 'Ficha Técnica' },
  { href: '#antecedentes', label: 'Antecedentes' },
  { href: '#contexto', label: 'Contexto Histórico' },
  { href: '#ario', label: 'Ário e o Arianismo' },
  { href: '#partidos', label: 'Partidos Teológicos' },
  { href: '#convocacao', label: 'Convocação' },
  { href: '#participantes', label: 'Participantes' },
  { href: '#debates', label: 'Debates' },
  { href: '#filosofia', label: 'Filosofia Trinitária' },
  { href: '#credo', label: 'O Credo' },
  { href: '#canones', label: '20 Cânones' },
  { href: '#pascoa', label: 'A Páscoa' },
  { href: '#melecio', label: 'Cisma Meleciano' },
  { href: '#heresias', label: 'Heresias' },
  { href: '#autoridades', label: 'Autoridades' },
  { href: '#capadocios', label: 'Os Capadócios' },
  { href: '#pos-concilio', label: 'Pós-Concílio' },
  { href: '#recepcao', label: 'Recepção Ecumênica' },
  { href: '#liturgia', label: 'Dimensão Litúrgica' },
  { href: '#impacto', label: 'Impacto' },
  { href: '#fontes', label: 'Fontes' },
]

/* ─────────────────────────────────────────
   DADOS — CÂNONES
───────────────────────────────────────── */
const canonesData = [
  {
    num: 'Cânone 1', titulo: 'Clérigos eunucos', resumo: 'Ordenação de eunucos voluntários',
    detalhe: 'Proíbe a ordenação de homens que se castraram voluntariamente. Quem foi castrado por médicos ou por perseguidores pode ser admitido ao clero. Visava coibir práticas ascéticas extremadas inspiradas em leituras literalistas de Mt 19,12.',
  },
  {
    num: 'Cânone 2', titulo: 'Neófitos', resumo: 'Proibição de ordenar recém-batizados',
    detalhe: 'Proíbe a ordenação episcopal ou presbiteral de recém-batizados. É necessário um período de provação após o batismo. O caso de Ambrósio de Milão (ordenado bispo 8 dias após o batismo) era exceção extraordinária, não a regra.',
  },
  {
    num: 'Cânone 3', titulo: 'Mulheres nas casas dos clérigos', resumo: 'Syneisaktai — virgens introduzidas',
    detalhe: 'Proíbe que bispos, presbíteros e diáconos mantenham em casa qualquer mulher "introduzida", exceto mãe, irmã, tia. Combatia a prática do celibato carismático partilhado (virgines subintroductae). Nota: Pafnúcio teria convencido o concílio a não impor o celibato universal — episódio historicamente controverso mas significativo.',
  },
  {
    num: 'Cânone 4', titulo: 'Eleição de bispos', resumo: 'Sistema metropolitano da Igreja',
    detalhe: 'Um bispo deve ser eleito por todos os bispos da província e consagrado por pelo menos três, com consentimento dos demais. O metropolita confirma a eleição. Fundamento do sistema metropolitano — base da estrutura episcopal provincial que persiste até hoje.',
  },
  {
    num: 'Cânone 5', titulo: 'Excomungados', resumo: 'Sínodos provinciais semestrais',
    detalhe: 'As excomunhões decididas por bispos devem ser respeitadas por toda a Igreja. Sínodos provinciais devem ocorrer duas vezes por ano para examinar casos de excomunhão injusta. Estabelece a colegialidade episcopal no exercício da disciplina.',
  },
  {
    num: 'Cânone 6', titulo: 'Primados das grandes sés', resumo: 'Roma, Alexandria, Antioquia',
    detalhe: 'Reconhece os privilégios antigos de Roma, Alexandria e Antioquia sobre suas regiões. Base para o desenvolvimento das sés patriarcais. Católicos e ortodoxos interpretam diferentemente se este cânone implica jurisdição universal de Roma ou apenas primazia honorífica.',
  },
  {
    num: 'Cânone 7', titulo: 'Honra de Jerusalém', resumo: 'Reconhecimento histórico-sagrado',
    detalhe: 'O bispo de Aelia Capitolina (Jerusalém) recebe honra especial, após o metropolita de Cesareia. Reconhece o prestígio histórico-sagrado de Jerusalém sem criar ainda um patriarcado formal (isso viria em Calcedônia, 451).',
  },
  {
    num: 'Cânone 8', titulo: 'Os Novacianos', resumo: 'Reintegração de clérigos rigoristas',
    detalhe: 'Clérigos da seita novaciana podem ser recebidos na Igreja com imposição das mãos e manutenção de seu grau, desde que assinem profissão de fé. Novaciano (Roma, séc. III) negava o perdão a apóstatas e pecadores graves — criando uma Igreja separada que ainda existia no séc. IV.',
  },
  {
    num: 'Cânone 9', titulo: 'Ordenações irregulares', resumo: 'Investigação prévia obrigatória',
    detalhe: 'Presbíteros ordenados sem investigação prévia de seus pecados, ou que confessaram pecados após a imposição das mãos, não devem ser aceitos. A Igreja não reconhece ordenações conferidas levianamente.',
  },
  {
    num: 'Cânone 10', titulo: 'Apóstatas ordenados', resumo: 'Apostasia e irregularidade clerical',
    detalhe: 'Quem renegou a fé durante a perseguição e foi ordenado não pode permanecer no clero. Mesmo que os ordenadores ignorassem a apostasia, a irregularidade persiste. Distingue-se da penitência ordinária: a apostasia impede o ministério público.',
  },
  {
    num: 'Cânone 11', titulo: 'Lapsos voluntários', resumo: '12 anos de penitência pública',
    detalhe: 'Apostasia voluntária (sem coação): 12 anos de penitência pública em quatro estágios: flentes (fora da igreja), audientes (ouvem leituras, saem antes da missa dos fiéis), substrati (prostrados pedindo orações), consistentes (presentes mas sem comungar).',
  },
  {
    num: 'Cânone 12', titulo: 'Militares apóstatas', resumo: '13 anos de penitência (3+10)',
    detalhe: 'Cristãos que retornaram ao serviço militar pagão após a conversão devem cumprir 13 anos de penitência (3 como audientes e 10 como substrati). Em caso de doença grave, pode ser dada a comunhão antecipadamente.',
  },
  {
    num: 'Cânone 13', titulo: 'Viáticos aos moribundos', resumo: 'Misericórdia prevalece sobre disciplina',
    detalhe: 'Ninguém deve ser privado da última comunhão em artigo de morte. Se o moribundo se recuperar, deverá retomar a penitência normalmente. Princípio: a misericórdia prevalece sobre a disciplina quando a morte se aproxima — norma que permanece no Direito Canônico.',
  },
  {
    num: 'Cânone 14', titulo: 'Catecúmenos apóstatas', resumo: '3 anos antes de retornar ao catecumenato',
    detalhe: 'Catecúmenos (ainda não batizados) que apostataram devem cumprir 3 anos como simples ouvintes antes de poder retornar ao catecumenato. Misericórdia proporcionalmente maior que com os batizados, pois o compromisso sacramental ainda não havia sido firmado.',
  },
  {
    num: 'Cânone 15', titulo: 'Translação de clérigos', resumo: 'Proibição de mudar de diocese',
    detalhe: 'Bispos, presbíteros e diáconos não podem transferir-se de uma cidade para outra. Visa combater a ambição e garantir estabilidade pastoral. Os que se transferirem devem retornar à diocese de origem — princípio que gerará debates intermináveis na Idade Média.',
  },
  {
    num: 'Cânone 16', titulo: 'Abandono da diocese', resumo: 'Princípio da incardinação',
    detalhe: 'Presbíteros ou diáconos que abandonaram sua diocese sem autorização não podem ser aceitos por outros bispos. O bispo acolhedor deve devolvê-los. Reforça o princípio da incardinação — o vínculo permanente entre o clérigo e sua diocese.',
  },
  {
    num: 'Cânone 17', titulo: 'Usura clerical', resumo: 'Proibição absoluta de cobrar juros',
    detalhe: 'Proíbe absolutamente a cobrança de juros por bispos, presbíteros e diáconos. Quem praticar usura deve ser deposto. Fundamento moral: o clérigo não deve enriquecer à custa dos necessitados — eco de Lv 25,35–37 e Ez 18,8.',
  },
  {
    num: 'Cânone 18', titulo: 'Diaconia e Eucaristia', resumo: 'Hierarquia das ordens sagradas',
    detalhe: 'Os diáconos não devem distribuir a Eucaristia aos presbíteros, pois são ministros inferiores a estes. Os diáconos não devem sentar-se entre os presbíteros. Define hierarquicamente as ordens sagradas e condena práticas que confundiam os graus ministeriais.',
  },
  {
    num: 'Cânone 19', titulo: 'Os Paulianistas', resumo: 'Rebatismo dos seguidores de Paulo de Samósata',
    detalhe: 'Seguidores de Paulo de Samósata devem ser rebatizados (pois Paulo ensinava um monarquianismo dinâmico que esvaziava a Trindade). Nota importante: as diaconisas paulianistas devem ser recebidas como leigas — primeira menção conciliar ao ministério feminino e questão de seu estatuto.',
  },
  {
    num: 'Cânone 20', titulo: 'Genuflexão nos domingos', resumo: 'Orar em pé — sinal da Ressurreição',
    detalhe: 'Proíbe ajoelhar-se durante a oração nos domingos e em todo o período pascal até Pentecostes. A oração de pé é sinal da Ressurreição. Esta prática litúrgica remonta à tradição apostólica (Tertuliano já a menciona). Persiste nas Igrejas Orientais até hoje.',
  },
]

/* ─────────────────────────────────────────
   DADOS — PARTICIPANTES
───────────────────────────────────────── */
const participantesData = [
  { figura: 'Constantino I', posicao: 'Imperador', papel: 'Convocador, financiador, presidente protocolar; pressionou pelo homoousios', doutrina: 'Politicamente pró-unidade; teologicamente maleável' },
  { figura: 'Ossius de Córdoba', posicao: 'Bispo; conselheiro imperial', papel: 'Presidiu os debates teológicos; provável introdutor do homoousios', doutrina: 'Firmemente pró-niceno' },
  { figura: 'Alexandre de Alexandria', posicao: 'Bispo de Alexandria', papel: 'Líder da oposição a Ário; voz principal da ortodoxia', doutrina: 'Pró-niceno' },
  { figura: 'Atanásio de Alexandria', posicao: 'Diácono (secretário de Alexandre)', papel: 'Conselheiro técnico; futuro grande defensor do Credo por décadas', doutrina: 'Pró-niceno fervoroso' },
  { figura: 'Eusébio de Cesareia', posicao: 'Bispo de Cesareia; historiador', papel: 'Propôs credo batismal de Cesareia como base; aceitou homoousios com reservas', doutrina: 'Moderado; subordinacionista suave' },
  { figura: 'Eusébio de Nicomédia', posicao: 'Bispo de Nicomédia', papel: 'Líder do partido ariano; recusou assinar; exilado', doutrina: 'Ariano' },
  { figura: 'Marcelo de Ancira', posicao: 'Bispo de Ancira', papel: 'Pró-niceno ardente; interpretação do homoousios considerada excessiva (quase sabeliana)', doutrina: 'Niceno radical — depois condenado' },
  { figura: 'Eustácio de Antioquia', posicao: 'Bispo de Antioquia', papel: 'Defensor da ortodoxia; combateu vigorosamente o arianismo', doutrina: 'Pró-niceno' },
  { figura: 'Macário de Jerusalém', posicao: 'Bispo de Jerusalém', papel: 'Obteve reconhecimento honorífico para Jerusalém (cânone 7)', doutrina: 'Pró-niceno' },
  { figura: 'Nicolau de Mira', posicao: 'Bispo de Mira', papel: 'Presente; a tradição (não documentada) conta que teria bofeteado Ário', doutrina: 'Pró-niceno' },
  { figura: 'Vítor e Vincêncio', posicao: 'Presbíteros; legados do Papa Silvestre I', papel: 'Representaram Roma; assinaram o Credo em nome do pontífice', doutrina: 'Pró-niceno' },
  { figura: 'Ário', posicao: 'Presbítero de Alexandria', papel: 'Presente para defender sua doutrina; condenado; exilado', doutrina: 'Ariano' },
  { figura: 'Segundo de Ptolemaida e Teona de Marmarica', posicao: 'Bispos', papel: 'Únicos que se recusaram a assinar o Credo até o fim; exilados com Ário', doutrina: 'Arianos irredutíveis' },
]

/* ─────────────────────────────────────────
   SUB-COMPONENTES REUTILIZÁVEIS
───────────────────────────────────────── */

/* Accordion individual */
function Accordion({ titulo, id, children }: { titulo: React.ReactNode; id: string; children: React.ReactNode }) {
  const [aberto, setAberto] = useState(false)
  return (
    <div className={styles.accordion}>
      <button
        className={`${styles.accordionBtn} ${aberto ? styles.aberto : ''}`}
        onClick={() => setAberto(v => !v)}
        aria-expanded={aberto}
        aria-controls={`acc-corpo-${id}`}
      >
        {titulo}
        <span className={styles.accIcon}>▼</span>
      </button>
      <div
        id={`acc-corpo-${id}`}
        className={`${styles.accordionCorpo} ${aberto ? styles.visivel : ''}`}
      >
        {children}
      </div>
    </div>
  )
}

/* Tabs internas */
function TabsInternas({ tabs }: {
  tabs: { id: string; label: React.ReactNode; content: React.ReactNode }[]
}) {
  const [ativa, setAtiva] = useState(tabs[0].id)
  return (
    <div className={styles.tabsInternas}>
      <div className={styles.tabsInternasNav}>
        {tabs.map(t => (
          <button
            key={t.id}
            className={`${styles.tabInternaBtn} ${ativa === t.id ? styles.ativa : ''}`}
            onClick={() => setAtiva(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map(t => (
        <div
          key={t.id}
          className={`${styles.tabInternaPainel} ${ativa === t.id ? styles.visivel : ''}`}
        >
          {t.content}
        </div>
      ))}
    </div>
  )
}

/* Canon card */
function CanonCard({ num, titulo, resumo, detalhe }: typeof canonesData[0]) {
  const [expandido, setExpandido] = useState(false)
  return (
    <div
      className={`${styles.caixaCanon} ${expandido ? styles.expandido : ''}`}
      onClick={() => setExpandido(v => !v)}
    >
      <div className={styles.canonNum}>{num}</div>
      <div className={styles.canonTitulo}>{titulo}</div>
      <div className={styles.canonResumo}>{resumo}</div>
      <div className={styles.canonDetalhe}>{detalhe}</div>
      <span className={styles.canonExpandir} />
    </div>
  )
}

/* Partido card */
function PartidoCard({ tipo, titulo, texto }: { tipo: string; titulo: string; texto: string }) {
  const classMap: Record<string, string> = {
    ariano: styles.partidoAriano,
    niceno: styles.partidoNiceno,
    centro: styles.partidoCentro,
    homoiousiano: styles.partidoHomoiousiano,
    anomoio: styles.partidoAnomoio,
    marcelo: styles.partidoMarcelo,
  }
  return (
    <div className={`${styles.partidoCard} ${classMap[tipo] ?? ''}`}>
      <h4>{titulo}</h4>
      <p>{texto}</p>
    </div>
  )
}

/* ─────────────────────────────────────────
   COMPONENTE PRINCIPAL
───────────────────────────────────────── */
export default function NiceiaI() {
  const router = useRouter()
  const [progressWidth, setProgressWidth] = useState(0)
  const [topoVisivel, setTopoVisivel] = useState(false)
  const [navAtiva, setNavAtiva] = useState('')
  const [sumarioAberto, setSumarioAberto] = useState(false)
  const [sumarioTab, setSumarioTab] = useState<SumarioTab>('p-hist')

  // Controla visibilidade do botão voltar dinâmico
  const [btnVoltarVisivel, setBtnVoltarVisivel] = useState(true)
  const ultimoScrollRef = useRef(0)

  /* Scroll handler */
  const handleScroll = useCallback(() => {
    const doc = document.documentElement
    const scrollAtual = doc.scrollTop
    const prog = (scrollAtual / (doc.scrollHeight - doc.clientHeight)) * 100
    setProgressWidth(prog)
    setTopoVisivel(scrollAtual > 400)

    // ── Lógica do botão voltar dinâmico ──
    if (scrollAtual < 80) {
      setBtnVoltarVisivel(true)
    } else if (scrollAtual > ultimoScrollRef.current + 5) {
      setBtnVoltarVisivel(false)
    } else if (scrollAtual < ultimoScrollRef.current - 5) {
      setBtnVoltarVisivel(true)
    }
    ultimoScrollRef.current = scrollAtual

    // nav lateral ativa
    const secoes = document.querySelectorAll<HTMLElement>('.secao-anchor')
    let atual = ''
    secoes.forEach(s => {
      if (s.getBoundingClientRect().top <= 80) atual = s.id
    })
    setNavAtiva(atual)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollTopo = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const handleVoltar = () => {
    router.push('/estudos/concilios') // Ajuste para sua rota real
  }

  /* ── RENDER ── */
  return (
    <div className={styles.pageWrapper}>
      {/* Barra de progresso */}
      <div className={styles.progressBar} style={{ width: `${progressWidth}%` }} />

      {/* ✨ BOTÃO VOLTAR DINÂMICO */}
      <button
        onClick={handleVoltar}
        className={`${styles.btnVoltarDinamico} ${btnVoltarVisivel ? styles.visivel : ''}`}
        aria-label="Voltar para o índice dos concílios"
      >
        <span className={styles.btnVoltarDinamicoSeta}>←</span>
        <span className={styles.btnVoltarDinamicoTexto}>Voltar</span>
      </button>

      {/* Nav lateral */}
      <nav className={styles.navLateral}>
        {navItems.map(item => (
          <a
            key={item.href}
            href={item.href}
            data-label={item.label}
            className={navAtiva === item.href.replace('#', '') ? styles.ativa : ''}
          />
        ))}
      </nav>

      {/* Botão voltar ao topo */}
      <button
        className={`${styles.btnTopo} ${topoVisivel ? styles.visivel : ''}`}
        onClick={scrollTopo}
        title="Voltar ao topo"
      >
        ↑
      </button>

      <div className={styles.pagina}>

        {/* ══ HEADER ══ */}
        <header className={styles.header} id="topo">
          <h1 className={styles.headerH1}>Concílio de Niceia I</h1>
          <p className={styles.headerAno}>325 d.C.</p>
          <p className={styles.headerLocal}>📍 Niceia, Bitínia (atual İznik, Turquia)</p>
          <p className={styles.headerSubtitulo}>&ldquo;O Concílio dos Concílios&rdquo; — fundação da cristologia ortodoxa</p>
          <div className={styles.badgesRapidos}>
            {[
              ['🏛️', '1.º', 'Concílio Ecumênico'],
              ['👤', 'c. 318', 'bispos'],
              ['⚔️', 'Arianismo', 'Heresia'],
              ['📜', 'Homoousios', 'Palavra-chave'],
              ['👑', 'Constantino I', 'convocador'],
              ['📅', '20 mai – ago 325', ''],
            ].map(([ic, destaque, resto], i) => (
              <span key={i} className={styles.badgeInfo}>
                {ic} <span>{destaque}</span> {resto}
              </span>
            ))}
          </div>
        </header>

        {/* ══ SUMÁRIO TABBED ══ */}
        <nav className={styles.sumarioTabbed}>
          {/* ... resto continua igual ... */}
        </nav>

        {/* ... e todas as suas seções seguem normalmente ... */}
        {/* ══════════════════════════════════════
            2. ANTECEDENTES
        ══════════════════════════════════════ */}
        <section className={`${styles.secao} secao-anchor`} id="antecedentes">
          <div className={styles.secaoHeader}>
            <h2 className={styles.secaoH2}>📜 Antecedentes e Causas Imediatas</h2>
          </div>
          <Accordion id="ant1" titulo={<><strong>A Igreja após o Edito de Milão (313)</strong></>}>
            <p>Após séculos de perseguição, o Edito de Milão (313), promulgado por Constantino I e Licínio, concedeu liberdade religiosa a todos os cultos no Império Romano, inaugurando uma era radicalmente nova para o Cristianismo. Pela primeira vez a Igreja podia reunir-se, debater e estruturar-se publicamente sem risco de martírio.</p>
            <p>Paradoxalmente, essa liberdade trouxe consigo novas tensões internas. Sem o laço unificador da perseguição externa, disputas doutrinárias, disciplinares e jurisdicionais emergiram com força, ameaçando fragmentar uma Igreja que crescia em ritmo acelerado por todo o Mediterrâneo.</p>
          </Accordion>
          <Accordion id="ant2" titulo={<><strong>O Caso de Ário em Alexandria (c. 318)</strong></>}>
            <p>Por volta de 318, o presbítero Ário — provavelmente discípulo de Luciano de Antioquia — passou a pregar abertamente em Alexandria uma doutrina que seu bispo, Alexandre de Alexandria, julgava gravemente errônea. A controvérsia escalou rapidamente, com Ário conquistando aliados influentes, sobretudo Eusébio de Nicomédia.</p>
            <p>Alexandre convocou um sínodo local em Alexandria (c. 318–320), que condenou Ário e o excomungou. Ário, porém, refugiou-se na Palestina e na Síria, continuando a propagar suas ideias. A querela deixara de ser um problema regional: tornara-se uma crise universal.</p>
          </Accordion>
          <Accordion id="ant3" titulo={<><strong>A Intervenção de Constantino e a Decisão de Convocar o Concílio</strong></>}>
            <p>Constantino, recém-tornado senhor único do Império após derrotar Licínio (324), via a disputa teológica como uma ameaça direta à unidade política do Estado. Enviou seu conselheiro eclesiástico Ossius de Córdoba a Alexandria com uma carta conciliatória pedindo paz — missão que fracassou.</p>
            <p>Diante disso, o imperador tomou a decisão sem precedentes de convocar um concílio de âmbito universal: o primeiro da história cristã. O Estado imperial financiaria as viagens e a estadia de todos os participantes — um esforço logístico e financeiro gigantesco.</p>
          </Accordion>
        </section>

        {/* ══════════════════════════════════════
            3. CONTEXTO HISTÓRICO
        ══════════════════════════════════════ */}
        <section className={`${styles.secao} secao-anchor`} id="contexto">
          <div className={styles.secaoHeader}>
            <h2 className={styles.secaoH2}>🏛️ Contexto Histórico Amplo</h2>
          </div>
          <TabsInternas tabs={[
            {
              id: 'ctx1', label: 'O Império em 325',
              content: <>
                <p>Em 325, o Império Romano vivia um momento de rara unidade política. Após a longa crise do século III, a Tetrarquia de Diocleciano havia estabilizado a administração imperial, mas também gerado guerras civis entre imperadores rivais. Constantino, após eliminar seus coadjutores, reinava sozinho sobre Oriente e Ocidente.</p>
                <p>A capital efetiva deslocava-se progressivamente para o Oriente. Constantino estava justamente na fase de planejar a nova capital que chamaria de Constantinopla (fundada oficialmente em 330). Niceia, na Bitínia, era de fácil acesso ao imperador em Nicomédia, sua residência oriental, e oferecia infraestrutura palatina adequada para acolher centenas de bispos.</p>
              </>,
            },
            {
              id: 'ctx2', label: 'Política e Religião',
              content: <>
                <p>Constantino não era ainda batizado em 325 (recebeu o batismo apenas em seu leito de morte, em 337), mas favorecia claramente o Cristianismo com isenções fiscais ao clero, financiamento de basílicas e arbitragem de disputas eclesiásticas. Para ele, a unidade religiosa era instrumento da unidade imperial.</p>
                <p>Esse entrelaçamento entre poder civil e autoridade eclesiástica que começou em Niceia moldaria profundamente a relação entre Igreja e Estado por séculos, gerando tanto proteção quanto interferências indevidas — um padrão que os historiadores chamam de <em>cesaropapismo</em> em suas formas extremas.</p>
              </>,
            },
            {
              id: 'ctx3', label: 'Eclesiologia Pré-Nicena',
              content: <>
                <p>Antes de 325, a Igreja não possuía mecanismo formal para definir doutrina de modo universalmente vinculante. Sínodos locais e regionais existiam desde o século II, mas suas decisões valiam apenas para suas províncias.</p>
                <p>Niceia I inaugurou a instituição do <strong>Concílio Ecumênico</strong> — uma assembleia de bispos de toda a Igreja que, sob a assistência do Espírito Santo, define a fé com autoridade universal e irreformável. Este foi o legado institucional mais duradouro do concílio.</p>
              </>,
            },
          ]} />
        </section>

        {/* ══════════════════════════════════════
            4. ÁRIO E O ARIANISMO
        ══════════════════════════════════════ */}
        <section className={`${styles.secao} secao-anchor`} id="ario">
          <div className={styles.secaoHeader}>
            <h2 className={styles.secaoH2}>⛔ Ário e o Arianismo</h2>
          </div>
          <TabsInternas tabs={[
            {
              id: 'ar1', label: 'Quem era Ário',
              content: <>
                <p>Ário (c. 256–336) nasceu provavelmente na Líbia e foi educado em Antioquia, na escola teológica de Luciano — uma tradição que privilegiava a exegese literal das Escrituras e tendia a subordinar o Filho ao Pai. Ordenado presbítero em Alexandria, tornou-se um pregador popular, de aparência ascética e dotes oratórios consideráveis.</p>
                <p>Chegou a compor hinos e poemas teológicos — a <em>Thalia</em> — para difundir suas ideias entre o povo comum. Esta estratégia de comunicação popular era inédita e revelava um communicator habilidoso. Após sua condenação, Atanásio preservou fragmentos da <em>Thalia</em> em suas obras polêmicas — as únicas fontes diretas do pensamento de Ário que sobreviveram.</p>
              </>,
            },
            {
              id: 'ar2', label: 'A Doutrina',
              content: <>
                <p>O arianismo não era uma negação grosseira da divindade de Cristo. Era uma doutrina sofisticada com premissas filosóficas e bíblicas:</p>
                <ul>
                  <li><strong>Monoteísmo absoluto:</strong> Deus é rigorosamente Uno, ingênito. Se o Filho fosse da mesma substância do Pai, haveria dois deuses.</li>
                  <li><strong>O Filho como primeira criatura:</strong> O Logos foi gerado (criado) pelo Pai antes de todos os séculos. É o mais elevado dos seres, mas ainda assim criado.</li>
                  <li><strong>Subordinacionismo:</strong> &ldquo;O Pai é maior do que eu&rdquo; (Jo 14,28); &ldquo;meu Deus e vosso Deus&rdquo; (Jo 20,17).</li>
                  <li><strong>O lema central:</strong> <em>&ldquo;Ên pote hote ouk ên&rdquo;</em> — &ldquo;Houve [um tempo] quando Ele não era.&rdquo;</li>
                </ul>
                <div className={styles.caixaCitacao} style={{ marginTop: '12px' }}>
                  &ldquo;O Deus não gerou o Filho da sua própria substância, pois isso implicaria que Deus é divisível e mutável; antes, o Filho foi criado do nada pela vontade de Deus.&rdquo;
                  <cite>— Ário, <em>Thalia</em> (fragmento preservado por Atanásio)</cite>
                </div>
              </>,
            },
            {
              id: 'ar3', label: 'Por que era Atraente',
              content: <>
                <p>O arianismo respondia a dificuldades filosóficas reais: como pode Deus ser absolutamente simples e imutável e ao mesmo tempo ter um Filho da mesma substância? Como evitar o diteísmo?</p>
                <p>Sua coerência aparente conquistou bispos cultos, povos germânicos (que seriam evangelizados por missionários arianos) e, por alguns decênios após Niceia, vários imperadores. O arianismo não desapareceu em 325 — na verdade, por um período pareceu que havia vencido.</p>
              </>,
            },
            {
              id: 'ar4', label: 'Resposta Ortodoxa',
              content: <>
                <p>Alexandre de Alexandria e seu jovem secretário Atanásio argumentavam que o arianismo destruía a soteriologia cristã: se Cristo não é verdadeiramente Deus, não pode{' '}
                  <span className={styles.glossarioTermo} data-def="Theosis: participação do ser humano na natureza divina; doutrina central da espiritualidade oriental">
                    deificar
                  </span>{' '}
                  os homens; se não é verdadeiramente homem, não representa a humanidade diante do Pai.</p>
                <p>A salvação exige um mediador que seja plenamente ambos. Era o argumento que Atanásio desenvolveria magistralmente na obra <em>De Incarnatione</em>: &ldquo;Deus se fez homem para que o homem se fizesse Deus.&rdquo;</p>
              </>,
            },
          ]} />
        </section>

        {/* ══════════════════════════════════════
            5. PARTIDOS TEOLÓGICOS
        ══════════════════════════════════════ */}
        <section className={`${styles.secao} secao-anchor`} id="partidos">
          <div className={styles.secaoHeader}>
            <h2 className={styles.secaoH2}>🗂️ Os Seis Partidos Teológicos</h2>
            <span className={styles.secaoNum}>NOVO</span>
          </div>
          <p>O panorama teológico do séc. IV era muito mais fragmentado do que a narrativa simplificada de &ldquo;Atanásio vs. Ário&rdquo; sugere. Havia pelo menos seis posições distintas em campo:</p>
          <div className={styles.mapaPartidos}>
            <PartidoCard tipo="ariano" titulo="⛔ Arianos Estritos (Anomoios)" texto="O Filho é completamente diferente (ἀνόμοιος) do Pai em essência. Aécio e Eunômio foram seus representantes mais radicais no séc. IV. Minoria vocal." />
            <PartidoCard tipo="anomoio" titulo="↘️ Homoianos" texto="O Filho é semelhante ao Pai, segundo as Escrituras — sem especificar em quê. Fórmula vaga, preferida por imperadores que queriam unidade sem compromisso. Constâncio II a promoveu." />
            <PartidoCard tipo="homoiousiano" titulo="🔶 Homoiousianos" texto="O Filho é de substância semelhante (ὁμοιούσιος) ao Pai — não a mesma, mas análoga. Maioria dos bispos orientais. Eram o 'centro moderado' que Niceia precisava conquistar." />
            <PartidoCard tipo="centro" titulo="⚖️ Centro Eusebiano" texto="Liderado por Eusébio de Cesareia. Desconfortáveis com o arianismo mas também com o homoousios por seu histórico suspeito (Paulo de Samósata). Aceitaram Niceia sob pressão." />
            <PartidoCard tipo="niceno" titulo="✅ Nicenos (Homoousianos)" texto="O Filho é da mesma substância (ὁμοούσιος) que o Pai. Alexandre, Atanásio e Ossius. Minoria determinada que conquistou a maioria ao mostrar que qualquer outra fórmula era ambígua." />
            <PartidoCard tipo="marcelo" titulo="⚠️ Marcelanos" texto="Marcelo de Ancira, bispo niceno, foi além: interpretou o homoousios de modo quase sabeliano, comprometendo o próprio partido ortodoxo. Sua posição foi rejeitada depois." />
          </div>
          <div className={styles.caixaAlerta}>
            <strong>Nota crítica:</strong> A distinção entre <em>homoousios</em> (mesma substância) e <em>homoiousios</em> (substância semelhante) é uma única letra grega — iota (ι). Isso levou ao dito histórico de que o destino da teologia cristã &ldquo;dependeu de um iota&rdquo;. A frase exagera, mas captura a precisão terminológica exigida pelo debate.
          </div>
        </section>

        {/* ══════════════════════════════════════
            6. CONVOCAÇÃO
        ══════════════════════════════════════ */}
        <section className={`${styles.secao} secao-anchor`} id="convocacao">
          <div className={styles.secaoHeader}>
            <h2 className={styles.secaoH2}>📣 Convocação, Logística e Abertura</h2>
          </div>
          <h3 className={styles.secaoH3}>Linha do Tempo do Concílio</h3>
          <ul className={styles.linhaTempoList}>
            {[
              ['c. 318–320', 'Ário começa a pregar em Alexandria; sínodo local o condena.'],
              ['c. 320–324', 'A controvérsia se alastra pelo Oriente; Eusébio de Nicomédia apoia Ário.'],
              ['324', 'Constantino torna-se único imperador; envia Ossius a Alexandria — missão fracassa.'],
              ['início de 325', 'Constantino convoca o concílio universal; cartas imperiais financiam viagens e estadia.'],
              ['20 mai. 325', 'Abertura solene no salão do palácio imperial de Niceia; discurso de Constantino em latim.'],
              ['mai.–jun. 325', 'Debates sobre a doutrina ariana; proposta e adoção do homoousios.'],
              ['jun.–jul. 325', 'Redação e aprovação do Credo; debate sobre a Páscoa e o cisma meleciano; promulgação dos 20 cânones.'],
              ['25 jul. 325', 'Banquete imperial (vicennalia — 20 anos de reinado); encerramento festivo.'],
              ['ago. 325', 'Dispersão dos bispos; exílio de Ário e dos dois bispos dissidentes.'],
            ].map(([data, texto]) => (
              <li key={data}>
                <span className={styles.ltData}>{data}</span>{texto}
              </li>
            ))}
          </ul>
          <Accordion id="conv1" titulo={<><strong>A Cerimônia de Abertura — detalhes</strong></>}>
            <p>A sessão inaugural foi descrita por Eusébio de Cesareia na <em>Vita Constantini</em> com linguagem quase litúrgica. Os bispos — muitos deles com marcas físicas das perseguições dioclesianas — foram recebidos como heróis. Constantino entrou por último, vestido de púrpura e ouro, mas recusou sentar-se antes que os bispos lhe dessem permissão.</p>
            <p>Seu discurso inaugural, pronunciado em latim e traduzido ao grego, rogava pela unidade e deplorava a discórdia eclesiástica como mais grave do que qualquer guerra. Entre os participantes estavam Pafnúcio do Egito (privado de um olho, aleijado de uma perna pela perseguição) e Paulo de Neocesareia (com as mãos paralisadas por ferro em brasa). Constantino teria besado reverentemente as feridas de Pafnúcio.</p>
            <p><strong>Sobre as línguas:</strong> Os debates foram conduzidos em grego — a língua comum do Oriente cristão e da teologia patrística. Constantino falava latim e precisava de intérprete. Os bispos ocidentais (minoria) também dependiam de tradução. Esta barreira linguística ajuda a explicar por que o concílio foi dominado teologicamente por vozes orientais.</p>
          </Accordion>
        </section>

        {/* ══════════════════════════════════════
            7. PARTICIPANTES
        ══════════════════════════════════════ */}
        <section className={`${styles.secao} secao-anchor`} id="participantes">
          <div className={styles.secaoHeader}>
            <h2 className={styles.secaoH2}>👥 Participantes e Figuras-Chave</h2>
          </div>
          <p>A tradição canônica fala em 318 bispos — número carregado de simbolismo bíblico (os 318 servos de Abraão em Gn 14,14). Estimativas históricas baseadas em listas de assinaturas apontam para algo entre 250 e 320 bispos. A grande maioria vinha do Oriente grego; apenas algumas dezenas eram do Ocidente latino.</p>
          <table className={styles.tabelaFiguras}>
            <thead>
              <tr>
                <th>Figura</th>
                <th>Posição</th>
                <th>Papel no Concílio</th>
                <th>Posição Doutrinária</th>
              </tr>
            </thead>
            <tbody>
              {participantesData.map((p, i) => (
                <tr key={i}>
                  <td><strong>{p.figura}</strong></td>
                  <td>{p.posicao}</td>
                  <td>{p.papel}</td>
                  <td>{p.doutrina}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ══════════════════════════════════════
            8. DEBATES
        ══════════════════════════════════════ */}
        <section className={`${styles.secao} secao-anchor`} id="debates">
          <div className={styles.secaoHeader}>
            <h2 className={styles.secaoH2}>🗣️ Debates Internos do Concílio</h2>
          </div>
          <Accordion id="deb1" titulo={<><strong>A Proposta de Eusébio de Cesareia e sua Rejeição Estratégica</strong></>}>
            <p>Eusébio de Cesareia apresentou o Credo batismal da Igreja de Cesareia como base para o acordo. Era uma formulação equilibrada, sem afirmar explicitamente o <em>homoousios</em>. Os bispos arianos — percebendo que poderiam reinterpretar seus termos — pareciam dispostos a aceitá-la.</p>
            <p>Foi justamente essa maleabilidade que levou o partido niceno a insistir em um termo mais preciso e irrenunciável. A lógica era simples: qualquer fórmula que os arianos pudessem aceitar de bom grado era uma fórmula insuficiente para excluir o arianismo.</p>
          </Accordion>
          <Accordion id="deb2" titulo={<><strong>A Adoção do <em>Homoousios</em> — Como e Por Quê</strong></>}>
            <p>O termo <em>homoousios</em> (ὁμοούσιος — &ldquo;da mesma substância/essência&rdquo;) foi inserido no Credo proposto por Eusébio, muito provavelmente por iniciativa de Ossius de Córdoba, com o apoio decisivo de Constantino. O imperador, possivelmente aconselhado por Ossius, percebeu que esse era o único termo que os arianos genuinamente não podiam assinar sem se contradizer.</p>
            <p>Havia resistências legítimas: o termo não aparecia explicitamente nas Escrituras e havia sido usado de modo suspeito pelo heresiarca Paulo de Samósata no século anterior. Eusébio de Cesareia enviou uma longa carta à sua diocese explicando por que, afinal, assinou — um documento valioso que sobreviveu e revela as tensões do momento.</p>
            <div className={styles.caixaCitacao}>
              &ldquo;Uma única sílaba — <em>homoousios</em> — separou a ortodoxia do abismo.&rdquo;
              <cite>— John Henry Newman, <em>The Arians of the Fourth Century</em></cite>
            </div>
          </Accordion>
          <Accordion id="deb3" titulo={<><strong>O Papel de Constantino no Processo — Até Onde Ele Interferiu?</strong></>}>
            <p>A questão é historiograficamente sensível. Eusébio de Cesareia, escrevendo na <em>Vita Constantini</em>, apresenta o imperador quase como teólogo providencial. Outros historiadores modernos (especialmente Lewis Ayres em <em>Nicaea and Its Legacy</em>) argumentam que a influência de Constantino foi mais política do que teológica: ele queria unidade a qualquer preço, e o <em>homoousios</em> foi o preço que funcionou.</p>
            <p>O que é certo: Constantino não votou nas decisões doutrinárias, mas sua presença transformou a dinâmica de poder. Bispos que discordavam do <em>homoousios</em> mas desejavam o favor imperial tinham razões extrateológicas para assinar. Isso não invalida o resultado, mas complexifica a narrativa de &ldquo;consenso espontâneo&rdquo;.</p>
          </Accordion>
          <Accordion id="deb4" titulo={<><strong>O Desfecho: Quem Assinou, Quem Recusou, Quem Foi Exilado</strong></>}>
            <p>A votação final foi esmagadoramente favorável ao Credo niceno. Apenas dois bispos — Segundo de Ptolemaida e Teona de Marmarica — recusaram-se absolutamente a assinar e foram exilados juntamente com Ário.</p>
            <p>Eusébio de Nicomédia e Teógnis de Niceia assinaram o Credo mas recusaram-se a assinar o decreto de excomunhão de Ário; foram exilados meses depois por terem comunicado-se com Ário após o concílio. O exílio de Ário na Ilíria durou até cerca de 328.</p>
          </Accordion>
        </section>

        {/* ══════════════════════════════════════
            9. FILOSOFIA TRINITÁRIA
        ══════════════════════════════════════ */}
        <section className={`${styles.secao} secao-anchor`} id="filosofia">
          <div className={styles.secaoHeader}>
            <h2 className={styles.secaoH2}>🔬 Filosofia Trinitária: <em>Ousía</em> e <em>Hypóstasis</em></h2>
            <span className={styles.secaoNum}>NOVO</span>
          </div>
          <p>O debate de Niceia não era apenas bíblico — era profundamente filosófico. Para entendê-lo, é preciso compreender dois termos gregos centrais cujo significado <em>era ele mesmo</em> o objeto da controvérsia:</p>
          <TabsInternas tabs={[
            {
              id: 'fil1', label: 'Ousía',
              content: <>
                <p><strong><em>Ousía</em> (οὐσία)</strong> significa literalmente &ldquo;ser&rdquo;, &ldquo;essência&rdquo; ou &ldquo;substância&rdquo;. Em Aristóteles, designava o que uma coisa é fundamentalmente. Na teologia nicena, <em>ousía</em> refere-se ao que é comum entre Pai, Filho e Espírito Santo — o ser divino que os três compartilham integralmente. &ldquo;Deus&rdquo; (no sentido da natureza divina) é a <em>ousía</em>.</p>
                <p>O problema: o termo nunca aparece explicitamente nas Escrituras com este significado teológico. Os arianos acusavam os nicenos de filosofar em vez de teologizar. Os nicenos respondiam que a filosofia era necessária para excluir interpretações erradas das Escrituras.</p>
              </>,
            },
            {
              id: 'fil2', label: 'Hypóstasis',
              content: <>
                <p><strong><em>Hypóstasis</em> (ὑπόστασις)</strong> significa literalmente &ldquo;o que está abaixo&rdquo; — a subsistência concreta, o modo de ser individual. Na teologia posterior (especialmente dos Capadócios), <em>hypóstasis</em> viria a designar as três &ldquo;pessoas&rdquo; da Trindade: Pai, Filho e Espírito Santo são três <em>hypostaseis</em> de uma única <em>ousía</em>.</p>
                <p>Em 325, porém, <em>hypóstasis</em> ainda era frequentemente usada como sinônimo de <em>ousía</em>. O próprio Credo de Niceia anatematiza os que dizem que o Filho é &ldquo;de outra <em>hypóstasis</em> ou substância (<em>ousía</em>)&rdquo; — tratando os dois termos como equivalentes. Esta ambiguidade causaria enormes confusões nos decênios seguintes.</p>
              </>,
            },
            {
              id: 'fil3', label: 'A Confusão de Niceia',
              content: <>
                <p>A ambiguidade entre <em>ousía</em> e <em>hypóstasis</em> em Niceia gerou um problema: bispos orientais que afirmavam &ldquo;três <em>hypostaseis</em>&rdquo; (querendo dizer três modos concretos de ser) foram acusados de subordinacionismo ou arianismo por bispos ocidentais que entendiam <em>hypóstasis</em> como sinônimo de <em>ousía</em> — e, portanto, &ldquo;três <em>hypostaseis</em>&rdquo; soava como &ldquo;três essências&rdquo;, ou seja, triteísmo.</p>
                <p>Esta confusão terminológica — não uma diferença real de fé — foi o combustível de décadas de acusações mútuas entre nicenos orientais e ocidentais. A solução definitiva viria com os Capadócios: <strong>mia ousía, treis hypostaseis</strong> — uma essência, três hipóstases.</p>
              </>,
            },
            {
              id: 'fil4', label: 'Neoplatonismo',
              content: <>
                <p>Tanto arianos quanto nicenos operavam num ambiente intelectual saturado de <strong>neoplatonismo</strong> — especialmente a filosofia de Plotino (205–270). Para Plotino, o Uno absoluto era radicalmente transcendente e simples; dele emanava o Nous (Intelecto) e depois a Alma do Mundo.</p>
                <p>Os arianos adaptaram este esquema: Deus (o Uno) gera o Logos (análogo ao Nous) como ser intermediário. Os nicenos resistiram a esta lógica emanacionista: o Filho não é um ser intermediário, mas é da mesma natureza do Pai — o que exigiu uma revisão criativa das categorias neoplatônicas à luz da Revelação cristã. Esta tensão entre fé e filosofia é um dos grandes dramas intelectuais da Patrística.</p>
              </>,
            },
          ]} />
        </section>

        {/* ══════════════════════════════════════
            10. CREDO
        ══════════════════════════════════════ */}
        <section className={`${styles.secao} secao-anchor`} id="credo">
          <div className={styles.secaoHeader}>
            <h2 className={styles.secaoH2}>✝️ O Credo de Niceia — Texto e Análise</h2>
          </div>
          <div className={styles.caixaDestaque}>
            <p><em>&ldquo;Cremos em um só Deus, Pai todo-poderoso, criador de todas as coisas visíveis e invisíveis.</em></p>
            <p><em>E em um só Senhor Jesus Cristo, o Filho de Deus, gerado do Pai como Unigênito, isto é, da substância do Pai, Deus de Deus, Luz da Luz, Deus verdadeiro de Deus verdadeiro, gerado, não criado, <strong>consubstancial ao Pai</strong> [homoousios tô Patri], por quem todas as coisas foram feitas, tanto as do céu como as da terra; que por nós, homens, e por nossa salvação desceu, se encarnou e se fez homem, sofreu e ressuscitou ao terceiro dia, subiu aos céus e virá para julgar os vivos e os mortos.</em></p>
            <p><em>E no Espírito Santo.</em></p>
            <p><em>Quanto aos que dizem: &lsquo;Houve [um tempo] quando Ele não era&rsquo;, ou &lsquo;Antes de ser gerado não existia&rsquo;, ou &lsquo;Foi feito do nada&rsquo;, ou que afirmam que o Filho de Deus é de outra hipóstase ou substância, ou que é criável ou mutável — a tais a Igreja Católica anatematiza.&rdquo;</em></p>
          </div>
          <Accordion id="cr1" titulo={<><strong>Análise cláusula por cláusula</strong></>}>
            <ul>
              <li><strong>&ldquo;Gerado, não criado&rdquo;</strong> — Distingue a geração eterna do Filho (processão intradivina, sem início no tempo) da criação do mundo (ato externo de Deus, com início no tempo). Ário confundia as duas categorias deliberadamente.</li>
              <li><strong>&ldquo;Consubstancial ao Pai&rdquo; (<em>homoousios</em>)</strong> — A chave dogmática: o Filho não é semelhante ao Pai (<em>homoios</em>), nem de substância semelhante (<em>homoiousios</em>), mas da mesmíssima substância divina.</li>
              <li><strong>&ldquo;Deus de Deus, Luz da Luz, Deus verdadeiro de Deus verdadeiro&rdquo;</strong> — Acumulação de afirmações que fecham qualquer interpretação subordinacionista.</li>
              <li><strong>Os anátemas finais</strong> — Inéditos num credo batismal; mostram a urgência de excluir explicitamente as proposições arianas. Foram suprimidos no Credo de 381.</li>
              <li><strong>O Espírito Santo mencionado brevemente</strong> — A pneumatologia será desenvolvida apenas em Constantinopla I (381), onde combaterá os pneumatômacos (&ldquo;combatentes contra o Espírito&rdquo;).</li>
            </ul>
          </Accordion>
          <h3 className={styles.secaoH3}>Comparação: Credo de Niceia (325) vs. Niceno-Constantinopolitano (381)</h3>
          <div className={styles.compCredos}>
            <div className={styles.compCol}>
              <div className={`${styles.compColHeader} ${styles.compColHeaderNiceia325}`}>Niceia 325</div>
              <div className={styles.compColCorpo}>
                <p>…gerado do Pai como Unigênito, <span className={styles.diff}>isto é, da substância do Pai</span>…</p>
                <p>…sofreu e ressuscitou…</p>
                <p><em>E no Espírito Santo.</em></p>
                <p><span className={styles.diff}>[Anátemas explícitos contra os arianos]</span></p>
              </div>
            </div>
            <div className={styles.compCol}>
              <div className={`${styles.compColHeader} ${styles.compColHeaderNc381}`}>Niceno-Constantinopolitano 381</div>
              <div className={styles.compColCorpo}>
                <p>…<span className={styles.novo}>e da Virgem Maria</span> se encarnou… sofreu, <span className={styles.novo}>foi crucificado sob Pôncio Pilatos</span>…</p>
                <p><span className={styles.novo}>E no Espírito Santo, Senhor e vivificador, que procede do Pai, que com o Pai e o Filho é adorado e glorificado, que falou pelos profetas.</span></p>
                <p><span className={styles.novo}>E na Igreja una, santa, católica e apostólica…</span></p>
                <p><span className={styles.diff}>[Anátemas suprimidos]</span></p>
              </div>
            </div>
          </div>
          <p className={styles.legendaCredos}>
            <span className={styles.legendaDiff}>amarelo</span> = modificado &nbsp;·&nbsp; <span className={styles.legendaNovo}>verde</span> = adicionado em 381
          </p>
        </section>

        {/* ══════════════════════════════════════
            11. CÂNONES
        ══════════════════════════════════════ */}
        <section className={`${styles.secao} secao-anchor`} id="canones">
          <div className={styles.secaoHeader}>
            <h2 className={styles.secaoH2}>⚖️ Os 20 Cânones Disciplinares</h2>
          </div>
          <p>Clique em qualquer cânone para expandir os detalhes. São a primeira legislação eclesiástica de alcance universal da história cristã.</p>
          <div className={styles.canonesGrid}>
            {canonesData.map(c => <CanonCard key={c.num} {...c} />)}
          </div>
        </section>

        <hr className={styles.divisor} />

        {/* ══════════════════════════════════════
            12. PÁSCOA
        ══════════════════════════════════════ */}
        <section className={`${styles.secao} secao-anchor`} id="pascoa">
          <div className={styles.secaoHeader}>
            <h2 className={styles.secaoH2}>🌕 A Questão da Páscoa</h2>
          </div>
          <TabsInternas tabs={[
            {
              id: 'pas1', label: 'O Problema',
              content: <>
                <p>Uma das questões mais práticas e divisivas debatidas em Niceia foi a data da celebração da Páscoa. Desde os primeiros séculos, duas tradições coexistiam:</p>
                <ul>
                  <li><strong>Tradição quartodecimana:</strong> Predominante na Ásia Menor e Síria, celebrava a Páscoa no 14 de Nisã do calendário judaico — o dia da Páscoa hebraica — independentemente do dia da semana. Reivindicava origem apostólica (João e Filipe).</li>
                  <li><strong>Tradição romana e alexandrina:</strong> Celebrava a Páscoa sempre no domingo após o 14 de Nisã, enfatizando a Ressurreição (que ocorreu num domingo) como centro da celebração cristã.</li>
                </ul>
                <p>O problema prático era sério: cristãos da mesma cidade podiam celebrar a Páscoa em datas diferentes. Para Constantino, isso era inaceitável — símbolo visível de divisão num Império que ele queria unificado.</p>
              </>,
            },
            {
              id: 'pas2', label: 'A Decisão',
              content: <>
                <p>O concílio determinou que a Páscoa seria celebrada no <strong>primeiro domingo após a primeira lua cheia posterior ao equinócio de primavera</strong> — seguindo o método de cálculo alexandrino, que usava o equinócio de 21 de março como referência fixa. Roma e Alexandria foram encarregadas de calcular e comunicar a data anualmente.</p>
                <div className={styles.caixaCitacao}>
                  &ldquo;Parecia indigno calcular esta festa santíssima segundo o costume dos judeus, que mancharam suas mãos com um crime enorme e que, com a mente obcecada, são guiados não pela razão mas pelo impulso.&rdquo;
                  <cite>— Constantino I, carta circular após o Concílio (preservada por Eusébio, <em>Vita Constantini</em> III, 18)</cite>
                </div>
              </>,
            },
            {
              id: 'pas3', label: 'Consequências',
              content: <>
                <p>A questão nunca foi completamente resolvida. Diferentes métodos de calcular o equinócio e a lua cheia levaram a discrepâncias persistentes:</p>
                <ul>
                  <li>A <strong>Páscoa ortodoxa</strong> (calendário juliano) frequentemente cai em data diferente da católica e protestante (calendário gregoriano, reformado em 1582).</li>
                  <li>A diferença pode chegar a <strong>5 semanas</strong> em alguns anos.</li>
                  <li>A <strong>Igreja Copta</strong> e outras Orientais usam seus próprios métodos de cálculo.</li>
                  <li>A unificação da data da Páscoa é um dos temas centrais no <strong>diálogo ecumênico contemporâneo</strong> — o Conselho Mundial de Igrejas propôs fórmulas de compromisso, até hoje sem adoção universal.</li>
                </ul>
              </>,
            },
          ]} />
        </section>

        {/* ══════════════════════════════════════
            13. CISMA MELECIANO
        ══════════════════════════════════════ */}
        <section className={`${styles.secao} secao-anchor`} id="melecio">
          <div className={styles.secaoHeader}>
            <h2 className={styles.secaoH2}>✂️ O Cisma Meleciano</h2>
          </div>
          <Accordion id="mel1" titulo={<><strong>Origem do Cisma — O Que Aconteceu no Egito</strong></>}>
            <p>Durante a perseguição de Diocleciano (303–311), Melécio, bispo de Licópolis no Alto Egito, havia desobedecido ao bispo Pedro de Alexandria de duas maneiras graves: ordenou clérigos em dioceses alheias (violando os limites jurisdicionais) e adotou uma posição de extremo rigorismo em relação aos <em>lapsi</em> — cristãos que tinham apostado sob tortura.</p>
            <p>Pedro de Alexandria, seguindo uma política de clemência pastoral com os apóstatas arrependidos, entrou em conflito direto com Melécio. Quando Pedro foi martirizado em 311, Melécio continuou a agir independentemente, criando uma hierarquia paralela no Egito — a &ldquo;Igreja da Martíria&rdquo; ou &ldquo;Igreja dos Mártires&rdquo;, como seus seguidores a chamavam.</p>
            <p>O paradoxo era cruel: Melécio reivindicava maior pureza precisamente porque havia resistido às pressões da perseguição, enquanto acusava a hierarquia alexandrina de laxismo. Mas sua desobediência canônica era ela mesma uma forma de ruptura com a unidade eclesial.</p>
          </Accordion>
          <Accordion id="mel2" titulo={<><strong>A Solução de Niceia — Misericórdia Calculada</strong></>}>
            <p>O concílio foi relativamente misericordioso com os melecianos. As decisões foram:</p>
            <ul>
              <li>Melécio conservaria o título de bispo, mas sem jurisdição real e sem autoridade para ordenar novos clérigos.</li>
              <li>Os clérigos melecianos ordenados irregularmente seriam reconhecidos, mas subordinados aos bispos católicos legítimos.</li>
              <li>Ao morrer bispos melecianos, os católicos poderiam ser eleitos em seu lugar.</li>
              <li>Os melecianos não poderiam eleger candidatos próprios sem aprovação de Alexandre de Alexandria.</li>
            </ul>
            <p>A lógica era de integração gradual: absorver o cisma sem humilhação desnecessária, preservando a unidade da Igreja no Egito. Na prática, a solução foi frágil.</p>
          </Accordion>
          <Accordion id="mel3" titulo={<><strong>O Fracasso da Solução e a Aliança com os Arianos</strong></>}>
            <p>Os melecianos logo se aliaram ao partido ariano — uma aliança de conveniência, pois compartilhavam o inimigo comum: Atanásio de Alexandria. Foram os melecianos que forneceram a Eusébio de Nicomédia algumas das acusações disciplinares fabricadas que resultaram no primeiro exílio de Atanásio (335).</p>
            <p>O cisma meleciano persistiu no Egito até pelo menos o séc. V, enfraquecendo progressivamente sem nunca ser formalmente resolvido. É um exemplo dos limites das soluções conciliares quando a divisão tem raízes pastorais e pessoais profundas — não apenas doutrinárias.</p>
          </Accordion>
        </section>

        {/* ══════════════════════════════════════
            14. HERESIAS
        ══════════════════════════════════════ */}
        <section className={`${styles.secao} secao-anchor`} id="heresias">
          <div className={styles.secaoHeader}>
            <h2 className={styles.secaoH2}>⚠️ Heresias e Cismas Combatidos</h2>
          </div>
          <TabsInternas tabs={[
            {
              id: 'her1',
              label: <span>Arianismo <span className={styles.tag} style={{ fontSize: '0.65rem', padding: '1px 6px' }}>Principal</span></span>,
              content: <>
                <p>O arianismo foi a razão de ser do concílio. Sua condenação foi explícita tanto no Credo (com o <em>homoousios</em>) quanto nos anátemas finais que listavam e rejeitavam as proposições arianas uma a uma.</p>
                <p><strong>Lema condenado:</strong> <em>&ldquo;Ên pote hote ouk ên&rdquo;</em> — &ldquo;Houve um tempo quando Ele não era.&rdquo;</p>
                <p><strong>Proposições anatemizadas pelo Credo:</strong> que o Filho foi feito do nada; que existiu um tempo quando Ele não era; que é de outra substância do que o Pai; que é mutável ou criável.</p>
              </>,
            },
            {
              id: 'her2', label: 'Subordinacionismo',
              content: <>
                <p>Mesmo entre os não-arianos havia bispos que sustentavam formas suaves de subordinacionismo — a ideia de que o Filho é de algum modo inferior ao Pai em ser ou dignidade. O centro eusebiano era o lar desta posição.</p>
                <p>Niceia condenou implicitamente todas essas posições ao insistir no <em>homoousios</em>. A questão é que muitos desses bispos &ldquo;subordinacionistas suaves&rdquo; não reconheciam a si mesmos como hereges — e tinham boas razões escriturísticas para suas posições. O processo de convencê-los levou décadas após o concílio.</p>
              </>,
            },
            {
              id: 'her3', label: 'Novacianism',
              content: <>
                <p>Novaciano (Roma, séc. III) ensinou que a Igreja não tem poder de perdoar pecados graves pós-batismo — apostasia, homicídio, adultério. Esta posição rigorista criou uma Igreja separada que ainda existia no séc. IV com bispos e dioceses próprias.</p>
                <p>O cânone 8 admitiu seus clérigos sem reordenação, exigindo apenas total adesão à doutrina e prática católica — uma solução ecumênica <em>avant la lettre</em>. A diferença com os melecianos é que os novacianos tinham uma questão doutrinária (o poder das chaves), enquanto os melecianos tinham um cisma primariamente disciplinar.</p>
              </>,
            },
            {
              id: 'her4', label: 'Paulianismo',
              content: <>
                <p>Paulo de Samósata (bispo de Antioquia, condenado no sínodo de Antioquia em 268) ensinava um <strong>monarquianismo dinâmico</strong>: Jesus era um homem comum em quem o Logos divino habitava como potência impessoal — não se unindo hipostaticamente a Ele.</p>
                <p>O cânone 19 determinou que seus batizados deviam ser rebatizados — pois haviam sido batizados em nome de um mero homem, não do Deus trinitário. Uma das raras instâncias em que Niceia determinou rebatismo, revelando que considerava o batismo paulianista radicalmente inválido.</p>
              </>,
            },
            {
              id: 'her5', label: 'Melecianism',
              content: <>
                <p>O melecianism não era heresia doutrinária — Melécio e seus seguidores eram teologicamente ortodoxos. Era um <strong>cisma disciplinar</strong>, nascido de conflitos jurisdicionais e de diferentes políticas pastorais em tempo de perseguição.</p>
                <p>Esta distinção é importante: Niceia tratou diferentemente heresia (arianismo, paulianismo) e cisma (melecianism, novacianism). Para os primeiros, a condenação doutrinária foi o instrumento. Para os segundos, a negociação pastoral e a reintegração gradual foram preferidas — com resultados mistos.</p>
              </>,
            },
          ]} />
        </section>

        {/* ══════════════════════════════════════
            15. AUTORIDADES
        ══════════════════════════════════════ */}
        <section className={`${styles.secao} secao-anchor`} id="autoridades">
          <div className={styles.secaoHeader}>
            <h2 className={styles.secaoH2}>👑 Papas, Imperadores e Autoridades</h2>
          </div>
          <Accordion id="aut1" titulo={<><strong>Constantino I (c. 272–337) — O Imperador que Convocou o Concílio</strong></>}>
            <p>Constantino nasceu provavelmente em Níssia (Moésia Superior) e era filho de Constâncio Cloro e de Helena — futura santa, arqueóloga da Vera Cruz. Proclamado imperador pelas tropas em Eboracum (York) em 306, conquistou o Ocidente ao derrotar Maxêncio na Batalha da Ponte Mílvia (312) — precedida, segundo a tradição, pela visão do Chi-Rho e da inscrição <em>&ldquo;In hoc signo vinces&rdquo;</em>.</p>
            <p>Seu papel em Niceia foi de convocador, financiador e árbitro político — não de árbitro teológico. O fato de não ser ainda batizado tornava sua presença e influência teologicamente ambíguas. Aceitou o <em>homoousios</em> como solução política: era o único termo que fechava o debate de modo irrevogável.</p>
            <p>Curiosidade historiográfica: Constantino foi batizado em seu leito de morte (337) por Eusébio de Nicomédia — o próprio bispo ariano que havia sido exilado após Niceia e depois reabilitado. A ironia não escapou aos historiadores nicenos.</p>
          </Accordion>
          <Accordion id="aut2" titulo={<><strong>Papa Silvestre I (314–335) — O Ausente Presente</strong></>}>
            <p>Silvestre I governou a Igreja de Roma durante todo o período de Niceia, mas sua ausência física do concílio é historicamente certa. Enviou dois presbíteros — Vítor e Vincêncio — como seus legados, que assinaram o Credo em seu nome e ocuparam os primeiros lugares na lista de assinaturas, antes dos bispos orientais — sinal do prestígio protocolar de Roma.</p>
            <p>A tradição posterior atribuiu a Silvestre e Constantino documentos como a &ldquo;Doação de Constantino&rdquo; — supostamente cedendo ao papa o domínio temporal do Ocidente. O humanista Lorenzo Valla demonstrou em 1440 que o documento era uma falsificação medieval. Este episódio é um exemplo dos perigos de reconstruir Niceia com base em fontes posteriores e tendenciosas.</p>
          </Accordion>
          <Accordion id="aut3" titulo={<><strong>Alexandre de Alexandria (312–328) — O Iniciador da Crise</strong></>}>
            <p>Bispo de Alexandria desde 312, Alexandre foi o primeiro a confrontar Ário formalmente e a lançar a crise que levaria a Niceia. Sua <em>Epístola Encíclica</em>, enviada a todos os bispos, foi o primeiro documento que transformou uma disputa local num problema universal.</p>
            <p>Em Niceia, liderou o partido niceno ao lado de Ossius, com seu jovem diácono Atanásio como principal conselheiro técnico. Faleceu três anos após o concílio, em 328, sendo sucedido por Atanásio — que levaria a bandeira nicena por mais de quarenta anos de exílios e perseguições.</p>
          </Accordion>
          <Accordion id="aut4" titulo={<><strong>Atanásio de Alexandria (c. 296–373) — &ldquo;Contra o Mundo&rdquo;</strong></>}>
            <p>Presente em Niceia como jovem diácono e secretário de Alexandre, Atanásio tornar-se-ia a figura mais determinante para a recepção de Niceia. Cinco vezes exilado por imperadores pró-arianos — a frase latina <em>&ldquo;Athanasius contra mundum&rdquo;</em> captura sua tenacidade solitária.</p>
            <ul>
              <li><strong>335–337:</strong> 1.º exílio — Tréveris (Gália), por Constantino I</li>
              <li><strong>339–346:</strong> 2.º exílio — Roma, por Constâncio II</li>
              <li><strong>356–362:</strong> 3.º exílio — deserto egípcio, por Constâncio II</li>
              <li><strong>362–363:</strong> 4.º exílio — por Juliano Apóstata</li>
              <li><strong>365–366:</strong> 5.º exílio — por Valente</li>
            </ul>
            <p>Doutor da Igreja, comemorado em 2 de maio. Sua obra <em>De Incarnatione</em> é considerada um dos mais belos textos da patrística grega — e a melhor exposição do argumento soteriológico que fundamenta o <em>homoousios</em>.</p>
          </Accordion>
          <Accordion id="aut5" titulo={<><strong>Ossius de Córdoba (c. 256–357) — O Arquiteto Esquecido</strong></>}>
            <p>Ossius (ou Ósio) de Córdoba é frequentemente o personagem menos lembrado de Niceia, apesar de provavelmente ter sido o mais influente nos bastidores. Bispo de Córdoba desde antes de 300, sobreviveu às perseguições de Diocleciano e tornou-se o principal conselheiro eclesiástico de Constantino.</p>
            <p>Foi ele quem presidiu os debates teológicos em Niceia, e a maioria dos historiadores considera que foi ele — e não Constantino — quem propôs ou ao menos promoveu o <em>homoousios</em> como solução teológica.</p>
            <p>Aos cerca de 100 anos de idade, sob intensa pressão do imperador Constâncio II, assinou uma fórmula semi-ariana de Sirmium — ato que lamentou publicamente antes de morrer e que manchou o fim de uma vida extraordinária de fidelidade à ortodoxia.</p>
          </Accordion>
        </section>

        {/* ══════════════════════════════════════
            16. OS CAPADÓCIOS
        ══════════════════════════════════════ */}
        <section className={`${styles.secao} secao-anchor`} id="capadocios">
          <div className={styles.secaoHeader}>
            <h2 className={styles.secaoH2}>🏔️ Os Capadócios e a Recepção Nicena</h2>
            <span className={styles.secaoNum}>NOVO</span>
          </div>
          <p>Niceia (325) definiu o <em>que</em> crer. Mas a batalha para que essa definição fosse compreendida, aceita e articulada filosoficamente durou mais cinquenta anos — e foi travada principalmente por três bispos da Capadócia (região da Anatólia central), os chamados <strong>Grandes Capadócios</strong>:</p>
          <div className={styles.mapaPartidos}>
            <PartidoCard tipo="niceno" titulo="📖 Basílio de Cesareia (330–379)" texto="Bispo de Cesareia da Capadócia. Arquiteto da fórmula definitiva: mia ousía, treis hypostaseis (uma essência, três hipóstases). Sua obra Contra Eunômio demoliu o arianismo radical. Doutor da Igreja. Organizador do monaquismo oriental." />
            <PartidoCard tipo="niceno" titulo="🔥 Gregório de Nissa (335–394)" texto="Irmão de Basílio. O mais especulativo dos três — desenvolveu a teologia da theosis e da infinitude divina. Sua Oratio Catechetica é o primeiro grande tratado sistemático de teologia trinitária pós-nicena." />
            <PartidoCard tipo="niceno" titulo="🎙️ Gregório Nazianzeno (329–390)" texto='"O Teólogo" por excelência. Presidiu o Concílio de Constantinopla I (381). Seus Discursos Teológicos são o ápice da teologia trinitária patrística e a chave para entender como Niceia foi recebida e aprofundada.' />
          </div>
          <Accordion id="cap1" titulo={<><strong>A Solução Capadócia: <em>Mia Ousía, Treis Hypostaseis</em></strong></>}>
            <p>O problema que os Capadócios resolveram era o seguinte: em Niceia, <em>ousía</em> e <em>hypóstasis</em> eram usadas quase como sinônimos. Isso tornava impossível falar de &ldquo;três hipóstases&rdquo; sem soar como se houvesse três essências — o que seria triteísmo.</p>
            <p>A solução de Basílio foi estabelecer uma distinção clara e permanente:</p>
            <ul>
              <li><strong><em>Ousía</em></strong> = o que é comum, a natureza divina compartilhada pelos três. &ldquo;Deus&rdquo; enquanto natureza.</li>
              <li><strong><em>Hypóstasis</em></strong> = o que é próprio de cada um: o Pai é ingênito; o Filho é gerado; o Espírito procede. Cada hipóstase se distingue pela sua relação com as outras, não por ter uma natureza diferente.</li>
            </ul>
            <p>Com esta fórmula — <strong>mia ousía, treis hypostaseis</strong> — os Capadócios permitiram que bispos orientais que afirmavam &ldquo;três hipóstases&rdquo; (por fidelidade à distinção real das Pessoas) pudessem se reconciliar com o Credo de Niceia sem abandonar sua tradição.</p>
          </Accordion>
          <Accordion id="cap2" titulo={<><strong>Como Niceia foi Recebida pelos Capadócios — Não Como Ruptura, mas Como Sementes</strong></>}>
            <p>Um ponto crucial da historiografia moderna (especialmente Lewis Ayres e Michel René Barnes) é que os Capadócios não simplesmente &ldquo;aplicaram&rdquo; Niceia — eles o <em>releram</em> criativamente. O <em>homoousios</em> de 325 era uma palavra-chave poderosa mas filosoficamente subdesenvolvida. Os Capadócios deram-lhe o arcabouço filosófico que lhe faltava.</p>
            <p>Gregório Nazianzeno, ao presidir Constantinopla I (381), foi o responsável por fazer os bispos orientais moderados — os chamados <em>homoiousianos</em>, que diziam &ldquo;substância semelhante&rdquo; — compreenderem que o <em>homoousios</em> de Niceia não era sabelianismo, mas a única forma de garantir a distinção real das Pessoas sem comprometer a unidade divina.</p>
          </Accordion>
          <div className={styles.caixaDestaque}>
            <strong>Conexão direta com Niceia:</strong> Sem os Capadócios, o Credo de Niceia (325) poderia ter permanecido letra morta ou ter sido substituído por fórmulas arianas ou semi-arianas. Foram eles que transformaram a palavra <em>homoousios</em> de slogan polêmico em teologia viva — e que pavimentaram o caminho para Constantinopla I (381), onde o Credo foi expandido e definitivamente confirmado.
          </div>
        </section>

        {/* ══════════════════════════════════════
            17. PÓS-CONCÍLIO
        ══════════════════════════════════════ */}
        <section className={`${styles.secao} secao-anchor`} id="pos-concilio">
          <div className={styles.secaoHeader}>
            <h2 className={styles.secaoH2}>🔄 Pós-Concílio: A Longa Crise Ariana (325–381)</h2>
          </div>
          <TabsInternas tabs={[
{
id: 'pos1', label: 'O Retorno de Ário',
content: <>
<p>Exilado em 325, Ário foi reabilitado por Constantino por volta de 334–335, em parte pela influência de Eusébio de Nicomédia — que havia retornado do exílio e conquistado a confiança do imperador através de sua habilidade política.</p>
<p>Preparava-se um recebimento litúrgico de Ário em Constantinopla — um ato que, na prática, significaria a reintegração oficial do arianismo. Na véspera da cerimônia, Ário morreu subitamente (336) de modo que os historiadores antigos descreveram com detalhes escatológicos. Os nicenos o interpretaram como julgamento divino; os arianos, como assassinato por envenenamento. A causa real é desconhecida.</p>
</>,
},
{
id: 'pos2', label: 'Imperadores Arianos',
content: <>
<p>Após a morte de Constantino (337), o Império foi dividido entre seus três filhos. Constâncio II, que governou o Oriente e depois todo o Império (353–361), era abertamente simpatizante do arianismo. Sob sua pressão:</p>
<ul>
<li><strong>Concílio de Tiro (335):</strong> Exilou Atanásio usando acusações disciplinares fabricadas pelos melecianos.</li>
<li><strong>Sirmium (351, 357, 358):</strong> As “blasfêmias de Sirmium” propunham fórmulas que evitavam o <em>homoousios</em>.</li>
<li><strong>Rimini-Selêucia (359):</strong> Duplo concílio que adotou uma fórmula <em>homoiana</em> vaga — levando Jerônimo a escrever: <em>“O mundo acordou e descobriu-se ariano.”</em></li>
<li><strong>Valente (364–378):</strong> Último imperador pró-ariano do Oriente; perseguiu os nicenos até sua morte na Batalha de Adrianópolis.</li>
</ul>
</>,
},
{
id: 'pos3', label: 'Os 5 Exílios',
content: <>
<ul className={styles.linhaTempoList}>
{[
['335–337', '1.º exílio de Atanásio — Tréveris (Gália), por Constantino I, após o Concílio de Tiro.'],
['339–346', '2.º exílio — Roma. Atanásio encontra o Papa Júlio I; o Ocidente o defende.'],
['356–362', '3.º exílio — deserto egípcio, por Constâncio II. Escreve suas maiores obras anti-arianas.'],
['362–363', '4.º exílio — por Juliano Apóstata, paradoxalmente, que queria enfraquecer o Cristianismo fomentando suas divisões.'],
['365–366', '5.º exílio — por Valente. Durou apenas oito meses; a pressão popular forçou seu retorno.'],
['366–373', 'Últimos anos em Alexandria; morre em paz, bispo de sua cidade.'],
].map(([data, texto]) => (
<li key={data}>
<span className={styles.ltData}>{data}</span>{texto}
</li>
))}
</ul>
</>,
},
{
id: 'pos4', label: 'Resolução (381)',
content: <>
<p>O imperador Teodósio I, firmemente niceno, convocou o Segundo Concílio Ecumênico em Constantinopla (381). Sob a presidência de Gregório Nazianzeno, e com a contribuição teológica dos Capadócios, o concílio:</p>
<ul>
<li>Reafirmou e expandiu o Credo de Niceia.</li>
<li>Definiu a plena divindade do Espírito Santo — lacuna deixada em 325.</li>
<li>Condenou o <em>macedonianismo/pneumatômaco</em> (que negava a divindade do Espírito).</li>
<li>Condenou o <em>apolinarismo</em> (que negava a alma humana de Cristo).</li>
<li>Elevou Constantinopla ao segundo lugar de honra após Roma — decisão que irritou Alexandria.</li>
</ul>
<p>O Credo Niceno-Constantinopolitano resultante é o que a Igreja recita até hoje — o monumento conjunto de Niceia (325) e Constantinopla (381).</p>
</>,
},
{
id: 'pos5', label: 'Arianismo Germânico',
content: <>
<p>Mesmo após 381, o arianismo sobreviveu entre os povos germânicos evangelizados pelo bispo <strong>Úlfilas</strong> (311–383), que havia traduzido a Bíblia ao gótico — a primeira tradução bíblica para uma língua germânica, feita por um ariano.</p>
<p>Visigodos, Ostrogodos, Vândalos, Burgúndios e Lombardos foram arianos por séculos. O arianismo germânico não era teologicamente sofisticado — era mais uma identidade étnica e política do que um sistema teológico elaborado.</p>
<ul>
<li><strong>589:</strong> Conversão do rei visigodo Recaredo ao catolicismo — marco do fim do arianismo ibérico.</li>
<li><strong>Séc. VII:</strong> Conversão dos lombardos — fim do arianismo na Itália.</li>
<li><strong>Hoje:</strong> Denominações como Testemunhas de Jeová e Unitaristas retomam posições funcionalmente próximas ao arianismo, embora sem continuidade histórica direta.</li>
</ul>
</>,
},
]} />
</section>
    {/* ══════════════════════════════════════
        18. RECEPÇÃO ECUMÊNICA
    ══════════════════════════════════════ */}
    <section className={`${styles.secao} secao-anchor`} id="recepcao">
      <div className={styles.secaoHeader}>
        <h2 className={styles.secaoH2}>🌐 Recepção Ecumênica</h2>
      </div>
      <Accordion id="rec1" titulo={<><strong>Igreja Católica Romana</strong></>}>
        <p>Niceia I é o primeiro dos 21 concílios ecumênicos reconhecidos pela Igreja Católica. Seu Credo e seus cânones têm autoridade dogmática e disciplinar plena. O <em>homoousios</em> é considerado definição irreformável de fé — nenhum concílio posterior pode contradizê-la, apenas aprofundá-la.</p>
        <p>A interpretação católica do Cânone 6 (primado de Roma, Alexandria e Antioquia) afirma que o cânone reconhece um primado jurisdicional de Roma sobre toda a Igreja, com Alexandria e Antioquia como primados regionais subordinados. Esta leitura é contestada pelos ortodoxos.</p>
      </Accordion>
      <Accordion id="rec2" titulo={<><strong>Igreja Ortodoxa</strong></>}>
        <p>As Igrejas Ortodoxas reconhecem os sete primeiros concílios ecumênicos (até Niceia II em 787) como plenamente vinculantes. Niceia I ocupa lugar especial — é o concílio por excelência, ponto de referência de toda a teologia ortodoxa.</p>
        <p>A divergência com Roma sobre o Cânone 6 é significativa: os ortodoxos leem o cânone como reconhecimento de primados <em>regionais</em> antigos, não de jurisdição universal do Papa. Para os ortodoxos, o Bispo de Roma tem primado de honra (<em>primus inter pares</em>), não jurisdição sobre as demais Igrejas autocéfalas.</p>
        <p>O <em>Filioque</em> — adição latina ao Credo afirmando que o Espírito procede do Pai &ldquo;e do Filho&rdquo; — é rejeitado pelos ortodoxos como adulteração unilateral de um texto conciliar vinculante. Para eles, alterar o Credo sem um novo concílio ecumênico era e é inaceitável.</p>
      </Accordion>
      <Accordion id="rec3" titulo={<><strong>Igrejas Orientais Antigas (não-calcedonianas)</strong></>}>
        <p>As Igrejas Copta, Etiópica, Armênia, Síria Ocidental (jacobita) e Malanquesa aceitam plenamente Niceia I e Constantinopla I. Divergem apenas a partir de Éfeso (431) e Calcedônia (451) — donde o nome &ldquo;pré-calcedoniana&rdquo; ou &ldquo;miafisita&rdquo;.</p>
        <p>O Credo niceno é recitado em suas liturgias em copta, ge&apos;ez (etíope), armênio e siríaco. A teologia do <em>homoousios</em> é integralmente abraçada. Estas igrejas representam uma continuidade impressionante com a teologia nicena nas línguas e culturas da cristandade oriental primitiva.</p>
      </Accordion>
      <Accordion id="rec4" titulo={<><strong>Protestantismo Histórico e Anglicanismo</strong></>}>
        <p>Lutero, Calvino e os reformadores aceitaram Niceia I como concílio legítimo e seu Credo como expressão fiel da Escritura. As confissões protestantes históricas (Augsburgo, Heidelberg, Westminster) afirmam o Credo Niceno.</p>
        <p>Os 39 Artigos da Igreja da Inglaterra afirmam que os três primeiros concílios (Niceia, Constantinopla, Éfeso) têm autoridade por estarem de acordo com as Escrituras. O Credo Niceno é parte obrigatória do <em>Book of Common Prayer</em>.</p>
        <p>Denominações que rejeitam o <em>homoousios</em> — Unitaristas, Testemunhas de Jeová, Mórmons — estão fora do consensus trinitário definido em Niceia e não são consideradas &ldquo;cristãs&rdquo; pelas tradições históricas.</p>
      </Accordion>
      <Accordion id="rec5" titulo={<><strong>Igreja Assíria do Oriente</strong></>}>
        <p>A Igreja Assíria do Oriente — historicamente chamada &ldquo;nestoriana&rdquo; — aceita Niceia I e Constantinopla I, mas rejeita os concílios a partir de Éfeso (431). Recita uma versão do Credo niceno em aramaico — a língua mais próxima do aramaico que Jesus falava.</p>
        <p>Em 1994, o Papa João Paulo II e o Patriarca Dinkha IV assinaram uma <em>Declaração Cristológica Comum</em> reconhecendo que a diferença entre as duas Igrejas era mais terminológica do que doutrinária — um resultado direto de se voltar à base comum de Niceia.</p>
      </Accordion>
    </section>

    {/* ══════════════════════════════════════
        19. DIMENSÃO LITÚRGICA
    ══════════════════════════════════════ */}
    <section className={`${styles.secao} secao-anchor`} id="liturgia">
      <div className={styles.secaoHeader}>
        <h2 className={styles.secaoH2}>🕯️ Dimensão Litúrgica do Credo</h2>
        <span className={styles.secaoNum}>NOVO</span>
      </div>
      <p>Um aspecto frequentemente ignorado em apresentações do Concílio de Niceia é que o Credo de 325 não foi originalmente composto para ser recitado na liturgia dominical — e sua trajetória até a missa é longa e fascinante.</p>
      <TabsInternas tabs={[
        {
          id: 'lit1', label: 'Origem Litúrgica',
          content: <>
            <p>O Credo de Niceia não nasceu como credo batismal — nasceu como <strong>definição dogmática</strong> para excluir o arianismo. Os credos batismais pré-nicenos (como o &ldquo;Credo Apostólico&rdquo;) eram interrogatórios: &ldquo;Crês em Deus Pai todo-poderoso? — Creio. Crês em Jesus Cristo? — Creio.&rdquo;</p>
            <p>A forma declarativa (&ldquo;Cremos em...&rdquo;) do Credo de Niceia era nova — uma afirmação coletiva de fé, não um diálogo. Foi concebida para ser assinada pelos bispos, não cantada pelos fiéis. Sua entrada no culto foi gradual e não-linear.</p>
          </>,
        },
        {
          id: 'lit2', label: 'Entrada na Missa',
          content: <>
            <p>A introdução do Credo Niceno-Constantinopolitano na liturgia deu-se em etapas:</p>
            <ul>
              <li><strong>c. 476:</strong> O patriarca Pedro Gnafeu de Antioquia foi o primeiro a introduzi-lo na liturgia dominical — inicialmente como gesto anti-calcedoniano.</li>
              <li><strong>Séc. VI (Oriente):</strong> O Credo passa a ser recitado regularmente na liturgia das Igrejas orientais antes da anáfora eucarística.</li>
              <li><strong>589:</strong> O III Concílio de Toledo (Espanha visigótica) introduz o Credo na missa latina — com o acréscimo do <em>Filioque</em>.</li>
              <li><strong>Séc. IX:</strong> Carlos Magno e o Império Franco adotam o Credo com <em>Filioque</em> — gerando o conflito com Constantinopla.</li>
              <li><strong>1014:</strong> O Papa Bento VIII introduz o Credo (com <em>Filioque</em>) na missa romana — tornando-a prática universal ocidental.</li>
            </ul>
          </>,
        },
        {
          id: 'lit3', label: 'Variantes Litúrgicas',
          content: <>
            <p>Hoje o Credo é recitado de formas ligeiramente diferentes pelas tradições cristãs:</p>
            <ul>
              <li><strong>Católica (latim/vernáculo):</strong> &ldquo;Consubstancial ao Pai&rdquo; — a tradução de <em>homoousios</em> foi restaurada em 2011 nas missas em inglês, francês e outras línguas, substituindo o mais vago &ldquo;one in Being with the Father&rdquo;.</li>
              <li><strong>Ortodoxa:</strong> &ldquo;Da mesma essência que o Pai&rdquo; — sem o <em>Filioque</em>; recitado em grego, eslavo, romeno, árabe, ge&apos;ez, copta.</li>
              <li><strong>Anglicana/Protestante:</strong> &ldquo;Of one Being with the Father&rdquo; (versão tradicional) ou &ldquo;consubstantial with the Father&rdquo; (versões revisadas).</li>
              <li><strong>Na liturgia etíope:</strong> O Credo é cantado — não apenas recitado — com melodias que remontam ao séc. IV.</li>
            </ul>
          </>,
        },
      ]} />
    </section>

    {/* ══════════════════════════════════════
        20. IMPACTO
    ══════════════════════════════════════ */}
    <section className={`${styles.secao} secao-anchor`} id="impacto">
      <div className={styles.secaoHeader}>
        <h2 className={styles.secaoH2}>🌍 Impacto Duradouro para a Igreja e para a Civilização</h2>
      </div>
      <Accordion id="imp1" titulo={<><strong>O Paradigma dos Concílios Ecumênicos</strong></>}>
        <p>Niceia I criou o modelo de governança teológica da Igreja: bispos de todo o mundo reunidos em concílio, sob a assistência do Espírito Santo, definem a fé de modo irreformável. Este paradigma continuaria a moldar a eclesiologia cristã por séculos.</p>
        <p>É a base sobre a qual repousa a autoridade de todos os demais concílios — dos 21 católicos aos 7 ortodoxos. Quando um concílio posterior precisa afirmar sua legitimidade, volta a Niceia. É o metro-padrão da ortodoxia cristológica.</p>
      </Accordion>
      <Accordion id="imp2" titulo={<><strong>A Cristologia como Base da Soteriologia</strong></>}>
        <p>A definição do <em>homoousios</em> não foi apenas um exercício filosófico: ela definiu o que é a salvação cristã. Se Cristo não é verdadeiramente Deus, sua morte na cruz é o sacrifício de uma criatura — preciosa, mas finita. A teologia da redenção, da deificação (<em>theosis</em>), da satisfação vicária e da encarnação reparadora depende inteiramente da plena divindade do Salvador afirmada em Niceia.</p>
        <p>O argumento de Atanásio permanece inultrapassável: <em>&ldquo;Deus se fez homem para que o homem se fizesse Deus.&rdquo;</em> Se Cristo não é Deus, não há deificação. Se não é homem, não há redenção da humanidade. Niceia garantiu os dois polos — a plena divindade (contra Ário) — que Calcedônia complementaria com a plena humanidade (contra Eutiques).</p>
      </Accordion>
      <Accordion id="imp3" titulo={<><strong>O Credo como Elo Ecumênico Universal</strong></>}>
        <p>O Credo Niceno-Constantinopolitano é o único texto teológico compartilhado por praticamente todas as tradições cristãs históricas. É recitado em árabe no Cairo, em grego em Atenas, em latim no Vaticano, em russo em Moscou, em amárico em Adis Abeba, em inglês em Londres, em copta no Alto Egito.</p>
        <p>Nenhum outro documento cristão tem alcance comparável. Num sentido real, o Credo de Niceia é o único texto que une mais de dois bilhões de cristãos ao redor do mundo — uma realização extraordinária para um concílio realizado em 325 numa cidade do interior da Turquia.</p>
      </Accordion>
      <Accordion id="imp4" titulo={<><strong>A Relação Igreja-Estado — Uma Abertura Ambígua</strong></>}>
        <p>Niceia inaugurou o modelo de colaboração e tensão entre autoridade eclesiástica e poder imperial que marcaria a Cristandade por mil anos. O <em>cesaropapismo</em> (domínio do Estado sobre a Igreja) e o <em>hierocratismo</em> (domínio da Igreja sobre o Estado) são dois polos extremos que emergiram da dialética aberta em 325.</p>
        <p>A Reforma Gregoriana do séc. XI, a Querela das Investiduras, o galicanismo, o josefinismo, a Concordata de Worms (1122), o Concílio de Constança (1415) — todos são capítulos desta história que começou quando Constantino entrou no salão do palácio de Niceia vestido de púrpura e ouro.</p>
      </Accordion>
      <Accordion id="imp5" titulo={<><strong>Niceia e a Civilização Ocidental</strong></>}>
        <p>Ao definir a identidade cristã ortodoxa, Niceia contribuiu para a formação da identidade cultural do Ocidente. A Europa medieval, com suas catedrais, universidades, direito canônico e filosofia escolástica, repousa sobre uma concepção de Deus e de Cristo que Niceia formulou.</p>
        <p>A teologia agostiniana da graça, a <em>Summa Theologiae</em> de Tomás de Aquino, a <em>Divina Comédia</em> de Dante, a arquitetura das catedrais góticas como expressão do mistério trinitário — tudo isso pressupõe o <em>homoousios</em> de 325. Sem Niceia, é difícil imaginar não apenas a teologia, mas a arte, a música, a filosofia e a estrutura jurídica do Ocidente medieval.</p>
      </Accordion>
    </section>

    {/* ══════════════════════════════════════
        21. FONTES
    ══════════════════════════════════════ */}
    <section className={`${styles.secao} secao-anchor`} id="fontes">
      <div className={styles.secaoHeader}>
        <h2 className={styles.secaoH2}>📚 Fontes Primárias e Historiografia</h2>
      </div>
      <TabsInternas tabs={[
        {
          id: 'fon1', label: 'Fontes Primárias',
          content: <>
            <ul>
              <li><strong>Eusébio de Cesareia</strong> — <em>Vita Constantini</em>, livros II–III: relato contemporâneo, panegírico e parcial. Fonte insubstituível para a atmosfera do concílio.</li>
              <li><strong>Eusébio de Cesareia</strong> — <em>Carta à Igreja de Cesareia</em>: documento valioso em que o bispo explica aos seus fiéis por que assinou o <em>homoousios</em>; revela as tensões internas.</li>
              <li><strong>Atanásio</strong> — <em>De Decretis Nicaenae Synodi</em>: defesa aprofundada das decisões de Niceia, escrita décadas depois.</li>
              <li><strong>Atanásio</strong> — <em>Historia Arianorum ad Monachos</em>: relato dos conflitos pós-nicenos; fundamental para as perseguições anti-nicenas.</li>
              <li><strong>Atanásio</strong> — <em>De Incarnatione</em>: o argumento soteriológico central que justifica o <em>homoousios</em>.</li>
              <li><strong>Sócrates Escolástico</strong> — <em>Historia Ecclesiastica</em>, livro I: história eclesiástica do séc. V, bem documentada.</li>
              <li><strong>Sozômeno</strong> — <em>Historia Ecclesiastica</em>, livro I: informações complementares às de Sócrates.</li>
              <li><strong>Teodoreto de Ciro</strong> — <em>Historia Ecclesiastica</em>: perspectiva antioquena.</li>
              <li><strong>Carta de Constantino aos bispos ausentes</strong> — preservada por Eusébio; revela motivações políticas e posição imperial sobre a Páscoa.</li>
              <li><strong>Cânones de Niceia</strong> — editados criticamente em Mansi, <em>Sacrorum Conciliorum Nova et Amplissima Collectio</em>, vol. II.</li>
            </ul>
          </>,
        },
        {
          id: 'fon2', label: 'Historiografia Moderna',
          content: <>
            <ul>
              <li><strong>R. P. C. Hanson</strong> — <em>The Search for the Christian Doctrine of God: The Arian Controversy 318–381</em> (1988): obra monumental, a mais completa sobre a crise ariana. 900 páginas de erudição inigualada.</li>
              <li><strong>Lewis Ayres</strong> — <em>Nicaea and Its Legacy</em> (2004): revisão historiográfica decisiva; questiona leituras simplistas e reconstrói a pluralidade de posições teológicas.</li>
              <li><strong>John Henry Newman</strong> — <em>The Arians of the Fourth Century</em> (1833): clássico ainda valioso pela análise das posições; escrito antes de Newman se converter ao catolicismo.</li>
              <li><strong>Frances Young</strong> — <em>From Nicaea to Chalcedon</em> (2010): contexto patrístico amplo; excelente para situar Niceia na história da teologia.</li>
              <li><strong>Michel René Barnes e Daniel Williams</strong> (eds.) — <em>Arianism after Arius</em> (1993): estudos sobre as diversas correntes pós-nicenas.</li>
              <li><strong>Denzinger-Hünermann</strong> — <em>Enchiridion Symbolorum</em>: texto oficial do Credo niceno com fontes e comentário; referência canônica para a Igreja Católica.</li>
              <li><strong>Manlio Simonetti</strong> — <em>La crisi ariana nel IV secolo</em> (1975): obra italiana fundamental, ainda sem tradução completa ao português.</li>
            </ul>
          </>,
        },
        {
          id: 'fon3', label: 'Em Português',
          content: <>
            <ul>
              <li>Eusébio de Cesareia, <em>História Eclesiástica</em> — tradução brasileira pela editora Paulus (São Paulo).</li>
              <li>Atanásio de Alexandria, <em>Sobre a Encarnação do Verbo</em> — edições em português disponíveis pela Paulus e pela Ecclesiae.</li>
              <li>Compêndio dos Decretos, Definições e Declarações da Igreja em Matéria de Fé e Moral — ed. Paulinas (baseado no Denzinger); contém o Credo niceno comentado.</li>
              <li>Quasten, Johannes, <em>Patrologia</em> (3 vols.) — tradução espanhola amplamente disponível no Brasil; capítulos sobre Atanásio, Alexandre e Eusébio são essenciais.</li>
              <li>Moreschini, Claudio e Norelli, Enrico, <em>História da Literatura Cristã Antiga Grega e Latina</em> — tradução brasileira pela Loyola; contextualiza os autores nicenos.</li>
            </ul>
          </>,
        },
        {
          id: 'fon4', label: 'Crítica das Fontes',
          content: <>
            <div className={styles.caixaAlerta}>
              <strong>Problema fundamental:</strong> As atas do Concílio de Niceia não foram preservadas. Todo o conhecimento sobre seus debates internos vem de fontes secundárias — escritas décadas depois, por autores com agendas teológicas claras.
            </div>
            <ul>
              <li><strong>Eusébio de Cesareia</strong> escrevia para glorificar Constantino e justificar sua própria assinatura do <em>homoousios</em>. Sua versão dos eventos é necessariamente autoexculpatória.</li>
              <li><strong>Atanásio</strong> escrevia décadas depois, em contexto de perseguição, com o objetivo de provar que Niceia era incontestável. Sua seleção de evidências é militante.</li>
              <li><strong>Os historiadores eclesiásticos do séc. V</strong> (Sócrates, Sozômeno, Teodoreto) escreviam a 70–100 anos dos eventos, dependendo de fontes que já não possuímos.</li>
              <li>Isso não torna o conhecimento impossível — mas exige que cada afirmação seja ponderada com consciência de sua proveniência. A historiografia moderna (Ayres, Hanson) é muito mais cautelosa que as narrativas tradicionais.</li>
            </ul>
          </>,
        },
      ]} />
    </section>

    <hr className={styles.divisor} />

    {/* ══ FOOTER ══ */}
    <footer className={styles.footer}>
      <p>
        Concílio 1 de 21 reconhecidos pela Igreja Católica &nbsp;·&nbsp;
        <a href="../">← Voltar ao índice</a>
        &nbsp;·&nbsp;
        <a href="/concilios/constantinopla-i">Próximo: Constantinopla I (381) →</a>
      </p>
      <p className={styles.footerSub}>
        Lux Fidei © 2026 — <em>&ldquo;A verdade é o bem do intelecto.&rdquo;</em>
      </p>
      <p className={styles.footerFontes}>
        Fontes: Eusébio de Cesareia · Atanásio de Alexandria · Sócrates Escolástico · Sozômeno
        · Denzinger-Hünermann · R.P.C. Hanson · Lewis Ayres · Frances Young · Manlio Simonetti
      </p>
    </footer>

  </div>{/* fim .pagina */}
</div>/* fim .pageWrapper */
)
}