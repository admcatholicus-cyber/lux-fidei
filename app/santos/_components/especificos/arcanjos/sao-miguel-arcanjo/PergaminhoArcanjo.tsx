'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-miguel-arcanjo/pergaminho-arcanjo.module.css';

interface Props {
  titulo: string;
  subtitulo?: string;
  children: ReactNode;
}

export default function PergaminhoArcanjo({ titulo, subtitulo, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 1. Respeita preferência de acessibilidade — ativa imediatamente sem animar
    const prefereMenosMovimento =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (prefereMenosMovimento) {
      setVisivel(true);
      return;
    }

    // 2. Se já está visível ao montar (ex: página carregada já rolada), ativa imediatamente
    const rect = el.getBoundingClientRect();
    const jaEstaVisivel =
      rect.top < window.innerHeight * 0.9 && rect.bottom > 0;

    if (jaEstaVisivel) {
      setVisivel(true);
      return;
    }

    // 3. Fallback de segurança: se por algum motivo o observer não disparar
    //    em 1.5s (elemento muito grande, viewport pequena, etc.), ativa mesmo assim
    const fallback = setTimeout(() => setVisivel(true), 1500);

    // 4. IntersectionObserver — detecta entrada na tela
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(fallback);
          setVisivel(true);
          observer.disconnect();
        }
      },
      {
        // Dispara ANTES do elemento entrar completamente na tela
        rootMargin: '0px 0px -80px 0px',
        threshold: 0, // qualquer pixel visível já basta
      }
    );

    observer.observe(el);

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.pergaminho} ${visivel ? styles.visivel : ''}`}
      role="region"
      aria-label={titulo}
    >
      {/* ═══════════════════════════════════════════════════════
          BRASÃO HERÁLDICO SUPERIOR
          Coroa arcangelical + Espada central + Balança dupla
          ═══════════════════════════════════════════════════════ */}
      <div className={styles.brasao} aria-hidden="true">
        <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Coroa arcangelical */}
          <g className={styles.brasaoCoroa}>
            <path
              d="M40 24 L45 12 L52 20 L60 8 L68 20 L75 12 L80 24 Z"
              stroke="currentColor"
              strokeWidth="1.2"
              fill="none"
              strokeLinejoin="round"
            />
            <circle cx="45" cy="12" r="1.5" fill="currentColor" />
            <circle cx="60" cy="8" r="1.8" fill="currentColor" />
            <circle cx="75" cy="12" r="1.5" fill="currentColor" />
            <line x1="40" y1="26" x2="80" y2="26" stroke="currentColor" strokeWidth="0.8" />
          </g>

          {/* Espada vertical central */}
          <g className={styles.brasaoEspada}>
            <line x1="60" y1="32" x2="60" y2="115" stroke="currentColor" strokeWidth="1.5" />
            <line x1="52" y1="42" x2="68" y2="42" stroke="currentColor" strokeWidth="2" />
            <circle cx="60" cy="38" r="2.2" fill="currentColor" />
            <path d="M58 115 L60 122 L62 115 Z" fill="currentColor" />
          </g>

          {/* Balança esquerda */}
          <g className={styles.brasaoBalanca}>
            <line x1="30" y1="60" x2="60" y2="60" stroke="currentColor" strokeWidth="0.8" />
            <line x1="30" y1="60" x2="30" y2="72" stroke="currentColor" strokeWidth="0.6" />
            <path d="M22 72 Q30 82 38 72" stroke="currentColor" strokeWidth="0.8" fill="none" />
            <line x1="22" y1="72" x2="38" y2="72" stroke="currentColor" strokeWidth="0.6" />
          </g>

          {/* Balança direita */}
          <g className={styles.brasaoBalanca}>
            <line x1="60" y1="60" x2="90" y2="60" stroke="currentColor" strokeWidth="0.8" />
            <line x1="90" y1="60" x2="90" y2="72" stroke="currentColor" strokeWidth="0.6" />
            <path d="M82 72 Q90 82 98 72" stroke="currentColor" strokeWidth="0.8" fill="none" />
            <line x1="82" y1="72" x2="98" y2="72" stroke="currentColor" strokeWidth="0.6" />
          </g>

          {/* Ornamento inferior — asas estilizadas */}
          <g className={styles.brasaoAsas}>
            <path
              d="M45 128 Q52 124 60 128 Q68 124 75 128"
              stroke="currentColor"
              strokeWidth="0.7"
              fill="none"
            />
            <path
              d="M48 132 Q54 129 60 132 Q66 129 72 132"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
            />
          </g>
        </svg>
      </div>

      {/* ═══════════════════════════════════════════════════════
          CANTOS DECORATIVOS — florituras góticas nos 4 cantos
          ═══════════════════════════════════════════════════════ */}
      <span className={`${styles.canto} ${styles.cantoTL}`} aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none">
          <path d="M2 20 Q2 2 20 2" stroke="currentColor" strokeWidth="1" />
          <path d="M8 20 Q8 8 20 8" stroke="currentColor" strokeWidth="0.6" />
          <circle cx="4" cy="4" r="1.5" fill="currentColor" />
        </svg>
      </span>
      <span className={`${styles.canto} ${styles.cantoTR}`} aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none">
          <path d="M20 2 Q38 2 38 20" stroke="currentColor" strokeWidth="1" />
          <path d="M20 8 Q32 8 32 20" stroke="currentColor" strokeWidth="0.6" />
          <circle cx="36" cy="4" r="1.5" fill="currentColor" />
        </svg>
      </span>
      <span className={`${styles.canto} ${styles.cantoBL}`} aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none">
          <path d="M2 20 Q2 38 20 38" stroke="currentColor" strokeWidth="1" />
          <path d="M8 20 Q8 32 20 32" stroke="currentColor" strokeWidth="0.6" />
          <circle cx="4" cy="36" r="1.5" fill="currentColor" />
        </svg>
      </span>
      <span className={`${styles.canto} ${styles.cantoBR}`} aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none">
          <path d="M20 38 Q38 38 38 20" stroke="currentColor" strokeWidth="1" />
          <path d="M20 32 Q32 32 32 20" stroke="currentColor" strokeWidth="0.6" />
          <circle cx="36" cy="36" r="1.5" fill="currentColor" />
        </svg>
      </span>

      {/* ═══════════════════════════════════════════════════════
          MARCA D'ÁGUA CENTRAL — cruz templária sutil
          ═══════════════════════════════════════════════════════ */}
      <div className={styles.marcaDagua} aria-hidden="true">
        <svg viewBox="0 0 200 200" fill="none">
          <path
            d="M100 20 L100 180 M20 100 L180 100"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path d="M100 20 L90 40 L100 30 L110 40 Z" fill="currentColor" />
          <path d="M100 180 L90 160 L100 170 L110 160 Z" fill="currentColor" />
          <path d="M20 100 L40 90 L30 100 L40 110 Z" fill="currentColor" />
          <path d="M180 100 L160 90 L170 100 L160 110 Z" fill="currentColor" />
        </svg>
      </div>

      {/* ═══════════════════════════════════════════════════════
          CABEÇALHO — título com ornamentos
          ═══════════════════════════════════════════════════════ */}
      <div className={styles.cabecalho}>
        <div className={styles.suprat}>◆ Meditação em Destaque ◆</div>
        <h3 className={styles.titulo}>{titulo}</h3>
        {subtitulo && <p className={styles.subtitulo}>{subtitulo}</p>}
        <div className={styles.divisorOrnamental} aria-hidden="true">
          <span className={styles.divisorLinha}></span>
          <span className={styles.divisorEstrela}>✦</span>
          <span className={styles.divisorLinha}></span>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          CORPO — conteúdo MDX
          ═══════════════════════════════════════════════════════ */}
      <div className={styles.corpo}>{children}</div>

      {/* ═══════════════════════════════════════════════════════
          SELO INFERIOR — assinatura circular "M"
          ═══════════════════════════════════════════════════════ */}
      <div className={styles.selo} aria-hidden="true">
        <svg viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="26" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="30" cy="30" r="22" stroke="currentColor" strokeWidth="0.4" />
          <text
            x="30"
            y="36"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="18"
            fill="currentColor"
            fontWeight="400"
            letterSpacing="1"
          >
            M
          </text>
          <path
            d="M18 46 L22 44 L20 42 L24 42 L22 40"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M42 46 L38 44 L40 42 L36 42 L38 40"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}