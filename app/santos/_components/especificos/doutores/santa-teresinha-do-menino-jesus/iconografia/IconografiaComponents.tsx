'use client';

import React from 'react';
import styles from '../../../../../_styles/especificos/doutores/santa-teresinha-do-menino-jesus/iconografia/iconografia.module.css';

/* ============================================================
   WRAPPER RAIZ — envolve toda a página para aplicar os tokens
   ============================================================ */

export function IconografiaPage({ children }: { children: React.ReactNode }) {
  return <div className={styles.iconografiaPage}>{children}</div>;
}

/* ============================================================
   HERO
   ============================================================ */

interface HeroProps {
  src: string;
  alt: string;
  epigrafe?: string;
  titulo: string;
}

export function Hero({ src, alt, epigrafe, titulo }: HeroProps) {
  return (
    <div className={styles.hero}>
      <img className={styles.heroImagem} src={src} alt={alt} loading="eager" />
      <div className={styles.heroOverlay}>
        {epigrafe && <span className={styles.heroEpigrafe}>{epigrafe}</span>}
        <h2 className={styles.heroTitulo}>{titulo}</h2>
        <hr className={styles.heroLinha} />
      </div>
    </div>
  );
}

/* ============================================================
   INTRO
   ============================================================ */

export function Intro({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.introBloco}>
      <div className={styles.introTexto}>{children}</div>
    </div>
  );
}

/* ============================================================
   SECAO
   ============================================================ */

interface SecaoProps {
  numero: string;
  titulo: string;
  subtitulo?: string;
  children: React.ReactNode;
}

export function Secao({ numero, titulo, subtitulo, children }: SecaoProps) {
  return (
    <section className={styles.secao}>
      <div className={styles.secaoHeader}>
        <span className={styles.secaoNumero}>{numero}</span>
        <div className={styles.secaoLinhaH} />
      </div>
      <h3 className={styles.secaoTitulo}>{titulo}</h3>
      {subtitulo && <p className={styles.secaoSubtitulo}>{subtitulo}</p>}
      {children}
    </section>
  );
}

/* ============================================================
   GALERIA DE FOTOS
   ============================================================ */

interface GaleriaFotosProps {
  layout?: 'grid' | 'destaque';
  children: React.ReactNode;
}

export function GaleriaFotos({ layout = 'grid', children }: GaleriaFotosProps) {
  return (
    <div className={styles.galeriaFotos} data-layout={layout}>
      {children}
    </div>
  );
}

/* ============================================================
   CARD DE FOTO
   ============================================================ */

interface CardFotoProps {
  src: string;
  alt: string;
  ratio?: 'retrato' | 'paisagem' | 'quadrado' | 'retrato-largo';
  data?: string;
  titulo: string;
  descricao?: string;
  tag?: string;
}

export function CardFoto({ src, alt, ratio, data, titulo, descricao, tag }: CardFotoProps) {
  return (
    <div className={styles.cardFoto}>
      <img
        className={styles.cardFotoImagem}
        src={src}
        alt={alt}
        loading="lazy"
        data-ratio={ratio}
      />
      <div className={styles.cardFotoCorpo}>
        {data && <div className={styles.cardFotoData}>{data}</div>}
        <h4 className={styles.cardFotoTitulo}>{titulo}</h4>
        {descricao && <p className={styles.cardFotoDescricao}>{descricao}</p>}
        {tag && <span className={styles.cardFotoTag}>{tag}</span>}
      </div>
    </div>
  );
}

/* ============================================================
   ATRIBUTOS — SEM IMAGEM
   ============================================================ */

export function AtributosGrid({ children }: { children: React.ReactNode }) {
  return <div className={styles.atributosGrid}>{children}</div>;
}

interface AtributoCardProps {
  icone: string;
  nome: string;
  children: React.ReactNode;
}

export function AtributoCard({ icone, nome, children }: AtributoCardProps) {
  return (
    <div className={styles.atributoCard}>
      <div className={styles.atributoIconeGrande}>{icone}</div>
      <h4 className={styles.atributoNome}>{nome}</h4>
      <hr className={styles.atributoDivisor} />
      <div className={styles.atributoTexto}>{children}</div>
    </div>
  );
}

/* ============================================================
   COMPARAÇÃO
   ============================================================ */

export function Comparacao({ children }: { children: React.ReactNode }) {
  return <div className={styles.comparacao}>{children}</div>;
}

interface ComparacaoLadoProps {
  src: string;
  alt: string;
  rotulo: string;
  titulo: string;
  children: React.ReactNode;
}

