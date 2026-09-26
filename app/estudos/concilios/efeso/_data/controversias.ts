// ============================================
// CONCÍLIO DE ÉFESO (431 d.C.)
// Controvérsias e Tensões Internas do Concílio
// ============================================

interface Controversia {
  id: number
  titulo: string
  resumo: string
  detalhes: string
  partesEnvolvidas: string[]
  resultado: string
  consequenciaDeLongoPrazo: string
  fontes: string[]
}

export const resumoControversias =
  'O Concílio de Éfeso foi um dos eventos mais caóticos e controversos da história da Igreja. Longe de ser uma assembleia pacífica de bispos em busca da verdade, Éfeso foi um campo de batalha teológico, político e pessoal, marcado por aberturas prematuras, contra-concílios, prisões, violência popular, subornos e intervenções imperiais. As tensões internas do concílio não foram meros acidentes de percurso, mas reflexos de divisões profundas na cristandade do século V: Alexandria vs Antioquia, Oriente vs Ocidente, Igreja vs Estado, teologia acadêmica vs piedade popular. Compreender estas controvérsias é essencial para entender por que Éfeso, apesar de ter definido um dos dogmas mais centrais da fé cristã (Theotokos), deixou feridas que levariam décadas para cicatrizar e que, em alguns casos, permanecem abertas até hoje.'

