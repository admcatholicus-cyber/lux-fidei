export const resumoPartidos =
  "O cenário teológico do século VII não era simplesmente binário (monotelitas vs. diotelitas). Havia um espectro complexo de posições que refletiam décadas de debates, perseguições e compromissos políticos. O monotelismo nasceu como uma evolução do monoenergismo, que por sua vez foi uma tentativa de ponte entre Calcedônia e os miafisitas. O concílio de 681 teve que lidar não apenas com as heresias em si, mas com toda a tradição de compromisso que as havia gerado."

export const espectroTeologico = [
  "Diotelitas estritos (duas vontades, duas operações) — Máximo, Sofrônio, Agatão, legados papais: a posição que triunfou",
  "Neo-calcedonianos moderados — maioria dos bispos de Constantinopla: aceitavam Calcedônia com ênfase ciriliana, inicialmente ambíguos sobre as vontades, alinharam-se com Roma",
  "Monoenergistas (uma operação teândrica) — Teodoro de Farã, Ciro de Alexandria: a fórmula original de compromisso, precursora do monotelismo",
  "Monotelitas (uma vontade) — Sérgio, Pirro, Paulo, Pedro, Macário: a evolução do monoenergismo, doutrina oficial do império 638–680",
  "Miafisitas/Não-calcedonianos (uma natureza encarnada) — coptas, siríacos, armênios, etíopes: não participaram do concílio, mas eram a razão de ser do monotelismo",
  "Nestorianos remanescentes (Igreja do Oriente) — irrelevantes para o concílio; suas comunidades estavam sob domínio sassânida/árabe",
]

