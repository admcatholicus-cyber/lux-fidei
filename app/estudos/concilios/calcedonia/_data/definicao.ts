// ═══════════════════════════════════════════════════════════════════════════
// A DEFINIÇÃO DE CALCEDÔNIA (HOROS TĒS PISTEŌS) — 22 DE OUTUBRO DE 451
// ═══════════════════════════════════════════════════════════════════════════
// Este é o coração dogmático do Concílio: a fórmula que definiu para sempre
// a fé cristológica ortodoxa como "um só e mesmo Cristo, em duas naturezas
// sem confusão, sem mudança, sem divisão, sem separação".
// ═══════════════════════════════════════════════════════════════════════════

export const textoIntegralPT: string =
  "Seguindo, portanto, os santos Padres, todos unanimemente ensinamos a confessar um só e o mesmo " +
  "Filho, nosso Senhor Jesus Cristo, perfeito quanto à divindade e perfeito quanto à humanidade, " +
  "verdadeiramente Deus e verdadeiramente homem, o mesmo composto de alma racional e corpo, " +
  "consubstancial ao Pai segundo a divindade e consubstancial a nós segundo a humanidade, " +
  "\"em tudo semelhante a nós, exceto no pecado\" (Hb 4,15), gerado do Pai antes dos séculos segundo " +
  "a divindade, e nestes últimos dias, por nós e por nossa salvação, gerado de Maria Virgem, Mãe " +
  "de Deus (Theotokos), segundo a humanidade — " +
  "\n\n" +
  "um só e o mesmo Cristo, Filho, Senhor, Unigênito, reconhecido em duas naturezas, sem confusão, " +
  "sem mudança, sem divisão, sem separação, jamais suprimida a diferença das naturezas em razão da " +
  "união, mas antes preservada a propriedade de cada natureza e concorrendo em uma só pessoa e uma " +
  "só hipóstase, não dividido ou separado em duas pessoas, mas um só e o mesmo Filho e Unigênito, " +
  "Deus Verbo, Senhor Jesus Cristo — " +
  "\n\n" +
  "como desde o princípio os profetas a seu respeito ensinaram, como o próprio Jesus Cristo nos " +
  "instruiu, e como nos transmitiu o Símbolo dos Padres. " +
  "\n\n" +
  "Estas coisas tendo sido, com toda a exatidão e diligência, por nós formuladas, o santo e ecumênico " +
  "Sínodo determinou que a ninguém é permitido apresentar, redigir, compor, sentir ou ensinar outra " +
  "fé. Os que ousarem compor outra fé, ou apresentá-la, ou ensiná-la, ou transmitir outro Símbolo " +
  "aos que desejam converter-se ao conhecimento da verdade, vindos do paganismo, do judaísmo ou de " +
  "qualquer heresia — se forem bispos ou clérigos, sejam depostos do episcopado ou do clero; se forem " +
  "monges ou leigos, sejam anatematizados.";

export const textoIntegralGrego: string =
  "Hepomenoi toinyn tois hagiois patrasin, hena kai ton auton homologein Huion ton Kyrion hēmōn " +
  "Iēsoun Christon symphōnōs hapantes ekdidaskomen, teleion ton auton en theotēti kai teleion ton " +
  "auton en anthrōpotēti, Theon alēthōs kai anthrōpon alēthōs ton auton, ek psychēs logikēs kai " +
  "sōmatos, homoousion tō Patri kata tēn theotēta, kai homoousion hēmin ton auton kata tēn " +
  "anthrōpotēta, kata panta homoion hēmin chōris hamartias, pro aiōnōn men ek tou Patros gennēthenta " +
  "kata tēn theotēta, ep' eschatōn de tōn hēmerōn ton auton di' hēmas kai dia tēn hēmeteran sōtērian " +
  "ek Marias tēs Parthenou tēs Theotokou kata tēn anthrōpotēta, " +
  "\n\n" +
  "hena kai ton auton Christon, Huion, Kyrion, Monogenē, en dyo physesin asynchytōs, atreptōs, " +
  "adiairetōs, achōristōs gnōrizomenon, oudamou tēs tōn physeōn diaphoras anērēmenēs dia tēn henōsin, " +
  "sōzomenēs de mallon tēs idiotētos hekateras physeōs kai eis hen prosōpon kai mian hypostasin " +
  "syntrechousēs, ouk eis dyo prosōpa merizomenon ē diairoumenon, all' hena kai ton auton Huion " +
  "kai Monogenē, Theon Logon, Kyrion Iēsoun Christon, " +
  "\n\n" +
  "kathaper anōthen hoi prophētai peri autou kai autos hēmas ho Kyrios Iēsous Christos exepaideusen " +
  "kai to tōn paterōn hēmin paradedōken symbolon.";

