/**
 * FONTES E BIBLIOGRAFIA DO CONCÍLIO DE CONSTANTINOPLA I
 * Fontes primárias, secundárias e recursos modernos.
 */

export interface Fonte {
  autor: string;
  titulo: string;
  data: string;
  tipo: "primaria" | "secundaria" | "moderna";
  idioma: string;
  descricao: string;
  relevancia: string;
  disponibilidade?: string;
}

export interface CategoriaFontes {
  categoria: string;
  descricao: string;
  fontes: Fonte[];
}

// =============================================
// 1. FONTES PRIMÁRIAS — NARRATIVAS HISTÓRICAS
// =============================================
export const fontesPrimariasHistoricas: Fonte[] = [
  {
    autor: "Sócrates Escolástico",
    titulo: "História Eclesiástica (Historia Ecclesiastica), Livro V, caps. 8–9",
    data: "~439 d.C.",
    tipo: "primaria",
    idioma: "Grego",
    descricao:
      "A principal narrativa histórica do concílio. Sócrates, advogado " +
      "de Constantinopla e membro da comunidade novaciana, escreveu " +
      "sua história ~60 anos após o concílio. Relata as três fases, " +
      "a morte de Melécio, a renúncia de Gregório, a eleição de " +
      "Nectário e a chegada dos macedonianos.",
    relevancia:
      "Fonte mais citada para a cronologia e os eventos do concílio. " +
      "Embora dependa de fontes intermediárias, é o relato mais " +
      "completo e equilibrado que possuímos.",
    disponibilidade: "PG 67, 583–606; tradução inglesa em NPNF 2.2, 125–128",
  },
  {
    autor: "Sozômeno (Hermias Sozomenos)",
    titulo: "História Eclesiástica, Livro VII, caps. 7–9",
    data: "~443 d.C.",
    tipo: "primaria",
    idioma: "Grego",
    descricao:
      "Contemporâneo de Sócrates e também advogado em Constantinopla. " +
      "Oferece um relato complementar com detalhes adicionais sobre " +
      "os 36 macedonianos, a questão de Antioquia e o escândalo " +
      "de Máximo o Cínico. Tende a ser mais favorável a Gregório " +
      "de Nazianzo do que Sócrates.",
    relevancia:
      "Complementa e às vezes corrige Sócrates. Útil para comparar " +
      "versões dos mesmos eventos e identificar tradições diferentes.",
    disponibilidade: "PG 67, 1437–1452; tradução inglesa em NPNF 2.2, 383–387",
  },
  {
    autor: "Teodoreto de Ciro",
    titulo: "História Eclesiástica, Livro V, caps. 8–9",
    data: "~449 d.C.",
    tipo: "primaria",
    idioma: "Grego",
    descricao:
      "Bispo de Ciro (Síria), Teodoreto escreve de uma perspectiva " +
      "antioquena e pró-escola de Antioquia. Seu relato é mais " +
      "breve que o de Sócrates e Sozômeno, mas contém detalhes " +
      "únicos sobre Diodoro de Tarso e a teologia antioquena " +
      "presente no concílio.",
    relevancia:
      "Perspectiva síria/antioquena. Essencial para entender " +
      "a influência da Escola de Antioquia nas decisões " +
      "cristológicas do concílio.",
    disponibilidade: "PG 82, 1209–1220; tradução inglesa em NPNF 2.3, 137–139",
  },
  {
    autor: "Rufino de Aquileia",
    titulo: "História Eclesiástica, Livro II, cap. 19 (continuação de Eusébio)",
    data: "~402 d.C.",
    tipo: "primaria",
    idioma: "Latim",
    descricao:
      "Rufino, monge e tradutor latino, continuou a História " +
      "Eclesiástica de Eusébio de Cesareia. Seu relato de " +
      "Constantinopla é breve (~1 página) e escrito de uma " +
      "perspectiva ocidental. Menciona o concílio de passagem " +
      "e foca mais nos eventos ocidentais contemporâneos.",
    relevancia:
      "Única fonte primária latina contemporânea sobre o concílio. " +
      "Importante para entender como o Ocidente percebia " +
      "Constantinopla I nos primeiros anos após sua realização.",
    disponibilidade: "PL 21, 517–520; tradução inglesa: Philip Amidon, 1997",
  },
];

