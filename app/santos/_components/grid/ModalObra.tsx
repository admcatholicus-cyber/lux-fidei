'use client';

import { useState, useEffect } from 'react';
import styles from '../../_styles/modal.module.css'; // Ajuste o caminho se precisar

type ModalObraProps = {
  aberto: boolean;
  fechar: () => void;
  imagem: string;
  titulo: string;
  supratitulo?: string;
  subtitulo?: string;
  descricao?: React.ReactNode;
  data?: string;
  tecnica?: string;
  local?: string;
  dimensoes?: string;
  artista?: string;
};

export default function ModalObra({
  aberto,
  fechar,
  imagem,
  titulo,
  supratitulo,
  subtitulo,
  descricao,
  data,
  tecnica,
  local,
  dimensoes,
  artista,
}: ModalObraProps) {
  const [isPaisagem, setIsPaisagem] = useState(false);

  // Trava a rolagem da página quando o modal abre
  useEffect(() => {
    if (aberto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [aberto]);

  // Fecha com a tecla ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') fechar();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [fechar]);

  if (!aberto) return null;

  return (
    <div className={styles.overlay} onClick={fechar}>
      <div 
        className={`${styles.modal} ${isPaisagem ? styles.modalPaisagem : styles.modalRetrato}`}
        onClick={(e) => e.stopPropagation()} // Impede que clicar dentro do modal feche ele
      >
        <button className={styles.btnFechar} onClick={fechar} aria-label="Fechar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className={styles.imagemContainer}>
          <img 
            src={imagem} 
            alt={titulo} 
            className={styles.imagem}
            onLoad={(e) => {
              // DETECÇÃO AUTOMÁTICA: descobre se a imagem é horizontal ou vertical
              const { naturalWidth, naturalHeight } = e.currentTarget;
              setIsPaisagem(naturalWidth > naturalHeight);
            }}
          />
        </div>

        <div className={styles.infoContainer}>
          {supratitulo && <div className={styles.supratitulo}>{supratitulo}</div>}
          <h2 className={styles.titulo}>{titulo}</h2>
          {(subtitulo || artista) && <div className={styles.subtitulo}>{subtitulo || artista}</div>}
          
          {descricao && <div className={styles.descricao}>{descricao}</div>}
          
          {(data || tecnica || local || dimensoes) && (
            <>
              <div className={styles.divisor} />
              <dl className={styles.ficha}>
                {data && <><dt>Datação</dt><dd>{data}</dd></>}
                {tecnica && <><dt>Técnica</dt><dd>{tecnica}</dd></>}
                {dimensoes && <><dt>Dimensões</dt><dd>{dimensoes}</dd></>}
                {local && <><dt>Fonte / Local</dt><dd>{local}</dd></>}
              </dl>
            </>
          )}
        </div>
      </div>
    </div>
  );
}