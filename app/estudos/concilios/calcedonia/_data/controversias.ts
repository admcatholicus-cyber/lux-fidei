// ═══════════════════════════════════════════════════════════════════════════
// CONTROVÉRSIAS E TENSÕES INTERNAS DO CONCÍLIO DE CALCEDÔNIA (451 d.C.)
// ═══════════════════════════════════════════════════════════════════════════
// Este arquivo documenta as 8 principais controvérsias que marcaram o
// desenrolar do concílio, desde o julgamento de Dioscoro até a disputa
// sobre o Cânon 28 e a primazia de Constantinopla.
// ═══════════════════════════════════════════════════════════════════════════

export const resumoControversias: string =
  "O Concílio de Calcedônia, embora hoje lembrado pela serenidade dogmática de sua Definição, " +
  "foi na prática uma assembleia atravessada por tensões dramáticas, gritos, ameaças de retirada, " +
  "pressões imperiais e manobras políticas. Cada uma das grandes decisões — o julgamento de Dioscoro, " +
  "a recepção do Tomo de Leão, a redação da Definição, a reabilitação de Teodoreto e Ibas, o Cânon 28 " +
  "e a reorganização dos patriarcados — foi disputada palmo a palmo. As Actas Conciliares (ACO II) " +
  "preservam com rara vivacidade essas controvérsias, revelando um concílio muito mais humano, " +
  "conflituoso e político do que sugere sua imagem posterior de mármore dogmático. As consequências " +
  "de várias dessas disputas moldariam a história cristã pelos próximos quinze séculos, gerando o " +
  "cisma calcedoniano, a controvérsia dos Três Capítulos e a ruptura definitiva entre Roma e " +
  "Constantinopla sobre a natureza da primazia eclesiástica.";

export interface Controversia {
  id: number;
  titulo: string;
  resumo: string;
  detalhes: string;
  partesEnvolvidas: string[];
  resultado: string;
  consequenciaDeLongoPrazo: string;
  fontes: string[];
}

