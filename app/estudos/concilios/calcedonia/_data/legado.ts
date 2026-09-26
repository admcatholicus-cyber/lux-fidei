// ═══════════════════════════════════════════════════════════════════════════
// LEGADO DO CONCÍLIO DE CALCEDÔNIA (451 d.C.)
// ═══════════════════════════════════════════════════════════════════════════
// O impacto histórico do concílio organizado em cinco dimensões:
// teológica, eclesiástica, política, cultural-litúrgica e ecumênica.
// ═══════════════════════════════════════════════════════════════════════════

export interface PontoLegado {
  titulo: string;
  descricao: string;
}

export interface DimensaoLegado {
  titulo: string;
  introducao: string;
  pontos: PontoLegado[];
}

export const legado: {
  teologico: DimensaoLegado;
  eclesiastico: DimensaoLegado;
  politico: DimensaoLegado;
  cultural: DimensaoLegado;
  ecumenico: DimensaoLegado;
  resumoFinal: string;
} = {
  teologico: {
    titulo: "Legado Teológico",
    introducao:
      "No plano estritamente doutrinal, Calcedônia é o concílio DEFINIDOR da cristologia cristã. " +
      "Não porque tenha esgotado todas as questões, mas porque fixou a gramática dentro da qual " +
      "todas as cristologias posteriores — bizantinas, latinas medievais, escolásticas, reformadas, " +
      "modernas — foram obrigadas a se mover. Tomás de Aquino, Lutero, Calvino, Karl Barth, Karl " +
      "Rahner, Hans Urs von Balthasar: todos são, em sentido estrito, herdeiros de Calcedônia. " +
      "Sua influência ultrapassa em muito o campo católico e ortodoxo: praticamente todas as " +
      "confissões cristãs históricas (anglicana, luterana, reformada, metodista) aceitam a Definição " +
      "de 451 como formulação normativa da fé em Cristo, mesmo quando divergem em outros pontos.",
    pontos: [
      {
        titulo: "1. A fórmula calcedoniana como padrão universal da ortodoxia cristológica",
        descricao:
          "\"Um só e o mesmo Cristo, em duas naturezas, sem confusão, sem mudança, sem divisão, sem " +
          "separação, em uma pessoa e uma hipóstase\" tornou-se o marco absoluto pelo qual toda " +
          "cristologia posterior é medida. Cristologias que se afastam dessa fórmula (kenóticas " +
          "radicais do século XIX, teologias liberais que reduzem Cristo à humanidade, correntes " +
          "\"processuais\" contemporâneas) são identificadas como \"não calcedonianas\" ou " +
          "\"pós-calcedonianas\" e devem justificar seu afastamento. A Definição funciona como norma " +
          "regulativa da linguagem cristã sobre Cristo.",
      },
      {
        titulo: "2. Base para os concílios ecumênicos subsequentes (553, 681, 787)",
        descricao:
          "Os três concílios posteriores da Igreja indivisa foram, cada um, aprofundamentos ou " +
          "aplicações de Calcedônia. Constantinopla II (553) reinterpretou Calcedônia em chave " +
          "cirílica para acomodar os miafisitas (a chamada \"cristologia neocalcedoniana\"). " +
          "Constantinopla III (681) explicitou a dualidade das VONTADES e OPERAÇÕES em Cristo, " +
          "consequência lógica das duas naturezas de Calcedônia, contra o monotelismo. Niceia II " +
          "(787), embora sobre imagens, se apoia no realismo da Encarnação calcedoniana (a matéria " +
          "assumida por Deus pode ser venerada). Sem Calcedônia, os três concílios seguintes " +
          "seriam impensáveis.",
      },
      {
        titulo: "3. Fixação do vocabulário técnico grego (physis, hypostasis, prosōpon)",
        descricao:
          "A grande conquista intelectual foi distinguir com precisão physis (natureza / essência) " +
          "de hypostasis (subsistência concreta), reservando prosōpon como sinônimo forte de " +
          "hipóstase. Essa distinção conceitual — que os capadócios haviam elaborado para a " +
          "Trindade e Calcedônia aplicou à cristologia — tornou-se patrimônio comum da teologia " +
          "grega e latina. Sua influência se estende à filosofia (Boécio: \"persona est naturae " +
          "rationalis individua substantia\"), à escolástica medieval (Tomás, Suárez), à ontologia " +
          "moderna (Zubiri, Balthasar, Ratzinger) e mesmo à filosofia personalista contemporânea.",
      },
      {
        titulo: "4. A communicatio idiomatum como princípio hermenêutico permanente",
        descricao:
          "Ao fixar a hipóstase única do Verbo como sujeito de ambas as naturezas, Calcedônia " +
          "estabeleceu as bases ontológicas do princípio da communicatio idiomatum: os atributos " +
          "de cada natureza podem ser predicados da única pessoa. Este princípio governa toda a " +
          "linguagem cristã sobre Cristo (\"Deus nasceu\", \"o Filho de Deus foi crucificado\", \"o " +
          "Senhor da glória sofreu\") e permanece o instrumento hermenêutico central para a leitura " +
          "cristológica da Escritura, da liturgia e da devoção cristã em todas as tradições.",
      },
    ],
  },
  eclesiastico: {
    titulo: "Legado Eclesiástico",
    introducao:
      "Ao lado do imenso legado doutrinal, Calcedônia produziu consequências institucionais que " +
      "reconfiguraram a geografia eclesial cristã de modo irreversível. A elevação de Constantinopla " +
      "à condição de \"Nova Roma\" com jurisdição efetiva sobre três dioceses e sobre missões " +
      "\"entre os bárbaros\", a promoção de Jerusalém a patriarcado, e sobretudo o cisma que " +
      "arrancou do corpo imperial as igrejas do Egito, Síria e Armênia — tudo isso desenhou o mapa " +
      "eclesial que ainda persiste. Sem Calcedônia, não haveria Ortodoxia Oriental como bloco " +
      "distinto, nem talvez o Grande Cisma de 1054 na forma em que ocorreu.",
    pontos: [
      {
        titulo: "1. O Cisma de Calcedônia: a maior divisão da cristandade antiga",
        descricao:
          "Nenhum outro concílio ecumênico produziu ruptura eclesial tão profunda e duradoura. As " +
          "seis Igrejas Ortodoxas Orientais (Copta, Etíope, Eritreia, Siríaca, Armênia, Malankara) " +
          "somam hoje cerca de 60 milhões de fiéis e mantêm identidade eclesial contínua há quase " +
          "16 séculos. Cada uma preservou tradições litúrgicas, teológicas, monásticas e culturais " +
          "próprias, tornando-se civilizações cristãs em si mesmas. O cisma nunca foi superado " +
          "institucionalmente, embora a convergência cristológica seja hoje reconhecida (Declarações " +
          "Comuns de 1971–1996).",
      },
      {
        titulo: "2. Elevação de Constantinopla (Cânon 28) — semente do Cisma de 1054",
        descricao:
          "O Cânon 28, ao conceder à Nova Roma \"privilégios iguais\" aos da antiga Roma e " +
          "jurisdição sobre as dioceses do Ponto, Ásia e Trácia, forneceu a base canônica para a " +
          "consolidação do Patriarcado Ecumênico e para o desenvolvimento da eclesiologia " +
          "pentárquica bizantina. Ao mesmo tempo, ao ser protestado pelos legados papais e anulado " +
          "por Leão Magno (Ep. 105), tornou-se um dos pontos permanentes de tensão entre Roma e " +
          "Constantinopla. A divergência entre eclesiologia petrina (Roma) e eclesiologia " +
          "pentárquica (Bizâncio) sobre a fonte da primazia é uma das raízes remotas do Grande " +
          "Cisma de 1054 e ainda é ponto central no diálogo católico-ortodoxo (Ravena 2007, " +
          "Chieti 2016, Alexandria 2023).",
      },
      {
        titulo: "3. Elevação de Jerusalém a patriarcado — consolidação da Pentarquia",
        descricao:
          "Na Sessão 7, o acordo entre Juvenal de Jerusalém e Máximo de Antioquia conferiu a " +
          "Jerusalém jurisdição sobre as três Palestinas, elevando-a formalmente à condição de " +
          "patriarcado — o quinto e último a ser reconhecido na Antiguidade. Isto consolidou " +
          "institucionalmente o modelo pentárquico (Roma, Constantinopla, Alexandria, Antioquia, " +
          "Jerusalém) que se tornaria a estrutura eclesial clássica do cristianismo oriental e a " +
          "matriz da comunhão ortodoxa até hoje. Jerusalém, embora numericamente pequena, ganhou " +
          "prestígio simbólico permanente como sé dos lugares santos.",
      },
      {
        titulo: "4. Modelo de concílio ecumênico com participação imperial estruturada",
        descricao:
          "Calcedônia consolidou definitivamente o modelo de concílio ecumênico como assembleia " +
          "convocada e presidida logisticamente pelo imperador, com comissários imperiais " +
          "controlando a agenda, mas com decisões doutrinais entregues à assembleia episcopal. Esse " +
          "modelo, iniciado em Niceia 325, atingiu em Calcedônia sua expressão mais elaborada — " +
          "com dezenove comissários laicos, presidência formal de Anatólio, direção efetiva dos " +
          "comissários e votação dos bispos. Foi o padrão para os concílios subsequentes (553, " +
          "681, 787) e o modelo de referência para toda a teologia bizantina da sinfonia entre " +
          "Igreja e Império.",
      },
    ],
  },
  politico: {
    titulo: "Legado Político",
    introducao:
      "Calcedônia não foi apenas um evento eclesial: foi um marco na história política do Império " +
      "Romano tardo-antigo e uma das causas indiretas de sua transformação nos séculos VI e VII. " +
      "Ao alienar as províncias orientais mais ricas do Império (Egito, Síria) através do cisma " +
      "resultante, Calcedônia enfraqueceu decisivamente a coesão religiosa que sustentava a " +
      "obediência dessas províncias a Constantinopla. Quando os árabes chegaram no século VII, " +
      "encontraram populações cristãs em grande parte indiferentes ou até favoráveis à mudança de " +
      "regime — consequência direta e não intencional do cisma calcedoniano.",
    pontos: [
      {
        titulo: "1. Consolidação da simfonia Igreja-Estado no modelo bizantino",
        descricao:
          "Calcedônia levou às últimas consequências o modelo de simfonia (sinfonia harmônica entre " +
          "sacerdotium e imperium) inaugurado por Constantino em Niceia 325 e teorizado por Eusébio " +
          "de Cesareia. A convocação por Marciano, a presidência dos comissários imperiais, a " +
          "argumentação política explícita do Cânon 28 (\"Nova Roma\"), a promulgação civil da " +
          "Definição como lei do Império — tudo isso solidificou o modelo em que o imperador se " +
          "considera responsável pela ortodoxia como parte integrante de seu ofício. Este modelo " +
          "governará Bizâncio por mais mil anos e influenciará profundamente a autopercepção dos " +
          "reinos ortodoxos posteriores (Bulgária, Sérvia, Rússia).",
      },
      {
        titulo: "2. Fragmentação religiosa do Oriente e facilitação das conquistas árabes",
        descricao:
          "A tese defendida por W. H. C. Frend (The Rise of the Monophysite Movement, 1972) e " +
          "amplamente aceita pela historiografia contemporânea: o cisma calcedoniano alienou as " +
          "populações copta e siríaca do Império, transformando-as em minorias perseguidas em " +
          "seu próprio território. Quando os exércitos árabes conquistaram o Egito (642) e a Síria " +
          "(636–638), essas populações receberam os novos senhores com relativa indiferença ou " +
          "mesmo alívio, pois os árabes garantiram — em troca do tributo — liberdade religiosa " +
          "para os miafisitas que Bizâncio havia perseguido por dois séculos. Sem o cisma, o mapa " +
          "religioso do Mediterrâneo oriental poderia ter sido muito diferente.",
      },
      {
        titulo: "3. Precedente estruturante de intervenção imperial em questões dogmáticas",
        descricao:
          "Calcedônia consolidou o precedente segundo o qual a autoridade civil não apenas convoca " +
          "concílios, mas participa ativamente da formulação e promulgação de definições dogmáticas. " +
          "Esta prática, considerada natural no Bizâncio, produzirá tensões permanentes: seja com " +
          "Roma (que sempre reivindicou autonomia doutrinal), seja no próprio Oriente (as " +
          "controvérsias monoteléticas e iconoclastas mostrarão os limites da intervenção imperial). " +
          "O precedente calcedoniano informa toda a legislação religiosa de Justiniano (Novellae) " +
          "e todos os debates posteriores sobre relação Igreja-Estado no cristianismo oriental " +
          "e mesmo ocidental (galicanismo, josefismo).",
      },
      {
        titulo: "4. O debate permanente sobre \"cesaropapismo\" versus liberdade eclesial",
        descricao:
          "Calcedônia é o exemplo mais estudado da tensão entre autoridade civil e autoridade " +
          "eclesial na definição da fé. A questão \"até onde pode ir a intervenção imperial em " +
          "matéria dogmática?\" será formulada e reformulada em todas as épocas — do investidura " +
          "medieval à Reforma, do galicanismo francês ao Vaticano I. O modelo bizantino (simfonia " +
          "com forte peso imperial) e o modelo romano (autonomia do papado como garante da " +
          "ortodoxia contra pressões políticas) ambos se apoiam em leituras concorrentes da " +
          "experiência calcedoniana. É um debate ainda vivo, com formulações contemporâneas em " +
          "contextos como Rússia (relação Igreja Ortodoxa – Kremlin) ou Estados Unidos (relação " +
          "religião – espaço público).",
      },
    ],
  },
  cultural: {
    titulo: "Legado Cultural e Litúrgico",
    introducao:
      "O impacto de Calcedônia não se limitou aos manuais de dogmática: penetrou profundamente na " +
      "liturgia, na hinografia, na iconografia e na cultura material dos povos cristãos. A escolha " +
      "de Santa Eufêmia como \"padroeira do concílio\" e o desenvolvimento posterior do Cristo " +
      "Pantocrator na iconografia bizantina são apenas dois exemplos de como a definição dogmática " +
      "se traduziu em formas culturais duradouras.",
    pontos: [
      {
        titulo: "1. A festa de Santa Eufêmia (16 de setembro) e o \"milagre calcedoniano\"",
        descricao:
          "A escolha da basílica de Santa Eufêmia em Calcedônia para as sessões conciliares deu " +
          "origem a uma das mais famosas lendas piedosas da tradição bizantina, atestada já por " +
          "Evágrio Escolástico (Historia Ecclesiastica II.3) e desenvolvida na hagiografia posterior: " +
          "diante do impasse entre calcedonianos e miafisitas, os bispos teriam depositado ambas as " +
          "confissões de fé no sarcófago da mártir; três dias depois, o de Dioscoro estaria a seus " +
          "pés e o calcedoniano em suas mãos, indicando aprovação divina. Historicamente lendária, " +
          "a narrativa mostra como a memória do concílio se sacralizou. A festa de Santa Eufêmia " +
          "em 16 de setembro continua a ser celebrada como \"comemoração do IV Concílio Ecumênico\" " +
          "na liturgia bizantina, com hinos específicos que recordam a definição calcedoniana.",
      },
      {
        titulo: "2. Influência decisiva na iconografia bizantina — o Cristo Pantocrator",
        descricao:
          "A cristologia calcedoniana forneceu o fundamento teológico para o desenvolvimento da " +
          "iconografia bizantina clássica, especialmente do tipo do Cristo Pantocrator (o mais " +
          "antigo exemplar preservado é do Mosteiro de Santa Catarina do Sinai, século VI). O rosto " +
          "assimétrico do Pantocrator — um lado mais severo (divindade justiceira), outro mais " +
          "misericordioso (humanidade compassiva) — expressa visualmente as duas naturezas na " +
          "unidade da pessoa. Toda a lógica da iconografia bizantina posterior, defendida por João " +
          "Damasceno e Teodoro Estudita contra os iconoclastas, depende da premissa calcedoniana: " +
          "porque Cristo tem uma humanidade real, corpórea, subsistindo na hipóstase divina, sua " +
          "imagem pode e deve ser venerada como reveladora da pessoa do Verbo encarnado.",
      },
      {
        titulo: "3. Hinos, textos litúrgicos e o \"Domingo dos Padres do IV Concílio\"",
        descricao:
          "A liturgia bizantina celebra explicitamente o Concílio de Calcedônia no chamado " +
          "\"Domingo dos Santos Padres do IV Concílio Ecumênico\" (13 a 19 de julho), com hinos e " +
          "leituras que recordam a Definição. O hino litúrgico \"O Filho Unigênito e Verbo de Deus\" " +
          "(Ho Monogenēs Huios), atribuído tradicionalmente a Justiniano I e integrado à Divina " +
          "Liturgia bizantina, é uma condensação poética da cristologia calcedoniana e monogenista, " +
          "cantada em toda liturgia ortodoxa até hoje. No Ocidente, a Definição foi incorporada aos " +
          "livros litúrgicos e teológicos como texto normativo, sendo citada por Trento (Sess. III, " +
          "1546) como profissão de fé.",
      },
    ],
  },
  ecumenico: {
    titulo: "Legado Ecumênico",
    introducao:
      "Sem exagero, Calcedônia é a \"pedra de toque\" de todos os grandes diálogos ecumênicos " +
      "cristãos modernos. Diálogo católico-ortodoxo, católico-ortodoxo oriental, católico-anglicano, " +
      "católico-protestante, ortodoxo-anglicano: todos passam necessariamente pela questão da " +
      "recepção e interpretação de Calcedônia. Ao mesmo tempo, o século XX viu a descoberta de que " +
      "as divisões geradas por Calcedônia podem ser em grande parte convergidas — sem que isso " +
      "signifique unanimidade institucional imediata.",
    pontos: [
      {
        titulo: "1. Diálogos modernos com as Igrejas Ortodoxas Orientais (1964–hoje)",
        descricao:
          "Os diálogos com as igrejas não-calcedonianas, iniciados nas consultas não oficiais de " +
          "Aarhus (1964) e Bristol (1967), produziram nos últimos 60 anos uma série de Declarações " +
          "Cristológicas Comuns que reconhecem substancial convergência de fé sob linguagens " +
          "divergentes: Paulo VI – Yakoub III (1971), Paulo VI – Shenouda III (1973), João Paulo " +
          "II – Zakka I (1984), João Paulo II – Shenouda III (1988), Comissão Mista de Chambésy " +
          "(1989–1990). Estes documentos afirmam que a mesma fé cristológica está sendo confessada " +
          "em vocabulários diferentes — realizando ecumenicamente aquilo que Calcedônia não " +
          "conseguiu politicamente. A comunhão eucarística plena ainda não foi restabelecida, " +
          "mas a hospitalidade sacramental já é praticada em situações pastorais específicas.",
      },
      {
        titulo: "2. A Declaração Cristológica Comum de 1994 (Roma–Igreja Assíria do Oriente)",
        descricao:
          "Em 11 de novembro de 1994, João Paulo II e o Catholicos Mar Dinkha IV da Igreja Assíria " +
          "do Oriente (\"nestoriana\") assinaram no Vaticano uma Declaração Cristológica Comum " +
          "histórica, reconhecendo que ambas as igrejas confessam a mesma fé em Cristo, verdadeiro " +
          "Deus e verdadeiro homem, embora usando terminologias diferentes sobre Maria (Theotokos / " +
          "Mãe de Cristo). Este documento representa a superação parcial de um cisma que remonta a " +
          "Éfeso 431 — cisma ANTERIOR a Calcedônia e ainda mais antigo. Mostra que a convergência " +
          "é possível mesmo em casos aparentemente irremediáveis, e serve de modelo metodológico " +
          "para os diálogos calcedonianos-miafisitas.",
      },
      {
        titulo: "3. Calcedônia como \"pedra de toque\" em todos os diálogos ecumênicos contemporâneos",
        descricao:
          "Toda tentativa séria de restauração da unidade cristã deve enfrentar Calcedônia. Nos " +
          "diálogos católico-ortodoxo, é a base cristológica comum sobre a qual se pode discutir " +
          "as questões restantes (primazia, Filioque, purgatório). Nos diálogos com as igrejas " +
          "orientais, é o ponto exato da divergência a ser convergido. Nos diálogos com anglicanos " +
          "e luteranos, é o critério pelo qual se avalia a ortodoxia cristológica da tradição " +
          "reformada. Mesmo em diálogos com correntes cristãs modernas mais heterodoxas " +
          "(unitarianas, testemunhas de Jeová, mórmons), a rejeição da Definição calcedoniana é " +
          "identificada como o marcador exato do afastamento do cristianismo histórico. Neste " +
          "sentido, Calcedônia é o \"cânon dentro do cânon\" ecumênico — a fronteira móvel mas " +
          "reconhecível da identidade cristológica cristã.",
      },
    ],
  },
  resumoFinal:
    "O legado de Calcedônia é, em síntese, PARADOXAL. Por um lado, é o concílio da maior conquista " +
    "doutrinal da Antiguidade cristã: fixou a gramática cristológica dentro da qual toda a " +
    "teologia cristã posterior se moveu por 16 séculos, formulou os quatro advérbios apofáticos " +
    "que ainda hoje constituem o padrão da ortodoxia sobre Cristo, integrou as tradições " +
    "alexandrina e antioquena em uma síntese estável, e forneceu a base para todos os concílios " +
    "ecumênicos subsequentes. Por outro lado, é o concílio do maior cisma da Antiguidade: alienou " +
    "irrecuperavelmente as igrejas do Egito, Síria, Armênia e Etiópia, produzindo o que hoje " +
    "chamamos \"Ortodoxia Oriental\" (60 milhões de fiéis), fragmentou a coesão religiosa do " +
    "Império Bizantino e facilitou indiretamente as conquistas árabes. Ao mesmo tempo, o Cânon 28 " +
    "abriu a longa disputa Roma–Constantinopla que culminaria no Grande Cisma de 1054. Nenhum " +
    "outro concílio da história cristã acumulou tanto sucesso doutrinal e tanta ruptura eclesial. " +
    "É essa dupla face que faz de Calcedônia o concílio mais estudado, mais debatido e mais " +
    "decisivo da patrística — e ainda hoje, no início do século XXI, a pedra de toque diante da " +
    "qual toda cristologia e todo ecumenismo cristão devem se posicionar. Como escreveu Karl " +
    "Rahner: \"Calcedônia é ao mesmo tempo um fim e um começo\" — fim das grandes controvérsias " +
    "cristológicas antigas, começo da longa tarefa nunca concluída de dizer, em cada época, o " +
    "que significa confessar \"um só e o mesmo Cristo, verdadeiro Deus e verdadeiro homem\".",
};