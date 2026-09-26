// app/estudos/concilios/constantinopla-2/_data/origenismo.ts

export interface AnatemaOrigenista {
  numero: number;
  titulo: string;
  textoPortugues: string;
  doutrinaCondenada: string;
  baseOrigenista: string;
  refutacaoTeologica: string;
  fontesPrimarias: string;
}

export interface PosicaoHistoriografica {
  autor: string;
  obra: string;
  ano: number;
  posicao: string;
  argumentos: string;
}

export interface Origenismo {
  introducao: {
    titulo: string;
    panoramaGeral: string;
    crisePalestinense: string;
    novaLaura: string;
    sabaitas: string;
    teodoroAscidas: string;
    dimensaoPolitica: string;
  };
  contexto: {
    titulo: string;
    editoDe543: string;
    conteudoEdito: string;
    recepcaoOriental: string;
    sinodoPreConciliar: string;
    relacaoComTresCapitulos: string;
  };
  oDebateHistorico: {
    titulo: string;
    problemaCentral: string;
    teseRatificacao: string;
    teseSinodoSeparado: string;
    evidenciaDocumental: string;
    posicaoAtual: string;
    posicoesHistoriograficas: PosicaoHistoriografica[];
    implicacoesTeologicas: string;
  };
  anatemas: AnatemaOrigenista[];
  notaConclusiva: string;
}

