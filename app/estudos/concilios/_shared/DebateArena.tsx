'use client'

import { useState } from 'react'
import styles from './DebateArena.module.css'

export interface VersiculoCitado {
  referencia: string
  textoBiblico: string
}

export interface ArenaFala {
  id: string
  autor: string
  cargo: string
  avatar: string
  iniciais: string
  lado: 'ariano' | 'niceno' | 'centro' | 'esquerda' | 'direita'
  texto: string
  fonte: string
  versiculoCitado?: VersiculoCitado
  notaHistoriador?: string
}

export interface ArenaDebate {
  id: string
  titulo: string
  contexto: string
  falas: ArenaFala[]
  desfecho: string
}

export interface DebateArenaProps {
  debates: ArenaDebate[]
  labelProximo?: string
  labelSecundario?: string
  onSecundario?: () => void
  targetSecundario?: string
}

/* ── Avatar Painel (preenche o espaço do cartão) ── */

function AvatarPainel({ fala }: { fala: ArenaFala }) {
  const [imgFailed, setImgFailed] = useState(false)
  const showImg = fala.avatar && !imgFailed

  return (
    <div className={styles.dialogoImagemWrapper}>
      {showImg ? (
        <img
          src={fala.avatar}
          alt={fala.autor}
          className={styles.dialogoImg}
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span className={styles.dialogoIniciais}>{fala.iniciais}</span>
      )}
    </div>
  )
}

/* ── Card de Versículo ── */

function VersiculoCard({ dados }: { dados: VersiculoCitado }) {
  return (
    <div className={styles.versiculoCard}>
      <div className={styles.versiculoHeader}>
        <span className={styles.versiculoIcon}>📖</span>
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
        <span className={styles.notaBtnIcon}>💡</span>
        <span className={styles.notaBtnLabel}>Análise Teológica</span>
        <span>{aberta ? '▲' : '▼'}</span>
      </button>
      {aberta && <div className={styles.notaCorpo}>{texto}</div>}
    </div>
  )
}

/* ── Conteúdo do Diálogo (parte compartilhada entre lados) ── */

function DialogoConteudo({
  fala,
  classNameHeader,
}: {
  fala: ArenaFala
  classNameHeader?: string
}) {
  return (
    <div className={styles.dialogoConteudo}>
      <header className={`${styles.dialogoHeader} ${classNameHeader ?? ''}`}>
        <h3 className={styles.dialogoNome}>{fala.autor}</h3>
        <span className={styles.dialogoCargo}>{fala.cargo}</span>
      </header>
      <div className={styles.dialogoTexto}>{fala.texto}</div>
    </div>
  )
}

/* ── Chat Item — Cartão Unificado Visual Novel ── */

function ChatItem({ fala }: { fala: ArenaFala }) {
  const isEsquerda = fala.lado === 'ariano' || fala.lado === 'esquerda'

  /* ── Centro (Moderador / Imperador) ── */
  if (fala.lado === 'centro') {
    return (
      <div className={styles.chatRowCentro}>
        <div className={`${styles.dialogoCard} ${styles.dialogoCentro}`}>
          <AvatarPainel fala={fala} />
          <DialogoConteudo fala={fala} />
        </div>
        <span className={styles.dialogoFonte}>Fonte: {fala.fonte}</span>
        {fala.versiculoCitado && <VersiculoCard dados={fala.versiculoCitado} />}
        {fala.notaHistoriador && <NotaHistoriador texto={fala.notaHistoriador} />}
      </div>
    )
  }

  /* ── Esquerda (Ariano): Imagem à esquerda, Texto à direita ── */
  if (isEsquerda) {
    return (
      <div className={styles.chatRowEsquerda}>
        <div className={`${styles.dialogoCard} ${styles.dialogoEsquerda}`}>
          <AvatarPainel fala={fala} />
          <DialogoConteudo fala={fala} />
        </div>
        <span className={styles.dialogoFonte}>Fonte: {fala.fonte}</span>
        {fala.versiculoCitado && <VersiculoCard dados={fala.versiculoCitado} />}
        {fala.notaHistoriador && <NotaHistoriador texto={fala.notaHistoriador} />}
      </div>
    )
  }

  /* ── Direita (Niceno): Texto à esquerda, Imagem à direita ── */
  return (
    <div className={styles.chatRowDireita}>
      <div className={`${styles.dialogoCard} ${styles.dialogoDireita}`}>
        <DialogoConteudo fala={fala} classNameHeader={styles.headerDireita} />
        <AvatarPainel fala={fala} />
      </div>
      <span className={styles.dialogoFonte}>Fonte: {fala.fonte}</span>
      {fala.versiculoCitado && <VersiculoCard dados={fala.versiculoCitado} />}
      {fala.notaHistoriador && <NotaHistoriador texto={fala.notaHistoriador} />}
    </div>
  )
}

