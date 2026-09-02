// C:\Users\kitten\Documents\lux-fidei\app\santos\_components\especificos\doutores\santa-teresinha-do-menino-jesus\iconografia\HeroIconografia.tsx

'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from '@/app/santos/_styles/especificos/doutores/santa-teresinha-do-menino-jesus/iconografia/HeroIconografia.module.css'

export default function HeroIconografia() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        if (rect.bottom > 0) {
          setScrollY(window.scrollY)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.heroImageWrapper}>
        <Image
          src="/santos/biografia/doutores/santa-teresinha/iconografia/hero-teresinha.webp"
          alt="Santa Teresinha do Menino Jesus — Representação iconográfica panorâmica"
          fill
          priority
          quality={90}
          className={styles.heroImage}
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroVignette} />
      </div>

      <div className={`${styles.heroContent} ${isVisible ? styles.heroContentVisible : ''}`}>
        <div className={styles.heroEpigrafe}>
          <span className={styles.heroCross}>✦</span>
          <span className={styles.heroSubtitle}>Estudo Iconográfico</span>
          <span className={styles.heroCross}>✦</span>
        </div>

        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleLine1}>A Imagem de</span>
          <span className={styles.heroTitleLine2}>Santa Teresinha</span>
          <span className={styles.heroTitleLine3}>Através dos Séculos</span>
        </h1>

        <p className={styles.heroDescription}>
          Da fotografia autêntica à santinha açucarada, do retrato íntimo ao ícone universal.
          <br />
          Uma jornada visual pela construção da imagem da mais popular santa dos tempos modernos.
        </p>

        <div className={styles.heroMeta}>
          <div className={styles.heroMetaItem}>
            <span className={styles.heroMetaLabel}>Período</span>
            <span className={styles.heroMetaValue}>1889–Presente</span>
          </div>
          <div className={styles.heroMetaDivider} />
          <div className={styles.heroMetaItem}>
            <span className={styles.heroMetaLabel}>Fotografias</span>
            <span className={styles.heroMetaValue}>47 Autênticas</span>
          </div>
          <div className={styles.heroMetaDivider} />
          <div className={styles.heroMetaItem}>
            <span className={styles.heroMetaLabel}>Proclamada Doutora</span>
            <span className={styles.heroMetaValue}>1997</span>
          </div>
        </div>

        <div className={styles.heroScrollIndicator}>
          <span className={styles.heroScrollText}>Rolar para explorar</span>
          <div className={styles.heroScrollLine}>
            <div className={styles.heroScrollDot} />
          </div>
        </div>
      </div>
    </section>
  )
}