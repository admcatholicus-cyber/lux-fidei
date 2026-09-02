// C:\Users\kitten\Documents\lux-fidei\app\santos\_components\especificos\doutores\santa-teresinha-do-menino-jesus\iconografia\BlocosEditoriais.tsx

'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from '@/app/santos/_styles/especificos/doutores/santa-teresinha-do-menino-jesus/iconografia/BlocosEditoriais.module.css'

export default function BlocosEditoriais() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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
    <section ref={sectionRef} className={styles.section} id="blocos-editoriais">
      {/* Bloco 1: As Rosas */}
      <div className={`${styles.blocoEditorial} ${styles.blocoRosas} ${isVisible ? styles.blocoVisible : ''}`}>
        <div className={styles.blocoImageColumn}>
          <div className={styles.blocoImageWrapper}>
            <Image
              src="/santos/biografia/doutores/santa-teresinha/iconografia/editorial-rosa-detalhe.webp"
              alt="Detalhe close-up de rosas na iconografia de Santa Teresinha"
              fill
              quality={85}
              className={styles.blocoImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className={styles.blocoTextColumn}>
          <div className={styles.blocoTextInner}>
            <span className={styles.blocoNumero}>06</span>
            <span className={styles.blocoCategoria}>Símbolo</span>
            <h2 className={styles.blocoTitulo}>A Chuva de Rosas</h2>
            <div className={styles.blocoDivider} />
            <p className={styles.blocoTexto}>
              «Depois da minha morte, farei cair uma chuva de rosas.» Esta promessa,
              pronunciada nos últimos meses de vida, tornou-se o atributo iconográfico
              mais reconhecível de Teresa no mundo inteiro.
            </p>
            <p className={styles.blocoTexto}>
              As rosas aparecem em praticamente todas as representações: nos braços,
              caindo do céu, em buquês, pétalas soltas. Cada rosa simboliza uma graça
              obtida por sua intercessão. Não é mero adorno floral — é a tradução visual
              da promessa de uma santa que, do Céu, continua agindo na terra.
            </p>
            <p className={styles.blocoTexto}>
              A variedade de rosas nas representações segue um código sutil: rosas
              vermelhas (amor e sacrifício), rosas brancas (pureza e inocência),
              rosas cor-de-rosa (ternura e compaixão), rosas amarelas (alegria e
              sabedoria). Juntas, formam o espectro completo da doutrina teresiana.
            </p>
            <blockquote className={styles.blocoQuote}>
              <p>«Eu quero passar o meu Céu fazendo o bem sobre a terra.»</p>
              <cite>— Santa Teresinha, Novissima Verba</cite>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Bloco 2: O Hábito */}
      <div className={`${styles.blocoEditorial} ${styles.blocoHabito} ${styles.blocoReverse} ${isVisible ? styles.blocoVisible : ''}`}>
        <div className={styles.blocoTextColumn}>
          <div className={styles.blocoTextInner}>
            <span className={styles.blocoNumero}>07</span>
            <span className={styles.blocoCategoria}>Vestimenta</span>
            <h2 className={styles.blocoTitulo}>O Hábito Carmelita</h2>
            <div className={styles.blocoDivider} />
            <p className={styles.blocoTexto}>
              O hábito carmelita descalço é um dos elementos mais constantes na iconografia
              teresiana. Composto pelo vestido castanho (túnica), o escapulário sobre o peito,
              a capa branca (ou creme) e o véu — branco para noviças, negro para profissas.
            </p>
            <p className={styles.blocoTexto}>
              Cada peça carrega séculos de tradição que remonta ao Monte Carmelo na Terra Santa.
              O castanho terroso simboliza a humildade e a penitência; o branco do manto
              evoca a pureza contemplativa; o escapulário é sinal de pertença à Ordem e de
              proteção mariana.
            </p>
            <p className={styles.blocoTexto}>
              Para Teresa, vestir o hábito não era formalidade — era sacramento visível de
              uma entrega total. Em suas fotografias, o hábito nunca é mero figurino: é a
              segunda pele de uma mulher que se revestiu inteiramente de Cristo.
            </p>
            <div className={styles.blocoDetalhe}>
              <h4>Elementos do hábito</h4>
              <div className={styles.detalheGrid}>
                <div className={styles.detalheItem}>
                  <span className={styles.detalheIcon}>▪</span>
                  <div>
                    <strong>Túnica castanha</strong>
                    <p>Símbolo de penitência e humildade</p>
                  </div>
                </div>
                <div className={styles.detalheItem}>
                  <span className={styles.detalheIcon}>▪</span>
                  <div>
                    <strong>Escapulário</strong>
                    <p>Proteção mariana e pertença à Ordem</p>
                  </div>
                </div>
                <div className={styles.detalheItem}>
                  <span className={styles.detalheIcon}>▪</span>
                  <div>
                    <strong>Manto branco</strong>
                    <p>Pureza contemplativa</p>
                  </div>
                </div>
                <div className={styles.detalheItem}>
                  <span className={styles.detalheIcon}>▪</span>
                  <div>
                    <strong>Véu negro</strong>
                    <p>Profissão solene e consagração definitiva</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blocoImageColumn}>
          <div className={styles.blocoImageWrapper}>
            <Image
              src="/santos/biografia/doutores/santa-teresinha/iconografia/editorial-habito-carmelita.webp"
              alt="Detalhe do hábito carmelita descalço — escapulário, véu e manto"
              fill
              quality={85}
              className={styles.blocoImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}