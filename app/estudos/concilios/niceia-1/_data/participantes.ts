/* ─────────────────────────────────────────────────────────────
   PARTICIPANTES E ASSINATURAS DE NICEIA I (325)
   Contém:
   1. Figuras-chave (tabela principal com 29 participantes)
   2. Dados históricos sobre as listas de assinaturas (Gelzer, etc.)
───────────────────────────────────────────────────────────── */

/* ═══════════════════════════════════════════════════════════
   1. FIGURAS-CHAVE (Tabela Principal)
═══════════════════════════════════════════════════════════ */

export interface Participante {
  figura: string
  posicao: string
  papel: string
  doutrina: string
  destinoApos325: string
}

export const participantesData: Participante[] = [
  { 
    figura: 'Constantino I', 
    posicao: 'Imperador Romano', 
    papel: 'Convocador, financiador e presidente protocolar; pressionou pela adoção do homoousios', 
    doutrina: 'Politicamente pró-unidade; teologicamente maleável',
    destinoApos325: 'Batizado por Eusébio de Nicomédia e morto em 22 mai. 337'
  },
  { 
    figura: 'Ósio de Córdova (Ossius/Hosius)', 
    posicao: 'Bispo; conselheiro imperial', 
    papel: 'Presidiu os debates teológicos; provável introdutor e articulador do homoousios', 
    doutrina: 'Firmemente pró-niceno',
    destinoApos325: 'Sárdica 343; forçado a assinar a "blasfêmia" de Sirmium 357 aos ~100 anos; † c. 357/358'
  },
  { 
    figura: 'Alexandre de Alexandria', 
    posicao: 'Bispo (Patriarca) de Alexandria', 
    papel: 'Líder da oposição a Ário; voz principal da ortodoxia no Egito', 
    doutrina: 'Pró-niceno',
    destinoApos325: '† 17 abr. 328; sucedido por seu diácono Atanásio'
  },
  { 
    figura: 'Atanásio de Alexandria', 
    posicao: 'Diácono (secretário de Alexandre)', 
    papel: 'Conselheiro técnico; futuro grande defensor do Credo', 
    doutrina: 'Pró-niceno fervoroso',
    destinoApos325: 'Bispo de Alexandria em 8 jun. 328; sofreu 5 exílios (335, 339, 356, 362, 365); † 2 mai. 373'
  },
  { 
    figura: 'Eusébio de Cesareia', 
    posicao: 'Bispo de Cesareia; historiador', 
    papel: 'Propôs seu credo batismal em autodefesa; aceitou o homoousios sob pressão', 
    doutrina: 'Centro moderado; subordinacionista suave',
    destinoApos325: 'Recusou a Sé de Antioquia (c. 327); presidiu o Sínodo de Tiro contra Atanásio (335); † 339/340'
  },
  { 
    figura: 'Eusébio de Nicomédia', 
    posicao: 'Bispo de Nicomédia', 
    papel: 'Líder político do partido ariano; assinou o Credo mas recusou os anátemas', 
    doutrina: 'Ariano',
    destinoApos325: 'Exilado em dez. 325; retornou em 327/328; batizou Constantino (337); patriarca de Constantinopla (338); † 341'
  },
  { 
    figura: 'Marcelo de Ancira', 
    posicao: 'Bispo de Ancira', 
    papel: 'Pró-niceno ardente; interpretou o homoousios de modo extremo', 
    doutrina: 'Niceno radical (acusado de sabelianismo)',
    destinoApos325: 'Deposto em 336; absolvido pelo Papa Júlio I em Roma (340/1) e em Sárdica (343); † c. 374'
  },
  { 
    figura: 'Eustácio de Antioquia', 
    posicao: 'Bispo de Antioquia', 
    papel: 'Defensor da ortodoxia; combateu vigorosamente o arianismo e os eusebianos', 
    doutrina: 'Pró-niceno',
    destinoApos325: 'Deposto por conspiração eusebiana (c. 327–331); † no exílio na Trácia'
  },
  { 
    figura: 'Macário de Jerusalém', 
    posicao: 'Bispo de Jerusalém', 
    papel: 'Obteve o reconhecimento honorífico para a Sé de Jerusalém', 
    doutrina: 'Pró-niceno',
    destinoApos325: 'Supervisionou as escavações imperiais da Basílica do Santo Sepulcro; † c. 335'
  },
  { 
    figura: 'Nicolau de Mira', 
    posicao: 'Bispo de Mira (Lícia)', 
    papel: 'Presente nas listas antigas; fonte de tradições hagiográficas medievais', 
    doutrina: 'Pró-niceno',
    destinoApos325: 'Sem dados históricos documentados após o concílio; venerado como São Nicolau'
  },
  { 
    figura: 'Vítor e Vincêncio', 
    posicao: 'Presbíteros; legados papais', 
    papel: 'Representaram o Papa Silvestre I; assinaram o Credo logo após Ósio de Córdova', 
    doutrina: 'Pró-nicenos',
    destinoApos325: 'Vincêncio reaparece mais tarde ordenado bispo de Cápua em Sárdica (343) e Arles (353)'
  },
  { 
    figura: 'Ário', 
    posicao: 'Presbítero de Alexandria', 
    papel: 'Interrogado e condenado por suas teses subordinacionistas extremas', 
    doutrina: 'Ariano (Heresiarca)',
    destinoApos325: 'Exilado na Ilíria; readmitido formalmente no Sínodo de Jerusalém (335); † de morte súbita em Constantinopla (336)'
  },
  { 
    figura: 'Secundo de Ptolemaida e Teona de Marmárica', 
    posicao: 'Bispos da Líbia/Egito', 
    papel: 'Os únicos dois bispos que se recusaram absolutamente a assinar o Credo', 
    doutrina: 'Arianos irredutíveis',
    destinoApos325: 'Exilados com Ário; Secundo reaparece anos depois ordenando Pisto como bispo ariano de Alexandria'
  },
  { 
    figura: 'Teógnis de Niceia', 
    posicao: 'Bispo anfitrião de Niceia', 
    papel: 'Acolheu o sínodo em sua sé; assinou o Credo, mas recusou subscrever a excomunhão de Ário', 
    doutrina: 'Eusebiano / Ariano',
    destinoApos325: 'Exilado por Constantino em nov./dez. 325; reabilitado em 327/328'
  },
  { 
    figura: 'Maris de Calcedônia', 
    posicao: 'Bispo de Calcedônia', 
    papel: 'Defendeu as posições subordinacionistas ao lado de Eusébio de Nicomédia', 
    doutrina: 'Eusebiano',
    destinoApos325: 'Apoiou a reação ariana; em 362, já idoso e cego, confrontou publicamente o imperador Juliano, o Apóstata'
  },
  { 
    figura: 'Menófanto de Éfeso', 
    posicao: 'Bispo de Éfeso', 
    papel: 'Membro destacado do grupo eusebiano no Oriente', 
    doutrina: 'Eusebiano',
    destinoApos325: 'Anatematizado e deposto no Sínodo ocidental de Sárdica (343)'
  },
  { 
    figura: 'Narciso de Nerônias', 
    posicao: 'Bispo de Nerônias (Cilícia)', 
    papel: 'Excomungado provisoriamente em Antioquia (início 325); assinou o Credo em Niceia para evitar deposição', 
    doutrina: 'Eusebiano',
    destinoApos325: 'Ativo na facção eusebiana; deposto formalmente em Sárdica (343)'
  },
  { 
    figura: 'Teódoto de Laodiceia', 
    posicao: 'Bispo de Laodiceia (Síria)', 
    papel: 'Suspenso provisoriamente em Antioquia (325); aceitou a assinatura em Niceia', 
    doutrina: 'Eusebiano',
    destinoApos325: 'Recebeu advertência imperial de Constantino para não apoiar os eusebianos exilados'
  },
  { 
    figura: 'Pafnúcio da Tebaida', 
    posicao: 'Bispo no Alto Egito', 
    papel: 'Confessor mutilado na perseguição; venerado por Constantino; opôs-se à imposição do celibato clerical obrigatório', 
    doutrina: 'Pró-niceno',
    destinoApos325: 'Em 335, no Sínodo de Tiro, defendeu vigorosamente Atanásio das acusações arianas'
  },
  { 
    figura: 'Paulo de Neocesareia', 
    posicao: 'Bispo de Neocesareia (Ponto)', 
    papel: 'Confessor que teve as mãos paralisadas por ferro em brasa sob Licínio', 
    doutrina: 'Pró-niceno',
    destinoApos325: 'Retornou à sua sé no Ponto, onde serviu como autoridade moral venerada até sua morte'
  },
  { 
    figura: 'Potamon de Heracleópolis', 
    posicao: 'Bispo de Heracleópolis (Egito)', 
    papel: 'Confessor que perdera um olho nas minas de Maximino Daia', 
    doutrina: 'Pró-niceno',
    destinoApos325: 'Firme aliado de Atanásio; sofreu espancamento brutal por arianos sob Gregório da Capadócia e morreu como mártir'
  },
  { 
    figura: 'Espiridião de Trimitonte', 
    posicao: 'Bispo de Trimitonte (Chipre)', 
    papel: 'Simples pastor de ovelhas e confessor; famoso por sua piedade e rude oratória', 
    doutrina: 'Pró-niceno',
    destinoApos325: 'Participou do Sínodo de Sárdica (343); venerado como grande taumaturgo em Chipre'
  },
  { 
    figura: 'Tiago de Nísibis', 
    posicao: 'Bispo de Nísibis (Mesopotâmia)', 
    papel: 'Asceta rigoroso da fronteira oriental do Império Romano', 
    doutrina: 'Pró-niceno',
    destinoApos325: 'Liderou a defesa espiritual e moral da cidade de Nísibis durante o cerco promovido por Sapor II da Pérsia em 338, morrendo nesse mesmo ano'
  },
  { 
    figura: 'Leôncio de Cesareia', 
    posicao: 'Bispo de Cesareia da Capadócia', 
    papel: 'Representante da importante Sé capadócia na Ásia Menor', 
    doutrina: 'Pró-niceno',
    destinoApos325: 'Segundo a tradição armênia (Agatângelo), consagrou bispo a São Gregório, o Iluminador'
  },
  { 
    figura: 'Alexandre de Bizâncio', 
    posicao: 'Presbítero / Bispo de Bizâncio', 
    papel: 'Representou o idoso bispo Metrófanes; tornou-se o primeiro bispo da futura Constantinopla', 
    doutrina: 'Pró-niceno',
    destinoApos325: 'Em 336, sob intensa pressão imperial para readmitir Ário, fez oração e jejum contínuos na igreja para evitar a profanação da comunhão'
  },
  { 
    figura: 'Protógenes de Sárdica', 
    posicao: 'Bispo de Sárdica (Mésia)', 
    papel: 'Representante das províncias balcânicas', 
    doutrina: 'Pró-niceno',
    destinoApos325: 'Sediou e foi anfitrião do grande Sínodo Ocidental de Sárdica em 343'
  },
  { 
    figura: 'Ceciliano de Cartago', 
    posicao: 'Bispo de Cartago', 
    papel: 'Único bispo do Norte da África Proconsular presente; figura central da controvérsia donatista', 
    doutrina: 'Pró-niceno',
    destinoApos325: 'Levou uma cópia oficial autêntica dos Cânones de Niceia para os arquivos de Cartago (a Versio Caeciliani)'
  },
  { 
    figura: 'Aristaces da Armênia', 
    posicao: 'Bispo armênio', 
    papel: 'Filho e representante de São Gregório, o Iluminador', 
    doutrina: 'Pró-niceno',
    destinoApos325: 'Levou as decisões e o Credo de Niceia para o Reino da Armênia, promulgando-os no sínodo nacional de Vagharshapat'
  },
  { 
    figura: 'Teófilo dos Godos', 
    posicao: 'Bispo da Cítia / territórios góticos', 
    papel: 'Representou as comunidades cristãs germânicas além do limes do Danúbio', 
    doutrina: 'Pró-niceno',
    destinoApos325: 'Mestre de Úlfilas; sua assinatura atesta que o cristianismo gótico inicial era niceno antes da posterior conversão ariana'
  },
  { 
    figura: 'Euzoio de Alexandria', 
    posicao: 'Diácono de Alexandria', 
    papel: 'Companheiro e coacusado de Ário em Alexandria; deposto e excomungado no sínodo de 321', 
    doutrina: 'Ariano irredutível',
    destinoApos325: 'Submeteu com Ário a profissão de fé de 327; tornou-se patriarca ariano de Antioquia (361–376) e batizou o imperador Constâncio II no leito de morte (361)'
  }
]

