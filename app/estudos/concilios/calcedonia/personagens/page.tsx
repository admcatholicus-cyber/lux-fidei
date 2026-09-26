// estudos/concilios/calcedonia/personagens/page.tsx
'use client'

import { useState } from 'react';
import Link from 'next/link';
import { personagensSecao, type LadoCalcedonia } from './_personagens';
import styles from '../calcedonia.module.css';

const FILTROS: { valor: LadoCalcedonia | 'todos'; rotulo: string }[] = [
  { valor: 'todos', rotulo: 'Todos' },
  { valor: 'calcedoniano', rotulo: 'Calcedonianos' },
  { valor: 'monofisita', rotulo: 'Monofisitas' },
  { valor: 'neutro', rotulo: 'Neutros' },
];

export default function PersonagensPage() {
  const [filtro, setFiltro] = useState<LadoCalcedonia | 'todos'>('todos');

  const filtrados = filtro === 'todos'
    ? personagensSecao
    : personagensSecao.filter((p) => p.lado === filtro);

  return (
    <section className={styles.secao}>
      <h1 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>🎭</span>
        Personagens de Calcedônia
      </h1>

      <p className={styles.secaoTexto}>
        Vinte figuras que moldaram o Concílio de Calcedônia (451) e o cisma que
        dividiu a cristandade em duas grandes famílias eclesiais. Navegue pelas
        biografias, pelos papéis no concílio e pelo destino de cada um deles
        após a Definição.
      </p>

      {/* FILTROS */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
          margin: '1.5rem 0',
        }}
      >
        {FILTROS.map((f) => (
          <button
            key={f.valor}
            onClick={() => setFiltro(f.valor)}
            style={{
              background:
                filtro === f.valor
                  ? 'linear-gradient(135deg, var(--calc-purple) 0%, var(--calc-purple-mid) 100%)'
                  : '#fff',
              color: filtro === f.valor ? '#fff' : 'var(--calc-purple)',
              border: `1px solid ${filtro === f.valor ? 'var(--calc-purple)' : 'var(--calc-gold-border)'}`,
              borderRadius: '999px',
              padding: '0.5rem 1.25rem',
              fontFamily: 'Georgia, serif',
              fontSize: '0.92rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {f.rotulo}
            {f.valor !== 'todos' && (
              <span style={{ marginLeft: '0.35rem', opacity: 0.7 }}>
                ({personagensSecao.filter((p) => p.lado === f.valor).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* GRID DE PERSONAGENS */}
      <div className={styles.heresiasGrid}>
        {filtrados.map((p) => (
          <Link
            key={p.slug}
            href={`/estudos/concilios/calcedonia/personagens/${p.slug}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className={styles.personagemCard}>
              <div>
                <div className={styles.personagemNome}>{p.nome}</div>
                {p.nomeGrego && (
                  <div className={styles.personagemGrego}>{p.nomeGrego}</div>
                )}
                <div className={styles.personagemMeta}>
                  {p.titulo}
                  <br />
                  {p.datas}
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    background:
                      p.lado === 'calcedoniano'
                        ? '#eef6ee'
                        : p.lado === 'monofisita'
                          ? 'var(--calc-red-light)'
                          : '#f0f0f0',
                    color:
                      p.lado === 'calcedoniano'
                        ? '#2d6a4f'
                        : p.lado === 'monofisita'
                          ? 'var(--calc-red)'
                          : 'var(--calc-text-muted)',
                    marginTop: '0.5rem',
                  }}
                >
                  {p.lado === 'calcedoniano'
                    ? 'Calcedoniano'
                    : p.lado === 'monofisita'
                      ? 'Monofisita'
                      : 'Neutro'}
                </div>
              </div>
              <div
                className={styles.personagemPapel}
                style={{ marginTop: '0.75rem', fontSize: '0.88rem' }}
              >
                {p.papelNoConcilio.length > 180
                  ? p.papelNoConcilio.substring(0, 180) + '…'
                  : p.papelNoConcilio}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* NAVEGAÇÃO INFERIOR */}
      <div className={styles.navLinks} style={{ marginTop: '2.5rem' }}>
        <Link
          href="/estudos/concilios/calcedonia"
          className={styles.navLink}
        >
          ← Voltar à página principal
        </Link>
      </div>
    </section>
  );
}
