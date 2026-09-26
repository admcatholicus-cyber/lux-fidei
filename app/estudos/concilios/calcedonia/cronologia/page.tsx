// estudos/concilios/calcedonia/cronologia/page.tsx
import type { Metadata } from 'next';
import { eventos } from './_cronologia';
import LinhaDoTempo from './_LinhaTempo';
import styles from '../calcedonia.module.css';

export const metadata: Metadata = {
  title: 'Cronologia (45+ eventos) | Calcedônia | Lux Fidei',
  description:
    'Linha do tempo cronológica do Concílio de Calcedônia e eventos relacionados: 45+ eventos atestados por fontes primárias e secundárias.',
};

export default function CronologiaPage() {
  return (
    <section className={styles.secao}>
      <h1 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>📅</span>
        Cronologia de Calcedônia
      </h1>

      <p className={styles.secaoTexto}>
        Esta linha do tempo reúne mais de 45 eventos atestados por fontes primárias e 
        secundárias, desde o Concílio de Niceia (325) até a condenação dos Tres Capítulos 
        em Constantinopla II (553). Clique em um evento para ver a fonte.
      </p>

      <div className={styles.destaque} style={{ textAlign: 'left', fontStyle: 'normal' }}>
        <strong>Navegação:</strong> Use os filtros acima para refinar a busca. 
        Eventos do Concílio (451) aparecem com marcadores púrpura. 
        Fontes estão indicadas em itálico ao clicar.
      </div>

      <LinhaDoTempo eventos={eventos} />

      <hr className={styles.divisor} />

      <h2 className={styles.secaoSubtitulo}>
        Índice cronológico
      </h2>

      <div className={styles.presidentesLista}>
        {eventos.map((ev, i) => (
          <div key={i} className={styles.presidenteItem}>
            <div className={styles.presidenteFase}>{ev.data}</div>
            <div className={styles.presidenteInfo}>
              <p>{ev.evento}</p>
              <p style={{ fontSize: '0.82rem', color: 'var(--calc-text-faint)', fontStyle: 'italic', marginTop: '0.25rem' }}>
                Fonte: {ev.fonte}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
