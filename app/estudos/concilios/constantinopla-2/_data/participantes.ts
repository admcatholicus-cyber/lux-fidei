// app/estudos/concilios/constantinopla-2/_data/participantes.ts

export interface BispoParticipante {
  nome: string;
  se: string;
  patriarcadoOuRegiao: string;
  funcao?: string;
  papel: string;
  detalhes?: string;
}

export interface GrupoParticipantes {
  categoria: string;
  descricao: string;
  quantidadeAprox: string;
  bisposNotaveis: BispoParticipante[];
}

export interface AusenciaNotavel {
  nome: string;
  titulo: string;
  regiao: string;
  motivo: string;
  impactoHistorico: string;
}

export interface FatorMonofisita {
  titulo: string;
  contexto: string;
  coloquio532: {
    data: string;
    participantes: string;
    resultado: string;
  };
  hierarquiaParalela: {
    lider: string;
    movimento: string;
    consequencias: string;
  };
  influenciaNaPauta: string;
  reacaoNaoCalcedonianaAoConcilio: string;
}

export const totalParticipantes = {
  abertura: 152,
  encerramento: 168,
  patriarcadosPresentes: 4,
  patriarcasPresentesFisicamente: 3, // Eutíquio (Constantinopla), Apolinário (Alexandria), Domnino (Antioquia); Jerusalém por legados
  proporcaoOrienteOcidente: "Aproximadamente 95% Oriente / 5% Ocidente",
  resumoEstatistico:
    "Na sessão de abertura (5 de maio de 553), estavam presentes 152 bispos, número que subiu gradativamente até 168 na oitava e última sessão (2 de junho de 553). Geograficamente, o sínodo foi quase que exclusivamente oriental: apenas 8 a 10 bispos procediam do Ocidente latino (quase todos da África Proconsular subordinados à política militar bizantina). Roma, o Norte da Itália (Milão e Aquileia), a Gália, a Hispânia e a Ilíria não contavam com representação conciliar legítima, tornando o conclave extremamente desequilibrado em sua composição humana, embora plenamente ecumênico em sua confirmação teológica posterior.",
};

