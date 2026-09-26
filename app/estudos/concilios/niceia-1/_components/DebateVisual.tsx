'use client'

import styles from '../niceia-1.module.css'
import { debateMensagens, type DebateMensagem } from '../_data/debate'

function Bubble({ msg }: { msg: DebateMensagem }) {
  const isAriano = msg.lado === 'ariano'
  const isNiceno = msg.lado === 'niceno'
  const isCentro = msg.lado === 'centro'

  const rowClass = isCentro
    ? styles.debateRowCentro
    : isNiceno
      ? styles.debateRowNiceno
      : styles.debateRowAriano

  const bubbleClass = isCentro
    ? styles.debateBubbleCentro
    : isNiceno
      ? styles.debateBubbleNiceno
      : styles.debateBubbleAriano

  return (
    <div className={`${styles.debateRow} ${rowClass}`}>
      {!isNiceno && (
        <img
          src={msg.avatar}
          alt={msg.autor}
          className={styles.debateAvatar}
          loading="lazy"
        />
      )}

      <div className={styles.debateConteudo}>
        <div className={styles.debateMeta}>
          <span className={styles.debateAutor}>{msg.autor}</span>
          <span className={styles.debateCargo}>{msg.cargo}</span>
        </div>

        <div className={`${styles.debateBolha} ${bubbleClass}`}>
          <p className={styles.debateTexto}>{msg.texto}</p>
        </div>

        {msg.refBiblica && (
          <div className={styles.debateRef}>
            {msg.refBiblica}
          </div>
        )}
      </div>

      {isNiceno && (
        <img
          src={msg.avatar}
          alt={msg.autor}
          className={styles.debateAvatar}
          loading="lazy"
        />
      )}
    </div>
  )
}

export function DebateVisual() {
  return (
    <div className={styles.debateContainer}>
      <div className={styles.debateLinhaDoTempo} />
      {debateMensagens.map(msg => (
        <Bubble key={msg.id} msg={msg} />
      ))}
    </div>
  )
}
