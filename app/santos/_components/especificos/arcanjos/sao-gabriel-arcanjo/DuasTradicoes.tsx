'use client';

import styles from '@/app/santos/_styles/especificos/arcanjos/sao-gabriel-arcanjo/duas-tradicoes.module.css';
import LerMais from '../../../grid/LerMais';

type Criterio = {
  aspecto: string;
  oriente: string;
  ocidente: string;
};

const CRITERIOS: Criterio[] = [
  {
    aspecto: 'Postura',
    oriente: 'De pé, frontal ou levemente girado, imóvel e hierático',
    ocidente: 'Ajoelhado, inclinado ou em voo, sempre em movimento narrativo',
  },
  {
    aspecto: 'Fundo',
    oriente: 'Ouro puro — luz incriada, fora do tempo e do espaço',
    ocidente: 'Arquitetura, jardim ou paisagem — espaço histórico e concreto',
  },
  {
    aspecto: 'Vestes',
    oriente: 'Dalmática, loros e chlamys — traje da corte imperial bizantina',
    ocidente: 'Túnica e manto medievais; no Renascimento, vestes sacerdotais',
  },
  {
    aspecto: 'Atributos',
    oriente: 'Cetro (autoridade) e globo (soberania cósmica de Deus)',
    ocidente: 'Lírio (pureza) e filactério (as palavras do anúncio)',
  },
  {
    aspecto: 'Função',
    oriente: 'Presença que se apresenta ao observador (ontologia)',
    ocidente: 'Personagem que participa de uma cena narrativa (evento)',
  },
  {
    aspecto: 'Teologia',
    oriente: '"Que assisto diante de Deus" (Lc 1,19) — ser permanente',
    ocidente: '"Fui enviado para falar contigo" (Lc 1,19) — missão histórica',
  },
];

const BASE = '/santos/biografia/arcanjos/sao-gabriel-arcanjo/iconografia/tradicoes';

export default function DuasTradicoes() {
  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <span className={styles.label}>Estudo Comparativo</span>
        <h3 className={styles.titulo}>Dois Gabriéis, Um Anjo</h3>
        <p className={styles.sub}>
          As duas tradições iconográficas cristãs e o que cada uma revela sobre a natureza do arcanjo
        </p>
      </header>

      <div className={styles.paralelo}>
        <figure className={styles.figOriente}>
          <div className={styles.figImgWrap}>
            <img
              src={`${BASE}/oriente-gabriel-bizantino.webp`}
              alt="Ícone bizantino de Gabriel: presença hierática, fundo dourado, cetro"
              loading="lazy"
            />
          </div>
          <figcaption>
            <span className={styles.figBadge}>Oriente Cristão</span>
            <p className={styles.figNome}>Ícone bizantino de Gabriel</p>
            <p className={styles.figCredito}>
              Séc. XII · Bizâncio · Rússia · Grécia · Copta
            </p>
          </figcaption>
        </figure>

        <div className={styles.versus}>
          <span>vs.</span>
        </div>

        <figure className={styles.figOcidente}>
          <div className={styles.figImgWrap}>
            <img
              src={`${BASE}/ocidente-fra-angelico.webp`}
              alt="Anunciação de Fra Angelico: Gabriel ajoelhado em arquitetura renascentista"
              loading="lazy"
            />
          </div>
          <figcaption>
            <span className={styles.figBadge}>Ocidente Cristão</span>
            <p className={styles.figNome}>Anunciação de Fra Angelico</p>
            <p className={styles.figCredito}>
              Séc. XV · Roma · Itália · França · Ibéria
            </p>
          </figcaption>
        </figure>
      </div>

      {/* LER MAIS APLICADO DENTRO DO RETURN (Apenas na tabela e síntese) */}
      <LerMais>
        <div className={styles.tabela}>
          {CRITERIOS.map((c, i) => (
            <div key={i} className={styles.linha}>
              <div className={styles.celulaOriente}>
                <p className={styles.celulaTexto}>{c.oriente}</p>
              </div>
              <div className={styles.celulaAspecto}>
                <span className={styles.aspectoNumero}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.aspectoNome}>{c.aspecto}</span>
              </div>
              <div className={styles.celulaOcidente}>
                <p className={styles.celulaTexto}>{c.ocidente}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.sintese}>
          <span className={styles.sinteseLabel}>Síntese</span>
          <p className={styles.sinteseTexto}>
            Não são versões concorrentes: são <strong>ênfases complementares</strong> de uma
            mesma realidade. O Oriente responde à pergunta{' '}
            <em>quem é Gabriel</em>; o Ocidente responde à pergunta <em>o que Gabriel fez</em>.
            Ambas as respostas estão na Escritura, e ambas estão certas.
          </p>
        </div>
      </LerMais>
    </div>
  );
}