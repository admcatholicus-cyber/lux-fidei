// C:\Users\kitten\Documents\lux-fidei\app\santos\_components\especificos\martires\santa-afra-de-augsburgo\CalendariosAfra.tsx

import React from 'react';
import styles from '../../../../_styles/especificos/martires/santa-afra-de-augsburgo/CalendariosAfra.module.css';

export interface EntradaCalendario {
  tradicao: string;
  data: string;
  forma: string;
  nota: React.ReactNode;
  acento?: 'romano' | 'evangelico' | 'ortodoxo' | 'sombra';
}

interface CalendariosAfraProps {
  entradas: EntradaCalendario[];
}

export function CalendariosAfra({ entradas }: CalendariosAfraProps) {
  return (
    <section className={styles.raiz}>
      <h2 className={styles.titulo}>Afra nos Calendários do Mundo</h2>
      <p className={styles.intro}>
        Quando uma mártir atravessa dezassete séculos, acaba por ser reclamada
        por mais de uma tradição. O 7 de agosto não pertence só a Augsburgo.
      </p>
      <div className={styles.grelha}>
        {entradas.map((ent, i) => (
          <div
            key={i}
            className={`${styles.entrada} ${ent.acento ? styles[ent.acento] : ''}`}
          >
            <div className={styles.entradaTopo}>
              <span className={styles.tradicao}>{ent.tradicao}</span>
              <span className={styles.data}>{ent.data}</span>
            </div>
            <span className={styles.forma}>{ent.forma}</span>
            <div className={styles.nota}>{ent.nota}</div>
          </div>
        ))}
      </div>
    </section>
  );
}