// ═══════════════════════════════════════════════════════════════════════════
// DOUTRINA CRISTOLÓGICA DE CALCEDÔNIA — SÍNTESE, GLOSSÁRIO E ARQUITETURA
// ═══════════════════════════════════════════════════════════════════════════
// Este arquivo apresenta a estrutura doutrinal completa do calcedonismo:
// a síntese entre Alexandria e Antioquia, o vocabulário técnico grego,
// a doutrina da união hipostática e a comparação com os concílios anteriores.
// ═══════════════════════════════════════════════════════════════════════════

export const sinteseCalcedoniana: {
  titulo: string;
  introducao: string;
  pilares: { conceito: string; explicacao: string }[];
} = {
  titulo: "A Síntese Calcedoniana: Alexandria + Antioquia em uma Só Fórmula",
  introducao:
    "A grandeza intelectual de Calcedônia consiste em ter realizado, pela primeira vez de modo " +
    "conceitualmente rigoroso, a síntese das duas grandes escolas cristológicas do Oriente antigo: " +
    "a alexandrina (que privilegiava a unidade do sujeito, a comunicação de idiomas, a Theotokos, " +
    "o mistério indivisível do Verbo encarnado) e a antioquena (que privilegiava a distinção real " +
    "das naturezas, a integridade da humanidade, a realidade histórica de Jesus, a análise " +
    "diferenciada das ações divinas e humanas). Nem uma nem outra em separado bastava: a primeira " +
    "sozinha desliza para o monofisismo; a segunda sozinha desliza para o nestorianismo. Calcedônia " +
    "articula os cinco pilares abaixo, sustentando ambas as intuições sem sacrificar nenhuma.",
  pilares: [
    {
      conceito: "1. Um único sujeito (contribuição alexandrina)",
      explicacao:
        "Cristo é UM só e o mesmo Filho — a fórmula \"hena kai ton auton\" se repete cinco vezes na " +
        "Definição. Não há em Cristo dois sujeitos morais, dois filhos, duas pessoas. O sujeito " +
        "único é o próprio Verbo eterno, que assume a humanidade em sua hipóstase. Esta é a intuição " +
        "cirílica preservada: a unidade absoluta do agente cristológico.",
    },
    {
      conceito: "2. Duas naturezas completas e permanentes (contribuição antioquena)",
      explicacao:
        "Cada uma das duas naturezas é preservada em sua integridade e em suas propriedades " +
        "específicas, mesmo após a união e para sempre. A divindade não absorve a humanidade; a " +
        "humanidade não é diluída na divindade. Cada natureza \"opera o que lhe é próprio\" (Tomo " +
        "de Leão). Esta é a intuição antioquena preservada: a realidade permanente da humanidade e " +
        "da divindade em Cristo.",
    },
    {
      conceito: "3. A distinção physis / hypostasis (contribuição capadócia aplicada à cristologia)",
      explicacao:
        "A grande inovação técnica de Calcedônia é distinguir claramente physis (natureza / essência " +
        "/ conjunto de propriedades) de hypostasis (subsistência concreta / sujeito ontológico). Os " +
        "Padres Capadócios haviam feito essa distinção para a Trindade (uma ousia, três hipóstases); " +
        "Calcedônia a aplica invertida à cristologia (uma hipóstase, duas naturezas). Essa distinção " +
        "conceitual resolve o falso dilema entre unidade e distinção: pode-se afirmar simultaneamente " +
        "unidade hipostática e distinção natural sem contradição.",
    },
    {
      conceito: "4. A comunicação de idiomas (síntese operativa)",
      explicacao:
        "Os atributos de cada natureza podem ser predicados da única pessoa (comunicatio idiomatum). " +
        "Por isso pode-se dizer com verdade \"o Filho de Deus foi crucificado\" (embora a divindade " +
        "não sofra em si mesma) e \"o Filho do Homem desceu do céu\" (embora a humanidade tenha " +
        "começado em Maria). O sujeito comum é a hipóstase única do Verbo. Este é o princípio " +
        "hermenêutico que permite ler coerentemente toda a Escritura cristológica.",
    },
    {
      conceito: "5. Os quatro advérbios apofáticos (garantia negativa)",
      explicacao:
        "Asynchytōs (sem confusão) e atreptōs (sem mudança) protegem a distinção contra o " +
        "monofisismo; adiairetōs (sem divisão) e achōristōs (sem separação) protegem a unidade " +
        "contra o nestorianismo. Os quatro juntos formam uma \"cerca\" que delimita a ortodoxia sem " +
        "pretender explicar positivamente o mistério — abordagem apofática coerente com a tradição " +
        "grega da teologia negativa.",
    },
  ],
};

