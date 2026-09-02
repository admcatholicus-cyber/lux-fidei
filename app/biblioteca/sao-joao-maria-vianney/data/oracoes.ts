/**
 * Corpus de São João Maria Vianney — Orações e fórmulas espirituais.
 *
 * Esta versão é um levantamento inicial. O primeiro item foi copiado de uma
 * página institucional atual do Santuário de Ars e, por isso, não é tratado
 * como testemunho autógrafo nem como edição histórica.
 */

export type TipoOracao = "ato de fé" | "ato de esperança" | "ato de caridade" | "ato de contrição" | "oração" | "fórmula" | "preparação";
export type AutenticidadeOracao = "autêntica" | "atribuída" | "tradicional";

export interface OracaoVianney {
  id: string;
  numero: number;
  tituloOriginal: string;
  tituloPortugues: string;
  tipo: TipoOracao;
  original: {
    idioma: "francês" | "latim";
    texto: string | null;
  };
  portugues: {
    texto: string | null;
    tradutor: string;
  };
  fonte: string;
  autenticidade: AutenticidadeOracao;
  estadoEditorial: "em levantamento" | "em revisão" | "revisado";
  notasEditoriais: string[];
}

/**
 * Itens localizados nesta primeira coleta.
 */
export const oracoes: OracaoVianney[] = [
  {
    id: "oracao-001",
    numero: 1,
    tituloOriginal: "Acte d’amour du Saint Curé",
    tituloPortugues: "Ato de amor do Santo Cura",
    tipo: "oração",
    original: {
      idioma: "francês",
      texto: `Je vous aime, ô mon Dieu, et mon seul désir est de vous aimer jusqu’au dernier soupir de ma vie.

Je vous aime, ô Dieu infiniment aimable, et j’aime mieux mourir en vous aimant que de vivre un seul instant sans vous aimer.

Je vous aime, ô mon Dieu, et je ne désire le ciel que pour avoir le bonheur de vous aimer parfaitement.

Je vous aime, ô mon Dieu, et je n’appréhende l’enfer que parce qu’on y aura jamais la douce consolation de vous aimer.

Ô mon Dieu, si ma langue ne peut dire à tout moment que je vous aime, du moins je veux que mon cœur vous le répète autant de fois que je respire.

Ah ! Faites-moi la grâce de souffrir en vous aimant, de vous aimer en souffrant, et d’expirer un jour en vous aimant et en sentant que je vous aime.

Et plus j’approche de ma fin, plus je vous conjure d’accroître mon amour et de le perfectionner.

Ainsi soit-il.`,
    },
    portugues: {
      texto: `Eu vos amo, ó meu Deus, e o meu único desejo é amar-vos até o último suspiro da minha vida.

Eu vos amo, ó Deus infinitamente amável, e prefiro morrer amando-vos a viver um só instante sem vos amar.

Eu vos amo, ó meu Deus, e não desejo o céu senão para ter a felicidade de vos amar perfeitamente.

Eu vos amo, ó meu Deus, e não temo o inferno senão porque nele jamais haverá a doce consolação de vos amar.

Ó meu Deus, se a minha língua não pode dizer a todo momento que vos amo, ao menos quero que o meu coração vo-lo repita tantas vezes quantas eu respirar.

Ah! Concedei-me a graça de sofrer amando-vos, de vos amar sofrendo e de um dia expirar amando-vos e sentindo que vos amo.

E, quanto mais me aproximo do meu fim, tanto mais vos suplico que aumenteis o meu amor e o aperfeiçoeis.

Assim seja.`,
      tradutor: "Manus AI — tradução de trabalho, pendente de revisão frase a frase",
    },
    fonte: "Sanctuaire d’Ars, “Acte d’amour du Saint Curé”, página institucional de oração, https://www.arsnet.org/prier/; acesso consultado em 22 de agosto de 2026.",
    autenticidade: "atribuída",
    estadoEditorial: "em revisão",
    notasEditoriais: [
      "O texto foi localizado integralmente em uma página institucional contemporânea do Santuário de Ars.",
      "A página não apresenta, no trecho consultado, uma referência a manuscrito autógrafo, edição histórica ou testemunho do século XIX; por isso, o item é classificado como atribuído, não como autêntico.",
      "O texto francês é preservado como testemunho da página consultada, mas ainda deve ser comparado com Heures catholiques d’Ars ou outra edição histórica antes de qualquer publicação crítica.",
      "A tradução portuguesa foi inserida como tradução de trabalho e ainda requer revisão frase a frase.",
    ],
  },
  {
    id: "oracao-002",
    numero: 2,
    tituloOriginal: "Prière à Jésus crucifié pour obtenir la patience et la résignation dans les souffrances",
    tituloPortugues: "Oração a Jesus crucificado para obter paciência e resignação nos sofrimentos",
    tipo: "preparação",
    original: {
      idioma: "francês",
      texto: `O très doux Jésus ! ô Sauveur crucifié ! c’est pour moi que vous êtes attaché à la croix, c’est pour moi que vous répandez votre précieux sang et que vous endurez une si cruelle mort ! Ah ! tout cet excès d’amour est pour ranimer mon faible courage, et pour m’apprendre que si je ne souffre avec vous, jamais je ne régnerai avec vous..... Roi de l’éternelle gloire, Maître du monde, vous acceptez, pour votre créature, le trépas le plus affreux, et moi qui suis coupable de mille péchés, je ne voudrais rien souffrir pour vous !

Je vous laisserais seul dans les tourments, vous l’époux et la vie de mon âme ! Non, il n’en sera pas ainsi ; je veux, ô mon bon Jésus, partager votre croix et souffrir avec vous. Hélas ! cent fois j’ai mérité par mes péchés le supplice des anges rebelles, et si vous m’eussiez traité en rigueur de justice, je devrais à ce moment subir avec eux les flammes éternelles.

Mais vous avez usé envers moi de miséricorde, ô mon Dieu, vous m’avez épargné, et voilà qu’en place des peines de l’enfer, vous m’envoyez des épreuves, et vous voulez me purifier par les souffrances et préparer ainsi mon âme à jouir de votre gloire. Ah ! j’accepte de bon cœur, et comme un don de votre bonté, ce qu’il vous plaît de m’envoyer.

Ô mon Dieu, malgré les répugnances de la nature, qui se révolte contre la douleur, je veux ce que vous voulez, parce que votre volonté est toujours très juste et très sainte.

Oui, mon Sauveur, que votre volonté se fasse, que mes délicatesses cèdent à votre bon plaisir, et que votre croix triomphe dans mon cœur. Ainsi soit-il.`,
    },
    portugues: {
      texto: `Ó dulcíssimo Jesus! Ó Salvador crucificado! É por mim que estais preso à cruz; é por mim que derramais o vosso precioso sangue e suportais uma morte tão cruel! Ah! todo esse excesso de amor serve para reanimar a minha fraca coragem e ensinar-me que, se eu não sofrer convosco, jamais reinarei convosco. Rei da glória eterna, Senhor do mundo, aceitais, pela vossa criatura, a morte mais terrível; e eu, que sou culpado de mil pecados, não quereria sofrer nada por vós!

Eu vos deixaria sozinho nos tormentos, a vós, esposo e vida da minha alma! Não, meu bom Jesus, não será assim; quero partilhar a vossa cruz e sofrer convosco. Ai de mim! Centenas de vezes mereci, pelos meus pecados, o suplício dos anjos rebeldes; e, se me tivésseis tratado segundo o rigor da justiça, deveria neste momento sofrer com eles as chamas eternas.

Mas usastes de misericórdia para comigo, ó meu Deus; poupastes-me, e eis que, em lugar das penas do inferno, me enviais provações. Quereis purificar-me pelos sofrimentos e preparar assim a minha alma para gozar da vossa glória. Ah! Aceito de bom coração e como um dom da vossa bondade aquilo que vos apraz enviar-me.

Ó meu Deus, apesar das repugnâncias da natureza, que se revolta contra a dor, quero o que quereis, porque a vossa vontade é sempre muito justa e muito santa.

Sim, meu Salvador, seja feita a vossa vontade; cedam as minhas delicadezas ao vosso beneplácito, e triunfe a vossa cruz no meu coração. Assim seja.`,
      tradutor: "Manus AI — tradução de trabalho, pendente de revisão frase a frase",
    },
    fonte: "Heures catholiques d’un serviteur de Dieu, ou Exercices de piété spécialement destinés aux pèlerins d’Ars, edição 2, chez l’éditeur, 1851, pp. 39–40; digitalização Google Books, identificador UIlIoeWWTP0C.",
    autenticidade: "atribuída",
    estadoEditorial: "em revisão",
    notasEditoriais: [
      "O texto foi conferido visualmente nas páginas PDF 48–49, correspondentes às páginas impressas 39–40.",
      "A edição histórica apresenta a oração no corpo das *Heures catholiques* atribuídas editorialmente a Jean-Marie Vianney; não foi localizado nesta etapa um manuscrito autógrafo ou aparato que permita classificá-la como autêntica em sentido estrito.",
      "A pontuação e a grafia foram transcritas com normalização mínima de ligaduras tipográficas e espaços; variantes e eventuais erros da edição deverão ser registrados em revisão posterior.",
      "A tradução portuguesa foi inserida como tradução de trabalho e ainda requer revisão frase a frase.",
    ],
  },
  {
    id: "oracao-003",
    numero: 3,
    tituloOriginal: "Prière du matin",
    tituloPortugues: "Oração da manhã",
    tipo: "oração",
    original: {
      idioma: "francês",
      texto: `AU NOM DU PÈRE, ET DU FILS, ET DU SAINT-ESPRIT. AINSI SOIT-IL.

Ô bienheureuse Trinité, Père, Fils et Saint-Esprit, mon Dieu et mon Tout, prosterné devant le trône de votre gloire, et me souvenant que je suis l’ouvrage de vos mains, que je dépends entièrement de vous, je vous adore avec toute l’humilité et la vénération dont je suis capable; de toute la puissance de mon âme je rends grâces à votre bonté pour les innombrables bienfaits dont elle m’a comblé; je vous bénis, en particulier, de ce que vous avez daigné me créer, me racheter, me conserver jusqu’à ce jour. Ô bon Jésus, mon Dieu, je vous en conjure par votre immense charité, préservez-moi aujourd’hui de tout péché, que je n’aie pas le malheur de perdre votre grâce! Faites au contraire que mon esprit et ma volonté, que mon cœur et mes désirs, enfin toutes les facultés de mon âme et de mon corps ne s’appliquent qu’à vous glorifier et à vous plaire.

Je vous offre, ô mon Sauveur, mes actions et mes souffrances; veuillez les accepter avec bonté, et me les rendre salutaires par les mérites de votre très sainte incarnation, de votre vie, de votre passion et de votre mort.

Ô bienheureuse Vierge Marie, qui êtes après Dieu tout mon espoir, daignez aussi m’assister aujourd’hui de votre puissant secours.

Esprits célestes, mon bon Ange gardien, mes saints Patrons, et vous tous, Élus du Seigneur, protégez ma faiblesse, aidez-moi à m’élever vers vous, et obtenez-moi, dans l’exil et la nuit d’ici-bas, lumière, force et persévérance jusqu’à la fin. Ainsi soit-il.`,
    },
    portugues: {
      texto: `EM NOME DO PAI, E DO FILHO, E DO ESPÍRITO SANTO. ASSIM SEJA.

Ó bem-aventurada Trindade, Pai, Filho e Espírito Santo, meu Deus e meu Tudo, prostrado diante do trono da vossa glória e lembrando-me de que sou obra das vossas mãos e dependo inteiramente de vós, adoro-vos com toda a humildade e veneração de que sou capaz. Com toda a força da minha alma, dou graças à vossa bondade pelos inumeráveis benefícios com que me cumulastes; bendigo-vos, em particular, porque vos dignastes criar-me, redimir-me e conservar-me até este dia. Ó bom Jesus, meu Deus, eu vo-lo suplico pela vossa imensa caridade: preservai-me hoje de todo pecado, para que eu não tenha a desgraça de perder a vossa graça! Fazei, pelo contrário, que o meu espírito e a minha vontade, o meu coração e os meus desejos, enfim, todas as faculdades da minha alma e do meu corpo, se apliquem somente a glorificar-vos e a agradar-vos.

Ofereço-vos, ó meu Salvador, as minhas ações e os meus sofrimentos; dignai-vos aceitá-los com bondade e torná-los salutares para mim pelos méritos da vossa santíssima encarnação, da vossa vida, da vossa paixão e da vossa morte.

Ó bem-aventurada Virgem Maria, que, depois de Deus, sois toda a minha esperança, dignai-vos também assistir-me hoje com o vosso poderoso auxílio.

Espíritos celestes, meu bom Anjo da Guarda, meus santos Padroeiros e vós todos, Eleitos do Senhor, protegei a minha fraqueza, ajudai-me a elevar-me até vós e obtende-me, no exílio e na noite desta vida, luz, força e perseverança até o fim. Assim seja.`,
      tradutor: "Manus AI — tradução de trabalho, pendente de revisão frase a frase",
    },
    fonte: "Heures catholiques d’un serviteur de Dieu, ou Exercices de piété spécialement destinés aux pèlerins d’Ars, edição 2, chez l’éditeur, 1851, pp. 51–52; digitalização Google Books, identificador UIlIoeWWTP0C.",
    autenticidade: "atribuída",
    estadoEditorial: "em revisão",
    notasEditoriais: [
      "O texto foi conferido visualmente nas páginas PDF 60–61, correspondentes às páginas impressas 51–52.",
      "A unidade termina antes do cabeçalho separado “Consécration de soi-même à Dieu. Sainte Chantal.”, que não foi incluído neste registro.",
      "A edição histórica apresenta a oração no corpo das *Heures catholiques* atribuídas editorialmente a Jean-Marie Vianney; não foi localizado nesta etapa um manuscrito autógrafo ou aparato que permita classificá-la como autêntica em sentido estrito.",
      "A tradução portuguesa é uma tradução de trabalho e requer revisão frase a frase.",
    ],
  },
  {
    id: "oracao-004",
    numero: 4,
    tituloOriginal: "Prière du soir",
    tituloPortugues: "Oração da noite",
    tipo: "preparação",
    original: {
      idioma: "francês",
      texto: `Mon Dieu, je me présente devant vous à la fin de cette journée, pour vous adorer avec la soumission que m’inspire votre souveraine grandeur.

Je vous adore, ô mon Dieu, par Jésus-Christ, votre très cher Fils, et je vous remercie en son nom de toutes les grâces que j’ai reçues de vous. Pater, Ave, Credo.

Demandez à Dieu la grâce de connaître vos péchés.

Source éternelle de lumière, Esprit saint, dissipez les ténèbres qui me cachent la laideur et la malice du péché, faites-m’en concevoir une si grande horreur, ô mon Dieu! que je le haïsse, s’il se peut, autant que vous le haïssez vous-même.

Mon Dieu, souverain juge des hommes, qui par une miséricorde infinie ne voulez pas que le pécheur périsse, mais qu’il évite par la pénitence vos redoutables jugements, je me présente devant vous à la fin de cette journée pour vous en rendre compte.

Donnez-moi, Seigneur, les lumières dont j’ai besoin pour connaître mes fautes, et la douleur nécessaire pour les bien détester.

Il faut ici examiner sa conscience sur les péchés commis pendant la journée, par pensées, paroles et actions, sur le bon ou mauvais usage qu’on a fait du temps, sur la fidélité à accomplir les obligations de son état et à pratiquer les vertus chrétiennes.

Mon Dieu, je vous demande très humblement pardon des fautes que j’ai commises, ayant un grand regret de vous avoir offensé, parce que vous êtes infiniment bon et que le péché vous déplaît. Je me propose, moyennant votre sainte grâce, de ne plus retomber dans les fautes que j’ai commises, je les mets toutes dans l’abîme de la sainte Croix de votre Fils Jésus, vous suppliant, par les mérites de son nom et pour l’amour de lui, de me pardonner et de me remettre en grâce avec vous. Confiteor.

Mon Dieu, je vous offre le sommeil que je vais prendre et mon réveil du lendemain, je vous supplie de bénir et de sanctifier l’un et l’autre; accordez-moi la grâce de m’endormir en vous, de m’éveiller en vous, et de ne vivre que pour vous.

Cœur de Marie, ma bonne mère, je me donne tout à vous, rendez mon cœur humble, pur et embrasé comme le vôtre.

Ô sainte Vierge, saint Joseph, sainte Anne, saint Joachim et tous nos chers patrons et protecteurs, je vous en prie par la ferveur et le feu de l’amour qui a attiré vos cœurs à Dieu, assistez-moi maintenant et à l’heure de ma mort. Ainsi soit-il.`,
    },
    portugues: {
      texto: `Meu Deus, apresento-me diante de vós ao fim deste dia, para adorar-vos com a submissão que me inspira a vossa soberana grandeza.

Adoro-vos, ó meu Deus, por meio de Jesus Cristo, vosso Filho muito amado, e agradeço-vos em seu nome todas as graças que recebi de vós. Pai-Nosso, Ave-Maria, Credo.

Pedi a Deus a graça de conhecer os vossos pecados.

Fonte eterna de luz, Espírito Santo, dissipai as trevas que me ocultam a feiura e a malícia do pecado; fazei-me conceber por ele um horror tão grande, ó meu Deus, que eu o odeie, se possível, tanto quanto vós mesmo o odiais.

Meu Deus, soberano juiz dos homens, que, por uma misericórdia infinita, não quereis que o pecador pereça, mas que evite, pela penitência, os vossos temíveis juízos, apresento-me diante de vós ao fim deste dia para prestar-vos contas dele.

Dai-me, Senhor, as luzes de que preciso para conhecer as minhas faltas e a dor necessária para detestá-las verdadeiramente.

Aqui é preciso examinar a consciência sobre os pecados cometidos durante o dia, por pensamentos, palavras e ações; sobre o bom ou mau uso que se fez do tempo; sobre a fidelidade em cumprir as obrigações do próprio estado e em praticar as virtudes cristãs.

Meu Deus, peço-vos muito humildemente perdão pelas faltas que cometi, com grande pesar por vos ter ofendido, porque sois infinitamente bom e o pecado vos desagrada. Proponho-me, com o auxílio da vossa santa graça, não mais recair nas faltas que cometi; coloco-as todas no abismo da santa Cruz do vosso Filho Jesus, suplicando-vos, pelos méritos do seu nome e por amor dele, que me perdoeis e me reconcilieis convosco. Confiteor.

Meu Deus, ofereço-vos o sono que vou ter e o meu despertar no dia seguinte; suplico-vos que abençoeis e santifiqueis um e outro. Concedei-me a graça de adormecer em vós, despertar em vós e viver somente para vós.

Coração de Maria, minha boa mãe, entrego-me inteiramente a vós; tornai o meu coração humilde, puro e inflamado como o vosso.

Ó santa Virgem, São José, Santa Ana, São Joaquim e todos os nossos queridos padroeiros e protetores, vo-lo peço pelo fervor e pelo fogo do amor que atraiu os vossos corações a Deus: assisti-me agora e na hora da minha morte. Assim seja.`,
      tradutor: "Manus AI — tradução de trabalho, pendente de revisão frase a frase",
    },
    fonte: "Heures catholiques d’un serviteur de Dieu, ou Exercices de piété spécialement destinés aux pèlerins d’Ars, edição 2, chez l’éditeur, 1851, pp. 67–69; digitalização Google Books, identificador UIlIoeWWTP0C.",
    autenticidade: "atribuída",
    estadoEditorial: "em revisão",
    notasEditoriais: [
      "O texto foi conferido visualmente nas páginas PDF 76–78, correspondentes às páginas impressas 67–69.",
      "A unidade inclui a instrução de exame de consciência e a indicação litúrgica “Confiteor”, tal como aparecem dentro da seção da oração da noite.",
      "A unidade termina antes do cabeçalho separado “Prière pour les vivants et les fidèles trépassés”, que não foi incluído.",
      "A edição histórica apresenta a oração no corpo das *Heures catholiques* atribuídas editorialmente a Jean-Marie Vianney; não foi localizado nesta etapa um manuscrito autógrafo ou aparato que permita classificá-la como autêntica em sentido estrito.",
      "A tradução portuguesa é uma tradução de trabalho e requer revisão frase a frase.",
    ],
  },
  {
    id: "oracao-005",
    numero: 5,
    tituloOriginal: "Prière pour les vivants et les fidèles trépassés",
    tituloPortugues: "Oração pelos vivos e pelos fiéis defuntos",
    tipo: "oração",
    original: {
      idioma: "francês",
      texto: `Prière pour les vivants et les fidèles trépassés.

Répandez, Seigneur, vos bénédictions sur mes parents, mes bienfaiteurs, mes amis et mes ennemis, et sur tous ceux pour lesquels je dois prier, et spécialement pour notre saint père le Pape, et pour tous les Ministres de notre sainte religion.

Secourez les pauvres, les prisonniers, les affligés, les voyageurs, les malades et les agonisants; convertissez les incrédules, les hérétiques et les infidèles.

Dieu de bonté et de miséricorde, ayez aussi pitié des âmes des fidèles qui sont dans le purgatoire, mettez fin à leurs peines et donnez à celles pour lesquelles je suis obligé de prier, le repos et la lumière éternelle.`,
    },
    portugues: {
      texto: `Oração pelos vivos e pelos fiéis defuntos.

Derramai, Senhor, as vossas bênçãos sobre os meus pais, os meus benfeitores, os meus amigos e os meus inimigos, e sobre todos aqueles por quem devo rezar, especialmente pelo nosso Santo Padre, o Papa, e por todos os ministros da nossa santa religião.

Socorrei os pobres, os prisioneiros, os aflitos, os viajantes, os doentes e os agonizantes; convertei os incrédulos, os hereges e os infiéis.

Deus de bondade e de misericórdia, tende também piedade das almas dos fiéis que estão no purgatório; ponde fim às suas penas e dai àquelas por quem sou obrigado a rezar o descanso e a luz eternos.`,
      tradutor: "Manus AI — tradução de trabalho, pendente de revisão frase a frase",
    },
    fonte: "Heures catholiques d’un serviteur de Dieu, ou Exercices de piété spécialement destinés aux pèlerins d’Ars, edição 2, chez l’éditeur, 1851, p. 69; digitalização Google Books, identificador UIlIoeWWTP0C.",
    autenticidade: "atribuída",
    estadoEditorial: "em revisão",
    notasEditoriais: [
      "O texto foi conferido na página PDF 78, correspondente à página impressa 69.",
      "A unidade começa depois do encerramento da “Prière du soir” e termina antes das “Litanies de la très sainte Vierge”.",
      "A edição histórica apresenta a oração no corpo das *Heures catholiques* atribuídas editorialmente a Jean-Marie Vianney; não foi localizado nesta etapa um manuscrito autógrafo ou aparato que permita classificá-la como autêntica em sentido estrito.",
      "A tradução portuguesa é uma tradução de trabalho e requer revisão frase a frase.",
    ],
  },
  {
    id: "oracao-006",
    numero: 6,
    tituloOriginal: "Acte de Foi",
    tituloPortugues: "Ato de fé",
    tipo: "ato de fé",
    original: {
      idioma: "francês",
      texto: `Mon Dieu, je crois fermement toutes les vérités que croit et enseigne votre sainte Église, parce que c’est vous-même qui les lui avez révélées.`,
    },
    portugues: {
      texto: `Meu Deus, creio firmemente em todas as verdades que a vossa santa Igreja crê e ensina, porque fostes vós mesmo quem lhas revelou.`,
      tradutor: "Manus AI — tradução de trabalho, pendente de revisão frase a frase",
    },
    fonte: "Heures catholiques d’un serviteur de Dieu, ou Exercices de piété spécialement destinés aux pèlerins d’Ars, edição 2, chez l’éditeur, 1851, p. 59; digitalização Google Books, identificador UIlIoeWWTP0C.",
    autenticidade: "atribuída",
    estadoEditorial: "em revisão",
    notasEditoriais: [
      "O texto foi conferido visualmente na página PDF 68, correspondente à página impressa 59.",
      "O ato aparece na sequência dos atos de fé, esperança e amor; as notas de indulgência da página seguinte não foram incorporadas ao texto.",
      "A edição histórica apresenta a fórmula no corpo das *Heures catholiques* atribuídas editorialmente a Jean-Marie Vianney; não foi localizado nesta etapa um manuscrito autógrafo.",
      "A tradução portuguesa é uma tradução de trabalho e requer revisão frase a frase.",
    ],
  },
  {
    id: "oracao-007",
    numero: 7,
    tituloOriginal: "Acte d’Espérance",
    tituloPortugues: "Ato de esperança",
    tipo: "ato de esperança",
    original: {
      idioma: "francês",
      texto: `Mon Dieu, je mets toute ma confiance dans votre bonté infinie, et j’espère qu’en vue des mérites de Jésus-Christ, vous me donnerez, tout indigne que j’en suis, votre grâce en ce monde, et la vie éternelle en l’autre, parce que vous me l’avez promis, et que vous êtes souverainement fidèle dans vos promesses.`,
    },
    portugues: {
      texto: `Meu Deus, deposito toda a minha confiança na vossa bondade infinita e espero que, em consideração aos méritos de Jesus Cristo, me concedais, embora eu seja indigno disso, a vossa graça neste mundo e a vida eterna no outro, porque vós mo prometestes e sois soberanamente fiel às vossas promessas.`,
      tradutor: "Manus AI — tradução de trabalho, pendente de revisão frase a frase",
    },
    fonte: "Heures catholiques d’un serviteur de Dieu, ou Exercices de piété spécialement destinés aux pèlerins d’Ars, edição 2, chez l’éditeur, 1851, p. 59; digitalização Google Books, identificador UIlIoeWWTP0C.",
    autenticidade: "atribuída",
    estadoEditorial: "em revisão",
    notasEditoriais: [
      "O texto foi conferido visualmente na página PDF 68, correspondente à página impressa 59.",
      "O ato aparece na sequência dos atos de fé, esperança e amor; as notas de indulgência da página seguinte não foram incorporadas ao texto.",
      "A edição histórica apresenta a fórmula no corpo das *Heures catholiques* atribuídas editorialmente a Jean-Marie Vianney; não foi localizado nesta etapa um manuscrito autógrafo.",
      "A tradução portuguesa é uma tradução de trabalho e requer revisão frase a frase.",
    ],
  },
  {
    id: "oracao-008",
    numero: 8,
    tituloOriginal: "Acte d’Amour de Dieu",
    tituloPortugues: "Ato de amor a Deus",
    tipo: "ato de caridade",
    original: {
      idioma: "francês",
      texto: `Mon Dieu, je vous aime de tout mon cœur et par-dessus toute chose, parce que vous êtes infiniment bon, infiniment aimable; enflammez de plus en plus mon cœur du feu sacré de votre saint amour.`,
    },
    portugues: {
      texto: `Meu Deus, amo-vos de todo o meu coração e acima de todas as coisas, porque sois infinitamente bom e infinitamente amável; inflamai cada vez mais o meu coração com o fogo sagrado do vosso santo amor.`,
      tradutor: "Manus AI — tradução de trabalho, pendente de revisão frase a frase",
    },
    fonte: "Heures catholiques d’un serviteur de Dieu, ou Exercices de piété spécialement destinés aux pèlerins d’Ars, edição 2, chez l’éditeur, 1851, pp. 59–60; digitalização Google Books, identificador UIlIoeWWTP0C.",
    autenticidade: "atribuída",
    estadoEditorial: "em revisão",
    notasEditoriais: [
      "O texto começa na página PDF 68, correspondente à página impressa 59, e termina na página PDF 69, correspondente à página impressa 60.",
      "As notas de indulgência que seguem a fórmula não foram incorporadas ao texto.",
      "A edição histórica apresenta a fórmula no corpo das *Heures catholiques* atribuídas editorialmente a Jean-Marie Vianney; não foi localizado nesta etapa um manuscrito autógrafo.",
      "A tradução portuguesa é uma tradução de trabalho e requer revisão frase a frase.",
    ],
  },
];

export const notasOracoes = [
  "O levantamento deverá verificar especialmente Heures catholiques d’Ars, coleções oratorianas e manuscritos preservados.",
  "Orações devocionais de uso local não serão atribuídas automaticamente a Vianney sem testemunho textual ou tradição editorial identificável.",
  "As traduções presentes são versões de trabalho produzidas após a conferência inicial do original; ainda requerem revisão frase a frase e não são versões finais.",
];
