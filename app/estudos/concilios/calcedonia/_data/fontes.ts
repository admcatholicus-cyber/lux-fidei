// ═══════════════════════════════════════════════════════════════════════════
// FONTES PRIMÁRIAS, SECUNDÁRIAS E MODERNAS SOBRE O CONCÍLIO DE CALCEDÔNIA
// ═══════════════════════════════════════════════════════════════════════════
// Bibliografia comentada e recursos digitais para o estudo aprofundado
// do IV Concílio Ecumênico (451 d.C.).
// ═══════════════════════════════════════════════════════════════════════════

export const resumoFontes: {
  observacao: string;
  totalPrimarias: number;
  totalSecundarias: number;
  totalModernas: number;
  totalRecursos: number;
  recomendacaoLeitura: string[];
} = {
  observacao:
    "Calcedônia é, junto com Niceia, o concílio da Antiguidade cristã mais bem documentado. As " +
    "Actas Conciliares (ACO) preservam com detalhe extraordinário os debates, os discursos, as " +
    "aclamações, as listas de assinaturas e as sessões processuais, permitindo uma reconstrução " +
    "vívida do que efetivamente aconteceu nas dezesseis sessões plenárias. Além das actas, dispomos " +
    "da correspondência de Leão Magno (Epistulae), das cartas cristológicas de Cirilo, dos " +
    "historiadores eclesiásticos do século VI (Evágrio, Zacarias Retor, João de Éfeso) e de vasta " +
    "produção teológica pós-calcedoniana. No plano dos estudos modernos, a obra monumental de Aloys " +
    "Grillmeier (Christ in Christian Tradition) e a tradução inglesa comentada das actas por Price " +
    "& Gaddis (2005) revolucionaram o campo, tornando acessível ao leitor não especialista a " +
    "riqueza documental do concílio.",
  totalPrimarias: 16,
  totalSecundarias: 4,
  totalModernas: 10,
  totalRecursos: 5,
  recomendacaoLeitura: [
    "INICIANTE — Comece por: (1) J. N. D. Kelly, Doutrinas Centrais da Fé Cristã (caps. 11–12); " +
      "(2) H. Chadwick, A Igreja Primitiva (Pelican, cap. 12); (3) a introdução geral do vol. 1 " +
      "de Price & Gaddis (2005), que oferece 100 páginas de contextualização acessível. Leitura " +
      "direta do texto da Definição de Calcedônia (curta, ~500 palavras) é obrigatória.",
    "INTERMEDIÁRIO — Aprofunde-se com: (1) J. Meyendorff, Christ in Eastern Christian Thought " +
      "(caps. 1–3); (2) A. Grillmeier, Christ in Christian Tradition, vol. 1 (partes 3–4, sobre " +
      "Éfeso, o Latrocínio e Calcedônia); (3) leitura integral do Tomo de Leão (Ep. 28) e da " +
      "correspondência pós-conciliar (Ep. 104–106); (4) R. V. Sellers, The Council of Chalcedon " +
      "(1953), ainda insuperável em algumas análises.",
    "AVANÇADO — Para pesquisa acadêmica: (1) as ACO de Eduard Schwartz (edição crítica em grego " +
      "e latim, indispensável); (2) tradução completa de Price & Gaddis (3 vols., 2005) com " +
      "aparato crítico exaustivo; (3) A. Grillmeier, Christ in Christian Tradition, vols. 2/1, " +
      "2/2, 2/3 (recepção pós-calcedoniana no Oriente); (4) monografias específicas de S. Wessel, " +
      "P. T. R. Gray, B. Daley e L. Perrone.",
  ],
};

export interface Fonte {
  autor: string;
  titulo: string;
  data: string;
  idioma: string;
  descricao: string;
  relevancia: string;
  disponibilidade?: string;
}

