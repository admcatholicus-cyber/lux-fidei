// ============================================
// CONCÍLIO DE ÉFESO (431 d.C.)
// Participantes, Bispos, Legados e Ausências
// ============================================

interface Bispo {
  nome: string
  sede: string
  provincia: string
  papel: string
  partido: string
  observacoes: string
}

interface GrupoParticipante {
  titulo: string
  descricao: string
  bispos: Bispo[]
}

interface Legado {
  nome: string
  titulo: string
  papel: string
}

interface Ausente {
  nome: string
  sede: string
  razao: string
  impacto: string
}

// =============================================
// TOTAL DE PARTICIPANTES
// =============================================
export const totalParticipantes = {
  estimativa: '~200–250 bispos na Sessão I; até ~340 no total acumulado',
  certeza:
    'Os Atos do Concílio (ACO I.1.1) preservam as listas de assinaturas da Sessão I (22 de junho de 431), que registram entre 160 e 198 bispos presentes, dependendo da reconstrução textual (algumas assinaturas são duplicadas ou ilegíveis). Este número cresceu com a chegada dos legados papais (3, em 10 de julho) e de bispos retardatários da Ásia Menor e da Grécia. O partido de João de Antioquia, que chegou em 26 de junho com ~30 bispos sírios, nunca se integrou às sessões cirilianas e realizou um contra-concílio separado. Se somarmos todos os bispos que estiveram em Éfeso em algum momento entre junho e julho de 431 (incluindo os joanitas e os retardatários), o total pode ter chegado a ~340. Porém, o número "oficial" reconhecido pela tradição é de ~200 bispos na Sessão I, o que torna Éfeso menor que Niceia (318) e menor que Calcedônia (~520), mas maior que Constantinopla I (~150).',
  composicao:
    'Esmagadora maioria do Oriente: Egito (~50 bispos, o maior bloco regional, todos leais a Cirilo), Palestina (~15–20, liderados por Juvenal de Jerusalém), Ásia Menor (~60–80, incluindo os bispos da província da Ásia sob Memnon de Éfeso, e bispos da Lícia, Panfília, Frígia e Galácia), Trácia (~10–15, incluindo alguns partidários de Nestório), Ponto (~10), Ilírico (~5). A presença ocidental era mínima: apenas 3 legados papais (Arcádio, Projeto e Filipe) representavam Roma e o Ocidente latino. A África estava ausente (sob cerco vândalo). A Gália, a Hispânia e a Britânia não enviaram representantes. A Síria e a Mesopotâmia chegaram tardiamente com João de Antioquia (~30 bispos) e não participaram das sessões canônicas.',
}