/* ═══════════════════════════════════════════════════════════
   2. LISTAS DE ASSINATURAS E BISPOS NOTÁVEIS
═══════════════════════════════════════════════════════════ */

export interface AssinaturaInfo {
  id: string
  titulo: string
  conteudo: string
}

export const assinaturasData: AssinaturaInfo[] = [
  {
    id: 'critica-textual',
    titulo: 'A Reconstrução das Listas (Gelzer, Hilgenfeld e Cuntz)',
    conteudo: 'Em 1898, os estudiosos H. Gelzer, H. Hilgenfeld e O. Cuntz publicaram a obra monumental "Patrum Nicaenorum nomina", cruzando todas essas listas antigas para reconstruir a lista original. A estimativa acadêmica moderna aponta que compareceram entre 250 e 300 bispos — tornando o número tradicional de "318" mais teológico e simbólico do que exato.'
  },
  {
    id: 'duas-familias',
    titulo: 'As Duas Famílias de Listas',
    conteudo: 'Conforme demonstrou E. Honigmann, o arquétipo original continha cerca de 200 nomes e sofreu sucessivas interpolações. A ordem protocolar de subscrição era estrita: iniciava com Ósio de Córdova, os presbíteros romanos Vítor e Vincêncio (legados papais) e Alexandre de Alexandria, seguindo pelas províncias orientais (Egito, Tebaida, Líbia, Palestina, Fenícia, Celessíria etc.) e relegando o Ocidente ao fim.\n\nSalta aos olhos que Ário não assina por ser simples presbítero réu, enquanto líderes arianos como Eusébio de Nicomédia e Teógnis subscreveram o Credo — apenas Secundo de Ptolemaida e Teona de Marmárica recusaram o documento. Revela-se também a extrema disparidade geográfica: nenhuma sé da Britânia esteve presente e, de toda a Hispânia, apenas Córdova. Além disso, as listas sofrem com problemas textuais crônicos: nomes duplicados, sés inexistentes e graves erros de transliteração entre os idiomas.'
  },
  {
    id: 'ocidentais',
    titulo: 'A Minoria Ocidental',
    conteudo: 'Niceia foi um concílio ecumênico na convocação, mas esmagadoramente oriental na presença física. Devido à imensa distância, à idade avançada do Papa Silvestre e à dificuldade logística de viajar, apenas cerca de cinco a sete bispos do Ocidente latino estiveram presentes. As listas atestam: Ósio de Córdova (Espanha), Ceciliano de Cartago (Norte da África), Marcos da Calábria (Itália), Nicásio de Die (Gália/França) e Domno de Estridão (Panônia/Dalmácia). Eles, junto com os presbíteros romanos Vítor e Vincêncio, representaram toda a metade ocidental do Império Romano.'
  },
  {
    id: 'exoticos',
    titulo: 'Bispos "Exóticos" (Fora do Império Romano)',
    conteudo: 'Constantino também convidou bispos de regiões além das fronteiras (limes) do Império, demonstrando a universalidade da Igreja Cristã. As listas registram presenças fascinantes: João, designado como bispo "da Pérsia e da Grande Índia"; Teófilo, bispo dos Godos (região da Crimeia/Cítia); e Aristaces da Armênia (filho de Gregório, o Iluminador, que havia convertido o Reino da Armênia ao cristianismo décadas antes de Constantino). A presença de Teófilo mostra que o cristianismo já penetrava entre os germânicos de forma ortodoxa antes mesmo das missões arianas de Úlfilas.'
  },
  {
    id: 'espiridiao',
    titulo: 'Espiridião de Trimitonte (O Tijolo e o Filósofo)',
    conteudo: 'Outro nome notável atestado nas listas antigas é o de Espiridião, bispo de Trimitonte, na ilha de Chipre. Tratava-se de um simples pastor de ovelhas que manteve sua profissão humilde mesmo após ser eleito ao episcopado. A tradição hagiográfica (embora posterior) o associa a um milagre famoso durante os debates de Niceia: para explicar a unidade e trindade de Deus a um filósofo de retórica ariana, Espiridião teria apertado um tijolo de barro, fazendo sair fogo para cima, água para baixo e restando apenas a terra em suas mãos — uma analogia rústica, visual e eficaz do mistério trinitário que teria calado o filósofo.'
  }
]