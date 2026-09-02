'use client';

import styles from '../../santos.module.css';

interface Props {
  valor: string;
  onChange: (v: string) => void;
}

export default function SearchBar({ valor, onChange }: Props) {
  return (
    <div className={styles.pesquisaWrap}>
      <div className={styles.pesquisaBox}>
        <svg
          className={styles.pesquisaIcone}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>

        <input
          type="text"
          className={styles.pesquisaInput}
          placeholder="Pesquisar santo..."
          value={valor}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Pesquisar santo"
        />

        {valor && (
          <button
            type="button"
            className={styles.pesquisaLimpar}
            onClick={() => onChange('')}
            aria-label="Limpar pesquisa"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}