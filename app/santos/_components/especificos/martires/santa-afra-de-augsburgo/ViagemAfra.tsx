// C:\Users\kitten\Documents\lux-fidei\app\santos\_components\especificos\martires\santa-afra-de-augsburgo\ViagemAfra.tsx

'use client';

import React, { useState } from 'react';
import styles from '../../../../_styles/especificos/martires/santa-afra-de-augsburgo/ViagemAfra.module.css';

export interface Escala {
  lugar: string;
  pais: string;
  coordenada?: string; // texto evocativo, não geográfico real
  enredo: React.ReactNode;
}

export interface ViagemProps {
  numero: string;         // 'I', 'II', 'III', 'IV'
  destino: string;        // 'Gerona'
  lema: string;           // frase-síntese
  icone: string;          // emoji
  cor?: string;           // classe de acento
  escalas: Escala[];
}

export function ViagemAfra({
  numero,
  destino,
  lema,
  icone,
  cor = 'dourado',
  escalas,
}: ViagemProps) {
  const [aberta, setAberta] = useState(false);

  return (
    <article className={`${styles.viagem} ${styles[cor]}`}>
      <button
        className={styles.cabecalho}
        onClick={() => setAberta(p => !p)}
        aria-expanded={aberta}
      >
        <span className={styles.icone}>{icone}</span>
        <span className={styles.numero}>{numero}</span>
        <span className={styles.textos}>
          <span className={styles.destino}>{destino}</span>
          <span className={styles.lema}>{lema}</span>
        </span>
        <span className={styles.seta} aria-hidden>{aberta ? '▲' : '▼'}</span>
      </button>

      {aberta && (
        <div className={styles.corpo}>
          {escalas.map((esc, i) => (
            <div key={i} className={styles.escala}>
              <div className={styles.escalaCabecalho}>
                <span className={styles.escalaPonto}>◆</span>
                <div className={styles.escalaTitulo}>
                  <strong className={styles.escalaLugar}>{esc.lugar}</strong>
                  {esc.pais && (
                    <span className={styles.escalaPais}>{esc.pais}</span>
                  )}
                  {esc.coordenada && (
                    <span className={styles.escalaCoordenada}>
                      {esc.coordenada}
                    </span>
                  )}
                </div>
              </div>
              <div className={styles.escalaEnredo}>{esc.enredo}</div>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}