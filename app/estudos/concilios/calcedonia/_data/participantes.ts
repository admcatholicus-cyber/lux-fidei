// estudos/concilios/calcedonia/_data/participantes.ts

// ═══════════════════════════════════════════════════════
// ESTRUTURAS DE TIPOS
// ═══════════════════════════════════════════════════════

export interface Bispo {
  nome: string;
  sede: string;
  provincia: string;
  papel: string;
  partido: string;
  observacoes?: string;
}

export interface GrupoParticipantes {
  titulo: string;
  descricao: string;
  bispos: Bispo[];
}

export interface Ausente {
  nome: string;
  sede: string;
  razao: string;
  impacto: string;
}

export interface Ausencias {
  titulo: string;
  descricao: string;
  ausentes: Ausente[];
}

export interface TotalParticipantes {
  estimativa: string;
  certeza: string;
  composicao: string;
  comparacao: string;
}

// ═══════════════════════════════════════════════════════
// VISÃO GERAL DA COMPOSIÇÃO
// ═══════════════════════════════════════════════════════

export const totalParticipantes: TotalParticipantes = {
  estimativa: "~520–630 bispos",
  certeza:
    "O número exato é objeto de debate acadêmico. As atas do concílio " +
    "preservam as assinaturas de aproximadamente 520 bispos na Definição " +
    "de Calcedônia (Sessão 5), mas o total de presentes ao longo das " +
    "16 sessões pode ter chegado a 630, considerando os bispos que " +
    "chegaram atrasados, os que partiram antes do encerramento e os " +
    "que participaram apenas das sessões administrativas. As listas " +
    "de presença variam entre as diferentes recensões das atas (a " +
    "recensão grega, a latina e a siríaca). O número de 630 é " +
    "fornecido por algumas fontes tardias (Teófanes, Cedreno), " +
    "enquanto a crítica moderna (Price & Gaddis, 2005) estima " +
    "um mínimo de 520 assinaturas autênticas.",
  composicao:
    "Esmagadoramente oriental e grego. A distribuição geográfica " +
    "aproximada é: Diocese da Ásia (~120 bispos, a maior delegação), " +
    "Diocese do Ponto (~60), Diocese da Trácia (~50, incluindo " +
    "Constantinopla), Diocese do Oriente/Síria (~50), Diocese do " +
    "Egito (cerca de 13 bispos presentes às sessões decisórias — " +
    "as fontes variam: 13 subscritores nominais nas atas gregas da " +
    "Definição; a delegação total do Egito era provavelmente maior, " +
    "incluindo clérigos e monges), Diocese da Palestina (~20), " +
    "Diocese da Ilíria (~10), e Ocidente (3 legados papais de Roma " +
    "+ 2 bispos africanos representando a Igreja latina). " +
    "A ausência quase total do Ocidente é notável: nenhum bispo da " +
    "Gália, Hispânia, Britânia, Germânia ou Itália (exceto os " +
    "legados) esteve presente.",
  comparacao:
    "Niceia I (325): ~318 · Constantinopla I (381): ~150 · " +
    "Éfeso (431): ~200 · Latrocínio (449): ~130 · " +
    "Calcedônia (451): ~520–630 (o maior concílio da Antiguidade)",
};

// ═══════════════════════════════════════════════════════
// BISPOS POR REGIÃO / DIOCESE
// ═══════════════════════════════════════════════════════

