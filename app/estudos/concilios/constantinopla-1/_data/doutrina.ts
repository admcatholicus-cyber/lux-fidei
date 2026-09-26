/**
 * DOUTRINA DO CONCÍLIO DE CONSTANTINOPLA I (381 d.C.)
 * Decisões doutrinárias completas, análise teológica e limites.
 */

// =============================================
// TIPOS
// =============================================
export interface AnaliseFrase {
  frase: string;
  grego?: string;
  significado: string;
  contraQuem: string;
  baseBiblica: string[];
}

export interface ComparacaoCredo {
  topico: string;
  niceia325: string;
  constantinopla381: string;
  diferenca: string;
}

export interface CondenacaoDoutrinaria {
  heresia: string;
  erro: string;
  correcao: string;
  formulacao: string;
}
// =============================================
// NOVO: A SÍNTESE CAPADÓCIA (O MOTOR CONCEITUAL DE 381)
// =============================================
export const sinteseCapadocia = {
  titulo: "A Síntese Capadócia: Uma Ousia, Três Hipóstases",
  introducao:
    "O grande impasse do século IV não era apenas teológico, mas terminológico. " +
    "No Concílio de Niceia (325), as palavras 'ousia' (essência) e 'hypostasis' (substância/pessoa) " +
    "eram usadas como sinônimos. Os Padres Capadócios (Basílio de Cesareia, Gregório de Nazianzo e Gregório de Nissa) " +
    "resolveram esse enigma ao fixar o vocabulário trinitário que Constantinopla I dogmatizou.",

  pilares: [
    {
      conceito: "Uma Ousia (μία οὐσία)",
      explicacao:
        "Refere-se à essência, natureza ou substância divina única e indivisível. " +
        "Deus é estritamente UM em ser, poder, glória, majestade e vontade.",
    },
    {
      conceito: "Três Hipóstases (τρεῖς ὑποστάσεις)",
      explicacao:
        "Refere-se às Pessoas reais, distintas e concretas da Trindade: " +
        "Pai, Filho e Espírito Santo.",
    },
    {
      conceito: "As Propriedades Incomunicáveis (Idiomata / ἰδιώματα)",
      explicacao:
        "O que distingue as Pessoas é a relação de origem eterna de cada uma:",
      detalhesIdiomata: [
        "Pai: Agennēsia (ἀγεννησία) — Ingeneridade (fonte sem fonte).",
        "Filho: Génnēsis (γέννησις) — Geração eterna do Pai.",
        "Espírito Santo: Ekporeusis (ἐκπόρευσης) — Processão eterna do Pai.",
      ],
    },
    {
      conceito: "A Monarquia do Pai (Monarchia tou Patros / μοναρχία τοῦ Πατρός)",
      explicacao:
        "O Pai é a única fonte e origem sem origem (fons divinitatis) da Trindade.",
    },
  ],
};
// =============================================
// 1. PNEUMATOLOGIA — O GRANDE AVANÇO
// =============================================
export const pneumatologia = {
  titulo: "A Divindade do Espírito Santo — O Grande Avanço de Constantinopla",

  introducao:
    "Este é o principal legado " +
    "teológico do concílio e a razão pela qual ele é considerado " +
    "'ecumênico' apesar da ausência do Ocidente. Sem Constantinopla, " +
    "a doutrina da Trindade estaria incompleta.",

  analiseFrasePorFrase: [
    {
      frase: "O Senhor",
      grego: "τὸ Κύριον (to Kyrion)",
      significado:
        "O ES é 'Senhor' — o mesmo título (Kyrios) dado ao Pai e ao Filho " +
        "no Credo. Na Septuaginta, Kyrios traduz o Tetragrama (YHWH). " +
        "Chamar o ES de 'Senhor' é identificá-lo com o Deus de Israel. " +
        "Em 2 Cor 3:17, Paulo diz explicitamente: 'O Senhor é o Espírito.'",
      contraQuem:
        "Pneumatomachianos, que chamavam o ES de 'servo', 'ministro' " +
        "ou 'anjo' — títulos subordinados, nunca 'Senhor'.",
      baseBiblica: ["2 Cor 3:17", "At 5:3-4", "1 Cor 2:10-11"],
    },
    {
      frase: "Que dá a vida",
      grego: "τὸ ζῳοποιόν (to zōopoion)",
      significado:
        "O ES é 'vivificador' — ele dá vida divina, não apenas biológica. " +
        "A vivificação (zōopoiēsis) é uma operação exclusivamente divina: " +
        "só Deus pode dar vida a partir do nada e vida eterna aos mortos. " +
        "Se o ES vivifica, ele pertence à ordem do Criador, não da criatura.",
      contraQuem:
        "Pneumatomachianos, que reduziam o ES a uma criatura exaltada. " +
        "Uma criatura não pode dar vida — ela própria recebe vida.",
      baseBiblica: ["Sl 104:30", "Jo 6:63", "Rm 8:11", "2 Cor 3:6", "Jo 3:5-8"],
    },
    {
      frase: "Que procede do Pai",
      grego: "τὸ ἐκ τοῦ Πατρὸς ἐκπορευόμενον (to ek tou Patros ekporeuomenon)",
      significado:
        "O ES 'procede' do Pai — sua origem eterna é o Pai, " +
        "assim como o Filho é 'gerado' do Pai. A 'processão' (ekporeusis) " +
        "é o modo de existência do ES, distinto da 'geração' (gennēsis) " +
        "do Filho. O Filho é gerado; o ES procede. Ambos vêm do Pai, " +
        "mas de modos diferentes e inefáveis. " +
        "Esta distinção preserva a monarquia do Pai (única fonte da " +
        "divindade) enquanto afirma a igualdade das três Pessoas.",
      contraQuem:
        "Pneumatomachianos, que diziam que o ES foi 'criado' pelo Filho " +
        "(e portanto não procede do Pai). Também contra os eunomianos, " +
        "que negavam qualquer relação de origem entre o ES e o Pai.",
      baseBiblica: ["Jo 15:26", "Jo 14:26", "Gl 4:6"],
    },
    {
      frase: "Que com o Pai e o Filho é adorado e glorificado",
      grego: "τὸ σὺν Πατρὶ καὶ Υἱῷ συμπροσκυνούμενον καὶ συνδοξαζόμενον",
      significado:
        "O ES recebe a mesma adoração de latria (adoração devida " +
        "exclusivamente a Deus) que o Pai e o Filho. " +
        "Se o ES fosse criatura, adorá-lo seria idolatria — o pecado " +
        "mais grave do Antigo Testamento. O fato de toda a Igreja " +
        "adorar o ES na liturgia prova que ele é Deus. " +
        "A doxologia trinitária 'Glória ao Pai, ao Filho e ao Espírito Santo' " +
        "é anterior ao concílio e reflete a fé vivida da Igreja.",
      contraQuem:
        "Pneumatomachianos, que adoravam o Pai e o Filho mas " +
        "apenas 'honravam' o ES como criatura exaltada. " +
        "Basílio de Cesareia demonstrou que a preposição 'com' (syn) " +
        "na doxologia implica igualdade, não subordinação.",
      baseBiblica: ["Mt 28:19", "2 Cor 13:13", "Ap 1:4-5", "Fl 2:10-11"],
    },
    {
      frase: "Que falou pelos profetas",
      grego: "τὸ λαλῆσαν διὰ τῶν προφητῶν (to lalēsan dia tōn prophētōn)",
      significado:
        "O ES é o autor da inspiração profética e das Escrituras. " +
        "A inspiração é uma operação exclusivamente divina: " +
        "nenhum anjo ou criatura pode inspirar a Palavra de Deus. " +
        "Esta frase conecta o ES ao Antigo Testamento, mostrando " +
        "que o mesmo Espírito que falou por Isaías e Jeremias " +
        "é o Espírito Santo da Trindade.",
      contraQuem:
        "Pneumatomachianos, que reduziam o ES a um 'anjo' ou " +
        "'ministro'. Se o ES inspirou os profetas, ele é Deus, " +
        "pois a inspiração profética é operação divina.",
      baseBiblica: ["2 Pe 1:21", "2 Tm 3:16", "At 1:16", "At 28:25", "Hb 3:7"],
    },
  ] as AnaliseFrase[],
};

