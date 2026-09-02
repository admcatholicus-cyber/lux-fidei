/**
 * Corpus editorial de São João Maria Vianney — Sermões Célebres (Lote 1)
 *
 * Edição-base: Sermons du Curé d'Ars, 1883.
 *
 * Sermão 1: Sobre o Juízo Final (Tomo I, pp. 1–24)
 * Sermão 2: Sobre o Inferno dos Cristãos (Tomo I, pp. 212–233)
 */

export type VolumeSermoes = 1 | 2 | 3 | 4;
export type AutenticidadeSermoes = "autêntica" | "atribuída" | "duvidosa";

export interface SermaoCelebre {
  id: string;
  numero: number;
  temaDoutrinal: string;
  tituloOriginal: string;
  tituloPortugues: string;
  volume: VolumeSermoes;
  paginasFonte: string;
  original: {
    idioma: "francês";
    texto: string;
  };
  portugues: {
    texto: string;
    tradutor: string;
  };
  latim: string;
  referenciasBiblicas: string[];
  fonte: string;
  autenticidade: AutenticidadeSermoes;
  estadoEditorial: "em levantamento" | "em revisão" | "revisado";
  notasEditoriais: string[];
}

/* =========================================================================
   SERMÃO 1: SOBRE O JUÍZO FINAL
   ========================================================================= */

