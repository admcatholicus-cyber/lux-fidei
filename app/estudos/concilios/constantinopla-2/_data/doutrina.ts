// app/estudos/concilios/constantinopla-2/_data/doutrina.ts

export interface TermoGlossario {
  grego: string;
  transliteracao: string;
  latim: string;
  definicao: string;
  usoNoConcilio: string;
}

export interface ComparacaoCredo {
  aspecto: string;
  niceiaConstantinopla: string;
  calcedonia: string;
  constantinoplaII: string;
}

export interface CondenacaoDoutrinaria {
  erro: string;
  formulacao: string;
  fundamento: string;
}

export interface LimiteDoutrinario {
  questao: string;
  posicao: string;
  razao: string;
}

export interface Doutrina {
  sinteseCirilina: {
    titulo: string;
    problema: string;
    solucaoNeocalcedoniana: string;
    formulaChave: string;
    papelDosDozeCapitulos: string;
    recepcao: string;
  };
  glossarioGrego: TermoGlossario[];
  cristologia: {
    titulo: string;
    uniaoHipostatica: string;
    enhypostasia: string;
    comunicacaoIdiomas: string;
    duasVontades: string;
    distincaoSemSeparacao: string;
  };
  theopaschismo: {
    titulo: string;
    formula: string;
    origem: string;
    justificativaTeologica: string;
    oposicao: string;
    resolucao: string;
    implicacoesSoteriologicas: string;
  };
  theotokos: {
    titulo: string;
    definicaoDogmatica: string;
    theotokosPropria: string;
    aeiparthenos: string;
    contraChristotokos: string;
    dimensaoSoteriologica: string;
  };
  comparacaoCredos: ComparacaoCredo[];
  pneumatologia: {
    titulo: string;
    processao: string;
    consubstancialidade: string;
    papelNaEncarnacao: string;
    ausenciaDoFilioque: string;
  };
  condenacoes: CondenacaoDoutrinaria[];
  limitesDoutrinarios: LimiteDoutrinario[];
  resumoTeologico: string;
}