// =============================================
// 2. REAFIRMAÇÃO DE NICEIA (CRISTOLOGIA)
// =============================================
export const cristologia = {
  titulo: "Reafirmação da Consubstancialidade do Filho",

  introducao:
    "Constantinopla não criou uma nova cristologia — reafirmou " +
    "solene e definitivamente o homoousios de Niceia (325). " +
    "Mas o fez com expansões significativas que respondiam " +
    "a 56 anos de controvérsia ariana.",

  reafirmacao:
    "O Filho é 'Deus de Deus, Luz de Luz, Deus verdadeiro de Deus " +
    "verdadeiro, gerado, não criado, consubstancial (homoousios) ao Pai'. " +
    "Esta fórmula de 325 foi mantida intacta e reforçada com adições " +
    "que fechavam brechas exploradas pelos arianos.",

  adicoesSignificativas: [
    {
      adicao: "Antes de todos os séculos",
      grego: "πρὸ πάντων τῶν αἰώνων",
      contraQuem: "Arianos (que diziam 'houve um tempo em que o Filho não existia')",
      explicacao:
        "A geração do Filho é eterna, não temporal. " +
        "Não houve um 'momento' em que o Pai estava sem o Filho. " +
        "O Filho é coeterno com o Pai.",
    },
    {
      adicao: "Por quem todas as coisas foram feitas",
      grego: "δι' οὗ τὰ πάντα ἐγένετο",
      contraQuem: "Arianos e eunomianos (que diziam que o Filho foi a primeira criatura)",
      explicacao:
        "Se o Filho é o agente da criação de TODAS as coisas, " +
        "ele não pode ser parte da criação. O criador não é criatura.",
    },
    {
      adicao: "Desceu dos céus",
      grego: "ἐκ τῶν οὐρανῶν",
      contraQuem: "Apolinaristas e adocionistas",
      explicacao:
        "A encarnação é um movimento de descida do céu, " +
        "não uma ascensão de um homem ao divino.",
    },
    {
      adicao: "Pelo Espírito Santo e da Virgem Maria",
      grego: "ἐκ Πνεύματος Ἁγίου καὶ Μαρίας τῆς Παρθένου",
      contraQuem: "Apolinaristas (que diziam que o Logos substituiu a mente humana)",
      explicacao:
        "A encarnação é obra do ES (não uma substituição do ES pela " +
        "mente humana, como queria Apolinário). Maria é chamada " +
        "'Virgem' — antecipando o título Theotokos de Éfeso (431).",
    },
    {
      adicao: "Foi crucificado por nós sob Pôncio Pilatos, padeceu e foi sepultado",
      grego: "σταυρωθέντα τε ὑπὲρ ἡμῶν ἐπὶ Ποντίου Πιλάτου, καὶ παθόντα καὶ ταφέντα",
      contraQuem: "Docetistas e apolinaristas (que negavam a realidade do sofrimento humano de Cristo)",
      explicacao:
        "Cristo realmente sofreu, realmente morreu, realmente foi sepultado. " +
        "Não foi uma aparência (docetismo) nem um sofrimento apenas " +
        "'na carne' sem participação da mente (apolinarismo).",
    },
    {
      adicao: "Segundo as Escrituras",
      grego: "κατὰ τὰς Γραφάς",
      contraQuem: "Todos os hereges que reinterpretavam as Escrituras alegoricamente",
      explicacao:
        "A ressurreição não é um mito ou metáfora — é um evento " +
        "histórico profetizado nas Escrituras (Sl 16:10; Is 53).",
    },
    {
      adicao: "Subiu aos céus e está sentado à direita do Pai",
      grego: "ἀνελθόντα εἰς τοὺς οὐρανούς, καὶ καθεζόμενον ἐκ δεξιῶν τοῦ Πατρός",
      contraQuem: "Marcelianos (que diziam que o Logos 'retornaria' ao Pai e cessaria)",
      explicacao:
        "O Filho permanece eternamente à direita do Pai como " +
        "Pessoa distinta. A Trindade não 'cessa' após o Juízo.",
    },
    {
      adicao: "De novo há de vir com glória para julgar os vivos e os mortos",
      grego: "πάλιν ἐρχόμενον μετὰ δόξης κρῖναι ζῶντας καὶ νεκρούς",
      contraQuem: "Marcelianos e milenaristas",
      explicacao:
        "A segunda vinda será real, gloriosa e universal. " +
        "O julgamento é escatológico, não alegórico.",
    },
    {
      adicao: "E o seu reino não terá fim",
      grego: "οὗ τῆς βασιλείας οὐκ ἔσται τέλος",
      contraQuem: "Marcelo de Ancira (que ensinava que o reino do Filho teria fim)",
      explicacao:
        "Contra Marcelo, que dizia que após o Juízo Final o Logos " +
        "'retornaria' ao Pai e a distinção de Pessoas cessaria. " +
        "Constantinopla afirma: o reino do Filho é eterno.",
    },
  ],
};
// =============================================
// NOVO: ANÁLISE DAS CLÁUSULAS CRISTOLÓGICAS
// =============================================
export const clausulasCristologicas = {
  titulo: "As Expansões Cristológicas Anti-Heréticas no Credo",
  clausulas: [
    {
      clausula: "Gerado do Pai antes de todos os séculos",
      alvo: "Arianos",
      explicacao: "A geração do Filho é eterna, anterior ao tempo e ao universo.",
    },
    {
      clausula: "E se encarnou pelo Espírito Santo e da Virgem Maria, e se fez homem",
      alvo: "Apolinaristas",
      explicacao: "Afirma que o Filho assumiu a humanidade COMPLETA (corpo, alma e mente humana racional), destruindo a tese de Apolinário de Laodiceia.",
    },
    {
      clausula: "Foi crucificado por nós sob Pôncio Pilatos, padeceu e foi sepultado",
      alvo: "Docetistas e Apolinaristas",
      explicacao: "Reafirma a realidade do sofrimento e da morte física e histórica de Cristo.",
    },
    {
      clausula: "E o seu reino não terá fim",
      alvo: "Marcelianos (Marcelo de Ancira)",
      explicacao: "Proclama a eternidade do Reino e da humanidade glorificada do Filho (contra a ideia de que o Logos se 'reabsorveria' no Pai).",
    },
  ],
};
// =============================================
// 3. COMPARAÇÃO NICEIA 325 vs CONSTANTINOPLA 381
// =============================================
export const comparacaoCredos: ComparacaoCredo[] = [
  {
    topico: "Deus Pai",
    niceia325: "Creio em um só Deus, Pai todo-poderoso, criador de todas as coisas visíveis e invisíveis.",
    constantinopla381:
      "Creio em um só Deus, Pai todo-poderoso, criador do céu e da terra, " +
      "de todas as coisas visíveis e invisíveis.",
    diferenca:
      "Adição de 'do céu e da terra' — eco do Gênesis 1:1. " +
      "Ênfase na criação total (material e espiritual).",
  },
  {
    topico: "Jesus Cristo — identidade",
    niceia325:
      "E em um só Senhor Jesus Cristo, Filho de Deus, gerado do Pai, " +
      "unigênito, isto é, da essência do Pai...",
    constantinopla381:
      "E em um só Senhor Jesus Cristo, Filho Unigênito de Deus, " +
      "gerado do Pai antes de todos os séculos...",
    diferenca:
      "Constantinopla remove 'da essência do Pai' (ek tēs ousias tou Patros) " +
      "e adiciona 'antes de todos os séculos'. A remoção é estilística " +
      "(homoousios já cobre o mesmo); a adição é anti-ariana.",
  },
  {
    topico: "Jesus Cristo — divindade",
    niceia325: "Deus de Deus, Luz de Luz, Deus verdadeiro de Deus verdadeiro, gerado, não criado, consubstancial ao Pai.",
    constantinopla381:
      "Luz de Luz, Deus verdadeiro de Deus verdadeiro, gerado, não criado, " +
      "consubstancial ao Pai, por quem todas as coisas foram feitas.",
    diferenca:
      "Constantinopla remove 'Deus de Deus' (redundante) e adiciona " +
      "'por quem todas as coisas foram feitas' (anti-ariano).",
  },
  {
    topico: "Encarnação",
    niceia325:
      "Que por nós homens e por nossa salvação desceu, se encarnou, se fez homem.",
    constantinopla381:
      "Que por nós homens e por nossa salvação desceu dos céus, " +
      "e se encarnou pelo Espírito Santo e da Virgem Maria, e se fez homem.",
    diferenca:
      "Expansão massiva. 'Dos céus' (origem divina), 'pelo ES e da Virgem " +
      "Maria' (mecanismo da encarnação, anti-apolinarista).",
  },
  {
    topico: "Paixão e Ressurreição",
    niceia325: "Padeceu e ressuscitou ao terceiro dia, subiu aos céus.",
    constantinopla381:
      "Foi crucificado por nós sob Pôncio Pilatos, padeceu e foi sepultado. " +
      "Ressuscitou ao terceiro dia segundo as Escrituras. " +
      "Subiu aos céus e está sentado à direita do Pai.",
    diferenca:
      "Expansão detalhada: crucificação histórica (Pilatos), sepultamento " +
      "real, ressurreição escriturística, sessão à direita do Pai " +
      "(anti-marceliano).",
  },
  {
    topico: "Segunda Vinda",
    niceia325: "E de novo há de vir para julgar os vivos e os mortos.",
    constantinopla381:
      "E de novo há de vir com glória para julgar os vivos e os mortos, " +
      "e o seu reino não terá fim.",
    diferenca:
      "Adição de 'com glória' (parusia gloriosa) e 'seu reino não terá fim' " +
      "(contra Marcelo de Ancira).",
  },
  {
    topico: "Espírito Santo",
    niceia325: "E no Espírito Santo.",
    constantinopla381:
      "E no Espírito Santo, o Senhor que dá a vida, que procede do Pai, " +
      "que com o Pai e o Filho é adorado e glorificado, que falou pelos profetas.",
    diferenca:
      "A maior diferença entre os dois credos. Niceia: 5 palavras. " +
      "Constantinopla: 25+ palavras. Toda a pneumatologia dogmática " +
      "da cristandade está nestas adições.",
  },
  {
    topico: "Igreja, Batismo, Escatologia",
    niceia325: "(não existe)",
    constantinopla381:
      "Em uma só Igreja, santa, católica e apostólica. " +
      "Confesso um só batismo para remissão dos pecados. " +
      "Espero a ressurreição dos mortos e a vida do mundo que há de vir. Amém.",
    diferenca:
      "Tudo novo. Niceia terminava nos anátemas contra os arianos. " +
      "Constantinopla adiciona eclesiologia, sacramentologia e " +
      "escatologia, transformando o Credo em uma confissão " +
      "de fé completa.",
  },
];