/* ── Card de Debate ── */

function DebateCard({
  debate,
  modo,
  indiceAtual,
  totalDebates,
  onAvancar,
  proximoDebateId,
  labelProximo,
  labelSecundario,
  onSecundario,
  targetSecundario,
}: {
  debate: ArenaDebate
  modo: 'completo' | 'passo'
  indiceAtual: number
  totalDebates: number
  onAvancar?: () => void
  proximoDebateId?: string
  labelProximo?: string
  labelSecundario?: string
  onSecundario?: () => void
  targetSecundario?: string
}) {
  const [passoAtual, setPassoAtual] = useState(0)
  const totalFalas = debate.falas.length

  const falasVisiveis =
    modo === 'completo'
      ? debate.falas
      : debate.falas.slice(0, passoAtual + 1)

  const handleAvancar = () => {
    onAvancar?.()
    if (proximoDebateId) {
      requestAnimationFrame(() => {
        const el = document.getElementById(`debate-${proximoDebateId}`)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }

  const handleSecundario = () => {
    onSecundario?.()
    if (targetSecundario) {
      requestAnimationFrame(() => {
        const el = document.getElementById(targetSecundario)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }

  return (
    <div id={`debate-${debate.id}`} className={styles.arenaDebate}>
      <div className={styles.arenaContexto}>
        <div className={styles.arenaContextoHeader}>
          <h4 className={styles.arenaContextoLabel}>Contexto Histórico</h4>
        </div>
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
            type="button"
            className={styles.arenaPassoBtn}
            disabled={passoAtual === 0}
            onClick={() => setPassoAtual(p => p - 1)}
          >
            ← Anterior
          </button>
          <span className={styles.arenaPassoContador}>
            {passoAtual + 1} / {totalFalas}
          </span>
          <button
            type="button"
            className={styles.arenaPassoBtn}
            disabled={passoAtual >= totalFalas - 1}
            onClick={() => setPassoAtual(p => p + 1)}
          >
            Próximo →
          </button>
        </div>
      )}

      <div className={styles.arenaDesfecho}>
        <div className={styles.arenaDesfechoHeader}>
          <span className={styles.arenaDesfechoIcon}>⚖</span>
          <h4 className={styles.arenaDesfechoLabel}>Desfecho</h4>
        </div>
        <p className={styles.arenaDesfechoTexto}>{debate.desfecho}</p>
      </div>

      <div className={styles.proximoDebateWrapper}>
        {indiceAtual < totalDebates - 1 ? (
          <button
            type="button"
            className={styles.proximoDebateBtn}
            onClick={handleAvancar}
            aria-label="Ir para o próximo debate e rolar ao início"
          >
            {labelProximo ?? 'Próximo debate'} <span>&rarr;</span>
          </button>
        ) : (
          onSecundario && (
            <button
              type="button"
              className={styles.proximoDebateBtnSecundario}
              onClick={handleSecundario}
              aria-label={labelSecundario ?? 'Continuar para a próxima seção'}
            >
              {labelSecundario ?? 'Continuar para o Credo'} <span>&rarr;</span>
            </button>
          )
        )}
      </div>
    </div>
  )
}

/* ── Componente Principal ── */

export function DebateArena({ debates, labelProximo, labelSecundario, onSecundario, targetSecundario }: DebateArenaProps) {
  const [indice, setIndice] = useState(0)
  const [modo, setModo] = useState<'completo' | 'passo'>('completo')

  if (!debates || debates.length === 0) return null
  const debateAtual = debates[indice] || debates[0]

  const avancarDebate = () => {
    if (indice < debates.length - 1) {
      setIndice(indice + 1)
    }
  }

  const proximoDebateId = indice < debates.length - 1 ? debates[indice + 1]?.id : undefined

  return (
    <div className={styles.arenaContainer}>
      <div className={styles.arenaTabs}>
        {debates.map((d, i) => (
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

      <DebateCard
        key={debateAtual.id}
        debate={debateAtual}
        modo={modo}
        indiceAtual={indice}
        totalDebates={debates.length}
        onAvancar={avancarDebate}
        proximoDebateId={proximoDebateId}
        labelProximo={labelProximo}
        labelSecundario={labelSecundario}
        onSecundario={onSecundario}
        targetSecundario={targetSecundario}
      />
    </div>
  )
}
