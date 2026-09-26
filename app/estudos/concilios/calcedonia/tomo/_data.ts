// estudos/concilios/calcedonia/tomo/_data.ts

export const introTomo = {
  titulo: 'Tomo de Leão a Flaviano (Epistula 28)',
  contexto:
    'Escrito em 13 de junho de 449 por Papa Leão I (Magno) em resposta ao caso ' +
    'Eutiques, o Tomo é o documento cristológico mais influente da tradição latina. ' +
    'Foi lido na Sessão 2 de Calcedônia (10 de outubro de 451) e aclamado com o ' +
    'grito "Petrus per Leónem ita locutus est!" ("Pedro assim falou por meio de ' +
    'Leão!").',
  fonte:
    'O texto latino foi transcrito de la.wikisource.org/wiki/Tomus_ad_Flavianum ' +
    '(acesso em 12/09/2026) e conferido com a edição PL 54 (Migne). A tradução ' +
    'para português é do site Lux Fidei.',
};

export const capitulosTomo = [
  {
    numero: 'I',
    titulo: 'Introdução: Eutiques é ignorante',
    latim:
      'Postquam fraturnitatis tuae litteras mira tarditate perlectas, et synodi ' +
      'episcoporum facta congregatio indicavit, datum est nobis agnoscere, quanta ' +
      'inter vos inreverentia contra integritatem fidei discordia consurrexerit; et ' +
      'quod prius videbatur obscurum, factum est manifestum.',
    pt:
      'Depois de ter lido as cartas de tua caridade, cuja tardança nos causou ' +
      'admiração, e depois de haver examinado as atas do sínodo dos bispos, ficamos ' +
      'afinal informados sobre o escândalo que surgiu entre vós contra a integridade ' +
      'da fé; e o que antes nos parecia obscuro tornou-se agora claro e manifesto.',
    notas:
      'Leão abre com um tom de surpresa indignada. A "tardança" das cartas de ' +
      'Flaviano sugere que o patriarca hesitou antes de reportar o caso a Roma.',
  },
  {
    numero: 'II',
    titulo: 'A encarnação do Verbo',
    latim:
      'Ignorat ergo quid sit de Verbi Dei incarnatione sentiendum, et ad ' +
      'intelligentiae lucem capiendam, Scripturarum latitudinem occupatam mente ' +
      'non potest inflectere.',
    pt:
      'Ignora, portanto, o que se deve pensar sobre a encarnação do Verbo de Deus, ' +
      'e não quer, para obter a luz da inteligência, aplicar-se com esforço à ampla ' +
      'extensão das Sagradas Escrituras.',
    notas:
      'Leão acusa Eutiques de ignorância Bíblica, não de heresia consciente. É uma ' +
      'estratégia retórica: demolir a credibilidade do adversário antes de refutar seus ' +
      'argumentos.',
  },
  {
    numero: 'III',
    titulo: 'Nova ordem, novo nascimento',
    latim:
      'Novo ordine, quia invisibilis in suis, visibilis factus est in nostris, ' +
      'incomprehendibilis voluit comprehendi; ante tempora manens esse coepit ex ' +
      'tempore; universitatis Dominus servilem formam, obumbrata majestatis suae ' +
      'immensitate, suscepit; impassibilis Deus non dedignatus est homo esse passibilis, ' +
      'et immortalis mortis legibus subjacere.',
    pt:
      'Nova ordem: porque, invisível nos seus, tornou-se visível nos nossos; ' +
      'incompreensível quis ser compreendido; permanecendo anterior aos tempos, ' +
      'começou a ser no tempo; Senhor do universo, ocultando a imensidão de sua ' +
      'majestade, tomou a forma de servo; Deus impassível não desdenhou ser homem ' +
      'passível, e imortal submeter-se às leis da morte.',
    notas:
      'O "novo ordine" e "nova nativitate" formam uma estrutura paralela que Leão ' +
      'usa para explicar a Encarnação como simultaneamente única (nova ordem) e ' +
      'harmoniosa com a criação (novo nascimento).',
  },
  {
    numero: 'IV',
    titulo: 'Cada forma opera o que lhe é próprio',
    latim:
      'Agit enim utraque forma cum alterius communione, quod proprium est; Verbo ' +
      'scilicet operante quod Verbi est, et carne exsequente quod carnis est.',
    pt:
      'Pois cada uma das duas formas opera, em comunhão com a outra, aquilo que lhe ' +
      'é próprio: o Verbo, evidentemente, realizando o que é do Verbo, e a carne ' +
      'executando o que é da carne.',
    notas:
      'A frase mais famosa do Tomo. "Agit utraque forma" (cada forma opera) estabelece ' +
      'o princípio da distinção das operações na unidade do agente. Foi debatida em ' +
      'Calcedônia por soar "quase nestoriana" — mas Leão esclarece que há UM sujeito ' +
      'operante (a pessoa una), não dois.',
  },
  {
    numero: 'V',
    titulo: 'Os milagres e as injúrias',
    latim:
      'Unum horum coruscat miraculis, aliud succumbit injuriis. Et sicut Verbo ab ' +
      'aequalitate paternae gloriae non recedit, ita caro naturam nostri generis non relinquit.',
    pt:
      'Uma delas resplandece com os milagres, a outra sucumbe às injúrias. E, assim ' +
      'como o Verbo não se afasta da igualdade da glória paterna, assim a carne não ' +
      'abandona a natureza da nossa raça.',
    notas:
      'A dicotomia miraculis/injuriis é a expressão concreta da distinção de naturezas: ' +
      'o que é divino (milagres) e o que é humano (sofrimento) coexistem na mesma pessoa.',
  },
  {
    numero: 'VI',
    titulo: 'Refutação de Eutiques',
    latim:
      'Qui enim verus est Deus, idem verus est homo, et nullum est in hac unitate ' +
      'mendacium, dum invicem sunt et humilitas hominis et altitudo Deitatis.',
    pt:
      'Pois aquele que é verdadeiro Deus, o mesmo é verdadeiro homem, e não há mentira ' +
      'alguma nessa unidade, quando estão em recíproca comunhão tanto a humildade do ' +
      'homem como a altura da divindade.',
    notas:
      'A insistência em "verus Deus, verus homo" (verdadeiro Deus, verdadeiro homem) é ' +
      'dirigida diretamente contra Eutiques, que negava a realidade da humanidade de Cristo.',
  },
];

