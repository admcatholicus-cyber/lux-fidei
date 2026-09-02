// C:\Users\kitten\Documents\lux-fidei\app\santos\_components\especificos\doutores\santa-teresinha-do-menino-jesus\iconografia\FotografiasHistoricas.tsx

'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import styles from '@/app/santos/_styles/especificos/doutores/santa-teresinha-do-menino-jesus/iconografia/FotografiasHistoricas.module.css'

interface Fotografia {
  id: string
  src: string
  alt: string
  titulo: string
  data: string
  descricao: string
  detalhes: string
  proporcao: 'retrato' | 'paisagem'
}

const fotografias: Fotografia[] = [
  {
    id: 'novica',
    src: '/santos/biografia/doutores/santa-teresinha/iconografia/foto-teresa-noviça.webp',
    alt: 'Teresa Martin como noviça carmelita em 1889, aos 16 anos',
    titulo: 'A Noviça',
    data: '1889',
    descricao: 'Aos 16 anos, Teresa veste pela primeira vez o hábito carmelita com o véu branco de noviça.',
    detalhes: 'Uma das primeiras fotografias no Carmelo. O olhar direto e firme já revela a determinação extraordinária de quem, apenas um ano antes, ajoelhou-se diante do Papa para pedir dispensa de idade.',
    proporcao: 'retrato'
  },
  {
    id: 'professa',
    src: '/santos/biografia/doutores/santa-teresinha/iconografia/foto-teresa-professa.webp',
    alt: 'Teresa Martin após a profissão religiosa em 1890, com véu negro',
    titulo: 'A Professa',
    data: '8 de setembro de 1890',
    descricao: 'O véu negro da profissão solene substitui o branco. Teresa tem 17 anos e consagra-se definitivamente.',
    detalhes: 'Neste dia, Teresa escreveu: "Que belo dia, o mais bonito de todos! Nenhuma nuvem no céu..." No verso da estampa de profissão, escreveu que vinha ao Carmelo para "salvar almas e rezar pelos sacerdotes".',
    proporcao: 'retrato'
  },
  {
    id: 'joana-darc',
    src: '/santos/biografia/doutores/santa-teresinha/iconografia/foto-teresa-recreacao.webp',
    alt: 'Teresa representando Joana d\'Arc na prisão, janeiro de 1895',
    titulo: 'Joana d\'Arc na Prisão',
    data: 'Janeiro de 1895',
    descricao: 'Em uma das recreações teatrais do Carmelo, Teresa interpreta sua heroína: Joana d\'Arc acorrentada.',
    detalhes: 'Teresa nutria profunda devoção por Joana d\'Arc e escreveu duas peças sobre ela. Nesta fotografia surpreendente, a identificação entre as duas é visceral: ambas jovens francesas entregues totalmente a Deus, consumidas por um fogo interior.',
    proporcao: 'retrato'
  },
  {
    id: 'irmas',
    src: '/santos/biografia/doutores/santa-teresinha/iconografia/foto-teresa-irmas.webp',
    alt: 'Teresa com as irmãs carmelitas no jardim do Carmelo de Lisieux, 1895',
    titulo: 'Comunidade do Carmelo',
    data: '1895',
    descricao: 'No jardim do claustro, Teresa aparece entre suas irmãs de comunidade — incluindo suas irmãs de sangue.',
    detalhes: 'Das cinco irmãs Martin, quatro entraram para o Carmelo de Lisieux: Paulina (Madre Inês), Maria (Irmã Maria do Sagrado Coração), Teresa e Céline (Irmã Genoveva). A quinta, Leônia, tornou-se Visitandina.',
    proporcao: 'paisagem'
  },
  {
    id: 'crucifixo',
    src: '/santos/biografia/doutores/santa-teresinha/iconografia/foto-teresa-crucifixo.webp',
    alt: 'Teresa segurando o crucifixo carmelita, 1897, últimos meses de vida',
    titulo: 'Com o Crucifixo',
    data: '1897',
    descricao: 'Uma das últimas fotografias. Teresa abraça o grande crucifixo carmelita, já marcada pela tuberculose.',
    detalhes: 'O rosto revela o sofrimento físico dos últimos meses, mas o olhar mantém uma intensidade impressionante. Teresa vivia então a mais terrível "noite da fé", tentada contra a esperança, mas escrevia: "Eu corro, eu voo para Jesus".',
    proporcao: 'retrato'
  },
  {
    id: 'lavando',
    src: '/santos/biografia/doutores/santa-teresinha/iconografia/foto-teresa-lavando.webp',
    alt: 'Teresa lavando roupa no lavabo do Carmelo de Lisieux, 1895',
    titulo: 'No Lavabo',
    data: '1895',
    descricao: 'O cotidiano do Carmelo: Teresa lavando roupa no lavoir com as demais irmãs.',
    detalhes: 'Esta é uma das imagens mais icônicas da espiritualidade teresiana: a santidade vivida nos gestos mais humildes e ordinários. "Fazer as pequenas coisas com grande amor" — esta fotografia é a tradução visual do Pequeno Caminho.',
    proporcao: 'paisagem'
  }
]

