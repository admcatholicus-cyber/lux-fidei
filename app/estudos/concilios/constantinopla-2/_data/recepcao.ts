// app/estudos/concilios/constantinopla-2/_data/recepcao.ts

export const resumoRecepcao =
  'A recepção do Segundo Concílio de Constantinopla variou dramaticamente entre as diferentes regiões da cristandade. No Ocidente, a condenação dos Três Capítulos precipitou o Cisma Tricapitulino (c. 553–c. 700), que dividiu as Igrejas do norte da Itália, da Ilíria e da Gália meridional por mais de um século. No Oriente ortodoxo, o concílio foi recebido com entusiasmo e confirmado por concílios subsequentes. As Igrejas não calcedonianas rejeitaram o concílio como insuficiente. Os protestantes, séculos depois, desenvolveram avaliações variadas que vão do reconhecimento à crítica.';

export interface FaseCisma {
  periodo: string;
  sede: string;
  lideres: string[];
  evento: string;
  desfecho: string;
}

export interface RegiaoOcidental {
  nome: string;
  periodoResistencia: string;
  principaisOpositores: string[];
  argumentosCentrais: string;
  processoReconciliacao: string;
}

export interface PapaDefensor {
  nome: string;
  pontificado: string;
  postura: string;
  acoes: string;
}

export interface IgrejaNaoCalcedoniana {
  nome: string;
  tradicao: string;
  posicao: string;
  razoes: string;
  situacaoAtual: string;
}

export interface AvaliacaoProtestante {
  reformador: string;
  periodo: string;
  avaliacao: string;
  fundamentos: string;
}

export interface Recepcao {
  cismaTricapitulino: {
    titulo: string;
    introducao: string;
    aquileia: {
      resumo: string;
      fases: FaseCisma[];
    };
    milao: {
      resumo: string;
      fases: FaseCisma[];
    };
    consequenciasDuradouras: string;
  };
  recepcaoOcidente: {
    titulo: string;
    introducao: string;
    regioes: RegiaoOcidental[];
    papas: PapaDefensor[];
    sintese: string;
  };
  recepcaoOrienteOrtodoxo: {
    titulo: string;
    introducao: string;
    confirmacoesConciliares: string[];
    teologosChave: { nome: string; seculo: string; contribuicao: string }[];
    liturgia: string;
    situacaoAtual: string;
  };
  recepcaoNaoCalcedoniana: {
    titulo: string;
    introducao: string;
    igrejas: IgrejaNaoCalcedoniana[];
    dialogoEcumenico: string;
  };
  recepcaoProtestante: {
    titulo: string;
    introducao: string;
    avaliacoes: AvaliacaoProtestante[];
    anglicanismo: string;
    luteranismo: string;
    calvinismo: string;
    sintese: string;
  };
}

