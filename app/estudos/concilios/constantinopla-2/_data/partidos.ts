export const resumoPartidos =
  'Em 553, o espectro teológico do cristianismo era consideravelmente mais complexo do que em 325 ou 381. A divisão fundamental não era mais entre arianos e nicenos (o arianismo estava praticamente extinto no Império), mas entre calcedonianos e miafisitas — e, dentro do campo calcedoniano, entre os "calcedonianos estritos" (que defendiam a intangibilidade da letra de Calcedônia) e os "neo-calcedonianos" (que reinterpretavam Calcedônia à luz de Cirilo de Alexandria). A controvérsia dos Três Capítulos era, em essência, um conflito intra-calcedoniano: Justiniano e os neo-calcedonianos queriam purgar Calcedônia de resíduos nestorianos; os calcedonianos estritos viam essa purgação como uma traição ao IV Concílio. Os miafisitas, embora fossem o motivo indireto da controvérsia, não participaram do concílio e consideraram suas decisões insuficientes.'

export const espectroTeologico = [
  'Nestorianismo radical (Igreja do Oriente na Pérsia): duas naturezas, duas hipóstases, duas prosopa — fora do Império, mas sua sombra teológica era o pretexto do concílio',
  'Diofisismo antioqueno moderado (Teodoro de Mopsuéstia, Teodoreto, Ibas): duas naturezas, uma prosopon de união — a posição dos Três Capítulos condenados',
  'Calcedonianismo estrito / "Leontino" (Papa Vigílio, bispos africanos e ilírios): duas naturezas em uma hipóstase, leitura literal de Calcedônia, rejeição de qualquer condenação dos Três Capítulos',
  'Neo-Calcedonianismo / Cirilo-Calcedonianismo (Justiniano, Eutíquio, a maioria dos bispos orientais): duas naturezas em uma hipóstase, mas lidas à luz da "mia physis" de Cirilo; aceitação do theopaschismo; condenação dos Três Capítulos',
  'Miafisismo moderado / Severiano (Severo de Antioquia, Teodósio de Alexandria): uma natureza encarnada do Verbo, rejeição de Calcedônia como nestoriana, mas condenação de Eutiques — a posição da maioria no Egito e na Síria',
  'Eutiquianismo / Monofisismo extremo (Acephali, alguns monges egípcios): uma natureza mista, confusão das naturezas, rejeição de qualquer compromisso — minoritário mas vocal',
  'Origenismo (monges da Nova Laura, Leôncio de Bizâncio): preexistência das almas, apocatástase, subordinação trinitária — uma questão paralela mas presente',
]

