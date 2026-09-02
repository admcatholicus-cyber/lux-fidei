// app/estudos/sacramentos/crisma/data/crisma.data.ts

export const sidebarSections = [
  {
    titulo: 'Parte I — Fundamentos',
    links: [
      { href: '#o-que-e', num: 'I', label: 'O Que É' },
      { href: '#historia', num: 'II', label: 'História' },
      { href: '#teologia', num: 'III', label: 'Teologia' },
      { href: '#rito', num: 'IV', label: 'O Rito' },
    ],
  },
  {
    titulo: 'Parte II — Frutos e Efeitos',
    links: [
      { href: '#dons', num: 'V', label: 'Os 7 Dons' },
      { href: '#frutos', num: 'VI', label: 'Os 12 Frutos' },
      { href: '#efeitos', num: 'VII', label: 'Efeitos' },
    ],
  },
  {
    titulo: 'Parte III — Vida Cristã',
    links: [
      { href: '#santos', num: 'VIII', label: 'Santos' },
      { href: '#ministro', num: 'IX', label: 'Ministro' },
      { href: '#preparacao', num: 'X', label: 'Preparação' },
      { href: '#curiosidades', num: 'XI', label: 'Curiosidades' },
      { href: '#questoes', num: '★', label: 'FAQ' },
    ],
  },
]

export const dons = [
  {
    num: 'I', icon: '🦅', nome: 'Sabedoria',
    tag: 'tagGold', tagLabel: 'Perfaz: Virtude da Fé',
    desc: `Don mais elevado. Permite conhecer as realidades divinas e humanas sob a perspectiva de Deus.
    O sábio saboreia as coisas de Deus. Enquanto a teologia alcança Deus pelo raciocínio, a Sabedoria
    alcança por connaturalidade — porque ama. Um dos mais belos dons: rezar com sabedoria é rezar como
    criança que conhece seu pai. Santo Tomás diz que a Sabedoria é o don mais perfeito porque nos une
    a Deus pelo amor, não apenas pelo conhecimento.`,
  },
  {
    num: 'II', icon: '💡', nome: 'Entendimento',
    tag: 'tagBlue', tagLabel: 'Perfaz: Virtude da Fé',
    desc: `Capacidade de penetrar nas verdades reveladas além da superfície. Não é apenas saber que Cristo
    ressuscitou — é compreender o que isso significa para toda a existência humana. Dom que ilumina as
    Escrituras, os dogmas e a própria vida como história sagrada. O Entendimento dá ao cristão olhos
    novos para ler a realidade: cada evento da vida pode ser lido como página de um livro sagrado.`,
  },
  {
    num: 'III', icon: '⚖️', nome: 'Conselho',
    tag: 'tagGreen', tagLabel: 'Perfaz: Virtude da Prudência',
    desc: `Auxilia nas decisões práticas da vida moral — especialmente nas situações complexas onde as
    regras gerais não respondem facilmente. É a prudência sobrenaturalizada: discernir o que Deus quer
    neste momento concreto. O dom que impede de ser fariseu (aplico regras cegamente) ou relativista
    (ignoro as regras). Os grandes confessores e diretores espirituais são homens do dom do Conselho.`,
  },
  {
    num: 'IV', icon: '⚔️', nome: 'Fortaleza',
    tag: 'tagRed', tagLabel: 'Perfaz: Virtude da Fortaleza',
    desc: `Dom que supera os medos e dificuldades no cumprimento do dever cristão. É o dom dos mártires
    — não anestesia o medo, mas dá coragem para agir apesar do medo. Um cristão pode tremer de medo
    diante da perseguição e ainda assim proclamar a fé: isso é fortaleza sobrenatural. Blandina de
    Lyon, escrava frágil, resistiu a horas de tortura com este dom.`,
  },
  {
    num: 'V', icon: '🔬', nome: 'Ciência',
    tag: 'tagGold', tagLabel: 'Perfaz: Virtude da Esperança',
    desc: `Capacidade de julgar retamente as criaturas em relação a Deus — usando as realidades criadas
    como degraus para o Criador, sem se prender a elas. Oposto da mundanidade: o cristão com Ciência
    usa o mundo sem ser usado por ele. Dom dos contemplativos que veem Deus em tudo. São Francisco de
    Assis, ao louvar o Senhor pelas criaturas, vivia plenamente o dom da Ciência.`,
  },
  {
    num: 'VI', icon: '❤️', nome: 'Piedade',
    tag: 'tagRed', tagLabel: 'Perfaz: Virtude da Justiça',
    desc: `Dom que perfaz a relação filial com Deus e fraterna com os homens. Não é sentimentalismo nem
    exterioridade devocional — é o afeto sobrenatural que reverencia Deus como Pai e trata o próximo
    como irmão. Um cristão piedoso reza com gosto, não por obrigação. Santa Teresinha de Lisieux é
    modelo perfeito de piedade filial: tratava Deus com a confiança de uma criança no colo do pai.`,
  },
  {
    num: 'VII', icon: '🙇', nome: 'Temor de Deus',
    tag: 'tagGreen', tagLabel: 'Perfaz: Virtude da Temperança',
    desc: `Mal entendido como "terror", é na realidade o amor filial que teme desagradar a Deus — não
    por punição, mas por amor. É o oposto da presunção. A Bíblia repete 365 vezes "não temas" — mas
    o temor de Deus não é o medo que paralisa, é o respeito que santifica. "Início da Sabedoria"
    (Pr 1,7). São Tomás distingue o temor servil (do castigo) do temor filial (de ofender o Pai amado):
    apenas o segundo é dom do Espírito Santo.`,
    centrado: true,
  },
]

