// ═══════════════════════════════════════════════════════════════════════════
// MITOS E MAL-ENTENDIDOS SOBRE O CONCÍLIO DE CALCEDÔNIA (451 d.C.)
// ═══════════════════════════════════════════════════════════════════════════
// Este arquivo desmonta oito equívocos frequentes sobre o concílio,
// desde afirmações apologéticas simplistas até deturpações históricas
// difundidas em manuais e literatura popular.
// ═══════════════════════════════════════════════════════════════════════════

export const resumoMitos: string =
  "Poucos concílios da Antiguidade cristã acumularam tantos mitos e mal-entendidos como Calcedônia. " +
  "As razões são compreensíveis: a complexidade técnica do vocabulário grego (physis, hypostasis, " +
  "prosopon), a rivalidade histórica entre calcedonianos e não-calcedonianos que produziu " +
  "narrativas concorrentes, o peso político do cânon 28 na relação Roma–Constantinopla, e a " +
  "distância cultural que separa o leitor moderno das disputas cristológicas do século V. Os oito " +
  "mitos abaixo — organizados por gravidade — pretendem esclarecer alguns dos equívocos mais " +
  "difundidos, tanto em ambientes católicos e ortodoxos quanto em manuais protestantes e obras " +
  "populares de divulgação. Cada mito é apresentado com a realidade histórica correspondente, uma " +
  "explicação circunstanciada, a genealogia provável do equívoco e as fontes primárias e " +
  "secundárias que sustentam a correção.";

export interface Mito {
  id: number;
  mito: string;
  gravidade: "alta" | "média" | "baixa";
  realidade: string;
  explicacao: string;
  origemDoMito: string;
  fontes: string[];
}

