export const resumoMitos =
  "O Concílio de Constantinopla III, como todos os grandes eventos da história da Igreja, é cercado de equívocos, simplificações e lendas que se acumularam ao longo de treze séculos. Os mitos mais persistentes envolvem a suposta 'invenção' da doutrina das duas vontades, a natureza da condenação do Papa Honório I, a relação do concílio com Calcedônia, a suposta marginalidade do monotelismo, a confusão entre os cânones de 681 e os de 692, o papel do imperador, e as posições das diferentes tradições cristãs sobre o anátema de Honório. A seguir, desmontamos cada um desses mitos com base nas fontes primárias e na historiografia moderna."

export const mitos = [
  {
    id: 1,
    mito: "O concílio inventou a doutrina das duas vontades do zero em 681",
    realidade:
      "A doutrina das duas vontades e duas operações estava plenamente desenvolvida pelo menos 20 anos antes do concílio, nas obras de Máximo, o Confessor (Disputa com Pirro, 645; Opuscula Theologica, 640s–650s) e de Sofrônio de Jerusalém (Carta Sinodal, 634). O concílio não inventou nada: formulou conciliarmente uma teologia que já existia e fora testada no fogo da perseguição.",
    explicacao:
      "Este mito nasce do desconhecimento da teologia pré-conciliar de Máximo e Sofrônio. A cronologia é clara: Sofrônio denuncia o monoenergismo em 634; Máximo desenvolve a doutrina das duas vontades naturais entre 640 e 655; o Concílio de Latrão (649), convocado por Martinho I, já define as duas vontades e duas operações em termos quase idênticos aos de 681; a carta dogmática de Agatão (680), que serve de base ao Horos, é inteiramente dependente de Máximo. O concílio de 681 foi o ato final de ratificação ecumênica, não o momento de invenção. A definição conciliar é a 'promulgação oficial' de uma teologia que já era a fé confessada por Roma, pelos monges palestinos e pelos discípulos de Máximo. Dizer que o concílio 'inventou' a doutrina é como dizer que Calcedônia 'inventou' as duas naturezas — quando, na verdade, a fórmula calcedoniana já circulava no Tomo de Leão (449) e na tradição antioquena.",
    gravidade: "alta",
    origemDoMito:
      "Desconhecimento generalizado da teologia de Máximo, o Confessor, e da cronologia da controvérsia monotelita. A tendência de associar doutrinas exclusivamente aos concílios que as definiram, ignorando o longo processo teológico prévio.",
    fontes: [
      "Louth, Andrew. Maximus the Confessor (1996), pp. 15–25",
      "Hovorun, Cyril. Will, Action and Freedom (2008), pp. 90–120",
      "Bathrellos, Demetrios. The Byzantine Christ (2004), pp. 100–130",
    ],
  },
  {
    id: 2,
    mito: "O Papa Honório I foi condenado como herege formal por um concílio infalível, o que invalida a infalibilidade papal",
    realidade:
      "A condenação de Honório foi por negligência pastoral (imprudentia), não por ensino herético formal ex cathedra. O próprio Papa Leão II, ao confirmar o anátema em 682, precisou que Honório 'permitiu' a heresia por omissão, não que a 'ensinou' positivamente. A carta de Honório a Sérgio era uma resposta pastoral privada, não uma definição dogmática solene.",
    explicacao:
      "Este é o mito mais persistente e mais debatido da história do papado. A realidade é mais nuançada do que a simplificação sugere. Primeiro, a carta de Honório a Sérgio (634/635) não era uma constituição dogmática nem uma encíclica: era uma resposta pastoral privada a uma pergunta de um patriarca oriental. Honório não pretendia definir um dogma vinculante para toda a Igreja. Segundo, a expressão 'uma vontade' (hen thelema) usada por Honório provavelmente significava 'uma orientação moral' (não há conflito em Cristo), não a negação técnica da vontade humana como faculdade natural — uma distinção que só Máximo, o Confessor, articularia com clareza anos depois. Terceiro, e mais importante, o Papa Leão II — que confirmou o concílio e o anátema — introduziu uma nuance decisiva em suas cartas de 682: Honório foi condenado por 'negligência' (negligentia) e 'traição por omissão', não por ensino herético formal. Leão II escreveu: 'Honório não extinguiu a chama nascente da heresia, como convinha à autoridade apostólica, mas a alimentou por negligência.' Esta distinção entre heresia formal (ensino positivo de erro) e negligência pastoral (omissão culposa) foi aceita por toda a Igreja durante a Idade Média e tornou-se o fundamento da defesa católica durante o Vaticano I (1870). A definição da infalibilidade (Pastor Aeternus) limita a infalibilidade a condições estritas — fala ex cathedra, matéria de fé e moral, intenção de obrigar toda a Igreja — que a carta de Honório não satisfaz.",
    gravidade: "alta",
    origemDoMito:
      "Leitura superficial das atas conciliares sem considerar a nuance introduzida por Leão II na confirmação. Uso polêmico do caso Honório por adversários do papado (galicanos no séc. XVII, protestantes no séc. XVI, minoria do Vaticano I em 1870). A formulação crua do Horos ('confirmou seus dogmas ímpios') é facilmente mal-interpretada sem o contexto da carta de Leão II.",
    fontes: [
      "Leão II, Ep. ad Constantinum IV (PL 96.399–404)",
      "Leão II, Ep. ad Episcopos Hispaniae (PL 96.405–414)",
      "Schatz, Klaus. Papal Primacy: From Its Origins to the Present (1996), cap. 4",
      "Denzinger, Enchiridion Symbolorum, nn. 550–552",
      "Hefele-Leclercq, Histoire des Conciles, III.2, pp. 560–565",
    ],
  },
  {
    id: 3,
    mito: "Constantinopla III anulou, corrigiu ou contradisse a definição de Calcedônia (451)",
    realidade:
      "O concílio explicitamente REAFIRMOU Calcedônia como norma inviolável e apresentou sua própria definição como complemento orgânico, aplicando os mesmos quatro advérbios calcedoninos ('sem divisão, sem mudança, sem separação, sem confusão') às vontades e operações. O Horos de 681 é a extensão lógica de 451, não sua correção.",
    explicacao:
      "Este mito nasce da confusão entre 'complementaridade' e 'contradição'. O Horos de 681 começa com uma reafirmação solene de todos os cinco concílios anteriores, incluindo Calcedônia, e cita explicitamente a fórmula calcedoniana das duas naturezas 'sem confusão, sem mudança, sem divisão, sem separação'. A inovação de 681 consiste em estender esses mesmos quatro advérbios — originalmente aplicados às duas naturezas — às duas vontades e às duas operações. Esta extensão é logicamente necessária: se Cristo tem duas naturezas completas (Calcedônia), e se a vontade e a operação são propriedades da natureza (axioma de Máximo), então Cristo deve ter duas vontades e duas operações completas (Constantinopla III). Negar as duas vontades seria, na prática, negar a completude das duas naturezas, o que equivaleria a trair Calcedônia. Portanto, Constantinopla III não contradiz Calcedônia, mas a completa e a protege contra uma interpretação monotelita que a esvaziaria de conteúdo dinâmico. Os próprios padres do concílio estavam conscientes desta continuidade: a aclamação 'Esta é a fé dos Padres!' refere-se precisamente à fé de Calcedônia agora plenamente articulada.",
    gravidade: "alta",
    origemDoMito:
      "Confusão entre 'desenvolvimento doutrinal' e 'contradição'. A tendência de ver cada concílio como uma 'correção' do anterior, em vez de um desdobramento orgânico. Ignorância da estrutura do Horos, que começa com a reafirmação explícita de Calcedônia.",
    fontes: [
      "Horos de Constantinopla III, ACO II.2 (ed. Riedinger)",
      "Kelly, J.N.D. Early Christian Doctrines (1960), cap. 14",
      "Meyendorff, John. Byzantine Theology (1974), pp. 46–50",
    ],
  },
  {
    id: 4,
    mito: "O monotelismo era uma heresia obscura e marginal, defendida por um punhado de teólogos excêntricos",
    realidade:
      "O monotelismo foi a doutrina OFICIAL do Império Bizantino por aproximadamente 40 anos (638–680), imposta por três imperadores (Heráclio, Constante II e, inicialmente, Constantino IV), apoiada por quatro patriarcas de Constantinopla (Sérgio, Pirro, Paulo II, Pedro), um patriarca de Alexandria (Ciro) e um patriarca de Antioquia (Macário), e sancionada por dois éditos imperiais (Ecthesis e Typos).",
    explicacao:
      "Este mito reflete uma visão anacrônica que projeta o resultado do concílio (a condenação do monotelismo) sobre o período anterior. Na realidade, entre 638 e 680, o monotelismo era a posição dominante e oficial. O Ecthesis de Heráclio (638) foi afixado no nártex de Santa Sofia como norma de fé. O Typos de Constante II (648) impôs o silêncio sob pena de deposição, exílio e castigo corporal. Os que se opunham — Martinho I, Máximo, o Confessor, Sofrônio — eram a minoria perseguida, não a maioria. Martinho foi preso e morreu no exílio; Máximo teve a língua e a mão cortadas. Somente após a perda das províncias orientais para o Islã (Egito, 641; Síria, 636–638; Palestina, 638) é que o monotelismo perdeu sua razão de ser política e sua base social. No concílio de 681, a fraqueza numérica dos monotelitas (Macário + 2 monges) não reflete a marginalidade da doutrina em si, mas o colapso de sua base política e territorial. O monotelismo foi a maior heresia patrocinada pelo Estado na história da Igreja, comparável em escala ao arianismo do século IV.",
    gravidade: "média",
    origemDoMito:
      "Projeção anacrônica do resultado do concílio sobre o período anterior. Tendência de minimizar heresias condenadas como se sempre tivessem sido marginais. Desconhecimento da história política do Império Bizantino no século VII.",
    fontes: [
      "Meyendorff, John. Byzantine Theology (1974), pp. 35–45",
      "Hovorun, Cyril. Will, Action and Freedom (2008), pp. 50–90",
      "Teófanes, Chronographia AM 6130–6170",
    ],
  },
  {
    id: 5,
    mito: "Os cânones disciplinares do concílio são todos autênticos de 681",
    realidade:
      "A atribuição de cânones disciplinares a Constantinopla III (681) é fortemente debatida. A maioria dos historiadores modernos (Hefele, Riedinger, Ohme) demonstra que os cânones frequentemente atribuídos a 681 pertencem, na verdade, ao Concílio Quinissexto (in Trullo) de 692, reunido no mesmo local onze anos depois. O VI Ecumênico foi essencialmente um concílio dogmático, sem legislação disciplinar própria.",
    explicacao:
      "A confusão entre os cânones de 681 e os de 692 é uma das mais persistentes da história do direito canônico. O Concílio Quinissexto (também chamado 'in Trullo' porque se reuniu na mesma sala do Palácio de Trullo) foi convocado por Justiniano II em 692 para promulgar legislação disciplinar que os V e VI Concílios Ecumênicos (Constantinopla II e III) não haviam produzido. Os 102 cânones do Trullo cobrem uma vasta gama de questões: celibato clerical, jejuns, relações com judeus e hereges, disciplina monástica, etc. A tradição oriental (bizantina) considera o Trullo como o 'complemento disciplinar' dos V e VI Ecumênicos, formando com eles um único bloco canônico. A tradição ocidental (romana), no entanto, rejeitou vários cânones do Trullo por contradizerem a disciplina latina (especialmente o cânon 13 sobre o casamento de clérigos e o cânon 55 sobre o jejum de sábado). O Papa Sérgio I (687–701) recusou assinar as atas do Trullo. A confusão é agravada pelo fato de que algumas coleções canônicas orientais agrupam os cânones de 681 e 692 sob o título genérico 'Concílio in Trullo', sem distinguir claramente as duas assembleias. Na prática, o VI Ecumênico (681) provavelmente não promulgou cânones disciplinares próprios, ou promulgou apenas um ou dois cânones formais de confirmação dos concílios anteriores.",
    gravidade: "média",
    origemDoMito:
      "Confusão das coleções canônicas orientais que agrupam 681 e 692 sob o mesmo título. O fato de ambos os concílios terem se reunido no mesmo local (Palácio de Trullo) e a apenas 11 anos de distância. A tradição oriental de considerar o Trullo como 'complemento' dos Ecumênicos.",
    fontes: [
      "Ohme, Heinz. Sources of the Greek Canon Law (2012)",
      "Hefele-Leclercq, Histoire des Conciles, III.2, pp. 570–580",
      "Joannou, P.P. Discipline Générale Antique (1962)",
    ],
  },
  {
    id: 6,
    mito: "O concílio foi puramente uma imposição imperial, sem debate teológico real",
    realidade:
      "O concílio se desenrolou ao longo de 10 meses e 18 sessões, com debates teológicos intensos, verificação crítica de fontes patrísticas, confrontos públicos com os monotelitas, a descoberta de falsificações documentais e até um 'milagre' fracassado. Constantino IV agiu mais como mediador do que como ditador teológico, e o resultado final refletiu a teologia de Roma (Agatão/Máximo), não uma fórmula imperial.",
    explicacao:
      "Este mito é uma generalização indevida a partir dos casos de Heráclio (Ecthesis, 638) e Constante II (Typos, 648), que de fato impuseram fórmulas teológicas por decreto imperial. Constantino IV, no entanto, agiu de maneira significativamente diferente. Embora tenha presidido pessoalmente as primeiras 11 sessões e mantido controle sobre a logística, ele não impôs uma fórmula teológica própria. O imperador permitiu que os legados papais lessem a carta dogmática de Agatão (sessão 4), que Macário apresentasse sua defesa (sessões 5–6), que as fontes patrísticas fossem verificadas com manuscritos autênticos (sessão 6), e que o Horos fosse redigido por uma comissão de bispos (sessões 15–16). O fato de o Horos final refletir integralmente a teologia da carta de Agatão — e, por trás dela, a teologia de Máximo, o Confessor — é a prova mais forte de que o resultado não foi ditado pelo imperador. Se Constantino IV quisesse impor uma fórmula de compromisso (como seus predecessores), o concílio teria produzido um novo Ecthesis ou Typos, não uma definição diotelita alinhada com Roma. O concílio de 681 é, na verdade, um dos exemplos mais equilibrados de 'symphonia' (cooperação Igreja-Estado) na história bizantina.",
    gravidade: "média",
    origemDoMito:
      "Generalização a partir do cesaropapismo de Heráclio e Constante II. Tendência de historiadores ocidentais do século XIX (especialmente Hefele) de ver toda a relação Igreja-Estado bizantina como 'cesaropapismo'. Desconhecimento da duração e complexidade dos debates conciliares.",
    fontes: [
      "ACO II.2, sessões 1–18 (ed. Riedinger)",
      "Meyendorff, John. Byzantine Theology (1974), pp. 35–40",
      "Teófanes, Chronographia AM 6172–6173",
    ],
  },
  {
    id: 7,
    mito: "A Igreja Ortodoxa rejeita a condenação de Honório e considera o anátema inválido",
    realidade:
      "A Igreja Ortodoxa aceita PLENAMENTE o VI Concílio Ecumênico, incluindo o anátema contra Honório I. É a Igreja CATÓLICA que desenvolveu nuances interpretativas (através de Leão II e do Vaticano I) para compatibilizar o anátema com a doutrina da infalibilidade papal. A posição ortodoxa é mais simples e direta: o concílio condenou Honório, e ponto.",
    explicacao:
      "Este mito inverte as posições reais das duas tradições. Na Igreja Ortodoxa, o VI Concílio Ecumênico é aceito integralmente como norma de fé, sem reservas nem nuances. O anátema contra Honório é considerado válido e vinculante, e é frequentemente citado pelos teólogos ortodoxos como prova de que um papa pode errar em matéria de fé e que a autoridade suprema reside nos concílios ecumênicos, não no bispo de Roma. Teólogos ortodoxos como John Meyendorff, Timothy Ware e Alexander Schmemann citam o caso Honório como um dos argumentos mais fortes contra a infalibilidade papal. Na Igreja Católica, por outro lado, o anátema é aceito como fato histórico, mas sua interpretação é nuançada: Leão II precisou que Honório foi condenado por negligência, não por heresia formal; o Vaticano I (1870) definiu a infalibilidade com condições estritas que excluem a carta de Honório; e teólogos católicos como Klaus Schatz, Joseph Ratzinger (Bento XVI) e Brian Tierney argumentam que a condenação de Honório não contradiz a infalibilidade porque ele não falou ex cathedra. A ironia é que a Igreja Ortodoxa, que não aceita a infalibilidade papal, é a que aceita o anátema de Honório de forma mais direta e sem complicações, enquanto a Igreja Católica, que define a infalibilidade, é a que precisa de nuances para reconciliar o anátema com sua eclesiologia.",
    gravidade: "baixa",
    origemDoMito:
      "Confusão sobre as posições das diferentes tradições cristãs. Tendência de projetar o debate católico (infalibilidade) sobre a posição ortodoxa, que não compartilha as mesmas premissas eclesiológicas. Desconhecimento da recepção ortodoxa dos concílios ecumênicos.",
    fontes: [
      "Meyendorff, John. Byzantine Theology (1974), pp. 46–50",
      "Ware, Timothy. The Orthodox Church (1993), pp. 26–28",
      "Schatz, Klaus. Papal Primacy (1996), cap. 4",
    ],
  },
]