export const frutos = [
  [
    { icon: '❤️', nome: 'Amor (Caridade)', desc: 'O primeiro e raiz de todos. Amor a Deus acima de tudo e ao próximo como a si mesmo.' },
    { icon: '😊', nome: 'Alegria', desc: 'Não é felicidade superficial, mas a paz profunda de quem está em Deus.' },
    { icon: '☮️', nome: 'Paz', desc: '"Paz que o mundo não pode dar" — equilíbrio interior mesmo no sofrimento.' },
    { icon: '⏳', nome: 'Longanimidade', desc: 'Capacidade de aguardar com serenidade o cumprimento das promessas de Deus.' },
  ],
  [
    { icon: '🤝', nome: 'Benignidade', desc: 'Doçura no trato com o próximo; disposição de fazer o bem ativamente.' },
    { icon: '💚', nome: 'Bondade', desc: 'Excelência moral interior que se traduz em atos concretos de bem.' },
    { icon: '🌸', nome: 'Gentileza (Modéstia)', desc: 'Polidez e decoro nas palavras e comportamentos — o "charme" cristão.' },
    { icon: '🤜', nome: 'Fidelidade', desc: 'Constância nos compromissos, especialmente com Deus e com a Igreja.' },
  ],
  [
    { icon: '🕊️', nome: 'Mansidão', desc: 'Controle das reações de ira; capacidade de responder ao mal com calma.' },
    { icon: '🏋️', nome: 'Paciência', desc: 'Suportar as provações e sofrimentos sem perder a paz interior.' },
    { icon: '🌊', nome: 'Continência', desc: 'Refrear os impulsos desordenados; temperança nas satisfações corporais.' },
    { icon: '🛡️', nome: 'Domínio Próprio', desc: 'Autogoverno segundo a razão iluminada pela fé — não ser escravo das paixões.' },
  ],
]

export const efeitos = [
  {
    icon: '🔥', titulo: '1. Aumento e Aprofundamento da Graça Santificante',
    desc: `A Crisma não "começa" a graça (isso foi o Batismo) mas a aprofunda, fortalece e integra.
    Como a adolescência em relação à infância: não se torna outra pessoa, mas se torna mais completa.
    O CIC (1303) ensina que a Confirmação "aumenta em nós os dons do Espírito Santo." Esta graça não
    é estática — cresce na medida em que o confirmado colabora com ela pela oração, sacramentos e
    obras de misericórdia.`,
  },
  {
    icon: '🔏', titulo: '2. Impressão do Caráter Sacramental',
    desc: `Como mencionado na seção de teologia, imprime uma marca espiritual permanente que configura
    o cristão a Cristo e o capacita para a missão. Por isso, é recebido somente uma vez — e mesmo
    pecadores que se afastaram não precisam nem podem recebê-lo novamente ao regressar. O caráter
    permanece mesmo no inferno — o que demonstra que é algo ontológico, não moral.`,
  },
  {
    icon: '⚔️', titulo: '3. Fortalecimento para o Combate Espiritual',
    desc: `A tradição chama o confirmando de miles Christi — "soldado de Cristo". A Confirmação arma
    o cristão para resistir às tentações, combater o mal no mundo e perseverar na fé mesmo sob pressão.
    É por isso que a Crisma sempre foi associada à maturidade cristã. No mundo contemporâneo, onde a
    pressão cultural contra a fé é intensa, este efeito é mais necessário do que nunca.`,
  },
  {
    icon: '📢', titulo: '4. Capacitação para o Testemunho Missionário',
    desc: `O CIC (1305) afirma: "O confirmado pode e deve defender e difundir a fé por palavras e atos
    como verdadeiro testemunho de Cristo." Não se trata apenas de não pecar pessoalmente — é uma
    capacitação positiva para transformar o mundo. Todo confirmado é, pela Crisma, um missionário.
    A nova evangelização começa aqui.`,
  },
  {
    icon: '⛪', titulo: '5. Incorporação Mais Profunda à Igreja',
    desc: `A Confirmação une o fiel mais estreitamente à Igreja universal. O CIC (1303) fala em "vínculo
    mais perfeito com a Igreja". Isso tem implicações práticas: o confirmado assume responsabilidades
    eclesiais maiores e pode exercer certos direitos como ser padrinho de batismo ou de crisma. A Igreja
    não é uma associação voluntária — é o Corpo de Cristo, e a Crisma aprofunda a inserção nesse Corpo.`,
  },
  {
    icon: '🕊️', titulo: '6. Os Sete Dons em Plenitude',
    desc: `Os dons do Espírito Santo (Sabedoria, Entendimento, Conselho, Fortaleza, Ciência, Piedade e
    Temor de Deus) são dados ao batizando, mas intensificados na Confirmação. São habitus — disposições
    permanentes que nos tornam responsivos à ação do Espírito. Como instrumentos musicais afinados: não
    tocam sozinhos, mas quando o Músico Divino os toca, produzem harmonia perfeita.`,
  },
  {
    icon: '🙏', titulo: '7. Graças Sacramentais Específicas',
    desc: `Além dos efeitos permanentes, o sacramento confere o direito a graças actuais especiais ao
    longo da vida: em momentos de tentação, de missão, de sofrimento, o confirmado pode recorrer às
    graças deste sacramento recebido anos antes. O tesouro da Crisma não se esgota no dia da celebração.
    É como um cheque que pode ser sacado a qualquer momento — a conta nunca fica vazia.`,
  },
]

