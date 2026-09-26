// ═══════════════════════════════════════════════════════════════════════════
// PARTIDOS TEOLÓGICOS E ESPECTRO CRISTOLÓGICO DO SÉCULO V
// ═══════════════════════════════════════════════════════════════════════════
// Este arquivo mapeia os cinco grandes partidos teológicos que se enfrentaram
// nas décadas anteriores e posteriores a Calcedônia, situando-os em um
// espectro que vai do máximo dualismo (Nestório) ao máximo monismo (Eutiques).
// ═══════════════════════════════════════════════════════════════════════════

export const resumoPartidos: string =
  "A cristologia do século V não pode ser reduzida à oposição binária \"monofisitas contra " +
  "diofisitas\". Entre 431 (Éfeso) e 451 (Calcedônia), o mundo cristão organizou-se em um espectro " +
  "de pelo menos cinco posições distintas, cada uma com sua base geográfica, seu vocabulário técnico, " +
  "seus líderes reconhecidos e sua leitura própria dos Padres Nicenos e de Cirilo de Alexandria. " +
  "A Definição de Calcedônia foi uma tentativa deliberada de traçar duas linhas simultâneas: uma à " +
  "esquerda (contra Nestório e a duplicação de sujeitos em Cristo) e outra à direita (contra Eutiques " +
  "e a absorção da humanidade). O que ficou de fora dessas duas linhas — os miafisitas moderados de " +
  "matriz cirílica e os neo-antioquenos moderados — deveria em tese caber dentro do calcedonismo. " +
  "Na prática, entretanto, uma parte substancial dos miafisitas rejeitou a fórmula \"em duas naturezas\", " +
  "gerando o cisma que dura até hoje. Compreender esses cinco partidos é, portanto, essencial para " +
  "entender por que Calcedônia foi ao mesmo tempo o mais decisivo dos concílios cristológicos e o " +
  "mais divisor.";

export const espectroTeologico: string[] = [
  "NESTORIANOS (extrema esquerda): duas naturezas + duas hipóstases + duas pessoas separadas por união moral",
  "NEO-ANTIOQUENOS (esquerda moderada): duas naturezas + duas physeis claramente distintas + uma prosopon de união",
  "CALCEDONIANOS (centro): duas naturezas em uma única hipóstase / prosopon — síntese entre Antioquia e Alexandria",
  "MIAFISITAS CIRILIANOS (direita moderada): uma única natureza encarnada do Verbo (mia physis sesarkōmenē) — cirilismo estrito",
  "EUTIQUIANOS (extrema direita): uma única natureza após a união — humanidade absorvida, negada ou dissolvida",
  "APOLINARISTAS (fora do espectro, já condenados em 381): uma natureza porque o Verbo substitui o nous humano",
];

export interface Partido {
  nome: string;
  nomeAlternativo?: string;
  lider: string;
  periodo: string;
  termoChave: string;
  descricao: string;
  posicaoSobreAUniao: string;
  posicaoSobreOFilho: string;
  posicaoSobreOESpirito: string;
  argumentosPrincipais: string[];
  refutacao: string;
  baseGeografica: string;
  forcaNumerica: string;
  statusNoConcilio: string;
}

