'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-miguel-arcanjo/arte.module.css';

type Item = {
  imagem: string;
  titulo: string;
  legenda: string;
};

type ComparacaoLadoALadoProps = {
  titulo?: string;
  intro?: string;
  esquerda: Item;
  direita: Item;
  analise?: ReactNode;
};

export default function ComparacaoLadoALado({
  titulo,
  intro,
  esquerda,
  direita,
  analise,
}: ComparacaoLadoALadoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);
  const [expandido, setExpandido] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisivel(true),
      { threshold: 0.15 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${styles.comparacao} ${visivel ? styles.comparacaoVisivel : ''}`}>
      {titulo && <h3 className={styles.comparacaoTitulo}>{titulo}</h3>}
      {intro && <p className={styles.comparacaoIntro}>{intro}</p>}

      <div className={styles.comparacaoGrid}>
        <div className={styles.comparacaoItem}>
          <div
            className={styles.comparacaoImagem}
            style={{ backgroundImage: `url(${esquerda.imagem})` }}
          />
          <div className={styles.comparacaoLegenda}>
            <div className={styles.comparacaoItemTitulo}>{esquerda.titulo}</div>
            <div className={styles.comparacaoItemDesc}>{esquerda.legenda}</div>
          </div>
        </div>

        <div className={styles.comparacaoDivisor}>
          <span>vs</span>
        </div>

        <div className={styles.comparacaoItem}>
          <div
            className={styles.comparacaoImagem}
            style={{ backgroundImage: `url(${direita.imagem})` }}
          />
          <div className={styles.comparacaoLegenda}>
            <div className={styles.comparacaoItemTitulo}>{direita.titulo}</div>
            <div className={styles.comparacaoItemDesc}>{direita.legenda}</div>
          </div>
        </div>
      </div>

      {analise && (
        <div className={styles.comparacaoAnaliseWrapper}>
          <div
            className={`${styles.comparacaoAnalise} ${
              !expandido ? styles.comparacaoAnaliseColapsado : styles.comparacaoAnaliseExpandido
            }`}
          >
            {analise}
          </div>

          <button
            type="button"
            className={styles.btnVerMais}
            onClick={() => setExpandido((prev) => !prev)}
            aria-expanded={expandido}
          >
            <span>{expandido ? 'Recolher análise' : 'Ler descrição completa'}</span>
            <svg
              className={`${styles.btnVerMaisIcone} ${
                expandido ? styles.btnVerMaisIconeGiro : ''
              }`}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}