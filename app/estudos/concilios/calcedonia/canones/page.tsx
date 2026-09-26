// estudos/concilios/calcedonia/canones/page.tsx
import type { Metadata } from 'next';
import {
  notaIntrodutoria,
  canonesTrilingues,
  canon28Especial,
  analiseCanon28,
} from './_data';
import styles from '../calcedonia.module.css';

export const metadata: Metadata = {
  title: 'Os 28 Cânones | Calcedônia | Lux Fidei',
  description:
    'Todos os 28 cânones disciplinares do Concílio de Calcedônia (451) em trilíngue — grego, latim e português — com observações e análise do Cânon 28.',
};

export default function CanonesPage() {
  return (
    <section className={styles.secao}>
      <h1 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>⚖️</span>
        Os 28 Cânones Disciplinares de Calcedônia
      </h1>

      <p className={styles.secaoTexto}>{notaIntrodutoria}</p>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* LISTA DE CÂNONES                                             */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {canonesTrilingues.map((canon) => (
        <div
          key={canon.numero}
          className={styles.blocoDefinicao}
          style={{ marginBottom: '1.5rem' }}
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
                minWidth: '2.5rem',
              }}
            >
              CÂNON {canon.numero}
            </span>
            <h2
              style={{
                margin: 0,
                fontSize: '1.05rem',
                color: 'var(--calc-purple)',
              }}
            >
              {canon.titulo}
            </h2>
          </div>

          <div
            style={{
              fontSize: '0.82rem',
              color: 'var(--calc-text-muted)',
              marginBottom: '0.75rem',
            }}
          >
            <strong>Tema:</strong> {canon.tema}
          </div>

          {/* Grid trilíngue */}
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
                {canon.latim}
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
                {canon.pt}
              </p>
            </div>
          </div>

          {canon.observacao && (
            <div
              style={{
                background: 'var(--calc-bg-highlight)',
                borderLeft: '3px solid var(--calc-gold)',
                borderRadius: '0 8px 8px 0',
                padding: '0.65rem 0.9rem',
                fontSize: '0.88rem',
                lineHeight: 1.6,
              }}
            >
              <strong>Observação:</strong> {canon.observacao}
            </div>
          )}

          {/* Recepção */}
          {(canon.recepcaoDionysiana || canon.recepcaoHispana) && (
            <div
              style={{
                marginTop: '0.5rem',
                fontSize: '0.82rem',
                color: 'var(--calc-text-faint)',
                fontStyle: 'italic',
              }}
            >
              {canon.recepcaoDionysiana && <span>{canon.recepcaoDionysiana}</span>}
              {canon.recepcaoDionysiana && canon.recepcaoHispana && <span> · </span>}
              {canon.recepcaoHispana && <span>{canon.recepcaoHispana}</span>}
            </div>
          )}
        </div>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* DISCUÇÃO ESPECIAL: CÂNON 28                                  */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <hr className={styles.divisor} />

      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>⚠️</span>
        {canon28Especial.titulo}
      </h2>

      {canon28Especial.subsecoes.map((sub) => (
        <div
          key={sub.titulo}
          className={styles.blocoDefinicao}
          style={{ marginBottom: '1.25rem' }}
        >
          <h3
            style={{
              margin: '0 0 0.5rem',
              fontSize: '1.05rem',
              color: 'var(--calc-gold)',
            }}
          >
            {sub.titulo}
          </h3>
          <p style={{ marginBottom: 0, lineHeight: 1.75 }}>
            {sub.conteudo}
          </p>
        </div>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* ANÁLISE DO CÂNON 28                                          */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo} style={{ marginTop: '2.5rem' }}>
        {analiseCanon28.titulo}
      </h2>

      {[
        { label: 'Argumento', texto: analiseCanon28.argumento },
        { label: 'Reação dos legados', texto: analiseCanon28.reacaoLegados },
        { label: 'Anulação por Leão', texto: analiseCanon28.anulacaoLeao },
        { label: 'Posição católica', texto: analiseCanon28.posicaoCatolica },
        { label: 'Posição ortodoxa', texto: analiseCanon28.posicaoOrtodoxa },
        { label: 'Consequências históricas', texto: analiseCanon28.consequencias },
      ].map((bloco) => (
        <div
          key={bloco.label}
          style={{
            background: 'var(--calc-bg-highlight)',
            borderLeft: '3px solid var(--calc-purple)',
            borderRadius: '0 8px 8px 0',
            padding: '0.85rem 1rem',
            marginBottom: '1rem',
            fontSize: '0.95rem',
            lineHeight: 1.7,
          }}
        >
          <strong>{bloco.label}:</strong> {bloco.texto}
        </div>
      ))}
    </section>
  );
}
