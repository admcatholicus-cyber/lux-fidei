'use client';

import { useState, type ReactNode } from 'react';
import styles from '../../../../_styles/especificos/apostolos/sao-judas-tadeu/iconografia/galeria.module.css';

interface CapituloNav {
  id: string;
  icone: string;
  label: string;
}

interface GaleriaIconografiaProps {
  introducao?: ReactNode;
  capitulos: CapituloNav[];
  children: ReactNode;
}

export function GaleriaIconografia({ introducao, capitulos, children }: GaleriaIconografiaProps) {
  const [navAberta, setNavAberta] = useState(false);

  const irPara = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setNavAberta(false);
  };

  return (
    <div className={styles.galeria}>
      {introducao && <div className={styles.introducao}>{introducao}</div>}

      <nav className={styles.nav}>
        <button
          className={styles.navToggle}
          onClick={() => setNavAberta(!navAberta)}
          aria-expanded={navAberta}
        >
          <span className={styles.navToggleIcone}>☩</span>
          <span>Índice Iconográfico</span>
          <span className={`${styles.navSeta} ${navAberta ? styles.navSetaAberta : ''}`}>▾</span>
        </button>
        <ul className={`${styles.navLista} ${navAberta ? styles.navListaAberta : ''}`}>
          {capitulos.map((cap) => (
            <li key={cap.id}>
              <button className={styles.navItem} onClick={() => irPara(cap.id)}>
                <span className={styles.navIcone}>{cap.icone}</span>
                <span>{cap.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.conteudo}>{children}</div>
    </div>
  );
}

interface SecaoIconografiaProps {
  id: string;
  icone: string;
  supratitulo?: string;
  titulo: string;
  subtitulo?: string;
  children: ReactNode;
}

export function SecaoIconografia({ id, icone, supratitulo, titulo, subtitulo, children }: SecaoIconografiaProps) {
  return (
    <section id={id} className={styles.secao}>
      <header className={styles.secaoHeader}>
        <span className={styles.secaoIcone}>{icone}</span>
        {supratitulo && <span className={styles.secaoSupra}>{supratitulo}</span>}
        <h2 className={styles.secaoTitulo}>{titulo}</h2>
        {subtitulo && <p className={styles.secaoSubtitulo}>{subtitulo}</p>}
      </header>
      <div className={styles.secaoCorpo}>{children}</div>
    </section>
  );
}

interface SubsecaoIconografiaProps {
  titulo: string;
  children: ReactNode;
}

export function SubsecaoIconografia({ titulo, children }: SubsecaoIconografiaProps) {
  return (
    <div className={styles.subsecao}>
      <h3 className={styles.subsecaoTitulo}>{titulo}</h3>
      <div className={styles.subsecaoCorpo}>{children}</div>
    </div>
  );
}