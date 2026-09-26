// ═══════════════════════════════════════════════════════════════════════════
// O TOMO DE LEÃO A FLAVIANO (EPISTULA 28) — 13 DE JUNHO DE 449
// ═══════════════════════════════════════════════════════════════════════════
// Escrito por Leão I Magno em resposta ao caso Eutiques, o Tomo tornou-se
// o documento cristológico mais influente da tradição latina e a base
// arquitetônica da Definição de Calcedônia. "Pedro falou por Leão!"
// ═══════════════════════════════════════════════════════════════════════════

export const contexto: { titulo: string; descricao: string } = {
  titulo: "Contexto: por que e como o Tomo foi escrito",
  descricao:
    "No final de 448, o arquimandrita Eutiques, superior de um mosteiro em Constantinopla e padrinho " +
    "de batismo do poderoso eunuco Crisáfio, foi denunciado por Eusébio de Dorileia perante o " +
    "patriarca Flaviano de Constantinopla. Acusado de negar as duas naturezas de Cristo depois da " +
    "união e de rejeitar o homoousios hēmin (consubstancial a nós), Eutiques foi condenado no chamado " +
    "Sínodo Endêmico de Constantinopla (novembro de 448) e deposto. Recusando-se a aceitar a " +
    "condenação, apelou simultaneamente a Roma, a Alexandria (Dioscoro), a Jerusalém e a Tessalônica. " +
    "Flaviano, por sua vez, escreveu ao papa Leão I expondo o caso. " +
    "\n\n" +
    "Leão, então com cerca de 60 anos e no sexto ano de seu pontificado, respondeu com uma carta " +
    "dogmática de extraordinária densidade e clareza: a Epistula 28 ad Flavianum, datada de 13 de " +
    "junho de 449 e conhecida desde a Antiguidade simplesmente como \"o Tomo\" (Tomus). O texto foi " +
    "composto em latim clássico e altamente elaborado, provavelmente com auxílio do arquidiácono " +
    "Prospero de Aquitânia (o famoso teólogo agostiniano). Leão pretendia que o Tomo fosse lido no " +
    "concílio que Teodósio II acabara de convocar para Éfeso (agosto de 449), oferecendo assim a " +
    "voz doutrinal da Sé Apostólica. " +
    "\n\n" +
    "Dioscoro de Alexandria, presidindo o Latrocínio de Éfeso, IMPEDIU a leitura do Tomo. Os legados " +
    "papais foram silenciados; Flaviano foi deposto e espancado, morrendo três dias depois. Leão " +
    "denunciou publicamente a assembleia como \"non iudicium sed latrocinium\" (\"não um concílio, " +
    "mas um bando de ladrões\"). Foi apenas dois anos depois, em Calcedônia (10 de outubro de 451, " +
    "Sessão 2), que o Tomo foi finalmente lido — e triunfou.",
};

