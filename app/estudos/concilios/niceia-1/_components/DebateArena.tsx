'use client'

import { useState } from 'react'
import styles from '../niceia-1.module.css'
import {
  debatesArena,
  type ArenaDebate,
  type ArenaFala,
  type VersiculoCitado,
} from '../_data/debatesArena'

/* ── Avatar com fallback ── */

function Avatar({ fala, className }: { fala: ArenaFala; className?: string }) {
  const [imgFailed, setImgFailed] = useState(false)
  const showImg = fala.avatar && !imgFailed

  return (
    <div className={`${styles.avatarContainer} ${className ?? ''}`}>
      {showImg ? (
        <img
          src={fala.avatar}
          alt={fala.autor}
          className={styles.avatarImg}
          loading="lazy"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span>{fala.iniciais}</span>
      )}
    </div>
  )
}

/* ── Card de Versículo ── */

function VersiculoCard({ dados }: { dados: VersiculoCitado }) {
  return (
    <div className={styles.versiculoCard}>
      <div className={styles.versiculoHeader}>
        <span className={styles.versiculoIcon}>&#128214;</span>
        <span className={styles.versiculoRef}>{dados.referencia}</span>
      </div>
      <p className={styles.versiculoTexto}>{dados.textoBiblico}</p>
    </div>
  )
}

/* ── Nota do Historiador ── */

function NotaHistoriador({ texto }: { texto: string }) {
  const [aberta, setAberta] = useState(false)

  return (
    <div className={styles.notaHistoriador}>
      <button
        className={styles.notaBtn}
        onClick={() => setAberta(v => !v)}
        aria-expanded={aberta}
      >
        <span className={styles.notaBtnIcon}>&#128161;</span>
        <span className={styles.notaBtnLabel}>Análise Teológica</span>
        <span>{aberta ? '▲' : '▼'}</span>
      </button>
      {aberta && <div className={styles.notaCorpo}>{texto}</div>}
    </div>
  )
}

/* ── Chat Item ── */

function ChatItem({ fala }: { fala: ArenaFala }) {
  /* ── Centro (Moderador) ── */
  if (fala.lado === 'centro') {
    return (
      <div className={styles.chatRowCentro}>
        <Avatar fala={fala} />
        <div className={styles.chatHeaderCentro}>
          <span className={styles.chatAutor}>{fala.autor}</span>
          <span className={styles.chatCargo}>{fala.cargo}</span>
        </div>
        <div className={`${styles.chatBubble} ${styles.chatBubbleCentro}`}>
          <p className={styles.chatTexto}>{fala.texto}</p>
        </div>
        {fala.versiculoCitado && <VersiculoCard dados={fala.versiculoCitado} />}
        {fala.notaHistoriador && <NotaHistoriador texto={fala.notaHistoriador} />}
        <span className={styles.chatFuenteCentro}>Fonte: {fala.fonte}</span>
      </div>
    )
  }

  /* ── Ariano (Esquerdo): Avatar → Conteúdo ── */
  if (fala.lado === 'ariano') {
    return (
      <div className={styles.chatRowAriano}>
        <Avatar fala={fala} />
        <div className={styles.chatConteudo}>
          <div className={styles.chatHeader}>
            <span className={styles.chatAutor}>{fala.autor}</span>
            <span className={styles.chatCargo}>{fala.cargo}</span>
          </div>
          <div className={`${styles.chatBubble} ${styles.chatBubbleAriano}`}>
            <p className={styles.chatTexto}>{fala.texto}</p>
          </div>
          {fala.versiculoCitado && <VersiculoCard dados={fala.versiculoCitado} />}
          {fala.notaHistoriador && <NotaHistoriador texto={fala.notaHistoriador} />}
          <span className={styles.chatFuente}>Fonte: {fala.fonte}</span>
        </div>
      </div>
    )
  }

  /* ── Niceno (Direito): Conteúdo → Avatar ── */
  return (
    <div className={styles.chatRowNiceno}>
      <div className={styles.chatConteudoRight}>
        <div className={styles.chatHeaderRight}>
          <span className={styles.chatAutor}>{fala.autor}</span>
          <span className={styles.chatCargo}>{fala.cargo}</span>
        </div>
        <div className={`${styles.chatBubble} ${styles.chatBubbleNiceno}`}>
          <p className={styles.chatTexto}>{fala.texto}</p>
        </div>
        {fala.versiculoCitado && <VersiculoCard dados={fala.versiculoCitado} />}
        {fala.notaHistoriador && <NotaHistoriador texto={fala.notaHistoriador} />}
        <span className={styles.chatFuenteRight}>Fonte: {fala.fonte}</span>
      </div>
      <Avatar fala={fala} />
    </div>
  )
}

