/* ─────────────────────────────────────────────────────────────
   DOSSIÊ DOCUMENTAL: 2E. DOSSIÊ ARIANO E EUSEBIANO PRIMITIVO
   Fontes críticas:
   - Hans-Georg Opitz, Urkunden zur Geschichte des Arianischen Streites (Urk. 1–34)
   - Atanásio de Alexandria, De synodis 15–19 / Orationes contra Arianos I.5–6
   - Epifânio de Salamina, Panarion 69
   - Teodoreto de Ciro, Historia Ecclesiastica I.5–6
   - Sócrates Escolástico, Historia Ecclesiastica I.14, I.26
   - Sozômeno, Historia Ecclesiastica II.16, II.27
   - Filostórgio, Historia Ecclesiastica (ed. Bidez/Winkelmann, Dok. 13)
───────────────────────────────────────────────────────────── */

export interface DocumentoAriano {
  id: string
  titulo: string
  numeroOpitz?: string
  autor: string
  destinatarios: string
  fonteAntiga: string
  termoChaveGrego?: string
  contextoHistorico: string
  textoIntegralOuTrecho: string
  notaCritica?: string
}

export const dossieArianoData: DocumentoAriano[] = [
  {
    id: 'ario-eusebio-nicomedia',
    titulo: 'Carta de Ário a Eusébio de Nicomédia',
    numeroOpitz: 'Urk. 1',
    autor: 'Ário (Presbítero de Alexandria)',
    destinatarios: 'Eusébio (Bispo de Nicomédia)',
    fonteAntiga: 'Teodoreto de Ciro, HE I.5; Epifânio de Salamina, Panarion 69.6',
    termoChaveGrego: 'συλλουκιανιστά (sylloukianista: meu caro colucianista)',
    contextoHistorico:
      'Escrita c. 318–320, logo após a condenação de Ário no sínodo local de Alexandria por Alexandre. Ário apela a Eusébio invocando a fraternidade da escola teológica de Luciano de Antioquia.',
    textoIntegralOuTrecho:
      '"Ao meu mui desejado senhor, homem de Deus, fiel e ortodoxo Eusébio, Ário, injustamente perseguido pelo bispo Alexandre por causa da verdade que tudo vence, saudações no Senhor!\n\nComo o meu pai Alexandre nos expulsa da cidade como homens ateus, porque não concordamos quando ele diz publicamente: \'Sempre Deus, sempre Filho; simultaneamente Pai, simultaneamente Filho; o Filho coexiste ingênito com Deus; ele é eternamente gerado; Deus não precede o Filho nem por um pensamento nem por um instante; sempre Deus, sempre Filho; o Filho deriva do próprio Deus\'.\n\nE porque Eusébio, teu irmão em Cesareia, Teódoto, Paulino, Atanásio, Gregório e Aécio, e todos os bispos do Oriente dizem que Deus subsiste sem início antes do Filho, eles foram anatemizados, exceto Filogônio, Helânico e Macário, homens heréticos e iletrados...\n\nNós, porém, o que dizemos e pensamos, e já ensinamos e ensinamos? Que o Filho não é ingênito, nem parte de um ingênito de modo algum, nem de qualquer matéria subjacente; mas que por vontade e conselho Ele subsistiu antes dos tempos e antes dos séculos, pleno Deus, Unigênito, imutável. E antes de ser gerado, ou criado, ou determinado, ou fundado, Ele não era. Pois Ele não era ingênito!\n\nSomos perseguidos porque dizemos: \'O Filho tem um início, mas Deus é sem início\'. Por isso somos perseguidos, e porque dizemos que Ele é do nada (ex ouk ontōn). E assim dizemos porque Ele não é parte de Deus nem de qualquer matéria subjacente. Por isso somos perseguidos; o resto tu sabes.\n\nLembra-te dos nossos sofrimentos, meu caro colucianista (sylloukianista), homem verdadeiramente chamado Eusébio [piedoso]!"'
  },
  {
    id: 'ario-alexandre-alexandria',
    titulo: 'Carta e Profissão de Fé de Ário a Alexandre de Alexandria',
    numeroOpitz: 'Urk. 6',
    autor: 'Ário e seus seguidores (Presbíteros e Diáconos exilados)',
    destinatarios: 'Alexandre (Bispo de Alexandria)',
    fonteAntiga: 'Atanásio de Alexandria, De synodis 16; Epifânio, Panarion 69.7; Hilário, De Trinitate IV.12',
    termoChaveGrego: 'ὁ μόνος ἀγέννητος (ho monos agennētos: o único ingênito)',
    contextoHistorico:
      'Escrita c. 320/321 a partir do exílio na Palestina/Nicomédia. É a declaração de fé teológica formal enviada ao seu próprio bispo para tentar provar que suas teses estavam de acordo com a tradição da Igreja.',
    textoIntegralOuTrecho:
      '"Ao nosso bem-aventurado bispo e patriarca Alexandre, os presbíteros e diáconos saúdam no Senhor.\n\nA nossa fé, recebida dos nossos antepassados e aprendida de ti também, bem-aventurado Papa, é esta: Reconhecemos um único Deus, único ingênito (monos agennētos), único eterno, único sem início, único verdadeiro, único imortal, único sábio, único bom, único soberano, único juiz de todos...\n\nEste Deus gerou o Filho Unigênito antes dos tempos eternos, por quem fez os séculos e o universo. Gerou-O não em aparência, mas em verdade; dando-Lhe subsistência por sua própria vontade, imutável e inalterável, criatura perfeita de Deus, mas não como uma das criaturas; produto perfeito, mas não como um dos produtos...\n\nSe o termo \'do Pai\' (ex autou) significa, como querem alguns, uma parte consubstancial de Deus (meros homoousion) ou uma emanação (probolē), então o Pai seria composto, divisível e mutável, o que é absurdo. O Filho tem início, mas Deus é absolutamente sem início."'
  },
  {
    id: 'ario-euzoio-constantino',
    titulo: 'Confissão de Fé de Ário e Euzoio apresentada a Constantino',
    numeroOpitz: 'Urk. 30',
    autor: 'Ário e Euzoio (Diácono)',
    destinatarios: 'Ao Imperador Constantino I',
    fonteAntiga: 'Sócrates Escolástico, HE I.26; Sozômeno, HE II.27',
    contextoHistorico:
      'Apresentada pessoalmente na corte imperial c. 327/328. Utiliza uma linguagem biblicista genérica, omitindo propositalmente o termo homoousios e os anátemas de Niceia para obter a restauração política.',
    textoIntegralOuTrecho:
      '"Ao nosso mui religioso e amante de Deus, Imperador Constantino, Ário e Euzoio.\n\nComo o teu piedoso comando, ó Imperador amado de Deus, nos ordenou a expor nossa fé por escrito, apresentamos nossa profissão de fé confessando diante de Deus que cremos assim:\n\nCremos em um só Deus, Pai Todo-Poderoso; e no Senhor Jesus Cristo, seu Filho, gerado d\'Ele antes de todos os séculos, Deus Logos, por quem todas as coisas foram feitas, tanto as do céu como as da terra; que desceu, se encarnou, sofreu, ressuscitou e ascendeu aos céus, e virá novamente para julgar os vivos e os mortos.\n\nE no Espírito Santo, na ressurreição da carne, na vida do século futuro e no reino dos céus, e em uma única Igreja Católica de Deus espalhada de ponta a ponta da terra.\n\nEsta fé recebemos dos santos evangelhos... Pedimos à tua Piedade que, sendo nós clérigos e mantendo a fé da Igreja e das Escrituras, nos reúnas à nossa mãe, a Igreja, removendo todas as questões e controvérsias inóspitas."'
  },
  {
    id: 'fragmentos-thalia',
    titulo: 'Os Fragmentos da Thalia (Thaleia) de Ário',
    autor: 'Ário de Alexandria',
    destinatarios: 'O povo cristão simples (poema/hino popular)',
    fonteAntiga: 'Atanásio de Alexandria, De synodis 15 e Orationes contra Arianos I.5–6',
    termoChaveGrego: 'Θάλεια (Thaleia: A Festiva/O Banquete Poético)',
    contextoHistorico:
      'Composta por volta de 318–320 em métrica poética popular (semelhante aos versos de Sotades) para ser cantada por marinheiros, viajantes e artesãos em Alexandria.',
    notaCritica:
      'NOTA HISTORIOGRÁFICA CRÍTICA: O texto completo da Thalia perdeu-se na fogueira imperial (Urk. 33). Os fragmentos preservados foram citados exclusivamente por seu mais feroz oponente, Atanásio de Alexandria. A historiografia moderna (Rowan Williams, R.P.C. Hanson) adverte que Atanásio compilou as frases mais extremadas e provocativas da Thalia para demonstrar a impiedade de Ário, podendo haver viés de seleção polêmica.',
    textoIntegralOuTrecho:
      '"O próprio Deus, portanto, de acordo com sua própria natureza, é inefável para todos.\nEle sozinho não tem igual, nem semelhante, nem de igual glória.\nChamamos-Lhe Ingênito por causa d\'Aquele que por natureza é genito.\nLouvamos-Lhe como Sem Início por causa d\'Aquele que tem um início.\nO Deus é assim Uno, e não havia nada antes d\'Ele.\n\nO Filho não é próprio nem próprio da essência do Pai (idos tēs ousias);\nPois Ele não é Deus verdadeiro, mas por participação na graça é chamado Deus.\nO Filho não conhece o Pai com precisão, nem o Logos pode ver o Pai perfeitamente.\nO Pai é invisível para o Filho, pois a substância do Pai é diferente da do Filho.\nO Pai é sábio, mas o Filho não é a Sabedoria própria do Pai, mas um fruto da vontade divina.\nHouve um tempo em que Deus estava só e o Logos não existia;\nDepois, pela vontade do Pai, o Filho foi criado do nada."'
  },
  {
    id: 'eusebio-nicomedia-paulino-tiro',
    titulo: 'Carta de Eusébio de Nicomédia a Paulino de Tiro',
    numeroOpitz: 'Urk. 8',
    autor: 'Eusébio (Bispo de Nicomédia)',
    destinatarios: 'Paulino (Bispo de Tiro na Fenícia)',
    fonteAntiga: 'Teodoreto de Ciro, Historia Ecclesiastica I.6',
    contextoHistorico:
      'Escrita c. 320/321. É a prova documental do apoio político e teológico que Eusébio de Nicomédia mobilizou na Síria e Palestina contra Alexandre de Alexandria.',
    textoIntegralOuTrecho:
      '"Nunca ouvimos falar de dois ingênitos, nem de um dividido em dois... mas sim de um único Ingênito e de outro verdadeiramente criado por Ele, mas não feito da sua substância (ouk ek tēs ousias autou), nem participando da natureza do Ingênito... Se o Filho fosse da substância do Pai, seria divisível e mutável, o que não podemos pensar de Deus."'
  },
  {
    id: 'asterio-sofista-syntagmation',
    titulo: 'Fragmentos do Syntagmation de Astério, o Sofista',
    autor: 'Astério da Capadócia (O Sofista)',
    destinatarios: 'Ao público eusebiano e aos bispos orientais',
    fonteAntiga: 'Atanásio, De synodis 18–19; Orationes contra Arianos I.30–34 e IV.1–4',
    contextoHistorico:
      'Escrito c. 320–325. Astério era um retor capadócio que apostatara sob a perseguição de Maximino Daia. Por ser um lapsus, não podia ser ordenado clérigo, tornando-se o teólogo leigo e "cérebro intelectual" do arianismo inicial.',
    textoIntegralOuTrecho:
      '"O Pai é único e ingênito; o Filho é o primeiro dos seres criados pela vontade do Pai... Há duas sabedorias: a Sabedoria própria e inerente de Deus Pai, e o Filho, que é chamado Sabedoria apenas como um reflexo criado por essa Sabedoria divina primordial. O Filho é a imagem da vontade do Pai, não da sua essência (eikōn tēs boulēs, ouk tēs ousias)."'
  },
  {
    id: 'eusebio-nicomedia-ario-fragmento',
    titulo: 'Carta de Eusébio de Nicomédia a Ário',
    numeroOpitz: 'Urk. 2',
    autor: 'Eusébio (Bispo de Nicomédia)',
    destinatarios: 'Ário (Presbítero de Alexandria)',
    fonteAntiga: 'Atanásio de Alexandria, De synodis 17',
    termoChaveGrego: 'τὸ γενόμενον οὐκ ἦν (to genomenon ouk ēn)',
    contextoHistorico:
      'Escrita c. 318–320, no limiar da controvérsia. Eusébio de Nicomédia manifesta seu acordo teológico preliminar com Ário sobre a geração pré-temporal e a distinção das substâncias.',
    notaCritica: 'Mostra a articulação intelectual precoce dos colucianistas para fundamentar filosoficamente a criabilidade do Filho.',
    textoIntegralOuTrecho:
      '"Dado que o que é feito não existia antes de ser trazido à existência, aquilo que veio a ser tem, logicamente, um início de sua própria subsistência. O Filho, sendo gerado pela livre deliberação do Pai, não partilha do atributo da ingenerabilidade, o qual pertence exclusivamente à Causa Primeira."'
  },
  {
    id: 'eusebio-cesareia-eufracao',
    titulo: 'Carta de Eusébio de Cesareia a Eufração de Balaneia',
    numeroOpitz: 'Urk. 3',
    autor: 'Eusébio (Bispo de Cesareia da Palestina)',
    destinatarios: 'Eufração (Bispo de Balaneia na Síria)',
    fonteAntiga: 'Atanásio de Alexandria, De synodis 17; Atos do Concílio de Niceia II (Mansi XIII, 316–317)',
    termoChaveGrego: 'ὁ μὲν ἀληθινὸς Θεός (ho men alēthinos Theos)',
    contextoHistorico:
      'Escrita c. 320–322. Eusébio de Cesareia expõe a sua teologia de matriz origenista de gradação hipostática, recorrendo a Jo 14,28 e Jo 17,3 para assegurar que apenas o Pai é o Deus Supremo e Absoluto.',
    notaCritica: 'Documento-chave que expõe o subordinacionismo acadêmico que dominava a Palestina às vésperas do Concílio.',
    textoIntegralOuTrecho:
      '"O Filho mesmo nos ensina que o Pai é maior do que Ele e que o Pai é o único Deus verdadeiro. Pois aquele que é imagem da Divindade não pode ser idêntico ao Arquétipo original; o Filho é, na verdade, Deus, mas como um reflexo de glória, e não o Deus supremo em Si mesmo (ho alēthinos Theos), que não possui fonte alguma acima de Si."'
  },
  {
    id: 'eusebio-cesareia-alexandre-mediacao',
    titulo: 'Carta de Eusébio de Cesareia a Alexandre de Alexandria',
    numeroOpitz: 'Urk. 7',
    autor: 'Eusébio (Bispo de Cesareia da Palestina)',
    destinatarios: 'Alexandre (Patriarca de Alexandria)',
    fonteAntiga: 'Atanásio de Alexandria, De synodis 17',
    contextoHistorico:
      'Escrita c. 321–322. Eusébio assume um papel mediador e escreve ao patriarca de Alexandria, argumentando que a condenação contra Ário repousava sobre distorções retóricas.',
    notaCritica: 'Demonstra a tentativa da facção moderada em desarmar o radicalismo da acusação alexandrina.',
    textoIntegralOuTrecho:
      '"Tu acusas os partidários de Ário de sustentarem que o Filho foi criado do nada como uma das criaturas ordinárias. Todavia, os seus escritos afirmam explicitamente que o Filho foi gerado antes de todos os tempos e séculos, possuindo uma eminência indizível, de modo que sua gênese em nada se assemelha às coisas que por meio d\'Ele foram criadas no mundo."'
  },
  {
    id: 'paulino-tiro-fragmento-subordinacionista',
    titulo: 'Carta de Paulino de Tiro sobre a Criação do Filho',
    numeroOpitz: 'Urk. 9',
    autor: 'Paulino (Bispo de Tiro)',
    destinatarios: 'Eusébio de Nicomédia / Alexandre de Alexandria',
    fonteAntiga: 'Teodoreto de Ciro, Historia Ecclesiastica I.6',
    contextoHistorico:
      'Escrita c. 321. Paulino subscreve as teses subordinacionistas de forma direta, enfatizando a geração como ato voluntário de produção.',
    textoIntegralOuTrecho:
      '"O Filho é uma realidade gerada e construída pelo arbítrio do Pai. Ele não compartilha da essência incausada do Genitor, sendo trazido à existência por um desígnio soberano antes dos séculos, existindo como obra perfeita que aprouve ao Altíssimo realizar."'
  },
  {
    id: 'atanasio-anazarbo-comparacao-ovelhas',
    titulo: 'Carta de Atanásio de Anazarbo sobre a Criabilidade do Filho',
    numeroOpitz: 'Urk. 11',
    autor: 'Atanásio (Bispo de Anazarbo na Cilícia)',
    destinatarios: 'Alexandre de Alexandria',
    fonteAntiga: 'Atanásio de Alexandria, De synodis 17',
    termoChaveGrego: 'μίαν τῶν ἑκατὸν προβάτων (mian tōn hekaton probatōn)',
    contextoHistorico:
      'Escrita c. 321–323. Atanásio de Anazarbo emprega metáforas cruas para justificar que o Filho é uma criatura trazida do nada à existência pela soberana vontade de Deus.',
    notaCritica: 'Metáfora célebre onde o Filho de Deus é comparado a uma simples ovelha do rebanho criado.',
    textoIntegralOuTrecho:
      '"Por que vos escandalizais ao ouvir que o Filho foi trazido à existência a partir do nada? Não é Ele, por definição, uma criatura? Se as Escrituras nos dizem que tudo provém de Deus, o Filho está contido nesse todo, tal como uma das cem ovelhas perdidas do rebanho de Israel ou qualquer outro ente gerado sob a potência soberana do Pai."'
  },
  {
    id: 'cartas-jorge-mediacao-ex-ouk-onton',
    titulo: 'Cartas de Jorge de Alexandria aos Arianos e a Alexandre',
    numeroOpitz: 'Urk. 12 e Urk. 13',
    autor: 'Jorge (Presbítero de Alexandria, depois Bispo de Laodiceia)',
    destinatarios: 'Alexandre de Alexandria / Facção de Ário',
    fonteAntiga: 'Atanásio de Alexandria, De synodis 17',
    contextoHistorico:
      'Escritas c. 322–324. Jorge tenta conciliar as fórmulas "do nada" (ex ouk ontōn) e "do Pai", mostrando que ambas remetem a Deus como causa suprema.',
    textoIntegralOuTrecho:
      '"Não há motivo para cindir a Igreja por causa da fórmula \'do nada\'. Pois dizeis que o Filho vem \'do Pai\', o que significa que Ele tem a sua origem exclusiva em Deus, o qual, por Sua vez, é o Criador que traz à luz tudo o que não existia. Assim, as duas expressões convergem quando purificadas de disputas mundanas."'
  },
  {
    id: 'teognis-niceia-fragmentos',
    titulo: 'Fragmentos Teológicos de Teógnis de Niceia',
    numeroOpitz: 'Dokument 13',
    autor: 'Teógnis (Bispo de Niceia)',
    destinatarios: 'Comunidade local e oponentes teológicos',
    fonteAntiga: 'Filostórgio, Historia Ecclesiastica II.1–3',
    contextoHistorico:
      'Documento de c. 325. Teógnis contestou o termo homoousios por considerá-lo de tendência sabeliana e materialista.',
    textoIntegralOuTrecho:
      '"Se confessarmos que o Filho provém da própria ousia do Pai de forma intrínseca ou material, estaremos violando a indivisibilidade da natureza divina. A geração do Filho é uma emanação voluntária (boulēsis) da mente paterna, que O estabeleceu como hipóstase autônoma para ser o artífice da criação mundial."'
  },
  {
    id: 'retratacao-eusebio-nicomedia-teognis',
    titulo: 'Libelo de Retratação e Petição de Reintegração de Eusébio e Teógnis',
    numeroOpitz: 'Urk. 31',
    autor: 'Eusébio de Nicomédia e Teógnis de Niceia',
    destinatarios: 'Aos bispos do sínodo eclesiástico',
    fonteAntiga: 'Sócrates Escolástico, HE I.14; Sozômeno, HE II.16',
    contextoHistorico:
      'Escrita c. 327–328. Eusébio e Teógnis solicitam a restauração de suas Sés após o retorno de Ário à graça imperial.',
    notaCritica: 'O documento formal que viabilizou a virada política eusebiana no Oriente pós-Niceia.',
    textoIntegralOuTrecho:
      '"Tendo subscrito às decisões de vossa Paternidade em Niceia por amor à concórdia, sofremos o banimento injustamente devido à perseguição de nossos inimigos. Sendo agora informado que o próprio Ário, autor primeiro desta disputa, foi perdoado e reconciliado pelo piíssimo Imperador, clamamos que nos concedais a mesma clemência, devolvendo-nos às nossas Sés episcopais."'
  }
]