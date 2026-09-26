export interface DebateMensagem {
  id: string
  autor: string
  cargo: string
  avatar: string
  lado: 'ariano' | 'niceno' | 'centro'
  texto: string
  refBiblica?: string
}

export const debateMensagens: DebateMensagem[] = [
  {
    id: 'ario-1',
    autor: 'Ário',
    cargo: 'Presbítero de Alexandria',
    avatar: 'estudos/concilios/niceia-1/o-concilio/personagens/ario.jpg',
    lado: 'ariano',
    texto: 'Se o Pai gerou o Filho, aquele que foi gerado tem um princípio de existência. Logo, houve um tempo em que o Filho não existia. Ele provém do não-existente.',
    refBiblica: 'Provérbios 8:22 · Colossenses 1:15 · João 14:28',
  },
  {
    id: 'alexandre-1',
    autor: 'Alexandre de Alexandria',
    cargo: 'Bispo de Alexandria',
    avatar: 'estudos/concilios/niceia-1/o-concilio/personagens/alexandre.jpg',
    lado: 'niceno',
    texto: 'Como pode ser a Palavra e a Sabedoria de Deus criada do nada? Deus nunca esteve sem a sua Sabedoria. O Filho é coeterno com o Pai, não sujeito ao tempo.',
    refBiblica: 'João 1:1 · Hebreus 1:3 · Colossenses 1:17',
  },
  {
    id: 'eusebio-1',
    autor: 'Eusébio de Nicomédia',
    cargo: 'Bispo de Nicomédia',
    avatar: 'estudos/concilios/niceia-1/o-concilio/personagens/eusebio-nicomedia.jpg',
    lado: 'ariano',
    texto: 'As próprias Escrituras testemunham a geração como uma obra. Lemos: "O Senhor me criou no princípio de seus caminhos". O criado não pode ser consubstancial ao Criador.',
    refBiblica: 'Provérbios 8:22 · Provérbios 8:25',
  },
  {
    id: 'atanasio-1',
    autor: 'Atanásio',
    cargo: 'Diácono de Alexandria',
    avatar: 'estudos/concilios/niceia-1/o-concilio/personagens/atanasio.jpg',
    lado: 'niceno',
    texto: 'O texto de Provérbios refere-se à encarnação e à economia da salvação, não à essência divina. Pois João proclama: "No princípio era o Verbo, e o Verbo era Deus". Só Deus pode salvar a humanidade, nenhuma criatura pode redimir outra.',
    refBiblica: 'João 1:1 · João 1:14 · Romanos 9:5',
  },
  {
    id: 'constantino-1',
    autor: 'Constantino',
    cargo: 'Imperador Romano',
    avatar: 'estudos/concilios/niceia-1/o-concilio/personagens/constantino.jpg',
    lado: 'centro',
    texto: 'Vossas disputas nasceram de minúcias teológicas e palavras ociosas. A concórdia da Igreja é mais importante. Que o termo "Homoousios" (Consubstancial) sele a unidade desta assembleia.',
  },
]