export interface FraseAnalise {
  frase: string;
  grego: string;
  significado: string;
  contraQuem: string;
  baseBiblica: string[];
}

export const analiseFrasePorFrase: FraseAnalise[] = [
  {
    frase: "um só e o mesmo Filho, nosso Senhor Jesus Cristo",
    grego: "hena kai ton auton Huion ton Kyrion hēmōn Iēsoun Christon",
    significado:
      "A repetição enfática de \"um só e o mesmo\" (hena kai ton auton) — que se repete cinco vezes " +
      "na Definição — martela a unidade absoluta do sujeito. Não há em Cristo dois filhos, dois " +
      "senhores, duas pessoas justapostas: é numericamente o mesmo Filho quem é eterno com o Pai e " +
      "quem nasce de Maria. Esta é a expressão máxima da doutrina da unidade hipostática.",
    contraQuem:
      "Contra Nestório e a Escola de Antioquia radical, que tendiam a falar de \"aquele que assume\" " +
      "e \"aquele que é assumido\" como se fossem sujeitos distintos unidos moralmente.",
    baseBiblica: [
      "João 1,14 — \"o Verbo se fez carne\" (um só sujeito)",
      "Filipenses 2,6-7 — \"o mesmo\" que era em forma de Deus se esvazia",
      "1 Coríntios 8,6 — \"um só Senhor, Jesus Cristo\"",
    ],
  },
  {
    frase: "perfeito quanto à divindade e perfeito quanto à humanidade",
    grego: "teleion en theotēti kai teleion en anthrōpotēti",
    significado:
      "A palavra teleion (\"perfeito\", \"completo\", \"íntegro\") aparece duas vezes justamente para " +
      "garantir que nenhuma das duas naturezas é diminuída pela união. Cristo é completo como Deus " +
      "(nada da divindade lhe falta) e completo como homem (nada da humanidade lhe falta — corpo, " +
      "alma racional, vontade, operação).",
    contraQuem:
      "Contra Apolinário de Laodiceia (que negava a alma racional humana de Cristo, substituída pelo " +
      "Verbo) e contra Eutiques (que negava a integridade da humanidade após a união).",
    baseBiblica: [
      "Colossenses 2,9 — \"nele habita corporalmente toda a plenitude da divindade\"",
      "Hebreus 2,17 — \"tornou-se em tudo semelhante aos irmãos\"",
      "Lucas 2,52 — \"crescia em sabedoria\" (alma racional real)",
    ],
  },
  {
    frase: "consubstancial ao Pai segundo a divindade e consubstancial a nós segundo a humanidade",
    grego: "homoousion tō Patri kata tēn theotēta, kai homoousion hēmin kata tēn anthrōpotēta",
    significado:
      "Aplicação dupla e simétrica do termo niceno homoousios. É o mesmo Verbo consubstancial ao " +
      "Pai (Niceia 325) que se faz consubstancial a nós na humanidade. Essa dupla consubstancialidade " +
      "é a estrutura ontológica que garante a mediação salvífica: Cristo pode reconciliar Deus e o " +
      "homem porque é verdadeiramente ambos.",
    contraQuem:
      "Contra Eutiques, que explicitamente havia dito que Cristo era \"consubstancial à Mãe\" mas " +
      "\"não consubstancial a nós\", porque sua humanidade seria de natureza distinta da nossa.",
    baseBiblica: [
      "João 10,30 — \"eu e o Pai somos um\" (consubstancialidade divina)",
      "Hebreus 2,14 — \"participou igualmente do sangue e da carne\"",
      "Romanos 8,3 — \"em semelhança de carne de pecado\"",
    ],
  },
  {
    frase: "gerado de Maria Virgem, Mãe de Deus (Theotokos), segundo a humanidade",
    grego: "ek Marias tēs Parthenou tēs Theotokou kata tēn anthrōpotēta",
    significado:
      "Confirmação solene do título Theotokos, definido em Éfeso 431. A precisão \"segundo a " +
      "humanidade\" (kata tēn anthrōpotēta) evita o mal-entendido: Maria não gera a natureza divina, " +
      "mas gera segundo a humanidade aquele que É Deus. É a aplicação concreta da communicatio " +
      "idiomatum: os atributos de uma natureza são predicados da pessoa una.",
    contraQuem:
      "Contra Nestório, que preferia Christotokos (\"Mãe de Cristo\") e rejeitava Theotokos por " +
      "temer confusão entre divindade e humanidade em Maria.",
    baseBiblica: [
      "Lucas 1,43 — \"a mãe do meu Senhor\" (Isabel)",
      "Gálatas 4,4 — \"Deus enviou seu Filho, nascido de mulher\"",
      "Mateus 1,23 — \"chamarão o seu nome Emanuel: Deus conosco\"",
    ],
  },
  {
    frase: "reconhecido em duas naturezas",
    grego: "en dyo physesin gnōrizomenon",
    significado:
      "A frase mais controversa e mais decisiva da Definição. A preposição \"en\" (em) — em vez do " +
      "cirílico \"ek\" (a partir de) — afirma que as duas naturezas SUBSISTEM permanentemente em " +
      "Cristo mesmo após a união, e não que se fundem em uma única physis. O verbo gnōrizomenon " +
      "(\"reconhecido\", \"discernido\") indica um reconhecimento contemplativo pela fé.",
    contraQuem:
      "Contra Eutiques e o monofisismo radical, que admitiam \"duas naturezas antes da união, uma " +
      "só depois\". A Definição afirma que as duas naturezas permanecem PARA SEMPRE.",
    baseBiblica: [
      "Filipenses 2,6-8 — forma de Deus e forma de servo coexistem",
      "1 Timóteo 2,5 — \"um só mediador entre Deus e os homens, Cristo Jesus homem\"",
      "João 8,40 — \"eu, um homem que vos disse a verdade\"",
    ],
  },
  {
    frase: "sem confusão (asynchytōs)",
    grego: "asynchytōs",
    significado:
      "Primeiro dos quatro advérbios apofáticos. \"Sem confusão\" nega qualquer mistura ou fusão que " +
      "produzisse uma terceira realidade (tertium quid), nem divina nem humana. As duas naturezas " +
      "permanecem íntegras e distintas em suas propriedades essenciais.",
    contraQuem:
      "Contra Eutiques, cuja \"gota de mel no oceano\" implicava exatamente uma fusão em que a " +
      "humanidade se perdia na divindade.",
    baseBiblica: [
      "Lucas 22,42 — \"não a minha vontade, mas a tua\" (duas vontades distintas)",
      "Marcos 13,32 — \"nem o Filho\" sabe (limitação humana real)",
    ],
  },
  {
    frase: "sem mudança (atreptōs)",
    grego: "atreptōs",
    significado:
      "Segundo advérbio apofático. Nega qualquer transformação de uma natureza na outra: nem a " +
      "divindade se converte em humanidade (impossível, pois Deus é imutável), nem a humanidade se " +
      "transforma em divindade (o que a aniquilaria). Cada natureza permanece o que é.",
    contraQuem:
      "Contra Apolinário (que fazia o Verbo substituir o nous humano, transformando a antropologia " +
      "de Cristo) e contra Eutiques (que sugeria uma transformação da humanidade pela absorção divina).",
    baseBiblica: [
      "Malaquias 3,6 — \"eu, o Senhor, não mudo\"",
      "Tiago 1,17 — \"o Pai das luzes, no qual não há mudança\"",
      "Hebreus 13,8 — \"Jesus Cristo é o mesmo ontem, hoje e para sempre\"",
    ],
  },
  {
    frase: "sem divisão (adiairetōs)",
    grego: "adiairetōs",
    significado:
      "Terceiro advérbio apofático. Nega qualquer divisão substancial entre as duas naturezas: elas " +
      "não estão simplesmente justapostas nem existem separadamente em dois sujeitos. A união " +
      "hipostática é tão real que Cristo é um único ser concreto, não dois.",
    contraQuem:
      "Contra Nestório e os antioquenos radicais, que corriam o risco de dividir Cristo em dois " +
      "sujeitos moralmente conectados.",
    baseBiblica: [
      "João 3,13 — \"o Filho do Homem que está no céu\" (comunicação de idiomas)",
      "Atos 20,28 — \"a Igreja de Deus, que ele adquiriu com seu próprio sangue\"",
      "1 Coríntios 2,8 — \"crucificaram o Senhor da glória\"",
    ],
  },
  {
    frase: "sem separação (achōristōs)",
    grego: "achōristōs",
    significado:
      "Quarto advérbio apofático. Nega que as duas naturezas possam ser separadas em qualquer " +
      "momento — nem na paixão, nem na morte, nem depois. A união hipostática é permanente e " +
      "definitiva: começa na Encarnação e continua para toda a eternidade.",
    contraQuem:
      "Contra qualquer forma de nestorianismo que sugerisse que o Verbo se separou da humanidade na " +
      "morte, ou que a humanidade seria \"desativada\" em algum momento da economia salvífica.",
    baseBiblica: [
      "Romanos 8,35 — \"quem nos separará do amor de Cristo?\"",
      "Apocalipse 5,6 — o Cordeiro imolado permanece no trono para sempre",
      "Hebreus 7,25 — \"sempre vive para interceder por nós\"",
    ],
  },
  {
    frase: "a propriedade de cada natureza sendo preservada",
    grego: "sōzomenēs tēs idiotētos hekateras physeōs",
    significado:
      "Cláusula que garante a subsistência real e permanente das propriedades específicas (idiōmata) " +
      "de cada natureza: onipotência, onisciência, eternidade, imutabilidade pela divindade; " +
      "corporeidade, mortalidade (até a Páscoa), fome, cansaço, verdadeiro sofrimento pela humanidade. " +
      "Cada natureza \"opera o que lhe é próprio em comunhão com a outra\" (Tomo de Leão).",
    contraQuem:
      "Contra ambos os extremos: monofisitas radicais (que dissolvem as propriedades humanas na " +
      "divindade) e nestorianos (que separam as operações em dois sujeitos distintos).",
    baseBiblica: [
      "João 11,35 — \"Jesus chorou\" (propriedade humana)",
      "João 11,43 — \"Lázaro, vem para fora\" (propriedade divina)",
      "Mateus 8,24-26 — dorme na barca (humano) e acalma a tempestade (divino)",
    ],
  },
  {
    frase: "concorrendo em uma só pessoa e uma só hipóstase",
    grego: "eis hen prosōpon kai mian hypostasin syntrechousēs",
    significado:
      "Cláusula-síntese que estabelece a estrutura ontológica definitiva: as duas naturezas " +
      "\"concorrem\" (syntrechō, \"correm juntas\", \"convergem\") em UMA única pessoa (prosōpon) " +
      "e UMA única hipóstase (hypostasis). A grande novidade técnica de Calcedônia é a distinção " +
      "clara entre physis (natureza / essência) e hypostasis (subsistência concreta) — que os " +
      "capadócios haviam preparado para a Trindade e que agora é aplicada à cristologia.",
    contraQuem:
      "Contra Nestório (que usava prosōpon em sentido fraco) e contra qualquer confusão entre os " +
      "planos ontológicos. Estabelece a chamada \"única hipóstase composta\" (mia hypostasis synthetos).",
    baseBiblica: [
      "João 1,14 — \"o Verbo se fez carne\" (o mesmo sujeito)",
      "Hebreus 1,3 — \"resplendor da glória e figura de sua substância\"",
      "Colossenses 1,17 — \"nele todas as coisas subsistem\"",
    ],
  },
  {
    frase: "como os profetas desde o princípio... como o Símbolo dos Padres nos transmitiu",
    grego: "kathaper anōthen hoi prophētai... to tōn paterōn hēmin paradedōken symbolon",
    significado:
      "Cláusula de continuidade radical: a Definição não pretende ser inovação, mas explicitação da " +
      "fé profética, dominical e patrística. Reivindica três fontes de autoridade em cascata: (1) os " +
      "profetas do AT, (2) o próprio Cristo em sua pregação, (3) o Símbolo (Credo) dos Padres — ou " +
      "seja, Niceia-Constantinopla. A Definição se apresenta como intérprete, não como concorrente " +
      "do Credo.",
    contraQuem:
      "Contra a objeção de que Calcedônia estaria compondo \"nova fé\" em violação do cânon 7 de " +
      "Éfeso. A resposta é: não há nova fé, apenas nova precisão terminológica exigida pelas novas heresias.",
    baseBiblica: [
      "Lucas 24,27 — Cristo interpreta \"tudo o que a seu respeito havia nas Escrituras\"",
      "2 Pedro 1,20-21 — a profecia veio por inspiração do Espírito",
      "2 Tessalonicenses 2,15 — \"guardai as tradições que aprendestes\"",
    ],
  },
];