export const recepcao: Recepcao = {
  cismaTricapitulino: {
    titulo: "O Cisma Tricapitulino no Ocidente (c. 553–698 d.C.)",
    introducao:
      "O Cisma Tricapitulino foi a mais longa e geograficamente extensa ruptura de comunhão na cristandade ocidental antes do Grande Cisma de 1054. Precipitado pela condenação dos Três Capítulos (Teodoro de Mopsuéstia, escritos anticyrilianos de Teodoreto, Epístola de Ibas a Maris) no Segundo Concílio de Constantinopla (553) e pela capitulação do Papa Vigílio (554), o cisma dividiu as dioceses do norte da Itália, da Ilíria, da Gália meridional e do norte da África por períodos que variaram de duas décadas a quase um século e meio. Os tricapitulinos não se consideravam cismáticos nem hereges: viam-se como defensores da verdadeira fé de Calcedônia contra a corrupção neocalcedoniana imposta por um imperador cesaropapista e por um papa coagido. A resistência tricapitulina tornou-se um marcador de identidade eclesial regional, particularmente no norte da Itália, onde se entrelaçou com a política lombarda e com a rivalidade entre os patriarcados de Aquileia e Roma.",
    aquileia: {
      resumo:
        "O Patriarcado de Aquileia foi o epicentro e o último reduto do Cisma Tricapitulino, mantendo a ruptura com Roma por aproximadamente 145 anos (c. 553–698). A resistência aquileiense foi liderada por uma sucessão de patriarcas intransigentes — Paulino I (557–569), Probo (569–571), Elias (571–586), Severo (586–606) — que convocaram sínodos provinciais, emitiram encíclicas contra as decisões de 553 e recusaram qualquer compromisso com Roma mesmo após a reconciliação de Milão (c. 581). A invasão lombarda de 568 complicou dramaticamente a situação ao dividir o território aquileiense entre a zona costeira (Grado, sob controle bizantino) e o interior (Aquileia-Old, sob proteção lombarda), criando uma duplicação patriarcal que persistiu por séculos e que tornou a resolução do cisma ainda mais difícil.",
      fases: [
        {
          periodo: "553–569",
          sede: "Aquileia",
          lideres: ["Paulino I de Aquileia", "Macedônio de Vicência"],
          evento:
            "Imediatamente após a capitulação de Vigílio (554) e a eleição de Pelágio I (556), o patriarca Paulino I convoca um sínodo provincial em Aquileia que anatematiza as decisões de Constantinopla II e rompe formalmente a comunhão com Roma. Os bispos da Vêneto e da Ístria aderem em massa ao cisma. Paulino transfere as relíquias dos santos aquileienses para Grado como medida de proteção contra eventuais represálias bizantinas.",
          desfecho:
            "Consolidação do cisma no norte da Itália. Roma perde o controle eclesiástico sobre as dioceses da Vêneto, Ístria e Friul. Paulino I assume o título de 'patriarca', sinalizando a pretensão de autonomia jurisdicional em relação a Roma.",
        },
        {
          periodo: "568–586",
          sede: "Aquileia-Old e Grado",
          lideres: ["Probo de Aquileia", "Elias de Aquileia-Grado"],
          evento:
            "A invasão lombarda de 568 transforma a geografia eclesial do norte da Itália. O patriarca Paulino I (e seu sucessor Probo) refugia-se em Grado, na zona costeira sob controle bizantino, enquanto o interior lombardo fica sob a jurisdição de bispos tricapitulinos protegidos pelos novos senhores germânicos. O patriarca Elias (571–586) convoca o Sínodo de Grado (579), que reafirma a rejeição dos Três Capítulos e declara que a Sé de Roma 'perdeu sua autoridade ao trair Calcedônia'. Os lombardos, inicialmente arianos, toleram e até protegem os tricapitulinos como contrapeso à influência bizantina.",
          desfecho:
            "Duplicação de facto do patriarcado aquileiense: Grado (pró-bizantino, mas ainda tricapitulino) e Aquileia-Old (pró-lombardo, firmemente tricapitulino). O cisma torna-se um instrumento da geopolítica itálica.",
        },
        {
          periodo: "586–607",
          sede: "Aquileia-Old (interior lombardo)",
          lideres: ["Severo de Aquileia-Old", "Columbano de Bobbio (mediador)"],
          evento:
            "Após a reconciliação de Milão (c. 581) e a pressão crescente do Papa Gregório Magno (590–604), o patriarca Severo de Aquileia-Old convoca o Sínodo de Marano (590), que reafirma o cisma e rejeita as tentativas de mediação de Roma. Gregório Magno, embora pessoalmente favorável à reconciliação, evita a coerção direta e opta pela persuasão epistolar, escrevendo longas cartas aos bispos tricapitulinos nas quais argumenta que a condenação dos Três Capítulos não contradiz Calcedônia. O monge irlandês Columbano, fundador do mosteiro de Bobbio (614), tenta mediar entre Roma e Aquileia, mas sem sucesso imediato.",
          desfecho:
            "O cisma persiste no interior lombardo, mas começa a enfraquecer na zona costeira (Grado), onde a pressão bizantina e a influência romana são mais fortes. A conversão gradual dos lombardos ao catolicismo (iniciada pela rainha Teodolinda, c. 590) cria as condições para a futura reconciliação.",
        },
        {
          periodo: "607–698",
          sede: "Aquileia-Old (Cividale del Friuli)",
          lideres: ["Cândido de Aquileia", "Pedro de Aquileia", "Sérgio de Aquileia"],
          evento:
            "O cisma entra em sua fase de declínio gradual. A conversão definitiva dos lombardos ao catolicismo niceno (reinado de Ariperto I, 653–661) remove o suporte político que protegia os tricapitulinos. Os papas sucessivos (Honório I, Martinho I, Vitaliano, Agatão) mantêm a pressão diplomática sem recorrer à coerção. O patriarcado de Aquileia-Old, cada vez mais isolado e enfraquecido, começa a aceitar informalmente a comunhão com Roma sem renunciar formalmente às posições tricapitulinas.",
          desfecho:
            "O Concílio de Pavia (698), convocado pelo rei lombardo Cuniberto e presidido pelo patriarca Pedro de Aquileia, encerra formalmente o Cisma Tricapitulino após quase 145 anos. Os bispos do norte da Itália aceitam as decisões de Constantinopla II e restauram a comunhão plena com Roma. O patriarcado de Aquileia-Old é reunificado com Grado, embora a duplicação patriarcal persista nominalmente até 1751.",
        },
      ],
    },
    milao: {
      resumo:
        "A Arquidiocese de Milão, a mais importante sé metropolitana do norte da Itália depois de Roma, aderiu ao Cisma Tricapitulino sob o arcebispo Auxano (551–568) e permaneceu separada de Roma por aproximadamente duas décadas (c. 553–572/581). A resistência milanesa foi particularmente significativa porque Milão reivindicava uma tradição teológica própria, fundada em Ambrósio (374–397), que considerava independente tanto de Roma quanto de Constantinopla. A reconciliação de Milão, alcançada antes da de Aquileia, foi facilitada pela morte de Auxano, pela eleição de um sucessor pró-romano e pela pressão do Papa Pelágio II (579–590).",
      fases: [
        {
          periodo: "553–568",
          sede: "Milão (sob ocupação lombarda a partir de 569)",
          lideres: ["Auxano de Milão", "clero ambrosiano"],
          evento:
            "O arcebispo Auxano recusa a comunhão com o Papa Pelágio I (556–561) e com seu sucessor João III (561–574), declarando que a condenação dos Três Capítulos é uma traição à fé de Calcedônia e ao Tomo de Leão. O clero ambrosiano, fortemente apegado à tradição teológica de Ambrósio e à liturgia do rito ambrosiano, vê na imposição imperial uma ameaça à autonomia eclesial de Milão. A invasão lombarda de 569 agrava a situação: o arcebispo Honório (sucessor de Auxano) transfere a sé para Gênova, sob controle bizantino, enquanto a diocese de Milão propriamente dita fica sob domínio lombardo.",
          desfecho:
            "Milão permanece cismática durante o pontificado de João III (561–574) e parte do pontificado de Bento I (575–579). A situação é complicada pela divisão territorial entre Gênova (bizantina) e Milão (lombarda).",
        },
        {
          periodo: "572–581",
          sede: "Milão / Gênova",
          lideres: ["Lourenço II de Milão", "Pelágio II (papa)"],
          evento:
            "O Papa Pelágio II (579–590) intensifica os esforços de reconciliação com Milão, enviando o diácono Gregório (futuro Papa Gregório Magno) como apocrisiário para negociar com o arcebispo Lourenço II. As negociações são facilitadas pela morte dos líderes tricapitulinos mais intransigentes e pela crescente pressão dos lombardos católicos (rainha Teodolinda) sobre o clero do norte da Itália. Lourenço II aceita a comunhão com Roma em troca de garantias de que a tradição ambrosiana seria respeitada e de que a condenação dos Três Capítulos não seria imposta como condição de ortodoxia para o clero local.",
          desfecho:
            "Reconciliação formal de Milão com Roma c. 581. A Arquidiocese de Milão retorna à comunhão papal, embora mantenha sua liturgia própria (rito ambrosiano) e sua tradição teológica distinta. A reconciliação de Milão isola Aquileia como o último grande reduto tricapitulino.",
        },
      ],
    },
    consequenciasDuradouras:
      "O Cisma Tricapitulino deixou marcas profundas na eclesiologia e na geopolítica do cristianismo ocidental. Em primeiro lugar, demonstrou que a autoridade papal não era universalmente aceita no Ocidente do século VI e que a comunhão com Roma podia ser rompida por dioceses inteiras durante períodos prolongados sem que isso gerasse uma crise existencial na Igreja local. Em segundo lugar, o cisma fortaleceu a consciência de uma identidade teológica ocidental distinta, fundada em Agostinho, Leão Magno e Ambrósio, que não podia ser subordinada às formulações gregas sem resistência. Em terceiro lugar, a duplicação do patriarcado de Aquileia (Grado vs. Aquileia-Old) criou uma anomalia jurisdicional que persistiu por mais de um milênio e que só foi resolvida pela supressão de ambos os patriarcados em 1751 (bula Iniuncta Nobis de Bento XIV). Em quarto lugar, o cisma contribuiu para a crescente desconfiança entre Roma e Constantinopla que, alimentada por disputas subsequentes (monotelismo, iconoclasmo, Filioque), culminaria no Grande Cisma de 1054. Finalmente, a experiência tricapitulina estabeleceu um precedente de resistência eclesial legítima contra decisões percebidas como coercitivas, precedente que seria invocado pelos reformadores do século XVI e pelos galicanos do século XVII.",
  },

  recepcaoOcidente: {
    titulo: "Recepção no Ocidente Latino: Resistência, Mediação e Aceitação Gradual",
    introducao:
      "A recepção do Segundo Concílio de Constantinopla no Ocidente latino foi um processo complexo, prolongado e geograficamente desigual que se estendeu por mais de um século (c. 553–700). A reação inicial foi de rejeição generalizada: a maioria dos bispos da Gália, da Ilíria, do norte da Itália e do norte da África recusou aceitar a condenação dos Três Capítulos e rompeu a comunhão com o Papa Pelágio I (556–561). A aceitação gradual do concílio foi obra de três papas sucessivos — Pelágio I, Pelágio II e, sobretudo, Gregório Magno (590–604) — que combinaram persuasão teológica, pressão diplomática e paciência pastoral para restaurar a comunhão sem alienar definitivamente os bispos recalcitrantes. O processo de recepção foi facilitado pela conversão dos lombardos ao catolicismo, pela reconquista bizantina de partes da Itália e pela crescente irrelevância prática da controvérsia dos Três Capítulos à medida que as gerações que a haviam vivido foram desaparecendo.",
    regioes: [
      {
        nome: "Norte da África (Proconsular, Bizacena, Numídia)",
        periodoResistencia: "c. 550–c. 600",
        principaisOpositores: [
          "Facundo de Hermiane (Pro defensione trium capitulorum, c. 547)",
          "Primásio de Hadrumeto",
          "Verecundo de Junca",
          "Reparato de Cartago",
        ],
        argumentosCentrais:
          "Os bispos africanos, herdeiros da tradição de Agostinho e Cipriano, argumentavam que a condenação dos Três Capítulos violava a autoridade de Calcedônia e que a coerção imperial sobre Vigílio invalidava canonicamente todas as decisões do concílio de 553. Facundo de Hermiane produziu a defesa mais erudita dos Três Capítulos em toda a literatura patrística latina, demonstrando que os escritos de Teodoreto e Ibas eram compatíveis com a fé calcedonense e que a condenação póstuma de Teodoro era canonicamente ilegítima.",
        processoReconciliacao:
          "A reconciliação da África com Roma foi gradual e ocorreu principalmente durante o pontificado de Gregório Magno (590–604), que enviou o notário Hilaro como legado para negociar com os bispos africanos. Gregório combinou firmeza teológica (insistindo na ortodoxia das decisões de 553) com flexibilidade pastoral (aceitando que a subscrição formal dos anátemas não seria exigida de todos os bispos africanos). A conquista árabe do norte da África (647–709) tornou a questão academicamente irrelevante ao destruir quase completamente a Igreja da região.",
      },
      {
        nome: "Gália Meridional (Provença, Septimânia, Borgonha)",
        periodoResistencia: "c. 553–c. 580",
        principaisOpositores: [
          "Sínodo de Arles (554)",
          "Bispos da Provença sob influência franca",
        ],
        argumentosCentrais:
          "Os bispos da Gália meridional, influenciados pela tradição teológica de João Cassiano e de Vicente de Lérins (Commonitorium, 434), argumentavam que a condenação dos Três Capítulos era uma inovação contrária ao princípio da universalidade e antiguidade da fé (quod ubique, quod semper, quod ab omnibus). O Sínodo de Arles (554) excomungou o Papa Vigílio por sua capitulação e recusou reconhecer a autoridade de Constantinopla II.",
        processoReconciliacao:
          "A reconciliação da Gália foi facilitada pela conversão dos francos ao catolicismo niceno (Clóvis, 496) e pela crescente influência do papado sobre a Igreja franca durante o pontificado de Gregório Magno. Os bispos gauleses aceitaram gradualmente as decisões de 553 sem um ato formal de reconciliação, à medida que a controvérsia perdia relevância prática e as novas gerações de clérigos não tinham envolvimento emocional com os Três Capítulos.",
      },
      {
        nome: "Hispânia Visigótica",
        periodoResistencia: "c. 553–c. 633",
        principaisOpositores: [
          "Isidoro de Sevilha (inicialmente ambíguo)",
          "Sínodos de Toledo (período ariano)",
        ],
        argumentosCentrais:
          "A situação na Hispânia era peculiar: o reino visigótico era oficialmente ariano até a conversão de Recaredo I (589), e a Igreja nicena hispano-romana estava mais preocupada com a sobrevivência sob domínio ariano do que com a controvérsia dos Três Capítulos. Após a conversão de Recaredo, o Concílio de Toledo III (589) reafirmou a fé niceno-constantinopolitana e aceitou os quatro primeiros concílios ecumênicos, mas não mencionou explicitamente Constantinopla II. A ambiguidade persistiu até o Concílio de Toledo IV (633), presidido por Isidoro de Sevilha, que incluiu Constantinopla II entre os concílios ecumênicos.",
        processoReconciliacao:
          "A aceitação formal de Constantinopla II na Hispânia ocorreu no Concílio de Toledo IV (633), que enumerou os cinco concílios ecumênicos e aceitou suas decisões como vinculantes. Isidoro de Sevilha, que inicialmente havia expressado reservas sobre a condenação dos Três Capítulos em suas Etymologiae, aceitou a autoridade do concílio em sua maturidade teológica. A Collectio Hispana (c. 633), atribuída a Isidoro, inclui Constantinopla II entre os concílios ecumênicos e transcreve a Sentença Sinodal em tradução latina.",
      },
      {
        nome: "Ilíria (Dalmácia, Panônia, Mésia)",
        periodoResistencia: "c. 553–c. 600",
        principaisOpositores: [
          "Bispos da Dalmácia",
          "Frontão de Salona",
        ],
        argumentosCentrais:
          "Os bispos da Ilíria, que mantinham laços estreitos com o patriarcado de Aquileia e com a tradição teológica latina, recusaram a comunhão com o Papa Pelágio I e aderiram ao Cisma Tricapitulino. A Ilíria era uma região de fronteira entre o Oriente grego e o Ocidente latino, e sua lealdade eclesial oscilava entre Roma e Constantinopla dependendo das circunstâncias políticas.",
        processoReconciliacao:
          "A reconciliação da Ilíria ocorreu gradualmente durante o pontificado de Gregório Magno (590–604), que enviou legados para negociar com os bispos dalmatas e que utilizou a autoridade do exarca bizantino de Ravena para pressionar os recalcitrantes. As invasões ávaras e eslavas do final do século VI (c. 582–626) destruíram grande parte da infraestrutura eclesial da Ilíria e tornaram a controvérsia dos Três Capítulos academicamente irrelevante na região.",
      },
    ],
    papas: [
      {
        nome: "Pelágio I",
        pontificado: "556–561",
        postura:
          "Aceitação plena das decisões de Constantinopla II após sua eleição, apesar de ter sido o principal líder da resistência ocidental como diácono (antes de sua eleição).",
        acoes:
          "Pelágio I emitiu a Epistula ad universos fideles (556), na qual defendeu a ortodoxia das decisões de 553 e argumentou que a condenação dos Três Capítulos não contradizia Calcedônia. Sua mudança de posição — de líder da resistência a defensor do concílio — foi interpretada pelos tricapitulinos como oportunismo e traição, e precipitou o Cisma Tricapitulino. Pelágio tentou coagir os bispos recalcitrantes mediante pressão imperial, mas a estratégia foi contraproducente e aprofundou a resistência.",
      },
      {
        nome: "Pelágio II",
        pontificado: "579–590",
        postura:
          "Mediação paciente e diplomática, evitando a coerção direta e buscando a reconciliação por meio de negociações bilaterais com cada diocese recalcitrante.",
        acoes:
          "Pelágio II enviou o diácono Gregório (futuro Gregório Magno) como apocrisiário a Constantinopla para obter o apoio do imperador Maurício (582–602) na resolução do cisma. Negociou a reconciliação de Milão (c. 581) e iniciou o processo de reaproximação com a África e a Gália. Sua abordagem foi mais eficaz que a de Pelágio I porque evitou a coerção e reconheceu que a reconciliação exigia tempo e paciência.",
      },
      {
        nome: "Gregório Magno (Gregório I)",
        pontificado: "590–604",
        postura:
          "Aceitação firme das decisões de 553 combinada com flexibilidade pastoral e respeito pelas tradições locais. Gregório é o papa mais importante na recepção ocidental de Constantinopla II.",
        acoes:
          "Gregório Magno aceitou explicitamente a autoridade de Constantinopla II em várias epístolas (Ep. I.24, IV.2, IX.176), declarando que 'recebo e venero os quatro concílios como os quatro livros do Santo Evangelho' e incluindo Constantinopla II entre os concílios normativos. Contudo, Gregório evitou exigir a subscrição formal dos anátemas de todos os bispos ocidentais e aceitou que a comunhão prática era mais importante que a conformidade teológica total. Sua correspondência com os bispos tricapitulinos do norte da Itália (Ep. IV.2 ad Constantium Mediolanensem) é um modelo de diplomacia eclesial: firme nos princípios, flexível nos métodos. Gregório também rejeitou o título 'bispo universal' (episkopos oikoumenikos) do patriarca de Constantinopla, reafirmando a independência do papado em relação ao poder imperial bizantino.",
      },
    ],
    sintese:
      "A recepção de Constantinopla II no Ocidente foi um processo de mais de um século que transformou uma rejeição quase unânime em uma aceitação generalizada, embora nunca entusiástica. A aceitação foi facilitada por três fatores: (1) a ação paciente e diplomática dos papas Pelágio II e Gregório Magno, que evitaram a coerção e optaram pela persuasão; (2) as mudanças geopolíticas (invasão lombarda, conversão dos lombardos, conquistas árabes) que alteraram o equilíbrio de poder no Mediterrâneo e tornaram a controvérsia dos Três Capítulos progressivamente irrelevante; (3) o desaparecimento gradual das gerações que haviam vivido a crise e que mantinham um envolvimento emocional com os Três Capítulos. No final do século VII, Constantinopla II era aceito como o Quinto Concílio Ecumênico pela maioria das Igrejas ocidentais, embora a memória do Cisma Tricapitulino permanecesse como uma cicatriz na consciência eclesial do norte da Itália e como um precedente de resistência legítima contra decisões papais percebidas como coercitivas.",
  },

  recepcaoOrienteOrtodoxo: {
    titulo: "Recepção no Oriente Ortodoxo: Triunfo da Ortodoxia Ciriliana",
    introducao:
      "No Oriente bizantino, o Segundo Concílio de Constantinopla foi recebido como o triunfo definitivo da ortodoxia ciriliana e como a interpretação autêntica e autoritativa da fé de Calcedônia. A síntese neocalcedoniana de 553 — que harmonizou a linguagem de 'duas naturezas' de Calcedônia com a tradição ciriliana da união hipostática, da comunicação de idiomas e do teopasquismo — tornou-se a posição dogmática oficial do Império Bizantino e a base teológica sobre a qual os concílios ecumênicos subsequentes (Constantinopla III, 680–681; Niceia II, 787) desenvolveriam suas próprias definições. A recepção oriental de 553 foi imediata, unânime e duradoura: ao contrário do Ocidente, onde o concílio foi contestado por mais de um século, o Oriente bizantino aceitou as decisões de 553 sem resistência significativa e as incorporou à liturgia, à hagiografia e à teologia dogmática de maneira orgânica e irreversível.",
    confirmacoesConciliares: [
      "Sínodo Quinissexto (Trullo, 692): O Cânone 1 enumera os seis concílios ecumênicos (incluindo Constantinopla II) e declara que seus decretos possuem autoridade canônica plena e irrevogável. O Cânone 2 lista os 'cânones dos santos padres' recebidos pela Igreja, incluindo a Sentença Sinodal de 553. O Trullo também menciona explicitamente a condenação de Orígenes como parte das decisões do Quinto Concílio Ecumênico.",
      "Terceiro Concílio de Constantinopla (680–681): O Sexto Concílio Ecumênico reafirmou a autoridade de 553 e utilizou sua cristologia neocalcedoniana como base para a condenação do monotelismo. Os padres de 681 argumentaram que a doutrina de uma única vontade em Cristo contradizia a distinção de naturezas preservada em 553 e que a fórmula 'padeceu voluntariamente na carne' (anátema 3 de 553) implicava a existência de uma vontade humana real em Cristo.",
      "Segundo Concílio de Niceia (787): O Sétimo Concílio Ecumênico, que restaurou a veneração dos ícones, reafirmou a autoridade dos seis concílios anteriores (incluindo 553) e utilizou a cristologia de Constantinopla II para fundamentar a legitimidade teológica das imagens de Cristo: se o Logos se fez verdadeiramente carne (união hipostática, 553), então ele pode ser legitimamente representado em imagens materiais.",
      "Quarto Concílio de Constantinopla (869–870): O Oitavo Concílio Ecumênico (na contagem católica) reafirmou a condenação dos Três Capítulos e a autoridade de 553 no contexto da condenação de Fócio e da restauração do patriarca Inácio.",
    ],
    teologosChave: [
      {
        nome: "Leôncio de Bizâncio",
        seculo: "VI (c. 485–543)",
        contribuicao:
          "Desenvolveu a teoria da enhypostasia (enympostaton) que se tornou a base cristológica do neocalcedonianismo de 553. Sua obra Contra Nestorianos et Eutychianos (c. 544) forneceu o arcabouço conceitual que o concílio utilizou para harmonizar Cirilo e Calcedônia.",
      },
      {
        nome: "Máximo o Confessor",
        seculo: "VII (c. 580–662)",
        contribuicao:
          "Desenvolveu a cristologia de 553 em sua luta contra o monotelismo, argumentando que a unidade de hipóstase afirmada em Constantinopla II não implica a unidade de vontade (thelēma) nem de operação (energeia). Sua distinção entre vontade natural (thelēma physikon) e vontade gnômica (thelēma gnōmikon) permitiu ao Terceiro Concílio de Constantinopla (681) dogmatizar o dyothelismo sem contradizer 553.",
      },
      {
        nome: "João de Damasco",
        seculo: "VIII (c. 675–749)",
        contribuicao:
          "Sistematizou a cristologia neocalcedoniana de 553 no livro III de De Fide Orthodoxa (Exposição da Fé Ortodoxa), que se tornou o manual padrão de teologia dogmática no mundo bizantino e eslavo. João desenvolveu a doutrina da perichōrēsis (interpenetração mútua das naturezas) como corolário dinâmico da união hipostática estática de 553.",
      },
      {
        nome: "Fócio de Constantinopla",
        seculo: "IX (c. 810–893)",
        contribuicao:
          "Incluiu a Sentença Sinodal de 553 e os quinze anátemas anti-origenistas na recensão do Nomocanon in 14 Titulos (883), consolidando a associação entre os anátemas origenistas e o Quinto Concílio Ecumênico na tradição canônica bizantina.",
      },
    ],
    liturgia:
      "A influência de Constantinopla II na liturgia bizantina é profunda e ubíqua. A fórmula teopasquista 'Um da Trindade padeceu na carne' é recitada em cada celebração da Divina Liturgia de São João Crisóstomo e de São Basílio, e o Trisagion ampliado ('Santo Deus, Santo Forte, Santo Imortal, que foste crucificado por nós, tem piedade de nós') — cuja legitimidade foi confirmada pelo concílio de 553 — é cantado em todas as celebrações litúrgicas ortodoxas. O Synodikon da Ortodoxia, lido anualmente no Domingo da Ortodoxia (primeiro domingo da Grande Quaresma), inclui a condenação de Orígenes, Evágrio e Dídimo como parte das decisões do Quinto Concílio Ecumênico e anatematiza 'todos os que aceitam a pré-existência das almas e a apocatástase'. A memória de Cirilo de Alexandria como 'selo dos Padres' (sphragis tōn paterōn) e intérprete autêntico de Calcedônia — posição estabelecida por 553 — é celebrada na liturgia ortodoxa em 9 de junho.",
    situacaoAtual:
      "Na Igreja Ortodoxa contemporânea, o Segundo Concílio de Constantinopla é reconhecido como o Quinto Concílio Ecumênico com autoridade dogmática plena e irreformável. Suas decisões são ensinadas nos seminários teológicos ortodoxos como parte integrante do corpus dogmático ecumênico, e seus anátemas cristológicos são considerados tão vinculantes quanto os de Niceia (325) e Calcedônia (451). A síntese neocalcedoniana de 553 permanece como a cristologia oficial da Igreja Ortodoxa e é invocada nos diálogos ecumênicos com a Igreja Católica (Comissão Mista Internacional, 1980–presente) e com as Igrejas Ortodoxas Orientais (diálogos com coptas, sírios e armênios, 1985–presente). A única questão em aberto é o estatuto dos quinze anátemas anti-origenistas, cujo vínculo formal com o concílio ecumênico continua a ser debatido por alguns teólogos ortodoxos contemporâneos (notadamente David Bentley Hart, que questiona a condenação da apocatástase como esperança teológica, embora não como doutrina dogmática).",
  },

  recepcaoNaoCalcedoniana: {
    titulo: "Recepção pelas Igrejas Ortodoxas Orientais (Não-Calcedonianas)",
    introducao:
      "As Igrejas Ortodoxas Orientais (também denominadas 'não-calcedonianas', 'pré-calcedonianas' ou 'miáfisitas') — a Igreja Copta Ortodoxa de Alexandria, a Igreja Siríaca Ortodoxa de Antioquia, a Igreja Apostólica Armênia, a Igreja Ortodoxa Etíope Tewahedo e a Igreja Ortodoxa Eritreia Tewahedo — rejeitam o Segundo Concílio de Constantinopla (553) com a mesma veemência com que rejeitam o Concílio de Calcedônia (451). Para essas Igrejas, a condenação dos Três Capítulos por Constantinopla II foi uma manobra cínica e insuficiente: embora aceitassem com satisfação a condenação de Teodoro de Mopsuéstia (que consideravam o pai do nestorianismo), recusaram a reafirmação de Calcedônia contida no anátema 5 e interpretaram toda a operação como uma tentativa de Justiniano de salvar a linguagem de 'duas naturezas' mediante concessões cosméticas que não alteravam o conteúdo fundamentalmente nestoriano (a seus olhos) da Definição de 451. A rejeição de Constantinopla II pelas Igrejas Ortodoxas Orientais é, portanto, uma extensão lógica de sua rejeição de Calcedônia, e não uma posição independente.",
    igrejas: [
      {
        nome: "Igreja Copta Ortodoxa de Alexandria",
        tradicao: "Alexandrina (sucessora de Cirilo e Dióscoro)",
        posicao:
          "Rejeição total de Constantinopla II como concílio ilegítimo e herético. A Igreja Copta reconhece apenas os três primeiros concílios ecumênicos (Niceia 325, Constantinopla I 381, Éfeso 431) e considera Calcedônia (451) e todos os concílios subsequentes como expressões do nestorianismo criptográfico.",
        razoes:
          "Para os coptas, a condenação dos Três Capítulos em 553 foi uma admissão implícita de que Calcedônia era nestoriana (por que condenar Teodoro se Calcedônia já fosse suficiente?), mas a reafirmação de 'duas naturezas' no anátema 5 demonstrou que o concílio não estava disposto a abandonar o erro fundamental. A fórmula ciriliana 'uma natureza encarnada do Verbo de Deus' (mia physis tou Theou Logou sesarkōmenē) é a única expressão legítima da fé cristológica, e qualquer linguagem de 'duas naturezas' — mesmo qualificada por 'sem confusão, sem mudança' — é intrinsecamente nestoriana.",
        situacaoAtual:
          "A Igreja Copta mantém sua rejeição de Constantinopla II, mas o diálogo ecumênico com a Igreja Católica (desde 1973, Declaração Comum de Paulo VI e Shenouda III) e com a Igreja Ortodoxa (desde 1989, Declaração de Anba Bishoy) demonstrou que a divergência cristológica é em grande parte terminológica, não substancial. As declarações conjuntas reconhecem que a fé de Cirilo e a fé de Calcedônia, corretamente interpretadas, expressam a mesma realidade cristológica.",
      },
      {
        nome: "Igreja Siríaca Ortodoxa de Antioquia (Jacobita)",
        tradicao: "Siríaca ocidental (sucessora de Severo de Antioquia e Filoxeno de Mabbug)",
        posicao:
          "Rejeição total de Constantinopla II. A Igreja Siríaca Ortodoxa reconhece apenas os três primeiros concílios ecumênicos e rejeita Calcedônia e todos os concílios posteriores.",
        razoes:
          "A tradição siríaca ocidental, fundada por Severo de Antioquia (c. 465–538), considera que a condenação dos Três Capítulos foi uma manobra de Justiniano para apaziguar os miáfisitas sem abandonar Calcedônia. Filoxeno de Mabbug (c. 440–523), o grande teólogo siríaco, já havia argumentado antes de 553 que a linguagem de 'duas naturezas' era irreconciliável com a fé ciriliana, e a reafirmação de Calcedônia por Constantinopla II confirmou essa avaliação. A Igreja Siríaca também rejeita a condenação de Orígenes como irrelevante para sua tradição teológica, que nunca foi influenciada pelo origenismo.",
        situacaoAtual:
          "A Igreja Siríaca Ortodoxa mantém sua rejeição de Constantinopla II, mas participa ativamente do diálogo ecumênico com a Igreja Católica (Declaração Comum de 1984 entre João Paulo II e Inácio Zakka I Iwas) e com a Igreja Ortodoxa (Declarações de Chambésy, 1989–1993). As declarações conjuntas reconhecem convergência cristológica substancial, mas a questão da recepção dos concílios pós-efesinos permanece como obstáculo à plena comunhão.",
      },
      {
        nome: "Igreja Apostólica Armênia",
        tradicao: "Armênia (sucessora de Gregório, o Iluminador, e Mesrobes Mastósio)",
        posicao:
          "Rejeição de Constantinopla II e de todos os concílios posteriores a Éfeso (431). A Igreja Armênia reconhece apenas os três primeiros concílios ecumênicos.",
        razoes:
          "A Igreja Armênia rejeitou Calcedônia no Sínodo de Dvin (506) e manteve essa posição consistentemente ao longo de sua história. A condenação dos Três Capítulos por Constantinopla II não alterou a avaliação armênia de que a linguagem de 'duas naturezas' é nestoriana. A tradição teológica armênia, influenciada por Cirilo de Alexandria e por Filoxeno de Mabbug, insiste na fórmula 'uma natureza unida do Verbo encarnado' (mia physis tou Theou Logou sesarkōmenē) como única expressão legítima da fé cristológica.",
        situacaoAtual:
          "A Igreja Armênia mantém sua rejeição de Constantinopla II, mas o diálogo ecumênico com a Igreja Católica (Declaração Comum de 1970 entre Paulo VI e Vasken I) e com a Igreja Ortodoxa (Declarações de Chambésy) tem produzido avanços significativos na compreensão mútua das tradições cristológicas. A questão da recepção dos concílios permanece o principal obstáculo à plena comunhão.",
      },
    ],
    dialogoEcumenico:
      "O diálogo ecumênico contemporâneo entre as Igrejas Ortodoxas Orientais (não-calcedonianas) e as Igrejas Calcedonianas (Católica e Ortodoxa) tem demonstrado que a divergência cristológica que separou as tradições no século V é em grande parte terminológica, não substancial. As Declarações de Chambésy (1989, 1990, 1993) entre ortodoxos calcedonianos e não-calcedonianos reconheceram que ambas as tradições confessam a mesma fé na união hipostática de duas naturezas em uma pessoa, embora utilizem vocabulários diferentes (mia physis vs. dyo physeis). Nesse contexto, o Segundo Concílio de Constantinopla (553) é visto como um passo importante na direção da reconciliação, pois sua síntese neocalcedoniana aproximou a linguagem de Calcedônia da tradição ciriliana que as Igrejas Ortodoxas Orientais sempre defenderam. Contudo, a reafirmação explícita de Calcedônia pelo anátema 5 de 553 permanece como um obstáculo intransponível para a plena comunhão, e a questão da recepção dos concílios pós-efesinos continua a ser o problema ecumênico mais difícil entre as tradições calcedonianas e não-calcedonianas.",
  },

  recepcaoProtestante: {
    titulo: "Recepção na Tradição Protestante e Reformada",
    introducao:
      "A recepção do Segundo Concílio de Constantinopla na tradição protestante é complexa e variada, refletindo as diferentes atitudes dos reformadores e de seus sucessores em relação à autoridade dos concílios ecumênicos em geral. De modo geral, os reformadores do século XVI aceitaram os quatro primeiros concílios ecumênicos (Niceia, Constantinopla I, Éfeso, Calcedônia) como expressões legítimas da fé bíblica, mas foram mais ambivalentes em relação aos concílios posteriores, incluindo Constantinopla II. A avaliação protestante de 553 é frequentemente condicionada por três fatores: (1) a rejeição do cesaropapismo e da coerção imperial em matéria de fé; (2) a desconfiança em relação ao desenvolvimento dogmático que vai além da Escritura (sola Scriptura); (3) a avaliação da cristologia neocalcedoniana à luz da tradição agostiniana e da teologia reformada.",
    avaliacoes: [
      {
        reformador: "Martinho Lutero",
        periodo: "1483–1546",
        avaliacao:
          "Lutero não tratou de Constantinopla II de maneira sistemática, mas suas referências aos concílios ecumênicos sugerem uma aceitação implícita de sua autoridade dogmática em matéria cristológica. Em Von den Konziliis und Kirchen (1539), Lutero reconhece os quatro primeiros concílios como normativos e menciona Constantinopla II entre os concílios que 'defenderam a fé contra as heresias', embora sem análise detalhada. Sua principal objeção aos concílios posteriores não era teológica, mas eclesiológica: a interferência imperial e papal corrompia a pureza da fé bíblica.",
        fundamentos:
          "Lutero aceitava a cristologia de Calcedônia (duas naturezas em uma pessoa) e, por extensão, a síntese neocalcedoniana de 553, que considerava uma defesa legítima da fé contra o nestorianismo. Contudo, sua rejeição do cesaropapismo e da autoridade papal o levava a questionar as circunstâncias políticas do concílio, particularmente a coerção sobre Vigílio.",
      },
      {
        reformador: "João Calvino",
        periodo: "1509–1564",
        avaliacao:
          "Calvino foi mais explícito em sua avaliação dos concílios ecumênicos. Na Institutio Christianae Religionis (IV.9.8–13), ele aceita os quatro primeiros concílios como expressões fiéis da Escritura, mas expressa reservas sobre os concílios posteriores, que considera progressivamente mais corrompidos pela política e pela tradição humana. Constantinopla II é mencionado de passagem como um concílio que 'tratou de questões legítimas' mas cujas circunstâncias políticas (cesaropapismo de Justiniano) comprometem sua autoridade normativa.",
        fundamentos:
          "Calvino aceitava a cristologia calcedonense e a comunicação de idiomas (communicatio idiomatum) em sua forma moderada, o que o aproximava da síntese neocalcedoniana de 553. Contudo, sua rejeição da veneração de santos e da mariologia desenvolvida o levava a questionar a ênfase do concílio na Theotokos, que considerava excessiva e potencialmente idólatra. A condenação de Orígenes era vista com ambivalência: Calvino rejeitava a apocatástase, mas admirava a erudição exegética de Orígenes.",
      },
      {
        reformador: "Philip Melanchthon",
        periodo: "1497–1560",
        avaliacao:
          "Melanchthon, mais irenista que Lutero, aceitou os seis primeiros concílios ecumênicos (incluindo Constantinopla II) como expressões legítimas da fé cristã em sua Loci Communes (1521, revisada 1555). Ele via em 553 uma defesa necessária da cristologia bíblica contra o nestorianismo e considerava a síntese neocalcedoniana compatível com a tradição agostiniana.",
        fundamentos:
          "A aceitação de Melanchthon era fundamentada na convergência entre a cristologia de 553 e a tradição agostiniana da comunicação de idiomas, que ele considerava bíblica e patrística. Sua postura mais conciliatória em relação aos concílios refletia seu desejo de manter a continuidade com a Igreja antiga como argumento contra a acusação católica de que a Reforma era uma inovação.",
      },
      {
        reformador: "Teólogos Reformados do Século XVII (Escolástica Reformada)",
        periodo: "c. 1600–1700",
        avaliacao:
          "Os teólogos da escolástica reformada (Francis Turretin, Johannes Cocceius, Gisbertus Voetius) aceitaram Constantinopla II como concílio legítimo em matéria cristológica, mas rejeitaram suas implicações mariológicas e litúrgicas. Turretin (Institutio Theologiae Elencticae, 1679) argumentou que a condenação dos Três Capítulos era teologicamente correta, mas que as circunstâncias políticas do concílio (cesaropapismo) demonstravam os perigos da união entre Igreja e Estado.",
        fundamentos:
          "A escolástica reformada aceitava a cristologia de Calcedônia e a comunicação de idiomas, o que a aproximava da síntese de 553. Contudo, a rejeição do cesaropapismo e da tradição patrística como fonte normativa de fé (sola Scriptura) limitava a autoridade que os reformados atribuíam ao concílio.",
      },
    ],
    anglicanismo:
      "A tradição anglicana possui a avaliação mais positiva de Constantinopla II entre as comunhões protestantes. Os Trinta e Nove Artigos de Religião (1571) não mencionam Constantinopla II explicitamente, mas o Artigo XXI ('Da Autoridade dos Concílios Gerais') aceita que os concílios ecumênicos podem errar e que sua autoridade é derivada da Escritura, não intrínseca. Na prática, a Igreja da Inglaterra aceitou os seis primeiros concílios ecumênicos como normativos desde o período elisabetano, e os teólogos anglicanos do Movimento de Oxford (John Henry Newman, Edward Pusey, John Keble, século XIX) reafirmaram a autoridade de Constantinopla II como parte da 'fé indivisa da Igreja antiga'. A teologia anglicana contemporânea (notadamente a Comissão ARCIC, Anglican-Roman Catholic International Commission) aceita a cristologia de 553 como parte do patrimônio comum da cristandade e a utiliza como base para o diálogo ecumênico com a Igreja Católica e a Igreja Ortodoxa. A Liturgia anglicana do Book of Common Prayer (1662) reflete a cristologia neocalcedoniana em suas formulações sobre a encarnação e a paixão de Cristo.",
    luteranismo:
      "A tradição luterana mantém uma atitude de aceitação cautelosa em relação a Constantinopla II. A Fórmula de Concórdia (1577), o documento confessional mais detalhado do luteranismo, aceita a cristologia de Calcedônia e a comunicação de idiomas em sua forma mais radical (genus maiestaticum), o que a aproxima da síntese neocalcedoniana de 553 mais do que qualquer outra tradição protestante. Os teólogos luteranos do século XVII (Johann Gerhard, Abraham Calov) aceitaram Constantinopla II como concílio legítimo e utilizaram seus anátemas contra o nestorianismo para fundamentar a cristologia luterana da ubiquidade do corpo de Cristo (ubiquitas corporis Christi). A teologia luterana contemporânea (notadamente a Escola de Erlangen e a teologia da cruz de Jürgen Moltmann) continua a invocar a fórmula teopasquista de 553 ('Um da Trindade padeceu na carne') como base para a theologia crucis e para a doutrina do Deus sofredor.",
    calvinismo:
      "A tradição calvinista (reformada) mantém a atitude mais reservada em relação a Constantinopla II entre as principais comunhões protestantes. Embora aceitem a cristologia de Calcedônia e a comunicação de idiomas em sua forma moderada (communicatio idiomatum verbalis), os teólogos reformados rejeitam a comunicação de idiomas em sua forma radical (genus maiestaticum luterano) e, por extensão, são mais cautelosos em relação à síntese neocalcedoniana de 553, que consideram excessivamente 'ciriliana' e potencialmente tendente ao monofisismo. A condenação de Orígenes é aceita quanto à apocatástase, mas a condenação da pré-existência das almas é considerada irrelevante para a teologia reformada, que nunca foi influenciada pelo origenismo. A teologia reformada contemporânea (Karl Barth, T. F. Torrance) tende a valorizar a cristologia de 553 por sua ênfase na unidade de sujeito em Cristo e na realidade da encarnação, mas rejeita o cesaropapismo e a coerção imperial como modelos de governo eclesial.",
    sintese:
      "A recepção protestante de Constantinopla II é, em síntese, uma aceitação condicional e seletiva. As tradições protestantes aceitam a cristologia do concílio (união hipostática, comunicação de idiomas, teopasquismo) como compatível com a Escritura e com a tradição patrística, mas rejeitam suas circunstâncias políticas (cesaropapismo), suas implicações mariológicas (Theotokos em sentido 'próprio e verdadeiro') e suas consequências eclesiológicas (subordinação do papado ao concílio imperial). A avaliação protestante de 553 é, assim, um microcosmo da atitude reformada em relação à tradição eclesial em geral: respeito pela Igreja antiga como testemunha da Escritura, mas recusa de qualquer autoridade normativa que rivalize com a sola Scriptura. O diálogo ecumênico contemporâneo (Luterano-Católico, Reformado-Ortodoxo, Anglicano-Ortodoxo) tem demonstrado que a cristologia de 553 é um terreno de convergência surpreendentemente amplo entre as tradições protestantes e as Igrejas históricas do Oriente e do Ocidente.",
  },
};

