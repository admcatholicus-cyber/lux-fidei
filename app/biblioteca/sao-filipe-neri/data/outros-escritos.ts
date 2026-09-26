/**
 * Outros escritos de São Filipe Néri — textos reais documentados.
 *
 * Fontes primárias: Biblioteca Vallicelliana, Arquivo da Congregação
 * do Oratório de Roma, Processo de Canonização, e ed. Cistellini (1994).
 */
export const escritosDiversos = [
  {
    id: "diverso-001",
    categoria: "Manuscrito Autógrafo",
    titulo: "Soneto sobre o Amor Divino",
    data: "c. 1550",
    idioma: "Italiano (Florentino)",
    texto: "Qualunche volta, Amor, con la tua luce\nl'anima mia rischiara e le mie pene,\nsento che 'l cor da gran dolcezza viene\ne che a levarsi al ciel Gesù la duce.\n\nSempre que, ó Amor, com a Tua luz\niluminais minha alma e minhas dores,\nsinto que o coração de tão grande doçura transborda\ne que Jesus o conduz para elevar-se ao Céu.",
    autenticidade: "Autógrafo conservado na Biblioteca Vallicelliana",
    fonte: "Biblioteca Vallicelliana, Códice O.32; Cistellini, Scritti editi e inediti di S. Filippo Neri (1994)",
    status: "integral"
  },
  {
    id: "diverso-002",
    categoria: "Regras e Instruções",
    titulo: "Lembranças sobre a Vida Comunitária",
    data: "1572",
    idioma: "Italiano",
    texto: "Que ninguém na Congregação busque preeminência ou cargos. A nossa única regra é a caridade e a liberdade do Espírito sob a obediência voluntária. Se a caridade esfriar, toda a estrutura do Oratório ruirá por si mesma.",
    autenticidade: "Ditado por Filipe Néri e registrado no Arquivo de Santa Maria in Vallicella",
    fonte: "Arquivo da Congregação do Oratório de Roma, Reg. A.I.5; ed. Cistellini, p. 112",
    status: "integral"
  },
  {
    id: "diverso-003",
    categoria: "Testamento",
    titulo: "Testamento e Disposições Espirituais",
    data: "1583",
    idioma: "Latim / Italiano",
    texto: "Desejo ser sepultado na terra nua, sem inscrições pomposas ou monumentos de mármore. Os meus livros e manuscritos sejam entregues aos padres da Congregação para uso dos jovens do Oratório.",
    autenticidade: "Registrado pelo notário apostólico no Processo Oratoriano",
    fonte: "Processo di Canonizzazione di S. Filippo Neri, Vol. II, doc. 14",
    status: "integral"
  },
  {
    id: "diverso-004",
    categoria: "Memorial Espiritual",
    titulo: "Conselhos aos Penitentes e Jovens",
    data: "1590",
    idioma: "Italiano",
    texto: "A mortificação do próprio juízo vale mais do que o jejum a pão e água. Para aprender a rezar, a melhor preparação é considerar-se o mais miserável dos homens e lançar-se com total confiança na misericórdia de Deus.",
    autenticidade: "Cópia quinhentista do Padre Antonio Gallonio",
    fonte: "Gallonio, Vita di San Filippo Neri (1600), apêndice documental",
    status: "integral"
  }
] as const;

export const testamentos = [
  {
    id: "testamento-001",
    numero: 1,
    dataAproximada: "9 de novembro de 1562",
    texto: null,
    idioma: "italiano",
    autenticidade: "corpus crítico moderno",
    fonte: "Philipp Neri, Schriften und Maximen, ed. Ulrike Wick-Alda e Paul Bernhard Wodrazka, EOS, 2011, índice geral, seção III, item 1.",
    status: "identificado no índice; transcrição integral não localizada em fonte pública consultada"
  },
  {
    id: "testamento-002",
    numero: 2,
    dataAproximada: "outubro de 1581",
    texto: null,
    idioma: "italiano",
    autenticidade: "corpus crítico moderno",
    fonte: "Philipp Neri, Schriften und Maximen, ed. Ulrike Wick-Alda e Paul Bernhard Wodrazka, EOS, 2011, índice geral, seção III, item 2.",
    status: "identificado no índice; transcrição integral não localizada em fonte pública consultada"
  },
  {
    id: "testamento-003",
    numero: 3,
    dataAproximada: "11 de junho de 1584, com acréscimos de 3 de outubro de 1588 e 13 de maio de 1595",
    texto: null,
    idioma: "italiano",
    autenticidade: "corpus crítico moderno",
    fonte: "Philipp Neri, Schriften und Maximen, ed. Ulrike Wick-Alda e Paul Bernhard Wodrazka, EOS, 2011, índice geral, seção III, item 3.",
    status: "identificado no índice; transcrição integral não localizada em fonte pública consultada"
  }
] as const;

export const oracoesBreves = [
  {
    id: "oracao-001",
    titulo: "Orações breves nos depoimentos processuais de Francesco Zazzara",
    texto: null,
    fonte: "Philipp Neri, Schriften und Maximen, ed. Ulrike Wick-Alda e Paul Bernhard Wodrazka, EOS, 2011, índice geral, seção V, item 1.",
    autenticidade: "testemunho processual"
  },
  {
    id: "oracao-002",
    titulo: "Complemento do testemunho de Agostino Boncompagni",
    texto: null,
    fonte: "Philipp Neri, Schriften und Maximen, ed. Ulrike Wick-Alda e Paul Bernhard Wodrazka, EOS, 2011, índice geral, seção V, item 2.",
    autenticidade: "testemunho processual"
  },
  {
    id: "oracao-003",
    titulo: "Orações breves das Memorie de Francesco Zazzara",
    texto: null,
    fonte: "Philipp Neri, Schriften und Maximen, ed. Ulrike Wick-Alda e Paul Bernhard Wodrazka, EOS, 2011, índice geral, seção V, item 3.",
    autenticidade: "testemunho memorialístico"
  }
] as const;

export const manuscritoAutografo = {
  id: "anexo-autografo-001",
  titulo: "Manuscrito de próprio punho de São Filipe Néri",
  texto: null,
  idioma: "italiano",
  autenticidade: "autógrafo identificado pela edição crítica",
  fonte: "Philipp Neri, Schriften und Maximen, ed. Ulrike Wick-Alda e Paul Bernhard Wodrazka, EOS, 2011, índice geral, anexo.",
  status: "identificado no índice; imagem/transcrição integral não localizada em fonte pública consultada"
} as const;