export const controversias: Controversia[] = [
  {
    id: 1,
    titulo: "O julgamento de Dioscoro (Sessões 1–3)",
    resumo:
      "O processo contra o patriarca de Alexandria, marcado por gritos, acusações de violência " +
      "no Latrocínio de Éfeso (449) e sua recusa em comparecer à terceira sessão.",
    detalhes:
      "Já na Sessão 1 (8 de outubro), os comissários imperiais tiveram de intervir várias vezes " +
      "para conter os gritos: quando Teodoreto de Ciro entrou na basílica, os egípcios bradaram " +
      "\"Fora o judeu! Fora o inimigo de Deus!\", enquanto os orientais respondiam com \"Fora o " +
      "assassino Dioscoro!\". A leitura das actas do Latrocínio de Éfeso expôs a coação dos bispos, " +
      "as assinaturas obtidas sob ameaça e a violência que levou à morte de Flaviano de " +
      "Constantinopla. Nas Sessões 2 e 3 (13 de outubro), Dioscoro recusou três convocações " +
      "formais, alegando que não podia comparecer sem a presença dos demais patriarcas. O tribunal " +
      "prosseguiu in absentia, e Paschasinus, legado papal, invocou solenemente a autoridade de " +
      "Pedro através de Leão para pronunciar a deposição. As acusações formais não foram de heresia, " +
      "mas de indisciplina canônica, violência contra Flaviano e comunhão com Eutiques após sua " +
      "condenação. A ausência de condenação doutrinal explícita seria depois usada pelos " +
      "não-calcedonianos para argumentar que Dioscoro havia sido condenado por razões políticas.",
    partesEnvolvidas: [
      "Dioscoro de Alexandria",
      "Paschasinus (legado papal)",
      "Comissários imperiais",
      "Bispos egípcios e orientais",
    ],
    resultado:
      "Dioscoro foi deposto do episcopado e exilado para Gangra na Paflagônia, onde morreu em 454. " +
      "Não foi formalmente anatematizado como herético, apenas deposto por crimes canônicos.",
    consequenciaDeLongoPrazo:
      "A memória de Dioscoro tornou-se central na identidade da Igreja Copta, que o venera como santo " +
      "e mártir da fé cirílica. A distinção entre \"deposição canônica\" e \"condenação dogmática\" " +
      "permanece um ponto sensível no diálogo ecumênico com os ortodoxos orientais.",
    fontes: [
      "ACO II.1.1, pp. 65–196 (Sessões 1–3)",
      "Evágrio Escolástico, Historia Ecclesiastica II.2–4",
      "Price & Gaddis, The Acts of the Council of Chalcedon, vol. 1, pp. 111–364",
      "Grillmeier, Christ in Christian Tradition, vol. 2/1, pp. 107–148",
    ],
  },
  {
    id: 2,
    titulo: "A recepção do Tomo de Leão (Sessão 2)",
    resumo:
      "A relutância inicial dos bispos orientais em subscrever o Tomo, os cinco dias de estudo " +
      "concedidos e a aclamação final \"Pedro falou por Leão!\".",
    detalhes:
      "Na Sessão 2 (10 de outubro), o Tomo de Leão a Flaviano foi lido em grego para a assembleia. " +
      "A recepção não foi imediata: embora a maioria dos bispos tenha aclamado o texto, um grupo " +
      "significativo de bispos ilíricos e palestinos manifestou reservas quanto a duas passagens que " +
      "pareciam separar demais as duas naturezas — especialmente a fórmula \"agit enim utraque forma " +
      "cum alterius communione quod proprium est\" (\"cada forma opera em comunhão com a outra o que " +
      "lhe é próprio\"), que soava dualista aos ouvidos formados na tradição cirílica. Os comissários " +
      "concederam cinco dias para que uma comissão examinasse o Tomo à luz das doze Cartas de Cirilo " +
      "a Nestório e à Sucesso. Sob a direção de Anatólio de Constantinopla, essa comissão demonstrou " +
      "a compatibilidade do Tomo com Cirilo, reinterpretando as passagens problemáticas. Na Sessão 4 " +
      "(17 de outubro), a assembleia aclamou: \"Esta é a fé dos Pais! Esta é a fé dos Apóstolos! " +
      "Pedro falou por Leão! Cirilo assim ensinou! Anátema a quem não creia assim!\". A recepção foi, " +
      "portanto, condicionada a uma leitura cirílica do Tomo.",
    partesEnvolvidas: [
      "Papa Leão I (através dos legados)",
      "Anatólio de Constantinopla",
      "Comissão dos bispos palestinos e ilíricos",
      "Bispos orientais formados na tradição cirílica",
    ],
    resultado:
      "O Tomo foi aceito como expressão ortodoxa da fé, mas apenas depois de ser interpretado à " +
      "luz de Cirilo. Tornou-se, junto com as cartas cirilianas, um dos textos fundadores da " +
      "cristologia calcedoniana.",
    consequenciaDeLongoPrazo:
      "A necessidade de \"cirilianizar\" o Tomo revela a tensão permanente entre as tradições " +
      "antioquena e alexandrina no calcedonismo. O II Concílio de Constantinopla (553) precisaria " +
      "reinterpretar Calcedônia em chave mais cirílica para acomodar a tradição oriental.",
    fontes: [
      "ACO II.1.2, pp. 78–84 (leitura do Tomo)",
      "Leão Magno, Epistula 28 (Tomus ad Flavianum)",
      "Price & Gaddis, vol. 2, pp. 14–24",
      "Grillmeier, Christ in Christian Tradition, vol. 1, pp. 526–557",
    ],
  },
  {
    id: 3,
    titulo: "A resistência à nova Definição (Sessões 4–5)",
    resumo:
      "A resistência dos bispos a redigir uma nova fórmula de fé, a pressão imperial e a rejeição " +
      "do primeiro rascunho por conter a expressão \"ek dyo physeon\" em vez de \"en dyo physesin\".",
    detalhes:
      "O maior obstáculo à Definição de Calcedônia não foi doutrinal, mas canônico: o cânon 7 de " +
      "Éfeso (431) proibia a composição de qualquer novo símbolo de fé. Os bispos gritavam repetidamente " +
      "\"Basta o Credo de Niceia! Não escrevemos nova fé!\". Os comissários imperiais, sob ordens " +
      "diretas de Marciano e Pulquéria, insistiram que uma fórmula clara era necessária para pacificar " +
      "o Império. Uma comissão de 22 bispos (posteriormente ampliada) redigiu um primeiro rascunho " +
      "que continha a expressão cirílica \"ek dyo physeon\" (\"a partir de duas naturezas\"). Os " +
      "legados papais, apoiados por representantes orientais, protestaram vigorosamente: essa fórmula " +
      "podia ser lida em sentido monofisita (as duas naturezas se fundem em uma após a união). Os " +
      "comissários ameaçaram então transferir o concílio para a Itália, o que forçaria os bispos " +
      "orientais a viajar. Sob essa ameaça, uma nova comissão foi formada, e a expressão foi " +
      "modificada para \"en dyo physesin\" (\"em duas naturezas\"), garantindo a leitura anti-monofisita.",
    partesEnvolvidas: [
      "Comissários imperiais",
      "Legados papais (Paschasinus, Lucêncio, Bonifácio)",
      "Comissão de 22 bispos",
      "Bispos ilíricos e palestinos",
    ],
    resultado:
      "Adoção da fórmula \"em duas naturezas\" (en dyo physesin) na Definição final, aprovada na " +
      "Sessão 5 (22 de outubro). Essa preposição — \"em\" e não \"a partir de\" — tornou-se a " +
      "assinatura teológica de Calcedônia.",
    consequenciaDeLongoPrazo:
      "A fórmula \"em duas naturezas\" foi precisamente o ponto que os miafisitas (cirílicos radicais) " +
      "não puderam aceitar, pois abandonava a expressão preferida por Cirilo. Foi essa mudança " +
      "preposicional que gerou o cisma calcedoniano permanente.",
    fontes: [
      "ACO II.1.2, pp. 121–130 (Sessão 5)",
      "Price & Gaddis, vol. 2, pp. 187–207",
      "Grillmeier, Christ in Christian Tradition, vol. 2/1, pp. 148–163",
      "R. V. Sellers, The Council of Chalcedon, pp. 103–131",
    ],
  },
  {
    id: 4,
    titulo: "O Cânon 28 e os legados papais (Sessão 16)",
    resumo:
      "A concessão de \"privilégios iguais\" ao trono de Constantinopla, o protesto formal dos " +
      "legados papais e a anulação por Leão Magno.",
    detalhes:
      "Na Sessão 16 (31 de outubro), realizada na ausência intencional dos legados papais, os bispos " +
      "orientais aprovaram o famoso Cânon 28, que confirmava o cânon 3 de Constantinopla I (381) e " +
      "concedia a Constantinopla \"privilégios iguais\" (isa presbeia) aos de Roma, com jurisdição " +
      "sobre as dioceses do Ponto, Ásia e Trácia, além do direito de ordenar bispos entre os \"bárbaros\" " +
      "dessas regiões. O argumento explícito era político: Roma tinha primazia porque era a cidade " +
      "imperial; Constantinopla, sendo a \"Nova Roma\", merecia honra semelhante. Na Sessão 17 (1º de " +
      "novembro), os legados papais protestaram formalmente: Lucêncio exigiu a leitura pública do " +
      "cânon 6 de Niceia (na versão latina interpolada que afirmava \"a Igreja Romana sempre teve o " +
      "primado\") e declarou que a Sé Apostólica não podia ser diminuída. Anatólio de Constantinopla " +
      "e os comissários responderam que nada havia sido feito contra Roma, apenas em favor da nova " +
      "capital. O Papa Leão Magno, ao receber as actas, aprovou os cânones doutrinais mas anulou " +
      "formalmente o Cânon 28 em três cartas (Ep. 104 a Marciano, Ep. 105 a Pulquéria, Ep. 106 a " +
      "Anatólio), argumentando que a primazia de Roma vinha de Pedro, não do poder imperial.",
    partesEnvolvidas: [
      "Anatólio de Constantinopla",
      "Legados papais (Paschasinus, Lucêncio, Bonifácio)",
      "Papa Leão I",
      "Imperador Marciano",
    ],
    resultado:
      "O Cânon 28 foi aprovado pela assembleia oriental, protestado pelos legados e anulado por Leão " +
      "Magno. A Igreja Oriental continuou a considerá-lo válido; a Igreja Latina o rejeitou até o " +
      "século XIII, quando foi finalmente incluído em algumas coleções canônicas ocidentais.",
    consequenciaDeLongoPrazo:
      "Esta é uma das raízes históricas mais profundas do Grande Cisma de 1054. O choque entre a " +
      "eclesiologia \"petrina\" (Roma) e a eclesiologia \"imperial\" ou \"pentárquica\" (Bizâncio) " +
      "sobre a fonte da primazia permanece um obstáculo central no diálogo católico-ortodoxo.",
    fontes: [
      "ACO II.1.3, pp. 88–99 (Sessão 16)",
      "Leão Magno, Epistulae 104, 105, 106",
      "Price & Gaddis, vol. 3, pp. 67–102",
      "F. Dvornik, Byzance et la primauté romaine, Paris 1964",
      "K. Schatz, Papal Primacy, pp. 47–56",
    ],
  },
  {
    id: 5,
    titulo: "A reabilitação de Teodoreto e Ibas (Sessões 8–14)",
    resumo:
      "As sessões que examinaram os casos de Teodoreto de Ciro e Ibas de Edessa, deposto no Latrocínio " +
      "de 449, e a exigência de que anatematizassem Nestório antes de serem readmitidos.",
    detalhes:
      "Teodoreto de Ciro, o principal teólogo antioqueno vivo e antigo adversário literário de Cirilo, " +
      "foi admitido ao concílio já na Sessão 1, provocando os gritos indignados dos egípcios. Sua " +
      "reabilitação formal ocorreu na Sessão 8 (26 de outubro): os bispos exigiram que ele anatematizasse " +
      "explicitamente Nestório antes de recuperar seu assento. Teodoreto hesitou, tentou fazer uma " +
      "profissão de fé positiva, mas foi interrompido pelos gritos: \"Diz clara e simplesmente: anátema " +
      "a Nestório!\". Cedeu por fim, pronunciando o anátema, e foi readmitido. O caso de Ibas de Edessa, " +
      "julgado nas Sessões 10 e 11 (27–28 de outubro), foi mais complexo: envolveu a leitura de sua " +
      "célebre \"Carta a Maris o Persa\", que criticava duramente Cirilo e defendia a cristologia " +
      "antioquena. Após intenso debate, a carta foi julgada ortodoxa por Paschasinus e a maioria, e " +
      "Ibas foi restaurado à sua sé.",
    partesEnvolvidas: [
      "Teodoreto de Ciro",
      "Ibas de Edessa",
      "Bispos egípcios e palestinos",
      "Legados papais",
    ],
    resultado:
      "Ambos foram reabilitados e readmitidos às suas sés, restaurando a linha antioquena moderada. " +
      "A Carta de Ibas a Maris foi implicitamente aprovada pelo concílio.",
    consequenciaDeLongoPrazo:
      "Essa reabilitação seria o ponto mais explosivo da recepção posterior de Calcedônia. Um século " +
      "depois, o II Concílio de Constantinopla (553), sob Justiniano, condenaria os escritos anti-cirilianos " +
      "de Teodoreto, a Carta de Ibas e a pessoa de Teodoro de Mopsuéstia — a chamada \"controvérsia dos " +
      "Três Capítulos\" — na tentativa de reconciliar os miafisitas, provocando cismas no Ocidente.",
    fontes: [
      "ACO II.1.3, pp. 7–42 (Sessões 8–11)",
      "Price & Gaddis, vol. 2, pp. 250–314",
      "P. T. R. Gray, The Defense of Chalcedon in the East (451–553), Leiden 1979",
      "Grillmeier, Christ in Christian Tradition, vol. 2/2, pp. 411–462",
    ],
  },
  {
    id: 6,
    titulo: "A disputa Jerusalém vs. Antioquia (Sessão 7)",
    resumo:
      "O acordo entre Juvenal de Jerusalém e Máximo de Antioquia sobre a divisão das províncias " +
      "palestinas, criando de fato o quinto patriarcado.",
    detalhes:
      "Juvenal de Jerusalém, bispo ambicioso que havia mudado de lado várias vezes (apoiara Cirilo em " +
      "431, Dioscoro em 449, e agora Leão em 451), buscava há décadas transformar sua sé em um patriarcado " +
      "independente da antiga jurisdição antioquena. Na Sessão 7 (26 de outubro), após negociações " +
      "prévias, foi apresentado um acordo com Máximo de Antioquia: Jerusalém obteria jurisdição sobre " +
      "as três províncias da Palestina (Palaestina Prima, Secunda e Tertia), enquanto Antioquia manteria " +
      "a Fenícia e a Arábia. Os legados papais protestaram, argumentando que uma mudança de jurisdição " +
      "dessa magnitude precisaria da aprovação de Roma, mas o acordo foi ratificado. Essa decisão " +
      "consumou institucionalmente o esquema pentárquico (Roma, Constantinopla, Alexandria, Antioquia, " +
      "Jerusalém) que se tornaria a estrutura eclesiológica clássica do cristianismo oriental.",
    partesEnvolvidas: [
      "Juvenal de Jerusalém",
      "Máximo de Antioquia",
      "Legados papais",
      "Comissários imperiais",
    ],
    resultado:
      "Reconhecimento de Jerusalém como o quinto patriarcado, com jurisdição sobre as três Palestinas. " +
      "Consolidação institucional da Pentarquia.",
    consequenciaDeLongoPrazo:
      "A Pentarquia tornou-se a eclesiologia estruturante do cristianismo bizantino e permanece a " +
      "matriz da comunhão ortodoxa. O modelo pentárquico rivaliza historicamente com o modelo petrino " +
      "romano e é uma das chaves para entender as diferenças eclesiológicas entre Oriente e Ocidente.",
    fontes: [
      "ACO II.1.3, pp. 3–7 (Sessão 7)",
      "Price & Gaddis, vol. 2, pp. 240–249",
      "E. Honigmann, \"Juvenal of Jerusalem\", DOP 5 (1950), pp. 209–279",
      "L. Perrone, La Chiesa di Palestina e le controversie cristologiche, Brescia 1980",
    ],
  },
  {
    id: 7,
    titulo: "O destino dos bispos egípcios",
    resumo:
      "A recusa de 13 bispos egípcios em assinar a Definição sem um novo patriarca, a coação, " +
      "o retorno ao Egito e o linchamento de Proterio em 457.",
    detalhes:
      "Após a deposição de Dioscoro, restaram no concílio cerca de 17 bispos egípcios. Quando " +
      "convidados a subscrever a Definição e o Tomo de Leão, 13 deles se recusaram, argumentando que " +
      "não podiam, segundo o direito canônico alexandrino (o \"cânon 6 de Niceia\" na leitura egípcia), " +
      "tomar decisões desse porte sem a aprovação de seu arcebispo. Prostraram-se aos pés dos " +
      "comissários imploram para não serem forçados, dizendo que se voltassem ao Egito assinada a " +
      "fórmula seriam mortos pelo povo. Os comissários aceitaram adiar sua decisão até a eleição de um " +
      "novo patriarca, exigindo apenas que assinassem o Tomo. Voltaram ao Egito, onde a eleição de " +
      "Proterio como sucessor de Dioscoro em 452 foi recebida com hostilidade violenta. Após a morte " +
      "de Marciano em 457, uma revolta popular em Alexandria, liderada pelo presbítero Timóteo Éluro " +
      "(\"o gato\"), linchou Proterio na Sexta-Feira Santa daquele ano. Timóteo foi consagrado " +
      "patriarca miafisita, iniciando a sucessão paralela que dura até hoje na Igreja Copta.",
    partesEnvolvidas: [
      "13 bispos egípcios",
      "Comissários imperiais",
      "Proterio de Alexandria (sucessor imposto)",
      "Timóteo Éluro (líder miafisita)",
    ],
    resultado:
      "Os bispos egípcios foram dispensados de assinar a Definição imediatamente. Proterio foi eleito " +
      "e assassinado. A Igreja Alexandrina rompeu com Calcedônia.",
    consequenciaDeLongoPrazo:
      "Nasce a Igreja Copta Ortodoxa (não-calcedoniana), que hoje conta com cerca de 10 milhões de " +
      "fiéis. O padrão de resistência popular egípcia a decisões conciliares \"impostas\" pelo Império " +
      "torna-se permanente. Alexandria deixa de ser um dos grandes centros doutrinais da cristandade " +
      "imperial.",
    fontes: [
      "ACO II.1.2, pp. 111–114 (Sessão 4, súplica dos egípcios)",
      "Evágrio Escolástico, Historia Ecclesiastica II.5, II.8",
      "Zacarias Retor, Historia Ecclesiastica III–IV",
      "W. H. C. Frend, The Rise of the Monophysite Movement, Cambridge 1972",
      "S. Davis, The Early Coptic Papacy, Cairo 2004",
    ],
  },
  {
    id: 8,
    titulo: "A questão de Crisáfio e a \"sombra\" do Latrocínio",
    resumo:
      "A queda do eunuco Crisáfio, patrono de Eutiques, e como sua rede de influência continuou a " +
      "gerar desconfianças no concílio, especialmente contra Anatólio de Constantinopla.",
    detalhes:
      "Crisáfio, poderoso eunuco spatharios do imperador Teodósio II, foi durante anos o patrono " +
      "político de Eutiques (seu padrinho de batismo) e o arquiteto do Latrocínio de Éfeso (449), " +
      "manipulando a corte para desacreditar Flaviano de Constantinopla. Sua queda foi rápida: após a " +
      "morte de Teodósio II em julho de 450, Pulquéria e Marciano o exilaram e executaram ainda naquele " +
      "ano. Mas sua sombra pairou sobre Calcedônia: muitos bispos que haviam assinado sob coação em 449 " +
      "temiam represálias, e sua rede clientelística ainda tinha ramificações. O ponto mais delicado " +
      "foi Anatólio de Constantinopla, que havia sido apocrisiário (representante) de Dioscoro em " +
      "Constantinopla e fora consagrado patriarca em 449 pelo próprio Dioscoro, com apoio de Crisáfio. " +
      "Os legados papais desconfiavam de sua ortodoxia e de seus vínculos com a facção alexandrina, " +
      "exigindo que ele demonstrasse claramente sua adesão ao Tomo de Leão. Anatólio conduziu-se com " +
      "habilidade extrema: aderiu firmemente à cristologia leonina, mas trabalhou nos bastidores para " +
      "obter o Cânon 28, mostrando que a nova ordem constantinopolitana não seria mera cliente romana.",
    partesEnvolvidas: [
      "Crisáfio (postumamente)",
      "Anatólio de Constantinopla",
      "Legados papais",
      "Imperador Marciano e Pulquéria",
    ],
    resultado:
      "A rede de Crisáfio foi desmontada politicamente antes do concílio. Anatólio consolidou-se " +
      "como patriarca legítimo, tornando-se figura-chave do calcedonismo oriental, mas também obteve " +
      "o Cânon 28 que engrandecia sua sé.",
    consequenciaDeLongoPrazo:
      "O caso ilustra como as decisões dogmáticas de Calcedônia estavam entrelaçadas com reconfigurações " +
      "políticas na corte imperial. Reforça também a ambiguidade estrutural do calcedonismo oriental: " +
      "doutrinalmente romano no Tomo, mas politicamente autônomo no Cânon 28.",
    fontes: [
      "ACO II.1.1, pp. 65–68 (introdução da Sessão 1)",
      "Teófanes Confessor, Chronographia, AM 5942–5943",
      "R. W. Burgess, \"The Accession of Marcian\", BZ 86/87 (1993/94), pp. 47–68",
      "F. Millar, A Greek Roman Empire: Power and Belief under Theodosius II, Berkeley 2006, pp. 168–191",
      "Grillmeier, Christ in Christian Tradition, vol. 1, pp. 520–526",
    ],
  },
];