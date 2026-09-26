// estudos/concilios/calcedonia/teologia/tres-capitulos/page.tsx
import type { Metadata } from 'next';
import {
  introTresCapitulos,
  theodoroMopsuestia,
  teodoretoCiro,
  ibasEdessa,
  vigilioCrisiculo,
  anatemas,
  consequenciasCapitulos,
  fontesTresCapitulos,
} from './_data';
import styles from '../../calcedonia.module.css';

export const metadata: Metadata = {
  title: 'Três Capítulos | Calcedônia | Lux Fidei',
  description:
    'Controvérsia dos Três Capítulos (553): Theodoro de Mopsuéstia, Teodoreto, Ibas — condenação, 14 anátemas, Vigílio e consequências.',
};

export default function TresCapitulosPage() {
  return (
    <section className={styles.secao}>
      <h1 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>📜</span>
        A Controvérsia dos Três Capítulos
      </h1>

      <p className={styles.secaoTexto}>{introTresCapitulos}</p>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* THEODORO DE MOPSUÉSTIA                                         */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>1️⃣</span>
        {theodoroMopsuestia.titulo}
      </h2>

      {theodoroMopsuestia.resumo.split('\n\n').map((paragrafo, i) => (
        <p key={i} className={styles.secaoTexto}>
          {paragrafo}
        </p>
      ))}

      <div className={styles.blocoDefinicao} style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.05rem', color: 'var(--calc-gold)' }}>
          Condenação
        </h3>
        <p style={{ marginBottom: 0, lineHeight: 1.75 }}>
          {theodoroMopsuestia.condemnacao}
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* TEODORETO DE CIRO                                              */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>2️⃣</span>
        {teodoretoCiro.titulo}
      </h2>

      {teodoretoCiro.resumo.split('\n\n').map((paragrafo, i) => (
        <p key={i} className={styles.secaoTexto}>
          {paragrafo}
        </p>
      ))}

      <div className={styles.blocoDefinicao} style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.05rem', color: 'var(--calc-gold)' }}>
          Condenação
        </h3>
        <p style={{ marginBottom: 0, lineHeight: 1.75 }}>
          {teodoretoCiro.condemnacao}
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* IBAS DE EDESSA                                                 */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>3️⃣</span>
        {ibasEdessa.titulo}
      </h2>

      {ibasEdessa.resumo.split('\n\n').map((paragrafo, i) => (
        <p key={i} className={styles.secaoTexto}>
          {paragrafo}
        </p>
      ))}

      <div className={styles.blocoDefinicao} style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.05rem', color: 'var(--calc-gold)' }}>
          Condenação
        </h3>
        <p style={{ marginBottom: 0, lineHeight: 1.75 }}>
          {ibasEdessa.condemnacao}
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* VIGÍLIO E A CRISE                                               */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <hr className={styles.divisor} />

      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>⚡</span>
        {vigilioCrisiculo.titulo}
      </h2>

      {vigilioCrisiculo.resumo.split('\n\n').map((paragrafo, i) => (
        <p key={i} className={styles.secaoTexto}>
          {paragrafo}
        </p>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 14 ANÁTEMAS                                                    */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <hr className={styles.divisor} />

      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>⚖️</span>
        {anatemas.titulo}
      </h2>

      {anatemas.lista.map((anatema) => (
        <div key={anatema.numero} className={styles.blocoDefinicao} style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--calc-gold)', minWidth: '2rem' }}>
              [{anatema.numero}]
            </span>
            <strong style={{ color: 'var(--calc-purple)' }}>
              Anátema {anatema.numero}
            </strong>
          </div>
          <p style={{ marginBottom: 0, lineHeight: 1.75 }}>
            {anatema.texto}
          </p>
        </div>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CONSEQUÊNCIAS                                                  */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <hr className={styles.divisor} />

      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>🏛️</span>
        Consequências Históricas
      </h2>

      {consequenciasCapitulos.split('\n\n').map((paragrafo, i) => (
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

      {fontesTresCapitulos.map((fonte) => (
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
