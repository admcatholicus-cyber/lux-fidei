'use client';

import { useState, ReactNode } from 'react';
import styles from '../../_styles/grid/lerMais.module.css';

type Props = {
  children: ReactNode;
  /** Linhas aproximadas no mobile antes do fade (só visual) */
  labelExpandir?: string;
  labelRecolher?: string;
};

export default function LerMais({
  children,
  labelExpandir = 'Ler descrição completa',
  labelRecolher = 'Recolher',
}: Props) {
  const [expandido, setExpandido] = useState(false);

  return (
    <div className={styles.wrap}>
      <div
        className={`${styles.conteudo} ${
          expandido ? styles.expandido : styles.colapsado
        }`}
      >
        {children}
      </div>

      <button
        type="button"
        className={styles.btn}
        onClick={() => setExpandido((v) => !v)}
        aria-expanded={expandido}
      >
        <span>{expandido ? labelRecolher : labelExpandir}</span>
        <svg
          className={`${styles.icone} ${expandido ? styles.iconeGiro : ''}`}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </div>
  );
}