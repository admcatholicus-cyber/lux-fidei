import styles from '../../_styles/biografia.module.css';
import React from 'react';

type TabelaProps =
  | {
      colunas: string[];
      linhas: (string | React.ReactNode)[][];
      children?: never;
    }
  | {
      colunas?: never;
      linhas?: never;
      children: React.ReactNode;
    };

export default function Tabela(props: TabelaProps) {
  // Uso via props (colunas + linhas)
  if ('colunas' in props && props.colunas) {
    const { colunas, linhas } = props;
    return (
      <table className={styles.tabela}>
        <thead>
          <tr>
            {colunas.map((col, i) => (
              <th key={i}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {linhas.map((linha, i) => (
            <tr key={i}>
              {linha.map((cel, j) => (
                <td key={j}>{cel}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  // Uso via children (JSX de tabela)
  return <table className={styles.tabela}>{props.children}</table>;
}