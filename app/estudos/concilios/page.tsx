'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './concilios.module.css'

// ============================================================
// TIPOS
// ============================================================

interface Concilio {
  num: string
  slug: string
  nome: string
  data: string
  ano: number
  contexto: string
}

interface Caderno {
  era: string
  descricao: string
  concilios: Concilio[]
}

// ============================================================
// DADOS
// ============================================================

const cadernos: Caderno[] = [
  {
    era: 'Era Patrística',
    descricao: 'Os grandes concílios cristológicos',
    concilios: [
      { num: 'I',    slug: 'niceia-1',        nome: 'Niceia I',              data: '325',       ano: 325,  contexto: 'Definiu o Credo contra o arianismo de Ário' },
      { num: 'II',   slug: 'constantinopla-1', nome: 'Constantinopla I',      data: '381',       ano: 381,  contexto: 'Completou o Credo Niceno-Constantinopolitano' },
      { num: 'III',  slug: 'efeso',            nome: 'Éfeso',                 data: '431',       ano: 431,  contexto: 'Proclamou Maria como Theotókos — Mãe de Deus' },
      { num: 'IV',   slug: 'calcedonia',       nome: 'Calcedônia',            data: '451',       ano: 451,  contexto: 'Definiu as duas naturezas de Cristo em uma só pessoa' },
      { num: 'V',    slug: 'constantinopla-2', nome: 'Constantinopla II',     data: '553',       ano: 553,  contexto: 'Condenou os Três Capítulos nestorianos' },
      { num: 'VI',   slug: 'constantinopla-3', nome: 'Constantinopla III',    data: '680–681',   ano: 680,  contexto: 'Definiu as duas vontades de Cristo contra o monotelismo' },
      { num: 'VII',  slug: 'niceia-2',         nome: 'Niceia II',             data: '787',       ano: 787,  contexto: 'Restaurou o culto às sagradas imagens' },
      { num: 'VIII', slug: 'constantinopla-4', nome: 'Constantinopla IV',     data: '869–870',   ano: 869,  contexto: 'Último concílio do primeiro milênio cristão' },
    ],
  },
  {
    era: 'Era Medieval',
    descricao: 'Latrão e Lyon — a Igreja e as coroas da Cristandade',
    concilios: [
      { num: 'IX',   slug: 'latrao-1',               nome: 'Latrão I',              data: '1123',      ano: 1123, contexto: 'Confirmou a Concordata de Worms' },
      { num: 'X',    slug: 'latrao-2',               nome: 'Latrão II',             data: '1139',      ano: 1139, contexto: 'Encerrou o cisma do antipapa Anacleto II' },
      { num: 'XI',   slug: 'latrao-3',               nome: 'Latrão III',            data: '1179',      ano: 1179, contexto: 'Reformou a eleição papal — dois terços dos cardeais' },
      { num: 'XII',  slug: 'latrao-4',               nome: 'Latrão IV',             data: '1215',      ano: 1215, contexto: 'Definiu dogmaticamente a transubstanciação' },
      { num: 'XIII', slug: 'lyon-1',                 nome: 'Lyon I',                data: '1245',      ano: 1245, contexto: 'Depôs o imperador Frederico II' },
      { num: 'XIV',  slug: 'lyon-2',                 nome: 'Lyon II',               data: '1274',      ano: 1274, contexto: 'Tentativa de união com os ortodoxos orientais' },
      { num: 'XV',   slug: 'vienne',                 nome: 'Vienne',                data: '1311–1312', ano: 1311, contexto: 'Suprimiu a Ordem dos Templários' },
    ],
  },
  {
    era: 'Era da Reforma',
    descricao: 'A resposta doutrinal à fratura protestante',
    concilios: [
      { num: 'XVI',   slug: 'constanca',                 nome: 'Constança',                 data: '1414–1418', ano: 1414, contexto: 'Pôs fim ao Grande Cisma do Ocidente' },
      { num: 'XVII',  slug: 'basileia-ferrara-florenca', nome: 'Basileia–Ferrara–Florença', data: '1431–1449', ano: 1431, contexto: 'União temporária com a Igreja grega' },
      { num: 'XVIII', slug: 'latrao-5',                  nome: 'Latrão V',                  data: '1512–1517', ano: 1512, contexto: 'Reformas às vésperas da Reforma Protestante' },
      { num: 'XIX',   slug: 'trento',                    nome: 'Trento',                    data: '1545–1563', ano: 1545, contexto: 'Contrarreforma e definição doutrinal completa' },
    ],
  },
  {
    era: 'Era Moderna',
    descricao: 'Os dois Vaticanos',
    concilios: [
      { num: 'XX',  slug: 'vaticano-1', nome: 'Vaticano I',  data: '1869–1870', ano: 1869, contexto: 'Definiu o dogma da infalibilidade papal' },
      { num: 'XXI', slug: 'vaticano-2', nome: 'Vaticano II', data: '1962–1965', ano: 1962, contexto: 'Renovação pastoral, litúrgica e ecumênica' },
    ],
  },
]

