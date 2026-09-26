// ============================================
// CONCÍLIO DE ÉFESO (431 d.C.)
// Contexto Político: Teodósio II, Pulquéria e o Império em 431
// ============================================

interface Edito {
  nome: string
  data: string
  local: string
  texto: string | null
  traducao: string
  importancia: string
  fonte: string
}

interface Conceito {
  termo: string
  significado: string
}

interface EventoPolitico {
  ano: string
  evento: string
}

export const contextoPolitico = {
  // =============================================
  // 1. O ESTADO DO IMPÉRIO EM 431
  // =============================================
  imperio: {
    titulo: 'O Império Romano do Oriente em 431: Entre a Prosperidade e as Ameaças',
    descricao:
      'Em 431, o Império Romano do Oriente (que os historiadores modernos chamam de "Império Bizantino", embora seus habitantes se considerassem simplesmente "romanos") vivia um período de relativa estabilidade e prosperidade, especialmente quando comparado ao colapso que o Ocidente já enfrentava. Enquanto o Império Ocidental se desintegrava sob a pressão das invasões bárbaras — os vândalos haviam cruzado o Estreito de Gibraltar em 429 e estavam conquistando o norte da África, a Gália estava fragmentada entre visigodos, burgúndios e francos, e a Britânia havia sido abandonada pelas legiões em 410 — o Oriente mantinha suas fronteiras relativamente intactas, sua economia florescente e sua administração funcional. Constantinopla, a "Nova Roma" fundada por Constantino em 330, era agora a maior e mais rica cidade do mundo cristão, com uma população estimada em 400.000 a 500.000 habitantes, muralhas impenetráveis (as Muralhas Teodosianas, completadas em 413), um porto movimentado no Chifre de Ouro, e uma corte imperial que era o centro político, cultural e religioso do Mediterrâneo oriental. O Império Oriental controlava as províncias mais ricas do antigo mundo romano: o Egito (o celeiro do Mediterrâneo), a Síria (o centro comercial do Levante), a Ásia Menor (o coração demográfico e militar), a Palestina (a Terra Santa, destino de peregrinações), e a Grécia (o berço da cultura helenística). A língua oficial da administração era o latim, mas a língua da cultura, da teologia e da vida cotidiana era o grego — o que explica por que os debates teológicos de Éfeso foram conduzidos inteiramente em grego, com os legados papais como única exceção latina.',
    situacao: {
      militar:
        'A situação militar do Oriente em 431 era de tensão latente, mas sem conflitos abertos de grande escala. No Danúbio, a ameaça dos hunos de Rua (tio de Átila) era crescente: os hunos exigiam tributos cada vez maiores e ameaçavam invadir a Trácia caso Teodósio II não pagasse. Em 422, um tratado de paz havia sido firmado com os hunos, mas a situação era volátil. Na fronteira oriental, o Império Sassânida (Pérsia) estava em paz com Roma desde a guerra de 421–422, mas a tensão era permanente: a Pérsia protegia os cristãos nestorianos em seu território (o que mais tarde tornaria a Igreja do Oriente uma "igreja de fronteira" suspeita de lealdade a Constantinopla). No norte da África, os vândalos de Genserico estavam sitiando Hipona (onde Agostinho morreria em 430), mas esta era uma crise do Ocidente, não do Oriente. O exército oriental, estimado em ~200.000 homens, era composto por limitanei (tropas de fronteira) e comitatenses (tropas de campo), com uma crescente dependência de federados bárbaros (godos, alanos, isáurios). O conde Candidiano, enviado por Teodósio II a Éfeso como representante imperial, comandava uma unidade de domestici (guarda palaciana), o que demonstra a importância que o imperador atribuía ao controle da ordem no concílio.',
      economica:
        'A economia do Oriente em 431 era a mais robusta do mundo mediterrâneo. O Egito produzia cerca de 1/3 de todo o trigo consumido pelo Império, e o porto de Alexandria era o maior centro comercial do Mediterrâneo oriental. A Síria e a Palestina eram centros de produção de seda, vidro, vinho e azeite. Constantinopla controlava o comércio entre o Mar Negro e o Mediterrâneo, e sua posição no Bósforo a tornava o entreposto natural entre a Europa e a Ásia. A moeda de ouro (o solidus, cunhado desde Constantino) era a moeda mais estável do mundo antigo e seria mantida até o século XI. A arrecadação fiscal do Oriente era estimada em ~9 milhões de solidi por ano, suficiente para manter o exército, a burocracia, as obras públicas e os tributos aos hunos. Esta riqueza seria um fator decisivo na controvérsia nestoriana: Cirilo de Alexandria, como patriarca da sé mais rica do Oriente, dispunha de recursos financeiros imensos e os usou generosamente para subornar a corte de Constantinopla (cartas de Cirilo a Pulquéria e aos eunucos imperiais, acompanhadas de presentes de ouro, tapetes e marfim, são atestadas nas fontes).',
      religiosa:
        'A situação religiosa do Oriente em 431 era de uma ortodoxia trinitária consolidada (pós-Constantinopla I, 381), mas de uma cristologia ainda em disputa. O arianismo havia sido praticamente erradicado do Império (sobrevivia apenas entre os godos e outros povos germânicos fora das fronteiras). O macedonianismo (negação da divindade do Espírito Santo) estava em declínio. O apolinarismo (negação da alma humana de Cristo) havia sido condenado em 381, mas seus resquícios influenciavam a cristologia alexandrina. O pelagianismo (negação do pecado original) havia sido condenado no Ocidente (Cartago, 418; Éfeso, 431 — Cânon 5), mas alguns pelagianos haviam buscado refúgio em Constantinopla sob a proteção de Nestório, o que seria usado por Cirilo como prova da heterodoxia do patriarca. A devoção popular à Theotokos era intensa e generalizada: igrejas marianas, ícones, hinos e festas litúrgicas proliferavam em todo o Oriente. A controvérsia nestoriana, ao atacar esta devoção, tocou em um nervo exposto da piedade popular e gerou uma reação que transcendia os círculos teológicos.',
    },
  },

  // =============================================
  // 2. TEODÓSIO II
  // =============================================
  teodosioII: {
    titulo: 'Teodósio II (401–450): O Imperador Teólogo e seu Dilema',
    descricao:
      'Flávio Teodósio II nasceu em 10 de abril de 401 em Constantinopla, filho do imperador Arcádio e da imperatriz Eudóxia. Tornou-se Augusto do Oriente em 408, aos 7 anos de idade, após a morte de seu pai, e reinou por 42 anos — um dos reinados mais longos da história romana. Durante sua minoridade, o Império foi governado por uma série de regentes: primeiro o prefeito do pretório Antêmio (408–414), depois sua irmã mais velha Pulquéria (414–423), e finalmente uma combinação de Pulquéria e altos funcionários da corte. Teodósio II é descrito pelas fontes como um homem de caráter piedoso, erudito e de temperamento pacífico — mais inclinado à oração e ao estudo do que à guerra e à política. Era um calígrafo talentoso (copiava manuscritos bíblicos com as próprias mãos), um amante da teologia (participava pessoalmente de debates doutrinários) e um devoto da vida monástica (mantinha correspondência com eremitas e ascetas). Sua grande realização administrativa foi a compilação do Código Teodosiano (Codex Theodosianus, 438), a primeira codificação sistemática das leis imperiais desde o tempo de Diocleciano, que incluía numerosas leis sobre questões religiosas (Livro XVI). Fundou a Universidade de Constantinopla (Pandidakterion) em 425, com 31 cátedras de gramática, retórica, filosofia e direito. Porém, sua piedade e sua indecisão política o tornavam vulnerável à influência das mulheres de sua vida: primeiro Pulquéria (sua irmã, que controlou a corte até o casamento dele em 421), depois Eudócia (sua esposa, que rivalizava com Pulquéria pelo controle da política religiosa). Durante a controvérsia nestoriana, Teodósio II oscilou dramaticamente entre os partidos: inicialmente protegeu Nestório (que havia nomeado pessoalmente e cuja teologia lhe parecia razoável), depois cedeu à pressão de Pulquéria e dos resultados do concílio, e finalmente confirmou a deposição de Nestório. Sua indecisão quase custou a unidade da Igreja: ao declarar válidas tanto a deposição de Nestório (por Cirilo) quanto a deposição de Cirilo (por João de Antioquia), Teodósio criou um impasse que só foi resolvido meses depois, quando a pressão popular e a influência de Pulquéria o levaram a escolher definitivamente o partido ciriliano. Teodósio II morreu em 28 de julho de 450, após cair de seu cavalo durante uma caçada. Foi sucedido por sua irmã Pulquéria e seu marido Marciano, que convocariam o Concílio de Calcedônia (451) para completar a obra cristológica de Éfeso.',
  },

  // =============================================
  // 3. PULQUÉRIA
  // =============================================
  pulqueria: {
    titulo: 'Santa Pulquéria (399–453): A Augusta, a Theotokos e o Poder Feminino na Corte',
    descricao:
      'Élia Pulquéria nasceu em 19 de janeiro de 399 em Constantinopla, filha do imperador Arcádio e da imperatriz Eudóxia, e irmã mais velha de Teodósio II. É uma das figuras mais extraordinárias da história do Império Bizantino e uma das mulheres mais poderosas de toda a Antiguidade tardia. Em 414, aos 15 anos, Pulquéria assumiu a regência do Império em nome de seu irmão de 13 anos e recebeu o título de Augusta. Em um ato de extraordinária ousadia política e religiosa, fez um voto público de virgindade perpétua, declarando que seu "esposo" era Cristo — uma jogada que simultaneamente a protegia de casamentos políticos indesejados, a associava à Virgem Maria (cuja virgindade perpétua era dogma), e lhe conferia uma autoridade moral que nenhum homem da corte podia desafiar. Pulquéria era uma devota fervorosa da Theotokos e construiu três grandes igrejas marianas em Constantinopla: a Igreja de Blaquerna (que abrigava o manto da Virgem), a Igreja de Hodegetria (que abrigava o ícone da Virgem "que mostra o caminho", supostamente pintado por São Lucas), e a Igreja de Chalkoprateia. Estas igrejas não eram apenas atos de piedade, mas declarações políticas: ao associar-se à Theotokos, Pulquéria posicionava-se como a protetora da ortodoxia mariana e, por extensão, como a inimiga natural de qualquer um que questionasse o título Theotokos — como Nestório. Quando Nestório, em 428, começou a pregar contra Theotokos, Pulquéria viu nisso não apenas uma heresia teológica, mas um ataque pessoal à sua devoção e à sua identidade política. A situação piorou quando Nestório a insultou publicamente: segundo as fontes, Nestório recusou-se a permitir que Pulquéria entrasse no santuário da Hagia Sophia durante a liturgia (um privilégio que os imperadores e augustas tradicionalmente desfrutavam), e teria dito: "Não permitirei que uma mulher entre no altar." Pulquéria respondeu com fúria e jurou que Nestório pagaria por sua insolência. A partir deste momento, Pulquéria tornou-se a força política mais poderosa por trás da convocação do concílio e da condenação de Nestório. Durante o concílio, ela pressionou Teodósio II incessantemente para que confirmasse a deposição de Nestório, e quando o imperador hesitou (chegando a prender tanto Cirilo quanto Nestório), foi a intervenção de Pulquéria que finalmente inclinou a balança a favor de Cirilo. Após a morte de Teodósio II em 450, Pulquéria casou-se com o general Marciano (uma união política, com voto de castidade mantido) e tornou-se imperatriz reinante. Juntos, convocaram o Concílio de Calcedônia (451), que completou a obra cristológica de Éfeso. Pulquéria morreu em julho de 453 e foi canonizada como santa pela Igreja Ortodoxa e pela Igreja Católica (festa: 10 de setembro). Sua vida é um testemunho extraordinário do poder que as mulheres da dinastia teodosiana exerceram sobre a política religiosa do Império — um poder que rivalizava com o dos próprios imperadores.',
  },

  // =============================================
  // 4. ÉFESO COMO LOCAL
  // =============================================
  capital: {
    titulo: 'Éfeso: A Cidade da Theotokos e o Cenário do Concílio',
    descricao:
      'Éfeso era uma das cidades mais antigas, mais ricas e mais prestigiosas do mundo greco-romano. Fundada no século X a.C. por colonos jônios na costa ocidental da Ásia Menor (atual Turquia), Éfeso havia sido a capital da província romana da Ásia e uma das sete igrejas do Apocalipse (Ap 2,1–7). No século I d.C., o apóstolo Paulo havia passado cerca de três anos em Éfeso (At 19), e a tradição local afirmava que o apóstolo João havia vivido ali seus últimos anos e que a Virgem Maria havia residido em uma casa nas colinas próximas (a atual "Casa de Maria" em Bülbüldağı, um local de peregrinação até hoje). No século V, Éfeso era uma cidade próspera com cerca de 50.000 habitantes, um porto ativo (embora em processo de assoreamento), templos pagãos em ruínas (o famoso Templo de Ártemis, uma das Sete Maravilhas do Mundo Antigo, havia sido destruído em 401 por ordem do imperador Arcádio), e uma comunidade cristã vibrante e devotamente mariana. A Igreja de Santa Maria (Theotokos), onde o concílio se reuniu, era uma basílica construída no século IV sobre as ruínas de um museu romano (o "Museion"), e sua dedicação à Theotokos era um testemunho da antiguidade do culto mariano na cidade. A escolha de Éfeso como sede do concílio foi, portanto, carregada de simbolismo teológico: julgar Nestório — o homem que negava que Maria era Mãe de Deus — na cidade mais mariana do Oriente, dentro de uma igreja dedicada à Theotokos, era uma declaração de intenções que não escapava a ninguém. Além do simbolismo, havia razões práticas: Éfeso era acessível por mar para os bispos do Egito, da Palestina e da Grécia, e por terra para os bispos da Ásia Menor e da Síria. O bispo local, Memnon, era um aliado incondicional de Cirilo e controlava a infraestrutura da cidade, o que garantia ao partido alexandrino uma vantagem logística decisiva.',
    relevanciaConciliar:
      'A escolha de Éfeso não foi neutra: foi uma decisão que favorecia Cirilo e prejudicava Nestório. Em Constantinopla, Nestório teria contado com o apoio do clero local, da corte imperial e da guarda palaciana. Em Éfeso, ele estava em território hostil: a população local era fanáticamente devota da Theotokos, o bispo Memnon era aliado de Cirilo, e as igrejas da cidade foram fechadas a Nestório e a seus partidários. Quando a multidão de Éfeso cercou a Igreja de Santa Maria na noite da Sessão I, aguardando o veredicto com tochas acesas e incenso, e explodiu em júbilo ao ouvir que Nestório havia sido deposto, ficou claro que o "cenário" do concílio havia sido escolhido com precisão cirúrgica para garantir o resultado desejado.',
  },

  // =============================================
  // 5. ÉDITOS E SACRAS IMPERIAIS
  // =============================================
  editos: [
    {
      nome: 'Sacra de Convocação do Concílio (19 de novembro de 430)',
      data: '19 de novembro de 430',
      local: 'Constantinopla',
      texto: null,
      traducao:
        'Teodósio II, Augusto, aos santíssimos bispos de todas as províncias: "Tendo chegado ao Nosso conhecimento que certas disputas sobre a fé perturbam a paz das Igrejas, e desejando que a verdade seja estabelecida de forma clara e incontestável, ordenamos que todos os metropolitas e bispos de cada província se reúnam na cidade de Éfeso, na Ásia, no próximo dia de Pentecostes, para examinar e decidir as questões que dizem respeito à fé ortodoxa. Ninguém deverá ausentar-se sem justa causa. Aqueles que não comparecerem serão julgados segundo os cânones. O conde Candidiano, Nosso representante, estará presente para manter a ordem e garantir que os trabalhos se realizem em paz."',
      importancia:
        'Esta é a sacra fundacional do concílio. Demonstra que a iniciativa partiu do imperador (não de Cirilo, como os adversários deste alegariam), e que o objetivo declarado era "estabelecer a verdade" de forma colegiada. A menção a Candidiano como "representante imperial" estabelece o controle do Estado sobre o andamento dos trabalhos. A data de Pentecostes (22 de junho de 431) foi escolhida por seu simbolismo: o dia em que o Espírito Santo desceu sobre os apóstolos era o dia mais auspicioso para um concílio que pretendia definir a fé sob a inspiração do mesmo Espírito.',
      fonte: 'ACO I.1.1, pp. 101–102; Sócrates, HE VII.34; Evágrio, HE I.3',
    },
    {
      nome: 'Sacra de Instruções ao Conde Candidiano (Primavera de 431)',
      data: 'Primavera de 431 (data exata desconhecida)',
      local: 'Constantinopla → Éfeso',
      texto: null,
      traducao:
        'Ao gloriosíssimo conde Candidiano, Nosso fiel servidor: "Ordenamos que Vossa Glória se dirija a Éfeso e ali mantenha a mais estrita ordem durante os trabalhos do santo concílio. Deverás impedir que qualquer tumulto ou violência perturbe as deliberações dos santos bispos. Deverás garantir que nenhuma questão alheia à fé seja discutida antes que a questão principal (a controvérsia sobre a Theotokos) seja resolvida. Deverás impedir que qualquer bispo abandone a cidade antes do encerramento dos trabalhos. Deverás relatar a Nós tudo o que ocorrer, para que possamos tomar as medidas necessárias. Acima de tudo, deverás garantir que todos os partidos sejam ouvidos com igualdade e que nenhuma decisão seja tomada antes que todos os bispos convocados estejam presentes."',
      importancia:
        'Esta sacra é crucial para entender a legalidade (ou ilegalidade) da Sessão I. As instruções imperiais eram claras: "nenhuma decisão antes que todos os bispos estejam presentes." Quando Cirilo abriu o concílio em 22 de junho sem esperar João de Antioquia e seus 30 bispos sírios, ele violou diretamente esta instrução imperial. Candidiano leu a sacra em voz alta na Sessão I e protestou contra a abertura prematura, mas foi ignorado pela maioria ciriliana. Este desrespeito às ordens imperiais seria a base legal do contra-concílio de João de Antioquia e da subsequente deposição de Cirilo e Memnon pelo partido joanita.',
      fonte: 'ACO I.1.1, pp. 115–117 (Gesta, Sessão I); Sócrates, HE VII.34',
    },
    {
      nome: 'Sacra de Deposição de Nestório (Outubro de 431)',
      data: 'Outubro de 431',
      local: 'Constantinopla',
      texto: null,
      traducao:
        'Teodósio II, Augusto: "Tendo o santo concílio reunido em Éfeso, por inspiração do Espírito Santo, julgado e condenado a doutrina ímpia de Nestório, e tendo os santíssimos bispos decretado sua deposição da sé episcopal de Constantinopla, Nós, por Nossa autoridade imperial, confirmamos e ratificamos esta sentença. Nestório, que foi patriarca da cidade imperial, está doravante deposto de toda dignidade episcopal e sacerdotal. Ordenamos que ele se retire para o mosteiro de Euprepius, perto de Antioquia, onde deverá viver em reclusão até que a misericórdia de Deus e a decisão da Igreja determinem seu destino. Proibimos que qualquer pessoa mantenha comunhão com ele ou defenda sua doutrina. Os bens da sé de Constantinopla serão administrados pelo clero local até a nomeação de um novo patriarca."',
      importancia:
        'Esta sacra marca a vitória definitiva do partido ciriliano e o fim da carreira eclesiástica de Nestório. A ratificação imperial da sentença conciliar transformou a decisão teológica em lei do Império: a partir deste momento, o nestorianismo era não apenas uma heresia, mas um crime contra o Estado. O exílio de Nestório para o mosteiro de Euprepius (perto de Antioquia, sua cidade de origem) foi uma humilhação pública que sinalizou a toda a cristandade que a Theotokos era agora dogma imperial.',
      fonte: 'Sócrates, HE VII.34; Evágrio, HE I.7; Teofanes, Chronographia AM 5923',
    },
    {
      nome: 'Édito Imperial contra os Nestorianos (435)',
      data: '435 d.C.',
      local: 'Constantinopla',
      texto: 'Imp(erator) Theodosius A(ugustus). Haereticorum nomen ita delendum est, ut ne aures quidem hominum Nestoriani vocabuli mentione pulsentur...',
      traducao:
        'O Imperador Teodósio, Augusto: "O nome dos hereges deve ser de tal forma apagado que nem mesmo os ouvidos dos homens sejam perturbados pela menção do nome nestoriano. Ordenamos que todos os escritos de Nestório sejam recolhidos e queimados publicamente. Proibimos que qualquer pessoa copie, possua, leia ou ensine as obras de Nestório, sob pena de confiscação de bens e exílio. Os seguidores de Nestório não serão mais chamados de cristãos, mas de simonianos (seguidores de Simão Mago), pois, como Simão, tentaram comprar a verdade de Deus com mentiras. As reuniões dos nestorianos estão proibidas em todo o Império, e seus locais de culto serão confiscados e entregues à Igreja ortodoxa."',
      importancia:
        'Este édito, incorporado ao Código Teodosiano (XVI.5.66), representa a criminalização definitiva do nestorianismo no Império Romano. A ordem de queima dos escritos de Nestório é particularmente significativa: é a razão pela qual quase nenhuma obra de Nestório sobreviveu em grego original (o Bazaar de Heracleides sobreviveu apenas em tradução siríaca, preservada pela Igreja do Oriente na Pérsia, fora do alcance do Império Romano). A reclassificação dos nestorianos como "simonianos" era uma técnica jurídica romana para deslegitimar grupos heréticos: ao associá-los a Simão Mago (o pai de todas as heresias, segundo Atos 8,9–24), o Estado os colocava fora da proteção legal concedida aos cristãos ortodoxos.',
      fonte: 'Codex Theodosianus XVI.5.66; Evágrio, HE I.7; João de Éfeso, HE II',
    },
    {
      nome: 'Sacra de Confirmação da Fórmula de União (433)',
      data: '433 d.C.',
      local: 'Constantinopla',
      texto: null,
      traducao:
        'Teodósio II, Augusto: "Tendo os santíssimos bispos Cirilo de Alexandria e João de Antioquia, por graça de Deus e mediação do santo bispo Paulo de Emesa, chegado a um acordo sobre a fé ortodoxa, e tendo ambos confessado que a Santa Virgem é Theotokos e que em Cristo há uma união de duas naturezas em uma única pessoa (prosopon) e uma única hipóstase, Nós confirmamos e ratificamos esta Fórmula de União como expressão da fé ortodoxa. Ordenamos que todos os bispos do Império a subscrevam e que o cisma entre Alexandria e Antioquia seja considerado encerrado. Aqueles que recusarem esta fórmula serão tratados como perturbadores da paz da Igreja e do Império."',
      importancia:
        'A Fórmula de União de 433 foi o documento que encerrou o cisma de dois anos entre Cirilo e João de Antioquia, e a sacra imperial de confirmação transformou este compromisso teológico em lei do Império. A Fórmula é um documento de extraordinária importância ecumênica: ela aceita a linguagem antioquena ("duas naturezas") e a linguagem alexandrina ("uma hipóstase", "Theotokos") em uma síntese que anteciparia a definição de Calcedônia (451). Sem a Fórmula de 433, Calcedônia teria sido impossível.',
      fonte: 'Cirilo, Ep. Laetentur Caeli (PG 77, 161–164); ACO I.1.4; Sócrates, HE VII.35',
    },
  ],

  // =============================================
  // 6. RELAÇÃO IGREJA-ESTADO
  // =============================================
  igrejaEstado: {
    titulo: 'A Simfonia Imperial e seus Limites: Igreja e Estado em 431',
    descricao:
      'A relação entre Igreja e Estado no Império Romano do século V era governada pelo princípio da "symphonia" (συμφωνία) — a "harmonia" entre o poder espiritual (sacerdotium) e o poder temporal (imperium). Este princípio, formulado teoricamente por Eusébio de Cesareia no século IV e praticado desde Constantino, estabelecia que o imperador e a Igreja eram dois pilares complementares da mesma ordem divina: o imperador protegia a Igreja e mantinha a paz religiosa; a Igreja orava pelo imperador e legitimava seu poder. Na prática, porém, a symphonia era uma relação de tensão permanente, especialmente em matéria de definição dogmática. O imperador convocava os concílios, fornecia a logística e a segurança, e ratificava as decisões com força de lei — mas não definia dogma. A definição dogmática era prerrogativa exclusiva dos bispos reunidos em concílio, sob a inspiração do Espírito Santo. Em Éfeso, esta distinção foi testada ao limite: Teodósio II convocou o concílio e enviou Candidiano para manter a ordem, mas não tentou impor uma solução teológica própria. No entanto, quando os resultados do concílio não foram de seu agrado (o cisma entre Cirilo e João), Teodósio tentou intervir diretamente, declarando válidas ambas as deposições (a de Nestório por Cirilo e a de Cirilo por João) — uma tentativa de "solução política" para um problema teológico que quase desastrou a Igreja. A symphonia, em Éfeso, revelou seus limites: o imperador podia convocar e ratificar, mas não podia substituir o julgamento teológico dos bispos. A lição de Éfeso seria aprendida (e repetida) em Calcedônia (451), onde o imperador Marciano e a imperatriz Pulquéria exerceram um controle mais sutil e mais eficaz sobre os trabalhos conciliares.',
    conceitos: [
      {
        termo: 'Symphonia (συμφωνία)',
        significado:
          'Harmonia entre Igreja e Estado; o imperador convoca e protege, mas não define dogma. A symphonia pressupõe que ambos os poderes (espiritual e temporal) derivam de Deus e devem cooperar para o bem da sociedade cristã. Em Éfeso, a symphonia foi severamente testada quando Teodósio II tentou impor uma solução política (reconhecer ambos os concílios rivais) a um problema que exigia uma solução teológica.',
      },
      {
        termo: 'Eusebeia (εὐσέβεια)',
        significado:
          'Piedade imperial; a virtude que legitimava o poder do imperador como "vigário de Deus" na terra. Teodósio II era considerado o modelo de eusebeia: um imperador que jejuava, orava, copiava manuscritos bíblicos e participava de debates teológicos. Sua eusebeia, porém, nem sempre se traduzia em sabedoria política: sua piedade o tornava vulnerável à influência de teólogos carismáticos (como Nestório, inicialmente) e de mulheres devotas (como Pulquéria).',
      },
      {
        termo: 'Sacrae (sacras imperiais)',
        significado:
          'Cartas imperiais com força de lei que convocavam, regulavam e ratificavam os trabalhos conciliares. As sacras de Teodósio II para Éfeso são preservadas nos Atos do Concílio (ACO) e são documentos jurídicos de primeira importância. Elas demonstram que o concílio não era uma assembleia puramente eclesiástica, mas um evento de Estado, com implicações políticas e jurídicas diretas.',
      },
      {
        termo: 'Comes domesticorum',
        significado:
          'Conde dos Domésticos; oficial militar de alta patente encarregado da guarda palaciana e, no caso de Éfeso, da segurança do concílio. Candidiano, o comes domesticorum enviado por Teodósio II, tinha instruções claras de manter a ordem e impedir decisões precipitadas. Seu fracasso em controlar a Sessão I (quando Cirilo ignorou suas ordens) é um dos episódios mais dramáticos do concílio.',
      },
      {
        termo: 'Basileus (βασιλεύς)',
        significado:
          'Rei / Imperador; o título grego do imperador romano do Oriente. O basileus era considerado o "isapóstolos" (igual aos apóstolos) em honra, mas não em autoridade sacramental. Teodósio II, como basileus, tinha o direito de convocar concílios e ratificar decisões, mas não o direito de celebrar a Eucaristia ou de definir dogma — uma distinção que seria crucial em Éfeso.',
      },
    ],
    avaliacao:
      'A avaliação histórica da relação Igreja-Estado em Éfeso é ambivalente. Por um lado, a convocação imperial foi essencial para reunir os bispos e dar autoridade legal às decisões. Sem Teodósio II, não haveria concílio. Por outro lado, a interferência imperial (a tentativa de reconhecer ambos os concílios rivais, a prisão de Cirilo e Nestório, a nomeação de Candidiano como "árbitro") quase transformou o concílio em uma farsa política. A lição de Éfeso é que a symphonia funciona melhor quando o imperador se limita a convocar e ratificar, deixando a definição dogmática inteiramente nas mãos dos bispos. Quando o imperador tenta "gerenciar" a teologia, o resultado é o caos — como demonstram os eventos de junho a outubro de 431.',
  },
}

