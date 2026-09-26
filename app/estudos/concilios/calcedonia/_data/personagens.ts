// estudos/concilios/calcedonia/_data/personagens.ts

// ═══════════════════════════════════════════════════════
// ESTRUTURA DE TIPOS
// ═══════════════════════════════════════════════════════

export interface Personagem {
  nome: string;
  nomeGrego?: string;
  nomeLatim?: string;
  titulo: string;
  datas: string;
  origem: string;
  biografia: string;
  papelNoConcilio: string;
  legado: string;
  obras?: string[];
  curiosidade?: string;
}

// ═══════════════════════════════════════════════════════
// PERSONAGENS
// ═══════════════════════════════════════════════════════

export const personagens: Personagem[] = [
  // ─── 1. PAPA LEÃO I ───
  {
    nome: "Papa Leão I (Magno)",
    nomeLatim: "Leo Magnus",
    titulo: "Bispo de Roma e Papa (440–461)",
    datas: "c. 400 – 10 de novembro de 461",
    origem: "Toscana, Itália (provavelmente Volterra ou Roma)",
    biografia:
      "Leão nasceu por volta de 400 na Toscana, de família romana de " +
      "classe média. Antes de sua eleição papal em 29 de setembro de 440, " +
      "serviu como arquidiácono de Roma sob os papas Celestino I e " +
      "Sisto III, atuando como diplomata e administrador. Foi ele quem, " +
      "ainda como diácono, convenceu o general Aécio e o governador " +
      "Albino a reconciliarem-se na Gália (440). Como papa, Leão " +
      "transformou o papado em uma instituição de autoridade " +
      "universal: foi o primeiro bispo de Roma a reivindicar " +
      "explicitamente a primazia petrina em termos jurídicos " +
      "(o Papa como 'herdeiro de Pedro' e 'vigário de Cristo'), " +
      "a centralizar a disciplina eclesiástica do Ocidente e a " +
      "intervir decisivamente nos assuntos do Oriente. Seu " +
      "pontificado de 21 anos (440–461) é um dos mais longos " +
      "e importantes da antiguidade. Além de Calcedônia, Leão " +
      "é famoso por ter saído ao encontro de Átila, o Huno, " +
      "no rio Mincio (452) e convencido o 'Flagelo de Deus' " +
      "a recuar da Itália — um dos episódios mais icônicos " +
      "da história medieval.",
    papelNoConcilio:
      "Leão foi o arquiteto intelectual de Calcedônia sem jamais " +
      "pisar em Calcedônia. Seu Tomo (Ep. 28, junho de 449) — " +
      "uma exposição sistemática da cristologia das duas naturezas " +
      "em latim — foi lido na 2ª sessão e aclamado com o grito " +
      "'Pedro falou por Leão!'. Seus três legados (Paschasinus, " +
      "Lucêncio e Bonifácio) presidiram o concílio em seu nome. " +
      "Leão exigiu três condições: (1) leitura e aceitação do " +
      "Tomo; (2) julgamento de Dioscoro como acusado; (3) " +
      "presidência dos legados papais. As duas primeiras foram " +
      "atendidas; a terceira, parcialmente. Após o concílio, " +
      "Leão ratificou as decisões doutrinárias (Ep. 104, 452) " +
      "mas rejeitou veementemente o Cânon 28 (Ep. 105–106), " +
      "declarando que a primazia de Roma derivava de Pedro, " +
      "não de decisões políticas de concílios.",
    legado:
      "Leão I é um dos quatro 'Doutores da Igreja' originais do " +
      "Ocidente (com Ambrósio, Agostinho e Gregório Magno) e o " +
      "primeiro papa a receber o epíteto 'Magno' (o Grande). " +
      "Seu Tomo é considerado a maior contribuição do papado " +
      "à teologia dogmática e a base da cristologia ocidental. " +
      "Seus 96 sermões e 173 cartas sobreviventes formam um " +
      "dos corpus mais ricos da patrística latina. É venerado " +
      "como santo pela Igreja Católica (festa: 10 de novembro) " +
      "e pela Ortodoxa (18 de fevereiro).",
    obras: [
      "Tomo a Flavian (Ep. 28, 449) — o documento cristológico central",
      "Ep. 104–106 (452) — ratificação de Calcedônia e rejeição do Cânon 28",
      "96 Sermones (sobre o Natal, a Epifania, a Quaresma, a Paixão)",
      "Ep. 14 (a Flavian, sobre a primazia de Roma)",
      "Ep. 43–50 (protestos contra o Latrocínio de 449)",
    ],
    curiosidade:
      "Segundo a tradição (imortalizada por Rafael no afresco " +
      "'O Encontro de Leão e Átila' no Vaticano, 1514), quando " +
      "Leão saiu ao encontro de Átila em 452, os apóstolos " +
      "Pedro e Paulo apareceram no céu atrás do Papa, com " +
      "espadas desembainhadas, aterrorizando o rei huno. " +
      "Historicamente, Átila provavelmente recuou por " +
      "razões logísticas (fome, peste no acampamento) " +
      "e políticas (o imperador Marciano atacara os " +
      "hunos no Danúbio), mas a lenda de Leão como " +
      "'salvador de Roma' tornou-se um dos pilares " +
      "da mitologia papal.",
  },

  // ─── 2. MARCIANO ───
  {
    nome: "Imperador Marciano",
    nomeGrego: "Φλάβιος Μαρκιανός",
    nomeLatim: "Flavius Marcianus Augustus",
    titulo: "Imperador Romano do Oriente (450–457)",
    datas: "c. 392 – 27 de janeiro de 457",
    origem: "Trácia ou Ilíria (provavelmente Sérdica, atual Sofia)",
    biografia:
      "Marciano nasceu por volta de 392 em uma família modesta " +
      "da Trácia — seu pai era um soldado de baixa patente. " +
      "Seguiu a carreira militar desde jovem, servindo sob " +
      "os generais Ardabúrio e Áspar (pai e filho) na guerra " +
      "contra os persas sassânidas (421–422). Durante uma " +
      "missão na África (c. 431–435), foi capturado pelos " +
      "vândalos de Genserico. Segundo a tradição (provavelmente " +
      "lendária), Genserico teve um sonho no qual via Marciano " +
      "como futuro imperador e o libertou, exigindo apenas o " +
      "juramento de que nunca atacaria os vândalos — juramento " +
      "que Marciano honraria como imperador. De volta a " +
      "Constantinopla, tornou-se senador e tribuno, vivendo " +
      "na obscuridade até 450, quando a imperatriz Pulquéria " +
      "o escolheu como marido e co-imperador após a morte de " +
      "Teodósio II. O casamento foi puramente político: " +
      "Pulquéria manteve seu voto de virgindade perpétua.",
    papelNoConcilio:
      "Marciano foi o convocador e patrono imperial de Calcedônia. " +
      "Nomeou os 19 comissários imperiais que controlaram a " +
      "agenda do concílio, transferiu o local de Niceia para " +
      "Calcedônia (por razões de segurança contra Átila), e " +
      "compareceu pessoalmente à 6ª sessão solene (25 de " +
      "outubro) ao lado de Pulquéria. Seu discurso em latim " +
      "(traduzido para o grego) declarou que estava presente " +
      "'para confirmar a fé, não para dominar os bispos'. " +
      "Após o concílio, emitiu uma série de éditos (452) " +
      "impondo a Definição como lei imperial e perseguindo " +
      "os monofisitas.",
    legado:
      "Marciano é venerado como santo pela Igreja Ortodoxa " +
      "(festa: 17 de fevereiro) e pela Igreja Católica. " +
      "Seu reinado (450–457) é considerado um dos mais " +
      "prósperos do século V: restaurou as finanças " +
      "imperiais (deixou um superávit de 100.000 libras " +
      "de ouro ao morrer), manteve a paz com a Pérsia, " +
      "e ao recusar o tributo a Átila, demonstrou uma " +
      "firmeza que Teodósio II nunca tivera. A ironia: " +
      "Átila, furioso, voltou-se contra o Ocidente e " +
      "morreu em 453 sem jamais atacar o Oriente.",
    obras: [
      "Éditos imperiais de 452 (contra eutiquianos e apolinaristas)",
      "Cartas ao Papa Leão I (ACO II.4)",
      "Discurso na 6ª Sessão de Calcedônia (ACO II.1.2)",
    ],
    curiosidade:
      "A Coluna de Marciano (Dikilitaş) ainda existe em " +
      "Istambul, perto da Mesquita de Fatih. Erguida em " +
      "455 pelo prefeito da cidade, é um dos monumentos " +
      "mais antigos da era bizantina ainda de pé. A " +
      "inscrição em latim na base celebra Marciano " +
      "como 'príncipe verdadeiramente pio e augusto'.",
  },

  // ─── 3. PULQUÉRIA ───
  {
    nome: "Imperatriz Pulquéria",
    nomeGrego: "Αἰλία Πουλχερία",
    nomeLatim: "Aelia Pulcheria Augusta",
    titulo: "Augusta e Imperatriz do Oriente (414–453)",
    datas: "19 de janeiro de 399 – julho de 453",
    origem: "Constantinopla (Palácio Imperial)",
    biografia:
      "Pulquéria era filha do imperador Arcádio (395–408) e " +
      "neta de Teodósio I, o Grande. Aos 15 anos (414), " +
      "tornou-se Augusta e regente do Império em nome de " +
      "seu irmão mais novo, Teodósio II (então com 13 anos). " +
      "Durante a década de 410–420, foi ela quem efetivamente " +
      "governou o Oriente, promovendo a ortodoxia nicena, " +
      "construindo igrejas (a famosa Igreja de Santa Maria " +
      "das Blaquernas) e organizando a corte. Em 414, fez " +
      "um voto público de virgindade perpétua (parthenia), " +
      "transformando o palácio imperial em uma espécie de " +
      "mosteiro: ela e suas irmãs viviam em ascetismo, " +
      "jejuando, rezando e tecendo vestimentas litúrgicas. " +
      "Sua influência diminuiu na década de 430–440, quando " +
      "o eunuco Crisáfio e a esposa de Teodósio, Eudócia, " +
      "a marginalizaram. Mas com a morte de Teodósio (450), " +
      "Pulquéria retomou o poder com uma jogada magistral: " +
      "casou-se com o senador Marciano (mantendo o voto " +
      "de virgindade) e tornou-se co-imperatriz.",
    papelNoConcilio:
      "Pulquéria foi a verdadeira força motriz por trás de " +
      "Calcedônia. Foi ela quem insistiu na convocação do " +
      "concílio, quem pressionou Marciano a reverter a " +
      "política religiosa de Teodósio, e quem garantiu " +
      "que o Tomo de Leão fosse lido e aceito. Sua " +
      "presença na 6ª sessão (25 de outubro) foi um " +
      "evento sem precedentes: uma mulher no trono " +
      "imperial de um concílio ecumênico. Os bispos " +
      "aclamaram: 'Pulquéria é a nova Helena! Em " +
      "Pulquéria, a fé brilha! Pulquéria é a nova " +
      "Tecla!' (Tecla = discípula de São Paulo, " +
      "símbolo da virgindade cristã).",
    legado:
      "Pulquéria é venerada como santa pela Igreja Católica " +
      "e pela Ortodoxa (festa: 10 de setembro). Sua vida " +
      "é um dos exemplos mais notáveis de poder feminino " +
      "na Antiguidade tardia: uma mulher que governou o " +
      "Império Romano do Oriente por quase quatro décadas, " +
      "que moldou a cristologia ortodoxa e que foi " +
      "comparada a Helena, a mãe de Constantino. Sua " +
      "morte em julho de 453, dois anos após Calcedônia, " +
      "foi lamentada em todo o Oriente.",
    curiosidade:
      "Pulquéria construiu três grandes igrejas em " +
      "Constantinopla dedicadas à Theotokos (Mãe de " +
      "Deus): a Igreja das Blaquernas, a Igreja da " +
      "Hodegetria e a Igreja de Santa Maria da " +
      "Fonte (Zoodochos Pege). Todas se tornaram " +
      "os santuários marianos mais importantes do " +
      "mundo bizantino e destinos de peregrinação " +
      "até a queda de Constantinopla em 1453.",
  },

  // ─── 4. DIOSCORO ───
  {
    nome: "Dioscoro de Alexandria",
    nomeGrego: "Διόσκορος Ἀλεξανδρείας",
    titulo: "Patriarca de Alexandria (444–451, deposto)",
    datas: "c. 390 – setembro de 454",
    origem: "Alexandria, Egito",
    biografia:
      "Dioscoro nasceu por volta de 390 em Alexandria e " +
      "serviu como arquidiácono do patriarca Cirilo " +
      "(412–444), participando ativamente do Concílio " +
      "de Éfeso (431) e das negociações da Fórmula de " +
      "União (433). Com a morte de Cirilo em 444, " +
      "Dioscoro foi eleito patriarca com o apoio da " +
      "corte imperial (via Crisáfio) e do partido " +
      "monofisita de Alexandria. Ao contrário de " +
      "Cirilo, que era um teólogo sutil capaz de " +
      "equilibrar unidade e dualidade, Dioscoro era " +
      "um homem de temperamento violento e ambição " +
      "política desmedida, que interpretava a " +
      "teologia ciriliana de forma radicalizada: " +
      "para ele, 'mia physis' significava que a " +
      "humanidade de Cristo fora literalmente " +
      "absorvida pela divindade. Seu reinado de " +
      "7 anos (444–451) foi marcado pela perseguição " +
      "aos bispos ortodoxos do Egito, pela aliança " +
      "com Eutiques e pelo desastroso Latrocínio " +
      "de 449.",
    papelNoConcilio:
      "Dioscoro foi o grande antagonista de Calcedônia. " +
      "Chegou ao concílio como acusado (não como " +
      "presidente, como no Latrocínio), cercado por " +
      "seus 13 bispos egípcios e por monges armados. " +
      "Na 1ª sessão, foi obrigado a sentar-se no " +
      "banco dos acusados — uma inversão humilhante " +
      "de papéis. Recusou-se a comparecer à 3ª " +
      "sessão (alegando doença), mas foi julgado " +
      "in absentia e deposto por unanimidade. A " +
      "sentença, pronunciada por Paschasinus em " +
      "nome do Papa Leão e de São Pedro, o privou " +
      "'da dignidade episcopal e de toda função " +
      "sacerdotal'. Foi exilado para Gangra, na " +
      "Paflagônia (atual Çankırı, Turquia), onde " +
      "morreu em setembro de 454.",
    legado:
      "O legado de Dioscoro é radicalmente diferente " +
      "dependendo da perspectiva. Para os calcedonianos " +
      "(católicos e ortodoxos), é um herege e criminoso " +
      "que assassinou Flavian e tentou impor o " +
      "monofisismo pela violência. Para as Igrejas " +
      "Ortodoxas Orientais (copta, siríaca, armênia, " +
      "etíope), é um confessor e mártir que defendeu " +
      "a fé de Cirilo contra a 'heresia nestoriana' " +
      "de Calcedônia. A Igreja Copta o venera como " +
      "santo e o inclui em seu calendário litúrgico.",
    curiosidade:
      "Segundo as atas do Latrocínio de 449, Dioscoro " +
      "trouxe para Éfeso uma guarda pessoal de monges " +
      "egípcios liderados pelo arquimandrita Barsauma, " +
      "um sírio de força física lendária que supostamente " +
      "participou do espancamento de Flavian. Em " +
      "Calcedônia, quando os bispos gritaram 'Que " +
      "Barsauma seja queimado!', os comissários " +
      "imperiais tiveram que acalmar a assembleia.",
  },

  // ─── 5. EUTIQUES ───
  {
    nome: "Eutiques de Constantinopla",
    nomeGrego: "Εὐτυχής",
    titulo: "Arquimandrita do Mosteiro de Constantinopla",
    datas: "c. 378 – c. 454–456",
    origem: "Constantinopla",
    biografia:
      "Eutiques nasceu por volta de 378 e entrou na vida " +
      "monástica ainda jovem, tornando-se arquimandrita " +
      "(abade) de um grande mosteiro nos arredores de " +
      "Constantinopla com mais de 300 monges. Era um " +
      "homem idoso, piedoso e teologicamente limitado, " +
      "cuja influência derivava mais de suas conexões " +
      "políticas do que de sua erudição: seu afilhado " +
      "(ou filho adotivo) era o poderoso eunuco " +
      "Crisáfio, o camareiro-mor de Teodósio II, " +
      "o que lhe dava imunidade e acesso direto " +
      "ao imperador. Sua cristologia era simples " +
      "e radical: 'Confesso que nosso Senhor era " +
      "de duas naturezas antes da união, mas após " +
      "a união confesso uma só natureza' (ek dyo " +
      "physeōn pro tēs henōseōs, meta de tēn " +
      "henōsin mian physin). Sua metáfora favorita " +
      "era a da 'gota de mel no oceano': a " +
      "humanidade de Cristo, ao se unir à " +
      "divindade, foi absorvida e dissolvida.",
    papelNoConcilio:
      "Eutiques não esteve presente em Calcedônia — " +
      "estava exilado desde 449, quando fora " +
      "deposto por Flavian (e depois reabilitado " +
      "no Latrocínio). Porém, sua 'sombra' " +
      "dominou todo o concílio: a Definição de " +
      "Calcedônia foi redigida especificamente " +
      "para refutar sua fórmula. Os quatro " +
      "advérbios ('sem confusão, sem mudança, " +
      "sem divisão, sem separação') são, em " +
      "última análise, uma resposta a Eutiques. " +
      "O concílio reafirmou sua condenação e " +
      "o declarou herege junto com Nestório " +
      "e Apolinário.",
    legado:
      "O eutiquianismo (monofisismo radical) foi " +
      "condenado em Calcedônia, mas sobreviveu " +
      "em formas mais moderadas (miafisismo " +
      "ciriliano) nas Igrejas Orientais. A " +
      "distinção entre o 'eutiquianismo' " +
      "(heresia: a humanidade é absorvida) " +
      "e o 'miafisismo' (posição das Igrejas " +
      "Orientais: uma natureza composta, sem " +
      "absorção) é crucial para os diálogos " +
      "ecumênicos modernos.",
    curiosidade:
      "Quando interrogado pelo patriarca Flavian " +
      "em 448, Eutiques, então com ~70 anos, " +
      "confessou candidamente que nunca lera " +
      "os Padres da Igreja além de Cirilo e " +
      "Atanásio, e que sua teologia era " +
      "baseada inteiramente na fórmula " +
      "'mia physis' que encontrara nos " +
      "escritos de Cirilo — sem perceber " +
      "que Cirilo usava a expressão em " +
      "um sentido diferente.",
  },

  // ─── 6. FLAVIAN ───
  {
    nome: "Flavian de Constantinopla",
    nomeGrego: "Φλαβιανός",
    titulo: "Patriarca de Constantinopla (446–449) e Mártir",
    datas: "c. 400 – 11 de agosto de 449",
    origem: "Constantinopla",
    biografia:
      "Flavian era um clérigo de Constantinopla que " +
      "serviu como guardião dos vasos sagrados " +
      "(skeuophylax) da Grande Igreja (Hagia " +
      "Sophia) antes de ser eleito patriarca em " +
      "446, sucedendo a Proclo. Sua eleição foi " +
      "apoiada pela imperatriz Pulquéria mas " +
      "oposta por Crisáfio, que preferia um " +
      "patriarca mais maleável. Flavian era um " +
      "homem de fé ortodoxa e caráter firme, " +
      "mas politicamente isolado: não tinha " +
      "a proteção da corte (Crisáfio era seu " +
      "inimigo) e não tinha a força militar " +
      "dos monges (como Dioscoro). Em 448, " +
      "convocou o Sínodo Permanente que " +
      "condenou Eutiques por heresia — um " +
      "ato de coragem que lhe custaria a " +
      "vida. No Latrocínio de 449, Flavian " +
      "foi deposto, espancado por monges " +
      "liderados por Barsauma e arrastado " +
      "para fora da igreja. Exilado para " +
      "a Frígia, morreu três dias depois " +
      "em Hipaepa, em 11 de agosto de 449, " +
      "em consequência dos ferimentos.",
    papelNoConcilio:
      "Flavian estava morto quando Calcedônia se " +
      "reuniu, mas sua memória dominou o concílio " +
      "como a de um mártir. A reabilitação de " +
      "Flavian foi o primeiro ato simbólico do " +
      "concílio: seus restos mortais, transladados " +
      "para Constantinopla por ordem de Pulquéria " +
      "em 450, foram recebidos com honras de " +
      "mártir e sepultados na Igreja dos Santos " +
      "Apóstolos (ao lado dos imperadores). Na " +
      "1ª sessão de Calcedônia, o testemunho " +
      "do diácono de Flavian sobre seus últimos " +
      "momentos provocou lágrimas e gritos de " +
      "fúria contra Dioscoro. A condenação de " +
      "Dioscoro foi, em grande parte, um ato " +
      "de justiça póstuma para Flavian.",
    legado:
      "Flavian é venerado como santo e mártir pela " +
      "Igreja Católica (festa: 18 de fevereiro) " +
      "e pela Ortodoxa (16 de fevereiro). Sua " +
      "carta ao Papa Leão (a 'Carta de Flavian', " +
      "448) provocou a resposta de Leão: o " +
      "célebre Tomo. Sem o martírio de " +
      "Flavian, o Tomo de Leão não teria " +
      "sido escrito, e Calcedônia não teria " +
      "tido a dimensão moral que teve.",
    obras: [
      "Carta ao Papa Leão I (448) — o documento que provocou o Tomo",
      "Atas do Sínodo de Constantinopla (448) — condenação de Eutiques",
    ],
    curiosidade:
      "Segundo a tradição, as últimas palavras de " +
      "Flavian, enquanto era espancado no Latrocínio, " +
      "foram: 'Senhor Jesus, recebei meu espírito! " +
      "Perdoai-lhes, porque não sabem o que fazem!' " +
      "— um eco deliberado das palavras de Cristo " +
      "na cruz (Lc 23,34). A comparação com o " +
      "martírio de Cristo não era acidental: " +
      "os calcedonianos queriam apresentar " +
      "Flavian como o 'Cristo dos concílios', " +
      "traído e morto pelos hereges.",
  },

  // ─── 7. ANATÓLIO ───
  {
    nome: "Anatólio de Constantinopla",
    nomeGrego: "Ἀνατόλιος",
    titulo: "Patriarca de Constantinopla (449–458)",
    datas: "c. 400 – 3 de julho de 458",
    origem: "Alexandria, Egito (de origem, mas carreira em Constantinopla)",
    biografia:
      "Anatólio era um clérigo de origem alexandrina que " +
      "serviu como apocrisiário (embaixador eclesiástico) " +
      "de Dioscoro de Alexandria em Constantinopla. " +
      "Após o Latrocínio de 449 e a deposição de " +
      "Flavian, Dioscoro e Crisáfio nomearam " +
      "Anatólio como novo patriarca de " +
      "Constantinopla — uma escolha que " +
      "garantia a lealdade da sé imperial " +
      "ao partido monofisita. Porém, com a " +
      "morte de Teodósio II e a ascensão de " +
      "Marciano e Pulquéria (450), Anatólio " +
      "demonstrou sua flexibilidade política: " +
      "abandonou rapidamente a causa de " +
      "Dioscoro, aceitou o Tomo de Leão e " +
      "alinhou-se com a nova ordem " +
      "calcedoniana. Sua sobrevivência " +
      "política é notável: foi o único " +
      "patriarca nomeado por Dioscoro " +
      "que não foi deposto em Calcedônia.",
    papelNoConcilio:
      "Anatólio co-presidiu o concílio ao lado " +
      "dos legados papais, mas com autoridade " +
      "inferior. Seu papel foi ambíguo: como " +
      "ex-protegido de Dioscoro, precisava " +
      "demonstrar constantemente sua " +
      "ortodoxia; como patriarca de " +
      "Constantinopla, era o principal " +
      "beneficiário do Cânon 28, que " +
      "elevou sua sé a 'segunda Roma'. " +
      "Os legados papais desconfiavam " +
      "dele, e Leão I o repreendeu " +
      "duramente em cartas posteriores " +
      "por sua ambição jurisdicional.",
    legado:
      "O legado de Anatólio é inseparável do " +
      "Cânon 28 de Calcedônia, que elevou " +
      "Constantinopla a uma posição de " +
      "'primazia de honra' igual à de " +
      "Roma. Embora rejeitado pelo Papa " +
      "Leão, o Cânon 28 tornou-se a " +
      "base da reivindicação do " +
      "Patriarcado Ecumênico de " +
      "Constantinopla até hoje.",
    curiosidade:
      "Anatólio morreu em 458 durante um " +
      "terremoto que destruiu parte de " +
      "Constantinopla. Segundo a " +
      "tradição, o terremoto ocorreu " +
      "enquanto ele celebrava a " +
      "liturgia na Hagia Sophia, " +
      "e uma viga caiu sobre sua " +
      "cabeça — um fim dramático " +
      "para um patriarca cuja " +
      "carreira fora marcada " +
      "pela sobrevivência.",
  },

  // ─── 8. MÁXIMO DE ANTIOQUIA ───
  {
    nome: "Máximo de Antioquia",
    nomeGrego: "Μάξιμος Ἀντιοχείας",
    titulo: "Patriarca de Antioquia (449–455)",
    datas: "c. 400 – c. 455",
    origem: "Antioquia, Síria",
    biografia:
      "Máximo foi nomeado patriarca de Antioquia em " +
      "449 por Dioscoro, após a deposição de Domno II " +
      "no Latrocínio de Éfeso. Como Anatólio de " +
      "Constantinopla, Máximo era um produto " +
      "da política monofisita de Dioscoro e " +
      "Crisáfio. Porém, também como Anatólio, " +
      "Máximo demonstrou pragmatismo político: " +
      "em Calcedônia, aceitou a Definição e " +
      "anatematizou Dioscoro, garantindo sua " +
      "sobrevivência como patriarca. Sua " +
      "posição era delicada: Antioquia era " +
      "a terra natal da escola teológica " +
      "antioquena (Diodoro, Teodoro, " +
      "Nestório), e muitos de seus " +
      "sufragâneos simpatizavam com " +
      "o diofisismo (duas naturezas).",
    papelNoConcilio:
      "Máximo participou ativamente das sessões " +
      "doutrinárias e aceitou o Tomo de Leão " +
      "sem resistência significativa. Seu " +
      "momento mais importante foi na " +
      "Sessão 7, quando cedeu a " +
      "jurisdição sobre as três " +
      "províncias da Palestina a " +
      "Juvenal de Jerusalém em " +
      "troca da confirmação de " +
      "sua autoridade sobre a " +
      "Fenícia e a Arábia. " +
      "Este acordo reorganizou " +
      "o mapa eclesiástico do " +
      "Oriente e completou a " +
      "Pentarquia (Roma, " +
      "Constantinopla, " +
      "Alexandria, Antioquia, " +
      "Jerusalém).",
    legado:
      "Máximo é uma figura menor na história " +
      "da teologia, mas seu acordo com " +
      "Juvenal na Sessão 7 teve " +
      "consequências duradouras: a " +
      "elevação de Jerusalém a " +
      "patriarcado independente " +
      "permanece até hoje como " +
      "um dos cinco patriarcados " +
      "históricos da cristandade.",
    curiosidade:
      "Máximo foi deposto em 455 pelo " +
      "imperador Marciano por razões " +
      "obscuras (provavelmente " +
      "suspeitas de simpatia " +
      "monofisita tardia) e " +
      "substituído por Basílio " +
      "de Antioquia. Morreu " +
      "pouco depois, no " +
      "esquecimento.",
  },

  // ─── 9. JUVENAL ───
  {
    nome: "Juvenal de Jerusalém",
    nomeGrego: "Ἰουβενάλιος",
    titulo: "Bispo (depois Patriarca) de Jerusalém (422–458)",
    datas: "c. 380 – 2 de julho de 458",
    origem: "Jerusalém, Palestina",
    biografia:
      "Juvenal é o sobrevivente mais astuto e controverso " +
      "da crise cristológica do século V. Bispo de " +
      "Jerusalém desde 422, era um político " +
      "eclesiástico de primeira ordem, capaz " +
      "de trocar de lado com habilidade " +
      "extraordinária. No Concílio de " +
      "Éfeso (431), apoiou Cirilo contra " +
      "Nestório. No Latrocínio de 449, " +
      "foi co-presidente ao lado de " +
      "Dioscoro e votou pela deposição " +
      "de Flavian. Em Calcedônia (451), " +
      "anatematizou Dioscoro e aceitou " +
      "o Tomo de Leão, trocando de lado " +
      "mais uma vez. Sua recompensa foi " +
      "a elevação de Jerusalém a " +
      "patriarcado independente " +
      "(Sessão 7).",
    papelNoConcilio:
      "Juvenal participou de todas as sessões " +
      "e foi um dos bispos mais ativos. " +
      "Seu momento decisivo foi na " +
      "Sessão 7, quando negociou com " +
      "Máximo de Antioquia a elevação " +
      "de Jerusalém a patriarcado, " +
      "recebendo jurisdição sobre " +
      "as três províncias da " +
      "Palestina. Os legados papais " +
      "protestaram (Jerusalém era " +
      "uma sé sufragânea de " +
      "Cesareia, não um " +
      "patriarcado), mas os " +
      "comissários imperiais " +
      "ratificaram o acordo.",
    legado:
      "O legado de Juvenal é a criação do " +
      "Patriarcado de Jerusalém, que " +
      "permanece até hoje como um " +
      "dos cinco patriarcados " +
      "históricos. Porém, sua " +
      "reputação pessoal é " +
      "péssima: os monofisitas " +
      "o consideram um traidor " +
      "(quando retornou a " +
      "Jerusalém após " +
      "Calcedônia, monges " +
      "monofisitas o " +
      "expulsaram da " +
      "cidade e elegeram " +
      "um 'anti-patriarca', " +
      "Teodósio, que " +
      "governou por " +
      "20 meses).",
    curiosidade:
      "Quando Juvenal retornou a Jerusalém " +
      "em 452, encontrou a cidade em " +
      "revolta. Monges monofisitas " +
      "liderados por Teodósio " +
      "(um monge egípcio) " +
      "tomaram a cidade, " +
      "expulsaram Juvenal " +
      "e massacraram " +
      "clérigos " +
      "calcedonianos. " +
      "Juvenal só " +
      "retornou em " +
      "453, com " +
      "apoio " +
      "militar imperial.",
  },

  // ─── 10. PASCHASINUS ───
  {
    nome: "Paschasinus de Lilibeu",
    nomeLatim: "Paschasinus Lilybaetanus",
    titulo: "Bispo de Lilibeu (Sicília) e Legado Papal",
    datas: "fl. 440–455",
    origem: "Lilibeu (atual Marsala, Sicília)",
    biografia:
      "Paschasinus era bispo de Lilibeu, uma pequena " +
      "diocese na costa ocidental da Sicília. Quase " +
      "nada se sabe sobre sua vida antes de 451, " +
      "exceto que era fluente em grego e latim " +
      "(a Sicília era bilíngue) e que gozava " +
      "da confiança do Papa Leão I, que o " +
      "escolheu como seu representante " +
      "principal em Calcedônia. Sua " +
      "escolha pode parecer surpreendente " +
      "(um bispo de uma diocese obscura " +
      "presidindo o maior concílio da " +
      "antiguidade), mas reflete a " +
      "escassez de bispos italianos " +
      "disponíveis (a Itália estava " +
      "sob ameaça de Átila) e a " +
      "necessidade de um legado " +
      "que falasse grego fluentemente.",
    papelNoConcilio:
      "Paschasinus presidiu todas as sessões " +
      "solenes de Calcedônia em nome do " +
      "Papa Leão. Foi ele quem abriu " +
      "a 1ª sessão, quem pronunciou " +
      "a sentença de deposição de " +
      "Dioscoro na 3ª sessão " +
      "(invocando a autoridade " +
      "de Leão e de São Pedro), " +
      "e quem liderou a " +
      "aprovação do Tomo na " +
      "2ª sessão. Seu papel " +
      "foi crucial mas " +
      "limitado: os " +
      "comissários " +
      "imperiais " +
      "frequentemente " +
      "o contornavam " +
      "e controlavam " +
      "a agenda.",
    legado:
      "Paschasinus é uma figura quase " +
      "esquecida na história da " +
      "Igreja, mas seu papel em " +
      "Calcedônia foi histórico: " +
      "foi a primeira vez que " +
      "um legado papal presidiu " +
      "um concílio ecumênico " +
      "no Oriente, estabelecendo " +
      "o precedente da " +
      "presidência romana " +
      "que seria invocado " +
      "em todos os " +
      "concílios " +
      "posteriores.",
    curiosidade:
      "Antes de Calcedônia, Paschasinus " +
      "havia escrito a Leão sobre " +
      "a controvérsia da data " +
      "da Páscoa (Ep. 9, 444), " +
      "demonstrando seus " +
      "conhecimentos de " +
      "astronomia e " +
      "cálculo " +
      "pascal — " +
      "uma " +
      "habilidade " +
      "rara " +
      "que pode " +
      "ter " +
      "contribuído " +
      "para sua " +
      "escolha " +
      "como " +
      "legado.",
  },

  // ─── 11. TEODORETO ───
  {
    nome: "Teodoreto de Ciro",
    nomeGrego: "Θεοδώρητος Κύρου",
    titulo: "Bispo de Ciro (Síria) e Teólogo",
    datas: "c. 393 – c. 457–466",
    origem: "Antioquia, Síria",
    biografia:
      "Teodoreto nasceu em Antioquia por volta de 393, " +
      "de família cristã abastada. Educado nos " +
      "mosteiros da Síria e na escola teológica " +
      "antioquena (herdeira de Diodoro de Tarso " +
      "e Teodoro de Mopsuéstia), tornou-se " +
      "bispo de Ciro (uma pequena diocese " +
      "na Síria do norte) em 423. Foi um " +
      "dos teólogos mais prolíficos e " +
      "brilhantes do século V: suas " +
      "obras incluem comentários " +
      "bíblicos, tratados teológicos, " +
      "histórias eclesiásticas e " +
      "hagiografias. Na controvérsia " +
      "cristológica, Teodoreto " +
      "defendeu a tradição " +
      "antioquena (ênfase na " +
      "dualidade de naturezas) " +
      "e escreveu contra " +
      "Cirilo de Alexandria " +
      "(seu Eranistes é um " +
      "diálogo anti-ciriliano). " +
      "Esta posição lhe valeu " +
      "a acusação de " +
      "'nestorianismo' e a " +
      "deposição no " +
      "Latrocínio de 449.",
    papelNoConcilio:
      "Teodoreto foi reabilitado na Sessão 8 " +
      "de Calcedônia, mas a um custo: " +
      "o concílio exigiu que anatematizasse " +
      "publicamente Nestório. Após alguma " +
      "hesitação (Teodoreto fora amigo " +
      "pessoal de Nestório décadas " +
      "antes e considerava sua " +
      "condenação em Éfeso " +
      "injusta), ele declarou: " +
      "'Anátema a Nestório e a " +
      "quem não diz que a Santa " +
      "Virgem é Theotokos!'. " +
      "A aclamação foi " +
      "imediata: 'Teodoreto " +
      "é ortodoxo!'. Sua " +
      "reabilitação foi " +
      "essencial para " +
      "demonstrar que " +
      "Calcedônia não " +
      "era 'nestoriana'.",
    legado:
      "Teodoreto é um dos Padres da Igreja mais " +
      "importantes da tradição antioquena. " +
      "Suas obras (especialmente o Eranistes, " +
      "a História Eclesiástica e a História " +
      "dos Monges da Síria) são fontes " +
      "primárias indispensáveis para o " +
      "século V. Porém, seu legado é " +
      "controverso: no II Constantinopla " +
      "(553), seus escritos contra " +
      "Cirilo (os 'Três Capítulos') " +
      "foram condenados postumamente, " +
      "reabrindo a ferida de " +
      "Calcedônia.",
    obras: [
      "Eranistes (447) — diálogo teológico contra o monofisismo",
      "Historia Ecclesiastica (449) — história da Igreja de 323 a 428",
      "Historia Religiosa (444) — vidas de monges sírios",
      "Comentários sobre Isaías, Jeremias, Ezequiel, Daniel, os Salmos",
      "Haereticarum Fabularum Compendium — compêndio de heresias",
    ],
    curiosidade:
      "Teodoreto era um homem de cultura " +
      "extraordinária: além de teólogo, " +
      "era historiador, exegeta, " +
      "hagiógrafo e polemista. " +
      "Sua biblioteca pessoal " +
      "em Ciro era uma das " +
      "maiores da Síria. " +
      "Após sua reabilitação " +
      "em Calcedônia, " +
      "retornou a Ciro " +
      "e viveu seus " +
      "últimos anos " +
      "em relativa " +
      "paz, " +
      "escrevendo " +
      "comentários " +
      "bíblicos.",
  },

  // ─── 12. IBAS ───
  {
    nome: "Ibas de Edessa",
    nomeGrego: "Ἰβᾶς Ἐδέσσης",
    nomeLatim: "Ibas Edessenus",
    titulo: "Bispo de Edessa (435–457, com interrupção)",
    datas: "c. 390 – 28 de outubro de 457",
    origem: "Edessa (atual Şanlıurfa, Turquia)",
    biografia:
      "Ibas nasceu por volta de 390 em Edessa, o " +
      "centro da cultura siríaca e da escola " +
      "teológica da Pérsia. Foi professor na " +
      "famosa Escola de Edessa e tradutor " +
      "das obras de Teodoro de Mopsuéstia " +
      "do grego para o siríaco — uma " +
      "atividade que lhe valeu a " +
      "acusação de 'nestorianismo'. " +
      "Em 435, tornou-se bispo de " +
      "Edessa, sucedendo a Rábula " +
      "(um anti-nestoriano ferrenho). " +
      "Sua 'Carta a Maris' (c. 433), " +
      "na qual criticava Cirilo de " +
      "Alexandria e elogiava " +
      "Teodoro de Mopsuéstia, " +
      "tornou-se um dos " +
      "documentos mais " +
      "controversos da " +
      "cristologia " +
      "antiga e um " +
      "dos 'Três " +
      "Capítulos' " +
      "condenados " +
      "em 553.",
    papelNoConcilio:
      "Ibas foi reabilitado na Sessão 10 " +
      "de Calcedônia, juntamente com " +
      "Teodoreto. Como Teodoreto, " +
      "foi exigido que anatematizasse " +
      "Nestório publicamente. Ibas " +
      "fez a declaração exigida e " +
      "foi restaurado à sua sé. " +
      "Sua reabilitação foi " +
      "ainda mais controversa " +
      "que a de Teodoreto, " +
      "pois a Carta a Maris " +
      "continha críticas " +
      "diretas a Cirilo — " +
      "o ídolo dos " +
      "monofisitas.",
    legado:
      "O legado de Ibas é inseparável da " +
      "controvérsia dos 'Três Capítulos'. " +
      "Sua Carta a Maris, reabilitada " +
      "em Calcedônia (451), foi " +
      "condenada no II Constantinopla " +
      "(553) por Justiniano, " +
      "reabrindo a ferida do " +
      "cisma. A Escola de " +
      "Edessa, associada " +
      "a Ibas, foi " +
      "fechada pelo " +
      "imperador " +
      "Zenão em " +
      "489, e " +
      "seus " +
      "professores " +
      "fugiram " +
      "para a " +
      "Pérsia, " +
      "fortalecendo " +
      "a Igreja " +
      "do Oriente " +
      "('nestoriana').",
    obras: [
      "Carta a Maris (c. 433) — um dos 'Três Capítulos'",
      "Traduções siríacas de Teodoro de Mopsuéstia",
    ],
    curiosidade:
      "Ibas morreu em 28 de outubro de 457, " +
      "pouco mais de um ano após o " +
      "linchamento do patriarca " +
      "calcedoniano Proterio de " +
      "Alexandria pela multidão " +
      "monofisita. Sua morte " +
      "coincidiu com o " +
      "início da " +
      "rejeição " +
      "aberta " +
      "de " +
      "Calcedônia " +
      "no Egito.",
  },

  // ─── 13. NESTÓRIO (menção) ───
  {
    nome: "Nestório (no exílio)",
    nomeGrego: "Νεστόριος",
    titulo: "Ex-Patriarca de Constantinopla (428–431, deposto)",
    datas: "c. 386 – c. 450–451",
    origem: "Germânica (atual Kahramanmaraş, Turquia)",
    biografia:
      "Nestório nasceu por volta de 386 na Germânica " +
      "(Síria) e foi educado na escola teológica " +
      "de Antioquia sob Teodoro de Mopsuéstia. " +
      "Monge e pregador brilhante, foi nomeado " +
      "patriarca de Constantinopla em 428 pelo " +
      "imperador Teodósio II. Sua pregação " +
      "contra o título Theotokos (Mãe de " +
      "Deus) — preferindo Christotokos " +
      "(Mãe de Cristo) — desencadeou " +
      "a controvérsia que levou ao " +
      "Concílio de Éfeso (431), " +
      "onde foi deposto por " +
      "Cirilo de Alexandria. " +
      "Exilado primeiro em " +
      "Antioquia e depois " +
      "no Grande Oásis " +
      "do Egito (435), " +
      "Nestório viveu " +
      "seus últimos " +
      "anos no " +
      "deserto, " +
      "escrevendo " +
      "sua " +
      "apologia " +
      "(o 'Livro " +
      "de " +
      "Heráclides'). " +
      "Morreu " +
      "por " +
      "volta " +
      "de " +
      "450–451, " +
      "provavelmente " +
      "antes ou " +
      "durante " +
      "Calcedônia.",
    papelNoConcilio:
      "Nestório não esteve presente em Calcedônia " +
      "(estava no exílio no deserto egípcio, " +
      "provavelmente já morto), mas sua " +
      "'sombra' dominou o concílio tanto " +
      "quanto a de Eutiques. A Definição " +
      "de Calcedônia foi cuidadosamente " +
      "redigida para evitar qualquer " +
      "linguagem que pudesse ser " +
      "interpretada como nestoriana: " +
      "os advérbios 'sem divisão' " +
      "(adiairetōs) e 'sem " +
      "separação' (achōristōs) " +
      "são respostas diretas " +
      "a Nestório. A " +
      "reabilitação de " +
      "Teodoreto e Ibas " +
      "foi condicionada " +
      "ao anátema " +
      "público de " +
      "Nestório.",
    legado:
      "O nestorianismo foi condenado em " +
      "Éfeso (431) e reafirmado em " +
      "Calcedônia (451). Porém, " +
      "a Igreja do Oriente " +
      "(Pérsia/Assíria) " +
      "nunca aceitou " +
      "nenhum dos dois " +
      "concílios e " +
      "manteve sua " +
      "tradição " +
      "'nestoriana' " +
      "(dyo " +
      "hypostaseis). " +
      "O diálogo " +
      "ecumênico " +
      "moderno " +
      "(Declaração " +
      "de 1994 " +
      "entre " +
      "João " +
      "Paulo II " +
      "e Mar " +
      "Dinkha IV) " +
      "reconheceu " +
      "que a " +
      "divergência " +
      "é " +
      "essencialmente " +
      "terminológica.",
    obras: [
      "O Livro de Heráclides de Damasco (c. 450) — apologia (descoberto em 1895)",
      "Cartas e sermões (fragmentos preservados em siríaco e armênio)",
    ],
    curiosidade:
      "O 'Livro de Heráclides' de Nestório, " +
      "descoberto em 1895 em uma " +
      "tradução siríaca no " +
      "mosteiro de Konat " +
      "(Turquia), revela " +
      "que Nestório " +
      "considerava " +
      "a Definição " +
      "de " +
      "Calcedônia " +
      "uma " +
      "vindicação " +
      "de sua " +
      "própria " +
      "teologia — " +
      "uma ironia " +
      "suprema " +
      "que os " +
      "monofisitas " +
      "exploraram " +
      "para acusar " +
      "os " +
      "calcedonianos " +
      "de " +
      "'nestorianismo " +
      "disfarçado'.",
  },
];