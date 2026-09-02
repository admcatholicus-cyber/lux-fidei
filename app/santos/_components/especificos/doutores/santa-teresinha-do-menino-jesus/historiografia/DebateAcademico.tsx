'use client';

import React from 'react';
import styles from '../../../../../_styles/especificos/doutores/santa-teresinha-do-menino-jesus/historiografia/debate.module.css';

type Estado = 'aberto' | 'consolidado' | 'superado' | 'emergente';

interface DebateAcademicoProps {
  numero?: string;
  titulo: string;
  pergunta: string;
  posicoes: string;
  autores: string;
  estado: Estado;
  observacao?: string;
}

const rotulos: Record<Estado, string> = {
  aberto: 'Debate em aberto',
  consolidado: 'Consenso consolidado',
  superado: 'Superado pela documentação',
  emergente: 'Debate emergente',
};

export default function DebateAcademico({
  numero,
  titulo,
  pergunta,
  posicoes,
  autores,
  estado,
  observacao,
}: DebateAcademicoProps) {
  return (
    <div className={styles.debate}>
      <div className={styles.cabecalho}>
        <div className={styles.identidade}>
          {numero && <div className={styles.numero}>Debate {numero}</div>}
          <div className={styles.titulo}>{titulo}</div>
        </div>
        <span className={`${styles.selo} ${styles[estado]}`}>{rotulos[estado]}</span>
      </div>

      <div className={styles.corpo}>
        <div className={styles.bloco}>
          <div className={styles.rotulo}>Pergunta</div>
          <div className={styles.texto}>{pergunta}</div>
        </div>
        <div className={styles.bloco}>
          <div className={styles.rotulo}>Posições em confronto</div>
          <div className={styles.texto}>{posicoes}</div>
        </div>
        <div className={styles.bloco}>
          <div className={styles.rotulo}>Autores representativos</div>
          <div className={styles.texto}>{autores}</div>
        </div>
        {observacao && (
          <div className={styles.observacao}>
            <span className={styles.observacaoRotulo}>Observação:</span> {observacao}
          </div>
        )}
      </div>
    </div>
  );
}