export const fontesPrimariasAtas: Fonte[] = [
  {
    autor: "Eduard Schwartz (ed.)",
    titulo: "Acta Conciliorum Oecumenicorum (ACO), Tomus II: Concilium Universale Chalcedonense",
    data: "Editada 1932–1938 (concílio: 451)",
    idioma: "Grego e latim (edição crítica)",
    descricao:
      "Edição crítica monumental das actas conciliares de Calcedônia, dividida em quatro volumes " +
      "principais: II.1 (actas gregas, três partes), II.2 (actas latinas), II.3 (versões latinas " +
      "tardo-antigas), II.4 (correspondência de Leão Magno e documentos relacionados). Baseada em " +
      "cotejamento de todos os manuscritos conhecidos. Reproduz literalmente os debates, discursos, " +
      "aclamações, listas de bispos, cartas oficiais e cânones. É o texto de referência universal " +
      "para qualquer estudo sério do concílio. Publicada por De Gruyter (Berlim).",
    relevancia:
      "Fonte primária absolutamente indispensável. Toda pesquisa acadêmica sobre Calcedônia parte " +
      "das ACO. As referências no formato \"ACO II.1.2, p. XXX\" que aparecem em toda a bibliografia " +
      "moderna remetem a esta edição.",
    disponibilidade: "De Gruyter (reimpressão 2010); grandes bibliotecas universitárias",
  },
  {
    autor: "Giovanni Domenico Mansi (ed.)",
    titulo:
      "Sacrorum Conciliorum Nova et Amplissima Collectio, vol. VI–VII (Concilium Chalcedonense)",
    data: "Editada 1759–1798 (concílio: 451)",
    idioma: "Grego, latim (com anotações latinas)",
    descricao:
      "A grande coleção conciliar do século XVIII, ainda hoje referência importante embora superada " +
      "criticamente pela ACO de Schwartz. Os volumes VI (colunas 529–1102) e VII (colunas 1–870) " +
      "reproduzem as actas de Calcedônia, cânones, correspondência de Leão e documentos " +
      "pós-conciliares. Muitas edições antigas de manuais patrísticos e teológicos citam Mansi em " +
      "vez das ACO, tornando o conhecimento das duas numerações útil.",
    relevancia:
      "Fonte primária clássica, ainda utilizada como referência complementar. Disponível " +
      "integralmente em domínio público (archive.org, Google Books), o que a torna mais acessível " +
      "que Schwartz.",
    disponibilidade: "Domínio público — archive.org, Documenta Catholica Omnia",
  },
  {
    autor: "Leão Magno (Papa Leão I)",
    titulo: "Tomus ad Flavianum (Epistula 28)",
    data: "13 de junho de 449",
    idioma: "Latim (traduzido para o grego em Calcedônia)",
    descricao:
      "A carta dogmática de Leão a Flaviano de Constantinopla, escrita em resposta ao caso Eutiques. " +
      "Documento de aproximadamente 6 páginas em latim, densamente teológico, que forneceu a " +
      "arquitetura latina da cristologia calcedoniana. Contém a célebre fórmula \"Agit enim utraque " +
      "forma cum alterius communione quod proprium est\" (cada forma opera em comunhão com a outra " +
      "o que lhe é próprio). Foi lido solenemente na Sessão 2 do concílio e aclamado como \"a fé " +
      "dos Padres\".",
    relevancia:
      "Uma das cinco fontes textuais explícitas da Definição de Calcedônia. Documento cristológico " +
      "latino mais influente entre Agostinho e a escolástica. Leitura obrigatória para qualquer " +
      "estudo do concílio.",
    disponibilidade:
      "PL 54, 755–782; edição crítica em ACO II.4, pp. 24–33; traduções em NPNF ser. 2, vol. 12",
  },
  {
    autor: "Cirilo de Alexandria",
    titulo: "Segunda Carta a Nestório (Epistula 4) e Carta a João de Antioquia (Epistula 39)",
    data: "430 e 433 respectivamente",
    idioma: "Grego",
    descricao:
      "As duas cartas cirilianas fundamentais para a cristologia calcedoniana. A Segunda Carta a " +
      "Nestório (430), aprovada por Éfeso 431, formula a doutrina da união hipostática (henōsis " +
      "kath' hypostasin) e o vocabulário do sujeito único. A Carta a João de Antioquia (433), " +
      "chamada Fórmula de União, é o compromisso pós-Éfeso que introduziu no vocabulário cirílico " +
      "a expressão \"duas naturezas\" — precedente decisivo para Calcedônia. Ambas foram lidas na " +
      "Sessão 2 do concílio como base doutrinal.",
    relevancia:
      "Cirilo é, com Leão, um dos dois pilares patrísticos de Calcedônia. Estas cartas fixaram o " +
      "vocabulário grego que a Definição adotou (henōsis, hypostasis, Theotokos, comunhão de " +
      "idiomas).",
    disponibilidade:
      "PG 77, 44–50 e 173–182; edição crítica em ACO I.1.1; tradução inglesa em L. R. Wickham, " +
      "Cyril of Alexandria: Select Letters (Oxford 1983)",
  },
  {
    autor: "Concílio de Calcedônia",
    titulo: "Definitio fidei (Horos tēs pisteōs) e os 28 Cânones Disciplinares",
    data: "Definição: 22 de outubro de 451; Cânones: 31 de outubro de 451",
    idioma: "Grego (traduzido para o latim)",
    descricao:
      "Os dois documentos normativos produzidos pelo próprio concílio. A Definição (aprox. 500 " +
      "palavras) fixa a fé cristológica em duas naturezas, uma hipóstase, com os quatro advérbios " +
      "apofáticos. Os 27/28 cânones regulam disciplina clerical, monástica, jurisdicional e " +
      "eclesiástica; o Cânon 28, aprovado separadamente na Sessão 16, sobre a primazia de " +
      "Constantinopla, é o mais controverso e ausente das coleções canônicas latinas antigas.",
    relevancia:
      "Textos absolutamente centrais. A Definição é o documento cristológico mais influente da " +
      "história do cristianismo; os cânones são uma das bases do direito canônico oriental e " +
      "ocidental.",
    disponibilidade:
      "ACO II.1.2, pp. 126–130 (Definição) e pp. 158–163 (cânones); Denzinger-Hünermann §§ 300–303; " +
      "traduções em NPNF ser. 2, vol. 14",
  },
  {
    autor: "Leão Magno",
    titulo: "Epistulae 93–124 (correspondência pós-conciliar)",
    data: "451–455",
    idioma: "Latim",
    descricao:
      "Coleção de cartas de Leão nos meses e anos que se seguiram ao concílio. As mais importantes " +
      "são: Ep. 93 (comendatícia dos legados papais); Ep. 94 (a Marciano sobre a abertura do " +
      "concílio); Ep. 104 a Marciano, Ep. 105 a Pulquéria e Ep. 106 a Anatólio (anulação do Cânon " +
      "28); Ep. 114 (aprovação das definições dogmáticas); Ep. 124 (a Juliano de Cós sobre a " +
      "recepção). Documentam a reação romana às decisões conciliares e a formulação da " +
      "eclesiologia petrina.",
    relevancia:
      "Fontes essenciais para compreender o posicionamento romano sobre Calcedônia, especialmente " +
      "sobre o Cânon 28 e a primazia. Base histórica da posição católica sobre a hermenêutica " +
      "do concílio.",
    disponibilidade: "PL 54, 831–1218; edição crítica em ACO II.4; traduções em NPNF ser. 2, vol. 12",
  },
];

