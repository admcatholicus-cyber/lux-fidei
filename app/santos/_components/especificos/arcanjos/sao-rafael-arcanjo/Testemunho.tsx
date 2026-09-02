'use client';

import { ReactNode } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-rafael-arcanjo/biblioteca.module.css';

type TestemunhoProps = {
  autor: string;
  qualificacao: string;
  monograma?: string;
  obra: string;
  fonte?: string;
  original?: string;
  children: ReactNode;
};

export default function Testemunho({
  autor,
  qualificacao,
  monograma,
  obra,
  fonte,
  original,
  children,
}: TestemunhoProps) {
  const inicial =
    monograma ??
    autor
      .replace(/^(São|Santo|Santa|Beato|Beata|Papa|Venerável)\s+/i, '')
      .charAt(0)
      .toUpperCase();

  const partesQualif = qualificacao.split(/\s*[·•]\s*/);
  const qualifRender: ReactNode[] = [];
  partesQualif.forEach((parte, i) => {
    if (i > 0) qualifRender.push(<span key={`sep-${i}`}>·</span>);
    qualifRender.push(<span key={`p-${i}`}>{parte}</span>);
  });

  return (
    <div className={styles.testemunho}>
      <div className={styles.testemunhoAvatar}>{inicial}</div>

      <div className={styles.testemunhoConteudo}>
        <h4 className={styles.testemunhoAutor}>{autor}</h4>
        <p className={styles.testemunhoQualif}>{qualifRender}</p>

        <div className={styles.testemunhoCitacao}>{children}</div>

        {original && (
          <div className={styles.testemunhoOriginal}>{original}</div>
        )}

        <div className={styles.testemunhoFonte}>
          <span className={styles.testemunhoFonteMarca}>◆</span>
          <p className={styles.testemunhoFonteTexto}>
            <em>{obra}</em>
            {fonte && ` — ${fonte}`}
          </p>
        </div>
      </div>
    </div>
  );
}