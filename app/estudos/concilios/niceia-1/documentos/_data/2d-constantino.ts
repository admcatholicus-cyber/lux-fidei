/* ─────────────────────────────────────────────────────────────
   DOSSIÊ DOCUMENTAL: 2D. CARTAS E EDICTOS DE CONSTANTINO I
   Fontes críticas:
   - Hans-Georg Opitz, Urkunden zur Geschichte des Arianischen Streites (Urk. 17–34)
   - Eusébio de Cesareia, Vita Constantini (VC)
   - Atanásio de Alexandria, Apologia contra Arianos (Apol. c. Ar.)
   - Sócrates Escolástico, Historia Ecclesiastica (HE)
   - Teodoreto de Ciro, Historia Ecclesiastica (HE)
   - Codex Theodosianus (CTh) / Codex Justinianus (CJ)
───────────────────────────────────────────────────────────── */

export interface CartaImperial {
  id: string
  titulo: string
  numeroOpitz: string
  fonteAntiga: string
  destinatarios: string
  contextoHistorico: string
  trechoChavePortugues: string
  importanciaDoc: string
}

export const cartasConstantinoData: CartaImperial[] = [
  {
    id: 'carta-alexandre-ario',
    titulo: 'Carta a Alexandre de Alexandria e Ário',
    numeroOpitz: 'Urk. 17',
    fonteAntiga: 'Eusébio de Cesareia, Vita Constantini II.64–72; Sócrates, HE I.7',
    destinatarios: 'Alexandre (Bispo de Alexandria) e Ário (Presbítero)',
    contextoHistorico:
      'Escrita no final de 324, logo após a vitória sobre Licínio e a unificação do Império. Constantino enviou seu conselheiro Ósio de Córdova a Alexandria com esta carta para tentar sufocar a disputa antes que ela incendiasse o Oriente.',
    trechoChavePortugues:
      '"Compreendi que a origem da presente controvérsia foi a seguinte: quando tu, Alexandre, perguntaste aos teus presbíteros o que cada um pensava sobre determinado trecho das Escrituras, ou melhor, sobre uma questão fútil... tu, Ário, precipitadamente projetaste uma opinião que jamais deverias ter concebido... Restabelecei, pois, a comunhão entre vós! Pois essas questões são miudezas insignificantes, querelas sobre palavras sem valor real."',
    importanciaDoc:
      'Demonstra que Constantino inicialmente encarava o arianismo não como uma grave Heresia cristológica, mas como uma mera disputa semântica e acadêmica trivial que ameaçava a paz pública do Império.'
  },
  {
    id: 'mudanca-ancira-niceia',
    titulo: 'Carta sobre a Transferência da Sede de Ancira para Niceia',
    numeroOpitz: 'Urk. 20',
    fonteAntiga: 'Preservada em siríaco no Cod. Syr. Mus. Brit. Add. 14.528 (ed. Schulthess)',
    destinatarios: 'Aos bispos convocados para o Concílio',
    contextoHistorico:
      'Enviada na primavera de 325, alterando subitamente o local de reunião do concílio de Ancira (Galácia) para Niceia (Bitínia).',
    trechoChavePortugues:
      '"Pareceu-me conveniente, por muitas razões, que o santo concílio se reunisse na cidade de Niceia, na Bitínia. Primeiro, por causa dos bispos que vêm da Itália e de outras partes da Europa; segundo, por causa do excelente clima daquela cidade; e terceiro, para que eu possa estar presente em pessoa e participar do vosso concílio."',
    importanciaDoc:
      'Revela as motivações pragmáticas, geográficas e políticas do imperador para assegurar a presença de bispos ocidentais e supervisionar pessoalmente as sessões.'
  },
  {
    id: 'carta-aos-alexandrinos',
    titulo: 'Carta à Igreja de Alexandria após o Concílio',
    numeroOpitz: 'Urk. 25',
    fonteAntiga: 'Sócrates Escolástico, HE I.9; Gelásio de Cízico, Syntagma II.33',
    destinatarios: 'À Igreja Católica de Alexandria',
    contextoHistorico:
      'Promulgada em agosto de 325, logo após o encerramento do concílio, exortando a comunidade alexandrina a acatar os decretos e abandonar a divisão.',
    trechoChavePortugues:
      '"Recebei com toda a alegria a declaração de fé promulgada pelo Deus Todo-Poderoso! Pois aquilo que aprouve a trezentos bispos não é senão a sentença do próprio Filho de Deus, visto que o Espírito Santo, habitando na mente de homens tão ilustres, revelou a vontade divina. Que nenhum de vós vacile ou hesite, mas retornai todos com prontidão ao caminho da verdade!"',
    importanciaDoc:
      'Proclama a autoridade dogmática de Niceia como inspirada pelo Espírito Santo e irreformável para todo o Império.'
  },
  {
    id: 'enciclica-pascoa',
    titulo: 'Carta Circular às Igrejas sobre a Unificação da Páscoa',
    numeroOpitz: 'Urk. 26',
    fonteAntiga: 'Eusébio de Cesareia, VC III.17–20; Sócrates, HE I.9',
    destinatarios: 'A todas as Igrejas e Bispos ausentes do concílio',
    contextoHistorico:
      'Promulgada no verão de 325, explicando as razões para abolir o costume quartodecimano e adotar o cálculo alexandrino/romano.',
    trechoChavePortugues:
      '"Afigurou-se coisa indigna que celebrássemos essa festividade santíssima seguindo o costume dos judeus, que mancharam suas mãos com um crime nefasto e cujas mentes estão obcecadas... Nada tenhamos, pois, em comum com a detestável turba judaica, pois recebemos do Nosso Salvador um caminho diferente... Aceitai de bom grado este decreto, para que nossa celebração pascal seja guardada em um mesmo dia por toda a Cristandade."',
    importanciaDoc:
      'O documento fundamental que rompeu definitivamente o vínculo entre o calendário litúrgico cristão e o calendário judaico rabínico.'
  },
  {
    id: 'edicto-contra-ario-porfirianos',
    titulo: 'Edito Imperial contra Ário e os "Porfirianos"',
    numeroOpitz: 'Urk. 33',
    fonteAntiga: 'Sócrates, HE I.9; Gelásio de Cízico, Syntagma II.36',
    destinatarios: 'Aos bispos e povos de todo o Império Romano',
    contextoHistorico:
      'Promulgado em 325 após a recusa de Ário e seus dois bispos em assinar a fé nicena. Marca a inauguração do braço secular reprimindo a heresia religiosa.',
    trechoChavePortugues:
      '"Como Ário imitou os homens ímpios e perversos, é justo que receba a mesma infâmia. Assim como Porfírio, o inimigo da piedade... recebeu a devida paga e teve seus escritos destruídos, assim decretamos que Ário e seus seguidores sejam chamados Porfirianos... Além disso, se algum livro escrito por Ário for encontrado, que seja atirado ao fogo... E se alguém for flagrado ocultando um escrito de Ário e não o entregar para ser queimado, sua pena será a morte!"',
    importanciaDoc:
      'A primeira lei de censura estatal e pena de morte por ocultação de literatura herética na história do Império Romano Cristão.'
  },
  {
    id: 'carta-nicomedianos-eusebio',
    titulo: 'Carta aos Nicomedianos contra Eusébio e Teógnis',
    numeroOpitz: 'Urk. 27',
    fonteAntiga: 'Teodoreto de Ciro, HE I.20; Gelásio, Syntagma III, App. 1',
    destinatarios: 'À Igreja de Nicomédia',
    contextoHistorico:
      'Enviada em fins de 325, ordenando o exílio de Eusébio de Nicomédia e Teógnis de Niceia por continuarem em comunhão oculta com os arianos.',
    trechoChavePortugues:
      '"Eusébio, aquele cúmplice da tirania de Licínio e da impiedade ariana, enganou o concílio e usou de fraudes para permanecer no seu posto... Mas a providência divina o desmascarou. Ordeno, pois, que ele e Teógnis sejam banidos para o exílio mais distante, e que vós elejais bispos puros e ortodoxos [Anfião e Cresto] para ocupar suas Sés."',
    importanciaDoc:
      'Ilustra a interferência direta do imperador na deposição e nomeação de bispos em Sés estratégicas.'
  },
  {
    id: 'carta-teodoto-laodiceia',
    titulo: 'Carta de Advertência a Teódoto de Laodiceia',
    numeroOpitz: 'Urk. 28',
    fonteAntiga: 'Teodoreto de Ciro, HE I.20',
    destinatarios: 'Teódoto (Bispo de Laodiceia na Síria)',
    contextoHistorico:
      'Enviada após o exílio de Eusébio de Nicomédia, advertindo Teódoto (que havia sido suspenso em Antioquia no início de 325) a abandonar a facção eusebiana.',
    trechoChavePortugues:
      '"Aprende pelas desgraças de Eusébio e Teógnis quão perigoso é persistir na obstinação herética. Se desejares conservar tua Sé episcopal e a comunhão católica, purifica teus pensamentos e corta qualquer laço com aqueles homens banidos."',
    importanciaDoc:
      'Mostra o uso do terror político e do medo do exílio para forçar os bispos oriental-subordinacionistas a acatarem Niceia.'
  },
  {
    id: 'convite-ario-corte',
    titulo: 'Carta de Convite a Ário para comparecer à Corte',
    numeroOpitz: 'Urk. 29',
    fonteAntiga: 'Sócrates Escolástico, HE I.25',
    destinatarios: 'Ário (Presbítero no exílio da Ilíria)',
    contextoHistorico:
      'Escrita c. 327–328, marcando o início da reviravolta política de Constantino, encorajado por sua irmã Constância a reabilitar Ário.',
    trechoChavePortugues:
      '"O Imperador Constantino Victor Máximo Augusto a Ário. Já há muito tempo foi anunciado à tua Gravidade que poderias vir ao meu acampamento imperial para desfrutar da nossa presença. Vem, pois, sem demora, para que, tendo experimentado nossa clemência, possas retornar à tua pátria."',
    importanciaDoc:
      'O documento que deu início à fase de reabilitação política do arianismo após o concílio.'
  },
  {
    id: 'carta-macario-santo-sepulcro',
    titulo: 'Carta a Macário de Jerusalém sobre a Basílica do Santo Sepulcro',
    numeroOpitz: 'Não catalogada em Urkunden',
    fonteAntiga: 'Eusébio de Cesareia, VC III.30–32',
    destinatarios: 'Macário (Bispo de Aelia/Jerusalém)',
    contextoHistorico:
      'Escrita c. 326, logo após o concílio, quando Helena (mãe de Constantino) visitou a Palestina. Ordena a construção da Basílica do Anástasis (Santo Sepulcro).',
    trechoChavePortugues:
      '"Tamanho é o favor do nosso Salvador que nenhuma linguagem basta para descrevê-lo: que o monumento de sua santíssima Paixão, há tanto tempo enterrado sob a terra, tenha ressurgido à luz... Ordeno que providencies para que a basílica a ser erguida sobre o Sepulcro supere todas as demais em beleza e esplendor."',
    importanciaDoc:
      'Relaciona o rescaldo do Concílio de Niceia com o programa imperial de monumentalização dos Lugares Santos da Palestina.'
  },
  {
    id: 'encomenda-50-biblias',
    titulo: 'Carta a Eusébio de Cesareia encomendando 50 Bíblias',
    numeroOpitz: 'Não catalogada em Urkunden',
    fonteAntiga: 'Eusébio de Cesareia, VC IV.36',
    destinatarios: 'Eusébio (Bispo de Cesareia da Palestina)',
    contextoHistorico:
      'Escrita c. 331 para equipar as novas basílicas da recém-inaugurada capital imperial, Constantinopla.',
    trechoChavePortugues:
      '"Apareceu-nos conveniente encomendar à tua Prudência que mandes transcrever, em pergaminhos bem preparados, por copistas peritos na sua arte, cinquenta volumes das Divinas Escrituras, cuja provisão e uso sabes ser maximamente necessários para a instrução da Igreja de nossa nova capital."',
    importanciaDoc:
      'A encomenda de 50 Bíblias completas em pergaminho (de onde alguns estudiosos conjeturam a origem de manuscritos como o <em>Codex Sinaiticus</em> ou <em>Vaticanus</em>). Foi a má interpretação deste evento que deu origem ao mito popular de que "Constantino criou ou definiu a Bíblia em Niceia".'
  },
  {
    id: 'edicto-heresias-novacianos',
    titulo: 'Edito Imperial contra as Heresias e a Lei de Isenção aos Novacianos',
    numeroOpitz: 'Não catalogada em Urkunden',
    fonteAntiga: 'Eusébio, VC III.64–66; Codex Theodosianus CTh 16.5.2 (ano 326)',
    destinatarios: 'Aos Novacianos, Valentinianos, Marcionitas, Paulianistas e Cataprígios',
    contextoHistorico:
      'Editos promulgados entre 326 e 331 banindo os cultos heréticos e confiscando suas casas de oração. Crucialmente, o <em>Codex Theodosianus</em> 16.5.2 registra a isenção concedida aos Novacianos.',
    trechoChavePortugues:
      'VC III.65: "Sabei, ó Valentinianos, Marcionitas, Paulianistas e Cataprígios... que vossas assembleias são fontes de perdição. Confiscamos vossos locais de culto para a Igreja Católica!" / CTh 16.5.2 (25 de setembro de 326): "Os Novacianos não devem ser oprimidos por esta lei rigorosa; permitimos que conservem suas casas de oração e cemitérios sem perturbação."',
    importanciaDoc:
      'Deve ser lido em estrita conexão com o Cânone 8 de Niceia, demonstrando como a legislação imperial ratificou a política conciliar de tratamento diferenciado entre os novacianos (ortodoxos na Trindade) e os demais grupos heréticos.'
  },
  /* ─────────────────────────────────────────────────────────────
     NOVAS ADIÇÕES (ITEM 89)
  ───────────────────────────────────────────────────────────── */
  {
    id: 'carta-alexandre-readmissao-ario',
    titulo: 'Carta a Alexandre de Alexandria sobre a Readmissão de Ário',
    numeroOpitz: 'Urk. 32',
    fonteAntiga: 'História Eclesiástica Anônima de Gelásio (Anônima de Cízico/Geleen) III.15',
    destinatarios: 'Alexandre (Patriarca de Alexandria)',
    contextoHistorico:
      'Escrita c. 327–328. Após Ário apresentar sua profissão de fé vaga na corte, Constantino escreve ao idoso bispo de Alexandria exigindo formalmente a reintegração do presbítero e denunciando a manutenção de suspeitas passadas.',
    trechoChavePortugues:
      '"Ário, o presbítero, veio à minha presença, confessando as verdades divinas com sinceridade e prestando testemunho da paz e concórdia eclesial diante de nós. Sendo assim, convém que o acolhas de braços abertos, sem qualquer hesitação. Não dês lugar a novas discórdias por ressentimentos passados, pois meu maior objetivo é ver o povo de Deus unido sob um mesmo coração."',
    importanciaDoc:
      'Documenta a transição pragmática da política imperial que, para garantir a paz civil, passa a forçar os bispos metropolitanos a ignorar as salvaguardas teológicas de Niceia.'
  },
  {
    id: 'carta-sarcastica-ario-porfirio',
    titulo: 'Carta Sarcástica a Ário ("Novo Porfírio")',
    numeroOpitz: 'Urk. 34',
    fonteAntiga: 'Atanásio de Alexandria, De Decretis Nicaenae Synodi 39–40; Sócrates, HE I.9',
    destinatarios: 'Ário e a seita ariana',
    contextoHistorico:
      'Promulgada em 333/334. Diante do colapso de suas tentativas de pacificação e da obstinação doutrinária clandestina dos arianos, Constantino escreve um libelo de violência verbal inédita, ridicularizando a retórica de Ário e equiparando-o ao filósofo pagão anticristão Porfírio.',
    trechoChavePortugues:
      '"Vede que homem perverso, um verdadeiro imitador daqueles que atacaram a fé! Que ele seja chamado de Porfírio, pois seus escritos contra a divindade do Filho de Deus merecem o mesmo destino das cinzas... Tu gritas: \'O Filho é do nada!\' Ó impiedade sem limites, ó língua afiada no veneno! Quem te deu autoridade para medir a substância do Altíssimo com palavras mundanas? Tu, com tua mente depravada, seduzes os simples como uma serpente rastejante."',
    importanciaDoc:
      'Testemunha a instabilidade de Constantino na condução da crise, oscilando entre decretos de extermínio literário/retórico e a pressão subsequente para a reabilitação física do heresiarca.'
  },
  {
    id: 'carta-atanasio-admissao-seitas',
    titulo: 'Carta de Ameaça a Atanásio de Alexandria (Admissão de Ário)',
    numeroOpitz: 'Não catalogada em Urkunden',
    fonteAntiga: 'Atanásio, Apologia contra Arianos 59',
    destinatarios: 'Atanásio (Bispo de Alexandria)',
    contextoHistorico:
      'Enviada c. 328–330, logo após a ascensão de Atanásio à Sé de Alexandria. O novo patriarca recusou-se veementemente a receber os arianos arrependidos, alegando que uma heresia condenada de forma conciliar não poderia ser restabelecida por decreto de gabinete.',
    trechoChavePortugues:
      '"Sendo, pois, informado de nossa augusta vontade, deves conceder livre acesso à Igreja a todos aqueles que desejarem ingressar nela. Se eu vier a saber que proibiste a entrada de quem quer que seja, ou que impediste a sua união à comunhão eclesial, enviarei imediatamente um dos meus oficiais para depor-te de tua Sé episcopal e banir-te do teu país."',
    importanciaDoc:
      'A primeira grande colisão entre a autoridade imperial autocrática e a autonomia jurisdicional eclesiástica de Atanásio, estabelecendo o tom do conflito que duraria décadas.'
  },
  {
    id: 'carta-atanasio-absolvicao-psamatia',
    titulo: 'Carta aos Alexandrinos em defesa de Atanásio',
    numeroOpitz: 'Não catalogada em Urkunden',
    fonteAntiga: 'Atanásio, Apologia contra Arianos 62 (também caps. 61 e 68)',
    destinatarios: 'À Igreja Católica de Alexandria e seu clero',
    contextoHistorico:
      'Enviada em 332. Após ser acusado pela facção eusebiana de enviar subornos, quebrar o cálice litúrgico de Ischyras e conspirar contra o trono, Atanásio viajou até a residência imperial em Psamátia (subúrbio de Nicomédia). Constantino ouviu o caso pessoalmente, absolveu-o de todas as calúnias e ordenou o envio desta carta de apoio.',
    trechoChavePortugues:
      '"Tendo ouvido o vosso bispo Atanásio e examinado os fatos com a seriedade que me é habitual, convenci-me de que ele é, verdadeiramente, um homem de Deus. Seus inimigos não conseguiram provar nenhuma das acusações infames que inventaram, como a quebra do cálice sagrado. Que as mentes perversas cessem suas intrigas e que a paz retorne à gloriosa Alexandria."',
    importanciaDoc:
      'Demonstra que Constantino, embora ditasse ordens duras, ainda recuava e reabilitava Atanásio quando confrontado com a integridade processual e a presença física do bispo.'
  },
  {
    id: 'carta-sinodo-tiro-convocacao',
    titulo: 'Carta ao Sínodo de Tiro convocando os Bispos à Corte',
    numeroOpitz: 'Não catalogada in Urkunden',
    fonteAntiga: 'Eusébio de Cesareia, Vita Constantini IV.42; Sócrates, HE I.34',
    destinatarios: 'Aos bispos reunidos no Sínodo de Tiro',
    contextoHistorico:
      'Enviada em 335, após os eusebianos condenarem Atanásio no Sínodo de Tiro com base no falso assassinato de Arsênio. Atanásio escapou de barco e interceptou Constantino a cavalo nas ruas de Constantinopla. Surpreso, o imperador ordena que os bispos de Tiro venham prestar contas sob custódia oficial.',
    trechoChavePortugues:
      '"Não sei o que foi decidido por vosso concílio em meio a tamanho tumulto e paixão partidária... Deveis, portanto, vir sem demora à minha presença imperial para demonstrar que julgastes com integridade e sem ódio pessoal a causa de Atanásio, o qual clama que foi vítima de uma fraude perversa que fomos compelidos a investigar."',
    importanciaDoc:
      'Evidencia o imperador agindo como a corte eclesiástica de apelação final, assumindo o controle direto sobre sentenças canônicas tomadas por concílios provinciais.'
  },
  {
    id: 'carta-sapor-ii-persia',
    titulo: 'Carta a Sapor II, Rei da Pérsia, em favor dos Cristãos',
    numeroOpitz: 'Não catalogada em Urkunden',
    fonteAntiga: 'Eusébio de Cesareia, Vita Constantini IV.9–13',
    destinatarios: 'Sapor II (Rei dos Reis do Império Sassânida)',
    contextoHistorico:
      'Enviada c. 325–327 (ou início dos anos 330). Constantino escreve ao xá persa assumindo publicamente o papel de patrono universal e protetor divino de todos os cristãos, mesmo os residentes no estrangeiro rival.',
    trechoChavePortugues:
      '"Alegro-me grandemente em saber que as províncias mais gloriosas da Pérsia estão repletas destas pessoas excelentes que são os cristãos... Eu os confio a ti, ó rei de nobre espírito; guarda-os em tua clemência. Por esta atitude piedosa, atrairás o favor do Senhor do Universo e manterás a amizade pacífica entre os nossos dois impérios."',
    importanciaDoc:
      'Inaugura o conceito geopolítico de "protetorado cristão transfronteiriço", transformando a minoria cristã persa em potenciais suspeitos de espionagem e traição para o trono sassânida.'
  },
  {
    id: 'lei-do-domingo-civil',
    titulo: 'A Lei do Domingo (Decretos sobre o Venerável Dia do Sol)',
    numeroOpitz: 'Não aplicável (Legislação Civil Imperial)',
    fonteAntiga: 'Codex Justinianus (CJ) 3.12.2; Codex Theodosianus (CTh) 2.8.1',
    destinatarios: 'Aos magistrados civis, povo urbano e artesãos do Império',
    contextoHistorico:
      'Promulgada em 7 de março de 321. Constantino decreta o descanso semanal obrigatório no "dia do sol", unindo a sensibilidade pascal cristã (o Dia do Senhor) ao culto dinástico heliotrópico do Sol Invictus.',
    trechoChavePortugues:
      '"Que todos os magistrados, cidadãos e artífices repousem no venerável Dia do Sol (venerabili die Solis). Aqueles que habitam no campo, contudo, podem livre e desembaraçadamente aplicar-se à agricultura, dado que frequentemente nenhum outro dia é mais propício para lançar as sementes aos sulcos ou plantar videiras."',
    importanciaDoc:
      'O documento jurídico inaugural do descanso dominical obrigatório no direito civil ocidental. Revela o sincretismo constantiniano primitivo antes da radicalização eclesiástica pós-niceana.'
  }
]