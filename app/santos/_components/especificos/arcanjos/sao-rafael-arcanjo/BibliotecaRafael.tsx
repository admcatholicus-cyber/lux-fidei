'use client';

import { ReactNode } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-rafael-arcanjo/biblioteca.module.css';

// ============================================================
// BibliotecaRafael — wrapper principal da antologia
// ============================================================
type Capitulo = {
  id: string;
  icone: string;
  label: string;
};

type BibliotecaRafaelProps = {
  introducao?: ReactNode;
  capitulos: Capitulo[];
  children: ReactNode;
};

export function BibliotecaRafael({
  introducao,
  capitulos,
  children,
}: BibliotecaRafaelProps) {
  return (
    <>
      {introducao && (
        <div className={styles.bibliotecaRafael}>
          <div className={styles.bibliotecaIntro}>{introducao}</div>
        </div>
      )}

      <nav className={styles.bibliotecaNav}>
        <ul className={styles.bibliotecaNavLista}>
          {capitulos.map((cap) => (
            <li key={cap.id}>
              <a href={`#${cap.id}`}>
                <span className={styles.bibliotecaNavIcone}>{cap.icone}</span>
                {cap.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.bibliotecaRafael}>{children}</div>
    </>
  );
}


// ============================================================
// CapRafael — capítulo temático dentro da biblioteca
// ============================================================
type CapRafaelProps = {
  id: string;
  icone: string;
  suprat?: string;
  titulo: string;
  contagem?: string;
  children: ReactNode;
};

export function CapRafael({
  id,
  icone,
  suprat,
  titulo,
  contagem,
  children,
}: CapRafaelProps) {
  return (
    <section id={id} className={styles.capRafael}>
      <header className={styles.capRafaelHeader}>
        <div className={styles.capRafaelIcone}>{icone}</div>
        <div className={styles.capRafaelTituloWrap}>
          {suprat && <p className={styles.capRafaelSuprat}>{suprat}</p>}
          <h2 className={styles.capRafaelTitulo}>{titulo}</h2>
        </div>
        {contagem && (
          <span className={styles.capRafaelContagem}>{contagem}</span>
        )}
      </header>
      {children}
    </section>
  );
}


// ============================================================
// SubsecaoRafael — agrupador interno dentro de um CapRafael
// ============================================================
type SubsecaoRafaelProps = {
  titulo: string;
  children: ReactNode;
};

export function SubsecaoRafael({ titulo, children }: SubsecaoRafaelProps) {
  return (
    <div className={styles.subsecaoRafael}>
      <div className={styles.subsecaoRafaelHeader}>
        <span className={styles.subsecaoRafaelOrn}>✦ ✦ ✦</span>
        <h3 className={styles.subsecaoRafaelTitulo}>{titulo}</h3>
        <span className={styles.subsecaoRafaelLinha}></span>
      </div>
      {children}
    </div>
  );
}