// =============================================
// 2. FONTES PRIMÁRIAS — GREGÓRIO DE NAZIANZO
// =============================================
export const fontesPrimariasNazianzo: Fonte[] = [
  {
    autor: "Gregório de Nazianzo",
    titulo: "De Vita Sua (Sobre Sua Própria Vida) — Poema 1.2.11",
    data: "~382 d.C.",
    tipo: "primaria",
    idioma: "Grego (hexâmetros dactílicos)",
    descricao:
      "Poema autobiográfico de ~1949 versos em que Gregório narra " +
      "toda a sua vida, com ênfase dramática em sua experiência " +
      "em Constantinopla e no concílio. Descreve a traição de " +
      "Máximo o Cínico, as intrigas dos bispos egípcios, a " +
      "ingratidão dos orientais e a dor de sua renúncia. " +
      "É a fonte mais pessoal, emocional e detalhada sobre " +
      "a Fase 2 do concílio.",
    relevancia:
      "Fonte insubstituível. Sem o De Vita Sua, não saberíamos " +
      "quase nada sobre as dinâmicas internas do concílio, " +
      "a traição de Máximo, as manobras dos egípcios e " +
      "as razões reais da renúncia de Gregório.",
    disponibilidade:
      "PG 37, 1029–1128; tradução inglesa: Carolinne White, " +
      "Gregory of Nazianzus: Autobiographical Poems (Cambridge, 1996)",
  },
  {
    autor: "Gregório de Nazianzo",
    titulo: "Oração 42 — Discurso de Despedida (Syntakterios)",
    data: "Junho/Julho de 381 d.C.",
    tipo: "primaria",
    idioma: "Grego",
    descricao:
      "O discurso que Gregório pronunciou ao renunciar à " +
      "presidência do concílio e ao bispado de Constantinopla. " +
      "Dirigido aos bispos conciliares, é uma peça de " +
      "retórica magistral em que Gregório compara sua " +
      "situação à de Jonas, Moisés e Paulo. Contém " +
      "críticas veladas à politicagem dos bispos e " +
      "uma defesa apaixonada da ortodoxia trinitária.",
    relevancia:
      "Fonte direta do momento mais dramático do concílio. " +
      "Revela o clima de desilusão e as tensões entre " +
      "teologia e política eclesiástica.",
    disponibilidade: "PG 36, 465–496; tradução inglesa em NPNF 2.7, 385–394",
  },
  {
    autor: "Gregório de Nazianzo",
    titulo: "Orações Teológicas (Orações 27–31)",
    data: "380 d.C. (pouco antes do concílio)",
    tipo: "primaria",
    idioma: "Grego",
    descricao:
      "As cinco Orações Teológicas, pronunciadas na capela " +
      "da Anastasis em Constantinopla meses antes do concílio. " +
      "São a formulação clássica da doutrina trinitária: " +
      "Oração 27 (contra os eunomianos), 28 (sobre a " +
      "incompreensibilidade de Deus), 29 (sobre o Filho), " +
      "30 (sobre o Filho, continuação), 31 (sobre o " +
      "Espírito Santo). A Oração 31 é a base teológica " +
      "direta da cláusula pneumatológica do Credo de 381.",
    relevancia:
      "O texto teológico mais importante para entender a " +
      "pneumatologia de Constantinopla I. Cada frase da " +
      "cláusula do ES no Credo pode ser rastreada até " +
      "estas orações.",
    disponibilidade:
      "PG 36, 9–172; tradução inglesa: Frederick W. Norris, " +
      "Faith Gives Fullness to Reasoning (Brill, 1991); " +
      "também em NPNF 2.7, 292–328",
  },
  {
    autor: "Gregório de Nazianzo",
    titulo: "Oração 25 — Elogio a Máximo o Filósofo",
    data: "~379/380 d.C.",
    tipo: "primaria",
    idioma: "Grego",
    descricao:
      "Discurso em que Gregório elogia publicamente " +
      "Máximo o Cínico, chamando-o de 'campeão da " +
      "verdade' e 'filósofo de Cristo'. Após a traição " +
      "de Máximo, este discurso se tornou uma fonte " +
      "de embaraço para Gregório.",
    relevancia:
      "Contexto essencial para entender o escândalo de " +
      "Máximo e a humilhação de Gregório no concílio.",
    disponibilidade: "PG 35, 1197–1220; tradução inglesa em NPNF 2.7",
  },
  {
    autor: "Gregório de Nazianzo",
    titulo: "Epístolas (especialmente 101, 102, 130–136)",
    data: "381–383 d.C.",
    tipo: "primaria",
    idioma: "Grego",
    descricao:
      "Cartas escritas após o concílio em que Gregório " +
      "comenta os eventos, defende sua posição e " +
      "critica a conduta dos bispos. A Epístola 101 " +
      "(a Cledônio) contém a famosa fórmula " +
      "'o que não foi assumido não foi curado' contra " +
      "Apolinário.",
    relevancia:
      "Complemento ao De Vita Sua. As cartas revelam " +
      "a amargura de Gregório e sua avaliação " +
      "retrospectiva do concílio.",
    disponibilidade: "PG 37; tradução inglesa em NPNF 2.7",
  },
];