export const participantes: GrupoParticipantes[] = [
  // ─── LEGADOS PAPAIS (OCIDENTE) ───
  {
    titulo: "🇻🇦 Delegação Papal (Ocidente)",
    descricao:
      "O Papa Leão I não compareceu pessoalmente (alegando a idade, " +
      "a distância e a crise dos hunos na Itália), mas enviou uma " +
      "delegação de três representantes com instruções precisas: " +
      "garantir a leitura e aceitação do Tomo, presidir o concílio " +
      "em nome de Roma e impedir qualquer concessão ao monofisismo. " +
      "A delegação foi reforçada por dois bispos africanos que " +
      "representavam a Igreja latina do norte da África.",
    bispos: [
      {
        nome: "Paschasinus de Lilibeu",
        sede: "Lilibeu (atual Marsala, Sicília)",
        provincia: "Itália Suburbicária",
        papel: "Legado papal principal; presidiu o concílio",
        partido: "Ortodoxo leonino (duas naturezas)",
        observacoes:
          "Bispo de uma pequena diocese siciliana, escolhido por Leão " +
          "provavelmente por sua fluência em grego e latim e por sua " +
          "experiência em disputas teológicas. Presidiu todas as " +
          "sessões solenes sentado à direita do trono imperial. " +
          "Sua assinatura aparece em primeiro lugar nas atas. " +
          "Foi ele quem pronunciou a sentença de deposição de " +
          "Dioscoro em nome do Papa e de São Pedro.",
      },
      {
        nome: "Lucêncio de Ascoli",
        sede: "Ascoli Piceno (Itália central)",
        provincia: "Itália Suburbicária",
        papel: "Segundo legado papal; co-presidente",
        partido: "Ortodoxo leonino (duas naturezas)",
        observacoes:
          "Bispo de Ascoli, nas Marcas italianas. Atuou como " +
          "co-presidente ao lado de Paschasinus. Foi " +
          "particularmente vocal na exigência de que o Tomo " +
          "de Leão fosse lido integralmente e aceito sem " +
          "modificações. Sua presença reforçou a autoridade " +
          "romana nas sessões doutrinárias.",
      },
      {
        nome: "Bonifácio (presbítero)",
        sede: "Roma",
        provincia: "Itália Suburbicária",
        papel: "Terceiro legado papal (presbítero, não bispo)",
        partido: "Ortodoxo leonino",
        observacoes:
          "Presbítero da Igreja de Roma, enviado como terceiro " +
          "representante de Leão. Sua condição de presbítero " +
          "(não bispo) era incomum para um legado conciliar, " +
          "mas refletia a escassez de bispos italianos " +
          "disponíveis (a Itália estava sob ameaça de Átila). " +
          "Participou das sessões mas com papel secundário.",
      },
      {
        nome: "Basílio de Seleucia (chegou depois)",
        sede: "Seleucia (Isáuria, Ásia Menor)",
        provincia: "Diocese do Oriente",
        papel: "Bispo oriental que chegou após a 1ª sessão",
        partido: "Ortodoxo (inicialmente hesitante)",
        observacoes:
          "Embora não fosse legado papal, Basílio chegou atrasado " +
          "e foi associado à delegação ocidental por sua " +
          "simpatia ao Tomo de Leão. Sua presença é mencionada " +
          "nas atas a partir da 2ª sessão.",
      },
    ],
  },

  // ─── DIOCESE DA ÁSIA (a maior delegação) ───
  {
    titulo: "⛪ Diocese da Ásia (~120 bispos)",
    descricao:
      "A maior delegação do concílio, representando a Ásia Menor " +
      "ocidental (as províncias da Ásia, Lídia, Cária, Lícia, " +
      "Panfília, Frígia e Pisídia). Os bispos da Ásia eram " +
      "predominantemente calcedonianos e leais à corte de " +
      "Constantinopla. Sua presença maciça garantiu a maioria " +
      "ortodoxa no concílio e foi decisiva para a aprovação " +
      "da Definição e do Cânon 28.",
    bispos: [
      {
        nome: "Anatólio de Constantinopla",
        sede: "Constantinopla",
        provincia: "Trácia (mas com jurisdição sobre a Ásia)",
        papel: "Patriarca de Constantinopla; co-presidente",
        partido: "Ortodoxo calcedoniano (com passado ambíguo)",
        observacoes:
          "Sucessor de Flavian (martirizado no Latrocínio). " +
          "Eleito patriarca em 449 com o apoio de Dioscoro " +
          "e Crisáfio, o que levantava suspeitas sobre sua " +
          "ortodoxia. Em Calcedônia, alinhou-se rapidamente " +
          "com os legados papais e com Marciano para " +
          "demonstrar sua lealdade. Foi o principal " +
          "beneficiário do Cânon 28, que elevou " +
          "Constantinopla a 'segunda Roma'.",
      },
      {
        nome: "Estêvão de Éfeso",
        sede: "Éfeso",
        provincia: "Ásia Proconsular",
        papel: "Metropolita de Éfeso",
        partido: "Ortodoxo calcedoniano",
        observacoes:
          "Sucessor de Memnon e de Basílio na sé de Éfeso. " +
          "Sua presença era simbolicamente importante: Éfeso " +
          "fora o local do Latrocínio de 449, e Estêvão " +
          "representava a 'reabilitação' da sé após a " +
          "deposição do monofisita Bassiano (nomeado por " +
          "Dioscoro no Latrocínio).",
      },
      {
        nome: "Nunequio de Laodiceia",
        sede: "Laodiceia",
        provincia: "Frígia Pacaciana",
        papel: "Metropolita da Frígia",
        partido: "Ortodoxo calcedoniano",
        observacoes:
          "Um dos bispos mais influentes da Ásia Menor. " +
          "Participou ativamente dos debates sobre a " +
          "Definição e foi membro da comissão de 22 " +
          "bispos que redigiu o texto final.",
      },
      {
        nome: "Eusébio de Ancira",
        sede: "Ancira (atual Ancara)",
        provincia: "Galácia",
        papel: "Metropolita da Galácia",
        partido: "Ortodoxo calcedoniano",
        observacoes:
          "Bispo de uma das sedes mais importantes da " +
          "Ásia Menor central. Apoiou firmemente o " +
          "Tomo de Leão e a fórmula 'en dyo physesin'.",
      },
    ],
  },

  // ─── DIOCESE DO PONTO ───
  {
    titulo: "⛪ Diocese do Ponto (~60 bispos)",
    descricao:
      "A Diocese do Ponto abrangia o norte e nordeste da Ásia " +
      "Menor (Capadócia, Armênia Menor, Ponto, Paflagônia, " +
      "Helenoponto). Os bispos do Ponto eram firmemente " +
      "calcedonianos, herdeiros da tradição capadócia " +
      "(Basílio, Gregório de Nazianzo, Gregório de Nissa) " +
      "que já no século IV formulara a distinção entre " +
      "ousia (essência) e hypostasis (pessoa) — o " +
      "vocabulário que Calcedônia aplicaria à cristologia.",
    bispos: [
      {
        nome: "Eustáquio de Berito",
        sede: "Berito (atual Beirute)",
        provincia: "Fenícia (mas com conexões no Ponto)",
        papel: "Bispo envolvido em disputa jurisdicional",
        partido: "Ortodoxo calcedoniano",
        observacoes:
          "Protagonista de uma disputa jurisdicional com " +
          "Fotio de Tiro (Sessões 8–10) sobre a " +
          "jurisdição da Fenícia. O caso foi resolvido " +
          "pelos comissários imperiais a favor de Tiro.",
      },
      {
        nome: "Teodoreto de Ciro",
        sede: "Ciro (Síria do Norte)",
        provincia: "Eufratense (fronteira Ponto-Síria)",
        papel: "Teólogo reabilitado; um dos maiores intelectuais do concílio",
        partido: "Diofisita moderado (escola antioquena)",
        observacoes:
          "Um dos teólogos mais brilhantes do século V, " +
          "autor do Eranistes e da História Eclesiástica. " +
          "Deposto no Latrocínio de 449 por suposto " +
          "'nestorianismo'. Reabilitado na Sessão 8 de " +
          "Calcedônia após anatematizar publicamente " +
          "Nestório. Sua reabilitação foi controversa: " +
          "os monofisitas o consideravam um nestoriano " +
          "disfarçado, e sua condenação póstuma no " +
          "II Constantinopla (553, 'Três Capítulos') " +
          "reabriria a ferida.",
      },
    ],
  },

  // ─── DIOCESE DA TRÁCIA ───
  {
    titulo: "⛪ Diocese da Trácia (~50 bispos)",
    descricao:
      "A Diocese da Trácia incluía a província da Europa " +
      "(Constantinopla e arredores), a Trácia propriamente " +
      "dita, a Mésia e a Cítia Menor. Os bispos trácios " +
      "eram os mais próximos da corte imperial e os mais " +
      "leais a Marciano e Pulquéria. Sua presença garantiu " +
      "o controle imperial sobre o concílio.",
    bispos: [
      {
        nome: "Flaviano (sucessor de Flavian, o mártir)",
        sede: "Constantinopla (clero)",
        provincia: "Trácia",
        papel: "Representante do clero constantinopolitano",
        partido: "Ortodoxo calcedoniano",
        observacoes:
          "Membros do clero de Constantinopla que " +
          "haviam sofrido sob Dioscoro e Crisáfio " +
          "testemunharam na 1ª sessão sobre os " +
          "crimes do Latrocínio.",
      },
    ],
  },

  // ─── DIOCESE DO ORIENTE (SÍRIA) ───
  {
    titulo: "⛪ Diocese do Oriente / Síria (~50 bispos)",
    descricao:
      "A Diocese do Oriente abrangia a Síria, a Fenícia, a " +
      "Mesopotâmia, a Cilícia e a Isáuria. Era a terra natal " +
      "da escola teológica antioquena (Diodoro de Tarso, " +
      "Teodoro de Mopsuéstia, Nestório, Teodoreto), que " +
      "enfatizava a dualidade de naturezas em Cristo. Os " +
      "bispos sírios eram majoritariamente calcedonianos, " +
      "mas uma minoria significativa simpatizava com o " +
      "monofisismo (especialmente na Síria oriental e na " +
      "Mesopotâmia). A reabilitação de Teodoreto e Ibas " +
      "nas sessões 8–14 foi o evento mais importante " +
      "para esta delegação.",
    bispos: [
      {
        nome: "Máximo de Antioquia",
        sede: "Antioquia",
        provincia: "Síria Coele",
        papel: "Patriarca de Antioquia",
        partido: "Ortodoxo calcedoniano",
        observacoes:
          "Sucessor de Domno II (deposto no Latrocínio). " +
          "Máximo fora nomeado por Dioscoro em 449, o que " +
          "tornava sua posição delicada. Em Calcedônia, " +
          "demonstrou lealdade à Definição e aceitou a " +
          "perda da jurisdição sobre a Palestina para " +
          "Juvenal de Jerusalém (Sessão 7). Sua " +
          "cooperação foi essencial para a aprovação " +
          "da Definição.",
      },
      {
        nome: "Ibas de Edessa",
        sede: "Edessa (atual Şanlıurfa, Turquia)",
        provincia: "Osroena (Mesopotâmia)",
        papel: "Teólogo reabilitado",
        partido: "Diofisita moderado (escola antioquena)",
        observacoes:
          "Autor da famosa 'Carta a Maris' (um dos " +
          "'Três Capítulos' condenados em 553). Deposto " +
          "no Latrocínio de 449 por suposto nestorianismo. " +
          "Reabilitado em Calcedônia (Sessão 10) após " +
          "anatematizar Nestório. Sua reabilitação foi " +
          "ainda mais controversa que a de Teodoreto, " +
          "pois a Carta a Maris continha críticas " +
          "diretas a Cirilo de Alexandria.",
      },
    ],
  },

  // ─── DIOCESE DA PALESTINA ───
  {
    titulo: "⛪ Diocese da Palestina (~20 bispos)",
    descricao:
      "A Palestina era uma diocese pequena mas de enorme " +
      "prestígio simbólico (Terra Santa, Jerusalém). Os " +
      "bispos palestinos eram liderados por Juvenal de " +
      "Jerusalém, um político eclesiástico de primeira " +
      "ordem que sobrevivera ao Latrocínio trocando de " +
      "lado no momento certo. Em Calcedônia, Juvenal " +
      "negociou a elevação de Jerusalém a patriarcado " +
      "independente (Sessão 7), um feito extraordinário " +
      "para uma sé que até então era sufragânea de " +
      "Cesareia da Palestina.",
    bispos: [
      {
        nome: "Juvenal de Jerusalém",
        sede: "Jerusalém",
        provincia: "Palaestina Prima",
        papel: "Bispo de Jerusalém (futuro patriarca)",
        partido: "Ortodoxo calcedoniano (oportunista)",
        observacoes:
          "O sobrevivente mais astuto da crise cristológica. " +
          "Juvenal participara do Latrocínio de 449 como " +
          "co-presidente ao lado de Dioscoro e votara pela " +
          "deposição de Flavian. Em Calcedônia, porém, " +
          "anatematizou Dioscoro e aceitou o Tomo de Leão, " +
          "trocando de lado com habilidade. Sua recompensa " +
          "foi a elevação de Jerusalém a patriarcado " +
          "(Sessão 7). Os monofisitas nunca o perdoaram: " +
          "quando retornou a Jerusalém após o concílio, " +
          "encontrou a cidade em revolta e foi expulso " +
          "por monges monofisitas liderados por Teodósio, " +
          "que se autoproclamou 'patriarca' (452–453).",
      },
    ],
  },

  // ─── DIOCESE DO EGITO ───
  {
    titulo: "⛪ Diocese do Egito (~13 bispos — a delegação problemática)",
    descricao:
      "A menor e mais problemática delegação do concílio. O Egito " +
      "era o bastião do monofisismo: a população, o clero e os " +
      "poderosos monges do deserto (os 'apotácticos' e os " +
      "monges de Tabennisi) eram fervorosamente leais à memória " +
      "de Cirilo e à fórmula 'mia physis'. Dioscoro, embora " +
      "deposto, ainda era o patriarca legítimo aos olhos dos " +
      "egípcios. Cerca de 13 bispos egípcios estavam presentes " +
      "nas sessões decisórias de Calcedônia, sob a liderança " +
      "efetiva de Dioscoro, e manteve-se fiel a ele até o " +
      "fim. Sua resistência à Definição foi o primeiro " +
      "sinal do cisma que separaria o Egito de " +
      "Constantinopla por 1.500 anos.",
    bispos: [
      {
        nome: "Dioscoro de Alexandria",
        sede: "Alexandria",
        provincia: "Egito (Aegyptus)",
        papel: "Patriarca de Alexandria (acusado e deposto)",
        partido: "Monofisita (mia physis radical)",
        observacoes:
          "O grande antagonista de Calcedônia. Sucessor de " +
          "Cirilo (444), Dioscoro radicalizou a teologia " +
          "ciriliana até o ponto de abraçar o monofisismo " +
          "de Eutiques. Presidiu o Latrocínio de 449 com " +
          "violência e fraude. Em Calcedônia, foi julgado " +
          "como acusado (não como presidente), deposto na " +
          "3ª sessão e exilado para Gangra. Para os " +
          "monofisitas, é um mártir e confessor; para " +
          "os calcedonianos, um herege e criminoso. " +
          "Morreu no exílio em setembro de 454.",
      },
      {
        nome: "Bispos egípcios (coletivamente, cerca de 13)",
        sede: "Diversas sés do Egito",
        provincia: "Egito, Líbia, Tebaida",
        papel: "Delegação egípcia leal a Dioscoro",
        partido: "Monofisita (resistência à Definição)",
        observacoes:
          "Cerca de 13 bispos egípcios estavam presentes nas sessões " +
          "decisórias (as atas gregas da Definição listam 13 " +
          "subscritores nominais egípcios). Recusaram-se a aceitar a " +
          "fórmula 'duas naturezas' e exigiram a nomeação " +
          "de um novo patriarca de Alexandria antes de " +
          "qualquer votação. Foram coagidos a assinar a " +
          "Definição sob ameaça de exílio, mas suas " +
          "assinaturas foram acompanhadas de notas de " +
          "protesto. Ao retornarem ao Egito, foram " +
          "recebidos como traidores pela população " +
          "monofisita, que já havia eleito Proterio " +
          "como patriarca calcedoniano (451–457) — " +
          "um patriarca que seria linchado pela " +
          "multidão em 457.",
      },
    ],
  },

  // ─── DIOCESE DA ILÍRIA ───
  {
    titulo: "⛪ Diocese da Ilíria (~10 bispos)",
    descricao:
      "A Diocese da Ilíria (Bálcãs ocidentais: Grécia, " +
      "Macedônia, Dácia, Epiro) era a ponte entre o " +
      "Oriente e o Ocidente. Seus bispos eram " +
      "majoritariamente gregos e calcedonianos, " +
      "mas mantinham laços com Roma (a Ilíria " +
      "estava sob jurisdição papal desde o " +
      "século IV). Sua pequena delegação " +
      "refletia a instabilidade da região " +
      "(invasões de godos e hunos).",
    bispos: [
      {
        nome: "Quintílio de Heracleia",
        sede: "Heracleia da Trácia",
        provincia: "Trácia/Ilíria",
        papel: "Metropolita",
        partido: "Ortodoxo calcedoniano",
        observacoes:
          "Representante da Ilíria oriental. Apoiou " +
          "a Definição e o Cânon 28.",
      },
    ],
  },
];

