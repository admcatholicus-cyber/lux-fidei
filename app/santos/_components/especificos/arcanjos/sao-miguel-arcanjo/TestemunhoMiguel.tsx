import { ReactNode } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-miguel-arcanjo/biblioteca.module.css';

type TestemunhoMiguelProps = {
  autor: string;
  qualificacao?: string;
  obra?: string;
  fonte?: string;
  original?: string;
  monograma?: string;
  children: ReactNode;
};

export default function TestemunhoMiguel({
  autor,
  qualificacao,
  obra,
  fonte,
  original,
  monograma,
  children,
}: TestemunhoMiguelProps) {
  return (
    <article className={styles.testemunho}>
      <header className={styles.testemunhoHeader}>
        {monograma && <div className={styles.testemunhoMonograma}>{monograma}</div>}
        <div className={styles.testemunhoIdentificacao}>
          <div className={styles.testemunhoAutor}>{autor}</div>
          {qualificacao && (
            <div className={styles.testemunhoQualificacao}>{qualificacao}</div>
          )}
        </div>
      </header>

      <div className={styles.testemunhoTexto}>{children}</div>

      <footer className={styles.testemunhoFooter}>
        {obra && <div className={styles.testemunhoObra}>{obra}</div>}
        {fonte && <div className={styles.testemunhoFonte}>{fonte}</div>}
      </footer>

      {original && (
        <details className={styles.testemunhoOriginal}>
          <summary>Texto original</summary>
          <div>{original}</div>
        </details>
      )}
    </article>
  );
}