export const participantes: GrupoParticipantes[] = [
  {
    categoria: "Presidência e Chefias Patriarcais",
    descricao:
      "A liderança máxima do concílio foi exercida conjuntamente pelos patriarcas orientais comungantes com o imperador Justiniano I.",
    quantidadeAprox: "4 delegações patriarcais",
    bisposNotaveis: [
      {
        nome: "Eutíquio de Constantinopla",
        se: "Patriarcado de Constantinopla (Nova Roma)",
        patriarcadoOuRegiao: "Constantinopla",
        funcao: "Presidente do Concílio",
        papel:
          "Presidiu todas as oito sessões conciliares após a recusa definitiva do Papa Vigílio em comparecer. Havia sido consagrado patriarca em agosto de 552 após a morte de Menas.",
        detalhes:
          "Monge e teólogo fervoroso, homem de confiança de Justiniano, redigiu os decretos formais e conduziu o processo sinodal com rigor processual.",
      },
      {
        nome: "Apolinário de Alexandria",
        se: "Patriarcado de Alexandria",
        patriarcadoOuRegiao: "Egito",
        funcao: "Patriarca Melquita de Alexandria",
        papel:
          "Segunda autoridade em precedência. Instalado pelo poder imperial em 551 para manter o controle calcedoniano na capital egípcia contra a esmagadora maioria miáfisita.",
        detalhes:
          "Apoiou incondicionalmente a condenação dos Três Capítulos como instrumento para tentar atrair os teodosianos alexandrinos.",
      },
      {
        nome: "Domnino (Domnus III) de Antioquia",
        se: "Patriarcado de Antioquia",
        patriarcadoOuRegiao: "Oriente",
        funcao: "Patriarca de Antioquia",
        papel:
          "Terceira autoridade em precedência. Sucedeu ao patriarca Efrém de Antioquia em 546 e sustentou a aplicação integral das ordens justinianéias na Síria calcedoniana.",
        detalhes:
          "Representou o episcopado da diocese civil do Oriente, que historicamente havia sido o berço da teologia antioquena de Teodoro e Teodoreto.",
      },
      {
        nome: "Estêvão de Ráfia, Jorge de Tiberíades e Damião de Sozusa",
        se: "Patriarcado de Jerusalém",
        patriarcadoOuRegiao: "Palestina",
        funcao: "Legados do Patriarca Eustóquio de Jerusalém",
        papel:
          "Representaram o patriarca recém-eleito Eustóquio (que substituiu o falecido Pedro de Jerusalém em 552).",
        detalhes:
          "Assinaram todos os autos e anátemas em nome da Igreja de Jerusalém e do monasticismo palestino.",
      },
    ],
  },
  {
    categoria: "O Núcleo Teológico e Conselheiros Imperiais",
    descricao:
      "Prelados eruditos que formavam a equipe de assessoria doutrinária direta do imperador Justiniano e redigiram o material preparatório das sessões.",
    quantidadeAprox: "6 bispos líderes",
    bisposNotaveis: [
      {
        nome: "Teodoro Ascidas",
        se: "Cesareia da Capadócia",
        patriarcadoOuRegiao: "Ponto",
        funcao: "Arcebispo Metropolita e Conselheiro Imperial",
        papel:
          "O verdadeiro cérebro político-teológico por trás do decreto imperial dos Três Capítulos (544). Origenista moderado na juventude, manipulou a corte bizantina para desviar as atenções da controvérsia origenista em direção à condenação de Teodoro de Mopsuéstia.",
        detalhes:
          "Manteve residência permanente no palácio imperial de Constantinopla e coordenou o interrogatório dos textos heréticos durante o concílio.",
      },
      {
        nome: "Megas de Heracleia",
        se: "Heracleia da Trácia",
        patriarcadoOuRegiao: "Trácia",
        funcao: "Metropolita Primaz da Trácia",
        papel:
          "Histórico bispo sênior que tradicionalmente conferia a sagração ao patriarca de Constantinopla; atuou na validação canônica de todos os atos processuais.",
      },
      {
        nome: "Basso de Zeugma",
        se: "Zeugma no Eufrates",
        patriarcadoOuRegiao: "Síria / Eufratense",
        funcao: "Bispo Metropolitano",
        papel:
          "Especialista nos registros dos arquivos de Edessa e Antioquia; apresentou as evidências documentais das cartas de Ibas de Edessa.",
      },
    ],
  },
  {
    categoria: "A Pequena Delegação Ocidental / Africana",
    descricao:
      "Apenas um diminuto grupo de prelados ocidentais esteve presente no salão conciliar, quase todos provenientes de dioceses norte-africanas submetidas à força militar do general Belisário e do governador imperial.",
    quantidadeAprox: "8 bispos",
    bisposNotaveis: [
      {
        nome: "Sextiliano de Túnis",
        se: "Túnis (Bizacena)",
        patriarcadoOuRegiao: "Norte da África",
        funcao: "Bispo Africano Pró-Imperial",
        papel:
          "Porta-voz do minúsculo grupo de clérigos africanos que aceitou assinar a condenação dos Três Capítulos contrariando a maioria do sínodo de Cartago.",
        detalhes:
          "Afirmou agir com autoridade delegada de seus pares locais, embora o grosso do clero cartaginês estivesse em revolta contra Justiniano.",
      },
      {
        nome: "Teodoro de Cebarades",
        se: "Cebarades (Bizacena)",
        patriarcadoOuRegiao: "Norte da África",
        funcao: "Bispo da Província Bizacena",
        papel:
          "Subscreveu todas as sentenças e anátemas contra Teodoro, Teodoreto e Ibas.",
      },
      {
        nome: "Benigno de Heracleia da Pelagônia",
        se: "Heracleia (Macedônia/Ilíria)",
        patriarcadoOuRegiao: "Ilíria Oriental (jurisdição papal nominal)",
        funcao: "Metropolita da Ilíria",
        papel:
          "Um dos raros bispos da Ilíria que aceitou comparecer, rompendo a solidariedade de sua província com o bispo de Roma.",
      },
    ],
  },
  {
    categoria: "Corpo Episcopal Geral (Ásia Menor, Ponto, Trácia e Oriente)",
    descricao:
      "A imensa massa conciliar composta por arcebispos metropolitanos e bispos sufragâneos das províncias imperiais do Império Romano do Oriente.",
    quantidadeAprox: "Mais de 140 bispos",
    bisposNotaveis: [
      {
        nome: "André de Éfeso",
        se: "Arquidiocese de Éfeso",
        patriarcadoOuRegiao: "Diocese da Ásia",
        papel:
          "Comandou o numeroso contingente de bispos da província asiática, alinhado à estrita ortodoxia cirilina calcedoniana.",
      },
      {
        nome: "Eustáquio de Nicomédia",
        se: "Nicomédia",
        patriarcadoOuRegiao: "Bitínia",
        papel:
          "Membro proeminente do episcopado bitínio com assento fixo no tribunal de verificação de autenticidade dos escritos patrísticos.",
      },
    ],
  },
];

