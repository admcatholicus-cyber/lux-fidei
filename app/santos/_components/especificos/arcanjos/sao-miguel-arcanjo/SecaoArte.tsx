import { ReactNode } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-miguel-arcanjo/arte.module.css';

type SecaoArteProps = {
  numeroRomano: string;
  suprat?: string;
  titulo: string;
  subtitulo?: string;
  intro?: ReactNode;
  children: ReactNode;
  variante?: 'clara' | 'escura';
};

export default function SecaoArte({
  numeroRomano,
  suprat,
  titulo,
  subtitulo,
  intro,
  children,
  variante = 'clara',
}: SecaoArteProps) {
  return (
    <section className={`${styles.secao} ${styles[`secao-${variante}`]}`}>
      <header className={styles.secaoHeader}>
        <div className={styles.secaoNumero}>{numeroRomano}</div>
        {suprat && <div className={styles.secaoSuprat}>{suprat}</div>}
        <h2 className={styles.secaoTitulo}>{titulo}</h2>
        {subtitulo && <div className={styles.secaoSubtitulo}>{subtitulo}</div>}
        {intro && <div className={styles.secaoIntro}>{intro}</div>}
      </header>
      <div className={styles.secaoCorpo}>{children}</div>
    </section>
  );
}