// ============================================================
// FRASES ARIANAS CONDENADAS
// ============================================================

interface FraseCondenada {
  texto: string
  rot: number      
  offset: number   
}

// Frases condenadas em Niceia I (325)
const FRASES_CONDENADAS: FraseCondenada[] = [
  { texto: 'Houve um tempo em que Ele não existia.',    rot: -3, offset: 12  },
  { texto: 'Antes de ser gerado, Ele não existia.',     rot: 2,  offset: -18 },
  { texto: 'O Filho de Deus foi feito do nada.',        rot: -4, offset: 28  },
  { texto: 'O Filho é de substância diferente do Pai.', rot: 1,  offset: -8  },
  { texto: 'O Filho é criatura passível de mudança.',   rot: -2, offset: 20  },
]

// Frases condenadas em Constantinopla I (381)
const FRASES_CONSTANTINOPLA: FraseCondenada[] = [
  { texto: 'O Espírito Santo não é Deus, mas criatura.',          rot: -2, offset: 10  },
  { texto: 'O Espírito Santo é apenas um ministro do Filho.',     rot: 3,  offset: -14 },
  { texto: 'Cristo não possui mente humana racional.',            rot: -3, offset: 22  },
  { texto: 'O Filho é essencialmente diferente do Pai.',          rot: 1,  offset: -6  },
  { texto: 'O reino do Filho terá fim.',                          rot: -2, offset: 16  },
]

// Frases condenadas em Éfeso (431)
// Frases condenadas em Éfeso (431) - Versão em linha única
const FRASES_EFESO: FraseCondenada[] = [
  { texto: 'Maria não deve ser chamada Theotókos.',       rot: -2, offset: 8   },
  { texto: 'Maria é mãe apenas do homem, não de Deus.',   rot: 3,  offset: -12 },
  { texto: 'Em Cristo há duas pessoas e dois sujeitos.',  rot: -3, offset: 14  },
  { texto: 'A divindade não nasceu de uma mulher.',       rot: 1,  offset: -6  },
  { texto: 'Cristo é um homem portador de Deus.',         rot: -2, offset: 10  },
]

// Frases condenadas em Calcedônia (451) - Monofisismo
const FRASES_CALCEDONIA: FraseCondenada[] = [
  { texto: 'Há apenas uma natureza após a união.',      rot: -2, offset: 6  },
  { texto: 'A humanidade foi absorvida por Deus.',      rot: 2,  offset: -10 },
  { texto: 'O corpo de Cristo não é como o nosso.',     rot: -3, offset: 14  },
  { texto: 'Cristo não subsiste em duas naturezas.',    rot: 1,  offset: -4  },
  { texto: 'Houve mistura entre as duas naturezas.',    rot: -2, offset: 10  },
]
// Frases condenadas em Constantinopla II (553)
const FRASES_CONSTANTINOPLA_2: FraseCondenada[] = [
  { texto: 'As almas humanas preexistiam ao corpo.',         rot: -2, offset: 6  },
  { texto: 'O apocatástase salvará todos os demônios.',     rot: 2,  offset: -10 },
  { texto: 'Os escritos nestorianos são ortodoxos.',         rot: -3, offset: 14  },
  { texto: 'A pessoa de Cristo pode ser dividida.',          rot: 1,  offset: -4  },
  { texto: 'O sofrimento na cruz não toca a divindade.',     rot: -2, offset: 10  },
]

