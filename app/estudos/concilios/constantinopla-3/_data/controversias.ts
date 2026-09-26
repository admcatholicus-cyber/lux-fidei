export const resumoControversias =
  "Apesar da aparente unanimidade do Horos final, o VI Concílio Ecumênico foi atravessado por tensões profundas que revelam a complexidade do processo conciliar. As 18 sessões ao longo de 10 meses testemunharam falsificações documentais deliberadas, a deposição dramática de um patriarca, um 'milagre' fracassado que provocou gargalhadas na assembleia, a morte do papa que convocara o concílio durante os próprios trabalhos, a condenação sem precedentes de um papa anterior, e debates acalorados sobre o papel do imperador como presidente. Estas controvérsias não diminuem a autoridade do concílio, mas demonstram que a definição dogmática emergiu de um processo real de discernimento, confronto e deliberação — não de uma imposição mecânica."

export const controversias = [
  {
    id: 1,
    titulo: "A Autenticidade das Citações Patrísticas de Macário",
    resumo:
      "O patriarca Macário de Antioquia apresentou um extenso dossiê de citações patrísticas em favor do monotelismo, mas a verificação com manuscritos autênticos revelou que várias haviam sido adulteradas ou interpoladas por seu secretário Estêvão.",
    detalhes:
      "Nas sessões 5 e 6 (dezembro de 680 e fevereiro de 681), Macário apresentou um dossiê elaborado contendo trechos atribuídos a Gregório de Nazianzo, Pseudo-Dionísio Areopagita, Cirilo de Alexandria e Atanásio, todos supostamente apoiando a doutrina de uma vontade e uma operação em Cristo. Os legados papais, desconfiados da precisão das citações, solicitaram a comparação com os códices originais preservados na Biblioteca Imperial de Constantinopla e nos manuscritos trazidos de Roma. A verificação, conduzida durante o intervalo de dois meses entre as sessões 5 e 6, revelou que pelo menos meia dúzia de citações haviam sido alteradas: palavras-chave haviam sido adicionadas, omitidas ou substituídas para inverter o sentido dos textos. O caso mais flagrante envolvia um trecho do Pseudo-Dionísio em que a expressão 'uma nova operação teândrica' fora interpolada num contexto que originalmente falava de 'uma nova maneira de operar'. O monge Estêvão, secretário de Macário e responsável pela preparação do dossiê, foi confrontado com as evidências na sessão 6 e tentou justificar as alterações como 'correções necessárias', mas a assembleia rejeitou sua explicação com indignação. A descoberta das falsificações foi o momento decisivo do concílio: destruiu a credibilidade da defesa monotelita e demonstrou que a tradição patrística genuína apoiava as duas vontades.",
    partesEnvolvidas: [
      "Macário de Antioquia (acusado)",
      "Estêvão, monge e secretário de Macário (falsificador)",
      "Legados papais Teodoro, Jorge e João (denunciantes)",
      "Bibliotecários imperiais de Constantinopla (peritos)",
    ],
    resultado:
      "As citações falsificadas foram expostas publicamente. A credibilidade do monotelismo como doutrina patrística foi destruída. Estêvão foi deposto na sessão 9 e Macário na sessão 8.",
    consequenciaDeLongoPrazo:
      "O episódio tornou-se um exemplo clássico de como a má fé documental pode contaminar debates teológicos. Na historiografia moderna, serve como advertência sobre a necessidade de crítica textual rigorosa ao estudar fontes patrísticas. O caso também reforçou a autoridade dos legados papais como guardiões da tradição textual autêntica.",
    fontes: [
      "ACO II.2, sessões 5–6 (ed. Riedinger)",
      "Hefele-Leclercq, Histoire des Conciles, III.2",
      "Hovorun, Will, Action and Freedom, pp. 145–152",
    ],
  },
  {
    id: 2,
    titulo: "O 'Milagre' Fracassado de Policrônio",
    resumo:
      "O monge monotelita Policrônio tentou provar a verdade de sua doutrina ressuscitando um cadáver diante da assembleia conciliar na sessão 10. O morto não respondeu, e o episódio terminou em gargalhadas e na deposição imediata de Policrônio.",
    detalhes:
      "Na sessão 10 (20 de março de 681), após a deposição de Macário (sessão 8) e de Estêvão (sessão 9), o monge Policrônio era o último defensor ativo do monotelismo no concílio. Numa tentativa desesperada de reverter o curso dos eventos, Policrônio declarou diante do imperador e da assembleia que poderia provar a verdade da doutrina de uma vontade realizando um milagre: ressuscitar um cadáver. O imperador Constantino IV, cético mas curioso — e talvez desejoso de encerrar definitivamente a questão de maneira espetacular — autorizou o experimento. Um corpo foi trazido ao Palácio de Trullo e colocado diante da assembleia. Policrônio aproximou-se, colocou seu livro de orações sobre o peito do morto, recitou uma prece monotelita e esperou. O cadáver, previsivelmente, permaneceu imóvel. Segundo as atas, Policrônio teria murmurado: 'O morto não é digno de ouvir a verdade.' A assembleia irrompeu em gargalhadas e vaias, e o monge foi imediatamente aclamado como anátema e deposto. O episódio é um dos mais extraordinários e grotescos da história dos concílios ecumênicos.",
    partesEnvolvidas: [
      "Policrônio, monge monotelita (autor do 'milagre')",
      "Imperador Constantino IV (autorizou o experimento)",
      "Legados papais e bispos (testemunhas céticas)",
    ],
    resultado:
      "Policrônio foi deposto e anatematizado na mesma sessão. O monotelismo perdeu seu último defensor ativo da maneira mais humilhante possível. A assembleia ficou unanimemente diotelita.",
    consequenciaDeLongoPrazo:
      "O episódio é frequentemente citado como exemplo de como a teologia não pode ser resolvida por taumaturgia e de como o desespero pode levar a atos de irracionalidade. Na tradição bizantina, tornou-se uma anedota proverbial sobre a futilidade de provar heresias com milagres.",
    fontes: [
      "ACO II.2, sessão 10 (ed. Riedinger)",
      "Teófanes, Chronographia AM 6173",
      "Hefele-Leclercq, Histoire des Conciles, III.2, pp. 532–534",
    ],
  },
  {
    id: 3,
    titulo: "A Condenação do Papa Honório I",
    resumo:
      "O anátema contra o Papa Honório I (625–638) é o evento mais controverso de Constantinopla III e o mais debatido de toda a história do papado. É o único caso em que um papa foi formalmente anatematizado por um concílio ecumênico.",
    detalhes:
      "Nas sessões 11 a 13 (abril de 681), o concílio examinou a correspondência entre o patriarca Sérgio I e o Papa Honório I (634/635). As cartas revelaram que Honório, respondendo a uma pergunta tendenciosa de Sérgio sobre 'uma ou duas operações', aconselhou evitar a discussão terminológica e confessar 'uma vontade' (hen thelema) em Cristo, argumentando que falar de duas vontades sugeriria conflito interno. Embora Honório provavelmente usasse 'vontade' em sentido moral (orientação, disposição) e não técnico (faculdade natural), a expressão foi instrumentalizada pelos monotelitas durante décadas como prova de que Roma apoiava sua doutrina. Na sessão 12, os legados papais notavelmente não defenderam seu predecessor — um silêncio que sugere que suas instruções de Roma previam a possibilidade da condenação. Na sessão 13, a assembleia pronunciou o anátema: 'Honório, que foi papa da antiga Roma, porque descobrimos em suas cartas a Sérgio que ele seguiu em tudo a sua opinião e confirmou seus dogmas ímpios.' O Papa Leão II confirmou o anátema em 682, mas com a nuance crucial de que Honório foi condenado por 'negligência' (imprudentia) e 'traição por omissão', não por ensino herético formal. Esta distinção seria o fundamento da defesa católica durante o Vaticano I (1870).",
    partesEnvolvidas: [
      "Papa Honório I (condenado, já falecido)",
      "Patriarca Sérgio I (correspondente, já falecido)",
      "Legados papais Teodoro, Jorge e João (não defenderam Honório)",
      "Papa Leão II (confirmou o anátema com nuance em 682)",
      "Assembleia conciliar (pronunciou o anátema)",
    ],
    resultado:
      "Honório I foi formalmente anatematizado e incluído na lista dos heresiarcas monotelitas no Horos. O anátema foi confirmado pelo Papa Leão II em 682.",
    consequenciaDeLongoPrazo:
      "O caso Honório tornou-se o precedente mais citado em todos os debates sobre a infalibilidade papal. Durante o Concílio Vaticano I (1870), a minoria galicana o utilizou como prova de que papas podem errar em matéria de fé, enquanto a maioria ultramontana argumentou que Honório falou como doutor privado, não ex cathedra. A definição da infalibilidade (Pastor Aeternus) foi cuidadosamente redigida com condições estritas (ex cathedra, matéria de fé e moral, intenção de obrigar toda a Igreja) que excluem a carta de Honório. O debate permanece vivo no diálogo católico-ortodoxo.",
    fontes: [
      "ACO II.2, sessões 11–13 (ed. Riedinger)",
      "Leão II, Ep. ad Constantinum (PL 96.399–404)",
      "Schatz, Klaus. Papal Primacy, cap. 4",
      "Hefele-Leclercq, Histoire des Conciles, III.2",
      "Hovorun, Will, Action and Freedom, pp. 160–170",
    ],
  },
  {
    id: 4,
    titulo: "A Morte de Agatão I Durante o Concílio",
    resumo:
      "O Papa Agatão I, cuja carta dogmática fora a base teológica do concílio, morreu em 10 de janeiro de 681 — entre as sessões 5 e 6 —, deixando o concílio sem papa reinante por mais de oito meses.",
    detalhes:
      "Agatão I morreu em 10 de janeiro de 681, aos supostos 107 anos de idade (provavelmente exagerado, mas certamente muito idoso), enquanto o concílio estava em pleno andamento em Constantinopla. A notícia de sua morte levou semanas para chegar à capital bizantina, e o concílio prosseguiu sem papa reinante durante um período de mais de oito meses. A situação era canonicamente delicada: o concílio havia sido convocado em comunhão com um papa que já não estava vivo, e sua carta dogmática — aclamada como 'Pedro falando por Agatão' na sessão 4 — era agora o testamento de um pontífice falecido. O sucessor de Agatão, Leão II, foi eleito em janeiro de 681, mas sua consagração foi adiada até 17 de agosto de 682 por razões políticas (o exarca de Ravena exigia a aprovação imperial, e as negociações sobre os cânones do Trullo complicaram o processo). Durante este interregno, os legados papais continuaram a presidir o concílio com base na autoridade que Agatão lhes havia conferido, mas a ausência de um papa vivo gerou incertezas sobre a validade canônica das decisões tomadas após janeiro de 681. A questão foi resolvida quando Leão II, finalmente consagrado, confirmou retroativamente todas as decisões do concílio em suas cartas de 682.",
    partesEnvolvidas: [
      "Papa Agatão I (falecido durante o concílio)",
      "Papa Leão II (sucessor, consagrado 17 meses depois)",
      "Legados papais (continuaram presidindo sem papa vivo)",
      "Imperador Constantino IV (garantiu a continuidade dos trabalhos)",
    ],
    resultado:
      "O concílio prosseguiu sob a presidência dos legados e do imperador. Leão II confirmou retroativamente todas as decisões em 682, resolvendo a crise canônica.",
    consequenciaDeLongoPrazo:
      "O episódio estabeleceu um precedente importante sobre a continuidade da autoridade conciliar durante um interregno papal. Também demonstrou a dependência dos concílios ecumênicos da confirmação papal para sua validade canônica — um princípio que seria central na eclesiologia católica posterior.",
    fontes: [
      "Liber Pontificalis (vidas de Agatão e Leão II)",
      "ACO II.2, sessões 5–6",
      "Ekonomou, Andrew. Byzantine Rome and the Greek Popes, pp. 195–200",
    ],
  },
  {
    id: 5,
    titulo: "O Papel do Imperador: Symphonia ou Cesaropapismo?",
    resumo:
      "Constantino IV presidiu pessoalmente as primeiras 11 sessões, sentado num trono elevado acima de bispos e legados papais. O debate sobre se isso constitui 'cesaropapismo' ou 'symphonia legítima' permanece vivo na historiografia.",
    detalhes:
      "O imperador Constantino IV Pogonato presidiu pessoalmente as sessões 1 a 11 do concílio, sentado num trono elevado no centro do Palácio de Trullo, ladeado por sua guarda palaciana e por altos funcionários da corte. Os legados papais ocupavam os assentos de honra à direita do imperador; o patriarca Jorge I de Constantinopla, à esquerda. A presença imperial era ostensiva e coercitiva: o imperador controlava a agenda, concedia ou negava a palavra, e sua guarda garantia a ordem. Os críticos (especialmente historiadores ocidentais do século XIX, como Hefele) interpretaram esta presença como 'cesaropapismo' — a subordinação da Igreja ao Estado, em que o imperador ditava a teologia por decreto. Os defensores (historiadores bizantinos e ortodoxos, como Meyendorff) argumentam que Constantino IV agiu dentro dos limites da 'symphonia' legítima: ele convocou o concílio e garantiu a ordem, mas não impôs uma fórmula teológica própria. Diferentemente de seu avô Heráclio (Ecthesis) e de seu pai Constante II (Typos), Constantino IV permitiu que os legados papais lessem a carta dogmática de Agatão, que os bispos examinassem as fontes patrísticas e que o concílio chegasse a suas próprias conclusões. O fato de o Horos final refletir a teologia de Roma (Agatão/Máximo) e não uma fórmula imperial é a prova mais forte de que o imperador não ditou o resultado.",
    partesEnvolvidas: [
      "Imperador Constantino IV (presidente honorário)",
      "Legados papais (presidentes teológicos)",
      "Patriarca Jorge I de Constantinopla (anfitrião)",
      "Historiadores modernos (Hefele vs. Meyendorff)",
    ],
    resultado:
      "O concílio produziu uma definição alinhada com a teologia de Roma, não com uma fórmula imperial. Constantino IV assinou o Horos como primeiro signatário, mas o conteúdo teológico era o de Agatão/Máximo.",
    consequenciaDeLongoPrazo:
      "O debate sobre symphonia vs. cesaropapismo em Constantinopla III é um microcosmo do debate mais amplo sobre a relação Igreja-Estado no Império Bizantino. O caso de 681 é frequentemente citado como um dos exemplos mais equilibrados de symphonia, em contraste com os casos de Heráclio e Constante II, que são exemplos clássicos de cesaropapismo.",
    fontes: [
      "ACO II.2, sessões 1–11",
      "Teófanes, Chronographia AM 6172–6173",
      "Meyendorff, John. Byzantine Theology, pp. 35–40",
      "Hefele-Leclercq, Histoire des Conciles, III.2",
    ],
  },
  {
    id: 6,
    titulo: "A Ecumenicidade sem Alexandria e Jerusalém",
    resumo:
      "As sedes patriarcais de Alexandria e Jerusalém estavam sob domínio do Califado Omíada e não puderam enviar seus patriarcas. O concílio é verdadeiramente ecumênico sem a presença física de dois dos cinco patriarcados?",
    detalhes:
      "Desde o Concílio de Calcedônia (451), a ecumenicidade de um concílio era associada à participação dos cinco patriarcados (Roma, Constantinopla, Alexandria, Antioquia, Jerusalém). Em 680, no entanto, Alexandria estava sob domínio árabe desde 641 e Jerusalém desde 638. Seus patriarcas calcedonianos (melquitas) eram figuras marginais, sem jurisdição efetiva sobre as populações cristãs locais (dominadas por coptas e siríacos não-calcedonianos) e sem liberdade de movimento sob o estatuto de dhimmi. Ambos os patriarcados foram representados no concílio por legados simbólicos, cuja autoridade era mais formal do que substantiva. A questão da ecumenicidade sem Alexandria e Jerusalém foi levantada por alguns bispos durante as sessões iniciais, mas foi rapidamente superada por dois argumentos: 1) os legados, embora de autoridade limitada, representavam juridicamente suas sedes; 2) a ausência física era involuntária (causada pela conquista árabe), não por cisma ou recusa. Além disso, a presença dos legados papais (representando o Ocidente inteiro) e do patriarca de Constantinopla (representando o Oriente bizantino) foi considerada suficiente para garantir a representatividade da Igreja universal. O patriarcado de Antioquia estava representado por Macário (embora ele residisse em Constantinopla, não em Antioquia, que também estava sob domínio árabe).",
    partesEnvolvidas: [
      "Legados de Alexandria (representação simbólica)",
      "Legados de Jerusalém (representação simbólica)",
      "Patriarca Jorge I de Constantinopla (sede anfitriã)",
      "Legados papais (representando Roma e o Ocidente)",
    ],
    resultado:
      "A ecumenicidade do concílio foi aceita como válida apesar da ausência física de Alexandria e Jerusalém. A representação por legados foi considerada suficiente.",
    consequenciaDeLongoPrazo:
      "O precedente de 681 foi invocado em concílios posteriores que também enfrentaram a ausência de patriarcados orientais (especialmente após o Grande Cisma de 1054). A questão permanece relevante no diálogo ecumênico moderno: um concílio pode ser 'ecumênico' sem a participação de todas as tradições cristãs?",
    fontes: [
      "ACO II.2, sessão 1 (credenciais)",
      "Hefele-Leclercq, Histoire des Conciles, III.2, pp. 495–498",
      "Meyendorff, John. Byzantine Theology, pp. 38–39",
    ],
  },
  {
    id: 7,
    titulo: "A Recepção Romana e a Nuance de Leão II sobre Honório",
    resumo:
      "O Papa Leão II confirmou todas as decisões do concílio em 682, mas introduziu uma nuance crucial na interpretação do anátema de Honório: condenou-o por 'negligência', não por 'heresia formal'. Esta distinção moldou todo o debate posterior.",
    detalhes:
      "Após a consagração de Leão II em 17 de agosto de 682, o novo papa recebeu as atas do concílio e as examinou cuidadosamente. Em suas cartas de confirmação — ao imperador Constantino IV, aos legados e aos bispos da Hispânia — Leão II aceitou integralmente o Horos e todos os anátemas, incluindo o de Honório I. No entanto, sua linguagem ao se referir a Honório foi significativamente diferente da do Horos conciliar. Enquanto o concílio condenara Honório por 'seguir em tudo a opinião de Sérgio e confirmar seus dogmas ímpios' (linguagem que sugere heresia formal), Leão II precisou: 'Honório, que em vez de santificar esta Igreja Apostólica com a doutrina da tradição apostólica, permitiu que a fé imaculada fosse manchada por uma traição profana.' A palavra-chave é 'permitiu' (permisit): Honório não ensinou a heresia, mas a permitiu por negligência. Na carta aos bispos da Hispânia, Leão II foi ainda mais explícito: 'Honório não extinguiu a chama nascente da heresia, como convinha à autoridade apostólica, mas a alimentou por negligência (negligentia).' Esta distinção entre heresia formal (ensino positivo de erro) e negligência pastoral (omissão culposa) tornou-se a interpretação oficial da Igreja Católica sobre o caso Honório e seria decisiva no debate sobre a infalibilidade papal no Vaticano I (1870). Os ultramontanos argumentaram que, como Honório não falou ex cathedra e não ensinou heresia formal, sua condenação não contradiz a infalibilidade papal.",
    partesEnvolvidas: [
      "Papa Leão II (autor da nuance)",
      "Imperador Constantino IV (destinatário da confirmação)",
      "Bispos da Hispânia (destinatários da carta explicativa)",
      "Concílio Vaticano I (1870, debate posterior)",
    ],
    resultado:
      "Leão II confirmou o concílio integralmente, mas sua nuance sobre Honório criou uma tradição interpretativa que distingue entre heresia formal e negligência pastoral. Esta distinção foi aceita tanto no Oriente quanto no Ocidente durante a Idade Média.",
    consequenciaDeLongoPrazo:
      "A nuance de Leão II tornou-se o fundamento da defesa católica da infalibilidade papal contra o argumento do caso Honório. Durante o Vaticano I (1870), Manning, Newman e a maioria ultramontana citaram Leão II para demonstrar que a Igreja sempre distinguiu entre o ensino ex cathedra (infalível) e as declarações privadas ou negligentes de um papa (falíveis). A definição do Pastor Aeternus incorpora implicitamente esta distinção ao limitar a infalibilidade a condições estritas que a carta de Honório não satisfaz.",
    fontes: [
      "Leão II, Ep. ad Constantinum IV (PL 96.399–404)",
      "Leão II, Ep. ad Episcopos Hispaniae (PL 96.405–414)",
      "Schatz, Klaus. Papal Primacy, cap. 4",
      "Hefele-Leclercq, Histoire des Conciles, III.2, pp. 560–565",
      "Denzinger, Enchiridion Symbolorum, nn. 550–552",
    ],
  },
]