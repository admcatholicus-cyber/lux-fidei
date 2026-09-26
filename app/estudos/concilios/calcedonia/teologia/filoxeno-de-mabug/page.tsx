// estudos/concilios/calcedonia/teologia/filoxeno-de-mabug/page.tsx
import type { Metadata } from 'next';
import {
  filoxenoProfile,
  perfilBiografico,
  teologiaFiloxeno,
  contextoSiria,
  contribuicoesLiterarias,
  fontesFiloxeno,
  significadoFiloxeno,
} from './_data';
import styles from '../../calcedonia.module.css';

export const metadata: Metadata = {
  title: 'Filoxeno de Mabug | Calcedônia | Lux Fidei',
  description:
    'Perfil do bispo miafisita siríaco Filoxeno de Mabug (c.440-523): teologia, exegese, contexto na Síria e contribuições literárias.',
};

export default function FiloxenoDeMabugPage() {
  return (
    <section className={styles.secao}>
      <h1 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>✝️</span>
        Filoxeno de Mabug — Bispo Miacita Siríaco
      </h1>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* FICHA RÁPIDA                                                   */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className={styles.fichaRapida}>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Nome</div>
          <div className={styles.fichaValor}>
            {filoxenoProfile.nome}
            <br />
            <small>{filoxenoProfile.grego}</small>
            <br />
            <small>{filoxenoProfile.siríaco}</small>
          </div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Datas</div>
          <div className={styles.fichaValor}>{filoxenoProfile.datas}</div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Sede</div>
          <div className={styles.fichaValor}>{filoxenoProfile.sede}</div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Título</div>
          <div className={styles.fichaValor}>{filoxenoProfile.titulo}</div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* PERFIL BIOGRÁFICO                                              */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>📜</span>
        Perfil Biográfico
      </h2>

      {perfilBiografico.split('\n\n').map((paragrafo, i) => (
        <p key={i} className={styles.secaoTexto}>
          {paragrafo}
        </p>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* TEOLOGIA                                                       */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>📖</span>
        {teologiaFiloxeno.titulo}
      </h2>

      {teologiaFiloxeno.pontos.map((ponto) => (
        <div key={ponto.tema} className={styles.blocoDefinicao} style={{ marginBottom: '1.25rem' }}>
          <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.05rem', color: 'var(--calc-purple)' }}>
            {ponto.tema}
          </h3>
          <p style={{ marginBottom: 0, lineHeight: 1.75 }}>
            {ponto.conteudo}
          </p>
        </div>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CONTEXTO SIRÍACO                                               */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>🌍</span>
        Contexto na Síria do século V-VI
      </h2>

      {contextoSiria.split('\n\n').map((paragrafo, i) => (
        <p key={i} className={styles.secaoTexto}>
          {paragrafo}
        </p>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CONTRIBUIÇÕES LITERÁRIAS                                       */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>📚</span>
        Contribuições Literárias
      </h2>

      {contribuicoesLiterarias.map((contrib) => (
        <div key={contrib.titulo} className={styles.blocoDefinicao} style={{ marginBottom: '1.25rem' }}>
          <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.05rem', color: 'var(--calc-purple)' }}>
            {contrib.titulo}
          </h3>
          <p style={{ marginBottom: 0, lineHeight: 1.75 }}>
            {contrib.descricao}
          </p>
        </div>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SIGNIFICADO HISTÓRICO                                          */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>🏛️</span>
        Significado Histórico
      </h2>

      <div className={styles.destaque}>
        {significadoFiloxeno}
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* FONTES                                                         */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>📖</span>
        Fontes
      </h2>

      {fontesFiloxeno.map((fonte) => (
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