export const santos = [
  {
    emoji: '🦁', nome: 'São Leão Magno', epoca: 'Papa • Século V',
    quote: `"Depois do batismo, o Espírito Santo é dado pela unção do crisma; pela imposição de mãos
    do bispo, recebemos o Espírito de sabedoria e de entendimento para confessar a fé de modo perfeito."`,
    bio: `Um dos maiores papas da antiguidade, Leão enfrentou Átila e os vândalos com a força do Espírito.
    Entendia a Crisma como o aperfeiçoamento necessário do Batismo — o cristão que nasce precisa crescer
    para enfrentar os bárbaros do mundo.`,
  },
  {
    emoji: '📚', nome: 'Santo Tomás de Aquino', epoca: 'Doutor Angélico • 1225-1274',
    quote: `"Pelo batismo o homem é regenerado para a vida espiritual. Pela confirmação, recebe a força
    para lutar. Por isso, a confirmação é para a alma o que a adolescência é para o corpo."`,
    bio: `A analogia tomista corpo-espírito é pedagógica e precisa. Tomás sistematizou toda a teologia
    da Confirmação na Suma Teológica (III, qq. 72-73) com rigor filosófico insuperado. Paradoxalmente,
    este gigante intelectual atribuía seu saber não ao estudo, mas à oração — ao Espírito Santo.`,
  },
  {
    emoji: '🌹', nome: 'Santa Teresa d\'Ávila', epoca: 'Doutora da Igreja • 1515-1582',
    quote: `"O Espírito Santo é como fogo que, uma vez aceso, não se apaga facilmente quando o sopro
    da graça sacramental alimenta a chama interior."`,
    bio: `A grande mística espanhola via a Crisma como o início de uma aventura espiritual, não um ponto
    final. Ela mesma levou anos para corresponder plenamente à graça recebida. Sua autobiografia é um
    testemunho honesto de como o Espírito persevera mesmo quando nós hesitamos.`,
  },
  {
    emoji: '⚡', nome: 'São Francisco de Sales', epoca: 'Bispo e Doutor • 1567-1622',
    quote: `"O batismo nos dá o ser cristão; a confirmação nos dá a perfeição do cristão. O batismo é
    o nascimento; a confirmação é a plena maturidade na vida de Cristo."`,
    bio: `Francisco de Sales foi mestre da vida espiritual para leigos — sua "Introdução à Vida Devota"
    é leitura obrigatória. Via a Confirmação não como "rito de passagem social" mas como equipamento
    para a santidade no mundo secular. Converteu milhares de calvinistas com doçura, não com disputas.`,
  },
  {
    emoji: '🔥', nome: 'São Luís Maria Grignion de Montfort', epoca: 'Missionário • 1673-1716',
    quote: `"O Espírito Santo age naqueles que correspondem à sua graça. O confirmado que deixa o
    Espírito agir torna-se instrumento nas mãos de Deus. O que se fecha à sua ação permanece como
    um instrumento enferrujado."`,
    bio: `O apóstolo mariano enfatizava a correspondência pessoal à graça: o sacramento abre a porta,
    mas o fiel deve entrar. Sua devoção ao Espírito Santo através de Maria influenciou profundamente
    São João Paulo II, que adotou seu lema "Totus Tuus".`,
  },
  {
    emoji: '💫', nome: 'Santo Afonso de Ligório', epoca: 'Doutor da Igreja • 1696-1787',
    quote: `"A confirmação fortalece as graças do batismo. Os que foram bem preparados para recebê-la
    encontram nela um auxílio poderosíssimo para perseverar na virtude."`,
    bio: `Afonso, grande moralista e missionário popular, sublinhava a preparação. Não por superstição
    "mágica", mas porque a abertura da alma amplifica a receptividade à graça. Ele mesmo pregou missões
    populares por décadas, sempre invocando o Espírito antes de subir ao púlpito.`,
  },
  {
    emoji: '✊', nome: 'São João Paulo II', epoca: 'Papa • 1920-2005',
    quote: `"A Confirmação dá ao cristão o Espírito Santo como força de testemunho. Não é o final de
    um percurso: é o início de uma missão. Sereis minhas testemunhas!"`,
    bio: `JPII viveu sob nazismo e comunismo — sabia o que era ser testemunha de Cristo num mundo hostil.
    Para ele, a Crisma era urgentemente necessária na época moderna. Sua encíclica "Dominum et Vivificantem"
    (1986) é a mais profunda reflexão papal sobre o Espírito Santo do século XX.`,
  },
  {
    emoji: '🌺', nome: 'Beata Chiara Badano', epoca: 'Jovem Beata • 1971-1990',
    quote: `"Quero viver o que recebi na Crisma. O Espírito Santo que entrou em mim deve poder agir.
    Não posso fechá-lo."`,
    bio: `Chiara morreu de câncer aos 18 anos com uma alegria que comoveu o Papa João Paulo II. Ela dizia
    que a Crisma havia sido o momento em que decidiu ser completamente de Deus. Um modelo perfeito para
    jovens crismandos: a santidade não é questão de idade, mas de entrega.`,
  },
  {
    emoji: '📿', nome: 'Santo Agostinho', epoca: 'Bispo e Doutor • 354-430',
    quote: `"O Espírito Santo, dado pela imposição das mãos, é o mesmo que foi dado aos Apóstolos.
    A Igreja nunca interrompeu esta tradição dos Apóstolos."`,
    bio: `Agostinho foi fundamental para estabelecer a continuidade apostólica da Confirmação. Contra os
    donatistas, defendeu que a validade dos sacramentos não depende da dignidade do ministro. Sua própria
    conversão — narrada nas Confissões — é um testemunho de como o Espírito age através do tempo.`,
  },
]

