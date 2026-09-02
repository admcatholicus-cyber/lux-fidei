'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../../_styles/navegacao.module.css';

export interface Aba {
  slug: string;
  label: string;
  destaque?: boolean;
}

interface Props {
  categoria: string;
  slug: string;
  abas: Aba[];
}

export default function NavegacaoAbas({ categoria, slug, abas }: Props) {
  const pathname = usePathname();

  // Encontra a aba atual pelo pathname
  const abaAtualIndex = abas.findIndex(
    (aba) => pathname === `/santos/${categoria}/${slug}/${aba.slug}`
  );

  if (abaAtualIndex === -1) return null;

  const anterior = abaAtualIndex > 0 ? abas[abaAtualIndex - 1] : null;
  const proxima = abaAtualIndex < abas.length - 1 ? abas[abaAtualIndex + 1] : null;

  return (
    <nav className={styles.navegacaoAbas} aria-label="Navegação entre abas">
      <div className={styles.navegacaoContainer}>
        {/* Botão anterior */}
        {anterior ? (
          <Link
            href={`/santos/${categoria}/${slug}/${anterior.slug}`}
            className={`${styles.navBotao} ${styles.navAnterior}`}
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className={styles.navTexto}>
              <span className={styles.navPrefixo}>Aba anterior</span>
              <span className={styles.navNome}>{anterior.label}</span>
            </div>
          </Link>
        ) : (
          <div className={styles.navVazio} aria-hidden="true" />
        )}

        {/* Ornamento central */}
        <div className={styles.navOrnamento} aria-hidden="true">
          <span className={styles.navLinha}></span>
          <span className={styles.navEstrela}>✦</span>
          <span className={styles.navLinha}></span>
        </div>

        {/* Botão próxima */}
        {proxima ? (
          <Link
            href={`/santos/${categoria}/${slug}/${proxima.slug}`}
            className={`${styles.navBotao} ${styles.navProxima}`}
          >
            <div className={styles.navTexto}>
              <span className={styles.navPrefixo}>Próxima aba</span>
              <span className={styles.navNome}>{proxima.label}</span>
            </div>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M9 18l6-6-6-6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        ) : (
          <div className={styles.navVazio} aria-hidden="true" />
        )}
      </div>
    </nav>
  );
}