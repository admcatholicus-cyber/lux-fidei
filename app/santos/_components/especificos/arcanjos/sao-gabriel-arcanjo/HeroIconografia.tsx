'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '@/app/santos/_styles/especificos/arcanjos/sao-gabriel-arcanjo/hero-iconografia.module.css';

const BASE = '/santos/biografia/arcanjos/sao-gabriel-arcanjo/iconografia/hero';

export default function HeroIconografia() {
  const [carregado, setCarregado] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setCarregado(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      className={`${styles.hero} ${carregado ? styles.heroCarregado : ''}`}
      aria-label="Introdução à Iconografia do Arcanjo Gabriel"
    >
      {/* Fundo atmosférico: Tiepolo desfocado */}
      <div
        className={styles.fundo}
        style={{ backgroundImage: `url(${BASE}/tiepolo-fundo.webp)` }}
        aria-hidden="true"
      />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.grao} aria-hidden="true" />

      {/* Conteúdo em duas colunas */}
      <div className={styles.conteudo}>
        {/* Coluna esquerda: obra em destaque (Zurbarán) */}
        <figure className={styles.obra}>
          <div className={styles.obraMoldura}>
            <img
              src={`${BASE}/zurbaran-anunciacao.webp`}
              alt="Detalhe do Arcanjo Gabriel na Anunciação, de Francisco de Zurbarán"
              className={styles.obraImg}
              loading="eager"
            />
          </div>
          <figcaption className={styles.obraLegenda}>
            <span className={styles.obraArtista}>Francisco de Zurbarán</span>
            <span className={styles.obraTitulo}>A Anunciação</span>
            <span className={styles.obraData}>c. 1658–1664 · Barroco espanhol</span>
          </figcaption>
        </figure>

        {/* Coluna direita: texto editorial */}
        <div className={styles.texto}>
          <span className={styles.supra}>Capítulo IV</span>
          <span className={styles.rubrica}>Iconografia</span>

          <h1 className={styles.titulo}>
            <span className={styles.tituloLinha1}>O Rosto</span>
            <span className={styles.tituloLinha2}>de Gabriel</span>
          </h1>

          <div className={styles.ornamento} aria-hidden="true">
            <span className={styles.ornamentoLinha} />
            <span className={styles.ornamentoSimbolo}>✦</span>
            <span className={styles.ornamentoLinha} />
          </div>

         

          <div className={styles.citacao}>
            <span className={styles.citacaoAspas} aria-hidden="true">“</span>
            <p className={styles.citacaoTexto}>
              Eu sou Gabriel, que assisto diante de Deus, e fui enviado para te
              falar e te trazer estas boas novas.
            </p>
            <span className={styles.citacaoRef}>Lucas 1, 19</span>
          </div>
        </div>
      </div>

     
    </section>
  );
}