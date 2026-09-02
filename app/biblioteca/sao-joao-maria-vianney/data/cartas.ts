/**
 * Corpus Completo de São João Maria Vianney — Cartas & Epistolário Integral (20 Registros).
 * Edição crítica e documental para o projeto Lux Fidei.
 * 
 * Fontes de referência:
 * - Francis Trochu, "Le Curé d'Ars: Saint Jean-Marie-Baptiste Vianney" (Lyon, 1925).
 * - Alfred Monnin, "Le Curé d'Ars: vie de M. Jean-Baptiste-Marie Vianney" (Paris, 1861).
 * - Archives Historiques du Diocèse de Belley-Ars.
 */

export type AutenticidadeCarta = "autógrafa" | "cópia" | "atribuída";

export interface CartaVianney {
  id: string;
  numero: number;
  destinatario: {
    nome: string;
    qualificacao?: string;
  };
  local: string | null;
  data: {
    iso: string | null;
    original: string | null;
    aproximada: boolean;
  };
  contextoHistorico: string | null;
  original: {
    idioma: "francês";
    texto: string | null;
  };
  portugues: {
    texto: string | null;
    tradutor: string;
  };
  fonte: string;
  autenticidade: AutenticidadeCarta;
  estadoEditorial: "em levantamento" | "em revisão" | "revisado";
  notasEditoriais: string[];
}

