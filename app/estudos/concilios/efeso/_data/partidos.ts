export const resumoPartidos = `A controvérsia que culminou no Concílio de Éfeso (431 d.C.) não pode ser reduzida a uma disputa pessoal entre Cirilo de Alexandria e Nestório de Constantinopla. Trata-se, em sua raiz mais profunda, do choque entre duas tradições teológicas centenárias — a Escola de Alexandria e a Escola de Antioquia — cada uma com sua própria hermenêutica bíblica, seu vocabulário cristológico e sua ênfase soteriológica distintiva. Alexandria, herdeira de Atanásio e de uma leitura alegórico-tipológica das Escrituras, insistia na unidade ontológica do Verbo encarnado e na linguagem da "mia physis" (uma natureza). Antioquia, formada por Diodoro de Tarso e Teodoro de Mopsuéstia, privilegiava a leitura histórico-literal e a distinção real entre as duas naturezas de Cristo, temendo que a ênfase na unidade levasse ao apolinarismo.

A esse embate teológico somavam-se atores de peso político e eclesiástico: o bispado de Roma, sob Celestino I, que via na defesa da Theotokos uma extensão natural da fé nicena e uma oportunidade de reafirmar sua primazia apostólica; e a corte imperial de Constantinopla, onde Teodósio II e sua irmã Pulquéria oscilavam entre o apoio a Nestório (protegido do eunuco Crisáfio) e a piedade mariana popular que favorecia Cirilo. O resultado foi um concílio que, embora limitado em escopo dogmático, reconfigurou permanentemente o mapa teológico e político do cristianismo oriental.`

export const espectroTeologico: string[] = [
  'Apolinarismo extremo (uma natureza divina absorvendo a alma humana, sem nous humano) — condenado em Constantinopla I (381), mas acusado como espantalho contra Cirilo pelos antioquenos',
  'Cirilianismo clássico (mia physis tou Theou Logou sesarkomene — "uma natureza do Verbo de Deus encarnada"): unidade hipostática real, sem confusão de naturezas, com a carne do Verbo sendo vivificante e própria do Logos',
  'Posição de João de Antioquia e dos orientais moderados (duas naturezas reais em uma única pessoa/prosopon; aceitação da Theotokos com ressalvas explicativas; rejeição dos Doze Anátemas de Cirilo como apolinaristas)',
  'Nestorianismo moderado / antioqueno padrão (Christotokos como termo preferencial; duas naturezas em synapheia — conjunção moral e voluntária; um prosopon de união, mas dois sujeitos operacionais distintos)',
  'Nestorianismo radical / teodoriano extremo (dois filhos — o Filho de Deus e o filho de Maria; dois sujeitos de predicação; Theodochos — "receptor de Deus" — como título máximo para o homem Jesus; a Encarnação como habitação do Verbo num templo humano)',
  'Posição romana (alinhamento quase total com Cirilo; ênfase na unidade de pessoa do Verbo encarnado; autoridade apostólica petrina como árbitro da ortodoxia; rejeição categórica de Christotokos como insuficiente)',
  'Posição imperial teodosiana (oscilante entre a piedade mariana de Pulquéria, que favorecia Cirilo, e a influência do camareiro Crisáfio, que protegia Nestório; preocupação primária com a unidade do império e a paz eclesiástica)'
]

