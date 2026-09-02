import type { ReactNode } from 'react';
import Image from 'next/image';
import styles from '../../../../_styles/especificos/apostolos/sao-judas-tadeu/iconografia/comparacao.module.css';

interface ItemComparacao {
  src: string;
  alt: string;
  largura: number;
  altura: number;
  legenda: string;
}

interface ComparacaoVisualProps {
  titulo: string;
  itens: ItemComparacao[];
  children: ReactNode;
}

export default function ComparacaoVisual({ titulo, itens, children }: ComparacaoVisualProps) {
  return (
    <div className={styles.comparacao}>
      <h4 className={styles.comparacaoTitulo}>{titulo}</h4>

      <div className={styles.comparacaoGrid}>
        {itens.map((item, i) => (
          <figure key={i} className={styles.comparacaoItem}>
            <Image
              src={item.src}
              alt={item.alt}
              width={item.largura}
              height={item.altura}
              className={styles.comparacaoImagem}
              quality={80}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <figcaption className={styles.comparacaoLegenda}>{item.legenda}</figcaption>
          </figure>
        ))}
      </div>

      <div className={styles.comparacaoTexto}>{children}</div>
    </div>
  );
}