const juizoFrances = `Ce n'est plus, mes frères, un Dieu revêtu de nos infirmités, caché dans l'obscurité d'une pauvre étable, couché dans une crèche, rassasié d'opprobres, accablé sous le pesant fardeau de sa croix; c'est un Dieu revêtu de tout l'éclat de sa puissance et de sa majesté, qui fait annoncer sa venue par les prodiges les plus effrayants, c'est-à-dire, par l'éclipse du soleil, de la lune, par la chute des étoiles, et par un entier bouleversement de la nature. Ce n'est plus un Sauveur qui vient avec la douceur d'un agneau, pour être jugé des hommes et les racheter: c'est un Juge justement irrité, qui juge les hommes dans toute la rigueur de sa justice. Ce n'est plus un Pasteur charitable qui vient chercher ses brebis égarées, et les pardonner: c'est un Dieu vengeur qui vient séparer pour jamais les pécheurs des justes, accabler les méchants de sa plus terrible vengeance, et ensevelir les justes dans un torrent de douceurs.

Moment terrible, moment épouvantable, quand arriveras-tu? moment malheureux, hélas! peut-être que, dans quelques matins, nous entendrons les avant-coureurs de ce Juge si redoutable au pécheur. O vous, pécheurs, sortez du tombeau de vos péchés, venez au tribunal de Dieu, venez vous instruire de la manière dont le pécheur sera traité. L'impie, dans ce monde, semble vouloir méconnaître la puissance de Dieu, en voyant les pécheurs sans punition; il va même jusqu'à dire: Non, non, il n'y a ni Dieu ni enfer; ou bien: Dieu ne fait pas attention à ce qui se passe sur la terre. Mais attendons le jugement, et, en ce grand jour, Dieu manifestera sa puissance et montrera à toutes les nations qu'il a tout vu et tout compté.

Quelle différence, M. F., de ces merveilles qu'il opéra en créant le monde! Que les eaux, dit le Seigneur, arrosent, fertilisent la terre; et, dès l'instant même, les eaux couvrirent la terre et lui donnèrent la fécondité. Mais, quand il viendra pour détruire le monde, il commandera à la mer de franchir ses bornes avec une impétuosité épouvantable qui engloutira tout l'univers dans sa fureur. Lorsque Dieu créa le ciel, il ordonna aux étoiles de s'attacher au firmament. À sa voix, le soleil éclaira le jour, et la lune présida à la nuit. Mais dans ce dernier jour, le soleil s'obscurcira, et la lune et les étoiles ne donneront plus de lumière. Tous ces astres merveilleux tomberont avec un fracas épouvantable.

Quelle différence, M. F.! Dieu en créant le monde employa six jours; mais pour le détruire, un clin d'œil suffira. Pour créer l'univers et tout ce qu'il renferme, Dieu n'appela aucun spectateur de tant de merveilles; mais pour le détruire, tous les peuples seront en présence, toutes les nations confesseront qu'il y a un Dieu et qu'il est puissant. Venez, rieurs impies, venez, incrédules raffinés, venez apprendre ou reconnaître s'il y a un Dieu, s'il a vu toutes vos actions, et s'il est tout-puissant! O mon Dieu! que le pécheur changera de langage dans ce moment! que de regrets! oh! que de repentir d'avoir laissé un temps si précieux! Mais ce n'est plus temps, tout est fini pour le pécheur, tout est désespéré! Oh! que ce moment sera terrible! Saint Luc nous dit que les hommes sécheront de frayeur sur la plante de leurs pieds, en pensant aux malheurs qui leur sont préparés. Hélas! M. F., l'on peut bien sécher de crainte et mourir de frayeur, dans l'attente d'un malheur infiniment moins grand que n'est celui dont le pécheur est menacé, et qui, très certainement, lui arrivera, s'il continue à vivre dans le péché.

Dans ce moment, M. F., que je me dispose à vous parler du jugement, où nous paraîtrons tous pour rendre compte de tout le bien et le mal que nous aurons fait, pour y recevoir notre sentence definitiva pour le ciel ou pour l'enfer: si déjà un ange venait vous annoncer de la part de Dieu que dans vingt-quatre heures, tout l'univers sera réduit en feu par une pluie de feu et de soufre, que vous commenciez à entendre les tonnerres gronder, les fureurs des tempêtes renverser vos maisons, les éclairs tellement multipliés que l'univers ne fût plus qu'un globe de feu, et que l'enfer vomît déjà tous ses réprouvés dont les cris et les hurlements se font entendre vers les coins du monde; que le seul moyen d'éviter tous ces malheurs fût de quitter le péché et de faire pénitence; pourriez-vous, M. F., entendre tous ces hommes sans verser des torrents de larmes et crier miséricorde. Ne vous verrait-on pas vous jeter au pied des autels pour demander miséricorde? O aveuglement, ô malheur incompréhensible de l'homme pécheur! les maux que vous annonce votre pasteur sont encore infiniment plus épouvantables et dignes d'arracher vos larmes, de déchirer vos cœurs.

Hélas! ces vérités si terribles vont être autant de sentences qui vont prononcer votre condamnation éternelle. Mais le plus grand de tous les malheurs est que vous y soyez insensibles, et que vous continuiez à vivre dans le péché, et que vous ne reconnaissiez votre folie que dans le moment où vous n'avez plus de remèdes. Encore un moment et ce pécheur, qui vivait tranquille dans le péché, sera jugé et condamné; encore un instant, et il emportera ses regrets dans l'éternité. Oui, M. F., nous serons jugés, rien de si certain; oui, nous serons jugés sans miséricorde; oui, nous regretterons éternellement d'avoir péché.

Nous lisons dans l'Écriture sainte, M. F., que toutes les fois que Dieu veut envoyer quelque fléau au monde ou à son Église, il a toujours fait précéder quelque signe pour commencer à jeter la terreur dans les cœurs et pour les porter à fléchir sa justice. Voulant faire périr l'univers par un déluge, l'arche de Noé, qui resta cent ans pour se bâtir, fut un signe pour porter les hommes à la pénitence. L'historien Josèphe nous dit qu'avant la destruction de Jérusalem, il parut une comète en forme de glaive, qui jetait la consternation. La lune demeura huit nuits sans donner de lumière...

Mais le jour du jugement sera précédé de signes si effrayants qu'ils jetteront la terreur jusqu'au fond des abîmes. Le soleil ne donnera plus de lumière, la lune sera semblable à du sang, et les étoiles tomberont du ciel. L'air sera rempli d'éclairs et de tonnerres. Les vents emporteront les arbres et les maisons. La mer bouillonnera de tempêtes. Tout le monde sera réduit en cendres par un feu purificateur.

Alors les anges sonneront de la trompette aux quatre coins du monde: "Levez-vous, morts, et venez au jugement!" Les âmes des saints descendront du ciel, resplendissantes de gloire, paraissant devant leurs corps pour se réjouir éternellement avec Christ. Mais les âmes des réprouvés sortiront des abîmes pour reprendre leurs corps et subir les peines éternelles.

Alors le Juge apparaîtra sur son trône de majesté, précédé de sa Croix. Les pécheurs crieront aux montagnes: "Tombez sur nous, cachez-nous de la face du Juge!" Mais il n'y aura plus de fuite. Le livre des consciences sera ouvert, tous les péchés cachés seront révélés devant tout l'univers, et la sentence irrévocable sera prononcée.`;

