'use client';

import React from 'react';
import styles from '../../../../../_styles/especificos/doutores/santa-teresinha-do-menino-jesus/contexto/matriz.module.css';

type Nivel = 'documentado' | 'provavel' | 'possivel' | 'posterior' | 'desconhecido';

interface LinhaMatrizProps {
  tema: string;
  contemporaneo: string;
  contato: string;
  nivel: Nivel;
  observacao?: string;
}

const rotulos: Record<Nivel, string> = {
  documentado: 'Documentado',
  provavel: 'Provável',
  possivel: 'Possível',
  posterior: 'Posterior à morte',
  desconhecido: 'Desconhecido',
};

export function MatrizCerteza({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.matrizWrap}>
      <table className={styles.matriz}>
        <thead>
          <tr>
            <th>Tema</th>
            <th>Contemporâneo?</th>
            <th>Contato / Menção</th>
            <th>Nível</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export function LinhaMatriz({ tema, contemporaneo, contato, nivel, observacao }: LinhaMatrizProps) {
  return (
    <tr>
      <td className={styles.tema}>
        <strong>{tema}</strong>
        {observacao && <div className={styles.obs}>{observacao}</div>}
      </td>
      <td>{contemporaneo}</td>
      <td>{contato}</td>
      <td>
        <span className={`${styles.pill} ${styles[nivel]}`}>{rotulos[nivel]}</span>
      </td>
    </tr>
  );
}