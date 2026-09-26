export const totalParticipantes = {
  estimativa: "~174 bispos na sessão final",
  certeza:
    "O número exato de participantes é objeto de debate entre os historiadores. As atas conciliares preservadas na edição crítica de Riedinger (ACO II.2) registram listas de assinaturas que variam conforme a sessão. A primeira sessão (7 de novembro de 680) contou com apenas ~43 bispos presentes, além dos legados papais e do imperador. O número cresceu progressivamente ao longo dos 10 meses de trabalhos, à medida que bispos de dioceses mais distantes chegavam a Constantinopla. Na sessão final (16 de setembro de 681), as atas registram ~174 assinaturas. Alguns estudiosos (como Hefele) sugerem que o número total de bispos que participaram de pelo menos uma sessão pode ter chegado a 200, mas o quórum da sessão decisiva (Sessão XVIII) foi de aproximadamente 174.",
  composicao:
    "Esmagadora maioria oriental: bispos do Patriarcado de Constantinopla (Trácia, Ásia Menor, ilhas do Egeu, Grécia continental), representando talvez 80–85% dos presentes. O Patriarcado de Antioquia foi representado por Macário e seu pequeno séquito de monges (a própria Antioquia estava sob domínio árabe). Os Patriarcados de Alexandria e Jerusalém, também sob domínio do Califado Omíada, foram representados por legados simbólicos. O Ocidente foi representado pelos 3 legados papais de Agatão I e por um pequeno número de bispos do sul da Itália e da Sicília (então sob jurisdição bizantina). Não houve participação de bispos da Gália, Hispânia, Britânia ou África proconsular.",
}

