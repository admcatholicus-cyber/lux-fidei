'use client';

import { useState } from 'react';
import styles from '@/app/santos/_styles/especificos/arcanjos/sao-gabriel-arcanjo/mapa-museus.module.css';

type Local = {
  id: string;
  cidade: string;
  pais: string;
  instituicao: string;
  obra: string;
  autor: string;
  ano: string;
  regiao: 'italia' | 'franca' | 'espanha' | 'reino-unido' | 'eua' | 'russia' | 'oriente' | 'alemanha';
  destaque: string;
  imagem: string;
};

const BASE = '/santos/biografia/arcanjos/sao-gabriel-arcanjo/iconografia/mapa';

const LOCAIS: Local[] = [
  {
    id: 'roma-maggiore',
    cidade: 'Roma',
    pais: 'Itália',
    instituicao: 'Basílica de Santa Maria Maggiore',
    obra: 'Anunciação do arco triunfal',
    autor: 'Anônimo',
    ano: '432–440',
    regiao: 'italia',
    destaque: 'Primeira Anunciação segura da história da arte cristã.',
    imagem: `${BASE}/roma-maggiore.webp`,
  },
  {
    id: 'florenca-uffizi',
    cidade: 'Florença',
    pais: 'Itália',
    instituicao: 'Galleria degli Uffizi',
    obra: 'Anunciação (Simone Martini) + Anunciação (Leonardo)',
    autor: 'Martini, Leonardo, Botticelli',
    ano: '1333 · 1472 · 1489',
    regiao: 'italia',
    destaque: 'A maior concentração de Anunciações-obra-prima em um único museu.',
    imagem: `${BASE}/florenca-uffizi.webp`,
  },
  {
    id: 'florenca-sanmarco',
    cidade: 'Florença',
    pais: 'Itália',
    instituicao: 'Museo di San Marco',
    obra: 'Anunciações de Fra Angelico',
    autor: 'Fra Angelico',
    ano: '1438–1446',
    regiao: 'italia',
    destaque: 'Múltiplas Anunciações espalhadas pelo convento dominicano — cada cela dos frades tem sua versão.',
    imagem: `${BASE}/florenca-sanmarco.webp`,
  },
  {
    id: 'reims',
    cidade: 'Reims',
    pais: 'França',
    instituicao: 'Catedral Notre-Dame de Reims',
    obra: 'Ange au sourire',
    autor: 'Escola de Reims',
    ano: '1245–1255',
    regiao: 'franca',
    destaque: 'A escultura gótica mais célebre de Gabriel. Sobreviveu ao bombardeio de 1914.',
    imagem: `${BASE}/reims-catedral.webp`,
  },
  {
    id: 'colmar',
    cidade: 'Colmar',
    pais: 'França',
    instituicao: 'Musée Unterlinden',
    obra: 'Retábulo de Isenheim',
    autor: 'Matthias Grünewald',
    ano: '1512–1516',
    regiao: 'alemanha',
    destaque: 'Anunciação de intensidade expressionista extrema — cores violentas antes do expressionismo.',
    imagem: `${BASE}/colmar-unterlinden.webp`,
  },
  {
    id: 'madrid-prado',
    cidade: 'Madrid',
    pais: 'Espanha',
    instituicao: 'Museo Nacional del Prado',
    obra: 'Anunciações de Fra Angelico, Murillo, El Greco',
    autor: 'Múltiplos',
    ano: 'séc. XV–XVII',
    regiao: 'espanha',
    destaque: 'Três Anunciações capitais em um único museu: a florentina, a barroca espanhola, a mística cretense.',
    imagem: `${BASE}/madrid-prado.webp`,
  },
  {
    id: 'toledo',
    cidade: 'Toledo',
    pais: 'Espanha',
    instituicao: 'Igrejas e Museu de Santa Cruz',
    obra: 'Anunciações de El Greco',
    autor: 'El Greco',
    ano: '1590–1610',
    regiao: 'espanha',
    destaque: 'Ver as Anunciações de El Greco na cidade onde foram pintadas, sob a luz para a qual foram feitas.',
    imagem: `${BASE}/toledo.webp`,
  },
  {
    id: 'londres-ng',
    cidade: 'Londres',
    pais: 'Reino Unido',
    instituicao: 'National Gallery',
    obra: 'Anunciações de Fra Filippo Lippi, Crivelli, Botticelli',
    autor: 'Múltiplos',
    ano: 'séc. XV',
    regiao: 'reino-unido',
    destaque: 'A Anunciação de Crivelli, com sua perspectiva teatral e o raio dourado do Espírito, é imperdível.',
    imagem: `${BASE}/londres-ng.webp`,
  },
  {
    id: 'washington',
    cidade: 'Washington D.C.',
    pais: 'Estados Unidos',
    instituicao: 'National Gallery of Art',
    obra: 'Anunciação',
    autor: 'Jan van Eyck',
    ano: 'ca. 1434–1436',
    regiao: 'eua',
    destaque: 'A Anunciação flamenga por excelência: precisão óptica e simbolismo denso em cada centímetro.',
    imagem: `${BASE}/washington-nga.webp`,
  },
  {
    id: 'moscou-tretyakov',
    cidade: 'Moscou',
    pais: 'Rússia',
    instituicao: 'Galeria Tretyakov',
    obra: 'Anunciação de Ustyug + ícones de Rublev',
    autor: 'Anônimos + Andrei Rublev',
    ano: 'séc. XII–XV',
    regiao: 'russia',
    destaque: 'A maior coleção de ícones ortodoxos de Gabriel — a tradição oriental em sua expressão mais alta.',
    imagem: `${BASE}/moscou-tretyakov.webp`,
  },
  {
    id: 'sinai',
    cidade: 'Península do Sinai',
    pais: 'Egito',
    instituicao: 'Mosteiro de Santa Catarina',
    obra: 'Ícones bizantinos primitivos',
    autor: 'Anônimos',
    ano: 'séc. VI–XIII',
    regiao: 'oriente',
    destaque: 'O único mosteiro cristão em funcionamento contínuo desde o séc. VI. Ícones que sobreviveram à iconoclastia.',
    imagem: `${BASE}/sinai-mosteiro.webp`,
  },
  {
    id: 'nazare',
    cidade: 'Nazaré',
    pais: 'Israel',
    instituicao: 'Basílica da Anunciação',
    obra: 'Múltiplas Anunciações nacionais (mosaicos)',
    autor: 'Artistas de todo o mundo, séc. XX',
    ano: '1969',
    regiao: 'oriente',
    destaque: 'A basílica construída sobre a suposta casa de Maria abriga mosaicos de Anunciação de cada país do mundo.',
    imagem: `${BASE}/nazare-basilica.webp`,
  },
];

