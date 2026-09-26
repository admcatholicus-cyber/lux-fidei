// ============================================
// CONCÍLIO DE ÉFESO (431 d.C.)
// Fases, Sessões, Presidência e Cronologia
// ============================================

interface EventoSessao {
  titulo: string
  descricao: string
  desdobramento: string
}

interface Sessao {
  fase: string
  presidente: string
  periodo: string
  clima: string
  eventos: EventoSessao[]
  resultado: string
}

interface EventoLinhaDoTempo {
  data: string
  evento: string
}

// =============================================
// RESUMO GERAL DAS SESSÕES
// =============================================
export const resumoSessoes =
  'O Concílio de Éfeso não foi um evento linear e ordenado, mas uma sequência caótica de sessões canônicas, contra-sessões, prisões, negociações e intervenções imperiais que se estendeu de 22 de junho a 31 de julho de 431, com desdobramentos até outubro. Formalmente, o concílio teve 7 sessões canônicas (reconhecidas pela tradição ecumênica), todas presididas por Cirilo de Alexandria e realizadas na Igreja de Santa Maria (Theotokos). Porém, paralelamente a estas sessões, houve um contra-concílio liderado por João de Antioquia (26–27 de junho) e uma série de eventos políticos (prisões, negociações, éditos imperiais) que moldaram o resultado final. A cronologia pode ser dividida em 5 fases principais: (1) a abertura prematura e a condenação de Nestório (22 de junho); (2) o contra-concílio joanita (26–27 de junho); (3) a chegada dos legados papais e a ratificação romana (10–11 de julho); (4) as sessões finais e a promulgação dos cânones (16–23 de julho); e (5) o desfecho imperial e o exílio de Nestório (setembro–outubro).'

// =============================================
// LINHA DO TEMPO RESUMIDA
// =============================================
export const linhaDoTempoSessoes: EventoLinhaDoTempo[] = [
  { data: '19 nov 430', evento: 'Sacra imperial de Teodósio II convoca o concílio para Éfeso no Pentecostes de 431' },
  { data: 'Mai–Jun 431', evento: 'Bispos começam a chegar a Éfeso; Cirilo e Memnon preparam a infraestrutura' },
  { data: '21 jun 431', evento: 'Véspera de Pentecostes: Cirilo anuncia a abertura para o dia seguinte; 68 bispos protestam; Candidiano lê a sacra imperial pedindo adiamento; Cirilo ignora ambos' },
  { data: '22 jun 431', evento: 'SESSÃO I — Abertura prematura; leitura do Credo de Niceia, das cartas de Cirilo e Nestório; condenação e deposição de Nestório in absentia (~160–198 bispos assinam)' },
  { data: '22 jun 431 (noite)', evento: 'Multidão de Éfeso celebra a deposição de Nestório com tochas, incenso e procissões; Memnon fecha as igrejas aos nestorianos' },
  { data: '26 jun 431', evento: 'João de Antioquia chega a Éfeso com ~30 bispos sírios; descobre que Nestório já foi condenado; furioso, recusa-se a reconhecer a Sessão I' },
  { data: '26–27 jun 431', evento: 'CONTRA-CONCÍLIO — João de Antioquia, com Candidiano e ~30 bispos, realiza sessões paralelas; depõe Cirilo e Memnon por "apolinarismo" e "violação dos cânones"' },
  { data: '27 jun 431', evento: 'Teodósio II, informado do caos, declara válidas ambas as deposições (Nestório por Cirilo; Cirilo por João); ordena que nenhum dos dois exerça funções episcopais' },
  { data: 'Jun–Jul 431', evento: 'Dois concílios rivais funcionam simultaneamente em Éfeso; os cirilianos controlam a Igreja de Santa Maria; os joanitas reúnem-se em uma casa particular' },
  { data: '10 jul 431', evento: 'SESSÃO II — Chegada dos legados papais (Arcádio, Projeto, Filipe); leitura da carta de Celestino I (Apostolici verba); ratificação da condenação de Nestório' },
  { data: '11 jul 431', evento: 'SESSÃO III — Confirmação formal da deposição de Nestório com a presença dos legados; Filipe pronuncia a célebre declaração sobre a primazia de Pedro' },
  { data: '16 jul 431', evento: 'SESSÃO IV — Ratificação da condenação de Nestório e de seus escritos; os legados papais participam plenamente' },
  { data: '17 jul 431', evento: 'SESSÃO V — Condenação formal dos escritos de Nestório e de seus defensores; leitura de trechos heréticos dos sermões de Nestório' },
  { data: '22 jul 431', evento: 'SESSÃO VI — Promulgação do Cânon 7: proibição absoluta de compor ou apresentar qualquer credo diferente do de Niceia (325)' },
  { data: '23 jul 431', evento: 'SESSÃO VII — Regulamentação da autocefalia de Chipre (Cânon 8); promulgação dos cânones restantes; encerramento formal dos trabalhos conciliares' },
  { data: '31 jul 431', evento: 'Encerramento oficial do concílio; os bispos começam a retornar a suas dioceses' },
  { data: 'Ago–Set 431', evento: 'Teodósio II, ainda indeciso, ordena a prisão de Cirilo e Memnon (por violação dos cânones) e de Nestório (por heresia); todos são detidos em Éfeso' },
  { data: 'Set–Out 431', evento: 'Sob pressão de Pulquéria, do povo de Constantinopla e dos monges do Egito, Teodósio II liberta Cirilo e confirma a deposição de Nestório' },
  { data: 'Out 431', evento: 'Nestório é enviado de volta ao mosteiro de Euprepius (perto de Antioquia); Cirilo retorna triunfante a Alexandria' },
  { data: '433', evento: 'Fórmula de União entre Cirilo e João de Antioquia; fim do cisma de 2 anos' },
  { data: '435', evento: 'Édito imperial contra os nestorianos; Nestório exilado para o Oásis de Hibis (Egito)' },
]

