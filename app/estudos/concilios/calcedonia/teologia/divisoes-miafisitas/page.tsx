// estudos/concilios/calcedonia/teologia/divisoes-miafisitas/page.tsx
import type { Metadata } from 'next';
import {
  introDivisoes,
  tabelaDivisoes,
  julianismoDetalhado,
  triteismoDetalhado,
  consequenciasDivisorias,
  fontesDivisoes,
} from './_data';
import styles from '../../calcedonia.module.css';

export const metadata: Metadata = {
  title: 'Divisões Miacitas | Calcedônia | Lux Fidei',
  description:
    'Julianistas, Severianos e Filoponistas: as divisões internas do miafisismo — aftartodocetismo, triteísmo e consequências para o cristianismo oriental.',
};

export default function DivisoesMiacitasPage() {
  return (
    <section className={styles.secao}>
      <h1 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>⚔️</span>
        Divisões Internas do Miacita
      </h1>

      <p className={styles.secaoTexto}>{introDivisoes}</p>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* TABELA DE DIVISÕES                                             */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>📊</span>
        Panorama das Divisões
      </h2>

      <table className={styles.tabelaComparativa}>
        <thead>
          <tr>
            <th>Grupo</th>
            <th>Líder</th>
            <th>Princípio</th>
            <th>Consequência</th>
          </tr>
        </thead>
        <tbody>
          {tabelaDivisoes.map((row) => (
            <tr key={row.grupo}>
              <td><strong>{row.grupo}</strong></td>
              <td>{row.lider}</td>
              <td>{row.principio}</td>
              <td>{row.consequencia}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* JULIANISMO — AFTARTODOCETISMO                                  */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <hr className={styles.divisor} />

      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>🔥</span>
        {julianismoDetalhado.titulo}
      </h2>

      {julianismoDetalhado.descricao.split('\n\n').map((paragrafo, i) => (
        <p key={i} className={styles.secaoTexto}>
          {paragrafo}
        </p>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* TRITEÍSMO — FILOPONO                                           */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <hr className={styles.divisor} />

      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>⚠️</span>
        {triteismoDetalhado.titulo}
      </h2>

      {triteismoDetalhado.descricao.split('\n\n').map((paragrafo, i) => (
        <p key={i} className={styles.secaoTexto}>
          {paragrafo}
        </p>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CONSEQUÊNCIAS                                                  */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <hr className={styles.divisor} />

      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>🏛️</span>
        Consequências das Divisões
      </h2>

      {consequenciasDivisorias.split('\n\n').map((paragrafo, i) => (
        <p key={i} className={styles.secaoTexto}>
          {paragrafo}
        </p>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* FONTES                                                         */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>📖</span>
        Fontes
      </h2>

      {fontesDivisoes.map((fonte) => (
        <div key={fonte.nome} className={styles.blocoDefinicao} style={{ marginBottom: '1rem' }}>
          <strong>{fonte.nome}</strong>
          <span style={{ fontSize: '0.82rem', color: 'var(--calc-text-faint)', marginLeft: '0.5rem' }}>
            ({fonte.tipo})
          </span>
          <p style={{ marginBottom: 0, marginTop: '0.5rem' }}>
            {fonte.descricao}
          </p>
        </div>
      ))}
    </section>
  );
}
