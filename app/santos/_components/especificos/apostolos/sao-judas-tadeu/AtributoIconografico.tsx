import type { ReactNode } from 'react';
import Image from 'next/image';
import styles from '../../../../_styles/especificos/apostolos/sao-judas-tadeu/iconografia/atributo.module.css';

interface AtributoIconograficoProps {
  icone: string;
  nome: string;
  src?: string;
  alt?: string;
  largura?: number;
  altura?: number;
  children: ReactNode;
}

export default function AtributoIconografico({
  icone,
  nome,
  src,
  alt,
  largura,
  altura,
  children,
}: AtributoIconograficoProps) {
  return (
    <div className={styles.atributo}>
      <div className={styles.atributoHeader}>
        <span className={styles.atributoIcone}>{icone}</span>
        <h4 className={styles.atributoNome}>{nome}</h4>
      </div>

      <div className={styles.atributoCorpo}>
        {src && largura && altura && (
          <div className={styles.atributoImagemWrap}>
            <Image
              src={src}
              alt={alt || nome}
              width={largura}
              height={altura}
              className={styles.atributoImagem}
              quality={80}
              sizes="(max-width: 768px) 100vw, 280px"
            />
          </div>
        )}
        <div className={styles.atributoTexto}>{children}</div>
      </div>
    </div>
  );
}