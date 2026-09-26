// estudos/concilios/calcedonia/arqueologia/page.tsx
import type { Metadata } from 'next';
import {
  eufemia,
  kadikoy,
  colunaMarciano,
  moedasSelos,
  esquemáticoNota,
} from './_data';
import styles from '../calcedonia.module.css';

export const metadata: Metadata = {
  title: 'Arqueologia e vestígios | Calcedônia | Lux Fidei',
  description:
    'Vestígios arqueológicos, numismática e epigrafia vinculados ao Concílio de Calcedônia: Santo Eufêmia, Coluna Marciano, moedas e selos imperiais.',
};

export default function ArqueologiaPage() {
  return (
    <section className={styles.secao}>
      <h1 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>🏺</span>
        Arqueologia e Vestígios de Calcedônia
      </h1>

      <p className={styles.secaoTexto}>
        Os vestígios materiais do Concílio de Calcedônia são escassos, mas significativos. 
        As principais fontes arqueológicas e numismáticas estão reunidas nesta seção.
      </p>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SANTO EUFÊMIA                                                 */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo}>
        {eufemia.titulo}
      </h2>

      <p className={styles.secaoTexto}>{eufemia.descricao}</p>

      <div className={styles.fichaRapida}>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Localização</div>
          <div className={styles.fichaValor}>
            {eufemia.localizacao}
          </div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Período</div>
          <div className={styles.fichaValor}>
            {eufemia.periodo}
          </div>
        </div>
      </div>

      <div className={styles.destaque} style={{ textAlign: 'left', fontStyle: 'normal' }}>
        <strong>Dados atestados:</strong> {eufemia.dadosAtestados}
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CALCEDÔNIA (KADIKÖY)                                          */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo} style={{ marginTop: '2.5rem' }}>
        {kadikoy.titulo}
      </h2>

      <p className={styles.secaoTexto}>{kadikoy.descricao}</p>

      <div className={styles.fichaRapida}>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Localização</div>
          <div className={styles.fichaValor}>
            {kadikoy.localizacao}
          </div>
        </div>
      </div>

      <div className={styles.destaque} style={{ textAlign: 'left', fontStyle: 'normal' }}>
        <strong>Notas atestadas:</strong> {kadikoy.notasAtestadas}
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* COLUNA MARCIANO                                                */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo} style={{ marginTop: '2.5rem' }}>
        {colunaMarciano.titulo}
      </h2>

      <p className={styles.secaoTexto}>{colunaMarciano.descricao}</p>

      <div className={styles.fichaRapida}>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Localização</div>
          <div className={styles.fichaValor}>
            {colunaMarciano.localizacao}
          </div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Datação</div>
          <div className={styles.fichaValor}>
            {colunaMarciano.datasAtestadas}
          </div>
        </div>
      </div>

      {/* Imagem F8 com crédito */}
      <div
        className={styles.blocoDefinicao}
        style={{ textAlign: 'center', marginTop: '1.5rem' }}
      >
        <div
          style={{
            width: '100%',
            height: '280px',
            background: 'linear-gradient(135deg, var(--calc-bg-highlight) 0%, var(--calc-bg-card) 100%)',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px dashed var(--calc-gold-border)',
          }}
        >
          <span style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🏛️</span>
          <span style={{ fontSize: '1rem', color: 'var(--calc-purple)', fontWeight: 600 }}>
            Coluna Marciano — Imagem F8
          </span>
          <span style={{ fontSize: '0.82rem', color: 'var(--calc-text-faint)', marginTop: '0.35rem' }}>
            {colunaMarciano.creditoImagem}
          </span>
        </div>
      </div>

      <p
        style={{
          fontSize: '0.82rem',
          color: 'var(--calc-text-faint)',
          fontStyle: 'italic',
          textAlign: 'center',
          marginTop: '0.5rem',
        }}
      >
        {esquemáticoNota}
      </p>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* MOEDAS E SELOS                                                 */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo} style={{ marginTop: '2.5rem' }}>
        {moedasSelos.titulo}
      </h2>

      <p className={styles.secaoTexto}>{moedasSelos.descricao}</p>

      <div className={styles.heresiasGrid}>
        {moedasSelos.iconografia.map((item, i) => (
          <div key={i} className={styles.heresiaCard}>
            <div className={styles.heresiaNome}>
              Iconografia {i + 1}
            </div>
            <div className={styles.heresiaErro}>{item}</div>
          </div>
        ))}
      </div>

      <div className={styles.destaque} style={{ marginTop: '1.5rem', textAlign: 'left', fontStyle: 'normal' }}>
        <strong>Nota:</strong> {moedasSelos.notas}
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* NOTA GERAL                                                     */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className={styles.destaque} style={{ marginTop: '2rem' }}>
        <strong>Nota metodológica:</strong> {esquemáticoNota}
      </div>
    </section>
  );
}
