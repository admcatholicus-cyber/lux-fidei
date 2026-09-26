/* ─────────────────────────────────────────────────────────────
   DOSSIÊ DOCUMENTAL: 2H. TESTEMUNHOS SOBRE OS DEBATES DE NICEIA
   Fontes críticas:
   - Hans-Georg Opitz, Urkunden zur Geschichte des Arianischen Streites (Urk. 22)
   - Sócrates Escolástico, Historia Ecclesiastica (HE I.8)
   - Teodoreto de Ciro, Historia Ecclesiastica (HE I.8, I.12)
   - Ambrósio de Milão, De Fide III.15.125
   - Atanásio de Alexandria, De decretis 19–20; Ad Afros 2, 5–6
   - Filostórgio, Historia Ecclesiastica I.7 (ed. Bidez/Winkelmann)
   - Eustácio de Antioquia, Fragmenta (ed. J. Declerck, CCSG 51, 2002)
   - Gregório Nazianzeno, Oratio 21.14
   - Hilário de Poitiers, De synodis 91
   - Basílio de Cesareia, Epistula 125
   - Rufino de Aquileia, Historia Ecclesiastica X.3–5
───────────────────────────────────────────────────────────── */

export interface TestemunhoDebate {
  id: string
  autor: string
  posicaoTeologica: string
  obraFonte: string
  numeroOpitz?: string
  titulo: string
  contexto: string
  textoEpitomePortugues: string
  importanciaHistorica: string
}

