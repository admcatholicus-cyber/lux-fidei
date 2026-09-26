/**
 * MITOS E EQUIVOCOS SOBRE O CONCÍLIO DE CONSTANTINOPLA I
 * Correções detalhadas dos equívocos mais comuns.
 */

export interface Mito {
  id: number;
  mito: string;
  realidade: string;
  explicacao: string;
  origemDoMito: string;
  gravidade: "alta" | "média" | "baixa";
  fontes: string[];
}

export const mitos: Mito[] = [
  {
    id: 1,
    mito: "O Credo que rezamos na missa foi escrito em Niceia (325).",
    realidade:
      "O Credo que rezamos é o Credo NICENO-CONSTANTINOPOLITANO (381), " +
      "não o Credo de Niceia (325). O Credo de 325 terminava em " +
      "'E no Espírito Santo' e não tinha as cláusulas sobre a Igreja, " +
      "o Batismo e a Ressurreição.",
    explicacao:
      "A confusão é compreensível porque o Credo de 381 é baseado " +
      "no de 325 e mantém sua estrutura. Mas as adições são enormes: " +
      "toda a pneumatologia ('Senhor que dá a vida...'), toda a " +
      "cristologia expandida ('crucificado sob Pôncio Pilatos...'), " +
      "e toda a eclesiologia/escatologia ('una, santa, católica...'). " +
      "O Credo de 325 tinha ~150 palavras; o de 381 tem ~230.",
    origemDoMito:
      "O nome 'Credo Niceno' é usado popularmente para o Credo de 381, " +
      "o que gera confusão. Tecnicamente, deveria ser chamado " +
      "'Credo Niceno-Constantinopolitano'.",
    gravidade: "alta",
    fontes: ["J.N.D. Kelly, Early Christian Creeds, cap. 7"],
  },
  {
    id: 2,
    mito: "O Filioque ('e do Filho') faz parte do Credo original de 381.",
    realidade:
      "O Credo original de 381 diz que o Espírito Santo 'procede do Pai' " +
      "— PONTO. O Filioque ('e do Filho') foi inserido séculos depois " +
      "no Ocidente (Toledo, 589) e nunca foi aceito pelo Oriente.",
    explicacao:
      "O texto grego original diz: τὸ ἐκ τοῦ Πατρὸς ἐκπορευόμενον " +
      "('que procede do Pai'). Não há καὶ τοῦ Υἱοῦ ('e do Filho'). " +
      "O Filioque foi adicionado gradualmente no Ocidente: primeiro " +
      "na Espanha (Sínodo de Toledo, 589, contra o arianismo visigodo), " +
      "depois na Gália, e finalmente em Roma (1014, sob o Papa " +
      "Bento VIII, a pedido do imperador Henrique II). " +
      "Os ortodoxos consideram a adição uma violação do Cânon 7 " +
      "de Éfeso (431), que proíbe alterações no Credo.",
    origemDoMito:
      "Católicos latinos rezam o Credo com o Filioque há quase " +
      "1000 anos, o que cria a impressão de que 'sempre foi assim'.",
    gravidade: "alta",
    fontes: [
      "J.N.D. Kelly, Early Christian Creeds",
      "A. Edward Siecienski, The Filioque: History of a Doctrinal Controversy",
    ],
  },
  {
    id: 3,
    mito: "Constantinopla I foi um concílio verdadeiramente 'universal' com representantes de toda a cristandade.",
    realidade:
      "O concílio foi EXCLUSIVAMENTE oriental. ~150 bispos, todos " +
      "do Oriente. O Papa Dâmaso I não foi convidado, Ambrósio de " +
      "Milão não compareceu, e nenhum bispo da Gália, Hispânia, " +
      "África ou Itália esteve presente.",
    explicacao:
      "A ecumenicidade de Constantinopla I foi questionada por " +
      "décadas. O Sínodo de Roma (382) sob Dâmaso reagiu friamente " +
      "aos resultados. O Ocidente só aceitou Constantinopla I como " +
      "ecumênico no Concílio de Calcedônia (451), 70 anos depois, " +
      "e mesmo assim com reservas sobre o Cânon 3.",
    origemDoMito:
      "A classificação como '2º Concílio Ecumênico' (feita em " +
      "Calcedônia) retroage a ecumenicidade, criando a impressão " +
      "de que foi universal desde o início.",
    gravidade: "alta",
    fontes: [
      "Norman Tanner, Decrees of the Ecumenical Councils",
      "Sócrates Escolástico, HE V.8",
    ],
  },
  {
    id: 4,
    mito: "Constantinopla I 'inventou' a divindade do Espírito Santo.",
    realidade:
      "O concílio não INVENTOU a divindade do ES — DEFINIU " +
      "dogmaticamente o que a Igreja já cria e praticava há séculos.",
    explicacao:
      "A divindade do ES já era confessada na liturgia (doxologia " +
      "trinitária), no batismo (fórmula de Mt 28:19) e na " +
      "teologia de muitos Padres pré-nicenos (Irineu, Tertuliano, " +
      "Orígenes). O que Constantinopla fez foi formular essa fé " +
      "em linguagem dogmática precisa contra os pneumatomachianos, " +
      "que a negavam. É a diferença entre fé vivida e definição " +
      "conciliar.",
    origemDoMito:
      "A confusão entre 'definir' (tornar explícito e dogmático) " +
      "e 'inventar' (criar do nada). Críticos do cristianismo " +
      "frequentemente confundem os dois.",
    gravidade: "alta",
    fontes: [
      "Basílio de Cesareia, De Spiritu Sancto",
      "Gregório de Nazianzo, Oração 31",
    ],
  },
  {
    id: 5,
    mito: "Gregório de Nazianzo presidiu o concílio inteiro do início ao fim.",
    realidade:
      "Gregório presidiu apenas a Fase 2 (junho de 381), " +
      "aproximadamente um mês. O concílio teve TRÊS presidentes: " +
      "Melécio (Fase 1), Gregório (Fase 2) e Nectário (Fase 3).",
    explicacao:
      "Melécio de Antioquia presidiu a abertura e morreu poucas " +
      "semanas depois. Gregório assumiu, presidiu a elaboração " +
      "do Credo e a crise dos macedonianos, mas renunciou " +
      "dramaticamente. Nectário, um leigo recém-batizado, " +
      "presidiu a fase final e o encerramento.",
    origemDoMito:
      "Gregório é a figura mais famosa do concílio, o que leva " +
      "à suposição de que ele esteve no comando o tempo todo.",
    gravidade: "média",
    fontes: ["Gregório de Nazianzo, De Vita Sua", "Sócrates Escolástico, HE V.8"],
  },
  {
    id: 6,
    mito: "Os 7 cânones foram todos aprovados unanimemente em 381.",
    realidade:
      "Apenas os cânones 1-4 são indiscutivelmente de 381. " +
      "Os cânones 5-7 provavelmente pertencem ao Sínodo de " +
      "Constantinopla de 382 e foram anexados posteriormente.",
    explicacao:
      "Os historiadores debatem a autoria dos cânones 5-7. " +
      "O Cânon 5 menciona um 'tomo dos ocidentais' que parece " +
      "referir-se a documentos de 382. O Cânon 6 estabelece " +
      "procedimentos que parecem posteriores. O Cânon 7 trata " +
      "da recepção de hereges de forma mais detalhada do que " +
      "o contexto de 381 exigiria. A maioria dos estudiosos " +
      "aceita que são de 382, mas a tradição os agrupa com 381.",
    origemDoMito:
      "A tradição canônica agrupa todos os 7 sob 'Constantinopla I' " +
      "sem distinguir entre 381 e 382.",
    gravidade: "média",
    fontes: [
      "Norman Tanner, Decrees of the Ecumenical Councils",
      "Heinz Ohme, 'Die Kanones des Konzils von Konstantinopel 381'",
    ],
  },
  {
    id: 7,
    mito: "O concílio resolveu todas as controvérsias trinitárias de uma vez por todas.",
    realidade:
      "O concílio resolveu a questão TRINITÁRIA (Pai, Filho, ES), " +
      "mas abriu novas frentes de conflito: a cristologia " +
      "(duas naturezas de Cristo), a primazia de Constantinopla " +
      "(Cânon 3) e o cisma de Antioquia.",
    explicacao:
      "A história da Igreja é uma série de concílios que resolvem " +
      "uma questão e geram outra. Constantinopla I fechou a " +
      "Trindade, mas a cristologia explodiria em Éfeso (431) " +
      "e Calcedônia (451). O Cânon 3 gerou o conflito " +
      "Roma-Constantinopla que culminou no Grande Cisma de 1054.",
    origemDoMito:
      "A tendência de ver os concílios como 'pontos finais' " +
      "em vez de 'etapas' de um processo contínuo.",
    gravidade: "média",
    fontes: ["Lewis Ayres, Nicaea and its Legacy"],
  },
  {
    id: 8,
    mito: "O arianismo morreu com o Concílio de Constantinopla I.",
    realidade:
      "O arianismo sobreviveu por mais de 200 anos após 381, " +
      "especialmente entre os povos germânicos (godos, vândalos, " +
      "burgúndios, lombardos) que haviam sido convertidos por " +
      "missionários arianos como Úlfilas.",
    explicacao:
      "Os godos foram evangelizados por Úlfilas (~311–383), " +
      "bispo ariano/homoiano, antes de 381. Quando os godos " +
      "invadiram o Império Romano (sacos de Roma em 410, " +
      "reinos na Gália, Hispânia, Itália e África), levaram " +
      "o arianismo consigo. O arianismo só desapareceu quando " +
      "os reinos germânicos se converteram ao catolicismo: " +
      "francos (Clóvis, 496), visigodos (Recaredo, 589), " +
      "lombardos (séc. VII).",
    origemDoMito:
      "A narrativa simplificada de que 'o concílio decidiu, " +
      "a heresia acabou'. Na realidade, a política e a " +
      "evangelização levaram séculos.",
    gravidade: "média",
    fontes: [
      "Peter Heather, The Goths",
      "E.A. Thompson, The Visigoths in the Time of Ulfila",
    ],
  },
  {
    id: 9,
    mito: "O Credo de Constantinopla é uma 'revisão' ou 'edição' do Credo de Niceia.",
    realidade:
      "Os estudiosos debatem se o Credo de 381 é uma expansão " +
      "do Credo de 325 ou um credo diferente (possivelmente " +
      "o credo batismal de Jerusalém) com elementos nicenos " +
      "incorporados.",
    explicacao:
      "A visão tradicional é que os bispos de 381 pegaram o " +
      "Credo de 325 e adicionaram as cláusulas pneumatológicas " +
      "e eclesiológicas. Mas J.N.D. Kelly e outros argumentaram " +
      "que o Credo de 381 pode ser baseado no credo batismal " +
      "de Jerusalém (usado por Cirilo), que já tinha muitas " +
      "das expansões cristológicas, e que os bispos apenas " +
      "adicionaram a pneumatologia. A questão permanece em aberto.",
    origemDoMito:
      "A simplificação de que 381 = 325 + adições. " +
      "A realidade textual é mais complexa.",
    gravidade: "baixa",
    fontes: [
      "J.N.D. Kelly, Early Christian Creeds, cap. 7-8",
      "John McGuckin, 'The Issue of the Council of Constantinople'",
    ],
  },
  {
    id: 10,
    mito: "Teodósio ditou as decisões teológicas do concílio.",
    realidade:
      "Teodósio convocou o concílio e impôs suas decisões " +
      "politicamente, mas as decisões TEOLÓGICAS foram " +
      "genuinamente episcopais. Os bispos debateram, " +
      "negociaram e formularam o Credo sem interferência " +
      "imperial direta na doutrina.",
    explicacao:
      "Diferente de Constâncio II (que ditou fórmulas arianas " +
      "aos bispos em Rimini-Selêucia, 359), Teodósio respeitava " +
      "a competência teológica dos bispos. Ele definiu o " +
      "quadro político (nicenismo obrigatório), mas deixou " +
      "a formulação doutrinária para os teólogos. " +
      "A prova: o Credo de 381 reflete a teologia dos " +
      "Capadócios, não a de Teodósio.",
    origemDoMito:
      "A confusão entre 'convocar/patrocinador' e 'autor'. " +
      "Também a projeção do cesaropapismo bizantino posterior " +
      "sobre o século IV.",
    gravidade: "média",
    fontes: ["Richard Price, 'The First Council of Constantinople'"],
  },
];

export const resumoMitos =
  "Os mitos sobre Constantinopla I refletem três tendências: " +
  "(1) simplificação excessiva (o concílio 'resolveu tudo'); " +
  "(2) anacronismo (projetar desenvolvimentos posteriores " +
  "sobre 381, como o Filioque); e (3) confusão entre " +
  "Niceia (325) e Constantinopla (381). A correção desses " +
  "mitos é essencial para uma compreensão honesta da " +
  "história da Igreja.";