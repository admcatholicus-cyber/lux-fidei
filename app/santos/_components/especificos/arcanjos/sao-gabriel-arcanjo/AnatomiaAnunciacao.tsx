'use client';

import { useState } from 'react';
import styles from '@/app/santos/_styles/especificos/arcanjos/sao-gabriel-arcanjo/anatomia-anunciacao.module.css';

type Hotspot = {
  id: number;
  x: number;
  y: number;
  titulo: string;
  categoria: 'figura' | 'atributo' | 'espaco' | 'simbolo';
  descricao: string;
};

const HOTSPOTS: Hotspot[] = [
  {
    id: 1,
    x: 35,
    y: 59,
    categoria: 'figura',
    titulo: 'Gabriel',
    descricao:
      'O arcanjo mensageiro. Aparece ajoelhado diante de Maria, em atitude de reverência. Na tradição iconográfica ocidental, Gabriel ocupa frequentemente um dos lados da composição enquanto Maria aparece no lado oposto, criando entre ambos o eixo visual do encontro da Anunciação.',
  },

  {
    id: 2,
    x: 78,
    y: 40,
    categoria: 'figura',
    titulo: 'Maria',
    descricao:
      'A Virgem Maria aparece à direita, em atitude de humildade e acolhimento diante da mensagem do anjo. O manto azul e a postura recolhida são elementos recorrentes na representação renascentista da Anunciação.',
  },

  {
    id: 3,
    x: 42,
    y: 46,
    categoria: 'atributo',
    titulo: 'Lírios',
    descricao:
      'Os lírios brancos são um dos atributos mais conhecidos da Anunciação. Sua brancura simboliza tradicionalmente a pureza e a virgindade de Maria. Nesta composição, eles aparecem no espaço central, entre o anjo e a Virgem.',
  },

  {
    id: 4,
    x: 24,
    y: 60,
    categoria: 'atributo',
    titulo: 'Asas',
    descricao:
      'As grandes asas identificam Gabriel como um ser angélico. Na pintura renascentista, os artistas passaram a representar as asas com maior atenção aos detalhes naturais, embora mantendo seu caráter sobrenatural e ornamental.',
  },

  {
    id: 5,
    x: 50,
    y: 28,
    categoria: 'simbolo',
    titulo: 'Pomba do Espírito Santo',
    descricao:
      'A pomba aparece acima da cena, representando o Espírito Santo. Sua posição elevada reforça visualmente a origem divina do anúncio e remete às palavras do Evangelho de Lucas: o Espírito Santo virá sobre Maria.',
  },

  {
    id: 6,
    x: 62,
    y: 65,
    categoria: 'atributo',
    titulo: 'Livro sobre o atril',
    descricao:
      'O livro aberto diante de Maria representa sua familiaridade com as Escrituras. A tradição iconográfica frequentemente associa a leitura de Maria às profecias messiânicas, especialmente à passagem de Isaías sobre a virgem que conceberia.',
  },

  {
    id: 7,
    x: 50,
    y: 85,
    categoria: 'espaco',
    titulo: 'Chão em perspectiva',
    descricao:
      'O piso geométrico conduz o olhar para o interior da arquitetura. A perspectiva matemática é uma das características mais marcantes da pintura renascentista e transforma o espaço em uma estrutura ordenada e racional.',
  },

  {
    id: 8,
    x: 51,
    y: 43,
    categoria: 'espaco',
    titulo: 'Jardim ou hortus conclusus',
    descricao:
      'O jardim fechado ao fundo remete ao hortus conclusus, símbolo tradicionalmente associado à virgindade de Maria. O espaço verde e protegido também pode evocar o Paraíso e a renovação da criação através da Encarnação.',
  },

  {
    id: 9,
    x: 34,
    y: 34,
    categoria: 'espaco',
    titulo: 'Coluna e arcos',
    descricao:
      'As colunas e os arcos organizam a arquitetura e dividem visualmente os diferentes espaços da cena. Além de criar profundidade, a arquitetura renascentista funciona como uma moldura para o encontro entre Gabriel e Maria.',
  },

  {
    id: 10,
    x: 63,
    y: 87,
    categoria: 'simbolo',
    titulo: 'Vaso com flores',
    descricao:
      'O pequeno vaso de flores colocado em primeiro plano acrescenta um elemento de delicadeza à cena. Junto aos lírios e à vegetação do jardim, reforça a associação tradicional entre flores brancas, pureza e a presença de Maria.',
  },
];