// =============================================
// 3. FONTES PRIMÁRIAS — OUTROS PADRES
// =============================================
export const fontesPrimariasOutros: Fonte[] = [
  {
    autor: "Gregório de Nissa",
    titulo: "Contra Eunômio (Contra Eunomium), 5 livros",
    data: "~380–383 d.C.",
    tipo: "primaria",
    idioma: "Grego",
    descricao:
      "A refutação mais completa do eunomianismo (arianismo " +
      "radical). Gregório destrói o sistema filosófico de " +
      "Eunômio, demonstrando que a essência divina é " +
      "incompreensível e que 'geração' não implica " +
      "diferença de essência. Embora escrito durante " +
      "e após o concílio, reflete os debates que " +
      "ocorreram em Constantinopla.",
    relevancia:
      "Base teológica da condenação do eunomianismo " +
      "no Cânon 1 do concílio.",
    disponibilidade: "PG 45; tradução inglesa em NPNF 2.5",
  },
  {
    autor: "Gregório de Nissa",
    titulo: "Oração Fúnebre de Melécio de Antioquia",
    data: "381 d.C.",
    tipo: "primaria",
    idioma: "Grego",
    descricao:
      "Discurso pronunciado por Gregório de Nissa " +
      "durante o concílio, por ocasião da morte " +
      "súbita do presidente Melécio. Contém " +
      "informações valiosas sobre o clima do " +
      "concílio e o impacto da morte de Melécio.",
    relevancia:
      "Fonte direta sobre a morte de Melécio e " +
      "a crise que se seguiu.",
    disponibilidade: "PG 46, 851–864",
  },
  {
    autor: "Ambrósio de Milão",
    titulo: "De Spiritu Sancto (Sobre o Espírito Santo), 3 livros",
    data: "381 d.C.",
    tipo: "primaria",
    idioma: "Latim",
    descricao:
      "Escrito quase simultaneamente ao concílio, " +
      "a pedido do imperador Graciano. Ambrósio " +
      "chega às mesmas conclusões pneumatológicas " +
      "que os Capadócios, de forma independente. " +
      "Demonstra que a divindade do ES era uma " +
      "convicção compartilhada por Oriente e Ocidente.",
    relevancia:
      "Prova de que a pneumatologia de Constantinopla " +
      "não era uma 'inovação oriental', mas uma " +
      "fé universal da Igreja.",
    disponibilidade: "PL 16, 731–850; tradução inglesa em NPNF 2.10",
  },
  {
    autor: "Epifânio de Salamina",
    titulo: "Panarion (Medicina contra todas as heresias)",
    data: "374–377 d.C.",
    tipo: "primaria",
    idioma: "Grego",
    descricao:
      "Enciclopédia de 80 heresias, escrita poucos " +
      "anos antes do concílio. Epifânio cataloga e " +
      "refuta todas as heresias que seriam condenadas " +
      "em Constantinopla: arianismo, eunomianismo, " +
      "pneumatomachianismo, apolinarismo, sabelianismo, " +
      "marcelianismo e fotinianismo.",
    relevancia:
      "Fornece o contexto heresiológico do concílio. " +
      "O Cânon 1 é essencialmente uma versão " +
      "resumida do Panarion.",
    disponibilidade: "PG 41–42; tradução inglesa: Frank Williams (Brill, 1987–1994)",
  },
];

