// estudos/concilios/calcedonia/fontes-de-fe/page.tsx
import type { Metadata } from 'next';
import {
  introFontesDeFe,
  fontesDeFe,
  tabelaTomoDefinicao,
} from './_data';
import styles from '../calcedonia.module.css';

export const metadata: Metadata = {
  title: 'As 5 Fontes da Definição | Calcedônia | Lux Fidei',
  description:
    'Os cinco documentos que a Definição de Calcedônia cita como base doutrinal: Credos de Niceia e Constantinopla, cartas de Cirilo e Tomo de Leão.',
};

export default function FontesDeFePage() {
  return (
    <section className={styles.secao}>
      <h1 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>📜</span>
        {introFontesDeFe.titulo}
      </h1>

      <p className={styles.secaoTexto}>{introFontesDeFe.contexto}</p>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CADA FONTE                                                    */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {fontesDeFe.map((fonte) => (
        <div
          key={fonte.numero}
          className={styles.blocoDefinicao}
          style={{ marginBottom: '2rem' }}
        >
          <h2
            style={{ fontSize: '1.15rem', color: 'var(--calc-gold)', marginBottom: '0.75rem' }}
          >
            Fonte {fonte.numero}: {fonte.nome}
          </h2>

          <p style={{ fontSize: '0.88rem', color: 'var(--calc-text-faint)', marginBottom: '0.75rem' }}>
            {fonte.origem}
          </p>

          <p style={{ marginBottom: '1rem' }}>{fonte.contexto}</p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.25rem',
              marginBottom: '1rem',
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
                TEXTO ORIGINAL
              </div>
              <p
                lang="grc"
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: '0.95rem',
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                }}
              >
                {fonte.textoOriginal}
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
                {fonte.textoPT}
              </p>
            </div>
          </div>

          {fonte.notas.map((nota, i) => (
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
      {/* TABELA TOMO → DEFINIÇÃO                                      */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo} style={{ marginTop: '2.5rem' }}>
        {tabelaTomoDefinicao.titulo}
      </h2>

      <p style={{ marginBottom: '1rem' }}>{tabelaTomoDefinicao.descricao}</p>

      <table className={styles.tabelaComparativa}>
        <thead>
          <tr>
            <th>Tomo (latim)</th>
            <th>Definição (grego)</th>
            <th>Observação</th>
          </tr>
        </thead>
        <tbody>
          {tabelaTomoDefinicao.correspondencias.map((corr, i) => (
            <tr key={i}>
              <td><em>{corr.tomo}</em></td>
              <td lang="grc">{corr.definicao}</td>
              <td>{corr.observacao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
