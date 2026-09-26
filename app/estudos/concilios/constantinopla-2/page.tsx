'use client'

import Link from 'next/link'
import { ConcilioLayout } from '../_shared/ConcilioLayout'
import { fichaConcilio } from './_data/ficha'
import { antecedentes, resumoAntecedentes } from './_data/antecedentes'
import { convocacao } from './_data/convocacao'
import {
  contextoPolitico,
  cronologiaPolitica,
  justiniano,
} from './_data/contexto-politico'
import { tresCapitulos } from './_data/tres-capitulos'
import {
  partidos,
  resumoPartidos,
  espectroTeologico,
  quemFoiCondenadoPorNome,
  oQueNaoFoiTocado,
} from './_data/partidos'
import {
  participantes,
  ausencias,
  totalParticipantes,
  monofisitas,
} from './_data/participantes'
import { personagens } from './_data/personagens'
import { papado } from './_data/papado'
import { sessoes, linhaDoTempoSessoes } from './_data/sessoes'
import { anatemas } from './_data/anatemas'
import { doutrina } from './_data/doutrina'
import { origenismo } from './_data/origenismo'
import { canones } from './_data/canones'
import { controversias, resumoControversias } from './_data/controversias'
import { mitos, resumoMitos } from './_data/mitos'
import { legado } from './_data/legado'
import { recepcao, linhaDoTempoRecepcao, resumoRecepcao } from './_data/recepcao'
import {
  fontes,
  resumoFontes,
  fontesPrimariasHistoricas,
  fontesPrimariasDocumentos,
  fontesPrimariasOutros,
  fontesSecundarias,
  fontesModernas,
  recursosOnline,
} from './_data/fontes'
import { credo } from './_data/credo'
import { recepcaoNaoCalcedoniana, recepcaoIgrejas } from './_data/recepcao-nao-calcedoniana'
import { trisagionLegado } from './_data/trisagion-legado-liturgico'
import { edicoesPrimarias, recursosDigitais } from './_data/filologia-edicoes'
import { debatesHistoriograficos } from './_data/debates-historiograficos'
import { prosopografiaSignatarios } from './_data/prosopografia-signatarios'
import styles from './constantinopla-2.module.css'

const {
  sinteseCirilina,
  glossarioGrego,
  cristologia,
  theopaschismo,
  theotokos,
  pneumatologia,
  comparacaoCredos,
  condenacoes,
  limitesDoutrinarios,
  resumoTeologico,
} = doutrina