export const partidos = [
  {
    nome: 'Escola Alexandrina (Partido de Cirilo)',
    nomeAlternativo: 'Cirilianos; Miafisitas (anacronismo retrojetado); Alexandrinos',
    lider: 'Cirilo de Alexandria (patriarca 412–444)',
    periodo: 'Séc. III–V (tradição de Atanásio → Teófilo → Cirilo)',
    termoChave: 'Mia physis tou Theou Logou sesarkomene (μία φύσις τοῦ Θεοῦ Λόγου σεσαρκωμένη) — "Uma natureza do Verbo de Deus encarnada"',
    descricao: 'A Escola de Alexandria, fundada na tradição catequética de Panteno e Clemente e consolidada teologicamente por Atanásio, operava com uma hermenêutica alegórico-tipológica que via na Escritura a revelação do mistério do Verbo encarnado como centro absoluto da fé. Sua cristologia partia do sujeito divino — o Logos — e afirmava que a Encarnação era a assunção real e ontológica da carne humana pelo próprio Verbo, de modo que todas as predicações (nascimento, sofrimento, morte) referiam-se a um único sujeito: o Deus-Verbo feito homem. A soteriologia alexandrina seguia o princípio atanasiano de que "o que não foi assumido não foi curado" (Gregório de Nazianzo, Ep. 101), exigindo que o próprio Deus fosse o sujeito da Encarnação e da redenção.',
    posicaoTheotokos: 'Defende veementemente e incondicionalmente. Para Cirilo, negar a Theotokos é negar a realidade da Encarnação: se o Verbo se uniu à carne no seio de Maria, a pessoa que dela nasceu é Deus, e Maria é portanto Mãe de Deus.',
    cristologia: 'Cirilo ensina a kath\' hypostasin henosis (união segundo a hipóstase): o Verbo divino, segunda pessoa da Trindade, uniu a si mesmo a carne humana animada por alma racional no momento da concepção, formando uma única hipóstase composta (mia hypostasis synthetos). Não há "dois filhos" nem "dois sujeitos" — há um só Filho que é simultaneamente consubstancial ao Pai segundo a divindade e consubstancial a nós segundo a humanidade. A expressão "mia physis sesarkomene", herdada de Atanásio (e por ele atribuída — erroneamente — a Atanásio, quando na verdade provém de Apolinário), não nega a humanidade real de Cristo, mas afirma que a "natureza" (physis) do Verbo, após a Encarnação, é uma natureza encarnada, não uma natureza nua e desencarnada. A carne de Cristo é "vivificante" (zoopoios) porque pertence ao próprio Logos.',
    argumentosPrincipais: [
      'Jo 1,14: "O Verbo se fez carne" (ho Logos sarx egeneto) — o sujeito da Encarnação é o próprio Logos, não um homem separado',
      'Lc 1,43: Isabel chama Maria "a mãe do meu Senhor" (hē mētēr tou Kyriou mou) — o "Senhor" é o Verbo divino',
      'Gl 4,4: "Deus enviou seu Filho, nascido de mulher" — o Filho de Deus é o mesmo que nasceu de Maria',
      'Hb 2,14: "Participou igualmente de carne e sangue" — o sujeito que participa é o mesmo Filho eterno',
      'Princípio soteriológico de Atanásio (De Incarnatione 54): "Deus se fez homem para que o homem se tornasse deus" — a deificação exige que o sujeito da Encarnação seja o próprio Deus'
    ],
    refutacao: 'Os antioquenos acusavam Cirilo de apolinarismo: ao falar de "uma natureza" e ao atribuir o sofrimento ao Verbo, ele estaria confundindo as naturezas e negando a humanidade plena de Cristo. Teodoreto de Ciro, em sua Refutação dos Doze Anátemas, argumentou que a linguagem ciriliana eliminava a distinção real entre divindade e humanidade, tornando a Encarnação uma mera aparência (dokesis). André de Samósata acusou o Anátema 12 ("o Verbo sofreu na carne") de teopasquismo herético.',
    baseGeografica: 'Egito (Alexandria e Tebaida), Palestina (Jerusalém e mosteiros), parte da Ásia Menor ocidental, Roma (por aliança)',
    forcaNumerica: '~150–200 bispos na sessão de abertura de 22 de junho de 431; a maioria esmagadora do concílio após a chegada dos egípcios',
    statusNoConcilio: 'Vencedor absoluto; sua teologia foi proclamada ortodoxa; Nestório foi deposto; os Doze Anátemas foram aprovados na Sessão I; a Theotokos foi dogmatizada'
  },
  {
    nome: 'Escola Antioquena (Partido de Nestório e Teodoro)',
    nomeAlternativo: 'Nestorianos; Antioquenos; Orientais (hoi Anatolikoi); Diodorianos',
    lider: 'Nestório de Constantinopla (patriarca 428–431); teólogo de referência: Teodoro de Mopsuéstia (†428)',
    periodo: 'Séc. IV–V (Diodoro de Tarso → Teodoro de Mopsuéstia → Nestório → Teodoreto de Ciro)',
    termoChave: 'Synapheia (συνάφεια) — "conjunção" ou "associação" das duas naturezas; Christotokos (Χριστοτόκος) — "Mãe de Cristo"',
    descricao: 'A Escola de Antioquia, formada na tradição exegética de Luciano de Antioquia e sistematizada por Diodoro de Tarso e Teodoro de Mopsuéstia, privilegiava a leitura histórico-literal (historia) das Escrituras e insistia na integridade e completude de cada natureza de Cristo. Para os antioquenos, o perigo teológico mais grave era o apolinarismo — a confusão das naturezas — e por isso enfatizavam que o Verbo divino e o homem Jesus, embora unidos, permaneciam distintos em suas operações e propriedades. A soteriologia antioquena valorizava a obediência livre do homem Jesus como modelo e causa instrumental da salvação humana.',
    posicaoTheotokos: 'Rejeita o uso exclusivo de Theotokos como enganoso e potencialmente herético. Prefere Christotokos ("Mãe de Cristo") ou, no máximo, aceita Theotokos e Anthropotokos ("Mãe do Homem") em conjunto. Nestório argumentava que Maria gerou o homem Jesus, não a divindade eterna do Verbo, e que chamar Maria de "Mãe de Deus" sugeria que a divindade teve origem no tempo.',
    cristologia: 'A cristologia antioquena distingue claramente as duas naturezas (physis) — divina e humana — e fala de uma "conjunção" (synapheia) ou "associação" entre elas no nível do prosopon (pessoa exterior/manifestação). Teodoro de Mopsuéstia falava de duas naturezas e dois sujeitos (hypostaseis) unidos em um único prosopon de união. Nestório, seguindo essa lógica, insistia que as predicações divinas (eternidade, onipotência) e humanas (nascimento, fome, sofrimento) deviam ser atribuídas às respectivas naturezas, não ao mesmo sujeito indiferenciado. O Verbo "habita" no homem Jesus como num templo (cf. Jo 2,19-21), e a união é uma união de boa vontade (eudokia) e de dignidade, não uma fusão ontológica.',
    argumentosPrincipais: [
      'Hb 2,17: "Tornou-se semelhante aos irmãos em tudo" — a humanidade de Cristo deve ser completa e real, não absorvida pela divindade',
      'Hb 5,7-8: "Ofereceu preces e súplicas com grande clamor e lágrimas... aprendeu a obediência pelo sofrimento" — o sujeito que sofre e aprende é o homem Jesus, não o Verbo impassível',
      'Mc 13,32: "Daquele dia ninguém sabe, nem o Filho" — se o Filho ignora algo, há uma distinção real entre a natureza divina (onisciente) e a humana (limitada)',
      'Lc 2,52: "Jesus crescia em sabedoria, estatura e graça" — o crescimento é próprio da natureza humana, não da divina',
      'Princípio teológico: a impassibilidade divina (apatheia) exige que o Verbo, como Deus, não possa sofrer; o sofrimento pertence exclusivamente à natureza humana'
    ],
    refutacao: 'Cirilo respondia que a distinção antioquena levava inevitavelmente a "dois filhos" e "dois sujeitos", destruindo a unidade da Encarnação. Se o Verbo apenas "habita" no homem Jesus como num templo, a Encarnação não é real mas meramente moral — uma repetição do erro de Paulo de Samósata (condenado em 268). Além disso, a recusa da Theotokos implicava que a pessoa nascida de Maria não era o Verbo, o que tornava a redenção impossível, pois apenas Deus pode salvar.',
    baseGeografica: 'Síria (Antioquia), Mesopotâmia (Edessa, Nísibis), parte da Ásia Menor oriental (Cilícia, Capadócia parcial), Pérsia (após 431)',
    forcaNumerica: '~68 bispos no contra-concílio de João de Antioquia (chegados atrasados em 26 de junho de 431); minoria significativa mas numericamente inferior',
    statusNoConcilio: 'Derrotado; Nestório foi deposto e excomungado; seus escritos foram condenados; os bispos que aderiram ao contra-concílio foram suspensos até retratação'
  },
  {
    nome: 'Partido Romano (Delegação de Celestino I)',
    nomeAlternativo: 'Legados papais; Partido petriniano; Ocidentais',
    lider: 'Papa Celestino I (422–432); legados em Éfeso: Arcádio, Projeto (bispos) e Filipe (presbítero)',
    periodo: 'Séc. V (pontificado de Celestino I e Leão I)',
    termoChave: 'Auctoritas apostolicae sedis — "Autoridade da Sé Apostólica"; consensus universalis',
    descricao: 'O bispado de Roma, sob Celestino I, interveio na controvérsia nestoriana com uma clareza e rapidez notáveis. Já em 430, um sínodo romano havia condenado as doutrinas de Nestório e dado a Cirilo um ultimato de dez dias para que Nestório se retratasse. Roma via na defesa da Theotokos uma extensão lógica da fé de Niceia e na cristologia de Cirilo uma expressão fiel da tradição ocidental, que desde Tertuliano (Adversus Praxean) insistia na unidade de pessoa do Verbo encarnado. A delegação romana chegou atrasada a Éfeso (10 de julho de 431), após a Sessão I, mas ratificou plenamente as decisões já tomadas.',
    posicaoTheotokos: 'Defende integralmente, alinhada com Cirilo. Celestino I já havia declarado em 430 que a negação da Theotokos era incompatível com a fé católica. O presbítero Filipe, ao chegar em Éfeso, declarou que "a bem-aventurada Virgem Maria é verdadeiramente Theotokos, Mãe de Deus".',
    cristologia: 'A cristologia romana seguia a tradição latina de Tertuliano (una persona in duabus substantiis) e de Hilário de Poitiers, que afirmava a unidade de pessoa sem confusão de substâncias. Roma não entrava nas sutilezas do vocabulário grego (physis vs. hypostasis), mas insistia na unidade do sujeito crístico e na realidade da Encarnação. A posição romana era essencialmente ciriliana em conteúdo, embora com menos ênfase na linguagem da "mia physis".',
    argumentosPrincipais: [
      'Autoridade petrina (Mt 16,18-19): Roma como árbitro final da ortodoxia, com poder de vincular e desvincular',
      'Tradição litúrgica romana: o uso de Theotokos já estava presente na oração "Sub tuum praesidium" (papiro Rylands 470, ~250 d.C.)',
      'Tertuliano, Adversus Praxean 27: "Vemos a dupla condição (status) de Cristo, não confundida mas unida em uma pessoa"',
      'Consenso dos Padres: a unanimidade patrística em favor da Theotokos (Atanásio, Gregório Nazianzeno, Ambrósio)',
      'Lógica soteriológica: se o sujeito da Encarnação não é o próprio Verbo, a redenção é obra de uma criatura e portanto insuficiente'
    ],
    refutacao: 'Os antioquenos não atacavam diretamente Roma, mas argumentavam que o Papa havia sido mal informado por Cirilo e que a condenação de Nestório fora precipitada. Nestório, em suas cartas a Celestino, tentou explicar que sua posição era ortodoxa e que Cirilo havia distorcido seus ensinamentos.',
    baseGeografica: 'Itália, Gália, Norte da África, Ilírico',
    forcaNumerica: '3 legados (2 bispos e 1 presbítero) + o peso simbólico da Sé de Pedro',
    statusNoConcilio: 'Aliado decisivo de Cirilo; a ratificação romana conferiu legitimidade ecumênica às decisões de Éfeso; a chegada tardia dos legados não invalidou a Sessão I'
  },
  {
    nome: 'Partido Imperial (Corte de Teodósio II)',
    nomeAlternativo: 'Facção palaciana; Teodosianos; Pulquerianos (após 431)',
    lider: 'Imperador Teodósio II (408–450); Imperatriz Pulquéria (regente de facto); Camareiro Crisáfio (até 450)',
    periodo: '408–450 (reinado de Teodósio II)',
    termoChave: 'Eirene ekklesiastike (εἰρήνη ἐκκλησιαστική) — "Paz eclesiástica"; Eusebeia (εὐσέβεια) — "Piedade imperial"',
    descricao: 'A corte imperial de Constantinopla não constituía um partido teológico propriamente dito, mas um ator político de primeira grandeza cuja intervenção moldou decisivamente o curso do concílio. Teodósio II, um imperador piedoso e erudito (patrocinador do Codex Theodosianus), convocou o concílio com o objetivo de restaurar a paz eclesiástica, não de definir dogmas. Sua posição oscilou ao longo de 431: inicialmente favorável a Nestório (seu nomeado), depois pressionado por Pulquéria — cuja piedade mariana era profunda e pública — e pela revolta popular em Éfeso contra o patriarca. O camareiro eunuco Crisáfio, protegido de Nestório, tentou manter o equilíbrio, mas a força da opinião pública e a habilidade política de Cirilo acabaram por inclinar a balança.',
    posicaoTheotokos: 'Oscilante. Teodósio II inicialmente tolerou a posição de Nestório, mas Pulquéria era devota ferrenha da Theotokos e via na negação do título um insulto pessoal à Virgem. Após o concílio, a corte aceitou a Theotokos como dogma e a piedade mariana tornou-se parte da ideologia imperial.',
    cristologia: 'A corte não tinha uma cristologia própria. Teodósio II buscava uma fórmula de compromisso que mantivesse a unidade do império. Sua preocupação era política e pastoral: evitar cismas, manter a lealdade das províncias orientais (Egito e Síria) e preservar a autoridade imperial sobre a Igreja (cesaropapismo incipiente).',
    argumentosPrincipais: [
      'Unidade imperial: a controvérsia teológica ameaçava a coesão do império, especialmente no Oriente (Egito vs. Síria)',
      'Autoridade imperial sobre concílios: Teodósio convocou, presidiu indiretamente e ratificou as decisões (sacra imperial)',
      'Piedade mariana de Pulquéria: a Augusta havia consagrado sua virgindade a Maria e via a Theotokos como causa pessoal',
      'Precedente de Constantino e Teodósio I: o imperador como guardião da ortodoxia e árbitro de concílios',
      'Ordem pública: a violência popular em Éfeso (a multidão gritava "Theotokos!" nas ruas) exigia uma resolução rápida'
    ],
    refutacao: 'Cirilo acusava a corte de ser manipulada por Crisáfio e de proteger a heresia nestoriana por interesses políticos. Os antioquenos, por sua vez, acusavam Cirilo de usar a multidão e a violência para coagir os bispos e o representante imperial, o conde Candidiano.',
    baseGeografica: 'Constantinopla (Palácio Sagrado), Trácia, Bitínia',
    forcaNumerica: 'Poder militar e administrativo do império; o conde Candidiano comandava as tropas em Éfeso; Pulquéria controlava a rede de mosteiros e conventos da capital',
    statusNoConcilio: 'Árbitro formal; inicialmente ambíguo, mas acabou ratificando a deposição de Nestório (agosto de 431) e exilando-o (435). A influência de Pulquéria foi decisiva para o resultado final.'
  }
]

