/* ─────────────────────────────────────────────────────────────
   DOSSIÊ DOCUMENTAL: 2B. OS 20 CÂNONES E SUA HISTÓRIA TEXTUAL
   Fontes críticas:
   - Grego: P.-P. Joannou (Discipline générale antique, 1962)
   - Latim: C. H. Turner (Ecclesiae Occidentalis Monumenta Iuris Antiquissima - EOMIA)
   - Português/Inglês: N. Tanner / G. Alberigo (Decrees of the Ecumenical Councils, 1990)
───────────────────────────────────────────────────────────── */

export interface CanonDocumental {
  numero: number
  titulo: string
  termoGregoChave: string
  textoGrego: string // NOVO (Item 87)
  textoPortugues: string
  recepcao: string   // NOVO (Item 87)
  paralelos: string  // NOVO (Item 87)
  comentarioHistorico: string
}

export const canonesTextoIntegral: CanonDocumental[] = [
  {
    numero: 1,
    titulo: 'Sobre os que se mutilam ou são mutilados por terceiros',
    termoGregoChave: 'Εἴ τις ἐν νόσῳ ὑπὸ ἰατρῶν ἐχειρουργήθη...',
    textoGrego: 'Εἴ τις ἐν νόσῳ ὑπὸ ἰατρῶν ἐχειρουργήθη, ἢ ὑπὸ βαρβάρων ἐξετμήθη, οὗτος μενέτω ἐν τῷ κλήρῳ. εἰ δέ τις ὑγιαίνων ἑαυτὸν ἐξέτεμε, τοῦτον καὶ ἐν τῷ κλήρῳ ἐξεταζόμενον πεπαῦσθαι προσήκει, καὶ ἐκ τοῦ δεῦρο μηδένα τῶν τοιούτων χρῆναι προάγεσθαι. ὥσπερ δὲ τοῦτο πρόδηλον, ὅτι περὶ τῶν ἐπιτηδευόντων τὸ πρᾶγμα, καὶ τολμώντων ἑαυτοὺς ἐκτέμνειν εἴρηται· οὕτως εἴ τινες ὑπὸ βαρβάρων ἢ δεσποτῶν εὐνουχίσθησαν, εὑρίσκοιντο δὲ ἄλλως ἄξιοι, τοὺς τοιούτους εἰς κλῆρον προσίεται ὁ κανών.',
    textoPortugues: 'Se alguém foi mutilado pelos médicos durante uma enfermidade ou castrado pelos bárbaros, este pode permanecer no clero. Mas se alguém em plena saúde castrou a si mesmo, este, mesmo sendo clérigo, deve cessar suas funções, e doravante nenhum homem nesses termos deve ser promovido. Contudo, como está claro que isso se refere àqueles que agem deliberadamente e ousam castrar a si mesmos, se alguns foram feitos eunucos por bárbaros ou por seus senhores, mas forem considerados dignos sob outros aspectos, o cânone admite tais homens ao clero.',
    recepcao: 'Cânones Apostólicos 21–24; Código de Direito Canônico (1983) cân. 1041 5.º (irregularidade de quem se mutilou voluntariamente).',
    paralelos: 'Cânones Apostólicos 21, 22, 23 e 24.',
    comentarioHistorico: 'Mansi II, 668. Combate o rigorismo ascético inspirado numa exegese literalista de Mt 19,12 (prática atribuída a Orígenes na juventude e a seitas ascéticas como os Valesianos).'
  },
  {
    numero: 2,
    titulo: 'Sobre os que são promovidos ao clero imediatamente após o Batismo',
    termoGregoChave: 'ἐξ ἐθνῶν ἐρχομένους καὶ βίῳ ἁμαρτήματος...',
    textoGrego: 'Ἐπειδὴ πολλὰ ἤτοι ὑπὸ ἀνάγκης, ἢ ἄλλως ἐπειγομένων τῶν ἀνθρώπων, ἐγένετο παρὰ τὸν κανόνα τὸν ἐκκλησιαστικόν, ὥστε ἀνθρώπους ἄρτι προσελθόντας ἀπὸ τοῦ ἐθνικοῦ βίου τῇ πίστει, καὶ ἐν ὀλίγῳ χρόνῳ κατηχηθέντας, εὐθὺς ἐπὶ τὸ πνευματικὸν λουτρὸν ἄγειν, καὶ ἅμα τῷ βαπτισθῆναι προάγειν εἰς ἐπισκοπὴν ἢ πρεσβυτέριον· καλῶς ἔδοξεν ἔχειν, τοῦ λοιποῦ μηδὲν τοιοῦτον γίνεσθαι. καὶ γὰρ καὶ χρόνου δεῖ τῷ κατηχουμένῳ, καὶ μετὰ τὸ βάπτισμα δοκιμασίας πλείονος. σαφὲς γὰρ τὸ ἀποστολικὸν γράμμα, τὸ λέγον· Μὴ νεόφυτον, ἵνα μὴ τυφωθεὶς εἰς κρῖμα ἐμπέσῃ, καὶ παγίδα τοῦ διαβόλου.',
    textoPortugues: 'Uma vez que muitas coisas foram feitas contrárias à regra eclesiástica, seja por necessidade ou pela urgência de indivíduos, de modo que homens recém-saídos da vida pagã e do Batismo são imediatamente conduzidos ao lavacro espiritual e, simultaneamente com o Batismo, promovidos ao episcopado ou ao presbiterato, pareceu correto que no futuro tal coisa não ocorra. Pois é necessário tempo para o catecumenato e uma provação mais longa após o Batismo. Evidente é o dito apostólico: "Não neófito, para que não se ensoberbeça e caia na condenação e no laço do diabo" (1Tm 3,6).',
    recepcao: 'Código de Direito Canônico (1983) cân. 1042 3.º (impedimento simples à recepção de Ordens).',
    paralelos: '1 Timóteo 3,6; Cânones Apostólicos 80.',
    comentarioHistorico: 'Mansi II, 668. Visa garantir a maturidade espiritual dos ordenados. Exceções notáveis posteriores (como Ambrósio de Milão em 374, ordenado bispo 8 dias após o batismo) exigiam aclamação popular extraordinária.'
  },
  {
    numero: 3,
    titulo: 'Sobre as mulheres introduzidas (Syneisaktai)',
    termoGregoChave: 'συνείσακτον γυναῖκα',
    textoGrego: 'Ἀπηγόρευσε καθόλου ἡ μεγάλη σύνοδος, μήτε ἐπισκόπῳ, μήτε πρεσβυτέρῳ, μήτε διακόνῳ, μήτε ὅλως τινὶ τῶν ἐν τῷ κλήρῳ ἐξεῖναι συνείσακτον ἔχειν, πλὴν εἰ μὴ ἄρα μητέρα, ἢ ἀδελφήν, ἢ θείαν, ἢ ἃ μόνα πρόσωπα πᾶσαν ὑποψίαν διαπέφευγε.',
    textoPortugues: 'O grande sínodo proíbe absolutamente a bispos, presbíteros, diáconos e a qualquer membro do clero manter em sua casa uma mulher introduzida (syneisaktos), a menos que seja mãe, irmã, tia ou apenas aquelas pessoas que estejam acima de qualquer suspeita.',
    recepcao: 'Concílio Quinissexto / Trullo (692) cân. 5; Código de Direito Canônico (1983) cân. 277 §2.',
    paralelos: 'Ancira 314 cân. 19; Elvira cân. 27.',
    comentarioHistorico: 'Joannou I,1, 25. Combatia o "celibato carismático compartilhado" (virgines subintroductae). O historiador Sócrates (HE I.11) relata que o confessor egípcio Pafnúcio dissuadiu o concílio de impor a continência aos clérigos já casados antes da ordenação.'
  },
  {
    numero: 4,
    titulo: 'Sobre como os bispos devem ser constituídos',
    termoGregoChave: 'τὸ κύρος τῶν γινομένων',
    textoGrego: 'Ἐπίσκοπον προσήκει μάλιστα μὲν ὑπὸ πάντων τῶν ἐν τῇ ἐπαρχίᾳ καθίστασθαι· εἰ δὲ δυσχερὲς εἴη τὸ τοιοῦτο, ἢ διὰ κατεπείγουσαν ἀνάγκην, ἢ διὰ μῆκος ὁδοῦ, ἐξάπαντος τρεῖς ἐπὶ τὸ αὐτὸ συναγομένους, συμψήφων γινομένων καὶ τῶν ἀπόντων καὶ συντιθεμένων διὰ γραμμάτων, τότε τὴν χειροτονίαν ποιεῖσθαι. τὸ δὲ κῦρος τῶν γινομένων δίδοσθαι καθ\' ἑκάστην ἐπαρχίαν τῷ μητροπολίτῃ.',
    textoPortugues: 'É sumamente conveniente que um bispo seja constituído por todos os bispos da província. Se isso for difícil, seja por urgência premente ou pela extensão da viagem, ao menos três bispos devem reunir-se no mesmo lugar para a consagração, tendo obtido o consentimento por escrito dos ausentes. Em cada província, a confirmação (to kyros) dos atos pertence ao bispo metropolita.',
    recepcao: 'Código de Direito Canônico (1983) cân. 1014 (exigência sacramental e lícita de três bispos consagrantes); Arles 314 cân. 20.',
    paralelos: 'Arles 314 cân. 20; Cânones Apostólicos 1.',
    comentarioHistorico: 'Base do sistema provincial e metropolitano. A autoridade de confirmação do metropolita torna-se o pilar do direito eclesiástico provincial.'
  },
  {
    numero: 5,
    titulo: 'Sobre os excomungados e a obrigatoriedade dos sínodos semestrais',
    termoGregoChave: 'δὶς τοῦ ἔτους καθ\' ἑκάστην ἐπαρχίαν',
    textoGrego: 'Περὶ τῶν ἀκοινωνήτων γενομένων, εἴτε τῶν ἐν κλήρῳ, εἴτε τῶν ἐν λαϊκῷ τάγματι, ὑπὸ τῶν καθ\' ἑκάστην ἐπαρχίαν ἐπισκόπων, κρατείτω ἡ γνώμη κατὰ τὸν κανόνα τὸν ἀποφηνάμενον, τοὺς ὑφ\' ἑτέρων ἀποβληθέντας, ὑφ\' ἑτέρων μὴ προσίεσθαι. ἐξεταζέσθω δὲ, μὴ μικροψυχίᾳ, ἢ φιλονεικίᾳ, ἤ τινι τοιαύτῃ ἀηδίᾳ τοῦ ἐπισκόπου ἀποσυνάγωγοι γεγένηνται. ἵνα οὖν τοῦτο τὴν πρέπουσαν ἐξέτασιν λαμβάνῃ, καλῶς ἔχειν ἔδοξε, καθ\' ἕκαστον ἐνιαυτόν, καθ\' ἑκάστην ἐπαρχίαν δὶς τοῦ ἔτους συνόδους γίνεσθαι· ἵνα κοινῇ πάντων τῶν ἐπισκόπων τῆς ἐπαρχίας ἐπὶ τὸ αὐτὸ συναγομένων, τὰ τοιαῦτα ζητήματα ἐξετάζοιτο... μίαν μὲν πρὸ τῆς Τεσσαρακοστῆς... τὴν δὲ δευτέραν περὶ τὸν τοῦ μετοπώρου καιρόν.',
    textoPortugues: 'A respeito daqueles que foram excomungados, sejam clérigos ou leigos, a sentença pronunciada pelos bispos de cada província deve prevalecer de acordo com o cânone que estabelece que os excomungados por uns não devem ser acolhidos por outros. Todavia, deve ser investigado se a excomunhão não foi motivada por pusilanimidade, espírito de discórdia ou qualquer discrição odiosa do bispo. Para que este exame ocorra devidamente, pareceu correto que sínodos ocorram duas vezes por ano em cada província: um antes da Quaresma (Tessarakostē) e o segundo no outono.',
    recepcao: 'Antioquia 341 cân. 20; Concílio de Trullo (692) cân. 8; Código de Direito Canônico (1983) cân. 439–446 (concílios particulares e províncias eclesiásticas).',
    paralelos: 'Antioquia 341 cân. 20; Cânones Apostólicos 37.',
    comentarioHistorico: 'Cria o mecanismo de apelo sinodal provincial contra arbitrariedades episcopais individuais.'
  },
  {
    numero: 6,
    titulo: 'Sobre a jurisdição das grandes Sés (Roma, Alexandria, Antioquia)',
    termoGregoChave: 'Τὰ ἀρχαῖα ἔθη κρατείτω...',
    textoGrego: 'Τὰ ἀρχαῖα ἔθη κρατείτω, τὰ ἐν Αἰγύπτῳ, καὶ Λιβύῃ, καὶ Πενταπόλει, ὥστε τὸν ἐν Ἀλεξανδρείᾳ ἐπίσκοπον πάντων τούτων ἔχειν τὴν ἐξουσίαν, ἐπειδὴ καὶ τῷ ἐν τῇ Ῥώμῃ ἐπισκόπῳ τοῦτο σύνηθές ἐστιν. ὁμοίως δὲ καὶ κατὰ τὴν Ἀντιόχειαν, καὶ ἐν ταῖς ἄλλαις ἐπαρχίαις, τὰ πρεσβεῖα σώζεσθαι ταῖς ἐκκλησίαις. καθόλου δὲ πρόδηλον ἐκεῖνο, ὅτι, εἴ τις χωρὶς γνώμης τοῦ μητροπολίτου γένοιτο ἐπίσκοπος, τὸν τοιοῦτον ἡ μεγάλη σύνοδος ὥρισε μὴ δεῖν εἶναι ἐπίσκοπον.',
    textoPortugues: 'Que os antigos costumes prevaleçam no Egito, Líbia e Pentápole, de modo que o bispo de Alexandria tenha autoridade sobre todas essas regiões, uma vez que este é também o costume para o bispo de Roma. Semelhantemente, em Antioquia e nas demais províncias, que os privilégios das Igrejas sejam preservados. É absolutamente claro que, se alguém for feito bispo sem o consentimento do metropolita, o grande sínodo determina que tal homem não deve ser bispo.',
    recepcao: 'Papa Leão I (Ep. 104–106, contra Calcedônia 28); Decretum Gelasianum; Constantinopla 381 cân. 3; Calcedônia 451 cân. 28; Trullo cân. 36; Declarações conjuntas de Ravena (2007) e Alexandria (2023) da Comissão Mista Católico-Ortodoxa.',
    paralelos: 'Cânones Apostólicos 34; Antioquia 341 cân. 9.',
    comentarioHistorico: 'O cânone mais debatido no segundo milênio. Católicos leem a menção a Roma como premissa analógica para o primado; Ortodoxos leem como limitação e reconhecimento de jurisdições metropolitanas regionais paralelas. Ver abaixo a história da interpolação latina em Calcedônia.'
  },
  {
    numero: 7,
    titulo: 'Sobre o bispo de Aelia Capitolina (Jerusalém)',
    termoGregoChave: 'ἡ ἀκολουθία τῆς τιμῆς',
    textoGrego: 'Ἐπειδὴ συνήθεια κεκράτηκε καὶ παράδοσις ἀρχαία, ὥστε τὸν ἐν Αἰλίᾳ ἐπίσκοπον τιμᾶσθαι, ἐχέτω τὴν ἀκολουθίαν τῆς τιμῆς, τῇ μητροπόλει σῳζομένου τοῦ οἰκείου ἀξιώματος.',
    textoPortugues: 'Uma vez que o costume e a tradição antiga estabeleceram que o bispo de Aelia (Jerusalém) seja honrado, que ele receba a precedência de honra (hē akolouthia tēs timēs), mantendo contudo a dignidade própria devida à Metrópole (Cesareia da Palestina).',
    recepcao: 'Concílio de Calcedônia 451 (instituição formal do Patriarcado de Jerusalém e sua autonomia em relação a Cesareia).',
    paralelos: 'Calcedônia 451 cân. 7 (implícito na criação dos Patriarcados).',
    comentarioHistorico: 'Concede primazia de honra histórica à Cidade Santa, mas mantém a subordinação jurisdicional canônica ao metropolita de Cesareia (à época, Eusébio).'
  },
  {
    numero: 8,
    titulo: 'Sobre a acolhida dos Novacianos (Katharoi)',
    termoGregoChave: 'Περὶ τῶν ὀνομαζόντων ἑαυτοὺς Καθαρούς...',
    textoGrego: 'Περὶ τῶν ὀνομαζόντων μὲν ἑαυτοὺς Καθαρούς ποτε, προσερχομένων δὲ τῇ καθολικῇ καὶ ἀποστολικῇ ἐκκλησίᾳ, ἔδοξε τῇ ἁγίᾳ καὶ μεγάλῃ συνόδῳ, ὥστε χειροθετουμένους αὐτούς, μένειν οὕτως ἐν τῷ κλήρῳ. πρὸ πάντων δὲ τοῦτο ὁμολογῆσαι αὐτοὺς ἐγγράφως προσήκει, ὅτι συνθήσονται καὶ ἀκολουθήσουσι τοῖς τῆς καθολικῆς καὶ ἀποστολικῆς ἐκκλησίας δόγμασι· τουτέστι, καὶ διγάμοις κοινωνεῖν, καὶ τοῖς ἐν τῷ διωγμῷ παραπεπτωκόσιν, ἐφ\' ὧν καὶ χρόνος τέτακται, καὶ καιρὸς ὥρισται.',
    textoPortugues: 'A respeito daqueles que se denominam a si mesmos Puros (Katharoi), se quiserem entrar na Igreja Católica e Apostólica, o santo e grande sínodo determina que, depois de terem recebido a imposição das mãos, permaneçam no clero. Antes de tudo, porém, é necessário que confessem por escrito que aceitam e seguem os decretos da Igreja Católica: isto é, que comunicarão com os bígamos (dígamoi, os casados em segundas núpcias) e com os que fraquejaram na perseguição, para os quais foi estabelecido tempo de penitência e momento de reconciliação.',
    recepcao: 'Concílio de Trullo (692) cân. 95 (regras de recepção de heréticos e cismáticos); Agostinho, De baptismo (validade sacramental fora da comunhão visível da Igreja).',
    paralelos: 'Ancira 314 cân. 12; Cânones Apostólicos 47.',
    comentarioHistorico: 'Misericórdia canônica com os rigoristas novacianos (seguidores de Novaciano de Roma, † c. 258), reabilitando seu clero sem exigir reordenação — apenas a imposição de mãos reconciliatória (cheirothesia). O cânone exige que abandonem o rigorismo penitencial extremo: devem aceitar a comunhão com os bígamos e com os lapsi reconciliados.'
  },
  {
    numero: 9,
    titulo: 'Sobre os promovidos ao presbiterato sem o devido exame moral',
    termoGregoChave: 'ἀνεξετάστως προαχθέντες',
    textoGrego: 'Εἴ τινες ἀνεξετάστως προήχθησαν πρεσβύτεροι, ἢ ἀνακρινόμενοι ὡμολόγησαν τὰ ἁμαρτήματα αὐτοῖς, καὶ ὁμολογησάντων αὐτῶν, παρὰ κανόνα κινούμενοι οἱ ἄνθρωποι, τοῖς τοιούτοις χεῖρας ἐπιτεθείκασι, τούτους ὁ κανὼν οὐ προσίεται· τὸ γὰρ ἀνεπίληπτον ἐκδικεῖ ἡ καθολικὴ ἐκκλησία.',
    textoPortugues: 'Se alguns foram promovidos presbíteros sem prévio exame, ou se, ao serem examinados, confessaram seus crimes e, apesar da confissão, homens movidos por capricho impuseram-lhes as mãos contra o cânone, a regra não os admite; pois a Igreja Católica exige irrepreensibilidade.',
    recepcao: 'Código de Direito Canônico (1983) cân. 1040–1049 (regime geral das irregularidades e impedimentos ad ordinem et ad usum).',
    paralelos: 'Cânones Apostólicos 25 e 61; Neocesareia cân. 9 e 10.',
    comentarioHistorico: 'Garante que faltas morais graves anteriores à ordenação impedem o exercício do ministério público.'
  },
  {
    numero: 10,
    titulo: 'Sobre os lapsos ordenados por ignorância',
    termoGregoChave: 'ὅσοι προεπεσάντων',
    textoGrego: 'Ὅσοι προεχειρίσθησαν τῶν παραπεπτωκότων, κατὰ ἄγνοιαν ἢ καὶ προειδότων τῶν προχειρισαμένων, τοῦτο οὐ προκρίνει τῷ κανόνι τῷ ἐκκλησιαστικῷ· γνωσθέντες γὰρ καθαιροῦνται.',
    textoPortugues: 'Se quaisquer daqueles que fraquejaram durante a perseguição foram ordenados, seja por ignorância dos ordenadores ou com seu conhecimento, isso não prejudica a regra eclesiástica; pois uma vez descobertos, devem ser depostos.',
    recepcao: 'Código de Direito Canônico (1983) cân. 1040–1049; cân. 1041 2.º (irregularidade por delito de apostasia, heresia ou cisma).',
    paralelos: 'Cânones Apostólicos 62; Pedro de Alexandria, Carta Canônica (306).',
    comentarioHistorico: 'A ordenação de um apóstata é juridicamente nula e inválida ex post facto.'
  },
  {
    numero: 11,
    titulo: 'Sobre a penitência dos leigos que apostataram voluntariamente',
    termoGregoChave: 'ἄνευ ἀνάγκης',
    textoGrego: 'Περὶ τῶν παραβάντων χωρὶς ἀνάγκης, ἢ χωρὶς ἀφαιρέσεως ὑπαρχόντων, ἢ χωρὶς κινδύνου, ἢ τινος τοιούτου, ὃ γέγονεν ἐπὶ τῆς τυραννίδος Λικινίου, ἔδοξε τῇ συνόδῳ, εἰ καὶ ἀνάξιοι ἦσαν φιλανθρωπίας, ὅμως χρηστεύσασθαι εἰς αὐτούς. Ὅσοι οὖν γνησίως μεταμέλονται, τρία ἔτη ἐν ἀκροωμένοις ποιήσουσιν οἱ πιστοί, καὶ ἑπτὰ ἔτη ὑποπεσοῦνται· δύο δὲ ἔτη χωρὶς προσφορᾶς κοινωνήσουσι τῷ λαῷ τῶν προσευχῶν.',
    textoPortugues: 'A respeito daqueles que transgrediram sem necessidade, sem confisco de bens ou sem perigo iminente (como ocorreu sob a tirania de Licínio), o sínodo decreta que, embora sejam indignos de clemência, seja exercida misericórdia para com eles. Aqueles que demonstrarem verdadeiro arrependimento passarão três anos entre os ouvintes (audientes), sete anos entre os prostrados (substrati) e por dois anos participarão das orações do povo sem a oblação.',
    recepcao: 'Pedro de Alexandria, Carta Canônica (306); Concílio de Ancira 314 cân. 1–9; Código de Direito Canônico (1983) cân. 959–997 (Sacramento da Penitência).',
    paralelos: 'Ancira 314 cân. 1–9; Pedro de Alexandria (306).',
    comentarioHistorico: 'Estruturação canônica oficial dos estágios da penitência pública antiga: 1. Flentes (fora do templo); 2. Audientes (na nave); 3. Substrati (prostrados); 4. Consistentes (em pé com os fiéis).'
  },
  {
    numero: 12,
    titulo: 'Sobre os cristãos que retornaram ao serviço militar pagão',
    termoGregoChave: 'ἀποθεμένοι τὰς ζώνας',
    textoGrego: 'Οἱ δὲ προσκληθέντες μὲν ὑπὸ τῆς χάριτος, καὶ τὴν πρώτην ὁρμὴν ἐνδειξάμενοι, καὶ ἀποθέμενοι τὰς ζώνας, μετὰ ταῦτα δὲ ἐπὶ τὸν οἰκεῖον ἔμετον ἀναδραμόντες, ὡς κύνας, ὥστε τινὰς καὶ ἀργύρια προΐεσθαι, καὶ βενεφικίοις κατορθῶσαι τὸ ἀναστρατεύσασθαι· οὗτοι δέκα ἔτη ὑποπιπτέτωσαν, μετὰ τὸν τῆς τριετοῦς ἀκροάσεως χρόνον.',
    textoPortugues: 'Aqueles que, chamados pela graça, demonstraram seu primeiro zelo desfazendo-se de seus cinturões militares, mas depois retornaram como cães ao próprio vômito (alguns pagando dinheiro para reingressar no exército de Licínio), cumprirão dez anos como prostrados após três anos como ouvintes.',
    recepcao: 'Pedro de Alexandria, Carta Canônica (306); Concílio de Ancira 314 cân. 1–9; Código de Direito Canônico (1983) cân. 959–997.',
    paralelos: 'Ancira 314 cân. 4–6; Pedro de Alexandria (306).',
    comentarioHistorico: 'Refere-se aos soldados que renunciaram ao exército para não sacrificar aos deuses e depois retornaram ao exército pagão de Licínio.'
  },
  {
    numero: 13,
    titulo: 'Sobre a concessão do Viático aos moribundos',
    termoGregoChave: 'τὸ τελευταῖον καὶ ἀναγκαιότατον ἐφόδιον',
    textoGrego: 'Περὶ δὲ τῶν ἐξοδευόντων, ὁ παλαιὸς καὶ κανονικὸς νόμος φυλαχθήσεται καὶ νῦν, ὥστε, εἴ τις ἐξοδεύοι, τοῦ τελευταίου καὶ ἀναγκαιοτάτου ἐφοδίου μὴ ἀποστερεῖσθαι. εἰ δὲ ἀπογνωσθεὶς καὶ κοινωνίας πάλιν τυχὼν πάλιν ἐν τοῖς ζῶσιν ἐξετασθῇ, ἔστω μετὰ τῶν κοινωνούντων τῆς εὐχῆς μόνης. καθόλου δὲ καὶ περὶ παντὸς οὑτινοσοῦν ἐξοδεύοντος, αἰτοῦντος τοῦ μεταλαβεῖν εὐχαριστίας, ὁ ἐπίσκοπος μετὰ δοκιμασίας μεταδότω.',
    textoPortugues: 'Respeito aos moribundos, a antiga lei canônica deve ser observada: ninguém no momento da morte deve ser privado do último e mais necessário viático (ephodion). Se alguém desenganado receber a Comunhão e retornar à saúde, estará na classe dos que participam apenas da oração.',
    recepcao: 'Pedro de Alexandria, Carta Canônica (306); Concílio de Ancira 314 cân. 1–9; Código de Direito Canônico (1983) cân. 959–997; cân. 921 (viático em perigo de morte).',
    paralelos: 'Ancira 314 cân. 6; Cânones Apostólicos 52.',
    comentarioHistorico: 'Princípio supremo do Direito Canônico de que a salvação das almas (salus animarum) e a misericórdia sobrepõem-se à disciplina penitencial no artigo da morte.'
  },
  {
    numero: 14,
    titulo: 'Sobre os catecúmenos que apostataram',
    termoGregoChave: 'περὶ τῶν κατηχουμένων καὶ παραπεσόντων',
    textoGrego: 'Περὶ τῶν κατηχουμένων καὶ παραπεσόντων, ἔδοξε τῇ ἁγίᾳ καὶ μεγάλῃ συνόδῳ, ὥστε τριῶν ἐτῶν αὐτοὺς ἀκροωμένους μόνον, μετὰ ταῦτα εὔχεσθαι μετὰ τῶν κατηχουμένων.',
    textoPortugues: 'O santo e grande sínodo decreta que os catecúmenos que fraquejaram cumpram três anos como ouvintes; após isso, poderão orar novamente com os catecúmenos.',
    recepcao: 'Pedro de Alexandria, Carta Canônica (306); Concílio de Ancira 314 cân. 1–9; Código de Direito Canônico (1983) cân. 959–997; cân. 206 (estatuto dos catecúmenos).',
    paralelos: 'Ancira 314 cân. 6; Elvira cân. 42–45.',
    comentarioHistorico: 'Disciplina adaptada aos não-batizados, cujo compromisso sacramental ainda não estava plenamente firmado pelo Batismo.'
  },
  {
    numero: 15,
    titulo: 'Sobre a proibição de transferência (translação) de clérigos',
    termoGregoChave: 'ἀπὸ πόλεως εἰς πόλιν',
    textoGrego: 'Διὰ τὸν πολὺν τάραχον καὶ τὰς στάσεις τὰς γινομένας, ἔδοξε παντάπασι περιαιρεθῆναι τὴν συνήθειαν, τὴν παρὰ τὸν κανόνα τὸν ἐκκλησιαστικὸν εὑρεθεῖσαν ἔν τισι μέρεσιν· ὥστε ἀπὸ πόλεως εἰς πόλιν μὴ μεταβαίνειν, μήτε ἐπίσκοπον, μήτε πρεσβύτερον, μήτε διάκονον. εἰ δέ τις μετὰ τὸν τῆς ἁγίας καὶ μεγάλης συνόδου ὅρον τοιούτῳ τινὶ ἐπιχειρήσειεν, ἢ ἐπιδοίη ἑαυτὸν πράγματι τοιούτῳ, ἀκυρωθήσεται ἐξάπαντος τὸ κατασκεύασμα, καὶ ἀποκατασταθήσεται τῇ ἐκκλησίᾳ, ᾗ ἐχειροτονήθη ὁ ἐπίσκοπος ἢ ὁ πρεσβύτερος.',
    textoPortugues: 'Por causa das grandes perturbações e divisões que ocorrem, pareceu correto abolir totalmente o costume contrário ao cânone, de modo que nenhum bispo, presbítero ou diácono se transfira de uma cidade para outra. Se alguém, após o decreto do santo e grande sínodo, ousar fazer tal coisa, seu ato será juridicamente nulo e será reconduzido à igreja para a qual foi ordenado.',
    recepcao: 'Arles 314 cân. 2 (al. 21); Concílio de Sárdica 343 cân. 1–2; Código de Direito Canônico (1983) cân. 265–272 (instituto da incardinação clerical).',
    paralelos: 'Arles 314 cân. 2 (al. 21); Sárdica 343 cân. 1–2; Cânones Apostólicos 14.',
    comentarioHistorico: 'Proibia o "carreirismo episcopal" (mudar para sés mais ricas ou prestigiosas). O cânone foi imediatamente violado por Eusébio de Nicomédia (Berito → Nicomédia → Constantinopla).'
  },
  {
    numero: 16,
    titulo: 'Sobre os clérigos que abandonam suas igrejas ou são usurpados por outros',
    termoGregoChave: 'ἀπολυτόως εἰς ἑτέραν ἐκκλησίαν',
    textoGrego: 'Ὅσοι ῥιψοκινδύνως, μήτε τὸν φόβον τοῦ Θεοῦ πρὸ ὀφθαλμῶν ἔχοντες, μήτε τὸν ἐκκλησιαστικὸν κανόνα εἰδότες, ἀναχωρήσουσι τῆς ἐκκλησίας, πρεσβύτεροι ἢ διάκονοι, ἢ ὅλως ἐν τῷ κανόνι ἐξεταζόμενοι, οὗτοι οὐδαμῶς δεκτοὶ ὀφείλουσιν εἶναι ἐν ἑτέρᾳ ἐκκλησίᾳ· ἀλλὰ πᾶσαν αὐτοῖς ἀνάγκην ἐπάγεσθαι χρή, ἀναστρέφειν εἰς τὰς ἑαυτῶν παροικίας... εἰ μὴν τολμήσειέν τις ὑφαρπάσαι τὸν τῷ ἑτέρῳ διαφέροντα, καὶ χειροτονῆσαι ἐν τῇ αὐτοῦ ἐκκλησίᾳ, μὴ συγκατατιθεμένου τοῦ ἰδίου ἐπισκόπου... ἄκυρος ἔσται ἡ χειροτονία.',
    textoPortugues: 'Presbíteros ou diáconos que levianamente abandonarem suas igrejas não devem ser recebidos em outra diocese. Se alguém ousar ordenar um clérigo pertencente a outro bispo sem o consentimento deste, a ordenação será nula.',
    recepcao: 'Arles 314 cân. 2 (al. 21); Concílio de Sárdica 343 cân. 1–2; Código de Direito Canônico (1983) cân. 265–272.',
    paralelos: 'Arles 314 cân. 2 (al. 21); Sárdica 343 cân. 1–2; Antioquia 341 cân. 3.',
    comentarioHistorico: 'Fundamento jurídico do instituto da incardinação clerical. O cânone protege a estabilidade das dioceses contra a usurpação inter-episcopal.'
  },
  {
    numero: 17,
    titulo: 'Sobre a proibição da usura e da cobrança de juros pelo clero',
    termoGregoChave: 'τόκους καὶ ἡμιολίας',
    textoGrego: 'Ἐπειδὴ πολλοὶ ἐν τῷ κανόνι ἐξεταζόμενοι τὴν πλεονεξίαν καὶ τὴν αἰσχροκέρδειαν διώκοντες, ἐπελάθοντο τοῦ θείου γράμματος λέγοντος· Οὐκ ἔδωκε τὸ ἀργύριον αὐτοῦ ἐπὶ τόκῳ· καὶ δανείζοντες, ἑκατοστὰς ἀπαιτοῦσιν· ἐδικαίωσεν ἡ ἁγία καὶ μεγάλη σύνοδος, ὡς εἴ τις εὑρεθείη μετὰ τὸν ὅρον τοῦτον τόκους λαμβάνων ἐκ μεταχειρίσεως, ἢ ἄλλως μετερχόμενος τὸ πρᾶγμα, ἢ ἡμιολίας ἀπαιτῶν, ἢ ὅλως ἕτερόν τι ἐπινοῶν αἰσχροκερδείας ἕνεκα, καθαιρεθήσεται τοῦ κλήρου, καὶ ἀλλότριος τοῦ κανόνος ἔσται.',
    textoPortugues: 'Uma vez que muitos clérigos, movidos por avareza, esqueceram a Escritura que diz: "Não deu o seu dinheiro a usura" (Sl 15,5), emprestando e exigindo juros, o sínodo decreta que quem for flagrado praticando usura será deposto do clero e declarado estranho ao cânone sagrado.',
    recepcao: 'Elvira c. 306 cân. 20; Arles 314 cân. 12; Código de Direito Canônico (1983) cân. 286 (proibição aos clérigos de exercer negócios ou comércio por lucro próprio ou de terceiros).',
    paralelos: 'Elvira cân. 20; Arles 314 cân. 12; Cânones Apostólicos 44; Sl 15,5; Ez 18,8.',
    comentarioHistorico: 'Proibição absoluta de lucros financeiros ilícitos por parte do clero, refletindo a preocupação patrística com a integridade moral do ministério sagrado.'
  },
  {
    numero: 18,
    titulo: 'Sobre a ordem hierárquica dos diáconos frente aos presbíteros',
    termoGregoChave: 'ὅτι οἱ διάκονοι τῶν πρεσβυτέρων ἐλάττους εἰσί',
    textoGrego: 'Ἦλθεν εἰς τὴν ἁγίαν καὶ μεγάλην σύνοδον, ὅτι ἔν τισι τόποις καὶ πόλεσι τοῖς πρεσβυτέροις τὴν εὐχαριστίαν οἱ διάκονοι διδόασι· ὅπερ οὔτε ὁ κανών, οὔτε ἡ συνήθεια παρέδωκε, τοὺς ἐξουσίαν μὴ ἔχοντας προσφέρειν, τοῖς προσφέρουσι διδόναι τὸ σῶμα τοῦ Χριστοῦ... μηδὲ καθέζεσθαι ἐν μέσῳ τῶν πρεσβυτέρων τοὺς διακόνους, παρὰ κανόνα γὰρ καὶ παρὰ τάξιν ἐστὶ τὸ γινόμενον.',
    textoPortugues: 'Chegou ao conhecimento do sínodo que em alguns lugares os diáconos distribuem a Eucaristia aos presbíteros. Isso nem o cânone nem o costume entregou: que os que não têm autoridade para oferecer dêem o Corpo de Cristo aos que oferecem. Nem se sentem os diáconos entre os presbíteros, pois é contrário ao cânone e à ordem.',
    recepcao: 'Código de Direito Canônico (1983) cân. 910 (ministros ordinários e extraordinários da Sagrada Comunhão).',
    paralelos: 'Arles 314 cân. 15; Trullo 692 cân. 7; Cânones Apostólicos 39.',
    comentarioHistorico: 'Correção de abusos litúrgicos em Sés urbanas onde diáconos influentes usurpavam prerrogativas presbiterais.'
  },
  {
    numero: 19,
    titulo: 'Sobre os paulianistas e o estatuto das diaconisas',
    termoGregoChave: 'Περὶ τῶν παυλιανισάντων...',
    textoGrego: 'Περὶ τῶν παυλιανισάντων, εἶτα προσφυγόντων τῇ καθολικῇ ἐκκλησίᾳ, ὅρος ἐκτέθειται, ἀναβαπτίζεσθαι αὐτοὺς ἐξάπαντος. εἰ δέ τινες ἐν τῷ παρεληλυθότι χρόνῳ ἐν τῷ κλήρῳ ἐξητάσθησαν, εἰ μὲν ἄμεμπτοι καὶ ἀνεπίληπτοι φανεῖεν, ἀναβαπτισθέντες χειροτονείσθωσαν ὑπὸ τοῦ τῆς καθολικῆς ἐκκλησίας ἐπισκόπου... Ὡσαύτως δὲ καὶ περὶ τῶν διακονισσῶν, καὶ ὅλως περὶ τῶν ἐν τῷ κανόνι ἐξεταζομένων, ὁ αὐτὸς τύπος παραφυλαχθήσεται. ἐμνήσθημεν δὲ διακονισσῶν τῶν ἐν τῷ σχήματι ἐξετασθεισῶν, ἐπεὶ μηδὲ χειροθεσίαν τινὰ ἔχουσιν, ὥστε ἐξάπαντος ἐν τοῖς λαϊκοῖς αὐτὰς ἐξετάζεσθαι.',
    textoPortugues: 'A respeito dos paulianistas que retornam à Igreja Católica, decreta-se que devem ser categoricamente rebatizados. Se alguns eram clérigos, se forem irrepreensíveis, serão rebatizados e ordenados pelo bispo. Quanto às diaconisas e a todos os contados na lista, a mesma regra se aplica. Lembramos as diaconisas que não receberam qualquer imposição de mãos, devendo ser contadas entre as leigas.',
    recepcao: 'Código de Direito Canônico (1983) cân. 869 (batismo sob condição); Concílio de Calcedônia 451 cân. 15 (que fala expressamente da cheirotonia de diaconisas com imposição de mãos aos 40 anos); Comissões papais de 2016 e 2020 sobre o diaconato feminino (Papa Francisco).',
    paralelos: 'Calcedônia 451 cân. 15; Cânones Apostólicos 46.',
    comentarioHistorico: 'O rebatismo dos seguidores de Paulo de Samósata demonstra que Niceia considerava seu batismo inválido por falta de fé trinitária real. A nota sobre diaconisas reflete a distinção entre bênção e ordenação sacramental (cheirothesia).'
  },
  {
    numero: 20,
    titulo: 'Sobre a proibição de ajoelhar-se aos domingos e no tempo pascal',
    termoGregoChave: 'ἑστῶτας ἐν ταῖς εὐχαῖς',
    textoGrego: 'Ἐπειδή τινές εἰσιν ἐν τῇ Κυριακῇ γόνυ κλίνοντες καὶ ἐν ταῖς τῆς Πεντηκοστῆς ἡμέραις, ὑπὲρ τοῦ πάντα ἐν πάσῃ παροικίᾳ ὁμοίως παραφυλάττεσθαι, ἑστῶτας ἔδοξε τῇ ἁγίᾳ συνόδῳ τὰς εὐχὰς ἀποδιδόναι τῷ Θεῷ.',
    textoPortugues: 'Como há alguns que se ajoelham no domingo e nos dias de Pentecostes, para que tudo seja observado de forma uniforme em todas as dioceses, pareceu correto ao santo sínodo que as orações a Deus sejam feitas de pé.',
    recepcao: 'Tertuliano, De corona 3 (testemunho pré-niceno); Concílio de Trullo (692) cân. 90; Instrução Geral sobre o Missal Romano (IGMR) na disciplina da postura litúrgica.',
    paralelos: 'Tertuliano, De corona 3; Trullo 692 cân. 90.',
    comentarioHistorico: 'Postura litúrgica de pé como afirmação teológica pública da Ressurreição de Cristo, contra a postura de compunção penitencial ajoelhada.'
  }
]

