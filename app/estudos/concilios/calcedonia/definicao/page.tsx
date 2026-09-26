// estudos/concilios/calcedonia/definicao/page.tsx
import type { Metadata } from 'next';
import {
  introDefinicao,
  gregoDefinicao,
  ptDefinicao,
  notasVocabulario,
  clausulaPenal,
  fontesDefinicao,
  referenciaGrego,
} from './_data';
import { Nota } from '../_components';
import styles from '../calcedonia.module.css';

export const metadata: Metadata = {
  title: 'Definição de Calcedônia | Calcedônia | Lux Fidei',
  description:
    'Texto integral grego e português da Definição de Calcedônia (451), com 13 notas de vocabulário teológico e análise das cláusulas-chave.',
};

export default function DefinicaoPage() {
  return (
    <section className={styles.secao}>
      <h1 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>📖</span>
        {introDefinicao.titulo}
      </h1>

      <p className={styles.secaoTexto}>{introDefinicao.contexto}</p>

      <div className={styles.destaque}>
        Referência dogmática: {introDefinicao.dh}
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* TEXTO BILÍNGUE: GREGO + PORTUGUÊS                            */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo}>
        Texto original (grego) e tradução (português)
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
          margin: '1.5rem 0',
          padding: '1.5rem',
          background: 'var(--calc-bg-card)',
          border: '1px solid var(--calc-gold-border)',
          borderRadius: '12px',
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
              marginBottom: '0.75rem',
            }}
          >
            ΕΛΛΗΝΙΚΆ (Grego original)
          </div>
          <div
            lang="grc"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: '1.02rem',
              lineHeight: 1.8,
              color: 'var(--calc-text)',
            }}
          >
            {gregoDefinicao.split('\n\n').map((paragrafo, i) => (
              <p key={i} style={{ marginBottom: '0.85rem' }}>
                {paragrafo}
              </p>
            ))}
          </div>
        </div>
        <div>
          <div
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--calc-purple)',
              marginBottom: '0.75rem',
            }}
          >
            PORTUGUÊS (Tradução do site Lux Fidei)
          </div>
          <div
            style={{
              fontSize: '1.02rem',
              lineHeight: 1.8,
              color: 'var(--calc-text)',
            }}
          >
            {ptDefinicao.split('\n\n').map((paragrafo, i) => (
              <p key={i} style={{ marginBottom: '0.85rem' }}>
                {paragrafo}
              </p>
            ))}
          </div>
          <div
            style={{
              fontSize: '0.75rem',
              color: 'var(--calc-text-faint)',
              fontStyle: 'italic',
              marginTop: '0.75rem',
            }}
          >
            (tradução do site Lux Fidei)
          </div>
        </div>
      </div>

      <div
        style={{
          fontSize: '0.75rem',
          color: 'var(--calc-text-faint)',
          borderTop: '1px dashed var(--calc-border-dashed)',
          paddingTop: '0.5rem',
          marginTop: '0.75rem',
          lineHeight: 1.5,
        }}
      >
        Fonte do texto grego: patristica.net/451_def (acesso em 12/09/2026) · Conferido com: ccel.org/ccel/schaff/creeds2 (acesso em 12/09/2026)
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 13 NOTAS DE VOCABULÁRIO                                      */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo} style={{ marginTop: '2.5rem' }}>
        Notas de vocabulário teológico (13 termos)
      </h2>

      {notasVocabulario.map((nota, i) => (
        <div
          key={nota.lema}
          className={styles.blocoDefinicao}
          style={{ marginBottom: '1.25rem' }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.75rem',
              marginBottom: '0.5rem',
            }}
          >
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                color: 'var(--calc-gold)',
              }}
            >
              [{i + 1}]
            </span>
            <strong style={{ color: 'var(--calc-purple)' }}>
              {nota.lema}
            </strong>
            <span lang="grc" style={{ fontStyle: 'italic' }}>
              {nota.grego}
            </span>
            <span
              style={{
                fontSize: '0.85rem',
                color: 'var(--calc-text-faint)',
              }}
            >
              ({nota.transliteracao})
            </span>
          </div>
          <p style={{ marginBottom: '0.5rem' }}>
            <strong>Tradução:</strong> {nota.traducao}
          </p>
          <p style={{ marginBottom: '0.5rem' }}>
            <strong>Motivo:</strong> {nota.motivo}
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Refuta:</strong> {nota.contraQuem}
          </p>
        </div>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CLÁUSULA PENAL                                               */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo} style={{ marginTop: '2.5rem' }}>
        {clausulaPenal.titulo}
      </h2>

      <div className={styles.destaque}>
        <p style={{ marginBottom: '0.75rem' }}>{clausulaPenal.texto}</p>
        <p style={{ marginBottom: 0 }}>{clausulaPenal.significado}</p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* FONTES DA DEFINIÇÃO                                          */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo} style={{ marginTop: '2.5rem' }}>
        As 5 fontes citadas pela Definição
      </h2>

      {fontesDefinicao.map((fonte) => (
        <div
          key={fonte.nome}
          className={styles.blocoDefinicao}
          style={{ marginBottom: '1rem' }}
        >
          <strong>{fonte.nome}</strong>
          <p style={{ marginBottom: 0, marginTop: '0.5rem' }}>
            {fonte.contribuicao}
          </p>
        </div>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* NOTA SOBRE O TEXTO GREGO                                      */}
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
        {referenciaGrego}
      </div>
    </section>
  );
}