export const controversias: Controversia[] = [
  // =============================================
  // 1. A ABERTURA PREMATURA
  // =============================================
  {
    id: 1,
    titulo: 'A Abertura Prematura e a Questão da Legitimidade Conciliar',
    resumo:
      'Cirilo de Alexandria abriu a Sessão I do concílio em 22 de junho de 431 sem esperar a chegada de João de Antioquia e seus ~30 bispos sírios, violando as instruções imperiais de Teodósio II e os protestos de 68 bispos já presentes em Éfeso.',
    detalhes:
      'A questão da abertura prematura é a controvérsia mais fundamental de todo o concílio, pois dela dependem todas as demais. As instruções imperiais (sacra de Teodósio II) eram inequívocas: "nenhuma decisão deverá ser tomada antes que todos os bispos convocados estejam presentes." O conde Candidiano, representante imperial, leu esta sacra em voz alta na Sessão I e protestou formalmente contra a abertura. 68 bispos (a vanguarda de João de Antioquia, liderados por Teodoreto de Ciro e Alexandre de Hierápolis) assinaram um protesto escrito e retiraram-se da igreja. Cirilo ignorou ambos os protestos e declarou a sessão aberta com os ~160–198 bispos presentes. Sua justificativa era tripla: (1) a maioria dos bispos já estava presente, e a fé não podia esperar indefinidamente; (2) João de Antioquia estava deliberadamente procrastinando para dar tempo a Nestório de negociar; (3) a urgência da heresia exigia ação imediata. Os críticos de Cirilo, porém, argumentavam que a abertura era ilegal e que a condenação de Nestório in absentia (sem que o acusado pudesse defender-se) violava os princípios mais elementares de justiça eclesiástica e romana. A questão jurídica era clara: um concílio pode ser válido se viola as ordens do imperador que o convocou? Um julgamento pode ser válido se o acusado não está presente? A resposta dos cirilianos era "sim" (a maioria numérica e a urgência da fé justificam a abertura). A resposta dos joanitas era "não" (a violação das ordens imperiais e dos direitos do acusado invalida todo o procedimento).',
    partesEnvolvidas: [
      'Cirilo de Alexandria e o partido ciriliano (~160–198 bispos)',
      'Conde Candidiano (representante imperial de Teodósio II)',
      '68 bispos dissidentes (vanguarda de João de Antioquia)',
      'João de Antioquia (ausente, a 4 dias de distância)',
      'Nestório (barricado em sua residência, recusando comparecer)',
    ],
    resultado:
      'Cirilo venceu a disputa imediata: a Sessão I foi realizada, Nestório foi condenado, e a maioria dos bispos assinou a sentença. Porém, a legitimidade da Sessão I permaneceu contestada por João de Antioquia (no contra-concílio) e por Teodósio II (que inicialmente declarou válidas ambas as deposições). A chegada dos legados papais (10 de julho) e sua ratificação da Sessão I resolveram a questão canônica a favor de Cirilo, mas a acusação de "golpe de força" persistiu na tradição antioquena e é citada até hoje por historiadores críticos.',
    consequenciaDeLongoPrazo:
      'A abertura prematura de Éfeso estabeleceu um precedente perigoso na história dos concílios: o de que a maioria numérica pode validar uma decisão conciliar mesmo contra as ordens do imperador convocador e contra os direitos do acusado. Este precedente seria invocado (e contestado) em concílios subsequentes, especialmente no Latrocínio de Éfeso (449) e em Calcedônia (451). A questão de fundo — quem define a legitimidade de um concílio: o imperador, o Papa, a maioria dos bispos, ou a "recepção" posterior pela Igreja? — permanece debatida na eclesiologia até hoje.',
    fontes: [
      'ACO I.1.1 (Gesta, Sessão I)',
      'Sócrates, HE VII.34',
      'Evágrio, HE I.4',
      'McGuckin, St. Cyril of Alexandria, pp. 115–130',
      'Wessel, Cyril of Alexandria and the Nestorian Controversy, pp. 140–165',
    ],
  },

  // =============================================
  // 2. O CONTRA-CONCÍLIO
  // =============================================
  {
    id: 2,
    titulo: 'O Contra-Concílio de João de Antioquia e o Cisma Interno',
    resumo:
      'João de Antioquia, ao chegar atrasado a Éfeso (26 de junho) e descobrir que Nestório já havia sido condenado, realizou um contra-concílio com ~30 bispos sírios e o conde Candidiano, depondo Cirilo e Memnon por "apolinarismo" e "violação dos cânones".',
    detalhes:
      'O contra-concílio de João de Antioquia é um dos episódios mais extraordinários e mais perturbadores da história dos concílios ecumênicos. Pela primeira (e praticamente única) vez na história, dois concílios rivais funcionaram simultaneamente na mesma cidade, cada um alegando ser o verdadeiro concílio ecumênico, cada um depondo o líder do outro, e cada um reivindicando a autoridade do imperador e do Espírito Santo. O contra-concílio de João (26–27 de junho) foi realizado em uma casa particular de Éfeso (já que Memnon havia fechado a Igreja de Santa Maria aos orientais) e contou com a presença de ~30 bispos sírios e do conde Candidiano. A base teológica da deposição de Cirilo eram os 12 Anátemas, que os antioquenos consideravam apolinaristas (a "confusão" das duas naturezas em uma "única natureza encarnada"). A base jurídica era a violação das ordens imperiais e dos cânones eclesiásticos por Cirilo na Sessão I. A sentença do contra-concílio foi: "Cirilo de Alexandria e Memnon de Éfeso estão depostos de suas sés episcopais por apolinarismo, violação dos cânones e desobediência às ordens imperiais." Candidiano endossou a sentença e enviou um relatório a Teodósio II, que inicialmente declarou válidas ambas as deposições (de Nestório por Cirilo; de Cirilo por João), criando a situação absurda de três patriarcas depostos simultaneamente.',
    partesEnvolvidas: [
      'João de Antioquia e ~30 bispos sírios (partido joanita)',
      'Conde Candidiano (representante imperial)',
      'Teodoreto de Ciro e André de Samósata (teólogos antioquenos)',
      'Cirilo de Alexandria e Memnon de Éfeso (depostos pelo contra-concílio)',
      'Teodósio II (que inicialmente reconheceu o contra-concílio)',
    ],
    resultado:
      'O contra-concílio de João foi tecnicamente ilegítimo (não tinha a maioria dos bispos, nem a presença dos legados papais, nem a aprovação da maioria dos bispos presentes em Éfeso), mas politicamente significativo. A deposição de Cirilo e Memnon por João criou um impasse que durou meses e quase anulou a condenação de Nestório. O impasse só foi resolvido quando a chegada dos legados papais (10 de julho) e a pressão de Pulquéria (outubro) levaram Teodósio II a escolher definitivamente o partido ciriliano e a anular o contra-concílio.',
    consequenciaDeLongoPrazo:
      'O contra-concílio de João gerou um cisma de dois anos (431–433) entre Alexandria e Antioquia, as duas maiores sés do Oriente. Este cisma foi resolvido pela Fórmula de União (433), mas deixou cicatrizes profundas na relação entre as tradições alexandrina e antioquena que ressurgiriam na década seguinte com o monofisismo de Dióscoro e o Latrocínio de Éfeso (449). A lição de Éfeso — de que um concílio pode gerar um contra-concílio, e de que a "maioria" nem sempre tem razão — seria lembrada nos séculos seguintes, especialmente durante a controvérsia iconoclasta (séc. VIII) e o Grande Cisma (1054).',
    fontes: [
      'ACO I.1.3 (Gesta do contra-concílio)',
      'Sócrates, HE VII.34',
      'Evágrio, HE I.5',
      'McGuckin, op. cit., pp. 130–150',
    ],
  },

  // =============================================
  // 3. OS 12 ANÁTEMAS
  // =============================================
  {
    id: 3,
    titulo: 'Os 12 Anátemas de Cirilo: Ortodoxia ou Apolinarismo?',
    resumo:
      'Os 12 Anátemas de Cirilo, anexados à sua 3ª Carta a Nestório (430), foram o documento mais controverso de toda a controvérsia. Aprovados em Éfeso como norma de ortodoxia, foram acusados pelos antioquenos de conter heresia apolinarista (a "confusão" das duas naturezas de Cristo).',
    detalhes:
      'Os 12 Anátemas são, ao mesmo tempo, o documento teológico mais brilhante e mais perigoso da controvérsia nestoriana. Redigidos por Cirilo em 430 como apêndice à sua 3ª Carta a Nestório, os Anátemas resumem a cristologia alexandrina em 12 fórmulas cortantes e deliberadamente provocativas. O Anátema 1 condena quem nega Theotokos. O Anátema 2 condena quem não confessa a "união hipostática" do Verbo com a carne. O Anátema 3 condena quem "divide as hipóstases" após a união. O Anátema 4 condena quem atribui as expressões dos Evangelhos a "duas pessoas" distintas. O Anátema 5 condena quem chama Cristo de "homem portador de Deus" (theophoros). O Anátema 8 condena quem diz que o homem Jesus deve ser "co-adorado" com o Verbo (implicando dois sujeitos de adoração). O Anátema 12 condena quem não confessa que "o Verbo de Deus sofreu na carne, foi crucificado na carne, provou a morte na carne". A linguagem dos Anátemas era deliberadamente extrema: Cirilo usava expressões como "união física" (henosis physike), "uma natureza encarnada" (mia physis sesarkomene), e "o Verbo sofreu" (ho Logos epathen) que, para os antioquenos, soavam como apolinarismo puro — a heresia que negava a alma humana de Cristo e confundia as duas naturezas em uma mistura indiferenciada. Teodoreto de Ciro e André de Samósata escreveram refutações detalhadas, demonstrando que cada Anátema podia ser interpretado de forma ortodoxa (se lido com boa vontade) ou herética (se lido literalmente). A questão central era: os Anátemas ensinavam que as duas naturezas de Cristo se "misturaram" (krasis) em uma terceira natureza (monofisismo/apolinarismo), ou que as duas naturezas permaneceram distintas mas unidas em uma única pessoa (ortodoxia)? Cirilo insistia na segunda interpretação; os antioquenos temiam a primeira.',
    partesEnvolvidas: [
      'Cirilo de Alexandria (autor dos Anátemas)',
      'Teodoreto de Ciro (principal refutador antioqueno)',
      'André de Samósata (refutador antioqueno)',
      'João de Antioquia (que considerava os Anátemas apolinaristas)',
      'Os legados papais (que ratificaram os Anátemas sem reservas)',
    ],
    resultado:
      'Os 12 Anátemas foram lidos e aprovados na Sessão I de Éfeso como parte da 3ª Carta de Cirilo a Nestório, e sua autoridade dogmática foi confirmada pelos legados papais na Sessão II. Porém, a controvérsia sobre sua interpretação persistiu: os antioquenos aceitaram a condenação de Nestório, mas não a linguagem dos Anátemas. A Fórmula de União (433) foi, em grande parte, uma "leitura moderada" dos Anátemas que aceitava a linguagem antioquena das "duas naturezas" sem abandonar a Theotokos e a unidade hipostática. O II Concílio de Constantinopla (553) confirmou definitivamente os 12 Anátemas como dogmáticos, encerrando a controvérsia do ponto de vista ortodoxo.',
    consequenciaDeLongoPrazo:
      'A controvérsia dos 12 Anátemas é a raiz de todas as disputas cristológicas subsequentes. A tensão entre a linguagem alexandrina ("uma natureza encarnada", "união física") e a linguagem antioquena ("duas naturezas", "distinção sem separação") não foi plenamente resolvida em Éfeso, nem na Fórmula de União (433), nem mesmo em Calcedônia (451). As Igrejas Ortodoxas Orientais (copta, siríaca, armênia, etíope) aceitam Éfeso e os 12 Anátemas, mas rejeitam Calcedônia por considerá-la uma concessão ao nestorianismo. As Igrejas Calcedonianas (católica, ortodoxa) aceitam ambos. A disputa terminológica que começou com os 12 Anátemas em 430 continua, em certo sentido, até hoje nos diálogos ecumênicos entre as famílias de igrejas.',
    fontes: [
      'Cirilo, Ep. III ad Nestorium cum XII Anathematismis (PG 77, 105–122)',
      'Teodoreto, Refutatio XII Anathematismorum (PG 76, 393–452)',
      'André de Samósata, Refutatio (frag. in ACO I.1.6)',
      'Grillmeier, Christ in Christian Tradition I, pp. 483–495',
      'McGuckin, op. cit., pp. 80–100',
    ],
  },

  // =============================================
  // 4. O PAPEL DE CANDIDIANO
  // =============================================
  {
    id: 4,
    titulo: 'O Conde Candidiano e a Interferência Imperial nos Trabalhos Conciliares',
    resumo:
      'O conde Candidiano, representante imperial de Teodósio II, tentou impedir a abertura prematura da Sessão I, foi ignorado por Cirilo, e posteriormente aliou-se ao contra-concílio de João de Antioquia, usando tropas imperiais para cercar a Igreja de Santa Maria.',
    detalhes:
      'O papel do conde Candidiano em Éfeso é um caso de estudo clássico dos limites do poder imperial sobre a Igreja. Candidiano chegou a Éfeso antes da abertura do concílio com instruções claras de Teodósio II: manter a ordem, impedir discussões alheias à fé, e garantir que todos os bispos estivessem presentes antes de qualquer decisão. Na Sessão I (22 de junho), Candidiano leu a sacra imperial em voz alta e ordenou que os bispos esperassem a chegada de João de Antioquia. Cirilo ignorou a ordem e abriu a sessão. Candidiano protestou, saiu da igreja e cercou o edifício com seus soldados, tentando impedir que os bispos saíssem ou que novos bispos entrassem. Nos dias seguintes, Candidiano aliou-se ao partido de João de Antioquia (que também considerava a Sessão I ilegal) e participou do contra-concílio (26–27 de junho), ajudando a depor Cirilo e Memnon. Candidiano também usou suas tropas para intimidar os bispos cirilianos, cortando o fornecimento de água e alimentos à Igreja de Santa Maria e impedindo que os bispos egípcios se comunicassem com Cirilo (que estava brevemente preso). Os cirilianos acusaram Candidiano de parcialidade e de usar a força militar para coagir o concílio — uma acusação que tinha fundamento, dado que Candidiano havia claramente tomado partido contra Cirilo.',
    partesEnvolvidas: [
      'Conde Candidiano (representante imperial)',
      'Teodósio II (que nomeou Candidiano e lhe deu as instruções)',
      'Cirilo de Alexandria (que ignorou as ordens de Candidiano)',
      'João de Antioquia (que se aliou a Candidiano no contra-concílio)',
      'Os bispos cirilianos (que acusaram Candidiano de parcialidade)',
    ],
    resultado:
      'Candidiano fracassou em sua missão de manter a ordem e garantir um concílio pacífico. Sua tentativa de impedir a Sessão I foi ignorada; sua aliança com João de Antioquia no contra-concílio foi anulada pela chegada dos legados papais; e seu uso de tropas para intimidar os bispos cirilianos gerou uma reação popular furiosa. Teodósio II, percebendo que Candidiano havia perdido o controle da situação, eventualmente o substituiu e enviou um novo representante (o conde João) para negociar o desfecho do concílio.',
    consequenciaDeLongoPrazo:
      'O fracasso de Candidiano em Éfeso demonstrou os limites do poder imperial sobre os concílios ecumênicos. O imperador podia convocar, financiar e proteger um concílio, mas não podia controlar suas decisões uma vez que os bispos estavam reunidos. Esta lição seria aprendida (e aplicada com mais sutileza) em Calcedônia (451), onde o imperador Marciano e a imperatriz Pulquéria exerceram um controle mais eficaz sobre os trabalhos conciliares, evitando a confrontação direta com os bispos e usando a diplomacia em vez da força.',
    fontes: [
      'ACO I.1.1 (Gesta, Sessão I: protesto de Candidiano)',
      'ACO I.1.3 (Gesta do contra-concílio: papel de Candidiano)',
      'Sócrates, HE VII.34',
      'Wessel, op. cit., pp. 145–160',
    ],
  },

  // =============================================
  // 5. A QUESTÃO DA PRIMAZIA
  // =============================================
  {
    id: 5,
    titulo: 'A Disputa de Primazia: Alexandria vs Constantinopla vs Antioquia vs Roma',
    resumo:
      'Por trás da controvérsia teológica sobre Theotokos havia uma luta de poder entre as quatro grandes sés da cristandade: Alexandria (Cirilo), Constantinopla (Nestório), Antioquia (João) e Roma (Celestino I). A condenação de Nestório foi, em parte, uma reafirmação da hegemonia alexandrina no Oriente e da primazia romana sobre toda a cristandade.',
    detalhes:
      'A controvérsia nestoriana não pode ser compreendida plenamente sem considerar a dimensão jurisdicional e política do conflito. No século V, a hierarquia das sés episcopais era um campo de batalha tão feroz quanto a teologia. Roma reivindicava a primazia universal com base na sucessão de Pedro (Mt 16,18). Alexandria reivindicava a hegemonia no Oriente com base na tradição de Atanásio e na riqueza de sua sé. Antioquia reivindicava a primazia na Síria e na Mesopotâmia com base na tradição de Pedro (que, segundo a tradição, havia sido bispo de Antioquia antes de ir a Roma). Constantinopla reivindicava a "primazia de honra após Roma" com base no Cânon 3 de Constantinopla I (381), que lhe concedera este privilégio por ser a "Nova Roma". A condenação de Nestório (Constantinopla) por Cirilo (Alexandria), com a ratificação de Celestino (Roma), foi uma reconfiguração dramática do equilíbrio de poder no Oriente: Alexandria reafirmou sua hegemonia, Constantinopla foi humilhada, Antioquia foi marginalizada (pelo atraso de João), e Roma consolidou sua posição como árbitro final da fé. A declaração de Filipe na Sessão II ("Pedro vive e julga em seus sucessores") foi a expressão mais explícita desta nova configuração de poder.',
    partesEnvolvidas: [
      'Cirilo de Alexandria (hegemonia oriental)',
      'Nestório de Constantinopla (primazia da "Nova Roma")',
      'João de Antioquia (primazia siríaca)',
      'Papa Celestino I e seus legados (primazia romana universal)',
      'Juvenal de Jerusalém (buscava elevar Jerusalém a patriarcado)',
    ],
    resultado:
      'Alexandria saiu como a grande vencedora de Éfeso: Cirilo depôs o patriarca de Constantinopla, impôs sua teologia como norma de fé, e consolidou a hegemonia alexandrina no Oriente. Roma também saiu fortalecida: a ratificação dos legados papais e a declaração de Filipe sobre a primazia de Pedro estabeleceram um precedente de intervenção papal nos assuntos do Oriente. Constantinopla foi humilhada: seu patriarca foi deposto, e a sé da "Nova Roma" ficou vaga até a nomeação de Maximiano (431) e depois de Proclo (434). Antioquia foi marginalizada: o atraso de João e o contra-concílio fracassado enfraqueceram a posição da sé antioquena.',
    consequenciaDeLongoPrazo:
      'A reconfiguração de poder em Éfeso teria consequências de longo prazo imensas. A hegemonia alexandrina seria efêmera: em Calcedônia (451), Constantinopla recuperaria sua posição com o Cânon 28 (primazia de honra após Roma), e Alexandria seria enfraquecida pela condenação de Dióscoro. A primazia romana, afirmada em Éfeso, seria contestada pelo Oriente nos séculos seguintes, culminando no Grande Cisma de 1054. A marginalização de Antioquia contribuiria para o declínio da tradição teológica antioquena e para a ascensão do monofisismo na Síria e no Egito. A ambição de Juvenal de Jerusalém seria parcialmente realizada em Calcedônia (451), quando Jerusalém foi elevada a patriarcado.',
    fontes: [
      'ACO I.1.2 (Sessão II: declaração de Filipe)',
      'Sócrates, HE VII.34–35',
      'Grillmeier, op. cit., pp. 500–510',
      'Holum, Theodosian Empresses, pp. 148–165',
    ],
  },

  // =============================================
  // 6. A VIOLÊNCIA POPULAR
  // =============================================
  {
    id: 6,
    titulo: 'A Violência Popular e a Coação da Multidão de Éfeso',
    resumo:
      'A população de Éfeso, fanáticamente devota da Theotokos, cercou a Igreja de Santa Maria durante a Sessão I com tochas e orações, e explodiu em júbilo ao ouvir a condenação de Nestório. Memnon, o bispo local, mobilizou a multidão e fechou as igrejas aos nestorianos, criando um clima de coerção que os orientais denunciaram como intimidação.',
    detalhes:
      'A violência popular em Éfeso é um dos aspectos mais perturbadores do concílio e um dos mais debatidos pelos historiadores. A população de Éfeso era fanáticamente devota da Theotokos: a cidade reivindicava a tradição de que a Virgem Maria havia vivido ali seus últimos anos sob a proteção do apóstolo João, e a Igreja de Santa Maria (onde o concílio se reuniu) era o centro deste culto. Quando Nestório chegou a Éfeso para o concílio, a população local o recebeu com hostilidade aberta: Memnon fechou as igrejas a Nestório e a seus partidários, impedindo-os de celebrar a liturgia; a multidão vaiava Nestório nas ruas; e os monges locais (que Cirilo havia mobilizado) patrulhavam a cidade em bandos, intimidando os bispos nestorianos. Durante a Sessão I (22 de junho), a multidão cercou a Igreja de Santa Maria do lado de fora, passando a noite inteira em oração com tochas acesas e cânticos à Theotokos. Quando a sentença de deposição de Nestório foi anunciada, a multidão explodiu em júbilo e acompanhou os bispos de volta às suas hospedagens em uma procissão triunfal com tochas e incenso. Os bispos joanitas e nestorianos denunciaram esta violência como coerção ilegítima: argumentaram que a multidão havia sido deliberadamente mobilizada por Memnon e Cirilo para intimidar os bispos dissidentes e criar um clima de terror que impossibilitava a deliberação livre. Teodoreto de Ciro escreveu que "os bispos que ousavam defender Nestório eram ameaçados de linchamento pela turba", e que "o concílio não foi uma assembleia de bispos, mas um tribunal da multidão".',
    partesEnvolvidas: [
      'Memnon de Éfeso (que mobilizou a multidão e fechou as igrejas)',
      'Cirilo de Alexandria (que se beneficiou da pressão popular)',
      'A população de Éfeso (devotos da Theotokos)',
      'Os monges egípcios e locais (mobilizados por Cirilo)',
      'Os bispos nestorianos e joanitas (vítimas da intimidação)',
      'Conde Candidiano (que tentou, sem sucesso, controlar a multidão)',
    ],
    resultado:
      'A pressão popular foi um fator decisivo na vitória de Cirilo em Éfeso. A multidão garantiu que os bispos dissidentes não pudessem se reunir livremente, que Nestório permanecesse isolado em sua residência, e que o clima do concílio fosse favorável à condenação. Porém, o uso da violência popular como instrumento de pressão política comprometeu a legitimidade do concílio aos olhos dos joanitas e dos historiadores posteriores, que questionaram se as decisões de Éfeso foram tomadas livremente ou sob coação.',
    consequenciaDeLongoPrazo:
      'A violência popular em Éfeso estabeleceu um precedente preocupante na história dos concílios: o de que a "voz do povo" (vox populi) podia ser usada como instrumento de pressão sobre os bispos reunidos. Este precedente seria repetido (e amplificado) no Latrocínio de Éfeso (449), onde os monges de Dióscoro usaram a violência física para intimidar os bispos dissidentes, e em vários concílios medievais onde a pressão popular (ou a ameaça de tumulto) influenciou as decisões dos padres conciliares. A questão de fundo — até que ponto a piedade popular deve influenciar as decisões dogmáticas da Igreja? — permanece relevante até hoje.',
    fontes: [
      'Sócrates, HE VII.34 (descrição da celebração popular)',
      'ACO I.1.1 (Gesta, Sessão I: papel da multidão)',
      'Teodoreto, Ep. ad Dioscorum (sobre a coerção em Éfeso)',
      'McGuckin, op. cit., pp. 125–135',
      'Wessel, op. cit., pp. 155–170',
    ],
  },
]