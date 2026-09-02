'use client';

import { useState, ReactNode } from 'react';
import styles from '../../_styles/biografia.module.css';

type SubtemaProps = {
  titulo: string;
  aberto?: boolean;
  primeiro?: boolean;
  children: ReactNode;
};

export default function Subtema({
  titulo,
  aberto = false,
  primeiro = false,
  children,
}: SubtemaProps) {
  const [aberto2, setAberto] = useState(aberto);

  return (
    <section
      className={`${styles.antSubtema} ${primeiro ? styles.antSubtemaSemBorda : ''}`}
    >
      <button
        className={styles.antSubtemaHeader}
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto2}
      >
        <h3 className={styles.antSubtemaTitulo}>
          <span className={styles.antSubtemaOrnamento}>✦</span>
          {titulo}
        </h3>
        <span
          className={`${styles.antSubtemaArrow} ${
            aberto2 ? styles.antSubtemaArrowAberto : ''
          }`}
        >
          ▾
        </span>
      </button>
      {aberto2 && <div className={styles.antFrasesLista}>{children}</div>}
    </section>
  );
}