/**
 * CONVOCAÇÃO DO CONCÍLIO DE CONSTANTINOPLA I (381 d.C.)
 * Motivações (6), logística, Santa Irene, Antioquia 379 e contexto eclesial.
 */

export const convocacao = {
  /**
   * Contexto imediato que pavimenta 381 — inserir ANTES da lista de motivações na UI.
   */
  contextoImediato: {
    titulo: "O Sínodo de Antioquia (379): a reunião que preparou Constantinopla",
    descricao:
      "Em 379, ainda sob o impacto da morte de São Basílio (1º de janeiro) e da ascensão " +
      "de Teodósio, os nicenos orientais reuniram-se em Antioquia sob a presidência de " +
      "São Melécio. Esse sínodo pró-niceno articulou a comunhão dos bispos fiéis a Niceia " +
      "no Oriente, reforçou a linha capadócia sobre o Espírito Santo e preparou o terreno " +
      "político-eclesial para um concílio maior na capital. Constantinopla I não nasceu do " +
      "nada: foi a culminação de uma reconstrução nicena já em curso desde o Tomo aos " +
      "Antioquenos (362) e acelerada após Adrianópolis (378) e o Cunctos Populos (380).",
  },

  motivacoes: {
    teologica: {
      titulo: "Completar a Definição Trinitária de Niceia",
      descricao:
        "O Concílio de Niceia (325) havia definido a consubstancialidade (homoousios) " +
        "do Filho com o Pai, mas deixou a pneumatologia sem desenvolvimento formal — o Credo " +
        "de 325 dizia apenas 'E no Espírito Santo'. Com a proliferação dos Pneumatomachianos " +
        "('Macedonianos'), que negavam a divindade do Paráclito, tornou-se urgente definir " +
        "dogmaticamente a divindade e consubstancialidade do Espírito Santo.",
    },
    politica: {
      titulo: "Pacificação Religiosa do Império Romano do Oriente",
      descricao:
        "Teodósio I assumiu um Império desestabilizado após o desastre militar de " +
        "Adrianópolis (378) e fragmentado por décadas de dominação ariana. A unidade " +
        "doutrinária sob a fé nicena era vista como indispensável para a estabilidade do Estado.",
    },
    jurisdicional: {
      titulo: "Resolução do Cisma de Antioquia",
      descricao:
        "Antioquia, uma das sedes mais importantes da cristandade, encontrava-se dividida " +
        "por um sério cisma eclesiástico entre bispos rivais (Paulino — reconhecido por Roma " +
        "e setores de Alexandria — e Melécio — amado pelo Oriente niceno). O concílio " +
        "buscava trazer estabilidade e ordem hierárquica àquela sé. Na prática, a morte de " +
        "Melécio durante as sessões e a eleição de Flaviano agravarão o impasse com o Ocidente.",
    },
    /**
     * 5ª motivação — inserir na UI entre jurisdicional e eclesial.
     */
    capital: {
      titulo: "Legalizar a Situação Canônica de Constantinopla",
      descricao:
        "A sé da capital acabara de ser 'arrancada dos hereges': em novembro de 380, " +
        "Demófilo (homoiano) fora expulso e Gregório de Nazianzo instalado na Igreja dos " +
        "Santos Apóstolos. Pesavam, porém, duas nuvens canônicas: (1) o intruso Máximo o " +
        "Cínico, consagrado ilegitimamente com apoio egípcio e depois rejeitado pelo povo; " +
        "(2) a acusação de que a própria posição de Gregório violava o Cânon 15 de Niceia " +
        "(proibição de translado de sé — Sasima/Nazianzo → Constantinopla). O concílio " +
        "precisava dar título canônico estável à sé da Nova Roma, julgar Máximo (Cânon 4) " +
        "e, no fim, regular a honra da capital (Cânon 3).",
    },
    eclesial: {
      titulo: "Confirmação Conciliar da Restauração Ortodoxa",
      descricao:
        "Teodósio já havia ordenado a devolução das igrejas aos bispos nicenos através do " +
        "Édito Cunctos Populos (380) e do Episcopis Tradi (janeiro de 381). O concílio teve " +
        "a função de dar legitimidade eclesial e autoridade canônica às normas de restauração " +
        "da fé católica — o que o édito imperial sozinho não podia conferir.",
    },
    /**
     * 6ª motivação — inserir no fim da lista na UI.
     */
    ocidente: {
      titulo: "Responder ao Ocidente e ao Impasse com Roma",
      descricao:
        "Roma (Papa Dâmaso I) e o Oriente viviam o impasse de Antioquia: a Sé Apostólica " +
        "reconhecia Paulino; o episcopado oriental, Melécio (e depois Flaviano). No mesmo " +
        "ano de 381, Santo Ambrósio presidiu o Sínodo de Aquileia no Ocidente. A carta do " +
        "sínodo de Constantinopla de 382 aos ocidentais (Dâmaso, Ambrósio e demais) prova " +
        "que os orientais se sentiam obrigados a prestar contas e a buscar comunhão com " +
        "o Ocidente — não um concílio 'à parte' do resto da Igreja, ainda que a convocação " +
        "inicial tenha sido só oriental. Satisfazer, ou ao menos informar, o Ocidente era " +
        "parte do horizonte político-eclesial de 381–382.",
    },
  },

  convidados: {
    oriente: {
      descricao:
        "Todos os bispos das dioceses do Oriente imperial foram convocados, reunindo " +
        "aproximadamente 150 bispos católicos ortodoxos (número tradicional da carta " +
        "sinodal; a lista de assinaturas não sobreviveu). A eles se juntaram, por um " +
        "tempo, cerca de 36 pneumatomachianos convidados ao diálogo.",
      regioes: [
        "Capadócia (São Gregório de Nissa, São Anfilóquio de Icônio)",
        "Antioquia e Síria (São Melécio e seus sufragâneos)",
        "Palestina (São Cirilo de Jerusalém)",
        "Egito (Timóteo de Alexandria — chegada tardia)",
        "Trácia e Ásia Menor",
        "Cilícia (Diodoro de Tarso)",
      ],
    },
    ocidente: {
      descricao:
        "O episcopado ocidental não foi convocado para a assembleia de 381. Teodósio " +
        "era augusto do Oriente: concílio imperial = convocação na sua pars imperii. " +
        "O Papa São Dâmaso I não esteve presente nem enviou legados. A crise ariana " +
        "aguda era sobretudo oriental; no Ocidente, Ambrósio combatia residualmente " +
        "em Aquileia (381). Por isso a ecumenicidade de Constantinopla I não foi " +
        "'automática' no dia da abertura: consolidou-se por recepção — de modo " +
        "decisivo no Concílio de Calcedônia (451), quando o Credo dos '150 Padres' " +
        "foi lido e acolhido — e, na memória ocidental, na veneração dos 'quatro " +
        "concílios' (São Gregório Magno: como os quatro Evangelhos).",
    },
  },

  logistica: {
    dataConvocacao: "Início de 381 d.C. (provavelmente após o Episcopis Tradi, jan. 381)",
    dataAbertura: "Maio de 381 (dia exato não unânime nas fontes)",
    dataEncerramento: "9 de julho de 381 (data tradicionalmente aceita)",
    localEscolhido: {
      cidade: "Constantinopla",
      edificio: "Igreja de Santa Irene (Hagia Eirene)",
      razao:
        "A Hagia Eirene ('Santa Paz' / Santa Irene) ficava ao lado do complexo do " +
        "palácio imperial e era uma das grandes igrejas da capital. A catedral " +
        "imperial — a Igreja dos Santos Apóstolos — já estava com Gregório de " +
        "Nazianzo desde a expulsão de Demófilo (novembro de 380). Reunir o concílio " +
        "na Irene simbolizava a retomada nicena no coração do poder: a mesma cidade " +
        "que em 360 sediara o sínodo homoiano agora hospedava a assembleia que " +
        "fecharia a Trindade. A tradição que fixa o local remete aos relatos " +
        "contemporâneos das sessões conciliares.",
      fonteTradicao: "Sócrates HE V.8; Sozomeno HE VII.7–9 (tradição do local e do relato das sessões).",
    },
  },

  /**
   * Três frentes do mesmo ato conciliar (para a Visão Geral / UI).
   */
  tresFrentes: {
    titulo: "Doutrina, tribunal e legislação",
    descricao:
      "Constantinopla I não foi só um debate de dogma. Foi, ao mesmo tempo: " +
      "(1) sínodo doutrinário — Credo e pneumatologia; " +
      "(2) tribunal eclesiástico — caso Máximo o Cínico (Cânon 4); " +
      "(3) legislador — limites diocesanos e honra da capital (Cânones 2–3). " +
      "As três frentes explicam por que a convocação misturava urgência teológica, " +
      "crise da sé da capital e pacificação do mapa episcopal do Oriente.",
  },
};

