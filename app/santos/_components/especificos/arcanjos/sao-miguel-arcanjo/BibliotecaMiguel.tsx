'use client';

import { useState, ReactNode } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-miguel-arcanjo/biblioteca.module.css';

type Capitulo = {
  id: string;
  icone: string;
  label: string;
};

type BibliotecaMiguelProps = {
  introducao?: ReactNode;
  capitulos: Capitulo[];
  children: ReactNode;
};

export function BibliotecaMiguel({ introducao, capitulos, children }: BibliotecaMiguelProps) {
  const [ativo, setAtivo] = useState<string>(capitulos[0]?.id ?? '');

  return (
    <div className={styles.biblioteca}>
      {introducao && <div className={styles.introducao}>{introducao}</div>}

      <nav className={styles.tabs}>
        {capitulos.map((cap) => (
          <button
            key={cap.id}
            type="button"
            className={`${styles.tab} ${ativo === cap.id ? styles.tabAtivo : ''}`}
            onClick={() => setAtivo(cap.id)}
          >
            <span className={styles.tabIcone}>{cap.icone}</span>
            <span className={styles.tabLabel}>{cap.label}</span>
          </button>
        ))}
      </nav>

      <div className={styles.conteudo}>
        {/* Renderiza somente o capítulo ativo — os filhos são CapMiguel com id */}
        {Array.isArray(children)
          ? children.filter((child: any) => child?.props?.id === ativo)
          : children}
      </div>
    </div>
  );
}

type CapMiguelProps = {
  id: string;
  icone?: string;
  suprat?: string;
  titulo: string;
  contagem?: string;
  children: ReactNode;
};

export function CapMiguel({ icone, suprat, titulo, contagem, children }: CapMiguelProps) {
  return (
    <section className={styles.capitulo}>
      <header className={styles.capituloHeader}>
        {suprat && <div className={styles.capituloSuprat}>{suprat}</div>}
        <h2 className={styles.capituloTitulo}>
          {icone && <span className={styles.capituloIcone}>{icone}</span>}
          {titulo}
        </h2>
        {contagem && <div className={styles.capituloContagem}>{contagem}</div>}
      </header>

      <div className={styles.capituloCorpo}>{children}</div>
    </section>
  );
}

type SubsecaoMiguelProps = {
  titulo: string;
  children: ReactNode;
};

export function SubsecaoMiguel({ titulo, children }: SubsecaoMiguelProps) {
  return (
    <div className={styles.subsecao}>
      <h3 className={styles.subsecaoTitulo}>{titulo}</h3>
      <div className={styles.subsecaoCorpo}>{children}</div>
    </div>
  );
}