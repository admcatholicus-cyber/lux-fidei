/* ─────────────────────────────────────────────────────────────
   DOSSIÊ DOCUMENTAL: 2G. SÍNODO DE ANTIOQUIA (INÍCIO DE 325)
   Fontes críticas:
   - Hans-Georg Opitz, Urkunden zur Geschichte des Arianischen Streites (Urk. 18)
   - Eduard Schwartz, "Zur Geschichte des Athanasius" (1905)
   - Cod. Syr. Musei Britannici Add. 14.528 (fols. 152r–155v)
   - Erich Seeberg (1913) / Henry Chadwick, "The Fall of Eustathius" (1958)
───────────────────────────────────────────────────────────── */

export interface ComparacaoClausulaAntioquiaNiceia {
  id: string
  clausula: string
  antioquia325: string
  niceia325: string
  analiseDiferenca: string
}

export interface BispoSignatarioAntioquia {
  posicao: number
  nome: string
  seEpiscopal: string
  regiaoProvincia: string
}

export const sinodoAntioquiaDocumento = {
  id: 'carta-sinodal-antioquia-325',
  titulo: 'Carta Sinodal do Sínodo de Antioquia ao bispo Alexandre de Tessalônica',
  numeroOpitz: 'Urk. 18',
  manuscritoFonte: 'Codex Syriacus Musei Britannici Add. 14.528 (fols. 152r–155v)',
  dataEvento: 'Janeiro / Fevereiro de 325 d.C.',
  presidenciaReal: 'Ósio de Córdova (Hosius Cordubensis)',
  bisposPresentes: 59,
  
  contextoHistorico:
    'Reunido no início de 325 para consagrar Eustácio como novo bispo de Antioquia após o falecimento de Filogônio. Ósio de Córdova, enviado imperial de Constantino, aproveitou a magna assembleia do Oriente (Síria, Palestina, Fenícia, Arábia, Capadócia e Cilícia) para impor um rigoroso escrutínio teológico antiariano preliminar. O sínodo formulou um credo anti-subordinacionista detalhado e suspendeu condicionalmente três prelados recalcitrantes, marcando a antessala doutrinária direta do Concílio de Niceia.',

  trechosChavePortugues: [
    'Ao amado e venerável irmão e colega de ministério Alexandre, os bispos reunidos em sínodo em Antioquia: Ósio [vertido por lapso como Eusébio no siríaco], Macário de Jerusalém, Eustácio de Antioquia, Zenóbio de Selêucia, e os demais... saudações no Senhor!',
    'A fé por nós professada diante de Deus é esta: Cremos em um só Deus, Pai Todo-Poderoso, inefável, incompreensível, imutável e inalterável... E em um só Senhor Jesus Cristo, Filho Unigênito de Deus, gerado não a partir do nada (ouk ex ouk ontōn), mas do Pai; não como obra feita (ou poiēma), mas como descendência própria (idion gennēma); gerado de modo inefável e indescritível...',
    'Ele é a imagem exata, não da vontade ou do arbítrio [como sustentava Astério, o Sofista], mas da própria subsistência e hipóstase do Pai (eikōn tēs tou Patros hypostaseōs)... Cremos que Ele é imutável e inalterável por sua própria essência, e que jamais existiu tempo algum em que Ele não fosse.',
    'Portanto, àqueles que dizem que o Filho é uma criatura ou produto, ou que afirmam que «houve um tempo em que ele não era» ou «antes de ser gerado ele não era», a todos esses a Santa e Apostólica Igreja anatematiza categoricamente.',
    'Mas a respeito de Eusébio de Cesareia da Palestina, Teódoto de Laodiceia da Síria e Narciso de Nerônias da Cilícia, os quais pareciam pensar em conformidade com as teses ímpias de Ário, todos nós reunidos em sínodo pronunciamos a sua excomunhão e suspensão ministerial. Todavia, em razão da benignidade fraterna da Igreja, concedemos-lhes um prazo de carência e lugar de arrependimento até a abertura do grande e santo sínodo que se reunirá na cidade de Ancira, a fim de que, desnudando a obstinação e confessando a fé verdadeira com o restante do episcopado, possam ser reintegrados.'
  ],

  // 1. O que sobrevive da lista dos 59 signatários (BM Add. 14.528)
  resumoSignatariosSiriacos: {
    totalOriginal: 59,
    nomesLegiveisPreservados: 48,
    provinciasRepresentadas: ['Síria Coele', 'Fenícia Prima e Secunda', 'Palestina I e II', 'Arábia Pétrea', 'Cilícia', 'Capadócia'],
    liderancasPrincipais: [
      'Ósio de Córdova (Presidente / Legado)',
      'Eustácio de Antioquia (Eleito na ocasião)',
      'Macário de Jerusalém (Palestina I)',
      'Zenóbio de Selêucia Pieria',
      'Anatólio de Emesa',
      'Filo de Tiro',
      'Longo de Ascalon',
      'Moisés de Batna',
      'Salamanes de Caparceia'
    ]
  },

  // 2. Suspensão dos 3 bispos e prazo processual até Ancira
  suspensaoProcessualTresBispos: {
    titulo: 'A Sentença Canônica de Suspensão e o Prazo até Ancira',
    bisposCondenados: [
      { nome: 'Eusébio de Cesareia', se: 'Cesareia Marítima (Metropolitana da Palestina)' },
      { nome: 'Teódoto de Laodiceia', se: 'Laodiceia da Síria' },
      { nome: 'Narciso de Nerônias', se: 'Nerônias / Irenópolis (Cilícia Secunda)' }
    ],
    mecanismoJudicial:
      'Suspensão "ad cautelam" / excomunhão provisória com concessão de moratória canônica. Não foram imediatamente depostos e substituídos em suas cátedras; receberam o direito de apelação e defesa no concílio imperial geral convocado para Ancira. Quando o imperador Constantino transferiu o concílio para Niceia semanas depois, Eusébio de Cesareia ingressou na assembleia nicena sob esta interdição pendente, explicando sua urgência política em redigir e ler o Credo de Cesareia (Urk. 22) para reabilitar sua ortodoxia.'
  }
}