export interface TermoGlossario {
  termo: string;
  grego: string;
  transcricao: string;
  definicao: string;
  importanciaCristologica: string;
}

export const glossarioGrego: TermoGlossario[] = [
  {
    termo: "Physis",
    grego: "φύσις",
    transcricao: "phýsis",
    definicao:
      "Natureza; conjunto das propriedades essenciais que definem o que uma coisa é. Termo carregado " +
      "de ambiguidade histórica: em Aristóteles significa essência; em Cirilo pode significar " +
      "essência OU hipóstase concreta, dependendo do contexto.",
    importanciaCristologica:
      "Termo-chave da controvérsia. Cirilo usava \"mia physis\" no sentido de hipóstase única; " +
      "Eutiques usava-o em sentido essencial, negando a subsistência da humanidade após a união. " +
      "Calcedônia fixou o sentido essencial (natureza / ousia) e reservou hypostasis para a " +
      "subsistência concreta — resolvendo a ambiguidade que alimentava o conflito.",
  },
  {
    termo: "Hypostasis",
    grego: "ὑπόστασις",
    transcricao: "hypóstasis",
    definicao:
      "Subsistência concreta, sujeito ontológico individual e real. Literalmente \"o que está por " +
      "baixo\" (hypo + stasis), a base concreta de uma existência particular. Traduzido em latim " +
      "por subsistentia ou (menos exatamente) persona.",
    importanciaCristologica:
      "Em Cristo há UMA única hipóstase — a do Verbo eterno — que subsiste em duas naturezas. Essa " +
      "hipóstase é o Filho pré-existente que assume a humanidade sem multiplicar-se. A doutrina da " +
      "\"hipóstase composta\" (mia hypostasis synthetos) será desenvolvida por Leôncio de Bizâncio " +
      "e formalizada em Constantinopla II (553).",
  },
  {
    termo: "Prosopon",
    grego: "πρόσωπον",
    transcricao: "prósōpon",
    definicao:
      "Literalmente \"face\", \"rosto\", também \"máscara teatral\" ou \"papel\". Em sentido " +
      "filosófico e jurídico: pessoa, sujeito individual reconhecível. Traduzido em latim por " +
      "persona.",
    importanciaCristologica:
      "Calcedônia usa prosopon como sinônimo de hypostasis (\"em uma pessoa e uma hipóstase\"). Isso " +
      "foi decisivo porque Nestório usava prosopon em sentido fraco (união apenas no plano da " +
      "manifestação exterior), enquanto Calcedônia lhe dá força ontológica plena, equiparando-o à " +
      "hipóstase.",
  },
  {
    termo: "Ousia",
    grego: "οὐσία",
    transcricao: "ousía",
    definicao:
      "Essência, substância; aquilo que uma coisa É em si mesma. Termo aristotélico central, " +
      "traduzido em latim por substantia ou essentia. Base do adjetivo homoousios (consubstancial) " +
      "definido em Niceia 325.",
    importanciaCristologica:
      "Em Cristo há DUAS ousiai: a divina (consubstancial ao Pai) e a humana (consubstancial a nós). " +
      "Ousia em Calcedônia funciona como sinônimo prático de physis. A dupla consubstancialidade " +
      "(homoousios tō Patri kata theotēta, homoousios hēmin kata anthrōpotēta) é o alicerce da " +
      "estrutura calcedoniana.",
  },
  {
    termo: "Theotokos",
    grego: "Θεοτόκος",
    transcricao: "Theotókos",
    definicao:
      "Literalmente \"a que dá à luz Deus\", \"Mãe de Deus\". Título mariano definido em Éfeso 431 " +
      "e reconfirmado em Calcedônia 451. NÃO significa que Maria gera a natureza divina (o que seria " +
      "absurdo), mas que gera segundo a humanidade AQUELE que É Deus.",
    importanciaCristologica:
      "Título-teste da ortodoxia cristológica. Sua aceitação implica a unidade do sujeito (uma só " +
      "pessoa) e a comunicação de idiomas. Sua rejeição (Nestório: Christotokos) implica a " +
      "duplicação de sujeitos. Calcedônia inscreveu Theotokos na Definição como \"gerado de Maria " +
      "Virgem Theotokos segundo a humanidade\".",
  },
  {
    termo: "Anthropotokos",
    grego: "ἀνθρωποτόκος",
    transcricao: "anthrōpotókos",
    definicao:
      "Literalmente \"a que dá à luz um homem\", \"Mãe do homem\". Título proposto por alguns " +
      "antioquenos radicais como alternativa a Theotokos.",
    importanciaCristologica:
      "Rejeitado como insuficiente porque restringe Maria à geração da humanidade isolada, " +
      "sugerindo que aquele que ela gera não é ontologicamente o Verbo eterno. Foi condenado " +
      "implicitamente já em Éfeso 431 e explicitamente no anátema 1 de Cirilo.",
  },
  {
    termo: "Christotokos",
    grego: "Χριστοτόκος",
    transcricao: "Christotókos",
    definicao:
      "Literalmente \"a que dá à luz Cristo\", \"Mãe de Cristo\". Título de compromisso proposto " +
      "por Nestório em substituição a Theotokos.",
    importanciaCristologica:
      "Rejeitado em Éfeso e em Calcedônia como ambíguo: pode ser lido em sentido ortodoxo (se " +
      "\"Cristo\" designa o único sujeito divino-humano) ou heterodoxo (se \"Cristo\" designa " +
      "apenas o homem Jesus unido moralmente ao Verbo). A ortodoxia exige Theotokos como confissão " +
      "inequívoca da unidade hipostática. A Igreja do Oriente (\"nestoriana\") mantém Christotokos " +
      "até hoje.",
  },
  {
    termo: "Henōsis",
    grego: "ἕνωσις",
    transcricao: "hénōsis",
    definicao:
      "União; ato ou estado de tornar-se um. Termo genérico que pode significar união substancial, " +
      "moral, voluntária ou ontológica, dependendo da qualificação.",
    importanciaCristologica:
      "A qualificação da henōsis é decisiva. Nestório admitia uma henōsis kata eudokian (união " +
      "segundo o beneplácito, moral) ou kata schesin (relacional). Cirilo e Calcedônia exigem uma " +
      "henōsis kath' hypostasin (união hipostática, ontológica). A palavra sozinha é neutra; sua " +
      "qualificação define a ortodoxia.",
  },
  {
    termo: "Henōsis hypostatikē",
    grego: "ἕνωσις ὑποστατική",
    transcricao: "hénōsis hypostatikḗ",
    definicao:
      "União hipostática. União realizada no plano ontológico da hipóstase, e não apenas no plano " +
      "moral, voluntário ou relacional. As duas naturezas de Cristo estão unidas em uma única " +
      "hipóstase concreta — a do Verbo eterno.",
    importanciaCristologica:
      "Conceito-síntese da cristologia calcedoniana. Foi formulado por Cirilo (2ª Carta a Nestório, " +
      "430) e adotado por Calcedônia. Rejeita simultaneamente a união meramente moral (Nestório) e " +
      "a fusão substancial (Eutiques). É a base metafísica que permite dizer \"um só Cristo em duas " +
      "naturezas\" sem contradição.",
  },
  {
    termo: "Communicatio idiomatum",
    grego: "ἀντίδοσις τῶν ἰδιωμάτων",
    transcricao: "antídosis tōn idiōmátōn",
    definicao:
      "Comunicação (intercâmbio) das propriedades. Princípio segundo o qual os atributos de cada " +
      "uma das duas naturezas podem ser predicados da única pessoa de Cristo. Base da linguagem " +
      "paradoxal da fé cristã.",
    importanciaCristologica:
      "Fundamenta expressões como \"o Filho de Deus foi crucificado\" (1Cor 2,8), \"o Senhor da " +
      "glória sofreu\", \"Deus adquiriu a Igreja com seu próprio sangue\" (At 20,28). Em cada " +
      "predicação, o sujeito lógico é a hipóstase única do Verbo; os predicados provêm de uma ou " +
      "outra natureza. Nega-la é dividir Cristo (nestorianismo); confundi-la é misturá-lo (monofisismo).",
  },
  {
    termo: "Mia physis vs Dyo physeis",
    grego: "μία φύσις / δύο φύσεις",
    transcricao: "mía phýsis / dýo phýseis",
    definicao:
      "\"Uma natureza\" (fórmula cirílica/miafisita) versus \"duas naturezas\" (fórmula calcedoniana " +
      "e antioquena). A tensão entre essas duas fórmulas é o eixo da controvérsia cristológica do " +
      "século V.",
    importanciaCristologica:
      "Cirilo usou \"mia physis\" tomando o termo de textos pseudo-atanasianos (na verdade " +
      "apolinaristas), mas dando-lhe sentido próximo a \"hipóstase única\". Calcedônia preferiu " +
      "\"dyo physeis en mia hypostasei\" para excluir a leitura eutiquiana. Os miafisitas moderados " +
      "consideram que \"mia physis sesarkōmenē\" (uma natureza encarnada) já continha a distinção " +
      "sem precisar reformular — daí o cisma calcedoniano.",
  },
  {
    termo: "Sesarkōmenē",
    grego: "σεσαρκωμένη",
    transcricao: "sesarkōménē",
    definicao:
      "\"Encarnada\", particípio perfeito passivo feminino de sarkoō (fazer-se carne). Qualifica o " +
      "substantivo physis na fórmula cirílica \"mia physis tou Theou Logou sesarkōmenē\" (uma " +
      "natureza encarnada do Verbo de Deus).",
    importanciaCristologica:
      "Palavra-chave da tradição miafisita moderada. \"Encarnada\" implica que a natureza única de " +
      "que se fala não é a divindade pura, mas o Verbo já assumindo a carne — isto é, o Verbo " +
      "encarnado como sujeito único. Corretamente entendida, a fórmula é ortodoxa (Cirilo a usou " +
      "sem heresia). Mal entendida, desliza para o eutiquianismo.",
  },
];

