/**
 * PARTIDOS TEOLÓGICOS NO CONCÍLIO DE CONSTANTINOPLA I (381 d.C.)
 * Os 6+ grupos que disputavam a fé cristã no século IV.
 * Análise heresiológica completa, posições sobre o Filho e o Espírito Santo,
 * argumentos, refutações e o espectro teológico.
 */

export interface PartidoTeologico {
  nome: string;
  nomeAlternativo?: string;
  lider: string;
  periodo: string;
  posicaoSobreOFilho: string;
  posicaoSobreOESpirito: string;
  termoChave: string;
  descricao: string;
  argumentosPrincipais: string[];
  refutacao: string;
  statusNoConcilio: string;
  forcaNumerica: string;
  baseGeografica: string;
}

export const partidos: PartidoTeologico[] = [
  // =============================================
  // 1. NICENOS ORTODOXOS
  // =============================================
  {
    nome: "Nicenos Ortodoxos",
    nomeAlternativo: "Homoousianos",
    lider: "Gregório de Nazianzo, Gregório de Nissa, Timóteo de Alexandria, São Melécio de Antioquia",
    periodo: "325 d.C. em diante",
    posicaoSobreOFilho:
      "O Filho é homoousios (consubstancial, da mesma essência) ao Pai. " +
      "Gerado eternamente, não criado. Deus verdadeiro de Deus verdadeiro.",
    posicaoSobreOESpirito:
      "O Espírito Santo é homoousios ao Pai e ao Filho. " +
      "É 'Senhor que dá a vida', procede do Pai, e é adorado e " +
      "glorificado juntamente com o Pai e o Filho.",
    termoChave: "Homoousios (ὁμοούσιος) — da mesma essência",
    descricao:
      "O partido que defendia a fé de Niceia (325) em sua integridade. " +
      "Após décadas de perseguição, marginalização e exílio, os nicenos " +
      "finalmente tinham o apoio imperial (Teodósio) e a maturidade " +
      "teológica dos Capadócios. Sua grande inovação em relação a " +
      "Niceia era a pneumatologia completa: a divindade do Espírito Santo. " +
      "Herdeiros da tradição de São Atanásio e São Hilário de Poitiers, " +
      "esses bispos consolidaram a fórmula 'uma ousia, três hipóstases'.",
    argumentosPrincipais: [
      "O Filho é 'Deus de Deus, Luz de Luz' — não pode ser criatura (Jo 1:1, 1:14)",
      "Se o Filho não é Deus, a salvação é impossível (Atanásio: 'Deus se fez homem para que o homem se fizesse deus')",
      "O Espírito Santo realiza obras que só Deus pode fazer: santificação, vivificação, inspiração profética",
      "A fórmula batismal (Mt 28:19) coloca Pai, Filho e ES no mesmo nível",
      "A doxologia litúrgica 'Glória ao Pai, ao Filho e ao Espírito Santo' implica igualdade",
      "A distinção entre 1 Ousia (essência) e 3 Hipóstases (pessoas) preserva a unidade divina sem cair em modalismo",
    ],
    refutacao:
      "A refutação dos nicenos contra os arianos foi consolidada por " +
      "Atanásio (Contra Arianos), Basílio (Contra Eunômio, De Spiritu Sancto) " +
      "e Gregório de Nazianzo (Orações Teológicas). O argumento central: " +
      "se o Filho/ES são criaturas, a adoração que lhes é prestada é " +
      "idolatria — o que é absurdo, pois toda a Igreja os adora.",
    statusNoConcilio: "✅ VENCEDORES — sua fé foi promulgada como dogma",
    forcaNumerica: "Maioria dos ~150 bispos presentes",
    baseGeografica: "Capadócia, Egito, Palestina, partes da Síria, Ocidente",
  },

  // =============================================
  // 2. PNEUMATOMACHIANOS (MACEDONIANOS)
  // =============================================
  {
    nome: "Pneumatomachianos",
    nomeAlternativo: "Macedonianos, Semi-Nicenos tardios, Marathonianos",
    lider: "Eleúsio de Cízico, Marciano de Lâmpsaco",
    periodo: "~360–381 d.C.",
    posicaoSobreOFilho:
      "O Filho é homoiousios (de essência semelhante) ou homoousios ao Pai. " +
      "Neste ponto, concordavam com os nicenos.",
    posicaoSobreOESpirito:
      "O Espírito Santo NÃO é Deus. É 'algo intermediário' — nem criatura " +
      "comum nem Deus verdadeiro. Alguns o consideravam o 'maior dos anjos', " +
      "o 'ministro de Cristo' ou a 'primeira criatura do Filho'.",
    termoChave: "Pneumatomachoi (πνευματομάχοι) — lutadores contra o Espírito",
    descricao:
      "O partido mais relevante para o concílio. Os pneumatomachianos " +
      "aceitavam Niceia no que dizia respeito ao Filho, mas recusavam " +
      "estender a consubstancialidade ao Espírito Santo. Seu argumento " +
      "era que as Escrituras nunca chamam o ES de 'Deus' explicitamente " +
      "(diferente do Filho, que é chamado 'Deus' em Jo 1:1, 20:28, etc.). " +
      "Macedônio I de Constantinopla (falecido ~360) é considerado o " +
      "fundador, embora a atribuição seja debatida. " +
      "IMPORTANTE: O nome 'Macedonianos' é um apelido anacrônico usado por " +
      "escritores posteriores. Macedônio foi bispo homoiano de Constantinopla " +
      "(342–360), mas não fundou tecnicamente a seita nem esteve presente " +
      "no concílio de 381. O próprio grupo se autodenominava simplesmente " +
      "'Pneumatomachoi' — 'lutadores contra o Espírito' —, título dado por " +
      "seus adversários mas incorporado como identidade teológica.",
    argumentosPrincipais: [
      "As Escrituras nunca dizem 'o Espírito Santo é Deus' explicitamente",
      "A fórmula batismal (Mt 28:19) não implica igualdade — o rei e seu servo podem ser mencionados juntos",
      "O ES é 'enviado' pelo Pai e pelo Filho, logo é subordinado",
      "Chamar o ES de 'Deus' é triteísmo (três deuses)",
      "Os Capadócios estão inovando além da Escritura",
    ],
    refutacao:
      "Basílio (De Spiritu Sancto) e Gregório de Nazianzo (Oração 31) " +
      "refutaram: (1) o ES realiza obras divinas (santificação, vivificação); " +
      "(2) o ES é 'Senhor' (2 Cor 3:17); (3) mentir ao ES é mentir a Deus " +
      "(At 5:3-4); (4) a doxologia trinitária implica igualdade; " +
      "(5) o argumento do silêncio escriturístico prova demais — " +
      "a Escritura também não diz explicitamente que o ES não é Deus.",
    statusNoConcilio:
      "❌ CONDENADOS — os 36 macedonianos abandonaram o concílio " +
      "após recusar a fórmula de consubstancialidade do ES",
    forcaNumerica: "~36 bispos (da Ásia Menor)",
    baseGeografica: "Helesponto, Ásia Menor ocidental (Cízico, Lâmpsaco)",
  },

  // =============================================
  // 3. EUNOMIANOS (ANOMEUS)
  // =============================================
  {
    nome: "Eunomianos",
    nomeAlternativo: "Anomeus, Heterousianos, Arianos Radicais",
    lider: "Eunômio de Cízico (exilado)",
    periodo: "~350–381 d.C.",
    posicaoSobreOFilho:
      "O Filho é heteroousios (de essência DIFERENTE) ao Pai. " +
      "Mais radical que Ário: o Filho não é apenas 'semelhante' ou " +
      "'subordinado', mas essencialmente diferente do Pai. " +
      "A essência do Pai é 'ingenitude' (agennēsia); como o Filho " +
      "é 'gerado', ele não pode ter a mesma essência.",
    posicaoSobreOESpirito:
      "O ES é a primeira criatura do Filho — ainda mais distante " +
      "de Deus que o próprio Filho. Uma 'criatura da criatura', " +
      "infinitamente inferior ao Pai e ao Filho.",
    termoChave: "Anomoios (ἀνόμοιος) — diferente, dessemelhante",
    descricao:
      "A ala mais radical e intelectualmente sofisticada do arianismo. " +
      "Eunômio, discípulo de Aécio, desenvolveu um sistema filosófico " +
      "coerente baseado na ideia de que a essência de Deus é " +
      "perfeitamente conhecível (é 'ingenitude') e que 'geração' " +
      "implica diferença essencial. Os Capadócios dedicaram suas " +
      "maiores obras a refutar Eunômio.",
    argumentosPrincipais: [
      "A essência de Deus é 'agennēsia' (não-geração); o Filho é 'gennētos' (gerado); logo, essências diferentes",
      "A essência divina é perfeitamente conhecível pela razão humana",
      "Homoousios implica divisão da essência divina (materialismo)",
      "A geração do Filho é um ato da vontade divina, não da natureza",
    ],
    refutacao:
      "Gregório de Nissa (Contra Eunômio) destruiu o sistema: " +
      "(1) a essência de Deus é INCOMPREENSÍVEL (não é 'ingenitude'); " +
      "(2) 'geração' divina não é como geração humana; " +
      "(3) confundir 'agennētos' (incriado) com 'agennētos' (não-gerado) " +
      "é um sofisma linguístico.",
    statusNoConcilio:
      "❌ CONDENADOS no Cânon 1 — Eunômio estava vivo mas exilado",
    forcaNumerica: "Pequeno grupo, mas intelectualmente influente",
    baseGeografica: "Cízico, partes da Capadócia e Síria",
  },

  // =============================================
  // 4. HOMOIANS
  // =============================================
  {
    nome: "Homoianos",
    nomeAlternativo: "Homoianos imperiais, Arianos políticos, Eudoxianos",
    lider: "Demófilo de Constantinopla (expulso em 380)",
    periodo: "359–381 d.C.",
    posicaoSobreOFilho:
      "O Filho é homoios (semelhante) ao Pai 'segundo as Escrituras'. " +
      "Recusam TODA linguagem de 'essência' (ousia): nem homoousios, " +
      "nem homoiousios, nem heteroousios. A questão da essência é " +
      "'incompreensível' e não deve ser discutida.",
    posicaoSobreOESpirito:
      "O ES é subordinado ao Filho, que por sua vez é subordinado ao Pai. " +
      "Hierarquia rígida: Pai > Filho > ES. Uma criatura ou força " +
      "servil, sem divindade própria.",
    termoChave: "Homoios (ὅμοιος) — semelhante (sem qualificação de essência)",
    descricao:
      "O partido 'oficial' do Império de 359 a 381 (Concílios de " +
      "Rimini-Selêucia e Constantinopla de 360). Os homoianos " +
      "representavam o 'centro' ariano: não tão radicais quanto " +
      "Eunômio, mas firmemente contra o homoousios. Sua estratégia " +
      "era banir toda terminologia técnica e ficar com a linguagem " +
      "bíblica vaga ('semelhante segundo as Escrituras'). " +
      "Foi a teologia adotada pelos godos (evangelizados por Úlfilas) " +
      "e sobreviveu no Ocidente entre os povos germânicos até o século VI.",
    argumentosPrincipais: [
      "Os termos ousia, homoousios, homoiousios não estão na Bíblia",
      "A fé deve ser simples e bíblica, não filosófica",
      "O Filho é 'semelhante' ao Pai — isso basta",
      "As disputas sobre essência dividem a Igreja desnecessariamente",
    ],
    refutacao:
      "Os nicenos argumentavam que 'semelhante' é vago demais: " +
      "um retrato é 'semelhante' ao original, mas não é o original. " +
      "Atanásio: 'Se o Filho é apenas semelhante, ele é criatura.'",
    statusNoConcilio:
      "❌ CONDENADOS no Cânon 1 (como 'Arianos ou Eudoxianos') — " +
      "já haviam sido expulsos de suas sedes por Teodósio em 380 " +
      "(Demófilo de Constantinopla)",
    forcaNumerica:
      "Eram a maioria em Constantinopla até 380; após a purga " +
      "de Teodósio, perderam toda influência no Império do Oriente",
    baseGeografica:
      "Constantinopla, Trácia, Gótia (os godos eram homoianos " +
      "por terem sido convertidos por Úlfilas, bispo ariano)",
  },

  // =============================================
  // 5. APOLINARISTAS
  // =============================================
  {
    nome: "Apolinaristas",
    nomeAlternativo: "Apolinarianos",
    lider: "Apolinário de Laodiceia (~310–390)",
    periodo: "~360–381 d.C.",
    posicaoSobreOFilho:
      "O Filho é homoousios ao Pai (neste ponto, eram nicenos!). " +
      "Apolinário era amigo de Atanásio e defensor fervoroso de Niceia. " +
      "Porém, na Encarnação, Cristo NÃO assumiu uma mente/alma racional " +
      "humana (nous). O Logos divino tomou o lugar da mente humana em Jesus. " +
      "Fórmula-síntese apolinarista: 'uma só natureza encarnada do Verbo' " +
      "(mia physis tou Theou Logou sesarkomene) — expressão que, ironicamente, " +
      "seria mais tarde reapropriada pelos monofisitas do século V.",
    posicaoSobreOESpirito:
      "Aceitavam a divindade do ES (mais próximos dos nicenos que " +
      "dos pneumatomachianos neste ponto). Eram ortodoxos no dogma " +
      "trinitário, mas heréticos na Cristologia.",
    termoChave:
      "Alogos sarx (ἄλογος σάρξ) — 'carne sem logos [humano]'",
    descricao:
      "A heresia mais sutil e mais perigosa de todas, porque partia " +
      "de premissas nicenas. Apolinário, tentando defender a unidade " +
      "de Cristo contra os arianos, concluiu que o Logos divino " +
      "substituiu a mente racional (nous) humana em Jesus. " +
      "Ou seja: Cristo tinha corpo humano e alma sensitiva humana, " +
      "mas sua mente/razão era o Logos divino. " +
      "Apolinário temia que, se Cristo tivesse uma mente humana " +
      "completa, haveria 'duas pessoas' em Cristo e a unidade " +
      "se perderia. Sua trajetória é trágica: de amigo íntimo de " +
      "São Atanásio e defensor da fé nicena, tornou-se heresiarca " +
      "por excesso de zelo apologético. Condenado em Roma (377), " +
      "Antioquia (378) e finalmente em Constantinopla I (381). " +
      "Os apolinaristas são explicitamente citados nas leis de " +
      "Teodósio contra os hereges (Codex Theodosianus XVI.5.11).",
    argumentosPrincipais: [
      "Se Cristo tem mente humana completa + Logos divino = duas pessoas (divisão)",
      "A mente humana é a sede do pecado; se Cristo tivesse mente humana, ele poderia pecar",
      "O Logos 'tomou o lugar' da mente humana na encarnação",
      "Jo 1:14 diz 'o Logos se fez carne' — não 'o Logos se fez homem completo'",
    ],
    refutacao:
      "Gregório de Nazianzo formulou a refutação clássica na " +
      "Epístola 101 a Cledônio: 'O que não foi assumido não foi curado' " +
      "(to gar aproslēpton atherapeuton). Se Cristo não assumiu uma " +
      "mente humana completa, a mente humana não foi redimida. " +
      "A salvação exige que Cristo seja plenamente Deus E plenamente " +
      "homem — corpo, alma sensitiva E mente racional. Sem mente " +
      "humana, Cristo seria um monstro ontológico, não o Redentor " +
      "do homem inteiro.",
    statusNoConcilio:
      "❌ CONDENADOS no Cânon 1 — Apolinário estava vivo mas " +
      "idoso e isolado em Laodiceia. Sua heresia foi recondenada " +
      "posteriormente em Éfeso (431) e Calcedônia (451).",
    forcaNumerica: "Pequeno grupo, mas teologicamente influente",
    baseGeografica: "Laodiceia (Síria), partes do Egito",
  },

  // =============================================
  // 6. MARCELIANOS E FOTINIANOS
  // =============================================
  {
    nome: "Marcelianos e Fotinianos",
    nomeAlternativo: "Modalistas tardios, Sabelianos",
    lider: "Marcelo de Ancira (~285–374), Fotino de Sirmium (~300–376)",
    periodo: "~330–381 d.C.",
    posicaoSobreOFilho:
      "O Filho não é uma hypostasis distinta do Pai. " +
      "O Logos é uma 'extensão' temporária do Pai para a criação " +
      "e a encarnação. Após o Juízo Final, o Logos 'retornará' " +
      "ao Pai e a Trindade cessará (Marcelo). " +
      "Fotino ia além: Jesus era um mero homem que foi 'adotado' " +
      "por Deus (adocionismo).",
    posicaoSobreOESpirito:
      "O ES não é uma Pessoa distinta — é apenas a 'atividade' " +
      "do Pai no mundo, uma energia ou modo de ação divino.",
    termoChave: "Modalismo / Sabelianismo — uma Pessoa, três modos",
    descricao:
      "Os marcelianos e fotinianos representavam o extremo oposto " +
      "do arianismo: se os arianos separavam demais as Pessoas " +
      "(subordinacionismo), os marcelianos as confundiam demais " +
      "(modalismo). Para Marcelo, Pai, Filho e ES são três " +
      "'modos' ou 'manifestações' de um único Deus, não três " +
      "Pessoas reais e distintas. Ironicamente, Marcelo foi " +
      "aliado dos nicenos no início (esteve em Niceia em 325 " +
      "combatendo Ário), mas sua reação exagerada ao arianismo " +
      "o levou ao extremo oposto.",
    argumentosPrincipais: [
      "Deus é UM — a Trindade de Pessoas implica triteísmo",
      "O Logos é a 'razão' de Deus, não uma Pessoa separada",
      "A 'geração' do Filho é metafórica, não real",
      "Jo 10:30: 'Eu e o Pai somos UM' (ênfase na unidade)",
      "1 Cor 15:28: 'Deus será tudo em todos' (o Filho retornará ao Pai)",
    ],
    refutacao:
      "Os nicenos argumentavam que o modalismo destrói a " +
      "realidade da encarnação: se o Pai e o Filho são a " +
      "mesma Pessoa, então o Pai sofreu na cruz (patripassianismo), " +
      "o que é absurdo. Para refutar Marcelo especificamente, o " +
      "Concílio de 381 inseriu no Credo a cláusula definitiva: " +
      "'E o seu reino não terá fim' (ou tēs basileias ouk estai telos).",
    statusNoConcilio:
      "❌ CONDENADOS no Cânon 1 — tanto Marcelo quanto " +
      "Fotino já haviam morrido, mas seus seguidores persistiam",
    forcaNumerica: "Muito pequeno, residual",
    baseGeografica: "Ancira (Galácia), Sirmium (Panônia)",
  },
];

