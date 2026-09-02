import type { ReactNode } from 'react';
import Image from 'next/image';
import styles from '../../../../_styles/especificos/apostolos/sao-judas-tadeu/iconografia/ficha.module.css';

interface FichaObraProps {
  src: string;
  alt: string;
  largura: number;
  altura: number;
  titulo: string;
  artista: string;
  data: string;
  tecnica: string;
  localizacao: string;
  dimensoes?: string;
  periodo: string;
  significado: string;
  children: ReactNode;
}

export default function FichaObra({
  src,
  alt,
  largura,
  altura,
  titulo,
  artista,
  data,
  tecnica,
  localizacao,
  dimensoes,
  periodo,
  significado,
  children,
}: FichaObraProps) {
  return (
    <div className={styles.ficha}>
      <div className={styles.fichaImagem}>
        <Image
          src={src}
          alt={alt}
          width={largura}
          height={altura}
          className={styles.fichaImg}
          quality={85}
          sizes="(max-width: 768px) 100vw, 450px"
        />
      </div>

      <div className={styles.fichaConteudo}>
        <h4 className={styles.fichaTitulo}>{titulo}</h4>

        <table className={styles.fichaTabela}>
          <tbody>
            <tr><th>Artista</th><td>{artista}</td></tr>
            <tr><th>Data</th><td>{data}</td></tr>
            <tr><th>Técnica</th><td>{tecnica}</td></tr>
            {dimensoes && <tr><th>Dimensões</th><td>{dimensoes}</td></tr>}
            <tr><th>Localização</th><td>{localizacao}</td></tr>
            <tr><th>Período</th><td>{periodo}</td></tr>
            <tr><th>Significado</th><td>{significado}</td></tr>
          </tbody>
        </table>

        <div className={styles.fichaAnalise}>{children}</div>
      </div>
    </div>
  );
}