// estudos/concilios/calcedonia/imperiais/page.tsx
import type { Metadata } from 'next';
import { introImperiais, editos, fontesImperiais } from './_data';
import styles from '../calcedonia.module.css';

export const metadata: Metadata = {
  title: 'Éditos imperiais de Marciano | Calcedônia | Lux Fidei',
  description:
    'Lista datada dos éditos e constituições de Marciano que confirmam as decisões de Calcedônia como lei imperial, com análise dos efeitos.',
};

export default function ImperiaisPage() {
  return (
    <section className={styles.secao}>
      <h1 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>👑</span>
        {introImperiais.titulo}
      </h1>

      <p className={styles.secaoTexto}>{introImperiais.contexto}</p>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* TABELA DE ÉDITOS                                              */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <table className={styles.tabelaComparativa}>
        <thead>
          <tr>
            <th>Data</th>
            <th>Destinatário</th>
            <th>Título</th>
            <th>Resumo</th>
            <th>Efeito</th>
          </tr>
        </thead>
        <tbody>
          {editos.map((edito, i) => (
            <tr key={i}>
              <td style={{ whiteSpace: 'nowrap', fontWeight: 600, color: 'var(--calc-gold)' }}>
                {edito.data}
              </td>
              <td>{edito.destinatario}</td>
              <td style={{ fontWeight: 600 }}>{edito.titulo}</td>
              <td>{edito.resumo}</td>
              <td style={{ fontStyle: 'italic' }}>{edito.efeito}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* DETALHAMENTO POR ÉDITO                                        */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo} style={{ marginTop: '2.5rem' }}>
        Detalhamento
      </h2>

      {editos.map((edito, i) => (
        <div
          key={i}
          className={styles.blocoDefinicao}
          style={{ marginBottom: '1.25rem' }}
        >
          <h3 style={{ margin: '0 0 0.25rem', color: 'var(--calc-gold)', fontSize: '1.05rem' }}>
            {edito.titulo}
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--calc-text-faint)', marginBottom: '0.5rem' }}>
            {edito.data} · {edito.destinatario}
          </p>
          <p style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>{edito.resumo}</p>
          <div
            style={{
              background: 'var(--calc-bg-highlight)',
              borderLeft: '3px solid var(--calc-purple)',
              borderRadius: '0 8px 8px 0',
              padding: '0.65rem 0.9rem',
              fontSize: '0.92rem',
              lineHeight: 1.6,
            }}
          >
            <strong>Efeito:</strong> {edito.efeito}
          </div>
        </div>
      ))}

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
        {fontesImperiais.map((fonte, i) => (
          <div key={i}>{fonte}</div>
        ))}
      </div>
    </section>
  );
}
