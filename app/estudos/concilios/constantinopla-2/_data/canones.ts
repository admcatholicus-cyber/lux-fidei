// app/estudos/concilios/constantinopla-2/_data/canones.ts

export interface SecaoSentenca {
  parte: string;
  conteudo: string;
}

export interface ResumoAnatema {
  numero: number;
  materia: string;
  tipo: string;
  alcance: string;
}

export interface Novella {
  numero: string;
  ano: string;
  tema: string;
  relacaoComConcilio: string;
}

export interface ColecaoCanonica {
  nome: string;
  data: string;
  origem: string;
  tratamentoDe553: string;
}

export interface Canones {
  introducao: {
    titulo: string;
    ausenciaDeCanones: string;
    caraterDogmatico: string;
    comparacaoComOutrosConcilios: string;
    razoesHistoricas: string;
  };
  sentencaFinal: {
    titulo: string;
    contexto: string;
    estrutura: SecaoSentenca[];
    autoridadeJuridica: string;
    promulgacaoImperial: string;
  };
  anatemas14: {
    titulo: string;
    naturezaCanonica: string;
    resumos: ResumoAnatema[];
    forcaVinculante: string;
  };
  anatemas15: {
    titulo: string;
    estatutoCanonico: string;
    resumos: ResumoAnatema[];
    controversiaDeAutoridade: string;
  };
  decretosDisciplinares: {
    titulo: string;
    contextoLegislativo: string;
    novellae: Novella[];
    simbioseLegislativa: string;
  };
  notaSobreCanones: {
    titulo: string;
    recepcaoGeral: string;
    colecoes: ColecaoCanonica[];
    situacaoAtual: string;
  };
}

