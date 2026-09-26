/**
 * CONTEXTO POLÍTICO DO CONCÍLIO DE CONSTANTINOPLA I
 * O Império Romano, Teodósio e a relação Igreja-Estado no século IV.
 */

export const contextoPolitico = {
  // --- O IMPÉRIO EM 381 ---
  imperio: {
    titulo: "O Império Romano Dividido",
    descricao:
      "Em 381, o Império Romano está formalmente dividido entre dois augustos: " +
      "Teodósio I governa o Oriente (com capital em Constantinopla) e " +
      "Graciano governa o Ocidente (com capital em Milão/Treves). " +
      "Valentiniano II, meio-irmão de Graciano, é co-augusto no Ocidente (mas é criança). " +
      "A divisão é administrativa, não política — ambos são formalmente co-imperadores. " +
      "Mas na prática, cada um cuida de seus próprios assuntos.",
    situacao: {
      militar:
        "Crítica. O desastre de Adrianópolis (378) destruiu o exército romano do Oriente. " +
        "Os godos estão saqueando a Trácia e ameaçam Constantinopla. " +
        "Teodósio precisa reconstruir o exército do zero enquanto negocia com os bárbaros.",
      economica:
        "Precária. As guerras constantes, a perda de territórios e a inflação " +
        "enfraquecem a economia imperial. Os impostos são pesados e a corrupção, endêmica.",
      religiosa:
        "Caótica. O Oriente está dividido entre nicenos, homoianos, eunomianos, " +
        "pneumatomachianos, apolinaristas e pagãos. Cada grupo tem suas próprias " +
        "igrejas, bispos e redes de influência. A unidade religiosa é um sonho distante.",
    },
  },
  

  // --- OS ÉDITOS ---
  editos: [
    {
      nome: "Cunctos Populos",
      data: "28 de fevereiro de 380",
      local: "Tessalônica",
      texto:
        "IMPP. GR(ATI)IANUS, VAL(ENTINIANUS) ET THEO(DOSIUS) AAA. " +
        "EDICTUM AD POPULUM VRBIS CONSTANTINOPOLITANAE. " +
        "Cunctos populos, quos clementiae nostrae regit temperamentum, " +
        "in tali volumus religione versari, quam divinum Petrum apostolum " +
        "tradidisse Romanis religio usque ad nunc ab ipso insinuata declarat...",
      traducao:
        "Queremos que todos os povos governados pela clemência de nossa moderação " +
        "professem a religião que o divino apóstolo Pedro transmitiu aos romanos, " +
        "a qual é pregada até agora conforme ele a insinuou, e que é evidente " +
        "que é seguida pelo pontífice Dâmaso e por Pedro, bispo de Alexandria... " +
        "Isto é, segundo a disciplina apostólica e a doutrina evangélica, " +
        "creiamos na única divindade do Pai e do Filho e do Espírito Santo, " +
        "em igual majestade e piedosa Trindade.",
      importancia:
        "Primeira vez que um imperador romano define a fé cristã ortodoxa " +
        "em termos trinitários completos (Pai, Filho E Espírito Santo). " +
        "É o documento político que antecipa a definição teológica de Constantinopla I.",
      fonte: "Codex Theodosianus, XVI.1.2",
    },
    {
      nome: "Episcopis Tradi",
      data: "10 de janeiro de 381",
      local: "Constantinopla",
      traducao:
        "Ordenamos que todas as igrejas sejam imediatamente entregues aos bispos " +
        "que confessam que o Pai, o Filho e o Espírito Santo são de uma só " +
        "majestade e virtude, da mesma glória e do mesmo esplendor, " +
        "que não introduzem nenhuma diferença profana por sacrílega separação, " +
        "mas que reconhecem a ordem da Trindade pela enumeração das Pessoas " +
        "e a unidade da Divindade.",
      importancia:
        "Complemento do Cunctos Populos. Se o primeiro édito declarou qual era " +
        "a fé correta, este ordena a transferência física das igrejas para " +
        "os bispos que a professam. Na prática, é uma purga dos bispos arianos.",
      fonte: "Codex Theodosianus, XVI.1.3",
    },
    {
      nome: "Nullis Haereticis",
      data: "30 de julho de 381 (pós-concílio)",
      local: "Constantinopla",
      traducao:
        "Nenhum lugar de reunião será concedido aos hereges, e nenhuma " +
        "oportunidade será dada para a celebração de seus mistérios insanos. " +
        "Que todos saibam que, mesmo que obtenham algo por meio de rescritos " +
        "especiais obtidos por fraude, esses rescritos não terão valor.",
      importancia:
        "Ratificação imperial dos resultados do concílio. Teodósio proíbe " +
        "o culto público de todas as heresias condenadas em Constantinopla I.",
      fonte: "Codex Theodosianus, XVI.5.6",
    },
  ],

  // --- RELAÇÃO IGREJA-ESTADO ---
  igrejaEstado: {
    titulo: "A Relação Igreja-Estado no Século IV",
    descricao:
      "O século IV é o período de transformação mais radical na relação entre " +
      "Igreja e Estado na história do cristianismo. Em 312, Constantino se converte " +
      "e a Igreja passa de perseguida a favorecida. Em 380, Teodósio a torna " +
      "religião exclusiva. Em 392, o paganismo é proibido.",
    conceitos: [
      {
        termo: "Episcopus exterior",
        significado:
          "'Bispo dos de fora' — título que Constantino usava para si mesmo, " +
          "indicando que o imperador tinha responsabilidade sobre os assuntos " +
          "externos da Igreja (convocação de concílios, manutenção da ordem), " +
          "mas não sobre a doutrina.",
      },
      {
        termo: "Symphonia",
        significado:
          "O ideal bizantino de 'harmonia' entre Igreja e Estado, onde o " +
          "imperador e o patriarca governam juntos em suas respectivas esferas. " +
          "Na prática, o imperador frequentemente dominava.",
      },
      {
        termo: "Caesaropapismo",
        significado:
          "Termo moderno (e controverso) para descrever a tendência de " +
          "imperadores bizantinos de interferir em questões doutrinárias. " +
          "Teodósio é um exemplo: ele convocou o concílio, mas (diferente " +
          "de Constâncio II) respeitou as decisões teológicas dos bispos.",
      },
    ],
    avaliacao:
      "A relação de Teodósio com a Igreja é complexa. Por um lado, ele usou " +
      "o poder imperial para impor a ortodoxia (o que hoje consideraríamos " +
      "intolerância religiosa). Por outro, ele genuinamente respeitava a " +
      "autoridade teológica dos bispos e não tentou ditar doutrina como " +
      "Constâncio II havia feito. O concílio de 381 foi convocado pelo " +
      "imperador, mas suas decisões teológicas foram genuinamente episcopais.",
  },

  // --- CONSTANTINOPLA COMO CAPITAL ---
  capital: {
    titulo: "Constantinopla: A Nova Roma",
    descricao:
      "Fundada por Constantino em 330 sobre a antiga Bizâncio, Constantinopla " +
      "era em 381 uma cidade de ~200.000 habitantes, a segunda maior do Império " +
      "(atrás apenas de Roma). Sua posição estratégica no Bósforo a tornava " +
      "o centro comercial e militar do Oriente.",
    relevanciaConciliar:
      "O fato de o concílio ser realizado em Constantinopla — e não em " +
      "Niceia, Antioquia ou Alexandria — é altamente significativo. " +
      "Constantinopla era a capital imperial, mas eclesiasticamente era " +
      "uma diocese secundária (sufragânea de Heracleia!). " +
      "O Cânon 3 do concílio elevará Constantinopla ao segundo lugar " +
      "na hierarquia eclesiástica, acima de Alexandria, Antioquia e Jerusalém, " +
      "gerando um conflito com Roma que durará até 1054 e além.",
  },
};

export const cronologiaPolitica = [
  { ano: "378", evento: "Desastre de Adrianópolis — morte de Valente" },
  { ano: "379", evento: "Teodósio proclamado augusto do Oriente" },
  { ano: "380", evento: "Édito Cunctos Populos — nicenismo oficial" },
  { ano: "380", evento: "Teodósio batizado por Ascólio de Tessalônica" },
  { ano: "380", evento: "Expulsão de Demófilo de Constantinopla" },
  { ano: "381", evento: "Édito Episcopis Tradi — purga de bispos arianos" },
  { ano: "381", evento: "Concílio de Constantinopla I" },
  { ano: "381", evento: "Édito Nullis Haereticis — proibição do culto herege" },
  { ano: "382", evento: "Sínodo de Constantinopla (continuação)" },
  { ano: "383", evento: "Colóquio imperial com as seitas (fracasso)" },
  { ano: "391", evento: "Proibição total do paganismo" },
  { ano: "395", evento: "Morte de Teodósio — divisão definitiva do Império" },
];