export const cristologia: {
  titulo: string;
  introducao: string;
  uniaoHipostatica: string;
  communicatioIdiomatum: string;
  realidadeHumanidade: string;
  realidadeDivindade: string;
  naturezaComposta: string;
} = {
  titulo: "A Cristologia de Calcedônia em Cinco Eixos",
  introducao:
    "A doutrina cristológica calcedoniana pode ser exposta em torno de cinco eixos ontológicos " +
    "interligados. Nenhum deles é isolável dos demais; juntos formam a arquitetura conceitual da " +
    "fé cristológica ortodoxa que se tornaria comum a católicos, ortodoxos bizantinos, anglicanos " +
    "e à maioria dos protestantes clássicos.",
  uniaoHipostatica:
    "UNIÃO HIPOSTÁTICA (henōsis kath' hypostasin). As duas naturezas de Cristo estão unidas no " +
    "plano ontológico mais profundo possível: o plano da hipóstase. Não se trata de união moral " +
    "(concordância de vontades), nem meramente relacional (união de propósito), nem substancial " +
    "no sentido de fusão (que produziria uma terceira realidade). A união hipostática significa " +
    "que existe UMA SÓ subsistência concreta — a do Verbo eterno — que passa a subsistir simultânea " +
    "e permanentemente em duas naturezas. O Verbo não se une a uma pessoa humana pré-existente " +
    "(o que seria adopcionismo ou nestorianismo); antes, ao assumir a natureza humana, faz com que " +
    "essa natureza subsista NELE, na hipóstase divina do Filho. Consequência: a humanidade de " +
    "Cristo é anhypostatos (não tem hipóstase própria autônoma) mas enhypostatos (subsiste na " +
    "hipóstase do Verbo) — distinção formulada por Leôncio de Bizâncio no século VI para explicitar " +
    "a doutrina calcedoniana.",
  communicatioIdiomatum:
    "COMUNICAÇÃO DE IDIOMAS (antidosis tōn idiōmatōn / communicatio idiomatum). Como a hipóstase é " +
    "una, todos os atributos de ambas as naturezas podem ser predicados dessa única pessoa. Podemos " +
    "e devemos dizer com verdade: \"Deus nasceu de Maria\", \"o Verbo eterno chorou por Lázaro\", " +
    "\"o Filho de Deus morreu na cruz\", \"o Senhor da glória foi crucificado\". Simetricamente: " +
    "\"o Filho do Homem desceu do céu\", \"aquele que foi crucificado criou o mundo\". Em cada uma " +
    "dessas afirmações, o SUJEITO lógico é a hipóstase única do Verbo, ao qual pertencem tanto os " +
    "predicados divinos quanto os humanos por causa da união. Regras técnicas: (1) os predicados " +
    "podem ser trocados no plano da pessoa (\"Deus sofreu\"), NÃO no plano das naturezas (\"a " +
    "divindade sofreu\" seria falso — em quanto divindade, é impassível); (2) a comunicação é real " +
    "(não apenas verbal ou nominal), porque a hipóstase é realmente única.",
  realidadeHumanidade:
    "REALIDADE INTEGRAL DA HUMANIDADE. Contra Eutiques, Apolinário e todo docetismo, Calcedônia " +
    "afirma que Cristo tomou uma humanidade completa e igual à nossa: corpo verdadeiro (não " +
    "aparente, não etéreo, não de qualidade especial), alma racional (nous humano, contra " +
    "Apolinário), vontade humana (implícita, definida em 681), operações humanas próprias, afetos " +
    "reais (fome, sede, cansaço, tristeza, medo, alegria), sofrimento físico e psíquico verdadeiro, " +
    "morte real. É consubstancial a nós (homoousios hēmin) em tudo, exceto no pecado (Hb 4,15). A " +
    "razão teológica é soteriológica: \"o que não é assumido não é curado\" (Gregório de Nazianzo, " +
    "Ep. 101). Se qualquer parte da natureza humana não fosse assumida, essa parte permaneceria " +
    "não redimida. Como Cristo veio salvar o homem inteiro, teve de assumir o homem inteiro.",
  realidadeDivindade:
    "REALIDADE PERMANENTE DA DIVINDADE. Simultaneamente, a natureza divina de Cristo permanece " +
    "integralmente o que era desde a eternidade: consubstancial ao Pai (Niceia 325), coeterna, " +
    "onipotente, onisciente, imutável, criadora, impassível em si mesma. A Encarnação não é " +
    "diminuição da divindade nem sua transformação em algo diferente, mas ACRÉSCIMO da humanidade " +
    "assumida. A kenosis paulina (Fp 2,6-7) não é entendida como esvaziamento ontológico da " +
    "divindade, mas como ocultamento voluntário da glória e como assunção da forma de servo. O " +
    "Verbo continua sustentando o universo mesmo enquanto está no ventre de Maria e mesmo enquanto " +
    "está no sepulcro — princípio que a teologia patrística chamou de extra calvinisticum (embora " +
    "muito anterior a Calvino).",
  naturezaComposta:
    "HIPÓSTASE COMPOSTA (mia hypostasis synthetos). Consequência ontológica da união hipostática, " +
    "desenvolvida na cristologia pós-calcedoniana (Leôncio de Bizâncio, João Damasceno, Constantinopla " +
    "II em 553): a única hipóstase de Cristo é uma hipóstase composta, no sentido de que abriga em " +
    "si duas naturezas completas. NÃO se trata de uma nova hipóstase criada pela união (isso seria " +
    "eutiquianismo); trata-se da mesma hipóstase eterna do Verbo, que se torna composta ao assumir " +
    "a humanidade. Essa doutrina permite afirmar que a hipóstase permanece a mesma antes e depois " +
    "da Encarnação (identidade pessoal do Filho eterno) enquanto sua estrutura ontológica se " +
    "enriquece com a natureza humana assumida.",
};