// =============================================
// 4. FONTES PRIMÁRIAS — DOCUMENTOS OFICIAIS
// =============================================
export const fontesPrimariasDocumentos: Fonte[] = [
  {
    autor: "Concílio de Constantinopla I",
    titulo: "Credo Niceno-Constantinopolitano",
    data: "381 d.C.",
    tipo: "primaria",
    idioma: "Grego",
    descricao:
      "O texto do Credo promulgado pelo concílio. " +
      "Preservado nas atas do Concílio de Calcedônia " +
      "(451), que o citou integralmente. É o documento " +
      "mais importante produzido pelo concílio.",
    relevancia:
      "O próprio Credo. A fonte primária por excelência.",
    disponibilidade:
      "Atas de Calcedônia (ACO 2.1.2, 84–86); " +
      "também em Denzinger-Schönmetzer, Enchiridion Symbolorum, nº 150",
  },
  {
    autor: "Concílio de Constantinopla I",
    titulo: "Cânones 1–7",
    data: "381 (cânones 1–4) e 382 (cânones 5–7?) d.C.",
    tipo: "primaria",
    idioma: "Grego",
    descricao:
      "Os 7 cânones disciplinares do concílio. " +
      "Cânon 1: condenação das heresias. " +
      "Cânon 2: limites jurisdicionais. " +
      "Cânon 3: primazia de Constantinopla. " +
      "Cânon 4: invalidade de Máximo. " +
      "Cânones 5–7: provavelmente do sínodo de 382.",
    relevancia:
      "Base do direito canônico oriental. O Cânon 3 " +
      "é o documento mais controverso do concílio.",
    disponibilidade:
      "Joannou, Fonti: Discipline générale antique (II–IX s.), 25–32; " +
      "também em Tanner, Decrees of the Ecumenical Councils, vol. 1",
  },
  {
    autor: "Concílio de Constantinopla (sínodo de 382)",
    titulo: "Carta Sinodal (Tomo) de 382",
    data: "382 d.C.",
    tipo: "primaria",
    idioma: "Grego",
    descricao:
      "Carta dos bispos reunidos em Constantinopla em " +
      "382 (continuação do concílio de 381) ao Papa " +
      "Dâmaso e aos bispos ocidentais. É o documento " +
      "que mais detalha os resultados de 381, incluindo " +
      "a confirmação da fé nicena, a condenação das " +
      "heresias e a lista de bispos de referência " +
      "ortodoxa em cada região.",
    relevancia:
      "Fonte mais detalhada sobre os resultados do " +
      "concílio, já que as atas originais de 381 " +
      "se perderam. Preservada por Teodoreto (HE V.9).",
    disponibilidade: "Teodoreto, HE V.9 (PG 82, 1217–1220)",
  },
  {
    autor: "Teodósio I",
    titulo: "Édito Cunctos Populos",
    data: "28 de fevereiro de 380 d.C.",
    tipo: "primaria",
    idioma: "Latim",
    descricao:
      "Édito imperial emitido em Tessalônica que " +
      "torna o nicenismo trinitário a religião " +
      "oficial do Império Romano. Primeira vez " +
      "que um imperador define a fé ortodoxa " +
      "em termos trinitários completos.",
    relevancia:
      "O documento político que antecipa e " +
      "possibilita a definição teológica de 381.",
    disponibilidade: "Codex Theodosianus, XVI.1.2",
  },
  {
    autor: "Teodósio I",
    titulo: "Édito Episcopis Tradi",
    data: "10 de janeiro de 381 d.C.",
    tipo: "primaria",
    idioma: "Latim",
    descricao:
      "Édito que ordena a transferência de todas " +
      "as igrejas do Império para bispos que " +
      "confessam a fé trinitária nicena.",
    relevancia:
      "O 'limpeza' pré-conciliar que criou as " +
      "condições para o concílio.",
    disponibilidade: "Codex Theodosianus, XVI.1.3",
  },
  {
    autor: "Teodósio I",
    titulo: "Édito Nullis Haereticis",
    data: "30 de julho de 381 d.C.",
    tipo: "primaria",
    idioma: "Latim",
    descricao:
      "Édito pós-conciliar que proíbe o culto " +
      "público de todas as heresias condenadas " +
      "em Constantinopla I.",
    relevancia:
      "Ratificação imperial dos resultados do concílio.",
    disponibilidade: "Codex Theodosianus, XVI.5.6",
  },
];

