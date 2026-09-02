'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '../../../../_styles/especificos/arcanjos/sao-miguel-arcanjo/timeline-aparicoes.module.css';

type Evento = {
  ano: string;
  local: string;
  pais: string;
  titulo: string;
  descricao: string;
  imagem?: string;
};

const EVENTOS: Evento[] = [
  {
    ano: '490 d.C.',
    local: 'Monte Gargano',
    pais: 'Itália',
    titulo: 'A primeira aparição miguelina do Ocidente',
    descricao:
      'Miguel se manifesta ao bispo Lorenzo Maiorano de Siponto numa gruta calcária do promontório do Gargano. É o início da tradição miguelina ocidental — o santuário-mãe de onde todos os outros herdarão sua legitimidade.',
    imagem: '/santos/biografia/arcanjos/sao-miguel-arcanjo/reliquia/gargano-gruta.jpg',
  },
  {
    ano: '708 d.C.',
    local: 'Mont Tumba',
    pais: 'França (Normandia)',
    titulo: 'Miguel aparece ao bispo Aubert',
    descricao:
      'Após três aparições — a última delas com o toque no crânio do bispo hesitante —, Aubert de Avranches constrói o primeiro oratório sobre o Mons Tumba. O monte é renomeado Mont Saint-Michel.',
    imagem: '/santos/biografia/arcanjos/sao-miguel-arcanjo/reliquia/mont-saint-michel-hero.jpg',
  },
  {
    ano: 'Séc. VI–VIII',
    local: 'Skellig Michael',
    pais: 'Irlanda',
    titulo: 'Os monges celtas escolhem a rocha do Atlântico',
    descricao:
      'No auge da tradição da peregrinatio pro Christo, monges anônimos escolhem a ilha mais inacessível da cristandade ocidental para consagrá-la ao mais elevado dos arcanjos. Constroem clocháns de pedra seca que sobreviverão mais de mil anos.',
    imagem: '/santos/biografia/arcanjos/sao-miguel-arcanjo/reliquia/skellig-clochans.jpg',
  },
  {
    ano: '962 d.C.',
    local: "Le Puy-en-Velay",
    pais: 'França',
    titulo: 'Consagração da capela sobre o pináculo vulcânico',
    descricao:
      'O bispo Godescalc — recém-retornado de Santiago de Compostela — consagra a Chapelle Saint-Michel d\'Aiguilhe no topo de uma agulha de lava basáltica de mais de 80 metros. 268 degraus talhados na rocha conduzem ao santuário.',
  },
  {
    ano: 'Ca. 983–987',
    local: 'Monte Pirchiriano',
    pais: 'Itália (Piemonte)',
    titulo: 'Fundação da Sacra di San Michele',
    descricao:
      'O cavaleiro Hugo de Montboissier e o eremita São João Vincenzo estabelecem a abadia beneditina sobre a mais importante passagem dos Alpes. Miguel torna-se a sentinela geográfica entre a Itália e a França.',
    imagem: '/santos/biografia/arcanjos/sao-miguel-arcanjo/reliquia/sacra-hero.jpg',
  },
  {
    ano: '1076',
    local: 'Constantinopla → Gargano',
    pais: 'Itália',
    titulo: 'A porta de bronze bizantina chega ao Gargano',
    descricao:
      'Pantaleão de Amalfi encomenda em Constantinopla a monumental porta de bronze com cenas da vida de Miguel. É um dos exemplares mais notáveis de fundição bizantina existentes na Itália.',
    imagem: '/santos/biografia/arcanjos/sao-miguel-arcanjo/reliquia/gargano-porta-bronze.jpg',
  },
  {
    ano: '1211–1228',
    local: 'Mont Saint-Michel',
    pais: 'França',
    titulo: 'La Merveille é construída em 17 anos',
    descricao:
      'Sob o abade Jourdain e com financiamento do rei Filipe II Augusto, três níveis góticos são erguidos no flanco norte da rocha: esmolaria, sala dos cavaleiros, refeitório luminoso e o claustro suspenso sobre o abismo.',
    imagem: '/santos/biografia/arcanjos/sao-miguel-arcanjo/reliquia/mont-saint-michel-claustro.jpg',
  },
  {
    ano: '1631',
    local: 'Tlaxcala',
    pais: 'México',
    titulo: 'A aparição do Novo Mundo',
    descricao:
      'Miguel se manifesta a Diego Lázaro de San Francisco durante uma epidemia. A fonte associada ao milagre torna-se centro de peregrinação — a devoção miguelina europeia enraíza-se em solo americano.',
  },
  {
    ano: '1897',
    local: 'Mont Saint-Michel',
    pais: 'França',
    titulo: 'A estátua dourada de Frémiet no topo da flecha',
    descricao:
      'Emmanuel Frémiet esculpe a estátua de bronze dourado que coroa a agulha gótica: Miguel em armadura, espada erguida, asas abertas, voltado para o mar. É a silhueta que define o monte a quilômetros de distância.',
  },
  {
    ano: '1979 e 1996',
    local: 'Mont Saint-Michel e Skellig',
    pais: 'França e Irlanda',
    titulo: 'A UNESCO reconhece os santuários miguelinos',
    descricao:
      'Mont Saint-Michel (1979) e Skellig Michael (1996) tornam-se Patrimônio Mundial. Em 2011, o Gargano juntou-se à lista. Três dos maiores santuários miguelinos passam ao patrimônio da humanidade inteira.',
  },
];

export default function TimelineAparicoes() {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisivel(true),
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.container} ${visivel ? styles.visivel : ''}`}
    >
      <div className={styles.header}>
        <div className={styles.suprat}>◆ Cronologia Miguelina ◆</div>
        <h2 className={styles.titulo}>Mil e Quinhentos Anos de Devoção</h2>
        <p className={styles.subtitulo}>
          Uma linha do tempo dos principais momentos que construíram, pedra por pedra,
          a geografia sagrada de Miguel no Ocidente.
        </p>
      </div>

      <div className={styles.linha}>
        <div className={styles.linhaVertical}></div>

        {EVENTOS.map((ev, i) => (
          <div
            key={i}
            className={`${styles.evento} ${i % 2 === 0 ? styles.esquerda : styles.direita}`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className={styles.eventoPonto}>
              <span className={styles.eventoPontoInterno}></span>
            </div>

            <div className={styles.eventoCard}>
              {ev.imagem && (
                <div
                  className={styles.eventoImagem}
                  style={{ backgroundImage: `url(${ev.imagem})` }}
                />
              )}

              <div className={styles.eventoConteudo}>
                <div className={styles.eventoAno}>{ev.ano}</div>
                <div className={styles.eventoLocal}>
                  <span className={styles.eventoLocalNome}>{ev.local}</span>
                  <span className={styles.eventoLocalPais}>{ev.pais}</span>
                </div>
                <h3 className={styles.eventoTitulo}>{ev.titulo}</h3>
                <p className={styles.eventoDescricao}>{ev.descricao}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}