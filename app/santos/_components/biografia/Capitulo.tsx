'use client';

import { useState, ReactNode } from 'react';
import styles from '../../_styles/biografia.module.css';

type CapituloProps = {
  id: string;
  numero: string;
  titulo: string;
  contagem?: string;
  aberto?: boolean;
  children: ReactNode;
};

export default function Capitulo({
  id,
  numero,
  titulo,
  contagem,
  aberto = false,
  children,
}: CapituloProps) {
  const [aberto2, setAberto] = useState(aberto);

  return (
    <>
      <section className={styles.antCapitulo} id={id}>
        <button
          className={`${styles.antCapituloHeader} ${aberto2 ? styles.antCapituloAberto : ''}`}
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto2}
        >
          <span className={styles.antCapituloNum}>{numero}</span>
          <h2 className={styles.antCapituloTitulo}>{titulo}</h2>
          {contagem && <span className={styles.antCapituloContagem}>{contagem}</span>}
          <span
            className={`${styles.antCapituloArrow} ${
              aberto2 ? styles.antCapituloArrowAberto : ''
            }`}
          >
            ▾
          </span>
        </button>
        <div className={styles.antCapituloBody} style={{ display: aberto2 ? 'block' : 'none' }}>{children}</div>
      </section>
      <div className={styles.antSepCap}>· · ·</div>
    </>
  );
}