export const partidos = [
  // =============================================
  // 1. CALCEDONIANOS ESTRITOS
  // =============================================
  {
    nome: 'Calcedonianos Estritos (Diofisitas Leontinos)',
    nomeAlternativo: 'Partido Leonino, Calcedonianos Ocidentais',
    lider: 'Papa Vigílio (inicialmente), Facundo de Hermiane, Dácio de Milão, bispos do Ilírico e norte da África',
    periodo: 'Ativos de 544 a 565+',
    termoChave: 'Intangibilitas Chalcedonensis (intangibilidade de Calcedônia)',
    descricao:
      'Os calcedonianos estritos defendiam que a Definição de Calcedônia (451) era a expressão perfeita e definitiva da fé cristológica e que qualquer tentativa de "completá-la", "reinterpretá-la" ou "purificá-la" era um ataque à sua autoridade. Para eles, os Três Capítulos haviam sido examinados e aprovados (ou pelo menos tolerados) por Calcedônia, e condená-los era contradizer o IV Concílio. Eles liam Calcedônia de forma literal, enfatizando as "duas naturezas" (δύο φύσεις) e resistindo à fórmula cirilina "uma natureza encarnada". Sua referência teológica principal era o Tomo de Leão Magno (449), que haviam recebido como a interpretação autorizada de Calcedônia.',
    posicaoSobreOFilho:
      'Duas naturezas em uma hipóstase, com ênfase na distinção real e permanente das naturezas após a união. O Logos divino não sofre; é a natureza humana que sofre. A comunicação de idiomas (communicatio idiomatum) é verbal, não real.',
    posicaoSobreCalcedonia:
      'Calcedônia é intocável e irreformável. Seus atos (incluindo a reabilitação de Teodoreto e Ibas) são tão dogmáticos quanto sua Definição de Fé. Qualquer ataque aos seus "capítulos" é um ataque à fé apostólica.',
    argumentosPrincipais: [
      'Calcedônia examinou a Carta de Ibas e a declarou ortodoxa (Sessão X, 451); condená-la é contradizer Calcedônia',
      'Teodoreto foi reabilitado por Calcedônia após anatematizar Nestório; condenar seus escritos é anular sua reabilitação',
      'Teodoro de Mopsuéstia morreu em comunhão com a Igreja; a condenação póstuma viola o direito canônico',
      'A condenação dos Três Capítulos é uma concessão disfarçada aos miafisitas, que acabarão exigindo a condenação do próprio Tomo de Leão',
      'Um concílio ecumênico não pode ser celebrado sem a participação do Papa (argumento contra a legitimidade de 553)',
    ],
    refutacao:
      'Os neo-calcedonianos respondiam que Calcedônia havia julgado as pessoas (prosopa), não os escritos (scripta), e que a oikonomia de 451 não impediria um julgamento dogmático posterior dos textos. Além disso, argumentavam que a verdadeira fé de Calcedônia era a de Cirilo, não a de Teodoro.',
    baseGeografica: 'Roma, norte da Itália (Milão, Aquileia), Dalmácia, Ilírico, norte da África (Cartago, Hadrumeto)',
    forcaNumerica: 'Minoritários no concílio (~6 bispos africanos presentes), mas majoritários no Ocidente latino',
    statusNoConcilio:
      'Derrotados. Suas objeções foram ignoradas pela maioria oriental. O cisma tricapitolino que provocaram no Ocidente durou até 698.',
  },

  // =============================================
  // 2. NEO-CALCEDONIANOS
  // =============================================
  {
    nome: 'Neo-Calcedonianos (Cirilo-Calcedonianos)',
    nomeAlternativo: 'Partido Imperial, Cirilianos de Direita',
    lider: 'Justiniano I, Eutíquio de Constantinopla, Apolinário de Alexandria, Domnino de Antioquia',
    periodo: 'Dominantes de 532 a 565+',
    termoChave: 'Mia physis tou Theou Logou sesarkomene (μία φύσις τοῦ Θεοῦ Λόγου σεσαρκωμένη)',
    descricao:
      'Os neo-calcedonianos eram a facção dominante no concílio e no Império. Sua tese central era que a Definição de Calcedônia (451) e a cristologia de Cirilo de Alexandria (†444) eram perfeitamente compatíveis e complementares. Eles liam as "duas naturezas" de Calcedônia à luz da "uma natureza encarnada" de Cirilo, argumentando que "natureza" (physis) em Cirilo significava "hipóstase" (hypostasis), não "essência" (ousia). Assim, "duas naturezas" e "uma natureza" não eram contraditórias, mas complementares: duas naturezas em abstrato, uma hipóstase encarnada em concreto. Eles promoviam o theopaschismo ("um da Trindade sofreu na carne") e a condenação dos Três Capítulos como forma de purgar Calcedônia de resíduos nestorianos.',
    posicaoSobreOFilho:
      'Uma hipóstase composta (σύνθετος ὑπόστασις) de duas naturezas. O sujeito único de todos os atos de Cristo (divinos e humanos) é o Logos encarnado. A comunicação de idiomas é real, não apenas verbal: o Logos verdadeiramente sofreu na carne.',
    posicaoSobreCalcedonia:
      'Calcedônia é ortodoxa e irreformável em sua Definição de Fé, mas seus atos disciplinares (reabilitação de Teodoreto e Ibas) são passíveis de revisão. A verdadeira hermenêutica de Calcedônia é cirilina, não antioquena.',
    argumentosPrincipais: [
      'Cirilo de Alexandria é o "selo dos Padres" e a norma da ortodoxia cristológica; qualquer escrito que o contradiga é herético',
      'Os Três Capítulos contêm linguagem nestoriana objetiva (dois filhos, negação da Theotokos, inhabitação), independentemente da intenção de seus autores',
      'A condenação dos escritos não é uma condenação das pessoas; Calcedônia absolveu as pessoas, não canonizou os textos',
      'A fórmula theopaschita é ortodoxa e foi aprovada pelo Papa João II em 533',
      'A unidade da Igreja exige a remoção de qualquer obstáculo à reconciliação com os miafisitas',
    ],
    refutacao:
      'Os calcedonianos estritos respondiam que a hermenêutica cirilina de Calcedônia era uma distorção: os padres de 451 haviam deliberadamente escolhido a linguagem de "duas naturezas" (contra Cirilo) e haviam rejeitado a "mia physis". Os miafisitas, por sua vez, argumentavam que a síntese neo-calcedoniana era contraditória e que Calcedônia era irremediavelmente nestoriana.',
    baseGeografica: 'Constantinopla, Ásia Menor, Trácia, Síria calcedoniana, Palestina',
    forcaNumerica: 'Esmagadora maioria no concílio (~140 dos ~152 bispos)',
    statusNoConcilio:
      'Vitoriosos. Suas teses foram incorporadas nos 14 anátemas e na sentença final. A síntese cirilo-calcedoniana tornou-se a ortodoxia oficial do Império.',
  },

  // =============================================
  // 3. MIAFISITAS
  // =============================================
  {
    nome: 'Miafisitas (Monofisitas Moderados / Severianos)',
    nomeAlternativo: 'Cirilianos de Esquerda, Anti-Calcedonianos, Jacobitas (após 542)',
    lider: 'Severo de Antioquia (†538, influência póstuma), Teodósio de Alexandria (†566), Jacobo Baradeu (†578)',
    periodo: 'Ativos de 451 em diante; organizados como hierarquia paralela a partir de 542',
    termoChave: 'Mia physis tou Theou Logou sesarkomene (μία φύσις τοῦ Θεοῦ Λόγου σεσαρκωμένη) — com interpretação diferente dos neo-calcedonianos',
    descricao:
      'Os miafisitas eram a maior comunidade cristã do Egito e da Síria, mas estavam completamente ausentes do concílio. Eles rejeitavam Calcedônia como nestoriana e insistiam na fórmula cirilina "uma natureza encarnada do Verbo" em seu sentido literal: após a encarnação, há apenas uma natureza (physis) em Cristo, a divina, que assumiu a humanidade sem se misturar com ela. Diferentemente dos eutiquianos, os miafisitas severianos condenavam Eutiques e insistiam que a humanidade de Cristo era real e completa; eles apenas rejeitavam a linguagem de "duas naturezas" por considerá-la inevitavelmente divisiva. A condenação dos Três Capítulos por Justiniano era, para eles, um passo na direção certa, mas insuficiente: o verdadeiro problema era Calcedônia em si, não apenas seus "capítulos".',
    posicaoSobreOFilho:
      'Uma natureza encarnada do Verbo (mia physis sesarkomene). A humanidade de Cristo é real e completa, mas não constitui uma "natureza" separada após a união. A distinção entre divindade e humanidade é teórica (theoria), não real (pragma).',
    posicaoSobreCalcedonia:
      'Calcedônia é herética e deve ser rejeitada integralmente. A Definição de "duas naturezas" é um retorno ao nestorianismo. A condenação dos Três Capítulos é insuficiente porque o problema está na Definição, não nos capítulos.',
    argumentosPrincipais: [
      'Cirilo de Alexandria, o maior doutor da Igreja, ensinou "uma natureza encarnada"; Calcedônia ensinou "duas naturezas" — logo, Calcedônia contradiz Cirilo',
      'A Definição de Calcedônia foi imposta pelo imperador Marciano contra a vontade do povo egípcio e sírio',
      'Os Três Capítulos são apenas sintomas; a doença é a diofisita de Calcedônia',
      'A perseguição imperial contra os miafisitas (de Justino I a Justiniano) prova que Calcedônia é uma imposição política, não uma verdade teológica',
    ],
    refutacao:
      'Os neo-calcedonianos respondiam que a "mia physis" de Cirilo era compatível com as "duas naturezas" de Calcedônia se lida corretamente. Os calcedonianos estritos argumentavam que os miafisitas eram eutiquianos disfarçados. Os próprios miafisitas rejeitavam ambas as respostas.',
    baseGeografica: 'Egito (maioria absoluta), Síria (maioria), Armênia, Mesopotâmia, Etiópia',
    forcaNumerica: 'Majoritários nas províncias orientais do Império (~15–20 milhões de fiéis), mas zero representantes no concílio',
    statusNoConcilio:
      'Ausentes e não representados. O concílio não os convidou e não negociou com eles. A condenação dos Três Capítulos não os satisfez, e a divisão persistiu até a conquista árabe (634–642).',
  },

  // =============================================
  // 4. NESTORIANOS RESIDUAIS
  // =============================================
  {
    nome: 'Nestorianos Residuais (Igreja do Oriente)',
    nomeAlternativo: 'Diofisitas Radicais, Escola de Nísibis, "Persas"',
    lider: 'Patriarca da Igreja do Oriente em Ctesifonte (Pérsia); herança teológica de Teodoro de Mopsuéstia e Nestório',
    periodo: 'Organizados como igreja independente desde 484 (Sínodo de Beth Lapat)',
    termoChave: 'Duo qnome (duas qnome/naturezas em duas hipóstases unidas em uma prosopon)',
    descricao:
      'Os nestorianos propriamente ditos estavam fora do Império Bizantino, organizados na Igreja do Oriente sob o Império Sassânida (Pérsia). Eles seguiam a cristologia de Teodoro de Mopsuéstia em sua forma mais radical: duas naturezas (kyana), duas hipóstases (qnoma), unidas em uma única "prosopon" (aparência/pessoa exterior). Eles rejeitavam tanto Calcedônia quanto Cirilo, considerando ambos como formas de monofisismo. Embora ausentes do concílio, sua teologia era o alvo indireto dos 14 anátemas: a condenação dos Três Capítulos era, em grande medida, uma condenação da tradição teológica que os nestorianos haviam preservado.',
    posicaoSobreOFilho:
      'Duas naturezas e duas hipóstases em Cristo, unidas em uma prosopon de união. O Logos habita no homem Jesus como em um templo. Maria é Christotokos (Mãe de Cristo), não Theotokos (Mãe de Deus). O sofrimento e a morte pertencem exclusivamente à natureza humana.',
    posicaoSobreCalcedonia:
      'Calcedônia é insuficientemente diofisita: ao falar de "uma hipóstase", Calcedônia já caiu no monofisismo ciriliano. A verdadeira fé é a de Teodoro de Mopsuéstia.',
    argumentosPrincipais: [
      'Teodoro de Mopsuéstia é o "Doutor universal" e o exegeta mais fiel da Escritura',
      'A união hipostática (uma hipóstase) confunde as duas naturezas e leva ao monofisismo',
      'A Theotokos é uma inovação ciriliana sem base bíblica; Maria gerou o homem Jesus, não o Logos eterno',
      'O theopaschismo ("Deus sofreu") é uma blasfêmia que atribui sofrimento à divindade imutável',
    ],
    refutacao:
      'Os 14 anátemas do concílio foram escritos precisamente contra essas posições. O Anátema III condena a divisão em duas hipóstases; o Anátema VI reafirma a Theotokos; o Anátema IX afirma o theopaschismo; o Anátema XII condena Teodoro de Mopsuéstia nominalmente.',
    baseGeografica: 'Império Sassânida (Pérsia), Mesopotâmia, Índia (Kerala), Ásia Central',
    forcaNumerica: 'Fora do Império Bizantino; numericamente significativos na Pérsia (~5–8 milhões), mas irrelevantes para o concílio',
    statusNoConcilio:
      'Ausentes e não convidados. Sua teologia foi condenada indiretamente através dos Três Capítulos e diretamente nos 14 anátemas.',
  },

  // =============================================
  // 5. ORIGENISTAS
  // =============================================
  {
    nome: 'Origenistas',
    nomeAlternativo: 'Origenistas da Nova Laura, Isochristoi',
    lider: 'Monges da Nova Laura (Palestina), Nonno e Leôncio de Bizâncio (ambíguo)',
    periodo: 'Ativos nos mosteiros palestinos de 520 a 553',
    termoChave: 'Apokatastasis (ἀποκατάστασις — restauração universal)',
    descricao:
      'Os origenistas eram uma corrente teológica minoritária mas intelectualmente influente, centrada nos mosteiros da Palestina (especialmente a Nova Laura, perto de Jerusalém). Eles seguiam as especulações de Orígenes de Alexandria (†254) sobre a preexistência das almas, a queda das inteligências do mundo espiritual, a natureza esférica dos corpos ressuscitados e a apocatástase (salvação universal de todos os seres, incluindo os demônios). Embora a questão origenista fosse tecnicamente separada da controvérsia dos Três Capítulos, Justiniano a incluiu na agenda do concílio (ou de um sínodo preparatório) para eliminar todas as fontes de heterodoxia de uma vez.',
    posicaoSobreOFilho:
      'Variável. Alguns origenistas (os "isocristos") ensinavam que a alma de Cristo era preexistente como todas as outras almas e que, na ressurreição, todas as almas se tornariam iguais a Cristo (iso-christoi). Esta posição era considerada blasfema tanto por calcedonianos quanto por miafisitas.',
    posicaoSobreCalcedonia:
      'Ambígua. A maioria dos origenistas era formalmente calcedoniana, mas suas especulações cosmológicas e escatológicas iam muito além de Calcedônia.',
    argumentosPrincipais: [
      'As almas preexistem aos corpos e foram criadas antes da fundação do mundo',
      'A queda das almas do mundo inteligível é a causa da criação material',
      'Os corpos ressuscitados serão esféricos, como os corpos celestes',
      'A apocatástase é a consequência lógica da bondade infinita de Deus: todos serão salvos, incluindo Satanás',
      'A Escritura deve ser interpretada alegoricamente, não literalmente',
    ],
    refutacao:
      'Os 15 anátemas contra Orígenes (atribuídos ao concílio ou ao sínodo de 543) condenam cada uma dessas proposições. A refutação principal é que a preexistência das almas contradiz a criação ex nihilo, que a apocatástase contradiz a eternidade das penas (Mt 25,46), e que a natureza esférica dos corpos ressuscitados contradiz a ressurreição da carne.',
    baseGeografica: 'Mosteiros da Palestina (Nova Laura, Grande Laura), alguns círculos intelectuais em Constantinopla',
    forcaNumerica: 'Minoritários (~50–100 monges), mas intelectualmente influentes',
    statusNoConcilio:
      'Condenados. Os 15 anátemas contra Orígenes foram incorporados às decisões do concílio (ou de um sínodo preparatório em 553). A questão de sua atribuição exata permanece debatida.',
  },

  // =============================================
  // 6. ACEPHALI
  // =============================================
  {
    nome: 'Acephali (Monofisitas Extremistas)',
    nomeAlternativo: 'Sem-Cabeça, Eutiquianos Radicais',
    lider: 'Sem liderança central (daí o nome "acephali" = "sem cabeça")',
    periodo: 'Ativos de 482 em diante, especialmente no Egito rural',
    termoChave: 'Phthartolatria (adoração do corruptível) — acusação contra os calcedonianos',
    descricao:
      'Os Acephali eram a facção mais radical do monofisismo, rejeitando qualquer compromisso — incluindo o Henótico de Zenão (482), que os miafisitas moderados aceitavam. Eles se separaram tanto dos calcedonianos quanto dos miafisitas severianos, formando comunidades independentes sem hierarquia episcopal reconhecida (daí o nome "sem cabeça"). Sua cristologia tendia ao eutiquianismo: a humanidade de Cristo era absorvida pela divindade como "uma gota de mel no oceano". Eles rejeitavam a Theotokos não por razões nestorianas, mas porque consideravam que a carne de Cristo era de origem celestial, não humana.',
    posicaoSobreOFilho:
      'Uma natureza divina que absorveu a humanidade. A carne de Cristo é incorruptível desde a concepção (aphthartodocetismo). O sofrimento de Cristo foi aparente, não real.',
    posicaoSobreCalcedonia:
      'Calcedônia é a "sinagoga de Satanás". Qualquer compromisso com Calcedônia (incluindo o Henótico e a condenação dos Três Capítulos) é traição.',
    argumentosPrincipais: [
      'A humanidade de Cristo foi completamente absorvida pela divindade na encarnação',
      'Qualquer distinção de naturezas após a união é nestorianismo',
      'O Henótico é uma traição porque não condena Calcedônia explicitamente',
      'Os miafisitas moderados (Severo) são "cripto-calcedonianos" por aceitarem compromissos',
    ],
    refutacao:
      'Tanto calcedonianos quanto miafisitas moderados condenavam os Acephali como eutiquianos. Severo de Antioquia escreveu extensivamente contra eles, insistindo que a humanidade de Cristo era real e completa.',
    baseGeografica: 'Egito rural (Alto Egito, Tebaida), algumas comunidades na Síria',
    forcaNumerica: 'Numericamente expressivos no Egito rural, mas politicamente irrelevantes',
    statusNoConcilio:
      'Completamente ignorados. O concílio não os mencionou e não os condenou nominalmente, pois eram irrelevantes para a controvérsia dos Três Capítulos.',
  },
]

