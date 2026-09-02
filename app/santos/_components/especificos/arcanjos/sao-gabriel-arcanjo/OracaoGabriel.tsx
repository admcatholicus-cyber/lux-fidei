'use client';

import { ReactNode, useRef, useState } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-gabriel-arcanjo/devocionario.module.css';

type Props = {
  id: string;
  titulo: string;
  subtitulo?: string;
  latinCompleto?: string;
  instrucao?: string;
  fonte?: string;
  children: ReactNode;
};

export default function OracaoGabriel({
  id,
  titulo,
  subtitulo,
  latinCompleto,
  instrucao,
  fonte,
  children,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [copiado, setCopiado] = useState(false);

  const copiar = async () => {
    if (!ref.current) return;
    const texto = ref.current.innerText;
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    } catch {
      /* fallback silencioso */
    }
  };

  return (
    <article id={id} className={styles.oracao}>
      <header className={styles.oracaoHeader}>
        <div className={styles.oracaoCruz}>✦</div>
        <h2 className={styles.oracaoTitulo}>{titulo}</h2>
        {subtitulo && <p className={styles.oracaoSubtitulo}>{subtitulo}</p>}
      </header>

      <div className={styles.oracaoCorpoWrap}>
        {instrucao && (
          <div className={styles.oracaoInstrucao}>
            <span className={styles.instrucaoLabel}>Como rezar</span>
            <p>{instrucao}</p>
          </div>
        )}

        <div ref={ref} className={styles.oracaoTexto}>
          {children}
        </div>

        <footer className={styles.oracaoFooter}>
         

          {latinCompleto && (
            <details className={styles.oracaoLatim}>
              <summary>Texto em latim</summary>
              <p lang="la">{latinCompleto}</p>
            </details>
          )}

          {fonte && <p className={styles.oracaoFonte}>{fonte}</p>}
        </footer>
      </div>
    </article>
  );
}