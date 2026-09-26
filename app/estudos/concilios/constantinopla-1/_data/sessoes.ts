/**
 * SESSÕES E FASES DO CONCÍLIO DE CONSTANTINOPLA I
 * Cronologia detalhada dos ~2 meses de trabalhos conciliares (maio – 9 de julho de 381).
 * Fontes principais: Sócrates HE V.8; Sozomeno HE VII.7–9; Gregório Nazianzeno, Or. 42 e De vita sua.
 */

export interface SessaoConciliar {
  fase: string;
  periodo: string;
  presidente: string;
  eventos: {
    titulo: string;
    descricao: string;
    desdobramento: string;
  }[];
  resultado: string;
  clima: string;
}

export const sessoes: SessaoConciliar[] = [
  // =============================================
  // FASE 1: MELÉCIO DE ANTIOQUIA
  // =============================================
  {
    fase: "Fase 1",
    periodo: "Maio – início de junho de 381",
    presidente: "São Melécio de Antioquia",
    eventos: [
      {
        titulo: "Abertura solene (maio de 381)",
        descricao:
          "O concílio abre na Igreja de Santa Irene (Hagia Eirene), junto ao palácio imperial, " +
          "com cerca de 150 bispos orientais. Teodósio I está presente na abertura ou envia " +
          "representantes. São Melécio de Antioquia — confessor da fé, exilado três vezes sob " +
          "arianos — é aclamado presidente. A primeira ordem do dia é a reafirmação da fé " +
          "dos 318 Padres de Niceia (325).",
        desdobramento:
          "Os bispos reafirmam o Credo de Niceia. As heresias arianas e afins são condenadas " +
          "em princípio. O clima inicial é de esperança: o Oriente niceno, pela primeira vez " +
          "em décadas, tem imperador e maioria episcopal alinhados.",
      },
      {
        titulo: "Chegada de Timóteo de Alexandria e dos egípcios",
        descricao:
          "A delegação egípcia, liderada pelo patriarca Timóteo I de Alexandria (sucessor de " +
          "Pedro II), chega com atraso. Em vez de reforçar a unidade, impugna a posição de " +
          "Gregório de Nazianzo como bispo de Constantinopla, com dois argumentos canônicos: " +
          "(1) o escândalo de Máximo o Cínico — ordenação clandestina tentada com apoio " +
          "egípcio, que humilhara Gregório e manchara a sé; (2) o Cânon 15 de Niceia, que " +
          "proíbe o translado de um bispo de uma sé para outra — Gregório fora sagrado para " +
          "Sasima (ou vinculado a Nazianzo) e nunca deveria ter sido transferido para a capital.",
        desdobramento:
          "A 'questão canônica' torna-se o fio condutor do drama interno. Não é só vaidade " +
          "egípcia: é o conflito entre a necessidade pastoral (Gregório salvou a sé nicena " +
          "de Constantinopla) e a letra dos cânones de 325. Alexandria também teme a " +
          "ascensão da capital imperial como rival hierárquica.",
      },
      {
        titulo: "Morte súbita de Melécio (junho de 381)",
        descricao:
          "Poucas semanas após a abertura, Melécio morre em Constantinopla. O choque é " +
          "geral: ele era o único nome capaz de manter coesos melecianos, capadócios e " +
          "parte dos egípcios. Gregório de Nazianzo (ou Gregório de Nissa) pronuncia a " +
          "oração fúnebre. Melécio é sepultado na capital; mais tarde seus restos seriam " +
          "levados a Antioquia.",
        desdobramento:
          "Duas crises explodem de uma vez: (1) quem preside o concílio; (2) quem sucede " +
          "em Antioquia. Os orientais elegem Flaviano (presbítero meleciano); Roma e " +
          "parte de Alexandria preferem Paulino. O cisma meleciano × pauliniano, já " +
          "antigo, agrava-se e só se resolverá de fato por volta de 398, com o " +
          "reconhecimento romano de Flaviano.",
      },
      {
        titulo: "A sucessão de Antioquia: Flaviano contra Paulino",
        descricao:
          "Com Melécio morto, o concílio enfrenta a escolha do bispo de Antioquia. " +
          "Paulino — reconhecido por Roma (Dâmaso) e por setores alexandrinos — tem " +
          "pouco apoio no episcopado oriental. Flaviano, eleito pelos melecianos, tem " +
          "a maioria na sala. Gregório de Nazianzo defende reconhecer Paulino para " +
          "restaurar a comunhão com a Sé Apostólica; a maioria oriental recusa.",
        desdobramento:
          "Esta decisão envenena o restante do concílio e será uma das duas grandes " +
          "razões da frieza de Roma em 382 (a outra é o Cânon 3). Gregório sai " +
          "politicamente isolado: perde a batalha de Antioquia e continua sob " +
          "suspeita canônica dos egípcios.",
      },
    ],
    resultado:
      "Fé nicena reafirmada e heresias condenadas em princípio, mas a morte de Melécio, " +
      "a eleição de Flaviano e a impugnação egípcia a Gregório transformam o concílio " +
      "num campo de tensão jurisdicional e pessoal.",
    clima: "Da esperança da abertura à crise profunda em poucas semanas.",
  },

  // =============================================
  // FASE 2: GREGÓRIO DE NAZIANZO
  // =============================================
  {
    fase: "Fase 2",
    periodo: "Junho de 381",
    presidente: "São Gregório de Nazianzo",
    eventos: [
      {
        titulo: "Gregório assume a presidência",
        descricao:
          "Após a morte de Melécio, Gregório — já bispo de fato de Constantinopla e " +
          "maior teólogo presente — é eleito presidente. Aceita com relutância: prefere " +
          "a vida contemplativa e sente o peso da contestação canônica. O Cânon 15 de " +
          "Niceia ('um bispo não deve passar de uma cidade para outra') paira sobre " +
          "sua cabeça como arma nas mãos de Timóteo e dos egípcios.",
        desdobramento:
          "Gregório preside a fase teologicamente mais produtiva do concílio, mas sob " +
          "cerco: qualquer gesto pode ser lido como usurpação. A questão não é só " +
          "jurídica — é a luta de Alexandria para não ceder prestígio à 'Nova Roma'.",
      },
      {
        titulo: "Chegada e diálogo com os 36 pneumatomachianos",
        descricao:
          "Cerca de 36 bispos macedonianos (pneumatomachianos), liderados por Eleúsio " +
          "de Cízico e Marciano de Lâmpsaco, são recebidos na esperança de união. " +
          "Aceitam a divindade do Filho (muitos são homoiousianos), mas recusam chamar " +
          "o Espírito Santo de Deus ou consubstancial. Para eles, o ES é 'intermediário' " +
          "— nem criatura comum nem Deus verdadeiro.",
        desdobramento:
          "Teodósio e Gregório oferecem a fórmula da consubstancialidade do Espírito " +
          "ao Pai e ao Filho. Os macedonianos pedem tempo para consultar os colegas " +
          "na Ásia Menor — sinal de que a negociação ainda parece possível.",
      },
      {
        titulo: "Fracasso do diálogo e retirada dos macedonianos",
        descricao:
          "Os 36 retornam com a recusa: não aceitam o homoousios para o Espírito Santo " +
          "e preferem fórmulas vagas ('semelhante em tudo'). O diálogo fracassa. " +
          "Abandonam o concílio e voltam às suas sedes.",
        desdobramento:
          "O caminho fica livre para a condenação formal do pneumatomachianismo " +
          "(Cânon 1) e para a redação da grande cláusula pneumatológica do Credo: " +
          "'Senhor que dá a vida, que procede do Pai, que com o Pai e o Filho é " +
          "adorado e glorificado, que falou pelos profetas'.",
      },
      {
        titulo: "Elaboração do Credo expandido",
        descricao:
          "O concílio trabalha a confissão que a tradição chamará Niceno-Constantinopolitana. " +
          "Além da pneumatologia, entram: cristologia expandida (encarnação do ES e de Maria, " +
          "Pilatos, sepultura, 'reino sem fim' anti-marceliano); Igreja; um só batismo; " +
          "ressurreição e vida do século vindouro. (Sobre se o texto foi 'escrito do zero' " +
          "nesta sala, ver o 'Problema do Credo' — hipótese de base em credo batismal " +
          "oriental / Jerusalém / Ancoratus.)",
        desdobramento:
          "O núcleo doutrinal de 381 fica estabelecido. No Ocidente, séculos depois, " +
          "a liturgia latina acrescentará o Filioque; o texto grego de 381 permanece " +
          "sem essa cláusula.",
      },
      {
        titulo: "A crise final e a renúncia de Gregório",
        descricao:
          "A questão de Antioquia e a impugnação egípcia voltam com força. Gregório, " +
          "doente, exausto e humilhado, oferece a renúncia. Pronuncia a Oração 42 " +
          "(o 'discurso de despedida' ou 'supremo vale'): compara-se a Jonas (lançado " +
          "ao mar para acalmar a tempestade); apela à harmonia da Igreja; aconselha " +
          "a unidade acima das rivalidades de sé. É uma das peças mais altas da " +
          "oratória cristã antiga.",
        desdobramento:
          "Gregório deixa a presidência e a capital, retorna à Capadócia e morre em 390. " +
          "O concílio perde seu teólogo mais brilhante, mas remove o obstáculo pessoal " +
          "que impedia o encerramento dos trabalhos. A sé de Constantinopla fica vaga.",
      },
    ],
    resultado:
      "Credo e condenação dos pneumatomachianos encaminhados; Gregório fora do cargo; " +
      "Antioquia nas mãos de Flaviano; ferida aberta com Roma e Alexandria.",
    clima:
      "Intenso, dramático e emocionalmente devastador — o profeta rejeitado no meio " +
      "da assembleia que ele mesmo ajudara a salvar teologicamente.",
  },

  // =============================================
  // FASE 3: NECTÁRIO
  // =============================================
  {
    fase: "Fase 3",
    periodo: "Final de junho – 9 de julho de 381",
    presidente: "Nectário de Constantinopla",
    eventos: [
      {
        titulo: "Eleição-relâmpago de Nectário",
        descricao:
          "Com a sé e a presidência vagas, o concílio e Teodósio precisam de um nome " +
          "que não reacenda a guerra entre melecianos e egípcios. Diodoro de Tarso " +
          "sugere Nectário: senador e pretor de Constantinopla, de família de Tarso " +
          "(Cilícia), homem de boa fama. O detalhe chocante: ainda era catecúmeno " +
          "(não batizado). Por isso era o candidato 'perfeito' politicamente — " +
          "neutro: não era meleciano, não era egípcio, não carregava o ódio de " +
          "nenhum partido da disputa de Antioquia ou do escândalo de Máximo.",
        desdobramento:
          "Nectário é batizado, ordenado diácono, presbítero e bispo em poucos dias, " +
          "e consagrado na presença do imperador (a tradição sinodal o afirma). " +
          "Assume a presidência da Fase 3. Governará a sé por cerca de 16 anos " +
          "(até 397), consolidando na prática o que o Cânon 3 enunciará em honra.",
      },
      {
        titulo: "Promulgação dos cânones disciplinares",
        descricao:
          "Sob Nectário, o concílio finaliza os cânones. Os cânones 1–4 são " +
          "indiscutivelmente de 381: (1) fé de Niceia e anátema às heresias; " +
          "(2) limites das dioceses (Egito, Oriente, Ásia, Ponto, Trácia); " +
          "(3) primazia de honra de Constantinopla após Roma, por ser a Nova Roma; " +
          "(4) Máximo o Cínico nunca foi bispo; atos nulos. Os chamados cânones " +
          "5–6 (ou 5–7 em algumas coleções) tendem a ser do sínodo de 382.",
        desdobramento:
          "O Cânon 3 torna-se a semente canônica da elevação de Constantinopla " +
          "e, via Cânon 28 de Calcedônia e Cânon 36 de Trullo, de séculos de " +
          "tensão com a leitura petrina da primazia romana.",
      },
      {
        titulo: "Sessão final (9 de julho de 381): carta a Teodósio e encerramento",
        descricao:
          "Na data tradicionalmente aceita do encerramento — 9 de julho de 381 — " +
          "o concílio apresenta a Teodósio a carta sinodal com os resultados: " +
          "confirmação da fé nicena, condenação das heresias, definição " +
          "pneumatológica e cânones. A data exata da abertura em maio não é " +
          "unânime nas fontes; o término em 9 de julho é o marco usual da " +
          "tradição. Teodósio ratifica por édito (Nullis Haereticis, 30 de " +
          "julho de 381).",
        desdobramento:
          "O concílio encerra formalmente. Questões pendentes (Antioquia, " +
          "relação com o Ocidente) passam ao sínodo de Constantinopla de 382, " +
          "que escreverá aos ocidentais a carta com a fórmula das 'três " +
          "hipóstases perfeitas' e de onde provêm, com probabilidade, os " +
          "cânones 5 e 6 das coleções orientais.",
      },
    ],
    resultado:
      "Trabalhos encerrados: Credo, Cânones 1–4 e ratificação imperial. " +
      "Pontas soltas: cisma de Antioquia (Flaviano × Paulino), frieza romana, " +
      "atos processuais do concílio que a história não preservou.",
    clima:
      "Pragmático e acelerado. Com um neófito diplomático na presidência, " +
      "a assembleia prioriza fechar o dogma e a disciplina e dispersar.",
  },
];

