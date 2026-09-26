// estudos/concilios/calcedonia/_components/Nota.tsx

interface NotaProps {
  n: number;
  texto: string;
}

export function Nota({ n, texto }: NotaProps) {
  return (
    <sup
      style={{
        fontSize: '0.72rem',
        fontWeight: 700,
        color: 'var(--calc-purple)',
        marginLeft: '2px',
        cursor: 'help',
      }}
      title={texto}
    >
      [{n}]
    </sup>
  );
}
