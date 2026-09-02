'use client'

import { useState, useEffect } from 'react'
import { Mandamento } from '@/types/estudos/mandamentos/mandamento'
import MandamentoDetalhado from '../MandamentoDetalhado/MandamentoDetalhado'
import styles from './mandamentoCard.module.css'

interface Props {
  mandamento: Mandamento
}

export default function MandamentoCard({ mandamento }: Props) {
  const [aberto, setAberto] = useState(false)

  useEffect(() => {
    const handleAbrirMandamento = (event: Event) => {
      const customEvent = event as CustomEvent
      if (customEvent.detail?.id === mandamento.id) {
        setAberto(true)
      }
    }

    window.addEventListener('abrirMandamento', handleAbrirMandamento)
    return () => window.removeEventListener('abrirMandamento', handleAbrirMandamento)
  }, [mandamento.id])

  return (
    <article className={styles.card} id={`mandamento-${mandamento.id}`}>
      <button
        className={`${styles.cabecalho} ${aberto ? styles.cabecalhoAberto : ''}`}
        onClick={() => setAberto(!aberto)}
      >
        <span className={styles.numero}>{mandamento.numero}</span>
        <div className={styles.textos}>
          <h3 className={styles.titulo}>{mandamento.titulo}</h3>
          <p className={styles.catequetico}>{mandamento.textoCatequetico}</p>
        </div>
        <span className={`${styles.seta} ${aberto ? styles.setaAberta : ''}`}>▼</span>
      </button>

      {aberto && (
        <div className={styles.conteudo}>
          <MandamentoDetalhado mandamento={mandamento} />
        </div>
      )}
    </article>
  )
}