'use client';

import { ReactNode } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-rafael-arcanjo/biblioteca.module.css';

type TextoOficialProps = {
  /** Título/nome do documento, ex: "Catecismo da Igreja Católica" */
  documento: string;
  /** Referência interna, ex: "§ 332" ou "Sessão IV" */
  referencia?: string;
  /** Autoridade emissora, ex: "Promulgado por João Paulo II" */
  autoridade?: string;
  /** Ano/data, ex: "1992" */
  data?: string;
  /** Referências bíblicas ou fontes complementares no rodapé */
  fontesRodape?: string;
  /** Símbolo/emoji do brasão. Padrão: "⛨" */
  brasao?: string;
  /** O texto do documento (children) */
  children: ReactNode;
};

export default function TextoOficial({
  documento,
  referencia,
  autoridade,
  data,
  fontesRodape,
  brasao = '⛨',
  children,
}: TextoOficialProps) {
  const partesMeta = [referencia, autoridade, data].filter(Boolean) as string[];

  return (
    <div className={styles.textoOficial}>
      <div className={styles.textoOficialInner}>
        <div className={styles.textoOficialHeader}>
          <div className={styles.textoOficialBrasao}>{brasao}</div>
          <div>
            <h4 className={styles.textoOficialTitulo}>{documento}</h4>
            {partesMeta.length > 0 && (
              <p className={styles.textoOficialMeta}>
                {partesMeta.map((parte, i) => (
                  <span key={i}>
                    {i > 0 && <span>·</span>}
                    {parte}
                  </span>
                ))}
              </p>
            )}
          </div>
        </div>

        <div className={styles.textoOficialCorpo}>{children}</div>

        {fontesRodape && (
          <div className={styles.textoOficialRodape}>
            <span className={styles.textoOficialRodapeMarca}>Referências</span>
            {fontesRodape}
          </div>
        )}
      </div>
    </div>
  );
}