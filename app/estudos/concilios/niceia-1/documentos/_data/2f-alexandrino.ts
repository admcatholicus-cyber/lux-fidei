/* ─────────────────────────────────────────────────────────────
   DOSSIÊ DOCUMENTAL: 2F. DOSSIÊ ALEXANDRINO
   Fontes críticas:
   - Hans-Georg Opitz, Urkunden zur Geschichte des Arianischen Streites (Urk. 4a, 4b, 14, 15, 16)
   - Sócrates Escolástico, Historia Ecclesiastica I.6
   - Teodoreto de Ciro, Historia Ecclesiastica I.4
   - Hilário de Poitiers, Fragmenta Historica (Series A, VIII)
   - Marcel Richard, "Édition critique d'un fragment d'Alexandre d'Alexandrie" (1963)
   - Eduard Schwartz, Gesammelte Schriften (BM Add. 12.156)
───────────────────────────────────────────────────────────── */

export interface DocumentoAlexandrino {
  id: string
  titulo: string
  numeroOpitz: string
  autorOficial: string
  destinatarios: string
  fonteAntiga: string
  termoChaveGrego: string
  contextoHistorico: string
  textoIntegralOuTrecho: string
}

export const dossieAlexandrinoData: DocumentoAlexandrino[] = [
  {
    id: 'deposicao-ario-alexandria',
    titulo: 'Decreto de Deposição de Ário pelo Sínodo de Alexandria',
    numeroOpitz: 'Urk. 4a',
    autorOficial: 'Alexandre (Bispo de Alexandria) e o Sínodo do Egito',
    destinatarios: 'Ao clero de Alexandria e Mareotis',
    fonteAntiga: 'Atanásio de Alexandria, Depositio Arii (PG 26, 696–700); Opitz Urk. 4a',
    termoChaveGrego: 'Καθαίρεσις Ἀρείου (Kathairesis Areiou: Deposição de Ário)',
    contextoHistorico:
      'Promulgado c. 318–320 após um sínodo de mais de cem bispos do Egito e da Líbia convocado por Alexandre. Marca a excomunhão formal de Ário de seu cargo de presbítero na igreja de Baucalis e anexa a lista dos clérigos locais que assinaram a deposição.',
    textoIntegralOuTrecho:
      '"Alexandre aos presbíteros e diáconos de Alexandria e de Mareotis, presentes no Senhor, saudações.\n\nEmbora vós já tenhais assinado a carta que enviei aos seguidores de Ário, exortando-os a renunciar à sua impiedade e a obedecer à sã fé, julguei necessário convocar o sínodo de todos os bispos de nossa região... Uma vez que Ário e seus companheiros persistem em suas blasfêmias, afirmando abertamente que o Filho é uma criatura tirada do nada e que houve um tempo em que Ele não existia, nós, reunidos em sínodo com o Espírito Santo, os excomungamos e declaramos estranhos à Igreja Católica e Apostólica.\n\n[CLÉRIGOS DEPOSTOS DE ALEXANDRIA / MAREOTIS]:\nFicam destituídos de suas funções eclesiásticas os seguintes ministros rebeldes que se associaram à impiedade ariana:\n- Cares (Presbítero)\n- Pisto (Presbítero)\n- Serapião (Diácono)\n- Parâmon (Diácono)\n- Zósimo (Diácono)\n- Irineu (Diácono)"'
  },
  {
    id: 'enciclica-henos-somatos',
    titulo: 'Encíclica Henos sōmatos ("De um só corpo")',
    numeroOpitz: 'Urk. 4b',
    autorOficial: 'Alexandre de Alexandria',
    destinatarios: 'A todos os bispos da Igreja Católica universal',
    fonteAntiga: 'Sócrates Escolástico, Historia Ecclesiastica I.6; Gelásio de Cízico, Syntagma II.3',
    termoChaveGrego: 'Ἑνὸς σώματος της Καθολικῆς Ἐκκλησίας (Henos sōmatos tēs Katholikēs Ekklēsias)',
    contextoHistorico:
      'Escrita c. 319–321. É a primeira carta circular enviada por Alexandre a toda a cristandade para impedir que Ário, ao fugir do Egito, encontrasse comunhão e apoio entre os bispos da Síria e da Ásia Menor. Contém a lista oficial de todos os líderes cismáticos heréticos depostos no Egito.',
    textoIntegralOuTrecho:
      '"Como o corpo da Igreja Católica é um só (Henos sōmatos), e as Escrituras nos ordenam a guardar o vínculo da paz e da concórdia, é justo que vos escrevamos para dar a conhecer o que se passa entre nós...\n\nHomens ímpios surgiram entre nós ensinando uma apostasia antecessora do Anticristo. Por essa razão, nós os anatematizamos publicamente junto com seus cúmplices.\n\n[LISTA OFICIAL DOS DEPOSTOS EM URK. 4B]:\n- Ário (Heresiarca, presbítero de Baucalis)\n- Os Presbíteros: Aquilas, Aitales, Carpones, Ário [II] e Sármates.\n- Os Diáconos: Euzoio (futuro bispo ariano de Antioquia), Lúcio, Juliano, Menas, Heládio e Gaio.\n- Os Bispos da Pentápole Líbia: Secundo de Ptolemaida e Teona de Marmárica (únicos bispos que se recusaram a assinar o credo em Niceia até o fim)."'
  },
  {
    id: 'enciclica-he-philarchos',
    titulo: 'Encíclica Hē philarchos ("A ambição do poder")',
    numeroOpitz: 'Urk. 14',
    autorOficial: 'Alexandre de Alexandria',
    destinatarios: 'A Alexandre (Bispo de Tessalônica/Constantinopla) e a todos os bispos fora do Egito',
    fonteAntiga: 'Teodoreto de Ciro, Historia Ecclesiastica I.4',
    termoChaveGrego: 'Ἡ φίλαρχος καὶ φιλάργυρος πρόθεσις (Hē philarchos kai philargyros prothesis)',
    contextoHistorico:
      'Escrita c. 322–324. É o documento teológico mais longo e denso do período pré-niceno. Trata-se de um tratado completo de refutação das teses arianas e de exposição da teologia alexandrina tradicional.',
    textoIntegralOuTrecho:
      '"A ambição de poder e o amor ao dinheiro (Hē philarchos kai philargyros prothesis) de homens perversos não cessam de inventar ciladas contra a Igreja... Ário e Achillas, unindo-se em conspiração, demonstraram uma impiedade pior do que a de todos os heréticos anteriores.\n\nEles ensinam que o Filho é mutável por natureza, assim como as demais criaturas, e que a sua filiação divina é apenas adotiva e moral, obtida por presciência de seus méritos... Mas nós confessamos a fé apostólica: cremos em um só Deus Pai ingênito... e em um só Senhor Jesus Cristo, o Filho Unigênito de Deus, gerado não do nada, mas do Pai que O gerou, não de modo corporal por divisão ou emanação, mas de modo inefável e indescritível...\n\nComo pode o Filho ser feito do nada se o Pai fez todas as coisas por meio d\'Ele? Como pode ser criatura Aquele que é a própria Imagem viva e perfeita do Pai, o resplendor de sua glória? O Pai é maior apenas porque é Ingênito, mas o Filho possui a perfeita semelhança e a eternidade da geração."'
  },
  /* ─────────────────────────────────────────────────────────────
     NOVAS ADIÇÕES (ITEM 91)
  ───────────────────────────────────────────────────────────── */
  {
    id: 'enciclica-dos-duzentos-egipcios',
    titulo: 'Encíclica dos Duzentos Bispos do Egito e da Líbia',
    numeroOpitz: 'Urk. 15',
    autorOficial: 'Alexandre de Alexandria e o Episcopado Egípcio',
    destinatarios: 'Aos Bispos da Igreja Católica Universal',
    fonteAntiga: 'Manuscrito siríaco do Museu Britânico (British Library Add. 12.156); Retroversão grega de Eduard Schwartz',
    termoChaveGrego: 'Θεοτόκος (Theotókos: Mãe de Deus)',
    contextoHistorico:
      'Escrita c. 324. Conservada em um manuscrito siríaco primitivo do século V e reconstruída criticamente em grego por Eduard Schwartz. Trata-se da confirmação sinodal de Alexandria por cerca de duzentos bispos da bacia do Nilo e da Líbia. É um dos documentos eclesiais mais importantes da história dogmática por registrar o termo "Theotókos" aplicado à Virgem Maria mais de um século antes do Concílio de Éfeso (431).',
    textoIntegralOuTrecho:
      '"Nós professamos e cremos que o Logos de Deus não foi feito, mas gerado da própria substância íntima do Pai de modo indizível. Cremos que por nossa salvação Ele desceu dos céus e verdadeiramente assumiu um corpo real — não em aparência ou ilusão — nascido de Maria, a Mãe de Deus (Theotókos). O Filho sofreu em sua carne terrena, ressuscitou e triunfou sobre a morte, e condena todos os que afirmam que Ele é estranho à essência eterna do Criador."'
  },
  {
    id: 'fragmento-ocrida-hilario-versao',
    titulo: 'Fragmento de Ocrida e Notícia de Hilário de Poitiers',
    numeroOpitz: 'Urk. 16',
    autorOficial: 'Alexandre de Alexandria',
    destinatarios: 'Aos Bispos Católicos do Oriente e do Ocidente',
    fonteAntiga: 'Hilário, Fragmenta Historica (Series A, VIII); Fragmento grego original do Codex Ohrid 80 (ed. Marcel Richard, 1963)',
    termoChaveGrego: 'ὁμοουσία τῆς τριάδος (homoousia tēs triados)',
    contextoHistorico:
      'Escrita c. 324. Conhecida no Ocidente através de resumos latinos feitos por Hilário de Poitiers, seu texto grego original foi considerado perdido até 1963, quando o patrólogo francês Marcel Richard descobriu um fragmento manuscrito grego no Codex Ohrid 80 (Macedônia do Norte). O achado provou que Alexandria já debatia e formulava a "consubstancialidade" (homoousia) e a coeternidade absoluta da Trindade imediatamente antes do Concílio de Niceia.',
    textoIntegralOuTrecho:
      '"Nós defendemos e pregamos a perfeita unidade indivisível da Trindade e a consubstancialidade das hipóstases (homoousia tēs triados). A geração do Filho de Deus não ocorreu por meio de um ato criador externo, mas sim por emanação imaculada do Pai. Quem quer que diga que o Filho de Deus provém de outra essência (heteras ousias) ou que foi fabricado ex nihilo é réu de heresia e estranho à comunhão apostólica."'
  }
];