export const fontesPrimariasHistoriadores: Fonte[] = [
  {
    autor: "Evágrio Escolástico",
    titulo: "Historia Ecclesiastica, Livro II",
    data: "Redigida c. 594",
    idioma: "Grego",
    descricao:
      "Historiador eclesiástico calcedoniano de Antioquia, cuja Historia Ecclesiastica em seis " +
      "livros cobre o período de 431 a 594. O Livro II é dedicado inteiramente aos eventos entre " +
      "Éfeso 431 e a morte de Marciano em 457, sendo a fonte narrativa antiga mais detalhada sobre " +
      "o próprio concílio (cap. 2–4), o julgamento de Dioscoro, a recepção do Tomo e o linchamento " +
      "de Proterio. Preserva também a lenda de Santa Eufêmia e o \"milagre calcedoniano\".",
    relevancia:
      "Historiador mais próximo em perspectiva e simpatia ao calcedonismo. Fonte narrativa " +
      "primária essencial. Suas fontes eram as próprias actas conciliares e testemunhos ainda " +
      "vivos ou recentes.",
    disponibilidade:
      "PG 86bis, 2415–2886; edição crítica de J. Bidez & L. Parmentier (1898); tradução inglesa " +
      "de Michael Whitby (Liverpool 2000)",
  },
  {
    autor: "Teodoro Leitor (Anagnostes)",
    titulo: "Historia Ecclesiastica (fragmentos e epítome)",
    data: "Redigida c. 518–520",
    idioma: "Grego",
    descricao:
      "Leitor da igreja de Santa Sofia em Constantinopla, autor de uma história eclesiástica em " +
      "quatro livros cobrindo o período de 439 a 527. A obra sobrevive apenas em fragmentos e em " +
      "epítome. Cobre a recepção de Calcedônia, o Henótico, o Cisma Acaciano e o início do reinado " +
      "de Justino I. Fonte importante para historiadores posteriores como Teófanes.",
    relevancia:
      "Ponte crucial entre Evágrio e as fontes bizantinas medievais. Documenta a fase mais crítica " +
      "da recepção pós-conciliar de Calcedônia.",
    disponibilidade:
      "PG 86, 165–228; edição crítica de G. C. Hansen na coleção GCS (Berlim 1971, 2ª ed. 1995)",
  },
  {
    autor: "João Malalas",
    titulo: "Chronographia, Livro XIV",
    data: "Redigida c. 565–574",
    idioma: "Grego",
    descricao:
      "Crônica universal antiquíssima produzida em Antioquia (posteriormente em Constantinopla), " +
      "cobrindo desde a criação do mundo até 565. O Livro XIV trata do reinado de Marciano e do " +
      "concílio de Calcedônia. Fonte de qualidade variável (muitas lendas e imprecisões " +
      "cronológicas), mas preserva detalhes anedóticos e populares sobre o concílio ausentes em " +
      "outras fontes. Base para muita tradição bizantina posterior.",
    relevancia:
      "Fonte popular e não erudita, útil para compreender a recepção popular do concílio no " +
      "Oriente. Preserva material único, embora deva ser usada com cautela crítica.",
    disponibilidade:
      "PG 97, 9–790; edição crítica de J. Thurn (Berlim 2000); tradução inglesa de E. Jeffreys, " +
      "M. Jeffreys & R. Scott (Melbourne 1986)",
  },
  {
    autor: "Teófanes Confessor",
    titulo: "Chronographia, Anno Mundi 5942–5949",
    data: "Redigida c. 810–815",
    idioma: "Grego",
    descricao:
      "Crônica bizantina do início do século IX, cobrindo o período de 284 (Diocleciano) a 813 " +
      "(Miguel I). Sob os anos 5942–5949 (=449–457 d.C.), Teófanes narra o Latrocínio, Calcedônia, " +
      "seu contexto político e a recepção imediata. Compilou fontes anteriores (Teodoro Leitor, " +
      "outros historiadores hoje perdidos), preservando informações valiosas. Sua obra tornou-se a " +
      "vulgata cronológica bizantina medieval.",
    relevancia:
      "Fonte importante para a cronologia e para tradições bizantinas medievais sobre o concílio. " +
      "Muitas datações usadas ainda hoje remontam a Teófanes.",
    disponibilidade:
      "PG 108, 55–1002; edição crítica de C. de Boor (1883–1885); tradução inglesa de C. Mango & " +
      "R. Scott, The Chronicle of Theophanes Confessor (Oxford 1997)",
  },
  {
    autor: "Zacarias Retor (Zacarias de Mitilene)",
    titulo: "Historia Ecclesiastica, Livros III–IV",
    data: "Redigida c. 495–518 (grego original perdido)",
    idioma: "Grego original; sobrevive em compilação siríaca",
    descricao:
      "Historiador miafisita moderado, formado em Alexandria, posteriormente bispo calcedoniano " +
      "de Mitilene. Sua História Eclesiástica em grego, escrita da perspectiva miafisita, " +
      "sobreviveu apenas em uma compilação siríaca do século VI (o \"Pseudo-Zacarias\"). Cobre o " +
      "período de 451 a 491, oferecendo a versão anti-calcedoniana dos eventos: reabilita " +
      "Dioscoro, denuncia Proterio e Marciano, celebra Timóteo Éluro e Pedro Mongo.",
    relevancia:
      "Contraponto essencial às fontes calcedonianas. Sem Zacarias, teríamos apenas a versão " +
      "vencedora. É a principal fonte narrativa da perspectiva miafisita sobre a recepção " +
      "imediata do concílio.",
    disponibilidade:
      "Edição siríaca de E. W. Brooks, CSCO 83–84 (1919–1921); tradução inglesa de G. Greatrex " +
      "et al., The Chronicle of Pseudo-Zachariah Rhetor (Liverpool 2011)",
  },
  {
    autor: "João de Éfeso",
    titulo: "Historia Ecclesiastica (Terceira Parte) e Vidas dos Santos Orientais",
    data: "c. 570–588",
    idioma: "Siríaco",
    descricao:
      "Bispo miafisita ordenado por Jacó Baradeu, autor da história eclesiástica mais importante " +
      "da tradição não-calcedoniana. A Terceira Parte de sua História (que sobrevive integralmente) " +
      "cobre 571–588, mas contém retrospectivas sobre a recepção de Calcedônia. As Vidas dos " +
      "Santos Orientais (58 biografias) documentam a resistência miafisita à imposição calcedoniana " +
      "no século VI e o surgimento das estruturas eclesiais paralelas (a chamada Igreja Jacobita).",
    relevancia:
      "Fonte fundamental para a formação institucional das igrejas miafisitas no século VI e para " +
      "compreender por que o cisma calcedoniano se tornou irreversível. Perspectiva síria " +
      "não-calcedoniana em primeira mão.",
    disponibilidade:
      "Edição siríaca e tradução latina de E. W. Brooks, CSCO 105–106 (Vitae, 1923–1926) e CSCO " +
      "105 (Historia, 1935–1936)",
  },
];