// =============================================
// BISPOS POR PARTIDO
// =============================================
export const participantes: GrupoParticipante[] = [
  // -----------------------------------------
  // PARTIDO CIRILIANO (ALEXANDRIA E ALIADOS)
  // -----------------------------------------
  {
    titulo: 'Partido Ciriliano — Alexandria, Egito, Palestina e Aliados (~150–180 bispos)',
    descricao:
      'O bloco majoritário do concílio, liderado por Cirilo de Alexandria e composto pelos bispos do Egito (o maior contingente regional), da Palestina, da maior parte da Ásia Menor (via Memnon de Éfeso), e por bispos individuais da Trácia, da Grécia e das ilhas do Egeu. Este partido era teologicamente homogêneo: todos defendiam o título Theotokos, a cristologia da "união hipostática" e a condenação de Nestório. A coesão do grupo era garantida pela autoridade pessoal de Cirilo, pelos laços de dependência eclesiástica dos bispos egípcios em relação a Alexandria, e pela mobilização prévia dos monges e do clero local. Os legados papais, ao chegarem em 10 de julho, integraram-se a este partido e ratificaram todas as suas decisões.',
    bispos: [
      {
        nome: 'Cirilo de Alexandria',
        sede: 'Alexandria',
        provincia: 'Egito (Aegyptus)',
        papel: 'Presidente do Concílio e líder teológico',
        partido: 'Alexandrino (líder)',
        observacoes:
          'Presidiu a Sessão I em nome próprio (como maior patriarca oriental presente) e como representante do Papa Celestino I. Sua autoridade era dupla: patriarcal e apostólica. Conduziu os trabalhos com mão de ferro, ignorando os protestos de Candidiano e dos 68 bispos dissidentes. Sua estratégia de abrir o concílio sem esperar João de Antioquia foi o ato mais controverso de sua carreira, mas garantiu a condenação de Nestório antes que os orientais pudessem bloquear a votação.',
      },
      {
        nome: 'Memnon de Éfeso',
        sede: 'Éfeso',
        provincia: 'Ásia (Asia Proconsularis)',
        papel: 'Anfitrião do Concílio e aliado incondicional de Cirilo',
        partido: 'Alexandrino (aliado)',
        observacoes:
          'Como bispo da cidade-sede, Memnon controlava a infraestrutura do concílio: a Igreja de Santa Maria, a hospedagem dos bispos, a segurança local e, crucialmente, a mobilização da população de Éfeso. Foi Memnon quem fechou as igrejas da cidade a Nestório e a seus partidários, e quem organizou a multidão que cercou a igreja na noite da Sessão I. Por estas ações, foi deposto pelo contra-concílio de João de Antioquia (27 de junho), mas restaurado pelas sessões posteriores e pela intervenção imperial.',
      },
      {
        nome: 'Juvenal de Jerusalém',
        sede: 'Jerusalém (Aelia Capitolina)',
        provincia: 'Palestina (Palaestina Prima)',
        papel: 'Aliado-chave de Cirilo e líder do bloco palestino',
        partido: 'Alexandrino (aliado)',
        observacoes:
          'Juvenal era um político eclesiástico de primeira grandeza. Apoiou Cirilo em Éfeso em troca de apoio para sua ambição de elevar Jerusalém a patriarcado (o que seria parcialmente alcançado em Calcedônia, 451, Cânon 28). Trouxe consigo ~15–20 bispos palestinos, todos leais a Cirilo. Sua assinatura aparece em segundo lugar nos Atos, logo após a de Cirilo, o que demonstra sua importância no concílio. Mais tarde, porém, Juvenal mudaria de lado e apoiaria Dióscoro no Latrocínio de Éfeso (449).',
      },
      {
        nome: 'Flaviano de Filipos',
        sede: 'Filipos',
        provincia: 'Macedônia',
        papel: 'Representante do Ilírico e aliado de Cirilo',
        partido: 'Alexandrino (aliado)',
        observacoes:
          'Como metropolita de Filipos, Flaviano representava as províncias do Ilírico oriental (Macedônia, Trácia ocidental). Sua presença era importante para demonstrar que o partido ciriliano não era exclusivamente "oriental", mas tinha ramificações europeias.',
      },
      {
        nome: 'Acácio de Melitene',
        sede: 'Melitene (Malatya)',
        provincia: 'Armênia Secunda',
        papel: 'Aliado fervoroso de Cirilo e teólogo anti-nestoriano',
        partido: 'Alexandrino (aliado)',
        observacoes:
          'Acácio era um dos teólogos mais agressivos do partido ciriliano. Havia escrito contra Nestório antes mesmo do concílio e foi um dos bispos que mais pressionaram pela abertura prematura da Sessão I. Sua diocese, na fronteira com a Armênia, era um bastião da cristologia alexandrina no extremo oriente do Império.',
      },
      {
        nome: 'Firmo de Cesareia',
        sede: 'Cesareia da Capadócia',
        provincia: 'Capadócia Prima',
        papel: 'Metropolita da Capadócia e aliado de Cirilo',
        partido: 'Alexandrino (aliado)',
        observacoes:
          'Como sucessor de Basílio de Cesareia na sé mais prestigiosa da Capadócia, Firmo trazia o peso da tradição dos Padres Capadócios (Basílio, Gregório de Nazianzo, Gregório de Nissa) para o partido ciriliano. Sua presença era uma demonstração de que a cristologia de Cirilo era a herdeira legítima da teologia capadócia, e não uma inovação alexandrina.',
      },
      {
        nome: 'Teódoto de Ancira',
        sede: 'Ancira (Ankara)',
        provincia: 'Galácia Prima',
        papel: 'Metropolita da Galácia e aliado de Cirilo',
        partido: 'Alexandrino (aliado)',
        observacoes:
          'Teódoto era um dos bispos mais influentes da Ásia Menor central. Inicialmente simpático a Nestório (ambos haviam estudado em Antioquia), Teódoto mudou de lado após ler os escritos de Cirilo e convencer-se de que a posição nestoriana era de fato herética. Sua conversão ao partido ciriliano foi um golpe significativo para Nestório, pois demonstrava que mesmo bispos de formação antioquena podiam aceitar a Theotokos.',
      },
      {
        nome: 'Dalmácio de Cízico',
        sede: 'Cízico',
        provincia: 'Helesponto',
        papel: 'Bispo da província do Helesponto',
        partido: 'Alexandrino (aliado)',
        observacoes:
          'Dalmácio representava a região do Helesponto (estreito de Dardanelos), uma área estratégica entre a Europa e a Ásia. Sua presença reforçava a maioria ciriliana entre os bispos da Ásia Menor ocidental.',
      },
      {
        nome: 'Eutíquio de Amida',
        sede: 'Amida (Diyarbakır)',
        provincia: 'Mesopotâmia',
        papel: 'Bispo da fronteira oriental',
        partido: 'Alexandrino (aliado)',
        observacoes:
          'Amida era uma cidade-fortaleza na fronteira com a Pérsia Sassânida. A presença de Eutíquio no partido ciriliano era significativa porque demonstrava que mesmo as dioceses de fronteira, onde o nestorianismo teria forte penetração posterior, estavam inicialmente alinhadas com a ortodoxia de Éfeso.',
      },
      {
        nome: 'Régio de Constantinopla (presbítero representante)',
        sede: 'Constantinopla',
        provincia: 'Trácia',
        papel: 'Representante do clero constantinopolitano anti-nestoriano',
        partido: 'Alexandrino (aliado)',
        observacoes:
          'Embora Nestório fosse o patriarca de Constantinopla, a maioria do clero local (presbíteros, diáconos e monges) opunha-se a ele e apoiava Cirilo. Régio representava este clero dissidente no concílio, trazendo depoimentos e documentos que comprovavam a impopularidade de Nestório em sua própria sé.',
      },
    ],
  },

  // -----------------------------------------
  // PARTIDO NESTORIANO (CONSTANTINOPLA)
  // -----------------------------------------
  {
    titulo: 'Partido Nestoriano — Constantinopla e Simpatizantes (~15–25 bispos)',
    descricao:
      'O partido minoritário que apoiava Nestório, composto principalmente por bispos da Trácia e da Ásia Menor ocidental que haviam sido nomeados ou influenciados por Nestório durante seu breve patriarcado (428–431). Este grupo era numericamente insignificante comparado ao partido ciriliano, mas contava com o apoio inicial de Teodósio II e do conde Candidiano, o que lhe conferia uma importância política desproporcional ao seu tamanho. Teologicamente, os nestorianos defendiam a distinção das duas naturezas de Cristo, rejeitavam o título Theotokos (preferindo Christotokos) e acusavam Cirilo de apolinarismo. Após a Sessão I e a condenação de Nestório, o partido nestoriano desintegrou-se rapidamente: muitos de seus membros abandonaram Nestório e juntaram-se ao partido ciriliano para evitar a deposição.',
    bispos: [
      {
        nome: 'Nestório',
        sede: 'Constantinopla',
        provincia: 'Trácia (Europa)',
        papel: 'Acusado principal e patriarca deposto',
        partido: 'Nestoriano (líder)',
        observacoes:
          'Nestório recusou-se a comparecer às sessões cirilianas, argumentando que Cirilo era seu acusador e não podia ser simultaneamente seu juiz. Permaneceu barricado em sua residência em Éfeso, cercado por soldados imperiais, e comunicou-se com o concílio apenas por escrito. Foi citado três vezes na Sessão I e, após três recusas, foi condenado in absentia. Sua recusa em comparecer foi interpretada pelos cirilianos como confissão de culpa, mas pelos joanitas como prova de que o concílio era ilegítimo.',
      },
      {
        nome: 'Alexandre de Hierápolis',
        sede: 'Hierápolis (Mabbog/Manbij)',
        provincia: 'Síria Euphratensis',
        papel: 'Bispo sírio pró-nestoriano',
        partido: 'Nestoriano (aliado)',
        observacoes:
          'Alexandre era um dos poucos bispos sírios que apoiaram Nestório desde o início, mesmo antes da chegada de João de Antioquia. Sua lealdade a Nestório era teológica (compartilhava a cristologia antioquena radical) e pessoal (havia sido ordenado por Nestório). Após o concílio, Alexandre recusou-se a assinar a Fórmula de União (433) e foi exilado.',
      },
      {
        nome: 'Himerio de Nicomédia',
        sede: 'Nicomédia (İzmit)',
        provincia: 'Bitínia',
        papel: 'Metropolita da Bitínia e simpatizante de Nestório',
        partido: 'Nestoriano (simpatizante)',
        observacoes:
          'Nicomédia era a antiga capital imperial (antes de Constantinopla) e mantinha laços estreitos com a corte. Himerio era simpático a Nestório por afinidade teológica e por lealdade à sé de Constantinopla, mas não era um nestoriano convicto. Após a condenação, Himerio rapidamente se realinhou ao partido vencedor.',
      },
      {
        nome: 'Doroteu de Marcianópolis',
        sede: 'Marcianópolis (Devnya)',
        provincia: 'Mésia Secunda',
        papel: 'Metropolita da Mésia e aliado de Nestório',
        partido: 'Nestoriano (aliado)',
        observacoes:
          'Doroteu era um dos poucos bispos da Trácia que manteve lealdade a Nestório até o fim. Sua diocese, na atual Bulgária, era uma região de fronteira onde a influência de Constantinopla era forte. Doroteu participou do contra-concílio de João de Antioquia e foi posteriormente deposto.',
      },
    ],
  },

  // -----------------------------------------
  // PARTIDO JOANITA (ANTIOQUIA E ORIENTE SÍRIO)
  // -----------------------------------------
  {
    titulo: 'Partido Joanita — Antioquia, Síria e Mesopotâmia (~30–35 bispos)',
    descricao:
      'O grupo de João de Antioquia, que chegou atrasado a Éfeso (26 de junho, quatro dias após a Sessão I) e recusou-se a reconhecer a legitimidade das sessões cirilianas. Os joanitas eram teologicamente moderados: não eram nestorianos convictos (João era amigo pessoal de Nestório, mas não compartilhava todas as suas posições), mas rejeitavam os 12 Anátemas de Cirilo por considerá-los apolinaristas. O partido joanita realizou um contra-concílio (26–27 de junho) que depôs Cirilo e Memnon, criando uma situação de dois concílios rivais funcionando simultaneamente em Éfeso. Após o concílio, o cisma entre Cirilo e João durou dois anos (431–433) e foi resolvido pela Fórmula de União, na qual João aceitou Theotokos e a deposição de Nestório, e Cirilo aceitou uma leitura moderada de seus Anátemas que preservava a distinção das duas naturezas.',
    bispos: [
      {
        nome: 'João de Antioquia',
        sede: 'Antioquia (Antakya)',
        provincia: 'Síria (Syria Coele)',
        papel: 'Líder do contra-concílio e rival de Cirilo',
        partido: 'Antioqueno moderado (líder)',
        observacoes:
          'João era amigo pessoal de Nestório (haviam estudado juntos no mosteiro de Euprepius, perto de Antioquia) e compartilhava sua formação antioquena, mas era teologicamente mais moderado. Sua chegada atrasada a Éfeso (devido a enchentes nas estradas da Anatólia e à lentidão de sua grande comitiva) foi o fator que detonou a crise: Cirilo abriu o concílio sem ele, e João, furioso, recusou-se a reconhecer a Sessão I. O contra-concílio que João realizou foi tecnicamente ilegítimo (não tinha a maioria, nem a autorização imperial, nem a presença dos legados papais), mas politicamente significativo, pois forçou Teodósio II a intervir e quase anulou a condenação de Nestório. A reconciliação de João com Cirilo em 433 (Fórmula de União) foi um dos momentos mais importantes da história da cristologia.',
      },
      {
        nome: 'Teodoreto de Ciro',
        sede: 'Ciro (Cyrrhus)',
        provincia: 'Síria Euphratensis',
        papel: 'Teólogo-chefe do partido antioqueno',
        partido: 'Antioqueno (teólogo)',
        observacoes:
          'Teodoreto era o teólogo mais brilhante da Escola de Antioquia após a morte de Teodoro de Mopsuéstia (428). Escreveu uma refutação detalhada dos 12 Anátemas de Cirilo (Refutatio XII Anathematismorum) e foi a principal voz intelectual do partido joanita em Éfeso. Porém, Teodoreto não era um nestoriano: ele aceitava Theotokos (com ressalvas) e defendia a unidade de pessoa em Cristo, mas insistia na distinção das duas naturezas. Mais tarde, Teodoreto seria condenado postumamente no II Concílio de Constantinopla (553) na controvérsia dos Três Capítulos, uma das decisões mais controversas da história dos concílios.',
      },
      {
        nome: 'André de Samósata',
        sede: 'Samósata (Samsat)',
        provincia: 'Síria Euphratensis',
        papel: 'Teólogo antioqueno e refutador dos Anátemas',
        partido: 'Antioqueno (teólogo)',
        observacoes:
          'André foi um dos primeiros a refutar os 12 Anátemas de Cirilo, escrevendo uma análise detalhada que acusava Cirilo de apolinarismo e de "confusão" (synchysis) das naturezas. Sua refutação, junto com a de Teodoreto, formou a base teológica da resistência antioquena a Cirilo. André participou do contra-concílio de João e foi posteriormente reconciliado com Cirilo na Fórmula de União (433).',
      },
      {
        nome: 'Acácio de Bereia',
        sede: 'Bereia (Aleppo)',
        provincia: 'Síria Secunda',
        papel: 'O bispo mais velho do concílio (~110 anos) e mediador',
        partido: 'Antioqueno (mediador)',
        observacoes:
          'Acácio de Bereia era uma lenda viva: com cerca de 110 anos de idade, era o bispo mais velho de toda a cristandade e uma figura de enorme prestígio moral. Inicialmente simpático a Nestório (por lealdade à tradição antioquena), Acácio mudou de lado durante o concílio e passou a apoiar a condenação, convencido de que Nestório havia de fato caído em erro. Sua mudança de posição foi um golpe devastador para o partido nestoriano, pois Acácio era respeitado por todos os partidos como um "pai da fé" acima das facções.',
      },
      {
        nome: 'Paulo de Emesa',
        sede: 'Emesa (Homs)',
        provincia: 'Síria Secunda',
        papel: 'Mediador entre Cirilo e João (433)',
        partido: 'Antioqueno (mediador)',
        observacoes:
          'Paulo de Emesa não teve um papel significativo durante as sessões de 431, mas seria crucial dois anos depois: foi ele quem viajou entre Alexandria e Antioquia como mediador e negociou os termos da Fórmula de União (433) que encerrou o cisma. Sua diplomacia paciente e sua teologia moderada foram essenciais para a reconciliação.',
      },
    ],
  },
]

