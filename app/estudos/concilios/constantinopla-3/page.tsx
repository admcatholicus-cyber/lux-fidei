'use client'

import Link from "next/link"
import { ConcilioLayout } from '../_shared/ConcilioLayout'
import { fichaConcilio } from "./_data/ficha"
import { antecedentes, resumoAntecedentes } from "./_data/antecedentes"
import { convocacao } from "./_data/convocacao"
import { contextoPolitico, cronologiaPolitica } from "./_data/contexto-politico"
import {
  participantes,
  monotelitas,
  ausencias,
  totalParticipantes,
} from "./_data/participantes"
import { personagens } from "./_data/personagens"
import {
  partidos,
  resumoPartidos,
  espectroTeologico,
  quemFoiCondenadoPorNome,
  oQueNaoFoiTocado,
} from "./_data/partidos"
import {
  sinteseCristologica,
  duasVontades,
  duasOperacoes,
  subordinacao,
  comunicacaoIdiomatum,
  comparacaoConcilios,
  glossarioGrego,
  limitesDoutrinarios,
  resumoTeologico,
} from "./_data/doutrina"
import { horos, analiseFrasePorFrase, comparacaoComCalcedonia } from "./_data/horos"
import { canones, notaTrullo } from "./_data/canones"
import { controversias, resumoControversias } from "./_data/controversias"
import {
  introducaoHonorio,
  contextoHonorio,
  oQueHonorioDisse,
  oQueHonorioNaoDisse,
  aCondenacaoNoConcilio,
  aInterpretacaoDeLeaoII,
  oDebateNoVaticanoI,
  posicoesModernas,
} from "./_data/honorio"
import { mitos, resumoMitos } from "./_data/mitos"
import { legado } from "./_data/legado"
import { recepcao, resumoRecepcao } from "./_data/recepcao"
import {
  fontesPrimariasHistoricas,
  fontesPrimariasMaximo,
  fontesPrimariasOutros,
  fontesPrimariasDocumentos,
  fontesSecundarias,
  fontesModernas,
  recursosOnline,
  resumoFontes,
} from "./_data/fontes"
import { sessoes, resumoSessoes, linhaDoTempoSessoes } from "./_data/sessoes"
import styles from "./constantinopla-3.module.css"

