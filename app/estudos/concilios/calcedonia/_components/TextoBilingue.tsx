// estudos/concilios/calcedonia/_components/TextoBilingue.tsx

import styles from '../calcedonia.module.css';

interface TextoBilingueProps {
  original: string;
  traducao: string;
  rotuloOriginal: string;
  langOriginal: 'grc' | 'la';
  fonteUrl: string;
}

export function TextoBilingue({
  original,
  traducao,
  rotuloOriginal,
  langOriginal,
  fonteUrl,
}: TextoBilingueProps) {
  return (
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
          {rotuloOriginal}
        </div>
        <div
          lang={langOriginal}
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: '1.02rem',
            lineHeight: 1.8,
            color: 'var(--calc-text)',
          }}
        >
          {original.split('\n\n').map((paragrafo, i) => (
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
          Tradução (PT)
        </div>
        <div
          style={{
            fontSize: '1.02rem',
            lineHeight: 1.8,
            color: 'var(--calc-text)',
          }}
        >
          {traducao.split('\n\n').map((paragrafo, i) => (
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
      <div
        style={{
          gridColumn: '1 / -1',
          fontSize: '0.75rem',
          color: 'var(--calc-text-faint)',
          borderTop: '1px dashed var(--calc-border-dashed)',
          paddingTop: '0.5rem',
          marginTop: '0.5rem',
        }}
      >
        Fonte do texto: {fonteUrl}
      </div>
    </div>
  );
}