// =============================================
// 4. CONDENÇÕES DOUTRINÁRIAS
// =============================================
export const condenacoes: CondenacaoDoutrinaria[] = [
  {
    heresia: "Arianismo",
    erro: "O Filho é criatura, a primeira e mais perfeita das criaturas, " +
      "mas não é Deus verdadeiro. 'Houve um tempo em que o Filho não existia.'",
    correcao:
      "O Filho é gerado, não criado. É consubstancial (homoousios) ao Pai. " +
      "É coeterno com o Pai — nunca houve um 'tempo' sem o Filho.",
    formulacao: "Cânon 1: anátema contra 'os arianos e eunomianos'.",
  },
  {
    heresia: "Eunomianismo (Anomeísmo)",
    erro: "O Filho é essencialmente DIFERENTE (anomoios) do Pai. " +
      "A essência do Pai é 'ingenitude'; o Filho, sendo 'gerado', " +
      "tem essência diferente. A essência divina é perfeitamente " +
      "conhecível pela razão humana.",
    correcao:
      "O Filho é da MESMA essência do Pai. A essência divina é " +
      "incompreensível (contra a 'teologia racional' de Eunômio). " +
      "'Geração' divina não implica diferença de essência.",
    formulacao: "Cânon 1: anátema contra 'os eunomianos'.",
  },
  {
    heresia: "Pneumatomachianismo (Macedonianismo)",
    erro: "O Espírito Santo não é Deus. É criatura, servo, ministro, " +
      "'o maior dos anjos'. Não deve ser adorado como Deus.",
    correcao:
      "O ES é 'Senhor que dá a vida', procede do Pai, é adorado " +
      "e glorificado com o Pai e o Filho. É consubstancial a ambos.",
    formulacao:
      "Cânon 1: anátema contra 'os pneumatomachianos'. " +
      "Credo: toda a cláusula pneumatológica.",
  },
  {
    heresia: "Apolinarismo",
    erro: "Cristo não tem mente humana racional (nous). " +
      "O Logos divino substituiu a mente humana na encarnação. " +
      "Cristo é 'carne animada pelo Logos', não homem completo.",
    correcao:
      "Cristo é plenamente Deus E plenamente homem, incluindo " +
      "mente humana racional. 'O que não foi assumido não foi " +
      "curado' (Gregório de Nazianzo).",
    formulacao: "Cânon 1: anátema contra 'os apolinaristas'.",
  },
  {
    heresia: "Sabelianismo (Modalismo)",
    erro: "Pai, Filho e ES não são três Pessoas reais, mas três " +
      "'modos' ou 'máscaras' de uma única Pessoa divina. " +
      "Deus se 'disfarça' de Pai na criação, de Filho na " +
      "encarnação, de ES na santificação.",
    correcao:
      "As três Pessoas são reais, distintas e coeternas. " +
      "O Pai não é o Filho, o Filho não é o ES, o ES não é o Pai. " +
      "São três hypostaseis em uma ousia.",
    formulacao: "Cânon 1: anátema contra 'os sabelianos'.",
  },
  
  {
    heresia: "Fotinianismo",
    erro: "Jesus era um mero homem que foi 'adotado' por Deus " +
      "por suas virtudes. O Logos não preexistia — é apenas " +
      "a 'palavra' de Deus, não uma Pessoa divina.",
    correcao:
      "O Filho é 'gerado do Pai antes de todos os séculos'. " +
      "Preexiste eternamente e é Deus verdadeiro.",
    formulacao: "Cânon 1: anátema contra 'os fotinianos'.",
  },
];

