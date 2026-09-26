import styles from '../../_styles/biografia.module.css';

interface TabelaProps {
  headers?: string[];
  linhas?: (string | React.ReactNode)[][];
  children?: React.ReactNode;
}

export function Tabela({ headers, linhas, children }: TabelaProps) {
  return (
    <div className={styles.tabelaWrapper}>
      <table className={styles.tabela}>
        {headers && headers.length > 0 && (
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
        )}
        {linhas ? (
          <tbody>
            {linhas.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          children
        )}
      </table>
    </div>
  );
}
