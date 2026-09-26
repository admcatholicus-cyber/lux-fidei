// estudos/concilios/calcedonia/_data/sessoes.ts

// ═══════════════════════════════════════════════════════
// ESTRUTURAS DE TIPOS
// ═══════════════════════════════════════════════════════

export interface EventoSessao {
  titulo: string;
  descricao: string;
  desdobramento: string;
}

export interface SessaoDetalhada {
  fase: string;
  numero: string;
  data: string;
  presidente: string;
  periodo: string;
  clima: string;
  eventos: EventoSessao[];
  resultado: string;
}

export interface EventoLinhaDoTempo {
  data: string;
  evento: string;
}

export interface Presidente {
  periodo: string;
  nome: string;
  obs: string;
}

// ═══════════════════════════════════════════════════════
// RESUMO GERAL
// ═══════════════════════════════════════════════════════

export const resumoSessoes =
  "O Concílio de Calcedônia reuniu-se ao longo de 25 dias (8 de outubro a 1 de " +
  "novembro de 451) na Igreja de Santa Eufêmia, em Calcedônia. Os trabalhos " +
  "foram divididos em 16 sessões formais: 6 sessões solenes (dedicadas ao " +
  "julgamento de Dioscoro, à recepção do Tomo de Leão e à promulgação da " +
  "Definição cristológica) e 10 sessões administrativas (dedicadas a disputas " +
  "jurisdicionais, reabilitações de bispos e à promulgação dos cânones " +
  "disciplinares). As sessões foram presididas formalmente pelos legados " +
  "papais Paschasinus e Lucêncio, mas o controle efetivo da agenda esteve " +
  "nas mãos dos 19 comissários imperiais nomeados por Marciano — um fato " +
  "que gerou tensões constantes entre a autoridade eclesiástica e o poder " +
  "imperial. O ritmo dos trabalhos foi intenso e por vezes caótico: gritos, " +
  "protestos, ameaças de deposição e até violência física marcaram diversas " +
  "sessões, especialmente a 1ª (julgamento do Latrocínio) e a 5ª (votação " +
  "da Definição).";

// ═══════════════════════════════════════════════════════
// SUCESSÃO DA PRESIDÊNCIA
// ═══════════════════════════════════════════════════════

export const presidentes: Presidente[] = [
  {
    periodo: "Sessões 1–6",
    nome: "Paschasinus de Lilibeu (Sicília) — Legado Papal",
    obs:
      "Bispo de Lilibeu (atual Marsala, Sicília), enviado pelo Papa Leão I como " +
      "seu representante principal. Sentou-se à direita do trono imperial vazio " +
      "(o trono era o símbolo da presença de Cristo e do imperador). Presidiu " +
      "as sessões doutrinárias com autoridade reconhecida pela maioria, embora " +
      "os comissários imperiais frequentemente o contornassem. Sua assinatura " +
      "aparece em primeiro lugar nas atas.",
  },
  {
    periodo: "Sessões 1–6",
    nome: "Lucêncio de Ascoli (Itália) — Legado Papal",
    obs:
      "Bispo de Ascoli Piceno (Itália central), segundo legado papal. Atuou " +
      "como co-presidente ao lado de Paschasinus, reforçando a autoridade " +
      "romana nas sessões doutrinárias. Foi particularmente vocal na " +
      "exigência de que o Tomo de Leão fosse lido e aceito.",
  },
  {
    periodo: "Sessões 1–6",
    nome: "Anatólio de Constantinopla — Patriarca",
    obs:
      "Patriarca de Constantinopla (449–458), sucessor do martirizado Flavian. " +
      "Sua posição era delicada: fora eleito com o apoio de Dioscoro após o " +
      "Latrocínio, o que levantava suspeitas sobre sua ortodoxia. Para " +
      "demonstrar sua lealdade à nova ordem, Anatólio alinhou-se rapidamente " +
      "com os legados papais e com a corte de Marciano. Presidiu ao lado " +
      "dos legados, mas com autoridade inferior.",
  },
  {
    periodo: "Sessões 1–16",
    nome: "19 Comissários Imperiais (Senadores e Altos Funcionários)",
    obs:
      "Liderados pelo patrício Anatólio (homônimo do patriarca, mas leigo) e " +
      "pelo prefeito do pretório Florentius. Embora não fossem bispos e não " +
      "tivessem voto teológico, controlavam a agenda, a ordem dos debates, " +
      "a admissão de documentos e a cronologia das sessões. Sua presença " +
      "constante (sentavam-se no centro da assembleia, entre os legados e " +
      "o patriarca) é o indicador mais claro do caráter 'imperial' de " +
      "Calcedônia. Nas sessões administrativas (7–16), seu papel foi " +
      "ainda mais dominante.",
  },
  {
    periodo: "Sessão 6 (presença especial)",
    nome: "Imperador Marciano e Imperatriz Pulquéria",
    obs:
      "O casal imperial compareceu pessoalmente à 6ª sessão solene (25 de " +
      "outubro), um evento sem precedentes na história dos concílios. " +
      "Marciano discursou em latim (traduzido para o grego pelo intérprete " +
      "imperial), declarando que estava presente 'para confirmar a fé, " +
      "não para dominar os bispos'. Os bispos responderam com aclamações " +
      "extáticas: 'Marciano é o novo Constantino! Pulquéria é a nova " +
      "Helena! Em vós, a fé brilha!'. A presença imperial deu à Definição " +
      "de Calcedônia uma solenidade e uma autoridade civil que nenhum " +
      "outro documento conciliar da antiguidade possuía.",
  },
];

// ═══════════════════════════════════════════════════════
// LINHA DO TEMPO
// ═══════════════════════════════════════════════════════

