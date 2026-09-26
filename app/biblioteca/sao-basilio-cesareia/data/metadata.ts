export interface ObraBasilioMeta {
  slug: string;
  titulo: string;
  tituloLatim: string;
  descricao: string;
  icone: string;
  capa: string;
  capitulosCount: number;
  rota: string;
}

export const basilioMetadata = {
  id: "sao-basilio-cesareia",
  nome: "São Basílio de Cesareia (o Grande)",
  tituloCompleto: "São Basílio de Cesareia (c. 329–379 d.C.)",
  subtitulo:
    "Arcebispo de Cesareia da Capadócia, Doutor da Igreja e Arquitetura Teológica Nicena",
  biografia:
    "Irmão de São Gregório de Nissa e Santa Macrina, Basílio é uma das figuras mais monumentais da Patrística. Mestre da pneumatologia, formulou a distinção decisiva entre essência (ousia) e hipóstase (hypostasis) na Santíssima Trindade e compilou a venerável Divina Liturgia que leva seu nome.",
  capa: "/biblioteca/sao-basilio-cesareia/capa.webp",
  corTema: "#5b2c83",
  obras: [
    {
      slug: "liturgia-sao-basilio",
      titulo: "Divina Liturgia de São Basílio",
      tituloLatim: "Liturgia Sancti Basilii Magni",
      descricao:
        "A venerável eucologia e anáfora eucarística composta e compilada por São Basílio, pedra angular da liturgia bizantina e alexandrina.",
      icone: "📜",
      capa: "/biblioteca/cards/sao-basilio-cesareia/divina-liturgia.webp",
      capitulosCount: 2,
      rota: "/biblioteca/sao-basilio-cesareia/liturgia-sao-basilio",
    },
    {
      slug: "hexaemeron",
      titulo: "Hexaemeron (Sobre os Seis Dias da Criação)",
      tituloLatim: "Hexaemeron",
      descricao:
        "Nove homilias magistrais proferidas por São Basílio, exultando a beleza e a ordem do universo material como manifestação da infinita Sabedoria do Criador.",
      icone: "🌍",
      capa: "/biblioteca/cards/sao-basilio-cesareia/hexaemeron.webp",
      capitulosCount: 9,
      rota: "/biblioteca/sao-basilio-cesareia/hexaemeron",
    },
    {
      slug: "regras-monasticas",
      titulo: "As 55 Regras Maiores (Regulae Fusius Tractatae)",
      tituloLatim: "Regulae Fusius Tractatae et Brevius Tractatae",
      descricao:
        "O documento fundador do monaquismo cenobítico oriental. As 55 Regras Maiores em forma de perguntas e respostas, onde São Basílio expõe a vida comunitária fundamentada no mandamento do amor.",
      icone: "🕯️",
      capa: "/biblioteca/cards/sao-basilio-cesareia/capa-55-regras.webp",
      capitulosCount: 5,
      rota: "/biblioteca/sao-basilio-cesareia/regras-monasticas",
    },
    {
      slug: "de-spiritu-sancto-basilio",
      titulo: "De Spiritu Sancto (Sobre o Espírito Santo)",
      tituloLatim: "De Spiritu Sancto",
      descricao:
        "A obra-prima pneumatológica de Basílio que fundamentou a divindade do Espírito Santo no Concílio de 381, argumentando a partir da liturgia e da fórmula batismal.",
      icone: "🕊️",
      capa: "/biblioteca/cards/sao-basilio-cesareia/de-spiritu-sancto.webp",
      capitulosCount: 30,
      rota: "/biblioteca/sao-basilio-cesareia/de-spiritu-sancto-basilio",
    },
  ] as ObraBasilioMeta[],
};