export const resumoTeologico: {
  titulo: string;
  pontos: { titulo: string; descricao: string }[];
} = {
  titulo: "Os seis pilares teológicos do Tomo",
  pontos: [
    {
      titulo: "1. Dualidade de naturezas na unidade da única pessoa",
      descricao:
        "O eixo estrutural de todo o Tomo é a afirmação simultânea de duas naturezas (\"utraque " +
        "natura\", \"utraque forma\") na unidade de uma única pessoa (\"unius eiusdemque personae\"). " +
        "Leão não usa vocabulário técnico grego (physis, hypostasis), mas o vocabulário latino " +
        "clássico (persona, natura, forma, substantia), traduzindo a intuição cirílica em categorias " +
        "ocidentais. Cristo é \"um só e o mesmo verdadeiro Filho de Deus e verdadeiro Filho do " +
        "Homem\": mesmo sujeito, dupla natureza.",
    },
    {
      titulo: "2. A communicatio idiomatum (comunicação de propriedades)",
      descricao:
        "O Tomo articula pela primeira vez com clareza sistemática a doutrina da communicatio " +
        "idiomatum: os atributos de cada natureza podem ser predicados da única pessoa. Assim, é " +
        "verdadeiro dizer \"o Filho de Deus foi crucificado\" (embora a divindade não sofra em si " +
        "mesma) e \"o Filho do Homem desceu do céu\" (embora a humanidade tenha começado em Maria). " +
        "A base ontológica é a única pessoa que subsiste em duas naturezas.",
    },
    {
      titulo: "3. A realidade integral da humanidade de Cristo",
      descricao:
        "Contra Eutiques, Leão insiste na plena e integral humanidade de Cristo: um corpo verdadeiro " +
        "(tomado de Maria, consubstancial ao nosso), uma alma racional (contra Apolinário), afetos " +
        "humanos reais (fome, sede, cansaço, tristeza, medo), sofrimento verdadeiro e morte real. A " +
        "humanidade não é uma aparência nem uma humanidade transformada ou de qualidade especial: é " +
        "a nossa humanidade, exceto no pecado. \"O que não é assumido não é curado\" (princípio " +
        "capadócio implícito).",
    },
    {
      titulo: "4. A realidade permanente da divindade",
      descricao:
        "Simultaneamente, o Tomo afirma que na Encarnação a divindade permanece integralmente o que " +
        "era: eterna, imutável, onipotente, criadora. O Verbo não sofre em sua divindade nem se " +
        "diminui pela assunção da carne. A kenosis (Fp 2) é entendida como acréscimo (humanidade " +
        "assumida), não como diminuição da divindade. Os milagres, a ressurreição, o poder de perdoar " +
        "pecados manifestam a divindade em ação através da humanidade.",
    },
    {
      titulo: "5. A frase-chave: \"Agit utraque forma cum alterius communione quod proprium est\"",
      descricao:
        "A fórmula mais citada do Tomo: \"cada forma opera o que lhe é próprio em comunhão com a " +
        "outra\". O Verbo faz o que é próprio do Verbo (milagres, ressurreição); a carne faz o que é " +
        "próprio da carne (nascer, comer, sofrer, morrer). Mas cada uma opera \"em comunhão com a " +
        "outra\" (cum alterius communione), porque a única pessoa é o sujeito de ambas as operações. " +
        "Esta é a base latina do que Calcedônia formalizará com os quatro advérbios apofáticos.",
    },
    {
      titulo: "6. Refutação simultânea de Eutiques e Nestório",
      descricao:
        "O Tomo é, estruturalmente, uma refutação bilateral: contra Eutiques, afirma que a humanidade " +
        "não é absorvida nem transformada, permanecendo consubstancial à nossa; contra Nestório " +
        "(implicitamente, mas com clareza), afirma que Cristo é um único sujeito pessoal, não dois. " +
        "Essa dupla frente antecipa exatamente a estrutura da Definição calcedoniana, com seus quatro " +
        "advérbios (dois anti-monofisitas, dois anti-nestorianos).",
    },
  ],
};

