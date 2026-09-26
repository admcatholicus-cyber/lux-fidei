// estudos/concilios/calcedonia/glossario/page.tsx
import type { Metadata } from 'next';
import { verbetes } from './_verbetes';
import styles from '../calcedonia.module.css';

export const metadata: Metadata = {
  title: 'Glossário teológico (40+ verbetes) | Calcedônia | Lux Fidei',
  description:
    'Glossário de termos teológicos do Concílio de Calcedônia: physis, hypostasis, prosōpon, ousia, homoousios, Theotokos e mais 34 verbetes com transliteração e tradução.',
};

export default function GlossarioPage() {
  return (
    <section className={styles.secao}>
      <h1 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>📖</span>
        Glossário Teológico de Calcedônia
      </h1>

      <p className={styles.secaoTexto}>
        Este glossário reúne os termos teológicos fundamentais do Concílio de Calcedônia, 
        com transliteração do grego, tradução, definição de 60–120 palavras e referências 
        cruzadas. Total: {verbetes.length} verbetes.
      </p>

      <div className={styles.fichaRapida}>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Total de verbetes</div>
          <div className={styles.fichaValor}>{verbetes.length}</div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Idiomas</div>
          <div className={styles.fichaValor}>Grego · Latim</div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Formato</div>
          <div className={styles.fichaValor}>Lema · Transliteração · Tradução</div>
        </div>
      </div>

      <hr className={styles.divisor} />

      {verbetes.map((v, i) => (
        <div
          key={v.lema}
          className={styles.blocoDefinicao}
          style={{ marginBottom: '1.5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.35rem' }}>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                color: 'var(--calc-gold)',
                minWidth: '2rem',
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <h2
              style={{
                margin: 0,
                fontSize: '1.15rem',
                color: 'var(--calc-purple)',
              }}
            >
              {v.lema}
            </h2>
          </div>

          <div
            style={{
              fontSize: '0.95rem',
              color: 'var(--calc-gold)',
              fontStyle: 'italic',
              marginBottom: '0.15rem',
            }}
          >
            {v.transliteracao}
          </div>

          <div
            style={{
              fontSize: '0.88rem',
              color: 'var(--calc-text-muted)',
              marginBottom: '0.75rem',
              fontWeight: 600,
            }}
          >
            {v.traducao}
          </div>

          <p style={{ marginBottom: '0.85rem', lineHeight: 1.75 }}>
            {v.definicao}
          </p>

          {v.verTambem.length > 0 && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.35rem',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--calc-text-faint)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Ver também:
              </span>
              {v.verTambem.map((rt) => (
                <span
                  key={rt}
                  style={{
                    background: 'var(--calc-bg-highlight)',
                    border: '1px solid var(--calc-gold-border)',
                    color: 'var(--calc-purple-mid)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    padding: '3px 8px',
                    borderRadius: '999px',
                  }}
                >
                  {rt}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
