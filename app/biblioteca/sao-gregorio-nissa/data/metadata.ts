export interface ObraGregorioMeta {
  slug: string;
  titulo: string;
  tituloLatim: string;
  descricao: string;
  icone: string;
  capitulosCount: number;
  rota: string;
}

export const gregorioMetadata = {
  id: "sao-gregorio-nissa",
  nome: "São Gregório de Nissa",
  tituloCompleto: "São Gregório de Nissa (c. 335–395 d.C.)",
  subtitulo: "Bispo de Nissa, Teólogo Capadócio e Pai da Igreja",
  biografia:
    "Irmão menor de São Basílio Magno, Gregório de Nissa é um dos três Grandes Capadócios. Profundo teólogo místico e filósofo, destacou-se no Concílio de Constantinopla I (381 d.C.) na defesa da divindade do Espírito Santo e da perfeita consubstancialidade da Trindade.",
  capa: "/biblioteca/sao-gregorio-nissa/capa.webp",
  corTema: "#5b2c83",
  obras: [
    {
      slug: "ad-ablabium",
      titulo: "Que Não Há Três Deuses (Ad Ablabium)",
      tituloLatim: "Quod non sint tres Dei",
      descricao:
        "Tratado dogmático dirigido ao bispo Ablábio sobre a unicidade da essência divina e a distinção das Pessoas da Santíssima Trindade.",
      icone: "📜",
      capitulosCount: 1,
      rota: "/biblioteca/sao-gregorio-nissa/ad-ablabium",
    },
    {
      slug: "de-anima-et-resurrectione",
      titulo: "Sobre a Alma e a Ressurreição",
      tituloLatim: "De Anima et Resurrectione",
      descricao:
        "O diálogo consolo e teológico entre São Gregório e sua irmã Santa Macrina sobre a imortalidade da alma, o estado após a morte e a ressurreição da carne.",
      icone: "📖",
      capitulosCount: 4,
      rota: "/biblioteca/sao-gregorio-nissa/de-anima-et-resurrectione",
    },
    {
      slug: "grande-catequese",
      titulo: "A Grande Catequese",
      tituloLatim: "Oratio Catechetica Magna",
      descricao:
        "O magistral manual de teologia dogmática de São Gregório, no qual ele expõe e defende os mistérios da Trindade, Encarnação, Redenção e os Sacramentos.",
      icone: "📖",
      capitulosCount: 41,
      rota: "/biblioteca/sao-gregorio-nissa/grande-catequese",
    },
    {
      slug: "a-vida-de-moises",
      titulo: "A Vida de Moisés",
      tituloLatim: "De Vita Moysis",
      descricao:
        "A obra-prima da teologia mística de São Gregório, que contempla a vida de Moisés sob o aspecto histórico e sob a contemplação espiritual (Theoria) como o itinerário da alma em direção à perfeição divina (Epektasis).",
      icone: "📜",
      capitulosCount: 2,
      rota: "/biblioteca/sao-gregorio-nissa/a-vida-de-moises",
    },
    {
      slug: "contra-eunomio",
      titulo: "Contra Eunômio",
      tituloLatim: "Contra Eunomium",
      descricao:
        "Magnum opus dogmático em refutação à heresia anomiana de Eunômio. São Gregório defende a incompreensibilidade da essência divina e a consubstancialidade do Filho e do Espírito Santo.",
      icone: "⚔️",
      capitulosCount: 91,
      rota: "/biblioteca/sao-gregorio-nissa/contra-eunomio",
    },
  ] as ObraGregorioMeta[],
};