// =============================================
// 7. CRONOLOGIA POLÍTICA (408–451)
// =============================================
export const cronologiaPolitica: EventoPolitico[] = [
  { ano: '408', evento: 'Morte de Arcádio; Teodósio II (7 anos) assume o trono oriental sob a regência de Antêmio' },
  { ano: '410', evento: 'Saque de Roma por Alarico (visigodos); o Ocidente entra em colapso irreversível' },
  { ano: '412', evento: 'Cirilo torna-se Patriarca de Alexandria; início da era ciriliana' },
  { ano: '413', evento: 'Conclusão das Muralhas Teodosianas em Constantinopla; a cidade torna-se praticamente inexpugnável' },
  { ano: '414', evento: 'Pulquéria (15 anos) assume a regência e recebe o título de Augusta; voto de virgindade' },
  { ano: '415', evento: 'Assassinato de Hipátia em Alexandria; mancha na reputação de Cirilo' },
  { ano: '418', evento: 'Concílio de Cartago condena o pelagianismo; o Papa Zósimo confirma a condenação' },
  { ano: '421', evento: 'Casamento de Teodósio II com Eudócia (Atenais); início da rivalidade Pulquéria vs Eudócia' },
  { ano: '421–422', evento: 'Guerra romano-persa; paz negociada com os sassânidas; tolerância religiosa na Pérsia' },
  { ano: '425', evento: 'Fundação da Universidade de Constantinopla (Pandidakterion) por Teodósio II' },
  { ano: '428', evento: 'Nestório é nomeado Patriarca de Constantinopla por Teodósio II; início da controvérsia Theotokos' },
  { ano: '429', evento: 'Vândalos de Genserico cruzam o Estreito de Gibraltar e invadem o norte da África' },
  { ano: '430', evento: 'Sínodo Romano (agosto): Celestino I condena Nestório e dá ultimato de 10 dias' },
  { ano: '430', evento: 'Morte de Agostinho de Hipona (28 de agosto) durante o cerco vândalo; a maior mente do Ocidente não verá Éfeso' },
  { ano: '430', evento: 'Sacra de convocação do concílio (19 de novembro): Teodósio II ordena a reunião em Éfeso' },
  { ano: '431', evento: 'Concílio de Éfeso (22 de junho – 31 de julho): condenação de Nestório, proclamação de Theotokos' },
  { ano: '431', evento: 'Contra-concílio de João de Antioquia (26–27 de junho): deposição de Cirilo e Memnon' },
  { ano: '431', evento: 'Prisão de Cirilo e Nestório por ordem de Teodósio II (setembro); posterior libertação de Cirilo' },
  { ano: '431', evento: 'Deposição formal de Nestório e exílio para o mosteiro de Euprepius (outubro)' },
  { ano: '432', evento: 'Morte do Papa Celestino I; Sisto III é eleito Papa e confirma as decisões de Éfeso' },
  { ano: '433', evento: 'Fórmula de União entre Cirilo e João de Antioquia; fim do cisma de 2 anos' },
  { ano: '435', evento: 'Édito imperial contra os nestorianos (Cod. Theod. XVI.5.66): queima de obras, proibição do nome "nestoriano"' },
  { ano: '435', evento: 'Nestório é exilado para o Oásis de Hibis (Egito), onde viverá até ~451' },
  { ano: '438', evento: 'Promulgação do Código Teodosiano (Codex Theodosianus), incluindo as leis anti-heréticas' },
  { ano: '441', evento: 'Morte de João de Antioquia; Domno II assume a sé antioquena' },
  { ano: '444', evento: 'Morte de Cirilo de Alexandria (27 de junho); Dióscoro assume a sé e radicaliza a cristologia ciriliana' },
  { ano: '447', evento: 'Terremoto devastador em Constantinopla; as Muralhas Teodosianas são parcialmente destruídas e reconstruídas em 60 dias' },
  { ano: '448', evento: 'Sínodo de Constantinopla: Eutiques é condenado por monofisismo ("uma só natureza após a união")' },
  { ano: '449', evento: 'Latrocínio de Éfeso (Ephesus II): Dióscoro reabilita Eutiques e depõe Flaviano de Constantinopla; o Papa Leão I chama o evento de "latrocinium"' },
  { ano: '450', evento: 'Morte de Teodósio II (28 de julho, queda de cavalo); Pulquéria e Marciano assumem o trono' },
  { ano: '450', evento: 'Morte de Nestório no exílio (Oásis de Hibis, Egito), pouco antes de Calcedônia' },
  { ano: '451', evento: 'Concílio de Calcedônia (IV Ecumênico): confirma Éfeso (431), rejeita o Latrocínio (449), define "uma pessoa em duas naturezas"' },
]