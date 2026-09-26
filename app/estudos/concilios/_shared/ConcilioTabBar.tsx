'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import styles from './ConcilioTabBar.module.css'

export interface ConcilioTabBarProps {
  abaInicial?: 'concilio' | 'sobre'
  concilio: React.ReactNode
  sobre: React.ReactNode
  /** Lista de IDs de âncoras (href #id) que pertencem à aba 'sobre' neste concílio */
  abasSobre?: string[]
  labelConcilio?: string
  labelSobre?: string
}

// Ícones SVG embutidos (sem dependência externa)
function IconChurch({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 22V10l-6-5-6 5v12" />
      <path d="M12 2v3" />
      <path d="M10 3h4" />
      <path d="M10 22v-5a2 2 0 0 1 4 0v5" />
    </svg>
  )
}

function IconGlobe({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}

const THRESHOLD_HIDE = 320
const THRESHOLD_SHOW = 240
const MIN_DELTA = 10

export function ConcilioTabBar({
  abaInicial = 'concilio',
  concilio,
  sobre,
  abasSobre = [],
  labelConcilio = 'O Concílio',
  labelSobre = 'Sobre o Concílio',
}: ConcilioTabBarProps) {
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

  const abasSobreSet = useMemo(() => new Set(abasSobre), [abasSobre])

  const TABS = useMemo(() => [
    { id: 'concilio', label: labelConcilio, Icon: IconChurch },
    { id: 'sobre', label: labelSobre, Icon: IconGlobe },
  ], [labelConcilio, labelSobre])

  // Ajusta altura do dock ao trocar de aba
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

  // Smart Sticky Nav (Oculta ao rolar para baixo, mostra ao subir)
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

  // Detecção de Hash da URL (#secao)
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!hash) return

    const needsSobre = abasSobreSet.has(hash)

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
  }, [abasSobreSet, pathname, router, abaAtiva])

  return (
    <>
      <div
        ref={tabbarRef}
        className={`${styles.tabbar} ${tabbarHidden ? styles.tabbarHidden : ''}`}
        role="tablist"
        aria-label="Navegação por abas do concílio"
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
