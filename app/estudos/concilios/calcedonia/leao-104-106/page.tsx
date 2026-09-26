// estudos/concilios/calcedonia/leao-104-106/page.tsx
import type { Metadata } from 'next';
import {
  introLeao104_106,
  epistulae,
  consequenciasRejeicao,
} from './_data';
import styles from '../calcedonia.module.css';

export const metadata: Metadata = {
  title: 'Leão rejeita o Cânon 28 (Epp. 104–106) | Calcedônia | Lux Fidei',
  description:
    'As três cartas de Leão Magno (a Marciano, Pulquéria e Anatólio) anulando formalmente o Cânon 28 de Calcedônia, com trechos latinos decisivos.',
};

export default function Leao104_106Page() {
  return (
    <section className={styles.secao}>
      <h1 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>📮</span>
        {introLeao104_106.titulo}
      </h1>

      <p className={styles.secaoTexto}>{introLeao104_106.contexto}</p>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CADA EPÍSTOLA                                                 */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {epistulae.map((ep) => (
        <div
          key={ep.numero}
          className={styles.blocoDefinicao}
          style={{ marginBottom: '2rem' }}
        >
          <h2
            style={{
              fontSize: '1.15rem',
              color: 'var(--calc-gold)',
              marginBottom: '0.25rem',
            }}
          >
            Epistula {ep.numero}: a {ep.destinatario}
          </h2>
          <p
            style={{
              fontSize: '0.88rem',
              color: 'var(--calc-text-faint)',
              marginBottom: '0.75rem',
            }}
          >
            {ep.data}
          </p>

          <p style={{ marginBottom: '1rem', lineHeight: 1.75 }}>{ep.resumo}</p>

          {/* Grid latim + PT */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.25rem',
              marginBottom: '0.75rem',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--calc-gold)',
                  marginBottom: '0.5rem',
                }}
              >
                LATIM
              </div>
              <p
                lang="la"
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: '0.95rem',
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                }}
              >
                {ep.trechoLatim}
              </p>
            </div>
            <div>
              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--calc-purple)',
                  marginBottom: '0.5rem',
                }}
              >
                PORTUGUÊS (Tradução do site Lux Fidei)
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>
                {ep.trechoPT}
              </p>
            </div>
          </div>

          {/* Notas */}
          {ep.notas.map((nota, i) => (
            <div
              key={i}
              style={{
                background: nota.startsWith('A VERIFICAR')
                  ? 'rgba(139, 101, 8, 0.08)'
                  : 'var(--calc-bg-highlight)',
                borderLeft: `3px solid ${nota.startsWith('A VERIFICAR') ? 'var(--calc-gold)' : 'var(--calc-purple)'}`,
                borderRadius: '0 8px 8px 0',
                padding: '0.65rem 0.9rem',
                fontSize: '0.85rem',
                lineHeight: 1.5,
                marginBottom: '0.5rem',
              }}
            >
              {nota}
            </div>
          ))}
        </div>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CONSEQUÊNCIAS                                                */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo} style={{ marginTop: '2.5rem' }}>
        {consequenciasRejeicao.titulo}
      </h2>

      <ul className={styles.resultadosLista}>
        {consequenciasRejeicao.itens.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