export const comparacaoConcilios: {
  topico: string;
  niceia325: string;
  constantinopla381: string;
  efeso431: string;
  calcedonia451: string;
}[] = [
  {
    topico: "Natureza de Cristo",
    niceia325:
      "Verdadeiro Deus de verdadeiro Deus, gerado não criado, homoousios tō Patri (consubstancial " +
      "ao Pai)",
    constantinopla381:
      "Confirma Niceia; reforça a plenitude da humanidade contra Apolinário (\"encarnou-se do " +
      "Espírito Santo e da Virgem Maria e SE FEZ HOMEM\")",
    efeso431:
      "Cristo é UM só sujeito; união hipostática (henōsis kath' hypostasin); anatematiza Nestório " +
      "por dividir Cristo em dois sujeitos",
    calcedonia451:
      "Um só Cristo, Filho, Senhor, Unigênito, em DUAS naturezas (divina e humana) unidas em uma " +
      "única hipóstase, sem confusão, sem mudança, sem divisão, sem separação",
  },
  {
    topico: "Divindade do Filho",
    niceia325:
      "Definida solenemente: Filho consubstancial ao Pai, coeterno, gerado da substância do Pai. " +
      "Condenação de Ário",
    constantinopla381:
      "Reafirmada sem alterações",
    efeso431:
      "Pressuposta como fundamento indiscutível; não é objeto de debate próprio",
    calcedonia451:
      "Reafirmada integralmente (\"homoousios tō Patri kata tēn theotēta\"); base da dupla " +
      "consubstancialidade calcedoniana",
  },
  {
    topico: "Divindade do Espírito",
    niceia325:
      "Apenas mencionado (\"e no Espírito Santo\"), sem elaboração doutrinal",
    constantinopla381:
      "DEFINIDA: Senhor e Vivificador, que procede do Pai, com o Pai e o Filho é conjuntamente " +
      "adorado e glorificado, falou pelos profetas. Condenação dos pneumatomacos",
    efeso431:
      "Não é objeto do concílio",
    calcedonia451:
      "Confirma o Credo de Constantinopla 381 como único símbolo batismal válido, incluindo toda a " +
      "sua pneumatologia",
  },
  {
    topico: "Título de Maria",
    niceia325:
      "Não abordado explicitamente; \"nascido da Virgem Maria\" implícito no símbolo",
    constantinopla381:
      "\"Encarnou-se do Espírito Santo e da Virgem Maria\"; sem título mariano específico",
    efeso431:
      "DEFINIDO: THEOTOKOS (Mãe de Deus). Rejeição explícita de Christotokos e Anthropotokos como " +
      "insuficientes",
    calcedonia451:
      "Confirma Theotokos na Definição: \"gerado de Maria Virgem Theotokos segundo a humanidade\"",
  },
  {
    topico: "União das naturezas",
    niceia325:
      "Não elaborada tecnicamente; apenas \"encarnou-se\" (sarkōthenta)",
    constantinopla381:
      "Idem; sem vocabulário técnico de união",
    efeso431:
      "União HIPOSTÁTICA (henōsis kath' hypostasin); rejeição da união meramente moral ou relacional " +
      "de Nestório",
    calcedonia451:
      "União hipostática detalhada: duas naturezas convergindo em uma pessoa e uma hipóstase, com " +
      "os quatro advérbios apofáticos delimitando a ortodoxia",
  },
  {
    topico: "Número de naturezas em Cristo",
    niceia325:
      "Questão não formulada nesses termos",
    constantinopla381:
      "Implicitamente duas (contra Apolinário), sem terminologia técnica",
    efeso431:
      "Ambíguo: Cirilo usa \"mia physis sesarkōmenē\"; a Fórmula de União de 433 aceita \"duas " +
      "naturezas\"",
    calcedonia451:
      "DEFINIDO EXPLICITAMENTE: DUAS naturezas (en dyo physesin) permanentes após a união, cada " +
      "uma preservando suas propriedades",
  },
  {
    topico: "Vontades de Cristo",
    niceia325: "Não abordado",
    constantinopla381: "Não abordado",
    efeso431: "Não abordado",
    calcedonia451:
      "NÃO DEFINIDO. Implícito na dualidade das naturezas, mas a definição formal só virá em " +
      "Constantinopla III (680–681) contra o monotelismo: duas vontades naturais e duas operações",
  },
  {
    topico: "Relação com a humanidade comum",
    niceia325:
      "Feito homem \"por nós homens e por nossa salvação\"; não elaborado",
    constantinopla381:
      "\"Se fez homem\" (enanthrōpēsanta); ênfase antimonárquica da humanidade completa",
    efeso431:
      "Cirilo insiste que quem sofreu foi o próprio Verbo (segundo a carne), garantindo a realidade " +
      "salvífica da paixão",
    calcedonia451:
      "HOMOOUSIOS HĒMIN (consubstancial a NÓS) segundo a humanidade — em tudo semelhante a nós, " +
      "exceto no pecado (Hb 4,15). Máxima explicitação da solidariedade ontológica com o gênero " +
      "humano",
  },
];

