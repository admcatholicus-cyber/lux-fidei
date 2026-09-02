'use client';

import { useState } from 'react';
import styles from '../../../../../_styles/especificos/martires/santa-afra-de-augsburgo/frases/biblioteca.module.css';

/* ═══════ Tipos ═══════ */

interface CapituloNav {
  id: string;
  icone: string;
  label: string;
}

/* ═══════ Navegação lateral ═══════ */

function NavBiblioteca({
  capitulos,
  ativo,
  onNavegar,
}: {
  capitulos: CapituloNav[];
  ativo: string;
  onNavegar: (id: string) => void;
}) {
  return (
    <nav className={styles.nav} aria-label="Índice da biblioteca">
      <span className={styles.navTitulo}>Índice</span>
      <ul className={styles.navLista}>
        {capitulos.map((cap) => (
          <li key={cap.id}>
            <button
              className={`${styles.navItem} ${ativo === cap.id ? styles.navItemAtivo : ''}`}
              onClick={() => onNavegar(cap.id)}
            >
              <span className={styles.navIcone}>{cap.icone}</span>
              <span className={styles.navLabel}>{cap.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ═══════ Componente principal ═══════ */

export function BibliotecaAfra({
  introducao,
  capitulos,
  children,
}: {
  introducao?: React.ReactNode;
  capitulos: CapituloNav[];
  children: React.ReactNode;
}) {
  const [ativo, setAtivo] = useState(capitulos[0]?.id ?? '');

  const navegar = (id: string) => {
    setAtivo(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={styles.biblioteca}>
      {introducao && (
        <div className={styles.introducao}>
          <div className={styles.introducaoOrnamento}>❦</div>
          <div className={styles.introducaoTexto}>{introducao}</div>
          <div className={styles.introducaoOrnamento}>❦</div>
        </div>
      )}

      <div className={styles.corpo}>
        <NavBiblioteca capitulos={capitulos} ativo={ativo} onNavegar={navegar} />
        <div className={styles.conteudo}>{children}</div>
      </div>
    </div>
  );
}

/* ═══════ Capítulo ═══════ */

export function CapAfra({
  id,
  icone,
  supratitulo,
  titulo,
  contagem,
  children,
}: {
  id: string;
  icone: string;
  supratitulo?: string;
  titulo: string;
  contagem?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.capitulo} id={id}>
      <div className={styles.capCabecalho}>
        <span className={styles.capIcone}>{icone}</span>
        <div className={styles.capTitulos}>
          {supratitulo && <span className={styles.capSupra}>{supratitulo}</span>}
          <h2 className={styles.capTitulo}>{titulo}</h2>
          {contagem && <span className={styles.capContagem}>{contagem}</span>}
        </div>
      </div>
      <div className={styles.capCorpo}>{children}</div>
    </section>
  );
}

/* ═══════ Subseção dentro de capítulo ═══════ */

export function SubsecaoAfra({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.subsecao}>
      <h3 className={styles.subsecaoTitulo}>{titulo}</h3>
      <div className={styles.subsecaoCorpo}>{children}</div>
    </div>
  );
}