export const resumoMitos = `O Concílio de Éfeso, como todos os grandes eventos formadores da história cristã, gerou uma série de mitos, simplificações e distorções ao longo dos séculos. Alguns nasceram da polêmica confessional (protestantes vs. católicos vs. ortodoxos), outros da divulgação popular imprecisa, e outros ainda de leituras anacrônicas que projetam categorias posteriores sobre um concílio do século V. Desconstruir estes mitos não é minimizar a importância de Éfeso, mas restaurar sua real dimensão histórica e teológica.

A seguir, examinamos os sete mitos mais comuns sobre Éfeso, contrastando cada um com a realidade documentada pelas fontes primárias (Atos conciliares, cartas de Cirilo e Nestório, historiadores eclesiásticos contemporâneos) e pela pesquisa acadêmica moderna. A gravidade de cada mito é classificada conforme seu impacto na compreensão da fé cristã e da história eclesial.`

export const mitos = [
  {
    id: 1,
    mito: '"Éfeso definiu que Maria é \'Mãe de Deus\' no sentido de que ela gerou a divindade eterna do Verbo."',
    realidade: 'Theotokos significa que a PESSOA (hipóstase) que nasceu de Maria segundo a carne é o próprio Verbo divino — não que Maria seja a origem da natureza divina, o que seria absurdo e blasfemo.',
    explicacao: 'A distinção teológica fundamental é entre "gerar a natureza divina" (impossível, pois a divindade é incriada e eterna) e "gerar a pessoa divina segundo a carne" (o que Maria efetivamente fez). Cirilo insistia repetidamente nesta distinção em suas cartas: Maria é Theotokos porque a Encarnação é real e o sujeito nascido dela é o próprio Logos, não porque a divindade tenha origem no tempo. Este mito, quando propagado por críticos protestantes ou por polemistas anti-marianos, distorce completamente a intenção do Concílio e produz caricaturas fáceis de refutar mas historicamente falsas. A Theotokos é uma afirmação sobre Cristo (unidade de sujeito), não uma exaltação isolada de Maria.',
    origemDoMito: 'Confusão entre polêmica protestante contra a mariologia católica (séc. XVI em diante) e simplificações populares em manuais de história eclesial. Também presente em polêmicas do próprio Nestório, que caricaturava a posição ciriliana desta forma.',
    gravidade: 'alta' as const,
    fontes: [
      'Cirilo de Alexandria, Epístola 4 a Nestório (Kategoumetha), PG 77, 44–49',
      'J.N.D. Kelly, Doutrinas Centrais da Fé Cristã (Vida Nova), pp. 379–384',
      'John McGuckin, St. Cyril of Alexandria: The Christological Controversy (Brill, 1994), pp. 138–145'
    ]
  },
  {
    id: 2,
    mito: '"Nestório negava a divindade de Cristo e ensinava que Jesus era apenas um homem."',
    realidade: 'Nestório afirmava plenamente e sem ambiguidade a divindade eterna do Verbo. Sua heresia não era negar a divindade, mas SEPARAR o Verbo divino do homem Jesus em dois sujeitos operacionais distintos unidos apenas por conjunção moral (synapheia).',
    explicacao: 'Este mito confunde nestorianismo com adocionismo ou arianismo, o que é historicamente incorreto. Nestório era plenamente niceno em sua teologia trinitária: reconhecia o Verbo como consubstancial ao Pai, eterno, incriado. Sua heresia era estritamente cristológica: em vez de afirmar que o Verbo se uniu ontologicamente à carne (união hipostática ciriliana), Nestório ensinava que o Verbo divino "habitava" no homem Jesus como num templo, mantendo-se as duas naturezas em dois sujeitos operacionais distintos unidos por synapheia (conjunção). O resultado era, na prática, "dois filhos" — o Filho de Deus (o Verbo) e o filho de Maria (o homem Jesus) — o que Cirilo considerava incompatível com a fé apostólica. Confundir esta sofisticada heresia com "negação da divindade" empobrece a compreensão do debate real e torna incompreensíveis as sutilezas teológicas de Éfeso.',
    origemDoMito: 'Simplificação didática em catequeses populares e manuais de história eclesial resumidos. Também alimentado pela retórica polemista ciriliana, que às vezes acusava Nestório dos piores excessos possíveis para efeito retórico.',
    gravidade: 'alta' as const,
    fontes: [
      'Nestório, Livro de Heráclides (Bazaar de Heráclides), trad. G. R. Driver & L. Hodgson (1925)',
      'Luise Abramowski, Untersuchungen zum Liber Heraclidis (CSCO 242, 1963)',
      'Aloys Grillmeier, Christ in Christian Tradition, vol. 1 (2ª ed., 1975), pp. 443–472'
    ]
  },
  {
    id: 3,
    mito: '"O Concílio de Éfeso foi unânime, harmonioso e pacífico, expressando o consenso natural da Igreja."',
    realidade: 'Éfeso foi um dos concílios ecumênicos mais tumultuados e caóticos da história cristã, com dois concílios paralelos, prisões, excomunhões mútuas, violência popular nas ruas, intervenção militar imperial e um cisma de dois anos entre Alexandria e Antioquia.',
    explicacao: 'A realidade histórica de Éfeso é dramática. Cirilo abriu a Sessão I em 22 de junho de 431 apesar da ausência dos legados romanos e, principalmente, do patriarca João de Antioquia com seus 42 bispos "orientais" (que ainda estavam a caminho, atrasados por dificuldades de viagem). Nestório recusou-se a comparecer, alegando que o concílio era ilegítimo. A sessão prosseguiu e depôs Nestório em um único dia. Quando João de Antioquia chegou em 26 de junho, reuniu seu próprio contra-concílio (conciliabulum) e depôs Cirilo e Memnon, bispo de Éfeso. Ambos os grupos enviaram delegações a Constantinopla acusando-se mutuamente. O imperador Teodósio II inicialmente ratificou AMBAS as deposições, prendendo Cirilo, Memnon e Nestório simultaneamente. Houve violência popular nas ruas de Éfeso, com a multidão gritando "Theotokos!" e atacando partidários de Nestório. O conde Candidiano, representante imperial, mal conseguia manter a ordem. A crise só foi parcialmente resolvida dois anos depois pela Fórmula de União de 433, um compromisso doloroso entre Cirilo e João de Antioquia.',
    origemDoMito: 'Idealização romântica dos concílios ecumênicos como eventos harmoniosos guiados suavemente pelo Espírito Santo, típica de apologética confessional simplificada e de manuais devocionais.',
    gravidade: 'média' as const,
    fontes: [
      'Acta Conciliorum Oecumenicorum I.1–5 (ed. E. Schwartz, 1922–1930)',
      'Richard Price & Thomas Graumann, The Council of Ephesus of 431: Documents and Proceedings (Liverpool University Press, 2020)',
      'Sócrates Escolástico, Historia Ecclesiastica VII.29–34'
    ]
  },
  {
    id: 4,
    mito: '"Cirilo de Alexandria agiu como ditador arrogante, manipulou tudo por ambição pessoal e usou métodos condenáveis para vencer."',
    realidade: 'Cirilo tinha a maioria episcopal legítima, o apoio explícito do papa Celestino I (formalizado no sínodo romano de agosto de 430) e a base teológica sólida da tradição atanasiana. Porém, é historicamente honesto reconhecer que a abertura prematura da Sessão I sem esperar os antioquenos, o uso político da multidão em Éfeso e certas manobras diplomáticas (incluindo generosos "presentes" à corte imperial documentados em suas próprias cartas) foram táticas questionáveis.',
    explicacao: 'A avaliação equilibrada de Cirilo deve reconhecer três dimensões: (1) Teologicamente, sua cristologia era sólida, fiel à tradição atanasiana-capadócia e foi confirmada por concílios posteriores como ortodoxa — Cirilo não estava simplesmente "inventando" uma nova doutrina. (2) Institucionalmente, ele agia como líder legítimo do bloco majoritário, com apoio papal explícito (Celestino I havia condenado Nestório em sínodo romano em agosto de 430 e delegado a Cirilo o ultimato). (3) Politicamente, porém, suas táticas foram frequentemente agressivas, oportunistas e às vezes moralmente questionáveis: a Epístola 96 (aos oficiais imperiais) documenta pagamentos substanciais à corte para influenciar o resultado; a abertura prematura do concílio sem esperar os "orientais" foi um cálculo político para consolidar vantagem antes da chegada dos oponentes. Nem canonização acrítica ("santo Cirilo, sempre correto") nem demonização unilateral ("Cirilo, o cínico manipulador") captam a complexidade histórica. Cirilo foi um teólogo brilhante e um político ambicioso — e ambas as coisas simultaneamente.',
    origemDoMito: 'Historiografia protestante liberal do século XIX (E. Gibbon, Adolf Harnack) e obras populares recentes de crítica anti-eclesiástica (como o romance de Sylvie Weil ou obras jornalísticas sensacionalistas sobre o cristianismo antigo). Também alimentado pelo linchamento de Hipátia (415), em que a responsabilidade direta de Cirilo é debatida mas frequentemente exagerada.',
    gravidade: 'média' as const,
    fontes: [
      'Susan Wessel, Cyril of Alexandria and the Nestorian Controversy: The Making of a Saint and of a Heretic (Oxford, 2004)',
      'Norman Russell, Cyril of Alexandria (Routledge, 2000)',
      'Cirilo de Alexandria, Epistola 96 (a Máximo, arcediano de Constantinopla), com lista de presentes à corte'
    ]
  },
  {
    id: 5,
    mito: '"O nestorianismo foi extinto após Éfeso e desapareceu da história cristã."',
    realidade: 'A Igreja do Oriente (que floresceu no império persa sassânida) adotou a cristologia de tradição antioquena/nestoriana já no final do século V, missionou até a China (Estela de Xi\'an, 781), Índia (cristãos de São Tomé) e Mongólia, e sobrevive até hoje como Igreja Assíria do Oriente (aproximadamente 400.000 fiéis atualmente, com sede em Erbil, Iraque).',
    explicacao: 'A "extinção" do nestorianismo é um dos mitos mais difundidos e historicamente falsos. A Igreja Persa (também chamada Igreja do Oriente ou Igreja Síria Oriental), fora dos limites do Império Romano e por isso não sujeita aos éditos imperiais anti-nestorianos, adotou progressivamente a cristologia antioquena/teodoriana ao longo do século V. O Sínodo de Beth Lapat (484) e o Sínodo de Seleucia-Ctesifonte (486, sob o Catholicos Acácio) marcaram formalmente essa adoção. A Escola de Nísibis (fundada após o fechamento da Escola de Edessa em 489 pelo imperador Zeno) tornou-se o grande centro de teologia "nestoriana", com figuras notáveis como Narsai e Babai o Grande. Esta igreja realizou uma das expansões missionárias mais impressionantes da história: alcançou a China (a Estela de Xi\'an, datada de 781, documenta comunidades cristãs prósperas na dinastia Tang), a Índia (os cristãos de São Tomé no Kerala), o Turquestão, a Mongólia (a esposa de Hulagu Khan era cristã da Igreja do Oriente). Foi devastada pelas invasões de Tamerlão (séc. XIV) e pelas perseguições otomanas (séc. XIX–XX, culminando no genocídio assírio de 1914–1918). Sobrevive hoje como Igreja Assíria do Oriente, cujo diálogo teológico com Roma culminou na Declaração Cristológica Comum de 1994 (João Paulo II e Mar Dinkha IV), que reconheceu ortodoxa a fé cristológica de ambas as tradições.',
    origemDoMito: 'Eurocentrismo historiográfico e desconhecimento generalizado sobre o cristianismo oriental fora do mundo greco-latino. Muitos manuais de história da Igreja simplesmente ignoram a Igreja Persa após Éfeso.',
    gravidade: 'alta' as const,
    fontes: [
      'Christoph Baumer, The Church of the East: An Illustrated History of Assyrian Christianity (I.B. Tauris, 2006)',
      'Sebastian P. Brock, "The Church of the East in the Sasanian Empire", em Fires from Heaven (Ashgate, 2006)',
      'Declaração Cristológica Comum entre a Igreja Católica e a Igreja Assíria do Oriente (11 de novembro de 1994)'
    ]
  },
  {
    id: 6,
    mito: '"O Papa Celestino I estava presente em Éfeso e presidiu pessoalmente o Concílio."',
    realidade: 'Celestino I nunca esteve em Éfeso. Ele enviou três legados (os bispos Arcádio e Projeto e o presbítero Filipe) que chegaram atrasados, apenas em 10 de julho de 431, DEPOIS de a Sessão I (22 de junho) já ter deposto Nestório. Cirilo de Alexandria presidiu de fato o Concílio, atuando também "em nome" de Celestino por delegação prévia.',
    explicacao: 'A ideia de que o Papa presidiu Éfeso pessoalmente é anacrônica e historicamente falsa. Celestino I permaneceu em Roma durante todo o Concílio. Ele havia condenado Nestório em sínodo romano em agosto de 430 e delegado a Cirilo de Alexandria a execução da sentença (ultimato de 10 dias para retratação, entregue por Cirilo em novembro de 430). Quando Teodósio II convocou o Concílio ecumênico para Pentecostes de 431, Celestino enviou três legados como seus representantes: os bispos Arcádio e Projeto, e o presbítero Filipe. Estes chegaram atrasados devido a dificuldades de viagem, e sua chegada em 10 de julho ocorreu quase três semanas após a Sessão I. Os legados romanos ratificaram plenamente as decisões já tomadas e participaram das sessões subsequentes (especialmente a Sessão II, em 10 de julho, dedicada à leitura da carta papal). Cirilo presidiu o Concílio de fato desde o início, invocando dupla autoridade: sua própria como patriarca de Alexandria (a segunda sé em honra segundo Niceia 325) e como delegado do Papa Celestino I. A leitura anacrônica de que "o Papa presidiu" projeta sobre Éfeso categorias medievais e modernas de primazia romana que ainda não existiam em 431.',
    origemDoMito: 'Apologética católica pós-tridentina que projeta a primazia papal medieval sobre concílios antigos. Também alimentado por representações artísticas anacrônicas dos séculos XVI–XIX.',
    gravidade: 'média' as const,
    fontes: [
      'Acta Conciliorum Oecumenicorum I.1.2 (cartas de Celestino I aos legados)',
      'Klaus Schatz, La primauté du pape: son histoire des origines à nos jours (Cerf, 1992), cap. 3',
      'Henry Chadwick, The Church in Ancient Society (Oxford, 2001), pp. 528–540'
    ]
  },
  {
    id: 7,
    mito: '"Éfeso (431) e Calcedônia (451) se contradizem: Éfeso proclamou uma natureza e Calcedônia duas."',
    realidade: 'Calcedônia (451) completou e explicitou Éfeso (431), mantendo integralmente a Theotokos, a unidade de pessoa e a autoridade dos Doze Anátemas de Cirilo, mas acrescentando a fórmula explícita "uma pessoa em duas naturezas" para excluir o monofisismo (que era herança distorcida da linguagem ciriliana). Os dois concílios são complementares, não contraditórios.',
    explicacao: 'Este é talvez o mito teologicamente mais grave, pois compromete a compreensão de todo o desenvolvimento cristológico. A relação entre Éfeso e Calcedônia é uma das mais delicadas de toda a história dogmática. Éfeso definiu a UNIDADE (uma hipóstase, um sujeito, o Verbo encarnado, Maria como Theotokos), usando a linguagem ciriliana da "mia physis sesarkomene" (uma natureza encarnada). Após Éfeso, alguns discípulos radicais de Cirilo (especialmente Dióscoro de Alexandria e o arquimandrita Eutiques) interpretaram a "mia physis" no sentido de que a humanidade de Cristo teria sido "absorvida" pela divindade "como uma gota de mel no oceano". Esta interpretação levou ao Latrocínio de Éfeso (449), presidido por Dióscoro, que reabilitou Eutiques e depôs Flaviano de Constantinopla. Roma (Leão I, com seu célebre Tomo a Flaviano) e o Oriente ortodoxo reagiram convocando Calcedônia (451), que fez três coisas: (1) confirmou integralmente a Theotokos e a autoridade de Cirilo (a Fórmula de Calcedônia começa reafirmando explicitamente "seguimos os santos Padres"); (2) rejeitou o monofisismo eutiquiano; (3) formulou a definição clássica: "uma pessoa (prosōpon/hypostasis) em duas naturezas (physeis), sem confusão, sem mudança, sem divisão, sem separação". Éfeso e Calcedônia são, portanto, complementares: Éfeso defendeu a unidade contra o dualismo nestoriano; Calcedônia defendeu a distinção contra a confusão monofisita. Juntos, formam a síntese cristológica clássica aceita por católicos, ortodoxos bizantinos, anglicanos e luteranos. A confusão surge da linguagem: "physis" em Cirilo tem sentido diferente de "physis" em Calcedônia, pois no vocabulário técnico se distinguiu física (natureza) de hipóstase (pessoa) — distinção que Cirilo ainda não fazia claramente.',
    origemDoMito: 'Polêmica confessional entre ortodoxos calcedonianos e ortodoxos orientais não-calcedonianos (coptas, siríacos, armênios, etíopes) desde o século V. Também simplificações didáticas em manuais que apresentam os concílios como eventos isolados sem contexto de desenvolvimento dogmático.',
    gravidade: 'alta' as const,
    fontes: [
      'Aloys Grillmeier, Christ in Christian Tradition, vol. 1 (2ª ed., 1975) e vol. 2/1 (1987)',
      'John Meyendorff, Christ in Eastern Christian Thought (SVS Press, 1975)',
      'Sarah Coakley (ed.), The Making and Remaking of Christian Doctrine (Oxford, 2003)',
      'Comissão Mista Internacional para o Diálogo Teológico entre a Igreja Católica e as Igrejas Ortodoxas Orientais, documentos 1971–1990'
    ]
  }
]