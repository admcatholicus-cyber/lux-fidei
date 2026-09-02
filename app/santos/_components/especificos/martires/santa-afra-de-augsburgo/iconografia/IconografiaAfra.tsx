'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../../../../_styles/especificos/martires/santa-afra-de-augsburgo/iconografia/iconografia.module.css';

/* ═══════ Tipos ═══════ */

export interface ImagemIconografia {
  src: string;
  alt: string;
  titulo: string;
  descricao: string;
  autor?: string;
  data?: string;
  tecnica?: string;
  localizacao?: string;
  acervo?: string;
  manuscrito?: string;
  folio?: string;
  largura: number;
  altura: number;
  orientacao: 'retrato' | 'paisagem' | 'quadrado';
  destaque?: 'hero' | 'largo' | 'alto' | 'normal';
}

/* ═══════ Lightbox ═══════ */

function Lightbox({
  imagem,
  onFechar,
  onAnterior,
  onProxima,
  indice,
  total,
}: {
  imagem: ImagemIconografia;
  onFechar: () => void;
  onAnterior: () => void;
  onProxima: () => void;
  indice: number;
  total: number;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onFechar();
      if (e.key === 'ArrowLeft') onAnterior();
      if (e.key === 'ArrowRight') onProxima();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onFechar, onAnterior, onProxima]);

  return (
    <div className={styles.lbOverlay} onClick={onFechar}>
      <div className={styles.lbConteudo} onClick={(e) => e.stopPropagation()}>
        <button className={styles.lbFechar} onClick={onFechar} aria-label="Fechar">✕</button>
        <button className={styles.lbSeta} data-dir="esq" onClick={onAnterior} aria-label="Anterior">‹</button>
        <button className={styles.lbSeta} data-dir="dir" onClick={onProxima} aria-label="Próxima">›</button>

        <div className={styles.lbImagemContainer}>
          <Image
            src={imagem.src}
            alt={imagem.alt}
            width={imagem.largura}
            height={imagem.altura}
            className={styles.lbImagem}
            quality={92}
            priority
          />
        </div>

        <div className={styles.lbInfo}>
          <span className={styles.lbContador}>{indice + 1} / {total}</span>
          <h3 className={styles.lbTitulo}>{imagem.titulo}</h3>
          <p className={styles.lbDescricao}>{imagem.descricao}</p>
          <div className={styles.lbMeta}>
            {imagem.autor && <span className={styles.lbMetaItem}><span className={styles.lbMetaLabel}>Artista</span>{imagem.autor}</span>}
            {imagem.data && <span className={styles.lbMetaItem}><span className={styles.lbMetaLabel}>Data</span>{imagem.data}</span>}
            {imagem.tecnica && <span className={styles.lbMetaItem}><span className={styles.lbMetaLabel}>Técnica</span>{imagem.tecnica}</span>}
            {imagem.localizacao && <span className={styles.lbMetaItem}><span className={styles.lbMetaLabel}>Local</span>{imagem.localizacao}</span>}
            {imagem.acervo && <span className={styles.lbMetaItem}><span className={styles.lbMetaLabel}>Acervo</span>{imagem.acervo}</span>}
            {imagem.manuscrito && <span className={styles.lbMetaItem}><span className={styles.lbMetaLabel}>Manuscrito</span>{imagem.manuscrito}</span>}
            {imagem.folio && <span className={styles.lbMetaItem}><span className={styles.lbMetaLabel}>Fólio</span>{imagem.folio}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════ Card ═══════ */

function CardImagem({ imagem, onClick }: { imagem: ImagemIconografia; onClick: () => void }) {
  const dest = imagem.destaque ?? 'normal';
  return (
    <article
      className={`${styles.card} ${styles[`card_${dest}`]} ${styles[`card_${imagem.orientacao}`]}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <div className={styles.cardImagemWrapper}>
        <Image
          src={imagem.src}
          alt={imagem.alt}
          width={imagem.largura}
          height={imagem.altura}
          className={styles.cardImagem}
          quality={82}
          sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
        />
        <div className={styles.cardOverlay}>
          <span className={styles.cardLupa}>⌕</span>
        </div>
      </div>
      <div className={styles.cardCorpo}>
        <h3 className={styles.cardTitulo}>{imagem.titulo}</h3>
        {imagem.autor && <p className={styles.cardAutor}>{imagem.autor}</p>}
        {imagem.data && <p className={styles.cardData}>{imagem.data}</p>}
        {imagem.localizacao && <p className={styles.cardLocal}>{imagem.localizacao}</p>}
      </div>
    </article>
  );
}

/* ═══════ Grid com lightbox ═══════ */

export function GaleriaGrid({ imagens }: { imagens: ImagemIconografia[] }) {
  const [lbIndice, setLbIndice] = useState<number | null>(null);

  const abrir = useCallback((i: number) => {
    setLbIndice(i);
    document.body.style.overflow = 'hidden';
  }, []);

  const fechar = useCallback(() => {
    setLbIndice(null);
    document.body.style.overflow = '';
  }, []);

  const anterior = useCallback(() =>
    setLbIndice((p) => p !== null ? (p - 1 + imagens.length) % imagens.length : null),
  [imagens.length]);

  const proxima = useCallback(() =>
    setLbIndice((p) => p !== null ? (p + 1) % imagens.length : null),
  [imagens.length]);

  return (
    <>
      <div className={styles.grid}>
        {imagens.map((img, i) => (
          <CardImagem key={img.src} imagem={img} onClick={() => abrir(i)} />
        ))}
      </div>
      {lbIndice !== null && imagens[lbIndice] && (
        <Lightbox
          imagem={imagens[lbIndice]}
          onFechar={fechar}
          onAnterior={anterior}
          onProxima={proxima}
          indice={lbIndice}
          total={imagens.length}
        />
      )}
    </>
  );
}

/* ═══════ Peça em destaque ═══════ */

export function PecaDestaque({
  imagem,
  invertido = false,
  children,
}: {
  imagem: ImagemIconografia;
  invertido?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className={`${styles.peca} ${invertido ? styles.pecaInvertida : ''}`}>
      <div className={styles.pecaImagemLado}>
        <div className={styles.pecaMoldura}>
          <Image
            src={imagem.src}
            alt={imagem.alt}
            width={imagem.largura}
            height={imagem.altura}
            className={styles.pecaImagem}
            quality={88}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        {imagem.acervo && <p className={styles.pecaCredito}>{imagem.acervo}</p>}
      </div>
      <div className={styles.pecaTextoLado}>
        <span className={styles.pecaFio} />
        <h3 className={styles.pecaTitulo}>{imagem.titulo}</h3>
        <div className={styles.pecaFicha}>
          {imagem.autor && <div className={styles.pecaFichaItem}><span className={styles.pecaFichaLabel}>Artista</span><span>{imagem.autor}</span></div>}
          {imagem.data && <div className={styles.pecaFichaItem}><span className={styles.pecaFichaLabel}>Data</span><span>{imagem.data}</span></div>}
          {imagem.tecnica && <div className={styles.pecaFichaItem}><span className={styles.pecaFichaLabel}>Técnica</span><span>{imagem.tecnica}</span></div>}
          {imagem.localizacao && <div className={styles.pecaFichaItem}><span className={styles.pecaFichaLabel}>Local</span><span>{imagem.localizacao}</span></div>}
          {imagem.manuscrito && <div className={styles.pecaFichaItem}><span className={styles.pecaFichaLabel}>Manuscrito</span><span>{imagem.manuscrito}</span></div>}
          {imagem.folio && <div className={styles.pecaFichaItem}><span className={styles.pecaFichaLabel}>Fólio</span><span>{imagem.folio}</span></div>}
        </div>
        <div className={styles.pecaDescricao}>{children}</div>
      </div>
    </div>
  );
}

/* ═══════ Seção ═══════ */

export function SecaoIconografia({
  numero, titulo, subtitulo, children,
}: {
  numero: string; titulo: string; subtitulo?: string; children: React.ReactNode;
}) {
  return (
    <section className={styles.secao}>
      <div className={styles.secaoCabecalho}>
        <span className={styles.secaoNumero}>{numero}</span>
        <div className={styles.secaoFio} />
        <div>
          <h2 className={styles.secaoTitulo}>{titulo}</h2>
          {subtitulo && <p className={styles.secaoSubtitulo}>{subtitulo}</p>}
        </div>
      </div>
      <div className={styles.secaoCorpo}>{children}</div>
    </section>
  );
}

/* ═══════ Prosa ═══════ */

export function Prosa({ children }: { children: React.ReactNode }) {
  return <div className={styles.prosa}>{children}</div>;
}

/* ═══════ Atributo ═══════ */

export function Atributo({ simbolo, nome, children }: {
  simbolo: string; nome: string; children: React.ReactNode;
}) {
  return (
    <div className={styles.atributo}>
      <span className={styles.atributoSimbolo}>{simbolo}</span>
      <div className={styles.atributoTexto}>
        <strong className={styles.atributoNome}>{nome}</strong>
        <span className={styles.atributoDesc}>{children}</span>
      </div>
    </div>
  );
}

export function AtributosGrid({ children }: { children: React.ReactNode }) {
  return <div className={styles.atributosGrid}>{children}</div>;
}

/* ═══════ Nota ═══════ */

export function NotaIconografia({ children }: { children: React.ReactNode }) {
  return (
    <aside className={styles.nota}>
      <span className={styles.notaIcone}>※</span>
      <div className={styles.notaTexto}>{children}</div>
    </aside>
  );
}