// =============================================
// 5. O QUE NÃO FOI DEFINIDO (LIMITES)
// =============================================
export const limitesDoutrinarios = {
  titulo: "O Que Constantinopla I NÃO Definiu",

  introducao:
    "É tão importante saber o que o concílio NÃO disse quanto o que disse. " +
    "Muitas questões que hoje parecem óbvias ainda não estavam maduras " +
    "em 381 e só seriam resolvidas em concílios posteriores.",

  naoDefinidos: [
    {
      topico: "O Filioque (processão do ES 'do Pai e do Filho')",
      descricao:
        "O Credo de 381 diz que o ES 'procede do Pai' — ponto. " +
        "Não diz 'do Pai e do Filho' (Filioque). Esta adição foi " +
        "feita no Ocidente séculos depois (Sínodo de Toledo, 589) " +
        "e é a principal causa TEOLÓGICA do Grande Cisma de 1054 " +
        "entre Católicos e Ortodoxos.",
      porQueNao:
        "Em 381, a questão não era se o ES procedia do Filho, " +
        "mas se o ES era Deus. O Filioque simplesmente não estava " +
        "em debate no Oriente. Os Capadócios falavam da 'monarquia " +
        "do Pai' (o Pai como única fonte da divindade) e não viam " +
        "necessidade de adicionar o Filho como fonte da processão.",
      desenvolvimentoPosterior:
        "O Filioque foi inserido gradualmente no Credo ocidental " +
        "(Espanha → Gália → Roma). O Papa Leão III (810) mandou " +
        "gravar o Credo SEM o Filioque em placas de prata em " +
        "São Pedro. A adição oficial ao Credo romano só ocorreu " +
        "em 1014, sob pressão do imperador Henrique II.",
    },
    {
      topico: "A Natureza da União Hipostática",
      descricao:
        "Constantinopla condenou Apolinário (Cristo sem mente humana), " +
        "mas NÃO definiu COMO as duas naturezas (divina e humana) " +
        "se unem em uma só Pessoa. Esta questão explodiria no " +
        "século V com Nestório e Eutiques.",
      porQueNao:
        "A cristologia ainda estava em estágio inicial. " +
        "A prioridade em 381 era a Trindade, não a encarnação. " +
        "A questão 'como Deus e homem coexistem em Cristo?' " +
        "exigiria mais 70 anos de debate até Calcedônia (451).",
      desenvolvimentoPosterior:
        "Éfeso (431) condenou Nestório (duas pessoas em Cristo). " +
        "Calcedônia (451) definiu: 'duas naturezas em uma Pessoa, " +
        "sem confusão, sem mudança, sem divisão, sem separação'.",
    },
    {
      topico: "O Título Theotokos (Mãe de Deus)",
      descricao:
        "O Credo chama Maria de 'Virgem' (Parthenos), mas NÃO " +
        "usa o título 'Theotokos' (Mãe de Deus), que seria " +
        "definido em Éfeso (431).",
      porQueNao:
        "O título já era usado na piedade popular e por alguns " +
        "Padres (Alexandre de Alexandria, Atanásio), mas ainda " +
        "não era dogma formal. A controvérsia com Nestório " +
        "(que preferia 'Christotokos') ainda não havia explodido.",
      desenvolvimentoPosterior:
        "Éfeso (431) definiu Maria como Theotokos contra Nestório.",
    },
    {
      topico: "A Relação entre Vontade Divina e Humana em Cristo",
      descricao:
        "Constantinopla não abordou a questão de quantas " +
        "vontades Cristo possui (divina e humana? só divina?).",
      porQueNao:
        "Esta questão só surgiria no século VII com o monotelismo.",
      desenvolvimentoPosterior:
        "Constantinopla III (681) definiu que Cristo tem duas " +
        "vontades (divina e humana) em harmonia.",
    },
    {
      topico: "A Natureza da Igreja",
      descricao:
        "O Credo afirma 'uma só Igreja, santa, católica e apostólica', " +
        "mas não desenvolve o que isso significa em termos de " +
        "governo, sacramentos ou relação com o Estado.",
      porQueNao:
        "A eclesiologia como disciplina teológica ainda não existia. " +
        "As quatro 'marcas' da Igreja eram afirmações de fé, " +
        "não definições institucionais.",
    },
    {
      topico: "O Cânon das Escrituras",
      descricao:
        "O concílio não definiu quais livros pertencem à Bíblia. " +
        "O cânon do Novo Testamento ainda não estava formalmente " +
        "fechado (a carta de Atanásio de 367 é o primeiro " +
        "documento com os 27 livros atuais).",
      porQueNao:
        "Não era uma questão controversa em 381. O cânon se " +
        "formalizaria gradualmente nos séculos seguintes.",
    },
  ],
};
// =============================================
// NOVO: LINHA DO TEMPO COMPLETA DO FILIOQUE (381 → SÉC. XXI)
// =============================================
export const historicoFilioque = {
  titulo: "A História da Cláusula do Filioque",
  linhaDoTempo: [
    {
      ano: "381",
      evento: "Texto Original de Constantinopla I",
      detalhes: "O concílio professa o Espírito Santo 'procedente do Pai' (ex Patre procedit), focando na Monarquia do Pai.",
    },
    {
      ano: "Séc. V",
      evento: "Teologia Patrística Latina (Santo Agostinho)",
      detalhes: "Em 'De Trinitate', Agostinho ensina a processão do Espírito a partir do Pai e do Filho (ab Utroque).",
    },
    {
      ano: "589",
      evento: "III Sínodo de Toledo (Espanha)",
      detalhes: "Primeiro uso do 'Filioque' no Credo cantado no Ocidente para reforçar a divindade do Filho contra visigodos arianos.",
    },
    {
      ano: "809–810",
      evento: "Sínodo de Aachen e Papa Leão III",
      detalhes: "Leão III aprova a teologia, mas recusa alterar o Credo ecumênico, gravando o texto de 381 sem o Filioque em placas de prata na Basílica de São Pedro.",
    },
    {
      ano: "1014",
      evento: "Adoção Oficial na Missa Romana",
      detalhes: "O Papa Bento VIII insere oficialmente o Filioque na liturgia romana a pedido do imperador Henrique II.",
    },
    {
      ano: "1274 / 1439",
      evento: "Concílios de Lyon II e Florença",
      detalhes: "Florença (1439) declara que a fórmula latina 'ex Patre Filioque' e a grega 'ex Patre per Filium' expressam a mesma verdade.",
    },
    {
      ano: "1995",
      evento: "Esclarecimento da Santa Sé (CDF)",
      detalhes: "O Vaticano reconhece que o texto grego de 381 é a norma ecumênica original e que a adição latina expressa legitimamente a consubstancialidade do Filho.",
    },
  ],
};
// =============================================
// 6. ECLESIOLOGIA (AS QUATRO MARCAS DA IGREJA)
// =============================================
export const eclesiologia = {
  titulo: "Eclesiologia — As Quatro Marcas da Igreja",

  introducao:
    "Constantinopla I é o primeiro documento dogmático a incluir " +
    "a Igreja no Credo: 'Creio em uma só Igreja, santa, católica " +
    "e apostólica.' Estas quatro 'marcas' (ou 'notas') da Igreja " +
    "são professadas por católicos, ortodoxos e muitos protestantes " +
    "até hoje.",

  marcas: [
    {
      marca: "Una",
      grego: "μίαν (mian)",
      significado:
        "A Igreja é UMA — não porque todos os cristãos estão " +
        "institucionalmente unidos (já havia divisões em 381!), " +
        "mas porque há um só Corpo de Cristo (Ef 4:4-6), " +
        "um só Batismo, uma só Fé. A unidade é ontológica " +
        "(fundada em Cristo), não organizacional.",
      contexto381:
        "Em 381, a Igreja estava dividida entre nicenos, arianos, " +
        "macedonianos, etc. A afirmação de que a Igreja é 'una' " +
        "era uma declaração de que a verdadeira Igreja é a que " +
        "professa a fé nicena — as outras são cismas ou heresias.",
    },
    {
      marca: "Santa",
      grego: "ἁγίαν (hagian)",
      significado:
        "A Igreja é SANTA — não porque seus membros são " +
        "perfeitos (longe disso!), mas porque sua fonte é " +
        "Deus, que é Santo. A santidade da Igreja vem de " +
        "Cristo (Ef 5:25-27) e do Espírito Santo que a " +
        "santifica. É santidade objetiva (dada por Deus), " +
        "não subjetiva (mérito dos membros).",
      contexto381:
        "Após décadas de bispos arianos, imperadores hereges " +
        "e corrupção eclesiástica, afirmar a santidade da " +
        "Igreja era um ato de fé radical.",
    },
    {
      marca: "Católica",
      grego: "καθολικὴν (katholikēn)",
      significado:
        "A Igreja é CATÓLICA — do grego kath'holon ('segundo " +
        "o todo'). Significa universal, completa, íntegra. " +
        "A Igreja católica é a que possui a plenitude da fé " +
        "(não apenas partes dela, como os hereges) e que " +
        "se estende a todos os povos e nações.",
      contexto381:
        "O termo 'católica' já era usado desde Inácio de " +
        "Antioquia (~107 d.C.). Em 381, servia para distinguir " +
        "a Igreja ortodoxa das seitas locais (arianos, " +
        "donatistas, etc.).",
    },
    {
      marca: "Apostólica",
      grego: "ἀποστολικὴν (apostolikēn)",
      significado:
        "A Igreja é APOSTÓLICA — fundada sobre os apóstolos " +
        "(Ef 2:20) e fiel ao seu ensinamento. A apostolicidade " +
        "tem três dimensões: (1) doutrinal (ensina o que os " +
        "apóstolos ensinaram); (2) sucessória (seus bispos " +
        "descendem dos apóstolos por imposição de mãos); " +
        "(3) missionária (continua a missão apostólica de " +
        "evangelizar todas as nações).",
      contexto381:
        "A sucessão apostólica era o critério principal de " +
        "legitimidade. Os arianos haviam rompido a sucessão " +
        "em muitas sedes; os nicenos a reivindicavam.",
    },
  ],
};

