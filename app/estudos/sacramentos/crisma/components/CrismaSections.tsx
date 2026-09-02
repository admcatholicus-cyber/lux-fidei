// app/estudos/sacramentos/crisma/components/CrismaSections.tsx
'use client'

import Link from 'next/link'
import styles from '../crisma.module.css'
import {
  dons, frutos, efeitos, santos, faqItems, curiosidades,
  oracoes, timelineItems, passosRito, passosPreparacao,
  ministroRows, estatisticas, documentos, footerLinks,
} from '../data/crisma.data'

interface Props {
  activeFaq: number | null
  onToggleFaq: (i: number) => void
  onScrollTo: (href: string) => void
}

export default function CrismaSections({ activeFaq, onToggleFaq, onScrollTo }: Props) {
  const tagClass = (t: string) =>
    `${styles.tag} ${styles[t as keyof typeof styles] ?? ''}`

  return (
    <main>

      {/* ── Banner nota ── */}
      <div className={styles.container}>
        <div className={styles.diferencaBatismoBanner}>
          <span className={styles.bannerIcon}>ℹ️</span>
          <div>
            <h3>📌 Nota sobre os Sacramentos de Iniciação</h3>
            <p>
              Esta página aborda exclusivamente o Sacramento da{' '}
              <strong>Crisma (Confirmação)</strong>. Os temas de{' '}
              <strong>Batismo</strong> são tratados integralmente na{' '}
              <Link href="/estudos/batismo">página do Batismo ↗</Link>.
              Aqui, a Crisma é apresentada como o segundo sacramento de iniciação, que{' '}
              <em>pressupõe e completa</em> o Batismo, mas não o repete nem substitui.
            </p>
          </div>
        </div>
      </div>

      {/* ================================================
          SEÇÃO 1 — O QUE É
      ================================================ */}
      <section id="o-que-e" className={styles.sectionWrapper}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>⛪ Definição</span>
            <h2>O Que É a Crisma?</h2>
            <p>
              O segundo sacramento de iniciação cristã que completa e confirma o que foi iniciado
              no Batismo
            </p>
          </div>

          <div className={`${styles.grid2} animaItem`}>
            <div className={`${styles.card} ${styles.cardGold}`}>
              <span className={styles.cardIcon}>📖</span>
              <h3>Definição Catequética</h3>
              <p>
                A Crisma, chamada também de <strong>Confirmação</strong>, é o sacramento pelo qual
                o batizado recebe o Espírito Santo em plenitude, é confirmado na fé e se torna{' '}
                <strong>soldado de Cristo</strong>, capaz de testemunhá-lo publicamente no mundo.
                O nome &ldquo;Crisma&rdquo; vem do grego <em>chrisma</em>, que significa
                &ldquo;unção&rdquo; — referindo-se ao óleo sagrado com que o confirmando é marcado.
              </p>
            </div>
            <div className={`${styles.card} ${styles.cardGold}`}>
              <span className={styles.cardIcon}>⛪</span>
              <h3>No Catecismo da Igreja</h3>
              <p>
                O Catecismo da Igreja Católica (CIC nº 1285) define:{' '}
                <em>
                  &ldquo;A Confirmação aperfeiçoa a graça baptismal; é o sacramento que dá o
                  Espírito Santo para nos enraizar mais profundamente na filiação divina, nos
                  incorporar mais firmemente a Cristo, tornar mais sólido nosso vínculo com a
                  Igreja, associar-nos mais à sua missão e ajudar-nos a testemunhar a fé cristã
                  pela palavra e pela ação.&rdquo;
                </em>
              </p>
            </div>
          </div>

          <div className={styles.divider}>✦ ✦ ✦</div>

          <div className={`${styles.historiaBox} animaItem`}>
            <h3>🏛️ Os Três Sacramentos de Iniciação</h3>
            <p>
              A Crisma faz parte de uma trilogia sagrada. A Igreja Católica ensina que há três
              sacramentos de <strong>iniciação cristã</strong>, que juntos formam o cristão completo:
            </p>
            <div className={styles.iniciacaoGrid}>
              <div className={`${styles.iniciacaoItem} ${styles.iniciacaoBatismo}`}>
                <img
                  src="/estudos/sacramentos/crisma/estacao-sacramental/e-batismo.png"
                  alt="Símbolo do Batismo"
                  style={{ height: '6rem', objectFit: 'contain' }}
                />
                <h4 style={{ color: '#7EB8F7', margin: '0.5rem 0' }}>Batismo</h4>
                <p>Gera o cristão. Lava o pecado original. Torna filho de Deus.</p>
              </div>
              <div className={`${styles.iniciacaoItem} ${styles.iniciacaoCrisma}`}>
                <img
                  src="/estudos/sacramentos/crisma/estacao-sacramental/e-crisma.png"
                  alt="Símbolo da Crisma"
                  style={{ height: '6rem', objectFit: 'contain' }}
                />
                <h4 style={{ color: '#D4AF37', margin: '0.5rem 0' }}>Crisma</h4>
                <p>Confirma o cristão. Dá plenitude do Espírito. Torna soldado e testemunha.</p>
              </div>
              <div className={`${styles.iniciacaoItem} ${styles.iniciacaoEucaristia}`}>
                <img
                  src="/estudos/sacramentos/crisma/estacao-sacramental/e-pri-comunhao.png"
                  alt="Símbolo da Eucaristia"
                  style={{ height: '6rem', objectFit: 'contain' }}
                />
                <h4 style={{ color: '#EF9A9A', margin: '0.5rem 0' }}>Eucaristia</h4>
                <p>Nutre o cristão. Corpo e Sangue de Cristo. Plenitude da vida cristã.</p>
              </div>
            </div>
            <p style={{ marginTop: '1.5rem' }}>
              Santo Tomás de Aquino comparava os sacramentos à vida humana: assim como o ser humano
              nasce (Batismo), cresce (Crisma) e se alimenta (Eucaristia), o mesmo se dá na vida
              espiritual.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================
          SEÇÃO 2 — HISTÓRIA
      ================================================ */}
      <section id="historia" className={styles.bgDark}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.sectionHeaderDark}`}>
            <span className={styles.sectionTagDark}>📜 Origem</span>
            <h2>História da Crisma</h2>
            <p>De Pentecostes ao século XXI — dois mil anos de história fascinante</p>
          </div>

          <div className={`${styles.pentecostesBox} animaItem`}>
            <h3>🔥 Pentecostes: O Primeiro &ldquo;Crisma&rdquo; da História</h3>
            <p>
              Era o quinquagésimo dia após a Páscoa. Cento e vinte discípulos estavam reunidos no
              Cenáculo de Jerusalém, aterrorizados. Três anos acompanhando Jesus não foram
              suficientes para transformá-los em homens corajosos — Pedro havia negado o Mestre
              três vezes, os demais fugiram. Aquele grupo era um conjunto de fracassados com medo.
            </p>
            <p>
              Então{' '}
              <strong style={{ color: '#D4AF37' }}>algo extraordinário aconteceu</strong>.
              De repente, veio do céu um som como de vento impetuoso que encheu toda a casa.
              Línguas de fogo pousaram sobre cada um deles. E todos ficaram cheios do Espírito Santo.
            </p>
            <p>
              O mesmo Pedro que tremia de medo saiu às ruas e pregou com tal força que três mil
              pessoas se converteram em um único dia. A transformação foi tão radical que os que os
              conheciam ficaram espantados — perguntavam se estavam bêbados.
            </p>
            <p>
              <strong style={{ color: '#D4AF37' }}>
                Este evento é o protótipo da Crisma.
              </strong>{' '}
              O que aconteceu no Cenáculo é o que acontece, de modo sacramental, na fronte de cada
              confirmando: a irrupção do Espírito Santo que transforma covardes em testemunhas,
              medrosos em mártires.
            </p>
          </div>

          <div className={styles.timeline}>
            {timelineItems.map((item, i) => (
              <div key={i} className={`${styles.timelineItem} animaItem`}>
                <span className={styles.timelineDate}>{item.data}</span>
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          SEÇÃO 3 — TEOLOGIA
      ================================================ */}
      <section id="teologia" className={styles.sectionWrapper}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>🧠 Doutrina</span>
            <h2>Teologia da Crisma</h2>
            <p>
              A profundidade teológica por trás de um gesto que dura segundos mas tem efeitos eternos
            </p>
          </div>

          <div className={`${styles.card} animaItem`} style={{ marginBottom: '2rem' }}>
            <h3>⚡ Instituição por Cristo</h3>
            <p style={{ marginBottom: '1rem' }}>
              A Crisma foi instituída por Jesus Cristo? Esta pergunta aparentemente simples gerou
              debates sérios. Os reformadores negavam, argumentando que não há uma cena explícita
              nos Evangelhos onde Jesus &ldquo;crie&rdquo; o sacramento da Confirmação como criou
              a Eucaristia.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              A resposta católica é múltipla: Cristo prometeu o Espírito Santo (Jo 14,16; 16,7),
              enviou-O em Pentecostes como cumprimento dessa promessa, e os Apóstolos praticaram
              a imposição de mãos como ato oficial da Igreja (At 8,14-17; 19,1-7). O Concílio de
              Trento definiu dogmaticamente que todos os sete sacramentos foram instituídos por
              Cristo — mas reconhece que o modo de instituição pode ser indireto.
            </p>
            <div className={styles.highlight}>
              <h4>⚠️ Posição do Magistério</h4>
              <p>
                É de fé definida (dogma) que a Confirmação é um verdadeiro sacramento instituído
                por Cristo. Negar isso é heresia formal (DS 1628, Cânon sobre a Confirmação,
                Trento).
              </p>
            </div>
          </div>

          <div className={`${styles.materiaGrid} animaItem`} style={{ marginBottom: '2rem' }}>
            <div className={styles.materiaBox}>
              <img
                src="/estudos/sacramentos/crisma/representacao/azeite.png"
                alt="Santo Crisma - Azeite"
                style={{ height: '6rem', objectFit: 'contain', display: 'block', margin: '0 auto 1rem' }}
              />
              <span className={styles.badge}>MATÉRIA</span>
              <h3>O Santo Crisma</h3>
              <p>
                A matéria <strong>remota</strong> é o <em>Sagrado Crisma</em> — azeite de oliva
                misturado com bálsamo (perfume vegetal), consagrado pelo bispo na{' '}
                <strong>Missa Crismal</strong> da Quinta-Feira Santa.
              </p>
              <p style={{ marginTop: '1rem' }}>
                A matéria <strong>próxima</strong> é a unção feita pelo ministro na fronte do
                confirmando, na forma de cruz.
              </p>
              <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#888' }}>
                O óleo representa a força e a graça; o bálsamo, o aroma de Cristo (2Cor 2,15).
                Na tradição oriental, o crisma consagrado pelo patriarca é distribuído às paróquias
                — enfatizando a unidade da Igreja.
              </p>
            </div>

            <div className={styles.materiaBox}>
              <img
                src="/estudos/sacramentos/crisma/representacao/palavra.png"
                alt="Palavras Sacramentais"
                style={{ height: '6rem', objectFit: 'contain', display: 'block', margin: '0 auto 1rem' }}
              />
              <span className={styles.badge}>FORMA</span>
              <h3>As Palavras Sacramentais</h3>
              <p>A forma do sacramento são as palavras pronunciadas pelo ministro durante a unção:</p>
              <div className={styles.formaBox} style={{ margin: '1rem 0' }}>
                <p style={{ fontStyle: 'italic', fontSize: '1.1rem', color: '#8B0000', fontWeight: 'bold' }}>
                  &ldquo;N., recebe o sinal do Dom do Espírito Santo.&rdquo;
                </p>
                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.5rem' }}>
                  Fórmula Latina: <em>&ldquo;Accipe signaculum doni Spiritus Sancti.&rdquo;</em>
                </p>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#666' }}>
                Esta fórmula, estabelecida por Paulo VI (1971), alinha-se com a tradição oriental
                que remonta ao século IV.
              </p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardRed} animaItem`} style={{ marginBottom: '2rem' }}>
            <span className={styles.cardIcon}>🔏</span>
            <h3>O Caráter Indelével — Por Que Só Se Crismam Uma Vez</h3>
            <p style={{ marginBottom: '1rem' }}>
              Assim como o Batismo, a Crisma imprime um <strong>caráter sacramental</strong> —
              uma marca espiritual permanente, indelével, que não pode ser apagada. Por isso, quem
              recebeu a Crisma <strong>não pode recebê-la novamente</strong>, mesmo que tenha perdido
              a fé, pecado gravemente ou se afastado da Igreja.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Santo Tomás explica que o caráter configura o cristão a Cristo Sacerdote, Profeta e
              Rei — capacitando-o para o culto divino e a missão. O caráter da Confirmação em
              particular configura ao <em>poder</em> de Cristo (em relação ao caráter batismal que
              configura à recepção).
            </p>
            <div className={styles.quoteBlock}>
              <p>
                &ldquo;O caráter é uma participação do sacerdócio de Cristo, impressa na alma como
                sinal espiritual que a distingue e habilita para os atos do culto.&rdquo;
              </p>
              <cite>— São Tomás de Aquino, Suma Teológica, III, q.63, a.1</cite>
            </div>
          </div>

          <div className={`${styles.grid2} animaItem`}>
            <div className={styles.card}>
              <span className={styles.cardIcon}>✝️</span>
              <h3>Rito Latino (Ocidente)</h3>
              <ul style={{ color: '#555', paddingLeft: '1.2rem', lineHeight: 2 }}>
                {[
                  'Sacramento chamado: Confirmação / Crisma',
                  'Ministro ordinário: Bispo',
                  'Administrado: geralmente separado do Batismo',
                  'Idade habitual: adolescência',
                  'Óleo: crisma consagrado pelo bispo',
                  'Gesto central: unção na fronte + imposição de mão',
                ].map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className={styles.card}>
              <span className={styles.cardIcon}>☦️</span>
              <h3>Ritos Orientais (Chrismation)</h3>
              <ul style={{ color: '#555', paddingLeft: '1.2rem', lineHeight: 2 }}>
                {[
                  'Sacramento chamado: Chrismation / Myron',
                  'Ministro: Padre (com crisma do patriarca)',
                  'Administrado: imediatamente após o Batismo',
                  'Idade habitual: qualquer idade (inclusive bebês)',
                  'Óleo: myron consagrado pelo patriarca',
                  'Unção em múltiplas partes do corpo',
                ].map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>

          <div className={`${styles.highlight} animaItem`} style={{ marginTop: '2rem' }}>
            <h4>🔍 Dado Importante</h4>
            <p>
              Nas Igrejas Católicas de rito oriental (em plena comunhão com Roma, como os Melquitas,
              Maronitas, Coptos-Católicos etc.), o padre pode administrar a Confirmação imediatamente
              após o Batismo. Isso mostra que a reserva ao bispo no Ocidente é uma disciplina
              eclesiástica, não um dado revelado imutável.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================
          SEÇÃO 4 — O RITO
      ================================================ */}
      <section id="rito" className={styles.bgLight}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>🕯️ Celebração</span>
            <h2>O Rito da Crisma</h2>
            <p>Passo a passo de uma celebração que toca a eternidade</p>
          </div>

          {passosRito.map((passo, i) => (
            <div key={i} className={`${styles.ritoStep} animaItem`}>
              <span className={styles.ritoStepNumber}>{passo.num}</span>
              <h3>{passo.icon} {passo.titulo}</h3>
              <p>{passo.texto}</p>

              {passo.extra === 'imposicao' && (
                <div className={styles.quoteBlock} style={{ marginTop: '1rem' }}>
                  <p>
                    <em>
                      &ldquo;Deus Todo-Poderoso, Pai de Nosso Senhor Jesus Cristo, que regenerastes
                      estes vossos filhos pela água e pelo Espírito Santo, libertando-os do pecado,
                      enviai sobre eles o vosso Espírito Santo, Paráclito: espírito de sabedoria e
                      de entendimento, espírito de conselho e de fortaleza, espírito de ciência e de
                      piedade; e enchei-os do espírito do vosso temor santo. Por Cristo Nosso
                      Senhor.&rdquo;
                    </em>
                  </p>
                  <cite>— Oração de Imposição das Mãos, Rito da Confirmação</cite>
                </div>
              )}

              {passo.extra === 'uncao' && (
                <div style={{
                  textAlign: 'center', padding: '2rem',
                  background: 'linear-gradient(135deg,#fff8e1,#fffde7)',
                  borderRadius: '12px', margin: '1.5rem 0', border: '2px solid #D4AF37',
                }}>
                  <p style={{ fontSize: '1.4rem', fontStyle: 'italic', color: '#8B0000', fontWeight: 'bold' }}>
                    &ldquo;[Nome], recebe o sinal do Dom do Espírito Santo.&rdquo;
                  </p>
                  <p style={{ color: '#888', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                    O confirmando responde: <strong>&ldquo;Amém.&rdquo;</strong>
                  </p>
                  <p style={{ color: '#888', fontSize: '0.9rem' }}>
                    O bispo acrescenta:{' '}
                    <strong>&ldquo;A paz esteja convosco.&rdquo;</strong>{' '}
                    O confirmando:{' '}
                    <strong>&ldquo;Ela está também convosco.&rdquo;</strong>
                  </p>
                </div>
              )}
            </div>
          ))}

          <div className={`${styles.grid2} animaItem`} style={{ marginTop: '2rem' }}>
            <div className={styles.card}>
              <span className={styles.cardIcon}>📛</span>
              <h3>O Nome de Crisma</h3>
              <p>
                Muitos confirmandos escolhem um <strong>nome de Santo</strong> para a Crisma —
                tradição de longa data na Igreja Latina. A ideia é escolher um santo como protetor
                e modelo para a vida de testemunho cristão que a Confirmação inaugura.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Teologicamente, não é um requisito essencial do sacramento — a Crisma é válida sem
                nome específico. Mas é uma prática piedosa recomendada pelo Ritual Romano.
              </p>
            </div>
            <div className={styles.card}>
              <span className={styles.cardIcon}>👫</span>
              <h3>O Papel do Padrinho/Madrinha</h3>
              <p>
                O padrinho (ou madrinha) de Crisma deve ser um católico praticante, ter pelo menos
                16 anos, e ser diferente do padrinho/madrinha de Batismo (embora possa ser o mesmo
                por razão especial). Seu papel simbólico é representar a comunidade eclesial que
                acompanha o confirmando.
              </p>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                <strong>CIC can. 893 §2:</strong>{' '}
                &ldquo;É de conveniência que o padrinho de Crisma seja o mesmo do Batismo.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          SEÇÃO 5 — OS 7 DONS
      ================================================ */}
      <section id="dons" className={styles.sectionWrapper}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>🕊️ Dons</span>
            <h2>Os Sete Dons do Espírito Santo</h2>
            <p>Habitus infusos que aperfeiçoam as virtudes e nos tornam dóceis à ação divina</p>
          </div>

          <div className={styles.quoteBlock}>
            <p>
              &ldquo;E repousará sobre ele o espírito do Senhor: espírito de sabedoria e de
              entendimento, espírito de conselho e de fortaleza, espírito de ciência e de piedade;
              e o encherá o espírito do temor do Senhor.&rdquo;
            </p>
            <cite>— Isaías 11,2-3 (A Profecia Messiânica dos Sete Dons)</cite>
          </div>

          <div className={styles.grid3} style={{ marginBottom: '2rem' }}>
            {dons.map((don, i) => (
              <div
                key={i}
                className={`${styles.domCard} ${don.centrado ? styles.domCardCentrado : ''} animaItem`}
              >
                <span className={styles.domNumero}>{don.num}</span>
                <span className={styles.domIcon}>{don.icon}</span>
                <h3>{don.nome}</h3>
                <p style={{ fontSize: '0.9rem', color: '#555', textAlign: 'left' }}>{don.desc}</p>
                <div style={{ marginTop: '1rem' }}>
                  <span className={tagClass(don.tag)}>{don.tagLabel}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={`${styles.historiaBox} animaItem`}>
            <h3>🤔 Por Que &ldquo;Sete&rdquo; Dons e Não Mais ou Menos?</h3>
            <p>
              O número sete na Bíblia significa perfeição e completude. Os sete dons não são uma
              lista exaustiva de toda ação do Espírito, mas uma{' '}
              <strong>síntese orgânica</strong> que corresponde ao número de aspectos fundamentais
              da vida moral e espiritual.
            </p>
            <p>
              Santo Tomás os organizou em relação às virtudes teologais e cardeais: Sabedoria e
              Entendimento aperfeiçoam a Fé; Ciência e Conselho a Prudência; Fortaleza a Fortaleza;
              Piedade a Justiça; e Temor de Deus a Temperança. É um sistema de uma elegância
              filosófica impressionante.
            </p>
            <p>
              Já os cristãos das Igrejas Orientais às vezes contam os dons como oito, lendo Isaías
              11,2-3 de forma diferente. Mas a tradição latina desde Santo Agostinho mantém o
              número sete.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================
          SEÇÃO 6 — OS 12 FRUTOS
      ================================================ */}
      <section id="frutos" className={styles.bgLight}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>🍇 Frutos</span>
            <h2>Os Doze Frutos do Espírito Santo</h2>
            <p>Se os Dons são as sementes, os Frutos são a colheita visível na vida do cristão</p>
          </div>

          <div className={`${styles.card} animaItem`} style={{ marginBottom: '2rem' }}>
            <p>
              São Paulo lista os frutos do Espírito em Gálatas 5,22-23:{' '}
              <em>
                &ldquo;amor, alegria, paz, longanimidade, benignidade, bondade, fidelidade,
                mansidão, domínio próprio.&rdquo;
              </em>{' '}
              A tradição latina (seguindo São Jerônimo, que usou uma versão mais ampla do texto
              grego) enumerou doze frutos, acrescentando: paciência, gentileza e continência.
              São Tomás os trata na Suma (I-II, q.70).
            </p>
          </div>

          <div className={styles.grid3}>
            {frutos.map((coluna, ci) => (
              <div key={ci}>
                {coluna.map((fruto, fi) => (
                  <div key={fi} className={`${styles.frutoItem} animaItem`}>
                    <span className={styles.frutoIcon}>{fruto.icon}</span>
                    <div>
                      <strong>{fruto.nome}</strong>
                      <p style={{ fontSize: '0.9rem', color: '#666' }}>{fruto.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          SEÇÃO 7 — EFEITOS
      ================================================ */}
      <section id="efeitos" className={styles.sectionWrapper}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>✨ Graças</span>
            <h2>Efeitos da Crisma</h2>
            <p>O que realmente acontece quando alguém recebe este sacramento?</p>
          </div>
          {efeitos.map((ef, i) => (
            <div key={i} className={`${styles.efeitoCard} animaItem`}>
              <div className={styles.efeitoIconBox}>{ef.icon}</div>
              <div>
                <h3 style={{ color: '#8B0000', marginBottom: '0.5rem' }}>{ef.titulo}</h3>
                <p style={{ color: '#555' }}>{ef.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================
          SEÇÃO 8 — SANTOS
      ================================================ */}
      <section id="santos" className={styles.bgDark}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.sectionHeaderDark}`}>
            <span className={styles.sectionTagDark}>👑 Santos</span>
            <h2>O Que os Santos Dizem sobre a Crisma</h2>
            <p>Dois mil anos de sabedoria sobre o poder do Espírito Santo</p>
          </div>

          <div className={styles.grid3}>
            {santos.map((s, i) => (
              <div key={i} className={`${styles.santoCard} animaItem`}>
                <div className={styles.santoHeader}>
                  <span className={styles.santoEmoji}>{s.emoji}</span>
                  <h3>{s.nome}</h3>
                  <span className={styles.santoEpoca}>{s.epoca}</span>
                </div>
                <div className={styles.santoBody}>
                  <blockquote>{s.quote}</blockquote>
                  <p>{s.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={`${styles.martiresBox} animaItem`}>
            <h3>🩸 A História dos Mártires de Lyon (177 d.C.) — A Crisma em Sangue</h3>
            <p>
              No ano 177, em Lyon (atual França), uma perseguição violenta explodiu contra os
              cristãos. Entre os aprisionados estava uma jovem escrava chamada{' '}
              <strong>Blandina</strong>. Seus companheiros temiam que ela, frágil e sem instrução,
              cedesse sob tortura.
            </p>
            <p>
              Mas Blandina confundiu seus algozes. Cada vez que era torturada, repetia:{' '}
              <em>&ldquo;Sou cristã e entre nós nada de mal é feito.&rdquo;</em> Ela foi
              submetida aos mais terríveis suplícios durante horas — e resistiu a todos. A carta
              das Igrejas de Lyon e Viena, conservada por Eusébio de Cesareia, diz que os próprios
              pagãos ficaram espantados.
            </p>
            <p>
              Blandina não era uma filósofa, não era nobre, não tinha formação teológica. Era uma
              escrava confirmada no Espírito. E demonstrou que o dom da Fortaleza não é reservado
              a heróis naturais — é dado por Deus a quem O recebe.{' '}
              <strong style={{ color: '#D4AF37' }}>É a Crisma feita vida e sangue.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ================================================
          SEÇÃO 9 — MINISTRO
      ================================================ */}
      <section id="ministro" className={styles.sectionWrapper}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>👨‍⚖️ Ministério</span>
            <h2>O Ministro da Crisma</h2>
            <p>Quem pode conferir este sacramento e em quais circunstâncias?</p>
          </div>

          <div className={`${styles.grid2} animaItem`} style={{ marginBottom: '2rem' }}>
            <div className={styles.card}>
              <span className={styles.cardIcon}>✝️</span>
              <h3>Ministro Ordinário: O Bispo</h3>
              <p style={{ marginBottom: '1rem' }}>
                No Rito Latino, o <strong>bispo</strong> é o ministro ordinário da Confirmação.
                Isso não é uma convenção administrativa: aponta para a unidade da Igreja. O bispo
                representa a Igreja local em comunhão com a Igreja universal. Quando confirma, é a
                Igreja toda que confirma.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                <strong>CIC can. 882:</strong> &ldquo;O ministro originário da Confirmação é o
                Bispo.&rdquo;
              </p>
            </div>
            <div className={styles.card}>
              <span className={styles.cardIcon}>🙏</span>
              <h3>Ministro Extraordinário: O Padre</h3>
              <p style={{ marginBottom: '1rem' }}>O padre pode administrar a Confirmação quando:</p>
              <ul style={{ paddingLeft: '1.2rem', color: '#555', lineHeight: 1.8 }}>
                {[
                  'Tem delegação da Santa Sé',
                  'Recebe delegação do bispo diocesano',
                  'O confirmando está em perigo de morte',
                  'Está recebendo adultos no RCIA (Rito de Iniciação)',
                  'Em Igrejas Orientais: todos os padres podem confirmar',
                ].map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>

          <div className={`${styles.historiaBox} animaItem`}>
            <h3>⚠️ Confirmação em Perigo de Morte</h3>
            <p>
              Se alguém está em perigo de morte e nunca foi confirmado, qualquer padre pode
              administrar o sacramento — mesmo sem delegação especial. O CIC (can. 883, §3)
              reconhece isso expressamente.
            </p>
            <p>
              Por que isso importa? Porque a Confirmação é necessária para a plenitude da iniciação
              cristã. Uma pessoa que morre tendo sido batizada mas não confirmada não está
              &ldquo;incompleta&rdquo; — a salvação não depende disso. Mas a Igreja deseja que
              cada batizado receba a plenitude dos sacramentos de iniciação, especialmente antes
              da morte.
            </p>
            <p>
              É uma manifestação linda da maternidade da Igreja: mesmo na última hora, busca dar
              ao filho tudo que tem a oferecer.
            </p>
          </div>

          <div className={`${styles.tabelaContainer} animaItem`} style={{ marginTop: '2rem' }}>
            <table>
              <thead>
                <tr>
                  {['Ministro', 'Quando', 'Tradição', 'Autoridade'].map(h => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ministroRows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => <td key={j}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================================================
          SEÇÃO 10 — PREPARAÇÃO
      ================================================ */}
      <section id="preparacao" className={styles.bgLight}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>📋 Preparação</span>
            <h2>Quem Pode Receber e Como se Preparar</h2>
            <p>Requisitos, disposições e o caminho para uma Crisma frutífera</p>
          </div>

          <div className={`${styles.card} animaItem`} style={{ marginBottom: '2rem' }}>
            <h3>✅ Requisitos para Receber a Crisma</h3>
            <div className={styles.grid2} style={{ marginTop: '1rem' }}>
              <div>
                <h4 style={{ color: '#8B0000', marginBottom: '0.8rem' }}>
                  Requisitos Essenciais (Validade)
                </h4>
                <ul style={{ paddingLeft: '1.2rem', color: '#555', lineHeight: 2 }}>
                  {[
                    'Ter sido validamente batizado',
                    'Não ter recebido a Crisma antes',
                    'Intenção de receber o sacramento',
                  ].map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#8B0000', marginBottom: '0.8rem' }}>
                  Requisitos para Licitude (Frutificação)
                </h4>
                <ul style={{ paddingLeft: '1.2rem', color: '#555', lineHeight: 2 }}>
                  {[
                    'Estado de graça (sem pecado mortal)',
                    'Instrução suficiente na fé',
                    'Disposição de receber o Espírito Santo',
                    'Preparação catequética adequada',
                  ].map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardRed} animaItem`} style={{ marginBottom: '2rem' }}>
            <span className={styles.cardIcon}>📅</span>
            <h3>A Questão da Idade — Um Debate que Não Para</h3>
            <p style={{ marginBottom: '1rem' }}>
              O CIC (can. 891) diz que a Confirmação deve ser conferida &ldquo;por volta dos anos
              da discrição&rdquo; (7 anos), a menos que a Conferência Episcopal determine outra
              idade — o que na prática significa que a maioria das dioceses latinoamericanas,
              norte-americanas e europeias a administra na adolescência (12-17 anos).
            </p>
            <div className={styles.grid2}>
              <div>
                <h4 style={{ color: '#8B0000' }}>Argumento para Confirmação na Infância</h4>
                <ul style={{ paddingLeft: '1.2rem', color: '#555', lineHeight: 1.8, fontSize: '0.9rem' }}>
                  {[
                    'Mantém a ordem dos sacramentos de iniciação',
                    'As Igrejas Orientais confirmam bebês com sucesso',
                    'Crianças são tão merecedoras de graça quanto adultos',
                    'A graça "confirma" a pessoa ao longo de toda a vida',
                  ].map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#8B0000' }}>Argumento para Confirmação na Adolescência</h4>
                <ul style={{ paddingLeft: '1.2rem', color: '#555', lineHeight: 1.8, fontSize: '0.9rem' }}>
                  {[
                    'Permite escolha pessoal consciente da fé',
                    'A "confirmação" pressupõe algo a confirmar',
                    'Evita receber por pressão familiar sem intenção',
                    'Mais compatível com a maturidade cristã',
                  ].map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
              <strong>Nota:</strong> Este debate é legítimo e não está dogmaticamente definido.
              Ambas as práticas têm fundamento teológico sólido.
            </p>
          </div>

          <h3 style={{ color: '#8B0000', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
            🗺️ Roteiro de Preparação
          </h3>

          {passosPreparacao.map(step => (
            <div key={step.n} className={`${styles.step} animaItem`}>
              <div className={styles.stepNumber}>{step.n}</div>
              <div className={styles.stepContent}>
                <h3>{step.titulo}</h3>
                <p>{step.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================
          SEÇÃO 11 — CURIOSIDADES
      ================================================ */}
      <section id="curiosidades" className={styles.sectionWrapper}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>🔍 Curiosidades</span>
            <h2>Curiosidades e Fatos Surpreendentes</h2>
            <p>O que poucos sabem sobre o sacramento da Confirmação</p>
          </div>

          <div className={styles.grid2}>
            {curiosidades.map((c, i) => (
              <div key={i} className={`${styles.curiosidadeCard} animaItem`}>
                <h4>{c.titulo}</h4>
                <p style={{ color: '#555', fontSize: '0.95rem' }}>{c.texto}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem' }}>
            <h3 style={{ color: '#8B0000', textAlign: 'center', fontSize: '1.5rem', marginBottom: '2rem' }}>
              📊 A Crisma em Números
            </h3>
            <div className={styles.grid4}>
              {estatisticas.map((s, i) => (
                <div key={i} className={`${styles.statCard} animaItem`}>
                  <span className={styles.statNumber}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          SEÇÃO 12 — FAQ
      ================================================ */}
      <section id="questoes" className={styles.bgDark}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.sectionHeaderDark}`}>
            <span className={styles.sectionTagDark}>❓ FAQ Teológico</span>
            <h2>Questões Difíceis e Debatidas</h2>
          </div>

          {faqItems.map((item, i) => (
            <div key={i} className={`${styles.accordionItem} animaItem`}>
              <button
                className={styles.accordionHeader}
                onClick={() => onToggleFaq(i)}
                aria-expanded={activeFaq === i}
              >
                <h3>{item.q}</h3>
                <span
                  className={`${styles.accordionIcon} ${activeFaq === i ? styles.accordionIconRotated : ''}`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`${styles.accordionContent} ${activeFaq === i ? styles.accordionContentActive : ''}`}
              >
                {item.a.split('\n').map((line, j) =>
                  line.trim() === '' ? null : (
                    line.startsWith('•') ? (
                      <p key={j} style={{ paddingLeft: '1.5rem', color: '#444' }}>{line}</p>
                    ) : (
                      <p key={j} style={{ marginBottom: '0.8rem', color: '#333' }}>{line}</p>
                    )
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================
          SEÇÃO 13 — ORAÇÕES
      ================================================ */}
      <section id="oracoes" className={styles.sectionWrapper}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>🙏 Orações</span>
            <h2>Orações para Antes e Depois da Crisma</h2>
            <p>Rezar bem é metade da preparação</p>
          </div>

          <div className={styles.grid2}>
            {oracoes.map((o, i) => (
              <div key={i} className={`${styles.oracaoBox} animaItem`}>
                <h3>{o.titulo}</h3>
                <p>
                  {o.texto.split('\n').map((line, j) => (
                    <span key={j}>{line}<br /></span>
                  ))}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <h3 style={{ color: '#8B0000', marginBottom: '1.5rem' }}>
              📋 Documentos do Magistério sobre a Crisma
            </h3>
            <div className={styles.synodBadges}>
              {documentos.map(b => (
                <span key={b} className={styles.synodBadge}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          SEÇÃO 14 — MISSÃO
      ================================================ */}
      <section id="missao" className={styles.sectionWrapper}>
        <div className={styles.container}>
          <div className={`${styles.missaoHero} animaItem`}>
            <h2>🕊️ A Crisma é uma Missão, Não uma Chegada</h2>
            <p>
              O maior perigo com a Crisma é tratá-la como uma linha de chegada — o fim de um
              percurso catequético que libera o cristão de &ldquo;ter de ir à Missa&rdquo; ou
              &ldquo;de se preocupar com religião&rdquo;. Mas a teologia é exatamente oposta:
              a Crisma é uma linha de partida.
            </p>
            <p>
              Os Apóstolos receberam o Espírito em Pentecostes e saíram para o mundo. Não ficaram
              no Cenáculo. Não organizaram mais reuniões de discernimento. Foram. Pregaram. Amaram.
              Sofreram. Transformaram o mundo.
            </p>
            <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#F0D060' }}>
              &ldquo;Ide e fazei discípulos de todas as nações.&rdquo; — Mt 28,19
            </p>
            <div className={styles.missaoBtns}>
              <a
                href="#dons"
                className={`${styles.btn} ${styles.btnGold}`}
                onClick={e => { e.preventDefault(); onScrollTo('#dons') }}
              >
                Revisitar os 7 Dons
              </a>
              <a
                href="#oracoes"
                className={`${styles.btn} ${styles.btnOutline}`}
                onClick={e => { e.preventDefault(); onScrollTo('#oracoes') }}
              >
                Ir para as Orações
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          FOOTER
      ================================================ */}
      <footer className={styles.footer}>
        <span className={styles.footerCross}>🔥</span>
        <h3>Sacramento da Crisma</h3>
        <p>Uma página a serviço do conhecimento da fé católica</p>

        <div className={styles.footerLinks}>
          {footerLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={e => { e.preventDefault(); onScrollTo(l.href) }}
            >
              {l.label}
            </a>
          ))}
          <Link href="/estudos/batismo">→ Página do Batismo</Link>
        </div>

        <div className={styles.footerBottom}>
          <p>
            Conteúdo baseado no Catecismo da Igreja Católica, documentos do Magistério e obras
            teológicas de referência. Esta página aborda exclusivamente a Crisma; o Batismo é
            tratado em página separada.
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            &ldquo;Recebe o sinal do Dom do Espírito Santo.&rdquo; — Rito da Confirmação
          </p>
        </div>
      </footer>

    </main>
  )
}