'use client'

import { useEffect, useRef, useState } from 'react'
import styles from '../niceia-1.module.css'

interface SubNavProps {
  itens: { id: string; label: string }[]
}

export function SubNav({ itens }: SubNavProps) {
  const [ativa, setAtiva] = useState(itens[0]?.id || '')
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const visibilidade: Record<string, number> = {}

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id
          if (!id) continue
          if (entry.isIntersecting) {
            visibilidade[id] = entry.intersectionRatio
          } else {
            visibilidade[id] = 0
          }
        }
        let melhorId = itens[0]?.id || ''
        let melhorRatio = 0
        for (const id in visibilidade) {
          if ((visibilidade[id] || 0) > melhorRatio) {
            melhorRatio = visibilidade[id]
            melhorId = id
          }
        }
        if (melhorRatio > 0) setAtiva(melhorId)
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 1], rootMargin: '-20% 0px -60% 0px' }
    )

    for (const item of itens) {
      const el = document.getElementById(item.id)
      if (el) {
        observer.observe(el)
        observers.push(observer)
      }
    }

    return () => observers.forEach(o => o.disconnect())
  }, [itens])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div ref={navRef} className={styles.subnav}>
      {itens.map(item => (
        <button
          key={item.id}
          className={`${styles.pill} ${ativa === item.id ? styles.pillAtiva : ''}`}
          onClick={() => scrollTo(item.id)}
          aria-current={ativa === item.id ? 'true' : undefined}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
