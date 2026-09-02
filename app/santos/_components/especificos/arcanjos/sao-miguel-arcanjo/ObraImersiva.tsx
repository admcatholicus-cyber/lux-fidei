'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-miguel-arcanjo/arte.module.css';

type Props = {
  imagem: string;
  posicaoImagem?: string;
  titulo: string;
  atribuicao?: string;
  marca?: string;
  tecnica?: string;
  dimensoes?: string;
  local?: string;
  data?: string;
  children: ReactNode;
};

export default function ObraImersiva({
  imagem,
  posicaoImagem = 'center 20%',
  titulo,
  atribuicao,
  marca = 'Obra-âncora',
  tecnica,
  dimensoes,
  local,
  data,
  children,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisivel(true),
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`${styles.imersiva} ${visivel ? styles.visivel : ''}`}
    >
      <div
        className={styles.imersivaImagem}
        style={{
          backgroundImage: `url(${imagem})`,
          backgroundPosition: posicaoImagem,
        }}
      />
      <div className={styles.imersivaOverlay} />

      <div className={styles.imersivaConteudo}>
        <div className={styles.imersivaMarca}>{marca}</div>
        <h3 className={styles.imersivaTitulo}>{titulo}</h3>
        {atribuicao && <div className={styles.imersivaAtribuicao}>{atribuicao}</div>}

        <div className={styles.imersivaConteudoTexto}>
          {(tecnica || dimensoes || local || data) && (
            <dl className={styles.imersivaFicha}>
              {data && (<><dt>Datação</dt><dd>{data}</dd></>)}
              {tecnica && (<><dt>Técnica</dt><dd>{tecnica}</dd></>)}
              {dimensoes && (<><dt>Dimensões</dt><dd>{dimensoes}</dd></>)}
              {local && (<><dt>Localização</dt><dd>{local}</dd></>)}
            </dl>
          )}

          <div className={styles.imersivaAnalise}>{children}</div>
        </div>
      </div>
    </section>
  );
}