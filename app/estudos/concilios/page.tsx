// app/estudos/concilios/page.tsx
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
// Cada frase tem sua própria rotação e deslocamento
// horizontal — para parecer escrita à mão, "bagunçada".
// ============================================================

interface FraseCondenada {
  texto: string
  rot: number      // rotação em graus
  offset: number   // deslocamento horizontal em px
}

const FRASES_CONDENADAS: FraseCondenada[] = [
  { texto: 'Houve um tempo em que Ele não existia.',    rot: -3, offset: 12  },
  { texto: 'Antes de ser gerado, Ele não existia.',     rot: 2,  offset: -18 },
  { texto: 'O Filho de Deus foi feito do nada.',        rot: -4, offset: 28  },
  { texto: 'O Filho é de substância diferente do Pai.', rot: 1,  offset: -8  },
  { texto: 'O Filho é criatura passível de mudança.',   rot: -2, offset: 20  },
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
  const [montado, setMontado] = useState(false)

  useEffect(() => {
    try {
      const visto = localStorage.getItem('visitado:niceia-1') === '1'
      setNiceiaVisto(visto)
    } catch { /* ignore */ }
    setMontado(true)
  }, [])

  const marcarNiceiaVisto = () => {
    try {
      localStorage.setItem('visitado:niceia-1', '1')
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
            um respondendo a uma questão concreta do seu tempo — uma heresia
            a refutar, um cisma a sarar, uma prática a esclarecer. O espaço
            entre eles, abaixo, é proporcional ao tempo real que separou uma
            geração de bispos da seguinte: alguns concílios se sucederam em
            poucos anos; entre outros, a Igreja atravessou séculos inteiros
            de silêncio conciliar antes de voltar a reunir-se.
          </p>
        </div>

        {/* ========================================
            O REGISTRO
            ======================================== */}
        <div className={styles.registro}>
          <div className={styles.espinha} aria-hidden="true" />

          {/* ============================================
              CAMADA DECORATIVA (só após visitar Niceia I)
              — imagem de Constantino à esquerda
              — frases condenadas bagunçadas à direita
              — carimbo grande e transparente por cima
              ============================================ */}
          {montado && niceiaVisto && (
            <>
              {/* Imagem de Constantino */}
              <div className={styles.aquarela} aria-hidden="true">
                <div
                  className={styles.aquarelaImg}
                  style={{
                    backgroundImage:
                      "url('/estudos/concilios/niceia-1/constantino-1.png')",
                  }}
                />
              </div>

              {/* Bloco de frases condenadas + carimbo único */}
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

                  {/* Carimbo GRANDE único cobrindo todas as frases */}
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
                    {mostrarIntervalo && (
                      <span className={styles.intervalo}>
                        + {intervalo} {intervalo === 1 ? 'ano' : 'anos'}
                      </span>
                    )}

                    <span className={styles.marco} aria-hidden="true" />

                    <Link
                      href={`/estudos/concilios/${c.slug}`}
                      className={`${styles.verbete} ${lado}`}
                      onClick={
                        c.slug === 'niceia-1' ? marcarNiceiaVisto : undefined
                      }
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