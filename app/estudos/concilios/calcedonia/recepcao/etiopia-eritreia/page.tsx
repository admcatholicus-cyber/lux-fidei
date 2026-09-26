// estudos/concilios/calcedonia/recepcao/etiopia-eritreia/page.tsx
import type { Metadata } from 'next';
import { etiopiaEritreia } from './_data';
import styles from '../../calcedonia.module.css';

export const metadata: Metadata = {
  title: 'Recepção: Etiópia e Eritreia | Calcedônia | Lux Fidei',
  description:
    'A recepção do Concílio de Calcedônia na Etiópia e Eritreia — Frumentius, 1959/1993, tradições etíope e eritreia.',
};

export default function EtiopiaEritreiaPage() {
  return (
    <section className={styles.secao}>
      <h1 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>🌟</span>
        {etiopiaEritreia.titulo}
      </h1>

      <h2 className={styles.secaoSubtitulo}>{etiopiaEritreia.subtitulo}</h2>

      <p className={styles.secaoTexto}>{etiopiaEritreia.intro}</p>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SEÇÕES: 451 → 451-600 → HOJE → LITURGIA/LÍNGUA → DIÁLOGO    */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {etiopiaEritreia.secoes.map((secao, idx) => (
        <div
          key={idx}
          className={styles.blocoDefinicao}
          style={{ marginBottom: '1.5rem' }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.75rem',
              marginBottom: '0.75rem',
            }}
          >
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                color: 'var(--calc-gold)',
                minWidth: '2.5rem',
              }}
            >
              {idx + 1}
            </span>
            <h3
              style={{
                margin: 0,
                fontSize: '1.1rem',
                color: 'var(--calc-purple)',
              }}
            >
              {secao.titulo}
            </h3>
          </div>

          <p style={{ marginBottom: 0, lineHeight: 1.75 }}>
            {secao.conteudo}
          </p>
        </div>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* FONTES                                                        */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <hr className={styles.divisor} />

      <h3 className={styles.secaoSubtitulo}>Fontes e referências</h3>
      <ul className={styles.resultadosLista}>
        {etiopiaEritreia.fontes.map((fonte, i) => (
          <li key={i}>{fonte}</li>
        ))}
      </ul>
    </section>
  );
}