// =============================================
// RESUMO GERAL DOS PARTIDOS
// =============================================
export const resumoPartidos =
  "O cenário teológico de 381 era um espectro que ia do modalismo " +
  "(Marcelo — unidade excessiva) ao anomeísmo (Eunômio — separação " +
  "excessiva), passando pelo homoianismo (centro ariano), " +
  "pneumatomachianismo (meio-termo sobre o ES) e apolinarismo " +
  "(cristologia defeituosa). Os nicenos ortodoxos, liderados " +
  "pelos Capadócios, ocupavam o centro teológico: Trindade real " +
  "(contra modalistas) com unidade de essência (contra arianos), " +
  "incluindo a divindade plena do Espírito Santo (contra " +
  "pneumatomachianos) e a humanidade completa de Cristo " +
  "(contra apolinaristas).";

// =============================================
// ESPECTRO TEOLÓGICO DO SÉCULO IV
// =============================================
export const espectroTeologico = [
  "MODALISMO ← Marcelo/Fotino (1 Pessoa, 3 modos)",
  "NICENISMO ← Gregórios/Capadócios (3 Pessoas, 1 essência, ES é Deus) ✅",
  "PNEUMATOMACHIANISMO ← Eleúsio (Filho é Deus, ES não é)",
  "HOMOIOUSIANISMO ← Basílio de Ancira (Filho 'de essência semelhante')",
  "HOMOIANISMO ← Demófilo (Filho 'semelhante', sem ousia)",
  "ARIANISMO ← Ário/Eusébio (Filho é criatura)",
  "EUNOMIANISMO ← Eunômio (Filho é essencialmente DIFERENTE)",
];

