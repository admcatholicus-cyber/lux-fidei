export const contextoPolitico = {
  imperio: {
    titulo: 'O Império Bizantino em 553: Apogeu e Crise Simultâneos',
    descricao:
      'Em 553, o Império Bizantino vivia um paradoxo: territorialmente, estava no seu maior apogeu desde a queda de Roma (476), com a reconquista do norte da África (533–534), da Itália (535–554) e do sul da Hispânia (552). Mas internamente, estava exaurido: a Peste Justiniana (541–542) havia matado entre 25 e 50 milhões de pessoas, devastando a economia e a demografia; as guerras de reconquista haviam esgotado o tesouro; e a divisão religiosa entre calcedonianos e miafisitas ameaçava a coesão do Império.',
    situacao: {
      militar:
        'Guerra Gótica na Itália em fase final (Belisário e Narses contra os ostrogodos); fronteira persa sob tensão permanente (Guerra Lázica, 541–562); guarnições enfraquecidas pela peste e pela dispersão de tropas em três frentes.',
      economica:
        'Tesouro imperial severamente comprometido pelas guerras de reconquista e pela peste. A base tributária do Egito e da Síria estava reduzida. O comércio mediterrâneo sofrera com a instabilidade. Justiniano financiou o concílio e suas políticas religiosas com recursos cada vez mais escassos.',
      religiosa:
        'Divisão profunda e irreconciliável entre calcedonianos (maioria em Constantinopla, Ásia Menor, Grécia) e miafisitas (maioria no Egito, Síria, Armênia). O papado em confronto aberto com o imperador. Os nestorianos consolidados na Pérsia. Os origenistas ativos nos mosteiros da Palestina.',
    },
  },

  capital: {
    titulo: 'Constantinopla em 553: A Nova Roma no Apogeu',
    descricao:
      'Constantinopla em 553 era a maior e mais rica cidade do mundo cristão, com uma população estimada em 400.000–500.000 habitantes (antes da peste). A Catedral de Santa Sofia, inaugurada em 537, era a maior estrutura coberta do mundo e o símbolo do poder imperial e da ortodoxia. A cidade era o centro administrativo, teológico e litúrgico do Império, sede do Patriarcado Ecumênico e do Palácio Imperial.',
    relevanciaConciliar:
      'A escolha de Constantinopla (e não de uma cidade da Ásia Menor, como Niceia ou Calcedônia) foi deliberada: permitia a Justiniano controlar os trabalhos de perto, garantir a presença de bispos leais ao trono, e isolar o Papa Vigílio, que já estava na cidade como virtual prisioneiro desde 547.',
  },

  editos: [
    {
      nome: 'Édito contra os Três Capítulos (Edictum de Tribus Capitulis)',
      data: '543/544 d.C.',
      local: 'Constantinopla',
      texto:
        'Tria Capitula, quae dicuntur, id est Theodori Mopsuesteni scripta et Theodoreti Cyrensis adversus rectam fidem et contra duodecim capitula beati Cyrilli conscripta, nec non epistulam quam Ibas Edessenus ad Marin quendam Persam scripsisse fertur...',
      traducao:
        'Os Três Capítulos, assim chamados, isto é, os escritos de Teodoro de Mopsuéstia, os escritos de Teodoreto de Ciro contra a fé reta e contra os doze capítulos do bem-aventurado Cirilo, e também a carta que Ibas de Edessa teria escrito a um certo Mari, persa...',
      importancia:
        'O documento fundador de toda a controvérsia. Justiniano condenava os Três Capítulos por decreto imperial, antes de qualquer concílio, estabelecendo o precedente do cesaropapismo teológico.',
      fonte: 'ACO IV.1, pp. 9–27; Justiniano, Edictum de fide recta',
    },
    {
      nome: 'Édito de Convocação do Concílio',
      data: 'Novembro de 551 d.C.',
      local: 'Constantinopla',
      texto: null,
      traducao:
        'Ordenamos que todos os bispos metropolitanos e seus sufragâneos se reúnam na cidade de Constantinopla no mês de maio do próximo ano, para examinar e julgar a questão dos Três Capítulos à luz da fé ortodoxa.',
      importancia:
        'A convocação formal do V Concílio Ecumênico. Justiniano a emitiu unilateralmente, sem consulta prévia ao Papa, o que gerou a crise com Vigílio.',
      fonte: 'Acta Concilii, Sessão I; Evágrio, HE IV.38',
    },
    {
      nome: 'Édito contra Orígenes (Edictum contra Origenem)',
      data: '543 d.C.',
      local: 'Constantinopla',
      texto: null,
      traducao:
        'Condenamos as doutrinas ímpias de Orígenes, que ensinou a preexistência das almas, a apocatástase dos demônios e a natureza esférica dos corpos ressuscitados, e ordenamos que seus escritos sejam queimados.',
      importancia:
        'Precursor dos 15 anátemas contra Orígenes. Embora emitido em 543, sua relação com o concílio de 553 é debatida: alguns historiadores atribuem os 15 anátemas a este édito, não ao concílio.',
      fonte: 'Justiniano, Edictum contra Origenem (CPG 6880)',
    },
    {
      nome: 'Novela 131 — Sobre os Cânones Eclesiásticos e a Pentarquia',
      data: '545 d.C.',
      local: 'Constantinopla',
      texto:
        'Praecipimus itaque secundum eorumdem sanctorum canonum definitiones sanctissimum senioris Romae papam primum esse omnium sacerdotum, beatissimum autem archiepiscopum Constantinopoleos, novae Romae, secundum locum obtinere...',
      traducao:
        'Ordenamos que, segundo as definições dos mesmos santos cânones, o santíssimo papa da Roma antiga seja o primeiro de todos os sacerdotes, e que o bem-aventurado arcebispo de Constantinopla, a Nova Roma, ocupe o segundo lugar...',
      importancia:
        'Formalizou a Pentarquia (Roma, Constantinopla, Alexandria, Antioquia, Jerusalém) como estrutura eclesiástica do Império. Deu base legal à primazia de honra de Constantinopla, que seria reafirmada no concílio.',
      fonte: 'Corpus Iuris Civilis, Novellae 131.2',
    },
  ],

  igrejaEstado: {
    titulo: 'Cesaropapismo e Symphonia: A Relação Igreja-Estado em 553',
    descricao:
      'A relação entre Justiniano e a Igreja é o exemplo mais extremo de cesaropapismo na história cristã. O imperador não apenas convocou o concílio, mas ditou sua agenda, controlou as sessões, coagiu o Papa e impôs suas conclusões por decreto. No entanto, a teologia política bizantina preferia o termo "symphonia" (harmonia) para descrever a relação ideal entre o basileus e o sacerdócio — uma relação de cooperação, não de subordinação. Na prática, em 553, a symphonia era uma ficção: Justiniano mandava, e a Igreja obedecia.',
    conceitos: [
      {
        termo: 'Caesaropapismus',
        significado:
          'Termo moderno (cunhado por Justus Henning Böhmer, séc. XVIII) para descrever a fusão do poder imperial e eclesiástico. Em 553, Justiniano agiu como teólogo, legislador e juiz da fé simultaneamente.',
      },
      {
        termo: 'Symphonia (Συμφωνία)',
        significado:
          'O ideal bizantino de "harmonia" entre o trono e o altar, formulado por Justiniano na Novela 6: "Os maiores dons de Deus são o sacerdócio e o império, aquele cuidando das coisas divinas, este das humanas." Na prática, o imperador dominava.',
      },
      {
        termo: 'Oikonomia (Οἰκονομία)',
        significado:
          'O princípio de "dispensação" ou "administração pastoral" que permitia flexibilidade na aplicação dos cânones. Justiniano invocou a oikonomia para justificar a condenação póstuma dos Três Capítulos, argumentando que o bem da Igreja exigia medidas excepcionais.',
      },
      {
        termo: 'Basileus Isapostolos (Βασιλεὺς Ἰσαπόστολος)',
        significado:
          '"Imperador Igual aos Apóstolos" — título que Justiniano reivindicava, colocando-se na sucessão de Constantino como guardião da fé ortodoxa. Este título fundamentava sua pretensão de convocar concílios e definir doutrina.',
      },
    ],
    avaliacao:
      'A maioria dos historiadores modernos (Meyendorff, Herrin, Evans) concorda que Constantinopla II representa o apogeu do cesaropapismo bizantino. A coerção do Papa Vigílio, a manipulação das sessões e a imposição das conclusões por decreto imperial não têm paralelo nos quatro concílios anteriores. No entanto, a teologia do concílio (os 14 anátemas) é considerada ortodoxa pela tradição católica e ortodoxa, o que levanta a questão complexa de se um concílio pode ser teologicamente correto mas canonicamente irregular.',
  },
}