export const fontesPrimariasOutros: Fonte[] = [
  {
    autor: "Leão Magno",
    titulo: "Sermões (Tractatus septem et nonaginta)",
    data: "440–461",
    idioma: "Latim",
    descricao:
      "Corpus de 97 sermões pregados por Leão em Roma ao longo de seu pontificado. Vários deles " +
      "(especialmente os Sermões da Natividade, da Epifania, da Paixão e da Ressurreição) contêm " +
      "cristologia altamente elaborada, muitas vezes formulações que reaparecem no Tomo ad " +
      "Flavianum. Os Sermões 21–30 sobre a Natividade e 51–72 sobre a Paixão são especialmente " +
      "relevantes para a cristologia leonina.",
    relevancia:
      "Contexto homilético da cristologia do Tomo. Mostra que a doutrina do Tomo não é isolada, " +
      "mas expressa uma cristologia estável e consistente pregada por Leão durante décadas.",
    disponibilidade:
      "PL 54, 137–468; edição crítica de A. Chavasse, CCSL 138 e 138A (Turnhout 1973); traduções " +
      "em NPNF ser. 2, vol. 12 e Fathers of the Church, vol. 93",
  },
  {
    autor: "Teodoreto de Ciro",
    titulo: "Eranistes (\"O Mendigo\") e Epistulae",
    data: "Eranistes: 447; cartas: 431–457",
    idioma: "Grego",
    descricao:
      "Bispo antioqueno moderado, principal teólogo diofisita vivo em 451. O Eranistes é um " +
      "diálogo em três livros contra Eutiques, defendendo a impassibilidade da divindade, a " +
      "imutabilidade das duas naturezas e a distinção real após a união. Suas cartas (mais de " +
      "180 preservadas) documentam a recepção antioquena de Éfeso, a Fórmula de União de 433, " +
      "o Latrocínio de 449 e Calcedônia. Foi reabilitado na Sessão 8 após anatematizar Nestório.",
    relevancia:
      "Testemunho direto da tradição antioquena que Calcedônia buscou integrar. Suas obras foram " +
      "posteriormente condenadas no II Constantinopla (553), na controvérsia dos Três Capítulos.",
    disponibilidade:
      "PG 83, 27–336 (Eranistes); PG 83, 1173–1494 (Epistulae); edições críticas modernas em " +
      "Sources Chrétiennes 40, 111, 429 (cartas) e G. H. Ettlinger (Eranistes, Oxford 1975)",
  },
  {
    autor: "Proclo de Constantinopla",
    titulo: "Tomus ad Armenios (Carta aos Armênios) e Homilias marianas",
    data: "435–438",
    idioma: "Grego",
    descricao:
      "Patriarca de Constantinopla de 434 a 446, predecessor imediato dos protagonistas de " +
      "Calcedônia. Sua Carta aos Armênios é um dos textos cristológicos mais importantes entre " +
      "Éfeso e Calcedônia, defendendo a fórmula \"um da Trindade sofreu na carne\" e antecipando " +
      "várias formulações calcedonianas. Suas Homilias sobre Theotokos consolidaram o vocabulário " +
      "mariano ortodoxo.",
    relevancia:
      "Elo teológico crucial entre Cirilo e Calcedônia. Proclo mostrou como articular o cirilismo " +
      "com uma linguagem \"neutra\" aceitável a antioquenos moderados, prefigurando a síntese " +
      "calcedoniana.",
    disponibilidade:
      "PG 65, 679–888; edição crítica moderna em N. Constas, Proclus of Constantinople and the " +
      "Cult of the Virgin (Leiden 2003)",
  },
  {
    autor: "Severo de Antioquia",
    titulo:
      "Philalethes (\"Amante da Verdade\"), Contra Impium Grammaticum e correspondência",
    data: "c. 508–538",
    idioma: "Grego original (mais tarde preservado sobretudo em siríaco)",
    descricao:
      "Patriarca miafisita de Antioquia (512–518), teólogo miafisita mais importante do século " +
      "VI e figura central da recepção não-calcedoniana. O Philalethes é sua crítica cristológica " +
      "sistemática a Calcedônia; o Contra Impium Grammaticum, sua refutação do calcedoniano " +
      "João Gramático de Cesareia. Sua vasta correspondência (mais de 4.000 cartas atestadas, " +
      "das quais várias centenas preservadas) documenta a organização da igreja miafisita no exílio.",
    relevancia:
      "Sistematizador da cristologia miafisita moderada, distinta do eutiquianismo radical. " +
      "Referência doutrinal permanente das Igrejas Ortodoxas Orientais. Leitura indispensável " +
      "para o diálogo ecumênico contemporâneo.",
    disponibilidade:
      "Edições e traduções em Patrologia Orientalis (PO) vols. 4, 6, 12, 14, 25, 26, 29, 35, 36, " +
      "37, 38 e CSCO; traduções recentes em Robert R. Phenix Jr. & Cornelia B. Horn e Sebastian " +
      "Brock",
  },
];

