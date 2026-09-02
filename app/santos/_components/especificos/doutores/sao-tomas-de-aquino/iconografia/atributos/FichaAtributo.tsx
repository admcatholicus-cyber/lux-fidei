import Image from 'next/image';
import styles from '../../../../../../_styles/especificos/doutores/sao-tomas-de-aquino/iconografia/atributos/ficha.module.css';

interface FichaAtributoProps {
  ordinal: string;
  simbolo: string;
  suprat: string;
  nome: string;
  nomeLatim?: string;
  arquivo: string;
  alt: string;
  largura: number;
  altura: number;
  obraReferencia: string;
  descricao: string;
  boxOrigem?: {
    label: string;
    texto: string;
  };
  boxUso?: {
    label: string;
    texto: string;
  };
  referencia?: {
    texto: string;
    fonte: string;
  };
  invertida?: boolean;
}

const BASE = '/santos/biografia/doutores/sao-tomas-de-aquino/iconografia/atributos/';

export default function FichaAtributo({
  ordinal,
  simbolo,
  suprat,
  nome,
  nomeLatim,
  arquivo,
  alt,
  largura,
  altura,
  obraReferencia,
  descricao,
  boxOrigem,
  boxUso,
  referencia,
  invertida = false,
}: FichaAtributoProps) {
  return (
    <div
      className={`${styles.fichaWrapper}${invertida ? ' ' + styles.invertida : ''}`}
    >
      {/* Imagem */}
      <div className={styles.fichaImagem}>
        <Image
          src={`${BASE}${arquivo}`}
          alt={alt}
          width={largura}
          height={altura}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          quality={90}
        />

        <div className={styles.fichaEtiqueta}>
          <span className={styles.fichaEtiquetaLabel}>Detalhe iconográfico</span>
          <span className={styles.fichaEtiquetaObra}>{obraReferencia}</span>
        </div>

        <div className={styles.fichaSimboloGrande}>{simbolo}</div>
      </div>

      {/* Texto */}
      <div className={styles.fichaTexto}>
        <span className={styles.fichaOrdinal}>{ordinal}</span>

        <p className={styles.fichaSuprat}>{suprat}</p>

        {nomeLatim && (
          <p className={styles.fichaNomeLatim}>{nomeLatim}</p>
        )}
        <h3 className={styles.fichaNome}>{nome}</h3>

        <div className={styles.fichaDivisor}>
          <span className={styles.fichaDivisorSimbolo}>✦</span>
        </div>

        <p className={styles.fichaDescricao}>{descricao}</p>

        {(boxOrigem || boxUso) && (
          <div className={styles.fichaBoxes}>
            {boxOrigem && (
              <div className={styles.fichaBox}>
                <span className={styles.fichaBoxLabel}>{boxOrigem.label}</span>
                <p className={styles.fichaBoxTexto}>{boxOrigem.texto}</p>
              </div>
            )}
            {boxUso && (
              <div className={styles.fichaBox}>
                <span className={styles.fichaBoxLabel}>{boxUso.label}</span>
                <p className={styles.fichaBoxTexto}>{boxUso.texto}</p>
              </div>
            )}
          </div>
        )}

        {referencia && (
          <div className={styles.fichaReferencia}>
            {referencia.texto}
            <span className={styles.fichaReferenciaFonte}>
              {referencia.fonte}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}