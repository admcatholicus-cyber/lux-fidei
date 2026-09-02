// C:\Users\kitten\Documents\lux-fidei\app\santos\_components\especificos\doutores\santa-teresinha-do-menino-jesus\iconografia\ComparacaoFaces.tsx

'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import styles from '@/app/santos/_styles/especificos/doutores/santa-teresinha-do-menino-jesus/iconografia/ComparacaoFaces.module.css'

export default function ComparacaoFaces() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleMove = useCallback((clientX: number) => {
    if (!sliderRef.current || !isDragging) return
    const rect = sliderRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }, [isDragging])

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX)
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      handleMove(e.touches[0].clientX)
    }

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchmove', handleTouchMove, { passive: false })
      window.addEventListener('touchend', handleMouseUp)
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging, handleMove])

  return (
    <section ref={sectionRef} className={styles.section} id="comparacao-faces">
      <div className={`${styles.sectionHeader} ${isVisible ? styles.headerVisible : ''}`}>
        <span className={styles.sectionNumber}>03</span>
        <h2 className={styles.sectionTitle}>A Verdadeira Face</h2>
        <div className={styles.sectionDivider}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerIcon}>⚖️</span>
          <span className={styles.dividerLine} />
        </div>
        <p className={styles.sectionSubtitle}>
          A tensão entre o rosto real e a imagem devocional. Deslize o controle para comparar
          a fotografia autêntica com a pintura idealizada por Céline.
        </p>
      </div>

      <div className={styles.comparacaoContainer}>
        <div
          ref={sliderRef}
          className={styles.sliderContainer}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {/* Imagem de fundo (pintura de Céline) */}
          <div className={styles.sliderImageWrapper}>
            <Image
              src="/santos/biografia/doutores/santa-teresinha/iconografia/comparacao-pintura-celine.webp"
              alt="Pintura devocional de Teresa por Céline Martin — rosto idealizado e suavizado"
              fill
              quality={90}
              className={styles.sliderImage}
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div className={styles.sliderLabel + ' ' + styles.sliderLabelRight}>
              <span className={styles.labelTag}>Pintura de Céline</span>
              <span className={styles.labelYear}>c. 1912</span>
            </div>
          </div>

          {/* Imagem de frente (foto real), clippada pelo slider */}
          <div
            className={styles.sliderImageWrapper + ' ' + styles.sliderFront}
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src="/santos/biografia/doutores/santa-teresinha/iconografia/comparacao-foto-real.webp"
              alt="Fotografia autêntica de Teresa Martin — rosto real com traços angulosos"
              fill
              quality={90}
              className={styles.sliderImage}
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div className={styles.sliderLabel + ' ' + styles.sliderLabelLeft}>
              <span className={styles.labelTag}>Fotografia Real</span>
              <span className={styles.labelYear}>c. 1895</span>
            </div>
          </div>

          {/* Slider handle */}
          <div
            className={styles.sliderHandle}
            style={{ left: `${sliderPosition}%` }}
          >
            <div className={styles.sliderHandleLine} />
            <div className={styles.sliderHandleGrip}>
              <span className={styles.sliderArrow}>◂</span>
              <span className={styles.sliderArrow}>▸</span>
            </div>
            <div className={styles.sliderHandleLine} />
          </div>
        </div>

        <div className={styles.comparacaoAnalise}>
          <div className={styles.analiseCard}>
            <div className={styles.analiseCardHeader}>
              <span className={styles.analiseIcon}>📷</span>
              <h3>A Teresa Real</h3>
            </div>
            <ul className={styles.analiseList}>
              <li>Rosto anguloso, queixo pronunciado</li>
              <li>Olhar direto, firme, penetrante</li>
              <li>Expressão séria, madura</li>
              <li>Cabelo castanho sob o véu</li>
              <li>Traços de jovem decidida e forte</li>
            </ul>
          </div>

          <div className={styles.analiseVs}>
            <span>VS</span>
          </div>

          <div className={styles.analiseCard}>
            <div className={styles.analiseCardHeader}>
              <span className={styles.analiseIcon}>🎨</span>
              <h3>A Teresa Idealizada</h3>
            </div>
            <ul className={styles.analiseList}>
              <li>Rosto arredondado, traços suaves</li>
              <li>Olhar doce, quase etéreo</li>
              <li>Expressão meiga, angelical</li>
              <li>Pele rosada, sem imperfeições</li>
              <li>Traços de menina frágil e delicada</li>
            </ul>
          </div>
        </div>

        <div className={styles.comparacaoNota}>
          <p>
            <strong>Nota histórica:</strong> Céline Martin (Irmã Genoveva) retocou extensivamente
            as fotografias e criou pinturas idealizadas de Teresa após sua morte. Embora feitas
            com amor fraternal, estas imagens distorceram a percepção pública da santa por décadas.
            Somente no final do século XX, com a publicação das fotografias originais sem retoques,
            o mundo pôde conhecer o verdadeiro rosto de Teresa.
          </p>
        </div>
      </div>
    </section>
  )
}