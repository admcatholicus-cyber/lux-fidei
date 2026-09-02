'use client';

import { useState } from 'react';
import styles from '../../santos.module.css';
import { ICONE_CATEGORIA, CATEGORIAS_DESTAQUE } from '../../_lib/categorias';
import CategoriaModal from './CategoriaModal';
import type { Categoria } from '../../_types/santo';

interface Props {
  categorias: Categoria[];
  contagem: Record<string, number>;
  totalGeral: number;
  ativa: Categoria | null;
  onChange: (cat: Categoria | null) => void;
}

export default function CategoriaChips({
  categorias,
  contagem,
  totalGeral,
  ativa,
  onChange,
}: Props) {
  const [modalAberto, setModalAberto] = useState(false);

  // Categorias em destaque (as principais que aparecem inline)
  const destaques = CATEGORIAS_DESTAQUE.filter(
    (cat) => categorias.includes(cat) && (contagem[cat] ?? 0) > 0
  );

  // Se a categoria ativa não está nas destaques, mostra ela também
  const ativaFora = ativa && !destaques.includes(ativa);

  return (
    <>
      <div className={styles.filtrosContainer}>
        <div className={styles.filtrosScroll}>
          {/* Chip "Todos" */}
          <button
            type="button"
            className={`${styles.chip} ${!ativa ? styles.chipAtivo : ''}`}
            onClick={() => onChange(null)}
          >
            <span className={styles.chipIcone}>✦</span>
            Todos
            <span className={styles.chipCount}>{totalGeral}</span>
          </button>

          {/* Chips principais */}
          {destaques.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`${styles.chip} ${ativa === cat ? styles.chipAtivo : ''}`}
              onClick={() => onChange(ativa === cat ? null : cat)}
            >
              {ICONE_CATEGORIA[cat] && (
                <span className={styles.chipIcone}>{ICONE_CATEGORIA[cat]}</span>
              )}
              {cat}
              <span className={styles.chipCount}>{contagem[cat]}</span>
            </button>
          ))}

          {/* Se a ativa não está nos destaques, mostra ela */}
          {ativaFora && (
            <button
              type="button"
              className={`${styles.chip} ${styles.chipAtivo}`}
              onClick={() => onChange(null)}
            >
              {ICONE_CATEGORIA[ativa] && (
                <span className={styles.chipIcone}>{ICONE_CATEGORIA[ativa]}</span>
              )}
              {ativa}
              <span className={styles.chipCount}>{contagem[ativa]}</span>
            </button>
          )}

          {/* Botão "Outros..." */}
          <button
            type="button"
            className={`${styles.chip} ${styles.chipOutros}`}
            onClick={() => setModalAberto(true)}
          >
            <span className={styles.chipIcone}>⋯</span>
            Outros
          </button>
        </div>
      </div>

      <CategoriaModal
        aberto={modalAberto}
        onFechar={() => setModalAberto(false)}
        categorias={categorias}
        contagem={contagem}
        ativa={ativa}
        onSelecionar={onChange}
      />
    </>
  );
}