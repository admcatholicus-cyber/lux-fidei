'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-miguel-arcanjo/arte.module.css';

type Props = {
  imagem: string;
  titulo: string;
  artista?: string;
  data?: string;
  tecnica?: string;
  dimensoes?: string;
  local?: string;
  etiqueta?: string;
  categoria?: string;
  children: ReactNode;
};

export default function ObraArqueologica({
  imagem,
  titulo,
  artista,
  data,
  tecnica,
  dimensoes,
  local,
  etiqueta = 'Peça do acervo',
  categoria = 'Artefato',
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
      className={`${styles.arqueologica} ${visivel ? styles.visivel : ''}`}
    >
      <div className={styles.arqueologicaContainer}>
        <div className={styles.arqueologicaImagem} style={{ backgroundImage: `url(${imagem})` }}>
          <div className={styles.arqueologicaEtiqueta}>{etiqueta}</div>
        </div>

        <div className={styles.arqueologicaTexto}>
          <div className={styles.arqueologicaCategoria}>{categoria}</div>
          <h3 className={styles.arqueologicaTitulo}>{titulo}</h3>

          <dl className={styles.arqueologicaFicha}>
            {artista && (
              <div className={styles.arqueologicaFichaItem}>
                <dt>Autoria</dt>
                <dd>{artista}</dd>
              </div>
            )}
            {data && (
              <div className={styles.arqueologicaFichaItem}>
                <dt>Datação</dt>
                <dd>{data}</dd>
              </div>
            )}
            {tecnica && (
              <div className={styles.arqueologicaFichaItem}>
                <dt>Técnica</dt>
                <dd>{tecnica}</dd>
              </div>
            )}
            {dimensoes && (
              <div className={styles.arqueologicaFichaItem}>
                <dt>Dimensões</dt>
                <dd>{dimensoes}</dd>
              </div>
            )}
            {local && (
              <div className={styles.arqueologicaFichaItem}>
                <dt>Acervo</dt>
                <dd>{local}</dd>
              </div>
            )}
          </dl>

          <div className={styles.arqueologicaAnalise}>{children}</div>
        </div>
      </div>
    </article>
  );
}