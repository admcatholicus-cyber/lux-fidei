import Image from 'next/image';
import styles from '../../../../../_styles/especificos/doutores/sao-tomas-de-aquino/iconografia/painel.module.css';

export interface AtributoIconografico {
  icone: string;
  label: string;
}

interface PainelObraProps {
  numero: number;
  arquivo: string;
  alt: string;
  largura: number;
  altura: number;
  nome: string;
  artista: string;
  epoca: string;
  local?: string;
  tecnica?: string;
  descricao: string;
  atributos?: AtributoIconografico[];
  invertido?: boolean;
}

const BASE = '/santos/biografia/doutores/sao-tomas-de-aquino/iconografia/';

export default function PainelObra({
  numero,
  arquivo,
  alt,
  largura,
  altura,
  nome,
  artista,
  epoca,
  local,
  tecnica,
  descricao,
  atributos = [],
  invertido = false,
}: PainelObraProps) {
  return (
    <div
      className={`${styles.painelWrapper}${invertido ? ' ' + styles.invertido : ''}`}
    >
      {/* ── Lado imagem ── */}
      <div className={styles.painelImagem}>
        <Image
          src={`${BASE}${arquivo}`}
          alt={alt}
          width={largura}
          height={altura}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          quality={90}
        />
        <span className={styles.painelMarcaDagua}>Lux Fidei · Iconografia</span>
      </div>

      {/* ── Lado texto ── */}
      <div className={styles.painelTexto}>
        <span className={styles.painelNumero}>
          {String(numero).padStart(2, '0')}
        </span>

        <p className={styles.painelEpoca}>{epoca}</p>
        <h3 className={styles.painelTitulo}>{nome}</h3>
        <p className={styles.painelArtista}>{artista}</p>

        <div className={styles.painelDivisor} />

        {atributos.length > 0 && (
          <div className={styles.painelAtributos}>
            {atributos.map((a, i) => (
              <span key={i} className={styles.painelAtributo}>
                <span>{a.icone}</span>
                {a.label}
              </span>
            ))}
          </div>
        )}

        <p className={styles.painelDescricao}>{descricao}</p>

        <div className={styles.painelMetadados}>
          {tecnica && (
            <div className={styles.painelMeta}>
              <span className={styles.painelMetaLabel}>Técnica</span>
              <span className={styles.painelMetaValor}>{tecnica}</span>
            </div>
          )}
          {local && (
            <div className={styles.painelMeta}>
              <span className={styles.painelMetaLabel}>Localização</span>
              <span className={styles.painelMetaValor}>{local}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}