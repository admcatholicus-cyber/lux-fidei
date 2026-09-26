// estudos/concilios/calcedonia/edicao-critica/page.tsx
import type { Metadata } from 'next';
import {
  introEdicaoCritica,
  estruturaACO,
  mansi,
  versoesLatinas,
  numeracaoGregoLatim,
  exemplosCitacao,
} from './_data';
import styles from '../calcedonia.module.css';

export const metadata: Metadata = {
  title: 'Guia de edição crítica (ACO/Mansi) | Calcedônia | Lux Fidei',
  description:
    'Guia para compreender as fontes textuais de Calcedônia: ACO, Mansi, versões latinas, numeração grego×latim e como citar cada fonte.',
};

export default function EdicaoCriticaPage() {
  return (
    <section className={styles.secao}>
      <h1 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>🔬</span>
        {introEdicaoCritica.titulo}
      </h1>

      <p className={styles.secaoTexto}>{introEdicaoCritica.contexto}</p>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* ACO                                                          */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo}>
        {estruturaACO.titulo}
      </h2>

      <p style={{ marginBottom: '1rem', lineHeight: 1.75 }}>
        {estruturaACO.descricao}
      </p>

      <table className={styles.tabelaComparativa}>
        <thead>
          <tr>
            <th>Volume</th>
            <th>Conteúdo</th>
          </tr>
        </thead>
        <tbody>
          {estruturaACO.volumes.map((vol) => (
            <tr key={vol.rotulo}>
              <td style={{ fontWeight: 600, color: 'var(--calc-gold)', whiteSpace: 'nowrap' }}>
                {vol.rotulo}
              </td>
              <td>{vol.conteudo}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        style={{
          fontSize: '0.82rem',
          color: 'var(--calc-text-faint)',
          fontStyle: 'italic',
          marginTop: '0.5rem',
          marginBottom: '2rem',
        }}
      >
        {estruturaACO.referencia}
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* MANSI                                                        */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo}>
        {mansi.titulo}
      </h2>

      <p style={{ marginBottom: '1rem', lineHeight: 1.75 }}>
        {mansi.descricao}
      </p>

      {mansi.volumes.map((vol) => (
        <div
          key={vol.rotulo}
          className={styles.blocoDefinicao}
          style={{ marginBottom: '1rem' }}
        >
          <strong style={{ color: 'var(--calc-gold)' }}>{vol.rotulo}</strong>
          <p style={{ marginBottom: 0, marginTop: '0.5rem', lineHeight: 1.7 }}>
            {vol.conteudo}
          </p>
        </div>
      ))}

      <div
        style={{
          fontSize: '0.82rem',
          color: 'var(--calc-text-faint)',
          fontStyle: 'italic',
          marginTop: '0.5rem',
          marginBottom: '2rem',
        }}
      >
        {mansi.referencia}
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* VERSÕES LATINAS                                              */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo}>
        {versoesLatinas.titulo}
      </h2>

      <p style={{ marginBottom: '1rem', lineHeight: 1.75 }}>
        {versoesLatinas.descricao}
      </p>

      {versoesLatinas.versoes.map((v) => (
        <div
          key={v.nome}
          className={styles.blocoDefinicao}
          style={{ marginBottom: '1rem' }}
        >
          <strong style={{ color: 'var(--calc-purple)' }}>{v.nome}</strong>
          <p style={{ marginBottom: 0, marginTop: '0.5rem', lineHeight: 1.7 }}>
            {v.descricao}
          </p>
        </div>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* NUMERAÇÃO GREGO × LATIM                                      */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo} style={{ marginTop: '2.5rem' }}>
        {numeracaoGregoLatim.titulo}
      </h2>

      <p style={{ marginBottom: '1rem', lineHeight: 1.75 }}>
        {numeracaoGregoLatim.descricao}
      </p>

      <table className={styles.tabelaComparativa}>
        <thead>
          <tr>
            <th>Edição grega</th>
            <th>Edição latina (Dionysiana)</th>
            <th>Observação</th>
          </tr>
        </thead>
        <tbody>
          {numeracaoGregoLatim.tabela.map((linha, i) => (
            <tr key={i}>
              <td style={{ fontWeight: 600 }}>{linha.grego}</td>
              <td style={{ fontWeight: 600 }}>{linha.latimDionysiana}</td>
              <td>{linha.observacao}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* EXEMPLOS DE CITAÇÃO                                          */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo} style={{ marginTop: '2.5rem' }}>
        {exemplosCitacao.titulo}
      </h2>

      <table className={styles.tabelaComparativa}>
        <thead>
          <tr>
            <th>Formato</th>
            <th>Exemplo</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          {exemplosCitacao.exemplos.map((ex) => (
            <tr key={ex.formato}>
              <td style={{ fontWeight: 600, color: 'var(--calc-purple)' }}>
                {ex.formato}
              </td>
              <td>
                <code
                  style={{
                    fontSize: '0.88rem',
                    background: 'var(--calc-bg-highlight)',
                    padding: '2px 6px',
                    borderRadius: '4px',
                  }}
                >
                  {ex.exemplo}
                </code>
              </td>
              <td style={{ fontSize: '0.88rem' }}>{ex.nota}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