export const faqItems = [
  {
    q: '❓ "A Crisma é necessária para a salvação?"',
    a: `Não da mesma forma que o Batismo. A teologia distingue: o Batismo é necessário necessitate medii
    (é meio necessário para a salvação); a Crisma é necessária necessitate praecepti (existe um preceito
    de recebê-la, mas sua ausência não implica necessariamente a perda da salvação).\n\nO CIC (1307)
    afirma: "Para receber a Confirmação, é preciso estar em estado de graça." E ensina que os fiéis têm
    a obrigação de recebê-la (can. 890). Uma pessoa que deliberadamente e por orgulho rejeita a Crisma
    peca; uma pessoa que morre sem tê-la recebido por circunstâncias alheias à sua vontade não está por
    isso condenada.`,
  },
  {
    q: '❓ "Posso me crimar se tenho dúvidas na fé?"',
    a: `Esta é uma das questões pastorais mais delicadas. Dúvidas são normais — especialmente na
    adolescência e juventude. A questão não é "tenho certeza absoluta de tudo?" mas "tenho intenção
    genuína de continuar buscando e de receber o Espírito Santo?"\n\nA fé não é ausência de dúvidas
    — é confiança apesar das dúvidas. Muitos dos maiores santos tiveram dúvidas intensas (a chamada
    "noite escura"). Santa Teresa de Calcutá viveu décadas de seca espiritual.\n\nO que seria
    problemático: receber a Crisma com a intenção explícita de não crer e não viver como cristão —
    por pressão familiar, apenas por tradição social etc. Nesse caso, falta a intenção mínima. O
    candidato honesto deve conversar com o padre ou catequista.`,
  },
  {
    q: '❓ "Qual a diferença da Crisma para a \'Confirmação\' das outras denominações cristãs?"',
    a: `Distinções importantes:\n\n• Católica: Sacramento verdadeiro, instituído por Cristo, confere graça ex opere operato, imprime caráter.\n• Ortodoxa: Mesma crença substancial; chamada Chrismation; administrada pelo padre imediatamente após o batismo.\n• Anglicana: Rito de maturidade cristã; a maioria das correntes anglicanas não a considera sacramento verdadeiro no sentido católico.\n• Luterana: Rito de confirmação da fé — sem valor sacramental na maioria das tradições; é uma afirmação pública do que o batismo conferiu.\n• Reformada/Presbiteriana: Profissão de fé pública; não é sacramento.\n• Batista: Não existe; a conversão pessoal e o batismo de adultos fazem papel análogo.`,
  },
  {
    q: '❓ "Por que tantos crismados abandonam a Igreja logo depois?"',
    a: `Esta é uma das crises pastorais mais sérias da Igreja contemporânea, especialmente no Ocidente.
    Estudos mostram que percentual significativo de jovens diminui ou abandona a prática religiosa após
    a Confirmação.\n\nAlguns diagnósticos honestos:\n\n• A Crisma foi tratada culturalmente como
    "formatura religiosa" — chega-se ao fim e não se volta\n• Preparação catequética sem encontro
    pessoal com Deus — conhecimento sem relacionamento\n• Pressão familiar: o jovem se crismou "para
    agradar avó", não por convicção\n• Falta de comunidade acolhedora após a Crisma\n• Proposta da
    Igreja não conectada com os desafios reais da vida jovem\n\nA solução não está em eliminar a Crisma,
    mas em reorientar toda a preparação para que seja um encontro real com o Deus vivo.`,
  },
  {
    q: '❓ "O Espírito Santo já não estava em mim desde o Batismo? Por que preciso da Crisma?"',
    a: `Excelente objeção — que os próprios teólogos medievais debateram. A resposta: sim, o Espírito
    Santo habita no batizado (1Cor 3,16). Mas há modos diferentes de presença e ação.\n\nAnalógia:
    uma criança ama sua mãe, e a mãe a ama. Mas esse amor, ao longo dos anos, aprofunda-se, amadurece,
    torna-se mais consciente, mais forte, mais capaz de sacrifício. É o mesmo amor, mas transformado.\n\n
    Na Confirmação, não se recebe "outro" Espírito Santo — o mesmo Espírito dado no Batismo age com
    plenitude: novos dons, novo caráter, nova missão. Santo Tomás diz: "O Espírito Santo não é dado
    de novo, mas dado de modo mais pleno."`,
  },
  {
    q: '❓ "Qual a relação entre Crisma e os carismas do Espírito Santo?"',
    a: `Os dons da Crisma (os sete dons de Isaías) e os carismas (falar em línguas, profecia, cura,
    etc. de 1Cor 12) são realidades distintas.\n\nOs sete dons são dados a todos os confirmados para
    sua santificação pessoal. Os carismas são dados pelo Espírito a quem Ele quer (1Cor 12,11), para
    o serviço da comunidade — não são garantidos pela Crisma nem são sinais de santidade maior.\n\n
    Alguém pode falar em línguas e não ser santo (Mt 7,22). Alguém pode nunca ter manifestado nenhum
    carisma extraordinário e ser grande santo (como São Tomás de Aquino ou Santa Teresinha).`,
  },
  {
    q: '❓ "E se eu receber a Crisma em estado de pecado mortal?"',
    a: `O sacramento é válido mas não frutifica naquele momento. A graça fica "bloqueada" pelo pecado
    mortal, mas fica depositada na alma através do caráter.\n\nQuando essa pessoa fizer uma boa
    confissão e retornar ao estado de graça, a graça da Crisma "revive" (reviviscência dos sacramentos).
    O sacramento não precisa ser repetido.\n\nIsso é teologicamente importante: a graça sacramental
    não está perdida para sempre por causa do pecado — ela aguarda na alma que se converte. É um dos
    aspectos mais consoladores da teologia sacramental.`,
  },
]

