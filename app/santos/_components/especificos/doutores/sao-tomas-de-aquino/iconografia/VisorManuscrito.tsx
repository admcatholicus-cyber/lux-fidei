import Image from 'next/image';
import styles from '../../../../../_styles/especificos/doutores/sao-tomas-de-aquino/iconografia/visor.module.css';

export interface CenaManuscrito {
  ordinal: string;
  arquivo: string;
  alt: string;
  largura: number;
  altura: number;
  titulo: string;
  subtexto: string;
  descricao: string;
  chip?: string;
}

interface VisorManuscritoProps {
  cenas: CenaManuscrito[];
}

const BASE = '/santos/biografia/doutores/sao-tomas-de-aquino/iconografia/';

export default function VisorManuscrito({ cenas }: VisorManuscritoProps) {
  return (
    <div className={styles.visorWrapper}>
      <div className={styles.visorTrilho}>
        {cenas.map((cena, i) => (
          <div key={i} className={styles.visorCena}>
            <Image
              src={`${BASE}${cena.arquivo}`}
              alt={cena.alt}
              width={cena.largura}
              height={cena.altura}
              className={styles.imagemCena}
              quality={88}
            />
            <div className={styles.visorVelum} />

            {cena.chip && (
              <div className={styles.visorChip}>{cena.chip}</div>
            )}

            <div className={styles.visorLegenda}>
              <span className={styles.visorOrdinal}>{cena.ordinal}</span>
              <p className={styles.visorTituloObra}>{cena.titulo}</p>
              <p className={styles.visorSubtexto}>{cena.subtexto}</p>
              <p className={styles.visorDescricaoCena}>{cena.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}