import type { ArenaDebate } from '../../_shared/DebateArena'

export const debatesArena: ArenaDebate[] = [
  {
    id: 'debate-1',
    titulo: 'A Crise da Presidência',
    contexto:
      'Após a morte de Melécio de Antioquia durante o concílio, Gregório Nazianzeno assume a presidência dos trabalhos. Contudo, bispos egípcios — aliados à facção de Timóteo de Alexandria — contestam a legitimidade de sua transferência para Constantinopla, alegando violação dos cânones nicenos sobre traslados de sé. APressão política e eclesial se intensifica.',
    falas: [
      {
        id: 'd1-eg1',
        autor: 'Delegação Egípcia',
        cargo: 'Bispos aliados a Timóteo de Alexandria',
        avatar: '/estudos/concilios/constantinopla-1/personagens/timoteo-alexandria.jpg',
        iniciais: 'EG',
        lado: 'esquerda',
        texto:
          'O bispo de Sasima não pode sentar-se na cadeira de Constantinopla. Os cânones de Niceia são claros: nenhum bispo deve transferir-se de uma sé para outra sem procedimento canônico regular. A presença do senhor Gregório nesta cidade é irregular e não reconhecida pela diocese de Alexandria.',
        fonte: 'Cânones de Niceia, cân. 15; Sócrates, HE V.7',
      },
      {
        id: 'd1-gn1',
        autor: 'Gregório Nazianzeno',
        cargo: 'Bispo de Sasima / Presidente interino',
        avatar: '/estudos/concilios/constantinopla-1/personagens/gregorio-nazianzeno.jpg',
        iniciais: 'GN',
        lado: 'direita',
        texto:
          'Eu não vim a Constantinopla por ambição, mas por obediência ao imperador e à necessidade da Igreja. Se a presença de um bispo virtuoso incomoda mais que a ausência de qualquer bispo, que se julgue a qualidade do pastor e não a geografia da sua ordenação.',
        fonte: 'Oratio 42 (De seipso), §20-22',
        notaHistoriador:
          'Gregório Nazianzeno aceitara a transferência para Constantinopla a pedido do imperador Valente, mas nunca fora formalmente reconhecido pela tradição alexandrina. A questão do "traslado de sé" era juridicamente legítima — e Gregório sabia disso.',
      },
      {
        id: 'd1-tm',
        autor: 'Timóteo de Alexandria',
        cargo: 'Patriarca de Alexandria',
        avatar: '/estudos/concilios/constantinopla-1/personagens/timoteo-alexandria.jpg',
        iniciais: 'TA',
        lado: 'esquerda',
        texto:
          'Alexandria possui uma tradição apostólica ininterrupta. A Sé de Constantinopla é uma criação imperial recente. Nenhum bispo oriental transferido irregularmente terá o nosso reconhecimento. A autoridade de Pedro e de Marcos não se submete a caprichos da corte.',
        fonte: 'Sócrates, HE V.8; Teodoreto, HE V.8',
      },
      {
        id: 'd1-gn2',
        autor: 'Gregório Nazianzeno',
        cargo: 'Bispo de Sasima / Presidente interino',
        avatar: '/estudos/concilios/constantinopla-1/personagens/gregorio-nazianzeno.jpg',
        iniciais: 'GN',
        lado: 'direita',
        texto:
          'Abandono a cadeira presidencial. Não por fraqueza, mas por amor à paz da Igreja. Prefiro ser chamado de covarde por homens do que ser causa de divisão entre irmãos. Que Deus julgue quem tem razão — eu não terei a vaidade de insistir.',
        fonte: 'Oratio 42 (De seipso), §25-27; Carmen de vita sua, vv. 1189-1210',
        notaHistoriador:
          'A renúncia de Gregório é um dos episódios mais discutidos da história conciliar. Ele abandonou a presidência por sentimento de impossibilidade política — não por derrota teológica. Seu discurso de despedida é considerado uma das primeiras autobiografias espirituais da literatura cristã.',
      },
      {
        id: 'd1-td',
        autor: 'Teodósio I',
        cargo: 'Imperador Romano do Oriente',
        avatar: '/estudos/concilios/constantinopla-1/personagens/theodosius-i.jpg',
        iniciais: 'TI',
        lado: 'centro',
        texto:
          'Aceito a renúncia do senhor Gregório com pesar. A Igreja precisa de um homem que una as partes, não de um teólogo que divida os bispos. Procurarei um candidato aceitável por todos.',
        fonte: 'Sócrates, HE V.8; Sozômeno, HE VII.7',
      },
      {
        id: 'd1-nc',
        autor: 'Nectário de Constantinopla',
        cargo: 'Senador eleito / Bispo-designado',
        avatar: '/estudos/concilios/constantinopla-1/personagens/nectario-constantinopla.jpg',
        iniciais: 'NC',
        lado: 'centro',
        texto:
          'Eu não sou nem bispo, nem presbítero, nem diácono. sequer fui batizado. Mas se a Igreja e o imperador assim o decidem, obedeço. Que Deus me dê forças para ser digno do que ainda não sou.',
        fonte: 'Sócrates, HE V.8; Sozômeno, HE VII.8',
        notaHistoriador:
          'Nectário era um senador laico, não batizado, quando foi eleito bispo de Constantinopla. Foi batizado, crismado e ordenado bispo em poucos dias — um procedimento sem paralelo na história canônica. A escolha visava um homem politicamente neutro e aceitável por todas as facções.',
      },
    ],
    desfecho:
      'Gregório Nazianzeno renuncia a presidência e parte para um exílio voluntário em Arianzo. Nectário, um senador leigo não batizado, é eleito bispo de Constantinopla, batizado e consagrado em poucos dias — um dos episódios mais extraordinários e controversos da história conciliar. A crise presidencial ficou resolvida, mas a questão da legitimidade canônica das transferências de sé permaneceria aberta por séculos.',
  },
  {
    id: 'debate-2',
    titulo: 'A Divindade do Espírito Santo',
    contexto:
      'Os pneumatomacoi (ou macedonianos), liderados por Macedônio, aceitavam a divindade do Filho conforme Niceia, mas recusavam a plena divindade do Espírito Santo. Para eles, o Espírito era uma criatura elevada, um "ministro" ou "servo" do Filho, não consubstancial ao Pai e ao Filho. Este era o ponto teológico mais aguardado do concílio.',
    falas: [
      {
        id: 'd2-mp',
        autor: 'Macedônio ou representante pneumatomaco',
        cargo: 'Bispo macedoniano',
        avatar: '/estudos/concilios/constantinopla-1/personagens/macedonio-constantinopla.jpg',
        iniciais: 'MP',
        lado: 'esquerda',
        texto:
          'O Espírito Santo é chamado "Paráclito" — um advogado, um assistente. Ele é enviado pelo Filho, obedece ao Pai, e opera na criação como ministro. Chamar-lhe de Deus é confundir o Criador com a criatura. O próprio Senhor disse: "Se eu não for, o Paráclito não virá" — ele é subordinado.',
        fonte: 'Sócrates, HE V.6-7; Epifânio, Panarion 73',
      },
      {
        id: 'd2-gn1',
        autor: 'Gregório Nazianzeno',
        cargo: 'Teólogo / Presidente interino',
        avatar: '/estudos/concilios/constantinopla-1/personagens/gregorio-nazianzeno.jpg',
        iniciais: 'GN',
        lado: 'direita',
        texto:
          'Se o Espírito Santo não é Deus, como é que ele nos diviniza no batismo? Como pode uma criatura perdoar pecados, santificar almas e fazer dos homens participadores da natureza divina? Quem não é Deus não pode dar o que é divino.',
        fonte: 'Oratio 31 (In Pentecosten), §8-10',
        versiculoCitado: {
          referencia: '2 Coríntios 3:17',
          textoBiblico:
            '「O Senhor é o Espírito; e onde está o Espírito do Senhor, aí há liberdade.」',
        },
      },
      {
        id: 'd2-mp2',
        autor: 'Pneumatomaco anônimo',
        cargo: 'Representante da facção macedoniana',
        avatar: '/estudos/concilios/constantinopla-1/personagens/macedonio-constantinopla.jpg',
        iniciais: 'PA',
        lado: 'esquerda',
        texto:
          'Os escritos de Paulo mostram que o Espírito "distribui dons como quer" (1 Cor 12) e que ele "é enviado" (Gal 4:6). O que é enviado e distribuído por outros não pode ser igual aos que enviam. Há uma hierarquia, não uma igualdade.',
        fonte: 'Epifânio, Panarion 74; Sócrates, HE V.6',
      },
      {
        id: 'd2-gn2',
        autor: 'Gregório Nazianzeno',
        cargo: 'Teólogo / Presidente interino',
        avatar: '/estudos/concilios/constantinopla-1/personagens/gregorio-nazianzeno.jpg',
        iniciais: 'GN',
        lado: 'direita',
        texto:
          'As operações da Trindade são comuns. O Pai cria, o Filho redime, o Espírito santifica — mas todas as três pessoas operam juntas. "Senhor e Doador da Vida" — quem dá a vida é Senhor, não servo. O Espírito é consubstancial ao Pai e ao Filho, mesmo que o termo "homoousios" para o Espírito ainda exija cautela pastoral.',
        fonte: 'Oratio 31 (In Pentecosten), §9-12',
        notaHistoriador:
          'Gregório Nazianzeno é cauteloso: embora defenda a divindade plena do Espírito, evita impor o termo "homoousios" ao Espírito Santo com a mesma rigidez que Niceia aplicara ao Filho. Prefere falar em "mesma glória" e "mesma adoração". A pneumatologia de 381 é uma conquista sutil, não uma imposição terminológica.',
      },
      {
        id: 'd2-bn',
        autor: 'Tradição Capadociana (resumo)',
        cargo: 'Linha teológica de Basílio e Gregório de Nissa',
        avatar: '/estudos/concilios/constantinopla-1/personagens/basilio-cesareia.jpg',
        iniciais: 'BC',
        lado: 'direita',
        texto:
          'Basílio, em seu tratado "De Spiritu Sancto", já demonstrara que o Espírito compartilha as mesmas operações divinas. O Filho não é inferior ao Pai por ser "gerado"; da mesma forma, o Espírito não é inferior por "proceder". A distinção de hipóstases não implica subordinação.',
        fonte: 'Basílio, De Spiritu Sancto; Gregório de Nissa, Ad Ablabium',
      },
      {
        id: 'd2-gn3',
        autor: 'Gregório Nazianzeno',
        cargo: 'Teólogo / Presidente interino',
        avatar: '/estudos/concilios/constantinopla-1/personagens/gregorio-nazianzeno.jpg',
        iniciais: 'GN',
        lado: 'direita',
        texto:
          'Declaro: o Espírito Santo deve ser confessado como Deus. não com hesitação, não com rodeios, mas com plena convicção. "Deus é Espírito" — e onde o Espírito está, ali está a liberdade dos filhos de Deus.',
        fonte: 'Oratio 31, §10; Oratio 32 (De Filio), §15',
        versiculoCitado: {
          referencia: 'Atos dos Apóstolos 5:3-4',
          textoBiblico:
            '「Ananias, por que Satanás encheu o teu coração, para mentires ao Espírito Santo?... Não foi ao homem que mentiste, mas a Deus.」',
        },
        notaHistoriador:
          'A condenação coletiva dos pneumatomacoi em 381 é o primeiro momento em que a Igreja declara explicitamente a divindade do Espírito Santo em nível conciliar. O Credo de Constantinopla acrescenta ao credo niceno a inteira cláusula pneumatológica: "Senhor e Doador da Vida, que procede do Pai, que com o Pai e o Filho é adorado e glorificado".',
      },
      {
        id: 'd2-td',
        autor: 'Teodósio I',
        cargo: 'Imperador Romano do Oriente',
        avatar: '/estudos/concilios/constantinopla-1/personagens/theodosius-i.jpg',
        iniciais: 'TI',
        lado: 'centro',
        texto:
          'A fé dos 150 padres é a norma. Quem não aceitar integralmente o Credo será considerado herege e excluído da comunhão eclesial. Não haverá negociação com quem recusa a divindade do Espírito.',
        fonte: 'Edito "Cunctos Populos" (380); Sócrates, HE V.6',
        versiculoCitado: {
          referencia: 'João 15:26',
          textoBiblico:
            '「Quando vier o Paráclito, que eu vos enviarei do Pai, o Espírito da Verdade, que procede do Pai, ele dará testemunho de mim.」',
        },
      },
    ],
    desfecho:
      'Os pneumatomacoi recusam-se a assinar o Credo expandido e abandonam o concílio. O Credo de Constantinopla proclama o Espírito Santo como "Senhor e Doador da Vida, que procede do Pai, que com o Pai e o Filho é adorado e glorificado" — a cláusula pneumatológica mais robusta de toda a história credal. A vitória capadociana é completada: a Trindade plena ficou dogmaticamente definida.',
  },
  {
    id: 'debate-3',
    titulo: 'Apolinarismo: Cristo tem alma humana?',
    contexto:
      'Apolinário de Laodiceia, antigo aliado dos nicenos contra o arianismo, ensinava que o Logos divino ocupava o lugar da mente (nous) racional humana em Cristo. Na prática, Cristo teria corpo humano e alma animal, mas não psyche rationalis — comprometendo a plena humanidade. A fórmula "Logos-sarx" radicalizava a união hipostática de forma heterodoxa.',
    falas: [
      {
        id: 'd3-ap1',
        autor: 'Discípulo de Apolinário',
        cargo: 'Teólogo apolinarista',
        avatar: '/estudos/concilios/constantinopla-1/personagens/apolinario-lodiceia.jpg',
        iniciais: 'AL',
        lado: 'esquerda',
        texto:
          'Se o Logos assume uma mente humana completa, há duas mentes em Cristo — a divina e a humana. Isso é divisionismo, é nestorianismo antes de Nestório. O Logos basta como princípio racional. A carne sem nous é perfectível pelo divino.',
        fonte: 'Apolinário, Fragmenta; Epifânio, Panarion 77',
      },
      {
        id: 'd3-gn1',
        autor: 'Gregório Nazianzeno',
        cargo: 'Teólogo / Presidente interino',
        avatar: '/estudos/concilios/constantinopla-1/personagens/gregorio-nazianzeno.jpg',
        iniciais: 'GN',
        lado: 'direita',
        texto:
          'O que não foi assumido não foi curado. Se o Logos não assumiu a mente humana racional, então a mente humana não foi redimida. Cristo deve ser perfeito em humanidade para que nós também sejamos perfeitos nele. A salvação exige uma natureza humana completa.',
        fonte: 'Epistula 101 (ad Cledonium), §4',
        notaHistoriador:
          'A frase "quod non est assumptum non est sanatum" tornou-se um princípio cristológico fundamental, citado em Éfeso (431) e Calcedônia (451). Gregório Nazianzeno formulou aqui a regra da "totalidade da natureza humana" em Cristo.',
      },
      {
        id: 'd3-ap2',
        autor: 'Discípulo de Apolinário',
        cargo: 'Teólogo apolinarista',
        avatar: '/estudos/concilios/constantinopla-1/personagens/apolinario-lodiceia.jpg',
        iniciais: 'AL',
        lado: 'esquerda',
        texto:
          'Mas se a mente racional humana subsiste em Cristo, ele não é mais um com o Logos. Você está dividindo a pessoa. Nós defendemos a unidade — o Logos é a mente de Cristo. Separar mente humana de Logos é criar dois sujeitos.',
        fonte: 'Apolinário, Epistulae; Teodoreto, HE V.9',
      },
      {
        id: 'd3-gn2',
        autor: 'Gregório de Nissa (via tradição)',
        cargo: 'Bispo de Nissa / Irmão de Basílio',
        avatar: '/estudos/concilios/constantinopla-1/personagens/gregorio-nissa.jpg',
        iniciais: 'GN',
        lado: 'direita',
        texto:
          'A salvação não é apenas do corpo, mas da alma racional. Se Cristo não possui nous humano, como redime a mente que nele não foi representada? A integridade da pessoa humana — nous, psyche, soma — deve ser assumida integralmente pelo Logos para ser integralmente restaurada.',
        fonte: 'Gregório de Nissa, Ad Ablabium; Oratio catechetica, §16',
      },
      {
        id: 'd3-ct',
        autor: 'Concílio / Nectário',
        cargo: 'Bispo de Constantinopla / Presidente',
        avatar: '/estudos/concilios/constantinopla-1/personagens/nectario-constantinopla.jpg',
        iniciais: 'NC',
        lado: 'direita',
        texto:
          'O concílio condena Apolinário e seus seguidores. Todo aquele que dividir Cristo em duas naturezas, privando-o de uma mente humana racional completa, seja anatematizado. A fé de Niceia e de Gregório Nazianzeno é a norma.',
        fonte: 'Cânone 1 de Constantinopla 381; Sócrates, HE V.10',
      },
    ],
    desfecho:
      'O apolinarismo é anatematizado formalmente no Cânone 1 de Constantinopla. A plena humanidade de Cristo — com corpo, alma racional e mente — fica resguardada. A frase "quod non est assumptum non est sanatum" de Gregório Nazianzeno se torna um princípio cristológico fundamental que prepara os concílios de Éfeso (431) e Calcedônia (451).',
  },
  {
    id: 'debate-4',
    titulo: 'Máximo, o Cínico, e a Usurpação',
    contexto:
      'Máximo, o Cínico — um filósofo cínico convertido ao cristianismo de forma irregular — tentou usurpar a Sé de Constantinopla com apoio de uma facção do clero egípcio. Fora ordenado bispo por Aício, um bispo ariano, e tentou instalar-se como bispo legítimo da capital imperial, criando um cisma paralelo durante o concílio.',
    falas: [
      {
        id: 'd4-mx1',
        autor: 'Máximo, o Cínico',
        cargo: 'Autoproclamado bispo de Constantinopla',
        avatar: '/estudos/concilios/constantinopla-1/personagens/maximo-cinico.jpg',
        iniciais: 'MX',
        lado: 'esquerda',
        texto:
          'Eu fui ordenado bispo por Aício de Fliunte, bispo legítimo e reconhecido. Minha ordenação é válida. Os bispos egípcios apoiam a minha causa. A Sé de Constantinopla não pode ser ocupada por um estranho vindo de Sasima.',
        fonte: 'Sócrates, HE V.7-8; Sozômeno, HE VII.9',
      },
      {
        id: 'd4-gn1',
        autor: 'Gregório Nazianzeno',
        cargo: 'Teólogo / Presidente interino',
        avatar: '/estudos/concilios/constantinopla-1/personagens/gregorio-nazianzeno.jpg',
        iniciais: 'GN',
        lado: 'direita',
        texto:
          'A ordenação de Máximo é uma farsa. Aício era herege ariano, e bispo ariano não ordena bispo católico. O clero que apoia Máximo age por ignorância ou por cumplicidade política. Esta assembleia não reconhecerá um cisma disfarçado de legitimidade.',
        fonte: 'Sócrates, HE V.7; Gregório, Oratio 42, §20',
      },
      {
        id: 'd4-eg',
        autor: 'Bispos egípcios aliados',
        cargo: 'DelegaçãoAlexandrina',
        avatar: '/estudos/concilios/constantinopla-1/personagens/timoteo-alexandria.jpg',
        iniciais: 'EA',
        lado: 'esquerda',
        texto:
          'Nós apoiamos Máximo porque a sé de Constantinopla não pode ser ocupada por quem não tem ligação com a tradição apostólica. A ordenação de Aício, embora de proveniência irregular, atendeu à necessidade de um bispo para a capital.',
        fonte: 'Sócrates, HE V.8',
      },
      {
        id: 'd4-td',
        autor: 'Teodósio I',
        cargo: 'Imperador Romano do Oriente',
        avatar: '/estudos/concilios/constantinopla-1/personagens/theodosius-i.jpg',
        iniciais: 'TI',
        lado: 'centro',
        texto:
          'O concílio decidirá sobre a legitimidade de Máximo. Se a assembleia dos bispos o rejeitar, eu não protegerei um impostor. A ordem imperial apoiará a decisão conciliar.',
        fonte: 'Sócrates, HE V.8; Sozômeno, HE VII.9',
      },
      {
        id: 'd4-nc',
        autor: 'Nectário / Concílio',
        cargo: 'Bispo de Constantinopla / Assembleia',
        avatar: '/estudos/concilios/constantinopla-1/personagens/nectario-constantinopla.jpg',
        iniciais: 'NC',
        lado: 'direita',
        texto:
          'Máximo, o Cínico, nunca foi bispo, nem é, nem será. Toda ordenação feita por Aício é declarada nula. Os que foram ordenados por Máximo não pertencem a nenhuma ordem do clero. Tudo o que foi feito a seu respeito é inválido.',
        fonte: 'Cânone 4 de Constantinopla 381',
        notaHistoriador:
          'O Cânone 4 é o mais direto e juridicamente contundente de Constantinopla. Ele invalida retroativamente todas as ordenações de Máximo e de Aício, estabelecendo o princípio de que ordenações feitas por bispos hereges ou irregularmente posicionados são nulas de pleno direito.',
      },
    ],
    desfecho:
      'O Cânone 4 de Constantinopla declara que Máximo nunca foi bispo, que todas as ordenações por ele ou por Aício são nulas, e que os clérigos por ele ordenados não pertencem a nenhuma ordem eclesiástica. Máximo é expulso de Constantinopla. Este cânone estabelece um precedente jurídico fundamental sobre a invalidade de ordenações irregulares.',
  },
  {
    id: 'debate-5',
    titulo: 'O Cânone 3 e a Nova Roma',
    contexto:
      'O terceiro cânone de Constantinopla estabelece que o bispo desta cidade tem "a primazia de honra depois do bispo de Roma, porque Constantinopla é a Nova Roma". Esta decisão, aparentemente modesta, desencadeia uma tensão entre as Sé de Roma e Constantinopla que ecoaria por mais de seis séculos e contribuiria para o Grande Cisma de 1054.',
    falas: [
      {
        id: 'd5-or1',
        autor: 'Bispos orientais',
        cargo: 'Assembleia conciliar',
        avatar: '/estudos/concilios/constantinopla-1/personagens/nectario-constantinopla.jpg',
        iniciais: 'BO',
        lado: 'direita',
        texto:
          'Constantinopla é a capital do Império. É a sede do imperador, o centro da vida pública, o ponto de encontro de todas as províncias. A honra do bispo deve ser proporcional à dignidade da cidade. Roma é a primeira, mas Constantinopla deve ser a segunda — não por ambição, mas por lógica política e eclesial.',
        fonte: 'Cânone 3 de Constantinopla 381; Sozômeno, HE VII.9',
      },
      {
        id: 'd5-ro1',
        autor: 'Representante da tradição romana',
        cargo: 'Delegado ocidental (positions cautelosa)',
        avatar: '/estudos/concilios/constantinopla-1/personagens/papa-damaso-i.jpg',
        iniciais: 'RO',
        lado: 'esquerda',
        texto:
          'A honra de Roma não vem de ser capital imperial — Roma deixou de sê-lo. A primazia de Roma vem de Pedro e Paulo, que derramaram seu sangue nesta cidade. A sé romana é apostólica por fundação, não por conveniência política. Nenhuma cidade nova pode reivindicar o mesmo direito.',
        fonte: 'Tomus Damasi (382); Sócrates, HE V.10',
        notaHistoriador:
          'O Sínodo Romano de 382, sob o Papa Dâmaso I, recebeu as decisões de Constantinopla com frieza e se recusou a ratificar o Cânone 3. A lógica romana era clara: a primazia petrina não depende da geopolítica imperial.',
      },
      {
        id: 'd5-or2',
        autor: 'Bispos orientais',
        cargo: 'Assembleia conciliar',
        avatar: '/estudos/concilios/constantinopla-1/personagens/nectario-constantinopla.jpg',
        iniciais: 'BO',
        lado: 'direita',
        texto:
          'Nós não negamos a primazia de Roma. O cânone diz explicitamente "depois do bispo de Roma". Não estamos rebaixando Roma — estamos ordenando o Oriente. Constantinopla é a segunda sé porque é a segunda cidade do mundo cristão.',
        fonte: 'Cânone 3 de Constantinopla 381',
      },
      {
        id: 'd5-td',
        autor: 'Teodósio I',
        cargo: 'Imperador Romano do Oriente',
        avatar: '/estudos/concilios/constantinopla-1/personagens/theodosius-i.jpg',
        iniciais: 'TI',
        lado: 'centro',
        texto:
          'O cânone reflete a realidade do império. Constantinopla é a Nova Roma, e seu bispo deve ocupar o segundo lugar na hierarquia de honra. Não vejo nenhuma ofensa a Roma nesta disposição — apenas reconhecimento da ordem natural das coisas.',
        fonte: 'Sócrates, HE V.8-9',
      },
      {
        id: 'd5-gn1',
        autor: 'Gregório Nazianzeno (nota teológica)',
        cargo: 'Teólogo (perspectiva capadociana)',
        avatar: '/estudos/concilios/constantinopla-1/personagens/gregorio-nazianzeno.jpg',
        iniciais: 'GN',
        lado: 'direita',
        texto:
          'A primazia de honra não é primazia de jurisdição. Constantinopla não governa Roma nem Roma governa Constantinopla. É uma questão de precedência cerimonial, não de poder. Mas sei que os homens confundem honra com poder — e é por isso que este cânone será mal interpretado.',
        fonte: 'Perspectiva capadociana; Basílio, Epistulae',
        notaHistoriador:
          'O Cânone 3 nasce como uma norma de precedência cerimonial, mas será transformado — especialmente no Cânone 28 de Calcedônia (451) — em fundamento jurisdicional. A tensão Roma × Constantinopla, latente desde 381, explodirá no Grande Cisma de 1054.',
      },
    ],
    desfecho:
      'O Cânone 3 é aprovado pela assembleia oriental, mas Roma — sob os papas Dâmaso I e depois Leão Magno — nunca o ratifica. A primazia romana, para a tradição ocidental, deriva da sucessão apostólica de Pedro, não da dignidade política da cidade. Esta divergência fundamenta o Cânone 28 de Calcedônia (451), que amplia o princípio de Constantinopla, e contribui para o Grande Cisma de 1054. A questão da relação entre primazia de honra e primazia de jurisdição permanece aberta no diálogo ecumênico.',
  },
]