export interface EventoRecepcao {
  periodo: string;
  titulo: string;
  descricao: string;
  importancia: string;
}

export const linhaDoTempoRecepcao: EventoRecepcao[] = [
  {
    periodo: "553–561",
    titulo: "Capitulação de Vigílio e início do Cisma Tricapitulino",
    descricao:
      "O Papa Vigílio aceita as decisões do concílio no Constitutum II (554), mas sua capitulação provoca a ruptura com os bispos do norte da Itália.",
    importancia:
      "Marcou o início do mais longo cisma da cristandade ocidental antes de 1054.",
  },
  {
    periodo: "568",
    titulo: "Invasão lombarda da Itália",
    descricao:
      "A invasão lombarda isola as dioceses do norte da Itália do controle bizantino, fortalecendo a resistência tricapitulina.",
    importancia:
      "A divisão política agravou a divisão eclesial e dificultou a reconciliação por mais de um século.",
  },
  {
    periodo: "581",
    titulo: "Reconciliação de Milão",
    descricao:
      "Milão retorna à comunhão romana durante o pontificado de Pelágio II, após a morte do arcebispo tricapitulino Frontão.",
    importancia:
      "Foi a primeira grande diocese ocidental a reconciliar-se com Roma após o cisma.",
  },
  {
    periodo: "590–604",
    titulo: "Pontificado de Gregório Magno",
    descricao:
      "Gregório Magno combina persuasão teológica com pressão política para reconciliar as dioceses africanas com Roma.",
    importancia:
      "Gregório é o principal responsável pela superação do Cisma Tricapitulino no norte da África.",
  },
  {
    periodo: "606–607",
    titulo: "Reconciliação da Ístria e Vêneto",
    descricao:
      "A pressão do exarca bizantino de Ravena força a divisão entre os patriarcados de Aquileia-Grado e Aquileia-Old.",
    importancia:
      "Marcou o início do fim da resistência tricapitulina no norte da Itália.",
  },
  {
    periodo: "692",
    titulo: "Sínodo Quinissexto (Trullo)",
    descricao:
      "O Sínodo Quinissexto confirma formalmente a autoridade de Constantinopla II como Quinto Concílio Ecumênico.",
    importancia:
      "Consolidou a recepção oriental do concílio e sua aceitação como dogma vinculante.",
  },
  {
    periodo: "698",
    titulo: "Reconciliação final de Aquileia",
    descricao:
      "O último reduto tricapitulino, o patriarcado de Aquileia-Old, reconcilia-se com Roma durante o pontificado de Sérgio I.",
    importancia:
      "Encerrou formalmente o Cisma Tricapitulino após 145 anos de ruptura.",
  },
  {
    periodo: "787",
    titulo: "Segundo Concílio de Niceia",
    descricao:
      "O Segundo Concílio de Niceia confirma a autoridade dos seis concílios ecumênicos, incluindo Constantinopla II.",
    importancia:
      "Reafirmou a ecumenicidade de 553 no contexto da crise iconoclasta.",
  },
  {
    periodo: "1054",
    titulo: "Grande Cisma",
    descricao:
      "As tensões acumuladas desde o Cisma Tricapitulino contribuem para o Grande Cisma entre Oriente e Ocidente.",
    importancia:
      "As feridas do Cisma Tricapitulino nunca foram completamente cicatrizadas.",
  },
  {
    periodo: "1870",
    titulo: "Vaticano I",
    descricao:
      "O Concílio Vaticano I define a infalibilidade papal, mas não aborda diretamente o caso Vigílio.",
    importancia:
      "A definição da infalibilidade tornou mais urgente a questão das contradições de Vigílio.",
  },
  {
    periodo: "1964–1995",
    titulo: "Diálogo ecumênico moderno",
    descricao:
      "A Declaração Cristológica Comum (1994) entre Roma e a Igreja Assíria do Oriente reafirma a fé de Calcedônia sem renunciar à veneração de Teodoro.",
    importancia:
      "Demonstra que as feridas de Constantinopla II ainda estão em processo de cura.",
  },
];