// estudos/concilios/calcedonia/personagens/_PersonagemTemplate.tsx
import Link from 'next/link';
import type { Metadata } from 'next';
import type { PersonagemSecao } from './_personagens';
import styles from '../calcedonia.module.css';

interface Props {
  personagem: PersonagemSecao;
}

export function metadataFor(p: PersonagemSecao): Metadata {
  return {
    title: `${p.nome} | Personagens | Calcedônia | Lux Fidei`,
    description: `${p.titulo} (${p.datas}). Biografia, papel no Concílio de Calcedônia e legado.`,
  };
}

export default function PersonagemTemplate({ personagem: p }: Props) {
  return (
    <section className={styles.secao}>
      {/* FICHA */}
      <h1 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>👤</span>
        {p.nome}
      </h1>

      <div className={styles.fichaRapida}>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Nome(s)</div>
          <div className={styles.fichaValor}>
            {p.nome}
            <br />
            {p.nomeGrego && <small>{p.nomeGrego}</small>}
            {p.nomeLatim && <small>{p.nomeLatim}</small>}
          </div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Título</div>
          <div className={styles.fichaValor}>{p.titulo}</div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Datas</div>
          <div className={styles.fichaValor}>{p.datas}</div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Origem</div>
          <div className={styles.fichaValor}>{p.origem}</div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Posição</div>
          <div className={styles.fichaValor} style={{
            color: p.lado === 'calcedoniano'
              ? '#2d6a4f'
              : p.lado === 'monofisita'
                ? 'var(--calc-red)'
                : 'var(--calc-text-muted)',
          }}>
            {p.lado === 'calcedoniano'
              ? 'Calcedoniano'
              : p.lado === 'monofisita'
                ? 'Monofisita'
                : 'Neutro / Alheio'}
          </div>
        </div>
      </div>

      <hr className={styles.divisor} />

      {/* BIOGRAFIA */}
      <h2 className={styles.secaoTitulo} style={{ fontSize: '1.3rem' }}>
        Biografia
      </h2>
      <p className={styles.secaoTexto}>{p.biografia}</p>

      <hr className={styles.divisor} />

      {/* PAPEL NO CONCÍLIO */}
      <h2 className={styles.secaoTitulo} style={{ fontSize: '1.3rem' }}>
        Papel no Concílio
      </h2>
      <p className={styles.secaoTexto}>{p.papelNoConcilio}</p>

      <hr className={styles.divisor} />

      {/* DEPOIS DE 451 */}
      <h2 className={styles.secaoTitulo} style={{ fontSize: '1.3rem' }}>
        Depois de 451
      </h2>
      <p className={styles.secaoTexto}>{p.depois451}</p>

      <hr className={styles.divisor} />

      {/* FONTES */}
      <h2 className={styles.secaoTitulo} style={{ fontSize: '1.3rem' }}>
        Fontes
      </h2>
      <p
        className={styles.secaoTexto}
        style={{ fontSize: '0.92rem', fontStyle: 'italic', color: 'var(--calc-text-muted)' }}
      >
        {p.fontes}
      </p>

      {/* NAVEGAÇÃO */}
      <div className={styles.navLinks} style={{ marginTop: '2.5rem' }}>
        <Link
          href="/estudos/concilios/calcedonia/personagens"
          className={styles.navLink}
        >
          ← Voltar ao índice de personagens
        </Link>
      </div>
    </section>
  );
}
