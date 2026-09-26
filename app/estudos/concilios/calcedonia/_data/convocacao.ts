// estudos/concilios/calcedonia/_data/convocacao.ts

// ═══════════════════════════════════════════════════════
// ESTRUTURAS DE TIPOS
// ═══════════════════════════════════════════════════════

export interface Motivacao {
  titulo: string;
  descricao: string;
}

export interface Logistica {
  dataConvocacao: string;
  dataAbertura: string;
  dataEncerramento: string;
  localEscolhido: {
    edificio: string;
    cidade: string;
    razao: string;
    fonteTradicao: string;
  };
  mudancaDeLocal: {
    de: string;
    para: string;
    motivo: string;
  };
}

export interface ContextoImediato {
  titulo: string;
  descricao: string;
}

export interface TresFrentes {
  titulo: string;
  descricao: string;
  frentes: {
    nome: string;
    descricao: string;
    sessoes: string;
  }[];
}

export interface Convocacao {
  contextoImediato: ContextoImediato;
  logistica: Logistica;
  motivacoes: {
    teologica: Motivacao;
    politica: Motivacao;
    eclesial: Motivacao;
    jurisdicional: Motivacao;
    imperial: Motivacao;
    ocidental: Motivacao;
  };
  tresFrentes: TresFrentes;
}

// ═══════════════════════════════════════════════════════
// DADOS
// ═══════════════════════════════════════════════════════

