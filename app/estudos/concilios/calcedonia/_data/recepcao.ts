// ═══════════════════════════════════════════════════════════════════════════
// RECEPÇÃO HISTÓRICA DO CONCÍLIO DE CALCEDÔNIA (451 d.C. — HOJE)
// ═══════════════════════════════════════════════════════════════════════════
// Linha do tempo da recepção do concílio ao longo de 16 séculos:
// da rejeição violenta no Egito às Declarações Cristológicas Comuns do
// século XXI. Cada evento marca uma etapa na longa e inacabada história
// da recepção (ou rejeição) da Definição calcedoniana.
// ═══════════════════════════════════════════════════════════════════════════

export const resumoRecepcao: string =
  "A recepção do Concílio de Calcedônia é uma das mais complexas e prolongadas da história cristã. " +
  "Diferentemente de Niceia (325), cuja fórmula foi aceita relativamente rápido após décadas de " +
  "resistência ariana, Calcedônia produziu um cisma imediato e permanente que dividiu a cristandade " +
  "em duas grandes famílias — calcedoniana e não-calcedoniana — cuja separação institucional dura " +
  "até hoje. No interior do campo calcedoniano, a recepção também não foi linear: o século VI viu " +
  "a necessidade de \"reler\" Calcedônia em chave cirílica (Constantinopla II, 553); o século VII " +
  "exigiu a explicitação das duas vontades (Constantinopla III, 681); o século XI trouxe a ruptura " +
  "com o Ocidente (1054); e a Reforma Protestante do século XVI aceitou Calcedônia mas rejeitou " +
  "os concílios posteriores. Somente no século XX, com o movimento ecumênico e as Declarações " +
  "Cristológicas Comuns, começou-se a vislumbrar a possibilidade de convergência real — sem que " +
  "a comunhão eucarística plena tenha sido ainda restaurada.";

export interface EventoRecepcao {
  periodo: string;
  titulo: string;
  descricao: string;
  importancia: string;
}

