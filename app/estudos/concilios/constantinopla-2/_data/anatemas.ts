// app/estudos/concilios/constantinopla-2/_data/anatemas.ts

export interface Anatema {
  numero: number;
  titulo: string;
  textoLatim: string;
  textoPortugues: string;
  alvo: string;
  analise: string;
  baseBiblica: string;
  basePatristica: string;
  conexoesComOutrosConcilios: string;
}

export interface Anatemas {
  introducao: string;
  anatemas: Anatema[];
  notaHermeneutica: string;
}

export const anatemas: Anatemas = {
  introducao:
    "Os catorze anátemas (anathematismoi) promulgados na oitava sessão do Segundo Concílio de Constantinopla (2 de junho de 553) constituem o coração dogmático de todo o concílio e representam a formulação mais elaborada do neocalcedonianismo — a corrente teológica que buscou sintetizar a cristologia de Calcedônia (451) com a tradição ciriliana de Éfeso (431) mediante a recepção integral dos Doze Capítulos de Cirilo de Alexandria como norma hermenêutica do Tomo de Leão. Redigidos originalmente em grego koiné eclesiástico e preservados na versio latina antiqua das atas conciliares (ACO IV.1–2), os anátemas seguem uma estrutura lógico-teológica tripartida: (I) Anátemas 1–5 estabelecem a ortodoxia trinitária e cristológica fundamental, reafirmando a consubstancialidade, as duas natividades do Logos, a unidade de sujeito em Cristo, a união hipostática e a legitimidade da fórmula 'em duas naturezas' quando corretamente compreendida; (II) Anátemas 6–10 aprofundam as implicações soteriológicas e devocionais da união hipostática, tratando da Theotokos, da adoração única, da fórmula teopasquista e da divindade plena do Cristo encarnado; (III) Anátemas 11–14 aplicam os princípios dogmáticos ao caso concreto dos Três Capítulos, condenando nominalmente Teodoro de Mopsuéstia, os escritos anticyrilianos de Teodoreto, a Epístola de Ibas a Maris e todos os defensores dessas obras. A linguagem dos anátemas é deliberadamente ciriliana: termos como 'união segundo a hipóstase' (kath' hypostasin henōsis), 'comunicação de idiomas' (communicatio idiomatum / antidosis tōn idiomatōn) e 'Um da Trindade padeceu na carne' (heis tēs Triados peponten sarki) são extraídos diretamente do vocabulário dos Doze Capítulos de Cirilo e do Segundo Concílio de Constantinopla (553), sinalizando a intenção programática de ler Calcedônia através das lentes de Éfeso.",

  anatemas: [
    {
      numero: 1,
      titulo: "Consubstancialidade trinitária e adoração da Trindade em três hipóstases",
      textoLatim:
        "Si quis non confitetur Patris et Filii et Spiritus Sancti unam naturam sive substantiam, unam virtutem et potestatem, Trinitatem consubstantialem, unam deitatem in tribus subsistentiis sive personis adorandam: anathema sit.",
      textoPortugues:
        "Se alguém não confessar que o Pai, o Filho e o Espírito Santo possuem uma só natureza ou substância, uma só virtude e potência, a Trindade consubstancial, uma só divindade adorável em três subsistências ou pessoas: seja anátema.",
      alvo:
        "Tritheísmo, subordinacionismo ariano e macedoniano, e toda forma de negação da consubstancialidade (homoousios) trinitária.",
      analise:
        "O primeiro anátema funciona como proêmio dogmático de todo o concílio, reafirmando a fé niceno-constantinopolitana como fundamento inegociável de toda a cristologia subsequente. A formulação é notavelmente precisa ao utilizar a dupla terminologia 'natureza ou substância' (physis ē ousia) e 'subsistências ou pessoas' (hypostaseis ē prosōpa), refletindo a síntese terminológica alcançada pela teologia capadócia e ratificada pelo Concílio de Constantinopla I (381). A ênfase na adoração única (mia latreia) da Trindade em três hipóstases antecipa a lógica dos anátemas cristológicos: assim como a Trindade é uma em três, Cristo é um em duas naturezas. A estrutura analógica Trindade-Cristo é fundamental para o neocalcedonianismo, que insiste em que a unidade de sujeito em Cristo (um hypostasis) é tão inegociável quanto a unidade de substância na Trindade (mia ousia). O anátema também exclui implicitamente o modalismo sabeliano ao insistir nas 'três subsistências' reais e distintas.",
      baseBiblica:
        "Mt 28,19 ('Batizai-os em nome do Pai, do Filho e do Espírito Santo'); Jo 10,30 ('Eu e o Pai somos um'); Jo 14,9 ('Quem me viu, viu o Pai'); 2Cor 13,13 ('A graça do Senhor Jesus Cristo, o amor de Deus e a comunhão do Espírito Santo'); 1Jo 5,7 (Comma Johanneum, na tradição latina: 'Três são os que dão testemunho no céu').",
      basePatristica:
        "Atanásio de Alexandria, Epistula ad Serapionem I.28 (consubstancialidade do Espírito); Basílio de Cesareia, De Spiritu Sancto 45 (uma ousia, três hypostaseis); Gregório de Nazianzo, Oratio 31.9 (a monarquia do Pai e a igualdade das três pessoas); Gregório de Nissa, Ad Ablabium (analogia dos três homens de ouro); Cirilo de Alexandria, Thesaurus de Trinitate, assertio 34.",
      conexoesComOutrosConcilios:
        "Reafirmação direta do Símbolo Niceno-Constantinopolitano (381) e do primeiro anátema do Concílio de Éfeso (431), que condenou os que 'dividem as substâncias' da Trindade. O anátema também pressupõe a definição do Concílio de Calcedônia (451), cujo preâmbulo confessa 'um só Deus em Trindade'. A inovação de Constantinopla II reside na explicitação da dupla terminologia (physis/ousia, hypostasis/prosōpon) como garantia contra leituras unilaterais.",
    },
    {
      numero: 2,
      titulo: "Duas natividades do Verbo de Deus: eterna e temporal",
      textoLatim:
        "Si quis non confitetur Dei Verbi duas esse nativitates, unam quidem ante saecula ex Patre intemporaliter atque incorporaliter, alteram vero in novissimis diebus eiusdem qui descendit de caelis et incarnatus est de sancta gloriosa Dei Genitrice semperque Virgine Maria et natus est ex ea: anathema sit.",
      textoPortugues:
        "Se alguém não confessar que o Verbo de Deus possui duas natividades, uma antes dos séculos, do Pai, intemporal e incorporeamente, e outra nos últimos dias, do mesmo que desceu dos céus e se encarnou da santa e gloriosa Mãe de Deus e sempre Virgem Maria, e dela nasceu: seja anátema.",
      alvo:
        "Arianismo (negação da geração eterna), adocionismo (negação da preexistência do Logos), e toda forma de cristologia que reconheça apenas uma natividade (seja apenas divina, como no docetismo, seja apenas humana, como no ebionismo).",
      analise:
        "O segundo anátema estabelece o princípio cristológico fundamental de que o sujeito (hypokeimenon) de ambas as natividades é o mesmo e único Verbo de Deus (ho autos). A expressão 'do mesmo que' (eiusdem / tou autou) é a chave teológica: não há um sujeito divino que nasce do Pai e um sujeito humano que nasce de Maria, mas um único sujeito divino que possui duas origens (archai). A qualificação 'intemporal e incorporeamente' (achronōs kai asōmatōs) para a geração eterna e 'nos últimos dias' (ep' eschatōn tōn hēmerōn) para a encarnação estabelece a assimetria ontológica entre as duas natividades sem comprometer a realidade de nenhuma delas. A inclusão dos títulos 'Mãe de Deus' (Theotokos) e 'sempre Virgem' (aeiparthenos) já antecipa os anátemas 6 e 9, criando uma estrutura de referências cruzadas interna ao documento.",
      baseBiblica:
        "Jo 1,1–14 ('No princípio era o Verbo... e o Verbo se fez carne'); Jo 8,58 ('Antes que Abraão existisse, Eu Sou'); Gl 4,4 ('Quando veio a plenitude dos tempos, Deus enviou seu Filho, nascido de mulher'); Hb 1,1–3 ('Nos últimos dias nos falou pelo Filho'); Mq 5,2 ('Suas origens são desde os dias da eternidade'); Is 7,14 (LXX: 'A virgem conceberá').",
      basePatristica:
        "Cirilo de Alexandria, Segundo Anátema (Doze Capítulos): 'Se alguém não confessa que o Verbo de Deus Pai foi unido hipostaticamente à carne...'; Leão Magno, Tomus Leonis 3: 'A geração eterna não prejudica a temporal, nem a temporal diminui a eterna'; Gregório de Nazianzo, Epistula 101 ad Cledonium: 'O que não foi assumido não foi curado'.",
      conexoesComOutrosConcilios:
        "Desenvolvimento direto da cláusula cristológica do Símbolo Niceno ('gerado, não criado, consubstancial ao Pai') e do Símbolo Constantinopolitano ('desceu dos céus e se encarnou do Espírito Santo e da Virgem Maria'). O anátema ratifica a linguagem de Calcedônia ('um e o mesmo Cristo, Filho, Senhor, Unigênito, reconhecido em duas naturezas') e a eleva ao nível de anátema formal contra qualquer interpretação que divida o sujeito das duas natividades.",
    },
    {
      numero: 3,
      titulo: "Unidade de sujeito em Cristo: um só autor dos milagres e da paixão",
      textoLatim:
        "Si quis dicit alium esse Verbum Dei miracula operantem et alium Christum passum, vel Deo Verbo unigenito unitum esse hominem Christum, et non potius unum eundemque esse Iesum Christum Dei Verbum, et miracula et passionem voluntarie in carne perpessum: anathema sit.",
      textoPortugues:
        "Se alguém diz que um é o Verbo de Deus que opera milagres e outro é o Cristo que padeceu, ou que ao Verbo de Deus Unigênito foi unido um homem Cristo, e não confessa antes que um e o mesmo é Jesus Cristo, Verbo de Deus, e que tanto os milagres quanto a paixão foram voluntariamente suportados na carne: seja anátema.",
      alvo:
        "Nestorianismo clássico (dois sujeitos em Cristo: o Logos divino e o homem Jesus), nestorianismo mitigado de Teodoro de Mopsuéstia (união por 'inhabitação' ou 'boa vontade'), e toda cristologia de 'dois filhos' (dyohuismos).",
      analise:
        "O terceiro anátema é o ataque mais direto ao núcleo da cristologia nestoriana e teodoriana: a divisão de Cristo em dois sujeitos de predicação (dyo prosōpa), um divino (operador de milagres) e outro humano (sujeito da paixão). A fórmula 'um e o mesmo' (heis kai ho autos / unus idemque) é o shibboleth da cristologia ciriliana, repetido obsessivamente nos Doze Capítulos e no Tomo de Leão. O anátema rejeita especificamente a linguagem de Teodoro de Mopsuéstia, que distinguia entre o Logos que 'habita' no homem Jesus (ho enoikōn) e o homem que 'é habitado' (ho enoikoumenos), criando dois centros de ação (energeiai) em Cristo. A qualificação 'voluntariamente na carne' (hekousiōs en sarki / voluntarie in carne) é crucial: ela afirma que a paixão é real (contra o docetismo) e voluntária (contra o patripassianismo), mas que seu sujeito é o próprio Verbo encarnado, não um homem autônomo ao qual o Verbo está 'associado'.",
      baseBiblica:
        "Jo 1,14 ('O Verbo se fez carne'); Jo 10,17–18 ('Eu dou a minha vida e a retomo'); Fl 2,6–8 ('Esvaziou-se a si mesmo, assumindo a forma de servo'); Hb 2,14 ('Participou igualmente de carne e sangue'); 1Pe 3,18 ('Cristo padeceu uma vez pelos pecados'); At 3,15 ('Matastes o Autor da vida').",
      basePatristica:
        "Cirilo de Alexandria, Quarto Anátema: 'Se alguém distribui entre duas pessoas ou hipóstases as expressões dos Evangelhos...'; Terceiro Anátema: 'Se alguém divide no único Cristo as hipóstases após a união'; Leão Magno, Tomus Leonis 5: 'Um e o mesmo é verdadeiramente Filho de Deus e verdadeiramente filho do homem'; João de Damasco, De Fide Orthodoxa III.4.",
      conexoesComOutrosConcilios:
        "Reafirmação explícita do Primeiro Anátema de Éfeso (431) contra Nestório e da definição de Calcedônia (451): 'um e o mesmo Cristo, Filho, Senhor, Unigênito'. O anátema vai além de Calcedônia ao condenar explicitamente a linguagem de 'um homem unido ao Verbo' (homo Christo unitus), que era a formulação preferida de Teodoro de Mopsuéstia e que Calcedônia não havia rejeitado nominalmente.",
    },
    {
      numero: 4,
      titulo: "União hipostática contra uniões meramente morais ou relacionais",
      textoLatim:
        "Si quis secundum gratiam aut secundum operationem aut secundum dignitatem aut secundum aequalitatem honoris aut secundum auctoritatem aut secundum relationem aut secundum potentiam dicit factam unionem Dei Verbi ad carnem, aut secundum bonam voluntatem quasi complacentis Deo Verbo in homine Christo, et non potius secundum compositionem secundum subsistentiam, sicut patres docuerunt: anathema sit.",
      textoPortugues:
        "Se alguém diz que a união do Verbo de Deus com a carne se fez segundo a graça, ou segundo a operação, ou segundo a dignidade, ou segundo a igualdade de honra, ou segundo a autoridade, ou segundo a relação, ou segundo a potência, ou segundo a boa vontade, como se o Verbo de Deus se comprazesse no homem Cristo, e não antes segundo a composição, segundo a subsistência, como os Padres ensinaram: seja anátema.",
      alvo:
        "Cristologia de 'inhabitação' (enoikēsis) de Teodoro de Mopsuéstia, unionismo moral de Nestório (synapheia kata eudokian), e toda forma de união que reduza o vínculo entre o Logos e a humanidade a uma mera relação externa (kata schesin) em vez de uma união ontológica real (kath' hypostasin).",
      analise:
        "O quarto anátema é o mais tecnicamente sofisticado de todo o conjunto e constitui o coração da refutação neocalcedoniana do nestorianismo. A enumeração de sete modalidades de união insuficiente (graça, operação, dignidade, igualdade de honra, autoridade, relação, potência) é uma taxonomia exaustiva das alternativas à união hipostática, muitas delas extraídas diretamente dos escritos de Teodoro e Nestório. A expressão 'boa vontade' (eudokia / bona voluntas) é particularmente significativa: ela remonta à fórmula nestoriana de que o Logos se uniu ao homem Jesus 'por complacência' (kat' eudokian), como um rei que habita em um palácio sem se confundir com a construção. O anátema contrapõe a essa multiplicidade de uniões extrínsecas a fórmula ciriliana 'segundo a composição, segundo a subsistência' (kata synthesein, kath' hypostasin / secundum compositionem, secundum subsistentiam), que afirma uma união real, ontológica e inseparável na qual o Logos assume a natureza humana em sua própria hipóstase divina. O termo 'composição' (synthesis) é deliberadamente ousado: ele foi criticado pelos antioquenos como tendente ao monofisismo, mas os neocalcedonianos o interpretaram como sinônimo de 'união hipostática' (henōsis kath' hypostasin), não como 'mistura' (krasis) ou 'confusão' (synchysis).",
      baseBiblica:
        "Jo 1,14 ('O Verbo se fez carne e habitou entre nós' — o verbo eskēnōsen implica inhabitação real, não mera associação); Cl 2,9 ('Nele habita corporalmente toda a plenitude da divindade'); Hb 2,16–17 ('Não assumiu a natureza dos anjos, mas a descendência de Abraão'); Jo 17,21–23 (a oração sacerdotal como modelo de união real, não meramente moral).",
      basePatristica:
        "Cirilo de Alexandria, Segundo Anátema: 'unido hipostaticamente à carne' (kath' hypostasin henōthenta tē sarki); Quinto Anátema contra a 'mera relação de autoridade'; Leão Magno, Tomus Leonis 4: 'cada natureza conserva suas propriedades sem diminuição'; Gregório de Nazianzo, Epistula 101: 'a união é real, não aparente'; Atanásio, Contra Apollinarium I.6.",
      conexoesComOutrosConcilios:
        "O anátema desenvolve e radicaliza a definição de Calcedônia ('sem confusão, sem mudança, sem divisão, sem separação') ao especificar que a 'não separação' calcedonense implica uma união hipostática real, não meramente moral ou relacional. A condenação da 'união por graça' (kata charin) é uma rejeição direta da leitura nestoriana de Calcedônia, que interpretava a 'união em uma pessoa' (hen prosōpon) como união de dignidade e honra, não de substância.",
    },
    {
      numero: 5,
      titulo: "Uso legítimo da fórmula 'em duas naturezas' contra a divisão nestoriana",
      textoLatim:
        "Si quis unam personam Domini nostri Iesu Christi in duabus naturis intellegendam esse dicit ad introducendam divisionem, et non potius unum eundemque Iesum Christum Dei Verbum in duabis naturis secundum differentiam inconfuse cognoscendum esse confitetur, sicut sancta patrum synodus Calcedonensis docuit: anathema sit.",
      textoPortugues:
        "Se alguém diz que a expressão 'uma pessoa de nosso Senhor Jesus Cristo em duas naturezas' deve ser entendida de modo a introduzir divisão, e não confessa antes que um e o mesmo Jesus Cristo, Verbo de Deus, deve ser reconhecido em duas naturezas segundo a diferença, inconfusamente, como ensinou o santo sínodo dos Padres de Calcedônia: seja anátema.",
      alvo:
        "Leitura nestoriana da fórmula calcedonense 'em duas naturezas' (en dyo physesin), que interpretava a dualidade como separação de sujeitos; miáfisismo radical que rejeitava inteiramente a fórmula 'em duas naturezas' como nestoriana.",
      analise:
        "O quinto anátema é uma obra-prima de equilíbrio teológico e o mais claramente neocalcedoniano de todo o conjunto. Ele realiza simultaneamente duas operações: (1) condena a leitura nestoriana de Calcedônia, que usava 'em duas naturezas' para reintroduzir a divisão em dois sujeitos (dyo prosōpa); (2) reafirma a legitimidade da própria fórmula 'em duas naturezas', rejeitando assim o miáfisismo radical que a considerava intrinsecamente herética. A chave hermenêutica está na expressão 'segundo a diferença' (kata tēn diaphoran / secundum differentiam): as duas naturezas são reais e distintas (contra Eutiques), mas a diferença é de natureza (physis), não de sujeito (hypostasis). O anátema cita explicitamente 'o santo sínodo dos Padres de Calcedônia', sinalizando que Constantinopla II não pretende substituir Calcedônia, mas interpretá-la corretamente contra leituras divergentes. Esta é a essência do neocalcedonianismo: Calcedônia é ortodoxa, mas deve ser lida com as lentes de Cirilo.",
      baseBiblica:
        "Rm 1,3–4 ('descendente de Davi segundo a carne, constituído Filho de Deus em poder segundo o Espírito de santidade'); 1Tm 3,16 ('manifestado na carne, justificado no Espírito'); Cl 2,9 ('toda a plenitude da divindade habita corporalmente'); Jo 1,14 (dupla realidade: Verbo e carne).",
      basePatristica:
        "Cirilo de Alexandria, Epistula ad Acacium Beroeensem (aceitação da fórmula 'em duas naturezas' após 433); Leão Magno, Tomus Leonis 4: 'cada natureza realiza o que lhe é próprio em comunhão com a outra'; Proclo de Constantinopla, Tomus ad Armenios (fórmula 'de duas naturezas em uma hipóstase'); João de Damasco, De Fide Orthodoxa III.3–7.",
      conexoesComOutrosConcilios:
        "Reafirmação e reinterpretação da definição de Calcedônia (451): 'reconhecido em duas naturezas, sem confusão, sem mudança, sem divisão, sem separação'. O anátema resolve a ambiguidade que os miáfisitas exploravam: 'em duas naturezas' (en dyo physesin) não significa 'dividido em duas naturezas' (ek dyo physeōn diairetōs). A fórmula de Cirilo 'uma natureza encarnada do Verbo' (mia physis tou Theou Logou sesarkōmenē) é compatibilizada com 'em duas naturezas' mediante a distinção entre physis como 'natureza concreta' (Cirilo) e physis como 'essência abstrata' (Calcedônia).",
    },
    {
      numero: 6,
      titulo: "Theotokos própria e verdadeira contra a maternidade meramente relacional",
      textoLatim:
        "Si quis non confitetur proprie et secundum veritatem Dei Genitricem sanctam gloriosam semperque Virginem Mariam, sed dicit secundum relationem eam esse Dei Genitricem, quasi homine puro nato et non Deo Verbo proprie et secundum veritatem ex ea incarnato et nato, et incarnationem Dei Verbi ad relationem quandam reducit: anathema sit.",
      textoPortugues:
        "Se alguém não confessa própria e verdadeiramente como Mãe de Deus a santa e gloriosa sempre Virgem Maria, mas diz que ela é Mãe de Deus apenas segundo a relação, como se um homem puro tivesse nascido e não o Verbo de Deus própria e verdadeiramente dela se tivesse encarnado e nascido, e reduz a encarnação do Verbo de Deus a uma mera relação: seja anátema.",
      alvo:
        "Nestorianismo (Christotokos em vez de Theotokos), nestorianismo mitigado de Teodoro de Mopsuéstia (Maria como mãe do 'homem assumido', não do Logos), e toda cristologia que reduza a maternidade divina a uma relação funcional ou honorífica (kata schesin) em vez de ontológica (kat' alētheian).",
      analise:
        "O sexto anátema retoma e radicaliza a condenação de Nestório pelo Concílio de Éfeso (431), acrescentando uma precisão terminológica decisiva: a oposição entre 'própria e verdadeiramente' (kyriōs kai kat' alētheian / proprie et secundum veritatem) e 'segundo a relação' (kata schesin / secundum relationem). Esta última expressão é extraída diretamente do vocabulário de Teodoro de Mopsuéstia, que concedia o título Theotokos a Maria apenas 'por relação' — isto é, porque o homem Jesus, ao qual o Logos estava unido, nasceu dela, mas não porque o próprio Logos tenha nascido de Maria em sentido próprio. O anátema rejeita essa concessão nominal como insuficiente e enganosa: se o Logos não nasceu verdadeiramente de Maria, então a encarnação é uma ficção e a soteriologia colapsa (o que não foi assumido não foi curado, segundo o axioma de Gregório de Nazianzo). A inclusão de 'sempre Virgem' (aeiparthenos / semper Virgo) reforça a dimensão miraculosa e sobrenatural da encarnação contra qualquer naturalização.",
      baseBiblica:
        "Lc 1,43 ('De onde me vem esta honra, que a mãe do meu Senhor venha a mim?'); Lc 1,35 ('O Santo que nascer de ti será chamado Filho de Deus'); Is 7,14 LXX ('A virgem conceberá e dará à luz um filho, e seu nome será Emanuel'); Gl 4,4 ('Deus enviou seu Filho, nascido de mulher'); Mt 1,23 ('A virgem conceberá').",
      basePatristica:
        "Cirilo de Alexandria, Primeiro Anátema: 'Se alguém não confessa que Emanuel é verdadeiramente Deus e que, portanto, a Santa Virgem é Theotokos'; Gregório de Nazianzo, Epistula 101 ad Cledonium: 'Se alguém não reconhece Maria como Theotokos, está separado de Deus'; Atanásio, De Incarnatione 8; Proclo de Constantinopla, Homilia 1 in laudem Mariae.",
      conexoesComOutrosConcilios:
        "Reafirmação direta do Primeiro Anátema de Éfeso (431) contra Nestório e da definição de Calcedônia (451): 'nascido da Virgem Maria, Theotokos, segundo a humanidade'. O anátema de Constantinopla II vai além de ambos ao condenar explicitamente a concessão nominal de Theotokos 'kata schesin', que era a posição de Teodoro de Mopsuéstia e que nem Éfeso nem Calcedônia haviam rejeitado com essa precisão terminológica.",
    },
    {
      numero: 7,
      titulo: "Contra a divisão das naturezas antes e depois da união",
      textoLatim:
        "Si quis in duabus naturis dicens non adorat uno adoratione Deum Verbum incarnatum cum propria ipsius carne, sicut ab initio Dei Ecclesia tradidit, sed separatim adorat naturam divinam et naturam humanam, vel introducit duas adorationes duasque glorificationes, quasi duobus existentibus filiis: anathema sit.",
      textoPortugues:
        "Se alguém, dizendo 'em duas naturezas', não adora com uma só adoração o Verbo de Deus encarnado com sua própria carne, como desde o princípio a Igreja de Deus transmitiu, mas adora separadamente a natureza divina e a natureza humana, ou introduz duas adorações e duas glorificações, como se houvesse dois filhos: seja anátema.",
      alvo:
        "Diteísmo cristológico (duas adorações para dois sujeitos), nestorianismo litúrgico (separação devocional entre o Logos e o homem Jesus), e toda prática de piedade que implique dois centros de culto em Cristo.",
      analise:
        "O sétimo anátema desloca a discussão do plano dogmático-abstrato para o plano litúrgico-devocional, argumentando que a ortodoxia cristológica se manifesta concretamente na prática da adoração (proskynēsis / adoratio). O argumento é soteriológico e litúrgico simultaneamente: se adoramos a humanidade de Cristo separadamente de sua divindade, estamos adorando uma criatura (idolatria); se adoramos apenas a divindade sem incluir a humanidade assumida, estamos negando a realidade da encarnação (docetismo prático). A fórmula 'com sua própria carne' (syn tē idia autou sarki / cum propria ipsius carne) é crucial: a carne de Cristo não é um objeto de adoração independente, mas é adorada na e com a pessoa do Verbo encarnado, porque pertence hipostaticamente ao Logos. A referência à tradição 'desde o princípio' (ap' archēs / ab initio) invoca a antiguidade da prática litúrgica como critério de ortodoxia, um argumento típico da teologia bizantina.",
      baseBiblica:
        "Fl 2,10–11 ('Ao nome de Jesus se dobre todo joelho... e toda língua confesse que Jesus Cristo é o Senhor'); Jo 5,23 ('Para que todos honrem o Filho como honram o Pai'); Hb 1,6 ('Adorem-no todos os anjos de Deus'); Ap 5,12–14 (o Cordeiro recebe a mesma adoração que o Pai).",
      basePatristica:
        "Cirilo de Alexandria, Oitavo Anátema: 'Se alguém ousa dizer que o homem assumido deve ser coadorado com o Verbo de Deus... e não antes com uma só adoração'; Leão Magno, Sermo 27.2: 'A adoração é dirigida à pessoa, não à natureza'; Atanásio, Contra Arianos III.33.",
      conexoesComOutrosConcilios:
        "Desenvolvimento do Oitavo Anátema de Cirilo (aceito por Éfeso 431) e da definição de Calcedônia (451) sobre a unidade de pessoa. O anátema aplica o princípio calcedonense 'sem divisão' (adiairetōs) ao campo litúrgico, estabelecendo que a adoração única é o corolário prático da união hipostática.",
    },
    {
      numero: 8,
      titulo: "Adoração única do Verbo encarnado contra a dualidade de cultos",
      textoLatim:
        "Si quis dicens duas naturas adorandas esse, et non potius unam adoratione adorandam esse Deum Verbum incarnatum cum propria ipsius carne, sicut semper Dei Ecclesia tradidit, duas adorationes introducit, unam quidem Deo Verbo, alteram vero homini Christo: anathema sit.",
      textoPortugues:
        "Se alguém, dizendo que duas naturezas devem ser adoradas, e não antes que com uma só adoração deve ser adorado o Verbo de Deus encarnado com sua própria carne, como sempre a Igreja de Deus transmitiu, introduz duas adorações, uma ao Verbo de Deus e outra ao homem Cristo: seja anátema.",
      alvo:
        "Diteísmo devocional nestoriano, que distinguia entre a adoração de latria devida ao Logos e a adoração (relativa) devida ao homem Jesus, criando na prática dois objetos de culto.",
      analise:
        "O oitavo anátema complementa e reforça o sétimo, focando mais explicitamente na rejeição da 'dupla adoração' (dyo proskynēseis / duae adorationes) como heresia formal. A distinção que o anátema combate é a que Teodoro de Mopsuéstia e Nestório faziam entre a adoração 'absoluta' (kyria latreia) devida ao Logos e a adoração 'relativa' (schetikē proskynēsis) devida ao homem Jesus em virtude de sua união com o Logos. Para os neocalcedonianos, essa distinção é inaceitável porque pressupõe dois sujeitos de adoração e, portanto, dois filhos — exatamente o erro condenado no anátema 3. A formulação 'como sempre a Igreja de Deus transmitiu' (hōs aei hē tou Theou Ekklesia paredōken / sicut semper Dei Ecclesia tradidit) é um apelo à lex orandi, lex credendi: a prática litúrgica universal da Igreja, que sempre dirigiu uma única adoração a Cristo sem distinguir entre suas naturezas, é prova da fé ortodoxa.",
      baseBiblica:
        "Mt 4,10 ('Ao Senhor teu Deus adorarás e só a ele servirás'); Jo 5,23 ('Para que todos honrem o Filho como honram o Pai'); Ap 5,13 ('Àquele que está sentado no trono e ao Cordeiro, louvor e honra e glória'); Hb 1,6.",
      basePatristica:
        "Cirilo de Alexandria, Oitavo Anátema (Doze Capítulos); Leão Magno, Tomus Leonis 5: 'A adoração pertence à pessoa do Mediador, que é una'; João Crisóstomo, Homilia in Philippenses 7 (Fl 2,10).",
      conexoesComOutrosConcilios:
        "Reiteração e especificação do Oitavo Anátema de Éfeso (431) e da lógica unitária de Calcedônia (451). O anátema estabelece que a unidade de adoração é o teste prático da unidade hipostática: qualquer teologia que exija duas adorações é, de facto, nestoriana, independentemente de suas intenções declaradas.",
    },
    {
      numero: 9,
      titulo: "Fórmula teopasquista: 'Um da Trindade padeceu na carne'",
      textoLatim:
        "Si quis dicit Deum Verbum crucifixum esse secundum deitatem, aut secundum deitatem passum, et non potius confitetur unum de sancta Trinitate, scilicet Deum Verbum, passum esse in carne, sicut sancta patrum synodus Calcedonensis docuit: anathema sit.",
      textoPortugues:
        "Se alguém diz que o Verbo de Deus foi crucificado segundo a divindade, ou que padeceu segundo a divindade, e não confessa antes que Um da Santa Trindade, a saber, o Verbo de Deus, padeceu na carne, como ensinou o santo sínodo dos Padres de Calcedônia: seja anátema.",
      alvo:
        "Patripassianismo (o Pai padeceu na cruz), teopasquismo radical (a natureza divina sofreu em si mesma), nestorianismo (apenas o homem Jesus sofreu, não o Logos), e a rejeição da fórmula teopasquista por parte dos teólogos antioquenos e de alguns ocidentais.",
      analise:
        "O nono anátema é o mais célebre e controverso de todo o concílio, pois consagra dogmaticamente a fórmula teopasquista 'Um da Trindade padeceu na carne' (heis tēs hagias Triados peponten sarki / unus de sancta Trinitate passus est in carne). A fórmula, de origem cita e promovida pelos monges acemetas de Constantinopla, havia sido inicialmente recebida com suspeita em Roma pelo Papa Hormisdas (514–523), que a considerava potencialmente patripassiana. Justiniano, contudo, adotou-a como pedra angular de sua política de reconciliação com os miáfisitas e a inseriu no Édito dos Três Capítulos (544/545). O anátema é cuidadosamente equilibrado: ele rejeita tanto o teopasquismo radical ('padeceu segundo a divindade' — a natureza divina é impassível por essência) quanto o nestorianismo (apenas o homem sofreu — o que nega a comunicação de idiomas). A solução é a fórmula 'padeceu na carne' (en sarki / in carne): o sujeito da paixão é o próprio Verbo divino (não um homem autônomo), mas o modo da paixão é carnal (não divino). A qualificação 'na carne' funciona como qualificador modal que preserva simultaneamente a realidade da paixão e a impassibilidade da natureza divina.",
      baseBiblica:
        "At 20,28 ('A Igreja de Deus, que ele adquiriu com seu próprio sangue'); 1Co 2,8 ('Crucificaram o Senhor da glória'); 1Pe 4,1 ('Cristo padeceu na carne'); Hb 5,8 ('Embora sendo Filho, aprendeu a obediência pelas coisas que sofreu'); Jo 19,34 ('Um dos soldados traspassou-lhe o lado'); 1Jo 1,7 ('O sangue de Jesus, seu Filho, nos purifica').",
      basePatristica:
        "Cirilo de Alexandria, Décimo Segundo Anátema: 'Se alguém não confessa que o Verbo de Deus padeceu na carne, foi crucificado na carne e provou a morte na carne...'; Gregório de Nazianzo, Epistula 101: 'Deus nasceu, Deus morreu — o que pode ser mais paradoxal?'; Inácio de Antioquia, Ad Ephesios 7.2: 'Deus apareceu em forma humana'; Proclo de Constantinopla, Tomus ad Armenios.",
      conexoesComOutrosConcilios:
        "O anátema ratifica o Décimo Segundo Anátema de Cirilo (aceito por Éfeso 431) e reinterpreta Calcedônia (451) à luz da fórmula teopasquista. A referência explícita a 'o santo sínodo dos Padres de Calcedônia' é estratégica: os neocalcedonianos argumentavam que a própria Calcedônia, ao confessar que 'um e o mesmo Cristo padeceu', já implicava o teopasquismo moderado. A fórmula seria posteriormente incorporada ao Trisagion bizantino ('Santo Deus, Santo Forte, Santo Imortal, que foste crucificado por nós, tem piedade de nós') e permanece na liturgia ortodoxa até hoje.",
    },
    {
      numero: 10,
      titulo: "Divindade plena do Cristo encarnado contra o adocionismo e a kenose radical",
      textoLatim:
        "Si quis non confitetur Dominum nostrum Iesum Christum, qui crucifixus est carne, verum Deum esse et Dominum gloriae unumque de sancta Trinitate: anathema sit.",
      textoPortugues:
        "Se alguém não confessa que nosso Senhor Jesus Cristo, que foi crucificado na carne, é verdadeiro Deus e Senhor da glória e Um da Santa Trindade: seja anátema.",
      alvo:
        "Adocionismo (Cristo como mero homem adotado por Deus), arianismo (Cristo como criatura superior), psilantropismo (Cristo como 'mero homem'), e toda cristologia que negue a divindade plena e ontológica do Cristo encarnado e crucificado.",
      analise:
        "O décimo anátema funciona como síntese soteriológica dos nove anteriores, afirmando que o sujeito da crucificação ('que foi crucificado na carne') é idêntico ao 'verdadeiro Deus' (alēthinos Theos) e 'Senhor da glória' (Kyrios tēs doxēs). A expressão 'Um da Santa Trindade' (heis tēs hagias Triados / unus de sancta Trinitate) reitera a fórmula teopasquista do anátema 9 e a conecta explicitamente com a plena divindade de Cristo. O anátema combate a tendência nestoriana de atribuir a crucificação apenas à natureza humana, preservando a divindade do Logos em uma esfera de impassibilidade intocada. Para os neocalcedonianos, essa separação é soteriologicamente catastrófica: se não foi o próprio Deus quem morreu na cruz, então a morte de Cristo não tem valor infinito e a redenção é insuficiente. A qualificação 'na carne' (sarki / carne) preserva a impassibilidade da natureza divina sem negar a realidade da paixão do sujeito divino.",
      baseBiblica:
        "1Co 2,8 ('Nenhum dos príncipes deste mundo a conheceu; se a tivessem conhecido, não teriam crucificado o Senhor da glória'); Tt 2,13 ('Aguardando a bendita esperança e a manifestação da glória do nosso grande Deus e Salvador Jesus Cristo'); Rm 9,5 ('Cristo, que é Deus sobre todos, bendito para sempre'); Jo 20,28 ('Meu Senhor e meu Deus!'); 1Jo 5,20 ('Este é o verdadeiro Deus e a vida eterna').",
      basePatristica:
        "Cirilo de Alexandria, Terceiro Anátema e Décimo Segundo Anátema; Atanásio, De Incarnatione 9: 'O Verbo de Deus, sendo Deus, padeceu na carne'; Gregório de Nazianzo, Oratio 30.1: 'O que é impassível por natureza tornou-se passível por economia'; Leão Magno, Tomus Leonis 6.",
      conexoesComOutrosConcilios:
        "Reafirmação da cláusula do Símbolo Niceno ('Deus verdadeiro de Deus verdadeiro, gerado, não criado, consubstancial ao Pai') e da definição de Calcedônia ('um e o mesmo Cristo... verdadeiro Deus e verdadeiro homem'). O anátema aplica o homoousios niceno ao contexto da crucificação, afirmando que o crucificado é consubstancial ao Pai.",
    },
    {
      numero: 11,
      titulo: "Condenação de Teodoro de Mopsuéstia e de seus escritos ímpios",
      textoLatim:
        "Si quis non anathematizat Theodorum Mopsuestenum, qui dixit alium esse Deum Verbum et alium Christum, et qui non confitetur eum haereticum esse et impia eius scripta: anathema sit.",
      textoPortugues:
        "Se alguém não anatematiza Teodoro de Mopsuéstia, que disse ser um o Verbo de Deus e outro o Cristo, e que não confessa que ele é herege e que seus escritos são ímpios: seja anátema.",
      alvo:
        "Teodoro de Mopsuéstia (c. 350–428) pessoalmente e toda a sua obra teológica, particularmente o Comentário ao Evangelho de João, o Tratado Sobre a Encarnação, os Comentários aos Salmos e às Epístolas Paulinas, e o Tratado Contra os Defensores do Pecado Original.",
      analise:
        "O décimo primeiro anátema marca a transição da parte dogmática (anátemas 1–10) para a parte disciplinar-histórica (anátemas 11–14) do documento. A condenação de Teodoro é a mais grave de todo o concílio, pois atinge não apenas seus escritos, mas sua pessoa — um bispo que morreu na comunhão da Igreja há 125 anos e que era venerado como 'o Intérprete' (ho exēgētēs) por excelência em toda a tradição siríaca oriental (Igreja do Oriente, futura Igreja Assíria). A acusação central — 'disse ser um o Verbo de Deus e outro o Cristo' — resume a cristologia de Teodoro como os neocalcedonianos a interpretavam: uma divisão radical entre o Logos divino e o 'homem assumido' (ho proslephtheis anthrōpos), unidos apenas por 'inhabitação' (enoikēsis) e 'boa vontade' (eudokia). A condenação pessoal de Teodoro, além de seus escritos, foi o aspecto mais contestado do concílio e a principal razão pela qual a Igreja do Oriente (persa) rejeitou inteiramente Constantinopla II e permanece separada até hoje.",
      baseBiblica:
        "Jo 1,14 ('O Verbo se fez carne' — contra a interpretação de Teodoro de que o Verbo 'habitou' no homem Jesus); Cl 2,9 ('Nele habita corporalmente toda a plenitude da divindade'); Hb 1,3 ('Ele é o resplendor da glória e a expressão exata da substância de Deus').",
      basePatristica:
        "Cirilo de Alexandria, Contra Diodorum et Theodorum (obra perdida, conhecida por fragmentos); Rabbula de Edessa, Epistula contra Theodorum (c. 435); Leôncio de Bizâncio, Contra Nestorianos et Eutychianos (c. 544); Facundo de Hermiane, Pro defensione trium capitulorum (c. 547, em defesa de Teodoro).",
      conexoesComOutrosConcilios:
        "O anátema vai além de Éfeso (431), que condenou Nestório mas não seu mestre Teodoro, e de Calcedônia (451), que não mencionou Teodoro. A condenação representa a extensão retroativa da lógica de Éfeso ao 'pai' do nestorianismo, uma operação que os defensores ocidentais dos Três Capítulos (Facundo de Hermiane, Pelágio I) consideraram canonicamente ilegítima por violar o princípio de que a Igreja não anatematiza os mortos.",
    },
    {
      numero: 12,
      titulo: "Condenação dos escritos de Teodoreto de Ciro contra Cirilo e o Concílio de Éfeso",
      textoLatim:
        "Si quis non anathematizat Theodoretum Cyriensem et impia eius scripta quae contra rectam fidem et contra duodecim capitula sancti Cyrilli et contra synodum Ephesinam conscripsit, et omnia quae pro Theodoro Mopsuesteno et Nestorio conscripsit: anathema sit.",
      textoPortugues:
        "Se alguém não anatematiza Teodoreto de Ciro e seus escritos ímpios que compôs contra a reta fé e contra os Doze Capítulos do santo Cirilo e contra o Sínodo de Éfeso, e tudo o que escreveu em defesa de Teodoro de Mopsuéstia e de Nestório: seja anátema.",
      alvo:
        "Os escritos anticyrilianos de Teodoreto de Ciro (c. 393–c. 460), especificamente: a Refutação dos Doze Capítulos de Cirilo (Pentalogos), a Apologia de Diodoro e Teodoro, e os trechos do Eranistes (O Mendigo) que contradizem a união hipostática. A pessoa de Teodoreto não é condenada, em respeito à sua reabilitação calcedonense.",
      analise:
        "O décimo segundo anátema é o mais juridicamente delicado dos Três Capítulos, pois Teodoreto havia sido pessoalmente reabilitado pelo Concílio de Calcedônia (451) após anatematizar Nestório em plenário. O concílio de 553 resolve a contradição mediante a distinção persona/syngrammata (pessoa/escritos): a reabilitação calcedonense aplicou-se à pessoa de Teodoreto (que morreu na comunhão da Igreja), mas não aos seus escritos anticyrilianos, que nunca foram formalmente examinados nem aprovados por Calcedônia. A condenação é circunscrita com precisão cirúrgica: apenas os escritos 'contra a reta fé, contra os Doze Capítulos de Cirilo e contra o Sínodo de Éfeso' são anatematizados, não a totalidade da obra teodoriana (seus comentários bíblicos, por exemplo, não são condenados). Essa nuance foi perdida na recepção ocidental, que interpretou o anátema como uma condenação global de Teodoreto e, portanto, como uma desautorização de Calcedônia.",
      baseBiblica:
        "Jo 1,14 (contra a interpretação de Teodoreto no Eranistes de que 'o Verbo não se fez carne propriamente, mas assumiu a carne'); Rm 8,3 ('Deus enviou seu Filho em semelhança de carne de pecado'); Hb 2,14–17 (a participação real de Cristo na natureza humana).",
      basePatristica:
        "Cirilo de Alexandria, Apologia contra Theodoretum (resposta direta à Refutação de Teodoreto); Leão Magno, Epistula 120 (sobre a compatibilidade entre o Tomo e os Doze Capítulos); Facundo de Hermiane, Pro defensione trium capitulorum IV–VI (defesa de Teodoreto).",
      conexoesComOutrosConcilios:
        "O anátema reinterpreta a Sessão VIII de Calcedônia (451), que reabilitou Teodoreto, argumentando que a reabilitação foi um ato de economia pastoral (oikonomia) e não de aprovação dogmática de todos os seus escritos. A distinção é canonicamente engenhosa mas historicamente questionável, pois os legados papais em 451 declararam 'Teodoreto é ortodoxo' sem ressalvas sobre seus escritos.",
    },
    {
      numero: 13,
      titulo: "Condenação da Epístola de Ibas de Edessa a Maris o Persa",
      textoLatim:
        "Si quis non anathematizat epistulam quam Ibas Edessenus ad Marin Persam scripsisse dicitur, in qua sanctum Cyrillum haereticum et Apollinaristam vocat, et duodecim eius capitula impia esse asserit, et synodum Ephesinam latrocinium nominat: anathema sit.",
      textoPortugues:
        "Se alguém não anatematiza a epístola que se diz Ibas de Edessa ter escrito a Maris o Persa, na qual chama o santo Cirilo de herege e apolinarista, e afirma que seus Doze Capítulos são ímpios, e denomina o Sínodo de Éfeso de latrocínio: seja anátema.",
      alvo:
        "A Epístola de Ibas de Edessa a Maris (c. 433–435), documento que havia sido lido e declarado ortodoxo pela Sessão X do Concílio de Calcedônia (451). A carta continha ataques virulentos a Cirilo de Alexandria e elogios a Teodoro de Mopsuéstia.",
      analise:
        "O décimo terceiro anátema é o mais canonicamente problemático de todo o concílio e a causa principal do Cisma Tricapitulino no Ocidente. A Epístola de Ibas a Maris havia sido explicitamente aprovada pelos legados papais Pascásio e Lucêncio na Sessão X de Calcedônia (451), que declararam: 'A carta é ortodoxa e Ibas é inocente.' O concílio de 553 contorna essa dificuldade mediante três argumentos: (1) a aprovação calcedonense foi um ato processual (krisis dikastikē) no contexto do julgamento pessoal de Ibas, não uma definição dogmática sobre o conteúdo da carta; (2) a carta contradiz frontalmente os Doze Capítulos de Cirilo, que Calcedônia aceitou como norma de fé, e portanto não pode ser simultaneamente ortodoxa; (3) se a carta fosse realmente ortodoxa, Ibas não teria precisado anatematizar Nestório para ser reabilitado — a aprovação da carta e a condenação de Nestório são logicamente incompatíveis. A argumentação é sofisticada, mas os bispos ocidentais a rejeitaram como casuística que destruía a autoridade de todas as decisões conciliares anteriores.",
      baseBiblica:
        "Lc 1,43 (contra a negação de Theotokos implícita na carta de Ibas); Jo 1,14 (contra a interpretação nestoriana da encarnação defendida por Ibas); Gl 1,8 ('Se alguém vos anunciar um evangelho diferente... seja anátema').",
      basePatristica:
        "Cirilo de Alexandria, Epistula ad Ibas (resposta às acusações de Ibas); Rabbula de Edessa, anátemas contra Ibas (c. 435); Leão Magno, Epistula 95 (sobre o caso de Ibas); Facundo de Hermiane, Pro defensione trium capitulorum VII–VIII (defesa da carta de Ibas como documento calcedonense).",
      conexoesComOutrosConcilios:
        "O anátema reinterpreta radicalmente a Sessão X de Calcedônia (451), distinguindo entre aprovação processual e aprovação dogmática. Esta reinterpretação foi rejeitada pelo Ocidente como uma falsificação das atas calcedonenses e como um precedente perigoso de revisionismo conciliar. O Papa Pelágio I (556–561), que inicialmente havia defendido os Três Capítulos como diácono, aceitou a condenação após sua eleição, mas sua mudança de posição foi interpretada como oportunismo pelos bispos do norte da Itália.",
    },
    {
      numero: 14,
      titulo: "Anátema geral contra todos os defensores dos Três Capítulos",
      textoLatim:
        "Si quis non anathematizat omnes quos sancta Dei Ecclesia anathematizat, et praedictos tres capitulos et omnes qui eos defendere vel excusare praesumpserunt aut praesumunt: anathema sit.",
      textoPortugues:
        "Se alguém não anatematiza todos aqueles que a santa Igreja de Deus anatematiza, e os Três Capítulos acima mencionados e todos os que ousaram ou ousam defendê-los ou desculpá-los: seja anátema.",
      alvo:
        "Todos os defensores passados, presentes e futuros dos Três Capítulos, incluindo Facundo de Hermiane, o diácono Pelágio (futuro Papa Pelágio I), os bispos da Ilíria e da Gália que resistiram ao Édito de Justiniano, e o próprio Papa Vigílio na fase do Constitutum I.",
      analise:
        "O décimo quarto e último anátema funciona como cláusula de encerramento e de aplicação universal, estendendo a condenação não apenas aos textos e autores dos Três Capítulos, mas a todos os que os defendem ou desculpam em qualquer época. A formulação 'ousaram ou ousam' (praesumpserunt aut praesumunt / etolmēsan ē tolmōsin) é deliberadamente atemporal, abrangendo tanto os defensores contemporâneos (Vigílio, Facundo, os bispos ilírios) quanto os futuros. O anátema também inclui a fórmula genérica 'todos aqueles que a santa Igreja de Deus anatematiza', que funciona como cláusula de abrangência para incluir quaisquer outros hereges não mencionados nominalmente. A implicação mais imediata do anátema era a excomunhão de facto de Vigílio, que, ao emitir o Constitutum I (14 de maio de 553), havia 'ousado defender' os Três Capítulos. A capitulação posterior de Vigílio (Epístola a Eutíquio, dezembro de 553; Constitutum II, fevereiro de 554) foi interpretada como submissão a este anátema.",
      baseBiblica:
        "Gl 1,8–9 ('Se alguém vos anunciar um evangelho diferente daquele que recebestes, seja anátema'); Rm 16,17 ('Afastai-vos dos que provocam divisões'); 2Jo 1,10 ('Se alguém vem a vós e não traz esta doutrina, não o recebais em casa'); 1Tm 6,20–21 ('Evita as contradições do falso conhecimento').",
      basePatristica:
        "Cirilo de Alexandria, Epistula ad Nestorium (fórmula de excomunhão geral); Leão Magno, Epistula 114 (sobre a obrigação de anatematizar os hereges); Agostinho, De Haeresibus (catálogo de heresias como instrumento de vigilância doutrinária).",
      conexoesComOutrosConcilios:
        "O anátema retoma a tradição dos anátemas gerais de encerramento presentes em todos os concílios ecumênicos anteriores (Niceia 325, Constantinopla I 381, Éfeso 431, Calcedônia 451). A inovação reside na aplicação retroativa a textos e autores que haviam sido tolerados ou aprovados por concílios anteriores, estabelecendo o precedente de que a ortodoxia é um critério dinâmico que pode reavaliar decisões passadas à luz de uma compreensão mais profunda da fé.",
    },
  ],

  notaHermeneutica:
    "Os catorze anátemas de Constantinopla II devem ser lidos como um todo orgânico e não como proposições isoladas. A estrutura lógica do documento segue uma progressão teológica rigorosa: da Trindade (1) à cristologia fundamental (2–5), às implicações devocionais e soteriológicas (6–10), e finalmente à aplicação histórica e disciplinar (11–14). A chave hermenêutica de todo o conjunto é o princípio neocalcedoniano de que a cristologia de Calcedônia (451) é ortodoxa apenas quando lida através das lentes dos Doze Capítulos de Cirilo de Alexandria (431). Qualquer interpretação de Calcedônia que se afaste da tradição ciriliana — particularmente a leitura antioquena de Teodoro de Mopsuéstia e de seus discípulos — é rejeitada como nestorianismo encoberto. Os anátemas permanecem vinculantes para a Igreja Ortodoxa e são aceitos pela Igreja Católica como parte do magistério conciliar ecumênico, embora sua aplicação aos Três Capítulos históricos (Teodoro, Teodoreto, Ibas) seja hoje considerada pela maioria dos teólogos católicos como um ato disciplinar contextual e não como uma definição dogmática irreformável. A Igreja Assíria do Oriente, herdeira da tradição teodoriana, rejeita inteiramente Constantinopla II e mantém a veneração de Teodoro de Mopsuéstia como doutor da Igreja.",
};