// =============================================
// DETALHAMENTO DAS FASES E SESSÕES
// =============================================
export const sessoes: Sessao[] = [
  // =============================================
  // FASE 1: A SESSÃO DE ABERTURA (22 DE JUNHO)
  // =============================================
  {
    fase: 'Fase 1 — A Abertura Prematura e a Condenação de Nestório',
    presidente: 'Cirilo de Alexandria',
    periodo: '22 de junho de 431 (Sessão I)',
    clima:
      'Tensão extrema e drama teatral. Nestório está barricado em sua residência, cercado por soldados imperiais. O conde Candidiano tenta impedir a abertura, lendo a sacra imperial que ordena esperar todos os bispos. 68 bispos (a vanguarda de João de Antioquia) assinam um protesto formal. Cirilo ignora todos os protestos e abre a sessão com ~160–198 bispos presentes. A multidão de Éfeso cerca a Igreja de Santa Maria do lado de fora, aguardando o veredicto com tochas acesas e orações à Theotokos. O clima dentro da igreja é de urgência e determinação: os bispos cirilianos sabem que, se esperarem João de Antioquia, a condenação de Nestório pode ser bloqueada.',
    eventos: [
      {
        titulo: 'A Abertura Prematura e o Protesto de Candidiano',
        descricao:
          'Na manhã de 22 de junho (Domingo de Pentecostes), Cirilo convocou os bispos para a Igreja de Santa Maria. O conde Candidiano, representante imperial, compareceu e leu em voz alta a sacra de Teodósio II, que ordenava explicitamente que nenhuma decisão fosse tomada antes da chegada de todos os bispos convocados, especialmente João de Antioquia. Cirilo respondeu que a maioria dos bispos já estava presente e que a fé não podia esperar. 68 bispos (liderados por Teodoreto de Ciro e Alexandre de Hierápolis, que haviam chegado com a vanguarda de João) assinaram um protesto formal e retiraram-se da igreja. Candidiano também saiu, furioso, e cercou o edifício com seus soldados. Cirilo declarou a sessão aberta com os bispos restantes.',
        desdobramento:
          'A abertura prematura seria o ato mais controverso de todo o concílio e a base legal do contra-concílio joanita. Para os cirilianos, a decisão era justificada pela urgência da fé e pela maioria numérica. Para os joanitas e para Candidiano, era uma violação flagrante das ordens imperiais e dos cânones eclesiásticos.',
      },
      {
        titulo: 'A Leitura dos Documentos Fundamentais',
        descricao:
          'Uma vez aberta a sessão, Cirilo ordenou a leitura dos documentos que formariam a base do julgamento. Primeiro, o Credo de Niceia (325) foi lido em voz alta, e todos os bispos aclamaram: "Esta é a fé dos Padres! Esta é a fé dos apóstolos!" Em seguida, foram lidas: a 2ª Carta de Cirilo a Nestório (a "Carta Dogmática" de 429, que expunha a cristologia da união hipostática e defendia Theotokos); a resposta de Nestório a esta carta (na qual rejeitava Theotokos e propunha Christotokos); a 3ª Carta de Cirilo a Nestório (com os 12 Anátemas); e trechos dos sermões de Nestório contra Theotokos, nos quais ele declarava que "Deus não pode nascer de uma mulher" e que Maria era "mãe do homem Jesus, não do Verbo divino". A cada leitura, os bispos aclamavam ou anatematizavam.',
        desdobramento:
          'A seleção dos documentos foi estrategicamente feita por Cirilo para maximizar o impacto contra Nestório. Os trechos dos sermões de Nestório foram escolhidos por sua formulação mais radical e provocativa, enquanto as cartas de Cirilo foram apresentadas em sua forma mais equilibrada e ortodoxa. A leitura do Credo de Niceia serviu para enquadrar o julgamento como uma defesa da fé apostólica, e não como uma disputa pessoal.',
      },
      {
        titulo: 'O Julgamento e a Condenação de Nestório',
        descricao:
          'Após a leitura dos documentos, Cirilo propôs que Nestório fosse citado a comparecer e defender-se. Três diáconos foram enviados à residência de Nestório para intimá-lo. Na primeira intimação, Nestório respondeu que não compareceria porque a sessão era ilegítima (aberta sem João de Antioquia e contra as ordens imperiais). Na segunda intimação, Nestório recusou-se novamente, alegando que Cirilo era seu acusador e não podia ser seu juiz. Na terceira intimação, os soldados de Candidiano impediram os diáconos de chegarem à residência de Nestório (segundo os cirilianos; segundo os nestorianos, Nestório simplesmente recusou). Diante das três recusas, Cirilo declarou que Nestório havia se autocondenado pela contumácia e procedeu à votação. Um por um, os ~198 bispos presentes levantaram-se e declararam: "Nestório é herege! Nestório é deposto!" A sentença formal foi redigida e assinada por todos os bispos: "Nosso Senhor Jesus Cristo, blasfemado pelo ímpio Nestório, define por este santo concílio que Nestório está excluído da dignidade episcopal e de toda assembleia sacerdotal."',
        desdobramento:
          'A condenação de Nestório foi o ato central do concílio e o evento que definiu a cristologia ortodoxa para os séculos seguintes. A sentença, lida em voz alta diante da multidão de Éfeso, provocou uma explosão de júbilo popular que durou toda a noite. Porém, a legitimidade da condenação seria contestada por João de Antioquia (no contra-concílio) e por Teodósio II (que inicialmente declarou válidas ambas as deposições), criando um impasse que só seria resolvido meses depois.',
      },
      {
        titulo: 'A Celebração Popular e o Cerco às Igrejas',
        descricao:
          'Na noite de 22 de junho, a multidão de Éfeso — que havia passado o dia inteiro em oração diante da Igreja de Santa Maria, com tochas, incenso e cânticos à Theotokos — explodiu em júbilo ao ouvir que Nestório havia sido deposto. Segundo Sócrates (HE VII.34), "toda a cidade, do amanhecer ao anoitecer, aguardava o veredicto do santo concílio. Quando a notícia da deposição de Nestório se espalhou, uma imensa aclamação se elevou, e o povo acompanhou os bispos de volta às suas hospedagens com tochas acesas e incenso, gritando: A Theotokos foi vingada! A fé ortodoxa triunfou! " Memnon, o bispo de Éfeso, ordenou que todas as igrejas da cidade fossem fechadas a Nestório e a seus partidários, efetivamente excomungando-os da vida litúrgica local.',
        desdobramento:
          'A celebração popular demonstrou a profundidade da devoção mariana em Éfeso e a impopularidade de Nestório entre o povo. Porém, o uso da multidão como instrumento de pressão política seria criticado pelos joanitas e pelos historiadores posteriores como uma forma de coerção que comprometia a liberdade do concílio.',
      },
    ],
    resultado:
      'Nestório foi formalmente deposto do patriarcado de Constantinopla e condenado como herege. O título Theotokos foi proclamado como dogma de fé. O Credo de Niceia (325) foi confirmado como norma inalterável. Porém, a legitimidade da Sessão I seria contestada por João de Antioquia (no contra-concílio de 26–27 de junho) e por Teodósio II (que inicialmente declarou válidas ambas as deposições), criando um impasse que só seria resolvido com a chegada dos legados papais (10 de julho) e a pressão de Pulquéria (outubro).',
  },

  // =============================================
  // FASE 2: O CONTRA-CONCÍLIO (26–27 DE JUNHO)
  // =============================================
  {
    fase: 'Fase 2 — O Contra-Concílio de João de Antioquia',
    presidente: 'João de Antioquia (com o conde Candidiano)',
    periodo: '26–27 de junho de 431',
    clima:
      'Fúria, indignação e cisma aberto. João de Antioquia chega a Éfeso em 26 de junho, quatro dias após a Sessão I, e descobre que Cirilo já condenou Nestório sem esperar os orientais. Furioso, João declara a Sessão I nula e ilegítima (violou as ordens imperiais, abriu sem a maioria dos bispos, julgou o acusado in absentia). Com o apoio de Candidiano (que também considerava a Sessão I ilegal) e de ~30 bispos sírios, João realiza um contra-concílio em uma casa particular de Éfeso, depondo Cirilo e Memnon. A situação é absurda: dois concílios rivais funcionam simultaneamente na mesma cidade, cada um depondo o líder do outro, cada um alegando ser o verdadeiro concílio ecumênico.',
    eventos: [
      {
        titulo: 'A Chegada de João e a Descoberta do Fato Consumado',
        descricao:
          'João de Antioquia chegou a Éfeso em 26 de junho com ~30 bispos sírios, após uma viagem de semanas atrasada por enchentes nas estradas da Anatólia. Ao chegar, foi imediatamente informado por Candidiano e pelos bispos nestorianos de que Cirilo havia aberto o concílio sem ele, condenado Nestório in absentia, e fechado as igrejas da cidade aos orientais. João ficou furioso: para ele, a Sessão I era uma violação flagrante das ordens imperiais (a sacra de Teodósio II ordenava esperar todos os bispos), dos cânones eclesiásticos (um acusado tem o direito de estar presente em seu julgamento), e da justiça elementar (Cirilo era o acusador e não podia ser o juiz). João recusou-se a entrar na Igreja de Santa Maria (controlada por Memnon) e reuniu seus bispos em uma casa particular.',
        desdobramento:
          'A recusa de João em reconhecer a Sessão I criou a situação de dois concílios rivais em Éfeso. Para os cirilianos, João era um cismático que se recusava a aceitar a decisão legítima da maioria. Para os joanitas, Cirilo era um usurpador que havia violado as ordens do imperador e os direitos de Nestório.',
      },
      {
        titulo: 'O Contra-Concílio e a Deposição de Cirilo e Memnon',
        descricao:
          'Em 26–27 de junho, João de Antioquia presidiu um contra-concílio com seus ~30 bispos sírios e o conde Candidiano. A sessão foi breve e direta: João leu os 12 Anátemas de Cirilo e declarou que eles continham heresia apolinarista (a "confusão" das duas naturezas de Cristo em uma "única natureza encarnada"). Em seguida, João declarou que Cirilo, ao abrir o concílio sem esperar os orientais e ao impor seus Anátemas como norma de fé, havia violado os cânones e usurpado a autoridade do imperador. A sentença do contra-concílio foi: "Cirilo de Alexandria e Memnon de Éfeso estão depostos de suas sés episcopais por apolinarismo, violação dos cânones e desobediência às ordens imperiais." Candidiano, como representante imperial, endossou a sentença e enviou um relatório a Teodósio II.',
        desdobramento:
          'O contra-concílio de João era tecnicamente ilegítimo (não tinha a maioria dos bispos, nem a presença dos legados papais, nem a aprovação da maioria dos bispos presentes em Éfeso), mas politicamente significativo, pois contava com o apoio de Candidiano e, inicialmente, de Teodósio II. A deposição de Cirilo e Memnon pelo contra-concílio criou a situação absurda de dois patriarcas depostos (Nestório por Cirilo; Cirilo por João), cada um alegando ser a vítima de um julgamento ilegítimo.',
      },
      {
        titulo: 'A Resposta de Teodósio II: Ambas as Deposições São Válidas',
        descricao:
          'Quando os relatórios de ambos os concílios chegaram a Constantinopla, Teodósio II tomou uma decisão que quase desastrou a Igreja: declarou que ambas as deposições eram válidas. Nestório estava deposto (por Cirilo), e Cirilo e Memnon também estavam depostos (por João). Os três patriarcas foram proibidos de exercer funções episcopais até que a questão fosse resolvida. Esta decisão, que pretendia ser um compromisso político, foi um desastre teológico: significava que o concílio não havia resolvido nada, e que a Igreja estava agora mais dividida do que antes.',
        desdobramento:
          'A decisão de Teodósio II foi recebida com fúria por ambos os partidos. Cirilo, de sua prisão em Éfeso, escreveu cartas desesperadas a Pulquéria e aos eunucos imperiais, argumentando que a deposição de Nestório era legítima e que o contra-concílio de João era nulo. João, por sua vez, insistiu que Cirilo era um apolinarista e que sua deposição era justa. O impasse durou meses, até que a pressão de Pulquéria e do povo de Constantinopla levou Teodósio a mudar de ideia.',
      },
    ],
    resultado:
      'O contra-concílio de João de Antioquia criou um cisma aberto dentro do concílio e transformou Éfeso em um campo de batalha teológico e político. A situação de dois concílios rivais, cada um depondo o líder do outro, era sem precedentes na história da Igreja e demonstrou os limites da capacidade imperial de gerenciar disputas teológicas. O impasse só seria resolvido com a chegada dos legados papais (10 de julho) e, definitivamente, com a intervenção de Pulquéria (outubro de 431).',
  },

  // =============================================
  // FASE 3: A CHEGADA DOS LEGADOS PAPAIS (10–11 DE JULHO)
  // =============================================
  {
    fase: 'Fase 3 — A Chegada dos Legados Papais e a Ratificação Romana',
    presidente: 'Cirilo de Alexandria com os Legados Papais (Arcádio, Projeto, Filipe)',
    periodo: '10–11 de julho de 431 (Sessões II e III)',
    clima:
      'Alívio, legitimação e triunfo ciriliano. Após semanas de caos e incerteza, a chegada dos três legados papais (Arcádio, Projeto e Filipe) em 10 de julho foi um momento de enorme importância simbólica e jurídica. A presença de Roma validava retroativamente a Sessão I e conferia ao concílio o selo da universalidade (ecumenicidade). Para Cirilo, a chegada dos legados era a prova de que Deus estava do seu lado. Para os nestorianos e joanitas, era um golpe devastador: com Roma e Alexandria unidas contra Nestório, a resistência era praticamente impossível.',
    eventos: [
      {
        titulo: 'A Chegada dos Legados e a Leitura da Carta de Celestino I (Sessão II, 10 de julho)',
        descricao:
          'Os legados papais Arcádio, Projeto e Filipe chegaram a Éfeso em 10 de julho, quase três semanas após a Sessão I. Foram recebidos triunfalmente por Cirilo e pelos bispos cirilianos na Igreja de Santa Maria. Na Sessão II, o presbítero Filipe (o mais eloquente dos três) leu em voz alta a carta do Papa Celestino I ao concílio (Apostolici verba), na qual o Papa reafirmava a condenação de Nestório já decretada pelo Sínodo de Roma (430), confirmava a autoridade de Cirilo como seu representante, e exortava os bispos a preservarem a fé nicena sem alterações. Após a leitura, os bispos aclamaram: "Este é o julgamento justo! Esta é a fé dos Padres! Pedro falou pela boca de Celestino!"',
        desdobramento:
          'A leitura da carta de Celestino I foi o momento em que o concílio de Éfeso se tornou verdadeiramente ecumênico. Com Roma e Alexandria unidas, a condenação de Nestório ganhou uma autoridade que nenhum contra-concílio joanita podia contestar. A aclamação dos bispos orientais ("Pedro falou pela boca de Celestino") é um dos testemunhos mais explícitos do reconhecimento da primazia papal no Oriente no século V.',
      },
      {
        titulo: 'A Declaração de Filipe sobre a Primazia de Pedro (Sessão III, 11 de julho)',
        descricao:
          'Na Sessão III (11 de julho), o presbítero Filipe pronunciou a célebre declaração que seria registrada nos Atos oficiais do concílio (ACO I.1.2): "Ninguém duvida, antes é conhecido em todas as épocas, que o santo e bem-aventurado Pedro, príncipe e cabeça dos apóstolos, coluna da fé e fundamento da Igreja Católica, recebeu as chaves do Reino de Nosso Senhor Jesus Cristo. Ele vive e julga até hoje e sempre em seus sucessores." Esta declaração, feita diante de ~200 bispos orientais, é um dos documentos mais importantes da história da primazia papal. Os bispos presentes não contestaram as palavras de Filipe; ao contrário, aclamaram-nas como expressão da fé comum.',
        desdobramento:
          'A declaração de Filipe seria citada nos séculos seguintes por papas e teólogos católicos como prova de que a primazia papal era reconhecida pelo Oriente no período patrístico. Os ortodoxos, por sua vez, argumentam que a aclamação dos bispos orientais referia-se à autoridade de Pedro como apóstolo, não à jurisdição universal do Papa sobre o Oriente — uma distinção que se tornaria central no Grande Cisma de 1054.',
      },
    ],
    resultado:
      'As Sessões II e III ratificaram formalmente a condenação de Nestório com a autoridade de Roma. A presença dos legados papais transformou o concílio de uma assembleia oriental em um evento verdadeiramente ecumênico. A partir deste momento, a legitimidade da Sessão I era incontestável do ponto de vista canônico: a maioria dos bispos, a autoridade do patriarca de Alexandria e a ratificação do Papa estavam todas alinhadas.',
  },

  // =============================================
  // FASE 4: AS SESSÕES FINAIS (16–23 DE JULHO)
  // =============================================
  {
    fase: 'Fase 4 — As Sessões Finais e a Promulgação dos Cânones',
    presidente: 'Cirilo de Alexandria (com os Legados Papais)',
    periodo: '16–23 de julho de 431 (Sessões IV–VII)',
    clima:
      'Consolidação ciriliana e trabalho legislativo. Com a condenação de Nestório ratificada por Roma e a oposição joanita isolada (João de Antioquia e seus bispos continuavam em Éfeso, mas sem apoio imperial após a chegada dos legados), as sessões finais do concílio dedicaram-se à promulgação dos 8 cânones disciplinares, à condenação formal dos escritos nestorianos, e à resolução de questões jurisdicionais (autocefalia de Chipre). O clima era de relativa calma, embora a tensão com os joanitas persistisse nos bastidores.',
    eventos: [
      {
        titulo: 'Sessão IV (16 de julho): Ratificação da Condenação',
        descricao:
          'A Sessão IV foi uma sessão de ratificação formal. Os legados papais, agora plenamente integrados aos trabalhos, participaram da confirmação da deposição de Nestório e da leitura de trechos adicionais de seus escritos heréticos. Os bispos aclamaram a condenação por unanimidade. A sessão também tratou da questão dos bispos que haviam apoiado Nestório e que agora buscavam reconciliação com o concílio.',
        desdobramento:
          'A Sessão IV consolidou a vitória ciriliana e demonstrou que, com a presença de Roma, a oposição ao concílio era futile. Os bispos que haviam apoiado Nestório começaram a abandonar seu partido e a buscar reconciliação com Cirilo.',
      },
      {
        titulo: 'Sessão V (17 de julho): Condenação dos Escritos Nestorianos',
        descricao:
          'A Sessão V foi dedicada à condenação formal dos escritos de Nestório. Trechos de seus sermões, cartas e tratados foram lidos em voz alta e anatematizados um por um. Os trechos mais controversos incluíam: "Deus não pode nascer de uma mulher"; "Maria é mãe do homem Jesus, não do Verbo"; "Aquele que nasceu de Maria é um homem portador de Deus (theophoros), não Deus encarnado"; e "Adorar a humanidade de Cristo junto com a divindade é idolatria". Cada trecho foi seguido de uma aclamação unânime: "Anátema a Nestório! Anátema à sua doutrina ímpia!"',
        desdobramento:
          'A condenação dos escritos de Nestório foi a base para o édito imperial de 435 (Cod. Theod. XVI.5.66), que ordenou a queima de todas as obras de Nestório e a proibição de sua circulação. Esta é a razão pela qual quase nenhuma obra de Nestório sobreviveu em grego original.',
      },
      {
        titulo: 'Sessão VI (22 de julho): O Cânon 7 — Proibição de Novos Credos',
        descricao:
          'A Sessão VI foi a mais importante do ponto de vista dogmático após a Sessão I. Nela foi promulgado o Cânon 7, o mais famoso dos 8 cânones de Éfeso: "Ninguém tem permissão de produzir, escrever ou compor uma fé diferente daquela definida pelos santos Padres reunidos em Niceia com o Espírito Santo." O alvo principal do Cânon 7 era o credo batismal de Teodoro de Mopsuéstia, que os nestorianos usavam como alternativa ao Credo de Niceia e que continha formulações cristológicas consideradas heréticas (ênfase na "conjunção" das duas naturezas, rejeição implícita de Theotokos). O Cânon 7 estabeleceu o princípio de que o Credo de Niceia (325) era a norma única e inalterável de fé, e que qualquer "expansão" ou "reformulação" que contradissesse seu espírito era proibida.',
        desdobramento:
          'O Cânon 7 teria consequências de longo prazo imensas. Nos séculos IX–XI, os teólogos ortodoxos orientais citariam o Cânon 7 contra a adição do Filioque ao Credo pela Igreja latina, argumentando que a inserção de "e do Filho" na cláusula da processão do Espírito Santo era uma violação da proibição de Éfeso. A Igreja Católica, por sua vez, argumentaria que o Filioque não era um "novo credo", mas uma "explicação legítima" do credo existente — um debate que continua até hoje.',
      },
      {
        titulo: 'Sessão VII (23 de julho): Autocefalia de Chipre e Encerramento',
        descricao:
          'A Sessão VII foi a última sessão canônica do concílio. Nela foi promulgado o Cânon 8, que confirmava a autocefalia (independência jurisdicional) da Igreja de Chipre contra as pretensões do patriarcado de Antioquia, que reivindicava jurisdição sobre a ilha com base no Cânon 6 de Niceia (325). Os bispos de Chipre, liderados por Régio de Constantia, argumentaram que sua igreja havia sido fundada pelo apóstolo Barnabé (At 13,4–12) e que, desde o Concílio de Niceia, gozava do direito de ordenar seus próprios bispos sem interferência de Antioquia. O concílio decidiu a favor de Chipre, estabelecendo um precedente importante para a autonomia das igrejas locais. A Sessão VII também promulgou os cânones restantes (1–6) e encerrou formalmente os trabalhos conciliares.',
        desdobramento:
          'A autocefalia de Chipre (Cânon 8) é um dos precedentes mais antigos de independência eclesiástica local e seria citada nos séculos seguintes por outras igrejas que buscavam autonomia (Bulgária, Sérvia, Rússia, Grécia). O encerramento formal do concílio em 23 de julho não significou o fim da crise: o cisma com João de Antioquia persistiria até 433, e o destino de Nestório só seria decidido em outubro.',
      },
    ],
    resultado:
      'As Sessões IV–VII consolidaram a vitória ciriliana e produziram os 8 cânones disciplinares de Éfeso, que legislam sobre a condenação do nestorianismo, a jurisdição episcopal, a proibição de novos credos e a autocefalia de Chipre. Com a condenação de Nestório ratificada por Roma e os cânones promulgados, o concílio havia cumprido sua missão teológica. Porém, o desfecho político (o destino de Nestório e a reconciliação com João de Antioquia) ainda estava pendente.',
  },

  // =============================================
  // FASE 5: O DESFECHO IMPERIAL (SETEMBRO–OUTUBRO)
  // =============================================
  {
    fase: 'Fase 5 — O Desfecho Imperial e o Exílio de Nestório',
    presidente: 'Teodósio II (intervenção imperial)',
    periodo: 'Setembro–Outubro de 431',
    clima:
      'Negociação, prisão e triunfo final. Após o encerramento formal do concílio (23 de julho), a situação em Éfeso permanecia caótica: Cirilo e os cirilianos controlavam a Igreja de Santa Maria; João e os joanitas mantinham seu contra-concílio em uma casa particular; Nestório permanecia em sua residência sob guarda imperial; e Candidiano tentava manter a ordem com seus soldados. Teodósio II, ainda indeciso, tomou a decisão drástica de prender os três protagonistas (Cirilo, Memnon e Nestório) e convocar uma delegação de bispos de cada partido a Constantinopla para negociar uma solução. A prisão de Cirilo provocou uma reação furiosa dos monges do Egito e do povo de Constantinopla, liderados por Pulquéria e pelo abade Dalmácio.',
    eventos: [
      {
        titulo: 'A Prisão de Cirilo, Memnon e Nestório (Setembro de 431)',
        descricao:
          'Em setembro de 431, Teodósio II emitiu uma sacra ordenando a prisão de Cirilo e Memnon (por "violação dos cânones" e "abertura ilegal do concílio") e de Nestório (por "heresia"). Os três foram detidos em Éfeso sob guarda imperial, e uma delegação de 8 bispos de cada partido foi convocada a Constantinopla para apresentar seus argumentos diante do imperador. A prisão de Cirilo foi um choque para seus partidários: o patriarca mais poderoso do Oriente, o campeão da Theotokos, o representante do Papa, estava agora preso por ordem do imperador. Cirilo, porém, não ficou inativo: de sua prisão, escreveu cartas desesperadas a Pulquéria, aos eunucos imperiais e aos monges do Egito, pedindo que pressionassem Teodósio II.',
        desdobramento:
          'A prisão de Cirilo foi o último ato da indecisão de Teodósio II e o ponto de virada da crise. A reação popular foi tão intensa que Teodósio percebeu que não podia manter Cirilo preso sem provocar uma revolta. Os monges de Constantinopla, liderados pelo abade Dalmácio (que não saía de seu mosteiro há 48 anos), marcharam em procissão até o palácio imperial e exigiram a libertação de Cirilo. Pulquéria, furiosa, confrontou o irmão e exigiu que ele escolhesse: ou Cirilo ou Nestório.',
      },
      {
        titulo: 'A Libertação de Cirilo e a Confirmação da Deposição de Nestório (Outubro de 431)',
        descricao:
          'Sob a pressão combinada de Pulquéria, dos monges de Constantinopla, do povo da capital e dos legados papais (que ameaçaram excomungar Teodósio II caso não confirmasse a condenação de Nestório), o imperador cedeu. Em outubro de 431, Teodósio II libertou Cirilo e Memnon, confirmou a deposição de Nestório, e ordenou que Nestório fosse enviado de volta ao mosteiro de Euprepius, perto de Antioquia. A sacra imperial de confirmação declarou: "Tendo o santo concílio reunido em Éfeso, por inspiração do Espírito Santo, julgado e condenado a doutrina ímpia de Nestório, Nós confirmamos e ratificamos esta sentença." Cirilo retornou triunfante a Alexandria, onde foi recebido como um herói. Nestório partiu para o exílio, de onde nunca mais retornaria.',
        desdobramento:
          'A confirmação imperial da deposição de Nestório em outubro de 431 foi o desfecho definitivo do Concílio de Éfeso. A Theotokos era agora dogma de fé e lei do Império. Porém, o cisma com João de Antioquia persistiria até 433, quando a Fórmula de União reconciliou Alexandria e Antioquia. Nestório, exilado no Oásis de Hibis (Egito) a partir de 435, viveria em condições miseráveis até sua morte, por volta de 451, pouco antes do Concílio de Calcedônia.',
      },
    ],
    resultado:
      'O desfecho imperial de outubro de 431 marcou a vitória definitiva do partido ciriliano e a consolidação do dogma da Theotokos. Nestório foi deposto e exilado; Cirilo foi libertado e triunfou; e a fé de Niceia foi confirmada como norma inalterável. Porém, o custo da vitória foi alto: o cisma com João de Antioquia (431–433), a alienação da tradição antioquena, e a semente do monofisismo que germinaria na década seguinte com Dióscoro de Alexandria e o Latrocínio de Éfeso (449).',
  },
]