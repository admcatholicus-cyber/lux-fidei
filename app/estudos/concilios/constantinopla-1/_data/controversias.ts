/**
 * CONTROVÉRSIAS DO CONCÍLIO DE CONSTANTINOPLA I
 * Debates internos, tensões e questões não resolvidas.
 */

export interface Controversia {
  id: number;
  titulo: string;
  resumo: string;
  detalhes: string;
  partesEnvolvidas: string[];
  resultado: string;
  consequenciaDeLongoPrazo: string;
  fontes: string[];
}

export const controversias: Controversia[] = [
  {
    id: 1,
    titulo: "O Cisma de Antioquia: Paulino vs Flaviano",
    resumo:
      "A disputa sobre quem era o bispo legítimo de Antioquia " +
      "envenenou o concílio e causou a renúncia de Gregório de Nazianzo.",
    detalhes:
      "Antioquia, a terceira maior cidade do Império e uma das " +
      "sedes apostólicas (fundada por Pedro, segundo a tradição), " +
      "estava dividida desde 362 entre dois (às vezes três) bispos " +
      "rivais. PAULINO era reconhecido por Roma (Dâmaso) e " +
      "Alexandria (Pedro/Timóteo), mas tinha pouco apoio no " +
      "Oriente. MELÉCIO era amado pelo Oriente, mas Roma o " +
      "considerava suspeito por seu passado 'meleciano'. " +
      "Quando Melécio morreu durante o concílio, a crise " +
      "explodiu: os orientais elegeram FLAVIANO como sucessor, " +
      "mas Gregório de Nazianzo insistiu que Paulino deveria " +
      "ser reconhecido (para manter a comunhão com Roma). " +
      "A maioria rejeitou Gregório. Furioso e humilhado, " +
      "ele renunciou à presidência e ao bispado de " +
      "Constantinopla.",
    partesEnvolvidas: [
      "Gregório de Nazianzo (pró-Paulino, pró-Roma)",
      "Maioria dos bispos orientais (pró-Flaviano)",
      "Timóteo de Alexandria (pró-Paulino)",
      "Egípcios recém-chegados (contra Gregório)",
    ],
    resultado:
      "Flaviano foi reconhecido como bispo de Antioquia pelo " +
      "concílio. Paulino continuou como rival com apoio de " +
      "Roma. O cisma durou até 415, quando os dois partidos " +
      "finalmente se reconciliaram.",
    consequenciaDeLongoPrazo:
      "O cisma de Antioquia enfraqueceu a autoridade da Sé " +
      "antioquena e contribuiu para a ascensão de " +
      "Constantinopla como principal sede do Oriente.",
    fontes: [
      "Gregório de Nazianzo, De Vita Sua",
      "Sócrates Escolástico, HE V.9",
    ],
  },

 
  {
    id: 3,
    titulo: "A Legitimidade de Gregório de Nazianzo como Bispo de Constantinopla",
    resumo:
      "A transferência de Gregório de Sasima para Constantinopla " +
      "violava o Cânon 15 de Niceia, que proibia transferências " +
      "episcopais. Seus inimigos usaram isso para deslegitimá-lo.",
    detalhes:
      "Gregório havia sido consagrado bispo de Sasima (uma " +
      "diocese miserável na Capadócia) por Basílio em 372. " +
      "Ele nunca visitou Sasima. Quando foi chamado a " +
      "Constantinopla em 379, ele estava tecnicamente " +
      "ainda 'vinculado' a Sasima. Os bispos egípcios " +
      "que chegaram na Fase 2 do concílio apontaram que " +
      "a transferência violava o Cânon 15 de Niceia " +
      "('Um bispo não deve passar de uma cidade para outra'). " +
      "Gregório argumentou que Sasima era uma diocese " +
      "nominal e que ele nunca havia tomado posse, mas " +
      "o argumento legal era forte. Combinado com a " +
      "questão de Antioquia, isso levou à sua renúncia.",
    partesEnvolvidas: [
      "Gregório de Nazianzo (defendendo sua legitimidade)",
      "Bispos egípcios (questionando a transferência)",
      "Timóteo de Alexandria (líder da oposição egípcia)",
    ],
    resultado:
      "Gregório renunciou voluntariamente, eliminando " +
      "a questão. Nectário foi escolhido como substituto " +
      "(ironicamente, Nectário também tinha problemas " +
      "canônicos — era um leigo não-batizado!).",
    consequenciaDeLongoPrazo:
      "A questão das transferências episcopais continuou " +
      "a ser um problema canônico por séculos. " +
      "O caso de Gregório é o exemplo mais famoso " +
      "da tensão entre direito canônico e necessidade " +
      "pastoral.",
    fontes: [
      "Gregório de Nazianzo, De Vita Sua (vv. 750-850)",
      "Cânon 15 de Niceia (325)",
    ],
  },

  {
    id: 4,
    titulo: "A 'Expansão' do Credo: Seria Lícito Alterar Niceia?",
    resumo:
      "O próprio Concílio de Niceia (325) havia proibido " +
      "qualquer alteração em seu Credo. Constantinopla " +
      "expandiu o Credo dramaticamente. Isso era legítimo?",
    detalhes:
      "Niceia (325) terminava seu Credo com anátemas e " +
      "a declaração implícita de que aquela era a fé " +
      "definitiva. O Cânon 7 de Éfeso (431) mais tarde " +
      "proibiria explicitamente a composição de qualquer " +
      "'outro credo' além do de Niceia. Então como " +
      "Constantinopla pôde expandir o Credo? " +
      "Os defensores argumentam que Constantinopla não " +
      "criou um NOVO credo, mas EXPANDIU o de Niceia " +
      "para responder a novas heresias (pneumatomachianismo) " +
      "que não existiam em 325. A expansão era " +
      "'homogênea' (desenvolvimento do mesmo conteúdo), " +
      "não 'heterogênea' (adição de conteúdo novo). " +
      "Os críticos (especialmente os ortodoxos contra " +
      "o Filioque) argumentam que qualquer adição é " +
      "ilegítima.",
    partesEnvolvidas: [
      "Bispos de Constantinopla (a favor da expansão)",
      "Pneumatomachianos (contra — 'vocês estão inovando')",
      "Puristas nicenos (preocupados com a fidelidade a 325)",
    ],
    resultado:
      "A expansão foi aceita pela maioria e ratificada " +
      "por Teodósio. O Credo Niceno-Constantinopolitano " +
      "se tornou o padrão litúrgico da cristandade.",
    consequenciaDeLongoPrazo:
      "O precedente de 'expandir' o Credo foi usado " +
      "séculos depois para justificar o Filioque " +
      "(Toledo, 589). Os ortodoxos argumentam que " +
      "se Constantinopla pôde expandir, por que " +
      "Toledo não poderia? Os católicos respondem " +
      "que Constantinopla era um concílio ecumênico " +
      "e Toledo era um sínodo local.",
    fontes: [
      "J.N.D. Kelly, Early Christian Creeds",
      "Cânon 7 de Éfeso (431)",
    ],
  },

  {
    id: 5,
    titulo: "O Escândalo de Máximo o Cínico",
    resumo:
      "A tentativa de golpe episcopal por Máximo o Cínico " +
      "humilhou Gregório de Nazianzo e gerou o Cânon 4.",
    detalhes:
      "Máximo, um filósofo alexandrino de aparência " +
      "cínica (cabelos longos, manto de filósofo), " +
      "ganhou a confiança de Gregório, que o elogiou " +
      "publicamente na Oração 25. Secretamente, " +
      "Máximo conspirou com bispos egípcios enviados " +
      "por Pedro de Alexandria para ser ordenado " +
      "bispo de Constantinopla enquanto Gregório " +
      "estava doente. A ordenação foi tentada na " +
      "catedral, mas o povo enfurecido a interrompeu. " +
      "O escândalo foi enorme: Gregório havia sido " +
      "enganado por um impostor, e os egípcios " +
      "haviam tentado um golpe eclesiástico na " +
      "capital imperial.",
    partesEnvolvidas: [
      "Máximo o Cínico (o impostor)",
      "Gregório de Nazianzo (a vítima)",
      "Pedro de Alexandria (o mandante)",
      "Povo de Constantinopla (que impediu a ordenação)",
    ],
    resultado:
      "O Cânon 4 declarou nula a ordenação de Máximo " +
      "e todos os seus atos eclesiásticos. Máximo " +
      "desapareceu da história.",
    consequenciaDeLongoPrazo:
      "O episódio enfraqueceu a autoridade de Gregório " +
      "e contribuiu para sua renúncia. Também " +
      "azudou as tensões entre Constantinopla e " +
      "Alexandria, que culminariam no século V " +
      "com a rivalidade entre as duas sedes.",
    fontes: [
      "Gregório de Nazianzo, De Vita Sua",
      "Cânon 4 de Constantinopla I",
    ],
  },

  {
    id: 6,
    titulo: "A Recepção Fria do Ocidente (Sínodo de Roma, 382)",
    resumo:
      "O Papa Dâmaso e o Sínodo de Roma (382) reagiram " +
      "friamente aos resultados de Constantinopla, " +
      "questionando sua ecumenicidade e rejeitando o Cânon 3.",
    detalhes:
      "Quando as notícias de Constantinopla chegaram a " +
      "Roma, Dâmaso convocou um sínodo em 382 que " +
      "produziu o 'Tomo de Dâmaso' (ou 'Decretum " +
      "Gelasianum', embora a atribuição seja debatida). " +
      "O sínodo: (1) reafirmou a fé nicena, mas sem " +
      "mencionar Constantinopla; (2) rejeitou " +
      "implicitamente o Cânon 3 (primazia de " +
      "Constantinopla); (3) insistiu na primazia " +
      "de Roma baseada na sucessão de Pedro; " +
      "(4) não reconheceu Constantinopla como " +
      "concílio ecumênico. " +
      "A frieza de Roma era compreensível: eles " +
      "não haviam sido convidados, o Cânon 3 " +
      "ameaçava sua primazia, e a questão de " +
      "Antioquia havia sido resolvida contra " +
      "seu candidato (Paulino).",
    partesEnvolvidas: [
      "Papa Dâmaso I e o Sínodo de Roma",
      "Bispos orientais de Constantinopla",
      "Ambrósio de Milão (mediador entre Oriente e Ocidente)",
    ],
    resultado:
      "O Ocidente não reconheceu Constantinopla I como " +
      "ecumênico até Calcedônia (451), 70 anos depois.",
    consequenciaDeLongoPrazo:
      "A tensão entre Roma e Constantinopla, iniciada " +
      "pelo Cânon 3 e pela recepção fria de 382, " +
      "é a raiz do Grande Cisma de 1054.",
    fontes: [
      "Tomo de Dâmaso (382)",
      "Ambrósio de Milão, Epístola 13",
    ],
  },
];

export const resumoControversias =
  "Constantinopla I foi um concílio teologicamente bem-sucedido " +
  "(definiu a divindade do ES e completou a Trindade), mas " +
  "politicamente caótico. A morte de Melécio, a renúncia de " +
  "Gregório, o escândalo de Máximo, o cisma de Antioquia, " +
  "o Cânon 3 e a frieza de Roma mostram que a unidade " +
  "da Igreja no século IV era frágil e constantemente " +
  "ameaçada por rivalidades pessoais, jurisdicionais e " +
  "geopolíticas.";