// =============================================
// 7. SACRAMENTOLOGIA (UM SÓ BATISMO)
// =============================================
export const sacramentologia = {
  titulo: "Sacramentologia — Um Só Batismo",

  texto: "Confesso um só batismo para remissão dos pecados.",
  grego: "ὁμολογῶ ἓν βάπτισμα εἰς ἄφεσιν ἁμαρτιῶν",

  significado:
    "O Credo afirma a unicidade e eficácia do batismo. " +
    "Há UM SÓ batismo válido — o batismo trinitário " +
    "(em nome do Pai, do Filho e do Espírito Santo, " +
    "conforme Mt 28:19). Este batismo não precisa ser " +
    "repetido, pois sua eficácia vem de Cristo, não " +
    "do ministro que o administra.",

  contexto381:
    "A questão do rebatismo era controversa. Os donatistas " +
    "(no Norte da África) exigiam rebatismo para quem havia " +
    "sido batizado por bispos 'traidores' (traditores). " +
    "A Igreja católica, seguindo Agostinho, rejeitava o " +
    "rebatismo: o batismo é válido independentemente da " +
    "santidade do ministro. " +
    "Além disso, o Cânon 7 do concílio trata da recepção " +
    "de hereges: alguns grupos (arianos, macedonianos) " +
    "eram recebidos por crisma (confirmação), sem rebatismo; " +
    "outros (eunomianos, montanistas) precisavam ser " +
    "batizados, pois seu batismo era considerado inválido " +
    "(não era trinitário).",

  implicacoes: [
    "O batismo é sacramento único e irrepetível",
    "Sua eficácia depende de Cristo, não do ministro",
    "Deve ser trinitário (fórmula de Mt 28:19)",
    "Hereges com batismo trinitário válido não são rebatizados",
    "Hereges sem batismo trinitário (eunomianos) devem ser batizados",
  ],
};

