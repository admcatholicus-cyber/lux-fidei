'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../../_styles/santo.module.css';

export interface Aba {
  slug: string;         // "historia", "ars", "confessionario"
  label: string;        // "História", "Ars", "O Confessionário"
  destaque?: boolean;   // true = Antologia (fica embaixo)
}

interface SantoTabsProps {
  categoria: string;    // "presbiteros"
  slug: string;         // "sao-joao-maria-vianney"
  abas: Aba[];
}

export default function SantoTabs({ categoria, slug, abas }: SantoTabsProps) {
  const pathname = usePathname();

  // Separa abas normais das de destaque (Antologia)
  const abasNormais = abas.filter((a) => !a.destaque);
  const abasDestaque = abas.filter((a) => a.destaque);

  const isAtivo = (abaSlug: string) => {
    return pathname === `/santos/${categoria}/${slug}/${abaSlug}`;
  };

  return (
    <>
      {/* Menu principal — 10 abas em grid 5 colunas */}
      <nav className={styles.nav}>
        <ul className={styles.lista}>
          {abasNormais.map((aba) => (
            <li key={aba.slug}>
              <Link
                href={`/santos/${categoria}/${slug}/${aba.slug}`}
                className={isAtivo(aba.slug) ? styles.ativo : ''}
              >
                <span className={styles.nome}>{aba.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Botão extra — Antologia de Frases (se existir) */}
      {abasDestaque.length > 0 && (
        <div className={styles.frasesDestaque}>
          <div className={styles.frasesDestaqueInner}>
            {abasDestaque.map((aba) => (
              <Link
                key={aba.slug}
                href={`/santos/${categoria}/${slug}/${aba.slug}`}
                className={isAtivo(aba.slug) ? styles.ativo : ''}
              >
                <span className={styles.nome}>{aba.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}