export const linhaDoTempoSessoes: EventoLinhaDoTempo[] = [
  {
    data: "8 Out",
    evento:
      "Sessão 1 — Abertura solene. Leitura das atas do Latrocínio de 449. " +
      "Dioscoro é sentado no meio da assembleia como acusado. Gritos de " +
      "'Queimem Dioscoro!' e 'Ele deve ser cortado ao meio!'.",
  },
  {
    data: "10 Out",
    evento:
      "Sessão 2 — Leitura dos documentos de fé: Credo de Niceia (325), " +
      "Credo de Constantinopla (381), 2ª Carta de Cirilo a Nestório, " +
      "Carta de Cirilo a João de Antioquia (Fórmula de União de 433) " +
      "e o Tomo de Leão Magno. Aclamação: 'Pedro falou por Leão!'.",
  },
  {
    data: "13 Out",
    evento:
      "Sessão 3 — Julgamento final e deposição de Dioscoro de Alexandria. " +
      "Dioscoro recusa-se a comparecer (alegando doença). O concílio o " +
      "depõe por unanimidade e o exila para Gangra, na Paflagônia.",
  },
  {
    data: "17 Out",
    evento:
      "Sessão 4 — Debate sobre a necessidade de uma nova definição de fé. " +
      "Muitos bispos orientais resistem: 'Basta o Credo de Niceia!'. " +
      "Os comissários imperiais pressionam pela elaboração de um novo " +
      "documento. Os 13 bispos egípcios recusam-se a assinar qualquer " +
      "coisa sem um novo patriarca de Alexandria.",
  },
  {
    data: "22 Out",
    evento:
      "Sessão 5 — Elaboração e votação da Definição de Calcedônia. Uma " +
      "comissão de 22 bispos redige o texto no martyrium de Santa Eufêmia. " +
      "Primeiro rascunho rejeitado (acusado de nestorianismo). Segundo " +
      "rascunho aprovado após a inserção da cláusula 'em duas naturezas' " +
      "(en dyo physesin). Aclamação geral.",
  },
  {
    data: "25 Out",
    evento:
      "Sessão 6 — Sessão solene com a presença de Marciano e Pulquéria. " +
      "Confirmação imperial da Definição. Aclamações: 'Marciano é o novo " +
      "Constantino! Pulquéria é a nova Helena!'. A Definição é lida em " +
      "voz alta e aclamada como 'a fé dos padres'.",
  },
  {
    data: "26 Out",
    evento:
      "Sessão 7 — Resolução da disputa entre Juvenal de Jerusalém e " +
      "Máximo de Antioquia. Jerusalém é elevada a patriarcado " +
      "independente, recebendo jurisdição sobre as três províncias " +
      "da Palestina.",
  },
  {
    data: "26–28 Out",
    evento:
      "Sessões 8–10 — Disputas jurisdicionais menores: Fotio de Tiro " +
      "vs. Eustáquio de Berito; reabilitação de bispos depostos no " +
      "Latrocínio; casos de simonia e ordenações irregulares.",
  },
  {
    data: "29–30 Out",
    evento:
      "Sessões 11–14 — Reabilitação de Teodoreto de Ciro (após " +
      "anatematizar Nestório publicamente) e de Ibas de Edessa. " +
      "Julgamento de acusações contra bispos egípcios e sírios.",
  },
  {
    data: "31 Out – 1 Nov",
    evento:
      "Sessões 15–16 — Promulgação dos 27 cânones disciplinares. " +
      "Na Sessão 16, o Cânon 28 (primazia de Constantinopla) é " +
      "aprovado pela maioria oriental, mas os legados papais " +
      "protestam formalmente e abandonam a sessão.",
  },
];

// ═══════════════════════════════════════════════════════
// DETALHAMENTO DAS SESSÕES SOLENES (1–6)
// ═══════════════════════════════════════════════════════

