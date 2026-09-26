// estudos/concilios/calcedonia/sobre-fontes/page.tsx
import type { Metadata } from 'next';
import {
  metodologia,
  abreviaturas,
  guiaCitacaoABNT,
  changelog,
} from './_data';
import styles from '../calcedonia.module.css';

export const metadata: Metadata = {
  title: 'Sobre as fontes e metodologia | Calcedônia | Lux Fidei',
  description:
    'Metodologia, abreviaturas, guia de citação ABNT e changelog do dossiê sobre o Concílio de Calcedônia.',
};

export default function SobreFontesPage() {
  return (
    <section className={styles.secao}>
      <h1 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>📋</span>
        Sobre as Fontes e Metodologia
      </h1>

      <p className={styles.secaoTexto}>
        Esta seção apresenta a metodologia de pesquisa, as abreviaturas utilizadas, 
        o guia de citação ABNT e o changelog do dossiê sobre o Concílio de Calcedônia.
      </p>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* METODOLOGIA                                                    */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo}>
        {metodologia.titulo}
      </h2>

      {metodologia.paragrafos.map((p, i) => (
        <p key={i} className={styles.secaoTexto}>
          {p}
        </p>
      ))}

      <hr className={styles.divisor} />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* ABREVIATURAS                                                   */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo}>
        Abreviaturas
      </h2>

      <table className={styles.tabelaComparativa}>
        <thead>
          <tr>
            <th>Sigla</th>
            <th>Extensão</th>
            <th>Autor / Responsável</th>
          </tr>
        </thead>
        <tbody>
          {abreviaturas.map((ab) => (
            <tr key={ab.sigla}>
              <td style={{ fontWeight: 700, color: 'var(--calc-purple)' }}>
                {ab.sigla}
              </td>
              <td>{ab.extensao}</td>
              <td style={{ fontSize: '0.88rem', color: 'var(--calc-text-muted)' }}>
                {ab.autor}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr className={styles.divisor} />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* GUIA DE CITAÇÃO ABNT                                           */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo}>
        {guiaCitacaoABNT.titulo}
      </h2>

      {guiaCitacaoABNT.formatos.map((formato) => (
        <div
          key={formato.modelo}
          className={styles.blocoDefinicao}
          style={{ marginBottom: '1.25rem' }}
        >
          <h3
            style={{
              margin: '0 0 0.5rem',
              fontSize: '1.05rem',
              color: 'var(--calc-gold)',
            }}
          >
            {formato.modelo}
          </h3>
          <div
            style={{
              background: 'var(--calc-bg-highlight)',
              borderLeft: '3px solid var(--calc-purple)',
              borderRadius: '0 8px 8px 0',
              padding: '0.65rem 0.9rem',
              marginBottom: '0.5rem',
              fontSize: '0.88rem',
              lineHeight: 1.5,
              fontFamily: 'Georgia, "Times New Roman", serif',
            }}
          >
            {formato.formato}
          </div>
          <div
            style={{
              fontSize: '0.85rem',
              color: 'var(--calc-text-muted)',
              fontStyle: 'italic',
            }}
          >
            <strong>Exemplo:</strong> {formato.exemplo}
          </div>
        </div>
      ))}

      <hr className={styles.divisor} />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CHANGELOG                                                      */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo}>
        Changelog (Histórico de versões)
      </h2>

      <div className={styles.presidentesLista}>
        {changelog.map((item, i) => (
          <div key={i} className={styles.presidenteItem}>
            <div className={styles.presidenteFase}>{item.data}</div>
            <div className={styles.presidenteInfo}>
              <p>{item.descricao}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.destaque} style={{ marginTop: '2rem' }}>
        <strong>Nota:</strong> Este dossiê está em contínuo aprimoramento. 
        Contribuições e correções são bem-vindas.
      </div>
    </section>
  );
}