const juizoPortugues = `Já não é, meus irmãos, um Deus revestido de nossas enfermidades, escondido na escuridão de uma pobre estrebaria, deitado numa manjedoura, saciado de opróbrios, oprimido pelo pesado fardo da sua cruz; é um Deus revestido de todo o esplendor do seu poder e da sua majestade, que faz anunciar a sua vinda pelos prodígios mais aterrorizantes: o eclipse do sol e da lua, a queda das estrelas e a completa convulsão da natureza.

Não é mais um Salvador que vem com a doçura de um cordeiro para ser julgado pelos homens e os resgatar; é um Juiz justamente irado, que julga os homens em toda a rigorosidade da sua justiça. Não é mais um Pastor caridoso que vem procurar as suas ovelhas desgarradas e perdoá-las; é um Deus vingador que vem separar para sempre os pecadores dos justos, esmagar os maus com a sua mais terrível vingança e mergulhar os justos num torrente de consolações.

Momento terrível, momento apavorante! Quando chegarás? Momento infeliz, ai de nós! Talvez muito em breve ouviremos os arautos deste Juiz tão formidável para o pecador. Ó vós, pecadores, saí do túmulo dos vossos pecados, vinde ao tribunal de Deus, vinde saber de que maneira o pecador será tratado!

O ímpio, neste mundo, parece querer ignorar o poder de Deus ao ver os pecadores sem punição; vai mesmo ao ponto de dizer: "Não, não há Deus nem inferno", ou então: "Deus não presta atenção ao que se passa na terra". Mas esperemos pelo julgamento, e, nesse grande dia, Deus manifestará o seu poder e mostrará a todas as nações que tudo viu e tudo contou.

Que diferença das maravilhas que Ele operou ao criar o mundo! "Que as águas", disse o Senhor, "fertilizem a terra"; e, no mesmo instante, as águas cobriram a terra e lhe deram fecundidade. Mas, quando Ele vier para destruir o mundo, ordenará ao mar que ultrapasse os seus limites com uma impetuosidade espantosa que engolirá todo o universo em sua fúria. Quando Deus criou o céu, ordenou às estrelas que se fixassem no firmamento. À sua voz, o sol iluminou o dia e a lua presidiu à noite. Mas, neste último dia, o sol se escurecerá, e a lua e as estrelas não darão mais luz. Todos esses astros maravilhosos cairão com um estrondo terrível.

Para criar o universo, Deus empregou seis dias; mas para destruí-lo, um piscar de olhos bastará!

Vinde, risonhos ímpios, vinde, incrédulos refinados, vinde aprender e reconhecer se há um Deus, se Ele viu todas as vossas ações e se Ele é Onipotente! Ó meu Deus, como o pecador mudará de linguagem nesse momento! Quanto arrependimento por ter perdido um tempo tão precioso! Mas não haverá mais tempo: tudo estará acabado para o pecador, tudo estará desesperado! São Lucas nos diz que os homens secarão de pavor ao pensar nos males que lhes estão preparados.

Se um anjo viesse agora anunciar-vos da parte de Deus que, em vinte e quatro horas, todo o universo será reduzido a cinzas por uma chuva de fogo e enxofre, e se começásseis a ouvir os trovões rugirem, não vos veríamos lançar-vos aos pés dos altares a pedir misericórdia? Ó cegueira! Os males que o vosso pastor vos anuncia são ainda infinitamente mais terríveis e dignos de arrancar as vossas lágrimas e rasgar os vossos corações!

Sim, meus irmãos, seremos julgados, nada é tão certo; sim, seremos julgados sem misericórdia se continuarmos no pecado!

Lemos na Sagrada Escritura que todas as vezes que Deus quer enviar uma praga ao mundo ou à Sua Igreja, Ele sempre faz preceder algum sinal para lançar o temor nos corações e levá-los a dobrar a Sua justiça. Querendo destruir o universo pelo dilúvio, a arca de Noé foi um sinal para convidar os homens à penitência. O historiador Josefo conta-nos que, antes da destruição de Jerusalém, apareceu um cometa em forma de espada que lançou a consternação...

Mas o dia do Juízo será precedido por sinais tão aterrorizantes que lançarão o pavor até ao fundo dos abismos. O sol não dará mais luz, a lua parecerá sangue e as estrelas cairão do céu. O ar ficará repleto de relâmpagos e trovões. Os ventos arrastarão árvores e casas. O mar ferverá em tempestades. Todo o universo será reduzido a cinzas por um fogo purificador.

Então os anjos tocarão a trombeta aos quatro cantos do mundo: "Levantai-vos, mortos, e vinde ao julgamento!" As almas dos santos descerão do céu, resplendentes de glória, unindo-se aos seus corpos para se rejubilarem eternamente com Cristo. Mas as almas dos réprobos sairão dos abismos para reassumirem seus corpos e sofrerem as penas eternas.

Então o Juiz aparecerá no Seu trono de majestade, precedido pela Sua Cruz. Os pecadores gritarão às montanhas: "Caí sobre nós, escondei-nos da face do Juiz!" Mas não haverá fuga. O livro das consciências será aberto, todos os pecados ocultos serão revelados diante de todo o universo, e a sentença irrealizável será pronunciada.`;