export const osQuatroAdverbios: {
  titulo: string;
  introducao: string;
  adverbios: {
    grego: string;
    transliteracao: string;
    traducao: string;
    contraQuem: string;
    explicacao: string;
  }[];
} = {
  titulo: "Os Quatro Advérbios Apofáticos — a \"Cerca de Quatro Lados\" da Ortodoxia Cristológica",
  introducao:
    "O coração técnico da Definição são quatro advérbios gregos terminados em -ōs, dispostos em " +
    "quiasmo perfeito: dois primeiros (asynchytōs, atreptōs) blindam a cristologia contra o monofisismo, " +
    "afirmando a distinção real das naturezas; dois últimos (adiairetōs, achōristōs) blindam contra o " +
    "nestorianismo, afirmando a unidade real do sujeito. Juntos, formam o que Karl Rahner chamou de " +
    "\"cerca de quatro lados\" (Vier-Adverbien-Zaun) que delimita o espaço da ortodoxia sem pretender " +
    "explicar positivamente o mistério. Toda a cristologia posterior — do Damasceno a Tomás de Aquino, " +
    "de Chalcedonschluss a Karl Barth — se move dentro desses quatro limites.",
  adverbios: [
    {
      grego: "ἀσυγχύτως",
      transliteracao: "asynchytōs",
      traducao: "sem confusão / sem mistura / inconfuse",
      contraQuem: "MONOFISISMO (Eutiques)",
      explicacao:
        "As duas naturezas não se misturam para produzir uma terceira realidade que não seria nem " +
        "plenamente divina nem plenamente humana. Refuta a metáfora eutiquiana da \"gota de mel no " +
        "oceano\": a humanidade não é diluída na divindade. Cada natureza mantém suas propriedades " +
        "essenciais integralmente.",
    },
    {
      grego: "ἀτρέπτως",
      transliteracao: "atreptōs",
      traducao: "sem mudança / sem alteração / immutabiliter",
      contraQuem: "MONOFISISMO e APOLINARISMO",
      explicacao:
        "Nenhuma das duas naturezas se transforma na outra pela união: a divindade não se converte em " +
        "humanidade (o que seria impossível, pois Deus é imutável), nem a humanidade se transforma em " +
        "divindade (o que a destruiria como humanidade). O Verbo assume a humanidade sem alterá-la nem " +
        "alterar-se.",
    },
    {
      grego: "ἀδιαιρέτως",
      transliteracao: "adiairetōs",
      traducao: "sem divisão / indivisivelmente / indivise",
      contraQuem: "NESTORIANISMO",
      explicacao:
        "As duas naturezas não estão divididas em dois seres distintos ou dois sujeitos ontológicos. " +
        "Cristo é um único ser concreto (uma hipóstase), não uma soma de dois. Refuta a linguagem " +
        "nestoriana de \"aquele que assume\" e \"aquele que é assumido\" como se fossem entidades " +
        "separadas apenas moralmente unidas.",
    },
    {
      grego: "ἀχωρίστως",
      transliteracao: "achōristōs",
      traducao: "sem separação / inseparavelmente / inseparabiliter",
      contraQuem: "NESTORIANISMO",
      explicacao:
        "As duas naturezas jamais se separam em nenhum momento: nem no ventre de Maria, nem na cruz, " +
        "nem no sepulcro, nem na eternidade escatológica. A união hipostática é permanente e " +
        "irrevogável. Refuta qualquer sugestão de que o Verbo tenha \"abandonado\" a humanidade em " +
        "algum momento da economia salvífica.",
    },
  ],
};