export const ausencias: AusenciaNotavel[] = [
  {
    nome: "Vigílio, Bispo de Roma",
    titulo: "Papa da Igreja Católica / Bispo de Roma (537–555)",
    regiao: "Roma / Ocidente Latino (presente fisicamente em Constantinopla)",
    motivo:
      "Embora residisse no Palácio de Placídia em Constantinopla, recusou-se categoricamente a sentar-se no concílio. Exigiu que o sínodo fosse realizado na Itália ou que contasse com número rigorosamente igual de bispos latinos e gregos. Emitiu, no decorrer do concílio, o seu documento 'Constitutum I' (14 de maio de 553), proibindo qualquer condenação póstuma de Teodoro de Mopsuéstia e defendendo a ortodoxia de Teodoreto e Ibas.",
    impactoHistorico:
      "O concílio prosseguiu sem a sua presença. Na sétima sessão, Eutíquio e Justiniano ordenaram a remoção do nome de Vigílio dos dípticos litúrgicos da Igreja, estabelecendo uma ruptura de comunhão pessoal com o papa sem romper com a Sé Romana — ato sem precedentes na história ecumênica.",
  },
  {
    nome: "Facundo de Hermiane",
    titulo: "Bispo de Hermiane e Maior Teólogo Latino da Época",
    regiao: "África Proconsular (Bizacena)",
    motivo:
      "Líder intelectual da resistência ocidental à política teológica de Justiniano. Redigiu a célebre obra 'Pro Defensione Trium Capitulorum' (546–548) em 12 livros. Entrou na clandestinidade em Constantinopla e fugiu para o deserto líbio para não ser preso pela guarda imperial.",
    impactoHistorico:
      "Seus tratados demonstraram que a condenação dos Três Capítulos destruía a autoridade jurídica e dogmática do Concílio de Calcedônia, alimentando a resistência africana por mais de cinquenta anos.",
  },
  {
    nome: "Dácio de Milão (Datius Mediolanensis)",
    titulo: "Arcebispo de Milão",
    regiao: "Norte da Itália (Ligúria)",
    motivo:
      "Companheiro de exílio do Papa Vigílio em Constantinopla. Recusou qualquer compromisso com Teodoro Ascidas e os gregos. Faleceu em Constantinopla no início de 552, pouco antes da abertura solene do sínodo.",
    impactoHistorico:
      "Sua morte privou o Ocidente de seu diplomata mais respeitado. Seu sucessor em Milão, Vitalis, e o arcebispo Macedônio de Aquileia romperam imediatamente a comunhão com Roma e Constantinopla, iniciando o Cisma Tricapitulino.",
  },
  {
    nome: "Reparato de Cartago",
    titulo: "Arcebispo Primaz de Cartago e África",
    regiao: "Cartago / África",
    motivo:
      "Convocou em 550 o Concílio de Cartago que excomungou solenemente o Papa Vigílio por sua fraqueza no Iudicatum de 548. Em represália, Justiniano ordenou sua prisão, transporte forçado para Constantinopla e deposição imperial em 551, exilando-o na cidade de Eucárpia (Frígia), onde morreu.",
    impactoHistorico:
      "Sua sé foi usurpada pelo diácono pró-bizantino Primoso, imposto pelo exército, gerando revolta aberta no clero cartaginês.",
  },
  {
    nome: "Episcopado da Ilíria, Dácia e Dalmácia",
    titulo: "Bispos Metropolitanos e Provinciais da Ilíria",
    regiao: "Ilírico Ocidental e Oriental",
    motivo:
      "Boicotaram deliberadamente a convocação imperial. Consideravam Calcedônia intangível e viam na anatemização póstuma dos autores antioquenos uma subserviência inaceitável às chantagens dos monofisitas da Síria e Egito.",
    impactoHistorico:
      "Permaneceram em cisma aberto com Constantinopla por décadas, recusando as atas de 553 até o pontificado de Gregório Magno.",
  },
  {
    nome: "Episcopado da Gália e Península Ibérica",
    titulo: "Bispos Merovíngios e Hispano-Visigóticos",
    regiao: "Reinos Francos e Visigóticos",
    motivo:
      "Não foram notificados em tempo hábil nem demonstraram interesse em disputas imperiais bizantinas. Mantiveram sua lealdade exclusiva à memória pura dos quatro primeiros concílios ecumênicos.",
    impactoHistorico:
      "O Reino Franco passou a desconfiar da ortodoxia do papado nos anos seguintes, exigindo cartas explicativas de Pelágio I e Pelágio II.",
  },
];