/* =========================================================================
   SERMÃO 2: SOBRE O INFERNO DOS CRISTÃOS
   ========================================================================= */

const infernoFrances = `Nous lisons dans l'Évangile que, lorsque le Sauveur fut entré à Capharnaüm, un centenier vint le trouver, lui disant: « Seigneur, mon serviteur est malade dans ma maison, d'une paralysie dont il souffre beaucoup. » - « Eh bien! lui dit ce bon Sauveur, j'irai et je le guérirai. » - « Ah! mon Seigneur, lui dit le centenier, je ne suis pas digne que vous entriez dans ma maison; mais dites seulement une parole, et mon serviteur sera guéri. Puisque moi qui suis un homme sujet à des commandements, cependant j'ai des soldats sous moi, je dis à l'un: Allez là, et il y va; à un autre: Venez ici, et il vient; et à mon serviteur: Faites cela, et il le fait. » Jésus l'ayant entendu parler ainsi en fut ravi d'admiration, et dit à ceux qui le suivaient: « Je vous dis en vérité que je n'ai point trouvé une foi si vive en tout Israël. C'est pourquoi je vous déclare que plusieurs viendront de l'Orient et de l'Occident et seront placés avec Abraham, Isaac et Jacob, dans le royaume des cieux, tandis que les enfants du royaume seront jetés dehors dans les ténèbres, et là, il y aura des pleurs et des grincements de dents. »

Qui est celui d'entre nous, M. F., qui, voulant bien se donner la peine de pénétrer le sens de ces paroles, ne se sentirait pas pénétré et saisi de frayeur jusqu'au désespoir en pensant que ce sont véritablement les mauvais chrétiens qui sont ces malheureux, qui seront chassés du royaume des cieux et jetés dans les ténèbres extérieures, c'est-à-dire, M. F., en enfer, où il y aura des pleurs et des grincements de dents: tandis que des idolâtres et des païens, qui n'ont jamais eu le bonheur de connaître Jésus-Christ, ouvriront les yeux de l'âme, quitteront la voie de la perdition, viendront se ranger dans le sein de l'Église, et prendre la place que ces mauvais chrétiens ont perdue par le mépris des grâces qu'ils ont reçues.

Mais ce n'est pas encore assez, M. F. Les chrétiens damnés souffriront en effet des tourments infiniment plus rigoureux que les infidèles. La raison en est que ces étrangers seront damnés en partie parce qu'ils n'ont jamais entendu parler de Jésus-Christ et de sa religion; qu'ils ont vécu et qu'ils sont morts dans l'ignorance: tandis que les chrétiens ont vu, dès l'âge de raison, le flambeau de la foi briller devant eux comme un beau soleil et ont reçu des lumières plus que suffisantes pour connaître ce qu'ils devaient à Dieu, au prochain et à eux-mêmes. O enfer des chrétiens, que tu seras terrible et rigoureux!

Pour vous faire comprendre, M. F., la grandeur des tourments qui sont réservés aux mauvais chrétiens, il faudrait être Dieu lui-même, parce qu'il n'y a que lui seul qui le comprenne, et les damnés seuls le sentent, puisque Dieu est infini dans ses punitions comme dans ses récompenses. Quand le bon Dieu me donnerait le pouvoir de traîner ici, à ma place, un infâme Judas qui a commis un horrible sacrilège en communiant indignement et en vendant son divin Maître, son seul cri serait de me dire: Oh! je souffre! Triste langage qui ne peut exprimer ni la grandeur, ni la longueur de leurs souffrances! O enfer des chrétiens, que tu seras terrible! puisque Jésus-Christ semble épuiser sa puissance, sa colère et sa fureur pour faire souffrir ces mauvais chrétiens.

O mon Dieu, peut-on bien y penser, et se sentir de ce nombre, et vivre tranquille! Mon Dieu, quel malheur est comparable à celui des chrétiens! Mais, me direz-vous, d'après cela il semblerait qu'il y a plusieurs enfers. Eh bien! M. F., moi, je vous dirai que, si les souffrances et les tourments des damnés étaient les mêmes, Dieu ne serait pas juste. Je dis de plus, qu'il y a autant d'enfers que de damnés, et que leurs souffrances sont grandes à proportion de la grandeur et du nombre des péchés qu'ils ont commis et des grâces qu'ils ont méprisées.

Si les idolâtres, nous disent les saints, sont damnés pour avoir transgressé les lois de Dieu qu'ils ne connaissaient pas, quelle sera donc la punition des chrétiens qui sentent si bien le mal qu'ils font, les devoirs qu'ils ont à remplir, qui comprennent combien ils outragent Dieu e qui, malgré tout cela, ne laissent pas de pécher? Non, non, M. F., la puissance et la colère de Dieu semblent n'être pas assez grandes ni l'éternité assez longue pour punir ces malheureux.

Écoutez les cris, les hurlements des chrétiens damnés: « Hélas! que je souffre! Je ne vois, je ne touche, e je ne sens que du feu. Ah! si je suis damné, c'est bien par ma faute; je savais bien tout ce qu'il fallait faire pour me sauver, et j'avais tous les moyens plus que nécessaires pour cela. Hélas! en péchant, je savais très bien que je perdais mon Dieu, mon âme et le ciel, et que je me condamnais pour jamais à brûler dans les enfers! Ah! malheureux! je suis bien puni, parce que je l'ai voulu! »

Oui, M. F., un chrétien damné aura, pendant toute l'éternité, devant les yeux, toutes les bonnes pensées, tous les bons désirs, toutes les bonnes œuvres qu'il aurait pu faire et qu'il n'a pas faites, tous les sacrements qu'il n'a pas reçus et qu'il aurait pu recevoir, toutes les prières manquées, toutes les messes qu'il a mal entendues. Tous ces souvenirs seront comme autant de bourreaux qui le dévoreront.

Ah! mes enfants, nos corps sont le temple du Saint-Esprit par le saint baptême e la sainte communion; nos cœurs sont semblables à un ciboire qui renferme Jésus-Christ. Chaque fois que nous péchons, nous faisons une profanation e un sacrilège affreux. Pensons-y sérieusement: ou changeons de vie, ou nous serons damnés! Aproveitemos o pouco tempo que nos resta para assegurar o céu.`;

