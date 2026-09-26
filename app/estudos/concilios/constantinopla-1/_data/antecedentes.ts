/**
 * ANTECEDENTES DO CONCÍLIO DE CONSTANTINOPLA I (325–381 d.C.)
 * Cobertura exaustiva dos 56 anos entre Niceia e Constantinopla.
 */

export interface EventoHistorico {
  ano: string;
  titulo: string;
  descricao: string;
  importancia: string;
  fontes?: string[];
}

export interface PeriodoHistorico {
  periodo: string;
  titulo: string;
  descricaoGeral: string;
  eventos: EventoHistorico[];
}

export const antecedentes: PeriodoHistorico[] = [
  // =============================================
  // PERÍODO 1: PÓS-NICEIA IMEDIATO (325–337)
  // =============================================
  {
    periodo: "325–337",
    titulo: "O Pós-Niceia Imediato e o Reinado de Constantino",
    descricaoGeral:
      "Apesar de Niceia ter definido o homoousios, o arianismo não desapareceu. " +
      "Constantino, buscando unidade política, oscilou entre nicenos e arianos moderados. " +
      "Atanásio de Alexandria, o grande defensor de Niceia, foi exilado cinco vezes ao longo da vida. " +
      "Eusébio de Nicomédia, ariano convicto, conseguiu retornar do exílio e ganhar influência na corte imperial.",
    eventos: [
      {
        ano: "325",
        titulo: "Concílio de Niceia",
        descricao:
          "Primeiro Concílio Ecumênico. Define o homoousios (consubstancialidade) do Filho com o Pai. " +
          "Ário e dois bispos que recusaram assinar são exilados. O Credo de Niceia é promulgado. " +
          "Porém, o Credo diz apenas 'e no Espírito Santo' — sem desenvolvimento pneumatológico.",
        importancia:
          "Base de tudo que virá. A omissão sobre o Espírito Santo deixará uma lacuna que Constantinopla precisará preencher 56 anos depois.",
        fontes: ["Atanásio, De Decretis", "Eusébio de Cesareia, Carta à sua diocese"],
      },
      {
        ano: "327–328",
        titulo: "Retorno dos Arianos do Exílio",
        descricao:
          "Constantino, pressionado por sua irmã Constância (simpatizante ariana), permite o retorno de " +
          "Eusébio de Nicomédia e Teógnis de Niceia. Eusébio rapidamente se torna o bispo mais influente da corte.",
        importancia:
          "Marca o início da 'reação ariana' que dominará as décadas seguintes. O partido ariano ganha acesso direto ao imperador.",
      },
      {
        ano: "328",
        titulo: "Atanásio torna-se Bispo de Alexandria",
        descricao:
          "Com a morte de Alexandre de Alexandria, seu diácono Atanásio — o grande campeão de Niceia — " +
          "assume o patriarcado aos ~30 anos. Será o principal defensor da ortodoxia nicena por 45 anos.",
        importancia:
          "Atanásio se tornará o símbolo da resistência nicena. Seus 5 exílios e seus escritos teológicos " +
          "serão fundamentais para a sobrevivência da fé de Niceia.",
      },
      {
        ano: "335",
        titulo: "Concílio de Tiro e Primeiro Exílio de Atanásio",
        descricao:
          "Eusébio de Nicomédia convoca um sínodo em Tiro que depõe Atanásio sob acusações falsas " +
          "(incluindo a de ter assassinado o bispo Arsênio — que apareceu vivo no julgamento!). " +
          "Atanásio é exilado para Tréveris, na Gália.",
        importancia:
          "Demonstra como o partido ariano manipulava concílios regionais para eliminar adversários nicenos.",
      },
      {
        ano: "337",
        titulo: "Morte de Constantino e Batismo Ariano",
        descricao:
          "Constantino morre em 22 de maio de 337, batizado no leito de morte por Eusébio de Nicomédia, " +
          "um bispo ariano. O Império é dividido entre seus três filhos: Constantino II (Ocidente), " +
          "Constâncio II (Oriente) e Constante (Itália/Ilíria).",
        importancia:
          "A morte de Constantino remove o freio que mantinha arianos e nicenos em equilíbrio precário. " +
          "Constâncio II, ariano convicto, herdará o Oriente e iniciará a perseguição sistemática aos nicenos.",
      },
    ],
  },

  // =============================================
  // PERÍODO 2: A ERA ARIANA (337–361)
  // =============================================
  {
    periodo: "337–361",
    titulo: "A Era Ariana: Constâncio II e a Perseguição Nicena",
    descricaoGeral:
      "Sob Constâncio II, o arianismo se torna a teologia 'oficial' do Império. " +
      "Dezenas de sínodos regionais produzem fórmulas de compromisso que evitam o termo homoousios. " +
      "Atanásio é exilado repetidamente. Hilário de Poitiers, o 'Atanásio do Ocidente', também é exilado. " +
      "O auge da crise ocorre em 359–360, quando fórmulas arianas são impostas a todo o Império.",
    eventos: [
      {
        ano: "338–341",
        titulo: "Segundo Exílio de Atanásio e Sínodo de Antioquia",
        descricao:
          "Constâncio II confirma a deposição de Atanásio. Gregório da Capadócia é instalado como " +
          "bispo de Alexandria pela força militar. O Sínodo de Antioquia (341), na Dedicação da " +
          "basílica dourada, produz quatro fórmulas de fé que rejeitam o homoousios sem abraçar " +
          "o arianismo radical — o chamado 'arianismo político' ou 'eusebiano'.",
        importancia:
          "Essas fórmulas 'intermediárias' confundiram muitos bispos que não percebiam a sutileza " +
          "da diferença entre homoousios e homoiousios.",
      },
      {
        ano: "343",
        titulo: "Concílio de Sárdica — Fracasso da Reconciliação",
        descricao:
          "Tentativa de concílio conjunto Oriente-Ocidente em Sárdica (atual Sófia, Bulgária). " +
          "Os orientais (arianos) e ocidentais (nicenos) se recusam a sentar juntos. " +
          "Os ocidentais reafirmam Niceia e absolvem Atanásio; os orientais se retiram para " +
          "Filipópolis e emitem contra-condenações.",
        importancia:
          "Primeira grande ruptura entre Oriente e Ocidente. Prenúncio do Grande Cisma de 1054. " +
          "Mostra que a questão não era apenas teológica, mas também cultural e jurisdicional.",
      },
      {
        ano: "351",
        titulo: "Primeiro Sínodo de Sirmium",
        descricao:
          "Sínodo convocado por Constâncio II em Sirmium (atual Sremska Mitrovica, Sérvia). " +
          "Condena Fotino de Sirmium (adocionista) e produz uma fórmula que evita tanto " +
          "homoousios quanto homoiousios, usando linguagem vagamente subordinacionista.",
        importancia:
          "Início da série de 'fórmulas de Sirmium' que tentarão encontrar um meio-termo " +
          "impossível entre arianos e nicenos.",
      },
           {
        ano: "356–357",
        titulo: "Terceiro Exílio de Atanásio e o 'Credo Blasfemo'",
        descricao:
          "Atanásio é expulso de Alexandria por tropas imperiais durante a liturgia (!). " +
          "Foge para o deserto egípcio, onde vive com os monges por 6 anos. " +
          "Em 357, o Segundo Sínodo de Sirmium produz o " +
          "'Credo Blasfemo' (como o chamou Hilário de Poitiers), que proíbe explicitamente " +
          "os termos ousia, homoousios e homoiousios, declarando que o Filho é " +
          "'subordinado' ao Pai.",
        importancia:
          "O ponto mais baixo da crise ariana. Hilário de Poitiers escreve seu furioso " +
          "'De Synodis' contra essa fórmula. A proibição de toda linguagem de 'essência' " +
          "revolta tanto nicenos quanto homoiousianos.",
      },
      {
        ano: "358",
        titulo: "Sínodo de Ancira e o Partido Homoiousiano",
        descricao:
          "Basílio de Ancira (não o Grande!) lidera um grupo de bispos que defendem " +
          "o termo homoiousios ('de essência semelhante') como alternativa ao homoousios. " +
          "Embora rejeitado pelos nicenos ortodoxos, o partido homoiousiano será crucial " +
          "mais tarde: muitos de seus membros migrarão para a ortodoxia nicena.",
        importancia:
          "Os homoiousianos são o 'elo perdido' entre arianos e nicenos. A famosa piada " +
          "de que a fé cristã dependia de um 'iota' (homoousios vs homoiousios) nasce aqui. " +
          "Mas a diferença, embora sutil linguisticamente, era teologicamente abismal.",
      },
      {
        ano: "359",
        titulo: "Terceiro Sínodo de Sirmium e o Sínodo Duplo (Rimini-Selêucia)",
        descricao:
          "Em 22 de maio de 359, o Terceiro Sínodo de Sirmium produz a famosa 'Fórmula Datada', " +
          "que diz apenas que o Filho é 'semelhante ao Pai segundo as Escrituras' (homoios), " +
          "banindo a palavra ousia. Constâncio II então convoca dois sínodos simultâneos para impô-la a todo o Império: " +
          "Rimini (Ocidente, ~400 bispos) e Selêucia (Oriente, ~150 bispos). Sob pressão imperial brutal, ambos aceitam a fórmula.",
        importancia:
          "O auge do triunfo ariano. Aparentemente, Niceia foi derrotada. " +
          "Jerônimo escreverá depois: 'O mundo inteiro gemeu e se espantou ao ver-se ariano.' " +
          "Mas a coerção imperial gerou uma reação que se revelaria fatal para o arianismo.",
      },
      {
        ano: "360",
        titulo: "Concílio de Constantinopla (360) e o Homoianismo",
        descricao:
          "Sínodo em Constantinopla confirma a fórmula de Rimini-Selêucia e instala " +
          "Eudóxio de Antioquia como bispo de Constantinopla. O 'homoianismo' " +
          "(semelhante, sem menção a essência) torna-se a teologia oficial do Império. " +
          "Todos os termos técnicos (ousia, hypostasis) são banidos.",
        importancia:
          "O homoianismo será a posição 'oficial' até 381. Teodósio precisará desmantelar " +
          "toda essa estrutura ao convocar Constantinopla I.",
      },
    ],
  },

  // =============================================
  // PERÍODO 3: JULIANO E A BREVE PAUSA (361–363)
  // =============================================
  {
    periodo: "361–363",
    titulo: "Juliano o Apóstata e a Liberdade Religiosa Forçada",
    descricaoGeral:
      "Juliano, sobrinho de Constantino, rejeita o cristianismo e tenta restaurar o paganismo. " +
      "Paradoxalmente, sua política de 'tolerância' permite que todos os bispos exilados retornem, " +
      "incluindo Atanásio. Isso dá fôlego ao partido niceno para se reorganizar.",
    eventos: [
      {
        ano: "361",
        titulo: "Ascensão de Juliano e Retorno dos Exilados",
        descricao:
          "Juliano assume o trono e emite édito de tolerância religiosa. Todos os bispos " +
          "exilados por Constâncio são libertados, incluindo Atanásio (que retorna a Alexandria " +
          "pela 4ª vez). Hilário retorna da Gália. A intenção de Juliano é que os cristãos " +
          "se destruam mutuamente em disputas internas.",
        importancia:
          "Ironicamente, a perseguição pagã uniu temporariamente nicenos e semi-arianos " +
          "contra um inimigo comum. Atanásio usa esse período para escrever e articular alianças.",
      },
      {
        ano: "362",
        titulo: "Sínodo de Alexandria e a Grande Reconciliação",
        descricao:
          "Atanásio convoca um sínodo em Alexandria que produz o 'Tomo aos Antioquenos', " +
          "um documento genial que aceita tanto os que falam de 'uma hypostasis' (ocidentais) " +
          "quanto os que falam de 'três hypostaseis' (orientais), desde que ambos " +
          "confessem uma ousia e a divindade plena do Filho E do Espírito Santo.",
        importancia:
          "Este é o documento-chave que prepara o terreno para os Capadócios. " +
          "Atanásio resolve a confusão terminológica Oriente-Ocidente e, crucialmente, " +
          "insiste pela primeira vez num concílio que a divindade do Espírito Santo " +
          "também precisa ser confessada. A semente de Constantinopla é plantada aqui.",
        fontes: ["Atanásio, Tomus ad Antiochenos"],
      },
      {
        ano: "363",
        titulo: "Morte de Juliano na Pérsia",
        descricao:
          "Juliano morre em campanha contra os persas (26 de junho de 363), " +
          "supostamente dizendo 'Venceste, Galileu!' (embora isso seja provavelmente lenda). " +
          "Seu sucessor Joviano, niceno, restaura brevemente o apoio à fé de Niceia.",
        importancia:
          "O fim da tentativa pagã. O cristianismo volta a ser a religião favorecida, " +
          "mas a questão ariana permanece sem resolução.",
      },
    ],
  },

  // =============================================
  // PERÍODO 4: VALENTE E A PERSEGUIÇÃO FINAL (364–378)
  // =============================================
  {
    periodo: "364–378",
    titulo: "Valente, os Padres Capadócios e a Resistência Nicena",
    descricaoGeral:
      "Valente (Oriente, 364–378) é o último imperador ariano. Sua perseguição aos nicenos " +
      "é brutal, mas surge a geração que mudará tudo: os Padres Capadócios — Basílio de Cesareia, " +
      "Gregório de Nazianzo e Gregório de Nissa. Eles fornecem o arcabouço teológico que " +
      "permitirá a Niceia triunfar definitivamente em 381.",
    eventos: [
      {
        ano: "364–367",
        titulo: "Valente e o Homoianismo Imperial",
        descricao:
          "Valente, batizado pelo bispo homoiano Eudóxio de Constantinopla, impõe o " +
          "homoianismo no Oriente com violência. Bispos nicenos são exilados, monges " +
          "são alistados à força no exército, igrejas são confiscadas. " +
          "No Ocidente, Valentiniano I (niceno) mantém a paz religiosa.",
        importancia:
          "A perseguição de Valente cria mártires e heróis nicenos, fortalecendo " +
          "a resistência popular. Constantinopla, a capital, é quase inteiramente ariana/homoiana.",
      },
      {
        ano: "370",
        titulo: "Basílio torna-se Bispo de Cesareia",
        descricao:
          "Basílio, o Grande, assume o bispado de Cesareia na Capadócia. " +
          "Genial teólogo, administrador e organizador, ele se torna o líder " +
          "da resistência nicena no Oriente. Sua obra 'De Spiritu Sancto' (375) " +
          "será a base teológica para a definição da divindade do Espírito Santo.",
        importancia:
          "Basílio é o arquiteto intelectual de Constantinopla I, mesmo sem viver para vê-lo. " +
          "Sua distinção entre ousia (essência) e hypostasis (pessoa) resolve a confusão " +
          "terminológica que dividia Oriente e Ocidente desde Niceia.",
        fontes: ["Basílio de Cesareia, De Spiritu Sancto (375)"],
      },
      {
        ano: "372–374",
        titulo: "Gregório de Nissa e a Luta contra Eunômio",
        descricao:
          "Basílio consagra seu irmão mais novo, Gregório, como bispo de Nissa. " +
          "Gregório é o mais filosófico dos três Capadócios. Sua obra 'Contra Eunômio' " +
          "demole o arianismo radical de Eunômio, que afirmava que a essência de Deus " +
          "é 'ingenitude' (agennēsia) e que o Filho, sendo 'gerado', é essencialmente " +
          "diferente do Pai.",
        importancia:
          "Gregório de Nissa destrói a base filosófica do eunomianismo, " +
          "a heresia mais intelectualmente sofisticada da época.",
        fontes: ["Gregório de Nissa, Contra Eunomium"],
      },
      {
        ano: "375",
        titulo: "Basílio publica 'De Spiritu Sancto'",
        descricao:
          "A obra-prima de Basílio sobre o Espírito Santo. Ele demonstra que o ES " +
          "recebe as mesmas honras, títulos e operações que o Pai e o Filho, " +
          "e portanto é consubstancial a ambos. Porém, Basílio é cauteloso: " +
          "ele não usa explicitamente o termo 'Deus' para o ES (para não alienar " +
          "os moderados), mas a lógica de seu argumento leva inevitavelmente a essa conclusão.",
        importancia:
          "Este é O livro que prepara Constantinopla I. Quando o concílio declarar " +
          "o ES como 'Senhor que dá a vida', estará seguindo diretamente a argumentação de Basílio. " +
          "Infelizmente, Basílio morrerá em 1º de janeiro de 379, dois anos antes do concílio.",
        fontes: ["Basílio de Cesareia, De Spiritu Sancto"],
      },
      {
        ano: "379",
        titulo: "Morte de Basílio e Ascensão de Teodósio",
        descricao:
          "Basílio morre em 1º de janeiro de 379, aos ~49 anos, exausto pela luta. " +
          "Em 19 de janeiro, Teodósio I é proclamado imperador do Oriente por Graciano. " +
          "Teodósio é niceno convicto, batizado na fé de Niceia. " +
          "Em 27 de fevereiro de 380, emite o Édito Cunctos Populos.",
        importancia:
          "A morte de Basílio e a ascensão de Teodósio marcam a virada definitiva. " +
          "O arianismo perde seu último protetor imperial (Valente morrera em Adrianópolis em 378). " +
          "A ortodoxia nicena tem agora um imperador que a defende ativamente.",
      },
    ],
  },

  // =============================================
  // PERÍODO 5: A VÉSPERA DO CONCÍLIO (379–381)
  // =============================================
  {
    periodo: "379–381",
    titulo: "A Véspera: Teodósio, o Édito e Gregório em Constantinopla",
    descricaoGeral:
      "Os dois anos que antecedem o concílio são de transformação radical. " +
      "Teodósio impõe o nicenismo como religião oficial. Gregório de Nazianzo, " +
      "chamado a Constantinopla, prega suas famosas Orações Teológicas a uma " +
      "minúscula comunidade nicena cercada por uma cidade ariana.",
    eventos: [
      {
        ano: "379",
        titulo: "Gregório de Nazianzo chega a Constantinopla",
        descricao:
          "A pedido de Basílio (antes de morrer) e de um pequeno grupo de nicenos, " +
          "Gregório viaja a Constantinopla. Encontra uma cidade onde quase todas as " +
          "igrejas estão nas mãos dos homoianos. A comunidade nicena se reúne numa " +
          "pequena capela chamada 'Anastasis' (Ressurreição). " +
          "Gregório é apedrejado, sua capela é invadida, e ele é atacado por monges hereges.",
        importancia:
          "O contraste é dramático: a futura capital da cristandade é quase inteiramente " +
          "herética. A missão de Gregório parece impossível.",
      },
      
      {
        ano: "380 (novembro)",
        titulo: "Gregório assume a Igreja dos Apóstolos",
        descricao:
          "Teodósio entra em Constantinopla e exige que o bispo homoiano Demófilo " +
          "aceite o Credo de Niceia ou renuncie. Demófilo recusa e é expulso. " +
          "Gregório de Nazianzo é instalado na grande Igreja dos Santos Apóstolos " +
          "(a catedral imperial). A cidade começa a se converter.",
        importancia:
          "Em menos de dois anos, Gregório transformou uma minúscula comunidade " +
          "perseguida na igreja dominante da capital. Mas seus inimigos não desistiram.",
      },
    
      {
        ano: "381 (janeiro)",
        titulo: "Édito Episcopis Tradi",
        descricao:
          "Teodósio emite novo édito ordenando que todas as igrejas do Império " +
          "sejam entregues a bispos que confessam a fé de Niceia — especificamente " +
          "os que estão em comunhão com Dâmaso de Roma e Pedro de Alexandria. " +
          "Os bispos arianos, eunomianos e pneumatomachianos são expulsos de suas sedes.",
        importancia:
          "O cenário está montado. Teodósio limpou o terreno e agora precisa de " +
          "um concílio para dar legitimidade eclesial ao que ele já impôs por decreto.",
        fontes: ["Código Teodosiano, XVI.1.3"],
      },
    ],
  },
];

export const resumoAntecedentes =
  "Em 56 anos, a Igreja passou do triunfo aparente de Niceia (325) à quase-derrota total " +
  "sob Constâncio II (359–360), sobrevivendo graças à resistência de Atanásio, Hilário " +
  "e, finalmente, dos Padres Capadócios. A morte de Valente em Adrianópolis (378) e a " +
  "ascensão de Teodósio (379) criaram as condições políticas para a convocação de um " +
  "novo concílio que completasse a obra de Niceia — especialmente no que dizia respeito " +
  "ao Espírito Santo, cuja divindade Niceia não havia definido.";