export const doutrina: Doutrina = {
  sinteseCirilina: {
    titulo: "A Síntese Neocalcedoniana: Cirilo e Calcedônia em Harmonia Dogmática",
    problema:
      "O problema teológico central que o Segundo Concílio de Constantinopla (553) buscou resolver era a aparente incompatibilidade entre duas formulações cristológicas que, individualmente, gozavam de autoridade eclesial inquestionável. De um lado, a Definição de Calcedônia (451) confessava Cristo 'reconhecido em duas naturezas' (en dyo physesin gnōrizomenon), linguagem que os miáfisitas egípcios e sírios interpretavam como nestorianismo velado, pois a preposição 'em' (en) sugeria, a seus olhos, dois sujeitos coexistentes em vez de uma única realidade encarnada. Do outro lado, a fórmula de Cirilo de Alexandria 'uma natureza encarnada do Verbo de Deus' (mia physis tou Theou Logou sesarkōmenē) — extraída do Adversus Nestorii Blasphemias e legitimada pela tradição alexandrina desde Atanásio — era rejeitada pelos calcedonianos estritos como monofisismo criptográfico, pois o termo 'uma natureza' (mia physis) parecia negar a realidade da humanidade de Cristo após a união. Durante quase um século (451–553), essa tensão terminológica e conceitual impediu a reconciliação entre os calcedonianos e os miáfisitas moderados, gerando cismas, deposições imperiais e violência sectária em todo o Oriente cristão.",
    solucaoNeocalcedoniana:
      "A solução neocalcedoniana, promovida por Justiniano I e elaborada teologicamente por Leôncio de Bizâncio, Leôncio de Jerusalém e os monges citas, consistiu em demonstrar que as duas formulações — 'em duas naturezas' (Calcedônia) e 'uma natureza encarnada' (Cirilo) — não eram contraditórias, mas complementares, desde que se distinguissem dois sentidos do termo physis. No vocabulário de Cirilo (herdado de Atanásio), physis significava 'realidade concreta e individual', equivalente a hypostasis: 'uma natureza encarnada' significava, portanto, 'uma hipóstase encarnada', ou seja, um único sujeito divino (o Logos) que assumiu a carne. No vocabulário de Calcedônia (influenciado pelo Tomo de Leão e pela tradição antioquena), physis significava 'essência abstrata e universal', equivalente a ousia: 'em duas naturezas' significava, portanto, 'em duas essências', divina e humana, ambas plenamente reais e preservadas na única hipóstase do Logos. A síntese neocalcedoniana propôs que Calcedônia fosse lida com as lentes de Cirilo: as 'duas naturezas' de Calcedônia não implicam dois sujeitos (contra Nestório), mas duas essências preservadas na única hipóstase do Verbo (com Cirilo). A fórmula resultante — 'uma hipóstase em duas naturezas' (mia hypostasis en dyo physesin) — tornou-se a expressão clássica da ortodoxia bizantina e permanece como tal na teologia ortodoxa até os dias atuais.",
    formulaChave:
      "Mia hypostasis en dyo physesin, mia physis tou Theou Logou sesarkōmenē — 'Uma hipóstase em duas naturezas, uma natureza encarnada do Verbo de Deus.' As duas fórmulas são declaradas compatíveis e mutuamente interpretativas pela Sentença Final do concílio (Sessão VIII, 2 de junho de 553).",
    papelDosDozeCapitulos:
      "Os Doze Capítulos (Dōdeka Kephalaia) de Cirilo de Alexandria, originalmente anexados à Terceira Carta a Nestório (430) e ratificados pelo Concílio de Éfeso (431), foram elevados pelo Segundo Concílio de Constantinopla ao status de norma hermenêutica suprema para a interpretação de Calcedônia. O concílio declarou explicitamente que a Definição de 451 deve ser lida 'à luz dos Doze Capítulos do santo Cirilo' e que qualquer leitura de Calcedônia que contradiga os anátemas cirilianos é ipso facto nestoriana e, portanto, ilegítima. Essa decisão representou uma inversão significativa da hierarquia de fontes: enquanto Calcedônia havia sido ambígua sobre o status dos Doze Capítulos (aceitando-os como 'ortodoxos' mas sem torná-los critério de interpretação), Constantinopla II os transformou em chave hermenêutica obrigatória. Na prática, isso significou que a cristologia de Calcedônia foi cirilizada: a linguagem de 'duas naturezas' foi preservada, mas seu conteúdo foi reinterpretado em termos da união hipostática ciriliana, da comunicação de idiomas (communicatio idiomatum) e da fórmula teopasquista.",
    recepcao:
      "A síntese neocalcedoniana foi recebida de maneira radicalmente diferente no Oriente e no Ocidente. No Império Bizantino, ela se tornou a posição ortodoxa oficial e foi incorporada à liturgia, à hagiografia e à teologia dogmática de João de Damasco (século VIII) e de Fócio (século IX). Entre os miáfisitas, a recepção foi mista: os moderados (como os futuros siríacos ortodoxos e coptas) reconheceram que a síntese se aproximava de suas posições, mas recusaram-se a aceitar Calcedônia em qualquer formulação, considerando que a própria linguagem de 'duas naturezas' era irremediavelmente comprometida. No Ocidente, a síntese foi recebida com profunda desconfiança: os teólogos latinos, herdeiros da tradição de Agostinho e Leão, consideraram que a cirilização de Calcedônia equivalia a uma desautorização do Tomo de Leão e, portanto, a uma traição à fé ocidental. Essa divergência na recepção contribuiu significativamente para o distanciamento teológico entre Oriente e Ocidente que culminaria no Grande Cisma de 1054.",
  },

  glossarioGrego: [
    {
      grego: "Ὑπόστασις",
      transliteracao: "Hypostasis",
      latim: "Subsistentia / Persona",
      definicao:
        "Termo filosófico e teológico que designa a realidade concreta e individual de um ser, em oposição à essência abstrata e universal (ousia). Na teologia trinitária capadócia (Basílio, Gregório de Nazianzo, Gregório de Nissa), hypostasis refere-se a cada uma das três pessoas divinas (Pai, Filho, Espírito Santo) que compartilham a única ousia divina. Na cristologia, hypostasis designa o sujeito único e indivisível de Jesus Cristo: o Verbo de Deus encarnado.",
      usoNoConcilio:
        "O concílio utiliza hypostasis como sinônimo de 'sujeito ontológico' de Cristo, insistindo que há apenas uma hypostasis (a do Logos) na qual as duas naturezas (divina e humana) subsistem inseparavelmente. A fórmula 'união segundo a hypostasis' (henōsis kath' hypostasin) é o termo técnico central dos anátemas 3 e 4.",
    },
    {
      grego: "Φύσις",
      transliteracao: "Physis",
      latim: "Natura",
      definicao:
        "Termo polissêmico que pode significar 'natureza' no sentido de essência abstrata (equivalente a ousia) ou 'natureza' no sentido de realidade concreta e individual (equivalente a hypostasis). Essa ambiguidade semântica é a raiz de grande parte das controvérsias cristológicas dos séculos V e VI. No uso antioqueno e calcedonense, physis tende a significar 'essência' (duas naturezas = duas essências, divina e humana). No uso alexandrino e ciriliano, physis tende a significar 'realidade concreta' (uma natureza = uma hipóstase encarnada).",
      usoNoConcilio:
        "O concílio adota conscientemente a dupla acepção de physis para harmonizar Cirilo e Calcedônia: 'em duas naturezas' (Calcedônia) refere-se às duas essências preservadas; 'uma natureza encarnada' (Cirilo) refere-se à única hipóstase concreta do Logos. O anátema 5 explicita que a fórmula 'em duas naturezas' é legítima quando compreendida 'segundo a diferença' (kata tēn diaphoran), não como divisão de sujeitos.",
    },
    {
      grego: "Πρόσωπον",
      transliteracao: "Prosōpon",
      latim: "Persona",
      definicao:
        "Originalmente 'rosto', 'máscara teatral' ou 'papel dramático', o termo evoluiu na teologia cristã para designar a manifestação externa de uma realidade interior. Na cristologia nestoriana, prosōpon era o termo preferido para descrever a unidade de Cristo: o Logos e o homem Jesus formavam um único 'prosōpon de união' (prosōpon henōseōs), uma unidade funcional e exterior, não ontológica. Na tradição latina, persona tornou-se equivalente a hypostasis (Boécio: 'persona est naturae rationabilis individua substantia').",
      usoNoConcilio:
        "O concílio rejeita explicitamente o uso nestoriano de prosōpon como 'união exterior' e o subordina a hypostasis: a unidade de Cristo não é um prosōpon de união (aparência de unidade entre dois sujeitos), mas uma henōsis kath' hypostasin (união real na única hipóstase do Logos). O anátema 3 condena a divisão em 'duas pessoas ou hipóstases' (dyo prosōpa ē dyo hypostaseis).",
    },
    {
      grego: "Ἕνωσις καθ᾿ ὑπόστασιν",
      transliteracao: "Henōsis kath' hypostasin",
      latim: "Unio secundum subsistentiam / Unio hypostatica",
      definicao:
        "Expressão técnica cunhada por Cirilo de Alexandria para designar o modo de união entre a divindade e a humanidade em Cristo. Significa que a união não é meramente moral, funcional, relacional ou honorífica (kata schesin, kat' eudokian, kata charin), mas ontológica e real: a natureza humana é assumida na própria hipóstase do Logos divino, de modo que o sujeito da humanidade de Cristo é o próprio Verbo de Deus. A união hipostática é a alternativa ciriliana à 'união por inhabitação' (enoikēsis) de Teodoro de Mopsuéstia.",
      usoNoConcilio:
        "A henōsis kath' hypostasin é o conceito dogmático central do concílio, mencionado explicitamente nos anátemas 3 e 4 e pressuposto em todos os demais. O anátema 4 enumera sete modalidades de união insuficiente (graça, operação, dignidade, honra, autoridade, relação, potência) e as contrapõe à união 'segundo a composição, segundo a subsistência' (kata synthesein, kath' hypostasin).",
    },
    {
      grego: "Θεοτόκος",
      transliteracao: "Theotokos",
      latim: "Dei Genitrix / Deipara",
      definicao:
        "Título mariano que significa literalmente 'aquela que deu à luz Deus' (theos + tiktein). O título afirma que o sujeito nascido de Maria é o próprio Verbo de Deus encarnado, não um mero homem ao qual o Logos se uniu posteriormente. A legitimidade do título decorre logicamente da união hipostática: se o Logos é o sujeito da humanidade de Cristo, e se essa humanidade nasceu de Maria, então Maria é verdadeiramente mãe do Logos encarnado, isto é, Theotokos. O título foi dogmatizado pelo Concílio de Éfeso (431) contra Nestório, que preferia Christotokos ('Mãe de Cristo').",
      usoNoConcilio:
        "O anátema 6 reafirma o título Theotokos 'própria e verdadeiramente' (kyriōs kai kat' alētheian), rejeitando a concessão nominal de Teodoro de Mopsuéstia, que aceitava o título apenas 'por relação' (kata schesin). O concílio insiste em que Maria é Theotokos não porque tenha gerado a natureza divina do Logos (o que seria impossível), mas porque o sujeito que nasceu dela segundo a carne é o próprio Deus Verbo.",
    },
    {
      grego: "Θεοπάσχισμος",
      transliteracao: "Theopaschismos",
      latim: "Theopaschismus",
      definicao:
        "Doutrina teológica que afirma que o Verbo de Deus (Theos) realmente padeceu (epaschen) na encarnação. O teopasquismo não significa que a natureza divina sofreu em si mesma (o que seria patripassianismo ou teopasquismo radical), mas que o sujeito divino — o Logos — experimentou o sofrimento e a morte na e através da natureza humana assumida. A qualificação 'na carne' (en sarki / in carne) é essencial para distinguir o teopasquismo ortodoxo do patripassianismo herético.",
      usoNoConcilio:
        "O anátema 9 consagra dogmaticamente a fórmula teopasquista 'Um da Trindade padeceu na carne' (heis tēs Triados peponten sarki), rejeitando tanto o teopasquismo radical ('padeceu segundo a divindade') quanto o nestorianismo ('apenas o homem padeceu'). A fórmula é declarada compatível com Calcedônia e com a impassibilidade da natureza divina.",
    },
    {
      grego: "Ἰδιώματα",
      transliteracao: "Idiōmata",
      latim: "Idiomata / Proprietates",
      definicao:
        "Plural de idiōma ('propriedade', 'característica peculiar'). Na cristologia, refere-se às propriedades específicas de cada natureza de Cristo: onisciência, onipotência, eternidade e impassibilidade são idiōmata da natureza divina; ignorância, fraqueza, temporalidade e passibilidade são idiōmata da natureza humana. A 'comunicação de idiomas' (communicatio idiomatum / koinōnia tōn idiōmatōn) é o princípio segundo o qual as propriedades de ambas as naturezas podem ser predicadas do único sujeito (hypostasis) de Cristo, de modo que é legítimo dizer 'Deus nasceu', 'Deus morreu' e 'o homem Jesus criou o mundo'.",
      usoNoConcilio:
        "A communicatio idiomatum é pressuposta em todos os anátemas cristológicos, particularmente nos anátemas 3 (um só sujeito dos milagres e da paixão), 7–8 (adoração única) e 9–10 (teopasquismo). O concílio rejeita a restrição nestoriana da comunicação de idiomas, que limitava a predicação cruzada a uma 'troca de títulos' (antidosis tōn onomatōn) sem implicações ontológicas reais.",
    },
    {
      grego: "Περιχώρησις",
      transliteracao: "Perichōrēsis",
      latim: "Circumincessio / Circuminsessio",
      definicao:
        "Termo técnico que designa a interpenetração mútua e a co-inerência das duas naturezas em Cristo (na cristologia) ou das três pessoas na Trindade (na teologia trinitária). Na cristologia, a perichōrēsis afirma que a natureza divina e a natureza humana em Cristo interpenetram-se sem confusão (asynchytōs) e sem mudança (atreptōs), de modo que cada natureza permanece o que é enquanto participa da operação da outra. O conceito foi desenvolvido por pseudo-Cirilo e Leôncio de Bizâncio no século VI e sistematizado por João de Damasco no século VIII.",
      usoNoConcilio:
        "Embora o termo perichōrēsis não apareça explicitamente nos anátemas de 553 (sua sistematização é posterior), o conceito está pressuposto na linguagem do anátema 4 ('segundo a composição', kata synthesein) e na insistência do concílio em que as duas naturezas operam em comunhão (koinōnia) sem separação. A perichōrēsis seria posteriormente incorporada à teologia ortodoxa como o corolário dinâmico da união hipostática estática definida em Calcedônia e Constantinopla II.",
    },
  ],

  cristologia: {
    titulo: "Cristologia Neocalcedoniana: União Hipostática, Enhypostasia e Comunicação de Idiomas",
    uniaoHipostatica:
      "A doutrina da união hipostática (henōsis kath' hypostasin) constitui o eixo dogmático de todo o Segundo Concílio de Constantinopla. O concílio reafirma que em Jesus Cristo a natureza divina (physis theia) e a natureza humana (physis anthrōpinē) estão unidas real, ontológica e inseparavelmente na única hipóstase (hypostasis) do Verbo de Deus (Logos tou Theou). Essa união não é uma justaposição moral (synapheia), uma inhabitação graciosa (enoikēsis), uma associação funcional (kata schesin) ou uma união de dignidade (kat' axian), mas uma composição real (synthesis) na qual a humanidade de Cristo subsiste exclusivamente na hipóstase do Logos. O concílio insiste em que a união hipostática preserva simultaneamente a integridade de ambas as naturezas ('sem confusão, sem mudança' — asynchytōs, atreptōs) e a unidade do sujeito ('sem divisão, sem separação' — adiairetōs, achōristōs), seguindo os quatro advérbios calcedonenses, mas interpretando-os à luz da tradição ciriliana.",
    enhypostasia:
      "O conceito de enhypostasia (enympostaton), desenvolvido por Leôncio de Bizâncio (c. 485–543) nas décadas imediatamente anteriores ao concílio e implicitamente adotado pela teologia de 553, resolve uma das dificuldades mais persistentes da cristologia calcedonense: se Cristo possui duas naturezas completas, e se a natureza humana completa inclui uma hipóstase humana (como ensinava a antropologia aristotélica), como evitar a conclusão nestoriana de que há duas hipóstases em Cristo? A solução de Leôncio consiste em distinguir entre anhypostaton ('sem hipóstase própria') e enhypostaton ('com hipóstase em outro'). A natureza humana de Cristo é anhypostatos no sentido de que não possui uma hipóstase humana autônoma e independente (não há um 'homem Jesus' pré-existente ao qual o Logos se uniu), mas é enhypostatos no sentido de que subsiste na hipóstase do Logos divino. A humanidade de Cristo é, portanto, plenamente real e completa (possui corpo racional e alma racional), mas sua subsistência concreta (enhypostasia) está na hipóstase do Verbo. Essa distinção permitiu ao neocalcedonianismo afirmar simultaneamente a completude da humanidade de Cristo (contra Apolinário e Eutiques) e a unicidade de seu sujeito (contra Nestório e Teodoro).",
    comunicacaoIdiomas:
      "A comunicação de idiomas (communicatio idiomatum / koinōnia tōn idiōmatōn) é o princípio cristológico segundo o qual as propriedades (idiōmata) de ambas as naturezas de Cristo podem ser legitimamente predicadas do único sujeito hipostático. O concílio de 553 aplica esse princípio de maneira radical e irrestrita, rejeitando a limitação nestoriana que reduzia a comunicação a uma mera 'troca de títulos' (antidosis tōn onomatōn) sem implicações ontológicas. Para os neocalcedonianos, quando dizemos 'Deus nasceu de Maria' ou 'Deus morreu na cruz', não estamos usando metáforas piedosas, mas expressando verdades ontológicas rigorosas: o sujeito (hypostasis) que nasceu e morreu é realmente o Verbo de Deus, embora o modo (tropos) do nascimento e da morte seja carnal, não divino. O anátema 9 (fórmula teopasquista) e o anátema 10 (o crucificado é 'verdadeiro Deus') são as aplicações mais ousadas da comunicação de idiomas em todo o magistério conciliar ecumênico.",
    duasVontades:
      "Embora o Segundo Concílio de Constantinopla (553) não tenha tratado explicitamente da questão das duas vontades em Cristo (dyothelismo) — tema que seria dogmatizado apenas pelo Terceiro Concílio de Constantinopla (680–681) —, a lógica de sua cristologia já implica o dyothelismo. Ao insistir na preservação integral das duas naturezas 'sem confusão' e na realidade da humanidade assumida (enhypostasia), o concílio pressupõe que a natureza humana de Cristo possui todas as faculdades próprias da humanidade racional, incluindo a vontade (thelēma). A fórmula 'padeceu voluntariamente na carne' (hekousiōs en sarki / voluntarie in carne), presente no anátema 3, implica que a paixão de Cristo envolveu um ato de vontade humana real, não apenas uma decisão divina extrínseca. A posterior controvérsia monotelita (século VII) demonstraria que a ambiguidade de 553 sobre este ponto precisaria ser resolvida por um concílio subsequente.",
    distincaoSemSeparacao:
      "O princípio da 'distinção sem separação' (diakrisis chōris diaireseōs) é a contribuição mais duradoura da síntese neocalcedoniana à cristologia ecumênica. O concílio insiste em que as duas naturezas de Cristo são realmente distintas (a divindade não se transforma em humanidade, nem a humanidade em divindade), mas que essa distinção não implica separação, divisão ou autonomia de sujeitos. A diferença (diaphora) é real e permanente (asynchytōs, atreptōs), mas a união é igualmente real e indissolúvel (adiairetōs, achōristōs). O anátema 5 formula esse equilíbrio com precisão cirúrgica: a expressão 'em duas naturezas' é legítima quando compreendida 'segundo a diferença' (kata tēn diaphoran), mas torna-se herética quando usada 'para introduzir divisão' (eis eisagōgēn diaireseōs). A distinção sem separação permanece como o critério normativo de ortodoxia cristológica tanto na teologia ortodoxa quanto na católica.",
  },

  theopaschismo: {
    titulo: "O Theopaschismo Ortodoxo: 'Um da Trindade Padeceu na Carne'",
    formula:
      "Heis tēs hagias Triados peponten sarki / Unus de sancta Trinitate passus est in carne — 'Um da Santa Trindade, a saber, o Verbo de Deus, padeceu na carne.' Esta fórmula, consagrada dogmaticamente pelo anátema 9 do concílio, é a expressão mais célebre e controversa da teologia de Constantinopla II.",
    origem:
      "A fórmula teopasquista tem origem na piedade litúrgica da Igreja de Antioquia e foi sistematizada pelos monges citas (Scythae monachi) — João Maxêncio, Leôncio e Pedro — que a promoveram em Constantinopla e Roma entre 519 e 523. Os monges citas buscavam acrescentar a cláusula 'que foste crucificado por nós' (ho staurōtheis di' hēmas) ao Trisagion ('Santo Deus, Santo Forte, Santo Imortal'), gerando uma controvérsia que envolveu o Papa Hormisdas (514–523), o patriarca João II de Constantinopla e o imperador Justino I. Embora Hormisdas tenha inicialmente rejeitado a fórmula como potencialmente patripassiana, Justiniano a adotou como pedra angular de sua política de reconciliação com os miáfisitas e a inseriu no Édito dos Três Capítulos (544/545) e na carta imperial lida na primeira sessão do concílio (553).",
    justificativaTeologica:
      "A justificação teológica do teopasquismo ortodoxo repousa sobre três pilares dogmáticos: (1) A união hipostática: se o Logos é o sujeito (hypostasis) da humanidade de Cristo, e se essa humanidade realmente sofreu e morreu, então o Logos é o sujeito da paixão — não como espectador impassível, mas como agente voluntário que experimenta o sofrimento na e através da carne assumida. (2) A comunicação de idiomas: a paixão é um idiōma da natureza humana, mas pode ser predicada do sujeito divino em virtude da união hipostática, assim como a onisciência (idiōma divino) pode ser predicada do homem Jesus. (3) A soteriologia: se não foi o próprio Deus quem sofreu e morreu na cruz, mas apenas um homem autônomo ao qual Deus estava 'associado', então a paixão não tem valor infinito e a redenção é insuficiente para salvar a humanidade decaída. O qualificador 'na carne' (en sarki / in carne) é a salvaguarda que distingue o teopasquismo ortodoxo do patripassianismo: a natureza divina não sofre em si mesma (a impassibilidade divina é preservada), mas o sujeito divino sofre no modo carnal de sua existência encarnada.",
    oposicao:
      "A fórmula teopasquista enfrentou oposição vigorosa de três frentes: (1) Os teólogos antioquenos e nestorianos, que argumentavam que atribuir sofrimento ao Logos era blasfêmia contra a impassibilidade divina e que apenas o 'homem assumido' (ho proslephtheis anthrōpos) sofrera na cruz. (2) Os teólogos ocidentais, particularmente o Papa Hormisdas e seus sucessores imediatos, que temiam que a fórmula fosse uma variante do patripassianismo modalista condenado no século III. (3) Os miáfisitas radicais, que, paradoxalmente, também rejeitavam a fórmula, mas por razões opostas: para eles, a qualificação 'na carne' era uma concessão nestoriana que reintroduzia a dualidade de naturezas. Justiniano precisou de mais de uma década de negociações teológicas para obter o consenso dos patriarcas orientais sobre a fórmula.",
    resolucao:
      "O concílio resolveu a controvérsia mediante a dupla condenação do anátema 9: tanto o teopasquismo radical ('padeceu segundo a divindade') quanto o nestorianismo ('apenas o homem padeceu') são anatematizados, e a fórmula 'Um da Trindade padeceu na carne' é declarada expressão legítima e obrigatória da fé calcedonense. A resolução é notável por sua precisão: o sujeito da paixão é identificado como 'Um da Trindade' (não 'a Trindade', o que seria patripassianismo; nem 'o homem Jesus', o que seria nestorianismo), e o modo da paixão é qualificado como 'na carne' (não 'na divindade', não 'segundo a natureza divina').",
    implicacoesSoteriologicas:
      "As implicações soteriológicas do teopasquismo são imensas e constituem a razão última de sua importância dogmática. Se o sujeito da cruz é o próprio Verbo de Deus, então: (1) a paixão tem valor infinito e é suficiente para a redenção de toda a humanidade (contra o adocionismo); (2) a morte de Cristo é uma vitória real sobre a morte, pois a Vida divina entrou no domínio da morte e a destruiu por dentro (contra o docetismo); (3) a humanidade é deificada (theōsis) porque a própria divindade experimentou a condição humana em sua totalidade, incluindo o sofrimento e a morte (contra o apolinarismo); (4) a Eucaristia é verdadeiramente o corpo e o sangue de Deus, não de um mero homem (contra o nestorianismo litúrgico). A fórmula teopasquista permanece na liturgia bizantina até hoje no Trisagion ampliado: 'Santo Deus, Santo Forte, Santo Imortal, que foste crucificado por nós, tem piedade de nós.'",
  },

  theotokos: {
    titulo: "Theotokos e Aeiparthenos: A Maternidade Divina de Maria em Sentido Próprio e Verdadeiro",
    definicaoDogmatica:
      "O Segundo Concílio de Constantinopla reafirma e radicaliza a definição dogmática da Virgem Maria como Theotokos (Mãe de Deus) e Aeiparthenos (Sempre Virgem), títulos já consagrados pelos Concílios de Éfeso (431) e Calcedônia (451). A inovação de 553 reside na precisão terminológica com que o concílio distingue entre a confissão 'própria e verdadeira' (kyriōs kai kat' alētheian / proprie et secundum veritatem) e a concessão meramente 'relacional' (kata schesin / secundum relationem) do título Theotokos. O anátema 6 declara que Maria é Theotokos não por convenção honorífica, não por metáfora piedosa e não por relação funcional com o homem Jesus, mas porque o sujeito que nasceu dela segundo a carne é o próprio Verbo de Deus, segunda pessoa da Trindade, consubstancial ao Pai.",
    theotokosPropria:
      "A insistência do concílio em que Maria é Theotokos 'própria e verdadeiramente' (kyriōs) é uma resposta direta à cristologia de Teodoro de Mopsuéstia, que concedia o título a Maria apenas 'por relação' (kata schesin): Maria seria Theotokos no sentido de que o homem Jesus, ao qual o Logos estava unido por 'inhabitação', nasceu dela, mas não no sentido de que o próprio Logos tenha nascido de Maria em sentido próprio. O concílio rejeita essa concessão nominal como insuficiente e enganosa: se o Logos não nasceu verdadeiramente de Maria, então a encarnação é uma ficção teatral (o Logos 'vestiu' a humanidade como um ator veste uma máscara) e a soteriologia colapsa. A maternidade divina de Maria é, portanto, o teste litúrgico e devocional da união hipostática: quem nega Theotokos em sentido próprio nega, de facto, que o Logos se fez verdadeiramente carne.",
    aeiparthenos:
      "O título Aeiparthenos (Semper Virgo, 'Sempre Virgem') é utilizado pelo concílio como qualificador inseparável de Theotokos, afirmando a virgindade perpétua de Maria antes, durante e após o parto (ante partum, in partu, post partum). Embora o concílio não tenha debatido explicitamente a questão da virgindade pós-parto (que seria dogmatizada pelo Concílio de Latrão de 649 sob o Papa Martinho I), a inclusão do título no anátema 6 sinaliza a aceitação da tradição patrística universal sobre a virgindade perpétua. A aeiparthenia é teologicamente significativa porque afirma o caráter sobrenatural e miraculoso da encarnação: o nascimento de Cristo não foi um evento biológico natural, mas uma intervenção divina que preservou a integridade física de Maria enquanto realizava a assunção real da natureza humana pelo Logos.",
    contraChristotokos:
      "O concílio rejeita implicitamente a alternativa nestoriana Christotokos ('Mãe de Cristo'), que fora proposta por Nestório como compromisso entre Theotokos e Anthropotokos ('Mãe do homem'). Para Nestório, Maria era mãe do homem Jesus (a quem o Logos se uniu), mas não mãe do Logos divino (que é eterno e incriado). O concílio de 553 considera essa distinção inaceitável porque pressupõe dois sujeitos em Cristo: se Maria é mãe apenas do 'homem Cristo' e não do 'Verbo de Deus', então o homem Cristo e o Verbo de Deus são sujeitos distintos, o que é a essência do nestorianismo condenado nos anátemas 3 e 4. A fórmula 'Theotokos própria e verdadeira' exclui qualquer leitura de Christotokos que implique separação de sujeitos.",
    dimensaoSoteriologica:
      "A dimensão soteriológica da Theotokos é explicitada pelo concílio mediante o axioma de Gregório de Nazianzo: 'O que não foi assumido não foi curado' (to gar aproslēpton atherapeuton). Se o Logos não nasceu verdadeiramente de Maria — se a humanidade que ele assumiu não foi verdadeiramente gerada no seio de uma mulher —, então a natureza humana decaída não foi verdadeiramente assumida e, portanto, não foi verdadeiramente curada e deificada. A maternidade divina de Maria é, assim, a garantia ontológica da realidade da encarnação e, consequentemente, da eficácia da redenção. Maria não é Theotokos por privilégio pessoal, mas por necessidade soteriológica: sem uma Theotokos real, não há encarnação real; sem encarnação real, não há redenção real.",
  },

  comparacaoCredos: [
    {
      aspecto: "Estrutura e gênero literário",
      niceiaConstantinopla:
        "Símbolo de fé (symbolum / creed) em forma de confissão trinitária narrativa: 'Cremos em um só Deus Pai... e em um só Senhor Jesus Cristo... e no Espírito Santo.' Gênero litúrgico-catequético, destinado à proclamação batismal.",
      calcedonia:
        "Definição dogmática (horos / definitio) em forma de decreto conciliar: 'Seguindo os santos Padres, todos a uma voz ensinamos...' Gênero jurídico-teológico, destinado a delimitar a ortodoxia contra heresias específicas.",
      constantinoplaII:
        "Sentença sinodal (horos tēs synodou) com anátemas (anathematismoi) em forma de condenação condicional: 'Se alguém não confessa... seja anátema.' Gênero jurídico-canônico, combinando confissão positiva com exclusão de erros.",
    },
    {
      aspecto: "Cristologia: sujeito de Cristo",
      niceiaConstantinopla:
        "Um só Senhor Jesus Cristo, Filho unigênito de Deus, gerado do Pai antes de todos os séculos. O sujeito é o Logos divino; a humanidade é mencionada apenas de passagem ('se encarnou do Espírito Santo e da Virgem Maria').",
      calcedonia:
        "Um e o mesmo (heis kai ho autos) Cristo, Filho, Senhor, Unigênito, reconhecido em duas naturezas. O sujeito é explicitamente único, mas a dualidade de naturezas é enfatizada com os quatro advérbios (inconfusamente, imutavelmente, indivisivelmente, inseparavelmente).",
      constantinoplaII:
        "Um e o mesmo Verbo de Deus (heis kai ho autos Theos Logos), Um da Trindade, que possui duas natividades e padeceu na carne. O sujeito é identificado trinitariamente (Um da Trindade) e a dualidade de naturezas é subordinada à unidade hipostática.",
    },
    {
      aspecto: "Cristologia: formulação da união",
      niceiaConstantinopla:
        "Não há formulação explícita do modo de união. O Símbolo afirma a encarnação como fato ('se encarnou'), mas não especifica se a união é hipostática, moral ou funcional.",
      calcedonia:
        "União 'em duas naturezas' (en dyo physesin), 'concorrendo em uma pessoa e uma hipóstase' (eis hen prosōpon kai mian hypostasin syntrechousan). A formulação é deliberadamente aberta, permitindo leituras antioquenas e alexandrinas.",
      constantinoplaII:
        "União 'segundo a hipóstase' (kath' hypostasin) e 'segundo a composição' (kata synthesein). A formulação é explicitamente ciriliana e rejeita leituras antioquenas da união como meramente relacional ou moral.",
    },
    {
      aspecto: "Theotokos",
      niceiaConstantinopla:
        "Menciona 'da Virgem Maria' (ek tēs parthenou Marias) sem utilizar o título Theotokos, que ainda não havia sido dogmatizado.",
      calcedonia:
        "Utiliza explicitamente o título Theotokos: 'nascido da Virgem Maria, Theotokos, segundo a humanidade.' O título é aceito, mas qualificado ('segundo a humanidade'), o que os miáfisitas consideraram insuficiente.",
      constantinoplaII:
        "Reafirma Theotokos 'própria e verdadeiramente' (kyriōs kai kat' alētheian) e acrescenta 'sempre Virgem' (aeiparthenos). Rejeita a concessão nominal 'por relação' (kata schesin) de Teodoro de Mopsuéstia.",
    },
    {
      aspecto: "Theopasquismo",
      niceiaConstantinopla:
        "Afirma que Cristo 'foi crucificado por nós sob Pôncio Pilatos, padeceu e foi sepultado', mas não especifica o sujeito da paixão (o Logos ou o homem Jesus).",
      calcedonia:
        "Afirma que 'um e o mesmo' Cristo padeceu, mas não utiliza a fórmula teopasquista explicitamente. A linguagem é compatível com o teopasquismo, mas não o exige.",
      constantinoplaII:
        "Consagra dogmaticamente a fórmula 'Um da Trindade padeceu na carne' (anátema 9) e declara que o crucificado é 'verdadeiro Deus e Senhor da glória' (anátema 10). O teopasquismo torna-se obrigatório.",
    },
    {
      aspecto: "Pneumatologia",
      niceiaConstantinopla:
        "Desenvolve extensamente a pneumatologia: o Espírito 'procede do Pai' (ek tou Patros ekporeuomenon), é 'adorado e glorificado com o Pai e o Filho', 'falou pelos profetas'.",
      calcedonia:
        "Não trata da pneumatologia, pois a controvérsia era exclusivamente cristológica.",
      constantinoplaII:
        "Reafirma a pneumatologia niceno-constantinopolitana no anátema 1 (Trindade consubstancial), mas não acrescenta desenvolvimentos pneumatológicos significativos. A questão do Filioque ainda não havia emergido.",
    },
    {
      aspecto: "Autoridade normativa",
      niceiaConstantinopla:
        "Símbolo ecumênico vinculante para toda a Igreja, utilizado na liturgia eucarística (a partir de 511 no Oriente, 589 no Ocidente).",
      calcedonia:
        "Definição dogmática vinculante, mas contestada pelos miáfisitas e por parte da tradição siríaca e copta. Sua autoridade dependia da recepção eclesial.",
      constantinoplaII:
        "Sentença sinodal com anátemas vinculantes, declarada pelo próprio concílio como 'quinto pilar' da fé ao lado dos quatro concílios anteriores. Sua autoridade foi contestada no Ocidente (Cisma Tricapitulino) e rejeitada pela Igreja do Oriente (assíria).",
    },
  ],

  pneumatologia: {
    titulo: "Pneumatologia do Concílio: O Espírito Santo na Teologia de 553",
    processao:
      "O Segundo Concílio de Constantinopla reafirma a doutrina da processão do Espírito Santo 'do Pai' (ek tou Patros ekporeuomenon), conforme a formulação do Símbolo Niceno-Constantinopolitano (381). O concílio não aborda a questão da processão do Filho (Filioque), que ainda não havia emergido como controvérsia teológica no Oriente. A pneumatologia de 553 é, portanto, estritamente niceno-constantinopolitana: o Espírito procede do Pai como princípio único (archē, aitia, pēgē) da divindade, e sua relação com o Filho é de manifestação e envio temporal (pempsis), não de processão eterna (ekporeusis).",
    consubstancialidade:
      "O anátema 1 reafirma a consubstancialidade (homoousios) do Espírito Santo com o Pai e o Filho, declarando que a Trindade possui 'uma só natureza ou substância, uma só virtude e potência' (mia physis ē ousia, mia dynamis kai energeia). A inclusão do Espírito Santo na adoração única (mia latreia) da Trindade em três hipóstases é uma reafirmação da pneumatologia de Basílio de Cesareia (De Spiritu Sancto) e do Concílio de Constantinopla I (381), que havia dogmatizado a divindade plena do Espírito contra os pneumatomacos (macedonianos).",
    papelNaEncarnacao:
      "Embora o concílio não desenvolva uma pneumatologia da encarnação tão elaborada quanto a de Cirilo de Alexandria (que insistia em que o Espírito Santo era o 'vínculo de união' entre o Logos e a carne), a lógica de seus anátemas pressupõe o papel do Espírito na concepção virginal de Cristo. A referência à encarnação 'da santa e gloriosa Mãe de Deus' (anátema 2) implica a ação do Espírito Santo conforme Lc 1,35 ('O Espírito Santo descerá sobre ti'), embora o concílio não explicite essa conexão. A pneumatologia encarnacional seria desenvolvida mais plenamente pelo Terceiro Concílio de Constantinopla (680–681) e por João de Damasco.",
    ausenciaDoFilioque:
      "A ausência de qualquer menção ao Filioque nos documentos de 553 é historicamente significativa. Na época do concílio, a cláusula Filioque ('e do Filho') ainda não havia sido inserida no Credo niceno-constantinopolitano no Ocidente (a inserção ocorreu gradualmente na Espanha visigótica a partir do Concílio de Toledo III, 589, e só foi adotada em Roma no século XI). O concílio de 553, portanto, reflete a pneumatologia pré-Filioque comum a Oriente e Ocidente, na qual a processão do Espírito é atribuída exclusivamente ao Pai. A controvérsia do Filioque, que se tornaria uma das causas principais do Grande Cisma de 1054, ainda não estava no horizonte teológico de Justiniano e de seus teólogos.",
  },

  condenacoes: [
    {
      erro: "Nestorianismo clássico e mitigado",
      formulacao:
        "Divisão de Cristo em dois sujeitos (dyo prosōpa / dyo hyioi), um divino e outro humano, unidos apenas por relação moral, funcional ou honorífica (kata schesin, kat' eudokian, kata charin).",
      fundamento:
        "Anátemas 3, 4, 6, 7 e 8. A condenação baseia-se na união hipostática ciriliana e na comunicação de idiomas irrestrita.",
    },
    {
      erro: "Teodorismo (cristologia de Teodoro de Mopsuéstia)",
      formulacao:
        "Doutrina da 'inhabitação' (enoikēsis) do Logos no homem Jesus como em um templo; distinção entre o Logos 'inabitante' e o homem 'inabitado'; rejeição da Theotokos em sentido próprio; negação da comunicação de idiomas ontológica.",
      fundamento:
        "Anátema 11. Condenação pessoal e textual de Teodoro e de todos os seus escritos.",
    },
    {
      erro: "Anticirilianismo de Teodoreto",
      formulacao:
        "Rejeição dos Doze Capítulos de Cirilo como apolinaristas; defesa de Teodoro de Mopsuéstia e Nestório; negação da communicatio idiomatum em sua forma ciriliana.",
      fundamento:
        "Anátema 12. Condenação circunscrita aos escritos anticyrilianos de Teodoreto, não à sua pessoa.",
    },
    {
      erro: "Nestorianismo epistolar de Ibas",
      formulacao:
        "Chamada de Cirilo de 'herege e apolinarista'; qualificação do Concílio de Éfeso (431) como 'latrocínio'; elogio a Teodoro de Mopsuéstia como 'doutor da Igreja'.",
      fundamento:
        "Anátema 13. Condenação da Epístola a Maris, reinterpretando sua aprovação calcedonense como ato processual, não dogmático.",
    },
    {
      erro: "Patripassianismo e teopasquismo radical",
      formulacao:
        "Afirmação de que a natureza divina sofreu em si mesma, ou que o Pai foi crucificado, ou que o Logos padeceu 'segundo a divindade' (kata tēn theotēta).",
      fundamento:
        "Anátema 9 (primeira cláusula). A natureza divina é impassível por essência; o Logos padece apenas 'na carne'.",
    },
    {
      erro: "Adocionismo e psilantropismo",
      formulacao:
        "Negação da divindade plena do Cristo encarnado; redução de Cristo a um mero homem adotado por Deus ou inspirado pelo Logos.",
      fundamento:
        "Anátemas 1, 2 e 10. O crucificado é 'verdadeiro Deus e Senhor da glória, Um da Santa Trindade'.",
    },
    {
      erro: "Tritheísmo e subordinacionismo",
      formulacao:
        "Negação da consubstancialidade trinitária; atribuição de três substâncias distintas ao Pai, ao Filho e ao Espírito; subordinação ontológica do Filho ou do Espírito ao Pai.",
      fundamento:
        "Anátema 1. A Trindade é 'consubstancial, uma só divindade em três subsistências'.",
    },
    {
      erro: "Diteísmo devocional",
      formulacao:
        "Introdução de duas adorações (dyo proskynēseis) em Cristo, uma para a natureza divina e outra para a natureza humana, como se houvesse dois filhos.",
      fundamento:
        "Anátemas 7 e 8. A adoração é única e dirigida à pessoa do Verbo encarnado com sua carne.",
    },
  ],

  limitesDoutrinarios: [
    {
      questao: "Duas vontades em Cristo (dyothelismo vs. monotelismo)",
      posicao:
        "O concílio não se pronunciou explicitamente sobre a questão das vontades em Cristo. A fórmula 'padeceu voluntariamente na carne' (anátema 3) implica a existência de uma vontade humana real, mas o tema não foi debatido nem dogmatizado.",
      razao:
        "A controvérsia monotelita ainda não havia emergido em 553. A questão seria suscitada apenas no século VII pelo imperador Heráclio e pelo patriarca Sérgio I de Constantinopla, e seria resolvida pelo Terceiro Concílio de Constantinopla (680–681), que dogmatizou o dyothelismo.",
    },
    {
      questao: "Processão do Espírito Santo (Filioque)",
      posicao:
        "O concílio reafirmou a processão do Espírito 'do Pai' conforme o Símbolo de 381, sem qualquer menção ao Filho como princípio de processão.",
      razao:
        "A cláusula Filioque ainda não havia sido inserida no Credo no Ocidente e não constituía objeto de controvérsia em 553. A questão emergiria apenas a partir do século IX com Fócio de Constantinopla.",
    },
    {
      questao: "Natureza da alma de Cristo",
      posicao:
        "O concílio pressupõe que Cristo possui uma alma humana racional (nous), conforme a tradição antiapolinarista de Calcedônia, mas não debate explicitamente a psicologia de Cristo.",
      razao:
        "A questão da alma racional de Cristo havia sido resolvida pelo Concílio de Constantinopla I (381) contra Apolinário de Laodiceia e não estava em disputa em 553.",
    },
    {
      questao: "Predestinação e graça (controvérsia pelagiana/semipelagiana)",
      posicao:
        "O concílio não abordou questões de soteriologia antropológica (graça, livre-arbítrio, predestinação, pecado original).",
      razao:
        "A controvérsia pelagiana havia sido resolvida no Ocidente pelos Concílios de Cartago (418) e Orange II (529), e não era objeto de disputa no Oriente bizantino de 553. O foco do concílio era exclusivamente cristológico e trinitário.",
    },
    {
      questao: "Eclesiologia e primado papal",
      posicao:
        "O concílio não emitiu definições dogmáticas sobre a natureza do primado papal, a relação entre os patriarcados ou a estrutura da pentarquia.",
      razao:
        "Embora a crise de Vigílio tenha tornado a questão do primado extremamente urgente na prática, o concílio evitou deliberadamente pronunciamentos teológicos sobre o papado, limitando-se à distinção canônica persona/sedes na sétima sessão. A eclesiologia do primado permaneceria como tema de disputa entre Oriente e Ocidente por mais de um milênio.",
    },
    {
      questao: "Escatologia e apocatástase",
      posicao:
        "O concílio não emitiu definições dogmáticas formais sobre a apocatástase (restauração universal) ou sobre a eternidade das penas do inferno, embora os anátemas contra o origenismo (tratados separadamente na sessão pré-conciliar de 543 e possivelmente ratificados em 553) condenassem a doutrina da apocatástase origenista.",
      razao:
        "A condenação do origenismo em 553 é objeto de debate historiográfico: alguns estudiosos (Hefele, Diekamp) argumentam que os quinze anátemas contra Orígenes foram ratificados pelo concílio ecumênico; outros (Price, 2009) sustentam que foram emitidos em um sínodo pré-conciliar separado e apenas associados retroativamente a Constantinopla II.",
    },
  ],

  resumoTeologico:
    "O Segundo Concílio de Constantinopla (553) representa o momento de maturação da síntese neocalcedoniana, a corrente teológica que buscou harmonizar a Definição de Calcedônia (451) com a tradição ciriliana de Éfeso (431) mediante a elevação dos Doze Capítulos de Cirilo de Alexandria ao status de norma hermenêutica obrigatória. O concílio realizou três operações teológicas fundamentais: (1) Cirilizou Calcedônia, reafirmando a linguagem de 'duas naturezas' mas interpretando-a à luz da união hipostática (henōsis kath' hypostasin) e da fórmula 'uma natureza encarnada do Verbo de Deus' (mia physis tou Theou Logou sesarkōmenē); (2) Dogmatizou o teopasquismo moderado, consagrando a fórmula 'Um da Trindade padeceu na carne' como expressão legítima e obrigatória da fé calcedonense, rejeitando tanto o patripassianismo radical quanto o nestorianismo impassibilista; (3) Condenou os Três Capítulos (Teodoro de Mopsuéstia, escritos anticyrilianos de Teodoreto, Epístola de Ibas a Maris) como expressões paradigmáticas do nestorianismo criptográfico que ameaçava corromper a interpretação de Calcedônia a partir de dentro. O resultado foi uma cristologia de extraordinária sofisticação técnica — baseada na distinção entre physis como essência (Calcedônia) e physis como hipóstase (Cirilo), na teoria da enhypostasia (Leôncio de Bizâncio) e na comunicação de idiomas irrestrita — que se tornaria a base da ortodoxia bizantina e influenciaria profundamente a teologia de João de Damasco, Fócio e Gregório Palamas. Contudo, o custo eclesiológico da síntese foi imenso: a condenação dos Três Capítulos precipitou o Cisma Tricapitulino no Ocidente, aprofundou a alienação entre Roma e Constantinopla, e não alcançou seu objetivo político primário de reconciliação com os miáfisitas, que rejeitaram Calcedônia independentemente de sua interpretação ciriliana. O concílio permanece, assim, como um monumento à capacidade da teologia cristã de produzir sínteses dogmáticas de grande beleza e coerência interna, mas também como um alerta sobre os limites da engenharia teológica imposta por decreto imperial.",
};