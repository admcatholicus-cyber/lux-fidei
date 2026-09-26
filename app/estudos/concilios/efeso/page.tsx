'use client'

import Link from 'next/link'
import { ConcilioLayout } from '../_shared/ConcilioLayout'
import { fichaConcilio } from './_data/ficha'
import { antecedentes, resumoAntecedentes } from './_data/antecedentes'
import { convocacao } from './_data/convocacao'
import { contextoPolitico, cronologiaPolitica } from './_data/contexto-politico'
import {
  participantes,
  legadosPapais,
  ausencias,
  totalParticipantes,
} from './_data/participantes'
import { personagens } from './_data/personagens'
import { sessoes, resumoSessoes, linhaDoTempoSessoes } from './_data/sessoes'
import { controversias, resumoControversias } from './_data/controversias'
import {
  partidos,
  resumoPartidos,
  espectroTeologico,
  quemFoiCondenadoPorNome,
  oQueNaoFoiTocado,
} from './_data/partidos'
import {
  theotokos,
  uniaoHipostatica,
  dozeAnatemas,
  cristologiaCiriliana,
  cristologiaNestoriana,
  comparacaoCristologias,
  glossarioGrego,
  condenacoesDoutrinarias,
  resumoTeologico,
} from './_data/doutrina'
import { canones } from './_data/canones'
import { credo } from './_data/credo'
import { mitos, resumoMitos } from './_data/mitos'
import { legado } from './_data/legado'
import { recepcao, resumoRecepcao } from './_data/recepcao'
import {
  fontesPrimariasHistoricas,
  fontesPrimariasCirilo,
  fontesPrimariasNestorio,
  fontesPrimariasDocumentos,
  fontesSecundarias,
  fontesModernas,
  recursosOnline,
  resumoFontes,
} from './_data/fontes'
import styles from './efeso.module.css'

