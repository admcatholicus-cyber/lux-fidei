export const resumoSessoes =
  "O VI Concílio Ecumênico se desenrolou ao longo de 18 sessões formais, distribuídas em 10 meses e 9 dias — de 7 de novembro de 680 a 16 de setembro de 681. É um dos concílios mais longos da Antiguidade. As sessões podem ser agrupadas em quatro grandes fases: a fase de abertura e leitura de credenciais (sessões 1–4), a fase de exame patrístico e confronto com os monotelitas (sessões 5–10), a fase de julgamento de Honório e dos heresiarcas (sessões 11–14), e a fase de redação e promulgação do Horos (sessões 15–18). O imperador Constantino IV presidiu pessoalmente as primeiras 11 sessões. Após sua retirada, os legados papais e o patriarca Jorge I conduziram os trabalhos. A presença imperial garantiu a ordem e a autoridade, mas os debates teológicos foram liderados pelos legados de Roma e pelos bispos orientais diotelitas."

export const linhaDoTempoSessoes = [
  { data: "7 Nov. 680", evento: "Sessão 1 — Abertura solene no Palácio de Trullo. Discurso de Constantino IV." },
  { data: "10 Nov. 680", evento: "Sessão 2 — Leitura dos atos dos cinco concílios anteriores." },
  { data: "13 Nov. 680", evento: "Sessão 3 — Continuação da leitura; Macário começa a apresentar fontes." },
  { data: "15 Nov. 680", evento: "Sessão 4 — Leitura da carta dogmática de Agatão. Aclamação: 'Pedro falou por Agatão!'" },
  { data: "7 Dez. 680", evento: "Sessão 5 — Macário apresenta defesa monotelita com citações patrísticas." },
  { data: "12 Fev. 681", evento: "Sessão 6 — Verificação das citações; falsificações descobertas." },
  { data: "13 Fev. 681", evento: "Sessão 7 — Continuação do exame; leitura de Máximo e Sofrônio." },
  { data: "7 Mar. 681", evento: "Sessão 8 — Deposição e anátema de Macário de Antioquia." },
  { data: "19 Mar. 681", evento: "Sessão 9 — Deposição de Estêvão (monge de Macário)." },
  { data: "20 Mar. 681", evento: "Sessão 10 — O 'milagre' fracassado de Policrônio; sua deposição." },
  { data: "6 Abr. 681", evento: "Sessão 11 — Leitura das cartas Sérgio–Honório. Início do caso Honório." },
  { data: "19 Abr. 681", evento: "Sessão 12 — Continuação do exame de Honório. Legados papais não o defendem." },
  { data: "28 Abr. 681", evento: "Sessão 13 — Anátema contra Honório I e todos os heresiarcas monotelitas." },
  { data: "28 Abr. 681", evento: "Sessão 14 — Leitura de textos patrísticos de apoio; preparação do Horos." },
  { data: "26 Jul. 681", evento: "Sessão 15 — Leitura do rascunho do Horos." },
  { data: "9 Ago. 681", evento: "Sessão 16 — Aprovação final do Horos." },
  { data: "11 Set. 681", evento: "Sessão 17 — Leitura e votação dos cânones (atribuição debatida)." },
  { data: "16 Set. 681", evento: "Sessão 18 — Encerramento solene. Assinatura de ~174 bispos. Promulgação." },
]