// =============================================
// 8. ESCATOLOGIA
// =============================================
export const escatologia = {
  titulo: "Escatologia — Ressurreição e Vida Eterna",

  texto: "Espero a ressurreição dos mortos e a vida do mundo que há de vir. Amém.",
  grego: "προσδοκῶ ἀνάστασιν νεκρῶν καὶ ζωὴν τοῦ μέλλοντος αἰῶνος. Ἀμήν.",

  significado:
    "O Credo termina com a esperança escatológica: " +
    "(1) a ressurreição corporal dos mortos (não apenas " +
    "'imortalidade da alma' platônica, mas ressurreição " +
    "do corpo); (2) a vida do 'mundo vindouro' (não " +
    "uma fuga deste mundo, mas a transformação de toda " +
    "a criação).",

  pontosChave: [
    {
      ponto: "Ressurreição dos mortos",
      explicacao:
        "Contra os gnósticos e platônicos que desprezavam o corpo " +
        "e ensinavam apenas a 'imortalidade da alma'. A fé cristã " +
        "afirma a ressurreição CORPORAL — o corpo será transformado, " +
        "não descartado (1 Cor 15:42-44).",
    },
    {
      ponto: "Vida do mundo que há de vir",
      explicacao:
        "A vida eterna não é uma fuga para um 'céu' desencarnado, " +
        "mas a renovação de toda a criação (Rm 8:21; Ap 21:1-5). " +
        "O 'mundo vindouro' (mellontos aiōnos) é a criação " +
        "transformada pela glória de Deus.",
    },
    {
      ponto: "Amém",
      explicacao:
        "O Credo termina com 'Amém' — palavra hebraica que " +
        "significa 'assim seja', 'é verdade'. É a confirmação " +
        "pessoal de tudo o que foi professado. O fiel não " +
        "apenas 'crê' intelectualmente, mas 'confirma' " +
        "existencialmente a fé da Igreja.",
    },
  ],

  oQueNaoDiz:
    "O Credo NÃO menciona: juízo final detalhado, purgatório, " +
    "milênio, arrebatamento, ou o destino dos não-cristãos. " +
    "Estas questões eram debatidas pelos Padres, mas não " +
    "havia consenso suficiente para inclusão no Credo.",
};