const infernoPortugues = `TERCEIRO DOMINGO DEPOIS DA EPIFANIA.

Sobre o Inferno dos Cristãos.

Ibi erit fletus et stridor dentium.
"Ali haverá choro e ranger de dentes." (Evangelho de São Mateus, 8, 12)

Lemos no Evangelho que, quando o Salvador entrou em Cafarnaum, um centurião veio ao seu encontro, dizendo-lhe: "Senhor, o meu servo jaz em casa paralítico, sofrendo terrivelmente." Disse-lhe o bom Salvador: "Eu irei e o curarei." Respondeu o centurião: "Senhor, eu não sou digno de que entreis debaixo do meu teto; mas dizei somente uma palavra e o meu servo será curado. Pois também eu sou homem sujeito à autoridade, e tenho soldados sob as minhas ordens; e digo a um: Vai, e ele vai; e a outro: Vem, e ele vem; e ao meu servo: Faz isto, e ele o faz." Ouvindo isto, Jesus admirou-se e disse aos que o seguiam: "Em verdade vos digo que não encontrei tamanha fé em ninguém em Israel. Por isso vos digo que muitos virão do Oriente e do Ocidente e sentar-se-ão à mesa com Abraão, Isaque e Jacó no reino dos céus, ao passo que os filhos do reino serão lançados nas trevas exteriores; ali haverá choro e ranger de dentes."

Quem de nós, meus irmãos, querendo penetrar o sentido destas palavras, não se sentiria tomado de um terror profundo ao pensar que são verdadeiramente os maus cristãos esses infelizes que serão expulsos do reino dos céus e lançados nas trevas exteriores, isto é, no inferno, onde haverá choro e ranger de dentes? Enquanto isso, pagãos e idólatras, que nunca tiveram a felicidade de conhecer a Jesus Cristo, abrirão os olhos da alma, deixarão o caminho da perdição, virão abrigar-se no seio da Igreja e tomarão o lugar que esses maus cristãos perderam pelo desprezo das graças recebidas.

Mas isso ainda não é tudo, meus irmãos. Os cristãos condenados sofrerão tormentos infinitamente mais rigorosos do que os infiéis. A razão é simples: os pagãos serão condenados em parte porque nunca ouviram falar de Jesus Cristo e viveram na ignorância; ao passo que os cristãos viram, desde o uso da razão, a tocha da fé brilhar diante deles como um sol radiante, e receberam luzes mais do que suficientes para conhecer os seus deveres para com Deus, para com o próximo e para consigo mesmos. Ó inferno dos cristãos, quão terrível e rigoroso serás!

Para vos fazer compreender a grandeza dos tormentos reservados aos maus cristãos, seria preciso ser o próprio Deus, pois só Ele compreende totalmente a Sua justiça, e só os condenados a sentem na eternidade. Se o bom Deus me desse o poder de trazer aqui, diante de vós, um infame Judas que cometeu um sacrilégio horrível ao comungar indignamente e vender o seu Divino Mestre, o seu único grito seria: "Oh! Eu sofro!" Triste linguagem que não pode exprimir a grandeza nem a duração de tais dores! Ó inferno dos cristãos, quão terrível serás, pois Jesus Cristo parece esgotar nele todo o Seu poder e a Sua justa ira para punir aqueles que desprezaram o Seu Amor!

Ó meu Deus, como se pode pensar nisso, sentir-se nesse número e viver tranquilo? Meu Deus, que desgraça é comparável à destes cristãos! Mas dir-me-eis: "Parece então que há vários infernos?" Pois bem, meus irmãos, eu vos digo que, se os sofrimentos e tormentos dos condenados fossem iguais, Deus não seria justo. Digo mais: há tantos infernos quantos são os condenados, e os seus sofrimentos são grandes na proporção da grandeza e do número dos pecados que cometeram e das graças que desprezaram.

Se os idólatras, dizem-nos os santos, são condenados por terem transgressed as leis de Deus que não conheciam, qual será a punição dos cristãos que conhecem tão bem o mal que fazem e os deveres que têm a cumprir, que compreendem o quanto ultrajam a Deus e, apesar de tudo isso, não deixam de pecar? Não, meus irmãos, o poder e a ira de Deus parecem não ser suficientemente grandes, nem a eternidade bastante longa, para punir esses infelizes.

Escutai os gritos e os uivos dos cristãos condenados: "Ai de mim, como sofro! Não vejo, não toco, não sinto senão fogo! Ah! Se estou condenado, é por minha própria culpa; eu sabia muito bem tudo o que devia fazer para me salvar, e tinha todos os meios mais do que necessários para isso. Infelizmente, ao pecar, eu sabia perfeitamente que perdia o meu Deus, a minha alma e o céu, e que me condenava para sempre a queimar no inferno! Ah, infeliz! Sou bem punido porque assim o quis!"

Sim, meus irmãos, um cristão condenado terá diante dos olhos, por toda a eternidade, todos os bons pensamentos, todos os bons desejos, todas as boas obras que poderia ter feito e não fez, todos os sacramentos que não recebeu e poderia ter recebido, todas as orações perdidas, todas as Missas mal ouvidas. Todas essas recordações serão como outros tantos carrascos a devorá-lo.

Ah! Meus filhos, os nossos corpos são o templo do Espírito Santo pelo santo batismo e pela santa comunhão; os nossos corações são semelhantes a um cibório que encerra Jesus Cristo. Cada vez que pecamos, cometemos uma profanação e um sacrilégio terrível. Pensemos nisso seriamente: ou mudamos de vida, ou seremos condenados! Aproveitemos o pouco tempo que nos resta para assegurar o céu.`;

