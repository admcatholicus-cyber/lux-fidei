/**
 * PARTICIPANTES DO CONCÍLIO DE CONSTANTINOPLA I (381 d.C.)
 * ~150 bispos orientais + ausências notáveis.
 */

export interface Bispo {
  nome: string;
  sede: string;
  provincia: string;
  partido: string;
  papel: string;
  observacoes?: string;
}

export interface GrupoParticipantes {
  titulo: string;
  descricao: string;
  bispos: Bispo[];
}

export const participantes: GrupoParticipantes[] = [
  // =============================================
  // PRESIDÊNCIA E FIGURAS CENTRAIS
  // =============================================
  {
    titulo: "Presidência e Figuras Centrais",
    descricao:
      "Os três presidentes sucessivos e as figuras teológicas mais importantes do concílio.",
    bispos: [
      {
        nome: "Melécio de Antioquia",
        sede: "Antioquia",
        provincia: "Síria",
        partido: "Niceno (pró-Melécio)",
        papel: "1º Presidente do Concílio",
        observacoes:
          "Morreu poucas semanas após a abertura. Sua morte desencadeou " +
          "a crise de sucessão em Antioquia e a renúncia de Gregório de Nazianzo.",
      },
      {
        nome: "Gregório de Nazianzo (o Teólogo)",
        sede: "Constantinopla (de jure Sasima)",
        provincia: "Trácia / Capadócia",
        partido: "Niceno ortodoxo",
        papel: "2º Presidente do Concílio",
        observacoes:
          "O teólogo mais brilhante presente. Renunciou dramaticamente " +
          "após a disputa sobre Antioquia e a contestação de sua legitimidade " +
          "episcopal. Pronunciou a Oração 42 (Despedida).",
      },
      {
        nome: "Nectário",
        sede: "Constantinopla",
        provincia: "Trácia",
        partido: "Niceno ortodoxo",
        papel: "3º Presidente do Concílio",
        observacoes:
          "Senador e pretor, ainda catecúmeno quando escolhido. " +
          "Batizado e ordenado em poucos dias. Administrador competente, " +
          "embora teologicamente inexperiente.",
      },
      {
        nome: "Gregório de Nissa",
        sede: "Nissa",
        provincia: "Capadócia",
        partido: "Niceno ortodoxo (Capadócio)",
        papel: "Principal teólogo após a saída de Nazianzo",
        observacoes:
          "Irmão de Basílio, o Grande. Autor de 'Contra Eunômio' e " +
          "'Grande Catequese'. Pronunciou a oração fúnebre de Melécio " +
          "e provavelmente a oração na coroação de Nectário.",
      },
      {
        nome: "Timóteo de Alexandria",
        sede: "Alexandria",
        provincia: "Egito",
        partido: "Niceno ortodoxo",
        papel: "Representante da Sé de Alexandria",
        observacoes:
          "Sucessor de Pedro II de Alexandria. Representava a tradição " +
          "atanasiana. Sua presença dava peso apostólico ao concílio.",
      },
      {
        nome: "Cirilo de Jerusalém",
        sede: "Jerusalém",
        provincia: "Palestina",
        partido: "Niceno (anteriormente homoiousiano)",
        papel: "Bispo de Jerusalém",
        observacoes:
          "Sobrevivente de décadas de exílio sob arianos. Autor das famosas " +
          "'Catequeses Mistagógicas'. Sua conversão do homoiousianismo " +
          "para o nicenismo ortodoxo é um símbolo da trajetória de muitos bispos.",
      },
      {
        nome: "Anfilóquio de Icônio",
        sede: "Icônio",
        provincia: "Licaônia",
        partido: "Niceno ortodoxo (Capadócio)",
        papel: "Aliado próximo dos Capadócios",
        observacoes:
          "Primo de Gregório de Nazianzo e amigo de Basílio. " +
          "Destacou-se na luta contra os pneumatomachianos e messalianos.",
      },
    ],
  },

  // =============================================
  // DIOCESE DO PONTO
  // =============================================
  {
    titulo: "Diocese do Ponto (Ásia Menor Norte/Central)",
    descricao:
      "Região fortemente nicena graças à influência dos Capadócios. " +
      "Inclui as províncias da Capadócia, Armênia, Ponto e Paflagônia.",
    bispos: [
      {
        nome: "Heládio de Cesareia",
        sede: "Cesareia da Capadócia",
        provincia: "Capadócia I",
        partido: "Niceno ortodoxo",
        papel: "Sucessor de Basílio, o Grande",
        observacoes:
          "Eleito após a morte de Basílio (379). Menos brilhante que seu " +
          "predecessor, mas fiel à ortodoxia nicena.",
      },
      {
        nome: "Otreio de Melitene",
        sede: "Melitene",
        provincia: "Armênia II",
        partido: "Niceno ortodoxo",
        papel: "Bispo da Armênia",
        observacoes:
          "Um dos bispos que Teodósio nomeou explicitamente em seu édito " +
          "de 381 como referência de comunhão ortodoxa.",
      },
      {
        nome: "Gregório de Nissa",
        sede: "Nissa",
        provincia: "Capadócia II",
        partido: "Niceno ortodoxo",
        papel: "(já listado acima)",
      },
      {
        nome: "Anfilóquio de Icônio",
        sede: "Icônio",
        provincia: "Licaônia",
        partido: "Niceno ortodoxo",
        papel: "(já listado acima)",
      },
      {
        nome: "Optimo de Antioquia da Pisídia",
        sede: "Antioquia da Pisídia",
        provincia: "Pisídia",
        partido: "Niceno ortodoxo",
        papel: "Bispo da Pisídia",
        observacoes:
          "Outro bispo listado por Teodósio como referência de ortodoxia.",
      },
    ],
  },

  // =============================================
  // DIOCESE DA ÁSIA
  // =============================================
  {
    titulo: "Diocese da Ásia (Ásia Menor Ocidental)",
    descricao:
      "Região com forte presença pneumatomachiana. Muitos bispos desta " +
      "diocese eram macedonianos e abandonaram o concílio.",
    bispos: [
      {
        nome: "Eleúsio de Cízico",
        sede: "Cízico",
        provincia: "Helesponto",
        partido: "Pneumatomachiano (Macedoniano)",
        papel: "Líder dos 36 macedonianos",
        observacoes:
          "Chegou ao concílio com 36 bispos pneumatomachianos. " +
          "Recusou a divindade do Espírito Santo e abandonou o concílio. " +
          "Ironia: Cízico era a antiga sede de Eunômio, o herege anomeu.",
      },
      {
        nome: "Marciano de Lâmpsaco",
        sede: "Lâmpsaco",
        provincia: "Helesponto",
        partido: "Pneumatomachiano (Macedoniano)",
        papel: "Co-líder dos macedonianos",
        observacoes:
          "Junto com Eleúsio, liderou a delegação pneumatomachiana. " +
          "Após o fracasso do diálogo, retornou à Ásia Menor.",
      },
    ],
  },

  // =============================================
  // DIOCESE DA TRÁCIA
  // =============================================
  {
    titulo: "Diocese da Trácia (Balcãs Orientais)",
    descricao:
      "Região da capital imperial. Anteriormente dominada por homoianos, " +
      "foi 'reconquistada' por Teodósio em 380.",
    bispos: [
      {
        nome: "Nectário",
        sede: "Constantinopla",
        provincia: "Europa",
        partido: "Niceno ortodoxo",
        papel: "(já listado acima)",
      },
      {
        nome: "Ascólio de Tessalônica",
        sede: "Tessalônica",
        provincia: "Macedônia",
        partido: "Niceno ortodoxo",
        papel: "Único (provável) representante ocidental",
        observacoes:
          "Bispo de Tessalônica, cidade tecnicamente na diocese da Macedônia " +
          "(Oriente), mas com fortes laços com Roma. Foi ele quem batizou " +
          "Teodósio em 380. Sua presença é o mais próximo que o concílio " +
          "teve de representação ocidental.",
      },
    ],
  },

  // =============================================
  // DIOCESE DO ORIENTE (SÍRIA/PALESTINA/MESOPOTÂMIA)
  // =============================================
  {
    titulo: "Diocese do Oriente (Síria, Palestina, Mesopotâmia)",
    descricao:
      "A região mais complexa do concílio, dividida pelo cisma de Antioquia. " +
      "Inclui as províncias da Síria, Fenícia, Palestina e Mesopotâmia.",
    bispos: [
      {
        nome: "Melécio de Antioquia",
        sede: "Antioquia",
        provincia: "Síria",
        partido: "Niceno (pró-Melécio)",
        papel: "(já listado acima)",
      },
      {
        nome: "Diodoro de Tarso",
        sede: "Tarso",
        provincia: "Cilícia",
        partido: "Niceno ortodoxo (Antioqueno)",
        papel: "Líder da escola teológica antioquena",
        observacoes:
          "Fundador da Escola de Antioquia (exegese literal-histórica). " +
          "Mestre de Teodoro de Mopsuéstia e João Crisóstomo. " +
          "Sua cristologia 'duas naturezas' será a base de Calcedônia (451), " +
          "mas também gerará o nestorianismo.",
      },
      {
        nome: "Acácio de Bereia",
        sede: "Bereia (Aleppo)",
        provincia: "Síria",
        partido: "Niceno (pró-Melécio)",
        papel: "Bispo da Síria",
        observacoes:
          "Jovem na época do concílio, viveria até ~437 e se tornaria " +
          "uma figura importante nas controvérsias do século V.",
      },
      {
        nome: "Cirilo de Jerusalém",
        sede: "Jerusalém",
        provincia: "Palestina",
        partido: "Niceno",
        papel: "(já listado acima)",
      },
      {
        nome: "Gelásio de Cesareia da Palestina",
        sede: "Cesareia Marítima",
        provincia: "Palestina I",
        partido: "Niceno ortodoxo",
        papel: "Bispo da Palestina",
        observacoes:
          "Sobrinho de Cirilo de Jerusalém. Autor de uma continuação " +
          "da História Eclesiástica de Eusébio (hoje perdida).",
      },
    ],
  },

  // =============================================
  // DIOCESE DO EGITO
  // =============================================
  {
    titulo: "Diocese do Egito e Líbia",
    descricao:
      "Tradicionalmente nicena desde Atanásio. A delegação egípcia chegou " +
      "atrasada e causou a crise final que levou à renúncia de Gregório.",
    bispos: [
      {
        nome: "Timóteo de Alexandria",
        sede: "Alexandria",
        provincia: "Egito",
        partido: "Niceno ortodoxo",
        papel: "(já listado acima)",
      },
    ],
  },
];

