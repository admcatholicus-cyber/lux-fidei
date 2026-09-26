// estudos/concilios/calcedonia/page.tsx
'use client'

import Link from 'next/link'
import { ConcilioLayout } from '../_shared/ConcilioLayout'
import { fichaConcilio } from './_data/ficha'
import { antecedentes, resumoAntecedentes } from './_data/antecedentes'
import { convocacao } from './_data/convocacao'
import { contextoPolitico, cronologiaPolitica } from './_data/contexto-politico'
import {
  sessoes,
  resumoSessoes,
  linhaDoTempoSessoes,
  presidentes,
  sessoesAdministrativas,
} from './_data/sessoes'
import {
  participantes,
  monofisitas,
  ausencias,
  totalParticipantes,
} from './_data/participantes'
import { personagens } from './_data/personagens'
import { controversias, resumoControversias } from './_data/controversias'
import {
  partidos,
  resumoPartidos,
  espectroTeologico,
  quemFoiCondenadoPorNome,
  oQueNaoFoiTocado,
} from './_data/partidos'
import {
  textoIntegralPT,
  analiseFrasePorFrase,
  osQuatroAdverbios,
  fontesDaDefinicao,
  problemaEkVsEn,
} from './_data/definicao'
import {
  contexto as tomoContexto,
  resumoTeologico as tomoResumoTeologico,
  textoIntegralPT as tomoTextoIntegral,
  trechosChaveLatim,
  recepcaoEmCalcedonia,
  significadoHistorico,
} from './_data/tomo-leao'
import {
  sinteseCalcedoniana,
  glossarioGrego,
  cristologia,
  comparacaoConcilios,
  naoDefinidos,
  resumoTeologico,
} from './_data/doutrina'
import {
  canones,
  notaIntrodutoria,
  analiseCanon28,
} from './_data/canones'
import {
  introducao as cismaIntroducao,
  reacaoImediata,
  tentativasReconciliacao,
  igrejasNaoCalcedonianas,
  dialogoEcumenicoModerno,
  porQuePersiste,
} from './_data/cisma'
import { mitos, resumoMitos } from './_data/mitos'
import { legado } from './_data/legado'
import { recepcao, resumoRecepcao } from './_data/recepcao'
import {
  fontesPrimariasAtas,
  fontesPrimariasHistoriadores,
  fontesPrimariasOutros,
  fontesSecundarias,
  fontesModernas,
  recursosOnline,
  resumoFontes,
} from './_data/fontes'
import styles from './calcedonia.module.css'