// =============================================
// ANÁLISE HERESIOLÓGICA — QUEM FOI CONDENADO POR NOME
// =============================================
export const quemFoiCondenadoPorNome = {
  titulo: "Quem Foi Condenado Nominalmente pelo Concílio?",
  observacaoGeral:
    "Um detalhe importante para o leitor exigente: o Concílio de " +
    "Constantinopla I anatematiza HERESIAS e SEITAS coletivamente " +
    "(no Cânon 1), NÃO indivíduos vivos por nome próprio. Isso " +
    "diferencia Constantinopla de Niceia (325), que havia condenado " +
    "nominalmente Ário.",
  detalhes: [
    "Ário já estava morto há 45 anos (morreu em 336) e não foi mencionado por nome",
    "Eunômio de Cízico estava vivo em 381, mas exilado — sua heresia foi condenada (eunomianismo), não sua pessoa",
    "Apolinário de Laodiceia estava vivo e idoso — o apolinarismo foi condenado, não Apolinário por nome",
    "Macedônio já estava morto há duas décadas — o pneumatomachianismo foi condenado sem menção nominal",
  ],
  unicaExcecao:
    "A ÚNICA condenação nominal de um indivíduo em todo o concílio " +
    "está no Cânon 4, dirigido exclusivamente ao impostor MÁXIMO O " +
    "CÍNICO: 'Declaramos que Máximo nunca foi nem é bispo, e que " +
    "todos os que foram ordenados por ele são declarados nulos.' " +
    "Máximo tentou usurpar a sé de Constantinopla numa ordenação " +
    "clandestina, apoiado por bispos egípcios, enquanto Gregório " +
    "de Nazianzo estava doente.",
};