export const partidos = [
  {
    nome: "Monotelitas",
    nomeAlternativo: "Monothelitai / Μονοθελῆται",
    lider: "Sérgio I de Constantinopla (arquiteto); Macário de Antioquia (defensor no concílio)",
    periodo: "c. 634–681",
    termoChave: "ἓν θέλημα (hen thelema) — uma vontade",
    descricao:
      "O monotelismo sustentava que Cristo, embora possuindo duas naturezas (divina e humana), opera com uma única vontade. A vontade humana teria sido 'absorvida', 'subsumida' ou 'harmonizada' pela vontade divina, de modo que não haveria verdadeira dualidade volitiva em Cristo. A fórmula nasceu como evolução do monoenergismo e foi concebida como compromisso entre Calcedônia e o miafisismo: ao confessar duas naturezas (satisfazendo Calcedônia) mas uma vontade (aproximando-se dos miafisitas), os monotelitas esperavam reunificar a Igreja. Na prática, a doutrina ameaçava a integridade da humanidade de Cristo ao privá-lo de vontade humana real.",
    posicaoSobreAsVontades:
      "Uma só vontade em Cristo (a divina). A vontade humana, se existente, é meramente passiva e instrumental, sem autonomia operacional.",
    argumentosPrincipais: [
      "Se Cristo é uma só pessoa (hipóstase), deve ter uma só vontade, pois a vontade pertence à pessoa, não à natureza",
      "Duas vontades implicariam conflito interno em Cristo, o que é incompatível com sua impecabilidade",
      "O Pseudo-Dionísio fala de 'uma nova operação teândrica', sugerindo unidade operacional",
      "A Escritura nunca usa a expressão 'duas vontades'",
      "Cirilo de Alexandria enfatiza a unidade de Cristo, não a dualidade",
    ],
    refutacao:
      "Máximo, o Confessor, demonstrou que a vontade pertence à natureza, não à pessoa. Uma natureza sem vontade é uma natureza incompleta. Se Cristo não tem vontade humana, sua humanidade é mutilada e a Encarnação não é real. O axioma soteriológico de Gregório de Nazianzo — 'o que não é assumido não é redimido' — aplica-se diretamente: se Cristo não assumiu a vontade humana, não a redimiu. A oração de Getsêmani (Mt 26,39: 'Não como eu quero, mas como tu queres') pressupõe duas vontades distintas.",
    baseGeografica: "Constantinopla (sede patriarcal), corte imperial, parte do clero sírio",
    forcaNumerica: "Dominante no império 638–680; reduzido a Macário + 2 monges no concílio",
    statusNoConcilio: "Condenado como heresia. Macário deposto (sessão 8), Estêvão deposto (sessão 9), Policrônio deposto (sessão 10).",
  },
  {
    nome: "Monoenergistas",
    nomeAlternativo: "Monoenergistai / Μονοενεργισταί",
    lider: "Teodoro de Farã (formulador); Ciro de Alexandria (implementador)",
    periodo: "c. 620–638",
    termoChave: "μία ἐνέργεια θεανδρική (mia energeia theandrike) — uma operação teândrica",
    descricao:
      "O monoenergismo foi o precursor imediato do monotelismo. Formulado por Teodoro de Farã (c. 620) e implementado por Ciro de Alexandria no Pacto de União de 633, sustentava que Cristo opera com 'uma operação teândrica' (divino-humana), em vez de duas operações distintas. A fórmula era baseada numa leitura do Pseudo-Dionísio Areopagita (Ep. 4) e pretendia ser uma ponte entre a linguagem calcedoniana (duas naturezas) e a linguagem ciriliana/miafisita (ênfase na unidade). Quando a oposição de Sofrônio de Jerusalém tornou o monoenergismo insustentável, Sérgio I pivotou para o monotelismo, mudando o foco de 'operação' para 'vontade'.",
    posicaoSobreAsVontades:
      "Não abordava diretamente a questão das vontades (anterior ao monotelismo). Focava na operação: uma operação única, nem puramente divina nem puramente humana, mas 'teândrica' (divino-humana).",
    argumentosPrincipais: [
      "O Pseudo-Dionísio fala de 'uma nova operação teândrica' (Ep. 4)",
      "Cirilo de Alexandria enfatiza a unidade de operação do Verbo encarnado",
      "Duas operações implicariam dois agentes, o que seria nestorianismo",
      "A fórmula preserva a linguagem de Calcedônia (duas naturezas) enquanto enfatiza a unidade da pessoa",
    ],
    refutacao:
      "Sofrônio de Jerusalém foi o primeiro a refutar o monoenergismo, argumentando que 'operação' (energeia) é propriedade da natureza, não da pessoa. Máximo, o Confessor, aprofundou a refutação: a expressão de Pseudo-Dionísio não significa 'uma operação', mas 'uma nova maneira de operar' — as duas operações cooperam numa sinergia inédita.",
    baseGeografica: "Alexandria (Pacto de União), Constantinopla, Armênia (parcialmente)",
    forcaNumerica: "Significativa 620–638; substituído pelo monotelismo após o Ecthesis",
    statusNoConcilio: "Condenado como precursor do monotelismo. Teodoro de Farã e Ciro de Alexandria anatematizados postumamente.",
  },
  {
    nome: "Diotelitas (Ortodoxos)",
    nomeAlternativo: "Dyothelitai / Δυοθελῆται",
    lider: "Máximo, o Confessor (teólogo); Sofrônio de Jerusalém (primeiro opositor); Agatão I (expressão papal)",
    periodo: "c. 634–681 (e permanente)",
    termoChave: "δύο θελήματα, δύο ἐνέργειαι (dyo thelemata, dyo energeiai) — duas vontades, duas operações",
    descricao:
      "O diotelismo sustenta que Cristo possui duas vontades naturais (divina e humana) e duas operações naturais (divina e humana), sem divisão, sem mudança, sem separação, sem confusão — os mesmos quatro advérbios de Calcedônia aplicados agora não às naturezas, mas às suas propriedades volitivas e operacionais. A vontade humana de Cristo é real, livre e ativa, mas não é contrária à divina: ela segue a divina 'sem resistência e sem relutância' (anantirrhoptos). A distinção crucial de Máximo entre 'vontade natural' (thelema physikon — pertencente à natureza) e 'vontade gnômica' (thelema gnomikon — deliberativa, hesitante) resolve o problema: Cristo tem vontade natural humana, mas não gnômica (pois não há ignorância, pecado ou hesitação nele). Esta é a posição que triunfou em Constantinopla III.",
    posicaoSobreAsVontades:
      "Duas vontades naturais (divina e humana) e duas operações naturais (divina e humana) em Cristo, cooperando em perfeita harmonia na única pessoa do Logos.",
    argumentosPrincipais: [
      "A vontade pertence à natureza, não à pessoa (Máximo)",
      "Se Cristo tem duas naturezas completas (Calcedônia), deve ter duas vontades completas",
      "Uma natureza sem vontade é uma natureza incompleta, mutilada",
      "'O que não é assumido não é redimido' (Gregório de Nazianzo): se Cristo não assumiu a vontade humana, não a redimiu",
      "Getsêmani (Mt 26,39) pressupõe duas vontades distintas: 'Não como eu quero, mas como tu queres'",
      "A impecabilidade de Cristo não exclui a liberdade humana, mas a aperfeiçoa",
    ],
    refutacao: "N/A (esta é a posição ortodoxa definida pelo concílio)",
    baseGeografica: "Roma, Palestina (monges), Cartago (exílio de Máximo), Britânia (Hatfield)",
    forcaNumerica: "Minoritária durante o período do Ecthesis e Typos (638–680); esmagadora maioria no concílio",
    statusNoConcilio: "Definida como dogma. As duas vontades e duas operações são artigos de fé.",
  },
  {
    nome: "Miafisitas (Não-Calcedonianos)",
    nomeAlternativo: "Miaphysitai / Μιαφυσῖται",
    lider: "Severo de Antioquia (teólogo, † 538); Dioscoro de Alexandria (predecessor, † 454)",
    periodo: "451 → presente",
    termoChave: "μία φύσις τοῦ Θεοῦ Λόγου σεσαρκωμένη (mia physis tou Theou Logou sesarkomene) — uma natureza encarnada do Deus Verbo",
    descricao:
      "Os miafisitas (frequentemente chamados 'monofisitas', embora rejeitem o termo) sustentam que Cristo possui 'uma natureza encarnada do Deus Verbo', seguindo a fórmula de Cirilo de Alexandria. Para eles, a definição de Calcedônia (duas naturezas) implicava nestorianismo. As igrejas miafisitas (copta, siríaca ortodoxa, armênia apostólica, etíope ortodoxa, eritreia ortodoxa, malancar ortodoxa) separaram-se da comunhão calcedoniana após 451 e permanecem separadas até hoje. O monotelismo foi originalmente concebido como ponte para atraí-los de volta, mas fracassou: os miafisitas rejeitaram o monotelismo tanto quanto rejeitaram Calcedônia, pois consideravam a distinção entre 'natureza' e 'vontade' artificial.",
    posicaoSobreAsVontades:
      "Variável. A teologia miafisita não se pronunciou dogmaticamente sobre as vontades com a mesma clareza que os calcedonianos. Severo de Antioquia falava de 'uma operação composta' (mia synthesis energeia), o que é distinto tanto do monoenergismo quanto do monotelismo.",
    argumentosPrincipais: [
      "A fórmula de Cirilo ('uma natureza encarnada') é suficiente e ortodoxa",
      "Calcedônia traiu Cirilo ao impor 'duas naturezas', que implica dois sujeitos (nestorianismo)",
      "A distinção entre natureza e hipóstase é artificial e perigosa",
      "O Tomo de Leão é nestoriano por atribuir ações separadas a cada natureza",
    ],
    refutacao:
      "Os calcedonianos (e Constantinopla III) argumentam que a fórmula de Cirilo, corretamente entendida, é compatível com Calcedônia: 'uma natureza encarnada' não significa 'uma natureza simples', mas 'a natureza divina do Verbo com a natureza humana assumida'. A distinção ousia/hypostasis (substância/pessoa) resolve a acusação de nestorianismo.",
    baseGeografica: "Egito (coptas), Síria (siríacos), Armênia, Etiópia, Eritreia, Índia (malancar)",
    forcaNumerica: "Majoritária nas províncias perdidas para o Islã. Zero no concílio.",
    statusNoConcilio: "Não participaram. Não foram diretamente condenados (a condenação é do monotelismo, não do miafisismo). Sua ausência tornou o monotelismo politicamente irrelevante.",
  },
  {
    nome: "Neo-Calcedonianos Moderados",
    nomeAlternativo: "Calcedonianos Cirilianos",
    lider: "Sem líder único; tradição de Justiniano I e Constantinopla II (553)",
    periodo: "553 → 681",
    termoChave: "Calcedônia lida através de Cirilo",
    descricao:
      "Os neo-calcedonianos aceitavam a definição de Calcedônia (duas naturezas), mas a liam através de uma lente ciriliana, enfatizando a unidade da pessoa de Cristo e minimizando a dualidade. Constantinopla II (553), com sua condenação dos Três Capítulos, foi uma expressão desta tendência. A maioria dos bispos presentes em 680–681 pertencia a esta corrente: formados sob o Ecthesis e o Typos, não eram monotelitas convictos mas tampouco diotelitas explícitos. Eram pragmáticos que seguiam o consenso imperial. Quando a posição diotelita de Roma prevaleceu, eles se alinharam sem dificuldade.",
    posicaoSobreAsVontades:
      "Inicialmente ambíguos. Aceitaram as duas vontades quando a carta de Agatão foi lida e aclamada, reconhecendo-a como compatível com sua leitura ciriliana de Calcedônia.",
    argumentosPrincipais: [
      "Calcedônia deve ser lida à luz de Cirilo, não de Leão sozinho",
      "A unidade da pessoa de Cristo é o aspecto central, não a dualidade de naturezas",
      "A paz da Igreja é mais importante do que fórmulas teológicas precisas (oikonomia)",
    ],
    refutacao: "N/A (aceitaram a definição diotelita)",
    baseGeografica: "Constantinopla, Ásia Menor, Trácia, Grécia",
    forcaNumerica: "Maioria numérica dos bispos no concílio (80–85%)",
    statusNoConcilio: "Alinharam-se com a definição diotelita e assinaram o Horos sem objeção.",
  },
  {
    nome: "Nestorianos Remanescentes (Igreja do Oriente)",
    nomeAlternativo: "Igreja Assíria do Oriente",
    lider: "Tradição de Teodoro de Mopsuéstia e Nestório",
    periodo: "431 → presente",
    termoChave: "δύο φύσεις, δύο πρόσωπα, ἓν πρόσωπον ἑνώσεως — duas naturezas, duas pessoas, uma pessoa de união",
    descricao:
      "A Igreja do Oriente (frequentemente chamada 'nestoriana', embora rejeite o termo) sustentava uma cristologia que distinguia fortemente as duas naturezas a ponto de parecer postular duas pessoas. Condenada em Éfeso (431), esta corrente sobreviveu na Mesopotâmia e na Pérsia, fora do alcance imperial. Seus seguidores estavam sob domínio sassânida e, depois, árabe, e não tiveram qualquer participação em Constantinopla III.",
    posicaoSobreAsVontades:
      "Aceitavam duas vontades e duas operações, mas por razões opostas às dos diotelitas calcedonianos: enfatizavam a separação, não a cooperação, das faculdades de cada natureza.",
    argumentosPrincipais: [
      "As duas naturezas de Cristo preservam suas propriedades completas, incluindo vontade e operação",
      "A união é prosopônica (de pessoa), não hipostática (de natureza)",
    ],
    refutacao:
      "A cristologia nestoriana é rejeitada tanto por calcedonianos quanto por miafisitas por ameaçar a unidade real da pessoa de Cristo. A distinção prosopônica é considerada insuficiente.",
    baseGeografica: "Mesopotâmia, Pérsia, Ásia Central, Índia (malabar)",
    forcaNumerica: "Zero no concílio. Irrelevante para os debates de 680–681.",
    statusNoConcilio: "Não participaram. Não foram diretamente abordados. A condenação original de Éfeso (431) foi reafirmada.",
  },
]