// =============================================
// OS 36 MACEDONIANOS (PNEUMATOMACHIANOS)
// =============================================
export const macedonianos = {
  titulo: "Os 36 Bispos Macedonianos (Pneumatomachianos)",
  descricao:
    "Grupo de ~36 bispos da Ásia Menor que chegaram ao concílio na Fase 2. " +
    "Eram seguidores de Macedônio I de Constantinopla (falecido ~360), " +
    "embora muitos preferissem o termo 'pneumatomachianos' (lutadores contra " +
    "o Espírito) dado por seus adversários.",
  crenca:
    "Aceitavam a divindade do Filho (homoiousios ou homoousios), mas " +
    "negavam a divindade do Espírito Santo. Para eles, o ES era " +
    "'algo intermediário' — nem criatura como os anjos, nem Deus como " +
    "o Pai e o Filho. Alguns o consideravam o 'maior dos anjos' ou " +
    "'ministro de Cristo'.",
  lideres: ["Eleúsio de Cízico", "Marciano de Lâmpsaco"],
  desfecho:
    "Após recusar a fórmula 'o Espírito Santo é consubstancial ao Pai e ao Filho', " +
    "abandonaram o concílio e retornaram às suas dioceses. " +
    "Teodósio posteriormente os exilou de suas sedes.",
  ironia:
    "Muitos desses bispos haviam sofrido perseguição sob Valente por serem " +
    "homoiousianos (semi-nicenos). Agora, ao rejeitar a divindade do ES, " +
    "eram eles os perseguidos.",
};

