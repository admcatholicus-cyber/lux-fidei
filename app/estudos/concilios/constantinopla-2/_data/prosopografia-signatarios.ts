// _data/prosopografia-signatarios.ts

export interface GrupoSignatarios {
  categoria: string;
  descricao: string;
  bispos: { nome: string; se: string; observacao?: string }[];
}

export const prosopografiaSignatarios = {
  introducao:
    'A lista nominal completa dos subscritores da 8ª sessão (2 de junho de 553) soma 165 bispos, embora a abertura do concílio tenha registrado 152. A diferença se explica pela chegada tardia de bispos que não estavam presentes no dia 5 de maio mas compareceram antes do encerramento. Algumas fontes citam 168 subscritores — a variação depende de como se contam os representantes de Jerusalém e os bispos que subscreveram por procuração.',

  resumo:
    'O concílio reuniu esmagadora maioria oriental. Os três patriarcas orientais presidiram conjuntamente. A representação ocidental limitou-se a um punhado de bispos africanos e talvez um ou dois ilírios, todos presentes na capital imperial por motivo diverso do concílio.',

  grupos: [
    {
      categoria: 'Patriarcas (presidentes)',
      descricao: 'Os três patriarcas orientais que presidiram o concílio em substituição ao Papa ausente.',
      bispos: [
        { nome: 'Eutíquio', se: 'Constantinopla', observacao: 'Patriarca Ecumênico; presidente de todas as 8 sessões' },
        { nome: 'Apolinário', se: 'Alexandria', observacao: 'Co-presidente; patriarca melquita calcedoniano' },
        { nome: 'Domnino', se: 'Antioquia (Teópolis)', observacao: 'Co-presidente' },
      ],
    },
    {
      categoria: 'Representantes de Jerusalém',
      descricao: 'O patriarca Eustóquio de Jerusalém não compareceu; três bispos representaram sua sé.',
      bispos: [
        { nome: 'Estêvão', se: 'Ráfia', observacao: 'Representante do patriarca de Jerusalém' },
        { nome: 'Jorge', se: 'Tiberíades', observacao: 'Representante do patriarca de Jerusalém' },
        { nome: 'Damião', se: 'Sozusa', observacao: 'Representante do patriarca de Jerusalém' },
      ],
    },
    {
      categoria: 'Bispos da Diocese do Egito',
      descricao: 'Representação limitada, refletindo a dominance miafisita no Egito.',
      bispos: [
        { nome: 'Zoilo (dep.)', se: 'Alexandria', observacao: 'Patriarca deposto; presence symbolica' },
        { nome: 'Isidoro', se: 'Hermópolis Magna' },
        { nome: 'Dorotheu', se: 'Mirtos' },
        { nome: 'Paulo', se: 'Eleuterina' },
      ],
    },
    {
      categoria: 'Bispos da Diocese do Oriente (Síria, Palestina, Mesopotâmia)',
      descricao: 'A maior delegação, refletindo a base geográfica do concílio.',
      bispos: [
        { nome: 'Teodoro', se: 'Samósata' },
        { nome: 'Marciano', se: 'Hierápolis' },
        { nome: 'Acácio', se: 'Beirute' },
        { nome: 'Sergio', se: 'Tiro' },
        { nome: 'Anastácio', se: 'Damasco' },
        { nome: 'João', se: 'Damasco (Diocese)' },
        { nome: 'Eustáquio', se: 'Epifânia' },
        { nome: 'Simeão', se: 'Emesa' },
        { nome: 'Macário', se: 'Arga' },
        { nome: 'Teodósio', se: 'Aradus' },
      ],
    },
    {
      categoria: 'Bispos da Diocese da Ásia (Ásia Menor)',
      descricao: 'Delegação significativa das províncias da Ásia Menor.',
      bispos: [
        { nome: 'Pedro', se: 'Cibranda' },
        { nome: 'Acácio', se: 'Amaseia' },
        { nome: 'Teodoro', se: 'Tion' },
        { nome: 'Eulógio', se: 'Cesareia da Capadócia' },
        { nome: 'Antônio', se: 'Filadélfia' },
        { nome: 'João', se: 'Sardes' },
        { nome: 'Paulo', se: 'Éfeso' },
      ],
    },
    {
      categoria: 'Bispos da Diocese do Ponto',
      descricao: 'Representantes das províncias do norte da Ásia Menor.',
      bispos: [
        { nome: 'Pedro', se: 'Gangra' },
        { nome: 'Teodoro', se: 'Neocesareia' },
        { nome: 'Macário', se: 'Polemonium' },
      ],
    },
    {
      categoria: 'Bispos da Diocese da Trácia e Ilíria',
      descricao: 'Presença mínima dos Bálcãs.',
      bispos: [
        { nome: 'Eusébio', se: 'Sozópolis' },
        { nome: 'Ciro', se: 'Perinto' },
      ],
    },
    {
      categoria: 'Bispos ocidentais (tag: Ocidente)',
      descricao: 'Uma delegação residual de bispos africanos e possivelmente ilírios, presentes na capital por motivo diverso do concílio.',
      bispos: [
        { nome: 'Próspero', se: 'Cartago (província)', observacao: 'Africano; provavelmente refugiado da invasão vândala' },
        { nome: 'Júlio', se: 'África Proconsular' },
        { nome: 'Pompônio', se: 'África Bizacena' },
        { nome: 'Feliciano', se: 'Numídia' },
        { nome: 'Patrônio', se: 'Mauritânia' },
        { nome: 'Venânio', se: 'Dalmácia' },
      ],
    },
  ],

  notaVariacao:
    'A abertura registrou 152 bispos; a subscrição da 8ª sessão, 165; algumas fontes citam 168. A variação se deve a (1) chegada tardia de bispos durante os 29 dias do concílio e (2) contagem de representantes que subscreveram por procuração. A lista nominal completa consta em ACO IV.1 (E. Schwartz, 1971) e em Mansi, Collectio, vol. VIII.',
};
