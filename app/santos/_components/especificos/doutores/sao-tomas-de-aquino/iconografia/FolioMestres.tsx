import Image from 'next/image';
import styles from '../../../../../_styles/especificos/doutores/sao-tomas-de-aquino/iconografia/folio.module.css';

export interface CartaoFolio {
  arquivo: string;
  alt: string;
  largura: number;
  altura: number;
  obra: string;
  artista: string;
  data: string;
  local: string;
  descricao: string;
}

interface FolioMestresProps {
  titulo: string;
  subtitulo?: string;
  cartoes: CartaoFolio[];
}

const BASE = '/santos/biografia/doutores/sao-tomas-de-aquino/iconografia/';

export default function FolioMestres({
  titulo,
  subtitulo,
  cartoes,
}: FolioMestresProps) {
  return (
    <div className={styles.folioWrapper}>
      <div className={styles.folioCabecalho}>
        <span className={styles.folioLabel}>Catálogo de Mestres</span>
        <h2 className={styles.folioTitulo}>{titulo}</h2>
        {subtitulo && (
          <p className={styles.folioSubtitulo}>{subtitulo}</p>
        )}
      </div>

      <div className={styles.folioGrade}>
        {cartoes.map((c, i) => (
          <div key={i} className={styles.folioCard}>
            <div className={styles.folioImagemWrapper}>
              <Image
                src={`${BASE}${c.arquivo}`}
                alt={c.alt}
                width={c.largura}
                height={c.altura}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                quality={88}
              />
              <div className={styles.folioMoldura} />
            </div>

            <div className={styles.folioCorpo}>
              <p className={styles.folioObra}>{c.obra}</p>
              <p className={styles.folioArtista}>{c.artista}</p>
              <p className={styles.folioDescricao}>{c.descricao}</p>
              <div className={styles.folioRodape}>
                <span className={styles.folioData}>{c.data}</span>
                <span className={styles.folioLocal}>{c.local}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}