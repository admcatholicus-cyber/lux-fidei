import Image from 'next/image';
import styles from '../../../../../../_styles/especificos/doutores/sao-tomas-de-aquino/iconografia/atributos/grade.module.css';

export interface AtributoCard {
  numero: number;
  arquivo: string;
  alt: string;
  largura: number;
  altura: number;
  icone: string;
  nome: string;
  nomeLatim?: string;
  significado: string;
  origem: string;
}

interface GradeAtributosProps {
  suprat?: string;
  titulo: string;
  intro?: string;
  cards: AtributoCard[];
}

const BASE = '/santos/biografia/doutores/sao-tomas-de-aquino/iconografia/atributos/';

export default function GradeAtributos({
  suprat = 'Chave iconográfica',
  titulo,
  intro,
  cards,
}: GradeAtributosProps) {
  return (
    <div className={styles.gradeWrapper}>
      <div className={styles.cabecalho}>
        <span className={styles.cabecalhoSuprat}>{suprat}</span>
        <h2 className={styles.cabecalhoTitulo}>{titulo}</h2>
        {intro && <p className={styles.cabecalhoIntro}>{intro}</p>}
      </div>

      <div className={styles.grade}>
        {cards.map((card) => (
          <div key={card.numero} className={styles.card}>
            <div className={styles.cardImagem}>
              <Image
                src={`${BASE}${card.arquivo}`}
                alt={card.alt}
                width={card.largura}
                height={card.altura}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                quality={88}
              />

              <div className={styles.cardBadge}>
                <span className={styles.cardBadgeIcone}>{card.icone}</span>
                <span className={styles.cardBadgeNumero}>
                  {String(card.numero).padStart(2, '0')}
                </span>
              </div>
            </div>

            <div className={styles.cardCorpo}>
              {card.nomeLatim && (
                <p className={styles.cardNomeLatim}>{card.nomeLatim}</p>
              )}
              <h3 className={styles.cardNome}>{card.nome}</h3>
              <div className={styles.cardDivisor} />
              <p className={styles.cardSignificado}>{card.significado}</p>
              <div className={styles.cardRodape}>
                <span className={styles.cardRodapeIcone} />
                {card.origem}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}