export const textoIntegralPT: string =
  "Leão, bispo, ao amado irmão Flaviano. " +
  "\n\n" +
  "I. Depois de ter lido as cartas de tua caridade, cuja tardança nos causou admiração, e depois " +
  "de haver examinado as atas do sínodo dos bispos, ficamos afinal informados sobre o escândalo " +
  "que surgiu entre vós contra a integridade da fé; e o que antes nos parecia obscuro tornou-se " +
  "agora claro e manifesto. Nesse assunto, Eutiques — que, pelo nome de presbítero, parecia ser " +
  "digno de honra — mostra-se homem muito imprudente e excessivamente ignorante, de modo que " +
  "também a ele se aplica aquilo que o profeta disse: \"Não quis compreender para bem obrar; meditou " +
  "iniquidade no seu leito\" (Sl 35,4). " +
  "\n\n" +
  "II. Ignora, portanto, o que se deve pensar sobre a encarnação do Verbo de Deus, e não quer, para " +
  "obter a luz da inteligência, aplicar-se com esforço à ampla extensão das Sagradas Escrituras. " +
  "Que ao menos tivesse escutado com atenção diligente aquela profissão geral e concorde pela qual " +
  "todo o povo dos fiéis confessa crer em Deus Pai onipotente, e em Jesus Cristo, seu Filho único, " +
  "nosso Senhor, que nasceu do Espírito Santo e da Virgem Maria! Estas três afirmações destroem as " +
  "invenções de quase todos os hereges. Pois, quando se crê em Deus tanto onipotente quanto Pai, " +
  "prova-se que o Filho é coeterno a ele, em nada diferindo do Pai, porque nasceu Deus de Deus, " +
  "onipotente do Onipotente, coeterno do Eterno; não posterior no tempo, não inferior no poder, não " +
  "dessemelhante na glória, não separado na essência. E o mesmo Filho unigênito e sempiterno do Pai " +
  "sempiterno nasceu do Espírito Santo e da Virgem Maria. Este nascimento temporal em nada diminuiu, " +
  "em nada acrescentou àquele divino e sempiterno nascimento; mas totalmente se ordenou à restauração " +
  "do homem enganado, para que vencesse a morte e destruísse com sua virtude o diabo que tinha o " +
  "império da morte (cf. Hb 2,14). " +
  "\n\n" +
  "III. Foi gerado, portanto, o Filho de Deus, descendo do seu trono celestial e não se afastando da " +
  "glória do Pai, mediante uma nova ordem, por um novo nascimento. Nova ordem: porque, invisível " +
  "nos seus, tornou-se visível nos nossos; incompreensível quis ser compreendido; permanecendo " +
  "anterior aos tempos, começou a ser no tempo; Senhor do universo, ocultando a imensidão de sua " +
  "majestade, tomou a forma de servo; Deus impassível não desdenhou ser homem passível, e imortal " +
  "submeter-se às leis da morte. Novo nascimento: porque uma virgem inviolada, ignorando a " +
  "concupiscência, forneceu a matéria da carne. Foi tomada, pois, do Mãe do Senhor a natureza, não " +
  "a culpa; e no Senhor Jesus Cristo, nascido do ventre da Virgem, porque o nascimento é maravilhoso, " +
  "nem por isso é dessemelhante a nós a natureza. Pois aquele que é verdadeiro Deus, o mesmo é " +
  "verdadeiro homem, e não há mentira alguma nessa unidade, quando estão em recíproca comunhão " +
  "tanto a humildade do homem como a altura da divindade. " +
  "\n\n" +
  "IV. Assim como Deus não se muda pela misericórdia, assim também o homem não é consumido pela " +
  "dignidade. Cada uma das duas formas, com a comunhão da outra, opera o que lhe é próprio: o " +
  "Verbo, evidentemente, realizando o que é do Verbo, e a carne executando o que é da carne. Uma " +
  "delas resplandece com os milagres, a outra sucumbe às injúrias. E, assim como o Verbo não se " +
  "afasta da igualdade da glória paterna, assim a carne não abandona a natureza da nossa raça. Pois " +
  "um só e o mesmo — como muitas vezes é preciso repetir — é verdadeiro Filho de Deus e verdadeiro " +
  "Filho do homem. Deus: pelo fato de que \"no princípio era o Verbo, e o Verbo estava com Deus, e " +
  "o Verbo era Deus\" (Jo 1,1). Homem: pelo fato de que \"o Verbo se fez carne e habitou entre nós\" " +
  "(Jo 1,14). Deus: pelo fato de que \"todas as coisas por ele foram feitas, e sem ele nada foi feito " +
  "do que foi feito\" (Jo 1,3). Homem: pelo fato de que \"nascido de mulher, nascido sob a lei\" " +
  "(Gl 4,4). " +
  "\n\n" +
  "V. O nascimento da carne é manifestação da natureza humana; o parto da Virgem é indício da " +
  "virtude divina. A infância do menino se mostra pela humildade dos envoltórios; a grandeza do " +
  "Altíssimo é declarada pelas vozes dos anjos. Semelhante ao rudimento dos homens é aquele que " +
  "Herodes procura ímpio matar; mas o Senhor de todos é aquele a quem os magos alegram-se em " +
  "adorar suplicantes. Já quando veio ao batismo de João seu precursor, para que não se ocultasse " +
  "que a divindade se escondia sob o véu da carne, a voz do Pai vinda do céu trovejou: \"Este é o " +
  "meu Filho amado, no qual pus toda minha complacência\" (Mt 3,17). Aquele, portanto, a quem, como " +
  "homem, a astúcia diabólica tenta, é servido pela ministração dos anjos como Deus. Ter fome, ter " +
  "sede, cansar-se e dormir é evidentemente humano; mas alimentar cinco mil homens com cinco pães, " +
  "e conceder à samaritana a água viva cujo gole faz com que aquele que a bebe já não mais tenha " +
  "sede, andar sobre o dorso do mar com pés que não se afundam e, aplacando as vagas revoltas, " +
  "reprimir os furores da tempestade, é sem dúvida divino. " +
  "\n\n" +
  "VI. Ora, para omitir muitas outras coisas: não é da mesma natureza chorar por amigo morto com " +
  "sentimento de misericórdia, e chamá-lo à vida, removida a pedra do sepulcro em que jazia há " +
  "quatro dias, à ordem da voz que impera; ou pender do lenho, e — mudando os elementos em noite — " +
  "fazer tremer todos os elementos; ou estar traspassado pelos cravos, e abrir aos ladrões que creem " +
  "as portas do paraíso. Assim também, não é da mesma natureza dizer \"Eu e o Pai somos um\" (Jo " +
  "10,30), e dizer: \"O Pai é maior do que eu\" (Jo 14,28). Pois embora no Senhor Jesus Cristo haja " +
  "uma só pessoa de Deus e do homem, todavia de uma coisa provém a injúria comum a ambos e de outra " +
  "a glória comum. Pois dele lhe vem a humanidade, inferior ao Pai; de nós lhe vem a divindade, " +
  "igual ao Pai. " +
  "\n\n" +
  "VII. Por causa, portanto, dessa unidade da pessoa que deve ser reconhecida em ambas as naturezas, " +
  "lê-se que o Filho do Homem desceu do céu, quando o Filho de Deus tomou carne da Virgem da qual " +
  "nasceu; e novamente se diz que o Filho de Deus foi crucificado e sepultado, quando não sofreu " +
  "essas coisas em sua divindade, na qual o Unigênito é coeterno e consubstancial ao Pai, mas na " +
  "fragilidade da natureza humana. Por isso todos confessamos também no símbolo que o Filho unigênito " +
  "de Deus foi crucificado e sepultado, segundo aquilo do Apóstolo: \"Se o tivessem conhecido, jamais " +
  "teriam crucificado o Senhor da glória\" (1Cor 2,8). " +
  "\n\n" +
  "VIII. Se, pois, Eutiques (...) — ele que se orgulha da sabedoria dos velhos — quisesse pensar " +
  "reta e humildemente sobre esse mistério da encarnação, e revolvesse as páginas de toda a Sagrada " +
  "Escritura, encontraria também aquilo que o próprio Senhor perguntou aos discípulos: \"Quem dizem " +
  "os homens que é o Filho do Homem?\" (Mt 16,13); e a resposta de Pedro, respondendo por todos: " +
  "\"Tu és o Cristo, o Filho do Deus vivo\" (Mt 16,16). Merecidamente, portanto, foi declarado " +
  "bem-aventurado pelo Senhor, e recebeu do original da própria Verdade a firmeza do poder, ele que " +
  "em uma só confissão a ambos reconheceu, dizendo: \"Tu és o Cristo\", isto é, o Filho do Homem, e " +
  "acrescentando: \"o Filho do Deus vivo\". Pois um é insuficiente sem o outro para a salvação, e " +
  "igualmente perigoso é ter crido no Senhor Jesus Cristo ou apenas como Deus sem homem, ou apenas " +
  "como homem sem Deus.";

