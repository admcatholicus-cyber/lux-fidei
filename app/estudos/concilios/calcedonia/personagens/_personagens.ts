// estudos/concilios/calcedonia/personagens/_personagens.ts

export type LadoCalcedonia = 'calcedoniano' | 'monofisita' | 'neutro';

export interface PersonagemSecao {
  slug: string;
  nome: string;
  nomeGrego?: string;
  nomeLatim?: string;
  titulo: string;
  datas: string;
  origem: string;
  lado: LadoCalcedonia;
  biografia: string;
  papelNoConcilio: string;
  depois451: string;
  fontes: string;
}

export const personagensSecao: PersonagemSecao[] = [
  // ═══════════════════════════════════════════════════════
  // 1. PAPA LEÃO I
  // ═══════════════════════════════════════════════════════
  {
    slug: 'leao-magno',
    nome: 'Papa Leão I (Magno)',
    nomeLatim: 'Leo Magnus',
    titulo: 'Bispo de Roma e Papa (440–461)',
    datas: 'c. 400 – 10 de novembro de 461',
    origem: 'Toscana, Itália',
    lado: 'calcedoniano',
    biografia:
      'Leão nasceu por volta de 400 na Toscana, de família romana de classe média. Antes de sua eleição papal em 29 de setembro de 440, serviu como arquidiácono de Roma sob os papas Celestino I e Sisto III, atuando como diplomata e administrador. Foi ele quem, ainda como diácono, convenceu o general Aécio e o governador Albino a reconciliarem-se na Gália (440). Como papa, Leão transformou o papado em uma instituição de autoridade universal: foi o primeiro bispo de Roma a reivindicar explicitamente a primazia petrina em termos jurídicos (o Papa como "herdeiro de Pedro" e "vigário de Cristo"), a centralizar a disciplina eclesiástica do Ocidente e a intervir decisivamente nos assuntos do Oriente. Seu pontificado de 21 anos (440–461) é um dos mais longos e importantes da antiguidade. Além de Calcedônia, Leão é famoso por ter saído ao encontro de Átila, o Huno, no rio Mincio (452) e convencido o "Flagelo de Deus" a recuar da Itália — um dos episódios mais icônicos da história medieval. De origem italiana, Leão grew up no contexto cultural da cidade de Roma, que ainda conservava resquícios da grandiosidade imperial apesar do declínio político do Império Romano do Ocidente.',
    papelNoConcilio:
      'Leão foi o arquiteto intelectual de Calcedônia sem jamais pisar em Calcedônia. Seu Tomo (Ep. 28, junho de 449) — uma exposição sistemática da cristologia das duas naturezas em latim — foi lido na 2ª sessão e aclamado com o grito "Pedro falou por Leão!". Seus três legados (Paschasinus, Lucêncio e Bonifácio) presidiram o concílio em seu nome. Leão exigiu três condições: (1) leitura e aceitação do Tomo; (2) julgamento de Dioscoro como acusado; (3) presidência dos legados papais. As duas primeiras foram atendidas; a terceira, parcialmente. Após o concílio, Leão ratificou as decisões doutrinárias (Ep. 104, 452) mas rejeitou veementemente o Cânon 28 (Ep. 105–106), declarando que a primazia de Roma derivava de Pedro, não de decisões políticas de concílios.',
    depois451:
      'Leão I viveu dez anos após Calcedônia, durante os quais consolidou a recepção da Definição no Ocidente e combateu os resquícios do eutiquianismo. Enfrentou a invasão de Átila (452) e dos vândalos de Genserico (455, sack de Roma). Morreu em 10 de novembro de 461 e foi rapidamente reconhecido como um dos maiores papas da história. A Igreja Católica o venera como Doutor da Igreja (festa: 10 de novembro) e a Ortodoxa como santo (18 de fevereiro).',
    fontes:
      'Ep. 28 (Tomo a Flaviano, 449); Ep. 104–106 (452); 96 Sermões; 173 Cartas (ed. CC SL 160–161A); Biography.getByMignePL 54.',
  },

  // ═══════════════════════════════════════════════════════
  // 2. MARCIANO
  // ═══════════════════════════════════════════════════════
  {
    slug: 'marciano',
    nome: 'Imperador Marciano',
    nomeGrego: 'Φλάβιος Μαρκιανός',
    nomeLatim: 'Flavius Marcianus Augustus',
    titulo: 'Imperador Romano do Oriente (450–457)',
    datas: 'c. 392 – 27 de janeiro de 457',
    origem: 'Trácia ou Ilíria (provavelmente Sérdica, atual Sofia)',
    lado: 'calcedoniano',
    biografia:
      'Marciano nasceu por volta de 392 em uma família modesta da Trácia — seu pai era um soldado de baixa patente. Seguiu a carreira militar desde jovem, servindo sob os generais Ardabúrio e Áspar na guerra contra os persas sassânidas (421–422). Durante uma missão na África (c. 431–435), foi capturado pelos vândalos de Genserico. Segundo a tradição (provavelmente lendária), Genserico teve um sonho no qual via Marciano como futuro imperador e o libertou, exigindo apenas o juramento de que nunca atacaria os vândalos — juramento que Marciano honraria como imperador. De volta a Constantinopla, tornou-se senador e tribuno, vivendo na obscuridade até 450, quando a imperatriz Pulquéria o escolheu como marido e co-imperador após a morte de Teodósio II. O casamento foi puramente político: Pulquéria manteve seu voto de virgindade perpétua. Marciano era um soldado pragmático, sem formação teológica, cuja religiosidade era ortodoxa mas superficial. Sua principal preocupação era a estabilidade do império, e via a unidade religiosa como instrumento dessa estabilidade.',
    papelNoConcilio:
      'Marciano foi o convocador e patrono imperial de Calcedônia. Nomeou os 19 comissários imperiais que controlaram a agenda do concílio, transferiu o local de Niceia para Calcedônia (por razões de segurança contra Átila) e compareceu pessoalmente à 6ª sessão solene (25 de outubro) ao lado de Pulquéria. Seu discurso em latim (traduzido para o grego) declarou que estava presente "para confirmar a fé, não para dominar os bispos". Após o concílio, emitiu uma série de éditos (452) impondo a Definição como lei imperial e perseguindo os monofisitas.',
    depois451:
      'Marciano governou até sua morte em 27 de janeiro de 457, mantendo a paz com a Pérsia, restaurando as finanças imperiais (deixou um superávit de 100.000 libras de ouro) e recusando-se a pagar tributo a Átila. Ao contrário de seu antecessor, não tolerou dissidência religiosa: éditos imperiais de 452 impuseram a Definição como lei e perseguiram bispos monofisitas. É venerado como santo pela Igreja Ortodoxa (17 de fevereiro) e pela Católica.',
    fontes:
      'ACO II.1.2 (discurso na 6ª sessão); Éditos imperiais de 452; Cartas ao Papa Leão I (ACO II.4); Procópio, Bellum Vandalicum.',
  },

  // ═══════════════════════════════════════════════════════
  // 3. PULQUÉRIA
  // ═══════════════════════════════════════════════════════
  {
    slug: 'pulqueria',
    nome: 'Imperatriz Pulquéria',
    nomeGrego: 'Αἰλία Πουλχερία',
    nomeLatim: 'Aelia Pulcheria Augusta',
    titulo: 'Augusta e Imperatriz do Oriente (414–453)',
    datas: '19 de janeiro de 399 – julho de 453',
    origem: 'Constantinopla (Palácio Imperial)',
    lado: 'calcedoniano',
    biografia:
      'Pulquéria era filha do imperador Arcádio (395–408) e neta de Teodósio I, o Grande. Aos 15 anos (414), tornou-se Augusta e regente do Império em nome de seu irmão mais novo, Teodósio II (então com 13 anos). Durante a década de 410–420, foi ela quem efetivamente governou o Oriente, promovendo a ortodoxia nicena, construindo igrejas (a famosa Igreja de Santa Maria das Blaquernas) e organizando a corte. Em 414, fez um voto público de virgindade perpétua (parthenia), transformando o palácio imperial em uma espécie de mosteiro: ela e suas irmãs viviam em ascetismo, jejuando, rezando e tecendo vestimentas litúrgicas. Sua influência diminuiu na década de 430–440, quando o eunuco Crisáfio e a esposa de Teodósio, Eudócia, a marginalizaram. Mas com a morte de Teodósio (450), Pulquéria retomou o poder com uma jogada magistral: casou-se com o senador Marciano (mantendo o voto de virgindade) e tornou-se co-imperatriz. Nascida em Constantinopla, Pulquéria cresceu no epicentro do poder imperial e foi educada segundo os mais altos padrões da corte bizantina.',
    papelNoConcilio:
      'Pulquéria foi a verdadeira força motriz por trás de Calcedônia. Foi ela quem insistiu na convocação do concílio, quem pressionou Marciano a reverter a política religiosa de Teodósio, e quem garantiu que o Tomo de Leão fosse lido e aceito. Sua presença na 6ª sessão (25 de outubro) foi um evento sem precedentes: uma mulher no trono imperial de um concílio ecumênico. Os bispos aclamaram: "Pulquéria é a nova Helena! Em Pulquéria, a fé brilha! Pulquéria é a nova Tecla!"',
    depois451:
      'Pulquéria viveu apenas dois anos após Calcedônia, falecendo em julho de 453. Durante esse período, garantiu a implementação das decisões conciliares no Império. É venerada como santa pela Igreja Católica e pela Ortodoxa (10 de setembro). Sua vida é um dos exemplos mais notáveis de poder feminino na Antiguidade tardia: uma mulher que governou o Império Romano do Oriente por quase quatro décadas.',
    fontes:
      'ACO II.1.2 (presença na 6ª sessão); Sócrates Escolástico, HE VII.42; Teódoro Leitor, HE II.10; Vida de Pulquéria (BHG 1481).',
  },

  // ═══════════════════════════════════════════════════════
  // 4. DIOSCORO
  // ═══════════════════════════════════════════════════════
  {
    slug: 'dioscoro',
    nome: 'Dioscoro de Alexandria',
    nomeGrego: 'Διόσκορος Ἀλεξανδρείας',
    titulo: 'Patriarca de Alexandria (444–451, deposto)',
    datas: 'c. 390 – setembro de 454',
    origem: 'Alexandria, Egito',
    lado: 'monofisita',
    biografia:
      'Dioscoro nasceu por volta de 390 em Alexandria e serviu como arquidiácono do patriarca Cirilo (412–444), participando ativamente do Concílio de Éfeso (431) e das negociações da Fórmula de União (433). Com a morte de Cirilo em 444, Dioscoro foi eleito patriarca com o apoio da corte imperial (via Crisáfio) e do partido monofisita de Alexandria. Ao contrário de Cirilo, que era um teólogo sutil capaz de equilibrar unidade e dualidade, Dioscoro era um homem de temperamento violento e ambição política desmedida, que interpretava a teologia ciriliana de forma radicalizada: para ele, "mia physis" significava que a humanidade de Cristo fora literalmente absorvida pela divindade. Seu reinado de 7 anos (444–451) foi marcado pela perseguição aos bispos ortodoxos do Egito, pela aliança com Eutiques e pelo desastroso Latrocínio de 449. Nascido em Alexandria, centro intelectual do mundo helenístico, Dioscoro foi formado na tradição teológica alexandrina que valorizava a unidade da pessoa de Cristo.',
    papelNoConcilio:
      'Dioscoro foi o grande antagonista de Calcedônia. Chegou ao concílio como acusado (não como presidente, como no Latrocínio), cercado por seus 13 bispos egípcios e por monges armados. Na 1ª sessão, foi obrigado a sentar-se no banco dos acusados — uma inversão humilhante de papéis. Recusou-se a comparecer à 3ª sessão (alegando doença), mas foi julgado in absentia e deposto por unanimidade. A sentença, pronunciada por Paschasinus em nome do Papa Leão e de São Pedro, o privou "da dignidade episcopal e de toda função sacerdotal".',
    depois451:
      'Dioscoro foi exilado para Gangra, na Paflagônia (atual Çankırı, Turquia), onde morreu em setembro de 454. Para as Igrejas Ortodoxas Orientais (copta, siríaca, armênia, etíope), é um confessor e mártir que defendeu a fé de Cirilo. Para os calcedonianos, é um herege deposto. A Igreja Copta o venera como santo e o inclui em seu calendário litúrgico. Seu legado permanece divisivo até hoje.',
    fontes:
      'Acta Concilii Chalcedonensis (ACO II.1.1–II.1.5); Atas do Latrocínio (449, ed. Schwartz); Sócrates Escolástico, HE VII.34; Evágrio Escolástico, HE I.8.',
  },

  // ═══════════════════════════════════════════════════════
  // 5. EUTIQUES
  // ═══════════════════════════════════════════════════════
  {
    slug: 'eutiques',
    nome: 'Eutiques de Constantinopla',
    nomeGrego: 'Εὐτυχής',
    titulo: 'Arquimandrita do Mosteiro de Constantinopla',
    datas: 'c. 378 – c. 454–456',
    origem: 'Constantinopla',
    lado: 'monofisita',
    biografia:
      'Eutiques nasceu por volta de 378 e entrou na vida monástica ainda jovem, tornando-se arquimandrita (abade) de um grande mosteiro nos arredores de Constantinopla com mais de 300 monges. Era um homem idoso, piedoso e teologicamente limitado, cuja influência derivava mais de suas conexões políticas do que de sua erudição: seu afilhado (ou filho adotivo) era o poderoso eunuco Crisáfio, o camareiro-mor de Teodósio II, o que lhe dava imunidade e acesso direto ao imperador. Sua cristologia era simples e radical: "Confesso que nosso Senhor era de duas naturezas antes da união, mas após a união confesso uma só natureza" (ek dyo physeōn pro tēs henōseōs, meta de tēn henōsin mian physin). Sua metáfora favorita era a da "gota de mel no oceano": a humanidade de Cristo, ao se unir à divindade, foi absorvida e dissolvida. Eutiques era um monge de ascetismo rigoroso, mas de capacidade intelectual limitada, que simplificou a teologia ciriliana em fórmulas mecanicistas.',
    papelNoConcilio:
      'Eutiques não esteve presente em Calcedônia — estava exilado desde 449, quando fora deposto por Flaviano (e depois reabilitado no Latrocínio). Porém, sua "sombra" dominou todo o concílio: a Definição de Calcedônia foi redigida especificamente para refutar sua fórmula. Os quatro advérbios ("sem confusão, sem mudança, sem divisão, sem separação") são, em última análise, uma resposta a Eutiques. O concílio reafirmou sua condenação e o declarou herege junto com Nestório e Apolinário.',
    depois451:
      'Eutiques provavelmente morreu por volta de 454–456, em data exata desconhecida. O eutiquianismo (monofisismo radical) foi condenado em Calcedônia, mas sobreviveu em formas mais moderadas (miafisismo ciriliano) nas Igrejas Orientais. A distinção entre o "eutiquianismo" (heresia: a humanidade é absorvida) e o "miafisismo" (posição das Igrejas Orientais: uma natureza composta, sem absorção) é crucial para os diálogos ecumênicos modernos.',
    fontes:
      'Sínodo de Constantinopla (448, Atas, ed. Schwartz ACO III); Latrocínio de Éfeso (449, Atas); Definição de Calcedônia (451); Sócrates Escolástico, HE VII.34.',
  },

  // ═══════════════════════════════════════════════════════
  // 6. FLAVIANO
  // ═══════════════════════════════════════════════════════
  {
    slug: 'flaviano',
    nome: 'Flaviano de Constantinopla',
    nomeGrego: 'Φλαβιανός',
    titulo: 'Patriarca de Constantinopla (446–449) e Mártir',
    datas: 'c. 400 – 11 de agosto de 449',
    origem: 'Constantinopla',
    lado: 'calcedoniano',
    biografia:
      'Flaviano era um clérigo de Constantinopla que serviu como guardião dos vasos sagrados (skeuophylax) da Grande Igreja (Hagia Sophia) antes de ser eleito patriarca em 446, sucedendo a Proclo. Sua eleição foi apoiada pela imperatriz Pulquéria mas oposta por Crisáfio, que preferia um patriarca mais maleável. Flaviano era um homem de fé ortodoxa e caráter firme, mas politicamente isolado: não tinha a proteção da corte (Crisáfio era seu inimigo) e não tinha a força militar dos monges (como Dioscoro). Em 448, convocou o Sínodo Permanente que condenou Eutiques por heresia — um ato de coragem que lhe custaria a vida. No Latrocínio de 449, Flaviano foi deposto, espancado por monges liderados por Barsauma e arrastado para fora da igreja. Exilado para a Frígia, morreu três dias depois em Hipaepa, em 11 de agosto de 449, em consequência dos ferimentos. Flaviano nasceu em Constantinopla e foi educado na tradição eclesiástica da capital imperial.',
    papelNoConcilio:
      'Flaviano estava morto quando Calcedônia se reuniu, mas sua memória dominou o concílio como a de um mártir. A reabilitação de Flaviano foi o primeiro ato simbólico do concílio: seus restos mortais, transladados para Constantinopla por ordem de Pulquéria em 450, foram recebidos com honras de mártir e sepultados na Igreja dos Santos Apóstolos (ao lado dos imperadores). Na 1ª sessão de Calcedônia, o testemunho do diácono de Flaviano sobre seus últimos momentos provocou lágrimas e gritos de fúria contra Dioscoro.',
    depois451:
      'Flaviano é venerado como santo e mártir pela Igreja Católica (18 de fevereiro) e pela Ortodoxa (16 de fevereiro). Sua carta ao Papa Leão (a "Carta de Flaviano", 448) provocou a resposta de Leão: o célebre Tomo. Sem o martírio de Flaviano, o Tomo de Leão não teria sido escrito, e Calcedônia não teria tido a dimensão moral que teve.',
    fontes:
      'Carta ao Papa Leão I (448, ed. Schwartz ACO III); Atas do Sínodo de Constantinopla (448); Atas do Latrocínio (449); Acta Concilii Chalcedonensis ACO II.1.1.',
  },

  // ═══════════════════════════════════════════════════════
  // 7. ANATÓLIO
  // ═══════════════════════════════════════════════════════
  {
    slug: 'anatolio',
    nome: 'Anatólio de Constantinopla',
    nomeGrego: 'Ἀνατόλιος',
    titulo: 'Patriarca de Constantinopla (449–458)',
    datas: 'c. 400 – 3 de julho de 458',
    origem: 'Alexandria, Egito (de origem, mas carreira em Constantinopla)',
    lado: 'calcedoniano',
    biografia:
      'Anatólio era um clérigo de origem alexandrina que serviu como apocrisiário (embaixador eclesiástico) de Dioscoro de Alexandria em Constantinopla. Após o Latrocínio de 449 e a deposição de Flaviano, Dioscoro e Crisáfio nomearam Anatólio como novo patriarca de Constantinopla — uma escolha que garantia a lealdade da sé imperial ao partido monofisita. Porém, com a morte de Teodósio II e a ascensão de Marciano e Pulquéria (450), Anatólio demonstrou sua flexibilidade política: abandonou rapidamente a causa de Dioscoro, aceitou o Tomo de Leão e alinhou-se com a nova ordem calcedoniana. Sua sobrevivência política é notável: foi o único patriarca nomeado por Dioscoro que não foi deposto em Calcedônia. Nascido em Alexandria, Anatólio migrou para Constantinopla onde fez carreira eclesiástica.',
    papelNoConcilio:
      'Anatólio co-presidiu o concílio ao lado dos legados papais, mas com autoridade inferior. Seu papel foi ambíguo: como ex-protegido de Dioscoro, precisava demonstrar constantemente sua ortodoxia; como patriarca de Constantinopla, era o principal beneficiário do Cânon 28, que elevou sua sé a "segunda Roma". Os legados papais desconfiavam dele, e Leão I o repreendeu duramente em cartas posteriores por sua ambição jurisdicional.',
    depois451:
      'Anatólio morreu em 3 de julho de 458, possivelmente durante um terremoto em Constantinopla. Após Calcedônia, consolidou a posição de Constantinopla como sé de prestígio e defendeu a Definição contra os monofisitas. Seu principal legado é o Cânon 28, que permanece como base da reivindicação do Patriarcado Ecumênico de Constantinopla até hoje.',
    fontes:
      'ACO II.1.2 (presidência); Cartas de Leão I ao Patriarca Anatólio (Ep. 57–64, ed. CCSL 100A); Teódoro Leitor, HE II.10.',
  },

  // ═══════════════════════════════════════════════════════
  // 8. MÁXIMO DE ANTIOQUIA
  // ═══════════════════════════════════════════════════════
  {
    slug: 'maximo-antioquia',
    nome: 'Máximo de Antioquia',
    nomeGrego: 'Μάξιμος Ἀντιοχείας',
    titulo: 'Patriarca de Antioquia (449–455)',
    datas: 'c. 400 – c. 455',
    origem: 'Antioquia, Síria',
    lado: 'calcedoniano',
    biografia:
      'Máximo foi nomeado patriarca de Antioquia em 449 por Dioscoro, após a deposição de Domno II no Latrocínio de Éfeso. Como Anatólio de Constantinopla, Máximo era um produto da política monofisita de Dioscoro e Crisáfio. Porém, também como Anatólio, Máximo demonstrou pragmatismo político: em Calcedônia, aceitou a Definição e anatematizou Dioscoro, garantindo sua sobrevivência como patriarca. Sua posição era delicada: Antioquia era a terra natal da escola teológica antioquena (Diodoro, Teodoro, Nestório), e muitos de seus sufragâneos simpatizavam com o diofisismo (duas naturezas). Nascido em Antioquia, Máximo foi formado na tradição teológica antioquena que valorizava a distinção das naturezas em Cristo.',
    papelNoConcilio:
      'Máximo participou ativamente das sessões doutrinárias e aceitou o Tomo de Leão sem resistência significativa. Seu momento mais importante foi na Sessão 7, quando cedeu a jurisdição sobre as três províncias da Palestina a Juvenal de Jerusalém em troca da confirmação de sua autoridade sobre a Fenícia e a Arábia. Este acordo reorganizou o mapa eclesiástico do Oriente e completou a Pentarquia.',
    depois451:
      'Máximo foi deposto em 455 pelo imperador Marciano por razões obscuras (provavelmente suspeitas de simpatia monofisita tardia) e substituído por Basílio de Antioquia. Morreu pouco depois, no esquecimento. Seu acordo com Juvenal na Sessão 7 teve consequências duradouras: a elevação de Jerusalém a patriarcado independente permanece até hoje.',
    fontes:
      'ACO II.1.2 (Sessão 7); Acta Concilii Chalcedonensis (ed. Schwartz); Evágrio Escolástico, HE I.8.',
  },

  // ═══════════════════════════════════════════════════════
  // 9. JUVENAL
  // ═══════════════════════════════════════════════════════
  {
    slug: 'juvenal',
    nome: 'Juvenal de Jerusalém',
    nomeGrego: 'Ἰουβενάλιος',
    titulo: 'Bispo (depois Patriarca) de Jerusalém (422–458)',
    datas: 'c. 380 – 2 de julho de 458',
    origem: 'Jerusalém, Palestina',
    lado: 'calcedoniano',
    biografia:
      'Juvenal é o sobrevivente mais astuto e controverso da crise cristológica do século V. Bispo de Jerusalém desde 422, era um político eclesiástico de primeira ordem, capaz de trocar de lado com habilidade extraordinária. No Concílio de Éfeso (431), apoiou Cirilo contra Nestório. No Latrocínio de 449, foi co-presidente ao lado de Dioscoro e votou pela deposição de Flaviano. Em Calcedônia (451), anatematizou Dioscoro e aceitou o Tomo de Leão, trocando de lado mais uma vez. Sua recompensa foi a elevação de Jerusalém a patriarcado independente (Sessão 7). Nascido em Jerusalém, Juvenal foi formado na tradição cristã da cidade santa e combinou pastoral com astúcia política.',
    papelNoConcilio:
      'Juvenal participou de todas as sessões e foi um dos bispos mais ativos. Seu momento decisivo foi na Sessão 7, quando negociou com Máximo de Antioquia a elevação de Jerusalém a patriarcado, recebendo jurisdição sobre as três províncias da Palestina. Os legados papais protestaram (Jerusalém era uma sé sufragânea de Cesareia, não um patriarcado), mas os comissários imperiais ratificaram o acordo.',
    depois451:
      'Quando Juvenal retornou a Jerusalém em 452, monges monofisitas o expulsaram da cidade e elegeram um "anti-patriarca", Teodósio, que governou por 20 meses. Juvenal só retornou em 453, com apoio militar imperial. Morreu em 2 de julho de 458, tendo consolidado a posição de Jerusalém como patriarcado independente.',
    fontes:
      'ACO II.1.2 (Sessão 7); Acta Concilii Chalcedonensis (ed. Schwartz); Evágrio Escolástico, HE I.8–12.',
  },

  // ═══════════════════════════════════════════════════════
  // 10. PASCHASINUS
  // ═══════════════════════════════════════════════════════
  {
    slug: 'paschasinus',
    nome: 'Paschasinus de Lilibeu',
    nomeLatim: 'Paschasinus Lilybaetanus',
    titulo: 'Bispo de Lilibeu (Sicília) e Legado Papal',
    datas: 'fl. 440–455',
    origem: 'Lilibeu (atual Marsala, Sicília)',
    lado: 'calcedoniano',
    biografia:
      'Paschasinus era bispo de Lilibeu, uma pequena diocese na costa ocidental da Sicília. Quase nada se sabe sobre sua vida antes de 451, exceto que era fluente em grego e latim (a Sicília era bilíngue) e que gozava da confiança do Papa Leão I, que o escolheu como seu representante principal em Calcedônia. Sua escolha pode parecer surpreendente (um bispo de uma diocese obscura presidindo o maior concílio da antiguidade), mas reflete a escassez de bispos italianos disponíveis (a Itália estava sob ameaça de Átila) e a necessidade de um legado que falasse grego fluentemente. Nascido na Sicília, Paschasinus foi educado em um contexto bilíngue que o preparou para o papel de intermediário entre Ocidente e Oriente.',
    papelNoConcilio:
      'Paschasinus presidiu todas as sessões solenes de Calcedônia em nome do Papa Leão. Foi ele quem abriu a 1ª sessão, quem pronunciou a sentença de deposição de Dioscoro na 3ª sessão (invocando a autoridade de Leão e de São Pedro), e quem liderou a aprovação do Tomo na 2ª sessão. Seu papel foi crucial mas limitado: os comissários imperiais frequentemente o contornavam e controlavam a agenda.',
    depois451:
      'Paschasinus permanece como uma figura quase esquecida na história da Igreja, mas seu papel em Calcedônia foi histórico: foi a primeira vez que um legado papal presidiu um concílio ecumênico no Oriente, estabelecendo o precedente da presidência romana que seria invocado em todos os concílios posteriores.',
    fontes:
      'ACO II.1.2 (presidência das sessões); Ep. 9 (444, sobre a Páscoa, ed. CCSL 100A); Cartas de Leão I sobre Calcedônia (Ep. 100–106, ed. CCSL 100A).',
  },

  // ═══════════════════════════════════════════════════════
  // 11. TEODORETO
  // ═══════════════════════════════════════════════════════
  {
    slug: 'teodoreto',
    nome: 'Teodoreto de Ciro',
    nomeGrego: 'Θεοδώρητος Κύρου',
    titulo: 'Bispo de Ciro (Síria) e Teólogo',
    datas: 'c. 393 – c. 457–466',
    origem: 'Antioquia, Síria',
    lado: 'calcedoniano',
    biografia:
      'Teodoreto nasceu em Antioquia por volta de 393, de família cristã abastada. Educado nos mosteiros da Síria e na escola teológica antioquena (herdeira de Diodoro de Tarso e Teodoro de Mopsuéstia), tornou-se bispo de Ciro (uma pequena diocese na Síria do norte) em 423. Foi um dos teólogos mais prolíficos e brilhantes do século V: suas obras incluem comentários bíblicos, tratados teológicos, histórias eclesiásticas e hagiografias. Na controvérsia cristológica, Teodoreto defendeu a tradição antioquena (ênfase na dualidade de naturezas) e escreveu contra Cirilo de Alexandria (seu Eranistes é um diálogo anti-ciriliano). Esta posição lhe valeu a acusação de "nestorianismo" e a deposição no Latrocínio de 449. Nascido em Antioquia, Teodoreto foi formado na escola teológica que enfatizava a distinção real das naturezas divina e humana em Cristo.',
    papelNoConcilio:
      'Teodoreto foi reabilitado na Sessão 8 de Calcedônia, mas a um custo: o concílio exigiu que anatematizasse publicamente Nestório. Após alguma hesitação (Teodoreto fora amigo pessoal de Nestório décadas antes e considerava sua condenação em Éfeso injusta), ele declarou: "Anátema a Nestório e a quem não diz que a Santa Virgem é Theotokos!". A aclamação foi imediata: "Teodoreto é ortodoxo!". Sua reabilitação foi essencial para demonstrar que Calcedônia não era "nestoriana".',
    depois451:
      'Teodoreto retornou a Ciro e viveu seus últimos anos em relativa paz, escrevendo comentários bíblicos. Morreu por volta de 457–466. No II Constantinopla (553), seus escritos contra Cirilo (os "Três Capítulos") foram condenados postumamente, reabrindo a ferida de Calcedônia.',
    fontes:
      'Eranistes (447, ed. SC 57); Historia Ecclesiastica (449); Historia Religiosa (444); ACO II.1.4 (Sessão 8); Cartas (ed. PSG 83).',
  },

  // ═══════════════════════════════════════════════════════
  // 12. IBAS
  // ═══════════════════════════════════════════════════════
  {
    slug: 'ibas',
    nome: 'Ibas de Edessa',
    nomeGrego: 'Ἰβᾶς Ἐδέσσης',
    nomeLatim: 'Ibas Edessenus',
    titulo: 'Bispo de Edessa (435–457, com interrupção)',
    datas: 'c. 390 – 28 de outubro de 457',
    origem: 'Edessa (atual Şanlıurfa, Turquia)',
    lado: 'calcedoniano',
    biografia:
      'Ibas nasceu por volta de 390 em Edessa, o centro da cultura siríaca e da escola teológica da Pérsia. Foi professor na famosa Escola de Edessa e tradutor das obras de Teodoro de Mopsuéstia do grego para o siríaco — uma atividade que lhe valeu a acusação de "nestorianismo". Em 435, tornou-se bispo de Edessa, sucedendo a Rábula (um anti-nestoriano ferrenho). Sua "Carta a Maris" (c. 433), na qual criticava Cirilo de Alexandria e elogiava Teodoro de Mopsuéstia, tornou-se um dos documentos mais controversos da cristologia antiga e um dos "Três Capítulos" condenados em 553. Nascido em Edessa, Ibas foi formado na tradição teológica síria que valorizava a obra de Teodoro de Mopsuéstia.',
    papelNoConcilio:
      'Ibas foi reabilitado na Sessão 10 de Calcedônia, juntamente com Teodoreto. Como Teodoreto, foi exigido que anatematizasse Nestório publicamente. Ibas fez a declaração exigida e foi restaurado à sua sé. Sua reabilitação foi ainda mais controversa que a de Teodoreto, pois a Carta a Maris continha críticas diretas a Cirilo — o ídolo dos monofisitas.',
    depois451:
      'Ibas morreu em 28 de outubro de 457, pouco mais de um ano após o linchamento do patriarca calcedoniano Proterio de Alexandria pela multidão monofisita. Sua morte coincidiu com o início da rejeição aberta de Calcedônia no Egito. A Escola de Edessa, associada a Ibas, foi fechada pelo imperador Zenão em 489, e seus professores fugiram para a Pérsia, fortalecendo a Igreja do Oriente ("nestoriana").',
    fontes:
      'Carta a Maris (c. 433, ed. Schwartz ACO III); ACO II.1.4 (Sessão 10); Biografias de Rábula de Edessa; Atas do Sínodo de Tiro (449).',
  },

  // ═══════════════════════════════════════════════════════
  // 13. CRISÁFIO (NOVO)
  // ═══════════════════════════════════════════════════════
  {
    slug: 'crisafio',
    nome: 'Crisáfio',
    nomeGrego: 'Χρυσάφιος',
    titulo: 'Prepósito do sagrado cubículo (camareiro-mor) de Teodósio II',
    datas: 'fl. c. 430 – dezembro de 450',
    origem: 'Origem desconhecida (possivelmente Trácia ou Anatólia)',
    lado: 'monofisita',
    biografia:
      'Crisáfio foi um dos eunucos mais poderosos da história bizantina, ascendendo ao cargo de preposição sacri cubiculi (camareiro-mor) sob o imperador Teodósio II. Este cargo, aparentemente doméstico, concentrava um poder imenso: controlava o acesso ao imperador, gerenciava a correspondência imperial e interferia em todas as nomeações eclesiásticas e políticas. Crisáfio era afilhado (ou filho adotivo) do arquimandrita Eutiques, o que explica sua aliança teológica com o monofisismo. Durante a década de 440, Crisáfio dominou completamente a política religiosa de Teodósio II, nomeando patriarcas dóceis (Flaviano foi sua exceção involuntária), organizando o Latrocínio de 449 e exilando oposições. Sua influência era tal que, nos anos 449–450, ele era considerado, ao lado de Dioscoro de Alexandria, como o segundohomem do Império em termos de poder efetivo.',
    papelNoConcilio:
      'Crisáfio não esteve presente em Calcedônia — foi preso e executado em dezembro de 450, poucos meses após a morte de Teodósio II e a ascensão de Marciano e Pulquéria. Sua morte foi o prelúdio necessário para Calcedônia: enquanto Crisáfio vivia, o Latrocínio de 449 permanecia como política oficial do Império. A execução de Crisáfio por Marciano (acusado de conspiração contra o novo imperador) removeu o obstáculo político principal para a convocação do concílio. Crisáfio foi morto em dezembro de 450, meses antes de Calcedônia, e portanto não teve participação direta no concílio.',
    depois451:
      'Crisáfio foi executado em dezembro de 450, antes de Calcedônia. Sua morte foi organizada por Marciano e Pulquéria como parte da limpeza do aparelho imperial do partido monofisita. Segundo as fontes, Crisáfio foi condenado por conspiração contra o imperador, mas o motivo real era sua ligação com a política religiosa de Teodósio II. Sua execução abriu o caminho para Calcedônia.',
    fontes:
      'Prisco de Pânio (fragmentos, ed. FHG IV); Sócrates Escolástico, HE VII.42; Evágrio Escolástico, HE I.4; Teódoro Leitor, HE II.9.',
  },

  // ═══════════════════════════════════════════════════════
  // 14. EUDÓCIA (NOVO)
  // ═══════════════════════════════════════════════════════
  {
    slug: 'eudocia',
    nome: 'Athenais / Eudócia',
    nomeGrego: 'Αὐξεντία / Εὐδοκία',
    titulo: 'Esposa de Teodósio II e Augusta (421–443)',
    datas: 'c. 400 – c. 460',
    origem: 'Atenas, Grécia (filha do filósofo Leôncio)',
    lado: 'neutro',
    biografia:
      'Athenais (depois Eudócia) nasceu por volta de 400 em Atenas, filha do filósofo pagão Leôncio. Educada na tradição clássica grega, era uma mulher de cultura extraordinária, fluentemente bilíngue (grego e latim), e poeta talentosa. Teodósio II apaixonou-se por ela e, contrariando a vontade de sua irmã Pulquéria, casou-se em 421. Eudócia foi batizada e recebeu o nome de Eudócia antes do casamento. Nos anos 420–430, exerceu grande influência sobre Teodósio, promovendo a cultura grega e a construção de igrejas (incluindo a decoração da Hagia Sophia com mosaicos). Porém, sua influência política diminuiu gradualmente, e em 443 ela foi oficialmente afastada da corte (por razões que as fontes descrevem de forma vaga — possivelmente rivalidade com Pulquéria e Crisáfio). Eudócia mudou-se para Jerusalém, onde viveu os últimos anos como patrona de igrejas e mosteiros.',
    papelNoConcilio:
      'Eudócia não teve participação direta em Calcedônia. Sua influência política tinha cessado anos antes, com a morte de Teodósio II (450) e sua própria partida para Jerusalém. Porém, sua ausência do círculo de poder imperial foi um fator indireto: enquanto Eudócia esteve em Constantinopla, ela e Pulquéria competiam pela influência sobre Teodósio, o que enfraquecia a posição de Pulquéria. Com a morte de Teodósio e a ascensão de Marciano, Pulquéria eliminou Crisáfio e implementou a política calcedoniana.',
    depois451:
      'Eudócia viveu em Jerusalém até sua morte, por volta de 460. Lá, dedicou-se a projetos religiosos e culturais, financiando igrejas e mosteiros. Algumas fontes sugerem que ela simpatizava com posições monofisitas (ou, ao menos, com a teologia ciriliana moderada), mas não há evidência de que tenha se envolvido ativamente na controvérsia pós-Calcedônia. Sua filha Eudócia (jovem) casou-se com o general Hério e depois com o rei vândalo Genserico.',
    fontes:
      'Sócrates Escolástico, HE VII.21–22, 42; Prisco de Pânio (fragmentos, ed. FHG IV); Evágrio Escolástico, HE I.2, 20; Crônica Pascóial (a. 443).',
  },

  // ═══════════════════════════════════════════════════════
  // 15. EUSÉBIO DE DORILEIA (NOVO)
  // ═══════════════════════════════════════════════════════
  {
    slug: 'eusebio-dorileu',
    nome: 'Eusébio de Dorileia',
    nomeGrego: 'Εὐσέβιος Δορυλαίου',
    titulo: 'Bispo de Dorileia (Frigia)',
    datas: 'fl. 431–449',
    origem: 'Dorileia (atual决 Turquia), Frígia',
    lado: 'calcedoniano',
    biografia:
      'Eusébio de Dorileia foi um bispo frígio que desempenhou um papel crucial em duas das maiores controvérsias do século V cristão: a condenação de Nestório (431) e a denúncia de Eutiques (448). No Concílio de Éfeso (431), Eusébio foi um dos principais acusadores de Nestório, apresentando evidências de suas pregações heterodoxas contra o título Theotokos. Quase vinte anos depois, em 448, Eusébio novamente assumiu o papel de acusador: foi ele quem apresentou ao patriarca Flaviano de Constantinopla as queixas contra Eutiques e seu monofisismo. Esta denúncia levou ao Sínodo de Constantinopla (448) que condenou Eutiques, desencadeando a cadeia de eventos que culminaria no Latrocínio (449) e em Calcedônia (451). Eusébio era um homem de formação teológica sólida, fiel à tradição nicena e ciriliana moderada, e de temperamento combativo.',
    papelNoConcilio:
      'Eusébio não compareceu pessoalmente a Calcedônia — estava exilado desde o Latrocínio de 449, quando foi deposto e banido por ordem de Dioscoro. Porém, sua denúncia original contra Eutiques (448) foi confirmada pelo concílio, e sua reabilitação foi um dos atos simbólicos mais importantes de Calcedônia. O concílio reconheceu que Eusébio fora vítima de uma injustiça no Latrocínio.',
    depois451:
      'Eusébio foi reabilitado em Calcedônia e recuperou sua sé de Dorileia. Participou do Sínodo de Constantinopla (459) que reafirmou a Definição. Sua carreira ilustra a volatilidade da política eclesiástica do século V: o mesmo homem foi acusador heroico em 431 e 448, vítima em 449, e heróico novamente em 451.',
    fontes:
      'Atas do Sínodo de Constantinopla (448, ed. Schwartz ACO III); Atas do Latrocínio (449); ACO II.1.2; Sócrates Escolástico, HE VII.34.',
  },

  // ═══════════════════════════════════════════════════════
  // 16. BARSAUMA (NOVO)
  // ═══════════════════════════════════════════════════════
  {
    slug: 'barsauma',
    nome: 'Barsauma',
    nomeGrego: 'Βαρσαῦμας',
    titulo: 'Arquimandrita sírio e guarda-costas de Dioscoro',
    datas: 'fl. 449',
    origem: 'Síria (possivelmente Turabdin)',
    lado: 'monofisita',
    biografia:
      'Barsauma era um arquimandrita sírio de força física lendária que liderava uma guarda pessoal de monges armados a serviço de Dioscoro de Alexandria. As fontes calcedonianas o descrevem como um bandido disfarçado de monge, cuja violência no Latrocínio de Éfeso (449) ficou proverbial. Barsauma e seus monges supostamente participaram do espancamento mortal do patriarca Flaviano de Constantinopla, golpeando-o com bastões e pés até deixá-lo semiconsciente. Quando os bispos pediram misericórdia a Dioscoro, Barsauma teria gritado: "Bata nele de novo!". A fama de violento de Barsauma era tão grande que, em Calcedônia, quando os bispos souberam de sua presença, gritaram: "Que Barsauma seja queimado!", forçando os comissários imperiais a acalmar a assembleia. Barsauma era um sírio do Turabdin (região montanhosa do sudeste da Turquia atual), centro do monasticismo sírio.',
    papelNoConcilio:
      'Barsauma esteve presente em Calcedônia como "guarda-costas" de Dioscoro, mas foi rapidamente expulso pelos comissários imperiais diante dos protestos dos bispos. Sua presença era vista como uma ameaça à segurança do concílio e um lembrete da violência do Latrocínio. A expulsão de Barsauma foi um dos primeiros atos da 1ª sessão.',
    depois451:
      'Após Calcedônia, Barsauma retornou à Síria e continuou ativo no movimento monofisita sírio. É considerado um dos líderes do cisma que separou as comunidades cristãs siríacas entre calcedonianas (Igreja Siríaca Ortodoxa) e não-calcedonianas. Suas datas de nascimento e morte são desconhecidas.',
    fontes:
      'Atas do Latrocínio (449, ed. Schwartz ACO III); ACO II.1.1 (presença em Calcedônia); Evágrio Escolástico, HE I.6–7.',
  },

  // ═══════════════════════════════════════════════════════
  // 17. PROTERIO (NOVO)
  // ═══════════════════════════════════════════════════════
  {
    slug: 'proterio',
    nome: 'Proterio de Alexandria',
    nomeGrego: 'Προτέριος',
    titulo: 'Patriarca de Alexandria (451–457)',
    datas: 'c. 410 – 28 de março de 457',
    origem: 'Alexandria, Egito',
    lado: 'calcedoniano',
    biografia:
      'Proterio foi eleito patriarca de Alexandria em 451, imediatamente após a deposição de Dioscoro em Calcedônia. Antes de sua eleição, era um presbítero alexandrino que se distinguira por sua oposição ao monofisismo de Dioscoro. Sua eleição foi imposta pelo poder imperial (Marciano e Pulquéria) e aceita pela maioria dos bispos presentes em Calcedônia, mas enfrentou resistência imediata da população monofisita do Egito. Proterio era um homem de temperamento moderado, que tentou governar uma diocese profundamente dividida entre calcedonianos e monofisitas. Sua posição era impossível: para os calcedonianos, era o patriarca legítimo; para os monofisitas, era um impostor. Proterio tentou uma política de conciliação, mas fracassou diante da radicalização do movimento monofisita egípcio.',
    papelNoConcilio:
      'Proterio não teve participação direta nas sessões de Calcedônia — sua eleição como patriarca de Alexandria foi organizada pelos comissários imperiais após a deposição de Dioscoro. No entanto, sua nomeação foi uma das consequências diretas do concílio, e sua posição em Alexandria seria testada nos anos seguintes.',
    depois451:
      'Proterio governou Alexandria por seis anos (451–457) em meio a constantes revoltas monofisitas. Em 28 de março de 457, durante a Celebração da Páscoa, foi linchado pela multidão monofisita na igreja de.tbl.ão (ou "tableto", uma igreja alexandrina). Seu corpo foi arrastado pelas ruas e queimado, e suas cinzas foram jogadas no mar. Sua morte violenta demonstrou a incapacidade do império de impor Calcedônia no Egito.',
    fontes:
      'Evágrio Escolástico, HE II.2; Sócrates Escolástico, HE VII.42; Teódoro Leitor, HE II.10; Crônica Pascóial (a. 457).',
  },

  // ═══════════════════════════════════════════════════════
  // 18. TIMÓTEO ELURO (NOVO)
  // ═══════════════════════════════════════════════════════
  {
    slug: 'timoteo-eluro',
    nome: 'Timóteo Aelurus (Timóteo, o Gato)',
    nomeGrego: 'Τιμόθεος Αἴλουρος',
    titulo: 'Patriarca de Alexandria (457–460 e 475–477)',
    datas: 'fl. 457 – 477',
    origem: 'Alexandria, Egito',
    lado: 'monofisita',
    biografia:
      'Timóteo Aelurus (em grego, "Aelurus" = "o Gato") foi um dos líderes mais enigmáticos do movimento monofisita egípcio. Seu apelido ("o Gato") provavelmente derivava de sua habilidade de se mover silenciosamente, evadindo-se de perseguições — uma metáfora para sua carreira de fuga e retorno ao trono patriarcal. Timóteo era um monge egípcio de formação teológica sólida, fiel à tradição ciriliana e hostil à Definição de Calcedônia, que considerava uma traição da herança teológica de Cirilo. Ele foi eleito "patriarca" pelos monofisitas egípcios imediatamente após o linchamento de Proterio (457), mas seu patriarcado era considerado ilegítimo pelas autoridades imperiais. Sua carreira foi marcada por idas e vindas ao trono patriarcal, dependendo do equilíbrio de poder político em Constantinopla.',
    papelNoConcilio:
      'Timóteo não teve participação direta em Calcedônia. Sua ascensão ao "patriarcado" monofisita em 457 foi uma consequência direta do concílio e da rejeição egípcia da Definição. Em 457, Timóteo foi eleito pelos monofisitas como resposta à nomeação de Proterio.',
    depois451:
      'Timóteo governou Alexandria em dois períodos: 457–460 (deposto pelo imperador Zenão) e 475–477 (restaurado brevemente durante a usurpação de Basilisco). Morreu em 477, pouco depois de sua segunda deposição. Sua carreira exemplifica a instabilidade política e religiosa do Egito no segundo quartel do século V.',
    fontes:
      'Evágrio Escolástico, HE II.2, III.12; Teódoro Leitor, HE II.10; Crônica Pascóial (a. 457, 460, 475, 477).',
  },

  // ═══════════════════════════════════════════════════════
  // 19. SEVERO DE ANTIOQUIA (NOVO)
  // ═══════════════════════════════════════════════════════
  {
    slug: 'severo-antioquia',
    nome: 'Severo de Antioquia',
    nomeGrego: 'Σευῆρος Ἀντιοχείας',
    titulo: 'Patriarca de Antioquia (512–518)',
    datas: 'c. 465 – 8 de fevereiro de 538',
    origem: 'Sozópolis, Pisídia (atual Büyükköy, Turquia)',
    lado: 'monofisita',
    biografia:
      'Severo nasceu por volta de 465 em Sozópolis, na Pisídia, de família afluente. Educado em Alexandria e Antioquia, foi monk e depois bispo de Sozópolis antes de ser eleito patriarca de Antioquia em 512, com apoio do imperador Anastácio I (que simpatizava com os monofisitas). Severo era o principal teólogo monofisita do século VI, um adversário intelectual formidável da Definição de Calcedônia. Sua teologia baseava-se na interpretação miafisista da fórmula ciriliana "uma natureza encarnada do Verbo", e ele foi capaz de articular uma posição sofisticada que se distinguia do eutiquianismo radical. Severo escreveu extensivamente contra a Definição, contra o Tomo de Leão e contra a cristologia diofisista. Suas obras (em grego e siríaco) formam um dos corpos teológicos mais importantes da tradição monofisita.',
    papelNoConcilio:
      'Severo não teve participação direta em Calcedônia (nascido c. 465, onze anos após o concílio). Sua carreira teológica e política é, no entanto, uma consequência direta de Calcedônia: todo o seu trabalho teológico foi dedicado a refutar a Definição e a fornecer uma base teológica para a rejeição monofisita do concílio.',
    depois451:
      'Severo foi patriarca de Antioquia de 512 a 518, quando foi deposto pelo imperador Justino I (calcedoniano). Exilado no Egito, morreu em 538 em Alexandria. É venerado como santo pela Igreja Ortodoxa Siríaca. Sua teologia permanece como referência central do miafisismo e é estudada até hoje nas Igrejas Orientais não-calcedonianas.',
    fontes:
      'Obras polemicas (ed. J. Lebon, MCP); Cartas (ed. A. Schmitt, SC 130); Evágrio Escolástico, HE III.29–34; Crônica de Zuqnin.',
  },

  // ═══════════════════════════════════════════════════════
  // 20. HILÁRIO DIÁCONO (NOVO)
  // ═══════════════════════════════════════════════════════
  {
    slug: 'hilaro-diacono',
    nome: 'Hilário (Diácono)',
    nomeLatim: 'Hilarius diaconus',
    titulo: 'Diácono romano, Legado Papal ao Latrocínio (449) e Papa (461–468)',
    datas: 'fl. 449 – 29 de fevereiro de 468',
    origem: 'Sardenha ou Roma, Itália',
    lado: 'calcedoniano',
    biografia:
      'Hilário nasceu provavelmente na Sardenha ou em Roma, e fez carreira na cúria romana como diácono. Em 449, o Papa Leão I o enviou como legado ao Concílio de Éfeso (que depois seria conhecido como "Latrocínio" — o "Concílio dos Ladrões"). Hilário foi um dos dois legados papais presentes ao Latrocínio, ao lado do bispo Abundâncio de Pesaro. Ao contrário de Paschasinus (que presidiu Calcedônia), Hilário não foi escolho pelo seu erudição ou fluência em grego, mas pela lealdade e pela coragem: ele era um diácono (não um bispo), o que era incomum para legações de alto nível. Hilário era um homem de temperamentoCombativo e fé inabalável. Antes de Calcedônia, já havia se destacado pela defesa da primazia romana e pela oposição ao monofisismo.',
    papelNoConcilio:
      'Hilário não esteve presente em Calcedônia (o que surpreende, dado seu papel anterior). Foi enviado por Leão como legado ao Latrocínio (449), onde testemunhou a violência de Dioscoro e a deposição de Flaviano. Em Calcedônia, o papel de legado papal coube a Paschasinus, Lucêncio e Bonifácio. Hilário, no entanto, é mencionado nas fontes como testemunha do Latrocínio, cujo testemunho foi crucial para a reabilitação dos condenados.',
    depois451:
      'Hilário foi eleito Papa em 461, sucedendo a Leão Magno. Seu pontificado (461–468) foi marcado pela defesa da ortodoxia calcedoniana no Ocidente e pelo combate aos resquícios do eutiquianismo. Hilário é particularmente lembrado por sua defesa da primazia romana contra as investidas do patriarca de Constantinopla, e por suas intervenções nos concílios da Gália e da Espanha. Morreu em 29 de fevereiro de 468. É venerado como santo pela Igreja Católica (festa: 17 de novembro).',
    fontes:
      'Atas do Latrocínio (449, ed. Schwartz ACO III); Ep. de Leão I sobre Hilário (Ep. 43–50, ed. CCSL 100A); Liber Pontificalis (ed. Duchesne); Acta Concilii Chalcedonensis.',
  },
];
