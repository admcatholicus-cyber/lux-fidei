'use client';

import { ReactNode } from 'react';
import { useAntologiaGabriel } from './AntologiaGabriel';
import styles from '@/app/santos/_styles/especificos/arcanjos/sao-gabriel-arcanjo/antologia.module.css';

type Props = {
  titulo: string;          // "Angelus Domini"
  tipo: string;            // "Oração devocional universal"
  origem: string;          // "Séc. XIII–XVI, forma fixada no séc. XVII"
  usoLiturgico?: string;   // "Rezado três vezes ao dia (6h, 12h, 18h)"
  originalLatim?: string;
  fonte: string;
  children: ReactNode;
};

export default function TextoLiturgicoGabriel({
  titulo,
  tipo,
  origem,
  usoLiturgico,
  originalLatim,
  fonte,
  children,
}: Props) {
  const { fraseCombina } = useAntologiaGabriel();
  
  const textoBusca = [
    typeof children === 'string' ? children : '',
    titulo,
    originalLatim ?? '',
  ].join(' ');
  
  if (!fraseCombina(textoBusca)) return null;

  return (
    <article className={styles.liturgico}>
      <header className={styles.liturgicoHeader}>
        <div className={styles.liturgicoSelo}>✠</div>
        <div className={styles.liturgicoIdent}>
          <h3 className={styles.liturgicoTitulo}>{titulo}</h3>
          <p className={styles.liturgicoTipo}>{tipo}</p>
        </div>
      </header>

      <div className={styles.liturgicoMeta}>
        <div><strong>Origem:</strong> {origem}</div>
        {usoLiturgico && <div><strong>Uso:</strong> {usoLiturgico}</div>}
      </div>

      <div className={styles.liturgicoCorpo}>{children}</div>

      {originalLatim && (
        <details className={styles.liturgicoOriginal}>
          <summary>Texto latino</summary>
          <p className={styles.originalTexto} lang="la">{originalLatim}</p>
        </details>
      )}

      <p className={styles.liturgicoFonte}>{fonte}</p>
    </article>
  );
}