export const monofisitas: FatorMonofisita = {
  titulo: "O Fator Miáfisita / Não-Calcedoniano no Concílio",
  contexto:
    "Embora nenhum bispo abertamente miáfisita (partidário de Severo de Antioquia ou Teodósio de Alexandria) tenha tomado assento formal no Concílio de 553 — visto que recusavam aceitar o cânon de Calcedônia como ponto de partida —, todo o propósito geopolítico e teológico do Concílio de Constantinopla II foi planejado por Justiniano I para reintegrar as massas não-calcedonianas do Egito, Síria e Armênia ao corpo do Império Romano.",
  coloquio532: {
    data: "532 d.C. (Palácio de Hormisdas, Constantinopla)",
    participantes:
      "Seis bispos calcedonianos (liderados por Hipácio de Éfeso) contra seis bispos severianos miáfisitas.",
    resultado:
      "Os miáfisitas colocaram como condição absoluta para a reconciliação a anatemização formal de Teodoro de Mopsuéstia, Teodoreto de Ciro e Ibas de Edessa, acusando Calcedônia de tê-los reabilitado indevidamente. O concílio de 553 foi a execução direta da demanda apresentada em 532.",
  },
  hierarquiaParalela: {
    lider: "Tiago Baradeu (Jacob Baradaeus / Ya'qub Burde'ana)",
    movimento: "Igreja Ortodoxa Síria (Jacobita)",
    consequencias:
      "Entre 542 e 553, com a cumplicidade secreta da Imperatriz Teodora, Baradeu viajou disfarçado de mendigo pelo Oriente Próximo sagrando secretamente dezenas de bispos e milhares de sacerdotes miáfisitas, fundando uma hierarquia eclesiástica paralela definitiva e tornando irreversível a separação das igrejas orientais.",
  },
  influenciaNaPauta:
    "Justiniano percebeu que, se não fizesse uma concessão dogmática monumental demonstrando que a Igreja Imperial rejeitava o nestorianismo radical até as últimas consequências (eliminando a memória de Teodoro e as cartas de Teodoreto e Ibas), o Egito e a Síria seriam perdidos espiritualmente para sempre. O concílio foi redigido em chave rigorosamente cirilina para atender a essa exigência.",
  reacaoNaoCalcedonianaAoConcilio:
    "Apesar da condenação dos Três Capítulos e da aprovação dos 14 anátemas ultracirilinos, os miáfisitas rejeitaram o concílio. Para eles, condenar os três homens mantendo a autoridade do Tomo de Leão e da fórmula das 'duas naturezas' de Calcedônia era uma contradição hipócrita do imperador bizantino. O cisma, portanto, permaneceu consumado.",
};