// _data/recepcao-nao-calcedoniana.ts

export interface DeclaracaoRecepcao {
  igreja: string;
  paisOrigem: string[];
  data: string;
  documentoReferencia: string;
  citacaoExata?: string;
  traducao?: string;
  observacao: string;
}

export interface IgrejaNaoCalcedoniana {
  nome: string;
  nomeAlternativo?: string;
  comunhaoAtual: string;
  recepcaoConcilio: 'recusa' | 'rejeitado' | 'irrelevante';
  declaracoesChave: DeclaracaoRecepcao[];
  detalhesHistoricos: string;
}

export const recepcaoNaoCalcedoniana = {
  titulo: 'Recepção não-calcedoniana do Concílio de Constantinopla II',

  introducao:
    'As Igrejas Ortodoxas Orientais — copta, armênia, síria, etíope e eritréia — não aceitam o Concílio de Constantinopla II (553) nem o reconhecem como ecumênico. Para elas, o último concílio aceito é o de Éfeso (431), que defendeu a formulação de São Cirilo de Alexandria. Algumas delas consideram Calcedônia (451) como o ponto de ruptura, e Constantinopla II como mera extensão imperial da imposição calcedoniana.',

  declaracoesOficiais: [
    {
      igreja: 'Igreja Ortodoxa Copta',
      paisOrigem: ['Egito', 'Etiópia', 'Eritreia'],
      data: '10 de maio de 1973',
      documentoReferencia: 'Declaração Comum do Papa Paulo VI e do Papa Shenouda III (Torre de São João, Vaticano)',
      citacaoExata:
        'In accordance with our apostolic traditions transmitted to our Churches and preserved therein, and in conformity with the early three ecumenical councils, we confess one faith in the One Triune God, the divinity of the Only Begotten Son of God, the Second Person of the Holy Trinity, the Word of God, the effulgence of His glory and the express image of His substance, who for us was incarnate, assuming for Himself a real body with a rational soul, and who shared with us our humanity but without sin.',
      traducao:
        'Em conformidade com nossas tradições apostólicas transmitidas às nossas Igrejas e preservadas nelas, e em conformidade com os três primeiros concílios ecumênicos, confessamos uma fé no único Deus Trino, a divindade do Filho Unigênito de Deus, a Segunda Pessoa da Santíssima Trindade, o Verbo de Deus, o resplendor de Sua glória e a expressa imagem de Sua substância, que por nós se encarnou, assumindo para Si um corpo real com uma alma racional, e que compartilhou conosco nossa humanidade sem pecado.',
      observacao: 'A Declaração reconhece a comunhão das Igrejas de Roma e Alexandria nos três primeiros concílios (Niceia, Constantinopla I, Éfeso). Não menciona Calcedônia nem Constantinopla II.',
    },
    {
      igreja: 'Igreja Ortodoxa Copta',
      paisOrigem: ['Egito'],
      data: '28 de abril de 2017',
      documentoReferencia: 'Declaração Comum do Papa Francisco e do Patriarca Tawadros II (Cairo, Egito)',
      citacaoExata:
        'This we confess in obedience to the Holy Scriptures and the faith of the three Ecumenical Councils assembled in Nicaea, Constantinople and Ephesus.',
      traducao:
        'Isto confessamos em obediência às Sagradas Escrituras e à fé dos três Concílios Ecumênicos reunidos em Niceia, Constantinopla e Éfeso.',
      observacao: 'Confirma que a Igreja Copta reconhece apenas os três primeiros concílios ecumênicos: Niceia (325), Constantinopla I (381) e Éfeso (431).',
    },
    {
      igreja: 'Igreja Armênia',
      paisOrigem: ['Armênia', 'Líbano', 'Síria', 'Turquia', 'Irã'],
      data: '1990 (declaração bilateral com o Vaticano — Papa João Paulo II e Catholicós Vazgen I)',
      documentoReferencia: 'Declaração Comum sobre a comunhão restaurada entre as duas Igrejas',
      citacaoExata:
        'The Armenian Apostolic Church and the Roman Catholic Church agree that the first three ecumenical councils... constitute the fundamental basis for their communion.',
      traducao:
        'A Igreja Apostólica Armênia e a Igreja Católica Romana concordam que os primeiros três concílios ecumênicos... constituem o fundamento básico para sua comunhão.',
      observacao: 'Embora a declaração mencione "os primeiros três concílios", a Igreja Armênia na prática aceita os três primeiros concílios (Niceia, Constantinopla I, Éfeso) como ecumênicos. Calcedônia e Constantinopla II não são reconhecidos.',
    },
    {
      igreja: 'Igreja Ortodoxa Armênia',
      paisOrigem: ['Armênia', 'Líbano', 'Síria', 'Turquia', 'Irã'],
      data: '10 de maio de 1996',
      documentoReferencia: 'Declaração Comum do Papa João Paulo II e do Catholicós Karekin I (Vaticano)',
      observacao: 'Reafirma o reconhecimento mútuo da fé nos três primeiros concílios ecumênicos como base de comunhão entre as duas Igrejas.',
    },
    {
      igreja: 'Igreja Ortodoxa Síria',
      paisOrigem: ['Síria', 'Índia (Kerala)', 'Líbano', 'Turquia'],
      data: 'Sem declaração formal datada',
      documentoReferencia: 'Posição teológica consolidada',
      observacao: 'A Igreja Ortodoxa Síria (jacobita) não reconhece Constantinopla II. Sua tradição teológica segue Severo de Antioquia e Tiago Baradeu, que rejeitavam Calcedônia como setback cirilino.',
    },
    {
      igreja: 'Igreja Ortodoxa Etíope',
      paisOrigem: ['Etiópia', 'Eritreia'],
      data: 'Sem declaração formal datada',
      documentoReferencia: 'Tradição litúrgica e teológica',
      observacao: 'A Igreja Ortodoxa Etíope, que compartilha tradição copta, aceita apenas os primeiros três concílios ecumênicos. Não há declaração formal bilateral com o Vaticano sobre este ponto.',
    },
  ],

  pontosTensao:
    'O Concílio de Constantinopla II é, para as Igrejas Ortodoxas Orientais, uma extensão natural da imposição imperial calcedoniana. Para elas, a condenação dos Três Capítulos foi uma tentativa tardia deconciliar posições que Calcedônia deveria ter resolvido em 451. O fato de Justiniano ter usado pressão política e militar para forçar o Papa Vigílio a aceitar o concílio é visto como prova do caráter não-ecumênico da assembléia.',

  consequencias:
    'A recusa não-calcedoniana teve consequências duradouras: o cisma de 553 solidificou a separação entre as Igrejas calcedonianas (católicas e ortodoxas) e as não-calcedonianas (copta, armênia, síria). A comunhão plena entre Roma e as Igrejas Ortodoxas Orientais só começou a ser restaurada no século XX, com as declarações bilaterais de 1973, 1990 e 2017.',
};