// ═══════════════════════════════════════════════════════
// OS MONOFISITAS / EUTIQUIANOS NO CONCÍLIO
// ═══════════════════════════════════════════════════════

export const monofisitas = {
  titulo: "O Bloco Monofisita no Concílio",
  descricao:
    "Os monofisitas (ou 'eutiquianos', como os calcedonianos os " +
    "chamavam) estavam presentes em Calcedônia principalmente " +
    "através da delegação egípcia de Dioscoro (cerca de 13 bispos) e " +
    "de alguns bispos sírios e palestinos que simpatizavam com " +
    "a fórmula 'mia physis'. Porém, sua influência era mínima: " +
    "a esmagadora maioria dos ~520 bispos era calcedoniana ou " +
    "pelo menos disposta a aceitar a fórmula 'duas naturezas' " +
    "sob pressão imperial. O monofisismo como movimento " +
    "organizado estava acéfalo (Dioscoro era acusado, não " +
    "presidente) e desmoralizado (o Latrocínio fora anulado).",
  crenca:
    "'Uma só natureza após a união' (mia physis meta tēn henōsin). " +
    "A humanidade de Cristo foi absorvida pela divindade como " +
    "'uma gota de mel no oceano' (metáfora de Eutiques). " +
    "Rejeitavam a fórmula 'duas naturezas' (dyo physeis) por " +
    "considerá-la nestorianismo disfarçado. Alegavam seguir " +
    "fielmente a tradição de Cirilo de Alexandria e sua " +
    "fórmula 'mia physis tou Theou Logou sesarkōmenē' " +
    "('uma natureza encarnada do Verbo de Deus').",
  lideres: [
    "Dioscoro de Alexandria (deposto na 3ª sessão)",
    "Eutiques de Constantinopla (não presente; exilado desde 449)",
    "Barsauma (arquimandrita sírio; não presente, mas sua " +
      "'sombra' pairava sobre o concílio como símbolo da " +
      "violência do Latrocínio)",
  ],
  desfecho:
    "Dioscoro foi deposto e exilado. Os cerca de 13 bispos egípcios " +
    "foram coagidos a assinar a Definição. Eutiques, já " +
    "exilado desde 449, foi reafirmado como herege. O " +
    "monofisismo como doutrina foi formalmente condenado " +
    "pelo concílio, mas sobreviveu como movimento popular " +
    "no Egito, na Síria e na Armênia, gerando as Igrejas " +
    "Ortodoxas Orientais que existem até hoje.",
  ironia:
    "A maior ironia de Calcedônia é que o concílio que " +
    "pretendia unificar a Igreja acabou produzindo o " +
    "maior cisma da cristandade antiga. As Igrejas " +
    "que rejeitaram Calcedônia (Copta, Siríaca, " +
    "Armênia, Etíope) representam hoje ~60 milhões " +
    "de fiéis — mais do que a população de muitos " +
    "países europeus. Os diálogos ecumênicos modernos " +
    "(1989–1994) demonstraram que a divergência é " +
    "em grande parte terminológica, não substancial.",
};

