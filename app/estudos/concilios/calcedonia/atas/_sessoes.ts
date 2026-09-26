// estudos/concilios/calcedonia/atas/_sessoes.ts

export interface SessaoCompleta {
  numero: number;
  slug: string;
  data: string;
  local: string;
  presidencia: string;
  presencas: string;
  documentosLidos?: string[];
  decisoes: string[];
  relato: string;
  momentos: string[];
  fontes: string[];
  anterior?: { numero: number; slug: string; titulo: string };
  proximo?: { numero: number; slug: string; titulo: string };
}

export const sessoes: SessaoCompleta[] = [
  {
    numero: 1, slug: 'sessao-01', data: '8 de outubro de 451',
    local: 'Igreja de Santa Eufêmia, Calcedônia',
    presidencia: 'Paschasinus de Lilibeu (legado papal) e Lucêncio de Ascoli',
    presencas: 'Cerca de 130 bispos (A VERIFICAR), 19 comissários imperiais, legados papais',
    decisoes: [
      'O Latrocínio de 449 foi declarado nulo e inválido',
      'Dioscoro de Alexandria foi sentenciado à deposição (confirmada na Sessão 3)',
      'Flavian de Constantinopla foi proclamado mártir',
      'Adiamento do veredito final para a Sessão 3',
    ],
    relato: 'A primeira sessão solene abriu sob clima de intenso nervosismo. Dioscoro, que presidira o Latrocínio como juiz, agora ocupava o banco dos acusados — inversão simbólica de enorme potência. Os 19 comissários imperiais leram a carta imperial de Marciano ordenando a revisão do Latrocínio. Paschasinus declarou que o concílio se reunia "para restaurar a fé e punir os culpados".\n\nO momento mais dramático foi a leitura das atas do Latrocínio pelo notário Aécio, que durou horas e revelou a manipulação de Dioscoro: recusa em ler o Tomo de Leão, introdução de soldados armados, coação dos bispos para assinarem atas em branco, e o espancamento que causara a morte de Flavian. Os bispos gritavam: "Queimem Dioscoro!", "Ele deve ser cortado ao meio!", "Que seus olhos sejam arrancados!".\n\nEusébio de Dorileu, deposto no Latrocínio, apresentou acusação formal com voz embargada: "Flavian foi assassinado! Eu fui exilado! A fé foi pisoteada!". Dioscoro tentou defender-se invocando Cirilo, mas os bispos responderam: "Cirilo é santo, mas você não é Cirilo!".\n\nA sessão encerrou-se sem veredito formal — os comissários adiaram o julgamento para a Sessão 3, determinando que a Sessão 2 seria dedicada à leitura dos documentos de fé.',
    momentos: [
      'Inversão simbólica: Dioscoro, de juiz a acusado',
      'Leitura das atas do Latrocínio — horas de revelações',
      'Testemunho emocionado de Eusébio de Dorileu',
      'Defesa malsucedida de Dioscoro invocando Cirilo',
    ],
    fontes: ['ACO II,1 (Schwartz): Acta Graeca 1', 'ACO II,4: Acta Latina 1', 'Price & Gaddis, vol. I, pp. 1–30', 'Evagrio Escolástico, HE II.18'],
    anterior: undefined, proximo: { numero: 2, slug: 'sessao-02', titulo: 'Documentos de fé' },
  },

  {
    numero: 2, slug: 'sessao-02', data: '10 de outubro de 451',
    local: 'Igreja de Santa Eufêmia, Calcedônia',
    presidencia: 'Paschasinus de Lilibeu (legado papal)',
    presencas: 'Aproximadamente 130 bispos (A VERIFICAR), legados papais, comissários imperiais',
    documentosLidos: [
      'Credo de Niceia (325)',
      'Credo de Constantinopla (381)',
      '2ª Carta de Cirilo a Nestório (430)',
      'Carta de Cirilo a João de Antioquia — Fórmula de União (433)',
      'Tomo de Leão Magno (Ep. 28, 449)',
    ],
    decisoes: [
      'Os cinco documentos foram recebidos como "fé dos padres"',
      'O Tomo de Leão foi recebido com a aclamação "Pedro falou por Leão!"',
      'Cinco dias de estudo para bispos hesitantes',
      'Confirmação final da ortodoxia do Tomo por aclamação',
    ],
    relato: 'A segunda sessão marcou a transição do tribunal para a liturgia. A sessão abriu com a leitura solene do Credo de Niceia (325), recebida com aclamação: "Esta é a fé dos padres! Ninguém pode acrescentar ou remover nada!". A insistência em Niceia como norma insubstituível criou tensão: se Niceia é suficiente, por que precisamos de nova definição? A resposta seria que a Definição era "exposição" do credo antigo, não credo novo.\n\nO Credo de Constantinopla (381) foi associado ao de 325 pela primeira vez em concílio ecumênico. A 2ª Carta de Cirilo a Nestório (430) foi lida como testemunho da ortodoxia de Cirilo — a carta insistia na unidade pessoal de Cristo e no título Theotokos, mas também reconhecia a distinção das naturezas, ponto que os monofisitas ignoravam.\n\nA Carta de Cirilo a João de Antioquia (433), com a fórmula "confessamos uma união de duas naturezas" (henōsis dyo physeōn), foi o golpe teológico mais eficaz contra Dioscoro: o próprio Cirilo aceitara a linguagem de "duas naturezas".\n\nO momento culminante foi a leitura do Tomo de Leão em latim pelo diácono Aécio, com tradução grega simultânea. A passagem-chave — "Agit enim utraque forma cum alterius communione quod proprium est" — provocou explosão de aclamações: "Pedro falou por Leão!", "Leão e Cirilo ensinam o mesmo!". Alguns bispos hesitaram (duas passagens pareciam flertar com nestorianismo) e pediram cinco dias. Após estudo, declararam-se convencidos.\n\nA 2ª sessão estabeleceu o "cânone documental" de Calcedônia: Niceia + Constantinopla + Cirilo + Tomo de Leão. A aclamação "Pedro falou por Leão!" tornou-se o slogan do concílio.',
    momentos: [
      'Leitura do Credo de Niceia — "Esta é a fé dos padres!"',
      'Cirilo aceita "duas naturezas" (Fórmula de União)',
      'Tomo de Leão lido em latim com tradução grega',
      '"Pedro falou por Leão!" — aclamação unânime',
      'Cinco dias de estudo para bispos hesitantes',
    ],
    fontes: ['ACO II,1: Acta Graeca 3', 'ACO II,4: Acta Latina 2', 'Price & Gaddis, vol. I, pp. 31–62', 'Leo, Ep. 28', 'Cyril, Ep. 2 e Ep. 39'],
    anterior: { numero: 1, slug: 'sessao-01', titulo: 'Abertura e Latrocínio' },
    proximo: { numero: 3, slug: 'sessao-03', titulo: 'Deposição de Dioscoro' },
  },

  {
    numero: 3, slug: 'sessao-03', data: '13 de outubro de 451',
    local: 'Igreja de Santa Eufêmia, Calcedônia',
    presidencia: 'Paschasinus de Lilibeu (legado papal)',
    presencas: 'Cerca de 130 bispos, incluindo 13 bispos egípcios (A VERIFICAR)',
    decisoes: [
      'Dioscoro foi formalmente deposto e privado de toda dignidade episcopal',
      'Sentenciado ao exílio em Gangra (Paflagônia)',
      'Flavian proclamado mártir, relíquias declaradas sagradas',
      'Os 13 bispos egípcios coagidos a assinar a sentença',
    ],
    relato: 'A terceira sessão foi o clímax do julgamento de Dioscoro. Três delegações foram enviadas ao seu alojamento para intimá-lo — ele recusou todas, alegando doença e que soldados imperiais o impediam de sair (ironia, dado que usara soldados contra Flavian). O concílio declarou que a ausência não impediria o julgamento: a terceira intimação ignorada justificava julgamento in absentia — o mesmo procedimento que Dioscoro usara contra Flavian.\n\nTestemunhos foram ouvidos: o diácono Isquírion narrou ser espancado por Dioscoro; o presbítero Atanásio relatou a destruição de igrejas no Egito; o bispo Sofrônio de Tella descreveu a coação no Latrocínio. O testemunho mais emocionante foi o do diácono de Flavian: "Eles o pisotearam como a um animal!".\n\nPaschasinus pronunciou a sentença em nome de Leão e Pedro: "O santíssimo arcebispo da grande e antiga Roma, Leão, por nosso intermédio e por este santo concílio, juntamente com o apóstolo Pedro, que é a rocha e o fundamento da Igreja católica, priva Dioscoro da dignidade episcopal e de toda função sacerdotal". A fórmula invocando Leão, Pedro e o concílio simultaneamente é um dos textos mais importantes da eclesiologia católica sobre primazia papal. Para os ortodoxos, a ênfase recai sobre "este santo concílio".\n\nOs 13 bispos egípcios foram coagidos a assinar sob ameaça de exílio. Flavian foi proclamado mártir.',
    momentos: [
      'Três intimações a Dioscoro — todas recusadas',
      'Julgamento in absentia — o mesmo procedimento usado contra Flavian',
      'Testemunho: "Eles o pisotearam como a um animal!"',
      'Sentença de Paschasinus invocando Leão, Pedro e o concílio',
    ],
    fontes: ['ACO II,1: Acta Graeca 2', 'ACO II,4: Acta Latina 3', 'Price & Gaddis, vol. I, pp. 63–87'],
    anterior: { numero: 2, slug: 'sessao-02', titulo: 'Documentos de fé' },
    proximo: { numero: 4, slug: 'sessao-04', titulo: '"Basta Niceia!"' },
  },

  {
    numero: 4, slug: 'sessao-04', data: '17 de outubro de 451',
    local: 'Igreja de Santa Eufêmia, Calcedônia',
    presidencia: 'Paschasinus de Lilibeu (legado papal)',
    presencas: 'Cerca de 130 bispos, comissários imperiais',
    decisoes: [
      'Decisão de elaborar nova definição de fé (Horos)',
      'Comissão de 22 bispos nomeada para redigir o rascunho',
      'Reunião no martyrium de Santa Eufêmia, prazo de cinco dias',
      'Os 13 bispos egípcios recusaram-se a participar sem novo patriarca',
    ],
    relato: 'A quarta sessão enfrentou a tarefa mais difícil: decidir se era necessária nova definição de fé. Os comissários imperiais perguntaram: "A fé exposta na Sessão 2 é suficiente, ou é necessária nova formulação?". A maioria respondeu que os documentos já lidos bastavam.\n\nO lema da resistência era "Basta Niceia!" (Ἀρκεῖ τὸ ἐν Νικαίᾳ). Este grito sintetizava a teologia apofática oriental: se o Credo de Niceia condena Arius, por que seria insuficiente para condenar Eutiques? A resposta dos legados e comissários era que o próprio Eutiques alegava seguir Niceia.\n\nOs 13 bispos egípcios recusaram-se a aceitar "duas naturezas" (dyo physeis), argumentando que Cirilo usara "uma natureza encarnada". Exigiam novo patriarca de Alexandria antes de qualquer votação.\n\nDiante do impasse, os comissários propuseram comissão restrita de 22 bispos — jogada política para contornar a resistência da assembleia plenária. Prazo de cinco dias para o primeiro rascunho. Esta dinâmica entre assembleia e comissão marcaria a Sessão 5.',
    momentos: [
      '"Basta Niceia!" — a resistência à nova definição',
      'Debate entre apofatismo oriental e formulação ocidental',
      'Resistência egípcia: "duas naturezas" = nestorianismo',
      'Criação da comissão de 22 bispos',
    ],
    fontes: ['ACO II,1: Acta Graeca 4', 'ACO II,4: Acta Latina 4', 'Price & Gaddis, vol. I, pp. 88–112'],
    anterior: { numero: 3, slug: 'sessao-03', titulo: 'Deposição de Dioscoro' },
    proximo: { numero: 5, slug: 'sessao-05', titulo: 'Definição de Calcedônia' },
  },

  {
    numero: 5, slug: 'sessao-05', data: '22 de outubro de 451',
    local: 'Martyrium de Santa Eufêmia e Igreja conciliar, Calcedônia',
    presidencia: 'Paschasinus de Lilibeu (legado papal)',
    presencas: 'Cerca de 130 bispos, comissários imperiais (presença decisiva)',
    decisoes: [
      'Primeiro rascunho ("ek dyo physeōn") rejeitado por eutiquianismo',
      'Segundo rascunho ("en dyo physesin") aprovado por aclamação',
      'Definição de Calcedônia (Horos) formalmente adotada',
      'Quatro advérbios fixados: sem confusão, sem mudança, sem divisão, sem separação',
      '13 bispos egípcios assinaram com relutância, sob protesto',
    ],
    relato: 'A quinta sessão foi o momento mais tenso e decisivo do concílio. A comissão de 22 bispos apresentou o primeiro rascunho com "ek dyo physeōn" ("a partir de duas naturezas"). Os legados papais e antioquenos rejeitaram imediatamente: "Ek dyo sugere que as naturezas se fundem depois — exatamente o erro de Eutiques!". A preposição era tudo: "ek" (a partir de) = monofisismo; "en" (em) = ortodoxia calcedoniana. Uma única letra grega separava a fé da heresia.\n\nOs comissários imperiais ameaçaram dissolver o concílio e transferi-lo para a Itália, onde Leão presidiria. Ameaça eficaz: bispos orientais sabiam que concílio italiano seria dominado por Roma.\n\nA comissão retornou com o segundo rascunho: "en dyo physesin" + quatro advérbios (asynchytōs, atreptōs, adiairetōs, achōristōs). Aclamação unânime: "Esta é a fé dos padres! Esta é a fé dos apóstolos!". Os 13 egípcios assinaram sob pressão.\n\nA aprovação é o evento central de Calcedônia. Os quatro advérbios — "cerca de quatro lados" (peribolos) — tornaram-se a norma cristológica para católicos, ortodoxos e protestantes.',
    momentos: [
      'Primeiro rascunho rejeitado: "ek dyo" = eutiquianismo',
      'A preposição é tudo: ek vs. en',
      'Ameaça imperial: transferir concílio para a Itália',
      'Aprovação do segundo rascunho com "en dyo physesin"',
      'Quatro advérbios: a "cerca" da ortodoxia',
    ],
    fontes: ['ACO II,1: Acta Graeca 5', 'ACO II,4: Acta Latina 5', 'Price & Gaddis, vol. I, pp. 113–145'],
    anterior: { numero: 4, slug: 'sessao-04', titulo: '"Basta Niceia!"' },
    proximo: { numero: 6, slug: 'sessao-06', titulo: 'Confirmação imperial' },
  },

  {
    numero: 6, slug: 'sessao-06', data: '25 de outubro de 451',
    local: 'Igreja de Santa Eufêmia, Calcedônia',
    presidencia: 'Imperador Marciano e Imperatriz Pulquéria (presença pessoal)',
    presencas: 'Todos os bispos presentes, comissários, Senado, guarda imperial',
    decisoes: [
      'Definição proclamada solenemente perante o imperador',
      'Marciano e Pulquéria assinaram com tinta de púrpura',
      'Éditos imperiais anunciados para impor a Definição',
      'Aclamação: "Marciano é o novo Constantino! Pulquéria é a nova Helena!"',
    ],
    relato: 'A sexta sessão foi a grande celebração do concílio. A igreja de Santa Eufêmia estava decorada; os bispos em vestes litúrgicas; os comissários em togas púrpuras. Marciano e Pulquéria entraram em procissão com a guarda imperial e o Senado. Os bispos aclamaram: "Marciano é o novo Constantino! Pulquéria é a nova Helena! Em vós, a fé brilha!".\n\nMarciano discursou em latim com tradução grega: convocara o concílio "para que a fé verdadeira fosse manifestada"; estava presente "para confirmar a fé, não para dominar os bispos"; exortava a "guardar a paz da Igreja".\n\nO arquidiácono Aécio leu a Definição em voz alta. A passagem central — "reconhecido em duas naturezas, sem confusão, sem mudança, sem divisão, sem separação" — provocou a aclamação mais longa: "Pedro falou por Leão! Cirilo e Leão ensinam o mesmo! Anátema a quem divide Cristo!".\n\nMarciano e Pulquéria assinaram com tinta púrpura — gesto sem precedentes. O imperador anunciou éditos para impor a Definição e punir rejeitadores. A sessão encerrou a fase dogmática.',
    momentos: [
      'Entrada solene de Marciano e Pulquéria',
      'Aclamação: "Marciano é o novo Constantino!"',
      'Discurso imperial em latim com tradução grega',
      'Assinatura com tinta púrpura — gesto sem precedentes',
    ],
    fontes: ['ACO II,1: Acta Graeca 6', 'ACO II,4: Acta Latina 6', 'Price & Gaddis, vol. I, pp. 146–168', 'Marciano, Edictum (452)'],
    anterior: { numero: 5, slug: 'sessao-05', titulo: 'Definição de Calcedônia' },
    proximo: { numero: 7, slug: 'sessao-07', titulo: 'Juvenal × Máximo (Pentáquia)' },
  },

  {
    numero: 7, slug: 'sessao-07', data: '26 de outubro de 451',
    local: 'Igreja de Santa Eufêmia, Calcedônia',
    presidencia: 'Comissários imperiais',
    presencas: 'Bispos presentes, comissários imperiais',
    decisoes: [
      'Jerusalém elevada a patriarcado independente',
      'Juvenal recebe jurisdição sobre as 3 províncias da Palestina',
      'Máximo de Antioquia cede Palestina em troca de Fenícia e Arábia',
      'Pentarquia formalizada na prática (5 patriarcados)',
    ],
    relato: 'A sétima sessão inaugurou a fase administrativa. O tema central foi a disputa entre Juvenal de Jerusalém e Máximo de Antioquia.\n\nJuvenal, bispo politicamente astuto que sobrevivera ao Latrocínio trocando de lado, reivindicou jurisdição sobre as três províncias palestinas (Palaestina Prima, Secunda e Tertia), que pertenciam a Antioquia. Seu argumento: Jerusalém, como sede da Igreja-mãe, deveria ter precedência honorífica e jurisdictional sobre a região onde Cristo vivera e ressuscitara.\n\nMáximo de Antioquia resistiu — Antioquia fora o terceiro patriarcado desde Niceia (325) e perder a Palestina significava redução de prestígio e renda. Porém, diante da pressão dos comissários imperiais e do apoio dos legados papais a Juvenal, Máximo cedeu. O acordo: Jerusalém receberia as três Palestinas; Antioquia manteria Fenícia e Arábia.\n\nA decisão formalizou na prática a Pentarquia — a estrutura de cinco patriarcados (Roma, Constantinopla, Alexandria, Antioquia, Jerusalém) que dominaria a eclesiologia oriental até hoje. Jerusalém tornou-se o quinto patriarcado, completando a hierarquia que Justiniano formalizaria no século VI.',
    momentos: [
      'Juvenal trocara de lado no Latrocínio — sobrevivente político',
      'Disputa Territorial: quem controla a terra de Cristo?',
      'Acordo: Palestina para Jerusalém, Fenícia e Arábia para Antioquia',
      'Pentarquia formalizada — estrutura eclesiástica milenar',
    ],
    fontes: ['ACO II,1: Acta Graeca 7', 'ACO II,4: Acta Latina 7', 'Price & Gaddis, vol. II, pp. 1–18'],
    anterior: { numero: 6, slug: 'sessao-06', titulo: 'Confirmação imperial' },
    proximo: { numero: 8, slug: 'sessao-08', titulo: 'Tiro × Berito' },
  },

  {
    numero: 8, slug: 'sessao-08', data: '26 de outubro de 451',
    local: 'Igreja de Santa Eufêmia, Calcedônia',
    presidencia: 'Comissários imperiais',
    presencas: 'Bispos presentes, comissários imperiais',
    decisoes: [
      'Reabilitação de bispos depostos no Latrocínio',
      'Análise do caso Fotio de Tiro vs. Eustáquio de Berito',
      'Discussão sobre ordenações irregulares durante o Latrocínio',
    ],
    relato: 'A oitava sessão, realizada no mesmo dia da sétima, dedicou-se a disputas jurisdicionais menores. O caso principal envolvia Fotio de Tiro e Eustáquio de Berito, cuja disputa pela jurisdição da Fenícia Refinaria arrastava-se havia anos.\n\nFotio de Tiro havia sido eleito bispo de Tiro e reivindicava jurisdição sobre Berito (atual Beirute), argumentando que Tiro fora sempre a sede metropolitana. Eustáquio, eleito bispo de Berito com apoio de Dióscoro, insistia que Berito era autônoma desde a reorganização do Latrocínio. A questão era delicada porque envolvia não só território, mas o legado do Latrocínio: rever as decisões de 449 significava restaurar a ordem anterior, mas também punir quem cooperara com Dióscoro.\n\nOs comissários imperiais, com apoio dos legados papais, decidiram que a jurisdição de Tiro prevalecia, mas que Berito teria autonomia litúrgica limitada. A sessão também tratou de casos de simonia e ordenações irregulares realizadas por bispos depostos no Latrocínio — clérigos que receberam ordens de mãos de bispos subsequently destituídos.',
    momentos: [
      'Mesmo dia da Sessão 7 — ritmo intenso de trabalho',
      'Caso Fotio × Eustáquio: jurdição sobre Fenícia',
      'Revisão das decisões do Latrocínio',
      'Casos de simonia e ordenações irregulares',
    ],
    fontes: ['ACO II,1: Acta Graeca 8', 'ACO II,4: Acta Latina 8', 'Price & Gaddis, vol. II, pp. 19–35'],
    anterior: { numero: 7, slug: 'sessao-07', titulo: 'Juvenal × Máximo (Pentáquia)' },
    proximo: { numero: 9, slug: 'sessao-09', titulo: 'Teodoreto de Ciro (I)' },
  },

  {
    numero: 9, slug: 'sessao-09', data: '27 de outubro de 451',
    local: 'Igreja de Santa Eufêmia, Calcedônia',
    presidencia: 'Comissários imperiais',
    presencas: 'Bispos presentes, comissários imperiais',
    decisoes: [
      'Abertura formal do caso Teodoreto de Ciro',
      'Leitura dos documentos acusatórios do Latrocínio',
      'Posicionamento dos legados papais sobre a reabilitação',
    ],
    relato: 'A nona sessão iniciou o dos casos mais delicados da fase administrativa: a reabilitação de Teodoreto de Ciro. Teodoreto fora um dos maiores teólogos da escola antioquena, deposto no Latrocínio de 449 por suposto "nestorianismo" — acusação que muitos consideravam injusta, dado que Teodoreto fora um dos primeiros a denunciar Nestório.\n\nA sessão abriu com a leitura dos documentos do Latrocínio que continham as acusações contra Teodoreto. Os textos revelavam que a deposição se baseara menos em suas posições teológicas do que em sua oposição política a Dióscoro e ao partido alexandrino. Os legados papais sinalizaram apoio à reabilitação, argumentando que a condenação fora injusta e canonicamente inválida.\n\nPorém, a questão era delicada: Teodoreto fora amigo pessoal de Nestório décadas antes e mantivera correspondência com ele. Embora rompesse publicamente com Nestório em 431, os opositores de sua reabilitação usariam esta associação para argumentar que ele era incorrigivelmente "nestoriano". A sessão foi interrompida sem decisão final, com a instrução de que Teodoreto apresentaria sua defesa formal na sessão seguinte.',
    momentos: [
      'Início do caso Teodoreto — teólogo antioqueno deposto',
      'Leitura dos documentos do Latrocínio contra Teodoreto',
      'Legados papais sinalizam apoio à reabilitação',
      'Interrupção sem decisão — defesa formal adiada',
    ],
    fontes: ['ACO II,1: Acta Graeca 9', 'ACO II,4: Acta Latina 9', 'Price & Gaddis, vol. II, pp. 36–55'],
    anterior: { numero: 8, slug: 'sessao-08', titulo: 'Tiro × Berito' },
    proximo: { numero: 10, slug: 'sessao-10', titulo: 'Ibas e Maris' },
  },

  {
    numero: 10, slug: 'sessao-10', data: '28 de outubro de 451',
    local: 'Igreja de Santa Eufêmia, Calcedônia',
    presidencia: 'Comissários imperiais',
    presencas: 'Bispos presentes, comissários imperiais',
    decisoes: [
      'Leitura da carta de Ibas de Edessa ao bispo Maris',
      'Análise das acusações de nestorianismo contra Ibas',
      'Posicionamento dos partidos sobre a reabilitação',
    ],
    relato: 'A décima sessão concentrou-se no caso de Ibas de Edessa, outro bispo oriental deposto no Latrocínio. Ibas fora acusado de nestorianismo com base em uma carta que supostamente escrevera ao bispo Maris da Pérsia, na qual minimizava a condenação de Nestório e criticava Cirilo de Alexandria.\n\nA sessão centrou-se na leitura e análise desta carta — um documento cuja autenticidade e interpretação seriam debatidas durante séculos. Os opositores de Ibas argumentavam que a carta provava sua simpatia pelo nestorianismo; seus defensores sustentavam que a carta fora interpolada ou mal interpretada.\n\nO caso de Ibas era particularmente significativo porque envolvia as relações entre a cristandade oriental e as igrejas persas (nestorianas). A reabilitação de Ibas poderia facilitar o diálogo com as igrejas do Leste; sua condenação definitiva poderia aprofundar o cisma. A sessão terminou sem decisão, com os debates sobre Teodoreto e Ibas entrelaçados.',
    momentos: [
      'Caso Ibas de Edessa — carta ao bispo Maris',
      'Debate sobre autenticidade e interpretação da carta',
      'Dimensão geopolítica: relações com igrejas persas',
      'Decisão adiada — casos Ibas e Teodoreto entrelaçados',
    ],
    fontes: ['ACO II,1: Acta Graeca 10', 'ACO II,4: Acta Latina 10', 'Price & Gaddis, vol. II, pp. 56–78'],
    anterior: { numero: 9, slug: 'sessao-09', titulo: 'Teodoreto de Ciro (I)' },
    proximo: { numero: 11, slug: 'sessao-11', titulo: 'Caso de Ibas (continuação)' },
  },

  {
    numero: 11, slug: 'sessao-11', data: '29 de outubro de 451',
    local: 'Igreja de Santa Eufêmia, Calcedônia',
    presidencia: 'Comissários imperiais',
    presencas: 'Bispos presentes, comissários imperiais',
    decisoes: [
      'Leitura de testemunhos adicionais sobre o caso de Ibas',
      'Análise de depoimentos de clérigos edessenos',
      'Continuação dos debates sobre reabilitação',
    ],
    relato: 'A décima primeira sessão continuou o caso de Ibas de Edessa com a leitura de testemunhos adicionais. Clérigos edessenos que acompanharam os eventos de 449 foram ouvidos, fornecendo detalhes sobre as circunstâncias da deposição de Ibas.\n\nOs testemunhos revelaram que a deposição de Ibas no Latrocínio fora realizada com os mesmos métodos de coação usados em outros casos: soldados na igreja, bispos forçados a assinar atas em branco, e ausência de defesa adequada. Alguns depoimentos sugeriam que as acusações contra Ibas foram fabricadas ou exageradas por rivais políticos em Edessa.\n\nA sessão também tratou de casos nominais — bispos individuais cuja conduta durante o Latrocínio era investigada. A expressão "casos nominais" (em latim: casus nominales) refere-se aos julgamentos em que os acusados eram nomeados individualmente, em contraste com as questões de princípio doutrinário ou jurisdicional.',
    momentos: [
      'Testemunhos de clérigos edessenos',
      'Métodos de coação do Latrocínio reaparecem',
      'Investigação de bispos individualmente — "casos nominais"',
    ],
    fontes: ['ACO II,1: Acta Graeca 11', 'ACO II,4: Acta Latina 11', 'Price & Gaddis, vol. II, pp. 79–95'],
    anterior: { numero: 10, slug: 'sessao-10', titulo: 'Ibas e Maris' },
    proximo: { numero: 12, slug: 'sessao-12', titulo: 'Reabilitação de Teodoreto' },
  },

  {
    numero: 12, slug: 'sessao-12', data: '29 de outubro de 451',
    local: 'Igreja de Santa Eufêmia, Calcedônia',
    presidencia: 'Comissários imperiais',
    presencas: 'Bispos presentes, comissários imperiais',
    decisoes: [
      'Teodoreto de Ciro anatematizou publicamente Nestório',
      'Teodoreto declarou: "Anátema a quem não diz que a Virgem é Theotokos!"',
      'Teodoreto foi reabilitado e restaurado à sua sede',
      'Reabilitação condicionada ao anátema público',
    ],
    relato: 'A décima segunda sessão foi decisiva para o caso Teodoreto de Ciro. O bispo deposto, após dias de debate e negociação, apresentou sua declaração formal de fé perante a assembleia.\n\nTeodoreto, que fora amigo pessoal de Nestório décadas antes e mantivera correspondência com ele, hesitou inicialmente em condenar explicitamente seu antigo amigo. Porém, diante da pressão dos comissários imperiais, dos legados papais e da maioria dos bispos, fez a declaração que selou sua reabilitação: "Anátema a Nestório e a quem não diz que a Santa Virgem é Theotokos!".\n\nA declaração foi recebida com aplausos pela assembleia. Os bispos reconheceram que Teodoreto, ao aceitar o título Theotokos e condenar Nestório, demonstrara sua ortodoxia. A reabilitação foi votada e aprovada, e Teodoreto foi restaurado à sua sede de Ciro.\n\nEsta reabilitação seria posteriormente contestada no II Concílio de Constantinopla (553), que condenaria os "Três Capítulos" — incluindo escritos de Teodoreto que continham críticas a Cirilo de Alexandria. A decisão de Calcedônia de reabilitar Teodoreto seria um dos pontos de discórdia entre Roma e Constantinopla no século VI.',
    momentos: [
      'Hesitação de Teodoreto: amizade com Nestório',
      'Declaração: "Anátema a Nestório e a quem não diz que a Virgem é Theotokos!"',
      'Reabilitação votada e aprovada',
      'Gérmen do futuro cisma dos "Três Capítulos" (553)',
    ],
    fontes: ['ACO II,1: Acta Graeca 12', 'ACO II,4: Acta Latina 12', 'Price & Gaddis, vol. II, pp. 96–115'],
    anterior: { numero: 11, slug: 'sessao-11', titulo: 'Caso de Ibas (continuação)' },
    proximo: { numero: 13, slug: 'sessao-13', titulo: 'Casos egípcios e sírios' },
  },

  {
    numero: 13, slug: 'sessao-13', data: '30 de outubro de 451',
    local: 'Igreja de Santa Eufêmia, Calcedônia',
    presidencia: 'Comissários imperiais',
    presencas: 'Bispos presentes, comissários imperiais',
    decisoes: [
      'Análise de casos de bispos egípcios e sírios depostos no Latrocínio',
      'Reabilitação de bispos que foram coagidos',
      'Julgamento de bispos que cooperaram com Dióscoro',
    ],
    relato: 'A décima terceira sessão tratou dos casos nominais de bispos egípcios e sírios. Estes bispos tinham sido depostos no Latrocínio — alguns por resistirem a Dióscoro, outros por terem cooperado com ele e subsequently terem caído em desgraça.\n\nA sessão revelou a complexidade da situação eclesiástica no Oriente: muitos bispos mudaram de lado durante e após o Latrocínio, adaptando suas posições à conjuntura política. Alguns depostos por Dióscoro em 449 foram reabilitados em 451; outros que cooperaram com Dióscoro foram agora depostos pelo concílio.\n\nOs comissários imperiais atuaram como juízes efetivos, aplicando tanto o direito canônico quanto o direito romano. A distinção entre "vítimas de coação" e "colaboradores voluntários" era frequentemente difícil de estabelecer, dado que muitos bispos assinaram documentos sob ameaça.\n\nA sessão também tratou de bispos sírios que haviam sido privados de suas sedes por motivos políticos, não teológicos. A reabilitação de muitos destes bispos foi condicionada à aceitação da Definição de Calcedônia.',
    momentos: [
      'Complexidade: bispos mudaram de lado durante e após o Latrocínio',
      'Distinção difícil entre "vítimas de coação" e "colaboradores voluntários"',
      'Comissários imperiais atuam como juízes civis e canônicos',
      'Reabilitações condicionadas à aceitação da Definição',
    ],
    fontes: ['ACO II,1: Acta Graeca 13', 'ACO II,4: Acta Latina 13', 'Price & Gaddis, vol. II, pp. 116–130'],
    anterior: { numero: 12, slug: 'sessao-12', titulo: 'Reabilitação de Teodoreto' },
    proximo: { numero: 14, slug: 'sessao-14', titulo: 'Encerramento fase nominal' },
  },

  {
    numero: 14, slug: 'sessao-14', data: '30 de outubro de 451',
    local: 'Igreja de Santa Eufêmia, Calcedônia',
    presidencia: 'Comissários imperiais',
    presencas: 'Bispos presentes, comissários imperiais',
    decisoes: [
      'Últimos casos nominais julgados',
      'Fase administrativa de julgamentos individuais encerrada',
      'Preparação para a promulgação dos cânones disciplinares',
    ],
    relato: 'A décima quarta sessão encerrou a fase dos casos nominais. Os últimos bispos cuja conduta era investigada foram julgados e suas sentenças proferidas.\n\nA sessão teve caráter de conclusão: os comissários imperiais anunciaram que a fase de julgamentos individuais estava encerrada e que as sessões seguintes seriam dedicadas à promulgação dos cânones disciplinares — as regras práticas de governo eclesiástico que o concílio elaborara paralelamente aos debates doutrinários.\n\nOs cânones, elaborados por uma comissão de bispos ao longo das sessões administrativas, trariam reformas significativas à disciplina eclesiástica: restrições à simonia (compra de cargos), regulamentação de ordenações, controle da conduta de monges e clérigos, e normas sobre transferências episcopais. A promulgação formal destes cânones nas Sessões 15 e 16 seria um dos legados mais duradouros de Calcedônia — mais duradouro, para muitos historiadores, do que a própria Definição cristológica.\n\nA sessão também serviu para consolidar os precedentes estabelecidos nas sessões anteriores: a reversão das deposições do Latrocínio, a reabilitação de bispos coagidos, e a condenação dos que cooperaram voluntariamente com Dióscoro.',
    momentos: [
      'Encerramento dos julgamentos individuais',
      'Preparação para cânones disciplinares',
      'Consolidação dos precedentes do Latrocínio',
    ],
    fontes: ['ACO II,1: Acta Graeca 14', 'ACO II,4: Acta Latina 14', 'Price & Gaddis, vol. II, pp. 131–140'],
    anterior: { numero: 13, slug: 'sessao-13', titulo: 'Casos egípcios e sírios' },
    proximo: { numero: 15, slug: 'sessao-15', titulo: 'Promulgação dos 27 cânones' },
  },

  {
    numero: 15, slug: 'sessao-15', data: '31 de outubro de 451',
    local: 'Igreja de Santa Eufêmia, Calcedônia',
    presidencia: 'Comissários imperiais',
    presencas: 'Bispos presentes, comissários imperiais',
    documentosLidos: ['Os 27 cânones disciplinares (texto integral)'],
    decisoes: [
      'Cânon 1: Confirmação dos Credos de Niceia (325) e Constantinopla (381)',
      'Cânon 2: Proibição de bispos de ordenar fora de sua jurisdição',
      'Cânon 3: Proibição de monges e clérigos de se intrometerem em assuntos seculares',
      'Cânon 4: Regulamentação de sínodos provinciais semestrais',
      'Cânon 5: Condenação da simonia e das ordenações irregulares',
      'Cânones 6–27: Regras sobre disciplina clerical, monges, viúvas, catecúmenos, etc.',
    ],
    relato: 'A décima quinta sessão foi dedicada à leitura e aprovação dos 27 cânones disciplinares. Estes cânones não eram doutrinários — não definiam a fé, mas organizavam a vida da Igreja. Seu impacto prático seria imenso.\n\nO Cânon 1 foi o mais importante: confirmou todos os cânones dos concílios anteriores (Niceia, Constantinopla, Éfeso) e estabeleceu que nenhuma alteração poderia ser feita fora de concílio ecumênico. O Cânon 2 proibiu bispos de ordenar clérigos fora de sua jurisdição — combater a prática comum de bispos itinerantes que ordenavam onde queriam. O Cânon 3 proibiu monges e clérigos de se intrometerem em assuntos seculares ou de fundarem mosteiros sem autorização do bispo.\n\nO Cânon 4 regulamentou os sínodos provinciais semestrais — os bispos deveriam reunir-se duas vezes por ano para julgar disputas e manter a disciplina. O Cânon 5 condenou veementemente a simonia (compra de cargos eclesiásticos) e as ordenações irregulares (realizadas fora do tempo litúrgico ou sem autorização).\n\nOs cânones 6 a 27 tratavam de uma variedade de questões práticas: direitos de viúvas e órfãos, conduta de catecúmenos,transferências de bispos, julgamento de clérigos, e relações entre mosteiros e bispos diocesanos. Muitos destes cânones são a primeira fonte legislativa da Igreja organizada.',
    momentos: [
      'Leitura dos 27 cânones — ritmo solene e formal',
      'Cânon 1: "nada se altere fora de concílio ecumênico"',
      'Cânon 5: condenação veemente da simonia',
      'Impacto prático mais duradouro que a Definição cristológica',
    ],
    fontes: ['ACO II,1: Acta Graeca 15', 'ACO II,4: Acta Latina 15', 'Price & Gaddis, vol. II, pp. 141–165'],
    anterior: { numero: 14, slug: 'sessao-14', titulo: 'Encerramento fase nominal' },
    proximo: { numero: 16, slug: 'sessao-16', titulo: 'Cânon 28 e encerramento' },
  },

  {
    numero: 16, slug: 'sessao-16', data: '1 de novembro de 451',
    local: 'Igreja de Santa Eufêmia, Calcedônia',
    presidencia: 'Comissários imperiais',
    presencas: 'Bispos presentes, comissários imperiais, legados papais (que abandonariam a sessão)',
    documentosLidos: ['Cânon 28 (texto integral)'],
    decisoes: [
      'Cânon 28 aprovado pela maioria oriental: Constantinopla = "privilégios iguais" a Roma',
      'Base: Constantinopla é "Nova Roma" (Cânon 3 de Constantinopla I, 381)',
      'Legados papais protestaram formalmente contra o Cânon 28',
      'Legados abandonaram a sessão em protesto',
      'Papa Leão I anularia o Cânon 28 em Ep. 105 (452)',
      'Encerramento solene do Concílio de Calcedônia',
    ],
    relato: 'A décima sexta e última sessão do Concílio de Calcedônia foi marcada pelo episódio mais controverso da fase administrativa: a aprovação e o protesto contra o Cânon 28.\n\nO Cânon 28 foi proposto pela delegação de Constantinopla e amplamente apoiado pelos bispos orientais. Seu argumento: assim como Roma derivava sua primazia de ter sido a sede de Pedro, Constantinopla — como "Nova Roma" — deveria ter privilégios iguais (isa presbeia). O Cânon 3 de Constantinopla I (381) já concedera a Constantinopla "precedência de honra" após Roma; o Cânon 28 expandia isto para incluir jurisdição prática sobre as províncias vizinhas e sobre as "dioceses" que outrora pertenciam à Ásia e à Trácia.\n\nA votação foi esmagadora: a maioria oriental aprovou o Cânon. Porém, os legados papais — Paschasinus e Lucêncio — protestaram veementemente. Seu argumento era simples: a primazia de Roma derivava de Pedro (e, portanto, de Cristo), não de decisões políticas ou conciliares. Nenhum concílio poderia igualar Constantinopla a Roma, porque a primazia romana era de direito divino, não de direito humano.\n\nOs legados formularam sua protestação por escrito e, sem conseguir阻止 a aprovação, abandonaram a sessão. Este ato de protesto formal é uma das fontes mais citadas do debate sobre primazia entre Roma e Constantinopla.\n\nO Papa Leão I, ao receber as atas, anulou o Cânon 28 em sua carta de ratificação (Epistula 105, 452), declarando que "as honras de Roma foram concedidas por Pedro, não por Nicéia nem por Calcedônia".\n\nApesar da anulação papal, o Cânon 28 permaneceu como norma na Igreja Oriental. Os ortodoxos o consideram legítimo; os católicos o reconhecem como historicamente significado, mas juridicamente nulo. O impasse sobre o Cânon 28 é um dos pontos de discórdia mais duradouros entre as duas Igrejas.\n\nA sessão encerrou-se com a leitura das subscrições dos bispos e uma oração de ação de graças. O Concílio de Calcedônia havia completado seus 25 dias de trabalhos: 6 sessões solenes (fé e dogma) e 10 sessões administrativas (governo e disciplina).',
    momentos: [
      'Leitura do Cânon 28: Constantinopla = "Nova Roma"',
      'Votação esmagadora pela maioria oriental',
      'Protesto formal dos legados papais',
      'Abandono da sessão pelos legados em protesto',
      'Anulação do Cânon 28 pelo Papa Leão (Ep. 105, 452)',
      'Encerramento solene do Concílio',
    ],
    fontes: ['ACO II,1: Acta Graeca 16', 'ACO II,4: Acta Latina 16', 'Price & Gaddis, vol. II, pp. 166–195', 'Leo, Ep. 105 (anulação do Cânon 28)'],
    anterior: { numero: 15, slug: 'sessao-15', titulo: 'Promulgação dos 27 cânones' },
    proximo: undefined,
  },
];
