export interface VersiculoCitado {
  referencia: string
  textoBiblico: string
}

export interface ArenaFala {
  id: string
  autor: string
  cargo: string
  avatar: string
  iniciais: string
  lado: 'ariano' | 'niceno' | 'centro'
  texto: string
  fonte: string
  versiculoCitado?: VersiculoCitado
  notaHistoriador?: string
}

export interface ArenaDebate {
  id: string
  titulo: string
  contexto: string
  falas: ArenaFala[]
  desfecho: string
}

export const debatesArena: ArenaDebate[] = [
  /* ─────────────────────────────────────────────────────
     DEBATE 1
     ───────────────────────────────────────────────────── */
  {
    id: 'debate-1',
    titulo: 'O Escândalo da Carta de Eusébio de Nicomédia',
    contexto:
      'A primeira sessão presenciou a leitura da profissão de fé de Eusébio de Nicomédia, cujas formulações abertamente arianas chocaram a maioria moderada dos bispos.',
    falas: [
      {
        id: 'd1-en',
        autor: 'Eusébio de Nicomédia',
        cargo: 'Bispo de Nicomédia',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/eusebio-nicomedia.jpg',
        iniciais: 'EN',
        lado: 'ariano',
        texto:
          'Afirmamos publicamente: o Filho não é não-gerado, nem parte do Não-Gerado. Ele foi criado pela vontade divina antes dos tempos, do não-existente, e houve um tempo em que Ele não existia.',
        fonte: 'Carta a Paulino de Tiro',
      },
      {
        id: 'd1-ea',
        autor: 'Eustácio de Antioquia',
        cargo: 'Bispo de Antioquia',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/eustacio.jpg',
        iniciais: 'EA',
        lado: 'niceno',
        texto:
          'Silêncio! Isto não é a fé dos apóstolos, mas uma inovação blasfema! Como ousais reduzir o Redentor do mundo a uma mera criatura do tempo?',
        fonte: 'Teodoreto, HE I.7',
      },
      {
        id: 'd1-ar',
        autor: 'Ário',
        cargo: 'Presbítero de Alexandria',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/ario.jpg',
        iniciais: 'AR',
        lado: 'ariano',
        texto:
          'Se o Pai o gerou, lógica e gramaticalmente aquele que foi gerado tem um princípio de existência! Deus é único e incriado; tudo o mais é obra de Suas mãos.',
        fonte: 'Thalia',
        versiculoCitado: {
          referencia: 'Provérbios 8:22',
          textoBiblico:
            '「O Senhor me criou no princípio de suas obras, antes de seus feitos de outrora.」',
        },
      },
      {
        id: 'd1-aa',
        autor: 'Alexandre de Alexandria',
        cargo: 'Bispo de Alexandria',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/alexandre.jpg',
        iniciais: 'AA',
        lado: 'niceno',
        texto:
          'Blasfêmia! Deus nunca esteve sem a Sua Palavra e a Sua Sabedoria! Dizer "houve um tempo em que o Filho não existia" é inventar uma época em que Deus era cego e sem Luz!',
        fonte: 'Epístola Encíclica',
        versiculoCitado: {
          referencia: 'João 1:1-3',
          textoBiblico:
            '「No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus. Ele estava no princípio com Deus. Todas as coisas foram feitas por Ele, e sem Ele nada do que foi feito se fez.」',
        },
      },
      {
        id: 'd1-at',
        autor: 'Atanásio de Alexandria',
        cargo: 'Diácono de Alexandria',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/atanasio.jpg',
        iniciais: 'AT',
        lado: 'niceno',
        texto:
          'Vós usais a razão humana para medir a essência inefável de Deus. João declara: "No princípio era o Verbo, e o Verbo era Deus" (Jo 1:1). Se o Filho fosse criatura, Sua morte não teria poder para redimir a humanidade!',
        fonte: 'Oratio c. Arianos I.11',
        notaHistoriador:
          'Atanásio introduz aqui o argumento soteriológico que se tornaria sua marca registrada: se Cristo não é plenamente Deus, a salvação é impossível. Este raciocínio dominaria a teologia do séc. IV.',
      },
    ],
    desfecho:
      'Diante da indignação geral, a carta foi tirada das mãos do leitor, rasgada publicamente no plenário e os arianos perderam a iniciativa teológica.',
  },

  /* ─────────────────────────────────────────────────────
     DEBATE 2
     ───────────────────────────────────────────────────── */
  {
    id: 'debate-2',
    titulo: 'A Batalha dos Versículos: Provérbios 8 vs. João 1',
    contexto:
      'O debate central girou em torno da interpretação das Escrituras. Arianos e nicenos invocavam textos bíblicos opostos para fundamentar a natureza do Filho.',
    falas: [
      {
        id: 'd2-ar',
        autor: 'Ário',
        cargo: 'Presbítero de Alexandria',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/ario.jpg',
        iniciais: 'AR',
        lado: 'ariano',
        texto:
          'O próprio Salomão testemunha: "O Senhor me criou no princípio de suas obras". A Sabedoria é criada, não coeterna. Se o Filho é a Sabedoria de Deus, Ele é a primeira de Suas criaturas.',
        fonte: 'Thalia / De Synodis 16',
        versiculoCitado: {
          referencia: 'Provérbios 8:22-25',
          textoBiblico:
            '「O Senhor me criou no princípio de suas obras, antes de seus feitos de outrora. Fui estabelecida desde a eternidade, desde o princípio, antes que a terra existisse. Quando não havia abismos, fui gerada; quando não havia nasceres de águas.」',
        },
        notaHistoriador:
          'Ário interpreta Provérbios de forma literal-personal, identificando a "Sabedoria" de Salomão com o Verbo joanino. Esta leitura-era compartilhada por vários bispos orientais influenciados pela tradição origenista.',
      },
      {
        id: 'd2-at',
        autor: 'Atanásio de Alexandria',
        cargo: 'Diácono de Alexandria',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/atanasio.jpg',
        iniciais: 'AT',
        lado: 'niceno',
        texto:
          'Provérbios fala da Sabedoria criada em sentido tipológico, não da essência eterna do Verbo. João é claro: "No princípio era o Verbo, e o Verbo era Deus". Não diz "foi criado", diz "era" — existência sem começo!',
        fonte: 'Oratio c. Arianos II.14-18',
        versiculoCitado: {
          referencia: 'João 1:1-3',
          textoBiblico:
            '「No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus. Ele estava no princípio com Deus. Todas as coisas foram feitas por Ele, e sem Ele nada do que foi feito se fez.」',
        },
      },
      {
        id: 'd2-en',
        autor: 'Eusébio de Nicomédia',
        cargo: 'Bispo de Nicomédia',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/eusebio-nicomedia.jpg',
        iniciais: 'EN',
        lado: 'ariano',
        texto:
          'Mesmo João reconhece a subordinação: "O Pai é maior do que eu". Se o Pai é maior, há hierarquia. Se há hierarquia, não há igualdade de essência.',
        fonte: 'Carta a Eusébio de Cesareia',
        versiculoCitado: {
          referencia: 'João 14:28',
          textoBiblico:
            '「Ouvistes que eu vos disse: Vou, e voltarei para vós. Se me amasseis, alegrar-vos--íeis, porque eu vou para o Pai, porque o Pai é maior do que eu.」',
        },
      },
      {
        id: 'd2-aa',
        autor: 'Alexandre de Alexandria',
        cargo: 'Bispo de Alexandria',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/alexandre.jpg',
        iniciais: 'AA',
        lado: 'niceno',
        texto:
          'O texto de João 14:28 refere-se à economia da encarnação, quando o Verbo se fez homem e se submeteu voluntariamente. Na essência divina, Cristo proclama: "Eu e o Pai somos um"',
        fonte: 'Epístola Encíclica',
        versiculoCitado: {
          referencia: 'João 10:30',
          textoBiblico:
            '「Eu e o Pai somos um.」',
        },
        notaHistoriador:
          'Alexandre aplica aqui a distinção entre "essência" (ousía) e "economia" (oikonomia) — recurso hermenêutico que se tornaria fundamental na teologia capadócia. Os textos de humilhação referem-se ao estado encarnado, não à divindade.',
      },
      {
        id: 'd2-ar2',
        autor: 'Ário',
        cargo: 'Presbítero de Alexandria',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/ario.jpg',
        iniciais: 'AR',
        lado: 'ariano',
        texto:
          'Colossenses 1:15 chama o Filho de "primogênito de toda criatura" e Hebreus 3:2 diz que Ele foi "fiel ao que o constituiu". Se é primogênito, há outros antes dele. Se foi constituído, teve um constituidor.',
        fonte: 'Thalia',
        versiculoCitado: {
          referencia: 'Colossenses 1:15',
          textoBiblico:
            '「Ele é a imagem do Deus invisível, o primogênito de toda criatura.」',
        },
      },
      {
        id: 'd2-at2',
        autor: 'Atanásio de Alexandria',
        cargo: 'Diácono de Alexandria',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/atanasio.jpg',
        iniciais: 'AT',
        lado: 'niceno',
        texto:
          '"Primogênito" no sentido de "preeminente", não temporal. Paulo continua: "Nele foram criadas todas as coisas... Ele é antes de todas as coisas, e todas nEle subsistem". O Filho é o Criador, não a criatura!',
        fonte: 'Oratio c. Arianos II.42-46',
        versiculoCitado: {
          referencia: 'Colossenses 1:16-17',
          textoBiblico:
            '「Porque nele foram criadas todas as coisas que há nos céus e na terra, visíveis e invisíveis... Ele é antes de todas as coisas, e todas nEle subsistem.」',
        },
        notaHistoriador:
          'A exegese atanasiana de "primogênito" (prōtótokos) como "preeminente" e não "temporalmente primeiro" tornou-se a leitura dominante na tradição ortodoxa. A frase "todas nEle subsistem" (synestēken) é interpretada como sustentação ontológica contínua.',
      },
    ],
    desfecho:
      'Nenhum lado conseguiu vitória exegética decisiva. Ficou claro que a linguagem bíblica por si só não resolveria a controvérsia, preparando o terreno para o termo filosófico "Homoousios".',
  },

  /* ─────────────────────────────────────────────────────
     DEBATE 3
     ───────────────────────────────────────────────────── */
  {
    id: 'debate-3',
    titulo: "A Cláusula 'Homoousios' e o Dilema Filosófico",
    contexto:
      "Para fechar brechas na interpretação bíblica, os bispos buscaram uma palavra inequívoca. O termo não-bíblico 'Homoousios' (Consubstancial) gerou intenso debate.",
    falas: [
      {
        id: 'd3-ar',
        autor: 'Ário',
        cargo: 'Presbítero de Alexandria',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/ario.jpg',
        iniciais: 'AR',
        lado: 'ariano',
        texto:
          'O termo "Homoousios" não consta nas Santas Escrituras! Inserir filosofia grega no Credo é sabelianismo, pois sugere que a substância do Pai foi dividida ou estendida como matéria!',
        fonte: 'De Synodis 16',
      },
      {
        id: 'd3-at',
        autor: 'Atanásio de Alexandria',
        cargo: 'Diácono de Alexandria',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/atanasio.jpg',
        iniciais: 'AT',
        lado: 'niceno',
        texto:
          'Vós aceitais qualquer texto bíblico porque o torceis com metáforas! Se usamos "imagem de Deus", dizeis que o homem também é imagem. Precisamos de um termo inequívoco que feche as brechas da vossa heresia!',
        fonte: 'De Decretis 19',
        notaHistoriador:
          'Atanásio percebeu que a ambiguidade bíblica era explorada pelos arianos. O termo "homoousios" foi escolhido justamente por NÃO estar na Bíblia — assim não poderia ser reinterpretado com sentido subordinacionista.',
      },
      {
        id: 'd3-ec',
        autor: 'Eusébio de Cesareia',
        cargo: 'Bispo de Cesareia',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/eusebio-cesareia.jpg',
        iniciais: 'EC',
        lado: 'centro',
        texto:
          'Hesitamos diante de palavras não-bíblicas. Podemos aceitar a fórmula se ela significar que o Filho é "semelhante em tudo ao Pai" (Homoiousios), sem conotação de divisão material?',
        fonte: 'Carta à Diocese',
        notaHistoriador:
          'Eusébio de Cesareia propôs o "Homoiousios" (semelhante em substância) como solução de compromisso. Esta fórmula intermediária foi rejeitada tanto pelos nicenos radicais quanto pelos arianos, mas revela a complexidade do espectro teológico presente em Niceia.',
      },
      {
        id: 'd3-oc',
        autor: 'Ósio de Córdova',
        cargo: 'Legado papal',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/osio.jpg',
        iniciais: 'OC',
        lado: 'niceno',
        texto:
          '"Semelhante" é insuficiente! A semelhança aplica-se a coisas criadas. Entre Pai e Filho há identidade de natureza divina. A geração do Filho é espiritual, inefável e coeterna.',
        fonte: 'Atanásio, Hist. Arianorum',
      },
      {
        id: 'd3-c1',
        autor: 'Constantino I',
        cargo: 'Imperador Romano',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/constantino.jpg',
        iniciais: 'C1',
        lado: 'centro',
        texto:
          'Suficiente! O termo "Homoousios" expressa a unidade divina sem divisão física. Exorto esta assembleia a adotar esta palavra para selar a paz e a concórdia do Império!',
        fonte: 'Vita Constantini III.12',
        notaHistoriador:
          'Constantino compreendia que "homoousios" era uma fórmula política tanto quanto teológica: ao proibir a divisão da essência divina, impedia que facções rivalizassem por "partes" da verdade. Embora a maioria dos bispos fosse filosoficamente hesitante, a autoridade imperial selou o consenso.',
      },
    ],
    desfecho:
      "A palavra 'Homoousios' foi oficialmente inserida no Credo de Niceia, tornando-se o critério supremo da cristologia ortodoxa.",
  },

  /* ─────────────────────────────────────────────────────
     DEBATE 4
     ───────────────────────────────────────────────────── */
  {
    id: 'debate-4',
    titulo: 'A Padronização do Calendário da Páscoa',
    contexto:
      'Além da controvérsia ariana, o concílio tratou da unificação da data da Páscoa, rompendo com o cômputo lunar judaico usado por bispos da Síria.',
    falas: [
      {
        id: 'd4-sir',
        autor: 'Bispos Protopasquitas',
        cargo: 'Delegados da Síria',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/ario.jpg',
        iniciais: 'PS',
        lado: 'ariano',
        texto:
          'Nossos pais celebravam a Páscoa no mesmo dia da Páscoa judaica, no 14 do mês de Nisã. Esta é a tradição apostólica de João Evangelista em Éfeso. Por que devemos abandonar o costume dos apóstolos?',
        fonte: 'Eusébio, HE V.23',
        notaHistoriador:
          'Os "protopasquitas" (observantes do 14º dia) seguiam a tradição joanina documentada por Eusébio. Niceia os equiparou implicitamente aos judeus ao proibir a-celebração simultânea, embora sua motivação fosse cristológica, não antijudaica.',
      },
      {
        id: 'd4-alx',
        autor: 'Astrônomos de Alexandria',
        cargo: 'Comissão Científica',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/alexandre.jpg',
        iniciais: 'AX',
        lado: 'niceno',
        texto:
          'O cômputo alexandrino baseia-se em ciclos solares e lunares calculados com precisão matemática. A data da Páscoa deve ser fixada pelo primeiro domingo após a lua cheia pós-equinócio, não pelo calendário lunar judaico.',
        fonte: 'Canon 1 de Niceia (tradição)',
      },
      {
        id: 'd4-c1',
        autor: 'Constantino I',
        cargo: 'Imperador Romano',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/constantino.jpg',
        iniciais: 'C1',
        lado: 'centro',
        texto:
          'Nada em comum com os judeus! É indigno que, depois de terem nas suas mãos o Salvador, imitemos os costumes dos astutos inimigos da verdade. Não há nada mais vergonhoso do que celebrar a Páscoa junto com eles.',
        fonte: 'Eusébio, VC IV.18',
        notaHistoriador:
          'O tom antijudaico de Constantino é inegável, mas o objetivo prático era a unificação litúrgica do Império. A separação calendárica cristã/judaica consolidou-se como política eclesiástica por séculos.',
      },
      {
        id: 'd4-oc',
        autor: 'Ósio de Córdova',
        cargo: 'Legado papal',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/osio.jpg',
        iniciais: 'OC',
        lado: 'niceno',
        texto:
          'A Sé de Alexandria possui a mais antiga tradição de cálculo astronômico, remontando a São Marcos. Devemos confiar ao bispo de Alexandria a responsabilidade de calcular e comunicar a data exata cada ano.',
        fonte: 'Canon 1 de Niceia (interpretação)',
      },
      {
        id: 'd4-ec',
        autor: 'Eusébio de Cesareia',
        cargo: 'Bispo de Cesareia',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/eusebio-cesareia.jpg',
        iniciais: 'EC',
        lado: 'centro',
        texto:
          'A uniformidade pascal é símbolo da unidade da Igreja. Assim como uma só fé, um só batismo, devemos ter uma só celebração da Ressurreição em todo o mundo cristão.',
        fonte: 'HE X.5',
      },
    ],
    desfecho:
      'Ficou estabelecido que a Páscoa seria celebrada no primeiro domingo após a primeira lua cheia da primavera no hemisfério norte, sendo o bispo de Alexandria responsável pelo cálculo astronômico.',
  },

  /* ─────────────────────────────────────────────────────
     DEBATE 5
     ───────────────────────────────────────────────────── */
  {
    id: 'debate-5',
    titulo: "O Cisma Meleciano e os 'Lapsi'",
    contexto:
      'O bispo Melecio de Licópolis havia criado um sínodo paralelo no Egito recusando a readmissão fácil daqueles que fraquejaram nas perseguições de Diocleciano.',
    falas: [
      {
        id: 'd5-mel',
        autor: 'Melecio de Licópolis',
        cargo: 'Bispo de Licópolis',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/ario.jpg',
        iniciais: 'ML',
        lado: 'ariano',
        texto:
          'Aqueles que entregaram as Escrituras aos perseguidores e ofereceram incenso aos ídolos não podem ser simplesmente readmitidos pela imposição de mãos. A Igreja precisa de purificação, não de complacência!',
        fonte: 'Atanásio, Apologia c. Arianos',
        notaHistoriador:
          'Melecio representava a corrente rigorista que via os "lapsi" (caídos) como traidores. Seu sínodo paralelo ameaçava a hierarquia alexandrina e criava um precedente de cisma jurisdicional no Egito.',
      },
      {
        id: 'd5-aa',
        autor: 'Alexandre de Alexandria',
        cargo: 'Bispo de Alexandria',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/alexandre.jpg',
        iniciais: 'AA',
        lado: 'niceno',
        texto:
          'Melecio age por zelo excessivo, não por sabedoria pastoral. A misericórdia é marca da Igreja, não a severidade. A própria Tradição ensina que os mártires podem interceder pelos caídos.',
        fonte: 'Epístola Encíclica',
      },
      {
        id: 'd5-paf',
        autor: 'Pafnúcio do Egito',
        cargo: 'Confessor e Bispo da Tebaida',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/atanasio.jpg',
        iniciais: 'PF',
        lado: 'niceno',
        texto:
          'Eu próprio perdi o olho e o tendão pela fé. Perdoei meus algozes. Como não haveríamos de perdoar irmãos que fraquejaram sob tortura? A reconciliação é a alma do Evangelho.',
        fonte: 'Atanásio, Vita Antonii',
        notaHistoriador:
          'Pafnúcio, como confessor (mártire vivo), tinha autoridade moral extraordinária. Sua presença em Niceia e seu testemunho pessoal foram decisivos para a aceitação da solução pastoral moderada.',
      },
      {
        id: 'd5-c1',
        autor: 'Constantino I',
        cargo: 'Imperador Romano',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/constantino.jpg',
        iniciais: 'C1',
        lado: 'centro',
        texto:
          'A concórdia deve prevalecer. Melecio conservará seu título episcopal como honra, mas não exercerá jurisdição ativa. Seus clérigos, se virtuosos, poderão ser reabsorvidos pela imposição de mãos.',
        fonte: 'Carta imperial (presumida)',
      },
      {
        id: 'd5-at',
        autor: 'Atanásio de Alexandria',
        cargo: 'Diácono de Alexandria',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/atanasio.jpg',
        iniciais: 'AT',
        lado: 'niceno',
        texto:
          'A solução é sábia: preserva a unidade sem comprometer a disciplina. Melecio mantém a dignidade, mas a autoridade pastoral permanece onde sempre esteve — na Sé de Alexandre.',
        fonte: 'Apologia c. Arianos',
      },
    ],
    desfecho:
      'Niceia adotou uma solução pastoral moderada: Melecio manteve o título episcopal honorífico, mas sem jurisdição ativa, e seus clérigos foram reabsorvidos após imposição de mãos.',
  },

  /* ─────────────────────────────────────────────────────
     DEBATE 6
     ───────────────────────────────────────────────────── */
  {
    id: 'debate-6',
    titulo: 'A Assinatura do Credo, Anátemas e Exílios',
    contexto:
      'Após a redação final do Credo de Niceia com os 4 anátemas explícitos, o imperador exigiu a subscrição de todos sob pena de banimento.',
    falas: [
      {
        id: 'd6-oc',
        autor: 'Ósio de Córdova',
        cargo: 'Legado papal',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/osio.jpg',
        iniciais: 'OC',
        lado: 'niceno',
        texto:
          'A fé dos apóstolos foi definida. Todos os bispos presentes devem subscrever o Credo e os anátemas contra as teses arianas. Quem se recusa, recusa a própria Igreja.',
        fonte: 'Atas de Niceia',
      },
      {
        id: 'd6-ec',
        autor: 'Eusébio de Cesareia',
        cargo: 'Bispo de Cesareia',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/eusebio-cesareia.jpg',
        iniciais: 'EC',
        lado: 'centro',
        texto:
          'Após as devidas explicações do imperador de que "consubstancial" não implica visão materialista, assino em nome da paz da Igreja e da unidade dos fiéis. A fórmula é aceitável quando bem compreendida.',
        fonte: 'Carta à Diocese',
        notaHistoriador:
          'A carta de Eusébio de Cesareia à sua diocese é um documento crucial: revela como o bispo mais influente do Oriente justificou sua assinatura. Ele reframou "homoousios" em termos que sua tradição origenista podia aceitar, facilitando a aceitação do credo por dezenas de bispos hesitantes.',
      },
      {
        id: 'd6-sp',
        autor: 'Secundo de Ptolemaida',
        cargo: 'Bispo de Ptolemaida',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/ario.jpg',
        iniciais: 'SP',
        lado: 'ariano',
        texto:
          'Não assinaremos! A fórmula de Alexandria destrói a monarquia do Pai. Preferimos o banimento a trair a verdade que pregamos na Líbia!',
        fonte: 'Sócrates, HE I.9',
      },
      {
        id: 'd6-tm',
        autor: 'Teona de Marmárica',
        cargo: 'Bispo de Marmárica',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/ario.jpg',
        iniciais: 'TM',
        lado: 'ariano',
        texto:
          'Estamos com Secundo e Ário. Nenhuma ameaça imperial nos fará aceitar que uma pessoa gerada seja coeterna ao seu Gerador.',
        fonte: 'Sozômeno, HE I.21',
      },
      {
        id: 'd6-at',
        autor: 'Atanásio de Alexandria',
        cargo: 'Diácono de Alexandria',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/atanasio.jpg',
        iniciais: 'AT',
        lado: 'niceno',
        texto:
          'A Igreja estendeu a mão da concórdia, mas quem rejeita a divindade plena do Filho coloca-se voluntariamente fora da comunhão católica. Não é a assinatura que salva, é a fé que ela expressa.',
        fonte: 'Apologia c. Arianos',
      },
      {
        id: 'd6-c1',
        autor: 'Constantino I',
        cargo: 'Imperador Romano',
        avatar: '/estudos/concilios/niceia-1/o-concilio/personagens/constantino.jpg',
        iniciais: 'C1',
        lado: 'centro',
        texto:
          'A decisão está tomada. Quem não assinar o Credo será banido do Império. Os escritos de Ário serão queimados publicamente. A unidade da fé não é negociável.',
        fonte: 'Sócrates, HE I.9 / Sozômeno, HE I.20',
        notaHistoriador:
          'O decreto de queima dos escritos arianos é o primeiro registro de censura religiosa estatal no cristianismo. Estabeleceu o precedente — trágico — de que divergência doutrinária poderia ser punida com penas civis.',
      },
    ],
    desfecho:
      '316 dos 318 bispos assinaram. Apenas Secundo e Teona recusaram irrevogavelmente e foram exilados juntamente com Ário para a Ilíria. Os escritos de Ário foram queimados por decreto imperial.',
  },
]