export const partidos: Partido[] = [
  {
    nome: "Eutiquianos",
    nomeAlternativo: "Monofisitas radicais",
    lider: "Eutiques (arquimandrita em Constantinopla) e seu protetor Dioscoro de Alexandria",
    periodo: "c. 448–451 (fase aguda); persistente em círculos monásticos até o século VI",
    termoChave: "mia physis meta tēn henōsin (uma única natureza depois da união)",
    descricao:
      "Corrente que radicalizava a fórmula cirílica \"mia physis tou Theou Logou sesarkōmenē\" ao " +
      "ponto de negar qualquer subsistência real da humanidade de Cristo após a união hipostática. " +
      "Para Eutiques, o corpo de Cristo, embora tomado de Maria, \"não era da mesma substância\" que " +
      "o nosso (ouk homoousion hēmin), pois havia sido transformado ou absorvido pela divindade. A " +
      "metáfora clássica é a da gota de mel caindo no oceano: a gota existe, mas o oceano é tudo. " +
      "Eutiques recusava-se a dizer \"duas naturezas após a união\", limitando-se a admitir \"duas " +
      "antes, uma depois\", fórmula considerada inaceitável tanto por Roma quanto pelos moderados " +
      "orientais.",
    posicaoSobreAUniao:
      "União tão total que produz uma nova e única physis, na qual a humanidade é praticamente " +
      "absorvida pela divindade; nega o consubstancial conosco (homoousios hēmin).",
    posicaoSobreOFilho:
      "Divino, mas com humanidade diminuída ou transformada; a carne de Cristo é de qualidade " +
      "distinta da nossa.",
    posicaoSobreOESpirito:
      "Nenhuma controvérsia específica; aceita a doutrina nicena-constantinopolitana sobre o Espírito.",
    argumentosPrincipais: [
      "Cirilo disse \"uma natureza encarnada do Verbo\" — logo, uma natureza após a união",
      "Duas naturezas depois da união dividem Cristo em dois, como Nestório",
      "A união é tão íntima que produz uma nova realidade única",
      "\"Do Senhor confesso duas naturezas antes da união, uma após a união\"",
    ],
    refutacao:
      "O Tomo de Leão e a Definição de Calcedônia refutam demonstrando que \"physis\" em Cirilo " +
      "equivale ao que Calcedônia chama de \"hipóstase\", e que negar o homoousios hēmin destrói " +
      "a economia da salvação — pois \"o que não é assumido não é curado\" (Gregório de Nazianzo).",
    baseGeografica:
      "Constantinopla (mosteiros urbanos, cerca de 300 monges seguiam Eutiques diretamente), com " +
      "apoio estratégico de Alexandria sob Dioscoro.",
    forcaNumerica:
      "Pequena numericamente entre os bispos, mas politicamente poderosa até 450 graças ao patrocínio " +
      "do eunuco Crisáfio e do imperador Teodósio II.",
    statusNoConcilio:
      "Formalmente condenados. Eutiques foi anatematizado nominalmente e Dioscoro deposto. A fórmula " +
      "\"uma natureza depois da união\" foi explicitamente rejeitada pela Definição.",
  },
  {
    nome: "Miafisitas Moderados",
    nomeAlternativo: "Cirilianos estritos / não-calcedonianos",
    lider:
      "Dioscoro de Alexandria (alegando fidelidade a Cirilo); posteriormente Timóteo Éluro, Severo " +
      "de Antioquia e Filoxeno de Mabug",
    periodo: "431 (Éfeso) em diante; consolidado como corrente eclesial separada após 451",
    termoChave: "mia physis tou Theou Logou sesarkōmenē (uma natureza encarnada do Verbo de Deus)",
    descricao:
      "Corrente que preservava rigorosamente o vocabulário e as fórmulas do Cirilo de Alexandria, " +
      "especialmente sua célebre expressão \"mia physis sesarkōmenē\", tomada de textos atribuídos a " +
      "Atanásio (na verdade apolinaristas). Ao contrário de Eutiques, os miafisitas moderados NÃO " +
      "negavam o homoousios hēmin nem admitiam qualquer absorção da humanidade: confessavam Cristo " +
      "\"perfeito na divindade e perfeito na humanidade\", mas insistiam que, após a união, há uma " +
      "só physis composta, indivisível. Para eles, dizer \"em duas naturezas\" (en dyo physesin) " +
      "era ceder ao nestorianismo. Sua posição é hoje reconhecida como cristologicamente ortodoxa " +
      "na substância, divergente apenas na terminologia — reconhecimento formalizado nas Declarações " +
      "Cristológicas Comuns entre a Igreja Católica e as Igrejas Ortodoxas Orientais (1971–1996).",
    posicaoSobreAUniao:
      "União hipostática real formando uma única physis composta, sem confusão nem mistura, mas " +
      "sem admitir a linguagem \"em duas naturezas\" após a união.",
    posicaoSobreOFilho:
      "Perfeito Deus e perfeito homem, consubstancial ao Pai segundo a divindade e consubstancial " +
      "a nós segundo a humanidade — mas em uma só physis encarnada.",
    posicaoSobreOESpirito:
      "Adere plenamente ao Credo de Constantinopla; nenhuma divergência sobre a pneumatologia.",
    argumentosPrincipais: [
      "Cirilo é o intérprete autêntico de Niceia — e Cirilo disse \"mia physis\"",
      "Dizer \"em duas naturezas\" divide Cristo e reintroduz Nestório pela porta dos fundos",
      "\"Physis\" em Cirilo equivale a \"hipóstase\" — logo, uma physis = uma hipóstase concreta",
      "A Definição de Calcedônia contradiz Éfeso I ao trocar \"de duas\" (ek dyo) por \"em duas\" (en dyo)",
    ],
    refutacao:
      "Os calcedonianos respondem que a Definição preserva integralmente a substância cirílica " +
      "(uma hipóstase, uma prosopon, Theotokos) e apenas explicita a distinção terminológica entre " +
      "physis e hipóstase, necessária depois do surgimento do eutiquianismo. Cirilo aceitou em 433 " +
      "a fórmula \"duas naturezas\" na Fórmula de União com João de Antioquia.",
    baseGeografica: "Egito, Síria Ocidental, Armênia, Etiópia, Núbia; posteriormente Índia (Malankara).",
    forcaNumerica:
      "Numericamente enorme: quase toda a Igreja do Egito (17 bispos presentes votaram em bloco), " +
      "grande parte da Síria, a Armênia inteira. Depois de Calcedônia, provavelmente maioria populacional " +
      "no Oriente cristão fora da Ásia Menor.",
    statusNoConcilio:
      "NÃO condenados nominalmente. Apenas a fórmula radical eutiquiana e a pessoa de Dioscoro foram " +
      "atingidas. A fórmula cirílica \"mia physis\" não foi anatematizada. Contudo, a exigência de " +
      "subscrever \"en dyo physesin\" provocou sua ruptura efetiva.",
  },
  {
    nome: "Ortodoxos Calcedonianos",
    nomeAlternativo: "Diofisitas de uma só hipóstase / neo-cirilianos ocidentais",
    lider:
      "Papa Leão I Magno, Anatólio de Constantinopla, Máximo de Antioquia, Juvenal de Jerusalém " +
      "(nesta fase), os legados papais Paschasinus e Lucêncio",
    periodo: "Formalizado em 451; permanente até hoje como fé oficial da Igreja Católica, Ortodoxa Oriental e maioria protestante",
    termoChave: "dyo physeis en mia hypostasei kai mia prosopon (duas naturezas em uma hipóstase e uma pessoa)",
    descricao:
      "Corrente que buscou realizar uma síntese consciente entre as duas grandes tradições patrísticas: " +
      "a alexandrina (unidade do sujeito, Theotokos, comunicação de idiomas, uma hipóstase) e a " +
      "antioquena (distinção real e permanente das duas naturezas, integridade da humanidade, " +
      "consubstancialidade dupla). O Tomo de Leão a Flaviano forneceu a moldura conceitual latina " +
      "(\"agit utraque forma cum alterius communione\") e a Definição de Calcedônia articulou o " +
      "vocabulário técnico grego: uma única hipóstase / prosopon do Verbo encarnado subsistindo em " +
      "duas naturezas completas, unidas asynchytōs (sem confusão), atreptōs (sem mudança), adiairetōs " +
      "(sem divisão) e achōristōs (sem separação). Essa fórmula tornou-se o padrão dogmático de todos " +
      "os concílios ecumênicos subsequentes.",
    posicaoSobreAUniao:
      "União hipostática: uma única hipóstase (a do Verbo eterno) que assume e faz subsistir em si " +
      "uma natureza humana completa, sem que as naturezas se confundam nem se separem.",
    posicaoSobreOFilho:
      "Um só e mesmo Cristo, Filho, Senhor, Unigênito, em duas naturezas — verdadeiro Deus e " +
      "verdadeiro homem, consubstancial ao Pai segundo a divindade e a nós segundo a humanidade, " +
      "exceto no pecado.",
    posicaoSobreOESpirito:
      "Adere ao Credo Niceno-Constantinopolitano sem modificações; a controvérsia do Filioque é " +
      "posterior (século IX).",
    argumentosPrincipais: [
      "A Escritura atribui a um único Cristo ações divinas e humanas — logo, uma pessoa em duas naturezas",
      "Cirilo aceitou \"duas naturezas\" na Fórmula de União de 433 com João de Antioquia",
      "\"O que não é assumido não é curado\" (Greg. Naz.) — logo, humanidade íntegra e permanente",
      "Distinguir physis (natureza) de hipóstase (subsistência) resolve o falso dilema entre unidade e distinção",
    ],
    refutacao:
      "Contra os miafisitas: a distinção physis/hipóstase é necessária conceitualmente e já implícita " +
      "em Cirilo maduro. Contra os nestorianos: a única hipóstase garante que é o próprio Verbo quem " +
      "nasce, sofre e morre — daí a legitimidade de Theotokos e da comunicação de idiomas.",
    baseGeografica: "Roma e todo o Ocidente latino, Constantinopla, Ásia Menor, Trácia, Ilírico, Palestina.",
    forcaNumerica:
      "Amplamente majoritário no concílio (mais de 400 bispos assinaram a Definição). Politicamente " +
      "apoiado pela dinastia Marciano-Pulquéria e por todos os imperadores subsequentes exceto os breves " +
      "interlúdios monofisitas (Anastácio I, Foca em parte).",
    statusNoConcilio: "Vencedores absolutos. Sua fórmula tornou-se a Definição oficial do concílio.",
  },
  {
    nome: "Neo-Antioquenos",
    nomeAlternativo: "Diofisitas moderados / antioquenos pós-433",
    lider:
      "Teodoreto de Ciro, Ibas de Edessa, Domno de Antioquia (antes de 449); herdeiros da tradição " +
      "de Teodoro de Mopsuéstia e João Crisóstomo",
    periodo: "433 (Fórmula de União) até c. 553 (condenação dos Três Capítulos)",
    termoChave: "dyo physeis / prosopon tēs henōseōs (duas naturezas / face da união)",
    descricao:
      "Herdeiros moderados da grande escola de Antioquia, que aceitaram em 433 a Fórmula de União " +
      "com Cirilo (composta pelo próprio Teodoreto), incluindo o título Theotokos, mas insistiam na " +
      "distinção real e permanente das duas naturezas. Sua linguagem privilegiava a ideia de \"prosopon " +
      "de união\" (rosto ou face única resultante da união) mais do que a de \"hipóstase única\". " +
      "Foram sistematicamente acusados de cripto-nestorianismo por Cirilo em vida e por Dioscoro " +
      "depois, o que levou a suas deposições no Latrocínio de 449. Em Calcedônia, foram reabilitados " +
      "após anatematizar publicamente Nestório, mas suas obras anti-cirilianas continuaram a ser um " +
      "escândalo para os miafisitas.",
    posicaoSobreAUniao:
      "União verdadeira e permanente, produzindo um único prosopon de Cristo, mas com as duas physeis " +
      "conservando cada uma sua integridade e suas operações próprias.",
    posicaoSobreOFilho:
      "Um só Cristo, verdadeiramente Deus e verdadeiramente homem; aceitam Theotokos, mas com " +
      "prudência (Maria gera aquele que é Deus, não a natureza divina).",
    posicaoSobreOESpirito:
      "Ortodoxos nicenos-constantinopolitanos; nenhuma controvérsia própria.",
    argumentosPrincipais: [
      "A integridade da humanidade de Cristo é a garantia da salvação real do homem",
      "As duas naturezas devem ser distinguidas para não cair em confusão ou mistura",
      "Cirilo, em 433, aceitou nossa linguagem — logo, ela é ortodoxa",
      "Nestório errou ao separar as pessoas; nós apenas distinguimos as naturezas",
    ],
    refutacao:
      "Os miafisitas os acusam de manter viva a matriz nestoriana (via Teodoro de Mopsuéstia); os " +
      "calcedonianos os aceitam como ortodoxos desde que subscrevam a única hipóstase e anatematizem " +
      "Nestório. O II Concílio de Constantinopla (553) condenará os escritos anti-cirilianos de " +
      "Teodoreto e a Carta de Ibas para reconciliar os miafisitas.",
    baseGeografica: "Síria Oriental, Cilícia, região de Edessa; Escola de Edessa (fechada em 489).",
    forcaNumerica:
      "Grupo relativamente pequeno de bispos e teólogos de alto nível intelectual, mas com influência " +
      "enorme na formação clerical siríaca.",
    statusNoConcilio:
      "Reabilitados. Teodoreto readmitido na Sessão 8; Ibas na Sessão 10; ambos após anatematizarem " +
      "explicitamente Nestório. Sua reabilitação seria depois um dos principais estopins da controvérsia " +
      "dos Três Capítulos.",
  },
  {
    nome: "Nestorianos",
    nomeAlternativo: "Igreja do Oriente / diofisitas radicais / \"Igreja Assíria\"",
    lider:
      "Nestório (exilado no Egito desde 435, morre c. 450), Barsauma de Nísibis, posteriormente " +
      "Narsai da Escola de Nísibis; catholicoi persas Aqáq (485) e Babai (497)",
    periodo: "Formalizado após Éfeso 431; consolidado como Igreja independente sob os sassânidas em 486/497",
    termoChave: "dyo physeis, dyo hypostaseis, hen prosopon tēs henōseōs (duas naturezas, duas hipóstases, um prosopon de união)",
    descricao:
      "Corrente que, na leitura tradicional, teria mantido a posição atribuída a Nestório de que em " +
      "Cristo há duas pessoas separadas por uma união meramente moral ou voluntária. A pesquisa " +
      "contemporânea, especialmente após a redescoberta do \"Livro de Heráclides\" de Nestório em 1889, " +
      "mostra um quadro mais complexo: a chamada Igreja do Oriente confessa duas naturezas e duas " +
      "hipóstases (qnōmē em siríaco), mas um único prosopon (parsopa) de união. Sua terminologia " +
      "difere estruturalmente da calcedoniana (hipóstase em Calcedônia = prosopon nos nestorianos, " +
      "aproximadamente), o que gera acusações mútuas de heresia sobre bases parcialmente terminológicas. " +
      "Recusam categoricamente o título Theotokos, preferindo Christotokos ou \"Mãe de Cristo Deus e " +
      "homem\".",
    posicaoSobreAUniao:
      "União verdadeira, mas realizada no plano do prosopon (única face reveladora), não no plano " +
      "da hipóstase; cada natureza conserva sua própria hipóstase concreta.",
    posicaoSobreOFilho:
      "Cristo é um único prosopon em que se manifestam duas naturezas com suas hipóstases próprias; " +
      "Maria é mãe do Cristo, não Theotokos no sentido estrito.",
    posicaoSobreOESpirito:
      "Ortodoxos nicenos; produzirão sua própria tradição pneumatológica de matriz siríaca.",
    argumentosPrincipais: [
      "Deus não pode nascer, sofrer ou morrer — logo Maria é mãe do homem Jesus, unido ao Verbo",
      "Duas naturezas completas exigem duas hipóstases concretas para subsistir",
      "A união é do tipo mais nobre: união de prosopon (voluntária, amorosa, permanente)",
      "Cirilo confunde as naturezas ao atribuir sofrimento à divindade",
    ],
    refutacao:
      "Éfeso 431 e Calcedônia 451 os condenam como divisores do único Cristo. A distinção hipóstase " +
      "/ prosopon feita por eles é considerada insuficiente para preservar a real unidade do sujeito " +
      "encarnado. Diálogos contemporâneos (Declaração Comum Cristológica João Paulo II – Mar Dinkha IV, " +
      "1994) reconhecem substancial convergência de fé sob linguagens divergentes.",
    baseGeografica:
      "Império Persa (Sassânida); Escola de Nísibis; posteriormente expansão missionária pela Rota " +
      "da Seda até a China (Estela de Xi'an, 781) e a Índia (Cristãos de São Tomé).",
    forcaNumerica:
      "Fora do Império Romano, era a maioria dos cristãos persas. Numericamente insignificante " +
      "dentro do Império em 451.",
    statusNoConcilio:
      "NÃO estavam presentes. Nestório foi reafirmado como condenado (havia morrido pouco antes ou " +
      "logo depois do concílio). A Igreja do Oriente considera Calcedônia insuficientemente clara na " +
      "distinção das naturezas.",
  },
];

