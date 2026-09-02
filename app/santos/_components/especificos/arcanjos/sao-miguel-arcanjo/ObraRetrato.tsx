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
  dimensoes?: string;
  local?: string;
  categoria?: string;
  legendaImagem?: string;
  posicao?: 'esquerda' | 'direita';
  children: ReactNode;
};

export default function ObraRetrato({
  imagem,
  posicaoImagem = 'center 25%',
  titulo,
  artista,
  data,
  tecnica,
  dimensoes,
  local,
  categoria = 'Retrato do Arcanjo',
  legendaImagem,
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
      className={`${styles.retrato} ${visivel ? styles.visivel : ''}`}
    >
      <div
        className={styles.retratoImagem}
        style={{
          backgroundImage: `url(${imagem})`,
          backgroundPosition: posicaoImagem,
        }}
      >
        {legendaImagem && <div className={styles.retratoLegenda}>{legendaImagem}</div>}
      </div>

      <div className={styles.retratoTexto}>
        <div className={styles.retratoCategoria}>{categoria}</div>
        <h3 className={styles.retratoTitulo}>{titulo}</h3>
        {artista && <div className={styles.retratoArtista}>{artista}</div>}
        {data && <div className={styles.retratoData}>{data}</div>}

        {(tecnica || dimensoes || local) && (
          <dl className={styles.retratoFicha}>
            {tecnica && (
              <div className={styles.retratoFichaItem}>
                <dt>Técnica</dt><dd>{tecnica}</dd>
              </div>
            )}
            {dimensoes && (
              <div className={styles.retratoFichaItem}>
                <dt>Dimensões</dt><dd>{dimensoes}</dd>
              </div>
            )}
            {local && (
              <div className={styles.retratoFichaItem}>
                <dt>Localização</dt><dd>{local}</dd>
              </div>
            )}
          </dl>
        )}

        <div className={styles.retratoAnalise}>{children}</div>
      </div>
    </section>
  );
}