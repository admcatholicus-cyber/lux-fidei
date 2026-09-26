// ═══════════════════════════════════════════════════════════════════════════
// OS CÂNONES DISCIPLINARES DE CALCEDÔNIA (27/28 CÂNONES)
// ═══════════════════════════════════════════════════════════════════════════
// O concílio produziu, além da Definição dogmática, um corpus disciplinar
// que se tornou uma das bases do direito canônico oriental e ocidental.
// O Cânon 28, sobre a primazia de Constantinopla, é o mais controverso
// e uma das raízes remotas do Grande Cisma de 1054.
// ═══════════════════════════════════════════════════════════════════════════

export const notaIntrodutoria: string =
  "O número exato de cânones de Calcedônia é objeto de discussão histórica. As coleções canônicas " +
  "gregas antigas (Sinagoga em L Títulos, Nomocânon em XIV Títulos) e a tradição ortodoxa contam " +
  "28 cânones, incluindo o famoso Cânon 28 sobre a primazia de Constantinopla como \"Nova Roma\". " +
  "As coleções canônicas latinas tardo-antigas e medievais (Dionysiana, Hispana, Decreto de Graciano) " +
  "reconhecem apenas 27, omitindo o Cânon 28 por ter sido protestado pelos legados papais e anulado " +
  "por Leão Magno nas Epistulae 104, 105 e 106. Além disso, alguns manuscritos apresentam também " +
  "um cânon adicional (às vezes numerado como 29 ou 30) sobre a deposição dos bispos, que é na " +
  "verdade um fragmento das actas conciliares e não um cânon independente. A edição crítica moderna " +
  "(ACO II.1.2, pp. 158–163) reproduz os 27 cânones canonicamente indiscutíveis + o Cânon 28. Foram " +
  "promulgados majoritariamente na Sessão 15 (31 de outubro de 451), sendo o Cânon 28 aprovado " +
  "separadamente na Sessão 16 do mesmo dia, na ausência intencional dos legados papais. Todos " +
  "juntos formam um dos corpus disciplinares mais influentes da Igreja antiga.";

export interface Canon {
  numero: number;
  titulo: string;
  texto: string;
  tema: string;
  observacao?: string;
}

