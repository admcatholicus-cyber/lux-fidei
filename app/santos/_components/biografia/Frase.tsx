'use client';

import { useState, ReactNode, Children } from 'react';
import styles from '../../_styles/biografia.module.css';
import { useAntologia } from './Antologia';

type FraseProps = {
  numero: number;
  original?: string;
  fonte?: string;
  children: ReactNode;
};

/**
 * Extrai recursivamente o texto puro de qualquer estrutura de children.
 * Usado para permitir que a busca funcione mesmo quando o conteúdo
 * contém elementos aninhados (ex.: <em>, <strong>, etc.).
 */
function extrairTexto(children: ReactNode): string {
  let texto = '';
  Children.forEach(children, (child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      texto += String(child);
    } else if (child && typeof child === 'object' && 'props' in child) {
      // @ts-expect-error acesso dinâmico a props.children
      texto += extrairTexto(child.props?.children);
    }
  });
  return texto;
}

export default function Frase({ numero, original, fonte, children }: FraseProps) {
  const [detalheAberto, setDetalheAberto] = useState<'original' | 'fonte' | null>(null);
  const { busca, fraseCombina } = useAntologia();

  // ─── Filtro de busca ──────────────────────────────────────────
  const textoCompleto = [extrairTexto(children), original ?? '', fonte ?? '']
    .join(' ')
    .trim();

  if (!fraseCombina(textoCompleto)) return null;

  // ─── Estado do botão (bolinha) ────────────────────────────────
  const temOriginal = Boolean(original);
  const temFonte = Boolean(fonte);
  const tipoBotao: 'original' | 'fonte' | null = temOriginal
    ? 'original'
    : temFonte
    ? 'fonte'
    : null;

  const alternarDetalhe = () => {
    if (!tipoBotao) return;
    setDetalheAberto((atual) => (atual === tipoBotao ? null : tipoBotao));
  };

  // ─── Classes dinâmicas ────────────────────────────────────────
  const classeFrase = [
    styles.antFrase,
    busca ? styles.antFraseMatch : '',
  ]
    .filter(Boolean)
    .join(' ');

  const classeBotao = [
    styles.antFraseBtn,
    tipoBotao === 'original' ? styles.antFraseBtnOriginal : '',
    tipoBotao === 'fonte' ? styles.antFraseBtnFonte : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classeFrase}>
      {/* Coluna esquerda: número + bolinha */}
      <div className={styles.antFraseMeta}>
        <span className={styles.antFraseNum}>{numero}</span>
        {tipoBotao && (
          <button
            type="button"
            className={classeBotao}
            onClick={alternarDetalhe}
            aria-label={tipoBotao === 'original' ? 'Ver original em francês' : 'Ver fonte'}
            aria-expanded={detalheAberto === tipoBotao}
          />
        )}
      </div>

      {/* Coluna direita: texto da frase + detalhe expandido */}
      <div className={styles.antFraseConteudo}>
        {/*
          IMPORTANTE: usamos <div> em vez de <p> porque o MDX envolve
          automaticamente o texto em <p>, e um <p> dentro de <p> é HTML
          inválido — o navegador quebra a estrutura e as aspas ❝ ❞
          ficam desalinhadas do texto.
        */}
        <div className={styles.antFraseTexto}>{children}</div>

        {detalheAberto === 'original' && temOriginal && (
          <div className={`${styles.antFraseDetalhe} ${styles.antFraseDetalheOriginal}`}>
            <span className={styles.antFraseDetalheRotulo}>Original (francês)</span>
            <p className={styles.antFraseDetalheOriginalTexto}>{original}</p>
            {fonte && <p className={styles.antFraseDetalheFonteTexto}>{fonte}</p>}
          </div>
        )}

        {detalheAberto === 'fonte' && temFonte && !temOriginal && (
          <div className={`${styles.antFraseDetalhe} ${styles.antFraseDetalheFonte}`}>
            <span className={styles.antFraseDetalheRotulo}>Fonte</span>
            <p className={styles.antFraseDetalheFonteTexto}>{fonte}</p>
          </div>
        )}
      </div>
    </div>
  );
}