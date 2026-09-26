// app/estudos/concilios/constantinopla-2/_data/credo.ts

export interface TextoTrilingue {
  grego: string;
  latim: string;
  portugues: string;
}

export interface ComparacaoConciliar {
  aspecto: string;
  niceia325: string;
  constantinopla381: string;
  efeso431: string;
  calcedonia451: string;
  constantinopla553: string;
}

export interface Credo {
  introducao: {
    titulo: string;
    explicacao: string;
    motivoAusenciaNovoCredo: string;
    confirmacaoSolemne: string;
  };
  credoNiceno: {
    titulo: string;
    contexto: string;
    texto: TextoTrilingue;
    notaTextual: string;
  };
  definicaoCalcedonia: {
    titulo: string;
    contexto: string;
    textoCentral: TextoTrilingue;
    quatroAdverbios: {
      grego: string;
      latim: string;
      portugues: string;
      significado: string;
    }[];
    notaHermeneutica: string;
  };
  formulaTheopaschita: {
    titulo: string;
    contexto: string;
    texto: TextoTrilingue;
    explicacao: string;
    baseConciliar: string;
  };
  comparacao: {
    titulo: string;
    introducao: string;
    tabela: ComparacaoConciliar[];
    sinteseFinal: string;
  };
}

export const credo: Credo = {
  introducao: {
    titulo: "Constantinopla II e a Confirmação Solemne da Fé Niceno-Calcedonense",
    explicacao:
      "O Segundo Concílio de Constantinopla (553 d.C.) não redigiu um novo Símbolo da Fé (symbolum / creed) nem uma nova Definição dogmática (horos / definitio) no sentido técnico em que Niceia (325) produziu o Credo Niceno, Constantinopla I (381) o expandiu, e Calcedônia (451) formulou a Definição das duas naturezas. A razão fundamental dessa ausência é que o concílio de 553 não foi convocado para definir uma nova doutrina, mas para interpretar e aplicar corretamente a doutrina já definida pelos quatro concílios anteriores. A controvérsia dos Três Capítulos era, em sua essência, uma disputa hermenêutica sobre como ler Calcedônia: os nestorianos a liam através das lentes de Teodoro de Mopsuéstia; os miáfisitas a rejeitavam como intrinsecamente nestoriana; os neocalcedonianos a liam através das lentes de Cirilo de Alexandria. O concílio de 553 resolveu essa disputa hermenêutica não criando um novo credo, mas reafirmando solenemente os credos e definições anteriores e declarando que a leitura ciriliana de Calcedônia era a única legítima.",
    motivoAusenciaNovoCredo:
      "A ausência de um novo credo em 553 reflete três fatores teológicos e históricos: (1) O princípio da suficiência do Símbolo Niceno-Constantinopolitano, que desde o Concílio de Éfeso (431, Cânone 7) era considerado a expressão completa e insuperável da fé trinitária e cristológica da Igreja. O Cânone 7 de Éfeso proibira explicitamente a composição de qualquer credo alternativo ('Ninguém ouse escrever ou compor outra fé além da que foi definida pelos santos Padres reunidos em Niceia'), e essa proibição foi reafirmada por Calcedônia (451) e por Constantinopla II (553). (2) O caráter interpretativo do concílio: Constantinopla II não precisava definir novas verdades de fé, mas apenas declarar que certas interpretações de Calcedônia (a leitura antioquena de Teodoro) eram heréticas e que outras (a leitura ciriliana) eram ortodoxas. (3) O contexto político: a convocação do concílio por Justiniano tinha como objetivo a reconciliação com os miáfisitas, e a produção de um novo credo teria sido interpretada como uma substituição de Calcedônia, o que teria alienado os calcedonianos sem satisfazer os miáfisitas.",
    confirmacaoSolemne:
      "Em vez de um novo credo, o concílio de 553 produziu a Sentença Sinodal (Sententia Synodalis / Horos tēs Synodou), que funciona como uma 'meta-definição' dogmática: um documento que não define novas verdades, mas declara como devem ser lidas e interpretadas as definições anteriores. A Sentença reafirma explicitamente 'a fé dos quatro concílios ecumênicos — Niceia, Constantinopla, Éfeso e Calcedônia' como 'uma e indivisível' e declara que os catorze anátemas do concílio são a aplicação legítima dessa fé às questões suscitadas pela controvérsia dos Três Capítulos. O resultado é um edifício dogmático de cinco andares, no qual cada concílio interpreta e complementa os anteriores sem contradizê-los: Niceia define a consubstancialidade do Filho; Constantinopla I completa a pneumatologia; Éfeso dogmatiza a Theotokos; Calcedônia formula a união em duas naturezas; Constantinopla II declara que Calcedônia deve ser lida à luz de Cirilo e que a fórmula teopasquista é expressão legítima da fé calcedonense.",
  },

  credoNiceno: {
    titulo: "O Credo Niceno-Constantinopolitano Reafirmado em 553",
    contexto:
      "O Símbolo Niceno-Constantinopolitano (381), frequentemente chamado de 'Credo Niceno' na tradição litúrgica, foi solenemente reafirmado na primeira sessão do concílio de 553 (5 de maio de 553), quando o patriarca Eutíquio de Constantinopla abriu os trabalhos com uma profissão de fé trinitária baseada no texto de 381. A carta imperial de Justiniano, lida na mesma sessão, declarava que 'a fé dos quatro concílios ecumênicos é uma e indivisível' e que o Símbolo de Niceia-Constantinopla era a norma suprema de ortodoxia trinitária. O texto abaixo é o Credo Niceno-Constantinopolitano na forma em que foi recitado e reafirmado pelo concílio de 553, sem a cláusula Filioque (que ainda não havia sido inserida no Credo no Oriente nem no Ocidente em 553).",
    texto: {
      grego:
        "Πιστεύομεν εἰς ἕνα Θεόν, Πατέρα, Παντοκράτορα, ποιητὴν οὐρανοῦ καὶ γῆς, ὁρατῶν τε πάντων καὶ ἀοράτων. Καὶ εἰς ἕνα Κύριον Ἰησοῦν Χριστόν, τὸν Υἱὸν τοῦ Θεοῦ τὸν μονογενῆ, τὸν ἐκ τοῦ Πατρὸς γεννηθέντα πρὸ πάντων τῶν αἰώνων· φῶς ἐκ φωτός, Θεὸν ἀληθινὸν ἐκ Θεοῦ ἀληθινοῦ, γεννηθέντα οὐ ποιηθέντα, ὁμοούσιον τῷ Πατρί, δι᾽ οὗ τὰ πάντα ἐγένετο. Τὸν δι᾽ ἡμᾶς τοὺς ἀνθρώπους καὶ διὰ τὴν ἡμετέραν σωτηρίαν κατελθόντα ἐκ τῶν οὐρανῶν καὶ σαρκωθέντα ἐκ Πνεύματος Ἁγίου καὶ Μαρίας τῆς Παρθένου καὶ ἐνανθρωπήσαντα. Σταυρωθέντα τε ὑπὲρ ἡμῶν ἐπὶ Ποντίου Πιλάτου καὶ παθόντα καὶ ταφέντα. Καὶ ἀναστάντα τῇ τρίτῃ ἡμέρᾳ κατὰ τὰς Γραφάς. Καὶ ἀνελθόντα εἰς τοὺς οὐρανοὺς καὶ καθεζόμενον ἐκ δεξιῶν τοῦ Πατρός. Καὶ πάλιν ἐρχόμενον μετὰ δόξης κρῖναι ζῶντας καὶ νεκρούς, οὗ τῆς βασιλείας οὐκ ἔσται τέλος. Καὶ εἰς τὸ Πνεῦμα τὸ Ἅγιον, τὸ Κύριον, τὸ ζωοποιόν, τὸ ἐκ τοῦ Πατρὸς ἐκπορευόμενον, τὸ σὺν Πατρὶ καὶ Υἱῷ συμπροσκυνούμενον καὶ συνδοξαζόμενον, τὸ λαλῆσαν διὰ τῶν προφητῶν. Εἰς μίαν, ἁγίαν, καθολικὴν καὶ ἀποστολικὴν Ἐκκλησίαν. Ὁμολογοῦμεν ἓν βάπτισμα εἰς ἄφεσιν ἁμαρτιῶν. Προσδοκῶμεν ἀνάστασιν νεκρῶν. Καὶ ζωὴν τοῦ μέλλοντος αἰῶνος. Ἀμήν.",
      latim:
        "Credo in unum Deum, Patrem omnipotentem, factorem caeli et terrae, visibilium omnium et invisibilium. Et in unum Dominum Iesum Christum, Filium Dei unigenitum, et ex Patre natum ante omnia saecula: Lumen de Lumine, Deum verum de Deo vero, genitum non factum, consubstantialem Patri, per quem omnia facta sunt. Qui propter nos homines et propter nostram salutem descendit de caelis et incarnatus est de Spiritu Sancto ex Maria Virgine et homo factus est. Crucifixus etiam pro nobis sub Pontio Pilato, passus et sepultus est. Et resurrexit tertia die secundum Scripturas. Et ascendit in caelum, sedet ad dexteram Patris. Et iterum venturus est cum gloria iudicare vivos et mortuos, cuius regni non erit finis. Et in Spiritum Sanctum, Dominum et vivificantem, qui ex Patre procedit, qui cum Patre et Filio simul adoratur et conglorificatur, qui locutus est per prophetas. Et unam, sanctam, catholicam et apostolicam Ecclesiam. Confiteor unum baptisma in remissionem peccatorum. Exspecto resurrectionem mortuorum. Et vitam venturi saeculi. Amen.",
      portugues:
        "Cremos em um só Deus, Pai todo-poderoso, criador do céu e da terra, de todas as coisas visíveis e invisíveis. E em um só Senhor, Jesus Cristo, Filho unigênito de Deus, gerado do Pai antes de todos os séculos: Luz da Luz, Deus verdadeiro de Deus verdadeiro, gerado, não criado, consubstancial ao Pai, por quem todas as coisas foram feitas. O qual, por nós, homens, e por nossa salvação, desceu dos céus e se encarnou pelo Espírito Santo na Virgem Maria e se fez homem. Foi crucificado por nós sob Pôncio Pilatos, padeceu e foi sepultado. Ressuscitou ao terceiro dia, segundo as Escrituras. Subiu aos céus e está sentado à direita do Pai. E de novo há de vir com glória para julgar os vivos e os mortos, e o seu reino não terá fim. E no Espírito Santo, Senhor que dá a vida, que procede do Pai, que com o Pai e o Filho é juntamente adorado e glorificado, que falou pelos profetas. E em uma só Igreja, santa, católica e apostólica. Confessamos um só batismo para remissão dos pecados. Esperamos a ressurreição dos mortos e a vida do mundo vindouro. Amém.",
    },
    notaTextual:
      "O texto acima é o Credo Niceno-Constantinopolitano na forma original de 381, sem a cláusula Filioque ('e do Filho') que foi inserida gradualmente na tradição latina a partir do Concílio de Toledo III (589) e que se tornou fonte de controvérsia entre Oriente e Ocidente a partir do século IX. O concílio de 553 reafirmou o Credo na forma original de 381, com a processão do Espírito 'do Pai' (ek tou Patros / ex Patre), conforme a tradição comum a Oriente e Ocidente no século VI. A cláusula Filioque não foi objeto de debate em 553 e não consta de nenhum documento do concílio.",
  },

  definicaoCalcedonia: {
    titulo: "A Definição de Calcedônia (451) Reafirmada e Reinterpretada em 553",
    contexto:
      "A Definição de Calcedônia (Horos tēs en Chalkēdoni synodou), promulgada na Sessão VI do Concílio de Calcedônia em 25 de outubro de 451, é o texto cristológico mais importante da história do cristianismo e foi solenemente reafirmado pelo concílio de 553 como parte da 'fé una e indivisível dos quatro concílios ecumênicos'. Contudo, a reafirmação de 553 não foi uma mera repetição literal, mas uma reinterpretação hermenêutica: o concílio de 553 declarou que a Definição de Calcedônia deve ser lida 'à luz dos Doze Capítulos do santo Cirilo de Alexandria' e que qualquer leitura que se afaste da tradição ciriliana é ipso facto nestoriana e ilegítima. O texto central da Definição, transcrito abaixo, é a passagem cristológica propriamente dita, que formula a doutrina da união hipostática em duas naturezas.",
    textoCentral: {
      grego:
        "Ἕνα καὶ τὸν αὐτὸν ὁμολογεῖν Υἱόν, τὸν Κύριον ἡμῶν Ἰησοῦν Χριστόν, τέλειον τὸν αὐτὸν ἐν θεότητι καὶ τέλειον τὸν αὐτὸν ἐν ἀνθρωπότητι, Θεὸν ἀληθῶς καὶ ἄνθρωπον ἀληθῶς τὸν αὐτόν, ἐκ ψυχῆς λογικῆς καὶ σώματος, ὁμοούσιον τῷ Πατρὶ κατὰ τὴν θεότητα, καὶ ὁμοούσιον τὸν αὐτὸν ἡμῖν κατὰ τὴν ἀνθρωπότητα, κατὰ πάντα ὅμοιον ἡμῖν χωρὶς ἁμαρτίας· πρὸ αἰώνων μὲν ἐκ τοῦ Πατρὸς γεννηθέντα κατὰ τὴν θεότητα, ἐπ᾽ ἐσχάτων δὲ τῶν ἡμερῶν τὸν αὐτὸν ὑπὲρ ἡμῶν καὶ διὰ τὴν ἡμετέραν σωτηρίαν ἐκ Μαρίας τῆς Παρθένου τῆς Θεοτόκου κατὰ τὴν ἀνθρωπότητα, ἕνα καὶ τὸν αὐτὸν Χριστόν, Υἱόν, Κύριον, Μονογενῆ, ἐν δύο φύσεσιν ἀσυγχύτως, ἀτρέπτως, ἀδιαιρέτως, ἀχωρίστως γνωριζόμενον· οὐδαμοῦ τῆς τῶν φύσεων διαφορᾶς ἀνῃρημένης διὰ τὴν ἕνωσιν, σωζομένης δὲ μᾶλλον τῆς ἰδιότητος ἑκατέρας φύσεως καὶ εἰς ἓν πρόσωπον καὶ μίαν ὑπόστασιν συντρεχούσης.",
      latim:
        "Unum eundemque confitendum Filium, Dominum nostrum Iesum Christum, eundem perfectum in deitate et eundem perfectum in humanitate, Deum vere et hominem vere eundem, ex anima rationali et corpore, consubstantialem Patri secundum deitatem, et consubstantialem nobis eundem secundum humanitatem, per omnia nobis similem absque peccato; ante saecula quidem de Patre genitum secundum deitatem, in novissimis autem diebus eundem propter nos et propter nostram salutem ex Maria Virgine Dei Genitrice secundum humanitatem, unum eundemque Christum, Filium, Dominum, Unigenitum, in duabus naturis inconfuse, immutabiliter, indivise, inseparabiliter agnoscendum; nullo modo differentia naturarum sublata propter unionem, salva magis proprietate utriusque naturae et in unam personam atque subsistentiam concurrente.",
      portugues:
        "Devemos confessar um só e mesmo Filho, nosso Senhor Jesus Cristo, o mesmo perfeito na divindade e o mesmo perfeito na humanidade, verdadeiro Deus e verdadeiro homem, o mesmo, de alma racional e corpo, consubstancial ao Pai segundo a divindade, e consubstancial a nós, o mesmo, segundo a humanidade, em tudo semelhante a nós, exceto no pecado; gerado do Pai antes dos séculos segundo a divindade, e nos últimos dias, o mesmo, por nós e por nossa salvação, nascido da Virgem Maria, Mãe de Deus, segundo a humanidade; um só e mesmo Cristo, Filho, Senhor, Unigênito, reconhecido em duas naturezas, sem confusão, sem mudança, sem divisão, sem separação; de modo algum sendo a diferença das naturezas suprimida pela união, mas antes sendo preservada a propriedade de cada natureza e concorrendo em uma só pessoa e uma só hipóstase.",
    },
    quatroAdverbios: [
      {
        grego: "ἀσυγχύτως (asynchytōs)",
        latim: "inconfuse",
        portugues: "sem confusão",
        significado:
          "As duas naturezas não se misturam nem se fundem em uma terceira natureza híbrida (contra o monofisismo de Eutiques). A divindade não se transforma em humanidade, nem a humanidade em divindade.",
      },
      {
        grego: "ἀτρέπτως (atreptōs)",
        latim: "immutabiliter",
        portugues: "sem mudança",
        significado:
          "As duas naturezas não sofrem alteração em suas propriedades essenciais pela união. A natureza divina permanece impassível e imutável; a natureza humana permanece passível e mutável (contra o apolinarismo e o monofisismo).",
      },
      {
        grego: "ἀδιαιρέτως (adiairetōs)",
        latim: "indivise",
        portugues: "sem divisão",
        significado:
          "As duas naturezas não podem ser separadas em dois sujeitos autônomos após a união. Não há um 'Logos divino' e um 'homem Jesus' operando independentemente (contra o nestorianismo). A leitura de 553 insiste em que este advérbio é a chave hermenêutica de toda a Definição.",
      },
      {
        grego: "ἀχωρίστως (achōristōs)",
        latim: "inseparabiliter",
        portugues: "sem separação",
        significado:
          "As duas naturezas não podem ser separadas nem mesmo no pensamento ou na predicação teológica. A união é permanente e indissolúvel, não apenas durante a vida terrena de Cristo, mas por toda a eternidade (contra o nestorianismo e contra a doutrina origenista da cessação da encarnação).",
      },
    ],
    notaHermeneutica:
      "A inovação hermenêutica de Constantinopla II (553) em relação a Calcedônia (451) reside na ênfase seletiva sobre os quatro advérbios. Enquanto Calcedônia apresentava os quatro advérbios como pares equilibrados ('sem confusão, sem mudança' contra Eutiques; 'sem divisão, sem separação' contra Nestório), Constantinopla II deslocou o centro de gravidade para o segundo par ('sem divisão, sem separação'), insistindo em que a unidade de sujeito é o princípio hermenêutico primário e que a dualidade de naturezas deve ser compreendida dentro da unidade hipostática, não como contrapeso autônomo. Essa leitura ciriliana de Calcedônia é a essência do neocalcedonianismo e permanece como a interpretação oficial da Definição de 451 tanto na Igreja Católica quanto na Igreja Ortodoxa.",
  },

  formulaTheopaschita: {
    titulo: "A Fórmula Teopasquita: 'Um da Trindade Padeceu na Carne'",
    contexto:
      "A fórmula teopasquista 'Um da Santa Trindade padeceu na carne' (heis tēs hagias Triados peponten sarki / Unus de sancta Trinitate passus est in carne) é a contribuição dogmática mais original e célebre do Segundo Concílio de Constantinopla ao patrimônio da fé cristã. Embora não seja um credo no sentido formal, a fórmula funciona como uma confissão de fé cristológica de autoridade dogmática equivalente à de um símbolo conciliar, pois foi consagrada pelo anátema 9 da Sentença Sinodal e incorporada à liturgia bizantina (Trisagion ampliado). A fórmula resolve a tensão entre a impassibilidade da natureza divina e a realidade da paixão de Cristo mediante o qualificador 'na carne' (en sarki / in carne), que preserva simultaneamente a realidade do sofrimento (o sujeito é o próprio Logos) e a impassibilidade da divindade (o modo do sofrimento é carnal, não divino).",
    texto: {
      grego:
        "Εἴ τις οὐχ ὁμολογεῖ τὸν Θεὸν Λόγον σταυρωθέντα σαρκί, καὶ παθόντα σαρκί, καὶ ἕνα τῆς ἁγίας Τριάδος πεπονθέναι σαρκί, ἀνάθεμα ἔστω.",
      latim:
        "Si quis non confitetur Deum Verbum crucifixum esse carne, et passum carne, et Unum de sancta Trinitate passum esse in carne, anathema sit.",
      portugues:
        "Se alguém não confessa que o Verbo de Deus foi crucificado na carne, e que padeceu na carne, e que Um da Santa Trindade padeceu na carne, seja anátema.",
    },
    explicacao:
      "A fórmula teopasquita contém três elementos teológicos essenciais: (1) O sujeito da paixão é identificado trinitariamente como 'Um da Santa Trindade' (heis tēs hagias Triados), o que exclui tanto o patripassianismo (não foi o Pai quem padeceu, nem a Trindade como um todo, mas especificamente o Filho/Logos) quanto o nestorianismo (não foi um mero homem chamado Jesus, mas o próprio Verbo de Deus). (2) O modo da paixão é qualificado como 'na carne' (sarki / in carne), o que preserva a impassibilidade da natureza divina (a divindade não sofre em si mesma) enquanto afirma a realidade do sofrimento do sujeito divino na e através da natureza humana assumida. (3) A fórmula implica a comunicação de idiomas (communicatio idiomatum) em sua forma mais radical: a paixão, que é propriedade (idiōma) da natureza humana, pode ser predicada do sujeito divino em virtude da união hipostática. A fórmula é, assim, a aplicação soteriológica da síntese neocalcedoniana: se o Logos é o sujeito da humanidade de Cristo, e se essa humanidade realmente sofreu e morreu, então o próprio Deus experimentou o sofrimento e a morte — não como Deus em sua natureza divina, mas como Deus encarnado em sua natureza humana.",
    baseConciliar:
      "A fórmula foi dogmatizada pelo anátema 9 da Sentença Sinodal (Sessão VIII, 2 de junho de 553) e reafirmada pelo anátema 10, que declara que o crucificado é 'verdadeiro Deus e Senhor da glória, Um da Santa Trindade'. A fórmula foi incorporada à liturgia bizantina no Trisagion ampliado ('Santo Deus, Santo Forte, Santo Imortal, que foste crucificado por nós, tem piedade de nós') e permanece como confissão de fé viva na Igreja Ortodoxa até os dias atuais. Na Igreja Católica, a fórmula é aceita como dogma, embora não tenha sido incorporada à liturgia latina de maneira tão explícita quanto na tradição bizantina.",
  },

  comparacao: {
    titulo: "O Edifício Dogmático dos Cinco Concílios: De Niceia (325) a Constantinopla (553)",
    introducao:
      "Os cinco primeiros concílios ecumênicos formam um edifício dogmático coerente e ininterrupto no qual cada concílio interpreta, complementa e aplica os anteriores sem contradizê-los. A tabela abaixo apresenta uma comparação analítica dos cinco concílios em sete aspectos dogmáticos fundamentais, demonstrando a continuidade e o desenvolvimento orgânico da fé cristã desde a definição da consubstancialidade trinitária em Niceia (325) até a síntese neocalcedoniana de Constantinopla II (553).",
    tabela: [
      {
        aspecto: "Questão teológica central",
        niceia325: "Arianismo: o Filho é criatura ou consubstancial ao Pai?",
        constantinopla381: "Macedonianismo/Pneumatomacismo: o Espírito Santo é divino?",
        efeso431: "Nestorianismo: Maria é Theotokos ou Christotokos? Cristo é um ou dois sujeitos?",
        calcedonia451: "Eutiquianismo/Monofisismo: Cristo possui uma ou duas naturezas após a união?",
        constantinopla553: "Neonstorianismo criptográfico: como interpretar corretamente as 'duas naturezas' de Calcedônia?",
      },
      {
        aspecto: "Definição dogmática principal",
        niceia325: "Homoousios: o Filho é 'consubstancial ao Pai', gerado, não criado.",
        constantinopla381: "Divindade plena do Espírito Santo: 'Senhor que dá a vida, que procede do Pai, adorado e glorificado com o Pai e o Filho'.",
        efeso431: "Theotokos: Maria é 'Mãe de Deus' em sentido próprio; Cristo é um só sujeito (mia hypostasis).",
        calcedonia451: "Duas naturezas em uma pessoa: 'sem confusão, sem mudança, sem divisão, sem separação' (hypostasis unical de duas physis).",
        constantinopla553: "Neocalcedonianismo: reinterpretação de Calcedônia à luz de Cirilo; fórmula teopasquista ('Um da Trindade padeceu na carne').",
      },
    ],
  },
};