export const quemFoiCondenadoPorNome = {
  titulo: "Os Anatematizados Nominais",
  observacaoGeral:
    "O Horos de Constantinopla III condena nominalmente oito figuras, sendo sete já falecidas e uma (Macário) deposta durante o concílio. A condenação póstuma era uma prática aceita na tradição conciliar (Constantinopla II havia condenado Teodoro de Mopsuéstia 125 anos após sua morte). A novidade sem precedentes foi a inclusão de um papa na lista.",
  detalhes: [
    "Teodoro de Farã — bispo do Sinai, formulador do monoenergismo (c. 620); condenado como 'o iniciador do erro'",
    "Sérgio I de Constantinopla — patriarca (610–638); arquiteto do monoenergismo e do monotelismo; autor do Ecthesis; condenado como 'o pai de toda a heresia'",
    "Pirro de Constantinopla — patriarca (638–641, 654); monotelita que abjurou e recaiu; condenado como inconstante na fé",
    "Paulo II de Constantinopla — patriarca (641–653); autor do Typos; condenado como legislador do silêncio herético",
    "Pedro de Constantinopla — patriarca (654–666); continuador da linhagem monotelita; condenado como cúmplice",
    "Ciro de Alexandria — patriarca (631–643); autor do Pacto de União monoenergista de 633; condenado como implementador do erro",
    "Honório I — papa de Roma (625–638); condenado por suas cartas a Sérgio que usaram a expressão 'uma vontade'; anatematizado como quem 'seguiu em tudo a mente de Sérgio e confirmou seus dogmas ímpios'",
    "Macário de Antioquia — patriarca; único defensor ativo no concílio; deposto na 8ª sessão e anatematizado no Horos; enviado a Roma para penitência",
  ],
  unicaExcecao:
    "Papa Honório I é o único papa da história da Igreja a ser formalmente anatematizado por um concílio ecumênico — um fato sem precedentes e sem repetição. A inclusão de Honório na lista foi aceita pelos legados papais sem protesto e confirmada pelo Papa Leão II em 682, embora com a nuance crucial de que Honório foi condenado por 'negligência' e 'imprudência', não por ensino herético formal. Esta distinção seria o fundamento da defesa católica durante o Vaticano I (1870).",
}

