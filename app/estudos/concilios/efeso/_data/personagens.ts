// ============================================
// CONCÍLIO DE ÉFESO (431 d.C.)
// Personagens-Chave e Prosopografia Completa
// ============================================

interface Personagem {
  nome: string
  nomeGrego: string
  titulo: string
  datas: string
  origem: string
  biografia: string
  papelNoConcilio: string
  legado: string
  obras: string[]
  curiosidade: string
}

export const personagens: Personagem[] = [
  // =============================================
  // 1. NESTÓRIO
  // =============================================
  {
    nome: 'Nestório de Constantinopla',
    nomeGrego: 'Νεστόριος',
    titulo: 'Patriarca de Constantinopla (428–431)',
    datas: '~386 – ~451 d.C.',
    origem: 'Germanícia, Comagena (atual Kahramanmaraş, Turquia); formação monástica em Antioquia',
    biografia:
      'Nestório nasceu por volta de 386 em Germanícia, uma cidade da província de Comagena, na fronteira entre a Síria e a Ásia Menor. Desde jovem, ingressou no mosteiro de Euprepius, perto de Antioquia, onde estudou sob a influência da tradição teológica antioquena — possivelmente tendo contato direto com Teodoro de Mopsuéstia († 428), o maior teólogo da Escola de Antioquia. No mosteiro, Nestório destacou-se por sua eloquência, seu zelo ascético e sua pregação vigorosa contra as heresias. Sua reputação como pregador chegou aos ouvidos do imperador Teodósio II, que, em abril de 428, nomeou-o Patriarca de Constantinopla — uma escolha surpreendente, pois Nestório era um outsider sem conexões com a corte, sem experiência administrativa e sem laços com as facções da capital. Teodósio esperava que um homem "neutro" (nem alexandrino, nem constantinopolitano) pudesse unificar as facções teológicas da cidade. O resultado foi o oposto. Imediatamente após sua posse, Nestório iniciou uma campanha agressiva contra as heresias na capital: perseguiu arianos, macedonianos, apolinaristas e quartodecimanos, confiscando suas capelas e expulsando seus clérigos. Este zelo excessivo alienou rapidamente o clero local, os monges e o povo de Constantinopla. No outono de 428, Nestório cometeu o erro que definiria sua carreira: em uma série de sermões na Hagia Sophia, atacou publicamente o título Theotokos (Mãe de Deus) atribuído à Virgem Maria, propondo em seu lugar Christotokos (Mãe de Cristo). A reação foi imediata e furiosa, levando à controvérsia que culminaria no Concílio de Éfeso (431) e na sua deposição. Após o concílio, Nestório foi exilado primeiro para o mosteiro de Euprepius (perto de Antioquia) e depois, em 435, para o Oásis de Hibis, no deserto do Egito, onde viveu em condições miseráveis até sua morte, por volta de 451. Nos últimos anos de vida, escreveu sua grande apologia, o Bazaar de Heracleides, na qual argumentava que sempre havia aceitado a união das duas naturezas em Cristo e que fora mal interpretado por Cirilo e pelos padres de Éfeso.',
    papelNoConcilio:
      'Nestório foi o acusado principal do Concílio de Éfeso, mas recusou-se a participar das sessões cirilianas. Permaneceu barricado em sua residência em Éfeso, cercado por soldados imperiais, e comunicou-se com o concílio apenas por escrito. Na Sessão I (22 de junho), foi citado três vezes para comparecer e defender-se; após três recusas, foi julgado e condenado in absentia com base em seus sermões, cartas e escritos. A sentença de deposição foi lida em voz alta diante da multidão de Éfeso, que celebrou com tochas e incenso. Nestório considerou o julgamento ilegítimo (Cirilo era seu acusador, não seu juiz) e apelou ao imperador Teodósio II, que inicialmente declarou válidas tanto a deposição de Nestório quanto a de Cirilo (pelo contra-concílio joanita). Somente em outubro de 431, sob pressão de Pulquéria e do povo de Constantinopla, Teodósio confirmou definitivamente a deposição de Nestório.',
    legado:
      'Nestório é uma das figuras mais trágicas e mais mal compreendidas da história da Igreja. Sua condenação em Éfeso deu origem ao "nestorianismo" — a doutrina de que em Cristo há duas pessoas (divina e humana) unidas apenas por uma "conjunção" moral, não por uma união ontológica. Porém, a descoberta do Bazaar de Heracleides em 1895 (um manuscrito siríaco preservado pela Igreja do Oriente) revelou que Nestório, ao menos em seus últimos anos, aceitava a "união hipostática" e o título Theotokos, e que sua heresia pode ter sido mais uma questão de terminologia imprecisa do que de erro dogmático substancial. A Declaração Cristológica Comum de 1994 entre o Papa João Paulo II e o Catholicos-Patriarca Mar Dinkha IV da Igreja Assíria do Oriente reconheceu que as diferenças entre a tradição "nestoriana" e a tradição calcedoniana eram em grande parte terminológicas, e que ambas as partes confessam a mesma fé na Encarnação. Nestório, portanto, pode ter sido mais um mártir da imprecisão linguística do que um herege consciente.',
    obras: [
      'Bazaar de Heracleides (Liber Heraclidis) — apologia tardia, escrita ~450, preservada em siríaco; descoberta em 1895 no Curdistão',
      'Sermões contra Theotokos (428–429) — fragmentos preservados nos Atos de Éfeso (ACO) e nas refutações de Cirilo',
      'Carta a Celestino I (429) — tentativa de buscar apoio em Roma; preservada em ACO I.2',
      'Carta a Cirilo de Alexandria (resposta à 2ª carta) — preservada em ACO I.1.1',
      'Tratado sobre a Encarnação (perdido) — conhecido apenas através de citações hostis',
      'Cartas a Teodósio II (431) — apelos durante o concílio; fragmentos em ACO',
    ],
    curiosidade:
      'No Bazaar de Heracleides, escrito décadas após Éfeso, Nestório afirma que, ao ouvir a sentença de sua deposição, disse aos bispos: "Que o Deus de todos seja glorificado; Ele sabe que não sou culpado das coisas de que me acusam." E acrescenta: "Eu aceito o título Theotokos, desde que se entenda que Maria é Mãe de Deus no sentido de que o Verbo, que é Deus, nasceu dela segundo a carne — não no sentido de que a natureza divina teve seu início em Maria." Esta passagem sugere que a disputa pode ter sido, em grande parte, um diálogo de surdos entre duas tradições teológicas que usavam o mesmo vocabulário com significados diferentes.',
  },

  // =============================================
  // 2. CIRILO DE ALEXANDRIA
  // =============================================
  {
    nome: 'Cirilo de Alexandria',
    nomeGrego: 'Κύριλλος Ἀλεξανδρείας',
    titulo: 'Patriarca de Alexandria (412–444); Doutor da Igreja',
    datas: '~376 – 27 de junho de 444 d.C.',
    origem: 'Alexandria, Egito; sobrinho do patriarca Teófilo de Alexandria',
    biografia:
      'Cirilo nasceu por volta de 376 em Alexandria, no seio de uma das famílias mais poderosas da cristandade oriental. Era sobrinho de Teófilo, o patriarca que havia deposto João Crisóstomo no Sínodo do Carvalho (403) e destruído o Serapeu de Alexandria (391). Cirilo cresceu em um ambiente de poder eclesiástico absoluto: Alexandria era a sé mais rica, mais populosa e mais influente do Oriente, com uma tradição teológica ininterrupta desde Marcos Evangelista, passando por Atanásio (o grande campeão de Niceia) e Teófilo. Cirilo recebeu uma educação clássica e teológica de primeira linha, estudando as Escrituras, os Padres gregos (especialmente Atanásio e os Capadócios) e a filosofia neoplatônica. Em 403, acompanhou o tio ao Sínodo do Carvalho, onde presenciou a deposição de Crisóstomo — uma lição de realpolitik eclesiástica que nunca esqueceria. Em 412, após a morte de Teófilo, Cirilo foi eleito patriarca em uma eleição disputada e violenta, com o apoio dos parabolanos (uma milícia clerical de enfermeiros que funcionava como força de choque do patriarcado). Tinha cerca de 36 anos. Durante as duas décadas seguintes, Cirilo consolidou seu poder como o teólogo mais influente do Oriente: escreveu extensivamente contra os arianos, os apolinaristas e os antropomorfistas; desenvolveu sua cristologia da "união hipostática" (henosis kath\' hypostasin); e estabeleceu uma rede de alianças com bispos da Palestina, da Ásia Menor e de Roma. Quando a controvérsia nestoriana estourou em 428, Cirilo estava no auge de seu poder e de sua maturidade teológica. Sua reação contra Nestório foi imediata, furiosa e estrategicamente brilhante: mobilizou os monges do Egito, escreveu ao Papa Celestino I, redigiu os 12 Anátemas, e orquestrou a convocação do concílio de Éfeso. Após o concílio, Cirilo enfrentou o cisma com João de Antioquia (431–433), que resolveu com a Fórmula de União — um compromisso teológico que aceitava a linguagem antioquena das "duas naturezas" sem abandonar a Theotokos e a unidade hipostática. Cirilo morreu em 27 de junho de 444, após 32 anos de patriarcado. Foi canonizado como santo e declarado Doutor da Igreja pelo Papa Leão XIII em 1883. Sua festa é celebrada em 27 de junho (Igreja Católica) e em 9 de junho (Igreja Ortodoxa).',
    papelNoConcilio:
      'Cirilo foi o motor teológico, político e logístico do Concílio de Éfeso. Presidiu a Sessão I (22 de junho) em nome próprio (como maior patriarca oriental presente) e como representante do Papa Celestino I (que o havia encarregado de executar a sentença contra Nestório). Sua decisão de abrir o concílio sem esperar João de Antioquia foi o ato mais controverso de sua carreira, mas garantiu a condenação de Nestório antes que os orientais pudessem bloquear a votação. Durante as sessões, Cirilo conduziu os trabalhos com mão de ferro: controlou a ordem do dia, selecionou os documentos a serem lidos, e garantiu que a votação fosse unânime (ou quase). Os legados papais, ao chegarem em 10 de julho, ratificaram todas as suas decisões, conferindo-lhe a autoridade apostólica de Roma. Após o concílio, Cirilo enfrentou o contra-concílio de João de Antioquia e foi brevemente preso por ordem de Teodósio II, mas a pressão de Pulquéria e do povo de Constantinopla garantiu sua libertação e a confirmação da deposição de Nestório.',
    legado:
      'Cirilo de Alexandria é, ao lado de Atanásio, o maior teólogo da tradição alexandrina e um dos pilares da cristologia ortodoxa. Sua formulação da "união hipostática" (uma pessoa, o Verbo, que assume a natureza humana sem confusão, sem mudança, sem divisão, sem separação) seria a base da definição de Calcedônia (451) e de toda a cristologia subsequente. Seus 12 Anátemas, embora controversos, foram recebidos como dogmáticos pela tradição ortodoxa e confirmados pelo II Concílio de Constantinopla (553). Sua defesa do título Theotokos como consequência lógica da Encarnação é um dos argumentos teológicos mais elegantes e mais decisivos da história da doutrina. A Fórmula de União (433), que reconciliou Alexandria e Antioquia, é considerada o primeiro documento ecumênico de compromisso cristológico e o precursor direto de Calcedônia. Cirilo é venerado como santo e Doutor da Igreja por católicos, ortodoxos, ortodoxos orientais (coptas, que o consideram o maior de seus patriarcas) e anglicanos.',
    obras: [
      '12 Anátemas contra Nestório (430) — PG 77, 105–122; o documento mais controverso e mais influente da controvérsia',
      '2ª Carta a Nestório (Carta Dogmática, 429) — PG 77, 44–50; lida e aprovada na Sessão I de Éfeso',
      '3ª Carta a Nestório (com os 12 Anátemas, 430) — PG 77, 105–122',
      'Contra Nestorium (5 livros, 430–431) — PG 76; a refutação teológica mais extensa de Nestório',
      'De Recta Fide ad Theodosium (430) — PG 76; tratado cristológico dedicado ao imperador',
      'Apologeticus contra Orientales (431) — PG 76; defesa dos 12 Anátemas contra as críticas de Teodoreto e André',
      'Scholia de Incarnatione Unigeniti (429) — PG 75; comentários cristológicos',
      'Thesaurus de Trinitate (424–428) — PG 75; tratado trinitário em 35 livros',
      'De Adoratione in Spiritu et Veritate (424–428) — PG 68; exegese do Evangelho de João',
      'Carta Laetentur Caeli a João de Antioquia (433) — PG 77, 161–164; a Fórmula de União',
      'Comentários sobre Isaías, Oséias, Joel, Amós, Lucas e João — exegese bíblica em larga escala',
    ],
    curiosidade:
      'Cirilo usou a imensa fortuna do patriarcado de Alexandria para subornar a corte de Constantinopla e garantir o apoio de Teodósio II e de Pulquéria. Cartas preservadas nos Atos do Concílio (ACO) revelam que Cirilo enviou presentes generosos — ouro, tapetes, marfim, móveis de luxo — a Pulquéria, a Eudócia, aos eunucos imperiais e aos altos funcionários da corte. Um memorando interno de Cirilo lista os "presentes" enviados a cada destinatário, com valores que totalizam milhares de libras de ouro. Esta prática, embora chocante para os padrões modernos, era comum na política do Império Romano tardio e não diminui a qualidade teológica das decisões de Éfeso — mas explica por que a corte imperial, inicialmente favorável a Nestório, acabou mudando de lado.',
  },

  // =============================================
  // 3. JOÃO DE ANTIOQUIA
  // =============================================
  {
    nome: 'João de Antioquia',
    nomeGrego: 'Ἰωάννης Ἀντιοχείας',
    titulo: 'Patriarca de Antioquia (429–441/442)',
    datas: '? – ~441/442 d.C.',
    origem: 'Antioquia (Antakya, Turquia); formação no mosteiro de Euprepius',
    biografia:
      'João de Antioquia é uma figura menos conhecida que Cirilo ou Nestório, mas seu papel na controvérsia de Éfeso foi absolutamente decisivo. Nascido em data desconhecida, João foi educado no mosteiro de Euprepius, perto de Antioquia, onde estudou ao lado de Nestório — os dois eram amigos pessoais desde a juventude. João era um homem de temperamento moderado, conciliador e pragmaticamente político, muito diferente do combativo Cirilo e do intransigente Nestório. Em 429, foi eleito Patriarca de Antioquia, a terceira sé mais importante da cristandade (depois de Roma e Alexandria, e antes de Constantinopla na tradição antiga). Como patriarca, João herdou a tradição teológica da Escola de Antioquia (Diodoro, Teodoro, Crisóstomo), que enfatizava a distinção das duas naturezas de Cristo e a interpretação literal-histórica das Escrituras. Quando a controvérsia Theotokos estourou, João tentou inicialmente mediar entre Cirilo e Nestório, escrevendo a ambos pedindo moderação. Porém, quando Cirilo publicou os 12 Anátemas (430), João ficou horrorizado: para ele, a linguagem de Cirilo ("uma natureza encarnada", "união física") era apolinarismo puro, tão perigoso quanto o nestorianismo de Nestório. João reuniu ~30 bispos sírios e partiu para Éfeso, mas sua viagem foi atrasada por enchentes nas estradas da Anatólia. Chegou em 26 de junho, quatro dias após a Sessão I, e descobriu que Cirilo já havia condenado Nestório. Furioso, João recusou-se a reconhecer a Sessão I e realizou um contra-concílio (26–27 de junho) que depôs Cirilo e Memnon. O cisma resultante durou dois anos (431–433) e foi resolvido pela Fórmula de União, na qual João aceitou Theotokos e a deposição de Nestório, e Cirilo aceitou uma leitura moderada de seus Anátemas que preservava a distinção das duas naturezas. João morreu por volta de 441/442 e foi sucedido por seu sobrinho Domno II.',
    papelNoConcilio:
      'João de Antioquia foi o protagonista involuntário do drama de Éfeso. Sua chegada atrasada (26 de junho) permitiu a Cirilo abrir o concílio sem oposição e condenar Nestório in absentia. Ao descobrir o fato consumado, João realizou um contra-concílio com seus ~30 bispos sírios e o conde Candidiano, depondo Cirilo e Memnon por "apolinarismo" e "violação dos cânones". O resultado foi a situação absurda de dois concílios rivais funcionando simultaneamente na mesma cidade, cada um depondo o líder do outro. Teodósio II, confuso, declarou válidas ambas as deposições, criando um impasse que só foi resolvido meses depois. O papel de João em Éfeso é ambivalente: por um lado, sua reação era compreensível (Cirilo havia violado as instruções imperiais e aberto o concílio sem ele); por outro lado, seu contra-concílio era tecnicamente ilegítimo (não tinha a maioria, nem os legados papais, nem a aprovação da maioria dos bispos presentes).',
    legado:
      'O maior legado de João de Antioquia é a Fórmula de União (433), que ele negociou com Cirilo através da mediação de Paulo de Emesa. A Fórmula é um documento de extraordinária importância ecumênica: aceita a linguagem antioquena ("duas naturezas", "distinção sem separação") e a linguagem alexandrina ("uma hipóstase", "Theotokos", "união") em uma síntese que anteciparia a definição de Calcedônia (451). Sem a Fórmula de 433, Calcedônia teria sido impossível. João também é importante como representante da "via média" antioquena: nem o nestorianismo radical de Nestório, nem o monofisismo nascente de Dióscoro, mas uma cristologia equilibrada que preservava tanto a unidade quanto a distinção em Cristo.',
    obras: [
      'Carta a Nestório (430) — pedindo moderação; fragmentos em ACO',
      'Carta a Cirilo (430) — criticando os 12 Anátemas; ACO I.1.4',
      'Atos do Contra-Concílio de Éfeso (26–27 de junho de 431) — ACO I.1.3',
      'Carta a Teodósio II (431) — apelando contra a Sessão I; ACO I.1.3',
      'Fórmula de União (433) — co-assinada com Cirilo; PG 77, 161–164; ACO I.1.4',
    ],
    curiosidade:
      'A amizade pessoal entre João e Nestório torna o drama de Éfeso ainda mais trágico. João não era um nestoriano convicto: ele aceitava Theotokos (com ressalvas) e nunca negou a unidade de pessoa em Cristo. Sua defesa de Nestório em Éfeso foi motivada mais por lealdade pessoal e por horror aos 12 Anátemas de Cirilo do que por adesão à teologia nestoriana. Quando João finalmente aceitou a deposição de Nestório na Fórmula de União (433), fê-lo com relutância e dor — e Nestório, no exílio, considerou a reconciliação de João com Cirilo uma traição pessoal.',
  },

  // =============================================
  // 4. TEODÓSIO II
  // =============================================
  {
    nome: 'Teodósio II',
    nomeGrego: 'Θεοδόσιος Βʹ',
    titulo: 'Imperador do Oriente (408–450)',
    datas: '10 de abril de 401 – 28 de julho de 450 d.C.',
    origem: 'Constantinopla; filho de Arcádio e Eudóxia; neto de Teodósio I',
    biografia:
      'Teodósio II nasceu em Constantinopla em 401 e tornou-se Augusto do Oriente em 408, aos 7 anos de idade, após a morte de seu pai Arcádio. Seu reinado de 42 anos foi um dos mais longos da história romana e um dos mais importantes para a história da Igreja. Durante sua minoridade, o Império foi governado por regentes: primeiro o prefeito Antêmio (408–414), depois sua irmã Pulquéria (414–423). Teodósio é descrito pelas fontes como um homem de caráter piedoso, erudito e pacífico — mais inclinado à oração, à caligrafia e ao estudo teológico do que à guerra e à política. Era um calígrafo talentoso que copiava manuscritos bíblicos com as próprias mãos, um amante da teologia que participava pessoalmente de debates doutrinários, e um devoto da vida monástica que mantinha correspondência com eremitas e ascetas. Suas grandes realizações incluem a compilação do Código Teodosiano (438), a fundação da Universidade de Constantinopla (425), e a construção das Muralhas Teodosianas (413). Porém, sua indecisão política o tornava vulnerável à influência das mulheres de sua vida: Pulquéria (sua irmã, pró-Cirilo) e Eudócia (sua esposa, inicialmente mais simpática a Nestório). Durante a controvérsia nestoriana, Teodósio oscilou dramaticamente: protegeu Nestório inicialmente, convocou o concílio, depois declarou válidas ambas as deposições (de Nestório e de Cirilo), e finalmente confirmou a deposição de Nestório sob pressão de Pulquéria. Morreu em 450 após cair de seu cavalo durante uma caçada. Foi sucedido por Pulquéria e Marciano, que convocaram Calcedônia (451).',
    papelNoConcilio:
      'Teodósio II foi o convocador do concílio e a autoridade política suprema que legitimou (ou deslegitimou) suas decisões. Emitiu a sacra de convocação (19 de novembro de 430), nomeou Candidiano como seu representante, e forneceu a logística e a segurança do evento. Durante o concílio, porém, sua indecisão quase desastrou tudo: ao declarar válidas tanto a deposição de Nestório (por Cirilo) quanto a deposição de Cirilo (por João), Teodósio criou um impasse jurídico e teológico que paralisou a Igreja por meses. Somente a pressão combinada de Pulquéria, do povo de Constantinopla e dos legados papais levou Teodósio a escolher definitivamente o partido ciriliano e confirmar a deposição de Nestório em outubro de 431.',
    legado:
      'O legado de Teodósio II para a história da Igreja é ambivalente. Por um lado, sua convocação do concílio foi essencial para resolver a controvérsia nestoriana e definir o dogma da Theotokos. Sem Teodósio, não haveria Éfeso. Por outro lado, sua indecisão e sua tentativa de "gerenciar" a teologia (reconhecendo ambos os concílios rivais) quase transformaram o concílio em uma farsa política. O Código Teodosiano (438), com suas leis anti-heréticas (Livro XVI), estabeleceu o precedente de que a heresia era um crime contra o Estado — um precedente que teria consequências devastadoras nos séculos seguintes.',
    obras: [
      'Codex Theodosianus (438) — a primeira codificação sistemática das leis imperiais romanas',
      'Sacras imperiais de convocação e ratificação do Concílio de Éfeso (430–431) — ACO I.1.1',
      'Édito contra os nestorianos (435) — Cod. Theod. XVI.5.66',
    ],
    curiosidade:
      'Teodósio II era tão devoto que transformou o palácio imperial de Constantinopla em uma espécie de mosteiro: ele e Pulquéria recitavam os Salmos juntos todas as manhãs, jejuavam regularmente, e mantinham relíquias de santos em capelas palacianas. Quando Nestório insultou Pulquéria (chamando-a de "nova Eva"), Teodósio ficou dividido entre a lealdade à irmã e a lealdade ao patriarca que ele mesmo havia nomeado. Segundo as fontes, Teodósio chorou ao assinar a deposição de Nestório, dizendo: "Eu o nomeei, e agora eu o deponho. Que Deus me perdoe."',
  },

  // =============================================
  // 5. SANTA PULQUÉRIA
  // =============================================
  {
    nome: 'Santa Pulquéria',
    nomeGrego: 'Αἰλία Πουλχερία',
    titulo: 'Augusta e Regente do Império Romano do Oriente',
    datas: '19 de janeiro de 399 – julho de 453 d.C.',
    origem: 'Constantinopla; filha de Arcádio e Eudóxia; irmã de Teodósio II',
    biografia:
      'Pulquéria é uma das figuras mais extraordinárias da história do Império Bizantino e uma das mulheres mais poderosas de toda a Antiguidade tardia. Nascida em 399, assumiu a regência do Império em 414, aos 15 anos, em nome de seu irmão Teodósio II (13 anos). Em um ato de extraordinária ousadia, fez um voto público de virgindade perpétua, declarando que seu "esposo" era Cristo — uma jogada que a protegia de casamentos políticos, a associava à Virgem Maria, e lhe conferia uma autoridade moral inatacável. Pulquéria era uma devota fervorosa da Theotokos e construiu três grandes igrejas marianas em Constantinopla: Blaquerna (o manto da Virgem), Hodegetria (o ícone de São Lucas) e Chalkoprateia. Quando Nestório atacou Theotokos e a insultou pessoalmente (impedindo-a de entrar no santuário da Hagia Sophia), Pulquéria jurou sua queda e tornou-se a força política mais poderosa por trás da convocação do concílio e da condenação de Nestório. Após a morte de Teodósio II (450), casou-se com o general Marciano (união política, com voto de castidade) e tornou-se imperatriz reinante. Juntos, convocaram o Concílio de Calcedônia (451). Morreu em 453 e foi canonizada como santa.',
    papelNoConcilio:
      'Pulquéria não esteve fisicamente presente em Éfeso, mas sua influência sobre o concílio foi decisiva e onipresente. Foi ela quem pressionou Teodósio II a convocar o concílio, a escolher Éfeso (cidade mariana) como sede, e a confirmar a deposição de Nestório. Quando Teodósio hesitou (declarando válidas ambas as deposições), foi a intervenção de Pulquéria que finalmente inclinou a balança a favor de Cirilo. As cartas de Cirilo a Pulquéria (preservadas nos Atos) revelam que o patriarca alexandrino a tratava como a verdadeira decisor da política religiosa imperial, e não Teodósio.',
    legado:
      'Pulquéria é a padroeira da devoção mariana imperial e a precursora do papel das imperatrizes bizantinas como defensoras da ortodoxia. Sua construção de igrejas marianas em Constantinopla transformou a cidade no centro mundial do culto à Theotokos. Sua convocação de Calcedônia (451, com Marciano) completou a obra cristológica de Éfeso. É venerada como santa pela Igreja Ortodoxa e pela Igreja Católica (festa: 10 de setembro).',
    obras: [
      'Cartas a Cirilo de Alexandria (430–433) — mencionadas nos Atos de Éfeso',
      'Cartas a Teodósio II (431) — pressionando pela condenação de Nestório',
      'Patrocínio das igrejas de Blaquerna, Hodegetria e Chalkoprateia em Constantinopla',
    ],
    curiosidade:
      'Quando Nestório impediu Pulquéria de entrar no santuário da Hagia Sophia, ela teria respondido: "Se não posso entrar como Augusta, entrarei como serva de Cristo." E acrescentou: "Aquele que nega a Mãe de Deus nega o próprio Deus, e eu não permitirei que tal homem permaneça na sé de Constantinopla enquanto eu viver." Esta frase, preservada na tradição hagiográfica, resume a determinação de ferro de Pulquéria e a profundidade de sua devoção mariana.',
  },

  // =============================================
  // 6. PAPA CELESTINO I
  // =============================================
  {
    nome: 'Papa Celestino I',
    nomeGrego: 'Πάπας Κελεστῖνος Αʹ',
    titulo: 'Bispo de Roma (422–432)',
    datas: '? – 27 de julho de 432 d.C.',
    origem: 'Campânia, Itália; diácono da Igreja Romana antes da eleição',
    biografia:
      'Celestino I foi eleito Papa em 10 de setembro de 422, sucedendo a Bonifácio I. Seu pontificado de quase 10 anos foi marcado por duas grandes controvérsias: o pelagianismo (que ele condenou definitivamente no Ocidente) e o nestorianismo (que ele condenou no Sínodo de Roma de 430). Celestino era um homem de temperamento firme e de convicções teológicas claras, embora não fosse um teólogo original como Agostinho ou Cirilo. Sua grande contribuição foi a defesa da autoridade papal como árbitro final das disputas doutrinárias: ao condenar Nestório em Roma e encarregar Cirilo de executar a sentença, Celestino estabeleceu um precedente de intervenção papal nos assuntos do Oriente que teria consequências de longo prazo. Morreu em 27 de julho de 432, poucos meses após o concílio de Éfeso, e foi sucedido por Sisto III.',
    papelNoConcilio:
      'Celestino I não compareceu pessoalmente a Éfeso, mas sua autoridade foi o pilar jurídico e teológico da condenação de Nestório. No Sínodo de Roma (agosto de 430), condenou Nestório e deu-lhe 10 dias para retratação. Encarregou Cirilo de executar a sentença em seu nome. Enviou três legados (Arcádio, Projeto e Filipe) com instruções claras: seguir Cirilo e confirmar a condenação. Sua carta Apostolici verba, lida na Sessão II (10 de julho), foi o momento em que Roma ratificou formalmente as decisões de Éfeso e conferiu ao concílio o selo da universalidade.',
    legado:
      'O legado de Celestino I é a afirmação da primazia papal como instância suprema de julgamento doutrinário. Ao condenar Nestório em Roma antes do concílio e ao encarregar Cirilo de executar a sentença, Celestino demonstrou que o Bispo de Roma considerava-se o árbitro final da fé — uma posição que seria confirmada em Calcedônia (451) pelo Papa Leão I e que se tornaria a base da eclesiologia católica romana.',
    obras: [
      'Carta Apostolici verba ao Concílio de Éfeso (431) — lida na Sessão II; ACO I.1.2',
      'Carta a Nestório (430) — ultimato de 10 dias; ACO I.2',
      'Carta a Cirilo (430) — encarregando-o de executar a sentença; ACO I.2',
      'Carta a Teodósio II (430) — pedindo a convocação do concílio; ACO I.2',
      'Carta ao clero e ao povo de Constantinopla (430) — ACO I.2',
    ],
    curiosidade:
      'Celestino I é o Papa que enviou São Patrício à Irlanda (431), no mesmo ano do Concílio de Éfeso. Assim, enquanto os bispos do Oriente debatiam a Theotokos em Éfeso, o futuro padroeiro da Irlanda partia de Roma para evangelizar os celtas — uma coincidência que ilustra a amplitude geográfica da Igreja no século V.',
  },

  // =============================================
  // 7. MEMNON DE ÉFESO
  // =============================================
  {
    nome: 'Memnon de Éfeso',
    nomeGrego: 'Μέμνων Ἐφέσου',
    titulo: 'Bispo de Éfeso (c. 428–431/432)',
    datas: '? – ~432 d.C.',
    origem: 'Éfeso, província da Ásia',
    biografia:
      'Memnon era o bispo da cidade-sede do concílio e um aliado incondicional de Cirilo de Alexandria. Pouco se sabe sobre sua vida antes do concílio, exceto que era um bispo de temperamento enérgico e de lealdade inabalável a Alexandria. Como anfitrião do concílio, Memnon controlava a infraestrutura local: a Igreja de Santa Maria, a hospedagem dos bispos, a segurança e, crucialmente, a mobilização da população de Éfeso. Foi Memnon quem fechou as igrejas da cidade a Nestório e a seus partidários, e quem organizou a multidão que cercou a igreja na noite da Sessão I. Por estas ações, foi deposto pelo contra-concílio de João de Antioquia (27 de junho), mas restaurado pelas sessões posteriores e pela intervenção imperial. Após o concílio, Memnon foi novamente deposto (temporariamente) durante o cisma de 431–433, mas foi definitivamente restaurado pela Fórmula de União.',
    papelNoConcilio:
      'Memnon foi o "braço logístico" de Cirilo em Éfeso. Sem o controle de Memnon sobre a cidade, Cirilo não teria podido abrir o concílio tão rapidamente, nem mobilizar a multidão que pressionou os bispos nestorianos, nem fechar as igrejas a Nestório. O papel de Memnon foi tão decisivo que João de Antioquia o considerou tão culpado quanto Cirilo e o depôs no contra-concílio.',
    legado:
      'O legado de Memnon é inseparável do concílio de Éfeso. Sua mobilização da população local e seu controle da infraestrutura foram fatores decisivos na vitória de Cirilo. Após o concílio, a sé de Éfeso ganhou enorme prestígio como a "cidade do concílio" e o "berço da Theotokos".',
    obras: [],
    curiosidade:
      'A multidão que Memnon mobilizou na noite da Sessão I era tão grande e tão fervorosa que os bispos nestorianos, ao saírem da igreja, foram vaiados e ameaçados. Segundo Sócrates (HE VII.34), as mulheres de Éfeso, que haviam passado a noite inteira em oração diante da igreja, explodiram em júbilo ao ouvir que Nestório havia sido deposto, gritando: "A Theotokos foi vingada!"',
  },

  // =============================================
  // 8. JUVENAL DE JERUSALÉM
  // =============================================
  {
    nome: 'Juvenal de Jerusalém',
    nomeGrego: 'Ἰουβενάλιος Ἱεροσολύμων',
    titulo: 'Bispo de Jerusalém (422–458)',
    datas: '~370 – 2 de julho de 458 d.C.',
    origem: 'Palestina',
    biografia:
      'Juvenal foi bispo de Jerusalém por 36 anos (422–458) e um dos políticos eclesiásticos mais astutos de sua geração. Sua grande ambição era elevar Jerusalém de simples bispado sufragâneo de Cesareia da Palestina a patriarcado independente, rivalizando com Alexandria, Antioquia e Constantinopla. Para alcançar este objetivo, Juvenal adotou uma estratégia de alianças flexíveis: apoiou Cirilo em Éfeso (431) em troca de apoio para sua ambição jurisdicional; apoiou Dióscoro no Latrocínio de Éfeso (449) pela mesma razão; e finalmente apoiou o Papa Leão I em Calcedônia (451), onde sua ambição foi parcialmente realizada (Cânon 28, que elevou Jerusalém a patriarcado, embora com jurisdição limitada à Palestina). Juvenal era um homem de convicções teológicas flexíveis e de instinto político afiado: sua lealdade era, acima de tudo, à sua sé e à sua ambição.',
    papelNoConcilio:
      'Juvenal foi o aliado mais importante de Cirilo entre os bispos palestinos. Trouxe consigo ~15–20 bispos da Palestina, todos leais a Cirilo, e sua assinatura aparece em segundo lugar nos Atos (logo após Cirilo), o que demonstra sua importância. Juvenal apoiou a condenação de Nestório, a proclamação de Theotokos e os 12 Anátemas, e participou de todas as sessões canônicas.',
    legado:
      'O legado de Juvenal é a elevação de Jerusalém a patriarcado, um feito que ele perseguiu durante toda a sua carreira e que foi finalmente alcançado em Calcedônia (451). Sua estratégia de alianças flexíveis (Cirilo → Dióscoro → Leão I) é um exemplo clássico de realpolitik eclesiástica.',
    obras: [
      'Assinaturas nos Atos de Éfeso (ACO I.1.1)',
      'Cartas a Cirilo e a João de Antioquia (431–433) — fragmentos em ACO',
    ],
    curiosidade:
      'Juvenal é um dos poucos bispos da história que participou de três concílios ecumênicos (Éfeso 431, Latrocínio 449, Calcedônia 451) e mudou de lado em cada um deles. Em Éfeso, apoiou Cirilo; no Latrocínio, apoiou Dióscoro (o herdeiro radical de Cirilo); em Calcedônia, abandonou Dióscoro e apoiou o Papa Leão I. Sua sobrevivência política é um testemunho de sua habilidade diplomática excepcional.',
  },

  // =============================================
  // 9. CANDIDIANO
  // =============================================
  {
    nome: 'Candidiano',
    nomeGrego: 'Κανδιδιανός',
    titulo: 'Comes domesticorum (Conde dos Domésticos) — Representante Imperial',
    datas: 'fl. 430–435 d.C.',
    origem: 'Constantinopla; oficial da guarda palaciana',
    biografia:
      'Candidiano era um alto oficial militar do Império Romano do Oriente, detentor do título de comes domesticorum (conde dos domésticos), que o colocava no comando da guarda palaciana imperial. Teodósio II o nomeou como seu representante pessoal no Concílio de Éfeso, com instruções claras: manter a ordem, impedir discussões alheias à fé, e garantir que todos os bispos convocados estivessem presentes antes de qualquer decisão. Candidiano chegou a Éfeso antes da abertura do concílio e tentou mediar entre os partidos, mas foi rapidamente ultrapassado pelos eventos. Na Sessão I (22 de junho), leu a sacra imperial em voz alta e protestou contra a abertura prematura, mas foi ignorado pela maioria ciriliana. Após a Sessão I, Candidiano aliou-se ao partido de João de Antioquia e participou do contra-concílio (26–27 de junho), ajudando a depor Cirilo e Memnon. Sua mudança de lado foi motivada pela convicção de que Cirilo havia violado as ordens imperiais e pela pressão de Teodósio II, que inicialmente favorecia Nestório.',
    papelNoConcilio:
      'Candidiano foi o "árbitro imperial" do concílio e, paradoxalmente, uma das figuras mais impotentes presentes. Suas instruções eram claras, mas sua autoridade era insuficiente para controlar os bispos. Quando Cirilo ignorou suas ordens e abriu a Sessão I sem esperar João de Antioquia, Candidiano protestou, mas não pôde impedir a votação. Sua impotência é um testemunho dos limites do poder imperial sobre a Igreja: o imperador podia convocar e ratificar, mas não podia controlar os bispos uma vez reunidos.',
    legado:
      'O papel de Candidiano em Éfeso é um caso de estudo clássico da relação Igreja-Estado na Antiguidade tardia. Sua incapacidade de controlar o concílio demonstrou que a symphonia imperial tinha limites claros: quando os bispos estavam determinados a agir, o representante imperial era impotente.',
    obras: [
      'Relatórios a Teodósio II sobre o andamento do concílio (431) — mencionados nos Atos',
      'Protesto formal contra a abertura da Sessão I (22 de junho de 431) — ACO I.1.1',
    ],
    curiosidade:
      'Segundo as fontes, quando Candidiano leu a sacra imperial na Sessão I e ordenou que os bispos esperassem a chegada de João de Antioquia, os bispos cirilianos responderam com um grito unânime: "Não esperaremos! A fé não pode esperar!" Candidiano, furioso, saiu da igreja e foi cercar o edifício com seus soldados, tentando impedir que os bispos saíssem até que a questão fosse resolvida. A cena — bispos gritando, soldados cercando a igreja, e a multidão de Éfeso do lado de fora com tochas — é uma das mais dramáticas da história dos concílios.',
  },

  // =============================================
  // 10. TEODORETO DE CIRO
  // =============================================
  {
    nome: 'Teodoreto de Ciro',
    nomeGrego: 'Θεοδώρητος Κύρρου',
    titulo: 'Bispo de Ciro (423–~457)',
    datas: '~393 – ~457 d.C.',
    origem: 'Antioquia, Síria; formação no mosteiro de Nicerte',
    biografia:
      'Teodoreto de Ciro foi o teólogo mais brilhante da Escola de Antioquia após a morte de Teodoro de Mopsuéstia (428) e um dos escritores eclesiásticos mais prolíficos da Antiguidade tardia. Nascido em Antioquia por volta de 393, foi educado no mosteiro de Nicerte, perto de Apameia, onde recebeu uma formação clássica e teológica de primeira linha. Em 423, foi nomeado bispo de Ciro, uma pequena diocese na Síria Euphratensis, onde dedicou-se à pastoral, à construção de igrejas e pontes, e à escrita. Teodoreto era um teólogo da tradição antioquena: enfatizava a distinção das duas naturezas de Cristo, a interpretação literal-histórica das Escrituras, e a rejeição de qualquer linguagem que sugerisse "mistura" (krasis) do divino com o humano. Quando a controvérsia nestoriana estourou, Teodoreto ficou horrorizado com os 12 Anátemas de Cirilo, que ele considerava apolinaristas, e escreveu uma refutação detalhada (Refutatio XII Anathematismorum). Em Éfeso, chegou com João de Antioquia e participou do contra-concílio.',
    papelNoConcilio:
      'Teodoreto chegou a Éfeso com a vanguarda de João de Antioquia e foi um dos 68 bispos que assinaram o protesto contra a abertura prematura da Sessão I. Participou do contra-concílio de João (26–27 de junho) e foi um dos principais teólogos que justificaram a deposição de Cirilo. Após o concílio, Teodoreto continuou a resistir aos 12 Anátemas e só aceitou a Fórmula de União (433) com relutância e ressalvas.',
    legado:
      'O legado de Teodoreto é ambivalente. Por um lado, é um dos maiores exegetas e historiadores da Igreja antiga (sua História Eclesiástica e seus comentários bíblicos são fontes inestimáveis). Por outro lado, seus escritos contra Cirilo foram condenados postumamente no II Concílio de Constantinopla (553) na controvérsia dos Três Capítulos, uma das decisões mais controversas da história dos concílios.',
    obras: [
      'Refutatio XII Anathematismorum (430–431) — PG 76, 393–452; a refutação mais detalhada dos Anátemas de Cirilo',
      'Historia Ecclesiastica (449) — PG 82; história da Igreja de 323 a 428',
      'Historia Religiosa (444) — PG 82; vidas de monges sírios',
      'Eranistes (447) — PG 83; diálogo contra o monofisismo',
      'Comentários sobre os Salmos, Isaías, Jeremias, Ezequiel, Daniel, os Doze Profetas, as Cartas Paulinas — PG 80–82',
      'Haereticarum Fabularum Compendium (452–453) — PG 83; compêndio de heresias',
    ],
    curiosidade:
      'Teodoreto era um homem de contrastes: um teólogo brilhante e um pastor dedicado que construiu igrejas, pontes e aquedutos para sua pequena diocese de Ciro, mas também um polemista feroz que não hesitava em atacar os maiores teólogos de sua época. Sua condenação póstuma em 553 (mais de 90 anos após sua morte) é um dos episódios mais controversos da história dos concílios: o II Concílio de Constantinopla condenou seus escritos contra Cirilo, mas não sua pessoa, criando a situação paradoxal de um santo que era simultaneamente herege.',
  },

  // =============================================
  // 11. ANDRÉ DE SAMÓSATA
  // =============================================
  {
    nome: 'André de Samósata',
    nomeGrego: 'Ἀνδρέας Σαμοσάτων',
    titulo: 'Bispo de Samósata (Samsat, Turquia)',
    datas: 'fl. 425–435 d.C.',
    origem: 'Samósata, Síria Euphratensis',
    biografia:
      'André de Samósata foi um teólogo da Escola de Antioquia e um dos primeiros e mais vigorosos críticos dos 12 Anátemas de Cirilo. Pouco se sabe sobre sua vida pessoal, exceto que era bispo de Samósata (a cidade natal de Luciano de Antioquia, o "mestre" de Ário) e que pertencia ao círculo teológico de João de Antioquia. Quando os 12 Anátemas chegaram à Síria em 430, André foi um dos primeiros a reagir, escrevendo uma refutação detalhada que acusava Cirilo de apolinarismo e de "confusão" (synchysis) das naturezas divina e humana. Sua refutação, junto com a de Teodoreto de Ciro, formou a base teológica da resistência antioquena a Cirilo e foi amplamente circulada entre os bispos sírios antes do concílio.',
    papelNoConcilio:
      'André chegou a Éfeso com João de Antioquia e participou do contra-concílio (26–27 de junho). Foi um dos teólogos que mais insistiram na ilegitimidade da Sessão I e na necessidade de um novo julgamento que incluísse os bispos orientais. Após o concílio, André participou das negociações que levaram à Fórmula de União (433) e aceitou a reconciliação com Cirilo.',
    legado:
      'O legado de André é principalmente o de um teólogo da "via média" antioquena: nem nestoriano radical, nem ciriliano intransigente, mas defensor de uma cristologia equilibrada que preservava tanto a unidade quanto a distinção em Cristo. Suas refutações dos Anátemas são documentos importantes para a compreensão da teologia antioquena.',
    obras: [
      'Refutatio XII Anathematismorum Cyrilli (430) — fragmentos em ACO I.1.6',
      'Carta a Alexandre de Hierápolis (431) — sobre a estratégia do contra-concílio; ACO I.1.3',
      'Carta a João de Antioquia (431) — ACO I.1.4',
    ],
    curiosidade:
      'André de Samósata é um dos poucos teólogos da controvérsia nestoriana que conseguiu manter boas relações com ambos os lados. Sua refutação dos Anátemas era respeitada mesmo por Cirilo, que a considerava mais séria e mais bem argumentada que a de Nestório. Após a Fórmula de União (433), André e Cirilo trocaram cartas cordiais, e André reconheceu que os Anátemas podiam ser interpretados de forma ortodoxa.',
  },

  // =============================================
  // 12. ACÁCIO DE BEREIA
  // =============================================
  {
    nome: 'Acácio de Bereia',
    nomeGrego: 'Ἀκάκιος Βεροίας',
    titulo: 'Bispo de Bereia (Aleppo, Síria)',
    datas: '~322 – ~437 d.C. (viveu ~115 anos)',
    origem: 'Bereia (Aleppo), Síria Secunda',
    biografia:
      'Acácio de Bereia é uma das figuras mais extraordinárias da história da Igreja antiga, não por sua teologia (que era convencionalmente antioquena), mas por sua longevidade lendária. Nascido por volta de 322, Acácio viveu mais de 110 anos e foi bispo de Bereia (a atual Aleppo) por mais de 60 anos. Sua vida abrangeu praticamente toda a era dos grandes concílios: nasceu durante a controvérsia ariana, foi ordenado bispo durante o reinado de Teodósio I, e participou do Concílio de Éfeso (431) com mais de 100 anos de idade. Acácio era respeitado por todos os partidos como um "pai da fé" acima das facções — uma espécie de "consciência moral" da Igreja síria. Sua opinião era solicitada por imperadores, patriarcas e teólogos de todas as tendências.',
    papelNoConcilio:
      'Acácio chegou a Éfeso com João de Antioquia e, apesar de sua idade avançada, participou ativamente das deliberações. Inicialmente simpático a Nestório (por lealdade à tradição antioquena), Acácio mudou de posição durante o concílio e passou a apoiar a condenação, convencido de que Nestório havia de fato caído em erro ao negar Theotokos. Sua mudança de lado foi um golpe devastador para o partido nestoriano: quando o bispo mais velho da cristandade (com mais de 110 anos) declarava que Nestório estava errado, era difícil para os nestorianos manterem sua posição.',
    legado:
      'O legado de Acácio é o de um "patriarca dos patriarcas" — um homem cuja longevidade e cuja integridade moral lhe conferiam uma autoridade que transcendia as facções teológicas. Sua mudança de lado em Éfeso é um dos momentos mais dramáticos do concílio e um testemunho de que a questão da Theotokos não era uma disputa partidária, mas uma questão de fé que transcendia as lealdades pessoais.',
    obras: [
      'Carta a Teodósio II (431) — apelando pela condenação de Nestório; ACO I.1.1',
      'Carta a Cirilo (432) — sobre a reconciliação com João de Antioquia; ACO I.1.4',
    ],
    curiosidade:
      'Quando Acácio, com mais de 110 anos, entrou na Igreja de Santa Maria para a Sessão IV (16 de julho de 431), os bispos presentes levantaram-se em uníssono e aclamaram-no como "o pai de todos nós". Segundo as fontes, Acácio respondeu com voz trêmula mas firme: "Eu vi Ário, eu vi Atanásio, eu vi Teodósio o Grande, e agora vejo Nestório. Todos passaram, e a fé permanece. Que a Theotokos seja glorificada para sempre." Se esta citação é autêntica ou hagiográfica, é impossível saber — mas ela captura a aura de autoridade moral que cercava o bispo mais velho da cristandade.',
  },
]