export const trechosChaveLatim = [
  {
    trecho:
      'Agit enim utraque forma cum alterius communione quod proprium est, Verbo scilicet ' +
      'operante quod Verbi est, et carne exsequente quod carnis est.',
    traducao:
      'Pois cada uma das duas formas opera, em comunhão com a outra, aquilo que lhe é ' +
      'próprio: o Verbo, evidentemente, realizando o que é do Verbo, e a carne executando ' +
      'o que é da carne.',
    significado:
      'A frase mais famosa e mais teologicamente densa do Tomo. Estabelece o princípio da ' +
      'distinção das operações (uma por natureza) na unidade do agente (a única pessoa).',
  },
  {
    trecho:
      'Salva igitur proprietate utriusque naturae et substantiae, et in unam coeunte personam, ' +
      'suscepta est a maiestate humilitas, a virtute infirmitas, ab aeternitate mortalitas.',
    traducao:
      'Salva, portanto, a propriedade de cada natureza e substância, e convergindo ambas em ' +
      'uma só pessoa, foi assumida pela majestade a humildade, pela força a fraqueza, pela ' +
      'eternidade a mortalidade.',
    significado:
      'Formulação sintética da estrutura ontológica do Cristo: dois planos preservados + ' +
      'uma pessoa que os unifica.',
  },
  {
    trecho:
      'Filius Dei, mundi contagia non pertimescens, factus est filius hominis; totum verum ' +
      'hominem, et totum verum Deum, in una persona, ad unius eiusdem personae salutem gestans.',
    traducao:
      'O Filho de Deus, não temendo os contágios do mundo, tornou-se Filho do Homem; carregando ' +
      'na unidade de uma só pessoa o homem inteiro verdadeiro e o Deus inteiro verdadeiro, para ' +
      'a salvação de uma e mesma pessoa.',
    significado:
      'Formulação axiomática: a salvação exige que Cristo seja "totum verum hominem" e ' +
      '"totum verum Deum" — nada da humanidade pode faltar, nada da divindade pode ser diminuído.',
  },
];

export const recepcaoSessao2 = {
  titulo: 'Recepção na Sessão 2 (10 de outubro de 451)',
  descricao:
    'O Tomo foi lido em tradução grega para a assembleia. A maioria dos bispos aclamou ' +
    'imediatamente: "Esta é a fé dos Padres! Todos assim cremos!". Mas 15–20 bispos ' +
    '(Ilírico e Palestina) manifestaram reservas sobre "agit utraque forma" (soava ' +
    'nestoriano) e sobre a linguagem "duas naturezas". Cinco dias de exame comparativo ' +
    'com Cirilo foram concedidos. Na Sessão 4 (17 de outubro), os bispos hesitantes ' +
    'subscreveram o Tomo, e a aclamação "PETRUS PER LEONEM ITA LOCUTUS EST!" consagrou ' +
    'a aceitação.',
};
