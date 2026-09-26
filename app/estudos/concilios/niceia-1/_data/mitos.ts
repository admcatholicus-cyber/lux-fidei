/* ─────────────────────────────────────────────────────────────
   MITOS POPULARES E LENDAS HISTÓRICAS DESMENTIDOS
   Análise crítica das principais narrativas populares e
   simplificações históricas sobre o Concílio de Niceia I (325).
───────────────────────────────────────────────────────────── */

export interface Mito {
  id: string
  mito: string
  realidade: string
  origem?: string
}

export const mitosData: Mito[] = [
  {
    id: 'da-vinci',
    mito: 'Constantino impôs a divindade de Cristo numa votação apertada (O Código Da Vinci)',
    realidade:
      'A votação em Niceia foi esmagadora: de cerca de 300 bispos presentes, apenas dois (Secundo de Ptolemaida e Teona de Marmárica) recusaram-se absolutamente a assinar o Credo. A divindade de Cristo já era confessada universalmente na liturgia e nas atas dos mártires desde o século I; o debate conciliar não era sobre se Cristo era divino, mas sobre a articulação filosófica precisa de sua divindade (se Ele era da mesma substância do Pai ou a primeira e mais elevada das criaturas). Dan Brown inventou a "votação apertada" por razões de dramatização romanesca.',
    origem: 'Dan Brown, O Código Da Vinci (2003); ecoa teses de Holy Blood, Holy Grail (1982)',
  },
  {
    id: 'biblia-constantino',
    mito: 'Constantino criou a Bíblia e decidiu o cânon das Escrituras em Niceia',
    realidade:
      'O Concílio de Niceia não discutiu nem definiu o cânon da Bíblia em nenhum de seus cânones ou sessões. O processo de reconhecimento dos livros inspirados foi gradual e orgânico ao longo dos séculos II a IV (testemunhado pelo Fragmento Muratoriano, Orígenes, Eusébio e formalizado por Atanásio na Carta Festal 39 de 367 e nos concílios regionais de Hipona e Cartago). Constantino posteriormente encomendou 50 cópias luxuosas das Escrituras a Eusébio de Cesareia para as igrejas de Constantinopla, mas não interveio na escolha dos livros.',
    origem: 'Mito popular moderno; confusão com a encomenda imperial das 50 cópias bíblicas a Eusébio',
  },
  {
    id: 'livros-altar',
    mito: 'Os bispos colocaram livros heréticos e ortodoxos sobre o altar e os heréticos caíram por milagre',
    realidade:
      'Trata-se de uma lenda medieval totalmente desprovida de fundamento nas fontes contemporâneas do século IV. O relato surge no "Synodicon Vetus" (uma compilação bizantina anônima e tardia do século IX). A lenda afirmava que os bispos teriam deixado os livros no altar durante a noite e orado para que os apócrifos caíssem no chão. Nenhuma fonte do século IV (Eusébio, Atanásio, Ósio) ou historiador do século V (Sócrates, Sozômeno, Teodoreto) menciona tal episódio, que foi popularizado por Voltaire no século XVIII para satirizar os concílios.',
    origem: 'Synodicon Vetus (séc. IX); divulgado com fins satíricos por Voltaire no Dicionário Filosófico (1764)',
  },
  {
    id: 'divindade-antes',
    mito: 'Antes de Niceia, Jesus era considerado pelos cristãos como um mero profeta humano',
    realidade:
      'Os escritos do Novo Testamento (Jo 1,1; Fl 2,6-11; Hb 1,8) e os Padres Apostólicos e Apologistas dos séculos I a III (Inácio de Antioquia chamando Cristo de "nosso Deus", Melitão de Sardes, Tertuliano, Orígenes) atestam que a adoração a Jesus como Deus era o centro da fé e da liturgia cristã desde as origens. O próprio arianismo não ensinava que Jesus era um mero homem (isso era o erro de Paulo de Samósata), mas sim que o Logos era um ser celestial preexistente e divino de ordem criada. O debate de Niceia opôs duas visões sobre o alcance dessa divindade, não a negação da mesma.',
    origem: 'Reducionismo Iluminista e teses neoarianas e unitaristas dos séculos XVIII e XIX',
  },
  {
    id: 'tapa-nicolau',
    mito: 'São Nicolau de Mira esmurrou ou esbofeteou Ário no rosto durante a sessão do concílio',
    realidade:
      'A famosa história de que São Nicolau, bispo de Mira, perdeu o controle diante das "blasfêmias" de Ário e lhe deu uma bofetada — sendo por isso temporariamente privado de seu pálio e evangelho até ser reabilitado por uma visão divina — é uma lenda hagiográfica tardia. A narrativa não aparece em NENHUMA fonte contemporânea do século IV nem nos historiadores eclesiásticos do século V. O nome de Nicolau consta nas listas de assinaturas reconstruídas, mas o episódio da bofetada só surge em manuscritos hagiográficos medievais a partir do século X.',
    origem: 'Hagiografia bizantina medieval (séc. X–XIV); ausente das atas e fontes do século IV e V',
  },
  {
    id: 'constantino-teologo',
    mito: 'Constantino I ditou a teologia do concílio e inventou o conceito de homoousios',
    realidade:
      'Constantino era um homem de estado pragmático, não um teólogo. Ele desejava a paz e a unidade eclesiástica para estabilizar o Império. O termo "homoousios" tinha sólidos precedentes teológicos no século III (Dionísio de Alexandria na sua Refutação e Defesa, e a fórmula latina "una substancia" de Tertuliano). O termo foi sugerido ao imperador por seu conselheiro eclesiástico, Ósio de Córdova (Ossius), juntamente com a delegação alexandrina. Constantino endossou e pressionou pela palavra porque percebeu que ela funcionava como um teste inequívoco de ortodoxia que os arianos não podiam assinar.',
    origem: 'Leituras cesaropapistas extremadas; polêmicas antipapais e protestantes dos séculos XVI e XVII',
  },
  {
    id: 'domingo-sabado',
    mito: 'Niceia instituiu o domingo como dia de culto obrigatório e aboliu o sábado bíblico',
    realidade:
      'A celebração litúrgica do domingo (o "Dia do Senhor" ou "primeiro dia da semana") já era universalmente consolidada na Igreja Primitiva desde o período apostólico (Jo 20,19; At 20,7; 1 Cor 16,2; Didaqué 14; Inácio de Antioquia, Magn. 9; Justino, 1 Apol. 67). A famosa lei civil de Constantino decretando repouso no "venerável dia do Sol" (3 de março de 321, CJ 3.12.2) é quatro anos anterior ao sínodo. O Cânone 20 de Niceia apenas pressupõe o domingo já plenamente constituído, regulando tão somente a proibição litúrgica de ajoelhar-se naquele dia e durante o Tempo Pascal.',
    origem: 'Apologética sabatista surgida nos séculos XIX e XX, interpretando anacronicamente o papel político de Constantino.',
  },
  {
    id: 'celibato-obrigatorio',
    mito: 'O Concílio de Niceia impôs o celibato obrigatório a todo o clero cristão',
    realidade:
      'Niceia não instituiu a obrigatoriedade do celibato clerical. O Cânone 3 proíbe exclusivamente que clérigos coabitem com mulheres "introduzidas" (syneisaktai), visando impedir o concubinato camuflado, excetuando familiares de sangue. O clero casado antes da ordenação continuou a viver e servir legitimamente. O historiador Sócrates relata que o influente bispo e confessor Pafnúcio do Egito, ele próprio celibatário convicto, impediu que o sínodo impusesse a continência absoluta aos clérigos casados, classificando-a como um jugo insuportável.',
    origem: 'Confusão histórica comum entre as determinações locais ocidentais do Concílio de Elvira (c. 306) e o sínodo ecumênico de Niceia.',
  },
  {
    id: 'reencarnacao-excluida',
    mito: 'Niceia condenou a doutrina da reencarnação e mandou retirá-la das passagens da Bíblia',
    realidade:
      'A ideia de reencarnação ou metempsicose jamais foi debatida ou mencionada nos 20 cânones de Niceia, cujo sínodo sequer tratou de livros bíblicos. As Escrituras canônicas sempre ensinaram a unicidade da vida e a ressurreição da carne (Hb 9,27). A confusão provém dos anátemas antiorigenistas promulgados por Justiniano I no sínodo de Constantinopla de 543 e chancelados no Concílio de Constantinopla II em 553, os quais condenavam a doutrina platônica da preexistência das almas (crença de que as almas habitavam um plano espiritual superior antes de serem acopladas a corpos biológicos), conceito teológico que não se confunde com a transmigração reencarnacionista.',
    origem: 'Literatura esotérica-teosófica de Madame Helena Blavatsky no séc. XIX e obras de autores espíritas do séc. XX.',
  },
  {
    id: 'invencao-trindade',
    mito: 'Niceia inventou a doutrina da Trindade e utilizou-a para divinizar Jesus Cristo',
    realidade:
      'A teologia trinitária possui sólidas bases no Novo Testamento (Mt 28,19; 2 Cor 13,13). O conceito e a terminologia já estavam rigorosamente delimitados bem antes de 325: o vocábulo grego <em>Triás</em> foi empregado primeiro por Teófilo de Antioquia (c. 180, Ad Autol. II.15) e o termo latino <em>Trinitas</em> foi popularizado e sistematizado por Tertuliano (c. 213, Adv. Prax. 2). Curiosamente, o texto oficial do Credo de Niceia (325) não contém a palavra "Trindade", concentrando-se na divindade do Filho consubstancial ao Pai contra a tese de Ário.',
    origem: 'Panfletos e literatura apologética de grupos religiosos modernos de matriz antitrinitária.',
  },
  {
    id: 'catolicismo-constantino',
    mito: 'Constantino fundou a Igreja Católica Romana fundindo rituais cristãos com crenças pagãs',
    realidade:
      'A designação "Igreja Católica" foi utilizada pela primeira vez por Inácio de Antioquia no ano 110 d.C. (Esmirniotas 8,2), quando Roma nem sequer sonhava com a tolerância oficial. Constantino não chefiou a Igreja nem presidiu os debates de fé — ele era um imperador leigo e só foi batizado no leito de morte em 337. O estabelecimento do Natal em 25 de dezembro é posterior (Cronógrafo de 354) e decorreu de complexos cômputos a partir de 25 de março (Anunciação/Paixão), e as mídias artísticas herdarão iconografias da cultura clássica sem que isso represente sincretismo de fé doutrinal.',
    origem: 'A obra de panfletagem anticatólica do reverendo presbiteriano Alexander Hislop, "The Two Babylons" (1853), muito influente em setores fundamentalistas.',
  },
  {
    id: 'ariano-etnico',
    mito: 'Os defensores da teologia "ariana" condenados em Niceia eram pertencentes à "raça ariana"',
    realidade:
      'Trata-se de um equívoco léxico e etimológico puramente coincidente em língua portuguesa. O termo religioso "ariano" é derivado do nome do presbítero eclesiástico Ário (do grego <em>Areios</em>, "consagrado a Ares"). O termo linguístico e racial "ariano" deriva do sânscrito <em>ārya</em> ("nobre") e foi adotado no século XIX pela filologia indo-europeia e apropriado pelo racismo biológico e nazismo no século XX. Não existe nenhuma conexão geográfica, racial, linguística ou histórica entre Ário de Alexandria e a ideologia supremacista moderna.',
    origem: 'Confusão lexical espontânea e homonímia na língua portuguesa comum.',
  },
]