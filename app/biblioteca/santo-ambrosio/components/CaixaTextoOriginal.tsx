"use client";

import { useState } from "react";
import styles from "../biblioteca-ambrosio.module.css";

interface CaixaTextoOriginalProps {
  idioma: string;
  texto: string;
}

export function CaixaTextoOriginal({ idioma, texto }: CaixaTextoOriginalProps) {
  const [aberto, setAberto] = useState(false);

  const paragrafosLat = texto
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  if (paragrafosLat.length === 0) return null;

  return (
    <div className={styles.caixaOriginalWrapper}>
      <button
        type="button"
        className={styles.btnToggleOriginal}
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
      >
        <span>
          {aberto ? "Ocultar texto original" : `Ver texto original (${idioma})`}
        </span>
        <span className={styles.btnToggleSeta}>{aberto ? "▲" : "▼"}</span>
      </button>

      {aberto && (
        <div className={styles.caixaOriginal}>
          <div className={styles.caixaOriginalHeader}>
            <span className={styles.caixaOriginalTitulo}>Texto Original</span>
            <span className={styles.badgeIdioma}>{idioma}</span>
          </div>
          <div className={styles.caixaOriginalTexto}>
            {paragrafosLat.map((paragrafo, index) => (
              <p key={index} style={{ marginBottom: 16 }}>
                {paragrafo}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