const todosOrdenados = cadernos.flatMap((c) => c.concilios)

// ============================================================
// ESCALA PROPORCIONAL DO TEMPO
// ============================================================

const PX_POR_RAIZ_ANO = 5.6
const GAP_MINIMO = 24
const GAP_MAXIMO = 160

function gapProporcional(anoAtual: number, anoAnterior: number | null): number {
  if (anoAnterior === null) return 0
  const anos = anoAtual - anoAnterior
  const gap = Math.sqrt(anos) * PX_POR_RAIZ_ANO
  return Math.min(GAP_MAXIMO, Math.max(GAP_MINIMO, gap))
}

function anoAnteriorDe(slug: string): number | null {
  const idx = todosOrdenados.findIndex((c) => c.slug === slug)
  if (idx <= 0) return null
  return todosOrdenados[idx - 1].ano
}

function intervaloAnos(slug: string): number | null {
  const idx = todosOrdenados.findIndex((c) => c.slug === slug)
  if (idx <= 0) return null
  return todosOrdenados[idx].ano - todosOrdenados[idx - 1].ano
}

// ============================================================
// COMPONENTE
// ============================================================

export default function ConciliosPage() {
  const [niceiaVisto, setNiceiaVisto] = useState(false)
  const [constantinoplaVisto, setConstantinoplaVisto] = useState(false)
  const [efesoVisto, setEfesoVisto] = useState(false)
  const [montado, setMontado] = useState(false)
  const [calcedoniaVisto, setCalcedoniaVisto] = useState(false) 
const [constantinopla2Visto, setConstantinopla2Visto] = useState(false) // 👈 ADICIONE ESTA LINHA

  useEffect(() => {
    try {
      setNiceiaVisto(localStorage.getItem('visitado:niceia-1') === '1')
      setConstantinoplaVisto(localStorage.getItem('visitado:constantinopla-1') === '1')
      setEfesoVisto(localStorage.getItem('visitado:efeso') === '1')
      setCalcedoniaVisto(localStorage.getItem('visitado:calcedonia') === '1')
      setConstantinopla2Visto(localStorage.getItem('visitado:constantinopla-2') === '1')
    } catch { /* ignore */ }
    setMontado(true)
  }, [])

  const marcarVisto = (slug: string) => {
    try {
      localStorage.setItem(`visitado:${slug}`, '1')
    } catch { /* ignore */ }
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.ornamentoEsquerdo} aria-hidden="true" />
      <div className={styles.ornamentoDireito} aria-hidden="true" />
      <div className={styles.cruzDecorativa} aria-hidden="true" />
      <div className={styles.cruzDecorativaSecundaria} aria-hidden="true" />
      <div className={styles.manchaTinta1} aria-hidden="true" />
      <div className={styles.manchaTinta2} aria-hidden="true" />
      <div className={styles.manchaTinta3} aria-hidden="true" />
      <div className={`${styles.cantoOrnamental} ${styles.cantoSuperiorEsquerdo}`} aria-hidden="true" />
      <div className={`${styles.cantoOrnamental} ${styles.cantoSuperiorDireito}`} aria-hidden="true" />
      <div className={`${styles.cantoOrnamental} ${styles.cantoInferiorEsquerdo}`} aria-hidden="true" />
      <div className={`${styles.cantoOrnamental} ${styles.cantoInferiorDireito}`} aria-hidden="true" />

      <Link href="/estudos" className={styles.btnVoltar}>
        <span className={styles.btnVoltarSeta}>←</span>
        <span className={styles.btnVoltarTexto}>Voltar</span>
      </Link>

      <div className={styles.pagina}>

        {/* ========================================
            HERO
            ======================================== */}
        <header className={styles.hero}>
          <div className={styles.heroSelo}>
            <span className={styles.heroSeloSimbolo}>Χ</span>
          </div>
          <span className={styles.heroSupratitulo}>O Registro Conciliar</span>
          <h1 className={styles.heroTitulo}>
            Vinte e Um Atos
            <span className={styles.heroTituloLinha2}>da Tradição Viva</span>
          </h1>
          <div className={styles.heroSpan} />
          <p className={styles.heroSubtitulo}>
            Dezessete séculos em que a Igreja, reunida em concílio,
            respondeu — em cada época — à pergunta que lhe foi feita primeiro
            em Cesareia de Filipe:
            <em> &ldquo;E vós, quem dizeis que eu sou?&rdquo;</em>
          </p>
          <div className={styles.heroMeta}>
            <div className={styles.heroMetaItem}>
              <strong>21</strong>concílios
            </div>
            <div className={styles.heroMetaItem}>
              <strong>1637</strong>anos de intervalo
            </div>
            <div className={styles.heroMetaItem}>
              <strong>4</strong>eras históricas
            </div>
          </div>
          <div className={styles.raioDeLuz} aria-hidden="true" />
        </header>

        {/* ========================================
            INTRO
            ======================================== */}
        <div className={styles.introBox}>
          <p className={styles.introTexto}>
            <span className={styles.introBoxCapitular}>O</span>
            s concílios ecumênicos são assembleias solenes de bispos de todo o
            mundo, convocadas pelo papa ou confirmadas por ele, cujas
            definições doutrinárias e disciplinares obrigam a Igreja inteira.
            Não são episódios isolados: são elos de uma única corrente, cada
            um respondendo a uma questão concreta do seu tempo.
          </p>
        </div>

        {/* ========================================
            O REGISTRO
            ======================================== */}
        <div className={styles.registro}>
          <div className={styles.espinha} aria-hidden="true" />

          {/* ============================================
              DECORAÇÃO NICEIA I (Constantino + Frases)
              ============================================ */}
          {montado && niceiaVisto && (
            <>
              <div className={styles.aquarela} aria-hidden="true">
                <div
                  className={styles.aquarelaImg}
                  style={{
                    backgroundImage:
                      "url('/estudos/concilios/niceia-1/constantino-1.png')",
                  }}
                />
              </div>

              <div className={styles.condenadasArea} aria-hidden="true">
                <div className={styles.condenadasBloco}>
                  <ul className={styles.condenadasLista}>
                    {FRASES_CONDENADAS.map((frase, i) => (
                      <li
                        key={i}
                        className={styles.condenadaLinha}
                        style={{
                          transform: `rotate(${frase.rot}deg) translateX(${frase.offset}px)`,
                        }}
                      >
                        &ldquo;{frase.texto}&rdquo;
                      </li>
                    ))}
                  </ul>
                  <span className={styles.carimboUnico}>CONDENADO</span>
                </div>
              </div>
            </>
          )}

          {/* Cadernos de era com seus concílios */}
          {cadernos.map((caderno) => (
            <section key={caderno.era} className={styles.caderno}>
              <div className={styles.cadernoRotulo}>
                <div className={styles.cadernoRotuloInner}>
                  <span className={styles.cadernoEra}>{caderno.era}</span>
                  <span className={styles.cadernoDescricao}>
                    {caderno.descricao}
                  </span>
                </div>
              </div>

              {caderno.concilios.map((c, idx) => {
                const anoAnterior = anoAnteriorDe(c.slug)
                const gap = gapProporcional(c.ano, anoAnterior)
                const intervalo = intervaloAnos(c.slug)
                const mostrarIntervalo =
                  intervalo !== null && (idx === 0 || intervalo >= 60)
                const lado =
                  todosOrdenados.findIndex((x) => x.slug === c.slug) % 2 === 0
                    ? styles.verbeteEsquerda
                    : styles.verbeteDireita

                return (
                  <div
                    key={c.slug}
                    className={styles.verbeteWrap}
                    style={{ '--gap-antes': `${gap}px` } as React.CSSProperties}
                  >
                    {/* ============================================
                        DECORAÇÃO CONSTANTINOPLA I (São Gregório + Frases)
                        ============================================ */}
                    {c.slug === 'constantinopla-1' && montado && constantinoplaVisto && (
                      <>
                        <div className={styles.aquarelaConstantinopla} aria-hidden="true">
                          <div
                            className={styles.aquarelaImgConstantinopla}
                            style={{
                              backgroundImage:
                                "url('/estudos/concilios/niceia-1/sao-gregorio.png')",
                            }}
                          />
                        </div>

                        {/* Bloco CONDENADO — lado esquerdo (espelho de Niceia) */}
                        <div className={styles.condenadasAreaConstantinopla} aria-hidden="true">
                          <div className={styles.condenadasBlocoConstantinopla}>
                            <ul className={styles.condenadasLista}>
                              {FRASES_CONSTANTINOPLA.map((frase, i) => (
                                <li
                                  key={i}
                                  className={styles.condenadaLinha}
                                  style={{
                                    transform: `rotate(${frase.rot}deg) translateX(${frase.offset}px)`,
                                  }}
                                >
                                  &ldquo;{frase.texto}&rdquo;
                                </li>
                              ))}
                            </ul>
                            <span className={styles.carimboUnicoConstantinopla}>CONDENADO</span>
                          </div>
                        </div>
                      </>
                    )}

                    {/* ============================================
                        DECORAÇÃO ÉFESO (São Cirilo + Frases)
                        ============================================ */}
                    {c.slug === 'efeso' && montado && efesoVisto && (
                      <>
                        <div className={styles.aquarela} style={{ left: '-35rem', right: 'auto', top: '-110px',height: '580px', }} aria-hidden="true">
                          <div
                            className={styles.aquarelaImg}
                            style={{
                              backgroundImage:
                                "url('/estudos/concilios/niceia-1/sao-cirilo.png')",
                            }}
                          />
                        </div>

                        {/* Bloco CONDENADO — lado esquerdo (em cima da aquarela) */}
                        <div className={styles.condenadasArea} style={{ left: '25rem', right: 'auto',top: '40px', }} aria-hidden="true">
                          <div className={styles.condenadasBloco}>
                            <ul className={styles.condenadasLista} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '9px',           // 🤏 Distância bem pequena entre cada frase
        padding: 0,
        margin: 0,
      }}>
                              {FRASES_EFESO.map((frase, i) => (
                                <li
                                  key={i}
                                  className={styles.condenadaLinha}
                                  style={{
                                    transform: `rotate(${frase.rot}deg) translateX(${frase.offset}px)`,
                                  }}
                                >
                                  &ldquo;{frase.texto}&rdquo;
                                </li>
                              ))}
                            </ul>
                            <span className={styles.carimboUnico}>CONDENADO</span>
                          </div>
                        </div>
                      </>
                    )}
{/* ============================================
    DECORAÇÃO CALCEDÔNIA (São Leão Magno + Frases)
    ============================================ */}
{c.slug === 'calcedonia' && montado && calcedoniaVisto && (
  <>
  <div
  className={styles.aquarelaConstantinopla}
  style={{
    height: '550px',              // Aumenta a altura da área da imagem (ajuste se precisar)
    top: '-150px',                 // Sobe a imagem para encaixar no topo
   transform: 'scale(1.2) translateX(80px)',    // 👈 AUMENTA O TAMANHO GERAL DA IMAGEM (1.2 = 20% maior)
    transformOrigin: 'top right', // Mantém o ponto de fixação no canto superior direito
  }}
  aria-hidden="true"
>
  <div
    className={styles.aquarelaImgConstantinopla}
    style={{
      backgroundImage:
        "url('/estudos/concilios/niceia-1/papa-leao-primerio.png')",
    }}
  />
</div>

    {/* Bloco CONDENADO — lado esquerdo */}
    <div className={styles.condenadasAreaConstantinopla} aria-hidden="true"  style={{ top: '92px' }}>

      <div className={styles.condenadasBlocoConstantinopla}>
        <ul
          className={styles.condenadasLista}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            padding: 0,
            margin: 0,
          }}
        >
          {FRASES_CALCEDONIA.map((frase, i) => (
            <li
              key={i}
              className={styles.condenadaLinha}
              style={{
                transform: `rotate(${frase.rot}deg) translateX(${frase.offset}px)`,
                whiteSpace: 'nowrap',
              }}
            >
              &ldquo;{frase.texto}&rdquo;
            </li>
          ))}
        </ul>
        <span className={styles.carimboUnicoConstantinopla}>CONDENADO</span>
      </div>
    </div>
  </>
)}
              {/* ============================================
    DECORAÇÃO CONSTANTINOPLA II (Justiniano I + Frases)
    ============================================ */}
{c.slug === 'constantinopla-2' && montado && constantinopla2Visto && (
  <>
    <div
      className={styles.aquarela}
      style={{
        left: '-35rem',
        right: 'auto',
        top: '-100px',
        height: '600px',
        transform: 'scale(1.1)',
      }}
      aria-hidden="true"
    >
      <div
        className={styles.aquarelaImg}
        style={{
          backgroundImage:
            "url('/estudos/concilios/niceia-1/Justiniano-1.png')",
        }}
      />
    </div>

    {/* Bloco CONDENADO */}
    <div
      className={styles.condenadasArea}
      style={{ left: '25rem', right: 'auto', top: '92px' }}
      aria-hidden="true"
    >
      <div className={styles.condenadasBloco}>
        <ul
          className={styles.condenadasLista}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            padding: 0,
            margin: 0,
          }}
        >
          {FRASES_CONSTANTINOPLA_2.map((frase, i) => (
            <li
              key={i}
              className={styles.condenadaLinha}
              style={{
                transform: `rotate(${frase.rot}deg) translateX(${frase.offset}px)`,
                whiteSpace: 'nowrap',
              }}
            >
              &ldquo;{frase.texto}&rdquo;
            </li>
          ))}
        </ul>
        <span className={styles.carimboUnico}>CONDENADO</span>
      </div>
    </div>
  </>
)}
                    {mostrarIntervalo && (
                      <span className={styles.intervalo}>
                        + {intervalo} {intervalo === 1 ? 'ano' : 'anos'}
                      </span>
                    )}

                    <span className={styles.marco} aria-hidden="true" />

                    <Link
                      href={`/estudos/concilios/${c.slug}`}
                      className={`${styles.verbete} ${lado}`}
                      onClick={() => marcarVisto(c.slug)}
                    >
                      <div className={styles.verbeteCabecalho}>
                        <span className={styles.verbeteNumero}>{c.num}</span>
                        <span className={styles.verbeteAno}>{c.data}</span>
                      </div>

                      <span className={styles.verbeteNome}>
                        Concílio de {c.nome}
                      </span>

                      <span className={styles.verbeteContexto}>
                        {c.contexto}
                      </span>

                      <div className={styles.verbeteRodape}>
                        <span className={styles.verbeteRodapeLabel}>
                          Verbete completo
                        </span>
                        <span className={styles.verbeteSeta}>
                          Abrir
                          <span className={styles.verbeteSetaIcone}>→</span>
                        </span>
                      </div>
                    </Link>

                    <span
                      className={styles.verbeteConector}
                      aria-hidden="true"
                    />
                  </div>
                )
              })}
            </section>
          ))}
        </div>

        {/* ========================================
            RODAPÉ
            ======================================== */}
        <footer className={styles.footer}>
          <p className={styles.footerMarca}>Lux Fidei</p>
          <p className={styles.footerAno}>Anno Domini MMXXVI</p>
          <p className={styles.footerCitacao}>
            &ldquo;A verdade é o bem do intelecto.&rdquo;
            <span className={styles.footerAutor}>São Tomás de Aquino</span>
          </p>
        </footer>

      </div>
    </div>
  )
}