export default function Constantinopla3Page() {
  const f = fichaConcilio
  const conv = convocacao

  return (
    <ConcilioLayout
      numeroEcum="VI Concílio Ecumênico"
      titulo={f.nome}
      subtitulo={`${f.nomeGrego} · ${f.nomeLatim}`}
      data={`${f.data.inicio} — ${f.data.fim}`}
      local={`📍 ${f.local.edificio}, ${f.local.cidade} (atual Istambul, Turquia)`}
      proxLink="/estudos/concilios/niceia-2"
      proxTexto="Niceia II (787)"
    >
      {/* =============================================
          CTA — DOSSIÊ DOCUMENTAL
         ============================================= */}
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
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #3a1f5c 0%, #c5a059 50%, #3a1f5c 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-40%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '420px',
            height: '420px',
            background: 'radial-gradient(circle, rgba(197,160,89,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#f7f1e5',
            border: '1px solid #e4dac8',
            color: '#8c6d31',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '6px 14px',
            borderRadius: '999px',
            marginBottom: '1.35rem',
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#c5a059' }} />
          Acervo crítico · Fontes primárias
        </div>
        <h2
          style={{
            margin: '0 0 0.85rem',
            fontFamily: 'Georgia, Times New Roman, serif',
            fontSize: 'clamp(1.45rem, 2.5vw, 1.85rem)',
            fontWeight: 700,
            color: '#2b1130',
            letterSpacing: '-0.02em',
            lineHeight: 1.25,
          }}
        >
          Entre no Dossiê Documental de Constantinopla III
        </h2>
        <p
          style={{
            margin: '0 auto 1.75rem',
            maxWidth: '640px',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            color: '#4a403c',
          }}
        >
          O Horos em grego e latim com aparato filológico, as{' '}
          <strong style={{ color: '#2b1130' }}>18 Atas das Sessões</strong>, a carta dogmática de
          Agatão, as cartas de Honório a Sérgio, os textos de Máximo o Confessor, e a{' '}
          <strong style={{ color: '#2b1130' }}>edição crítica de Riedinger</strong> — tudo organizado
          para estudo sério.
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '2rem',
          }}
        >
          {[
            { text: 'Horos (Definição)', aba: 'horos' },
            { text: 'Atas das Sessões', aba: 'atas' },
            { text: 'Carta de Agatão', aba: 'agatao' },
            { text: 'Cartas de Honório', aba: 'honorio' },
            { text: 'Ecthesis & Typos', aba: 'editos' },
            { text: 'Máximo Confessor', aba: 'maximo' },
            { text: 'Cânones', aba: 'canones' },
            { text: 'Assinaturas', aba: 'assinaturas' },
          ].map((item) => (
            <Link
              key={item.text}
              href={`/estudos/concilios/constantinopla-3/documentos?aba=${item.aba}`}
              style={{
                background: '#fff',
                border: '1px solid #e4dac8',
                color: '#5b2c83',
                fontSize: '0.78rem',
                fontWeight: 600,
                padding: '6px 12px',
                borderRadius: '999px',
                fontFamily: 'Georgia, serif',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#5b2c83'
                e.currentTarget.style.color = '#fff'
                e.currentTarget.style.borderColor = '#5b2c83'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = '#fff'
                e.currentTarget.style.color = '#5b2c83'
                e.currentTarget.style.borderColor = '#e4dac8'
              }}
            >
              {item.text}
            </Link>
          ))}
        </div>
        <Link
          href="/estudos/concilios/constantinopla-3/documentos"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: 'linear-gradient(135deg, #3a1f5c 0%, #5b2c83 100%)',
            color: '#ffffff',
            textDecoration: 'none',
            padding: '1rem 2.1rem',
            borderRadius: '999px',
            fontFamily: 'Georgia, Times New Roman, serif',
            fontSize: '1.05rem',
            fontWeight: 700,
            boxShadow: '0 8px 24px rgba(91, 44, 131, 0.28)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)'
            e.currentTarget.style.boxShadow = '0 14px 32px rgba(91, 44, 131, 0.35)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(91, 44, 131, 0.28)'
          }}
        >
          <span>Abrir o Dossiê Completo</span>
          <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>→</span>
        </Link>
        <p
          style={{
            margin: '1.1rem 0 0',
            fontSize: '0.82rem',
            color: '#8a7e74',
            fontStyle: 'italic',
          }}
        >
          Leitura crítica · textos originais · aparato histórico
        </p>
      </div>

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
            <small>Reconhecido por Roma em 682 (Leão II)</small>
          </div>
        </div>
      </section>

      <div className={styles.destaque} style={{ fontSize: "0.9rem", marginTop: "-1rem", marginBottom: "2rem" }}>
        ⚠️ <strong>Nota sobre os Participantes:</strong> {f.participantes.observacao}
      </div>

      {/* =============================================
          VISÃO GERAL & CONTEXTO
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
          Após mais de 229 anos da definição de Calcedônia (451), a Igreja ainda enfrentava as
          consequências da divisão cristológica. As fórmulas de compromisso imperial — o{' '}
          <em>monoenergismo</em> (uma operação) e o <em>monotelismo</em> (uma vontade) — foram
          tentativas de reconciliar calcedonianos e não-calcedonianos, mas acabaram gerando uma
          nova heresia que ameaçava a integridade da humanidade de Cristo. Constantinopla III
          teve como missão selar definitivamente a cristologia ortodoxa ao proclamar que Cristo
          possui duas vontades naturais e duas operações naturais, em perfeita harmonia.
        </p>

        <h3 style={{ color: "#8b6508", fontSize: "1.1rem", marginTop: "1.5rem", marginBottom: "0.5rem" }}>
          🎯 Resultados Principais do Concílio:
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
      <section className={styles.secao}>
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
          Convocado pelo imperador Constantino IV Pogonato, o concílio foi reunido
          na <strong>{conv.logistica.localEscolhido.edificio}</strong> ({conv.logistica.localEscolhido.cidade}).{" "}
          {conv.logistica.localEscolhido.razao}
        </p>

        <div className={styles.heresiasGrid} style={{ margin: "1rem 0" }}>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome} style={{ fontSize: "0.95rem" }}>📅 Convocação</div>
            <div className={styles.heresiaErro}>{conv.logistica.dataConvocacao}</div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome} style={{ fontSize: "0.95rem" }}>🔔 Abertura</div>
            <div className={styles.heresiaErro}>{conv.logistica.dataAbertura}</div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome} style={{ fontSize: "0.95rem" }}>📜 Encerramento</div>
            <div className={styles.heresiaErro}>{conv.logistica.dataEncerramento}</div>
          </div>
        </div>

        <p className={styles.secaoTexto}>
          <small style={{ color: "#8b6508" }}>
            Fonte da tradição: {conv.logistica.localEscolhido.fonteTradicao}
          </small>
        </p>

        <p className={styles.secaoTexto} style={{ marginTop: "1.5rem" }}>
          A convocação foi impulsionada por <strong>sete</strong> grandes motivações:
        </p>

        <div className={styles.heresiasGrid}>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>1. {conv.motivacoes.teologica.titulo}</div>
            <div className={styles.heresiaErro}>{conv.motivacoes.teologica.descricao}</div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>2. {conv.motivacoes.politicaInterna.titulo}</div>
            <div className={styles.heresiaErro}>{conv.motivacoes.politicaInterna.descricao}</div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>3. {conv.motivacoes.politicaExterna.titulo}</div>
            <div className={styles.heresiaErro}>{conv.motivacoes.politicaExterna.descricao}</div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>4. {conv.motivacoes.eclesial.titulo}</div>
            <div className={styles.heresiaErro}>{conv.motivacoes.eclesial.descricao}</div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>5. {conv.motivacoes.jurisdicional.titulo}</div>
            <div className={styles.heresiaErro}>{conv.motivacoes.jurisdicional.descricao}</div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>6. {conv.motivacoes.dinastica.titulo}</div>
            <div className={styles.heresiaErro}>{conv.motivacoes.dinastica.descricao}</div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>7. {conv.motivacoes.memorial.titulo}</div>
            <div className={styles.heresiaErro}>{conv.motivacoes.memorial.descricao}</div>
          </div>
        </div>

        <div className={styles.destaque} style={{ textAlign: "left", marginTop: "1.5rem" }}>
          <strong style={{ color: "#8b6508" }}>{conv.tresFrentes.titulo}</strong>
          <p style={{ marginTop: "0.5rem" }}>{conv.tresFrentes.descricao}</p>
        </div>
      </section>

      {/* =============================================
          DESTAQUE DO HOROS
         ============================================= */}
      <div className={styles.destaque}>
        &ldquo;E proclamamos igualmente que nEle há duas vontades naturais e duas operações naturais,
        sem divisão, sem mudança, sem separação, sem confusão; e as duas vontades não são contrárias
        uma à outra — longe disso —, mas a vontade humana segue a vontade divina, sem resistência
        e sem relutância, antes submetendo-se a ela.&rdquo;
        <br />
        <small style={{ fontStyle: "normal", display: "block", marginTop: "1rem", color: "#8b6508" }}>
          — Horos do VI Concílio Ecumênico, Constantinopla III (681 d.C.), Sessão XVIII.
        </small>
      </div>

      {/* =============================================
          FASES, SESSÕES E PRESIDÊNCIA
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>👑</span> Fases, Sessões e Presidência do Concílio
        </h2>

        <p className={styles.secaoTexto}>{resumoSessoes}</p>

        <h3 style={{ color: "#8b6508", fontSize: "1.1rem", marginTop: "1.5rem", marginBottom: "0.75rem" }}>
          👤 Sucessão da Presidência
        </h3>
        <div className={styles.presidentesLista} style={{ marginBottom: "2rem" }}>
          {f.presidentes.map((p, i) => (
            <div key={i} className={styles.presidenteItem}>
              <span className={styles.presidenteFase}>{p.periodo}</span>
              <div className={styles.presidenteInfo}>
                <h4>{p.nome}</h4>
                <p>{p.obs}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ color: "#8b6508", fontSize: "1.1rem", marginBottom: "0.75rem" }}>
          ⏳ Linha do Tempo dos Trabalhos Conciliares (Nov. 680 – Set. 681)
        </h3>
        <div className={styles.presidentesLista} style={{ marginBottom: "2.5rem" }}>
          {linhaDoTempoSessoes.map((ev, i) => (
            <div key={i} className={styles.presidenteItem}>
              <span className={styles.presidenteFase}>{ev.data}</span>
              <div className={styles.presidenteInfo}>
                <h4>{ev.evento}</h4>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "1rem" }}>
          🏛️ Detalhamento das 18 Sessões
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
              Sessão {s.sessao} ({s.data}): {s.titulo}
            </h4>
            <p className={styles.secaoTexto} style={{ fontStyle: "italic", fontSize: "0.95rem", marginBottom: "1rem" }}>
              <strong>Clima:</strong> {s.clima}
            </p>

            <div className={styles.heresiasGrid} style={{ marginBottom: "1rem" }}>
              {s.eventos.map((ev, eIdx) => (
                <div key={eIdx} className={styles.heresiaCard}>
                  <div className={styles.heresiaNome}>{ev.titulo}</div>
                  <div className={styles.heresiaErro} style={{ margin: "0.5rem 0", color: "#3e3328" }}>
                    {ev.descricao}
                  </div>
                  {ev.desdobramento && (
                    <div style={{ fontSize: "0.85rem", color: "#8b6508", marginTop: "0.5rem", paddingTop: "0.5rem", borderTop: "1px dashed #e2d9cb" }}>
                      🎯 <strong>Desdobramento:</strong> {ev.desdobramento}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className={styles.destaque} style={{ textAlign: "left", fontSize: "0.9rem" }}>
              <strong>Resultado:</strong> {s.resultado}
            </div>
          </div>
        ))}
      </section>

      {/* =============================================
          ANTECEDENTES HISTÓRICOS
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>⏳</span> Antecedentes Históricos: Os 229 Anos Entre Calcedônia e Constantinopla III (451–680)
        </h2>

        <p className={styles.secaoTexto}>{resumoAntecedentes}</p>

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
                <div key={eIdx} className={styles.presidenteItem}>
                  <span className={styles.presidenteFase}>{ev.ano}</span>
                  <div className={styles.presidenteInfo}>
                    <h4>{ev.titulo}</h4>
                    <p>{ev.descricao}</p>
                    <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "#6b5839" }}>
                      <strong>Importância histórica:</strong> {ev.importancia}
                    </p>
                    {ev.fontes && ev.fontes.length > 0 && (
                      <small style={{ color: "#8b6508", display: "block", marginTop: "0.3rem" }}>
                        📚 <strong>Fontes:</strong> {ev.fontes.join(" · ")}
                      </small>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* =============================================
          CONTEXTO POLÍTICO
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>🏛️</span> Contexto Político: O Império Bizantino em 680
        </h2>

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            {contextoPolitico.imperio.titulo}
          </h3>
          <p className={styles.secaoTexto}>{contextoPolitico.imperio.descricao}</p>

          <div className={styles.heresiasGrid} style={{ marginTop: "1rem" }}>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>⚔️ Situação Militar</div>
              <div className={styles.heresiaErro}>{contextoPolitico.imperio.situacao.militar}</div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>💰 Situação Econômica</div>
              <div className={styles.heresiaErro}>{contextoPolitico.imperio.situacao.economica}</div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>⛪ Situação Religiosa</div>
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
            📜 Os Grandes Documentos Imperiais Pré-Conciliares
          </h3>
          <div className={styles.heresiasGrid}>
            {contextoPolitico.editos.map((ed, i) => (
              <div key={i} className={styles.heresiaCard} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div className={styles.heresiaNome} style={{ fontSize: "1.1rem" }}>
                    {ed.nome}
                  </div>
                  <div className={styles.heresiaLider} style={{ marginBottom: "0.5rem" }}>
                    📅 {ed.data} | 👤 {ed.autor}
                  </div>
                  {ed.textoOriginal && (
                    <div style={{ fontStyle: "italic", fontSize: "0.85rem", background: "#f5ece1", padding: "0.5rem", borderRadius: "4px", marginBottom: "0.5rem", color: "#665" }}>
                      <strong>Original:</strong><br />
                      &ldquo;{ed.textoOriginal}&rdquo;
                    </div>
                  )}
                  <div className={styles.heresiaErro} style={{ marginTop: "0.5rem", fontSize: "0.95rem" }}>
                    <strong>Tradução/Resumo:</strong> &ldquo;{ed.traducao}&rdquo;
                  </div>
                </div>
                <div style={{ marginTop: "1rem", paddingTop: "0.5rem", borderTop: "1px solid #e2d9cb" }}>
                  <small style={{ color: "#8b6508", display: "block" }}>
                    🎯 <strong>Importância:</strong> {ed.importancia}
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
            ⏳ Linha do Tempo Política (630–692)
          </h3>
          <div className={styles.presidentesLista}>
            {cronologiaPolitica.map((cp, i) => (
              <div key={i} className={styles.presidenteItem}>
                <span className={styles.presidenteFase}>{cp.ano}</span>
                <div className={styles.presidenteInfo}>
                  <h4 style={{ margin: 0, fontWeight: "500" }}>{cp.evento}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          PARTICIPANTES E AUSÊNCIAS
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>👤</span> Episcopado Presente e Ausências Notáveis
        </h2>

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            📊 Composição da Assembleia ({totalParticipantes.estimativa})
          </h3>
          <p className={styles.secaoTexto}>{totalParticipantes.certeza}</p>
          <div className={styles.destaque} style={{ textAlign: "left", marginTop: "0.5rem" }}>
            <strong>Perfil Geográfico:</strong> {totalParticipantes.composicao}
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "1rem" }}>
            ⛪ Os Bispos do Concílio por Grupo
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
                      📍 {b.sede} · <strong>{b.papel}</strong>
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
            ⚡ {monotelitas.titulo}
          </h3>
          <p className={styles.secaoTexto}>{monotelitas.descricao}</p>
          <div className={styles.destaque} style={{ textAlign: "left", margin: "1rem 0" }}>
            <p><strong>Crença Teológica:</strong> {monotelitas.crenca}</p>
            <p style={{ marginTop: "0.5rem" }}>
              <strong>Líderes Principais:</strong> {monotelitas.lideres.join(", ")}
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              <strong>Desfecho no Concílio:</strong> {monotelitas.desfecho}
            </p>
            <p style={{ marginTop: "0.5rem", fontStyle: "italic", color: "#bd3a29" }}>
              💡 <strong>Ironia Histórica:</strong> {monotelitas.ironia}
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
                  <strong>Razão:</strong> {aus.razao}
                </div>
                <div style={{ fontSize: "0.85rem", color: "#8b6508" }}>
                  🎯 <strong>Impacto:</strong> {aus.impacto}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          PERSONAGENS-CHAVE
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>👑</span> Os Protagonistas e Figuras-Chave (Prosopografia)
        </h2>

        <p className={styles.secaoTexto}>
          Conheça em detalhes os imperadores, bispos, teólogos, papas e heresiarcas
          que moldaram os acontecimentos e os debates de Constantinopla III:
        </p>

        <div className={styles.heresiasGrid} style={{ marginTop: "1.5rem" }}>
          {personagens.map((p, i) => (
            <div
              key={i}
              className={styles.heresiaCard}
              style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
            >
              <div>
                <div className={styles.heresiaNome} style={{ fontSize: "1.2rem", marginBottom: "0.2rem" }}>
                  {p.nome}
                </div>
                {p.nomeGrego && (
                  <div style={{ fontSize: "0.85rem", color: "#8b6508", marginBottom: "0.4rem", fontStyle: "italic" }}>
                    {p.nomeGrego}
                  </div>
                )}
                <div className={styles.heresiaLider} style={{ marginBottom: "0.5rem" }}>
                  <strong>{p.titulo}</strong>
                  <br />
                  📅 {p.datas} | 📍 {p.origem}
                </div>
                <div className={styles.heresiaErro} style={{ fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "0.75rem" }}>
                  <strong>Biografia:</strong> {p.biografia}
                </div>
                <div
                  style={{
                    background: "#f8f4ec",
                    padding: "0.6rem",
                    borderRadius: "6px",
                    marginBottom: "0.75rem",
                    borderLeft: "3px solid #8b6508",
                    fontSize: "0.9rem",
                  }}
                >
                  <strong>🏛️ Papel no Concílio:</strong> {p.papelNoConcilio}
                </div>
                <div style={{ fontSize: "0.9rem", color: "#3e3328", marginBottom: "0.75rem" }}>
                  <strong>Legado:</strong> {p.legado}
                </div>
                {p.obras && p.obras.length > 0 && (
                  <div style={{ marginBottom: "0.75rem" }}>
                    <strong style={{ fontSize: "0.85rem", color: "#8b6508" }}>📚 Principais Obras:</strong>
                    <ul style={{ margin: "0.2rem 0 0 1.1rem", padding: 0, fontSize: "0.85rem", color: "#555" }}>
                      {p.obras.map((obra, oIdx) => (
                        <li key={oIdx}>{obra}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {p.curiosidade && (
                <div
                  style={{
                    marginTop: "0.75rem",
                    paddingTop: "0.5rem",
                    borderTop: "1px dashed #e2d9cb",
                    fontStyle: "italic",
                    fontSize: "0.85rem",
                    color: "#bd3a29",
                  }}
                >
                  💡 <strong>Curiosidade:</strong> {p.curiosidade}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =============================================
          CONTROVÉRSIAS E TENSÕES
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>⚡</span> Controvérsias e Tensões do Concílio
        </h2>

        <p className={styles.secaoTexto}>{resumoControversias}</p>

        <div className={styles.heresiasGrid} style={{ marginTop: "1.5rem" }}>
          {controversias.map((c) => (
            <div key={c.id} className={styles.heresiaCard} style={{ display: "flex", flexDirection: "column" }}>
              <div className={styles.heresiaNome} style={{ fontSize: "1.15rem", marginBottom: "0.4rem" }}>
                {c.id}. {c.titulo}
              </div>
              <div className={styles.heresiaErro} style={{ marginBottom: "0.75rem" }}>
                <strong>Resumo:</strong> {c.resumo}
              </div>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "0.75rem", color: "#3e3328" }}>
                {c.detalhes}
              </p>
              <div style={{ marginBottom: "0.75rem" }}>
                <strong style={{ color: "#8b6508", fontSize: "0.9rem" }}>Partes envolvidas:</strong>
                <ul style={{ margin: "0.3rem 0 0 1.1rem", padding: 0, fontSize: "0.9rem" }}>
                  {c.partesEnvolvidas.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
              <div style={{
                background: "#f8f4ec",
                padding: "0.75rem",
                borderRadius: "6px",
                marginBottom: "0.5rem",
                borderLeft: "3px solid #c4a96a"
              }}>
                <div style={{ fontSize: "0.9rem", marginBottom: "0.4rem" }}>
                  <strong style={{ color: "#8b6508" }}>Resultado:</strong> {c.resultado}
                </div>
                <div style={{ fontSize: "0.9rem" }}>
                  <strong style={{ color: "#8b6508" }}>Consequência:</strong> {c.consequenciaDeLongoPrazo}
                </div>
              </div>
              {c.fontes && c.fontes.length > 0 && (
                <small style={{ color: "#8b6508", marginTop: "auto", paddingTop: "0.5rem" }}>
                  📚 Fontes: {c.fontes.join(" · ")}
                </small>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =============================================
          PARTIDOS TEOLÓGICOS
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>⚔️</span> Partidos Teológicos e Heresias no Século VII
        </h2>

        <p className={styles.secaoTexto}>{resumoPartidos}</p>

        <div className={styles.destaque} style={{ textAlign: "left", margin: "1.5rem 0" }}>
          <strong style={{ color: "#8b6508" }}>🎨 O Espectro Teológico do Século VII:</strong>
          <ul style={{ margin: "0.5rem 0 0 1.2rem", padding: 0, fontSize: "0.95rem", lineHeight: "1.6" }}>
            {espectroTeologico.map((esp, i) => (
              <li key={i}>{esp}</li>
            ))}
          </ul>
        </div>

        <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginTop: "2rem", marginBottom: "1rem" }}>
          📋 Detalhamento das Correntes Doutrinárias
        </h3>

        <div className={styles.heresiasGrid}>
          {partidos.map((pt, i) => (
            <div key={i} className={styles.heresiaCard} style={{ display: "flex", flexDirection: "column" }}>
              <div className={styles.heresiaNome} style={{ fontSize: "1.15rem" }}>
                {pt.nome}
              </div>
              {pt.nomeAlternativo && (
                <div style={{ fontSize: "0.85rem", color: "#665", fontStyle: "italic", marginBottom: "0.3rem" }}>
                  Também: {pt.nomeAlternativo}
                </div>
              )}
              <div className={styles.heresiaLider} style={{ marginBottom: "0.5rem" }}>
                👤 <strong>Líder:</strong> {pt.lider} | ⏳ {pt.periodo}
              </div>
              <div style={{ fontStyle: "italic", fontSize: "0.85rem", background: "#f5ece1", padding: "0.4rem 0.6rem", borderRadius: "4px", marginBottom: "0.75rem", color: "#665" }}>
                🔑 <strong>Termo-chave:</strong> {pt.termoChave}
              </div>
              <p className={styles.secaoTexto} style={{ fontSize: "0.95rem", marginBottom: "0.75rem" }}>
                {pt.descricao}
              </p>
              <div className={styles.heresiaErro} style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}>
                <strong>Posição sobre as Vontades:</strong> {pt.posicaoSobreAsVontades}
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <strong style={{ color: "#8b6508", fontSize: "0.85rem" }}>Argumentos:</strong>
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
            ⚖️ {quemFoiCondenadoPorNome.titulo}
          </h3>
          <p className={styles.secaoTexto}>{quemFoiCondenadoPorNome.observacaoGeral}</p>
          <ul className={styles.resultadosLista} style={{ marginBottom: "1rem" }}>
            {quemFoiCondenadoPorNome.detalhes.map((det, i) => (
              <li key={i}>{det}</li>
            ))}
          </ul>
          <div className={styles.destaque} style={{ textAlign: "left", borderLeftColor: "#bd3a29" }}>
            🚨 <strong>A Exceção sem Precedentes:</strong> {quemFoiCondenadoPorNome.unicaExcecao}
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
          CÂNONES DISCIPLINARES
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>📜</span> Os Cânones Disciplinares
        </h2>
        <p className={styles.secaoTexto}>
          A atribuição de cânones disciplinares a Constantinopla III é objeto de intenso debate acadêmico.
          Algumas coleções canônicas orientais atribuem até 17 ou 18 cânones a este concílio, mas a crítica
          histórica moderna demonstra que a maioria — senão todos — pertencem, na verdade, ao{' '}
          <strong>Concílio Quinissexto (in Trullo) de 692</strong>, reunido no mesmo local onze anos depois.
        </p>

        <div className={styles.presidentesLista}>
          {canones.map((c, i) => (
            <div key={i} className={styles.presidenteItem}>
              <span className={styles.presidenteFase}>CÂNON {c.numero}</span>
              <div className={styles.presidenteInfo}>
                <h4>{c.titulo}</h4>
                <p>{c.texto}</p>
                {c.contexto && (
                  <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "#6b5839" }}>
                    <strong>Contexto:</strong> {c.contexto}
                  </p>
                )}
                {c.statusAtual && (
                  <small style={{ color: "#8b6508", display: "block", marginTop: "0.3rem" }}>
                    📌 <strong>Status:</strong> {c.statusAtual}
                  </small>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.destaque} style={{ padding: "1rem", marginTop: "1.5rem", borderLeftColor: "#bd3a29" }}>
          <strong>⚠️ {notaTrullo.titulo}</strong>
          <p style={{ marginTop: "0.5rem" }}>{notaTrullo.explicacao}</p>
        </div>
      </section>

      {/* =============================================
          O HOROS NA ÍNTEGRA
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>📖</span> O Horos (Definição de Fé) na Íntegra
        </h2>
        <p className={styles.secaoTexto}>{horos.introducao}</p>

        <div className={styles.heresiaCard} style={{ background: "#fdfbf7", borderColor: "#c4a96a", color: "#3e3328", fontSize: "1.05rem", lineHeight: "1.8", padding: "2rem" }}>
          {horos.paragrafos.map((p, i) => (
            <p key={i} style={{ marginBottom: "1rem" }}>{p}</p>
          ))}
        </div>

        <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginTop: "2rem", marginBottom: "1rem" }}>
          🔍 Análise Frase por Frase
        </h3>
        <div className={styles.heresiasGrid}>
          {analiseFrasePorFrase.map((af, i) => (
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
                📖 <strong>Bases:</strong> {af.baseBiblica.join(", ")}
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginTop: "2rem", marginBottom: "1rem" }}>
          📊 Comparação: Calcedônia (451) vs Constantinopla III (681)
        </h3>
        <div className={styles.heresiasGrid}>
          {comparacaoComCalcedonia.map((cc, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{cc.topico}</div>
              <div style={{ fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                <strong>Calcedônia 451:</strong> &ldquo;{cc.calcedonia451}&rdquo;
              </div>
              <div style={{ fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                <strong>Constantinopla III 681:</strong> &ldquo;{cc.constantinopla681}&rdquo;
              </div>
              <div className={styles.heresiaErro} style={{ color: "#8b6508" }}>
                <strong>Evolução:</strong> {cc.diferenca}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =============================================
          DOUTRINA TEOLÓGICA COMPLETA
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>✝️</span> Doutrina Teológica do Concílio
        </h2>

        <div style={{ marginBottom: "2.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            {sinteseCristologica.titulo}
          </h3>
          <p className={styles.secaoTexto}>{sinteseCristologica.introducao}</p>
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            {duasVontades.titulo}
          </h3>
          <p className={styles.secaoTexto}><strong>Definição:</strong> {duasVontades.definicao}</p>
          <p className={styles.secaoTexto}><strong>Fundamento:</strong> {duasVontades.fundamento}</p>
          <p className={styles.secaoTexto} style={{ color: "#bd3a29" }}><strong>Contra:</strong> {duasVontades.contraQuem}</p>
          <div style={{ marginTop: "1rem" }}>
            <strong style={{ color: "#8b6508" }}>📖 Bases Bíblicas:</strong>
            <ul className={styles.resultadosLista}>
              {duasVontades.basesBiblicas.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
          <div style={{ marginTop: "0.5rem" }}>
            <strong style={{ color: "#8b6508" }}>📚 Bases Patrísticas:</strong>
            <ul className={styles.resultadosLista}>
              {duasVontades.basesPatristicas.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            {duasOperacoes.titulo}
          </h3>
          <p className={styles.secaoTexto}><strong>Definição:</strong> {duasOperacoes.definicao}</p>
          <p className={styles.secaoTexto}><strong>Fundamento:</strong> {duasOperacoes.fundamento}</p>
          <p className={styles.secaoTexto} style={{ color: "#bd3a29" }}><strong>Contra:</strong> {duasOperacoes.contraQuem}</p>
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            {subordinacao.titulo}
          </h3>
          <p className={styles.secaoTexto}>{subordinacao.explicacao}</p>
          <p className={styles.secaoTexto} style={{ fontStyle: "italic" }}>
            <strong>Analogia:</strong> {subordinacao.analogia}
          </p>
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            {comunicacaoIdiomatum.titulo}
          </h3>
          <p className={styles.secaoTexto}>{comunicacaoIdiomatum.explicacao}</p>
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "1rem" }}>
            📊 Comparação: Calcedônia (451) vs Constantinopla III (681)
          </h3>
          <div className={styles.heresiasGrid}>
            {comparacaoConcilios.map((cc, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{cc.topico}</div>
                <div style={{ fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                  <strong>Calcedônia:</strong> {cc.calcedonia}
                </div>
                <div style={{ fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                  <strong>Constantinopla III:</strong> {cc.constantinoplaIII}
                </div>
                <div className={styles.heresiaErro} style={{ color: "#8b6508" }}>
                  <strong>Relação:</strong> {cc.relacao}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "1rem" }}>
            🔤 Glossário de Termos Teológicos (Grego)
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
                  💡 <strong>Impacto:</strong> {g.importancia}
                </small>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            {limitesDoutrinarios.titulo}
          </h3>
          <div className={styles.heresiasGrid} style={{ margin: "1rem 0" }}>
            {limitesDoutrinarios.naoDefinidos.map((ld, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{ld.topico}</div>
                <div className={styles.heresiaErro}>{ld.descricao}</div>
                <div style={{ fontSize: "0.85rem", marginTop: "0.4rem", color: "#665" }}>
                  <strong>Por que não?</strong> {ld.porQueNao}
                </div>
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

      {/* =============================================
          O CASO HONÓRIO I (SEÇÃO ESPECIAL)
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>🔥</span> O Caso Honório I: O Papa Anatematizado
        </h2>

        <p className={styles.secaoTexto}>{introducaoHonorio}</p>

        <div style={{ marginBottom: "2rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            📜 O Contexto das Cartas
          </h3>
          <p className={styles.secaoTexto}>{contextoHonorio}</p>
        </div>

                <div style={{ marginBottom: "2rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            📜 O Contexto das Cartas
          </h3>
          <p className={styles.secaoTexto}>{contextoHonorio}</p>
        </div>

        <div style={{ marginBottom: "2rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            ✍️ O que Honório Disse
          </h3>
          <p className={styles.secaoTexto}>{oQueHonorioDisse}</p>
        </div>

        <div style={{ marginBottom: "2rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            🛡️ O que Honório NÃO Disse
          </h3>
          <p className={styles.secaoTexto}>{oQueHonorioNaoDisse}</p>
        </div>

        <div style={{ marginBottom: "2rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#bd3a29", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            ⚖️ A Condenação no Concílio (Sessão XIII)
          </h3>
          <p className={styles.secaoTexto}>{aCondenacaoNoConcilio}</p>
        </div>

        <div style={{ marginBottom: "2rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            📩 A Interpretação de Leão II (682)
          </h3>
          <p className={styles.secaoTexto}>{aInterpretacaoDeLeaoII}</p>
        </div>

        <div style={{ marginBottom: "2rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            🏛️ O Debate no Vaticano I (1870)
          </h3>
          <p className={styles.secaoTexto}>{oDebateNoVaticanoI}</p>
        </div>

        <div style={{ borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.2rem", marginBottom: "1rem" }}>
            🔍 Posições Modernas sobre o Caso Honório
          </h3>
          <div className={styles.heresiasGrid}>
            {posicoesModernas.map((pos, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{pos.tradicao}</div>
                <div className={styles.heresiaErro}>{pos.posicao}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          MITOS E ESCLARECIMENTOS
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <img
            src="/estudos/concilios/icones/errado.webp"
            alt="Mitos"
            className={styles.secaoIconeImg}
          />
          Mitos e Esclarecimentos
        </h2>

        <p className={styles.secaoTexto}>{resumoMitos}</p>

        <div className={styles.heresiasGrid} style={{ marginTop: "1.5rem" }}>
          {mitos.map((m) => (
            <div key={m.id} className={styles.heresiaCard} style={{ display: "flex", flexDirection: "column" }}>
              <div className={styles.heresiaNome} style={{ fontSize: "1.05rem" }}>
                Mito {m.id}: &ldquo;{m.mito}&rdquo;
              </div>
              <div
                style={{
                  display: "inline-block",
                  alignSelf: "flex-start",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  padding: "0.15rem 0.5rem",
                  borderRadius: "4px",
                  marginTop: "0.4rem",
                  marginBottom: "0.6rem",
                  background:
                    m.gravidade === "alta"
                      ? "#fde8e8"
                      : m.gravidade === "média"
                      ? "#fff4e0"
                      : "#eef6ee",
                  color:
                    m.gravidade === "alta"
                      ? "#bd3a29"
                      : m.gravidade === "média"
                      ? "#8b6508"
                      : "#2d6a4f",
                }}
              >
                Gravidade: {m.gravidade}
              </div>
              <div className={styles.heresiaErro} style={{ marginBottom: "0.6rem" }}>
                <strong>Realidade:</strong> {m.realidade}
              </div>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "0.6rem", color: "#3e3328" }}>
                <strong>Explicação:</strong> {m.explicacao}
              </p>
              <p style={{ fontSize: "0.9rem", color: "#6b5839", marginBottom: "0.5rem" }}>
                <strong>Origem do mito:</strong> {m.origemDoMito}
              </p>
              {m.fontes && m.fontes.length > 0 && (
                <small style={{ color: "#8b6508", marginTop: "auto", paddingTop: "0.4rem" }}>
                  📚 Fontes: {m.fontes.join(" · ")}
                </small>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =============================================
          LEGADO TRANSVERSAL
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>🏛️</span> O Legado Transversal do Concílio
        </h2>

        <div style={{ marginBottom: "2.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            ✝️ {legado.teologico.titulo}
          </h3>
          <p className={styles.secaoTexto}>{legado.teologico.introducao}</p>
          <div className={styles.heresiasGrid} style={{ marginTop: "1rem" }}>
            {legado.teologico.pontos.map((pt, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{pt.titulo}</div>
                <div className={styles.heresiaErro}>{pt.descricao}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            ⛪ {legado.eclesiastico.titulo}
          </h3>
          <p className={styles.secaoTexto}>{legado.eclesiastico.introducao}</p>
          <div className={styles.heresiasGrid} style={{ marginTop: "1rem" }}>
            {legado.eclesiastico.pontos.map((pt, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{pt.titulo}</div>
                <div className={styles.heresiaErro}>{pt.descricao}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            👑 {legado.politico.titulo}
          </h3>
          <p className={styles.secaoTexto}>{legado.politico.introducao}</p>
          <div className={styles.heresiasGrid} style={{ marginTop: "1rem" }}>
            {legado.politico.pontos.map((pt, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{pt.titulo}</div>
                <div className={styles.heresiaErro}>{pt.descricao}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            🎨 {legado.cultural.titulo}
          </h3>
          <p className={styles.secaoTexto}>{legado.cultural.introducao}</p>
          <div className={styles.heresiasGrid} style={{ marginTop: "1rem" }}>
            {legado.cultural.pontos.map((pt, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{pt.titulo}</div>
                <div className={styles.heresiaErro}>{pt.descricao}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            🌐 {legado.ecumenico.titulo}
          </h3>
          <p className={styles.secaoTexto}>{legado.ecumenico.introducao}</p>
          <div className={styles.heresiasGrid} style={{ marginTop: "1rem" }}>
            {legado.ecumenico.pontos.map((pt, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{pt.titulo}</div>
                <div className={styles.heresiaErro}>{pt.descricao}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            📜 Reconhecimento Ecumênico Oficial
          </h3>
          <p className={styles.secaoTexto}>
            <strong>Confirmação Ecumênica:</strong> {f.reconhecimento.comoEcumenico}.
          </p>
          <p className={styles.secaoTexto}>
            <strong>Aceito universalmente por:</strong> {f.reconhecimento.aceito.join(", ")}.
          </p>
          <div className={styles.destaque} style={{ textAlign: "left", marginTop: "1rem", borderLeftColor: "#bd3a29" }}>
            <strong>Nota de Recepção:</strong> {f.reconhecimento.controversias}
          </div>
          <p className={styles.secaoTexto} style={{ marginTop: "1.5rem", fontWeight: "500", fontSize: "1.1rem" }}>
            {legado.resumoFinal}
          </p>
        </div>
      </section>

      {/* =============================================
          RECEPÇÃO HISTÓRICA
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>⏳</span> Linha do Tempo da Recepção Histórica (682 d.C. – Atualidade)
        </h2>

        <p className={styles.secaoTexto}>{resumoRecepcao}</p>

        <div className={styles.presidentesLista} style={{ marginTop: "1.5rem" }}>
          {recepcao.map((ev, i) => (
            <div key={i} className={styles.presidenteItem}>
              <span className={styles.presidenteFase}>{ev.periodo}</span>
              <div className={styles.presidenteInfo}>
                <h4>{ev.titulo}</h4>
                <p>{ev.descricao}</p>
                <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "#6b5839" }}>
                  <strong>Importância:</strong> {ev.importancia}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =============================================
          FONTES E BIBLIOGRAFIA
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>📚</span> Fontes e Bibliografia
        </h2>

        <div className={styles.destaque} style={{ textAlign: "left", marginBottom: "2rem" }}>
          <strong style={{ color: "#8b6508" }}>Nota metodológica:</strong>
          <p style={{ marginTop: "0.5rem" }}>{resumoFontes.observacao}</p>
          <p style={{ marginTop: "0.75rem", fontSize: "0.9rem" }}>
            <strong>Totais:</strong> {resumoFontes.totalPrimarias} fontes primárias ·{" "}
            {resumoFontes.totalSecundarias} secundárias · {resumoFontes.totalModernas} modernas ·{" "}
            {resumoFontes.totalRecursos} recursos online
          </p>
        </div>

        <h3 style={{ color: "#8b6508", fontSize: "1.2rem", marginBottom: "1rem" }}>
          1. Fontes Primárias — Atas e Documentos Conciliares
        </h3>
        <div className={styles.heresiasGrid} style={{ marginBottom: "2rem" }}>
          {fontesPrimariasHistoricas.map((f, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{f.autor}</div>
              <div className={styles.heresiaLider}>
                <em>{f.titulo}</em> ({f.data}) · {f.idioma}
              </div>
              <div className={styles.heresiaErro}>{f.descricao}</div>
              <p style={{ fontSize: "0.9rem", marginTop: "0.5rem", color: "#6b5839" }}>
                <strong>Relevância:</strong> {f.relevancia}
              </p>
              {f.disponibilidade && (
                <small style={{ color: "#8b6508", display: "block", marginTop: "0.3rem" }}>
                  📖 {f.disponibilidade}
                </small>
              )}
            </div>
          ))}
        </div>

        <h3 style={{ color: "#8b6508", fontSize: "1.2rem", marginBottom: "1rem" }}>
          2. Fontes Primárias — Máximo, o Confessor e Sofrônio
        </h3>
        <div className={styles.heresiasGrid} style={{ marginBottom: "2rem" }}>
          {fontesPrimariasMaximo.map((f, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{f.autor}</div>
              <div className={styles.heresiaLider}>
                <em>{f.titulo}</em> ({f.data}) · {f.idioma}
              </div>
              <div className={styles.heresiaErro}>{f.descricao}</div>
              <p style={{ fontSize: "0.9rem", marginTop: "0.5rem", color: "#6b5839" }}>
                <strong>Relevância:</strong> {f.relevancia}
              </p>
            </div>
          ))}
        </div>

        <h3 style={{ color: "#8b6508", fontSize: "1.2rem", marginBottom: "1rem" }}>
          3. Fontes Primárias — Outros Padres e Historiadores
        </h3>
        <div className={styles.heresiasGrid} style={{ marginBottom: "2rem" }}>
          {fontesPrimariasOutros.map((f, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{f.autor}</div>
              <div className={styles.heresiaLider}>
                <em>{f.titulo}</em> ({f.data}) · {f.idioma}
              </div>
              <div className={styles.heresiaErro}>{f.descricao}</div>
              <p style={{ fontSize: "0.9rem", marginTop: "0.5rem", color: "#6b5839" }}>
                <strong>Relevância:</strong> {f.relevancia}
              </p>
            </div>
          ))}
        </div>

        <h3 style={{ color: "#8b6508", fontSize: "1.2rem", marginBottom: "1rem" }}>
          4. Fontes Primárias — Documentos Imperiais e Papais
        </h3>
        <div className={styles.heresiasGrid} style={{ marginBottom: "2rem" }}>
          {fontesPrimariasDocumentos.map((f, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{f.autor}</div>
              <div className={styles.heresiaLider}>
                <em>{f.titulo}</em> ({f.data}) · {f.idioma}
              </div>
              <div className={styles.heresiaErro}>{f.descricao}</div>
              <p style={{ fontSize: "0.9rem", marginTop: "0.5rem", color: "#6b5839" }}>
                <strong>Relevância:</strong> {f.relevancia}
              </p>
            </div>
          ))}
        </div>

        <h3 style={{ color: "#8b6508", fontSize: "1.2rem", marginBottom: "1rem" }}>
          5. Fontes Secundárias Antigas
        </h3>
        <div className={styles.heresiasGrid} style={{ marginBottom: "2rem" }}>
          {fontesSecundarias.map((f, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{f.autor}</div>
              <div className={styles.heresiaLider}>
                <em>{f.titulo}</em> ({f.data}) · {f.idioma}
              </div>
              <div className={styles.heresiaErro}>{f.descricao}</div>
              <p style={{ fontSize: "0.9rem", marginTop: "0.5rem", color: "#6b5839" }}>
                <strong>Relevância:</strong> {f.relevancia}
              </p>
            </div>
          ))}
        </div>

        <h3 style={{ color: "#8b6508", fontSize: "1.2rem", marginBottom: "1rem" }}>
          6. Fontes Modernas — Obras de Referência
        </h3>
        <div className={styles.heresiasGrid} style={{ marginBottom: "2rem" }}>
          {fontesModernas.map((f, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{f.autor}</div>
              <div className={styles.heresiaLider}>
                <em>{f.titulo}</em> ({f.data}) · {f.idioma}
              </div>
              <div className={styles.heresiaErro}>{f.descricao}</div>
              <p style={{ fontSize: "0.9rem", marginTop: "0.5rem", color: "#6b5839" }}>
                <strong>Relevância:</strong> {f.relevancia}
              </p>
            </div>
          ))}
        </div>

        <h3 style={{ color: "#8b6508", fontSize: "1.2rem", marginBottom: "1rem" }}>
          7. Recursos Online e Coleções
        </h3>
        <div className={styles.heresiasGrid} style={{ marginBottom: "2rem" }}>
          {recursosOnline.map((r, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{r.nome}</div>
              <div className={styles.heresiaErro}>{r.descricao}</div>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#8b6508", fontSize: "0.9rem", marginTop: "0.5rem", display: "inline-block" }}
              >
                🔗 {r.url}
              </a>
            </div>
          ))}
        </div>

        <div className={styles.destaque} style={{ textAlign: "left" }}>
          <strong style={{ color: "#8b6508" }}>📖 Recomendações de leitura:</strong>
          <ul className={styles.resultadosLista} style={{ marginTop: "0.75rem" }}>
            {resumoFontes.recomendacaoLeitura.map((rec, i) => (
              <li key={i}>{rec}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* =============================================
          NAVEGAÇÃO
         ============================================= */}
      <nav className={styles.navLinks}>
        <Link
          href="/estudos/concilios/constantinopla-3/documentos"
          className={styles.navLink}
        >
          📄 Consultar Documentos e Atas Integrais →
        </Link>
      </nav>
    </ConcilioLayout>
  )
}