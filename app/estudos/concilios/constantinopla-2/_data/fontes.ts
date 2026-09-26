// app/estudos/concilios/constantinopla-2/_data/fontes.ts

export interface FontePrimaria {
  id: string;
  titulo: string;
  autor: string;
  data: string;
  idioma: string;
  tipo: string;
  descricao: string;
  edicaoCritica: string;
  relevancia: string;
}

export interface FonteSecundaria {
  id: string;
  autor: string;
  titulo: string;
  ano: number;
  editora: string;
  idioma: string;
  tipo: string;
  descricao: string;
  contribuicao: string;
}

export interface EdicaoCritica {
  id: string;
  titulo: string;
  editor: string;
  data: string;
  volumes: string;
  descricao: string;
  manuscritosBase: string[];
  observacoes: string;
}

export interface Fontes {
  introducao: string;
  fontesPrimarias: FontePrimaria[];
  fontesSecundarias: FonteSecundaria[];
  edicoesCriticas: EdicaoCritica[];
  notaBibliografica: string;
}

export const resumoFontes = {
  observacao:
    'A bibliografia sobre o Segundo Concílio de Constantinopla é vasta e multilíngue, abrangendo estudos em grego, latim, alemão, francês, inglês, italiano e russo. A presente seleção limita-se às fontes primárias e secundárias mais indispensáveis para a pesquisa acadêmica de nível avançado.',
  totalPrimarias: 13,
  totalSecundarias: 10,
  totalModernas: 5,
  totalRecursos: 0,
  recomendacaoLeitura: [
    'Richard Price, The Acts of the Council of Constantinople of 553 (2009) — a edição crítica mais atualizada das atas conciliares com tradução inglesa anotada.',
    'Aloys Grillmeier, Christ in Christian Tradition, vol. II/2 (1995) — a análise mais detalhada da cristologia do século VI.',
    'John Meyendorff, Imperial Unity and Christian Divisions (1989) — síntese equilibrada da relação entre política imperial e divisões cristológicas.',
    'Gilbert Dagron, Empereur et prêtre (1996) — reavaliação crítica do conceito de cesaropapismo.',
    'Facundo de Hermiane, Pro defensione trium capitulorum (PL 67, 527–802) — a principal defesa ocidental dos Três Capítulos.',
    'Richard Price, The Acts of the Council of Constantinople of 553 (Liverpool University Press, 2009) — edição crítica com tradução inglesa anotada das atas conciliares.',
  ],
};

export interface FonteComDisponibilidade {
  autor: string;
  titulo: string;
  data: string;
  idioma: string;
  descricao: string;
  relevancia: string;
  disponibilidade?: string;
}

export const fontesPrimariasHistoricas: FonteComDisponibilidade[] = [
  {
    autor: 'Evágrio Escolástico',
    titulo: 'Historia Ecclesiastica',
    data: 'c. 593 d.C.',
    idioma: 'Grego',
    descricao:
      'História eclesiástica em seis livros cobrindo o período de 431 a 593 d.C., com ênfase nas controvérsias cristológicas do século VI.',
    relevancia:
      'Principal fonte narrativa contemporânea sobre o concílio de 553 e a controvérsia dos Três Capítulos no Oriente.',
    disponibilidade: 'PG 86, 2417–2886; Bidez & Parmentier (eds.), London, 1898.',
  },
  {
    autor: 'Vítor de Tununa',
    titulo: 'Chronicon',
    data: 'c. 567 d.C.',
    idioma: 'Latim',
    descricao:
      'Crônica universal com entradas anuais detalhadas sobre os eventos eclesiásticos do século VI, incluindo a controvérsia dos Três Capítulos.',
    relevancia:
      'Fonte primária única para a perspectiva tricapitulina africana e para a cronologia da crise vigíliana.',
    disponibilidade: 'PL 68, 941–962; MGH AA 11.',
  },
  {
    autor: 'João Malalas',
    titulo: 'Chronographia',
    data: 'c. 565–578 d.C.',
    idioma: 'Grego',
    descricao:
      'Crônica universal com informações sobre o reinado de Justiniano, incluindo referências à controvérsia dos Três Capítulos.',
    relevancia:
      'Fonte complementar para o contexto político e administrativo do concílio.',
    disponibilidade: 'PG 97, 9–716; Thurn (ed.), Berlin, 2000.',
  },
  {
    autor: 'Cirilo de Citópolis',
    titulo: 'Vita Sabae',
    data: 'c. 555 d.C.',
    idioma: 'Grego',
    descricao:
      'Biografia de São Sabas com capítulos sobre a crise origenista na Palestina e a embaixada dos monges sabaítas a Constantinopla.',
    relevancia:
      'Fonte indispensável para a crise origenista palestina e o papel de Teodoro Ascidas.',
    disponibilidade: 'Schwartz (ed.), TU 49.2, Leipzig, 1939.',
  },
];

