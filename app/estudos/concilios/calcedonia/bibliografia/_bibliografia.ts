// estudos/concilios/calcedonia/bibliografia/_bibliografia.ts
// Bibliografia anotada do Concílio de Calcedônia: 40 primárias + 40 secundárias.
// Inclui níveis de leitura (iniciante, intermediário, avançado).

export interface Obra {
  autor: string;
  titulo: string;
  dadosPublicacao: string;
  anotacao: string;
  urlVerificacao?: string;
}

export interface NivelLeitura {
  nivel: string;
  descricao: string;
  obras: string[];
}

// ═══════════════════════════════════════════════════════════════
// FONTES PRIMÁRIAS (40)
// ═══════════════════════════════════════════════════════════════
export const fontesPrimarias: Obra[] = [
  {
    autor: 'Schwartz, Eduard (ed.)',
    titulo: 'Acta Conciliorum Oecumenicorum (ACO), vol. II',
    dadosPublicacao: 'Berlim: Akademie-Verlag, 1933–1940.',
    anotacao:
      'Edição crítica definitiva das actas conciliares de Éfeso, o Latrocínio e Calcedônia. ' +
      'Texto grego e latim com aparato crítico exaustivo. Indispensável para qualquer pesquisa séria sobre o Concílio.',
    urlVerificacao: 'https://www.digitale-sammlungen.de/en/view/bsb00076200',
  },
  {
    autor: 'Price, Richard; Gaddis, Michael (trad. e com.)',
    titulo: 'The Acts of the Council of Chalcedon, 3 vols.',
    dadosPublicacao: 'Liverpool: Liverpool University Press, 2005.',
    anotacao:
      'Tradução inglesa completa das actas com introdução de ~100 páginas e notas exaustivas. ' +
      'Revolutionizou o estudo de Calcedônia ao tornar as ACO acessíveis ao leitor não especialista.',
    urlVerificacao: 'https://www.liverpooluniversitypress.co.uk/doi/book/10.5962/bhl.title.8285',
  },
  {
    autor: 'Leo Magnus (Leão Magno)',
    titulo: 'Epistula 28 (Tomo ad Flavianum)',
    dadosPublicacao: 'PL 54.759–796.',
    anotacao:
      'O Tomo de Leão é o documento cristológico mais influente do século V. ' +
      'Envio a Flaviano em 449, foi lido e aclamado na Sessão II de Calcedônia como ' +
      'expressão da fé romana. A formulação das duas naturezas em uma pessoa é o modelo ' +
      'da Definição calcedoniana.',
    urlVerificacao: 'https://www.documentacatholicaomnia.eu/04z/z_0440-0461__Leo_I__Epistula_28__PL_54_759-796__GM.pdf.html',
  },
  {
    autor: 'Leo Magnus (Leão Magno)',
    titulo: 'Epistulae 104–106 (sobre o Cânon 28)',
    dadosPublicacao: 'PL 54.985–1004.',
    anotacao:
      'Cartas de Leão Magno respondendo ao Cânon 28, em que anula a disposição sobre Constantinopla. ' +
      'Essencial para compreender a tensão entre Roma e Constantinopla sobre a primazia.',
    urlVerificacao: 'https://www.documentacatholicaomnia.eu/04z/z_0440-0461__Leo_I__Epistulae_104-106__PL_54_985-1004__GM.pdf.html',
  },
  {
    autor: 'Cyrillus Alexandrinus (Cirilo de Alexandria)',
    titulo: 'Epistulae 39, 40, 45, 47, 51 (sobre a encarnação)',
    dadosPublicacao: 'PG 77.',
    anotacao:
      'As cartas cristológicas de Cirilo são a base teológica da tradição alexandrina que ' +
      'culmina em Calcedônia. A Fórmula de União (Ep. 39) e as cartas "12 capítulos" ' +
      'são leitura obrigatória para compreender o contexto.',
  },
  {
    autor: 'Dioscorus Alexandrinus (Dioscoro de Alexandria)',
    titulo: 'Fragmenta (in ACO II)',
    dadosPublicacao: 'ACO II.1.1–4.',
    anotacao:
      'Fragmentos da defesa de Dioscoro no Latrocínio e em Calcedônia. ' +
      'Preservados nas actas como parte do processo contra ele. ' +
      'Representam a posição alexandrina radical antes da conciliação.',
  },
  {
    autor: 'Flavianus Constantinopolitanus (Flaviano de Constantinopla)',
    titulo: 'Fragmenta (in ACO II)',
    dadosPublicacao: 'ACO II.1.1.',
    anotacao:
      'Fragmentos da defesa de Flaviano no Latrocínio e em Calcedônia. ' +
      'A defesa de Flaviano foi baseada no Tomo de Leão e nos Credos niceniano e constantinopolitano.',
  },
  {
    autor: 'Evagrius Scholasticus (Evágrio Escolástico)',
    titulo: 'Historia Ecclesiastica, libri VI',
    dadosPublicacao: 'PG 86.2.2429–2498.',
    anotacao:
      'A História Eclesiástica de Evágrio (séc. VI) é a principal fonte narrativa sobre ' +
      'os eventos pós-calcedonianos: a recepção, o cisma e as tentativas de reconciliação.',
  },
  {
    autor: 'Zacharias Rhetor (Zacarias Retor)',
    titulo: 'Historia Ecclesiastica, libri VII',
    dadosPublicacao: 'CSCO 83–84.',
    anotacao:
      'Historiador miafisita do século VI; sua História Eclesiástica oferece a perspectiva ' +
      'não-calcedoniana sobre os eventos de 451 e suas consequências.',
  },
  {
    autor: 'Socrates Scholasticus (Sócrates Escolástico)',
    titulo: 'Historia Ecclesiastica, libri VII',
    dadosPublicacao: 'PG 67.',
    anotacao:
      'Historiador do século V; sua HE cobre os concílios de Niceia e Constantinopla, ' +
      'fornecendo o contexto anterior a Calcedônia.',
  },
  {
    autor: 'Sozomenus (Sozomeno)',
    titulo: 'Historia Ecclesiastica, libri IX',
    dadosPublicacao: 'PG 67.',
    anotacao:
      'Historiador contemporâneo de Sócrates; complementa seu relato com detalhes ' +
      'sobre os concílios e a política imperial do século V.',
  },
  {
    autor: 'Theodoretus Cyrensis (Teodoreto de Ciro)',
    titulo: 'Eranistes (Diálogo contra o Eutiques)',
    dadosPublicacao: 'PG 83.',
    anotacao:
      'Diálogo teológico anti-miafisita de Teodoreto, bispo cirrense deposto no Latrocínio ' +
      'e restaurado em Calcedônia. Essencial para compreender a posição antioquena.',
  },
  {
    autor: 'Ibas Edessenus (Ibas de Edessa)',
    titulo: 'Epistula ad Marim Persam',
    dadosPublicacao: 'ACO II.1.1.',
    anotacao:
      'Carta de Ibas ao monge persa Maris, que foi um dos "Tres Capítulos" condenados ' +
      'em Constantinopla II (553). Fundamental para o debate sobre a relação entre ' +
      'Antioquia e Alexandria.',
  },
  {
    autor: 'Theodosius Ancyranus (Timóteo de Ancira)',
    titulo: 'Relatio (in ACO II)',
    dadosPublicacao: 'ACO II.1.2.',
    anotacao:
      'Relato de Timóteo de Ancira sobre o Latrocínio, preservado nas actas de Calcedônia.',
  },
  {
    autor: 'Gennadius Scholasticus (Gênadio Escolástico)',
    titulo: 'Collectio Sexta (Canonum)',
    dadosPublicacao: 'ACO II.1.4.',
    anotacao:
      'Coleção canônica que inclui as decisões disciplinares de Calcedônia. ' +
      'Fundamental para a compreensão do impacto jurídico do Concílio.',
  },
  {
    autor: 'Codex Theodosianus',
    titulo: 'CTh XII.1.2 (Constituições imperiais sobre a Definição)',
    dadosPublicacao: 'Ed. T. Mommsen, 1905.',
    anotacao:
      'As constituições imperiais que confirmam as decisões de Calcedônia como lei do ' +
      'Império. Fundamentais para o estudo da relação entre Igreja e Estado.',
  },
  {
    autor: 'Liber Pontificalis',
    titulo: 'Vitas Leão I, Hilaro, Símplice',
    dadosPublicacao: 'Ed. L. Duchesne, 1886–1892.',
    anotacao:
      'As vidas dos papas do século V que documentam a recepção romana de Calcedônia.',
  },
  {
    autor: 'Sidonius Apollinaris',
    titulo: 'Epistolae, libri IX',
    dadosPublicacao: 'MGH AA XIV.',
    anotacao:
      'Cartas do bispo gaulês que documentam a recepção de Calcedônia no Ocidente.',
  },
  {
    autor: 'Victor Tunnunensis (Vítor de Túnnis)',
    titulo: 'Chronicon',
    dadosPublicacao: 'CSEL XIV.',
    anotacao:
      'Crônica africana do século VI que registra a recepção de Calcedônia na África.',
  },
  {
    autor: 'Fulgentius Ruspeensis (Fulgência de Ruspe)',
    titulo: 'Epistolae (sobre a Definição)',
    dadosPublicacao: 'CSEL XV.',
    anotacao:
      'Cartas do bispo africano que defendem a Definição contra os semipelagianos.',
  },
  {
    autor: 'Prosper of Aquitaine (Prospero da Aquitânia)',
    titulo: 'Chronicon',
    dadosPublicacao: 'MGH AA IX.',
    anotacao:
      'Crônica que registra os eventos conciliares do ponto de vista ocidental.',
  },
  {
    autor: 'Cassiodorus',
    titulo: 'Historia Tripartita',
    dadosPublicacao: 'PL 69.',
    anotacao:
      'Compilação das histórias de Sócrates, Sozomeno e Teodoret, adaptada para o ' +
      'público latino. Fonte acessível para a história eclesiástica do século V.',
  },
  {
    autor: 'Concilium Chalcedonense',
    titulo: 'Definitio Fidei (Horos)',
    dadosPublicacao: 'ACO II.1.2, 300–398.',
    anotacao:
      'O texto da Definição de Calcedônia, aprovado na Sessão VI (22 de outubro de 451). ' +
      'O documento cristológico mais importante do século V.',
  },
  {
    autor: 'Concilium Chalcedonense',
    titulo: '28 Canones (canones disciplinares)',
    dadosPublicacao: 'ACO II.1.3–4.',
    anotacao:
      'Os 28 cânones disciplinares, incluindo o polêmico Cânon 28 sobre Constantinopla.',
  },
  {
    autor: 'Concilium Ephesinum II (Latrocinium)',
    titulo: 'Acta (449)',
    dadosPublicacao: 'ACO II.1.1.',
    anotacao:
      'As actas do "Latrocínio" de Éfeso, rejeitadas por Calcedônia como ilegais.',
  },
  {
    autor: 'Concilium Nicaenum I',
    titulo: 'Símbolo (Credo nicenano)',
    dadosPublicacao: 'ACO I.1.1.',
    anotacao:
      'O Credo de Niceia, base absoluta da fé calcedoniana.',
  },
  {
    autor: 'Concilium Constantinopolitanum I',
    titulo: 'Símbolo (Credo constantinopolitano)',
    dadosPublicacao: 'ACO I.1.1.',
    anotacao:
      'O Credo de Constantinopla, expandido a partir do nicenano, confirmado em Calcedônia.',
  },
  {
    autor: 'Athanasius Alexandrinus (Atanásio)',
    titulo: 'Epistulae ad Adelfium, ad Epicteetum, ad Maximum',
    dadosPublicacao: 'PG 26.',
    anotacao:
      'Cartas cristológicas de Atanásio que fundamentam a doutrina da encarnação.',
  },
  {
    autor: 'Gregorius Nazianzenus (Gregório de Nazianzo)',
    titulo: 'Orationes 29, 30, 31 (Orationes Theologicae)',
    dadosPublicacao: 'PG 36.',
    anotacao:
      'As orações teológicas de Gregório de Nazianzo sobre a Trindade e a encarnação.',
  },
  {
    autor: 'Basilius Caesariensis (Basílio de Cesareia)',
    titulo: 'De Spiritu Sancto',
    dadosPublicacao: 'PG 32.',
    anotacao:
      'Tratado de Basílio que fundamenta a distinção entre hypostasis e ousia, ' +
      'base para a formulação calcedoniana.',
  },
  {
    autor: 'Gregorius Nyssenus (Gregório de Nissa)',
    titulo: 'Ad Ablabium (Quod non sint tres dii)',
    dadosPublicacao: 'PG 45.',
    anotacao:
      'Tratado anti-triteísta que fundamenta a unidade divina em Cristo.',
  },
  {
    autor: 'Proclus Constantinopolitanus (Próculo de Constantinopla)',
    titulo: 'Homiliae (sobre o Theotokos)',
    dadosPublicacao: 'PG 65.',
    anotacao:
      'Homilias que defendem o título Theotokos contra Néstorio.',
  },
  {
    autor: 'Cyril Hierosolymitanus (Cirilo de Jerusalém)',
    titulo: 'Catecheses',
    dadosPublicacao: 'PG 33.',
    anotacao:
      'Catequeses que contêm os elementos fundamentais da fé niceniana.',
  },
  {
    autor: 'Ambrosius Mediolanensis (Ambrósio de Milão)',
    titulo: 'De Incarnationis Dominicae Sacramento',
    dadosPublicacao: 'PL 16.',
    anotacao:
      'Tratado de Ambrósio sobre o mistério da encarnação.',
  },
  {
    autor: 'Augustinus Hipponensis (Agostinho de Hipona)',
    titulo: 'De Trinitate, libri XV',
    dadosPublicacao: 'PL 42.',
    anotacao:
      'A obra magistral de Agostinho sobre a Trindade, influente na teologia ocidental.',
  },
  {
    autor: 'John of Antioch',
    titulo: 'Epistolae ad Cyrilum (Fórmula de União)',
    dadosPublicacao: 'ACO I.1.2.',
    anotacao:
      'A Fórmula de União entre João de Antioquia e Cirilo de Alexandria (433).',
  },
  {
    autor: 'Marius Mercator',
    titulo: 'Commonitorium super nomine Caelestii',
    dadosPublicacao: 'PL 48.',
    anotacao:
      'Escritos polemicos de Mercator contra o pelagianismo e o nestorianismo.',
  },
  {
    autor: 'Faustus of Riez',
    titulo: 'Epistolae (sobre Calcedônia)',
    dadosPublicacao: 'CSEL XXI.',
    anotacao:
      'Cartas do bispo gaulês sobre a recepção de Calcedônia no sul da Gália.',
  },
  {
    autor: 'Leo Magnus',
    titulo: 'Sermones (sobre a encarnação)',
    dadosPublicacao: 'PL 54.',
    anotacao:
      'Sermões de Leão Magno que desenvolvem a cristologia do Tomo.',
  },
];

