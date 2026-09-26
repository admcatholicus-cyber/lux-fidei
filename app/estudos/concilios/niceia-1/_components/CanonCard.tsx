'use client'

import { useState } from 'react'
import styles from '../niceia-1.module.css'
import { Canon } from '../_data/canones'

export function CanonCard({ num, titulo, resumo, detalhe }: Canon) {
  const [expandido, setExpandido] = useState(false)

  return (
    <div
      className={`${styles.caixaCanon} ${expandido ? styles.expandido : ''}`}
      onClick={() => setExpandido(v => !v)}
    >
      <div className={styles.canonNum}>{num}</div>
      <div className={styles.canonTitulo}>{titulo}</div>
      <div className={styles.canonResumo}>{resumo}</div>
      <div className={styles.canonDetalhe}>{detalhe}</div>
      <span className={styles.canonExpandir} />
    </div>
  )
}