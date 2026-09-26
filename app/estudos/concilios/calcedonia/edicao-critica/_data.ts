// estudos/concilios/calcedonia/edicao-critica/_data.ts

export const introEdicaoCritica = {
  titulo: 'Guia de edição crítica — ACO e Mansi',
  contexto:
    'Os textos do Concílio de Calcedônia sobreviveram em múltiplas coleções manuscritas ' +
    'com numerações divergentes entre as tradições grega e latina. Este guia explica a ' +
    'estrutura das edições críticas modernas e como citar cada fonte corretamente.',
};

export const estruturaACO = {
  titulo: 'Acta Conciliorum Oecumenicorum (ACO) — Edição de Schwartz',
  descricao:
    'A edição crítica de référence para os concílios ecumênicos é o ACO (Acta Conciliorum ' +
    'Oecumenicorum), organizado por Eduard Schwartz a partir de 1914. Para Calcedônia, ' +
    'a edição relevante é o volume II.1.2, que contém os textos gregos das atas e dos cânones.',
  volumes: [
    {
      rotulo: 'ACO I.1',
      conteudo: 'Acta Alexandrina (Efeso 449)',
    },
    {
      rotulo: 'ACO I.2',
      conteudo: 'Acta Ephesina (Efeso 431)',
    },
    {
      rotulo: 'ACO II.1.1',
      conteudo: 'Acta Chalcedonensia — Actas das sessões (grego)',
    },
    {
      rotulo: 'ACO II.1.2',
      conteudo: 'Acta Chalcedonensia — Cânones, Definição, Tomo (grego)',
    },
    {
      rotulo: 'ACO II.2',
      conteudo: 'Acta Chalcedonensia — Variantes e fragmentos latinos',
    },
    {
      rotulo: 'ACO III',
      conteudo: 'Concílios posteriores (Constantinopla II, 553)',
    },
  ],
  referencia:
    'Eduard Schwartz (ed.), Acta Conciliorum Oecumenicorum, vol. II.1.1–2 (Berlim, 1932–1940). ' +
    'Disponível em referência em: fourthcentury.com/acta-conciliorum-oecumenicorum/ (F6).',
};

export const mansi = {
  titulo: 'Mansi — Sacrorum Conciliorum Nova et Amplissima Collectio',
  descricao:
    'A coleção de Giovanni Domenico Mansi (1759–1798) é a fonte mais acessível para as atas ' +
    'dos concílios. Para Calcedônia, os volumes relevantes são VI e VII, que contêm tanto os ' +
    'textos gregos quanto as traduções latinas medievais.',
  volumes: [
    {
      rotulo: 'Mansi VI',
      conteudo:
        'Atas das sessões 1–7 de Calcedônia, em grego com tradução latina ao lado. ' +
        'Inclui os primeiros debates sobre Eutiques e a recepção do Tomo de Leão.',
    },
    {
      rotulo: 'Mansi VII',
      conteudo:
        'Atas das sessões 8–16, cânones (1–28), Definição (Horos), e apêndices imperiais. ' +
        'Inclui o texto grego integral do Cânon 28.',
    },
  ],
  referencia:
    'Giovanni Domenico Mansi, Sacrorum Conciliorum Nova et Amplissima Collectio, vol. VI–VII ' +
    '(Florência/Veneza, 1759–1798). Disponível em: documentacatholicaomnia.eu (F3).',
};

export const versoesLatinas = {
  titulo: 'Versões latinas medievais',
  descricao:
    'As atas gregas de Calcedônia foram traduzidas para o latim por vários tradutores ao longo ' +
    'dos séculos. Cada versão apresenta particularidades que afetam a numeração e a compreensão ' +
    'dos cânones.',
  versoes: [
    {
      nome: 'Rusticus (séc. VI)',
      descricao:
        'Tradução mais antiga das atas gregas para latim, feita por Rusticus, um diácono romano. ' +
        'Presente em several manuscritos vaticanos. É a versão que os legados papais levaram para ' +
        'Calcedônia. Apresenta interpolações na versão latina do cânon 6 de Niceia.',
    },
    {
      nome: 'Versão Vaticana (séc. VII)',
      descricao:
        'Revisão da tradução de Rusticus, encomendada pelo Papa Vitaliano (657–672). Mais precisa ' +
        'que a anterior, mas ainda com divergências pontuais em relação ao grego.',
    },
    {
      nome: 'Novara (séc. VIII)',
      descricao:
        'Tradução completa das atas e cânones, feita para a Diocese de Novara (norte da Itália). ' +
        'É a versão que influenciou o Decreto de Graciano (séc. XII). Apresenta os 27 cânones ' +
        'sem o Cânon 28.',
    },
  ],
};

export const numeracaoGregoLatim = {
  titulo: 'Numeração divergente: grego × latim',
  descricao:
    'A principal dificuldade ao estudar os cânones de Calcedônia é a numeração divergente ' +
    'entre as edições gregas e latimas. As edições gregas (ACO, editores modernos) contam 28 ' +
    'cânones, enquanto as latimas antigas (Dionysiana, Hispana, Graciano) contam apenas 27, ' +
        'omitindo o Cânon 28.',
  tabela: [
    {
      grego: 'Cânon 1–27',
      latimDionysiana: 'Cânon 1–27',
      observacao: 'Numeração idêntica para os 27 cânones disciplinares.',
    },
    {
      grego: 'Cânon 28',
      latimDionysiana: 'Ausente',
      observacao:
        'O Cânon 28 não foi incluído na Coleção Dionysiana (PL 67) nem na Hispana (PL 84) ' +
        'por ter sido anulado por Leão Magno.',
    },
    {
      grego: 'Cânon 29 (variantes)',
      latimDionysiana: 'Ausente',
      observacao:
        'Alguns manuscritos gregos trazem um "cânon 29" que é na verdade um fragmento das ' +
        'atas conciliares (sobre deposição de bispos), não um cânon independente.',
    },
  ],
};

export const exemplosCitacao = {
  titulo: 'Exemplos de citação',
  exemplos: [
    {
      formato: 'ACO (edição crítica moderna)',
      exemplo:
        'ACO II.1.2, p. 158 (Cânon 1); ACO II.1.2, p. 163 (Definição)',
      nota: 'Citação acadêmica padrão para estudos patrísticos.',
    },
    {
      formato: 'Mansi',
      exemplo:
        'Mansi VI, col. 533–540 (Sessão 1); Mansi VII, col. 157–163 (Cânon 28)',
      nota: 'Citação mais usada em estudos canônicos e patrísticos tradicionais.',
    },
    {
      formato: 'PL (Patrologia Latina)',
      exemplo:
        'PL 54, cols. 1011–1052 (Tomo de Leão); PL 67, cols. 141–162 (Cânones Dionysianos)',
      nota: 'Citação para textos latinos em Migne.',
    },
    {
      formato: 'PG (Patrologia Graeca)',
      exemplo:
        'PG 85, cols. 460–586 (Atas de Calcedônia em grego)',
      nota: 'Citação para textos gregos em Migne.',
    },
    {
      formato: 'NPNF',
      exemplo:
        'NPNF² XIV, pp. 259–308 (Tomo de Leão, Ep. 28)',
      nota: 'Citação para traduções inglesas da série Nicene and Post-Nicene Fathers.',
    },
    {
      formato: 'DH',
      exemplo:
        'DH §300–303 (Definição calcedoniana)',
      nota: 'Citação na tradição dogmática católica (Denzinger-Hünermann).',
    },
  ],
};
