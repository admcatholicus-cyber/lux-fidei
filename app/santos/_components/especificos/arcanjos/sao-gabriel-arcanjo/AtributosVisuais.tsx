'use client';

import { useState } from 'react';
import styles from '@/app/santos/_styles/especificos/arcanjos/sao-gabriel-arcanjo/atributos-visuais.module.css';

type Atributo = {
  id: string;
  nome: string;
  periodo: string;
  significado: string;
  origem: string;
  precisao: 'biblica' | 'tradicional' | 'popular';
  precisaoNota: string;
  svg: React.ReactNode;
};

const ATRIBUTOS: Atributo[] = [
  {
    id: 'lirio',
    nome: 'Lírio branco',
    periodo: 'séc. XIII – atual',
    significado: 'Pureza absoluta da mensagem e da destinatária. Símbolo mariano por excelência no Ocidente.',
    origem: 'Convenção artística consolidada entre os séc. XIII–XIV, canônica no XV. Não tem base bíblica direta.',
    precisao: 'tradicional',
    precisaoNota: 'Sem base bíblica — convenção pictórica extra-textual',
    svg: (
      <svg viewBox="0 0 60 80" fill="none">
        <path d="M30 70 L30 45" stroke="currentColor" strokeWidth="1.5" />
        <path d="M30 45 Q20 35 15 25 Q25 30 30 40 Q35 30 45 25 Q40 35 30 45" fill="currentColor" opacity="0.9" />
        <path d="M30 40 Q25 32 22 22 M30 40 Q35 32 38 22" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <ellipse cx="30" cy="25" rx="3" ry="6" fill="currentColor" opacity="0.6" />
      </svg>
    ),
  },
  {
    id: 'pergaminho',
    nome: 'Pergaminho / Filactério',
    periodo: 'séc. XI – XVI',
    significado: 'Palavras da saudação escritas literalmente: AVE MARIA GRATIA PLENA ou Χαῖρε κεχαριτωμένη.',
    origem: 'Atestado em iluminuras desde o séc. XI. Sublinha a dimensão verbal do anúncio.',
    precisao: 'biblica',
    precisaoNota: 'Fiel ao texto de Lucas 1,28 — Gabriel é mensageiro de palavras',
    svg: (
      <svg viewBox="0 0 80 60" fill="none">
        <path d="M15 15 Q10 15 10 20 L10 45 Q10 50 15 50 L65 50 Q70 50 70 45 L70 20 Q70 15 65 15 Z" fill="currentColor" opacity="0.85" />
        <path d="M15 15 Q20 20 15 25 M65 15 Q60 20 65 25" stroke="currentColor" strokeWidth="1" />
        <path d="M20 25 L60 25 M20 32 L55 32 M20 39 L58 39" stroke="var(--paper)" strokeWidth="1" opacity="0.6" />
      </svg>
    ),
  },
  {
    id: 'asas',
    nome: 'Asas',
    periodo: 'séc. IV – atual',
    significado: 'Marca universal do ser angélico. Convenção herdada da Nike greco-romana.',
    origem: 'A Escritura descreve asas apenas para serafins (Is 6) e as criaturas de Ezequiel. Para anjos-mensageiros, o texto não descreve.',
    precisao: 'tradicional',
    precisaoNota: 'Convenção estética herdada da arte antiga — não descrita para Gabriel no texto bíblico',
    svg: (
      <svg viewBox="0 0 90 60" fill="none">
        <path d="M45 30 Q25 15 8 20 Q15 30 20 35 Q28 32 45 30" fill="currentColor" opacity="0.85" />
        <path d="M45 30 Q65 15 82 20 Q75 30 70 35 Q62 32 45 30" fill="currentColor" opacity="0.85" />
        <path d="M20 25 Q25 28 30 27 M25 32 Q30 34 35 33 M65 25 Q60 28 55 27 M65 32 Q60 34 55 33" stroke="var(--paper)" strokeWidth="0.6" fill="none" />
      </svg>
    ),
  },
  {
    id: 'cetro',
    nome: 'Cetro / Vara',
    periodo: 'séc. VI – atual (Oriente)',
    significado: 'Autoridade do legado régio. Gabriel como embaixador investido do Rei dos reis.',
    origem: 'Iconografia bizantina. Modelo derivado da corte imperial romana tardo-antiga.',
    precisao: 'tradicional',
    precisaoNota: 'Tradição iconográfica oriental sólida — expressa a autoridade descrita em Dn 8,16',
    svg: (
      <svg viewBox="0 0 30 80" fill="none">
        <line x1="15" y1="15" x2="15" y2="70" stroke="currentColor" strokeWidth="2" />
        <circle cx="15" cy="12" r="6" fill="currentColor" opacity="0.9" />
        <circle cx="15" cy="12" r="3" fill="var(--paper)" />
        <path d="M11 12 L19 12 M15 8 L15 16" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    id: 'trombeta',
    nome: 'Trombeta',
    periodo: 'séc. XVIII – XX',
    significado: 'Anúncio do Juízo Final. Associação com o "arcanjo" de 1Ts 4,16.',
    origem: 'Convenção popular anglo-americana moderna. William Blake (séc. XVIII) contribuiu para fixar a imagem.',
    precisao: 'popular',
    precisaoNota: '⚠ Sem fundamento bíblico direto — 1Ts 4,16 não nomeia Gabriel; Judas 9 nomeia Miguel',
    svg: (
      <svg viewBox="0 0 90 50" fill="none">
        <path d="M10 25 L60 25 L60 15 L75 15 L82 22 L82 28 L75 35 L60 35 L60 25" fill="currentColor" opacity="0.9" stroke="currentColor" strokeWidth="1" />
        <circle cx="82" cy="25" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 20 Q8 20 8 25 Q8 30 15 30" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    id: 'gesto',
    nome: 'Gesto do anúncio',
    periodo: 'séc. IV – atual',
    significado: 'Mão erguida com dois ou três dedos: proclamação, autoridade, fala em ato.',
    origem: 'Herdado da retórica greco-romana (gesto do orador). Constante em todas as tradições cristãs.',
    precisao: 'biblica',
    precisaoNota: 'Expressão visual mais precisa da função de Gabriel: aquele que fala',
    svg: (
      <svg viewBox="0 0 60 80" fill="none">
        <path d="M30 65 Q25 55 25 45 L25 25 Q25 20 28 20 Q31 20 31 25 L31 40 M31 30 Q31 15 34 15 Q37 15 37 25 L37 40 M37 35 Q37 22 40 22 Q43 22 43 30 L43 42 M43 38 Q43 28 46 28 Q49 28 49 35 L49 50" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M25 45 Q22 50 22 60 L28 68 L48 68 L52 55 L49 50" fill="currentColor" opacity="0.85" />
      </svg>
    ),
  },
];

const PRECISAO_LABEL = {
  biblica: { label: 'Fundamento bíblico', cor: '#2e7a5a' },
  tradicional: { label: 'Tradição iconográfica', cor: '#c9b876' },
  popular: { label: 'Convenção popular', cor: '#a85838' },
};

export default function AtributosVisuais() {
  const [ativo, setAtivo] = useState<string>(ATRIBUTOS[0].id);
  const atributo = ATRIBUTOS.find((a) => a.id === ativo)!;

  return (
    <div className={styles.tabua}>
      <header className={styles.tabuaHeader}>
        <span className={styles.tabuaLabel}>Tábua Iconográfica</span>
        <h3 className={styles.tabuaTitulo}>Os Atributos Visuais de Gabriel</h3>
        <p className={styles.tabuaSub}>Clique em cada símbolo para ler sua origem, significado e grau de precisão teológica</p>
      </header>

      <div className={styles.grid}>
        {ATRIBUTOS.map((a) => (
          <button
            key={a.id}
            onClick={() => setAtivo(a.id)}
            className={`${styles.card} ${ativo === a.id ? styles.cardAtivo : ''}`}
            aria-pressed={ativo === a.id}
          >
            <div className={styles.iconeWrap}>{a.svg}</div>
            <span className={styles.cardNome}>{a.nome}</span>
          </button>
        ))}
      </div>

      <div className={styles.detalhe}>
        <div className={styles.detalheHeader}>
          <div className={styles.detalheIcone}>{atributo.svg}</div>
          <div>
            <h4 className={styles.detalheNome}>{atributo.nome}</h4>
            <span className={styles.detalhePeriodo}>{atributo.periodo}</span>
          </div>
          <span
            className={styles.badge}
            style={{ background: PRECISAO_LABEL[atributo.precisao].cor }}
          >
            {PRECISAO_LABEL[atributo.precisao].label}
          </span>
        </div>

        <dl className={styles.detalheDl}>
          <dt>Significado</dt>
          <dd>{atributo.significado}</dd>

          <dt>Origem histórica</dt>
          <dd>{atributo.origem}</dd>

          <dt>Nota crítica</dt>
          <dd className={styles.notaCritica}>{atributo.precisaoNota}</dd>
        </dl>
      </div>
    </div>
  );
}