const CATEGORIAS = {
  figura: {
    cor: '#c9b876',
    label: 'Figuras',
  },

  atributo: {
    cor: '#5a7ba8',
    label: 'Atributos',
  },

  simbolo: {
    cor: '#a85838',
    label: 'Símbolos',
  },

  espaco: {
    cor: '#2e7a5a',
    label: 'Espaço',
  },
};

export default function AnatomiaAnunciacao() {
  const [ativo, setAtivo] = useState<number | null>(1);

  const spot = HOTSPOTS.find((h) => h.id === ativo);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        

        <h2 className={styles.titulo}>
          Anatomia da Cena
        </h2>

        <p className={styles.subtitulo}>
          Ler uma Anunciação
        </p>

        <p className={styles.intro}>
          Dez elementos que aparecem, com variações, em muitas
          representações da Anunciação. Clique nos números da imagem
          — ou nos itens da lista — para descobrir o que cada um
          significa.
        </p>
      </header>

      <div className={styles.legendaCat}>
        {Object.entries(CATEGORIAS).map(([id, categoria]) => (
          <div
            key={id}
            className={styles.catItem}
          >
            <span
              className={styles.catCor}
              style={{
                background: categoria.cor,
              }}
            />

            <span>
              {categoria.label}
            </span>
          </div>
        ))}
      </div>

      <div className={styles.grid}>
        <div className={styles.obra}>
          <div className={styles.obraImg}>
            <img
              src="/santos/biografia/arcanjos/sao-gabriel-arcanjo/iconografia/anatomia/anunciacao-referencia.webp"
              alt="Anunciação renascentista com elementos iconográficos destacados por hotspots"
              loading="lazy"
            />

            {HOTSPOTS.map((h) => {
              const categoria = CATEGORIAS[h.categoria];

              return (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => setAtivo(h.id)}
                  className={`${styles.hotspot} ${
                    ativo === h.id
                      ? styles.hotspotAtivo
                      : ''
                  }`}
                  style={{
                    left: `${h.x}%`,
                    top: `${h.y}%`,
                    ['--cor' as string]: categoria.cor,
                  }}
                  aria-label={`${h.id}. ${h.titulo}`}
                  aria-pressed={ativo === h.id}
                >
                  {h.id}
                </button>
              );
            })}
          </div>

          <p className={styles.obraCap}>
            Composição sintética inspirada na tradição das
            Anunciações renascentistas dos séculos XV e XVI.
          </p>
        </div>

        <aside
          className={styles.painel}
          aria-label="Informações sobre os elementos da Anunciação"
        >
          {spot && (
            <div className={styles.painelDestaque}>
              <div className={styles.painelHeader}>
                <div
                  className={styles.painelNum}
                  style={{
                    background:
                      CATEGORIAS[spot.categoria].cor,
                  }}
                >
                  {spot.id}
                </div>

                <div>
                  <span
                    className={styles.painelCat}
                    style={{
                      color:
                        CATEGORIAS[spot.categoria].cor,
                    }}
                  >
                    {CATEGORIAS[spot.categoria].label}
                  </span>

                  <h4 className={styles.painelTit}>
                    {spot.titulo}
                  </h4>
                </div>
              </div>

              <p className={styles.painelDesc}>
                {spot.descricao}
              </p>
            </div>
          )}

          <ol className={styles.painelLista}>
            {HOTSPOTS.map((h) => {
              const categoria = CATEGORIAS[h.categoria];

              return (
                <li key={h.id}>
                  <button
                    type="button"
                    onClick={() => setAtivo(h.id)}
                    className={`${styles.itemBtn} ${
                      ativo === h.id
                        ? styles.itemAtivo
                        : ''
                    }`}
                    aria-pressed={ativo === h.id}
                  >
                    <span
                      className={styles.itemNum}
                      style={{
                        background: categoria.cor,
                      }}
                    >
                      {h.id}
                    </span>

                    <span className={styles.itemTit}>
                      {h.titulo}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </aside>
      </div>
    </div>
  );
}