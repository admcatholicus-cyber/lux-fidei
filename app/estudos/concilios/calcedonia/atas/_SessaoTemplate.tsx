// estudos/concilios/calcedonia/atas/_SessaoTemplate.tsx
'use client'

import Link from 'next/link'
import type { SessaoCompleta } from './_sessoes'
import styles from '../calcedonia.module.css'

interface SessaoTemplateProps {
  sessao: SessaoCompleta;
}

export function SessaoTemplate({ sessao }: SessaoTemplateProps) {
  return (
    <div>
      {/* ═══════ FICHA DA SESSÃO ═══════ */}
      <div className={styles.fichaRapida}>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Sessão</div>
          <div className={styles.fichaValor}>
            {sessao.numero}ª sessão
            <br />
            <small>{sessao.numero <= 6 ? 'Solene' : 'Administrativa'}</small>
          </div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Data</div>
          <div className={styles.fichaValor}>{sessao.data}</div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Presidência</div>
          <div className={styles.fichaValor}>
            <small>{sessao.presidencia}</small>
          </div>
        </div>
        <div className={styles.fichaCard}>
          <div className={styles.fichaLabel}>Local</div>
          <div className={styles.fichaValor}>
            <small>{sessao.local}</small>
          </div>
        </div>
      </div>

      {/* ═══════ PRESENÇAS ═══════ */}
      <div className={styles.destaque} style={{ textAlign: 'left', fontStyle: 'normal' }}>
        <strong>Presenças:</strong> {sessao.presencas}
      </div>

      {/* ═══════ DOCUMENTOS LIDOS ═══════ */}
      {sessao.documentosLidos && sessao.documentosLidos.length > 0 && (
        <section className={styles.secao}>
          <h2 className={styles.secaoTitulo}>
            <span className={styles.secaoIcone}>📜</span>
            Documentos lidos nesta sessão
          </h2>
          <ul className={styles.resultadosLista}>
            {sessao.documentosLidos.map((doc, i) => (
              <li key={i}>{doc}</li>
            ))}
          </ul>
        </section>
      )}

      <hr className={styles.divisor} />

      {/* ═══════ ORDEM DO DIA ═══════ */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>📋</span>
          Ordem do dia
        </h2>
        <ul className={styles.resultadosLista}>
          {sessao.decisoes.map((dec, i) => (
            <li key={i}>{dec}</li>
          ))}
        </ul>
      </section>

      <hr className={styles.divisor} />

      {/* ═══════ RELATO (PARÁFRASE) ═══════ */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>📖</span>
          Relato
        </h2>
        {sessao.relato.split('\n\n').map((paragrafo, i) => (
          <p key={i} className={styles.secaoTexto}>
            {paragrafo}
          </p>
        ))}
      </section>

      <hr className={styles.divisor} />

      {/* ═══════ MOMENTOS-CHAVE ═══════ */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>✦</span>
          Momentos-chave
        </h2>
        <div className={styles.presidentesLista}>
          {sessao.momentos.map((momento, i) => (
            <div key={i} className={styles.presidenteItem}>
              <div className={styles.presidenteFase}>#{i + 1}</div>
              <div className={styles.presidenteInfo}>
                <p>{momento}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className={styles.divisor} />

      {/* ═══════ FONTES ═══════ */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>📚</span>
          Fontes
        </h2>
        <ul className={styles.resultadosLista}>
          {sessao.fontes.map((fonte, i) => (
            <li key={i}>{fonte}</li>
          ))}
        </ul>
      </section>

      <hr className={styles.divisor} />

      {/* ═══════ NAVEGAÇÃO ANTERIOR / PRÓXIMA ═══════ */}
      <div className={styles.navLinks}>
        {sessao.anterior ? (
          <Link
            href={`/estudos/concilios/calcedonia/atas/${sessao.anterior.slug}`}
            className={styles.navLink}
          >
            ← Sessão {sessao.anterior.numero}: {sessao.anterior.titulo}
          </Link>
        ) : (
          <Link
            href="/estudos/concilios/calcedonia/atas"
            className={styles.navLink}
          >
            ← Voltar às Atas
          </Link>
        )}

        <Link
          href="/estudos/concilios/calcedonia/atas"
          className={styles.navLink}
          style={{ background: 'linear-gradient(135deg, var(--calc-gold) 0%, var(--calc-gold-light) 100%)' }}
        >
          📋 Todas as sessões
        </Link>

        {sessao.proximo ? (
          <Link
            href={`/estudos/concilios/calcedonia/atas/${sessao.proximo.slug}`}
            className={styles.navLink}
          >
            Sessão {sessao.proximo.numero}: {sessao.proximo.titulo} →
          </Link>
        ) : (
          <Link
            href="/estudos/concilios/calcedonia"
            className={styles.navLink}
          >
            Voltar ao Concílio →
          </Link>
        )}
      </div>
    </div>
  );
}