export const participantes = [
  {
    titulo: "Legados Papais de Roma (Delegação de Agatão I)",
    descricao:
      "A delegação romana era numericamente pequena (5 membros) mas teologicamente decisiva. Os legados portavam a carta dogmática de Agatão I, que seria lida na 4ª sessão e aclamada como a voz de Pedro. Sua autoridade era plenipotenciária: podiam assinar em nome do papa e de todo o Ocidente.",
    bispos: [
      {
        nome: "Teodoro",
        sede: "Roma",
        papel: "Legado principal (presbítero)",
        partido: "Diotelita (ortodoxo)",
        observacoes:
          "Presbítero da Igreja Romana e legado de maior autoridade após os bispos. Foi o primeiro a assinar as atas em nome de Roma. Leu a carta dogmática de Agatão na 4ª sessão. Sua assinatura aparece em primeiro lugar entre os legados nas listas finais.",
      },
      {
        nome: "Jorge",
        sede: "Porto (Ostia)",
        papel: "Legado (bispo de Porto)",
        partido: "Diotelita (ortodoxo)",
        observacoes:
          "Bispo de Porto, a sede suburbicária mais próxima de Roma. Participou ativamente dos debates e da verificação das fontes patrísticas. Sua presença como bispo consagrado dava peso sacramental à delegação.",
      },
      {
        nome: "João",
        sede: "Régio (Calábria)",
        papel: "Legado (bispo de Régio)",
        partido: "Diotelita (ortodoxo)",
        observacoes:
          "Bispo de Régio, na Calábria (sul da Itália, então sob domínio bizantino). Sua diocese era bilíngue (grego/latim), o que o tornava particularmente útil como intermediário entre as delegações oriental e ocidental.",
      },
      {
        nome: "João",
        sede: "Roma",
        papel: "Diácono e representante papal",
        partido: "Diotelita (ortodoxo)",
        observacoes:
          "Diácono da Igreja Romana. Acompanhou os legados como secretário e auxiliar. Sua função era principalmente administrativa e documental.",
      },
      {
        nome: "Constantino",
        sede: "Roma",
        papel: "Subdiácono e representante papal",
        partido: "Diotelita (ortodoxo)",
        observacoes:
          "Subdiácono da Igreja Romana. Membro júnior da delegação, responsável por tarefas logísticas e de comunicação entre Roma e Constantinopla.",
      },
    ],
  },
  {
    titulo: "Patriarcado de Constantinopla (Igreja Anfitriã)",
    descricao:
      "O Patriarcado de Constantinopla fornecia a vasta maioria dos bispos presentes. A maioria era inicialmente simpatizante do monotelismo ou pelo menos ambígua, tendo sido formada sob a doutrina oficial do Ecthesis e do Typos. Ao longo do concílio, a leitura das fontes patrísticas e a pressão dos legados papais levaram a uma conversão progressiva à posição diotelita.",
    bispos: [
      {
        nome: "Jorge I",
        sede: "Constantinopla",
        papel: "Patriarca Ecumênico (679–686)",
        partido: "Inicialmente ambíguo → Diotelita",
        observacoes:
          "Patriarca de Constantinopla durante todo o concílio. Sua posição teológica inicial era ambígua: não era um monotelita convicto como Macário, mas tampouco havia se pronunciado claramente a favor das duas vontades. Durante as sessões, aceitou a carta dogmática de Agatão e assinou o Horos final. Sua conversão foi essencial para a unanimidade do concílio. Presidiu como anfitrião, sentado à esquerda do imperador.",
      },
      {
        nome: "Teodoro de Melitene",
        sede: "Melitene (Armênia Menor)",
        papel: "Bispo metropolita",
        partido: "Diotelita",
        observacoes:
          "Um dos primeiros bispos orientais a se alinhar abertamente com a posição diotelita. Sua diocese na fronteira armênia tinha tradição de resistência ao monotelismo.",
      },
      {
        nome: "Teodósio de Gangra",
        sede: "Gangra (Paflagônia)",
        papel: "Bispo metropolita",
        partido: "Inicialmente monotelita → Diotelita",
        observacoes:
          "Representante da província da Paflagônia. Inicialmente relutante, foi convencido pela leitura das fontes patrísticas nas sessões 5–7.",
      },
      {
        nome: "Constantino de Apameia",
        sede: "Apameia (Síria Secunda)",
        papel: "Bispo metropolita (no exílio)",
        partido: "Diotelita",
        observacoes:
          "Sua diocese estava sob domínio árabe, mas ele residia em território bizantino. Representava a tradição antioquena calcedoniana (melquita).",
      },
      {
        nome: "Basílio de Gortina",
        sede: "Gortina (Creta)",
        papel: "Bispo metropolita",
        partido: "Diotelita",
        observacoes:
          "Representante da ilha de Creta. Creta era um bastião da ortodoxia calcedoniana e diotelita, em parte pela influência dos monges palestinos refugiados.",
      },
    ],
  },
  {
    titulo: "Patriarcado de Antioquia (Delegação Monotelita)",
    descricao:
      "A delegação de Antioquia era a menor e a mais controversa do concílio. O patriarca Macário era o único defensor convicto do monotelismo entre os participantes de alto escalão. Sua presença era necessária para dar legitimidade ao julgamento, mas sua resistência obstinada acabou levando à sua deposição.",
    bispos: [
      {
        nome: "Macário",
        sede: "Antioquia (residia em Constantinopla)",
        papel: "Patriarca de Antioquia",
        partido: "Monotelita convicto",
        observacoes:
          "O principal acusado do concílio. Macário era um monotelita intransigente que acreditava sinceramente na doutrina de uma vontade. Apresentou citações patrísticas em sua defesa (sessões 5–6), mas muitas foram demonstradas como adulteradas ou tiradas de contexto. Recusou retratar-se mesmo após a condenação unânime. Foi deposto na 8ª sessão (7 de março de 681) e enviado a Roma para penitência num mosteiro, onde morreu. Sua teimosia contrastou com a flexibilidade de Jorge I de Constantinopla.",
      },
      {
        nome: "Estêvão",
        sede: "Monge de Macário",
        papel: "Discípulo e secretário de Macário",
        partido: "Monotelita",
        observacoes:
          "Monge e principal auxiliar de Macário. Foi flagrado portando documentos patrísticos adulterados (interpolações em textos de Gregório de Nazianzo e Pseudo-Dionísio). Deposto na 9ª sessão (19 de março de 681) e enviado a Roma junto com Macário.",
      },
      {
        nome: "Policrônio",
        sede: "Monge (origem desconhecida)",
        papel: "Monge monotelita aliado de Macário",
        partido: "Monotelita",
        observacoes:
          "Figura menor mas notória pelo episódio do 'milagre fracassado' na 10ª sessão. Tentou provar a verdade do monotelismo ressuscitando um cadáver diante da assembleia. O morto não respondeu, e Policrônio foi ridicularizado e deposto. O episódio ilustra o desespero da causa monotelita nos estágios finais do concílio.",
      },
    ],
  },
  {
    titulo: "Patriarcados de Alexandria e Jerusalém (Representação Simbólica)",
    descricao:
      "As sedes de Alexandria e Jerusalém estavam sob domínio do Califado Omíada desde 641 e 638, respectivamente. Seus patriarcas calcedonianos (melquitas) eram figuras marginais, sem jurisdição efetiva sobre as comunidades cristãs locais (dominadas por coptas e siríacos não-calcedonianos). A representação no concílio foi puramente simbólica, mas necessária para cumprir o requisito de ecumenicidade (presença dos cinco patriarcados).",
    bispos: [
      {
        nome: "Legados de Alexandria",
        sede: "Alexandria (sede sob domínio árabe)",
        papel: "Representantes do trono alexandrino",
        partido: "Diotelita (por alinhamento com Roma)",
        observacoes:
          "Os legados alexandrinos tinham autoridade limitada e participaram principalmente das sessões finais. Sua presença era mais formal do que substantiva. A memória de Ciro de Alexandria (autor do Pacto de União monoenergista de 633) pairava sobre o concílio como um dos anatematizados.",
      },
      {
        nome: "Legados de Jerusalém",
        sede: "Jerusalém (sede sob domínio árabe)",
        papel: "Representantes do trono jerosolimitano",
        partido: "Diotelita (por tradição de Sofrônio)",
        observacoes:
          "A sede de Jerusalém tinha uma importância simbólica desproporcional: fora o patriarca Sofrônio de Jerusalém (634–638) quem primeiro denunciara o monoenergismo. Sua Carta Sinodal foi lida no concílio e aclamada como ortodoxa. Os legados jerosolimitanos assinaram o Horos em nome dessa tradição.",
      },
    ],
  },
  {
    titulo: "Bispos da Diáspora e Províncias Ocidentais Bizantinas",
    descricao:
      "Um pequeno número de bispos do sul da Itália, Sicília e Ilírico participou do concílio, representando as províncias ocidentais ainda sob controle bizantino. Sua presença era numericamente insignificante mas juridicamente importante para demonstrar a participação do Ocidente além da delegação papal.",
    bispos: [
      {
        nome: "Bispos da Sicília e Calábria",
        sede: "Diversas (Siracusa, Catânia, Régio, etc.)",
        papel: "Bispos sufragâneos",
        partido: "Diotelita (por alinhamento com Roma)",
        observacoes:
          "A Sicília e a Calábria eram províncias bizantinas de língua grega com forte lealdade a Roma. Seus bispos assinaram o Horos sem resistência. A Sicília era também o local do assassinato de Constante II (668), um lembrete dramático do fracasso do monotelismo imperial.",
      },
      {
        nome: "Bispos do Ilírico Oriental",
        sede: "Diversas (Tessalônica, Dirráquio, etc.)",
        papel: "Bispos metropolitanos e sufragâneos",
        partido: "Diotelita",
        observacoes:
          "O Ilírico Oriental (Grécia setentrional, Albânia) estava sob jurisdição de Constantinopla mas mantinha laços com Roma. Seus bispos participaram das sessões finais e assinaram o Horos.",
      },
    ],
  },
]