export const quemFoiCondenadoPorNome = {
  titulo: 'Condenações Nominais do Concílio',
  observacaoGeral:
    'O V Concílio Ecumênico condenou nominalmente três indivíduos já falecidos e uma série de heresiarcas históricos. A condenação dos Três Capítulos foi a primeira condenação póstuma da história dos concílios ecumênicos e permanece a mais controversa.',
  detalhes: [
    'Teodoro de Mopsuéstia (†428): condenado nominalmente no Anátema XII — "Se alguém defende Teodoro de Mopsuéstia e seus escritos ímpios... seja anátema". É a condenação mais grave, pois ataca a pessoa e toda a sua obra.',
    'Teodoreto de Ciro (†~457): condenado parcialmente no Anátema XIII — apenas seus escritos contra Cirilo de Alexandria e o I Concílio de Éfeso, não toda a sua obra. A distinção entre "escritos heréticos" e "escritos ortodoxos" do mesmo autor foi criticada como artificial.',
    'Ibas de Edessa (†457): condenado parcialmente no Anátema XIV — especificamente a Carta a Mari, o Persa, não toda a sua correspondência.',
    'Nestório (†~451): recondenado no Anátema XI como parte da lista cumulativa de hereges (Ário, Eunômio, Macedônio, Apolinário, Nestório, Eutiques, Orígenes).',
    'Eutiques (†~454): recondenado no Anátema XI.',
    'Orígenes de Alexandria (†~254): condenado no Anátema XI e nos 15 anátemas separados.',
    'Diodoro de Tarso (†~390): mencionado indiretamente como mestre de Teodoro de Mopsuéstia, mas não condenado nominalmente — uma omissão significativa que os defensores dos Três Capítulos consideravam inconsistente.',
  ],
}