export const oQueNaoFoiTocado = {
  titulo: "O que o Concílio NÃO Abordou",
  introducao:
    "Constantinopla III foi um concílio estritamente cristológico, focado exclusivamente na questão das vontades e operações. Diversas questões teológicas e disciplinares contemporâneas foram deliberadamente ignoradas.",
  itens: [
    {
      topico: "Filioque",
      explicacao:
        "A questão da processão do Espírito Santo (do Pai somente, ou do Pai e do Filho) não foi discutida. O Credo de 381 foi reafirmado sem alterações. A controvérsia do Filioque só se tornaria explosiva no século IX (Fócio).",
    },
    {
      topico: "Iconoclastia",
      explicacao:
        "A questão da veneração de ícones não existia ainda como controvérsia. A iconoclastia só começaria 45 anos depois (Leão III, 726) e seria resolvida pelo VII Ecumênico (Niceia II, 787).",
    },
    {
      topico: "Primazia Papal Jurisdicional",
      explicacao:
        "Embora os legados papais tenham desempenhado papel de destaque, a questão da jurisdição universal do papa não foi formalmente debatida. A aclamação 'Pedro falou por Agatão' reafirmou a primazia doutrinária, mas não regulamentou a primazia jurisdicional.",
    },
    {
      topico: "Reconciliação com os Não-Calcedonianos",
      explicacao:
        "Com as províncias miafisitas sob domínio árabe, a motivação política para o compromisso desaparecera. O concílio reafirmou Calcedônia sem concessões, abandonando de fato a tentativa de reconciliação que gerara o monotelismo.",
    },
    {
      topico: "Disciplina Clerical Geral",
      explicacao:
        "Os cânones disciplinares (se autênticos de 681) são mínimos e disputados. O foco do concílio foi quase exclusivamente dogmático. A disciplina seria tratada extensivamente no Quinissexto (692).",
    },
  ],
}