export const convocacao: Convocacao = {
  // ─── CONTEXTO IMEDIATO ───
  contextoImediato: {
    titulo: "De 449 a 451: Dois Anos de Silêncio e Súplica",
    descricao:
      "Após o Latrocínio de Éfeso (agosto de 449), o Papa Leão I travou uma " +
      "batalha diplomática solitária contra o imperador Teodósio II. Entre " +
      "setembro de 449 e julho de 450, Leão enviou pelo menos 12 cartas a " +
      "Teodósio, a Pulquéria, ao clero de Constantinopla e aos bispos do " +
      "Oriente, exigindo a anulação do Latrocínio e a convocação de um novo " +
      "concílio — preferencialmente na Itália, onde a influência de Dioscoro " +
      "seria nula e o Tomo poderia ser lido sem impedimentos. Teodósio II " +
      "recusou todas as solicitações, respaldado por Crisáfio e pela facção " +
      "monofisita da corte. Em sua carta de resposta (Ep. 55, julho de 450), " +
      "Teodósio chegou a acusar Leão de 'perturbar a paz da Igreja' e " +
      "reafirmou que as decisões de Éfeso 449 eram definitivas. A situação " +
      "parecia irremediável — até a queda de cavalo de 28 de julho de 450 " +
      "mudar tudo em 24 horas.",
  },

  // ─── LOGÍSTICA ───
  logistica: {
    dataConvocacao: "17 de maio de 451 (édito imperial de Marciano)",
    dataAbertura: "8 de outubro de 451 (Sessão 1, Igreja de Santa Eufêmia)",
    dataEncerramento: "1 de novembro de 451 (Sessão 16, promulgação dos cânones)",

    localEscolhido: {
      edificio: "Igreja de Santa Eufêmia, Mártir",
      cidade: "Calcedônia, Bitínia (atual Kadıköy, Istambul)",
      razao:
        "A escolha de Calcedônia em vez de Niceia foi motivada por três " +
        "fatores práticos: (1) a ameaça de Átila, o Huno, na fronteira do " +
        "Danúbio, exigia que Marciano permanecesse perto de Constantinopla " +
        "para coordenar a defesa; (2) Calcedônia ficava a apenas 2 km da " +
        "capital (uma travessia de barco de 15 minutos pelo Bósforo), " +
        "permitindo que os comissários imperiais viajassem diariamente " +
        "entre o palácio e o concílio; (3) a Igreja de Santa Eufêmia era " +
        "uma basílica ampla, construída sobre o martyrium da santa, com " +
        "capacidade para mais de 600 pessoas — ideal para o maior concílio " +
        "da antiguidade. A mudança de Niceia para Calcedônia, porém, " +
        "alimentou as acusações dos monofisitas de que o concílio fora " +
        "'controlado pela corte' e não fora verdadeiramente 'ecumênico'.",
      fonteTradicao:
        "Evágrio Escolástico, Historia Ecclesiastica II.4; Teófanes, " +
        "Chronographia AM 5943; ACO II.1.1, pp. 1–5",
    },

    mudancaDeLocal: {
      de: "Niceia, Bitínia (local originalmente designado no édito de maio)",
      para: "Calcedônia, Bitínia (novo local designado em setembro de 451)",
      motivo:
        "A invasão de Átila na Gália (junho de 451) e a ameaça de uma " +
        "segunda invasão (que ocorreria na Itália em 452) tornaram " +
        "imprudente que o imperador se afastasse de Constantinopla. " +
        "Niceia ficava a ~130 km da capital (3–4 dias de viagem), " +
        "enquanto Calcedônia ficava a 2 km. A mudança foi comunicada " +
        "aos bispos em setembro, quando muitos já estavam a caminho " +
        "de Niceia, causando confusão logística significativa.",
    },
  },

  // ─── 6 MOTIVAÇÕES ───
  motivacoes: {
    teologica: {
      titulo: "Resolver a Crise Cristológica",
      descricao:
        "A motivação primária e declarada do concílio. A disputa entre " +
        "'uma natureza' (mia physis — Eutiques/Dioscoro) e 'duas naturezas' " +
        "(dyo physeis — Leão/Flavian) havia dividido a Igreja oriental em " +
        "facções irreconciliáveis. O Latrocínio de 449 impusera a fórmula " +
        "monofisita pela violência, mas não resolvera a questão teológica. " +
        "Era necessário um concílio legítimo que definisse dogmaticamente " +
        "a relação entre as naturezas divina e humana em Cristo, de forma " +
        "que tanto a tradição alexandrina (unidade) quanto a antioquena " +
        "(dualidade) fossem preservadas. A Definição de Calcedônia seria " +
        "a resposta: 'em duas naturezas, sem confusão, sem mudança, sem " +
        "divisão, sem separação'.",
    },

    politica: {
      titulo: "Consolidar o Novo Regime de Marciano e Pulquéria",
      descricao:
        "Marciano e Pulquéria haviam chegado ao poder há menos de um ano " +
        "(agosto de 450) e precisavam de um gesto grandioso que legitimasse " +
        "seu reinado perante a Igreja, o Senado, o exército e o povo. " +
        "Convocar um concílio ecumênico — o quarto da história — era o " +
        "equivalente político de uma coroação teológica: demonstrava que " +
        "o novo casal imperial era o defensor da ortodoxia, em contraste " +
        "com o 'herético' Teodósio II e o 'corrupto' Crisáfio. A " +
        "comparação com Constantino (que convocara Niceia em 325) era " +
        "deliberada e explícita: na 6ª sessão, os bispos aclamaram " +
        "'Marciano é o novo Constantino!'.",
    },

    eclesial: {
      titulo: "Reparar o Latrocínio e Reabilitar os Mártires",
      descricao:
        "O Latrocínio de 449 era uma ferida aberta no corpo da Igreja. " +
        "Flavian de Constantinopla estava morto (martirizado), Eusébio " +
        "de Dorileu estava exilado, o Tomo de Leão fora silenciado, e " +
        "centenas de bispos haviam sido coagidos a assinar atas em " +
        "branco. A Igreja oriental vivia sob o trauma da violência " +
        "de Dioscoro e de seus monges armados. Calcedônia foi " +
        "convocado especificamente para anular o Latrocínio, reabilitar " +
        "Flavian (cujos restos foram transladados para Constantinopla " +
        "com honras de mártir em 450), julgar Dioscoro e restaurar " +
        "a confiança na legitimidade dos concílios ecumênicos.",
    },

    jurisdicional: {
      titulo: "Reequilibrar o Mapa Eclesiástico do Oriente",
      descricao:
        "A crise cristológica havia desestabilizado a hierarquia " +
        "eclesiástica. Dioscoro de Alexandria tentara usar o " +
        "Latrocínio para impor a supremacia de Alexandria sobre " +
        "Constantinopla e Antioquia, depondo bispos e nomeando " +
        "substitutos monofisitas. Era necessário reorganizar as " +
        "jurisdições patriarcais e reafirmar os limites diocesanos " +
        "estabelecidos pelos cânones anteriores (especialmente o " +
        "Cânon 2 de Constantinopla I, 381). Calcedônia resolveria " +
        "estas questões nas sessões administrativas (7–16), " +
        "incluindo a elevação de Jerusalém a patriarcado e a " +
        "disputada primazia de Constantinopla (Cânon 28).",
    },

    imperial: {
      titulo: "Demonstrar a Symphonia entre Igreja e Estado",
      descricao:
        "Para Marciano e Pulquéria, o concílio era uma oportunidade " +
        "de demonstrar o ideal da 'symphonia' — a harmonia entre " +
        "o poder imperial e a autoridade eclesiástica. O imperador " +
        "convocava, organizava e protegia o concílio; os bispos " +
        "debatiam e definiam a doutrina; o imperador confirmava " +
        "as decisões e as transformava em lei civil. Este modelo " +
        "de cooperação (em teoria, se não sempre na prática) " +
        "tornar-se-ia o paradigma da relação Igreja-Estado no " +
        "Império Bizantino por mil anos. A presença pessoal de " +
        "Marciano e Pulquéria na 6ª sessão foi a encenação " +
        "suprema desta symphonia.",
    },

    ocidental: {
      titulo: "Atender ao Pedido do Papa Leão Magno",
      descricao:
        "Leão I vinha insistindo em um novo concílio desde setembro " +
        "de 449. Embora preferisse que fosse realizado na Itália " +
        "(para maximizar a influência romana e minimizar a " +
        "interferência imperial), Leão aceitou pragmaticamente a " +
        "proposta de Marciano de realizá-lo no Oriente, desde que " +
        "três condições fossem atendidas: (1) o Tomo deveria ser " +
        "lido e aceito como norma de fé; (2) Dioscoro deveria ser " +
        "julgado como acusado, não como presidente; (3) os legados " +
        "papais deveriam presidir o concílio em nome do bispo de " +
        "Roma. Marciano aceitou as duas primeiras condições; a " +
        "terceira foi parcialmente atendida (os legados presidiram " +
        "as sessões doutrinárias, mas os comissários imperiais " +
        "controlaram a agenda).",
    },
  },

  // ─── AS TRÊS FRENTES DO CONCÍLIO ───
  tresFrentes: {
    titulo: "As Três Frentes do Concílio de Calcedônia",
    descricao:
      "Calcedônia não foi um concílio com um único objetivo, mas uma " +
      "assembleia com três missões simultâneas e interligadas, que " +
      "corresponderam grosso modo às diferentes fases dos trabalhos. " +
      "A primeira frente era retrospectiva (julgar o passado); a " +
      "segunda era dogmática (definir o presente); a terceira era " +
      "disciplinar (organizar o futuro). A complexidade de Calcedônia " +
      "decorre precisamente desta sobreposição de funções: tribunal, " +
      "assembleia teológica e parlamento eclesiástico, tudo ao mesmo " +
      "tempo, sob a pressão do relógio imperial e da ameaça de Átila.",

    frentes: [
      {
        nome: "1ª Frente: Julgar o Passado (O Latrocínio de 449)",
        descricao:
          "A primeira e mais urgente tarefa do concílio foi anular o " +
          "Latrocínio de Éfeso (449) e julgar seus responsáveis. Isto " +
          "envolveu: (a) a leitura pública das atas do Latrocínio, " +
          "durante a qual os bispos que participaram dele foram " +
          "chamados a explicar seu voto (muitos alegaram coerção e " +
          "assinatura em branco); (b) o julgamento de Dioscoro de " +
          "Alexandria, acusado de heresia (eutiquianismo), de " +
          "violência contra Flavian e de irregularidades canônicas; " +
          "(c) a reabilitação póstuma de Flavian e de Eusébio de " +
          "Dorileu; (d) a reabilitação de Teodoreto de Ciro e Ibas " +
          "de Edessa, depostos no Latrocínio. Esta frente dominou " +
          "as sessões 1–3 e parte da 4ª.",
        sessoes: "Sessões 1–3 (8–13 de outubro de 451)",
      },
      {
        nome: "2ª Frente: Definir o Presente (A Cristologia)",
        descricao:
          "A segunda e mais importante tarefa foi a definição " +
          "dogmática da fé cristológica. Após o julgamento de " +
          "Dioscoro, o concílio precisava formular uma declaração " +
          "positiva que sintetizasse as tradições de Niceia (325), " +
          "Constantinopla (381), Éfeso (431) e o Tomo de Leão " +
          "(449). Esta tarefa revelou-se mais difícil do que o " +
          "julgamento: muitos bispos orientais resistiram à ideia " +
          "de uma 'nova fórmula', insistindo que o Credo de Niceia " +
          "era suficiente. A pressão dos comissários imperiais e " +
          "dos legados papais foi necessária para forçar a " +
          "elaboração da Definição. Uma comissão de 22 bispos " +
          "foi nomeada para redigir o texto, que passou por " +
          "várias versões antes de ser aprovado na 5ª sessão " +
          "e solenemente proclamado na 6ª.",
        sessoes: "Sessões 2, 4–6 (10–25 de outubro de 451)",
      },
      {
        nome: "3ª Frente: Organizar o Futuro (Cânones e Jurisdição)",
        descricao:
          "A terceira tarefa foi a promulgação de cânones " +
          "disciplinares e a reorganização da geografia " +
          "eclesiástica do Oriente. Esta frente, menos " +
          "espetacular mas de consequências duradouras, " +
          "incluiu: (a) a promulgação de 27 cânones " +
          "disciplinares sobre ordenações, simonia, " +
          "monges, clérigos e jurisdição; (b) a resolução " +
          "da disputa entre Jerusalém e Antioquia (Sessão 7), " +
          "elevando Jerusalém a patriarcado; (c) a resolução " +
          "de disputas jurisdicionais menores (Tiro vs. " +
          "Berito, etc.); (d) o controverso Cânon 28, que " +
          "concedeu a Constantinopla 'privilégios iguais' " +
          "aos de Roma — rejeitado pelos legados papais " +
          "e nunca ratificado por Leão I.",
        sessoes: "Sessões 7–16 (17 de outubro – 1 de novembro de 451)",
      },
    ],
  },
};