export const sessoes: SessaoDetalhada[] = [
  // ─── SESSÃO 1 ───
  {
    fase: "1ª Sessão Solene",
    numero: "Sessão 1",
    data: "8 de outubro de 451",
    presidente: "Paschasinus de Lilibeu (legado papal)",
    periodo: "Manhã e tarde do dia 8",
    clima:
      "Explosivo e caótico. A primeira sessão foi marcada por gritos, " +
      "lágrimas e acusações mútuas. Os bispos que participaram do " +
      "Latrocínio de 449 estavam aterrorizados; os que sofreram sob " +
      "Dioscoro estavam furiosos. O próprio Dioscoro, presente como " +
      "acusado, foi obrigado a sentar-se no meio da assembleia (não " +
      "no trono presidencial), o que provocou aplausos e vaias " +
      "simultâneos. A leitura das atas do Latrocínio durou horas " +
      "e foi interrompida dezenas de vezes por protestos.",

    eventos: [
      {
        titulo: "Abertura e leitura da carta imperial",
        descricao:
          "Os 19 comissários imperiais abriram a sessão lendo a carta " +
          "de Marciano que ordenava a revisão do Latrocínio de 449. " +
          "Paschasinus, em nome do Papa Leão, declarou que o concílio " +
          "estava reunido 'para restaurar a fé e punir os culpados'. " +
          "Dioscoro, que entrara na igreja cercado por seus partidários " +
          "egípcios, foi intimado a sentar-se no banco dos acusados.",
        desdobramento:
          "A inversão de papéis — o presidente do Latrocínio agora " +
          "como acusado — foi o momento simbólico mais poderoso do " +
          "concílio e estabeleceu o tom de justiça retributiva que " +
          "dominaria as três primeiras sessões.",
      },
      {
        titulo: "Leitura das atas do Latrocínio de 449",
        descricao:
          "As atas completas do Latrocínio foram lidas em voz alta " +
          "pelo notário imperial Aécio. A leitura durou várias horas " +
          "e revelou a extensão da manipulação de Dioscoro: a recusa " +
          "em ler o Tomo de Leão, a introdução de soldados e monges " +
          "armados na igreja, a coação dos bispos para assinar atas " +
          "em branco, e o espancamento de Flavian. A cada revelação, " +
          "os bispos gritavam: 'Queimem Dioscoro!', 'Ele deve ser " +
          "cortado ao meio!', 'Que seus olhos sejam arrancados!'.",
        desdobramento:
          "A leitura das atas foi o ato de 'desenterramento' do " +
          "Latrocínio. Muitos bispos que haviam votado com Dioscoro " +
          "em 449 aproveitaram a ocasião para alegar coerção: 'Nós " +
          "assinamos em branco!', 'Fomos forçados pelos soldados!', " +
          "'Barsauma e seus monges nos ameaçaram de morte!'.",
      },
      {
        titulo: "O testemunho de Eusébio de Dorileu",
        descricao:
          "Eusébio de Dorileu, o bispo que originalmente denunciara " +
          "Eutiques em 448 e fora deposto no Latrocínio, apresentou " +
          "sua acusação formal contra Dioscoro. Com voz embargada, " +
          "narrou como fora arrastado para fora da igreja em 449, " +
          "despojado de suas vestes e exilado. Sua declaração final " +
          "foi recebida com lágrimas: 'Flavian foi assassinado! " +
          "Eu fui exilado! A fé foi pisoteada!'.",
        desdobramento:
          "O testemunho de Eusébio transformou o julgamento de " +
          "Dioscoro de uma disputa teológica em um drama moral. " +
          "A partir deste momento, a condenação de Dioscoro " +
          "tornou-se inevitável — a questão era apenas quando " +
          "e como.",
      },
      {
        titulo: "A defesa de Dioscoro e os protestos",
        descricao:
          "Dioscoro tentou defender-se alegando que seguira a " +
          "teologia de Cirilo de Alexandria e que o Latrocínio " +
          "fora um concílio legítimo convocado pelo imperador " +
          "Teodósio II. Seus partidários egípcios (~13 bispos) " +
          "gritavam em seu apoio, mas foram silenciados pela " +
          "maioria. Quando Dioscoro invocou o nome de Cirilo, " +
          "os bispos responderam: 'Cirilo é santo, mas você " +
          "não é Cirilo!'.",
        desdobramento:
          "A defesa de Dioscoro foi ineficaz e contraproducente. " +
          "Ao invocar Cirilo, ele forçou o concílio a distinguir " +
          "entre o 'verdadeiro Cirilo' (o da Fórmula de União de " +
          "433, que aceitava 'duas naturezas') e o 'Cirilo " +
          "distorcido' de Dioscoro (o da 'mia physis' radical). " +
          "Esta distinção seria crucial para a Definição.",
      },
    ],

    resultado:
      "A 1ª sessão encerrou-se sem veredito formal, mas com a opinião " +
      "da assembleia claramente contra Dioscoro. Os comissários " +
      "imperiais adiaram o julgamento para a 3ª sessão, permitindo " +
      "que a 2ª sessão fosse dedicada à leitura dos documentos de fé.",
  },

  // ─── SESSÃO 2 ───
  {
    fase: "2ª Sessão Solene",
    numero: "Sessão 2",
    data: "10 de outubro de 451",
    presidente: "Paschasinus de Lilibeu (legado papal)",
    periodo: "Manhã do dia 10",
    clima:
      "Solene e emocionante. Se a 1ª sessão foi um tribunal, a 2ª " +
      "foi uma liturgia. A leitura dos grandes documentos da fé — " +
      "os Credos, as cartas de Cirilo e o Tomo de Leão — criou um " +
      "clima de reverência e unidade que contrastou dramaticamente " +
      "com o caos da sessão anterior. O momento culminante foi a " +
      "leitura do Tomo de Leão, recebida com a aclamação unânime " +
      "'Pedro falou por Leão!'.",

    eventos: [
      {
        titulo: "Leitura do Credo de Niceia (325)",
        descricao:
          "A sessão abriu com a leitura solene do Credo original de " +
          "Niceia (325), conforme preservado nas atas do Concílio de " +
          "Éfeso (431). Os bispos aclamaram: 'Esta é a fé dos padres! " +
          "Esta é a fé dos apóstolos! Ninguém pode acrescentar ou " +
          "remover nada!'. A leitura serviu para estabelecer que " +
          "Calcedônia não estava 'inventando' uma nova fé, mas " +
          "'expondo' a fé de sempre.",
        desdobramento:
          "A insistência em Niceia como norma insubstituível criou " +
          "uma tensão que persistiria até a 5ª sessão: se Niceia é " +
          "suficiente, por que precisamos de uma nova definição? " +
          "Os comissários imperiais e os legados papais teriam que " +
          "argumentar que a Definição não era um 'novo credo', mas " +
          "uma 'exposição' do credo antigo contra as novas heresias.",
      },
      {
        titulo: "Leitura do Credo de Constantinopla (381)",
        descricao:
          "Em seguida, foi lido o Credo Niceno-Constantinopolitano " +
          "(381), que expandira o artigo sobre o Espírito Santo. " +
          "Esta foi a primeira vez que o Credo de 381 foi " +
          "oficialmente associado ao de 325 em um concílio " +
          "ecumênico, consolidando a prática de referir-se a " +
          "ambos como 'a fé de Niceia'.",
        desdobramento:
          "A inclusão do Credo de 381 reforçou a ideia de " +
          "continuidade e desenvolvimento orgânico da fé: " +
          "cada concílio não substituía o anterior, mas o " +
          "completava e o defendia contra novas heresias.",
      },
      {
        titulo: "Leitura da 2ª Carta de Cirilo a Nestório",
        descricao:
          "A 2ª Carta de Cirilo a Nestório (430), já aprovada " +
          "em Éfeso (431), foi lida como testemunho da " +
          "ortodoxia de Cirilo. A carta insistia na unidade " +
          "pessoal de Cristo e no título Theotokos, mas também " +
          "reconhecia a distinção das naturezas — um ponto que " +
          "os monofisitas tendiam a ignorar.",
        desdobramento:
          "A leitura desta carta foi estratégica: ao mostrar que " +
          "Cirilo aceitava a distinção de naturezas (embora " +
          "insistisse na unidade da pessoa), os calcedonianos " +
          "desarmaram a acusação de que a Definição era " +
          "'anti-ciriliana' ou 'nestoriana'.",
      },
      {
        titulo: "Leitura da Carta de Cirilo a João de Antioquia (Fórmula de União, 433)",
        descricao:
          "A carta Laetentur Caeli (433), na qual Cirilo aceitava " +
          "a Fórmula de União com os antioquenos, foi lida como " +
          "prova de que o próprio Cirilo reconhecera 'duas " +
          "naturezas em união'. A frase-chave: 'confessamos " +
          "uma união de duas naturezas' (henōsis dyo physeōn).",
        desdobramento:
          "Este foi o golpe teológico mais eficaz contra " +
          "Dioscoro: o próprio Cirilo, o ídolo dos " +
          "monofisitas, aceitara a linguagem de 'duas " +
          "naturezas'. Dioscoro, ao rejeitar esta " +
          "linguagem, estava traindo o verdadeiro Cirilo.",
      },
      {
        titulo: "Leitura do Tomo de Leão Magno (Ep. 28)",
        descricao:
          "O momento culminante da sessão. O Tomo de Leão foi " +
          "lido em latim pelo diácono Aécio e traduzido " +
          "simultaneamente para o grego. A passagem-chave — " +
          "'Agit enim utraque forma cum alterius communione " +
          "quod proprium est' ('Cada natureza age em comunhão " +
          "com a outra naquilo que lhe é próprio') — provocou " +
          "uma explosão de aclamações: 'Pedro falou por Leão!', " +
          "'Esta é a fé dos padres!', 'Leão e Cirilo ensinam " +
          "o mesmo!'. Alguns bispos, porém, hesitaram: duas " +
          "passagens do Tomo pareciam sugerir uma separação " +
          "excessiva das naturezas (flertando com o " +
          "nestorianismo). Estes bispos pediram cinco dias " +
          "para estudar o texto.",
        desdobramento:
          "Após cinco dias de estudo e comparação com Cirilo, " +
          "os bispos hesitantes declararam-se convencidos: " +
          "'O Tomo é ortodoxo! Leão e Cirilo concordam!'. " +
          "A recepção do Tomo em Calcedônia é um dos eventos " +
          "mais significativos da história do papado: pela " +
          "primeira vez, um documento papal foi aclamado " +
          "como norma de fé por um concílio ecumênico " +
          "oriental.",
      },
    ],

    resultado:
      "A 2ª sessão estabeleceu o 'cânone documental' de Calcedônia: " +
      "Niceia 325 + Constantinopla 381 + Cirilo (2ª Carta + Fórmula " +
      "de União) + Tomo de Leão. Estes quatro pilares formariam a " +
      "base da Definição. A aclamação 'Pedro falou por Leão!' " +
      "tornou-se o slogan do concílio e a base da reivindicação " +
      "papal de autoridade doutrinária suprema.",
  },

  // ─── SESSÃO 3 ───
  {
    fase: "3ª Sessão Solene",
    numero: "Sessão 3",
    data: "13 de outubro de 451",
    presidente: "Paschasinus de Lilibeu (legado papal)",
    periodo: "Manhã e tarde do dia 13",
    clima:
      "Tenso e dramático. A 3ª sessão foi o clímax do julgamento " +
      "de Dioscoro. O patriarca deposto recusou-se a comparecer, " +
      "alegando doença (provavelmente real, mas também tática). " +
      "O concílio procedeu ao julgamento in absentia, ouvindo " +
      "testemunhas e lendo documentos. O veredito final — " +
      "deposição e exílio — foi recebido com alívio pela " +
      "maioria e com fúria pelos 13 bispos egípcios.",

    eventos: [
      {
        titulo: "Intimação de Dioscoro e sua recusa",
        descricao:
          "O concílio enviou três delegações de bispos ao alojamento " +
          "de Dioscoro para intimá-lo a comparecer. Dioscoro recusou " +
          "todas as três, alegando que estava 'doente e acamado' e " +
          "que os soldados imperiais que guardavam sua porta o " +
          "impediam de sair (uma alegação irônica, dado que ele " +
          "mesmo usara soldados contra Flavian em 449). O concílio " +
          "declarou que a ausência de Dioscoro não impediria o " +
          "julgamento.",
        desdobramento:
          "A recusa de Dioscoro em comparecer foi interpretada " +
          "como confissão de culpa e desacato ao concílio. " +
          "Canonicamente, a terceira intimação ignorada " +
          "justificava o julgamento in absentia — o mesmo " +
          "procedimento que Dioscoro usara contra Flavian " +
          "em 449.",
      },
      {
        titulo: "Testemunhos contra Dioscoro",
        descricao:
          "Diversos bispos e clérigos testemunharam contra " +
          "Dioscoro: o diácono Isquírion de Alexandria narrou " +
          "como Dioscoro o espancara pessoalmente; o presbítero " +
          "Atanásio relatou a destruição de igrejas ortodoxas " +
          "no Egito; o bispo Sofrônio de Tella descreveu a " +
          "coação sofrida no Latrocínio. O testemunho mais " +
          "emocionante foi o do diácono de Flavian, que " +
          "narrou os últimos momentos de seu senhor: " +
          "'Eles o pisotearam como a um animal!'.",
        desdobramento:
          "Os testemunhos transformaram o julgamento em um " +
          "ato de justiça para as vítimas do Latrocínio. " +
          "A dimensão moral e humana do processo — não " +
          "apenas teológica — garantiu que a condenação " +
          "de Dioscoro fosse aceita mesmo por bispos que " +
          "simpatizavam com sua teologia.",
      },
      {
        titulo: "Sentença de deposição e exílio",
        descricao:
          "Após a leitura dos testemunhos e dos documentos, " +
          "Paschasinus, em nome do Papa Leão e do concílio, " +
          "pronunciou a sentença: 'O santíssimo e beatíssimo " +
          "arcebispo da grande e antiga Roma, Leão, por nosso " +
          "intermédio e por este santo concílio, juntamente " +
          "com o três vezes bem-aventurado e glorioso apóstolo " +
          "Pedro, que é a rocha e o fundamento da Igreja " +
          "católica, priva Dioscoro da dignidade episcopal " +
          "e de toda função sacerdotal.' Os bispos aclamaram " +
          "e assinaram a sentença. Dioscoro foi condenado " +
          "ao exílio em Gangra, na Paflagônia.",
        desdobramento:
          "A fórmula da sentença — invocando a autoridade " +
          "de Leão, de Pedro e do concílio simultaneamente " +
          "— é um dos textos mais importantes da eclesiologia " +
          "católica sobre a primazia papal. Para os ortodoxos, " +
          "porém, a ênfase recai sobre 'este santo concílio', " +
          "não sobre Leão isoladamente. A divergência de " +
          "interpretação desta frase alimenta o debate " +
          "Roma-Constantinopla até hoje.",
      },
    ],

    resultado:
      "Dioscoro foi formalmente deposto e exilado. Seus 13 bispos " +
      "egípcios foram coagidos a assinar a sentença sob ameaça de " +
      "exílio imediato. A reabilitação de Flavian foi proclamada " +
      "solenemente: seus restos mortais, já transladados para " +
      "Constantinopla, foram declarados relíquias de mártir. " +
      "O Latrocínio de 449 foi anulado e declarado 'nulo e " +
      "inválido'.",
  },

  // ─── SESSÃO 4 ───
  {
    fase: "4ª Sessão Solene",
    numero: "Sessão 4",
    data: "17 de outubro de 451",
    presidente: "Paschasinus de Lilibeu (legado papal)",
    periodo: "Manhã do dia 17",
    clima:
      "Tenso e dividido. Após a euforia do julgamento de Dioscoro, " +
      "o concílio enfrentou sua tarefa mais difícil: formular uma " +
      "nova definição de fé. A resistência foi significativa: " +
      "muitos bispos orientais, especialmente os egípcios e " +
      "palestinos, insistiam que o Credo de Niceia era " +
      "suficiente e que qualquer 'adição' seria uma traição " +
      "aos padres. Os comissários imperiais, porém, estavam " +
      "determinados a produzir uma definição clara que " +
      "encerrasse a controvérsia de uma vez por todas.",

    eventos: [
      {
        titulo: "O debate sobre a necessidade de uma nova definição",
        descricao:
          "Os comissários imperiais abriram a sessão perguntando " +
          "aos bispos: 'A fé exposta na 2ª sessão (Niceia + " +
          "Constantinopla + Cirilo + Leão) é suficiente, ou " +
          "é necessária uma nova formulação?'. A maioria dos " +
          "bispos da Ásia Menor e da Trácia respondeu que " +
          "os documentos já lidos eram suficientes. Os legados " +
          "papais e os comissários imperiais, porém, insistiram " +
          "que uma definição explícita contra Eutiques era " +
          "necessária, dado que o próprio Eutiques alegava " +
          "seguir Niceia.",
        desdobramento:
          "O debate revelou a tensão fundamental de Calcedônia: " +
          "a tradição oriental preferia a apofatismo (dizer o " +
          "que Deus NÃO é) e a repetição dos credos antigos; " +
          "a tradição ocidental (Leão) e a corte imperial " +
          "exigiam uma formulação positiva e precisa. O " +
          "compromisso seria a Definição: não um 'novo " +
          "credo', mas uma 'exposição' do credo antigo.",
      },
      {
        titulo: "A resistência dos 13 bispos egípcios",
        descricao:
          "Os 13 bispos egípcios presentes (restos da delegação " +
          "de Dioscoro) recusaram-se categoricamente a aceitar " +
          "qualquer fórmula que contivesse a expressão 'duas " +
          "naturezas' (dyo physeis). Eles argumentavam que " +
          "Cirilo usara 'uma natureza encarnada' (mia physis " +
          "sesarkōmenē) e que 'duas naturezas' era nestorianismo " +
          "disfarçado. Além disso, exigiam que um novo patriarca " +
          "de Alexandria fosse nomeado antes de qualquer votação, " +
          "pois não podiam votar sem seu líder.",
        desdobramento:
          "A resistência egípcia foi o primeiro sinal do cisma " +
          "que se seguiria a Calcedônia. Os 13 bispos foram " +
          "eventualmente coagidos a assinar a Definição sob " +
          "ameaça de exílio, mas suas assinaturas foram " +
          "acompanhadas de uma nota de protesto. Ao retornarem " +
          "ao Egito, seriam recebidos como traidores pela " +
          "população monofisita.",
      },
      {
        titulo: "A decisão de nomear uma comissão de redação",
        descricao:
          "Diante do impasse, os comissários imperiais " +
          "propuseram a criação de uma comissão restrita " +
          "de bispos para redigir um rascunho da Definição. " +
          "A comissão, composta por 22 bispos (representando " +
          "as principais dioceses do Oriente e os legados " +
          "papais), foi nomeada e instruída a reunir-se no " +
          "martyrium de Santa Eufêmia, anexo à igreja " +
          "conciliar. O prazo era de cinco dias.",
        desdobramento:
          "A criação da comissão de 22 bispos foi uma " +
          "jogada política dos comissários imperiais para " +
          "contornar a resistência da assembleia plenária. " +
          "Em um grupo menor, seria mais fácil chegar a " +
          "um consenso e pressionar os dissidentes.",
      },
    ],

    resultado:
      "A 4ª sessão encerrou-se sem definição, mas com a " +
      "comissão de 22 bispos encarregada de redigir o " +
      "rascunho. Os dias seguintes (18–21 de outubro) " +
      "foram dedicados aos trabalhos da comissão e às " +
      "sessões administrativas (7–10).",
  },

  // ─── SESSÃO 5 ───
  {
    fase: "5ª Sessão Solene",
    numero: "Sessão 5",
    data: "22 de outubro de 451",
    presidente: "Paschasinus de Lilibeu (legado papal)",
    periodo: "Manhã e tarde do dia 22",
    clima:
      "O momento mais tenso e decisivo de todo o concílio. " +
      "A 5ª sessão foi o campo de batalha teológico onde a " +
      "Definição de Calcedônia nasceu — após rejeições, " +
      "revisões, gritos e ameaças. O primeiro rascunho da " +
      "comissão foi rejeitado por soar 'nestoriano'; o " +
      "segundo rascunho, com a inserção crucial da cláusula " +
      "'em duas naturezas' (en dyo physesin), foi aprovado " +
      "após intensa negociação. A sessão durou o dia inteiro " +
      "e terminou com a aclamação unânime da Definição.",

    eventos: [
      {
        titulo: "Apresentação do primeiro rascunho e sua rejeição",
        descricao:
          "A comissão de 22 bispos apresentou seu primeiro " +
          "rascunho, que usava a fórmula 'a partir de duas " +
          "naturezas' (ek dyo physeōn) — a linguagem preferida " +
          "pelos cirilianos e aceita pelos monofisitas " +
          "moderados. Os legados papais e os bispos " +
          "antioquenos rejeitaram o texto imediatamente: " +
          "'Ek dyo' sugere que as duas naturezas existiram " +
          "apenas ANTES da união e foram fundidas DEPOIS — " +
          "exatamente o erro de Eutiques!'. Os gritos " +
          "retornaram: 'Isto é eutiquianismo! Rejeitamos!'.",
        desdobramento:
          "A rejeição do primeiro rascunho demonstrou que " +
          "a preposição era tudo: 'ek' (a partir de) vs. " +
          "'en' (em) era a diferença entre ortodoxia e " +
          "heresia. 'Ek dyo' = as naturezas se fundem " +
          "(monofisismo). 'En dyo' = as naturezas " +
          "coexistem (ortodoxia calcedoniana). Uma " +
          "única preposição grega separava a fé da " +
          "heresia.",
      },
      {
        titulo: "A intervenção dos comissários imperiais",
        descricao:
          "Os comissários imperiais, alarmados com o " +
          "impasse, ameaçaram dissolver o concílio e " +
          "transferi-lo para o Ocidente (Itália), onde " +
          "o Papa Leão poderia presidir pessoalmente. " +
          "Esta ameaça era uma chantagem: os bispos " +
          "orientais sabiam que um concílio na Itália " +
          "seria dominado por Roma e produziria uma " +
          "definição ainda mais 'leonina' (e, portanto, " +
          "mais 'nestoriana' aos seus olhos). A " +
          "ameaça funcionou: os bispos concordaram " +
          "em retornar à comissão e aceitar a " +
          "fórmula 'en dyo physesin'.",
        desdobramento:
          "A intervenção dos comissários imperiais na " +
          "5ª sessão é o exemplo mais claro de " +
          "'cesaropapismo' em Calcedônia. A Definição " +
          "não foi imposta pelo imperador, mas a " +
          "ameaça imperial foi decisiva para superar " +
          "a resistência dos bispos orientais. Sem " +
          "a pressão de Marciano, o concílio poderia " +
          "ter terminado em cisma.",
      },
      {
        titulo: "O segundo rascunho e a aprovação da Definição",
        descricao:
          "A comissão retornou com um segundo rascunho que " +
          "substituía 'ek dyo' por 'en dyo' e acrescentava " +
          "os quatro advérbios cruciais: 'sem confusão " +
          "(asynchytōs), sem mudança (atreptōs), sem " +
          "divisão (adiairetōs), sem separação " +
          "(achōristōs)'. O texto foi lido em voz alta " +
          "e recebido com aclamações: 'Esta é a fé dos " +
          "padres! Esta é a fé dos apóstolos! Todos " +
          "cremos assim!'. Os 13 bispos egípcios, " +
          "isolados e sob pressão, acabaram assinando " +
          "com relutância.",
        desdobramento:
          "A aprovação da Definição na 5ª sessão é o " +
          "evento central de Calcedônia e um dos " +
          "momentos mais importantes da história do " +
          "cristianismo. Os quatro advérbios — a " +
          "'cerca de quatro lados' (peribolos) — " +
          "tornaram-se a norma cristológica para " +
          "católicos, ortodoxos e protestantes " +
          "até hoje.",
      },
    ],

    resultado:
      "A Definição de Calcedônia foi aprovada por aclamação " +
      "e assinada por todos os bispos presentes (com a " +
      "relutante exceção dos egípcios, que assinaram sob " +
      "protesto). O texto seria solenemente proclamado na " +
      "6ª sessão, com a presença do imperador e da " +
      "imperatriz.",
  },

  // ─── SESSÃO 6 ───
  {
    fase: "6ª Sessão Solene",
    numero: "Sessão 6",
    data: "25 de outubro de 451",
    presidente: "Imperador Marciano e Imperatriz Pulquéria (presença imperial)",
    periodo: "Manhã do dia 25",
    clima:
      "Triunfal e litúrgico. A 6ª sessão foi a grande " +
      "celebração do concílio — o momento em que a " +
      "Definição foi solenemente proclamada perante " +
      "o imperador e a imperatriz. O clima era de " +
      "euforia e unidade (pelo menos aparente). A " +
      "igreja de Santa Eufêmia estava decorada com " +
      "tapeçarias e velas; os bispos vestiam suas " +
      "melhores vestes litúrgicas; os comissários " +
      "imperiais trajavam togas de púrpura. A " +
      "presença de Marciano e Pulquéria no trono " +
      "imperial transformou a sessão em uma " +
      "encenação da symphonia entre Igreja e Estado.",

    eventos: [
      {
        titulo: "Entrada solene de Marciano e Pulquéria",
        descricao:
          "O imperador e a imperatriz entraram na igreja " +
          "em procissão solene, acompanhados pela guarda " +
          "imperial (os scholae palatinae) e pelo Senado. " +
          "Os bispos levantaram-se e aclamaram: 'Marciano " +
          "é o novo Constantino! Pulquéria é a nova Helena! " +
          "Em vós, a fé brilha! Vós sois a luz do mundo! " +
          "Vós sois a paz da Igreja!'. Marciano sentou-se " +
          "no trono imperial (o mesmo trono vazio que " +
          "simbolizava a presença de Cristo nas sessões " +
          "anteriores) e dirigiu-se ao concílio.",
        desdobramento:
          "A entrada de Marciano e Pulquéria foi a " +
          "encenação suprema da symphonia bizantina. " +
          "A comparação com Constantino e Helena não " +
          "era mera lisonja: assim como Constantino " +
          "convocara Niceia (325) para encerrar a " +
          "crise ariana, Marciano convocara Calcedônia " +
          "para encerrar a crise cristológica. A " +
          "simetria era deliberada e poderosa.",
      },
      {
        titulo: "Discurso de Marciano (em latim, traduzido para o grego)",
        descricao:
          "Marciano discursou em latim (sua língua materna, " +
          "como trácio romanizado), com tradução simultânea " +
          "para o grego pelo intérprete imperial. O discurso " +
          "foi breve e direto: declarou que convocara o " +
          "concílio 'para que a fé verdadeira fosse " +
          "manifestada e toda dúvida removida'; afirmou " +
          "que estava presente 'para confirmar a fé, " +
          "não para dominar os bispos'; e exortou os " +
          "padres a 'guardar a paz da Igreja e a " +
          "unidade da fé'. O discurso foi recebido " +
          "com novas aclamações.",
        desdobramento:
          "O discurso de Marciano estabeleceu o " +
          "precedente da 'confirmação imperial' das " +
          "decisões conciliares — um ato que não " +
          "adicionava autoridade teológica à " +
          "Definição (que já fora aprovada pelos " +
          "bispos), mas lhe dava força de lei " +
          "civil no Império.",
      },
      {
        titulo: "Leitura solene da Definição de Calcedônia",
        descricao:
          "O texto completo da Definição (Horos) foi " +
          "lido em voz alta pelo arquidiácono Aécio " +
          "de Constantinopla. A passagem central — " +
          "'reconhecido em duas naturezas, sem " +
          "confusão, sem mudança, sem divisão, sem " +
          "separação' — foi recebida com a aclamação " +
          "mais longa e emocionante do concílio: " +
          "'Esta é a fé dos padres! Esta é a fé " +
          "dos apóstolos! Pedro falou por Leão! " +
          "Cirilo e Leão ensinam o mesmo! Todos " +
          "cremos assim! Anátema a quem divide " +
          "Cristo! Anátema a quem confunde as " +
          "naturezas!'.",
        desdobramento:
          "A proclamação solene da Definição na " +
          "presença do imperador e da imperatriz " +
          "deu ao documento uma autoridade dupla: " +
          "eclesiástica (aprovada pelos bispos) " +
          "e civil (confirmada pelo imperador). " +
          "A partir deste momento, a Definição " +
          "de Calcedônia era simultaneamente " +
          "dogma da Igreja e lei do Império.",
      },
      {
        titulo: "Assinatura imperial e encerramento da sessão",
        descricao:
          "Marciano e Pulquéria assinaram a Definição " +
          "com tinta de púrpura (a cor imperial), " +
          "um gesto sem precedentes na história dos " +
          "concílios. Em seguida, o imperador " +
          "anunciou que emitiria éditos imperiais " +
          "para impor a Definição em todo o Império " +
          "e punir os que a rejeitassem. A sessão " +
          "encerrou-se com uma oração de ação de " +
          "graças e a bênção dos legados papais.",
        desdobramento:
          "A assinatura imperial da Definição " +
          "transformou Calcedônia em um marco " +
          "da história política e religiosa do " +
          "Império Bizantino. Os éditos de 452 " +
          "(contra os eutiquianos, apolinaristas " +
          "e partidários de Dioscoro) seriam a " +
          "primeira de muitas tentativas imperiais " +
          "de impor a ortodoxia calcedoniana pela " +
          "força — tentativas que, ironicamente, " +
          "aprofundariam o cisma com as Igrejas " +
          "orientais.",
      },
    ],

    resultado:
      "A 6ª sessão encerrou a fase dogmática do concílio. " +
      "A Definição de Calcedônia estava aprovada, assinada " +
      "e confirmada. As 10 sessões seguintes (7–16) seriam " +
      "dedicadas a questões administrativas, jurisdicionais " +
      "e disciplinares — importantes, mas menos dramáticas.",
  },
];