// =============================================
// 5. FONTES SECUNDÁRIAS ANTIGAS (SÉC. V–VIII)
// =============================================
export const fontesSecundarias: Fonte[] = [
 
  {
    autor: "Cirilo de Jerusalém",
    titulo: "Catequeses Mistagógicas (especialmente Catequese 16–17)",
    data: "~348–350 d.C.",
    tipo: "secundaria",
    idioma: "Grego",
    descricao:
      "As Catequeses 16 e 17, sobre o Espírito Santo, " +
      "são anteriores ao concílio mas refletem a " +
      "pneumatologia que seria dogmatizada em 381. " +
      "Alguns estudiosos (Kelly) argumentam que o " +
      "Credo de 381 pode ser baseado no credo " +
      "batismal de Jerusalém usado por Cirilo.",
    relevancia:
      "Possível 'texto-base' do Credo de 381 " +
      "(tese de Kelly).",
    disponibilidade: "PG 33; tradução inglesa em NPNF 2.7",
  },
  {
    autor: "Hilário de Poitiers",
    titulo: "De Synodis (Sobre os Sínodos)",
    data: "358–359 d.C.",
    tipo: "secundaria",
    idioma: "Latim",
    descricao:
      "O 'Atanásio do Ocidente' analisa as fórmulas " +
      "de fé dos sínodos orientais e tenta construir " +
      "uma ponte entre homoousianos e homoiousianos. " +
      "Escrito décadas antes do concílio, mas " +
      "essencial para entender o contexto.",
    relevancia:
      "Mostra a evolução da terminologia trinitária " +
      "que culminaria em Constantinopla.",
    disponibilidade: "PL 10, 479–546",
  },
];