export const naoDefinidos: {
  titulo: string;
  introducao: string;
  itens: { topico: string; descricao: string; porQueNao: string }[];
} = {
  titulo: "O Que Calcedônia Deliberadamente NÃO Definiu",
  introducao:
    "A economia dogmática de Calcedônia foi cirúrgica: definiu apenas o que era necessário para " +
    "responder à crise concreta (eutiquianismo e Latrocínio) sem antecipar debates ainda não " +
    "maduros. Vários temas cristológicos, marianos e pneumatológicos permaneceram em aberto, " +
    "explodindo em controvérsias posteriores. Essa parcimônia é ela mesma uma virtude teológica: " +
    "definir tudo prematuramente é dogmatismo; definir apenas o necessário é sabedoria eclesial.",
  itens: [
    {
      topico: "As duas vontades de Cristo (duo thelēmata)",
      descricao:
        "Se Cristo tem duas naturezas completas, cada uma deve ter sua vontade própria: uma vontade " +
        "divina (comum às três Pessoas trinitárias) e uma vontade humana (própria da natureza " +
        "assumida). Essa dualidade é logicamente implicada por Calcedônia, mas não formalizada.",
      porQueNao:
        "A questão só se tornaria explícita no século VII, com o monotelismo bizantino patrocinado " +
        "por Heráclio e Sérgio de Constantinopla como fórmula de compromisso com os miafisitas. Foi " +
        "definida no III Concílio de Constantinopla (680–681): duas vontades naturais em Cristo, " +
        "sem oposição, a vontade humana submissa e conforme à vontade divina.",
    },
    {
      topico: "As duas operações / energias (duai energeiai)",
      descricao:
        "Correlato ontológico das duas vontades: cada natureza tem sua operação própria (energeia). " +
        "O Tomo de Leão já dizia \"agit utraque forma cum alterius communione\", mas Calcedônia não " +
        "formalizou explicitamente.",
      porQueNao:
        "Definido em Constantinopla III (681) junto com as duas vontades. O monoenergismo (uma só " +
        "operação teândrica) foi rejeitado; afirmaram-se duas operações naturais que agem sempre " +
        "em concerto pela unidade da hipóstase.",
    },
    {
      topico: "Mariologia para além de Theotokos",
      descricao:
        "Calcedônia confessa Maria como Theotokos e Virgem, mas não trata de outros aspectos: " +
        "virgindade perpétua (ante partum, in partu, post partum), imaculada conceição, assunção " +
        "corporal, mediação universal, cooperação na redenção.",
      porQueNao:
        "A virgindade perpétua já era doutrina pacífica (Constantinopla II em 553 usará \"aeiparthenos\"). " +
        "A festa da Dormição / Assunção se generaliza no século VI. A Imaculada Conceição será " +
        "debatida na escolástica e definida apenas em 1854 (Ineffabilis Deus, Pio IX). A Assunção " +
        "corporal em 1950 (Munificentissimus Deus, Pio XII). Todas na Igreja Católica; posições " +
        "variadas nas demais tradições.",
    },
    {
      topico: "Incorruptibilidade e paixões do corpo de Cristo",
      descricao:
        "O corpo de Cristo, antes da ressurreição, era corruptível ou incorruptível? Sentia " +
        "verdadeiramente fome, sede, dor, ou apenas voluntariamente? Estas são as chamadas \"paixões " +
        "inocentes\" (adiablētha pathē).",
      porQueNao:
        "Explodirá na controvérsia aftartodocetista do século VI dentro do próprio campo miafisita: " +
        "Juliano de Halicarnasso defenderá a incorruptibilidade natural do corpo de Cristo desde a " +
        "concepção; Severo de Antioquia (miafisita moderado, mais fiel a Calcedônia neste ponto) " +
        "defenderá a corruptibilidade natural com aceitação voluntária. Calcedônia apenas afirma a " +
        "autenticidade da humanidade, sem entrar nesses detalhes.",
    },
    {
      topico: "Conhecimento e ciência humana de Cristo",
      descricao:
        "Cristo homem tinha ciência beatífica (visão direta de Deus) desde a concepção? Conhecia " +
        "todas as coisas ou \"crescia em sabedoria\" (Lc 2,52) realmente? Ignorava o dia do Juízo " +
        "(Mc 13,32) segundo qual natureza?",
      porQueNao:
        "Debates puramente especulativos, sem impacto direto na crise do século V. Serão elaborados " +
        "sistematicamente apenas na escolástica medieval, especialmente por Tomás de Aquino (Suma " +
        "Teológica III, qq. 9–12), que distingue três tipos de ciência em Cristo: beatífica, infusa " +
        "e adquirida.",
    },
    {
      topico: "O Filioque (procedência do Espírito Santo)",
      descricao:
        "O Espírito Santo procede apenas do Pai (Credo de 381) ou do Pai E do Filho? Questão " +
        "pneumatológica, não estritamente cristológica, mas com implicações trinitárias profundas.",
      porQueNao:
        "Não era controvérsia em 451. Emergirá com a adição unilateral de \"Filioque\" ao Credo pela " +
        "Igreja Ocidental (Toledo III em 589, generalizada por Carlos Magno), tornando-se ponto " +
        "central do Grande Cisma de 1054. Calcedônia reafirma o Credo original sem Filioque.",
    },
    {
      topico: "Descida aos infernos e atividade da alma de Cristo entre morte e ressurreição",
      descricao:
        "Onde estava a alma humana de Cristo entre Sexta-Feira Santa e Páscoa? Que atividade " +
        "exerceu? A doutrina da descida ad inferos é bíblica (1Pd 3,19; 4,6) mas não elaborada.",
      porQueNao:
        "Calcedônia pressupõe a alma humana racional de Cristo (contra Apolinário), mas não elabora " +
        "sua atividade no triduum. Será desenvolvido pela liturgia (Homilia Antiga do Sábado Santo, " +
        "atribuída a Epifânio) e pela teologia medieval; retomado modernamente por Balthasar (Mysterium " +
        "Paschale).",
    },
  ],
};

