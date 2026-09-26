// app/estudos/concilios/constantinopla-2/_data/personagens.ts

export interface Personagem {
  nome: string;
  nomeGrego?: string;
  titulo: string;
  datas: string;
  origem: string;
  biografia: string;
  papelNoConcilio: string;
  legado: string;
  obras?: string[];
  curiosidade?: string;
}

export const personagens: Personagem[] = [
  {
    nome: "Justiniano I (O Grande)",
    nomeGrego: "Φλάβιος Πέτρος Σαββάτιος Ἰουστινιανός (Ioustinianos I)",
    titulo: "Imperador Romano do Oriente (527–565)",
    datas: "c. 482 – 565 d.C.",
    origem: "Tauresium, Dardânia (Ilírico Romano)",
    biografia:
      "Um dos mais extraordinários e ambiciosos imperadores de Roma e Bizâncio. Conquistou a Itália, Norte da África e o sul da Hispânia (Renovatio Imperii), codificou o direito civil ocidental (Corpus Iuris Civilis) e construiu a Basílica de Santa Sofia. Homem de profunda erudição teológica, governava a Igreja como seu supremo administrador terreno (cesaropapismo teocrático).",
    papelNoConcilio:
      "Convocou e financiou o concílio, redigiu a agenda doutrinária através de seus editos imperiais de 544 e 551, determinou os Três Capítulos a serem condenados, ordenou a prisão e humilhação do Papa Vigílio e impôs a recepção dos decretos em todo o território imperial por meio da força coercitiva da lei militar.",
    legado:
      "Estabeleceu a hermenêutica 'neocalcedoniana', demonstrando que a cristologia de Calcedônia é indissociável da herança dogmática de São Cirilo de Alexandria.",
    obras: [
      "Corpus Iuris Civilis (Codex, Digesta, Institutiones, Novellae)",
      "Edito contra os Três Capítulos (544)",
      "Confissão da Fé Reta contra os Três Capítulos (551)",
      "Tratado contra Monofisitas (Contra Monophysitas)",
      "Hino litúrgico 'O Monogenis' (O Filho Unigênito)",
    ],
    curiosidade:
      "Justiniano passava noites inteiras em claro no palácio imperial lendo obras de Cirilo, Basílio e Gregório Nazianzeno e escrevendo tratados teológicos com seus secretários.",
  },
  {
    nome: "Teodora",
    nomeGrego: "Θεοδώρα (Theodora)",
    titulo: "Imperatriz Augusta do Império Romano do Oriente",
    datas: "c. 500 – 548 d.C.",
    origem: "Constantinopla ou Chipre / Síria",
    biografia:
      "Esposa e co-governante de Justiniano I. De origem humilde no hipódromo, tornou-se uma das estadistas mais brilhantes do mundo antigo. Salvou o trono durante a Revolta de Nica (532). Protetora fervorosa dos cristãos miáfisitas perseguidos no Egito e na Síria, transformou o Palácio de Hormisdas em refúgio para bispos e monges não-calcedonianos.",
    papelNoConcilio:
      "Embora tenha morrido cinco anos antes da abertura do concílio (548), foi a arquiteta geopolítica da política de conciliação com os miáfisitas. Articulou a elevação do Papa Vigílio ao trono romano na expectativa de que ele revogasse o Tomo de Leão e protegeu Tiago Baradeu em sua missão clandestina de ordenações.",
    legado:
      "Sua influência perpetuou a corrente teológica pró-cirilina na corte imperial, sendo venerada como santa pela Igreja Ortodoxa e pelas Igrejas Ortodoxas Orientais.",
    curiosidade:
      "Abrigou no subsolo de seu palácio, por doze anos em segredo absoluto, o patriarca miáfisita deposto Teodósio de Alexandria.",
  },
  {
    nome: "Papa Vigílio",
    nomeGrego: "Βιγίλιος (Vigilios)",
    titulo: "Bispo de Roma / Papa da Igreja Católica (537–555)",
    datas: "c. 500 – 555 d.C.",
    origem: "Roma (Nobreza senatorial romana)",
    biografia:
      "Membro da aristocracia romana, foi diácono e apocrisiário (núncio) em Constantinopla. Foi entronizado papa com o apoio militar de Belisário após a deposição violenta do Papa Silvério. Sequestrado em Roma pelas tropas de Justiniano em 545 durante a guerra contra os ostrogodos, viveu oito anos como refém político e eclesiástico em Constantinopla.",
    papelNoConcilio:
      "Protagonista da mais grave crise papal da antiguidade: oscilou entre a condenação dos Três Capítulos (Iudicatum de 548) e sua defesa intransigente (Constitutum I de 14 de maio de 553). Recusou-se a participar das sessões conciliares, foi expurgado dos dípticos pelos bispos e, após meses de isolamento e doença, capitulou no exílio publicando a carta de revogação e o Constitutum II (fevereiro de 554).",
    legado:
      "Simboliza o conflito dramático entre a primazia apostólica de Roma e o absolutismo imperial bizantino, desencadeando o longo Cisma Tricapitulino no Ocidente latino.",
    obras: [
      "Iudicatum ad Menam (548)",
      "Constitutum I (14 de maio de 553)",
      "Epistula ad Eutychium (8 de dezembro de 553)",
      "Constitutum II (23 de fevereiro de 554)",
    ],
    curiosidade:
      "Ao fugir da polícia secreta de Justiniano na Igreja de São Pedro de Hormisdas, Vigílio agarrou-se aos pilares do altar com tanta força que o baldaquino de mármore desabou quase esmagando o pontífice.",
  },
  {
    nome: "Santo Eutíquio de Constantinopla",
    nomeGrego: "Εὐτύχιος Κωνσταντινουπόλεως (Eutychios)",
    titulo: "Patriarca Ecumênico de Constantinopla e Presidente do Concílio",
    datas: "c. 512 – 582 d.C.",
    origem: "Frígia (Ásia Menor)",
    biografia:
      "Monge e arquimandrita em Amásia, ganhou notoriedade teológica ao justificar biblicamente a condenação póstuma de hereges através do exemplo do rei Josias (que profanou os ossos dos falsos profetas em 2 Reis 23). Impressionou Justiniano e foi elevado a Patriarca de Constantinopla em agosto de 552 após a morte de Menas.",
    papelNoConcilio:
      "Presidente oficial de todas as oito sessões do concílio de 553. Conduziu o processo inquisitorial contra as obras de Teodoro de Mopsuéstia, Teodoreto e Ibas, elaborou os 14 anátemas e assinou a exclusão litúrgica do Papa Vigílio.",
    legado:
      "Santo e confessor tanto na Igreja Ortodoxa quanto na Igreja Católica; mais tarde foi exilado pelo próprio Justiniano (565) por recusar a heresia do aftartodocetismo imperial.",
    obras: [
      "Tratado sobre a Páscoa e a Eucaristia",
      "Cartas Sinodais a Vigílio (553)",
    ],
    curiosidade:
      "Nos seus últimos dias de vida, teve uma célebre controvérsia com o futuro Papa Gregório Magno (então núncio em Bizâncio) sobre a corporeidade palpável da ressurreição da carne.",
  },
  {
    nome: "Teodoro Ascidas",
    nomeGrego: "Θεόδωρος Ἀσκιδᾶς (Theodoros Askidas)",
    titulo: "Arcebispo Metropolita de Cesareia da Capadócia",
    datas: "Falecido em 558 d.C.",
    origem: "Palestina (Monastério da Nova Laura)",
    biografia:
      "Monge erudito e líder da facção origenista nos monastérios da Judeia. Foi levado a Constantinopla por Justiniano em 536 e logo se tornou o mais influente conselheiro eclesiástico da corte bizantina, sendo nomeado bispo de Cesareia da Capadócia.",
    papelNoConcilio:
      "Foi o mentor político da Controvérsia dos Três Capítulos. Para desviar a fúria imperial que condenava Orígenes em 543, convenceu Justiniano de que anatemizar Teodoro de Mopsuéstia uniria os cristãos miáfisitas ao Império. Atuou como promotor eclesiástico implacável durante o sínodo de 553.",
    legado:
      "Figura controversa que dominou a política eclesiástica bizantina por duas décadas, combinando habilidade retórica, conhecimento patrístico e manobras palacianas.",
  },
  {
    nome: "Facundo de Hermiane",
    nomeGrego: "Φακοῦνδος Ἑρμιάνης (latim: Facundus Hermianensis)",
    titulo: "Bispo de Hermiane (África Bizacena) e Defensor dos Três Capítulos",
    datas: "c. 500 – c. 570 d.C.",
    origem: "Província Bizacena (atual Tunísia)",
    biografia:
      "O teólogo latino mais brilhante do século VI. Integrou a delegação episcopal africana em Constantinopla entre 546 e 550 para resistir às pressões imperiais sobre o Papa Vigílio.",
    papelNoConcilio:
      "Líder ideológico absoluto da resistência ocidental. Escreveu o monumental 'Pro Defensione Trium Capitulorum' (Em Defesa dos Três Capítulos) em 12 livros, alertando que condenar homens e escritos recebidos e absolvidos em Calcedônia anulava a autoridade de todos os concílios ecumênicos.",
    legado:
      "Suas obras são as fontes primárias mais profundas e articuladas da perspectiva latina e ocidental sobre a controvérsia do século VI.",
    obras: [
      "Pro Defensione Trium Capitulorum Libri XII (548)",
      "Contra Mocianum Scholasticum (550)",
      "Epistula in Defensione Trium Capitulorum (568)",
    ],
  },
  {
    nome: "Pelágio (Diácono e Futuro Papa Pelágio I)",
    nomeGrego: "Πελάγιος (Pelagios)",
    titulo: "Diácono Romano, Apocrisiário em Constantinopla e Papa (556–561)",
    datas: "c. 505 – 561 d.C.",
    origem: "Roma (Nobre família aristocrática)",
    biografia:
      "Diácono de grande fortuna e talento diplomático, foi representante da Sé Romana na corte bizantina. Alimentou a população de Roma durante o cerco de Tótila em 546. Inicialmente, foi o mais radical opositor da condenação dos Três Capítulos, inspirador do Constitutum I de Vigílio e autor do tratado 'In Defensione Trium Capitulorum'.",
    papelNoConcilio:
      "Permaneceu leal a Vigílio durante o sínodo de 553, sendo preso e confinado pelo imperador em mosteiros trácios. Contudo, após a morte de Vigílio em 555, Pelágio capitulou perante Justiniano, aceitou o Concílio de Constantinopla II e foi imposto pelo imperador como o novo Papa de Roma (Pelágio I).",
    legado:
      "Como papa, teve de lidar com o Cisma de Milão e Aquileia, passando todo o seu pontificado escrevendo epístolas para provar aos bispos da Gália e Itália que o 5º Concílio não havia violado Calcedônia.",
    obras: [
      "In Defensione Trium Capitulorum (554)",
      "Epistulae Pontificiae (556–561)",
    ],
  },
  {
    nome: "Teodoro de Mopsuéstia (O Exegeta)",
    nomeGrego: "Θεόδωρος Μοψουεστίας (Theodoros Mopsuestias)",
    titulo: "Bispo de Mopsuéstia e Principal Teólogo da Escola de Antioquia",
    datas: "c. 350 – 428 d.C.",
    origem: "Antioquia da Síria",
    biografia:
      "Amigo de infância de São João Crisóstomo e discípulo de Diodoro de Tarso. Foi o maior exegeta histórico-gramatical do cristianismo antigo. Morreu em plena comunhão eclesial e com fama de grande mestre três anos antes do Concílio de Éfeso (431).",
    papelNoConcilio:
      "O Primeiro Capítulo. Foi a principal vítima póstuma do concílio de 553. Sua pessoa e toda a sua vasta produção teológica e exegética foram solenemente anatematizadas por heresia de nestorianismo extremado (separação das duas naturezas em dois sujeitos/hipóstases distintos).",
    legado:
      "Rejeitado categoricamente no Ocidente e no Império Bizantino após 553, continuou reverenciado como a suprema autoridade doutrinária na Igreja do Oriente (Igreja Assíria/Persa).",
    obras: [
      "Comentários aos Evangelhos e Epístolas Paulinas",
      "Catequeses Mistagógicas",
      "Sobre a Encarnação (De Incarnatione)",
    ],
  },
  {
    nome: "Teodoreto de Ciro",
    nomeGrego: "Θεοδώρητος Κύρρου (Theodoretos Kyrrou)",
    titulo: "Bispo de Ciro, Teólogo, Historiador Eclesiástico e Apologista",
    datas: "c. 393 – c. 458 d.C.",
    origem: "Antioquia da Síria",
    biografia:
      "Um dos mais elegantes escritores do cristianismo grego. Bispo zeloso que converteu mais de dez mil marcionitas em sua diocese rural. Foi o líder intelectual da delegação antioquena no Concílio de Éfeso (431) e autor das réplicas contra os 12 Anátemas de São Cirilo de Alexandria. Restaurado à sua sé no Concílio de Calcedônia (451) após subscrever anátema contra Nestório.",
    papelNoConcilio:
      "O Segundo Capítulo. O concílio de 553 preservou a sua pessoa (visto que Calcedônia o havia absolvido em vida), mas anatemizou pontualmente seus escritos que atacavam Cirilo de Alexandria e o Concílio de Éfeso.",
    legado:
      "Sua 'História Eclesiástica' e seus tratados apologéticos permaneceram pilares da literatura patrística bizantina.",
    obras: [
      "Refutação dos 12 Anátemas de Cirilo de Alexandria",
      "Eranistes (O Mendicante)",
      "História Eclesiástica (Historia Ecclesiastica)",
      "História Religiosa (História dos Monges da Síria)",
    ],
  },
  {
    nome: "Ibas de Edessa",
    nomeGrego: "Ἴβας Ἐδέσσης (Hiba)",
    titulo: "Bispo de Edessa (Metrópole de Osroena)",
    datas: "Falecido em 457 d.C.",
    origem: "Síria / Mesopotâmia",
    biografia:
      "Diretor da célebre Escola dos Persas em Edessa, traduziu as obras de Teodoro de Mopsuéstia para o siríaco. Foi deposto no 'Latrocínio de Éfeso' (449) e reintegrado com honras pelos padres conciliares na 9ª e 10ª sessões do Concílio de Calcedônia (451) após ler publicamente sua profissão de fé ortodoxa.",
    papelNoConcilio:
      "O Terceiro Capítulo. O concílio de 553 condenou a famigerada 'Carta a Maris, o Persa' (na qual Ibas chamava Cirilo de Alexandria de herético apolinarista e acusava o 1º Concílio de Éfeso de impiedade), alegando fraudulentamente que Calcedônia jamais havia aceito aquela carta específica.",
    legado:
      "A anatemização de sua carta provocou o Cisma das Três Províncias no Ocidente Latino por atacar diretamente a integridade dos autos conciliares de Calcedônia.",
    obras: [
      "Carta a Maris, o Persa (Epistula ad Marim Persam - 433)",
      "Hinos e Homilias em Língua Siríaca",
    ],
  },
  {
    nome: "Severo de Antioquia",
    nomeGrego: "Σευῆρος Ἀντιοχείας (Seueros)",
    titulo: "Patriarca Miáfisita de Antioquia e Doutor da Igreja Não-Calcedoniana",
    datas: "c. 465 – 538 d.C.",
    origem: "Sozópolis, Pisídia",
    biografia:
      "Formado em retórica e direito em Beirute, foi o maior arquiteto dogmático do miafisismo cirilino moderado. Rejeitava categoricamente o eutiquianismo (afirmando a perfeita consubstancialidade humana de Cristo), mas sustentava a fórmula 'uma única natureza encarnada de Deus Verbo' (mia physis tou theou logou sesarkomene).",
    papelNoConcilio:
      "Apesar de falecido e formalmente condenado no sínodo de Constantinopla de 536, sua teologia e seus seguidores foram a causa primordial que levou Justiniano a convocar o concílio de 553. Todo o vocabulário dos 14 anátemas foi calibrado para neutralizar as objeções de Severo a Calcedônia.",
    legado:
      "Venerado como o maior teólogo e santo supremo nas Igrejas Ortodoxas Copta, Síria e Armênia.",
    obras: [
      "Contra o Gramático Impuro (Contra Impium Grammaticum)",
      "Catedral Homilies (Homilias Catedráticas)",
      "Coleção de Cartas Teológicas",
    ],
  },
  {
    nome: "Tiago Baradeu (Jacob Baradaeus)",
    nomeGrego: "Ἰάκωβος Βαραδαῖος (siríaco: Ya'qub Burde'ana)",
    titulo: "Bispo Miáfisita de Edessa e Fundador da Igreja Síria Jacobita",
    datas: "c. 500 – 578 d.C.",
    origem: "Tella (fronteira romano-persa)",
    biografia:
      "Monge asceta que usava roupas esfarrapadas feitas de mantas de cavalo (de onde veio o apelido 'Baradaeus'). Com a ajuda secreta da Imperatriz Teodora, foi ordenado bispo secreto em Constantinopla em 542 pelo patriarca exilado Teodósio de Alexandria.",
    papelNoConcilio:
      "Enquanto Justiniano preparava o concílio para unificar os cristãos, Baradeu viajava a pé e disfarçado por todo o Oriente Médio ordenando secretamente 2 patriarcas, 27 bispos e mais de 100.000 sacerdotes e diáconos, criando a hierarquia paralela perpétua que anulou politicamente o efeito pacificador de Constantinopla II.",
    legado:
      "Deu seu próprio nome à Igreja Ortodoxa Síria ('Igreja Jacobita') e garantiu a sobrevivência física e estrutural do cristianismo oriental não-calcedoniano.",
  },
  {
    nome: "Menas de Constantinopla",
    nomeGrego: "Μηνᾶς (Menas)",
    titulo: "Patriarca de Constantinopla (536–552)",
    datas: "Falecido em agosto de 552 d.C.",
    origem: "Alexandria / Constantinopla",
    biografia:
      "Consagrado pessoalmente pelo Papa Santo Agapito I em Constantinopla em 536 após a deposição do monofisita Ântimo. Presidiu os sínodos locais que condenaram o origenismo em 543.",
    papelNoConcilio:
      "Firmou o edito imperial contra os Três Capítulos sob condição de que o Papa de Roma também o fizesse. Entrou em frequentes atritos com o Papa Vigílio, chegando a ser temporariamente excomungado por este, mas reconciliou-se com a sé apostólica antes de morrer em 552, sendo substituído por Eutíquio às vésperas da abertura do concílio.",
    legado:
      "Manteve a fidelidade eclesiástica ao trono bizantino durante a tempestuosa década preparatória de 540–550.",
  },
  {
    nome: "Dácio de Milão (Datius)",
    nomeGrego: "Δάτιος Μεδιολάνων (latim: Datius Mediolanensis)",
    titulo: "Arcebispo Metropolita de Milão e Confessor da Fé",
    datas: "Falecido em 552 d.C.",
    origem: "Milão (Itália)",
    biografia:
      "Bispo de Milão durante a Guerra Gótica. Fugiu para Constantinopla para pedir socorro imperial contra a destruição de sua cidade e ali se juntou ao comitê de resistência latina liderado por Vigílio.",
    papelNoConcilio:
      "Recusou veementemente qualquer compromisso teológico com Justiniano e Teodoro Ascidas. Acompanhou o Papa Vigílio durante a perseguição física e o refúgio em Calcedônia. Morreu em Constantinopla poucos meses antes do início formal das sessões.",
    legado:
      "Considerado um mártir da ortodoxia calcedoniana pela Igreja de Milão, sendo sua morte o estopim para a ruptura formal da província eclesiástica da Ligúria e de Milão com Constantinopla e Roma.",
  },
  {
    nome: "Apolinário de Alexandria",
    nomeGrego: "Ἀπολινάριος Ἀλεξανδρείας (Apolinarios)",
    titulo: "Patriarca Melquita Calcedoniano de Alexandria (551–568)",
    datas: "Falecido em 568 d.C.",
    origem: "Constantinopla",
    biografia:
      "Militar e burocrata imperial que foi ordenado bispo diretamente por ordem de Justiniano para assumir a sé patriarcal de Alexandria após a deposição violenta do patriarca Zoilo em 551.",
    papelNoConcilio:
      "Segunda autoridade em ordem de precedência no concílio de 553. Apoiou integralmente todas as medidas de Justiniano, subscreveu a deposição de Vigílio dos dípticos e implementou os cânones de 553 no Egito com auxílio das guarnições militares bizantinas.",
    legado:
      "Consolidou a separação irreversível entre a minoria imperial 'melquita' (leal a Constantinopla) e a maioria patriarcal copta indígena do Egito.",
  },
];