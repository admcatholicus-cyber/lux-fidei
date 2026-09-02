'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-miguel-arcanjo/arte.module.css';

type Props = {
  imagem: string;
  titulo: string;
  subtitulo?: string;
  artista?: string;
  data?: string;
  tecnica?: string;
  local?: string;
  categoria?: string;
  posicao?: 'esquerda' | 'direita';
  children: ReactNode;
};

export default function ObraSagrada({
  imagem,
  titulo,
  subtitulo,
  artista,
  data,
  tecnica,
  local,
  categoria = 'Ícone sagrado',
  posicao = 'esquerda',
  children,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

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
    <article
      ref={ref}
      data-posicao={posicao}
      className={`${styles.sagrada} ${visivel ? styles.visivel : ''}`}
    >
      <div className={styles.sagradaContainer}>
        <div className={styles.sagradaImagem} style={{ backgroundImage: `url(${imagem})` }}>
          <div className={styles.sagradaHalo} />
        </div>

        <div className={styles.sagradaTexto}>
          <div className={styles.sagradaCategoria}>{categoria}</div>
          <h3 className={styles.sagradaTitulo}>{titulo}</h3>
          {subtitulo && <div className={styles.sagradaSubtitulo}>{subtitulo}</div>}

          <dl className={styles.sagradaFicha}>
            {artista && (<><dt>Autoria</dt><dd>{artista}</dd></>)}
            {data && (<><dt>Datação</dt><dd>{data}</dd></>)}
            {tecnica && (<><dt>Técnica</dt><dd>{tecnica}</dd></>)}
            {local && (<><dt>Localização</dt><dd>{local}</dd></>)}
          </dl>

          <div className={styles.sagradaAnalise}>{children}</div>
        </div>
      </div>
    </article>
  );
}