// estudos/concilios/calcedonia/_components/Citacao.tsx

import styles from '../calcedonia.module.css';

interface CitacaoProps {
  texto: string;
  fonte: string;
  lang?: 'grc' | 'la' | 'pt';
}

export function Citacao({ texto, fonte, lang }: CitacaoProps) {
  return (
    <blockquote
      className={styles.blocoDefinicao}
      style={{
        margin: '1.5rem 0',
        padding: '1.5rem 1.75rem',
        fontStyle: 'italic',
        position: 'relative',
      }}
    >
      <p lang={lang} style={{ marginBottom: '0.75rem' }}>
        {texto}
      </p>
      <footer
        style={{
          fontSize: '0.82rem',
          color: 'var(--calc-text-muted)',
          fontStyle: 'normal',
          borderTop: '1px dashed var(--calc-border-dashed)',
          paddingTop: '0.6rem',
          marginTop: '0.5rem',
        }}
      >
        Fonte: {fonte}
      </footer>
    </blockquote>
  );
}
