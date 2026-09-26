export const resumoAntecedentes =
  'Os cem anos que separam o Concílio de Calcedônia (451) do Concílio de Constantinopla II (553) constituem o período mais turbulento da história cristológica da Igreja. O que deveria ter sido a solução definitiva — a Definição de Calcedônia com suas "duas naturezas em uma hipóstase" — tornou-se, paradoxalmente, a origem de novas divisões. O Egito e a Síria rejeitaram Calcedônia quase unanimemente, vendo na fórmula diofisita um retorno ao nestorianismo. Os imperadores oscilaram entre a imposição de Calcedônia e tentativas de compromisso (o Henótico de Zenão, as conferências de Justiniano), enquanto o papado defendia a intangibilidade do IV Concílio. A controvérsia dos Três Capítulos, que eclodiu em 543/544, foi o ponto de convergência de todas essas tensões acumuladas ao longo de um século.'

export const antecedentes = [
  // =============================================
  // PERÍODO 1: 451–482
  // =============================================
  {
    periodo: '451–482',
    titulo: 'A Crise Pós-Calcedônia Imediata',
    descricaoGeral:
      'A Definição de Calcedônia (451) foi recebida com entusiasmo em Roma e em Constantinopla, mas provocou revolta imediata no Egito e na Síria. Os miafisitas — seguidores da fórmula cirilina "uma natureza encarnada do Verbo" — viram nas "duas naturezas" de Calcedônia uma traição a Cirilo de Alexandria e um retorno velado ao nestorianismo. A resistência foi tão violenta que, em menos de uma década, o Egito estava praticamente perdido para a comunhão calcedoniana.',
    eventos: [
      {
        ano: '451',
        titulo: 'O Concílio de Calcedônia e a Definição Diofisita',
        descricao:
          'O IV Concílio Ecumênico, reunido em Calcedônia (atual Kadıköy, Turquia), promulgou a Definição de Fé que confessava Cristo "em duas naturezas, sem confusão, sem mudança, sem divisão, sem separação" (ἀσυγχύτως, ἀτρέπτως, ἀδιαιρέτως, ἀχωρίστως). A fórmula buscava um meio-termo entre o nestorianismo (duas hipóstases) e o eutiquianismo (uma natureza mista). O Papa Leão Magno a celebrou como o triunfo da ortodoxia; os egípcios a viram como uma heresia.',
        importancia:
          'A Definição de Calcedônia tornou-se o padrão da ortodoxia no Ocidente e em parte do Oriente, mas também a pedra de tropeço que dividiu a cristandade oriental por séculos. Toda a controvérsia dos Três Capítulos gira em torno da interpretação correta desta Definição.',
        fontes: [
          'ACO II.1–II.3 (ed. Schwartz)',
          'Leão Magno, Tomus ad Flavianum',
          'Evágrio, HE II.4–5',
        ],
      },
      {
        ano: '451–454',
        titulo: 'A Revolta Monofisita no Egito',
        descricao:
          'Quando o imperador Marciano tentou impor Calcedônia no Egito, a população de Alexandria se revoltou. O patriarca calcedoniano Protério, imposto pelo trono, foi linchado pela multidão em 457 e seu corpo arrastado pelas ruas e queimado. Os egípcios elegeram Timóteo Eluro (Timóteo II), um monge miafisita, como seu verdadeiro patriarca. Desde então, o Egito teve dois patriarcas rivais: um calcedoniano (nomeado pelo imperador) e um miafisita (eleito pelo povo).',
        importancia:
          'A revolta egípcia demonstrou que Calcedônia não tinha aceitação popular no Oriente. A divisão patriarcal do Egito (que persiste até hoje entre a Igreja Copta Ortodoxa e o Patriarcado Grego de Alexandria) nasceu neste momento.',
        fontes: [
          'Evágrio, HE II.8',
          'Zacarias Retor, HE IV.1–3',
          'João de Nikiu, Crônica 84',
        ],
      },
      {
        ano: '457',
        titulo: 'Assassinato de Protério de Alexandria',
        descricao:
          'Protério, o patriarca calcedoniano de Alexandria nomeado após a deposição de Dioscuro em Calcedônia, foi assassinado por uma multidão de monges e leigos miafisitas na Quinta-Feira Santa de 457. Seu corpo foi mutilado, arrastado pelas ruas e queimado no Serapeu. O evento chocou o mundo cristão e revelou a profundidade da rejeição egípcia a Calcedônia.',
        importancia:
          'O assassinato de Protério tornou impossível qualquer imposição pacífica de Calcedônia no Egito. Os imperadores subsequentes teriam que escolher entre a coerção militar (cara e impopular) e o compromisso teológico (que o papado rejeitava).',
        fontes: [
          'Evágrio, HE II.8',
          'Libério, Breviarium 14',
          'Pseudo-Zacarias, HE IV.2',
        ],
      },
      {
        ano: '475–476',
        titulo: 'A Encíclica de Basilisco e a Breve Vitória Miafisita',
        descricao:
          'O usurpador Basilisco, que depôs temporariamente o imperador Zenão (475–476), emitiu a Encíclica (Enkyklion) que condenava o Tomo de Leão e a Definição de Calcedônia, restaurando oficialmente a fé miafisita como norma imperial. Timóteo Eluro foi reconhecido como patriarca de Alexandria. No entanto, a reação calcedoniana foi rápida: o patriarca de Constantinopla, Acácio, mobilizou os monges da capital, e Zenão reconquistou o trono em 476, revogando a Encíclica.',
        importancia:
          'O episódio de Basilisco mostrou que a questão cristológica era inseparável da política imperial. Cada mudança de imperador trazia uma mudança de política religiosa, criando uma instabilidade crônica que duraria até Justiniano.',
        fontes: [
          'Evágrio, HE III.4–7',
          'Teófanes, AM 5967',
          'Zacarias Retor, HE V.1–2',
        ],
      },
      {
        ano: '482',
        titulo: 'O Henótico de Zenão — A Tentativa de Compromisso',
        descricao:
          'O imperador Zenão (474–491), aconselhado pelo patriarca Acácio de Constantinopla, promulgou o Henótico (Ἑνωτικόν, "Ato de União"), um édito de compromisso que reafirmava os credos de Niceia e Constantinopla I, condenava tanto Nestório quanto Eutiques, e aceitava os 12 Anátemas de Cirilo, mas deliberadamente evitava qualquer menção a Calcedônia ou ao Tomo de Leão. O objetivo era criar uma fórmula mínima que tanto calcedonianos quanto miafisitas pudessem aceitar.',
        importancia:
          'O Henótico foi a primeira grande tentativa de superar a divisão de Calcedônia pelo silêncio (omitir os pontos controversos). Funcionou parcialmente no Oriente por 30 anos, mas provocou o Cisma Acaciano com Roma, que não aceitava a omissão de Calcedônia.',
        fontes: [
          'Evágrio, HE III.14',
          'O texto integral do Henótico em ACO III',
          'Félix III, Epistulae 9–10',
        ],
      },
    ],
  },

  // =============================================
  // PERÍODO 2: 482–518
  // =============================================
  {
    periodo: '482–518',
    titulo: 'O Cisma Acaciano e a Era do Henótico',
    descricaoGeral:
      'O Henótico de Zenão (482) conseguiu uma paz precária no Oriente, mas ao custo de romper com Roma. O Papa Félix III excomungou o patriarca Acácio de Constantinopla em 484, inaugurando o primeiro grande cisma entre o Oriente e o Ocidente — o Cisma Acaciano, que duraria 35 anos (484–519). Durante esse período, os imperadores Zenão e Anastácio I governaram com uma política religiosa ambígua, tolerando os miafisitas sem rejeitar formalmente Calcedônia.',
    eventos: [
      {
        ano: '484',
        titulo: 'Excomunhão de Acácio pelo Papa Félix III',
        descricao:
          'O Papa Félix III (483–492) convocou um sínodo romano que excomungou o patriarca Acácio de Constantinopla por ter promulgado o Henótico e por ter entrado em comunhão com Pedro Mongo, o patriarca miafisita de Alexandria. A excomunhão foi comunicada a Acácio por legados papais, que foram presos e forçados a entrar em comunhão com Acácio sob ameaça de morte. O cisma estava consumado.',
        importancia:
          'O Cisma Acaciano foi o primeiro rompimento formal entre Roma e Constantinopla, precedendo o Grande Cisma de 1054 em mais de 500 anos. Ele estabeleceu o precedente de que o papado não aceitaria qualquer compromisso que omitisse Calcedônia — uma posição que seria crucial na controvérsia dos Três Capítulos.',
        fontes: [
          'Félix III, Epistulae 9–12',
          'Liber Pontificalis, Vita Felicis',
          'Evágrio, HE III.21',
        ],
      },
      {
        ano: '489',
        titulo: 'Fechamento da Escola de Edessa',
        descricao:
          'O imperador Zenão ordenou o fechamento da Escola de Edessa (a "Escola dos Persas"), o principal centro de teologia nestoriana no Império. Os professores e estudantes, liderados por Narsai, fugiram para Nísibis, em território persa, onde fundaram a Escola de Nísibis, que se tornaria o centro intelectual da Igreja do Oriente (nestoriana).',
        importancia:
          'A expulsão dos nestorianos do Império consolidou a Igreja do Oriente na Pérsia e criou uma "igreja rival" fora das fronteiras imperiais. A sombra do nestorianismo — agora associado à Pérsia, o inimigo geopolítico de Bizâncio — seria um dos motores da controvérsia dos Três Capítulos.',
        fontes: [
          'Barhadbeshabba, Historia da Escola de Nísibis',
          'Teodoro Bar Koni, Liber Scholiorum',
        ],
      },
      {
        ano: '491–518',
        titulo: 'O Reinado de Anastácio I e a Virada Miafisita',
        descricao:
          'O imperador Anastácio I (491–518), pessoalmente simpatizante do miafisismo, governou com uma política cada vez mais favorável aos anti-calcedonianos. Ele depôs patriarcas calcedonianos (Eufêmio de Constantinopla em 496, Macedônio II em 511) e os substituiu por figuras de tendência miafisita (Timóteo I de Constantinopla). Em 511, o patriarca de Antioquia, Flaviano II, foi deposto e substituído por Severo de Antioquia, o maior teólogo miafisita da história.',
        importancia:
          'O reinado de Anastácio representou o ponto mais baixo da causa calcedoniana no Oriente. Quando Justiniano subiu ao poder em 527, a tarefa de restaurar Calcedônia era imensa. A memória do período de Anastácio explicaria por que os calcedonianos estritos eram tão sensíveis a qualquer concessão aos miafisitas.',
        fontes: [
          'Teófanes, AM 5983–6010',
          'Evágrio, HE III.22–32',
          'Pseudo-Zacarias, HE VI–VII',
        ],
      },
      {
        ano: '512',
        titulo: 'Severo de Antioquia e a Consolidação Miafisita',
        descricao:
          'Severo de Antioquia (†538), o mais brilhante teólogo miafisita, foi entronizado como patriarca de Antioquia em 512, com o apoio de Anastácio. Severo desenvolveu uma cristologia sofisticada que rejeitava tanto o nestorianismo quanto o eutiquianismo, insistindo na fórmula cirilina "uma natureza encarnada do Verbo" (μία φύσις τοῦ Θεοῦ Λόγου σεσαρκωμένη). Seus escritos seriam a referência teológica dos miafisitas por séculos.',
        importancia:
          'Severo de Antioquia é a figura-chave para entender por que os miafisitas rejeitavam Calcedônia. Sua teologia não era eutiquiana (ele condenava Eutiques), mas ele insistia que a linguagem de "duas naturezas" era inevitavelmente nestoriana. A condenação dos Três Capítulos seria, em parte, uma tentativa de responder às objeções de Severo.',
        fontes: [
          'Severo de Antioquia, Philalethes',
          'Severo, Homilias Catedrais',
          'João de Éfeso, Vidas dos Bem-Aventurados Orientais',
        ],
      },
    ],
  },

  // =============================================
  // PERÍODO 3: 518–527
  // =============================================
  {
    periodo: '518–527',
    titulo: 'A Restauração Calcedoniana sob Justino I',
    descricaoGeral:
      'A morte de Anastácio I em 518 e a ascensão de Justino I (518–527), um soldado trácio calcedoniano, marcaram uma reviravolta dramática. O novo imperador restaurou Calcedônia como norma imperial, encerrou o Cisma Acaciano com Roma e depôs os líderes miafisitas. No entanto, a restauração foi mais política do que teológica: os miafisitas continuavam sendo a maioria no Egito e na Síria, e sua resistência apenas se intensificou com a perseguição.',
    eventos: [
      {
        ano: '518–519',
        titulo: 'O Fim do Cisma Acaciano e a Fórmula de Hormisdas',
        descricao:
          'O Papa Hormisdas (514–523) enviou uma fórmula de fé (o Libellus Hormisdae) que exigia a condenação de Acácio, Pedro Mongo, Pedro, o Fulão, e Severo de Antioquia, e a aceitação plena de Calcedônia e do Tomo de Leão. O patriarca João II de Constantinopla e o imperador Justino I assinaram a fórmula em 519, encerrando 35 anos de cisma. A cena foi descrita como emocionante: as multidões de Constantinopla celebraram nas ruas.',
        importancia:
          'A Fórmula de Hormisdas é um dos documentos mais importantes da história papal, pois contém a afirmação mais explícita da infalibilidade da Sé de Roma antes do Vaticano I: "Na Sé Apostólica [de Roma] a religião católica foi sempre preservada imaculada." Este precedente seria invocado pelo Papa Vigílio 35 anos depois para resistir a Justiniano.',
        fontes: [
          'Libellus Hormisdae (Denzinger 363–365)',
          'Liber Pontificalis, Vita Hormisdae',
          'Teófanes, AM 6011',
        ],
      },
      {
        ano: '518',
        titulo: 'Deposição de Severo de Antioquia',
        descricao:
          'Severo de Antioquia, o líder miafisita, foi deposto e fugiu para o Egito, onde viveria em exílio até sua morte em 538. Sua deposição foi celebrada pelos calcedonianos como uma vitória, mas os miafisitas da Síria continuaram a venerá-lo como o verdadeiro patriarca. A Igreja Siríaca Ortodoxa (Jacobita) o considera um dos seus maiores santos e teólogos.',
        importancia:
          'A fuga de Severo para o Egito consolidou a aliança entre os miafisitas sírios e egípcios, criando uma frente anti-calcedoniana unificada que Justiniano tentaria (e falharia) quebrar. A teologia de Severo continuaria a influenciar o debate mesmo após sua morte.',
        fontes: [
          'Zacarias Retor, HE VIII.5',
          'João de Éfeso, HE I.15–18',
          'Teófanes, AM 6011',
        ],
      },
      {
        ano: '519–527',
        titulo: 'A Perseguição aos Miafisitas e a Resistência',
        descricao:
          'Sob Justino I e seu sobrinho Justiniano (que já exercia o poder real), os bispos miafisitas foram sistematicamente depostos e exilados. Mais de 50 bispos foram removidos de suas sés na Síria e na Mesopotâmia. No entanto, a perseguição teve o efeito oposto ao desejado: os miafisitas se organizaram em uma rede clandestina de bispos itinerantes (os "bispos do deserto"), liderados por João de Tella e Jacobo Baradeu, que ordenaram centenas de clérigos e criaram uma hierarquia paralela.',
        importancia:
          'A perseguição de Justino I criou a estrutura da Igreja Miafisita clandestina que sobreviveria até a conquista árabe (634–642) e além. Quando Justiniano tentou a reconciliação nos anos 530–540, os miafisitas já tinham uma organização independente que não dependia do Império.',
        fontes: [
          'João de Éfeso, Vidas dos Bem-Aventurados Orientais',
          'Pseudo-Dionísio de Tel-Mahre, Crônica',
          'Zacarias Retor, HE VIII–IX',
        ],
      },
    ],
  },

  // =============================================
  // PERÍODO 4: 527–543
  // =============================================
  {
    periodo: '527–543',
    titulo: 'Justiniano e a Busca de União Religiosa',
    descricaoGeral:
      'Com a ascensão de Justiniano I ao trono em 527 (formalmente como co-imperador de Justino I, e como único imperador a partir de 527), a política religiosa entrou em uma nova fase. Justiniano era genuinamente calcedoniano, mas acreditava que a Definição de Calcedônia podia e devia ser interpretada à luz de Cirilo de Alexandria. Sua esposa Teodora, monofisita convicta, exercia uma influência moderadora, protegendo os líderes miafisitas e incentivando o diálogo. O resultado foi uma política de "mão dupla": repressão e negociação simultâneas.',
    eventos: [
      {
        ano: '527',
        titulo: 'Ascensão de Justiniano I e o Início da Renovatio Imperii',
        descricao:
          'Justiniano I (527–565) subiu ao trono com um programa ambicioso de restauração imperial (Renovatio Imperii): reconquistar o Ocidente perdido, codificar o direito romano, reconstruir Constantinopla e reunificar a Igreja. A reunificação religiosa era vista como pré-requisito para a estabilidade política: um império dividido religiosamente não poderia resistir à Pérsia e aos bárbaros.',
        importancia:
          'A visão de Justiniano de que a unidade religiosa era inseparável da unidade política é a chave para entender toda a sua política eclesiástica, incluindo a convocação do V Concílio. Para ele, a heresia era traição, e o cisma era uma ameaça à segurança do Estado.',
        fontes: [
          'Procópio, De Aedificiis I.1',
          'Justiniano, Novela 6 (535)',
          'Evágrio, HE IV.1',
        ],
      },
      {
        ano: '532',
        titulo: 'As Conferências Teológicas com os Miafisitas',
        descricao:
          'Em 532, Justiniano organizou conferências teológicas em Constantinopla entre bispos calcedonianos e líderes miafisitas (incluindo representantes de Severo de Antioquia). Os miafisitas apresentaram suas objeções a Calcedônia de forma detalhada e sofisticada. Justiniano, impressionado, reconheceu que a linguagem de "duas naturezas" era genuinamente problemática para os cirilianos e começou a desenvolver sua própria síntese teológica.',
        importancia:
          'As conferências de 532 foram o momento em que Justiniano percebeu que a solução não era a imposição pura e simples de Calcedônia, mas uma reinterpretação que satisfizesse ambos os lados. Esta percepção levaria diretamente à estratégia dos Três Capítulos uma década depois.',
        fontes: [
          'Innocentius de Maronea, Relatio (ACO IV.2)',
          'Justiniano, Contra Monophysitas',
          'Teófanes, AM 6025',
        ],
      },
      {
        ano: '533',
        titulo: 'O Édito de Justiniano sobre a Fé Ortodoxa',
        descricao:
          'Justiniano emitiu um édito doutrinário (a Confessio Fidei) que reafirmava Calcedônia, mas a interpretava em termos explicitamente cirilianos. O édito incorporava a fórmula theopaschita ("um da Trindade sofreu na carne"), que havia sido controversa desde que Pedro, o Fulão, a introduzira no Trisagion em 470. O Papa João II (532–535) aprovou a fórmula, dando-lhe legitimidade ocidental.',
        importancia:
          'A aprovação papal da fórmula theopaschita foi um precedente crucial: demonstrava que Roma podia aceitar desenvolvimentos teológicos orientais, desde que fossem compatíveis com Calcedônia. Justiniano usaria este precedente para argumentar que a condenação dos Três Capítulos também era compatível com Calcedônia.',
        fontes: [
          'Justiniano, Confessio Fidei (CPG 6854)',
          'João II, Epistula ad senatum (Denzinger 400–401)',
          'ACO IV.2',
        ],
      },
      {
        ano: '536',
        titulo: 'O Sínodo de Constantinopla e a Condenação de Severo',
        descricao:
          'Um sínodo em Constantinopla, presidido pelo patriarca Menas e com a aprovação do Papa Agapito I (que estava na cidade em missão diplomática), condenou formalmente Severo de Antioquia, Pedro de Apameia e Zoaras como hereges. A condenação foi confirmada por édito imperial. Os escritos de Severo foram ordenados a ser queimados.',
        importancia:
          'A condenação de Severo em 536 foi um sinal de que Justiniano estava disposto a reprimir os líderes miafisitas quando a negociação falhava. No entanto, a condenação de Severo não resolveu o problema: os miafisitas do Egito e da Síria continuaram a rejeitar Calcedônia, e a perseguição apenas endureceu sua resistência.',
        fontes: [
          'ACO III (ed. Schwartz)',
          'Liber Pontificalis, Vita Agapiti',
          'Teófanes, AM 6028',
        ],
      },
      {
        ano: '537–540',
        titulo: 'A Conquista da Itália e a Subordinação do Papado',
        descricao:
          'A reconquista da Itália por Belisário (535–540) trouxe o papado sob o controle direto do Império pela primeira vez desde a queda de Roma (476). O Papa Silvério (536–537), suspeito de simpatias góticas, foi deposto por Belisário a pedido de Teodora e substituído por Vigílio, um diácono romano que havia prometido à imperatriz restaurar os líderes miafisitas. A deposição de Silvério e a instalação de Vigílio marcaram o início da subordinação do papado ao poder imperial.',
        importancia:
          'A instalação de Vigílio como papa por intervenção imperial é o prelúdio direto da crise dos Três Capítulos. Vigílio devia seu pontificado a Teodora e a Justiniano, o que o colocava em uma posição de extrema vulnerabilidade quando o imperador exigiu a condenação dos Três Capítulos.',
        fontes: [
          'Liber Pontificalis, Vita Silverii e Vita Vigilii',
          'Procópio, Historia Arcana 1.14–25',
          'Liberato, Breviarium 22',
        ],
      },
    ],
  },

  // =============================================
  // PERÍODO 5: 543–548
  // =============================================
  {
    periodo: '543–548',
    titulo: 'A Crise dos Três Capítulos (Fase Inicial)',
    descricaoGeral:
      'Em 543/544, Justiniano deu o passo decisivo que levaria ao V Concílio: emitiu um édito condenando os "Três Capítulos" — os escritos de Teodoro de Mopsuéstia, os escritos de Teodoreto de Ciro contra Cirilo, e a Carta de Ibas de Edessa a Mari. A motivação era dupla: teologicamente, eliminar os resíduos nestorianos que os miafisitas apontavam em Calcedônia; politicamente, oferecer uma concessão significativa aos miafisitas para trazê-los de volta à comunhão imperial. A reação no Ocidente foi imediata e furiosa.',
    eventos: [
      {
        ano: '543/544',
        titulo: 'O Édito Imperial contra os Três Capítulos',
        descricao:
          'Justiniano emitiu o Edictum de Tribus Capitulis, condenando: 1) a pessoa e os escritos de Teodoro de Mopsuéstia; 2) os escritos de Teodoreto de Ciro contra Cirilo de Alexandria e o I Concílio de Éfeso; 3) a Carta de Ibas de Edessa a Mari, o Persa. O édito foi enviado a todos os bispos do Império para assinatura. Os quatro patriarcas orientais (Menas de Constantinopla, Zoilo de Alexandria, Efrém de Antioquia, Pedro de Jerusalém) assinaram sob pressão, embora com reservas.',
        importancia:
          'O édito de 543/544 é o documento fundador de toda a controvérsia. Pela primeira vez, um imperador condenava dogmaticamente autores que haviam morrido em comunhão com a Igreja e que não haviam sido condenados por nenhum concílio anterior. O precedente da condenação póstuma era juridicamente inédito e teologicamente explosivo.',
        fontes: [
          'Justiniano, Edictum de Tribus Capitulis (ACO IV.1)',
          'Facundo, Pro Defensione I.1–3',
          'Liberato, Breviarium 24',
        ],
      },
      {
        ano: '544–546',
        titulo: 'A Resistência do Episcopado Ocidental',
        descricao:
          'Os bispos do Ocidente reagiram com fúria. Dácio de Milão, Ponciano de África e especialmente Facundo de Hermiane (que escreveu os 12 livros do Pro Defensione Trium Capitulorum) argumentaram que condenar os Três Capítulos era atacar a autoridade de Calcedônia, que havia absolvido Teodoreto e Ibas. Na Dalmácia e no Ilírico, os bispos recusaram-se a assinar o édito. Na Gália e na Hispânia, a reação foi igualmente negativa.',
        importancia:
          'A resistência ocidental revelou a profunda diferença de perspectiva entre o Oriente e o Ocidente sobre Calcedônia. Para o Ocidente, Calcedônia era intocável; qualquer ataque aos seus "capítulos" era um ataque à fé. Para o Oriente (e para Justiniano), Calcedônia podia ser reinterpretada e completada.',
        fontes: [
          'Facundo de Hermiane, Pro Defensione Trium Capitulorum (12 livros)',
          'Ponciano de África, Epistula ad Justinianum',
          'Dácio de Milão, Relatio',
        ],
      },
      {
        ano: '545–547',
        titulo: 'A Coerção do Papa Vigílio',
        descricao:
          'Justiniano ordenou que o Papa Vigílio fosse trazido a Constantinopla para assinar o édito. Vigílio foi preso em Roma em novembro de 545, durante a celebração da festa de Santa Cecília, e levado de navio para o Oriente em uma viagem que durou quase dois anos (com paradas na Sicília e na Grécia). Ele chegou a Constantinopla em janeiro de 547. Inicialmente, recusou-se a assinar o édito e excomungou o patriarca Menas. Mas após meses de pressão, isolamento e negociações secretas, Vigílio cedeu.',
        importancia:
          'A coerção de Vigílio é o episódio mais dramático da história papal antiga. O fato de um papa ter sido preso, deportado e forçado a mudar de posição sob pressão imperial é sem paralelo e levanta questões fundamentais sobre a liberdade do papado e a validade de suas decisões sob coação.',
        fontes: [
          'Liber Pontificalis, Vita Vigilii',
          'Liberato, Breviarium 22–24',
          'Victor de Tunnuna, Chronicon (s.a. 545–547)',
        ],
      },
      {
        ano: '548',
        titulo: 'O Iudicatum de Vigílio (11 de abril de 548)',
        descricao:
          'O Papa Vigílio emitiu o Iudicatum, um documento no qual condenava os Três Capítulos "sem prejuízo da autoridade do Concílio de Calcedônia". O Iudicatum era uma tentativa de quadrar o círculo: condenar os escritos nestorianos sem atacar o IV Concílio. No entanto, a reação no Ocidente foi devastadora. Os bispos da Gália, da Dalmácia e da África acusaram Vigílio de traição à fé de Calcedônia. O bispo Dácio de Milão rompeu comunhão com o papa.',
        importancia:
          'O Iudicatum foi a primeira de três mudanças de posição de Vigílio (condenação → revogação → nova condenação). Sua instabilidade minou a autoridade papal tanto no Ocidente quanto no Oriente e tornou o papa refém de Justiniano.',
        fontes: [
          'Vigílio, Iudicatum (fragmentos em ACO IV.2)',
          'Facundo, Pro Defensione IV.4',
          'Liber Pontificalis, Vita Vigilii',
        ],
      },
    ],
  },

  // =============================================
  // PERÍODO 6: 548–553
  // =============================================
  {
    periodo: '548–553',
    titulo: 'A Escalada Final até o Concílio',
    descricaoGeral:
      'Os cinco anos que precederam o concílio foram marcados por uma escalada de coerção, resistência e negociações fracassadas. Vigílio, pressionado pelo Ocidente, revogou o Iudicatum. Justiniano, frustrado com a resistência papal, decidiu convocar um concílio ecumênico para resolver a questão de forma definitiva. O papa tentou impor condições (paridade de bispos orientais e ocidentais), mas Justiniano as ignorou. O concílio abriu sem o papa, num ato de desafio sem precedentes.',
    eventos: [
      {
        ano: '549–550',
        titulo: 'A Revogação do Iudicatum e a Revolta Ocidental',
        descricao:
          'Diante da revolta generalizada no Ocidente (Gália, Dalmácia, África, norte da Itália), Vigílio revogou o Iudicatum em 550, prometendo aos bispos ocidentais que não tomaria nenhuma decisão sobre os Três Capítulos sem um concílio com participação paritária de orientais e ocidentais. Justiniano, furioso, considerou a revogação uma quebra de acordo e intensificou a pressão.',
        importancia:
          'A revogação do Iudicatum demonstrou que o papado não podia ignorar a opinião do episcopado ocidental. Vigílio estava preso entre a coerção imperial (Oriente) e a rejeição episcopal (Ocidente), numa posição insustentável que explicaria suas subsequentes mudanças de posição.',
        fontes: [
          'Vigílio, Epistula ad episcopos Galliae (550)',
          'Facundo, Pro Defensione XII',
          'Victor de Tunnuna, Chronicon (s.a. 550)',
        ],
      },
      {
        ano: '551',
        titulo: 'O Édito de Convocação do Concílio e a Fuga de Vigílio',
        descricao:
          'Em novembro de 551, Justiniano emitiu o édito de convocação do V Concílio Ecumênico. Vigílio protestou, exigindo que o concílio fosse realizado na Itália ou na Sicília (para garantir a presença ocidental) e que houvesse paridade de bispos. Justiniano ignorou as exigências e fixou o concílio em Constantinopla. Em dezembro de 551, Vigílio fugiu do Palácio de Placidia, onde estava confinado, e refugiou-se na Igreja de Santa Eufêmia em Calcedônia — o mesmo local onde o IV Concílio fora celebrado 100 anos antes. O simbolismo era poderoso: Vigílio se colocava sob a proteção de Calcedônia contra o imperador.',
        importancia:
          'A fuga de Vigílio para Santa Eufêmia é um dos episódios mais dramáticos da história eclesiástica. O papa buscava asilo no local sagrado de Calcedônia, como se dissesse: "Eu defendo este concílio contra o imperador que quer destruí-lo." O episódio revela a profundidade da crise entre o papado e o Império.',
        fontes: [
          'Liber Pontificalis, Vita Vigilii',
          'Victor de Tunnuna, Chronicon (s.a. 551)',
          'Evágrio, HE IV.38',
        ],
      },
      {
        ano: '552',
        titulo: 'O Primeiro Constitutum de Vigílio e as Negociações Fracassadas',
        descricao:
          'Após meses de negociações na Igreja de Santa Eufêmia, Vigílio emitiu o Primeiro Constitutum (14 de maio de 552), no qual recusava condenar os Três Capítulos separadamente de Calcedônia e exigia que qualquer julgamento fosse feito em um concílio com participação ocidental. Justiniano rejeitou o Constitutum e ordenou que os bispos orientais prosseguissem com os preparativos do concílio sem o papa. Vigílio foi forçado a deixar Santa Eufêmia e retornar a Constantinopla sob escolta militar.',
        importancia:
          'O Primeiro Constitutum foi a última tentativa de Vigílio de manter sua independência. Sua rejeição por Justiniano demonstrou que o imperador estava determinado a realizar o concílio com ou sem o papa, estabelecendo o precedente de um concílio ecumênico sem participação papal direta.',
        fontes: [
          'Vigílio, Constitutum I (ACO IV.2)',
          'Liber Pontificalis, Vita Vigilii',
          'Teófanes, AM 6044',
        ],
      },
      {
        ano: '553 (abril)',
        titulo: 'A Última Tentativa de Compromisso e o Início do Concílio',
        descricao:
          'Nas semanas que precederam a abertura do concílio, Justiniano enviou uma delegação de bispos a Vigílio com uma proposta de compromisso: o papa poderia emitir um documento separado condenando os Três Capítulos, que seria lido no concílio. Vigílio recusou, argumentando que a questão não podia ser decidida sem a presença de bispos ocidentais. Em 5 de maio de 553, o concílio abriu na Catedral de Santa Sofia com 152 bispos, quase todos orientais. Vigílio não compareceu.',
        importancia:
          'A abertura do concílio sem o papa foi um ato de cesaropapismo sem precedentes. Nenhum dos quatro concílios anteriores havia sido celebrado sem a participação (pessoal ou por legados) do bispo de Roma. A legitimidade do V Concílio seria debatida por mais de um século.',
        fontes: [
          'Acta Concilii, Sessão I (ACO IV.1)',
          'Liber Pontificalis, Vita Vigilii',
          'Evágrio, HE IV.38',
        ],
      },
    ],
  },
]