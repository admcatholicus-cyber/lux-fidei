'use client';

import { useState } from 'react';
import styles from './BilingualDisplay.module.css';

type Modo = 'traduzido' | 'original' | 'paralelo';

type Props = {
  textoTraduzido: readonly string[];
  textoOriginal: readonly string[];
  idiomaOriginal: 'grego' | 'inglês';
};

export default function BilingualDisplay({ textoTraduzido, textoOriginal, idiomaOriginal }: Props) {
  const [modo, setModo] = useState<Modo>('traduzido');
  const labelOriginal = idiomaOriginal === 'grego' ? 'Grego Koiné' : 'Inglês (NPNF)';

  return (
    <>
      <div className={styles.toggleGroup}>
        <button
          className={modo === 'traduzido' ? styles.active : ''}
          onClick={() => setModo('traduzido')}
        >
          Português
        </button>
        <button
          className={modo === 'original' ? styles.active : ''}
          onClick={() => setModo('original')}
        >
          {labelOriginal}
        </button>
        <button
          className={modo === 'paralelo' ? styles.active : ''}
          onClick={() => setModo('paralelo')}
        >
          Paralelo
        </button>
      </div>

      {modo === 'traduzido' && (
        <div className={styles.singleColumn}>
          {textoTraduzido.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      )}

      {modo === 'original' && (
        <div className={styles.singleColumn}>
          {textoOriginal.map((p, i) => <p key={i} lang={idiomaOriginal === 'grego' ? 'grc' : 'en'}>{p}</p>)}
        </div>
      )}

      {modo === 'paralelo' && (
        <div className={styles.parallelGrid}>
          {textoTraduzido.map((p, i) => (
            <div key={i} className={styles.parallelRow}>
              <p className={styles.parallelPt}>{p}</p>
              <p className={styles.parallelOriginal} lang={idiomaOriginal === 'grego' ? 'grc' : 'en'}>
                {textoOriginal[i] ?? ''}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