export default function EfesoPage() {
  const f = fichaConcilio
  const conv = convocacao

  return (
    <ConcilioLayout
      numeroEcum="III Concílio Ecumênico"
      titulo={f.nome}
      subtitulo={`${f.nomeGrego} · ${f.nomeLatim}`}
      data={`${f.data.inicio} — ${f.data.fim}`}
      local={`📍 ${f.local.edificio}, ${f.local.cidade}`}
      proxLink="/estudos/concilios/calcedonia"
      proxTexto="Calcedônia (451)"
    >
      {/* =============================================
          1. CTA — DOSSIÊ DOCUMENTAL
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
          Entre no Dossiê Documental de Éfeso
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
          <strong style={{ color: '#2b1130' }}>8 Cânones na íntegra</strong>, os{' '}
          <strong style={{ color: '#2b1130' }}>12 Anátemas de Cirilo</strong>,
          as cartas de Nestório e Cirilo, a{' '}
          <strong style={{ color: '#2b1130' }}>Fórmula de União (433)</strong>,
          os Atos conciliares (ACO de Schwartz), e o{' '}
          <em>Bazaar de Heracleides</em> — tudo organizado para estudo sério.
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
            { text: 'Atos (ACO)', aba: 'atos' },
            { text: 'Cânones', aba: 'canones' },
            { text: '12 Anátemas', aba: 'anatemas' },
            { text: 'Cartas Cirilo', aba: 'cirilo' },
            { text: 'Cartas Nestório', aba: 'nestorio' },
            { text: 'Celestino I', aba: 'celestino' },
            { text: 'Fórmula 433', aba: 'formula' },
            { text: 'Éditos Imperiais', aba: 'editos' },
            { text: 'Bazaar', aba: 'bazaar' },
          ].map((item) => (
            <Link
              key={item.text}
              href={`/estudos/concilios/efeso/documentos?aba=${item.aba}`}
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
          href="/estudos/concilios/efeso/documentos"
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
          2. FICHA RÁPIDA DE DADOS
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
            <small>Confirmado por Calcedônia (451)</small>
          </div>
        </div>
      </section>

      <div
        className={styles.destaque}
        style={{ fontSize: '0.9rem', marginTop: '-1rem', marginBottom: '2rem' }}
      >
        ⚠️ <strong>Nota sobre os Participantes:</strong>{' '}
        {f.participantes.observacao}
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
          Cinquenta anos após o Concílio de Constantinopla (381), a Igreja
          enfrentava uma nova e devastadora controvérsia cristológica. Nestório,
          Patriarca de Constantinopla e herdeiro da Escola de Antioquia,
          questionou publicamente o título tradicional de{' '}
          <em>Theotokos</em> (Mãe de Deus) atribuído à Virgem Maria, propondo em
          seu lugar <em>Christotokos</em> (Mãe de Cristo). A reação de Cirilo de
          Alexandria, apoiado pelo Papa Celestino I e pela Augusta Pulquéria,
          levou à convocação do III Concílio Ecumênico na cidade mariana de
          Éfeso, onde a fé na Encarnação do Verbo seria definida de forma
          irreversível.
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
          Convocado pelo imperador Teodósio II, o concílio foi reunido na{' '}
          <strong>{conv.logistica.localEscolhido.edificio}</strong>, em {conv.logistica.localEscolhido.cidade}. A escolha de Éfeso foi uma decisão estratégica de múltiplas camadas.
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
          A convocação foi impulsionada por <strong>seis</strong> grandes
          motivações:
        </p>

        <div className={styles.heresiasGrid}>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              1. {conv.motivacoes.teologica.titulo}
            </div>
            <div className={styles.heresiaErro}>
              {conv.motivacoes.teologica.descricao}
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              2. {conv.motivacoes.politica.titulo}
            </div>
            <div className={styles.heresiaErro}>
              {conv.motivacoes.politica.descricao}
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              3. {conv.motivacoes.jurisdicional.titulo}
            </div>
            <div className={styles.heresiaErro}>
              {conv.motivacoes.jurisdicional.descricao}
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              4. {conv.motivacoes.eclesial.titulo}
            </div>
            <div className={styles.heresiaErro}>
              {conv.motivacoes.eclesial.descricao}
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              5. {conv.motivacoes.social.titulo}
            </div>
            <div className={styles.heresiaErro}>
              {conv.motivacoes.social.descricao}
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              6. {conv.motivacoes.imperial.titulo}
            </div>
            <div className={styles.heresiaErro}>
              {conv.motivacoes.imperial.descricao}
            </div>
          </div>
        </div>

        <div
          className={styles.destaque}
          style={{ textAlign: 'left', marginTop: '1.5rem' }}
        >
          <strong style={{ color: '#8b6508' }}>{conv.tresFrentes.titulo}</strong>
          <p style={{ marginTop: '0.5rem' }}>{conv.tresFrentes.descricao}</p>
        </div>
      </section>

      {/* =============================================
          5. DESTAQUE — THEOTOKOS
         ============================================= */}
      <div className={styles.destaque}>
        &ldquo;Se alguém não confessa que o Emanuel é verdadeiramente Deus e
        que, portanto, a Santa Virgem é <em>Theotokos</em> — pois gerou
        segundo a carne o Verbo de Deus feito carne — seja anátema.&rdquo;
        <br />
        <small
          style={{
            fontStyle: 'normal',
            display: 'block',
            marginTop: '1rem',
            color: '#8b6508',
          }}
        >
          — Cirilo de Alexandria, 1º Anátema contra Nestório (430 d.C.), lido e
          aprovado na Sessão I do Concílio de Éfeso (22 de junho de 431).
        </small>
      </div>

      {/* =============================================
          6. FASES, SESSÕES E PRESIDÊNCIA
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>👑</span> Fases, Sessões e
          Presidência do Concílio
        </h2>

        <p className={styles.secaoTexto}>{resumoSessoes}</p>

        {/* 6.1 SUCESSÃO DA PRESIDÊNCIA */}
        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.1rem',
            marginTop: '1.5rem',
            marginBottom: '0.75rem',
          }}
        >
          👤 Sucessão da Presidência
        </h3>
        <div className={styles.presidentesLista} style={{ marginBottom: '2rem' }}>
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

        {/* 6.2 LINHA DO TEMPO */}
        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.1rem',
            marginBottom: '0.75rem',
          }}
        >
          ⏳ Linha do Tempo dos Trabalhos Conciliares (Junho – Julho 431)
        </h3>
        <div className={styles.presidentesLista} style={{ marginBottom: '2.5rem' }}>
          {linhaDoTempoSessoes.map((ev, i) => (
            <div key={i} className={styles.presidenteItem}>
              <span className={styles.presidenteFase}>{ev.data}</span>
              <div className={styles.presidenteInfo}>
                <h4>{ev.evento}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* 6.3 DETALHAMENTO DAS FASES */}
        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.25rem',
            marginBottom: '1rem',
          }}
        >
          🏛️ Detalhamento das Fases e seus Eventos
        </h3>

        {sessoes.map((s, sIdx) => (
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
              {s.fase}: Presidência de {s.presidente} ({s.periodo})
            </h4>
            <p
              className={styles.secaoTexto}
              style={{
                fontStyle: 'italic',
                fontSize: '0.95rem',
                marginBottom: '1rem',
              }}
            >
              <strong>Clima da Fase:</strong> {s.clima}
            </p>

            <div className={styles.heresiasGrid} style={{ marginBottom: '1rem' }}>
              {s.eventos.map((ev, eIdx) => (
                <div key={eIdx} className={styles.heresiaCard}>
                  <div className={styles.heresiaNome}>{ev.titulo}</div>
                  <div
                    className={styles.heresiaErro}
                    style={{ margin: '0.5rem 0', color: '#3e3328' }}
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
                    🎯 <strong>Desdobramento:</strong> {ev.desdobramento}
                  </div>
                </div>
              ))}
            </div>

            <div
              className={styles.destaque}
              style={{ textAlign: 'left', fontSize: '0.9rem' }}
            >
              <strong>Resultado da Fase:</strong> {s.resultado}
            </div>
          </div>
        ))}
      </section>

      {/* =============================================
          7. ANTECEDENTES HISTÓRICOS (381–431)
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>⏳</span> Antecedentes Históricos:
          Os 50 Anos Entre Constantinopla e Éfeso (381–431)
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
                      <strong>Importância histórica:</strong> {ev.importancia}
                    </p>
                    {ev.fontes && ev.fontes.length > 0 && (
                      <small
                        style={{
                          color: '#8b6508',
                          display: 'block',
                          marginTop: '0.3rem',
                        }}
                      >
                        📚 <strong>Fontes:</strong> {ev.fontes.join(' · ')}
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
          8. CONTEXTO POLÍTICO E ÉDITOS IMPERIAIS
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>🏛️</span> Contexto Político:
          Teodósio II, Pulquéria e o Império em 431
        </h2>

        {/* 8.1 O ESTADO DO IMPÉRIO */}
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

        {/* 8.1B A ECONOMIA DA CONTROVÉRSIA */}
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
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            💰 A Economia da Controvérsia: Financiamento, Subornos e Logística
          </h3>
          <p className={styles.secaoTexto}>
            Reunir um concílio ecumênico no século V era uma operação logística
            e financeira de enormes proporções: viagem de 200–340 bispos com
            séquitos (diáconos, presbíteros, servos, guias) por mar e terra
            durante semanas; hospedagem em Éfeso por ~5 semanas (22 de junho a
            31 de julho, retardatários até outubro); segurança da unidade de{' '}
            <em>domestici</em> do conde Candidiano paga pelo erário imperial.
          </p>
          <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>O Suborno de Cirilo</div>
              <div className={styles.heresiaErro}>
                Os Atos (ACO) revelam que Cirilo usou a fortuna alexandrina
                para subornar a corte: lista de presentes (Ep. 96 a Máximo)
                inclui ouro, tapetes e marfim à Augusta Pulquéria, à imperatriz
                Eudócia, aos eunucos imperiais e a altos funcionários — milhares
                de solidi. Prática comum na política imperial do séc. V para
                cultivar alianças.
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>
                Alexandria vs. Antioquia
              </div>
              <div className={styles.heresiaErro}>
                Assimetria crucial: Alexandria controlava as riquezas do Egito
                — celeiro do Mediterrâneo, província mais rica. Antioquia era
                comparativamente mais pobre e incapaz de financiar operações na
                corte. Isto explica em parte por que Cirilo &ldquo;comprou&rdquo;
                apoio imperial enquanto João de Antioquia não pôde.
              </div>
            </div>
          </div>
        </div>

        {/* 8.2 TEODÓSIO II */}
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
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            {contextoPolitico.teodosioII.titulo}
          </h3>
          <p className={styles.secaoTexto}>
            {contextoPolitico.teodosioII.descricao}
          </p>
        </div>

        {/* 8.3 PULQUÉRIA */}
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
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            {contextoPolitico.pulqueria.titulo}
          </h3>
          <p className={styles.secaoTexto}>
            {contextoPolitico.pulqueria.descricao}
          </p>
        </div>

        {/* 8.4 ÉFESO COMO LOCAL */}
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

        {/* 8.5 ÉDITOS IMPERIAIS */}
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
            📜 Os Grandes Éditos e Sacras Imperiais
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
                      <strong>Original:</strong>
                      <br />
                      &ldquo;{ed.texto}&rdquo;
                    </div>
                  )}
                  <div
                    className={styles.heresiaErro}
                    style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}
                  >
                    <strong>Tradução/Resumo:</strong> &ldquo;{ed.traducao}
                    &rdquo;
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
                    style={{ color: '#888', display: 'block', marginTop: '0.4rem' }}
                  >
                    <br />
                    Fonte: {ed.fonte}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8.6 RELAÇÃO IGREJA-ESTADO */}
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

        {/* 8.7 CRONOLOGIA POLÍTICA */}
        <div
          style={{ borderTop: '1px solid #e0d7c6', paddingTop: '1.5rem' }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '1rem',
            }}
          >
            ⏳ Linha do Tempo Política (408–451)
          </h3>
          <div className={styles.presidentesLista}>
            {cronologiaPolitica.map((cp, i) => (
              <div key={i} className={styles.presidenteItem}>
                <span className={styles.presidenteFase}>{cp.ano}</span>
                <div className={styles.presidenteInfo}>
                  <h4 style={{ margin: 0, fontWeight: '500' }}>{cp.evento}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          8B. ARQUEOLOGIA DE ÉFESO — O CENÁRIO MATERIAL
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>🏛️</span> Arqueologia de Éfeso: O
          Cenário Material do Concílio
        </h2>

        <p className={styles.secaoTexto}>
          As escavações arqueológicas em Éfeso (atual Selçuk, Turquia),
          conduzidas desde 1863 (primeiro pelo Museu Imperial de Viena, depois
          pela Universidade de Viena, e atualmente pelo Instituto Arqueológico
          Austríaco), revelaram uma cidade de extraordinária riqueza e
          complexidade. No século V, quando o Concílio se reuniu, Éfeso era uma
          metrópole com aproximadamente 50.000 habitantes, porto ativo (embora
          em processo de assoreamento), e centro cristão vibrante.
        </p>

        <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              A Igreja de Santa Maria (Theotokos)
            </div>
            <div className={styles.heresiaErro}>
              O local exato onde o Concílio se reuniu é a Igreja de Santa
              Maria, basílica do século IV. Nave central de ~26m por 13m, duas
              naves laterais separadas por colunas, ábside oriental e átrio
              onde a multidão se reunia. Construída sobre edifício romano
              anterior (possivelmente o Museion). Dedicação à Theotokos
              atestada por Sócrates (HE VII.34) e inscrições.
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>O Arco de Verulanus</div>
            <div className={styles.heresiaErro}>
              Grande edifício porticado (~160m de comprimento) identificado nas
              escavações. Embora a conexão direta com o Concílio seja debatida,
              algumas reconstruções sugerem que os bispos se hospedaram nesta
              estrutura ou em edifícios adjacentes.
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              A Casa da Virgem Maria (Meryem Ana Evi)
            </div>
            <div className={styles.heresiaErro}>
              Tradição local desde o séc. V afirma que Maria viveu seus últimos
              anos nas colinas próximas, sob proteção de João. Localizada no
              topo da colina Bülbüldağı (7 km de Éfeso), edifício do séc. I com
              restaurações posteriores. Hoje santuário visitado por cristãos e
              muçulmanos; visitado por Paulo VI (1967), João Paulo II (1979) e
              Bento XVI (2006).
              <br />
              <br />
              <strong>Relevância:</strong> a tradição mariana foi fator
              decisivo na escolha da sede — julgar quem negava a Theotokos na
              cidade onde Maria vivera.
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              O Templo de Ártemis (Diana)
            </div>
            <div className={styles.heresiaErro}>
              Uma das Sete Maravilhas, destruído em 401 por ordem de Arcádio.
              Em 431 já estava em ruínas há 30 anos. A destruição do templo
              pagão mais famoso e a reunião do concílio mais mariano na mesma
              cidade é uma coincidência simbólica poderosa.
            </div>
          </div>
        </div>

        <div
          className={styles.destaque}
          style={{ textAlign: 'left', marginTop: '1.5rem' }}
        >
          <strong style={{ color: '#8b6508' }}>
            Achados Arqueológicos Relevantes:
          </strong>
          <ul
            className={styles.resultadosLista}
            style={{ marginTop: '0.5rem' }}
          >
            <li>
              <strong>Inscrições cristãs séc. IV-V:</strong> múltiplas
              inscrições em grego com referências à Theotokos, a Cristo e a
              bispos locais.
            </li>
            <li>
              <strong>Mosaicos da basílica:</strong> fragmentos com cruz, pomba
              e peixe recuperados na Igreja de Santa Maria.
            </li>
            <li>
              <strong>Necrópole cristã:</strong> extenso cemitério séc. IV-V
              com sarcófagos decorados com cenas bíblicas.
            </li>
          </ul>
          <p style={{ marginTop: '0.75rem', fontSize: '0.85rem' }}>
            📚 Fontes: Hilke Thür, Ephesos from Hellenistic to Roman Period
            (Vienna, 2019) · Anton Bammer, Das Artemision von Ephesos (Mainz,
            1984) · Stefan Karwiese, Die Marienkirche in Ephesos (Vienna, 1989)
            · Österreichisches Archäologisches Institut — Ephesus Excavations
          </p>
        </div>
      </section>

      {/* =============================================
          9. PARTICIPANTES, BISPOS E AUSÊNCIAS
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
            📊 Composição da Assembleia ({totalParticipantes.estimativa})
          </h3>
          <p className={styles.secaoTexto}>{totalParticipantes.certeza}</p>
          <div
            className={styles.destaque}
            style={{ textAlign: 'left', marginTop: '0.5rem' }}
          >
            <strong>Perfil Geográfico:</strong>{' '}
            {totalParticipantes.composicao}
          </div>
        </div>

        {/* BISPOS POR PARTIDO */}
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
            ⛪ Os Bispos do Concílio por Partido
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
                {grupo.titulo}
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
                {grupo.bispos.map((b, bIdx) => (
                  <div key={bIdx} className={styles.heresiaCard}>
                    <div className={styles.heresiaNome}>{b.nome}</div>
                    <div className={styles.heresiaLider}>
                      📍 {b.sede} ({b.provincia}) · <strong>{b.papel}</strong>
                    </div>
                    <div
                      style={{
                        fontSize: '0.85rem',
                        color: '#8b6508',
                        marginBottom: '0.3rem',
                      }}
                    >
                      Partido: {b.partido}
                    </div>
                    {b.observacoes && (
                      <div
                        className={styles.heresiaErro}
                        style={{ fontSize: '0.9rem' }}
                      >
                        {b.observacoes}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* LEGADOS PAPAIS */}
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
            🇻🇦 {legadosPapais.titulo}
          </h3>
          <p className={styles.secaoTexto}>{legadosPapais.descricao}</p>
          <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
            {legadosPapais.legados.map((lg, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{lg.nome}</div>
                <div className={styles.heresiaLider}>
                  {lg.titulo} · {lg.papel}
                </div>
              </div>
            ))}
          </div>
          <div
            className={styles.destaque}
            style={{ textAlign: 'left', marginTop: '1rem' }}
          >
            <strong>Chegada:</strong> {legadosPapais.chegada}
            <br />
            <strong>Ação:</strong> {legadosPapais.acao}
          </div>
        </div>

        {/* AUSÊNCIAS */}
        <div
          style={{ borderTop: '1px solid #e0d7c6', paddingTop: '1.5rem' }}
        >
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            🚫 {ausencias.titulo}
          </h3>
          <p className={styles.secaoTexto}>{ausencias.descricao}</p>
          <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
            {ausencias.ausentes.map((aus, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>
                  {aus.nome} ({aus.sede})
                </div>
                <div
                  className={styles.heresiaErro}
                  style={{ margin: '0.4rem 0' }}
                >
                  <strong>Razão da Ausência:</strong> {aus.razao}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#8b6508' }}>
                  🎯 <strong>Impacto:</strong> {aus.impacto}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          10. PERSONAGENS-CHAVE (PROSOPOGRAFIA)
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>👑</span> Os Protagonistas e
          Figuras-Chave (Prosopografia)
        </h2>

        <p className={styles.secaoTexto}>
          Conheça em detalhes os imperadores, bispos, teólogos, papas e
          heresiarcas que moldaram os acontecimentos e os debates de Éfeso:
        </p>

        <div className={styles.heresiasGrid} style={{ marginTop: '1.5rem' }}>
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
                  <strong>🏛️ Papel no Concílio:</strong> {p.papelNoConcilio}
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
          11. CONTROVÉRSIAS E TENSÕES
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>⚡</span> Controvérsias e Tensões
          do Concílio
        </h2>

        <p className={styles.secaoTexto}>{resumoControversias}</p>

        <div className={styles.heresiasGrid} style={{ marginTop: '1.5rem' }}>
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
                  {c.partesEnvolvidas.map((pt, i) => (
                    <li key={i}>{pt}</li>
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
                  <strong style={{ color: '#8b6508' }}>Resultado:</strong>{' '}
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

        {/* 11.7 OS MONGES COMO ATORES POLÍTICOS */}
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
            7. Os Monges como Atores Políticos: O Monaquismo em Éfeso
          </h3>
          <p className={styles.secaoTexto}>
            Os monges foram, ao lado dos bispos e do imperador, os terceiros
            grandes atores do Concílio de Éfeso. Longe de serem observadores
            passivos, os monges egípcios, palestinos, sírios e
            constantinopolitanos desempenharam papéis decisivos — como
            mobilizadores populares, como força de pressão política e como
            guardiães da ortodoxia.
          </p>
          <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>
                Os Monges Egípcios — A Força de Choque de Cirilo
              </div>
              <div className={styles.heresiaErro}>
                Cirilo mobilizou milhares de monges do Egito para Éfeso. Estes
                monges, organizados em comunidades monásticas sob a autoridade
                do patriarca de Alexandria, constituíam uma força política sem
                equivalente no Oriente. Quando Cirilo escreveu sua Carta
                Encíclica aos Monges do Egito (Ep. ad Monachos Aegypti, início
                de 429), alertando-os contra a &ldquo;nova heresia&rdquo; de
                Nestório, os monges se mobilizaram imediatamente. Em Éfeso, os
                monges egípcios cercaram a Igreja de Santa Maria durante a
                Sessão I, patrulharam as ruas da cidade e intimidaram os
                bispos nestorianos. O papel dos monges como
                &ldquo;milícia monástica&rdquo; de Cirilo é documentado nos
                Atos e nas fontes narrativas (Sócrates, HE VII.34).
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>
                O Abade Dalmácio e os Monges de Constantinopla
              </div>
              <div className={styles.heresiaErro}>
                O abade Dalmácio de Constantinopla, que segundo as fontes não
                saía de seu mosteiro há 48 anos, liderou uma procissão de
                monges até o palácio imperial em setembro de 431, exigindo a
                libertação de Cirilo. Sua intervenção foi decisiva: a pressão
                dos monges constantinopolitanos, aliada à de Pulquéria, forçou
                Teodósio II a libertar Cirilo e confirmar a deposição de
                Nestório. O episódio demonstra que os monges não eram meros
                contemplativos, mas atores políticos de primeira grandeza no
                Império tardo-antigo.
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>
                Os Monges Sírios e o Partido Antioqueno
              </div>
              <div className={styles.heresiaErro}>
                Do outro lado, os monges sírios apoiaram João de Antioquia e
                participaram do contra-concílio. O monaquismo siríaco, centrado
                em mosteiros como o de Euprepius (onde Nestório e João haviam
                estudado juntos), era profundamente ligado à tradição
                antioquena e rejeitava a linguagem ciriliana como
                apolinarista. Os monges sírios que participaram do
                contra-concílio de 26–27 de junho foram posteriormente
                suspensos pela Fórmula de União (433).
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>
                O Mônada Imperial — Pulquéria e os Conventos de Constantinopla
              </div>
              <div className={styles.heresiaErro}>
                A Augusta Pulquéria mantinha uma rede de mosteiros e conventos
                femininos em Constantinopla, que serviam tanto como centros de
                piedade mariana quanto como instrumentos de influência
                política. Quando Pulquéria precisou pressionar Teodósio II, ela
                mobilizou os monges e monjas da capital em procissões e
                vigílias que colocavam a piedade popular contra a indecisão
                imperial.
              </div>
            </div>
          </div>
          <div
            className={styles.destaque}
            style={{ textAlign: 'left', marginTop: '1rem' }}
          >
            <strong>Relevância:</strong> O papel dos monges em Éfeso demonstra
            que os concílios ecumênicos não eram assembleias puramente
            episcopais, mas eventos nos quais o monaquismo — a força espiritual
            e social mais dinâmica do cristianismo tardo-antigo — exercia
            pressão decisiva.
            <br />
            <small style={{ color: '#8b6508', display: 'block', marginTop: '0.5rem' }}>
              📚 <strong>Fontes:</strong> Sócrates Escolástico, HE VII.34 ·
              Cirilo de Alexandria, Ep. ad Monachos Aegypti (PG 77, 13–39) ·
              Palladius, Dialogus de Vita Chrysostomi · William Harmless,
              Desert Christians (Oxford 2004)
            </small>
          </div>
        </div>
      </section>

      {/* =============================================
          12. PARTIDOS TEOLÓGICOS
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>⚔️</span> Partidos Teológicos:
          Alexandria vs Antioquia
        </h2>

        <p className={styles.secaoTexto}>{resumoPartidos}</p>

        <div
          className={styles.destaque}
          style={{ textAlign: 'left', margin: '1.5rem 0' }}
        >
          <strong style={{ color: '#8b6508' }}>
            🎨 O Espectro Teológico do Século V:
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

        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.25rem',
            marginTop: '2rem',
            marginBottom: '1rem',
          }}
        >
          📋 Detalhamento das Escolas e Correntes
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
              <p
                className={styles.secaoTexto}
                style={{ fontSize: '0.95rem', marginBottom: '0.75rem' }}
              >
                {pt.descricao}
              </p>
              <div
                className={styles.heresiaErro}
                style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}
              >
                <strong>Posição sobre Theotokos:</strong>{' '}
                {pt.posicaoTheotokos}
              </div>
              <div
                className={styles.heresiaErro}
                style={{
                  marginBottom: '0.75rem',
                  fontSize: '0.9rem',
                  color: '#bd3a29',
                }}
              >
                <strong>Cristologia:</strong> {pt.cristologia}
              </div>
              <div style={{ marginBottom: '0.75rem' }}>
                <strong style={{ color: '#8b6508', fontSize: '0.85rem' }}>
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

        {/* QUEM FOI CONDENADO */}
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

        {/* O QUE NÃO FOI TOCADO */}
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
          <p className={styles.secaoTexto}>{oQueNaoFoiTocado.introducao}</p>
          <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
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
          13. OS 8 CÂNONES NA ÍNTEGRA
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>📜</span> Os 8 Cânones
          Disciplinares na Íntegra
        </h2>
        <p className={styles.secaoTexto}>
          O Concílio de Éfeso promulgou oito cânones que legislam sobre a
          condenação do nestorianismo, a jurisdição episcopal, a proibição de
          novos credos e a autocefalia de Chipre.
        </p>

        <div className={styles.presidentesLista}>
          {canones.map((c, i) => (
            <div key={i} className={styles.presidenteItem}>
              <span className={styles.presidenteFase}>CÂNON {c.numero}</span>
              <div className={styles.presidenteInfo}>
                <h4>{c.titulo}</h4>
                <p>{c.textoIntegral}</p>
                <p
                  style={{
                    marginTop: '0.5rem',
                    fontSize: '0.9rem',
                    color: '#6b5839',
                  }}
                >
                  <strong>Alvo:</strong> {c.alvo}
                </p>
                <p
                  style={{
                    marginTop: '0.3rem',
                    fontSize: '0.85rem',
                    color: '#8b6508',
                  }}
                >
                  🎯 <strong>Importância:</strong> {c.importancia}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =============================================
          14. A QUESTÃO DO CREDO E O CÂNON 7
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>📖</span> A Questão do Credo e o
          Cânon 7
        </h2>

        <p className={styles.secaoTexto}>{credo.introducao}</p>

        <div
          className={styles.heresiaCard}
          style={{
            background: '#fdfbf7',
            borderColor: '#c4a96a',
            color: '#3e3328',
            fontSize: '1.05rem',
            lineHeight: '1.8',
            padding: '2rem',
            margin: '1.5rem 0',
          }}
        >
          <p>
            <strong>
              &ldquo;Ninguém tem permissão de produzir, escrever ou compor uma
              fé diferente daquela definida pelos santos Padres reunidos em
              Niceia com o Espírito Santo. Aqueles que ousarem compor uma fé
              diferente, ou apresentá-la a quem quer que deseje converter-se ao
              conhecimento da verdade, seja vindo do paganismo, do judaísmo ou
              de qualquer heresia, sejam depostos se forem bispos ou clérigos, e
              excomungados se forem leigos.&rdquo;
            </strong>
          </p>
          <small
            style={{
              display: 'block',
              marginTop: '1rem',
              color: '#8b6508',
            }}
          >
            — Cânon 7 do Concílio de Éfeso (431 d.C.)
          </small>
        </div>

        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.15rem',
            marginBottom: '0.75rem',
          }}
        >
          🔍 O Paradoxo do Cânon 7
        </h3>
        <ul className={styles.resultadosLista}>
          {credo.paradoxos.map((px, i) => (
            <li key={i}>{px}</li>
          ))}
        </ul>

        <div
          className={styles.destaque}
          style={{ textAlign: 'left', marginTop: '1.5rem' }}
        >
          <strong style={{ color: '#8b6508' }}>
            Relevância para o debate do Filioque:
          </strong>{' '}
          {credo.relevanciaFilioque}
        </div>
      </section>

      {/* =============================================
          15. DOUTRINA TEOLÓGICA COMPLETA
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>✝️</span> Doutrina Teológica do
          Concílio
        </h2>

        {/* 15.1 THEOTOKOS */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h3
            style={{
              color: '#8b6508',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
            }}
          >
            {theotokos.titulo}
          </h3>
          <p className={styles.secaoTexto}>{theotokos.definicao}</p>
          <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>📖 Fundamento Bíblico</div>
              <div className={styles.heresiaErro}>
                {theotokos.fundamentoBiblico}
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>📜 Fundamento Patrístico</div>
              <div className={styles.heresiaErro}>
                {theotokos.fundamentoPatristico}
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>⚔️ Contra Quem</div>
              <div className={styles.heresiaErro}>{theotokos.contraQuem}</div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>💡 Implicação Dogmática</div>
              <div className={styles.heresiaErro}>
                {theotokos.implicacao}
              </div>
            </div>
          </div>
        </div>

        {/* 15.2 UNIÃO HIPOSTÁTICA */}
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
            {uniaoHipostatica.titulo}
          </h3>
          <p className={styles.secaoTexto}>{uniaoHipostatica.definicao}</p>
          <p className={styles.secaoTexto}>
            <strong>Diferença de Nestório:</strong>{' '}
            {uniaoHipostatica.diferencaNestorio}
          </p>
          <div
            className={styles.destaque}
            style={{ textAlign: 'left', marginTop: '1rem' }}
          >
            <strong>Nota:</strong> {uniaoHipostatica.notaCalcedonia}
          </div>
        </div>

        {/* 15.3 OS 12 ANÁTEMAS */}
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
            ⚡ Os 12 Anátemas de Cirilo contra Nestório
          </h3>
          <p className={styles.secaoTexto}>{dozeAnatemas.introducao}</p>

          <div className={styles.presidentesLista} style={{ marginTop: '1rem' }}>
            {dozeAnatemas.anatemas.map((an, i) => (
              <div key={i} className={styles.presidenteItem}>
                <span className={styles.presidenteFase}>
                  ANÁT. {an.numero}
                </span>
                              <div className={styles.presidenteInfo}>
                <h4 style={{ fontSize: '1rem' }}>
                  &ldquo;{an.texto}&rdquo;
                </h4>
                <p style={{ marginTop: '0.4rem', fontSize: '0.9rem' }}>
                  <strong style={{ color: '#bd3a29' }}>Alvo:</strong>{' '}
                  {an.alvo}
                </p>
                <p style={{ marginTop: '0.3rem', fontSize: '0.9rem' }}>
                  <strong style={{ color: '#8b6508' }}>Explicação:</strong>{' '}
                  {an.explicacao}
                </p>
                <p style={{ marginTop: '0.3rem', fontSize: '0.85rem', color: '#6b5839' }}>
                  📖 <strong>Base:</strong> {an.baseBiblica}
                </p>
                {an.reacaoAntioquena && (
                  <p
                    style={{
                      marginTop: '0.3rem',
                      fontSize: '0.85rem',
                      color: '#bd3a29',
                      fontStyle: 'italic',
                    }}
                  >
                    ⚠️ <strong>Reação antioquena:</strong>{' '}
                    {an.reacaoAntioquena}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 15.4 COMPARAÇÃO DAS CRISTOLOGIAS */}
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
          📊 Comparação: Cristologia de Cirilo vs Nestório
        </h3>
        <div className={styles.heresiasGrid}>
          {comparacaoCristologias.map((cc, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{cc.topico}</div>
              <div style={{ fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                <strong>Cirilo (Alexandria):</strong> &ldquo;{cc.cirilo}&rdquo;
              </div>
              <div style={{ fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                <strong>Nestório (Antioquia):</strong> &ldquo;{cc.nestorio}&rdquo;
              </div>
              <div
                className={styles.heresiaErro}
                style={{ color: '#8b6508' }}
              >
                <strong>Diferença/Evolução:</strong> {cc.diferenca}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 15.4B ANÁLISE FILOLÓGICA — A AMBIGUIDADE FATAL */}
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
          🔤 Análise Filológica: A Ambiguidade Fatal do Vocabulário
          Pré-Calcedoniano
        </h3>
        <p className={styles.secaoTexto}>
          A controvérsia de Éfeso (431) foi, em grande medida, um{' '}
          <strong>diálogo de surdos</strong> entre duas tradições teológicas
          que usavam as mesmas palavras com significados diferentes.
          Compreender esta ambiguidade terminológica é essencial para entender
          por que Cirilo e Nestório, ambos sinceramente ortodoxos em suas
          intenções, chegaram a acusações mútuas de heresia.
        </p>
        <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              1. Physis (φύσις) vs. Hypostasis (ὑπόστασις)
            </div>
            <div className={styles.heresiaErro}>
              <strong>O problema central:</strong> no vocabulário
              pré-calcedoniano, physis e hypostasis não tinham significados
              fixos e distintos como adquiririam após Calcedônia (451).
              <br />
              <br />
              <strong>Em Cirilo:</strong> physis = &ldquo;realidade concreta
              subsistente&rdquo; — equivalente ao que Calcedônia chamaria de
              hypostasis. Quando diz &ldquo;mia physis tou Theou Logou
              sesarkomene&rdquo;, afirma uma única realidade concreta (o Verbo
              encarnado) em duas modalidades.
              <br />
              <br />
              <strong>Em Nestório/Antioquia:</strong> physis = natureza/essência
              (conjunto de propriedades). Falar de &ldquo;duas physeis&rdquo; é
              falar de duas naturezas reais sem implicar dois sujeitos.
              <br />
              <br />
              <strong>A solução de Calcedônia:</strong> physis = natureza;
              hypostasis/prosopon = pessoa. &ldquo;Uma pessoa em duas
              naturezas&rdquo; reconciliou as duas tradições.
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              2. Prosopon (πρόσωπον): Face, Máscara ou Pessoa?
            </div>
            <div className={styles.heresiaErro}>
              <strong>Em Nestório: </strong> &ldquo;prosopon de união&rdquo; (prosopon tes henoseos) — aparência ou manifestação exterior unificada das duas naturezas. Há dois sujeitos operacionais que
              compartilham um único prosopon de manifestação.
              <br />
              <br />
              <strong>Em Cirilo:</strong> desconfia de prosopon por ser
              insuficientemente ontológico (pode ser máscara teatral). Prefere
              hypostasis — realidade subsistente concreta.
              <br />
              <br />
              <strong>Em Calcedônia:</strong> usa ambos como equivalentes:
              &ldquo;uma pessoa (prosopon) e uma hipóstase (hypostasis)&rdquo;.
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              3. Henosis (ἕνωσις): Que tipo de união?
            </div>
            <div className={styles.heresiaErro}>
              <strong>Cirilo:</strong> henosis physike (união real/ontológica) e
              kath&apos; hypostasin henosis. O Verbo <em>é</em> o sujeito da
              carne assumida — como alma e corpo em um ser humano.
              <br />
              <br />
              <strong>Nestório:</strong> synapheia (conjunção) e henosis kata
              eudokian (união segundo a boa vontade) — relação entre dois
              sujeitos distintos, como rei e templo (habitação, não
              identidade).
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              4. Communicatio Idiomatum (κοινωνία τῶν ἰδιωμάτων)
            </div>
            <div className={styles.heresiaErro}>
              Ambas aceitam predicar propriedades divinas da humanidade e
              vice-versa. A diferença está no mecanismo:
              <br />
              <br />
              <strong>Cirilo:</strong> comunicação real e direta — um único
              sujeito, posso dizer &ldquo;Deus nasceu&rdquo; e &ldquo;Deus
              sofreu na carne&rdquo;.
              <br />
              <br />
              <strong>Nestório:</strong> comunicação indireta e por
              transferência — dois sujeitos, predicações transferidas por causa
              da união de dignidade e prosopon.
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              5. Idion (ἴδιον) vs. Allotrion (ἀλλότριον)
            </div>
            <div className={styles.heresiaErro}>
              Quando Cirilo diz que a carne é &ldquo;idia&rdquo; (própria) do
              Verbo, afirma pertença ontológica — não natureza estranha
              &ldquo;adotada&rdquo;. Quando antioquenos dizem que a carne é
              &ldquo;allotria&rdquo; (alheia), querem dizer natureza distinta
              da divindade — não que não pertença à pessoa do Verbo. Mais uma
              vez, a ambiguidade gerou mal-entendidos mútuos.
            </div>
          </div>
        </div>
        <p className={styles.secaoTexto} style={{ marginTop: '1rem' }}>
          <small style={{ color: '#8b6508' }}>
            📚 <strong>Fontes:</strong> Aloys Grillmeier, Christ in Christian
            Tradition, vol. 1 (2ª ed. 1975), pp. 443-510 · John Meyendorff,
            Christ in Eastern Christian Thought (SVS Press, 1975), caps. 1-2 ·
            Richard Price &amp; Thomas Graumann, The Council of Ephesus of 431
            (Liverpool 2020), Introdução · Harold O. J. Brown, The Heresies
            (1984), cap. 7
          </small>
        </p>
      </div>

      {/* 15.5 GLOSSÁRIO TEOLÓGICO GREGO */}
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
                {g.termo} ({g.grego}) — <small>{g.transcricao}</small>
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
                💡 <strong>Impacto em Éfeso:</strong> {g.importancia}
              </small>
            </div>
          ))}
        </div>
      </div>

      {/* 15.6 CONDENAÇÕES DOUTRINÁRIAS */}
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
          ⚖️ Condenações Doutrinárias Formais
        </h3>
        <p className={styles.secaoTexto}>{condenacoesDoutrinarias.introducao}</p>
        <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
          {condenacoesDoutrinarias.condenacoes.map((cd, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{cd.heresia}</div>
              <div className={styles.heresiaLider}>
                👤 {cd.autor} | ⏳ {cd.periodo}
              </div>
              <div className={styles.heresiaErro}>{cd.erro}</div>
              <div
                style={{
                  fontSize: '0.85rem',
                  color: '#bd3a29',
                  marginTop: '0.4rem',
                }}
              >
                <strong>Condenação:</strong> {cd.condenacao}
              </div>
            </div>
          ))}
        </div>
        {/* 15.7B A SEMENTE DO MONOFISISMO */}
        <div
          style={{
            marginTop: '1.5rem',
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
            A Semente do Monofisismo: Como a Linguagem Ciriliana foi
            Radicalizada
          </h3>
          <p className={styles.secaoTexto}>
            O monofisismo (ou, mais precisamente, miafisismo) não surgiu apesar
            de Éfeso, mas em grande parte por causa dele. A linguagem ciriliana
            — &ldquo;mia physis sesarkomene&rdquo; (&ldquo;uma natureza
            encarnada&rdquo;), &ldquo;henosis physike&rdquo; (&ldquo;união
            física&rdquo;), &ldquo;o Verbo sofreu na carne&rdquo; — foi
            interpretada por discípulos radicais de Cirilo no sentido de que a
            humanidade de Cristo havia sido absorvida pela divindade.
          </p>
          <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>
                Dióscoro de Alexandria (444–451)
              </div>
              <div className={styles.heresiaErro}>
                Sucessor de Cirilo, Dióscoro herdou o prestígio da vitória
                efesina mas radicalizou a linguagem ciriliana. Enquanto Cirilo
                (especialmente após 433) aceitava a linguagem das &ldquo;duas
                naturezas&rdquo; desde que subordinada à unidade de pessoa,
                Dióscoro rejeitava categoricamente qualquer linguagem de
                &ldquo;duas naturezas&rdquo; após a união, insistindo
                exclusivamente na fórmula &ldquo;uma natureza encarnada&rdquo;.
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>Eutiques (†~454)</div>
              <div className={styles.heresiaErro}>
                O arquimandrita constantinopolitano Eutiques levou a linguagem
                ciriliana ao extremo: ensinou que a humanidade de Cristo foi
                &ldquo;absorvida&rdquo; pela divindade &ldquo;como uma gota de
                mel no oceano&rdquo; — uma metáfora que destruía a realidade da
                humanidade de Cristo. Eutiques foi condenado em sínodo local em
                Constantinopla (448) por Flaviano, mas reabilitado no
                Latrocínio de Éfeso (449) por Dióscoro.
              </div>
            </div>
          </div>
          <div
            className={styles.destaque}
            style={{ textAlign: 'left', marginTop: '1rem' }}
          >
            <strong>A Lição:</strong> A linguagem de &ldquo;uma
            natureza&rdquo; de Cirilo era ortodoxa quando entendida como
            &ldquo;uma pessoa que é o Verbo encarnado&rdquo; (o sentido
            ciriliano original). Tornou-se herética quando entendida como
            &ldquo;uma natureza que absorveu a outra&rdquo; (o sentido
            eutiquiano). Calcedônia (451) resolveu a ambiguidade distinguindo
            physis (natureza) de hypostasis (pessoa): &ldquo;uma pessoa em duas
            naturezas, sem confusão, sem mudança, sem divisão, sem
            separação.&rdquo;
            <br />
            <small style={{ color: '#8b6508', display: 'block', marginTop: '0.5rem' }}>
              📚 <strong>Fontes:</strong> Aloys Grillmeier, Christ in Christian
              Tradition, vol. 2/1 (1987) · Timothy Gregory, A History of
              Byzantium (2005)
            </small>
          </div>
        </div>
      </div>

      {/* 15.8 RESUMO TEOLÓGICO FINAL */}
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
          {resumoTeologico.titulo}
        </h3>
        <p className={styles.secaoTexto}>
          <strong>Tese Central:</strong> {resumoTeologico.tese}
        </p>
        <div
          className={styles.destaque}
          style={{ margin: '1rem 0', textAlign: 'left' }}
        >
          <strong style={{ color: '#8b6508' }}>Grandes Conquistas:</strong>
          <ul className={styles.resultadosLista} style={{ marginTop: '0.5rem' }}>
            {resumoTeologico.conquistas.map((cq, i) => (
              <li key={i}>{cq}</li>
            ))}
          </ul>
        </div>
        <p className={styles.secaoTexto}>{resumoTeologico.legado}</p>
      </div>
    </section>

      {/* =============================================
          15B. O BAZAAR DE HERÁCLIDES — AUTODEFESA DE NESTÓRIO
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>📖</span> O Bazaar de Heráclides
          (Liber Heraclidis): A Autodefesa Póstuma de Nestório
        </h2>

        <p className={styles.secaoTexto}>
          O &ldquo;Bazaar de Heráclides&rdquo; (siríaco: Tegurtā
          d&apos;Hērāqleidēs; latim: Liber Heraclidis) é o único texto extenso
          de Nestório que sobreviveu completo. Escrito durante seu exílio no
          Oásis de Kharga (Egito), provavelmente entre 449 e 451, pouco antes
          de sua morte, constitui a autodefesa teológica mais elaborada do
          patriarca deposto. O texto foi preservado apenas em tradução siríaca
          (o original grego se perdeu devido à ordem de queima do édito de
          435) e foi redescoberto em 1895 em um manuscrito no Curdistão por um
          grupo de missionários anglicanos.
        </p>

        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.25rem',
            marginBottom: '0.5rem',
            marginTop: '1.5rem',
          }}
        >
          Estrutura da Obra
        </h3>
        <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              Parte I — Diálogo com um Ortodoxo
            </div>
            <div className={styles.heresiaErro}>
              Nestório simula um diálogo no qual um interlocutor ortodoxo
              (representando a posição ciriliana/calcedoniana) o acusa, e
              Nestório responde ponto por ponto. A estrutura dialógica permite
              a Nestório antecipar objeções e refutá-las sistematicamente.
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              Parte II — Autodefesa Sistemática
            </div>
            <div className={styles.heresiaErro}>
              Nestório apresenta sua cristologia madura, demonstrando que
              sempre aceitou a união das duas naturezas em Cristo e que foi
              vítima de uma campanha de difamação orquestrada por Cirilo.
            </div>
          </div>
        </div>

        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.25rem',
            marginBottom: '0.5rem',
            marginTop: '1.5rem',
          }}
        >
          Pontos Centrais do Bazaar
        </h3>
        <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              1. A União das Naturezas
            </div>
            <div className={styles.heresiaErro}>
              Nestório afirma no Bazaar que aceita a &ldquo;união das duas
              naturezas&rdquo; em uma única pessoa. Ele escreve:
              &ldquo;Eu confesso que as duas naturezas foram unidas e que a
              união é real, não uma união de nome ou de aparência.&rdquo; Esta
              afirmação é surpreendentemente próxima da linguagem calcedoniana.
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>2. A Aceitação da Theotokos</div>
            <div className={styles.heresiaErro}>
              Em uma passagem crucial, Nestório escreve: &ldquo;Eu aceito o
              título Theotokos, desde que se entenda que Maria é Mãe de Deus no
              sentido de que o Verbo, que é Deus, nasceu dela segundo a carne
              — não no sentido de que a natureza divina teve seu início em
              Maria.&rdquo; Esta passagem sugere que a disputa pode ter sido,
              em grande parte, um diálogo de surdos entre duas tradições
              teológicas que usavam o mesmo vocabulário com significados
              diferentes.
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>3. A Crítica a Cirilo</div>
            <div className={styles.heresiaErro}>
              Nestório acusa Cirilo de ter distorcido deliberadamente seus
              ensinamentos para pintá-lo como herege. Argumenta que Cirilo
              extraiu trechos de seus sermões de contexto, usou traduções
              defeituosas do grego para o latim (que chegaram a Celestino I), e
              mobilizou a multidão e a corte imperial por meios não teológicos
              (subornos, pressão política).
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>4. A Comparação com Leão I</div>
            <div className={styles.heresiaErro}>
              Nestório argumenta que sua cristologia é substancialmente
              idêntica à do Papa Leão I (cujo Tomo a Flaviano, de 449, ele pôde
              ler no exílio). Se Leão I afirma &ldquo;uma pessoa em duas
              naturezas&rdquo; e é considerado ortodoxo, por que eu, que ensino
              o mesmo, fui condenado? — pergunta Nestório.
            </div>
          </div>
        </div>

        <div
          className={styles.destaque}
          style={{ textAlign: 'left', marginTop: '1.5rem' }}
        >
          <strong style={{ color: '#8b6508' }}>
            A Questão da Autenticidade — Luise Abramowski:
          </strong>
          <p style={{ marginTop: '0.5rem' }}>
            A estudiosa alemã Luise Abramowski, em sua obra fundamental{' '}
            <em>Untersuchungen zum Liber Heraclidis des Nestorius</em> (CSCO
            Subsidia 22, 1963), demonstrou que partes significativas do texto
            siríaco podem conter interpolações posteriores da Igreja do
            Oriente. Passagens que aproximam Nestório da linguagem calcedoniana
            podem ter sido suavizadas por copistas siríacos que buscavam
            reabilitar Nestório diante de Calcedônia; a estrutura dialógica
            pode ter sido reelaborada para tornar Nestório mais simpático ao
            leitor; o tom geral é menos agressivo do que os sermões originais
            de 428–429, o que sugere maturidade teológica tardia ou edição
            posterior.
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            <strong>Posição acadêmica atual:</strong> A maioria dos estudiosos
            (Price, Graumann, McGuckin, Wessel) aceita o núcleo do Bazaar como
            autêntico, mas reconhece a possibilidade de interpolações. O texto
            é, no mínimo, uma testemunha valiosa da autopercepção de Nestório
            e de como ele queria ser recordado.
          </p>
        </div>

        <div
          className={styles.destaque}
          style={{
            textAlign: 'left',
            marginTop: '1rem',
            borderLeftColor: '#bd3a29',
          }}
        >
          <strong>Impacto na Reavaliação de Nestório:</strong> A redescoberta
          do Bazaar em 1895 revolucionou a percepção acadêmica de Nestório.
          Antes dele, Nestório era conhecido apenas através das citações
          hostis de Cirilo e dos Atos de Éfeso — uma visão unilateral e
          polemista. O Bazaar revelou um Nestório muito mais sofisticado,
          teologicamente maduro e mais próximo da ortodoxia calcedoniana do
          que se supunha. Esta reavaliação acadêmica culminou na Declaração
          Cristológica Comum de 1994 entre João Paulo II e Mar Dinkha IV.
        </div>

        <p className={styles.secaoTexto} style={{ marginTop: '1rem' }}>
          <small style={{ color: '#8b6508' }}>
            📚 <strong>Fontes:</strong> Nestório, Bazaar de Heráclides, ed.
            siríaca P. Bedjan (Paris/Leipzig 1910); tradução inglesa G. R.
            Driver &amp; L. Hodgson (Oxford 1925) · Luise Abramowski,
            Untersuchungen zum Liber Heraclidis des Nestorius (CSCO Subsidia
            22, 1963) · Friedrich Loofs, Nestoriana. Die Fragmente des Nestorius
            (Halle 1905) · Susan Wessel, Cyril of Alexandria and the Nestorian
            Controversy (Oxford 2004), cap. 8
          </small>
        </p>
      </section>

      {/* =============================================
          16. PRIMAZIA ROMANA E OS LEGADOS PAPAIS
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>🛡️</span> A Primazia Romana e o
          Papel de Celestino I
      </h2>
      <p className={styles.secaoTexto}>
        O Concílio de Éfeso representa um marco fundamental na história da
        primazia papal. O Papa Celestino I não apenas condenou Nestório em Roma
        (agosto de 430), mas instruiu seus legados — Arcádio, Projeto e o
        presbítero Filipe — a seguirem a liderança de Cirilo de Alexandria,
        conferindo assim autoridade apostólica à condenação.
      </p>
      <div
        className={styles.destaque}
        style={{ textAlign: 'left', marginTop: '1rem' }}
      >
        <strong style={{ color: '#8b6508' }}>
          A Declaração de Filipe na Sessão II (10 de julho de 431):
        </strong>
        <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
          &ldquo;Ninguém duvida, antes é conhecido em todas as épocas, que o
          santo e bem-aventurado Pedro, príncipe e cabeça dos apóstolos, coluna
          da fé e fundamento da Igreja Católica, recebeu as chaves do Reino de
          Nosso Senhor Jesus Cristo. Ele vive e julga até hoje e sempre em seus
          sucessores.&rdquo;
        </p>
        <p style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>
          Esta declaração é um dos testemunhos patrísticos mais explícitos da
          primazia petrina e da sucessão apostólica ininterrupta do Bispo de
          Roma. Os Atos do Concílio registram que os bispos orientais aclamaram
          as palavras de Filipe, reconhecendo a autoridade de Roma sobre a
          sentença contra Nestório.
        </p>
      </div>
      <div
        className={styles.destaque}
        style={{
          textAlign: 'left',
          marginTop: '1rem',
          borderLeftColor: '#bd3a29',
        }}
      >
        <strong>Nota sobre a Recepção:</strong> Embora a autoridade de Roma
        tenha sido invocada e reconhecida em Éfeso, a relação entre a primazia
        papal e a autonomia dos patriarcados orientais continuaria a ser uma
        fonte de tensão nos séculos seguintes, culminando no Grande Cisma de
        1054.
      </div>
    </section>

    {/* =============================================
        17. MITOS E ESCLARECIMENTOS
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

      <div className={styles.heresiasGrid} style={{ marginTop: '1.5rem' }}>
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
                  m.gravidade === 'alta'
                    ? '#fde8e8'
                    : m.gravidade === 'média'
                    ? '#fff4e0'
                    : '#eef6ee',
                color:
                  m.gravidade === 'alta'
                    ? '#bd3a29'
                    : m.gravidade === 'média'
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
        18. LEGADO TRANSVERSAL
       ============================================= */}
    <section className={styles.secao}>
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>🏛️</span> O Legado Transversal do
        Concílio
      </h2>

      {/* 18.1 LEGADO TEOLÓGICO */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3
          style={{
            color: '#8b6508',
            fontSize: '1.25rem',
            marginBottom: '0.5rem',
          }}
        >
          ✝️ {legado.teologico.titulo}
        </h3>
        <p className={styles.secaoTexto}>{legado.teologico.introducao}</p>
        <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
          {legado.teologico.pontos.map((pt, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{pt.titulo}</div>
              <div className={styles.heresiaErro}>{pt.descricao}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 18.2 LEGADO ECLESIÁSTICO */}
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
          ⛪ {legado.eclesiastico.titulo}
        </h3>
        <p className={styles.secaoTexto}>{legado.eclesiastico.introducao}</p>
        <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
          {legado.eclesiastico.pontos.map((pt, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{pt.titulo}</div>
              <div className={styles.heresiaErro}>{pt.descricao}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 18.3 LEGADO POLÍTICO */}
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
          👑 {legado.politico.titulo}
        </h3>
        <p className={styles.secaoTexto}>{legado.politico.introducao}</p>
        <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
          {legado.politico.pontos.map((pt, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{pt.titulo}</div>
              <div className={styles.heresiaErro}>{pt.descricao}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 18.4 LEGADO CULTURAL E LITÚRGICO */}
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
          🎨 {legado.cultural.titulo}
        </h3>
        <p className={styles.secaoTexto}>{legado.cultural.introducao}</p>
        <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
          {legado.cultural.pontos.map((pt, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{pt.titulo}</div>
              <div className={styles.heresiaErro}>{pt.descricao}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 18.4B REFORMAS LITÚRGICAS ESPECÍFICAS DESENCADEADAS POR ÉFESO */}
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
          🎶 Reformas Litúrgicas Específicas Desencadeadas por Éfeso
        </h3>
        <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>O Hino Akathistos</div>
            <div className={styles.heresiaErro}>
              O mais célebre hino mariano bizantino (Ἀκάθιστος Ὕμνος —
              &ldquo;cantado em pé&rdquo;). Tradição atribui a Romano o
              Melodista (séc. VI); datação debatida (séc. V–VII). 24 estrofes
              em acróstico alfabético grego, alternando saudações
              (chaire) e contemplações. Ligado ao levante do cerco ávaro (626),
              mas com raízes na celebração da vitória de Éfeso.
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              Festas Marianas Pós-Éfeso
            </div>
            <div className={styles.heresiaErro}>
              <strong>Dormição/Assunção (15/08):</strong> atestada em Jerusalém
              séc. V; corpo incorruptível porque Theotokos.
              <br />
              <strong>Natividade (08/09):</strong> Jerusalém séc. V, prelúdio da
              Encarnação.
              <br />
              <strong>Apresentação (21/11):</strong> séc. VI, Maria no Templo.
              <br />
              <strong>Anunciação (25/03):</strong> anterior, mas ganha nova
              centralidade como momento da Encarnação.
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              Sub Tuum Praesidium
            </div>
            <div className={styles.heresiaErro}>
              Oração mariana mais antiga: &ldquo;Sub tuum praesidium confugimus,
              Sancta Dei Genetrix&rdquo;. Papiro Rylands 470 (~250 d.C.),
              primeira atestação de Theotokos (Θεοτόκος). Após Éfeso torna-se
              universal — recitada na Liturgia das Horas e ofícios ortodoxos.
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              Hinografia Siríaca Oriental
            </div>
            <div className={styles.heresiaErro}>
              A Igreja do Oriente, que rejeitou Éfeso, desenvolveu rica
              hinografia centrada na distinção das naturezas. Efrém o Sírio
              (~306–373) reinterpretado; Narsai, Jacó de Serugh e Babai evitam
              Theotokos e usam &ldquo;Mãe de Cristo, nosso Deus e
              Salvador&rdquo; — substancialmente ortodoxa, como reconheceu a
              Declaração de 1994.
            </div>
          </div>
        </div>
      </div>

      {/* 18.5 LEGADO ECUMÊNICO */}
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
          🌐 {legado.ecumenico.titulo}
        </h3>
        <p className={styles.secaoTexto}>{legado.ecumenico.introducao}</p>
        <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
          {legado.ecumenico.pontos.map((pt, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{pt.titulo}</div>
              <div className={styles.heresiaErro}>{pt.descricao}</div>
            </div>
          ))}
        </div>

        {/* 18.5B PERSPECTIVA DAS IGREJAS ORTODOXAS ORIENTAIS */}
        <div
          style={{
            marginTop: '1.5rem',
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
            A Perspectiva das Igrejas Ortodoxas Orientais (Não-Calcedonianas)
          </h3>
          <p className={styles.secaoTexto}>
            As Igrejas Ortodoxas Orientais — Copta, Siríaca Ortodoxa,
            Apostólica Armênia, Etíope, Eritreia e Malankara — aceitam Éfeso
            (431) e os Doze Anátemas de Cirilo como expressão máxima da
            ortodoxia cristológica, mas rejeitam Calcedônia (451) como traição
            à linguagem ciriliana. Esta posição, frequentemente incompreendida
            no Ocidente, merece análise cuidadosa.
          </p>
          <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>
                Por que rejeitam Calcedônia mas aceitam Éfeso?
              </div>
              <div className={styles.heresiaErro}>
                Para as Igrejas Orientais, Cirilo é o maior teólogo da história
                cristã — maior que Atanásio, maior que os Capadócios, maior que
                Agostinho. Sua fórmula &ldquo;mia physis tou Theou Logou
                sesarkomene&rdquo; é a expressão mais precisa da fé apostólica.
                Quando Calcedônia afirmou &ldquo;duas naturezas em uma
                pessoa&rdquo;, viram nisso concessão à linguagem antioquena que
                Cirilo havia rejeitado — reintroduzindo na prática a distinção
                que Éfeso condenara. A posição não-calcedoniana é:
                &ldquo;Aceitamos Cirilo integralmente; Calcedônia traiu Cirilo
                ao aceitar a linguagem de seus adversários.&rdquo;
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>
                O Diálogo Ecumênico Contemporâneo
              </div>
              <div className={styles.heresiaErro}>
                Desde os anos 1960, diálogos sistemáticos revelaram
                convergências profundas: Consultas de Aarhus (1964), Bristol
                (1967), Genebra (1970), Addis Abeba (1971); Declaração Paulo
                VI–Shenouda III (1973); Declaração Francisco–Tawadros II (2013);
                Comissão Mista Internacional Católico-Ortodoxa Oriental. A
                divergência é em grande parte terminológica: ambos confessam
                Cristo verdadeiramente Deus e homem em uma pessoa, sem confusão
                nem separação. A diferença está no vocabulário (physis como
                natureza vs. physis como pessoa), não na substância.
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>
                A Festa de São Cirilo nas Igrejas Orientais
              </div>
              <div className={styles.heresiaErro}>
                A Igreja Copta celebra Cirilo como &ldquo;Pilar da Fé&rdquo; e
                &ldquo;Doutor da Igreja&rdquo; (7 de fevereiro no calendário
                copta). O título copta é &ldquo;Aghnatios&rdquo; (o Luminoso).
                Para os coptas, Cirilo é símbolo da identidade cristã egípcia —
                prova de que Alexandria produziu a teologia mais precisa. Esta
                devoção explica em parte a rejeição de Calcedônia: aceitá-la
                seria, na percepção copta, trair o maior filho do Egito
                cristão.
              </div>
            </div>
          </div>
          <p className={styles.secaoTexto} style={{ marginTop: '1rem' }}>
            <small style={{ color: '#8b6508' }}>
              📚 <strong>Fontes:</strong> Comissão Mista Internacional,
              documentos 1971–1990 · John Meyendorff, Christ in Eastern
              Christian Thought (SVS Press 1975) · John D. Farag, St. Cyril of
              Alexandria (2014)
            </small>
          </p>
        </div>
      </div>

      {/* 18.6 RECONHECIMENTO ECUMÊNICO */}
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
        <p
          className={styles.secaoTexto}
          style={{
            marginTop: '1.5rem',
            fontWeight: '500',
            fontSize: '1.1rem',
          }}
        >
          {legado.resumoFinal}
        </p>
      </div>
    </section>

      {/* =============================================
          18B. A IGREJA DO ORIENTE — DE ÉFESO À CHINA
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>🌏</span> A Igreja do Oriente: Do
          Concílio de Éfeso à China
        </h2>

        <p className={styles.secaoTexto}>
          A Igreja do Oriente (Igreja Persa, Siríaca Oriental — imprecisamente
          &ldquo;nestoriana&rdquo;) é uma das mais antigas tradições cristãs.
          Fundada segundo a tradição por Tomé, organizada no Império Sassânida,
          existiu fora dos limites romanos — e portanto fora do alcance dos
          concílios imperiais. Esta posição moldou radicalmente sua história.
        </p>

        <h3
          style={{ color: '#8b6508', fontSize: '1.25rem', marginBottom: '0.5rem', marginTop: '1.5rem' }}
        >
          Adoção da Cristologia Antioquena (séc. V)
        </h3>
        <p className={styles.secaoTexto}>
          Após 431/435, migração maciça de teólogos antioquenos para a Pérsia.
          A Escola de Edessa tornou-se ponto de convergência.
        </p>
        <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>484 — Sínodo de Beth Lapat</div>
            <div className={styles.heresiaErro}>
              Sob Catholicos Acácio, adota Teodoro de Mopsuéstia como norma;
              rejeita Theotokos; confirma dois qnome.
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              486 — Sínodo de Seleucia-Ctesifonte
            </div>
            <div className={styles.heresiaErro}>
              Formaliza a cristologia &ldquo;nestoriana&rdquo; como doutrina
              oficial, rejeitando Éfeso.
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              489 — Fechamento de Edessa / Nísibis
            </div>
            <div className={styles.heresiaErro}>
              Zenão fecha Edessa; professores transferem-se para Nísibis no
              Império Persa — maior centro teológico oriental por séculos
              (fundada por Narsai ~399–503; 1000+ estudantes no auge; Henana de
              Adiabene; Babai o Grande ~551–628, Livro da União).
            </div>
          </div>
        </div>

        <h3
          style={{ color: '#8b6508', fontSize: '1.25rem', marginBottom: '0.5rem', marginTop: '1.5rem' }}
        >
          Expansão Missionária (séc. VI–XIV)
        </h3>
        <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>Índia (séc. IV–VII)</div>
            <div className={styles.heresiaErro}>
              Cristãos de São Tomé no Kerala alinham-se à Igreja Persa
              (séc. VI–VII), recebem bispos de Ctesifonte. Sobrevivem hoje
              (Malankara, Assíria na Índia, Siro-Malabar).
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              Ásia Central (séc. VI–VIII)
            </div>
            <div className={styles.heresiaErro}>
              Comunidades em Merv, Samarcanda e ao longo da Rota da Seda;
              evangelização de turcos e mongóis.
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>China (635–781)</div>
            <div className={styles.heresiaErro}>
              Em 635 Alopen chega a Chang&apos;an (Xi&apos;an) sob Taizong
              (Tang). A Estela de Xi&apos;an (781, chinês + siríaco) documenta a
              &ldquo;Religião Luminosa&rdquo; (景教 Jǐngjiào): Encarnação,
              Trindade, batismo e cruz. Redescoberta em 1625.
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>Mongólia (séc. XIII)</div>
            <div className={styles.heresiaErro}>
              Sorghaghtani Beki (mãe de Kublai e Hulagu), Doquz Khatun (esposa
              de Hulagu, que destruiu Bagdá em 1258). Corte do Ilcanato abriga
              comunidades prósperas.
            </div>
          </div>
        </div>

        <div
          className={styles.destaque}
          style={{ textAlign: 'left', marginTop: '1.5rem' }}
        >
          <strong style={{ color: '#8b6508' }}>
            Devastação e Declínio (séc. XIV–XX):
          </strong>
          <p style={{ marginTop: '0.5rem' }}>
            <strong>Tamerlão (1370–1405)</strong> arrasa comunidades na Ásia
            Central e Pérsia. <strong>Genocídio assírio Seyfo
            (1914–1918)</strong>: 250–750 mil mortos (Turquia/Iraque),
            contemporâneo ao armênio e grego. Hoje ~400–500 mil fiéis (Erbil,
            Irã, Síria, EUA, Austrália, Suécia), golpeados pelo pós-2003 e ISIS
            (2014).
          </p>
        </div>

        <div
          className={styles.destaque}
          style={{
            textAlign: 'left',
            marginTop: '1rem',
            borderLeftColor: '#2d6a4f',
          }}
        >
          <strong>Diálogo Ecumênico:</strong> 11/11/1994 — Declaração
          Cristológica Comum (João Paulo II + Mar Dinkha IV): diferenças
          &ldquo;em grande parte terminológicas&rdquo;. 2001 — intercomunhão
          Caldeia/Assíria. A Igreja Assíria prefere &ldquo;Mãe de Cristo nosso
          Deus e Salvador&rdquo;, mas confessa que Maria gerou a pessoa divina
          — substancialmente idêntico a Éfeso.
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
            📚 Fontes: Baumer, Church of the East (2006) · Brock, Fires from
            Heaven (2006) · Baum &amp; Winkler (Routledge, 2003) · Coakley
            (Oxford, 1992) · Declaração 1994 · Saeki, Nestorian Documents in
            China (1937/1951)
          </p>
        </div>

        {/* 18B.1 ESCOLA DE NÍSIBIS EM DETALHE */}
        <div
          style={{
            marginTop: '1.5rem',
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
            A Escola de Nísibis: O Maior Centro Teológico do Oriente
          </h3>
          <p className={styles.secaoTexto}>
            A Escola de Nísibis (siríaco: Sūgdā d&apos;Nṣībīn) foi fundada por
            Narsai (~399–503) em 489, após o fechamento da Escola de Edessa
            pelo imperador Zenão. Narsai, que havia sido reitor em Edessa,
            transferiu-se com seus alunos e professores para Nísibis, no
            Império Persa Sassânida, onde fundou a instituição que se tornaria
            o maior centro teológico do cristianismo oriental por mais de dois
            séculos.
          </p>
          <p className={styles.secaoTexto}>
            <strong>Organização e Currículo:</strong> A escola operava como uma
            comunidade monástica-acadêmica. Os estudantes viviam em celas
            individuais, seguiam uma disciplina rigorosa (oração, estudo,
            trabalho manual) e recebiam formação em teologia, exegese bíblica,
            direito canônico, filosofia e medicina. No seu auge (séc. VI), a
            escola chegou a ter mais de mil estudantes de todo o mundo persa,
            mesopotâmico, árabe e centro-asiático.
          </p>
          <div className={styles.heresiasGrid} style={{ marginTop: '1rem' }}>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>Narsai (~399–503)</div>
              <div className={styles.heresiaErro}>
                Fundador, exegeta e hinógrafo; autor de mais de 300 homilias em
                siríaco; defensor da cristologia antioquena/teodoriana.
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>
                Henana de Adiabene (†~610)
              </div>
              <div className={styles.heresiaErro}>
                Reitor que tentou moderar a ortodoxia teodoriana, gerando uma
                cisão interna na escola.
              </div>
            </div>
            <div className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>Babai o Grande (~551–628)</div>
              <div className={styles.heresiaErro}>
                O maior teólogo sistemático da Igreja do Oriente; autor do
                &ldquo;Livro da União&rdquo; (Ktābā d&apos;Ḥudāyā), síntese
                cristológica que define a posição da Igreja do Oriente com
                rigor técnico, rejeitando tanto o monofisismo quanto a
                linguagem calcedoniana.
              </div>
            </div>
          </div>
          <p className={styles.secaoTexto} style={{ marginTop: '1rem' }}>
            <strong>Influência missionária:</strong> A Escola de Nísibis formou
            os missionários que levaram o cristianismo à Pérsia, à Índia, à
            Ásia Central e à China. Os missionários que chegaram a
            Chang&apos;an em 635 (Alopen e seus companheiros) eram provavelmente
            formados em Nísibis ou em suas filiais.
            <br />
            <small style={{ color: '#8b6508' }}>
              📚 <strong>Fontes:</strong> Adam Becker, Fear of God and the
              Beginning of Wisdom (Pennsylvania 2006) · Christoph Baumer, The
              Church of the East (2006), caps. 5-7
            </small>
          </p>
        </div>

        {/* 18B.2 ESTELA DE XI'AN EM DETALHE */}
        <div
          style={{
            marginTop: '1.5rem',
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
            A Estela Nestoriana de Xi&apos;an (781 d.C.): O Cristianismo na
            China Tang
          </h3>
          <p className={styles.secaoTexto}>
            A Estela de Xi&apos;an (大秦景教流行中國碑 — &ldquo;Estela da
            Propagação da Religião Luminosa de Da Qin na China&rdquo;) é um dos
            artefatos arqueológicos mais extraordinários da história do
            cristianismo. Trata-se de uma estela de calcário com 2,36 metros de
            altura, erigida em 781 d.C. em Chang&apos;an (atual Xi&apos;an),
            capital da dinastia Tang, durante o reinado do imperador Dezong. A
            estela contém inscrições em chinês e em siríaco, com uma pequena
            cruz no topo.
          </p>
          <p className={styles.secaoTexto}>
            <strong>Conteúdo da Estela:</strong> O texto, composto pelo monge
            siríaco Adam (景净 Jìng Jìng), descreve a história da missão cristã
            na China desde a chegada de Alopen em 635, durante o reinado do
            imperador Taizong. O texto apresenta a fé cristã em linguagem
            adaptada ao contexto confuciano e budista: a Trindade é descrita
            como &ldquo;a verdadeira distinção das três majestades&rdquo;
            (三一妙身); a Encarnação é apresentada como &ldquo;o verdadeiro
            Vazio [Deus] se manifestando como homem&rdquo; (三一分身); a cruz é
            descrita como &ldquo;a verdadeira madeira que salva&rdquo;. O texto
            menciona batismos, igrejas, traduções de textos sagrados e a
            benevolência imperial para com a fé.
          </p>
          <p className={styles.secaoTexto}>
            <strong>Descoberta:</strong> A estela foi redescoberta em 1625 por
            trabalhadores chineses em uma construção em Xi&apos;an. Sua
            autenticidade foi debatida por séculos (alguns estudiosos do séc.
            XIX a consideraram uma falsificação), mas hoje é universalmente
            aceita como genuína. A estela está no Museu da Estela de
            Xi&apos;an (西安碑林博物館).
          </p>
          <div
            className={styles.destaque}
            style={{ textAlign: 'left', marginTop: '1rem' }}
          >
            <strong>Importância para Éfeso:</strong> A Estela de Xi&apos;an é a
            prova tangível mais impressionante de que a controvérsia de Éfeso
            teve consequências que se estenderam muito além do Mediterrâneo. A
            &ldquo;Religião Luminosa&rdquo; que chegou à China era, em sua
            cristologia, herdeira da tradição antioquena que Éfeso condenou —
            mas que, fora dos limites do Império Romano, floresceu e
            evangelizou um continente inteiro.
            <br />
            <small style={{ color: '#8b6508', display: 'block', marginTop: '0.5rem' }}>
              📚 <strong>Fontes:</strong> P. Y. Saeki, The Nestorian Documents
              and Relics in China (Tóquio 1937; reimpr. 1951) · Christoph
              Baumer, The Church of the East (2006), cap. 11 · Martin Palmer,
              The Jesus Sutras (2001)
            </small>
          </div>
        </div>
      </section>

      {/* =============================================
          19. RECEPÇÃO HISTÓRICA (431 – ATUALIDADE)
       ============================================= */}
    <section className={styles.secao}>
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>⏳</span> Linha do Tempo da Recepção
        Histórica (431 d.C. – Atualidade)
      </h2>

      <p className={styles.secaoTexto}>{resumoRecepcao}</p>

      <div className={styles.presidentesLista} style={{ marginTop: '1.5rem' }}>
        {recepcao.map((ev, i) => (
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
                <strong>Importância histórica:</strong> {ev.importancia}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* =============================================
          19B. ÉFESO NO CONTEXTO DOS CONCÍLIOS ECUMÊNICOS
         ============================================= */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>📊</span> Éfeso no Contexto dos
          Concílios Ecumênicos
        </h2>

        <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.85rem',
              background: '#fff',
              border: '1px solid #e2d7c3',
              borderRadius: '8px',
            }}
          >
            <thead>
              <tr style={{ background: '#f7f1e5' }}>
                {['Aspecto', 'Niceia (325)', 'Constantinopla I (381)', 'Éfeso (431)', 'Calcedônia (451)', 'Constantinopla II (553)'].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: '0.6rem',
                      borderBottom: '1px solid #e2d7c3',
                      color: '#2b1130',
                      textAlign: 'left',
                      minWidth: '130px',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Heresia principal', 'Arianismo', 'Macedonianismo / Apolinarismo', 'Nestorianismo', 'Monofisismo (Eutiques)', 'Três Capítulos'],
                ['Dogma central', 'Homoousios', 'Divindade do Espírito Santo', 'Theotokos', 'Uma pessoa em duas naturezas', 'Confirma Éfeso; condena Teodoro'],
                ['Credo produzido', 'Sim', 'Sim (Niceno-Constantinopolitano)', 'Não (confirma Niceia)', 'Não (confirma Niceia/381)', 'Não'],
                ['Nº bispos', '~318', '~150', '~200-250 (acum. ~340)', '~520', '~168'],
                ['Presidência', 'Ósio de Córdoba', 'Nectário', 'Cirilo de Alexandria', 'Legados de Leão I + Anatólio', 'Eutíquio'],
                ['Imperador', 'Constantino I', 'Teodósio I', 'Teodósio II', 'Marciano', 'Justiniano I'],
                ['Contra-concílio', 'Não', 'Não', 'Sim (João de Antioquia)', 'Sim (Latrocínio 449)', 'Não'],
                ['Duração', '~2 meses', '~2 meses', '~5 semanas', '~1 mês', '~1 mês'],
                ['Recepção', 'Contestada (arianos)', 'Pacífica', 'Controversa (cisma 431-433)', 'Controversa (pós-calcedoniano)', 'Controversa (Três Capítulos)'],
                ['Contribuição', 'Relação Pai-Filho', 'Completude da Trindade', 'Unidade de sujeito; Theotokos', 'Duas naturezas em uma pessoa', 'Teopasquismo confirmado'],
              ].map((row, i) => (
                <tr key={i} style={{ borderTop: '1px solid #ede7db' }}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      style={{
                        padding: '0.6rem',
                        color: j === 0 ? '#8b6508' : '#3e3328',
                        fontWeight: j === 0 ? 700 : 400,
                        verticalAlign: 'top',
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.heresiasGrid} style={{ marginTop: '1.5rem' }}>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>1. Único dogma mariano</div>
            <div className={styles.heresiaErro}>
              O único concílio ecumênico que definiu um dogma sobre Maria. A
              Theotokos é o único marianum ecumênico.
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>2. Único contra-concílio simultâneo</div>
            <div className={styles.heresiaErro}>
              O contra-concílio de João de Antioquia (26–27 junho 431) é
              praticamente único na história conciliar.
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>3. Maior impacto missionário</div>
            <div className={styles.heresiaErro}>
              A reação provocou migração para a Pérsia e missão na China e
              Índia — maior extensão geográfica do cristianismo antigo.
            </div>
          </div>
          <div className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>4. Hermenêutica mais cismática</div>
            <div className={styles.heresiaErro}>
              A linguagem ciriliana (&ldquo;uma natureza&rdquo;) gerou cisma
              pós-calcedoniano, Três Capítulos (553) e separação da Igreja do
              Oriente — divisões que persistem.
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          20. FONTES E BIBLIOGRAFIA
       ============================================= */}
    <section className={styles.secao}>
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>📚</span> Fontes e Bibliografia
      </h2>

      <div
        className={styles.destaque}
        style={{ textAlign: 'left', marginBottom: '2rem' }}
      >
        <strong style={{ color: '#8b6508' }}>Nota metodológica:</strong>
        <p style={{ marginTop: '0.5rem' }}>{resumoFontes.observacao}</p>
        <p style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>
          <strong>Totais:</strong> {resumoFontes.totalPrimarias} fontes primárias · {resumoFontes.totalSecundarias} secundárias · {resumoFontes.totalModernas} modernas · {resumoFontes.totalRecursos} recursos online
        </p>
      </div>

      {/* 1. NARRATIVAS HISTÓRICAS */}
      <h3
        style={{
          color: '#8b6508',
          fontSize: '1.2rem',
          marginBottom: '1rem',
        }}
      >
        1. Fontes Primárias — Narrativas Históricas
      </h3>
      <div className={styles.heresiasGrid} style={{ marginBottom: '2rem' }}>
        {fontesPrimariasHistoricas.map((ft, i) => (
          <div key={i} className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>{ft.autor}</div>
            <div className={styles.heresiaLider}>
              <em>{ft.titulo}</em> ({ft.data}) · {ft.idioma}
            </div>
            <div className={styles.heresiaErro}>{ft.descricao}</div>
            <p
              style={{
                fontSize: '0.9rem',
                marginTop: '0.5rem',
                color: '#6b5839',
              }}
            >
              <strong>Relevância:</strong> {ft.relevancia}
            </p>
            {ft.disponibilidade && (
              <small
                style={{
                  color: '#8b6508',
                  display: 'block',
                  marginTop: '0.3rem',
                }}
              >
                📖 {ft.disponibilidade}
              </small>
            )}
          </div>
        ))}
      </div>

      {/* 2. CIRILO DE ALEXANDRIA */}
      <h3
        style={{
          color: '#8b6508',
          fontSize: '1.2rem',
          marginBottom: '1rem',
        }}
      >
        2. Fontes Primárias — Cirilo de Alexandria
      </h3>
      <div className={styles.heresiasGrid} style={{ marginBottom: '2rem' }}>
        {fontesPrimariasCirilo.map((ft, i) => (
          <div key={i} className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>{ft.autor}</div>
            <div className={styles.heresiaLider}>
              <em>{ft.titulo}</em> ({ft.data}) · {ft.idioma}
            </div>
            <div className={styles.heresiaErro}>{ft.descricao}</div>
            <p
              style={{
                fontSize: '0.9rem',
                marginTop: '0.5rem',
                color: '#6b5839',
              }}
            >
              <strong>Relevância:</strong> {ft.relevancia}
            </p>
            {ft.disponibilidade && (
              <small
                style={{
                  color: '#8b6508',
                  display: 'block',
                  marginTop: '0.3rem',
                }}
              >
                📖 {ft.disponibilidade}
              </small>
            )}
          </div>
        ))}
      </div>

      {/* 3. NESTÓRIO */}
      <h3
        style={{
          color: '#8b6508',
          fontSize: '1.2rem',
          marginBottom: '1rem',
        }}
      >
        3. Fontes Primárias — Nestório e o Partido Antioqueno
      </h3>
      <div className={styles.heresiasGrid} style={{ marginBottom: '2rem' }}>
        {fontesPrimariasNestorio.map((ft, i) => (
          <div key={i} className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>{ft.autor}</div>
            <div className={styles.heresiaLider}>
              <em>{ft.titulo}</em> ({ft.data}) · {ft.idioma}
            </div>
            <div className={styles.heresiaErro}>{ft.descricao}</div>
            <p
              style={{
                fontSize: '0.9rem',
                marginTop: '0.5rem',
                color: '#6b5839',
              }}
            >
              <strong>Relevância:</strong> {ft.relevancia}
            </p>
            {ft.disponibilidade && (
              <small
                style={{
                  color: '#8b6508',
                  display: 'block',
                  marginTop: '0.3rem',
                }}
              >
                📖 {ft.disponibilidade}
              </small>
            )}
          </div>
        ))}
      </div>

      {/* 4. DOCUMENTOS OFICIAIS */}
      <h3
        style={{
          color: '#8b6508',
          fontSize: '1.2rem',
          marginBottom: '1rem',
        }}
      >
        4. Fontes Primárias — Documentos Oficiais e Atos Conciliares
      </h3>
      <div className={styles.heresiasGrid} style={{ marginBottom: '2rem' }}>
        {fontesPrimariasDocumentos.map((ft, i) => (
          <div key={i} className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>{ft.autor}</div>
            <div className={styles.heresiaLider}>
              <em>{ft.titulo}</em> ({ft.data}) · {ft.idioma}
            </div>
            <div className={styles.heresiaErro}>{ft.descricao}</div>
            <p
              style={{
                fontSize: '0.9rem',
                marginTop: '0.5rem',
                color: '#6b5839',
              }}
            >
              <strong>Relevância:</strong> {ft.relevancia}
            </p>
            {ft.disponibilidade && (
              <small
                style={{
                  color: '#8b6508',
                  display: 'block',
                  marginTop: '0.3rem',
                }}
              >
                📖 {ft.disponibilidade}
              </small>
            )}
          </div>
        ))}
      </div>

      {/* 5. SECUNDÁRIAS ANTIGAS */}
      <h3
        style={{
          color: '#8b6508',
          fontSize: '1.2rem',
          marginBottom: '1rem',
        }}
      >
        5. Fontes Secundárias Antigas (séc. V–VIII)
      </h3>
      <div className={styles.heresiasGrid} style={{ marginBottom: '2rem' }}>
        {fontesSecundarias.map((ft, i) => (
          <div key={i} className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>{ft.autor}</div>
            <div className={styles.heresiaLider}>
              <em>{ft.titulo}</em> ({ft.data}) · {ft.idioma}
            </div>
            <div className={styles.heresiaErro}>{ft.descricao}</div>
            <p
              style={{
                fontSize: '0.9rem',
                marginTop: '0.5rem',
                color: '#6b5839',
              }}
            >
              <strong>Relevância:</strong> {ft.relevancia}
            </p>
            {ft.disponibilidade && (
              <small
                style={{
                  color: '#8b6508',
                  display: 'block',
                  marginTop: '0.3rem',
                }}
              >
                📖 {ft.disponibilidade}
              </small>
            )}
          </div>
        ))}
      </div>

      {/* 6. FONTES MODERNAS */}
      <h3
        style={{
          color: '#8b6508',
          fontSize: '1.2rem',
          marginBottom: '1rem',
        }}
      >
        6. Fontes Modernas — Obras de Referência
      </h3>
      <div className={styles.heresiasGrid} style={{ marginBottom: '2rem' }}>
        {fontesModernas.map((ft, i) => (
          <div key={i} className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>{ft.autor}</div>
            <div className={styles.heresiaLider}>
              <em>{ft.titulo}</em> ({ft.data}) · {ft.idioma}
            </div>
            <div className={styles.heresiaErro}>{ft.descricao}</div>
            <p
              style={{
                fontSize: '0.9rem',
                marginTop: '0.5rem',
                color: '#6b5839',
              }}
            >
              <strong>Relevância:</strong> {ft.relevancia}
            </p>
            {ft.disponibilidade && (
              <small
                style={{
                  color: '#8b6508',
                  display: 'block',
                  marginTop: '0.3rem',
                }}
              >
                📖 {ft.disponibilidade}
              </small>
            )}
          </div>
        ))}
      </div>

     
      
      {/* RECOMENDAÇÕES */}
      <div className={styles.destaque} style={{ textAlign: 'left' }}>
        <strong style={{ color: '#8b6508' }}>
          📖 Recomendações de leitura:
        </strong>
        <ul className={styles.resultadosLista} style={{ marginTop: '0.75rem' }}>
          {resumoFontes.recomendacaoLeitura.map((rec, i) => (
            <li key={i}>{rec}</li>
          ))}
        </ul>
      </div>
    </section>

    {/* =============================================
        21. NAVEGAÇÃO PARA OS DOCUMENTOS
       ============================================= */}
    <nav className={styles.navLinks}>
      <Link
        href="/estudos/concilios/efeso/documentos"
        className={styles.navLink}
      >
        📄 Consultar Documentos, Cânones e Anátemas Integrais →
      </Link>
    </nav>
  </ConcilioLayout>
)
}