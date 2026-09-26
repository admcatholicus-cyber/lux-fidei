// estudos/concilios/calcedonia/tomo/page.tsx
import type { Metadata } from 'next';
import {
  introTomo,
  capitulosTomo,
  trechosChaveLatim,
  recepcaoSessao2,
} from './_data';
import styles from '../calcedonia.module.css';

export const metadata: Metadata = {
  title: 'Tomo de Leão | Calcedônia | Lux Fidei',
  description:
    'Texto integral latim e português do Tomo de Leão a Flaviano (Epistula 28, 449), com tradução capítulo a capítulo e análise teológica.',
};

export default function TomoPage() {
  return (
    <section className={styles.secao}>
      <h1 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>✒️</span>
        {introTomo.titulo}
      </h1>

      <p className={styles.secaoTexto}>{introTomo.contexto}</p>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CAPÍTULOS: LATIM + PORTUGUÊS                                 */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo}>
        Texto original (latim) e tradução (português)
      </h2>

      {capitulosTomo.map((cap) => (
        <div
          key={cap.numero}
          className={styles.blocoDefinicao}
          style={{ marginBottom: '1.5rem' }}
        >
          <h3 style={{ marginBottom: '0.75rem', color: 'var(--calc-gold)' }}>
            Capítulo {cap.numero}: {cap.titulo}
          </h3>

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
                {cap.latim}
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
                {cap.pt}
              </p>
            </div>
          </div>

          <div
            style={{
              background: 'var(--calc-bg-highlight)',
              borderLeft: '3px solid var(--calc-gold)',
              borderRadius: '0 8px 8px 0',
              padding: '0.75rem 1rem',
              fontSize: '0.88rem',
              lineHeight: 1.6,
            }}
          >
            <strong>Nota:</strong> {cap.notas}
          </div>
        </div>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* TRECHOS-CHAVE EM LATIM                                       */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo} style={{ marginTop: '2.5rem' }}>
        Trechos-chave em latim
      </h2>

      {trechosChaveLatim.map((trecho, i) => (
        <div
          key={i}
          className={styles.blocoDefinicao}
          style={{ marginBottom: '1.25rem' }}
        >
          <p
            lang="la"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: '1rem',
              lineHeight: 1.8,
              fontStyle: 'italic',
              marginBottom: '0.75rem',
            }}
          >
            {trecho.trecho}
          </p>
          <p style={{ marginBottom: '0.5rem' }}>
            <strong>Tradução:</strong> {trecho.traducao}
          </p>
          <p style={{ marginBottom: 0, fontSize: '0.92rem' }}>
            <strong>Significado:</strong> {trecho.significado}
          </p>
        </div>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* RECEPÇÃO EM CALCEDÔNIA                                       */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo} style={{ marginTop: '2.5rem' }}>
        {recepcaoSessao2.titulo}
      </h2>

      <div className={styles.destaque}>
        <p>{recepcaoSessao2.descricao}</p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* FONTES                                                        */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div
        style={{
          fontSize: '0.82rem',
          color: 'var(--calc-text-faint)',
          fontStyle: 'italic',
          marginTop: '2rem',
          borderTop: '1px dashed var(--calc-border-dashed)',
          paddingTop: '0.75rem',
          lineHeight: 1.6,
        }}
      >
        Fonte do texto latino: la.wikisource.org/wiki/Tomus_ad_Flavianum (acesso em 12/09/2026) · Conferido com PL 54 (Migne) · {introTomo.fonte}
      </div>
    </section>
  );
}