export const justiniano = {
  biografia:
    'Flavius Petrus Sabbatius Iustinianus (482–565), nascido em Tauresium (atual Macedônia do Norte), foi o imperador bizantino mais ambicioso da Antiguidade Tardia. Sobrinho do imperador Justino I, ascendeu ao trono em 527 e reinou por 38 anos. Seu legado inclui a reconquista do norte da África, da Itália e do sul da Hispânia; a codificação do direito romano (Corpus Iuris Civilis); a construção de Santa Sofia; e a tentativa de reunificação religiosa do Império. Era um teólogo amador prolífico, autor de tratados cristológicos, hinos litúrgicos e éditos doutrinários.',
  teologiaPessoal:
    'Justiniano desenvolveu uma cristologia neo-calcedoniana (ou cirilo-calcedoniana) que buscava interpretar a Definição de Calcedônia (451) à luz dos escritos de Cirilo de Alexandria. Sua tese central era que Calcedônia e Cirilo eram compatíveis: as "duas naturezas" de Calcedônia deviam ser entendidas como a "uma natureza encarnada do Verbo" de Cirilo. Ele promoveu a fórmula theopaschita ("um da Trindade sofreu na carne") e escreveu extensivamente contra o nestorianismo e o eutiquianismo. Seus tratados cristológicos foram lidos e aprovados no concílio.',
  relacaoComTeodora:
    'A imperatriz Teodora (†548), esposa de Justiniano, era monofisita convicta e protetora dos líderes miafisitas (Severo de Antioquia, Teodósio de Alexandria). Foi Teodora quem originalmente sugeriu a Justiniano a estratégia dos Três Capítulos como concessão aos miafisitas. Embora tenha morrido cinco anos antes do concílio, sua influência póstuma foi decisiva: a política dos Três Capítulos era, em grande medida, a continuação do projeto teodorense de reconciliação com o Egito e a Síria.',
  cesaropapismo:
    'Justiniano praticou o cesaropapismo em grau sem precedentes: convocou o concílio unilateralmente, ditou a agenda teológica, controlou a composição episcopal, coagiu o Papa Vigílio (prendendo-o, exilando-o e ameaçando-o), e impôs as conclusões por decreto imperial antes mesmo do encerramento formal. Seu modelo de governo eclesiástico foi criticado por contemporâneos (Facundo de Hermiane, Liberato de Cartago) e por historiadores modernos, mas sua teologia foi aceita como ortodoxa.',
}