// =============================================
// LEGADOS PAPAIS
// =============================================
export const legadosPapais = {
  titulo: 'Os Legados do Papa Celestino I — A Presença de Roma em Éfeso',
  descricao:
    'O Papa Celestino I (422–432) não pôde comparecer pessoalmente ao concílio devido à distância, à idade e às crises que o Ocidente enfrentava (invasão vândala da África, pressão dos visigodos na Gália). Em seu lugar, enviou três representantes com instruções claras e autoridade plenipotenciária: ratificar a condenação de Nestório já decretada pelo Sínodo de Roma (430), seguir a liderança de Cirilo de Alexandria (a quem Celestino havia encarregado de executar a sentença), e garantir que a fé nicena fosse preservada sem alterações. Os legados chegaram a Éfeso em 10 de julho, quase três semanas após a Sessão I, e sua chegada foi um momento de enorme importância simbólica: a presença de Roma validava retroativamente a condenação de Nestório e conferia ao concílio o selo da universalidade (ecumenicidade). Sem os legados, Éfeso teria sido um concílio puramente oriental, vulnerável à acusação de parcialidade.',
  legados: [
    {
      nome: 'Arcádio',
      titulo: 'Bispo (sede desconhecida, provavelmente da Itália central)',
      papel:
        'Legado papal sênior e chefe da delegação romana. Arcádio era o mais velho e o mais experiente dos três legados, e sua presença como bispo (e não apenas presbítero) conferia maior peso à delegação. Sua assinatura aparece em primeiro lugar entre os legados nos Atos do Concílio.',
    },
    {
      nome: 'Projeto',
      titulo: 'Bispo (sede desconhecida, provavelmente da Itália)',
      papel:
        'Segundo legado episcopal. Projeto acompanhou Arcádio em todas as sessões e assinou os Atos em segundo lugar entre os legados. Pouco se sabe sobre sua biografia além de sua participação em Éfeso.',
    },
    {
      nome: 'Filipe',
      titulo: 'Presbítero da Igreja Romana',
      papel:
        'O mais ativo e o mais eloquente dos três legados. Embora fosse "apenas" um presbítero (e não bispo), Filipe foi o porta-voz da delegação romana e pronunciou a célebre declaração sobre a primazia de Pedro na Sessão II (10 de julho de 431): "Ninguém duvida, antes é conhecido em todas as épocas, que o santo e bem-aventurado Pedro, príncipe e cabeça dos apóstolos, coluna da fé e fundamento da Igreja Católica, recebeu as chaves do Reino de Nosso Senhor Jesus Cristo. Ele vive e julga até hoje e sempre em seus sucessores." Esta declaração, registrada nos Atos oficiais do concílio (ACO I.1.2), é um dos testemunhos patrísticos mais explícitos e mais antigos da primazia papal e da sucessão apostólica ininterrupta do Bispo de Roma. Os bispos orientais presentes aclamaram as palavras de Filipe, o que demonstra que a primazia romana era reconhecida no Oriente no século V — embora o alcance e a natureza desta primazia continuassem a ser objeto de debate.',
    },
  ],
  chegada: '10 de julho de 431 (Sessão II), quase três semanas após a abertura do concílio',
  acao:
    'Na Sessão II (10 de julho), os legados leram a carta de Celestino I (Apostolici verba) ao concílio, ratificaram formalmente a condenação de Nestório decretada na Sessão I, e confirmaram a presidência de Cirilo como representante do Papa. Na Sessão III (11 de julho), participaram da confirmação da deposição de Nestório e da leitura dos 12 Anátemas. Sua presença transformou o concílio de uma assembleia oriental em um evento verdadeiramente ecumênico, com a autoridade das duas maiores sés da cristandade (Roma e Alexandria) unidas contra Nestório.',
}

