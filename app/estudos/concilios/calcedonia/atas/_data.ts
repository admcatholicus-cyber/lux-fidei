// estudos/concilios/calcedonia/atas/_data.ts

// ═══════════════════════════════════════════════════════
// TABELA-MASTER DAS SESSÕES
// ═══════════════════════════════════════════════════════

export interface SessaoResumo {
  numero: number;
  data: string;
  dataCurta: string;
  titulo: string;
  tipo: 'solene' | 'administrativa';
  presidente: string;
  destaque: string;
}

export const tabelaSessoes: SessaoResumo[] = [
  { numero: 1,  data: '8 de outubro',  dataCurta: '8 out',  titulo: 'Abertura e Latrocínio',        tipo: 'solene',          presidente: 'Paschasinus de Lilibeu',   destaque: 'Leitura das atas de 449, protestos contra Dioscoro' },
  { numero: 2,  data: '10 de outubro', dataCurta: '10 out', titulo: 'Documentos de fé',              tipo: 'solene',          presidente: 'Paschasinus de Lilibeu',   destaque: 'Credos, Cirilo, Tomo de Leão — "Pedro falou por Leão"' },
  { numero: 3,  data: '13 de outubro', dataCurta: '13 out', titulo: 'Deposição de Dioscoro',         tipo: 'solene',          presidente: 'Paschasinus de Lilibeu',   destaque: 'Sentença de Paschasinus, deposição in absentia' },
  { numero: 4,  data: '17 de outubro', dataCurta: '17 out', titulo: '"Basta Niceia!"',               tipo: 'solene',          presidente: 'Paschasinus de Lilibeu',   destaque: 'Debate sobre nova definição, comissão de 22 bispos' },
  { numero: 5,  data: '22 de outubro', dataCurta: '22 out', titulo: 'Definição de Calcedônia',       tipo: 'solene',          presidente: 'Paschasinus de Lilibeu',   destaque: 'Rejeição do 1º rascunho, aprovação com en dyo physesin' },
  { numero: 6,  data: '25 de outubro', dataCurta: '25 out', titulo: 'Confirmação imperial',          tipo: 'solene',          presidente: 'Marciano e Pulquéria',      destaque: 'Discurso de Marciano, assinatura com tinta púrpura' },
  { numero: 7,  data: '26 de outubro', dataCurta: '26 out', titulo: 'Juvenal × Máximo (Pentáquia)',  tipo: 'administrativa',  presidente: 'Comissários imperiais',    destaque: 'Elevação de Jerusalém a patriarcado' },
  { numero: 8,  data: '26 de outubro', dataCurta: '26 out', titulo: 'Tiro × Berito',                 tipo: 'administrativa',  presidente: 'Comissários imperiais',    destaque: 'Fotio de Tiro vs. Eustáquio de Berito' },
  { numero: 9,  data: '27 de outubro', dataCurta: '27 out', titulo: 'Teodoreto de Ciro (I)',         tipo: 'administrativa',  presidente: 'Comissários imperiais',    destaque: 'Primeira fase do caso Teodoreto' },
  { numero: 10, data: '28 de outubro', dataCurta: '28 out', titulo: 'Ibas e Maris',                  tipo: 'administrativa',  presidente: 'Comissários imperiais',    destaque: 'Reabilitação de Ibas de Edessa' },
  { numero: 11, data: '29 de outubro', dataCurta: '29 out', titulo: 'Caso de Ibas (continuação)',    tipo: 'administrativa',  presidente: 'Comissários imperiais',    destaque: 'Leitura de testemunhos sobre Ibas' },
  { numero: 12, data: '29 de outubro', dataCurta: '29 out', titulo: 'Reabilitação de Teodoreto',     tipo: 'administrativa',  presidente: 'Comissários imperiais',    destaque: 'Teodoreto anatematiza Nestório' },
  { numero: 13, data: '30 de outubro', dataCurta: '30 out', titulo: 'Casos egípcios e sírios',       tipo: 'administrativa',  presidente: 'Comissários imperiais',    destaque: 'Bispos orientais depostos no Latrocínio' },
  { numero: 14, data: '30 de outubro', dataCurta: '30 out', titulo: 'Encerramento fase nominal',     tipo: 'administrativa',  presidente: 'Comissários imperiais',    destaque: 'Últimos casos individuais antes dos cânones' },
  { numero: 15, data: '31 de outubro', dataCurta: '31 out', titulo: 'Promulgação dos 27 cânones',    tipo: 'administrativa',  presidente: 'Comissários imperiais',    destaque: 'Cânon 1 ao Cânon 27 lidos e aprovados' },
  { numero: 16, data: '1 de novembro', dataCurta: '1 nov',  titulo: 'Cânon 28 e encerramento',       tipo: 'administrativa',  presidente: 'Comissários imperiais',    destaque: 'Votação do Cânon 28, protesto legados, saída' },
];

// ═══════════════════════════════════════════════════════
// DIVERGÊNCIA DE NUMERAÇÃO GREGO × LATIM
// ═══════════════════════════════════════════════════════