/* ── Card de Debate ── */

function DebateCard({
  debate,
  modo,
}: {
  debate: ArenaDebate
  modo: 'completo' | 'passo'
}) {
  const [passoAtual, setPassoAtual] = useState(0)
  const totalFalas = debate.falas.length

  const falasVisiveis =
    modo === 'completo'
      ? debate.falas
      : debate.falas.slice(0, passoAtual + 1)

  return (
    <div className={styles.arenaDebate}>
      <div className={styles.arenaContexto}>
        <h4 className={styles.arenaContextoLabel}>Contexto Histórico</h4>
        <p className={styles.arenaContextoTexto}>{debate.contexto}</p>
      </div>

      <div className={styles.arenaFeed}>
        {falasVisiveis.map(fala => (
          <ChatItem key={fala.id} fala={fala} />
        ))}
      </div>

      {modo === 'passo' && (
        <div className={styles.arenaPassoNav}>
          <button
            className={styles.arenaPassoBtn}
            disabled={passoAtual === 0}
            onClick={() => setPassoAtual(p => p - 1)}
          >
            &#8592; Anterior
          </button>
          <span className={styles.arenaPassoContador}>
            {passoAtual + 1} / {totalFalas}
          </span>
          <button
            className={styles.arenaPassoBtn}
            disabled={passoAtual >= totalFalas - 1}
            onClick={() => setPassoAtual(p => p + 1)}
          >
            Próximo &#8594;
          </button>
        </div>
      )}

      <div className={styles.arenaDesfecho}>
        <span className={styles.arenaDesfechoIcon}>&#9878;</span>
        <div>
          <h4 className={styles.arenaDesfechoLabel}>Desfecho</h4>
          <p className={styles.arenaDesfechoTexto}>{debate.desfecho}</p>
        </div>
      </div>
    </div>
  )
}

/* ── Componente Principal ── */

export function DebateArena() {
  const [indice, setIndice] = useState(0)
  const [modo, setModo] = useState<'completo' | 'passo'>('completo')
  const debateAtual = debatesArena[indice]

  return (
    <div className={styles.arenaContainer}>
      <div className={styles.arenaTabs}>
        {debatesArena.map((d, i) => (
          <button
            key={d.id}
            className={`${styles.arenaTab} ${i === indice ? styles.arenaTabAtiva : ''}`}
            onClick={() => setIndice(i)}
          >
            <span className={styles.arenaTabNum}>{i + 1}</span>
            <span className={styles.arenaTabLabel}>{d.titulo}</span>
          </button>
        ))}
      </div>

      <div className={styles.arenaModo}>
        <span className={styles.arenaModoLabel}>Modo de leitura:</span>
        <div className={styles.arenaModoToggle}>
          <button
            className={`${styles.arenaModoBtn} ${modo === 'completo' ? styles.arenaModoBtnAtiva : ''}`}
            onClick={() => setModo('completo')}
          >
            Visão Completa
          </button>
          <button
            className={`${styles.arenaModoBtn} ${modo === 'passo' ? styles.arenaModoBtnAtiva : ''}`}
            onClick={() => setModo('passo')}
          >
            Passo a Passo
          </button>
        </div>
      </div>

      <DebateCard key={debateAtual.id} debate={debateAtual} modo={modo} />
    </div>
  )
}
