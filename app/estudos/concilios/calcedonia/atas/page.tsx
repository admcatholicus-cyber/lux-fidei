// estudos/concilios/calcedonia/atas/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  tabelaSessoes,
  divergenciaNumeracao,
  guiaLeitura,
} from './_data'
import styles from '../calcedonia.module.css'

export const metadata: Metadata = {
  title: 'Atas do Concílio de Calcedônia | Calcedônia | Lux Fidei',
  description:
    'As 16 sessões do Concílio de Calcedônia (8 de outubro a 1 de novembro de 451): tabela-mestra, guia de leitura das atas ACO, numeração grega × latina e links para cada sessão.',
}

export default function AtasPage() {
  return (
    <section className={styles.secao}>
      <h1 className={styles.secaoTitulo}>
        <span className={styles.secaoIcone}>📋</span>
        Atas do Concílio de Calcedônia
      </h1>

      <p className={styles.secaoTexto}>
        As atas (Acta Concilii Chalcedonensis) documentam as 16 sessões do IV Concílio
        Ecumênico, realizadas entre 8 de outubro e 1 de novembro de 451 na Igreja de
        Santa Eufêmia, em Calcedônia. As sessões foram divididas em 6 solenes (fé e dogma)
        e 10 administrativas (governo e disciplina). As paráfrases aqui apresentadas
        seguem a numeração grega (Schwartz, ACO II).
      </p>

      <div className={styles.destaque}>
        <strong>Observação:</strong> Todos os textos desta seção são paráfrases em
        português brasileiro, não traduções literais. Para o texto integral, consulte
        Schwartz (ACO II) ou Price &amp; Gaddis (Liverpool University Press, 2005).
        Itens marcados com &quot;A VERIFICAR&quot; ainda pendem de confirmação em fonte primária.
      </div>

      <hr className={styles.divisor} />

      {/* ═══════════════════════════════════════════ */}
      {/* TABELA-MESTRA DAS SESSÕES                  */}
      {/* ═══════════════════════════════════════════ */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>📊</span>
          Tabela-mestra das sessões
        </h2>

        <div style={{ overflowX: 'auto' }}>
          <table className={styles.tabelaComparativa}>
            <thead>
              <tr>
                <th>#</th>
                <th>Data</th>
                <th>Título</th>
                <th>Tipo</th>
                <th>Presidente</th>
                <th>Destaque</th>
              </tr>
            </thead>
            <tbody>
              {tabelaSessoes.map((s) => (
                <tr key={s.numero}>
                  <td>
                    <Link
                      href={`/estudos/concilios/calcedonia/atas/sessao-${String(s.numero).padStart(2, '0')}`}
                      style={{ color: 'var(--calc-purple-mid)', fontWeight: 700, textDecoration: 'none' }}
                    >
                      {s.numero}
                    </Link>
                  </td>
                  <td>{s.dataCurta}</td>
                  <td>
                    <Link
                      href={`/estudos/concilios/calcedonia/atas/sessao-${String(s.numero).padStart(2, '0')}`}
                      style={{ color: 'var(--calc-purple-mid)', fontWeight: 600, textDecoration: 'none' }}
                    >
                      {s.titulo}
                    </Link>
                  </td>
                  <td>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: '999px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        background: s.tipo === 'solene' ? 'var(--calc-purple)' : 'var(--calc-gold-bg)',
                        color: s.tipo === 'solene' ? '#fff' : 'var(--calc-gold)',
                      }}
                    >
                      {s.tipo}
                    </span>
                  </td>
                  <td style={{ fontSize: '0.85rem' }}>{s.presidente}</td>
                  <td style={{ fontSize: '0.85rem' }}>{s.destaque}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className={styles.divisor} />

      {/* ═══════════════════════════════════════════ */}
      {/* DIVERGÊNCIA DE NUMERAÇÃO                  */}
      {/* ═══════════════════════════════════════════ */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>🔢</span>
          {divergenciaNumeracao.titulo}
        </h2>

        <p className={styles.secaoTexto}>{divergenciaNumeracao.descricao}</p>

        <div className={styles.heresiasGrid}>
          {divergenciaNumeracao.divergencias.map((d, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{d.data}</div>
              <div className={styles.heresiaLider}>
                Grego: {d.grego} · Latina: {d.latina}
              </div>
              <div className={styles.heresiaErro}>{d.explicacao}</div>
            </div>
          ))}
        </div>

        <div className={styles.destaque}>
          {divergenciaNumeracao.notaFinal}
        </div>
      </section>

      <hr className={styles.divisor} />

      {/* ═══════════════════════════════════════════ */}
      {/* GUIA DE LEITURA DAS ATAS ACO               */}
      {/* ═══════════════════════════════════════════ */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>📖</span>
          {guiaLeitura.titulo}
        </h2>

        <p className={styles.secaoTexto}>{guiaLeitura.introducao}</p>

        <div className={styles.heresiasGrid}>
          {guiaLeitura.secoes.map((sec, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{sec.termo}</div>
              <div className={styles.heresiaErro}>{sec.definicao}</div>
            </div>
          ))}
        </div>

        <div className={styles.destaque}>
          {guiaLeitura.observacaoFinal}
        </div>
      </section>

      <hr className={styles.divisor} />

      {/* ═══════════════════════════════════════════ */}
      {/* LINKS PARA CADA SESSÃO                    */}
      {/* ═══════════════════════════════════════════ */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>🔗</span>
          Acessar cada sessão
        </h2>

        <div className={styles.heresiasGrid}>
          {tabelaSessoes.map((s) => (
            <Link
              key={s.numero}
              href={`/estudos/concilios/calcedonia/atas/sessao-${String(s.numero).padStart(2, '0')}`}
              className={styles.heresiaCard}
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              <div className={styles.heresiaNome}>
                Sessão {s.numero} — {s.dataCurta}
              </div>
              <div className={styles.heresiaLider}>{s.titulo}</div>
              <div className={styles.heresiaErro}>{s.destaque}</div>
            </Link>
          ))}
        </div>
      </section>

      <hr className={styles.divisor} />

      {/* ═══════════════════════════════════════════ */}
      {/* NAVEGAÇÃO                                 */}
      {/* ═══════════════════════════════════════════ */}
      <div className={styles.navLinks}>
        <Link href="/estudos/concilios/calcedonia" className={styles.navLink}>
          ← Concílio de Calcedônia
        </Link>
        <Link href="/estudos/concilios/calcedonia/atas/sessao-01" className={styles.navLink}>
          Primeira sessão →
        </Link>
      </div>
    </section>
  )
}
