'use client'

import { fichaConcilio } from '../_data/ficha'
import { antecedentes, resumoAntecedentes } from '../_data/antecedentes'
import { convocacao } from '../_data/convocacao'
import { contextoPolitico, cronologiaPolitica } from '../_data/contexto-politico'
import {
  participantes,
  macedonianos,
  ausencias,
  totalParticipantes,
} from '../_data/participantes'
import { personagens } from '../_data/personagens'
import {
  partidos,
  resumoPartidos,
  espectroTeologico,
  quemFoiCondenadoPorNome,
  oQueNaoFoiTocado,
} from '../_data/partidos'
import {
  sinteseCapadocia,
  pneumatologia,
  cristologia,
  comparacaoCredos,
  limitesDoutrinarios,
  historicoFilioque,
  eclesiologia,
  sacramentologia,
  escatologia,
  resumoTeologico,
  glossarioGrego,
} from '../_data/doutrina'
import { controversias, resumoControversias } from '../_data/controversias'
import { sessoes, resumoSessoes, linhaDoTempoSessoes } from '../_data/sessoes'
import { debatesArena } from '../_data/debatesArena'
import { DebateArena } from '../../_shared/DebateArena'
import {
  IconConcilio, IconDebates, IconCross, IconBook, IconScroll,
  IconHourglass, IconGlobe, IconPin, IconScales, IconStop,
  IconMicroscope, IconPencil, IconWarning, IconBooks,
} from './Icons'
import styles from '../constantinopla-1.module.css'

const NAV_ITENS = [
  { id: 'abertura', label: 'Convocação' },
  { id: 'debates', label: 'Debates' },
  { id: 'pneumatologia', label: 'O Espírito Santo' },
  { id: 'apolinarismo', label: 'Apolinarismo' },
  { id: 'credo', label: 'O Credo' },
  { id: 'canones', label: 'Cânones' },
]

