// estudos/concilios/calcedonia/imperiais/_data.ts

export const introImperiais = {
  titulo: 'Éditos imperiais de Marciano (451–452)',
  contexto:
    'Após o término do Concílio de Calcedônia, o imperador Flávio Marciano emitiu uma série ' +
    'de éditos e constituições imperiais que transformaram as decisões conciliares em lei ' +
    'do Império Romano do Oriente. Estes documentos são cruciais para compreender como o ' +
    'concílio teve efeito prático: sem o apoio imperial, as decisões teriam permanecido ' +
    'no papel. Marciano, casado com Pulquéria (irmã de Teodósio II), era o executor natural ' +
    'da vontade conciliar.',
};

export interface EditoImperial {
  data: string;
  destinatario: string;
  titulo: string;
  resumo: string;
  efeito: string;
}

export const editos: EditoImperial[] = [
  {
    data: '27 de fevereiro de 452',
    destinatario: 'Prefeito pretoriano do Oriente',
    titulo: 'Edito de confirmação das decisões de Calcedônia',
    resumo:
      'Marciano ordena que todas as decisões do Concílio de Calcedônia sejam observadas como ' +
      'leis imperiais. Determina que os bispos depostos em Éfeso 449 (caso Domno de Antioquia) ' +
      'sejam restaurados, e que os responsáveis pelo Latrocínio (Dioscoro de Alexandria, ' +
      'Barsumas) sejam punidos. Estabelece penas para quem se opuser às decisões conciliares.',
    efeito:
      'Aplicação imediata da lei: restituição dos bispos depostos, deposição de Dioscoro, ' +
      'proibição da difusão do monofisismo.',
  },
  {
    data: 'A VERIFICAR: data exata',
    destinatario: 'Patriarca Anatólio de Constantinopla',
    titulo: 'Confirmação da autoridade patriarcal',
    resumo:
      'Edito que confirma Anatólio como patriarca de Constantinopla e reconhece sua autoridade ' +
      'sobre as dioceses civis do Ponto, Ásia e Trácia — em consonância com o Cânon 28 ' +
      '(embora Leão o houvesse anulado). Marciano apoia a expansão jurisdicional de ' +
      'Constantinopla.',
    efeito:
      'Constantinopla exerce de fato jurisdição sobre as três dioceses civis, independentemente ' +
      'da anulação papal.',
  },
  {
    data: 'A VERIFICAR: data exata',
    destinatario: 'Todos os bispos do Império',
    titulo: 'Proibição do monofisismo',
    resumo:
      'Constituição imperial que proíbe a propagação do monofisismo (a doutrina de "uma só ' +
      'natureza" em Cristo) no Império. Determina que os monges e bispos monofisitas sejam ' +
      'depós e exilados. Proíbe reuniões e sínodos monofisitas.',
    efeito:
      'Perseguição sistemática dos monofisitas no Império do Oriente, com exílios, deposições ' +
      'e confisco de mosteiros. Contribui para a difusão do monofisismo para fora do Império ' +
      '(Síria, Egito, Armênia).',
  },
  {
    data: 'A VERIFICAR: data exata',
    destinatario: 'Autoridades civis do Império',
    titulo: 'Proteção dos bispos e clérigos',
    resumo:
      'Edito que estabelece penas para quem agredir, prender ou perseguir bispos e clérigos ' +
      'por motivo de fé. Protege a inviolabilidade eclesiástica e proíbe a interferência de ' +
      'tribunais seculares em assuntos canônicos.',
    efeito:
      'Garantia da autonomia eclesiástica no Império: os bispos não podem ser julgados por ' +
      'tribunais civis em assuntos de fé e disciplina canônica.',
  },
  {
    data: 'A VERIFICAR: data exata',
    destinatario: 'Governadores provinciais',
    titulo: 'Aplicação das penas contra hereges',
    resumo:
      'Constituição que detalha as penas para os hereges: confisco de bens, exílio, proibição ' +
      'de retornar à posição anterior. Aplica-se especialmente aos eutiquianos e monofisitas que ' +
      'se recusarem a aceitar a Definição de Calcedônia.',
    efeito:
      'Estrutura punitiva imperial para garantir a conformidade doutrinária. Os hereges perdem ' +
      'bens, dignidade e liberdade.',
  },
];

export const fontesImperiais = [
  'A VERIFICAR: textos integrais dos éditos imperiais de Marciano (F3 — Documenta Catholica Omnia)',
  'Referência parcial: Mansi VII (actas conciliares, apêndices imperiais)',
  'Referência parcial: Theodoret, Historia Ecclesiastica (continuação pós-Calcedônia)',
];