export const curiosidades = [
  {
    titulo: '🫒 O Que É o Crisma, Exatamente?',
    texto: `O crisma é uma mistura de azeite de oliva e bálsamo (perfume de origem vegetal). Na Missa
    Crismal da Quinta-Feira Santa, o bispo consagra três óleos: o Óleo dos Catecúmenos, o Óleo dos
    Enfermos e o Santo Crisma. Este último é o único que é propriamente "consagrado" — os outros são
    apenas "bêntos". Todos os padres da diocese comparecem à Missa Crismal para renovar promessas
    sacerdotais e levar os óleos às paróquias. O aroma do crisma é um dos perfumes mais antigos do
    Cristianismo.`,
  },
  {
    titulo: '👋 A "Bofetada" que Sumiu',
    texto: `Por séculos, o bispo dava uma leve palmada na face do confirmando após a unção. Era simbólica
    — um "lembre-se de que você deve estar pronto para sofrer por Cristo." Algumas fontes explicam como
    memória do gesto cavaleiresco com que um rei armava seu cavaleiro. Com a reforma do Rito em 1971,
    foi substituída por um gesto de paz. Muitos idosos ainda se lembram da "bofetada do bispo" com
    carinho e admiração — uma memória corporal do sacramento.`,
  },
  {
    titulo: '🌍 A Crisma dos Bebês no Oriente',
    texto: `Em todas as Igrejas de rito oriental (incluindo as Católicas orientais como Melquitas,
    Maronitas, Ucranianas etc.), os bebês são batizados, confirmados E recebem a Primeira Comunhão
    no mesmo rito — imediatamente após o nascimento espiritual. Um bebê de dias de vida recebe os
    três sacramentos de iniciação completos. Para muitos ocidentais isso parece estranho, mas é a
    tradição ininterrupta que remonta ao século II. Esta prática reforça que a graça não depende da
    maturidade psicológica.`,
  },
  {
    titulo: '🏰 A Crisma dos Imperadores',
    texto: `Na Idade Média, a unção com crisma era reservada a reis e imperadores na cerimônia de
    coroação — não porque fossem "especiais", mas para marcar que o poder vinha de Deus. Carlos Magno,
    os reis da França e da Inglaterra eram ungidos com crisma consagrado. O rito da coroação britânica
    ainda inclui uma unção com óleo sagrado até hoje — uma sobrevivência deste antigo simbolismo cristão.
    O rei Charles III foi ungido em 2023 neste rito milenar.`,
  },
  {
    titulo: '📜 "Confirmação" ou "Crisma" — Qual o Nome Certo?',
    texto: `Ambos! "Crisma" vem do grego chrisma (unção) e enfatiza o rito exterior — o óleo.
    "Confirmação" é o nome latino que enfatiza o efeito interior — confirmar, fortalecer. O Catecismo
    usa os dois como sinônimos. Em algumas regiões do Brasil fala-se quase só em "crisma"; em Portugal
    é comum "confirmação". Nos documentos oficiais da Igreja em latim: Confirmatio. O nome grego
    "Chrismation" é usado pelas Igrejas Ortodoxas e Orientais.`,
  },
  {
    titulo: '✈️ A Crisma Mais Improvável da História',
    texto: `Durante as perseguições na China (séculos XVII-XIX), os missionários eram frequentemente
    presos. Para garantir que os fiéis recebessem a Crisma, alguns bispos tinham de se disfarçar de
    mercadores ou camponeses e viajar centenas de quilômetros em segredo para confirmar grupos de
    cristãos escondidos em casas e cavernas. A fidelidade ao sacramento custava a liberdade e às vezes
    a vida. Hoje, bispos das Igrejas clandestinas na China continuam esta tradição heroica.`,
  },
  {
    titulo: '🔢 Os Sete Dons Foram "Inventados" na Idade Média?',
    texto: `Não exatamente. A lista de sete dons vem de Isaías 11,2-3, que profecia sobre o Messias.
    No texto hebraico original, há seis dons. Na tradução grega (LXX), aparece uma repetição de
    "piedade" que dá sete. Santo Agostinho sistematizou os sete dons em relação às Bem-aventuranças
    de Mateus 5, e São Gregório Magno os aplicou à vida espiritual. São Tomás completou o sistema no
    século XIII com sua correlação às virtudes — uma obra-prima de síntese teológica.`,
  },
  {
    titulo: '😲 A Crisma Pode Ser Inválida?',
    texto: `Sim, teoricamente. Se faltar a matéria (crisma não consagrado), a forma (palavras
    essenciais) ou a intenção do ministro ("fazer o que a Igreja faz"), o sacramento é inválido.
    Casos assim são raros mas ocorreram na história — levando a reconfirmações. Em 2020, foi
    descoberto que um padre nos EUA havia usado por anos a fórmula incorreta no Batismo, invalidando
    também as Crismas subsequentes de centenas de pessoas. Um caso concreto da importância da precisão
    ritual.`,
  },
]

