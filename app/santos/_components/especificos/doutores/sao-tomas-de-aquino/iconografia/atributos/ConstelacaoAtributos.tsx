import Image from 'next/image';
import styles from '../../../../../../_styles/especificos/doutores/sao-tomas-de-aquino/iconografia/atributos/constelacao.module.css';

export interface MarcacaoConstelacao {
  numero: number;
  nome: string;
  nomeLatim?: string;
  significado: string;
}

interface ConstelacaoAtributosProps {
  suprat?: string;
  titulo: string;
  intro?: string;
  retratoArquivo: string;
  retratoAlt: string;
  retratoLargura: number;
  retratoAltura: number;
  retratoTituloObra: string;
  retratoAutor: string;
  marcacoesEsquerda: MarcacaoConstelacao[];
  marcacoesDireita: MarcacaoConstelacao[];
  chaveTexto?: string;
}

const BASE = '/santos/biografia/doutores/sao-tomas-de-aquino/iconografia/atributos/';

export default function ConstelacaoAtributos({
  suprat = 'Mapa iconográfico',
  titulo,
  intro,
  retratoArquivo,
  retratoAlt,
  retratoLargura,
  retratoAltura,
  retratoTituloObra,
  retratoAutor,
  marcacoesEsquerda,
  marcacoesDireita,
  chaveTexto,
}: ConstelacaoAtributosProps) {
  const renderItem = (m: MarcacaoConstelacao) => (
    <div key={m.numero} className={styles.consItem}>
      <div className={styles.consMarcador}>{m.numero}</div>
      <div className={styles.consItemTexto}>
        <h4 className={styles.consItemNome}>{m.nome}</h4>
        {m.nomeLatim && (
          <p className={styles.consItemLatim}>{m.nomeLatim}</p>
        )}
        <p className={styles.consItemSignificado}>{m.significado}</p>
      </div>
    </div>
  );

  return (
    <div className={styles.constelacaoWrapper}>
      <div className={styles.consCabecalho}>
        <span className={styles.consLabel}>{suprat}</span>
        <h2 className={styles.consTitulo}>{titulo}</h2>
        {intro && <p className={styles.consIntro}>{intro}</p>}
      </div>

      <div className={styles.consCorpo}>
        {/* Coluna esquerda */}
        <div className={styles.consColuna}>
          {marcacoesEsquerda.map(renderItem)}
        </div>

        {/* Retrato central */}
        <div className={styles.consRetrato}>
          <Image
            src={`${BASE}${retratoArquivo}`}
            alt={retratoAlt}
            width={retratoLargura}
            height={retratoAltura}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            quality={92}
          />
          <div className={styles.consMoldura} />
          <span className={styles.consCantoTopLeft} />
          <span className={styles.consCantoTopRight} />
          <span className={styles.consCantoBottomLeft} />
          <span className={styles.consCantoBottomRight} />

          <div className={styles.consLegendaRetrato}>
            <p className={styles.consLegendaTitulo}>{retratoTituloObra}</p>
            <p className={styles.consLegendaAutor}>{retratoAutor}</p>
          </div>
        </div>

        {/* Coluna direita */}
        <div className={styles.consColuna}>
          {marcacoesDireita.map(renderItem)}
        </div>
      </div>

      {chaveTexto && (
        <div className={styles.consChave}>
          <span className={styles.consChaveLabel}>Chave de leitura</span>
          <p className={styles.consChaveTexto}>{chaveTexto}</p>
        </div>
      )}
    </div>
  );
}