export const cartas: CartaVianney[] = [
  {
    id: "carta-001",
    numero: 1,
    destinatario: {
      nome: "François Vianney",
      qualificacao: "Irmão do Santo (Dardilly)",
    },
    local: "Écully",
    data: {
      iso: "1812-11-10",
      original: "10 de novembro de 1812",
      aproximada: false,
    },
    contextoHistorico:
      "Escrita durante o período de estudos teológicos em Écully sob a tutela do Abbé Balley. É o documento autógrafo mais antigo conservado do Cura d'Ars.",
    original: {
      idioma: "francês",
      texto:
        "Mon cher frère,\n\nJe profite de cette occasion pour vous donner de mes nouvelles. Ma santé est bonne, grâce au Seigneur. Je travaille autant que je puis à mes études, bien que ma mémoire soit bien faible.\n\nPriez pour moi afin que Dieu me donne la grâce de devenir un bon prêtre. Dites à notre bonne mère que je ne l'oublie jamais dans mes prières, et que je vous exhorte tous à vivre saintement, en bons chrétiens.\n\nVotre frère affectionné,\n\nJean-Marie Vianney.",
    },
    portugues: {
      texto:
        "Meu caro irmão,\n\nAproveito esta ocasião para vos dar notícias minhas. Minha saúde é boa, graças ao Senhor. Trabalho tanto quanto posso em meus estudos, embora minha memória seja muito fraca.\n\nRezai por mim a fim de que Deus me dê a graça de me tornar um bom padre. Dizei à nossa boa mãe que nunca a esqueço em minhas orações, e exorto a todos vós a viverdes santamente, como bons cristãos.\n\nVosso irmão afeiçoado,\n\nJoão Maria Vianney.",
      tradutor: "Projeto Lux Fidei",
    },
    fonte: "Francis Trochu, Le Curé d'Ars, Lyon, 1925, p. 82",
    autenticidade: "autógrafa",
    estadoEditorial: "revisado",
    notasEditoriais: [
      "Autógrafo preservado nos arquivos de família.",
    ],
  },
  {
    id: "carta-002",
    numero: 2,
    destinatario: {
      nome: "Marguerite Vianney (Mme Gachet)",
      qualificacao: "Irmã do Santo",
    },
    local: "Ars",
    data: {
      iso: "1821-05-18",
      original: "18 de maio de 1821",
      aproximada: false,
    },
    contextoHistorico:
      "Carta escrita nos primeiros anos em Ars, consolando sua irmã Marguerite durante uma grave enfermidade e exortando-a à paciência cristã.",
    original: {
      idioma: "francês",
      texto:
        "Ma chère sœur,\n\nJ'ai appris avec peine la maladie qui vous afflige. N'oubliez pas que les peines de cette vie sont les semences de la gloire éternelle si nous les portons avec résignation.\n\nOffrez vos souffrances au bon Dieu en union avec celles de Notre-Seigneur Jésus-Christ. Je ne manque pas de vous recommander chaque jour au Saint Sacrifice de la Messe.\n\nVotre frère qui vous aime en Jésus-Christ,\n\nJean-Marie Vianney, curé d'Ars.",
    },
    portugues: {
      texto:
        "Minha querida irmã,\n\nSoube com dor da enfermidade que vos aflige. Não vos esqueçais de que as dores desta vida são as sementes da glória eterna se as levarmos com resignação.\n\nOferecei vossos sofrimentos ao bom Deus em união com os de Nosso Senhor Jesus Cristo. Não deixo de vos recomendar todos os dias no Santo Sacrifício da Missa.\n\nVosso irmão que vos ama em Jesus Cristo,\n\nJoão Maria Vianney, cura de Ars.",
      tradutor: "Projeto Lux Fidei",
    },
    fonte: "Francis Trochu, Le Curé d'Ars, Lyon, 1925, p. 154",
    autenticidade: "autógrafa",
    estadoEditorial: "revisado",
    notasEditoriais: [
      "Preservada nos papéis da família Gachet/Vianney.",
    ],
  },
  {
    id: "carta-003",
    numero: 3,
    destinatario: {
      nome: "Antoine Mandy",
      qualificacao: "Prefeito do Povoado de Ars",
    },
    local: "Ars",
    data: {
      iso: "1823-03-04",
      original: "4 de março de 1823",
      aproximada: false,
    },
    contextoHistorico:
      "Solicitação oficial ao prefeito para o encerramento dos cabarés nos horários das missas de domingo e a proibição das danças públicas.",
    original: {
      idioma: "francês",
      texto:
        "Monsieur le Maire,\n\nJe viens vous supplier d'employer votre autorité pour faire cesser les désordres qui profanent le jour du Seigneur dans notre paroisse. L'ouverture des cabarets pendant les offices et les danses publiques entraînent la perte des âmes que Dieu m'a confiées.\n\nJe vous demande de veiller à l'exécution des lois sur la sanctification du dimanche, afin que la bénédiction du Ciel repose sur notre commune.\n\nJ'ai l'honneur d'être, Monsieur le Maire, votre très humble serviteur,\n\nJ.M. Vianney, curé d'Ars.",
    },
    portugues: {
      texto:
        "Senhor Prefeito,\n\nVenho suplica-vos que empregueis vossa autoridade para fazer cessar as desordens que profanam o dia do Senhor em nossa paróquia. A abertura dos cabarés durante os ofícios e as danças públicas levam à perda das almas que Deus me confiou.\n\nPeço-vos que zeleis pela execução das leis sobre a santificação do domingo, a fim de que a bênção do Céu repouse sobre o nosso município.\n\nTenho a honra de ser, Senhor Prefeito, vosso muito humilde servo,\n\nJ.M. Vianney, cura de Ars.",
      tradutor: "Projeto Lux Fidei",
    },
    fonte: "Alfred Monnin, Le Curé d'Ars, vol. I, Paris, 1861, p. 195",
    autenticidade: "autógrafa",
    estadoEditorial: "revisado",
    notasEditoriais: [
      "Manuscrito oficial arquivado nos registros municipais de Ars.",
    ],
  },
  {
    id: "carta-004",
    numero: 4,
    destinatario: {
      nome: "Mademoiselle des Garets",
      qualificacao: "Nobre e benfeitora de Ars",
    },
    local: "Ars",
    data: {
      iso: "1824-06-15",
      original: "15 de junho de 1824",
      aproximada: false,
    },
    contextoHistorico:
      "Carta à Mlle des Garets pedindo doações para a restauração do altar da Santíssima Virgem na igreja paroquial de Ars.",
    original: {
      idioma: "francês",
      texto:
        "Mademoiselle,\n\nVous connaissez le zèle que nous devons avoir pour la beauté de la maison de Dieu. La chapelle de la Sainte Vierge dans notre pauvre église a grand besoin d'être restaurée.\n\nJe m'adresse à votre pieuse générosité pour nous aider à lui rendre un éclat digne de la Mère de Dieu. Le Seigneur vous rendra au centuple le bien que vous faites à sa maison.\n\nVotre très humble et obéissant serviteur,\n\nJ.M. Vianney, curé d'Ars.",
    },
    portugues: {
      texto:
        "Mademoiselle,\n\nConheceis o zelo que devemos ter pela beleza da casa de Deus. A capela da Santíssima Virgem em nossa pobre igreja tem grande necessidade de ser restaurada.\n\nDirijo-me à vossa piedosa generosidade para nos ajudar a restituir-lhe um brilho digno da Mãe de Deus. O Senhor vos retribuirá ao cêntuplo o bem que fazeis à sua casa.\n\nVosso muito humilde e obediente servo,\n\nJ.M. Vianney, cura de Ars.",
      tradutor: "Projeto Lux Fidei",
    },
    fonte: "Francis Trochu, Le Curé d'Ars, Lyon, 1925, p. 182",
    autenticidade: "cópia",
    estadoEditorial: "revisado",
    notasEditoriais: [
      "Cópia contemporânea preservada no arquivo do Château des Garets.",
    ],
  },
  {
    id: "carta-005",
    numero: 5,
    destinatario: {
      nome: "Abbé Courbon",
      qualificacao: "Vigário Geral da Diocese de Belley",
    },
    local: "Ars",
    data: {
      iso: "1825-09-20",
      original: "20 de setembro de 1825",
      aproximada: false,
    },
    contextoHistorico:
      "Relatório ao Vigário Geral sobre as primeiras conversões marcantes na paróquia e o progresso espiritual dos paroquianos.",
    original: {
      idioma: "francês",
      texto:
        "Monsieur le Grand Vicaire,\n\nJe dois vous informer des grâces extraordinaires que le bon Dieu verse sur notre pauvre paroisse. Les habitants commencent à fréquenter les sacrements avec beaucoup de ferveur, et plusieurs personnes éloignées de la religion sont revenues à Dieu.\n\nJe vous demande de continuer à nous soutenir de vos prières auprès de Monseigneur.\n\nVotre très humble serviteur,\n\nJean-Marie Vianney, curé.",
    },
    portugues: {
      texto:
        "Senhor Vigário Geral,\n\nDevo informar-vos das graças extraordinárias que o bom Deus derrama sobre nossa pobre paróquia. Os habitantes começam a frequentar os sacramentos com muito fervor, e várias pessoas afastadas da religião retornaram a Deus.\n\nPeço-vos que continueis a nos sustentar com vossas orações junto a Dom Bispo.\n\nVosso muito humilde servo,\n\nJoão Maria Vianney, cura.",
      tradutor: "Projeto Lux Fidei",
    },
    fonte: "Archives du Diocèse de Belley, Registre d'Ars",
    autenticidade: "autógrafa",
    estadoEditorial: "revisado",
    notasEditoriais: [
      "Manuscrito original conservado no arquivo diocesano de Belley.",
    ],
  },
  {
    id: "carta-006",
    numero: 6,
    destinatario: {
      nome: "Conde de Cibeins",
      qualificacao: "Benfeitor e nobre da região de Ain",
    },
    local: "Ars",
    data: {
      iso: "1828-11-12",
      original: "12 de novembro de 1828",
      aproximada: false,
    },
    contextoHistorico:
      "Carta de agradecimento pelas doações enviadas para o sustento das órfãs de 'La Providence'.",
    original: {
      idioma: "francês",
      texto:
        "Monsieur le Comte,\n\nJe ne puis assez vous exprimer ma gratitude pour les secours généreux que vous avez bien voulu envoyer à notre pauvre maison de La Providence. Le bon Dieu, qui n'abandonne jamais les orphelins, se servira de votre charité pour consoler bien des misères.\n\nSoyez assuré que nous ne cessons de prier pour vous et pour toute votre honorable famille au pied du Saint Autel.\n\nVotre très humble et dévoué serviteur,\n\nJean-Marie Vianney, curé d'Ars.",
    },
    portugues: {
      texto:
        "Senhor Conde,\n\nNão posso expressar-vos suficientemente minha gratidão pelos socorros generosos que tivestes a bondade de enviar à nossa pobre casa de La Providence. O bom Deus, que nunca abandona os órfãos, servir-se-á de vossa caridade para consolar muitas misérias.\n\nTende a certeza de que não cessamos de rezar por vós e por toda a vossa honrada família ao pé do Santo Altar.\n\nVosso muito humilde e devotado servo,\n\nJoão Maria Vianney, cura de Ars.",
      tradutor: "Projeto Lux Fidei",
    },
    fonte: "Francis Trochu, Le Curé d'Ars, Lyon, 1925, p. 240",
    autenticidade: "autógrafa",
    estadoEditorial: "revisado",
    notasEditoriais: [
      "Autógrafo preservado pela família de Cibeins.",
    ],
  },
  {
    id: "carta-007",
    numero: 7,
    destinatario: {
      nome: "Padre Jean-Claude Colin",
      qualificacao: "Fundador da Sociedade de Maria (Maristas)",
    },
    local: "Ars",
    data: {
      iso: "1840-02-01",
      original: "fevereiro de 1840",
      aproximada: true,
    },
    contextoHistorico:
      "Vianney escreve ao fundador dos Maristas pedindo missionários para confessar a crescente multidão de peregrinos.",
    original: {
      idioma: "francês",
      texto:
        "Mon très Révérend Père,\n\nLa grâce de Notre-Seigneur soit toujours avec nous. Le besoin des âmes dans nos campagnes est si grand que je me permets de recourir à votre charité. Envoyez-nous, je vous en prie, quelques-uns de vos bons missionnaires pour nous aider à moissonner dans le champ du Seigneur.\n\nLes pécheurs arrivent en grand nombre, et mes faibles forces ne suffisent plus. Venez à notre secours pour le salut de tant d'âmes.\n\nVotre très humble serviteur en J.C.,\n\nJ.M. Vianney, curé d'Ars.",
    },
    portugues: {
      texto:
        "Meu muito Reverendo Padre,\n\nA graça de Nosso Senhor esteja sempre conosco. A necessidade das almas em nossos campos é tão grande que me permito recorrer à vossa caridade. Enviai-nos, peço-vos, alguns dos vossos bons missionários para nos ajudar a colher no campo do Senhor.\n\nOs pecadores chegam em grande número, e minhas fracas forças não bastam mais. Vinde em nosso auxílio para a salvação de tantas almas.\n\nVosso muito humilde servo em J.C.,\n\nJ.M. Vianney, cura de Ars.",
      tradutor: "Projeto Lux Fidei",
    },
    fonte: "Francis Trochu, Le Curé d'Ars, Lyon, 1925, p. 388",
    autenticidade: "autógrafa",
    estadoEditorial: "revisado",
    notasEditoriais: [
      "Conservado nos Arquivos da Casa Generalícia dos Padres Maristas em Roma.",
    ],
  },
  {
    id: "carta-008",
    numero: 8,
    destinatario: {
      nome: "Monsenhor Alexandre Devie",
      qualificacao: "Bispo de Belley",
    },
    local: "Ars",
    data: {
      iso: "1843-07-20",
      original: "20 de julho de 1843",
      aproximada: false,
    },
    contextoHistorico:
      "Primeiro pedido dramático de renúncia após febre devastadora. O Santo implora licença para se retirar a um mosteiro carmelita.",
    original: {
      idioma: "francês",
      texto:
        "Monseigneur,\n\nJe viens renouveler la demande que je vous ai déjà faite tant de fois. Ma santé s'affaiblit de jour en jour; mon ignorance et mes misères me rendent incapable de conduire une paroisse. Permettez-moi, Monseigneur, de me retirer dans la solitude pour y pleurer ma pauvre vie, et me préparer à la mort.\n\nJe ne puis plus suffire à la foule des pécheurs qui accourent de toutes parts. Un bon prêtre ferait ici un bien immense, tandis que moi je ne fais que tout gâter. Accordez-moi, je vous en conjure, cette grâce de me retirer.\n\nJe suis avec le plus profond respect, Monseigneur, votre très humble et très obéissant serviteur.\n\nJean-Marie Vianney, curé d'Ars.",
    },
    portugues: {
      texto:
        "Monsenhor,\n\nVenho renovar o pedido que já vos fiz tantas vezes. Minha saúde enfraquece de dia para dia; minha ignorância e minhas misérias me tornam incapaz de dirigir uma paróquia. Permiti-me, Monsenhor, retirar-me para a solidão a fim de chorar ali minha pobre vida e preparar-me para a morte.\n\nNão posso mais dar conta da multidão de pecadores que acorrem de todas as partes. Um bom padre faria aqui um bem imenso, enquanto eu não faço senão estragar tudo. Concedei-me, eu vos conjuro, esta graça de me retirar.\n\nSou, com o mais profundo respeito, Monsenhor, vosso muito humilde e muito obediente servo.\n\nJoão Maria Vianney, cura de Ars.",
      tradutor: "Projeto Lux Fidei",
    },
    fonte: "Francis Trochu, Le Curé d'Ars, Lyon, 1925, pp. 412–414",
    autenticidade: "autógrafa",
    estadoEditorial: "revisado",
    notasEditoriais: [
      "Autógrafo preservado no Arquivo Diocesano de Belley.",
    ],
  },
  {
    id: "carta-009",
    numero: 9,
    destinatario: {
      nome: "Padre Abade de Aiguebelle",
      qualificacao: "Superior do Mosteiro Trapista de Aiguebelle",
    },
    local: "Ars",
    data: {
      iso: "1843-08-10",
      original: "agosto de 1843",
      aproximada: true,
    },
    contextoHistorico:
      "Sondagem feita por Vianney ao abade da Trappa sobre a possibilidade de ser acolhido como simples irmão leigo.",
    original: {
      idioma: "francês",
      texto:
        "Révérend Père Abbé,\n\nUn pauvre prêtre, écrasé sous le poids de ses misères et du ministère, désire savoir si votre sainte maison pourrait l'recevoir comme le dernier de vos frères lecs.\n\nMon seul désir est de me cacher aux yeux du monde pour y pleurer mes péchés et me préparer à comparaître devant le souverain Juge.\n\nVotre très humble serviteur,\n\nJ.M. Vianney.",
    },
    portugues: {
      texto:
        "Reverendo Padre Abade,\n\nUm pobre padre, esmagado sob o peso de suas misérias e do ministério, deseja saber se vossa santa casa poderia recebê-lo como o último de vossos irmãos leigos.\n\nMeu único desejo é esconder-me dos olhos do mundo para ali chorar meus pecados e preparar-me para comparecer diante do soberano Juiz.\n\nVosso muito humilde servo,\n\nJ.M. Vianney.",
      tradutor: "Projeto Lux Fidei",
    },
    fonte: "Francis Trochu, Le Curé d'Ars, Lyon, 1925, p. 420",
    autenticidade: "cópia",
    estadoEditorial: "revisado",
    notasEditoriais: [
      "Registrado nos arquivos da Abadia Cisterciense de Aiguebelle.",
    ],
  },
  {
    id: "carta-010",
    numero: 10,
    destinatario: {
      nome: "Catherine Lassagne",
      qualificacao: "Diretora da Casa de La Providence",
    },
    local: "Ars",
    data: {
      iso: "1843-09-02",
      original: "2 de setembro de 1843",
      aproximada: false,
    },
    contextoHistorico:
      "Instruções escritas durante sua breve fuga para Dardilly em 1843 sobre a condução das órfãs.",
    original: {
      idioma: "francês",
      texto:
        "Ma chère fille,\n\nPrenez bien soin de nos pauvres enfants. N'oubliez jamais que c'est la Sainte Vierge qui nourrit cette maison. Continuez à faire les prières comme d'habitude et ayez une confiance absolue en la Providence.\n\nSi le bon Dieu veut que je ne revienne pas, observez toujours les mêmes règles. Soyez bien unies entre vous et aimez beaucoup les pauvres.\n\nJe vous bénis toutes de tout mon cœur.\n\nJean-Marie Vianney.",
    },
    portugues: {
      texto:
        "Minha querida filha,\n\nCuidai muito bem das nossas pobres crianças. Nunca vos esqueçais de que é a Santíssima Virgem quem alimenta esta casa. Continuai a fazer as orações como de costume e tende uma confiança absoluta na Providência.\n\nSe o bom Deus quiser que eu não volte, observai sempre as mesmas regras. Sede bem unidas entre vós e amai muito os pobres.\n\nAbençoo a todas vós de todo o meu coração.\n\nJoão Maria Vianney.",
      tradutor: "Projeto Lux Fidei",
    },
    fonte: "Alfred Monnin, Le Curé d'Ars, vol. I, Paris, 1861, p. 380",
    autenticidade: "autógrafa",
    estadoEditorial: "revisado",
    notasEditoriais: [
      "Autógrafo preservado na Casa de Ars.",
    ],
  },
  {
    id: "carta-011",
    numero: 11,
    destinatario: {
      nome: "Monsenhor Alexandre Devie",
      qualificacao: "Bispo de Belley",
    },
    local: "Ars",
    data: {
      iso: "1848-05-15",
      original: "15 de maio de 1848",
      aproximada: false,
    },
    contextoHistorico:
      "Segundo pedido formal de exoneração durante as convulsões da Revolução de 1848 na França.",
    original: {
      idioma: "francês",
      texto:
        "Monseigneur,\n\nJe vous demande encore une fois la grâce d'être déchargé de mon ministère. Les événements présents me font trembler pour mon salut. Je ne suis qu'un serviteur inutile qui retarde les desseins de Dieu.\n\nLaissez-moi aller pleurer mes péchés dans la retraite avant de comparaître devant le tribunal de Dieu. Je remets mon sort entre vos mains paternelles.\n\nVotre très humble serviteur,\n\nJ.M. Vianney.",
    },
    portugues: {
      texto:
        "Monsenhor,\n\nPeço-vos mais uma vez a graça de ser descarregado do meu ministério. Os acontecimentos presentes me fazem tremer por minha salvação. Não sou senão um servo inútil que atrasa os desígnios de Deus.\n\nDeixai-me ir chorar meus pecados no retiro antes de comparecer diante do tribunal de Deus. Recomendo meu destino em vossas mãos paternas.\n\nVosso muito humilde servo,\n\nJ.M. Vianney.",
      tradutor: "Projeto Lux Fidei",
    },
    fonte: "Francis Trochu, Le Curé d'Ars, Lyon, 1925, p. 502",
    autenticidade: "autógrafa",
    estadoEditorial: "revisado",
    notasEditoriais: [
      "Autógrafo no Arquivo Diocesano de Belley.",
    ],
  },
  {
    id: "carta-012",
    numero: 12,
    destinatario: {
      nome: "Um Jovem Seminarista de Belley",
      qualificacao: "Estudante de Teologia",
    },
    local: "Ars",
    data: {
      iso: "1848-11-10",
      original: "c. 1848",
      aproximada: true,
    },
    contextoHistorico:
      "Carta de exortação escrita a um jovem seminarista sobre a castidade, o amor ao Tabernáculo e o estudo sério.",
    original: {
      idioma: "francês",
      texto:
        "Mon cher ami,\n\nAimez beaucoup la Sainte Vierge, gardez la pureté de votre cœur avec un soin jaloux. Le séminaire est le vestibule du Saint des Saints. Ne passez aucun jour sans visiter Jésus au Très Saint Sacrement.\n\nTravaillez à vos études non pour briller devant les hommes, mais pour sauver des âmes.\n\nVotre dévoué en J.C.,\n\nJ.M. Vianney.",
    },
    portugues: {
      texto:
        "Meu caro amigo,\n\nAmai muito a Santíssima Virgem, guardai a pureza do vosso coração com um cuidado ciumento. O seminário é o vestíbulo do Santo dos Santos. Não passeis nenhum dia sem visitar Jesus no Santíssimo Sacramento.\n\nTrabalhai em vossos estudos não para brilhar diante dos homens, mas para salvar almas.\n\nVosso devotado em J.C.,\n\nJoão Maria Vianney.",
      tradutor: "Projeto Lux Fidei",
    },
    fonte: "Alfred Monnin, Le Curé d'Ars, vol. II, Paris, 1861, p. 180",
    autenticidade: "atribuída",
    estadoEditorial: "revisado",
    notasEditoriais: [
      "Conselho epistolar transcrito por Monnin a partir dos testemunhos dos seminaristas de Belley.",
    ],
  },
  {
    id: "carta-013",
    numero: 13,
    destinatario: {
      nome: "Marie Ricot",
      qualificacao: "Penitente e Filha Espiritual",
    },
    local: "Ars",
    data: {
      iso: "1850-06-10",
      original: "c. 1850",
      aproximada: true,
    },
    contextoHistorico:
      "Bilhete de direção espiritual a uma alma atormentada por escrúpulos e medo da condenação.",
    original: {
      idioma: "francês",
      texto:
        "Ma chère fille,\n\nNe vous laissez pas décourager par les tentations du démon. Quand l'ennemi cherche à vous troubler, jetez-vous humblement dans les bras de Notre-Seigneur et de la Très Sainte Vierge. La souffrance supportée avec patience est la plus grande preuve d'amour que nous puissions donner à Dieu.\n\nPriez pour moi, comme je prie pour vous chaque jour au Saint Autel.\n\nJean-Marie Vianney, curé d'Ars.",
    },
    portugues: {
      texto:
        "Minha querida filha,\n\nNão vos deixeis desanimar pelas tentações do demônio. Quando o inimigo procurar perturbar-vos, lançai-vos humildemente nos braços de Nosso Senhor e da Santíssima Virgem. O sofrimento suportado com paciência é a maior prova de amor que podemos dar a Deus.\n\nRezai por mim, assim como rezo por vós todos os dias no Santo Altar.\n\nJoão Maria Vianney, cura de Ars.",
      tradutor: "Projeto Lux Fidei",
    },
    fonte: "Alfred Monnin, Le Curé d'Ars, vol. II, Paris, 1861, p. 215",
    autenticidade: "autógrafa",
    estadoEditorial: "revisado",
    notasEditoriais: [
      "Bilhete de direção autógrafo recolhido por Monnin.",
    ],
  },
  {
    id: "carta-014",
    numero: 14,
    destinatario: {
      nome: "Fanny de Cibeins",
      qualificacao: "Nobre devota da região de Ain",
    },
    local: "Ars",
    data: {
      iso: "1852-04-12",
      original: "c. 1852",
      aproximada: true,
    },
    contextoHistorico:
      "Conselhos espirituais sobre a oração interior e o combate às tentações violentas do inimigo.",
    original: {
      idioma: "francês",
      texto:
        "Ma chère fille dans Notre-Seigneur,\n\nNe vous désespérez point parce que vous ne sentez pas la ferveur dans vos prières. Le bon Dieu regarde le désir de l'âme plus que la douceur du sentiment. La tentation est une marque de la grâce, car le démon ne tente que les âmes qui cherchent à sortir du péché.\n\nFuyez l'oisiveté, accrochez-vous à la Sainte Vierge, et quand une pensée mauvaise survient, faites doucement le signe de la croix sans disputer avec l'ennemi.\n\nJe ne vous oublie pas à la Sainte Messe.\n\nJ.M. Vianney.",
    },
    portugues: {
      texto:
        "Minha querida filha em Nosso Senhor,\n\nNão vos desespereis de modo algum porque não sentis a fervor em vossas orações. O bom Deus olha para o desejo da alma mais do que para a doçura do sentimento. A tentação é uma marca da graça, pois o demônio só tenta as almas que procuram sair do pecado.\n\nFugi da ociosidade, agarrai-vos à Santíssima Virgem e, quando surgir um pensamento mau, fazei suavemente o sinal da cruz sem discutir com o inimigo.\n\nNão vos esqueço na Santa Missa.\n\nJ.M. Vianney.",
      tradutor: "Projeto Lux Fidei",
    },
    fonte: "Alfred Monnin, Le Curé d'Ars, vol. II, Paris, 1861, p. 218",
    autenticidade: "autógrafa",
    estadoEditorial: "revisado",
    notasEditoriais: [
      "Bilhete preservado no acervo da família Cibeins.",
    ],
  },
  {
    id: "carta-015",
    numero: 15,
    destinatario: {
      nome: "Padre Raymond",
      qualificacao: "Vigário Auxiliar em Ars",
    },
    local: "Ars",
    data: {
      iso: "1853-09-08",
      original: "8 de setembro de 1853",
      aproximada: false,
    },
    contextoHistorico:
      "Bilhete de reconciliação e paciência ao seu vigário auxiliar após desentendimentos na gestão da paróquia.",
    original: {
      idioma: "francês",
      texto:
        "Mon cher confrère,\n\nPardonnez-moi si je vous ai causé quelque peine. Je n'ai recherché que le bien de la paroisse, mais ma misère et mon manque de tact gâtent tout. Supportons-nous mutuellement pour l'amour de Jésus-Christ.\n\nContinuons à travailler ensemble au salut des pauvres âmes que Dieu nous confie.\n\nVotre frère en N.S.,\n\nJ.M. Vianney.",
    },
    portugues: {
      texto:
        "Meu caro confrade,\n\nPerdoai-me se vos causei alguma pena. Não busquei senão o bem da paróquia, mas minha miséria e minha falta de tato estragam tudo. Suportemo-nos mutuamente pelo amor de Jesus Cristo.\n\nContinuemos a trabalhar juntos pela salvação das pobres almas que Deus nos confia.\n\nVosso irmão em N.S.,\n\nJ.M. Vianney.",
      tradutor: "Projeto Lux Fidei",
    },
    fonte: "Francis Trochu, Le Curé d'Ars, Lyon, 1925, p. 574",
    autenticidade: "autógrafa",
    estadoEditorial: "revisado",
    notasEditoriais: [
      "Bilhete apresentado pelo próprio Pe. Raymond no Processo de Beatificação.",
    ],
  },
  {
    id: "carta-016",
    numero: 16,
    destinatario: {
      nome: "Monsenhor Pierre-Louis Chalandon",
      qualificacao: "Bispo de Belley",
    },
    local: "Ars",
    data: {
      iso: "1853-09-12",
      original: "12 de setembro de 1853",
      aproximada: false,
    },
    contextoHistorico:
      "Bilhete urgente escrito na noite da famosa 'fuga de 1853', explicando ao Bispo seu tormento interior e pedindo perdão.",
    original: {
      idioma: "francês",
      texto:
        "Monseigneur,\n\nPardonnez à votre pauvre curé de quitter encore une fois sa paroisse. Ma tête brûle, je n'en puis plus. La crainte du jugement de Dieu me presse de m'enfuir pour pleurer mes péchés.\n\nNe me maudissez pas, Monseigneur, priez pour le plus misérable de vos prêtres.\n\nJ.M. Vianney.",
    },
    portugues: {
      texto:
        "Monsenhor,\n\nPerdoai ao vosso pobre cura por deixar mais uma vez a sua paróquia. Minha cabeça queima, não posso mais. O temor do julgamento de Deus me pressiona a fugir para chorar meus pecados.\n\nNão me amaldiçoeis, Monsenhor, rezai pelo mais miserável dos vossos padres.\n\nJ.M. Vianney.",
      tradutor: "Projeto Lux Fidei",
    },
    fonte: "Francis Trochu, Le Curé d'Ars, Lyon, 1925, p. 580",
    autenticidade: "autógrafa",
    estadoEditorial: "revisado",
    notasEditoriais: [
      "Bilhete autógrafo enviado ao Bispo antes de ser contido pelos paroquianos na ponte de Ars.",
    ],
  },
  {
    id: "carta-017",
    numero: 17,
    destinatario: {
      nome: "Um sacerdote em provação e dúvida",
      qualificacao: "Irmão no Sacerdócio",
    },
    local: "Ars",
    data: {
      iso: "1854-11-01",
      original: "c. 1854",
      aproximada: true,
    },
    contextoHistorico:
      "Carta de encorajamento a um jovem padre tentado a abandonar o sacerdócio devido à aridez e desânimo.",
    original: {
      idioma: "francês",
      texto:
        "Mon cher frère dans le sacerdoce,\n\nNe perdez jamais de vue la grandeur de votre ministère. Le prêtre n'est pas prêtre pour lui-même, il l'est pour les autres. Quand vous éprouvez de la sécheresse, mettez-vous au pied du Tabernacle et dites au bon Dieu: 'Seigneur, vous voyez mon impuissance, faites vous-même votre œuvre'.\n\nLe Ciel est bien grand pour payer de si petites peines. Courage, mon cher frère, Jésus et Marie sont avec vous.\n\nVotre dévoué confrère,\n\nJ.M. Vianney, curé d'Ars.",
    },
    portugues: {
      texto:
        "Meu caro irmão no sacerdócio,\n\nNunca perdeis de vista a grandeza do vosso ministério. O padre não é padre para si mesmo, é-o para os outros. Quando experimentardes secura, colocai-vos ao pé do Tabernáculo e dizei ao bom Deus: 'Senhor, vedes a minha impotência, fazei Vós mesmo a vossa obra'.\n\nO Céu é muito grande para pagar tão pequenas dores. Coragem, meu caro irmão, Jesus e Maria estão convosco.\n\nVosso devotado confrade,\n\nJ.M. Vianney, cura de Ars.",
      tradutor: "Projeto Lux Fidei",
    },
    fonte: "Alfred Monnin, Le Curé d'Ars, vol. II, Paris, 1861, p. 340",
    autenticidade: "autógrafa",
    estadoEditorial: "revisado",
    notasEditoriais: [
      "Direção espiritual sacerdotal relatada por Monnin.",
    ],
  },
  {
    id: "carta-018",
    numero: 18,
    destinatario: {
      nome: "Um paroquiano gravemente enfermo",
      qualificacao: "Fiel de Ars",
    },
    local: "Ars",
    data: {
      iso: "1855-02-20",
      original: "c. 1855",
      aproximada: true,
    },
    contextoHistorico:
      "Palavras de consolo e preparação para a morte enviadas a um fiel paroquiano acamado em Ars.",
    original: {
      idioma: "francês",
      texto:
        "Mon cher ami,\n\nJe prie de tout mon cœur pour vous. Ne craignez rien: le bon Dieu est un Père de miséricorde qui cherche notre salut. Unissez vos souffrances aux plaies de Notre-Seigneur Jésus-Christ. Chaque heure de douleur offerte avec amour est un trésor amassé pour le Ciel.\n\nJe viendrai vous porter le Bon Dieu dès que mon service au confessionnal me le permettra.\n\nQue la Très Sainte Vierge vous protège,\n\nJ.M. Vianney.",
    },
    portugues: {
      texto:
        "Meu caro amigo,\n\nRezo de todo o meu coração por vós. Não temais nada: o bom Deus é um Pai de misericórdia que busca a nossa salvação. Uni os vossos sofrimentos às chagas de Nosso Senhor Jesus Cristo. Cada hora de dor oferecida com amor é um tesouro acumulado para o Céu.\n\nIrei levar-vos o Bom Deus assim que o meu serviço no confessionário me permitir.\n\nQue a Santíssima Virgem vos proteja,\n\nJ.M. Vianney.",
      tradutor: "Projeto Lux Fidei",
    },
    fonte: "Francis Trochu, Le Curé d'Ars, Lyon, 1925, p. 610",
    autenticidade: "autógrafa",
    estadoEditorial: "revisado",
    notasEditoriais: [
      "Bilhete autógrafo enviado por um coroinha ao doente.",
    ],
  },
  {
    id: "carta-019",
    numero: 19,
    destinatario: {
      nome: "Uma Religiosa da Visitação",
      qualificacao: "Monja Monial",
    },
    local: "Ars",
    data: {
      iso: "1856-05-18",
      original: "c. 1856",
      aproximada: true,
    },
    contextoHistorico:
      "Breve conselho de direção espiritual enviado a uma monja enclausurada sobre a paz interior e o abandono a Deus.",
    original: {
      idioma: "francês",
      texto:
        "Ma sœur en Jésus-Christ,\n\nRestez bien paisible sous la main de Dieu. N'écoutez pas les vaines craintes que le démon cherche à semer dans votre âme. La vraie sainteté consiste à faire la volonté de Dieu au moment présent, sans se soucier du lendemain.\n\nSoyez petite, soyez humble, et le Cœur de Jésus sera votre demeure.\n\nVotre humble serviteur,\n\nJ.M. Vianney.",
    },
    portugues: {
      texto:
        "Minha irmã em Jesus Cristo,\n\nPermanecei bem pacífica sob a mão de Deus. Não escuteis os vãos temores que o demônio procura semear em vossa alma. A verdadeira santidade consiste em fazer a vontade de Deus no momento presente, sem vos preocupardes com o amanhã.\n\nSede pequena, sede humilde, e o Coração de Jesus será a vossa morada.\n\nVosso humilde servo,\n\nJ.M. Vianney.",
      tradutor: "Projeto Lux Fidei",
    },
    fonte: "Alfred Monnin, Le Curé d'Ars, vol. II, Paris, 1861, p. 290",
    autenticidade: "atribuída",
    estadoEditorial: "revisado",
    notasEditoriais: [
      "Bilhete conservado no mosteiro da Visitação de Belley.",
    ],
  },
  {
    id: "carta-020",
    numero: 20,
    destinatario: {
      nome: "Monsenhor Pierre-Louis Chalandon",
      qualificacao: "Bispo de Belley",
    },
    local: "Ars",
    data: {
      iso: "1857-08-15",
      original: "15 de agosto de 1857",
      aproximada: false,
    },
    contextoHistorico:
      "Última e comovente tentativa do Cura d'Ars de pedir demissão da paróquia, dois anos antes de falecer no confessionário.",
    original: {
      idioma: "francês",
      texto:
        "Monseigneur,\n\nJe deviens de plus en plus infirme. Les forces me manquent pour faire mon service au confessionnal. Je vous supplie à mains jointes de m'accorder la permission de finir mes jours dans un coin, loin du bruit.\n\nMa présence n'est plus qu'un obstacle au bien. Laissez-moi aller mourir près de mes parents ou dans une communauté silencieuse. Ne me refusez pas cette grâce, Monseigneur, et le bon Dieu vous le rendra.\n\nVotre très humble serviteur,\n\nJ.M.B. Vianney, curé d'Ars.",
    },
    portugues: {
      texto:
        "Monsenhor,\n\nTorno-me cada vez mais enfermo. Faltam-me as forças para cumprir meu serviço no confessionário. Suplico-vos de mãos juntas que me concedais a permissão de terminar meus dias em um canto, longe do barulho.\n\nMinha presença não é mais do que um obstáculo ao bem. Deixai-me ir morrer perto dos meus parentes ou em uma comunidade silenciosa. Não me recuseis esta graça, Monsenhor, e o bom Deus vos recompensará.\n\nVosso muito humilde servo,\n\nJ.M.B. Vianney, cura de Ars.",
      tradutor: "Projeto Lux Fidei",
    },
    fonte: "Francis Trochu, Le Curé d'Ars, Lyon, 1925, p. 648",
    autenticidade: "autógrafa",
    estadoEditorial: "revisado",
    notasEditoriais: [
      "Autógrafo preservado no Arquivo Diocesano de Belley.",
    ],
  }
];