export const cronologiaPolitica = [
  { ano: '527', evento: 'Ascensão de Justiniano I ao trono imperial' },
  { ano: '529', evento: 'Fechamento da Academia de Atenas; início da construção de Santa Sofia' },
  { ano: '532', evento: 'Revolta de Nika em Constantinopla; conferências teológicas com miafisitas' },
  { ano: '533', evento: 'Reconquista do norte da África (Belisário derrota os vândalos)' },
  { ano: '534', evento: 'Publicação do Corpus Iuris Civilis (Codex, Digesta, Institutiones)' },
  { ano: '535', evento: 'Início da Guerra Gótica na Itália; morte do Papa Agapito I em Constantinopla' },
  { ano: '536', evento: 'Sínodo de Constantinopla condena Severo de Antioquia e Pedro de Apameia' },
  { ano: '537', evento: 'Inauguração de Santa Sofia; deposição do Papa Silvério e instalação de Vigílio' },
  { ano: '541', evento: 'Início da Peste Justiniana; início da Guerra Lázica contra a Pérsia' },
  { ano: '543/544', evento: 'Édito de Justiniano contra os Três Capítulos' },
  { ano: '545', evento: 'Novela 131 sobre a Pentarquia; Vigílio preso e levado a Constantinopla' },
  { ano: '547', evento: 'Chegada de Vigílio a Constantinopla; reconciliação aparente com Justiniano' },
  { ano: '548', evento: 'Iudicatum de Vigílio (condena os Três Capítulos); morte da imperatriz Teodora' },
  { ano: '550', evento: 'Vigílio revoga o Iudicatum sob pressão ocidental' },
  { ano: '551', evento: 'Édito de convocação do concílio; fuga de Vigílio para Calcedônia' },
  { ano: '553', evento: 'V CONCÍLIO ECUMÊNICO DE CONSTANTINOPLA (maio–junho)' },
  { ano: '554', evento: 'Pragmática Sanção sobre a Itália; Vigílio parte de Constantinopla' },
  { ano: '555', evento: 'Morte do Papa Vigílio em Siracusa; eleição de Pelágio I' },
  { ano: '562', evento: 'Paz de 50 anos com a Pérsia Sassânida' },
  { ano: '565', evento: 'Morte de Justiniano I; fim de uma era' },
]