// estudos/concilios/calcedonia/_data/ficha.ts

export const fichaConcilio = {
  // ─── IDENTIFICAÇÃO ───
  nome: "Concílio de Calcedônia",
  nomeGrego: "Σύνοδος τῆς Χαλκηδόνος",
  nomeLatim: "Concilium Chalcedonense",
  numeroEcumenico: "IV",

  // ─── DATAS ───
  data: {
    inicio: "8 de outubro de 451",
    fim: "1 de novembro de 451",
    duracao: "25 dias (6 sessões solenes + 10 sessões administrativas)",
    anoNumerico: 451,
  },

  // ─── LOCAL ───
  local: {
    edificio: "Igreja de Santa Eufêmia, Mártir",
    cidade: "Calcedônia, Bitínia (atual Kadıköy, Istambul, Turquia)",
    regiao: "Margem asiática do Bósforo, frente a Constantinopla",
    imperio: "Império Romano do Oriente (Bizantino)",
    razaoLocal:
      "Escolhida por proximidade com a capital imperial (travessia curta do Bósforo), " +
      "permitindo ao imperador Marciano controlar os trabalhos sem deslocar a corte. " +
      "A Igreja de Santa Eufêmia tinha valor simbólico: a mártir que confessou a fé " +
      "ortodoxa contra a perseguição, assim como o concílio confessaria a fé contra a heresia.",
  },

  // ─── CONVOCADORES ───
  convocador: {
    nome: "Marciano e Pulquéria",
    titulo:
      "Imperador Flavio Marciano Augusto & Imperatriz Élia Pulquéria Augusta",
    reinado: "450–457 (Marciano) · Pulquéria como Augusta desde 414",
    detalhes:
      "Após a morte acidental de Teodósio II (28 de julho de 450), sua irmã Pulquéria " +
      "assumiu o trono e casou-se com o senador e militar trácio Marciano. O novo casal " +
      "imperial reverteu imediatamente a política religiosa pró-eutiquiana de Teodósio e " +
      "do eunuco Crisáfio, convocando um novo concílio para anular o Latrocínio de Éfeso (449) " +
      "e restaurar a ortodoxia. Pulquéria é frequentemente chamada de 'nova Helena' por seu " +
      "papel decisivo na defesa da fé calcedoniana.",
  },

  // ─── PARTICIPANTES ───
  participantes: {
    total: "~520–630 bispos (o maior concílio da Antiguidade até então)",
    origem:
      "Esmagadoramente oriental: Ásia Menor (~180), Trácia (~50), Síria (~50), " +
      "Egito (~13 bispos presentes às sessões decisórias — as fontes variam), " +
      "Palestina (~20), Ponto (~60), Ilíria (~10). " +
      "Ocidente representado por 3 legados papais + 2 bispos africanos.",
    observacao:
      "O número exato varia conforme a fonte. As atas listam assinaturas de ~520 bispos " +
      "na Definição, mas o total de presentes ao longo das sessões pode ter chegado a 630. " +
      "A ausência ocidental é notável: nenhum bispo da Gália, Hispânia, Britânia ou Itália " +
      "(exceto os legados) esteve presente. O Papa Leão I solicitou que o concílio fosse " +
      "realizado na Itália, mas Marciano insistiu no Oriente por razões logísticas e políticas.",
    comparacao:
      "Niceia I (325): ~318 · Constantinopla I (381): ~150 · Éfeso (431): ~200 · " +
      "Calcedônia (451): ~520–630",
  },

  // ─── PRESIDÊNCIA ───
  presidentes: [
    {
      periodo: "Sessões 1–6 (solenes)",
      nome: "Paschasinus de Lilibeu (Sicília)",
      obs: "Legado papal principal, enviado por Leão I. Presidiu em nome do Papa, " +
        "sentando-se à direita do trono imperial vazio. Sua autoridade foi reconhecida " +
        "pela maioria, embora os comissários imperiais (19 senadores) exercessem " +
        "controle efetivo sobre a ordem dos trabalhos.",
    },
    {
      periodo: "Sessões 1–6 (co-presidência)",
      nome: "Lucêncio de Ascoli (Itália)",
      obs: "Segundo legado papal. Atuou como co-presidente ao lado de Paschasinus, " +
        "reforçando a autoridade romana nas sessões doutrinárias.",
    },
    {
      periodo: "Sessões 1–6 (co-presidência oriental)",
      nome: "Anatólio de Constantinopla",
      obs: "Patriarca de Constantinopla (449–458). Sucessor de Flavian (martirizado no " +
        "Latrocínio). Seu papel foi ambíguo: eleito com apoio de Dioscoro, mas depois " +
        "alinhou-se com os calcedonianos. Presidiu ao lado dos legados, mas com " +
        "autoridade inferior.",
    },
    {
      periodo: "Sessões 1–6 (comissários imperiais)",
      nome: "19 Senadores e Altos Funcionários Imperiais",
      obs: "Liderados pelo patrício Anatólio (homônimo do patriarca) e pelo prefeito " +
        "do pretório Florentius. Não eram bispos, mas controlavam a agenda, a ordem " +
        "dos debates e as votações. Sua presença demonstra o caráter cesaropapista " +
        "do concílio.",
    },
    {
      periodo: "Sessão 6 (presença imperial)",
      nome: "Imperador Marciano e Imperatriz Pulquéria",
      obs: "Compareceram pessoalmente à 6ª sessão solene (25 de outubro) para " +
        "confirmar a Definição. Marciano discursou em latim (traduzido para o grego), " +
        "comparando-se a Constantino. Os bispos aclamaram: 'Marciano é o novo " +
        "Constantino! Pulquéria é a nova Helena!'",
    },
  ],

  // ─── TIPO E LEGITIMIDADE ───
  tipo: "Concílio Ecumênico (IV)",
  legitimidade:
    "Reconhecido como ecumênico pela Igreja Católica, Igreja Ortodoxa (Calcedoniana), " +
    "Igreja Anglicana, Igrejas Luteranas e Reformadas. REJEITADO pelas Igrejas Ortodoxas " +
    "Orientais (Copta, Siríaca, Armênia, Etíope, Eritreia, Malankara), que aceitam " +
    "apenas os três primeiros concílios (Niceia, Constantinopla, Éfeso).",

  // ─── RESULTADOS PRINCIPAIS ───
  resultadosPrincipais: [
    "Promulgação da Definição de Calcedônia (Horos): Cristo é reconhecido 'em duas naturezas, " +
      "sem confusão, sem mudança, sem divisão, sem separação' — a fórmula cristológica " +
      "normativa para católicos e ortodoxos calcedonianos até hoje.",
    "Reabilitação de Flavian de Constantinopla (martirizado no Latrocínio de 449) e " +
      "condenação póstuma de seus algozes.",
    "Deposição e exílio de Dioscoro de Alexandria por crimes canônicos e teológicos " +
      "(acusado de 'eutiquianismo' e de violência no Latrocínio).",
    "Recepção oficial do Tomo de Leão Magno (Ep. 28) como documento ortodoxo, " +
      "com a aclamação 'Pedro falou por Leão!'.",
    "Reafirmação dos Credos de Niceia (325) e Constantinopla (381) como normas " +
      "insubstituíveis da fé.",
    "Reabilitação de Teodoreto de Ciro e Ibas de Edessa (acusados de nestorianismo), " +
      "após anatematizarem publicamente Nestório.",
    "Promulgação de 27 cânones disciplinares (+ o disputado Cânon 28 sobre a " +
      "primazia de Constantinopla).",
    "Elevação de Jerusalém a patriarcado independente (Sessão 7), reorganizando " +
      "a geografia eclesiástica do Oriente.",
    "Início do maior cisma da cristandade antiga: as Igrejas do Egito, Síria, " +
      "Armênia e Etiópia rejeitaram a Definição, gerando as Igrejas Ortodoxas " +
      "Orientais (não-calcedonianas) que existem até hoje (~60 milhões de fiéis).",
  ],

  // ─── RECONHECIMENTO ECUMÊNICO ───
  reconhecimento: {
    comoEcumenico:
      "Reconhecido como IV Concílio Ecumênico no II Concílio de Constantinopla (553), " +
      "que o reafirmou ao lado de Niceia, Constantinopla I e Éfeso. O Papa Leão I " +
      "ratificou as decisões doutrinárias, mas rejeitou o Cânon 28.",
    aceito: [
      "Igreja Católica Romana",
      "Igreja Ortodoxa (Calcedoniana: grega, russa, sérvia, romena, etc.)",
      "Igreja Anglicana (Artigos de Religião, Art. XXI)",
      "Igrejas Luteranas (Livro de Concórdia)",
      "Igrejas Reformadas/Presbiterianas",
    ],
    rejeitado: [
      "Igreja Copta Ortodoxa (Egito)",
      "Igreja Siríaca Ortodoxa (Antioquia)",
      "Igreja Apostólica Armênia",
      "Igreja Ortodoxa Etíope Tewahedo",
      "Igreja Ortodoxa Eritreia Tewahedo",
      "Igreja Ortodoxa Siríaca Malankara (Índia)",
    ],
    controversias:
      "O Cânon 28 (primazia de Constantinopla) nunca foi aceito por Roma e permanece " +
      "como uma das raízes históricas do Grande Cisma de 1054. A Definição cristológica " +
      "foi rejeitada pelas Igrejas Orientais por considerarem que 'duas naturezas' " +
      "equivale a nestorianismo disfarçado — uma acusação que os diálogos ecumênicos " +
      "modernos (1989–1994) demonstraram ser, em grande parte, um mal-entendido terminológico.",
  },

  // ─── CONTEXTO RESUMIDO ───
  contextoResumido:
    "Vinte anos após o Concílio de Éfeso (431), que condenou Nestório e definiu Maria " +
    "como Theotokos, a cristologia continuava em ebulição. O monge Eutiques de " +
    "Constantinopla, apoiado pelo patriarca Dioscoro de Alexandria e pelo imperador " +
    "Teodósio II, defendia que em Cristo havia 'uma só natureza após a união' (mia physis), " +
    "absorvendo a humanidade na divindade. O patriarca Flavian de Constantinopla condenou " +
    "Eutiques em 448, mas foi deposto, espancado e morto no chamado Latrocínio de Éfeso " +
    "(449) — um sínodo ilegítimo presidido por Dioscoro com violência e fraude. O Papa " +
    "Leão I, cujo Tomo cristológico fora impedido de ser lido, chamou o evento de " +
    "'Latrocinium' (latrocínio). Com a morte de Teodósio II (450) e a ascensão de " +
    "Marciano e Pulquéria, um novo concílio foi convocado para reparar o latrocínio, " +
    "julgar Dioscoro e definir dogmaticamente a relação entre as duas naturezas de Cristo. " +
    "O resultado foi a Definição de Calcedônia, a fórmula cristológica mais importante " +
    "da história da Igreja, que sintetizou as tradições de Alexandria e Antioquia sob " +
    "a autoridade do Tomo de Leão.",
};