const REGIOES = {
  italia: { cor: '#c9b876', nome: 'Itália' },
  franca: { cor: '#5a7ba8', nome: 'França' },
  espanha: { cor: '#a85838', nome: 'Espanha' },
  'reino-unido': { cor: '#4a6590', nome: 'Reino Unido' },
  eua: { cor: '#2e7a5a', nome: 'Estados Unidos' },
  russia: { cor: '#8a4a70', nome: 'Rússia' },
  oriente: { cor: '#c07030', nome: 'Oriente' },
  alemanha: { cor: '#6a5a3a', nome: 'Alemanha' },
};

export default function MapaMuseus() {
  const [selecionado, setSelecionado] = useState<string>(LOCAIS[0].id);
  const local = LOCAIS.find((l) => l.id === selecionado)!;

  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <span className={styles.label}>Roteiro Iconográfico</span>
        <h3 className={styles.titulo}>Onde Ver Gabriel no Mundo</h3>
        <p className={styles.sub}>
          Doze locais essenciais para quem quer ver — presencialmente — as Anunciações
          mais importantes já pintadas
        </p>
      </header>

      <div className={styles.corpo}>
        <article className={styles.painel}>
          <div className={styles.painelImg}>
            <img src={local.imagem} alt={local.instituicao} loading="lazy" />
          </div>
          <div className={styles.painelInfo}>
            <span
              className={styles.painelRegiao}
              style={{ background: REGIOES[local.regiao].cor }}
            >
              {REGIOES[local.regiao].nome}
            </span>
            <h4 className={styles.painelCidade}>
              {local.cidade}
              <span className={styles.painelPais}>{local.pais}</span>
            </h4>
            <p className={styles.painelInst}>{local.instituicao}</p>

            <div className={styles.painelObra}>
              <span className={styles.painelObraLabel}>Obra principal</span>
              <p className={styles.painelObraNome}>{local.obra}</p>
              <p className={styles.painelObraAutor}>
                {local.autor} · <em>{local.ano}</em>
              </p>
            </div>

            <p className={styles.painelDest}>{local.destaque}</p>
          </div>
        </article>
      </div>

      <ol className={styles.lista}>
        {LOCAIS.map((l) => (
          <li key={l.id}>
            <button
              onClick={() => setSelecionado(l.id)}
              className={`${styles.listaBtn} ${
                selecionado === l.id ? styles.listaAtivo : ''
              }`}
            >
              <span
                className={styles.listaCor}
                style={{ background: REGIOES[l.regiao].cor }}
              />
              <span className={styles.listaCidade}>{l.cidade}</span>
              <span className={styles.listaInst}>{l.instituicao}</span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}