export const oracoes = [
  {
    titulo: '📿 Hino ao Espírito Santo (Veni Creator Spiritus)',
    texto: `Vem, ó Espírito Criador,\nvisita as almas dos fiéis;\ne enche com a graça do alto\nos corações que criaste.\n\nTu és chamado o Paráclito,\ndom de Deus, o mais sublime,\nfonte viva, fogo, amor,\ne unção espiritual.\n\nAcende em nós a tua luz,\nderrama em nossos corações\no teu amor, e com teu poder\nfortalece nossa fraqueza.\n\nAmem.`,
  },
  {
    titulo: '🔥 Oração ao Espírito Santo',
    texto: `Espírito Santo, amor do Pai e do Filho,\ninspirai-me sempre o que devo pensar,\no que devo dizer, como devo dizer,\no que devo calar, como devo escrever,\no que devo fazer, como devo agir\npara a glória de Deus,\no bem das almas e a minha santificação.\n\nQue os Sete Dons que recebi na Crisma\nfloresçam em mim cada dia.\nNão deixeis que eu resista à vossa ação.\n\nAmem.`,
  },
  {
    titulo: '✝️ Oração do Crismando (Antes da Celebração)',
    texto: `Senhor Jesus,\nque prometestes o Espírito de Verdade\ne O enviastes em Pentecostes:\n\nEstou pronto para recebê-Lo.\nPerdoa meus pecados,\nabre meu coração,\nlivra-me do medo e da indiferença.\n\nQue a Crisma que recebo hoje\nnão seja uma formalidade,\nmas o início de uma vida\nverdadeiramente rendida a Ti.\n\nMaria, prepara o meu coração.\nAmem.`,
  },
  {
    titulo: '🌺 Ação de Graças Após a Crisma',
    texto: `Espírito Santo,\nrecebi hoje o Teu sinal.\nNão sei ainda o que isso significa\nem toda a sua profundidade —\nmas sei que Tu sabes.\n\nGuia-me. Fortifica-me.\nQuando eu tiver medo, recorda-me\nque não estou sozinho.\nQuando eu pecar, não me abandones.\nQuando eu duvidar, ilumina-me.\n\nFaze que eu seja testemunha\nnão de mim mesmo, mas de Cristo.\n\nAmem.`,
  },
]

