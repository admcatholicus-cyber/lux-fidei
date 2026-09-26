/* ─────────────────────────────────────────────────────────────
   CÂNONES DE NICEIA I (325) — DADOS
   Contém:
   1. Os 20 cânones disciplinares originais com campo de Recepção
   2. A tradição canônica posterior (recepção, interpolações,
      pseudo-cânones, força legal em Justiniano e comentadores)
───────────────────────────────────────────────────────────── */

/* ═══════════════════════════════════════════════════════════
   1. OS 20 CÂNONES ORIGINAIS
═══════════════════════════════════════════════════════════ */

export interface Canon {
  num: string
  titulo: string
  resumo: string
  detalhe: string
  recepcao?: string
}

export const canonesData: Canon[] = [
  {
    num: 'Cânone 1',
    titulo: 'Clérigos eunucos',
    resumo: 'Ordenação de eunucos voluntários',
    detalhe:
      'Proíbe a ordenação de homens que se castraram voluntariamente. Quem foi castrado por intervenção médica ou sob perseguição pode ser admitido ou permanecer no clero. Visava coibir práticas ascéticas extremadas inspiradas em leituras literalistas de Mt 19,12.',
    recepcao: 'Cânones Apostólicos 21–24; Código de Direito Canônico (CIC) cân. 1041 5.º.',
  },
  {
    num: 'Cânone 2',
    titulo: 'Neófitos',
    resumo: 'Proibição de ordenar recém-batizados',
    detalhe:
      'Proíbe a ordenação episcopal ou presbiteral de recém-batizados imediatamente após a iniciação cristã. Exige tempo de catequese e provação moral sólida. Casos extraordinários como a consagração de Ambrósio de Milão (374) foram exceções carismáticas de aclamação pública, não a norma ordinária.',
    recepcao: 'CIC cân. 1042 3.º (impedimento temporário de neófitos).',
  },
  {
    num: 'Cânone 3',
    titulo: 'Mulheres nas casas dos clérigos',
    resumo: 'Syneisaktai — virgens introduzidas',
    detalhe:
      'Proíbe terminantemente que bispos, presbíteros e diáconos mantenham em casa qualquer mulher "introduzida" (syneisaktai ou agapētaí), exceto mãe, irmã, tia ou pessoas acima de qualquer suspeita. Combatia abusos do ascetismo desordenado. O episódio tradicional de Pafnúcio do Egito dissuadiu o concílio de impor continência obrigatória a clérigos já casados.',
    recepcao: 'Concílio Quinissexto / Trullo cân. 5; CIC cân. 277 §2.',
  },
  {
    num: 'Cânone 4',
    titulo: 'Eleição e consagração de bispos',
    resumo: 'Consagração episcopal por no mínimo três bispos',
    detalhe:
      'A escolha episcopal deve ser realizada preferencialmente por todos os bispos da província. Se inviável por distância ou urgência, exige-se a presença de pelo menos três bispos consagrantes com consentimento escrito dos ausentes, cabendo a confirmação jurídica ao metropolita.',
    recepcao: 'Arles 314 cân. 20; Concílio de Antioquia 341 cân. 19; CIC cân. 1014 (exigência de três bispos consagrantes).',
  },
  {
    num: 'Cânone 5',
    titulo: 'Excomungados e Sínodos provinciais',
    resumo: 'Recurso canônico e sínodos semestrais',
    detalhe:
      'As excomunhões proferidas por um bispo devem ser respeitadas pelas demais dioceses. Para sanar injustiças ou animosidades pessoais, sínodos provinciais devem reunir-se duas vezes ao ano (na Quaresma e no outono) para julgar as apelações.',
    recepcao: 'Antioquia 341 cân. 20; Trullo cân. 8; CIC cân. 439–446 (províncias eclesiásticas e concílios particulares).',
  },
  {
    num: 'Cânone 6',
    titulo: 'Primados das grandes sés e jurisdições',
    resumo: 'Roma, Alexandria, Antioquia e privilégios metropolitanos',
    detalhe:
      'Reconhece os "costumes antigos" (archaîa éthē) que conferem jurisdição a Alexandria sobre o Egito, Líbia e Pentápole, à semelhança do costume mantido pelo bispo de Roma, resguardando prerrogativas equivalentes em Antioquia. O texto ratifica tradições regionais preexistentes, sem instituí-las ex nihilo (conforme análise de P. L\'Huillier). (a) Roma: o Papa Leão I invocou este cânone contra a elevação de Constantinopla (Ep. 104–106, 452), e o Decretum Gelasianum postulou que o primado latino não decorre de sínodos, mas da palavra de Cristo. (b) Oriente: Constantinopla 381 (cân. 3) e Calcedônia 451 (cân. 28) afirmaram privilégios honoríficos por razões de capital política, culminando na Pentarquia (Trullo cân. 36). (c) Diálogo atual: a Comissão Mista Católico-Ortodoxa adota o cân. 6 como base sinodal comum nos Documentos de Ravena (2007) e Alexandria ("Sinodalidade e primado no segundo milênio e hoje", jun. 2023). A interpolação latina textual é analisada na seção de Tradição Canônica.',
    recepcao: 'Calcedônia 451 cân. 28; Trullo cân. 36; Declaração de Ravena (2007) e Documento de Alexandria (2023).',
  },
  {
    num: 'Cânone 7',
    titulo: 'Precedência de honra de Jerusalém',
    resumo: 'Honra sagrada subordinada a Cesareia',
    detalhe:
      'O bispo de Élia Capitolina (Jerusalém) recebe precedência honorífica por sua eminência bíblico-histórica, salvaguardando integralmente os direitos jurisdicionais do metropolita de Cesareia Marítima.',
    recepcao: 'Concílio de Calcedônia (451), que formalizou a ereção do Patriarcado de Jerusalém.',
  },
  {
    num: 'Cânone 8',
    titulo: 'Reconciliação dos Novacianos (Katharoi)',
    resumo: 'Acolhimento de cismáticos rigoristas',
    detalhe:
      'Os clérigos novacianos ("os Puros") que retornam à comunhão católica mantêm seu grau clerical após imposição de mãos, subscrevendo profissão de fé onde prometem plena comunhão com os bígamos e os lapsos penitentes. Sócrates Escolástico (HE I.10) registra que Constantino convidou o bispo novaciano Acésio; embora este aprovasse o credo e a data pascal, recusou a comunhão com os pecadores arrependidos, ouvindo a famosa resposta imperial: "Acésio, arma uma escada e sobe sozinho ao céu!". O cânone foi uma generosa anistia recusada pela cúpula da seita, que sobreviveu em Constantinopla até o séc. V, gozando de isenção no edito imperial anti-herético (CTh 16.5.2).',
    recepcao: 'Trullo cân. 95 (recepção de heréticos e cismáticos); Agostinho, De baptismo (validade sacramental fora da comunhão visível).',
  },
  {
    num: 'Cânone 9',
    titulo: 'Exame prévio às Sagradas Ordens',
    resumo: 'Investigação moral de candidatos ao presbiterato',
    detalhe:
      'Presbíteros promovidos sem investigação de vida prévia ou que confessem delitos graves impeditivos após a imposição das mãos não devem exercer o ministério sagrado. A Igreja apenas reconhece ordenações conferidas de acordo com as normas da santidade cristã.',
    recepcao: 'CIC cân. 1040–1049 (irregularidades e outros impedimentos à ordenação).',
  },
  {
    num: 'Cânone 10',
    titulo: 'Clérigos que apostataram (Lapsi)',
    resumo: 'Deposição forçosa de apóstatas ordenados',
    detalhe:
      'Qualquer clérigo que tenha apostatado durante as perseguições e posteriormente sido ordenado por desconhecimento ou negligência dos ordenadores deve ser sumariamente deposto tão logo a falta seja revelada.',
    recepcao: 'CIC cân. 1041 2.º e cân. 1044 §1 2.º (irregularidade por delito de apostasia).',
  },
  {
    num: 'Cânone 11',
    titulo: 'Penitência para lapsos voluntários',
    resumo: '12 anos de penitência pública gradual',
    detalhe:
      'Apostasia voluntária sob Licínio (sem confisco ou ameaça à vida): 12 anos de penitência escalonada — 2 anos como ouvintes (audientes), 7 anos como prostrados (substrati) pedindo intercessão na porta do templo, e 2 anos assistindo às orações sem acesso à Eucaristia (consistentes).',
    recepcao: 'Pedro de Alexandria (Carta Canônica de 306); Concílio de Ancira 314 cân. 1–9; CIC cân. 959–997.',
  },
  {
    num: 'Cânone 12',
    titulo: 'Militares que retornaram ao paganismo',
    resumo: '13 anos de penitência para apóstatas do exército',
    detalhe:
      'Cristãos que haviam deixado o serviço militar romano para não queimar incenso aos ídolos, mas depois pagaram subornos para retomar seus postos no exército pagão: 3 anos entre os ouvintes e 10 anos entre os prostrados. O bispo pode reduzir o prazo se houver lágrimas de contrição sincera.',
    recepcao: 'Concílio de Ancira 314 cân. 4–6; disciplina penitencial antiga; CIC cân. 959–997.',
  },
  {
    num: 'Cânone 13',
    titulo: 'O Santo Viático aos moribundos',
    resumo: 'Nenhum fiel pode morrer sem a Eucaristia',
    detalhe:
      'Ninguém em perigo de morte deve ser privado do supremo e santíssimo viático da Eucaristia. Se o agonizante recuperar a saúde após a comunhão, integrará o grupo dos fiéis que participam exclusivamente das orações até cumprir o tempo prescrito.',
    recepcao: 'Trullo cân. 95; CIC cân. 911 e cân. 921 (administração do Santo Viático em perigo de morte).',
  },
  {
    num: 'Cânone 14',
    titulo: 'Catecúmenos que apostataram',
    resumo: '3 anos de penitência antes da oração comum',
    detalhe:
      'Catecúmenos que cederam sob coação e sacrificaram aos ídolos devem permanecer 3 anos como ouvintes antes de voltarem a orar junto aos catecúmenos regulares, recebendo depois a admissão ao Batismo.',
    recepcao: 'Concílio de Ancira 314 cân. 6; CIC cân. 206 (estatuto canônico dos catecúmenos).',
  },
  {
    num: 'Cânone 15',
    titulo: 'Proibição de transferência de clérigos',
    resumo: 'Vedada a translação de bispos, presbíteros e diáconos',
    detalhe:
      'Proíbe absolutamente que bispos ou clérigos mudem de uma cidade para outra visando prestígio pastoral ou ganho material. O infrator será reconduzido à igreja para a qual foi consagrado. Houve violações imediatas notórias: Eusébio de Nicomédia transitou de Berito para Nicomédia e depois para Constantinopla; bispos eusebianos como Gregório e Jorge foram impostos à força a Alexandria. Em contrapartida, a recusa de Eusébio de Cesareia em assumir a rica Sé de Antioquia (Eusébio, VC III.60–62) foi publicamente elogiada pelo imperador Constantino.',
    recepcao: 'Arles 314 cân. 2 (al. 21); Concílio de Sárdica 343 cân. 1–2; CIC cân. 265–272 (instituto da incardinação).',
  },
  {
    num: 'Cânone 16',
    titulo: 'Clérigos errantes e ordenações ilícitas',
    resumo: 'Nulidade de ordenações fora da diocese de origem',
    detalhe:
      'Presbíteros e diáconos que abandonam suas igrejas não podem ser recebidos em outra sé. Se um bispo ousar ordenar clérigo alheio sem o consentimento formal do bispo próprio, o ato será juridicamente nulo. A disciplina foi reforçada pelo Sínodo de Sárdica (343, cân. 1–2).',
    recepcao: 'Sárdica 343 cân. 1–2; Antioquia 341 cân. 3; CIC cân. 265–272.',
  },
  {
    num: 'Cânone 17',
    titulo: 'Proibição da usura no clero',
    resumo: 'Deposição sumária de clérigos que cobram juros',
    detalhe:
      'Clérigos que praticam usura, cobram juros desonestos ou exercem atividades comerciais fraudulentas visando o vil ganho serão imediatamente depostos de suas ordens e declarados estranhos ao cânone sagrado (conforme Sl 15,5 e Ez 18,8).',
    recepcao: 'Elvira 306 cân. 20; Arles 314 cân. 12; CIC cân. 286 (proibição de comércio ou negócio lucrativo aos clérigos).',
  },
  {
    num: 'Cânone 18',
    titulo: 'Ordem dos Diáconos e a Santa Eucaristia',
    resumo: 'Subordinação do diaconato ao presbiterato',
    detalhe:
      'Diáconos não podem dar a Eucaristia a presbíteros nem comungar antes dos bispos e sacerdotes, pois é impróprio que os ministros de ordem inferior ofereçam o Corpo de Cristo aos de grau superior. Não devem sentar-se entre os presbíteros na assembleia litúrgica.',
    recepcao: 'Arles 314 cân. 15; Trullo cân. 7; CIC cân. 910 (ministros ordinários e extraordinários da Sagrada Comunhão).',
  },
  {
    num: 'Cânone 19',
    titulo: 'Paulianistas e o ministério das diaconisas',
    resumo: 'Rebatismo obrigatório e estatuto das diaconisas sem imposição de mãos',
    detalhe:
      'Os adeptos de Paulo de Samósata que retornam à Igreja devem ser imperativamente rebatizados, pois seu conceito trinitário invalidava o batismo. Quanto às diaconisas daquela facção, o concílio definiu que, não tendo recebido imposição de mãos sacramental (cheirothesía), devem ser contadas entre os leigos. Este cânone é texto fundamental nos debates das comissões papais de 2016 e 2020 (Papa Francisco) sobre o diaconato feminino. No Patriarcado de Alexandria, o Patriarca Teodoro II reavivou a instituição missionária de diaconisas em Kolwezi (Congo, 2017) e ordenou a diaconisa Angelic Molen (Zimbábue, maio de 2024), contrastando com a disciplina do Concílio de Calcedônia (cân. 15), que menciona formalmente a cheirotonía para diaconisas.',
    recepcao: 'CIC cân. 869 (batismo sob condição e validade); Concílio de Calcedônia 451 cân. 15.',
  },
  {
    num: 'Cânone 20',
    titulo: 'Oração em pé nos domingos e no Tempo Pascal',
    resumo: 'Proibição de ajoelhar no Dia do Senhor',
    detalhe:
      'Para salvaguardar a unidade ritual litúrgica em todas as dioceses, proíbe-se dobrar os joelhos aos domingos e durante todo o Tempo Pascal até o dia de Pentecostes. As orações devem ser feitas de pé, confessando a gloriosa Ressurreição de Cristo.',
    recepcao: 'Tertuliano, De corona 3; Concílio de Trullo cân. 90; Instrução Geral sobre o Missal Romano (IGMR).',
  },
]

