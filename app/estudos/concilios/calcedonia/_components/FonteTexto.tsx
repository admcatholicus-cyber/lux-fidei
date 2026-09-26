// estudos/concilios/calcedonia/_components/FonteTexto.tsx

interface FonteTextoProps {
  url: string;
  acesso: string;
}

export function FonteTexto({ url, acesso }: FonteTextoProps) {
  return (
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
      Fonte do texto:{' '}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: 'var(--calc-purple-mid)',
          textDecoration: 'none',
          borderBottom: '1px dashed var(--calc-gold-light)',
        }}
      >
        {url}
      </a>{' '}
      (acesso em {acesso})
    </div>
  );
}
