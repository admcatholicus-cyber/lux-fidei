import Image from 'next/image';
import styles from '../../../../../_styles/especificos/doutores/sao-tomas-de-aquino/iconografia/cronologia.module.css';

export interface ItemCronologia {
  arquivo: string;
  alt: string;
  largura: number;
  altura: number;
  data: string;
  nome: string;
  info: string;
  texto: string;
}

interface CronologiaVisualProps {
  titulo: string;
  intro: string;
  itens: ItemCronologia[];
}

const BASE = '/santos/biografia/doutores/sao-tomas-de-aquino/iconografia/';

export default function CronologiaVisual({
  titulo,
  intro,
  itens,
}: CronologiaVisualProps) {
  return (
    <div className={styles.cronologiaWrapper}>
      <div className={styles.cronologiaCabecalho}>
        <span className={styles.cronologiaLabel}>Linha do Tempo Visual</span>
        <h2 className={styles.cronologiaTitulo}>{titulo}</h2>
        <p className={styles.cronologiaIntro}>{intro}</p>
      </div>

      <div className={styles.cronologiaTrilho}>
        {itens.map((item, i) => (
          <div key={i} className={styles.cronologiaItem}>
            <div className={styles.cronologiaImagemWrapper}>
              <Image
                src={`${BASE}${item.arquivo}`}
                alt={item.alt}
                width={item.largura}
                height={item.altura}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                quality={88}
              />
            </div>
            <span className={styles.cronologiaData}>{item.data}</span>
            <p className={styles.cronologiaNome}>{item.nome}</p>
            <p className={styles.cronologiaInfo}>{item.info}</p>
            <p className={styles.cronologiaTexto}>{item.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}