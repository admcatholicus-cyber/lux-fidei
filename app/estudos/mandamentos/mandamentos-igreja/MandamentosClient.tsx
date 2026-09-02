'use client'

import { useEffect, useRef, useState, useCallback, ReactNode } from 'react'
import Link from 'next/link'
import styles from './mandamentos.module.css'

// ═══════════════════════════════════════════════════════════
// TIPOS
// ═══════════════════════════════════════════════════════════
interface Particula {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  vida: number
  maxVida: number
}

interface Pergunta {
  p: string
  ops: string[]
  c: number
  exp: string
}

// ═══════════════════════════════════════════════════════════
// DADOS — PRECEITOS
// ═══════════════════════════════════════════════════════════
const PRECEITOS = [
  {
    num: 1, romano: 'I',
    label: '1º Preceito da Igreja',
    titulo: 'Participar da Missa nos domingos e festas de guarda',
    resumo: 'A Eucaristia dominical como centro da semana cristã',
    citacao: '"Guardar os domingos e as festas de preceito, participando da Missa e abstendo-se de trabalhos servis."',
    fonte: 'CIC 2042 — Catecismo da Igreja Católica',
  },
  {
    num: 2, romano: 'II',
    label: '2º Preceito da Igreja',
    titulo: 'Confessar os pecados graves ao menos uma vez por ano',
    resumo: 'A reconciliação como caminho de cura da alma',
    citacao: '"Confessar os pecados ao menos uma vez por ano."',
    fonte: 'CIC 2042 — Catecismo da Igreja Católica',
  },
  {
    num: 3, romano: 'III',
    label: '3º Preceito da Igreja',
    titulo: 'Comungar ao menos na época pascal',
    resumo: 'A Eucaristia como alimento indispensável para a vida espiritual',
    citacao: '"Receber o sacramento da Eucaristia ao menos uma vez por ano, na época pascal."',
    fonte: 'CIC 2042 — Catecismo da Igreja Católica',
  },
  {
    num: 4, romano: 'IV',
    label: '4º Preceito da Igreja',
    titulo: 'Guardar os dias de jejum e abstinência',
    resumo: 'A mortificação como escola de liberdade interior',
    citacao: '"Guardar os dias de jejum e de abstinência prescritos pela Igreja."',
    fonte: 'CIC 2043 — Catecismo da Igreja Católica',
  },
  {
    num: 5, romano: 'V',
    label: '5º Preceito da Igreja',
    titulo: 'Prover as necessidades materiais da Igreja',
    resumo: 'Corresponsabilidade na missão evangelizadora',
    citacao: '"Prover as necessidades materiais da Igreja, cada um segundo as suas possibilidades."',
    fonte: 'CIC 2043 — Catecismo da Igreja Católica',
  },
  {
    num: 6, romano: 'VI',
    label: '6º Preceito da Igreja',
    titulo: 'Observar as leis da Igreja sobre o matrimônio',
    resumo: 'O casamento como sacramento e aliança sagrada',
    citacao: '"Observar as leis da Igreja sobre o matrimônio, guardar a continência nos dias proibidos, não faltar às obrigações matrimoniais."',
    fonte: 'CIC 2043 — Catecismo da Igreja Católica',
  },
]

// ═══════════════════════════════════════════════════════════
// DADOS — QUIZ
// ═══════════════════════════════════════════════════════════
const PERGUNTAS: Pergunta[] = [
  { p: 'Quantos são os Preceitos da Igreja Católica?', ops: ['4', '5', '6', '10'], c: 2, exp: 'São 6 os Preceitos da Igreja, listados no CIC 2041-2043. Eles definem o mínimo da vida sacramental e comunitária do cristão.' },
  { p: 'O 1º Preceito obriga o católico a:', ops: ['Rezar o Rosário diariamente', 'Participar da Missa aos domingos e festas de guarda', 'Confessar-se toda semana', 'Fazer jejum toda segunda-feira'], c: 1, exp: 'O 1º Preceito obriga à participação na Missa dominical e nas festas de guarda. Faltar deliberadamente sem causa grave é pecado mortal.' },
  { p: 'Com que frequência mínima o 2º Preceito obriga o cristão a se confessar?', ops: ['Todo mês', 'Toda semana santa', 'Ao menos uma vez por ano', 'A cada dois anos'], c: 2, exp: 'O 2º Preceito exige confissão ao menos uma vez por ano. É o mínimo absoluto; os santos confessavam muito mais frequentemente.' },
  { p: 'O 3º Preceito exige que o cristão comungue ao menos:', ops: ['Uma vez por semana', 'Uma vez por mês', 'Na época pascal', 'Toda sexta-feira'], c: 2, exp: 'O 3º Preceito exige comunhão ao menos uma vez por ano, na época pascal. A Igreja recomenda comunhão mais frequente.' },
  { p: 'Qual condição é necessária para receber a Eucaristia dignamente?', ops: ['Ter ido à Missa na semana anterior', 'Estar em graça — sem pecado mortal', 'Ter feito jejum por 24 horas', 'Ser membro ativo de uma equipe paroquial'], c: 1, exp: 'Para comungar dignamente, é preciso estar em estado de graça. Quem tem consciência de pecado mortal deve antes confessar-se (cf. 1Cor 11,27-29).' },
  { p: 'O 4º Preceito trata de:', ops: ['Rezar o ofício divino', 'Guardar os dias de jejum e abstinência', 'Pagar o dízimo', 'Frequentar a catequese'], c: 1, exp: 'O 4º Preceito obriga ao jejum e abstinência nos dias prescritos — especialmente Quarta de Cinzas, Sexta-feira Santa e todas as sextas do ano.' },
  { p: 'Em que dias os católicos são obrigados à abstinência de carne?', ops: ['Apenas na Semana Santa', 'Toda quarta e sexta-feira do ano', 'Todas as sextas-feiras do ano (e Quarta de Cinzas)', 'Apenas nas sextas da Quaresma'], c: 2, exp: 'A abstinência é obrigatória na Quarta de Cinzas e em todas as sextas-feiras do ano.' },
  { p: 'O 5º Preceito trata da responsabilidade do cristão em:', ops: ['Evangelizar nas ruas', 'Prover as necessidades materiais da Igreja', 'Educar os filhos na fé', 'Rezar por vocações sacerdotais'], c: 1, exp: 'O 5º Preceito obriga cada fiel a contribuir — segundo suas possibilidades — para as necessidades materiais da Igreja.' },
  { p: 'O 6º Preceito refere-se a:', ops: ['Obrigação de frequentar grupos de oração', 'Observância das leis da Igreja sobre o matrimônio', 'Dever de participar de peregrinações', 'Obrigação de rezar o Rosário em família'], c: 1, exp: 'O 6º Preceito exige a observância das leis canônicas sobre o matrimônio.' },
  { p: 'O Catecismo chama os Preceitos da Igreja de:', ops: ['O máximo da vida cristã', 'O mínimo indispensável do espírito de oração', 'Sugestões pastorais', 'Tradições regionais variáveis'], c: 1, exp: 'O CIC 2041 chama os Preceitos de "mínimo indispensável no espírito de oração e esforço moral". São o piso — não o teto — da vida cristã.' },
]

const TOTAL_PERGUNTAS = PERGUNTAS.length

// ═══════════════════════════════════════════════════════════
// HOOKS
// ═══════════════════════════════════════════════════════════

