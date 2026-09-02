'use client';

import React from 'react';
import styles from '../../../../../_styles/especificos/doutores/santa-teresinha-do-menino-jesus/formacao/influencia.module.css';

type Certeza = 'documentada' | 'provavel' | 'possivel';

interface CartaoInfluenciaProps {
  autor: string;
  obra?: string;
  periodo?: string;
  tradicao?: string;
  evidencia: string;
  temas: string;
  transformacao: string;
  certeza: Certeza;
}

const rotulos: Record<Certeza, string> = {
  documentada: 'Influência documentada',
  provavel: 'Influência provável',
  possivel: 'Influência possível',
};

export default function CartaoInfluencia({
  autor,
  obra,
  periodo,
  tradicao,
  evidencia,
  temas,
  transformacao,
  certeza,
}: CartaoInfluenciaProps) {
  return (
    <div className={styles.cartao}>
      <div className={styles.cabecalho}>
        <div className={styles.identidade}>
          <div className={styles.autor}>{autor}</div>
          {obra && <div className={styles.obra}>{obra}</div>}
          {(periodo || tradicao) && (
            <div className={styles.meta}>
              {periodo && <span>{periodo}</span>}
              {periodo && tradicao && <span className={styles.sep}>·</span>}
              {tradicao && <span>{tradicao}</span>}
            </div>
          )}
        </div>
        <span className={`${styles.selo} ${styles[certeza]}`}>{rotulos[certeza]}</span>
      </div>

      <div className={styles.corpo}>
        <div className={styles.linha}>
          <div className={styles.rotulo}>Evidência</div>
          <div className={styles.texto}>{evidencia}</div>
        </div>
        <div className={styles.linha}>
          <div className={styles.rotulo}>Temas assimilados</div>
          <div className={styles.texto}>{temas}</div>
        </div>
        <div className={styles.linha}>
          <div className={styles.rotulo}>Transformação por Teresa</div>
          <div className={styles.texto}>{transformacao}</div>
        </div>
      </div>
    </div>
  );
}