/* ═══════════════════════════════════════════════════════════
   2. TRADIÇÃO CANÔNICA POSTERIOR
═══════════════════════════════════════════════════════════ */

export interface TradicaoCanonicaItem {
  id: string
  titulo: string
  resumo: string
  conteudo: string
}

export const tradicaoCanonicaData: TradicaoCanonicaItem[] = [
  {
    id: 'apiario',
    titulo: 'O caso Apiário (Cartago, 419) — Cânones "nicenos" que eram de Sárdica',
    resumo:
      'Roma citou cânones de Sárdica (343) como se fossem de Niceia; a resposta firme do episcopado africano',
    conteudo:
      'O caso do presbítero Apiário de Sicca (norte da África) é um dos episódios mais reveladores da história canônica antiga. Excomungado por seu bispo, Apiário apelou a Roma. Os Papas Zósimo, Bonifácio I e Celestino I acolheram a causa com base nos cânones 3, 4 e 5 do Concílio de Sárdica (343) — que facultavam ao bispo deposto recorrer ao bispo de Roma em honra à memória do Apóstolo Pedro —, apresentando-os equivocadamente como "cânones de Niceia" devido à numeração contínua usada nos códices da cúria romana. Os bispos africanos, liderados por Aurélio de Cartago e Santo Agostinho, confrontaram os textos com os arquivos autênticos de Alexandria, Antioquia e Constantinopla. Desfeita a confusão, enviaram a célebre epístola "Optaremus" ao Papa Celestino (424/426), solicitando que não acolhesse sumariamente excomungados da África nem enviasse legados executores ("executores clérigos"). O episódio demonstra o peso insuperável do rótulo "niceno" como garantia suprema de legitimidade eclesiástica na Antiguidade.',
  },
  {
    id: 'canone-6-calcedonia',
    titulo: 'A interpolação latina do Cânone 6 em Calcedônia (451)',
    resumo:
      '"Ecclesia Romana semper habuit primatum" — acréscimo ausente do original grego',
    conteudo:
      'Durante a 16.ª sessão do Concílio de Calcedônia (451), quando se debatia o famoso Cânone 28 (que elevava Constantinopla ao segundo lugar de honra após Roma), os legados papais leram o Cânone 6 de Niceia numa versão latina que começava com as palavras "Ecclesia Romana semper habuit primatum" ("A Igreja Romana sempre teve o primado"). Este acréscimo era ausente de todos os manuscritos gregos originais do cânone. Os bispos orientais em Calcedônia, ao consultarem os arquivos patriarcais, verificaram a discrepância e o Cânone 28 foi aprovado apesar dos protestos dos legados papais.',
  },
  {
    id: 'pseudo-nicenos',
    titulo: 'Os pseudo-cânones nicenos (80 árabes e 73 siríacos)',
    resumo:
      'Coleções tardias falsamente atribuídas a Niceia — mas influentes por séculos',
    conteudo:
      'A autoridade universal atribuída a Niceia levou à composição, entre os séculos V e VII, de coleções canônicas extensas falsamente atribuídas ao concílio. Duas coleções destacam-se: (a) os "80 Cânones Árabes de Niceia" — compilação de origem melquita, provavelmente do séc. VI, que circulou amplamente entre as Igrejas orientais de língua árabe e serviu como base do direito canônico copta e etíope; (b) os "73 Cânones Siríacos" — coleção transmitida em siríaco na Igreja Síria Ocidental. Nenhum deles pertence a Niceia — os autênticos são apenas 20 —, mas a atribuição falsa lhes conferiu autoridade por séculos. A crítica textual moderna (Turner, Joannou) só desmontou definitivamente essas atribuições no século XX.',
  },
  {
    id: 'justiniano',
    titulo: 'Justiniano e a força de lei imperial (Novela 131, ano 545)',
    resumo:
      'Os cânones dos quatro primeiros concílios equiparados às leis civis do Império',
    conteudo:
      'Em 18 de março de 545, o imperador Justiniano I promulgou a Novela 131, estabelecendo que os cânones dos quatro primeiros concílios ecumênicos (Niceia I, Constantinopla I, Éfeso, Calcedônia) tinham força de lei civil no Império Romano, equiparados às constituições imperiais. Violá-los tornou-se crime imperial. A medida consolidou a fusão entre direito canônico e direito civil que caracterizaria o modelo bizantino de sinfonia entre Igreja e Estado, influenciando o direito eclesiástico ocidental no Corpus Iuris Civilis retomado na Idade Média por Graciano.',
  },
  {
    id: 'transmissao-textual',
    titulo: 'Transmissão textual e edições críticas',
    resumo:
      'De Dionísio, o Exíguo a Turner e Joannou — como chegamos ao texto autêntico',
    conteudo:
      'A transmissão dos autênticos 20 cânones nicenos deu-se principalmente por três canais: (a) a coleção grega compilada em Constantinopla e integrada ao Nomocânon in XIV Titulis; (b) a versão latina de Dionísio, o Exíguo (c. 500), monge cita que traduziu os cânones para o Ocidente com fidelidade notável; (c) as versões siríaca, copta, armênia e etíope. A edição crítica moderna de referência é a de C. H. Turner (Ecclesiae Occidentalis Monumenta Iuris Antiquissima, Oxford, 1899–1939), complementada pela de Périclès-Pierre Joannou (Discipline générale antique, Roma, 1962) e a de Tanner/Alberigo (Decrees of the Ecumenical Councils, Georgetown, 1990).',
  },
  {
    id: 'comentadores',
    titulo: 'Os comentadores canônicos (do séc. XII à erudição moderna)',
    resumo:
      'De Balsamon e o Pedálion aos canonistas críticos contemporâneos',
    conteudo:
      'A exegese canônica oriental bizantina atingiu seu apogeu no século XII com as glosas clássicas dos três grandes juristas patriarcais: João Zonaras, Aleixo Aristeno e Teodoro Balsamon (compiladas na célebre edição de G. A. Rhalles e M. Potles). No Oriente ortodoxo moderno, essa tradição foi sistematizada no Pedálion ("O Leme", 1800) por São Nicodemos, o Hagiorita. No Ocidente latino medieval, Graciano integrou os cânones nicenos em seu Decretum (ex.: D. 31 c. 12, citando o discurso de Pafnúcio sobre o matrimônio do clero via Historia Tripartita). Na historiografia moderna, estabeleceram-se como marcos definitivos os estudos de Karl Josef von Hefele e Henri Leclercq (Histoire des conciles I/1, 1907), a monografia fundamental do Arcebispo Peter L\'Huillier (The Church of the Ancient Councils, 1996) e os trabalhos filológicos de Heinz Ohme (Kanon ekklesiastikos, 1998).',
  },
]