// =============================================
// 6. FONTES MODERNAS — OBRAS DE REFERÊNCIA
// =============================================
export const fontesModernas: Fonte[] = [
  {
    autor: "J.N.D. Kelly",
    titulo: "Early Christian Creeds",
    data: "1950 (3ª ed. 1972)",
    tipo: "moderna",
    idioma: "Inglês",
    descricao:
      "A obra de referência definitiva sobre a história " +
      "dos credos cristãos. Kelly analisa em detalhe " +
      "a relação entre o Credo de Niceia (325) e o " +
      "Credo de Constantinopla (381), argumentando " +
      "que o Credo de 381 pode não ser uma expansão " +
      "direta do de 325, mas um credo batismal " +
      "independente (possivelmente de Jerusalém) " +
      "com elementos nicenos incorporados.",
    relevancia:
      "Indispensável para qualquer estudo sério " +
      "sobre o Credo de Constantinopla. A tese " +
      "de Kelly sobre a origem do Credo continua " +
      "sendo debatida.",
    disponibilidade: "Longman; reimpresso por Bloomsbury Academic",
  },
  {
    autor: "Norman P. Tanner (ed.)",
    titulo: "Decrees of the Ecumenical Councils, Vol. 1: Nicaea I to Lateran V",
    data: "1990",
    tipo: "moderna",
    idioma: "Inglês/Latim/Grego",
    descricao:
      "Edição crítica bilíngue (original + inglês) " +
      "de todos os decretos e cânones dos concílios " +
      "ecumênicos. Inclui o Credo e os 7 cânones " +
      "de Constantinopla I com introdução e notas.",
    relevancia:
      "A edição padrão dos textos conciliares. " +
      "Essencial para citações acadêmicas.",
    disponibilidade: "Georgetown University Press / Sheed & Ward",
  },
  {
    autor: "Lewis Ayres",
    titulo: "Nicaea and its Legacy: An Approach to Fourth-Century Trinitarian Theology",
    data: "2004",
    tipo: "moderna",
    idioma: "Inglês",
    descricao:
      "A obra mais importante das últimas décadas " +
      "sobre a teologia trinitária do século IV. " +
      "Ayres argumenta contra a narrativa tradicional " +
      "de 'arianos vs nicenos' e propõe um modelo " +
      "mais complexo de 'tradições teológicas " +
      "múltiplas' que convergiram em Constantinopla.",
    relevancia:
      "Revolucionou os estudos trinitários do " +
      "século IV. Leitura obrigatória para " +
      "entender o contexto teológico de 381.",
    disponibilidade: "Oxford University Press",
  },
  {
    autor: "John A. McGuckin",
    titulo: "St. Gregory of Nazianzus: An Intellectual Biography",
    data: "2001",
    tipo: "moderna",
    idioma: "Inglês",
    descricao:
      "A biografia intelectual mais completa de " +
      "Gregório de Nazianzo. McGuckin analisa " +
      "em detalhe o papel de Gregório no concílio, " +
      "a crise de Antioquia, o escândalo de Máximo " +
      "e a renúncia. Contém uma reconstituição " +
      "minuciosa da cronologia do concílio.",
    relevancia:
      "A melhor fonte moderna para a Fase 2 do " +
      "concílio e a experiência de Gregório.",
    disponibilidade: "St. Vladimir's Seminary Press",
  },
  {
    autor: "Richard Price e Michael Gaddis (eds.)",
    titulo: "The Acts of the Council of Chalcedon, Vol. 1 (Introdução)",
    data: "2005",
    tipo: "moderna",
    idioma: "Inglês",
    descricao:
      "Embora focado em Calcedônia (451), a " +
      "introdução de Price contém uma análise " +
      "excelente da recepção de Constantinopla I " +
      "e de como Calcedônia confirmou (e distorceu) " +
      "os resultados de 381.",
    relevancia:
      "Essencial para entender como Constantinopla I " +
      "foi recebido e reinterpretado por concílios " +
      "posteriores.",
    disponibilidade: "Liverpool University Press (Translated Texts for Historians)",
  },
  {
    autor: "A. Edward Siecienski",
    titulo: "The Filioque: History of a Doctrinal Controversy",
    data: "2010",
    tipo: "moderna",
    idioma: "Inglês",
    descricao:
      "A história mais completa da controvérsia " +
      "do Filioque, desde o Credo original de 381 " +
      "('procede do Pai') até as inserções ocidentais " +
      "(Toledo 589, Roma 1014) e o Grande Cisma " +
      "de 1054. Analisa as implicações teológicas " +
      "e ecumênicas da alteração do Credo.",
    relevancia:
      "Indispensável para entender a maior " +
      "controvérsia gerada pelo Credo de 381.",
    disponibilidade: "Oxford University Press",
  },
  {
    autor: "John Behr",
    titulo: "The Nicene Faith, Part 2: One of the Holy Trinity",
    data: "2004",
    tipo: "moderna",
    idioma: "Inglês",
    descricao:
      "Análise teológica profunda da formação do " +
      "dogma trinitário de Niceia a Constantinopla. " +
      "Behr, teólogo ortodoxo, lê os Padres " +
      "Capadócios e o concílio de 381 a partir " +
      "da tradição ortodoxa, enfatizando a " +
      "'monarquia do Pai' e a distinção entre " +
      "geração e processão.",
    relevancia:
      "A melhor análise teológica (não apenas " +
      "histórica) de Constantinopla I.",
    disponibilidade: "St. Vladimir's Seminary Press",
  },
  {
    autor: "Sara Parvis",
    titulo: "Marcellus of Ancyra and the Lost Years of the Arian Controversy, 325–345",
    data: "2006",
    tipo: "moderna",
    idioma: "Inglês",
    descricao:
      "Estudo detalhado de Marcelo de Ancira e " +
      "do marcelianismo, uma das heresias condenadas " +
      "no Cânon 1 de Constantinopla. Parvis " +
      "reabilita parcialmente Marcelo, argumentando " +
      "que sua teologia foi mal compreendida.",
    relevancia:
      "Contexto essencial para entender a condenação " +
      "do marcelianismo no Cânon 1.",
    disponibilidade: "Oxford University Press",
  },
  {
    autor: "Thomas A. Kopecek",
    titulo: "A History of Neo-Arianism, 2 vols.",
    data: "1979",
    tipo: "moderna",
    idioma: "Inglês",
    descricao:
      "A história mais detalhada do arianismo " +
      "radical (eunomianismo/anomeísmo). Kopecek " +
      "analisa o sistema filosófico de Aécio e " +
      "Eunômio e sua refutação pelos Capadócios.",
    relevancia:
      "Essencial para entender a condenação do " +
      "eunomianismo no Cânon 1.",
    disponibilidade: "Philadelphia Patristic Foundation",
  },
  {
    autor: "Francis Dvornik",
    titulo: "Byzantium and the Roman Primacy",
    data: "1966",
    tipo: "moderna",
    idioma: "Inglês",
    descricao:
      "Análise histórica da disputa entre Roma " +
      "e Constantinopla, desde o Cânon 3 de 381 " +
      "até o Grande Cisma de 1054. Dvornik, " +
      "jesuíta e bizantinista, é relativamente " +
      "simpático à posição oriental.",
    relevancia:
      "A melhor análise histórica do Cânon 3 " +
      "e suas consequências de longo prazo.",
    disponibilidade: "Fordham University Press",
  },
];

