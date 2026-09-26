// estudos/concilios/calcedonia/teologia/severo-de-antioquia/page.tsx
import type { Metadata } from 'next';
import {
  severoProfile,
  bioSummary,
  tabelaComparativa,
  obrasSummary,
  contextualizacaoSiria,
  fontes,
  significadoHistorico,
} from './_data';
import styles from '../../calcedonia.module.css';

export const metadata: Metadata = {
  title: 'Severo de Antioquia | Calcedônia | Lux Fidei',
  description:
    'Perfil do patriarca miafisita Severo de Antioquia (512-518), exilado no Egito: biografia, tabela mia physis vs Eutiques, obras e contexto siríaco.',
};

export default function SeveroDeAntioquiaPage() {
  return (
    <section className={styles.secao}>
      <h1 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>✝️</span>
        Severo de Antioquia — Patriarca Miacita de Antioquia
      </h1>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* FICHA RÁPIDA                                                   */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className={styles.fichaRapida}>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Nome</div>
          <div className={styles.fichaValor}>
            {severoProfile.nome}
            <br />
            <small>{severoProfile.grego}</small>
          </div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Datas</div>
          <div className={styles.fichaValor}>{severoProfile.datas}</div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Patriarcado</div>
          <div className={styles.fichaValor}>{severoProfile.patriarcado}</div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Local</div>
          <div className={styles.fichaValor}>{severoProfile.local}</div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Título</div>
          <div className={styles.fichaValor}>{severoProfile.titulo}</div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* BIOGRAFIA                                                      */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>📜</span>
        Biografia
      </h2>

      {bioSummary.split('\n\n').map((paragrafo, i) => (
        <p key={i} className={styles.secaoTexto}>
          {paragrafo}
        </p>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* TABELA COMPARATIVA: MIA PHYSIS × EUTIQUES                     */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>⚖️</span>
        Tabela Comparativa: Mia Physis × Eutiques
      </h2>

      <p className={styles.secaoTexto}>
        A tabela a seguir compara a posição de Severo (representando o miafisismo ortodoxo)
        com a doutrina de Eutiques, frequentemente confundida com o monofisismo mas
        fundamentalmente distinta:
      </p>

      <table className={styles.tabelaComparativa}>
        <thead>
          <tr>
            <th>Aspecto</th>
            <th>Mia Physis (Severo)</th>
            <th>Eutiques</th>
          </tr>
        </thead>
        <tbody>
          {tabelaComparativa.map((row) => (
            <tr key={row.aspecto}>
              <td><strong>{row.aspecto}</strong></td>
              <td>{row.miaPhysis}</td>
              <td>{row.eutiques}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* OBRAS                                                          */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>📚</span>
        Obras
      </h2>

      {obrasSummary.map((obra) => (
        <div key={obra.titulo} className={styles.blocoDefinicao} style={{ marginBottom: '1.25rem' }}>
          <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.05rem', color: 'var(--calc-purple)' }}>
            {obra.titulo}
          </h3>
          <p style={{ marginBottom: '0.5rem', lineHeight: 1.75 }}>
            {obra.descricao}
          </p>
          <div style={{ fontSize: '0.82rem', color: 'var(--calc-text-faint)', fontStyle: 'italic' }}>
            Extensão: {obra.extensao}
          </div>
        </div>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CONTEXTO SIRÍACO                                               */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>🌍</span>
        Contexto na Síria do século VI
      </h2>

      {contextualizacaoSiria.split('\n\n').map((paragrafo, i) => (
        <p key={i} className={styles.secaoTexto}>
          {paragrafo}
        </p>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SIGNIFICADO HISTÓRICO                                          */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>🏛️</span>
        Significado Histórico
      </h2>

      <div className={styles.destaque}>
        {significadoHistorico}
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* FONTES                                                         */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>📖</span>
        Fontes
      </h2>

      {fontes.map((fonte) => (
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