export const quemFoiCondenadoPorNome = {
  titulo: 'Quem Foi Condenado por Nome em Éfeso',
  observacaoGeral: 'A condenação principal e mais célebre do Concílio de Éfeso recaiu sobre Nestório, patriarca de Constantinopla, cuja deposição foi o ato central da Sessão I (22 de junho de 431). Além de Nestório, o concílio tomou medidas disciplinares contra outros indivíduos e grupos, embora com menor proeminência dogmática. É importante notar que Teodoro de Mopsuéstia (†428), o verdadeiro arquiteto intelectual da cristologia "nestoriana", não foi condenado nominalmente em Éfeso — sua condenação só ocorreria mais de um século depois, no II Concílio de Constantinopla (553), na controvérsia dos Três Capítulos.',
  detalhes: [
    'Nestório de Constantinopla: deposto do episcopado, excomungado e anatematizado na Sessão I de 22 de junho de 431. A sentença foi lida publicamente e afixada nas portas da igreja de Santa Maria em Éfeso. Motivo: recusa em aceitar o título Theotokos e ensino de uma cristologia de "dois sujeitos" incompatível com a fé de Niceia.',
    'Escritos de Nestório: todas as suas cartas, homilias e tratados cristológicos foram condenados e ordenados à destruição (Cânon 6). A posse ou divulgação de seus escritos tornou-se crime punível com deposição (clérigos) ou excomunhão (leigos).',
    'Celestino (Celéstio) o Pelagiano e seus seguidores: condenados no Cânon 5, que ordenava a rejeição dos pelagianos que haviam buscado refúgio em Constantinopla sob a proteção de Nestório. Os bispos que os receberam (notadamente Nestório) foram censurados por dar abrigo a hereges já condenados por Roma.',
    'Clérigos nestorianos: todos os clérigos que aderiram publicamente à doutrina de Nestório ou ao contra-concílio de João de Antioquia foram depostos e suspensos de suas funções (Cânon 4 e Cânon 1), com possibilidade de restauração mediante retratação.',
    'Indiretamente, Teodoro de Mopsuéstia: embora não nomeado em Éfeso, o Cânon 7 (proibição de credos alternativos ao de Niceia) visava implicitamente o credo de Teodoro, que os cirilianos consideravam a fonte do nestorianismo. A condenação explícita de Teodoro só viria em 553.',
    'Os bispos do contra-concílio de João de Antioquia (34 bispos): suspensos de suas funções episcopais até que se retratassem e aceitassem as decisões da Sessão I. A maioria se reconciliou após a Fórmula de União de 433.'
  ]
}

