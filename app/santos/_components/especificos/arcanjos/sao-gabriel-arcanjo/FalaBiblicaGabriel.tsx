'use client';

import { ReactNode } from 'react';
import { useAntologiaGabriel } from './AntologiaGabriel';
import styles from '@/app/santos/_styles/especificos/arcanjos/sao-gabriel-arcanjo/antologia.module.css';

type Props = {
  referencia: string;      // "Lucas 1,26-38"
  cena: string;            // contexto narrativo curto
  destinatario: string;    // "A Maria, em Nazaré"
  originalGrego?: string;
  originalHebraico?: string;
  transliteracao?: string;
  fonteOriginal?: string;  // "Nestle-Aland 28"
  destaque?: boolean;      // aplica moldura de destaque máximo
  children: ReactNode;     // tradução portuguesa da fala
};

export default function FalaBiblicaGabriel({
  referencia,
  cena,
  destinatario,
  originalGrego,
  originalHebraico,
  transliteracao,
  fonteOriginal,
  destaque = false,
  children,
}: Props) {
  const { fraseCombina } = useAntologiaGabriel();
  
  // Verifica se combina com a busca (checa tradução + originais)
  const textoParaBusca = [
    typeof children === 'string' ? children : '',
    originalGrego ?? '',
    originalHebraico ?? '',
    transliteracao ?? '',
    referencia,
    destinatario,
  ].join(' ');
  
  if (!fraseCombina(textoParaBusca)) return null;

  return (
    <article className={`${styles.fala} ${destaque ? styles.falaDestaque : ''}`}>
      <header className={styles.falaHeader}>
        <div className={styles.falaReferencia}>{referencia}</div>
        <div className={styles.falaDestinatario}>{destinatario}</div>
      </header>

      <p className={styles.falaCena}>{cena}</p>

      <blockquote className={styles.falaTraducao}>
        <div className={styles.falaTraducaoTexto}>{children}</div>
      </blockquote>

      {(originalGrego || originalHebraico) && (
        <details className={styles.falaOriginal}>
          <summary className={styles.falaOriginalSummary}>
            Ver texto original
          </summary>
          <div className={styles.falaOriginalCorpo}>
            {originalGrego && (
              <div className={styles.originalBloco}>
                <span className={styles.originalLabel}>Grego</span>
                <p className={styles.originalTexto} lang="grc">{originalGrego}</p>
              </div>
            )}
            {originalHebraico && (
              <div className={styles.originalBloco}>
                <span className={styles.originalLabel}>Hebraico</span>
                <p className={styles.originalTexto} lang="he" dir="rtl">{originalHebraico}</p>
              </div>
            )}
            {transliteracao && (
              <div className={styles.originalBloco}>
                <span className={styles.originalLabel}>Transliteração</span>
                <p className={styles.originalTransliteracao}>{transliteracao}</p>
              </div>
            )}
            {fonteOriginal && (
              <p className={styles.originalFonte}>Fonte crítica: {fonteOriginal}</p>
            )}
          </div>
        </details>
      )}
    </article>
  );
}