// =============================================
// 7. RECURSOS ONLINE E COLEÇÕES
// =============================================
export const recursosOnline = [
  {
    nome: "New Advent — Fathers of the Church",
    url: "https://www.newadvent.org/fathers/",
    descricao:
      "Coleção completa das obras dos Padres da Igreja " +
      "em tradução inglesa (séries NPNF e ANF). Inclui " +
      "Sócrates, Sozômeno, Teodoreto, Gregório de " +
      "Nazianzo, Basílio, Gregório de Nissa e Ambrósio.",
  },
  {
    nome: "CCEL — Christian Classics Ethereal Library",
    url: "https://www.ccel.org/",
    descricao:
      "Biblioteca digital gratuita com textos patrísticos, " +
      "incluindo as séries NPNF (Nicene and Post-Nicene " +
      "Fathers) e ANF (Ante-Nicene Fathers).",
  },
  {
    nome: "Documenta Catholica Omnia",
    url: "https://www.documentacatholicaomnia.eu/",
    descricao:
      "Coleção multilíngue de documentos eclesiásticos, " +
      "incluindo os textos originais gregos e latinos " +
      "dos concílios ecumênicos.",
  },
  {
    nome: "Patrologia Graeca (PG) — Migne",
    url: "https://patristica.net/graecia/",
    descricao:
      "A coleção completa de Migne (161 volumes) " +
      "com todos os Padres gregos. Essencial para " +
      "citações acadêmicas (PG 36–37 para Nazianzo, " +
      "PG 32 para Basílio, PG 45–46 para Nissa).",
  },
  {
    nome: "Internet Medieval Sourcebook — Fordham",
    url: "https://sourcebooks.fordham.edu/",
    descricao:
      "Seleção de fontes primárias medievais e " +
      "patrísticas em tradução inglesa, incluindo " +
      "os cânones dos concílios ecumênicos.",
  },
];

// =============================================
// RESUMO GERAL
// =============================================
export const resumoFontes = {
  totalPrimarias: 14,
  totalSecundarias: 3,
  totalModernas: 10,
  totalRecursos: 5,

  observacao:
    "As atas originais do Concílio de Constantinopla I (381) " +
    "NÃO sobreviveram. Tudo o que sabemos sobre os debates " +
    "internos do concílio vem de fontes indiretas: os " +
    "historiadores do século V (Sócrates, Sozômeno, " +
    "Teodoreto), os escritos autobiográficos de Gregório " +
    "de Nazianzo e a carta sinodal do sínodo de 382. " +
    "O Credo e os cânones foram preservados porque " +
    "foram citados integralmente pelo Concílio de " +
    "Calcedônia (451).",

  recomendacaoLeitura: [
    "Para iniciantes: McGuckin, St. Gregory of Nazianzus (caps. 8–10)",
    "Para o Credo: Kelly, Early Christian Creeds (caps. 7–8)",
    "Para a teologia: Ayres, Nicaea and its Legacy (caps. 10–12)",
    "Para o Filioque: Siecienski, The Filioque (caps. 2–4)",
    "Para os cânones: Tanner, Decrees of the Ecumenical Councils (vol. 1)",
    "Para as fontes primárias: NPNF 2.2 (Sócrates/Sozômeno) + NPNF 2.7 (Nazianzo)",
  ],
};