export const sessoes = [
  {
    sessao: "I",
    data: "7 de novembro de 680",
    titulo: "Abertura Solene e Apresentação de Credenciais",
    clima: "Cerimonial e expectante. O imperador, cercado por sua guarda palaciana, sentou-se num trono elevado. Os legados papais ocuparam os assentos de honra à direita; o patriarca Jorge I à esquerda; Macário de Antioquia atrás de Jorge. Cerca de 43 bispos presentes.",
    eventos: [
      {
        titulo: "Discurso Imperial de Abertura",
        descricao:
          "Constantino IV abriu o concílio com um discurso em que exortou os padres a 'examinar as Escrituras e os Padres com diligência para manifestar a verdade da fé e extirpar toda heresia'. O imperador enfatizou que não pretendia impor uma posição teológica, mas facilitar o discernimento eclesial.",
        desdobramento:
          "O tom mediador do discurso contrastou com o cesaropapismo de Heráclio e Constante II e tranquilizou os legados papais.",
      },
      {
        titulo: "Apresentação dos Legados e Credenciais",
        descricao:
          "Os legados papais (Teodoro, Jorge e João) apresentaram suas cartas de credenciamento e a carta dogmática de Agatão. Os patriarcas e bispos presentes apresentaram suas credenciais. Os representantes de Alexandria e Jerusalém foram reconhecidos.",
        desdobramento:
          "A verificação de credenciais estabeleceu a legitimidade canônica da assembleia como ecumênica.",
      },
      {
        titulo: "Formulação da Agenda",
        descricao:
          "O imperador propôs a agenda: 1) Exame das definições dos concílios anteriores; 2) Leitura e discussão dos textos relevantes; 3) Definição dogmática. Macário de Antioquia solicitou que sua posição fosse ouvida, o que foi concedido.",
        desdobramento:
          "A inclusão de Macário na agenda demonstrou que o concílio buscava um julgamento justo, não uma condenação sumária.",
      },
    ],
    resultado:
      "Sessão inaugural bem-sucedida. O tom foi definido: exame patrístico e escriturístico, não imposição imperial. Os legados papais foram reconhecidos como presidentes teológicos do concílio.",
  },
  {
    sessao: "II",
    data: "10 de novembro de 680",
    titulo: "Leitura dos Atos dos Concílios Anteriores",
    clima: "Acadêmico e solene. A sessão foi dedicada à leitura dos documentos fundacionais da cristologia ortodoxa.",
    eventos: [
      {
        titulo: "Leitura do Credo Niceno-Constantinopolitano",
        descricao:
          "O Credo de 381 foi lido como norma de fé inviolável. Todos os presentes o recitaram de pé.",
        desdobramento:
          "A reafirmação do Credo estabeleceu a base trinitária sobre a qual a definição cristológica seria construída.",
      },
      {
        titulo: "Leitura das Definições de Éfeso e Calcedônia",
        descricao:
          "Os decretos de Éfeso (431) sobre a união hipostática e a definição de Calcedônia (451) sobre as duas naturezas foram lidos na íntegra.",
        desdobramento:
          "Calcedônia (451) foi apresentado como o ponto de partida: se há duas naturezas, há duas vontades?",
      },
      {
        titulo: "Leitura do Horos de Constantinopla II (553)",
        descricao:
          "A definição do V Concílio Ecumênico foi lida, confirmando a continuidade da tradição conciliar.",
        desdobramento:
          "Os cinco concílios anteriores foram reafirmados como autoritativos, criando o quadro normativo para a nova definição.",
      },
    ],
    resultado:
      "Estabelecimento do cânon patrístico e conciliar como critério de julgamento. A tradição, não a política imperial, seria o juiz.",
  },
  {
    sessao: "III",
    data: "13 de novembro de 680",
    titulo: "Continuação da Leitura Patrística e Primeira Intervenção de Macário",
    clima: "Tensão crescente. Macário de Antioquia começou a apresentar suas fontes.",
    eventos: [
      {
        titulo: "Leitura do Tomo de Leão Magno",
        descricao:
          "O Tomo de Leão (449) foi lido como expressão da fé de Roma sobre as duas naturezas e suas operações distintas.",
        desdobramento:
          "O Tomo de Leão já sugeria a dualidade operacional, dando base para a definição das duas operações.",
      },
      {
        titulo: "Primeira Apresentação de Macário",
        descricao:
          "Macário começou a apresentar sua posição, citando trechos do Pseudo-Dionísio Areopagita ('uma nova operação teândrica') e de Cirilo de Alexandria.",
        desdobramento:
          "Os legados papais pediram tempo para verificar as citações de Macário, suspeitando de adulterações.",
      },
    ],
    resultado:
      "As primeiras fissuras na defesa monotelita apareceram. A verificação das fontes seria o campo de batalha decisivo.",
  },
  {
    sessao: "IV",
    data: "15 de novembro de 680",
    titulo: "A Grande Sessão: Leitura da Carta Dogmática de Agatão",
    clima: "Altamente dramático. O momento mais importante do concílio até aquele ponto.",
    eventos: [
      {
        titulo: "Leitura Integral da Carta de Agatão",
        descricao:
          "O legado Teodoro leu a carta dogmática do Papa Agatão I, que afirmava as duas vontades e duas operações naturais em Cristo, baseada na Escritura, nos Padres e na tradição da Sé Apostólica. Agatão declarava que a Igreja Romana 'nunca se desviou do caminho da verdade'.",
        desdobramento:
          "A assembleia aclamou: 'Pedro falou por Agatão!' (Petrus per Agathonem locutus est!). A fórmula ecoava a aclamação de Calcedônia ('Pedro falou por Leão!').",
      },
      {
        titulo: "Reação de Macário",
        descricao:
          "Macário recusou aceitar a carta de Agatão, declarando que não reconhecia 'duas vontades' em Cristo e que a tradição de seus predecessores (Sérgio, Pirro, Paulo) era a verdadeira ortodoxia.",
        desdobramento:
          "A recusa de Macário dividiu formalmente o concílio entre diotelitas (maioria esmagadora) e monotelitas (Macário e seus monges).",
      },
    ],
    resultado:
      "A carta de Agatão foi aceita como norma de fé pela assembleia. A partir desta sessão, a questão não era mais se o monotelismo seria condenado, mas como e com que extensão.",
  },
  {
    sessao: "V",
    data: "7 de dezembro de 680",
    titulo: "Defesa de Macário: Citações Patrísticas Monotelitas",
    clima: "Acadêmico e confrontacional. Macário apresentou um dossiê elaborado de citações.",
    eventos: [
      {
        titulo: "Dossiê de Macário",
        descricao:
          "Macário apresentou um extenso dossiê de citações patrísticas em favor do monotelismo, incluindo textos atribuídos a Gregório de Nazianzo, Pseudo-Dionísio, Cirilo de Alexandria e Atanásio. O dossiê foi apresentado como prova de que a tradição patrística apoiava a doutrina de uma vontade.",
        desdobramento:
          "Os legados papais e vários bispos orientais solicitaram a verificação das citações com manuscritos autênticos preservados em Constantinopla e em Roma.",
      },
    ],
    resultado:
      "A verificação das fontes foi agendada para a próxima sessão. O intervalo de 2 meses entre as sessões 5 e 6 (dezembro a fevereiro) foi utilizado para a comparação dos manuscritos.",
  },
  {
    sessao: "VI",
    data: "12 de fevereiro de 681",
    titulo: "Descoberta das Falsificações",
    clima: "Explosivo. A sessão revelou que várias citações de Macário haviam sido adulteradas.",
    eventos: [
      {
        titulo: "Verificação dos Manuscritos",
        descricao:
          "Os legados papais e os bibliotecários imperiais compararam as citações apresentadas por Macário com os códices originais preservados na Biblioteca Imperial e nos manuscritos trazidos de Roma. Várias citações revelaram-se interpoladas: palavras haviam sido adicionadas ou omitidas para alterar o sentido dos textos.",
        desdobramento:
          "A descoberta das falsificações destruiu a credibilidade da defesa monotelita e gerou indignação na assembleia.",
      },
      {
        titulo: "Confronto com Estêvão",
        descricao:
          "O monge Estêvão, secretário de Macário e responsável pela preparação do dossiê, foi confrontado com as evidências. Tentou justificar as alterações como 'correções', mas foi desacreditado.",
        desdobramento:
          "A assembleia concluiu que o monotelismo não podia ser sustentado pela tradição patrística autêntica.",
      },
    ],
    resultado:
      "Momento decisivo do concílio. As falsificações demonstraram que a tradição patrística genuína apoiava as duas vontades. O monotelismo ficou sem base documental.",
  },
  {
    sessao: "VII",
    data: "13 de fevereiro de 681",
    titulo: "Leitura de Máximo e Sofrônio em Favor das Duas Vontades",
    clima: "Consolidação da posição diotelita. A assembleia ouviu os textos dos campeões da ortodoxia.",
    eventos: [
      {
        titulo: "Leitura da Disputa com Pirro (Máximo, o Confessor)",
        descricao:
          "Extensos trechos da Disputatio cum Pyrrho de Máximo foram lidos, demonstrando com rigor filosófico que a vontade pertence à natureza, não à pessoa, e que duas naturezas implicam duas vontades.",
        desdobramento:
          "A teologia de Máximo foi reconhecida como a expressão mais articulada da posição diotelita.",
      },
      {
        titulo: "Leitura da Carta Sinodal de Sofrônio",
        descricao:
          "A Carta Sinodal de Sofrônio de Jerusalém (634) foi lida, demonstrando que a oposição ao monoenergismo era anterior ao monotelismo propriamente dito.",
        desdobramento:
          "Sofrônio foi aclamado como precursor da ortodoxia diotelita, junto com Máximo.",
      },
    ],
    resultado:
      "Os textos de Máximo e Sofrônio foram aceitos como expressões normativas da fé. A base teológica do Horos estava agora estabelecida.",
  },
  {
    sessao: "VIII",
    data: "7 de março de 681",
    titulo: "Deposição e Anátema de Macário de Antioquia",
    clima: "Dramático e solene. O momento mais tenso do concílio.",
    eventos: [
      {
        titulo: "Último Apelo a Macário",
        descricao:
          "O imperador e os legados papais fizeram um último apelo a Macário para que aceitasse a doutrina das duas vontades. Macário respondeu que preferia 'ser lançado ao mar' a abandonar sua fé.",
        desdobramento:
          "A recusa de Macário tornou inevitável sua deposição.",
      },
      {
        titulo: "Votação e Deposição",
        descricao:
          "A assembleia votou por unanimidade a deposição de Macário do patriarcado de Antioquia. O anátema foi pronunciado: 'Macário, que foi patriarca de Antioquia, por ter seguido em tudo a impiedade de Sérgio e seus seguidores, é deposto e anatematizado.'",
        desdobramento:
          "Macário foi entregue aos guardas e posteriormente enviado a Roma para ser confinado num mosteiro.",
      },
    ],
    resultado:
      "O único defensor ativo do monotelismo no concílio foi removido. A partir desta sessão, a assembleia era unanimemente diotelita.",
  },
  {
    sessao: "IX",
    data: "19 de março de 681",
    titulo: "Deposição de Estêvão (Monge de Macário)",
    clima: "Mais tranquilo após a deposição de Macário. Formalidade processual.",
    eventos: [
      {
        titulo: "Julgamento de Estêvão",
        descricao:
          "Estêvão foi formalmente julgado por sua participação na falsificação de documentos patrísticos. Reconheceu sua culpa parcialmente, mas afirmou ter agido sob ordens de Macário.",
        desdobramento:
          "Estêvão foi deposto e anatematizado. Enviado a Roma com Macário.",
      },
    ],
    resultado:
      "Limpeza da resistência monotelita. Apenas Policrônio permanecia.",
  },
  {
    sessao: "X",
    data: "20 de março de 681",
    titulo: "O Milagre Fracassado de Policrônio",
    clima: "Bizarro e teatral. Um dos episódios mais extraordinários da história conciliar.",
    eventos: [
      {
        titulo: "A Proposta de Policrônio",
        descricao:
          "O monge Policrônio declarou que poderia provar a verdade do monotelismo ressuscitando um cadáver. O imperador, cético mas curioso, autorizou o experimento. Um corpo foi trazido ao Palácio de Trullo.",
        desdobramento:
          "A assembleia assistiu ao 'experimento' com uma mistura de ceticismo e curiosidade.",
      },
      {
        titulo: "O Fracasso do Milagre",
        descricao:
          "Policrônio colocou seu livro de orações sobre o peito do morto, recitou uma prece monotelita e esperou. Nada aconteceu. O cadáver permaneceu imóvel. A assembleia irrompeu em gargalhadas e vaias.",
        desdobramento:
          "Policrônio foi imediatamente deposto e anatematizado. Segundo as atas, ele teria murmurado: 'O morto não é digno de ouvir a verdade.'",
      },
    ],
    resultado:
      "O último defensor ativo do monotelismo foi removido da maneira mais humilhante possível. O episódio encerrou qualquer resistência e abriu caminho para o julgamento dos heresiarcas ausentes.",
  },
  {
    sessao: "XI",
    data: "6 de abril de 681",
    titulo: "Início do Caso Honório: Leitura das Cartas Sérgio–Honório",
    clima: "Delicado e tenso. A sessão mais difícil para os legados papais.",
    eventos: [
      {
        titulo: "Leitura da Carta de Sérgio a Honório (634)",
        descricao:
          "A carta de Sérgio ao Papa Honório I foi lida na íntegra. Nela, Sérgio perguntava se era lícito falar de 'uma' ou 'duas' operações e relatava o sucesso do Pacto de Alexandria.",
        desdobramento:
          "A carta revelou que Sérgio havia formulado a pergunta de modo tendencioso, induzindo Honório a responder favoravelmente.",
      },
      {
        titulo: "Leitura da Carta de Honório a Sérgio (634/635)",
        descricao:
          "A resposta de Honório foi lida: o papa aconselhava evitar a discussão sobre operações e confessar 'uma vontade' (hen thelema), argumentando que falar de duas vontades sugeriria conflito interno em Cristo.",
        desdobramento:
          "A expressão 'uma vontade' foi recebida com consternação. Os legados papais não defenderam Honório, mas não protestaram contra a leitura.",
      },
    ],
    resultado:
      "O caso Honório foi aberto formalmente. A assembleia começou a considerar a possibilidade de anatematizar um papa.",
  },
  {
    sessao: "XII",
    data: "19 de abril de 681",
    titulo: "Continuação do Exame de Honório",
    clima: "Gravidade crescente. A assembleia pesa o precedente de condenar um papa.",
    eventos: [
      {
        titulo: "Debate sobre a Intenção de Honório",
        descricao:
          "Alguns bispos argumentaram que Honório usou 'vontade' em sentido moral (orientação, disposição), não técnico (faculdade natural). Outros responderam que, independentemente da intenção, o resultado foi o mesmo: a carta legitimou o monotelismo.",
        desdobramento:
          "A assembleia concluiu que a ambiguidade de Honório era culpável, pois um papa tem o dever de ser claro em matéria de fé.",
      },
      {
        titulo: "Silêncio dos Legados Papais",
        descricao:
          "Os legados papais notavelmente não defenderam Honório. Não se opuseram à discussão nem tentaram proteger a reputação de seu predecessor. Isto sugere que suas instruções de Roma previam a possibilidade da condenação.",
        desdobramento:
          "O silêncio dos legados tornou inevitável o anátema.",
      },
    ],
    resultado:
      "O consenso para a condenação de Honório foi atingido. A sessão seguinte pronunciaria o anátema.",
  },
  {
    sessao: "XIII",
    data: "28 de abril de 681",
    titulo: "Anátema contra Honório I e Todos os Heresiarcas",
    clima: "Solene e histórico. O momento mais controverso de todo o concílio.",
    eventos: [
      {
        titulo: "Proclamação do Anátema",
        descricao:
          "A assembleia pronunciou o anátema contra todos os heresiarcas monotelitas em bloco: 'Anatematizamos Teodoro de Farã, Sérgio, Pirro, Paulo e Pedro de Constantinopla, Ciro de Alexandria, e com eles Honório, que foi papa da antiga Roma, porque encontramos em suas cartas a Sérgio que ele seguiu em tudo a mente deste e confirmou seus dogmas ímpios.'",
        desdobramento:
          "A inclusão de Honório na lista dos heresiarcas tornou-se o evento mais debatido da história do papado.",
      },
    ],
    resultado:
      "Todos os líderes do monotelismo foram formalmente condenados, incluindo um papa. O precedente não tem paralelo na história da Igreja.",
  },
  {
    sessao: "XIV",
    data: "28 de abril de 681 (continuação)",
    titulo: "Leitura Patrística de Apoio e Preparação do Horos",
    clima: "Construtivo. Após a fase destrutiva (condenações), a fase construtiva (definição).",
    eventos: [
      {
        titulo: "Compilação de Textos Diotelitas",
        descricao:
          "A assembleia compilou um florilegio de textos patrísticos em favor das duas vontades e duas operações, incluindo Atanásio, Basílio, Gregório de Nazianzo, Cirilo de Alexandria, Leão Magno e Máximo, o Confessor.",
        desdobramento:
          "O florilegio serviria como base para a redação do Horos.",
      },
    ],
    resultado:
      "Base patrística completa para a definição dogmática. A comissão de redação do Horos foi formada.",
  },
  {
    sessao: "XV",
    data: "26 de julho de 681",
    titulo: "Leitura do Rascunho do Horos",
    clima: "Expectativa. Três meses de trabalho redacional resultaram no primeiro rascunho.",
    eventos: [
      {
        titulo: "Apresentação do Rascunho",
        descricao:
          "O primeiro rascunho do Horos (definição de fé) foi lido diante da assembleia. O texto definia as duas vontades naturais e duas operações naturais em Cristo 'sem divisão, sem mudança, sem separação, sem confusão'.",
        desdobramento:
          "Alguns bispos sugeriram modificações de linguagem; o texto foi devolvido à comissão para ajustes.",
      },
    ],
    resultado:
      "O rascunho foi bem recebido. As modificações eram de estilo, não de substância.",
  },
  {
    sessao: "XVI",
    data: "9 de agosto de 681",
    titulo: "Aprovação Final do Horos",
    clima: "Triunfal. O Horos definitivo foi aprovado por aclamação.",
    eventos: [
      {
        titulo: "Leitura e Aclamação do Horos Final",
        descricao:
          "O texto final do Horos foi lido. A assembleia aclamou: 'Esta é a fé dos apóstolos! Esta é a fé dos Padres! Esta é a fé de toda a Igreja!' Os bispos assinaram o documento.",
        desdobramento:
          "O Horos de Constantinopla III completou a definição de Calcedônia ao estender os quatro advérbios das naturezas às vontades e operações.",
      },
    ],
    resultado:
      "O dogma das duas vontades e duas operações foi solenemente definido. A cristologia ortodoxa atingiu sua formulação definitiva.",
  },
  {
    sessao: "XVII",
    data: "11 de setembro de 681",
    titulo: "Cânones Disciplinares (Atribuição Debatida)",
    clima: "Rotineiro. A sessão foi breve e focada em questões disciplinares.",
    eventos: [
      {
        titulo: "Leitura e Votação dos Cânones",
        descricao:
          "Foram lidos e votados cânones disciplinares. A atribuição desses cânones a esta sessão é debatida: muitos historiadores argumentam que eles pertencem ao Quinissexto (Trullo, 692), não ao VI Ecumênico (681).",
        desdobramento:
          "A confusão entre os cânones de 681 e 692 persistiria por séculos e contribuiria para tensões entre Roma e Constantinopla.",
      },
    ],
    resultado:
      "Cânones aprovados (com reservas historiográficas sobre sua atribuição).",
  },
  {
    sessao: "XVIII",
    data: "16 de setembro de 681",
    titulo: "Encerramento Solene e Promulgação",
    clima: "Festivo e solene. Fim de 10 meses de trabalho. Celebração da ortodoxia restaurada.",
    eventos: [
      {
        titulo: "Leitura Final do Horos",
        descricao:
          "O Horos completo foi lido uma última vez diante de toda a assembleia. Aproximadamente 174 bispos assinaram o documento.",
        desdobramento:
          "As atas foram seladas e cópias foram preparadas para envio a Roma, Alexandria, Jerusalém e Antioquia.",
      },
      {
        titulo: "Discurso de Encerramento de Constantino IV",
        descricao:
          "O imperador pronunciou um discurso de encerramento, agradecendo aos padres por seu trabalho e promulgando os decretos com autoridade imperial. Ordenou que as atas fossem preservadas no arquivo imperial e que o Horos fosse afixado em Santa Sofia.",
        desdobramento:
          "As atas foram enviadas a Roma para confirmação papal. Leão II as confirmaria em 682.",
      },
      {
        titulo: "Aclamações Finais",
        descricao:
          "A assembleia aclamou: 'Muitos anos ao imperador! Muitos anos aos ortodoxos! Anátema aos heresiarcas! Glória a Deus que nos concedeu a concórdia!'",
        desdobramento:
          "O VI Concílio Ecumênico encerrou-se com a ortodoxia cristológica plenamente definida.",
      },
    ],
    resultado:
      "Encerramento do último grande concílio cristológico da era patrística. A controvérsia monotelita, que durara mais de 60 anos, estava encerrada.",
  },
]