// _data/filologia-edicoes.ts

export interface EdicaoCritica {
  titulo: string;
  editorCientifico: string;
  localPublicacao: string;
  editora: string;
  dataPublicacao: string;
  tipo: 'edicao-colacao' | 'edicao-critica' | 'edicao-diplomatica' | 'reimpressao';
  lingua: string[];
  observacao: string;
}

export interface RecursoDigital {
  titulo: string;
  url: string;
  tipo: 'base-dados' | 'corpus-textual' | 'edicao-digital' | 'busca-patrologica' | 'acesso-primarios';
  instituicao: string;
  observacao: string;
}

export interface FerramentaFilologia {
  titulo: string;
  autor: string;
  obra: string;
  dataPublicacao: string;
  tipo: 'dicionario' | 'gramatica' | 'repertorio-biografico' | 'paleografia' | 'catalogo-mss';
  observacao: string;
}

export const edicoesPrimarias: EdicaoCritica[] = [
  {
    titulo: 'Conciliorum Oecumenicorum Decreta (Editio Altera)',
    editorCientifico: 'Joseph Alberigo et al.',
    localPublicacao: 'Bologna',
    editora: 'Edizioni Dehoniane (EDB)',
    dataPublicacao: '2002',
    tipo: 'edicao-colacao',
    lingua: ['latim', 'grego'],
    observacao:
      'Edição ampliada e revisada do corpus conciliar. Reúne os textos originais (grego e latim) dos Concílios Ecumênicos com introduções críticas e notas históricas. Referência padrão para estudos conciliares.',
  },
  {
    titulo: 'Acta Conciliorum Oecumenicorum (ACO)',
    editorCientifico: 'Eduard Schwartz et al.',
    localPublicacao: 'Berlin/Leipzig',
    editora: 'Walter de Gruyter',
    dataPublicacao: '1914–2014',
    tipo: 'edicao-colacao',
    lingua: ['grego', 'latim', 'copta', 'armênio', 'siríaco', 'georgiano'],
    observacao:
      'Edição monumental e definitiva do corpus dos Concílios Ecumênicos. As Atas do Concílio de Constantinopla II constam no Vol. IV, Parte 1 (Ed. E. Schwartz, 1971). A coleção inclui atas, subscrições, epístolas imperiais e todos os documentos conciliares em língua original com traduções.',
  },
  {
    titulo: 'Concilium Universale Constantinopolitanum II',
    editorCientifico: 'Peter E. Pena',
    localPublicacao: 'Turnhout',
    editora: 'Brepols',
    dataPublicacao: '2016',
    tipo: 'edicao-critica',
    lingua: ['grego', 'latim'],
    observacao:
      'Edição crítica moderna com introdução filológica e histórico-dogmática. Análise das variantes textuais das atas conciliares e dos anátemas. Parte da coleção Corpus Christianorum.',
  },
  {
    titulo: 'Second Council of Constantinople (553): The Acts and Dogmatic Decrees',
    editorCientifico: 'Henry R. Percival (trad.)',
    localPublicacao: 'Edimburgo',
    editora: 'T&T Clark (Nicene and Post-Nicene Fathers, Série 2, Vol. XIV)',
    dataPublicacao: '1900 (reimpressões: 2007, 2018)',
    tipo: 'reimpressao',
    lingua: ['inglês'],
    observacao:
      'Tradução inglesa das atas conciliares com introduções patrísticas. Edição padrão de referência em língua inglesa para estudos acadêmicos.',
  },
  {
    titulo: 'Les Actes du deuxième Concile œcuménique (553)',
    editorCientifico: 'Jean-Rémy Palanque',
    localPublicacao: 'Paris',
    editora: 'Éditions du Cerf (Sources Chrétiennes)',
    dataPublicacao: '1964',
    tipo: 'edicao-critica',
    lingua: ['francês', 'grego'],
    observacao:
      'Edição bilíngue (grego-francês) com introdução e notas. Parte da coleção Sources Chrétiennes da Editora Cerf. Edição amplamente utilizada na scholarship francesa.',
  },
  {
    titulo: 'The Seventh Ecumenical Council (Second Council of Nicaea, 787)',
    editorCientifico: 'Richard Price e Michael Gaddis',
    localPublicacao: 'Liverpool',
    editora: 'Liverpool University Press',
    dataPublicacao: '2001',
    tipo: 'edicao-colacao',
    lingua: ['grego', 'latim'],
    observacao:
      'Embora centrado no Concílio de Nicéia II, inclui referências contextuais importantes ao Concílio de Constantinopla II (553).',
  },
];

