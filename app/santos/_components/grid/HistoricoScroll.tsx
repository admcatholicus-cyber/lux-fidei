'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../../santos.module.css';
import type { HistoricoItem } from '../../_types/santo';

interface Props {
  historico: HistoricoItem[];
  onLimpar: () => void;
}

export default function HistoricoScroll({ historico, onLimpar }: Props) {
  if (historico.length === 0) return null;

  return (
    <section className={styles.historicoSection} aria-label="Continue lendo">
      <div className={styles.historicoHeader}>
        <h2 className={styles.historicoTitulo}>Continue lendo</h2>
        <button
          type="button"
          className={styles.historicoLimpar}
          onClick={onLimpar}
        >
          Limpar histórico
        </button>
      </div>
      <div className={styles.historicoScroll}>
        {historico.map((item) => (
          <HistCardItem key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}

function HistCardItem({ item }: { item: HistoricoItem }) {
  const [imgErro, setImgErro] = useState(false);

  const href = item.ultimaAba
    ? `/santos/${item.pasta}/${item.slug}/${item.ultimaAba}`
    : `/santos/${item.pasta}/${item.slug}`;

  return (
    <Link
      href={href}
      className={`${styles.histCard} ${item.lido ? styles.histCardLido : ''}`}
    >
      <div className={styles.histProgressoBarra}>
        <div
          className={styles.histProgressoFill}
          style={{ width: `${item.progresso}%` }}
        />
      </div>

      <div className={styles.histImgWrap}>
        {!imgErro ? (
          <Image
            src={item.imagemCard}
            alt={item.nome}
            fill
            sizes="220px"
            style={{ objectFit: 'cover' }}
            onError={() => setImgErro(true)}
          />
        ) : (
          <div className={styles.cardImgPlaceholder} aria-hidden="true">
            ✦
          </div>
        )}
        <span className={styles.histBadgeLido}>✓ LIDO</span>
      </div>

      <div className={styles.histInfo}>
        <p className={styles.histNome}>{item.nome}</p>
        <p className={styles.histPct}>
          {item.lido ? '✓ Concluído' : `${item.progresso}% lido`}
        </p>
      </div>
    </Link>
  );
}