export const fontesPrimariasDocumentos: FonteComDisponibilidade[] = [
  {
    autor: 'Eduard Schwartz & Johannes Straub (eds.)',
    titulo: 'Acta Conciliorum Oecumenicorum, Series IV',
    data: '1971 (documentos originais de 553)',
    idioma: 'Grego e Latim (bilingue)',
    descricao:
      'Edição crítica padrão das atas do Segundo Concílio de Constantinopla, publicada em dois volumes (ACO IV.1 e IV.2).',
    relevancia:
      'Fonte primária indispensável para qualquer estudo acadêmico do concílio.',
    disponibilidade: 'Walter de Gruyter, Berlim.',
  },
  {
    autor: 'Justiniano I',
    titulo: 'Edictum de Tribus Capitulis',
    data: '544/545 d.C.',
    idioma: 'Grego (original); Latim (tradução)',
    descricao:
      'Édito imperial que iniciou formalmente a controvérsia dos Três Capítulos.',
    relevancia:
      'Documento fundacional de toda a controvérsia tricapitulina.',
  },
  {
    autor: 'Papa Vigílio',
    titulo: 'Iudicatum',
    data: '11 de abril de 548 d.C.',
    idioma: 'Latim',
    descricao:
      'Primeiro pronunciamento formal de Vigílio sobre os Três Capítulos, emitido sob pressão imperial.',
    relevancia:
      'Primeiro ato da crise vigíliana e documento-chave para compreender as vacilações do papa.',
  },
  {
    autor: 'Papa Vigílio',
    titulo: 'Constitutum I',
    data: '14 de maio de 553 d.C.',
    idioma: 'Latim',
    descricao:
      'Extenso decreto teológico no qual Vigílio recusa a condenação nominal dos Três Capítulos.',
    relevancia:
      'Documento central da resistência papal ao concílio.',
  },
  {
    autor: 'Papa Vigílio',
    titulo: 'Constitutum II',
    data: '23 de fevereiro de 554 d.C.',
    idioma: 'Latim',
    descricao:
      'Segundo decreto de Vigílio, que anula o Constitutum I e condena formalmente os Três Capítulos.',
    relevancia:
      'Documento final da crise vigíliana e da aceitação papal das decisões de 553.',
  },
];

export const fontesPrimariasOutros: FonteComDisponibilidade[] = [
  {
    autor: 'Facundo de Hermiane',
    titulo: 'Pro defensione trium capitulorum',
    data: 'c. 547–550 d.C.',
    idioma: 'Latim',
    descricao:
      'A mais extensa defesa dos Três Capítulos em toda a literatura patrística latina, em doze livros.',
    relevancia:
      'Fonte indispensável para a perspectiva tricapitulina ocidental.',
    disponibilidade: 'PL 67, 527–802; CCSL 90A.',
  },
  {
    autor: 'Libérato de Cartago',
    titulo: 'Breviarium causae Nestorianorum et Eutychianorum',
    data: 'c. 565 d.C.',
    idioma: 'Latim',
    descricao:
      'Breve compêndio da controvérsia tricapitulina com perspectiva tricapitulina africana.',
    relevancia:
      'Fonte importante para a perspectiva africana sobre a controvérsia.',
    disponibilidade: 'PL 68, 963–1002.',
  },
  {
    autor: 'Justiniano I',
    titulo: 'Liber adversus Origenem',
    data: '543 d.C.',
    idioma: 'Grego (original); Latim (tradução)',
    descricao:
      'Tratado dogmático no qual Justiniano condena nove proposições origenistas.',
    relevancia:
      'Fonte primária para a condenação do origenismo.',
    disponibilidade: 'PG 86, 945–992.',
  },
];

export const fontesSecundarias: FonteComDisponibilidade[] = [
  {
    autor: 'Aloys Grillmeier, S.J.',
    titulo: 'Christ in Christian Tradition, vol. II/2',
    data: '1995',
    idioma: 'Inglês (original alemão, 1989)',
    descricao:
      'Análise mais detalhada e autoritativa da teologia neocalcedoniana e do concílio de 553.',
    relevancia:
      'Obra de referência insubstituível para a cristologia do século VI.',
  },
  {
    autor: 'Richard Price',
    titulo: 'The Acts of the Council of Constantinople of 553',
    data: '2009',
    idioma: 'Inglês',
    descricao:
      'Tradução inglesa completa e anotada das atas do concílio com introdução histórica.',
    relevancia:
      'Tornou as atas acessíveis ao público anglófono pela primeira vez.',
  },
  {
    autor: 'John Meyendorff',
    titulo: 'Imperial Unity and Christian Divisions',
    data: '1989',
    idioma: 'Inglês',
    descricao:
      'História da Igreja de 450 a 680 d.C. com perspectiva ortodoxa equilibrada.',
    relevancia:
      'Síntese de referência para o período, combinando erudição com sensibilidade histórica.',
  },
  {
    autor: 'Patrick T. R. Gray',
    titulo: 'The Defense of Chalcedon in the East (451–553)',
    data: '1979',
    idioma: 'Inglês',
    descricao:
      'Estudo da defesa da Definição de Calcedônia no Oriente entre 451 e 553.',
    relevancia:
      'Obra fundamental para a compreensão do neocalcedonianismo.',
  },
  {
    autor: 'Karl Joseph von Hefele & Henri Leclercq',
    titulo: 'Histoire des Conciles, vol. III/1–2',
    data: '1909',
    idioma: 'Francês',
    descricao:
      'Volume da monumental história dos concílios cobrindo o período de 451 a 600 d.C.',
    relevancia:
      'Obra de referência clássica para a história conciliar.',
  },
];

export const fontesModernas: FonteComDisponibilidade[] = [
  {
    autor: 'Daniel Hombergen',
    titulo: 'The Second Origenist Controversy',
    data: '2001',
    idioma: 'Inglês',
    descricao:
      'Reavaliação crítica da Segunda Controvérsia Origenista com base nas fontes monásticas palestinas.',
    relevancia:
      'Estudo revisionista fundamental para o debate sobre o estatuto dos anátemas anti-origenistas.',
  },
  {
    autor: 'Kenneth Gallagher',
    titulo: 'Church Law and Church Order in Rome and Byzantium',
    data: '2002',
    idioma: 'Inglês',
    descricao:
      'Estudo comparativo do direito canônico romano e bizantino nos séculos V e VI.',
    relevancia:
      'Obra de referência para a dimensão jurídico-canônica do concílio.',
  },
  {
    autor: 'Henry Chadwick',
    titulo: 'The Church in Ancient Society',
    data: '2001',
    idioma: 'Inglês',
    descricao:
      'História abrangente da Igreja antiga com capítulos sobre Justiniano e Constantinopla II.',
    relevancia:
      'Síntese acessível e autoritativa para estudantes e pesquisadores.',
  },
  {
    autor: 'Franz Diekamp',
    titulo: 'Die origenistischen Streitigkeiten',
    data: '1899',
    idioma: 'Alemão',
    descricao:
      'Estudo pioneiro da controvérsia origenista do século VI e sua relação com o Quinto Concílio.',
    relevancia:
      'Obra fundacional da historiografia moderna sobre a controvérsia origenista.',
  },
  {
    autor: 'Gilbert Dagron',
    titulo: 'Empereur et prêtre',
    data: '1996',
    idioma: 'Francês',
    descricao:
      'Análise crítica do conceito de cesaropapismo aplicado ao Império Bizantino.',
    relevancia:
      'Reavaliação fundamental do conceito de cesaropapismo e de sua aplicação a Justiniano.',
  },
];