export const quemFoiCondenadoPorNome: {
  titulo: string;
  observacaoGeral: string;
  detalhes: string[];
  unicaExcecao: string;
} = {
  titulo: "Quem foi condenado nominalmente em Calcedônia",
  observacaoGeral:
    "Contrariamente à impressão comum, Calcedônia condenou muito poucas pessoas por nome. As " +
    "condenações nominais foram cirúrgicas, concentradas em três figuras, enquanto correntes " +
    "teológicas inteiras (como o miafisismo moderado) NÃO foram objeto de anátema explícito. Essa " +
    "restrição na formulação foi consciente e política — pensada para não fechar as portas a uma " +
    "eventual reconciliação com os cirilianos radicais. Na prática, contudo, a fórmula \"em duas " +
    "naturezas\" acabou funcionando como divisor, mesmo sem anátemas nomeados.",
  detalhes: [
    "EUTIQUES — condenado nominalmente e por doutrina. Sua fórmula \"duas antes, uma depois\" foi " +
      "explicitamente rejeitada. Já havia sido deposto por Flaviano em 448 (Constantinopla) e agora " +
      "confirmado como herético.",
    "DIOSCORO DE ALEXANDRIA — deposto por crimes canônicos (violência no Latrocínio, deposição " +
      "ilegal de Flaviano, comunhão com Eutiques após sua condenação, contumácia). NÃO foi " +
      "formalmente declarado herético — distinção crucial que os coptas explorariam depois.",
    "NESTÓRIO — condenação reafirmada. Já havia sido deposto em Éfeso 431. Teodoreto e Ibas foram " +
      "obrigados a anatematizá-lo nominalmente como condição de sua reabilitação.",
  ],
  unicaExcecao:
    "Os MIAFISITAS MODERADOS (cirilianos estritos que rejeitavam apenas a preposição \"en\" em favor " +
    "de \"ek\", mantendo integralmente a fé cirílica) NÃO foram condenados por nome nem por doutrina. " +
    "A Definição atacou apenas a fórmula radical eutiquiana (\"uma natureza que absorve\") e o " +
    "monofisismo confuso. Essa ausência de anátema explícito é usada, com razão, pelos ortodoxos " +
    "orientais para argumentar que a fé miafisita nunca foi formalmente heretizada — apenas " +
    "terminologicamente contornada.",
};

