// C:\Users\kitten\Documents\lux-fidei\app\santos\_components\especificos\doutores\santa-teresinha-do-menino-jesus\iconografia\GaleriaArte.tsx

'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import styles from '@/app/santos/_styles/especificos/doutores/santa-teresinha-do-menino-jesus/iconografia/GaleriaArte.module.css'

interface ObraArte {
  id: string
  src: string
  alt: string
  titulo: string
  tipo: string
  localizacao: string
  periodo: string
  proporcao: 'retrato' | 'quadrado'
  destaque?: boolean
}

const obras: ObraArte[] = [
  {
    id: 'vitral-basilica',
    src: '/santos/biografia/doutores/santa-teresinha/iconografia/arte-vitral-basilica.webp',
    alt: 'Grande vitral da Basílica de Santa Teresinha em Lisieux, com cores vibrantes',
    titulo: 'Vitral da Basílica de Lisieux',
    tipo: 'Vitral',
    localizacao: 'Basílica de Sainte-Thérèse, Lisieux, França',
    periodo: 'c. 1930–1954',
    proporcao: 'retrato',
    destaque: true
  },
  {
    id: 'icone-bizantino',
    src: '/santos/biografia/doutores/santa-teresinha/iconografia/arte-icone-bizantino.webp',
    alt: 'Ícone bizantino de Santa Teresinha com fundo dourado e estilo hierático',
    titulo: 'Ícone Bizantino',
    tipo: 'Ícone sobre madeira',
    localizacao: 'Coleção privada',
    periodo: 'Contemporâneo',
    proporcao: 'quadrado'
  },
  {
    id: 'mosaico-roma',
    src: '/santos/biografia/doutores/santa-teresinha/iconografia/arte-mosaico-roma.webp',
    alt: 'Mosaico romano de Santa Teresinha com tesselas douradas e azuis',
    titulo: 'Mosaico Romano',
    tipo: 'Mosaico em tesselas',
    localizacao: 'Roma, Itália',
    periodo: 'Séc. XX',
    proporcao: 'quadrado'
  },
  {
    id: 'pintura-classica',
    src: '/santos/biografia/doutores/santa-teresinha/iconografia/arte-pintura-classica.webp',
    alt: 'Retrato devocional clássico de Santa Teresinha por Céline Martin',
    titulo: 'Retrato por Céline Martin',
    tipo: 'Óleo sobre tela',
    localizacao: 'Carmelo de Lisieux',
    periodo: 'c. 1912',
    proporcao: 'retrato'
  },
  {
    id: 'escultura-marmore',
    src: '/santos/biografia/doutores/santa-teresinha/iconografia/arte-escultura-marmore.webp',
    alt: 'Estátua de Santa Teresinha em mármore branco com rosas e crucifixo',
    titulo: 'Escultura em Mármore',
    tipo: 'Mármore branco',
    localizacao: 'França',
    periodo: 'Início séc. XX',
    proporcao: 'retrato'
  },
  {
    id: 'contemporanea',
    src: '/santos/biografia/doutores/santa-teresinha/iconografia/arte-contemporanea.webp',
    alt: 'Retrato contemporâneo realista de Santa Teresinha baseado nas fotografias autênticas',
    titulo: 'Retrato Contemporâneo',
    tipo: 'Técnica mista',
    localizacao: 'Arte contemporânea',
    periodo: 'Séc. XXI',
    proporcao: 'retrato'
  }
]

export default function GaleriaArte() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [selectedObra, setSelectedObra] = useState<ObraArte | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const closeModal = useCallback(() => {
    setSelectedObra(null)
    document.body.style.overflow = ''
  }, [])

  const openModal = useCallback((obra: ObraArte) => {
    setSelectedObra(obra)
    document.body.style.overflow = 'hidden'
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedObra) closeModal()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [selectedObra, closeModal])

  return (
    <section ref={sectionRef} className={styles.section} id="galeria-arte">
      <div className={`${styles.sectionHeader} ${isVisible ? styles.headerVisible : ''}`}>
        <span className={styles.sectionNumber}>05</span>
        <h2 className={styles.sectionTitle}>Galeria de Arte Sacra</h2>
        <div className={styles.sectionDivider}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerIcon}>🖼️</span>
          <span className={styles.dividerLine} />
        </div>
        <p className={styles.sectionSubtitle}>
          Do vitral monumental ao ícone contemplativo — as mais notáveis representações
          artísticas de Teresa ao longo dos séculos.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className={styles.masonryGrid}>
        {obras.map((obra, index) => (
          <div
            key={obra.id}
            className={`
              ${styles.masonryItem}
              ${obra.proporcao === 'quadrado' ? styles.masonrySquare : styles.masonryTall}
              ${obra.destaque ? styles.masonryDestaque : ''}
              ${isVisible ? styles.masonryItemVisible : ''}
            `}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => openModal(obra)}
            role="button"
            tabIndex={0}
          >
            <div className={styles.masonryImageWrapper}>
              <Image
                src={obra.src}
                alt={obra.alt}
                fill
                quality={85}
                className={styles.masonryImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className={styles.masonryOverlay}>
                <div className={styles.masonryOverlayContent}>
                  <span className={styles.masonryTipo}>{obra.tipo}</span>
                  <h3 className={styles.masonryTitulo}>{obra.titulo}</h3>
                  <span className={styles.masonryPeriodo}>{obra.periodo}</span>
                </div>
                <span className={styles.masonryExpand}>Ampliar →</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedObra && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeModal} aria-label="Fechar">
              ✕
            </button>
            <div className={styles.modalImageWrapper}>
              <Image
                src={selectedObra.src}
                alt={selectedObra.alt}
                fill
                quality={95}
                className={styles.modalImage}
                sizes="90vw"
              />
            </div>
            <div className={styles.modalInfo}>
              <span className={styles.modalTipo}>{selectedObra.tipo}</span>
              <h3 className={styles.modalTitulo}>{selectedObra.titulo}</h3>
              <div className={styles.modalMeta}>
                <span>{selectedObra.localizacao}</span>
                <span className={styles.modalMetaDivider}>•</span>
                <span>{selectedObra.periodo}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}