export function ComparacaoLado({ src, alt, rotulo, titulo, children }: ComparacaoLadoProps) {
  return (
    <div className={styles.comparacaoLado}>
      <img className={styles.comparacaoImagem} src={src} alt={alt} loading="lazy" />
      <div className={styles.comparacaoCorpo}>
        <div className={styles.comparacaoRotulo}>{rotulo}</div>
        <h4 className={styles.comparacaoTitulo}>{titulo}</h4>
        <div className={styles.comparacaoTexto}>{children}</div>
      </div>
    </div>
  );
}

/* ============================================================
   TIMELINE
   ============================================================ */

export function Timeline({ children }: { children: React.ReactNode }) {
  return <div className={styles.timeline}>{children}</div>;
}

interface TimelineItemProps {
  src: string;
  alt: string;
  epoca: string;
  titulo: string;
  children: React.ReactNode;
}

export function TimelineItem({ src, alt, epoca, titulo, children }: TimelineItemProps) {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineImagem}>
        <img src={src} alt={alt} loading="lazy" />
      </div>
      <div className={styles.timelineCorpo}>
        <div className={styles.timelineEpoca}>{epoca}</div>
        <h4 className={styles.timelineTitulo}>{titulo}</h4>
        <div className={styles.timelineTexto}>{children}</div>
      </div>
    </div>
  );
}

/* ============================================================
   SEÇÃO ESCURA + GALERIA ARTE
   ============================================================ */

interface SecaoEscuraProps {
  numero: string;
  titulo: string;
  subtitulo?: string;
  children: React.ReactNode;
}

export function SecaoEscura({ numero, titulo, subtitulo, children }: SecaoEscuraProps) {
  return (
    <section className={styles.secaoEscura}>
      <div className={styles.secaoHeader}>
        <span className={styles.secaoNumero}>{numero}</span>
        <div className={styles.secaoLinhaH} />
      </div>
      <h3 className={styles.secaoTitulo}>{titulo}</h3>
      {subtitulo && <p className={styles.secaoSubtitulo}>{subtitulo}</p>}
      {children}
    </section>
  );
}

interface GaleriaArteProps {
  layout?: 'grid' | 'mosaico';
  children: React.ReactNode;
}

export function GaleriaArte({ layout = 'grid', children }: GaleriaArteProps) {
  return (
    <div className={styles.galeriaArte} data-layout={layout}>
      {children}
    </div>
  );
}

interface CardArteProps {
  src: string;
  alt: string;
  ratio?: 'retrato' | 'paisagem' | 'quadrado';
  titulo: string;
  autor?: string;
  data?: string;
}

export function CardArte({ src, alt, ratio, titulo, autor, data }: CardArteProps) {
  return (
    <div className={styles.cardArte}>
      <img
        className={styles.cardArteImagem}
        src={src}
        alt={alt}
        loading="lazy"
        data-ratio={ratio}
      />
      <div className={styles.cardArteInfo}>
        <h4 className={styles.cardArteTitulo}>{titulo}</h4>
        {autor && <p className={styles.cardArteAutor}>{autor}</p>}
        {data && <p className={styles.cardArteData}>{data}</p>}
      </div>
    </div>
  );
}

/* ============================================================
   BLOCO EDITORIAL
   ============================================================ */

interface BlocoEditorialProps {
  src: string;
  alt: string;
  ratioImg?: 'retrato' | 'paisagem' | 'quadrado';
  epigrafe?: string;
  titulo: string;
  reverso?: boolean;
  children: React.ReactNode;
}

export function BlocoEditorial({
  src,
  alt,
  ratioImg,
  epigrafe,
  titulo,
  reverso = false,
  children,
}: BlocoEditorialProps) {
  return (
    <div className={styles.blocoEditorial} data-reverso={reverso}>
      <div className={styles.blocoEditorialImagem}>
        <img src={src} alt={alt} loading="lazy" data-ratio={ratioImg} />
      </div>
      <div className={styles.blocoEditorialCorpo}>
        {epigrafe && <div className={styles.blocoEditorialEpigrafe}>{epigrafe}</div>}
        <h3 className={styles.blocoEditorialTitulo}>{titulo}</h3>
        <div className={styles.blocoEditorialTexto}>{children}</div>
      </div>
    </div>
  );
}

/* ============================================================
   SEPARADOR
   ============================================================ */

export function SeparadorIcono() {
  return (
    <div className={styles.separadorIcono}>
      <span className={styles.separadorIconoSimbolo}>✦</span>
    </div>
  );
}

/* ============================================================
   NOTA FINAL
   ============================================================ */

interface NotaFinalProps {
  titulo: string;
  children: React.ReactNode;
}

export function NotaFinal({ titulo, children }: NotaFinalProps) {
  return (
    <div className={styles.notaFinal}>
      <h4 className={styles.notaFinalTitulo}>{titulo}</h4>
      <div className={styles.notaFinalTexto}>{children}</div>
    </div>
  );
}