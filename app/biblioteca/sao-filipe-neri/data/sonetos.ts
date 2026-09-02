export type Soneto = {
  id: string;
  numero: number;
  titulo: string;
  original: {
    idioma: "italiano";
    versos: string[] | null;
  };
  portugues: {
    versos: string[] | null;
    tradutor: string | null;
  };
  forma: string;
  tema: string;
  fonte: string;
  autenticidade: "autêntico" | "provável" | "rejeitado" | "não verificável";
  justificativaAutenticidade: string;
  notasCriticas: string[];
};

const fonteCroce = "Benedetto Croce, ‘Di San Filippo Neri e di tre sonetti a lui attribuiti’, La Critica 40 (1942), edição digital da Biblioteca de Filosofia da Universidade de Roma, pp. 115–156";
const tradutor = "Manus AI — tradução humana para este projeto";

export const sonetos: Soneto[] = [
  {
    id: "soneto-001",
    numero: 1,
    titulo: "Se l’anima ha da Dio l’esser perfetto",
    original: {
      idioma: "italiano",
      versos: [
        "Se l’anima ha da Dio l’esser perfetto,",
        "Sendo, com’è, creata in un istante,",
        "E non con mezzo di cagion cotante,",
        "Come vincer la dee mortal oggetto?",
        "Là ’ve speme, desio, gaudio e dispetto",
        "La fanno tanto da se stessa errante,",
        "Sì che non veggia, e l’ha pur sempre innante,",
        "Chi bear la potria sol con l’aspetto?",
        "Come ponno le parti esser ribelle",
        "Alla parte miglior né consentire?",
        "E questa servir dee, comandar quelle?",
        "Qual prigion la ritien, ch’indi partire",
        "Non possa, e al fin col piè calcar le stelle,",
        "E viver sempre in Dio, e a sé morire?"
      ]
    },
    portugues: {
      versos: [
        "Se a alma recebeu de Deus o ser perfeito,",
        "sendo, como é, criada num instante,",
        "e não por meio de tantas causas,",
        "como há de vencer o objeto mortal?",
        "Ali, onde esperança, desejo, alegria e despeito",
        "a fazem tão errante de si mesma,",
        "que não veja aquilo que sempre tem diante de si,",
        "e que somente com o olhar poderia alegrá-la?",
        "Como podem as partes rebelar-se",
        "contra a parte melhor, sem consentir?",
        "E esta deve servir e comandar aquelas?",
        "Que prisão a retém, impedindo-a de partir",
        "para enfim, com o pé, calcar as estrelas,",
        "viver sempre em Deus e morrer para si?"
      ],
      tradutor
    },
    forma: "soneto italiano",
    tema: "conflito da alma, perfeição e união com Deus",
    fonte: `${fonteCroce}; Alfonso Capecelatro, La vita di S. Filippo Neri, vol. I, Documenti, pp. 490–492.`,
    autenticidade: "provável",
    justificativaAutenticidade: "Croce considera este soneto próprio de São Filipe Néri, em parte porque o testemunho associado à escrita do santo conserva variantes da primeira quadra e da segunda terça; a classificação aqui permanece ‘provável’ para distinguir argumento filológico de certeza absoluta.",
    notasCriticas: [
      "A imagem do manuscrito e a transmissão por trás de uma carta de 1551 são decisivas para a discussão da autoria.",
      "A forma ‘comandare’ no verso 11 e a leitura do verso 7 possuem variantes registradas no estudo filológico.",
      "A tradução preserva a interrogação contínua do soneto e não transforma o texto em prosa devocional."
    ]
  },
  {
    id: "soneto-004",
    numero: 4,
    titulo: "Quarto soneto da edição moderna",
    original: { idioma: "italiano", versos: null },
    portugues: { versos: null, tradutor: null },
    forma: "soneto italiano — texto não localizado em fonte pública nesta revisão",
    tema: "não determinado",
    fonte: "Philipp Neri, Schriften und Maximen, ed. Ulrike Wick-Alda e Paul Bernhard Wodrazka, EOS Verlag, 2011, índice geral, seção VI, Sonett 4.",
    autenticidade: "não verificável",
    justificativaAutenticidade: "A edição moderna enumera quatro sonetos, mas o texto do quarto não foi disponibilizado nas fontes públicas consultadas. O registro permanece incompleto por honestidade editorial.",
    notasCriticas: [
      "Nenhum verso foi reconstruído a partir de índice, tradução ou analogia com os outros sonetos.",
      "O campo null será substituído apenas após consulta direta à edição crítica ou a imagem de testemunho primário."
    ]
  }
];

