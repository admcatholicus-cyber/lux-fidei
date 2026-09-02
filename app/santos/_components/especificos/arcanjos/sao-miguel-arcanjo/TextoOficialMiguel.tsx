import { ReactNode } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-miguel-arcanjo/biblioteca.module.css';

type TextoOficialMiguelProps = {
  documento: string;
  referencia?: string;
  autoridade?: string;
  data?: string;
  brasao?: string;
  fontesRodape?: string;
  children: ReactNode;
};

export default function TextoOficialMiguel({
  documento,
  referencia,
  autoridade,
  data,
  brasao,
  fontesRodape,
  children,
}: TextoOficialMiguelProps) {
  return (
    <article className={styles.textoOficial}>
      <header className={styles.textoOficialHeader}>
        {brasao && <div className={styles.textoOficialBrasao}>{brasao}</div>}
        <div className={styles.textoOficialDocumento}>{documento}</div>
        {referencia && (
          <div className={styles.textoOficialReferencia}>{referencia}</div>
        )}
      </header>

      <div className={styles.textoOficialCorpo}>{children}</div>

      <footer className={styles.textoOficialFooter}>
        {autoridade && (
          <div className={styles.textoOficialAutoridade}>{autoridade}</div>
        )}
        {data && <div className={styles.textoOficialData}>{data}</div>}
        {fontesRodape && (
          <div className={styles.textoOficialFontes}>{fontesRodape}</div>
        )}
      </footer>
    </article>
  );
}