export const resumoSessoes =
  "O Concílio de Constantinopla I durou cerca de dois meses (maio a 9 de julho de 381) " +
  "em três fases: Melécio (abertura e morte), Gregório de Nazianzo (Credo, macedonianos, " +
  "renúncia sob o Cânon 15 e a crise de Antioquia) e Nectário (cânones e carta a Teodósio). " +
  "Foi ao mesmo tempo sínodo doutrinário, tribunal (caso Máximo, Cânon 4) e legislador " +
  "(Cânones 2–3). Apesar do caos, fixou a pneumatologia do Credo que a Igreja reza até hoje.";

/** Linha do tempo compacta (para UI / timeline) */
export const linhaDoTempoSessoes = [
  { data: "Maio 381", evento: "Abertura na Santa Irene; Melécio presidente; fé de Niceia reafirmada" },
  { data: "Maio/jun 381", evento: "Chegada de Timóteo e egípcios; impugnação de Gregório (Máximo + Cânon 15)" },
  { data: "Junho 381", evento: "Morte de Melécio; Gregório assume; Flaviano eleito em Antioquia" },
  { data: "Junho 381", evento: "36 macedonianos (Eleúsio, Marciano) retiram-se" },
  { data: "Junho 381", evento: "Elaboração do Credo expandido; condenação do pneumatomachianismo" },
  { data: "Junho 381", evento: "Renúncia de Gregório; Oração 42 (Jonas, harmonia, unidade)" },
  { data: "Jun/jul 381", evento: "Nectário: batismo e ordens em dias; sugestão de Diodoro de Tarso" },
  { data: "9 jul 381", evento: "Sessão final; Cânones 1–4; carta sinodal a Teodósio" },
  { data: "30 jul 381", evento: "Édito Nullis Haereticis — ratificação imperial" },
];