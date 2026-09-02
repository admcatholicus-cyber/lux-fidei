'use client';

import { ReactNode } from 'react';
import { useAntologiaGabriel } from './AntologiaGabriel';
import styles from '@/app/santos/_styles/especificos/arcanjos/sao-gabriel-arcanjo/antologia.module.css';

type Props = {
  autor: string;
  qualificacao: string;    // "Papa e Doutor da Igreja, †604"
  obra: string;
  fonte: string;           // edição crítica
  originalLatim?: string;
  children: ReactNode;
};

export default function ComentarioGabriel({
  autor,
  qualificacao,
  obra,
  fonte,
  originalLatim,
  children,
}: Props) {
  const { fraseCombina } = useAntologiaGabriel();
  const inicial = autor.trim().charAt(0);
  
  const textoBusca = [
    typeof children === 'string' ? children : '',
    autor,
    obra,
    originalLatim ?? '',
  ].join(' ');
  
  if (!fraseCombina(textoBusca)) return null;

  return (
    <article className={styles.comentario}>
      <aside className={styles.comentarioIdent}>
        <div className={styles.comentarioInicial}>{inicial}</div>
        <div className={styles.comentarioAutor}>
          <h3 className={styles.comentarioNome}>{autor}</h3>
          <p className={styles.comentarioQualif}>{qualificacao}</p>
          <p className={styles.comentarioObra}><em>{obra}</em></p>
        </div>
      </aside>

      <div className={styles.comentarioCorpo}>
        <blockquote className={styles.comentarioTexto}>{children}</blockquote>

        {originalLatim && (
          <details className={styles.comentarioOriginal}>
            <summary>Ver original em latim</summary>
            <p className={styles.originalTexto} lang="la">{originalLatim}</p>
          </details>
        )}

        <p className={styles.comentarioFonte}>{fonte}</p>
      </div>
    </article>
  );
}