export const canones: Canon[] = [
  {
    numero: 1,
    titulo: "Confirmação dos cânones anteriores",
    texto:
      "Julgamos justo que permaneçam em vigor os cânones estabelecidos pelos santos Padres em cada " +
      "sínodo até o presente.",
    tema: "Continuidade canônica",
    observacao:
      "Cânon-síntese que ratifica solenemente todos os cânones dos concílios ecumênicos anteriores " +
      "(Niceia, Constantinopla, Éfeso) e dos sínodos locais recebidos pela Igreja, sem enumerá-los. " +
      "Estabelece o princípio da continuidade canônica.",
  },
  {
    numero: 2,
    titulo: "Contra a simonia nas ordenações",
    texto:
      "Se algum bispo fizer ordenação por dinheiro e transformar em objeto de venda a graça " +
      "invendável, ordenando por dinheiro bispo, corepíscopo, presbítero, diácono ou qualquer outro " +
      "clérigo, ou promovendo por dinheiro a ecônomo, defensor ou paramonarius, ou a qualquer função " +
      "eclesiástica por lucro sórdido — o que assim se provou ter feito estará em risco de perder " +
      "seu próprio grau; e o ordenado nada lucrará com a ordenação ou promoção assim negociada, mas " +
      "será estranho à dignidade ou função obtida por dinheiro.",
    tema: "Simonia",
    observacao:
      "Um dos mais severos cânones antisimoníacos da Antiguidade. Prevê deposição do ordenante e " +
      "invalidade da ordenação obtida por dinheiro. Baseia-se em At 8,20 (\"teu dinheiro pereça " +
      "contigo, Simão\").",
  },
  {
    numero: 3,
    titulo: "Clérigos não devem administrar bens seculares",
    texto:
      "Chegou ao santo Sínodo notícia de que alguns dos que estão inscritos no clero, por lucro " +
      "sórdido, tornam-se administradores de bens alheios e envolvem-se em negócios seculares, " +
      "descuidando do serviço divino e correndo por casas de seculares e tomando por avareza a " +
      "administração de patrimônios. Portanto o santo e grande Sínodo determinou que ninguém, no " +
      "futuro — nem bispo, nem clérigo, nem monge — administre patrimônios ou se envolva em " +
      "negócios seculares, salvo se por lei for chamado à tutela indeclinável de menores, ou se o " +
      "bispo da cidade o comissionar para a administração dos bens da Igreja ou de órfãos e viúvas " +
      "sem tutor.",
    tema: "Conduta clerical",
    observacao:
      "Estabelece a incompatibilidade entre o ofício sagrado e negócios seculares. Excepciona a " +
      "administração de bens eclesiásticos e a proteção de órfãos e viúvas — funções caritativas.",
  },
  {
    numero: 4,
    titulo: "Regulamentação dos monges e mosteiros",
    texto:
      "Aqueles que verdadeira e sinceramente escolhem a vida monástica sejam honrados devidamente. " +
      "Mas, como alguns, usando o hábito monástico, perturbam as igrejas e os assuntos políticos, " +
      "vagando indistintamente pelas cidades e até tentando construir mosteiros para si mesmos, " +
      "resolveu-se que ninguém, em lugar algum, edifique ou funde mosteiro ou oratório sem o " +
      "consentimento do bispo da cidade. Os monges de cada cidade e território sejam submetidos ao " +
      "bispo, cultivem a tranquilidade, dediquem-se apenas ao jejum e à oração, permanecendo nos " +
      "lugares em que renunciaram ao mundo; não perturbem os negócios eclesiásticos nem os civis " +
      "nem participem deles, deixando os próprios mosteiros — a menos que sejam autorizados pelo " +
      "bispo da cidade por alguma necessidade urgente.",
    tema: "Vida monástica",
    observacao:
      "Cânon fundacional do direito monástico. Submete os monges à jurisdição do bispo local — " +
      "resposta direta aos monges vagantes que causaram tumulto em Éfeso 431 e 449.",
  },
  {
    numero: 5,
    titulo: "Contra as transferências ilegais de clérigos entre cidades",
    texto:
      "Sobre os bispos ou clérigos que se transferem de cidade em cidade, resolveu-se que " +
      "permaneçam em vigor os cânones estabelecidos a respeito pelos santos Padres.",
    tema: "Jurisdição eclesiástica",
    observacao:
      "Reafirmação sintética dos cânones anteriores (Niceia c. 15–16; Antioquia c. 3, 21; " +
      "Sárdica c. 1) que proibiam a mobilidade dos clérigos entre dioceses.",
  },
  {
    numero: 6,
    titulo: "Contra as ordenações \"absolutas\" (sem título)",
    texto:
      "Que ninguém seja ordenado \"absolutamente\", nem presbítero, nem diácono, nem em qualquer " +
      "grau da ordem eclesiástica, se não lhe for atribuído propriamente ou uma igreja da cidade, " +
      "ou dos campos, ou um martyrium, ou um mosteiro. O santo Sínodo determinou que a ordenação " +
      "dos que assim forem ordenados sem título seja inválida, e que não possam exercer o ministério " +
      "em lugar algum — para vergonha de quem os ordenou.",
    tema: "Ordenações",
    observacao:
      "Introduz o princípio da \"ordenação com título\" (cum titulo) — todo ordenado deve estar " +
      "vinculado a uma comunidade concreta que ministra. Princípio fundamental da economia " +
      "sacramental da Igreja, retomado em Trento e no direito canônico moderno.",
  },
  {
    numero: 7,
    titulo: "Contra clérigos e monges que abraçam a milícia ou dignidade secular",
    texto:
      "Determinamos que os inscritos no clero ou os que se tornaram monges não se envolvam em " +
      "milícia nem em dignidade secular. Do contrário, os que ousarem fazê-lo e não retornarem " +
      "com arrependimento àquilo que primeiro escolheram por amor de Deus, sejam anatematizados.",
    tema: "Conduta clerical",
    observacao:
      "Sanção máxima (anátema) para quem abandona o estado clerical ou monástico pela carreira " +
      "militar ou civil. Confirma a separação de esferas.",
  },
  {
    numero: 8,
    titulo: "Sobre os clérigos de asilos, mosteiros e martyria",
    texto:
      "Os clérigos dos asilos para pobres, mosteiros e martyria de mártires estejam, segundo a " +
      "tradição dos santos Padres, sob a autoridade dos bispos de cada cidade e não se subtraiam, " +
      "por insolência, à jurisdição do próprio bispo. Os que ousarem violar essa disciplina, seja de " +
      "qualquer modo, e não se submeterem ao próprio bispo, se forem clérigos, incorram nas penas " +
      "canônicas; se forem monges ou leigos, sejam privados da comunhão.",
    tema: "Jurisdição episcopal",
    observacao:
      "Coloca sob o bispo diocesano todos os clérigos que trabalham em instituições de caridade " +
      "e santuários. Contra a tendência das fundações independentes.",
  },
  {
    numero: 9,
    titulo: "Apelações dos clérigos ao patriarca (não a tribunais seculares)",
    texto:
      "Se um clérigo tiver processo contra outro clérigo, não deixe seu próprio bispo e não recorra " +
      "a tribunais seculares, mas exponha primeiro a causa ao próprio bispo, ou, com o consentimento " +
      "do bispo, resolvam-na aqueles que ambas as partes escolherem. Quem transgredir isto, incorra " +
      "nas penas canônicas. Se um clérigo tiver processo com o próprio bispo ou com outro bispo, " +
      "julgue-o o sínodo da província. Se um bispo ou clérigo tiver desavença com o metropolita da " +
      "própria província, recorra ao exarca da diocese ou à sé de Constantinopla, e diante dele " +
      "seja julgada a causa.",
    tema: "Foro eclesiástico",
    observacao:
      "Cânon crucial: institui um sistema escalonado de apelação (bispo → sínodo provincial → " +
      "exarca → Constantinopla) e proíbe recorrer a tribunais seculares. Junto com o Cânon 17, " +
      "eleva Constantinopla a instância suprema de apelação para o Oriente — antecipando o Cânon 28.",
  },
  {
    numero: 10,
    titulo: "Contra clérigos em duas igrejas simultâneas",
    texto:
      "Não seja permitido a um clérigo estar inscrito ao mesmo tempo nas igrejas de duas cidades: " +
      "isto é, naquela em que foi ordenado no princípio e naquela para a qual, como maior, se " +
      "transferiu por desejo de vanglória vazia. Os que fizerem isto sejam restituídos à própria " +
      "igreja na qual desde o início foram ordenados, e sirvam somente ali. Se alguém já tiver sido " +
      "transferido de uma igreja para outra, em nada participe dos assuntos da igreja anterior nem " +
      "dos martyria, asilos ou hospedarias que dela dependem. Os que ousarem, depois da definição " +
      "deste grande e ecumênico Sínodo, algo do que agora está proibido, o santo Sínodo determinou " +
      "que decaiam do seu próprio grau.",
    tema: "Estabilidade clerical",
  },
  {
    numero: 11,
    titulo: "Cartas de comunhão para os pobres em viagem",
    texto:
      "Determinamos que todos os pobres e necessitados de socorro, após provação, transportem-se " +
      "com cartas ou letras de paz eclesiásticas somente, e não com comendatícias — porque as " +
      "letras comendatícias convém enviar apenas às pessoas eminentes.",
    tema: "Caridade e mobilidade",
    observacao:
      "Distingue tipos de cartas eclesiásticas: as \"pacíficas\" (irenikai) para pobres em viagem, " +
      "as \"comendatícias\" (systatikai) apenas para pessoas de dignidade. Regulamentação prática da " +
      "hospitalidade cristã.",
  },
  {
    numero: 12,
    titulo: "Contra a divisão canônica das províncias por decreto imperial",
    texto:
      "Chegou ao nosso conhecimento que alguns, contra as disposições eclesiásticas, recorrendo aos " +
      "poderes seculares, dividiram por meio de decretos (pragmáticas) uma única província em duas, " +
      "de modo que passa a haver dois metropolitas na mesma província. Portanto, o santo Sínodo " +
      "determinou que, no futuro, nada disto seja ousado por bispo algum; quem ousar tal coisa, " +
      "seja deposto do próprio grau. As cidades que já foram honradas por letras imperiais com o " +
      "nome de metrópoles, gozem apenas da honra, bem como o bispo que administra a sua Igreja — " +
      "salvos, é claro, os direitos próprios da verdadeira metrópole.",
    tema: "Jurisdição metropolitana",
    observacao:
      "Contra a manipulação política das jurisdições eclesiásticas. Reconhece \"honra\" mas não " +
      "\"jurisdição\" às novas metrópoles criadas por decreto imperial.",
  },
  {
    numero: 13,
    titulo: "Clérigos estrangeiros precisam de cartas do próprio bispo",
    texto:
      "Não sejam de modo algum admitidos ao ministério em outra cidade os clérigos estrangeiros e " +
      "desconhecidos sem cartas comendatícias do próprio bispo.",
    tema: "Mobilidade clerical",
  },
  {
    numero: 14,
    titulo: "Casamentos de leitores e cantores",
    texto:
      "Como em algumas províncias é permitido a leitores e cantores casarem-se, o santo Sínodo " +
      "determinou que nenhum deles se una em matrimônio com mulher herética. Os que já geraram " +
      "filhos dessa união, se anteriormente batizaram a prole junto aos hereges, tragam-nos à " +
      "comunhão da Igreja Católica; se ainda não foram batizados, não os batizem entre os hereges, " +
      "nem os unam em matrimônio com herege, judeu ou pagão — a menos que a pessoa que se una a " +
      "um cônjuge ortodoxo prometa passar à fé ortodoxa. Se alguém transgredir esta determinação " +
      "do santo Sínodo, seja submetido às penas canônicas.",
    tema: "Matrimônio clerical",
    observacao:
      "Regulamenta o casamento das ordens menores (leitores e cantores), proibindo especificamente " +
      "o matrimônio com hereges, judeus ou pagãos. Preserva a integridade da fé familiar.",
  },
  {
    numero: 15,
    titulo: "Idade mínima para diaconisas",
    texto:
      "Não seja ordenada diaconisa mulher com menos de quarenta anos, e isto após rigoroso exame. " +
      "Se, tendo recebido a ordenação e permanecido algum tempo no ministério, entregar-se ao " +
      "matrimônio, insultando a graça de Deus, seja anatematizada — junto com aquele que se uniu " +
      "a ela.",
    tema: "Ordem das diaconisas",
    observacao:
      "Um dos raros cânones antigos que regulamenta explicitamente a ordem das diaconisas. Fixa " +
      "idade mínima (40 anos, contra os 60 de Timóteo em 1Tm 5,9) e proíbe o casamento posterior.",
  },
  {
    numero: 16,
    titulo: "Virgens e monges que se casam",
    texto:
      "Não seja permitido a virgens que se consagraram ao Senhor Deus, nem a monges, casarem-se. " +
      "Se se encontrar que o fizeram, sejam privados da comunhão; determinamos, porém, que a eles " +
      "seja concedida indulgência pelo bispo local.",
    tema: "Vida consagrada",
  },
  {
    numero: 17,
    titulo: "Paróquias rurais e prescrição trintenária",
    texto:
      "As paróquias rurais e agrárias de cada Igreja permaneçam sem alteração sob os bispos que as " +
      "possuem, sobretudo se durante trinta anos as administraram e regeram sem violência. Se, " +
      "porém, dentro de trinta anos surgir ou surgiu alguma controvérsia a respeito, seja lícito aos " +
      "que se consideram lesados apresentar a causa ao sínodo da província. Se alguém for lesado " +
      "pelo próprio metropolita, seja julgado diante do exarca da diocese ou diante da sé de " +
      "Constantinopla, como acima foi dito. Se por autoridade imperial for renovada alguma cidade, " +
      "ou for renovada no futuro, a ordem eclesiástica das paróquias siga a ordem política e pública.",
    tema: "Direito paroquial",
    observacao:
      "Introduz a prescrição trintenária no direito canônico (após 30 anos de posse pacífica, os " +
      "direitos se consolidam) e confirma Constantinopla como instância suprema de apelação — " +
      "outra vez preparando o terreno para o Cânon 28. Vincula ordem eclesiástica à divisão civil.",
  },
  {
    numero: 18,
    titulo: "Contra conspirações e facções entre clérigos e monges",
    texto:
      "O crime de conjuração ou facção é totalmente proibido mesmo pelas leis externas; muito mais, " +
      "portanto, convém que isto seja proibido na Igreja de Deus. Se, portanto, alguns clérigos ou " +
      "monges forem descobertos conjurando entre si, ou formando facções, ou tramando ciladas " +
      "contra bispos ou co-clérigos, decaiam totalmente do próprio grau.",
    tema: "Ordem eclesiástica",
    observacao:
      "Resposta direta ao Latrocínio de 449 e às facções violentas de monges egípcios (Barsumas) " +
      "que aterrorizaram os bispos. Deposição integral para conspiradores.",
  },
  {
    numero: 19,
    titulo: "Realização regular dos sínodos provinciais",
    texto:
      "Chegou aos nossos ouvidos que nas províncias não se realizam os sínodos dos bispos " +
      "prescritos pelos cânones, e por isso muitos assuntos eclesiásticos que precisam de correção " +
      "são negligenciados. Portanto o santo Sínodo determinou, segundo os cânones dos santos Padres, " +
      "que os bispos de cada província se reúnam duas vezes por ano onde escolher o bispo da " +
      "metrópole, e corrijam tudo o que sobrevier. Os bispos que não comparecerem, permanecendo em " +
      "suas próprias cidades, embora estejam com boa saúde e livres de qualquer necessidade " +
      "indispensável, sejam fraternalmente admoestados.",
    tema: "Vida sinodal",
    observacao:
      "Reafirma o cânon 5 de Niceia sobre sínodos provinciais bianuais. Estabelece a admoestação " +
      "fraterna aos ausentes injustificados.",
  },
  {
    numero: 20,
    titulo: "Clérigos itinerantes precisam ser recebidos pelo bispo local",
    texto:
      "Não seja permitido que clérigos, inscritos em uma Igreja, sejam transferidos para a Igreja " +
      "de outra cidade — como já determinamos —, mas contentem-se com aquela na qual foram desde o " +
      "princípio julgados dignos de servir, com exceção dos que, tendo perdido a pátria, foram " +
      "forçados por necessidade a passar para outra Igreja. Se algum bispo, depois desta definição, " +
      "receber um clérigo pertencente a outro bispo, resolveu-se que fiquem privados da comunhão " +
      "tanto o recebido como o que o recebeu, até que o clérigo transferido retorne à sua própria " +
      "Igreja.",
    tema: "Estabilidade clerical",
  },
  {
    numero: 21,
    titulo: "Contra acusações caluniosas de leigos contra clérigos",
    texto:
      "Clérigos ou leigos que acusam bispos ou clérigos não sejam admitidos indiscriminadamente e " +
      "sem exame à acusação; mas primeiro seja examinada sua reputação.",
    tema: "Proteção do clero",
  },
  {
    numero: 22,
    titulo: "Contra a apropriação de bens do bispo defunto",
    texto:
      "Não seja permitido aos clérigos, após a morte do próprio bispo, apoderarem-se das coisas " +
      "que lhe pertencem, como foi proibido também pelos cânones anteriores. Os que fizerem isto " +
      "correm o risco de decair do próprio grau.",
    tema: "Bens eclesiásticos",
  },
  {
    numero: 23,
    titulo: "Contra clérigos e monges que causam tumulto em Constantinopla",
    texto:
      "Chegou aos ouvidos do santo Sínodo que alguns clérigos e monges, sem missão do próprio " +
      "bispo, e por vezes até excomungados por ele, vindo à cidade imperial de Constantinopla, aí " +
      "residem por muito tempo, causando tumultos, perturbando a ordem eclesiástica e transtornando " +
      "as casas de alguns. Portanto o santo Sínodo determinou que tais pessoas sejam primeiramente " +
      "admoestadas pelo defensor da santíssima Igreja de Constantinopla a partirem da cidade " +
      "imperial. Se persistirem descaradamente nas mesmas ações, sejam também expulsas contra sua " +
      "vontade pelo mesmo defensor, e voltem aos próprios lugares.",
    tema: "Ordem pública eclesiástica",
    observacao:
      "Institui a figura do \"defensor\" (ekdikos) da Igreja de Constantinopla, com poder de " +
      "expulsar da cidade clérigos e monges vagantes. Reconhece implicitamente a autoridade especial " +
      "da sé imperial.",
  },
  {
    numero: 24,
    titulo: "Mosteiros não podem ser transformados em casas seculares",
    texto:
      "Os mosteiros uma vez consagrados com o consentimento do bispo permaneçam para sempre " +
      "mosteiros, e as coisas que lhes pertencem sejam conservadas para o mosteiro, e não seja " +
      "permitido que se tornem habitação secular. Os que permitirem que isso aconteça sejam " +
      "submetidos às penas canônicas.",
    tema: "Bens monásticos",
    observacao:
      "Estabelece o princípio da inalienabilidade dos mosteiros — uma vez fundados, não podem ser " +
      "seculariza­dos. Base do futuro direito monástico bizantino e ocidental.",
  },
  {
    numero: 25,
    titulo: "Prazo de três meses para consagração de bispo",
    texto:
      "Como alguns metropolitas, segundo nos foi anunciado, negligenciam os rebanhos que lhes foram " +
      "confiados e retardam as consagrações dos bispos, o santo Sínodo determinou que as consagrações " +
      "dos bispos se realizem dentro de três meses, salvo se uma necessidade indispensável obrigar " +
      "a prorrogar o intervalo. Quem não fizer isto, esteja sujeito às penas canônicas. A renda da " +
      "Igreja vacante seja conservada intacta pelo ecônomo da mesma Igreja.",
    tema: "Consagração episcopal",
  },
  {
    numero: 26,
    titulo: "Ecônomos obrigatórios em cada Igreja",
    texto:
      "Como em algumas igrejas, segundo tomamos conhecimento, os bispos administram os bens da " +
      "Igreja sem ecônomos, resolveu-se que toda Igreja que tem bispo tenha também ecônomo do " +
      "próprio clero, que administre os bens eclesiásticos segundo a determinação do próprio bispo — " +
      "para que a administração da Igreja não fique sem fiscalização, e daí se dissipem os bens da " +
      "Igreja e recaia sobre o sacerdócio a censura. Se alguém não fizer isto, seja submetido aos " +
      "cânones divinos.",
    tema: "Administração eclesiástica",
    observacao:
      "Institui a obrigatoriedade do ecônomo diocesano como forma de accountability financeira. " +
      "Um dos primeiros mecanismos institucionais de fiscalização patrimonial na Igreja.",
  },
  {
    numero: 27,
    titulo: "Contra o rapto de mulheres para casamento",
    texto:
      "Os que raptam mulheres a pretexto de coabitação, ou que os auxiliam ou cooperam com os " +
      "raptores, o santo Sínodo determinou que — se forem clérigos — decaiam do próprio grau; se " +
      "forem leigos, sejam anatematizados.",
    tema: "Direito matrimonial",
    observacao:
      "Legisla contra a prática do rapto matrimonial (raptus in matrimonium), comum na Antiguidade " +
      "tardia. Aplica sanções máximas: deposição para clérigos, anátema para leigos.",
  },
  {
    numero: 28,
    titulo: "PRIMAZIA DE CONSTANTINOPLA COMO \"NOVA ROMA\"",
    texto:
      "Seguindo em tudo as determinações dos santos Padres e reconhecendo o cânon dos 150 bispos " +
      "amadíssimos de Deus, recém-lido — reunidos sob o piedosíssimo Teodósio o Grande, imperador " +
      "de saudosa memória, na cidade imperial de Constantinopla, Nova Roma —, os mesmos definimos " +
      "e votamos também nós acerca dos privilégios da santíssima Igreja da mesma Constantinopla, " +
      "Nova Roma. Pois com razão os Padres concederam privilégios ao trono da antiga Roma, porque " +
      "aquela era a cidade imperial; e movidos pelo mesmo propósito, os 150 bispos amadíssimos de " +
      "Deus atribuíram iguais privilégios ao santíssimo trono da Nova Roma, julgando com razão que " +
      "a cidade que foi honrada com o império e o senado e goza de privilégios iguais aos da antiga " +
      "cidade imperial Roma seja também nas coisas eclesiásticas engrandecida como aquela, sendo a " +
      "segunda depois dela. E, em consequência, somente os metropolitas das dioceses do Ponto, da " +
      "Ásia e da Trácia, e também os bispos das mesmas dioceses situadas em terras dos bárbaros, " +
      "sejam ordenados pelo sobredito santíssimo trono da santíssima Igreja de Constantinopla. Cada " +
      "metropolita das sobreditas dioceses, junto com os bispos da província, ordene os bispos da " +
      "própria província, como está prescrito nos divinos cânones. Mas os próprios metropolitas das " +
      "sobreditas dioceses, como se disse, sejam ordenados pelo arcebispo de Constantinopla, tendo " +
      "sido feitas as votações apropriadas segundo o costume e sendo-lhe estas comunicadas.",
    tema: "Primazia e ordem dos patriarcados",
    observacao:
      "O cânon mais controverso do concílio. Aprovado na Sessão 16 (31 out. 451) na ausência dos " +
      "legados papais, protestado formalmente na Sessão 17 (1º nov.) por Paschasinus e Lucêncio, e " +
      "anulado por Leão Magno nas Epistulae 104, 105 e 106. Não incluído nas coleções canônicas " +
      "latinas antigas.",
  },
];