export const timelineItems = [
  {
    data: 'Século I d.C.', titulo: 'A Igreja Apostólica',
    texto: `Os Apóstolos impunham as mãos sobre os batizados e eles recebiam o Espírito Santo
    (At 8,14-17; 19,1-7). Esta ação era tão central que São Paulo chama-a de "doutrina fundamental"
    (Hb 6,2). Em Atos 8, os samaritanos haviam sido batizados, mas Pedro e João foram enviados
    de Jerusalém especialmente para impor as mãos sobre eles — mostrando que o rito era distinto
    e necessário.`,
  },
  {
    data: 'Séculos II-III', titulo: 'A Unção Pós-Batismal',
    texto: `A Traditio Apostolica de Hipólito de Roma (c. 215 d.C.) descreve o rito: após o Batismo,
    o bispo derramava óleo sobre o batizando dizendo "Eu te uno com o óleo santo em Deus Pai
    Todo-Poderoso, em Cristo Jesus e no Espírito Santo." O rito já existia consolidado — Tertuliano,
    Cipriano e outros padres o mencionam como parte normal da iniciação.`,
  },
  {
    data: 'Séculos IV-V', titulo: 'A Separação dos Ritos',
    texto: `Com a expansão do Cristianismo pelo Império Romano, os bispos — únicos ministros
    ordinários da Confirmação — não conseguiam mais estar presentes em todos os batismos. O que
    antes era um único rito contínuo foi dividido: padres batizavam, e o bispo confirmava em
    visita posterior. No Oriente, os padres continuaram administrando ambos os sacramentos juntos
    — tradição que persiste até hoje nas Igrejas Orientais.`,
  },
  {
    data: 'Séculos VIII-IX', titulo: 'A Fórmula Medieval e a "Palmada"',
    texto: `Um costume surgiu no Ocidente medieval: o bispo dava uma leve palmada (ou toque na
    face) ao confirmando, simbolizando que o cristão deveria estar pronto para sofrer por Cristo.
    Essa prática, não parte do rito essencial, tornou-se muito popular e durou até o século XX.
    Muitos avós ainda se lembram de receber a "bofetada do bispo".`,
  },
  {
    data: '1215', titulo: 'Concílio de Latrão IV — Sacramentos Definidos',
    texto: `O IV Concílio do Latrão marca um ponto de maturidade teológica: os sete sacramentos
    são claramente listados, e a Confirmação figura entre eles. A teologia escolástica começará
    a articular sistematicamente sua natureza, causas e efeitos.`,
  },
  {
    data: '1439', titulo: 'Concílio de Florença — Definição Solene',
    texto: `O Decreto para os Armênios define formalmente: matéria da Confirmação é o crisma;
    forma são as palavras do bispo; ministro ordinário é o bispo. Esta definição, embora
    formulada para instrução dos Armênios, refletia a teologia comum da Igreja.`,
  },
  {
    data: '1545-1563', titulo: 'Concílio de Trento — Resposta à Reforma',
    texto: `Quando os reformadores protestantes rejeitaram a Confirmação como sacramento, Trento
    respondeu com vigor: "Se alguém disser que a Confirmação dos batizados é uma cerimônia ociosa
    e não verdadeiro e próprio sacramento... seja anátema" (DS 1628). A doutrina foi solidificada
    contra o erro.`,
  },
  {
    data: '1910', titulo: 'Quam Singulari — A Ordem dos Sacramentos',
    texto: `São Pio X baixa a idade de Primeira Comunhão para a idade da razão (~7 anos). Isso
    criou uma anomalia não planejada: crianças passaram a receber a Eucaristia antes da
    Confirmação, invertendo a ordem tradicional. Este debate sobre a ordem correta dos
    sacramentos persiste até hoje em algumas dioceses.`,
  },
  {
    data: '1971', titulo: 'Paulo VI — Novo Rito Oficial',
    texto: `A Constituição Apostólica Divinae Consortium Naturae de Paulo VI reformou o rito:
    a fórmula oficial passou a ser "Recebe o sinal do Dom do Espírito Santo", alinhando-se
    com a tradição oriental. O rito foi simplificado mas manteve toda sua substância.`,
  },
  {
    data: '1992-Hoje', titulo: 'Catecismo e Diretório Geral para a Catequese',
    texto: `O Catecismo de 1992 oferece a síntese mais completa da doutrina sobre a Confirmação
    (nn. 1285-1321). Debates contemporâneos incluem a idade ideal para receber o sacramento,
    a duração e qualidade da preparação, e como reconectar jovens que se "afastam após a crisma"
    com a vida eclesial.`,
  },
]

export const passosRito = [
  {
    num: 'PASSO 1', icon: '🏛️', titulo: 'Contexto: Dentro da Missa',
    texto: `A Confirmação é normalmente celebrada dentro da Santa Missa, para manifestar sua
    íntima conexão com a Eucaristia. O Rito da Confirmação pode também ser celebrado fora da
    Missa em circunstâncias especiais (como perigo de morte).`,
    extra: null as null,
  },
  {
    num: 'PASSO 2', icon: '📖', titulo: 'Liturgia da Palavra',
    texto: `As leituras são escolhidas para iluminar o mistério do Espírito Santo.
    Frequentemente usa-se o texto de Isaías 11 (os sete dons), Atos 2 (Pentecostes) ou
    João 14-16 (promessa do Paráclito).`,
    extra: null as null,
  },
  {
    num: 'PASSO 3', icon: '🎤', titulo: 'Renovação das Promessas Batismais',
    texto: `Os confirmandos respondem às perguntas do bispo: Renunciam a Satanás? Creem em
    Deus Pai, Filho e Espírito Santo? Creem na Igreja Católica? Este momento é teologicamente
    significativo: o que no Batismo foi prometido pelos pais e padrinhos é agora afirmado pela
    própria pessoa. A Crisma é a "fé assumida pessoalmente".`,
    extra: null as null,
  },
  {
    num: 'PASSO 4', icon: '🙌', titulo: 'Imposição das Mãos',
    texto: `O bispo (com outros sacerdotes presentes) estende as mãos sobre o conjunto dos
    confirmandos e reza a oração de invocação do Espírito Santo — chamada epiclese. Este gesto
    remonta à prática apostólica descrita nos Atos (8,17; 19,6) e é considerado o momento em
    que o Espírito é invocado sobre os candidatos.`,
    extra: 'imposicao' as 'imposicao' | null,
  },
  {
    num: 'PASSO 5', icon: '🫒', titulo: 'A Unção com o Santo Crisma',
    texto: `Este é o momento central e essencial do sacramento. O padrinho (ou madrinha)
    coloca a mão no ombro do confirmando. O bispo molha o polegar direito no crisma e traça
    uma cruz na fronte do confirmando.`,
    extra: 'uncao' as 'uncao' | null,
  },
  {
    num: 'PASSO 6', icon: '🙏', titulo: 'Oração dos Fiéis e Continuação da Missa',
    texto: `Após as unções de todos os confirmandos, a Missa prossegue normalmente.
    Os recém-confirmados são convidados a receber a comunhão de modo especialmente consciencioso
    — celebrando a plena integração na vida eclesial.`,
    extra: null as null,
  },
]