export default function CalcedoniaPage() {
  return (
    <ConcilioLayout
      numeroEcum="IV Concílio Ecumênico"
      titulo="Concílio de Calcedônia"
      subtitulo={`${fichaConcilio.nomeGrego} · ${fichaConcilio.nomeLatim}`}
      data={`${fichaConcilio.data.inicio} – ${fichaConcilio.data.fim}`}
      local={`${fichaConcilio.local.edificio}, ${fichaConcilio.local.cidade}`}
      proxLink="/estudos/concilios/constantinopla-2"
      proxTexto="Constantinopla II (553)"
    >
      {/* ===================================================== */}
      {/* CTA DOSSIÊ DOCUMENTAL                                  */}
      {/* ===================================================== */}
      <div className={styles.dossieCTA}>
        <div className={styles.dossieBarra} />
        <div className={styles.dossieGlow} />

        <div className={styles.dossieBadge}>
          <span className={styles.dossieBadgeDot} />
          Dossiê Documental
        </div>

        <h2 className={styles.dossieTitulo}>
          Explore o Concílio de Calcedônia em profundidade
        </h2>

        <p className={styles.dossieDescricao}>
          Actas conciliares, o Tomo de Leão em latim e português, a Definição
          integral com análise frase por frase, os 28 cânones disciplinares e
          o dossiê completo do Cisma que dividiu a cristandade em duas grandes
          famílias eclesiais.
        </p>

        <div className={styles.dossieTags}>
          <span className={styles.dossieTag}>Actas ACO (Schwartz)</span>
          <span className={styles.dossieTag}>Tomo de Leão</span>
          <span className={styles.dossieTag}>Definição em grego</span>
          <span className={styles.dossieTag}>28 cânones</span>
          <span className={styles.dossieTag}>Cânon 28 e primazia</span>
          <span className={styles.dossieTag}>Diálogo com as Igrejas Orientais</span>
        </div>

        <Link
          href="/estudos/concilios/calcedonia/documentos"
          className={styles.dossieBotao}
        >
          Abrir dossiê completo →
        </Link>

        <p className={styles.dossieNota}>
          Inclui traduções, análises comparativas, glossário grego e recursos
          para pesquisa acadêmica.
        </p>
      </div>

      {/* ===================================================== */}
      {/* FICHA RÁPIDA                                          */}
      {/* ===================================================== */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>📋</span>
          Ficha Rápida
        </h2>

        <div className={styles.fichaRapida}>
          <div className={styles.fichaCard}>
            <div className={styles.fichaLabel}>Convocado por</div>
            <div className={styles.fichaValor}>
              {fichaConcilio.convocador.nome}
              <br />
              <small>{fichaConcilio.convocador.titulo}</small>
            </div>
          </div>

          <div className={styles.fichaCard}>
            <div className={styles.fichaLabel}>Participantes</div>
            <div className={styles.fichaValor}>
              {fichaConcilio.participantes.total}
              <br />
              <small>o maior concílio da Antiguidade</small>
            </div>
          </div>

          <div className={styles.fichaCard}>
            <div className={styles.fichaLabel}>Local</div>
            <div className={styles.fichaValor}>
              Calcedônia
              <br />
              <small>{fichaConcilio.local.edificio}</small>
            </div>
          </div>

          <div className={styles.fichaCard}>
            <div className={styles.fichaLabel}>Duração</div>
            <div className={styles.fichaValor}>
              {fichaConcilio.data.duracao}
            </div>
          </div>

          <div className={styles.fichaCard}>
            <div className={styles.fichaLabel}>Tipo</div>
            <div className={styles.fichaValor}>
              IV Concílio Ecumênico
              <br />
              <small>16 sessões plenárias</small>
            </div>
          </div>
        </div>
      </section>

      <hr className={styles.divisor} />

      {/* ===================================================== */}
      {/* VISÃO GERAL E CONTEXTO                                */}
      {/* ===================================================== */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>🌍</span>
          Visão Geral e Contexto
        </h2>

        <p className={styles.secaoTexto}>{fichaConcilio.contextoResumido}</p>

        <div className={styles.destaque}>
          <strong>Resultado central:</strong> a Definição de Calcedônia fixou
          para sempre a fé cristológica ortodoxa — &quot;um só e o mesmo
          Cristo, em duas naturezas, sem confusão, sem mudança, sem divisão,
          sem separação, em uma pessoa e uma hipóstase&quot;.
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '1.5rem' }}>
          Resultados principais
        </h3>
        <ul className={styles.resultadosLista}>
          {fichaConcilio.resultadosPrincipais.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      <hr className={styles.divisor} />

      {/* ===================================================== */}
      {/* ANTECEDENTES                                          */}
      {/* ===================================================== */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>📜</span>
          Antecedentes (431–451)
        </h2>

        <p className={styles.secaoTexto}>{resumoAntecedentes}</p>

        <div className={styles.presidentesLista}>
          {antecedentes.map((periodo, i) => (
            <div key={i} className={styles.presidenteItem}>
              <div className={styles.presidenteFase}>{periodo.periodo}</div>
              <div className={styles.presidenteInfo}>
                <h4>{periodo.titulo}</h4>
                <p>{periodo.descricaoGeral}</p>
                {periodo.eventos && periodo.eventos.length > 0 && (
                  <ul className={styles.resultadosLista} style={{ marginTop: '0.75rem' }}>
                    {periodo.eventos.map((e, j) => (
                      <li key={j}>
                        <strong>{e.ano}</strong> — {e.titulo}: {e.descricao}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className={styles.divisor} />

      {/* ===================================================== */}
      {/* CONTEXTO POLÍTICO                                     */}
      {/* ===================================================== */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>👑</span>
          Contexto Político do Império
        </h2>

        <p className={styles.secaoTexto}>{contextoPolitico.imperio.descricao}</p>

        <div className={styles.heresiasGrid}>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>{contextoPolitico.marciano.titulo}</div>
            <div className={styles.heresiaErro}>{contextoPolitico.marciano.biografia}</div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>{contextoPolitico.pulqueria.titulo}</div>
            <div className={styles.heresiaErro}>{contextoPolitico.pulqueria.biografia}</div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>{contextoPolitico.igrejaEstado.titulo}</div>
            <div className={styles.heresiaErro}>{contextoPolitico.igrejaEstado.descricao}</div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>{contextoPolitico.capital.titulo}</div>
            <div className={styles.heresiaErro}>{contextoPolitico.capital.descricao}</div>
          </div>
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          Cronologia política (449–455)
        </h3>
        <div className={styles.presidentesLista}>
          {cronologiaPolitica.map((c, i) => (
            <div key={i} className={styles.presidenteItem}>
              <div className={styles.presidenteFase}>{c.ano}</div>
              <div className={styles.presidenteInfo}>
                <p>{c.evento}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className={styles.divisor} />

            {/* ===================================================== */}
      {/* CONVOCAÇÃO E MOTIVAÇÕES                               */}
      {/* ===================================================== */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>✉️</span>
          Convocação e Motivações
        </h2>

        <p className={styles.secaoTexto}>{convocacao.contextoImediato.descricao}</p>

        <div className={styles.destaque}>
          <strong>Logística:</strong> {convocacao.logistica.localEscolhido.razao}
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '1.5rem' }}>
          As seis motivações da convocação
        </h3>
        <div className={styles.heresiasGrid}>
          {Object.values(convocacao.motivacoes).map((m, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{m.titulo}</div>
              <div className={styles.heresiaErro}>{m.descricao}</div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          {convocacao.tresFrentes.titulo}
        </h3>
        <p className={styles.secaoTexto}>{convocacao.tresFrentes.descricao}</p>
        <div className={styles.presidentesLista}>
          {convocacao.tresFrentes.frentes.map((f, i) => (
            <div key={i} className={styles.presidenteItem}>
              <div className={styles.presidenteFase}>{f.sessoes}</div>
              <div className={styles.presidenteInfo}>
                <h4>{f.nome}</h4>
                <p>{f.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className={styles.divisor} />

      {/* ===================================================== */}
      {/* EPÍGRAFE DA DEFINIÇÃO                                 */}
      {/* ===================================================== */}
      <section className={styles.secao}>
        <div className={styles.destaque} style={{ fontSize: '1.1rem', padding: '2rem 2.25rem' }}>
          <strong>&quot;Um só e o mesmo Cristo,</strong>
          <br />
          Filho, Senhor, Unigênito,
          <br />
          reconhecido em duas naturezas,
          <br />
          sem confusão, sem mudança, sem divisão, sem separação,
          <br />
          em uma pessoa e uma hipóstase.&quot;
          <br />
          <br />
          <span style={{ fontSize: '0.85rem', color: 'var(--calc-gold)', fontStyle: 'normal', letterSpacing: '0.1em' }}>
            — DEFINIÇÃO DE CALCEDÔNIA · SESSÃO 5 · 22 DE OUTUBRO DE 451
          </span>
        </div>
      </section>

      <hr className={styles.divisor} />

      {/* ===================================================== */}
      {/* SESSÕES E PRESIDÊNCIA                                 */}
      {/* ===================================================== */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>🏛️</span>
          Fases, Sessões e Presidência
        </h2>

        <p className={styles.secaoTexto}>{resumoSessoes}</p>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '1.5rem' }}>
          Presidência do concílio
        </h3>
        <div className={styles.presidentesLista}>
          {presidentes.map((p, i) => (
            <div key={i} className={styles.presidenteItem}>
              <div className={styles.presidenteFase}>{p.periodo}</div>
              <div className={styles.presidenteInfo}>
                <h4>{p.nome}</h4>
                <p>{p.obs}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          Linha do tempo das sessões
        </h3>
        <div className={styles.presidentesLista}>
          {linhaDoTempoSessoes.map((l, i) => (
            <div key={i} className={styles.presidenteItem}>
              <div className={styles.presidenteFase}>{l.data}</div>
              <div className={styles.presidenteInfo}>
                <p>{l.evento}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          As sessões solenes em detalhe
        </h3>
        <div className={styles.heresiasGrid}>
          {sessoes.map((s) => (
            <div key={s.numero} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>
                {s.numero} ({s.fase}) — {s.data}
              </div>
              <div className={styles.heresiaLider}>Presidente: {s.presidente}</div>
              <div className={styles.heresiaErro}>
                <strong>Clima:</strong> {s.clima}
                <br /><br />
                <strong>Resultado:</strong> {s.resultado}
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          {sessoesAdministrativas.titulo}
        </h3>
        <p className={styles.secaoTexto}>{sessoesAdministrativas.resumo}</p>
        <ul className={styles.resultadosLista}>
          {sessoesAdministrativas.detalhes.map((s, i) => (
            <li key={i}>
              <strong>{s.sessao} — {s.titulo}:</strong> {s.descricao}
            </li>
          ))}
        </ul>
      </section>

      <hr className={styles.divisor} />

      {/* ===================================================== */}
      {/* PARTICIPANTES                                         */}
      {/* ===================================================== */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>👥</span>
          Participantes
        </h2>

        <p className={styles.secaoTexto}>{totalParticipantes.composicao}</p>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '1.5rem' }}>
          Distribuição geográfica
        </h3>
        <div className={styles.heresiasGrid}>
          {participantes.map((p, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{p.titulo}</div>
              <div className={styles.heresiaErro}>{p.descricao}</div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          {monofisitas.titulo}
        </h3>
        <div className={styles.destaque} style={{ textAlign: 'left', fontStyle: 'normal' }}>
          <p>{monofisitas.descricao}</p>
          <p style={{ marginTop: '0.75rem' }}><strong>Desfecho:</strong> {monofisitas.desfecho}</p>
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          {ausencias.titulo}
        </h3>
        <p className={styles.secaoTexto}>{ausencias.descricao}</p>
        <ul className={styles.resultadosLista}>
          {ausencias.ausentes.map((a, i) => (
            <li key={i}>
              <strong>{a.nome} ({a.sede}):</strong> {a.razao}
            </li>
          ))}
        </ul>
      </section>

      <hr className={styles.divisor} />

      {/* ===================================================== */}
      {/* PERSONAGENS                                           */}
      {/* ===================================================== */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>🎭</span>
          Personagens Principais
        </h2>

        <div className={styles.heresiasGrid}>
          {personagens.map((p, i) => (
            <div key={i} className={styles.personagemCard}>
              <div>
                <div className={styles.personagemNome}>{p.nome}</div>
                {p.nomeGrego && (
                  <div className={styles.personagemGrego}>{p.nomeGrego}</div>
                )}
                <div className={styles.personagemMeta}>
                  {p.titulo} · {p.datas}
                </div>
                <div className={styles.personagemBio}>{p.biografia}</div>
                <div className={styles.personagemPapel}>
                  <strong>No concílio:</strong> {p.papelNoConcilio}
                </div>
              </div>
              {p.curiosidade && (
                <div className={styles.personagemCuriosidade}>
                  ✦ {p.curiosidade}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <hr className={styles.divisor} />

      {/* ===================================================== */}
      {/* CONTROVÉRSIAS                                         */}
      {/* ===================================================== */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>⚔️</span>
          Controvérsias e Tensões Internas
        </h2>

        <p className={styles.secaoTexto}>{resumoControversias}</p>

        <div className={styles.heresiasGrid}>
          {controversias.map((c) => (
            <div key={c.id} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>
                {c.id}. {c.titulo}
              </div>
              <div className={styles.heresiaLider}>{c.resumo}</div>
              <div className={styles.heresiaErro}>{c.detalhes}</div>
              <div style={{ marginTop: '0.85rem', fontSize: '0.85rem', color: 'var(--calc-text-muted)' }}>
                <strong>Partes:</strong> {c.partesEnvolvidas.join(', ')}
              </div>
              <div className={styles.personagemPapel} style={{ marginTop: '0.75rem' }}>
                <strong>Resultado:</strong> {c.resultado}
              </div>
              <div style={{ marginTop: '0.75rem', fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--calc-red)' }}>
                <strong>Consequência de longo prazo:</strong> {c.consequenciaDeLongoPrazo}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className={styles.divisor} />

      {/* ===================================================== */}
      {/* PARTIDOS TEOLÓGICOS                                   */}
      {/* ===================================================== */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>🎯</span>
          Partidos Teológicos e Espectro Cristológico
        </h2>

        <p className={styles.secaoTexto}>{resumoPartidos}</p>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '1.5rem' }}>
          Espectro cristológico do século V
        </h3>
        <ul className={styles.resultadosLista}>
          {espectroTeologico.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          Os cinco partidos em detalhe
        </h3>
        <div className={styles.heresiasGrid}>
          {partidos.map((p, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{p.nome}</div>
              {p.nomeAlternativo && (
                <div className={styles.heresiaLider}>{p.nomeAlternativo}</div>
              )}
              <div style={{ fontSize: '0.85rem', color: 'var(--calc-gold)', fontStyle: 'italic', marginBottom: '0.6rem' }}>
                {p.termoChave}
              </div>
              <div className={styles.heresiaErro}>{p.descricao}</div>
              <div style={{ marginTop: '0.85rem', fontSize: '0.85rem', color: 'var(--calc-text-muted)' }}>
                <strong>Líder:</strong> {p.lider}
                <br />
                <strong>Base:</strong> {p.baseGeografica}
                <br />
                <strong>Força:</strong> {p.forcaNumerica}
              </div>
              <div className={styles.personagemPapel} style={{ marginTop: '0.75rem' }}>
                <strong>Status no concílio:</strong> {p.statusNoConcilio}
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          {quemFoiCondenadoPorNome.titulo}
        </h3>
        <p className={styles.secaoTexto}>{quemFoiCondenadoPorNome.observacaoGeral}</p>
        <ul className={styles.resultadosLista}>
          {quemFoiCondenadoPorNome.detalhes.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
        <div className={styles.destaque}>
          <strong>Única exceção:</strong> {quemFoiCondenadoPorNome.unicaExcecao}
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          {oQueNaoFoiTocado.titulo}
        </h3>
        <p className={styles.secaoTexto}>{oQueNaoFoiTocado.introducao}</p>
        <div className={styles.presidentesLista}>
          {oQueNaoFoiTocado.itens.map((item, i) => (
            <div key={i} className={styles.presidenteItem}>
              <div className={styles.presidenteFase}>Tema {i + 1}</div>
              <div className={styles.presidenteInfo}>
                <h4>{item.topico}</h4>
                <p>{item.explicacao}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className={styles.divisor} />

      {/* ===================================================== */}
      {/* DEFINIÇÃO DE CALCEDÔNIA                              */}
      {/* ===================================================== */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>📖</span>
          A Definição de Calcedônia (Horos)
        </h2>

        <div className={styles.blocoDefinicao}>
          {textoIntegralPT.split('\n\n').map((paragrafo, i) => (
            <p key={i}>{paragrafo}</p>
          ))}
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          Análise frase por frase (12 cláusulas-chave)
        </h3>
        <div className={styles.heresiasGrid}>
          {analiseFrasePorFrase.map((f, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>&quot;{f.frase}&quot;</div>
              <div className={styles.glossarioGrego} style={{ marginBottom: '0.65rem' }}>
                {f.grego}
              </div>
              <div className={styles.heresiaErro}>{f.significado}</div>
              <div className={styles.personagemPapel} style={{ marginTop: '0.75rem' }}>
                <strong>Contra:</strong> {f.contraQuem}
              </div>
              <div style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--calc-text-muted)' }}>
                <strong>Base bíblica:</strong>
                <ul className={styles.resultadosLista} style={{ marginTop: '0.35rem' }}>
                  {f.baseBiblica.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          {osQuatroAdverbios.titulo}
        </h3>
        <p className={styles.secaoTexto}>{osQuatroAdverbios.introducao}</p>
        <div className={styles.heresiasGrid}>
          {osQuatroAdverbios.adverbios.map((a, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome} style={{ fontSize: '1.4rem' }}>
                {a.grego}
              </div>
              <div className={styles.glossarioGrego}>{a.transliteracao}</div>
              <div className={styles.heresiaLider} style={{ marginTop: '0.4rem' }}>
                {a.traducao}
              </div>
              <div className={styles.personagemPapel} style={{ marginTop: '0.65rem' }}>
                <strong>Contra:</strong> {a.contraQuem}
              </div>
              <div className={styles.heresiaErro} style={{ marginTop: '0.75rem' }}>
                {a.explicacao}
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          {fontesDaDefinicao.titulo}
        </h3>
        <p className={styles.secaoTexto}>{fontesDaDefinicao.introducao}</p>
        <div className={styles.presidentesLista}>
          {fontesDaDefinicao.fontes.map((f, i) => (
            <div key={i} className={styles.presidenteItem}>
              <div className={styles.presidenteFase}>Fonte {i + 1}</div>
              <div className={styles.presidenteInfo}>
                <h4>{f.nome}</h4>
                <p>{f.contribuicao}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          {problemaEkVsEn.titulo}
        </h3>
        <p className={styles.secaoTexto}>{problemaEkVsEn.introducao}</p>
        <div className={styles.heresiasGrid}>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>ἐκ (ek)</div>
            <div className={styles.heresiaLider}>&quot;a partir de&quot;</div>
            <div className={styles.heresiaErro}>{problemaEkVsEn.ek}</div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>ἐν (en)</div>
            <div className={styles.heresiaLider}>&quot;em&quot;</div>
            <div className={styles.heresiaErro}>{problemaEkVsEn.en}</div>
          </div>
        </div>
        <div className={styles.destaque} style={{ textAlign: 'left', fontStyle: 'normal' }}>
          <strong>Conclusão:</strong> {problemaEkVsEn.conclusao}
        </div>
      </section>

      <hr className={styles.divisor} />

      {/* ===================================================== */}
      {/* TOMO DE LEÃO                                          */}
      {/* ===================================================== */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>✒️</span>
          O Tomo de Leão (Epistula 28, 449)
        </h2>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem' }}>
          {tomoContexto.titulo}
        </h3>
        <p className={styles.secaoTexto}>{tomoContexto.descricao}</p>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '1.5rem' }}>
          {tomoResumoTeologico.titulo}
        </h3>
        <div className={styles.presidentesLista}>
          {tomoResumoTeologico.pontos.map((p, i) => (
            <div key={i} className={styles.presidenteItem}>
              <div className={styles.presidenteFase}>Pilar {i + 1}</div>
              <div className={styles.presidenteInfo}>
                <h4>{p.titulo}</h4>
                <p>{p.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          Texto integral do Tomo (tradução)
        </h3>
        <div className={styles.blocoDefinicao}>
          {tomoTextoIntegral.split('\n\n').map((paragrafo, i) => (
            <p key={i}>{paragrafo}</p>
          ))}
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          Trechos-chave em latim
        </h3>
        <div className={styles.heresiasGrid}>
          {trechosChaveLatim.map((t, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome} style={{ fontSize: '0.95rem', fontStyle: 'italic' }}>
                &quot;{t.trecho}&quot;
              </div>
              <div className={styles.heresiaLider} style={{ marginTop: '0.75rem' }}>
                {t.traducao}
              </div>
              <div className={styles.heresiaErro} style={{ marginTop: '0.75rem' }}>
                {t.significado}
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          {recepcaoEmCalcedonia.titulo}
        </h3>
        <p className={styles.secaoTexto}>{recepcaoEmCalcedonia.descricao}</p>
        <div className={styles.presidentesLista}>
          {recepcaoEmCalcedonia.momentos.map((m, i) => (
            <div key={i} className={styles.presidenteItem}>
              <div className={styles.presidenteFase}>Momento {i + 1}</div>
              <div className={styles.presidenteInfo}>
                <h4>{m.titulo}</h4>
                <p>{m.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.destaque} style={{ marginTop: '2rem', textAlign: 'left', fontStyle: 'normal' }}>
          <strong>Significado histórico:</strong> {significadoHistorico}
        </div>
      </section>

      <hr className={styles.divisor} />

      {/* ===================================================== */}
      {/* DOUTRINA CRISTOLÓGICA                                 */}
      {/* ===================================================== */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>☦️</span>
          Doutrina Cristológica de Calcedônia
        </h2>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem' }}>
          {sinteseCalcedoniana.titulo}
        </h3>
        <p className={styles.secaoTexto}>{sinteseCalcedoniana.introducao}</p>
        <div className={styles.presidentesLista}>
          {sinteseCalcedoniana.pilares.map((p, i) => (
            <div key={i} className={styles.presidenteItem}>
              <div className={styles.presidenteFase}>Pilar {i + 1}</div>
              <div className={styles.presidenteInfo}>
                <h4>{p.conceito}</h4>
                <p>{p.explicacao}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          Glossário técnico grego (12 termos)
        </h3>
        <div className={styles.heresiasGrid}>
          {glossarioGrego.map((g, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.glossarioTermo} style={{ fontSize: '1.15rem' }}>
                {g.termo}
              </div>
              <div style={{ fontSize: '1.15rem', color: 'var(--calc-gold)', margin: '0.15rem 0' }}>
                {g.grego}
              </div>
              <div className={styles.glossarioGrego}>{g.transcricao}</div>
              <div className={styles.heresiaErro} style={{ marginTop: '0.75rem' }}>
                {g.definicao}
              </div>
              <div className={styles.personagemPapel} style={{ marginTop: '0.75rem' }}>
                <strong>Importância cristológica:</strong> {g.importanciaCristologica}
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          {cristologia.titulo}
        </h3>
        <p className={styles.secaoTexto}>{cristologia.introducao}</p>
        <div className={styles.presidentesLista}>
          <div className={styles.presidenteItem}>
            <div className={styles.presidenteFase}>Eixo 1</div>
            <div className={styles.presidenteInfo}>
              <h4>União Hipostática</h4>
              <p>{cristologia.uniaoHipostatica}</p>
            </div>
          </div>
          <div className={styles.presidenteItem}>
            <div className={styles.presidenteFase}>Eixo 2</div>
            <div className={styles.presidenteInfo}>
              <h4>Communicatio Idiomatum</h4>
              <p>{cristologia.communicatioIdiomatum}</p>
            </div>
          </div>
          <div className={styles.presidenteItem}>
            <div className={styles.presidenteFase}>Eixo 3</div>
            <div className={styles.presidenteInfo}>
              <h4>Realidade da humanidade</h4>
              <p>{cristologia.realidadeHumanidade}</p>
            </div>
          </div>
          <div className={styles.presidenteItem}>
            <div className={styles.presidenteFase}>Eixo 4</div>
            <div className={styles.presidenteInfo}>
              <h4>Realidade da divindade</h4>
              <p>{cristologia.realidadeDivindade}</p>
            </div>
          </div>
          <div className={styles.presidenteItem}>
            <div className={styles.presidenteFase}>Eixo 5</div>
            <div className={styles.presidenteInfo}>
              <h4>Hipóstase Composta</h4>
              <p>{cristologia.naturezaComposta}</p>
            </div>
          </div>
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          Comparação entre os quatro primeiros concílios
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table className={styles.tabelaComparativa}>
            <thead>
              <tr>
                <th>Tópico</th>
                <th>Niceia 325</th>
                <th>Constantinopla 381</th>
                <th>Éfeso 431</th>
                <th>Calcedônia 451</th>
              </tr>
            </thead>
            <tbody>
              {comparacaoConcilios.map((c, i) => (
                <tr key={i}>
                  <td><strong>{c.topico}</strong></td>
                  <td>{c.niceia325}</td>
                  <td>{c.constantinopla381}</td>
                  <td>{c.efeso431}</td>
                  <td>{c.calcedonia451}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          {naoDefinidos.titulo}
        </h3>
        <p className={styles.secaoTexto}>{naoDefinidos.introducao}</p>
        <div className={styles.heresiasGrid}>
          {naoDefinidos.itens.map((item, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{item.topico}</div>
              <div className={styles.heresiaErro}>{item.descricao}</div>
              <div className={styles.personagemPapel} style={{ marginTop: '0.75rem' }}>
                <strong>Por que não em 451?</strong> {item.porQueNao}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.destaque} style={{ marginTop: '2rem', textAlign: 'left', fontStyle: 'normal' }}>
          <strong>{resumoTeologico.titulo}:</strong> {resumoTeologico.tese}
          <ul className={styles.resultadosLista} style={{ marginTop: '1rem' }}>
            {resumoTeologico.conquistas.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
          <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>{resumoTeologico.legado}</p>
        </div>
      </section>

      <hr className={styles.divisor} />

      {/* ===================================================== */}
      {/* CÂNONES                                               */}
      {/* ===================================================== */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>⚖️</span>
          Os Cânones Disciplinares (27/28)
        </h2>

        <p className={styles.secaoTexto}>{notaIntrodutoria}</p>

        <div className={styles.heresiasGrid}>
          {canones.map((c) => (
            <div key={c.numero} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>
                Cânon {c.numero} — {c.titulo}
              </div>
              <div className={styles.heresiaLider}>Tema: {c.tema}</div>
              <div className={styles.heresiaErro} style={{ fontSize: '0.9rem' }}>
                {c.texto}
              </div>
              {c.observacao && (
                <div className={styles.personagemPapel} style={{ marginTop: '0.75rem' }}>
                  <strong>Observação:</strong> {c.observacao}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <hr className={styles.divisor} />

      {/* ===================================================== */}
      {/* CÂNON 28 E PRIMAZIA                                   */}
      {/* ===================================================== */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>👑</span>
          O Cânon 28 e a Questão da Primazia
        </h2>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.2rem' }}>
          {analiseCanon28.titulo}
        </h3>

        <div className={styles.blocoDefinicao}>
          <p>{analiseCanon28.textoIntegral}</p>
        </div>

        <div className={styles.presidentesLista}>
          <div className={styles.presidenteItem}>
            <div className={styles.presidenteFase}>Argumento</div>
            <div className={styles.presidenteInfo}>
              <h4>O argumento do cânon</h4>
              <p>{analiseCanon28.argumento}</p>
            </div>
          </div>
          <div className={styles.presidenteItem}>
            <div className={styles.presidenteFase}>Reação</div>
            <div className={styles.presidenteInfo}>
              <h4>Protesto dos legados papais</h4>
              <p>{analiseCanon28.reacaoLegados}</p>
            </div>
          </div>
          <div className={styles.presidenteItem}>
            <div className={styles.presidenteFase}>Anulação</div>
            <div className={styles.presidenteInfo}>
              <h4>Anulação por Leão Magno</h4>
              <p>{analiseCanon28.anulacaoLeao}</p>
            </div>
          </div>
          <div className={styles.presidenteItem}>
            <div className={styles.presidenteFase}>Roma</div>
            <div className={styles.presidenteInfo}>
              <h4>Posição católica</h4>
              <p>{analiseCanon28.posicaoCatolica}</p>
            </div>
          </div>
          <div className={styles.presidenteItem}>
            <div className={styles.presidenteFase}>Bizâncio</div>
            <div className={styles.presidenteInfo}>
              <h4>Posição ortodoxa</h4>
              <p>{analiseCanon28.posicaoOrtodoxa}</p>
            </div>
          </div>
          <div className={styles.presidenteItem}>
            <div className={styles.presidenteFase}>1054</div>
            <div className={styles.presidenteInfo}>
              <h4>Consequências até hoje</h4>
              <p>{analiseCanon28.consequencias}</p>
            </div>
          </div>
        </div>
      </section>

      <hr className={styles.divisor} />

      {/* ===================================================== */}
      {/* CISMA DE CALCEDÔNIA                                   */}
      {/* ===================================================== */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>💔</span>
          O Cisma de Calcedônia
        </h2>

        <p className={styles.secaoTexto}>{cismaIntroducao}</p>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          {reacaoImediata.titulo}
        </h3>
        <div className={styles.presidentesLista}>
          {reacaoImediata.eventos.map((e, i) => (
            <div key={i} className={styles.presidenteItem}>
              <div className={styles.presidenteFase}>{e.ano}</div>
              <div className={styles.presidenteInfo}>
                <h4>{e.titulo}</h4>
                <p>{e.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          {tentativasReconciliacao.titulo}
        </h3>
        <div className={styles.presidentesLista}>
          {tentativasReconciliacao.eventos.map((e, i) => (
            <div key={i} className={styles.presidenteItem}>
              <div className={styles.presidenteFase}>{e.ano}</div>
              <div className={styles.presidenteInfo}>
                <h4>{e.titulo}</h4>
                <p>{e.descricao}</p>
                <div className={styles.personagemPapel} style={{ marginTop: '0.6rem' }}>
                  <strong>Resultado:</strong> {e.resultado}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          {igrejasNaoCalcedonianas.titulo}
        </h3>
        <p className={styles.secaoTexto}>{igrejasNaoCalcedonianas.introducao}</p>
        <div className={styles.heresiasGrid}>
          {igrejasNaoCalcedonianas.igrejas.map((igreja, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{igreja.nome}</div>
              <div className={styles.heresiaLider}>{igreja.pais}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--calc-gold)', margin: '0.5rem 0', fontWeight: 600 }}>
                {igreja.fieis}
              </div>
              <div className={styles.heresiaErro}>
                <strong>Patriarca:</strong> {igreja.patriarca}
                <br />
                <br />
                <strong>Liturgia:</strong> {igreja.liturgia}
                <br />
                <br />
                <strong>Posição:</strong> {igreja.posicao}
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          {dialogoEcumenicoModerno.titulo}
        </h3>
        <p className={styles.secaoTexto}>{dialogoEcumenicoModerno.introducao}</p>
        <div className={styles.presidentesLista}>
          {dialogoEcumenicoModerno.marcos.map((m, i) => (
            <div key={i} className={styles.presidenteItem}>
              <div className={styles.presidenteFase}>{m.ano}</div>
              <div className={styles.presidenteInfo}>
                <h4>{m.titulo}</h4>
                <p>{m.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.destaque} style={{ marginTop: '2rem', textAlign: 'left', fontStyle: 'normal' }}>
          <strong>Por que o cisma persiste?</strong> {porQuePersiste}
        </div>
      </section>

      <hr className={styles.divisor} />

      {/* ===================================================== */}
      {/* MITOS                                                 */}
      {/* ===================================================== */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>🔍</span>
          Mitos e Mal-entendidos
        </h2>

        <p className={styles.secaoTexto}>{resumoMitos}</p>

        <div className={styles.heresiasGrid}>
          {mitos.map((m) => {
            const badgeClass =
              m.gravidade === 'alta'
                ? styles.badgeAlta
                : m.gravidade === 'média'
                  ? styles.badgeMedia
                  : styles.badgeBaixa
            return (
              <div key={m.id} className={styles.heresiaCard}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span
                    className={badgeClass}
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {m.gravidade}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--calc-text-faint)' }}>Mito #{m.id}</span>
                </div>
                <div className={styles.heresiaNome}>{m.mito}</div>
                <div className={styles.personagemPapel} style={{ marginTop: '0.75rem' }}>
                  <strong>Realidade:</strong> {m.realidade}
                </div>
                <div className={styles.heresiaErro} style={{ marginTop: '0.75rem' }}>
                  {m.explicacao}
                </div>
                <div style={{ marginTop: '0.75rem', fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--calc-text-muted)' }}>
                  <strong>Origem do mito:</strong> {m.origemDoMito}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <hr className={styles.divisor} />

      {/* ===================================================== */}
      {/* LEGADO                                                */}
      {/* ===================================================== */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>🏛️</span>
          Legado de Calcedônia
        </h2>

        {[
          legado.teologico,
          legado.eclesiastico,
          legado.politico,
          legado.cultural,
          legado.ecumenico,
        ].map((dim, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.2rem', marginTop: '1.5rem' }}>
              {dim.titulo}
            </h3>
            <p className={styles.secaoTexto}>{dim.introducao}</p>
            <div className={styles.presidentesLista}>
              {dim.pontos.map((p, j) => (
                <div key={j} className={styles.presidenteItem}>
                  <div className={styles.presidenteFase}>Ponto {j + 1}</div>
                  <div className={styles.presidenteInfo}>
                    <h4>{p.titulo}</h4>
                    <p>{p.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className={styles.destaque} style={{ marginTop: '2rem', textAlign: 'left', fontStyle: 'normal' }}>
          <strong>Síntese final do legado:</strong> {legado.resumoFinal}
        </div>
      </section>

      <hr className={styles.divisor} />

      {/* ===================================================== */}
      {/* RECEPÇÃO HISTÓRICA                                    */}
      {/* ===================================================== */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>📚</span>
          Recepção Histórica (451 – hoje)
        </h2>

        <p className={styles.secaoTexto}>{resumoRecepcao}</p>

        <div className={styles.presidentesLista}>
          {recepcao.map((r, i) => (
            <div key={i} className={styles.presidenteItem}>
              <div className={styles.presidenteFase}>{r.periodo}</div>
              <div className={styles.presidenteInfo}>
                <h4>{r.titulo}</h4>
                <p>{r.descricao}</p>
                <div className={styles.personagemPapel} style={{ marginTop: '0.6rem' }}>
                  <strong>Importância:</strong> {r.importancia}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className={styles.divisor} />

      {/* ===================================================== */}
      {/* FONTES E BIBLIOGRAFIA                                 */}
      {/* ===================================================== */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>📖</span>
          Fontes e Bibliografia
        </h2>

        <p className={styles.secaoTexto}>{resumoFontes.observacao}</p>

        <div className={styles.fichaRapida}>
          <div className={styles.fichaCard}>
            <div className={styles.fichaLabel}>Primárias</div>
            <div className={styles.fichaValor}>{resumoFontes.totalPrimarias}</div>
          </div>
          <div className={styles.fichaCard}>
            <div className={styles.fichaLabel}>Secundárias</div>
            <div className={styles.fichaValor}>{resumoFontes.totalSecundarias}</div>
          </div>
          <div className={styles.fichaCard}>
            <div className={styles.fichaLabel}>Modernas</div>
            <div className={styles.fichaValor}>{resumoFontes.totalModernas}</div>
          </div>
          <div className={styles.fichaCard}>
            <div className={styles.fichaLabel}>Online</div>
            <div className={styles.fichaValor}>{resumoFontes.totalRecursos}</div>
          </div>
        </div>

        {[
          { titulo: 'Fontes primárias — Atas e documentos conciliares', fontes: fontesPrimariasAtas },
          { titulo: 'Fontes primárias — Historiadores eclesiásticos', fontes: fontesPrimariasHistoriadores },
          { titulo: 'Fontes primárias — Outros autores contemporâneos', fontes: fontesPrimariasOutros },
          { titulo: 'Fontes secundárias antigas', fontes: fontesSecundarias },
          { titulo: 'Fontes modernas (estudos acadêmicos)', fontes: fontesModernas },
        ].map((cat, i) => (
          <div key={i} style={{ marginTop: '2rem' }}>
            <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem' }}>
              {cat.titulo}
            </h3>
            <div className={styles.heresiasGrid}>
              {cat.fontes.map((f, j) => (
                <div key={j} className={styles.heresiaCard}>
                  <div className={styles.heresiaNome}>{f.titulo}</div>
                  <div className={styles.heresiaLider}>
                    {f.autor} · {f.data} · {f.idioma}
                  </div>
                  <div className={styles.heresiaErro}>{f.descricao}</div>
                  <div className={styles.personagemPapel} style={{ marginTop: '0.75rem' }}>
                    <strong>Relevância:</strong> {f.relevancia}
                  </div>
                  {f.disponibilidade && (
                    <div style={{ marginTop: '0.6rem', fontSize: '0.82rem', fontStyle: 'italic', color: 'var(--calc-text-muted)' }}>
                      <strong>Disponível em:</strong> {f.disponibilidade}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          Recursos online
        </h3>
        <div className={styles.heresiasGrid}>
          {recursosOnline.map((r, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{r.nome}</div>
              <div className={styles.heresiaErro}>{r.descricao}</div>
              <div style={{ marginTop: '0.85rem' }}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--calc-purple-mid)',
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    borderBottom: '1px dashed var(--calc-gold-light)',
                  }}
                >
                  Acessar →
                </a>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--calc-purple)', fontSize: '1.15rem', marginTop: '2rem' }}>
          Recomendações de leitura
        </h3>
        <ul className={styles.resultadosLista}>
          {resumoFontes.recomendacaoLeitura.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      <hr className={styles.divisor} />

      {/* ===================================================== */}
      {/* CONTINUAR EXPLORANDO O DOSSIÊ                         */}
      {/* ===================================================== */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>📖</span>
          Continuar explorando o dossiê
        </h2>

        <p className={styles.secaoTexto}>
          O Concílio de Calcedônia é estudado aqui em profundidade através de
          um dossiê documental completo, com textos integrais traduzidos,
          análise das atas sessão por sessão, prosopografia dos personagens
          e recursos acadêmicos. Explore cada seção abaixo:
        </p>

        <div className={styles.navLinks}>
          <Link href="/estudos/concilios/calcedonia/documentos" className={styles.navLink}>
            📜 Documentos (hub do dossiê)
          </Link>
          <Link href="/estudos/concilios/calcedonia/documentos/atas" className={styles.navLink}>
            📋 Atas sessão por sessão
          </Link>
          <Link href="/estudos/concilios/calcedonia/personagens" className={styles.navLink}>
            🎭 Personagens
          </Link>
          <Link href="/estudos/concilios/calcedonia/cronologia" className={styles.navLink}>
            ⏳ Cronologia
          </Link>
          <Link href="/estudos/concilios/calcedonia/glossario" className={styles.navLink}>
            📚 Glossário
          </Link>
          <Link href="/estudos/concilios/calcedonia/bibliografia" className={styles.navLink}>
            📚 Bibliografia
          </Link>
        </div>
      </section>

      <hr className={styles.divisor} />

      {/* ===================================================== */}
      {/* NAVEGAÇÃO PARA DOCUMENTOS                             */}
      {/* ===================================================== */}
      <div className={styles.navLinks}>
        <Link href="/estudos/concilios/calcedonia/documentos" className={styles.navLink}>
          📜 Dossiê Documental Completo
        </Link>
        <Link href="/estudos/concilios" className={styles.navLink}>
          ← Todos os Concílios
        </Link>
        <Link href="/estudos/concilios/constantinopla-2" className={styles.navLink}>
          Constantinopla II (553) →
        </Link>
      </div>
    </ConcilioLayout>
  )
}