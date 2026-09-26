'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import styles from './ConcilioLayout.module.css'

interface ConcilioLayoutProps {
  children: React.ReactNode;
  numeroEcum?: string;
  titulo: string;
  subtitulo: string;
  data: string;
  local: string;
  proxLink?: string;
  proxTexto?: string;
}

export function ConcilioLayout({
  children,
  numeroEcum,
  titulo,
  subtitulo,
  data,
  local,
  proxLink,
  proxTexto
}: ConcilioLayoutProps) {
  const [progressWidth, setProgressWidth] = useState(0)
  const [topoVisivel, setTopoVisivel] = useState(false)
  const [btnVoltarVisivel, setBtnVoltarVisivel] = useState(true)
  const ultimoScrollRef = useRef(0)

  const handleScroll = useCallback(() => {
    const doc = document.documentElement
    const scrollAtual = doc.scrollTop
    const alturaTotal = doc.scrollHeight - doc.clientHeight
    const prog = alturaTotal > 0 ? (scrollAtual / alturaTotal) * 100 : 0

    setProgressWidth(prog)
    setTopoVisivel(scrollAtual > 400)

    if (scrollAtual < 80) setBtnVoltarVisivel(true)
    else if (scrollAtual > ultimoScrollRef.current + 5) setBtnVoltarVisivel(false)
    else if (scrollAtual < ultimoScrollRef.current - 5) setBtnVoltarVisivel(true)

    ultimoScrollRef.current = scrollAtual
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.progressBar} style={{ width: `${progressWidth}%` }} />

      <Link
        href="/estudos/concilios"
        className={`${styles.btnVoltarDinamico} ${btnVoltarVisivel ? styles.visivel : ''}`}
        aria-label="Voltar para o índice dos concílios"
      >
        <span className={styles.btnVoltarDinamicoSeta}>←</span>
        <span className={styles.btnVoltarDinamicoTexto}>Voltar</span>
      </Link>

      <button
        className={`${styles.btnTopo} ${topoVisivel ? styles.visivel : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Voltar ao topo"
        aria-label="Voltar ao topo da página"
      >
        ↑
      </button>

      <div className={styles.pagina}>
        <header className={styles.header} id="topo">
          {numeroEcum && <span className={styles.numero}>{numeroEcum}</span>}
          <h1 className={styles.headerH1}>{titulo}</h1>
          <p className={styles.headerSubtitulo}>{subtitulo}</p>
          <div className={styles.headerMeta}>
            <p className={styles.headerAno}>{data}</p>
            <p className={styles.headerLocal}>{local}</p>
          </div>
        </header>

        <main className={styles.conteudoPrincipal}>
          {children}
        </main>

        <footer className={styles.footer}>
          <p>
            <Link href="/estudos/concilios">← Voltar ao índice</Link>
            {proxLink && proxTexto && (
              <>
                &nbsp;·&nbsp;
                <Link href={proxLink}>Próximo: {proxTexto} →</Link>
              </>
            )}
          </p>
          <p className={styles.footerSub}>
            Lux Fidei © 2026 — <em>&ldquo;A verdade é o bem do intelecto.&rdquo;</em>
          </p>
        </footer>
      </div>
    </div>
  )
}
