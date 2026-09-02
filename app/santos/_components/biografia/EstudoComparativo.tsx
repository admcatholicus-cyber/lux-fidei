'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import styles from '../../_styles/biografia.module.css';

type Obra = {
  src: string;
  alt: string;
  regiao: string;
  periodo: string;
  titulo: string;
  descricao: string;
  accent?: string;
  tecnica?: string;
  local?: string;
};

type EstudoComparativoProps = {
  numero?: string;
  supratitulo?: string;
  titulo: ReactNode;
  descricao?: ReactNode;
  obras: Obra[];
};

/* Hook: scroll reveal */
function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, revealed };
}

/* Card individual */
function ObraCard({ obra, index }: { obra: Obra; index: number }) {
  const { ref, revealed } = useReveal<HTMLElement>(0.15);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [aspecto, setAspecto] = useState<'vertical' | 'quadrada' | 'panoramica'>('vertical');

  // Detecta a proporção real da imagem depois que ela carrega
  const handleImgLoad = () => {
    const img = imgRef.current;
    if (!img) return;
    const ratio = img.naturalWidth / img.naturalHeight;
    if (ratio < 0.6) setAspecto('vertical');       // muito alta e estreita
    else if (ratio > 0.85) setAspecto('quadrada'); // quase quadrada
    else setAspecto('vertical');                   // proporção retrato normal
  };

  return (
    <article
      ref={ref}
      className={`${styles.ecObra} ${styles[`ecObra_${aspecto}`]} ${revealed ? styles.ecReveal : ''}`}
      style={
        {
          '--ec-accent': obra.accent ?? '#b08a3c',
          '--ec-delay': `${index * 180}ms`,
        } as React.CSSProperties
      }
    >
      {/* Numeração romana no canto */}
      <div className={styles.ecObraIdx}>
        <span className={styles.ecObraIdxNum}>
          {['I', 'II', 'III', 'IV', 'V', 'VI'][index] ?? index + 1}
        </span>
        <span className={styles.ecObraIdxLinha} />
      </div>

      {/* Container da imagem — SEM fundo escuro, imagem é a estrela */}
      <div className={styles.ecObraFrame}>
        <div className={styles.ecObraImgBox}>
          <img
            ref={imgRef}
            src={obra.src}
            alt={obra.alt}
            loading="lazy"
            onLoad={handleImgLoad}
          />
        </div>

        {/* Badge de região flutuante */}
        <div className={styles.ecObraChip}>
          <span className={styles.ecObraChipDot} />
          <span className={styles.ecObraChipTexto}>{obra.regiao}</span>
        </div>
      </div>

      {/* Informação */}
      <div className={styles.ecObraDados}>
        <div className={styles.ecObraDadosHead}>
          <span className={styles.ecObraDadosLinha} />
          <span className={styles.ecObraDadosTag}>{obra.periodo}</span>
        </div>

        <h4 className={styles.ecObraDadosTitulo}>{obra.titulo}</h4>
        <p className={styles.ecObraDadosDesc}>{obra.descricao}</p>

        {(obra.tecnica || obra.local) && (
          <dl className={styles.ecObraDadosMeta}>
            {obra.tecnica && (
              <div className={styles.ecObraDadosMetaRow}>
                <dt>Técnica</dt>
                <dd>{obra.tecnica}</dd>
              </div>
            )}
            {obra.local && (
              <div className={styles.ecObraDadosMetaRow}>
                <dt>Local</dt>
                <dd>{obra.local}</dd>
              </div>
            )}
          </dl>
        )}
      </div>
    </article>
  );
}

/* Componente principal */
export default function EstudoComparativo({
  numero = '01',
  supratitulo = 'Estudo Comparativo',
  titulo,
  descricao,
  obras,
}: EstudoComparativoProps) {
  const header = useReveal<HTMLElement>(0.3);

  return (
    <section className={styles.ecWrap}>
      {/* Fundo com ornamentos */}
      <div className={styles.ecBg} aria-hidden="true">
        <div className={styles.ecBgBlob1} />
        <div className={styles.ecBgBlob2} />
        <div className={styles.ecBgGrid} />
      </div>

      {/* Header editorial */}
      <header
        ref={header.ref}
        className={`${styles.ecHeader} ${header.revealed ? styles.ecReveal : ''}`}
      >
        <div className={styles.ecHeaderTag}>
          <span className={styles.ecHeaderNum}>{numero}</span>
          <span className={styles.ecHeaderLinha} />
          <span className={styles.ecHeaderSuprat}>{supratitulo}</span>
        </div>

        <h3 className={styles.ecHeaderTitulo}>{titulo}</h3>

        {descricao && <p className={styles.ecHeaderDesc}>{descricao}</p>}
      </header>

      {/* Grid adaptativo */}
      <div className={styles.ecGrid}>
        {obras.map((obra, i) => (
          <ObraCard key={i} obra={obra} index={i} />
        ))}
      </div>

    
    </section>
  );
}