export const fontesSecundarias: Fonte[] = [
  {
    autor: "Libério de Cartago (atribuído)",
    titulo: "Breviarium causae Nestorianorum et Eutychianorum",
    data: "c. 553–566",
    idioma: "Latim",
    descricao:
      "Compêndio latino sobre as controvérsias nestoriana e eutiquiana, produzido no contexto da " +
      "controvérsia dos Três Capítulos no Ocidente. Oferece narrativa sintética da sucessão de " +
      "eventos entre Éfeso 431 e Calcedônia 451, com perspectiva claramente calcedoniana romana. " +
      "Fonte importante para compreender a recepção ocidental do concílio no século VI.",
    relevancia:
      "Testemunho da perspectiva latina sobre a história das controvérsias cristológicas. Ajuda a " +
      "traçar a formação da narrativa \"padrão\" ocidental sobre Calcedônia.",
    disponibilidade: "PL 68, 969–1050; ACO II.5 (Schwartz)",
  },
  {
    autor: "Gelásio de Cízico",
    titulo: "Historia Concilii Nicaeni (com material sobre concílios posteriores)",
    data: "c. 475",
    idioma: "Grego",
    descricao:
      "Embora dedicada primariamente a Niceia, esta história eclesiástica contém material sobre " +
      "os concílios subsequentes e a recepção calcedoniana no último quartel do século V. Sua " +
      "perspectiva é firmemente calcedoniana, e reflete a apologética pró-Calcedônia no período " +
      "do Henótico e do Cisma Acaciano.",
    relevancia:
      "Fonte útil para compreender como o calcedonismo se apresentava a si mesmo em finais do " +
      "século V, na fase crítica de disputa com o miafisismo.",
    disponibilidade: "PG 85, 1179–1360; edição crítica de G. Loeschcke & M. Heinemann, GCS 28 (1918)",
  },
  {
    autor: "Facundo de Hermianе",
    titulo: "Pro Defensione Trium Capitulorum",
    data: "c. 546–548",
    idioma: "Latim",
    descricao:
      "Bispo africano do século VI, autor da mais importante defesa latina dos Três Capítulos " +
      "contra Justiniano. Sua obra em doze livros documenta detalhadamente a recepção ocidental " +
      "de Calcedônia e a resistência à sua reinterpretação neocalcedoniana. Preserva citações " +
      "importantes de Teodoreto e Ibas.",
    relevancia:
      "Testemunho crucial da oposição ocidental à cristologia neocalcedoniana. Documenta como " +
      "certos círculos latinos entendiam Calcedônia de modo mais \"antioqueno\" do que Justiniano " +
      "queria admitir.",
    disponibilidade:
      "PL 67, 527–878; edição crítica de J.-M. Clément & R. Vander Plaetse, CCSL 90A (Turnhout 1974)",
  },
  {
    autor: "Vitor de Túnis",
    titulo: "Chronicon",
    data: "c. 566",
    idioma: "Latim",
    descricao:
      "Bispo africano do século VI, autor de uma crônica que cobre eventos de 444 a 566. Fonte " +
      "importante para a recepção norte-africana e ocidental de Calcedônia, especialmente " +
      "durante as tensões da controvérsia dos Três Capítulos.",
    relevancia:
      "Complementa Facundo de Hermianе para compreender o campo latino ocidental resistente à " +
      "reinterpretação bizantina de Calcedônia.",
    disponibilidade: "PL 68, 941–962; edição crítica em MGH AA 11",
  },
];

