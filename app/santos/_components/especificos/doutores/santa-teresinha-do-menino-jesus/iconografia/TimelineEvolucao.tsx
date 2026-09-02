// C:\Users\kitten\Documents\lux-fidei\app\santos\_components\especificos\doutores\santa-teresinha-do-menino-jesus\iconografia\TimelineEvolucao.tsx

'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from '@/app/santos/_styles/especificos/doutores/santa-teresinha-do-menino-jesus/iconografia/TimelineEvolucao.module.css'

interface EpocaRepresentacao {
  id: string
  src: string
  alt: string
  periodo: string
  titulo: string
  subtitulo: string
  descricao: string
  caracteristicas: string[]
  corAccent: string
}

const epocas: EpocaRepresentacao[] = [
  {
    id: '1900',
    src: '/santos/biografia/doutores/santa-teresinha/iconografia/evolucao-1900.webp',
    alt: 'Estampa devocional de Santa Teresinha do início do século XX, estilo holy card francês',
    periodo: '1898–1925',
    titulo: 'A Estampa Devocional',
    subtitulo: 'O nascimento do ícone popular',
    descricao: 'Após a publicação de "História de uma Alma" em 1898 e a rápida difusão do culto, surgem as primeiras estampas devocionais (images pieuses). Céline Martin controla a imagem da irmã, criando pinturas idealizadas que se tornam modelo para milhões de reproduções.',
    caracteristicas: [
      'Cores pastel suaves e desbotadas',
      'Halo dourado ornamentado',
      'Rosas em abundância',
      'Traços faciais adoçados',
      'Tipografia caligráfica',
      'Estilo "santinha" francês'
    ],
    corAccent: '#c4956a'
  },
  {
    id: '1930',
    src: '/santos/biografia/doutores/santa-teresinha/iconografia/evolucao-1930.webp',
    alt: 'Vitral Art Déco representando Santa Teresinha na Basílica de Lisieux, anos 1930',
    periodo: '1925–1950',
    titulo: 'A Era Monumental',
    subtitulo: 'Canonização e a Basílica',
    descricao: 'A canonização em 1925 e a construção da Basílica de Lisieux (1929-1954) inauguram a fase monumental. A estética Art Déco marca os grandes vitrais, mosaicos e esculturas. Teresa torna-se Padroeira das Missões (1927) e co-Padroeira da França (1944).',
    caracteristicas: [
      'Vitrais em cores intensas e saturadas',
      'Formas geométricas Art Déco',
      'Escala monumental e grandiosa',
      'Linhas fortes e angulares',
      'Materiais nobres: mosaico, mármore, bronze',
      'Composições verticais majestosas'
    ],
    corAccent: '#2e5984'
  },
  {
    id: '1970',
    src: '/santos/biografia/doutores/santa-teresinha/iconografia/evolucao-1970.webp',
    alt: 'Representação simplificada de Santa Teresinha, estilo pós-conciliar, anos 1960-1980',
    periodo: '1950–1990',
    titulo: 'A Simplificação',
    subtitulo: 'Vaticano II e a sobriedade',
    descricao: 'O Concílio Vaticano II (1962-1965) transforma a estética sacra. As representações de Teresa seguem a tendência de simplificação: menos ornamento, mais essência. Paradoxalmente, este período quase esquece Teresa, vista como "demasiado sentimental" pelos teólogos progressistas.',
    caracteristicas: [
      'Linhas simplificadas e limpas',
      'Poucos ornamentos decorativos',
      'Cores sóbrias e terrosas',
      'Estética quase minimalista',
      'Menos rosas, menos halo',
      'Foco na humanidade, não na glória'
    ],
    corAccent: '#7a6e5d'
  },
  {
    id: 'contemporanea',
    src: '/santos/biografia/doutores/santa-teresinha/iconografia/evolucao-contemporanea.webp',
    alt: 'Ícone bizantino contemporâneo de Santa Teresinha, estilo hierático com fundo dourado',
    periodo: '1990–Presente',
    titulo: 'O Renascimento',
    subtitulo: 'Doutorado e redescoberta',
    descricao: 'A proclamação como Doutora da Igreja (1997) revoluciona a percepção. Artistas contemporâneos redescobrem Teresa: ícones bizantinos a apresentam com gravidade teológica; retratos realistas resgatam seu verdadeiro rosto; a "santinha" cede lugar à pensadora profunda.',
    caracteristicas: [
      'Ícones bizantinos com fundo dourado',
      'Retratos baseados nas fotografias reais',
      'Gravidade e profundidade no olhar',
      'Síntese entre tradição e contemporaneidade',
      'Fim do sentimentalismo excessivo',
      'Teresa como Doutora, pensadora, mística'
    ],
    corAccent: '#8b6914'
  }
]

export default function TimelineEvolucao() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeEpoca, setActiveEpoca] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)

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
    <section ref={sectionRef} className={styles.section} id="timeline-evolucao">
      <div className={`${styles.sectionHeader} ${isVisible ? styles.headerVisible : ''}`}>
        <span className={styles.sectionNumber}>04</span>
        <h2 className={styles.sectionTitle}>Evolução das Representações</h2>
        <div className={styles.sectionDivider}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerIcon}>⏳</span>
          <span className={styles.dividerLine} />
        </div>
        <p className={styles.sectionSubtitle}>
          Mais de um século de transformações — como cada época projetou seus valores
          e sua estética sobre a imagem de Teresa.
        </p>
      </div>

      {/* Timeline horizontal */}
      <div className={styles.timelineWrapper} ref={timelineRef}>
        <div className={styles.timelineLine} />
        <div className={styles.timelineNodes}>
          {epocas.map((epoca, index) => (
            <button
              key={epoca.id}
              className={`${styles.timelineNode} ${activeEpoca === index ? styles.timelineNodeActive : ''}`}
              onClick={() => setActiveEpoca(index)}
              style={{ '--accent': epoca.corAccent } as React.CSSProperties}
            >
              <div className={styles.timelineNodeDot} />
              <span className={styles.timelineNodePeriodo}>{epoca.periodo}</span>
              <span className={styles.timelineNodeTitulo}>{epoca.titulo}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content display */}
      <div className={styles.epocaDisplay} style={{ '--accent': epocas[activeEpoca].corAccent } as React.CSSProperties}>
        <div className={styles.epocaImageColumn}>
          <div className={styles.epocaImageWrapper}>
            <Image
              src={epocas[activeEpoca].src}
              alt={epocas[activeEpoca].alt}
              fill
              quality={85}
              className={styles.epocaImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.epocaImageFrame} style={{ borderColor: epocas[activeEpoca].corAccent }} />
          </div>
          <span className={styles.epocaPeriodoLabel}>{epocas[activeEpoca].periodo}</span>
        </div>

        <div className={styles.epocaInfoColumn}>
          <span className={styles.epocaSubtitulo}>{epocas[activeEpoca].subtitulo}</span>
          <h3 className={styles.epocaTitulo}>{epocas[activeEpoca].titulo}</h3>
          <p className={styles.epocaDescricao}>{epocas[activeEpoca].descricao}</p>

          <div className={styles.epocaCaracteristicas}>
            <h4 className={styles.caracteristicasLabel}>Características visuais</h4>
            <ul className={styles.caracteristicasList}>
              {epocas[activeEpoca].caracteristicas.map((caract, i) => (
                <li key={i} className={styles.caracteristicaItem}>
                  <span className={styles.caracteristicaBullet} style={{ backgroundColor: epocas[activeEpoca].corAccent }} />
                  {caract}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}