export function AbaConcilio() {
  const f = fichaConcilio
  const conv = convocacao

  return (
    <>
      <nav className={styles.subnav} aria-label="Navegação de seções">
        {NAV_ITENS.map(item => (
          <a key={item.id} href={`#${item.id}`} className={styles.pill}>{item.label}</a>
        ))}
      </nav>

      {/* =============================================
          FICHA RÁPIDA DE DADOS
         ============================================= */}
      <section className={styles.fichaRapida}>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Convocado por</div>
          <div className={styles.fichaValor}>
            {f.convocador.nome}
            <br />
            <small>{f.convocador.titulo} ({f.convocador.reinado})</small>
          </div>
        </div>

        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Participantes</div>
          <div className={styles.fichaValor}>
            {f.participantes.total}
            <br />
            <small>{f.participantes.origem}</small>
          </div>
        </div>

        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Local e Império</div>
          <div className={styles.fichaValor}>
            {f.local.cidade}
            <br />
            <small>{f.local.imperio}</small>
          </div>
        </div>

        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Duração</div>
          <div className={styles.fichaValor}>{f.data.duracao}</div>
        </div>

        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Tipo / Legitimidade</div>
          <div className={styles.fichaValor}>
            {f.tipo}
            <br />
            <small>Reconhecido por Roma em Calcedônia (451)</small>
          </div>
        </div>
      </section>

      {/* Nota da ausência ocidental (da ficha) */}
      <div className={styles.destaque} style={{ fontSize: "0.9rem", marginTop: "-1rem", marginBottom: "2rem" }}>
        <IconWarning size={18} style={{ color: '#bd3a29', verticalAlign: 'middle', marginRight: 6 }} /> <strong>Nota sobre os Participantes:</strong> {f.participantes.observacao}
      </div>

      {/* =============================================
          VISÃO GERAL & CONTEXTO HISTÓRICO
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <img
            src="/estudos/concilios/icones/pergaminho.webp"
            alt="Pergaminho"
            className={styles.secaoIconeImg}
          />
          Visão Geral e Contexto
        </h2>
        <p className={styles.secaoTexto}>{f.contextoResumido}</p>
        <p className={styles.secaoTexto}>
          Após 56 anos da promulgação do Concílio de Niceia (325), as facções arianas
          continuavam a desestabilizar a Igreja no Oriente. Com o decreto imperial{" "}
          <em>Cunctos Populos</em> (380) do imperador Teodósio I, a fé trinitária nicena
          foi estabelecida como a norma oficial. Constantinopla I teve como objetivo
          selar a vitória da ortodoxia, definir dogmaticamente a divindade do Espírito
          Santo e consolidar a unidade eclesial.
        </p>

        <h3 style={{ color: "#8b6508", fontSize: "1.1rem", marginTop: "1.5rem", marginBottom: "0.5rem" }}>
          <IconScales size={20} style={{ color: '#8b6508' }} /> Resultados Principais do Concílio:
        </h3>
        <ul className={styles.resultadosLista}>
          {f.resultadosPrincipais.map((res, idx) => (
            <li key={idx}>{res}</li>
          ))}
        </ul>
      </section>

      {/* =============================================
          CONVOCAÇÃO E MOTIVAÇÕES
         ============================================= */}
      <section id="abertura" className={`${styles.secao} secao-anchor`}>
        <h2 className={styles.secaoTitulo}>
          <img
            src="/estudos/concilios/icones/carta.webp"
            alt="Convocação e Motivações"
            className={styles.secaoIconeImg}
          />
          Convocação e Motivações
        </h2>

        <div className={styles.destaque} style={{ textAlign: "left", marginBottom: "1.5rem" }}>
          <strong style={{ color: "#8b6508" }}>{conv.contextoImediato.titulo}</strong>
          <p style={{ marginTop: "0.5rem" }}>{conv.contextoImediato.descricao}</p>
        </div>

        <p className={styles.secaoTexto}>
          Convocado pelo imperador Teodósio I, o concílio foi reunido
          na <strong>{conv.logistica.localEscolhido.edificio}</strong> ({conv.logistica.localEscolhido.cidade}), na capital imperial.{" "}
          {conv.logistica.localEscolhido.razao}
        </p>

        <div className={styles.heresiasGrid} style={{ margin: "1rem 0" }}>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome} style={{ fontSize: "0.95rem" }}>Convocação</div>
            <div className={styles.heresiaErro}>{conv.logistica.dataConvocacao}</div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome} style={{ fontSize: "0.95rem" }}>Abertura</div>
            <div className={styles.heresiaErro}>{conv.logistica.dataAbertura}</div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome} style={{ fontSize: "0.95rem" }}>Encerramento</div>
            <div className={styles.heresiaErro}>{conv.logistica.dataEncerramento}</div>
          </div>
        </div>

        <p className={styles.secaoTexto}>
          <small style={{ color: "#8b6508" }}>
            Fonte da tradição: {conv.logistica.localEscolhido.fonteTradicao}
          </small>
        </p>

        <p className={styles.secaoTexto} style={{ marginTop: "1.5rem" }}>
          A convocação foi impulsionada por <strong>seis</strong> grandes motivações:
        </p>

        <div className={styles.heresiasGrid}>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>1. {conv.motivacoes.teologica.titulo}</div>
            <div className={styles.heresiaErro}>{conv.motivacoes.teologica.descricao}</div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>2. {conv.motivacoes.politica.titulo}</div>
            <div className={styles.heresiaErro}>{conv.motivacoes.politica.descricao}</div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>3. {conv.motivacoes.jurisdicional.titulo}</div>
            <div className={styles.heresiaErro}>{conv.motivacoes.jurisdicional.descricao}</div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>4. {conv.motivacoes.capital.titulo}</div>
            <div className={styles.heresiaErro}>{conv.motivacoes.capital.descricao}</div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>5. {conv.motivacoes.eclesial.titulo}</div>
            <div className={styles.heresiaErro}>{conv.motivacoes.eclesial.descricao}</div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>6. {conv.motivacoes.ocidente.titulo}</div>
            <div className={styles.heresiaErro}>{conv.motivacoes.ocidente.descricao}</div>
          </div>
        </div>

        <div className={styles.destaque} style={{ textAlign: "left", marginTop: "1.5rem" }}>
          <strong style={{ color: "#8b6508" }}>{conv.tresFrentes.titulo}</strong>
          <p style={{ marginTop: "0.5rem" }}>{conv.tresFrentes.descricao}</p>
        </div>
      </section>

      {/* =============================================
          DESTAQUE DO CREDO
         ============================================= */}
      <div className={styles.destaque}>
        &ldquo;Creio no Espírito Santo, Senhor que dá a vida, e procede do Pai;
        que com o Pai e o Filho é adorado e glorificado; que falou
        pelos profetas.&rdquo;
        <br />
        <small style={{ fontStyle: "normal", display: "block", marginTop: "1rem", color: "#8b6508" }}>
          — Texto original do Credo Niceno-Constantinopolitano (381 d.C.). <br/>
          <em>Nota: A Igreja Católica ocidental professa posteriormente a inserção do &ldquo;Filioque&rdquo; (e do Filho), ratificando que o Espírito procede do Pai e do Filho, como explicitação orgânica e ortodoxa da mesma fé.</em>
        </small>
      </div>

      {/* =============================================
          FASES, SESSÕES E PRESIDÊNCIA DO CONCÍLIO
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}><IconConcilio size={22} style={{ color: '#8b6508' }} /></span> Fases, Sessões e Presidência do Concílio
        </h2>
        
        <p className={styles.secaoTexto}>{resumoSessoes}</p>

        <figure className={styles.secaoIlustracao}>
          <img
            src="/estudos/concilios/constantinopla-1/assembleia-150.webp"
            alt="Ícone da assembleia dos 150 Padres"
            className={styles.secaoIlustracaoImg}
            loading="lazy"
          />
          <figcaption className={styles.secaoIlustracaoLegenda}>
            Ícone tradicional bizantino retratando os 150 Padres Conciliares reunidos em Constantinopla, com o imperador Teodósio I presidindo simbolicamente os trabalhos.
          </figcaption>
        </figure>

        <h3 style={{ color: "#8b6508", fontSize: "1.1rem", marginTop: "1.5rem", marginBottom: "0.75rem" }}>
          <IconPin size={18} style={{ color: '#8b6508' }} /> Sucessão da Presidência
        </h3>
        <div className={styles.gridPresidentes}>
          {f.presidentes.map((p, i) => (
            <div key={i} className={styles.cardPresidente}>
              <span className={styles.presidenteBadge}>{p.periodo}</span>
              <h4 className={styles.presidenteNome}>{p.nome}</h4>
              <p className={styles.presidenteObs}>{p.obs}</p>
            </div>
          ))}
        </div>

        <h3 style={{ color: "#8b6508", fontSize: "1.1rem", marginBottom: "0.75rem" }}>
          <IconHourglass size={18} style={{ color: '#8b6508' }} /> Linha do Tempo dos Trabalhos Conciliares (Maio – Julho 381)
        </h3>
        <div className={styles.presidentesLista}>
          {linhaDoTempoSessoes.map((ev, i) => (
            <div key={i} className={styles.timelineCard}>
              <div className={styles.timelineHeader}>
                <span className={styles.timelineAno}>{ev.data}</span>
                <h4 className={styles.timelineTitulo}>{ev.evento}</h4>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "1rem" }}>
          <IconConcilio size={18} style={{ color: '#8b6508' }} /> Detalhamento das 3 Fases e seus Eventos
        </h3>

        {sessoes.map((s, sIdx) => (
          <div 
            key={sIdx} 
            style={{ 
              marginBottom: "2.5rem", 
              borderTop: sIdx > 0 ? "1px solid #e0d7c6" : "none", 
              paddingTop: sIdx > 0 ? "1.5rem" : "0" 
            }}
          >
            <h4 style={{ color: "#8b6508", fontSize: "1.15rem", marginBottom: "0.3rem" }}>
              {s.fase}: Presidência de {s.presidente} ({s.periodo})
            </h4>
            <p className={styles.secaoTexto} style={{ fontStyle: "italic", fontSize: "0.95rem", marginBottom: "1rem" }}>
              <strong>Clima da Fase:</strong> {s.clima}
            </p>

            <div className={styles.heresiasGrid} style={{ marginBottom: "1rem" }}>
              {s.eventos.map((ev, eIdx) => (
                <div key={eIdx} className={styles.heresiaCard}>
                  <div className={styles.heresiaNome}>{ev.titulo}</div>
                  <div className={styles.heresiaErro} style={{ margin: "0.5rem 0", color: "#3e3328" }}>
                    {ev.descricao}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#8b6508", marginTop: "0.5rem", paddingTop: "0.5rem", borderTop: "1px dashed #e2d9cb" }}>
                    <IconScales size={16} style={{ color: '#8b6508' }} /> <strong>Desdobramento:</strong> {ev.desdobramento}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.destaque} style={{ textAlign: "left", fontSize: "0.9rem" }}>
              <strong>Resultado da Fase:</strong> {s.resultado}
            </div>
          </div>
        ))}
      </section>

      {/* =============================================
          DEBATES DO CONCÍLIO — ARENA INTERATIVA
         ============================================= */}
      <section id="debates" className={`${styles.secao} secao-anchor`}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}><IconDebates size={22} style={{ color: '#8b6508' }} /></span> Os Debates do Concílio
        </h2>
        <p className={styles.secaoTexto}>
          Reconstituição dos principais confrontos teológicos e disciplinares de 381,
          com base nas fontes primárias — Gregório Nazianzeno, historiadores
          eclesiásticos e os Cânones do concílio.
        </p>

        <figure className={styles.secaoIlustracao}>
          <img
            src="/estudos/concilios/constantinopla-1/leitura-debates.webp"
            alt="Leitura dos debates conciliares"
            className={styles.secaoIlustracaoImg}
            loading="lazy"
          />
          <figcaption className={styles.secaoIlustracaoLegenda}>
            Debate e discussão teológica entre os Padres Conciliares: do púlpito ao diálogo aberto sobre a definição do Credo Niceno-Constantinopolitano.
          </figcaption>
        </figure>

        <DebateArena debates={debatesArena} />
      </section>

      {/* =============================================
          ANTECEDENTES HISTÓRICOS (325 - 381)
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}><IconHourglass size={22} style={{ color: '#8b6508' }} /></span> Antecedentes Históricos: Os 56 Anos Entre Niceia e Constantinopla (325–381)
        </h2>
        
        <p className={styles.secaoTexto}>
          {resumoAntecedentes}
        </p>

        {antecedentes.map((periodo, pIdx) => (
          <div key={pIdx} style={{ marginBottom: "2.5rem" }}>
            <h3 style={{ 
              color: "#8b6508", 
              fontSize: "1.25rem", 
              marginBottom: "0.5rem",
              borderBottom: "1px solid #e0d7c6",
              paddingBottom: "0.3rem"
            }}>
              Período {pIdx + 1} ({periodo.periodo}): {periodo.titulo}
            </h3>
            
            <p className={styles.secaoTexto} style={{ fontStyle: "italic", marginBottom: "1rem" }}>
              {periodo.descricaoGeral}
            </p>

            <div className={styles.presidentesLista}>
              {periodo.eventos.map((ev, eIdx) => (
                <div key={eIdx} className={styles.timelineCard}>
                  <div className={styles.timelineHeader}>
                    <span className={styles.timelineAno}>{ev.ano}</span>
                    <h4 className={styles.timelineTitulo}>{ev.titulo}</h4>
                  </div>
                  <p className={styles.timelineTexto}>{ev.descricao}</p>
                  <p className={styles.timelineImportancia}>
                    <strong>Importância histórica:</strong> {ev.importancia}
                  </p>
                  {ev.fontes && ev.fontes.length > 0 && (
                    <small className={styles.timelineFontes}>
                      <IconBooks size={14} style={{ color: '#8b6508' }} /> <strong>Fontes:</strong> {ev.fontes.join(" · ")}
                    </small>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* =============================================
          CONTEXTO POLÍTICO E ÉDITOS IMPERIAIS
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}><IconConcilio size={22} style={{ color: '#8b6508' }} /></span> Contexto Político: Teodósio I e o Império em 381
        </h2>

        <figure className={styles.secaoIlustracao}>
          <img
            src="/estudos/concilios/constantinopla-1/teodosio-imperio.webp"
            alt="Teodósio I e a Igreja"
            className={styles.secaoIlustracaoImg}
            loading="lazy"
          />
          <figcaption className={styles.secaoIlustracaoLegenda}>
            A sinfonia entre a cruz e a espada: Teodósio I utilizou o poder imperial para impor o cristianismo niceno como religião de Estado após anos de instabilidade militar e religiosa.
          </figcaption>
        </figure>

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            {contextoPolitico.imperio.titulo}
          </h3>
          <p className={styles.secaoTexto}>{contextoPolitico.imperio.descricao}</p>
          
          <div className={styles.heresiasGrid} style={{ marginTop: "1rem" }}>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>Situação Militar</div>
              <div className={styles.heresiaErro}>{contextoPolitico.imperio.situacao.militar}</div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>Situação Econômica</div>
              <div className={styles.heresiaErro}>{contextoPolitico.imperio.situacao.economica}</div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>Situação Religiosa</div>
              <div className={styles.heresiaErro}>{contextoPolitico.imperio.situacao.religiosa}</div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            {contextoPolitico.capital.titulo}
          </h3>
          <p className={styles.secaoTexto}>{contextoPolitico.capital.descricao}</p>
          <div className={styles.destaque} style={{ textAlign: "left", borderLeftColor: "#bd3a29" }}>
            <strong>Relevância para o Concílio:</strong> {contextoPolitico.capital.relevanciaConciliar}
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "1rem" }}>
            <IconScroll size={18} style={{ color: '#8b6508' }} /> Os Grandes Éditos Imperiais
          </h3>
          <div className={styles.heresiasGrid}>
            {contextoPolitico.editos.map((ed, i) => (
              <div key={i} className={styles.heresiaCard} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div className={styles.heresiaNome} style={{ fontSize: "1.1rem" }}>
                    {ed.nome}
                  </div>
                  <div className={styles.heresiaLider} style={{ marginBottom: "0.5rem" }}>
                    {ed.data} | Local: {ed.local}
                  </div>
                  
                  {ed.texto && (
                    <div style={{ fontStyle: "italic", fontSize: "0.85rem", background: "#f5ece1", padding: "0.5rem", borderRadius: "4px", marginBottom: "0.5rem", color: "#665" }}>
                      <strong>Original em Latim:</strong><br />
                      &ldquo;{ed.texto}&rdquo;
                    </div>
                  )}

                  <div className={styles.heresiaErro} style={{ marginTop: "0.5rem", fontSize: "0.95rem" }}>
                    <strong>Tradução:</strong> &ldquo;{ed.traducao}&rdquo;
                  </div>
                </div>

                <div style={{ marginTop: "1rem", paddingTop: "0.5rem", borderTop: "1px solid #e2d9cb" }}>
                  <small style={{ color: "#8b6508", display: "block" }}>
                    <IconScales size={14} style={{ color: '#8b6508' }} /> <strong>Importância:</strong> {ed.importancia}
                  </small>
                  <small style={{ color: "#888", display: "block", marginTop: "0.2rem" }}>
                    Fonte jurídica: {ed.fonte}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            {contextoPolitico.igrejaEstado.titulo}
          </h3>
          <p className={styles.secaoTexto}>{contextoPolitico.igrejaEstado.descricao}</p>

          <div className={styles.heresiasGrid} style={{ margin: "1rem 0" }}>
            {contextoPolitico.igrejaEstado.conceitos.map((c, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome} style={{ color: "#8b6508" }}>
                  {c.termo}
                </div>
                <div className={styles.heresiaErro}>{c.significado}</div>
              </div>
            ))}
          </div>

          <p className={styles.secaoTexto} style={{ fontStyle: "italic", marginTop: "1rem" }}>
            <strong>Avaliação Histórica:</strong> {contextoPolitico.igrejaEstado.avaliacao}
          </p>
        </div>

        <div style={{ borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "1rem" }}>
            <IconHourglass size={18} style={{ color: '#8b6508' }} /> Linha do Tempo Política (378–395)
          </h3>
          <div className={styles.presidentesLista}>
            {cronologiaPolitica.map((cp, i) => (
              <div key={i} className={styles.timelineCard}>
                <div className={styles.timelineHeader}>
                  <span className={styles.timelineAno}>{cp.ano}</span>
                  <h4 className={styles.timelineTitulo}>{cp.evento}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          PARTICIPANTES, BISPOS E AUSÊNCIAS NOTÁVEIS
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}><IconPin size={22} style={{ color: '#8b6508' }} /></span> Episcopado Presente e Ausências Notáveis
        </h2>

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            <IconGlobe size={18} style={{ color: '#8b6508' }} /> Composição da Assembleia ({totalParticipantes.estimativa})
          </h3>
          <p className={styles.secaoTexto}>{totalParticipantes.certeza}</p>
          <div className={styles.destaque} style={{ textAlign: "left", marginTop: "0.5rem" }}>
            <strong>Perfil Geográfico:</strong> {totalParticipantes.composicao}
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "1rem" }}>
            <IconConcilio size={18} style={{ color: '#8b6508' }} /> Os Bispos do Concílio por Região / Diocese
          </h3>

          {participantes.map((grupo, gIdx) => (
            <div key={gIdx} style={{ marginBottom: "2rem" }}>
              <h4 style={{ color: "#8b6508", fontSize: "1.1rem", marginBottom: "0.3rem" }}>
                {grupo.titulo}
              </h4>
              <p className={styles.secaoTexto} style={{ fontSize: "0.95rem", fontStyle: "italic", marginBottom: "0.75rem" }}>
                {grupo.descricao}
              </p>

              <div className={styles.heresiasGrid}>
                {grupo.bispos.map((b, bIdx) => (
                  <div key={bIdx} className={styles.heresiaCard}>
                    <div className={styles.heresiaNome}>{b.nome}</div>
                    <div className={styles.heresiaLider}>
                      📍 {b.sede} ({b.provincia}) · <strong>{b.papel}</strong>
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "#8b6508", marginBottom: "0.3rem" }}>
                      Partido: {b.partido}
                    </div>
                    {b.observacoes && (
                      <div className={styles.heresiaErro} style={{ fontSize: "0.9rem" }}>
                        {b.observacoes}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            <IconStop size={18} style={{ color: '#8b6508' }} /> {macedonianos.titulo}
          </h3>
          <p className={styles.secaoTexto}>{macedonianos.descricao}</p>
          
          <div className={styles.destaque} style={{ textAlign: "left", margin: "1rem 0" }}>
            <p><strong>Crença Teológica:</strong> {macedonianos.crenca}</p>
            <p style={{ marginTop: "0.5rem" }}>
              <strong>Líderes Principais:</strong> {macedonianos.lideres.join(", ")}
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              <strong>Desfecho no Concílio:</strong> {macedonianos.desfecho}
            </p>
            <p style={{ marginTop: "0.5rem", fontStyle: "italic", color: "#bd3a29" }}>
              <IconStop size={14} style={{ color: '#bd3a29' }} /> <strong>Ironia Histórica:</strong> {macedonianos.ironia}
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            🚫 {ausencias.titulo}
          </h3>
          <p className={styles.secaoTexto}>{ausencias.descricao}</p>

          <div className={styles.heresiasGrid} style={{ marginTop: "1rem" }}>
            {ausencias.ausentes.map((aus, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{aus.nome} ({aus.sede})</div>
                <div className={styles.heresiaErro} style={{ margin: "0.4rem 0" }}>
                  <strong>Razão da Ausência:</strong> {aus.razao}
                </div>
                <div style={{ fontSize: "0.85rem", color: "#8b6508" }}>
                  <IconScales size={14} style={{ color: '#8b6508' }} /> <strong>Impacto Teológico/Histórico:</strong> {aus.impacto}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          PERSONAGENS-CHAVE E PROSOPOGRAFIA COMPLETA
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}><IconConcilio size={22} style={{ color: '#8b6508' }} /></span> Os Protagonistas e Figuras-Chave (Prosopografia)
        </h2>

        <p className={styles.secaoTexto}>
          Conheça em detalhes os imperadores, bispos, teólogos, papas e heresiarcas
          que moldaram os acontecimentos e os debates de Constantinopla I:
        </p>

        <div className={styles.personagensLista}>
          {personagens.map((p, i) => (
            <div key={i} className={styles.personagemCard}>
              <header className={styles.personagemHeader}>
                <div className={styles.personagemMainInfo}>
                  <h3 className={styles.personagemNome}>
                    {p.nome}
                    {p.nomeGrego && <span className={styles.personagemGrego}> ({p.nomeGrego})</span>}
                  </h3>
                  <span className={styles.personagemTitulo}>{p.titulo}</span>
                </div>
                <div className={styles.personagemMeta}>
                  <span>📅 {p.datas}</span>
                  <span>📍 {p.origem}</span>
                </div>
              </header>

              <div className={styles.personagemBiografia}>
                <p><strong>Biografia:</strong> {p.biografia}</p>
              </div>

              <div className={styles.personagemGridInterno}>
                <div className={styles.personagemBlocoPapel}>
                  <h4 className={styles.personagemBlocoTitulo}>🏛️ Papel no Concílio</h4>
                  <p>{p.papelNoConcilio}</p>
                </div>

                <div className={styles.personagemBlocoLegado}>
                  <h4 className={styles.personagemBlocoTitulo}>📜 Legado</h4>
                  <p>{p.legado}</p>
                </div>

                {p.obras && p.obras.length > 0 && (
                  <div className={styles.personagemBlocoObras}>
                    <h4 className={styles.personagemBlocoTitulo}>📚 Principais Obras</h4>
                    <ul>
                      {p.obras.map((obra, oIdx) => (
                        <li key={oIdx}>{obra}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {p.curiosidade && (
                  <div className={styles.personagemBlocoCuriosidade}>
                    <h4 className={styles.personagemBlocoTitulo}>💡 Curiosidade Histórica</h4>
                    <p>{p.curiosidade}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =============================================
          CONTROVÉRSIAS E TENSÕES INTERNAS DO CONCÍLIO
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}><IconStop size={22} style={{ color: '#8b6508' }} /></span> Controvérsias e Tensões do Concílio
        </h2>

        <p className={styles.secaoTexto}>
          {resumoControversias}
        </p>

        <div className={styles.controversiasLista}>
          {controversias.map((c) => (
            <article key={c.id} className={styles.controversiaCard}>
              {/* Cabeçalho */}
              <header className={styles.controversiaHeader}>
                <span className={styles.controversiaNumero}>Controvérsia {c.id}</span>
                <h3 className={styles.controversiaTitulo}>{c.titulo}</h3>
              </header>

              {/* Caixa de Resumo Rápido */}
              <div className={styles.controversiaResumo}>
                <strong>Resumo da Crise:</strong> {c.resumo}
              </div>

              {/* Texto de Detalhes (Largura Total) */}
              <div className={styles.controversiaDetalhes}>
                <p>{c.detalhes}</p>
              </div>

              {/* Grid Interno (Partes, Resultado, Consequência) */}
              <div className={styles.controversiaGridInterno}>
                <div className={styles.controversiaBloco}>
                  <h4 className={styles.controversiaBlocoTitulo}>👥 Partes Envolvidas</h4>
                  <ul>
                    {c.partesEnvolvidas.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.controversiaBloco}>
                  <h4 className={styles.controversiaBlocoTitulo}>🎯 Resultado Imediato</h4>
                  <p>{c.resultado}</p>
                </div>

                <div className={styles.controversiaBlocoDestaque}>
                  <h4 className={styles.controversiaBlocoTitulo}>⚡ Consequência de Longo Prazo</h4>
                  <p>{c.consequenciaDeLongoPrazo}</p>
                </div>

                {c.fontes && c.fontes.length > 0 && (
                  <div className={styles.controversiaBloco}>
                    <h4 className={styles.controversiaBlocoTitulo}>📚 Fontes Primárias</h4>
                    <p>{c.fontes.join(" · ")}</p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =============================================
          PARTIDOS TEOLÓGICOS E HERESIAS CONDENADAS
         ============================================= */}
      <section id="apolinarismo" className={`${styles.secao} secao-anchor`}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}><IconDebates size={22} style={{ color: '#8b6508' }} /></span> Partidos Teológicos e Heresias no Século IV
        </h2>

        <p className={styles.secaoTexto}>{resumoPartidos}</p>

        <div className={styles.destaque} style={{ textAlign: "left", margin: "1.5rem 0" }}>
          <strong style={{ color: "#8b6508" }}>🎨 O Espectro Teológico do Século IV:</strong>
          <ul style={{ margin: "0.5rem 0 0 1.2rem", padding: 0, fontSize: "0.95rem", lineHeight: "1.6" }}>
            {espectroTeologico.map((esp, i) => (
              <li key={i}>{esp}</li>
            ))}
          </ul>
        </div>

        <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginTop: "2rem", marginBottom: "1rem" }}>
          📋 Detalhamento das Correntes Doutrinárias
        </h3>

        <div className={styles.correntesGrid}>
          {partidos.map((pt, i) => (
            <div key={i} className={styles.correntesCard}>
              <div className={styles.heresiaNome} style={{ fontSize: "1.15rem" }}>
                {pt.nome}
              </div>
              
              {pt.nomeAlternativo && (
                <div style={{ fontSize: "0.85rem", color: "#665", fontStyle: "italic", marginBottom: "0.3rem" }}>
                  Também conhecidos como: {pt.nomeAlternativo}
                </div>
              )}

              <div className={styles.heresiaLider} style={{ marginBottom: "0.5rem" }}>
                <IconPin size={14} style={{ color: '#8b6508' }} /> <strong>Líder:</strong> {pt.lider} | <IconHourglass size={14} style={{ color: '#8b6508' }} /> {pt.periodo}
              </div>

              <div style={{ fontStyle: "italic", fontSize: "0.85rem", background: "#f5ece1", padding: "0.4rem 0.6rem", borderRadius: "4px", marginBottom: "0.75rem", color: "#665" }}>
                <IconPencil size={14} style={{ color: '#8b6508' }} /> <strong>Termo-chave:</strong> {pt.termoChave}
              </div>

              <p className={styles.secaoTexto} style={{ fontSize: "0.95rem", marginBottom: "0.75rem" }}>
                {pt.descricao}
              </p>

              <div className={styles.heresiaErro} style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}>
                <strong>Posição sobre o Filho:</strong> {pt.posicaoSobreOFilho}
              </div>

              <div className={styles.heresiaErro} style={{ marginBottom: "0.75rem", fontSize: "0.9rem", color: "#bd3a29" }}>
                <strong>Posição sobre o Espírito Santo:</strong> {pt.posicaoSobreOESpirito}
              </div>

              <div style={{ marginBottom: "0.75rem" }}>
                <strong style={{ color: "#8b6508", fontSize: "0.85rem" }}>Argumentos Principais:</strong>
                <ul style={{ margin: "0.3rem 0 0 1.1rem", padding: 0, fontSize: "0.85rem", color: "#444" }}>
                  {pt.argumentosPrincipais.map((arg, aIdx) => (
                    <li key={aIdx}>{arg}</li>
                  ))}
                </ul>
              </div>

              <div style={{ background: "#fdfbf7", borderLeft: "3px solid #8b6508", padding: "0.6rem", borderRadius: "4px", marginBottom: "0.75rem", fontSize: "0.85rem" }}>
                <strong>Refutação Ortodoxa:</strong> {pt.refutacao}
              </div>

              <div style={{ marginTop: "auto", paddingTop: "0.5rem", borderTop: "1px solid #e2d9cb", fontSize: "0.85rem" }}>
                <div>📍 <strong>Base:</strong> {pt.baseGeografica} | 👥 <strong>Força:</strong> {pt.forcaNumerica}</div>
                <div style={{ marginTop: "0.25rem", color: "#8b6508", fontWeight: "600" }}>
                  Status: {pt.statusNoConcilio}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            <IconScales size={18} style={{ color: '#8b6508' }} /> {quemFoiCondenadoPorNome.titulo}
          </h3>
          <p className={styles.secaoTexto}>{quemFoiCondenadoPorNome.observacaoGeral}</p>
          <ul className={styles.resultadosLista} style={{ marginBottom: "1rem" }}>
            {quemFoiCondenadoPorNome.detalhes.map((det, i) => (
              <li key={i}>{det}</li>
            ))}
          </ul>
          <div className={styles.destaque} style={{ textAlign: "left", borderLeftColor: "#bd3a29" }}>
            🚨 <strong>A Única Exceção Nominal:</strong> {quemFoiCondenadoPorNome.unicaExcecao}
          </div>
        </div>

        <div style={{ marginTop: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            📌 {oQueNaoFoiTocado.titulo}
          </h3>
          <p className={styles.secaoTexto}>{oQueNaoFoiTocado.introducao}</p>
          <div className={styles.heresiasGrid} style={{ marginTop: "1rem" }}>
            {oQueNaoFoiTocado.itens.map((item, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{item.topico}</div>
                <div className={styles.heresiaErro}>{item.explicacao}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          OS 4 CÂNONES NA ÍNTEGRA
         ============================================= */}
      <section id="canones" className={`${styles.secao} secao-anchor`}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}><IconScroll size={22} style={{ color: '#8b6508' }} /></span> Os 4 Cânones Disciplinares na Íntegra
        </h2>
        <p className={styles.secaoTexto}>
          O concílio promulgou quatro cânones universalmente aceitos como autênticos de 381. 
          Eles legislam sobre a fé, jurisdição diocesana, hierarquia e a usurpação da sé de Constantinopla.
        </p>

        <div className={styles.presidentesLista}>
          <div className={styles.timelineCard}>
            <div className={styles.timelineHeader}>
              <span className={styles.timelineAno}>CÂNON 1</span>
              <h4 className={styles.timelineTitulo}>Condenação de todas as heresias</h4>
            </div>
            <p className={styles.timelineTexto}>
              A fé dos 318 pais reunidos em Niceia, na Bitínia, não será revogada, mas permanecerá firme. 
              E toda heresia seja anatematizada — particularmente a dos eunomianos (ou anomeus), a dos 
              arianos (ou eudoxianos), a dos semi-arianos (ou pneumatomachianos), a dos sabelianos, 
              a dos marcelianos, a dos fotinianos e a dos apolinaristas.
            </p>
          </div>
          <div className={styles.timelineCard}>
            <div className={styles.timelineHeader}>
              <span className={styles.timelineAno}>CÂNON 2</span>
              <h4 className={styles.timelineTitulo}>Limites jurisdicionais dos bispos</h4>
            </div>
            <p className={styles.timelineTexto}>
              Os bispos não devem passar além de suas dioceses, para igrejas fora de seus limites, 
              nem confundir as igrejas; mas, segundo os cânones, o bispo de Alexandria administre 
              sozinho o Egito; os bispos do Oriente administrem apenas o Oriente (preservados os 
              privilégios da igreja de Antioquia); os bispos da diocese da Ásia administrem apenas a Ásia; 
              os do Ponto, apenas o Ponto; os da Trácia, apenas a Trácia...
            </p>
          </div>
          <div className={styles.timelineCard}>
            <div className={styles.timelineHeader}>
              <span className={styles.timelineAno}>CÂNON 3</span>
              <h4 className={styles.timelineTitulo}>Primazia de Honra de Constantinopla</h4>
            </div>
            <p className={styles.timelineTexto}>
              O bispo de Constantinopla, porém, terá a prerrogativa de honra depois do bispo de Roma, 
              porque Constantinopla é a Nova Roma.
            </p>
          </div>
          <div className={styles.timelineCard}>
            <div className={styles.timelineHeader}>
              <span className={styles.timelineAno}>CÂNON 4</span>
              <h4 className={styles.timelineTitulo}>Condenação de Máximo, o Cínico</h4>
            </div>
            <p className={styles.timelineTexto}>
              Sobre Máximo, o cínico, e a desordem que por causa dele aconteceu em Constantinopla: 
              decreta-se que Máximo nunca foi, nem é, bispo; e que os que foram ordenados por ele 
              não pertencem a nenhuma ordem do clero — pois tudo o que foi feito a respeito dele 
              ou por ele é declarado inválido.
            </p>
          </div>
        </div>

        <div className={styles.destaque} style={{ padding: "1rem", marginTop: "1.5rem" }}>
          <small>
            <strong>Nota sobre os Cânones 5 e 6:</strong> Nas coleções orientais circulam também um Cânon 5 
            (sobre o Tomo dos ocidentais) e um Cânon 6 (sobre acusações contra bispos) atribuídos a este concílio. 
            Contudo, a crítica histórica demonstra que eles pertencem, na verdade, ao <strong>Sínodo de Constantinopla de 382</strong>, 
            tendo sido anexados posteriormente aos de 381. A tradição ocidental conhece apenas os quatro primeiros.
          </small>
        </div>
      </section>

      {/* =============================================
          O CREDO DE 381 NA ÍNTEGRA
         ============================================= */}
      <section id="credo" className={`${styles.secao} secao-anchor`}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}><IconBook size={22} style={{ color: '#8b6508' }} /></span> O Credo de Constantinopla na Íntegra
        </h2>
        <p className={styles.secaoTexto}>
          Abaixo está o texto original traduzido (sem as adições latinas posteriores) que completou a obra de Niceia,
          trazendo uma cristologia expandida e a robusta doutrina do Espírito Santo:
        </p>

        <div className={styles.heresiaCard} style={{ background: "#fdfbf7", borderColor: "#c4a96a", color: "#3e3328", fontSize: "1.1rem", lineHeight: "1.8", padding: "2rem" }}>
          <p>
            Creio em um só Deus, Pai todo-poderoso, criador do céu e da terra, de todas as coisas visíveis e invisíveis.
          </p>
          <p>
            E em um só Senhor Jesus Cristo, Filho Unigênito de Deus, gerado do Pai antes de todos os séculos: Luz de Luz, 
            Deus verdadeiro de Deus verdadeiro, gerado, não criado, consubstancial ao Pai, por quem todas as coisas foram feitas.
          </p>
          <p>
            Que por nós, homens, e para nossa salvação, desceu dos céus, e se encarnou pelo Espírito Santo e da Virgem Maria, e se fez homem. 
            Foi crucificado por nós sob Pôncio Pilatos, padeceu e foi sepultado. Ressuscitou ao terceiro dia segundo as Escrituras. 
            Subiu aos céus e está sentado à direita do Pai. E de novo há de vir com glória para julgar os vivos e os mortos, e o seu reino não terá fim.
          </p>
          <p>
            <strong>E no Espírito Santo, Senhor que dá a vida, que procede do Pai, que com o Pai e o Filho é adorado e glorificado, que falou pelos profetas.</strong>
          </p>
          <p>
            Em uma só Igreja, santa, católica e apostólica. Confesso um só batismo para remissão dos pecados. 
            Espero a ressurreição dos mortos e a vida do mundo que há de vir. Amém.
          </p>
        </div>
      </section>

      {/* =============================================
          O PROBLEMA ACADÊMICO DO CREDO
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}><IconMicroscope size={22} style={{ color: '#8b6508' }} /></span> O Problema do Credo (325 vs 381)
        </h2>
        <p className={styles.secaoTexto}>
          Na história acadêmica da Igreja, o Credo Niceno-Constantinopolitano gera o chamado <strong>&ldquo;Problema do Credo&rdquo;</strong>. 
          Ao contrário do que a maioria pensa, os historiadores apontam que ele <em>não foi escrito do zero</em> na sala do concílio em 381.
        </p>

        <ul className={styles.resultadosLista}>
          <li>
            <strong>O Silêncio Inicial:</strong> Nenhuma fonte primária de 381 (nem os 4 cânones, nem a carta sinodal a Teodósio) 
            menciona um &ldquo;novo credo&rdquo;. A primeira aparição oficial atestada deste texto só ocorre 70 anos depois, 
            no Concílio de Calcedônia (451), onde foi lido como &ldquo;a fé dos 150 padres&rdquo;.
          </li>
          <li>
            <strong>As Omissões de Niceia:</strong> O texto de 381 carece de expressões ferozes do original de 325 
            (como <em>&ldquo;da substância do Pai&rdquo;</em>, <em>&ldquo;Deus de Deus&rdquo;</em>, e a exclusão frontal 
            <em>&ldquo;houve um tempo em que não existia&rdquo;</em>).
          </li>
          <li>
            <strong>Origem Provável:</strong> Ele se aproxima muito do credo batismal de Jerusalém (usado por Cirilo) 
            e do texto do <em>Ancoratus</em> (de Santo Epifânio, escrito por volta de 374 d.C.).
          </li>
          <li>
            <strong>Conclusão Acadêmica Moderna:</strong> Estudos de ponta (como J.N.D. Kelly e M. Kinzig) concluem que 
            o credo de 381 é, na verdade, um credo batismal oriental preexistente, que os padres do concílio <strong>receberam, aprovaram e adotaram</strong> 
            como expressão madura da ortodoxia, expandindo-o para responder às heresias da época.
          </li>
        </ul>
      </section>

      {/* =============================================
          DEFINIÇÕES DOUTRINÁRIAS COMPLETAS
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}><IconCross size={22} style={{ color: '#8b6508' }} /></span> Doutrina Teológica do Concílio
        </h2>

        <div style={{ marginBottom: "2.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            {sinteseCapadocia.titulo}
          </h3>
          <p className={styles.secaoTexto}>{sinteseCapadocia.introducao}</p>
          
          <div className={styles.heresiasGrid} style={{ marginTop: "1rem" }}>
            {sinteseCapadocia.pilares.map((p, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{p.conceito}</div>
                <div className={styles.heresiaErro}>{p.explicacao}</div>
                {p.detalhesIdiomata && (
                  <ul style={{ margin: "0.5rem 0 0 1rem", padding: 0, fontSize: "0.9rem", color: "#665" }}>
                    {p.detalhesIdiomata.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "1rem" }}>
            <IconPencil size={18} style={{ color: '#8b6508' }} /> Glossário de Termos Teológicos (Grego)
          </h3>
          <div className={styles.heresiasGrid}>
            {glossarioGrego.map((g, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>
                  {g.termo} ({g.grego}) — <small>{g.transcricao}</small>
                </div>
                <div className={styles.heresiaErro}>
                  <strong>Definição:</strong> {g.definicao}
                </div>
                <small style={{ color: "#8b6508", display: "block", marginTop: "0.5rem" }}>
                  <IconScales size={14} style={{ color: '#8b6508' }} /> <strong>Impacto:</strong> {g.importanciaTrinitaria}
                </small>
              </div>
            ))}
          </div>
        </div>

        <div id="pneumatologia" className={`${styles.secao} secao-anchor`} style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            {pneumatologia.titulo}
          </h3>
          <p className={styles.secaoTexto}>{pneumatologia.introducao}</p>

          <h4 style={{ color: "#8b6508", marginTop: "1.5rem", marginBottom: "1rem" }}>
            Análise Frase por Frase do Credo:
          </h4>
          <div className={styles.heresiasGrid}>
            {pneumatologia.analiseFrasePorFrase.map((af, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>
                  &ldquo;{af.frase}&rdquo; {af.grego && <small>({af.grego})</small>}
                </div>
                <div className={styles.heresiaErro} style={{ margin: "0.5rem 0" }}>
                  {af.significado}
                </div>
                <div style={{ fontSize: "0.85rem", color: "#bd3a29", marginBottom: "0.3rem" }}>
                  <strong>Contra:</strong> {af.contraQuem}
                </div>
                <div style={{ fontSize: "0.85rem", color: "#8b6508" }}>
                  <IconBook size={14} style={{ color: '#8b6508' }} /> <strong>Bases Bíblicas:</strong> {af.baseBiblica.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            {cristologia.titulo}
          </h3>
          <p className={styles.secaoTexto}>{cristologia.introducao}</p>
          <p className={styles.secaoTexto}><em>{cristologia.reafirmacao}</em></p>

          <h4 style={{ color: "#8b6508", marginTop: "1rem", marginBottom: "0.5rem" }}>
            As 9 Adições Anti-Heréticas ao Credo:
          </h4>
          <div className={styles.heresiasGrid}>
            {cristologia.adicoesSignificativas.map((ad, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>&ldquo;{ad.adicao}&rdquo; ({ad.grego})</div>
                <div className={styles.heresiaLider}>Alvo: {ad.contraQuem}</div>
                <div className={styles.heresiaErro}>{ad.explicacao}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "1rem" }}>
            <IconGlobe size={18} style={{ color: '#8b6508' }} /> Comparação: Credo de Niceia (325) vs Constantinopla (381)
          </h3>
          <div className={styles.heresiasGrid}>
            {comparacaoCredos.map((cc, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{cc.topico}</div>
                <div style={{ fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                  <strong>Niceia 325:</strong> &ldquo;{cc.niceia325}&rdquo;
                </div>
                <div style={{ fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                  <strong>Constantinopla 381:</strong> &ldquo;{cc.constantinopla381}&rdquo;
                </div>
                <div className={styles.heresiaErro} style={{ color: "#8b6508" }}>
                  <strong>Diferença/Evolução:</strong> {cc.diferenca}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "1rem" }}>
            <IconConcilio size={18} style={{ color: '#8b6508' }} /> Eclesiologia, Sacramentos e Escatologia no Credo
          </h3>
          
          <h4 style={{ color: "#8b6508" }}>{eclesiologia.titulo}</h4>
          <p className={styles.secaoTexto}>{eclesiologia.introducao}</p>
          <div className={styles.heresiasGrid} style={{ marginBottom: "1.5rem" }}>
            {eclesiologia.marcas.map((m, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{m.marca} ({m.grego})</div>
                <div className={styles.heresiaErro}>{m.significado}</div>
                <small style={{ color: "#8b6508", display: "block", marginTop: "0.3rem" }}>
                  Contexto em 381: {m.contexto381}
                </small>
              </div>
            ))}
          </div>

          <h4 style={{ color: "#8b6508" }}>{sacramentologia.titulo}</h4>
          <p className={styles.secaoTexto}>
            &ldquo;{sacramentologia.texto}&rdquo; (<em>{sacramentologia.grego}</em>)
          </p>
          <p className={styles.secaoTexto}>{sacramentologia.significado}</p>
          <ul className={styles.resultadosLista} style={{ marginBottom: "1.5rem" }}>
            {sacramentologia.implicacoes.map((imp, i) => (
              <li key={i}>{imp}</li>
            ))}
          </ul>

          <h4 style={{ color: "#8b6508" }}>{escatologia.titulo}</h4>
          <p className={styles.secaoTexto}>
            &ldquo;{escatologia.texto}&rdquo; (<em>{escatologia.grego}</em>)
          </p>
          <div className={styles.heresiasGrid}>
            {escatologia.pontosChave.map((pt, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{pt.ponto}</div>
                <div className={styles.heresiaErro}>{pt.explicacao}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            {limitesDoutrinarios.titulo}
          </h3>
          <p className={styles.secaoTexto}>{limitesDoutrinarios.introducao}</p>
          
          <div className={styles.heresiasGrid} style={{ margin: "1rem 0" }}>
            {limitesDoutrinarios.naoDefinidos.map((ld, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{ld.topico}</div>
                <div className={styles.heresiaErro}>{ld.descricao}</div>
                <div style={{ fontSize: "0.85rem", marginTop: "0.4rem", color: "#665" }}>
                  <strong>Por que não em 381?</strong> {ld.porQueNao}
                </div>
              </div>
            ))}
          </div>

          <h4 style={{ color: "#8b6508", marginTop: "1.5rem", marginBottom: "1rem" }}>
            <IconHourglass size={18} style={{ color: '#8b6508' }} /> {historicoFilioque.titulo}
          </h4>
          <div className={styles.presidentesLista}>
            {historicoFilioque.linhaDoTempo.map((hf, i) => (
              <div key={i} className={styles.timelineCard}>
                <div className={styles.timelineHeader}>
                  <span className={styles.timelineAno}>{hf.ano}</span>
                  <h4 className={styles.timelineTitulo}>{hf.evento}</h4>
                </div>
                {hf.detalhes && <p className={styles.timelineTexto}>{hf.detalhes}</p>}
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            {resumoTeologico.titulo}
          </h3>
          <p className={styles.secaoTexto}><strong>Tese Central:</strong> {resumoTeologico.tese}</p>
          
          <div className={styles.destaque} style={{ margin: "1rem 0", textAlign: "left" }}>
            <strong style={{ color: "#8b6508" }}>Grandes Conquistas:</strong>
            <ul className={styles.resultadosLista} style={{ marginTop: "0.5rem" }}>
              {resumoTeologico.conquistas.map((cq, i) => (
                <li key={i}>{cq}</li>
              ))}
            </ul>
          </div>

          <p className={styles.secaoTexto}>{resumoTeologico.legado}</p>
        </div>
      </section>
    </>
  )
}