export const debateAutoriaAlexandrina = {
  titulo: 'Debate Crítico: Autoria das Encíclicas de Alexandre',
  contexto: 'A questão da autoria material das grandes encíclicas atribuídas ao Patriarca Alexandre (Urk. 4b Henos sōmatos e Urk. 14 Hē philarchos) — em especial se foram redigidas pelo próprio Alexandre ou por seu jovem secretário Atanásio — é uma das controvérsias filológicas mais debatidas na historiografia moderna do arianismo. A ordem cronológica relativa entre as duas também é objeto de debate: Opitz/Heil colocam a 4b antes da 14; Rowan Williams inverte; Sara Parvis argumenta que circularam simultaneamente.',
  teses: [
    {
      estudioso: 'G. C. Stead (1988)',
      argumento: 'Em "Athanasius\' Earliest Written Work" (Journal of Theological Studies, n.s. 39, pp. 76–91), Stead argumenta que a Henos sōmatos (Urk. 4b) apresenta marcas estilísticas e vocabulário teológico característicos do jovem Atanásio, sugerindo autoria material do futuro patriarca ainda como diácono e secretário.'
    },
    {
      estudioso: 'Rowan Williams (Arius, 1987/2001, pp. 48–59)',
      argumento: 'Williams concorda com a hipótese de participação atanasiana na redação, mas propõe inversão cronológica: a Hē philarchos (Urk. 14) seria anterior à Henos sōmatos (Urk. 4b), invertendo a ordem estabelecida por Opitz.'
    },
    {
      estudioso: 'Sara Parvis (Marcellus of Ancyra, 2006, pp. 68–81)',
      argumento: 'Parvis defende que ambas as encíclicas circularam simultaneamente como um pacote coordenado de propaganda antiariana, com destinatários diferentes: 4b para o episcopado universal, 14 para os aliados na Grécia continental.'
    }
  ]
};