export const analiseCanon28: {
  titulo: string;
  textoIntegral: string;
  argumento: string;
  reacaoLegados: string;
  anulacaoLeao: string;
  posicaoCatolica: string;
  posicaoOrtodoxa: string;
  consequencias: string;
} = {
  titulo:
    "Análise do Cânon 28: a \"Nova Roma\" e a Raiz Remota do Grande Cisma",
  textoIntegral:
    "\"Seguindo em tudo as determinações dos santos Padres e reconhecendo o cânon dos 150 bispos " +
    "amadíssimos de Deus, recém-lido — reunidos sob o piedosíssimo Teodósio o Grande na cidade " +
    "imperial de Constantinopla, Nova Roma —, os mesmos definimos e votamos também nós acerca dos " +
    "privilégios da santíssima Igreja da mesma Constantinopla, Nova Roma. Pois com razão os Padres " +
    "concederam privilégios ao trono da antiga Roma, PORQUE AQUELA ERA A CIDADE IMPERIAL; e movidos " +
    "pelo mesmo propósito, os 150 bispos amadíssimos de Deus atribuíram IGUAIS PRIVILÉGIOS (isa " +
    "presbeia) ao santíssimo trono da Nova Roma, julgando com razão que a cidade que foi honrada " +
    "com o império e o senado e goza de privilégios iguais aos da antiga cidade imperial Roma seja " +
    "também nas coisas eclesiásticas engrandecida como aquela, SENDO A SEGUNDA DEPOIS DELA. E, em " +
    "consequência, somente os metropolitas das dioceses do PONTO, da ÁSIA e da TRÁCIA, e também os " +
    "bispos das mesmas dioceses situadas em terras dos bárbaros, sejam ORDENADOS pelo sobredito " +
    "santíssimo trono da santíssima Igreja de Constantinopla...\"",
  argumento:
    "O argumento do cânon é explicitamente POLÍTICO-TEOLÓGICO, e é essa a sua ousadia. A tese central " +
    "pode ser reduzida a duas proposições: (1) Roma tem primazia PORQUE era a cidade imperial " +
    "(\"dia to basileuein tēn polin ekeinēn\"); (2) Constantinopla, sendo agora a Nova Roma — cidade " +
    "imperial, sede do senado, capital efetiva do Império — merece por congruência o mesmo tipo de " +
    "privilégios, sendo \"a segunda depois dela\" (deuteran met' ekeinēn). A base canônica invocada " +
    "é o cânon 3 de Constantinopla I (381), que já havia dito: \"o bispo de Constantinopla tenha a " +
    "primazia de honra depois do bispo de Roma, porque aquela é a Nova Roma\". Calcedônia amplia " +
    "essa honra concedendo JURISDIÇÃO efetiva sobre três dioceses civis (Ponto, Ásia, Trácia) e sobre " +
    "as missões \"entre os bárbaros\" fora das fronteiras imperiais, transformando a primazia " +
    "honorífica em primazia real. Ao fundamentar tudo isso na correspondência entre ordem eclesiástica " +
    "e ordem política, o cânon institui uma eclesiologia de matriz política que se tornará " +
    "estruturante do modelo bizantino de simfonia.",
  reacaoLegados:
    "Os legados papais reagiram com fúria e método. Paschasinus, Lucêncio e Bonifácio estiveram " +
    "AUSENTES da Sessão 16 (31 de outubro), na qual o cânon foi aprovado — ausência que os bispos " +
    "orientais interpretaram (talvez de má-fé) como concordância tácita, mas que os latinos " +
    "consideraram uma manobra ilegítima. Na Sessão 17 (1º de novembro), os legados protestaram " +
    "formalmente e exigiram a leitura pública do cânon 6 de Niceia — mas na versão LATINA " +
    "interpolada, que trazia o preâmbulo \"Ecclesia Romana semper habuit primatum\" (\"A Igreja " +
    "Romana sempre teve o primado\"). Anatólio de Constantinopla respondeu que nada havia sido feito " +
    "contra Roma, apenas em favor da Nova Roma. Os comissários imperiais confirmaram a aprovação " +
    "do cânon e as actas foram enviadas a Leão. O que os legados papais protestavam não era a HONRA " +
    "de Constantinopla, mas o FUNDAMENTO teológico do argumento: para Roma, a primazia não vinha do " +
    "poder imperial, mas da sucessão petrina.",
  anulacaoLeao:
    "Leão Magno recebeu as actas ao final de 451 ou início de 452 e reagiu com três cartas de peso " +
    "dogmático e canônico: Epistula 104 a Marciano (fim de 452), Epistula 105 a Pulquéria e " +
    "Epistula 106 a Anatólio. Nelas Leão: (1) APROVA integralmente as decisões DOGMÁTICAS de " +
    "Calcedônia, confirmando a Definição e o Tomo; (2) ANULA formalmente o Cânon 28, declarando-o " +
    "nulo por falta de autoridade e por violar os cânones de Niceia; (3) reafirma que a primazia de " +
    "Roma vem de PEDRO, não da grandeza da cidade — \"aliud est ratio rerum saecularium, aliud " +
    "divinarum\" (uma é a razão das coisas seculares, outra a das divinas); (4) acusa Anatólio de " +
    "ambição e ingratidão, lembrando que fora Roma quem confirmara sua consagração duvidosa em 449. " +
    "Anatólio responde submissamente em 454, aceitando a anulação (embora Constantinopla continue " +
    "a considerar o cânon válido). O caso torna-se paradigmático da divergência: para Roma, a " +
    "confirmação papal é constitutiva; para o Oriente, o consenso conciliar é suficiente.",
  posicaoCatolica:
    "A posição católica tradicional, formulada por Leão e retomada por todos os papas subsequentes " +
    "até Vaticano II e além, sustenta: (1) o Cânon 28 é INVÁLIDO porque não recebeu a confirmação " +
    "da Sé Apostólica, sem a qual nenhum cânon disciplinar tem força universal; (2) mesmo se " +
    "válido, seria HERMENEUTICAMENTE ERRADO ao fundamentar a primazia romana em razões políticas " +
    "(cidade imperial) em vez de razões teológicas (sucessão petrina, Mt 16,18); (3) a primazia " +
    "romana é de DIREITO DIVINO, não de conveniência histórica, e portanto não pode ser " +
    "\"transferida\" a outra sé por mudança da capital imperial; (4) a ordem dos patriarcados " +
    "orientais (Alexandria, Antioquia, Jerusalém, Constantinopla) segue critérios apostólicos, não " +
    "políticos. Curiosamente, o Cânon 28 acabou sendo incluído em algumas coleções canônicas " +
    "ocidentais tardias (Gregoriana, século XIII) sem que isso significasse aprovação de sua " +
    "hermenêutica.",
  posicaoOrtodoxa:
    "A posição ortodoxa bizantina, formulada por Anatólio e confirmada pelos concílios in Trullo " +
    "(692, cânon 36) e por toda a tradição pentárquica, sustenta: (1) o Cânon 28 é VÁLIDO porque " +
    "foi aprovado por unanimidade dos bispos orientais em um concílio ecumênico, e a Igreja recebeu " +
    "a decisão; (2) o argumento da correspondência entre ordem eclesiástica e ordem política é " +
    "LEGÍTIMO e patrístico, encontrando eco no cânon 17 de Calcedônia (\"a ordem eclesiástica siga " +
    "a ordem política\") e em toda a eclesiologia bizantina da simfonia; (3) a primazia romana é " +
    "primazia de HONRA (presbeia) e não de jurisdição universal — o primeiro entre iguais (primus " +
    "inter pares), não monarca supremo; (4) a estrutura da Igreja é PENTÁRQUICA (cinco patriarcas: " +
    "Roma, Constantinopla, Alexandria, Antioquia, Jerusalém) governando conjuntamente por sínodos; " +
    "(5) desde a queda de Roma (476) e sobretudo após o Cisma de 1054, Constantinopla assume de " +
    "fato o \"primeiro trono\" ortodoxo, exercendo a chamada \"primazia de honra\" ecumênica " +
    "atualmente ocupada pelo Patriarca de Constantinopla.",
  consequencias:
    "As consequências históricas do Cânon 28 são incalculáveis. NO CURTO PRAZO, provocou 15 séculos " +
    "de tensão institucional entre Roma e Constantinopla, alimentando a desconfiança mútua e " +
    "impedindo qualquer resolução consensual da questão da primazia. NO MÉDIO PRAZO, forneceu a " +
    "base canônica para a expansão jurisdicional de Constantinopla sobre o Oriente inteiro, " +
    "consolidada pelo cânon 36 do Concílio in Trullo (692), que estabeleceu a ordem pentárquica " +
    "clássica. NO LONGO PRAZO, contribuiu decisivamente para o Grande Cisma de 1054, quando as " +
    "excomunhões mútuas entre o legado Humberto de Silva Cândida e o patriarca Miguel Cerulário " +
    "cristalizaram as divergências acumuladas — sendo a questão da primazia (junto com o Filioque " +
    "e os azimos) o núcleo dogmático da separação. NA CONTEMPORANEIDADE, o Cânon 28 continua a ser " +
    "citado em cada diálogo católico-ortodoxo sério sobre a primazia (documento de Ravena 2007, " +
    "documento de Chieti 2016, documento de Alexandria 2023), sem que se tenha ainda encontrado uma " +
    "fórmula que satisfaça simultaneamente a eclesiologia petrina romana e a eclesiologia " +
    "conciliar-pentárquica ortodoxa. O Cânon 28 é, portanto, muito mais do que um cânon disciplinar: " +
    "é um documento fundacional da divergência eclesiológica entre Ocidente e Oriente cristãos.",
};