export const fontesDaDefinicao: {
  titulo: string;
  introducao: string;
  fontes: { nome: string; contribuicao: string }[];
} = {
  titulo: "As Cinco Fontes da Definição de Calcedônia",
  introducao:
    "A Definição não foi composta ex nihilo: é uma síntese cuidadosamente elaborada de cinco textos " +
    "fundadores, cada um dos quais foi lido e aclamado formalmente pelo concílio antes da redação " +
    "final. Cada frase da Definição pode ser rastreada a uma dessas fontes, o que legitima sua " +
    "reivindicação de fidelidade à tradição.",
  fontes: [
    {
      nome: "Credo de Niceia (325)",
      contribuicao:
        "Fornece a base absoluta: homoousios tō Patri (consubstancial ao Pai), gerado não criado, " +
        "\"encarnou-se e se fez homem\". A Definição repete a estrutura niceniana e a expande. Foi lido " +
        "e aclamado na Sessão 2 como fundamento inegociável.",
    },
    {
      nome: "Credo de Constantinopla (381)",
      contribuicao:
        "Fornece o Credo litúrgico que Calcedônia declara ser o único símbolo batismal válido. As " +
        "cláusulas sobre \"pelo Espírito Santo, da Virgem Maria\" e sobre o Espírito Santo Senhor são " +
        "confirmadas. Foi lido na Sessão 2 imediatamente após Niceia.",
    },
    {
      nome: "Segunda Carta de Cirilo a Nestório (430)",
      contribuicao:
        "Fornece o vocabulário técnico grego da unidade hipostática: henōsis kath' hypostasin, um só " +
        "Cristo, Theotokos, comunicação de idiomas. É a chamada \"carta dogmática\" de Cirilo, aprovada " +
        "por Éfeso 431. Contribuiu com o eixo \"unidade\" da Definição.",
    },
    {
      nome: "Fórmula de União de 433 (Cirilo–João de Antioquia)",
      contribuicao:
        "Compromisso pós-Éfeso que introduziu no vocabulário cirílico a expressão \"duas naturezas\", " +
        "aceita por Cirilo em carta. É o precedente decisivo que legitima a linguagem \"en dyo physesin\" " +
        "contra a acusação miafisita de nestorianismo. Redigida por Teodoreto de Ciro, aceita por Cirilo.",
    },
    {
      nome: "Tomo de Leão a Flaviano (Epistula 28, junho de 449)",
      contribuicao:
        "Fornece a arquitetura latina da distinção-em-unidade: \"agit utraque forma cum alterius " +
        "communione quod proprium est\" (cada forma opera em comunhão com a outra o que lhe é próprio). " +
        "Fornece também o modelo trinitário-cristológico e a linguagem persona / natura, que os Padres " +
        "traduziram para prosōpon / physis. Foi o texto lido na Sessão 2 que provocou a aclamação " +
        "\"Pedro falou por Leão!\".",
    },
  ],
};

