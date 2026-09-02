'use client';

import { useState, ReactNode } from 'react';
import styles from '../../_styles/biografia.module.css';

type DialogoProps = {
  /** Referência bíblica, ex: "Tobias 5,13" */
  referencia: string;
  /** Contexto narrativo — descrição da cena onde a fala acontece */
  cena?: string;
  /** Quem está falando, ex: "Rafael Arcanjo (disfarçado como Azarias)" */
  locutor?: string;
  /** Texto original em latim/grego (opcional) */
  original?: string;
  /** A fala em português (children) */
  children: ReactNode;
};

export default function Dialogo({
  referencia,
  cena,
  locutor = 'Rafael Arcanjo',
  original,
  children,
}: DialogoProps) {
  const [originalAberto, setOriginalAberto] = useState(false);

  return (
    <div className={styles.dialogoRafael}>
      <div className={styles.dialogoRef}>{referencia}</div>

      {cena && (
        <div className={styles.dialogoCena}>
          <div className={styles.dialogoCenaLabel}>Cena</div>
          <p className={styles.dialogoCenaTexto}>{cena}</p>
        </div>
      )}

      <div className={styles.dialogoLocutor}>
        <span className={styles.dialogoLocutorSimbolo}>▸</span>
        <span className={styles.dialogoLocutorNome}>{locutor}</span>
      </div>

      <div className={styles.dialogoFala}>{children}</div>

      {original && (
        <div className={styles.dialogoOriginal}>
          <button
            type="button"
            className={styles.dialogoOriginalToggle}
            onClick={() => setOriginalAberto((v) => !v)}
            aria-expanded={originalAberto}
          >
            {originalAberto ? 'Ocultar original' : 'Ver original (latim/grego)'}
          </button>
          {originalAberto && (
            <div className={styles.dialogoOriginalTexto}>{original}</div>
          )}
        </div>
      )}
    </div>
  );
}