export const testemunhosDebatesData: TestemunhoDebate[] = [
  {
    id: 'eusebio-cesareia-carta-floc',
    autor: 'Eusébio de Cesareia',
    posicaoTeologica: 'Centro moderado / Subordinacionista suave',
    obraFonte: 'Sócrates Escolástico, HE I.8; Teodoreto de Ciro, HE I.12; Athanasius, De decretis 33',
    numeroOpitz: 'Urk. 22',
    titulo: 'Carta à sua Igreja sobre a assinatura do Credo e o Homoousios',
    contexto:
      'Escrita em junho/julho de 325. Eusébio havia sido excomungado no Sínodo de Antioquia (início de 325). Para salvar sua Sé e provar ortodoxia, apresentou seu credo de Cesareia e acabou assinando o termo homoousios sob pressão imperial.',
    textoEpitomePortugues:
      '"Como era natural que alguns rumores vos alcançassem sobre a nossa fé examinada no grande sínodo de Niceia... envio-vos o texto que propus e a adição feita pelos bispos.\n\nO nosso texto batismal foi lido diante do nosso imperador amado de Deus e pareceu reto a todos... Mas o imperador Constantino exortou todos a aceitarem esta fé e assiná-la, adicionando apenas a única palavra: consubstancial (homoousios).\n\nO próprio imperador explicou que o termo homoousios não deve ser entendido segundo as afecções dos corpos, nem por divisão, corte ou separação da substância do Pai, pois a natureza imaterial e incorpórea não pode sofrer afecção corporal alguma... Quando o imperador filosofou nesses termos, nós, tendo em vista a paz e o sentido ortodoxo, concordamos em assinar a palavra homoousios sem resistência."',
    importanciaHistorica:
      'Registra a famosa "glosa hermenêutica imperial" de Constantino, que desmaterializou o conceito de homoousios para aliviar as reservas dos bispos orientais conservadores.'
  },
  {
    id: 'eustacio-antioquia-fragmento',
    autor: 'Eustácio de Antioquia',
    posicaoTeologica: 'Niceno ardente / Anti-ariano',
    obraFonte: 'Preservado em Teodoreto de Ciro, Historia Ecclesiastica I.8',
    titulo: 'O relato da destruição do documento ariano no plenário',
    contexto:
      'Eustácio de Antioquia, uma das vozes principais da ortodoxia em Niceia, descreve a reação violenta do plenário quando o escrito eusebiano foi lido nas primeiras sessões.',
    textoEpitomePortugues:
      '"Quando a assembleia buscava o modo de formular a fé, foi apresentado um documento escrito pela facção de Eusébio [de Nicomédia], contendo abertamente a sua heresia. A sua leitura diante de todos provocou uma dor indescritível aos ouvintes e uma vergonha irreparável aos autores. O documento foi rasgado em pedaços à vista de todos e a facção ariana foi coberta de opróbrio e silenciada."',
    importanciaHistorica:
      'Testemunha o momento de ruptura dramática no início do concílio, quando a tentativa ariana de impor sua teologia falhou perante a indignação da maioria episcopal.'
  },
  {
    id: 'ambrosio-milao-de-fide',
    autor: 'Ambrósio de Milão',
    posicaoTeologica: 'Niceno ocidental / Doutor da Igreja',
    obraFonte: 'Ambrósio de Milão, De Fide ad Gratianum Augustum III.15.125',
    titulo: 'A origem do termo Homoousios na própria carta de Eusébio de Nicomédia',
    contexto:
      'Escrito em 378. Ambrósio revela a origem da escolha do termo pelos Padres de Niceia com base na correspondência dos próprios arianos.',
    textoEpitomePortugues:
      '"Os nossos Padres colocaram esta palavra [homoousios] no Credo porque viram que ela causava pavor aos seus adversários. Pois da própria carta de Eusébio de Nicomédia foi retirada a espada que cortou a cabeça da sua própria heresia! Nessa carta, Eusébio escrevera: \'Se dissermos que o Filho é verdadeiro e incriado, somos forçados a confessá-Lo consubstancial (homoousios) ao Pai\'. Quando esta carta foi lida no concílio de Niceia, os bispos tomaram o termo citado por Eusébio e colocaram-no na regra de fé, para usarem a própria arma do inimigo contra a sua impiedade."',
    importanciaHistorica:
      'Explica a tática teológica de Niceia: usar como teste incontroverso o exato termo que os arianos confessavam abertamente ser incompatível com a sua doutrina.'
  },
  {
    id: 'atanasio-de-decretis-piscar-olhos',
    autor: 'Atanásio de Alexandria',
    posicaoTeologica: 'Líder niceno / Secretário do Concílio',
    obraFonte: 'Atanásio de Alexandria, De decretis Nicaenae Synodi 19–20',
    titulo: 'A tática eusebiana de "piscadelas de olhos" e a necessidade de termos ontológicos',
    contexto:
      'Escrito c. 350–356. Atanásio justifica por que os Padres foram forçados a usar termos não-bíblicos como ousía e homoousios.',
    textoEpitomePortugues:
      '"Quando os bispos quiseram abolir as expressões ímpias dos arianos e usar as palavras das Escrituras, como \'Luz\', \'Poder de Deus\', \'Imagem do Pai\', os eusebianos concordavam prontamente. Mas os bispos observaram que eles piscavam os olhos e acenavam entre si (dianeuontes kai enseiontes tous ophthalmous), zombando das palavras... Quando se dizia \'o Filho é a Imagem de Deus\', eles murmurejavam: \'Também nós somos chamados imagem e glória de Deus\'. Quando se dizia \'Ele é o Poder\', diziam: \'Até os gafanhotos são chamados poderes de Deus\'. Vendo esta fraude maliciosa, os Padres foram forçados a concentrar o sentido das Escrituras e escrever em termos ontológicos claros: o Filho é \'da substância do Pai\' (ek tēs ousias) e \'consubstancial\' (homoousios)."',
    importanciaHistorica:
      'A explicação clássica da razão pela qual a Igreja teve de transpor a linguagem puramente bíblica para a precisão filosófica a fim de fechar brechas hermenêuticas.'
  },
  {
    id: 'filostorgio-perspectiva-ariana',
    autor: 'Filostórgio de Borisso',
    posicaoTeologica: 'Historiador Ariano Radical (Eunomiano)',
    obraFonte: 'Filostórgio, Historia Ecclesiastica I.7 (preservado na Epitome de Fócio)',
    titulo: 'A perspectiva ariana: A conspiração prévia em Nicomédia',
    contexto:
      'Escrito c. 430. Filostórgio representa a tradição historiográfica da facção vencida (os anomeus/eunomianos).',
    textoEpitomePortugues:
      '"Filostórgio, o inimigo de Deus, relata que antes da reunião do concílio em Niceia, Alexandre de Alexandria e Ósio de Córdova reuniram-se secretamente em Nicomédia com outros bispos de sua facção e conspiraram para impor o termo consubstancial (homoousios) e excomungar Ário... Ele afirma que Constantino foi enganado pela influência da imperatriz e de Ósio, e que a maioria dos bispos assinou o documento não por convicção, mas por medo do exílio e do poder imperial."',
    importanciaHistorica:
      'Documento insubstituível da historiografia alternativa ariana, revelando como a oposição interpretou a vitória nicena como manobra política de bastidores.'
  },
  /* ─────────────────────────────────────────────────────────────
     NOVAS ADIÇÕES (ITEM 93)
  ───────────────────────────────────────────────────────────── */
  {
    id: 'eustacio-antioquia-fragmentos-ccsg51',
    autor: 'Eustácio de Antioquia',
    posicaoTeologica: 'Niceno rigoroso / Antiariano (Líder Niceno)',
    obraFonte: 'Fragmentos exegéticos e dogmáticos (ed. José H. Declerck, CCSG 51, 2002)',
    titulo: 'Exegese de Provérbios 8,22 e a Alma Humana de Cristo contra os Arianos',
    contexto:
      'Nos debates preparatórios e conciliares, Eustácio refutou o uso ariano de Provérbios 8,22 ("O Senhor me criou no início de seus caminhos"). Ele demonstrou que o texto se refere à humanidade assumida na encarnação, e não à geração eterna da divindade do Logos. Além disso, denunciou que os arianos mutilavam a cristologia ao negar uma alma racional a Cristo.',
    textoEpitomePortugues:
      '"Quando o sábio Salomão proclama: «O Senhor me criou no princípio de Seus caminhos para as Suas obras», ele não está definindo a substância eterna e incausada do Logos divino, mas predizendo o templo imaculado de Sua humanidade terrena, gerada no tempo para a economia da nossa salvação... Os arianos, contudo, desprovendo o Salvador de uma alma humana racional e completa (psychē logikē), atribuem a fome, as lágrimas, a ignorância temporal e o pavor da morte diretamente à natureza divina impassível, com o fito de provarem blasfemamente que o Filho é uma criatura mutável." (Frag. 17 e 24, Declerck)',
    importanciaHistorica:
      'Pioneirismo cristológico: Eustácio estabeleceu a base da cristologia antioquena clássica e foi o primeiro a diagnosticar que o arianismo eliminava a alma humana de Cristo para tentar macular a impassibilidade da divindade do Logos.'
  },
  {
    id: 'gregorio-nazianzeno-oratio-21',
    autor: 'Gregório de Nazianzo (O Teólogo)',
    posicaoTeologica: 'Padre Capadócio / Ortodoxia Nicena',
    obraFonte: 'Gregório Nazianzeno, Oratio 21.14 (In laudem Athanasii)',
    titulo: 'O Elogio de Atanásio e a Batalha Invicta da Fé em Niceia',
    contexto:
      'Discurso proferido c. 380 em Constantinopla em louvor a Atanásio. Gregório retrata o impacto histórico da atuação do jovem diácono alexandrino na assembleia dos 318 bispos.',
    textoEpitomePortugues:
      '"Em Niceia, quando os bispos estavam reunidos e a autoridade imperial convocara os mais ilustres luminares da Igreja para extinguir a chama ímpia da discórdia... Atanásio, ainda na condição de diácono, destacou-se entre todos os prelados. Não pelo esplendor de uma mitra que ainda não ostentava, mas pela pureza intrépida de sua doutrina e pelo rigor da sua teologia. Ele sozinho desfez as tramas e os sofismas dos adversários e sustentou a batalha com vigor inigualável, merecendo ser celebrado por toda a Igreja como o baluarte invencível da Trindade."',
    importanciaHistorica:
      'Fixa a tradição patrística capadócia de celebrar a vitória de Niceia através da coragem intelectual e confessional de Atanásio diante das pressões políticas da corte.'
  },
  {
    id: 'atanasio-ad-afros-memoria',
    autor: 'Atanásio de Alexandria',
    posicaoTeologica: 'Patriarca de Alexandria / Campeão Niceno',
    obraFonte: 'Atanásio de Alexandria, Epistula ad Afros episcopos 2; 5–6',
    titulo: 'A Memória Retrospectiva do Concílio 44 Anos Depois (c. 369 d.C.)',
    contexto:
      'Carta sinodal enviada por Atanásio e noventa bispos egípcios aos bispos do Norte da África c. 369. Quase cinco décadas após o concílio, o patriarca rememora a razão da vitória e a definitividade dos decretos nicenos contra as investidas ariminenses.',
    textoEpitomePortugues:
      '"O concílio reunido em Niceia é suficiente para derrubar todas as heresias e sustentar a fé católica... Pois quando os bispos quiseram usar os termos das Escrituras, os arianos distorciam cada palavra em sentido mundano. Foi por essa razão que os Padres, reunindo o genuíno significado apostólico, escreveram de modo límpido que o Filho é «da substância do Pai» e «consubstancial» (homoousios). Todos os sínodos subsequentes convocados pelos arianos em Arímino e Selêucia foram tentativas inúteis de cobrir a verdade. A fé de Niceia não foi inventada por homens, mas recebida dos apóstolos e selada com autoridade irrevogável."',
    importanciaHistorica:
      'Testemunho histórico-dogmático maduro de primeira mão do último grande protagonista de 325, reafirmando o caráter normativo ecumênico do homoousios perante o episcopado ocidental.'
  },
  {
    id: 'hilario-poitiers-de-synodis-91',
    autor: 'Hilário de Poitiers',
    posicaoTeologica: 'Ortodoxo Niceno Ocidental (O "Atanásio do Ocidente")',
    obraFonte: 'Hilário de Poitiers, De synodis seu de fide Orientalium 91',
    titulo: 'A Confissão Pessoal do Homoousios e a Ortodoxia Implícita no Batismo',
    contexto:
      'Escrito em 359 durante o exílio na Frígia. Hilário explica aos bispos das Gálias e da Germânia como o Ocidente manteve a fé nicena substancialmente através da liturgia batismal antes mesmo de ter contato formal com o texto grego do Concílio de Niceia.',
    textoEpitomePortugues:
      '"Deus me é testemunha de que, tendo sido regenerado pelo batismo e exercido o episcopado por muitos anos, nunca ouvi a palavra «homoousios» expressa em um credo até o momento do meu exílio na Ásia; contudo, sempre compreendi e confessei no meu íntimo aquilo que o termo verdadeiramente expressa, conforme ensinam os Santos Evangelhos e os Apóstolos... Não condeneis levianamente os bispos orientais que temem o homoousios por suspeita de sabelianismo, se eles professam com sinceridade a perfeita igualdade de natureza no «homoiousios». Pois quando a substância é idêntica e sempiterna, a perfeita semelhança ontológica nada mais é do que a própria consubstancialidade!"',
    importanciaHistorica:
      'O documento mais importante para compreender a recepção do dogma niceno no Ocidente latino: demonstra que a essência trinitária já habitava a fé viva da Igreja antes da generalização do vocabulário filosófico grego.'
  },
  {
    id: 'basilio-epistula-125',
    autor: 'Basílio de Cesareia (O Grande)',
    posicaoTeologica: 'Padre Capadócio / Arquiteto do Neo-Nicenismo',
    obraFonte: 'Basílio de Cesareia, Epistula 125 (ad Eustathium Sebastenum)',
    titulo: 'O Símbolo de Niceia como Critério Inegociável de Comunhão Eclesial',
    contexto:
      'Escrita c. 373 a Eustácio de Sebaste. Basílio impõe a subscrição formal e integral da fé de Niceia de 325 como condição dogmática indispensável para qualquer acordo eclesial no Oriente.',
    textoEpitomePortugues:
      '"Não exigimos nenhuma outra fé àqueles que desejam estar em nossa comunhão senão aquela que foi redigida pelos nossos Santos Padres reunidos em Niceia contra a impiedade ariana. Pois nela tudo foi formulado com piedade e precisão insuperáveis... Aqueles que subscrevem essa confissão devem aceitar expressamente o termo homoousios, sem subterfúgios capciosos, e anatematizar a heresia que rebaixa o Espírito Santo à condição de criatura ministerial."',
    importanciaHistorica:
      'Testemunha a fase de consolidação pré-constantinopolitana, quando Niceia foi entronizada como o padrão canônico definitivo e intocável de toda a ortodoxia universal.'
  },
  {
    id: 'rufino-historia-ecclesiastica-10-5',
    autor: 'Rufino de Aquileia',
    posicaoTeologica: 'Historiador Niceno Latino',
    obraFonte: 'Rufino de Aquileia, Historia Ecclesiastica X.5 (PL 21, 470–472)',
    titulo: 'A Resistência Inicial dos Dezessete Bispos Arianos no Plenário Conciliar',
    contexto:
      'Escrito c. 402/403. Rufino documenta a correlação de forças nas primeiras sessões de Niceia e registra o número exato de bispos que compunham o núcleo duro da facção eusebiana.',
    textoEpitomePortugues:
      '"No início dos debates em Niceia, havia dezessete bispos que apoiavam firmemente a impiedade de Ário e recusavam a inclusão do termo consubstancial. Entre eles estavam Eusébio de Nicomédia, Teógnis de Niceia, Maris de Calcedônia e os dois bispos líbios Secundo e Teona... À medida que as discussões avançavam e o imperador demonstrava que não toleraria o cisma e que a autoridade das Escrituras apoiava a geração verdadeira do Filho, a maioria vacilou e assinou o Símbolo com a mão, reservando a heresia na mente. No final, apenas os dois líbios permaneceram irredutíveis e foram enviados ao desterro."',
    importanciaHistorica:
      'Fixa na historiografia patrística a contagem tradicional dos dezessete bispos da oposição antes dos compromissos e assinaturas finais.'
  },
  {
    id: 'socrates-he-leigo-filosofo',
    autor: 'Sócrates Escolástico',
    posicaoTeologica: 'Historiador Eclesiástico de Constantinopla',
    obraFonte: 'Sócrates Escolástico, Historia Ecclesiastica I.8 (cf. Sozômeno I.18; Rufino X.3)',
    titulo: 'O Debate Dialético: O Confessor Simples que Silenciou o Filósofo Pagão',
    contexto:
      'Narra os debates extraoficiais nos corredores de Niceia, onde dialéticos helenistas e retóricos arianos disputavam com bispos e confessores sobreviventes da perseguição de Diocleciano.',
    textoEpitomePortugues:
      '"Antes da abertura solene das sessões, muitos dialéticos e filósofos apresentaram-se para desafiar os mestres cristãos. Um deles, ufano de sua eloquência, ridicularizava os bispos com sofismas intrincados. Então, um ancião simples, um dos confessores da fé que perdera os olhos na perseguição, levantou-se e disse: «Ouve, ó filósofo, em nome de Jesus Cristo! Há um só Deus, criador do céu e da terra, que fez todas as coisas pelo poder do Seu Verbo e as santificou pelo Seu Espírito Santo. Crês tu nisso?». O filósofo, traspassado pela força daquelas palavras simples, emudeceu e respondeu: «Creio!», convertendo-se à fé e exortando os demais a abandonarem as palavras vazias diante do poder de Deus."',
    importanciaHistorica:
      'O relato clássico sobre a antítese entre a erudição dialética vazia e o testemunho direto da fé confessada com martírio, ilustrando o clima carismático que cercou o concílio.'
  }
]