export const problemaEkVsEn: {
  titulo: string;
  introducao: string;
  ek: string;
  en: string;
  conclusao: string;
} = {
  titulo: "\"Ek dyo physeon\" vs \"En dyo physesin\" — a Preposição que Dividiu a Cristandade",
  introducao:
    "Um dos episódios mais reveladores de Calcedônia foi a disputa sobre uma única letra: a preposição " +
    "grega usada para descrever a relação entre Cristo e suas duas naturezas. O primeiro rascunho da " +
    "Definição, apresentado na Sessão 4, dizia \"ek dyo physeon\" (a partir de duas naturezas). Os " +
    "legados papais e os antioquenos protestaram violentamente, ameaçando abandonar o concílio. Uma " +
    "nova comissão foi formada e, sob pressão imperial, mudou a preposição para \"en dyo physesin\" " +
    "(em duas naturezas). Essa mudança aparentemente mínima determinou o destino de milhões de cristãos.",
  ek:
    "\"EK DYO PHYSEŌN\" (ἐκ δύο φύσεων) — a partir de duas naturezas. Esta era a fórmula cirílica " +
    "clássica, também usada por Dioscoro. Descreve Cristo como resultante da união de duas naturezas " +
    "que, ANTES da união, eram duas, mas que na união produziram uma única realidade. É gramaticalmente " +
    "compatível com o monofisismo, porque pode ser lida como: \"Cristo veio de duas naturezas, mas " +
    "agora é uma só\". Era a fórmula preferida por Eutiques (\"duas antes, uma depois\") e pelos " +
    "miafisitas moderados. Preserva a linguagem cirílica estrita, mas deixa espaço para a absorção da " +
    "humanidade.",
  en:
    "\"EN DYO PHYSESIN\" (ἐν δύο φύσεσιν) — em duas naturezas. Fórmula adotada pela Definição final. " +
    "Descreve Cristo como subsistindo PERMANENTEMENTE em duas naturezas mesmo após a união. As duas " +
    "naturezas não se fundem, não desaparecem, não são reduzidas: coexistem para sempre na única " +
    "hipóstase do Verbo. É gramaticalmente incompatível com qualquer forma de monofisismo. Fórmula " +
    "preferida pelos antioquenos, pelo Tomo de Leão e pela ortodoxia calcedoniana em geral.",
  conclusao:
    "A troca de \"ek\" por \"en\" — apenas duas letras em grego — foi o divisor definitivo entre " +
    "calcedonianos e não-calcedonianos. Para os miafisitas, essa mudança traiu Cirilo e reintroduziu " +
    "furtivamente o nestorianismo; para os calcedonianos, foi a única forma de blindar a fé contra o " +
    "eutiquianismo. O cisma resultante persiste até hoje: Coptas, Sírios Ortodoxos, Armênios, Etíopes " +
    "e Malankaras usam \"ek\" ou variantes miafisitas equivalentes; Católicos, Ortodoxos Bizantinos, " +
    "Anglicanos e Protestantes usam \"en\" e a fórmula calcedoniana. Diálogos ecumênicos contemporâneos " +
    "(especialmente as Declarações Cristológicas Comuns de 1971, 1984, 1990 e 1996) reconheceram que a " +
    "diferença é substancialmente terminológica e não doutrinal — mas 15 séculos de separação " +
    "eclesial mostram como uma única preposição pode moldar a história.",
};