// =============================================
// 9. RESUMO TEOLÓGICO GERAL
// =============================================
export const resumoTeologico = {
  titulo: "Resumo Teológico do Concílio de Constantinopla I",

  tese:
    "Constantinopla I completou o dogma da Santíssima Trindade. " +
    "Se Niceia (325) respondeu 'Quem é o Filho?', Constantinopla (381) " +
    "respondeu 'Quem é o Espírito Santo?'. Juntos, os dois concílios " +
    "produziram a formulação trinitária definitiva do cristianismo: " +
    "um Deus em três Pessoas co-iguais, co-eternas e consubstanciais.",

  conquistas: [
    "Definição dogmática da divindade do Espírito Santo",
    "Credo Niceno-Constantinopolitano — o Credo mais usado na cristandade",
    "Condenação definitiva de 7 heresias (Cânon 1)",
    "Reafirmação solene do homoousios de Niceia",
    "Formulação clássica da Trindade: uma ousia, três hypostaseis",
    "Quatro marcas da Igreja: una, santa, católica, apostólica",
    "Unicidade do batismo trinitário",
    "Afirmação da ressurreição corporal e da vida eterna",
  ],

  limitacoes: [
    "Ausência do Ocidente (questionou a ecumenicidade por décadas)",
    "Não resolveu o cisma de Antioquia",
    "Não definiu a cristologia (duas naturezas) — isso viria em Calcedônia",
    "Não abordou o Filioque (questão que explodiria em 1054)",
    "O Cânon 3 (primazia de Constantinopla) gerou conflito com Roma",
  ],

  legado:
    "O Credo Niceno-Constantinopolitano é recitado todos os domingos " +
    "por mais de 2 bilhões de cristãos em todo o mundo — católicos, " +
    "ortodoxos, anglicanos, luteranos, reformados e muitos outros. " +
    "É o documento teológico mais influente da história do cristianismo " +
    "depois da própria Bíblia. Cada vez que um cristão diz 'Creio no " +
    "Espírito Santo, Senhor que dá a vida', está professando a fé " +
    "definida neste concílio de 381.",
};
// =============================================
// NOVO: GLOSSÁRIO TEOLÓGICO GREGO
// =============================================
export interface TermoGlossario {
  termo: string;
  grego: string;
  transcricao: string;
  definicao: string;
  importanciaTrinitaria: string;
}