// =============================================
// AUSÊNCIAS NOTÁVEIS
// =============================================
export const ausencias = {
  titulo: "Ausências Notáveis",
  descricao:
    "Figuras que, por diversas razões, não estiveram presentes no concílio, " +
    "mas cuja influência se fez sentir.",
  ausentes: [
    {
      nome: "Papa Dâmaso I",
      sede: "Roma",
      razao:
        "Não foi convocado. Teodósio era imperador apenas do Oriente. " +
        "Dâmaso realizou um sínodo em Roma (382) que reagiu friamente " +
        "aos resultados de Constantinopla, especialmente ao Cânon 3.",
      impacto:
        "A ausência de Roma é a principal razão pela qual a ecumenicidade " +
        "do concílio foi questionada por décadas.",
    },
    {
      nome: "Ambrósio de Milão",
      sede: "Milão",
      razao:
        "O bispo mais influente do Ocidente não foi convidado. " +
        "Ambrósio estava ocupado combatendo o arianismo na corte de " +
        "Valentiniano II e sua mãe Justina.",
      impacto:
        "Ambrósio escreveu 'De Spiritu Sancto' (381) quase simultaneamente " +
        "ao concílio, chegando às mesmas conclusões de forma independente.",
    },
    {
      nome: "Jerônimo de Estridão",
      sede: "Roma (na época)",
      razao:
        "Estava em Roma como secretário do Papa Dâmaso. " +
        "Mais tarde comentaria o concílio em suas obras.",
      impacto: "Menor, mas suas cartas são fonte histórica valiosa.",
    },
    {
      nome: "Paulino de Antioquia",
      sede: "Antioquia (rival de Melécio)",
      razao:
        "Embora reconhecido por Roma e Alexandria como bispo legítimo " +
        "de Antioquia, Paulino não compareceu pessoalmente. " +
        "A questão de sua legitimidade vs Flaviano foi o grande " +
        "impasse do concílio.",
      impacto:
        "Sua ausência permitiu que os orientais elegessem Flaviano " +
        "como sucessor de Melécio, contra a vontade de Gregório e de Roma.",
    },
    {
      nome: "Basílio de Cesareia",
      sede: "Cesareia da Capadócia",
      razao: "Falecido em 1º de janeiro de 379, dois anos antes do concílio.",
      impacto:
        "Enorme. Sua obra 'De Spiritu Sancto' foi a base teológica " +
        "da definição pneumatológica do concílio. Ele é o 'pai ausente' " +
        "de Constantinopla I.",
    },
    {
      nome: "Apolinário de Laodiceia",
      sede: "Laodiceia",
      razao:
        "Já idoso (~71 anos) e condenado por sínodos anteriores (Roma 377, " +
        "Antioquia 378). Não foi convidado. Sua heresia foi condenada " +
        "in absentia.",
      impacto:
        "O apolinarismo foi condenado, mas a questão cristológica que " +
        "Apolinário levantou (como o Logos se une à humanidade?) " +
        "permaneceria sem resposta até Calcedônia (451).",
    },
    {
      nome: "Eunômio de Cízico",
      sede: "Cízico (deposto)",
      razao:
        "O líder do anomeísmo radical estava vivo, mas exilado e " +
        "sem sé episcopal. Não foi convidado.",
      impacto:
        "Sua heresia foi condenada no Cânon 1. Gregório de Nissa " +
        "continuaria a combatê-la por escrito nos anos seguintes.",
    },
  ],
};

export const totalParticipantes = {
  estimativa: "~150 bispos",
  certeza:
    "O número exato é desconhecido. As listas de signatários não sobreviveram " +
    "integralmente. Sócrates Escolástico menciona 150; Sozômeno fala em " +
    "'todos os bispos do Oriente'.",
  composicao:
    "Esmagadoramente oriental. A única possível exceção é Ascólio de " +
    "Tessalônica, cuja diocese estava tecnicamente no Oriente, mas " +
    "tinha laços com Roma.",
};