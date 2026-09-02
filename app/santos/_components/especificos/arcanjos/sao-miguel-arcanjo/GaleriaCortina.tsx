'use client';

import { useState, useRef, useEffect } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-miguel-arcanjo/interativos.module.css';

type Obra = {
  imagem: string;
  titulo: string;
  atribuicao: string;
  legenda: string;
};

type Props = {
  titulo: string;
  intro?: string;
  obras: Obra[];
};

/** Menor caminho no anel: ex. com 6 itens, de 0 para 5 = -1 (esquerda), não +5 */
function offsetCircular(i: number, ativo: number, total: number) {
  if (total <= 0) return 0;
  let d = i - ativo;
  const half = Math.floor(total / 2);
  if (d > half) d -= total;
  if (d < -half) d += total;
  return d;
}

export default function GaleriaCortina({ titulo, intro, obras }: Props) {
  const [ativo, setAtivo] = useState(0);
  const [visivel, setVisivel] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const total = obras.length;
  const obraAtiva = total > 0 ? obras[ativo] : null;

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisivel(true),
      { threshold: 0.15 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const irAnterior = () => {
    if (total === 0) return;
    setAtivo((prev) => (prev - 1 + total) % total);
  };

  const irProxima = () => {
    if (total === 0) return;
    setAtivo((prev) => (prev + 1) % total);
  };

  const estiloPainel = (i: number): React.CSSProperties => {
    const d = offsetCircular(i, ativo, total);

    if (d === 0) {
      return {
        zIndex: total + 2,
        transform: 'translateX(0) scale(1)',
        opacity: 1,
      };
    }

    const abs = Math.abs(d);
    const lado = d < 0 ? -1 : 1;

    return {
      zIndex: total - abs,
      transform: `translateX(${lado * abs * 15}%) scale(${Math.max(
        0.75,
        0.92 - abs * 0.05
      )}) rotateY(${lado * 8}deg)`,
      opacity: Math.max(0.25, 0.55 - abs * 0.12),
    };
  };

  return (
    <div
      ref={ref}
      className={`${styles.cortinaContainer} ${
        visivel ? styles.cortinaVisivel : ''
      }`}
    >
      <div className={styles.cortinaPalco}>
        {obras.map((obra, i) => (
          <div
            key={i}
            className={`${styles.cortinaPainel} ${
              ativo === i ? styles.cortinaPainelAtivo : ''
            }`}
            style={estiloPainel(i)}
            onClick={() => setAtivo(i)}
          >
            <div
              className={styles.cortinaImagem}
              style={{ backgroundImage: `url(${obra.imagem})` }}
            />
            <div className={styles.cortinaVeu} />
          </div>
        ))}
      </div>

      <div className={styles.cortinaControles}>
        <button
          type="button"
          className={styles.cortinaBotao}
          onClick={irAnterior}
          aria-label="Obra anterior"
        >
          ← Anterior
        </button>

        <div className={styles.cortinaIndicadores}>
          {obras.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.cortinaIndicador} ${
                ativo === i ? styles.cortinaIndicadorAtivo : ''
              }`}
              onClick={() => setAtivo(i)}
              aria-label={`Obra ${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className={styles.cortinaBotao}
          onClick={irProxima}
          aria-label="Próxima obra"
        >
          Próxima →
        </button>
      </div>

      {obraAtiva && (
        <div className={styles.cortinaInfoAbaixo}>
          <div className={styles.cortinaAtribuicao}>
            {obraAtiva.atribuicao}
          </div>
          <div className={styles.cortinaTituloObra}>{obraAtiva.titulo}</div>
          <div className={styles.cortinaLegenda}>{obraAtiva.legenda}</div>
        </div>
      )}
    </div>
  );
}