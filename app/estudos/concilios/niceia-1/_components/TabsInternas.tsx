'use client'

import { useState } from 'react'
import styles from '../niceia-1.module.css'

export interface TabItem {
  id: string
  label: React.ReactNode
  content: React.ReactNode
}

export function TabsInternas({ tabs }: { tabs: TabItem[] }) {
  const [ativa, setAtiva] = useState(tabs[0]?.id || '')

  return (
    <div className={styles.tabsInternas}>
      <div className={styles.tabsInternasNav}>
        {tabs.map(t => (
          <button
            key={t.id}
            className={`${styles.tabInternaBtn} ${ativa === t.id ? styles.ativa : ''}`}
            onClick={() => setAtiva(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map(t => (
        <div
          key={t.id}
          className={`${styles.tabInternaPainel} ${ativa === t.id ? styles.visivel : ''}`}
        >
          {t.content}
        </div>
      ))}
    </div>
  )
}