'use client'

import { useState } from 'react'
import styles from '../niceia-1.module.css'

interface AccordionProps {
  titulo: React.ReactNode
  id: string
  children: React.ReactNode
  defaultAberto?: boolean
}

export function Accordion({ titulo, id, children, defaultAberto = false }: AccordionProps) {
  const [aberto, setAberto] = useState(defaultAberto)

  return (
    <div className={styles.accordion}>
      <button
        className={`${styles.accordionBtn} ${aberto ? styles.aberto : ''}`}
        onClick={() => setAberto(v => !v)}
        aria-expanded={aberto}
        aria-controls={`acc-corpo-${id}`}
      >
        {titulo}
        <span className={styles.accIcon}>▼</span>
      </button>
      <div
        id={`acc-corpo-${id}`}
        className={`${styles.accordionCorpo} ${aberto ? styles.visivel : ''}`}
      >
        {children}
      </div>
    </div>
  )
}