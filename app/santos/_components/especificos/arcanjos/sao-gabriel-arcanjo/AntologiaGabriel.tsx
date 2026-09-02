'use client';

import { ReactNode, useState, useMemo, createContext, useContext } from 'react';
import styles from '@/app/santos/_styles/especificos/arcanjos/sao-gabriel-arcanjo/antologia.module.css';

type AntologiaContextType = {
  busca: string;
  fraseCombina: (texto: string) => boolean;
};

const AntologiaContext = createContext<AntologiaContextType | null>(null);

export function useAntologiaGabriel() {
  const ctx = useContext(AntologiaContext);
  if (!ctx) throw new Error('Componente deve estar dentro de <AntologiaGabriel>');
  return ctx;
}

function normalizar(s: string): string {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

type Props = {
  children: ReactNode;
};

export default function AntologiaGabriel({ children }: Props) {
  const [busca] = useState('');
  const buscaNorm = useMemo(() => normalizar(busca.trim()), [busca]);

  const fraseCombina = (texto: string) => {
    if (!buscaNorm) return true;
    return normalizar(texto).includes(buscaNorm);
  };

  return (
    <AntologiaContext.Provider value={{ busca: buscaNorm, fraseCombina }}>
      <div className={styles.antologia}>
        <main className={styles.corpo}>{children}</main>
      </div>
    </AntologiaContext.Provider>
  );
}