export default function Constantinopla2Page() {
  const f = fichaConcilio
  const conv = convocacao

  return (
    <ConcilioLayout
      numeroEcum="V Concílio Ecumênico"
      titulo={f.nome}
      subtitulo={`${f.nomeGrego} · ${f.nomeLatim}`}
      data={`${f.data.inicio} — ${f.data.fim}`}
      local={`${f.local.edificio}, ${f.local.cidade}`}
      proxLink="/estudos/concilios/constantinopla-3"
      proxTexto="Constantinopla III (680–681)"
    >
      {/* =============================================
          1. FICHA RÁPIDA DE DADOS
         ============================================= */}
      <section className={styles.fichaRapida}>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Convocado por</div>
          <div className={styles.fichaValor}>
            {f.convocador.nome}
            <br />
            <small>
              {f.convocador.titulo} ({f.convocador.reinado})
            </small>
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
            <small>Reconhecido como ecumênico a partir do séc. VII</small>
          </div>
        </div>
      </section>

      {/* Nota sobre o Papa Vigílio */}
      <div
        className={styles.destaque}
        style={{ fontSize: '0.9rem', marginTop: '-1rem', marginBottom: '2rem' }}
      >
        ⚠️ <strong>Nota sobre o Papado:</strong>{' '}
        {f.participantes.observacao}
      </div>

      {/* =============================================
          2. CTA — DOSSIÊ DOCUMENTAL
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
            background:
              'linear-gradient(90deg, #3a1f5c 0%, #c5a059 50%, #3a1f5c 100%)',
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
            background:
              'radial-gradient(circle, rgba(197,160,89,0.12) 0%, transparent 70%)',
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
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#c5a059',
            }}
          />
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
          Entre no Dossiê Documental de Constantinopla II
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
          Os{' '}
          <strong style={{ color: '#2b1130' }}>14 Anátemas em grego e latim</strong>,
          os 15 Anátemas contra Orígenes, o Édito de Justiniano contra os Três
          Capítulos, o{' '}
          <strong style={{ color: '#2b1130' }}>Iudicatum e os dois Constituta</strong>{' '}
          do Papa Vigílio, a Sentença Final, e as Acta completas da edição de
          Schwartz — tudo organizado para estudo sério.
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
            { text: 'Acta Concilii', aba: 'acta' },
            { text: '14 Anátemas', aba: 'anatemas' },
            { text: '15 Anátemas Orígenes', aba: 'origenismo' },
            { text: 'Édito Três Capítulos', aba: 'edito' },
            { text: 'Iudicatum (548)', aba: 'iudicatum' },
            { text: 'Constituta de Vigílio', aba: 'constituta' },
            { text: 'Sentença Final', aba: 'sentenca' },
            { text: 'Três Capítulos', aba: 'capitulos' },
            { text: 'Carta a Mari', aba: 'carta-mari' },
          ].map((item) => (
            <Link
              key={item.text}
              href={`/estudos/concilios/constantinopla-2/documentos?aba=${item.aba}`}
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
          href="/estudos/concilios/constantinopla-2/documentos"
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
            e.currentTarget.style.boxShadow =
              '0 14px 32px rgba(91, 44, 131, 0.35)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow =
              '0 8px 24px rgba(91, 44, 131, 0.28)'
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
          3. VISÃO GERAL & CONTEXTO HISTÓRICO
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
          Cem anos após o Concílio de Calcedônia (451), a Igreja permanecia
          profundamente dividida entre calcedonianos e miafisitas. O imperador
          Justiniano I, buscando a reunificação religiosa do Império, identificou
          nos escritos de três autores mortos — Teodoro de Mopsuéstia, Teodoreto de
          Ciro e Ibas de Edessa — o obstáculo principal à reconciliação.
          Constantinopla II foi convocado para condenar esses textos (os chamados{' '}
          <em>Três Capítulos</em>) sem, em tese, revogar a autoridade de Calcedônia.
          O resultado foi o concílio mais controverso da Antiguidade cristã, marcado
          pela coerção imperial sobre o papado e por um cisma de 150 anos no
          Ocidente.
        </p>

        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.1rem',
            marginTop: '1.5rem',
            marginBottom: '0.5rem',
          }}
        >
          🎯 Resultados Principais do Concílio:
        </h3>
        <ul className={styles.resultadosLista}>
          {f.resultadosPrincipais.map((res, idx) => (
            <li key={idx}>{res}</li>
          ))}
        </ul>
      </section>

      {/* =============================================
          4. CONVOCAÇÃO E MOTIVAÇÕES
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

        <div
          className={styles.destaque}
          style={{ textAlign: 'left', marginBottom: '1.5rem' }}
        >
          <strong style={{ color: '#8b6508' }}>
            {conv.contextoImediato.titulo}
          </strong>
          <p style={{ marginTop: '0.5rem' }}>
            {conv.contextoImediato.descricao}
          </p>
        </div>

        <p className={styles.secaoTexto}>
          Convocado pelo imperador Justiniano I, o concílio foi reunido na{' '}
          <strong>{conv.logistica.localEscolhido.edificio}</strong> (
          {conv.logistica.localEscolhido.cidade}).{' '}
          {conv.logistica.localEscolhido.razao}
        </p>

        <div className={styles.heresiasGrid} style={{ margin: '1rem 0' }}>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome} style={{ fontSize: '0.95rem' }}>
              📅 Convocação
            </div>
            <div className={styles.heresiaErro}>
              {conv.logistica.dataConvocacao}
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome} style={{ fontSize: '0.95rem' }}>
              🔔 Abertura
            </div>
            <div className={styles.heresiaErro}>
              {conv.logistica.dataAbertura}
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome} style={{ fontSize: '0.95rem' }}>
              📜 Encerramento
            </div>
            <div className={styles.heresiaErro}>
              {conv.logistica.dataEncerramento}
            </div>
          </div>
        </div>

        <p className={styles.secaoTexto}>
          <small style={{ color: '#8b6508' }}>
            Fonte da tradição: {conv.logistica.localEscolhido.fonteTradicao}
          </small>
        </p>

        <p className={styles.secaoTexto} style={{ marginTop: '1.5rem' }}>
          A convocação foi impulsionada por <strong>sete</strong> grandes
          motivações:
        </p>

        <div className={styles.heresiasGrid}>
          {Object.entries(conv.motivacoes).map(([key, mot], i) => (
            <div key={key} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>
                {i + 1}. {mot.titulo}
              </div>
              <div className={styles.heresiaErro}>{mot.descricao}</div>
            </div>
          ))}
        </div>

        <div
          className={styles.destaque}
          style={{ textAlign: 'left', marginTop: '1.5rem' }}
        >
          <strong style={{ color: '#8b6508' }}>
            {conv.tresFrentes.titulo}
          </strong>
          <p style={{ marginTop: '0.5rem' }}>
            {conv.tresFrentes.descricao}
          </p>
        </div>
      </section>

      {/* =============================================
          5. DESTAQUE DO ANÁTEMA CENTRAL
         ============================================= */}
      <div className={styles.destaque}>
        &ldquo;Se alguém defende Teodoro de Mopsuéstia e seus escritos ímpios,
        e não o anatematiza junto com seus escritos e todos os outros hereges...
        seja anátema.&rdquo;
        <br />
        <small
          style={{
            fontStyle: 'normal',
            display: 'block',
            marginTop: '1rem',
            color: '#8b6508',
          }}
        >
          — Anátema XII do V Concílio Ecumênico (553 d.C.). A primeira
          condenação dogmática póstuma da história dos concílios ecumênicos.
        </small>
      </div>

      {/* =============================================
          6. CONTEXTO POLÍTICO: JUSTINIANO E O IMPÉRIO
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>🏛️</span> Contexto Político:
          Justiniano I e o Império em 553
        </h2>

        {/* --- 6.1 O ESTADO DO IMPÉRIO --- */}
        <div style={{ marginBottom: '2rem' }}>
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            {contextoPolitico.imperio.titulo}
          </h3>
          <p className={styles.secaoTexto}>
            {contextoPolitico.imperio.descricao}
          </p>

          <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>⚔️ Situação Militar</div>
              <div className={styles.heresiaErro}>
                {contextoPolitico.imperio.situacao.militar}
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>💰 Situação Econômica</div>
              <div className={styles.heresiaErro}>
                {contextoPolitico.imperio.situacao.economica}
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>⛪ Situação Religiosa</div>
              <div className={styles.heresiaErro}>
                {contextoPolitico.imperio.situacao.religiosa}
              </div>
            </div>
          </div>
        </div>

        {/* --- 6.2 JUSTINIANO COMO TEÓLOGO --- */}
        <div
          style={{
            marginBottom: '2.5rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            👑 Justiniano I: O Imperador-Teólogo
          </h3>
          <p className={styles.secaoTexto}>{justiniano.biografia}</p>
          <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>📖 Teologia Pessoal</div>
              <div className={styles.heresiaErro}>
                {justiniano.teologiaPessoal}
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>👩 Teodora e sua Influência</div>
              <div className={styles.heresiaErro}>
                {justiniano.relacaoComTeodora}
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>⚖️ Cesaropapismo</div>
              <div className={styles.heresiaErro}>
                {justiniano.cesaropapismo}
              </div>
            </div>
          </div>
        </div>

        {/* --- 6.3 CONSTANTINOPLA COMO CAPITAL --- */}
        <div
          style={{
            marginBottom: '2.5rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            {contextoPolitico.capital.titulo}
          </h3>
          <p className={styles.secaoTexto}>
            {contextoPolitico.capital.descricao}
          </p>
          <div
            className={styles.destaque}
            style={{ textAlign: 'left', borderLeftColor: '#bd3a29' }}
          >
            <strong>Relevância para o Concílio:</strong>{' '}
            {contextoPolitico.capital.relevanciaConciliar}
          </div>
        </div>

        {/* --- 6.4 ÉDITOS IMPERIAIS --- */}
        <div
          style={{
            marginBottom: '2.5rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '1rem',
            }}
          >
            📜 Os Grandes Éditos Imperiais
          </h3>
          <div className={styles.heresiasGrid}>
            {contextoPolitico.editos.map((ed, i) => (
              <div
                key={i}
                className={styles.heresiaCard}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    className={styles.heresiaNome}
                    style={{ fontSize: '1.1rem' }}
                  >
                    {ed.nome}
                  </div>
                  <div
                    className={styles.heresiaLider}
                    style={{ marginBottom: '0.5rem' }}
                  >
                    📅 {ed.data} | 📍 Local: {ed.local}
                  </div>

                  {ed.texto && (
                    <div
                      style={{
                        fontStyle: 'italic',
                        fontSize: '0.85rem',
                        background: '#f5ece1',
                        padding: '0.5rem',
                        borderRadius: '4px',
                        marginBottom: '0.5rem',
                        color: '#665',
                      }}
                    >
                      <strong>Original em Latim:</strong>
                      <br />
                      &ldquo;{ed.texto}&rdquo;
                    </div>
                  )}

                  <div
                    className={styles.heresiaErro}
                    style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}
                  >
                    <strong>Tradução:</strong> &ldquo;{ed.traducao}&rdquo;
                  </div>
                </div>

                <div
                  style={{
                    marginTop: '1rem',
                    paddingTop: '0.5rem',
                    borderTop: '1px solid #e2d9cb',
                  }}
                >
                  <small style={{ color: '#8b6508', display: 'block' }}>
                    🎯 <strong>Importância:</strong> {ed.importancia}
                  </small>
                  <small
                    style={{
                      color: '#888',
                      display: 'block',
                      marginTop: '0.2rem',
                    }}
                  >
                    Fonte jurídica: {ed.fonte}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- 6.5 RELAÇÃO IGREJA-ESTADO --- */}
        <div
          style={{
            marginBottom: '2.5rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            {contextoPolitico.igrejaEstado.titulo}
          </h3>
          <p className={styles.secaoTexto}>
            {contextoPolitico.igrejaEstado.descricao}
          </p>

          <div className={styles.heresiasGrid} style={{ margin: '1rem 0' }}>
            {contextoPolitico.igrejaEstado.conceitos.map((c, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome} style={{ color: '#8b6508' }}>
                  {c.termo}
                </div>
                <div className={styles.heresiaErro}>{c.significado}</div>
              </div>
            ))}
          </div>

          <p
            className={styles.secaoTexto}
            style={{ fontStyle: 'italic', marginTop: '1rem' }}
          >
            <strong>Avaliação Histórica:</strong>{' '}
            {contextoPolitico.igrejaEstado.avaliacao}
          </p>
        </div>

        {/* --- 6.6 CRONOLOGIA POLÍTICA --- */}
        <div
          style={{
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '1rem',
            }}
          >
            ⏳ Linha do Tempo Política (527–565)
          </h3>
          <div className={styles.presidentesLista}>
            {cronologiaPolitica.map((cp, i) => (
              <div key={i} className={styles.presidenteItem}>
                <span className={styles.presidenteFase}>{cp.ano}</span>
                <div className={styles.presidenteInfo}>
                  <h4 style={{ margin: 0, fontWeight: '500' }}>
                    {cp.evento}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          7. ANTECEDENTES HISTÓRICOS (451–553)
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>⏳</span> Antecedentes
          Históricos: Os 100 Anos Entre Calcedônia e Constantinopla II
          (451–553)
        </h2>

        <p className={styles.secaoTexto}>{resumoAntecedentes}</p>

        {antecedentes.map((periodo, pIdx) => (
          <div key={pIdx} style={{ marginBottom: '2.5rem' }}>
            <h3
              style={{
                color: '#8b6508',
                fontSize: '1.25rem',
                marginBottom: '0.5rem',
                borderBottom: '1px solid #e0d7c6',
                paddingBottom: '0.3rem',
              }}
            >
              Período {pIdx + 1} ({periodo.periodo}): {periodo.titulo}
            </h3>

            <p
              className={styles.secaoTexto}
              style={{ fontStyle: 'italic', marginBottom: '1rem' }}
            >
              {periodo.descricaoGeral}
            </p>

            <div className={styles.presidentesLista}>
              {periodo.eventos.map((ev, eIdx) => (
                <div key={eIdx} className={styles.presidenteItem}>
                  <span className={styles.presidenteFase}>{ev.ano}</span>
                  <div className={styles.presidenteInfo}>
                    <h4>{ev.titulo}</h4>
                    <p>{ev.descricao}</p>

                    <p
                      style={{
                        marginTop: '0.5rem',
                        fontSize: '0.9rem',
                        color: '#6b5839',
                      }}
                    >
                      <strong>Importância histórica:</strong>{' '}
                      {ev.importancia}
                    </p>

                    {ev.fontes && ev.fontes.length > 0 && (
                      <small
                        style={{
                          color: '#8b6508',
                          display: 'block',
                          marginTop: '0.3rem',
                        }}
                      >
                        📚 <strong>Fontes:</strong>{' '}
                        {ev.fontes.join(' · ')}
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
          8. A CONTROVÉRSIA DOS TRÊS CAPÍTULOS ⭐
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>📜</span> A Controvérsia dos
          Três Capítulos (Tria Capitula)
        </h2>

        <p className={styles.secaoTexto}>{tresCapitulos.introducao}</p>

        {/* --- 8.1 O DILEMA CENTRAL --- */}
        <div
          className={styles.destaque}
          style={{ textAlign: 'left', margin: '1.5rem 0', borderLeftColor: '#bd3a29' }}
        >
          <strong style={{ color: '#bd3a29' }}>⚠️ O Dilema Central:</strong>{' '}
          {tresCapitulos.oDilema}
        </div>

        {/* --- 8.2 PRIMEIRO CAPÍTULO: TEODORO DE MOPSUÉSTIA --- */}
        <div
          style={{
            marginBottom: '2.5rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            📕 Primeiro Capítulo: Teodoro de Mopsuéstia (~350–428)
          </h3>
          <p className={styles.secaoTexto}>
            {tresCapitulos.capitulo1.quemFoi}
          </p>

          <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>📚 Principais Obras</div>
              <div className={styles.heresiaErro}>
                {tresCapitulos.capitulo1.obras}
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>⚔️ Doutrina Cristológica</div>
              <div className={styles.heresiaErro}>
                {tresCapitulos.capitulo1.doutrina}
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>
                🎯 Por Que Foi Condenado
              </div>
              <div className={styles.heresiaErro}>
                {tresCapitulos.capitulo1.porQueCondenado}
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>
                ⚖️ O Problema da Condenação Póstuma
              </div>
              <div className={styles.heresiaErro}>
                {tresCapitulos.capitulo1.problemaDaCondenacaoPostuma}
              </div>
            </div>
          </div>

          {tresCapitulos.capitulo1.trechosCondenados && (
            <div
              style={{
                background: '#f8f4ec',
                padding: '1rem',
                borderRadius: '8px',
                borderLeft: '3px solid #bd3a29',
                marginTop: '1rem',
                fontSize: '0.95rem',
              }}
            >
              <strong style={{ color: '#bd3a29' }}>
                Trechos Condenados (exemplos):
              </strong>
              <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
                {tresCapitulos.capitulo1.trechosCondenados}
              </p>
            </div>
          )}

          {tresCapitulos.capitulo1.defesa && (
            <div
              style={{
                background: '#fdfbf7',
                padding: '0.75rem',
                borderRadius: '6px',
                borderLeft: '3px solid #8b6508',
                marginTop: '1rem',
                fontSize: '0.9rem',
              }}
            >
              <strong>🛡️ Defesa (Facundo de Hermiane e bispos africanos):</strong>{' '}
              {tresCapitulos.capitulo1.defesa}
            </div>
          )}
        </div>

        {/* --- 8.3 SEGUNDO CAPÍTULO: TEODORETO DE CIRO --- */}
        <div
          style={{
            marginBottom: '2.5rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            📗 Segundo Capítulo: Teodoreto de Ciro (~393–457)
          </h3>
          <p className={styles.secaoTexto}>
            {tresCapitulos.capitulo2.quemFoi}
          </p>

          <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>📚 Principais Obras</div>
              <div className={styles.heresiaErro}>
                {tresCapitulos.capitulo2.obras}
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>⚔️ Doutrina e Oposição a Cirilo</div>
              <div className={styles.heresiaErro}>
                {tresCapitulos.capitulo2.doutrina}
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>
                🎯 Por Que Foi Condenado
              </div>
              <div className={styles.heresiaErro}>
                {tresCapitulos.capitulo2.porQueCondenado}
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>
                ⚖️ O Problema da Condenação Póstuma
              </div>
              <div className={styles.heresiaErro}>
                {tresCapitulos.capitulo2.problemaDaCondenacaoPostuma}
              </div>
            </div>
          </div>

          {tresCapitulos.capitulo2.defesa && (
            <div
              style={{
                background: '#fdfbf7',
                padding: '0.75rem',
                borderRadius: '6px',
                borderLeft: '3px solid #8b6508',
                marginTop: '1rem',
                fontSize: '0.9rem',
              }}
            >
              <strong>🛡️ Defesa:</strong>{' '}
              {tresCapitulos.capitulo2.defesa}
            </div>
          )}
        </div>

        {/* --- 8.4 TERCEIRO CAPÍTULO: IBAS DE EDESSA --- */}
        <div
          style={{
            marginBottom: '2.5rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            📘 Terceiro Capítulo: Ibas de Edessa (†457) e a Carta a Mari
          </h3>
          <p className={styles.secaoTexto}>
            {tresCapitulos.capitulo3.quemFoi}
          </p>

          <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>✉️ A Carta a Mari, o Persa</div>
              <div className={styles.heresiaErro}>
                {tresCapitulos.capitulo3.aCarta}
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>⚔️ Doutrina</div>
              <div className={styles.heresiaErro}>
                {tresCapitulos.capitulo3.doutrina}
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>
                🎯 Por Que Foi Condenada
              </div>
              <div className={styles.heresiaErro}>
                {tresCapitulos.capitulo3.porQueCondenada}
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>
                ⚖️ O Problema da Condenação Póstuma
              </div>
              <div className={styles.heresiaErro}>
                {tresCapitulos.capitulo3.problemaDaCondenacaoPostuma}
              </div>
            </div>
          </div>

          {tresCapitulos.capitulo3.defesa && (
            <div
              style={{
                background: '#fdfbf7',
                padding: '0.75rem',
                borderRadius: '6px',
                borderLeft: '3px solid #8b6508',
                marginTop: '1rem',
                fontSize: '0.9rem',
              }}
            >
              <strong>🛡️ Defesa:</strong>{' '}
              {tresCapitulos.capitulo3.defesa}
            </div>
          )}
        </div>

        {/* --- 8.5 POSIÇÕES DE JUSTINIANO E DO OCIDENTE --- */}
        <div
          style={{
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <div className={styles.heresiasGrid}>
            <div
              className={styles.heresiaCard}
              style={{ borderLeft: '3px solid #5b2c83' }}
            >
              <div className={styles.heresiaNome}>
                👑 Posição de Justiniano
              </div>
              <div className={styles.heresiaErro}>
                {tresCapitulos.posicaoDeJustiniano}
              </div>
            </div>
            <div
              className={styles.heresiaCard}
              style={{ borderLeft: '3px solid #bd3a29' }}
            >
              <div className={styles.heresiaNome}>
                ⛪ Posição do Ocidente
              </div>
              <div className={styles.heresiaErro}>
                {tresCapitulos.posicaoDoOcidente}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          9. FASES, SESSÕES E PRESIDÊNCIA (8 SESSÕES)
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>👑</span> Fases, Sessões e
          Presidência do Concílio (8 Sessões)
        </h2>

        <p className={styles.secaoTexto}>{sessoes.introducao}</p>

        {/* --- 9.1 PRESIDÊNCIA --- */}
        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.1rem',
            marginTop: '1.5rem',
            marginBottom: '0.75rem',
          }}
        >
          👤 Presidência do Concílio
        </h3>
        <div
          className={styles.presidentesLista}
          style={{ marginBottom: '2rem' }}
        >
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

        {/* --- 9.2 LINHA DO TEMPO --- */}
        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.1rem',
            marginBottom: '0.75rem',
          }}
        >
          ⏳ Linha do Tempo dos Trabalhos Conciliares (Maio – Junho 553)
        </h3>
        <div
          className={styles.presidentesLista}
          style={{ marginBottom: '2.5rem' }}
        >
          {linhaDoTempoSessoes.map((ev, i) => (
            <div key={i} className={styles.presidenteItem}>
              <span className={styles.presidenteFase}>{ev.data}</span>
              <div className={styles.presidenteInfo}>
                <h4>{ev.evento}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* --- 9.3 DETALHAMENTO DAS 8 SESSÕES --- */}
        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.25rem',
            marginBottom: '1rem',
          }}
        >
          🏛️ Detalhamento das 8 Sessões Conciliares
        </h3>

        {sessoes.lista.map((s, sIdx) => (
          <div
            key={sIdx}
            style={{
              marginBottom: '2.5rem',
              borderTop: sIdx > 0 ? '1px solid #e0d7c6' : 'none',
              paddingTop: sIdx > 0 ? '1.5rem' : '0',
            }}
          >
            <h4
              style={{
                color: '#8b6508',
                fontSize: '1.15rem',
                marginBottom: '0.3rem',
              }}
            >
              {s.fase} — {s.data}: Presidência de {s.presidente}
            </h4>
            <p
              className={styles.secaoTexto}
              style={{
                fontStyle: 'italic',
                fontSize: '0.95rem',
                marginBottom: '1rem',
              }}
            >
              <strong>Clima da Sessão:</strong> {s.clima}
            </p>

            <div
              className={styles.heresiasGrid}
              style={{ marginBottom: '1rem' }}
            >
              {s.eventos.map((ev, eIdx) => (
                <div key={eIdx} className={styles.heresiaCard}>
                  <div className={styles.heresiaNome}>{ev.titulo}</div>
                  <div
                    className={styles.heresiaErro}
                    style={{
                      margin: '0.5rem 0',
                      color: '#3e3328',
                    }}
                  >
                    {ev.descricao}
                  </div>
                  <div
                    style={{
                      fontSize: '0.85rem',
                      color: '#8b6508',
                      marginTop: '0.5rem',
                      paddingTop: '0.5rem',
                      borderTop: '1px dashed #e2d9cb',
                    }}
                  >
                    🎯 <strong>Desdobramento:</strong>{' '}
                    {ev.desdobramento}
                  </div>
                </div>
              ))}
            </div>

            <div
              className={styles.destaque}
              style={{ textAlign: 'left', fontSize: '0.9rem' }}
            >
              <strong>Resultado da Sessão:</strong> {s.resultado}
            </div>
          </div>
        ))}
      </section>

      {/* =============================================
          10. PARTICIPANTES, BISPOS E AUSÊNCIAS
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>👤</span> Episcopado Presente e
          Ausências Notáveis
        </h2>

        <div style={{ marginBottom: '2rem' }}>
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.2rem',
              marginBottom: '0.5rem',
            }}
          >
            📊 Composição da Assembleia (
            {totalParticipantes.abertura}–{totalParticipantes.encerramento} participantes)
          </h3>
          <p className={styles.secaoTexto}>
            {totalParticipantes.resumoEstatistico}
          </p>
          <div
            className={styles.destaque}
            style={{ textAlign: 'left', marginTop: '0.5rem' }}
          >
            <strong>Perfil Geográfico:</strong>{' '}
            {totalParticipantes.proporcaoOrienteOcidente}
          </div>
        </div>

        {/* Bispos por Diocese */}
        <div
          style={{
            marginBottom: '2.5rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '1rem',
            }}
          >
            ⛪ Os Bispos do Concílio por Região / Patriarcado
          </h3>

          {participantes.map((grupo, gIdx) => (
            <div key={gIdx} style={{ marginBottom: '2rem' }}>
              <h4
                style={{
                  color: '#8b6508',
                  fontSize: '1.1rem',
                  marginBottom: '0.3rem',
                }}
              >
                {grupo.categoria}
              </h4>
              <p
                className={styles.secaoTexto}
                style={{
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                  marginBottom: '0.75rem',
                }}
              >
                {grupo.descricao}
              </p>

              <div className={styles.heresiasGrid}>
                {grupo.bisposNotaveis.map((b, bIdx) => (
                  <div key={bIdx} className={styles.heresiaCard}>
                    <div className={styles.heresiaNome}>{b.nome}</div>
                    <div className={styles.heresiaLider}>
                      📍 {b.se} ({b.patriarcadoOuRegiao}) ·{' '}
                      <strong>{b.papel}</strong>
                    </div>
                    <div
                      style={{
                        fontSize: '0.85rem',
                        color: '#8b6508',
                        marginBottom: '0.3rem',
                      }}
                    >
                      Função: {b.funcao}
                    </div>
                    {b.detalhes && (
                      <div
                        className={styles.heresiaErro}
                        style={{ fontSize: '0.9rem' }}
                      >
                        {b.detalhes}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Monofisitas Ausentes */}
        <div
          style={{
            marginBottom: '2.5rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            ⚡ {monofisitas.titulo}
          </h3>
          <p className={styles.secaoTexto}>{monofisitas.contexto}</p>
        </div>

        {/* Ausências Notáveis */}
        <div
          style={{
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            🚫 Ausências Notáveis
          </h3>

          <div
            className={styles.heresiasGrid}
            style={{ marginTop: '1rem' }}
          >
            {ausencias.map((aus, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>
                  {aus.nome} ({aus.regiao})
                </div>
                <div
                  className={styles.heresiaErro}
                  style={{ margin: '0.4rem 0' }}
                >
                  <strong>Motivo:</strong> {aus.motivo}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#8b6508' }}>
                  🎯 <strong>Impacto:</strong> {aus.impactoHistorico}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          11. PERSONAGENS-CHAVE (PROSOPOGRAFIA)
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>👑</span> Os Protagonistas e
          Figuras-Chave (Prosopografia)
        </h2>

        <p className={styles.secaoTexto}>
          Conheça em detalhes os imperadores, papas, patriarcas, teólogos e
          heresiarcas que moldaram os acontecimentos de Constantinopla II:
        </p>

        <div
          className={styles.heresiasGrid}
          style={{ marginTop: '1.5rem' }}
        >
          {personagens.map((p, i) => (
            <div
              key={i}
              className={styles.heresiaCard}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  className={styles.heresiaNome}
                  style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}
                >
                  {p.nome}
                </div>
                {p.nomeGrego && (
                  <div
                    style={{
                      fontSize: '0.85rem',
                      color: '#8b6508',
                      marginBottom: '0.4rem',
                      fontStyle: 'italic',
                    }}
                  >
                    {p.nomeGrego}
                  </div>
                )}

                <div
                  className={styles.heresiaLider}
                  style={{ marginBottom: '0.5rem' }}
                >
                  <strong>{p.titulo}</strong>
                  <br />
                  📅 {p.datas} | 📍 {p.origem}
                </div>

                <div
                  className={styles.heresiaErro}
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    marginBottom: '0.75rem',
                  }}
                >
                  <strong>Biografia:</strong> {p.biografia}
                </div>

                <div
                  style={{
                    background: '#f8f4ec',
                    padding: '0.6rem',
                    borderRadius: '6px',
                    marginBottom: '0.75rem',
                    borderLeft: '3px solid #8b6508',
                    fontSize: '0.9rem',
                  }}
                >
                  <strong>🏛️ Papel no Concílio:</strong>{' '}
                  {p.papelNoConcilio}
                </div>

                <div
                  style={{
                    fontSize: '0.9rem',
                    color: '#3e3328',
                    marginBottom: '0.75rem',
                  }}
                >
                  <strong>Legado:</strong> {p.legado}
                </div>

                {p.obras && p.obras.length > 0 && (
                  <div style={{ marginBottom: '0.75rem' }}>
                    <strong
                      style={{ fontSize: '0.85rem', color: '#8b6508' }}
                    >
                      📚 Principais Obras:
                    </strong>
                    <ul
                      style={{
                        margin: '0.2rem 0 0 1.1rem',
                        padding: 0,
                        fontSize: '0.85rem',
                        color: '#555',
                      }}
                    >
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
                    marginTop: '0.75rem',
                    paddingTop: '0.5rem',
                    borderTop: '1px dashed #e2d9cb',
                    fontStyle: 'italic',
                    fontSize: '0.85rem',
                    color: '#bd3a29',
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
          12. O CASO DO PAPA VIGÍLIO ⭐
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>⚡</span> O Caso Único do Papa
          Vigílio: A Maior Crise Papal da Antiguidade
        </h2>

        <p className={styles.secaoTexto}>{papado.introducao}</p>

        {/* --- 12.1 CRONOLOGIA DE VIGÍLIO --- */}
        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.25rem',
            marginTop: '1.5rem',
            marginBottom: '1rem',
          }}
        >
          ⏳ Cronologia Completa do Caso Vigílio (537–555)
        </h3>
        <div className={styles.presidentesLista}>
          {papado.cronologiaVigilio.map((ev, i) => (
            <div key={i} className={styles.presidenteItem}>
              <span className={styles.presidenteFase}>{ev.ano}</span>
              <div className={styles.presidenteInfo}>
                <h4>{ev.titulo}</h4>
                <p>{ev.descricao}</p>
                {ev.impacto && (
                  <p
                    style={{
                      marginTop: '0.5rem',
                      fontSize: '0.9rem',
                      color: '#bd3a29',
                    }}
                  >
                    <strong>Impacto:</strong> {ev.impacto}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* --- 12.2 ANÁLISE JURÍDICA --- */}
        <div
          style={{
            marginBottom: '2rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.2rem',
              marginBottom: '0.5rem',
            }}
          >
            ⚖️ Análise Jurídico-Canônica
          </h3>
          <p className={styles.secaoTexto}>{papado.analiseJuridica}</p>
        </div>

        {/* --- 12.3 AS TRÊS POSIÇÕES --- */}
        <div
          style={{
            marginBottom: '2rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.2rem',
              marginBottom: '0.5rem',
            }}
          >
            🔄 As Mudanças de Posição de Vigílio
          </h3>
          <p className={styles.secaoTexto}>
            {papado.posicoesTeologicas}
          </p>
        </div>

        {/* --- 12.4 IMPACTO NO PAPADO --- */}
        <div
          className={styles.destaque}
          style={{
            textAlign: 'left',
            borderLeftColor: '#bd3a29',
          }}
        >
          <strong style={{ color: '#bd3a29' }}>
            🛡️ Impacto na Autoridade Papal:
          </strong>{' '}
          {papado.impactoNoPapado}
        </div>
      </section>

      {/* =============================================
          13. OS 14 ANÁTEMAS DOGMÁTICOS NA ÍNTEGRA ⭐
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>📜</span> Os 14 Anátemas
          Dogmáticos na Íntegra
        </h2>
        <p className={styles.secaoTexto}>{anatemas.introducao}</p>

        <div style={{ marginTop: '1.5rem' }}>
          {anatemas.anatemas.map((a, i) => (
            <div
              key={i}
              className={styles.anatemaCard}
              style={{
                marginBottom: '2rem',
                background: '#fdfbf7',
                border: '1px solid #c4a96a',
                borderLeft: '4px solid #bd3a29',
                borderRadius: '8px',
                padding: '1.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem',
                }}
              >
                <span
                  className={styles.anatemaNumero}
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#bd3a29',
                    lineHeight: 1,
                  }}
                >
                  {a.numero}
                </span>
                <div>
                  <strong style={{ color: '#8b6508', fontSize: '1.1rem' }}>
                    Alvo: {a.alvo}
                  </strong>
                </div>
              </div>

              {a.textoLatim && (
                <div
                  className={styles.anatemaLatim}
                  style={{
                    fontStyle: 'italic',
                    fontSize: '0.9rem',
                    background: '#f5ece1',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    marginBottom: '0.75rem',
                    color: '#665',
                  }}
                >
                  <strong>Latim:</strong> &ldquo;{a.textoLatim}&rdquo;
                </div>
              )}

              <div
                style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.7',
                  marginBottom: '0.75rem',
                  color: '#2b1130',
                }}
              >
                <strong>Português:</strong> &ldquo;{a.textoPortugues}&rdquo;
              </div>

              <div
                style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  marginBottom: '0.75rem',
                  color: '#3e3328',
                }}
              >
                <strong style={{ color: '#8b6508' }}>Análise:</strong>{' '}
                {a.analise}
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  fontSize: '0.85rem',
                }}
              >
                {a.baseBiblica && (
                  <span style={{ color: '#2d6a4f' }}>
                    📖 <strong>Bases:</strong> {a.baseBiblica}
                  </span>
                )}
                {a.basePatristica && (
                  <span style={{ color: '#8b6508' }}>
                    👤 <strong>Padres:</strong> {a.basePatristica}
                  </span>
                )}
              </div>

              {a.conexoesComOutrosConcilios && (
                <div
                  style={{
                    marginTop: '0.75rem',
                    paddingTop: '0.5rem',
                    borderTop: '1px dashed #e2d9cb',
                    fontSize: '0.85rem',
                    color: '#5b2c83',
                  }}
                >
                  🔗 <strong>Conexões conciliares:</strong>{' '}
                  {a.conexoesComOutrosConcilios}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =============================================
          14. REAFIRMAÇÕES CREDIAS
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>📖</span> Reafirmações Credais
          e a Definição de Calcedônia
        </h2>
        <p className={styles.secaoTexto}>{credo.introducao.explicacao}</p>

        <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              Credo Niceno-Constantinopolitano
            </div>
            <div className={styles.heresiaErro}>{credo.credoNiceno.texto.portugues}</div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              Definição de Calcedônia (451)
            </div>
            <div className={styles.heresiaErro}>
              {credo.definicaoCalcedonia.textoCentral.portugues}
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              Fórmula Theopaschita
            </div>
            <div className={styles.heresiaErro}>
              {credo.formulaTheopaschita.texto.portugues}
            </div>
          </div>
        </div>

        {credo.comparacao && (
          <div
            className={styles.destaque}
            style={{ textAlign: 'left', marginTop: '1.5rem' }}
          >
            <strong style={{ color: '#8b6508' }}>
              📊 Comparação com os Credos Anteriores:
            </strong>{' '}
            {credo.comparacao.sinteseFinal}
          </div>
        )}
      </section>

      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>✝️</span> Doutrina Teológica do
          Concílio
        </h2>

        {/* --- 15.1 A SÍNTESE CIRILO-CALCEDONIANA --- */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            {sinteseCirilina.titulo}
          </h3>
          <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
            {([
              { conceito: 'Problema', explicacao: sinteseCirilina.problema },
              { conceito: 'Solução Neocalcedoniana', explicacao: sinteseCirilina.solucaoNeocalcedoniana },
              { conceito: 'Fórmula Chave', explicacao: sinteseCirilina.formulaChave },
              { conceito: 'Papel dos Doze Capítulos', explicacao: sinteseCirilina.papelDosDozeCapitulos },
              { conceito: 'Recepção', explicacao: sinteseCirilina.recepcao },
            ] as const).map((p, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{p.conceito}</div>
                <div className={styles.heresiaErro}>{p.explicacao}</div>
              </div>
            ))}
          </div>
        </div>

        {/* --- 15.2 GLOSSÁRIO TEOLÓGICO GREGO --- */}
        <div
          style={{
            marginBottom: '2.5rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '1rem',
            }}
          >
            🔤 Glossário de Termos Teológicos (Grego)
          </h3>
          <div className={styles.heresiasGrid}>
            {glossarioGrego.map((g, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>
                  {g.grego} — <small>{g.transliteracao}</small>
                </div>
                <div className={styles.heresiaErro}>
                  <strong>Definição:</strong> {g.definicao}
                </div>
                <small
                  style={{
                    color: '#8b6508',
                    display: 'block',
                    marginTop: '0.5rem',
                  }}
                >
                  💡 <strong>Uso no Concílio:</strong> {g.usoNoConcilio}
                </small>
              </div>
            ))}
          </div>
        </div>

        {/* --- 15.3 CRISTOLOGIA --- */}
        <div
          style={{
            marginBottom: '2.5rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            {cristologia.titulo}
          </h3>

          <h4
            style={{
              color: '#8b6508',
              marginTop: '1rem',
              marginBottom: '0.5rem',
            }}
          >
            Conceitos Cristológicos:
          </h4>
          <div className={styles.heresiasGrid}>
            {([
              { adicao: 'União Hipostática', explicacao: cristologia.uniaoHipostatica },
              { adicao: 'Enhypostasia', explicacao: cristologia.enhypostasia },
              { adicao: 'Comunicação de Idiomas', explicacao: cristologia.comunicacaoIdiomas },
              { adicao: 'Duas Vontades', explicacao: cristologia.duasVontades },
              { adicao: 'Distinção sem Separação', explicacao: cristologia.distincaoSemSeparacao },
            ] as const).map((ad, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>
                  &ldquo;{ad.adicao}&rdquo;
                </div>
                <div className={styles.heresiaErro}>{ad.explicacao}</div>
              </div>
            ))}
          </div>
        </div>

        {/* --- 15.4 THEOPASCHISMO --- */}
        <div
          style={{
            marginBottom: '2.5rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            {theopaschismo.titulo}
          </h3>

          <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>📜 A Fórmula</div>
              <div className={styles.heresiaErro}>
                {theopaschismo.formula}
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>⏳ Origem</div>
              <div className={styles.heresiaErro}>
                {theopaschismo.origem}
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>✅ Resolução</div>
              <div className={styles.heresiaErro}>
                {theopaschismo.resolucao}
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>💡 Justificativa Teológica</div>
              <div className={styles.heresiaErro}>
                {theopaschismo.justificativaTeologica}
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>❌ Oposição</div>
              <div className={styles.heresiaErro}>
                {theopaschismo.oposicao}
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>✝️ Implicações Soteriológicas</div>
              <div className={styles.heresiaErro}>
                {theopaschismo.implicacoesSoteriologicas}
              </div>
            </div>
          </div>
        </div>

        {/* --- 15.5 THEOTOKOS --- */}
        <div
          style={{
            marginBottom: '2.5rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            {theotokos.titulo}
          </h3>
          <p className={styles.secaoTexto}>{theotokos.definicaoDogmatica}</p>
          <p className={styles.secaoTexto}>{theotokos.theotokosPropria}</p>
          <p className={styles.secaoTexto}>{theotokos.aeiparthenos}</p>
          <p className={styles.secaoTexto}>{theotokos.contraChristotokos}</p>
          <p className={styles.secaoTexto}>{theotokos.dimensaoSoteriologica}</p>
        </div>

        {/* --- 15.6 PNEUMATOLOGIA --- */}
        <div
          style={{
            marginBottom: '2.5rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            {pneumatologia.titulo}
          </h3>
          <p className={styles.secaoTexto}>{pneumatologia.processao}</p>
          <p className={styles.secaoTexto}>{pneumatologia.consubstancialidade}</p>
          <p className={styles.secaoTexto}>{pneumatologia.papelNaEncarnacao}</p>
          <p className={styles.secaoTexto}>{pneumatologia.ausenciaDoFilioque}</p>
        </div>

        {/* --- 15.7 TABELA COMPARATIVA --- */}
        <div
          style={{
            marginBottom: '2.5rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '1rem',
            }}
          >
            📊 Comparação: Niceia (325) → Constantinopla I (381) → Éfeso
            (431) → Calcedônia (451) → Constantinopla II (553)
          </h3>
          <div className={styles.heresiasGrid}>
            {comparacaoCredos.map((cc, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{cc.aspecto}</div>
                <div style={{ fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                  <strong>Niceia-Constantinopla:</strong> &ldquo;{cc.niceiaConstantinopla}&rdquo;
                </div>
                <div style={{ fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                  <strong>Calcedônia:</strong> &ldquo;
                  {cc.calcedonia}&rdquo;
                </div>
                <div style={{ fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                  <strong>Constantinopla II:</strong> &ldquo;
                  {cc.constantinoplaII}&rdquo;
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- 15.8 CONDENACÕES DOUTRINÁRIAS --- */}
        <div
          style={{
            marginBottom: '2.5rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            ⚖️ Condenações Doutrinárias
          </h3>
          <div className={styles.heresiasGrid}>
            {condenacoes.map((c, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{c.erro}</div>
                <div className={styles.heresiaErro}>{c.formulacao}</div>
                <small
                  style={{
                    color: '#8b6508',
                    display: 'block',
                    marginTop: '0.5rem',
                  }}
                >
                  📖 <strong>Fundamento:</strong> {c.fundamento}
                </small>
              </div>
            ))}
          </div>
        </div>

        {/* --- 15.9 LIMITES DOUTRINÁRIOS --- */}
        <div
          style={{
            marginBottom: '2.5rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            Limites Doutrinários
          </h3>

          <div className={styles.heresiasGrid} style={{ margin: '1rem 0' }}>
            {limitesDoutrinarios.map((ld, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{ld.questao}</div>
                <div className={styles.heresiaErro}>{ld.posicao}</div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    marginTop: '0.4rem',
                    color: '#665',
                  }}
                >
                  <strong>Razão:</strong> {ld.razao}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       
      {/* =============================================
          16. A QUESTÃO DO ORIGENISMO (15 ANÁTEMAS) ⭐
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>🔮</span> A Questão do
          Origenismo e os 15 Anátemas contra Orígenes
        </h2>

        <p className={styles.secaoTexto}>{origenismo.introducao.panoramaGeral}</p>

        {/* --- 16.1 CONTEXTO --- */}
        <div
          style={{
            marginBottom: '2rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.2rem',
              marginBottom: '0.5rem',
            }}
          >
            📜 O Origenismo no Século VI
          </h3>
          <p className={styles.secaoTexto}>{origenismo.contexto.conteudoEdito}</p>
        </div>

        {/* --- 16.2 DEBATE HISTÓRICO --- */}
        <div
          className={styles.destaque}
          style={{
            textAlign: 'left',
            marginBottom: '2rem',
            borderLeftColor: '#5b2c83',
          }}
        >
          <strong style={{ color: '#5b2c83' }}>
            🔍 O Debate Histórico:
          </strong>{' '}
          {origenismo.oDebateHistorico.problemaCentral}
        </div>

        {/* --- 16.3 OS 15 ANÁTEMAS --- */}
        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.25rem',
            marginBottom: '1rem',
          }}
        >
          Os 15 Anátemas contra Orígenes
        </h3>

        <div style={{ marginTop: '1rem' }}>
          {origenismo.anatemas.map((a, i) => (
            <div
              key={i}
              style={{
                marginBottom: '1.5rem',
                background: '#faf7f5',
                border: '1px solid #d4c5e2',
                borderLeft: '4px solid #5b2c83',
                borderRadius: '8px',
                padding: '1.25rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.75rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#5b2c83',
                    lineHeight: 1,
                  }}
                >
                  {a.numero}
                </span>
                <strong style={{ color: '#5b2c83', fontSize: '1rem' }}>
                  {a.doutrinaCondenada}
                </strong>
              </div>

              <div
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  marginBottom: '0.5rem',
                  color: '#2b1130',
                }}
              >
                &ldquo;{a.textoPortugues}&rdquo;
              </div>

              {a.baseOrigenista && (
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: '#2d6a4f',
                    marginTop: '0.5rem',
                  }}
                >
                  📖 <strong>Base origenista:</strong> {a.baseOrigenista}
                </div>
              )}

              {a.refutacaoTeologica && (
                <div
                  style={{
                    fontSize: '0.82rem',
                    color: '#888',
                    marginTop: '0.3rem',
                    fontStyle: 'italic',
                  }}
                >
                  {a.refutacaoTeologica}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =============================================
          17. CÂNONES E SENTENÇAS
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>📜</span> Cânones, Sentenças e
          Decretos
        </h2>

        <p className={styles.secaoTexto}>{canones.introducao.ausenciaDeCanones}</p>

        {/* --- 17.1 SENTENÇA FINAL --- */}
        <div
          style={{
            marginBottom: '2rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.2rem',
              marginBottom: '0.5rem',
            }}
          >
            📜 A Sentença Final do Concílio
          </h3>
          <div
            style={{
              background: '#fdfbf7',
              border: '1px solid #c4a96a',
              borderRadius: '8px',
              padding: '1.5rem',
              fontSize: '1rem',
              lineHeight: '1.8',
              color: '#3e3328',
            }}
          >
            {canones.sentencaFinal.contexto}
          </div>
        </div>

        {/* --- 17.2 REFERÊNCIAS CRUZADAS --- */}
        <div className={styles.heresiasGrid} style={{ marginBottom: '2rem' }}>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>14 Anátemas Dogmáticos</div>
            <div className={styles.heresiaErro}>
              {canones.anatemas14.naturezaCanonica}
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              15 Anátemas contra Orígenes
            </div>
            <div className={styles.heresiaErro}>
              {canones.anatemas15.estatutoCanonico}
            </div>
          </div>
        </div>

        {/* --- 17.3 NOTA SOBRE CÂNONES --- */}
        <div
          className={styles.destaque}
          style={{ textAlign: 'left' }}
        >
          <strong style={{ color: '#8b6508' }}>
            📌 {canones.decretosDisciplinares.titulo}
          </strong>
          <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
            {canones.notaSobreCanones.recepcaoGeral}
          </p>
        </div>
      </section>

      {/* =============================================
          18. PARTIDOS TEOLÓGICOS E HERESIAS
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>⚔️</span> Partidos Teológicos
          e Correntes em 553
        </h2>

        <p className={styles.secaoTexto}>{resumoPartidos}</p>

        {/* Espectro Teológico */}
        <div
          className={styles.destaque}
          style={{ textAlign: 'left', margin: '1.5rem 0' }}
        >
          <strong style={{ color: '#8b6508' }}>
            🎨 O Espectro Teológico de 553:
          </strong>
          <ul
            style={{
              margin: '0.5rem 0 0 1.2rem',
              padding: 0,
              fontSize: '0.95rem',
              lineHeight: '1.6',
            }}
          >
            {espectroTeologico.map((esp, i) => (
              <li key={i}>{esp}</li>
            ))}
          </ul>
        </div>

        {/* Partidos Detalhados */}
        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.25rem',
            marginTop: '2rem',
            marginBottom: '1rem',
          }}
        >
          📋 Detalhamento das Correntes Doutrinárias
        </h3>

        <div className={styles.heresiasGrid}>
          {partidos.map((pt, i) => (
            <div
              key={i}
              className={styles.heresiaCard}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div
                className={styles.heresiaNome}
                style={{ fontSize: '1.15rem' }}
              >
                {pt.nome}
              </div>

              {pt.nomeAlternativo && (
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: '#665',
                    fontStyle: 'italic',
                    marginBottom: '0.3rem',
                  }}
                >
                  Também conhecidos como: {pt.nomeAlternativo}
                </div>
              )}

              <div
                className={styles.heresiaLider}
                style={{ marginBottom: '0.5rem' }}
              >
                👤 <strong>Líder:</strong> {pt.lider} | ⏳ {pt.periodo}
              </div>

              {pt.termoChave && (
                <div
                  style={{
                    fontStyle: 'italic',
                    fontSize: '0.85rem',
                    background: '#f5ece1',
                    padding: '0.4rem 0.6rem',
                    borderRadius: '4px',
                    marginBottom: '0.75rem',
                    color: '#665',
                  }}
                >
                  🔑 <strong>Termo-chave:</strong> {pt.termoChave}
                </div>
              )}

              <p
                className={styles.secaoTexto}
                style={{ fontSize: '0.95rem', marginBottom: '0.75rem' }}
              >
                {pt.descricao}
              </p>

              {pt.posicaoSobreOFilho && (
                <div
                  className={styles.heresiaErro}
                  style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}
                >
                  <strong>Posição cristológica:</strong>{' '}
                  {pt.posicaoSobreOFilho}
                </div>
              )}

              {pt.posicaoSobreCalcedonia && (
                <div
                  className={styles.heresiaErro}
                  style={{
                    marginBottom: '0.75rem',
                    fontSize: '0.9rem',
                    color: '#bd3a29',
                  }}
                >
                  <strong>Posição sobre Calcedônia:</strong>{' '}
                  {pt.posicaoSobreCalcedonia}
                </div>
              )}

              {pt.argumentosPrincipais &&
                pt.argumentosPrincipais.length > 0 && (
                  <div style={{ marginBottom: '0.75rem' }}>
                    <strong
                      style={{ color: '#8b6508', fontSize: '0.85rem' }}
                    >
                      Argumentos Principais:
                    </strong>
                    <ul
                      style={{
                        margin: '0.3rem 0 0 1.1rem',
                        padding: 0,
                        fontSize: '0.85rem',
                        color: '#444',
                      }}
                    >
                      {pt.argumentosPrincipais.map((arg, aIdx) => (
                        <li key={aIdx}>{arg}</li>
                      ))}
                    </ul>
                  </div>
                )}

              {pt.refutacao && (
                <div
                  style={{
                    background: '#fdfbf7',
                    borderLeft: '3px solid #8b6508',
                    padding: '0.6rem',
                    borderRadius: '4px',
                    marginBottom: '0.75rem',
                    fontSize: '0.85rem',
                  }}
                >
                  <strong>Refutação Ortodoxa:</strong> {pt.refutacao}
                </div>
              )}

              <div
                style={{
                  marginTop: 'auto',
                  paddingTop: '0.5rem',
                  borderTop: '1px solid #e2d9cb',
                  fontSize: '0.85rem',
                }}
              >
                <div>
                  📍 <strong>Base:</strong> {pt.baseGeografica} | 👥{' '}
                  <strong>Força:</strong> {pt.forcaNumerica}
                </div>
                <div
                  style={{
                    marginTop: '0.25rem',
                    color: '#8b6508',
                    fontWeight: '600',
                  }}
                >
                  Status: {pt.statusNoConcilio}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quem foi condenado por nome */}
        <div
          style={{
            marginTop: '2.5rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            ⚖️ {quemFoiCondenadoPorNome.titulo}
          </h3>
          <p className={styles.secaoTexto}>
            {quemFoiCondenadoPorNome.observacaoGeral}
          </p>
          <ul className={styles.resultadosLista} style={{ marginBottom: '1rem' }}>
            {quemFoiCondenadoPorNome.detalhes.map((det, i) => (
              <li key={i}>{det}</li>
            ))}
          </ul>
        </div>

        {/* O que não foi abordado */}
        <div
          style={{
            marginTop: '2.5rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            📌 {oQueNaoFoiTocado.titulo}
          </h3>
          <p className={styles.secaoTexto}>
            {oQueNaoFoiTocado.introducao}
          </p>
          <div
            className={styles.heresiasGrid}
            style={{ marginTop: '1rem' }}
          >
            {oQueNaoFoiTocado.itens.map((item, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{item.topico}</div>
                <div className={styles.heresiaErro}>
                  {item.explicacao}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          19. CONTROVÉRSIAS E TENSÕES
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>⚡</span> Controvérsias e
          Tensões do Concílio
        </h2>

        <p className={styles.secaoTexto}>{resumoControversias}</p>

        <div
          className={styles.heresiasGrid}
          style={{ marginTop: '1.5rem' }}
        >
          {controversias.map((c) => (
            <div
              key={c.id}
              className={styles.heresiaCard}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div
                className={styles.heresiaNome}
                style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}
              >
                {c.id}. {c.titulo}
              </div>

              <div
                className={styles.heresiaErro}
                style={{ marginBottom: '0.75rem' }}
              >
                <strong>Resumo:</strong> {c.resumo}
              </div>

              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  marginBottom: '0.75rem',
                  color: '#3e3328',
                }}
              >
                {c.detalhes}
              </p>

              <div style={{ marginBottom: '0.75rem' }}>
                <strong style={{ color: '#8b6508', fontSize: '0.9rem' }}>
                  Partes envolvidas:
                </strong>
                <ul
                  style={{
                    margin: '0.3rem 0 0 1.1rem',
                    padding: 0,
                    fontSize: '0.9rem',
                  }}
                >
                  {c.partesEnvolvidas.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  background: '#f8f4ec',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  marginBottom: '0.5rem',
                  borderLeft: '3px solid #c4a96a',
                }}
              >
                <div style={{ fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                  <strong style={{ color: '#8b6508' }}>
                    Resultado:
                  </strong>{' '}
                  {c.resultado}
                </div>
                <div style={{ fontSize: '0.9rem' }}>
                  <strong style={{ color: '#8b6508' }}>
                    Consequência de longo prazo:
                  </strong>{' '}
                  {c.consequenciaDeLongoPrazo}
                </div>
              </div>

              {c.fontes && c.fontes.length > 0 && (
                <small
                  style={{
                    color: '#8b6508',
                    marginTop: 'auto',
                    paddingTop: '0.5rem',
                  }}
                >
                  📚 Fontes: {c.fontes.join(' · ')}
                </small>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =============================================
          20. MITOS E ESCLARECIMENTOS
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

        <div
          className={styles.heresiasGrid}
          style={{ marginTop: '1.5rem' }}
        >
          {mitos.map((m) => (
            <div
              key={m.id}
              className={styles.heresiaCard}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div
                className={styles.heresiaNome}
                style={{ fontSize: '1.05rem' }}
              >
                Mito {m.id}: &ldquo;{m.mito}&rdquo;
              </div>

              <div
                style={{
                  display: 'inline-block',
                  alignSelf: 'flex-start',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  padding: '0.15rem 0.5rem',
                  borderRadius: '4px',
                  marginTop: '0.4rem',
                  marginBottom: '0.6rem',
                  background:
                    m.gravidade === 'alto'
                      ? '#fde8e8'
                      : m.gravidade === 'médio'
                      ? '#fff4e0'
                      : '#eef6ee',
                  color:
                    m.gravidade === 'alto'
                      ? '#bd3a29'
                      : m.gravidade === 'médio'
                      ? '#8b6508'
                      : '#2d6a4f',
                }}
              >
                Gravidade: {m.gravidade}
              </div>

              <div
                className={styles.heresiaErro}
                style={{ marginBottom: '0.6rem' }}
              >
                <strong>Realidade:</strong> {m.realidade}
              </div>

              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  marginBottom: '0.6rem',
                  color: '#3e3328',
                }}
              >
                <strong>Explicação:</strong> {m.explicacao}
              </p>

              <p
                style={{
                  fontSize: '0.9rem',
                  color: '#6b5839',
                  marginBottom: '0.5rem',
                }}
              >
                <strong>Origem do mito:</strong> {m.origemDoMito}
              </p>

              {m.fontes && m.fontes.length > 0 && (
                <small
                  style={{
                    color: '#8b6508',
                    marginTop: 'auto',
                    paddingTop: '0.4rem',
                  }}
                >
                  📚 Fontes: {m.fontes.join(' · ')}
                </small>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =============================================
          21. LEGADO TRANSVERSAL
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>🏛️</span> O Legado Transversal
          do Concílio
        </h2>

        {/* Legado Teológico */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            ✝️ {legado.impactoTeologico.titulo}
          </h3>
          <div
            className={styles.heresiasGrid}
            style={{ marginTop: '1rem' }}
          >
            {[
              { titulo: 'Triunfo Neocalcedoniano', descricao: legado.impactoTeologico.triunfoNeocalcedoniano },
              { titulo: 'Cirilo, Intérprete de Calcedônia', descricao: legado.impactoTeologico.ciriloInterpreteDeCalcedonia },
              { titulo: 'Base para o Monotelismo', descricao: legado.impactoTeologico.baseParaMonotelismo },
              { titulo: 'Influência na Teologia Posterior', descricao: legado.impactoTeologico.influenciaNaTeologiaPosterior },
            ].map((pt, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{pt.titulo}</div>
                <div className={styles.heresiaErro}>{pt.descricao}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Legado Eclesiástico */}
        <div
          style={{
            marginBottom: '2.5rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            ⛪ {legado.impactoEclesial.titulo}
          </h3>
          <div
            className={styles.heresiasGrid}
            style={{ marginTop: '1rem' }}
          >
            {[
              { titulo: 'Cicatrizes no Ocidente', descricao: legado.impactoEclesial.cicatrizesNoOcidente },
              { titulo: 'Ruptura com o Norte da Itália', descricao: legado.impactoEclesial.rupturaComNorteDaItalia },
              { titulo: 'Crise na África', descricao: legado.impactoEclesial.criseNaAfrica },
              { titulo: 'Fracasso com os Miáfisitas', descricao: legado.impactoEclesial.fracassoComMiafisitas },
              { titulo: 'Rejeição pela Igreja do Oriente', descricao: legado.impactoEclesial.rejeicaoPelaIgrejaDoOriente },
              { titulo: 'Balanço da Comunhão', descricao: legado.impactoEclesial.balancoDaComunhao },
            ].map((pt, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{pt.titulo}</div>
                <div className={styles.heresiaErro}>{pt.descricao}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Legado Político */}
        <div
          style={{
            marginBottom: '2.5rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            👑 {legado.impactoPolitico.titulo}
          </h3>
          <div
            className={styles.heresiasGrid}
            style={{ marginTop: '1rem' }}
          >
            {[
              { titulo: 'Apogeu da Sinfonia', descricao: legado.impactoPolitico.apogeuDaSinfonia },
              { titulo: 'Limites do Cesaropapismo', descricao: legado.impactoPolitico.limitesDoCesaropapismo },
              { titulo: 'Reação Ocidental', descricao: legado.impactoPolitico.reacaoOcidental },
              { titulo: 'Precedentes para Crises Futuras', descricao: legado.impactoPolitico.precedentesParaCrisesFuturas },
              { titulo: 'Legado para a Relação Igreja-Estado', descricao: legado.impactoPolitico.legadoParaRelacaoIgrejaEstado },
            ].map((pt, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{pt.titulo}</div>
                <div className={styles.heresiaErro}>{pt.descricao}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Principais Conquistas Doutrinárias */}
        <div
          style={{
            marginBottom: '2.5rem',
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            🏆 Principais Conquistas Doutrinárias
          </h3>
          <div
            className={styles.heresiasGrid}
            style={{ marginTop: '1rem' }}
          >
            {legado.principaisConquistas.map((cq) => (
              <div key={cq.id} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{cq.titulo}</div>
                <div className={styles.heresiaErro}>{cq.descricao}</div>
                <small
                  style={{
                    color: '#8b6508',
                    display: 'block',
                    marginTop: '0.5rem',
                  }}
                >
                  <strong>Permanência:</strong> {cq.permanencia}
                </small>
              </div>
            ))}
          </div>
        </div>

        {/* Reconhecimento Ecumênico e Resumo Final */}
        <div
          style={{
            borderTop: '1px solid #e0d7c6',
            paddingTop: '1.5rem',
          }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            📜 Reconhecimento Ecumênico Oficial
          </h3>
          <p className={styles.secaoTexto}>
            <strong>Confirmação Ecumênica:</strong>{' '}
            {f.reconhecimento.comoEcumenico}.
          </p>
          <p className={styles.secaoTexto}>
            <strong>Aceito universalmente por:</strong>{' '}
            {f.reconhecimento.aceito.join(', ')}.
          </p>

          <div
            className={styles.destaque}
            style={{
              textAlign: 'left',
              marginTop: '1rem',
              borderLeftColor: '#bd3a29',
            }}
          >
            <strong>Nota de Recepção Histórica:</strong>{' '}
            {f.reconhecimento.controversias}
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <h4
              style={{
                color: '#8b6508',
                fontSize: '1.1rem',
                marginBottom: '0.75rem',
              }}
            >
              Recepção não-calcedoniana
            </h4>
            <p className={styles.secaoTexto}>
              {recepcaoNaoCalcedoniana.introducao}
            </p>
            {recepcaoNaoCalcedoniana.declaracoesOficiais.map((decl, i) => (
              <div
                key={i}
                className={styles.presidenteItem}
                style={{ marginTop: '1rem' }}
              >
                <span className={styles.presidenteFase}>
                  {decl.data}
                </span>
                <div className={styles.presidenteInfo}>
                  <h4 style={{ color: '#8b6508', fontSize: '1rem' }}>
                    {decl.igreja}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: '#6b5839' }}>
                    <em>{decl.documentoReferencia}</em>
                  </p>
                  {decl.citacaoExata && (
                    <div
                      style={{
                        fontStyle: 'italic',
                        fontSize: '0.9rem',
                        color: '#4a3c28',
                        borderLeft: '3px solid #8b6508',
                        paddingLeft: '0.75rem',
                        marginTop: '0.5rem',
                      }}
                    >
                      &ldquo;{decl.citacaoExata}&rdquo;
                    </div>
                  )}
                  {decl.traducao && (
                    <p
                      style={{
                        fontSize: '0.85rem',
                        color: '#6b5839',
                        marginTop: '0.3rem',
                      }}
                    >
                      (tradução nossa): {decl.traducao}
                    </p>
                  )}
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: '#6b5839',
                      marginTop: '0.3rem',
                    }}
                  >
                    {decl.observacao}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            className={styles.secaoTexto}
            style={{
              marginTop: '1.5rem',
              fontWeight: '500',
              fontSize: '1.1rem',
            }}
          >
            {legado.resumoGeral}
          </p>
        </div>
      </section>

      {/* =============================================
          22. RECEPÇÃO HISTÓRICA (553 – ATUALIDADE)
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>⏳</span> Linha do Tempo da
          Recepção Histórica (553 d.C. – Atualidade)
        </h2>

        <p className={styles.secaoTexto}>{resumoRecepcao}</p>

        <div
          className={styles.presidentesLista}
          style={{ marginTop: '1.5rem' }}
        >
          {linhaDoTempoRecepcao.map((ev, i) => (
            <div key={i} className={styles.presidenteItem}>
              <span className={styles.presidenteFase}>{ev.periodo}</span>
              <div className={styles.presidenteInfo}>
                <h4>{ev.titulo}</h4>
                <p>{ev.descricao}</p>
                <p
                  style={{
                    marginTop: '0.5rem',
                    fontSize: '0.9rem',
                    color: '#6b5839',
                  }}
                >
                  <strong>Importância histórica:</strong>{' '}
                  {ev.importancia}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =============================================
          22.5. O TRISÁGIO E O LEGADO LITÚRGICO
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>🎵</span>{' '}
          {trisagionLegado.titulo}
        </h2>

        <p className={styles.secaoTexto}>
          {trisagionLegado.introducao}
        </p>

        <div
          className={styles.destaque}
          style={{
            textAlign: 'center',
            margin: '1.5rem auto',
            maxWidth: '500px',
            borderLeftColor: '#8b6508',
          }}
        >
          <div style={{ fontStyle: 'italic', fontSize: '1.1rem', color: '#4a3c28' }}>
            {trisagionLegado.hinoPrincipal.textoOriginal}
          </div>
          <div style={{ fontSize: '0.95rem', color: '#6b5839', marginTop: '0.3rem' }}>
            {trisagionLegado.hinoPrincipal.traducao}
          </div>
        </div>

        <p className={styles.secaoTexto}>
          <strong>Inserção filópio:</strong>{' '}
          {trisagionLegado.insercaoFilopio.contextoHistorico}
        </p>

        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.15rem',
            marginTop: '1.5rem',
            marginBottom: '0.75rem',
          }}
        >
          {trisagionLegado.controvérsia.titulo}
        </h3>
        <p className={styles.secaoTexto}>
          {trisagionLegado.controvérsia.corpo}
        </p>

        <p className={styles.secaoTexto} style={{ marginTop: '1rem' }}>
          {trisagionLegado.legadoLiturgico.corpo}
        </p>
      </section>

      {/* =============================================
          22.6. DEBATES HISTORIOGRÁFICOS
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>📜</span>{' '}
          {debatesHistoriograficos.titulo}
        </h2>

        <p className={styles.secaoTexto}>
          {debatesHistoriograficos.introducao}
        </p>

        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.15rem',
            marginTop: '1.5rem',
            marginBottom: '0.75rem',
          }}
        >
          {debatesHistoriograficos.debateLegitimidade.titulo}
        </h3>
        <p className={styles.secaoTexto}>
          {debatesHistoriograficos.debateLegitimidade.corpo}
        </p>

        <div
          className={styles.presidentesLista}
          style={{ marginTop: '1rem' }}
        >
          {debatesHistoriograficos.opcoesLegitimacao.opcoes.map((op, i) => (
            <div key={i} className={styles.presidenteItem}>
              <span className={styles.presidenteFase}>
                Opção {op.numero}
              </span>
              <div className={styles.presidenteInfo}>
                <h4>{op.titulo}</h4>
                <p>{op.texto}</p>
              </div>
            </div>
          ))}
        </div>

        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.15rem',
            marginTop: '1.5rem',
            marginBottom: '0.75rem',
          }}
        >
          Posições historiográficas
        </h3>
        <div
          className={styles.heresiasGrid}
          style={{ marginTop: '0.75rem' }}
        >
          {debatesHistoriograficos.posicoesHistoriograficas.map((pos, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{pos.autor}</div>
              <div className={styles.heresiaLider}>
                <em>{pos.tituloObra}</em> ({pos.anoObra})
              </div>
              <div className={styles.heresiaErro}>{pos.tese}</div>
            </div>
          ))}
        </div>

        <div
          className={styles.destaque}
          style={{
            textAlign: 'left',
            marginTop: '1.5rem',
            borderLeftColor: '#8b6508',
          }}
        >
          <strong>Consenso historiográfico:</strong>{' '}
          {debatesHistoriograficos.consensusHistoriografico}
        </div>
      </section>

      {/* =============================================
          22.7. PROSOPOGRAFIA DOS SIGNATÁRIOS
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>👥</span> Prosopografia dos
          Signatários
        </h2>

        <p className={styles.secaoTexto}>
          {prosopografiaSignatarios.introducao}
        </p>

        <p className={styles.secaoTexto}>
          {prosopografiaSignatarios.resumo}
        </p>

        {prosopografiaSignatarios.grupos.map((grupo, gi) => (
          <div key={gi} style={{ marginTop: '1.5rem' }}>
            <h3
              style={{
                color: '#8b6508',
                fontSize: '1.1rem',
                marginBottom: '0.5rem',
              }}
            >
              {grupo.categoria}
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                color: '#6b5839',
                marginBottom: '0.5rem',
              }}
            >
              {grupo.descricao}
            </p>
            <div
              className={styles.heresiasGrid}
              style={{
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              }}
            >
              {grupo.bispos.map((bispo, bi) => (
                <div
                  key={bi}
                  className={styles.heresiaCard}
                  style={{ padding: '0.5rem 0.75rem' }}
                >
                  <div
                    className={styles.heresiaNome}
                    style={{ fontSize: '0.9rem' }}
                  >
                    {bispo.nome}
                  </div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      color: '#6b5839',
                    }}
                  >
                    {bispo.se}
                  </div>
                  {bispo.observacao && (
                    <div
                      style={{
                        fontSize: '0.75rem',
                        color: '#8b6508',
                        marginTop: '0.2rem',
                      }}
                    >
                      {bispo.observacao}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <p
          className={styles.secaoTexto}
          style={{
            marginTop: '1rem',
            fontSize: '0.9rem',
            fontStyle: 'italic',
          }}
        >
          {prosopografiaSignatarios.notaVariacao}
        </p>
      </section>

      {/* =============================================
          23. FONTES E BIBLIOGRAFIA
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>📚</span> Fontes e Bibliografia
        </h2>

        <div
          className={styles.destaque}
          style={{ textAlign: 'left', marginBottom: '2rem' }}
        >
          <strong style={{ color: '#8b6508' }}>
            Nota metodológica:
          </strong>
          <p style={{ marginTop: '0.5rem' }}>
            {resumoFontes.observacao}
          </p>
          <p style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>
            <strong>Totais:</strong> {resumoFontes.totalPrimarias}{' '}
            fontes primárias · {resumoFontes.totalSecundarias}{' '}
            secundárias · {resumoFontes.totalModernas} modernas ·{' '}
            {resumoFontes.totalRecursos} recursos online
          </p>
        </div>

        {/* 1. Narrativas Históricas */}
        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.2rem',
            marginBottom: '1rem',
          }}
        >
          1. Fontes Primárias — Narrativas Históricas
        </h3>
        <div
          className={styles.heresiasGrid}
          style={{ marginBottom: '2rem' }}
        >
          {fontesPrimariasHistoricas.map((f, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{f.autor}</div>
              <div className={styles.heresiaLider}>
                <em>{f.titulo}</em> ({f.data}) · {f.idioma}
              </div>
              <div className={styles.heresiaErro}>{f.descricao}</div>
              <p
                style={{
                  fontSize: '0.9rem',
                  marginTop: '0.5rem',
                  color: '#6b5839',
                }}
              >
                <strong>Relevância:</strong> {f.relevancia}
              </p>
              {f.disponibilidade && (
                <small
                  style={{
                    color: '#8b6508',
                    display: 'block',
                    marginTop: '0.3rem',
                  }}
                >
                  📖 {f.disponibilidade}
                </small>
              )}
            </div>
          ))}
        </div>

        {/* 2. Documentos Oficiais */}
        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.2rem',
            marginBottom: '1rem',
          }}
        >
          2. Fontes Primárias — Documentos Oficiais e Papais
        </h3>
        <div
          className={styles.heresiasGrid}
          style={{ marginBottom: '2rem' }}
        >
          {fontesPrimariasDocumentos.map((f, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{f.autor}</div>
              <div className={styles.heresiaLider}>
                <em>{f.titulo}</em> ({f.data}) · {f.idioma}
              </div>
              <div className={styles.heresiaErro}>{f.descricao}</div>
              <p
                style={{
                  fontSize: '0.9rem',
                  marginTop: '0.5rem',
                  color: '#6b5839',
                }}
              >
                <strong>Relevância:</strong> {f.relevancia}
              </p>
              {f.disponibilidade && (
                <small
                  style={{
                    color: '#8b6508',
                    display: 'block',
                    marginTop: '0.3rem',
                  }}
                >
                  📖 {f.disponibilidade}
                </small>
              )}
            </div>
          ))}
        </div>

        {/* 3. Outros Padres e Teólogos */}
        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.2rem',
            marginBottom: '1rem',
          }}
        >
          3. Fontes Primárias — Outros Padres e Teólogos
        </h3>
        <div
          className={styles.heresiasGrid}
          style={{ marginBottom: '2rem' }}
        >
          {fontesPrimariasOutros.map((f, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{f.autor}</div>
              <div className={styles.heresiaLider}>
                <em>{f.titulo}</em> ({f.data}) · {f.idioma}
              </div>
              <div className={styles.heresiaErro}>{f.descricao}</div>
              <p
                style={{
                  fontSize: '0.9rem',
                  marginTop: '0.5rem',
                  color: '#6b5839',
                }}
              >
                <strong>Relevância:</strong> {f.relevancia}
              </p>
              {f.disponibilidade && (
                <small
                  style={{
                    color: '#8b6508',
                    display: 'block',
                    marginTop: '0.3rem',
                  }}
                >
                  📖 {f.disponibilidade}
                </small>
              )}
            </div>
          ))}
        </div>

        {/* 4. Fontes Secundárias Antigas */}
        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.2rem',
            marginBottom: '1rem',
          }}
        >
          4. Fontes Secundárias Antigas (séc. VI–XIII)
        </h3>
        <div
          className={styles.heresiasGrid}
          style={{ marginBottom: '2rem' }}
        >
          {fontesSecundarias.map((f, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{f.autor}</div>
              <div className={styles.heresiaLider}>
                <em>{f.titulo}</em> ({f.data}) · {f.idioma}
              </div>
              <div className={styles.heresiaErro}>{f.descricao}</div>
              <p
                style={{
                  fontSize: '0.9rem',
                  marginTop: '0.5rem',
                  color: '#6b5839',
                }}
              >
                <strong>Relevância:</strong> {f.relevancia}
              </p>
              {f.disponibilidade && (
                <small
                  style={{
                    color: '#8b6508',
                    display: 'block',
                    marginTop: '0.3rem',
                  }}
                >
                  📖 {f.disponibilidade}
                </small>
              )}
            </div>
          ))}
        </div>

        {/* 5. Fontes Modernas */}
        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.2rem',
            marginBottom: '1rem',
          }}
        >
          5. Fontes Modernas — Obras de Referência
        </h3>
        <div
          className={styles.heresiasGrid}
          style={{ marginBottom: '2rem' }}
        >
          {fontesModernas.map((f, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{f.autor}</div>
              <div className={styles.heresiaLider}>
                <em>{f.titulo}</em> ({f.data}) · {f.idioma}
              </div>
              <div className={styles.heresiaErro}>{f.descricao}</div>
              <p
                style={{
                  fontSize: '0.9rem',
                  marginTop: '0.5rem',
                  color: '#6b5839',
                }}
              >
                <strong>Relevância:</strong> {f.relevancia}
              </p>
              {f.disponibilidade && (
                <small
                  style={{
                    color: '#8b6508',
                    display: 'block',
                    marginTop: '0.3rem',
                  }}
                >
                  📖 {f.disponibilidade}
                </small>
              )}
            </div>
          ))}
        </div>

        {/* 6. Recursos Online */}
        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.2rem',
            marginBottom: '1rem',
          }}
        >
          6. Recursos Online e Coleções Digitais
        </h3>
        <div
          className={styles.heresiasGrid}
          style={{ marginBottom: '2rem' }}
        >
          {recursosOnline.map((r, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{r.nome}</div>
              <div className={styles.heresiaErro}>{r.descricao}</div>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#8b6508',
                  fontSize: '0.9rem',
                  marginTop: '0.5rem',
                  display: 'inline-block',
                }}
              >
                🔗 {r.url}
              </a>
            </div>
          ))}
        </div>

        {/* 7. Edições Críticas e Recursos Filológicos */}
        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.2rem',
            marginBottom: '1rem',
          }}
        >
          7. Edições Críticas e Recursos Filológicos
        </h3>
        <div
          className={styles.heresiasGrid}
          style={{ marginBottom: '1.5rem' }}
        >
          {edicoesPrimarias.map((ed, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{ed.editorCientifico}</div>
              <div className={styles.heresiaLider}>
                <em>{ed.titulo}</em> ({ed.dataPublicacao})
              </div>
              <div className={styles.heresiaErro}>{ed.observacao}</div>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: '#6b5839',
                  marginTop: '0.3rem',
                }}
              >
                {ed.localPublicacao}: {ed.editora} ·{' '}
                {ed.lingua.join(', ')}
              </p>
            </div>
          ))}
        </div>

        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.2rem',
            marginBottom: '1rem',
          }}
        >
          8. Recursos Digitais
        </h3>
        <div
          className={styles.heresiasGrid}
          style={{ marginBottom: '2rem' }}
        >
          {recursosDigitais.map((r, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{r.instituicao}</div>
              <div className={styles.heresiaLider}>
                <em>{r.titulo}</em>
              </div>
              <div className={styles.heresiaErro}>{r.observacao}</div>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#8b6508',
                  fontSize: '0.85rem',
                  marginTop: '0.3rem',
                  display: 'inline-block',
                  wordBreak: 'break-all',
                }}
              >
                🔗 {r.url}
              </a>
            </div>
          ))}
        </div>

        {/* Recomendações de Leitura */}
        <div className={styles.destaque} style={{ textAlign: 'left' }}>
          <strong style={{ color: '#8b6508' }}>
            📖 Recomendações de leitura:
          </strong>
          <ul
            className={styles.resultadosLista}
            style={{ marginTop: '0.75rem' }}
          >
            {resumoFontes.recomendacaoLeitura.map((rec, i) => (
              <li key={i}>{rec}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* =============================================
          24. NAVEGAÇÃO PARA OS DOCUMENTOS
         ============================================= */}
      <nav className={styles.navLinks}>
        <Link
          href="/estudos/concilios/constantinopla-2/documentos"
          className={styles.navLink}
        >
          📄 Consultar Documentos, Anátemas e Cânones Integrais →
        </Link>
      </nav>
    </ConcilioLayout>
  )
}