export const oQueNaoFoiTocado = {
  titulo: 'O Que o Concílio NÃO Abordou',
  introducao: 'O Concílio de Éfeso foi, em sua essência, um concílio cristológico limitado e reativo: reuniu-se para julgar a ortodoxia de Nestório e definir o estatuto do título Theotokos, não para elaborar uma cristologia sistemática completa. Muitas questões que hoje associamos à cristologia ortodoxa só seriam resolvidas em concílios posteriores, e projetá-las retroativamente sobre Éfeso é um anacronismo comum. A seguir, listamos os principais temas que Éfeso não tratou, não definiu ou apenas tangenciou.',
  itens: [
    {
      topico: 'A fórmula "duas naturezas" (dyo physeis)',
      explicacao: 'Éfeso definiu a unidade de pessoa (uma hipóstase), mas não formulou explicitamente a doutrina das "duas naturezas" que seria o coração de Calcedônia (451). A linguagem de Cirilo — "mia physis sesarkomene" — era ambígua o suficiente para ser lida tanto como ortodoxa quanto como monofisita. A distinção clara entre physis e hypostasis, que permitiu a fórmula calcedoniana "uma pessoa em duas naturezas", só seria elaborada por Leão I (Tomo, 449) e ratificada em 451.'
    },
    {
      topico: 'As duas vontades de Cristo (monotelismo)',
      explicacao: 'A questão de se Cristo possuía uma ou duas vontades (thelema) — divina e humana — não foi sequer levantada em Éfeso. O monotelismo surgiria apenas no século VII como tentativa de compromisso entre calcedonianos e monofisitas, e seria condenado no III Concílio de Constantinopla (680–681). Éfeso não tinha vocabulário nem categorias para abordar esta questão.'
    },
    {
      topico: 'A processão do Espírito Santo (Filioque)',
      explicacao: 'A controvérsia sobre a cláusula Filioque ("e do Filho") no Credo niceno-constantinopolitano é uma questão trinitária, não cristológica, e estava completamente ausente do horizonte de Éfeso. O debate Filioque só se tornaria agudo nos séculos IX–XI entre Roma e Constantinopla. Ironicamente, o Cânon 7 de Éfeso (proibição de novos credos) seria posteriormente usado pelos ortodoxos orientais como argumento contra a adição latina do Filioque.'
    },
    {
      topico: 'A primazia jurisdicional de Roma sobre o Oriente',
      explicacao: 'Embora os legados de Celestino I tenham participado do concílio e ratificado suas decisões, a questão da primazia jurisdicional universal do Papa sobre as igrejas orientais não foi debatida nem definida em Éfeso. A autoridade de Roma foi reconhecida em termos honoríficos e doutrinais, mas não jurisdicionais. O Cânon 3 de Constantinopla I (381), que dava a Constantinopla a "segunda honra" após Roma, não foi revogado em Éfeso.'
    },
    {
      topico: 'A natureza da graça e o pecado original (pelagianismo)',
      explicacao: 'O pelagianismo foi tangenciado no Cânon 5, que condenou os seguidores de Celestino/Celéstio que haviam buscado refúgio em Constantinopla. No entanto, o concílio não desenvolveu nenhuma teologia da graça, do pecado original ou da predestinação. Essas questões já haviam sido tratadas nos sínodos de Cartago (418) e de Éfeso (431) apenas de passagem, sem a profundidade que Agostinho lhes dera no Ocidente.'
    },
    {
      topico: 'A natureza exata da Eucaristia',
      explicacao: 'Embora o Anátema 11 de Cirilo afirme que "a carne do Senhor é vivificante e própria do Verbo", o concílio não definiu a doutrina eucarística (presença real, transubstanciação, etc.). A referência à Eucaristia nos anátemas era cristológica, não sacramental: visava afirmar que a carne eucarística é a carne do próprio Verbo, não a carne de um homem separado.'
    }
  ]
}