function useParticulas(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const criar = (): Particula => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.4 - 0.1,
      vida: 0,
      maxVida: Math.random() * 200 + 100,
    })

    const lista: Particula[] = Array.from({ length: 80 }, criar)

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      lista.forEach((p, i) => {
        p.vida++
        p.x += p.vx
        p.y += p.vy
        const alpha = Math.sin((p.vida / p.maxVida) * Math.PI) * 0.5
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201,168,76,${alpha})`
        ctx.fill()
        if (p.vida >= p.maxVida) lista[i] = criar()
      })
      animId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [canvasRef])
}

function useScroll() {
  const [pct, setPct] = useState(0)
  const [showTopo, setShowTopo] = useState(false)
  const [showNav, setShowNav] = useState(false)
  const [activePreceito, setActivePreceito] = useState<number | null>(null)

  useEffect(() => {
    const handler = () => {
      const max = document.body.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.round((window.scrollY / max) * 100) : 0
      setPct(p)
      setShowTopo(window.scrollY > 400)
      setShowNav(window.scrollY > 300)

      let ativo: number | null = null
      for (let i = 1; i <= 6; i++) {
        const el = document.getElementById(`p${i}`)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 200 && rect.bottom > 200) {
          ativo = i
          break
        }
      }
      setActivePreceito(ativo)
    }
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return { pct, showTopo, showNav, activePreceito }
}

function useProgresso() {
  const [estudados, setEstudados] = useState<number[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('prec-estudados')
    if (saved) {
      try { setEstudados(JSON.parse(saved)) } catch { /* ignora JSON inválido */ }
    }
  }, [])

  const marcar = useCallback((n: number, checked: boolean) => {
    setEstudados(prev => {
      const next = checked ? [...new Set([...prev, n])] : prev.filter(x => x !== n)
      localStorage.setItem('prec-estudados', JSON.stringify(next))
      return next
    })
  }, [])

  return { estudados, marcar }
}

function useContador(target: number, trigger: boolean) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!trigger || isNaN(target)) return
    let cur = 0
    const step = Math.max(1, Math.ceil(target / 60))
    const id = setInterval(() => {
      cur = Math.min(cur + step, target)
      setVal(cur)
      if (cur >= target) clearInterval(id)
    }, 20)
    return () => clearInterval(id)
  }, [trigger, target])
  return val
}

// ═══════════════════════════════════════════════════════════
// UTILITÁRIO: FORMATAR TEXTO (**negrito** e *itálico*)
// ═══════════════════════════════════════════════════════════
function formatarTexto(txt: string): ReactNode[] {
  let key = 0
  const matches: { start: number; end: number; text: string; tipo: 'b' | 'i' }[] = []

  // Regex criados localmente para evitar problemas de estado com /g
  const boldRegex = /\*\*(.+?)\*\*/g
  const italicRegex = /\*(.+?)\*/g

  let match: RegExpExecArray | null

  while ((match = boldRegex.exec(txt)) !== null) {
    matches.push({
      start: match.index,
      end: match.index + match[0].length,
      text: match[1],
      tipo: 'b',
    })
  }

  while ((match = italicRegex.exec(txt)) !== null) {
    const dentroDeBold = matches.some(
      m => match!.index >= m.start && match!.index < m.end
    )
    if (!dentroDeBold) {
      matches.push({
        start: match.index,
        end: match.index + match[0].length,
        text: match[1],
        tipo: 'i',
      })
    }
  }

  matches.sort((a, b) => a.start - b.start)

  const resultado: ReactNode[] = []
  let ultimoIdx = 0

  matches.forEach(m => {
    if (m.start > ultimoIdx) resultado.push(txt.slice(ultimoIdx, m.start))
    resultado.push(
      m.tipo === 'b'
        ? <strong key={key++}>{m.text}</strong>
        : <em key={key++}>{m.text}</em>
    )
    ultimoIdx = m.end
  })

  if (ultimoIdx < txt.length) resultado.push(txt.slice(ultimoIdx))
  return resultado
}

// ═══════════════════════════════════════════════════════════
// COMPONENTE: STAT CARD
// ═══════════════════════════════════════════════════════════
function StatCard({
  icone, target, label, special, trigger,
}: {
  icone: string
  target: number
  label: string
  special?: string
  trigger: boolean
}) {
  const val = useContador(target, trigger)
  return (
    <div className={styles.statCard}>
      <span className={styles.statIcone}>{icone}</span>
      <span className={styles.statNum}>
        {special ?? val.toLocaleString('pt-BR')}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// COMPONENTE: QUIZ
// ═══════════════════════════════════════════════════════════
type QuizFase = 'intro' | 'perguntas' | 'resultado'

function Quiz() {
  const [fase, setFase] = useState<QuizFase>('intro')
  const [atual, setAtual] = useState(0)
  const [acertos, setAcertos] = useState(0)
  const [respondeu, setRespondeu] = useState<number | null>(null)

  const iniciar = () => {
    setFase('perguntas')
    setAtual(0)
    setAcertos(0)
    setRespondeu(null)
  }

  const responder = (idx: number) => {
    if (respondeu !== null) return
    setRespondeu(idx)
    if (idx === PERGUNTAS[atual].c) setAcertos(a => a + 1)
  }

  const proximo = () => {
    if (atual < TOTAL_PERGUNTAS - 1) {
      setAtual(a => a + 1)
      setRespondeu(null)
    } else {
      setFase('resultado')
    }
  }

  const q = PERGUNTAS[atual]
  const pct = acertos / TOTAL_PERGUNTAS
  const letras = ['A', 'B', 'C', 'D']

  const resultadoInfo = () => {
    if (pct === 1) return { emoji: '🏆', titulo: 'Perfeito!', msg: 'Você domina os Preceitos da Igreja. Agora, viver é o desafio.' }
    if (pct >= 0.8) return { emoji: '🌟', titulo: 'Excelente!', msg: 'Você conhece muito bem os preceitos. Continue aprofundando!' }
    if (pct >= 0.6) return { emoji: '✅', titulo: 'Muito bem!', msg: 'Bom desempenho. Revise os pontos que escaparam.' }
    if (pct >= 0.4) return { emoji: '📖', titulo: 'Pode melhorar!', msg: 'Há espaço para crescer. Releia o conteúdo e tente novamente.' }
    return { emoji: '🙏', titulo: 'Começando a jornada', msg: 'Todo mestre já foi um iniciante. Revise o material e volte!' }
  }

  return (
    <div className={styles.quizBox}>
      {/* ── INTRO ── */}
      {fase === 'intro' && (
        <div className={styles.quizIntro}>
          <div className={styles.quizIntroIcone}>⚡</div>
          <h3>Pronto para o desafio?</h3>
          <p>{TOTAL_PERGUNTAS} perguntas. Feedback imediato. Aprenda errando.</p>
          <div className={styles.quizIntroStats}>
            <div className={styles.qiStat}><span>{TOTAL_PERGUNTAS}</span><small>Perguntas</small></div>
            <div className={styles.qiStat}><span>∞</span><small>Tentativas</small></div>
            <div className={styles.qiStat}><span>📖</span><small>Com explicação</small></div>
          </div>
          <button className={styles.btnQuizComecar} onClick={iniciar}>
            Começar o Quiz ⚡
          </button>
        </div>
      )}

      {/* ── PERGUNTAS ── */}
      {fase === 'perguntas' && (
        <div className={styles.quizPerguntas}>
          <div className={styles.quizHeaderBarra}>
            <span className={styles.quizNumTxt}>
              Pergunta {atual + 1} de {TOTAL_PERGUNTAS}
            </span>
            <div className={styles.quizBarraWrap}>
              <div
                className={styles.quizBarraFill}
                style={{ width: `${(atual / TOTAL_PERGUNTAS) * 100}%` }}
              />
            </div>
            <span className={styles.quizAcertosTxt}>✅ {acertos} acertos</span>
          </div>

          <div className={styles.quizPerguntaTxt}>{q.p}</div>

          <div className={styles.quizOpcoes}>
            {q.ops.map((op, i) => {
              let cls = styles.quizOpcao
              if (respondeu !== null) {
                if (i === q.c) cls += ` ${styles.correta}`
                else if (i === respondeu) cls += ` ${styles.errada}`
              }
              return (
                <button
                  key={i}
                  className={cls}
                  onClick={() => responder(i)}
                  disabled={respondeu !== null}
                >
                  <span className={styles.opcaoLetra}>{letras[i]}</span>
                  {op}
                </button>
              )
            })}
          </div>

          {respondeu !== null && (
            <div
              className={`${styles.quizFeedback} ${styles.visivel} ${respondeu === q.c ? styles.acerto : styles.erro
                }`}
            >
              <strong>{respondeu === q.c ? '✅ Correto!' : '❌ Não foi dessa vez.'}</strong>
              {' '}{q.exp}
            </div>
          )}

          {respondeu !== null && (
            <button className={styles.btnProximo} onClick={proximo}>
              {atual < TOTAL_PERGUNTAS - 1 ? 'Próxima →' : 'Ver resultado →'}
            </button>
          )}
        </div>
      )}

      {/* ── RESULTADO ── */}
      {fase === 'resultado' && (() => {
        const { emoji, titulo, msg } = resultadoInfo()
        return (
          <div className={styles.quizResultado}>
            <div className={styles.resultadoEmoji}>{emoji}</div>
            <h3>{titulo}</h3>
            <div className={styles.resultadoScoreGrande}>
              <span>{acertos}</span>
              <small> de {TOTAL_PERGUNTAS}</small>
            </div>
            <p>{msg}</p>
            <div className={styles.resultadoBarraWrap}>
              <div className={styles.resultadoBarraFill} style={{ width: `${pct * 100}%` }} />
            </div>
            <div className={styles.resultadoAcoes}>
              <button className={styles.btnReiniciar} onClick={iniciar}>
                🔄 Tentar novamente
              </button>
              <button
                className={styles.btnRever}
                onClick={() =>
                  document.getElementById('visaogeral')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                📖 Rever conteúdo
              </button>
            </div>
          </div>
        )
      })()}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// COMPONENTE: PROGRESSO DE ESTUDO
// ═══════════════════════════════════════════════════════════
function ProgressoEstudo({ estudados }: { estudados: number[] }) {
  const pct = Math.round((estudados.length / 6) * 100)
  const msgs = [
    'Você ainda não começou. O primeiro passo é o mais importante.',
    'Bom começo! Continue — cada preceito aprendido vale.',
    'Você está no caminho. Não pare agora.',
    'Metade do caminho. Você está indo muito bem!',
    'Quase lá! Falta pouco para completar o estudo.',
    'Excelente! Você estudou quase todos os preceitos.',
    '🏆 Parabéns! Você estudou todos os 6 Preceitos da Igreja!',
  ]
  const romanos = ['I', 'II', 'III', 'IV', 'V', 'VI']

  return (
    <div className={styles.progressoContainer}>
      <h3>📊 Seu Progresso de Estudo</h3>
      <p className={styles.progressoSubtexto}>Marque os preceitos estudados no final de cada seção.</p>
      <div className={styles.progressoDots}>
        {romanos.map((r, i) => (
          <a
            key={i}
            href={`#p${i + 1}`}
            className={`${styles.progDot} ${estudados.includes(i + 1) ? styles.feito : ''}`}
          >
            {r}
          </a>
        ))}
      </div>
      <div className={styles.progressoBarraGeral}>
        <div className={styles.progressoBarraFillGeral} style={{ width: `${pct}%` }} />
      </div>
      <p className={styles.progressoMensagem}>{msgs[Math.min(estudados.length, 6)]}</p>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// COMPONENTES AUXILIARES REUTILIZÁVEIS
