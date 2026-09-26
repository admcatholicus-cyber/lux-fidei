// estudos/concilios/calcedonia/teologia/monotelismo/page.tsx
import type { Metadata } from 'next';
import {
  introMonotelismo,
  sergiusProfile,
  ecthesis638,
  typos648,
  laterano649,
  maximoMartinho,
  cploIII,
  contribuicaoHonorio,
  consequenciasMonotelismo,
  fontesMonotelismo,
} from './_data';
import styles from '../../calcedonia.module.css';

export const metadata: Metadata = {
  title: 'Monotelismo | Calcedônia | Lux Fidei',
  description:
    'Monotelismo: Sérgio, Ecthesis 638, Typos 648, Latrão 649, Máximo+Martinho, Cplo III — de duas vontades à condenação definitiva.',
};

export default function MonotelismoPage() {
  return (
    <section className={styles.secao}>
      <h1 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>✝️</span>
        O Monotelismo e a Controvérsia das Vontades
      </h1>

      <p className={styles.secaoTexto}>{introMonotelismo}</p>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SÉRGIO DE CONSTANTINOPLA                                       */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>👤</span>
        {sergiusProfile.nome}
      </h2>

      <div className={styles.fichaRapida}>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Patriarcado</div>
          <div className={styles.fichaValor}>{sergiusProfile.patriarcado}</div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Local</div>
          <div className={styles.fichaValor}>{sergiusProfile.local}</div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Título</div>
          <div className={styles.fichaValor}>{sergiusProfile.titulo}</div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* ECTHESIS 638                                                   */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>📜</span>
        {ecthesis638.titulo}
      </h2>

      <div className={styles.fichaRapida}>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Autor</div>
          <div className={styles.fichaValor}>{ecthesis638.autor}</div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Data</div>
          <div className={styles.fichaValor}>{ecthesis638.data}</div>
        </div>
      </div>

      {ecthesis638.conteudo.split('\n\n').map((paragrafo, i) => (
        <p key={i} className={styles.secaoTexto}>
          {paragrafo}
        </p>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* TYPOS 648                                                      */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <hr className={styles.divisor} />

      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>📋</span>
        {typos648.titulo}
      </h2>

      <div className={styles.fichaRapida}>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Autor</div>
          <div className={styles.fichaValor}>{typos648.autor}</div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Data</div>
          <div className={styles.fichaValor}>{typos648.data}</div>
        </div>
      </div>

      {typos648.conteudo.split('\n\n').map((paragrafo, i) => (
        <p key={i} className={styles.secaoTexto}>
          {paragrafo}
        </p>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CONCÍLIO DE LATRÃO 649                                         */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <hr className={styles.divisor} />

      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>🏛️</span>
        {laterano649.titulo}
      </h2>

      <div className={styles.fichaRapida}>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Data</div>
          <div className={styles.fichaValor}>{laterano649.data}</div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Local</div>
          <div className={styles.fichaValor}>{laterano649.local}</div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Presidente</div>
          <div className={styles.fichaValor}>{laterano649.presidente}</div>
        </div>
      </div>

      {laterano649.decisoes.split('\n\n').map((paragrafo, i) => (
        <p key={i} className={styles.secaoTexto}>
          {paragrafo}
        </p>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* MÁXIMO E MARTINHO                                              */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <hr className={styles.divisor} />

      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>⚔️</span>
        {maximoMartinho.titulo}
      </h2>

      <div className={styles.blocoDefinicao} style={{ marginBottom: '1.25rem' }}>
        <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.05rem', color: 'var(--calc-purple)' }}>
          {maximoMartinho.maximo.nome}
        </h3>
        <p style={{ marginBottom: 0, lineHeight: 1.75 }}>
          {maximoMartinho.maximo.contribuicao}
        </p>
      </div>

      <div className={styles.blocoDefinicao} style={{ marginBottom: '1.25rem' }}>
        <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.05rem', color: 'var(--calc-purple)' }}>
          {maximoMartinho.martinho.nome}
        </h3>
        <p style={{ marginBottom: 0, lineHeight: 1.75 }}>
          {maximoMartinho.martinho.contribuicao}
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* TERCEIRO CONCÍLIO DE CONSTANTINOPLA (681)                       */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <hr className={styles.divisor} />

      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>⚖️</span>
        {cploIII.titulo}
      </h2>

      <div className={styles.fichaRapida}>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Data</div>
          <div className={styles.fichaValor}>{cploIII.data}</div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Imperador</div>
          <div className={styles.fichaValor}>{cploIII.imperador}</div>
        </div>
      </div>

      {cploIII.decisoes.map((decisao) => (
        <div key={decisao.tema} className={styles.blocoDefinicao} style={{ marginBottom: '1.25rem' }}>
          <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.05rem', color: 'var(--calc-gold)' }}>
            {decisao.tema}
          </h3>
          <p style={{ marginBottom: 0, lineHeight: 1.75 }}>
            {decisao.conteudo}
          </p>
        </div>
      ))}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CONTRIBUIÇÃO DE HONÓRIO                                        */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <hr className={styles.divisor} />

      <h2 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>👤</span>
        A Contribuição de Honório I
      </h2>

      {contribuicaoHonorio.split('\n\n').map((paragrafo, i) => (
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
        Consequências Históricas
      </h2>

      {consequenciasMonotelismo.split('\n\n').map((paragrafo, i) => (
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

      {fontesMonotelismo.map((fonte) => (
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