export const divergenciaNumeracao = {
  titulo: 'Numeração grega × latina: por que existem 16 sessões?',
  descricao:
    'As atas conciliares de Calcedônia sobreviveram em duas tradições manuscritas: a tradição grega (editada por Eduard Schwartz em Acta Conciliorum Oecumenicorum, vol. II, 1933–1940) e a tradição latina (editada em versões mais antigas, incluindo a coleção de Dionísio Exíguo). As duas tradições numeram as sessões de forma diferente:',
  divergencias: [
    {
      grego: 'Acta 3',
      latina: 'Acta 2',
      data: '10 de outubro de 451',
      explicacao:
        'Na tradição grega, a leitura dos documentos de fé (Niceia, Constantinopla, Cirilo, Tomo de Leão) ocupa a Acta 3; na latina, é a Acta 2. Isso ocorre porque os gregos incluem uma "sessão" preliminar (a abertura formal, 8 de outubro) como Acta 1, enquanto os latinos a tratam como preâmbulo. A sessão de 13 de outubro (deposição de Dioscoro) é, inversamente, Acta 2 nos gregos e Acta 3 nos latinos.',
    },
    {
      grego: 'Acta 2',
      latina: 'Acta 3',
      data: '13 de outubro de 451',
      explicacao:
        'Inversão em relação à anterior: o julgamento de Dioscoro é Acta 2 nos gregos e Acta 3 nos latinos, refletindo a mesma divergência de contagem.',
    },
  ],
  notaFinal:
    'Nesta seção, adotamos a numeração grega (16 sessões) como padrão, pois é a mais utilizada na historiografia moderna. Em caso de dúvida, consulte a data — ela é inconfundível.',
};

// ═══════════════════════════════════════════════════════
// GUIA DE LEITURA DAS ATAS ACO
// ═══════════════════════════════════════════════════════

export const guiaLeitura = {
  titulo: 'Como ler as atas do Concílio de Calcedônia',
  introducao:
    'As atas conciliares (Acta Concilii Chalcedonensis) não são "atas" no sentido moderno — não foram escritas em tempo real por um secretário, mas compiladas a partir de documentos oficiais, rascunhos do notário, e provavelmente revisadas após o encerramento do concílio. Schwartz organizou-as em volumes da série ACO (Acta Conciliorum Oecumenicorum).',
  secoes: [
    {
      termo: 'Actio',
      definicao:
        'Cada sessão formal é chamada actio (plural: acta). Nos manuscritos gregos, as acta são numeradas de 1 a 16. Cada actio contém: (a) a abertura ritualística (invocação divina, presença dos comissários); (b) a ordem do dia (lista de assuntos); (c) os discursos, leituras e debates; (d) as decisões e aclamações finais.',
    },
    {
      termo: 'Aclamações',
      definicao:
        'As aclamações são as respostas uníssonas dos bispos aos discursos e decisões. São marcadas nas atas com frases como "Esta é a fé dos padres!" ou "Todos cremos assim!". As aclamações tinham função jurídica: serviam como votação oral e como testemunho público da aceitação coletiva. Nas atas de Calcedônia, as aclamações são particularmente longas e emotivas — refletindo (ou amplificando) a atmosfera da assembleia.',
    },
    {
      termo: 'Subscrições',
      definicao:
        'Ao final de cada acta, os bispos presentes assinavam (subscribunt) o documento. As subscrições incluíam o nome, a sede episcopal e, por vezes, uma breve formulação de assentimento ("Eu, [nome], bispo de [sede], assino esta decisão"). O número de subscrições varia de sessão para sessão (de ~130 a ~150 bispos, com variações por ausências e chegadas tardias). As subscrições são a evidência mais concreta da participação individual dos bispos.',
    },
  ],
  observacaoFinal:
    'Os textos que apresentamos aqui são paráfrases em português brasileiro, não traduções literais. Para o texto integral, consulte Schwartz (ACO II) ou a edição de Richard Price e Michael Gaddis (The Acts of the Council of Chalcedon, 3 vols., Liverpool University Press, 2005).',
};

// ═══════════════════════════════════════════════════════
// MAPA DE PALAVRAS-CHAVE POR SESSÃO
// ═══════════════════════════════════════════════════════

export const mapaPalavrasChave: { [key: number]: string[] } = {
  1:  ['Latrocínio', 'Dioscoro', 'Flavian', 'protestos', 'coação', 'Eusébio de Dorileu'],
  2:  ['Tomo de Leão', 'Credos', 'Cirilo', 'Pedro falou por Leão', 'reservas ilíricas', 'palestinas'],
  3:  ['Deposição', 'in absentia', 'Paschasinus', 'Gangra', 'exílio', 'Flavian mártir'],
  4:  ['"Basta Niceia!"', 'c.7 Éfeso', 'comissão de 22', 'egípcios', 'patriarca', 'nova definição'],
  5:  ['martyrium', '1º rascunho rejeitado', 'ek → en', 'quatro advérbios', 'aprovação', 'Definição'],
  6:  ['Marciano', 'Pulquéria', 'discurso', 'confirmação', 'tinta púrpura', 'aclamações'],
  7:  ['Juvenal', 'Máximo', '3 Palestinas', 'Pentarquia', 'Jerusalém patriarcado'],
  8:  ['Tiro', 'Berito', 'Fotio', 'Eustáquio', 'Fenícia'],
  9:  ['Teodoreto', 'Ciro', 'anátema', 'Nestório', 'reabilitação'],
  10: ['Ibas', 'Maris', 'Edessa', 'antioquenos', 'reabilitação'],
  11: ['Ibas', 'testemunhos', 'leitura', 'caso nominal'],
  12: ['Teodoreto', 'anátema público', 'Nestório', 'Theotokos'],
  13: ['casos nominais', 'egípcios', 'sírios', 'coação'],
  14: ['últimos casos', 'encerramento fase nominal'],
  15: ['27 cânones', 'simonia', 'ordenações', 'monges', 'disciplina'],
  16: ['Cânon 28', 'Constantinopla', 'Nova Roma', 'legados', 'protesto', 'saída'],
};
