// estudos/concilios/calcedonia/bibliografia/page.tsx
import type { Metadata } from 'next';
import {
  fontesPrimarias,
  fontesSecundarias,
  niveisLeitura,
} from './_bibliografia';
import styles from '../calcedonia.module.css';

export const metadata: Metadata = {
  title: 'Bibliografia anotada (80 obras) | Calcedônia | Lux Fidei',
  description:
    'Bibliografia anotada do Concílio de Calcedônia: 40 fontes primárias e 40 secundárias com verificação de URLs. Níveis de leitura: iniciante, intermediário, avançado.',
};

export default function BibliografiaPage() {
  return (
    <section className={styles.secao}>
      <h1 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>📚</span>
        Bibliografia Anotada de Calcedônia
      </h1>

      <p className={styles.secaoTexto}>
        Esta seção apresenta {fontesPrimarias.length} fontes primárias e {fontesSecundarias.length} fontes 
        secundárias anotadas, com foco na cristologia calcedoniana. Todas as obras de referência 
        (Price & Gaddis, Grillmeier, Sellers, Gray, Frend, Meyendorff, Kelly+Vida Nova, 
        Chadwick×2, Wessel, Daley, Allen&Neil, Perrone, Tanner, Brock, de Halleux) 
        incluem URL de verificação quando disponível.
      </p>

      <div className={styles.fichaRapida}>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Primárias</div>
          <div className={styles.fichaValor}>{fontesPrimarias.length} obras</div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Secundárias</div>
          <div className={styles.fichaValor}>{fontesSecundarias.length} obras</div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Níveis</div>
          <div className={styles.fichaValor}>Iniciante · Intermediário · Avançado</div>
        </div>
      </div>

      <hr className={styles.divisor} />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* GUIA DE NÍVEIS DE LEITURA                                      */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo}>
        Guia de Níveis de Leitura
      </h2>

      {niveisLeitura.map((nivel) => (
        <div
          key={nivel.nivel}
          className={styles.blocoDefinicao}
          style={{ marginBottom: '1.5rem' }}
        >
          <h3
            style={{
              margin: '0 0 0.5rem',
              fontSize: '1.05rem',
              color: 'var(--calc-gold)',
            }}
          >
            {nivel.nivel}
          </h3>
          <p style={{ marginBottom: '0.85rem', lineHeight: 1.7 }}>
            {nivel.descricao}
          </p>
          <ul className={styles.resultadosLista}>
            {nivel.obras.map((obra, i) => (
              <li key={i}>{obra}</li>
            ))}
          </ul>
        </div>
      ))}

      <hr className={styles.divisor} />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* FONTES PRIMÁRIAS                                               */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo}>
        Fontes Primárias ({fontesPrimarias.length})
      </h2>

      {fontesPrimarias.map((obra, i) => (
        <div
          key={i}
          className={styles.blocoDefinicao}
          style={{ marginBottom: '1.25rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.65rem', marginBottom: '0.35rem' }}>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                color: 'var(--calc-gold)',
                minWidth: '2rem',
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <strong style={{ color: 'var(--calc-purple)' }}>
              {obra.autor}
            </strong>
          </div>
          <h3
            style={{
              margin: '0 0 0.25rem',
              fontSize: '0.98rem',
              color: 'var(--calc-text)',
            }}
          >
            {obra.titulo}
          </h3>
          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--calc-text-muted)',
              marginBottom: '0.5rem',
            }}
          >
            {obra.dadosPublicacao}
          </p>
          <p style={{ fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '0.5rem' }}>
            {obra.anotacao}
          </p>
          {obra.urlVerificacao && (
            <a
              href={obra.urlVerificacao}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.82rem',
                color: 'var(--calc-gold)',
                textDecoration: 'none',
                borderBottom: '1px dashed var(--calc-gold)',
              }}
            >
              {obra.urlVerificacao}
            </a>
          )}
        </div>
      ))}

      <hr className={styles.divisor} />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* FONTES SECUNDÁRIAS                                             */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoSubtitulo}>
        Fontes Secundárias ({fontesSecundarias.length})
      </h2>

      {fontesSecundarias.map((obra, i) => (
        <div
          key={i}
          className={styles.blocoDefinicao}
          style={{ marginBottom: '1.25rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.65rem', marginBottom: '0.35rem' }}>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                color: 'var(--calc-gold)',
                minWidth: '2rem',
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <strong style={{ color: 'var(--calc-purple)' }}>
              {obra.autor}
            </strong>
          </div>
          <h3
            style={{
              margin: '0 0 0.25rem',
              fontSize: '0.98rem',
              color: 'var(--calc-text)',
            }}
          >
            {obra.titulo}
          </h3>
          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--calc-text-muted)',
              marginBottom: '0.5rem',
            }}
          >
            {obra.dadosPublicacao}
          </p>
          <p style={{ fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '0.5rem' }}>
            {obra.anotacao}
          </p>
          {obra.urlVerificacao && (
            <a
              href={obra.urlVerificacao}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.82rem',
                color: 'var(--calc-gold)',
                textDecoration: 'none',
                borderBottom: '1px dashed var(--calc-gold)',
              }}
            >
              {obra.urlVerificacao}
            </a>
          )}
        </div>
      ))}
    </section>
  );
}
