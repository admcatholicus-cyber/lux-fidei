// C:\Users\kitten\Documents\lux-fidei\app\santos\_components\especificos\martires\santa-afra-de-augsburgo\LinhaDoTempoAfra.tsx

'use client';

import React, { useState } from 'react';
import styles from '../../../../_styles/especificos/martires/santa-afra-de-augsburgo/LinhaDoTempoAfra.module.css';

export interface Estacao {
  ano: string;
  titulo: string;
  objeto: string;          // ícone / símbolo da era
  objetoDescricao: string; // legenda do objeto
  corpo: React.ReactNode;
  tipo?: 'martirio' | 'culto' | 'translacao' | 'construcao' | 'ruptura' | 'restauracao' | 'presente';
}

interface LinhaDoTempoAfraProps {
  estacoes: Estacao[];
}

export function LinhaDoTempoAfra({ estacoes }: LinhaDoTempoAfraProps) {
  const [ativa, setAtiva] = useState<number | null>(null);

  const toggle = (i: number) => setAtiva(prev => (prev === i ? null : i));

  return (
    <section className={styles.raiz}>
      <div className={styles.trilho}>
        {estacoes.map((est, i) => {
          const aberta = ativa === i;
          const tipoClasse = est.tipo ? styles[est.tipo] : '';

          return (
            <article
              key={i}
              className={`${styles.estacao} ${tipoClasse} ${aberta ? styles.aberta : ''}`}
            >
              {/* Eixo esquerdo */}
              <div className={styles.eixo}>
                <div className={styles.bolha}>
                  <span className={styles.objeto} title={est.objetoDescricao}>
                    {est.objeto}
                  </span>
                </div>
                {i < estacoes.length - 1 && <div className={styles.fio} />}
              </div>

              {/* Conteúdo direito */}
              <div className={styles.conteudo}>
                <button
                  className={styles.cabecalho}
                  onClick={() => toggle(i)}
                  aria-expanded={aberta}
                >
                  <span className={styles.ano}>{est.ano}</span>
                  <span className={styles.tituloEstacao}>{est.titulo}</span>
                  <span className={styles.seta} aria-hidden>
                    {aberta ? '▲' : '▼'}
                  </span>
                </button>

                <div className={`${styles.corpo} ${aberta ? styles.corpoAberto : styles.corpoFechado}`}>
                  <p className={styles.objetoLegenda}>
                    <em>{est.objetoDescricao}</em>
                  </p>
                  <div className={styles.texto}>{est.corpo}</div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}