export const passosPreparacao = [
  {
    n: 1, titulo: 'Conhecer a Fé',
    texto: `A preparação catequética é obrigatória. O candidato deve conhecer os fundamentos
    da fé católica: o Credo, os Sacramentos, os Mandamentos, o Pai-Nosso, as virtudes, os
    pecados capitais. Não de modo mecânico, mas com compreensão. Paróquias costumam ter
    cursos de 1-2 anos.`,
  },
  {
    n: 2, titulo: 'Frequentar a Missa e os Sacramentos',
    texto: `A preparação não é só teórica. O candidato deve participar da vida da Igreja:
    missas dominicais, confissão regular, oração pessoal. Sem essa prática, o conhecimento
    teológico é vazio.`,
  },
  {
    n: 3, titulo: 'Escolher o Padrinho/Madrinha',
    texto: `O padrinho deve ser um católico praticante (batizado, confirmado, com comunhão
    regular), com pelo menos 16 anos, não ser o pai ou a mãe do confirmando, e estar
    disponível para acompanhar espiritualmente o confirmando — não apenas no dia da cerimônia.`,
  },
  {
    n: 4, titulo: 'Escolher o Nome de Santo',
    texto: `Tradição piedosa: escolher um santo como modelo e protetor. O candidato deve
    pesquisar a vida do santo escolhido, não apenas o nome. São João Bosco? São Francisco
    de Assis? Santa Teresa de Lisieux? Cada santo é uma proposta de como viver o Evangelho.`,
  },
  {
    n: 5, titulo: 'Fazer uma Boa Confissão',
    texto: `O CIC exige que o confirmando esteja em estado de graça. Por isso, é fortemente
    recomendado (e em muitas dioceses obrigatório) fazer a Confissão antes de receber a
    Crisma. Não por mera formalidade — mas para abrir o coração totalmente ao Espírito Santo.`,
  },
  {
    n: 6, titulo: 'Retiro Espiritual',
    texto: `Muitas dioceses exigem um retiro pré-crisma. É uma oportunidade de silêncio,
    oração e encontro pessoal com Deus antes do grande dia. Um dos momentos mais
    transformadores na preparação.`,
  },
  {
    n: 7, titulo: 'O Grande Dia — e o Que Vem Depois',
    texto: `A Crisma não é chegada — é partida. Paróquias conscientes ajudam os
    recém-confirmados a continuarem engajados: grupos de jovens, serviço pastoral,
    aprofundamento espiritual. O "afastamento pós-crisma" é uma das maiores preocupações
    pastorais da Igreja contemporânea.`,
  },
]

export const ministroRows = [
  ['Bispo diocesano', 'Sempre, em sua diocese', 'Oriental e Ocidental', 'Por direito próprio'],
  ['Padre (delegado pelo bispo)', 'Com licença específica', 'Ocidental (exceção)', 'Por delegação'],
  ['Padre (RCIA)', 'Iniciação de adultos', 'Ocidental', 'Por lei (can. 883)'],
  ['Padre oriental', 'Após o batismo, sempre', 'Só Oriental', 'Tradição apostólica'],
  ['Qualquer padre', 'Perigo de morte', 'Ocidental', 'Por lei (can. 883§3)'],
]

export const estatisticas = [
  { num: '~1.3B', label: 'Católicos no mundo — potencialmente crismados' },
  { num: '2000+', label: 'Anos de história ininterrupta do sacramento' },
  { num: '7', label: 'Dons do Espírito Santo conferidos' },
  { num: '1×', label: 'Só se recebe UMA vez na vida (caráter indelével)' },
]

export const documentos = [
  'CIC nn. 1285-1321',
  'Concílio de Trento (1547)',
  'Lumen Gentium 11',
  'Divinae Consortium Naturae (Paulo VI, 1971)',
  'RICA (Rito de Iniciação Cristã de Adultos)',
  'Rito da Confirmação (1973)',
  'Dominum et Vivificantem (JPII, 1986)',
  'Diretório para a Catequese (2020)',
]

export const footerLinks = [
  { href: '#o-que-e', label: 'O Que É' },
  { href: '#historia', label: 'História' },
  { href: '#dons', label: '7 Dons' },
  { href: '#frutos', label: '12 Frutos' },
  { href: '#santos', label: 'Santos' },
  { href: '#preparacao', label: 'Preparação' },
  { href: '#questoes', label: 'FAQ' },
]