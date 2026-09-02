'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-miguel-arcanjo/arte.module.css';

type Ponto = {
  x: number;
  y: number;
  titulo: string;
  descricao: string;
};

type ZoomObraProps = {
  imagem: string;
  titulo: string;
  atribuicao: string;
  pontos: Ponto[];
  intro?: ReactNode;
};

export default function ZoomObra({
  imagem,
  titulo,
  atribuicao,
  pontos,
  intro,
}: ZoomObraProps) {
  const [pontoAtivo, setPontoAtivo] = useState<number | null>(null);
  const [visivel, setVisivel] = useState(false);
  const [mostraTodos, setMostraTodos] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisivel(true),
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const ativarPonto = (i: number) => {
    if (i >= 2) setMostraTodos(true);
    setPontoAtivo(pontoAtivo === i ? null : i);
  };

  const pontosVisiveis = mostraTodos ? pontos : pontos.slice(0, 2);

  return (
    <div ref={ref} className={`${styles.zoom} ${visivel ? styles.zoomVisivel : ''}`}>
      <header className={styles.zoomHeader}>
        <div className={styles.zoomBadge}>Estudo detalhado</div>
        <h3 className={styles.zoomTitulo}>{titulo}</h3>
        <div className={styles.zoomAtribuicao}>{atribuicao}</div>
        {intro && <div className={styles.zoomIntro}>{intro}</div>}
      </header>

      <div className={styles.zoomInteracao}>
        {/* IMAGEM + PONTOS — igual ao original */}
        <div className={styles.zoomImagemContainer}>
          <div
            className={styles.zoomImagem}
            style={{ backgroundImage: `url(${imagem})` }}
          />

          {pontos.map((ponto, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.zoomPonto} ${pontoAtivo === i ? styles.zoomPontoAtivo : ''}`}
              style={{ left: `${ponto.x}%`, top: `${ponto.y}%` }}
              onClick={() => ativarPonto(i)}
              onMouseEnter={() => {
                if (i >= 2) setMostraTodos(true);
                setPontoAtivo(i);
              }}
              aria-label={ponto.titulo}
            >
              <span className={styles.zoomPontoNumero}>{i + 1}</span>
              <span className={styles.zoomPontoPulso} />
            </button>
          ))}
        </div>

        {/* SÓ OS PONTOS VIRAM CARDS (2 por fileira) */}
        <aside className={styles.zoomLegendasArea}>
          <div className={styles.zoomGridCards}>
            {pontosVisiveis.map((ponto, i) => {
              // índice real quando está colapsado (só 0 e 1)
              const idx = mostraTodos ? i : i;
              return (
                <button
                  key={idx}
                  type="button"
                  className={`${styles.zoomCard} ${pontoAtivo === idx ? styles.zoomCardAtivo : ''}`}
                  onClick={() => setPontoAtivo(pontoAtivo === idx ? null : idx)}
                  onMouseEnter={() => setPontoAtivo(idx)}
                >
                  <div className={styles.zoomCardHeader}>
                    <span className={styles.zoomCardNumero}>{idx + 1}</span>
                    <span className={styles.zoomCardTitulo}>{ponto.titulo}</span>
                  </div>
                  <p className={styles.zoomCardDescricao}>{ponto.descricao}</p>
                </button>
              );
            })}
          </div>

          {pontos.length > 2 && (
            <button
              type="button"
              className={styles.zoomBtnVerMais}
              onClick={() => setMostraTodos((v) => !v)}
            >
              <span>
                {mostraTodos
                  ? 'Recolher'
                  : `Ver mais (${pontos.length - 2})`}
              </span>
              <svg
                className={`${styles.zoomBtnIcone} ${mostraTodos ? styles.zoomBtnIconeGiro : ''}`}
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
          )}
        </aside>
      </div>
    </div>
  );
}