/* ═══════════════════════════════════════════════════════════
   A HISTÓRIA DAS TRADUÇÕES LATINAS ANTIGAS (Turner, EOMIA)
═══════════════════════════════════════════════════════════ */

export interface ColecaoLatina {
  nome: string
  codigoTurner: string
  dataOrigem: string
  descricao: string
}

export const colecoesLatinasCanones: ColecaoLatina[] = [
  {
    nome: 'Versio Attici (ou Authentica)',
    codigoTurner: 'EOMIA I, 2, 2',
    dataOrigem: '419 d.C.',
    descricao: 'Enviada pelo Patriarca Ático de Constantinopla aos bispos do Norte da África durante a controvérsia do presbítero Apiário. É a tradução oficial grega re-traduzida para o latim para provar que os cânones de Sárdica citados por Roma não constavam em Niceia.'
  },
  {
    nome: 'Versio Caeciliani',
    codigoTurner: 'EOMIA I, 2, 1',
    dataOrigem: '325 d.C. (imediata)',
    descricao: 'Tradução levada diretamente de Niceia por Ceciliano, bispo de Cartago, presente no concílio. É o texto mais antigo preservado na África Romana.'
  },
  {
    nome: 'Versio Prisca (ou Italica)',
    codigoTurner: 'EOMIA I, 2, 3',
    dataOrigem: 'Início do séc. V',
    descricao: 'Versão em latim fluido usada na Itália setentrional antes das reformas dionisianas.'
  },
  {
    nome: 'Versio Dionysiana (Dionísio, o Exíguo)',
    codigoTurner: 'EOMIA I, 2, 4',
    dataOrigem: 'c. 500 d.C.',
    descricao: 'A edição crítica da Antiguidade Tardia. Dionísio, o Exíguo, monge na Itália, traduziu do grego com exatidão técnica formidável. Tornou-se o texto oficial do Direito Canônico Ocidental integrando a Collectio Dionysiana.'
  },
  {
    nome: 'Versio Isidoriana (Hispana)',
    codigoTurner: 'EOMIA I, 2, 5',
    dataOrigem: 'Séc. VI–VII',
    descricao: 'Usada na Igreja Visigótica e atribuída mais tarde a Isidoro de Sevilha. Sofreu influências de variantes ocidentais acumuladas.'
  },
  {
    nome: 'Versio Gallica (Gallo-Hispana)',
    codigoTurner: 'EOMIA I, 2, 6',
    dataOrigem: 'Séc. V–VI',
    descricao: 'Manuscritos preservados nos mosteiros da Gália (como Arles e Lyon), demonstrando como os cânones nicenos eram aplicados no reino merovíngio.'
  }
]