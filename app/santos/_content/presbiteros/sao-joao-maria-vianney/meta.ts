export const meta = {
  // Identificação
  slug: 'sao-joao-maria-vianney',
  categoria: 'presbiteros',
  nome: 'São João Maria Vianney',
  titulo: 'Presbítero · Pastor',
  subtitulo: 'Pároco de Ars, confessor e padroeiro dos sacerdotes',

  // Datas
  nascimento: '8 de maio de 1786',
  morte: '4 de agosto de 1859',
  canonizacao: '31 de maio de 1925',
  festa: '4 de agosto',

  // Imagem
  imagemCard: '/santos/cards/presbiteros/sao-joao-maria-vianney.png',

  // Abas (na ordem que aparecem no menu)
  abas: [
    { slug: 'historia', label: 'História' },
    { slug: 'ars', label: 'Ars' },
    { slug: 'confessionario', label: 'O Confessionário' },
    { slug: 'combate', label: 'Combate Espiritual' },
    { slug: 'espiritualidade', label: 'Espiritualidade' },
    { slug: 'relacoes', label: 'Relações' },
    { slug: 'milagres', label: 'Milagres' },
    { slug: 'morte', label: 'Morte' },
    { slug: 'legado', label: 'Legado' },
    { slug: 'impacto', label: 'impacto' },
    { slug: 'referencias', label: 'Referências' },
    { slug: 'frases', label: 'Antologia de Frases', },
  ],
};

export type SantoMeta = typeof meta;