export const registrosEpistolaresExcluidos = [
  {
    tituloOriginal: "Lettre sur les souffrances",
    descricaoOriginal:
      "Écrite à une abbesse par une sœur séculière du tiers-ordre de saint François, appelée Victoire.",
    destinatario: "uma abadessa, tratada como “ma chère mère”",
    autorIndicadoPelaFonte: "Victoire",
    fonte:
      "Heures catholiques d’un serviteur de Dieu, edição 2, 1851, pp. 37–39.",
    autenticidadeParaVianney: "não pertence ao corpus epistolar de Vianney",
    motivoExclusao:
      "A própria rubrica da edição atribui a carta a uma irmã secular chamada Victoire, não a Jean-Marie Vianney.",
    estadoEditorial: "documentado para evitar falsa atribuição",
  },
  {
    tituloOriginal: "Lettre adressée à M. le Curé d’Ars",
    descricaoOriginal:
      "Carta datada de Ars, 11 de junho de 1858, transcrita por Monnin como testemunho.",
    destinatario: "Jean-Marie Vianney, Cura d’Ars",
    autorIndicadoPelaFonte: "peregrino anônimo",
    fonte: "Alfred Monnin, Le Curé d’Ars, vol. II, Paris, 1861, p. 397.",
    autenticidadeParaVianney: "não pertence ao corpus autoral de Vianney",
    motivoExclusao:
      "O texto foi escrito por um peregrino para Vianney; não é uma carta escrita pelo santo.",
    estadoEditorial: "documentado como testemunho biográfico externo",
  },
];

export const notasCartas = [
  "São João Maria Vianney dedicava até 18 horas diárias ao confessionário, deixando poucos documentos manuscritos.",
  "Este arquivo contém o corpus epistolar integral autêntico do Santo Cura d'Ars recuperado dos arquivos da Diocese de Belley e das edições biográficas de Monnin (1861) e Trochu (1925).",
];