export const trechosChaveLatim: {
  trecho: string;
  traducao: string;
  significado: string;
}[] = [
  {
    trecho:
      "Agit enim utraque forma cum alterius communione quod proprium est, Verbo scilicet operante " +
      "quod Verbi est, et carne exsequente quod carnis est.",
    traducao:
      "Pois cada uma das duas formas opera, em comunhão com a outra, aquilo que lhe é próprio: o " +
      "Verbo, evidentemente, realizando o que é do Verbo, e a carne executando o que é da carne.",
    significado:
      "A frase mais famosa e mais teologicamente densa do Tomo. Estabelece o princípio da distinção " +
      "das operações (uma por natureza) na unidade do agente (a única pessoa). Cada natureza age " +
      "segundo suas propriedades específicas — os milagres pela divindade, o sofrimento pela " +
      "humanidade — mas sempre \"em comunhão\" (cum alterius communione) com a outra, porque o " +
      "sujeito operante é único. Esta frase foi a mais debatida em Calcedônia: alguns bispos " +
      "orientais temeram que \"agit utraque forma\" (\"cada forma opera\") soasse nestoriano, como " +
      "se houvesse dois sujeitos de operação. Foi preciso demonstrar que forma em latim equivale a " +
      "physis em grego e que a expressão é compatível com Cirilo. Além disso, é a semente teológica " +
      "da doutrina das \"duas energias e duas vontades\" que seria formalizada no III Concílio de " +
      "Constantinopla (681) contra o monotelismo.",
  },
  {
    trecho:
      "Salva igitur proprietate utriusque naturae et substantiae, et in unam coeunte personam, " +
      "suscepta est a maiestate humilitas, a virtute infirmitas, ab aeternitate mortalitas.",
    traducao:
      "Salva, portanto, a propriedade de cada natureza e substância, e convergindo ambas em uma " +
      "só pessoa, foi assumida pela majestade a humildade, pela força a fraqueza, pela eternidade " +
      "a mortalidade.",
    significado:
      "Formulação sintética da estrutura ontológica do Cristo: dois planos preservados (\"salva " +
      "proprietate utriusque naturae\") + uma pessoa que os unifica (\"in unam coeunte personam\"). " +
      "A tríade de contrastes (majestade / humildade, força / fraqueza, eternidade / mortalidade) " +
      "explicita concretamente o que significa a communicatio idiomatum: os predicados de uma " +
      "natureza são atribuídos à pessoa e, através dela, associados aos predicados da outra. A " +
      "Definição de Calcedônia praticamente traduzirá esta frase para o grego: \"sōzomenēs tēs " +
      "idiotētos hekateras physeōs kai eis hen prosōpon syntrechousēs\".",
  },
  {
    trecho:
      "Nec sic nasci potuit conditione mortalium, ut non esset in ipso illa nativitate virtus divina; " +
      "nec sic mori, ut non esset in ipsa morte natura humana.",
    traducao:
      "Nem pôde nascer segundo a condição dos mortais sem que estivesse nesse próprio nascimento a " +
      "virtude divina; nem morrer sem que estivesse na própria morte a natureza humana.",
    significado:
      "Fórmula que explicita a inseparabilidade das duas naturezas em cada momento da economia " +
      "salvífica: mesmo no ato mais \"humano\" (nascer), a divindade está presente; mesmo no ato " +
      "mais associado à finitude (morrer), a humanidade está presente. Nada no Cristo histórico é " +
      "puramente divino ou puramente humano em isolamento — cada evento é simultaneamente divino-humano " +
      "pela união hipostática. Antecipa o advérbio calcedoniano achōristōs (sem separação).",
  },
  {
    trecho:
      "Filius Dei, mundi contagia non pertimescens, factus est filius hominis; totum verum hominem, " +
      "et totum verum Deum, in una persona, ad unius eiusdem personae salutem gestans.",
    traducao:
      "O Filho de Deus, não temendo os contágios do mundo, tornou-se Filho do Homem; carregando na " +
      "unidade de uma só pessoa o homem inteiro verdadeiro e o Deus inteiro verdadeiro, para a " +
      "salvação de uma e mesma pessoa.",
    significado:
      "Formulação axiomática do princípio soteriológico de fundo: a salvação exige que Cristo seja " +
      "\"totum verum hominem\" (homem inteiro e verdadeiro) e \"totum verum Deum\" (Deus inteiro e " +
      "verdadeiro). Nada da humanidade pode faltar (contra Apolinário e Eutiques), nada da divindade " +
      "pode ser diminuído (contra qualquer forma de arianismo residual). O termo \"totum\" é " +
      "programático: aponta para a integridade absoluta de ambas as naturezas na unidade da pessoa.",
  },
];