// =============================================
// AUSÊNCIAS NOTÁVEIS
// =============================================
export const ausencias = {
  titulo: 'Ausências Notáveis e suas Consequências Históricas',
  descricao:
    'As ausências em Éfeso foram tão significativas quanto as presenças. A ausência mais crítica foi a de João de Antioquia nos primeiros quatro dias do concílio, que permitiu a Cirilo abrir a Sessão I sem a oposição dos orientais e gerou o cisma que duraria dois anos. Outras ausências — como a do Papa Celestino I (representado por legados), a de Agostinho de Hipona (falecido antes do concílio), e a de toda a Igreja do Ocidente latino (exceto os legados) — moldaram o caráter e as limitações do concílio de formas que só seriam plenamente compreendidas nos séculos seguintes.',
  ausentes: [
    {
      nome: 'Papa Celestino I',
      sede: 'Roma',
      razao:
        'Distância geográfica (Roma a Éfeso eram ~2.000 km por mar, uma viagem de 3–4 semanas), idade avançada, e as crises que o Ocidente enfrentava (invasão vândala da África, pressão visigótica na Gália, instabilidade política em Ravena). Celestino enviou três legados com instruções plenipotenciárias e uma carta (Apostolici verba) que foi lida na Sessão II.',
      impacto:
        'A ausência física do Papa reforçou o papel de Cirilo como "executor" da sentença romana, mas também gerou acusações de que Cirilo havia usurpado a autoridade papal ao abrir o concílio antes da chegada dos legados. A questão de se um concílio pode ser válido sem a presença (ou pelo menos a ratificação prévia) do Papa seria debatida nos séculos seguintes, especialmente durante o Grande Cisma (1054) e o Concílio de Florença (1439).',
    },
    {
      nome: 'João de Antioquia',
      sede: 'Antioquia',
      razao:
        'Atraso na viagem devido a enchentes nas estradas da Anatólia, à lentidão de sua grande comitiva (~30 bispos com séquitos), e possivelmente a uma deliberada procrastinação (alguns historiadores sugerem que João esperava ganhar tempo para negociar com Nestório antes do concílio). João chegou em 26 de junho, quatro dias após a Sessão I.',
      impacto:
        'A ausência de João nos primeiros quatro dias foi o fator mais determinante de todo o concílio. Permitiu a Cirilo abrir a Sessão I sem oposição, condenar Nestório in absentia, e criar um fato consumado que João não poderia reverter. O contra-concílio de João (26–27 de junho) e o cisma subsequente (431–433) foram consequências diretas desta ausência. Se João tivesse chegado a tempo, o concílio teria sido muito diferente: provavelmente mais longo, mais negociado, e com uma formulação cristológica mais equilibrada desde o início.',
    },
    {
      nome: 'Agostinho de Hipona',
      sede: 'Hipona (Annaba, Argélia)',
      razao:
        'Agostinho morreu em 28 de agosto de 430, dez meses antes do concílio, durante o cerco vândalo de Hipona. A África romana estava em colapso: os vândalos de Genserico haviam cruzado o Estreito de Gibraltar em 429 e estavam conquistando sistematicamente as províncias do norte da África. Nenhum bispo africano pôde comparecer a Éfeso.',
      impacto:
        'A ausência de Agostinho é uma das maiores "perdas" da história dos concílios. A maior mente teológica do Ocidente — e um dos maiores teólogos de todos os tempos — não pôde contribuir para o debate cristológico de Éfeso. A cristologia de Agostinho (que enfatizava a unidade da pessoa de Cristo em linguagem que antecipava tanto Cirilo quanto Calcedônia) teria enriquecido enormemente o debate e possivelmente evitado os extremos que levaram ao cisma. A ausência da África também significou que a tradição teológica latina (além dos legados papais) não esteve representada em Éfeso.',
    },
    {
      nome: 'Sisto III (futuro Papa)',
      sede: 'Roma (como diácono)',
      razao:
        'Sisto, que sucederia Celestino I como Papa em 432, não foi enviado como legado a Éfeso (embora fosse um dos clérigos mais influentes de Roma). Permaneceu em Roma durante o concílio e manteve correspondência com Cirilo e com os legados.',
      impacto:
        'Como Papa (432–440), Sisto III confirmaria as decisões de Éfeso e trabalharia pela reconciliação entre Cirilo e João de Antioquia. Sua ausência como legado em 431 é notável, mas sua atuação posterior como Papa foi decisiva para a consolidação do concílio.',
    },
    {
      nome: 'Isidoro de Pelúsio',
      sede: 'Pelúsio (Tell el-Farama, Egito)',
      razao:
        'Isidoro, um dos mais prolíficos escritores eclesiásticos do século V (mais de 2.000 cartas preservadas), não compareceu pessoalmente a Éfeso, embora fosse um aliado teológico de Cirilo e um crítico de Nestório. Provavelmente permaneceu em sua diocese no delta do Nilo.',
      impacto:
        'Isidoro contribuiu para a controvérsia através de suas cartas (muitas das quais criticam Nestório e defendem Theotokos), mas sua ausência física do concílio é notável dado seu prestígio intelectual. Suas cartas são uma das fontes mais ricas para a história da controvérsia nestoriana.',
    },
    {
      nome: 'Os Bispos da Igreja do Oriente (Pérsia)',
      sede: 'Ctesifonte / Selêucia (Mesopotâmia persa)',
      razao:
        'A Igreja do Oriente (a "Igreja Persa") estava fora do Império Romano e, portanto, não foi convocada por Teodósio II. A Pérsia Sassânida era um império rival, e os cristãos persas viviam sob um regime de tolerância precária que não lhes permitia participar de concílios romanos.',
      impacto:
        'A ausência da Igreja do Oriente teve consequências de longo prazo devastadoras. Sem participação em Éfeso (e depois em Calcedônia), a Igreja Persa desenvolveu sua própria tradição cristológica, fortemente influenciada por Teodoro de Mopsuéstia e Nestório. Em 486, o Sínodo de Beth Lapat adotou oficialmente a cristologia "nestoriana" (duas naturezas, duas qnome), e a Igreja do Oriente tornou-se conhecida no Ocidente como a "Igreja Nestoriana" — um rótulo que ela rejeita até hoje. A separação teológica entre a Igreja do Oriente e o resto da cristandade duraria mais de 1.500 anos, até a Declaração Cristológica Comum de 1994.',
    },
  ],
}