// ═══════════════════════════════════════════════════════════
function PecadosVirtudes({
  pecados,
  virtudes,
}: {
  pecados: { t: string; d: string }[]
  virtudes: { t: string; d: string }[]
}) {
  return (
    <div className={styles.pvContainer}>
      <div className={`${styles.pvColuna} ${styles.pvPecados}`}>
        <div className={styles.pvCabecalho}>
          <span className={styles.pvIcone}>❌</span>
          <h4>Violações deste preceito</h4>
        </div>
        <ul>
          {pecados.map((p, i) => (
            <li key={i}>
              <strong>{p.t}</strong>
              <p>{p.d}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${styles.pvColuna} ${styles.pvVirtudes}`}>
        <div className={styles.pvCabecalho}>
          <span className={styles.pvIcone}>✅</span>
          <h4>Virtudes cultivadas</h4>
        </div>
        <ul>
          {virtudes.map((v, i) => (
            <li key={i}>
              <strong>{v.t}</strong>
              <p>{v.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function ExameConsciencia({ num, perguntas }: { num: number; perguntas: string[] }) {
  return (
    <div className={styles.mandExame}>
      <h3>🪞 Exame de Consciência — {num}º Preceito</h3>
      <p className={styles.exameIntro}>Responda com honestidade no silêncio do seu coração.</p>
      <div className={styles.examePerguntas}>
        {perguntas.map((pergunta, i) => (
          <div key={i} className={styles.exameP}>
            <span className={styles.exameNum}>{i + 1}</span>
            <p>{formatarTexto(pergunta)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Biblia({ cards }: { cards: { ref: string; texto: string }[] }) {
  return (
    <div className={styles.mandBiblia}>
      <h3>📖 Aprofundamento Bíblico</h3>
      <div className={styles.bibliaGrid}>
        {cards.map((c, i) => (
          <div key={i} className={styles.bibliaCard}>
            <span className={styles.bibliaRef}>{c.ref}</span>
            <p>{c.texto}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Santos({ cards }: { cards: { nome: string; texto: string }[] }) {
  return (
    <div className={styles.mandSantos}>
      <h3>🌟 Mestres deste sacramento</h3>
      <div className={styles.santosGrid}>
        {cards.map((c, i) => (
          <div key={i} className={styles.santoCard}>
            <div className={styles.santoNome}>{c.nome}</div>
            <p>{c.texto}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Catecismo({ tags }: { tags: string[] }) {
  return (
    <div className={styles.mandCatecismo}>
      <h3>📕 Catecismo da Igreja Católica</h3>
      <div className={styles.catTags}>
        {tags.map((t, i) => (
          <span key={i} className={styles.catTag}>{t}</span>
        ))}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// COMPONENTE: CONTEÚDO DE CADA PRECEITO
// ═══════════════════════════════════════════════════════════
function PreceitoConteudo({ num }: { num: number }) {
  if (num === 1) return <Preceito1 />
  if (num === 2) return <Preceito2 />
  if (num === 3) return <Preceito3 />
  if (num === 4) return <Preceito4 />
  if (num === 5) return <Preceito5 />
  if (num === 6) return <Preceito6 />
  return null
}

// ─── PRECEITO 1 ─────────────────────────────────────────────
function Preceito1() {
  return (
    <div className={styles.preceitoConteudo}>
      <h3>🔍 O que este preceito realmente exige?</h3>
      <p>
        Este é o preceito mais conhecido — e o mais violado. Não basta "acreditar em Deus em casa".
        O domingo exige <strong>presença real, corporal e espiritual</strong> na celebração eucarística.
        Não é sugestão: é obrigação gravíssima, cuja violação deliberada é pecado mortal.
      </p>
      <p>
        Por quê? Porque a <strong>Eucaristia é o "fonte e cume" de toda a vida cristã</strong> (LG 11).
        Ela não é apenas um ritual — é o momento em que Cristo se torna real e presente sob as espécies
        do pão e do vinho. Afastar-se dela é afastar-se do coração da fé.
      </p>

      <div className={styles.tresPilares}>
        <div className={styles.pilar}>
          <div className={styles.pilarIcone}>✝️</div>
          <h4>Ressurreição</h4>
          <p>O domingo celebra a vitória de Cristo sobre a morte. Cada domingo é uma "mini-Páscoa" — o maior evento da história humana comemorado semanalmente.</p>
        </div>
        <div className={styles.pilar}>
          <div className={styles.pilarIcone}>🍞</div>
          <h4>Alimento</h4>
          <p>Assim como o corpo precisa de comida diária, a alma precisa do alimento eucarístico. Faltar à Missa é a alma "saltando a refeição".</p>
        </div>
        <div className={styles.pilar}>
          <div className={styles.pilarIcone}>👥</div>
          <h4>Comunidade</h4>
          <p>A fé cristã não é privatista. Reunir-se como povo de Deus é parte essencial do que significa ser cristão. Ninguém se salva sozinho.</p>
        </div>
      </div>

      <h3>📅 Quais são as festas de guarda?</h3>
      <ul className={styles.listaIcone}>
        <li><strong>Todos os domingos do ano</strong></li>
        <li><strong>25 de dezembro</strong> — Natal do Senhor</li>
        <li><strong>1º de janeiro</strong> — Solenidade de Maria, Mãe de Deus</li>
        <li><strong>Corpus Christi</strong> — celebrado na quinta-feira após a Santíssima Trindade</li>
        <li><strong>15 de agosto</strong> — Assunção de Nossa Senhora (em algumas regiões)</li>
        <li><strong>Festa do padroeiro local</strong> (conforme diocese)</li>
      </ul>

      <div className={`${styles.caixa} ${styles.caixaInfo}`}>
        <div className={styles.caixaIcone}>💡</div>
        <div className={styles.caixaConteudo}>
          <h4>Quando posso faltar à Missa sem pecar mortalmente?</h4>
          <p>
            O CIC 2181 lista as causas <strong>dispensantes</strong>: doença grave, cuidado de um
            recém-nascido, emergência real, impossibilidade de acesso a uma igreja. "Estava chovendo",
            "estava cansado", "prefiro rezar em casa" <strong>não</strong> são causas dispensantes.
          </p>
        </div>
      </div>

      <h3>⛪ Como participar bem da Missa?</h3>
      <div className={styles.argumentoBloco}>
        {[
          { n: '1', t: 'Prepare-se antes', d: 'Reserve alguns minutos antes da Missa para se recolher, pedir perdão pelas faltas e dispor o coração.' },
          { n: '2', t: 'Participe ativamente', d: 'Acompanhe as leituras, cante os hinos, faça as aclamações. A Missa não é espetáculo — é ação litúrgica em que você é protagonista.' },
          { n: '3', t: 'Guarde o celular', d: 'O momento da Missa é encontro com o Deus do universo. Ele merece toda a sua atenção.' },
          { n: '4', t: 'Leve algo para a vida', d: 'Antes de sair, pergunte: "O que Deus me disse hoje?" Uma palavra da homilia, uma frase da liturgia.' },
        ].map(a => (
          <div key={a.n} className={styles.argumento}>
            <span className={styles.argNum}>{a.n}</span>
            <div>
              <strong>{a.t}</strong>
              <p>{a.d}</p>
            </div>
          </div>
        ))}
      </div>

      <PecadosVirtudes
        pecados={[
          { t: 'Faltar deliberadamente à Missa dominical', d: 'Sem causa grave. É pecado mortal — rompe a comunhão com Deus e com a Igreja.' },
          { t: 'Chegar e sair sem motivo', d: 'Aparecer apenas para "cumprir tabela" sem participar — é desrespeito ao Sacramento.' },
          { t: 'Trabalho servil desnecessário', d: 'Trabalhar no domingo quando não há necessidade real, impedindo o culto e o descanso.' },
          { t: 'Irreverência durante a Missa', d: 'Celular, conversas, comportamentos que perturbam o recolhimento dos outros fiéis.' },
        ]}
        virtudes={[
          { t: 'Piedade eucarística', d: 'Amor crescente ao mistério da Eucaristia — presença real de Cristo.' },
          { t: 'Gratidão', d: 'O domingo como ato de ação de graças pela vida, pela salvação, pela semana recebida.' },
          { t: 'Vida comunitária', d: 'Pertencimento consciente ao povo de Deus — não uma fé solitária e privatista.' },
          { t: 'Santificação do tempo', d: 'Ordenar a semana a partir de Deus, não encaixar Deus nas sobras da agenda.' },
        ]}
      />

      <ExameConsciencia
        num={1}
        perguntas={[
          'Você participa da Missa **todos** os domingos — ou apenas quando "dá"?',
          'Na Missa, você está presente de corpo e alma — ou com o pensamento em qualquer outro lugar?',
          'Você já deixou de ir à Missa por cansaço, sono, futebol ou preguiça?',
          'O que você faz *antes* da Missa para se preparar para esse encontro?',
        ]}
      />

      <Biblia
        cards={[
          { ref: 'At 20,7', texto: '"No primeiro dia da semana, estando nós reunidos para a fração do pão..." — a prática apostólica do culto dominical desde o início.' },
          { ref: 'Jo 6,53-56', texto: '"Se não comerdes a carne do Filho do Homem e não beberdes o seu sangue, não tereis vida em vós." — a urgência da Eucaristia.' },
          { ref: 'Hb 10,25', texto: '"Não abandoneis as nossas assembleias, como alguns costumam fazer, mas exortai-vos mutuamente."' },
          { ref: 'Lc 24,35', texto: 'Os discípulos de Emaús reconhecem o Ressuscitado "na fração do pão".' },
        ]}
      />

      <Catecismo tags={['CIC 2041-2043', 'CIC 2174-2176 (dia do Senhor)', 'CIC 2180-2183 (obrigação dominical)', 'CIC 1322-1419 (Eucaristia)']} />
    </div>
  )
}

// ─── PRECEITO 2 ─────────────────────────────────────────────
function Preceito2() {
  return (
    <div className={styles.preceitoConteudo}>
      <h3>🔍 O que este preceito realmente exige?</h3>
      <p>
        A Igreja obriga a confissão anual para os que têm <strong>pecados mortais</strong>. Mas atenção:
        "ao menos uma vez por ano" é o <em>mínimo absoluto</em> para não morrer espiritualmente.
        Os santos confessavam semanalmente — alguns diariamente.
      </p>
      <p>
        A Confissão é o sacramento pelo qual <strong>Cristo, pelo ministério do sacerdote, perdoa os
          pecados cometidos após o Batismo</strong>. Não é o padre que perdoa — é Cristo. O padre age{' '}
        <em>in persona Christi</em>.
      </p>

      <div className={`${styles.caixa} ${styles.caixaJesus}`}>
        <div className={styles.caixaIcone}>✝️</div>
        <div className={styles.caixaConteudo}>
          <blockquote>"A quem perdoardes os pecados, ser-lhes-ão perdoados; a quem os retiverdes, ser-lhes-ão retidos."</blockquote>
          <cite>João 20,23 — Jesus instituindo o sacramento</cite>
        </div>
      </div>

      <h3>💔 Por que é difícil confessar?</h3>
      <div className={styles.appsGrid}>
        {[
          { e: '😳', t: 'Vergonha', d: 'A vergonha é saudável — mostra que a consciência está viva. Mas deve ser vencida pelo amor à misericórdia de Deus.' },
          { e: '🤔', t: '"Deus já sabe"', d: 'Sim, mas o sacramento não é para informar Deus — é para que você reconheça, verbalize e receba o perdão de forma concreta.' },
          { e: '😒', t: '"Rezo em casa"', d: 'A oração pede perdão. O sacramento concede o perdão. São realidades diferentes — ambas necessárias.' },
          { e: '😰', t: 'Medo do padre', d: 'O padre está lá para curar, não para julgar. O sigilo sacramental é absoluto.' },
        ].map(a => (
          <div key={a.t} className={styles.appCard}>
            <span className={styles.appEmoji}>{a.e}</span>
            <strong>{a.t}</strong>
            <p>{a.d}</p>
          </div>
        ))}
      </div>

      <h3>✅ Como fazer uma boa confissão?</h3>
      <div className={styles.argumentoBloco}>
        {[
          { n: '1', t: 'Exame de consciência', d: 'Pensar com honestidade nos pecados cometidos — em pensamento, palavra, obra e omissão.' },
          { n: '2', t: 'Contrição (dor dos pecados)', d: 'Sentir genuína tristeza por ter ofendido a Deus — não apenas medo do inferno, mas amor arrependido.' },
          { n: '3', t: 'Propósito de emenda', d: 'Firme resolução de não pecar mais e de evitar as ocasiões de pecado. Sem isso, a confissão é inválida.' },
          { n: '4', t: 'Confissão ao padre', d: 'Declarar os pecados mortais em número e espécie. Os veniais também podem e devem ser confessados.' },
          { n: '5', t: 'Penitência e satisfação', d: 'Fazer a penitência que o padre determina. E, onde possível, reparar o dano causado ao próximo.' },
        ].map(a => (
          <div key={a.n} className={styles.argumento}>
            <span className={styles.argNum}>{a.n}</span>
            <div>
              <strong>{a.t}</strong>
              <p>{a.d}</p>
            </div>
          </div>
        ))}
      </div>

      <PecadosVirtudes
        pecados={[
          { t: 'Não se confessar jamais', d: 'Viver em pecado mortal sem buscar o perdão sacramental — é a situação espiritual mais perigosa.' },
          { t: 'Confissão inválida', d: 'Confessar sem contrição, sem propósito de emenda, ou omitindo pecados graves deliberadamente.' },
          { t: 'Comungar em pecado mortal', d: 'Receber a Eucaristia sem antes confessar pecados mortais — é sacrilégio (1Cor 11,27-29).' },
          { t: 'Postergar indefinidamente', d: '"Confessarei quando for mais velho." A morte não avisa.' },
        ]}
        virtudes={[
          { t: 'Humildade', d: 'Reconhecer a própria fraqueza e dependência da misericórdia divina.' },
          { t: 'Contrição', d: 'A dor amorosa pelos próprios pecados — não desespero, mas amor ferido que busca cura.' },
          { t: 'Confiança', d: 'Crer que Deus perdoa — sempre. "Há mais alegria no céu por um pecador arrependido" (Lc 15,7).' },
          { t: 'Paz interior', d: 'A consciência limpa traz serenidade que nenhuma terapia pode substituir completamente.' },
        ]}
      />

      <ExameConsciencia
        num={2}
        perguntas={[
          'Quando foi sua última confissão? **Quanto tempo faz?**',
          'Existe algum pecado que você *nunca* confessou por vergonha? Deus já sabe — e espera.',
          'Você recebe a Eucaristia regularmente mas faz tempo que não se confessa? Examine a própria consciência.',
          'Você faz a penitência que o padre indica — ou "esquece" logo depois?',
        ]}
      />

      <Santos
        cards={[
          { nome: 'São João Maria Vianney', texto: 'O "Cura d\'Ars" passava até 18 horas por dia no confessionário. Dizia que a confissão é "um hospital espiritual onde Deus cura as almas."' },
          { nome: 'São Pio de Pietrelcina', texto: 'Padre Pio confessava fiéis de todo o mundo. Conhecia pecados que os penitentes haviam esquecido de confessar.' },
          { nome: 'Santa Faustina Kowalska', texto: 'Recebeu de Jesus a revelação da Divina Misericórdia: "Quem vem à confissão com humildade e confiança, Eu mesmo corro ao encontro dessa alma."' },
        ]}
      />

      <Biblia
        cards={[
          { ref: 'Jo 20,22-23', texto: 'Jesus sopra o Espírito Santo sobre os apóstolos e lhes dá o poder de perdoar pecados — instituição do sacramento.' },
          { ref: 'Lc 15,11-32', texto: 'O filho pródigo — a parábola mais completa sobre a confissão: reconhecer, decidir voltar, confessar ao pai, ser abraçado.' },
          { ref: 'Tg 5,16', texto: '"Confessai, pois, os vossos pecados uns aos outros e orai uns pelos outros, para serdes curados."' },
          { ref: '1 Jo 1,9', texto: '"Se confessarmos os nossos pecados, Ele é fiel e justo para nos perdoar os pecados."' },
        ]}
      />

      <Catecismo tags={['CIC 2042', 'CIC 1422-1498 (sacramento da penitência)', 'CIC 1455-1458 (atos do penitente)', 'CIC 1486-1490 (fórmula de absolvição)']} />
    </div>
  )
}

// ─── PRECEITO 3 ─────────────────────────────────────────────
function Preceito3() {
  return (
    <div className={styles.preceitoConteudo}>
      <h3>🔍 O que este preceito realmente exige?</h3>
      <p>
        A "Páscoa" aqui refere-se ao período que vai da Quarta-feira de Cinzas até o Pentecostes
        (50 dias após a Páscoa). Nesse período, todo católico capaz deve receber a Sagrada Comunhão
        ao menos uma vez.
      </p>
      <p>
        Mas atenção: novamente estamos diante do <strong>mínimo absoluto</strong>. O Papa São Pio X
        exortava a comunhão <em>diária</em> para quem está em graça e tem a devida disposição.
      </p>

      <div className={`${styles.caixa} ${styles.caixaAlerta}`}>
        <div className={styles.caixaIcone}>⚠️</div>
        <div className={styles.caixaConteudo}>
          <h4>Condição para comungar validamente</h4>
          <p>
            Para receber a Eucaristia dignamente, é necessário{' '}
            <strong>estar em graça — ou seja, sem pecado mortal</strong>. Quem tem consciência de
            pecado grave deve antes confessar-se. Comungar em estado de pecado mortal é{' '}
            <em>sacrilégio</em> (1Cor 11,27-29).
          </p>
        </div>
      </div>

      <h3>🍞 O que acontece na Comunhão?</h3>
      <div className={styles.tresPilares}>
        <div className={styles.pilar}>
          <div className={styles.pilarIcone}>👁️</div>
          <h4>Fé da Igreja</h4>
          <p>O pão e o vinho se tornam verdadeiramente o Corpo e Sangue de Cristo (transubstanciação).</p>
        </div>
        <div className={styles.pilar}>
          <div className={styles.pilarIcone}>❤️</div>
          <h4>União com Cristo</h4>
          <p>Ao comungar, Cristo habita pessoalmente em nós. "Quem come a minha carne... permanece em mim e eu nele" (Jo 6,56).</p>
        </div>
        <div className={styles.pilar}>
          <div className={styles.pilarIcone}>🌿</div>
          <h4>Vida eterna</h4>
          <p>"Quem come este pão viverá eternamente" (Jo 6,58). A Eucaristia é o penhor da ressurreição.</p>
        </div>
      </div>

      <h3>💭 Por que muitos cristãos não comungam?</h3>
      <ul className={styles.listaIcone}>
        <li><strong>Estão em pecado mortal</strong> — e sabem disso. A solução é a confissão.</li>
        <li><strong>Divórcio e nova união civil</strong> — situação irregular. Converse com seu pároco.</li>
        <li><strong>"Não me sinto digno"</strong> — ninguém é digno. A resposta é a confissão.</li>
        <li><strong>Simplesmente não pensam nisso</strong> — indiferença espiritual, o maior perigo silencioso.</li>
      </ul>

      <PecadosVirtudes
        pecados={[
          { t: 'Não comungar na época pascal', d: 'Passar o período sem receber a Eucaristia sem motivo legítimo.' },
          { t: 'Comunhão sacrilega', d: 'Receber a Eucaristia com consciência de pecado mortal não confessado.' },
          { t: 'Recusa prolongada da Eucaristia', d: 'Privar a alma do alimento espiritual essencial por indiferença ou comodismo.' },
          { t: 'Irreverência ao receber', d: 'Comungar distraidamente, sem ato de fé, com pressa ou descuido.' },
        ]}
        virtudes={[
          { t: 'Amor eucarístico', d: 'Fome crescente de Cristo — desejo de recebê-lo cada vez com mais frequência e devoção.' },
          { t: 'Pureza de alma', d: 'O desejo de comungar motiva a confissão — a Eucaristia "puxa" a penitência.' },
          { t: 'Oração de ação de graças', d: 'O tempo após a comunhão dedicado ao colóquio com Cristo presente.' },
          { t: 'Transformação em Cristo', d: '"Tornai-vos o que recebeis" (Santo Agostinho).' },
        ]}
      />

      <ExameConsciencia
        num={3}
        perguntas={[
          'Com que frequência você comunga? Isso reflete sua fome de Deus?',
          'Existe alguma razão pela qual você *não está comungando*? Já conversou com um padre sobre isso?',
          'Quanto tempo você passa em oração de ação de graças **após** a comunhão?',
          'Você acredita realmente que é o próprio Cristo que você recebe — ou trata a Eucaristia como símbolo?',
        ]}
      />

      <Biblia
        cards={[
          { ref: 'Jo 6,48-58', texto: 'O "discurso do pão da vida": Jesus insiste que sua carne é verdadeiro alimento e seu sangue verdadeira bebida.' },
          { ref: '1 Cor 11,23-29', texto: 'Paulo transmite a instituição da Eucaristia e avisa: quem come e bebe indignamente "come e bebe a sua própria condenação".' },
          { ref: 'Lc 24,30-31', texto: 'Em Emaús, os discípulos reconhecem Jesus ressuscitado "na fração do pão".' },
          { ref: 'Mt 26,26-28', texto: 'A instituição da Eucaristia na Última Ceia: "Tomai e comei; isto é o meu corpo."' },
        ]}
      />

      <Catecismo tags={['CIC 2042', 'CIC 1385-1390 (disposições para comungar)', 'CIC 1391-1397 (frutos da comunhão)', 'CIC 1322-1419 (Eucaristia)']} />
    </div>
  )
}

// ─── PRECEITO 4 ─────────────────────────────────────────────
function Preceito4() {
  return (
    <div className={styles.preceitoConteudo}>
      <h3>🔍 O que este preceito realmente exige?</h3>
      <p>
        A Igreja prescreve dois tipos de penitência corporal: <strong>jejum</strong> (reduzir a
        quantidade de alimento) e <strong>abstinência</strong> (abster-se de carne). São práticas
        que ajudam a ordenar os desejos, solidarizar-se com os pobres e participar da Paixão de Cristo.
      </p>

      <div className={styles.tresPilares}>
        <div className={styles.pilar}>
          <div className={styles.pilarIcone}>🍽️</div>
          <h4>Jejum</h4>
          <p>Fazer apenas uma refeição completa e duas pequenas por dia. Obriga dos 18 aos 59 anos. Dias: Quarta-feira de Cinzas e Sexta-feira Santa.</p>
        </div>
        <div className={styles.pilar}>
          <div className={styles.pilarIcone}>🐟</div>
          <h4>Abstinência</h4>
          <p>Não comer carne (mamíferos e aves). Obriga a partir dos 14 anos. Dias: todas as sextas-feiras do ano e Quarta de Cinzas.</p>
        </div>
        <div className={styles.pilar}>
          <div className={styles.pilarIcone}>🙏</div>
          <h4>Penitência</h4>
          <p>A Igreja exige alguma forma de penitência às sextas-feiras — seja abstinência de carne ou outra mortificação equivalente.</p>
        </div>
      </div>

      <h3>🤔 Para que serve o jejum?</h3>
      <div className={styles.argumentoBloco}>
        {[
          { n: '1', t: 'Escola de liberdade interior', d: 'Quem não consegue abrir mão de uma refeição é escravo do próprio estômago. O jejum treina a vontade.' },
          { n: '2', t: 'Solidariedade com os pobres', d: 'Sentir fome por escolha une-nos àqueles que sentem fome por necessidade.' },
          { n: '3', t: 'Poder espiritual', d: 'Jesus jejuou 40 dias antes de começar o ministério. Disse: "Esta casta não se expulsa senão pela oração e pelo jejum" (Mt 17,21).' },
          { n: '4', t: 'Participação na Paixão', d: 'A Quaresma é participar espiritualmente do caminho de Cristo até a Cruz.' },
        ].map(a => (
          <div key={a.n} className={styles.argumento}>
            <span className={styles.argNum}>{a.n}</span>
            <div>
              <strong>{a.t}</strong>
              <p>{a.d}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={`${styles.caixa} ${styles.caixaInfo}`}>
        <div className={styles.caixaIcone}>💡</div>
        <div className={styles.caixaConteudo}>
          <h4>Dispensas do jejum e abstinência</h4>
          <p>
            Estão dispensados do jejum: menores de 18 e maiores de 59 anos, grávidas, lactantes,
            doentes, e quem faz trabalho pesado. Da abstinência estão dispensados os menores de 14 anos.
          </p>
        </div>
      </div>

      <PecadosVirtudes
        pecados={[
          { t: 'Não fazer abstinência nas sextas', d: 'Comer carne nas sextas-feiras sem substituir por outra penitência equivalente.' },
          { t: 'Ignorar a Quarta de Cinzas e Sexta-feira Santa', d: 'Os dois dias de jejum e abstinência mais importantes do calendário.' },
          { t: 'Espiritualismo sem corpo', d: 'Querer orar mas negar qualquer mortificação — como querer construir sem materiais.' },
          { t: 'Indiferença à Quaresma', d: 'Viver o período penitencial como se fosse qualquer época do ano.' },
        ]}
        virtudes={[
          { t: 'Temperança', d: 'Controle sóbrio sobre os apetites — a virtude que ordena os prazeres sensíveis.' },
          { t: 'Fortaleza', d: 'Resistir à tentação de ceder ao corpo. A mortificação constrói a vontade.' },
          { t: 'Penitência', d: 'Disposição de reparar as próprias faltas com obras concretas — não apenas palavras.' },
          { t: 'Compaixão', d: 'Solidariedade real com quem tem fome — não apenas sentimental.' },
        ]}
      />

      <ExameConsciencia
        num={4}
        perguntas={[
          'Você faz abstinência de carne nas sextas-feiras — ou come normalmente sem pensar nisso?',
          'Na Quarta de Cinzas e na Sexta-Feira Santa, você jejua e faz abstinência?',
          'Você tem alguma prática de mortificação voluntária — além do mínimo exigido?',
          'Seu corpo obedece à sua vontade — ou são os apetites que mandam em você?',
        ]}
      />

      <Biblia
        cards={[
          { ref: 'Mt 4,1-2', texto: 'Jesus jejua 40 dias e 40 noites no deserto antes de seu ministério público. O jejum prepara para o serviço.' },
          { ref: 'Jl 2,12-13', texto: '"Convertei-vos a mim de todo o vosso coração, com jejum, com choro e lamentação."' },
          { ref: 'Mt 6,16-18', texto: 'Jesus não diz "SE jejuardes" mas "QUANDO jejuardes" — pressupondo a prática como normal.' },
          { ref: 'At 13,2-3', texto: '"Enquanto jejuavam e oravam ao Senhor, o Espírito Santo disse: Separai-me Barnabé e Saulo."' },
        ]}
      />

      <Catecismo tags={['CIC 2043', 'CIC 1434-1439 (formas de penitência)', 'CIC 2015 (caminho da perfeição)']} />
    </div>
  )
}

// ─── PRECEITO 5 ─────────────────────────────────────────────
function Preceito5() {
  return (
    <div className={styles.preceitoConteudo}>
      <h3>🔍 O que este preceito realmente exige?</h3>
      <p>
        Todo cristão é responsável pela missão da Igreja. Não é o padre quem sustenta a comunidade
        — são os fiéis. Este preceito concretiza o que significa <strong>pertencer</strong> à Igreja:
        não como consumidor de serviços religiosos, mas como membro vivo e corresponsável.
      </p>
      <p>
        As necessidades incluem:{' '}
        <strong>manutenção dos templos, sustento do clero, obras missionárias, caridade, educação religiosa</strong>,
        e tudo mais que permite à Igreja cumprir sua missão.
      </p>

      <h3>💰 Como contribuir? Formas práticas</h3>
      <div className={styles.appsGrid}>
        {[
          { e: '💵', t: 'Dízimo', d: 'A tradição bíblica indica 10% da renda. É um ponto de referência — um ato de fé e gratidão.' },
          { e: '⛪', t: 'Coleta dominical', d: 'A oferta na Missa é o modo mais antigo e direto de sustentar a comunidade local.' },
          { e: '⏰', t: 'Tempo e talento', d: 'Nem todos têm dinheiro — mas todos têm tempo. Voluntariado, catequese, limpeza do templo, música sacra.' },
          { e: '🌍', t: 'Missões', d: 'Contribuições para missões, Campanhas da Fraternidade — a caridade que vai além da paróquia local.' },
        ].map(a => (
          <div key={a.t} className={styles.appCard}>
            <span className={styles.appEmoji}>{a.e}</span>
            <strong>{a.t}</strong>
            <p>{a.d}</p>
          </div>
        ))}
      </div>

      <div className={`${styles.caixa} ${styles.caixaJesus}`}>
        <div className={styles.caixaIcone}>✝️</div>
        <div className={styles.caixaConteudo}>
          <blockquote>"Cada um dê conforme determinou em seu coração, não com tristeza nem por necessidade, porque Deus ama quem dá com alegria."</blockquote>
          <cite>2 Coríntios 9,7</cite>
        </div>
      </div>

      <h3>🤝 Corresponsabilidade, não servidão</h3>
      <p>
        Este preceito não é um "imposto eclesiástico". É a expressão de que a Igreja somos{' '}
        <strong>todos</strong> — não apenas o clero. Quando a paróquia tem recursos, pode ajudar
        famílias pobres, manter a catequese, realizar obras sociais.
      </p>

      <PecadosVirtudes
        pecados={[
          { t: 'Usar a Igreja sem contribuir', d: 'Receber sacramentos, frequentar a comunidade, mas nunca contribuir materialmente.' },
          { t: 'Mentalidade de consumidor', d: '"O padre que se vire" — como se a missão fosse responsabilidade só do clero.' },
          { t: 'Avareza espiritual', d: 'Ter condições de contribuir e não o fazer por apego ao dinheiro.' },
          { t: 'Dar sem discernimento', d: 'Contribuir com organizações que dizem ser "católicas" mas contradizem o magistério.' },
        ]}
        virtudes={[
          { t: 'Generosidade', d: 'Dar com alegria, sem calcular em excesso. "O que semeia com avareza, com avareza colherá" (2Cor 9,6).' },
          { t: 'Corresponsabilidade', d: 'Sentir-se parte ativa da missão — não espectador passivo.' },
          { t: 'Fé concreta', d: 'Colocar o dinheiro onde está a fé. O cheque revela o coração.' },
          { t: 'Confiança na Providência', d: 'Quem dá com generosidade descobre que Deus nunca se deixa vencer em generosidade.' },
        ]}
      />

      <ExameConsciencia
        num={5}
        perguntas={[
          'Você contribui materialmente para sua paróquia e para a missão da Igreja — segundo suas possibilidades?',
          'Você participa da vida da comunidade além das celebrações — ou é um "consumidor de Missa"?',
          'Que talentos e tempo você poderia colocar a serviço da Igreja — e ainda não colocou?',
          'Você dá com **alegria** ou com o coração pesado? Por quê?',
        ]}
      />

      <Biblia
        cards={[
          { ref: 'Lc 21,1-4', texto: 'A viúva que oferece duas moedas: deu "tudo o que tinha para viver". O critério não é o quanto, mas o quanto representa.' },
          { ref: 'Ml 3,10', texto: '"Trazei todos os dízimos ao celeiro... e vede se não abrirei as janelas dos céus."' },
          { ref: '1 Cor 9,14', texto: '"O Senhor ordenou que os que pregam o Evangelho vivam do Evangelho."' },
          { ref: 'At 2,44-45', texto: 'A primeira comunidade cristã: "Todos os que criam estavam juntos e tinham tudo em comum."' },
        ]}
      />

      <Catecismo tags={['CIC 2043', 'CIC 1351 (oferta na Missa)', 'CIC 2444-2449 (amor aos pobres)']} />
    </div>
  )
}

// ─── PRECEITO 6 ─────────────────────────────────────────────
function Preceito6() {
  return (
    <div className={styles.preceitoConteudo}>
      <h3>🔍 O que este preceito realmente exige?</h3>
      <p>
        O matrimônio cristão não é um contrato civil com bênção. É um <strong>sacramento</strong> —
        um sinal eficaz da aliança de Cristo com a Igreja. Este preceito protege a sacralidade dessa
        aliança e ordena as relações familiares segundo o plano de Deus.
      </p>

      <div className={styles.tresPilares}>
        <div className={styles.pilar}>
          <div className={styles.pilarIcone}>💒</div>
          <h4>Casamento canônico</h4>
          <p>Católicos devem casar na Igreja. O casamento civil sem o sacramento não constitui matrimônio válido para os batizados católicos (salvo dispensa).</p>
        </div>
        <div className={styles.pilar}>
          <div className={styles.pilarIcone}>🤝</div>
          <h4>Fidelidade conjugal</h4>
          <p>O sacramento exige amor exclusivo, fiel e permanente. "O que Deus uniu, o homem não separe" (Mt 19,6).</p>
        </div>
        <div className={styles.pilar}>
          <div className={styles.pilarIcone}>👶</div>
          <h4>Abertura à vida</h4>
          <p>O matrimônio é ordenado ao bem dos cônjuges e à geração e educação dos filhos.</p>
        </div>
      </div>

      <h3>⚖️ O que a Igreja proíbe e permite</h3>
      <div className={styles.argumentoBloco}>
        {[
          { n: '❌', t: 'Casamento sem forma canônica', d: 'Batizados católicos que casam apenas no civil, sem dispensa, não contraem matrimônio válido canonicamente.' },
          { n: '❌', t: 'Casamento com impedimentos', d: 'Grau de parentesco proibido, ligame, sacerdócio ou votos perpétuos.' },
          { n: '✅', t: 'Casamento misto', d: 'Permitido com licença do Ordinário local. O cônjuge católico se compromete a batizar e educar os filhos na fé.' },
          { n: '✅', t: 'Processo de nulidade', d: 'Se um matrimônio foi inválido desde o início, pode ser declarado nulo — não "dissolução" mas reconhecimento de que nunca foi válido.' },
        ].map(a => (
          <div key={a.t} className={styles.argumento}>
            <span className={styles.argNum}>{a.n}</span>
            <div>
              <strong>{a.t}</strong>
              <p>{a.d}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={`${styles.caixa} ${styles.caixaInfo}`}>
        <div className={styles.caixaIcone}>🤲</div>
        <div className={styles.caixaConteudo}>
          <h4>Divorciados e recasados</h4>
          <p>
            A Igreja acolhe com misericórdia os divorciados. Aqueles que vivem em nova união civil
            — sem declaração de nulidade — não podem, em princípio, receber a Eucaristia. Mas a
            Igreja os convida à participação comunitária.{' '}
            <strong>Nenhuma situação é sem saída pastoral — fale com um padre</strong>.
          </p>
        </div>
      </div>

      <PecadosVirtudes
        pecados={[
          { t: 'Casamento apenas civil', d: 'Sem a celebração sacramental ou dispensa, para os católicos.' },
          { t: 'Coabitação pré-matrimonial', d: '"Morar junto antes" não é casamento — é situação irregular que contradiz o plano de Deus.' },
          { t: 'Contracepção artificial', d: 'Bloquear deliberadamente a abertura à vida no ato conjugal (Humanae Vitae).' },
          { t: 'Abandono do cônjuge', d: 'Deixar o parceiro sem causa grave — violar a promessa de fidelidade.' },
        ]}
        virtudes={[
          { t: 'Fidelidade conjugal', d: 'Amor exclusivo e permanente que espelha o amor de Cristo pela Igreja.' },
          { t: 'Abertura à vida', d: 'Receber os filhos como dom — não os programar como projetos ou evitá-los como empecilhos.' },
          { t: 'Castidade conjugal', d: 'Ordenar a sexualidade dentro do matrimônio segundo os fins do sacramento.' },
          { t: 'Paternidade responsável', d: 'Discernir com Deus, o médico e o padre o número e o espaçamento dos filhos.' },
        ]}
      />

      <ExameConsciencia
        num={6}
        perguntas={[
          '*Se casado(a):* Seu casamento foi celebrado na Igreja? Você vive fiel à aliança que fez diante de Deus?',
          'Você está aberto à vida em seu casamento — ou bloqueia deliberadamente essa abertura?',
          '*Se solteiro(a):* Você tem planos de se casar na Igreja? Ou "vai ver o que dá"?',
          'Sua situação conjugal está em conformidade com a lei da Igreja? Se não, você já buscou orientação pastoral?',
        ]}
      />

      <Santos
        cards={[
          { nome: 'Santos Luís e Zélia Martin', texto: 'Pais de Santa Teresa do Menino Jesus. O primeiro casal canonizado juntos (2015). Testemunho de que o matrimônio é caminho de santidade.' },
          { nome: 'Beato Carlo Acutis', texto: 'Filho de pais que levaram a sério a educação na fé. O matrimônio que cuida da formação espiritual dos filhos reflete a graça sacramental.' },
        ]}
      />

      <Biblia
        cards={[
          { ref: 'Mt 19,3-9', texto: 'Jesus restaura o matrimônio ao plano original de Deus: "O que Deus uniu, o homem não separe."' },
          { ref: 'Ef 5,25-32', texto: '"Maridos, amai vossas mulheres, como Cristo amou a Igreja." O matrimônio como símbolo da aliança de Cristo.' },
          { ref: 'Gn 2,24', texto: '"O homem deixará seu pai e sua mãe e se unirá à sua mulher, e os dois serão uma só carne."' },
          { ref: 'Jo 2,1-11', texto: 'O milagre de Caná: o primeiro milagre de Jesus acontece em uma festa de casamento.' },
        ]}
      />

      <Catecismo tags={['CIC 2043', 'CIC 1601-1666 (sacramento do matrimônio)', 'CIC 1638-1642 (efeitos do matrimônio)', 'CIC 2360-2379 (amor conjugal)']} />
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// COMPONENTE: ORIGEM HISTÓRICA DOS PRECEITOS
// ═══════════════════════════════════════════════════════════
function OrigemPreceitos() {
  return (
    <section className={styles.secao} id="origem">
      <div className={styles.secaoInner}>

        <div className={styles.secaoHeader}>
          <span className={styles.secaoBadge}>📜 Origem Histórica</span>
          <h2>De onde vieram os Preceitos da Igreja?</h2>
          <p className={styles.secaoSubtexto}>
            Antes de estudar cada preceito, entenda a <strong>história</strong> por trás deles —
            2000 anos de sabedoria pastoral condensados em 6 obrigações mínimas.
          </p>
        </div>

        {/* ─── NOTA SOBRE O 6º PRECEITO ─── */}
        <div className={styles.sextoPreceito} data-aos="">
          <div className={styles.sextoHeader}>
            <div className={styles.sextoLabel}>
              <span className={styles.sextoLabelIcone}>📖</span>
              <span className={styles.sextoLabelTexto}>Nota histórica</span>
            </div>
            <h3>Por que este estudo apresenta 6 preceitos?</h3>
            <p className={styles.sextoSubtitulo}>
              Uma explicação honesta sobre a origem do 6º preceito na tradição brasileira
            </p>
          </div>

          <div className={styles.sextoCorpo}>
            <p className={styles.sextoTexto}>
              O <strong>Catecismo da Igreja Católica</strong> (1992) apresenta oficialmente
              <strong> 5 preceitos</strong> nos parágrafos 2042-2043. Este é o texto magisterial
              atualmente em vigor no Vaticano. Então por que estamos estudando <strong>6</strong>?
              A resposta está na história.
            </p>

            <div className={styles.sextoDivisor}><span>✦</span></div>

            <h4 className={styles.sextoSubtitulo2}>🕰️ A raiz histórica</h4>
            <p className={styles.sextoTexto}>
              Ao longo dos séculos, a Igreja <em>nunca teve uma lista fixa universal</em> dos
              preceitos. Diferentes catecismos apresentaram números diferentes — Santo Antonino
              de Florença (séc. XV) chegou a listar 10 preceitos em sua obra pessoal. Outros
              catecismos históricos apresentavam 4, 5, 6 ou 7. A variação era pastoral e regional.
            </p>
            <p className={styles.sextoTexto}>
              No Brasil, catecismos populares dos séculos <strong>XIX e XX</strong> — usados na
              formação de gerações de católicos brasileiros — frequentemente incluíam um sexto
              preceito com a seguinte redação:
            </p>

            <div className={styles.sextoCitacaoAntiga}>
              <span className={styles.sextoCitacaoAspa}>"</span>
              <blockquote>
                Não casar com parentes até segundo grau, nem assistir a bodas de parentes seus
                casando em graus proibidos, nem em tempo defeso.
              </blockquote>
              <cite>Catecismos brasileiros populares — séc. XIX-XX</cite>
            </div>

            <p className={styles.sextoTexto}>
              Essa formulação vinha do antigo <strong>Código de Direito Canônico de 1917</strong>,
              que estabelecia restrições ao casamento em certos períodos litúrgicos (Advento e
              Quaresma — os chamados "tempos defesos") e regulamentava impedimentos de parentesco.
            </p>

            <div className={styles.sextoDivisor}><span>✦</span></div>

            <h4 className={styles.sextoSubtitulo2}>⚖️ O que mudou desde então</h4>
            <p className={styles.sextoTexto}>Duas grandes reformas transformaram este cenário:</p>

            <div className={styles.sextoTimeline}>
              <div className={styles.sextoTimelineItem}>
                <div className={styles.sextoTimelineData}>1983</div>
                <div className={styles.sextoTimelineTexto}>
                  <strong>Novo Código de Direito Canônico</strong> — promulgado por São João Paulo II,
                  simplificou as regras matrimoniais. <em>Não há mais "tempos defesos"</em> para
                  casamento. As restrições que davam base ao 6º preceito foram amenizadas.
                </div>
              </div>
              <div className={styles.sextoTimelineItem}>
                <div className={styles.sextoTimelineData}>1992</div>
                <div className={styles.sextoTimelineTexto}>
                  <strong>Catecismo da Igreja Católica</strong> — consolidou oficialmente a lista
                  em <em>5 preceitos</em>, entendendo que a observância das leis matrimoniais está
                  incluída na obediência geral à Igreja e nos 6º e 9º Mandamentos de Deus.
                </div>
              </div>
            </div>

            <div className={styles.sextoDivisor}><span>✦</span></div>

            <h4 className={styles.sextoSubtitulo2}>🇧🇷 Por que ainda ensinamos como 6?</h4>
            <p className={styles.sextoTexto}>
              Muitos catecistas, padres e materiais formativos brasileiros{' '}
              <strong>mantiveram pastoralmente</strong> o 6º preceito por três razões práticas:
            </p>

            <div className={styles.sextoRazoes}>
              <div className={styles.sextoRazaoCard}>
                <span className={styles.sextoRazaoNum}>1</span>
                <div>
                  <h5>Continuidade catequética</h5>
                  <p>Gerações de católicos brasileiros aprenderam "6 preceitos". Mudar bruscamente causaria confusão pastoral e ruptura com materiais formativos consagrados.</p>
                </div>
              </div>
              <div className={styles.sextoRazaoCard}>
                <span className={styles.sextoRazaoNum}>2</span>
                <div>
                  <h5>Destaque pastoral ao matrimônio</h5>
                  <p>Num tempo de crise da família — divórcios, uniões irregulares, contracepção — separar as leis matrimoniais como preceito próprio dá <em>relevância pedagógica</em> a um tema urgente.</p>
                </div>
              </div>
              <div className={styles.sextoRazaoCard}>
                <span className={styles.sextoRazaoNum}>3</span>
                <div>
                  <h5>Adaptação ao contexto atual</h5>
                  <p>A redação foi <em>atualizada</em>: em vez das antigas restrições canônicas de 1917, o 6º preceito hoje engloba a obediência geral às leis da Igreja sobre o matrimônio.</p>
                </div>
              </div>
            </div>

            <div className={styles.sextoDivisor}><span>✦</span></div>

            <div className={styles.sextoConclusao}>
              <div className={styles.sextoConclusaoIcone}>💡</div>

            </div>
          </div>
        </div>

        {/* ─── CITAÇÃO ─── */}
        <div className={`${styles.caixa} ${styles.caixaJesus}`} data-aos="">
          <div className={styles.caixaIcone}>✝️</div>
          <div className={styles.caixaConteudo}>
            <blockquote>"Quem vos ouve, a mim ouve; quem vos rejeita, a mim rejeita."</blockquote>
            <cite>Lucas 10,16 — a autoridade da Igreja fundada por Cristo</cite>
          </div>
        </div>

        <p className={`${styles.preceitoConteudo} ${styles.origemTextoIntro}`}>
          Os Preceitos da Igreja <strong>não caíram do céu prontos</strong>. Eles são fruto de
          um longo processo de discernimento pastoral — a Igreja, através dos séculos,
          identificou <em>o mínimo indispensável</em> para que um católico permanecesse na graça
          e em comunhão com o Corpo Místico de Cristo.
        </p>

        {/* ─── LINHA DO TEMPO ─── */}
        <h3 className={styles.origemH3}>⏳ Linha do Tempo</h3>

        <div className={styles.timeline}>
          {[
            {
              data: 'Séc. I',
              titulo: 'A Igreja Apostólica',
              texto: 'Os primeiros cristãos já se reuniam "no primeiro dia da semana" (At 20,7) para a fração do pão. Praticavam o jejum (Didaqué, séc. I), confessavam os pecados (Tg 5,16) e sustentavam materialmente a comunidade (At 2,44-45). Os "preceitos" já existiam na prática, mesmo sem estarem codificados.',
            },
            {
              data: 'Séc. II–IV',
              titulo: 'Pais da Igreja e Concílios Primitivos',
              texto: 'Padres como Santo Inácio de Antioquia, Tertuliano e Santo Agostinho reforçam a obrigação do culto dominical, da confissão pública e do jejum quaresmal. O Concílio de Elvira (c. 305) já pune quem falta à Missa três domingos seguidos.',
            },
            {
              data: 'Séc. IV–VI',
              titulo: 'Consolidação Litúrgica',
              texto: 'Com a paz constantiniana (313 d.C.), a Igreja pode estruturar-se abertamente. Fixam-se as festas de guarda, os tempos litúrgicos (Advento, Quaresma) e as obrigações do fiel. O ano litúrgico torna-se a "escola de fé" do povo cristão.',
            },
            {
              data: '1215',
              titulo: 'IV Concílio de Latrão — Marco Fundamental',
              texto: 'O Papa Inocêncio III convoca este concílio ecumênico que codifica pela primeira vez a obrigação da confissão anual e da comunhão pascal (cânon Omnis utriusque sexus). Aqui nascem, oficialmente, o que viriam a ser o 2º e 3º Preceitos.',
            },
            {
              data: 'Séc. XIII–XV',
              titulo: 'Sistematização Escolástica',
              texto: 'Santo Tomás de Aquino (†1274), na Suma Teológica, organiza teologicamente as obrigações do cristão. Catecismos medievais começam a listar os "mandamentos da Igreja" ao lado dos 10 Mandamentos de Deus.',
            },
            {
              data: '1566',
              titulo: 'Catecismo Romano (do Concílio de Trento)',
              texto: 'Após a crise protestante, o Concílio de Trento (1545-1563) e o Catecismo Romano (1566) formalizam a lista dos Preceitos como obrigações vinculantes para todo católico. A numeração variou (5, 6 ou 7 preceitos) segundo regiões, mas o conteúdo essencial era o mesmo.',
            },
            {
              data: '1983',
              titulo: 'Código de Direito Canônico',
              texto: 'O Código promulgado por São João Paulo II reordena as obrigações dos fiéis, especificando dias de festa, jejum e abstinência (cân. 1246-1253). A disciplina se torna mais flexível — mas a essência dos preceitos permanece.',
            },
            {
              data: '1992',
              titulo: 'Catecismo da Igreja Católica',
              texto: 'O CIC — promulgado por São João Paulo II — fixa definitivamente a lista dos 6 Preceitos nos parágrafos 2041-2043. É esta a redação que estudamos hoje: sintética, universal, obrigatória para todo católico de rito latino.',
            },
          ].map((item, i) => (
            <div key={i} className={styles.timelineItem} data-aos="">
              <div className={styles.timelineData}>{item.data}</div>
              <div className={styles.timelineCorpo}>
                <h4>{item.titulo}</h4>
                <p>{item.texto}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.caixa} ${styles.caixaInfo}`} data-aos="">
          <div className={styles.caixaIcone}>💡</div>
          <div className={styles.caixaConteudo}>
            <h4>Uma síntese perfeita da vida cristã</h4>
            <p>
              Os 6 preceitos cobrem:{' '}
              <strong>o culto, a graça, o alimento, a disciplina, a comunidade e a família</strong>.
              Nada da vida cristã fica de fora — e nada supérfluo é acrescentado. É a genialidade
              pastoral da Igreja: dizer o mínimo necessário, sem sufocar o fiel com regras excessivas.
            </p>
          </div>
        </div>

        {/* ─── AUTORIDADE ─── */}
        <h3 className={styles.origemH3}>⚖️ De onde vem a autoridade da Igreja para impor isso?</h3>

        <p className={styles.preceitoConteudo}>
          Muita gente pergunta: <em>"Se Jesus deu os 10 Mandamentos, por que a Igreja acrescenta
            mais 6?"</em> A resposta está no próprio Evangelho:
        </p>

        <div className={styles.origemVersiculos}>
          {[
            {
              ref: 'Mateus 16,18-19',
              texto: '"Tu és Pedro, e sobre esta pedra edificarei a minha Igreja... Dar-te-ei as chaves do Reino dos Céus: tudo o que ligares na terra será ligado no céu, e tudo o que desligares na terra será desligado no céu."',
            },
            {
              ref: 'Mateus 18,17-18',
              texto: '"Se não ouvir a Igreja, seja considerado como pagão e publicano... Tudo o que ligardes na terra será ligado no céu."',
            },
            {
              ref: 'Atos 15,28',
              texto: '"Pareceu bem ao Espírito Santo e a nós não vos impor outro fardo além destas coisas necessárias..." — o Concílio de Jerusalém já legislava.',
            },
          ].map((v, i) => (
            <div key={i} className={styles.versiculoBloco} data-aos="">
              <span className={styles.versiculoRef}>{v.ref}</span>
              <blockquote>{v.texto}</blockquote>
            </div>
          ))}
        </div>

        <p className={styles.preceitoConteudo}>
          Cristo deu à Igreja o <strong>poder de "ligar e desligar"</strong> — ou seja, de estabelecer
          disciplinas obrigatórias. Os 6 Preceitos são exercício legítimo desta autoridade, sempre em{' '}
          <em>continuidade</em> com os 10 Mandamentos, nunca em substituição.
        </p>

        {/* ─── CONCLUSÃO ─── */}
        <div className={`${styles.caixa} ${styles.caixaAlerta}`} data-aos="">
          <div className={styles.caixaIcone}>⚠️</div>
          <div className={styles.caixaConteudo}>
            <h4>Não são "leis humanas arbitrárias"</h4>
            <p>
              Rejeitar os Preceitos por serem "invenção da Igreja" é rejeitar a autoridade que o
              próprio Cristo deu aos apóstolos. Quem quer Cristo <strong>sem</strong> a Igreja acaba
              não tendo nem Cristo, nem Igreja — apenas uma versão privada da fé, sujeita aos próprios humores.
            </p>
          </div>
        </div>

        <p className={`${styles.preceitoConteudo} ${styles.origemFecho}`}>
          Agora que você entende <strong>de onde</strong> vieram e <strong>por que</strong> existem,
          vamos ao estudo detalhado de cada um dos 6 Preceitos. 👇
        </p>

      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// COMPONENTE PRINCIPAL
// ═══════════════════════════════════════════════════════════
export default function MandamentosClient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { pct, showTopo, showNav, activePreceito } = useScroll()
  const { estudados, marcar } = useProgresso()
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  useParticulas(canvasRef)

  // Observer para animar os StatCards
  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Observer para animações data-aos
  useEffect(() => {
    const els = document.querySelectorAll('[data-aos]')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visivel')
      }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const romanos = ['I', 'II', 'III', 'IV', 'V', 'VI']

  return (
    <>
      <canvas ref={canvasRef} id="particulas" className={styles.canvas} />

      {/* BARRA DE PROGRESSO */}
      <div className={styles.barraProgressoWrap}>
        <div className={styles.barraProgresso} style={{ width: `${pct}%` }} />
      </div>

      {/* NAV LATERAL */}
      <nav className={`${styles.navLateral} ${showNav ? styles.visivel : ''}`}>
        <div className={styles.navLatTitulo}>Preceitos</div>
        {romanos.map((r, i) => (
          <a
            key={i}
            href={`#p${i + 1}`}
            className={`${styles.navLatItem} ${activePreceito === i + 1 ? styles.ativo : ''}`}
          >
            {r}
          </a>
        ))}
        <div className={styles.navLatDivisor} />
        <a href="#secaoQuiz" className={`${styles.navLatItem} ${styles.navLatQuiz}`}>⚔️</a>
      </nav>

      {/* BOTÃO VOLTAR */}
      <Link href="/estudos" className={styles.btnVoltar}>
        <span className={styles.voltarSeta}>←</span>
        <span className={styles.voltarTexto}>Estudos</span>
      </Link>

      {/* BOTÃO TOPO */}
      <button
        className={`${styles.btnTopo} ${showTopo ? styles.visivel : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>

 {/* ── HERO ── */}
<section className={styles.hero} id="hero">

  {/* Camada 1: Fundo com gradiente atmosférico */}
  <div className={styles.heroBg} />

  {/* Camada 2: Raios de luz difusos (atmosfera) */}
  <div className={styles.heroRaios}>
    {Array.from({ length: 8 }).map((_, i) => (
      <span key={i} style={{ '--i': i } as React.CSSProperties} />
    ))}
  </div>

  {/* Camada 3: Catedral — palco central */}
  <div className={styles.heroCatedral}>
    <div className={styles.catedralHalo} />
    <img src="/estudos/mandamentos/mandamentos-igreja/igreja.png" alt="Catedral" className={styles.catedralImg} />
    <div className={styles.catedralVitral} />
    <div className={styles.catedralBase} />
  </div>

  {/* Camada 4: Partículas douradas (incenso subindo) */}
  <div className={styles.heroParticulas}>
    {Array.from({ length: 20 }).map((_, i) => (
      <span
        key={i}
        style={{
          '--delay': `${i * 0.6}s`,
          '--x': `${5 + Math.random() * 90}%`,
          '--size': `${2 + Math.random() * 3}px`,
          '--duration': `${6 + Math.random() * 4}s`,
        } as React.CSSProperties}
      />
    ))}
  </div>

  {/* Camada 5: Conteúdo textual — centralizado sobre a catedral */}
  <div className={styles.heroInner}>
    <p className={styles.heroPretitulo}>
      <span className={styles.heroPreLinha} />
      Lux Fidei · Formação Católica
      <span className={styles.heroPreLinha} />
    </p>

    <h1 className={styles.heroTitulo}>
      Os <span>Mandamentos</span>
      <br />da Igreja
    </h1>

    <p className={styles.heroSubtitulo}>
      Os 6 Preceitos que sustentam a vida cristã
    </p>

    <div className={styles.heroCitacao}>
      <blockquote>"Se me amais, guardareis os meus mandamentos."</blockquote>
      <cite>João 14,15</cite>
    </div>

    <p className={styles.heroDescricao}>
      Além dos 10 Mandamentos de Deus, a Igreja — como Mãe e Mestra — estabeleceu{' '}
      <strong>6 preceitos próprios</strong> que concretizam as obrigações mínimas do cristão.
      Não são fardos — são o esqueleto que sustenta a vida de fé.{' '}
      <em>Conhecê-los é o primeiro passo para vivê-los.</em>
    </p>

    <div className={styles.heroStats} ref={statsRef}>
      <StatCard icone="📜" target={6}    label="Preceitos"        trigger={statsVisible} />
      <StatCard icone="⛪" target={2000} label="anos de tradição" trigger={statsVisible} />
      <StatCard icone="📕" target={1}    label="Igreja, uma só"   trigger={statsVisible} />
      <StatCard icone="🙏" target={0}    label="graça disponível" special="∞" trigger={statsVisible} />
    </div>

    <div className={styles.heroProvocacao}>
      <p>
        🤔 <strong>Você conhece os 6 Preceitos da Igreja?</strong><br />
        Muitos católicos praticantes não conseguem listá-los. Eles estão no{' '}
        <em>Catecismo da Igreja Católica</em> (CIC 2041-2043) e são o{' '}
        <strong>mínimo</strong> exigido — não o máximo.
      </p>
    </div>

    <button className={styles.btnComecar} onClick={() => scrollTo('visaogeral')}>
      <span>Começar a Jornada</span>
      <span className={styles.btnSeta}>↓</span>
    </button>
  </div>
</section>

      {/* ── VISÃO GERAL ── */}
      <section className={styles.secao} id="visaogeral">
        <div className={styles.secaoInner}>
          <div className={styles.secaoHeader}>
            <span className={styles.secaoBadge}>📋 Visão Geral</span>
            <h2>Os 6 Preceitos — uma olhada rápida</h2>
            <p className={styles.secaoSubtexto}>
              Os preceitos da Igreja são <strong>obrigações positivas</strong> — não apenas proibições.
              Clique em qualquer um para ir direto ao estudo aprofundado.
            </p>
          </div>

          <div className={`${styles.caixa} ${styles.caixaInfo}`} data-aos="">
            <div className={styles.caixaIcone}>💡</div>
            <div className={styles.caixaConteudo}>
              <h4>O que é um "preceito"?</h4>
              <p>
                A palavra vem do latim <em>praeceptum</em> — "ordem", "regra". Os preceitos são
                determinações práticas que ajudam os fiéis a cumprir as obrigações fundamentais
                da vida cristã. O CIC os chama de "mínimo indispensável" (CIC 2041).
              </p>
            </div>
          </div>

          <div className={styles.preceitosGrade}>
            {PRECEITOS.map(pr => (
              <a key={pr.num} href={`#p${pr.num}`} className={styles.preceitoCardMini} data-aos="">
                <div className={styles.pcmNum}>{pr.label}</div>
                <div className={styles.pcmTitulo}>{pr.titulo}</div>
                <div className={styles.pcmResumo}>{pr.resumo}</div>
                <span className={styles.pcmSeta}>→</span>
              </a>
            ))}
          </div>

          <div className={`${styles.caixa} ${styles.caixaAlerta}`} data-aos="">
            <div className={styles.caixaIcone}>⚠️</div>
            <div className={styles.caixaConteudo}>
              <h4>Atenção: "mínimo" não é "suficiente"</h4>
              <p>
                Os preceitos determinam o <strong>piso</strong>, não o teto. A vida de fé plena vai
                muito além — diálogo constante com Deus, obras de misericórdia, estudo da fé, apostolado.
                Os preceitos são o <em>ponto de partida</em>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ORIGEM HISTÓRICA ── */}
      <OrigemPreceitos />

      {/* ── PRECEITOS ── */}
      {PRECEITOS.map(pr => (
        <section
          key={pr.num}
          className={`${styles.preceito} ${styles.secao}`}
          id={`p${pr.num}`}
          data-preceito={pr.num}
        >
          <div className={styles.preceitoNumBg}>{pr.romano}</div>
          <div className={styles.secaoInner}>
            <div className={styles.preceitoHeader}>
              <div className={styles.preceitoNumero}><span>{pr.romano}</span></div>
              <div className={styles.preceitoTituloBloco}>
                <span className={styles.preceitoLabel}>{pr.label}</span>
                <h2>{pr.titulo}</h2>
                <div className={styles.preceitoCitacao}>
                  <blockquote>{pr.citacao}</blockquote>
                  <cite>{pr.fonte}</cite>
                </div>
              </div>
            </div>

            <PreceitoConteudo num={pr.num} />

            <div className={styles.mandCheck}>
              <label className={styles.checkLabel}>
                <input
                  type="checkbox"
                  checked={estudados.includes(pr.num)}
                  onChange={e => marcar(pr.num, e.target.checked)}
                />
                <span className={styles.checkCaixa} />
                <span className={styles.checkTexto}>✅ Estudei o {pr.romano}º Preceito</span>
              </label>
            </div>
          </div>
        </section>
      ))}

      {/* ── QUIZ ── */}
      <section className={`${styles.secao} ${styles.secaoQuiz}`} id="secaoQuiz">
        <div className={styles.secaoInner}>
          <div className={styles.secaoHeader}>
            <span className={styles.secaoBadge}>⚔️ Desafio</span>
            <h2>Você conhece os Preceitos da Igreja?</h2>
            <p className={styles.secaoSubtexto}>
              {TOTAL_PERGUNTAS} perguntas para testar o que você aprendeu — com explicação a cada resposta.
            </p>
          </div>
          <Quiz />
        </div>
      </section>
    </>
  )
}