export const glossarioGrego: TermoGlossario[] = [
  {
    termo: "Ousia",
    grego: "οὐσία",
    transcricao: "Ousía",
    definicao: "Essência, natureza, substância em si mesma.",
    importanciaTrinitaria: "Refere-se à única divindade compartilhada por Pai, Filho e Espírito Santo.",
  },
  {
    termo: "Hypostasis",
    grego: "ὑπόστασις",
    transcricao: "Hypóstasis",
    definicao: "Subsistência individual, Pessoa real e concreta.",
    importanciaTrinitaria: "Distingue cada uma das Três Pessoas na única Ousia divina.",
  },
  {
    termo: "Homoousios",
    grego: "ὁμοούσιος",
    transcricao: "Homooúsios",
    definicao: "Consubstancial, da MESMA essência.",
    importanciaTrinitaria: "O dogma central de Niceia e Constantinopla.",
  },
  {
    termo: "Ekporeusis",
    grego: "ἐκπόρευσης",
    transcricao: "Ekpóreusis",
    definicao: "Processão da fonte inicial.",
    importanciaTrinitaria: "Verbo bíblico (Jo 15:26) para a origem eterna do Espírito Santo a partir do Pai.",
  },
  {
    termo: "Gennesis",
    grego: "γέννησις",
    transcricao: "Génnēsis",
    definicao: "Geração eterna.",
    importanciaTrinitaria: "Propriedade hipostática exclusiva do Filho.",
  },
  {
    termo: "Agennesia",
    grego: "ἀγεννησία",
    transcricao: "Agennēsía",
    definicao: "Ingeneridade, ser sem causa.",
    importanciaTrinitaria: "Propriedade hipostática exclusiva do Pai.",
  },
];