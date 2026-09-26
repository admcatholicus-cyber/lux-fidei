/**
 * PERSONAGENS DO CONCÍLIO DE CONSTANTINOPLA I (381 d.C.)
 * Prosopografia exaustiva e detalhada de todos os protagonistas, bispos e figuras chave.
 */

export interface Personagem {
  nome: string;
  nomeGrego?: string;
  datas: string;
  titulo: string;
  origem: string;
  biografia: string;
  papelNoConcilio: string;
  legado: string;
  obras?: string[];
  curiosidade?: string;
}

export const personagens: Personagem[] = [
  // =============================================
  // O IMPERADOR E A CORTE
  // =============================================
  {
    nome: "Teodósio I, o Grande",
    nomeGrego: "Θεοδόσιος Αʹ ὁ Μέγας",
    datas: "347–395 d.C.",
    titulo: "Imperador Romano do Oriente (379–395) e de Todo o Império (392–395)",
    origem: "Cauca, Hispânia (atual Coca, Espanha)",
    biografia:
      "Filho do destacado general Teodósio, o Velho, que foi executado por intrigas palacianas em 375. " +
      "O jovem Teodósio serviu com distinção como dux da Mésia, mas se retirou para suas propriedades na Hispânia após a morte trágica de seu pai. " +
      "Após o cataclismo militar de Adrianópolis (378) — no qual o imperador Valente e dois terços do exército oriental foram aniquilados pelos godos —, " +
      "o imperador do Ocidente, Graciano, chamou Teodósio de volta e o proclamou augusto do Oriente em 19 de janeiro de 379. " +
      "Teodósio reconstruiu o exército, conteve as invasões góticas (Tratado de 382) e foi batizado na fé nicena em Tessalônica (380) pelo bispo Ascólio durante uma grave enfermidade. " +
      "Em 380, promulgou o Édito Cunctos Populos, declarando a fé trinitária a religião oficial, e em 381 convocou o Concílio de Constantinopla I para pacificar e organizar a Igreja no Oriente.",
    papelNoConcilio:
      "Convocador, protetor e patrocinador do concílio. Embora não tenha interferido nos debates teológicos internos da assembleia episcopal, " +
      "sua presença política foi determinante: expulsou os bispos arianos da capital (como Demófilo), abriu a Igreja dos Santos Apóstolos para os nicenos, " +
      "garantiu o alojamento de ~150 bispos e ratificou integralmente os cânones pelo édito Nullis Haereticis em 30 de julho de 381.",
    legado:
      "Transformou o cristianismo de religião favorecida em religião exclusiva e estatal do Império Romano. " +
      "Seu reinado marca o nascimento formal da Cristandade imperial. Manteve uma relação de submissão espiritual perante a autoridade dos bispos, " +
      "cumprindo famosa penitência pública imposta por Santo Ambrósio de Milão em 390 após o massacre de Tessalônica.",
    curiosidade:
      "Foi o último imperador a governar a totalidade do Império Romano unificado (Oriente e Ocidente). Após sua morte em 395, o Império dividiu-se definitivamente entre seus dois filhos, Arcádio e Honório.",
  },

  {
    nome: "Graciano",
    nomeGrego: "Γρατιανός",
    datas: "359–383 d.C.",
    titulo: "Imperador Romano do Ocidente (367–383)",
    origem: "Sirmio, Panônia (atual Sérvia)",
    biografia:
      "Filho mais velho do imperador Valentiniano I. Foi nomeado augusto ainda criança e assumiu o governo do Ocidente com a morte do pai em 375. " +
      "Após a morte de seu tio Valente em 378, convocou Teodósio I para assumir o comando do Oriente devastado pelos godos. " +
      "Sob a profunda orientação de Santo Ambrósio de Milão, recusou os símbolos do paganismo tradicional romano e promoveu a fé nicena no Ocidente.",
    papelNoConcilio:
      "Não esteve presente em Constantinopla (o concílio reuniu apenas o episcopado oriental), mas co-assinou os éditos religiosos de Teodósio I (como o Cunctos Populos). " +
      "Sua política anti-ariana simultânea no Ocidente e seu patrocínio ao Sínodo de Aquileia (381) asseguraram que o arianismo fosse derrotado nas duas metades do mundo romano.",
    legado:
      "Foi o primeiro imperador a recusar oficialmente o título e o manto pagão de 'Pontifex Maximus' (Pontífice Máximo) e a ordenar a remoção do Altar da Vitória do Senado Romano.",
    curiosidade:
      "Acabou traído por suas tropas e assassinado em Lyon em 383 por ordens do usurpador Magno Máximo (que não deve ser confundido com o impostor Máximo o Cínico).",
  },

  // =============================================
  // OS TRÊS PRESIDENTES DO CONCÍLIO
  // =============================================
  {
    nome: "São Melécio de Antioquia",
    nomeGrego: "Μελέτιος Ἀντιοχείας",
    datas: "~310–381 d.C.",
    titulo: "Bispo de Antioquia e 1º Presidente do Concílio",
    origem: "Melitene, Armênia",
    biografia:
      "Melécio teve uma das trajetórias episcopais mais veneráveis e atribuladas do século IV. Eleito bispo de Antioquia em 360, foi deposto e exilado três vezes por imperadores arianos " +
      "(Constâncio II e Valente) devido à sua firme recusa em ceder à teologia heterodoxa. " +
      "Durante seus exílios, a comunidade ortodoxa de Antioquia dividiu-se entre seus seguidores (melecianos) e os eustatianos liderados por Paulino (apoiados por Roma e Alexandria). " +
      "Teologicamente niceno, usava a linguagem oriental de 'três hypostaseis em uma ousia', o que incitava suspeitas no Ocidente, mas era defendido apaixonadamente por São Basílio Magno.",
    papelNoConcilio:
      "Aclamado como o 1º Presidente do Concílio de Constantinopla I por sua incontestável autoridade moral de confessor da fé. " +
      "Presidiu a cerimônia de abertura e a confirmação solene da fé de Niceia. Contudo, faleceu subitamente em junho de 381, poucas semanas após o início dos trabalhos.",
    legado:
      "Sua morte inesperada causou comoção nacional e desencadeou uma das maiores crises do concílio: a disputa sobre quem deveria sucedê-lo em Antioquia. " +
      "Venerado como santo tanto pela Igreja Católica (12 de fevereiro) quanto pela Ortodoxa.",
    curiosidade:
      "São João Crisóstomo foi ordenado diácono por São Melécio e mais tarde escreveu uma famosa oração panegírica em sua memória, declarando que o nome de Melécio era 'um bálsamo para os ouvidos do povo'.",
  },

  {
    nome: "São Gregório de Nazianzo (o Teólogo)",
    nomeGrego: "Γρηγόριος ὁ Ναζιανζηνός / ὁ Θεολόγος",
    datas: "329–390 d.C.",
    titulo: "Arcebispo de Constantinopla e 2º Presidente do Concílio",
    origem: "Arianzo, Capadócia (atual Turquia)",
    biografia:
      "Filho do bispo Gregório, o Velho, e de Santa Nona. Estudou nas maiores academias da época (Cesareia, Alexandria e Atenas), onde foi colega de classe de São Basílio Magno e de Juliano, o Apóstata. " +
      "Sagrado bispo de Sasima por Basílio em 372 — uma pequena cidade de fronteira que ele nunca chegou a governar —, viveu anos como contemplativo. " +
      "Em 379, a pedido da comunidade nicena sobrevivente, mudou-se para Constantinopla (cidade dominada há décadas por arianos). Na modesta capela da 'Anastasis' (Ressurreição), " +
      "prega as célebres cinco 'Orações Teológicas' (27–31), recuperando a capital para a fé trinitária e defendendo com mestria a divindade do Espírito Santo.",
    papelNoConcilio:
      "Assumiu a presidência após a morte súbita de São Melécio. Presidiu a formulação do Credo e o diálogo com os 36 macedonianos. " +
      "Todavia, enfrentou feroz oposição da delegação egípcia (Timóteo de Alexandria), que contestou a legalidade de sua nomeação invocando o Cânon 15 de Niceia (proibição de translados de sé episcopal). " +
      "Desgostoso com as intrigas políticas e com o Cisma de Antioquia, renunciou dramaticamente ao bispado e à presidência no meio do concílio, proferindo a memorável Oração 42 de despedida.",
    legado:
      "Considerado um dos Três Teólogos da Igreja (junto de São João Evangelista e São Simão, o Novo Teólogo). Sua pneumatologia e suas Orações Teológicas " +
      "são o alicerce absoluto do dogma da Santíssima Trindade formulado em 381. Doutor da Igreja.",
    obras: [
      "Orações Teológicas (27–31)",
      "Oração 42 (Discurso de Despedida no Concílio)",
      "De Vita Sua (Poema autobiográfico de 1.949 versos)",
      "Epístolas (101 e 102 contra Apolinário)",
      "Poemas teológicos e morais",
    ],
    curiosidade:
      "É o único presidente de um concílio ecumênico na história que renunciou ao cargo no meio das sessões para voltar para sua terra natal e escrever poesia.",
  },

  {
    nome: "Nectário de Constantinopla",
    nomeGrego: "Νεκτάριος Κωνσταντινουπόλεως",
    datas: "~340–397 d.C.",
    titulo: "Arcebispo de Constantinopla e 3º Presidente do Concílio",
    origem: "Tarso, Cilícia",
    biografia:
      "Membro da nobreza senatorial de Constantinopla e oficial respeitado de nascimento cilício. " +
      "Quando Gregório de Nazianzo renunciou no meio do concílio, o episcopado e o imperador buscavam um candidato neutro, capaz de pacificar as discórdias entre egípcios e orientais. " +
      "Nectário foi sugerido pelo bispo Diodoro de Tarso. O fato extraordinário: Nectário era um leigo idoso e ainda catecúmeno (não havia sido batizado!).",
    papelNoConcilio:
      "Foi batizado às pressas, ordenado diácono, presbítero e sagrado bispo de Constantinopla em questão de dias pela assembleia conciliar. " +
      "Assumiu a 3ª e última presidência do concílio, conduzindo a promulgação dos cânones disciplinares (incluindo o Cânon 3) e a redação das cartas sinodais ao imperador.",
    legado:
      "Apesar da inexperiência teológica inicial, provou ser um governante eclesiástico admirável, prudente e diplomático. Governou a sé de Constantinopla com firmeza por 16 anos até sua morte em 397.",
    curiosidade:
      "É o único bispo na história da Igreja que passou de catecúmeno não-batizado a arcebispo da capital imperial e presidente de um concílio ecumênico na mesma semana.",
  },

  // =============================================
  // OS PADRES CAPADÓCIOS E MESTRES DA FÉ
  // =============================================
  {
    nome: "São Basílio de Cesareia (o Grande)",
    nomeGrego: "Βασίλειος ὁ Μέγας",
    datas: "329–379 d.C.",
    titulo: "Arcebispo de Cesareia da Capadócia e Arquitetor Intelectual (In Memoriam)",
    origem: "Cesareia da Capadócia",
    biografia:
      "Irmão de São Gregório de Nissa e de Santa Macrina. Figura monumental da história eclesiástica: teólogo, organizador, monge e pastor social. " +
      "Liderou a resistência nicena no Oriente contra as perseguições do imperador Valente. " +
      "Formulou a solução conceitual decisiva que destravou o debate trinitário: a distinção ontológica entre 'ousia' (essência/substância única de Deus) e 'hypostasis' (Pessoa individualizada/propriedade característica). " +
      "Faleceu exausto em 1º de janeiro de 379, aos 49 anos, não vivendo para ver o concílio que planejou.",
    papelNoConcilio:
      "O 'Pai ausente' do Concílio de 381. Sua obra magistral 'De Spiritu Sancto' (375) forneceu toda a exegese e a teologia litúrgica utilizadas pelos padres conciliares " +
      "para declarar o Espírito Santo 'Senhor que dá a vida, que procede do Pai e com o Pai e o Filho é adorado e glorificado'. Todos os bispos líderes de 381 eram seus discípulos.",
    legado:
      "Doutor da Igreja Católica e Ortodoxa. Considerado o pai do monaquismo oriental (Regra Basiliana) e criador do primeiro complexo hospitalar público da história (a 'Basilíada').",
    obras: [
      "De Spiritu Sancto (Sobre o Espírito Santo, 375)",
      "Contra Eunômio (5 livros)",
      "Hexaemeron (9 homilias sobre os dias da Criação)",
      "Regras Monásticas (Grandes e Pequenas)",
      "Liturgia de São Basílio",
    ],
    curiosidade:
      "Suas últimas palavras no leito de morte teriam sido em latim e grego: 'In manus tuas, Domine, commendo spiritum meum' ('Em tuas mãos, Senhor, entrego o meu espírito').",
  },

  {
    nome: "São Gregório de Nissa",
    nomeGrego: "Γρηγόριος Νύσσης",
    datas: "~335–395 d.C.",
    titulo: "Bispo de Nissa e Teólogo Místico do Concílio",
    origem: "Cesareia da Capadócia",
    biografia:
      "Irmão mais novo de São Basílio Magno. O mais filosófico e profundo teólogo dos três Capadócios. " +
      "Consagrado bispo de Nissa por Basílio em 372, foi deposto e exilado pelos arianos sob Valente em 376, retornando em triunfo em 378. " +
      "Após a morte de Basílio (379), tornou-se o campeão teológico do Oriente, demolindo as teses do arianismo radical através de seu colossal 'Contra Eunômio'.",
    papelNoConcilio:
      "Após a renúncia de Gregório de Nazianzo, Nissa tornou-se a maior autoridade teológica da assembleia conciliar. " +
      "Proferiu a oração fúnebre no funeral de São Melécio e a oração oficial na posse de Nectário. " +
      "Teodósio I o nomeou em édito posterior como o bispo 'padrão de comunhão e ortodoxia' para toda a diocese imperial do Ponto.",
    legado:
      "Doutor da Igreja. Pai da teologia mística cristã e criador do conceito teológico da 'Epektasis' (a eterna e infinita progressão da alma no conhecimento de Deus).",
    obras: [
      "Contra Eunômio (5 livros)",
      "Grande Catequese (Oratio Catechetica Magna)",
      "Ad Ablabium (Quod non sint tres Dei)",
      "A Vida de Moisés",
      "Sobre a Alma e a Ressurreição",
    ],
    curiosidade:
      "Gregório de Nissa é um dos raros Padres da Igreja que defendeu abertamente a ideia da 'Apocatástase' (a restauração/salvação final de toda a criação), embora essa interpretação continue em debate entre patrólogos.",
  },

  {
    nome: "São Anfilóquio de Icônio",
    nomeGrego: "Ἀμφιλόχιος Ἰκονίου",
    datas: "~340–403 d.C.",
    titulo: "Bispo de Icônio (Licaônia)",
    origem: "Capadócia",
    biografia:
      "Primo de São Gregório de Nazianzo e jurista renomado que abandonou a carreira secular para se tornar monge. " +
      "Foi consagrado bispo de Icônio por São Basílio Magno em 374, que dedicou a ele seu célebre tratado 'De Spiritu Sancto'.",
    papelNoConcilio:
      "Participante ativo e destemido em 381. Destacou-se na refutação dos bispos macedonianos e na condenação da heresia apolinarista. " +
      "Sua autoridade fez com que Teodósio I o incluísse como um dos bispos 'padrão de comunhão' para as dioceses da Ásia Menor.",
    legado: "Autor de cartas canônicas e tratado contra a heresia dos messalianos. Venerado como santo pela tradição oriental e ocidental.",
  },

  // =============================================
  // OS DELEGADOS E OS BISPOS ORIENTAIS
  // =============================================
  {
    nome: "Timóteo I de Alexandria",
    nomeGrego: "Τιμόθεος Ἀλεξανδρείας",
    datas: "m. 385 d.C.",
    titulo: "Patriarca de Alexandria",
    origem: "Alexandria, Egito",
    biografia:
      "Discípulo de São Atanásio e sucessor de Pedro II na histórica Sé de São Marcos em Alexandria (380–385). " +
      "Fiel defensor da teologia nicena atanasiana, mas zeloso defensor da hegemonia eclesiástica do Egito sobre o Oriente.",
    papelNoConcilio:
      "Chegou a Constantinopla na Fase 2 à frente da delegação de bispos egípcios. Enfurecido por não ter sido consultado sobre a eleição de Gregório de Nazianzo para a capital, " +
      "impugnou a posse de Gregório acusando-o de transferir-se ilegalmente de sé (de Sasima/Nazianzo para Constantinopla), violando o Cânon 15 de Niceia. " +
      "Sua intransigência canônica provocou o colapso emocional e a renúncia final de Gregório.",
    legado: "Assegurou que o Cânon 2 restringisse expressamente a jurisdição do Egito aos seus próprios limites, embora tenha protestado contra a elevação de Constantinopla no Cânon 3.",
  },

  {
    nome: "Flaviano I de Antioquia",
    nomeGrego: "Φλαβιανὸς Ἀντιοχείας",
    datas: "~320–404 d.C.",
    titulo: "Presbítero de Antioquia e Sucessor de Melécio",
    origem: "Antioquia, Síria",
    biografia:
      "Nobre antioqueno que renunciou à riqueza para servir à Igreja. Durante os longos exílios de São Melécio, Flaviano e Diodoro de Tarso sustentaram a fé do povo niceno, " +
      "organizando vigílias noturnas secretas e compondo salmos antifônicos para combater as heresias arianas.",
    papelNoConcilio:
      "Com a morte súbita de São Melécio no meio do concílio, Flaviano foi eleito e consagrado bispo de Antioquia pela maioria dos bispos orientais em 381, " +
      "apesar dos apelos de Gregório de Nazianzo para reconhecer Paulino e encerrar o Cisma de Antioquia.",
    legado:
      "Sua eleição perpetuou a divisão com Roma e Alexandria por anos. No entanto, em 387, Flaviano evitou a destruição de Antioquia pelo irado imperador Teodósio I " +
      "(após a 'Revolta das Estátuas') viajando pessoalmente para pleitear o perdão imperial. Foi finalmente reconhecido por Roma em 398.",
  },

  {
    nome: "Diodoro de Tarso",
    nomeGrego: "Διόδωρος Ταρσεύς",
    datas: "~320–390 d.C.",
    titulo: "Bispo de Tarso e Fundador da Escola de Antioquia",
    origem: "Antioquia, Síria",
    biografia:
      "Fundador da influente Escola Teológica de Antioquia, caracterizada pela exegese bíblica literal e histórico-gramatical (oposta ao método alegórico de Alexandria). " +
      "Mestre intelectual de figuras gigantescas como São João Crisóstomo e Teodoro de Mopsuéstia. Padeceu exílio sob o imperador ariano Valente.",
    papelNoConcilio:
      "Figura influente na comissão teológica do concílio. Foi quem notou Nectário na multidão e o sugeriu como candidato perfeito para suceder Gregório de Nazianzo em Constantinopla.",
    legado:
      "Sua insistência em diferenciar com clareza as duas naturezas de Cristo (divina e humana) inspirou o dogma de Calcedônia (451), mas sua linguagem extrema " +
      "foi mais tarde acusada de ter semeado a heresia do Nestorianismo, levando à sua condenação póstuma no II Concílio de Constantinopla (553).",
    curiosidade:
      "Durante a perseguição de Valente, pregava o Evangelho ao ar livre nos campos às margens do rio Orontes, atraindo milhares de fiéis que enfrentavam a violência das tropas imperiais.",
  },

  {
    nome: "São Cirilo de Jerusalém",
    nomeGrego: "Κύριλλος Ἱεροσολύμων",
    datas: "~313–386 d.C.",
    titulo: "Bispo de Jerusalém",
    origem: "Jerusalém, Palestina",
    biografia:
      "Bispo da Cidade Santa por quase 40 anos, dos quais passou cerca de 16 anos exilado em três ocasiões diferentes por bispos arianos (Acácio de Cesareia) e pelo imperador Valente. " +
      "No início da carreira usou linguagem homoiousiana (semi-ariana), mas evoluiu para o nicenismo pleno. Autor de 24 'Catequeses' inestimáveis.",
    papelNoConcilio:
      "Participou ativamente das sessões em 381. A pesquisa histórica indica que a confissão de fé e o credo batismal que Cirilo usava em Jerusalém " +
      "serviram de esqueleto primário sobre o qual os padres de 381 construíram e promulgaram o texto final do Credo Niceno-Constantinopolitano.",
    legado: "Proclamado Doutor da Igreja pelo Papa Leão XIII em 1883. Suas Catequeses são a principal fonte sobre os ritos litúrgicos do batismo e da eucaristia no século IV.",
    obras: ["Catequeses Batismais e Mistagógicas (1–24)"],
    curiosidade:
      "Presenciou em 363 a tentativa frustrada do imperador pagão Juliano, o Apóstata, de reconstruir o Templo de Jerusalém para desmentir as profecias de Cristo, evento interrompido por terremotos e explosões sob as fundações.",
  },

  // =============================================
  // OS ANTAGONISTAS E HERESIARCAS
  // =============================================
  {
    nome: "Máximo, o Cínico",
    nomeGrego: "Μάξιμος ὁ Κυνικός",
    datas: "fl. 374–381 d.C.",
    titulo: "Filósofo e Impostor Pretendente à Sé de Constantinopla",
    origem: "Alexandria, Egito",
    biografia:
      "Figura extravagante de hábitos exóticos: ostentava longos cabelos loiros pintados e vestia o tradicional manto rasgado dos filósofos cínicos gregos. " +
      "Apresentou-se em Constantinopla em 379 fingindo-se um 'mártir e confessor da fé'. Ganhou a confiança de São Gregório de Nazianzo, que o acolheu em sua própria casa e o elogiou na Oração 25. " +
      "Em 380, tramou em segredo com bispos egípcios enviados ocultamente pelo Patriarca Pedro II de Alexandria para tomar o trono episcopal de Constantinopla. " +
      "Uma noite, invadiram a igreja e iniciaram sua ordenação às pressas; ao amanhecer, o povo e os magistrados descobriram o golpe e expulsaram Máximo da cidade sob vaias.",
    papelNoConcilio:
      "Embora expulsos antes da abertura do concílio, Máximo e seus cúmplices continuaram tentando obter reconhecimento do imperador e do Ocidente. " +
      "Os padres conciliares em 381 promulgaram o **Cânon 4** exclusivamente para anular seus atos: 'Declaramos que Máximo nunca foi e nem é bispo, e que todas as ordenações conferidas por ele são absolutamente nulas e sem efeito'.",
    legado: "Tornou-se o símbolo do vigarista eclesiástico no direito canônico antigo.",
    curiosidade:
      "Após ser escorraçado de Constantinopla, Máximo foi a Tessalônica exigir que o imperador Teodósio o instalasse pela força das armas. Teodósio ameaçou mandar executá-lo se ele não desaparecesse do império imediatamente.",
  },

  {
    nome: "Eleúsio de Cízico e Marciano de Lâmpsaco",
    datas: "fl. 381 d.C.",
    titulo: "Líderes dos Bispos Macedonianos (Pneumatomachianos)",
    origem: "Helesponto, Ásia Menor",
    biografia:
      "Chefes da facção dos 36 bispos macedonianos (semi-arianos) originários das províncias da Ásia Menor. " +
      "Eles aceitavam o termo 'homoiousios' (Filho de essência semelhante ao Pai), mas recusavam veementemente reconhecer a divindade do Espírito Santo, reduzindo o Paráclito a uma criatura, anjo ou força servil.",
    papelNoConcilio:
      "Convocados pessoalmente por Teodósio I em 381 na esperança de que fossem reintegrados à Igreja Católica. " +
      "O imperador e Gregório de Nazianzo dialogaram longamente com eles nas primeiras semanas. Todavia, os 36 macedonianos recusaram-se a aceitar a consubstancialidade do Espírito Santo " +
      "e abandonaram o concílio em protesto.",
    legado: "A obstinação e a partida deles forçou o Concílio a promulgar o anátema explícito contra os Pneumatomachianos no Cânon 1 e a expandir a famosa cláusula pneumatológica no Credo.",
  },

  {
    nome: "Eustáquio de Sebaste",
    datas: "~300–377 d.C.",
    titulo: "Bispo de Sebaste e Fundador do Pneumatomachianismo",
    origem: "Armênia",
    biografia:
      "Uma das figuras mais proteiformes e volúveis do século IV. Monge asceta rigoroso e antigo amigo íntimo de São Basílio Magno. " +
      "Mudou de lado teológico dezenas de vezes durante as controvérsias arianas. Nos seus últimos anos de vida (370–377), tornou-se o líder da facção que atacava abertamente a divindade do Espírito Santo.",
    papelNoConcilio:
      "Já falecido quando o concílio se reuniu em 381, mas seu pensamento foi o motor do movimento pneumatomachiano que os padres de Constantinopla I combateram e anatematizaram.",
    legado: "Sua traição teológica partiu o coração de São Basílio, que cortou laços com ele nas famosas cartas 223–226.",
  },

  // =============================================
  // O OCIDENTE E A SANTA SÉ
  // =============================================
  {
    nome: "Papa São Dâmaso I",
    datas: "305–384 d.C.",
    titulo: "Bispo de Roma e Sumo Pontífice da Igreja Católica (366–384)",
    origem: "Roma (de ascendência hispânica)",
    biografia:
      "Um dos mais firmes e importantes papas da Antiguidade. Restaurou a ordem em Roma, restaurou as catacumbas e os túmulos dos mártires, " +
      "e encomendou ao seu secretário São Jerônimo a tradução oficial da Bíblia para o latim (a Vulgata). " +
      "Reafirmou sistematicamente a doutrina de que a Primazia de Roma se apoia na promessa de Cristo a São Pedro (Mt 16,18) e não na importância política secular da cidade.",
    papelNoConcilio:
      "Não foi convidado por Teodósio I (pois a convocação foi um ato do imperador do Oriente para a sua jurisdição) nem enviou legados papais à assembleia de 381. " +
      "Em 382, presidiu o Sínodo Romano, onde acolheu a carta de fé trinitária enviada pelos bispos orientais, mas recebeu as decisões disciplinares com frieza, " +
      "ignorando a pretensão de elevação jurisdicional de Constantinopla contida no Cânon 3 e recusando o reconhecimento de Flaviano como bispo de Antioquia.",
    legado: "Sua recusa em aceitar reordenações da hierarquia eclesiástica baseadas em prestígio político marcou a posição histórica do Papado sobre a Primazia Petrina.",
  },

  {
    nome: "Santo Ambrósio de Milão",
    datas: "340–397 d.C.",
    titulo: "Arcebispo de Milão e Doutor da Igreja",
    origem: "Tréveris, Gália (atual Alemanha)",
    biografia:
      "Governador romano da Ligúria e Emília que foi aclamado bispo de Milão pelo povo em 374 quando ainda era um catecúmeno não-batizado. " +
      "Tornou-se o maior líder espiritual e político da Igreja no Ocidente. Mestre de Santo Agostinho, que se converteu ouvindo suas homilias.",
    papelNoConcilio:
      "Simultaneamente à reunião de Constantinopla I em 381, Ambrósio presidia o Sínodo de Aquileia no Ocidente. " +
      "No mesmo ano de 381, publicou seu tratado 'De Spiritu Sancto', demonstrando que o Ocidente e o Oriente, de forma independente, chegaram à exata mesma definição dogmática sobre a divindade e consubstancialidade do Espírito Santo.",
    legado: "Doutor da Igreja Católica. Estabeleceu o princípio ocidental de que o imperador cristão está dentro da Igreja, submetido ao dogma e à moral, e não acima dela.",
    obras: [
      "De Spiritu Sancto (381)",
      "De Fide (378–380)",
      "De Officiis Ministrorum",
      "Hinos Ambrosiáticos",
    ],
  },
];