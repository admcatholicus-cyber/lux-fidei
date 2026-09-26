// ============================================
// CONCÍLIO DE ÉFESO (431 d.C.)
// Antecedentes Históricos (381–431)
// ============================================

export const resumoAntecedentes =
  'Os cinquenta anos que separam o Concílio de Constantinopla (381) do Concílio de Éfeso (431) foram um período de aparente paz dogmática, mas de intensa fermentação teológica nos bastidores. A grande controvérsia trinitária (arianismo) havia sido resolvida, mas a cristologia — a questão de como as naturezas divina e humana coexistem em Cristo — ainda não havia sido definida com precisão dogmática. Duas grandes escolas teológicas, a de Alexandria e a de Antioquia, desenvolveram linguagens e ênfases cristológicas radicalmente diferentes, que coexistiram em tensão crescente até que a nomeação de Nestório ao patriarcado de Constantinopla (428) transformou uma disputa acadêmica em uma crise eclesial de proporções continentais.'

interface Evento {
  ano: string
  titulo: string
  descricao: string
  importancia: string
  fontes: string[]
}

interface Periodo {
  periodo: string
  titulo: string
  descricaoGeral: string
  eventos: Evento[]
}

export const antecedentes: Periodo[] = [
  // =============================================
  // PERÍODO 1: 381–412
  // =============================================
  {
    periodo: '381–412',
    titulo: 'A Consolidação Pós-Niceia e a Formação das Duas Escolas',
    descricaoGeral:
      'Após a vitória da ortodoxia trinitária em Constantinopla (381), a Igreja entrou em uma era de relativa estabilidade doutrinária no campo trinitário. No entanto, nos centros intelectuais de Alexandria e Antioquia, duas tradições cristológicas distintas se consolidaram, cada uma com sua própria hermenêutica bíblica, vocabulário teológico e ênfase soteriológica. Estas duas escolas, que inicialmente coexistiram como complementares, gradualmente se tornaram rivais.',
    eventos: [
      {
        ano: '381',
        titulo: 'Concílio de Constantinopla I e a Pacificação Trinitária',
        descricao:
          'O II Concílio Ecumênico definiu a divindade do Espírito Santo e completou o Credo Niceno-Constantinopolitano. As heresias trinitárias (arianismo, macedonianismo, apolinarismo) foram formalmente condenadas. A paz dogmática sobre a Trindade abriu espaço para que a atenção teológica se voltasse gradualmente para a cristologia.',
        importancia:
          'Com a Trindade definida, a próxima grande questão inevitável seria: como o Filho, que é verdadeiro Deus, se relaciona com a humanidade que assumiu? A cristologia tornou-se o novo campo de batalha.',
        fontes: [
          'Sócrates, HE V.8',
          'Sozômeno, HE VII.7–9',
          'Atos de Constantinopla I',
        ],
      },
      {
        ano: '~385–394',
        titulo: 'Diodoro de Tarso e a Fundação da Escola de Antioquia',
        descricao:
          'Diodoro de Tarso († ~394), mestre de Teodoro de Mopsuéstia e de João Crisóstomo, consolidou a tradição cristológica antioquena: ênfase na distinção das duas naturezas de Cristo, interpretação literal-histórica das Escrituras, e resistência a qualquer linguagem que sugerisse "mistura" (krasis) do divino com o humano. Para Diodoro, o Verbo habitou no homem Jesus como num "templo" (skene), mantendo a integridade de cada natureza.',
        importancia:
          'Diodoro plantou as sementes da cristologia que Nestório herdaria 40 anos depois. Sua distinção radical entre o "Filho de Deus" (o Verbo) e o "filho de Davi" (o homem Jesus) seria a raiz do que os alexandrinos chamariam de "dois filhos".',
        fontes: [
          'Teodoreto, HE V.39',
          'Frag. de Diodoro (in ACO)',
          'Grillmeier, Christ in Christian Tradition I, pp. 356–366',
        ],
      },
      {
        ano: '~390–428',
        titulo: 'Teodoro de Mopsuéstia: O "Mestre" da Cristologia Antioquena',
        descricao:
          'Teodoro de Mopsuéstia (~350–428), o mais brilhante discípulo de Diodoro, desenvolveu a cristologia antioquena em sua forma mais sofisticada. Ensinava que em Cristo há duas naturezas completas (divina e humana) unidas por uma "conjunção" (synapheia) de boa vontade, não por uma união ontológica (henosis). O Verbo "habitou" no homem Jesus como num templo, e a união é de "boa vontade" (eudokia), não de "natureza" (physis). Teodoro rejeitava o título Theotokos e preferia Christotokos.',
        importancia:
          'Teodoro é o verdadeiro pai teológico do nestorianismo, embora ele mesmo nunca tenha sido condenado em vida. Seus escritos seriam o alvo oculto do Cânon 7 de Éfeso (431) e seriam formalmente condenados no II Concílio de Constantinopla (553) na controvérsia dos Três Capítulos.',
        fontes: [
          'Teodoro, De Incarnatione (frag.)',
          'Teodoro, Commentarius in Johannem',
          'Grillmeier, op. cit., pp. 366–381',
        ],
      },
      {
        ano: '395',
        titulo: 'Morte de Teodósio I e Divisão Definitiva do Império',
        descricao:
          'Com a morte de Teodósio I, o Império Romano foi dividido definitivamente entre seus dois filhos: Arcádio (Oriente, capital Constantinopla) e Honório (Ocidente, capital Ravena). A partir de então, as duas metades do Império seguiriam trajetórias políticas e eclesiásticas cada vez mais independentes.',
        importancia:
          'A divisão política aprofundou a distância entre Roma e Constantinopla, e entre as tradições teológicas latina e grega. Os imperadores orientais passariam a convocar concílios sem a participação direta do Ocidente, como seria o caso de Éfeso.',
        fontes: ['Sócrates, HE VI.1', 'Zósimo, Historia Nova IV.59'],
      },
      {
        ano: '397–407',
        titulo: 'João Crisóstomo: Patriarca de Constantinopla e o Precedente de Deposição',
        descricao:
          'João Crisóstomo, também formado na Escola de Antioquia, foi Patriarca de Constantinopla (397–404). Sua pregação moralista e suas reformas do clero o tornaram inimigo da imperatriz Eudóxia e do patriarca Teófilo de Alexandria (tio de Cirilo). No Sínodo do Carvalho (403), Crisóstomo foi deposto por uma coalizão de bispos alexandrinos e da corte. Morreu no exílio em 407.',
        importancia:
          'A queda de Crisóstomo estabeleceu um precedente perigoso: um patriarca de Constantinopla podia ser derrubado por uma aliança entre Alexandria e a corte imperial. Cirilo, sobrinho de Teófilo, aprendeu esta lição e a aplicaria contra Nestório 25 anos depois.',
        fontes: [
          'Palladius, Dialogus de Vita Chrysostomi',
          'Sócrates, HE VI.2–16',
          'Sozômeno, HE VIII.2–23',
        ],
      },
      {
        ano: '~400–412',
        titulo: 'A Tradição Alexandrina: De Atanásio a Teófilo',
        descricao:
          'Enquanto Antioquia desenvolvia sua cristologia das "duas naturezas", Alexandria mantinha a tradição de Atanásio († 373): ênfase na unidade do sujeito em Cristo, na realidade da Encarnação ("o Verbo se fez carne", Jo 1,14), e no uso do título Theotokos, já atestado em Alexandria desde o século III (Orígenes, Alexandre de Alexandria). Para os alexandrinos, falar de "duas naturezas" separadas era recair no arianismo ou no adocionismo.',
        importancia:
          'A tradição alexandrina seria a base teológica de Cirilo e a arma com que ele atacaria Nestório. O título Theotokos, que para Nestório era uma inovação piedosa mas imprecisa, para Alexandria era uma confissão de fé irrenunciável desde Atanásio.',
        fontes: [
          'Atanásio, Contra Arianos III.29–33',
          'Atanásio, Ep. ad Epictetum',
          'Cirilo, De Recta Fide',
        ],
      },
    ],
  },

  // =============================================
  // PERÍODO 2: 412–428
  // =============================================
  {
    periodo: '412–428',
    titulo: 'Cirilo Ascende ao Poder e Nestório Chega a Constantinopla',
    descricaoGeral:
      'Este período viu a ascensão de duas figuras que colidiriam frontalmente em 431. Cirilo tornou-se Patriarca de Alexandria em 412, herdando o poder imenso de seu tio Teófilo e a tradição teológica de Atanásio. Do outro lado, Nestório, um monge antioqueno de pregação eloquente, foi surpreendentemente nomeado Patriarca de Constantinopla em 428 por Teodósio II. Os dois representavam não apenas tradições teológicas opostas, mas também ambições eclesiásticas rivais: Alexandria buscava manter sua hegemonia no Oriente, enquanto Constantinopla (a "Nova Roma") crescia em poder e prestígio.',
    eventos: [
      {
        ano: '412',
        titulo: 'Cirilo torna-se Patriarca de Alexandria',
        descricao:
          'Após a morte de seu tio Teófilo (outubro de 412), Cirilo foi eleito Patriarca de Alexandria em circunstâncias controversas. A eleição foi disputada: o partido do arcediago Timóteo preferia um candidato mais moderado, mas Cirilo, com o apoio dos parabolanos (uma milícia clerical de enfermeiros que funcionava como força de choque), impôs sua candidatura. Tinha cerca de 36 anos.',
        importancia:
          'Cirilo herdou a sé mais rica e poderosa do Oriente, com uma tradição teológica ininterrupta desde Marcos Evangelista. Seu caráter combativo, sua inteligência teológica excepcional e seu controle sobre os recursos do Egito fariam dele o adversário mais formidável que Nestório poderia enfrentar.',
        fontes: [
          'Sócrates, HE VII.7',
          'João de Nikiu, Crônica LXXXIV',
          'McGuckin, St. Cyril of Alexandria, pp. 1–15',
        ],
      },
      {
        ano: '415',
        titulo: 'O Assassinato de Hipátia e a Reputação de Cirilo',
        descricao:
          'Em março de 415, a filósofa neoplatônica Hipátia foi brutalmente assassinada por uma turba de cristãos em Alexandria. Embora a responsabilidade direta de Cirilo seja debatida (as fontes são ambíguas), o episódio manchou sua reputação e foi usado por seus adversários para pintá-lo como um líder violento e intolerante.',
        importancia:
          'O episódio de Hipátia, embora não diretamente relacionado à controvérsia nestoriana, é frequentemente citado para contextualizar o caráter de Cirilo: um homem de fé inabalável, mas disposto a usar todos os meios — incluindo a coerção — para defender o que considerava a verdade.',
        fontes: [
          'Sócrates, HE VII.15',
          'Damasco, Vida de Isidoro (frag.)',
          'Russell, Cyril of Alexandria, pp. 5–8',
        ],
      },
      {
        ano: '418–428',
        titulo: 'A Consolidação do Poder de Cirilo no Oriente',
        descricao:
          'Durante a década de 420, Cirilo consolidou sua posição como o teólogo mais influente do Oriente. Escreveu extensivamente contra os arianos e os apolinaristas, desenvolveu sua cristologia da "união hipostática" e estabeleceu uma rede de alianças com bispos da Palestina, da Ásia Menor e de Roma. Sua correspondência com o Papa Celestino I já havia começado antes da crise nestoriana.',
        importancia:
          'Quando a crise estourou em 428, Cirilo não era um novato: era o patriarca mais experiente, mais bem conectado e mais teologicamente preparado do Oriente. Sua rede de alianças seria decisiva em Éfeso.',
        fontes: [
          'Cirilo, Thesaurus de Trinitate',
          'Cirilo, De Adoratione in Spiritu et Veritate',
          'Wessel, Cyril of Alexandria and the Nestorian Controversy, pp. 30–55',
        ],
      },
      {
        ano: '421',
        titulo: 'Casamento de Teodósio II com Eudócia (Atenais)',
        descricao:
          'Teodósio II casou-se com Atenais, uma jovem pagã de Atenas convertida ao cristianismo e rebatizada como Eudócia. Inteligente e culta, Eudócia tornou-se uma influência significativa na corte, rivalizando com Pulquéria (irmã do imperador) pelo controle da política religiosa.',
        importancia:
          'A rivalidade entre Pulquéria (pró-Theotokos, pró-Cirilo) e Eudócia (inicialmente mais simpática a Nestório) seria um fator político crucial durante o concílio. Teodósio II, dividido entre as duas mulheres mais poderosas de sua vida, oscilou entre os partidos.',
        fontes: [
          'Malalas, Chronographia XIV',
          'Teofanes, Chronographia AM 5913',
          'Holum, Theodosian Empresses, pp. 116–130',
        ],
      },
      {
        ano: '428',
        titulo: 'Nestório é Nomeado Patriarca de Constantinopla',
        descricao:
          'Em abril de 428, Teodósio II nomeou Nestório, um monge de Antioquia conhecido por sua pregação eloquente e seu zelo reformador, como novo Patriarca de Constantinopla. A escolha surpreendeu muitos: Nestório era um outsider, sem conexões com a corte e sem experiência administrativa. Teodósio esperava que um homem "neutro" (nem alexandrino, nem constantinopolitano) pudesse unificar as facções da capital.',
        importancia:
          'A nomeação de Nestório foi o gatilho da crise. Sua formação antioquena, sua retórica inflamada e sua inabilidade política transformaram uma questão teológica acadêmica em um confronto aberto com Alexandria, Roma e a própria corte imperial.',
        fontes: [
          'Sócrates, HE VII.29',
          'Evágrio, HE I.2',
          'Nestório, Bazaar de Heracleides II.1',
        ],
      },
      {
        ano: '428',
        titulo: 'As Primeiras Medidas de Nestório: Reforma e Conflito',
        descricao:
          'Imediatamente após sua posse, Nestório iniciou uma campanha agressiva contra as heresias na capital: perseguiu os arianos, os macedonianos, os apolinaristas e os quartodecimanos. Confiscou capelas heréticas e as entregou aos ortodoxos. Porém, seu zelo excessivo alienou rapidamente o clero local, os monges e o povo de Constantinopla, que o viam como um fanático estrangeiro.',
        importancia:
          'Nestório chegou ao poder com a intenção de ser um reformador, mas sua falta de tato político criou uma base de oposição interna que Cirilo exploraria magistralmente. Quando a controvérsia Theotokos estourou, Nestório já estava isolado em sua própria cidade.',
        fontes: [
          'Sócrates, HE VII.29–31',
          'Sozômeno, HE (frag.)',
          'McGuckin, op. cit., pp. 30–45',
        ],
      },
    ],
  },

  // =============================================
  // PERÍODO 3: 428–429
  // =============================================
  {
    periodo: '428–429',
    titulo: 'A Explosão da Controvérsia Theotokos',
    descricaoGeral:
      'No outono de 428, Nestório cometeu o erro que definiria sua carreira e a história da cristologia: em uma série de sermões na catedral de Constantinopla, atacou publicamente o título Theotokos (Mãe de Deus) atribuído à Virgem Maria, propondo em seu lugar Christotokos (Mãe de Cristo). A reação foi imediata, furiosa e irreversível. Em poucos meses, a controvérsia saiu de Constantinopla, atingiu Alexandria, Roma, os mosteiros do Egito e da Palestina, e tornou-se a maior crise eclesial desde o arianismo.',
    eventos: [
      {
        ano: 'Outono 428',
        titulo: 'Os Sermões de Nestório contra Theotokos',
        descricao:
          'Nestório, em sermões públicos na Hagia Sophia, declarou que Maria não deveria ser chamada Theotokos, pois "Deus não pode nascer de uma mulher" e "aquilo que é nascido da carne é carne" (Jo 3,6). Propôs Christotokos (Mãe de Cristo) como termo mais preciso, ou Theodochos (Receptora de Deus). Seu capelão Anastásio foi ainda mais radical, pregando: "Que ninguém chame Maria Theotokos; Maria era humana, e é impossível que Deus nasça de um ser humano."',
        importancia:
          'Estes sermões foram o estopim da crise. Para a piedade popular do Oriente, Theotokos não era um termo teológico abstrato, mas uma confissão de fé vivida há séculos. Atacar Theotokos era atacar a própria Encarnação e a devoção mariana de milhões de fiéis.',
        fontes: [
          'Nestório, Sermões (frag. in ACO I.1.2)',
          'Sócrates, HE VII.32',
          'Cirilo, Ep. ad Monachos Aegypti',
        ],
      },
      {
        ano: 'Fim de 428',
        titulo: 'A Reação do Clero e dos Monges de Constantinopla',
        descricao:
          'O clero de Constantinopla, liderado pelo arcediago Proclo (futuro patriarca), recusou-se a seguir a pregação de Nestório. Os monges da capital, devotos fervorosos da Theotokos, protestaram publicamente. Proclo pregou um famoso sermão mariano na presença de Nestório, exaltando a Theotokos em linguagem que era uma refutação direta do patriarca. Nestório, furioso, tentou silenciar Proclo, mas a oposição só cresceu.',
        importancia:
          'A resistência interna em Constantinopla demonstrou que Nestório estava isolado em sua própria sé. Sem o apoio do clero local, dos monges e do povo, sua posição era insustentável a longo prazo.',
        fontes: [
          'Proclo, Homilia I in Laudem S. Mariae',
          'Sócrates, HE VII.32',
          'McGuckin, op. cit., pp. 50–65',
        ],
      },
      {
        ano: 'Início de 429',
        titulo: 'Cirilo é Informado e Reage',
        descricao:
          'As notícias dos sermões de Nestório chegaram a Alexandria no início de 429, provavelmente através de monges e mercadores. Cirilo reagiu imediatamente: escreveu uma Carta Encíclica aos monges do Egito (Ep. ad Monachos Aegypti), alertando-os contra a "nova heresia" de Nestório e defendendo o título Theotokos com argumentos bíblicos e patrísticos. Esta carta circulou amplamente e mobilizou o monaquismo egípcio contra Nestório.',
        importancia:
          'A carta aos monges foi o primeiro ato público de Cirilo na controvérsia e demonstrou sua estratégia: mobilizar a base popular (monges e fiéis) antes mesmo de enfrentar Nestório no plano teológico formal. Os monges egípcios, milhares de homens organizados e fervorosos, seriam uma força política decisiva em Éfeso.',
        fontes: [
          'Cirilo, Ep. ad Monachos Aegypti (PG 77, 13–39)',
          'Wessel, op. cit., pp. 60–80',
        ],
      },
      {
        ano: 'Primavera 429',
        titulo: 'A Correspondência Cirilo ↔ Nestório (2ª Carta)',
        descricao:
          'Cirilo escreveu diretamente a Nestório (a chamada "2ª Carta" ou "Carta Dogmática"), expondo a cristologia alexandrina e exigindo que Nestório confessasse Theotokos. A carta é um documento teológico de altíssimo nível: Cirilo argumenta que, se o Verbo se uniu hipostaticamente à carne, então a pessoa que nasceu de Maria é o próprio Verbo, e portanto Maria é Theotokos. Negar Theotokos é negar a Encarnação.',
        importancia:
          'A 2ª Carta de Cirilo seria lida e aprovada na Sessão I de Éfeso como norma de ortodoxia cristológica. É um dos documentos mais importantes da história da doutrina.',
        fontes: [
          'Cirilo, Ep. II ad Nestorium (PG 77, 44–50; ACO I.1.1)',
          'Grillmeier, op. cit., pp. 473–483',
        ],
      },
      {
        ano: 'Verão 429',
        titulo: 'A Resposta de Nestório e a Escalada',
        descricao:
          'Nestório respondeu a Cirilo com uma carta em que reafirmava sua posição: Theotokos é um termo ambíguo que pode levar ao apolinarismo (confusão das naturezas). Insistiu em Christotokos como termo mais seguro e acusou Cirilo de não compreender a distinção entre as duas naturezas. O tom da carta era condescendente e irritou profundamente Cirilo.',
        importancia:
          'A troca de cartas tornou a disputa pública e irreversível. A partir deste momento, não havia mais espaço para compromisso privado: os dois patriarcas haviam declarado suas posições diante de toda a cristandade.',
        fontes: [
          'Nestório, Ep. II ad Cyrillum (ACO I.1.1)',
          'Sócrates, HE VII.32',
        ],
      },
      {
        ano: 'Outono 429',
        titulo: 'Nestório Escreve ao Papa Celestino I',
        descricao:
          'Buscando apoio no Ocidente, Nestório escreveu ao Papa Celestino I, apresentando sua posição como ortodoxa e acusando os "apolinaristas" (referindo-se a Cirilo) de perturbarem a paz da Igreja. Porém, Nestório cometeu um erro estratégico: incluiu em sua carta uma tradução latina defeituosa de seus sermões, que o fazia parecer mais herético do que realmente era.',
        importancia:
          'A carta de Nestório a Roma foi um tiro no pé. Celestino I, já informado por Cirilo (que havia enviado uma tradução mais favorável a si mesmo), leu os documentos de Nestório e concluiu que ele era de fato um herege. A tentativa de Nestório de buscar apoio em Roma acabou selando sua condenação.',
        fontes: [
          'Nestório, Ep. ad Caelestinum (ACO I.2)',
          'Celestino I, Ep. ad Nestorium (ACO I.2)',
          'Wessel, op. cit., pp. 90–105',
        ],
      },
    ],
  },

  // =============================================
  // PERÍODO 4: 429–430
  // =============================================
  {
    periodo: '429–430',
    titulo: 'A Escalada Final e a Condenação Romana',
    descricaoGeral:
      'O ano de 430 foi o ano da ruptura definitiva. Cirilo intensificou sua ofensiva teológica e diplomática, escrevendo a 3ª Carta a Nestório (com os 12 Anátemas), mobilizando a corte imperial e buscando a aliança formal de Roma. O Papa Celestino I, em sínodo romano, condenou Nestório e deu-lhe um ultimato de 10 dias. Nestório recusou-se a ceder. Teodósio II, pressionado por todos os lados, convocou o concílio ecumênico para o Pentecostes de 431.',
    eventos: [
      {
        ano: 'Início de 430',
        titulo: 'A 3ª Carta de Cirilo e os 12 Anátemas',
        descricao:
          'Cirilo escreveu sua 3ª Carta a Nestório, a mais agressiva e teologicamente densa. Anexou a ela 12 Anátemas (condenações formais) que resumiam a cristologia alexandrina em fórmulas cortantes: "Se alguém não confessa que o Emanuel é verdadeiramente Deus e que a Santa Virgem é Theotokos... seja anátema." Os Anátemas eram deliberadamente provocativos: usavam a linguagem da "união física" (henosis physike) e da "única natureza encarnada" (mia physis sesarkomene), que os antioquenos interpretavam como apolinarismo.',
        importancia:
          'Os 12 Anátemas seriam o documento mais controverso de toda a controvérsia. Aprovados em Éfeso, eles seriam depois a principal pedra de tropeço na reconciliação com João de Antioquia. A Fórmula de União de 433 seria, em grande parte, uma "leitura moderada" dos Anátemas.',
        fontes: [
          'Cirilo, Ep. III ad Nestorium cum XII Anathematismis (PG 77, 105–122; ACO I.1.1)',
          'Grillmeier, op. cit., pp. 483–495',
        ],
      },
      {
        ano: 'Primavera 430',
        titulo: 'A Reação Furiosa de Antioquia aos 12 Anátemas',
        descricao:
          'Quando os 12 Anátemas chegaram a Antioquia, a reação foi explosiva. Teodoreto de Ciro e André de Samósata escreveram refutações detalhadas, acusando Cirilo de apolinarismo e de "misturar" as naturezas de Cristo. João de Antioquia, embora amigo pessoal de Nestório, tentou mediar, mas a linguagem dos Anátemas era inaceitável para a tradição antioquena.',
        importancia:
          'A reação de Antioquia aos Anátemas é a chave para entender o contra-concílio de João em Éfeso. Para os antioquenos, Cirilo era tão perigoso quanto Nestório: um era nestoriano, o outro apolinarista. O concílio de 431 seria, em grande parte, um julgamento sobre os Anátemas tanto quanto sobre Nestório.',
        fontes: [
          'Teodoreto, Refutatio XII Anathematismorum (PG 76, 393–452)',
          'André de Samósata, Refutatio (frag. in ACO)',
          'McGuckin, op. cit., pp. 80–100',
        ],
      },
      {
        ano: 'Agosto 430',
        titulo: 'O Sínodo Romano Condena Nestório',
        descricao:
          'O Papa Celestino I reuniu um sínodo em Roma (agosto de 430) para julgar a causa de Nestório. Com base nos documentos recebidos de Cirilo (e na tradução defeituosa dos sermões de Nestório), o sínodo condenou unanimemente a doutrina de Nestório e deu-lhe um ultimato de 10 dias a partir da notificação para se retratar publicamente. Caso contrário, seria deposto e excomungado. Celestino encarregou Cirilo de executar a sentença em seu nome.',
        importancia:
          'A condenação romana foi um golpe devastador para Nestório. Pela primeira vez, Roma e Alexandria estavam alinhadas contra Constantinopla. A autoridade do Papa, somada ao poder de Cirilo, tornava a posição de Nestório quase insustentável — a menos que ele conseguisse o apoio do imperador.',
        fontes: [
          'Celestino I, Ep. ad Cyrillum (ACO I.2)',
          'Celestino I, Ep. ad Nestorium (ACO I.2)',
          'Celestino I, Ep. ad Theodosium (ACO I.2)',
        ],
      },
      {
        ano: 'Outono 430',
        titulo: 'Cirilo como Executor da Sentença Romana',
        descricao:
          'Celestino I delegou a Cirilo a execução da sentença contra Nestório, conferindo-lhe autoridade apostólica para depor o patriarca de Constantinopla caso este não se retratasse em 10 dias. Cirilo enviou a notificação a Nestório através de quatro bispos egípcios. Nestório recusou-se a receber a notificação e declarou que não aceitaria ser julgado por Cirilo, a quem considerava seu acusador, não seu juiz.',
        importancia:
          'A recusa de Nestório em se retratar tornou o concílio inevitável. Teodósio II, que até então havia protegido Nestório, percebeu que a crise não poderia ser resolvida sem uma assembleia ecumênica.',
        fontes: [
          'Cirilo, Ep. ad Nestorium (notificação, ACO I.1.1)',
          'Sócrates, HE VII.33',
        ],
      },
      {
        ano: '19 de novembro de 430',
        titulo: 'Teodósio II Convoca o Concílio de Éfeso',
        descricao:
          'Teodósio II emitiu a sacra (carta imperial) de convocação do concílio, ordenando que todos os metropolitas do Império se reunissem em Éfeso no dia de Pentecostes (22 de junho) de 431. A escolha de Éfeso foi estratégica: cidade mariana por excelência (tradição de que a Virgem Maria viveu ali seus últimos anos), acessível por mar, e distante o suficiente de Constantinopla para neutralizar a influência local de Nestório.',
        importancia:
          'A convocação imperial transformou a disputa bilateral (Cirilo vs Nestório) em um julgamento ecumênico. Teodósio esperava que o concílio resolvesse a questão de forma pacífica e definitiva. Ele estava muito enganado.',
        fontes: [
          'Sacra Theodosii (ACO I.1.1)',
          'Sócrates, HE VII.34',
          'Evágrio, HE I.3',
        ],
      },
    ],
  },

  // =============================================
  // PERÍODO 5: 430–431
  // =============================================
  {
    periodo: '430–431',
    titulo: 'Os Meses Finais: Preparativos, Intrigas e a Véspera do Concílio',
    descricaoGeral:
      'Os seis meses entre a convocação (novembro de 430) e a abertura do concílio (junho de 431) foram de intensa atividade diplomática, logística e teológica. Cirilo mobilizou os bispos do Egito e da Palestina; Nestório buscou o apoio da corte e dos bispos da Trácia; João de Antioquia preparou sua comitiva síria; e Roma enviou seus legados. A tensão pré-conciliar era palpável: todos sabiam que o resultado definiria o futuro da cristologia e o equilíbrio de poder no Oriente.',
    eventos: [
      {
        ano: 'Dez 430 – Fev 431',
        titulo: 'A Mobilização dos Partidos',
        descricao:
          'Cirilo reuniu cerca de 50 bispos egípcios e garantiu o apoio de Juvenal de Jerusalém e de Memnon de Éfeso (o anfitrião). Nestório, por sua vez, contava com o apoio de Teodósio II (que ainda o protegia) e de alguns bispos da Trácia e da Ásia Menor. João de Antioquia reuniu cerca de 30 bispos sírios, mas sua viagem seria atrasada por enchentes nas estradas da Ásia Menor.',
        importancia:
          'A composição numérica do concílio já favorecia Cirilo antes mesmo da abertura. Com os egípcios, os palestinos e os asiáticos (via Memnon), Cirilo teria a maioria esmagadora. A única esperança de Nestório era a chegada de João de Antioquia e o apoio imperial.',
        fontes: [
          'ACO I.1.1 (listas de assinaturas)',
          'Sócrates, HE VII.34',
          'McGuckin, op. cit., pp. 100–115',
        ],
      },
      {
        ano: 'Primavera 431',
        titulo: 'As Instruções Imperiais e o Papel de Candidiano',
        descricao:
          'Teodósio II nomeou o conde Candidiano (comes domesticorum) como seu representante no concílio, com instruções claras: manter a ordem, impedir discussões sobre questões alheias à fé, e garantir que todos os partidos fossem ouvidos antes de qualquer decisão. Candidiano chegou a Éfeso antes da abertura e tentou mediar entre os partidos.',
        importancia:
          'As instruções imperiais seriam ignoradas por Cirilo na Sessão I, quando ele abriu o concílio sem esperar João de Antioquia. Candidiano protestou, mas foi ignorado pela maioria dos bispos. Este desrespeito às ordens imperiais seria a base legal do contra-concílio joanita.',
        fontes: [
          'Sacra ad Candidianum (ACO I.1.1)',
          'Gesta de Epheso (ACO I.1.2)',
        ],
      },
      {
        ano: 'Junho 431',
        titulo: 'A Chegada dos Bispos e a Tensão Pré-Conciliar',
        descricao:
          'Os bispos começaram a chegar a Éfeso no início de junho. Cirilo e sua comitiva egípcia chegaram cedo e foram recebidos triunfalmente por Memnon e pela população local. Nestório chegou com uma escolta imperial e instalou-se em sua residência, cercado por soldados. João de Antioquia, porém, não aparecia: sua comitiva estava atrasada nas estradas da Anatólia, vítimas de enchentes e da lentidão da viagem.',
        importancia:
          'A ausência de João criou o dilema que detonaria a crise: esperar indefinidamente (como pediam Nestório e Candidiano) ou abrir o concílio com os bispos presentes (como queria Cirilo). A decisão de Cirilo de não esperar seria o ato mais controverso de todo o concílio.',
        fontes: [
          'Sócrates, HE VII.34',
          'ACO I.1.1 (Gesta)',
          'Wessel, op. cit., pp. 120–140',
        ],
      },
      {
        ano: '21 de junho de 431',
        titulo: 'A Véspera: O Ultimato de Cirilo',
        descricao:
          'Na véspera de Pentecostes, com João de Antioquia ainda a 4 dias de distância, Cirilo convocou os bispos presentes para a abertura no dia seguinte. 68 bispos (liderados por Teodoreto, que havia chegado com a vanguarda de João) assinaram um protesto pedindo o adiamento. Candidiano leu a sacra imperial ordenando que se esperasse todos os bispos. Cirilo ignorou ambos os protestos e manteve a abertura para 22 de junho.',
        importancia:
          'A decisão de Cirilo de abrir o concílio sem os orientais e contra as ordens imperiais foi o ato que transformou Éfeso de um concílio em um campo de batalha. Para seus defensores, era uma medida necessária para impedir que Nestório ganhasse tempo. Para seus críticos, era um golpe de força que invalidava todo o procedimento.',
        fontes: [
          'ACO I.1.1 (Gesta, Sessão I)',
          'Sócrates, HE VII.34',
          'McGuckin, op. cit., pp. 115–125',
        ],
      },
    ],
  },
]