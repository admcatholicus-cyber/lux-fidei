// estudos/concilios/calcedonia/_data/antecedentes.ts

export const resumoAntecedentes =
  "Os vinte anos que separam o Concílio de Éfeso (431) do Concílio de Calcedônia (451) " +
  "constituem um dos períodos mais turbulentos da história da Igreja. O que começou como " +
  "uma tentativa de reconciliação entre as escolas teológicas de Alexandria e Antioquia " +
  "após a condenação de Nestório rapidamente degenerou em uma luta de poder entre " +
  "patriarcados, facções monásticas e a corte imperial. A morte de Cirilo de Alexandria " +
  "(444) removeu o último grande teólogo capaz de manter o equilíbrio entre a ênfase " +
  "na unidade de Cristo (tradição alexandrina) e a ênfase na dualidade de naturezas " +
  "(tradição antioquena). Seu sucessor, Dioscoro, radicalizou a posição ciriliana até " +
  "o ponto de abraçar o monofisismo de Eutiques, um monge de Constantinopla que ensinava " +
  "que a humanidade de Cristo fora 'absorvida' pela divindade como 'uma gota de mel no " +
  "oceano'. O resultado foi o desastroso Latrocínio de Éfeso (449), um sínodo ilegítimo " +
  "marcado por violência, fraude e a deposição ilegal do patriarca Flavian de " +
  "Constantinopla, que morreria dias depois em consequência dos espancamentos sofridos. " +
  "Somente a morte acidental do imperador Teodósio II (450) e a ascensão do casal " +
  "Marciano-Pulquéria permitiram a convocação de um novo concílio para reparar o " +
  "latrocínio e definir, de uma vez por todas, a fé cristológica da Igreja.";

export interface EventoAntecedente {
  ano: string;
  titulo: string;
  descricao: string;
  importancia: string;
  fontes: string[];
}

export interface PeriodoAntecedente {
  periodo: string;
  titulo: string;
  descricaoGeral: string;
  eventos: EventoAntecedente[];
}

