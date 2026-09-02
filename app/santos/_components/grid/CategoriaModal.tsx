'use client';

import { useEffect } from 'react';
import styles from '../../santos.module.css';
import { ICONE_CATEGORIA, ordenarCategorias } from '../../_lib/categorias';
import type { Categoria } from '../../_types/santo';

interface Props {
  aberto: boolean;
  onFechar: () => void;
  categorias: Categoria[];
  contagem: Record<string, number>;
  ativa: Categoria | null;
  onSelecionar: (cat: Categoria | null) => void;
}

export default function CategoriaModal({
  aberto,
  onFechar,
  categorias,
  contagem,
  ativa,
  onSelecionar,
}: Props) {
  const ordenadas = ordenarCategorias(categorias);

  // Fechar com ESC
  useEffect(() => {
    if (!aberto) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onFechar();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [aberto, onFechar]);

  // Travar scroll do body quando aberto
  useEffect(() => {
    if (aberto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [aberto]);

  if (!aberto) return null;

  const handleClick = (cat: Categoria) => {
    onSelecionar(ativa === cat ? null : cat);
    onFechar();
  };

  return (
    <div
      className={styles.catModalOverlay}
      onClick={(e) => e.target === e.currentTarget && onFechar()}
    >
      <div className={styles.catModalBox}>
        <div className={styles.catModalHeader}>
          <h3 className={styles.catModalTitulo}>Todas as Categorias</h3>
          <button
            type="button"
            className={styles.catModalClose}
            onClick={onFechar}
            aria-label="Fechar"
          >
            ×
          </button>
        </div>

        <div className={styles.catModalConteudo}>
          <button
            type="button"
            className={`${styles.catModalItem} ${
              !ativa ? styles.catModalItemAtivo : ''
            }`}
            onClick={() => {
              onSelecionar(null);
              onFechar();
            }}
          >
            <span className={styles.catModalIcone}>✦</span>
            <span className={styles.catModalNome}>Todos</span>
            <span className={styles.catModalCount}>
              {Object.values(contagem).reduce((a, b) => a + b, 0)}
            </span>
          </button>

          {ordenadas.map((cat) => {
            const count = contagem[cat] ?? 0;
            if (count === 0) return null;
            return (
              <button
                key={cat}
                type="button"
                className={`${styles.catModalItem} ${
                  ativa === cat ? styles.catModalItemAtivo : ''
                }`}
                onClick={() => handleClick(cat)}
              >
                {ICONE_CATEGORIA[cat] && (
                  <span className={styles.catModalIcone}>
                    {ICONE_CATEGORIA[cat]}
                  </span>
                )}
                <span className={styles.catModalNome}>{cat}</span>
                <span className={styles.catModalCount}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}