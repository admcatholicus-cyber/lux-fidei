export interface AnatemaComentario {
  ordem: number
  formulaGrega: string          // deve corresponder ao campo do Dossiê para casamento
  teseArianaCorrespondente: string
  comentarioTeologico: string
  implicacaoDoutrinaria: string
}

export const anatemasComentario: AnatemaComentario[] = [
  {
    ordem: 1,
    formulaGrega: 'Ἦν ποτε ὅτε οὐκ ἦν',
    teseArianaCorrespondente:
      'Ário ensinava que o Filho teve um princípio temporal: se foi gerado, houve um "antes" no qual não existia.',
    comentarioTeologico:
      'Este anátema fixa a eternidade absoluta do Filho. Se aplicássemos categorias de tempo à geração eterna, o Pai não seria eternamente Pai, pois só seria Pai a partir do momento em que gerasse o Filho — o que implicaria mudança em Deus.',
    implicacaoDoutrinaria:
      'A geração do Filho é intemporal, atemporal e coeterna ao Pai. Nada em Deus é sucessivo ou posterior.',
  },
  {
    ordem: 2,
    formulaGrega: 'Ἐξ οὐκ ὄντων ἐγένετο',
    teseArianaCorrespondente:
      'Ário ensinava que o Filho foi feito "a partir do nada" (ex ouk óntōn), como todas as demais criaturas.',
    comentarioTeologico:
      'Este anátema separa geração de criação. Todas as criaturas vêm ex nihilo; o Filho, porém, é gerado da própria substância do Pai (ek tēs ousías tou Patrós). A geração é um ato imanente e eterno; a criação é ato externo e temporal.',
    implicacaoDoutrinaria:
      'O Filho não é criatura. A distinção entre "gerado" e "feito" (γεννηθέντα, οὐ ποιηθέντα) torna-se dogma inegociável.',
  },
  {
    ordem: 3,
    formulaGrega: 'Ἐξ ἑτέρας ὑποστάσεως ἢ οὐσίας',
    teseArianaCorrespondente:
      'Correntes arianas moderadas admitiam o Filho como divino, mas de outra hipóstase/substância que a do Pai — um "segundo deus" subordinado.',
    comentarioTeologico:
      'Este é o anátema mais controverso: aqui hypóstasis e ousía aparecem como sinônimos, o que causou décadas de confusão até os Padres Capadócios (Basílio, Gregórios) fixarem a distinção: uma só ousía (essência divina), três hypostáseis (subsistências pessoais).',
    implicacaoDoutrinaria:
      'Consubstancialidade absoluta: Pai e Filho compartilham numericamente a mesma essência divina, não apenas essências semelhantes.',
  },
  {
    ordem: 4,
    formulaGrega: 'Τρεπτὸν ἢ ἀλλοιωτόν',
    teseArianaCorrespondente:
      'Ário ensinava que o Filho, sendo criatura, era mutável por natureza (treptós) — ainda que de fato tivesse escolhido permanecer bom.',
    comentarioTeologico:
      'Este anátema afirma a imutabilidade ontológica do Logos. Se o Filho pudesse mudar, teria uma perfeição meramente moral e adquirida, não essencial. Isso destruiria a soteriologia: apenas um Deus imutável pode divinizar o homem.',
    implicacaoDoutrinaria:
      'O Filho é imutável na essência. Sua bondade não é escolha, mas natureza. Fundamento da doutrina atanasiana da theosis.',
  },
]

// Nota histórica de contexto (renderizada abaixo dos cards)
export const anatemasNotaHistorica = {
  origem:
    'A fórmula dos anátemas de 325 não foi inventada em Niceia. O Sínodo de Antioquia (início de 325), presidido por Ósio de Córdova, já havia condenado com linguagem quase idêntica as expressões "houve um tempo em que não era" e "antes de ser gerado, não era". Niceia consolidou, sistematizou e deu autoridade ecumênica ao que Antioquia esboçara meses antes.',
  ausenciaEm381:
    'O Credo de Constantinopla I (381) removeu os anátemas do texto litúrgico cantado. Isso não significa revogação: os anátemas de 325 continuaram vigentes como dogma. A remoção foi pastoral — um credo destinado à recitação nas assembleias eucarísticas não podia conter cláusulas de excomunhão. A condenação do arianismo passou a ser assumida como pressuposto, não como enunciado litúrgico.',
  transmissao:
    'As principais testemunhas do texto integral dos anátemas são: Atanásio (De decretis 36 e De synodis 23), Sócrates Escolástico (HE I.8), Teodoreto (HE I.12), Basílio de Cesareia (Epistula 125) e o Breviarium Melitii (Urk. 24 de Opitz).',
}
