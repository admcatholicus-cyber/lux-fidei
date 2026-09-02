'use client';

import { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import styles from '../../_styles/biografia.module.css';

type CapituloItem = {
  id: string;
  label: string;
};

type AntologiaContextType = {
  busca: string;
  registrarFrase: (texto: string) => void;
  fraseCombina: (texto: string) => boolean;
};

const AntologiaContext = createContext<AntologiaContextType | null>(null);

export function useAntologia() {
  const ctx = useContext(AntologiaContext);
  if (!ctx) throw new Error('Componente deve estar dentro de <Antologia>');
  return ctx;
}

type AntologiaProps = {
  capitulos: CapituloItem[];
  introducao?: ReactNode;
  children: ReactNode;
};

function normalizar(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export default function Antologia({ capitulos, introducao, children }: AntologiaProps) {
  const [busca, setBusca] = useState('');

  const buscaNormalizada = useMemo(() => normalizar(busca.trim()), [busca]);

  const fraseCombina = (texto: string): boolean => {
    if (!buscaNormalizada) return true;
    return normalizar(texto).includes(buscaNormalizada);
  };

  const ctxValue: AntologiaContextType = {
    busca: buscaNormalizada,
    registrarFrase: () => {},
    fraseCombina,
  };

  return (
    <AntologiaContext.Provider value={ctxValue}>
      {introducao && (
        <div className={styles.antIntro}>
          <div className={styles.antIntroCard}>{introducao}</div>
        </div>
      )}

      <div className={styles.antLegenda}>
        <span className={styles.antLegendaItem}>
          <span className={`${styles.antLegendaBolinha} ${styles.antLegendaBolinhaOriginal}`} />
          <span>Original em francês documentado</span>
        </span>
        <span className={styles.antLegendaItem}>
          <span className={`${styles.antLegendaBolinha} ${styles.antLegendaBolinhaFonte}`} />
          <span>Fonte conhecida (sem original literal)</span>
        </span>
        <span className={styles.antLegendaItem}>
          <span className={`${styles.antLegendaBolinha} ${styles.antLegendaBolinhaNada}`} />
          <span>Paráfrase do estilo</span>
        </span>
      </div>

      <div className={styles.antBuscaWrap}>
        <input
          type="text"
          className={styles.antBusca}
          placeholder="Buscar uma palavra ou expressão..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <p className={styles.antBuscaInfo}>
          {busca.trim() ? `Filtrando por "${busca.trim()}"` : ''}
        </p>
      </div>

      <nav className={styles.antCapitulosNav}>
        <ul className={styles.antCapitulosLista}>
          {capitulos.map((cap) => (
            <li key={cap.id}>
              <a href={`#${cap.id}`}>{cap.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <main className={styles.antMain}>{children}</main>
    </AntologiaContext.Provider>
  );
}