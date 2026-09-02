'use client';

import { useState, useRef } from 'react';
import styles from '@/app/santos/_styles/especificos/arcanjos/sao-gabriel-arcanjo/atlas-gabriel.module.css';

type Representacao = {
  id: string;
  arquivo: string;
  titulo: string;
  origem: string;
  data: string;
  tradicao: string;
  descricao: string;
};

const BASE = '/santos/biografia/arcanjos/sao-gabriel-arcanjo/iconografia/atlas';

const REPRESENTACOES: Representacao[] = [
  {
    id: 'mosaico-sinai',
    arquivo: '01-mosaico-sinai.webp',
    titulo: 'Gabriel do Mosteiro do Sinai',
    origem: 'Monastério de Santa Catarina, Sinai',
    data: 'séc. VI–VII',
    tradicao: 'Bizantina primitiva',
    descricao: 'Uma das representações mais antigas de Gabriel isolado. Ainda no espírito da arte tardo-antiga: rosto jovem, halo dourado, vestes solenes.',
  },
  {
    id: 'novgorod',
    arquivo: '02-anjo-cabelos-dourados.webp',
    titulo: 'Gabriel de Monreale',
    origem: 'Catedral de Monreale, Sicília',
    data: 'ca. 1180–1190',
    tradicao: 'Bizantino-normanda',
    descricao: 'Mosaico normando-bizantino de escala monumental. Fusão única entre arte árabe, normanda e constantinopolitana — Gabriel em dourado dominante, expressão hierática do auge medieval siciliano.',
  },
  {
    id: 'sinai-icone',
    arquivo: '03-icone-sinai.webp',
    titulo: 'Gabriel com cetro e globo',
    origem: 'Mosteiro de Santa Catarina, Sinai',
    data: 'séc. XIII',
    tradicao: 'Bizantina paleóloga',
    descricao: 'Representação canônica: fundo dourado, dalmática imperial, cetro na direita, globo cristalino na esquerda. Modelo replicado por séculos.',
  },
  {
    id: 'rublev',
    arquivo: '04-rublev-gabriel.webp',
    titulo: 'Gabriel de Rublev',
    origem: 'Catedral da Dormição, Vladimir',
    data: 'ca. 1408',
    tradicao: 'Russa medieval',
    descricao: 'Detalhe da Deesis pintada por Andrei Rublev. Delicadeza incomparável do rosto — Gabriel como contemplação em pessoa.',
  },
  {
    id: 'reims-detalhe',
    arquivo: '05-reims-detalhe.webp',
    titulo: 'Detalhe do Anjo Sorridente',
    origem: 'Catedral de Reims',
    data: '1245–1255',
    tradicao: 'Gótico francês',
    descricao: 'O sorriso mais famoso da arte medieval. Escultura em pedra que sobreviveu ao bombardeio da catedral em 1914.',
  },
  {
    id: 'perugino',
    arquivo: '06-perugino-gabriel.webp',
    titulo: 'Gabriel de Perugino',
    origem: 'Coleção Alba, Madrid',
    data: 'ca. 1490',
    tradicao: 'Renascimento umbriano',
    descricao: 'Detalhe de Anunciação. Gabriel em corpo perfeitamente naturalista, cabelos loiros, asas coloridas — a beleza como argumento teológico.',
  },
  {
    id: 'melozzo',
    arquivo: '07-melozzo-anjo-musico.webp',
    titulo: 'Anjo músico (atribuído a Gabriel)',
    origem: 'Pinacoteca Vaticana, Roma',
    data: 'ca. 1480',
    tradicao: 'Renascimento romano',
    descricao: 'Melozzo da Forlì. Anjo de perfil, tocando alaúde, rosto de doçura absoluta. Frequentemente identificado com Gabriel em contextos musicais.',
  },
  {
    id: 'blake',
    arquivo: '08-blake-gabriel-trombeta.webp',
    titulo: 'Gabriel — Ecce Ancilla Domini!',
    origem: 'Tate Britain, Londres',
    data: '1849–1850',
    tradicao: 'Pré-Rafaelita inglesa',
    descricao: 'Gabriel pré-rafaelita sem asas visíveis, envolto em chamas nos pés, portando lírio. Radical em sua época pela ruptura com as convenções angélicas — a doutrina serve à emoção pura.',
  },
];

export default function AtlasGabriel() {
  const [selecionado, setSelecionado] = useState<number>(0);
  const imagemRef = useRef<HTMLDivElement>(null);
  const rep = REPRESENTACOES[selecionado];

  const handleSelecionar = (index: number) => {
    setSelecionado(index);
    // Se no celular a imagem estiver fora da tela, rola suavemente até ela
    if (typeof window !== 'undefined' && window.innerWidth <= 900 && imagemRef.current) {
      imagemRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <span className={styles.label}>Atlas Iconográfico</span>
        <h3 className={styles.titulo}>Gabriel Sem a Anunciação</h3>
        <p className={styles.sub}>
          Oito representações do arcanjo isolado, fora da cena narrativa — como cada tradição
          o imaginou quando não estava contando a história do Fiat
        </p>
      </header>

      <div className={styles.destaque}>
        {/* 1. Imagem Principal */}
        <div className={styles.destaqueImg} ref={imagemRef}>
          <img src={`${BASE}/${rep.arquivo}`} alt={rep.titulo} loading="eager" />
        </div>

        {/* 2. Miniaturas (no celular fica entre a imagem e o texto) */}
        <div className={styles.miniaturas}>
          {REPRESENTACOES.map((r, i) => (
            <button
              key={r.id}
              onClick={() => handleSelecionar(i)}
              className={`${styles.miniBtn} ${i === selecionado ? styles.miniAtiva : ''}`}
              aria-label={r.titulo}
            >
              <div className={styles.miniImg}>
                <img src={`${BASE}/${r.arquivo}`} alt="" loading="lazy" />
              </div>
              <span className={styles.miniLabel}>{r.data}</span>
            </button>
          ))}
        </div>

        {/* 3. Informações da Obra */}
        <div className={styles.destaqueInfo}>
          <span className={styles.destaqueTradicao}>{rep.tradicao}</span>
          <h4 className={styles.destaqueTitulo}>{rep.titulo}</h4>
          <p className={styles.destaqueMeta}>
            {rep.origem} · <em>{rep.data}</em>
          </p>
          <p className={styles.destaqueDesc}>{rep.descricao}</p>
        </div>
      </div>
    </div>
  );
}