export const canones: Canones = {
  introducao: {
    titulo: "A Singularidade Canônica de Constantinopla II: Um Concílio sem Cânones Disciplinares",
    ausenciaDeCanones:
      "O Segundo Concílio de Constantinopla (553) constitui uma anomalia na história dos concílios ecumênicos da Igreja antiga: ao contrário de Niceia (325, que promulgou 20 cânones), Constantinopla I (381, com 4 cânones canônicos e 3 dogmáticos), Éfeso (431, com 8 cânones) e Calcedônia (451, com 27 ou 30 cânones), o concílio de 553 não promulgou nenhum cânone disciplinar, administrativo ou litúrgico avulso. Não há cânones sobre a ordenação de clérigos, a jurisdição episcopal, a disciplina monástica, a administração dos bens eclesiásticos, as penas para infrações clericais, a organização das províncias eclesiásticas ou qualquer outra matéria de governo eclesial. A totalidade da produção normativa do concílio está concentrada na Sentença Sinodal (Sententia Synodalis / Horos tēs Synodou) dogmática promulgada na oitava sessão (2 de junho de 553), que contém a confissão de fé, a condenação dos Três Capítulos e os catorze anátemas cristológicos. Essa ausência de legislação disciplinar não foi acidental, mas resulta de uma convergência de fatores históricos, teológicos e políticos que tornaram o concílio de 553 um evento singularmente focado na definição dogmática.",
    caraterDogmatico:
      "A razão fundamental da ausência de cânones disciplinares reside no caráter exclusivamente dogmático da convocação imperial. Justiniano I convocou o concílio com um único objetivo declarado: resolver a controvérsia dos Três Capítulos mediante a condenação formal dos escritos de Teodoro de Mopsuéstia, Teodoreto de Ciro e Ibas de Edessa. A carta imperial lida na primeira sessão (5 de maio de 553) não menciona nenhuma questão disciplinar e ordena aos bispos que se limitem ao exame dos textos heréticos. O concílio foi concebido como um tribunal teológico (synodos kritikē), não como uma assembleia legislativa (synodos nomothetikē), e sua agenda foi rigidamente controlada pela chancelaria imperial para evitar desvios que pudessem diluir o foco na condenação dos Três Capítulos. A crise do papado (ausência de Vigílio, emissão do Constitutum I, excomunhão na sétima sessão) consumiu toda a energia política do concílio, tornando impossível qualquer deliberação sobre matérias administrativas secundárias.",
    comparacaoComOutrosConcilios:
      "A comparação com os concílios ecumênicos anteriores e posteriores é instrutiva. Niceia (325) dedicou a maior parte de suas sessões a questões disciplinares (data da Páscoa, readmissão dos lapsi, jurisdição dos metropolitanos) e apenas uma fração à definição do homoousios. Calcedônia (451) promulgou 27 cânones disciplinares (incluindo o célebre Cânone 28 sobre a primazia de Constantinopla) além da Definição dogmática. O Terceiro Concílio de Constantinopla (680–681), que também foi predominantemente dogmático (condenação do monotelismo), igualmente não promulgou cânones disciplinares, confirmando que os concílios convocados para resolver crises cristológicas específicas tendiam a concentrar-se exclusivamente na definição de fé. O Concílio Quinissexto (Trullo, 692) foi convocado precisamente para suprir a lacuna disciplinar dos concílios V e VI, que haviam se limitado a questões dogmáticas — uma circunstância que confirma a percepção contemporânea de que Constantinopla II foi intencionalmente um concílio sem cânones.",
    razoesHistoricas:
      "Além da agenda dogmática imposta por Justiniano, três fatores históricos contribuíram para a ausência de cânones: (1) A composição desproporcionalmente oriental do concílio (165 bispos, dos quais apenas 6 eram ocidentais) tornava impossível legislar sobre questões disciplinares que afetavam o Ocidente sem a participação de seus representantes legítimos. (2) A legislação eclesiástica do Império Bizantino já era amplamente coberta pelas Novellae de Justiniano (particularmente as Novellae 6, 22, 42, 56, 79, 123 e 131), que regulamentavam em detalhe a vida clerical, monástica e diocesana, tornando redundante a produção de cânones conciliares sobre as mesmas matérias. (3) A crise de legitimidade provocada pela ausência do papa e pela excomunhão de Vigílio tornava politicamente imprudente a promulgação de cânones que poderiam ser contestados pelo Ocidente como ultra vires de um concílio cuja ecumenicidade já era questionada.",
  },

  sentencaFinal: {
    titulo: "A Sententia Synodalis da Oitava Sessão (2 de Junho de 553)",
    contexto:
      "A Sentença Sinodal (Horos tēs Synodou / Sententia Synodalis) foi o único ato normativo formalmente promulgado pelo concílio e constitui, portanto, a totalidade de sua produção canônica. Lida e aprovada na oitava e última sessão (2 de junho de 553) diante de 165 bispos, a Sentença é um documento extenso (c. 6.000 palavras no original grego, preservado nas Acta Concilii Oecumenici IV.1, pp. 209–248) que combina confissão de fé positiva, argumentação teológica, condenação dos Três Capítulos e anátemas formais. O documento foi redigido por uma comissão de teólogos imperiais e patriarcais nas semanas anteriores à sessão final e foi submetido aos bispos para subscrição nominal, num processo que durou várias horas. A Sentença foi comunicada ao imperador Justiniano no mesmo dia e promulgada como lei imperial (nomos) no dia seguinte (3 de junho de 553), adquirindo assim dupla autoridade: eclesiástica (como ato de um concílio ecumênico) e civil (como legislação do Império Romano).",
    estrutura: [
      {
        parte: "I. Preâmbulo e Profissão de Fé Trinitária",
        conteudo:
          "A Sentença abre com uma invocação trinitária e uma profissão de fé que reafirma os Símbolos de Niceia (325) e Constantinopla (381), declarando que 'a fé dos quatro concílios ecumênicos — Niceia, Constantinopla, Éfeso e Calcedônia — é uma e indivisível, e quem quer que se afaste dela em qualquer ponto é alheio à Igreja católica e apostólica.' O preâmbulo estabelece a continuidade dogmática entre os cinco concílios e rejeita tanto a inovação herética quanto o conservadorismo que recusa o desenvolvimento legítimo da doutrina.",
      },
      {
        parte: "II. Exposição Cristológica Neocalcedoniana",
        conteudo:
          "A segunda seção apresenta a cristologia do concílio em termos explicitamente cirilianos e neocalcedonianos: confessa 'um e o mesmo Jesus Cristo, verdadeiro Deus e verdadeiro homem, consubstancial ao Pai segundo a divindade e consubstancial a nós segundo a humanidade, em duas naturezas sem confusão, sem mudança, sem divisão, sem separação, unidas hipostaticamente na única pessoa do Verbo de Deus.' A seção insiste na compatibilidade entre o Tomo de Leão e os Doze Capítulos de Cirilo e rejeita qualquer leitura de Calcedônia que se afaste da tradição ciriliana.",
      },
      {
        parte: "III. Justificativa da Condenação dos Três Capítulos",
        conteudo:
          "A terceira seção, a mais extensa do documento, apresenta a justificativa teológica e canônica para a condenação dos Três Capítulos. A Sentença argumenta que (1) a condenação de hereges mortos é legítima e tem precedentes na tradição eclesiástica; (2) a reabilitação calcedonense de Teodoreto e Ibas foi um ato processual, não dogmático, e não implica a aprovação de seus escritos heréticos; (3) os escritos de Teodoro de Mopsuéstia contêm proposições objetivamente nestorianas que nunca foram examinadas por nenhum concílio ecumênico; (4) a condenação é necessária para a paz da Igreja e para a reconciliação com os miáfisitas.",
      },
      {
        parte: "IV. Condenação Formal dos Três Capítulos",
        conteudo:
          "A quarta seção contém a condenação nominal e formal: 'Anatematizamos Teodoro de Mopsuéstia e todos os seus escritos ímpios; anatematizamos os escritos de Teodoreto de Ciro contra a reta fé, contra os Doze Capítulos do santo Cirilo e contra o Sínodo de Éfeso; anatematizamos a Epístola que se diz Ibas ter escrito a Maris o Persa.' A condenação é acompanhada da declaração de que 'quem quer que defenda ou excuse estes escritos ou seus autores é igualmente anátema'.",
      },
      {
        parte: "V. Os Catorze Anátemas Dogmáticos",
        conteudo:
          "A quinta seção contém os catorze anátemas (anathematismoi) que detalham as proposições dogmáticas do concílio, cobrindo a Trindade (1), as duas natividades do Logos (2), a unidade de sujeito em Cristo (3), a união hipostática (4), o uso legítimo de 'em duas naturezas' (5), a Theotokos (6), a adoração única (7–8), a fórmula teopasquista (9), a divindade do crucificado (10), e as condenações de Teodoro (11), Teodoreto (12), Ibas (13) e de todos os defensores dos Três Capítulos (14).",
      },
      {
        parte: "VI. Exortação Final e Cláusula de Subscrição",
        conteudo:
          "A Sentença encerra com uma exortação à unidade da Igreja e uma cláusula de subscrição obrigatória: 'Todos os que receberam esta sentença e a subscreveram são membros da Igreja católica e apostólica; todos os que a rejeitam estão separados do corpo de Cristo.' A lista de 165 subscrições episcopais, organizadas por província eclesiástica, encerra o documento.",
      },
    ],
    autoridadeJuridica:
      "A Sentença Sinodal possui dupla autoridade no ordenamento jurídico bizantino: (1) como horos (definição dogmática) de um concílio ecumênico, ela é vinculante para toda a Igreja em matéria de fé e sua rejeição constitui heresia formal passível de excomunhão; (2) como nomos (lei imperial) promulgada por Justiniano, ela é vinculante para todos os súditos do Império e sua violação constitui crime de lesa-majestade (crimen laesae maiestatis) passível de deposição, exílio e confisco de bens. A fusão de autoridade eclesiástica e civil é característica do cesaropapismo justinianeu e seria contestada no Ocidente, onde a distinção entre forum internum (espiritual) e forum externum (temporal) era mais rigorosamente observada.",
    promulgacaoImperial:
      "A promulgação imperial da Sentença ocorreu em 3 de junho de 553, um dia após a oitava sessão, mediante uma sacra (decreto imperial) que ordenava a publicação do documento em todas as províncias do Império e a sua inserção nos registros públicos (acta publica). A sacra determinava que todos os bispos, clérigos e monges do Império subscrevessem a Sentença no prazo de seis meses, sob pena de deposição e exílio. A aplicação foi rigorosa no Oriente, onde a maioria dos bispos subscreveu sem resistência, mas problemática no Ocidente, onde os bispos do norte da Itália, da Ilíria e da Gália recusaram a subscrição e deram início ao Cisma Tricapitulino.",
  },

  anatemas14: {
    titulo: "Estatuto Canônico dos Catorze Anátemas Dogmáticos",
    naturezaCanonica:
      "Os catorze anátemas da Sentença Sinodal não são cânones no sentido técnico-canônico do termo (regras disciplinares com sanções específicas), mas anátemas dogmáticos (anathematismoi dogmatikoi) — fórmulas de exclusão eclesial vinculadas à confissão de fé. A distinção é fundamental: enquanto os cânones disciplinares regulamentam a vida eclesial e podem ser modificados por concílios subsequentes (como os cânones sobre o celibato clerical ou a jurisdição patriarcal), os anátemas dogmáticos definem as fronteiras da ortodoxia e são considerados irreformáveis, pois expressam verdades de fé reveladas. Os catorze anátemas de 553 pertencem à categoria dos anátemas dogmáticos e possuem, portanto, autoridade perpétua e irreformável no entendimento das Igrejas Católica e Ortodoxa.",
    resumos: [
      { numero: 1, materia: "Consubstancialidade trinitária e adoração da Trindade em três hipóstases", tipo: "Dogmático-trinitário", alcance: "Universal e perpétuo; reafirmação do homoousios niceno" },
      { numero: 2, materia: "Duas natividades do Verbo: eterna (do Pai) e temporal (de Maria)", tipo: "Dogmático-cristológico", alcance: "Universal e perpétuo; exclui arianismo e adocionismo" },
      { numero: 3, materia: "Unidade de sujeito: um só Cristo autor dos milagres e da paixão", tipo: "Dogmático-cristológico", alcance: "Universal e perpétuo; exclui nestorianismo de dois sujeitos" },
      { numero: 4, materia: "União hipostática real contra uniões morais, relacionais ou por inhabitação", tipo: "Dogmático-cristológico", alcance: "Universal e perpétuo; exclui teodorismo e nestorianismo mitigado" },
      { numero: 5, materia: "Uso legítimo de 'em duas naturezas' contra divisão e contra miáfisismo radical", tipo: "Dogmático-hermenêutico", alcance: "Universal e perpétuo; norma de interpretação de Calcedônia" },
      { numero: 6, materia: "Theotokos própria e verdadeira contra concessão nominal 'por relação'", tipo: "Dogmático-mariológico", alcance: "Universal e perpétuo; reafirmação e radicalização de Éfeso 431" },
      { numero: 7, materia: "Adoração única do Verbo encarnado com sua carne", tipo: "Dogmático-litúrgico", alcance: "Universal e perpétuo; exclui diteísmo devocional" },
      { numero: 8, materia: "Rejeição da dupla adoração (divina e humana separadas)", tipo: "Dogmático-litúrgico", alcance: "Universal e perpétuo; complemento do anátema 7" },
      { numero: 9, materia: "Fórmula teopasquista: 'Um da Trindade padeceu na carne'", tipo: "Dogmático-soteriológico", alcance: "Universal e perpétuo; exclui patripassianismo e nestorianismo impassibilista" },
      { numero: 10, materia: "O crucificado é verdadeiro Deus e Um da Trindade", tipo: "Dogmático-soteriológico", alcance: "Universal e perpétuo; exclui adocionismo e psilantropismo" },
      { numero: 11, materia: "Condenação de Teodoro de Mopsuéstia e de todos os seus escritos", tipo: "Dogmático-disciplinar", alcance: "Histórico e vinculante; condenação pessoal e textual" },
      { numero: 12, materia: "Condenação dos escritos de Teodoreto contra Cirilo e Éfeso", tipo: "Dogmático-disciplinar", alcance: "Histórico e vinculante; condenação circunscrita aos escritos anticyrilianos" },
      { numero: 13, materia: "Condenação da Epístola de Ibas a Maris o Persa", tipo: "Dogmático-disciplinar", alcance: "Histórico e vinculante; reinterpretação da aprovação calcedonense" },
      { numero: 14, materia: "Anátema geral contra todos os defensores dos Três Capítulos", tipo: "Dogmático-disciplinar", alcance: "Universal e atemporal; abrange defensores passados, presentes e futuros" },
    ],
    forcaVinculante:
      "A força vinculante dos catorze anátemas varia conforme sua natureza. Os anátemas 1–10, sendo definições dogmáticas de fé trinitária e cristológica, possuem autoridade irreformável e são aceitos como vinculantes por todas as Igrejas que reconhecem os concílios ecumênicos (Católica, Ortodoxa, Ortodoxas Orientais em parte). Os anátemas 11–13, sendo condenações históricas de textos e autores específicos, possuem autoridade vinculante quanto à heresia dos textos condenados, mas sua aplicação a autores falecidos há mais de um milênio é hoje considerada de relevância principalmente histórica e acadêmica. O anátema 14, como cláusula geral de exclusão, possui autoridade perpétua quanto ao princípio de que a defesa de proposições nestorianas é incompatível com a fé ortodoxa, embora sua aplicação concreta dependa do contexto eclesial de cada época.",
  },

  anatemas15: {
    titulo: "Estatuto Canônico dos Quinze Anátemas Anti-Origenistas",
    estatutoCanonico:
      "O estatuto canônico dos quinze anátemas contra Orígenes, Evágrio Pôntico e Dídimo o Cego é o problema mais complexo de toda a produção normativa associada ao Segundo Concílio de Constantinopla. Como discutido no arquivo de dados sobre o origenismo (_data/origenismo.ts), a questão de se esses anátemas foram formalmente ratificados pelo concílio ecumênico ou apenas pelo sínodo patriarcal pré-conciliar permanece debatida na historiografia. Do ponto de vista canônico, a posição majoritária nas Igrejas Católica e Ortodoxa é que os quinze anátemas possuem autoridade dogmática vinculante com base em três fundamentos: (1) a recepção eclesial universal ao longo de mais de 1.400 anos; (2) a ratificação explícita pelo Sínodo Quinissexto (Trullo, 692), que os incluiu entre as decisões do Quinto Concílio Ecumênico; (3) a confirmação pelo Segundo Concílio de Niceia (787) e pelo magistério papal subsequente. Contudo, do ponto de vista estritamente histórico-crítico, os anátemas não constam das atas oficiais do concílio (ACO IV.1–2) e sua associação com Constantinopla II é uma tradição posterior ao século VI.",
    resumos: [
      { numero: 1, materia: "Pré-existência das almas e queda primordial dos intelectos (noes)", tipo: "Dogmático-antropológico", alcance: "Universal; exclui preexistencialismo platônico" },
      { numero: 2, materia: "Criação do mundo material como consequência da queda, não como ato livre de Deus", tipo: "Dogmático-cosmológico", alcance: "Universal; exclui gnose e maniqueísmo" },
      { numero: 3, materia: "Limitação do poder divino e finitude necessária da criação", tipo: "Dogmático-teológico", alcance: "Universal; exclui limitação da onipotência" },
      { numero: 4, materia: "Corpos ressuscitados esféricos e etéreos, não idênticos aos corpos mortais", tipo: "Dogmático-escatológico", alcance: "Universal; reafirma ressurreição da carne" },
      { numero: 5, materia: "Apocatástase universal e salvação final de Satanás e dos demônios", tipo: "Dogmático-escatológico", alcance: "Universal; reafirma eternidade das penas" },
      { numero: 6, materia: "Cristo como intelecto criado (nous) entre intelectos, não consubstancial ao Pai", tipo: "Dogmático-trinitário", alcance: "Universal; reafirma homoousios niceno" },
      { numero: 7, materia: "Alegorismo extremo e negação da historicidade bíblica", tipo: "Dogmático-hermenêutico", alcance: "Universal; reafirma historicidade da revelação" },
      { numero: 8, materia: "Pluralidade dos mundos e ciclos cósmicos infinitos", tipo: "Dogmático-cosmológico", alcance: "Universal; reafirma unicidade da criação e da redenção" },
      { numero: 9, materia: "Subordinação trinitária do Filho ao Pai e do Espírito ao Filho", tipo: "Dogmático-trinitário", alcance: "Universal; reafirma coigualdade trinitária" },
      { numero: 10, materia: "Preexistência da alma humana de Cristo como intelecto criado", tipo: "Dogmático-cristológico", alcance: "Universal; reafirma união hipostática na encarnação" },
      { numero: 11, materia: "Corpos celestes (astros) como seres racionais e animados", tipo: "Dogmático-cosmológico", alcance: "Universal; exclui astrolatria e animismo cósmico" },
      { numero: 12, materia: "Ressurreição puramente espiritual, sem corpo material", tipo: "Dogmático-escatológico", alcance: "Universal; reafirma ressurreição corporal" },
      { numero: 13, materia: "Temporalidade do reino de Cristo e cessação da encarnação", tipo: "Dogmático-escatológico", alcance: "Universal; reafirma eternidade do reino e da encarnação" },
      { numero: 14, materia: "Absorção panteísta das criaturas na essência divina", tipo: "Dogmático-teológico", alcance: "Universal; reafirma distinção criador-criatura" },
      { numero: 15, materia: "Condenação geral de Orígenes, Evágrio e Dídimo e de todos os defensores", tipo: "Dogmático-disciplinar", alcance: "Universal e atemporal; cláusula de encerramento" },
    ],
    controversiaDeAutoridade:
      "A controvérsia sobre a autoridade dos quinze anátemas anti-origenistas possui três dimensões: (1) Histórica: os anátemas foram ratificados pelo concílio ecumênico ou apenas pelo sínodo patriarcal? A historiografia contemporânea (Price 2009, Hombergen 2001) tende a favorecer a segunda opção, mas a tradição eclesial sustenta a primeira. (2) Teológica: a condenação da apocatástase (anátema 5) é uma definição dogmática irreformável ou uma decisão disciplinar contextual? A maioria dos teólogos católicos e ortodoxos sustenta que a eternidade das penas infernais é de fide definita, embora alguns teólogos contemporâneos (Hans Urs von Balthasar, David Bentley Hart) tenham reaberto o debate sobre a possibilidade teológica da esperança de salvação universal (não como doutrina, mas como esperança orante). (3) Canônica: os anátemas podem ser revogados por um concílio posterior? No entendimento católico, as definições dogmáticas de concílios ecumênicos são irreformáveis (Vaticano I, Pastor Aeternus, 1870). No entendimento ortodoxo, a recepção eclesial (apodochē) é o critério final de autoridade, e os anátemas foram recebidos universalmente.",
  },

  decretosDisciplinares: {
    titulo: "A Disciplina Eclesiástica nas Novellae de Justiniano: Legislação Paralela ao Concílio",
    contextoLegislativo:
      "A ausência de cânones disciplinares no Segundo Concílio de Constantinopla não significa que a disciplina eclesiástica do Império Bizantino estivesse desregulamentada no período. Pelo contrário, Justiniano I foi o mais prolífico legislador eclesiástico da história do Império Romano, e suas Novellae Constitutiones (Novas Constituições), emitidas entre 535 e 565 como complemento ao Corpus Iuris Civilis (Codex, Digesta, Institutiones), contêm a mais extensa e detalhada regulamentação da vida eclesial produzida por qualquer imperador romano. As Novellae cobrem virtualmente todos os aspectos da disciplina eclesiástica que normalmente seriam tratados por cânones conciliares: ordenação de clérigos, celibato, administração de bens eclesiásticos, jurisdição episcopal e patriarcal, disciplina monástica, liturgia, heresia e cisma. A existência dessa legislação imperial paralela tornou desnecessária — e politicamente inconveniente — a promulgação de cânones conciliares sobre as mesmas matérias.",
    novellae: [
      {
        numero: "Novella 6",
        ano: "535",
        tema: "Ordenação de bispos, presbíteros e diáconos; requisitos de idade, moralidade e formação teológica; proibição da simonia (compra e venda de ordens sagradas).",
        relacaoComConcilio:
          "Regulamenta matérias que em outros concílios (Niceia, Calcedônia) foram tratadas por cânones disciplinares. A Novella 6 substitui e atualiza os cânones nicenos sobre a ordenação, adaptando-os às condições do Império do século VI.",
      },
      {
        numero: "Novella 22",
        ano: "536",
        tema: "Celibato clerical e continência dos bispos; proibição de coabitação de mulheres (syneisaktai) nas residências episcopais; regulamentação do casamento dos clérigos de ordens menores.",
        relacaoComConcilio:
          "Desenvolve e radicaliza o Cânone 3 de Niceia (325) e o Cânone 12 de Calcedônia (451) sobre a continência clerical. A Novella 22 é mais rigorosa que os cânones conciliares e reflete a tendência ascética da legislação justinianéia.",
      },
      {
        numero: "Novella 42",
        ano: "537",
        tema: "Privilégios e imunidades da Igreja de Constantinopla; jurisdição do patriarca sobre as dioceses da Trácia, Ásia e Ponto; regulamentação das apelações eclesiásticas.",
        relacaoComConcilio:
          "Implementa e amplia o Cânone 28 de Calcedônia (451) sobre a primazia de Constantinopla, que o papado havia recusado ratificar. A Novella 42 é um exemplo de como a legislação imperial suplantava os cânones conciliares quando estes eram contestados.",
      },
      {
        numero: "Novella 56",
        ano: "538",
        tema: "Disciplina monástica; clausura dos mosteiros; administração dos bens monásticos; proibição de monges vagantes (gyrovagi); subordinação dos mosteiros ao bispo diocesano.",
        relacaoComConcilio:
          "Regulamenta a vida monástica que o Concílio de Calcedônia (Cânone 4) havia tratado de forma sumária. A Novella 56 é particularmente relevante para o contexto de Constantinopla II, pois a crise origenista era essencialmente uma crise monástica palestina.",
      },
      {
        numero: "Novella 79",
        ano: "539",
        tema: "Privilégios dos clérigos em processos judiciais; foro eclesiástico para causas envolvendo clérigos; proibição de tortura de bispos e presbíteros.",
        relacaoComConcilio:
          "Desenvolve o princípio do privilegium fori (privilégio de foro) que os cânones de Calcedônia (Cânones 9 e 17) haviam estabelecido de forma incipiente. A Novella 79 consolida a autonomia jurídica do clero no Império.",
      },
      {
        numero: "Novella 123",
        ano: "546",
        tema: "Legislação abrangente sobre a organização eclesiástica: eleição e consagração de bispos, direitos e deveres dos metropolitanos, administração dos bens da Igreja, disciplina do clero secular e regular, regulamentação dos hospitais e orfanatos eclesiásticos.",
        relacaoComConcilio:
          "A Novella 123 é a mais extensa e importante das leis eclesiásticas de Justiniano e funciona como um verdadeiro 'código de direito canônico' imperial, cobrindo todas as matérias que normalmente seriam tratadas por cânones conciliares. Sua existência torna compreensível a ausência de cânones disciplinares em Constantinopla II.",
      },
      {
        numero: "Novella 131",
        ano: "545",
        tema: "Hierarquia dos cinco patriarcados (pentarquia): Roma, Constantinopla, Alexandria, Antioquia e Jerusalém; ordem de precedência; jurisdição territorial de cada patriarcado.",
        relacaoComConcilio:
          "A Novella 131 é o documento fundacional da doutrina da pentarquia, que Justiniano promoveu como modelo de governo eclesial. A legislação sobre a pentarquia é diretamente relevante para o contexto de Constantinopla II, pois a crise do papado (Vigílio) expôs as tensões inerentes ao modelo pentárquico quando um dos cinco patriarcas entrava em conflito com os demais.",
      },
    ],
    simbioseLegislativa:
      "A relação entre as Novellae de Justiniano e o Segundo Concílio de Constantinopla é de simbiose legislativa: o concílio tratou da definição dogmática (matéria de fé), enquanto as Novellae trataram da disciplina eclesiástica (matéria de governo), e ambas as esferas eram necessárias para o funcionamento da Igreja imperial. Justiniano concebia a Igreja e o Estado como dois aspectos de uma única realidade teopolítica (symphonia), e sua legislação refletia essa visão: as Novellae não eram meramente leis civis sobre assuntos eclesiásticos, mas atos de governo pastoral do imperador como episkopos tōn ektos ('bispo dos assuntos externos'). A Sentença Sinodal de 553 e as Novellae formam, assim, um corpus normativo integrado que regulava simultaneamente a fé e a disciplina da Igreja bizantina — uma integração que o Ocidente medieval rejeitaria com a doutrina gelasiana das 'duas espadas' (Dionísio e Gelasius I, Epistula 8).",
  },

  notaSobreCanones: {
    titulo: "Recepção dos Decretos de 553 nas Coleções Canônicas Posteriores",
    recepcaoGeral:
      "A recepção dos decretos do Segundo Concílio de Constantinopla nas coleções canônicas posteriores é um processo complexo e gradual que reflete as vicissitudes da relação entre Oriente e Ocidente nos séculos VI a IX. No Oriente, a recepção foi imediata e unânime: a Sentença Sinodal foi incorporada às coleções canônicas bizânicas a partir do século VII e recebeu confirmação formal pelo Sínodo Quinissexto (Trullo, 692) e pelo Segundo Concílio de Niceia (787). No Ocidente, a recepção foi lenta, contestada e fragmentária: o Cisma Tricapitulino (c. 553–c. 700) impediu a aceitação dos decretos de 553 no norte da Itália, na Ilíria e na Gália meridional por mais de um século, e mesmo após a reconciliação, a autoridade canônica do concílio permaneceu ambígua até o período carolíngio.",
    colecoes: [
      {
        nome: "Collectio Dionysiana (Dionysiana-Hadriana)",
        data: "c. 500 (original); 774 (revisão hadriana)",
        origem: "Roma (Dionísio, o Exíguo); Aquisgrão (revisão para Carlos Magno)",
        tratamentoDe553:
          "A Collectio Dionysiana original (c. 500) é anterior ao concílio de 553 e, portanto, não o inclui. A revisão hadriana (774), enviada pelo Papa Adriano I a Carlos Magno, inclui os decretos de Constantinopla II entre os concílios ecumênicos, sinalizando a aceitação formal do concílio pelo papado carolíngio. Contudo, a inclusão é limitada à Sentença Sinodal e aos catorze anátemas; os quinze anátemas anti-origenistas não constam da Dionysiana-Hadriana.",
      },
      {
        nome: "Collectio Hispana (Isidoriana)",
        data: "c. 633 (original); c. 700 (revisão)",
        origem: "Península Ibérica (atribuída a Isidoro de Sevilha)",
        tratamentoDe553:
          "A Collectio Hispana inclui Constantinopla II entre os concílios ecumênicos e transcreve a Sentença Sinodal em tradução latina. A coleção foi particularmente influente na Península Ibérica e na Gália meridional, regiões que haviam resistido inicialmente à condenação dos Três Capítulos. A inclusão de 553 na Hispana sinaliza a reconciliação das dioceses ibéricas com o concílio no início do século VII.",
      },
      {
        nome: "Synagoge in 50 Titulos (João Escolástico)",
        data: "c. 560–570",
        origem: "Constantinopla (João Escolástico, futuro patriarca João III)",
        tratamentoDe553:
          "A Synagoge de João Escolástico é a primeira coleção canônica bizantina a incluir os decretos de Constantinopla II. João, que era contemporâneo do concílio e participou de suas sessões como apocrisiário de Antioquia, incorporou a Sentença Sinodal e os catorze anátemas como parte integrante do corpus canônico imperial. A Synagoge não inclui os quinze anátemas anti-origenistas, o que corrobora a tese de que estes não foram formalmente ratificados pelo concílio ecumênico.",
      },
      {
        nome: "Nomocanon in 14 Titulos",
        data: "c. 610 (primeira recensão); c. 883 (recensão de Fócio)",
        origem: "Constantinopla (tradição bizantina)",
        tratamentoDe553:
          "O Nomocanon in 14 Titulos, a mais importante coleção canônica bizantina, inclui Constantinopla II entre os seis concílios ecumênicos (Niceia, Constantinopla I, Éfeso, Calcedônia, Constantinopla II, Constantinopla III) e transcreve a Sentença Sinodal como norma de fé vinculante. A recensão de Fócio (883) acrescenta referências aos quinze anátemas anti-origenistas, associando-os explicitamente ao Quinto Concílio Ecumênico — uma das primeiras fontes a fazer essa associação de forma inequívoca.",
      },
      {
        nome: "Concílio Quinissexto (Trullo)",
        data: "692",
        origem: "Constantinopla (convocado por Justiniano II)",
        tratamentoDe553:
          "O Sínodo Quinissexto (Synodos Penthektē), também conhecido como Concílio de Trullo, é o momento decisivo da recepção canônica de Constantinopla II. O Cânone 1 do Trullo enumera os seis concílios ecumênicos (incluindo Constantinopla II) e declara que seus decretos possuem autoridade canônica plena e irrevogável. O Cânone 2 do Trullo lista os 'cânones dos santos padres' que a Igreja recebe como vinculantes, incluindo a Sentença Sinodal de 553. Crucialmente, o Trullo menciona explicitamente a condenação de Orígenes, Evágrio e Dídimo como parte das decisões do Quinto Concílio Ecumênico, conferindo assim autoridade conciliar ecumênica aos quinze anátemas anti-origenistas. O Trullo também promulgou 102 cânones disciplinares para suprir as lacunas dos concílios V e VI, confirmando indiretamente que Constantinopla II não havia promulgado cânones próprios.",
      },
      {
        nome: "Decretum Gratiani",
        data: "c. 1140",
        origem: "Bolonha (Graciano, monge camaldulense)",
        tratamentoDe553:
          "O Decretum Gratiani, a mais influente coleção canônica do Ocidente medieval, inclui Constantinopla II entre os concílios ecumênicos e cita a Sentença Sinodal e os catorze anátemas em várias Distinctiones e Causae. Graciano utiliza os anátemas de 553 principalmente como autoridade para a condenação de heresias cristológicas (D. 15–16) e para a definição da união hipostática (C. 24, q. 1). Os quinze anátemas anti-origenistas não constam do Decretum, refletindo a tradição ocidental que não os associava ao concílio ecumênico.",
      },
    ],
    situacaoAtual:
      "Na situação canônica atual, o Segundo Concílio de Constantinopla (553) é reconhecido como o Quinto Concílio Ecumênico tanto pela Igreja Católica (Código de Direito Canônico, Cânone 749; Catecismo da Igreja Católica, n. 884) quanto pela Igreja Ortodoxa (Synodikon da Ortodoxia; Cânone 1 do Trullo). Seus decretos dogmáticos — a Sentença Sinodal, os catorze anátemas cristológicos e os quinze anátemas anti-origenistas (na tradição ortodoxa e na maioria da tradição católica) — são considerados vinculantes e irreformáveis. A ausência de cânones disciplinares próprios não diminui a autoridade ecumênica do concílio, pois a legislação disciplinar do período está amplamente coberta pelas Novellae de Justiniano e pelos cânones do Sínodo Quinissexto (692), que foram recebidos como complementos legítimos da obra dos concílios V e VI. O debate acadêmico sobre o estatuto canônico dos quinze anátemas anti-origenistas continua aberto na historiografia, mas não afeta a prática dogmática das Igrejas, que os tratam como parte integrante do magistério ecumênico.",
  },
};