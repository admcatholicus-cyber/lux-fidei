// _data/debates-historiograficos.ts

export interface PosicaoHistoriografica {
  autor: string;
  nacionalidade: string;
  anoObra: string;
  tituloObra: string;
  tese: string;
  evaluacao?: string;
}

export const debatesHistoriograficos = {
  titulo: 'Debates Historiográficos sobre o Segundo Concílio de Constantinopla',

  introducao:
    'O Concílio de Constantinopla II (553) é um dos concílios ecumênicos mais debatidos na historiografia cristã. Sua legitimação é questionada por quatro razões principais: (1) a ausência do Papa Vigílio das sessões; (2) o caráter opcional da participação episcopal; (3) o número relativamente baixo de bispos (152–168) comparado a concílios anteriores; e (4) a pressão imperial explícita sobre os participantes. A historiografia moderna debates se o concílio foi verdadeiramente "ecumênico" ou se sua autoridade deriva apenas do consentimento papal posterior.',

  debateLegitimidade: {
    titulo: 'A Questão da Legitimação',
    corpo:
      'O concílio não teve participação papal direta — Vigílio foi preso, exilado e eventualmente forçado a aceitar os anátemas, mas não subscreveu pessoalmente os documentos. Para os defensores, o concílio é ecumênico porque: (1) o Papa confirmou sua autoridade (ainda que sob coação); (2) o conteúdo doutrinário é ortodoxo; e (3) o concílio foi aceito pela Igreja universal. Para os críticos, o concílio é apenas um sínodo imperial, não ecumênico, porque: (1) o Papa não participou voluntariamente; (2) a maioria dos bispos estava na capital por outros motivos; e (3) a pressão imperial sobre os participantes foi explícita e documentada.',
  },

  opcoesLegitimacao: {
    titulo: 'As Quatro Opções de Legitimação',
    opcoes: [
      {
        numero: 1,
        titulo: 'Duração mínima',
        texto: 'A sessão principal (8ª sessão) durou apenas um dia (2 de junho de 553). A brevidade do concílio é vista como evidência do seu caráter puramente formal.',
      },
      {
        numero: 2,
        titulo: 'Participação episcopal opcional',
        texto: 'Bispos que se recusaram a participar não foram punidos. A participação era voluntária, o que enfraquece a universalidade do concílio.',
      },
      {
        numero: 3,
        titulo: 'Pressão imperial',
        texto: 'Justiniano usou pressão política e militar para forçar a aceitação. O Papa Vigílio foi preso e exilado. Bispos foram intimidados.',
      },
      {
        numero: 4,
        titulo: 'Aceitação posterior',
        texto: 'A autoridade do concílio só foi plenamente reconhecida pela Igreja Ocidental após o Papa Pelágio I (556–561), que aceitou o concílio sob pressão imperial.',
      },
    ],
  },

  posicoesHistoriograficas: [
    {
      autor: 'Eduard Schwartz',
      nacionalidade: 'Alemão',
      anoObra: '1971',
      tituloObra: 'Acta Conciliorum Oecumenicorum, Vol. IV, Parte 1',
      tese:
        'Edição crítica definitiva. Schwartz demonstrou que o concílio foi convocado por Justiniano para impor sua política de unificação religiosa e que a participação dos bispos foi motivada por considerações políticas, não teológicas.',
    },
    {
      autor: 'Henry R. Percival',
      nacionalidade: 'Britânico',
      anoObra: '1900',
      tituloObra: 'The Seven Ecumenical Councils (NPNF2, Vol. XIV)',
      tese:
        'Tradução inglesa padrão. Percival defende a legitimidade do concílio baseando-se no consentimento papal posterior e na aceitação universal pela Igreja.',
    },
    {
      autor: 'Jean-Rémy Palanque',
      nacionalidade: 'Francês',
      anoObra: '1964',
      tituloObra: 'Les Actes du deuxième Concile œcuménique (553)',
      tese:
        'Edição bilíngue com análise crítica. Palanque argumentou que o concílio foi convocado para resolver a controvérsia dos Três Capítulos e que sua legitimidade é histórica, não institucional.',
    },
    {
      autor: 'Giuseppe Alberigo',
      nacionalidade: 'Italiano',
      anoObra: '2002',
      tituloObra: 'Conciliorum Oecumenicorum Decreta (Editio Altera)',
      tese:
        'Edição ampliada. Alberigo defende que o concílio é ecumênico porque: (1) o Papa confirmou sua autoridade; (2) o conteúdo doutrinário é ortodoxo; e (3) o concílio foi aceito pela Igreja universal.',
    },
    {
      autor: 'Richard Price',
      nacionalidade: 'Britânico',
      anoObra: '2001',
      tituloObra: 'The Seventh Ecumenical Council',
      tese:
        'Embora centrado no Concílio de Nicéia II, Price faz análise comparativa com Constantinopla II, argumentando que o concílio de 553 foi um sínodo imperial, não ecumênico.',
    },
  ],

  consensusHistoriografico:
    'A historiografia moderna tende a reconhecer que Constantinopla II é um concílio ecumênico de fato, mas com ressalvas significativas sobre as circunstâncias de sua convocação. O consenso é que a autoridade do concílio deriva de sua aceitação pela Igreja universal, não de sua legitimidade institucional original. O concílio é visto como parte do projeto imperial de unificação religiosa de Justiniano, que usou a política eclesiástica como instrumento de governo.',
};