// ═══════════════════════════════════════════════════════
// AUSÊNCIAS NOTÁVEIS
// ═══════════════════════════════════════════════════════

export const ausencias: Ausencias = {
  titulo: "Ausências Notáveis",
  descricao:
    "O Concílio de Calcedônia, apesar de ser o maior da " +
    "Antiguidade, teve ausências significativas que " +
    "afetaram sua representatividade e legitimidade. " +
    "A mais notável foi a do próprio Papa Leão I, que " +
    "não compareceu pessoalmente (embora sua influência " +
    "tenha dominado o concílio através do Tomo e dos " +
    "legados). A ausência quase total do Ocidente " +
    "(Gália, Hispânia, Britânia, África — exceto os " +
    "legados) e da Igreja do Oriente (Pérsia) levantou " +
    "questões sobre a verdadeira 'ecumenicidade' do " +
    "concílio que persistem até hoje.",

  ausentes: [
    {
      nome: "Papa Leão I (Magno)",
      sede: "Roma",
      razao:
        "Leão alegou três razões para não comparecer: (1) a " +
        "idade avançada (tinha ~60 anos); (2) a distância " +
        "(Roma a Calcedônia eram ~2.000 km de viagem " +
        "marítima); (3) a crise dos hunos na Itália " +
        "(Átila invadira a Gália em 451 e invadiria a " +
        "Itália em 452). Enviou três legados com " +
        "instruções precisas e o Tomo como sua " +
        "'presença doutrinária'.",
      impacto:
        "A ausência de Leão foi simultaneamente uma " +
        "fraqueza e uma força. Fraqueza: os legados " +
        "papais não tinham a autoridade pessoal do " +
        "Papa para controlar os comissários imperiais. " +
        "Força: o Tomo, lido na 2ª sessão, falou por " +
        "Leão com mais eloquência do que qualquer " +
        "discurso presencial. A aclamação 'Pedro " +
        "falou por Leão!' é o maior triunfo " +
        "papal da antiguidade.",
    },
    {
      nome: "Bispos da Gália, Hispânia e Britânia",
      sede: "Gália (França), Hispânia (Espanha), Britânia",
      razao:
        "Não foram convocados. A crise dos hunos (Átila " +
        "invadira a Gália em junho de 451) tornava " +
        "impossível qualquer viagem ao Oriente. " +
        "Além disso, a tradição de convocar bispos " +
        "ocidentais para concílios orientais era " +
        "fraca: mesmo em Niceia (325), apenas " +
        "7 bispos ocidentais compareceram.",
      impacto:
        "A ausência ocidental significou que Calcedônia " +
        "foi essencialmente um concílio oriental com " +
        "aprovação papal. Isto alimentaria as acusações " +
        "posteriores (especialmente durante o Grande " +
        "Cisma de 1054) de que Calcedônia era um " +
        "concílio 'grego' e não verdadeiramente " +
        "'universal'.",
    },
    {
      nome: "Bispos do Norte da África (exceto os legados)",
      sede: "Cartago, Numídia, Mauritânia",
      razao:
        "O Norte da África estava sob domínio vândalo " +
        "desde 439. Os vândalos, arianos, perseguiam " +
        "a Igreja católica e impediam a comunicação " +
        "com o Oriente. Apenas dois bispos africanos " +
        "(Rústico e Aurélio) conseguiram chegar a " +
        "Calcedônia, provavelmente viajando via " +
        "Roma com os legados papais.",
      impacto:
        "A quase ausência africana privou o concílio " +
        "da voz da tradição agostiniana (Agostinho " +
        "morrera em 430 durante o cerco vândalo de " +
        "Hipona). A cristologia de Agostinho, que " +
        "influenciara profundamente o Tomo de Leão, " +
        "estava presente apenas indiretamente.",
    },
    {
      nome: "Nestório (exilado)",
      sede: "Grande Oásis de Hibis, Egito (exílio)",
      razao:
        "Nestório vivia no exílio no deserto egípcio " +
        "desde 435. Embora não tivesse sido convidado " +
        "(era um herege condenado), sua 'sombra' " +
        "pairava sobre todo o concílio. A Definição " +
        "de Calcedônia foi cuidadosamente redigida " +
        "para evitar qualquer linguagem que pudesse " +
        "ser interpretada como nestoriana.",
      impacto:
        "Nestório morreu no exílio por volta de 450–451, " +
        "provavelmente antes ou durante o concílio. " +
        "Sua apologia, o 'Livro de Heráclides de " +
        "Damasco' (descoberto em 1895), revela que " +
        "ele considerava a Definição de Calcedônia " +
        "uma vindicação de sua própria teologia — " +
        "uma ironia que os monofisitas explorariam " +
        "para acusar os calcedonianos de " +
        "'nestorianismo disfarçado'.",
    },
    {
      nome: "Bispos da Igreja do Oriente (Pérsia)",
      sede: "Selêucia-Ctesifonte (Pérsia Sassânida)",
      razao:
        "A Igreja do Oriente (a futura 'Igreja " +
        "Assíria') já estava separada da Igreja " +
        "imperial desde o Sínodo de Selêucia " +
        "(410) e o Sínodo de Beth Lapat (484, " +
        "que adotaria o nestorianismo oficialmente). " +
        "Em 451, a Igreja do Oriente estava sob " +
        "o domínio do Império Sassânida (zoroastriano) " +
        "e não participava dos concílios imperiais " +
        "romanos.",
      impacto:
        "A ausência da Igreja do Oriente significou " +
        "que Calcedônia não teve impacto direto " +
        "sobre a cristologia persa. A Igreja do " +
        "Oriente manteve sua tradição 'nestoriana' " +
        "(dyo hypostaseis) e rejeitou tanto Éfeso " +
        "(431) quanto Calcedônia (451). O diálogo " +
        "ecumênico moderno (Declaração de 1994 " +
        "entre João Paulo II e Mar Dinkha IV) " +
        "reconheceu que a divergência é " +
        "essencialmente terminológica.",
    },
    {
      nome: "Eutiques de Constantinopla",
      sede: "Mosteiro de Constantinopla (exilado)",
      razao:
        "Eutiques, o monge cuja heresia desencadeou " +
        "toda a crise, estava exilado desde 449 " +
        "(deposto por Flavian) e não foi convidado " +
        "ao concílio. Sua idade avançada (~73 anos) " +
        "e sua condição de herege condenado " +
        "tornavam sua presença impossível.",
      impacto:
        "Eutiques morreu no exílio por volta de 454–456. " +
        "Sua ausência física não diminuiu sua " +
        "presença teológica: a Definição de " +
        "Calcedônia foi redigida especificamente " +
        "para refutar sua fórmula 'uma natureza " +
        "após a união'. Os quatro advérbios " +
        "('sem confusão, sem mudança, sem " +
        "divisão, sem separação') são, em " +
        "última análise, uma resposta a Eutiques.",
    },
  ],
};