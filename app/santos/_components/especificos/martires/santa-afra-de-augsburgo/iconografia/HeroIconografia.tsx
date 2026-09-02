import Image from 'next/image';
import styles from '../../../../../_styles/especificos/martires/santa-afra-de-augsburgo/iconografia/galeria.module.css';

export default function HeroIconografia({
  src,
  alt,
  titulo,
  subtitulo,
  largura,
  altura,
}: {
  src: string;
  alt: string;
  titulo: string;
  subtitulo?: string;
  largura: number;
  altura: number;
}) {
  return (
    <div className={styles.hero}>
      <div className={styles.heroImagemWrapper}>
        <Image
          src={src}
          alt={alt}
          width={largura}
          height={altura}
          className={styles.heroImagem}
          quality={90}
          priority
          sizes="100vw"
        />
        <div className={styles.heroGradiente} />
      </div>
      <div className={styles.heroTexto}>
        <span className={styles.heroOrnamento}>✦</span>
        <h1 className={styles.heroTitulo}>{titulo}</h1>
        {subtitulo && <p className={styles.heroSubtitulo}>{subtitulo}</p>}
        <span className={styles.heroOrnamento}>✦</span>
      </div>
    </div>
  );
}