'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useRef, useState, useCallback } from 'react'
import styles from '../niceia-1.module.css'
import { IconConcilio, IconGlobe } from './Icons'

interface TabBarProps {
  abaInicial: 'concilio' | 'sobre'
  concilio: React.ReactNode
  sobre: React.ReactNode
}

const TABS = [
  { id: 'concilio', label: 'O Concílio', Icon: IconConcilio },
  { id: 'sobre', label: 'Sobre o Concílio', Icon: IconGlobe },
] as const

const ABAS_SOBRE = new Set([
  'cronologia', 'antecedentes', 'contexto', 'evidencias', 'crise',
  'recepcao', 'liturgia', 'mitos', 'lendas', 'jubileu',
  'historiografia', 'fontes',
])

const THRESHOLD_HIDE = 320
const THRESHOLD_SHOW = 240
const MIN_DELTA = 10

export function TabBar({ abaInicial, concilio, sobre }: TabBarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [abaAtiva, setAbaAtiva] = useState<'concilio' | 'sobre'>(abaInicial)

  const concilioRef = useRef<HTMLDivElement>(null)
  const sobreRef = useRef<HTMLDivElement>(null)
  const painelRef = useRef<HTMLDivElement>(null)
  const tabbarRef = useRef<HTMLDivElement>(null)

  const [dockH, setDockH] = useState(0)
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0)
  const ticking = useRef(false)
  const [tabbarHidden, setTabbarHidden] = useState(false)

  useEffect(() => {
    const el = painelRef.current
    if (!el) return
    const ro = new ResizeObserver(entries => {
      for (const entry of entries) {
        setDockH(entry.contentRect.height)
      }
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [abaAtiva])

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true

      requestAnimationFrame(() => {
        const currentY = window.scrollY
        const delta = currentY - lastScrollY.current

        if (Math.abs(delta) < MIN_DELTA) {
          ticking.current = false
          return
        }

        const goingDown = delta > 0

        if (currentY < THRESHOLD_HIDE) {
          setTabbarHidden(false)
        } else if (goingDown && currentY > THRESHOLD_HIDE) {
          setTabbarHidden(true)
        } else if (!goingDown && (currentY < THRESHOLD_SHOW || Math.abs(delta) > MIN_DELTA)) {
          setTabbarHidden(false)
        }

        lastScrollY.current = currentY
        ticking.current = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const trocarAba = useCallback((novaAba: 'concilio' | 'sobre') => {
    setAbaAtiva(novaAba)
    const params = new URLSearchParams()
    if (novaAba !== 'concilio') {
      params.set('aba', novaAba)
    }
    const qs = params.toString()
    router.replace(`${pathname}${qs ? `?${qs}` : ''}`, { scroll: false })
  }, [router, pathname])

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!hash) return

    const needsSobre = ABAS_SOBRE.has(hash)

    if (needsSobre && abaAtiva !== 'sobre') {
      setAbaAtiva('sobre')
      const params = new URLSearchParams()
      params.set('aba', 'sobre')
      router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    } else if (!needsSobre && abaAtiva !== 'concilio') {
      setAbaAtiva('concilio')
      router.replace(pathname, { scroll: false })
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const target = document.getElementById(hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
    })
  }, [])

  return (
    <>
      <div
        ref={tabbarRef}
        className={`${styles.tabbar} ${tabbarHidden ? styles.tabbarHidden : ''}`}
        role="tablist"
        aria-label="Navegação por abas"
      >
        {TABS.map(tab => (
          <button
            key={tab.id}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={abaAtiva === tab.id}
            aria-controls={`painel-${tab.id}`}
            tabIndex={abaAtiva === tab.id ? 0 : -1}
            className={`${styles.tab} ${abaAtiva === tab.id ? styles.tabAtiva : ''}`}
            onClick={() => trocarAba(tab.id as 'concilio' | 'sobre')}
            onKeyDown={(e) => {
              const idx = TABS.findIndex(t => t.id === tab.id)
              if (e.key === 'ArrowRight') {
                e.preventDefault()
                const next = TABS[(idx + 1) % TABS.length]
                document.getElementById(`tab-${next.id}`)?.focus()
              } else if (e.key === 'ArrowLeft') {
                e.preventDefault()
                const prev = TABS[(idx - 1 + TABS.length) % TABS.length]
                document.getElementById(`tab-${prev.id}`)?.focus()
              } else if (e.key === 'Home') {
                e.preventDefault()
                document.getElementById(`tab-${TABS[0].id}`)?.focus()
              } else if (e.key === 'End') {
                e.preventDefault()
                document.getElementById(`tab-${TABS[TABS.length - 1].id}`)?.focus()
              }
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <tab.Icon size={16} />
              {tab.label}
            </span>
          </button>
        ))}
      </div>

      <div ref={painelRef} style={{ '--dock-h': `${dockH}px` } as React.CSSProperties}>
        <div
          ref={concilioRef}
          id="painel-concilio"
          role="tabpanel"
          aria-labelledby="tab-concilio"
          hidden={abaAtiva !== 'concilio'}
          className={styles.tabPainel}
        >
          {concilio}
        </div>
        <div
          ref={sobreRef}
          id="painel-sobre"
          role="tabpanel"
          aria-labelledby="tab-sobre"
          hidden={abaAtiva !== 'sobre'}
          className={styles.tabPainel}
        >
          {sobre}
        </div>
      </div>
    </>
  )
}