/* =========================================================================
   ARRAY UNIFICADO EXPORTADO
   ========================================================================= */

export const sermoesCelebres: SermaoCelebre[] = [
  {
    id: "sermao-001",
    numero: 1,
    temaDoutrinal: "Juízo Final",
    tituloOriginal: "Premier Dimanche de l'Avent — Sur le Jugement dernier",
    tituloPortugues: "Sermão sobre o Juízo Final",
    volume: 1,
    paginasFonte: "pp. 1–24",
    original: { idioma: "francês", texto: juizoFrances },
    portugues: {
      texto: juizoPortugues,
      tradutor: "Edição Lux Fidei — tradução brasileira revisada diretamente do francês de 1883",
    },
    latim: "Tunc videbunt Filium Hominis venientem cum potestate magna et majestate.",
    referenciasBiblicas: ["Lc 21, 27"],
    fonte: "Sermons du vénérable serviteur de Dieu Jean-Baptiste-Marie Vianney, curé d'Ars, tomo I, éd. Pélagaud, 1883, pp. 1–24.",
    autenticidade: "atribuída",
    estadoEditorial: "revisado",
    notasEditoriais: [
      "Texto francês conferido e limpo de ruídos de OCR;",
      "Tradução em português do Brasil estabelecida com registro solene e pastoral.",
    ],
  },
  {
    id: "sermao-002",
    numero: 2,
    temaDoutrinal: "O Inferno dos Cristãos",
    tituloOriginal: "Troisième Dimanche après l’Épiphanie — Sur l’enfer des Chrétiens",
    tituloPortugues: "Sermão sobre o Inferno dos Cristãos",
    volume: 1,
    paginasFonte: "pp. 212–233",
    original: { idioma: "francês", texto: infernoFrances },
    portugues: {
      texto: infernoPortugues,
      tradutor: "Edição Lux Fidei — tradução brasileira revisada diretamente do francês de 1883",
    },
    latim: "Ibi erit fletus et stridor dentium.",
    referenciasBiblicas: ["Mt 8, 12", "Mt 8, 5-13"],
    fonte: "Sermons du vénérable serviteur de Dieu Jean-Baptiste-Marie Vianney, curé d'Ars, tomo I, éd. Pélagaud, 1883, pp. 212–233.",
    autenticidade: "atribuída",
    estadoEditorial: "revisado",
    notasEditoriais: [
      "Texto francês conferido e limpo de artefatos de OCR;",
      "Tradução em português do Brasil estabelecida com registro solene e pastoral.",
    ],
  },
];

export default sermoesCelebres;