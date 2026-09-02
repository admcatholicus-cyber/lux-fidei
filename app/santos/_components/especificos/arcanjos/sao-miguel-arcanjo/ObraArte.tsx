'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-miguel-arcanjo/arte.module.css';
import ModalObra from '../../../grid/ModalObra';

type ObraArteProps = {
  imagem: string;
  titulo: string;
  artista?: string;
  data?: string;
  local?: string;
  tecnica?: string;
  dimensoes?: string;
  posicao?: 'esquerda' | 'direita';
  tamanhoImagem?: 'pequeno' | 'medio' | 'grande' | 'enorme';
  children: ReactNode;
};

export default function ObraArte({
  imagem,
  titulo,
  artista,
  data,
  local,
  tecnica,
  dimensoes,
  posicao = 'esquerda',
  tamanhoImagem = 'medio',
  children,
}: ObraArteProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);
  const [expandido, setExpandido] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);

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
    <div
      ref={ref}
      className={`${styles.obra} ${styles[`obra-${posicao}`]} ${
        styles[`obraTamanho-${tamanhoImagem}`]
      } ${visivel ? styles.obraVisivel : ''}`}
    >
      <div
        className={styles.obraImagemWrapper}
        onClick={() => setModalAberto(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setModalAberto(true);
          }
        }}
        aria-label={`Ampliar obra: ${titulo}`}
      >
        {/* Tag <img> real: renderiza o tamanho nativo sem cortes ou bordas de preenchimento */}
        <img
          src={imagem}
          alt={titulo}
          className={styles.obraImagem}
          loading="lazy"
        />
        <div className={styles.obraMoldura} />
      </div>

      <div className={styles.obraTexto}>
        <div className={styles.obraFicha}>
          <h3 className={styles.obraTitulo}>{titulo}</h3>
          <div className={styles.obraDetalhes}>
            {artista && (
              <span className={styles.obraArtista}>{artista}</span>
            )}
            {data && <span className={styles.obraData}>{data}</span>}
          </div>
          {(tecnica || dimensoes || local) && (
            <dl className={styles.obraMetadata}>
              {tecnica && (
                <>
                  <dt>Técnica</dt>
                  <dd>{tecnica}</dd>
                </>
              )}
              {dimensoes && (
                <>
                  <dt>Dimensões</dt>
                  <dd>{dimensoes}</dd>
                </>
              )}
              {local && (
                <>
                  <dt>Localização</dt>
                  <dd>{local}</dd>
                </>
              )}
            </dl>
          )}
        </div>

        <div className={styles.obraAnaliseWrapper}>
          <div
            className={`${styles.obraAnalise} ${
              !expandido
                ? styles.obraAnaliseColapsado
                : styles.obraAnaliseExpandido
            }`}
          >
            {children}
          </div>

          <button
            type="button"
            className={styles.btnVerMais}
            onClick={() => setExpandido((prev) => !prev)}
            aria-expanded={expandido}
          >
            <span>
              {expandido ? 'Recolher análise' : 'Ler descrição completa'}
            </span>
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
      </div>

      <ModalObra
        aberto={modalAberto}
        fechar={() => setModalAberto(false)}
        imagem={imagem}
        titulo={titulo}
        supratitulo="Análise de obra"
        artista={artista}
        data={data}
        tecnica={tecnica}
        dimensoes={dimensoes}
        local={local}
        descricao={children}
      />
    </div>
  );
}