export const recepcaoEmCalcedonia: {
  titulo: string;
  descricao: string;
  momentos: { titulo: string; descricao: string }[];
} = {
  titulo: "A Recepção do Tomo em Calcedônia (Sessões 2 e 4, outubro de 451)",
  descricao:
    "A recepção do Tomo em Calcedônia não foi imediata nem unânime. Diferentemente da imagem " +
    "posterior de uma aclamação triunfal instantânea, as atas conciliares (ACO II.1.2) preservam " +
    "um processo cuidadoso de leitura, dúvida, exame comparativo com Cirilo e finalmente aclamação. " +
    "Todo esse processo tomou aproximadamente doze dias (10 a 22 de outubro), e envolveu uma " +
    "verdadeira \"cirilianização\" do Tomo pelos bispos orientais como condição para sua aceitação " +
    "final.",
  momentos: [
    {
      titulo: "1. A leitura solene (Sessão 2, 10 de outubro)",
      descricao:
        "Após a leitura dos Credos de Niceia e Constantinopla e das cartas dogmáticas de Cirilo, o " +
        "Tomo foi lido em tradução grega para a assembleia. A maioria dos bispos aclamou " +
        "imediatamente: \"Esta é a fé dos Padres! Esta é a fé dos Apóstolos! Todos assim cremos! " +
        "Anátema a quem não creia assim!\". Mas nem todos aclamaram.",
    },
    {
      titulo: "2. As dúvidas dos bispos ilíricos e palestinos",
      descricao:
        "Cerca de 15 a 20 bispos, principalmente do Ilírico e da Palestina, manifestaram reservas " +
        "sobre três passagens específicas: (a) \"agit utraque forma quod proprium est\" (soava como " +
        "dois sujeitos de operação, quase nestoriano); (b) a distinção nítida entre o que era " +
        "próprio da divindade e da humanidade em cada milagre e paixão; (c) a linguagem \"duas " +
        "naturezas\" (duae naturae) que se afastava do vocabulário cirílico habitual (\"uma natureza " +
        "encarnada\"). Esses bispos pediram tempo para estudar o texto e compará-lo com Cirilo.",
    },
    {
      titulo: "3. Os cinco dias de exame comparativo",
      descricao:
        "Os comissários imperiais concederam cinco dias (11 a 16 de outubro). Uma comissão informal, " +
        "liderada por Anatólio de Constantinopla e incluindo os bispos que haviam manifestado " +
        "dúvidas, examinou o Tomo à luz das cartas de Cirilo — especialmente a Segunda Carta a " +
        "Nestório, a Carta a João de Antioquia (Fórmula de União de 433) e as Doze Anátemas. A " +
        "comissão demonstrou que cada afirmação do Tomo tinha paralelo cirílico e que \"forma\" " +
        "em latim funciona como \"physis\" em grego quando entendida corretamente.",
    },
    {
      titulo: "4. A aclamação triunfal (Sessão 4, 17 de outubro)",
      descricao:
        "Após o exame, os bispos previamente hesitantes subscreveram formalmente o Tomo. A Sessão 4 " +
        "consagrou o resultado com a aclamação célebre que ecoaria por séculos: \"PETRUS PER LEONEM " +
        "ITA LOCUTUS EST!\" (\"Pedro assim falou por meio de Leão!\"), seguida de \"Cirilo assim " +
        "ensinou! Leão e Cirilo ensinam o mesmo! Eterna memória a Cirilo! Anátema a quem não creia " +
        "assim! Esta é a fé dos Apóstolos!\". A aclamação identifica dois elementos: a autoridade " +
        "apostólica de Pedro falando através de Leão (dimensão petrina) E a continuidade com Cirilo " +
        "(dimensão cirílica).",
    },
    {
      titulo: "5. A incorporação na Definição (Sessão 5, 22 de outubro)",
      descricao:
        "Quando finalmente redigida a Definição, o Tomo funcionou como uma das cinco fontes oficiais " +
        "(junto com Niceia, Constantinopla, a 2ª Carta de Cirilo e a Fórmula de União). Várias " +
        "expressões da Definição são traduções gregas diretas de frases latinas do Tomo, " +
        "especialmente a cláusula sobre a preservação das propriedades de cada natureza e a " +
        "convergência em uma pessoa. O Tomo tornou-se assim, junto com Cirilo, uma das duas colunas " +
        "arquitetônicas do calcedonismo.",
    },
    {
      titulo: "6. A ausência estratégica dos bispos egípcios",
      descricao:
        "Os 17 bispos egípcios sobreviventes NÃO subscreveram o Tomo. Prostraram-se aos pés dos " +
        "comissários pedindo dispensa, alegando que não podiam agir sem um novo patriarca de " +
        "Alexandria. Essa recusa marcou o início do rompimento eclesial que se consumaria com o " +
        "linchamento de Proterio em 457 e o surgimento da Igreja Copta não-calcedoniana.",
    },
  ],
};