export const antecedentes: PeriodoAntecedente[] = [
  // ═══════════════════════════════════════════════════════
  // PERÍODO 1: 431–443
  // ═══════════════════════════════════════════════════════
  {
    periodo: "431–443",
    titulo: "O Pós-Éfeso e a Frágil Reconciliação",
    descricaoGeral:
      "Após o Concílio de Éfeso (431), que condenou Nestório e definiu Maria como " +
      "Theotokos (Mãe de Deus), a Igreja não encontrou paz. Os bispos orientais " +
      "(antioquenos) recusaram-se a aceitar a deposição de Nestório por considerarem " +
      "o processo irregular — Cirilo de Alexandria abrira o concílio antes da chegada " +
      "da delegação de Roma e dos orientais. Durante dois anos (431–433), as duas " +
      "maiores sedes do Oriente — Alexandria e Antioquia — estiveram em cisma aberto. " +
      "A reconciliação só veio em 433 com a chamada 'Fórmula de União', um compromisso " +
      "teológico redigido principalmente por Teodoreto de Ciro e aceito por Cirilo. " +
      "Mas a paz era superficial: os radicais de ambos os lados — os 'cirilianos duros' " +
      "em Alexandria e os 'nestorianizantes' na Síria e na Pérsia — nunca aceitaram " +
      "o compromisso. A década seguinte (433–443) foi de calma aparente, mas as " +
      "sementes da próxima crise já estavam sendo plantadas nos mosteiros de " +
      "Constantinopla e nas células monásticas do Egito.",

    eventos: [
      {
        ano: "431",
        titulo: "Concílio de Éfeso e condenação de Nestório",
        descricao:
          "Convocado por Teodósio II para resolver a controvérsia entre Cirilo de " +
          "Alexandria e Nestório de Constantinopla sobre o título Theotokos. Cirilo " +
          "abriu o concílio prematuramente (22 de junho), antes da chegada dos bispos " +
          "orientais liderados por João de Antioquia e dos legados papais. Nestório " +
          "foi deposto e exilado. Quando os orientais chegaram (26 de junho), " +
          "realizaram um contra-concílio e depuseram Cirilo. O imperador inicialmente " +
          "anulou ambos os atos, mas depois confirmou a deposição de Nestório.",
        importancia:
          "Definiu dogmaticamente que Maria é Theotokos (Mãe de Deus), não apenas " +
          "Christotokos (Mãe de Cristo). Estabeleceu a unidade pessoal de Cristo " +
          "contra a 'divisão' nestoriana. Porém, a irregularidade processual e a " +
          "ausência dos orientais deixaram uma ferida aberta que levaria diretamente " +
          "à crise de Calcedônia.",
        fontes: [
          "ACO I.1 (Schwartz)",
          "Mansi IV–V",
          "Evágrio, HE I.2–7",
          "Sócrates, HE VII.29–34",
        ],
      },
      {
        ano: "432–433",
        titulo: "Negociações e a Fórmula de União (433)",
        descricao:
          "Após dois anos de cisma entre Alexandria e Antioquia, o imperador Teodósio II " +
          "pressionou ambas as partes a se reconciliarem. O bispo Acácio de Bereia e o " +
          "tribuno Aristolau mediaram as negociações. O resultado foi a 'Fórmula de União' " +
          "(Symbolon), redigida principalmente por Teodoreto de Ciro e enviada por João " +
          "de Antioquia a Cirilo. O texto confessava 'uma união de duas naturezas' " +
          "(henōsis dyo physeōn) e aceitava o título Theotokos, mas também insistia " +
          "na distinção das naturezas — uma concessão à tradição antioquena. Cirilo " +
          "aceitou a fórmula em sua carta Laetentur Caeli (abril de 433), embora " +
          "seus partidários mais radicais (como o arquimandrita Eutiques) a " +
          "considerassem uma traição.",
        importancia:
          "Foi a primeira tentativa oficial de sintetizar as tradições alexandrina " +
          "(ênfase na unidade) e antioquena (ênfase na dualidade). A fórmula " +
          "'duas naturezas em união' antecipou diretamente a linguagem de Calcedônia " +
          "(451). Porém, a ambiguidade proposital do texto — que permitia leituras " +
          "diferentes — garantiu que a controvérsia ressurgisse assim que Cirilo " +
          "morresse.",
        fontes: [
          "Cirilo, Ep. 39 (Laetentur Caeli)",
          "ACO I.1.4",
          "Evágrio, HE I.4",
          "Grillmeier, Christ in Christian Tradition I, pp. 452–462",
        ],
      },
      {
        ano: "435",
        titulo: "Exílio definitivo de Nestório",
        descricao:
          "Nestório, que vivia em um mosteiro nos arredores de Antioquia desde sua " +
          "deposição em 431, foi exilado por ordem imperial para o Grande Oásis de " +
          "Hibis (Kharga), no deserto do Alto Egito — um dos locais mais remotos " +
          "do Império. A decisão foi motivada por pressão de Cirilo e pela " +
          "necessidade política de encerrar a controvérsia. Nestório permaneceria " +
          "no exílio até sua morte (c. 450), escrevendo sua apologia 'O Livro de " +
          "Heráclides de Damasco' (descoberto apenas em 1895 em tradução siríaca).",
        importancia:
          "O exílio de Nestório encerrou a fase 'nestoriana' da controvérsia no " +
          "Império Romano, mas a Igreja do Oriente (Pérsia/Mesopotâmia) — que " +
          "nunca aceitou Éfeso — continuou a venerá-lo como mestre. Sua 'sombra' " +
          "pairaria sobre Calcedônia: os adversários da Definição acusariam os " +
          "calcedonianos de 'nestorianismo disfarçado'.",
        fontes: [
          "Evágrio, HE I.7",
          "Nestório, Liber Heraclidis (trad. siríaca, ed. Bedjan 1910)",
          "Sócrates, HE VII.29",
        ],
      },
      {
        ano: "435–440",
        titulo: "A controvérsia dos 'Três Capítulos' (primeira fase)",
        descricao:
          "Os radicais cirilianos em Alexandria — liderados por clérigos como " +
          "o diácono Teodoro e o presbítero Atanásio — começaram a atacar os " +
          "escritos de três teólogos antioquenos já falecidos ou idosos: " +
          "Teodoro de Mopsuéstia (mestre de Nestório), Teodoreto de Ciro " +
          "(autor da Fórmula de União!) e Ibas de Edessa (que escrevera uma " +
          "carta elogiando Teodoro de Mopsuéstia). Cirilo, embora desconfortável " +
          "com alguns escritos de Teodoro de Mopsuéstia, recusou-se a condená-los " +
          "postumamente, temendo reabrir a guerra com Antioquia. Esta 'guerra fria' " +
          "teológica permaneceria latente até explodir no II Constantinopla (553).",
        importancia:
          "Demonstra que a Fórmula de União de 433 não resolveu as tensões " +
          "subjacentes. Os cirilianos radicais já consideravam que qualquer " +
          "concessão à linguagem antioquena ('duas naturezas') era uma traição " +
          "à fé de Cirilo. Esta mentalidade alimentaria diretamente o " +
          "monofisismo de Eutiques e Dioscoro na década seguinte.",
        fontes: [
          "Cirilo, Ep. 57 e 72",
          "Facundo de Hermiane, Pro Defensione Trium Capitulorum",
          "Grillmeier, op. cit., pp. 468–475",
        ],
      },
      {
        ano: "440",
        titulo: "Eleição do Papa Leão I (Magno)",
        descricao:
          "Em 29 de setembro de 440, o arquidiácono Leão foi eleito bispo de Roma " +
          "após a morte de Sisto III. Leão era um administrador brilhante, teólogo " +
          "sistemático e o primeiro papa a reivindicar explicitamente a primazia " +
          "petrina em termos jurídicos e teológicos. Sua eleição coincidiu com " +
          "o agravamento da crise cristológica no Oriente, e ele se tornaria a " +
          "figura central da ortodoxia calcedoniana — mesmo sem jamais pisar " +
          "em Calcedônia.",
        importancia:
          "Leão Magno é o autor do Tomo (Ep. 28), o documento cristológico mais " +
          "influente do século V e a base da Definição de Calcedônia. Sem sua " +
          "intervenção decisiva, o Latrocínio de 449 poderia ter se tornado " +
          "a norma, e o monofisismo teria triunfado no Oriente.",
        fontes: [
          "Liber Pontificalis (ed. Duchesne I, pp. 238–240)",
          "Leão Magno, Ep. 1–3",
          "Jalland, The Church and the Papacy (1944), pp. 263–270",
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // PERÍODO 2: 444–448
  // ═══════════════════════════════════════════════════════
  {
    periodo: "444–448",
    titulo: "A Ascensão de Dioscoro, Eutiques e a Tempestade",
    descricaoGeral:
      "A morte de Cirilo de Alexandria em 27 de junho de 444 removeu o último " +
      "grande teólogo capaz de manter o equilíbrio entre unidade e dualidade " +
      "em Cristo. Seu sucessor, Dioscoro, era um homem de temperamento violento " +
      "e ambição política desmedida, que interpretava a teologia de Cirilo de " +
      "forma radicalizada: para ele, a famosa frase ciriliana 'mia physis tou " +
      "Theou Logou sesarkōmenē' ('uma natureza encarnada do Verbo de Deus') " +
      "significava que a humanidade de Cristo fora literalmente absorvida pela " +
      "divindade. Simultaneamente, em Constantinopla, o arquimandrita Eutiques — " +
      "um monge idoso e influente, padrinho do poderoso eunuco imperial Crisáfio — " +
      "começou a ensinar publicamente que em Cristo havia 'duas naturezas antes " +
      "da união, mas uma só depois'. A convergência entre o radicalismo de " +
      "Dioscoro em Alexandria e o monofisismo de Eutiques em Constantinopla " +
      "criou a tempestade perfeita que levaria ao Latrocínio de 449.",

    eventos: [
      {
        ano: "444",
        titulo: "Morte de Cirilo e eleição de Dioscoro em Alexandria",
        descricao:
          "Cirilo de Alexandria, o grande defensor da Theotokos e arquiteto da " +
          "condenação de Nestório, morreu em 27 de junho de 444 após um episcopado " +
          "de 32 anos. Sua morte foi recebida com alívio por seus adversários " +
          "antioquenos e com luto por seus partidários. O sucessor escolhido foi " +
          "Dioscoro, que servira como arquidiácono de Cirilo e compartilhava sua " +
          "hostilidade a Antioquia, mas sem sua sutileza teológica. Dioscoro " +
          "imediatamente começou a reabilitar os radicais que Cirilo mantivera " +
          "sob controle e a promover uma leitura 'monofisita' da tradição ciriliana.",
        importancia:
          "A transição de Cirilo para Dioscoro é o ponto de virada da crise. " +
          "Cirilo, apesar de sua linguagem por vezes ambígua ('mia physis'), " +
          "sempre insistiu na realidade da humanidade de Cristo e aceitou a " +
          "Fórmula de União de 433. Dioscoro rejeitou qualquer concessão à " +
          "dualidade e transformou o cirilianismo em monofisismo militante.",
        fontes: [
          "Evágrio, HE II.1–2",
          "João de Nikiu, Crônica LXXXIII",
          "Wessel, Cyril of Alexandria (2004), pp. 267–275",
        ],
      },
      {
        ano: "444–447",
        titulo: "A pregação de Eutiques em Constantinopla",
        descricao:
          "Eutiques (c. 378–454), arquimandrita de um grande mosteiro nos arredores " +
          "de Constantinopla com mais de 300 monges, começou a ensinar publicamente " +
          "sua cristologia radical: 'Confesso que nosso Senhor era de duas naturezas " +
          "antes da união, mas após a união confesso uma só natureza' (ek dyo physeōn " +
          "pro tēs henōseōs, meta de tēn henōsin mian physin). Sua metáfora favorita " +
          "era a da 'gota de mel no oceano': a humanidade de Cristo, ao se unir à " +
          "divindade, foi absorvida e dissolvida como uma gota de mel no mar. Eutiques " +
          "era protegido pelo eunuco Crisáfio, o todo-poderoso camareiro-mor " +
          "(praepositus sacri cubiculi) de Teodósio II, o que lhe dava imunidade " +
          "política.",
        importancia:
          "O eutiquianismo representava a radicalização lógica da ênfase alexandrina " +
          "na unidade de Cristo levada ao extremo. Se a humanidade é 'absorvida', " +
          "então Cristo não é verdadeiramente homem — e a salvação humana está " +
          "comprometida (o que não é assumido não é redimido, como diria Gregório " +
          "de Nazianzo). Eutiques seria o herege central condenado em Calcedônia.",
        fontes: [
          "Atas do Sínodo de 448 (ACO II.1, pp. 113–170)",
          "Leão Magno, Ep. 20 e 21",
          "Flavian, Ep. ad Leonem (ACO II.2.1)",
          "Frend, The Rise of the Monophysite Movement (1972), pp. 15–22",
        ],
      },
      {
        ano: "447",
        titulo: "O Sínodo de Constantinopla e a primeira condenação de Eutiques",
        descricao:
          "O bispo Eusébio de Dorileu — o mesmo que décadas antes denunciara " +
          "Nestório — apresentou uma acusação formal de heresia contra Eutiques " +
          "perante o patriarca Flavian de Constantinopla. Flavian, inicialmente " +
          "relutante (Eutiques era idoso, influente e protegido por Crisáfio), " +
          "convocou um sínodo local (o 'Sínodo Permanente' ou Endēmousa Synodos) " +
          "em novembro de 447. Eutiques recusou-se a comparecer, alegando que " +
          "seu voto monástico o impedia de deixar o mosteiro. O sínodo, porém, " +
          "ainda não emitiu condenação formal — apenas advertiu Eutiques.",
        importancia:
          "Foi o primeiro passo legal contra o monofisismo. A relutância de " +
          "Flavian demonstra o poder da rede de proteção de Eutiques na corte " +
          "imperial. O confronto entre Flavian (ortodoxo, mas politicamente " +
          "fraco) e Eutiques (herético, mas politicamente forte) preparou " +
          "o cenário para o drama de 448–449.",
        fontes: [
          "ACO II.1.1, pp. 113–120",
          "Evágrio, HE II.2",
          "Teodoro, o Leitor, Epitome 353",
        ],
      },
      {
        ano: "Nov 448",
        titulo: "Sínodo de Constantinopla: Condenação formal de Eutiques",
        descricao:
          "Em novembro de 448, o Sínodo Permanente de Constantinopla reuniu-se " +
          "novamente, desta vez com ~30 bispos, para tratar de uma disputa " +
          "jurisdicional entre o bispo de Sardes e o metropolita da Lídia. " +
          "Eusébio de Dorileu aproveitou a ocasião para renovar sua acusação " +
          "contra Eutiques. Desta vez, Flavian não pôde adiar: Eutiques foi " +
          "convocado e, após várias recusas, enviou representantes e finalmente " +
          "compareceu em 22 de novembro. Interrogado por Flavian, Eutiques " +
          "confessou sua fórmula ('duas naturezas antes, uma depois') e recusou-se " +
          "a anatematizá-la. O sínodo o declarou herege, depôs de sua posição " +
          "de arquimandrita e o excomungou. Flavian enviou imediatamente um " +
          "relato ao Papa Leão I.",
        importancia:
          "A condenação de Eutiques em 448 é o evento que desencadeou toda a " +
          "cadeia de eventos até Calcedônia. Eutiques apelou a Roma, Alexandria, " +
          "Antioquia e Jerusalém, transformando uma disputa local em uma crise " +
          "ecumênica. A carta de Flavian a Leão (a 'Carta de Flavian') provocaria " +
          "a resposta de Leão: o célebre Tomo.",
        fontes: [
          "ACO II.1.1, pp. 113–170 (atas completas)",
          "Flavian, Ep. ad Leonem (ACO II.2.1, pp. 10–13)",
          "Leão Magno, Ep. 21 (resposta a Flavian)",
          "Price & Gaddis, Acts of Chalcedon I, pp. 15–25",
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // PERÍODO 3: 449
  // ═══════════════════════════════════════════════════════
  {
    periodo: "449",
    titulo: "O Latrocínio de Éfeso (Latrocinium)",
    descricaoGeral:
      "O ano de 449 é o annus horribilis da cristologia antiga. O imperador " +
      "Teodósio II, pressionado por Crisáfio e por Dioscoro de Alexandria, " +
      "convocou um novo concílio em Éfeso para 'julgar' a disputa entre " +
      "Flavian e Eutiques. O que deveria ser um tribunal ecumênico transformou-se " +
      "em um espetáculo de violência e fraude: Dioscoro, nomeado presidente pelo " +
      "imperador, manipulou os procedimentos, impediu a leitura do Tomo de Leão, " +
      "introduziu soldados e monges armados na igreja, depôs Flavian e o bispo " +
      "Eusébio de Dorileu, e reabilitou Eutiques. Flavian foi espancado tão " +
      "brutalmente que morreu três dias depois a caminho do exílio. O legado " +
      "papal Hilário fugiu pela porta dos fundos gritando 'Contradicitur!' " +
      "('Protesto!'). O Papa Leão I, ao receber as notícias, cunhou o termo " +
      "que ficaria para a história: Latrocinium — 'latrocínio', 'assalto à " +
      "mão armada'. O Latrocínio de 449 é o evento que Calcedônia foi " +
      "convocado especificamente para anular.",

    eventos: [
      {
        ano: "Mar 449",
        titulo: "O Tomo de Leão Magno (Ep. 28)",
        descricao:
          "Em resposta à carta de Flavian (recebida em janeiro de 449), o Papa " +
          "Leão I redigiu sua célebre Epístola Dogmática (Ep. 28), conhecida " +
          "como 'Tomo de Leão' ou 'Tomo a Flavian'. Datada de 13 de junho de 449 " +
          "(embora provavelmente enviada em março), a carta é uma exposição " +
          "sistemática da cristologia ortodoxa em latim. Leão afirma que em " +
          "Cristo há duas naturezas (divina e humana) unidas em uma única pessoa " +
          "(persona/hypostasis), sem confusão e sem separação. A frase-chave: " +
          "'Agit enim utraque forma cum alterius communione quod proprium est' " +
          "('Cada natureza age em comunhão com a outra naquilo que lhe é próprio'). " +
          "O Tomo foi enviado a Flavian para ser lido no concílio vindouro.",
        importancia:
          "O Tomo de Leão é o documento cristológico mais importante do século V " +
          "e a base direta da Definição de Calcedônia. Sua recepção em Calcedônia " +
          "(Sessão 2) com a aclamação 'Pedro falou por Leão!' é um dos momentos " +
          "mais dramáticos da história dos concílios. O Tomo demonstrou que a " +
          "cristologia ocidental (latina, baseada em Tertuliano e Agostinho) " +
          "era perfeitamente compatível com a tradição ciriliana autêntica.",
        fontes: [
          "Leão Magno, Ep. 28 (PL 54, 755–782; ACO II.2.1, pp. 24–33)",
          "Grillmeier, op. cit., pp. 520–543",
          "Price & Gaddis, op. cit., I, pp. 55–65",
        ],
      },
      {
        ano: "Ago 449",
        titulo: "Abertura do II Concílio de Éfeso (o Latrocínio)",
        descricao:
          "Em 8 de agosto de 449, cerca de 130 bispos reuniram-se na Igreja de " +
          "Santa Maria em Éfeso (o mesmo local do concílio de 431). Teodósio II " +
          "nomeou Dioscoro de Alexandria como presidente, com Juvenal de Jerusalém " +
          "e Talássio de Cesareia como co-presidentes. Os legados papais — o bispo " +
          "Júlio, o presbítero Renato e o diácono Hilário — estavam presentes, mas " +
          "foram sistematicamente silenciados. Dioscoro abriu os trabalhos lendo " +
          "a carta imperial que ordenava a reabilitação de Eutiques e a revisão " +
          "da sentença de 448. Quando os legados tentaram ler o Tomo de Leão, " +
          "Dioscoro recusou e mandou os soldados imperiais (os silentiarii) " +
          "cercarem a igreja.",
        importancia:
          "A abertura do Latrocínio demonstrou que o concílio não seria um " +
          "tribunal imparcial, mas um instrumento de Dioscoro e da corte " +
          "imperial para impor o monofisismo. A recusa em ler o Tomo de Leão " +
          "foi o ato mais escandaloso: o documento que seria aclamado como " +
          "ortodoxo em Calcedônia dois anos depois foi tratado como " +
          "irrelevante (ou perigoso) em 449.",
        fontes: [
          "ACO II.1.1, pp. 87–112 (atas do Latrocínio)",
          "Evágrio, HE II.2",
          "Leão Magno, Ep. 44 (a Teodósio II, protestando)",
          "Price & Gaddis, op. cit., I, pp. 25–35",
        ],
      },
      {
        ano: "Ago 449",
        titulo: "Deposição e morte de Flavian de Constantinopla",
        descricao:
          "Na segunda sessão do Latrocínio (22 de agosto), Dioscoro procedeu " +
          "ao 'julgamento' de Flavian e Eusébio de Dorileu. As atas do sínodo " +
          "de 448 foram lidas seletivamente, omitindo as confissões de Eutiques. " +
          "Quando Flavian tentou defender-se, monges armados liderados pelo " +
          "arquimandrita Barsauma (aliado de Dioscoro) invadiram a igreja " +
          "gritando 'Matem-o! Queimem-o!'. Flavian foi agarrado, espancado e " +
          "arrastado para fora. Dioscoro pronunciou a sentença de deposição. " +
          "Flavian foi exilado para a Frígia (Ásia Menor), mas morreu três " +
          "dias depois em Hipaepa, em consequência dos ferimentos. Seus " +
          "últimos atos foram apelar ao Papa Leão e redigir um testamento " +
          "espiritual.",
        importancia:
          "O martírio de Flavian é o evento mais chocante da história dos " +
          "concílios ecumênicos. Em Calcedônia (451), sua reabilitação seria " +
          "o primeiro ato do concílio, e seus algozes (Dioscoro, Barsauma, " +
          "Juvenal) seriam julgados. A morte de Flavian transformou-o em " +
          "mártir da ortodoxia e deu a Calcedônia uma dimensão moral " +
          "incontestável: o concílio não era apenas uma disputa teológica, " +
          "mas um ato de justiça.",
        fontes: [
          "ACO II.1.1, pp. 170–185",
          "Evágrio, HE II.2–3",
          "Leão Magno, Ep. 44 e 45",
          "Crisafio (via Teófanes, Chronographia AM 5941)",
        ],
      },
      {
        ano: "Ago 449",
        titulo: "A fuga de Hilário e o protesto 'Contradicitur!'",
        descricao:
          "O diácono Hilário, um dos três legados papais, foi o único que " +
          "conseguiu escapar do Latrocínio com vida e liberdade. Enquanto " +
          "os soldados de Dioscoro cercavam a igreja e os bispos eram " +
          "coagidos a assinar as atas em branco (sim, em branco — as " +
          "decisões seriam preenchidas depois), Hilário fugiu pela porta " +
          "lateral gritando 'Contradicitur!' (latim: 'Protesto!' / " +
          "'Contradiz-se!'). Ele viajou disfarçado pela Ásia Menor até " +
          "chegar a Roma, onde relatou a Leão tudo o que ocorrera. Os " +
          "outros legados (Júlio e Renato) foram detidos e coagidos.",
        importancia:
          "O grito 'Contradicitur!' de Hilário tornou-se um símbolo da " +
          "resistência romana ao monofisismo e da autoridade papal nos " +
          "concílios. Em Calcedônia, Hilário (agora Papa, sucedendo a " +
          "Leão em 461) seria lembrado como herói. O episódio também " +
          "demonstrou a fragilidade da representação ocidental nos " +
          "concílios orientais.",
        fontes: [
          "ACO II.1.1, p. 180",
          "Leão Magno, Ep. 44.3",
          "Liber Pontificalis (vida de Hilário)",
        ],
      },
      {
        ano: "Set 449",
        titulo: "Leão Magno condena o Latrocínio",
        descricao:
          "Ao receber as notícias do Latrocínio (via Hilário e via cartas " +
          "de Flavian que chegaram postumamente), Leão I reagiu com fúria. " +
          "Em uma série de cartas a Teodósio II, a Pulquéria, ao clero de " +
          "Constantinopla e aos bispos do Oriente, ele declarou o sínodo " +
          "de 449 nulo e inválido, cunhando o termo 'Latrocinium' " +
          "('latrocínio', 'assalto de bandidos'). Ele exigiu a convocação " +
          "de um novo concílio ecumênico na Itália (preferencialmente), " +
          "onde o Tomo pudesse ser lido e a fé ortodoxa restaurada. " +
          "Teodósio II recusou, apoiando Dioscoro.",
        importancia:
          "A reação de Leão estabeleceu o princípio de que um concílio " +
          "que viola as normas canônicas e a comunhão com Roma não tem " +
          "validade ecumênica — mesmo que convocado pelo imperador. " +
          "Este princípio seria invocado repetidamente na história " +
          "da Igreja (ex.: o Concílio de Hieria de 754, rejeitado " +
          "por Roma e depois anulado pelo II Niceia de 787).",
        fontes: [
          "Leão Magno, Ep. 43–50 (série de protestos)",
          "ACO II.2.1, pp. 34–45",
          "Jalland, op. cit., pp. 290–305",
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // PERÍODO 4: 449–451
  // ═══════════════════════════════════════════════════════
  {
    periodo: "449–451",
    titulo: "A Virada Imperial e a Convocação de Calcedônia",
    descricaoGeral:
      "O Latrocínio de 449 parecia ter selado o destino da cristologia: " +
      "o monofisismo triunfara com o apoio do imperador, e a ortodoxia " +
      "estava acéfala (Flavian morto, Eusébio exilado, o Tomo de Leão " +
      "silenciado). Mas a Providência — ou a política — interveio de " +
      "forma inesperada. Em 28 de julho de 450, Teodósio II sofreu uma " +
      "queda de cavalo durante uma caçada e morreu dois dias depois, " +
      "aos 49 anos, sem deixar herdeiro masculino. Sua irmã Pulquéria, " +
      "uma devota calcedoniana que fora marginalizada por Crisáfio, " +
      "assumiu o trono como Augusta e casou-se estrategicamente com " +
      "o senador trácio Marciano, um militar experiente e ortodoxo. " +
      "Em semanas, o cenário mudou completamente: Crisáfio foi preso " +
      "e executado, Dioscoro perdeu seu protetor imperial, e o caminho " +
      "para um novo concílio — desta vez genuinamente ecumênico — " +
      "estava aberto.",

    eventos: [
      {
        ano: "Jul 450",
        titulo: "Morte de Teodósio II e ascensão de Pulquéria",
        descricao:
          "Em 28 de julho de 450, o imperador Teodósio II caiu de seu " +
          "cavalo durante uma caçada nas margens do rio Lycus, perto de " +
          "Constantinopla, e fraturou a coluna vertebral. Morreu em 28 " +
          "ou 29 de julho, após 48 anos de reinado (o mais longo da " +
          "história romana desde Augusto). Sem filhos varões, a dinastia " +
          "teodosiana no Oriente dependia de sua irmã Pulquéria, que " +
          "havia feito voto de virgindade perpétua em 414. Para legitimar " +
          "a sucessão, Pulquéria casou-se com o senador Flavio Marciano " +
          "(c. 392–457), um militar trácio de origem modesta que servira " +
          "nas guerras contra os persas e os vândalos. O casamento foi " +
          "puramente político: Pulquéria manteve seu voto de virgindade, " +
          "e Marciano aceitou a condição.",
        importancia:
          "A morte de Teodósio II é o deus ex machina da história de " +
          "Calcedônia. Sem ela, o monofisismo provavelmente teria se " +
          "consolidado como doutrina oficial do Império, e o Latrocínio " +
          "de 449 seria lembrado como concílio legítimo. A ascensão de " +
          "Pulquéria e Marciano — ambos devotos da ortodoxia 'leonina' " +
          "(duas naturezas) — inverteu completamente o cenário político " +
          "e religioso em questão de semanas.",
        fontes: [
          "Teófanes, Chronographia AM 5942",
          "João Malalas, Chronographia XIV.12",
          "Evágrio, HE II.1",
          "Bury, History of the Later Roman Empire I, pp. 224–228",
        ],
      },
      {
        ano: "Ago–Set 450",
        titulo: "Queda de Crisáfio e reversão da política religiosa",
        descricao:
          "O eunuco Crisáfio (Chrysaphius), o todo-poderoso camareiro-mor " +
          "de Teodósio II e patrono de Eutiques, foi imediatamente preso " +
          "por ordem de Marciano. Acusado de conspiração e corrupção, " +
          "foi exilado para a ilha de Princesa (Prinkipo) e depois " +
          "executado por apedrejamento em dezembro de 450. Com a queda " +
          "de Crisáfio, toda a rede de proteção de Eutiques e Dioscoro " +
          "na corte desmoronou. Pulquéria ordenou a reabilitação dos " +
          "bispos depostos no Latrocínio e a transladação dos restos " +
          "mortais de Flavian para Constantinopla, onde foram recebidos " +
          "com honras de mártir.",
        importancia:
          "A queda de Crisáfio demonstra o quanto a política imperial " +
          "determinava os destinos teológicos no século V. O monofisismo " +
          "não triunfou em 449 por superioridade teológica, mas porque " +
          "tinha o homem certo (Crisáfio) no lugar certo (o quarto do " +
          "imperador). Sua remoção abriu caminho para Calcedônia.",
        fontes: [
          "Teófanes, Chronographia AM 5942–5943",
          "João Malalas, Chronographia XIV.13",
          "Cedreno, Compendium Historiarum I, p. 607",
        ],
      },
      {
        ano: "Nov 450",
        titulo: "Leão Magno e Marciano negociam o novo concílio",
        descricao:
          "O Papa Leão I, que desde 449 insistia em um novo concílio " +
          "(preferencialmente na Itália), recebeu com entusiasmo a " +
          "notícia da ascensão de Marciano e Pulquéria. Em novembro " +
          "de 450, Marciano escreveu a Leão informando sua intenção " +
          "de convocar um concílio no Oriente. Leão, embora preferisse " +
          "a Itália (para garantir maior influência romana), aceitou " +
          "a proposta de Marciano por pragmatismo: o Oriente era onde " +
          "a crise estava, e a presença imperial era necessária para " +
          "garantir a ordem. Leão enviou seus legados — Paschasinus " +
          "de Lilibeu (Sicília), Lucêncio de Ascoli e o presbítero " +
          "Bonifácio — com instruções claras: o Tomo deveria ser lido " +
          "e aceito como norma de fé, e Dioscoro deveria ser julgado.",
        importancia:
          "A negociação entre Leão e Marciano estabeleceu o modelo " +
          "de 'symphonia' (harmonia) entre Igreja e Estado que " +
          "caracterizaria o Império Bizantino por mil anos. O " +
          "imperador convoca e organiza; o papa define a doutrina. " +
          "Em teoria. Na prática, como Calcedônia demonstraria, " +
          "os comissários imperiais frequentemente controlavam " +
          "os trabalhos mais do que os legados papais.",
        fontes: [
          "Leão Magno, Ep. 69, 70, 73, 76",
          "Marciano, Ep. ad Leonem (ACO II.4, pp. 5–8)",
          "ACO II.4 (correspondência imperial)",
          "Price & Gaddis, op. cit., I, pp. 35–45",
        ],
      },
      {
        ano: "Mai 451",
        titulo: "Convocação oficial do Concílio de Calcedônia",
        descricao:
          "Em 17 de maio de 451, Marciano emitiu o édito de convocação " +
          "do IV Concílio Ecumênico. Inicialmente planejado para Niceia " +
          "(o local simbólico do primeiro concílio), o local foi mudado " +
          "para Calcedônia por razões práticas: a ameaça dos hunos de " +
          "Átila na fronteira do Danúbio exigia que o imperador " +
          "permanecesse perto de Constantinopla, e Calcedônia ficava " +
          "a apenas uma travessia de barco do Bósforo. A data de " +
          "abertura foi fixada para 1º de setembro (posteriormente " +
          "adiada para 8 de outubro). Todos os bispos do Império " +
          "foram convocados, com exceção dos que haviam participado " +
          "ativamente do Latrocínio (Dioscoro, Juvenal, etc.), que " +
          "seriam julgados, não julgadores.",
        importancia:
          "A mudança de Niceia para Calcedônia, embora motivada por " +
          "razões logísticas, teve consequências simbólicas: Calcedônia " +
          "não era um local de peregrinação como Niceia, mas um subúrbio " +
          "de Constantinopla, o que reforçou a imagem de concílio " +
          "'imperial' e 'constantinopolitano'. Isso alimentaria as " +
          "acusações posteriores de que Calcedônia foi um concílio " +
          "'político' e não 'espiritual'.",
        fontes: [
          "Marciano, Edictum (ACO II.4, pp. 10–12)",
          "Evágrio, HE II.4",
          "Teófanes, Chronographia AM 5943",
          "Price & Gaddis, op. cit., I, pp. 45–55",
        ],
      },
      {
        ano: "Out 451",
        titulo: "Abertura do Concílio de Calcedônia (8 de outubro)",
        descricao:
          "Em 8 de outubro de 451, na Igreja de Santa Eufêmia em " +
          "Calcedônia, o maior concílio da antiguidade cristã abriu " +
          "suas portas com mais de 500 bispos presentes. Os 19 " +
          "comissários imperiais sentaram-se no centro, ladeados " +
          "pelos legados papais (Paschasinus e Lucêncio) à direita " +
          "e por Anatólio de Constantinopla à esquerda. A primeira " +
          "sessão foi dedicada ao julgamento do Latrocínio de 449: " +
          "as atas do Latrocínio foram lidas em voz alta, e os " +
          "bispos que participaram dele foram chamados a explicar " +
          "seu voto. O clima era de fúria: gritos de 'Queimem " +
          "Dioscoro!', 'Ele deve ser cortado ao meio!' ecoavam " +
          "pela igreja. O próprio Dioscoro, presente como acusado, " +
          "foi obrigado a sentar-se no meio da assembleia, não no " +
          "trono presidencial.",
        importancia:
          "A abertura de Calcedônia foi o momento de catarse da " +
          "Igreja oriental. Dois anos de humilhação, violência e " +
          "silêncio imposto pelo Latrocínio explodiram em uma " +
          "tempestade de acusações e lágrimas. O concílio não " +
          "era apenas uma assembleia teológica, mas um tribunal " +
          "de justiça para os crimes de 449. Esta dimensão " +
          "jurídica e moral é essencial para entender por que " +
          "a Definição de Calcedônia foi recebida com tanta " +
          "emoção e por que sua rejeição pelos monofisitas " +
          "foi tão dolorosa.",
        fontes: [
          "ACO II.1.1, pp. 1–86 (Atas da Sessão 1 de Calcedônia)",
          "Mansi VI, 567–610",
          "Evágrio, HE II.4",
          "Price & Gaddis, op. cit., I, pp. 130–195",
        ],
      },
    ],
  },
];