export const fontesModernas: Fonte[] = [
  {
    autor: "Aloys Grillmeier, SJ (com Theresia Hainthaler para vols. 2)",
    titulo:
      "Christ in Christian Tradition / Jesus der Christus im Glauben der Kirche (5 vols. em 6 tomos)",
    data: "1965 (vol. 1); 1986–2013 (vols. 2/1 a 2/4)",
    idioma: "Alemão e inglês (traduzido)",
    descricao:
      "A obra definitiva e monumental sobre a história da cristologia até o século VIII. O vol. " +
      "1 (Do Concílio Apostólico a Calcedônia) é a apresentação mais completa e equilibrada do " +
      "desenvolvimento cristológico até 451, com análise detalhada de Éfeso, do Latrocínio e de " +
      "Calcedônia. Os vols. 2/1 a 2/4 (A Igreja de Constantinopla no século VI; A Igreja de " +
      "Alexandria com Núbia e Etiópia; As Igrejas de Jerusalém e Antioquia; A Igreja da Armênia " +
      "e Índia) cobrem a recepção pós-calcedoniana em detalhe monumental.",
    relevancia:
      "Bibliografia absolutamente indispensável. Nenhum estudo sério de Calcedônia pode ignorar " +
      "Grillmeier. Combinação rara de erudição patrística, rigor histórico e sensibilidade " +
      "ecumênica.",
    disponibilidade: "Original alemão: Herder (Friburgo); tradução inglesa: John Knox Press",
  },
  {
    autor: "Richard Price & Michael Gaddis",
    titulo: "The Acts of the Council of Chalcedon (3 vols.)",
    data: "2005",
    idioma: "Inglês",
    descricao:
      "Tradução inglesa completa e crítica das actas conciliares baseada em Schwartz (ACO), com " +
      "aparato exaustivo, introduções gerais e notas de rodapé filológicas, teológicas e " +
      "históricas. Vol. 1: sessões I–III (julgamento de Dioscoro); Vol. 2: sessões IV–XI (Definição, " +
      "reabilitação de Teodoreto e Ibas); Vol. 3: sessões XII–XVI, cânones, documentos " +
      "pós-conciliares, apêndices. Publicado por Liverpool University Press na coleção Translated " +
      "Texts for Historians.",
    relevancia:
      "Revolucionou o acesso do público não germanófono às actas de Calcedônia. Combinação " +
      "insuperável de erudição filológica com apresentação acessível. Referência atual padrão " +
      "para citação em inglês.",
    disponibilidade: "Liverpool University Press (2005); versões digitais em várias bibliotecas universitárias",
  },
  {
    autor: "John Meyendorff",
    titulo: "Christ in Eastern Christian Thought",
    data: "1969 (2ª ed. 1975)",
    idioma: "Inglês",
    descricao:
      "Obra clássica do grande teólogo ortodoxo bizantino-americano sobre o desenvolvimento da " +
      "cristologia no cristianismo oriental de Calcedônia a Gregório Pálamas. Os primeiros " +
      "capítulos oferecem análise magistral da cristologia calcedoniana, neocalcedoniana " +
      "(Constantinopla II) e pós-calcedoniana (Constantinopla III), com sensibilidade especial " +
      "para a perspectiva ortodoxa bizantina. Fundamental para compreender o desenvolvimento " +
      "cristológico oriental depois de 451.",
    relevancia:
      "Complementa Grillmeier oferecendo a perspectiva ortodoxa. Escrita com clareza pedagógica " +
      "extraordinária. Ainda hoje uma das melhores introduções ao pensamento cristológico bizantino.",
    disponibilidade: "St. Vladimir's Seminary Press, Crestwood NY; reimpressões contínuas",
  },
  {
    autor: "J. N. D. Kelly",
    titulo: "Early Christian Doctrines / Doutrinas Centrais da Fé Cristã",
    data: "1958 (5ª ed. 1977)",
    idioma: "Inglês (traduzido para o português)",
    descricao:
      "Manual clássico de história da doutrina cristã dos primeiros seis séculos, escrito por " +
      "patrólogo anglicano da Universidade de Oxford. Os caps. 11 (\"A Cristologia do V Concílio\") " +
      "e 12 (\"O Legado de Calcedônia\") oferecem apresentação sintética, precisa e equilibrada " +
      "do concílio e sua recepção imediata. Modelo de clareza acadêmica.",
    relevancia:
      "Melhor introdução em nível intermediário disponível em português. Leitura obrigatória " +
      "para quem começa o estudo do concílio.",
    disponibilidade:
      "A&C Black, London (inglês); Vida Nova, São Paulo (português, sob o título Doutrinas Centrais " +
      "da Fé Cristã)",
  },
  {
    autor: "Henry Chadwick",
    titulo:
      "The Church in Ancient Society: From Galilee to Gregory the Great e East and West: The " +
      "Making of a Rift in the Church",
    data: "2001 e 2003",
    idioma: "Inglês",
    descricao:
      "Duas obras magistrais do grande historiador eclesiástico de Oxford e Cambridge. The Church " +
      "in Ancient Society oferece narrativa magistral da história da Igreja antiga com capítulos " +
      "dedicados a Calcedônia e sua recepção. East and West traça o desenvolvimento das " +
      "divergências entre cristandade oriental e ocidental, com análise particularmente lúcida " +
      "do papel do Cânon 28 e da recepção diferenciada do concílio.",
    relevancia:
      "Combinação rara de erudição historiográfica com prosa elegante. Chadwick é insuperável " +
      "na análise das dimensões políticas, culturais e institucionais dos concílios antigos.",
    disponibilidade: "Oxford University Press (2001, 2003)",
  },
  {
    autor: "W. H. C. Frend",
    titulo: "The Rise of the Monophysite Movement",
    data: "1972 (reimpressões continuadas)",
    idioma: "Inglês",
    descricao:
      "Estudo pioneiro sobre a formação do movimento miafisita (\"monofisita\", na terminologia " +
      "então corrente) do IV ao VII séculos. Frend documentou detalhadamente as raízes sociais, " +
      "culturais, econômicas e políticas do cisma calcedoniano, mostrando como as populações copta " +
      "e siríaca se alienaram do Império através da imposição de Calcedônia. Sua tese sobre a " +
      "relação entre cisma calcedoniano e conquistas árabes tornou-se referência.",
    relevancia:
      "Fundamental para compreender por que Calcedônia produziu ruptura tão profunda. Mesmo com " +
      "revisões pontuais posteriores, permanece a análise mais completa das causas do cisma.",
    disponibilidade: "Cambridge University Press",
  },
  {
    autor: "Susan Wessel",
    titulo: "Cyril of Alexandria and the Nestorian Controversy: The Making of a Saint and of a Heretic",
    data: "2004",
    idioma: "Inglês",
    descricao:
      "Estudo detalhado da controvérsia nestoriana e do papel de Cirilo, com atenção especial à " +
      "construção retórica das identidades de \"santo\" e \"herético\". Wessel mostra como o " +
      "vocabulário e a autoridade cirilianos foram apropriados de modos concorrentes por " +
      "calcedonianos e miafisitas após 451. Excelente complemento a Grillmeier para o período " +
      "pré-Calcedônia.",
    relevancia:
      "Análise sofisticada da recepção de Cirilo, cuja apropriação foi decisiva em Calcedônia. " +
      "Fundamental para compreender a autoridade patrística no concílio.",
    disponibilidade: "Oxford University Press (2004)",
  },
  {
    autor: "Brian E. Daley, SJ",
    titulo: "God Visible: Patristic Christology Reconsidered",
    data: "2018",
    idioma: "Inglês",
    descricao:
      "Reconsideração magistral da cristologia patrística por um dos maiores patrólogos vivos, " +
      "publicada na coleção Changing Paradigms in Historical and Systematic Theology (Oxford). " +
      "O cap. 6 (\"Christ Confessed at Chalcedon\") oferece análise contemporânea sofisticada do " +
      "concílio, integrando os desenvolvimentos recentes do diálogo ecumênico com as igrejas " +
      "ortodoxas orientais.",
    relevancia:
      "Estado da arte da reflexão cristológica patrística contemporânea. Especialmente valioso " +
      "para leitores que buscam ligar Calcedônia com os debates ecumênicos atuais.",
    disponibilidade: "Oxford University Press (2018)",
  },
  {
    autor: "Pauline Allen & Bronwen Neil (eds.)",
    titulo:
      "The Oxford Handbook of Maximus the Confessor e Crisis Management in Late Antiquity (410–590 CE)",
    data: "2015 e 2013",
    idioma: "Inglês",
    descricao:
      "Coletânea de estudos de referência sobre o período pós-calcedoniano. O Handbook sobre " +
      "Máximo é essencial para compreender a interpretação calcedoniana mais sofisticada do " +
      "século VII (contra o monotelismo). Crisis Management analisa a diplomacia eclesial e " +
      "imperial pós-Calcedônia, incluindo o Henótico, o Cisma Acaciano e as tentativas de " +
      "reconciliação. Pauline Allen é uma das principais especialistas contemporâneas em Leão " +
      "Magno e no período calcedoniano.",
    relevancia:
      "Referência de última geração para a recepção conciliar. Inclui contribuições dos principais " +
      "especialistas internacionais.",
    disponibilidade: "Oxford University Press (2015); Brill (2013)",
  },
  {
    autor: "Lorenzo Perrone",
    titulo:
      "La Chiesa di Palestina e le controversie cristologiche: Dal concilio di Efeso (431) al " +
      "secondo concilio di Costantinopoli (553)",
    data: "1980",
    idioma: "Italiano",
    descricao:
      "Estudo pioneiro sobre o papel da Igreja da Palestina nas controvérsias cristológicas, com " +
      "análise particularmente detalhada da elevação de Jerusalém a patriarcado em Calcedônia " +
      "(Sessão 7), da revolta de Teodósio (452–453) e da recepção palestina do concílio nas " +
      "décadas seguintes. Complementa Grillmeier com foco regional específico.",
    relevancia:
      "Melhor estudo regional sobre a recepção palestina. Fundamental para compreender a " +
      "consolidação da Pentarquia e a formação da tradição jerosolimitana.",
    disponibilidade: "Paideia, Brescia (1980)",
  },
];