// ═══════════════════════════════════════════════════════
// SESSÕES ADMINISTRATIVAS (7–16) — RESUMO
// ═══════════════════════════════════════════════════════

export const sessoesAdministrativas = {
  titulo: "Sessões Administrativas (7–16): Cânones, Jurisdição e Reabilitações",
  resumo:
    "As sessões 7 a 16 de Calcedônia (26 de outubro a 1 de novembro de 451) " +
    "foram dedicadas a questões práticas de governo eclesiástico. Embora " +
    "menos dramáticas que as sessões dogmáticas, suas decisões tiveram " +
    "consequências duradouras — especialmente a elevação de Jerusalém a " +
    "patriarcado (Sessão 7) e o controverso Cânon 28 sobre a primazia " +
    "de Constantinopla (Sessão 16). Estas sessões foram dominadas pelos " +
    "comissários imperiais, com participação limitada dos legados papais.",
  detalhes: [
    {
      sessao: "Sessão 7 (26 de outubro)",
      titulo: "Jerusalém vs. Antioquia: A Elevação de Jerusalém a Patriarcado",
      descricao:
        "Juvenal de Jerusalém, um bispo politicamente astuto que sobrevivera " +
        "ao Latrocínio trocando de lado, reivindicou jurisdição sobre as " +
        "três províncias da Palestina (Palaestina Prima, Secunda e Tertia), " +
        "que tradicionalmente pertenciam ao patriarcado de Antioquia. Máximo " +
        "de Antioquia resistiu, mas acabou cedendo em troca da confirmação " +
        "de sua jurisdição sobre a Fenícia e a Arábia. O acordo foi " +
        "ratificado pelos comissários imperiais e pelos legados papais. " +
        "Jerusalém tornou-se o quinto patriarcado da cristandade (após " +
        "Roma, Constantinopla, Alexandria e Antioquia), completando a " +
        "Pentarquia que seria formalizada por Justiniano no século VI.",
    },
    {
      sessao: "Sessões 8–10 (26–28 de outubro)",
      titulo: "Disputas Jurisdicionais Menores",
      descricao:
        "Estas sessões trataram de disputas locais entre bispos: Fotio de " +
        "Tiro vs. Eustáquio de Berito (sobre a jurisdição da Fenícia); " +
        "casos de simonia (compra de cargos eclesiásticos); ordenações " +
        "irregulares realizadas por bispos depostos durante o Latrocínio; " +
        "e a reabilitação de bispos que haviam sido coagidos a participar " +
        "do Latrocínio de 449. Os comissários imperiais atuaram como " +
        "juízes civis, aplicando tanto o direito canônico quanto o " +
        "direito romano.",
    },
    {
      sessao: "Sessões 11–14 (29–30 de outubro)",
      titulo: "Reabilitação de Teodoreto de Ciro e Ibas de Edessa",
      descricao:
        "As sessões mais delicadas da fase administrativa. Teodoreto de " +
        "Ciro e Ibas de Edessa — dois teólogos da escola antioquena " +
        "depostos no Latrocínio de 449 por suposto 'nestorianismo' — " +
        "pediram sua reabilitação. O concílio exigiu que ambos " +
        "anatematizassem publicamente Nestório e sua heresia. " +
        "Teodoreto, após alguma hesitação (ele fora amigo pessoal " +
        "de Nestório décadas antes), declarou: 'Anátema a Nestório " +
        "e a quem não diz que a Santa Virgem é Theotokos!'. Ibas " +
        "fez declaração semelhante. Ambos foram reabilitados e " +
        "restaurados às suas sedes. Esta reabilitação seria " +
        "posteriormente contestada no II Constantinopla (553), " +
        "que condenaria os 'Três Capítulos' (escritos de " +
        "Teodoro de Mopsuéstia, Teodoreto e Ibas).",
    },
    {
      sessao: "Sessões 15–16 (31 de outubro – 1 de novembro)",
      titulo: "Promulgação dos Cânones e o Cânon 28",
      descricao:
        "As duas últimas sessões foram dedicadas à promulgação dos " +
        "27 cânones disciplinares e ao controverso Cânon 28. Os " +
        "27 cânones tratavam de questões práticas: simonia, " +
        "ordenações irregulares, conduta de monges e clérigos, " +
        "transferências de bispos, etc. O Cânon 28, porém, foi " +
        "uma bomba política: reafirmando e expandindo o Cânon 3 " +
        "de Constantinopla I (381), declarou que o patriarca de " +
        "Constantinopla deveria ter 'privilégios iguais' (isa " +
        "presbeia) aos do bispo de Roma, com base no argumento " +
        "de que Constantinopla era a 'Nova Roma'. Os legados " +
        "papais protestaram veementemente e abandonaram a " +
        "sessão. O Papa Leão I anularia o Cânon 28 em sua " +
        "carta de ratificação (Ep. 105, 452), declarando " +
        "que a primazia de Roma derivava de Pedro, não de " +
        "decisões políticas. O Cânon 28 permanece como um " +
        "dos pontos de discórdia mais duradouros entre " +
        "católicos e ortodoxos.",
    },
  ],
};