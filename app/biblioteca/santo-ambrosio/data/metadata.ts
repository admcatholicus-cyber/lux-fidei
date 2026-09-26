/**
 * Metadata geral da edição digital das obras de Santo Ambrósio de Milão.
 */

export interface SecaoObra {
  id: string;
  icone: string;
  titulo: string;
  descricao: string;
  contagem: string;
  href: string;
  capa?: string;
  tituloLatim?: string;
  capitulosCount?: number;
}

export const obraMetadata = {
  santo: {
    nome: "Santo Ambrósio de Milão",
    nomeLatino: "Ambrosius Mediolanensis",
    vida: "339 – 397 d.C.",
    titulo: "Doutor da Igreja · Padre do Ocidente · Bispo de Milão",
  },
  obra: {
    tituloCurto: "De Spiritu Sancto",
    tituloLongo: "De Spiritu Sancto — Tratado sobre o Espírito Santo",
    epigrafe:
      "O Espírito Santo não é inferior ao Pai e ao Filho, mas é igual a ambos.",
    epigrafeFonte: "Santo Ambrósio, De Spiritu Sancto, I, 6, 74",
  },
  notaGeral:
    "Santo Ambrósio de Milão (339–397 d.C.), Doutor da Igreja e Padre do Ocidente, é um dos quatro grandes Patriarcas Latinos. Bispo de Milão de 374 a 397, suas obras teológicas — especialmente os tratados pneumatológicos — fundamentaram a doutrina sobre o Espírito Santo. Seus hinos introduziram o canto litúrgico coro na Igreja Ocidental.",
  secoes: [
    {
      id: "de-spiritu-sancto",
      icone: "🕊",
      titulo: "De Spiritu Sancto",
      descricao:
        "Tratado pneumático em três livros, dirigido ao Imperador Graciano, sobre a divindade, as obras e a Processão do Espírito Santo.",
      contagem: "3 livros · 53 capítulos",
      href: "/biblioteca/santo-ambrosio/de-spiritu-sancto",
      capa: "/biblioteca/cards/santo-ambrosio-de-milao-/de-spiritus-sanctus.webp",
    },
    {
      id: "de-officiis",
      icone: "📜",
      titulo: "De Officiis Ministrorum",
      descricao:
        "Tratado em três livros sobre os deveres morais do clero e a ética cristã, tomando como modelo Cícero e as Escrituras.",
      contagem: "3 livros · 102 capítulos",
      href: "/biblioteca/santo-ambrosio/de-officiis",
      capa: "/biblioteca/cards/santo-ambrosio-de-milao-/capa-officis-ministrorum.webp",
    },
    {
      id: "de-fide",
      icone: "✝",
      titulo: "De Fide",
      descricao:
        "Tratado sobre a Fé cristã, dirigido ao Imperador Graciano, defendendo a doutrina nicena contra os arianos.",
      contagem: "5 livros · 77 capítulos",
      href: "/biblioteca/santo-ambrosio/de-fide",
      capa: "/biblioteca/cards/santo-ambrosio-de-milao-/capa-de-fide.webp",
    },
    {
      id: "hinos-ambrosianos",
      icone: "🎵",
      titulo: "Hinos Ambrosianos",
      descricao:
        "Quatorze hinos do corpus crítico de Fontaine, acompanhados de um hino anônimo da tradição ambrosiana, com texto em Latim e tradução em Português.",
      contagem: "14 hinos (Fontaine) + 1 anônimo",
      capitulosCount: 15,
      href: "/biblioteca/santo-ambrosio/hinos-ambrosianos",
      capa: "/biblioteca/cards/santo-ambrosio-de-milao-/capa-hinos-ambrosianos.webp",
    },
  ] as SecaoObra[],
  notaEditorial: {
    titulo: "Sobre esta edição digital",
    paragrafos: [
      "Os textos de Santo Ambrósio apresentados nesta biblioteca baseiam-se na edição crítica da Corpus Scriptorum Ecclesiasticorum Latinorum (CSEL) e na Patrologia Latina (PL) de Migne.",
      "A tradução para o português brasileiro é obra deste projeto, feita com atenção ao registro teológico do século IV e sem qualquer uso de tradução automática.",
      "Cada texto exibido informa sua fonte, seu estado textual e as decisões editoriais que o produziram. Trechos obscuros do original latino são preservados entre colchetes.",
    ],
  },
  bibliografia: [
    "Santo Ambrósio, De Spiritu Sancto, PL 16, cols. 675–700.",
    "Santo Ambrósio, De Spiritu Sancto, CSEL 32/2, ed. Otto Faller, Vindobonae, 1950.",
    "Santo Ambrósio, De Incarnationis Dominicae Sacramento, PL 18, cols. 595–664.",
    "Émile Desprez, Saint Ambroise: introduction à l'étude de sa doctrine et de son style, Paris, 1908.",
    "Olivier Clément, As Fontes Bizantinas da Liturgia, São Paulo, 2000.",
  ],
} as const;