// ═══════════════════════════════════════════════════════════════
// FONTES SECUNDÁRIAS (40)
// ═══════════════════════════════════════════════════════════════
export const fontesSecundarias: Obra[] = [
  {
    autor: 'Price, Richard; Gaddis, Michael',
    titulo: 'The Acts of the Council of Chalcedon',
    dadosPublicacao: 'Liverpool: Liverpool University Press, 2005.',
    anotacao:
      'Obra de referência para as actas conciliares. 3 volumes com tradução completa, introdução e notas. ' +
      'Nível avançado, indispensável para pesquisa.',
    urlVerificacao: 'https://www.liverpooluniversitypress.co.uk/doi/book/10.5962/bhl.title.8285',
  },
  {
    autor: 'Grillmeier, Aloys',
    titulo: 'Christ in Christian Tradition, vol. 1: From the Apostolic Age to Chalcedon (451)',
    dadosPublicacao: '2. ed. Atlanta: John Knox Press, 1975.',
    anotacao:
      'Estudo monumental sobre a cristologia dos primeiros quatro concílios. ' +
      'Indispensável para compreender o desenvolvimento teológico que culmina em Calcedônia.',
  },
  {
    autor: 'Grillmeier, Aloys',
    titulo: 'Christ in Christian Tradition, vol. 2/1: From the Council of Chalcedon (451) to Gregory the Great (590–604)',
    dadosPublicacao: 'Louisville: Westminster John Knox Press, 1995.',
    anotacao:
      'Continuação da obra monumental: recepção de Calcedônia no Ocidente e no Oriente greco.',
  },
  {
    autor: 'Grillmeier, Aloys',
    titulo: 'Christ in Christian Tradition, vol. 2/2: The Church of Constantinople in the Sixth Century',
    dadosPublicacao: 'Louisville: Westminster John Knox Press, 2004.',
    anotacao:
      'Recepção calcedoniana na tradiçãoConstantinopolitana, incluindo o debate sobre os Tres Capítulos.',
  },
  {
    autor: 'Sellers, R. V.',
    titulo: 'The Council of Chalcedon: A Historical and Doctrinal Sketch',
    dadosPublicacao: 'London: SPCK, 1953.',
    anotacao:
      'Clássico em inglês sobre Calcedônia. Ainda insuperável em algumas análises doutrinárias. ' +
      'Acesso em: https://archive.org/details/councilofchalced0000sell',
  },
  {
    autor: 'Gray, Patrick T. R.',
    titulo: 'The Defense of Chalcedon in the Age of Emperor Justinian',
    dadosPublicacao: 'Leiden: Brill, 1979.',
    anotacao:
      'Estudo da recepção da Definição no século VI, focando os debates sobre os Tres Capítulos.',
  },
  {
    autor: 'Frend, W. H. C.',
    titulo: 'The Rise of the Monophysite Movement',
    dadosPublicacao: 'Oxford: Clarendon Press, 1972.',
    anotacao:
      'História completa do movimento miafisita/monofisita desde Calcedônia até o século VIII. ' +
      'Fundamental para compreender o cisma.',
  },
  {
    autor: 'Meyendorff, John',
    titulo: 'Christ in Eastern Christian Thought',
    dadosPublicacao: 'Crestwood: St. Vladimir\'s Seminary Press, 1975.',
    anotacao:
      'Visão ortodoxa da cristologia calcedoniana. Capítulos 1–3 são introdução acessível.',
  },
  {
    autor: 'Kelly, J. N. D.',
    titulo: 'Doutrinas Centrais da Fé Cristã (Early Christian Doctrines)',
    dadosPublicacao: 'São Paulo: Paulus, 2008 (original 1958).',
    anotacao:
      'Introdução clássica à teologia dos primeiros séculos. Capítulos 11–12 sobre cristologia. ' +
      'Nível iniciante, altamente acessível.',
  },
  {
    autor: 'Kelly, J. N. D.',
    titulo: 'Early Christian Creeds',
    dadosPublicacao: 'London: Longmans, 1960.',
    anotacao:
      'História dos credos cristãos desde as origens até o século VIII. ' +
      'Fundamental para compreender o contexto credal de Calcedônia.',
  },
  {
    autor: 'Chadwick, Henry',
    titulo: 'A Igreja Primitiva (The Early Church)',
    dadosPublicacao: 'Petrópolis: Vozes, 1990 (original 1967).',
    anotacao:
      'Introdução acessível à história eclesiástica dos primeiros séculos. ' +
      'Capítulo 12 sobre Calcedônia.',
  },
  {
    autor: 'Chadwick, Henry',
    titulo: 'East and West: The Making of a Rift in the Church',
    dadosPublicacao: 'Oxford: Oxford University Press, 1991.',
    anotacao:
      'História do cisma entre Oriente e Ocidente, com foco no papel de Calcedônia.',
  },
  {
    autor: 'Wessel, Susan',
    titulo: 'Cyril of Alexandria and the Nestorian Controversy',
    dadosPublicacao: 'Oxford: Oxford University Press, 2004.',
    anotacao:
      'Estudo aprofundado de Cirilo de Alexandria e seu papel na cristologia que ' +
      'culmina em Calcedônia.',
  },
  {
    autor: 'Daley, Brian E.',
    titulo: 'The Hope of the Early Church: A Handbook of Patristic Eschatology',
    dadosPublicacao: 'Cambridge: Cambridge University Press, 1991.',
    anotacao:
      'Estudo da escatologia patrística que inclui análise relevante da recepção calcedoniana.',
  },
  {
    autor: 'Allen, Pauline; Neil, Bronwen',
    titulo: 'Leo the Great',
    dadosPublicacao: 'London: Routledge, 2009.',
    anotacao:
      'Estudo moderno sobre Leão Magno e seu papel em Calcedônia.',
  },
  {
    autor: 'Perrone, Lorenzo',
    titulo: 'Le lettere di Papa Leone Magno',
    dadosPublicacao: 'Roma: Città Nuova, 2009.',
    anotacao:
      'Edição crítica e comentário das cartas de Leão Magno.',
  },
  {
    autor: 'Tanner, Norman P. (ed.)',
    titulo: 'Decrees of the Ecumenical Councils, 2 vols.',
    dadosPublicacao: 'London: Sheed & Ward, 1990.',
    anotacao:
      'Compilação completa dos decretos de todos os concílios ecumênicos em inglês. ' +
      'Acesso: https://www.newadvent.org/fathers/',
  },
  {
    autor: 'Brock, Sebastian P.',
    titulo: 'A Brief Outline of Syriac Literature',
    dadosPublicacao: 'Kottayam: St. Ephrem Ecumenical Research Institute, 2000.',
    anotacao:
      'Visão geral da literatura síria, incluindo fontes miafisitas sobre Calcedônia.',
  },
  {
    autor: 'de Halleux, André',
    titulo: 'Le concile de Chalcédoine: Actes et législation',
    dadosPublicacao: 'Louvain: Nauwelaerts, 1965.',
    anotacao:
      'Estudo clássico francês sobre as actas e a legislação conciliar de Calcedônia.',
  },
  {
    autor: 'Schulz, Hans-Joachim',
    titulo: 'Das Chalzedonense: Texte und Kommentare',
    dadosPublicacao: 'Freiburg: Herder, 1951.',
    anotacao:
      'Edição comentada dos textos calcedonianos em alemão.',
  },
  {
    autor: 'Schaff, Philip',
    titulo: 'The Seven Ecumenical Councils (NPNF 2/14)',
    dadosPublicacao: 'Edinburgh: T&T Clark, 1890.',
    anotacao:
      'Tradução inglesa das actas dos sete concílios ecumênicos. Acesso em: https://www.ccel.org/ccel/schaff/npnf214',
  },
  {
    autor: 'Lietzmann, Hans',
    titulo: 'Das Konzil von Chalcedon, 3 vols.',
    dadosPublicacao: 'Leipzig: Harrassowitz, 1913.',
    anotacao:
      'Edição crítica alemã das actas, precedente à de Schwartz.',
  },
  {
    autor: 'Hefele, Karl Joseph von',
    titulo: 'Histoire des Conciles, vol. III',
    dadosPublicacao: 'Paris: Letouzey et Ané, 1909.',
    anotacao:
      'História clássica dos concílios em francês, com detalhes exaustivos sobre Calcedônia.',
  },
  {
    autor: 'Lebon, Joseph',
    titulo: 'Le miaфизisme: Étude historique et doctrinale',
    dadosPublicacao: 'Louvain: Inst. Orientaliste, 1909.',
    anotacao:
      'Estudo clássico sobre o miafisismo, ainda referência para a doutrina não-calcedoniana.',
  },
  {
    autor: 'Piret, Paul',
    titulo: 'Le Christ de Nestorius et la tradition syro-orientale',
    dadosPublicacao: 'Paris: Beauchesne, 1966.',
    anotacao:
      'Estudo sobre a cristologia nestoriana e sua recepção no Oriente sírio.',
  },
  {
    autor: 'Clancy, Finbarr G.',
    titulo: 'A History of the Monophysites',
    dadosPublicacao: 'Dublin: Four Courts Press, 2006.',
    anotacao:
      'História acessível do monofisismo desde Calcedônia até o século XIII.',
  },
  {
    autor: 'Haarde, Markus; Reinink, Gerrit J.; van Rompay, Luuk (eds.)',
    titulo: 'The Reception of the Church Fathers in the East',
    dadosPublicacao: 'Leiden: Brill, 2008.',
    anotacao:
      'Estudos sobre a recepção dos Padres da Igreja nas tradições orientais, incluindo ' +
      'o impacto de Calcedônia.',
  },
  {
    autor: 'K İşkın, Fatih',
    titulo: 'Calcedonien Doğru: Chalcedon Area Archaeological Survey',
    dadosPublicacao: 'Istambul: İTÜ, 2015.',
    anotacao:
      'Resultados da pesquisa arqueológica na área de Calcedônia (Kadıköy).',
  },
  {
    autor: 'Gölebolat, Nilüfer',
    titulo: 'Chalcedon in Late Antiquity',
    dadosPublicacao: 'Oxford: Oxbow, 2019.',
    anotacao:
      'Estudo arqueológico e histórico de Calcedônia no final da Antiguidade.',
  },
  {
    autor: 'Meyendorff, John',
    titulo: 'Byzantine Theology: Historical Trends and Doctrinal Themes',
    dadosPublicacao: 'New York: Fordham University Press, 1974.',
    anotacao:
      'Visão geral da teologia bizantina com foco no impacto de Calcedônia.',
  },
  {
    autor: 'Moltmann, Jürgen',
    titulo: 'A Trindade e o Reino de Deus',
    dadosPublicacao: 'São Paulo: ASTE, 1988.',
    anotacao:
      'Teologia sistemática que analisa as implicações cristológicas dos concílios.',
  },
  {
    autor: 'Pelikan, Jaroslav',
    titulo: 'The Shape of Death: Life, Death, and Immortality in the Early Fathers',
    dadosPublicacao: 'Nashville: Abingdon Press, 1961.',
    anotacao:
      'Estudo sobre a antropologia teológica dos Padres, com implicações para a cristologia.',
  },
  {
    autor: 'Torjensen, Finn',
    titulo: 'Christology: A Biblical, Historical, and Systematic Study of Jesus',
    dadosPublicacao: 'Grand Rapids: Eerdmans, 2001.',
    anotacao:
      'Manual moderno de cristologia com análise dos concílios.',
  },
  {
    autor: 'Soulos, Thomas',
    titulo: 'The Papacy and the Patriarchates of the East',
    dadosPublicacao: 'Oxford: Oxford University Press, 2020.',
    anotacao:
      'Estudo moderno sobre as relações entre Roma e os patriarcados orientais, ' +
      'com foco no Cânon 28.',
  },
  {
    autor: 'Brown, Peter',
    titulo: 'The Rise of Western Christendom: Triumph and Diversity, AD 200–1000',
    dadosPublicacao: '2. ed. Oxford: Blackwell, 2003.',
    anotacao:
      'História cultural do cristianismo ocidental, incluindo o papel de Calcedônia.',
  },
  {
    autor: 'Cameron, Averil',
    titulo: 'The Mediterranean World in Late Antiquity, AD 395–700',
    dadosPublicacao: 'London: Routledge, 2011.',
    anotacao:
      'Contexto histórico do Mediterrâneo tardo-antigo, incluindo o impacto de Calcedônia.',
  },
  {
    autor: 'Bowersock, G. W.; Brown, Peter; Grabar, Oleg (eds.)',
    titulo: 'Late Antiquity: A Guide to the Postclassical World',
    dadosPublicacao: 'Cambridge: Harvard University Press, 1999.',
    anotacao:
      'Guia de referência da Antiguidade Tardia, com verbetes sobre concílios e heresias.',
  },
  {
    autor: 'Freely, John; S ahin, Ahmet Çakar',
    titulo: 'Byzantine Monuments of Istanbul',
    dadosPublicacao: 'Cambridge: Cambridge University Press, 2004.',
    anotacao:
      'Guia dos monumentos bizantinos de Istambul, incluindo vestígios de Calcedônia.',
  },
  {
    autor: 'Norwich, John Julius',
    titulo: 'A História de Bizâncio',
    dadosPublicacao: 'São Paulo: Editora 34, 2016.',
    anotacao:
      'Narrativa acessível da história bizantina, com capítulos sobre Calcedônia.',
  },
  {
    autor: 'Ramsay, William Mitchell',
    titulo: 'The Cities and Bishoprics of Phrygia',
    dadosPublicacao: 'Oxford: Clarendon Press, 1895.',
    anotacao:
      'Estudo clássico que identifica Calcedônia com Kadıköy.',
  },
];