export const oQueNaoFoiTocado = {
  titulo: 'O Que o Concílio Deliberadamente Não Abordou',
  introducao:
    'Apesar de sua abrangência cristológica, o V Concílio deixou várias questões importantes em aberto. Algumas foram evitadas deliberadamente para não ampliar a controvérsia; outras simplesmente não estavam na agenda imperial.',
  itens: [
    {
      topico: 'A Questão Miafisita Direta',
      explicacao:
        'O concílio não condenou o miafisismo como tal, nem os líderes miafisitas (Severo de Antioquia já havia sido condenado em 536). O alvo era o nestorianismo residual, não o monofisismo. Justiniano esperava que a condenação dos Três Capítulos fosse suficiente para trazer os miafisitas de volta, sem necessidade de novas condenações.',
    },
    {
      topico: 'A Vontade e a Energia de Cristo',
      explicacao:
        'A questão de se Cristo tinha uma ou duas vontades (monotelismo vs. ditelismo) e uma ou duas energias (monoenergismo vs. dioenergismo) não foi abordada. Esta questão só seria resolvida no VI Concílio Ecumênico (Constantinopla III, 680–681), mais de um século depois.',
    },
    {
      topico: 'A Autoridade do Tomo de Leão',
      explicacao:
        'Embora os calcedonianos estritos temessem que a condenação dos Três Capítulos levasse à condenação do Tomo de Leão Magno (449), o concílio evitou cuidadosamente qualquer menção ao Tomo. Justiniano sabia que atacar o Tomo seria romper definitivamente com Roma.',
    },
    {
      topico: 'A Primazia Papal',
      explicacao:
        'O concílio não discutiu a questão da primazia papal, embora o caso de Vigílio a tornasse inevitável. A relação entre a autoridade do papa e a autoridade do concílio permaneceu ambígua — uma ambiguidade que seria explorada durante o Grande Cisma de 1054.',
    },
    {
      topico: 'A Legitimidade da Condenação Póstuma',
      explicacao:
        'O concílio não produziu uma justificação canônica formal para a condenação de mortos. Os 14 anátemas simplesmente condenam, sem discutir se a condenação póstuma é canonicamente legítima. Esta lacuna seria debatida por canonistas medievais.',
    },
    {
      topico: 'A Organização Eclesiástica da Pentarquia',
      explicacao:
        'Embora a Novela 131 de Justiniano (545) tivesse formalizado a Pentarquia, o concílio não emitiu cânones sobre a organização eclesiástica. A questão da primazia de Constantinopla (Cânon 28 de Calcedônia) não foi revisitada.',
    },
  ],
}