export const cronologiaConvocacao = [
  { data: "1 jan 379", evento: "Morte de São Basílio de Cesareia" },
  { data: "19 jan 379", evento: "Teodósio I é proclamado imperador do Oriente" },
  { data: "379", evento: "Sínodo pró-niceno de Antioquia sob Melécio — prepara a comunhão oriental" },
  { data: "379", evento: "Gregório de Nazianzo chega a Constantinopla (capela da Anastasis)" },
  { data: "27 fev 380", evento: "Édito Cunctos Populos — fé nicena como norma oficial" },
  { data: "inverno 380", evento: "Batismo de Teodósio em Tessalônica (Ascólio/Ascholius)" },
  { data: "nov 380", evento: "Expulsão de Demófilo; Gregório na Igreja dos Santos Apóstolos" },
  { data: "380–381", evento: "Escândalo de Máximo o Cínico (ordenação interrompida)" },
  { data: "10 jan 381", evento: "Édito Episcopis Tradi — igrejas entregues a bispos nicenos" },
  { data: "início 381", evento: "Convocação formal do concílio por Teodósio I" },
  { data: "381", evento: "Sínodo de Aquileia (Ocidente), sob Ambrósio — paralelo ocidental" },
  { data: "maio 381", evento: "Abertura solene na Igreja de Santa Irene" },
  { data: "9 jul 381", evento: "Encerramento tradicional; cânones e carta a Teodósio" },
  { data: "30 jul 381", evento: "Édito Nullis Haereticis — ratificação imperial" },
];