export const meta = {
  slug: 'sao-gabriel-arcanjo',
  categoria: 'arcanjos',
  nome: 'São Gabriel Arcanjo',
  titulo: 'Arcanjo · Mensageiro da Encarnação',
  subtitulo: 'Aquele que assiste diante de Deus',

  natureza: 'Espírito angélico',
  ordem: 'Arcanjo',
  festa: '29 de setembro',
  memoriaHistorica: '24 de março (calendário romano anterior a 1969)',

  referenciasBiblicasPrincipais: [
    'Daniel 8,15-27',
    'Daniel 9,20-27',
    'Lucas 1,5-25',
    'Lucas 1,26-38',
  ],

  imagemCard: '/santos/cards/arcanjos/sao-gabriel-arcanjo.png',

  abas: [
    { slug: 'identidade', label: 'Identidade' },
    { slug: 'daniel', label: 'No Livro de Daniel' },
    { slug: 'zacarias', label: 'O Anúncio a Zacarias' },
    { slug: 'anunciacao', label: 'A Anunciação' },
    { slug: 'segundo-templo', label: 'Judaísmo do Segundo Templo' },
    { slug: 'patristica-e-teologia', label: 'Patrística e Teologia' },
    { slug: 'iconografia', label: 'Iconografia' },
    { slug: 'liturgia', label: 'Liturgia' },
    { slug: 'oracoes', label: 'Orações e Devoções' },
    { slug: 'recepcao-extra-crista', label: 'Recepção Extra-Cristã' },
    { slug: 'cultura-e-patronatos', label: 'Cultura e Patronatos' },
    { slug: 'referencias', label: 'Referências' },
    { slug: 'palavras', label: 'Palavras de Gabriel', destaque: true },
  ],
};

export type SantoMeta = typeof meta;