export const mitos: Mito[] = [
  {
    id: 1,
    mito: "\"Calcedônia inventou uma nova cristologia, diferente da fé antiga da Igreja.\"",
    gravidade: "alta",
    realidade:
      "A Definição de Calcedônia não é invenção, mas SÍNTESE explícita de cinco fontes autorizadas " +
      "anteriores: o Credo de Niceia (325), o Credo de Constantinopla (381), a Segunda Carta de " +
      "Cirilo a Nestório (430, aprovada por Éfeso 431), a Fórmula de União de 433 (Cirilo–João de " +
      "Antioquia) e o Tomo de Leão (449). O próprio texto da Definição fecha reivindicando " +
      "continuidade tríplice: \"como os profetas desde o princípio ensinaram, como o próprio Jesus " +
      "Cristo nos instruiu, e como nos transmitiu o Símbolo dos Padres\".",
    explicacao:
      "O que Calcedônia fez de novo NÃO foi introduzir doutrina inédita, mas fixar TERMINOLOGIA " +
      "TÉCNICA para responder às novas heresias que surgiram após 431. A distinção clara entre " +
      "physis (natureza / essência) e hypostasis (subsistência concreta) — que os capadócios haviam " +
      "elaborado para a Trindade — foi agora aplicada à cristologia. Os quatro advérbios apofáticos " +
      "(asynchytōs, atreptōs, adiairetōs, achōristōs) não afirmam nada de novo positivamente: " +
      "delimitam negativamente o espaço da ortodoxia contra os erros identificados. É desenvolvimento " +
      "doutrinal legítimo (Newman), não invenção. A prova é que cada afirmação da Definição pode " +
      "ser rastreada a uma fonte anterior.",
    origemDoMito:
      "A acusação de \"nova fé\" foi levantada pelos próprios bispos hesitantes em 451 (\"basta o " +
      "Credo de Niceia!\") e retomada depois pelos miafisitas como argumento canônico: o cânon 7 " +
      "de Éfeso proibia \"nova fé\". A resposta calcedoniana é que não há nova fé, apenas nova " +
      "PRECISÃO exigida pelas novas ambiguidades. O mito é reproduzido modernamente em polêmicas " +
      "coptas e siríacas tradicionais.",
    fontes: [
      "ACO II.1.2, pp. 121–130 (debate sobre a legitimidade de nova fórmula)",
      "J. H. Newman, An Essay on the Development of Christian Doctrine (1845), cap. 5",
      "A. Grillmeier, Christ in Christian Tradition, vol. 1, pp. 543–557",
      "R. V. Sellers, The Council of Chalcedon, pp. 200–253",
    ],
  },
  {
    id: 2,
    mito: "\"Calcedônia é nestoriana, ou pelo menos abriu a porta ao nestorianismo.\"",
    gravidade: "alta",
    realidade:
      "Calcedônia CONDENOU Nestório explicitamente. Teodoreto de Ciro e Ibas de Edessa só foram " +
      "reabilitados na Sessão 8 depois de anatematizarem publicamente Nestório em voz alta. Dois " +
      "dos quatro advérbios da Definição — adiairetōs (sem divisão) e achōristōs (sem separação) — " +
      "existem PRECISAMENTE para excluir o nestorianismo. A insistência quíntupla em \"um só e o " +
      "mesmo Cristo\" (hena kai ton auton) é o exato oposto da tendência nestoriana a duplicar " +
      "sujeitos.",
    explicacao:
      "Nestório afirmava dois sujeitos (o Verbo e o homem Jesus) unidos moralmente ou relacionalmente; " +
      "Calcedônia afirma UMA SÓ hipóstase (o próprio Verbo eterno) subsistindo em duas naturezas. " +
      "Essa é a diferença ontológica máxima entre nestorianismo e calcedonismo. Além disso, " +
      "Calcedônia confirma Theotokos (\"Mãe de Deus\"), título que Nestório rejeitava — não pode " +
      "haver melhor demonstração da distância. A acusação miafisita de \"nestorianismo velado\" se " +
      "baseia na terminologia \"duas naturezas depois da união\" e na reabilitação de figuras " +
      "antioquenas, mas ignora que essas figuras subscreveram formalmente a fé cirílica e " +
      "anatematizaram Nestório.",
    origemDoMito:
      "A acusação vem historicamente dos miafisitas radicais (\"acéfalos\") após 451 e foi " +
      "amplificada por Timóteo Éluro, Severo de Antioquia e Filoxeno de Mabug em suas polêmicas " +
      "anti-calcedonianas. É preservada até hoje na apologética copta tradicional. A cristologia " +
      "neocalcedoniana (Constantinopla II, 553) tentou justamente responder a essa acusação " +
      "\"cirilianizando\" a interpretação de Calcedônia.",
    fontes: [
      "ACO II.1.3, pp. 7–14 (Sessão 8, Teodoreto anatematiza Nestório)",
      "Definição de Calcedônia (texto integral em ACO II.1.2, pp. 126–130)",
      "P. T. R. Gray, The Defense of Chalcedon in the East (451–553), Leiden 1979",
      "J. Meyendorff, Christ in Eastern Christian Thought, Crestwood 1975, pp. 21–46",
    ],
  },
  {
    id: 3,
    mito: "\"O Papa Leão Magno ditou sozinho tudo o que foi decidido em Calcedônia.\"",
    gravidade: "média",
    realidade:
      "O Tomo de Leão foi central, mas não ditou nada sozinho. Foi lido na Sessão 2, RECEBIDO COM " +
      "RESERVAS por bispos ilíricos e palestinos, submetido a cinco dias de exame comparativo com " +
      "as cartas de Cirilo, e só então aclamado. A Definição final foi redigida por uma comissão " +
      "de bispos orientais, teve seu primeiro rascunho REJEITADO por ambiguidade, e a versão final " +
      "combina vocabulário latino (Tomo) e grego (Cirilo). A agenda geral do concílio era controlada " +
      "pelos COMISSÁRIOS IMPERIAIS de Marciano.",
    explicacao:
      "A estrutura decisória de Calcedônia envolveu quatro polos: (1) os comissários imperiais, que " +
      "presidiam, controlavam a agenda e podiam ameaçar transferir o concílio; (2) os legados " +
      "papais, que representavam Leão e vetavam questões doutrinais; (3) o patriarca de Constantinopla, " +
      "Anatólio, que exercia liderança prática do episcopado oriental; (4) a assembleia dos cerca de " +
      "500 bispos, que debatia e votava. Nenhum desses polos ditou sozinho. O Tomo forneceu a " +
      "arquitetura latina, mas a Definição final é síntese cirílica-leonina. E, no episódio do Cânon " +
      "28, Roma foi explicitamente derrotada pelo bloco oriental.",
    origemDoMito:
      "Vem principalmente da apologética católica romana pré-Vaticano II, que buscava provar a " +
      "primazia papal citando \"Pedro falou por Leão\" como se fosse aclamação de submissão " +
      "incondicional. A pesquisa histórica moderna (Grillmeier, Price & Gaddis) mostrou o processo " +
      "decisório muito mais colegial. Também vem, em direção oposta, da polêmica ortodoxa oriental " +
      "que quer reduzir Calcedônia a imposição romana.",
    fontes: [
      "ACO II.1.2, pp. 78–110 (recepção do Tomo, Sessão 2)",
      "R. Price & M. Gaddis, The Acts of the Council of Chalcedon (2005), vol. 2, pp. 14–24",
      "T. Jalland, The Life and Times of St. Leo the Great, London 1941, pp. 289–342",
      "H. Chadwick, East and West: The Making of a Rift in the Church, Oxford 2003, pp. 55–72",
    ],
  },
  {
    id: 4,
    mito: "\"Os monofisitas foram condenados e extintos; hoje só existem católicos e ortodoxos bizantinos.\"",
    gravidade: "alta",
    realidade:
      "Cerca de 60 MILHÕES de cristãos hoje pertencem às Igrejas Ortodoxas Orientais (não-calcedonianas), " +
      "distribuídos em seis igrejas autocéfalas: Copta (~10–15 M), Etíope (~36–45 M, a maior), " +
      "Eritreia (~2–3 M), Siríaca Ortodoxa (~1,5–2 M), Armênia Apostólica (~6–9 M) e Malankara " +
      "Indiana (~2,5–3 M). São a TERCEIRA maior família cristã do mundo, depois de católicos e " +
      "ortodoxos bizantinos.",
    explicacao:
      "O mito da extinção reflete uma perspectiva puramente ocidental que ignora a existência " +
      "contínua e vigorosa dessas igrejas, que preservaram tradições litúrgicas, teológicas, " +
      "monásticas e culturais próprias por 16 séculos. Além disso, o próprio rótulo \"monofisita\" " +
      "é hoje considerado impreciso e ofensivo: essas igrejas rejeitaram Eutiques tanto quanto os " +
      "calcedonianos e confessam a integridade da humanidade de Cristo. O termo teologicamente " +
      "correto é \"miafisita\" (uma só physis encarnada, sem qualquer absorção), ou simplesmente " +
      "\"Ortodoxo Oriental\" / \"não-calcedoniano\".",
    origemDoMito:
      "Vem de uma leitura triunfalista da história cristã ocidental que trata o cisma calcedoniano " +
      "como \"resolvido\" pela vitória política de Roma-Constantinopla, ignorando que as igrejas " +
      "orientais nunca deixaram de existir. Também de uma confusão terminológica entre \"monofisita\" " +
      "(Eutiques, doutrina heterodoxa) e \"miafisita\" (Cirilo, doutrina ortodoxa em substância).",
    fontes: [
      "World Christian Database (Center for the Study of Global Christianity, 2023)",
      "S. Brock, \"The Nestorian Church: A Lamentable Misnomer\" e obras análogas sobre terminologia",
      "C. Chaillot, The Oriental Orthodox Churches, Geneva 2016",
      "Declaração Comum João Paulo II – Shenouda III (1988), reconhecimento da ortodoxia " +
        "cristológica das igrejas orientais",
    ],
  },
  {
    id: 5,
    mito: "\"Dizer que Cristo tem duas naturezas equivale a dizer que há dois Cristos.\"",
    gravidade: "média",
    realidade:
      "A Definição de Calcedônia afirma EXPLICITAMENTE o oposto: \"não dividido em duas pessoas, " +
      "mas um só e o mesmo Filho\" (ouk eis dyo prosōpa merizomenon... all' hena kai ton auton). O " +
      "que Calcedônia faz é distinguir dois níveis ontológicos: NATUREZA (physis: conjunto de " +
      "propriedades essenciais) e HIPÓSTASE / PESSOA (hypostasis / prosōpon: subsistência concreta " +
      "individual). Cristo tem duas naturezas, mas UMA só hipóstase / pessoa.",
    explicacao:
      "A confusão entre natureza e pessoa é o principal obstáculo cognitivo para compreender " +
      "Calcedônia. Uma analogia clássica (embora imperfeita, como todas as analogias trinitárias " +
      "e cristológicas): três pessoas (Pedro, Tiago, João) partilham uma só natureza humana; " +
      "Cristo, inversamente, é UMA pessoa em DUAS naturezas. A grande conquista de Calcedônia é " +
      "justamente ter distinguido conceitualmente esses dois planos, que estavam confundidos nos " +
      "vocabulários de Éfeso 431 e do Latrocínio 449. Uma vez feita a distinção, o falso dilema " +
      "\"unidade ou distinção\" se dissolve: pode-se afirmar simultaneamente unidade (pessoal) e " +
      "distinção (natural).",
    origemDoMito:
      "É o argumento clássico dos miafisitas contra a fórmula calcedoniana, formulado por Dioscoro " +
      "e sistematizado por Severo de Antioquia. O argumento pressupõe que \"physis\" e \"hipóstase\" " +
      "sejam sinônimos (como em Cirilo em alguns contextos), o que Calcedônia rejeita ao distinguí-los. " +
      "Também aparece em explicações populares mal formuladas em ambientes calcedonianos.",
    fontes: [
      "Definição de Calcedônia, cláusula \"em uma pessoa e uma hipóstase, não dividido em duas pessoas\"",
      "J. Meyendorff, Christ in Eastern Christian Thought, cap. 1–2",
      "A. Grillmeier, Christ in Christian Tradition, vol. 2/2, sobre a distinção physis/hipóstase",
      "B. E. Daley, God Visible: Patristic Christology Reconsidered, Oxford 2018, pp. 165–190",
    ],
  },
  {
    id: 6,
    mito: "\"Calcedônia foi um concílio puramente político, sem valor teológico real.\"",
    gravidade: "média",
    realidade:
      "Houve dimensão política REAL e forte (dinastia Marciano-Pulquéria, comissários imperiais, " +
      "pressões, ameaças, Cânon 28), mas isso NÃO INVALIDA a densidade teológica das decisões. A " +
      "Definição, os quatro advérbios apofáticos, a distinção physis/hipóstase, a integração do " +
      "Tomo com Cirilo — são conquistas teológicas de altíssimo nível intelectual, cujo valor não " +
      "depende das circunstâncias políticas em que foram produzidas.",
    explicacao:
      "Todo concílio ecumênico foi convocado por imperadores, teve dimensão política e envolveu " +
      "interesses institucionais. Isso vale para Niceia 325 (Constantino), Constantinopla 381 " +
      "(Teodósio), Éfeso 431 (Teodósio II), Calcedônia 451 (Marciano) e todos os subsequentes. " +
      "Reduzir Calcedônia à política é aplicar-lhe um critério que, se aplicado consistentemente, " +
      "invalidaria toda a tradição conciliar cristã. A questão relevante não é SE houve política " +
      "(sempre há), mas se as decisões DOUTRINAIS resistem à análise teológica independente — e " +
      "elas resistem: 16 séculos de teologia cristológica se movem dentro da estrutura conceitual " +
      "de Calcedônia. Marx, Nietzsche e certa historiografia positivista popularizaram a redução " +
      "cínica de decisões conciliares a mera política, mas a análise histórica rigorosa (Grillmeier, " +
      "Meyendorff, Pelikan) mostra a genuína densidade doutrinal do debate.",
    origemDoMito:
      "Herdeiro de tradições anticlericais iluministas (Voltaire, Gibbon), amplificado por historiografia " +
      "marxista e por certa apologética não-cristã. Também aparece em ambientes protestantes " +
      "primitivistas que buscam desvalorizar toda a tradição conciliar em favor de um \"cristianismo " +
      "puro do Novo Testamento\".",
    fontes: [
      "J. Pelikan, The Christian Tradition, vol. 1, cap. 6",
      "A. Grillmeier, Christ in Christian Tradition, vol. 1, pp. 520–557",
      "F. Millar, A Greek Roman Empire: Power and Belief under Theodosius II, Berkeley 2006, cap. 5",
      "R. Price & M. Gaddis, The Acts of the Council of Chalcedon (2005), vol. 1, introdução",
    ],
  },
  {
    id: 7,
    mito: "\"O Cânon 28 foi aceito por Roma e integrado ao direito canônico universal.\"",
    gravidade: "alta",
    realidade:
      "O papa Leão Magno REJEITOU FORMALMENTE o Cânon 28 em três cartas explícitas: Epistula 104 a " +
      "Marciano (fim de 452), Epistula 105 a Pulquéria e Epistula 106 a Anatólio. Leão declarou-o " +
      "\"nulo\" (irritum), argumentando que violava o cânon 6 de Niceia e usurpava a primazia " +
      "petrina para fundá-la em razões políticas. As coleções canônicas latinas antigas (Dionysiana, " +
      "Hispana) contam apenas 27 cânones de Calcedônia, omitindo o 28. Roma nunca o ratificou " +
      "formalmente.",
    explicacao:
      "O Cânon 28 é um dos temas mais tensos da eclesiologia comparada. A tradição ORIENTAL considera-o " +
      "válido (aprovado por concílio ecumênico, recebido pela Igreja bizantina, base da ordem " +
      "pentárquica); a tradição LATINA considera-o nulo (protestado pelos legados, rejeitado por " +
      "Leão, ausente das coleções canônicas). Esta divergência é uma das raízes remotas do Grande " +
      "Cisma de 1054 e continua ativa no diálogo católico-ortodoxo contemporâneo (documentos de " +
      "Ravena 2007, Chieti 2016, Alexandria 2023). Curiosamente, algumas coleções canônicas " +
      "ocidentais tardo-medievais (século XIII em diante) incluem o Cânon 28 mais por completude " +
      "documental do que por aprovação de sua hermenêutica.",
    origemDoMito:
      "Vem principalmente da apologética ortodoxa bizantina, que trata como pacífica a aceitação " +
      "geral do cânon; também aparece em obras acadêmicas descuidadas que não distinguem entre " +
      "\"aprovação pela assembleia oriental\" e \"ratificação universal\". A ausência do cânon nas " +
      "coleções latinas antigas é dado historiográfico bem estabelecido, mas frequentemente ignorado.",
    fontes: [
      "Leão Magno, Epistulae 104, 105, 106 (PL 54, 993–1010)",
      "ACO II.4, pp. 55–61 (correspondência de Leão sobre Calcedônia)",
      "K. Schatz, Papal Primacy: From Its Origins to the Present, Collegeville 1996, pp. 47–56",
      "F. Dvornik, Byzance et la primauté romaine, Paris 1964",
      "V. Peri, \"Il canone 28 di Calcedonia\", em La chiesa greca in Italia (1972)",
    ],
  },
  {
    id: 8,
    mito: "\"A Definição de Calcedônia foi aprovada por unanimidade absoluta dos bispos presentes.\"",
    gravidade: "baixa",
    realidade:
      "Houve RESISTÊNCIA REAL. Os 13 bispos egípcios sobreviventes (após a deposição de Dioscoro) " +
      "RECUSARAM subscrever a Definição, prostrando-se aos pés dos comissários e implorando " +
      "dispensa. Vários bispos ilíricos e palestinos manifestaram reservas iniciais e só " +
      "subscreveram após pressão dos comissários imperiais e da comissão dirigida por Anatólio. O " +
      "primeiro rascunho da Definição foi REJEITADO. A adesão final envolveu graus significativos " +
      "de pressão política e ameaça (transferir o concílio para a Itália, deposição para os " +
      "recalcitrantes).",
    explicacao:
      "A imagem de \"unanimidade dos 630 padres\" é construção posterior. Os números reais oscilam " +
      "entre 400 e 550 bispos assinantes segundo diferentes recensões, e as actas conciliares (ACO " +
      "II.1) preservam vividamente os debates, gritos, hesitações e coações. Isso NÃO invalida " +
      "teologicamente as decisões (concílios não precisam ser unânimes para serem válidos: basta " +
      "maioria substancial recebida pela Igreja), mas relativiza o retrato apologético de assembleia " +
      "serena e concorde. O caso egípcio é o mais dramático: os bispos disseram literalmente que " +
      "seriam mortos pelo povo se voltassem com o Tomo assinado — e Proterio foi de fato linchado " +
      "seis anos depois. A recepção final foi PROGRESSIVA e envolveu quatro concílios ecumênicos " +
      "posteriores (553, 681, 787, e mesmo Trento como reafirmação latina).",
    origemDoMito:
      "Construção da historiografia apologética tradicional (bizantina e latina), que precisava " +
      "apresentar Calcedônia como assembleia harmoniosa da Igreja indivisa. Reforçada pela liturgia " +
      "bizantina (o \"domingo dos Santos Padres do IV Concílio Ecumênico\"), que celebra o " +
      "concílio de forma idealizada. As actas conciliares (redescobertas e criticamente editadas " +
      "por Schwartz na ACO no século XX) desmentem essa imagem idealizada, revelando um concílio " +
      "muito mais humano e conflituoso.",
    fontes: [
      "ACO II.1.2, pp. 111–114 (súplica dos bispos egípcios)",
      "ACO II.1.2, pp. 121–130 (rejeição do primeiro rascunho, pressão sobre a comissão)",
      "R. Price & M. Gaddis, The Acts of the Council of Chalcedon (2005), vol. 2, pp. 187–207",
      "A. de Halleux, \"La définition christologique à Chalcédoine\", RTL 7 (1976), pp. 3–23 e 155–170",
      "R. V. Sellers, The Council of Chalcedon, London 1953, pp. 103–131",
    ],
  },
];