// estudos/concilios/calcedonia/leao-104-106/_data.ts

export const introLeao104_106 = {
  titulo: 'Leão rejeita o Cânon 28 — Epistulae 104, 105 e 106',
  contexto:
    'Ao receber as actas do Concílio de Calcedônia no final de 451 ou início de 452, ' +
    'Papa Leão I (Magno) escreveu três cartas que se tornaram decisivas para a história ' +
    'da primazia romana. Nas três, Leão aprova integralmente as decisões DOGMÁTICAS do ' +
    'concílio (a Definição e o Tomo) mas anula formalmente o Cânon 28, que concedia a ' +
    'Constantinopla privilégios iguais aos de Roma. A distinção entre doutrina e disciplina ' +
    'ficou para sempre marcada nestas cartas.',
};

export interface Epistula {
  numero: number;
  destinatario: string;
  data: string;
  resumo: string;
  trechoLatim: string;
  trechoPT: string;
  notas: string[];
}

export const epistulae: Epistula[] = [
  {
    numero: 104,
    destinatario: 'Imperador Marciano',
    data: 'Final de 452 ou início de 453',
    resumo:
      'Leão agradece a Marciano pela convocação do concílio e pela defesa da fé ortodoxa. ' +
      'Aprova integralmente as decisões DOGMÁTICAS de Calcedônia (Definição e recepção do ' +
      'Tomo). Porém, anula formalmente o Cânon 28, declarando-o contrário aos cânones de ' +
      'Niceia e à tradição apostólica. Leão argumenta que a primazia de Roma vem de Pedro, ' +
      'não da grandeza política da cidade — "porque Roma não é o que é por mérito humano, ' +
      'mas pela graça divina". Aprova o envio de legados para confirmar as decisões.',
    trechoLatim:
      'A VERIFICAR: trecho decisivo da Epistula 104 (PL 54)',
    trechoPT:
      'Leão declara que o Cânon 28 é nulo porque "não há nos divinos cânones nenhuma ' +
      'dispensa em favor de Constantinopla, a tal ponto que a própria antiga Roma, que ' +
      'foi a sede do império, não deve ter tais privilégios por razão da cidade, mas sim ' +
      'por ter recebido o primado da boca do próprio beatíssimo Pedro, príncipe dos ' +
      'apóstolos".',
    notas: [
      'A VERIFICAR: texto latino integral da Ep. 104 em PL 54',
      'Leão mantém a distinção fundamental: doutrina aceita, disciplina rejeitada.',
    ],
  },
  {
    numero: 105,
    destinatario: 'Imperatriz Pulquéria',
    data: 'Final de 452 ou início de 453',
    resumo:
      'Carta pessoal a Pulquéria, irmã de Marciano, que havia sido uma das forças por ' +
      'trás da convocação do concílio. Leão elogia a devoção de Pulquéria à fé ortodoxa ' +
      'e sua perseverança na defesa do Tomo durante o Latrocínio de 449. Repete a aprovação ' +
      'dogmática e a anulação do Cânon 28. A carta é marcada por um tom mais afetuoso e ' +
      'menos formal que a dirigida a Marciano, sugerindo proximidade pessoal.',
    trechoLatim:
      'A VERIFICAR: trecho decisivo da Epistula 105 (PL 54)',
    trechoPT:
      'Leão escreve a Pulquéria que as decisões do concílio são válidas em matéria de fé, ' +
      'mas que o Cânon 28 não pode permanecer, pois viola os direitos da Sé Apostólica ' +
      'que lhe foram concedidos pelo próprio Pedro.',
    notas: [
      'A VERIFICAR: texto latino integral da Ep. 105 em PL 54',
      'Pulquéria havia sido deposta em 449 e restaurada em 450; Leão a reconhece como ' +
      'defensora da fé.',
    ],
  },
  {
    numero: 106,
    destinatario: 'Anatólio de Constantinopla',
    data: 'Final de 452 ou início de 453',
    resumo:
      'Carta dirigida diretamente ao patriarca de Constantinopla, Anatólio, que havia ' +
      'presidido a aprovação do Cânon 28. Esta é a mais severa das três: Leão acusa ' +
      'Anatólio de ambição e ingratidão, lembrando que fora Roma quem confirmara sua ' +
      'consagração duvidosa em 449 (quando havia sido eleito sem o consentimento do ' +
      'metropolita de Heracleia). Leão anula o Cânon 28 e ordena que Anatólio se abstenha ' +
      'de exercer qualquer jurisdição além de sua própria província. A carta é um exercício ' +
      'de autoridade papal sem precedentes.',
    trechoLatim:
      'A VERIFICAR: trecho decisivo da Epistula 106 (PL 54)',
    trechoPT:
      'Leão declara: "Uma coisa é a razão das coisas seculares, outra a das divinas; e ' +
      'não se deve confundir o que foi concedido por autoridade imperial com o que foi ' +
      'decidido por autoridade apostólica. Pois se alguém quer que Constantinopla seja ' +
      'honrada com privilégios semelhantes aos de Roma, deve mostrar que pode também ' +
      'igualar-se na fé e na doutrina apostólica".',
    notas: [
      'A VERIFICAR: texto latino integral da Ep. 106 em PL 54',
      'A frase "aliud est ratio rerum saecularium, aliud divinarum" é uma das mais ' +
      'citadas de Leão na questão da primazia.',
      'Anatólio responde submissamente em 454, aceitando a anulação — embora Constantinopla ' +
      'continue a considerar o cânon válido.',
    ],
  },
];

export const consequenciasRejeicao = {
  titulo: 'Consequências da rejeição',
  itens: [
    'A anulação do Cânon 28 criou um precedente: pela primeira vez, um papa anulou formalmente ' +
      'um cânon de um concílio ecumênico, estabelecendo que a confirmação papal é constitutiva ' +
      'para a validade universal de um cânon disciplinar.',
    'Constantinopla aceitou a anulação em 454 (resposta de Anatólio) mas continuou a considerar ' +
      'o Cânon 28 válido de fato, exercendo jurisdição sobre as dioceses do Ponto, Ásia e Trácia.',
    'O Cânon 28 foi incluído em coleções canônicas orientais (Notitia 14, Nomocânon XIV) ' +
      'mas omitido das coleções latinas antigas (Dionysiana, Hispana, Decreto de Graciano).',
    'A divergência sobre o fundamento da primazia — petrina para Roma, política para ' +
      'Constantinopla — cristalizou-se como uma das raízes do Grande Cisma de 1054.',
    'Nos diálogos ecumênicos contemporâneos (Ravena 2007, Chieti 2016, Alexandria 2023), ' +
      'o Cânon 28 continua a ser citado como exemplo da divergência eclesiológica não resolvida ' +
      'entre Ocidente e Oriente.',
  ],
};
