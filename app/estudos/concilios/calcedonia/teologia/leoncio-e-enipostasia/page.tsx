// estudos/concilios/calcedonia/teologia/leoncio-e-enipostasia/page.tsx
import type { Metadata } from 'next';
import {
  leontiusProfile,
  bioLeontius,
  doutrinaEnhypostasia,
  fraseChave,
  influenciaHistorica,
  fontesLeontius,
} from './_data';
import styles from '../../calcedonia.module.css';

export const metadata: Metadata = {
  title: 'Leôncio e a Enhypostasia | Calcedônia | Lux Fidei',
  description:
    'Doutrina da enhypostasia de Leôncio de Bizâncio: "Um da Trindade sofreu na carne" — definição, implicações e influência na cristologia calcedoniana.',
};

export default function LeoncioEEnhypostasiaPage() {
  return (
    <section className={styles.secao}>
      <h1 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>✝️</span>
        Leôncio de Bizâncio e a Doutrina da Enhypostasia
      </h1>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* FICHA RÁPIDA                                                   */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className={styles.fichaRapida}>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Nome</div>
          <div className={styles.fichaValor}>
            {leontiusProfile.nome}
            <br />
            <small>{leontiusProfile.grego}</small>
          </div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Datas</div>
          <div className={styles.fichaValor}>{leontiusProfile.datas}</div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Local</div>
          <div className={styles.fichaValor}>{leontiusProfile.local}</div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Título</div>
          <div className={styles.fichaValor}>{leontiusProfile.titulo}</div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* BIOGRAFIA                                                      */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>📜</span>
        Biografia
      </h2>

      {bioLeontius.split('\n\n').map((paragrafo, i) => (
        <p key={i} className={styles.secaoTexto}>
          {paragrafo}
        </p>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* DOUTRINA DA ENHYPOSTASIA                                       */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>📖</span>
        {doutrinaEnhypostasia.titulo}
      </h2>

      {doutrinaEnhypostasia.definicao.split('\n\n').map((paragrafo, i) => (
        <p key={i} className={styles.secaoTexto}>
          {paragrafo}
        </p>
      ))}

      {/* FÓRMULA-CHAVE */}
      <div className={styles.blocoDefinicao} style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.05rem', color: 'var(--calc-gold)' }}>
          Fórmula-chave
        </h3>
        <p style={{ marginBottom: 0, lineHeight: 1.8, fontStyle: 'italic' }}>
          {doutrinaEnhypostasia.formulaChave}
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* FRASE CHAVE                                                    */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className={styles.destaque}>
        {fraseChave}
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* IMPLICAÇÕES                                                    */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>🔍</span>
        Implicações Teológicas
      </h2>

      {doutrinaEnhypostasia.implicacoes.map((impl) => (
        <div key={impl.titulo} className={styles.blocoDefinicao} style={{ marginBottom: '1.25rem' }}>
          <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.05rem', color: 'var(--calc-purple)' }}>
            {impl.titulo}
          </h3>
          <p style={{ marginBottom: 0, lineHeight: 1.75 }}>
            {impl.conteudo}
          </p>
        </div>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* INFLUÊNCIA HISTÓRICA                                            */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>🏛️</span>
        Influência Histórica
      </h2>

      {influenciaHistorica.split('\n\n').map((paragrafo, i) => (
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

      {fontesLeontius.map((fonte) => (
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