/* ─────────────────────────────────────────────────────────────
   COMPARAÇÃO CLÁUSULA A CLÁUSULA: ANTIOQUIA 325 × NICEIA 325
───────────────────────────────────────────────────────────── */
export const comparacaoAntioquiaNiceia325: ComparacaoClausulaAntioquiaNiceia[] = [
  {
    id: 'comp-pai',
    clausula: 'Deus Pai / Criação',
    antioquia325: 'Um só Deus, Pai Todo-Poderoso, inefável, incompreensível, imutável e inalterável.',
    niceia325: 'Um só Deus Pai Todo-Poderoso, criador de todas as coisas visíveis e invisíveis.',
    analiseDiferenca: 'Antioquia emprega atributos apofáticos e ontológicos (imutabilidade); Niceia adota a fórmula funcional e bíblica de criação.'
  },
  {
    id: 'comp-geracao-origem',
    clausula: 'Geração e Origem do Filho',
    antioquia325: 'Filho Unigênito, gerado não do nada (ouk ex ouk ontōn), mas do Pai; não como feito (ou poiēma), mas progênie própria (idion gennēma).',
    niceia325: 'Filho de Deus, gerado do Pai como Unigênito, isto é, da substância do Pai (ek tēs ousias tou Patros); gerado, não feito (gennēthenta, ou poiēthenta).',
    analiseDiferenca: 'Antioquia já possui a antítese "gerado / não feito" e a exclusão do "ex ouk ontōn", mas Niceia introduz a cláusula ontológica estrita "ek tēs ousias".'
  },
  {
    id: 'comp-imagem-homoousios',
    clausula: 'Relação Ontológica com o Pai',
    antioquia325: 'Imagem, não da vontade, mas da própria subsistência/hipóstase do Pai (eikōn tēs tou Patros hypostaseōs).',
    niceia325: 'Consubstancial ao Pai (homoousion tō Patri).',
    analiseDiferenca: 'PONTO FUNDAMENTAL: Antioquia refuta a tese ariana de Astério ("imagem da vontade") afirmando "imagem da hipóstase". Contudo, Antioquia NÃO POSSUI o termo ὁμοούσιος (homoousios). O homoousios foi o grande acréscimo de Niceia sob chancela imperial.'
  },
  {
    id: 'comp-mutabilidade',
    clausula: 'Imutabilidade do Filho',
    antioquia325: 'Imutável e inalterável por sua própria natureza (atrepton kai analloiōton).',
    niceia325: 'Anátema formal a quem disser que o Filho é "mutável ou sujeito a alterações" (trepton ē alloiōton).',
    analiseDiferenca: 'Ambos fixam a imutabilidade ontológica do Logos: Antioquia na confissão positiva; Niceia mediante o pacote de anátemas excomungatórios.'
  },
  {
    id: 'comp-anatemas-tempo',
    clausula: 'Anátemas de Tempo e Pré-existência',
    antioquia325: 'Anátema a quem disser: «Houve quando não era» (ēn pote hote ouk ēn) e «Antes de ser gerado não era».',
    niceia325: 'Anátema literal idêntico: «Ἦν ποτε ὅτε οὐκ ἦν» e «Πρὶν γεννηθῆναι οὐκ ἦν».',
    analiseDiferenca: 'Identidade literal absoluta. A fórmula dos anátemas de Niceia foi decalcada diretamente dos cânones de Antioquia formulados por Ósio meses antes.'
  }
]