export const monotelitas = {
  titulo: "Os Monotelitas no Concílio: A Minoria Resistente",
  descricao:
    "O monotelismo, que fora a doutrina oficial do Império Bizantino por cerca de 40 anos (638–680), foi defendido no concílio por um grupo surpreendentemente pequeno. O único defensor de alto escalão era o patriarca Macário de Antioquia, acompanhado por dois monges (Estêvão e Policrônio). A vasta maioria dos bispos que haviam sido formados sob o Ecthesis e o Typos optou por aceitar a carta dogmática de Agatão e a definição diotelita sem resistência significativa. Isso não significa que todos fossem diotelitas convictos de longa data; muitos eram pragmáticos que reconheciam a mudança de vento político e teológico. A fraqueza numérica dos monotelitas no concílio reflete o fato de que, com a perda das províncias orientais para o Islã, o monotelismo havia perdido sua base social e sua razão de ser política.",
  crenca:
    "Uma só vontade (hen thelema) e uma só operação (mia energeia) em Cristo. A vontade humana de Cristo teria sido 'absorvida' ou 'subsumida' pela vontade divina, de modo que não havia verdadeira dualidade volitiva. A fórmula pretendia salvaguardar a unidade da pessoa de Cristo, mas na prática anulava a integridade de sua humanidade.",
  lideres: [
    "Macário de Antioquia (patriarca, deposto na 8ª sessão)",
    "Estêvão (monge de Macário, deposto na 9ª sessão)",
    "Policrônio (monge, deposto na 10ª sessão)",
  ],
  desfecho:
    "Macário foi formalmente deposto do patriarcado de Antioquia na 8ª sessão (7 de março de 681) após recusar repetidamente retratar-se. Foi enviado a Roma, onde foi confinado num mosteiro até sua morte. Estêvão foi deposto na 9ª sessão após ser flagrado com documentos falsificados. Policrônio foi deposto na 10ª sessão após o fracasso de seu 'milagre'. Todos foram anatematizados no Horos final. O patriarcado de Antioquia foi entregue a um sucessor calcedoniano/diotelita.",
  ironia:
    "O monotelismo, que fora imposto por três imperadores (Heráclio, Constante II e, inicialmente, Constantino IV) com perseguições, exílios e mutilações, foi defendido no concílio que o julgou por apenas um punhado de bispos e monges. A doutrina que custou a vida de Martinho I e a língua de Máximo, o Confessor, não encontrou quase nenhum defensor quando finalmente foi submetida ao escrutínio público.",
}