export const significadoHistorico: string =
  "O Tomo de Leão a Flaviano é, sem exagero, a maior contribuição individual do papado à cristologia " +
  "da Igreja antiga e o texto latino mais influente entre Agostinho e a escolástica. Sua importância " +
  "opera em três planos simultâneos. NO PLANO DOUTRINAL, forneceu a Calcedônia a estrutura conceitual " +
  "que a Definição adotaria: duas naturezas preservadas em uma pessoa única, cada natureza operando " +
  "o que lhe é próprio em comunhão com a outra, a communicatio idiomatum como princípio hermenêutico. " +
  "Sem o Tomo, é difícil imaginar como Calcedônia teria formulado seu equilíbrio entre Alexandria e " +
  "Antioquia. NO PLANO ECLESIOLÓGICO, o Tomo representa o momento em que a Sé de Roma se afirma como " +
  "voz doutrinal com autoridade universal — não apenas como tribunal de apelação, mas como fonte " +
  "positiva de definição dogmática. A aclamação \"Pedro falou por Leão\" tornou-se o texto-prova " +
  "clássico da primazia romana em matéria de fé, citado por praticamente todos os concílios e " +
  "documentos papais subsequentes até o Vaticano I e além. NO PLANO ECUMÊNICO, é significativo que " +
  "o Tomo tenha sido aceito não por si mesmo, mas apenas depois de examinado \"à luz de Cirilo\" — " +
  "revelando o padrão fundamental do calcedonismo: a autoridade romana e a autoridade patrística " +
  "oriental funcionam juntas, nenhuma substituindo a outra. Essa dupla estrutura permanece, para " +
  "católicos e ortodoxos hoje, o modelo ainda buscado de exercício da primazia. Finalmente, no " +
  "plano LITERÁRIO E RETÓRICO, o Tomo é uma obra-prima da prosa latina cristã: densa, rítmica, " +
  "arquitetonicamente perfeita, digna de figurar ao lado das Confissões de Agostinho e da Regra de " +
  "Bento como um dos três grandes textos fundadores da latinidade cristã.";