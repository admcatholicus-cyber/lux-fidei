// C:\Users\kitten\Documents\lux-fidei\app\santos\_components\especificos\doutores\santa-teresinha-do-menino-jesus\iconografia\AtributosIconograficos.tsx

'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from '@/app/santos/_styles/especificos/doutores/santa-teresinha-do-menino-jesus/iconografia/AtributosIconograficos.module.css'

interface Atributo {
  id: string
  src: string
  alt: string
  titulo: string
  subtitulo: string
  descricao: string
  significado: string
  icon: string
}

const atributos: Atributo[] = [
  {
    id: 'menino-jesus',
    src: '/santos/biografia/doutores/santa-teresinha/iconografia/atributo-menino-jesus.webp',
    alt: 'Teresa segurando o Menino Jesus, representação devocional',
    titulo: 'O Menino Jesus',
    subtitulo: 'O nome que define',
    descricao: 'Teresa escolheu ser chamada "do Menino Jesus" — a infância espiritual é o coração da sua doutrina. Nas representações, o Menino Jesus aparece frequentemente em seus braços ou ao seu lado.',
    significado: 'Representa a via da infância espiritual: fazer-se pequeno diante de Deus, confiar como uma criança confia no pai. Não é infantilismo, mas a mais radical forma de abandono e confiança.',
    icon: ''
  },
  {
    id: 'sagrada-face',
    src: '/santos/biografia/doutores/santa-teresinha/iconografia/atributo-sagrada-face.webp',
    alt: 'Sagrada Face de Jesus, devoção central de Santa Teresinha',
    titulo: 'A Sagrada Face',
    subtitulo: 'O rosto oculto de Cristo',
    descricao: 'O nome completo de Teresa no Carmelo era "do Menino Jesus e da Sagrada Face". Esta devoção ao rosto sofredor de Cristo no Sudário marcou profundamente sua espiritualidade.',
    significado: 'A Sagrada Face revela o aspecto complementar: se o Menino Jesus é a confiança, a Face é o sofrimento redentor. Teresa contemplou o rosto desfigurado de Cristo para compreender o amor que se esconde na dor.',
    icon: ''
  },
  {
    id: 'livro',
    src: '/santos/biografia/doutores/santa-teresinha/iconografia/atributo-livro.webp',
    alt: 'Livro aberto representando a História de uma Alma, obra de Santa Teresinha',
    titulo: 'O Livro',
    subtitulo: 'Doutora da Igreja',
    descricao: '"História de uma Alma", publicado em 1898, tornou-se um dos livros mais traduzidos do mundo. Em 1997, João Paulo II proclamou Teresa Doutora da Igreja.',
    significado: 'O livro nas representações simboliza seu doutorado e sua missão de ensinar. Teresa que nunca pregou em púlpitos, nunca lecionou em universidades, tornou-se mestra universal pela pena e pelo exemplo.',
    icon: ''
  }
]

export default function AtributosIconograficos() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeAtributo, setActiveAtributo] = useState(0)

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

  return (
    <section ref={sectionRef} className={styles.section} id="atributos-iconograficos">
      <div className={`${styles.sectionHeader} ${isVisible ? styles.headerVisible : ''}`}>
        <span className={styles.sectionNumber}>02</span>
        <h2 className={styles.sectionTitle}>Atributos Iconográficos</h2>
        <div className={styles.sectionDivider}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerIcon}>🎨</span>
          <span className={styles.dividerLine} />
        </div>
        <p className={styles.sectionSubtitle}>
          Os elementos simbólicos que identificam Teresa na arte sacra — cada um carrega
          camadas profundas de significado teológico e espiritual.
        </p>
      </div>

      <div className={styles.atributosContainer}>
        {/* Tab navigation */}
        <div className={styles.tabNav}>
          {atributos.map((attr, index) => (
            <button
              key={attr.id}
              className={`${styles.tab} ${activeAtributo === index ? styles.tabActive : ''}`}
              onClick={() => setActiveAtributo(index)}
            >
              <span className={styles.tabIcon}>{attr.icon}</span>
              <span className={styles.tabTitle}>{attr.titulo}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className={styles.atributoContent}>
          <div className={styles.atributoImageWrapper}>
            <Image
              src={atributos[activeAtributo].src}
              alt={atributos[activeAtributo].alt}
              fill
              quality={85}
              className={styles.atributoImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.atributoImageOverlay} />
          </div>

          <div className={styles.atributoInfo}>
            <span className={styles.atributoIcon}>{atributos[activeAtributo].icon}</span>
            <span className={styles.atributoSubtitulo}>{atributos[activeAtributo].subtitulo}</span>
            <h3 className={styles.atributoTitulo}>{atributos[activeAtributo].titulo}</h3>
            <p className={styles.atributoDescricao}>{atributos[activeAtributo].descricao}</p>
            <div className={styles.atributoSignificadoBox}>
              <h4 className={styles.significadoLabel}>Significado Teológico</h4>
              <p className={styles.significadoTexto}>{atributos[activeAtributo].significado}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards grid mobile */}
      <div className={styles.mobileCards}>
        {atributos.map((attr) => (
          <div key={attr.id} className={styles.mobileAtributoCard}>
            <div className={styles.mobileAtributoImageWrapper}>
              <Image
                src={attr.src}
                alt={attr.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={styles.mobileAtributoImage}
              />
              <div className={styles.mobileAtributoImageOverlay}>
                <span className={styles.mobileAtributoIcon}>{attr.icon}</span>
              </div>
            </div>
            <div className={styles.mobileAtributoInfo}>
              <h3 className={styles.mobileAtributoTitle}>{attr.titulo}</h3>
              <p className={styles.mobileAtributoDesc}>{attr.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}