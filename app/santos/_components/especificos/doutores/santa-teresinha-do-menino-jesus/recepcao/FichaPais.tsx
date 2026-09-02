'use client';

import React from 'react';
import styles from '../../../../../_styles/especificos/doutores/santa-teresinha-do-menino-jesus/recepcao/pais.module.css';

interface FichaPaisProps {
  pais: string;
  bandeira?: string;
  regiao?: string;
  chegada?: string;
  vetores?: string;
  santuarios?: string;
  traducoes?: string;
  particularidade?: string;
  children?: React.ReactNode;
}

export default function FichaPais({
  pais,
  bandeira,
  regiao,
  chegada,
  vetores,
  santuarios,
  traducoes,
  particularidade,
  children,
}: FichaPaisProps) {
  return (
    <div className={styles.ficha}>
      <div className={styles.cabecalho}>
        {bandeira && <div className={styles.bandeira}>{bandeira}</div>}
        <div className={styles.identidade}>
          <div className={styles.pais}>{pais}</div>
          {regiao && <div className={styles.regiao}>{regiao}</div>}
        </div>
      </div>

      <div className={styles.corpo}>
        {chegada && (
          <div className={styles.linha}>
            <div className={styles.rotulo}>Primeira chegada</div>
            <div className={styles.texto}>{chegada}</div>
          </div>
        )}
        {vetores && (
          <div className={styles.linha}>
            <div className={styles.rotulo}>Vetores de difusão</div>
            <div className={styles.texto}>{vetores}</div>
          </div>
        )}
        {traducoes && (
          <div className={styles.linha}>
            <div className={styles.rotulo}>Traduções principais</div>
            <div className={styles.texto}>{traducoes}</div>
          </div>
        )}
        {santuarios && (
          <div className={styles.linha}>
            <div className={styles.rotulo}>Santuários e igrejas</div>
            <div className={styles.texto}>{santuarios}</div>
          </div>
        )}
        {particularidade && (
          <div className={styles.linha}>
            <div className={styles.rotulo}>Particularidade local</div>
            <div className={styles.texto}>{particularidade}</div>
          </div>
        )}
      </div>

      {children && <div className={styles.narrativa}>{children}</div>}
    </div>
  );
}