export const origenismo: Origenismo = {
  introducao: {
    titulo: "A Crise Origenista na Palestina e suas Repercussões Imperiais",
    panoramaGeral:
      "Paralelamente à controvérsia dos Três Capítulos, que dominava a agenda teológica da corte de Constantinopla na década de 540, uma segunda crise doutrinária de proporções consideráveis agitava os mosteiros da Palestina, particularmente as comunidades monásticas do deserto da Judeia e da região de Jerusalém. Essa crise, conhecida como a 'Segunda Controvérsia Origenista' (para distingui-la da primeira, do final do século IV, que envolvera Epifânio de Salamina, Jerônimo e Rufino de Aquileia), girava em torno da recepção e interpretação das especulações teológicas de Orígenes de Alexandria (c. 185–c. 254), o mais prolífico e controverso dos teólogos cristãos da era pré-nicena. As doutrinas em questão — a pré-existência das almas, a queda primordial dos intelectos (noes) criados, a natureza esférica e etérea dos corpos ressuscitados, a apocatástase (restauração universal de todas as criaturas racionais, incluindo Satanás e os demônios) e a subordinação do Verbo à Mente Primordial (Nous) — haviam sido sistematizadas no século IV por Evágrio Pôntico (345–399), discípulo dos Padres Capadócios e monge do deserto egípcio, cuja síntese especulativa (o chamado 'sistema evagriano' ou 'gnosticismo cristão ortodoxo') circulava amplamente nos meios monásticos palestinos sob o nome de Orígenes, embora muitas de suas formulações fossem desenvolvimentos posteriores que o próprio alexandrino provavelmente não teria reconhecido.",
    crisePalestinense:
      "A crise palestina irrompeu abertamente por volta de 530–535, quando as tensões latentes entre os monges 'origenistas' (partidários das especulações de Orígenes e Evágrio) e os monges 'sabaítas' (seguidores da tradição de São Sabas, o Santificado, 439–532, que rejeitavam o origenismo como heresia gnóstica) degeneraram em conflito aberto. O epicentro da disputa era a Grande Laura de São Sabas (Mar Saba), no vale do Cédron, a maior e mais influente comunidade monástica da Palestina, que funcionava como centro de formação teológica e de pressão política sobre o patriarcado de Jerusalém. A morte de São Sabas em 532 removeu o principal baluarte anti-origenista e permitiu que a facção origenista ganhasse terreno nos mosteiros palestinos, particularmente na Nova Laura (Nea Laura), fundada c. 507 por monges origenistas expulsos da Grande Laura, e no mosteiro de Teoctisto, próximo a Jerusalém.",
    novaLaura:
      "A Nova Laura (Nea Laura), situada no deserto de Tecoa, a sudeste de Belém, tornou-se o quartel-general intelectual do origenismo palestino na primeira metade do século VI. Fundada por monges que haviam sido expulsos da Grande Laura de São Sabas por suas simpatias origenistas, a comunidade abrigava teólogos de considerável sofisticação que combinavam a tradição exegética alegórica de Orígenes com a psicologia contemplativa de Evágrio Pôntico e elementos do neoplatonismo tardio (particularmente a henologia de Proclo e a doutrina da processão e retorno — proodos e epistrophē). Os monges da Nova Laura ensinavam que a criação material era resultado de uma queda primordial dos intelectos (noes) criados, que originalmente contemplavam a Trindade em estado de pura espiritualidade e que, por saciedade (koros) e negligência (ameleia), haviam se afastado de Deus e sido aprisionados em corpos materiais como forma de punição pedagógica. A salvação, nesse sistema, consistia no retorno (apokatástasis) de todos os intelectos à sua condição original de contemplação pura, o que implicava a dissolução final dos corpos materiais e a restauração da unidade primordial — incluindo a conversão e salvação de Satanás e dos demônios.",
    sabaitas:
      "Os monges sabaítas, herdeiros da tradição ascética e dogmática de São Sabas, constituíam a oposição mais vigorosa ao origenismo na Palestina. Liderados por figuras como Gelásio de Jerusalém, Conão de Lito e, posteriormente, Antíoco Estratego (autor do Pandectes, c. 620), os sabaítas consideravam o origenismo uma heresia gnóstica que destruía os fundamentos da fé cristã: a criação ex nihilo, a bondade intrínseca da matéria, a realidade da ressurreição corporal, a eternidade das penas infernais e a singularidade ontológica de Cristo como Logos encarnado. Para os sabaítas, a doutrina da pré-existência das almas era incompatível com a antropologia bíblica (Gn 2,7: 'Deus formou o homem do pó da terra e soprou em suas narinas o sopro da vida'); a apocatástase contradizia as palavras de Cristo sobre o 'fogo eterno preparado para o diabo e seus anjos' (Mt 25,41); e a subordinação do Verbo à Mente Primordial era uma recaída no subordinacionismo ariano condenado por Niceia. Os sabaítas enviaram repetidas embaixadas a Constantinopla para solicitar a intervenção imperial contra os origenistas, e sua pressão foi um dos fatores que levaram Justiniano a emitir o Édito de 543.",
    teodoroAscidas:
      "Teodoro Ascidas (m. c. 556), bispo de Cesareia na Capadócia e metropolita da província, era a figura mais influente e controversa do partido origenista na corte de Constantinopla. Monge de formação palestina e protegido da imperatriz Teodora, Ascidas residia permanentemente na capital imperial e exercia influência desproporcional sobre a política eclesiástica de Justiniano. Sua relação com o origenismo é complexa e debatida: embora fosse pessoalmente simpático às especulações de Orígenes e Evágrio, Ascidas era suficientemente astuto para não defender publicamente as doutrinas mais controversas (apocatástase, pré-existência das almas) e apresentava-se como teólogo ortodoxo preocupado com a reconciliação entre calcedonianos e miáfisitas. Foi Ascidas quem, segundo a tradição historiográfica de Cirilo de Citópolis (Vida de São Sabas, c. 555), sugeriu a Justiniano a estratégia de condenar os Três Capítulos como meio de atrair os miáfisitas de volta à comunhão calcedonense — uma manobra que, paradoxalmente, visava desviar a atenção imperial do origenismo palestino, que Ascidas e seus aliados praticavam discretamente. A duplicidade de Ascidas — promovendo a condenação de Teodoro de Mopsuéstia enquanto protegia os monges origenistas da Nova Laura — foi denunciada pelos sabaítas como a principal causa da crise tricapitulina.",
    dimensaoPolitica:
      "A crise origenista não era meramente teológica, mas profundamente política. Justiniano, que se via como guardião da ortodoxia e árbitro de todas as disputas doutrinárias (episkopos tōn ektos), não podia tolerar a existência de uma heresia aberta nos mosteiros da Palestina, a província mais sagrada do Império e destino de peregrinação de toda a cristandade. A intervenção imperial no origenismo servia a múltiplos propósitos: (1) reafirmar a autoridade teológica do imperador sobre o monaquismo palestino, que gozava de considerável autonomia; (2) neutralizar a influência de Teodoro Ascidas, cujo poder na corte era visto com desconfiança pela facção anti-origenista liderada pelo patriarca Menas e pelo quaestor Triboniano; (3) demonstrar aos miáfisitas que o imperador estava disposto a condenar heresias de todas as proveniências, não apenas as de origem antioquena; (4) preparar o terreno teológico para o concílio ecumênico que Justiniano planejava convocar para resolver a questão dos Três Capítulos.",
  },

  contexto: {
    titulo: "O Édito Imperial de 543 e o Sínodo Pré-Conciliar de 553",
    editoDe543:
      "Em 543 (ou possivelmente no início de 544), Justiniano emitiu o tratado teológico conhecido como Liber adversus Origenem (ou Edictum contra Origenem), um extenso documento dogmático de c. 5.000 palavras no original grego que constituía a primeira condenação imperial formal do origenismo desde a controvérsia do final do século IV. O édito foi motivado diretamente pela embaixada dos monges sabaítas Pelágio e Conão, que viajaram a Constantinopla em 542 para apresentar ao imperador um dossiê de 24 proposições origenistas extraídas dos escritos de Orígenes (De Principiis, Comentário ao Gênesis, Homilias sobre Jeremias) e de Evágrio Pôntico (Kephalaia Gnostika, Skemmata). Justiniano, que já havia demonstrado interesse pessoal pela teologia origenista em seus primeiros anos de reinado (o Diálogo com os Filósofos de 532 contém ecos da doutrina da apocatástase), foi convencido pelos sabaítas de que as especulações de Orígenes constituíam uma ameaça real à ortodoxia e à unidade do Império.",
    conteudoEdito:
      "O Liber adversus Origenem de 543 continha nove anátemas contra as seguintes proposições: (1) a pré-existência das almas e sua criação antes dos corpos; (2) a queda primordial dos intelectos (noes) por saciedade (koros); (3) a criação do mundo material como consequência da queda e como prisão para as almas decaídas; (4) a natureza esférica e etérea dos corpos ressuscitados; (5) a apocatástase universal, incluindo a salvação de Satanás e dos demônios; (6) a limitação do poder divino pela matéria preexistente; (7) a subordinação do Filho ao Pai e do Espírito ao Filho; (8) a interpretação alegórica extrema que negava a historicidade literal das narrativas bíblicas; (9) a doutrina de que a Trindade é uma 'mônada' que se desdobra em três hipóstases por processo de emanação neoplatônica. O édito ordenava que todos os bispos do Império subscrevessem os anátemas sob pena de deposição, e foi efetivamente ratificado pelos patriarcas Menas de Constantinopla, Zoilo de Alexandria, Efrém de Antioquia e Pedro de Jerusalém.",
    recepcaoOriental:
      "A recepção do Édito de 543 no Oriente foi majoritariamente favorável, embora não unânime. Os patriarcas orientais subscreveram os anátemas sem resistência significativa, e a maioria dos bispos da Síria, Palestina e Egito seguiu seu exemplo. A oposição mais notável veio de Teodoro Ascidas e de seu aliado Domiciano de Ancira, que, embora não pudessem recusar abertamente a subscrição (o que equivaleria a confessar simpatia origenista), conseguiram retardar a aplicação do édito em suas províncias e proteger os monges origenistas da Nova Laura de perseguição direta. No Ocidente, o édito foi recebido com indiferença: o origenismo era praticamente desconhecido fora dos círculos teológicos especializados, e os bispos latinos estavam mais preocupados com a controvérsia dos Três Capítulos, que já se desenhava no horizonte. O Papa Vigílio, que chegaria a Constantinopla em 547, aparentemente subscreveu o édito sem objeções, embora não haja evidência documental direta de sua subscrição.",
    sinodoPreConciliar:
      "Nos meses que antecederam a abertura formal do Segundo Concílio de Constantinopla (maio de 553), Justiniano convocou um sínodo patriarcal (synodos endēmousa) em Constantinopla para tratar da questão origenista, que havia ressurgido com força após a morte do patriarca Menas (agosto de 552) e a eleição de seu sucessor Eutíquio. Este sínodo pré-conciliar, realizado provavelmente entre janeiro e abril de 553, reuniu os patriarcas Eutíquio de Constantinopla, Apolinário de Alexandria, Domnino de Antioquia e Eustóquio de Jerusalém, além de um número indeterminado de bispos orientais presentes na capital. O sínodo examinou os escritos de Orígenes, Evágrio Pôntico e Dídimo o Cego, e produziu uma lista de quinze anátemas contra as proposições origenistas e evagrianas mais controversas. A relação entre esses quinze anátemas e o concílio ecumênico subsequente é o problema historiográfico mais debatido de toda a controvérsia origenista.",
    relacaoComTresCapitulos:
      "A condenação do origenismo e a condenação dos Três Capítulos estavam intrinsecamente ligadas na estratégia teopolítica de Justiniano, embora representassem problemas teológicos distintos. A conexão era dupla: (1) cronológica — ambas as condenações foram preparadas simultaneamente pela chancelaria imperial e pelo patriarcado de Constantinopla entre 543 e 553; (2) estratégica — a condenação do origenismo servia como demonstração de que o imperador estava disposto a combater heresias de todas as proveniências (não apenas as de origem antioquena), o que reforçava sua credibilidade como árbitro imparcial da ortodoxia perante os miáfisitas. Teodoro Ascidas, segundo Cirilo de Citópolis, teria sugerido a Justiniano que a condenação dos Três Capítulos desviaria a atenção dos sabaítas e neutralizaria a pressão anti-origenista, permitindo que os monges da Nova Laura continuassem suas especulações em relativa tranquilidade. Se essa interpretação é correta, a condenação dos Três Capítulos foi, em parte, uma cortina de fumaça para proteger o origenismo palestino — uma ironia histórica de grandes proporções.",
  },

  oDebateHistorico: {
    titulo: "Os 15 Anátemas contra Orígenes foram votados pelo Concílio Ecumênico?",
    problemaCentral:
      "O problema historiográfico mais persistente relacionado ao Segundo Concílio de Constantinopla é a questão de se os quinze anátemas contra Orígenes e o evagrianismo foram formalmente votados e ratificados pelo concílio ecumênico durante suas oito sessões oficiais (5 de maio a 2 de junho de 553) ou se foram emitidos por um sínodo patriarcal separado (synodos endēmousa) nos meses anteriores à abertura do concílio e apenas retroativamente associados a ele pela tradição posterior. A importância da questão transcende o interesse acadêmico: se os anátemas foram ratificados pelo concílio ecumênico, eles possuem autoridade dogmática vinculante para toda a Igreja (católica e ortodoxa); se foram emitidos apenas por um sínodo local, sua autoridade é limitada e sua infalibilidade é questionável. O debate divide a historiografia teológica há mais de um século e permanece sem resolução definitiva.",
    teseRatificacao:
      "A tese tradicional, defendida pela maioria dos teólogos católicos e ortodoxos desde a Idade Média, sustenta que os quinze anátemas contra Orígenes foram formalmente ratificados pelo concílio ecumênico, provavelmente em uma sessão preliminar ou em uma sessão especial realizada antes da abertura oficial de 5 de maio. Os principais argumentos são: (1) O testemunho de Evágrio Escolástico (Historia Ecclesiastica IV.38, c. 593), que afirma explicitamente que 'o concílio condenou Orígenes e seus escritos' e associa os anátemas ao concílio ecumênico. (2) A menção nos anátemas contra os Três Capítulos (Sessão VIII) de que o concílio também condenou 'todas as heresias anteriormente anatematizadas', o que incluiria o origenismo. (3) A subscrição dos anátemas origenistas pelos mesmos bispos que subscreveram a Sentença Final do concílio, sugerindo que ambos os documentos foram aprovados no mesmo contexto sinodal. (4) A tradição litúrgica bizantina, que associa a condenação de Orígenes ao Quinto Concílio Ecumênico e celebra a memória da condenação no Synodikon da Ortodoxia. (5) O testemunho do Papa Pelágio I (556–561), que em suas cartas menciona a condenação de Orígenes pelo concílio de Constantinopla.",
    teseSinodoSeparado:
      "A tese revisionista, proposta inicialmente por Franz Diekamp (Die origenistischen Streitigkeiten im sechsten Jahrhundert, 1899) e desenvolvida por estudiosos posteriores como Karl Joseph von Hefele, Henri Leclercq, e mais recentemente Richard Price (The Acts of the Council of Constantinople of 553, 2009), sustenta que os quinze anátemas contra Orígenes foram emitidos por um sínodo patriarcal local (synodos endēmousa) realizado em Constantinopla nos meses anteriores à abertura do concílio ecumênico (provavelmente entre janeiro e abril de 553) e que não foram formalmente votados nem ratificados pelas oito sessões oficiais do concílio. Os principais argumentos são: (1) As atas oficiais do concílio (Acta Concilii Oecumenici, series IV), preservadas em versões grega e latina, não contêm nenhuma menção aos anátemas contra Orígenes em nenhuma das oito sessões. (2) A Sentença Final da oitava sessão (2 de junho de 553) menciona apenas a condenação dos Três Capítulos e não faz referência a Orígenes. (3) Os anátemas origenistas circulam em manuscritos separados das atas conciliares e não foram incluídos nas coleções canônicas oficiais até o século VII. (4) O testemunho de Cirilo de Citópolis (Vida de São Sabas, c. 555), contemporâneo dos eventos, descreve a condenação do origenismo como um ato do sínodo patriarcal, não do concílio ecumênico. (5) A ausência de qualquer menção ao origenismo na carta imperial de Justiniano lida na primeira sessão (5 de maio de 553), que trata exclusivamente dos Três Capítulos.",
    evidenciaDocumental:
      "A evidência documental é ambígua e permite interpretações divergentes. A favor da ratificação conciliar: (a) O Liberatus de Cartago (Breviarium causae Nestorianorum et Eutychianorum, c. 565) menciona que 'o concílio de Constantinopla condenou Orígenes, Dídimo e Evágrio', embora seu testemunho seja tardio e tendencioso. (b) O Sínodo Quinissexto (Trullo, 692) cita os anátemas contra Orígenes como parte das decisões do Quinto Concílio Ecumênico. (c) O Segundo Concílio de Niceia (787) refere-se à condenação de Orígenes por Constantinopla II como fato estabelecido. Contra a ratificação: (a) As atas gregas originais (ACO IV.1–2, ed. Schwartz-Straub) não contêm os anátemas origenistas. (b) A versio latina antiqua das atas, preservada no Collectio Avellana, também os omite. (c) Os quinze anátemas aparecem pela primeira vez em manuscritos do século VII, associados ao concílio mas não integrados às atas. (d) O Papa Gregório Magno (590–604), que conhecia bem as atas de Constantinopla II, nunca menciona a condenação de Orígenes pelo concílio em suas extensas obras.",
    posicaoAtual:
      "A posição majoritária na historiografia acadêmica contemporânea (Price 2009, Hombergen 2001, Grillmeier 1995) tende a favorecer a tese do sínodo separado, embora com nuances significativas. O consenso emergente é que os quinze anátemas foram emitidos por um sínodo patriarcal pré-conciliar em Constantinopla (início de 553) e que foram posteriormente associados ao concílio ecumênico pela tradição bizantina, possivelmente durante o Sínodo Quinissexto (692) ou mesmo antes. Contudo, a maioria dos teólogos dogmáticos (tanto católicos quanto ortodoxos) sustenta que, independentemente da questão histórica, os anátemas possuem autoridade dogmática vinculante porque foram recebidos e ratificados pela Igreja universal ao longo dos séculos subsequentes (recepção eclesial como critério de ecumenicidade). A distinção entre 'ratificação formal pelo concílio' e 'recepção eclesial posterior' é, portanto, mais relevante para a historiografia do que para a dogmática.",
    posicoesHistoriograficas: [
      {
        autor: "Franz Diekamp",
        obra: "Die origenistischen Streitigkeiten im sechsten Jahrhundert und das fünfte allgemeine Concil",
        ano: 1899,
        posicao:
          "Os quinze anátemas foram emitidos por um sínodo patriarcal separado em 543 (não em 553) e nunca foram ratificados pelo concílio ecumênico. A associação com Constantinopla II é uma tradição tardia sem fundamento documental.",
        argumentos:
          "Diekamp demonstrou que as atas conciliares não contêm os anátemas e que a primeira menção explícita à condenação de Orígenes pelo Quinto Concílio aparece apenas no século VII. Ele argumentou que a confusão surgiu porque o sínodo de 543 e o concílio de 553 foram ambos realizados em Constantinopla e envolveram os mesmos patriarcas.",
      },
      {
        autor: "Karl Joseph von Hefele e Henri Leclercq",
        obra: "Histoire des Conciles d'après les documents originaux",
        ano: 1909,
        posicao:
          "Os anátemas foram provavelmente ratificados pelo concílio ecumênico em uma sessão preliminar ou em uma sessão especial não registrada nas atas oficiais. A tradição eclesial é suficiente para estabelecer a autoridade dogmática dos anátemas.",
        argumentos:
          "Hefele-Leclercq argumentaram que a ausência dos anátemas nas atas pode ser explicada pela perda de documentos ou pela decisão deliberada de não incluir a condenação do origenismo nas atas oficiais para evitar a alienação dos monges palestinos. A subscrição dos anátemas pelos mesmos bispos do concílio sugere ratificação implícita.",
      },
      {
        autor: "Alois Grillmeier",
        obra: "Christ in Christian Tradition, vol. II/2: The Church of Constantinople in the Sixth Century",
        ano: 1995,
        posicao:
          "Os anátemas foram emitidos por um sínodo pré-conciliar em 553 e receberam uma forma de ratificação implícita pelo concílio ecumênico, embora não tenham sido formalmente votados nas oito sessões oficiais.",
        argumentos:
          "Grillmeier propôs uma posição intermediária: o concílio ecumênico, ao condenar 'todas as heresias anteriormente anatematizadas' na Sentença Final, incluiu implicitamente o origenismo. A ratificação não foi formal, mas a intenção do concílio era abrangente.",
      },
      {
        autor: "Daniel Hombergen",
        obra: "The Second Origenist Controversy: A New Perspective on Cyril of Scythopolis' Monastic Biographies",
        ano: 2001,
        posicao:
          "Os anátemas foram emitidos pelo sínodo patriarcal de 553 e não pelo concílio ecumênico. A associação com o concílio é uma construção historiográfica posterior, promovida pelos sabaítas para conferir maior autoridade à condenação do origenismo.",
        argumentos:
          "Hombergen demonstrou, com base na análise detalhada das fontes monásticas palestinas (Cirilo de Citópolis, João Mosco), que a condenação do origenismo foi uma iniciativa local dos sabaítas, não uma decisão do concílio ecumênico. A narrativa de uma condenação conciliar foi construída retroativamente para legitimar a perseguição aos monges origenistas da Nova Laura.",
      },
      {
        autor: "Richard Price",
        obra: "The Acts of the Council of Constantinople of 553, with Related Texts on the Three Chapters Controversy",
        ano: 2009,
        posicao:
          "Os quinze anátemas não foram votados pelo concílio ecumênico. Foram emitidos por um sínodo endemousa em 553 e posteriormente associados ao concílio pela tradição. A autoridade dogmática dos anátemas deriva da recepção eclesial, não da ratificação conciliar formal.",
        argumentos:
          "Price, na edição crítica mais atualizada das atas conciliares, demonstrou conclusivamente que nenhuma das oito sessões menciona Orígenes e que a Sentença Final trata exclusivamente dos Três Capítulos. Ele argumentou que a confusão surgiu porque o sínodo pré-conciliar e o concílio ecumênico foram realizados no mesmo local e com os mesmos participantes, e que a tradição posterior fundiu os dois eventos.",
      },
    ],
    implicacoesTeologicas:
      "As implicações teológicas do debate são significativas, embora não decisivas para a dogmática. Se os anátemas foram ratificados pelo concílio ecumênico, a condenação da apocatástase, da pré-existência das almas e das demais proposições origenistas possui autoridade dogmática infalível (no entendimento católico) ou vinculante (no entendimento ortodoxo). Se foram emitidos apenas por um sínodo local, sua autoridade é de nível disciplinar e pode, em princípio, ser reavaliada por um concílio posterior. Na prática, contudo, a recepção eclesial universal dos anátemas ao longo de mais de 1.400 anos — confirmada pelo Sínodo Quinissexto (692), pelo Segundo Concílio de Niceia (787) e pelo magistério papal — conferiu-lhes uma autoridade de facto equivalente à de uma definição conciliar ecumênica. A questão permanece academicamente aberta, mas teologicamente resolvida pela tradição viva da Igreja.",
  },

  anatemas: [
    {
      numero: 1,
      titulo: "Condenação da pré-existência das almas e da criação primordial dos intelectos",
      textoPortugues:
        "Se alguém diz ou pensa que as almas dos homens preexistiram, sendo intelectos (noes) e santas potências que se saciaram da contemplação divina e se afastaram para o pior, e que por isso foram despojadas da caridade divina e receberam o nome de almas (psychai), e foram condenadas ao castigo nos corpos: seja anátema.",
      doutrinaCondenada:
        "Pré-existência das almas (prohyparxis tōn psychōn) e doutrina da queda primordial dos intelectos criados (henas) por saciedade (koros) e negligência (ameleia). Segundo esse sistema, todas as almas humanas foram originalmente criadas como intelectos puros (noes) em contemplação eterna da Trindade, mas, por tédio ou saciedade da contemplação divina, afastaram-se de Deus e foram aprisionadas em corpos materiais como forma de punição e pedagogia.",
      baseOrigenista:
        "Orígenes, De Principiis I.6.2–3 e II.8.3–4: 'As almas racionais foram criadas antes do mundo material e, por negligência, caíram de sua condição original.' Evágrio Pôntico, Kephalaia Gnostika I.4 e III.22: 'A mônada primordial tornou-se díade pela queda dos intelectos.' Dídimo o Cego, De Trinitate II.8.",
      refutacaoTeologica:
        "A doutrina da pré-existência contradiz a antropologia bíblica de Gênesis 2,7, segundo a qual a alma e o corpo são criados simultaneamente por Deus (a alma não preexiste ao corpo, mas é criada no momento da concepção ou da formação do corpo). Contradiz também a doutrina da criação ex nihilo: se as almas preexistem à criação material, então a matéria não é criação de Deus, mas consequência da queda, o que é gnóstico. A tradição patrística (Irineu, Atanásio, Gregório de Nissa em sua fase tardia) rejeita unanimemente a pré-existência como incompatível com a unicidade de cada pessoa humana e com a doutrina do pecado original como evento histórico adâmico.",
      fontesPrimarias:
        "ACO IV.1, pp. 248–249 (versão latina); Cirilo de Citópolis, Vita Sabae 70–71; Justiniano, Liber adversus Origenem, anátema 1.",
    },
    {
      numero: 2,
      titulo: "Condenação da criação do mundo material como consequência da queda",
      textoPortugues:
        "Se alguém diz ou pensa que a criação de todos os seres racionais resultou da queda dos intelectos e que o mundo material foi produzido como prisão e castigo para as almas decaídas, e que a criação material não é obra da bondade livre de Deus, mas consequência necessária do mal primordial: seja anátema.",
      doutrinaCondenada:
        "Doutrina de que o cosmos material (kosmos aisthētos) não é criação original e boa de Deus (contra Gn 1,31: 'Deus viu tudo o que havia feito, e era muito bom'), mas resultado secundário e punitivo da queda dos intelectos. Nessa visão, a matéria é essencialmente carcerária (sōma-sēma, 'o corpo é túmulo'), e o mundo físico existe apenas como instrumento de purificação das almas decaídas.",
      baseOrigenista:
        "Orígenes, De Principiis I.6.2 e II.1.1–3: 'Deus criou o mundo material por causa da queda dos intelectos.' Evágrio Pôntico, Kephalaia Gnostika I.68 e IV.51: 'O mundo sensível é o lugar do julgamento.' Dídimo o Cego, De Principiis (fragmento).",
      refutacaoTeologica:
        "A doutrina é incompatível com a criação ex nihilo (creatio ex nihilo) e com a bondade intrínseca da matéria afirmada por Gênesis 1. Se o mundo material é consequência da queda, então Deus não é o criador livre e soberano do cosmos, mas um administrador reativo que improvisa soluções para problemas imprevistos — uma concepção que reduz a onipotência e a presciência divinas. A tradição patrística (Irineu, Adversus Haereses IV.39; Atanásio, De Incarnatione 3–4) insiste em que a criação material é expressão da bondade divina, não punição.",
      fontesPrimarias:
        "ACO IV.1, pp. 249–250; Justiniano, Liber adversus Origenem, anátema 2; Epifânio de Salamina, Panarion 64.",
    },
    {
      numero: 3,
      titulo: "Condenação da limitação do poder divino e da igualdade final de todas as criaturas",
      textoPortugues:
        "Se alguém diz ou pensa que o poder de Deus é limitado e que Deus criou apenas aquilo que podia abarcar e compreender, e que a criação é coextensiva com a capacidade divina, de modo que Deus não poderia criar mais mundos ou mais seres do que os que de fato criou: seja anátema.",
      doutrinaCondenada:
        "Doutrina da limitação do poder divino (dynamis tou Theou) pela capacidade intelectual de Deus, segundo a qual Deus cria apenas aquilo que pode compreender e governar. Essa proposição, extraída de De Principiis I.2.10 e II.9.1, implica que a criação é finita não por livre decisão divina, mas por necessidade ontológica, o que contradiz a onipotência absoluta de Deus.",
      baseOrigenista:
        "Orígenes, De Principiis I.2.10: 'O poder de Deus não é ilimitado, pois o ilimitado é incompreensível até para Deus.' II.9.1: 'Deus criou tantos mundos quantos podia governar.'",
      refutacaoTeologica:
        "A doutrina contradiz a onipotência divina (pantokratōr) confessada pelo Símbolo Niceno-Constantinopolitano e a liberdade absoluta da criação. Se Deus é limitado pela própria capacidade, então não é verdadeiramente onipotente e sua criação é necessária, não livre. A tradição patrística (Gregório de Nissa, De Anima; João de Damasco, De Fide Orthodoxa I.8) insiste em que o poder de Deus é infinito e que a finitude da criação é resultado da livre vontade divina, não de uma limitação ontológica.",
      fontesPrimarias:
        "ACO IV.1, p. 250; Justiniano, Liber adversus Origenem, anátema 3; Gregório de Nissa, De Opificio Hominis 22.",
    },
    {
      numero: 4,
      titulo: "Condenação da natureza esférica e etérea dos corpos ressuscitados",
      textoPortugues:
        "Se alguém diz ou pensa que na ressurreição os corpos dos homens serão esféricos e etéreos, e que a forma corpórea atual será dissolvida e substituída por corpos de luz ou de fogo, de modo que a ressurreição não será do mesmo corpo que morreu, mas de uma nova forma espiritual desprovida de materialidade: seja anátema.",
      doutrinaCondenada:
        "Doutrina da ressurreição em corpos esféricos (sphairoeidē sōmata) e etéreos, segundo a qual os corpos ressuscitados não serão os mesmos corpos materiais que morreram (com sua forma, sexo e individualidade), mas corpos de pura luz ou fogo, de forma esférica e desprovidos de densidade material. Essa doutrina deriva da cosmologia platônica (Timeu 40a: 'A forma mais perfeita é a esfera') e da escatologia evagriana, que previa a dissolução final de toda a matéria.",
      baseOrigenista:
        "Orígenes, De Principiis II.10.3 e III.6.4–6: 'Os corpos ressuscitados serão etéreos e esféricos, como os corpos dos anjos.' Evágrio Pôntico, Kephalaia Gnostika I.56 e VI.76: 'Na apocatástase, os corpos serão dissolvidos e as almas retornarão à contemplação pura.'",
      refutacaoTeologica:
        "A doutrina contradiz a fé na ressurreição da carne (sarkos anastasis) confessada pelo Símbolo dos Apóstolos e pelo Símbolo Niceno-Constantinopolitano ('espero a ressurreição dos mortos'). Se os corpos ressuscitados não são os mesmos que morreram, então a ressurreição de Cristo é desprovida de significado soteriológico (1Co 15,20–23). A tradição patrística (Irineu, Adversus Haereses V.13; Tertuliano, De Resurrectione Carnis; Atanásio, De Incarnatione 22) insiste na identidade material entre o corpo mortal e o corpo glorificado.",
      fontesPrimarias:
        "ACO IV.1, p. 251; Justiniano, Liber adversus Origenem, anátema 4; Metódio de Olimpo, De Resurrectione (fragmentos preservados por Epifânio).",
    },
    {
      numero: 5,
      titulo: "Condenação da apocatástase universal e da salvação de Satanás",
      textoPortugues:
        "Se alguém diz ou pensa que o castigo dos demônios e dos homens ímpios é temporário e terá fim em algum momento, e que haverá restauração (apokatástasis) dos demônios e dos homens ímpios à sua condição original de bem-aventurança, de modo que Satanás e seus anjos serão finalmente salvos e reintegrados na comunhão divina: seja anátema.",
      doutrinaCondenada:
        "Apocatástase universal (apokatástasis pantōn), a doutrina de que todas as criaturas racionais — incluindo Satanás, os demônios e os condenados — serão finalmente restauradas à sua condição original de bem-aventurança e comunhão com Deus, e que as penas do inferno são temporárias e pedagógicas, não eternas. Essa é a mais célebre e controversa das doutrinas atribuídas a Orígenes.",
      baseOrigenista:
        "Orígenes, De Principiis I.6.3 e III.6.5–6: 'O fim de todas as coisas será a restauração de todos os seres racionais à contemplação de Deus.' Comentário aos Romanos V.10: 'Até o diabo será salvo no final.' Evágrio Pôntico, Kephalaia Gnostika I.40 e VI.27: 'A apocatástase é o retorno da mônada à sua unidade original.'",
      refutacaoTeologica:
        "A apocatástase contradiz as palavras explícitas de Cristo em Mt 25,41 ('Apartai-vos de mim, malditos, para o fogo eterno preparado para o diabo e seus anjos') e Mt 25,46 ('Estes irão para o castigo eterno, mas os justos para a vida eterna'). Se as penas são temporárias, a justiça divina é ilusória e a liberdade humana é irrelevante (a salvação seria inevitável, não livre). A tradição patrística (Basílio, Regulae Fusius Tractatae 26; João Crisóstomo, Homiliae in Matthaeum 80; Agostinho, De Civitate Dei XXI.17–23) rejeita unanimemente a apocatástase como incompatível com a eternidade das penas infernais.",
      fontesPrimarias:
        "ACO IV.1, pp. 251–252; Justiniano, Liber adversus Origenem, anátema 5; Agostinho, De Civitate Dei XXI.17.",
    },
    {
      numero: 6,
      titulo: "Condenação da preexistência de Cristo como intelecto criado (Nous primordial)",
      textoPortugues:
        "Se alguém diz ou pensa que o Verbo de Deus (Logos) é uma criatura entre as criaturas, um intelecto (nous) entre os intelectos, e que Cristo preexistiu à encarnação como um dos intelectos criados que, por não ter caído na queda primordial, foi exaltado acima dos demais e recebeu o nome de Filho de Deus por graça e não por natureza: seja anátema.",
      doutrinaCondenada:
        "Subordinação do Verbo à Mente Primordial (Nous) e redução de Cristo a um intelecto criado (ktistos nous) que se distingue dos demais apenas por não ter caído na queda primordial. Nessa visão, o Logos não é consubstancial (homoousios) ao Pai, mas é a mais perfeita das criaturas racionais, exaltado por mérito próprio à condição de 'Filho de Deus' por adoção, não por natureza.",
      baseOrigenista:
        "Orígenes, De Principiis I.2.2–3 e I.3.5: 'O Filho é gerado pela vontade do Pai e é subordinado ao Pai em substância.' Comentário ao Evangelho de João II.2: 'O Logos é o primeiro dos seres criados.' Evágrio Pôntico, Kephalaia Gnostika III.3: 'Cristo é o Nous que não caiu.'",
      refutacaoTeologica:
        "A doutrina é uma recaída no subordinacionismo ariano condenado pelo Concílio de Niceia (325) e pelo Concílio de Constantinopla I (381). Se o Logos é criatura, então a Trindade não é consubstancial e a encarnação não é a presença real de Deus no mundo, mas a presença de uma criatura exaltada. O anátema reafirma o homoousios niceno e a geração eterna do Filho 'antes de todos os séculos' (pro pantōn tōn aiōnōn).",
      fontesPrimarias:
        "ACO IV.1, p. 252; Justiniano, Liber adversus Origenem, anátema 6; Atanásio, Contra Arianos I.15–16.",
    },
    {
      numero: 7,
      titulo: "Condenação da interpretação alegórica extrema e da negação da historicidade bíblica",
      textoPortugues:
        "Se alguém diz ou pensa que as narrativas do Antigo e do Novo Testamento devem ser interpretadas exclusivamente em sentido alegórico e espiritual, de modo que a criação de Adão e Eva, o paraíso terrestre, a queda, o dilúvio e os demais eventos narrados nas Escrituras não possuem realidade histórica literal, mas são apenas símbolos de realidades espirituais: seja anátema.",
      doutrinaCondenada:
        "Alegorismo extremo que nega a historicidade literal das narrativas bíblicas e reduz toda a Escritura a um sistema de símbolos espirituais. Embora Orígenes não negasse sistematicamente a historicidade literal (ele aceitava a historicidade da maioria dos eventos narrados), sua ênfase no sentido espiritual (anagōgē) e sua tendência a interpretar alegoricamente passagens que considerava indignas da literalidade (como a criação de Eva da costela de Adão ou a árvore do conhecimento) foram radicalizadas por seus discípulos evagrianos até a negação total da historicidade.",
      baseOrigenista:
        "Orígenes, De Principiis IV.2.4–3.4: 'Muitas passagens das Escrituras não possuem sentido literal, mas apenas espiritual.' Homilias sobre o Gênesis I.1: 'O paraíso é uma alegoria da alma.' Evágrio Pôntico, Skemmata 1–10.",
      refutacaoTeologica:
        "A negação da historicidade bíblica destrói a base factual da fé cristã: se Adão não existiu historicamente, não houve queda histórica; se não houve queda histórica, não há necessidade de redenção histórica; se não há redenção histórica, a encarnação e a cruz são desprovidas de significado. A tradição patrística (Irineu, Adversus Haereses III.22; Tertuliano, De Anima 40; Agostinho, De Genesi ad Litteram) insiste na historicidade dos eventos fundamentais da Escritura, mesmo quando aceita interpretações alegóricas complementares.",
      fontesPrimarias:
        "ACO IV.1, p. 253; Justiniano, Liber adversus Origenem, anátema 7; Epifânio, Panarion 64.4.",
    },
    {
      numero: 8,
      titulo: "Condenação da doutrina da pluralidade dos mundos e dos ciclos cósmicos",
      textoPortugues:
        "Se alguém diz ou pensa que existem ou existirão outros mundos além deste, e que a criação e a destruição dos mundos se sucedem em ciclos infinitos, de modo que o mesmo drama da queda e da restauração se repete eternamente em mundos sucessivos: seja anátema.",
      doutrinaCondenada:
        "Doutrina da pluralidade dos mundos (kosmoi) e dos ciclos cósmicos (periodoi), segundo a qual Deus cria e destrói mundos sucessivos em um processo infinito de quedas e restaurações. Essa doutrina, extraída de De Principiis II.3.1–5, implica que a história da salvação não é um evento único e irrepetível, mas um padrão cíclico que se repete eternamente.",
      baseOrigenista:
        "Orígenes, De Principiis II.3.1–5: 'É provável que existam outros mundos além deste, e que a criação se repita em ciclos.' Comentário ao Evangelho de João I.19.",
      refutacaoTeologica:
        "A doutrina contradiz a unicidade e irrepetibilidade da encarnação e da redenção (Hb 9,26–28: 'Cristo se ofereceu uma vez por todas para tirar os pecados de muitos'). Se a encarnação se repete em ciclos infinitos, então o sacrifício de Cristo não é definitivo e a história da salvação é desprovida de sentido teleológico. A tradição patrística rejeita a ciclicidade como herança do estoicismo e do platonismo, incompatível com a linearidade da história bíblica (criação → queda → redenção → consumação).",
      fontesPrimarias:
        "ACO IV.1, p. 253; Justiniano, Liber adversus Origenem, anátema 8; Agostinho, De Civitate Dei XII.13–18.",
    },
    {
      numero: 9,
      titulo: "Condenação da subordinação do Filho e do Espírito na Trindade",
      textoPortugues:
        "Se alguém diz ou pensa que o Filho é subordinado ao Pai em substância e que o Espírito Santo é subordinado ao Filho, de modo que a Trindade não é consubstancial e coeterna, mas hierárquica e graduada em dignidade e poder: seja anátema.",
      doutrinaCondenada:
        "Subordinacionismo trinitário que estabelece uma hierarquia ontológica entre as três pessoas divinas: o Pai é supremo, o Filho é subordinado ao Pai, e o Espírito é subordinado ao Filho. Embora Orígenes não fosse ariano (sua teologia é anterior à controvérsia ariana), sua linguagem subordinacionista (o Filho como 'segundo Deus', deuterós theos) foi interpretada pelos arianos como precedente para sua doutrina.",
      baseOrigenista:
        "Orígenes, De Principiis I.3.5–8: 'O Filho é subordinado ao Pai em substância e em poder.' Comentário ao Evangelho de João XIII.25: 'O Espírito Santo é inferior ao Filho.'",
      refutacaoTeologica:
        "A doutrina contradiz o homoousios niceno (325) e a pneumatologia de Constantinopla I (381). A Trindade é consubstancial, coeterna e coigual em dignidade e poder; qualquer subordinação ontológica entre as pessoas divinas é heresia ariana ou macedoniana.",
      fontesPrimarias:
        "ACO IV.1, p. 254; Justiniano, Liber adversus Origenem, anátema 9; Atanásio, De Decretis Nicaenae Synodi 27.",
    },
    {
      numero: 10,
      titulo: "Condenação da doutrina de que a alma de Cristo preexistiu como intelecto puro",
      textoPortugues:
        "Se alguém diz ou pensa que a alma de Cristo preexistiu à encarnação como um dos intelectos criados e que se uniu ao Verbo de Deus antes da criação do mundo, de modo que a encarnação foi apenas a assunção de um corpo material por uma alma que já estava unida ao Logos desde a eternidade: seja anátema.",
      doutrinaCondenada:
        "Doutrina da preexistência da alma humana de Cristo (prohyparxis tēs psychēs tou Christou), segundo a qual a alma de Jesus existia como intelecto criado antes da encarnação e se uniu ao Logos em um momento anterior à criação do mundo. Essa doutrina tenta explicar a união hipostática mediante o modelo da queda e da restauração: a alma de Cristo seria o único intelecto que não caiu e que, por isso, foi escolhido como veículo da encarnação.",
      baseOrigenista:
        "Orígenes, De Principiis II.6.3–4: 'A alma de Cristo preexistiu e se uniu ao Logos por amor.' Comentário ao Evangelho de João I.37.",
      refutacaoTeologica:
        "A doutrina contradiz a união hipostática definida por Calcedônia (451): o Logos não se uniu a uma alma preexistente, mas assumiu a natureza humana completa (corpo e alma) no momento da encarnação. Se a alma de Cristo preexistiu, então a humanidade de Cristo não foi verdadeiramente assumida na história, mas é uma realidade pré-cósmica, o que esvazia a encarnação de seu significado histórico e soteriológico.",
      fontesPrimarias:
        "ACO IV.1, p. 254; Justiniano, Liber adversus Origenem, anátema 10; Leôncio de Bizâncio, Contra Nestorianos et Eutychianos III.",
    },
    {
      numero: 11,
      titulo: "Condenação da doutrina de que os corpos celestes (sol, lua, estrelas) são seres racionais",
      textoPortugues:
        "Se alguém diz ou pensa que o sol, a lua, as estrelas e as demais potências celestes são seres racionais e animados, dotados de almas e intelectos, e que foram colocados nos céus como consequência de uma queda menos grave do que a dos demônios e dos homens: seja anátema.",
      doutrinaCondenada:
        "Animação dos corpos celestes (empsychia tōn ouraniōn sōmatōn), doutrina de que os astros são seres racionais (logika zōa) dotados de almas e intelectos, criados como tais ou colocados nos céus como consequência de uma queda intermediária (menos grave que a dos demônios, mais grave que a dos anjos). Essa doutrina deriva da cosmologia platônica (Timeu 38c–39e) e da astrologia helenística, e foi incorporada por Orígenes em seu sistema teológico.",
      baseOrigenista:
        "Orígenes, De Principiis I.7.2–3: 'Os astros são seres racionais que receberam corpos luminosos como consequência de sua queda.' Homilias sobre o Gênesis I.7.",
      refutacaoTeologica:
        "A doutrina é incompatível com a criação dos astros como objetos inanimados (Gn 1,14–18: 'Deus fez os dois grandes luminares... para governar o dia e a noite') e com a proibição bíblica da astrologia (Dt 4,19; Is 47,13). Se os astros são seres racionais, então a adoração dos astros (astrolatria) não é idolatria, mas veneração legítima de criaturas racionais — uma conclusão que a tradição bíblica e patrística rejeita categoricamente.",
      fontesPrimarias:
        "ACO IV.1, p. 255; Justiniano, Liber adversus Origenem, anátema 11; Basílio, Hexaemeron III.9.",
    },
    {
      numero: 12,
      titulo: "Condenação da doutrina de que a ressurreição é apenas espiritual e não corporal",
      textoPortugues:
        "Se alguém diz ou pensa que a ressurreição dos mortos é apenas espiritual e alegórica, consistindo no despertar da alma para o conhecimento de Deus, e que não haverá ressurreição real dos corpos materiais que morreram e foram sepultados: seja anátema.",
      doutrinaCondenada:
        "Espiritualização da ressurreição (anastasis pneumatikē), que reduz a ressurreição a um evento puramente interior e gnóstico (o 'despertar' da alma para a gnose) e nega a ressurreição corporal literal. Essa doutrina é uma variante do docetismo e do gnosticismo valentiniano, que Orígenes não defendeu explicitamente, mas que foi desenvolvida por seus discípulos evagrianos.",
      baseOrigenista:
        "Evágrio Pôntico, Kephalaia Gnostika VI.76: 'A ressurreição é o retorno do nous à sua condição original de contemplação.' Orígenes, De Principiis II.10.3 (interpretação espiritualizada de 1Co 15,44: 'corpo espiritual').",
      refutacaoTeologica:
        "A doutrina contradiz a fé na ressurreição da carne (sarkos anastasis) e a ressurreição corporal de Cristo como primícias da ressurreição geral (1Co 15,20–23). Se a ressurreição é apenas espiritual, então o túmulo de Cristo não estava vazio e a fé cristã é vã (1Co 15,14). A tradição patrística (Irineu, Adversus Haereses V.13; Tertuliano, De Resurrectione Carnis; Gregório de Nissa, De Anima et Resurrectione) insiste na ressurreição corporal real.",
      fontesPrimarias:
        "ACO IV.1, p. 255; Justiniano, Liber adversus Origenem, anátema 12; 1Co 15,35–44.",
    },
    {
      numero: 13,
      titulo: "Condenação da doutrina de que o reino de Cristo terá fim",
      textoPortugues:
        "Se alguém diz ou pensa que o reino de Cristo terá fim e que, após a apocatástase universal, Cristo deixará de reinar e retornará à sua condição original de intelecto puro, de modo que a encarnação e a mediação de Cristo são temporárias e cessarão quando todas as criaturas racionais forem restauradas: seja anátema.",
      doutrinaCondenada:
        "Temporalidade do reino de Cristo (telos tēs basileias tou Christou), doutrina de que a encarnação e a mediação de Cristo são provisórias e cessarão quando a apocatástase universal for completada. Nessa visão, Cristo 'entregará o reino ao Pai' (1Co 15,24) no sentido de que deixará de ser mediador e retornará à sua condição pré-encarnacional de intelecto puro, e a Trindade retornará à sua unidade indiferenciada original.",
      baseOrigenista:
        "Orígenes, De Principiis III.5.7 e III.6.8: 'Quando todas as coisas forem submetidas a Cristo, Cristo se submeterá ao Pai, e Deus será tudo em todos.' Comentário ao Evangelho de João I.20.",
      refutacaoTeologica:
        "A doutrina contradiz a eternidade do reino de Cristo (Lc 1,33: 'Seu reino não terá fim'; Dn 7,14: 'Seu domínio é um domínio eterno') e a permanência da encarnação (Hb 13,8: 'Jesus Cristo é o mesmo ontem, hoje e para sempre'). Se a encarnação é temporária, então a humanidade de Cristo é descartável e a deificação (theōsis) da natureza humana é reversível — conclusões que destroem o fundamento soteriológico do cristianismo.",
      fontesPrimarias:
        "ACO IV.1, p. 256; Justiniano, Liber adversus Origenem, anátema 13; Lc 1,33; Dn 7,14.",
    },
    {
      numero: 14,
      titulo: "Condenação da doutrina de que todas as criaturas racionais serão absorvidas na divindade",
      textoPortugues:
        "Se alguém diz ou pensa que na consumação final todas as criaturas racionais — anjos, demônios e homens — serão absorvidas na essência divina e perderão sua identidade individual, de modo que a distinção entre criador e criatura será abolida e todas as hipóstases retornarão à mônada primordial indiferenciada: seja anátema.",
      doutrinaCondenada:
        "Absorção panteísta das criaturas na divindade (henōsis ousiōdēs), doutrina de que a apocatástase final implica a dissolução de todas as hipóstases criadas na essência divina, abolindo a distinção ontológica entre criador e criatura. Essa doutrina, de inspiração neoplatônica (a epistrophē de Proclo), transforma a salvação em aniquilação da individualidade e a Trindade em mônada indiferenciada.",
      baseOrigenista:
        "Evágrio Pôntico, Kephalaia Gnostika I.40 e VI.27: 'A apocatástase é o retorno da díade à mônada.' Orígenes, De Principiis III.6.8 (interpretação radical de 1Co 15,28: 'Deus será tudo em todos').",
      refutacaoTeologica:
        "A doutrina é panteísmo criptográfico e contradiz a distinção ontológica fundamental entre criador e criatura (Gn 1,1; Is 45,5–7). Se as criaturas são absorvidas na divindade, então a criação é ilusória e a história da salvação é um ciclo de emanação e reabsorção neoplatônico, não um drama de amor entre um Deus pessoal e suas criaturas livres. A tradição patrística (Gregório de Nissa, De Hominis Opificio; Máximo o Confessor, Ambigua ad Iohannem) insiste em que a deificação (theōsis) é participação na graça divina, não fusão ontológica com a essência divina.",
      fontesPrimarias:
        "ACO IV.1, p. 256; Justiniano, Liber adversus Origenem, anátema 14; Máximo o Confessor, Ambigua 7.",
    },
    {
      numero: 15,
      titulo: "Condenação geral de Orígenes, Evágrio e Dídimo e de todos os seus escritos heréticos",
      textoPortugues:
        "Se alguém não anatematiza Orígenes de Alexandria, Evágrio Pôntico e Dídimo o Cego, juntamente com todos os seus escritos ímpios e heréticos, e com todos os que aceitam e defendem as doutrinas acima mencionadas, e com todos os que ousam ou ousarão ensinar tais doutrinas no futuro: seja anátema.",
      doutrinaCondenada:
        "Condenação geral e abrangente de Orígenes, Evágrio Pôntico e Dídimo o Cego como hereges, de todos os seus escritos contrários à fé ortodoxa, e de todos os defensores passados, presentes e futuros de suas doutrinas. O anátema funciona como cláusula de encerramento, estendendo a condenação a qualquer forma de origenismo ou evagrianismo que possa surgir no futuro.",
      baseOrigenista:
        "Totalidade da obra teológica de Orígenes (De Principiis, Comentário ao Gênesis, Homilias), Evágrio Pôntico (Kephalaia Gnostika, Skemmata, Praktikos, Gnostikos) e Dídimo o Cego (De Trinitate, De Spiritu Sancto, Comentário ao Gênesis).",
      refutacaoTeologica:
        "O anátema geral é fundamentado na incompatibilidade global do sistema origenista-evagriano com os dogmas fundamentais da fé cristã: a criação ex nihilo, a bondade da matéria, a historicidade da queda e da redenção, a ressurreição corporal, a eternidade das penas infernais, a consubstancialidade trinitária e a permanência da encarnação. A condenação não implica que toda a obra de Orígenes seja herética (sua exegese bíblica e sua teologia espiritual contêm elementos de grande valor), mas que as proposições específicas condenadas nos anátemas 1–14 são incompatíveis com a fé da Igreja.",
      fontesPrimarias:
        "ACO IV.1, p. 257; Justiniano, Liber adversus Origenem, anátema 9; Cirilo de Citópolis, Vita Sabae 70–71.",
    },
  ],

  notaConclusiva:
    "Os quinze anátemas contra o origenismo e o evagrianismo representam a condenação mais abrangente de um sistema teológico especulativo na história dos concílios ecumênicos. Embora a questão de sua ratificação formal pelo Segundo Concílio de Constantinopla (553) permaneça debatida na historiografia acadêmica, sua autoridade dogmática é universalmente reconhecida pelas Igrejas Católica e Ortodoxa com base na recepção eclesial subsequente (Sínodo Quinissexto de 692, Segundo Concílio de Niceia de 787, magistério papal). Teologicamente, os anátemas delimitam as fronteiras da especulação cristã legítima: a fé cristã é compatível com a interpretação alegórica da Escritura, com a teologia mística e com a reflexão filosófica sobre a natureza de Deus, mas não com a negação da criação ex nihilo, da historicidade da encarnação, da ressurreição corporal, da eternidade das penas infernais e da consubstancialidade trinitária. O caso de Orígenes permanece como um dos mais complexos da história da teologia: um gênio intelectual cuja contribuição à exegese bíblica, à teologia trinitária e à espiritualidade cristã é imensurável, mas cujas especulações cosmológicas e escatológicas ultrapassaram os limites da ortodoxia e foram justamente condenadas pela Igreja. A distinção entre o 'Orígenes teólogo' (venerado por muitos Padres como mestre de exegese) e o 'origenismo' (sistema especulativo condenado) permanece válida e necessária para uma avaliação equilibrada de seu legado.",
};