/* ─────────────────────────────────────────────────────────────
   DEBATES HISTORIOGRÁFICOS E EMENDAS FILOLÓGICAS (MANTIDOS)
───────────────────────────────────────────────────────────── */
export const debateAutenticidadeAntioquia = {
  id: 'debate-autenticidade-urk18',
  titulo: 'O Debate Historiográfico sobre a Autenticidade da Urk. 18',
  historico: [
    {
      fase: '1905 — A Descoberta de Eduard Schwartz',
      detalhes:
        'Ao editar os manuscritos siríacos da Biblioteca Britânica, Schwartz publicou as atas do sínodo. A descoberta alterou os rumos dos estudos patrísticos do século XX ao demonstrar que Niceia não foi um evento isolado, mas a etapa conclusiva de uma estratégia sinodal conduzida por Ósio de Córdova.'
    },
    {
      fase: '1908–1909 — A Objeção Crítica de Adolf von Harnack',
      detalhes:
        'Harnack contestou a genuinidade do texto, classificando-o como falsificação apócrifa forjada no século V por eustatianos para desacreditar a figura histórica de Eusébio de Cesareia.'
    },
    {
      fase: '1913–1958 — A reabilitação por Seeberg e Chadwick',
      detalhes:
        'Erich Seeberg (1913) e Henry Chadwick (1958) comprovaram a autenticidade integral da carta sinodal: a terminologia ("imagem da hipóstase" em vez de "homoousios") e a convocação para "Ancira" são provas irrefutáveis de uma redação anterior a maio de 325.'
    }
  ]
}

export const emendaCabecalhoAntioquia = {
  id: 'emenda-cabecalho-eusebio-osio',
  titulo: 'A Corrupção Paleográfica do Cabeçalho: "Eusébio" vs. "Ósio"',
  explicacao:
    'No fólio 152r do manuscrito siríaco, o primeiro nome da lista episcopal foi copiado como "Eusébio" (Evsebios). Schwartz e Seeberg demonstraram que se trata de uma confusão paleográfica do copista siríaco ao traduzir o grego original Ὡσιος (Hosius) por Εὐσέβιος (Eusebios). Quem presidiu a assembleia foi o bispo Ósio de Córdova, já que Eusébio de Cesareia foi um dos bispos sentenciados com a excomunhão.'
}