export const recursosOnline: { nome: string; descricao: string; url: string }[] = [
  {
    nome: 'Documenta Catholica Omnia',
    descricao: 'Coleção digital de documentos eclesiásticos, incluindo textos dos concílios ecumênicos.',
    url: 'https://www.documentacatholicaomnia.eu',
  },
  {
    nome: 'Philip Schaff, Nicene and Post-Nicene Fathers',
    descricao: 'Tradução inglesa das obras dos Padres da Igreja, incluindo textos relacionados a Constantinopla II.',
    url: 'https://www.ccel.org/ccel/schaff',
  },
];

export const fontes: Fontes = {
  introducao:
    "O corpus documental do Segundo Concílio de Constantinopla (553 d.C.) é um dos mais extensos e complexos da conciliaridade antiga, abrangendo atas conciliares em grego e latim, tratados dogmáticos imperiais, correspondência papal, crônicas contemporâneas e defesas teológicas dos Três Capítulos. A preservação desse corpus foi assegurada pela tradição manuscrita bizantina (para os textos gregos) e pelas coleções canônicas ocidentais (para as traduções latinas), embora a transmissão textual tenha sido marcada por lacunas, interpolações e rearranjos editoriais que tornam a crítica textual particularmente desafiadora. A edição crítica padrão das atas conciliares é a de Eduard Schwartz e Johannes Straub na série Acta Conciliorum Oecumenicorum (ACO), publicada pela Academia de Ciências de Berlim entre 1914 e 1983, complementada pela tradução inglesa anotada de Richard Price (2009). A presente seção cataloga as principais fontes primárias, os estudos secundários de referência e as edições críticas indispensáveis para a pesquisa acadêmica sobre o concílio de 553.",

  fontesPrimarias: [
    {
      id: "aco-iv",
      titulo: "Acta Conciliorum Oecumenicorum, Series IV: Concilium Universale Constantinopolitanum sub Iustiniano habitum",
      autor: "Eduard Schwartz & Johannes Straub (editores)",
      data: "553 d.C. (documentos originais); 1971 (edição crítica)",
      idioma: "Grego e Latim (bilingue)",
      tipo: "Atas conciliares oficiais",
      descricao:
        "Edição crítica padrão das atas do Segundo Concílio de Constantinopla, publicada em dois volumes (ACO IV.1 e IV.2) na série monumental iniciada por Eduard Schwartz. O volume IV.1 contém as atas das oito sessões conciliares (5 de maio a 2 de junho de 553), incluindo a carta imperial de Justiniano, os relatórios das delegações a Vigílio, os dossiês documentais sobre os Três Capítulos, a Sentença Final e os catorze anátemas, com as 165 subscrições episcopais. O volume IV.2 contém os documentos complementares: o Constitutum I de Vigílio, a Epístola a Eutíquio, o Constitutum II, e os textos relacionados à condenação dos Três Capítulos. A edição apresenta o texto grego original e a versio latina antiqua em colunas paralelas, com aparato crítico exaustivo.",
      edicaoCritica:
        "Schwartz, E. & Straub, J. (eds.), Acta Conciliorum Oecumenicorum, Series IV, vol. 1–2, Berlin: Walter de Gruyter, 1971.",
      relevancia:
        "Fonte primária indispensável e insubstituível para qualquer estudo acadêmico do concílio. Todas as citações das atas nas seções anteriores deste projeto (sessões, anátemas, papado, controvérsias) são baseadas nesta edição.",
    },
    {
      id: "justiniano-edito-tres-capitulos",
      titulo: "Edictum de Tribus Capitulis (Édito dos Três Capítulos)",
      autor: "Justiniano I, Imperador",
      data: "544/545 d.C.",
      idioma: "Grego (original); Latim (tradução contemporânea)",
      tipo: "Édito imperial dogmático",
      descricao:
        "Édito imperial que iniciou formalmente a controvérsia dos Três Capítulos ao ordenar a condenação de Teodoro de Mopsuéstia e seus escritos, dos escritos de Teodoreto contra Cirilo e do Concílio de Éfeso, e da Epístola de Ibas a Maris. O édito é um tratado teológico extenso (c. 4.000 palavras) que combina argumentação patrística, exegese bíblica e autoridade imperial para demonstrar que os Três Capítulos são incompatíveis com a fé de Calcedônia. O texto foi preservado em fragmentos nas atas do concílio de 553 (ACO IV.1) e na tradução latina de Facundo de Hermiane.",
      edicaoCritica:
        "Fragmentos em ACO IV.1, pp. 28–35; tradução latina em Facundo de Hermiane, Pro defensione trium capitulorum, PL 67, 527–802.",
      relevancia:
        "Documento fundacional de toda a controvérsia tricapitulina. Sem este édito, o concílio de 553 não teria sido convocado.",
    },
    {
      id: "justiniano-edito-fe-ortodoxa",
      titulo: "Edictum de Fide Orthodoxa (Édito sobre a Fé Ortodoxa)",
      autor: "Justiniano I, Imperador",
      data: "551 d.C.",
      idioma: "Grego",
      tipo: "Édito imperial dogmático",
      descricao:
        "Segundo grande édito teológico de Justiniano, publicado em julho de 551 como preparação para o concílio ecumênico que o imperador planejava convocar. O édito reafirma a condenação dos Três Capítulos, incorpora a fórmula teopasquista ('Um da Trindade padeceu na carne') e apresenta uma exposição cristológica neocalcedoniana que antecipa a Sentença Final de 553. A publicação unilateral do édito, sem consulta ao Papa Vigílio, precipitou a fuga do papa para a Basílica de Santa Eufêmia em Calcedônia.",
      edicaoCritica:
        "ACO IV.1, pp. 24–27; Justinian, On the Orthodox Faith, em Price (2009), vol. 1, pp. 127–142.",
      relevancia:
        "Documento-chave para compreender a teologia pessoal de Justiniano e a preparação doutrinária do concílio de 553.",
    },
    {
      id: "justiniano-liber-adversus-origenem",
      titulo: "Liber adversus Origenem (Tratado contra Orígenes)",
      autor: "Justiniano I, Imperador",
      data: "543 d.C.",
      idioma: "Grego (original); Latim (tradução)",
      tipo: "Tratado teológico imperial",
      descricao:
        "Tratado dogmático no qual Justiniano condena nove proposições origenistas, incluindo a pré-existência das almas, a queda primordial dos intelectos, a apocatástase universal e a natureza esférica dos corpos ressuscitados. O Liber foi enviado aos patriarcas orientais para subscrição e serviu como base para os quinze anátemas anti-origenistas associados ao concílio de 553.",
      edicaoCritica:
        "PG 86, 945–992; Diekamp, F. (ed.), Die origenistischen Streitigkeiten, Münster, 1899, pp. 90–105.",
      relevancia:
        "Fonte primária para a condenação do origenismo e para o debate historiográfico sobre a relação entre os quinze anátemas e o concílio ecumênico.",
    },
    {
      id: "vigilio-iudicatum",
      titulo: "Iudicatum (Julgamento sobre os Três Capítulos)",
      autor: "Papa Vigílio",
      data: "11 de abril de 548 d.C.",
      idioma: "Latim",
      tipo: "Decreto papal",
      descricao:
        "Primeiro pronunciamento formal de Vigílio sobre os Três Capítulos, emitido sob pressão imperial em Constantinopla. O Iudicatum condena os Três Capítulos com uma cláusula de salvaguarda de Calcedônia ('salva in omnibus reverentia synodi Chalcedonensis'). O documento foi retirado por Vigílio em 550 após a reação violenta do episcopado ocidental. O texto original está perdido; fragmentos são preservados em Facundo de Hermiane e nas atas do concílio de 553.",
      edicaoCritica:
        "Fragmentos em Facundo de Hermiane, Pro defensione trium capitulorum, PL 67, 573–580; ACO IV.1, pp. 55–58.",
      relevancia:
        "Primeiro ato da crise vigíliana e documento-chave para compreender as vacilações do papa.",
    },
    {
      id: "vigilio-constitutum-i",
      titulo: "Constitutum I (Primeira Constituição Apostólica)",
      autor: "Papa Vigílio",
      data: "14 de maio de 553 d.C.",
      idioma: "Latim",
      tipo: "Decreto papal solene",
      descricao:
        "Extenso decreto teológico (c. 8.000 palavras) no qual Vigílio recusa a condenação nominal dos Três Capítulos, argumentando que a Igreja não anatematiza os mortos, que a reabilitação calcedonense de Teodoreto e Ibas é vinculante, e que apenas proposições heréticas abstratas (não autores concretos) podem ser condenadas. O Constitutum I é o documento mais erudito e coerente de toda a crise vigíliana, mas foi ignorado pelo concílio e posteriormente anulado pelo próprio Vigílio no Constitutum II.",
      edicaoCritica:
        "ACO IV.1, pp. 122–188; PL 69, 147–198.",
      relevancia:
        "Documento central da resistência papal ao concílio e principal fonte para a teologia tricapitulina ocidental.",
    },
    {
      id: "vigilio-epistula-eutychium",
      titulo: "Epistula ad Eutychium (Carta ao Patriarca Eutíquio)",
      autor: "Papa Vigílio",
      data: "8 de dezembro de 553 d.C.",
      idioma: "Latim",
      tipo: "Carta papal de capitulação",
      descricao:
        "Carta na qual Vigílio, após seis meses de isolamento e pressão, reconhece que havia sido mal informado sobre o conteúdo dos Três Capítulos, retrata as posições do Constitutum I e aceita integralmente as decisões do concílio. A linguagem da carta sugere coação extrema e humilhação pessoal.",
      edicaoCritica:
        "ACO IV.2, pp. 242–248; PL 69, 199–206.",
      relevancia:
        "Documento da capitulação de Vigílio e da restauração da comunhão entre o papado e o concílio.",
    },
    {
      id: "vigilio-constitutum-ii",
      titulo: "Constitutum II (Segunda Constituição Apostólica)",
      autor: "Papa Vigílio",
      data: "23 de fevereiro de 554 d.C.",
      idioma: "Latim",
      tipo: "Decreto papal",
      descricao:
        "Segundo decreto de Vigílio, que anula de facto o Constitutum I e condena formal e nominalmente os Três Capítulos, alinhando-se integralmente com os catorze anátemas do concílio. O texto é notavelmente mais breve e menos argumentativo que o Constitutum I, sugerindo que foi redigido pela chancelaria patriarcal de Constantinopla.",
      edicaoCritica:
        "ACO IV.2, pp. 251–255; PL 69, 207–212.",
      relevancia:
        "Documento final da crise vigíliana e da aceitação papal das decisões de 553.",
    },
    {
      id: "facundo-pro-defensione",
      titulo: "Pro defensione trium capitulorum (Em Defesa dos Três Capítulos)",
      autor: "Facundo de Hermiane",
      data: "c. 547–550 d.C.",
      idioma: "Latim",
      tipo: "Tratado teológico-polemico",
      descricao:
        "A mais extensa e erudita defesa dos Três Capítulos em toda a literatura patrística latina. Facundo, bispo de Hermiane na África Proconsular, compôs doze livros nos quais demonstra, com base em fontes patrísticas gregas e latinas, que os escritos de Teodoro de Mopsuéstia, Teodoreto de Ciro e Ibas de Edessa são compatíveis com a fé de Calcedônia e que a condenação póstuma é canonicamente ilegítima. A obra é uma mina de informações sobre a teologia antioquena e sobre a recepção ocidental da controvérsia.",
      edicaoCritica:
        "PL 67, 527–802; CCSL 90A (ed. J.-M. Clément & R. Vander Plaetse, Turnhout, 1974).",
      relevancia:
        "Fonte primária indispensável para a perspectiva tricapitulina ocidental e para a teologia antioquena preservada em tradução latina.",
    },
    {
      id: "evagrio-historia",
      titulo: "Historia Ecclesiastica (História Eclesiástica)",
      autor: "Evágrio Escolástico",
      data: "c. 593 d.C.",
      idioma: "Grego",
      tipo: "História eclesiástica",
      descricao:
        "História eclesiástica em seis livros que cobre o período de 431 a 593 d.C., com ênfase nas controvérsias cristológicas do século VI. O livro IV (capítulos 38–39) contém o relato mais detalhado do concílio de 553 por um autor contemporâneo, incluindo a afirmação de que o concílio 'condenou Orígenes e seus escritos'. Evágrio, que era advogado do patriarca de Antioquia, oferece uma perspectiva oriental moderada sobre os eventos.",
      edicaoCritica:
        "PG 86, 2417–2886; Bidez, J. & Parmentier, L. (eds.), The Ecclesiastical History of Evagrius Scholasticus, London, 1898 (reimpressão 1964).",
      relevancia:
        "Principal fonte narrativa contemporânea sobre o concílio de 553 e a controvérsia dos Três Capítulos no Oriente.",
    },
    {
      id: "victor-tununa-chronicon",
      titulo: "Chronicon (Crônica)",
      autor: "Vítor de Tununa",
      data: "c. 567 d.C.",
      idioma: "Latim",
      tipo: "Crônica universal",
      descricao:
        "Crônica universal em latim que cobre o período da criação até 567 d.C., com entradas anuais detalhadas sobre os eventos eclesiásticos do século VI. As entradas para os anos 544–555 contêm informações preciosas sobre a controvérsia dos Três Capítulos, a prisão de Vigílio, o Iudicatum e o Cisma Tricapitulino na África. Vítor, bispo de Tununa na África Proconsular, foi pessoalmente perseguido por sua resistência à condenação dos Três Capítulos e escreveu a partir da perspectiva de um tricapitulino africano.",
      edicaoCritica:
        "PL 68, 941–962; MGH AA 11 (ed. Th. Mommsen, Berlim, 1894), pp. 178–206.",
      relevancia:
        "Fonte primária única para a perspectiva tricapitulina africana e para a cronologia detalhada da crise vigíliana.",
    },
    {
      id: "malalas-chronographia",
      titulo: "Chronographia (Cronografia)",
      autor: "João Malalas",
      data: "c. 565–578 d.C.",
      idioma: "Grego",
      tipo: "Crônica universal",
      descricao:
        "Crônica universal em dezoito livros que cobre a história do mundo desde a criação até 565 d.C. Os livros XVII e XVIII contêm informações sobre o reinado de Justiniano, incluindo referências à controvérsia dos Três Capítulos, ao édito de 544/545 e ao concílio de 553. Malalas, que era funcionário imperial em Antioquia e Constantinopla, oferece uma perspectiva secular e cortesã sobre os eventos, com menos interesse teológico mas mais detalhes administrativos do que as fontes eclesiásticas.",
      edicaoCritica:
        "PG 97, 9–716; Thurn, H. (ed.), Ioannis Malalae Chronographia, Berlin: Walter de Gruyter (CFHB 35), 2000.",
      relevancia:
        "Fonte complementar para o contexto político e administrativo do concílio e da controvérsia tricapitulina.",
    },
    {
      id: "cirilo-citopolis-vita-sabae",
      titulo: "Vita Sabae (Vida de São Sabas)",
      autor: "Cirilo de Citópolis",
      data: "c. 555 d.C.",
      idioma: "Grego",
      tipo: "Hagiografia monástica",
      descricao:
        "Biografia de São Sabas, o Santificado (439–532), fundador da Grande Laura no deserto da Judeia. Os capítulos 70–71 contêm o relato mais detalhado da crise origenista na Palestina e da embaixada dos monges sabaítas a Constantinopla que levou ao Édito de 543. Cirilo, contemporâneo dos eventos e membro da comunidade sabaíta, oferece uma perspectiva anti-origenista e anti-Ascidas que é essencial para compreender a dimensão monástica da controvérsia.",
      edicaoCritica:
        "Schwartz, E. (ed.), Kyrillos von Skythopolis, TU 49.2, Leipzig, 1939; Festugière, A.-J. (trad. fr.), Les Moines de Palestine, Paris, 1962.",
      relevancia:
        "Fonte primária indispensável para a crise origenista palestina e para o papel de Teodoro Ascidas na gênese da controvérsia dos Três Capítulos.",
    },
    {
      id: "liberatus-breviarium",
      titulo: "Breviarium causae Nestorianorum et Eutychianorum",
      autor: "Libérato de Cartago",
      data: "c. 565 d.C.",
      idioma: "Latim",
      tipo: "Compêndio histórico-teológico",
      descricao:
        "Breve compêndio da controvérsia nestoriana e eutiquiana desde o século V até a década de 560, com foco na controvérsia dos Três Capítulos. Libérato, diácono de Cartago e partidário dos Três Capítulos, oferece uma narrativa tendenciosa mas informativa dos eventos, incluindo a menção de que 'o concílio de Constantinopla condenou Orígenes, Dídimo e Evágrio'.",
      edicaoCritica:
        "PL 68, 963–1002; Schwartz, E. (ed.), ACO IV.2, pp. 98–141.",
      relevancia:
        "Fonte importante para a perspectiva tricapitulina africana e para o debate sobre a condenação do origenismo pelo concílio.",
    },
  ],

  fontesSecundarias: [
    {
      id: "grillmeier-christ-tradition",
      autor: "Aloys Grillmeier, S.J.",
      titulo: "Christ in Christian Tradition, vol. II/2: The Church of Constantinople in the Sixth Century",
      ano: 1995,
      editora: "Westminster John Knox Press (tradução inglesa de M. Ehrhardt)",
      idioma: "Inglês (original alemão, 1989)",
      tipo: "Monografia acadêmica de referência",
      descricao:
        "Segundo volume da monumental história da cristologia patrística de Grillmeier, dedicado à Igreja de Constantinopla no século VI. Os capítulos 3–5 contêm a análise mais detalhada e autoritativa da teologia neocalcedoniana, da controvérsia dos Três Capítulos e do concílio de 553 disponíveis em qualquer idioma. Grillmeier analisa a síntese entre Cirilo e Calcedônia, a teoria da enhypostasia de Leôncio de Bizâncio, a fórmula teopasquista e a condenação do origenismo com rigor filológico e teológico incomparável.",
      contribuicao:
        "Obra de referência insubstituível para a cristologia do século VI. A análise de Grillmeier sobre a relação entre Cirilo, Calcedônia e Constantinopla II permanece o padrão acadêmico contra o qual todas as interpretações subsequentes são medidas.",
    },
    {
      id: "price-acts-constantinople",
      autor: "Richard Price",
      titulo: "The Acts of the Council of Constantinople of 553, with Related Texts on the Three Chapters Controversy",
      ano: 2009,
      editora: "Liverpool University Press (Translated Texts for Historians, vol. 51)",
      idioma: "Inglês",
      tipo: "Tradução anotada das atas conciliares",
      descricao:
        "Tradução inglesa completa e anotada das atas do concílio de 553 (ACO IV.1–2), com introdução histórica de 120 páginas, notas explicativas detalhadas e textos complementares sobre a controvérsia dos Três Capítulos. A introdução de Price contém a análise mais atualizada do debate historiográfico sobre a condenação do origenismo e a relação entre o sínodo pré-conciliar e o concílio ecumênico.",
      contribuicao:
        "Tornou as atas do concílio acessíveis ao público acadêmico anglófono pela primeira vez. A introdução histórica é a síntese mais equilibrada e atualizada da controvérsia tricapitulina disponível.",
    },
    {
      id: "meyendorff-imperial-unity",
      autor: "John Meyendorff",
      titulo: "Imperial Unity and Christian Divisions: The Church 450–680 A.D.",
      ano: 1989,
      editora: "St. Vladimir's Seminary Press",
      idioma: "Inglês",
      tipo: "Síntese histórica",
      descricao:
        "História da Igreja no período de 450 a 680 d.C., com ênfase na relação entre a política imperial bizantina e as divisões cristológicas. Os capítulos 8–10 cobrem a controvérsia dos Três Capítulos, o concílio de 553 e a crise do papado com perspectiva ortodoxa equilibrada. Meyendorff avalia o cesaropapismo justinianeu com nuances, reconhecendo tanto suas realizações teológicas quanto seus fracassos eclesiais.",
      contribuicao:
        "Síntese histórica de referência para o período, combinando erudição teológica ortodoxa com sensibilidade histórica. Particularmente valioso para a avaliação do impacto eclesial do concílio.",
    },
    {
      id: "gray-defense-chalcedon",
      autor: "Patrick T. R. Gray",
      titulo: "The Defense of Chalcedon in the East (451–553)",
      ano: 1979,
      editora: "E. J. Brill (Studies in the History of Christian Thought, vol. 20)",
      idioma: "Inglês",
      tipo: "Monografia acadêmica",
      descricao:
        "Estudo detalhado da defesa da Definição de Calcedônia no Oriente entre 451 e 553, cobrindo os teólogos calcedonianos (Leôncio de Bizâncio, Leôncio de Jerusalém, João de Cesareia) e suas estratégias de harmonização com a tradição ciriliana. Gray analisa a evolução do neocalcedonianismo desde suas origens no final do século V até sua consagração dogmática em 553.",
      contribuicao:
        "Obra fundamental para a compreensão da evolução teológica que tornou possível a síntese neocalcedoniana de 553. A análise de Leôncio de Bizâncio e da teoria da enhypostasia é particularmente valiosa.",
    },
    {
      id: "chadwick-justinian",
      autor: "Henry Chadwick",
      titulo: "The Church in Ancient Society: From Galilee to Gregory the Great",
      ano: 2001,
      editora: "Oxford University Press",
      idioma: "Inglês",
      tipo: "Síntese histórica",
      descricao:
        "História abrangente da Igreja antiga desde as origens até Gregório Magno, com capítulos dedicados a Justiniano, à controvérsia dos Três Capítulos e ao concílio de 553. Chadwick, um dos maiores patrologistas do século XX, oferece uma avaliação equilibrada e acessível do concílio, com atenção particular à crise do papado e ao Cisma Tricapitulino.",
      contribuicao:
        "Síntese acessível e autoritativa para estudantes e pesquisadores não especializados. A avaliação de Chadwick sobre a crise de Vigílio é particularmente perspicaz.",
    },
    {
      id: "gallagher-church-law",
      autor: "Kenneth Gallagher",
      titulo: "Church Law and Church Order in Rome and Byzantium: A Comparative Study",
      ano: 2002,
      editora: "Ashgate Publishing",
      idioma: "Inglês",
      tipo: "Estudo comparativo de direito canônico",
      descricao:
        "Estudo comparativo do direito canônico romano e bizantino nos séculos V e VI, com análise detalhada da legislação eclesiástica de Justiniano (Novellae) e de sua relação com os concílios ecumênicos. Gallagher analisa a ausência de cânones disciplinares em Constantinopla II e a simbiose legislativa entre as Novellae e a Sentença Sinodal de 553.",
      contribuicao:
        "Obra de referência para a dimensão jurídico-canônica do concílio e para a relação entre legislação imperial e direito conciliar no Império Bizantino.",
    },
    {
      id: "hombergen-second-origenist",
      autor: "Daniel Hombergen",
      titulo: "The Second Origenist Controversy: A New Perspective on Cyril of Scythopolis' Monastic Biographies",
      ano: 2001,
      editora: "Pontificio Ateneo S. Anselmo (Studia Anselmiana, 132)",
      idioma: "Inglês",
      tipo: "Monografia acadêmica",
      descricao:
        "Reavaliação crítica da Segunda Controvérsia Origenista com base na análise detalhada das fontes monásticas palestinas (Cirilo de Citópolis, João Mosco). Hombergen argumenta que a condenação do origenismo foi uma iniciativa local dos sabaítas e que os quinze anátemas não foram ratificados pelo concílio ecumênico de 553.",
      contribuicao:
        "Estudo revisionista fundamental para o debate sobre o estatuto canônico dos quinze anátemas anti-origenistas e para a compreensão da dimensão monástica da controvérsia.",
    },
    {
      id: "hefele-leclercq-conciles",
      autor: "Karl Joseph von Hefele & Henri Leclercq",
      titulo: "Histoire des Conciles d'après les documents originaux, vol. III/1–2",
      ano: 1909,
      editora: "Letouzey et Ané, Paris",
      idioma: "Francês (original alemão, traduzido e ampliado por Leclercq)",
      tipo: "História conciliar de referência",
      descricao:
        "Volume III da monumental história dos concílios de Hefele, cobrindo o período de 451 a 600 d.C. Os capítulos sobre o concílio de 553 (pp. 250–400) contêm a análise mais detalhada disponível em francês, com tradução integral dos documentos principais e discussão exaustiva das questões historiográficas. Embora datada em alguns aspectos, a obra de Hefele-Leclercq permanece indispensável pela riqueza de sua documentação.",
      contribuicao:
        "Obra de referência clássica para a história conciliar. A documentação reunida por Hefele e ampliada por Leclercq é insubstituível para pesquisadores que leem francês.",
    },
    {
      id: "diekamp-origenistischen",
      autor: "Franz Diekamp",
      titulo: "Die origenistischen Streitigkeiten im sechsten Jahrhundert und das fünfte allgemeine Concil",
      ano: 1899,
      editora: "Aschendorff, Münster",
      idioma: "Alemão",
      tipo: "Monografia acadêmica",
      descricao:
        "Estudo pioneiro da controvérsia origenista do século VI e de sua relação com o Quinto Concílio Ecumênico. Diekamp foi o primeiro estudioso a argumentar sistematicamente que os quinze anátemas contra Orígenes foram emitidos por um sínodo patriarcal separado e não pelo concílio ecumênico de 553, uma tese que continua a influenciar a historiografia contemporânea.",
      contribuicao:
        "Obra fundacional da historiografia moderna sobre a controvérsia origenista. A tese de Diekamp sobre a separação entre o sínodo pré-conciliar e o concílio ecumênico permanece o ponto de partida de todo debate subsequente.",
    },
    {
      id: "dagron-empereur-pretre",
      autor: "Gilbert Dagron",
      titulo: "Empereur et prêtre: Étude sur le 'césaropapisme' byzantin",
      ano: 1996,
      editora: "Gallimard, Paris",
      idioma: "Francês",
      tipo: "Estudo de história política e eclesial",
      descricao:
        "Análise crítica do conceito de 'cesaropapismo' aplicado ao Império Bizantino, com estudo detalhado da relação entre Justiniano e a Igreja. Dagron argumenta que o termo 'cesaropapismo' é anacrônico e reducionista, e que a relação entre imperador e patriarcado era mais complexa e negociada do que o modelo cesaropapista sugere.",
      contribuicao:
        "Reavaliação fundamental do conceito de cesaropapismo e de sua aplicação ao reinado de Justiniano. Indispensável para a compreensão do contexto político do concílio de 553.",
    },
  ],

  edicoesCriticas: [
    {
      id: "aco-schwartz-straub",
      titulo: "Acta Conciliorum Oecumenicorum (ACO), Series IV",
      editor: "Eduard Schwartz & Johannes Straub",
      data: "1971 (vol. IV.1–2)",
      volumes: "2 volumes (IV.1: Acta; IV.2: Collectio Sabbaitica)",
      descricao:
        "Edição crítica padrão das atas do concílio de 553, publicada na série monumental ACO iniciada por Eduard Schwartz em 1914. A edição apresenta o texto grego original e a versio latina antiqua em colunas paralelas, com aparato crítico exaustivo que registra as variantes de todos os manuscritos conhecidos. O volume IV.1 contém as atas das oito sessões; o volume IV.2 contém os documentos complementares e a Collectio Sabbaitica (coleção de documentos sobre a controvérsia dos Três Capítulos preservada no mosteiro de São Sabas).",
      manuscritosBase: [
        "Codex Vaticanus Graecus 1455 (século XIII) — principal testemunho grego das atas.",
        "Codex Vaticanus Graecus 842 (século XII) — testemunho secundário.",
        "Codex Parisinus Graecus 1115 (século XI) — fragmentos.",
        "Codex Florentinus Plut. IX.23 (século XII) — versio latina antiqua.",
        "Codex Veronensis LX (século VIII) — fragmentos latinos.",
        "Collectio Avellana (século VI) — cartas de Vigílio e documentos relacionados.",
      ],
      observacoes:
        "A edição de Schwartz-Straub é a base de todas as traduções modernas (Price 2009, em inglês; Lamberz 2007, em alemão). Os manuscritos gregos são relativamente tardios (séculos XI–XIII), o que reflete a perda dos exemplares mais antigos durante as crises iconoclastas e as invasões árabes. A versio latina antiqua, preservada em manuscritos mais antigos (séculos VI–VIII), é por vezes mais fiel ao original do que a tradição grega tardia.",
    },
    {
      id: "mansix",
      titulo: "Sacrorum Conciliorum Nova et Amplissima Collectio (Mansi), vol. IX",
      editor: "Giovanni Domenico Mansi",
      data: "1763 (edição original); 1902 (reimpressão Graz)",
      volumes: "Vol. IX, cols. 163–554",
      descricao:
        "Edição do concílio de 553 na monumental coleção de Mansi, que foi a edição padrão dos concílios ecumênicos antes da publicação da ACO. O volume IX contém o texto latino das atas (baseado na versio latina antiqua e em edições renascentistas), os documentos de Vigílio, os anátemas e as subscrições episcopais. Embora superada pela ACO em termos de crítica textual, a edição de Mansi permanece útil por sua acessibilidade e por incluir documentos que não constam da ACO.",
      manuscritosBase: [
        "Baseada em edições impressas anteriores: Surius (1567), Binius (1606), Labbe-Cossart (1671).",
        "Manuscritos latinos da Biblioteca Vaticana e da Biblioteca Marciana de Veneza.",
      ],
      observacoes:
        "A edição de Mansi é a mais acessível para pesquisadores sem acesso à ACO e foi a base da maioria dos estudos sobre o concílio até meados do século XX. Deve ser utilizada com cautela, pois o texto latino contém erros de transmissão e interpolações que a ACO corrigiu.",
    },
    {
      id: "pg-86",
      titulo: "Patrologia Graeca, vol. 86",
      editor: "Jacques-Paul Migne",
      data: "1865",
      volumes: "Vol. 86, cols. 1–2886",
      descricao:
        "O volume 86 da Patrologia Graeca de Migne contém os textos de Justiniano I (incluindo o Liber adversus Origenem, cols. 945–992, e o Édito sobre a Fé Ortodoxa) e de Evágrio Escolástico (Historia Ecclesiastica, cols. 2417–2886). Embora a edição de Migne seja notoriamente deficiente em termos de crítica textual, ela permanece a fonte mais acessível para os textos de Justiniano e Evágrio em grego.",
      manuscritosBase: [
        "Baseada em edições impressas anteriores e em manuscritos da Bibliothèque nationale de France.",
      ],
      observacoes:
        "A PG 86 deve ser utilizada apenas como referência preliminar; para trabalho acadêmico sério, as edições críticas de Schwartz-Straub (ACO), Bidez-Parmentier (Evágrio) e Thurn (Malalas) são indispensáveis.",
    },
    {
      id: "pl-67-69",
      titulo: "Patrologia Latina, vols. 67–69",
      editor: "Jacques-Paul Migne",
      data: "1847–1848",
      volumes: "Vol. 67 (Facundo), vol. 68 (Vítor, Libérato), vol. 69 (Vigílio)",
      descricao:
        "Os volumes 67–69 da Patrologia Latina contêm os textos latinos mais importantes relacionados ao concílio: a defesa dos Três Capítulos de Facundo de Hermiane (PL 67, 527–802), as crônicas de Vítor de Tununa e Libérato de Cartago (PL 68), e os documentos de Vigílio — Iudicatum, Constitutum I, Epístola a Eutíquio e Constitutum II (PL 69). Como a PG, a PL é deficiente em termos críticos, mas permanece a fonte mais acessível para os textos latinos.",
      manuscritosBase: [
        "Baseada em edições impressas anteriores (Galland, 1765–1781; Sirmond, 1629) e em manuscritos da Bibliothèque nationale de France.",
      ],
      observacoes:
        "Para Facundo de Hermiane, a edição CCSL 90A (Clément & Vander Plaetse, 1974) é muito superior à PL 67. Para os documentos de Vigílio, a ACO IV.1–2 é a edição de referência.",
    },
    {
      id: "ccsl-90a",
      titulo: "Corpus Christianorum, Series Latina, vol. 90A",
      editor: "J.-M. Clément & R. Vander Plaetse",
      data: "1974",
      volumes: "Vol. 90A: Facundus Hermianensis, Opera",
      descricao:
        "Edição crítica moderna das obras completas de Facundo de Hermiane, incluindo o Pro defensione trium capitulorum (12 livros), o Contra Mocianum e a Epistula fidei catholicae. A edição é baseada em todos os manuscritos conhecidos e substitui a PL 67 como referência acadêmica para a defesa tricapitulina ocidental.",
      manuscritosBase: [
        "Codex Parisinus Latinus 12212 (século IX) — principal testemunho.",
        "Codex Sangallensis 190 (século IX).",
        "Codex Vaticanus Latinus 1340 (século XII).",
      ],
      observacoes:
        "Edição de referência para Facundo de Hermiane. O aparato crítico é exaustivo e a introdução contém uma análise detalhada da tradição manuscrita.",
    },
  ],

  notaBibliografica:
    "A bibliografia sobre o Segundo Concílio de Constantinopla é vasta e multilíngue, abrangendo estudos em grego, latim, alemão, francês, inglês, italiano e russo. A presente seleção limita-se às fontes primárias e secundárias mais indispensáveis para a pesquisa acadêmica de nível avançado. Para uma bibliografia mais exaustiva, consulte: (1) Richard Price, The Acts of the Council of Constantinople of 553 (2009), vol. 1, pp. 60–72; (2) Aloys Grillmeier, Christ in Christian Tradition, vol. II/2 (1995), pp. 425–432; (3) Karl-Heinz Uthemann, 'Das fünfte ökumenische Konzil', em Theologische Realenzyklopädie, vol. 11 (1983), pp. 253–263. A pesquisa digital pode ser complementada pelos bancos de dados da Patrologia Latina Database (PLD), da Patrologia Graeca Online (PGO) e da Acta Conciliorum Oecumenicorum Digital (ACOD), disponíveis através de instituições acadêmicas.",
};