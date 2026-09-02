'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import styles from '../../../../../_styles/especificos/martires/santa-afra-de-augsburgo/iconografia/galeria.module.css';

/* ───── tipos ───── */

export type Orientacao = 'retrato' | 'paisagem' | 'quadrado' | 'panoramico';
export type Destaque = 'hero' | 'largo' | 'alto' | 'normal';

export interface ImagemDado {
  src: string;
  alt: string;
  titulo: string;
  descricao: string;
  autor?: string;
  data?: string;
  tecnica?: string;
  localizacao?: string;
  orientacao: Orientacao;
  destaque?: Destaque;
  largura: number;
  altura: number;
}

/* ───── Lightbox ───── */

function Lightbox({
  imagem,
  onFechar,
  onAnterior,
  onProxima,
}: {
  imagem: ImagemDado;
  onFechar: () => void;
  onAnterior: () => void;
  onProxima: () => void;
}) {
  return (
    <div className={styles.lbOverlay} onClick={onFechar}>
      <div className={styles.lbConteudo} onClick={(e) => e.stopPropagation()}>
        <button className={styles.lbFechar} onClick={onFechar} aria-label="Fechar">
          ✕
        </button>
        <button className={styles.lbSeta} data-dir="esq" onClick={onAnterior} aria-label="Anterior">
          ‹
        </button>
        <button className={styles.lbSeta} data-dir="dir" onClick={onProxima} aria-label="Próxima">
          ›
        </button>

        <div className={styles.lbImagemContainer}>
          <Image
            src={imagem.src}
            alt={imagem.alt}
            width={imagem.largura}
            height={imagem.altura}
            className={styles.lbImagem}
            quality={90}
            priority
          />
        </div>

        <div className={styles.lbInfo}>
          <h3 className={styles.lbTitulo}>{imagem.titulo}</h3>
          <p className={styles.lbDescricao}>{imagem.descricao}</p>
          <div className={styles.lbMeta}>
            {imagem.autor && (
              <span className={styles.lbMetaItem}>
                <span className={styles.lbMetaLabel}>Autor</span>
                {imagem.autor}
              </span>
            )}
            {imagem.data && (
              <span className={styles.lbMetaItem}>
                <span className={styles.lbMetaLabel}>Data</span>
                {imagem.data}
              </span>
            )}
            {imagem.tecnica && (
              <span className={styles.lbMetaItem}>
                <span className={styles.lbMetaLabel}>Técnica</span>
                {imagem.tecnica}
              </span>
            )}
            {imagem.localizacao && (
              <span className={styles.lbMetaItem}>
                <span className={styles.lbMetaLabel}>Local</span>
                {imagem.localizacao}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───── Card individual ───── */

function CardImagem({
  imagem,
  indice,
  onClick,
}: {
  imagem: ImagemDado;
  indice: number;
  onClick: (i: number) => void;
}) {
  const destaque = imagem.destaque || 'normal';

  return (
    <article
      className={`${styles.card} ${styles[`card_${destaque}`]} ${styles[`card_${imagem.orientacao}`]}`}
      onClick={() => onClick(indice)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(indice)}
    >
      <div className={styles.cardImagemWrapper}>
        <Image
          src={imagem.src}
          alt={imagem.alt}
          width={imagem.largura}
          height={imagem.altura}
          className={styles.cardImagem}
          quality={80}
          sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
        />
        <div className={styles.cardOverlay}>
          <span className={styles.cardExpandir}>Ver em detalhe</span>
        </div>
      </div>

      <div className={styles.cardCorpo}>
        <h3 className={styles.cardTitulo}>{imagem.titulo}</h3>
        {imagem.autor && <p className={styles.cardAutor}>{imagem.autor}</p>}
        {imagem.data && <p className={styles.cardData}>{imagem.data}</p>}
      </div>
    </article>
  );
}

/* ───── Seção temática ───── */

export function SecaoIconografia({
  id,
  numero,
  titulo,
  subtitulo,
  children,
}: {
  id?: string;
  numero: string;
  titulo: string;
  subtitulo?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.secao} id={id}>
      <div className={styles.secaoCabecalho}>
        <span className={styles.secaoNumero}>{numero}</span>
        <div className={styles.secaoLinha} />
        <div>
          <h2 className={styles.secaoTitulo}>{titulo}</h2>
          {subtitulo && <p className={styles.secaoSubtitulo}>{subtitulo}</p>}
        </div>
      </div>
      {children}
    </section>
  );
}

/* ───── Texto introdutório de seção ───── */

export function TextoSecao({ children }: { children: React.ReactNode }) {
  return <div className={styles.textoSecao}>{children}</div>;
}

/* ───── Grid de imagens dentro de uma seção ───── */

export function GridIconografia({
  imagens,
  inicioIndice,
  onClickImagem,
}: {
  imagens: ImagemDado[];
  inicioIndice: number;
  onClickImagem: (i: number) => void;
}) {
  return (
    <div className={styles.grid}>
      {imagens.map((img, i) => (
        <CardImagem
          key={img.src}
          imagem={img}
          indice={inicioIndice + i}
          onClick={onClickImagem}
        />
      ))}
    </div>
  );
}

/* ───── Componente principal da galeria ───── */

export default function GaleriaAfra({ children }: { children: React.ReactNode }) {
  const [lbIndice, setLbIndice] = useState<number | null>(null);
  const [todasImagens, setTodasImagens] = useState<ImagemDado[]>([]);

  const registrarImagens = useCallback((imgs: ImagemDado[]) => {
    setTodasImagens((prev) => {
      const srcSet = new Set(prev.map((p) => p.src));
      const novas = imgs.filter((img) => !srcSet.has(img.src));
      return novas.length > 0 ? [...prev, ...novas] : prev;
    });
  }, []);

  const abrirLightbox = useCallback((indice: number) => {
    setLbIndice(indice);
    document.body.style.overflow = 'hidden';
  }, []);

  const fecharLightbox = useCallback(() => {
    setLbIndice(null);
    document.body.style.overflow = '';
  }, []);

  const anterior = useCallback(() => {
    setLbIndice((prev) =>
      prev !== null ? (prev - 1 + todasImagens.length) % todasImagens.length : null,
    );
  }, [todasImagens.length]);

  const proxima = useCallback(() => {
    setLbIndice((prev) =>
      prev !== null ? (prev + 1) % todasImagens.length : null,
    );
  }, [todasImagens.length]);

  return (
    <GaleriaContexto.Provider value={{ registrarImagens, abrirLightbox, todasImagens }}>
      <div className={styles.galeria}>
        {children}

        {lbIndice !== null && todasImagens[lbIndice] && (
          <Lightbox
            imagem={todasImagens[lbIndice]}
            onFechar={fecharLightbox}
            onAnterior={anterior}
            onProxima={proxima}
          />
        )}
      </div>
    </GaleriaContexto.Provider>
  );
}

/* ───── Context para registrar imagens ───── */

import { createContext, useContext, useEffect } from 'react';

interface GaleriaCtx {
  registrarImagens: (imgs: ImagemDado[]) => void;
  abrirLightbox: (i: number) => void;
  todasImagens: ImagemDado[];
}

const GaleriaContexto = createContext<GaleriaCtx>({
  registrarImagens: () => {},
  abrirLightbox: () => {},
  todasImagens: [],
});

export function useGaleria() {
  return useContext(GaleriaContexto);
}

/* ───── Wrapper de grid que registra suas imagens automaticamente ───── */

export function SecaoGrid({
  imagens,
}: {
  imagens: ImagemDado[];
}) {
  const { registrarImagens, abrirLightbox, todasImagens } = useGaleria();

  useEffect(() => {
    registrarImagens(imagens);
  }, [imagens, registrarImagens]);

  const inicioIndice = todasImagens.findIndex((img) => img.src === imagens[0]?.src);

  return (
    <GridIconografia
      imagens={imagens}
      inicioIndice={inicioIndice >= 0 ? inicioIndice : 0}
      onClickImagem={abrirLightbox}
    />
  );
}