export interface RecursoOnline {
  nome: string;
  descricao: string;
  url: string;
}

export const recursosOnline: RecursoOnline[] = [
  {
    nome: "Documenta Catholica Omnia",
    descricao:
      "Repositório digital gratuito que reúne textos completos da Patrologia Latina (Migne), da " +
      "Patrologia Graeca, dos Sacrorum Conciliorum de Mansi e de inúmeros outros textos " +
      "patrísticos e conciliares. Inclui as actas de Calcedônia em Mansi (vols. VI–VII) e a " +
      "correspondência completa de Leão Magno (PL 54) em PDF. Ferramenta indispensável para " +
      "pesquisa em fontes primárias.",
    url: "https://www.documentacatholicaomnia.eu/",
  },
  {
    nome: "New Advent — Fathers of the Church",
    descricao:
      "Base de dados anglófona que reúne traduções inglesas dos Padres da Igreja, incluindo o " +
      "Tomo de Leão a Flaviano, cartas selecionadas de Cirilo de Alexandria, atos de Calcedônia " +
      "(seleção), Historia Ecclesiastica de Evágrio e outros documentos. Baseia-se principalmente " +
      "na coleção Nicene and Post-Nicene Fathers (NPNF) do século XIX. Interface amigável.",
    url: "https://www.newadvent.org/fathers/",
  },
  {
    nome: "Early Church Texts",
    descricao:
      "Projeto colaborativo que disponibiliza edições gregas críticas de textos-chave do " +
      "cristianismo antigo, com tradução inglesa e notas filológicas. Inclui a Definição de " +
      "Calcedônia em grego com tradução linha a linha, o Tomo de Leão em latim e as cartas " +
      "cristológicas de Cirilo. Especialmente valioso para quem lê grego e latim.",
    url: "https://earlychurchtexts.com/",
  },
  {
    nome: "Denzinger-Hünermann Online (Kompendium der Glaubensbekenntnisse)",
    descricao:
      "Versão digital do clássico Enchiridion Symbolorum de Denzinger-Hünermann, coleção " +
      "oficial dos documentos doutrinais da Igreja Católica. A Definição de Calcedônia " +
      "(Denz.-Hün. §§ 300–303), os cânones e a correspondência de Leão relacionada estão " +
      "acessíveis com tradução alemã e comentário. Referência canônica para citações teológicas.",
    url: "https://denzinger.katholikentag.de/",
  },
  {
    nome: "Coptic Orthodox Diocese — Oriental Orthodox Christology Resources",
    descricao:
      "Coleção de documentos ecumênicos e teológicos das Igrejas Ortodoxas Orientais sobre " +
      "cristologia, incluindo os textos completos das Declarações Cristológicas Comuns " +
      "(1971–1996), os Acordos de Chambésy, e material apologético sobre a perspectiva miafisita " +
      "de Calcedônia. Fundamental para compreender o ponto de vista não-calcedoniano " +
      "contemporâneo em fontes de primeira mão.",
    url: "https://www.orthodoxjointcommission.wordpress.com/",
  },
];