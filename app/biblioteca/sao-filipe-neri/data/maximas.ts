export type MesMaxima =
  | "janeiro"
  | "fevereiro"
  | "março"
  | "abril"
  | "maio"
  | "junho"
  | "julho"
  | "agosto"
  | "setembro"
  | "outubro"
  | "novembro"
  | "dezembro";

export type Maxima = {
  id: string;
  numero: number;
  dia: number;
  mes: MesMaxima;
  original: {
    idioma: "italiano" | "latim" | "misto";
    texto: string;
    passagensLatinas: Array<{
      trecho: string;
      origem: string | null;
      traducao: string;
    }> | null;
  };
  portugues: {
    texto: string;
    tradutor: string;
  };
  tema: string;
  temasSecundarios: string[];
  contexto: string | null;
  testemunha: string | null;
  referenciasBiblicas: Array<{
    passagem: string;
    referencia: string;
  }> | null;
  fonte: {
    primaria: string;
    original: string;
    paginaPDF: number | null;
  };
  autenticidade: "tradicional";
  notasEditoriais: string[];
};

const primaria = "Simone Raponi (org.), Il cuore di San Filippo Neri — Tutti i giorni dell’anno, PDF italiano do Oratório de San Filippo Neri";
const originalDeclarada = "Reproposição de Ricordi e detti di S. Filippo Neri, Bologna, Tipografia dell’Ancora, 1848, com adaptação devocional declarada pelo organizador";
const testemunha = "Tradição dos Ricordi e detti, transmitida por discípulos e testemunhos dos processos de canonização; a série de Raponi é uma compilação devocional, não uma coleção de autógrafos.";
const tradutor = "Manus AI — tradução humana, revista frase a frase diretamente do italiano do PDF; sem tradutor automático";

export const maximas: Maxima[] = [
  {
    id: "maxima-001",
    numero: 1,
    dia: 1,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "Beh, fratelli, quando vogliamo cominciare a fare il bene?", passagensLatinas: null },
    portugues: { texto: "Pois bem, irmãos, quando queremos começar a fazer o bem?", tradutor },
    tema: "início do bem",
    temasSecundarios: ["conversão", "prontidão"],
    contexto: "A série começa o ano com uma exortação direta à prática do bem.",
    testemunha,
    referenciasBiblicas: null,
    fonte: { primaria, original: originalDeclarada, paginaPDF: 10 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 10.", "‘Beh’ foi traduzido por ‘Pois bem’, preservando o tom familiar da interpelação."]
  },
  {
    id: "maxima-002",
    numero: 2,
    dia: 2,
    mes: "janeiro",
    original: {
      idioma: "misto",
      texto: "Nulla dies sine linea. Non si lasci passare giorno senza che si faccia qualche bene.",
      passagensLatinas: [{ trecho: "Nulla dies sine linea", origem: "Adágio latino atribuído a Apeles por Plínio, o Velho, Naturalis historia 35,84", traducao: "Nenhum dia sem uma linha." }]
    },
    portugues: { texto: "Nenhum dia sem uma linha. Não se deixe passar um dia sem que se faça algum bem.", tradutor },
    tema: "perseverança no bem",
    temasSecundarios: ["disciplina", "constância"],
    contexto: "O adágio latino é imediatamente explicado pela frase italiana que o segue.",
    testemunha,
    referenciasBiblicas: null,
    fonte: { primaria, original: originalDeclarada, paginaPDF: 10 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 10.", "O latim foi separado do italiano e não foi traduzido mecanicamente como ‘Nada morre sine linea’.", "A tradução consagrada adotada no projeto é ‘Nenhum dia sem uma linha’; a segunda frase explicita que o bem deve ser praticado diariamente."]
  },
  {
    id: "maxima-003",
    numero: 3,
    dia: 3,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "Non si deve tardare a fare il bene, perché la morte non tarda a venire.", passagensLatinas: null },
    portugues: { texto: "Não se deve demorar em fazer o bem, porque a morte não tarda a chegar.", tradutor },
    tema: "urgência do bem",
    temasSecundarios: ["morte", "vigilância"],
    contexto: "A máxima vincula a urgência da conversão à brevidade da vida.",
    testemunha,
    referenciasBiblicas: [{ passagem: "a morte não tarda a chegar", referencia: "Eclesiástico 14,12; Tiago 4,13-14, como alusão temática" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 10 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 10.", "‘Tardare’ foi mantido como ‘demorar’ na primeira ocorrência e ‘tardar’ na segunda para preservar a repetição argumentativa sem produzir português artificial."]
  },
  {
    id: "maxima-004",
    numero: 4,
    dia: 4,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "Beato il giovane, al quale Dio dà tempo di ben operare.", passagensLatinas: null },
    portugues: { texto: "Feliz o jovem a quem Deus concede tempo para fazer o bem.", tradutor },
    tema: "juventude e vocação",
    temasSecundarios: ["tempo", "providência"],
    contexto: "O tempo da juventude é apresentado como graça para a prática virtuosa.",
    testemunha,
    referenciasBiblicas: [{ passagem: "Dio dà tempo di ben operare", referencia: "Efésios 5,15-16, como alusão temática" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 10 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 10.", "‘Beato’ foi traduzido como ‘Feliz’ neste contexto sapiencial, não como declaração formal de beatificação."]
  },
  {
    id: "maxima-005",
    numero: 5,
    dia: 5,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "È bene praticare qualche buona devozione e continuare con quella, senza mai lasciarla.", passagensLatinas: null },
    portugues: { texto: "É bom praticar alguma devoção boa e perseverar nela, sem jamais abandoná-la.", tradutor },
    tema: "perseverança devocional",
    temasSecundarios: ["hábitos", "fidelidade"],
    contexto: "A máxima recomenda a continuidade de uma prática devocional simples.",
    testemunha,
    referenciasBiblicas: [{ passagem: "continuare con quella, senza mai lasciarla", referencia: "Lucas 9,62; Hebreus 10,36, como alusão temática" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 10 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 10.", "‘Continuare con quella’ foi traduzido por ‘perseverar nela’, solução idiomática adequada ao registro espiritual."]
  },
  {
    id: "maxima-006",
    numero: 6,
    dia: 6,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "Chi vuole altro che Cristo, non sa quel che vuole; chi domanda altro che Cristo, non sa quello che domanda; chi opera, e non per Cristo, non sa quello che fa.", passagensLatinas: null },
    portugues: { texto: "Quem quer outra coisa que não Cristo não sabe o que quer; quem pede outra coisa que não Cristo não sabe o que pede; quem age, e não por Cristo, não sabe o que faz.", tradutor },
    tema: "Cristo como único necessário",
    temasSecundarios: ["oração", "intenção", "desapego"],
    contexto: "Cristo é apresentado como o fim que dá sentido ao querer, ao pedir e ao agir.",
    testemunha,
    referenciasBiblicas: [{ passagem: "altro che Cristo", referencia: "Filipenses 1,21; Colossenses 3,11, como alusão cristocêntrica" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 10 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 10; a segunda linha continua na página seguinte do texto corrido, mas pertence à mesma entrada.", "A tríplice repetição ‘non sa quel che vuole / domanda / fa’ foi preservada.", "Não foi acrescentado artigo antes de ‘Cristo’, para respeitar a construção italiana e a cadência proverbial."]
  },
  {
    id: "maxima-007",
    numero: 7,
    dia: 7,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "Nessuno indossi una maschera, perché in ciò fa male; e se l’ha, la bruci.", passagensLatinas: null },
    portugues: { texto: "Ninguém use uma máscara, pois nisso faz mal; e, se a tiver, queime-a.", tradutor },
    tema: "sinceridade",
    temasSecundarios: ["humildade", "autenticidade"],
    contexto: "A máscara é imagem da dissimulação que prejudica a vida espiritual.",
    testemunha,
    referenciasBiblicas: [{ passagem: "Nessuno indossi una maschera", referencia: "Mateus 6,1-6; 2Coríntios 4,2, como alusão temática" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 10 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 10.", "‘Indossi’ foi traduzido por ‘use’, e não por ‘vista’, para manter o sentido figurado corrente em português brasileiro."]
  },
  {
    id: "maxima-008",
    numero: 8,
    dia: 8,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "Le persone spirituali debbono tanto essere disposte a sentire il gusto nelle cose di Dio, quanto a soffrire e a stare nell’aridità dello spirito e della devozione, per tutto il tempo che piace a Dio, non lamentandosi mai di cosa alcuna.", passagensLatinas: null },
    portugues: { texto: "As pessoas espirituais devem estar tão dispostas a experimentar o gosto das coisas de Deus quanto a sofrer e permanecer na aridez do espírito e da devoção, por todo o tempo que agradar a Deus, sem jamais se queixar de coisa alguma.", tradutor },
    tema: "consolação e aridez",
    temasSecundarios: ["paciência", "abandono", "oração"],
    contexto: "A vida espiritual inclui tanto consolações quanto períodos de aridez permitidos por Deus.",
    testemunha,
    referenciasBiblicas: [{ passagem: "aridità dello spirito", referencia: "Salmos 42,2-3; 63,2, como alusão espiritual" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 10 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 10.", "‘Gusto’ foi traduzido como ‘gosto’ no sentido espiritual de consolação experimentada, não como sabor físico.", "‘Per tutto il tempo che piace a Dio’ foi traduzido por ‘por todo o tempo que agradar a Deus’, preservando a referência à permissão divina."]
  },
  {
    id: "maxima-009",
    numero: 9,
    dia: 9,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "Dio non ha bisogno degli uomini.", passagensLatinas: null },
    portugues: { texto: "Deus não precisa dos homens.", tradutor },
    tema: "soberania de Deus",
    temasSecundarios: ["humildade", "providência"],
    contexto: "A frase recorda que a ação apostólica é graça recebida, não necessidade de Deus.",
    testemunha,
    referenciasBiblicas: [{ passagem: "Dio non ha bisogno degli uomini", referencia: "Atos 17,24-25, como alusão" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 10 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 10.", "Tradução direta e concisa; não foi acrescentado ‘da ajuda’ porque o original diz literalmente ‘dos homens’. "]
  },
  {
    id: "maxima-010",
    numero: 10,
    dia: 10,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "Non bisogna aver paura di nessuno, avendo Dio dalla nostra parte.", passagensLatinas: null },
    portugues: { texto: "Não se deve ter medo de ninguém quando se tem Deus ao nosso lado.", tradutor },
    tema: "confiança em Deus",
    temasSecundarios: ["coragem", "perseguição"],
    contexto: "A confiança em Deus é apresentada como fundamento da coragem cristã.",
    testemunha,
    referenciasBiblicas: [{ passagem: "avendo Dio dalla nostra parte", referencia: "Romanos 8,31; Salmos 118,6, como alusão" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 10 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 10.", "‘Dalla nostra parte’ foi traduzido por ‘ao nosso lado’, forma natural que preserva a imagem de apoio e proteção."]
  },
  {
    id: "maxima-011",
    numero: 11,
    dia: 11,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "Chi molto vuole essere obbedito, comandi poco.", passagensLatinas: null },
    portugues: { texto: "Quem quer ser muito obedecido deve mandar pouco.", tradutor },
    tema: "autoridade humilde",
    temasSecundarios: ["obediência", "governo", "moderação"],
    contexto: "A autoridade espiritual é associada à moderação dos mandamentos.",
    testemunha,
    referenciasBiblicas: [{ passagem: "comandi poco", referencia: "Marcos 10,42-45; Lucas 22,26, como alusão ao serviço" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 10 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 10.", "A tradução preserva a estrutura proverbial e não transforma ‘comandi’ em ‘controle’. "]
  },
  {
    id: "maxima-012",
    numero: 12,
    dia: 12,
    mes: "janeiro",
    original: { idioma: "misto", texto: "Bisogna mantenere lo spirito umile, e non andare in mirabilibus super se (in cose che superino le proprie capacità).", passagensLatinas: [{ trecho: "in mirabilibus super se", origem: "Fórmula latina de matriz bíblico-sapiencial; a edição a glosa em italiano como ‘in cose che superino le proprie capacità’", traducao: "em coisas acima de si mesmo, isto é, em realidades que ultrapassem as próprias capacidades." }] },
    portugues: { texto: "É preciso conservar o espírito humilde e não aventurar-se em coisas acima de si mesmo, isto é, em realidades que ultrapassem as próprias capacidades.", tradutor },
    tema: "humildade e discernimento",
    temasSecundarios: ["prudência", "limites", "vida interior"],
    contexto: "A glosa italiana da própria máxima explica o sentido da fórmula latina.",
    testemunha,
    referenciasBiblicas: [{ passagem: "mirabilibus super se", referencia: "Salmos 131,1, como alusão sapiencial à humildade" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 10 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 10.", "A passagem latina foi separada e conservada; a glosa italiana entre parênteses foi traduzida como explicação, não confundida com o latim.", "A referência a Salmos 131,1 é alusão temática, não afirmação de citação literal."]
  },
  {
    id: "maxima-013",
    numero: 13,
    dia: 13,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "Si rinnovino spesso i buoni propositi, né si perda il coraggio a causa delle tentazioni, che sorgono proprio contro di quelli.", passagensLatinas: null },
    portugues: { texto: "Renovem-se com frequência os bons propósitos, e não se perca a coragem por causa das tentações, que surgem precisamente contra eles.", tradutor },
    tema: "perseverança contra a tentação",
    temasSecundarios: ["propósitos", "coragem", "combate espiritual"],
    contexto: "As tentações são compreendidas como oposição aos bons propósitos e não como prova de sua inutilidade.",
    testemunha,
    referenciasBiblicas: [{ passagem: "tentazioni ... contro di quelli", referencia: "Tiago 1,2-4; 1Pedro 5,8-9, como alusão" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 10 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 10.", "‘Quelli’ retoma ‘i buoni propositi’; a tradução explicita o antecedente para evitar ambiguidade em português."]
  },
  {
    id: "maxima-014",
    numero: 14,
    dia: 14,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "Il Nome di Gesù, pronunciato con riverenza e affetto, ha la forza di intenerire il cuore.", passagensLatinas: null },
    portugues: { texto: "O Nome de Jesus, pronunciado com reverência e afeto, tem a força de enternecer o coração.", tradutor },
    tema: "devoção ao Nome de Jesus",
    temasSecundarios: ["oração", "coração", "afeto"],
    contexto: "A invocação reverente do Nome de Jesus é apresentada como prática de oração afetiva.",
    testemunha,
    referenciasBiblicas: [{ passagem: "Il Nome di Gesù", referencia: "Filipenses 2,9-11; Atos 4,12, como alusão" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 10 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 10.", "‘Intenerire’ foi traduzido como ‘enternecer’, preservando a imagem afetiva; não como ‘amolecer’."]
  },
  {
    id: "maxima-015",
    numero: 15,
    dia: 15,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "L’obbedienza è una via breve per arrivare rapidamente alla perfezione.", passagensLatinas: null },
    portugues: { texto: "A obediência é um caminho breve para chegar rapidamente à perfeição.", tradutor },
    tema: "obediência",
    temasSecundarios: ["perfeição", "discernimento", "vida religiosa"],
    contexto: "A obediência é apresentada como caminho espiritual eficaz e não como mera submissão exterior.",
    testemunha,
    referenciasBiblicas: [{ passagem: "L’obbedienza", referencia: "1Samuel 15,22; Filipenses 2,8, como alusão" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 10 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 10.", "A repetição ‘via breve / rapidamente’ foi preservada, pois é parte do efeito aforístico do original."]
  },
  {
    id: "maxima-016",
    numero: 16,
    dia: 16,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "Quelli che vogliono davvero progredire nella via di Dio, si affidino in tutto e per tutto nelle mani dei superiori; quelli che non fanno voto di obbedienza, si sottomettano volontariamente ad un saggio e discreto confessore, al quale obbediscano come a Dio, rivelandogli con libertà e semplicità tutti gli aspetti della loro anima; e non decidano nulla senza il suo consiglio.", passagensLatinas: null },
    portugues: { texto: "Aqueles que realmente querem progredir no caminho de Deus entreguem-se inteiramente às mãos dos superiores; os que não fizeram voto de obediência submetam-se voluntariamente a um confessor sábio e prudente, a quem obedeçam como a Deus, revelando-lhe com liberdade e simplicidade todos os aspectos de sua alma; e não decidam nada sem o seu conselho.", tradutor },
    tema: "direção espiritual e obediência",
    temasSecundarios: ["confessor", "discernimento", "transparência interior"],
    contexto: "A máxima distingue os que fizeram voto de obediência dos leigos ou demais pessoas que escolhem voluntariamente um confessor para direção espiritual.",
    testemunha,
    referenciasBiblicas: [{ passagem: "si affidino ... nelle mani dei superiori", referencia: "Hebreus 13,17, como alusão à obediência espiritual" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 10 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 10.", "‘Saggio e discreto’ foi traduzido como ‘sábio e prudente’, e não como ‘sábio e discreto’ em sentido social.", "‘Come a Dio’ foi mantido como comparação de autoridade espiritual; não afirma identidade ontológica entre confessor e Deus."]
  },
  {
    id: "maxima-017",
    numero: 17,
    dia: 17,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "Non c’è altra cosa che assicuri più buone azioni e che tagli i lacci tesi dal demonio, che fare nel bene la volontà degli altri.", passagensLatinas: null },
    portugues: { texto: "Nada assegura mais boas ações nem corta melhor os laços armados pelo demônio do que, no bem, fazer a vontade dos outros.", tradutor },
    tema: "desapego da própria vontade",
    temasSecundarios: ["combate espiritual", "obediência", "caridade"],
    contexto: "A renúncia à vontade própria é apresentada como defesa contra as armadilhas do demônio.",
    testemunha,
    referenciasBiblicas: [{ passagem: "lacci tesi dal demonio", referencia: "1Pedro 5,8-9; Efésios 6,11, como alusão" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 10 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 10.", "‘Fare nel bene la volontà degli altri’ foi traduzido por ‘no bem, fazer a vontade dos outros’, preservando a condição moral ‘nel bene’."]
  },
  {
    id: "maxima-018",
    numero: 18,
    dia: 18,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "Prima di scegliere il confessore, bisogna pensarci bene e pregarci su; quando poi si sarà scelto, non si dovrà lasciare, se non per gravi motivi. Si abbia in lui grandissima fiducia.", passagensLatinas: null },
    portugues: { texto: "Antes de escolher o confessor, é preciso refletir bem e rezar sobre isso; depois de escolhido, não se deve deixá-lo, a não ser por motivos graves. Tenha-se nele grandíssima confiança.", tradutor },
    tema: "confissão e perseverança",
    temasSecundarios: ["confessor", "confiança", "discernimento"],
    contexto: "A escolha do confessor é tratada como decisão que exige oração e estabilidade, salvo razões graves.",
    testemunha,
    referenciasBiblicas: [{ passagem: "grandissima fiducia", referencia: "Provérbios 15,22; Tobias 4,18, como alusão sapiencial" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 10 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 10.", "‘Pregarci su’ foi traduzido como ‘rezar sobre isso’, e não como ‘pregar em cima’. "]
  },
  {
    id: "maxima-019",
    numero: 19,
    dia: 19,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "Quando il demonio non può far cadere qualche persona, provvede con ogni mezzo a mettere diffidenza fra il penitente e il confessore, perché così, a poco a poco, ci guadagna molto.", passagensLatinas: null },
    portugues: { texto: "Quando o demônio não consegue fazer alguém cair, procura por todos os meios semear desconfiança entre o penitente e o confessor, pois assim, pouco a pouco, obtém grande vantagem.", tradutor },
    tema: "desconfiança e combate espiritual",
    temasSecundarios: ["confissão", "demônio", "perseverança"],
    contexto: "A desconfiança entre penitente e confessor é descrita como estratégia gradual de desagregação espiritual.",
    testemunha,
    referenciasBiblicas: [{ passagem: "mettere diffidenza", referencia: "Gênesis 3,1-5; 2Coríntios 2,11, como alusão ao engano" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 11 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 11.", "‘Ci guadagna molto’ foi traduzido por ‘obtém grande vantagem’, e não por ‘ganha dinheiro’; trata-se de vantagem espiritual do adversário."]
  },
  {
    id: "maxima-020",
    numero: 20,
    dia: 20,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "I laici siano santi nelle proprie case, perché né la corte, né il lavoro, né la fatica, impediscono il servizio di Dio.", passagensLatinas: null },
    portugues: { texto: "Os leigos sejam santos em suas próprias casas, pois nem a corte, nem o trabalho, nem o cansaço impedem o serviço de Deus.", tradutor },
    tema: "santidade no mundo",
    temasSecundarios: ["leigos", "família", "trabalho"],
    contexto: "A máxima afirma a possibilidade da santidade leiga no meio das ocupações ordinárias.",
    testemunha,
    referenciasBiblicas: [{ passagem: "santi nelle proprie case", referencia: "1Coríntios 7,17-24; Colossenses 3,17, como alusão" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 11 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 11.", "‘La corte’ foi preservado como ‘a corte’, no sentido de ambiente cortesão; não foi substituído por ‘tribunal’ sem contexto.", "‘Fatiga’ foi traduzido como ‘cansaço’, não como ‘fadiga’ em registro excessivamente técnico."]
  },
  {
    id: "maxima-021",
    numero: 21,
    dia: 21,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "L’obbedienza è il vero olocausto che si sacrifica a Dio sull’altare del nostro cuore.", passagensLatinas: null },
    portugues: { texto: "A obediência é o verdadeiro holocausto que se oferece a Deus sobre o altar do nosso coração.", tradutor },
    tema: "obediência como sacrifício",
    temasSecundarios: ["coração", "culto", "entrega"],
    contexto: "A linguagem sacrificial interpreta a obediência interior como culto oferecido a Deus.",
    testemunha,
    referenciasBiblicas: [{ passagem: "olocausto ... sull’altare del nostro cuore", referencia: "Romanos 12,1; Salmos 51,19, como alusão" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 11 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 11.", "‘Si sacrifica’ foi traduzido como ‘se oferece’, forma consagrada em português litúrgico para o sacrifício a Deus.", "‘Olocausto’ foi preservado, pois é termo bíblico-teológico, não substituído por ‘sacrifício total’."]
  },
  {
    id: "maxima-022",
    numero: 22,
    dia: 22,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "Per essere veramente obbedienti, non basta fare quello che l’obbedienza comanda; ma bisogna farlo senza mormorazioni.", passagensLatinas: null },
    portugues: { texto: "Para ser verdadeiramente obediente, não basta fazer o que a obediência manda; é preciso fazê-lo sem murmurações.", tradutor },
    tema: "obediência sem murmuração",
    temasSecundarios: ["interioridade", "aceitação", "vida comunitária"],
    contexto: "O valor da obediência é situado também na disposição interior com que o ato é realizado.",
    testemunha,
    referenciasBiblicas: [{ passagem: "senza mormorazioni", referencia: "Filipenses 2,14; 1Pedro 4,9, como alusão" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 11 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 11.", "‘Mormorazioni’ foi traduzido por ‘murmurações’, termo bíblico consagrado, e não por ‘reclamações’."]
  },
  {
    id: "maxima-023",
    numero: 23,
    dia: 23,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "La Santissima Vergine deve essere il nostro amore e la nostra consolazione.", passagensLatinas: null },
    portugues: { texto: "A Santíssima Virgem deve ser o nosso amor e a nossa consolação.", tradutor },
    tema: "devoção mariana",
    temasSecundarios: ["consolação", "Maria", "piedade"],
    contexto: "A máxima formula uma orientação afetiva de devoção à Virgem Maria.",
    testemunha,
    referenciasBiblicas: [{ passagem: "La Santissima Vergine", referencia: "João 19,26-27, como alusão à maternidade espiritual de Maria" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 11 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 11.", "‘Santissima Vergine’ foi traduzido por ‘Santíssima Virgem’, mantendo a forma católica tradicional."]
  },
  {
    id: "maxima-024",
    numero: 24,
    dia: 24,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "Le opere buone, fatte di propria volontà, non sono tanto meritorie, come quelle che sono fatte per spirito di obbedienza.", passagensLatinas: null },
    portugues: { texto: "As boas obras feitas por vontade própria não são tão meritórias quanto aquelas realizadas por espírito de obediência.", tradutor },
    tema: "mérito e obediência",
    temasSecundarios: ["vontade própria", "boas obras", "intenção"],
    contexto: "A máxima não nega a bondade das obras, mas compara sua disposição interior com a obediência.",
    testemunha,
    referenciasBiblicas: [{ passagem: "opere buone ... per spirito di obbedienza", referencia: "1Coríntios 13,3; Colossenses 3,17, como alusão" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 11 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 11.", "‘Tanto meritorie, come’ foi vertido pela construção comparativa culta ‘tão meritórias quanto’."]
  },
  {
    id: "maxima-025",
    numero: 25,
    dia: 25,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "La più bella preghiera che si possa fare, è dire a Dio: «Come tu sai e vuoi, così fa con me, o Signore».", passagensLatinas: null },
    portugues: { texto: "A mais bela oração que se pode fazer é dizer a Deus: “Como sabes e queres, assim faze comigo, Senhor”.", tradutor },
    tema: "abandono à vontade de Deus",
    temasSecundarios: ["oração", "confiança", "conformidade"],
    contexto: "A oração é reduzida a uma entrega simples à sabedoria e à vontade de Deus.",
    testemunha,
    referenciasBiblicas: [{ passagem: "Come tu sai e vuoi, così fa con me", referencia: "Mateus 6,10; Lucas 22,42, como alusão" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 11 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 11.", "‘Come tu sai e vuoi’ foi traduzido como ‘Como sabes e queres’, preservando a segunda pessoa dirigida a Deus.", "‘Così fa con me’ foi traduzido como ‘assim faze comigo’, em registro de oração; não foi reduzido a ‘faça como quiser’. "]
  },
  {
    id: "maxima-026",
    numero: 26,
    dia: 26,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "Quando vengono le sofferenze, le malattie e le cose contrarie, non si devono fuggire con timore, ma vincerle con valore.", passagensLatinas: null },
    portugues: { texto: "Quando chegam os sofrimentos, as doenças e as adversidades, não se deve fugir delas com temor, mas vencê-las com coragem.", tradutor },
    tema: "coragem nas adversidades",
    temasSecundarios: ["doença", "sofrimento", "fortaleza"],
    contexto: "As adversidades são enfrentadas com fortaleza, não com fuga movida pelo medo.",
    testemunha,
    referenciasBiblicas: [{ passagem: "vincerle con valore", referencia: "Romanos 5,3-5; Tiago 1,2-4, como alusão" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 11 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 11.", "‘Cose contrarie’ foi traduzido por ‘adversidades’, termo português natural no registro ascético.", "‘Valore’ foi traduzido como ‘coragem’, não ‘valor’ no sentido econômico ou de mérito abstrato."]
  },
  {
    id: "maxima-027",
    numero: 27,
    dia: 27,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "Non basta vedere se Dio vuole il bene che noi pretendiamo, ma se lo vuole attraverso di me, in quel modo e in quel momento. La vera obbedienza può far discernere tutto questo.", passagensLatinas: null },
    portugues: { texto: "Não basta verificar se Deus quer o bem que pretendemos; é preciso discernir se o quer por nosso intermédio, daquele modo e naquele momento. A verdadeira obediência pode fazer discernir tudo isso.", tradutor },
    tema: "discernimento da vontade de Deus",
    temasSecundarios: ["obediência", "tempo", "mediação"],
    contexto: "A máxima distingue o bem abstratamente desejado do bem que Deus quer realizar por uma pessoa, em modo e tempo determinados.",
    testemunha,
    referenciasBiblicas: [{ passagem: "in quel modo e in quel momento", referencia: "Romanos 12,2; Efésios 5,15-17, como alusão" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 11 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 11.", "‘Attraverso di me’ foi traduzido por ‘por nosso intermédio’ para conservar o sentido de mediação sem tornar o português artificial.", "A repetição de ‘discernere’ foi mantida, pois estrutura a conclusão da máxima."]
  },
  {
    id: "maxima-028",
    numero: 28,
    dia: 28,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "Per essere perfetto non basta solo obbedire e onorare i superiori, ma bisogna onorare chi è come noi e chi sta sotto di noi.", passagensLatinas: null },
    portugues: { texto: "Para ser perfeito, não basta obedecer e honrar os superiores; é preciso honrar também quem é igual a nós e quem está abaixo de nós.", tradutor },
    tema: "caridade na autoridade",
    temasSecundarios: ["obediência", "respeito", "comunidade"],
    contexto: "A perfeição cristã inclui o respeito pelos iguais e pelos subordinados, não apenas pelos superiores.",
    testemunha,
    referenciasBiblicas: [{ passagem: "onorare chi è come noi e chi sta sotto di noi", referencia: "Filipenses 2,3-4; Romanos 12,10, como alusão" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 11 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 11.", "‘Chi sta sotto di noi’ foi traduzido como ‘quem está abaixo de nós’, preservando a posição social implícita, sem transformar a frase em juízo sobre o valor das pessoas."]
  },
  {
    id: "maxima-029",
    numero: 29,
    dia: 29,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "Trattando con il prossimo bisogna usare ogni amabilità, e così condurlo facilmente per la via della virtù.", passagensLatinas: null },
    portugues: { texto: "Ao tratar com o próximo, é preciso usar de toda amabilidade e, assim, conduzi-lo facilmente pelo caminho da virtude.", tradutor },
    tema: "amabilidade apostólica",
    temasSecundarios: ["próximo", "evangelização", "virtude"],
    contexto: "A amabilidade aparece como meio de conduzir o próximo ao caminho da virtude.",
    testemunha,
    referenciasBiblicas: [{ passagem: "ogni amabilità", referencia: "Colossenses 4,5-6; 1Pedro 3,15-16, como alusão" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 11 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 11.", "‘Amabilità’ foi traduzido como ‘amabilidade’, mantendo a virtude relacional sem cair em ‘simpatia’ coloquial.", "‘Condurlo’ retoma ‘il prossimo’; o pronome foi traduzido no masculino genérico por fidelidade ao italiano, sem restringir o sentido a homens."]
  },
  {
    id: "maxima-030",
    numero: 30,
    dia: 30,
    mes: "janeiro",
    original: { idioma: "italiano", texto: "È da stimare molto di più chi vive una vita ordinaria sotto l’obbedienza, rispetto a un altro che di sua propria volontà faccia grande penitenza.", passagensLatinas: null },
    portugues: { texto: "É muito mais digno de estima aquele que vive uma vida comum sob a obediência do que outro que, por sua própria vontade, faça grande penitência.", tradutor },
    tema: "obediência acima do voluntarismo",
    temasSecundarios: ["penitência", "vida ordinária", "humildade"],
    contexto: "A máxima prefere a vida ordinária vivida em obediência à penitência escolhida pela própria vontade.",
    testemunha,
    referenciasBiblicas: [{ passagem: "vita ordinaria sotto l’obbedienza", referencia: "1Samuel 15,22; Colossenses 3,20, como alusão" }],
    fonte: { primaria, original: originalDeclarada, paginaPDF: 11 },
    autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 11.", "‘Da stimare’ foi traduzido como ‘digno de estima’, não como ‘mais valioso’ em sentido econômico.", "‘Vita ordinaria’ foi mantida como ‘vida comum’, sem a conotação moderna de mediocridade."]
  },
  {
    id: "maxima-031", numero: 31, dia: 31, mes: "janeiro",
    original: { idioma: "italiano", texto: "Giova molto di più mortificare una propria passione, anche se piccola, che molte astinenze, digiuni e discipline.", passagensLatinas: null },
    portugues: { texto: "É muito mais proveitoso mortificar uma paixão própria, mesmo que pequena, do que praticar muitas abstinências, jejuns e disciplinas.", tradutor },
    tema: "mortificação das paixões", temasSecundarios: ["obediência", "ascese", "virtude"], contexto: "A máxima prefere o combate concreto a uma paixão, ainda que pequena, à multiplicação de práticas ascéticas exteriores.", testemunha,
    referenciasBiblicas: [{ passagem: "mortificare una propria passione", referencia: "Gálatas 5,24; 1Coríntios 9,25-27, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 11 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 11.", "Esta é a máxima 31 de janeiro, omitida na primeira montagem do corpus; sua inclusão exige deslocar em uma unidade os números de fevereiro a dezembro.", "`Giova molto di più` foi traduzido por ‘é muito mais proveitoso’, preservando a comparação entre mortificação interior e práticas externas."]
  },
  {
    id: "maxima-032", numero: 32, dia: 1, mes: "fevereiro",
    original: { idioma: "italiano", texto: "Chi vuole essere savio senza la vera Sapienza, o salvo senza il Salvatore, costui non è sano, ma infermo, e non è savio, ma pazzo.", passagensLatinas: null },
    portugues: { texto: "Quem quer ser sábio sem a verdadeira Sabedoria, ou salvo sem o Salvador, não é saudável, mas enfermo; não é sábio, mas louco.", tradutor },
    tema: "Cristo e a verdadeira sabedoria", temasSecundarios: ["salvação", "discernimento"], contexto: "A máxima identifica a verdadeira sabedoria e a salvação com a relação correta com Deus e com o Salvador.", testemunha,
    referenciasBiblicas: [{ passagem: "vera Sapienza", referencia: "1Coríntios 1,24.30; Sabedoria 7,25-26, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 11 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 11.", "`Savio` foi traduzido por ‘sábio’ e `sano` por ‘saudável’, preservando o paralelismo entre sabedoria e inteireza espiritual."]
  },
  {
    id: "maxima-033", numero: 33, dia: 2, mes: "fevereiro",
    original: { idioma: "italiano", texto: "Bisogna essere devoto della beatissima Vergine, perché non c'è mezzo migliore per ottenere le grazie da Dio, che la sua Santissima Madre.", passagensLatinas: null },
    portugues: { texto: "É preciso ser devoto da Santíssima Virgem, porque não há meio melhor para obter as graças de Deus que a sua Santíssima Mãe.", tradutor },
    tema: "devoção mariana", temasSecundarios: ["graça", "intercessão"], contexto: "A devoção mariana é apresentada na forma tradicional da intercessão da Mãe de Deus.", testemunha,
    referenciasBiblicas: [{ passagem: "sua Santíssima Mãe", referencia: "João 2,1-11; Lucas 1,46-49, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 11 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 11.", "`Beatissima Vergine` foi vertido por ‘Santíssima Virgem’, mantendo o superlativo devocional."]
  },
  {
    id: "maxima-034", numero: 34, dia: 3, mes: "fevereiro",
    original: { idioma: "italiano", texto: "Si sforzi l'uomo di essere obbediente anche nelle cose piccole, e che sembrano di nessun valore; perché in questo modo la persona riesce ad essere obbediente nelle cose più grandi.", passagensLatinas: null },
    portugues: { texto: "A pessoa deve esforçar-se por ser obediente também nas coisas pequenas, que parecem não ter valor algum; desse modo, consegue ser obediente nas coisas maiores.", tradutor },
    tema: "obediência nas pequenas coisas", temasSecundarios: ["disciplina", "fidelidade"], contexto: "A fidelidade em tarefas pequenas é apresentada como escola para a obediência em responsabilidades maiores.", testemunha,
    referenciasBiblicas: [{ passagem: "nas coisas pequenas ... nas coisas maiores", referencia: "Lucas 16,10, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 11 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 11.", "O sujeito genérico `l’uomo` foi traduzido por ‘a pessoa’, evitando restringir a máxima ao gênero masculino."]
  },
  {
    id: "maxima-035", numero: 35, dia: 4, mes: "fevereiro",
    original: { idioma: "italiano", texto: "Chi fa in questo modo, si assicura di non dover temere davanti a Dio per le proprie azioni.", passagensLatinas: null },
    portugues: { texto: "Quem age desse modo pode ter a segurança de não precisar temer diante de Deus por suas próprias ações.", tradutor },
    tema: "consciência reta", temasSecundarios: ["obediência", "juízo"], contexto: "A obediência cotidiana é relacionada à confiança de comparecer diante de Deus com consciência tranquila.", testemunha,
    referenciasBiblicas: [{ passagem: "non dover temere davanti a Dio", referencia: "1João 3,19-22, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 11 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 11.", "`Si assicura` foi traduzido por ‘pode ter a segurança’, sem transformar a exortação em garantia automática de salvação."]
  },
  {
    id: "maxima-036", numero: 36, dia: 5, mes: "fevereiro",
    original: { idioma: "italiano", texto: "La perfezione non consiste in cose esteriori, come nel piangere o in cose simili: bensì nelle vere e solide virtù.", passagensLatinas: null },
    portugues: { texto: "A perfeição não consiste em coisas exteriores, como chorar ou em práticas semelhantes, mas nas virtudes verdadeiras e sólidas.", tradutor },
    tema: "perfeição interior", temasSecundarios: ["virtude", "discernimento espiritual"], contexto: "A máxima distingue sinais exteriores de devoção da consistência real das virtudes.", testemunha,
    referenciasBiblicas: [{ passagem: "vere e solide virtù", referencia: "Mateus 7,16-20; Gálatas 5,22-23, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 12 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 12.", "`Piangere` foi traduzido por ‘chorar’, sem atribuir às lágrimas valor positivo ou negativo além do argumento da máxima."]
  },
  {
    id: "maxima-037", numero: 37, dia: 6, mes: "fevereiro",
    original: { idioma: "italiano", texto: "Le lacrime non sono segno che l'uomo sia in grazia di Dio; per questo non si deve dedurre che uno che pianga quando parla di cose devote, conduca una vita santa.", passagensLatinas: null },
    portugues: { texto: "As lágrimas não são sinal de que a pessoa esteja na graça de Deus; por isso, não se deve concluir que alguém que chore ao falar de coisas devotas leve uma vida santa.", tradutor },
    tema: "discernimento das lágrimas", temasSecundarios: ["graça", "vida santa", "emoção"], contexto: "A máxima adverte contra julgar a santidade pela intensidade emocional visível.", testemunha,
    referenciasBiblicas: [{ passagem: "non si deve dedurre ... una vita santa", referencia: "Mateus 7,21-23; 1Samuel 16,7, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 12 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 12.", "`Uno` foi traduzido por ‘alguém’, mantendo o valor genérico e evitando um masculino desnecessário."]
  },
  {
    id: "maxima-038", numero: 38, dia: 7, mes: "fevereiro",
    original: { idioma: "italiano", texto: "L'allegria conforta il cuore e fa che si perseveri nella buona vita: perciò il servitore di Dio dovrebbe essere sempre allegro.", passagensLatinas: null },
    portugues: { texto: "A alegria conforta o coração e faz perseverar na vida boa; por isso, o servo de Deus deveria estar sempre alegre.", tradutor },
    tema: "alegria espiritual", temasSecundarios: ["perseverança", "consolo"], contexto: "A alegria é apresentada como força de perseverança, não como divertimento superficial.", testemunha,
    referenciasBiblicas: [{ passagem: "L’allegria conforta il cuore", referencia: "Provérbios 17,22; Filipenses 4,4, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 12 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 12.", "`Buona vita` foi traduzido por ‘vida boa’, mantendo a fórmula sem reduzi-la a bem-estar subjetivo."]
  },
  {
    id: "maxima-039", numero: 39, dia: 8, mes: "fevereiro",
    original: { idioma: "italiano", texto: "Chi è stato liberato dalle tentazioni, o da qualsiasi altra sofferenza, senta ampiamente per Dio quella gratitudine, che gli si deve per il beneficio ottenuto.", passagensLatinas: null },
    portugues: { texto: "Quem foi libertado das tentações ou de qualquer outro sofrimento reconheça profundamente diante de Deus a gratidão que lhe deve pelo benefício recebido.", tradutor },
    tema: "gratidão pela libertação", temasSecundarios: ["tentação", "sofrimento", "ação de graças"], contexto: "A libertação de uma provação é interpretada como benefício que exige ação de graças a Deus.", testemunha,
    referenciasBiblicas: [{ passagem: "gratitudine ... per il beneficio ottenuto", referencia: "Salmo 116(117),1-2; Lucas 17,15-19, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 12 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 12.", "`Senta ... gratitudine` foi traduzido por ‘reconheça ... a gratidão’, solução natural para a construção italiana."]
  },
  {
    id: "maxima-040", numero: 40, dia: 9, mes: "fevereiro",
    original: { idioma: "italiano", texto: "Bisogna accettare le avversità che Dio ci manda, senza troppe lamentele, e credere con certezza che questa sia la cosa migliore per noi.", passagensLatinas: null },
    portugues: { texto: "É preciso aceitar as adversidades que Deus nos envia, sem muitas queixas, e crer com certeza que isso é o melhor para nós.", tradutor },
    tema: "aceitação das adversidades", temasSecundarios: ["providência", "paciência"], contexto: "A máxima lê as adversidades sob o horizonte da providência divina e da confiança.", testemunha,
    referenciasBiblicas: [{ passagem: "accettare le avversità che Dio ci manda", referencia: "Romanos 8,28; Tiago 1,2-4, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 12 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 12.", "`Questa` retoma o conjunto das adversidades e foi traduzido por ‘isso’, sem especificar uma provação que o texto não nomeia."]
  },
  {
    id: "maxima-041", numero: 41, dia: 10, mes: "fevereiro",
    original: { idioma: "italiano", texto: "Bisogna anche credere che Dio faccia bene ogni cosa, sebbene non capiamo la ragione di quello che fa.", passagensLatinas: null },
    portugues: { texto: "É preciso também crer que Deus faz bem todas as coisas, ainda que não compreendamos a razão do que ele faz.", tradutor },
    tema: "confiança na providência", temasSecundarios: ["fé", "mistério", "abandono"], contexto: "A fé na providência não depende da compreensão imediata das razões divinas.", testemunha,
    referenciasBiblicas: [{ passagem: "Dio faccia bene ogni cosa", referencia: "Marcos 7,37; Romanos 11,33-36, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 12 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 12.", "`Faccia bene ogni cosa` foi traduzido por ‘faz bem todas as coisas’, sem transformar a frase em ‘tudo dá certo’."]
  },
  {
    id: "maxima-042", numero: 42, dia: 11, mes: "fevereiro",
    original: { idioma: "italiano", texto: "Ciascuno deve accettare facilmente il parere degli altri, e parlare in loro favore e contro sé stesso, e accogliere le cose con buon animo.", passagensLatinas: null },
    portugues: { texto: "Cada pessoa deve acolher facilmente a opinião dos outros, falar em favor deles e contra si mesma, e receber as coisas com boa disposição.", tradutor },
    tema: "humildade no convívio", temasSecundarios: ["caridade", "escuta", "mansidão"], contexto: "A máxima recomenda humildade na avaliação dos outros e disposição benévola diante das circunstâncias.", testemunha,
    referenciasBiblicas: [{ passagem: "parlare in loro favore e contro sé stesso", referencia: "Filipenses 2,3-4; 1Coríntios 13,4-7, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 12 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 12.", "`Buon animo` foi traduzido por ‘boa disposição’, e não por ‘bom ânimo’ em registro artificialmente arcaizante."]
  },
  {
    id: "maxima-043", numero: 43, dia: 12, mes: "fevereiro",
    original: { idioma: "italiano", texto: "Non c'è cosa più adeguata per stimolare lo spirito di preghiera, che la lettura dei libri spirituali.", passagensLatinas: null },
    portugues: { texto: "Não há coisa mais adequada para estimular o espírito de oração que a leitura de livros espirituais.", tradutor },
    tema: "leitura espiritual", temasSecundarios: ["oração", "formação"], contexto: "A leitura espiritual é indicada como meio direto de despertar a oração.", testemunha,
    referenciasBiblicas: [{ passagem: "lettura dei libri spirituali", referencia: "2Timóteo 3,15-17; Colossenses 3,16, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 12 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 12.", "A construção comparativa foi mantida sem inserir a expressão ‘de todos’ que não está no original."]
  },
  {
    id: "maxima-044", numero: 44, dia: 13, mes: "fevereiro",
    original: { idioma: "italiano", texto: "Si frequentino i santissimi Sacramenti, si vada alle prediche, e si leggano spesso le vite dei Santi.", passagensLatinas: null },
    portugues: { texto: "Frequentem-se os santíssimos Sacramentos, vá-se às pregações e leiam-se com frequência as vidas dos Santos.", tradutor },
    tema: "meios de santificação", temasSecundarios: ["Sacramentos", "pregação", "hagiografia"], contexto: "A máxima reúne práticas sacramentais, escuta da pregação e leitura de vidas de santos.", testemunha,
    referenciasBiblicas: [{ passagem: "santissimi Sacramenti", referencia: "Atos 2,42; 1Coríntios 10,16-17, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 12 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 12.", "`Prediche` foi traduzido por ‘pregações’, termo adequado ao contexto eclesial."]
  },
  {
    id: "maxima-045", numero: 45, dia: 14, mes: "fevereiro",
    original: { idioma: "italiano", texto: "L'uomo pensi di avere sempre Dio davanti agli occhi.", passagensLatinas: null },
    portugues: { texto: "A pessoa deve pensar em ter sempre Deus diante dos olhos.", tradutor },
    tema: "presença de Deus", temasSecundarios: ["vigilância", "oração"], contexto: "A lembrança contínua de Deus é proposta como atitude interior permanente.", testemunha,
    referenciasBiblicas: [{ passagem: "Dio davanti agli occhi", referencia: "Salmo 15(16),8; Salmo 53(54),5, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 12 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 12.", "O genérico `l’uomo` foi traduzido por ‘a pessoa’, mantendo a aplicação universal."]
  },
  {
    id: "maxima-046", numero: 46, dia: 15, mes: "fevereiro",
    original: { idioma: "italiano", texto: "Chi si trova nell'occasione del peccato, guardi ciò che fa, si tolga dall'occasione, e fugga il peccato.", passagensLatinas: null },
    portugues: { texto: "Quem se encontra na ocasião do pecado observe o que está fazendo, afaste-se da ocasião e fuja do pecado.", tradutor },
    tema: "fuga da ocasião de pecado", temasSecundarios: ["vigilância", "prudência", "conversão"], contexto: "A máxima prescreve uma resposta concreta: reconhecer o perigo, afastar-se e evitar o pecado.", testemunha,
    referenciasBiblicas: [{ passagem: "fugga il peccato", referencia: "2Timóteo 2,22; 1Coríntios 6,18, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 12 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 12.", "`Occasione` foi mantido como ‘ocasião’, termo tradicional na linguagem moral e espiritual."]
  },
  {
    id: "maxima-047", numero: 47, dia: 16, mes: "fevereiro",
    original: { idioma: "misto", texto: "Non c'è niente di buono in questo mondo: Vanitas vanitatum, et omnia vanitas (Vanità di vanità, tutto è vanità).", passagensLatinas: [{ trecho: "Vanitas vanitatum, et omnia vanitas", origem: "Eclesiastes 1,2", traducao: "Vaidade das vaidades, e tudo é vaidade." }] },
    portugues: { texto: "Não há nada de bom neste mundo: “Vaidade das vaidades, e tudo é vaidade” (vaidade de vaidade, tudo é vaidade).", tradutor },
    tema: "desapego do mundo", temasSecundarios: ["vaidade", "Eclesiastes", "morte"], contexto: "A máxima usa a fórmula de Eclesiastes para sustentar o desapego dos bens transitórios.", testemunha,
    referenciasBiblicas: [{ passagem: "Vanitas vanitatum, et omnia vanitas", referencia: "Eclesiastes 1,2", }], fonte: { primaria, original: originalDeclarada, paginaPDF: 12 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 12.", "O latim foi separado do italiano e não foi confundido com uma tradução italiana; a glosa entre parênteses foi preservada como parte do testemunho."]
  },
  {
    id: "maxima-048", numero: 48, dia: 17, mes: "fevereiro",
    original: { idioma: "italiano", texto: "Bisogna pure finalmente morire.", passagensLatinas: null },
    portugues: { texto: "É preciso, afinal, morrer.", tradutor },
    tema: "memória da morte", temasSecundarios: ["sobriedade", "conversão"], contexto: "A máxima reduz a lembrança da morte a uma afirmação breve e sem atenuações.", testemunha,
    referenciasBiblicas: [{ passagem: "finalmente morire", referencia: "Hebreus 9,27, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 12 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 12.", "`Pure finalmente` foi traduzido por ‘afinal’, preservando a simplicidade incisiva do enunciado."]
  },
  {
    id: "maxima-049", numero: 49, dia: 18, mes: "fevereiro",
    original: { idioma: "italiano", texto: "I principianti si esercitino soprattutto nella meditazione dei Novissimi.", passagensLatinas: null },
    portugues: { texto: "Os iniciantes exercitem-se sobretudo na meditação dos Novíssimos.", tradutor },
    tema: "meditação dos Novíssimos", temasSecundarios: ["morte", "juízo", "inferno", "glória"], contexto: "A formação espiritual inicial é orientada para a meditação da morte, do juízo, do inferno e da glória.", testemunha,
    referenciasBiblicas: [{ passagem: "meditazione dei Novissimi", referencia: "Eclesiástico 7,36; Mateus 25,31-46, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 12 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 12.", "`Novissimi` foi mantido como ‘Novíssimos’, termo técnico da tradição espiritual católica; não foi diluído em ‘coisas futuras’."]
  },
  {
    id: "maxima-050", numero: 50, dia: 19, mes: "fevereiro",
    original: { idioma: "italiano", texto: "Chi non va all'inferno da vivo, corre il grande pericolo di andarvi dopo la morte.", passagensLatinas: null },
    portugues: { texto: "Quem não vai ao inferno em vida corre o grande perigo de ir para lá depois da morte.", tradutor },
    tema: "conversão nesta vida", temasSecundarios: ["inferno", "vigilância", "pecado"], contexto: "A formulação paradoxal apresenta a conversão presente como libertação do perigo de condenação futura.", testemunha,
    referenciasBiblicas: [{ passagem: "pericolo di andarvi dopo la morte", referencia: "Lucas 13,24-28; Mateus 7,13-14, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 12 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 12.", "A tradução conserva o paradoxo de `da vivo`, sem interpretá-lo como descrição literal de uma experiência física do inferno."]
  },
  {
    id: "maxima-051", numero: 51, dia: 20, mes: "fevereiro",
    original: { idioma: "italiano", texto: "Per perseverare nella vita spirituale, giova molto la pratica dell'orazione, fatta soprattutto con il consiglio del confessore.", passagensLatinas: null },
    portugues: { texto: "Para perseverar na vida espiritual, é muito útil a prática da oração, realizada sobretudo com o conselho do confessor.", tradutor },
    tema: "oração e direção espiritual", temasSecundarios: ["perseverança", "confissão", "discernimento"], contexto: "A oração perseverante é vinculada ao acompanhamento prudente do confessor.", testemunha,
    referenciasBiblicas: [{ passagem: "perseverare nella vita spirituale", referencia: "Lucas 18,1; 1Tessalonicenses 5,17, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 12 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 12.", "`Pratica dell’orazione` foi traduzido por ‘prática da oração’, sem restringir o termo a uma técnica específica."]
  },
  {
    id: "maxima-052", numero: 52, dia: 21, mes: "fevereiro",
    original: { idioma: "italiano", texto: "Non c'è cosa che il demonio più teme, e che più cerca di impedire, che l'orazione.", passagensLatinas: null },
    portugues: { texto: "Não há coisa que o demônio tema mais e que procure impedir mais que a oração.", tradutor },
    tema: "combate espiritual da oração", temasSecundarios: ["demônio", "perseverança", "vigilância"], contexto: "A oração é apresentada como prática central no combate contra a ação do demônio.", testemunha,
    referenciasBiblicas: [{ passagem: "il demonio ... impedire ... l’orazione", referencia: "Efésios 6,10-18; 1Pedro 5,8-9, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 12 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 12.", "A repetição de `più` foi conservada no português por meio de ‘mais’ nas duas partes da frase."]
  },
  {
    id: "maxima-053", numero: 53, dia: 22, mes: "fevereiro",
    original: { idioma: "italiano", texto: "Un ottimo mezzo per preservarsi dal ricadere in colpe gravi, è il dire la sera: «Domani potrei essere morto». ", passagensLatinas: null },
    portugues: { texto: "Um excelente meio de se preservar de recair em faltas graves é dizer à noite: “Amanhã eu poderia estar morto”.", tradutor },
    tema: "exame noturno", temasSecundarios: ["memória da morte", "vigilância", "pecado grave"], contexto: "A lembrança noturna da morte é proposta como instrumento de vigilância moral.", testemunha,
    referenciasBiblicas: [{ passagem: "Domani potrei essere morto", referencia: "Lucas 12,16-21; Tiago 4,13-14, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 12 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 12.", "A frase entre aspas foi preservada como fala direta, com pontuação portuguesa equivalente."]
  },
  {
    id: "maxima-054", numero: 54, dia: 23, mes: "fevereiro",
    original: { idioma: "italiano", texto: "Un uomo senza orazione è un animale senza ragione.", passagensLatinas: null },
    portugues: { texto: "Uma pessoa sem oração é um animal sem razão.", tradutor },
    tema: "necessidade da oração", temasSecundarios: ["razão", "vida espiritual"], contexto: "A formulação proverbial apresenta a oração como elemento que ordena a vida racional e espiritual.", testemunha,
    referenciasBiblicas: [{ passagem: "senza orazione ... senza ragione", referencia: "Salmo 14(15),1-2; Romanos 8,5-6, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 12 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 12.", "`Un uomo` foi traduzido por ‘uma pessoa’, evitando generalização masculina literal sem perda do sentido proverbial."]
  },
  {
    id: "maxima-055", numero: 55, dia: 24, mes: "fevereiro",
    original: { idioma: "italiano", texto: "Sebbene lo stato di vita religioso sia il più eminente, non è adatto però a tutti.", passagensLatinas: null },
    portugues: { texto: "Embora o estado de vida religioso seja o mais elevado, ele não é adequado a todos.", tradutor },
    tema: "discernimento da vocação", temasSecundarios: ["vida religiosa", "liberdade", "vocação"], contexto: "A dignidade da vida religiosa é afirmada junto com a necessidade de discernir a vocação pessoal.", testemunha,
    referenciasBiblicas: [{ passagem: "non è adatto però a tutti", referencia: "1Coríntios 7,7.17; Mateus 19,11-12, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 12 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 12.", "`Eminente` foi traduzido por ‘elevado’, solução natural em português para um estado de vida sem conotação honorífica exagerada."]
  },
  {
    id: "maxima-056", numero: 56, dia: 25, mes: "fevereiro",
    original: { idioma: "italiano", texto: "Per imparare a pregare, è un buonissimo mezzo il riconoscersi indegno di un tale beneficio, e affidarsi in tutto nelle mani del Signore.", passagensLatinas: null },
    portugues: { texto: "Para aprender a rezar, é um excelente meio reconhecer-se indigno de tal benefício e confiar-se inteiramente nas mãos do Senhor.", tradutor },
    tema: "humildade na oração", temasSecundarios: ["oração", "abandono", "graça"], contexto: "A humildade e o abandono são apresentados como preparação para aprender a rezar.", testemunha,
    referenciasBiblicas: [{ passagem: "affidarsi ... nelle mani del Signore", referencia: "Salmo 30(31),6; Lucas 23,46, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 12 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 12.", "`Riconoscersi indegno` foi traduzido por ‘reconhecer-se indigno’, preservando a reflexividade e o registro espiritual."]
  },
  {
    id: "maxima-057", numero: 57, dia: 26, mes: "fevereiro",
    original: { idioma: "italiano", texto: "La vera preparazione all'orazione consiste nell'esercitarsi nella mortificazione, perché il volersi dare all'orazione senza di questa, è come se un uccello volesse cominciare a volare senza le ali.", passagensLatinas: null },
    portugues: { texto: "A verdadeira preparação para a oração consiste em exercitar-se na mortificação, pois querer entregar-se à oração sem ela seria como se um pássaro quisesse começar a voar sem asas.", tradutor },
    tema: "mortificação e oração", temasSecundarios: ["disciplina", "oração", "ascese"], contexto: "A imagem do pássaro sem asas explica a mortificação como disposição necessária para a vida de oração.", testemunha,
    referenciasBiblicas: [{ passagem: "uccello ... volare senza le ali", referencia: "1Coríntios 9,25-27; Gálatas 5,24, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 12 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 12.", "`Mortificazione` foi mantida como ‘mortificação’, termo técnico da tradição ascética; não foi substituída por ‘autopunição’. "]
  },
  {
    id: "maxima-058", numero: 58, dia: 27, mes: "fevereiro",
    original: { idioma: "italiano", texto: "Non possiamo arrivare alla vita contemplativa, se prima non ci esercitiamo con molta fatica in quella attiva.", passagensLatinas: null },
    portugues: { texto: "Não podemos chegar à vida contemplativa se antes não nos exercitarmos, com muito esforço, na vida ativa.", tradutor },
    tema: "vida ativa e contemplativa", temasSecundarios: ["serviço", "oração", "formação"], contexto: "A máxima apresenta o serviço ativo como preparação laboriosa para a contemplação.", testemunha,
    referenciasBiblicas: [{ passagem: "vita contemplativa ... quella attiva", referencia: "Lucas 10,38-42; Tiago 2,17, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 12 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 12.", "A oposição `contemplativa / attiva` foi preservada como vocabulário clássico da espiritualidade cristã."]
  },
  {
    id: "maxima-059", numero: 59, dia: 28, mes: "fevereiro",
    original: { idioma: "italiano", texto: "Bisogna obbedire all' ispirazione che Dio dà nell'orazione, e seguire quella; e quando, per esempio, dispone a meditare la Passione, non volere passare a meditare un altro mistero.", passagensLatinas: null },
    portugues: { texto: "É preciso obedecer à inspiração que Deus dá na oração e segui-la; quando, por exemplo, ela dispõe a meditar a Paixão, não se deve querer passar a meditar outro mistério.", tradutor },
    tema: "fidelidade à inspiração na oração", temasSecundarios: ["discernimento", "Paixão", "meditação"], contexto: "A máxima recomenda permanecer na matéria de oração recebida interiormente, sem buscar novidades por inquietação.", testemunha,
    referenciasBiblicas: [{ passagem: "meditare la Passione", referencia: "Evangelhos da Paixão; Gálatas 6,14, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 13 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 13.", "`Quella` retoma `l’ispirazione` e foi traduzido por ‘segui-la’, mantendo a referência feminina."]
  },
  {
    id: "maxima-060", numero: 60, dia: 29, mes: "fevereiro",
    original: { idioma: "italiano", texto: "Quando uno si va a comunicare, deve seguire quella stessa ispirazione che ha avuto nell'orazione, e non andare a cercare nuove meditazioni.", passagensLatinas: null },
    portugues: { texto: "Quando alguém vai comungar, deve seguir aquela mesma inspiração que recebeu na oração e não sair à procura de novas meditações.", tradutor },
    tema: "preparação para a comunhão", temasSecundarios: ["Eucaristia", "oração", "recolhimento"], contexto: "A preparação para a comunhão deve continuar a inspiração recebida na oração, sem dispersão voluntária.", testemunha,
    referenciasBiblicas: [{ passagem: "si va a comunicare", referencia: "1Coríntios 11,28-29; João 6,56, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 13 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 13.", "`Comunicare` foi traduzido por ‘comungar’, termo litúrgico brasileiro contemporâneo; não foi confundido com comunicação verbal."]
  },
  {
    id: "maxima-061", numero: 61, dia: 1, mes: "março",
    original: { idioma: "italiano", texto: "Non si devono mai domandare a Dio le grazie per qualcuno, se non condizionatamente: “se a Lui piace”, e cose simili.", passagensLatinas: null },
    portugues: { texto: "Nunca se devem pedir a Deus graças para alguém sem fazê-lo condicionalmente: “se isso lhe agradar”, e expressões semelhantes.", tradutor },
    tema: "oração conforme a vontade de Deus", temasSecundarios: ["intercessão", "abandono", "providência"], contexto: "A intercessão deve ser submetida à vontade divina, sem transformar o pedido humano em exigência.", testemunha,
    referenciasBiblicas: [{ passagem: "se a Lui piace", referencia: "Tiago 4,15; Lucas 22,42, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 13 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 13.", "A expressão entre aspas foi traduzida como condição teológica, não como hesitação psicológica."]
  },
  {
    id: "maxima-062", numero: 62, dia: 2, mes: "março",
    original: { idioma: "italiano", texto: "Quando una persona spirituale nel domandare a Dio una grazia, sente grande tranquillità di spirito, è buon segno che gliel'abbia concessa, oppure che gliela voglia fare quanto prima.", passagensLatinas: null },
    portugues: { texto: "Quando uma pessoa espiritual, ao pedir uma graça a Deus, sente grande tranquilidade de espírito, isso é um bom sinal de que ele lha concedeu ou deseja concedê-la em breve.", tradutor },
    tema: "tranquilidade na oração", temasSecundarios: ["discernimento", "graça", "paz interior"], contexto: "A paz interior durante a súplica é apresentada como possível sinal de acolhimento ou futura concessão da graça.", testemunha,
    referenciasBiblicas: [{ passagem: "grande tranquillità di spirito", referencia: "Filipenses 4,6-7; Colossenses 3,15, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 13 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 13.", "`Buon segno` foi preservado como sinal prudencial, não como certeza dogmática sobre o resultado do pedido."]
  },
  {
    id: "maxima-063", numero: 63, dia: 3, mes: "março",
    original: { idioma: "italiano", texto: "L'uomo non deve credere di aver fatto qualche bene, né essere mai soddisfatto di qualsivoglia grado di perfezione al quale fosse arrivato, perché Cristo ce ne ha dato la forma, mettendoci la perfezione dell'eterno Padre davanti agli occhi, dicendo: «Voi, dunque, siate perfetti come è perfetto il Padre vostro celeste» (Mt 5, 48).", passagensLatinas: null },
    portugues: { texto: "A pessoa não deve crer que tenha feito algum bem nem jamais se dar por satisfeita com qualquer grau de perfeição a que tenha chegado, pois Cristo nos deu o modelo ao colocar diante dos nossos olhos a perfeição do Pai eterno, dizendo: “Sede, portanto, perfeitos como é perfeito o vosso Pai celeste” (Mt 5,48).", tradutor },
    tema: "perfeição e humildade", temasSecundarios: ["Cristo", "Pai celeste", "autocrítica"], contexto: "A perfeição do Pai celeste, ensinada por Cristo, impede a autossatisfação espiritual e mantém a pessoa em humildade.", testemunha,
    referenciasBiblicas: [{ passagem: "Voi, dunque, siate perfetti come è perfetto il Padre vostro celeste", referencia: "Mateus 5,48", }], fonte: { primaria, original: originalDeclarada, paginaPDF: 13 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 13.", "A referência `Mt 5, 48` foi desenvolvida para `Mateus 5,48`.", "A citação bíblica foi traduzida como citação, separada da prosa de Raponi apenas no aparato de referências."]
  },
  {
    id: "maxima-064", numero: 64, dia: 4, mes: "março",
    original: { idioma: "italiano", texto: "La dolcezza che sentono alcuni nell'orazione, è latte che nostro Signore offre da gustare a chi comincia a servirlo.", passagensLatinas: null },
    portugues: { texto: "A doçura que alguns sentem na oração é o leite que nosso Senhor oferece para ser saboreado por quem começa a servi-lo.", tradutor },
    tema: "consolação inicial", temasSecundarios: ["oração", "iniciação espiritual", "doçura"], contexto: "A consolação sensível é comparada ao alimento inicial oferecido a quem começa o serviço de Deus.", testemunha,
    referenciasBiblicas: [{ passagem: "latte che nostro Signore offre", referencia: "1Pedro 2,2-3; 1Coríntios 3,1-2, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 13 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 13.", "A imagem do leite foi mantida; não foi substituída por ‘consolo fácil’."]
  },
  {
    id: "maxima-065", numero: 65, dia: 5, mes: "março",
    original: { idioma: "italiano", texto: "Lasciare l'orazione quando uno è chiamato per qualche atto di carità verso il prossimo, non è propriamente lasciare l'orazione; ma invero lasciare Cristo per Cristo; cioé privarsi dei piaceri spirituali per guadagnare anime a Cristo.", passagensLatinas: null },
    portugues: { texto: "Deixar a oração quando alguém é chamado a realizar um ato de caridade para com o próximo não é propriamente deixar a oração; é, na verdade, deixar Cristo por Cristo, isto é, privar-se dos prazeres espirituais para ganhar almas para Cristo.", tradutor },
    tema: "caridade acima do consolo", temasSecundarios: ["serviço", "oração", "apostolado"], contexto: "A caridade ativa é apresentada como obediência a Cristo que pode exigir a interrupção do consolo da oração.", testemunha,
    referenciasBiblicas: [{ passagem: "lasciare Cristo per Cristo", referencia: "Mateus 25,35-40; João 13,34-35, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 13 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 13.", "A fórmula `lasciare Cristo per Cristo` foi mantida literalmente na tradução e explicada pela oração subordinada seguinte."]
  },
  {
    id: "maxima-066", numero: 66, dia: 6, mes: "março",
    original: { idioma: "italiano", texto: "È bene che l'uomo si allontani dall'orazione piuttosto con gusto e desiderio di ritornarvi, che con tedio.", passagensLatinas: null },
    portugues: { texto: "É bom que a pessoa se afaste da oração antes com gosto e desejo de retornar a ela do que com tédio.", tradutor },
    tema: "desejo de retornar à oração", temasSecundarios: ["perseverança", "liberdade interior", "oração"], contexto: "A saída da oração deve conservar o desejo de retornar, não produzir aversão ou cansaço espiritual.", testemunha,
    referenciasBiblicas: [{ passagem: "desiderio di ritornarvi", referencia: "Salmo 62(63),2; Salmo 83(84),3, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 13 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 13.", "`Tedio` foi traduzido por ‘tédio’, sem trocar o termo por ‘tristeza’, que teria outro valor afetivo."]
  },
  {
    id: "maxima-067", numero: 67, dia: 7, mes: "março",
    original: { idioma: "italiano", texto: "Le cose della divina Scrittura si imparano più con l'orazione che con lo studio.", passagensLatinas: null },
    portugues: { texto: "As coisas da Escritura divina aprendem-se mais pela oração que pelo estudo.", tradutor },
    tema: "oração e Escritura", temasSecundarios: ["exegese espiritual", "formação", "sabedoria"], contexto: "A compreensão espiritual da Escritura é ligada à oração mais que à erudição isolada.", testemunha,
    referenciasBiblicas: [{ passagem: "divina Scrittura", referencia: "2Timóteo 3,15-17; João 14,26, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 13 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 13.", "`Cose della divina Scrittura` foi traduzido por ‘coisas da Escritura divina’, conservando a formulação ampla do original."]
  },
  {
    id: "maxima-068", numero: 68, dia: 8, mes: "março",
    original: { idioma: "italiano", texto: "L'esercitarsi con carità nel compito di servire gli infermi, è una via breve per acquistare la perfezione della virtù.", passagensLatinas: null },
    portugues: { texto: "Exercitar-se com caridade no serviço aos enfermos é um caminho breve para alcançar a perfeição da virtude.", tradutor },
    tema: "serviço aos enfermos", temasSecundarios: ["caridade", "misericórdia", "virtude"], contexto: "O cuidado dos enfermos é apresentado como caminho concreto de amadurecimento da virtude.", testemunha,
    referenciasBiblicas: [{ passagem: "servire gli infermi", referencia: "Mateus 25,36.40; Tiago 5,14-15, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 13 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 13.", "`Infermi` foi traduzido por ‘enfermos’, sem eufemismo ou redução do cuidado a assistência administrativa."]
  },
  {
    id: "maxima-069", numero: 69, dia: 9, mes: "março",
    original: { idioma: "italiano", texto: "Le donne stiano in casa, si dedichino alla cura della famiglia, e non escano troppo spesso in pubblico.", passagensLatinas: null },
    portugues: { texto: "As mulheres permaneçam em casa, dediquem-se ao cuidado da família e não saiam com demasiada frequência em público.", tradutor },
    tema: "vida doméstica", temasSecundarios: ["família", "costumes", "disciplina"], contexto: "A máxima registra uma norma de comportamento doméstico própria do contexto histórico da compilação.", testemunha,
    referenciasBiblicas: [{ passagem: "cura della famiglia", referencia: "Tito 2,4-5; 1Timóteo 5,14, como alusão contextual" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 13 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 13.", "A tradução preserva o conteúdo normativo do testemunho, sem apresentá-lo como orientação social contemporânea do corpus.", "A nota contextual é necessária porque a formulação pertence a um horizonte histórico específico sobre a presença pública das mulheres."]
  },
  {
    id: "maxima-070", numero: 70, dia: 10, mes: "março",
    original: { idioma: "italiano", texto: "Bisogna pregare continuamente Dio, che ci conceda il dono della santa perseveranza.", passagensLatinas: null },
    portugues: { texto: "É preciso rezar continuamente a Deus para que nos conceda o dom da santa perseverança.", tradutor },
    tema: "perseverança final", temasSecundarios: ["oração", "graça", "fidelidade"], contexto: "A perseverança é apresentada como dom que deve ser pedido continuamente.", testemunha,
    referenciasBiblicas: [{ passagem: "pregare continuamente", referencia: "1Tessalonicenses 5,17; Mateus 24,13, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 13 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 13.", "`Santa perseveranza` foi preservado como ‘santa perseverança’, sem substituir por mera persistência psicológica."]
  },
  {
    id: "maxima-071", numero: 71, dia: 11, mes: "março",
    original: { idioma: "italiano", texto: "Non bisogna abbandonare l'orazione a causa di distrazioni e agitazioni di mente, anche se sembra che non se ne abbia alcuna utilità; se si persevera per tutto il tempo stabilito e consueto, concentrando dolcemente la mente, si merita molto.", passagensLatinas: null },
    portugues: { texto: "Não se deve abandonar a oração por causa de distrações e agitações da mente, ainda que pareça não haver nela utilidade alguma; se a pessoa perseverar durante todo o tempo estabelecido e habitual, concentrando suavemente a mente, muito ganhará.", tradutor },
    tema: "perseverança na distração", temasSecundarios: ["oração", "aridez", "disciplina"], contexto: "A fidelidade ao tempo de oração é valorizada mesmo quando a experiência subjetiva parece improdutiva.", testemunha,
    referenciasBiblicas: [{ passagem: "persevera ... per tutto il tempo", referencia: "Lucas 18,1; Gálatas 6,9, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 13 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 13.", "`Si merita molto` foi traduzido por ‘muito ganhará’, evitando a leitura comercial de mérito como pagamento."]
  },
  {
    id: "maxima-072", numero: 72, dia: 12, mes: "março",
    original: { idioma: "italiano", texto: "Se nel tempo di aridità nell'orazione si fanno atti di umiltà, di consapevolezza di sé stessi, di attestazione di non poter nulla, o di chiedere aiuto a Dio, tutto questo significa fare orazione.", passagensLatinas: null },
    portugues: { texto: "Se, no tempo de aridez na oração, se fazem atos de humildade, de consciência de si, de reconhecimento da própria incapacidade ou de pedido de ajuda a Deus, tudo isso significa rezar.", tradutor },
    tema: "oração na aridez", temasSecundarios: ["humildade", "dependência de Deus", "discernimento"], contexto: "A oração verdadeira não é medida pela doçura, mas também inclui humildade e pedido de ajuda em tempos de aridez.", testemunha,
    referenciasBiblicas: [{ passagem: "chiedere aiuto a Dio", referencia: "Salmo 120(121),1-2; 2Coríntios 12,9, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 13 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 13.", "`Fare orazione` foi traduzido por ‘rezar’, solução natural no português espiritual; o sentido inclui os atos interiores enumerados."]
  },
  {
    id: "maxima-073", numero: 73, dia: 13, mes: "março",
    original: { idioma: "italiano", texto: "Per le aridità dello spirito è ottimo rimedio l'immaginarsi di essere come un mendicante alla presenza di Dio e dei Santi; e come tale andare ora da questo Santo, ora da quell'altro, a domandare elemosina spirituale con quell'affetto e verità con cui sono soliti domandarla i poverelli.", passagensLatinas: null },
    portugues: { texto: "Para as aridezes do espírito, é excelente remédio imaginar-se como um mendigo na presença de Deus e dos Santos e, como tal, ir ora a este Santo, ora àquele outro, pedir esmola espiritual com o afeto e a sinceridade com que os pobres costumam pedi-la.", tradutor },
    tema: "pobreza espiritual", temasSecundarios: ["aridez", "intercessão dos santos", "humildade"], contexto: "A imagem do mendigo expressa a humildade perseverante de quem pede auxílio espiritual em meio à aridez.", testemunha,
    referenciasBiblicas: [{ passagem: "mendicante alla presenza di Dio e dei Santi", referencia: "Mateus 5,3; Apocalipse 5,8, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 13 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 13.", "`Poverelli` foi traduzido por ‘pobres’, sem usar diminutivo coloquial; a imagem de mendicância foi mantida."]
  },
  {
    id: "maxima-074", numero: 74, dia: 14, mes: "março",
    original: { idioma: "italiano", texto: "Si può chiedere elemosina spirituale anche corporalmente, andando ora alla chiesa di questo Santo, ora alla chiesa di quell'altro, a domandare questa santa elemosina.", passagensLatinas: null },
    portugues: { texto: "Também se pode pedir esmola espiritual corporalmente, indo ora à igreja deste Santo, ora à igreja daquele outro, para pedir essa santa esmola.", tradutor },
    tema: "peregrinação devocional", temasSecundarios: ["santos", "oração corporal", "igreja"], contexto: "A oração dos santos é descrita também como prática corporal de visitar diferentes igrejas.", testemunha,
    referenciasBiblicas: [{ passagem: "santa elemosina", referencia: "Atos 2,42-47; Hebreus 13,15-16, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 14 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 14.", "`Corporalmente` foi conservado para distinguir a peregrinação física da atitude interior da máxima anterior."]
  },
  {
    id: "maxima-075", numero: 75, dia: 15, mes: "março",
    original: { idioma: "italiano", texto: "Senza l'orazione non si può durare molto nelle vie dello spirito; perciò ogni giorno si deve ricorrere a questo potentissimo mezzo di salvezza.", passagensLatinas: null },
    portugues: { texto: "Sem a oração não se pode perseverar por muito tempo nos caminhos do espírito; por isso, todos os dias se deve recorrer a esse poderosíssimo meio de salvação.", tradutor },
    tema: "oração como meio de salvação", temasSecundarios: ["perseverança", "caminho espiritual", "disciplina"], contexto: "A oração diária é tratada como meio indispensável para permanecer no caminho espiritual.", testemunha,
    referenciasBiblicas: [{ passagem: "vie dello spirito", referencia: "Gálatas 5,16.25; Efésios 6,18, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 14 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 14.", "`Durare` foi traduzido por ‘perseverar’, que expressa melhor o sentido espiritual no contexto."]
  },
  {
    id: "maxima-076", numero: 76, dia: 16, mes: "março",
    original: { idioma: "italiano", texto: "I giovani, per difendersi da ogni pericolo di impurità, dopo il pranzo non si ritirino subito né a leggere, né a scrivere, né a fare altre cose; ma stiano in conversazione, perché in quel momento il demonio assale di più; e questo è il demonio chiamato dalla Scrittura “meridiano”, dal quale il santo Davide desiderava di essere liberato.", passagensLatinas: null },
    portugues: { texto: "Os jovens, para se defenderem de todo perigo de impureza, depois do almoço não se recolham imediatamente para ler, escrever ou fazer outras coisas; permaneçam antes em conversa, porque nesse momento o demônio ataca mais. É esse o demônio que a Escritura chama de “meridiano”, do qual o santo Davi desejava ser libertado.", tradutor },
    tema: "vigilância contra a impureza", temasSecundarios: ["juventude", "tentação", "companhia"], contexto: "A máxima prescreve uma rotina concreta de convivência como proteção contra a tentação atribuída ao período do meio-dia.", testemunha,
    referenciasBiblicas: [{ passagem: "demonio chiamato dalla Scrittura ‘meridiano’", referencia: "Salmo 90(91),6, na interpretação tradicional do ‘demônio do meio-dia’" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 14 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 14.", "`Meridiano` foi mantido entre aspas e anotado como leitura tradicional do Salmo 90(91),6.", "A máxima é transcrita como testemunho histórico de disciplina juvenil; a nota não a converte em recomendação psicológica universal contemporânea."]
  },
  {
    id: "maxima-077", numero: 77, dia: 17, mes: "março",
    original: { idioma: "italiano", texto: "I giovani, se vogliono mantenersi puri, evitino le cattive compagnie.", passagensLatinas: null },
    portugues: { texto: "Os jovens, se quiserem manter-se puros, evitem as más companhias.", tradutor },
    tema: "companhias e pureza", temasSecundarios: ["juventude", "prudência", "castidade"], contexto: "A escolha das companhias é apresentada como meio de proteger a pureza dos jovens.", testemunha,
    referenciasBiblicas: [{ passagem: "cattive compagnie", referencia: "1Coríntios 15,33; Provérbios 13,20, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 14 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 14.", "`Puri` foi traduzido por ‘puros’, preservando o vocabulário moral do original."]
  },
  {
    id: "maxima-078", numero: 78, dia: 18, mes: "março",
    original: { idioma: "italiano", texto: "Per lo stesso motivo, non trattino con troppa delicatezza i loro corpi.", passagensLatinas: null },
    portugues: { texto: "Pelo mesmo motivo, não tratem seus corpos com excessiva delicadeza.", tradutor },
    tema: "sobriedade corporal", temasSecundarios: ["ascese", "juventude", "pureza"], contexto: "A disciplina corporal é ligada à vigilância contra a impureza e ao domínio de si.", testemunha,
    referenciasBiblicas: [{ passagem: "non trattino con troppa delicatezza i loro corpi", referencia: "1Coríntios 9,27; Gálatas 5,24, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 14 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 14.", "`Delicatezza` foi traduzido por ‘delicadeza’, sem acrescentar práticas ascéticas não especificadas."]
  },
  {
    id: "maxima-079", numero: 79, dia: 19, mes: "março",
    original: { idioma: "italiano", texto: "È consuetudine di Dio tessere la vita umana con un travaglio, e una consolazione almeno interiore.", passagensLatinas: null },
    portugues: { texto: "É costume de Deus tecer a vida humana com um sofrimento e ao menos uma consolação interior.", tradutor },
    tema: "provação e consolação", temasSecundarios: ["providência", "sofrimento", "consolo"], contexto: "A vida humana é descrita como trama de trabalho doloroso acompanhada de alguma consolação interior.", testemunha,
    referenciasBiblicas: [{ passagem: "tessere la vita umana con un travaglio", referencia: "2Coríntios 1,3-7; 2Coríntios 4,17, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 14 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 14.", "`Travaglio` foi traduzido por ‘sofrimento’, não por ‘trabalho de parto’, porque a máxima emprega a palavra em sentido amplo."]
  },
  {
    id: "maxima-080", numero: 80, dia: 20, mes: "março",
    original: { idioma: "italiano", texto: "I giovani siano preoccupati di fuggire l'ozio.", passagensLatinas: null },
    portugues: { texto: "Os jovens se preocupem em fugir da ociosidade.", tradutor },
    tema: "combate à ociosidade", temasSecundarios: ["juventude", "disciplina", "trabalho"], contexto: "A ociosidade é tratada como perigo que exige vigilância ativa dos jovens.", testemunha,
    referenciasBiblicas: [{ passagem: "fuggire l’ozio", referencia: "Provérbios 6,6-11; 2Tessalonicenses 3,10-12, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 14 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 14.", "`Siano preoccupati` foi traduzido por ‘se preocupem’, mantendo a forma exortativa sem tom de ansiedade moderna."]
  },
  {
    id: "maxima-081", numero: 81, dia: 21, mes: "março",
    original: { idioma: "italiano", texto: "Quando i padri hanno dato una buona educazione ai loro figli, e hanno disposto molto bene e chiaramente le loro cose, dopo la loro morte i figli che succederanno, continuando a camminare per la strada mostrata loro, avranno il vantaggio di vedere perseverare la casa nei buoni costumi e nel timore di Dio.", passagensLatinas: null },
    portugues: { texto: "Quando os pais deram boa educação aos filhos e organizaram muito bem e claramente os seus assuntos, depois da morte deles os filhos que lhes sucederem, continuando a caminhar pela estrada que lhes foi mostrada, terão a vantagem de ver a casa perseverar nos bons costumes e no temor de Deus.", tradutor },
    tema: "educação familiar", temasSecundarios: ["legado", "pais e filhos", "temor de Deus"], contexto: "A educação recebida e a ordem da casa são apresentadas como legado que pode sustentar a continuidade dos bons costumes.", testemunha,
    referenciasBiblicas: [{ passagem: "camminare per la strada mostrata loro", referencia: "Provérbios 22,6; Deuteronômio 6,6-7, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 14 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 14.", "`Le loro cose` foi traduzido por ‘os seus assuntos’, sem inventar que se trate exclusivamente de bens patrimoniais."]
  },
  {
    id: "maxima-082", numero: 82, dia: 22, mes: "março",
    original: { idioma: "italiano", texto: "Per conservare la purezza, i giovani frequentino i Sacramenti, e particolarmente la Confessione.", passagensLatinas: null },
    portugues: { texto: "Para conservar a pureza, os jovens frequentem os Sacramentos, especialmente a Confissão.", tradutor },
    tema: "Sacramentos e pureza", temasSecundarios: ["juventude", "Confissão", "castidade"], contexto: "A vida sacramental, com destaque para a Confissão, é indicada como proteção da pureza.", testemunha,
    referenciasBiblicas: [{ passagem: "frequentino i Sacramenti", referencia: "João 20,22-23; Tiago 5,16, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 14 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 14.", "`Confessione` foi capitalizada na tradução por corresponder ao nome do Sacramento no testemunho."]
  },
  {
    id: "maxima-083", numero: 83, dia: 23, mes: "março",
    original: { idioma: "italiano", texto: "Non bisogna mai fidarsi di sé stessi, perché il demonio prima rende sicuri e poi fa cadere.", passagensLatinas: null },
    portugues: { texto: "Nunca se deve confiar em si mesmo, porque o demônio primeiro torna a pessoa segura de si e depois a faz cair.", tradutor },
    tema: "desconfiança de si", temasSecundarios: ["humildade", "tentação", "vigilância"], contexto: "A autoconfiança espiritual é apresentada como abertura para a queda e contraposta à vigilância humilde.", testemunha,
    referenciasBiblicas: [{ passagem: "prima rende sicuri e poi fa cadere", referencia: "1Coríntios 10,12; Provérbios 16,18, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 14 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 14.", "`Fidarsi di sé stessi` foi traduzido por ‘confiar em si mesmo’, sem apagar o elemento de autossuficiência espiritual."]
  },
  {
    id: "maxima-084", numero: 84, dia: 24, mes: "março",
    original: { idioma: "italiano", texto: "Le tentazioni della carne si debbono temere e fuggire anche nelle infermità, nella vecchiaia stessa, e finché si possono chiudere e aprire gli occhi, perché lo spirito dell'incontinenza non risparmia né luogo, né tempo, né persona.", passagensLatinas: null },
    portugues: { texto: "As tentações da carne devem ser temidas e evitadas também nas enfermidades, na própria velhice e enquanto ainda se puderem fechar e abrir os olhos, porque o espírito da incontinência não poupa lugar, tempo ou pessoa.", tradutor },
    tema: "vigilância até o fim da vida", temasSecundarios: ["pureza", "velhice", "tentação"], contexto: "A máxima insiste na vigilância contínua contra a incontinência, sem excluir enfermidade ou velhice.", testemunha,
    referenciasBiblicas: [{ passagem: "lo spirito dell’incontinenza non risparmia", referencia: "1Pedro 5,8-9; Mateus 26,41, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 14 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 14.", "A tradução preserva a enumeração `né luogo, né tempo, né persona` como ‘lugar, tempo ou pessoa’.", "O texto é mantido como testemunho histórico da disciplina moral da compilação, sem ampliar sua formulação para um diagnóstico contemporâneo."]
  },
  {
    id: "maxima-085", numero: 85, dia: 25, mes: "março",
    original: { idioma: "italiano", texto: "Il dolce Cristo, Verbo Incarnato, ci si è dato per ogni cosa che ci era necessaria, sino alla morte dura e vergognosa della croce.", passagensLatinas: null },
    portugues: { texto: "O doce Cristo, Verbo encarnado, entregou-se por nós em tudo o que nos era necessário, até a morte dura e vergonhosa da cruz.", tradutor },
    tema: "Cristo encarnado e a cruz", temasSecundarios: ["redenção", "Paixão", "amor de Cristo"], contexto: "A encarnação e a morte de Cristo na cruz são apresentadas como entrega completa para a salvação humana.", testemunha,
    referenciasBiblicas: [{ passagem: "Verbo Incarnato ... morte ... della croce", referencia: "João 1,14; Filipenses 2,6-8; Gálatas 2,20, como síntese" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 14 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 14.", "`Dolce Cristo` foi traduzido por ‘doce Cristo’, mantendo o epíteto afetivo e não apenas uma qualidade sensorial."]
  },
  {
    id: "maxima-086", numero: 86, dia: 26, mes: "março",
    original: { idioma: "italiano", texto: "Uno dei mezzi più efficaci per mantenersi casto è l'avere compassione verso chi cade per fragilità, e il non vantarsi affatto di esserne fuori; ma riconoscere con ogni umiltà che tutto viene dalla misericordia di Dio.", passagensLatinas: null },
    portugues: { texto: "Um dos meios mais eficazes para manter-se casto é ter compaixão de quem cai por fragilidade e não se vangloriar de estar livre dela, mas reconhecer com toda humildade que tudo vem da misericórdia de Deus.", tradutor },
    tema: "compaixão e castidade", temasSecundarios: ["humildade", "misericórdia", "queda"], contexto: "A compaixão pelos que caem é apresentada como proteção contra a presunção de estar imune à fragilidade.", testemunha,
    referenciasBiblicas: [{ passagem: "compassione verso chi cade", referencia: "Gálatas 6,1-2; Judas 22-23, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 14 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 14.", "`Essere fuori` foi traduzido por ‘estar livre dela’, retomando a fragilidade mencionada sem acrescentar um objeto novo."]
  },
  {
    id: "maxima-087", numero: 87, dia: 27, mes: "março",
    original: { idioma: "italiano", texto: "Il non avere pietà delle cadute degli altri, è segno evidente di dover cadere ben presto.", passagensLatinas: null },
    portugues: { texto: "Não ter piedade das quedas dos outros é sinal evidente de que se cairá muito em breve.", tradutor },
    tema: "misericórdia diante das quedas", temasSecundarios: ["humildade", "compaixão", "correção fraterna"], contexto: "A falta de misericórdia é interpretada como sinal de uma própria queda iminente.", testemunha,
    referenciasBiblicas: [{ passagem: "pietà delle cadute degli altri", referencia: "Mateus 7,1-5; Lucas 6,36-38, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 14 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 14.", "`Dover cadere` foi mantido como futuro impessoal (‘se cairá’), sem escolher um pecado específico."]
  },
  {
    id: "maxima-088", numero: 88, dia: 28, mes: "março",
    original: { idioma: "italiano", texto: "Non c'è maggior pericolo in materia di purezza, quanto il non temere il pericolo: quando qualcuno non dubita e non teme, allora egli è veramente in pericolo.", passagensLatinas: null },
    portugues: { texto: "Não há perigo maior em matéria de pureza que não temer o perigo; quando alguém não duvida nem teme, então está verdadeiramente em perigo.", tradutor },
    tema: "temor prudente", temasSecundarios: ["pureza", "discernimento", "vigilância"], contexto: "A ausência de temor e dúvida é apresentada como falsa segurança no campo da pureza.", testemunha,
    referenciasBiblicas: [{ passagem: "non temere il pericolo", referencia: "1Coríntios 10,12; Mateus 26,41, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 14 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 14.", "`Dubita` foi traduzido por ‘duvida’, com sentido de suspeita prudencial e não de crise de fé."]
  },
  {
    id: "maxima-089", numero: 89, dia: 29, mes: "março",
    original: { idioma: "italiano", texto: "Il demonio per far cadere, si serve ordinariamente della parte più debole, che è la donna.", passagensLatinas: null },
    portugues: { texto: "Para fazer alguém cair, o demônio costuma servir-se da parte mais fraca, que o texto identifica como a mulher.", tradutor },
    tema: "testemunho histórico sobre a tentação", temasSecundarios: ["demônio", "pureza", "contexto histórico"], contexto: "A máxima registra uma formulação histórica sobre gênero e tentação, que deve ser lida no contexto da compilação e não como antropologia normativa do corpus contemporâneo.", testemunha,
    referenciasBiblicas: [{ passagem: "parte più debole, che è la donna", referencia: "Gênesis 3,1-6; 1Timóteo 2,14, como possível matriz tradicional" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 14 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 14.", "A tradução não suaviza nem transforma o conteúdo do testemunho, mas a nota contextual impede que a formulação seja apresentada como afirmação antropológica contemporânea do projeto.", "`La donna` foi traduzido com o artigo definido, preservando a generalização do impresso e registrando-a como dado histórico problemático."]
  },
  {
    id: "maxima-090", numero: 90, dia: 30, mes: "março",
    original: { idioma: "italiano", texto: "Per ben cominciare e finire meglio, è necessario partecipare alla santa Messa ogni mattina, quando non ci siano altri motivi che lo impediscano.", passagensLatinas: null },
    portugues: { texto: "Para começar bem e terminar ainda melhor, é necessário participar da Santa Missa todas as manhãs, quando não houver outros motivos que o impeçam.", tradutor },
    tema: "Missa diária", temasSecundarios: ["Eucaristia", "perseverança", "rotina espiritual"], contexto: "A participação matinal na Missa é proposta como eixo de início e conclusão virtuosos do dia, com ressalva para impedimentos reais.", testemunha,
    referenciasBiblicas: [{ passagem: "partecipare alla santa Messa", referencia: "Atos 2,42; 1Coríntios 11,23-26, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 14 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 14.", "A cláusula `quando non ci siano altri motivi` foi preservada para não transformar a frase em obrigação sem exceções."]
  },
  {
    id: "maxima-091", numero: 91, dia: 31, mes: "março",
    original: { idioma: "italiano", texto: "È ottimo rimedio per conservare la castità, rivelare quanto prima con sincerità al confessore tutti i pensieri, e non tenere dentro di sé nessuna cosa segreta.", passagensLatinas: null },
    portugues: { texto: "É um excelente remédio para conservar a castidade revelar quanto antes, com sinceridade, todos os pensamentos ao confessor e não guardar dentro de si coisa alguma em segredo.", tradutor },
    tema: "sinceridade com o confessor", temasSecundarios: ["castidade", "Confissão", "discernimento"], contexto: "A abertura sincera ao confessor é apresentada como meio de preservar a castidade e impedir que pensamentos ocultos se consolidem.", testemunha,
    referenciasBiblicas: [{ passagem: "rivelare ... al confessore tutti i pensieri", referencia: "Tiago 5,16; João 20,22-23, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 14 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 14.", "`Pensieri` foi traduzido por ‘pensamentos’, sem restringir o termo a tentações sexuais específicas.", "A máxima é mantida como formulação histórica de direção espiritual sacramental, sem convertê-la em aconselhamento clínico contemporâneo."]
  },
  {
    id: "maxima-092", numero: 92, dia: 1, mes: "abril",
    original: { idioma: "italiano", texto: "Per acquistare e conservare la virtù della castità, c'è bisogno di un confessore buono ed esperto.", passagensLatinas: null },
    portugues: { texto: "Para adquirir e conservar a virtude da castidade, é preciso ter um confessor bom e experiente.", tradutor },
    tema: "confessor e castidade", temasSecundarios: ["Confissão", "discernimento", "pureza"], contexto: "A experiência e a bondade do confessor são apresentadas como auxílio para a castidade.", testemunha,
    referenciasBiblicas: [{ passagem: "confessore buono ed esperto", referencia: "Tiago 5,16; Provérbios 11,14, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 15 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 15.", "`Buono ed esperto` foi traduzido por ‘bom e experiente’, mantendo as duas qualidades distintas."]
  },
  {
    id: "maxima-093", numero: 93, dia: 2, mes: "abril",
    original: { idioma: "italiano", texto: "Chi desidera i primi posti, stia negli ultimi.", passagensLatinas: null },
    portugues: { texto: "Quem deseja os primeiros lugares permaneça nos últimos.", tradutor },
    tema: "humildade", temasSecundarios: ["honra", "desapego", "serviço"], contexto: "O desejo de precedência é contraposto à escolha voluntária do último lugar.", testemunha,
    referenciasBiblicas: [{ passagem: "primi posti ... ultimi", referencia: "Lucas 14,7-11; Mateus 23,12, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 15 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 15.", "`Posti` foi traduzido por ‘lugares’, preservando a linguagem social da máxima."]
  },
  {
    id: "maxima-094", numero: 94, dia: 3, mes: "abril",
    original: { idioma: "italiano", texto: "Non appena l'uomo sente la tentazione, ricorra al Signore, recitando con devozione quella preghiera giaculatoria tanto stimata da tanti Padri dell'Eremo: «O Dio, vieni a salvarmi. Signore vieni presto in mio aiuto»; oppure quel versetto: «Crea in me, o Dio, un cuore puro» (Sal 51, 12).", passagensLatinas: null },
    portugues: { texto: "Assim que a pessoa sentir a tentação, recorra ao Senhor, rezando com devoção aquela jaculatória tão estimada por muitos Padres do Deserto: “Ó Deus, vinde salvar-me; Senhor, vinde depressa em meu auxílio”; ou então aquele versículo: “Criai em mim, ó Deus, um coração puro” (Sl 51,12).", tradutor },
    tema: "jaculatória contra a tentação", temasSecundarios: ["oração", "Salmo 51", "Padres do Deserto"], contexto: "A invocação breve e imediata é recomendada como resposta à tentação.", testemunha,
    referenciasBiblicas: [{ passagem: "O Dio, vieni a salvarmi. Signore vieni presto in mio aiuto", referencia: "Salmo 69(70),2", }, { passagem: "Crea in me, o Dio, un cuore puro", referencia: "Salmo 50(51),12" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 15 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 15.", "As duas fórmulas foram mantidas como orações citadas; as referências bíblicas foram separadas do texto principal.", "`Padri dell’Eremo` foi traduzido por ‘Padres do Deserto’, designação histórica corrente."]
  },
  {
    id: "maxima-095", numero: 95, dia: 4, mes: "abril",
    original: { idioma: "italiano", texto: "Quando vengono alla mente pensieri sensuali, si provveda di impiegare la stessa mente, occupandola subito in qualche altra cosa.", passagensLatinas: null },
    portugues: { texto: "Quando vierem à mente pensamentos sensuais, procure-se ocupar imediatamente a própria mente com alguma outra coisa.", tradutor },
    tema: "desvio prudente da tentação", temasSecundarios: ["pureza", "atenção", "vigilância"], contexto: "A máxima recomenda deslocar prontamente a atenção quando surgem pensamentos sensuais.", testemunha,
    referenciasBiblicas: [{ passagem: "occupandola subito in qualche altra cosa", referencia: "2Timóteo 2,22; Filipenses 4,8, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 15 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 15.", "`Pensieri sensuali` foi traduzido por ‘pensamentos sensuais’, sem especificar conteúdos não presentes no texto."]
  },
  {
    id: "maxima-096", numero: 96, dia: 5, mes: "abril",
    original: { idioma: "italiano", texto: "Non si dica: grandi cose fanno i Santi; ma grandi cose fa Dio nei suoi Santi.", passagensLatinas: null },
    portugues: { texto: "Não se diga: “Os Santos fazem grandes coisas”; mas: “Deus faz grandes coisas nos seus Santos”.", tradutor },
    tema: "graça nos santos", temasSecundarios: ["humildade", "santidade", "providência"], contexto: "A máxima desloca o mérito aparente dos santos para a ação de Deus neles.", testemunha,
    referenciasBiblicas: [{ passagem: "grandi cose fa Dio nei suoi Santi", referencia: "Salmo 67(68),36; 2Coríntios 3,5, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 15 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 15.", "O contraste entre as duas frases foi preservado pela repetição de ‘grandes coisas fazem/faz’. "]
  },
  {
    id: "maxima-097", numero: 97, dia: 6, mes: "abril",
    original: { idioma: "italiano", texto: "Nella guerra della sensualità vincono i “poltroni”, vale a dire, quelli che fuggono le occasioni.", passagensLatinas: null },
    portugues: { texto: "Na guerra contra a sensualidade vencem os “preguiçosos”, isto é, aqueles que fogem das ocasiões.", tradutor },
    tema: "fuga das ocasiões", temasSecundarios: ["castidade", "prudência", "tentação"], contexto: "A ironia de chamar de ‘preguiçosos’ os que fogem das ocasiões valoriza a prudência concreta.", testemunha,
    referenciasBiblicas: [{ passagem: "fuggono le occasioni", referencia: "2Timóteo 2,22; Provérbios 4,14-15, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 15 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 15.", "`Poltroni` foi traduzido por ‘preguiçosos’ entre aspas, porque a palavra é usada ironicamente para os prudentes que evitam o perigo."]
  },
  {
    id: "maxima-098", numero: 98, dia: 7, mes: "abril",
    original: { idioma: "italiano", texto: "Non si deve tanto dubitare di qualcuno, che abbia le tentazioni della carne e che vi resista fuggendo le occasioni; quanto di un altro, che non sia tentato, ma non fugga le occasioni.", passagensLatinas: null },
    portugues: { texto: "Não se deve desconfiar tanto de alguém que tenha tentações da carne e lhes resista fugindo das ocasiões quanto de outra pessoa que não seja tentada, mas não fuja das ocasiões.", tradutor },
    tema: "prudência diante da tentação", temasSecundarios: ["castidade", "discernimento", "humildade"], contexto: "A resistência prudente é considerada mais segura que a autoconfiança de quem não reconhece ou evita as ocasiões.", testemunha,
    referenciasBiblicas: [{ passagem: "resista fuggendo le occasioni", referencia: "1Coríntios 10,12-13; Mateus 26,41, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 15 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 15.", "A construção comparativa foi mantida sem afirmar que toda tentação seja inevitável ou que toda ausência de tentação seja fingida."]
  },
  {
    id: "maxima-099", numero: 99, dia: 8, mes: "abril",
    original: { idioma: "italiano", texto: "Quando una persona si mette nell'occasione del peccato, dicendo: «Non cadrò, non lo commetterò», è segno quasi evidente che ci cadrà con maggior danno per la sua anima.", passagensLatinas: null },
    portugues: { texto: "Quando alguém se coloca na ocasião do pecado, dizendo: “Não cairei, não o cometerei”, é sinal quase evidente de que cairá nela, com maior dano para a sua alma.", tradutor },
    tema: "presunção diante da ocasião", temasSecundarios: ["pecado", "prudência", "alma"], contexto: "A presunção de permanecer firme dentro da ocasião é apresentada como sinal de risco aumentado.", testemunha,
    referenciasBiblicas: [{ passagem: "Non cadrò, non lo commetterò", referencia: "1Coríntios 10,12; Provérbios 16,18, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 15 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 15.", "`Ci cadrà` retoma `nell’occasione del peccato` e foi traduzido por ‘cairá nela’."]
  },
  {
    id: "maxima-100", numero: 100, dia: 9, mes: "abril",
    original: { idioma: "italiano", texto: "È cosa utilissima dire spesso e con il cuore: «Signore, non vi fidate di me, perché cadrò di certo, se non mi aiutate»; oppure: «Signore mio, da me non aspettare altro che male».", passagensLatinas: null },
    portugues: { texto: "É muito útil dizer com frequência e de coração: “Senhor, não confieis em mim, porque certamente cairei se não me ajudardes”; ou então: “Meu Senhor, não espereis de mim outra coisa senão o mal”.", tradutor },
    tema: "oração de desconfiança de si", temasSecundarios: ["humildade", "auxílio divino", "tentação"], contexto: "A oração formulada em termos de desconfiança de si exprime dependência radical do auxílio divino.", testemunha,
    referenciasBiblicas: [{ passagem: "se non mi aiutate", referencia: "Salmo 120(121),1-2; João 15,5, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 15 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 15.", "A segunda pessoa plural de respeito foi mantida em ‘não confieis’ e ‘não espereis’, conforme o registro de oração do original."]
  },
  {
    id: "maxima-101", numero: 101, dia: 10, mes: "abril",
    original: { idioma: "italiano", texto: "Nella tentazione non bisogna dire «farei», «direi», che è una specie di presunzione di sé stessi; ma con umiltà: «So quel che dovrei fare, ma non so quel che farei».", passagensLatinas: null },
    portugues: { texto: "Na tentação, não se deve dizer “eu faria”, “eu diria”, pois isso é uma espécie de presunção de si mesmo; mas, com humildade: “Sei o que deveria fazer, mas não sei o que faria”.", tradutor },
    tema: "humildade no discernimento", temasSecundarios: ["tentação", "autoconhecimento", "prudência"], contexto: "A máxima contrapõe a presunção verbal de autodomínio ao reconhecimento humilde da própria fragilidade.", testemunha,
    referenciasBiblicas: [{ passagem: "non so quel che farei", referencia: "Romanos 7,18-19; 1Coríntios 10,12, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 15 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 15.", "Os verbos entre aspas foram traduzidos na primeira pessoa para conservar a fala direta e o contraste entre `dovrei` e `farei`."]
  },
  {
    id: "maxima-102", numero: 102, dia: 11, mes: "abril",
    original: { idioma: "italiano", texto: "La puzza del peccato contro la purezza, davanti a Dio e davanti agli Angeli è così grande, che non esiste nel mondo fetore che la uguagli.", passagensLatinas: null },
    portugues: { texto: "O mau cheiro do pecado contra a pureza, diante de Deus e dos Anjos, é tão grande que não existe no mundo fedor que se lhe iguale.", tradutor },
    tema: "gravidade do pecado contra a pureza", temasSecundarios: ["castidade", "anjos", "pecado"], contexto: "A imagem olfativa extrema comunica a gravidade moral atribuída ao pecado contra a pureza.", testemunha,
    referenciasBiblicas: [{ passagem: "davanti a Dio e davanti agli Angeli", referencia: "Efésios 5,3-5; Apocalipse 8,3-4, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 15 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 15.", "`Puzza` e `fetore` foram mantidos no campo semântico do odor; não foram suavizados como simples ‘problema moral’."]
  },
  {
    id: "maxima-103", numero: 103, dia: 12, mes: "abril",
    original: { idioma: "italiano", texto: "Non bisogna fidarsi di noi stessi, ma bisogna che ci consigliamo con il Padre spirituale, e ci raccomandiamo alle preghiere di tutti.", passagensLatinas: null },
    portugues: { texto: "Não devemos confiar em nós mesmos; devemos aconselhar-nos com o Padre espiritual e recomendar-nos às orações de todos.", tradutor },
    tema: "direção espiritual", temasSecundarios: ["humildade", "confessor", "oração comunitária"], contexto: "A direção espiritual e a oração comunitária aparecem como antídotos para a autossuficiência.", testemunha,
    referenciasBiblicas: [{ passagem: "consigliamo con il Padre spirituale", referencia: "Provérbios 11,14; Hebreus 13,17, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 15 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 15.", "`Padre spirituale` foi traduzido por ‘Padre espiritual’, preservando o título eclesial."]
  },
  {
    id: "maxima-104", numero: 104, dia: 13, mes: "abril",
    original: { idioma: "italiano", texto: "Conviene guardarsi dalle bugie, come dalla peste.", passagensLatinas: null },
    portugues: { texto: "Convém guardar-se das mentiras como da peste.", tradutor },
    tema: "verdade", temasSecundarios: ["sinceridade", "prudência", "pecado"], contexto: "A mentira é comparada à peste para destacar seu caráter contagioso e destrutivo.", testemunha,
    referenciasBiblicas: [{ passagem: "guardarsi dalle bugie", referencia: "Efésios 4,25; João 8,44, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 15 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 15.", "`Peste` foi mantido como imagem, sem substituição por ‘doença’."]
  },
  {
    id: "maxima-105", numero: 105, dia: 14, mes: "abril",
    original: { idioma: "italiano", texto: "Nel confessarsi una persona si accusi prima dei peccati più gravi, e di cui ha maggiore vergogna; perché così si viene a confondere di più il demonio, e si ricava maggior frutto dalla confessione.", passagensLatinas: null },
    portugues: { texto: "Ao confessar-se, a pessoa acuse-se primeiro dos pecados mais graves e daqueles de que sente maior vergonha; assim se confunde mais o demônio e se tira maior fruto da Confissão.", tradutor },
    tema: "sinceridade na Confissão", temasSecundarios: ["sacramento", "vergonha", "demônio"], contexto: "A acusação franca dos pecados mais graves é apresentada como meio de vencer a vergonha e obter fruto sacramental.", testemunha,
    referenciasBiblicas: [{ passagem: "confessione", referencia: "João 20,22-23; Tiago 5,16, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 15 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 15.", "`Confessione` foi capitalizada em português por designar o Sacramento.", "`Confondere il demonio` foi traduzido por ‘confundir o demônio’, preservando a imagem de combate espiritual."]
  },
  {
    id: "maxima-106", numero: 106, dia: 15, mes: "abril",
    original: { idioma: "italiano", texto: "Per ottenere l'umiltà, è ottima cosa la confessione pura e frequente.", passagensLatinas: null },
    portugues: { texto: "Para obter a humildade, é excelente coisa a Confissão pura e frequente.", tradutor },
    tema: "Confissão e humildade", temasSecundarios: ["sacramento", "sinceridade", "conversão"], contexto: "A Confissão sincera e frequente é indicada como prática formadora da humildade.", testemunha,
    referenciasBiblicas: [{ passagem: "confessione pura e frequente", referencia: "Salmo 31(32),5; 1João 1,9, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 15 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 15.", "`Pura` foi traduzido por ‘pura’, sem trocar por ‘perfeita’, pois o foco é a sinceridade da acusação."]
  },
  {
    id: "maxima-107", numero: 107, dia: 16, mes: "abril",
    original: { idioma: "italiano", texto: "Per disfarsi delle cattive abitudini, è di grande giovamento non rimandare la confessione dopo la caduta, e continuare a confessarsi dallo stesso confessore.", passagensLatinas: null },
    portugues: { texto: "Para desfazer-se dos maus hábitos, é de grande proveito não adiar a Confissão depois da queda e continuar a confessar-se com o mesmo confessor.", tradutor },
    tema: "perseverança na Confissão", temasSecundarios: ["hábitos", "direção espiritual", "queda"], contexto: "A prontidão depois da queda e a continuidade do confessor são apresentadas como auxílio contra hábitos ruins.", testemunha,
    referenciasBiblicas: [{ passagem: "non rimandare la confessione dopo la caduta", referencia: "1João 1,9; Hebreus 4,16, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 15 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 15.", "`Dallo stesso confessore` foi traduzido por ‘com o mesmo confessor’, preservando a continuidade da direção espiritual sem formulá-la como regra absoluta."]
  },
  {
    id: "maxima-108", numero: 108, dia: 17, mes: "abril",
    original: { idioma: "italiano", texto: "Quando si visitano i moribondi, non gli si dicano molte parole, ma piuttosto si aiutino con la preghiera.", passagensLatinas: null },
    portugues: { texto: "Quando se visitam os moribundos, não se lhes digam muitas palavras; ajudem-se antes por meio da oração.", tradutor },
    tema: "assistência aos moribundos", temasSecundarios: ["oração", "misericórdia", "morte"], contexto: "A presença junto aos moribundos deve privilegiar a oração em vez de muitas palavras.", testemunha,
    referenciasBiblicas: [{ passagem: "aiutino con la preghiera", referencia: "Tiago 5,14-15; Romanos 12,12, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 15 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 15.", "`Moribondi` foi traduzido por ‘moribundos’, sem substituir por ‘doentes’ e perder a referência à proximidade da morte."]
  },
  {
    id: "maxima-109", numero: 109, dia: 18, mes: "abril",
    original: { idioma: "italiano", texto: "L'infermo faccia dono a Dio della sua volontà; e se succedesse di dover sostenere il male per lungo tempo, si sottometta al suo volere.", passagensLatinas: null },
    portugues: { texto: "O enfermo ofereça a Deus a própria vontade; e, se tiver de suportar o sofrimento por muito tempo, submeta-se à vontade dele.", tradutor },
    tema: "doença e abandono", temasSecundarios: ["sofrimento", "vontade de Deus", "paciência"], contexto: "A enfermidade é apresentada como ocasião de oferecer a vontade a Deus e perseverar na submissão.", testemunha,
    referenciasBiblicas: [{ passagem: "faccia dono a Dio della sua volontà", referencia: "Lucas 22,42; Jó 1,21, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 15 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 15.", "`Il male` foi traduzido por ‘o sofrimento’, pois o contexto é a doença prolongada, não o mal moral."]
  },
  {
    id: "maxima-110", numero: 110, dia: 19, mes: "abril",
    original: { idioma: "italiano", texto: "L'infermo non tema quando è tentato di diffidenza; perché, se ha peccato, Cristo ha patito e ha pagato per lui.", passagensLatinas: null },
    portugues: { texto: "O enfermo não tema quando for tentado pela desconfiança, pois, se pecou, Cristo sofreu e pagou por ele.", tradutor },
    tema: "Cristo e a confiança do enfermo", temasSecundarios: ["redenção", "doença", "fé"], contexto: "A tentação de desconfiar durante a doença é respondida pela lembrança do sofrimento redentor de Cristo.", testemunha,
    referenciasBiblicas: [{ passagem: "Cristo ha patito e ha pagato per lui", referencia: "Isaías 53,4-5; 1Pedro 2,24, como síntese" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 15 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 15.", "`Ha pagato per lui` foi mantido como linguagem soteriológica tradicional, sem substituição por uma paráfrase econômica."]
  },
  {
    id: "maxima-111", numero: 111, dia: 20, mes: "abril",
    original: { idioma: "italiano", texto: "L'infermo entri nel costato di Gesù e nelle sue santissime piaghe; e non abbia paura, ma combatta coraggiosamente, perché sarà vincitore.", passagensLatinas: null },
    portugues: { texto: "O enfermo entre no costado de Jesus e nas suas santíssimas chagas; não tenha medo, mas combata corajosamente, porque será vencedor.", tradutor },
    tema: "chagas de Cristo", temasSecundarios: ["doença", "Paixão", "coragem"], contexto: "A imagem de refugiar-se no costado e nas chagas de Jesus sustenta a coragem do enfermo.", testemunha,
    referenciasBiblicas: [{ passagem: "costato di Gesù e sue santissime piaghe", referencia: "João 19,34-37; Isaías 53,5, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 16 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 16.", "`Costato` foi traduzido por ‘costado’, termo tradicional para o lado aberto de Cristo, e não por ‘peito’ genérico."]
  },
  {
    id: "maxima-112", numero: 112, dia: 21, mes: "abril",
    original: { idioma: "italiano", texto: "Perseverare in una santa allegria è la vera via per avere profitto nelle sante virtù.", passagensLatinas: null },
    portugues: { texto: "Perseverar numa santa alegria é o verdadeiro caminho para progredir nas santas virtudes.", tradutor },
    tema: "alegria e virtude", temasSecundarios: ["perseverança", "formação", "consolo"], contexto: "A alegria perseverante é apresentada como ambiente favorável ao crescimento nas virtudes.", testemunha,
    referenciasBiblicas: [{ passagem: "santa allegria", referencia: "Filipenses 4,4; Neemias 8,10, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 16 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 16.", "`Profitto` foi traduzido por ‘progredir’, e não por ‘lucro’, para respeitar o campo espiritual."]
  },
  {
    id: "maxima-113", numero: 113, dia: 22, mes: "abril",
    original: { idioma: "italiano", texto: "Sono più facili da guidare, nella via dello spirito, le persone allegre che non le malinconiche.", passagensLatinas: null },
    portugues: { texto: "No caminho do espírito, é mais fácil guiar as pessoas alegres que as melancólicas.", tradutor },
    tema: "alegria na direção espiritual", temasSecundarios: ["formação", "temperamento", "discernimento"], contexto: "A disposição alegre é considerada mais receptiva à orientação espiritual que a melancolia.", testemunha,
    referenciasBiblicas: [{ passagem: "persone allegre ... malinconiche", referencia: "Provérbios 17,22; Filipenses 4,4, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 16 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 16.", "A tradução conserva a comparação sem apresentar a melancolia como culpa moral ou diagnóstico clínico."]
  },
  {
    id: "maxima-114", numero: 114, dia: 23, mes: "abril",
    original: { idioma: "italiano", texto: "Quelli che vogliono farsi religiosi, prima si mortifichino per molto tempo e mortifichino la loro volontà in quelle cose verso le quali hanno maggiore ripugnanza.", passagensLatinas: null },
    portugues: { texto: "Aqueles que querem tornar-se religiosos primeiro se mortifiquem por muito tempo e mortifiquem a própria vontade naquilo a que sentem maior repugnância.", tradutor },
    tema: "discernimento da vida religiosa", temasSecundarios: ["mortificação", "vocação", "vontade"], contexto: "A intenção de entrar na vida religiosa deve ser provada por longa disciplina e renúncia da própria vontade.", testemunha,
    referenciasBiblicas: [{ passagem: "mortifichino la loro volontà", referencia: "Lucas 9,23; Gálatas 5,24, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 16 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 16.", "`Farsi religiosi` foi traduzido por ‘tornar-se religiosos’, sem determinar uma ordem ou instituto que o texto não nomeia."]
  },
  {
    id: "maxima-115", numero: 115, dia: 24, mes: "abril",
    original: { idioma: "italiano", texto: "L'eccessiva tristezza non ha per origine altro che la superbia.", passagensLatinas: null },
    portugues: { texto: "A tristeza excessiva não tem outra origem senão a soberba.", tradutor },
    tema: "tristeza e soberba", temasSecundarios: ["humildade", "alegria", "discernimento"], contexto: "A máxima interpreta a tristeza excessiva como possível forma de centralidade do próprio eu.", testemunha,
    referenciasBiblicas: [{ passagem: "tristezza ... superbia", referencia: "2Coríntios 7,10; Provérbios 16,18, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 16 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 16.", "A frase foi traduzida sem ampliar `tristezza` para qualquer sofrimento psíquico; conserva-se o escopo moral do original."]
  },
  {
    id: "maxima-116", numero: 116, dia: 25, mes: "abril",
    original: { idioma: "italiano", texto: "Carità e allegria, ovvero, carità e umiltà.", passagensLatinas: null },
    portugues: { texto: "Caridade e alegria; ou, em outras palavras, caridade e humildade.", tradutor },
    tema: "caridade, alegria e humildade", temasSecundarios: ["virtude", "vida comunitária", "afeto"], contexto: "A máxima aproxima a alegria da humildade como expressões complementares da caridade.", testemunha,
    referenciasBiblicas: [{ passagem: "Carità e allegria ... carità e umiltà", referencia: "1Coríntios 13,4-7; Filipenses 2,3-4, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 16 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 16.", "`Ovvero` foi traduzido por ‘em outras palavras’, explicitando a equivalência breve do original."]
  },
  {
    id: "maxima-117", numero: 117, dia: 26, mes: "abril",
    original: { idioma: "italiano", texto: "Bisogna sì essere allegri, ma non per questo cadere nello spirito da buffone.", passagensLatinas: null },
    portugues: { texto: "É preciso, sim, ser alegre, mas não por isso cair no espírito de palhaço.", tradutor },
    tema: "alegria sem frivolidade", temasSecundarios: ["moderação", "caráter", "vida comunitária"], contexto: "A alegria é recomendada junto com a advertência contra transformar o convívio em farsa.", testemunha,
    referenciasBiblicas: [{ passagem: "non ... spirito da buffone", referencia: "Efésios 5,4; Provérbios 14,13, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 16 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 16.", "`Buffone` foi traduzido por ‘palhaço’ em sentido figurado, preservando a censura à bufonaria e não a uma profissão."]
  },
  {
    id: "maxima-118", numero: 118, dia: 27, mes: "abril",
    original: { idioma: "italiano", texto: "Le buffonate rendono la persona incapace di ricevere da Dio uno spirito più grande.", passagensLatinas: null },
    portugues: { texto: "As palhaçadas tornam a pessoa incapaz de receber de Deus um espírito maior.", tradutor },
    tema: "seriedade espiritual", temasSecundarios: ["discrição", "graça", "moderação"], contexto: "A bufonaria é apresentada como disposição que fecha a pessoa à ação de uma graça mais elevada.", testemunha,
    referenciasBiblicas: [{ passagem: "ricevere da Dio uno spirito più grande", referencia: "1Reis 3,9-12; Efésios 3,16-19, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 16 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 16.", "`Buffonate` mantém a mesma tradução de `buffone` da máxima anterior, para preservar a sequência lexical."]
  },
  {
    id: "maxima-119", numero: 119, dia: 28, mes: "abril",
    original: { idioma: "italiano", texto: "Le buffonate inoltre eliminano quel poco che si è acquistato.", passagensLatinas: null },
    portugues: { texto: "Além disso, as palhaçadas eliminam o pouco que se adquiriu.", tradutor },
    tema: "perda do progresso espiritual", temasSecundarios: ["disciplina", "seriedade", "perseverança"], contexto: "A máxima continua a advertência anterior: a bufonaria pode desfazer até mesmo um pequeno progresso espiritual.", testemunha,
    referenciasBiblicas: [{ passagem: "eliminano quel poco che si è acquistato", referencia: "Gálatas 3,3; Apocalipse 2,4-5, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 16 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 16.", "`Quel poco` foi traduzido por ‘o pouco’, sem quantificar o progresso espiritual."]
  },
  {
    id: "maxima-120", numero: 120, dia: 29, mes: "abril",
    original: { idioma: "italiano", texto: "A tavola, soprattutto laddove si viva insieme, si deve mangiare ogni sorta di cibo, e non dire: «Questo mi piace, e questo non mi piace».", passagensLatinas: null },
    portugues: { texto: "À mesa, sobretudo onde se vive em comunidade, deve-se comer todo tipo de alimento e não dizer: “Gosto disto, não gosto daquilo”.", tradutor },
    tema: "sobriedade na vida comum", temasSecundarios: ["comunidade", "mortificação", "refeitório"], contexto: "A refeição comunitária é apresentada como ocasião de mortificação da preferência pessoal e de convivência.", testemunha,
    referenciasBiblicas: [{ passagem: "mangiare ogni sorta di cibo", referencia: "1Coríntios 10,25-27; Filipenses 4,11-12, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 16 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 16.", "A fala direta foi adaptada para o português corrente, mantendo a oposição entre gostar e não gostar.", "A máxima é lida no contexto de vida comum e mortificação, não como instrução médica sobre dietas."]
  },
  {
    id: "maxima-121", numero: 121, dia: 30, mes: "abril",
    original: { idioma: "italiano", texto: "Non si può esprimere con un ragionamento umano la bellezza di un'anima che muore in grazia.", passagensLatinas: null },
    portugues: { texto: "Não se pode expressar por um raciocínio humano a formosura de uma alma que morre na graça.", tradutor },
    tema: "graça no momento da morte", temasSecundarios: ["alma", "morte cristã", "graça"], contexto: "A morte na graça é apresentada como realidade espiritual cuja formosura ultrapassa a expressão racional humana.", testemunha,
    referenciasBiblicas: [{ passagem: "anima che muore in grazia", referencia: "Apocalipse 14,13; Sabedoria 3,1-9, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 16 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 16.", "`Bellezza` foi traduzido por ‘formosura’ para conservar o sentido de esplendor espiritual e evitar o termo editorialmente proibido no corpus."]
  },
  {
    id: "maxima-122", numero: 122, dia: 1, mes: "maio",
    original: { idioma: "italiano", texto: "Chi sente grande difficoltà nel perdonare le offese, guardi il Crocifisso e pensi che egli ha sparso tutto il suo sangue per amor suo, e che non solo perdonò i suoi nemici, ma pregò il Padre Eterno che li perdonasse.", passagensLatinas: null },
    portugues: { texto: "Quem sente grande dificuldade para perdoar as ofensas olhe para o Crucificado e pense que ele derramou todo o seu sangue por amor dessa pessoa e que não somente perdoou os seus inimigos, mas pediu ao Pai eterno que os perdoasse.", tradutor },
    tema: "perdão contemplando o Crucificado", temasSecundarios: ["misericórdia", "Paixão", "caridade"], contexto: "A contemplação do Crucificado é proposta como remédio para a dificuldade de perdoar.", testemunha,
    referenciasBiblicas: [{ passagem: "perdoou os seus inimigos e pediu ao Pai que os perdoasse", referencia: "Lucas 23,34; Mateus 5,44" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 16 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente nas páginas PDF 16–17.", "`Per amor suo` foi traduzido como ‘por amor dessa pessoa’, retomando o sujeito que tem dificuldade de perdoar."]
  },
  {
    id: "maxima-123", numero: 123, dia: 2, mes: "maio",
    original: { idioma: "italiano", texto: "Chi non riesce a perdonare, capisca inoltre che, dicendo ogni giorno il Padre nostro, invece di chiedere perdono dei suoi peccati, chiede il castigo.", passagensLatinas: null },
    portugues: { texto: "Quem não consegue perdoar compreenda também que, ao dizer todos os dias o Pai-Nosso, em vez de pedir perdão dos próprios pecados, pede o castigo.", tradutor },
    tema: "Pai-Nosso e perdão", temasSecundarios: ["misericórdia", "oração", "coerência"], contexto: "A máxima relaciona o perdão concedido ao próximo com o pedido de perdão formulado no Pai-Nosso.", testemunha,
    referenciasBiblicas: [{ passagem: "Padre nostro ... perdono", referencia: "Mateus 6,12.14-15; Lucas 11,4" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 16 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 16.", "`Chiede il castigo` foi mantido como consequência retórica da oração, não como doutrina jurídica isolada."]
  },
  {
    id: "maxima-124", numero: 124, dia: 3, mes: "maio",
    original: { idioma: "italiano", texto: "Gli uomini si fabbricano perlopiù la croce da sé stessi.", passagensLatinas: null },
    portugues: { texto: "As pessoas, na maioria das vezes, fabricam a própria cruz.", tradutor },
    tema: "cruz produzida pelo próprio comportamento", temasSecundarios: ["responsabilidade", "sofrimento", "discernimento"], contexto: "A máxima distingue o sofrimento criado por escolhas humanas da cruz recebida na fidelidade.", testemunha,
    referenciasBiblicas: [{ passagem: "la croce da sé stessi", referencia: "Gálatas 6,7-8; Lucas 9,23, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 16 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 16.", "`Gli uomini` foi traduzido por ‘as pessoas’, mantendo o valor universal do enunciado."]
  },
  {
    id: "maxima-125", numero: 125, dia: 4, mes: "maio",
    original: { idioma: "italiano", texto: "Concentriamoci tanto nel divino amore ed entriamo tanto dentro la piaga del costato, nella fonte viva della sapienza di Dio fatto uomo, che ci anneghiamo noi stessi e il proprio amore, e non ritroviamo più la strada per poterne uscir fuori.", passagensLatinas: null },
    portugues: { texto: "Concentremo-nos tanto no amor divino e entremos tanto na chaga do costado, na fonte viva da sabedoria de Deus feito homem, que nos afoguemos a nós mesmos e ao próprio amor, sem mais encontrar o caminho para sair dele.", tradutor },
    tema: "imersão no amor divino", temasSecundarios: ["costado de Cristo", "sabedoria", "desapego"], contexto: "A imagem de afogar o próprio amor na chaga de Cristo exprime o abandono radical do egoísmo.", testemunha,
    referenciasBiblicas: [{ passagem: "piaga del costato ... sapienza di Dio fatto uomo", referencia: "João 19,34; 1Coríntios 1,24; João 1,14, como síntese" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 16 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 16.", "`Proprio amore` foi traduzido por ‘próprio amor’, entendido no contexto como amor autocentrado, não como amor legítimo ao próximo."]
  },
  {
    id: "maxima-126", numero: 126, dia: 5, mes: "maio",
    original: { idioma: "italiano", texto: "Se non si ottiene subito quello che si chiede, non per questo si deve smettere di pregare e di invocare.", passagensLatinas: null },
    portugues: { texto: "Se não se obtém imediatamente o que se pede, nem por isso se deve deixar de rezar e invocar.", tradutor },
    tema: "perseverança na súplica", temasSecundarios: ["oração", "paciência", "fé"], contexto: "A demora na resposta não deve interromper a oração perseverante.", testemunha,
    referenciasBiblicas: [{ passagem: "non si deve smettere di pregare", referencia: "Lucas 18,1-8; Romanos 12,12, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 16 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 16.", "`Invocare` foi mantido como ‘invocar’, preservando o caráter insistente da súplica."]
  },
  {
    id: "maxima-127", numero: 127, dia: 6, mes: "maio",
    original: { idioma: "italiano", texto: "Chi non può prolungare molto l'orazione, innalzi spesso la mente a Dio con preghiere giaculatorie.", passagensLatinas: null },
    portugues: { texto: "Quem não pode prolongar muito a oração eleve frequentemente a mente a Deus com orações jaculatórias.", tradutor },
    tema: "orações jaculatórias", temasSecundarios: ["oração", "brevidade", "atenção a Deus"], contexto: "A oração breve e frequente é oferecida como alternativa para quem não consegue longos períodos de oração.", testemunha,
    referenciasBiblicas: [{ passagem: "innalzi spesso la mente a Dio", referencia: "1Tessalonicenses 5,17; Colossenses 3,2, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 16 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 16.", "`Preghiere giaculatorie` foi traduzido por ‘orações jaculatórias’, termo técnico da tradição católica."]
  },
  {
    id: "maxima-128", numero: 128, dia: 7, mes: "maio",
    original: { idioma: "italiano", texto: "Bisogna ricordarsi spesso di quel detto di Cristo: «Non chi comincerà, ma chi persevererà sino alla fine, sarà salvato» (cfr. Mt 10, 22).", passagensLatinas: null },
    portugues: { texto: "É preciso lembrar-se frequentemente daquela palavra de Cristo: “Não quem começar, mas quem perseverar até o fim será salvo” (cf. Mt 10,22).", tradutor },
    tema: "perseverança até o fim", temasSecundarios: ["salvação", "fidelidade", "Cristo"], contexto: "A perseverança é colocada acima do entusiasmo inicial como critério de fidelidade.", testemunha,
    referenciasBiblicas: [{ passagem: "chi persevererà sino alla fine, sarà salvato", referencia: "Mateus 10,22; Mateus 24,13" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 16 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 16.", "A referência impressa `Mt 10, 22` foi normalizada para `Mateus 10,22`." ]
  },
  {
    id: "maxima-129", numero: 129, dia: 8, mes: "maio",
    original: { idioma: "italiano", texto: "Si deve detestare ogni affettazione, così nel parlare come nel vestire e in tutte le altre cose.", passagensLatinas: null },
    portugues: { texto: "Deve-se detestar toda afetação, tanto no falar como no vestir e em todas as demais coisas.", tradutor },
    tema: "simplicidade sem afetação", temasSecundarios: ["modéstia", "sinceridade", "costumes"], contexto: "A máxima rejeita a artificialidade aplicada à fala, à roupa e à conduta geral.", testemunha,
    referenciasBiblicas: [{ passagem: "detestare ogni affettazione", referencia: "Mateus 6,1-18; 1Pedro 3,3-4, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 16 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 16.", "`Affettazione` foi traduzido por ‘afetação’, mantendo o termo preciso para artificialidade do comportamento."]
  },
  {
    id: "maxima-130", numero: 130, dia: 9, mes: "maio",
    original: { idioma: "italiano", texto: "Quando una persona scrupolosa ha chiarito una volta di non aver acconsentito alla tentazione, non deve di nuovo starne a parlare, se ha acconsentito o non ha acconsentito; perché molte volte con simili pensieri si suscitano le stesse tentazioni.", passagensLatinas: null },
    portugues: { texto: "Quando uma pessoa escrupulosa tiver esclarecido uma vez que não consentiu na tentação, não deve voltar a falar sobre se consentiu ou não, pois muitas vezes pensamentos semelhantes suscitam as mesmas tentações.", tradutor },
    tema: "escrúpulo e repetição", temasSecundarios: ["consciência", "tentação", "direção espiritual"], contexto: "A máxima adverte contra a ruminação escrupulosa depois de o fato já ter sido esclarecido.", testemunha,
    referenciasBiblicas: [{ passagem: "scrupolosa ... tentazioni", referencia: "Filipenses 4,6-8; 2Coríntios 10,5, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 16 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 16.", "A tradução conserva a repetição `consentiu ou não consentiu` porque ela é o próprio objeto da advertência."]
  },
  {
    id: "maxima-131", numero: 131, dia: 10, mes: "maio",
    original: { idioma: "italiano", texto: "Coloro che sono molestati dagli scrupoli, per sapere se hanno acconsentito o no alla suggestione, soprattutto nei pensieri, considerino se nella tentazione ebbero sempre vivo l'amore per la virtù contraria a quel vizio da cui erano tentati, e l'odio allo stesso vizio; questo è solito essere un ottimo segno che non hanno acconsentito.", passagensLatinas: null },
    portugues: { texto: "Aqueles que são atormentados pelos escrúpulos, para saber se consentiram ou não na sugestão — sobretudo nos pensamentos —, considerem se, durante a tentação, conservaram vivo o amor pela virtude contrária ao vício que os tentava e o ódio a esse mesmo vício; isso costuma ser um excelente sinal de que não consentiram.", tradutor },
    tema: "discernimento do consentimento", temasSecundarios: ["escrúpulo", "virtude", "tentação"], contexto: "A presença de amor à virtude e repulsa ao vício é apresentada como sinal prudencial de não consentimento.", testemunha,
    referenciasBiblicas: [{ passagem: "amore per la virtù ... odio allo stesso vizio", referencia: "Romanos 7,22-23; Gálatas 5,16-17, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 17 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 17.", "`Suggestione` foi traduzido por ‘sugestão’, no sentido histórico de impulso ou proposta da tentação.", "A formulação é apresentada como sinal prudencial, não como teste automático de consciência."]
  },
  {
    id: "maxima-132", numero: 132, dia: 11, mes: "maio",
    original: { idioma: "italiano", texto: "Gli scrupolosi si rimettano in tutto e per tutto al giudizio del Confessore, e si abituino a disprezzare i propri scrupoli.", passagensLatinas: null },
    portugues: { texto: "Os escrupulosos submetam-se inteiramente ao juízo do Confessor e habituem-se a desprezar os próprios escrúpulos.", tradutor },
    tema: "obediência do escrupuloso", temasSecundarios: ["Confissão", "humildade", "discernimento"], contexto: "A submissão ao discernimento do confessor é indicada como tratamento espiritual do escrúpulo.", testemunha,
    referenciasBiblicas: [{ passagem: "rimettano ... al giudizio del Confessore", referencia: "Hebreus 13,17; Provérbios 12,15, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 17 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 17.", "`Confessore` foi capitalizado na tradução por designar o ministro sacramental.", "`Disprezzare` foi mantido como ‘desprezar’, no sentido de não dar crédito aos escrúpulos, não de odiar a própria pessoa."]
  },
  {
    id: "maxima-133", numero: 133, dia: 12, mes: "maio",
    original: { idioma: "italiano", texto: "Gli scrupoli sono un'infermità, che fa tregua ma rare volte pace; l'umiltà è quella sola che ne riporta vittoria.", passagensLatinas: null },
    portugues: { texto: "Os escrúpulos são uma enfermidade que faz trégua, mas raramente faz paz; somente a humildade obtém vitória sobre eles.", tradutor },
    tema: "humildade contra o escrúpulo", temasSecundarios: ["consciência", "paz", "cura espiritual"], contexto: "A distinção entre trégua e paz descreve a persistência do escrúpulo e aponta a humildade como remédio.", testemunha,
    referenciasBiblicas: [{ passagem: "l’umiltà ... vittoria", referencia: "Tiago 4,6-10; Filipenses 4,6-7, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 17 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 17.", "`Fa tregua ma rare volte pace` foi traduzido mantendo o paralelismo entre ‘trégua’ e ‘paz’. "]
  },
  {
    id: "maxima-134", numero: 134, dia: 13, mes: "maio",
    original: { idioma: "italiano", texto: "Nelle infermità del corpo i rimedi spirituali sono di maggiore giovamento.", passagensLatinas: null },
    portugues: { texto: "Nas enfermidades do corpo, os remédios espirituais são de maior proveito.", tradutor },
    tema: "remédios espirituais na doença", temasSecundarios: ["enfermidade", "oração", "consolo"], contexto: "A máxima valoriza os meios espirituais no acompanhamento da enfermidade corporal.", testemunha,
    referenciasBiblicas: [{ passagem: "rimedi spirituali", referencia: "Tiago 5,14-15; Salmo 41(42),2-3, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 17 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 17.", "`Giovamento` foi traduzido por ‘proveito’, sem substituir os remédios espirituais por terapia médica nem negar o cuidado corporal."]
  },
  {
    id: "maxima-135", numero: 135, dia: 14, mes: "maio",
    original: { idioma: "italiano", texto: "Quanto amore si pone nelle creature, tanto se ne toglie al Creatore.", passagensLatinas: null },
    portugues: { texto: "Quanto amor se põe nas criaturas, tanto se tira do Criador.", tradutor },
    tema: "amor ordenado", temasSecundarios: ["desapego", "Criador", "criaturas"], contexto: "A máxima adverte contra um amor às criaturas que desloque o amor devido ao Criador.", testemunha,
    referenciasBiblicas: [{ passagem: "amore ... alle creature ... al Creatore", referencia: "Mateus 22,37-40; 1João 2,15, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 17 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 17.", "A estrutura proporcional foi mantida literalmente para preservar o argumento do original."]
  },
  {
    id: "maxima-136", numero: 136, dia: 15, mes: "maio",
    original: { idioma: "italiano", texto: "I penitenti non debbono mai forzare il confessore a permettere loro di far quello cui egli non propende.", passagensLatinas: null },
    portugues: { texto: "Os penitentes nunca devem forçar o confessor a permitir-lhes fazer aquilo para o qual ele não se inclina.", tradutor },
    tema: "obediência ao confessor", temasSecundarios: ["Confissão", "direção espiritual", "prudência"], contexto: "A relação penitencial exige respeito ao discernimento do confessor, sem pressioná-lo a autorizar uma prática.", testemunha,
    referenciasBiblicas: [{ passagem: "non forzare il confessore", referencia: "Hebreus 13,17; 1Pedro 5,5, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 17 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 17.", "`Non propende` foi traduzido por ‘não se inclina’, preservando a prudência do confessor sem atribuir-lhe oposição absoluta."]
  },
  {
    id: "maxima-137", numero: 137, dia: 16, mes: "maio",
    original: { idioma: "italiano", texto: "Non farà mai profitto nella virtù chi è posseduto in qualche modo dall'avarizia.", passagensLatinas: null },
    portugues: { texto: "Nunca progredirá na virtude quem estiver de algum modo dominado pela avareza.", tradutor },
    tema: "avareza e virtude", temasSecundarios: ["desapego", "riqueza", "formação"], contexto: "A avareza é apresentada como força incompatível com o progresso nas virtudes.", testemunha,
    referenciasBiblicas: [{ passagem: "posseduto ... dall’avarizia", referencia: "Lucas 16,13; 1Timóteo 6,9-10, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 17 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 17.", "`Profitto` foi traduzido por ‘progredirá’, e não por ‘terá lucro’, para evitar leitura econômica."]
  },
  {
    id: "maxima-138", numero: 138, dia: 17, mes: "maio",
    original: { idioma: "italiano", texto: "L'avarizia è la peste dell'anima.", passagensLatinas: null },
    portugues: { texto: "A avareza é a peste da alma.", tradutor },
    tema: "avareza como enfermidade", temasSecundarios: ["alma", "desapego", "pecado"], contexto: "A formulação breve intensifica a descrição da avareza como doença espiritual contagiosa.", testemunha,
    referenciasBiblicas: [{ passagem: "peste dell’anima", referencia: "1Timóteo 6,9-10; Colossenses 3,5, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 17 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 17.", "`Peste` foi mantido, em continuidade com a imagem usada para as mentiras na máxima 103."]
  },
  {
    id: "maxima-139", numero: 139, dia: 18, mes: "maio",
    original: { idioma: "italiano", texto: "Si prova per esperienza, che si convertono prima gli uomini dediti alla sensualità, che quelli che sono dediti all'avarizia.", passagensLatinas: null },
    portugues: { texto: "A experiência mostra que se convertem antes as pessoas entregues à sensualidade que aquelas entregues à avareza.", tradutor },
    tema: "dificuldade da conversão da avareza", temasSecundarios: ["conversão", "sensualidade", "riqueza"], contexto: "A máxima compara a conversão da sensualidade com a da avareza e considera esta última mais resistente.", testemunha,
    referenciasBiblicas: [{ passagem: "si convertono prima ... sensualità ... avarizia", referencia: "Lucas 18,18-27; 1Coríntios 6,9-11, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 17 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 17.", "`Gli uomini` e `quelli` foram traduzidos por ‘pessoas’ e ‘aquelas’, evitando um masculino genérico repetido."]
  },
  {
    id: "maxima-140", numero: 140, dia: 19, mes: "maio",
    original: { idioma: "italiano", texto: "Chi vuole la roba, non avrà mai lo spirito.", passagensLatinas: null },
    portugues: { texto: "Quem quer os bens materiais nunca terá o espírito.", tradutor },
    tema: "desapego dos bens", temasSecundarios: ["avareza", "espírito", "pobreza"], contexto: "O desejo possessivo pelos bens é contraposto à liberdade do espírito.", testemunha,
    referenciasBiblicas: [{ passagem: "vuole la roba ... lo spirito", referencia: "Mateus 6,24; Lucas 12,15, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 17 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 17.", "`Roba` foi traduzido por ‘bens materiais’, explicitando o sentido histórico sem usar ‘coisa’ de modo ambíguo."]
  },
  {
    id: "maxima-141", numero: 141, dia: 20, mes: "maio",
    original: { idioma: "italiano", texto: "Tutti i peccati dispiacciono molto a Dio; ma soprattutto la lussuria e l'avarizia, che sono molto difficili da curare.", passagensLatinas: null },
    portugues: { texto: "Todos os pecados desagradam muito a Deus, mas sobretudo a luxúria e a avareza, que são muito difíceis de curar.", tradutor },
    tema: "luxúria e avareza", temasSecundarios: ["pecado", "cura espiritual", "desapego"], contexto: "A máxima destaca dois vícios pela dificuldade de cura, sem diminuir a gravidade dos demais pecados.", testemunha,
    referenciasBiblicas: [{ passagem: "lussuria e avarizia", referencia: "1Coríntios 6,18; Efésios 5,3-5; 1Timóteo 6,9-10, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 17 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 17.", "`Curare` foi traduzido por ‘curar’, preservando a metáfora da doença moral."]
  },
  {
    id: "maxima-142", numero: 142, dia: 21, mes: "maio",
    original: { idioma: "italiano", texto: "Bisogna sempre pregare il Signore che non ci lasci dominare dallo spirito dell'avarizia, e ci faccia vivere liberi dagli affari di questo mondo.", passagensLatinas: null },
    portugues: { texto: "É preciso rezar sempre ao Senhor para que não nos deixe dominar pelo espírito da avareza e nos faça viver livres dos negócios deste mundo.", tradutor },
    tema: "liberdade diante dos negócios do mundo", temasSecundarios: ["oração", "avareza", "desapego"], contexto: "A liberdade espiritual é pedida a Deus contra o domínio da avareza e a absorção pelos negócios mundanos.", testemunha,
    referenciasBiblicas: [{ passagem: "liberi dagli affari di questo mondo", referencia: "Mateus 6,19-21.25-34; 1João 2,15-17, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 17 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 17.", "`Affari` foi traduzido por ‘negócios’, no sentido amplo de ocupações e interesses do mundo."]
  },
  {
    id: "maxima-143", numero: 143, dia: 22, mes: "maio",
    original: { idioma: "italiano", texto: "Non si trova cosa in questo mondo che possa piacerci: e questo ci deve piacere, il non trovarla.", passagensLatinas: null },
    portugues: { texto: "Não se encontra neste mundo coisa alguma que possa agradar-nos; e isto deve agradar-nos: não encontrar tal coisa.", tradutor },
    tema: "desapego do mundo", temasSecundarios: ["contentamento", "avareza", "sobriedade"], contexto: "A máxima transforma a ausência de satisfação mundana em motivo de contentamento espiritual.", testemunha,
    referenciasBiblicas: [{ passagem: "non si trova cosa ... che possa piacerci", referencia: "Eclesiastes 1,2; Filipenses 4,11-12, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 17 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 17.", "A repetição de `piacere` foi preservada para manter o paradoxo da frase."]
  },
  {
    id: "maxima-144", numero: 144, dia: 23, mes: "maio",
    original: { idioma: "italiano", texto: "Chi vuole arrivare alla perfezione, bisogna che non si attacchi ad alcuna cosa.", passagensLatinas: null },
    portugues: { texto: "Quem quer chegar à perfeição precisa não se apegar a coisa alguma.", tradutor },
    tema: "desapego para a perfeição", temasSecundarios: ["perfeição", "liberdade", "pobreza"], contexto: "O desapego universal é apresentado como condição do caminho de perfeição.", testemunha,
    referenciasBiblicas: [{ passagem: "non si attacchi ad alcuna cosa", referencia: "Lucas 14,33; Mateus 19,21, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 17 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 17.", "`Attaccarsi` foi traduzido por ‘apegar-se’, mantendo o campo afetivo e espiritual."]
  },
  {
    id: "maxima-145", numero: 145, dia: 24, mes: "maio",
    original: { idioma: "italiano", texto: "È cosa buona lasciare il mondo e la roba per servire Dio, ma non basta.", passagensLatinas: null },
    portugues: { texto: "É coisa boa deixar o mundo e os bens materiais para servir a Deus, mas isso não basta.", tradutor },
    tema: "desapego exterior e interior", temasSecundarios: ["vocação", "serviço", "conversão"], contexto: "A renúncia externa aos bens e ao mundo é considerada boa, mas insuficiente sem transformação interior.", testemunha,
    referenciasBiblicas: [{ passagem: "lasciare il mondo e la roba", referencia: "Marcos 10,28-31; Lucas 9,62, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 17 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 17.", "`Roba` foi traduzido como ‘bens materiais’, em continuidade com a máxima 139."]
  },
  {
    id: "maxima-146", numero: 146, dia: 25, mes: "maio",
    original: { idioma: "italiano", texto: "La grandezza dell'amore di Dio si conosce dalla grandezza del desiderio che l'uomo ha di patire per amor suo.", passagensLatinas: null },
    portugues: { texto: "A grandeza do amor de Deus conhece-se pela grandeza do desejo que a pessoa tem de sofrer por amor dele.", tradutor },
    tema: "amor e sofrimento", temasSecundarios: ["sacrifício", "desejo", "amor de Deus"], contexto: "O desejo de sofrer por amor de Deus é tomado como medida da intensidade do amor.", testemunha,
    referenciasBiblicas: [{ passagem: "desiderio ... di patire per amor suo", referencia: "Filipenses 1,29; Colossenses 1,24, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 17 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 17.", "A tradução conserva `desiderio` como ‘desejo’, sem converter a frase em obrigação de buscar o sofrimento."]
  },
  {
    id: "maxima-147", numero: 147, dia: 26, mes: "maio",
    original: { idioma: "italiano", texto: "Si attenda alla purezza del cuore, perché lo Spirito Santo abita nelle menti candide e semplici.", passagensLatinas: null },
    portugues: { texto: "Cuide-se da pureza do coração, porque o Espírito Santo habita nas mentes cândidas e simples.", tradutor },
    tema: "pureza do coração", temasSecundarios: ["Espírito Santo", "simplicidade", "interioridade"], contexto: "A pureza e a simplicidade interior são apresentadas como morada do Espírito Santo.", testemunha,
    referenciasBiblicas: [{ passagem: "Spirito Santo abita ... menti candide e semplici", referencia: "1Coríntios 3,16; Mateus 5,8, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 17 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 17.", "`Candide` foi traduzido por ‘cândidas’, preservando o sentido de pureza e não apenas ingenuidade."]
  },
  {
    id: "maxima-148", numero: 148, dia: 27, mes: "maio",
    original: { idioma: "italiano", texto: "Lo Spirito Santo è il maestro dell'orazione, e ci fa stare in continua pace ed allegria, il che è un assaggio del paradiso.", passagensLatinas: null },
    portugues: { texto: "O Espírito Santo é o mestre da oração e nos faz permanecer em contínua paz e alegria, o que é uma antecipação do paraíso.", tradutor },
    tema: "Espírito Santo e oração", temasSecundarios: ["paz", "alegria", "paraíso"], contexto: "A paz e a alegria concedidas na oração são descritas como antegosto da bem-aventurança.", testemunha,
    referenciasBiblicas: [{ passagem: "Spirito Santo ... maestro dell’orazione", referencia: "Romanos 8,26-27; Gálatas 5,22-23, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 17 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 17.", "`Assaggio del paradiso` foi traduzido por ‘antecipação do paraíso’, solução idiomática para a imagem de provar antecipadamente."]
  },
  {
    id: "maxima-149", numero: 149, dia: 28, mes: "maio",
    original: { idioma: "italiano", texto: "Affinché lo Spirito Santo ci insegni a fare orazione, conviene essere umile e obbediente.", passagensLatinas: null },
    portugues: { texto: "Para que o Espírito Santo nos ensine a rezar, convém ser humilde e obediente.", tradutor },
    tema: "humildade para aprender a rezar", temasSecundarios: ["Espírito Santo", "obediência", "oração"], contexto: "A humildade e a obediência são apresentadas como disposições para receber o ensino do Espírito Santo.", testemunha,
    referenciasBiblicas: [{ passagem: "umile e obbediente", referencia: "Tiago 4,6-7; Atos 5,32, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 17 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 17.", "`Fare orazione` foi traduzido por ‘rezar’, mantendo a linguagem simples da máxima."]
  },
  {
    id: "maxima-150", numero: 150, dia: 29, mes: "maio",
    original: { idioma: "italiano", texto: "Il frutto che si deve ottenere dalla preghiera, è quello di fare ciò che piace al Signore.", passagensLatinas: null },
    portugues: { texto: "O fruto que se deve obter da oração é fazer aquilo que agrada ao Senhor.", tradutor },
    tema: "fruto da oração", temasSecundarios: ["obediência", "vontade de Deus", "ação"], contexto: "A oração é julgada pelo fruto prático de conformar a conduta ao agrado do Senhor.", testemunha,
    referenciasBiblicas: [{ passagem: "fare ciò che piace al Signore", referencia: "João 14,15; 1João 3,22, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 17 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 17.", "`Frutto` foi traduzido por ‘fruto’, preservando a imagem bíblica e espiritual."]
  },
  {
    id: "maxima-151", numero: 151, dia: 30, mes: "maio",
    original: { idioma: "italiano", texto: "La vita virtuosa si conduce nella mortificazione dei vizi, dei peccati, dei cattivi pensieri e dei cattivi affetti; e si esercita nell'acquisto delle virtù sante.", passagensLatinas: null },
    portugues: { texto: "A vida virtuosa é conduzida pela mortificação dos vícios, dos pecados, dos maus pensamentos e dos maus afetos; e é exercitada na aquisição das santas virtudes.", tradutor },
    tema: "vida virtuosa", temasSecundarios: ["mortificação", "virtude", "pensamentos"], contexto: "A vida virtuosa combina combate aos vícios e prática positiva das virtudes.", testemunha,
    referenciasBiblicas: [{ passagem: "mortificazione dei vizi ... acquisto delle virtù", referencia: "Colossenses 3,5-14; Gálatas 5,22-24, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 17 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 17.", "`Affetti` foi traduzido por ‘afetos’, não por ‘sentimentos’ em sentido psicológico moderno."]
  },
  {
    id: "maxima-152", numero: 152, dia: 31, mes: "maio",
    original: { idioma: "italiano", texto: "Siamo umili, stiamo bassi: obbedienza, umiltà, distacco.", passagensLatinas: null },
    portugues: { texto: "Sejamos humildes, mantenhamo-nos por baixo: obediência, humildade, desapego.", tradutor },
    tema: "programa de humildade", temasSecundarios: ["obediência", "desapego", "vida espiritual"], contexto: "A máxima final de maio reúne, em forma quase mnemônica, três eixos da disciplina espiritual.", testemunha,
    referenciasBiblicas: [{ passagem: "obbedienza, umiltà, distacco", referencia: "Filipenses 2,3-8; Lucas 14,11; Lucas 14,33, como síntese" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 17 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 17.", "`Stiamo bassi` foi traduzido por ‘mantenhamo-nos por baixo’, conservando a imagem de humildade sem coloquialismo.", "A enumeração final foi preservada sem transformar os três termos em uma frase explicativa longa."]
  },
  {
    id: "maxima-153", numero: 153, dia: 1, mes: "junho",
    original: { idioma: "italiano", texto: "Era tale l'amore della beatissima Vergine verso Dio, che, per il desiderio di unirsi a Lui, soffriva immensamente; perciò l'Eterno Padre per consolarla le mandò il suo unico diletto Figlio.", passagensLatinas: null },
    portugues: { texto: "Era tão grande o amor da Santíssima Virgem por Deus que, pelo desejo de unir-se a ele, sofria imensamente; por isso, o Pai eterno, para consolá-la, enviou-lhe o seu único Filho amado.", tradutor },
    tema: "amor da Virgem por Deus", temasSecundarios: ["Encarnação", "consolação", "Maria"], contexto: "A máxima contempla o amor de Maria e o envio do Filho como consolação divina.", testemunha,
    referenciasBiblicas: [{ passagem: "mandou o seu único Filho amado", referencia: "João 3,16; Lucas 1,35, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 18 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 18.", "`Unico diletto Figlio` foi traduzido por ‘único Filho amado’, preservando o valor afetivo e cristológico."]
  },
  {
    id: "maxima-154", numero: 154, dia: 2, mes: "junho",
    original: { idioma: "italiano", texto: "Se tu vuoi venire dove vado io, cioè verso la gloria, bisogna che tu passi di qui, cioè per le spine.", passagensLatinas: null },
    portugues: { texto: "Se queres vir para onde vou, isto é, para a glória, é preciso que passes por aqui, isto é, pelos espinhos.", tradutor },
    tema: "espinhos no caminho da glória", temasSecundarios: ["sofrimento", "glória", "perseverança"], contexto: "A glória é apresentada como caminho que passa necessariamente pelos espinhos da provação.", testemunha,
    referenciasBiblicas: [{ passagem: "verso la gloria ... per le spine", referencia: "Atos 14,22; João 16,33, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 18 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 18.", "A segunda pessoa singular foi mantida, pois a máxima tem forma de exortação direta."]
  },
  {
    id: "maxima-155", numero: 155, dia: 3, mes: "junho",
    original: { idioma: "italiano", texto: "Prima di comunicarsi bisogna esercitarsi in molti atti di virtù.", passagensLatinas: null },
    portugues: { texto: "Antes de comungar, é preciso exercitar-se em muitos atos de virtude.", tradutor },
    tema: "preparação para a comunhão", temasSecundarios: ["Eucaristia", "virtude", "recolhimento"], contexto: "A preparação para a comunhão é vinculada à prática concreta das virtudes.", testemunha,
    referenciasBiblicas: [{ passagem: "prima di comunicarsi", referencia: "1Coríntios 11,28; João 6,35-58, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 18 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 18.", "`Comunicarsi` foi traduzido por ‘comungar’, termo litúrgico estabelecido no corpus."]
  },
  {
    id: "maxima-156", numero: 156, dia: 4, mes: "junho",
    original: { idioma: "italiano", texto: "L'orazione e la comunione non si debbono fare, né desiderare per quell'affetto e devozione che vi si trova dentro, perché così si cerca sé stesso e non Dio; ma si debbono frequentare l'una e l'altra per essere una persona umile, obbediente, mansueta e paziente.", passagensLatinas: null },
    portugues: { texto: "A oração e a comunhão não devem ser praticadas nem desejadas pelo afeto e pela devoção que se experimentam nelas, pois assim se busca a si mesmo e não a Deus; mas ambas devem ser frequentadas para tornar-se uma pessoa humilde, obediente, mansa e paciente.", tradutor },
    tema: "oração e comunhão sem busca de consolo", temasSecundarios: ["Eucaristia", "humildade", "obediência"], contexto: "A máxima distingue o desejo de Deus da busca autocentrada de consolação na oração e na comunhão.", testemunha,
    referenciasBiblicas: [{ passagem: "cerca sé stesso e non Dio", referencia: "João 6,26-27; Filipenses 2,3-4, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 18 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 18.", "`Mansueta` foi traduzido por ‘mansa’, preservando a lista de virtudes sem trocar por ‘gentil’."]
  },
  {
    id: "maxima-157", numero: 157, dia: 5, mes: "junho",
    original: { idioma: "italiano", texto: "Quando queste cose si trovano in una persona, allora essa coglie il frutto dell'orazione e della comunione.", passagensLatinas: null },
    portugues: { texto: "Quando essas coisas se encontram numa pessoa, então ela colhe o fruto da oração e da comunhão.", tradutor },
    tema: "fruto sacramental e espiritual", temasSecundarios: ["virtudes", "oração", "Eucaristia"], contexto: "As virtudes enumeradas na máxima anterior são apresentadas como fruto efetivo da oração e da comunhão.", testemunha,
    referenciasBiblicas: [{ passagem: "frutto dell’orazione e della comunione", referencia: "Gálatas 5,22-23; João 15,4-5, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 18 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 18.", "`Queste cose` retoma humildade, obediência, mansidão e paciência; essa referência é explicitada no contexto."]
  },
  {
    id: "maxima-158", numero: 158, dia: 6, mes: "junho",
    original: { idioma: "italiano", texto: "Il dolce Gesù per eccesso di amore e di generosità, ha lasciato sé stesso nel Santissimo Sacramento.", passagensLatinas: null },
    portugues: { texto: "O doce Jesus, por excesso de amor e generosidade, deixou a si mesmo no Santíssimo Sacramento.", tradutor },
    tema: "presença de Cristo na Eucaristia", temasSecundarios: ["Eucaristia", "amor de Cristo", "generosidade"], contexto: "A presença eucarística é interpretada como fruto extremo do amor e da generosidade de Jesus.", testemunha,
    referenciasBiblicas: [{ passagem: "lasciato sé stesso nel Santissimo Sacramento", referencia: "Mateus 26,26-28; João 6,51-58, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 18 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 18.", "`Dolce Gesù` foi traduzido por ‘doce Jesus’, mantendo o epíteto afetivo."]
  },
  {
    id: "maxima-159", numero: 159, dia: 7, mes: "junho",
    original: { idioma: "misto", texto: "Tutti si accostino alla Mensa eucaristica con grande desiderio di quel sacro cibo. Sitientes, sitientes (assetati, assetati).", passagensLatinas: [{ trecho: "Sitientes, sitientes", origem: "Isaías 55,1, fórmula latina da Vulgata; o texto aplica-a ao desejo eucarístico", traducao: "Sedentos, sedentos." }] },
    portugues: { texto: "Todos se aproximem da Mesa eucarística com grande desejo daquele alimento sagrado: “Sedentos, sedentos” (sedentos, sedentos).", tradutor },
    tema: "desejo eucarístico", temasSecundarios: ["Eucaristia", "sede espiritual", "comunhão"], contexto: "A sede do alimento eucarístico é expressa por uma fórmula latina seguida de sua glosa italiana.", testemunha,
    referenciasBiblicas: [{ passagem: "Sitientes, sitientes", referencia: "Isaías 55,1; João 6,35, como citação e aplicação" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 18 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 18.", "O latim foi separado da glosa italiana e traduzido como ‘Sedentos, sedentos’; não foi absorvido como prosa italiana."]
  },
  {
    id: "maxima-160", numero: 160, dia: 8, mes: "junho",
    original: { idioma: "italiano", texto: "Sentire dispiacere quando viene negata la comunione, è segno di durezza, di poca mortificazione e di superbia.", passagensLatinas: null },
    portugues: { texto: "Sentir pesar quando a comunhão é negada é sinal de dureza, pouca mortificação e soberba.", tradutor },
    tema: "aceitação da privação da comunhão", temasSecundarios: ["Eucaristia", "mortificação", "humildade"], contexto: "A privação da comunhão é tratada como ocasião de examinar a dureza e a soberba próprias.", testemunha,
    referenciasBiblicas: [{ passagem: "comunione ... mortificazione e superbia", referencia: "1Coríntios 11,27-29; Filipenses 2,3, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 18 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 18.", "`Negata la comunione` foi traduzido por ‘a comunhão é negada’, sem especular a razão concreta da negativa."]
  },
  {
    id: "maxima-161", numero: 161, dia: 9, mes: "junho",
    original: { idioma: "italiano", texto: "Quelli che si comunicano si preparino più del solito alle tentazioni, perché il Signore non vuole che si sia pigri.", passagensLatinas: null },
    portugues: { texto: "Aqueles que comungam preparem-se mais que de costume para as tentações, porque o Senhor não quer que se seja preguiçoso.", tradutor },
    tema: "vigilância depois da comunhão", temasSecundarios: ["Eucaristia", "tentação", "disciplina"], contexto: "A comunhão exige maior vigilância, não relaxamento espiritual.", testemunha,
    referenciasBiblicas: [{ passagem: "preparino ... alle tentazioni", referencia: "Mateus 26,41; 1Pedro 5,8-9, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 18 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 18.", "`Pigri` foi traduzido por ‘preguiçoso’, preservando o termo direto da máxima."]
  },
  {
    id: "maxima-162", numero: 162, dia: 10, mes: "junho",
    original: { idioma: "italiano", texto: "Dopo il giorno della comunione, è cosa utile per quella settimana che segue, fare qualche cosa in più del solito, recitando, per esempio, cinque Pater e Ave, con le braccia aperte, o qualche coroncina.", passagensLatinas: null },
    portugues: { texto: "Depois do dia da comunhão, é útil, durante a semana seguinte, fazer algo mais que de costume, rezando, por exemplo, cinco Pais-Nossos e Ave-Marias com os braços abertos, ou alguma coroinha.", tradutor },
    tema: "ação de graças após a comunhão", temasSecundarios: ["Eucaristia", "oração", "penitência"], contexto: "A máxima recomenda acrescentar alguma oração ou devoção na semana posterior à comunhão.", testemunha,
    referenciasBiblicas: [{ passagem: "Pater e Ave", referencia: "Mateus 6,9-13; Lucas 1,28.46-55, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 18 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 18.", "`Pater e Ave` foi traduzido pelos nomes devocionais brasileiros ‘Pai-Nosso e Ave-Maria’.", "`Coroncina` foi traduzido por ‘coroinha’, termo devocional, não por uma pequena coroa ornamental."]
  },
  {
    id: "maxima-163", numero: 163, dia: 11, mes: "junho",
    original: { idioma: "italiano", texto: "Non è bene caricarsi di molti esercizi spirituali, ed è meglio prenderne pochi e continuare; perché il demonio se fa lasciare una volta un esercizio, facilmente lo farà lasciare la seconda volta e la terza, fintanto che ogni cosa si risolva in niente.", passagensLatinas: null },
    portugues: { texto: "Não é bom sobrecarregar-se de muitos exercícios espirituais; é melhor escolher poucos e perseverar neles, pois, se o demônio fizer alguém abandonar um exercício uma vez, facilmente o fará abandoná-lo uma segunda e uma terceira vez, até que tudo se reduza a nada.", tradutor },
    tema: "constância nos exercícios espirituais", temasSecundarios: ["disciplina", "demônio", "perseverança"], contexto: "A constância em poucos exercícios é preferida à acumulação que favorece o abandono.", testemunha,
    referenciasBiblicas: [{ passagem: "prenderne pochi e continuare", referencia: "Lucas 8,14-15; Gálatas 6,9, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 18 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 18.", "`Caricarsi` foi traduzido por ‘sobrecarregar-se’, preservando a crítica ao excesso de práticas."]
  },
  {
    id: "maxima-164", numero: 164, dia: 12, mes: "junho",
    original: { idioma: "italiano", texto: "Bisogna guardarsi dai piccoli difetti, perché altrimenti, non appena si incomincia a indietreggiare e a non tenere in conto tali difetti, la coscienza si appesantisce e poi si va in rovina.", passagensLatinas: null },
    portugues: { texto: "É preciso guardar-se dos pequenos defeitos, pois, do contrário, assim que se começa a recuar e a não levar tais defeitos em conta, a consciência se torna pesada e depois se cai na ruína.", tradutor },
    tema: "vigilância dos pequenos defeitos", temasSecundarios: ["consciência", "disciplina", "queda"], contexto: "A negligência de pequenas faltas é apresentada como início de um recuo espiritual maior.", testemunha,
    referenciasBiblicas: [{ passagem: "piccoli difetti ... si va in rovina", referencia: "Cântico dos Cânticos 2,15; Lucas 16,10, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 18 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 18.", "`Appesantisce` foi traduzido por ‘torna pesada’, preservando a metáfora da consciência carregada."]
  },
  {
    id: "maxima-165", numero: 165, dia: 13, mes: "junho",
    original: { idioma: "italiano", texto: "Il servo di Dio deve provvedere a sapere, ma non a dimostralo o a vantarsene.", passagensLatinas: null },
    portugues: { texto: "O servo de Deus deve procurar saber, mas não demonstrá-lo nem vangloriar-se disso.", tradutor },
    tema: "conhecimento sem vanglória", temasSecundarios: ["humildade", "estudo", "discrição"], contexto: "O conhecimento é admitido como bem, desde que não se converta em exibição ou vaidade.", testemunha,
    referenciasBiblicas: [{ passagem: "non ... vantarsene", referencia: "1Coríntios 8,1-3; 1Coríntios 13,4, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 18 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 18.", "`Provvedere a sapere` foi traduzido por ‘procurar saber’, sem reduzir o conhecimento a obrigação acadêmica."]
  },
  {
    id: "maxima-166", numero: 166, dia: 14, mes: "junho",
    original: { idioma: "italiano", texto: "Andiamo sempre con sincerità a confessarci, e prendiamo questo come consiglio: non tacere mai per rispetto umano al confessore nessun peccato, per leggero che fosse.", passagensLatinas: null },
    portugues: { texto: "Vamos sempre confessar-nos com sinceridade e tomemos este conselho: nunca ocultar ao confessor, por respeito humano, pecado algum, por leve que seja.", tradutor },
    tema: "sinceridade sacramental", temasSecundarios: ["Confissão", "respeito humano", "humildade"], contexto: "A sinceridade na Confissão é contraposta ao silêncio motivado pelo medo da opinião alheia.", testemunha,
    referenciasBiblicas: [{ passagem: "non tacere ... nessun peccato", referencia: "1João 1,9; Tiago 5,16, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 18 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 18.", "`Rispetto umano` foi traduzido por ‘respeito humano’, expressão tradicional para o medo da avaliação dos outros."]
  },
  {
    id: "maxima-167", numero: 167, dia: 15, mes: "junho",
    original: { idioma: "italiano", texto: "Chi tace i peccati gravi nella confessione, è in mano del demonio.", passagensLatinas: null },
    portugues: { texto: "Quem cala pecados graves na Confissão está nas mãos do demônio.", tradutor },
    tema: "ocultação de pecado grave", temasSecundarios: ["Confissão", "demônio", "sinceridade"], contexto: "A máxima formula em termos fortes o perigo espiritual atribuído à ocultação deliberada de pecado grave.", testemunha,
    referenciasBiblicas: [{ passagem: "tace i peccati gravi", referencia: "João 20,22-23; 1João 1,9, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 18 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 18.", "`In mano del demonio` foi traduzido literalmente como ‘nas mãos do demônio’, preservando a imagem de sujeição."]
  },
  {
    id: "maxima-168", numero: 168, dia: 16, mes: "junho",
    original: { idioma: "italiano", texto: "I penitenti ordinariamente non cambino il confessore, né i confessori accettino facilmente (eccetto in alcuni casi) i penitenti degli altri.", passagensLatinas: null },
    portugues: { texto: "Ordinariamente, os penitentes não mudem de confessor, nem os confessores aceitem facilmente — exceto em alguns casos — os penitentes dos outros.", tradutor },
    tema: "estabilidade da direção espiritual", temasSecundarios: ["Confissão", "prudência", "continuidade"], contexto: "A continuidade da relação penitencial é recomendada, com ressalva explícita para alguns casos.", testemunha,
    referenciasBiblicas: null, fonte: { primaria, original: originalDeclarada, paginaPDF: 18 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 18.", "A ressalva `eccetto in alcuni casi` foi mantida entre travessões para impedir leitura absoluta da norma."]
  },
  {
    id: "maxima-169", numero: 169, dia: 17, mes: "junho",
    original: { idioma: "italiano", texto: "Per una persona spirituale, la quale, dopo aver camminato a lungo nella via dello spirito, sia caduta in qualche errore di considerazione, per tirarla fuori non c'è rimedio migliore che esortarla a manifestare la caduta a una persona di vita buona, con la quale abbia particolare confidenza, perché con questa umiltà Dio la ricondurrà allo stato di prima.", passagensLatinas: null },
    portugues: { texto: "Para uma pessoa espiritual que, depois de ter caminhado longamente na via do espírito, tenha caído em algum erro de discernimento, não há melhor remédio para tirá-la dele que exortá-la a manifestar a queda a uma pessoa de vida boa, com quem tenha particular confiança; por meio dessa humildade, Deus a reconduzirá ao estado anterior.", tradutor },
    tema: "humildade depois do erro espiritual", temasSecundarios: ["direção espiritual", "confiança", "restauração"], contexto: "A manifestação humilde de um erro a uma pessoa de confiança é apresentada como caminho de restauração.", testemunha,
    referenciasBiblicas: [{ passagem: "manifestare la caduta ... Dio la ricondurrà", referencia: "Gálatas 6,1-2; Tiago 5,16, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 19 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 19.", "`Errore di considerazione` foi traduzido por ‘erro de discernimento’, sem especificar uma falta que o original não nomeia."]
  },
  {
    id: "maxima-170", numero: 170, dia: 18, mes: "junho",
    original: { idioma: "italiano", texto: "Ai giovani, affinché perseverino, è tanto necessario fuggire le cattive abitudini, come l'accompagnarsi con le persone buone.", passagensLatinas: null },
    portugues: { texto: "Para que perseverem, é tão necessário aos jovens fugir dos maus hábitos quanto conviver com pessoas boas.", tradutor },
    tema: "hábitos e companhias", temasSecundarios: ["juventude", "perseverança", "formação"], contexto: "A perseverança juvenil exige tanto evitar hábitos ruins quanto buscar boas companhias.", testemunha,
    referenciasBiblicas: [{ passagem: "cattive abitudini ... persone buone", referencia: "1Coríntios 15,33; Provérbios 13,20, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 19 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 19.", "`Accompagnarsi` foi traduzido por ‘conviver’, e não por ‘acompanhar’ em sentido episódico."]
  },
  {
    id: "maxima-171", numero: 171, dia: 19, mes: "junho",
    original: { idioma: "italiano", texto: "Nella vita spirituale vi sono tre gradi: il primo si chiama “vita animale”, e questo è di coloro che vanno dietro alla devozione sensibile, che Dio dà di solito ai principianti, affinché, attirati da quel gusto come un animale dall'oggetto sensibile, si diano alla vita spirituale.", passagensLatinas: null },
    portugues: { texto: "Na vida espiritual há três graus. O primeiro chama-se “vida animal” e é próprio daqueles que seguem a devoção sensível, que Deus costuma dar aos iniciantes para que, atraídos por esse gosto como um animal por um objeto sensível, se entreguem à vida espiritual.", tradutor },
    tema: "primeiro grau da vida espiritual", temasSecundarios: ["consolação sensível", "iniciantes", "formação"], contexto: "O primeiro grau é descrito como adesão inicial à vida espiritual por meio da devoção sensível.", testemunha,
    referenciasBiblicas: [{ passagem: "vita animale", referencia: "1Coríntios 2,14-15; 1Pedro 2,2-3, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 19 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 19.", "`Vita animale` foi mantida entre aspas como categoria da fonte, sem traduzi-la por ‘vida animalesca’."]
  },
  {
    id: "maxima-172", numero: 172, dia: 20, mes: "junho",
    original: { idioma: "italiano", texto: "Il secondo grado si chiama “vita dell'uomo”, la quale è di coloro che, non provando dolcezza sensibile, combattono per la virtù contro le proprie passioni.", passagensLatinas: null },
    portugues: { texto: "O segundo grau chama-se “vida do homem” e é próprio daqueles que, sem experimentar doçura sensível, combatem pelas virtudes contra as próprias paixões.", tradutor },
    tema: "segundo grau da vida espiritual", temasSecundarios: ["virtude", "combate interior", "aridez"], contexto: "O segundo grau é marcado pela luta perseverante sem o apoio de consolação sensível.", testemunha,
    referenciasBiblicas: [{ passagem: "combattono per la virtù contro le proprie passioni", referencia: "Gálatas 5,16-24; 1Coríntios 9,25-27, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 19 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 19.", "`Vita dell’uomo` foi mantida entre aspas e não psicologizada como ‘maturidade humana’."]
  },
  {
    id: "maxima-173", numero: 173, dia: 21, mes: "junho",
    original: { idioma: "italiano", texto: "Il terzo si chiama “vita degli Angeli”, alla quale sono arrivati quelli che, esercitati per molto tempo a dominare le proprie passioni, ricevono da Dio una vita quieta e tranquilla, quasi angelica, anche in questo mondo, non sentendo fatica né fastidio per nessuna cosa.", passagensLatinas: null },
    portugues: { texto: "O terceiro chama-se “vida dos Anjos”; chegaram a ele aqueles que, exercitados por muito tempo no domínio das próprias paixões, recebem de Deus uma vida serena e tranquila, quase angélica, já neste mundo, sem sentir cansaço ou incômodo por coisa alguma.", tradutor },
    tema: "terceiro grau da vida espiritual", temasSecundarios: ["vida angélica", "paz", "domínio das paixões"], contexto: "O grau superior é descrito como paz concedida por Deus depois de longa prática de domínio interior.", testemunha,
    referenciasBiblicas: [{ passagem: "vita degli Angeli", referencia: "Lucas 20,35-36; Apocalipse 7,16-17, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 19 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 19.", "`Vita degli Angeli` foi mantida entre aspas; ‘quase angélica’ traduz `quasi angelica` sem afirmar transformação ontológica."]
  },
  {
    id: "maxima-174", numero: 174, dia: 22, mes: "junho",
    original: { idioma: "italiano", texto: "Di questi tre gradi, è bene perseverare nel secondo, perché a suo tempo il Signore concederà poi il terzo.", passagensLatinas: null },
    portugues: { texto: "Desses três graus, é bom perseverar no segundo, porque, a seu tempo, o Senhor concederá depois o terceiro.", tradutor },
    tema: "perseverança na aridez", temasSecundarios: ["vida espiritual", "paciência", "graça"], contexto: "A pessoa não deve forçar a passagem ao grau superior, mas perseverar no combate presente.", testemunha,
    referenciasBiblicas: [{ passagem: "perseverare nel secondo", referencia: "Gálatas 6,9; Tiago 1,4, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 19 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 19.", "`A suo tempo` foi traduzido por ‘a seu tempo’, preservando a espera da graça sem cronograma humano."]
  },
  {
    id: "maxima-175", numero: 175, dia: 23, mes: "junho",
    original: { idioma: "italiano", texto: "Non bisogna credere facilmente ai giovani che hanno grande spirito; perché bisogna prima lasciare che mettano le ali, e poi si vedrà che volo faranno.", passagensLatinas: null },
    portugues: { texto: "Não se deve acreditar facilmente nos jovens que demonstram grande espírito; é preciso primeiro deixá-los criar asas, e depois se verá que voo farão.", tradutor },
    tema: "discernimento dos iniciantes", temasSecundarios: ["juventude", "vocação", "prudência"], contexto: "O fervor inicial dos jovens deve ser provado pelo tempo antes de ser reconhecido como maturidade espiritual.", testemunha,
    referenciasBiblicas: [{ passagem: "mettano le ali ... che volo faranno", referencia: "1João 4,1; Mateus 7,16-20, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 19 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 19.", "A metáfora das asas e do voo foi mantida, sem transformar a frase em avaliação psicológica dos jovens."]
  },
  {
    id: "maxima-176", numero: 176, dia: 24, mes: "junho",
    original: { idioma: "italiano", texto: "Le mortificazioni esteriori aiutano moltissimo nell'acquisto della mortificazione interiore e delle altre virtù.", passagensLatinas: null },
    portugues: { texto: "As mortificações exteriores ajudam muito a adquirir a mortificação interior e as demais virtudes.", tradutor },
    tema: "mortificação exterior e interior", temasSecundarios: ["ascese", "virtudes", "disciplina"], contexto: "A disciplina exterior é apresentada como auxílio — não substituto — da transformação interior.", testemunha,
    referenciasBiblicas: [{ passagem: "mortificazioni esteriori ... interiore", referencia: "1Coríntios 9,27; Colossenses 3,5, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 19 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 19.", "A repetição de `mortificazione` foi preservada para manter a distinção exterior/interior."]
  },
  {
    id: "maxima-177", numero: 177, dia: 25, mes: "junho",
    original: { idioma: "italiano", texto: "Chi non è in grado di sopportare la perdita dell'onore, non può far profitto nelle cose dello spirito.", passagensLatinas: null },
    portugues: { texto: "Quem não é capaz de suportar a perda da honra não pode progredir nas coisas do espírito.", tradutor },
    tema: "humildade diante da honra", temasSecundarios: ["desapego", "humilhação", "vida espiritual"], contexto: "A incapacidade de suportar desonra é apresentada como obstáculo ao progresso espiritual.", testemunha,
    referenciasBiblicas: [{ passagem: "perdita dell’onore", referencia: "Filipenses 2,5-8; 1Pedro 5,5-6, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 19 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 19.", "`Profitto` foi traduzido por ‘progredir’, em continuidade com o vocabulário espiritual do corpus."]
  },
  {
    id: "maxima-178", numero: 178, dia: 26, mes: "junho",
    original: { idioma: "italiano", texto: "Di solito è meglio dare al corpo un po' più di cibo che un po' meno, perché il più si può facilmente togliere; ma quando l'uomo, per troppo poco cibo, si rovina la costituzione fisica, non può così facilmente riprendersi.", passagensLatinas: null },
    portugues: { texto: "Em geral, é melhor dar ao corpo um pouco mais de alimento que um pouco menos, porque o excesso pode ser facilmente retirado; mas, quando a pessoa arruína a constituição física por comer pouco demais, não consegue recuperar-se tão facilmente.", tradutor },
    tema: "moderação da ascese corporal", temasSecundarios: ["alimentação", "saúde", "prudência"], contexto: "A máxima recomenda prudência alimentar e alerta contra o enfraquecimento físico causado por excesso de austeridade.", testemunha,
    referenciasBiblicas: [{ passagem: "dare al corpo ... cibo", referencia: "1Coríntios 6,19-20; 1Timóteo 5,23, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 19 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 19.", "`Costituzione fisica` foi traduzido por ‘constituição física’, sem inserir diagnóstico médico."]
  },
  {
    id: "maxima-179", numero: 179, dia: 27, mes: "junho",
    original: { idioma: "italiano", texto: "Il demonio astutamente è solito incitare alle volte gli uomini spirituali alle penitenze e alle durezze, affinché con queste, fatte in modo inopportuno, si debilitino in modo che, o non possano dedicarsi alle opere di maggior frutto, o, spaventati per la malattia cui sono andati incontro, lascino i soliti esercizi e voltino le spalle al servizio di Dio.", passagensLatinas: null },
    portugues: { texto: "O demônio costuma, astutamente, incitar às vezes as pessoas espirituais às penitências e austeridades para que, praticadas de modo inoportuno, elas se debilitem a ponto de não poder dedicar-se às obras de maior fruto ou, assustadas com a doença que contraíram, abandonem os exercícios habituais e deem as costas ao serviço de Deus.", tradutor },
    tema: "prudência nas penitências", temasSecundarios: ["demônio", "saúde", "serviço de Deus"], contexto: "A austeridade sem discernimento pode enfraquecer a pessoa e afastá-la das obras de maior fruto.", testemunha,
    referenciasBiblicas: [{ passagem: "opere di maggior frutto ... servizio di Dio", referencia: "1Coríntios 9,24-27; Mateus 11,28-30, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 19 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 19.", "`Durezze` foi traduzido por ‘austeridades’, sem inventar uma prática concreta.", "A frase é uma advertência contra o excesso inoportuno, não uma rejeição da penitência em si."]
  },
  {
    id: "maxima-180", numero: 180, dia: 28, mes: "junho",
    original: { idioma: "italiano", texto: "Si debbono stimare di più coloro che, dedicandosi moderatamente alla mortificazione del corpo, pongono ogni loro impegno nel mortificare principalmente la volontà e l'intelletto, anche nelle cose minime, rispetto a quelli che si danno solamente ai rigori e alle penitenze corporali.", passagensLatinas: null },
    portugues: { texto: "Devem ser mais estimados aqueles que, dedicando-se moderadamente à mortificação do corpo, empenham-se sobretudo em mortificar a vontade e o intelecto, até nas coisas pequenas, do que aqueles que se entregam somente aos rigores e às penitências corporais.", tradutor },
    tema: "mortificação interior", temasSecundarios: ["vontade", "intelecto", "discernimento"], contexto: "A mortificação da vontade e do intelecto é considerada superior ao rigor corporal isolado.", testemunha,
    referenciasBiblicas: [{ passagem: "mortificare principalmente la volontà e l’intelletto", referencia: "Romanos 12,2; 2Coríntios 10,5, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 19 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 19.", "A comparação `più ... rispetto a` foi preservada sem transformar estima espiritual em condenação de toda penitência corporal."]
  },
  {
    id: "maxima-181", numero: 181, dia: 29, mes: "junho",
    original: { idioma: "italiano", texto: "Bisogna desiderare di fare grandi cose per il servizio di Dio, e non accontentarsi di una bontà mediocre, ma desiderare, se fosse possibile, di superare in santità e amore anche San Pietro e San Paolo.", passagensLatinas: null },
    portugues: { texto: "É preciso desejar fazer grandes coisas pelo serviço de Deus e não contentar-se com uma bondade medíocre, mas desejar, se fosse possível, superar em santidade e amor até São Pedro e São Paulo.", tradutor },
    tema: "grande desejo de santidade", temasSecundarios: ["zelo", "São Pedro", "São Paulo"], contexto: "A máxima incentiva o desejo de santidade extraordinária, sem apresentá-lo como competição humana literal.", testemunha,
    referenciasBiblicas: [{ passagem: "superar ... San Pietro e San Paolo", referencia: "1Coríntios 9,24-27; Filipenses 3,12-14, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 19 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 19.", "A menção a Pedro e Paulo foi preservada como hipérbole devocional de desejo, não como juízo sobre a santidade dos apóstolos."]
  },
  {
    id: "maxima-182", numero: 182, dia: 30, mes: "junho",
    original: { idioma: "italiano", texto: "Un tale grado di santità, benché l'uomo non stia per conseguirlo, deve però desiderarlo, per fare, almeno con il desiderio, quello che non può fare con le opere.", passagensLatinas: null },
    portugues: { texto: "Embora a pessoa não esteja prestes a alcançar tal grau de santidade, deve desejá-lo, para fazer ao menos pelo desejo aquilo que não pode fazer pelas obras.", tradutor },
    tema: "desejo de santidade", temasSecundarios: ["intenção", "zelo", "limites humanos"], contexto: "O desejo orientado para a santidade mantém a pessoa voltada para um bem que ainda não consegue realizar plenamente.", testemunha,
    referenciasBiblicas: [{ passagem: "con il desiderio ... con le opere", referencia: "Mateus 5,6; Filipenses 3,12-14, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 19 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 19.", "`Stia per conseguirlo` foi traduzido por ‘esteja prestes a alcançar’, preservando a distância entre desejo e realização."]
  },
  {
    id: "maxima-183", numero: 183, dia: 1, mes: "julho",
    original: { idioma: "italiano", texto: "Non si deve tener conto delle astinenze e dei digiuni, dove c'è la propria volontà.", passagensLatinas: null },
    portugues: { texto: "Não se devem levar em conta abstinências e jejuns quando há vontade própria.", tradutor },
    tema: "jejum sem vontade própria", temasSecundarios: ["ascese", "obediência", "mortificação"], contexto: "A austeridade exterior perde valor quando é escolhida pela própria vontade contra a obediência.", testemunha,
    referenciasBiblicas: [{ passagem: "astinenze e digiuni ... propria volontà", referencia: "1Samuel 15,22; Colossenses 2,20-23, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 20 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente nas páginas PDF 20–21.", "`Dove c’è la propria volontà` foi traduzido por ‘quando há vontade própria’, preservando o critério espiritual da máxima."]
  },
  {
    id: "maxima-184", numero: 184, dia: 2, mes: "julho",
    original: { idioma: "italiano", texto: "La Santissima Vergine è la dispensatrice di tutte le grazie che dalla bontà di Dio sono concesse ai figli di Adamo.", passagensLatinas: null },
    portugues: { texto: "A Santíssima Virgem é a dispensadora de todas as graças que, pela bondade de Deus, são concedidas aos filhos de Adão.", tradutor },
    tema: "intercessão mariana", temasSecundarios: ["Maria", "graça", "humanidade"], contexto: "A máxima exprime a doutrina devocional da intercessão universal de Maria na distribuição das graças.", testemunha,
    referenciasBiblicas: [{ passagem: "figli di Adamo", referencia: "Gênesis 3,20; Lucas 1,28-49, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 20 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 20.", "`Dispensatrice` foi traduzido por ‘dispensadora’, termo mariano tradicional, sem reduzir a função a mera intercessão informal."]
  },
  {
    id: "maxima-185", numero: 185, dia: 3, mes: "julho",
    original: { idioma: "italiano", texto: "Nel consigliarsi bisogna talvolta anche sentire il parere degli inferiori, e raccomandarsi alle loro preghiere.", passagensLatinas: null },
    portugues: { texto: "Ao pedir conselho, é preciso às vezes ouvir também a opinião dos inferiores e recomendar-se às orações deles.", tradutor },
    tema: "humildade na autoridade", temasSecundarios: ["conselho", "oração", "comunidade"], contexto: "A autoridade é convidada à humildade de ouvir os que lhe são subordinados e pedir suas orações.", testemunha,
    referenciasBiblicas: [{ passagem: "sentire il parere degli inferiori", referencia: "Filipenses 2,3-4; 1Pedro 5,5, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 20 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 20.", "`Inferiori` foi traduzido por ‘inferiores’ no sentido hierárquico histórico, sem valorizar a inferioridade pessoal."]
  },
  {
    id: "maxima-186", numero: 186, dia: 4, mes: "julho",
    original: { idioma: "italiano", texto: "L'uomo, né per scherzo né per davvero, deve mai dire parole di propria lode.", passagensLatinas: null },
    portugues: { texto: "A pessoa nunca deve, nem por brincadeira nem a sério, dizer palavras de autoelogio.", tradutor },
    tema: "evitar o autoelogio", temasSecundarios: ["humildade", "fala", "discrição"], contexto: "A humildade na fala é exigida mesmo quando o elogio de si é apresentado como brincadeira.", testemunha,
    referenciasBiblicas: [{ passagem: "parole di propria lode", referencia: "Provérbios 27,2; 2Coríntios 10,17-18, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 20 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 20.", "`Né per scherzo né per davvero` foi traduzido por ‘nem por brincadeira nem a sério’, mantendo o paralelismo."]
  },
  {
    id: "maxima-187", numero: 187, dia: 5, mes: "julho",
    original: { idioma: "italiano", texto: "Quando si è fatta qualche opera buona, ed un altro se la attribuisce, ci si deve rallegrare e riconoscerlo come un grande beneficio di Dio; o almeno non ci si deve dispiacere che qualcun altro ci abbia tolto la gloria presso gli uomini, poiché la si recuperarà con maggior onore presso Dio.", passagensLatinas: null },
    portugues: { texto: "Quando se fez alguma obra boa e outra pessoa a atribui a si mesma, deve-se alegrar e reconhecer isso como um grande benefício de Deus; ou, pelo menos, não se deve entristecer porque alguém nos tirou a glória diante dos homens, pois ela será recuperada com maior honra diante de Deus.", tradutor },
    tema: "renúncia à glória humana", temasSecundarios: ["humildade", "obras boas", "recompensa divina"], contexto: "A apropriação indevida de uma obra alheia é convertida em ocasião de renunciar à glória pública.", testemunha,
    referenciasBiblicas: [{ passagem: "gloria presso gli uomini ... presso Dio", referencia: "Mateus 6,1-4; João 5,44, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 20 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 20.", "`La gloria` foi mantida como referente à glória humana perdida e à honra divina futura."]
  },
  {
    id: "maxima-188", numero: 188, dia: 6, mes: "julho",
    original: { idioma: "italiano", texto: "Preghiamo il Signore che, se ci dà qualche virtù o qualche dono, ce lo tenga nascosto, affinché ci conserviamo in umiltà e non cogliamo l'occasione per insuperbirne.", passagensLatinas: null },
    portugues: { texto: "Peçamos ao Senhor que, se nos der alguma virtude ou algum dom, o mantenha oculto para nós, a fim de que nos conservemos na humildade e não aproveitemos a ocasião para nos ensoberbecer.", tradutor },
    tema: "humildade diante dos dons", temasSecundarios: ["oração", "carismas", "discrição"], contexto: "A ocultação dos próprios dons é pedida como proteção contra a soberba.", testemunha,
    referenciasBiblicas: [{ passagem: "virtù o qualche dono", referencia: "1Coríntios 4,7; 1Coríntios 12,4-11, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 20 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 20.", "`Ce lo tenga nascosto` foi traduzido por ‘o mantenha oculto para nós’, preservando a oração por autoconhecimento humilde."]
  },
  {
    id: "maxima-189", numero: 189, dia: 7, mes: "julho",
    original: { idioma: "misto", texto: "Non si debbono rendere pubblici, né rivelare a tutti le ispirazioni che il Signore manda, né le grazie che egli concede. Secretum meum mihi. Secretum meum mihi. (Segreto mio a me stesso. Segreto mio a me stesso).", passagensLatinas: [{ trecho: "Secretum meum mihi. Secretum meum mihi", origem: "Isaías 24,16, Vulgata; fórmula aplicada na tradição espiritual ao segredo da graça", traducao: "Meu segredo para mim. Meu segredo para mim." }] },
    portugues: { texto: "Não se devem tornar públicas nem revelar a todos as inspirações que o Senhor envia ou as graças que concede. “Meu segredo para mim. Meu segredo para mim” (segredo meu para mim mesmo; segredo meu para mim mesmo).", tradutor },
    tema: "discrição das graças", temasSecundarios: ["vanglória", "inspiração", "segredo espiritual"], contexto: "A máxima recomenda ocultar graças e inspirações para proteger a humildade e o recolhimento.", testemunha,
    referenciasBiblicas: [{ passagem: "Secretum meum mihi", referencia: "Isaías 24,16, Vulgata" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 20 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 20.", "O latim foi separado da glosa italiana e não foi traduzido como se fosse italiano.", "A origem em Isaías 24,16 é anotada como fórmula da Vulgata; a aplicação devocional da compilação é distinta do contexto profético original."]
  },
  {
    id: "maxima-190", numero: 190, dia: 8, mes: "julho",
    original: { idioma: "italiano", texto: "Affinché si fugga ogni pericolo di vanagloria, alcune devozioni particolari si facciano in camera, né si cerchino i gusti e le consolazioni spirituali nei luoghi pubblici.", passagensLatinas: null },
    portugues: { texto: "Para fugir de todo perigo de vanglória, façam-se algumas devoções particulares no quarto, sem buscar gostos e consolações espirituais em lugares públicos.", tradutor },
    tema: "recolhimento contra a vanglória", temasSecundarios: ["devoção", "discrição", "consolação"], contexto: "A devoção privada é recomendada para evitar que a prática espiritual se torne exibição pública.", testemunha,
    referenciasBiblicas: [{ passagem: "non si cerchino ... consolazioni spirituali nei luoghi pubblici", referencia: "Mateus 6,5-6, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 20 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 20.", "`Camera` foi traduzido por ‘quarto’, preservando o espaço doméstico concreto do original."]
  },
  {
    id: "maxima-191", numero: 191, dia: 9, mes: "julho",
    original: { idioma: "italiano", texto: "La vera medicina per astenersi dal peccato di superbia, è l'abbassare e comprimere la presunzione dell'animo.", passagensLatinas: null },
    portugues: { texto: "O verdadeiro remédio para abster-se do pecado da soberba é rebaixar e conter a presunção da alma.", tradutor },
    tema: "remédio contra a soberba", temasSecundarios: ["humildade", "presunção", "cura espiritual"], contexto: "A humildade ativa é apresentada como remédio contra a presunção interior.", testemunha,
    referenciasBiblicas: [{ passagem: "abbassare ... la presunzione", referencia: "Tiago 4,6; Lucas 14,11, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 20 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 20.", "`Animo` foi traduzido por ‘alma’, no sentido interior tradicional, não por humor ou disposição momentânea."]
  },
  {
    id: "maxima-192", numero: 192, dia: 10, mes: "julho",
    original: { idioma: "italiano", texto: "Quando l'uomo viene ripreso per qualche cosa, non deve addolorarsene troppo, perché molte volte è maggiore la colpa che si commette nel rattristarsi, che il peccato per cui si è ripresi.", passagensLatinas: null },
    portugues: { texto: "Quando alguém é repreendido por alguma coisa, não deve entristecer-se excessivamente, pois muitas vezes a culpa cometida ao entristecer-se é maior que o pecado pelo qual foi repreendido.", tradutor },
    tema: "aceitar a correção", temasSecundarios: ["humildade", "repreensão", "tristeza"], contexto: "A reação desordenada à correção pode tornar-se mais prejudicial que a falta inicialmente repreendida.", testemunha,
    referenciasBiblicas: [{ passagem: "rattristarsi ... essere ripresi", referencia: "Provérbios 12,1; 2Coríntios 7,9-10, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 20 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 20.", "`Ripreso` foi traduzido por ‘repreendido’, sem suavizar a dimensão corretiva da palavra."]
  },
  {
    id: "maxima-193", numero: 193, dia: 11, mes: "julho",
    original: { idioma: "italiano", texto: "Fanno ridere quelli che, avendo un po' di spirito, credono di essere qualche grande cosa.", passagensLatinas: null },
    portugues: { texto: "Fazem rir aqueles que, tendo algum espírito, julgam ser algo grandioso.", tradutor },
    tema: "ridículo da presunção", temasSecundarios: ["humildade", "vanglória", "discernimento"], contexto: "A máxima ridiculariza a presunção baseada em um dom espiritual pequeno.", testemunha,
    referenciasBiblicas: [{ passagem: "credono di essere qualche grande cosa", referencia: "Gálatas 6,3; 1Coríntios 4,7, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 20 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 20.", "`Un po’ di spirito` foi traduzido por ‘algum espírito’, sem decidir se a fonte se refere a inteligência, engenho ou fervor."]
  },
  {
    id: "maxima-194", numero: 194, dia: 12, mes: "julho",
    original: { idioma: "italiano", texto: "La vera custodia della castità è l'umiltà.", passagensLatinas: null },
    portugues: { texto: "A verdadeira guarda da castidade é a humildade.", tradutor },
    tema: "humildade e castidade", temasSecundarios: ["pureza", "vigilância", "virtude"], contexto: "A humildade é apresentada como proteção interior da castidade.", testemunha,
    referenciasBiblicas: [{ passagem: "custodia della castità ... umiltà", referencia: "Mateus 5,8; 1Coríntios 10,12, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 20 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 20.", "`Custodia` foi traduzido por ‘guarda’, preservando a imagem de vigilância."]
  },
  {
    id: "maxima-195", numero: 195, dia: 13, mes: "julho",
    original: { idioma: "italiano", texto: "Dopo la caduta, l'uomo si riconosca con queste o simili altre parole: «Se io fossi stato umile, non sarei caduto».", passagensLatinas: null },
    portugues: { texto: "Depois da queda, a pessoa reconheça isso com estas ou outras palavras semelhantes: “Se eu tivesse sido humilde, não teria caído”.", tradutor },
    tema: "humildade depois da queda", temasSecundarios: ["castidade", "arrependimento", "autoconhecimento"], contexto: "A leitura humilde da queda é proposta como reconhecimento da presunção que a precedeu.", testemunha,
    referenciasBiblicas: [{ passagem: "Se io fossi stato umile, non sarei caduto", referencia: "1Coríntios 10,12; Provérbios 16,18, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 20 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 20.", "A frase direta foi mantida na primeira pessoa, como no original."]
  },
  {
    id: "maxima-196", numero: 196, dia: 14, mes: "julho",
    original: { idioma: "italiano", texto: "Bisogna apprezzare che gli altri progrediscano nel servizio di Dio, soprattutto se sono nostri familiari o amici; e bisogna avere soddisfazione che il bene spirituale che abbiamo noi, ce l'abbiano anche loro.", passagensLatinas: null },
    portugues: { texto: "É preciso alegrar-se com o progresso dos outros no serviço de Deus, sobretudo se são nossos familiares ou amigos; e ter satisfação porque também possuem o bem espiritual que nós temos.", tradutor },
    tema: "alegria pelo bem dos outros", temasSecundarios: ["caridade", "amizade", "comunhão espiritual"], contexto: "O bem espiritual alheio, especialmente de familiares e amigos, deve ser motivo de alegria e não de inveja.", testemunha,
    referenciasBiblicas: [{ passagem: "progrediscano nel servizio di Dio", referencia: "1Coríntios 12,26; Filipenses 1,15-18, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 20 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 20.", "`Avere soddisfazione` foi traduzido por ‘ter satisfação’, no sentido de alegrar-se, não de obter vantagem."]
  },
  {
    id: "maxima-197", numero: 197, dia: 15, mes: "julho",
    original: { idioma: "italiano", texto: "Per visitare gli infermi con maggiore profitto delle anime, bisogna immaginarsi che quello che si fa all'infermo, si faccia a Cristo stesso; in questo modo, si compie quest'attività con amore e maggior profitto dell'anima.", passagensLatinas: null },
    portugues: { texto: "Para visitar os enfermos com maior proveito para as almas, é preciso imaginar que aquilo que se faz ao enfermo se faz ao próprio Cristo; desse modo, essa atividade é realizada com amor e maior proveito para a alma.", tradutor },
    tema: "visitar Cristo nos enfermos", temasSecundarios: ["misericórdia", "serviço", "Cristo"], contexto: "O cuidado do enfermo é fundamentado na identificação espiritual com o serviço prestado ao próprio Cristo.", testemunha,
    referenciasBiblicas: [{ passagem: "quello che si fa all’infermo, si faccia a Cristo stesso", referencia: "Mateus 25,36.40" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 20 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 20.", "A referência a Mateus 25,40 foi registrada como citação temática, pois a máxima parafraseia o versículo."]
  },
  {
    id: "maxima-198", numero: 198, dia: 16, mes: "julho",
    original: { idioma: "italiano", texto: "Chi per qualche indisposizione non può digiunare ad onore di Cristo e della Santissima Vergine, piacerà molto di più facendo, se può, qualche elemosina oltre il solito.", passagensLatinas: null },
    portugues: { texto: "Quem, por alguma indisposição, não pode jejuar em honra de Cristo e da Santíssima Virgem agradará muito mais fazendo, se puder, alguma esmola além do habitual.", tradutor },
    tema: "esmola em lugar do jejum", temasSecundarios: ["caridade", "jejum", "enfermidade"], contexto: "A impossibilidade de jejuar pode ser acompanhada por uma obra de misericórdia, como a esmola.", testemunha,
    referenciasBiblicas: [{ passagem: "elemosina oltre il solito", referencia: "Tobias 12,8-9; Mateus 6,1-4, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 20 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 20.", "`Indisposizione` foi traduzido por ‘indisposição’, sem diagnosticar a condição da pessoa."]
  },
  {
    id: "maxima-199", numero: 199, dia: 17, mes: "julho",
    original: { idioma: "italiano", texto: "Non c'è cosa più pericolosa ai principianti nella via dello spirito, quanto il voler fare il maestro, governare e convertire altri.", passagensLatinas: null },
    portugues: { texto: "Nada é mais perigoso para os iniciantes no caminho do espírito que querer ser mestre, governar e converter os outros.", tradutor },
    tema: "perigo de dirigir prematuramente", temasSecundarios: ["iniciantes", "humildade", "autoridade"], contexto: "A ambição de ensinar e governar os outros é apresentada como perigo para quem ainda está começando.", testemunha,
    referenciasBiblicas: [{ passagem: "voler fare il maestro ... convertire altri", referencia: "Mateus 7,3-5; Tiago 3,1, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 21 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 21.", "`Fare il maestro` foi traduzido por ‘ser mestre’, preservando a crítica à pretensão de autoridade espiritual."]
  },
  {
    id: "maxima-200", numero: 200, dia: 18, mes: "julho",
    original: { idioma: "italiano", texto: "Gli stessi principianti si dedichino a convertire sé stessi, e siano umili, affinché non sembri loro di aver fatto qualche cosa e incorrano così nella superbia.", passagensLatinas: null },
    portugues: { texto: "Esses mesmos iniciantes dediquem-se a converter a si mesmos e sejam humildes, para que não lhes pareça ter feito alguma coisa e assim incorram na soberba.", tradutor },
    tema: "conversão de si mesmo", temasSecundarios: ["iniciantes", "humildade", "conversão"], contexto: "Antes de converter os outros, o iniciante deve trabalhar na própria conversão e evitar a soberba.", testemunha,
    referenciasBiblicas: [{ passagem: "convertire sé stessi", referencia: "Mateus 7,5; 2Coríntios 13,5, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 21 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 21.", "`Qualche cosa` foi traduzido por ‘alguma coisa’, mantendo a modéstia irônica do enunciado."]
  },
  {
    id: "maxima-201", numero: 201, dia: 19, mes: "julho",
    original: { idioma: "italiano", texto: "Per aiutare il prossimo, non bisogna avere né luogo, né ora, né tempo per sé stessi.", passagensLatinas: null },
    portugues: { texto: "Para ajudar o próximo, não se deve reservar para si mesmo nem lugar, nem hora, nem tempo.", tradutor },
    tema: "dedicação ao próximo", temasSecundarios: ["caridade", "serviço", "abnegação"], contexto: "A caridade para com o próximo exige disponibilidade radical de tempo e espaço pessoal.", testemunha,
    referenciasBiblicas: [{ passagem: "aiutare il prossimo", referencia: "Lucas 10,30-37; Filipenses 2,4, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 21 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 21.", "A enumeração `né luogo, né ora, né tempo` foi mantida com ‘nem’ repetido."]
  },
  {
    id: "maxima-202", numero: 202, dia: 20, mes: "julho",
    original: { idioma: "italiano", texto: "Si fugga ogni singolarità, per lo più origine e stimolo di superbia, soprattutto spirituale.", passagensLatinas: null },
    portugues: { texto: "Evite-se toda singularidade, em geral origem e estímulo da soberba, sobretudo espiritual.", tradutor },
    tema: "evitar singularidade", temasSecundarios: ["humildade", "vida comunitária", "ascese"], contexto: "Práticas que isolam a pessoa e a fazem parecer excepcional são vistas como estímulos à soberba.", testemunha,
    referenciasBiblicas: [{ passagem: "singolarità ... superbia spirituale", referencia: "Filipenses 2,3-4; Romanos 12,16, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 21 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 21.", "`Singolarità` foi traduzido por ‘singularidade’, preservando a crítica à excepcionalidade voluntária, não à individualidade pessoal."]
  },
  {
    id: "maxima-203", numero: 203, dia: 21, mes: "julho",
    original: { idioma: "italiano", texto: "Per fuggire la vanagloria, l'uomo non si trattenga dal fare il bene.", passagensLatinas: null },
    portugues: { texto: "Para fugir da vanglória, a pessoa não deixe de fazer o bem.", tradutor },
    tema: "fazer o bem sem vanglória", temasSecundarios: ["caridade", "intenção", "humildade"], contexto: "O temor da vanglória não deve paralisar a prática do bem.", testemunha,
    referenciasBiblicas: [{ passagem: "non si trattenga dal fare il bene", referencia: "Gálatas 6,9-10; Mateus 5,16, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 21 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 21.", "`Non si trattenga` foi traduzido por ‘não deixe de’, preservando o caráter de exortação prática."]
  },
  {
    id: "maxima-204", numero: 204, dia: 22, mes: "julho",
    original: { idioma: "italiano", texto: "L'amore di Dio fa operare cose grandi.", passagensLatinas: null },
    portugues: { texto: "O amor de Deus leva a realizar grandes coisas.", tradutor },
    tema: "amor de Deus e ação", temasSecundarios: ["zelo", "virtude", "obras"], contexto: "A caridade divina é apresentada como força operante de grandes obras.", testemunha,
    referenciasBiblicas: [{ passagem: "amore di Dio fa operare cose grandi", referencia: "1Coríntios 13,1-7; João 14,15, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 21 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 21.", "`Fa operare` foi traduzido por ‘leva a realizar’, explicitando a relação causal sem perder a brevidade."]
  },
  {
    id: "maxima-205", numero: 205, dia: 23, mes: "julho",
    original: { idioma: "italiano", texto: "Si distinguono tre tipi di vanagloria: la prima si chiama “padrona”, ed è quando la vanagloria precede le opere e l'opera si fa per quel fine; la seconda si chiama “compagna”, ed è quando l'uomo non compie l'opera per fine di vanagloria, ma nel farla sente compiacenza; la terza si chiama “serva”, ed è quando nel far l'opera sorge la vanagloria, ma la persona subito la reprime. Soprattutto la vanagloria non sia padrona.", passagensLatinas: null },
    portugues: { texto: "Distinguem-se três tipos de vanglória. A primeira chama-se “senhora”: ocorre quando a vanglória precede as obras e a obra é feita com esse fim. A segunda chama-se “companheira”: ocorre quando a pessoa não realiza a obra por vanglória, mas sente complacência ao fazê-la. A terceira chama-se “serva”: ocorre quando a vanglória surge durante a obra, mas a pessoa a reprime imediatamente. Sobretudo, a vanglória não seja senhora.", tradutor },
    tema: "três tipos de vanglória", temasSecundarios: ["intenção", "humildade", "discernimento"], contexto: "A tipologia distingue vanglória como finalidade, como satisfação acompanhante e como impulso reprimido.", testemunha,
    referenciasBiblicas: [{ passagem: "vanagloria padrona, compagna e serva", referencia: "Mateus 6,1-4; Gálatas 6,14, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 21 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 21.", "`Padrona`, `compagna` e `serva` foram traduzidas por ‘senhora’, ‘companheira’ e ‘serva’, preservando a hierarquia metafórica.", "A distinção é mantida em parágrafos na tradução para tornar legível a estrutura única do original."]
  },
  {
    id: "maxima-206", numero: 206, dia: 24, mes: "julho",
    original: { idioma: "italiano", texto: "La vanagloria quando è “compagna” non toglie il merito, sebbene la perfezione esiga che sia “serva”.", passagensLatinas: null },
    portugues: { texto: "Quando é “companheira”, a vanglória não elimina o mérito, embora a perfeição exija que ela seja “serva”.", tradutor },
    tema: "vanglória acompanhante", temasSecundarios: ["mérito", "intenção", "perfeição"], contexto: "A vanglória que aparece como satisfação secundária não elimina o mérito, mas deve ser reduzida à condição de impulso reprimido.", testemunha,
    referenciasBiblicas: [{ passagem: "vanagloria compagna ... serva", referencia: "Mateus 6,1-4; 1Coríntios 4,5, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 21 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 21.", "Os termos entre aspas foram mantidos em continuidade com a máxima 204."]
  },
  {
    id: "maxima-207", numero: 207, dia: 25, mes: "julho",
    original: { idioma: "italiano", texto: "Chi opera solamente per gloria di Dio, non desidera altro che il suo onore, e così è disposto a fare o non fare in tutto, non solo nelle cose indifferenti ma anche in quelle buone, ed è sempre abbandonato alla sua volontà.", passagensLatinas: null },
    portugues: { texto: "Quem age somente pela glória de Deus não deseja outra coisa senão a honra dele e está disposto a fazer ou não fazer tudo, não apenas nas coisas indiferentes, mas também nas boas, permanecendo sempre abandonado à sua vontade.", tradutor },
    tema: "pureza de intenção", temasSecundarios: ["glória de Deus", "abandono", "obediência"], contexto: "A intenção pura torna a pessoa disponível para agir ou deixar de agir conforme a vontade de Deus.", testemunha,
    referenciasBiblicas: [{ passagem: "gloria di Dio ... sua volontà", referencia: "1Coríntios 10,31; Mateus 6,10, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 21 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 21.", "`Abbandonato alla sua volontà` foi traduzido por ‘abandonado à sua vontade’, preservando o sentido de entrega espiritual."]
  },
  {
    id: "maxima-208", numero: 208, dia: 26, mes: "julho",
    original: { idioma: "italiano", texto: "Il Signore concede in un momento quello che non si è potuto ottenere in decine di anni.", passagensLatinas: null },
    portugues: { texto: "O Senhor concede num instante aquilo que não se pôde obter em dezenas de anos.", tradutor },
    tema: "tempo da graça", temasSecundarios: ["providência", "paciência", "conversão"], contexto: "A graça divina pode conceder subitamente o que o esforço prolongado não alcançou.", testemunha,
    referenciasBiblicas: [{ passagem: "concede in un momento", referencia: "Lucas 23,39-43; João 5,1-9, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 21 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 21.", "`Decine di anni` foi traduzido por ‘dezenas de anos’, sem quantificação mais precisa."]
  },
  {
    id: "maxima-209", numero: 209, dia: 27, mes: "julho",
    original: { idioma: "italiano", texto: "Per acquistare perfettamente il dono dell'umiltà, sono necessarie quattro cose: disprezzare il mondo, non disprezzare nessuno, disprezzare sé stessi, disprezzare di essere disprezzato.", passagensLatinas: null },
    portugues: { texto: "Para adquirir perfeitamente o dom da humildade, são necessárias quatro coisas: desprezar o mundo, não desprezar ninguém, desprezar a si mesmo e desprezar ser desprezado.", tradutor },
    tema: "quatro aspectos da humildade", temasSecundarios: ["mundo", "humilhação", "caridade"], contexto: "A máxima apresenta quatro movimentos paradoxais de desapego do mundo e renúncia ao amor-próprio, sem desprezo pelo próximo.", testemunha,
    referenciasBiblicas: [{ passagem: "disprezzare il mondo ... non disprezzare nessuno", referencia: "Filipenses 2,3; Gálatas 6,14; 1João 2,15, como síntese" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 21 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 21.", "A repetição de `disprezzare` foi mantida; `disprezzare di essere disprezzato` foi traduzido como ‘desprezar ser desprezado’."]
  },
  {
    id: "maxima-210", numero: 210, dia: 28, mes: "julho",
    original: { idioma: "italiano", texto: "La perfezione consiste nel costringere la propria volontà, e nel comportarsi come chi ha autorità.", passagensLatinas: null },
    portugues: { texto: "A perfeição consiste em constranger a própria vontade e comportar-se como quem tem autoridade.", tradutor },
    tema: "domínio da vontade", temasSecundarios: ["perfeição", "autoridade", "obediência"], contexto: "A máxima associa a perfeição ao domínio da própria vontade e a uma conduta firme e responsável.", testemunha,
    referenciasBiblicas: [{ passagem: "costringere la propria volontà", referencia: "Mateus 16,24; 1Coríntios 9,27, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 21 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 21.", "`Costringere` foi traduzido por ‘constranger’, conservando a força do original sem convertê-la em violência contra si."]
  },
  {
    id: "maxima-211", numero: 211, dia: 29, mes: "julho",
    original: { idioma: "italiano", texto: "L'uomo deve mortificare la razionale nelle cose piccole, se vuole facilmente mortificarsi nelle cose grandi e progredire nella via delle virtù.", passagensLatinas: null },
    portugues: { texto: "A pessoa deve mortificar a razão nas coisas pequenas, se quiser mortificar-se facilmente nas coisas grandes e progredir no caminho das virtudes.", tradutor },
    tema: "mortificação nas coisas pequenas", temasSecundarios: ["razão", "disciplina", "virtudes"], contexto: "A máxima estabelece uma disciplina gradual: a mortificação em pequenas coisas prepara para as grandes.", testemunha,
    referenciasBiblicas: [{ passagem: "nelle cose piccole ... nelle cose grandi", referencia: "Lucas 16,10; 1Coríntios 9,25-27, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 21 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 21.", "A fonte impressa traz a construção sintaticamente estranha `mortificare la razionale`; ela foi preservada no italiano estabelecido, sem emenda conjectural, e traduzida contextualmente como ‘mortificar a razão’."]
  },
  {
    id: "maxima-212", numero: 212, dia: 30, mes: "julho",
    original: { idioma: "italiano", texto: "Senza la mortificazione non si fa niente.", passagensLatinas: null },
    portugues: { texto: "Sem a mortificação não se faz nada.", tradutor },
    tema: "necessidade da mortificação", temasSecundarios: ["disciplina", "ascese", "virtude"], contexto: "A máxima encerra julho com uma fórmula absoluta sobre a necessidade da mortificação para a vida virtuosa.", testemunha,
    referenciasBiblicas: [{ passagem: "Senza la mortificazione non si fa niente", referencia: "Lucas 9,23; Gálatas 5,24, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 21 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 21.", "A frase foi traduzida diretamente e não deve ser confundida com o erro documentado `Nada morre sine linea` da máxima 2."]
  },
  {
    id: "maxima-213", numero: 213, dia: 31, mes: "julho",
    original: { idioma: "italiano", texto: "Dobbiamo sperare ed amare la gloria di Dio, mediante una buona vita.", passagensLatinas: null },
    portugues: { texto: "Devemos esperar e amar a glória de Deus por meio de uma vida boa.", tradutor },
    tema: "glória de Deus e vida boa", temasSecundarios: ["esperança", "caridade", "virtude"], contexto: "A esperança e o amor da glória de Deus devem manifestar-se numa vida moralmente boa.", testemunha,
    referenciasBiblicas: [{ passagem: "gloria di Dio, mediante una buona vita", referencia: "Mateus 5,16; 1Coríntios 10,31, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 21 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 21.", "`Buona vita` foi traduzido por ‘vida boa’, preservando a fórmula sem introduzir linguagem moralista moderna."]
  },
  {
    id: "maxima-214", numero: 214, dia: 1, mes: "agosto",
    original: { idioma: "italiano", texto: "San Pietro, gli Apostoli e altri uomini apostolici, vedendo il Figlio di Dio nascere povero, vivere senza alcuna cosa propria, che non aveva neppure dove poggiare la testa, e contemplandolo morto nudo sopra una croce, si spogliarono anche loro e abbracciarono la strada dei consigli evangelici.", passagensLatinas: null },
    portugues: { texto: "São Pedro, os Apóstolos e outros homens apostólicos, vendo o Filho de Deus nascer pobre, viver sem nada próprio, sem sequer ter onde repousar a cabeça, e contemplando-o morto, nu, sobre uma cruz, também se despojaram e abraçaram o caminho dos conselhos evangélicos.", tradutor },
    tema: "conselhos evangélicos", temasSecundarios: ["pobreza", "São Pedro", "Apóstolos"], contexto: "A pobreza e a cruz de Cristo são apresentadas como fundamento da escolha apostólica dos conselhos evangélicos.", testemunha,
    referenciasBiblicas: [{ passagem: "não tinha onde repousar a cabeça", referencia: "Mateus 8,20; Lucas 9,58" }, { passagem: "conselhos evangélicos", referencia: "Mateus 19,21; Marcos 10,21, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 22 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 22.", "`Si spogliarono` foi traduzido por ‘se despojaram’, preservando a imagem de renúncia apostólica."]
  },
  {
    id: "maxima-215", numero: 215, dia: 2, mes: "agosto",
    original: { idioma: "italiano", texto: "Non c'è cosa che provochi prima il disprezzo del mondo e operi maggiore unione dell'anima con Dio, quanto l'essere travagliato e angustiato.", passagensLatinas: null },
    portugues: { texto: "Nada provoca mais depressa o desprezo do mundo e produz maior união da alma com Deus que estar atribulado e angustiado.", tradutor },
    tema: "tribulação e união com Deus", temasSecundarios: ["sofrimento", "desapego", "união"], contexto: "A tribulação é apresentada como meio de desapego do mundo e de união interior com Deus.", testemunha,
    referenciasBiblicas: [{ passagem: "travagliato e angustiato", referencia: "2Coríntios 4,17-18; Romanos 5,3-5, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 22 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 22.", "`Disprezzo del mondo` foi traduzido por ‘desprezo do mundo’, sem indicar desprezo pelas pessoas."]
  },
  {
    id: "maxima-216", numero: 216, dia: 3, mes: "agosto",
    original: { idioma: "italiano", texto: "In questa vita non c'è purgatorio, ma inferno o paradiso: perché per chi serve veramente Dio, ogni travaglio e infermità torna in consolazione; ed ha il paradiso interiormente in ogni genere di disagio, anche in questo mondo; chi fa il contrario e vuole dedicarsi ai piaceri sensibili, ha l'inferno in questo mondo e nell'altro.", passagensLatinas: null },
    portugues: { texto: "Nesta vida não há purgatório, mas inferno ou paraíso: para quem verdadeiramente serve a Deus, toda tribulação e enfermidade se transforma em consolação e essa pessoa tem interiormente o paraíso em todo tipo de dificuldade, também neste mundo; quem faz o contrário e quer entregar-se aos prazeres sensíveis tem o inferno neste mundo e no outro.", tradutor },
    tema: "paraíso e inferno interiores", temasSecundarios: ["sofrimento", "consolação", "serviço de Deus"], contexto: "A máxima formula uma leitura espiritual da experiência presente como antecipação interior de paraíso ou inferno.", testemunha,
    referenciasBiblicas: [{ passagem: "inferno o paradiso ... in questo mondo e nell’altro", referencia: "Lucas 16,19-31; João 15,9-11, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 22 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 22.", "A formulação é mantida como testemunho devocional histórico; não se transforma em definição sistemática da escatologia católica."]
  },
  {
    id: "maxima-217", numero: 217, dia: 4, mes: "agosto",
    original: { idioma: "italiano", texto: "Per trarre profitto dagli insegnamenti delle vite dei Santi e di altri libri spirituali, non si deve leggere per curiosità, né scorrendo, ma tranquillamente; e quando la persona sente infiammarsi, non deve passare oltre, ma fermarsi e seguire lo spirito; e quando non ne sente più desiderio, continuare.", passagensLatinas: null },
    portugues: { texto: "Para tirar proveito dos ensinamentos das vidas dos Santos e de outros livros espirituais, não se deve ler por curiosidade nem passar os olhos rapidamente, mas com tranquilidade. Quando a pessoa sentir o coração inflamado, não deve avançar, mas parar e seguir o espírito; quando já não sentir esse desejo, deve continuar.", tradutor },
    tema: "leitura espiritual", temasSecundarios: ["Santos", "discernimento", "oração"], contexto: "A leitura espiritual é orientada pelo recolhimento e pelo movimento interior suscitado pelo texto.", testemunha,
    referenciasBiblicas: [{ passagem: "seguire lo spirito", referencia: "Colossenses 3,16; 2Timóteo 3,15-17, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 22 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 22.", "`Scorrendo` foi traduzido por ‘passar os olhos rapidamente’, explicitando a leitura superficial sem inserir tecnologia moderna."]
  },
  {
    id: "maxima-218", numero: 218, dia: 5, mes: "agosto",
    original: { idioma: "italiano", texto: "Per cominciare e finire bene, è necessaria la devozione della Santissima Vergine Madre di Dio.", passagensLatinas: null },
    portugues: { texto: "Para começar e terminar bem, é necessária a devoção à Santíssima Virgem, Mãe de Deus.", tradutor },
    tema: "devoção mariana", temasSecundarios: ["Maria", "perseverança", "vida espiritual"], contexto: "A devoção mariana é apresentada como auxílio para o início e a perseverança até o fim.", testemunha,
    referenciasBiblicas: [{ passagem: "Santissima Vergine Madre di Dio", referencia: "Lucas 1,43.48; João 2,1-11, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 22 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 22.", "O título `Madre di Dio` foi mantido como ‘Mãe de Deus’, sem substituição por formulação genérica."]
  },
  {
    id: "maxima-219", numero: 219, dia: 6, mes: "agosto",
    original: { idioma: "italiano", texto: "Non è tempo di dormire, perché il paradiso non è fatto per i poltroni.", passagensLatinas: null },
    portugues: { texto: "Não é tempo de dormir, porque o paraíso não foi feito para os preguiçosos.", tradutor },
    tema: "vigilância espiritual", temasSecundarios: ["paraíso", "disciplina", "zelo"], contexto: "A imagem da vigília combate a preguiça espiritual e incentiva o empenho no caminho da salvação.", testemunha,
    referenciasBiblicas: [{ passagem: "non è tempo di dormire", referencia: "Romanos 13,11-12; Mateus 25,1-13, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 22 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 22.", "`Poltroni` foi traduzido por ‘preguiçosos’, mantendo a ironia da fonte."]
  },
  {
    id: "maxima-220", numero: 220, dia: 7, mes: "agosto",
    original: { idioma: "italiano", texto: "Bisogna aver fiducia in Dio, il quale è colui che è sempre stato; e non bisogna sgomentarsi per qualcosa che accada in contrario.", passagensLatinas: null },
    portugues: { texto: "É preciso confiar em Deus, que é aquele que sempre foi; não se deve desanimar por coisa alguma que aconteça em contrário.", tradutor },
    tema: "confiança em Deus", temasSecundarios: ["providência", "perseverança", "esperança"], contexto: "A eternidade e a constância de Deus fundamentam a confiança diante dos acontecimentos adversos.", testemunha,
    referenciasBiblicas: [{ passagem: "colui che è sempre stato", referencia: "Êxodo 3,14; Apocalipse 1,8, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 22 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 22.", "`Sgomentalarsi` foi traduzido por ‘desanimar’, preservando a reação interior de medo e abatimento."]
  },
  {
    id: "maxima-221", numero: 221, dia: 8, mes: "agosto",
    original: { idioma: "italiano", texto: "Gli uomini non passino da uno stato buono ad un altro, benché migliore, senza grande riflessione.", passagensLatinas: null },
    portugues: { texto: "As pessoas não passem de um estado bom para outro, ainda que melhor, sem grande reflexão.", tradutor },
    tema: "prudência nas mudanças de estado", temasSecundarios: ["discernimento", "vocação", "prudência"], contexto: "Mudanças aparentemente melhores exigem discernimento sério, não apenas entusiasmo.", testemunha,
    referenciasBiblicas: [{ passagem: "passare da uno stato buono ad un altro", referencia: "Lucas 14,28-32; 1Coríntios 7,17, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 22 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 22.", "`Stato` foi traduzido por ‘estado’, preservando o provável sentido vocacional e de condição de vida."]
  },
  {
    id: "maxima-222", numero: 222, dia: 9, mes: "agosto",
    original: { idioma: "italiano", texto: "Ciascuno stia a casa sua, cioè dentro sé stesso, considerando le sue azioni, e non esca fuori esaminando e ricercando quelle degli altri.", passagensLatinas: null },
    portugues: { texto: "Cada pessoa permaneça em sua própria casa, isto é, dentro de si mesma, considerando as próprias ações, e não saia para examinar e investigar as dos outros.", tradutor },
    tema: "exame de si", temasSecundarios: ["interioridade", "humildade", "juízo do próximo"], contexto: "A imagem de permanecer em casa significa examinar a própria conduta em vez de investigar a dos outros.", testemunha,
    referenciasBiblicas: [{ passagem: "dentro sé stesso ... quelle degli altri", referencia: "Mateus 7,1-5; 2Coríntios 13,5, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 22 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 22.", "`Casa sua` foi mantido como imagem metafórica e explicado por ‘dentro de si mesma’. "]
  },
  {
    id: "maxima-223", numero: 223, dia: 10, mes: "agosto",
    original: { idioma: "italiano", texto: "I veri servi di Dio hanno la vita in pazienza e la morte in desiderio.", passagensLatinas: null },
    portugues: { texto: "Os verdadeiros servos de Deus têm a vida na paciência e a morte no desejo.", tradutor },
    tema: "paciência na vida e desejo da morte", temasSecundarios: ["perseverança", "vida eterna", "serviço"], contexto: "A vida presente é sustentada pela paciência e a morte é desejada como passagem para Deus.", testemunha,
    referenciasBiblicas: [{ passagem: "vita in pazienza e morte in desiderio", referencia: "Romanos 8,23; Filipenses 1,23, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 22 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 22.", "A tradução mantém o paralelismo conciso entre ‘vida’ e ‘morte’. "]
  },
  {
    id: "maxima-224", numero: 224, dia: 11, mes: "agosto",
    original: { idioma: "italiano", texto: "Non c'è cosa più bella, quanto fare di necessità virtù.", passagensLatinas: null },
    portugues: { texto: "Não há coisa mais formosa que transformar a necessidade em virtude.", tradutor },
    tema: "transformar necessidade em virtude", temasSecundarios: ["paciência", "sofrimento", "virtude"], contexto: "A máxima elogia a conversão de uma necessidade inevitável em ocasião virtuosa.", testemunha,
    referenciasBiblicas: [{ passagem: "fare di necessità virtù", referencia: "Romanos 5,3-5; Filipenses 4,11-13, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 22 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 22.", "`Bella` foi traduzido por ‘formosa’, evitando o termo editorialmente proibido e preservando o valor elogioso."]
  },
  {
    id: "maxima-225", numero: 225, dia: 12, mes: "agosto",
    original: { idioma: "italiano", texto: "È segno di spirito buono conservare l'allegria fra le infermità e le necessità.", passagensLatinas: null },
    portugues: { texto: "É sinal de bom espírito conservar a alegria em meio às enfermidades e necessidades.", tradutor },
    tema: "alegria nas necessidades", temasSecundarios: ["enfermidade", "paciência", "espírito"], contexto: "A alegria perseverante em meio à doença e à carência é lida como sinal de maturidade espiritual.", testemunha,
    referenciasBiblicas: [{ passagem: "allegria fra le infermità e le necessità", referencia: "2Coríntios 6,10; Filipenses 4,4, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 22 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 22.", "`Spirito buono` foi traduzido por ‘bom espírito’, preservando a expressão espiritual sem psicologização."]
  },
  {
    id: "maxima-226", numero: 226, dia: 13, mes: "agosto",
    original: { idioma: "italiano", texto: "L'uomo non chieda a Dio le tribolazioni, credendo di poterle sopportare; in questo vada con grandissima cautela, perché egli non riesce a sopportare neppure quelle che Dio giornalmente gli manda.", passagensLatinas: null },
    portugues: { texto: "A pessoa não peça a Deus tribulações, julgando que poderá suportá-las; deve agir com enorme cautela nesse ponto, pois não consegue suportar sequer aquelas que Deus lhe envia diariamente.", tradutor },
    tema: "prudência no desejo de sofrimento", temasSecundarios: ["tribulação", "humildade", "discernimento"], contexto: "A máxima adverte contra desejar provas extraordinárias por presunção de força espiritual.", testemunha,
    referenciasBiblicas: [{ passagem: "non chieda ... le tribolazioni", referencia: "Mateus 6,13; 1Coríntios 10,12-13, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 22 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 22.", "`Tribolazioni` foi traduzido por ‘tribulações’, termo tradicional que inclui sofrimentos e provas."]
  },
  {
    id: "maxima-227", numero: 227, dia: 14, mes: "agosto",
    original: { idioma: "italiano", texto: "Quelli che sono abituati da lungo tempo nel servizio di Dio, nell'orazione possono immaginarsi che gli vengano fatte molte ingiurie, come schiaffi, ferite e cose simili, e con grande carità, ad imitazione di Cristo, facciano in modo di abituare il loro cuore a rimettere davvero quelle ingiurie agli offensori.", passagensLatinas: null },
    portugues: { texto: "Aqueles que há muito tempo estão habituados ao serviço de Deus podem, na oração, imaginar que lhes são feitas muitas injúrias, como bofetadas, feridas e coisas semelhantes, e, com grande caridade, à imitação de Cristo, procurar habituar o coração a perdoar verdadeiramente essas injúrias aos ofensores.", tradutor },
    tema: "perdão na imitação de Cristo", temasSecundarios: ["oração", "caridade", "ofensas"], contexto: "A oração é usada para ensaiar interiormente o perdão de ofensas graves à imitação de Cristo.", testemunha,
    referenciasBiblicas: [{ passagem: "rimettere ... agli offensori", referencia: "Lucas 23,34; Mateus 5,44, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 22 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 22.", "`Rimettere` foi traduzido por ‘perdoar’, pois o objeto são injúrias dirigidas aos ofensores."]
  },
  {
    id: "maxima-228", numero: 228, dia: 15, mes: "agosto",
    original: { idioma: "italiano", texto: "Pensiamo a Maria, che è quella Vergine ineffabile, quella gloriosa Donna, che concepì e partorì, senza danno della sua verginità, nel suo ventre, quello che non può contenere dentro di sé la larghezza del cielo.", passagensLatinas: null },
    portugues: { texto: "Pensemos em Maria, a Virgem inefável, a gloriosa Mulher que concebeu e deu à luz, sem dano de sua virgindade, em seu ventre, aquele que nem a vastidão do céu pode conter dentro de si.", tradutor },
    tema: "Maria e a Encarnação", temasSecundarios: ["virgindade", "Cristo", "contemplação"], contexto: "A máxima contempla o mistério da Encarnação e a virgindade de Maria por meio de linguagem hiperbólica.", testemunha,
    referenciasBiblicas: [{ passagem: "concepì e partorì ... senza danno della sua verginità", referencia: "Lucas 1,26-38; Mateus 1,23, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 22 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 22.", "`Larghezza del cielo` foi traduzido por ‘vastidão do céu’, preservando a imagem cósmica sem literalismo estranho."]
  },
  {
    id: "maxima-229", numero: 229, dia: 16, mes: "agosto",
    original: { idioma: "italiano", texto: "Il vero servo di Dio non conosce altra patria che il cielo.", passagensLatinas: null },
    portugues: { texto: "O verdadeiro servo de Deus não conhece outra pátria senão o céu.", tradutor },
    tema: "pátria celeste", temasSecundarios: ["peregrinação", "vida eterna", "serviço"], contexto: "A identidade do servo de Deus é orientada para a pátria celeste, acima das pertenças temporais.", testemunha,
    referenciasBiblicas: [{ passagem: "altra patria che il cielo", referencia: "Filipenses 3,20; Hebreus 11,13-16, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 23 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 23.", "`Patria` foi traduzido por ‘pátria’, preservando o sentido de pertença e não apenas de destino."]
  },
  {
    id: "maxima-230", numero: 230, dia: 17, mes: "agosto",
    original: { idioma: "italiano", texto: "Quando Dio manda all'anima dei gusti straordinari, l'uomo si deve preparare a qualche grande tribolazione o tentazione.", passagensLatinas: null },
    portugues: { texto: "Quando Deus envia à alma consolações extraordinárias, a pessoa deve preparar-se para alguma grande tribulação ou tentação.", tradutor },
    tema: "discernimento das consolações", temasSecundarios: ["oração", "tentação", "provação"], contexto: "Consolações extraordinárias são acompanhadas de advertência e preparação para provas.", testemunha,
    referenciasBiblicas: [{ passagem: "gusti straordinari ... tribolazione o tentazione", referencia: "1Coríntios 10,12-13; 2Coríntios 12,7-10, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 23 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 23.", "`Gusti` foi traduzido por ‘consolações’, em continuidade com o contexto de oração, não por ‘sabores’ literais."]
  },
  {
    id: "maxima-231", numero: 231, dia: 18, mes: "agosto",
    original: { idioma: "italiano", texto: "In questi gusti straordinari bisogna essere attentissimi, perché vi si nasconde il pericolo del peccato; però chi ha simili gusti deve subito umiliarsi e pregare che il pericolo imminente non sia peccato mortale, ma un altro tipo di tribolazione che non separi dalla grazia di Dio, e che in essa non si rechi offesa neppure venialmente.", passagensLatinas: null },
    portugues: { texto: "Nessas consolações extraordinárias é preciso estar muito atento, porque nelas se esconde o perigo do pecado. Quem tem semelhantes consolações deve humilhar-se imediatamente e rezar para que o perigo iminente não seja pecado mortal, mas outro tipo de tribulação que não o separe da graça de Deus e na qual não cometa ofensa sequer venialmente.", tradutor },
    tema: "cautela nas experiências espirituais", temasSecundarios: ["discernimento", "humildade", "pecado"], contexto: "A experiência espiritual extraordinária exige humildade e discernimento cuidadoso sobre o risco moral.", testemunha,
    referenciasBiblicas: [{ passagem: "non separi dalla grazia di Dio", referencia: "Romanos 8,35-39; 1Coríntios 10,12, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 23 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 23.", "`Gusti` foi mantido coerentemente como ‘consolações’.", "A distinção entre pecado mortal e venial é preservada como vocabulário histórico da fonte."]
  },
  {
    id: "maxima-232", numero: 232, dia: 19, mes: "agosto",
    original: { idioma: "italiano", texto: "Per l'acquisto della perseveranza, ottimo mezzo è la discrezione; non bisogna voler fare ogni cosa in un giorno, né voler diventare santo in quattro giorni.", passagensLatinas: null },
    portugues: { texto: "Para adquirir a perseverança, um excelente meio é a discrição; não se deve querer fazer tudo num dia nem tornar-se santo em quatro dias.", tradutor },
    tema: "discrição e perseverança", temasSecundarios: ["paciência", "formação", "santidade"], contexto: "O crescimento espiritual exige ritmo prudente, não pressa de realizar tudo de uma vez.", testemunha,
    referenciasBiblicas: [{ passagem: "non voler diventare santo in quattro giorni", referencia: "Lucas 14,28-30; Gálatas 6,9, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 23 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 23.", "A hipérbole ‘em quatro dias’ foi mantida, sem atualizar para uma expressão idiomática moderna."]
  },
  {
    id: "maxima-233", numero: 233, dia: 20, mes: "agosto",
    original: { idioma: "italiano", texto: "Nelle abitudini di San Bernardo, ad esempio, si deve amare la povertà, ma non però la trascuratezza.", passagensLatinas: null },
    portugues: { texto: "Tomando como exemplo os hábitos de São Bernardo, deve-se amar a pobreza, mas não a negligência.", tradutor },
    tema: "pobreza sem negligência", temasSecundarios: ["São Bernardo", "sobriedade", "ordem"], contexto: "A pobreza religiosa é distinguida da desordem ou do descuido pessoal.", testemunha,
    referenciasBiblicas: [{ passagem: "amare la povertà, ma non la trascuratezza", referencia: "Mateus 6,25-34; 1Timóteo 6,6-8, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 23 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 23.", "`Abitudini` foi traduzido por ‘hábitos’, não por ‘costumes’ genéricos, porque se refere ao modo de vida de São Bernardo."]
  },
  {
    id: "maxima-234", numero: 234, dia: 21, mes: "agosto",
    original: { idioma: "italiano", texto: "Chi vuole progredire nello spirito, non tralasci negligentemente i suoi difetti senza esame particolare, anche fuori del tempo della confessione sacramentale.", passagensLatinas: null },
    portugues: { texto: "Quem quer progredir no espírito não negligencie os próprios defeitos sem um exame particular, mesmo fora do tempo da Confissão sacramental.", tradutor },
    tema: "exame particular", temasSecundarios: ["consciência", "Confissão", "formação"], contexto: "O exame dos próprios defeitos deve continuar além do momento específico da Confissão.", testemunha,
    referenciasBiblicas: [{ passagem: "esame particolare", referencia: "2Coríntios 13,5; 1Coríntios 11,28, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 23 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 23.", "`Esame particolare` foi traduzido por ‘exame particular’, termo de método espiritual."]
  },
  {
    id: "maxima-235", numero: 235, dia: 22, mes: "agosto",
    original: { idioma: "italiano", texto: "Non bisogna attaccarsi tanto ai mezzi, che l'uomo si scordi del fine; e non conviene dedicarsi tanto a mortificare la carne, che si rinunci a mortificare il cervello, che è il principale.", passagensLatinas: null },
    portugues: { texto: "Não se deve apegar tanto aos meios que a pessoa se esqueça do fim; nem convém dedicar-se tanto a mortificar a carne que se renuncie a mortificar o cérebro, que é o principal.", tradutor },
    tema: "meios e fim da ascese", temasSecundarios: ["mortificação", "discernimento", "integração"], contexto: "A máxima adverte que os meios ascéticos não devem obscurecer o fim nem substituir a transformação interior.", testemunha,
    referenciasBiblicas: [{ passagem: "mezzi ... fine", referencia: "Mateus 23,23-24; Colossenses 2,20-23, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 23 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 23.", "`Cervello` foi traduzido por ‘cérebro’, preservando a imagem concreta da fonte; o contexto indica a mente e a vontade."]
  },
  {
    id: "maxima-236", numero: 236, dia: 23, mes: "agosto",
    original: { idioma: "italiano", texto: "Bisogna desiderare le virtù dei Prelati, dei Cardinali, dei Papi, ma non le loro grandezze.", passagensLatinas: null },
    portugues: { texto: "É preciso desejar as virtudes dos Prelados, dos Cardeais e dos Papas, mas não a grandeza de suas posições.", tradutor },
    tema: "virtude acima da dignidade", temasSecundarios: ["autoridade eclesial", "humildade", "vocação"], contexto: "A máxima distingue as virtudes pessoais das honras e grandezas ligadas aos cargos eclesiásticos.", testemunha,
    referenciasBiblicas: [{ passagem: "virtù ... non le loro grandezze", referencia: "Mateus 20,25-28; Marcos 10,42-45, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 23 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 23.", "`Grandezze` foi traduzido por ‘grandeza de suas posições’, explicitando que não se trata de negar a dignidade sacramental."]
  },
  {
    id: "maxima-237", numero: 237, dia: 24, mes: "agosto",
    original: { idioma: "italiano", texto: "La pelle dell'amor proprio è molto fortemente attaccata sopra il nostro cuore, e fa male scorticarla; e quanto più scendiamo nel vivo, più è sensibile e difficile.", passagensLatinas: null },
    portugues: { texto: "A pele do amor-próprio está fortemente aderida sobre o nosso coração, e dói arrancá-la; quanto mais descemos até a carne viva, mais sensível e difícil se torna.", tradutor },
    tema: "despojamento do amor-próprio", temasSecundarios: ["humildade", "mortificação", "interioridade"], contexto: "A metáfora da pele aderida descreve a dificuldade crescente de remover o amor-próprio.", testemunha,
    referenciasBiblicas: [{ passagem: "pelle dell’amor proprio ... cuore", referencia: "Ezequiel 36,26; Salmo 50(51),12, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 23 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 23.", "`Scorticarla` foi traduzido por ‘arrancá-la’, preservando a imagem física sem criar uma prática ascética específica."]
  },
  {
    id: "maxima-238", numero: 238, dia: 25, mes: "agosto",
    original: { idioma: "italiano", texto: "Questo primo passo che noi stessi avremmo dovuto già fare, lo abbiamo sempre in mente, ma non lo mettiamo mai in pratica.", passagensLatinas: null },
    portugues: { texto: "Esse primeiro passo que nós mesmos já deveríamos ter dado está sempre em nossa mente, mas nunca o colocamos em prática.", tradutor },
    tema: "prática dos bons propósitos", temasSecundarios: ["conversão", "ação", "procrastinação"], contexto: "A máxima critica a distância entre reconhecer o primeiro passo e efetivamente realizá-lo.", testemunha,
    referenciasBiblicas: [{ passagem: "non lo mettiamo mai in pratica", referencia: "Tiago 1,22-25; Mateus 7,24-27, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 23 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 23.", "`Primo passo` foi mantido como imagem de início da conversão, sem especificar qual ação falta."]
  },
  {
    id: "maxima-239", numero: 239, dia: 26, mes: "agosto",
    original: { idioma: "italiano", texto: "L'uomo provveda a mettere in pratica i buoni propositi, e a non cambiarli con leggerezza.", passagensLatinas: null },
    portugues: { texto: "A pessoa procure pôr em prática os bons propósitos e não os mude levianamente.", tradutor },
    tema: "fidelidade aos propósitos", temasSecundarios: ["perseverança", "disciplina", "decisão"], contexto: "Bons propósitos exigem realização concreta e estabilidade, não mudança leviana.", testemunha,
    referenciasBiblicas: [{ passagem: "mettere in pratica i buoni propositi", referencia: "Lucas 9,62; Tiago 5,12, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 23 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 23.", "`Provveda` foi traduzido por ‘procure’, mantendo a exortação sem tom burocrático."]
  },
  {
    id: "maxima-240", numero: 240, dia: 27, mes: "agosto",
    original: { idioma: "italiano", texto: "Non bisogna tralasciare per ogni minima cosa le proprie devozioni, come la confessione nei suoi giorni prestabiliti e, in particolare, la messa nei giorni feriali; se si vuole andare a spasso e fare altre cose, prima si faccia la confessione e i soliti esercizi, poi si vada.", passagensLatinas: null },
    portugues: { texto: "Não se devem abandonar as próprias devoções por qualquer coisa mínima, como a Confissão nos dias estabelecidos e, especialmente, a Missa nos dias de semana; se alguém quiser passear e fazer outras coisas, faça primeiro a Confissão e os exercícios habituais, e depois vá.", tradutor },
    tema: "fidelidade às devoções", temasSecundarios: ["Confissão", "Missa", "disciplina"], contexto: "As ocupações recreativas devem ser ordenadas depois das devoções habituais.", testemunha,
    referenciasBiblicas: [{ passagem: "messa nei giorni feriali", referencia: "Atos 2,42; Hebreus 10,25, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 23 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 23.", "`Andare a spasso` foi traduzido por ‘passear’, sem atualizar a cena para lazer contemporâneo específico."]
  },
  {
    id: "maxima-241", numero: 241, dia: 28, mes: "agosto",
    original: { idioma: "italiano", texto: "È molto utile per chi amministra la parola di Dio e per chi vuole dedicarsi all'orazione, leggere quei libri che cominciano per “S”, come S. Agostino, S. Bernardo, ecc.", passagensLatinas: null },
    portugues: { texto: "É muito útil, para quem administra a palavra de Deus e para quem quer dedicar-se à oração, ler aqueles livros que começam com “S”, como Santo Agostinho, São Bernardo etc.", tradutor },
    tema: "leituras recomendadas", temasSecundarios: ["Santo Agostinho", "São Bernardo", "pregação"], contexto: "A máxima recomenda leituras de autores espirituais, especialmente para pregadores e pessoas dedicadas à oração.", testemunha,
    referenciasBiblicas: [{ passagem: "amministra la parola di Dio", referencia: "2Timóteo 4,2; 2Timóteo 3,16-17, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 23 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 23.", "A letra `S` foi mantida como jogo editorial do original; os nomes foram traduzidos para as formas portuguesas correntes."]
  },
  {
    id: "maxima-242", numero: 242, dia: 29, mes: "agosto",
    original: { idioma: "italiano", texto: "A un cristiano non può capitare cosa più gloriosa, quanto soffrire per Cristo.", passagensLatinas: null },
    portugues: { texto: "A um cristão não pode acontecer coisa mais gloriosa que sofrer por Cristo.", tradutor },
    tema: "sofrer por Cristo", temasSecundarios: ["cruz", "testemunho", "glória"], contexto: "O sofrimento por Cristo é apresentado como honra suprema da vida cristã.", testemunha,
    referenciasBiblicas: [{ passagem: "soffrire per Cristo", referencia: "Filipenses 1,29; 1Pedro 4,13-16, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 23 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 23.", "`Gloriosa` foi traduzido por ‘gloriosa’, mantendo a avaliação teológica sem torná-la uma glória mundana."]
  },
  {
    id: "maxima-243", numero: 243, dia: 30, mes: "agosto",
    original: { idioma: "italiano", texto: "Non esiste argomento più certo, né più chiaro dell'amore di Dio, che le avversità.", passagensLatinas: null },
    portugues: { texto: "Não existe prova mais certa nem mais clara do amor de Deus que as adversidades.", tradutor },
    tema: "adversidade como prova do amor de Deus", temasSecundarios: ["sofrimento", "providência", "amor"], contexto: "A adversidade é interpretada como sinal claro do amor de Deus, no horizonte devocional da fonte.", testemunha,
    referenciasBiblicas: [{ passagem: "avversità ... amore di Dio", referencia: "Hebreus 12,5-11; Romanos 5,3-5, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 23 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 23.", "`Argomento` foi traduzido por ‘prova’, no sentido de indício ou testemunho, não de argumento lógico formal."]
  },
  {
    id: "maxima-244", numero: 244, dia: 31, mes: "agosto",
    original: { idioma: "italiano", texto: "Dio è solito, quando vuole concedere qualche virtù, permettere che l'uomo sia prima tentato dal vizio contrario.", passagensLatinas: null },
    portugues: { texto: "Deus costuma, quando quer conceder alguma virtude, permitir que a pessoa seja primeiro tentada pelo vício contrário.", tradutor },
    tema: "tentação e aquisição da virtude", temasSecundarios: ["providência", "discernimento", "combate espiritual"], contexto: "A tentação do vício contrário é compreendida como provação anterior à consolidação de uma virtude.", testemunha,
    referenciasBiblicas: [{ passagem: "tentato dal vizio contrario", referencia: "Tiago 1,2-4.12-15; 1Coríntios 10,13, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 23 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 23.", "A frase não afirma que Deus seja autor do vício; `permettere` foi traduzido por ‘permitir’. "]
  },
  {
    id: "maxima-245", numero: 245, dia: 1, mes: "setembro",
    original: { idioma: "italiano", texto: "I secolari continuino a venire in Chiesa, ad ascoltare i sermoni; e si ricordino di leggere i libri spirituali e, in particolare, le vite dei Santi.", passagensLatinas: null },
    portugues: { texto: "Os leigos continuem a vir à Igreja, a ouvir os sermões e a lembrar-se de ler livros espirituais, especialmente as vidas dos Santos.", tradutor },
    tema: "formação espiritual dos leigos", temasSecundarios: ["Igreja", "sermões", "Santos"], contexto: "A máxima recomenda aos leigos uma rotina de participação e leitura espiritual.", testemunha,
    referenciasBiblicas: [{ passagem: "venire in Chiesa ... vite dei Santi", referencia: "Hebreus 10,25; 2Timóteo 3,15-17, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 24 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 24.", "`Secolari` foi traduzido por ‘leigos’, termo eclesial preciso no contexto."]
  },
  {
    id: "maxima-246", numero: 246, dia: 2, mes: "setembro",
    original: { idioma: "italiano", texto: "Quando viene una tentazione, la persona si ricordi di quei gusti che ha sentito altre volte nell'orazione, e così facilmente supererà le tentazioni.", passagensLatinas: null },
    portugues: { texto: "Quando vier uma tentação, a pessoa se lembre das consolações que sentiu outras vezes na oração e assim superará mais facilmente as tentações.", tradutor },
    tema: "memória das consolações", temasSecundarios: ["tentação", "oração", "perseverança"], contexto: "A memória de graças recebidas na oração é proposta como auxílio no combate presente.", testemunha,
    referenciasBiblicas: [{ passagem: "supererà le tentazioni", referencia: "1Coríntios 10,13; Salmo 76(77),12, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 24 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 24.", "`Gusti` foi traduzido por ‘consolações’, em continuidade com as máximas de agosto."]
  },
  {
    id: "maxima-247", numero: 247, dia: 3, mes: "setembro",
    original: { idioma: "misto", texto: "Lo spirito all'inizio è grande, ma poi il Signore fingit se longius ire (finge di allontanarsi); in tal caso bisogna rimanere saldi, né turbarsi, perché Dio ritira talora la sua santissima mano delle dolcezze per vedere se siamo forti; e poi, se resistiamo e vinciamo quelle tribolazioni e tentazioni, tornano i gusti e le celesti consolazioni.", passagensLatinas: [{ trecho: "fingit se longius ire", origem: "Mateus 15,22-28, fórmula latina tradicional aplicada à aparente retirada do Senhor", traducao: "finge afastar-se mais." }] },
    portugues: { texto: "No início, o espírito é grande, mas depois o Senhor finge afastar-se mais; nesse caso, é preciso permanecer firme e não se perturbar, porque às vezes Deus retira a sua santíssima mão das consolações para ver se somos fortes. Depois, se resistirmos e vencermos essas tribulações e tentações, voltarão as consolações e os celestes consolos.", tradutor },
    tema: "provação depois da consolação", temasSecundarios: ["oração", "perseverança", "consolação"], contexto: "A retirada aparente das consolações é interpretada como prova da firmeza espiritual.", testemunha,
    referenciasBiblicas: [{ passagem: "fingit se longius ire", referencia: "Mateus 15,22-28, como alusão tradicional" }, { passagem: "resistiamo e vinciamo le tentazioni", referencia: "Tiago 1,12; 1Coríntios 10,13, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 24 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 24.", "O latim foi separado do italiano e a glosa `finge di allontanarsi` foi preservada no sentido.", "A referência a Mateus 15,22-28 é anotada como matriz tradicional da fórmula, não como citação literal do episódio."]
  },
  {
    id: "maxima-248", numero: 248, dia: 4, mes: "setembro",
    original: { idioma: "italiano", texto: "Bisogna dedicarsi all'acquisto delle virtù, perché alla fine tutto sovrabbonda in maggiore dolcezza di quella di prima, riconcedendo il Signore i gusti e le consolazioni raddoppiate.", passagensLatinas: null },
    portugues: { texto: "É preciso dedicar-se à aquisição das virtudes, porque, no fim, tudo transborda em maior doçura que antes, quando o Senhor concede novamente consolações redobradas.", tradutor },
    tema: "virtude depois da aridez", temasSecundarios: ["perseverança", "consolação", "formação"], contexto: "A perseverança nas virtudes conduz, segundo a máxima, ao retorno ampliado das consolações.", testemunha,
    referenciasBiblicas: [{ passagem: "consolazioni raddoppiate", referencia: "Jó 42,10-12; Romanos 5,3-5, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 24 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 24.", "`Raddoppiate` foi traduzido por ‘redobradas’, preservando a ideia de duplicação."]
  },
  {
    id: "maxima-249", numero: 249, dia: 5, mes: "setembro",
    original: { idioma: "italiano", texto: "È facile far ottenere agli altri grandissimo spirito anche in breve tempo, ma l'importanza sta nel perseverare.", passagensLatinas: null },
    portugues: { texto: "É fácil fazer os outros alcançar grande espírito mesmo em pouco tempo, mas o importante está em perseverar.", tradutor },
    tema: "perseverança após o fervor", temasSecundarios: ["formação", "direção espiritual", "fidelidade"], contexto: "O crescimento rápido de outra pessoa não basta; a prova decisiva é a perseverança.", testemunha,
    referenciasBiblicas: [{ passagem: "l’importanza sta nel perseverare", referencia: "Mateus 13,20-21; Mateus 24,13, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 24 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 24.", "`Far ottenere` foi traduzido por ‘fazer alcançar’, sem atribuir ao diretor espiritual o poder de produzir a graça."]
  },
  {
    id: "maxima-250", numero: 250, dia: 6, mes: "setembro",
    original: { idioma: "italiano", texto: "Chi persevera nell'ira, nelle discordie e in un animo amaro, prova un'aria di inferno.", passagensLatinas: null },
    portugues: { texto: "Quem persevera na ira, nas discórdias e num espírito amargo experimenta um ar de inferno.", tradutor },
    tema: "ira e inferno interior", temasSecundarios: ["discórdia", "amargura", "paz"], contexto: "A permanência voluntária na ira é descrita como experiência antecipada do inferno.", testemunha,
    referenciasBiblicas: [{ passagem: "ira, discordie e animo amaro", referencia: "Efésios 4,31-32; Tiago 3,14-18, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 24 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 24.", "`Aria di inferno` foi traduzido literalmente por ‘ar de inferno’, preservando a imagem atmosférica."]
  },
  {
    id: "maxima-251", numero: 251, dia: 7, mes: "setembro",
    original: { idioma: "italiano", texto: "Per ottenere la protezione della Santissima Vergine nelle maggiori urgenze, gioverà moltissimo dire 63 volte, come una corona: «Vergine Maria, Madre di Dio, pregate Gesù per me».", passagensLatinas: null },
    portugues: { texto: "Para obter a proteção da Santíssima Virgem nas maiores urgências, será muito útil dizer 63 vezes, como uma coroa: “Virgem Maria, Mãe de Deus, rogai a Jesus por mim”.", tradutor },
    tema: "oração mariana em urgência", temasSecundarios: ["Maria", "proteção", "oração"], contexto: "A máxima propõe uma fórmula mariana repetida 63 vezes em situações urgentes.", testemunha,
    referenciasBiblicas: [{ passagem: "Vergine Maria, Madre di Dio", referencia: "Lucas 1,28.43; João 2,1-11, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 24 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 24.", "O número 63 foi preservado exatamente como na fonte; não foi convertido em uma prática diferente."]
  },
  {
    id: "maxima-252", numero: 252, dia: 8, mes: "setembro",
    original: { idioma: "italiano", texto: "Quando si fa alla Vergine questa preghiera, le si dà brevemente ogni possibile lode, perché si chiama con il suo nome “Maria”, le si danno quei due titoli così grandi di “Vergine” e “Madre di Dio”, e perché si nomina il frutto delle sue purissime viscere, Gesù.", passagensLatinas: null },
    portugues: { texto: "Quando se faz essa oração à Virgem, presta-se brevemente a ela todo louvor possível: chama-se por seu nome, “Maria”; dão-se-lhe os dois grandes títulos de “Virgem” e “Mãe de Deus”; e nomeia-se o fruto de suas puríssimas entranhas, Jesus.", tradutor },
    tema: "louvor mariano", temasSecundarios: ["Maria", "Encarnação", "oração"], contexto: "A máxima explica os elementos de louvor contidos na fórmula mariana do dia anterior.", testemunha,
    referenciasBiblicas: [{ passagem: "Maria ... Vergine e Madre di Dio", referencia: "Lucas 1,31.35.43.48; Mateus 1,23, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 24 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 24.", "`Viscere` foi traduzido por ‘entranhas’, preservando a imagem bíblica da maternidade sem eufemismo anatômico."]
  },
  {
    id: "maxima-253", numero: 253, dia: 9, mes: "setembro",
    original: { idioma: "italiano", texto: "Le cose di questo mondo non stanno con noi per sempre, o perché le lasciamo noi prima che moriamo, o perché inevitabilmente, alla morte, tutti ritorniamo come siamo nati.", passagensLatinas: null },
    portugues: { texto: "As coisas deste mundo não permanecem conosco para sempre: ou nós as deixamos antes de morrer, ou, inevitavelmente, na morte todos retornamos como nascemos.", tradutor },
    tema: "transitoriedade dos bens", temasSecundarios: ["morte", "desapego", "pobreza"], contexto: "A morte é apresentada como despojamento inevitável de todos os bens mundanos.", testemunha,
    referenciasBiblicas: [{ passagem: "ritorniamo come siamo nati", referencia: "Jó 1,21; Eclesiastes 5,14-15, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 24 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 24.", "`Ritorniamo come siamo nati` foi mantido como imagem de nudez e desapossamento na morte."]
  },
  {
    id: "maxima-254", numero: 254, dia: 10, mes: "setembro",
    original: { idioma: "italiano", texto: "Per fare bene l'orazione, vi si richiede tutto l'uomo.", passagensLatinas: null },
    portugues: { texto: "Para rezar bem, exige-se a pessoa inteira.", tradutor },
    tema: "inteireza na oração", temasSecundarios: ["atenção", "oração", "entrega"], contexto: "A oração requer a integração de toda a pessoa, não apenas uma faculdade isolada.", testemunha,
    referenciasBiblicas: [{ passagem: "tutto l’uomo", referencia: "Deuteronômio 6,5; Marcos 12,30, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 24 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 24.", "`Tutto l’uomo` foi traduzido por ‘a pessoa inteira’, preservando o sentido integral sem masculinização obrigatória."]
  },
  {
    id: "maxima-255", numero: 255, dia: 11, mes: "setembro",
    original: { idioma: "italiano", texto: "La disciplina e altre cose simili, non si devono fare senza permesso del confessore; chi le fa secondo il proprio parere, o si rovina il fisico, o diventerà superbo, credendo di aver fatto qualche cosa di grande.", passagensLatinas: null },
    portugues: { texto: "A disciplina e outras práticas semelhantes não devem ser feitas sem a permissão do confessor; quem as faz segundo o próprio parecer ou arruína o físico ou se tornará soberbo, julgando ter feito algo grandioso.", tradutor },
    tema: "disciplina sob discernimento", temasSecundarios: ["Confissão", "ascese", "soberba"], contexto: "A penitência corporal requer discernimento do confessor para evitar dano físico e orgulho espiritual.", testemunha,
    referenciasBiblicas: [{ passagem: "disciplina ... permesso del confessore", referencia: "Colossenses 2,20-23; 1Coríntios 9,27, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 24 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 24.", "`Disciplina` foi mantida como termo histórico de penitência corporal; a tradução não prescreve a prática."]
  },
  {
    id: "maxima-256", numero: 256, dia: 12, mes: "setembro",
    original: { idioma: "italiano", texto: "A Dio è gradita moltissimo l'umiltà di chi crede di non aver ancora cominciato a fare alcun bene.", passagensLatinas: null },
    portugues: { texto: "Agrada muito a Deus a humildade de quem crê ainda não ter começado a fazer bem algum.", tradutor },
    tema: "humildade radical", temasSecundarios: ["graça", "autocrítica", "virtude"], contexto: "A consciência de ainda estar no início é apresentada como atitude agradável a Deus.", testemunha,
    referenciasBiblicas: [{ passagem: "non aver ancora cominciato a fare alcun bene", referencia: "Lucas 17,10; Filipenses 3,12-14, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 24 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 24.", "A tradução preserva a hipérbole humilde sem afirmar que a pessoa não tenha praticado nenhum bem objetivo."]
  },
  {
    id: "maxima-257", numero: 257, dia: 13, mes: "setembro",
    original: { idioma: "italiano", texto: "Sarà molto utile, prima di confessarsi e di consigliarsi con il direttore spirituale, fare orazione con la volontà sincera di essere davvero buono.", passagensLatinas: null },
    portugues: { texto: "Será muito útil, antes de confessar-se e aconselhar-se com o diretor espiritual, rezar com a vontade sincera de ser verdadeiramente bom.", tradutor },
    tema: "preparação para a direção espiritual", temasSecundarios: ["Confissão", "oração", "conversão"], contexto: "A oração sincera deve preceder a Confissão e o conselho espiritual.", testemunha,
    referenciasBiblicas: [{ passagem: "volontà sincera di essere davvero buono", referencia: "Salmo 50(51),12-14; João 3,19-21, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 24 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 24.", "`Direttore spirituale` foi traduzido por ‘diretor espiritual’, sem acrescentar um modelo institucional específico."]
  },
  {
    id: "maxima-258", numero: 258, dia: 14, mes: "setembro",
    original: { idioma: "italiano", texto: "Chi fugge una croce, ne incontrerà un'altra maggiore.", passagensLatinas: null },
    portugues: { texto: "Quem foge de uma cruz encontrará outra maior.", tradutor },
    tema: "aceitação da cruz", temasSecundarios: ["sofrimento", "providência", "perseverança"], contexto: "A fuga de uma provação não elimina o sofrimento e pode conduzir a uma prova maior.", testemunha,
    referenciasBiblicas: [{ passagem: "fugge una croce", referencia: "Mateus 16,24; João 16,33, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 24 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 24.", "A tradução conserva a repetição de `croce`, fundamental para o provérbio espiritual."]
  },
  {
    id: "maxima-259", numero: 259, dia: 15, mes: "setembro",
    original: { idioma: "italiano", texto: "Cristo è morto per i peccatori, dunque bisogna farsi animo e sperare che il paradiso sarà nostro, purché ci pentiamo dei nostri peccati e operiamo il bene.", passagensLatinas: null },
    portugues: { texto: "Cristo morreu pelos pecadores; portanto, é preciso criar coragem e esperar que o paraíso será nosso, desde que nos arrependamos dos pecados e pratiquemos o bem.", tradutor },
    tema: "esperança fundada na redenção", temasSecundarios: ["Cristo", "arrependimento", "paraíso"], contexto: "A morte redentora de Cristo fundamenta a esperança, unida ao arrependimento e à prática do bem.", testemunha,
    referenciasBiblicas: [{ passagem: "Cristo è morto per i peccatori", referencia: "Romanos 5,6-8; 1Pedro 3,18, como síntese" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 24 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 24.", "`Farsi animo` foi traduzido por ‘criar coragem’, sem perder a dimensão de esperança cristã."]
  },
  {
    id: "maxima-260", numero: 260, dia: 16, mes: "setembro",
    original: { idioma: "italiano", texto: "L'infermo non si metta a trattare con il demonio, perché sarà ingannato senz'altro; si rivolga al suo padre spirituale, del quale il demonio ha grande paura.", passagensLatinas: null },
    portugues: { texto: "O enfermo não comece a tratar com o demônio, pois certamente será enganado; volte-se para o seu Padre espiritual, de quem o demônio tem grande medo.", tradutor },
    tema: "direção espiritual na enfermidade", temasSecundarios: ["doença", "demônio", "confiança"], contexto: "A pessoa enferma é aconselhada a buscar o Padre espiritual em vez de dialogar com a tentação.", testemunha,
    referenciasBiblicas: [{ passagem: "non si metta a trattare con il demonio", referencia: "Mateus 4,1-11; 1Pedro 5,8-9, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 24 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 24.", "`Padre spirituale` foi traduzido por ‘Padre espiritual’, preservando o tratamento eclesial."]
  },
  {
    id: "maxima-261", numero: 261, dia: 17, mes: "setembro",
    original: { idioma: "italiano", texto: "Chi serve Dio, deve provvedere quanto può di non ricevere in questo mondo la ricompensa delle sue opere.", passagensLatinas: null },
    portugues: { texto: "Quem serve a Deus deve procurar, tanto quanto puder, não receber neste mundo a recompensa de suas obras.", tradutor },
    tema: "recompensa celeste", temasSecundarios: ["serviço", "desapego", "humildade"], contexto: "O serviço de Deus deve ser purificado do desejo de recompensa pública ou imediata.", testemunha,
    referenciasBiblicas: [{ passagem: "non ricevere in questo mondo la ricompensa", referencia: "Mateus 6,1-4; Mateus 6,19-20, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 24 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 24.", "`Ricompensa` foi traduzido por ‘recompensa’, preservando a distinção entre reconhecimento terreno e recompensa divina."]
  },
  {
    id: "maxima-262", numero: 262, dia: 18, mes: "setembro",
    original: { idioma: "italiano", texto: "Nel distribuire l'elemosina ai poveri, bisogna presentarsi come un buon ministro della provvidenza di Dio.", passagensLatinas: null },
    portugues: { texto: "Ao distribuir esmola aos pobres, é preciso apresentar-se como bom ministro da providência de Deus.", tradutor },
    tema: "esmola como providência", temasSecundarios: ["caridade", "pobreza", "providência"], contexto: "A pessoa que dá esmola é vista como instrumento da providência, não como proprietária absoluta do bem.", testemunha,
    referenciasBiblicas: [{ passagem: "ministro della provvidenza di Dio", referencia: "Mateus 25,35-40; 2Coríntios 9,10-11, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 25 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 25.", "`Ministro` foi mantido no sentido de servidor ou administrador, não como título clerical obrigatório."]
  },
  {
    id: "maxima-263", numero: 263, dia: 19, mes: "setembro",
    original: { idioma: "italiano", texto: "Chi si sente dominare dal vizio dell'avarizia, non cerchi di fare digiuni più del dovuto, ma faccia l'elemosina.", passagensLatinas: null },
    portugues: { texto: "Quem se sente dominado pelo vício da avareza não procure fazer jejuns além do devido, mas dê esmola.", tradutor },
    tema: "esmola contra a avareza", temasSecundarios: ["desapego", "jejum", "caridade"], contexto: "A avareza é combatida por uma obra concreta de caridade, não por uma austeridade corporal escolhida sem discernimento.", testemunha,
    referenciasBiblicas: [{ passagem: "non ... digiuni ... ma faccia l’elemosina", referencia: "Tobias 12,8-9; Mateus 6,1-4, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 25 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 25.", "A oposição entre jejum excessivo e esmola foi mantida como estrutura argumentativa."]
  },
  {
    id: "maxima-264", numero: 264, dia: 20, mes: "setembro",
    original: { idioma: "italiano", texto: "La perfezione non si acquista se non con grandissima fatica.", passagensLatinas: null },
    portugues: { texto: "A perfeição só se adquire com enorme esforço.", tradutor },
    tema: "esforço da perfeição", temasSecundarios: ["ascese", "perseverança", "virtude"], contexto: "A máxima rejeita a ideia de perfeição adquirida sem luta e perseverança.", testemunha,
    referenciasBiblicas: [{ passagem: "grandissima fatica", referencia: "Mateus 7,13-14; Filipenses 3,12-14, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 25 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 25.", "`Se non` foi traduzido por ‘só’, conservando o valor exclusivo da construção."]
  },
  {
    id: "maxima-265", numero: 265, dia: 21, mes: "setembro",
    original: { idioma: "italiano", texto: "Non appena siamo spogliati dello sporco vestito dell'avarizia, siamo vestiti di abito regale e imperiale, che è la virtù opposta all'avarizia, chiamata “liberalità”.", passagensLatinas: null },
    portugues: { texto: "Assim que somos despojados da veste suja da avareza, somos revestidos de traje régio e imperial, que é a virtude oposta à avareza, chamada “liberalidade”.", tradutor },
    tema: "liberalidade contra a avareza", temasSecundarios: ["desapego", "generosidade", "virtude"], contexto: "A liberalidade é descrita como veste nobre que substitui a sujeira da avareza.", testemunha,
    referenciasBiblicas: [{ passagem: "vestito ... abito regale", referencia: "Isaías 61,10; Lucas 15,22, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 25 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 25.", "`Liberalità` foi traduzida por ‘liberalidade’, termo moral tradicional para generosidade, não por liberalismo político."]
  },
  {
    id: "maxima-266", numero: 266, dia: 22, mes: "setembro",
    original: { idioma: "italiano", texto: "Anche nel mezzo della confusione, ci si può dedicare alla perfezione.", passagensLatinas: null },
    portugues: { texto: "Mesmo em meio à confusão, pode-se dedicar-se à perfeição.", tradutor },
    tema: "perfeição no meio da confusão", temasSecundarios: ["discernimento", "perseverança", "vida cotidiana"], contexto: "A desordem exterior não impede necessariamente o crescimento espiritual.", testemunha,
    referenciasBiblicas: [{ passagem: "nel mezzo della confusione", referencia: "Filipenses 4,11-13; João 16,33, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 25 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 25.", "A construção italiana foi traduzida de forma corrente; o sentido é ‘dedicar-se à perfeição’ em meio às circunstâncias confusas."]
  },
  {
    id: "maxima-267", numero: 267, dia: 23, mes: "setembro",
    original: { idioma: "italiano", texto: "Non tutto quello che di per sé è meglio, è meglio in particolare a ciascuno.", passagensLatinas: null },
    portugues: { texto: "Nem tudo o que é melhor em si mesmo é melhor, em particular, para cada pessoa.", tradutor },
    tema: "discernimento pessoal", temasSecundarios: ["vocação", "prudência", "direção espiritual"], contexto: "A máxima distingue o bem objetivo em abstrato daquilo que convém concretamente a cada pessoa.", testemunha,
    referenciasBiblicas: [{ passagem: "non tutto ... è meglio ... a ciascuno", referencia: "1Coríntios 7,7.17; Romanos 14,1-4, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 25 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 25.", "A repetição de `meglio` foi mantida para preservar a distinção entre princípio e aplicação pessoal."]
  },
  {
    id: "maxima-268", numero: 268, dia: 24, mes: "setembro",
    original: { idioma: "italiano", texto: "Siate devoti della Madonna, guardatevi dai peccati e Dio vi libererà dai vostri mali.", passagensLatinas: null },
    portugues: { texto: "Sede devotos de Nossa Senhora, guardai-vos dos pecados e Deus vos libertará dos vossos males.", tradutor },
    tema: "devoção e libertação", temasSecundarios: ["Maria", "pecado", "oração"], contexto: "A devoção mariana e a vigilância contra o pecado são associadas à confiança na libertação divina.", testemunha,
    referenciasBiblicas: [{ passagem: "Dio vi libererà dai vostri mali", referencia: "Salmo 33(34),5.18-19; João 2,1-11, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 25 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 25.", "`Madonna` foi traduzida por ‘Nossa Senhora’, forma devocional corrente em português brasileiro."]
  },
  {
    id: "maxima-269", numero: 269, dia: 25, mes: "setembro",
    original: { idioma: "italiano", texto: "Per mantenere la pace con il prossimo, non bisogna ricordare a nessuno i difetti naturali.", passagensLatinas: null },
    portugues: { texto: "Para conservar a paz com o próximo, não se devem recordar a ninguém os defeitos naturais.", tradutor },
    tema: "paz e caridade", temasSecundarios: ["convivência", "respeito", "correção"], contexto: "A paz comunitária exige não transformar limitações naturais alheias em motivo de humilhação.", testemunha,
    referenciasBiblicas: [{ passagem: "pace con il prossimo", referencia: "Romanos 12,18; Efésios 4,2-3, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 25 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 25.", "`Difetti naturali` foi mantido como ‘defeitos naturais’, sem escolher uma condição pessoal específica."]
  },
  {
    id: "maxima-270", numero: 270, dia: 26, mes: "setembro",
    original: { idioma: "italiano", texto: "Bisogna talvolta sopportare certi piccoli difetti in altri, come sopportiamo contro il nostro volere i difetti naturali in noi stessi.", passagensLatinas: null },
    portugues: { texto: "É preciso às vezes suportar certos pequenos defeitos nos outros, como suportamos contra a nossa vontade os defeitos naturais em nós mesmos.", tradutor },
    tema: "paciência com os defeitos alheios", temasSecundarios: ["caridade", "paciência", "comunidade"], contexto: "A tolerância dos pequenos defeitos alheios é comparada à aceitação dos próprios limites naturais.", testemunha,
    referenciasBiblicas: [{ passagem: "sopportare ... difetti in altri", referencia: "Colossenses 3,13; Efésios 4,2, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 25 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 25.", "`Sopportare` foi traduzido por ‘suportar’, preservando o verbo da paciência cristã."]
  },
  {
    id: "maxima-271", numero: 271, dia: 27, mes: "setembro",
    original: { idioma: "italiano", texto: "Le persone nobili vestano pure come i loro pari, e siano accompagnate dalla servitù, come richiede il loro stato; ma in tutto vadano con modestia.", passagensLatinas: null },
    portugues: { texto: "As pessoas nobres vistam-se como seus iguais e sejam acompanhadas por criados, como requer sua condição; mas em tudo procedam com modéstia.", tradutor },
    tema: "modéstia conforme o estado", temasSecundarios: ["nobreza", "modéstia", "costumes"], contexto: "A máxima admite sinais externos próprios da condição social, subordinando-os à modéstia.", testemunha,
    referenciasBiblicas: [{ passagem: "vadano con modestia", referencia: "Romanos 12,3; Filipenses 2,3, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 25 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 25.", "`Servitù` foi traduzido por ‘criados’, termo histórico do contexto social, sem modernizar a estrutura de classe.", "A máxima é registrada como testemunho histórico de costumes, não como prescrição social contemporânea do projeto."]
  },
  {
    id: "maxima-272", numero: 272, dia: 28, mes: "setembro",
    original: { idioma: "italiano", texto: "Non si deve subito corregere gli altri, ma si deve prima guardare sé stessi.", passagensLatinas: null },
    portugues: { texto: "Não se devem corrigir imediatamente os outros; deve-se primeiro olhar para si mesmo.", tradutor },
    tema: "correção fraterna e exame de si", temasSecundarios: ["humildade", "discernimento", "caridade"], contexto: "A correção do próximo deve ser precedida pelo exame da própria conduta.", testemunha,
    referenciasBiblicas: [{ passagem: "prima guardare sé stessi", referencia: "Mateus 7,3-5; Lucas 6,41-42, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 25 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 25.", "A fonte traz `corregere`; a tradução corrige apenas a ortografia portuguesa, não o conteúdo."]
  },
  {
    id: "maxima-273", numero: 273, dia: 29, mes: "setembro",
    original: { idioma: "misto", texto: "Pensiamo che sarà facilissimo e dolce dire sempre in cielo, se lì andremo, con gli angeli e con tutti gli altri beati: «Sanctus, Sanctus, Sanctus».", passagensLatinas: [{ trecho: "Sanctus, Sanctus, Sanctus", origem: "Isaías 6,3; Apocalipse 4,8, fórmula litúrgica latina", traducao: "Santo, Santo, Santo." }] },
    portugues: { texto: "Pensemos que será facílimo e doce dizer sempre no céu, se para lá formos, com os anjos e todos os demais bem-aventurados: “Santo, Santo, Santo”.", tradutor },
    tema: "louvor celeste", temasSecundarios: ["anjos", "bem-aventurados", "liturgia"], contexto: "A esperança do céu é representada pela participação no louvor incessante dos anjos e santos.", testemunha,
    referenciasBiblicas: [{ passagem: "Sanctus, Sanctus, Sanctus", referencia: "Isaías 6,3; Apocalipse 4,8" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 25 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 25.", "O latim foi separado do italiano e traduzido como ‘Santo, Santo, Santo’.", "A expressão é tratada como fórmula bíblico-litúrgica, não como prosa italiana."]
  },
  {
    id: "maxima-274", numero: 274, dia: 30, mes: "setembro",
    original: { idioma: "italiano", texto: "Il vero modo di prepararci alla morte è quello di vivere ogni giorno come se fosse l'ultimo della nostra vita.", passagensLatinas: null },
    portugues: { texto: "O verdadeiro modo de preparar-nos para a morte é viver cada dia como se fosse o último da nossa vida.", tradutor },
    tema: "preparação para a morte", temasSecundarios: ["vigilância", "conversão", "morte cristã"], contexto: "A preparação para a morte é convertida em forma cotidiana de viver com vigilância.", testemunha,
    referenciasBiblicas: [{ passagem: "vivere ogni giorno come se fosse l’ultimo", referencia: "Mateus 24,42-44; Lucas 12,35-40, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 25 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 25.", "A imagem do último dia foi mantida sem adicionar práticas devocionais não presentes na fonte."]
  },
  {
    id: "maxima-275", numero: 275, dia: 1, mes: "outubro",
    original: { idioma: "italiano", texto: "Nel passare da uno stato cattivo a uno buono non serve consiglio; ma nel passare dal buono al migliore servono tempo, consiglio e orazione.", passagensLatinas: null },
    portugues: { texto: "Ao passar de um estado mau para um bom, não é necessário conselho; mas, ao passar do bom para o melhor, são necessários tempo, conselho e oração.", tradutor },
    tema: "discernimento das mudanças", temasSecundarios: ["conversão", "vocação", "oração"], contexto: "A conversão do mal ao bem é urgente; mudanças entre bens exigem discernimento prolongado.", testemunha,
    referenciasBiblicas: [{ passagem: "dal buono al migliore", referencia: "Lucas 14,28-32; 1Coríntios 7,17, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 25 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente nas páginas PDF 25–26.", "`Stato` foi traduzido por ‘estado’, preservando o possível sentido de condição de vida."]
  },
  {
    id: "maxima-276", numero: 276, dia: 2, mes: "outubro",
    original: { idioma: "italiano", texto: "Bisogna che preghiamo continuamente il Signore che converta i peccatori, pensando alla gioia che si fa in cielo, da Dio e dagli angeli, per la conversione di ciascun peccatore.", passagensLatinas: null },
    portugues: { texto: "É preciso rezar continuamente ao Senhor para que converta os pecadores, pensando na alegria que se faz no céu, em Deus e nos anjos, pela conversão de cada pecador.", tradutor },
    tema: "oração pela conversão", temasSecundarios: ["pecadores", "anjos", "alegria celeste"], contexto: "A oração apostólica pela conversão é motivada pela alegria celeste causada por cada pecador que se converte.", testemunha,
    referenciasBiblicas: [{ passagem: "gioia ... per la conversione di ciascun peccatore", referencia: "Lucas 15,7.10; Ezequiel 18,23, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 25 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 25.", "`Si fa in cielo` foi traduzido por ‘se faz no céu’, mantendo a construção impessoal da fonte."]
  },
  {
    id: "maxima-277", numero: 277, dia: 3, mes: "outubro",
    original: { idioma: "italiano", texto: "Parlare senza motivo di sé stessi, dicendo: «Io ho detto, io ho fatto», rende la persona incapace delle consolazioni spirituali.", passagensLatinas: null },
    portugues: { texto: "Falar sem motivo de si mesmo, dizendo “eu disse”, “eu fiz”, torna a pessoa incapaz das consolações espirituais.", tradutor },
    tema: "autoexibição", temasSecundarios: ["humildade", "vanglória", "consolação"], contexto: "A autoexibição verbal é apresentada como obstáculo à recepção das consolações espirituais.", testemunha,
    referenciasBiblicas: [{ passagem: "Io ho detto, io ho fatto", referencia: "Mateus 6,1-4; Gálatas 6,3, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 25 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 25.", "A repetição das duas fórmulas em primeira pessoa foi preservada."]
  },
  {
    id: "maxima-278", numero: 278, dia: 4, mes: "outubro",
    original: { idioma: "italiano", texto: "Si deve desiderare di essere nella condizione di aver bisogno di un giulio, cioè di una piccola moneta, e non trovarla.", passagensLatinas: null },
    portugues: { texto: "Deve-se desejar estar na condição de precisar de um júlio, isto é, de uma pequena moeda, e não encontrá-la.", tradutor },
    tema: "pobreza voluntária", temasSecundarios: ["desapego", "necessidade", "humildade"], contexto: "A máxima usa a falta de uma pequena moeda como exercício extremo de desapego e confiança.", testemunha,
    referenciasBiblicas: [{ passagem: "aver bisogno di una piccola moneta e non trovarla", referencia: "Mateus 6,25-34; Filipenses 4,11-13, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 25 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 25.", "`Giulio` é uma moeda histórica; a explicação do próprio texto foi preservada como ‘pequena moeda’, sem conversão monetária moderna."]
  },
  {
    id: "maxima-279", numero: 279, dia: 5, mes: "outubro",
    original: { idioma: "italiano", texto: "Disprezziamo l'oro, l'argento, le gioie e tutto quanto si apprezza vanamente e ignorantemente dal mondo cieco e ingannatore.", passagensLatinas: null },
    portugues: { texto: "Desprezemos o ouro, a prata, as joias e tudo o que o mundo cego e enganador aprecia de modo vão e ignorante.", tradutor },
    tema: "desprezo das riquezas", temasSecundarios: ["desapego", "mundo", "pobreza"], contexto: "A máxima critica a avaliação mundana e vã de metais preciosos, joias e bens.", testemunha,
    referenciasBiblicas: [{ passagem: "oro, argento e gioie", referencia: "Mateus 6,19-21; 1Timóteo 6,9-10, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 25 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 25.", "`Gioie` foi traduzido por ‘joias’, não por ‘alegrias’, pois o contexto enumera riquezas materiais."]
  },
  {
    id: "maxima-280", numero: 280, dia: 6, mes: "outubro",
    original: { idioma: "italiano", texto: "Impariamo quaggiù a dare a Dio la confessione della lode, che dobbiamo sperare di fare là in cielo.", passagensLatinas: null },
    portugues: { texto: "Aprendamos aqui embaixo a oferecer a Deus a confissão do louvor que devemos esperar fazer lá no céu.", tradutor },
    tema: "louvor terreno e celeste", temasSecundarios: ["adoração", "céu", "oração"], contexto: "O louvor presente é apresentado como aprendizado do louvor que continuará no céu.", testemunha,
    referenciasBiblicas: [{ passagem: "confessione della lode ... in cielo", referencia: "Apocalipse 4,8-11; Salmo 150, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 25 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 25.", "`Quaggiù` e `là in cielo` foram traduzidos por ‘aqui embaixo’ e ‘lá no céu’, preservando o contraste espacial e escatológico."]
  },
  {
    id: "maxima-281", numero: 281, dia: 7, mes: "outubro",
    original: { idioma: "italiano", texto: "Chi vuole andare in paradiso, bisogna che sia un uomo per bene e un buon cristiano; e non deve credere ai sogni.", passagensLatinas: null },
    portugues: { texto: "Quem quer ir para o paraíso precisa ser uma pessoa de bem e um bom cristão; não deve acreditar em sonhos.", tradutor },
    tema: "vida cristã e discernimento", temasSecundarios: ["paraíso", "virtude", "sonhos"], contexto: "A vida cristã concreta é preferida à credulidade diante de sonhos e sinais incertos.", testemunha,
    referenciasBiblicas: [{ passagem: "buon cristiano ... non credere ai sogni", referencia: "Mateus 7,21; Eclesiástico 34,1-8, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 26 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 26.", "`Uomo per bene` foi traduzido por ‘pessoa de bem’, expressão corrente e não coloquial."]
  },
  {
    id: "maxima-282", numero: 282, dia: 8, mes: "outubro",
    original: { idioma: "italiano", texto: "Un padre o una madre di famiglia allevi i suoi figli virtuosamente, più come figli di Dio che suoi; la vita, la santità e ciò che possiede, lo tenga come un prestito da Dio.", passagensLatinas: null },
    portugues: { texto: "Um pai ou uma mãe de família eduque virtuosamente os filhos, considerando-os mais filhos de Deus que seus; tenha a vida, a santidade e tudo o que possui como empréstimo de Deus.", tradutor },
    tema: "educação dos filhos como dom", temasSecundarios: ["família", "paternidade", "providência"], contexto: "A família e os bens são compreendidos como dons confiados por Deus, não como posse absoluta.", testemunha,
    referenciasBiblicas: [{ passagem: "figli di Dio ... prestito da Dio", referencia: "Salmo 126(127),3; João 1,12-13, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 26 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 26.", "`Prestito` foi traduzido por ‘empréstimo’, preservando a metáfora de administração responsável."]
  },
  {
    id: "maxima-283", numero: 283, dia: 9, mes: "outubro",
    original: { idioma: "italiano", texto: "Quando una persona dice il Pater noster, consideri che ha Dio per Padre in cielo; in questo modo continui a meditare parola per parola.", passagensLatinas: null },
    portugues: { texto: "Quando uma pessoa rezar o Pai-Nosso, considere que tem Deus como Pai no céu; desse modo, continue a meditar palavra por palavra.", tradutor },
    tema: "meditação do Pai-Nosso", temasSecundarios: ["oração", "filiação divina", "contemplação"], contexto: "A oração dominical é recomendada como meditação lenta da filiação divina.", testemunha,
    referenciasBiblicas: [{ passagem: "Pater noster ... Padre in cielo", referencia: "Mateus 6,9-13; Lucas 11,2-4" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 26 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 26.", "`Pater noster` foi traduzido por ‘Pai-Nosso’, forma litúrgica brasileira."]
  },
  {
    id: "maxima-284", numero: 284, dia: 10, mes: "outubro",
    original: { idioma: "italiano", texto: "Per disaffezionarsi dalle cose del mondo, è bene considerarne seriamente il loro fine, dicendo: «E poi, e poi?». ", passagensLatinas: null },
    portugues: { texto: "Para desapegar-se das coisas do mundo, é bom considerar seriamente o seu fim, dizendo: “E depois, e depois?”.", tradutor },
    tema: "meditação do fim", temasSecundarios: ["desapego", "morte", "mundo"], contexto: "A pergunta sobre o que vem depois relativiza o valor dos bens e projetos mundanos.", testemunha,
    referenciasBiblicas: [{ passagem: "il loro fine ... E poi, e poi?", referencia: "Eclesiastes 12,13-14; Lucas 12,16-21, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 26 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 26.", "A repetição da pergunta foi mantida para preservar o efeito meditativo."]
  },
  {
    id: "maxima-285", numero: 285, dia: 11, mes: "outubro",
    original: { idioma: "italiano", texto: "Il demonio, che è uno spirito superbissimo, non si vince meglio che con l'umiltà del cuore, e con il manifestare semplicemente e chiaramente, senza copertura, i peccati e le tentazioni al confessore.", passagensLatinas: null },
    portugues: { texto: "O demônio, que é um espírito extremamente soberbo, não é vencido melhor que pela humildade do coração e pela manifestação simples e clara, sem disfarce, dos pecados e das tentações ao confessor.", tradutor },
    tema: "humildade contra o demônio", temasSecundarios: ["Confissão", "sinceridade", "tentação"], contexto: "A humildade e a transparência sacramental são apresentadas como meios de combate contra o demônio.", testemunha,
    referenciasBiblicas: [{ passagem: "umiltà del cuore ... confessore", referencia: "Tiago 4,6-7; 1Pedro 5,8-9, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 26 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 26.", "`Senza copertura` foi traduzido por ‘sem disfarce’, preservando a imagem de não encobrir os pecados."]
  },
  {
    id: "maxima-286", numero: 286, dia: 12, mes: "outubro",
    original: { idioma: "italiano", texto: "Solitamente non si deve credere alle predizioni, né desiderarle, perché possono essere molti inganni e lacci del demonio.", passagensLatinas: null },
    portugues: { texto: "Em geral, não se deve acreditar em predições nem desejá-las, porque podem ser muitos enganos e laços do demônio.", tradutor },
    tema: "prudência diante de predições", temasSecundarios: ["discernimento", "demônio", "sinais"], contexto: "A máxima recomenda prudência diante de previsões e fenômenos que podem enganar.", testemunha,
    referenciasBiblicas: [{ passagem: "predizioni ... inganni e lacci", referencia: "Deuteronômio 18,10-12; 1João 4,1, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 26 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 26.", "`Solitamente` foi traduzido por ‘em geral’, preservando a possibilidade de exceções implícita na fonte."]
  },
  {
    id: "maxima-287", numero: 287, dia: 13, mes: "outubro",
    original: { idioma: "italiano", texto: "È cosa utilissima, quando uno vede che un altro fa qualche bene spirituale nel prossimo, di cercare con l'orazione di avere parte nello stesso bene, che il Signore fa per mano altrui.", passagensLatinas: null },
    portugues: { texto: "É muito útil, quando alguém vê outra pessoa fazer algum bem espiritual ao próximo, procurar pela oração participar desse mesmo bem que o Senhor realiza pelas mãos alheias.", tradutor },
    tema: "participação no bem alheio", temasSecundarios: ["oração", "caridade", "comunhão"], contexto: "A oração permite participar espiritualmente do bem realizado por outra pessoa, sem apropriação ou inveja.", testemunha,
    referenciasBiblicas: [{ passagem: "il bene che il Signore fa per mano altrui", referencia: "1Coríntios 3,6-9; 1Coríntios 12,12-27, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 26 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 26.", "`Per mano altrui` foi traduzido por ‘pelas mãos alheias’, preservando a imagem de instrumento da ação de Deus."]
  },
  {
    id: "maxima-288", numero: 288, dia: 14, mes: "outubro",
    original: { idioma: "italiano", texto: "Nella comunione si chieda rimedio contro quel vizio, al quale l'uomo si sente più inclinato.", passagensLatinas: null },
    portugues: { texto: "Na comunhão, peça-se remédio contra o vício ao qual a pessoa se sente mais inclinada.", tradutor },
    tema: "comunhão e combate ao vício", temasSecundarios: ["Eucaristia", "conversão", "virtude"], contexto: "A comunhão é apresentada como ocasião de pedir auxílio contra a inclinação viciosa predominante.", testemunha,
    referenciasBiblicas: [{ passagem: "comunione ... rimedio contro quel vizio", referencia: "João 6,54-57; 1Coríntios 11,28, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 26 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 26.", "`Rimedio` foi traduzido por ‘remédio’, mantendo a metáfora medicinal da graça."]
  },
  {
    id: "maxima-289", numero: 289, dia: 15, mes: "outubro",
    original: { idioma: "italiano", texto: "A chi ama veramente Dio non può avvenire cosa di maggior dispiacere, quanto non aver occasione di patire per lui.", passagensLatinas: null },
    portugues: { texto: "A quem ama verdadeiramente a Deus não pode acontecer coisa mais dolorosa que não ter ocasião de sofrer por ele.", tradutor },
    tema: "desejo de sofrer por Deus", temasSecundarios: ["amor", "sacrifício", "zelo"], contexto: "O amor perfeito é descrito como desejo de oferecer sofrimento e serviço a Deus.", testemunha,
    referenciasBiblicas: [{ passagem: "patire per lui", referencia: "Filipenses 1,29; Colossenses 1,24, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 26 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 26.", "A tradução mantém o paradoxo do maior pesar ser a falta de oportunidade de sofrer por Deus."]
  },
  {
    id: "maxima-290", numero: 290, dia: 16, mes: "outubro",
    original: { idioma: "italiano", texto: "Non si deve odiare nessuno, perché, dove non c'è amore verso il prossimo, non c'è Dio.", passagensLatinas: null },
    portugues: { texto: "Não se deve odiar ninguém, pois, onde não há amor ao próximo, não há Deus.", tradutor },
    tema: "amor ao próximo", temasSecundarios: ["caridade", "paz", "presença de Deus"], contexto: "A presença de Deus é vinculada ao amor efetivo pelo próximo.", testemunha,
    referenciasBiblicas: [{ passagem: "dove non c’è amore verso il prossimo, non c’è Dio", referencia: "1João 4,7-8.20-21; Mateus 22,39, como síntese" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 26 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 26.", "A frase foi traduzida diretamente, conservando a conclusão teológica forte do testemunho."]
  },
  {
    id: "maxima-291", numero: 291, dia: 17, mes: "outubro",
    original: { idioma: "italiano", texto: "Bisogna accettare la propria morte e quella dei nostri familiari quando Dio ce la manderà e non desiderarla in altro tempo; mentre è necessario che avvenga in quel momento per il bene delle nostre e delle loro anime.", passagensLatinas: null },
    portugues: { texto: "É preciso aceitar a própria morte e a de nossos familiares quando Deus a enviar, sem desejá-la em outro momento; é necessário que aconteça naquele momento para o bem de nossas almas e das almas deles.", tradutor },
    tema: "aceitação da morte", temasSecundarios: ["família", "providência", "morte"], contexto: "A morte própria e dos familiares deve ser recebida no tempo da providência, sem desejo de antecipá-la.", testemunha,
    referenciasBiblicas: [{ passagem: "accettare la propria morte e quella dei familiari", referencia: "Jó 1,21; Eclesiastes 3,1-2, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 26 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 26.", "O pronome `la` foi traduzido por ‘a’, retomando a morte; a frase não é apresentada como incentivo à morte."]
  },
  {
    id: "maxima-292", numero: 292, dia: 18, mes: "outubro",
    original: { idioma: "italiano", texto: "La perfezione del cristiano consiste nel sapersi mortificare per amore di Cristo.", passagensLatinas: null },
    portugues: { texto: "A perfeição do cristão consiste em saber mortificar-se por amor de Cristo.", tradutor },
    tema: "mortificação por amor de Cristo", temasSecundarios: ["perfeição", "Cristo", "ascese"], contexto: "A mortificação é vinculada ao amor de Cristo e não à autopunição isolada.", testemunha,
    referenciasBiblicas: [{ passagem: "mortificare per amore di Cristo", referencia: "Lucas 9,23; Gálatas 2,20, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 26 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 26.", "`Sapersi mortificare` foi traduzido por ‘saber mortificar-se’, mantendo a ideia de discernimento na ascese."]
  },
  {
    id: "maxima-293", numero: 293, dia: 19, mes: "outubro",
    original: { idioma: "italiano", texto: "Chi brama estasi e visioni non sa quello che desidera.", passagensLatinas: null },
    portugues: { texto: "Quem anseia por êxtases e visões não sabe o que deseja.", tradutor },
    tema: "prudência diante de fenômenos místicos", temasSecundarios: ["êxtase", "visões", "discernimento"], contexto: "O desejo de experiências extraordinárias é tratado como falta de discernimento sobre o caminho espiritual.", testemunha,
    referenciasBiblicas: [{ passagem: "estasi e visioni", referencia: "1João 4,1; 2Coríntios 12,1-4, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 26 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 26.", "`Brama` foi traduzido por ‘anseia’, sem condenar toda experiência mística, apenas o desejo ávido por elas."]
  },
  {
    id: "maxima-294", numero: 294, dia: 20, mes: "outubro",
    original: { idioma: "italiano", texto: "Coloro che vanno dietro alle visioni, ai sogni e a cose simili, bisogna afferrarli per i piedi e tirarli a forza per terra, affinché non incappino nella rete del demonio.", passagensLatinas: null },
    portugues: { texto: "Aqueles que correm atrás de visões, sonhos e coisas semelhantes devem ser agarrados pelos pés e puxados à força para a terra, para não caírem na rede do demônio.", tradutor },
    tema: "discernimento contra a credulidade", temasSecundarios: ["visões", "sonhos", "demônio"], contexto: "A imagem vigorosa recomenda reconduzir à realidade quem busca fenômenos extraordinários sem discernimento.", testemunha,
    referenciasBiblicas: [{ passagem: "rete del demonio", referencia: "1Timóteo 3,7; 2Timóteo 2,26, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 26 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 26.", "A imagem de puxar pelos pés é mantida como hipérbole retórica; não é instrução literal de violência."]
  },
  {
    id: "maxima-295", numero: 295, dia: 21, mes: "outubro",
    original: { idioma: "italiano", texto: "Secondo le regole degli antichi Padri e monaci, chi vuole progredire bisogna che non tenga in considerazione il mondo.", passagensLatinas: null },
    portugues: { texto: "Segundo as regras dos antigos Padres e monges, quem quer progredir não deve levar o mundo em consideração.", tradutor },
    tema: "desapego do mundo", temasSecundarios: ["Padres antigos", "monges", "progresso espiritual"], contexto: "A tradição monástica é invocada para fundamentar o desapego da avaliação mundana.", testemunha,
    referenciasBiblicas: [{ passagem: "non tenga in considerazione il mondo", referencia: "Romanos 12,2; 1João 2,15-17, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 26 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 26.", "A formulação foi traduzida sem identificar uma regra monástica específica não nomeada pela fonte."]
  },
  {
    id: "maxima-296", numero: 296, dia: 22, mes: "outubro",
    original: { idioma: "italiano", texto: "A Dio non c'è cosa che più dispiaccia, che l'essere gonfiato della propria stima.", passagensLatinas: null },
    portugues: { texto: "Nada desagrada mais a Deus que estar inflado da própria estima.", tradutor },
    tema: "soberba da própria estima", temasSecundarios: ["humildade", "vanglória", "juízo"], contexto: "A autovalorização inflada é apresentada como grave obstáculo à relação com Deus.", testemunha,
    referenciasBiblicas: [{ passagem: "gonfiato della propria stima", referencia: "Lucas 18,9-14; Tiago 4,6, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 26 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 26.", "`Gonfiato` foi traduzido por ‘inflado’, preservando a metáfora de inchaço da autoestima."]
  },
  {
    id: "maxima-297", numero: 297, dia: 23, mes: "outubro",
    original: { idioma: "italiano", texto: "Quando uno sa dominare la propria volontà e negare all'anima i suoi desideri, è in un buon grado di virtù.", passagensLatinas: null },
    portugues: { texto: "Quando alguém sabe dominar a própria vontade e negar à alma os seus desejos, está num bom grau de virtude.", tradutor },
    tema: "domínio da vontade", temasSecundarios: ["virtude", "disciplina", "desapego"], contexto: "O domínio da vontade e dos desejos é apresentado como sinal de progresso virtuoso.", testemunha,
    referenciasBiblicas: [{ passagem: "dominare la propria volontà", referencia: "Lucas 9,23; Gálatas 5,24, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 26 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 26.", "`Negare all’anima i suoi desideri` foi traduzido literalmente, sem atribuir ao texto uma negação de toda necessidade legítima."]
  },
  {
    id: "maxima-298", numero: 298, dia: 24, mes: "outubro",
    original: { idioma: "italiano", texto: "Quando uno incorre in qualche infermità del corpo, mentre giace infermo, deve pensare: «Dio mi ha mandato questa infermità, perché vuole qualche cosa da me; perciò scelgo di voler cambiare vita e diventare migliore».", passagensLatinas: null },
    portugues: { texto: "Quando alguém contrai alguma enfermidade do corpo, enquanto estiver enfermo deve pensar: “Deus me enviou esta enfermidade porque quer algo de mim; por isso, escolho querer mudar de vida e tornar-me melhor”.", tradutor },
    tema: "enfermidade e mudança de vida", temasSecundarios: ["doença", "conversão", "providência"], contexto: "A doença é interpretada como ocasião de conversão e mudança de vida.", testemunha,
    referenciasBiblicas: [{ passagem: "cambiare vita e diventare migliore", referencia: "João 5,14; Lucas 13,1-5, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 26 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 26.", "A fala direta foi mantida na primeira pessoa; `infermità` não foi transformada em diagnóstico específico."]
  },
  {
    id: "maxima-299", numero: 299, dia: 25, mes: "outubro",
    original: { idioma: "italiano", texto: "Quando uno ha una tribolazione che Dio gli ha mandato e non ha pazienza, gli si può dire: «Tu non sei degno che Dio ti visiti, né meriti tanto bene».", passagensLatinas: null },
    portugues: { texto: "Quando alguém tem uma tribulação que Deus lhe enviou e não tem paciência, pode-se dizer-lhe: “Não és digno de que Deus te visite nem mereces tamanho bem”.", tradutor },
    tema: "paciência na tribulação", temasSecundarios: ["sofrimento", "humildade", "providência"], contexto: "A tribulação é descrita paradoxalmente como visita e bem de Deus, exigindo paciência.", testemunha,
    referenciasBiblicas: [{ passagem: "Dio ti visiti ... tanto bene", referencia: "Hebreus 12,5-11; Tiago 1,2-4, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 26 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 26.", "A fala direta usa segunda pessoa singular; ela foi mantida sem transformar a frase em tratamento coletivo."]
  },
  {
    id: "maxima-300", numero: 300, dia: 26, mes: "outubro",
    original: { idioma: "italiano", texto: "La povertà e la tribolazione ci sono date da Dio per provare la nostra fedeltà e virtù, per arricchirci poi di più vere e stabili ricchezze nel cielo.", passagensLatinas: null },
    portugues: { texto: "A pobreza e a tribulação nos são dadas por Deus para provar a nossa fidelidade e virtude e depois enriquecer-nos com riquezas mais verdadeiras e estáveis no céu.", tradutor },
    tema: "pobreza e riqueza celeste", temasSecundarios: ["provação", "fidelidade", "céu"], contexto: "A pobreza e a tribulação são interpretadas como prova que conduz às riquezas celestes.", testemunha,
    referenciasBiblicas: [{ passagem: "ricchezze ... nel cielo", referencia: "Mateus 6,19-20; 1Pedro 1,6-7, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 27 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente nas páginas PDF 26–27.", "`Ricchezze` foi mantido como ‘riquezas’, em contraste com a pobreza temporal, sem materializar o céu."]
  },
  {
    id: "maxima-301", numero: 301, dia: 27, mes: "outubro",
    original: { idioma: "italiano", texto: "Gli scrupoli, perché inquietano l'animo e lo rendono malinconico, debbono essere decisamente allontanati.", passagensLatinas: null },
    portugues: { texto: "Os escrúpulos, porque inquietam a alma e a tornam melancólica, devem ser decididamente afastados.", tradutor },
    tema: "afastamento dos escrúpulos", temasSecundarios: ["consciência", "paz", "discernimento"], contexto: "A inquietação escrupulosa é tratada como estado que deve ser rejeitado com decisão.", testemunha,
    referenciasBiblicas: [{ passagem: "scrupoli ... inquietano l’animo", referencia: "Filipenses 4,6-7; 2Timóteo 1,7, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 27 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 27.", "`Allontanati` foi traduzido por ‘afastados’, preservando a ação decidida sem sugerir repressão indiscriminada da consciência."]
  },
  {
    id: "maxima-302", numero: 302, dia: 28, mes: "outubro",
    original: { idioma: "italiano", texto: "Buttiamoci in Dio e sappiamo, che se vorrà qualche cosa da noi, egli ci renderà buoni in tutto quello per cui vorrà servirsi di noi.", passagensLatinas: null },
    portugues: { texto: "Lancemo-nos em Deus e saibamos que, se ele quiser alguma coisa de nós, nos tornará bons para tudo aquilo de que quiser servir-se conosco.", tradutor },
    tema: "abandono em Deus", temasSecundarios: ["providência", "vocação", "confiança"], contexto: "O abandono em Deus fundamenta a confiança de que ele capacitará a pessoa para o serviço desejado.", testemunha,
    referenciasBiblicas: [{ passagem: "Buttiamoci in Dio", referencia: "Salmo 54(55),23; 1Pedro 5,7, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 27 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 27.", "`Servirsi di noi` foi traduzido por ‘servir-se conosco’, preservando a disponibilidade instrumental sem despersonalização."]
  },
  {
    id: "maxima-303", numero: 303, dia: 29, mes: "outubro",
    original: { idioma: "italiano", texto: "Non c'è cosa più benefica per l'uomo, che l'orazione.", passagensLatinas: null },
    portugues: { texto: "Não há coisa mais benéfica para a pessoa que a oração.", tradutor },
    tema: "benefício da oração", temasSecundarios: ["oração", "salvação", "vida espiritual"], contexto: "A oração é apresentada como o maior benefício para a pessoa humana.", testemunha,
    referenciasBiblicas: [{ passagem: "cosa più benefica ... l’orazione", referencia: "Lucas 18,1; Filipenses 4,6-7, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 27 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 27.", "`L’uomo` foi traduzido por ‘a pessoa’, mantendo a aplicação universal."]
  },
  {
    id: "maxima-304", numero: 304, dia: 30, mes: "outubro",
    original: { idioma: "italiano", texto: "L'ozio è una cosa pestilenziale per l'uomo cristiano; perciò si dovrebbe fare sempre qualche cosa, soprattutto quando si sta soli in camera, affinché il demonio non ci trovi oziosi.", passagensLatinas: null },
    portugues: { texto: "A ociosidade é uma coisa pestilenta para o cristão; por isso, deveria sempre fazer alguma coisa, sobretudo quando está sozinho no quarto, para que o demônio não o encontre ocioso.", tradutor },
    tema: "combate à ociosidade", temasSecundarios: ["disciplina", "solidão", "demônio"], contexto: "A atividade ordenada é recomendada como proteção contra a ociosidade e a tentação.", testemunha,
    referenciasBiblicas: [{ passagem: "ozio ... demonio", referencia: "Provérbios 6,6-11; 1Pedro 5,8, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 27 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 27.", "`Pestilenziale` foi traduzido por ‘pestilenta’, preservando a metáfora de doença."]
  },
  {
    id: "maxima-305", numero: 305, dia: 31, mes: "outubro",
    original: { idioma: "italiano", texto: "Si deve sempre stare con il timore e non fidarsi mai di sé stessi, perché il demonio assale all'improvviso, offusca l'intelletto, e chi non sta nel timore è vinto, perché non ha l'aiuto del Signore.", passagensLatinas: null },
    portugues: { texto: "Deve-se permanecer sempre no temor e nunca confiar em si mesmo, porque o demônio ataca de repente e obscurece o intelecto; quem não permanece no temor é vencido, porque não tem o auxílio do Senhor.", tradutor },
    tema: "temor vigilante", temasSecundarios: ["demônio", "humildade", "vigilância"], contexto: "O temor vigilante e a desconfiança de si são apresentados como proteção contra ataques repentinos.", testemunha,
    referenciasBiblicas: [{ passagem: "demonio assale all’improvviso", referencia: "1Pedro 5,8-9; Mateus 26,41, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 27 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 27.", "`Timore` foi traduzido por ‘temor’, preservando o vocabulário de vigilância espiritual, não de pânico."]
  },
  {
    id: "maxima-306", numero: 306, dia: 1, mes: "novembro",
    original: { idioma: "italiano", texto: "L'importanza sta nell'essere santi.", passagensLatinas: null },
    portugues: { texto: "O que importa é ser santo.", tradutor },
    tema: "prioridade da santidade", temasSecundarios: ["vida espiritual", "virtude", "vocação"], contexto: "A máxima reduz a prioridade da vida espiritual à busca da santidade.", testemunha,
    referenciasBiblicas: [{ passagem: "essere santi", referencia: "1Pedro 1,15-16; Levítico 19,2, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 27 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 27.", "A tradução conserva a brevidade aforística do original."]
  },
  {
    id: "maxima-307", numero: 307, dia: 2, mes: "novembro",
    original: { idioma: "italiano", texto: "Per andare in paradiso, bisogna essere ben giustificati e ben purificati.", passagensLatinas: null },
    portugues: { texto: "Para ir ao paraíso, é preciso estar bem justificado e bem purificado.", tradutor },
    tema: "justificação e purificação", temasSecundarios: ["paraíso", "santidade", "graça"], contexto: "A entrada no paraíso é relacionada à justificação e à purificação da pessoa.", testemunha,
    referenciasBiblicas: [{ passagem: "giustificati e purificati", referencia: "Romanos 5,1; Apocalipse 21,27, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 27 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 27.", "`Ben` foi traduzido por ‘bem’, preservando a intensificação do original."]
  },
  {
    id: "maxima-308", numero: 308, dia: 3, mes: "novembro",
    original: { idioma: "italiano", texto: "Si guardi il giovane dalla carne e il vecchio dall'avarizia, e saremo santi.", passagensLatinas: null },
    portugues: { texto: "Que o jovem se guarde da carne e o velho da avareza, e seremos santos.", tradutor },
    tema: "vícios próprios das idades", temasSecundarios: ["castidade", "avareza", "santidade"], contexto: "A máxima associa a juventude à vigilância da carne e a velhice à vigilância da avareza.", testemunha,
    referenciasBiblicas: [{ passagem: "giovane dalla carne ... vecchio dall’avarizia", referencia: "1Coríntios 6,18; 1Timóteo 6,9-10, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 27 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 27.", "`Carne` foi mantido no sentido ascético tradicional, sem reduzi-lo a uma categoria biológica."]
  },
  {
    id: "maxima-309", numero: 309, dia: 4, mes: "novembro",
    original: { idioma: "italiano", texto: "Dove non c'è grande mortificazione, non c'è grande santità.", passagensLatinas: null },
    portugues: { texto: "Onde não há grande mortificação, não há grande santidade.", tradutor },
    tema: "mortificação e santidade", temasSecundarios: ["ascese", "virtude", "disciplina"], contexto: "A máxima estabelece relação direta entre mortificação e santidade elevada.", testemunha,
    referenciasBiblicas: [{ passagem: "grande mortificazione ... grande santità", referencia: "Lucas 9,23; Gálatas 5,24, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 27 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 27.", "O paralelismo repetido foi preservado integralmente."]
  },
  {
    id: "maxima-310", numero: 310, dia: 5, mes: "novembro",
    original: { idioma: "italiano", texto: "La santità dell'uomo sta nello spazio di tre dita, vale a dire nel mortificare la razionale.", passagensLatinas: null },
    portugues: { texto: "A santidade da pessoa está no espaço de três dedos, isto é, em mortificar a razão.", tradutor },
    tema: "mortificação da razão", temasSecundarios: ["santidade", "humildade", "autodomínio"], contexto: "A máxima usa a imagem de uma distância mínima para indicar que a santidade depende do domínio interior.", testemunha,
    referenciasBiblicas: [{ passagem: "mortificare la razionale", referencia: "Romanos 12,2; 2Coríntios 10,5, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 27 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 27.", "A fonte impressa traz a construção sintaticamente estranha `la razionale`; ela foi preservada sem emenda conjectural e traduzida contextualmente como ‘a razão’."]
  },
  {
    id: "maxima-311", numero: 311, dia: 6, mes: "novembro",
    original: { idioma: "italiano", texto: "Uno che voglia veramente diventare santo, non si deve (eccetto alcuni casi) mai giustificare, ma sempre dichiararsi in colpa, anche se non è vero quello per cui è corretto.", passagensLatinas: null },
    portugues: { texto: "Quem quiser verdadeiramente tornar-se santo não deve, salvo em alguns casos, justificar-se jamais, mas declarar-se sempre culpado, mesmo quando não for verdadeira a acusação pela qual é corrigido.", tradutor },
    tema: "humildade diante da correção", temasSecundarios: ["santidade", "humilhação", "discernimento"], contexto: "A máxima exalta a renúncia à autodefesa, com ressalva expressa para alguns casos.", testemunha,
    referenciasBiblicas: [{ passagem: "dichiararsi in colpa", referencia: "Mateus 5,39-41; Filipenses 2,3, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 27 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 27.", "A ressalva `eccetto alcuni casi` foi preservada para impedir uma leitura absoluta.", "`Corretto` foi traduzido por ‘corrigido’, não por ‘punido’."]
  },
  {
    id: "maxima-312", numero: 312, dia: 7, mes: "novembro",
    original: { idioma: "italiano", texto: "Quello che si sa delle virtù dei santi è il meno.", passagensLatinas: null },
    portugues: { texto: "O que se sabe sobre as virtudes dos santos é a menor parte.", tradutor },
    tema: "santidade oculta", temasSecundarios: ["Santos", "humildade", "conhecimento"], contexto: "A máxima lembra que o conhecimento documentado sobre a santidade é apenas uma parcela de sua realidade.", testemunha,
    referenciasBiblicas: [{ passagem: "quello che si sa ... è il meno", referencia: "1Samuel 16,7; Mateus 6,4, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 27 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 27.", "`Il meno` foi traduzido por ‘a menor parte’, solução natural para o sentido de insuficiência."]
  },
  {
    id: "maxima-313", numero: 313, dia: 8, mes: "novembro",
    original: { idioma: "italiano", texto: "Le reliquie dei santi debbono essere venerate e si possono tenere lodevolmente in camera; non si devono però portare addosso facilmente, perché molte volte non si tengono con quella decenza che conviene.", passagensLatinas: null },
    portugues: { texto: "As relíquias dos santos devem ser veneradas e podem ser mantidas dignamente no quarto; não se devem, porém, levar facilmente consigo, porque muitas vezes não são conservadas com a decência conveniente.", tradutor },
    tema: "veneração das relíquias", temasSecundarios: ["Santos", "devoção", "decência"], contexto: "A máxima afirma a veneração das relíquias, mas recomenda cautela com seu porte pessoal e conservação.", testemunha,
    referenciasBiblicas: [{ passagem: "reliquie dei santi debbono essere venerate", referencia: "2Reis 13,20-21; Atos 19,11-12, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 27 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 27.", "`Camera` foi traduzido por ‘quarto’, como nas máximas anteriores; `portare addosso` por ‘levar consigo’. "]
  },
  {
    id: "maxima-314", numero: 314, dia: 9, mes: "novembro",
    original: { idioma: "italiano", texto: "Gli antichi Patriarchi possedevano le ricchezze e, avendo moglie e figli, camminavano senza compromettere l'affetto in queste cose, sebbene le possedevano, perché ne facevano solamente uso; ed erano pronti a lasciarle per tutte quelle vie che la maestà di Dio gli avesse richiesto.", passagensLatinas: null },
    portugues: { texto: "Os antigos Patriarcas possuíam riquezas e, tendo mulher e filhos, caminhavam sem comprometer o afeto por essas coisas, embora as possuíssem, porque delas faziam apenas uso; e estavam prontos a deixá-las por qualquer caminho que a majestade de Deus lhes exigisse.", tradutor },
    tema: "uso desapegado dos bens", temasSecundarios: ["Patriarcas", "família", "pobreza"], contexto: "Os Patriarcas são apresentados como pessoas que possuíam bens e família sem se apegar a eles contra a vontade de Deus.", testemunha,
    referenciasBiblicas: [{ passagem: "Patriarchi ... moglie e figli ... ricchezze", referencia: "Gênesis 12–22; Hebreus 11,8-16, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 27 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 27.", "`Ne facevano solamente uso` foi traduzido por ‘delas faziam apenas uso’, preservando a distinção entre uso e posse afetiva."]
  },
  {
    id: "maxima-315", numero: 315, dia: 10, mes: "novembro",
    original: { idioma: "italiano", texto: "Bisogna pregare intensamente il Signore affinché ci accresca ogni giorno maggior lume e ardore della sua bontà.", passagensLatinas: null },
    portugues: { texto: "É preciso rezar intensamente ao Senhor para que aumente em nós, a cada dia, a luz e o ardor de sua bondade.", tradutor },
    tema: "oração por luz e ardor", temasSecundarios: ["oração", "graça", "bondade"], contexto: "A oração pede crescimento diário na compreensão e no amor da bondade divina.", testemunha,
    referenciasBiblicas: [{ passagem: "lume e ardore della sua bontà", referencia: "Efésios 1,17-18; Lucas 24,32, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 27 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 27.", "`Lume` foi traduzido por ‘luz’ e `ardore` por ‘ardor’, mantendo o paralelismo espiritual."]
  },
  {
    id: "maxima-316", numero: 316, dia: 11, mes: "novembro",
    original: { idioma: "italiano", texto: "È uso antico dei servi di Dio avere pronte alcune brevi preghiere e lanciarle spesso verso il cielo durante il giorno, alzando la mente a Dio da questo fango del mondo. Chi le utilizza, raccoglie grande frutto con poca fatica.", passagensLatinas: null },
    portugues: { texto: "É costume antigo dos servos de Deus ter prontas algumas orações breves e lançá-las frequentemente ao céu durante o dia, elevando a mente a Deus a partir deste lodo do mundo. Quem as utiliza colhe grande fruto com pouco esforço.", tradutor },
    tema: "orações breves durante o dia", temasSecundarios: ["orações jaculatórias", "atenção", "mundo"], contexto: "A tradição das orações breves é apresentada como meio simples e fecundo de elevar a mente a Deus.", testemunha,
    referenciasBiblicas: [{ passagem: "alzando la mente a Dio", referencia: "1Tessalonicenses 5,17; Colossenses 3,1-2, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 27 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 27.", "`Fango del mondo` foi traduzido por ‘lodo do mundo’, preservando a imagem depreciativa da fonte."]
  },
  {
    id: "maxima-317", numero: 317, dia: 12, mes: "novembro",
    original: { idioma: "italiano", texto: "Le tribolazioni, se si tollerano pazientemente per amore del Signore, all'inizio sembrano amare, ma poi diventano dolci, quando ci si abitua al gusto.", passagensLatinas: null },
    portugues: { texto: "As tribulações, quando suportadas pacientemente por amor do Senhor, no início parecem amargas, mas depois se tornam doces, quando a pessoa se acostuma ao seu sabor.", tradutor },
    tema: "doçura da tribulação", temasSecundarios: ["paciência", "sofrimento", "amor de Deus"], contexto: "A paciência transforma progressivamente a experiência amarga da tribulação.", testemunha,
    referenciasBiblicas: [{ passagem: "tribolazioni ... amare ... dolci", referencia: "Hebreus 12,11; Romanos 5,3-5, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 27 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 27.", "`Gusto` foi traduzido por ‘sabor’, mantendo a metáfora gustativa da fonte."]
  },
  {
    id: "maxima-318", numero: 318, dia: 13, mes: "novembro",
    original: { idioma: "italiano", texto: "L'uomo che ama Dio di vero cuore e lo considera sopra tutte le cose, a volte nell'orazione sente un flusso di lacrime e un'abbondanza di grazie e di sentimenti spirituali con tale veemenza, che è costretto a dire a Dio: «Signore, lasciami stare».", passagensLatinas: null },
    portugues: { texto: "A pessoa que ama a Deus de todo o coração e o considera acima de todas as coisas às vezes sente, na oração, um fluxo de lágrimas e uma abundância de graças e sentimentos espirituais com tal veemência que é levada a dizer a Deus: “Senhor, deixa-me em paz”.", tradutor },
    tema: "veemência das graças na oração", temasSecundarios: ["lágrimas", "consolação", "amor de Deus"], contexto: "A abundância de graças e lágrimas é descrita como experiência tão intensa que a pessoa pede alívio.", testemunha,
    referenciasBiblicas: [{ passagem: "flusso di lacrime e abbondanza di grazie", referencia: "Salmo 125(126),5-6; Lucas 7,38, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 28 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 28.", "`Lasciami stare` foi traduzido por ‘deixa-me em paz’, expressão natural que conserva o pedido de alívio, não de rejeição a Deus."]
  },
  {
    id: "maxima-319", numero: 319, dia: 14, mes: "novembro",
    original: { idioma: "italiano", texto: "L'uomo non deve cercare con sforzo questi gusti e devozioni sensibili, perché sarà ingannato facilmente dal demonio, e metterà in pericolo la salute.", passagensLatinas: null },
    portugues: { texto: "A pessoa não deve buscar com esforço essas consolações e devoções sensíveis, pois será facilmente enganada pelo demônio e colocará a saúde em perigo.", tradutor },
    tema: "prudência nas consolações sensíveis", temasSecundarios: ["oração", "demônio", "saúde"], contexto: "A busca forçada de experiências sensíveis é desaconselhada por risco de engano e de dano à saúde.", testemunha,
    referenciasBiblicas: [{ passagem: "non deve cercare ... gusti", referencia: "1João 4,1; 1Coríntios 6,19-20, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 28 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 28.", "`Gusti` foi traduzido por ‘consolações’, em continuidade com o vocabulário de setembro."]
  },
  {
    id: "maxima-320", numero: 320, dia: 15, mes: "novembro",
    original: { idioma: "italiano", texto: "Quando l'anima si è abbandonata nelle mani di Dio e si accontenta del volere divino, sta in buone mani; ed è sicura che qualsiasi cosa le accada non potrà essere che per il suo bene.", passagensLatinas: null },
    portugues: { texto: "Quando a alma se abandona nas mãos de Deus e se contenta com a vontade divina, está em boas mãos e tem a certeza de que tudo o que lhe acontecer só poderá ser para o seu bem.", tradutor },
    tema: "abandono à vontade divina", temasSecundarios: ["providência", "confiança", "paz"], contexto: "O abandono e o contentamento com a vontade divina fundamentam a confiança no bem providencial.", testemunha,
    referenciasBiblicas: [{ passagem: "abbandonata nelle mani di Dio", referencia: "Salmo 30(31),6; Romanos 8,28, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 28 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 28.", "`Sta in buone mani` foi traduzido literalmente por ‘está em boas mãos’, preservando a imagem de confiança."]
  },
  {
    id: "maxima-321", numero: 321, dia: 16, mes: "novembro",
    original: { idioma: "italiano", texto: "Conformarsi e arrendersi totalmente al volere divino, è la strada per non poter sbagliare veramente, che da sola ci conduce a gustare e a godere quella pace che gli uomini sensuali e terreni non conoscono.", passagensLatinas: null },
    portugues: { texto: "Conformar-se e render-se totalmente à vontade divina é o caminho para não errar verdadeiramente; só ele nos conduz a saborear e desfrutar aquela paz que as pessoas sensuais e terrenas não conhecem.", tradutor },
    tema: "conformidade à vontade divina", temasSecundarios: ["paz", "abandono", "desapego"], contexto: "A conformidade à vontade divina é apresentada como caminho da paz inacessível à vida centrada nos sentidos e no mundo.", testemunha,
    referenciasBiblicas: [{ passagem: "volere divino ... pace", referencia: "Romanos 12,2; Filipenses 4,7, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 28 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 28.", "`Uomini sensuali e terreni` foi traduzido por ‘pessoas sensuais e terrenas’, preservando o contraste ascético sem insulto contemporâneo."]
  },
  {
    id: "maxima-322", numero: 322, dia: 17, mes: "novembro",
    original: { idioma: "italiano", texto: "Soprattutto l'infermo si deve abbandonare, dicendo a Dio: «Signore se mi vuoi eccomi qui, sebbene non ho fatto alcun bene; fai di me quello che ti piace».", passagensLatinas: null },
    portugues: { texto: "Sobretudo o enfermo deve abandonar-se, dizendo a Deus: “Senhor, se me queres, eis-me aqui, embora eu não tenha feito bem algum; faze de mim o que te agradar”.", tradutor },
    tema: "abandono do enfermo", temasSecundarios: ["doença", "providência", "entrega"], contexto: "A pessoa enferma é convidada a oferecer-se à vontade divina com humildade.", testemunha,
    referenciasBiblicas: [{ passagem: "eccomi qui ... fai di me quello che ti piace", referencia: "1Samuel 3,4; Lucas 1,38; Romanos 12,1, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 28 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 28.", "A fala direta foi preservada; `se mi vuoi` mantém o sentido de ‘se me queres’, não de desejo de morrer."]
  },
  {
    id: "maxima-323", numero: 323, dia: 18, mes: "novembro",
    original: { idioma: "italiano", texto: "Non si faccia nessun tipo di rumore in chiesa, se non per grandissima necessità.", passagensLatinas: null },
    portugues: { texto: "Não se faça nenhum tipo de barulho na igreja, salvo por enorme necessidade.", tradutor },
    tema: "silêncio na igreja", temasSecundarios: ["recolhimento", "liturgia", "respeito"], contexto: "O silêncio no espaço eclesial é tratado como expressão de respeito e recolhimento.", testemunha,
    referenciasBiblicas: [{ passagem: "nessun tipo di rumore in chiesa", referencia: "Habacuque 2,20; Eclesiastes 5,1, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 28 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 28.", "`Chiesa` foi traduzido por ‘igreja’, referindo-se ao edifício e ao espaço litúrgico."]
  },
  {
    id: "maxima-324", numero: 324, dia: 19, mes: "novembro",
    original: { idioma: "italiano", texto: "Al servo di Dio è necessaria la pazienza, e non si deve angosciare nel travaglio, ma deve aspettare la consolazione.", passagensLatinas: null },
    portugues: { texto: "Ao servo de Deus é necessária a paciência; ele não deve angustiar-se na tribulação, mas esperar a consolação.", tradutor },
    tema: "paciência na tribulação", temasSecundarios: ["consolação", "perseverança", "sofrimento"], contexto: "A paciência permite atravessar a tribulação na expectativa da consolação.", testemunha,
    referenciasBiblicas: [{ passagem: "aspettare la consolazione", referencia: "Romanos 8,25; Salmo 41(42),6, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 28 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 28.", "`Travaglio` foi traduzido por ‘tribulação’, em continuidade com o corpus."]
  },
  {
    id: "maxima-325", numero: 325, dia: 20, mes: "novembro",
    original: { idioma: "italiano", texto: "I secolari, una volta scelto il loro stato da secolare, continuino a vivere in esso, e perseverino negli esercizi devoti che hanno iniziato e nelle opere di carità, perché nel momento della loro morte saranno poi contenti.", passagensLatinas: null },
    portugues: { texto: "Os leigos, uma vez escolhido o seu estado de vida secular, continuem a viver nele e perseverem nos exercícios devotos que iniciaram e nas obras de caridade, pois no momento da morte ficarão contentes.", tradutor },
    tema: "perseverança no estado secular", temasSecundarios: ["leigos", "caridade", "vocação"], contexto: "A fidelidade ao estado secular é associada à perseverança na devoção e na caridade.", testemunha,
    referenciasBiblicas: [{ passagem: "stato da secolare ... opere di carità", referencia: "1Coríntios 7,17.20; Mateus 25,34-40, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 28 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 28.", "`Secolari` foi traduzido por ‘leigos’, e `stato` por ‘estado de vida’, explicitando o contexto vocacional."]
  },
  {
    id: "maxima-326", numero: 326, dia: 21, mes: "novembro",
    original: { idioma: "italiano", texto: "La vocazione alla religione è uno dei grandi benefici che la Madre di Dio ottiene da suo Figlio per i suoi devoti.", passagensLatinas: null },
    portugues: { texto: "A vocação à vida religiosa é um dos grandes benefícios que a Mãe de Deus obtém de seu Filho para os seus devotos.", tradutor },
    tema: "vocação religiosa", temasSecundarios: ["Maria", "vida religiosa", "graça"], contexto: "A vocação religiosa é apresentada como graça obtida por Maria para os seus devotos.", testemunha,
    referenciasBiblicas: [{ passagem: "Madre di Dio ... suo Figlio", referencia: "João 2,1-11; Lucas 1,38, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 28 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 28.", "`Vocazione alla religione` foi traduzido por ‘vocação à vida religiosa’, evitando uma leitura abstrata da palavra ‘religione’. "]
  },
  {
    id: "maxima-327", numero: 327, dia: 22, mes: "novembro",
    original: { idioma: "italiano", texto: "Non c'è cosa più pericolosa per la vita spirituale che volersi sostenere da soli.", passagensLatinas: null },
    portugues: { texto: "Nada é mais perigoso para a vida espiritual que querer sustentar-se sozinho.", tradutor },
    tema: "necessidade de auxílio espiritual", temasSecundarios: ["humildade", "comunidade", "direção"], contexto: "A autossuficiência é apresentada como perigo para a vida espiritual.", testemunha,
    referenciasBiblicas: [{ passagem: "volersi sostenere da soli", referencia: "Eclesiastes 4,9-12; Gálatas 6,2, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 28 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 28.", "`Sostenere` foi traduzido por ‘sustentar-se’, preservando a imagem de apoio espiritual."]
  },
  {
    id: "maxima-328", numero: 328, dia: 23, mes: "novembro",
    original: { idioma: "italiano", texto: "Fra le cose che si devono domandare a Dio c'è la perseveranza nel fare bene e nel ben servire lo stesso Signore; perché, se si avesse la pazienza e si perseverasse nella buona vita iniziata, si acquisterebbe grandissimo spirito.", passagensLatinas: null },
    portugues: { texto: "Entre as coisas que se devem pedir a Deus está a perseverança em fazer o bem e em servir bem o próprio Senhor; pois, se houvesse paciência e perseverança na vida boa iniciada, adquirir-se-ia grande espírito.", tradutor },
    tema: "perseverança na vida boa", temasSecundarios: ["oração", "serviço", "paciência"], contexto: "A perseverança, pedida a Deus e praticada com paciência, conduz ao crescimento espiritual.", testemunha,
    referenciasBiblicas: [{ passagem: "perseveranza nel fare bene", referencia: "Gálatas 6,9; Mateus 24,13, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 28 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 28.", "`Grandissimo spirito` foi traduzido por ‘grande espírito’, preservando a expressão sem especificar um carisma."]
  },
  {
    id: "maxima-329", numero: 329, dia: 24, mes: "novembro",
    original: { idioma: "italiano", texto: "È perfetto alla scuola di Cristo, chi disprezza di essere disprezzato, godendo del disprezzo di sé stesso e reputandosi nulla.", passagensLatinas: null },
    portugues: { texto: "É perfeito na escola de Cristo quem despreza ser desprezado, alegrando-se com o desprezo de si mesmo e considerando-se nada.", tradutor },
    tema: "humildade na escola de Cristo", temasSecundarios: ["humilhação", "desapego", "Cristo"], contexto: "A perfeição é descrita como aceitação voluntária da humilhação e renúncia à autoimportância.", testemunha,
    referenciasBiblicas: [{ passagem: "disprezza di essere disprezzato", referencia: "Filipenses 2,5-8; Lucas 9,23, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 28 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 28.", "`Reputandosi nulla` foi traduzido por ‘considerando-se nada’, preservando a hipérbole de humildade sem transformá-la em negação da dignidade humana."]
  },
  {
    id: "maxima-330", numero: 330, dia: 25, mes: "novembro",
    original: { idioma: "italiano", texto: "La strada che Dio traccia a quelle anime che ama, con il permettere che siano tentate, con il disporre che siano tribolate, è un vero matrimonio tra Lui e loro.", passagensLatinas: null },
    portugues: { texto: "O caminho que Deus traça para as almas que ama, permitindo que sejam tentadas e dispondo que sejam atribuladas, é um verdadeiro matrimônio entre ele e elas.", tradutor },
    tema: "provação como união com Deus", temasSecundarios: ["tentação", "tribulação", "amor divino"], contexto: "A provação é interpretada como vínculo de união entre Deus e as almas que ele ama.", testemunha,
    referenciasBiblicas: [{ passagem: "un vero matrimonio tra Lui e loro", referencia: "Oséias 2,16-22; Efésios 5,25-32, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 28 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 28.", "`Matrimonio` foi traduzido por ‘matrimônio’, preservando a imagem nupcial bíblica e mística."]
  },
  {
    id: "maxima-331", numero: 331, dia: 26, mes: "novembro",
    original: { idioma: "italiano", texto: "Nelle tentazioni che suggerisce la carne, il cristiano ricorra subito a Dio, faccia sopra il suo cuore tre volte il segno della croce e dica: «Cristo, Figlio di Dio, abbi misericordia di me».", passagensLatinas: null },
    portugues: { texto: "Nas tentações sugeridas pela carne, o cristão recorra imediatamente a Deus, faça três vezes sobre o coração o sinal da cruz e diga: “Cristo, Filho de Deus, tende piedade de mim”.", tradutor },
    tema: "oração na tentação", temasSecundarios: ["sinal da cruz", "misericórdia", "castidade"], contexto: "A máxima recomenda invocação imediata de Cristo e o sinal da cruz diante da tentação.", testemunha,
    referenciasBiblicas: [{ passagem: "Cristo, Figlio di Dio, abbi misericordia di me", referencia: "Marcos 10,47-48; Lucas 18,38-39, como fórmula de súplica" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 28 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 28.", "A invocação foi traduzida por ‘tende piedade de mim’, forma litúrgica brasileira para `abbi misericordia di me`."]
  },
  {
    id: "maxima-332", numero: 332, dia: 27, mes: "novembro",
    original: { idioma: "italiano", texto: "In materia di tentazioni, alcune si vincono fuggendo, altre resistendo, altre disprezzando.", passagensLatinas: null },
    portugues: { texto: "Em matéria de tentações, vencem-se algumas fugindo, outras resistindo e outras desprezando.", tradutor },
    tema: "três respostas à tentação", temasSecundarios: ["discernimento", "fuga", "resistência"], contexto: "A resposta à tentação varia: fugir, resistir ou desprezar, conforme o caso.", testemunha,
    referenciasBiblicas: [{ passagem: "fuggendo, resistendo, disprezzando", referencia: "2Timóteo 2,22; Tiago 4,7; Tito 3,9, como síntese" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 28 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 28.", "A enumeração tripla foi preservada sem escolher um único método universal de combate."]
  },
  {
    id: "maxima-333", numero: 333, dia: 28, mes: "novembro",
    original: { idioma: "italiano", texto: "Bisogna aver vissuto e fatto molto per acquistare la prudenza e giudicare bene.", passagensLatinas: null },
    portugues: { texto: "É preciso ter vivido e feito muito para adquirir prudência e julgar bem.", tradutor },
    tema: "experiência e prudência", temasSecundarios: ["discernimento", "maturidade", "juízo"], contexto: "A prudência é apresentada como fruto de experiência vivida e de prática, não apenas de teoria.", testemunha,
    referenciasBiblicas: [{ passagem: "acquistare la prudenza e giudicare bene", referencia: "Hebreus 5,14; Provérbios 1,2-7, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 28 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 28.", "`Vissuto e fatto molto` foi traduzido literalmente por ‘ter vivido e feito muito’, sem quantificar a experiência."]
  },
  {
    id: "maxima-334", numero: 334, dia: 29, mes: "novembro",
    original: { idioma: "italiano", texto: "È grande perfezione di un cuore quando è discreto, e non sorpassa i limiti della convenienza.", passagensLatinas: null },
    portugues: { texto: "É grande perfeição de um coração ser discreto e não ultrapassar os limites da conveniência.", tradutor },
    tema: "discrição e conveniência", temasSecundarios: ["prudência", "moderação", "perfeição"], contexto: "A discrição é descrita como perfeição do coração e respeito pelos limites convenientes.", testemunha,
    referenciasBiblicas: [{ passagem: "non sorpassa i limiti della convenienza", referencia: "Filipenses 4,5; Eclesiástico 3,17-24, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 28 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 28.", "`Convenienza` foi traduzido por ‘conveniência’, termo que conserva a ideia histórica de decoro e medida."]
  },
  {
    id: "maxima-335", numero: 335, dia: 30, mes: "novembro",
    original: { idioma: "italiano", texto: "Bisogna cercare Cristo dove Cristo non c'è, cioè nelle croci e nelle tribolazioni, nelle quali adesso non c'è, ma si trova così bene nella gloria.", passagensLatinas: null },
    portugues: { texto: "É preciso buscar Cristo onde Cristo não está, isto é, nas cruzes e tribulações, nas quais agora não está, mas se encontra tão bem na glória.", tradutor },
    tema: "buscar Cristo nas tribulações", temasSecundarios: ["cruz", "glória", "sofrimento"], contexto: "A máxima usa um paradoxo: Cristo não está nas tribulações como condição gloriosa, mas deve ser buscado nelas pela fé.", testemunha,
    referenciasBiblicas: [{ passagem: "nelle croci e nelle tribolazioni ... nella gloria", referencia: "Lucas 24,26; Filipenses 2,8-11, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 28 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 28.", "O paradoxo `dove Cristo non c’è` foi preservado; a nota contextual impede lê-lo como negação da presença solidária de Cristo no sofrimento."]
  },
  {
    id: "maxima-336", numero: 336, dia: 1, mes: "dezembro",
    original: { idioma: "italiano", texto: "La confessione frequente dei peccati è causa di grande bene per l'anima, perché la purifica, la risana e la rafforza nel servizio di Dio; però nei giorni prestabiliti non si deve abbandonare a causa di qualunque cosa da fare che capiti, ma prima ci si deve confessare e poi operare, cosa che si fa meglio con questo aiuto.", passagensLatinas: null },
    portugues: { texto: "A Confissão frequente dos pecados é causa de grande bem para a alma, porque a purifica, cura e fortalece no serviço de Deus; porém, nos dias estabelecidos, não deve ser abandonada por causa de qualquer tarefa que apareça: primeiro deve-se confessar e depois agir, o que se faz melhor com esse auxílio.", tradutor },
    tema: "frequência da Confissão", temasSecundarios: ["purificação", "serviço de Deus", "perseverança"], contexto: "A Confissão frequente é apresentada como auxílio para a purificação e o serviço de Deus, sem ser deslocada por ocupações comuns.", testemunha,
    referenciasBiblicas: [{ passagem: "confessione ... purifica, risana e rafforza", referencia: "1João 1,9; Tiago 5,16, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 29 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 29.", "`Operare` foi traduzido por ‘agir’, mantendo o sentido amplo de realizar as tarefas."]
  },
  {
    id: "maxima-337", numero: 337, dia: 2, mes: "dezembro",
    original: { idioma: "italiano", texto: "Quando ci si va a confessare, ci si persuada di trovare Gesù Cristo nella persona del confessore.", passagensLatinas: null },
    portugues: { texto: "Quando se vai confessar-se, deve-se convencer de encontrar Jesus Cristo na pessoa do confessor.", tradutor },
    tema: "Cristo presente no confessor", temasSecundarios: ["Confissão", "sacramento", "fé"], contexto: "A máxima convida a reconhecer Cristo na pessoa do ministro da Confissão.", testemunha,
    referenciasBiblicas: [{ passagem: "trovare Gesù Cristo nella persona del confessore", referencia: "Mateus 10,40; Lucas 10,16, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 29 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 29.", "`Ci si persuada` foi traduzido por ‘deve-se convencer’, preservando o caráter de ato de fé."]
  },
  {
    id: "maxima-338", numero: 338, dia: 3, mes: "dezembro",
    original: { idioma: "italiano", texto: "Datemi dieci persone veramente distaccate e con esse sento che potrei convertire tutto il mondo.", passagensLatinas: null },
    portugues: { texto: "Dai-me dez pessoas verdadeiramente desapegadas e, com elas, sinto que poderia converter o mundo inteiro.", tradutor },
    tema: "força apostólica do desapego", temasSecundarios: ["missão", "caridade", "conversão"], contexto: "O desapego é apresentado como força apostólica capaz de sustentar uma missão universal.", testemunha,
    referenciasBiblicas: [{ passagem: "dieci persone veramente distaccate", referencia: "Atos 2,42-47; Marcos 16,15, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 29 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 29.", "A primeira pessoa foi preservada, pois a máxima é uma fala atribuída diretamente a Filipe."]
  },
  {
    id: "maxima-339", numero: 339, dia: 4, mes: "dezembro",
    original: { idioma: "italiano", texto: "Chi si comunica spesso come si deve, produce buon frutto: frutto di umiltà, frutto di pazienza, frutto di tutte le virtù.", passagensLatinas: null },
    portugues: { texto: "Quem comunga frequentemente como deve produz bom fruto: fruto de humildade, fruto de paciência, fruto de todas as virtudes.", tradutor },
    tema: "frutos da comunhão", temasSecundarios: ["Eucaristia", "humildade", "paciência"], contexto: "A comunhão frequente é avaliada por seus frutos concretos na vida virtuosa.", testemunha,
    referenciasBiblicas: [{ passagem: "frutto di umiltà ... di tutte le virtù", referencia: "João 15,4-5; Gálatas 5,22-23, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 29 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 29.", "A repetição de `frutto` foi mantida para conservar o efeito enumerativo."]
  },
  {
    id: "maxima-340", numero: 340, dia: 5, mes: "dezembro",
    original: { idioma: "italiano", texto: "I penitenti non vadano a confessarsi per fini concreti, come per avere l'elemosina, ecc.", passagensLatinas: null },
    portugues: { texto: "Os penitentes não vão confessar-se por fins concretos, como para obter esmola etc.", tradutor },
    tema: "retidão de intenção na Confissão", temasSecundarios: ["Confissão", "esmola", "intenção"], contexto: "A Confissão não deve ser usada como meio instrumental para obter vantagens materiais.", testemunha,
    referenciasBiblicas: [{ passagem: "non ... per avere l’elemosina", referencia: "Mateus 6,1-4; Tiago 2,14-17, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 29 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 29.", "`Fini concreti` foi traduzido por ‘fins concretos’, preservando a crítica a uma intenção instrumental."]
  },
  {
    id: "maxima-341", numero: 341, dia: 6, mes: "dezembro",
    original: { idioma: "italiano", texto: "Non si deve fare alcun affidamento su una persona impudica, sebbene possieda altre virtù.", passagensLatinas: null },
    portugues: { texto: "Não se deve depositar confiança alguma numa pessoa impudica, ainda que possua outras virtudes.", tradutor },
    tema: "prudência e impudor", temasSecundarios: ["confiança", "castidade", "discernimento"], contexto: "A máxima estabelece uma advertência moral específica contra confiar em pessoa marcada pela impudência.", testemunha,
    referenciasBiblicas: [{ passagem: "persona impudica ... altre virtù", referencia: "1Coríntios 5,9-13; Efésios 5,3-5, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 29 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 29.", "`Impudica` foi traduzido por ‘impudica’, mantendo o termo moral histórico sem escolher um comportamento específico não nomeado."]
  },
  {
    id: "maxima-342", numero: 342, dia: 7, mes: "dezembro",
    original: { idioma: "italiano", texto: "Lo Spirito Santo dice dei prelati e dei pastori: «Chi ascolta e obbedisce ai suoi superiori, ascolta e obbedisce a me; e chi li disprezza, disprezza e disobbedisce a me».", passagensLatinas: null },
    portugues: { texto: "O Espírito Santo diz a respeito dos prelados e pastores: “Quem os ouve e obedece aos seus superiores ouve e obedece a mim; e quem os despreza despreza e desobedece a mim”.", tradutor },
    tema: "obediência aos pastores", temasSecundarios: ["Espírito Santo", "autoridade", "Igreja"], contexto: "A autoridade dos prelados e pastores é apresentada como participação na autoridade de Deus.", testemunha,
    referenciasBiblicas: [{ passagem: "chi ascolta ... i suoi superiori", referencia: "Lucas 10,16; Hebreus 13,17, como síntese" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 29 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 29.", "A frase foi mantida como citação atribuída ao Espírito Santo, mas sem inventar uma referência bíblica literal única; as referências registradas são alusões temáticas."]
  },
  {
    id: "maxima-343", numero: 343, dia: 8, mes: "dezembro",
    original: { idioma: "italiano", texto: "Il servo di Dio, se vuole camminare con più sicurezza tra le tante insidie sparse in ogni luogo, abbia per mediatrice presso suo Figlio la beatissima Vergine.", passagensLatinas: null },
    portugues: { texto: "O servo de Deus, se quiser caminhar com maior segurança entre as muitas ciladas espalhadas por toda parte, tenha a Santíssima Virgem como mediadora junto de seu Filho.", tradutor },
    tema: "mediação da Virgem", temasSecundarios: ["Maria", "proteção", "perseverança"], contexto: "A mediação mariana é invocada como auxílio no caminho espiritual cercado de ciladas.", testemunha,
    referenciasBiblicas: [{ passagem: "mediatrice presso suo Figlio", referencia: "João 2,1-11; Lucas 1,46-49, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 29 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 29.", "`Insidie` foi traduzido por ‘ciladas’, preservando a metáfora de armadilhas."]
  },
  {
    id: "maxima-344", numero: 344, dia: 9, mes: "dezembro",
    original: { idioma: "italiano", texto: "L'infermo può avere il desiderio di guarire (purché lo sigilli sempre con un «se così piace a Dio, se sia utile per la mia anima»), perché in salute si possono fare molte cose buone, che la malattia impedisce.", passagensLatinas: null },
    portugues: { texto: "O enfermo pode desejar curar-se, desde que sempre sele esse desejo com um “se assim agradar a Deus, se for útil para a minha alma”, porque, com saúde, podem-se fazer muitas coisas boas que a doença impede.", tradutor },
    tema: "desejo de cura subordinado a Deus", temasSecundarios: ["doença", "oração", "providência"], contexto: "O desejo legítimo de cura deve ser submetido à vontade de Deus e ao bem da alma.", testemunha,
    referenciasBiblicas: [{ passagem: "se così piace a Dio, se sia utile per la mia anima", referencia: "Mateus 26,39; 2Coríntios 12,7-10, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 29 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 29.", "A fórmula condicional foi preservada e não foi transformada em promessa de cura."]
  },
  {
    id: "maxima-345", numero: 345, dia: 10, mes: "dezembro",
    original: { idioma: "italiano", texto: "Nella malattia bisogna domandare al Signore la pazienza, perché spesso quando l'uomo è guarito non solo non fa quel bene che si era proposto quando era ammalato, ma moltiplica i peccati e l'ingratitudine.", passagensLatinas: null },
    portugues: { texto: "Na doença, é preciso pedir ao Senhor paciência, porque muitas vezes, quando a pessoa se cura, não somente deixa de fazer o bem que havia decidido fazer quando estava enferma, mas multiplica os pecados e a ingratidão.", tradutor },
    tema: "paciência na doença", temasSecundarios: ["enfermidade", "gratidão", "conversão"], contexto: "A doença pode gerar bons propósitos que precisam ser mantidos depois da recuperação.", testemunha,
    referenciasBiblicas: [{ passagem: "domandare ... la pazienza", referencia: "Tiago 5,7-11; Lucas 17,11-19, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 29 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 29.", "`Guarito` foi traduzido por ‘se cura’, sem confundir a recuperação física com a santificação automática."]
  },
  {
    id: "maxima-346", numero: 346, dia: 11, mes: "dezembro",
    original: { idioma: "italiano", texto: "La talpa è un topo cieco, che sta sempre nella terra: mangia o scava la terra, ma non si sazia mai di terra. Tale è l'uomo e la donna avara.", passagensLatinas: null },
    portugues: { texto: "A toupeira é um rato cego que vive sempre na terra: come ou escava a terra, mas nunca se sacia de terra. Assim é o homem e a mulher avarentos.", tradutor },
    tema: "imagem da avareza", temasSecundarios: ["avareza", "insaciabilidade", "bens"], contexto: "A toupeira é usada como imagem da pessoa avarenta, insaciável e voltada continuamente para a terra.", testemunha,
    referenciasBiblicas: [{ passagem: "non si sazia mai di terra", referencia: "Eclesiastes 5,9-10; Lucas 12,16-21, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 29 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 29.", "`Talpa` foi traduzido por ‘toupeira’ e `topo` por ‘rato’, preservando a zoologia popular da fonte."]
  },
  {
    id: "maxima-347", numero: 347, dia: 12, mes: "dezembro",
    original: { idioma: "italiano", texto: "I penitenti non facciano voti senza consiglio del padre spirituale.", passagensLatinas: null },
    portugues: { texto: "Os penitentes não façam votos sem o conselho do Padre espiritual.", tradutor },
    tema: "discernimento dos votos", temasSecundarios: ["Confissão", "votos", "direção espiritual"], contexto: "A emissão de votos deve ser submetida ao discernimento do Padre espiritual.", testemunha,
    referenciasBiblicas: [{ passagem: "non facciano voti senza consiglio", referencia: "Eclesiastes 5,1-5; Atos 5,4, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 29 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 29.", "`Padre spirituale` foi traduzido por ‘Padre espiritual’, preservando o tratamento eclesial."]
  },
  {
    id: "maxima-348", numero: 348, dia: 13, mes: "dezembro",
    original: { idioma: "italiano", texto: "Se si fanno tali voti, è meglio farli sotto condizione, ad esempio: «Io faccio voto di far dire due messe nel giorno di Santa Lucia con questo accordo: “Se potrò, se me ne ricorderò”, perché se non mi ricorderò, non voglio essere obbligato».", passagensLatinas: null },
    portugues: { texto: "Se forem feitos tais votos, é melhor fazê-los sob condição, por exemplo: “Faço voto de mandar celebrar duas Missas no dia de Santa Luzia com este acordo: ‘Se puder, se me lembrar’, pois, se não me lembrar, não quero ser obrigado”.", tradutor },
    tema: "votos condicionais", temasSecundarios: ["votos", "prudência", "Santa Luzia"], contexto: "A máxima oferece um exemplo de voto condicionado à capacidade e à lembrança da pessoa.", testemunha,
    referenciasBiblicas: [{ passagem: "voto ... sotto condizione", referencia: "Eclesiastes 5,3-5; Mateus 5,33-37, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 29 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 29.", "`Far dire due messe` foi traduzido por ‘mandar celebrar duas Missas’, explicitando o sentido devocional histórico.", "A condição foi preservada sem transformá-la em dispensa automática de qualquer voto."]
  },
  {
    id: "maxima-349", numero: 349, dia: 14, mes: "dezembro",
    original: { idioma: "italiano", texto: "Quando occorrerà comprare qualche cosa, la persona non deve essere mossa dal desiderio che porta a quella cosa, ma dalla necessità e dal bisogno, poiché non si debbono comprare i desideri.", passagensLatinas: null },
    portugues: { texto: "Quando for necessário comprar alguma coisa, a pessoa não deve ser movida pelo desejo que a conduz àquela coisa, mas pela necessidade e pela carência, pois não se devem comprar desejos.", tradutor },
    tema: "necessidade e consumo", temasSecundarios: ["desapego", "sobriedade", "discernimento"], contexto: "A compra deve ser motivada por necessidade real, não pelo desejo criado pelo próprio objeto.", testemunha,
    referenciasBiblicas: [{ passagem: "non si debbono comprare i desideri", referencia: "Mateus 6,19-21; Lucas 12,15, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 29 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 29.", "O paradoxo final foi traduzido literalmente por ‘não se devem comprar desejos’. "]
  },
  {
    id: "maxima-350", numero: 350, dia: 15, mes: "dezembro",
    original: { idioma: "italiano", texto: "Certi piccoli attacchi volontari dell'amor proprio bisogna potarli e poi zapparli attorno, e togliere la terra finché si arrivi in fondo, dove sono abbarbicati e avviluppati.", passagensLatinas: null },
    portugues: { texto: "Certos pequenos brotos voluntários do amor-próprio é preciso podá-los e depois cavar ao redor deles, retirando a terra até chegar ao fundo, onde estão enraizados e entrelaçados.", tradutor },
    tema: "erradicação do amor-próprio", temasSecundarios: ["humildade", "exame interior", "mortificação"], contexto: "A metáfora agrícola descreve o trabalho profundo de remover manifestações pequenas, mas voluntárias, do amor-próprio.", testemunha,
    referenciasBiblicas: [{ passagem: "potarli ... togliere la terra ... in fondo", referencia: "Mateus 3,10; João 15,2, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 29 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 29.", "`Attacchi` foi traduzido por ‘brotos’, seguindo a metáfora de poda e raízes; não por ‘ataques’ em sentido psicológico.", "`Zappare` foi traduzido por ‘cavar’, sem substituir a ferramenta agrícola por termo moderno."]
  },
  {
    id: "maxima-351", numero: 351, dia: 16, mes: "dezembro",
    original: { idioma: "italiano", texto: "Bisogna che la persona sia pronta a sostenere il momento in cui, per motivo di virtù, sia mortificata da altri, e ancora quando Dio permettesse che fosse tenuta in cattiva considerazione da altri, e fosse guardata e cacciata come una pecora infetta.", passagensLatinas: null },
    portugues: { texto: "É preciso que a pessoa esteja pronta para suportar o momento em que, por causa da virtude, seja mortificada por outros, e também quando Deus permitir que seja mal considerada por outros, olhada e expulsa como uma ovelha infectada.", tradutor },
    tema: "humilhação por causa da virtude", temasSecundarios: ["perseguição", "humildade", "rejeição"], contexto: "A fidelidade à virtude pode trazer má consideração e rejeição social, comparadas à expulsão de uma ovelha doente.", testemunha,
    referenciasBiblicas: [{ passagem: "come una pecora infetta", referencia: "Salmo 43(44),23; João 15,18-20, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 29 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 29.", "`Mortificata da altri` foi traduzido por ‘mortificada por outros’, preservando o sentido de humilhada ou contrariada."]
  },
  {
    id: "maxima-352", numero: 352, dia: 17, mes: "dezembro",
    original: { idioma: "italiano", texto: "Il demonio nostro nemico, che combatte contro di noi, per poterci vincere, cerca di disunirci nelle case e di far nascere liti, odi, contese e competizioni, perché, mentre noi combattiamo uno contro l'altro, egli viene sicuramente a vincere.", passagensLatinas: null },
    portugues: { texto: "O demônio, nosso inimigo, que combate contra nós, para poder vencer-nos procura dividir-nos nas casas e fazer nascer brigas, ódios, disputas e rivalidades, pois, enquanto lutamos uns contra os outros, ele certamente vence.", tradutor },
    tema: "divisão nas famílias", temasSecundarios: ["demônio", "paz", "comunidade"], contexto: "A divisão doméstica é descrita como estratégia do demônio para vencer enquanto as pessoas se combatem entre si.", testemunha,
    referenciasBiblicas: [{ passagem: "disunirci nelle case ... combattiamo uno contro l’altro", referencia: "Marcos 3,24-25; Efésios 4,26-27, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 30 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 30.", "`Contese` e `competizioni` foram traduzidos por ‘disputas’ e ‘rivalidades’, preservando a gradação dos conflitos."]
  },
  {
    id: "maxima-353", numero: 353, dia: 18, mes: "dezembro",
    original: { idioma: "italiano", texto: "Chi non pensa ai benefici che riceve da Dio in questa vita e a quelli più grandi che la sua misericordia ha preparato di là nella vita beata, non nutre ma raffredda l'amore verso lo stesso Signore.", passagensLatinas: null },
    portugues: { texto: "Quem não pensa nos benefícios que recebe de Deus nesta vida e nos benefícios maiores que a sua misericórdia preparou na vida bem-aventurada não alimenta, mas esfria, o amor pelo próprio Senhor.", tradutor },
    tema: "memória dos benefícios de Deus", temasSecundarios: ["gratidão", "vida eterna", "amor"], contexto: "A memória dos benefícios presentes e futuros mantém aquecido o amor a Deus.", testemunha,
    referenciasBiblicas: [{ passagem: "benefici ... vita beata", referencia: "Salmo 102(103),2-5; 1Coríntios 2,9, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 30 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 30.", "`Di là` foi traduzido por ‘na vida bem-aventurada’, explicitando o horizonte escatológico sem acrescentar outro local."]
  },
  {
    id: "maxima-354", numero: 354, dia: 19, mes: "dezembro",
    original: { idioma: "italiano", texto: "Se un'anima potesse del tutto astenersi dai peccati veniali, la maggior pena che avrebbe, sarebbe l'essere trattenuta in questa vita, per il grande desiderio che avrebbe di unirsi a Dio.", passagensLatinas: null },
    portugues: { texto: "Se uma alma pudesse abster-se completamente dos pecados veniais, a maior pena que teria seria permanecer retida nesta vida, pelo grande desejo de unir-se a Deus.", tradutor },
    tema: "desejo da união com Deus", temasSecundarios: ["pecado venial", "vida eterna", "amor"], contexto: "A ausência de pecado venial é associada a um desejo tão intenso de Deus que a permanência terrena se torna penosa.", testemunha,
    referenciasBiblicas: [{ passagem: "desiderio ... di unirsi a Dio", referencia: "Filipenses 1,23; Salmo 41(42),2-3, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 30 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 30.", "`Trattenuta` foi traduzido por ‘permanecer retida’, preservando a ideia de demora involuntária."]
  },
  {
    id: "maxima-355", numero: 355, dia: 20, mes: "dezembro",
    original: { idioma: "italiano", texto: "Nelle persecuzioni che i cattivi ci muovono contro la pietà e la devozione, bisogna avere lo sguardo al Signore che serviamo, e alla testimonianza della buona coscienza.", passagensLatinas: null },
    portugues: { texto: "Nas perseguições que os maus movem contra a piedade e a devoção, é preciso manter o olhar no Senhor que servimos e no testemunho da boa consciência.", tradutor },
    tema: "perseverança sob perseguição", temasSecundarios: ["piedade", "consciência", "perseguição"], contexto: "A pessoa perseguida por sua piedade deve fixar-se em Deus e na consciência reta, não na aprovação dos perseguidores.", testemunha,
    referenciasBiblicas: [{ passagem: "persecuzioni ... buona coscienza", referencia: "1Pedro 3,14-16; Mateus 5,10-12, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 30 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 30.", "`I cattivi` foi traduzido por ‘os maus’, preservando a avaliação moral direta da fonte."]
  },
  {
    id: "maxima-356", numero: 356, dia: 21, mes: "dezembro",
    original: { idioma: "italiano", texto: "Quanta pazienza ebbe Cristo, Re e Signore del cielo e della terra, con gli apostoli, subendo da loro molte inciviltà e cattive maniere, essendo loro poveri e rozzi pescatori! Ora, quanto maggiormente dobbiamo noi sopportare il nostro prossimo, se ci tratta con inciviltà.", passagensLatinas: null },
    portugues: { texto: "Quanta paciência teve Cristo, Rei e Senhor do céu e da terra, com os Apóstolos, suportando deles muitas grosserias e maus modos, sendo eles pobres e rudes pescadores! Quanto mais devemos nós suportar o próximo quando nos trata com grosseria.", tradutor },
    tema: "paciência com o próximo", temasSecundarios: ["Cristo", "Apóstolos", "caridade"], contexto: "A paciência de Cristo com os Apóstolos é apresentada como medida para suportar o próximo.", testemunha,
    referenciasBiblicas: [{ passagem: "pazienza ... con gli apostoli", referencia: "Marcos 9,33-37; Lucas 22,24-27, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 30 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 30.", "`Inciviltà` foi traduzido por ‘grosseria’ e `rozzi` por ‘rudes’, preservando o tom do original sem coloquialismo anacrônico."]
  },
  {
    id: "maxima-357", numero: 357, dia: 22, mes: "dezembro",
    original: { idioma: "italiano", texto: "Bisogna darsi tutto a Dio.", passagensLatinas: null },
    portugues: { texto: "É preciso entregar-se inteiramente a Deus.", tradutor },
    tema: "entrega total a Deus", temasSecundarios: ["abandono", "consagração", "oração"], contexto: "A máxima resume a atitude de entrega total da pessoa a Deus.", testemunha,
    referenciasBiblicas: [{ passagem: "darsi tutto a Dio", referencia: "Romanos 12,1; Lucas 10,27, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 30 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 30.", "`Darsi tutto` foi traduzido por ‘entregar-se inteiramente’, preservando a totalidade da oferta."]
  },
  {
    id: "maxima-358", numero: 358, dia: 23, mes: "dezembro",
    original: { idioma: "italiano", texto: "L'anima che si dà tutta a Dio è tutta di Dio.", passagensLatinas: null },
    portugues: { texto: "A alma que se entrega inteiramente a Deus é inteiramente de Deus.", tradutor },
    tema: "pertença total a Deus", temasSecundarios: ["consagração", "abandono", "identidade"], contexto: "A entrega total é seguida pela afirmação de pertença total a Deus.", testemunha,
    referenciasBiblicas: [{ passagem: "tutta di Dio", referencia: "Romanos 14,7-8; 1Coríntios 6,19-20, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 30 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 30.", "O paralelismo `tutta ... tutta` foi preservado na tradução."]
  },
  {
    id: "maxima-359", numero: 359, dia: 24, mes: "dezembro",
    original: { idioma: "italiano", texto: "È normalmente cattivo segno non avere qualche particolare sentimento devoto nelle maggiori solennità dell'anno.", passagensLatinas: null },
    portugues: { texto: "Normalmente, é mau sinal não ter algum sentimento devoto particular nas maiores solenidades do ano.", tradutor },
    tema: "devoção nas solenidades", temasSecundarios: ["liturgia", "devoção", "Natal"], contexto: "A máxima espera uma disposição devota especial nas grandes solenidades litúrgicas.", testemunha,
    referenciasBiblicas: [{ passagem: "maggiori solennità dell’anno", referencia: "Salmo 95(96),1-3; Lucas 2,8-20, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 30 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 30.", "`Sentimento devoto` foi mantido como disposição afetiva e espiritual, sem transformá-lo em obrigação de emoção intensa."]
  },
  {
    id: "maxima-360", numero: 360, dia: 25, mes: "dezembro",
    original: { idioma: "italiano", texto: "Pensiamo che il Verbo lasciò il cielo, abbassandosi a farsi uomo per noi.", passagensLatinas: null },
    portugues: { texto: "Pensemos que o Verbo deixou o céu, humilhando-se para tornar-se homem por nós.", tradutor },
    tema: "Encarnação do Verbo", temasSecundarios: ["Natal", "Cristo", "humildade"], contexto: "A máxima de Natal contempla a descida do Verbo e sua Encarnação por amor da humanidade.", testemunha,
    referenciasBiblicas: [{ passagem: "il Verbo ... farsi uomo", referencia: "João 1,1-14; Filipenses 2,6-8" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 30 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 30.", "`Il Verbo` foi traduzido por ‘o Verbo’, forma cristológica estabelecida em português."]
  },
  {
    id: "maxima-361", numero: 361, dia: 26, mes: "dezembro",
    original: { idioma: "italiano", texto: "Verso quelli che ci perseguitano, oltre a perdonarli, bisogna avere compassione per l'inganno in cui si trovano.", passagensLatinas: null },
    portugues: { texto: "Para com aqueles que nos perseguem, além de perdoá-los, é preciso ter compaixão pelo engano em que se encontram.", tradutor },
    tema: "compaixão pelos perseguidores", temasSecundarios: ["perdão", "misericórdia", "perseguição"], contexto: "O perdão é ampliado pela compaixão para com o erro e o engano dos perseguidores.", testemunha,
    referenciasBiblicas: [{ passagem: "perdonarli ... compassione", referencia: "Mateus 5,44; Lucas 23,34, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 30 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 30.", "`Inganno` foi traduzido por ‘engano’, sem determinar se se trata de erro intelectual ou moral."]
  },
  {
    id: "maxima-362", numero: 362, dia: 27, mes: "dezembro",
    original: { idioma: "italiano", texto: "Per uno, che ama veramente il Signore, non c'è cosa più dura, né più molesta, che la vita.", passagensLatinas: null },
    portugues: { texto: "Para quem ama verdadeiramente o Senhor, não há coisa mais dura nem mais incômoda que a vida.", tradutor },
    tema: "desejo da vida eterna", temasSecundarios: ["amor de Deus", "peregrinação", "vida"], contexto: "A vida terrena é descrita como pesada para quem deseja intensamente a união com o Senhor.", testemunha,
    referenciasBiblicas: [{ passagem: "nulla ... più molesta, che la vita", referencia: "Filipenses 1,23; 2Coríntios 5,1-8, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 30 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 30.", "A máxima é registrada no horizonte do desejo de união com Deus, sem convertê-la em incentivo à rejeição da vida ou à morte voluntária."]
  },
  {
    id: "maxima-363", numero: 363, dia: 28, mes: "dezembro",
    original: { idioma: "italiano", texto: "I giovani siano allegri e abbiano i divertimenti convenienti alla loro età, purché non compiano peccati.", passagensLatinas: null },
    portugues: { texto: "Os jovens sejam alegres e tenham diversões convenientes à sua idade, contanto que não cometam pecados.", tradutor },
    tema: "alegria moderada dos jovens", temasSecundarios: ["juventude", "alegria", "prudência"], contexto: "A máxima admite diversões adequadas à idade, subordinadas à ausência de pecado.", testemunha,
    referenciasBiblicas: [{ passagem: "giovani ... allegri ... purché non compiano peccati", referencia: "Eclesiastes 11,9-10; Filipenses 4,4, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 30 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 30.", "`Divertimenti convenienti` foi traduzido por ‘diversões convenientes’, preservando o equilíbrio entre alegria e prudência."]
  },
  {
    id: "maxima-364", numero: 364, dia: 29, mes: "dezembro",
    original: { idioma: "italiano", texto: "Non saper negare all'anima i propri desideri, è fomentare un vivaio di vizi.", passagensLatinas: null },
    portugues: { texto: "Não saber negar à alma os próprios desejos é fomentar um viveiro de vícios.", tradutor },
    tema: "desejos e vícios", temasSecundarios: ["autodomínio", "mortificação", "discernimento"], contexto: "A incapacidade de negar desejos desordenados é comparada ao cultivo de um viveiro de vícios.", testemunha,
    referenciasBiblicas: [{ passagem: "vivaio di vizi", referencia: "Tiago 1,14-15; Gálatas 5,16-17, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 30 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 30.", "`Vivaio` foi traduzido por ‘viveiro’, preservando a metáfora de cultivo da fonte."]
  },
  {
    id: "maxima-365", numero: 365, dia: 30, mes: "dezembro",
    original: { idioma: "italiano", texto: "Tutte le cose create sono benefiche e mostrano la bontà del Creatore; il sole spargendo la luce, il fuoco il calore, ogni albero stendendo le braccia che sono i suoi rami, e offrendoci la frutta che produce; e l'acqua e l'aria e tutta la natura esprimono la liberalità del Creatore; e noi che siamo sua viva immagine non lo rappresentiamo, ma con costumi degeneri lo neghiamo con le opere, sebbene lo confessiamo con la bocca.", passagensLatinas: null },
    portugues: { texto: "Todas as coisas criadas são benéficas e mostram a bondade do Criador: o sol, espalhando a luz; o fogo, o calor; cada árvore, estendendo os braços que são os seus ramos e oferecendo-nos o fruto que produz; a água, o ar e toda a natureza exprimem a liberalidade do Criador. Nós, que somos sua imagem viva, não o representamos, mas, com costumes degenerados, negamo-lo pelas obras, embora o confessemos com a boca.", tradutor },
    tema: "bondade da criação e incoerência humana", temasSecundarios: ["Criação", "Criador", "testemunho"], contexto: "A criação manifesta a liberalidade de Deus, enquanto a conduta humana pode contradizer a confissão verbal.", testemunha,
    referenciasBiblicas: [{ passagem: "imagem viva do Criador ... confessa com a boca", referencia: "Gênesis 1,26-27; Tito 1,16; Tiago 2,14-18, como síntese" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 30 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 30.", "A longa enumeração foi dividida em duas frases em português para legibilidade, sem omitir nenhum elemento do original.", "`Liberalità` foi traduzida por ‘liberalidade’, no sentido de generosidade do Criador."]
  },
  {
    id: "maxima-366", numero: 366, dia: 31, mes: "dezembro",
    original: { idioma: "italiano", texto: "È finita l'ora, diciamo lo stesso dell'anno; ma non è finito il tempo di fare il bene.", passagensLatinas: null },
    portugues: { texto: "A hora terminou; digamos o mesmo do ano. Mas não terminou o tempo de fazer o bem.", tradutor },
    tema: "tempo de fazer o bem", temasSecundarios: ["fim do ano", "perseverança", "caridade"], contexto: "O encerramento do ano não encerra a possibilidade de praticar o bem.", testemunha,
    referenciasBiblicas: [{ passagem: "non è finito il tempo di fare il bene", referencia: "Gálatas 6,9-10; João 9,4, como alusão" }], fonte: { primaria, original: originalDeclarada, paginaPDF: 30 }, autenticidade: "tradicional",
    notasEditoriais: ["Conferida visualmente na página PDF 30.", "A pontuação foi adaptada em duas frases para preservar o contraste entre o fim da hora/ano e a continuidade do bem."]
  }
];