export const oQueNaoFoiTocado: {
  titulo: string;
  introducao: string;
  itens: { topico: string; explicacao: string }[];
} = {
  titulo: "O que Calcedônia deliberadamente NÃO tratou",
  introducao:
    "Calcedônia definiu a estrutura ontológica de Cristo (uma hipóstase, duas naturezas), mas deixou " +
    "várias questões cristológicas e correlatas para o futuro. Alguns desses temas explodiriam nos " +
    "concílios seguintes; outros permaneceriam abertos ou seriam definidos apenas muito mais tarde. " +
    "A parcimônia dogmática de Calcedônia foi intencional: os Padres do concílio queriam responder " +
    "à crise concreta (Eutiques + Latrocínio) sem antecipar debates ainda não maduros.",
  itens: [
    {
      topico: "As duas vontades e as duas operações de Cristo",
      explicacao:
        "Se Cristo tem duas naturezas completas, cada uma deve ter sua vontade e sua operação " +
        "próprias — mas Calcedônia não explicita isso. A questão explodirá no século VII com o " +
        "monotelismo bizantino, sendo resolvida apenas no III Concílio de Constantinopla (680–681), " +
        "que define duo thelēmata e duai energeiai — duas vontades e duas operações em Cristo.",
    },
    {
      topico: "As duas energias e a communicatio idiomatum em sentido estrito",
      explicacao:
        "Calcedônia diz que as naturezas se conservam \"sem confusão\", mas não explica em que sentido " +
        "os atributos de uma podem ser predicados da outra através da hipóstase única. A doutrina " +
        "técnica da communicatio idiomatum será desenvolvida por João Damasceno (século VIII) e " +
        "sistematizada apenas na escolástica.",
    },
    {
      topico: "A mariologia para além de Theotokos",
      explicacao:
        "Calcedônia confessa Maria como Theotokos (\"Mãe de Deus\") na Definição, mas não trata de " +
        "outros aspectos marianos: virgindade perpétua (já pressuposta), imaculada conceição, assunção " +
        "corporal. A festa da Dormição/Assunção só se generaliza no século VI; a Imaculada será " +
        "definida em 1854 e a Assunção em 1950 (na Igreja Católica).",
    },
    {
      topico: "A incorruptibilidade e as \"paixões inocentes\" do corpo de Cristo",
      explicacao:
        "Se o corpo de Cristo é verdadeiramente humano, sofre fome, sede, cansaço e dor? E antes ou " +
        "depois da ressurreição, era corruptível? A controvérsia \"aftartodocetista\" (Juliano de " +
        "Halicarnasso vs. Severo de Antioquia) explodirá no século VI dentro do próprio campo " +
        "miafisita. Calcedônia apenas afirma a autenticidade da humanidade, sem detalhar suas paixões.",
    },
    {
      topico: "A visão beatífica e o conhecimento humano de Cristo",
      explicacao:
        "Cristo homem tinha ciência beatífica desde a concepção? Conhecia todas as coisas ou " +
        "\"crescia em sabedoria\" (Lc 2,52) realmente? Esses debates só serão formulados tecnicamente " +
        "na escolástica medieval (Tomás de Aquino, Suma Teológica III, qq. 9–12).",
    },
    {
      topico: "A descida aos infernos e a alma de Cristo entre a morte e a ressurreição",
      explicacao:
        "Calcedônia pressupõe a alma humana racional de Cristo (contra Apolinário), mas não elabora " +
        "sua atividade entre Sexta-Feira Santa e Páscoa. O tema será desenvolvido pela liturgia e " +
        "pela homilética bizantina (Homilia Antiga do Sábado Santo) e ocidental medieval.",
    },
  ],
};