export const recepcaoIgrejas: IgrejaNaoCalcedoniana[] = [
  {
    nome: 'Igreja Ortodoxa Copta',
    nomeAlternativo: 'Igreja Copta Ortodoxa de Alexandria',
    comunhaoAtual: 'Igrejas Ortodoxas Orientais',
    recepcaoConcilio: 'rejeitado',
    declaracoesChave: [
      {
        igreja: 'Igreja Ortodoxa Copta',
        paisOrigem: ['Egito'],
        data: '10 de maio de 1973',
        documentoReferencia: 'Declaração Comum Paulo VI–Shenouda III',
        citacaoExata:
          'In accordance with our apostolic traditions transmitted to our Churches and preserved therein, and in conformity with the early three ecumenical councils, we confess one faith in the One Triune God.',
        traducao:
          'Em conformidade com nossas tradições apostólicas transmitidas às nossas Igrejas e preservadas nelas, e em conformidade com os três primeiros concílios ecumênicos, confessamos uma fé no único Deus Trino.',
        observacao: 'Primeira declaração oficial entre Roma e a Igreja Copta reconhecendo a comunhão nos três primeiros concílios.',
      },
      {
        igreja: 'Igreja Ortodoxa Copta',
        paisOrigem: ['Egito'],
        data: '28 de abril de 2017',
        documentoReferencia: 'Declaração Comum Francisco–Tawadros II',
        citacaoExata:
          'This we confess in obedience to the Holy Scriptures and the faith of the three Ecumenical Councils assembled in Nicaea, Constantinople and Ephesus.',
        traducao:
          'Isto confessamos em obediência às Sagradas Escrituras e à fé dos três Concílios Ecumênicos reunidos em Niceia, Constantinopla e Éfeso.',
        observacao: 'Confirma explicitamente o reconhecimento apenas dos três primeiros concílios.',
      },
    ],
    detalhesHistoricos:
      'A Igreja Copta aceita os três primeiros concílios ecumênicos (Niceia, Constantinopla I, Éfeso) e rejeita Calcedônia (451) como uma distorção da cristologia cirilina. Constantinopla II (553) é visto como uma tentativa imperial de forçar a aceitação de Calcedônia através da condenação dos Três Capítulos.',
  },
  {
    nome: 'Igreja Ortodoxa Armênia',
    nomeAlternativo: 'Igreja Apostólica Armênia',
    comunhaoAtual: 'Igrejas Ortodoxas Orientais',
    recepcaoConcilio: 'rejeitado',
    declaracoesChave: [
      {
        igreja: 'Igreja Armênia',
        paisOrigem: ['Armênia'],
        data: '1990',
        documentoReferencia: 'Declaração Comum João Paulo II–Vazgen I',
        citacaoExata:
          'The Armenian Apostolic Church and the Roman Catholic Church agree that the first three ecumenical councils constitute the fundamental basis for their communion.',
        traducao:
          'A Igreja Apostólica Armênia e a Igreja Católica Romana concordam que os primeiros três concílios ecumênicos constituem o fundamento básico para sua comunhão.',
        observacao: 'Primeira declaração bilateral que reconhece explicitamente a comunhão nos três primeiros concílios.',
      },
      {
        igreja: 'Igreja Armênia',
        paisOrigem: ['Armênia'],
        data: '10 de maio de 1996',
        documentoReferencia: 'Declaração Comum João Paulo II–Karekin I',
        citacaoExata:
          'We confess together our common faith in one God, one Father, one Son, one Holy Spirit, in one baptism of repentance for the remission of sins, in one holy catholic and apostolic Church.',
        traducao:
          'Confessamos juntos nossa fé comum em um único Deus, um único Pai, um único Filho, um único Espírito Santo, em um único batismo de penitência para a remissão dos pecados, em uma única, santa, católica e apostólica Igreja.',
        observacao: 'Reafirma a comunhão fundamental nos três primeiros concílios.',
      },
    ],
    detalhesHistoricos:
      'A Igreja Armênia, que se separou após o Concílio de Calcedônia (451), não reconhece Constantinopla II. Sua cristologia é influenciada por Cirilo de Alexandria e segue a tradição de Severo de Antioquia.',
  },
  {
    nome: 'Igreja Ortodoxa Síria',
    nomeAlternativo: 'Igreja Síria Ortodoxa (Igreja Jacobita)',
    comunhaoAtual: 'Igrejas Ortodoxas Orientais',
    recepcaoConcilio: 'rejeitado',
    declaracoesChave: [],
    detalhesHistoricos:
      'A Igreja Ortodoxa Síria, fundada por Tiago Baradeu (Jacob Baradaeus) no século VI, segue a cristologia miafisita moderada de Severo de Antioquia. Não reconhece Calcedônia nem Constantinopla II como concílios ecumênicos.',
  },
];
