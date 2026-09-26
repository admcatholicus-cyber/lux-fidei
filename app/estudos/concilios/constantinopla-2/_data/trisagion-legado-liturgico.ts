// _data/trisagion-legado-liturgico.ts

export interface HinoTrisagion {
  titulo: string;
  tituloGrego?: string;
  textoOriginal: string;
  traducao: string;
  adicaoFilopio?: { termo: string; grego: string; significado: string };
  usoAtual: string;
  contextosLiturgicos: string[];
}

export interface InsercaoFilopio {
  local: string;
  textoExato: string;
  traducao: string;
  data: string;
  contextoHistorico: string;
}

export interface ReacaoRoma {
  data: string;
  acao: string;
  resultado: string;
}

export const trisagionLegado = {
  titulo: 'O Triságio e o Legado Litúrgico do Segundo Concílio de Constantinopla',

  introducao:
    'O hino "Santíssimo Deus" (Triságion) é uma das mais antigas aclamações litúrgicas do cristianismo, com raízes que remontam ao século V. Sua forma mais conhecida é:',

  hinoPrincipal: {
    titulo: 'Triságion',
    tituloGrego: 'Τρισάγιον',
    textoOriginal: 'Ἄγιος ὁ Θεός, Ἅγιος Ἰσχυρός, Ἅγιος Ἀθάνατος, ἐλέησον ἡμᾶς',
    traducao: 'Santíssimo Deus, Santíssimo Forte, Santíssimo Imortal, tende piedade de nós',
    adicaoFilopio: {
      termo: 'qui pro nobis crucifixus est',
      grego: 'ὁ ὑπὲρ ἡμῶν σταυρωθείς',
      significado: 'que por nós foi crucificado',
    },
    usoAtual: 'Liturgia Ortodoxa (bizantina, armênia, copta, síria) como parte da Liturgia da Proskomídia e da Procissão de Entrada',
    contextosLiturgicos: ['Liturgia Bizantina (Oração da Proskomídia)', 'Procissão de Entrada (Liturgia dos Catecúmenos)', 'Liturgia Armênia (Prosfora)', 'Liturgia Copta (Liturghia da Proskomídia)'],
  } as HinoTrisagion,

  insercaoFilopio: {
    local: 'Depois das palavras "Santíssimo Imortal" (Ἄγιος Ἀθάνατος)',
    textoExato: 'Ὁ ὑπὲρ ἡμῶν σταυρωθείς, ἐλέησον ἡμᾶς',
    traducao: 'Tu que por nós foste crucificado, tem piedade de nós',
    data: 'ca. 485 d.C.',
    contextoHistorico:
      'O Patriarca Acácio de Constantinopla (472–489) inseriu a cláusula filopio ("que por nós foste crucificado") no Triságio por influência de Pedro Fullo, patriarca miafisita de Antioquia, que acreditava que a fórmula tripla ("Santíssimo Deus, Santíssimo Forte, Santíssimo Imortal") era insuficiente para expressar a cristologia cirilina. A adição pretendia enfatizar que o próprio Deus Filho, não apenas a humanidade de Cristo, sofreu na cruz — uma formulação que os miafisitas consideravam essencial para negar o nestorianismo.',
  } as InsercaoFilopio,

  controvérsia: {
    titulo: 'A Controvérsia do Triságio',
    corpo:
      'A cláusula filopio dividiu profundamente o cristianismo oriental entre o século V e VI. Para os miafisitas (não-calcedonianos), a adição era ortodoxa e necessária para expressar a união hipostática. Para os calcedonianos (imperial, ortodoxo e romano), a expressão "Deus crucificado" era está�a porque confundia as naturezas — o Filho de Deus, como Deus, não pode sofrer; apenas a natureza humana sofreu. O Patriarca Flávio de Constantinopla (489–512) removeu a cláusula em 511, mas o Patriarca Timóteo II (512–517) restaurou-a. O Imperador Justino I (518–527) proibiu definitivamente o uso da expressão no território imperial em 518.',
    consequencia:
      'A proibição imperial não eliminou o Triságion filopio, que permaneceu como marca distintiva da liturgia não-calcedoniana. Até hoje, as Igrejas copta, armênia e síria incluem a cláusula "que por nós foste crucificado" no Triságio, enquanto as Igrejas ortodoxa e católica de ritos orientais a omitem.',
  },

  anatemaOriginal: {
    titulo: 'Anátema 5 do Segundo Concílio de Constantinopla (553)',
    latinExato:
      'Si quis... non honorat sanctam et universalem synodum quae in Epheso congregata est... anathema sit.',
    portugues:
      'Se alguém... não honrar o santo e universal sínodo que se reuniu em Éfeso... seja anátema.',
    observacao: 'O anátema 5 do concílio de 553 condena quem rejeita o Concílio de Éfeso. Não há menção explícita ao Triságion filopio nos 14 anátemas, mas a controvérsia é contextual: a defesa do Triságio filopio pelos miafisitas era vista pelos calcedonianos como consequência da rejeição de Éfeso e Calcedônia.',
  },

  legadoLiturgico: {
    titulo: 'Legado Litúrgico',
    corpo:
      'Embora o Triságion filopio não tenha sido formalmente condenado nos 14 anátemas, a controvérsia marcou profundamente a liturgia oriental. A influência do concílio de 553 consolidou a forma calcedoniana do Triságio (sem a cláusula filopio) no Império Bizantino, que se tornou a base da liturgia bizantina ortodoxa. As Igrejas não-calcedonianas preservaram a forma filopio como sinal de sua identidade cristológica.',
  },

  usoAtual: {
    titulo: 'Uso Atual do Triságio',
    corpo:
      'O Triságion permanece central na liturgia de praticamente todas as tradições cristãs orientais. Na Liturgia Bizantina, é cantado durante a Procissão de Entrada e no início da Liturgia dos Catecúmenos. Na Liturgia Armênia, é parte integral da Prosfora. Nas Liturgias Copta e Síria, é entoado com variações que incluem a cláusula filopio. As diferentes formas do Triságio constituem um dos marcadores litúrgicos mais visíveis entre as tradições calcedonianas e não-calcedonianas.',
  },
} as const;
