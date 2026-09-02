'use client';

import Link from 'next/link';
import styles from '../../_styles/navegacao.module.css';

export default function BotaoVoltar() {
  return (
    <Link href="/santos" className={styles.botaoVoltar} aria-label="Voltar aos Santos">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M15 18l-6-6 6-6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={styles.botaoVoltarLabel}>Voltar aos Santos</span>
    </Link>
  );
}