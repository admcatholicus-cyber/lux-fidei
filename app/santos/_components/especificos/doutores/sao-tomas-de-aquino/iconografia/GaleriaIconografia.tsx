import Image from 'next/image';
import styles from '../../../../../_styles/especificos/doutores/sao-tomas-de-aquino/iconografia/galeria.module.css';

/* ── Tipos ── */
export interface ObraGaleria {
  numero: number;
  arquivo: string;
  alt: string;
  nome: string;
  artista: string;
  epoca: string;
  largura: number;
  altura: number;
  tipoCelula?:
    | 'celulaPrincipal'
    | 'celulaSecundaria'
    | 'celulaTerciaria'
    | 'celulaGrandeDireita'
    | 'celulaPanoramica'
    | 'celulaMedia'
    | 'celulaLateral';
}

export type LayoutGrade =
  | 'gradeLayoutA'
  | 'gradeLayoutB'
  | 'gradeLayoutC'
  | 'gradeLayoutD'
  | 'gradeLayoutE'
  | 'gradeLayoutF';

interface GrupoGaleria {
  layout: LayoutGrade;
  obras: ObraGaleria[];
}

interface GaleriaIconografiaProps {
  grupos: GrupoGaleria[];
}

const BASE = '/santos/biografia/doutores/sao-tomas-de-aquino/iconografia/';

/* ── Componente ── */
export default function GaleriaIconografia({ grupos }: GaleriaIconografiaProps) {
  return (
    <>
      {grupos.map((grupo, gi) => (
        <div
          key={gi}
          className={`${styles.gradeIconografia} ${styles[grupo.layout]}`}
        >
          {grupo.obras.map((obra) => {
            const tipoCelula = obra.tipoCelula ?? 'celulaMedia';
            return (
              <div
                key={obra.numero}
                className={`${styles.celulaImagem} ${styles[tipoCelula]}`}
              >
                <Image
                  src={`${BASE}${obra.arquivo}`}
                  alt={obra.alt}
                  width={obra.largura}
                  height={obra.altura}
                  className={styles.imagemObra}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={88}
                />
                <div className={styles.celulaVelum} />
                <div className={styles.lacreNumero}>
                  {String(obra.numero).padStart(2, '0')}
                </div>
                <div className={styles.celulaInfo}>
                  <p className={styles.celulaEpoca}>{obra.epoca}</p>
                  <p className={styles.celulaNome}>{obra.nome}</p>
                  <p className={styles.celulaArtista}>{obra.artista}</p>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
}