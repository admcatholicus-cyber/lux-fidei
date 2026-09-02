// C:\Users\kitten\Documents\lux-fidei\app\santos\_components\especificos\doutores\santa-teresinha-do-menino-jesus\iconografia\CitacaoIconografica.tsx

'use client'

import { useEffect, useRef, useState } from 'react'
import styles from '@/app/santos/_styles/especificos/doutores/santa-teresinha-do-menino-jesus/iconografia/CitacaoIconografica.module.css'

interface CitacaoProps {
  texto: string
  autor: string
  fonte: string
  variante?: 'default' | 'final'
}

export default function CitacaoIconografica({ texto, autor, fonte, variante = 'default' }: CitacaoProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${styles.citacao} ${styles[variante]} ${isVisible ? styles.citacaoVisible : ''}`}
    >
      <div className={styles.citacaoInner}>
        <div className={styles.citacaoOrnamento}>
          <span className={styles.ornamentoLine} />
          <span className={styles.ornamentoCross}>✦</span>
          <span className={styles.ornamentoLine} />
        </div>
        <blockquote className={styles.citacaoTexto}>
          <span className={styles.aspasAbrir}>"</span>
          {texto}
          <span className={styles.aspasFechar}>"</span>
        </blockquote>
        <div className={styles.citacaoAutor}>
          <span className={styles.autorNome}>{autor}</span>
          <span className={styles.autorFonte}>{fonte}</span>
        </div>
        <div className={styles.citacaoOrnamento}>
          <span className={styles.ornamentoLine} />
          <span className={styles.ornamentoCross}>✦</span>
          <span className={styles.ornamentoLine} />
        </div>
      </div>
    </div>
  )
}