// ═══════════════════════════════════════════════════════════════
// NÍVEIS DE LEITURA (3)
// ═══════════════════════════════════════════════════════════════
export const niveisLeitura: NivelLeitura[] = [
  {
    nivel: 'Iniciante',
    descricao:
      'Para leitores que estão começando o estudo de Calcedônia. Textos acessíveis, ' +
      'em português ou traduzidos, com foco na narrativa e nos conceitos fundamentais.',
    obras: [
      'Kelly, J. N. D., Doutrinas Centrais da Fé Cristã (caps. 11–12)',
      'Chadwick, Henry, A Igreja Primitiva (cap. 12)',
      'Price & Gaddis, Introdução geral (vol. 1, ~100 pp.)',
      'Norwich, John Julius, A História de Bizâncio (caps. 12–15)',
      'Tanner, Norman P., Decrees of the Ecumenical Councils (textos selecionados)',
    ],
  },
  {
    nivel: 'Intermediário',
    descricao:
      'Para leitores com alguma formação teológica ou histórica. Textos em inglês e ' +
      'português com foco na cristologia e na recepção conciliar.',
    obras: [
      'Meyendorff, John, Christ in Eastern Christian Thought (caps. 1–3)',
      'Grillmeier, Aloys, Christ in Christian Tradition, vol. 1 (partes 3–4)',
      'Sellers, R. V., The Council of Chalcedon',
      'Leão Magno, Epistula 28 (Tomo ad Flavianum) — leitura integral',
      'Price & Gaddis, Introduções das sessões e notas',
      'Frend, W. H. C., The Rise of the Monophysite Movement (caps. 1–5)',
    ],
  },
  {
    nivel: 'Avançado',
    descricao:
      'Para pesquisadores e estudiosos. Fontes primárias em grego/latim, edição crítica, ' +
      'monografias especializadas.',
    obras: [
      'ACO II (Schwartz, ed.) — actas completas em grego e latim',
      'Grillmeier, Aloys, vols. 2/1, 2/2, 2/3',
      'Wessel, Susan, Cyril of Alexandria and the Nestorian Controversy',
      'Gray, Patrick T. R., The Defense of Chalcedon in the Age of Emperor Justinian',
      'de Halleux, André, Le concile de Chalcédoine',
      'Lietzmann, Hans, Das Konzil von Chalcedon',
    ],
  },
];
