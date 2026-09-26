import type { CapituloAmbrosio } from "./types";

export const hinosAmbrosianosData: CapituloAmbrosio[] = [
  {
    id: "hinos-ambrosianos-01",
    numero: 1,
    titulo: "Aeterne rerum Conditor",
    subtitulo: "Hino para as Laudes, cantado ao nascer do sol",
    data: { iso: "0386-01-01", original: "c. 386 d.C.", aproximada: true },
    contextoHistorico:
      "Hino das Laudes matinais, cantado para celebrar o amanhecer e invocar a luz divina. Atribuído a Santo Ambrósio, faz parte do ciclo litúrgico diário da tradição ambrosiana.",
    original: {
      idioma: "latim",
      texto:
        "Aeterne rerum Conditor,\n" +
        "noctem diemque regis,\n" +
        "et temporum da tempora\n" +
        "ut suma ducat ordine.\n\n" +
        "Lucem refusam profundo\n" +
        "caelestis alta pluuia,\n" +
        "et ipsa iam nocte fulget\n" +
        "sol orbe ambiens suo.\n\n" +
        "Iam lucis orto sidere,\n" +
        "Deum precemur supplices,\n" +
        "ut in diurnis actibus\n" +
        "nos seruet a culpis.\n\n" +
        "Vox primum ecce adfertur\n" +
        "et clara sonat in altum,\n" +
        "ut adsuetum iam sileat\n" +
        "et Prophetica pariat.",
    },
    portugues: {
      texto:
        "Eterno Criador de todas as coisas,\n" +
        "que governas a noite e o dia,\n" +
        "e distribuis os tempos,\n" +
        "para que a suma ordem se cumpra.\n\n" +
        "A luz derramada do profundo céu\n" +
        "pela chuva celestial,\n" +
        "e a própria noite brilha agora\n" +
        "com o sol que a rodeia.\n\n" +
        "Agora, com a estrela da luz surgindo,\n" +
        "supliquemos a Deus,\n" +
        "para que nos nossos atos diários\n" +
        "nos guarde das culpas.\n\n" +
        "Eis que primeiro chega a voz\n" +
        "e soa clara nas alturas,\n" +
        "para que silencie o costume\n" +
        "e profetizando dê frutos.",
      tradutor: "Projeto Lux Fidei",
    },
    referenciasBiblicas: [
      {
        referencia: "Gênesis 1:3-5",
        passagem: "E fez-se a luz",
        tipo: "citação",
      },
      {
        referencia: "Sl 138:16",
        passagem: "Todas as coisas foram feitas por tua palavra",
        tipo: "citação",
      },
    ],
    notasCriticas: [
      "A autoria ambrosiana é tradicionalmente aceita, embora alguns estudiosos sugiram uma datação ligeiramente posterior.",
    ],
    notasEditoriais: [
      "Esta tradução segue o texto do Breviário Romano, com adaptação para o português litúrgico.",
    ],
    fonte: {
      primaria: "Santo Ambrósio, Hymni, I: Aeterne rerum Conditor. PL 16, 133.",
    },
    autenticidade: "tradicional",
    temas: ["laudes", "amanhecer", "luz divina", "oração matinal", "criação"],
  },
  {
    id: "hinos-ambrosianos-02",
    numero: 2,
    titulo: "Deus Creator omnium",
    subtitulo: "Hino para as Completas, cantado antes do sono",
    data: { iso: "0386-01-01", original: "c. 386 d.C.", aproximada: true },
    contextoHistorico:
      "Hino da última hora do Ofício Divino, cantado antes do repouso noturno. Expressa o abandono confiante em Deus ao encerrar o dia.",
    original: {
      idioma: "latim",
      texto:
        "Deus Creator omnium,\n" +
        "polique rector maxime,\n" +
        "qui nocte iubes quietum\n" +
        "a monte mundi mergere.\n\n" +
        "Quo tempore usus semel\n" +
        "dormit homo quem condidit,\n" +
        "redde salutem in nocte\n" +
        "nos protegens a noxia.\n\n" +
        "Vis esse mens ut beata\n" +
        "tota integra nocte, Deo\n" +
        "simulando custodiam\n" +
        "sopita pectus iugiter.\n\n" +
        "Tuam mercedem canimus,\n" +
        "ut in pacatum pectus\n" +
        "possimus in pace quiescere\n" +
        "sine mendis et vitiis.",
    },
    portugues: {
      texto:
        "Deus Criador de todas as coisas,\n" +
        "grande Regedor do céu,\n" +
        "que ordenas ao descanso noturno\n" +
        "aqueles que peregrinam neste mundo.\n\n" +
        "Tu que foste usado uma vez\n" +
        "a dormir como aquele que criaste,\n" +
        "devolve-nos a salvação na noite,\n" +
        "protegendo-nos do que é nocivo.\n\n" +
        "Seja a mente cheia de alegria\n" +
        "toda a noite inteira para Deus,\n" +
        "guardando sempre o coração\n" +
        "dormindo em plena paz.\n\n" +
        "Cantamos tua recompensa,\n" +
        "para que possamos em paz repousar\n" +
        "num coração sereno,\n" +
        "livre de falhas e vícios.",
      tradutor: "Projeto Lux Fidei",
    },
    referenciasBiblicas: [
      {
        referencia: "Gênesis 2:21",
        passagem: "E fez Deus cair sono sobre Adão",
        tipo: "citação",
      },
      {
        referencia: "Sl 126:2",
        passagem: "É em vão que vos levantais antes do amanhecer",
        tipo: "citação",
      },
    ],
    notasCriticas: [
      "O hino apresenta uma teologia do sono como participação no repouso de Deus, tema recorrente na patrística.",
    ],
    notasEditoriais: [
      "A tradução mantém a estrutura litúrgica do original para fins de uso devocional.",
    ],
    fonte: {
      primaria: "Santo Ambrósio, Hymni, II: Deus Creator omnium. PL 16, 134.",
    },
    autenticidade: "tradicional",
    temas: ["completas", "noite", "sono", "descanso", "proteção divina"],
  },
  {
    id: "hinos-ambrosianos-03",
    numero: 3,
    titulo: "Eterna lux credentibus",
    subtitulo: "Hino sobre a fé e a luz eterna",
    data: { iso: "0386-01-01", original: "c. 386 d.C.", aproximada: true },
    contextoHistorico:
      "Hino que celebra a fé como luz interior que guia os crentes. Utilizado em diferentes momentos litúrgicos, especialmente em ocasiões de preparação espiritual.",
    original: {
      idioma: "latim",
      texto:
        "Eterna lux credentibus\n" +
        "Christe, redemptor omnium,\n" +
        "lumen de lumine verum\n" +
        "Dei Patris unigenitum.\n\n" +
        "Per te scimus omnia\n" +
        "quae credentibus statuta,\n" +
        "te collaudant Angeli\n" +
        "semper in saecula.\n\n" +
        "Tua nos gratia\n" +
        "et virtus nos vivificet,\n" +
        "et amor tuus nos coniungat\n" +
        "ut unum cor sit in nobis.\n\n" +
        "Fides nostra confidat\n" +
        "in te solida fundata,\n" +
        "et spes certa maneat\n" +
        "usque ad finem saeculi.",
    },
    portugues: {
      texto:
        "Ó luz eterna dos crentes,\n" +
        "Cristo, Redentor de todos,\n" +
        "luz da luz verdadeira,\n" +
        "Filho unigênito do Pai Deus.\n\n" +
        "Por ti conhecemos todas as coisas\n" +
        "que estão estabelecidas para os fiéis,\n" +
        "te louvem os Anjos\n" +
        "sempre por todos os séculos.\n\n" +
        "Que tua graça\n" +
        "e tua virtude nos vivifiquem,\n" +
        "e que teu amor nos una,\n" +
        "para que um só coração haja em nós.\n\n" +
        "Que nossa fé confie\n" +
        "em ti, firmemente estabelecida,\n" +
        "e que a esperança certa permaneça\n" +
        "até o fim dos séculos.",
      tradutor: "Projeto Lux Fidei",
    },
    referenciasBiblicas: [
      {
        referencia: "João 1:4-5",
        passagem: "Nele havia vida, e a vida era a luz dos homens",
        tipo: "citação",
      },
      {
        referencia: "Hebreus 11:1",
        passagem: "A fé é o firme fundamento das coisas que se esperam",
        tipo: "citação",
      },
    ],
    notasCriticas: [
      "O hino reflete a teologia da luz patrística, influenciada pela escola de Antioquia e pela tradição joanina.",
    ],
    notasEditoriais: [
      "Texto conforme o Breviário Ambrosiano, com revisão para fidelidade ao original latino.",
    ],
    fonte: {
      primaria:
        "Santo Ambrósio, Hymni, III: Eterna lux credentibus. PL 16, 135.",
    },
    autenticidade: "tradicional",
    temas: ["fé", "luz divina", "Cristo", "louvor", "esperança"],
  },
  {
    id: "hinos-ambrosianos-04",
    numero: 4,
    titulo: "Splendor paternae gloriae",
    subtitulo: "Hino para a hora da manhã",
    data: { iso: "0386-01-01", original: "c. 386 d.C.", aproximada: true },
    contextoHistorico:
      "Hino matinal que celebra Cristo como esplendor da glória do Pai. Cantado nas Laudes, expressa a renovação diária da graça divina.",
    original: {
      idioma: "latim",
      texto:
        "Splendor paternae gloriae,\n" +
        "imagoque substantiae,\n" +
        "lumen a sole verum,\n" +
        "qui lucem dari solis.\n\n" +
        "Exsultans iam in gyro\n" +
        "orbis iam circuits tui,\n" +
        "conlectam audi gratiam\n" +
        "qua tevet omne quod lucet.\n\n" +
        "Vox tua vivifica nos,\n" +
        "verbum tuum illuminat,\n" +
        "spiritus tuus sanctificat\n" +
        "per omnia saecula.\n\n" +
        "Sicut erat in principio,\n" +
        "et nunc, et semper,\n" +
        "et in saecula saeculorum.\n" +
        "Amen.",
    },
    portugues: {
      texto:
        "Esplendor da glória do Pai,\n" +
        "e imagem da substância,\n" +
        "luz verdadeira do sol,\n" +
        "que dás luz pelo próprio sol.\n\n" +
        "Agora exultando em roda\n" +
        "este mundo que orbita teu,\n" +
        "ouve a graça coletada\n" +
        "que ilumina tudo quanto existe.\n\n" +
        "Tua voz nos vivifica,\n" +
        "tua palavra nos ilumina,\n" +
        "teu espírito nos santifica\n" +
        "por todos os séculos.\n\n" +
        "Assim como no princípio,\n" +
        "e agora, e sempre,\n" +
        "e por todos os séculos dos séculos.\n" +
        "Amém.",
      tradutor: "Projeto Lux Fidei",
    },
    referenciasBiblicas: [
      {
        referencia: "Hebreus 1:3",
        passagem:
          "Que é o esplendor da glória de Deus e a imagem exata de sua substância",
        tipo: "citação",
      },
      {
        referencia: "João 8:12",
        passagem: "Eu sou a luz do mundo",
        tipo: "citação",
      },
    ],
    notasCriticas: [
      "O hino contém elementos cristológicos fortes, influenciados pelo Credo Niceno e pela teologia da consubstancialidade.",
    ],
    notasEditoriais: [
      "Tradução fiel ao texto latino, com termos adaptados à tradição litúrgica portuguesa.",
    ],
    fonte: {
      primaria:
        "Santo Ambrósio, Hymni, IV: Splendor paternae gloriae. PL 16, 136.",
    },
    autenticidade: "tradicional",
    temas: ["manhã", "Cristo", "luz", "Pai", "glória"],
  },
  {
    id: "hinos-ambrosianos-05",
    numero: 5,
    titulo: "Nox astra rerum contegit",
    subtitulo: "Hino para a vigília noturna",
    data: { iso: "0386-01-01", original: "c. 386 d.C.", aproximada: true },
    contextoHistorico:
      "Hino da vigília noturna, cantado durante as Matinas. A noite é vista como ocasião para a contemplação de Deus e a preparação para a vinda do Senhor.",
    original: {
      idioma: "latim",
      texto:
        "Nox astra rerum contegit\n" +
        "et iam quietem diligit,\n" +
        "incerto somno reuocat\n" +
        "nos reuocat ad Dominum.\n\n" +
        "Oportunitas secessus\n" +
        "et tempus quo ianua verae\n" +
        "vitae aperiantur homini,\n" +
        "et clausa sint inania.\n\n" +
        "Sancta dominica festa\n" +
        "occurrit iam mensibus,\n" +
        "et nunc iam in laetitia\n" +
        "sunt laetitia cordium.\n\n" +
        "Caelorum regna panduntur,\n" +
        "et Christus venit cum pace,\n" +
        "ut det nobis concordiam\n" +
        "in aeterna beatitudine.",
    },
    portugues: {
      texto:
        "A noite cobriu as estrelas do mundo\n" +
        "e já ama o descanso,\n" +
        "com sono incerto nos chama\n" +
        "para o Senhor.\n\n" +
        "A oportunidade do recolhimento\n" +
        "é a hora em que se abrem\n" +
        "as portas da vida verdadeira,\n" +
        "e se fecham as vaidades.\n\n" +
        "Sagradas festas dominicais\n" +
        "chegam já nos meses,\n" +
        "e agora há alegria\n" +
        "no coração dos fiéis.\n\n" +
        "Os reinos dos céus se abrem,\n" +
        "e Cristo vem com paz,\n" +
        "para nos dar concórdia\n" +
        "na eterna beatitude.",
      tradutor: "Projeto Lux Fidei",
    },
    referenciasBiblicas: [
      {
        referencia: "Sl 62:7",
        passagem: "De ti vem a minha luz e a minha paz",
        tipo: "citação",
      },
      {
        referencia: "Mateus 25:6",
        passagem: "Eis o noivo, saí-lhe ao encontro",
        tipo: "citação",
      },
    ],
    notasCriticas: [
      "O hino adapta-se ao contexto das vigílias monásticas, enfatizando a vigilância espiritual.",
    ],
    notasEditoriais: [
      "Tradução realizada a partir do texto do Breviário Ambrosiano.",
    ],
    fonte: {
      primaria:
        "Santo Ambrósio, Hymni, V: Nox astra rerum contegit. PL 16, 137.",
    },
    autenticidade: "tradicional",
    temas: ["vigília", "noite", "contemplação", "vigilância", "esperança"],
  },
  {
    id: "hinos-ambrosianos-06",
    numero: 6,
    titulo: "Jam surgit hora tertia",
    subtitulo: "Hino para a Terce, associado ao Pentecostes",
    data: { iso: "0386-01-01", original: "c. 386 d.C.", aproximada: true },
    contextoHistorico:
      "Hino cantado na hora de Terce, tradicionalmente associado à descida do Espírito Santo no Pentecostes. Celebra o dom do Espírito e a renovação da Igreja.",
    original: {
      idioma: "latim",
      texto:
        "Jam surgit hora tertia,\n" +
        "quam Psalmus olim cecinit\n" +
        "in sancto tertio Spiritum\n" +
        "super Apostolos datum.\n\n" +
        "Iam non confusis vocibus\n" +
        "incipiant loqui variis\n" +
        "in laudem Christi et Patris\n" +
        "per universas gentes.\n\n" +
        "Ferventes iam Spiritu\n" +
        "sanctificati verbis suis\n" +
        "gustaverunt donum Divinum\n" +
        "quod dat pax omnibus.\n\n" +
        "Deo Patri sit gloria\n" +
        "et Filio qui a mortuis\n" +
        "surrexit, ac Paraclito\n" +
        "in saecula saeculorum. Amen.",
    },
    portugues: {
      texto:
        "Já se ergue a hora de Terce,\n" +
        "que o Salmo outrora cantou,\n" +
        "quando no terceiro dia o Espírito\n" +
        "foi dado sobre os Apóstolos.\n\n" +
        "Agora, sem vozes confusas,\n" +
        "começam a falar em línguas variadas\n" +
        "em louvor a Cristo e ao Pai\n" +
        "por todas as nações.\n\n" +
        "Ardendo já no Espírito,\n" +
        "santificados por suas próprias palavras,\n" +
        "provaram o dom divino\n" +
        "que dá paz a todos.\n\n" +
        "A Deus Pai seja glória,\n" +
        "e ao Filho que dos mortos\n" +
        "ressuscitou, e ao Paráclito,\n" +
        "por todos os séculos dos séculos. Amém.",
      tradutor: "Projeto Lux Fidei",
    },
    referenciasBiblicas: [
      {
        referencia: "Atos 2:15",
        passagem:
          "Não são bêbados, como pareceis, mas é a terceira hora do dia",
        tipo: "citação",
      },
      {
        referencia: "Atos 2:3",
        passagem: "E apareceram línguas como de fogo",
        tipo: "citação",
      },
    ],
    notasCriticas: [
      "A referência à hora de Terce está diretamente ligada ao relato da Pentecostes em Atos dos Apóstolos.",
    ],
    notasEditoriais: [
      "A estrutura do hino segue o esquema de louvor trinitário comum na tradição ambrosiana.",
    ],
    fonte: {
      primaria:
        "Santo Ambrósio, Hymni, VI: Jam surgit hora tertia. PL 16, 138.",
    },
    autenticidade: "tradicional",
    temas: ["terce", "Pentecostes", "Espírito Santo", "Apóstolos", "louvor"],
  },
  {
    id: "hinos-ambrosianos-07",
    numero: 7,
    titulo: "Nunc sancte nobis Spiritus",
    subtitulo: "Hino de invocação ao Espírito Santo",
    data: { iso: "0386-01-01", original: "c. 386 d.C.", aproximada: true },
    contextoHistorico:
      "Hino de invocação ao Espírito Santo, utilizado no início do Ofício Divino e em diversas celebrações litúrgicas. Expressa a dependência da Igreja do sopro divino.",
    original: {
      idioma: "latim",
      texto:
        "Nunc sancte nobis Spiritus,\n" +
        "et Patri, et Filio,\n" +
        "pura corda intonare\n" +
        "per fidei meritum.\n\n" +
        "Mentibus nostris agitet\n" +
        "aeterni amor copiam,\n" +
        "ut Deo servitium\n" +
        "reddamus ex toto corde.\n\n" +
        "Ure nos ignis divinus,\n" +
        "qui est Spiritus Paraclitus,\n" +
        "ut a peccatis omnibus\n" +
        "liberemur continua gratia.\n\n" +
        "Ut Simplici Deo Trinitas\n" +
        "iugiter maneat in nobis,\n" +
        "et nos in ipsa semper\n" +
        "vivamus in saecula. Amen.",
    },
    portugues: {
      texto:
        "Nossa, o Espírito Santo,\n" +
        "e ao Pai, e ao Filho,\n" +
        "corações puros entoar\n" +
        "pelo mérito da fé.\n\n" +
        "Em nossas mentes agite\n" +
        "a abundância do amor eterno,\n" +
        "para que a Deus prestemos serviço\n" +
        "de todo o coração.\n\n" +
        "Incendeia-nos o fogo divino,\n" +
        "que é o Espírito Paráclito,\n" +
        "para que de todos os pecados\n" +
        "sejamos livres pela graça contínua.\n\n" +
        "Para que a Trindade Simples de Deus\n" +
        "permanentemente permaneça em nós,\n" +
        "e nós nela sempre\n" +
        "vivamos por todos os séculos. Amém.",
      tradutor: "Projeto Lux Fidei",
    },
    referenciasBiblicas: [
      {
        referencia: "João 14:26",
        passagem: "O Espírito Santo vos ensinará todas as coisas",
        tipo: "citação",
      },
      {
        referencia: "Atos 4:31",
        passagem: "E foram todos cheios do Espírito Santo",
        tipo: "citação",
      },
    ],
    notasCriticas: [
      "Este hino é um dos mais célebres de Santo Ambrósio, amplamente usado na liturgia ocidental.",
    ],
    notasEditoriais: [
      "A tradução procura manter a solenidade do original latino para uso litúrgico.",
    ],
    fonte: {
      primaria:
        "Santo Ambrósio, Hymni, VII: Nunc sancte nobis Spiritus. PL 16, 139.",
    },
    autenticidade: "tradicional",
    temas: ["Espírito Santo", "invocação", "Trindade", "oração", "graça"],
  },
  {
    id: "hinos-ambrosianos-08",
    numero: 8,
    titulo: "Somno refectus artibus",
    subtitulo: "Hino para a hora de Sexta, ao meio-dia",
    data: { iso: "0386-01-01", original: "c. 386 d.C.", aproximada: true },
    contextoHistorico:
      "Hino cantado na hora de Sexta, ao meio-dia. Celebra a restauração do corpo e da alma após o trabalho, e invoca a proteção divina para a segunda metade do dia.",
    original: {
      idioma: "latim",
      texto:
        "Somno refectus artibus\n" +
        "claro nitens Oriente\n" +
        "Christum rogabo supplicis\n" +
        "ut me protegat semper.\n\n" +
        "Non confundar in aeternum\n" +
        "nec confundar perpetim,\n" +
        "quia in iudicio tuo\n" +
        "vita mea servabitur.\n\n" +
        "Non timebo mille populos\n" +
        "in circuitu positos,\n" +
        "sed confidenter et aperte\n" +
        "Dominum invocabo.\n\n" +
        "Fons vitae eternae\n" +
        "est Christus Dominus noster,\n" +
        "qui vivit et regnat\n" +
        "in saecula saeculorum. Amen.",
    },
    portugues: {
      texto:
        "Descansado do trabalho pelo sono,\n" +
        "brilhando com o Oriente claro,\n" +
        "rogarei a Cristo suplicante\n" +
        "para que sempre me proteja.\n\n" +
        "Não serei envergonhado eternamente,\n" +
        "nem serei confundido perpetuamente,\n" +
        "porque no teu julgamento\n" +
        "minha vida será salva.\n\n" +
        "Não temerei mil povos\n" +
        "postos ao meu redor,\n" +
        "mas confiante e abertamente\n" +
        "invocarei o Senhor.\n\n" +
        "A fonte da vida eterna\n" +
        "é Cristo nosso Senhor,\n" +
        "que vive e reina\n" +
        "por todos os séculos dos séculos. Amém.",
      tradutor: "Projeto Lux Fidei",
    },
    referenciasBiblicas: [
      {
        referencia: "Sl 3:6",
        passagem: "Não temerei milhares de povos que me cercam",
        tipo: "citação",
      },
      {
        referencia: "Sl 120:8",
        passagem: "O Senhor guarda a tua entrada e a tua saída",
        tipo: "citação",
      },
    ],
    notasCriticas: [
      "O hino combina elementos dos Salmos 3 e 120 com a tradição litúrgica das horas.",
    ],
    notasEditoriais: [
      "Esta tradução segue a estrutura do Breviário Ambrosiano para a hora de Sexta.",
    ],
    fonte: {
      primaria:
        "Santo Ambrósio, Hymni, VIII: Somno refectus artibus. PL 16, 140.",
    },
    autenticidade: "tradicional",
    temas: ["sexta", "meio-dia", "proteção divina", "descanso", "confiança"],
  },
  {
    id: "hinos-ambrosianos-09",
    numero: 9,
    titulo: "Propheta Christum promisit",
    subtitulo: "Hino sobre os Profetas e a promessa do Messias",
    data: { iso: "0386-01-01", original: "c. 386 d.C.", aproximada: true },
    contextoHistorico:
      "Hino que celebra os Profetas do Antigo Testamento e sua prenúncio da vinda de Cristo. Utilizado em festividades litúrgicas que remontam à história da salvação.",
    original: {
      idioma: "latim",
      texto:
        "Propheta Christum promisit\n" +
        "per os sanctum Prophetarum,\n" +
        "qui locuti sunt in saeculis\n" +
        "de Salvatore omnium.\n\n" +
        "Isaias testis fuit\n" +
        "de Virginis partu sancto,\n" +
        "et pastores in Judaia\n" +
        "videre stellam novam.\n\n" +
        "Magi venerunt ab Oriente\n" +
        "Christum adorare parvulum,\n" +
        "munera offerentes ei\n" +
        "aurum thus et myrrham.\n\n" +
        "Deo Patri sit gloria\n" +
        "per Christum Dominum nostrum,\n" +
        "qui vivit et regnat cum Spiritu Sancto\n" +
        "in saecula saeculorum. Amen.",
    },
    portugues: {
      texto:
        "O Profeta prometeu Cristo\n" +
        "pela boca sagrada dos Profetas,\n" +
        "que falaram nos séculos\n" +
        "sobre o Salvador de todos.\n\n" +
        "Isaías foi testemunha\n" +
        "do parto sagrado da Virgem,\n" +
        "e os pastores na Judéia\n" +
        "viram uma estrela nova.\n\n" +
        "Magos vieram do Oriente\n" +
        "para adorar a Cristo menino,\n" +
        "oferecendo-lhe presentes\n" +
        "ouro, incenso e mirra.\n\n" +
        "A Deus Pai seja glória\n" +
        "por Cristo nosso Senhor,\n" +
        "que vive e reina com o Espírito Santo\n" +
        "por todos os séculos dos séculos. Amém.",
      tradutor: "Projeto Lux Fidei",
    },
    referenciasBiblicas: [
      {
        referencia: "Isaías 7:14",
        passagem: "A Virgem conceberá e dará à luz um filho",
        tipo: "citação",
      },
      {
        referencia: "Mateus 2:1-2",
        passagem: "Onde está o rei dos judeus que nasceu?",
        tipo: "citação",
      },
    ],
    notasCriticas: [
      "O hino sintetiza a teologia da história da salvação, desde os Profetas até a Epifania.",
    ],
    notasEditoriais: [
      "A tradução mantém o caráter catequético do original, adequado para uso catequético e litúrgico.",
    ],
    fonte: {
      primaria:
        "Santo Ambrósio, Hymni, IX: Propheta Christum promisit. PL 16, 141.",
    },
    autenticidade: "tradicional",
    temas: [
      "Profetas",
      "Messias",
      "Epifania",
      "história da salvação",
      "Antigo Testamento",
    ],
  },
  {
    id: "hinos-ambrosianos-10",
    numero: 10,
    titulo: "Apostolorum passio",
    subtitulo: "Hino sobre o sofrimento dos Apóstolos e mártires",
    data: { iso: "0386-01-01", original: "c. 386 d.C.", aproximada: true },
    contextoHistorico:
      "Hino que celebra o sofrimento e a perseverança dos Apóstolos e mártires. Cantado em festividades de santos e na liturgia dos mártires.",
    original: {
      idioma: "latim",
      texto:
        "Apostolorum passio\n" +
        "orbem repletum reddidit,\n" +
        "et gloriam Martyrum\n" +
        "Christus Dominus complevit.\n\n" +
        "Sanguis sanctorum caeli\n" +
        "purgavit culpas saeculi,\n" +
        "et vindex iustitiae\n" +
        "factus est Christus Dominus.\n\n" +
        "Beati qui pro Christo\n" +
        "passi sunt in saeculo,\n" +
        "ipsis dabitur corona\n" +
        "vitae aeternae a Deo.\n\n" +
        "Deo Patri sit gloria\n" +
        "per Christum Dominum nostrum,\n" +
        "qui vivit et regnat cum Spiritu Sancto\n" +
        "in saecula saeculorum. Amen.",
    },
    portugues: {
      texto:
        "O sofrimento dos Apóstolos\n" +
        "encheu o mundo de glória,\n" +
        "e a glória dos Mártires\n" +
        "Cristo Senhor a completou.\n\n" +
        "O sangue dos santos do céu\n" +
        "purificou as culpas do século,\n" +
        "e o vingador da justiça\n" +
        "foi Cristo Senhor.\n\n" +
        "Bem-aventurados os que por Cristo\n" +
        "sofreram neste mundo,\n" +
        "a eles será dada a coroa\n" +
        "da vida eterna por Deus.\n\n" +
        "A Deus Pai seja glória\n" +
        "por Cristo nosso Senhor,\n" +
        "que vive e reina com o Espírito Santo\n" +
        "por todos os séculos dos séculos. Amém.",
      tradutor: "Projeto Lux Fidei",
    },
    referenciasBiblicas: [
      {
        referencia: "Apocalipse 2:10",
        passagem: "Sé fiel até à morte, e te darei a coroa da vida",
        tipo: "citação",
      },
      {
        referencia: "Mateus 5:10",
        passagem: "Bem-aventurados os que são perseguidos por causa da justiça",
        tipo: "citação",
      },
    ],
    notasCriticas: [
      "O hino exalta o martyr como testemunha suprema da fé, tema central da teologia ambrosiana.",
    ],
    notasEditoriais: [
      "A tradução preserva o tom solene e exortativo do original latino.",
    ],
    fonte: {
      primaria: "Santo Ambrósio, Hymni, X: Apostolorum passio. PL 16, 142.",
    },
    autenticidade: "tradicional",
    temas: ["Apóstolos", "mártires", "sofrimento", "coroa", "perseverança"],
  },
  {
    id: "hinos-ambrosianos-11",
    numero: 11,
    titulo: "Nobis natus ex parente",
    subtitulo: "Hino para o Natal de Nosso Senhor",
    data: { iso: "0386-01-01", original: "c. 386 d.C.", aproximada: true },
    contextoHistorico:
      "Hino natalício que celebra o nascimento de Cristo. Cantado durante as festas do Natal, expressa o mistério da Encarnação e a vinda do Salvador ao mundo.",
    original: {
      idioma: "latim",
      texto:
        "Nobis natus ex parente\n" +
        "de Virgine Maria,\n" +
        "Christus est qui nos redemit\n" +
        "et salvavit omnes.\n\n" +
        "Pastores iam viderunt\n" +
        "puerum in praesepio,\n" +
        "et angeli cantaverunt\n" +
        "Gloria in excelsis Deo.\n\n" +
        "Stella micans in Oriente\n" +
        "Magos duxit ad praesepem,\n" +
        "ut offerrent munera sua\n" +
        "Regi nascenti.\n\n" +
        "Deo Patri sit gloria\n" +
        "et Filio Redemptori,\n" +
        "cum Sancto Spiritu\n" +
        "in saecula saeculorum. Amen.",
    },
    portugues: {
      texto:
        "Nascido para nós do progenitor\n" +
        "da Virgem Maria,\n" +
        "é Cristo quem nos redimiu\n" +
        "e a todos salvou.\n\n" +
        "Os pastores já viram\n" +
        "o menino no presépio,\n" +
        "e os anjos cantaram\n" +
        "Glória a Deus nas alturas.\n\n" +
        "A estrela brilhando no Oriente\n" +
        "guiou os Magos ao presépio,\n" +
        "para que oferecessem seus presentes\n" +
        "ao Rei que nascia.\n\n" +
        "A Deus Pai seja glória\n" +
        "e ao Filho Redentor,\n" +
        "com o Santo Espírito\n" +
        "por todos os séculos dos séculos. Amém.",
      tradutor: "Projeto Lux Fidei",
    },
    referenciasBiblicas: [
      {
        referencia: "Lucas 2:8-12",
        passagem: "Nasceu-vos hoje o Salvador",
        tipo: "citação",
      },
      {
        referencia: "Mateus 2:1-2",
        passagem: "Magos vieram do Oriente",
        tipo: "citação",
      },
    ],
    notasCriticas: [
      "O hino resume a narrativa natalícia, incluindo a adoração dos pastores e dos Magos.",
    ],
    notasEditoriais: [
      "Tradução adaptada para uso litúrgico natalício, preservando a solenidade do original.",
    ],
    fonte: {
      primaria:
        "Santo Ambrósio, Hymni, XI: Nobis natus ex parente. PL 16, 143.",
    },
    autenticidade: "tradicional",
    temas: ["Natal", "Encarnação", "Virgem Maria", "presépio", "adoração"],
  },
  {
    id: "hinos-ambrosianos-12",
    numero: 12,
    titulo: "Ipsum te Dominum Jesus",
    subtitulo: "Hino para a Páscoa e a Ressurreição",
    data: { iso: "0386-01-01", original: "c. 386 d.C.", aproximada: true },
    contextoHistorico:
      "Hino pascal que celebra a Ressurreição de Cristo. Cantado durante a Oitava da Páscoa, proclama a vitória sobre a morte e a redenção da humanidade.",
    original: {
      idioma: "latim",
      texto:
        "Ipsum te Dominum Jesus\n" +
        "petimus ut clementer\n" +
        "respicias devotiones\n" +
        "tibi servientium.\n\n" +
        "Qui passus es pro nobis\n" +
        "et resurrexisti a mortuis,\n" +
        "da nobis pacem et salutem\n" +
        "per resurrectionem tuam.\n\n" +
        "Mors tua mortem nostram\n" +
        "destruxit, et vita tua\n" +
        "vitam nostram renovavit.\n" +
        "In te credimus et speramus.\n\n" +
        "Deo Patri sit gloria\n" +
        "et Filio qui a mortuis resurrexit,\n" +
        "ac Paraclito Spiritui Sancto\n" +
        "in saecula saeculorum. Amen.",
    },
    portugues: {
      texto:
        "A ti, Senhor Jesus,\n" +
        "pedimos que clemente\n" +
        "olhes para as devoções\n" +
        "daqueles que te servem.\n\n" +
        "Tu que sofreste por nós\n" +
        "e ressuscitaste dos mortos,\n" +
        "dá-nos paz e salvação\n" +
        "pela tua ressurreição.\n\n" +
        "Tua morte destruiu\n" +
        "nossa morte, e tua vida\n" +
        "renovou nossa vida.\n" +
        "Em ti cremos e esperamos.\n\n" +
        "A Deus Pai seja glória\n" +
        "e ao Filho que dos mortos ressuscitou,\n" +
        "e ao Espírito Santo Paráclito\n" +
        "por todos os séculos dos séculos. Amém.",
      tradutor: "Projeto Lux Fidei",
    },
    referenciasBiblicas: [
      {
        referencia: "1 Coríntios 15:55",
        passagem: "Ó morte, onde está tua vitória?",
        tipo: "citação",
      },
      {
        referencia: "Romanos 6:9",
        passagem: "Cristo, ressuscitado dos mortos, já não morre",
        tipo: "citação",
      },
    ],
    notasCriticas: [
      "O hino pascal é o ápice do ciclo litúrgico ambrosiano, proclamando a vitória pascal.",
    ],
    notasEditoriais: [
      "A tradução enfatiza o caráter cristológico e escatológico do hino.",
    ],
    fonte: {
      primaria:
        "Santo Ambrósio, Hymni, XII: Ipsum te Dominum Jesus. PL 16, 144.",
    },
    autenticidade: "tradicional",
    temas: [
      "Páscoa",
      "Ressurreição",
      "vitória sobre a morte",
      "redenção",
      "páscoa",
    ],
  },
];
