import React from 'react';
import styles from '../../../../_styles/especificos/presbiteros/sao-joao-maria-vianney/PlantaReitoria.module.css';

interface PontoInvestigacao {
  numero: string;
  titulo: string;
  local: string;
  descricao: string;
}

interface PlantaReitoriaProps {
  pontos: PontoInvestigacao[];
}

export function PlantaReitoria({ pontos }: PlantaReitoriaProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h4 className={styles.title}>Planta e Focos das Perturbações Noturnas</h4>
        <span className={styles.subtitle}>A Reitoria de Ars (1824–1859)</span>
      </div>

      <div className={styles.grid}>
        {pontos.map((ponto, index) => (
          <div key={index} className={styles.ponto}>
            <div className={styles.pontoHeader}>
              <span className={styles.badge}>{ponto.numero}</span>
              <div className={styles.pontoMeta}>
                <div className={styles.pontoTitulo}>{ponto.titulo}</div>
                <div className={styles.pontoLocal}>{ponto.local}</div>
              </div>
            </div>
            <p className={styles.pontoDesc}>{ponto.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}