export const resumoTeologico: {
  titulo: string;
  tese: string;
  conquistas: string[];
  legado: string;
} = {
  titulo: "Síntese Teológica: o que Calcedônia realmente conquistou",
  tese:
    "Calcedônia estabeleceu, com precisão conceitual e economia dogmática, a GRAMÁTICA fundamental " +
    "da fé cristológica cristã: um só Cristo, verdadeiro Deus e verdadeiro homem, subsistindo em " +
    "duas naturezas completas na unidade de uma única hipóstase, sem confusão nem separação. Essa " +
    "gramática não pretende explicar o mistério da Encarnação (o que seria pretensão irracional), " +
    "mas delimitar os erros que o desfigurariam — funcionando como \"guardrails\" ontológicos dentro " +
    "dos quais a contemplação e a teologia podem avançar em segurança.",
  conquistas: [
    "Fixou tecnicamente a distinção physis / hypostasis, resolvendo a ambiguidade que alimentava a " +
      "controvérsia cirílica-antioquena",
    "Estabeleceu a dupla consubstancialidade de Cristo (com o Pai e conosco) como estrutura ontológica " +
      "fundamental da economia salvífica",
    "Formalizou os quatro advérbios apofáticos como \"cerca\" da ortodoxia contra os dois extremos " +
      "(monofisismo e nestorianismo)",
    "Consagrou o Tomo de Leão como fonte doutrinal, integrando-o à tradição cirílica: síntese entre " +
      "Ocidente latino e Oriente grego",
    "Confirmou Theotokos como confissão cristológica (não apenas mariana) e o Credo de 381 como " +
      "único símbolo batismal válido",
    "Preparou conceitualmente todos os desenvolvimentos posteriores: hipóstase composta, enhipóstase, " +
      "duas vontades, duas operações",
    "Ofereceu um modelo de síntese entre tradições teológicas divergentes que continua sendo " +
      "referência para o diálogo ecumênico contemporâneo",
  ],
  legado:
    "Toda a cristologia posterior — bizantina, latina medieval, escolástica, reformada, moderna — se " +
    "move dentro do espaço conceitual delimitado por Calcedônia. Tomás de Aquino, Lutero, Calvino, " +
    "Karl Barth, Karl Rahner, Hans Urs von Balthasar: todos são, em sentido estrito, calcedonianos. " +
    "A cristologia dita \"neo-calcedoniana\" de Constantinopla II (553) precisou aprofundar a " +
    "linguagem cirílica para acomodar o Oriente; a cristologia \"pós-calcedoniana\" de Constantinopla " +
    "III (681) precisou explicitar as duas vontades. Mas em nenhum momento posterior a Igreja se " +
    "afastou da estrutura básica de 451. Nesse sentido, Calcedônia foi verdadeiramente o \"concílio " +
    "definidor\" — não porque tenha dito tudo, mas porque disse aquilo sem o qual o resto não pode " +
    "ser dito.",
};