export const recursosDigitais: RecursoDigital[] = [
  {
    titulo: 'Documenta Catholica Omnia',
    url: 'https://www.documentacatholicaomnia.eu',
    tipo: 'corpus-textual',
    instituicao: 'Cooperatorum Veritatis Societas',
    observacao:
      'Corpus digital com textos em latim (e tradução) de todos os documentos eclesiais, desde os Atos dos Apóstolos até os documentos do Vaticano II. As atas do 5º Concílio Ecumênico estão disponíveis em:',
  },
  {
    titulo: 'Documenta Catholica Omnia — Concílio de Constantinopla II',
    url: 'https://www.documentacatholicaomnia.eu/05/0551-0553,_Concilium_Constantinopolitanum_II,_551-553,_Canones.html',
    tipo: 'acesso-primarios',
    instituicao: 'Cooperatorum Veritatis Societas',
    observacao:
      'Acesso direto aos cânones e atas do Concílio de Constantinopla II em latim. Texto completo com numeração de cânones.',
  },
  {
    titulo: 'The Tertullian Project',
    url: 'https://www.tertullian.org/fathers/',
    tipo: 'corpus-textual',
    instituicao: 'Tertullian.org',
    observacao:
      'Corpus com os textos dos Padres da Igreja em inglês e latim. Inclui obras dos participantes do concílio e documentos relacionados aos Três Capítulos.',
  },
  {
    titulo: 'Patrologia Latina (PL)',
    url: 'https://www.documentacatholicaomnia.eu/02z/z_0056-0217,_PL,_Patrologia_Latina,_Migne,_Omnia_Vol.html',
    tipo: 'edicao-digital',
    instituicao: 'J.-P. Migne (1844–1855) / Digitalização: Documenta Catholica Omnia',
    observacao:
      'Edição completa da Patrologia Latina (178 volumes + 4 de índices) digitalizada. Vols. 64–74 contêm os textos dos Padres Latinos do século VI, incluindo os documentos dos Três Capítulos.',
  },
  {
    titulo: 'Patrologia Graeca (PG)',
    url: 'https://www.documentacatholicaomnia.eu/02z/z_0056-0145,_PG,_Patrologia_Graeca,_Migne,_Omnia_Vol.html',
    tipo: 'edicao-digital',
    instituicao: 'J.-P. Migne (1857–1866) / Digitalização: Documenta Catholica Omnia',
    observacao:
      'Edição completa da Patrologia Graeca (161 volumes) digitalizada. Vols. 86.1 e 86.2 contêm as obras completas de Teodoro de Mopsuéstia.',
  },
  {
    titulo: 'The Athanasius of Alexandria Project',
    url: 'https://copticcartoons.com/athanasius-project.html',
    tipo: 'busca-patrologica',
    instituicao: 'Coptic Cartoons',
    observacao:
      'Projeto dedicado à biografia de Santo Atanásio de Alexandria com links para obras patrísticas relevantes, incluindo documentos sobre os Três Capítulos.',
  },
  {
    titulo: 'Encyclopædia Iranica',
    url: 'https://www.iranicaonline.org',
    tipo: 'busca-patrologica',
    instituicao: 'Columbia University',
    observacao:
      'Referência online para informações sobre a Igreja Assíria/Persa, que preservou o legado de Teodoro de Mopsuéstia. Inclui artigos sobre a cristologia siríaca e os Três Capítulos.',
  },
];

export const ferramentasFilologia: FerramentaFilologia[] = [
  {
    titulo: 'Dicionário Grego-Bíblico',
    autor: 'Heinrich Schlier',
    obra: 'Wörterbuch zum Neuen Testament (6ª ed.)',
    dataPublicacao: '1965',
    tipo: 'dicionario',
    observacao:
      'Referência para termos cristológicos e eclesiológicos do grego bíblico. Útil para entender os termos técnicos dos anátemas conciliares.',
  },
  {
    titulo: 'Diccionario Griego-Español del Nuevo Testamento y otros documentos cristianos',
    autor: 'Juan Mateos',
    obra: 'Madrid: CSIC',
    dataPublicacao: '1993',
    tipo: 'dicionario',
    observao: 'Inclui termos cristológicos e eclesiológicos com atenção especial aos documentos cristológicos do século VI.',
  },
  {
    titulo: 'Dicionário de São Cirilo de Alexandria',
    autor: 'Richard A. Edwards',
    obra: 'A Dictionary of Eastern Orthodox Theology',
    dataPublicacao: '1990',
    tipo: 'dicionario',
    observacao: 'Referência para termos teológicos ortodoxos orientais. Inclui definições de termos cristológicos centrais aos anátemas.',
  },
  {
    titulo: 'Late Medieval Paleography',
    autor: 'A. J. Collins e B. R. Gambarin',
    obra: 'A Palaeographical Handbook',
    dataPublicacao: '1955',
    tipo: 'paleografia',
    observacao:
      'Manual de paleografia medieval para decipherar manuscritos do século VI. Referência para estudiosos que trabalham com cópias manuscritas das atas conciliares.',
  },
  {
    titulo: 'Repertorium Fontium Historiae Medii Aevi',
    autor: 'Augusto Traditi et al.',
    obra: 'Roma: Istituto Storico Italiano per il Medio Evo',
    dataPublicacao: '1962–2012',
    tipo: 'repertorio-biografico',
    observacao:
      'Repertório de fontes para a história medieval. Inclui referências a manuscritos das atas conciliares e epístolas imperiais.',
  },
];

export const fontesComplementares = {
  titulo: 'Fontes Complementares para Estudo do Segundo Concílio de Constantinopla',
  corpo: [
    'As fontes primárias são: (1) as atas conciliares em grego e latim; (2) as epístolas imperiais de Justiniano; (3) as cartas do Papa Vigílio; e (4) as obras dos participantes (Facundo de Hermiane, Pelágio, Eutíquio). Fontes secundárias essenciais incluem os trabalhos de E. Schwartz (ACO IV.1), H. R. Percival (NPNF2-14), e as análises recentes de P. E. Pena e R. Price.',
  ],
};