export const sonetosRejeitados: Soneto[] = [
  {
    id: "soneto-rejeitado-002",
    numero: 2,
    titulo: "Amo, e non posso non amarvi",
    original: {
      idioma: "italiano",
      versos: [
        "Amo, e non posso non amarvi, quando",
        "Resto cotanto vinto dal desio,",
        "Che ’l mio nel vostro e ’l vostro amor nel mio,",
        "Anzi ch’io in voi, voi in me ci andiam cangiando.",
        "È tempo ben saria veder il quando",
        "Ch’alfin io esca d’esto carcer rio,",
        "Di così folle e così cieco oblio,",
        "Dov’io mi trovo e di me stesso in bando.",
        "Ride la terra e ’l cielo e l’ora e i rami,",
        "Stan queti i venti, e son tranquille l’onde,",
        "E ’l sol mai sì lucente non apparse;",
        "Cantan gli augei. Chi dunque è che non ami",
        "E non gioisca? — Io sol: che non risponde",
        "La gioja a le mie forze inferme e scarse."
      ]
    },
    portugues: {
      versos: [
        "Amo, e não posso deixar de amar-vos, quando",
        "fico tão vencido pelo desejo,",
        "que o meu no vosso e o vosso amor no meu,",
        "antes que eu em vós, vós em mim vamos mudando.",
        "Seria tempo, na verdade, de ver o momento",
        "em que afinal eu saia desta prisão má,",
        "de tão louco e tão cego esquecimento,",
        "onde me encontro banido de mim mesmo.",
        "Ri a terra, o céu, a hora e os ramos,",
        "os ventos repousam, tranquilas as ondas,",
        "e o sol jamais apareceu tão luminoso;",
        "cantam as aves. Quem, então, não ama",
        "e não se alegra? — Só eu: pois a alegria",
        "não corresponde às minhas forças enfermas e escassas."
      ],
      tradutor
    },
    forma: "soneto italiano",
    tema: "amor e transformação no amado",
    fonte: fonteCroce,
    autenticidade: "rejeitado",
    justificativaAutenticidade: "O estudo de Croce, seguindo Ponnelle e Bourdet, rejeita a atribuição a São Filipe Néri: a folha não é autógrafa e indica como autor um ‘messer Filippo del Nero’.",
    notasCriticas: [
      "O soneto é preservado para documentar a tradição editorial, não como escrito autêntico de São Filipe Néri.",
      "A atribuição a Filippo del Nero impede que o texto seja usado como evidência da poesia do santo."
    ]
  },
  {
    id: "soneto-rejeitado-003",
    numero: 3,
    titulo: "Chi non v’ha, Bernardino, amato ed ama",
    original: {
      idioma: "italiano",
      versos: [
        "Chi non v’ha, Bernardino, amato ed ama,",
        "Altro non ami. E se pur vuol amare,",
        "Ami ’l mal non il bene, e ’l bene amare",
        "Lasci a chi non il mal ma il ben sol ama.",
        "Perché tutto quel ben che di buon s’ama,",
        "E si puote e a ragion si deve amare,",
        "È tutto in voi. Dunque io voi solo amare",
        "Deggio, non amando io ’l mal che non s’ama.",
        "Così spero, mercè di tal amare,",
        "Quel frutto accorre, amato da chi ama,",
        "Che quant’io v’amo, e voi m’abbiate a amare:",
        "Anzi s’è ver, com’è ver, che chi ama",
        "Si trasformi in l’amato; il nostro amare",
        "Voi l’amante farà, me quel che s’ama."
      ]
    },
    portugues: {
      versos: [
        "Quem não vos amou e não vos ama, Bernardino,",
        "não ame mais nada. E, se ainda quer amar,",
        "ame o mal, não o bem; e amar o bem",
        "deixe a quem não ama o mal, mas somente o bem.",
        "Pois todo bem que se ama como bom,",
        "e se pode e com razão se deve amar,",
        "está todo em vós. Logo, só a vós devo amar,",
        "não amando eu o mal, que não se ama.",
        "Assim espero que, graças a tal amor,",
        "colha o fruto, amado por quem ama,",
        "pois, quanto vos amo, vós haveis de amar-me:",
        "antes, se é verdade, como é verdade, que quem ama",
        "se transforma no amado, nosso amar",
        "vos fará amante, e a mim aquilo que se ama."
      ],
      tradutor
    },
    forma: "soneto italiano",
    tema: "amor e transformação",
    fonte: fonteCroce,
    autenticidade: "rejeitado",
    justificativaAutenticidade: "O estudo de Croce associa o soneto a Filippo del Nero, não a São Filipe Néri; a didascália e o testemunho material não sustentam a atribuição ao santo.",
    notasCriticas: [
      "O destinatário Bernardino não foi identificado com segurança.",
      "O texto é preservado apenas como testemunho da história da atribuição e não como fonte autêntica do corpus de São Filipe Néri."
    ]
  }
];
