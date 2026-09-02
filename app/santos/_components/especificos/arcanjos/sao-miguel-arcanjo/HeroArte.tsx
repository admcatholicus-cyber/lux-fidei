'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-miguel-arcanjo/arte.module.css';

type HeroArteProps = {
  imagem: string;
  suprat?: string;
  titulo: string;
  subtitulo?: string;
  citacao?: string;
  atribuicao?: string;
};

export default function HeroArte({
  imagem,
  suprat,
  titulo,
  subtitulo,
  citacao,
  atribuicao,
}: HeroArteProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, 1 - rect.bottom / window.innerHeight));
      setScroll(progress);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={ref} className={styles.hero}>
      <div
        className={styles.heroImagem}
        style={{
          backgroundImage: `url(${imagem})`,
          transform: `scale(${1 + scroll * 0.15}) translateY(${scroll * -60}px)`,
        }}
      />
      <div
        className={styles.heroOverlay}
        style={{ opacity: 0.35 + scroll * 0.45 }}
      />
      <div
        className={styles.heroConteudo}
        style={{
          transform: `translateY(${scroll * 40}px)`,
          opacity: 1 - scroll * 0.8,
        }}
      >
        {suprat && <div className={styles.heroSuprat}>{suprat}</div>}
        <h1 className={styles.heroTitulo}>{titulo}</h1>
        {subtitulo && <div className={styles.heroSubtitulo}>{subtitulo}</div>}
        {citacao && (
          <blockquote className={styles.heroCitacao}>
            <span className={styles.heroAspas}>❝</span>
            {citacao}
            {atribuicao && <cite className={styles.heroAtribuicao}>— {atribuicao}</cite>}
          </blockquote>
        )}
      </div>
    </div>
  );
}
