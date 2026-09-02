'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-miguel-arcanjo/card-peregrinacao.module.css';

type FatoCurioso = {
  numero: string;
  label: string;
};

type Props = {
  imagem: string;
  numero: string; // "I", "II", "III"...
  nome: string;
  localizacao: string;
  fundacao: string;
  descricao: ReactNode;
  fatos?: FatoCurioso[];
  variante?: 'claro' | 'escuro';
};

export default function CardPeregrinacao({
  imagem,
  numero,
  nome,
  localizacao,
  fundacao,
  descricao,
  fatos = [],
  variante = 'claro',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisivel(true),
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.card} ${styles[variante]} ${visivel ? styles.visivel : ''}`}
    >
      <div
        className={styles.imagemArea}
        style={{ backgroundImage: `url(${imagem})` }}
      >
        <div className={styles.imagemOverlay}></div>
        <div className={styles.numero}>{numero}</div>
      </div>

      <div className={styles.conteudo}>
        <div className={styles.suprat}>◆ Peregrinação Virtual</div>
        <h3 className={styles.nome}>{nome}</h3>
        <div className={styles.localizacao}>{localizacao}</div>

        <div className={styles.divisor}>
          <span className={styles.divisorLinha}></span>
          <span className={styles.divisorEstrela}>✦</span>
          <span className={styles.divisorLinha}></span>
        </div>

        <div className={styles.fundacaoBox}>
          <span className={styles.fundacaoLabel}>Fundação</span>
          <span className={styles.fundacaoValor}>{fundacao}</span>
        </div>

        <div className={styles.descricao}>{descricao}</div>

        {fatos.length > 0 && (
          <div className={styles.fatos}>
            {fatos.map((f, i) => (
              <div key={i} className={styles.fatoItem}>
                <div className={styles.fatoNumero}>{f.numero}</div>
                <div className={styles.fatoLabel}>{f.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}