export const recepcao: EventoRecepcao[] = [
  {
    periodo: "451–457",
    titulo: "Rejeição no Egito, assassinato de Proterio e ascensão de Timóteo Éluro",
    descricao:
      "A recepção imediata de Calcedônia no Egito foi de rejeição violenta e generalizada. Os 13 " +
      "bispos egípcios presentes ao concílio recusaram subscrever a Definição, alertando que seriam " +
      "mortos pelo povo se voltassem com o Tomo assinado. Proterio, consagrado patriarca calcedoniano " +
      "em 452 sob proteção militar, governou uma cidade em revolta permanente. Com a morte de " +
      "Marciano (457), o presbítero Timóteo Éluro (\"o Gato\") foi consagrado anti-patriarca " +
      "miafisita e Proterio foi linchado pela multidão na Sexta-Feira Santa de 457. A partir " +
      "desse momento, Alexandria passou a ter duas sucessões patriarcais paralelas — calcedoniana " +
      "(melquita) e miafisita (copta) — situação que perdura até hoje.",
    importancia:
      "Marca o nascimento efetivo do Cisma de Calcedônia e da Igreja Copta como entidade eclesial " +
      "independente. A violência do rompimento tornou a reconciliação praticamente impossível para " +
      "as gerações seguintes.",
  },
  {
    periodo: "482",
    titulo: "O Henótico de Zenão: tentativa imperial de \"ignorar\" Calcedônia",
    descricao:
      "O imperador Zenão, aconselhado pelo patriarca Acácio de Constantinopla, promulgou o Henótico " +
      "(\"Ato de União\"), edito que reafirmava Niceia, Constantinopla e Éfeso, condenava Nestório " +
      "e Eutiques, aprovava as Doze Anátemas de Cirilo — mas deliberadamente EVITAVA mencionar " +
      "Calcedônia e o Tomo de Leão. A fórmula final anatematizava \"quem quer que tenha pensado " +
      "algo diverso, seja em Calcedônia ou em qualquer outro sínodo\", deixando ambíguo se Calcedônia " +
      "estava incluída ou excluída. Era uma tentativa de compromisso para reconciliar os moderados " +
      "de ambos os lados sem alienar nenhum completamente.",
    importancia:
      "Representa a primeira tentativa imperial de contornar o cisma calcedoniano pela ambiguidade " +
      "deliberada. Fracassou duplamente: os miafisitas radicais (\"acéfalos\") rejeitaram por " +
      "insuficiência, e Roma reagiu com o Cisma Acaciano.",
  },
  {
    periodo: "484–519",
    titulo: "Cisma Acaciano: 35 anos de ruptura entre Roma e Constantinopla",
    descricao:
      "O papa Félix III, indignado com o Henótico e com a comunhão que Acácio mantinha com " +
      "patriarcas miafisitas, excomungou Acácio em 484. Constantinopla riscou o nome do papa dos " +
      "dípticos litúrgicos. Durante 35 anos, as duas maiores sés da cristandade não estiveram em " +
      "comunhão — o primeiro cisma prolongado entre Roma e o Oriente. O cisma atravessou os " +
      "pontificados de Félix III, Gelásio I (cuja carta \"Duo sunt\" de 494 formulou a doutrina " +
      "das duas espadas), Anastácio II, Símaco e Hormisdas, e os reinados de Zenão, Anastácio I " +
      "(abertamente miafisita) e Justino I.",
    importancia:
      "Primeira grande ruptura institucional entre Ocidente e Oriente, prefigurando o Grande Cisma " +
      "de 1054. Mostrou que a questão calcedoniana não era apenas oriental, mas afetava a comunhão " +
      "universal da Igreja.",
  },
  {
    periodo: "518–519",
    titulo: "Fim do Cisma Acaciano e Fórmula de Hormisdas",
    descricao:
      "Com a ascensão de Justino I (518), tio de Justiniano e calcedoniano convicto, o novo " +
      "patriarca João II de Constantinopla aceitou as condições do papa Hormisdas para a " +
      "reconciliação. A Fórmula de Hormisdas (28 de março de 519), subscrita por 2.500 bispos " +
      "orientais, reafirmava integralmente Calcedônia e o Tomo de Leão, anatematizava Nestório, " +
      "Eutiques, Dioscoro, Acácio e todos os patriarcas que mantiveram comunhão com heréticos. " +
      "Continha a célebre cláusula: \"Na Sé Apostólica sempre foi conservada a religião católica " +
      "sem mancha\" — texto que seria citado pelo Vaticano I (1870) como prova da infalibilidade " +
      "papal.",
    importancia:
      "Restaurou a comunhão Roma–Constantinopla e consolidou Calcedônia como norma inegociável da " +
      "fé imperial. Porém, aprofundou o abismo com os miafisitas, agora formalmente anatematizados " +
      "em bloco.",
  },
  {
    periodo: "532–533",
    titulo: "Colóquio de Justiniano com os severianos em Constantinopla",
    descricao:
      "Justiniano, já co-imperador e teólogo amador de alto nível, organizou um debate formal em " +
      "Constantinopla entre teólogos calcedonianos (chefiados por Hipácio de Éfeso) e miafisitas " +
      "moderados seguidores de Severo de Antioquia (então exilado no Egito). O colóquio durou " +
      "vários dias e explorou sistematicamente as convergências e divergências entre as duas " +
      "cristologias. Justiniano ficou impressionado com a ortodoxia substancial dos severianos e " +
      "passou a buscar fórmulas de compromisso que mantivessem a letra de Calcedônia mas " +
      "adotassem linguagem mais cirílica — projeto que culminaria no II Concílio de " +
      "Constantinopla (553).",
    importancia:
      "Primeira tentativa acadêmica séria de reaproximação teológica entre calcedonianos e " +
      "miafisitas. Demonstrou que a divergência era em grande parte terminológica, antecipando " +
      "as conclusões do diálogo ecumênico do século XX.",
  },
  {
    periodo: "553",
    titulo: "II Concílio de Constantinopla: condenação dos Três Capítulos",
    descricao:
      "O V Concílio Ecumênico, convocado por Justiniano e presidido por Eutíquio de Constantinopla, " +
      "condenou três textos e figuras da tradição antioquena que os miafisitas consideravam " +
      "nestorianizantes: (1) a pessoa e obras de Teodoro de Mopsuéstia; (2) os escritos " +
      "anti-cirilianos de Teodoreto de Ciro; (3) a Carta de Ibas de Edessa a Maris. A intenção " +
      "era \"cirilianizar\" a recepção de Calcedônia, produzindo a chamada \"cristologia " +
      "neocalcedoniana\": Calcedônia lida à luz de Cirilo, com ênfase na única hipóstase do " +
      "Verbo e na Theopaschismo (\"um da Trindade sofreu na carne\"). O papa Vigílio resistiu " +
      "longamente antes de ceder sob coação imperial.",
    importancia:
      "Reinterpretação oficial de Calcedônia em chave cirílica. Não reconciliou os miafisitas " +
      "(que consideraram gesto insuficiente e tardio), mas definiu a leitura \"neocalcedoniana\" " +
      "que se tornaria padrão na Ortodoxia bizantina.",
  },
  {
    periodo: "638",
    titulo: "Ecthesis de Heráclio: a tentativa monotelita",
    descricao:
      "O imperador Heráclio, tendo reconquistado Síria e Egito dos persas (628), buscou " +
      "reconciliar miafisitas e calcedonianos através de nova fórmula de compromisso: a Ecthesis " +
      "(\"Exposição de Fé\"), redigida pelo patriarca Sérgio de Constantinopla, afirmava duas " +
      "naturezas em Cristo (mantendo Calcedônia) mas UMA SÓ VONTADE (monotelismo) e UMA SÓ " +
      "OPERAÇÃO (monoenergismo). A ideia era dar aos miafisitas a unidade dinâmica que " +
      "reivindicavam sem abandonar a dualidade natural calcedoniana. A fórmula foi rejeitada " +
      "tanto por miafisitas (insuficiente) quanto por calcedonianos ortodoxos, liderados por " +
      "Máximo Confessor e pelo papa Martinho I.",
    importancia:
      "Última grande tentativa imperial de compromisso cristológico. Seu fracasso demonstrou que " +
      "Calcedônia não podia ser \"completada\" por fórmulas ambíguas, mas apenas por explicitação " +
      "rigorosa de suas implicações — o que viria em 681.",
  },
  {
    periodo: "680–681",
    titulo: "III Concílio de Constantinopla: duas vontades, duas operações",
    descricao:
      "O VI Concílio Ecumênico, convocado por Constantino IV, condenou o monoenergismo e o " +
      "monotelismo, definindo que em Cristo há DUAS vontades naturais (duo thelēmata) e DUAS " +
      "operações (duai energeiai), sem oposição, a vontade humana perfeitamente submissa e " +
      "conforme à vontade divina. A definição é consequência lógica direta de Calcedônia: se " +
      "Cristo tem duas naturezas completas, cada uma deve ter sua vontade e operação próprias. " +
      "O concílio anatematizou postumamente o papa Honório I por ter apoiado o monotelismo, " +
      "gerando debates sobre infalibilidade papal que duram até hoje.",
    importancia:
      "Completou o ciclo doutrinal calcedoniano, explicitando as implicações antropológicas da " +
      "dualidade de naturezas. Foi a última definição cristológica da Igreja indivisa. Os " +
      "miafisitas, já sob domínio árabe, não participaram.",
  },
  {
    periodo: "787",
    titulo: "II Concílio de Niceia: Calcedônia como base da teologia das imagens",
    descricao:
      "O VII Concílio Ecumênico, convocado pela imperatriz Irene para encerrar a controvérsia " +
      "iconoclasta, fundamentou a legitimidade da veneração de imagens na cristologia calcedoniana. " +
      "O argumento central, desenvolvido por João Damasceno e Teodoro Estudita: porque Cristo tem " +
      "uma humanidade real, corpórea, visível, subsistindo na hipóstase do Verbo (Calcedônia), " +
      "sua imagem pode e deve ser venerada como revelação da pessoa divina encarnada. Negar as " +
      "imagens é negar a realidade da Encarnação — e portanto negar Calcedônia. O concílio " +
      "reafirmou explicitamente todos os concílios anteriores, incluindo Calcedônia.",
    importancia:
      "Mostrou que a cristologia calcedoniana tem implicações que vão muito além da ontologia de " +
      "Cristo: fundamenta toda a teologia sacramental, litúrgica e icônica da tradição cristã " +
      "oriental e ocidental.",
  },
  {
    periodo: "869–870",
    titulo: "IV Concílio de Constantinopla: o Cânon 28 ressurge na disputa Roma–Bizâncio",
    descricao:
      "O VIII Concílio Ecumênico (na contagem católica), convocado para julgar o patriarca Fócio, " +
      "reacendeu a disputa sobre o Cânon 28 de Calcedônia. Os legados papais de Adriano II " +
      "reafirmaram a rejeição romana ao cânon, enquanto a delegação bizantina insistiu em sua " +
      "validade. A controvérsia sobre a jurisdição da Bulgária — reivindicada tanto por Roma " +
      "quanto por Constantinopla — tornou-se o campo de batalha concreto da disputa teórica " +
      "sobre primazia. O concílio depôs Fócio, mas sua reabilitação no concílio de 879–880 " +
      "(reconhecido como ecumênico pelos ortodoxos) reverteu várias decisões.",
    importancia:
      "Demonstrou que o Cânon 28 de Calcedônia continuava a ser o ponto nevrálgico da disputa " +
      "eclesiológica entre Roma e Constantinopla, quase 400 anos depois de sua promulgação.",
  },
  {
    periodo: "1054",
    titulo: "O Grande Cisma: Calcedônia como pano de fundo da ruptura definitiva",
    descricao:
      "As excomunhões mútuas entre o legado Humberto de Silva Cândida e o patriarca Miguel " +
      "Cerulário em 16 de julho de 1054 cristalizaram divergências acumuladas durante séculos. " +
      "Embora os pontos imediatos de conflito fossem o Filioque, os pães ázimos e o celibato " +
      "clerical, a questão de fundo era a primazia — e nessa questão o Cânon 28 de Calcedônia " +
      "era referência obrigatória. Para Constantinopla, o cânon fundamentava a igualdade de " +
      "privilégios entre as duas Romas; para Roma, a anulação por Leão Magno demonstrava que " +
      "nenhum concílio podia alterar a primazia petrina de direito divino. Calcedônia era, " +
      "portanto, o campo de batalha canônico do Cisma.",
    importancia:
      "Consolidação definitiva da separação entre catolicismo romano e ortodoxia bizantina. " +
      "Calcedônia, que deveria ser o concílio da unidade cristológica, tornou-se paradoxalmente " +
      "um dos instrumentos da divisão eclesiológica.",
  },
  {
    periodo: "1274",
    titulo: "II Concílio de Lyon: tentativa de união sob Miguel VIII Paleólogo",
    descricao:
      "O imperador bizantino Miguel VIII, sob pressão da ameaça de Carlos de Anjou, enviou " +
      "delegação ao concílio convocado por Gregório X em Lyon. A delegação bizantina aceitou " +
      "o Filioque, a primazia papal e todos os concílios ecumênicos (incluindo Calcedônia e " +
      "seu Cânon 28, agora interpretado em chave romana). A união foi proclamada solenemente " +
      "em 6 de julho de 1274. Contudo, a recepção em Constantinopla foi desastrosa: o clero e " +
      "o povo bizantino rejeitaram a união como traição, e o sucessor de Miguel, Andrônico II, " +
      "a repudiou formalmente em 1282.",
    importancia:
      "Mostrou que a aceitação formal de Calcedônia e dos concílios posteriores não bastava para " +
      "superar as divergências eclesiológicas profundas. A união de Lyon durou menos de uma " +
      "década.",
  },
  {
    periodo: "1439",
    titulo: "Concílio de Florença: união efêmera e rejeição final",
    descricao:
      "Diante da ameaça otomana iminente, o imperador João VIII Paleólogo e o patriarca José II " +
      "participaram do concílio convocado por Eugênio IV. Após longos debates teológicos sobre " +
      "Filioque, purgatório, primazia e pães ázimos, a união foi proclamada no decreto Laetentur " +
      "Caeli (6 de julho de 1439). Os bizantinos aceitaram a primazia papal \"com todos os seus " +
      "direitos e privilégios\" e todos os concílios ecumênicos, incluindo Calcedônia com o " +
      "Cânon 28 reinterpretado. A união foi rejeitada pelo povo e pelo clero bizantino (\"preferimos " +
      "o turbante do sultão à tiara do papa\"); Constantinopla caiu em 1453 sem que a união " +
      "tivesse sido efetivamente implementada.",
    importancia:
      "Última tentativa medieval de união plena. Seu fracasso demonstrou que a recepção de " +
      "Calcedônia e dos concílios subsequentes não pode ser imposta de cima para baixo sem " +
      "recepção eclesial real.",
  },
  {
    periodo: "1517–1564",
    titulo: "A Reforma Protestante: Lutero e Calvino aceitam Calcedônia",
    descricao:
      "Os reformadores do século XVI — Lutero, Calvino, Zuínglio, Melanchthon — rejeitaram a " +
      "autoridade dos concílios medievais e do papado, mas mantiveram os quatro primeiros " +
      "concílios ecumênicos (Niceia, Constantinopla, Éfeso, Calcedônia) como expressões " +
      "legítimas da fé bíblica. A Confissão de Augsburgo (1530, art. III), a Segunda Confissão " +
      "Helvética (1566, cap. XI) e os Trinta e Nove Artigos (1571, art. II) reproduzem " +
      "substancialmente a cristologia calcedoniana. Lutero chegou a desenvolver uma cristologia " +
      "da communicatio idiomatum mais radical que a escolástica (genus maiestaticum), mas sempre " +
      "dentro da estrutura de duas naturezas em uma pessoa.",
    importancia:
      "Calcedônia tornou-se o concílio mais universalmente aceito do cristianismo: católicos, " +
      "ortodoxos, anglicanos, luteranos, reformados e a maioria dos evangélicos o reconhecem " +
      "como normativo. É o maior denominador comum cristológico da cristandade.",
  },
  {
    periodo: "1962–1965",
    titulo: "Vaticano II: abertura ao diálogo com as Igrejas Orientais",
    descricao:
      "O Concílio Vaticano II, especialmente no decreto Orientalium Ecclesiarum (1964) e na " +
      "constituição Lumen Gentium (1964), reconheceu pela primeira vez oficialmente a legitimidade " +
      "das tradições litúrgicas, teológicas e disciplinares das Igrejas Orientais, incluindo as " +
      "não-calcedonianas. O decreto Unitatis Redintegratio (1964) sobre o ecumenismo abriu " +
      "caminho para o diálogo teológico formal com as Igrejas Ortodoxas Orientais. Paulo VI " +
      "iniciou encontros pessoais com os patriarcas orientais, culminando nas Declarações " +
      "Cristológicas Comuns das décadas seguintes.",
    importancia:
      "Mudança de paradigma: de condenação unilateral a reconhecimento da ortodoxia substancial " +
      "das igrejas não-calcedonianas. Abriu caminho para as Declarações Comuns de 1971–1996.",
  },
  {
    periodo: "1988–2023",
    titulo: "Declarações Cristológicas Comuns e estado atual do diálogo",
    descricao:
      "As últimas três décadas produziram uma série de documentos ecumênicos sem precedentes: " +
      "Declaração João Paulo II – Shenouda III (1988), Segundo Acordo de Chambésy entre " +
      "ortodoxos bizantinos e orientais (1990), Declaração João Paulo II – Mar Dinkha IV com " +
      "a Igreja Assíria (1994), encontros Francisco – Tawadros II (2015) e Francisco – " +
      "Aphrem II (2016). Todos reconhecem convergência cristológica substancial sob linguagens " +
      "divergentes. Os obstáculos remanescentes à comunhão plena são a recepção formal dos " +
      "concílios IV–VII, a primazia romana e o levantamento dos anátemas históricos. A " +
      "hospitalidade eucarística mútua já é praticada em casos pastorais específicos.",
    importancia:
      "Ponto mais avançado da recepção ecumênica de Calcedônia em 16 séculos. A convergência " +
      "doutrinal é reconhecida; a comunhão institucional permanece o desafio do século XXI.",
  },
];