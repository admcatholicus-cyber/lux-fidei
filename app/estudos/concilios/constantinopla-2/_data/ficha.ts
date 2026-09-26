export const fichaConcilio = {
  nome: 'Concílio de Constantinopla II',
  nomeGrego: 'Πέμπτη Οἰκουμενικὴ Σύνοδος',
  nomeLatim: 'Concilium Constantinopolitanum Secundum',

  data: {
    inicio: '5 de maio de 553',
    fim: '2 de junho de 553',
    duracao: '29 dias (8 sessões)',
  },

  local: {
    edificio: 'Catedral de Santa Sofia e Palácio Imperial',
    cidade: 'Constantinopla (atual Istambul, Turquia)',
    imperio: 'Império Bizantino (Romano do Oriente)',
  },

  convocador: {
    nome: 'Justiniano I',
    titulo: 'Imperador dos Romanos (Basileus)',
    reinado: '527–565 d.C.',
  },

  participantes: {
    total: '~152 bispos',
    origem: 'Esmagadora maioria oriental; apenas 6 africanos',
    observacao:
      'O Papa Vigílio, embora presente em Constantinopla, recusou-se a comparecer às sessões. A representação ocidental foi mínima, o que tornou este concílio o mais controverso da Antiguidade em termos de legitimidade papal.',
  },

  tipo: 'Ecumênico (V)',

  presidentes: [
    {
      periodo: 'Todas as sessões',
      nome: 'Eutíquio de Constantinopla',
      obs: 'Patriarca Ecumênico; presidiu todas as 8 sessões por designação imperial. Sucessor de Menas, que falecera em 552.',
    },
    {
      periodo: 'Co-presidente',
      nome: 'Apolinário de Alexandria',
      obs: 'Patriarca calcedoniano de Alexandria; representava a segunda sé em honra do Oriente.',
    },
    {
      periodo: 'Co-presidente',
      nome: 'Domnino de Antioquia',
      obs: 'Patriarca de Antioquia; representava a terceira sé oriental.',
    },
  ],

  resultadosPrincipais: [
    'Condenação dogmática dos Três Capítulos (escritos de Teodoro de Mopsuéstia, Teodoreto de Ciro e Ibas de Edessa)',
    'Reafirmação dos Concílios de Niceia (325), Constantinopla I (381), Éfeso (431) e Calcedônia (451)',
    'Imposição da hermenêutica cirilina de Calcedônia: "uma natureza encarnada do Verbo"',
    'Adoção do theopaschismo ortodoxo: "um da Trindade sofreu na carne"',
    '14 Anátemas dogmáticos contra o nestorianismo residual e as duas naturezas divisivas',
    'Condenação (paralela) de 15 proposições origenistas (preexistência das almas, apocatástase)',
    'Primeira condenação póstuma da história dos concílios ecumênicos',
    'Consolidação do cesaropapismo justinianeu como modelo político-eclesiástico',
  ],

  contextoResumido:
    'Cem anos após Calcedônia (451), o Império Bizantino permanecia dividido entre calcedonianos e miafisitas. Justiniano I, buscando a reunificação, identificou nos escritos de três autores mortos — os chamados "Três Capítulos" — o obstáculo à reconciliação com os miafisitas. O V Concílio Ecumênico foi convocado para condenar esses textos sem revogar Calcedônia, resultando no concílio mais controverso da Antiguidade cristã.',

  reconhecimento: {
    comoEcumenico:
      'Reconhecido como V Concílio Ecumênico pelo Concílio de Constantinopla III (680–681) e ratificado pelo Papa Agatão e pelo Ocidente a partir do final do séc. VII',
    aceito: [
      'Igreja Católica Romana',
      'Igreja Ortodoxa (todas as jurisdições)',
    ],
    controversias:
      'O Cisma Tricapitolino no norte da Itália (Aquileia-Grado) durou de 553 a 698 — quase 150 anos. A aceitação plena no Ocidente latino só se consolidou no pontificado de Gregório Magno (590–604) e seus sucessores. Até hoje, alguns historiadores debatem a legitimidade do concílio dada a ausência do Papa.',
  },
}