// =============================================
// O QUE O CONCÍLIO NÃO ABORDOU
// =============================================
export const oQueNaoFoiTocado = {
  titulo: "O Que o Concílio de 381 NÃO Abordou",
  introducao:
    "Para o leitor exigente, é útil delimitar o escopo do concílio. " +
    "Constantinopla I foi um sínodo trinitário e pneumatológico, " +
    "não um concílio universal sobre todas as questões abertas da Igreja.",
  itens: [
   
    {
      topico: "Novacianos",
      explicacao:
        "Não condenou os novacianos (rigoristas morais que negavam " +
        "readmissão de apóstatas na Igreja). Eles eram trinitariamente " +
        "ortodoxos, apenas cismáticos disciplinares. O historiador " +
        "Sócrates Escolástico, ele mesmo simpatizante novaciano, " +
        "descreve o concílio com detalhes preciosos justamente por " +
        "não se sentir alvo dele.",
    },
    {
      topico: "Donatismo",
      explicacao:
        "Não fez menção ao donatismo — a crise era puramente ocidental " +
        "(Norte da África) e ainda seria combatida por Santo Agostinho " +
        "décadas depois. Constantinopla I era um concílio do Oriente.",
    },
    {
      topico: "Priscilianismo",
      explicacao:
        "Não abordou o priscilianismo (heresia gnóstica hispânica) — " +
        "questão que seria tratada no Ocidente, especialmente no " +
        "Sínodo de Zaragoza (380) e depois em Toledo I (400).",
    },
  ],
};