export default function FotografiasHistoricas() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }, [])

  const navigateLightbox = useCallback((direction: 'prev' | 'next') => {
    setLightboxIndex(prev => {
      if (direction === 'next') return (prev + 1) % fotografias.length
      return prev === 0 ? fotografias.length - 1 : prev - 1
    })
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') navigateLightbox('next')
      if (e.key === 'ArrowLeft') navigateLightbox('prev')
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, closeLightbox, navigateLightbox])

  return (
    <section ref={sectionRef} className={styles.section} id="fotografias-historicas">
      <div className={styles.sectionHeader}>
        <div className={`${styles.headerContent} ${isVisible ? styles.headerVisible : ''}`}>
          <span className={styles.sectionNumber}>01</span>
          <h2 className={styles.sectionTitle}>Fotografias Históricas</h2>
          <div className={styles.sectionDivider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerIcon}>📷</span>
            <span className={styles.dividerLine} />
          </div>
          <p className={styles.sectionSubtitle}>
            Graças à sua irmã Céline — fotógrafa amadora talentosa — Teresa é uma das santas
            mais fotografadas da história. Cada imagem é um documento precioso da vida claustral.
          </p>
        </div>
      </div>

      <div className={styles.fotografiasLayout}>
        {/* Navegação lateral / thumbnails */}
        <div className={styles.thumbnailNav}>
          {fotografias.map((foto, index) => (
            <button
              key={foto.id}
              className={`${styles.thumbnail} ${activeIndex === index ? styles.thumbnailActive : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver: ${foto.titulo}`}
            >
              <div className={styles.thumbnailImageWrapper}>
                <Image
                  src={foto.src}
                  alt=""
                  fill
                  sizes="80px"
                  className={styles.thumbnailImage}
                />
              </div>
              <span className={styles.thumbnailYear}>{foto.data.slice(foto.data.length - 4)}</span>
            </button>
          ))}
        </div>

        {/* Imagem principal */}
        <div className={styles.mainDisplay}>
          <div
            className={`${styles.mainImageContainer} ${fotografias[activeIndex].proporcao === 'paisagem' ? styles.mainImagePaisagem : styles.mainImageRetrato}`}
            onClick={() => openLightbox(activeIndex)}
            role="button"
            tabIndex={0}
            aria-label="Ampliar fotografia"
          >
            <Image
              src={fotografias[activeIndex].src}
              alt={fotografias[activeIndex].alt}
              fill
              quality={85}
              className={styles.mainImage}
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div className={styles.mainImageOverlay}>
              <span className={styles.zoomIcon}>🔍</span>
            </div>
            <div className={styles.mainImageFrame} />
          </div>
        </div>

        {/* Informações */}
        <div className={styles.infoPanel}>
          <div className={styles.infoPanelInner}>
            <span className={styles.infoDate}>{fotografias[activeIndex].data}</span>
            <h3 className={styles.infoTitle}>{fotografias[activeIndex].titulo}</h3>
            <p className={styles.infoDescricao}>{fotografias[activeIndex].descricao}</p>
            <div className={styles.infoDivider} />
            <p className={styles.infoDetalhes}>{fotografias[activeIndex].detalhes}</p>
            <div className={styles.infoFooter}>
              <span className={styles.infoCredito}>Arquivo do Carmelo de Lisieux</span>
              <span className={styles.infoDominio}>Domínio Público</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid mobile */}
      <div className={styles.mobileGrid}>
        {fotografias.map((foto, index) => (
          <div
            key={foto.id}
            className={`${styles.mobileCard} ${foto.proporcao === 'paisagem' ? styles.mobileCardWide : ''}`}
            onClick={() => openLightbox(index)}
          >
            <div className={styles.mobileCardImage}>
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.mobileCardImg}
              />
              <div className={styles.mobileCardOverlay}>
                <span className={styles.mobileCardDate}>{foto.data}</span>
                <h3 className={styles.mobileCardTitle}>{foto.titulo}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={closeLightbox} aria-label="Fechar">
              ✕
            </button>
            <button
              className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
              onClick={() => navigateLightbox('prev')}
              aria-label="Anterior"
            >
              ‹
            </button>
            <div className={styles.lightboxImageWrapper}>
              <Image
                src={fotografias[lightboxIndex].src}
                alt={fotografias[lightboxIndex].alt}
                fill
                quality={95}
                className={styles.lightboxImage}
                sizes="90vw"
              />
            </div>
            <button
              className={`${styles.lightboxNav} ${styles.lightboxNext}`}
              onClick={() => navigateLightbox('next')}
              aria-label="Próxima"
            >
              ›
            </button>
            <div className={styles.lightboxInfo}>
              <h3>{fotografias[lightboxIndex].titulo}</h3>
              <p>{fotografias[lightboxIndex].data}</p>
            </div>
            <div className={styles.lightboxCounter}>
              {lightboxIndex + 1} / {fotografias.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}