// estudos/concilios/calcedonia/sobre-fontes/_data.ts
// Metodologia, abreviaturas, guia de citação ABNT e changelog.

export const metodologia = {
  titulo: 'Metodologia',
  paragrafos: [
    'Este dossiê sobre o Concílio de Calcedônia é resultado de pesquisa bibliográfica sistemática ' +
    'realizada em fontes primárias e secundárias, com foco na cristologia dos séculos IV–VI. ' +
    'A estrutura do site segue o modelo de "dossiê documental" proposto pelo projeto Lux Fidei, ' +
    'com cada seção vinculando textos originais (em grego, latim e português) às suas fontes.',
    'A documentação das actas conciliares utiliza a edição crítica de Eduard Schwartz ' +
    '(Acta Conciliorum Oecumenicorum, vol. II, 1933–1940) como referência fundamental, ' +
    'complementada pela tradução inglesa comentada de Richard Price e Michael Gaddis ' +
    '(2005). Para as fontes latinas, adotamos a edição do Corpus Scriptorum Ecclesiasticorum ' +
    'Latinorum (CSEL) e o PL (Patrologia Latina) de Migne.',
    'A presente pesquisa não pretende esgotar as fontes disponíveis; antes, busca apresentar ' +
    'um panorama fiel, didático e verificável do IV Concílio Ecumênico para estudiosos, ' +
    'teólogos e leigos interessados.',
  ],
};

export const abreviaturas = [
  { sigla: 'ACO', extensao: 'Acta Conciliorum Oecumenicorum', autor: 'Eduard Schwartz et al.' },
  { sigla: 'PL', extensao: 'Patrologia Latina', autor: 'J.-P. Migne' },
  { sigla: 'PG', extensao: 'Patrologia Graeca', autor: 'J.-P. Migne' },
  { sigla: 'CSEL', extensao: 'Corpus Scriptorum Ecclesiasticorum Latinorum', autor: 'Vários editores' },
  { sigla: 'CSCO', extensao: 'Corpus Scriptorum Christianorum Orientalium', autor: 'Vários editores' },
  { sigla: 'CNG', extensao: 'Corpus Nummorum Graecorum', autor: 'Vários editores' },
  { sigla: 'CTh', extensao: 'Codex Theodosianus', autor: 'T. Mommsen (ed.)' },
  { sigla: 'LPC', extensao: 'Liber Pontificalis', autor: 'L. Duchesne (ed.)' },
  { sigla: 'HE', extensao: 'Historia Ecclesiastica', autor: 'Vários autores' },
  { sigla: 'LG', extensao: 'Lexikon für Theologie und Kirche', autor: 'J. Baur et al.' },
];

export const guiaCitacaoABNT = {
  titulo: 'Guia de Citação ABNT',
  formatos: [
    {
      modelo: 'Livro',
      formato: 'SOBRENOME, Nome. Título da obra. Edição. Local: Editora, Ano.',
      exemplo: 'GRILLMEIER, Aloys. Christ in Christian Tradition. 2. ed. Atlanta: John Knox Press, 1975.',
    },
    {
      modelo: 'Capítulo de livro',
      formato: 'SOBRENOME, Nome. Título do capítulo. In: SOBRENOME, Nome. Título do livro. Local: Editora, Ano, p. xx–xx.',
      exemplo: 'SELLERS, R. V. The Council of Chalcedon. London: SPCK, 1953, p. 82–105.',
    },
    {
      modelo: 'Artigo em periódico',
      formato: 'SOBRENOME, Nome. Título do artigo. Nome do Periódico, Local, v. xx, n. xx, p. xx–xx, Ano.',
      exemplo: 'GRAY, P. T. R. The Fifth Ecumenical Council. Vigiliae Christianae, Amsterdam, v. 38, n. 2, p. 145–174, 1984.',
    },
    {
      modelo: 'Fonte primária (Actas)',
      formato: 'ACO, vol. xx, pars x, p. xx. Ref.: SCHWARTZ, E. (ed.).',
      exemplo: 'ACO II.1.2, p. 300–398 (Sessão VI — Definição de Calcedônia).',
    },
    {
      modelo: 'Fonte primária (Carta papal)',
      formato: 'Ep. xx (PL xx, col. xx). Ref.: LEO MAGNUS.',
      exemplo: 'Ep. 28 (PL 54.759–796) — Tomo de Leão.',
    },
    {
      modelo: 'Sítio eletrônico',
      formato: 'AUTOR. Título do sítio. Disponível em: URL. Acesso em: dd mês. AAAA.',
      exemplo: 'WESSEL, Susan. Cyril of Alexandria and the Nestorian Controversy. Disponível em: https://... Acesso em: 10 set. 2026.',
    },
  ],
};

export const changelog = [
  { data: '12.set.2026', descricao: 'Versão inicial do dossiê — 15 seções publicadas.' },
  { data: '10.set.2026', descricao: 'Adição dos 28 cânones em trilíngue e análise do Cânon 28.' },
  { data: '8.set.2026', descricao: 'Inclusão do Tomo de Leão (Ep. 28) com tradução e trechos-chave em latim.' },
  { data: '5.set.2026', descricao: 'Publicação da Definição de Calcedônia com análise frase por frase.' },
  { data: '1.set.2026', descricao: 'Dossiê documental em revisão —融资 de fontes primárias e secundárias.' },
  { data: '28.ago.2026', descricao: 'Estruturação inicial do projeto e levantamento bibliográfico.' },
];
