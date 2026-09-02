'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-miguel-arcanjo/arte.module.css';

type Props = {
  imagem: string;
  posicaoImagem?: string;
  titulo: string;
  artista?: string;
  data?: string;
  tecnica?: string;
  local?: string;
  dimensoes?: string;
  categoria?: string;
  posicao?: 'esquerda' | 'direita';
  children: ReactNode;
};

export default function ObraMonumental({
  imagem,
  posicaoImagem = 'center',
  titulo,
  artista,
  data,
  tecnica,
  local,
  dimensoes,
  categoria = 'Obra monumental',
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
    <section
      ref={ref}
      data-posicao={posicao}
      className={`${styles.monumental} ${visivel ? styles.visivel : ''}`}
    >
      <div
        className={styles.monumentalImagem}
        style={{
          backgroundImage: `url(${imagem})`,
          backgroundPosition: posicaoImagem,
        }}
      />
      <div className={styles.monumentalOverlay} />

      <div className={styles.monumentalConteudo}>
        <div className={styles.monumentalCartao}>
          <div className={styles.monumentalCategoria}>{categoria}</div>
          <h3 className={styles.monumentalTitulo}>{titulo}</h3>
          {artista && <div className={styles.monumentalArtista}>{artista}</div>}
          {data && <div className={styles.monumentalData}>{data}</div>}

          {(tecnica || local || dimensoes) && (
            <dl className={styles.monumentalFicha}>
              {tecnica && (
                <div className={styles.monumentalFichaItem}>
                  <dt>Técnica</dt><dd>{tecnica}</dd>
                </div>
              )}
              {dimensoes && (
                <div className={styles.monumentalFichaItem}>
                  <dt>Dimensões</dt><dd>{dimensoes}</dd>
                </div>
              )}
              {local && (
                <div className={styles.monumentalFichaItem}>
                  <dt>Localização</dt><dd>{local}</dd>
                </div>
              )}
            </dl>
          )}

          <div className={styles.monumentalAnalise}>{children}</div>
        </div>
      </div>
    </section>
  );
}