export const ausencias = {
  titulo: "Ausências Notáveis e suas Razões",
  descricao:
    "As ausências mais significativas no concílio foram as dos patriarcas de Alexandria e Jerusalém (cujas sedes estavam sob domínio do Califado Omíada) e a do próprio Papa Agatão I (que, por idade e distância, enviou legados). Além disso, nenhum bispo das igrejas não-calcedonianas (copta, siríaca, armênia, etíope) foi convidado ou teria comparecido, o que é compreensível dado que o concílio reafirmava Calcedônia — a definição que essas igrejas rejeitavam desde 451.",
  ausentes: [
    {
      nome: "Papa Agatão I",
      sede: "Roma",
      razao:
        "Idade avançada (a tradição lhe atribui 107 anos) e a distância de Constantinopla. Agatão enviou legados com autoridade plenipotenciária e uma carta dogmática detalhada que serviu como base teológica do concílio. Sua ausência física não diminuiu sua influência: a carta foi lida na 4ª sessão e aclamada com o grito 'Pedro falou por Agatão!'.",
      impacto:
        "Agatão morreu em 10 de janeiro de 681, durante o concílio (entre as sessões 5 e 6). O concílio prosseguiu sem papa reinante por mais de 8 meses, até a consagração de Leão II em agosto de 682. A morte de Agatão criou uma situação canônica delicada: o concílio havia sido convocado em comunhão com um papa que já não estava vivo.",
    },
    {
      nome: "Patriarca de Alexandria (sede melquita)",
      sede: "Alexandria",
      razao:
        "Alexandria estava sob domínio do Califado Omíada desde 641. O patriarca calcedoniano (melquita) era uma figura marginal, sem jurisdição efetiva sobre a população copta (não-calcedoniana). A viagem a Constantinopla era perigosa e politicamente complicada.",
      impacto:
        "A ausência de Alexandria era simbolicamente significativa: fora em Alexandria que o monoenergismo fora implementado pela primeira vez (Pacto de Ciro, 633). A memória de Ciro foi condenada postumamente no concílio. A representação por legados foi considerada suficiente para a ecumenicidade.",
    },
    {
      nome: "Patriarca de Jerusalém (sede melquita)",
      sede: "Jerusalém",
      razao:
        "Jerusalém estava sob domínio árabe desde 638. O patriarca melquita vivia sob o estatuto de dhimmi e não tinha liberdade de movimento. Como Alexandria, foi representado por legados.",
      impacto:
        "A ausência física do patriarca de Jerusalém era compensada pela presença espiritual de Sofrônio (patriarca 634–638), cuja Carta Sinodal contra o monoenergismo foi lida e aclamada no concílio. Sofrônio, embora morto há mais de 40 anos, foi o verdadeiro 'pai espiritual' da definição diotelita.",
    },
    {
      nome: "Bispos das Igrejas Não-Calcedonianas",
      sede: "Egito (copta), Síria (siríaca), Armênia, Etiópia",
      razao:
        "As igrejas não-calcedonianas (miafisitas) rejeitavam a definição de Calcedônia (451) e, portanto, não reconheciam a legitimidade de um concílio que a reafirmava. Além disso, suas hierarquias estavam sob domínio árabe e fora do alcance imperial. Nenhuma tentativa de convite foi feita.",
      impacto:
        "A ausência dos não-calcedonianos tornou o concílio irrelevante para a reconciliação com essas igrejas — mas essa reconciliação já não era o objetivo, dado que suas províncias estavam perdidas para o Islã. O concílio pôde, assim, reafirmar a ortodoxia calcedoniana sem concessões.",
    },
    {
      nome: "Bispos do Ocidente Latino (Gália, Hispânia, Britânia)",
      sede: "Diversas",
      razao:
        "A distância, as dificuldades de viagem e a instabilidade política (reinos lombardos na Itália, visigodos na Hispânia, merovíngios na Gália) tornavam a participação impraticável. A Britânia foi representada indiretamente pelo Sínodo de Hatfield (679), cujas atas foram enviadas a Roma e incorporadas à carta de Agatão.",
      impacto:
        "Menor do que parece: a delegação papal representava todo o Ocidente latino com autoridade plenipotenciária. A carta dogmática de Agatão havia sido aprovada por 125 bispos no Sínodo de Roma (680), o que lhe dava representatividade ocidental suficiente.",
    },
  ],
}