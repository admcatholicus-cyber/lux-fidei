/**
 * Metadata geral da edição digital dos escritos de São Filipe Néri.
 * Usada na capa da obra e no cabeçalho de cada seção.
 */

export const obraMetadata = {
  santo: {
    nome: "São Filipe Néri",
    nomeItaliano: "San Filippo Neri",
    vida: "1515 – 1595",
    titulo: "Apóstolo de Roma · Fundador do Oratório",
  },
  obra: {
    tituloCurto: "Escritos e Máximas Espirituais",
    tituloLongo: "Cartas, Máximas Espirituais e Sonetos",
    epigrafe:
      "Ele preferia remeter os discípulos a autores espirituais já reconhecidos, e pouco antes da morte mandou queimar os escritos que ainda estavam em seu quarto.",
    epigrafeFonte: "Ulrike Wick-Alda & Paul Bernhard Wodrazka, apresentação da edição EOS, 2011",
  },
  notaGeral:
    "São Filipe Néri não publicou obras em vida. O que sobreviveu é um conjunto fragmentário de cartas, máximas recolhidas por discípulos, documentos institucionais e poucos versos — testemunho de uma santidade que preferia a caridade concreta ao rastro literário.",
  secoes: [
    {
      id: "cartas",
      icone: "📜",
      titulo: "Cartas",
      descricao:
        "Correspondência de direção espiritual. A leitura online reúne as cartas com texto público; as demais constam apenas no catálogo da edição crítica moderna.",
      contagem: "27 legíveis · 34 no catálogo crítico",
      href: "/biblioteca/sao-filipe-neri/cartas",
    },
    {
      id: "maximas",
      icone: "✦",
      titulo: "Máximas Espirituais",
      descricao:
        "366 máximas transmitidas pela tradição oratoriana, distribuídas ao longo do ano segundo a compilação devocional preservada pelo Oratório.",
      contagem: "366 máximas · calendário anual",
      href: "/biblioteca/sao-filipe-neri/maximas",
    },
    {
      id: "sonetos",
      icone: "🎵",
      titulo: "Sonetos",
      descricao:
        "Poesia espiritual atribuída ao santo. Um soneto autêntico segundo a análise filológica de Benedetto Croce (1942).",
      contagem: "1 soneto autêntico",
      href: "/biblioteca/sao-filipe-neri/sonetos",
    },
    {
      id: "outros-escritos",
      icone: "📋",
      titulo: "Outros Escritos e Documentos",
      descricao:
        "Testamentos, memoriais aos papas Clemente VIII e outros, regras domésticas, orações breves e manuscrito autógrafo, catalogados na edição crítica moderna.",
      contagem: "Catálogo bibliográfico",
      href: "/biblioteca/sao-filipe-neri/outros-escritos",
    },
  ],
  notaEditorial: {
    titulo: "Sobre esta edição digital",
    paragrafos: [
      "Os textos apresentados aqui foram criticamente estabelecidos a partir das edições italianas em domínio público — especialmente Alfonso Capecelatro, La vita di S. Filippo Neri (1889) — e da tradição devocional oratoriana. A tradução para o português é obra deste projeto, feita com atenção ao registro espiritual do século XVI e sem qualquer uso de tradução automática.",
      "Os textos protegidos pela edição crítica moderna de Ulrike Wick-Alda e Paul Bernhard Wodrazka (EOS Verlag, 2011) constam apenas por sua ficha bibliográfica. Para consulta integral desses documentos, remetemos o leitor à edição impressa.",
      "Cada texto exibido informa sua fonte, seu estado textual e as decisões editoriais que o produziram. Nenhum trecho foi reconstruído por conjectura; lacunas do impresso são preservadas como [...].",
    ],
  },
  bibliografia: [
    "Alfonso Capecelatro, La vita di S. Filippo Neri, 2 vols., Roma, 1889.",
    "Antonio Maria Biscioni, Raccolta di lettere di santi e beati Fiorentini, Florença, 1737.",
    "Frederick Ignatius Antrobus (ed.), The Life of Saint Philip Neri, Londres, 1902.",
    "Simone Raponi (org.), Il cuore di San Filippo Neri — Tutti i giorni dell'anno, PDF do Oratório.",
    "Detti, ricordi e documenti morali e spirituali di S. Filippo Neri, Bologna, 1848.",
    "Benedetto Croce, «Di San Filippo Neri e di tre sonetti a lui attribuiti», La Critica 40 (1942), pp. 115–156.",
    "Ulrike Wick-Alda & Paul Bernhard Wodrazka (ed.), Philipp Neri, Schriften und Maximen, EOS Verlag, St. Ottilien, 2011.",
  ],
} as const;