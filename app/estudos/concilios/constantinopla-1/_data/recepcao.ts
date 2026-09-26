/**
 * RECEPÇÃO HISTÓRICA DO CONCÍLIO DE CONSTANTINOPLA I
 * De 381 até os dias atuais.
 */

export interface EventoRecepcao {
  periodo: string;
  titulo: string;
  descricao: string;
  importancia: string;
}

export const recepcao: EventoRecepcao[] = [
  // =============================================
  // SÉCULO IV-V: A LUTA PELO RECONHECIMENTO
  // =============================================
  {
    periodo: "382",
    titulo: "Sínodo de Constantinopla — Reafirmação",
    descricao:
      "Teodósio convocou um novo sínodo em Constantinopla (382) " +
      "para reafirmar os resultados de 381 e tratar das questões " +
      "pendentes (Antioquia). O sínodo emitiu uma carta sinodal " +
      "que é uma das principais fontes sobre o concílio de 381. " +
      "Nectário presidiu. Gregório de Nissa esteve presente.",
    importancia:
      "Consolidação imediata dos resultados. A carta sinodal " +
      "de 382 é o documento que mais detalha o que aconteceu " +
      "em 381, já que as atas originais de 381 se perderam.",
  },
  {
    periodo: "382",
    titulo: "Sínodo de Roma sob Dâmaso I — Rejeição Fria",
    descricao:
      "O Papa Dâmaso reuniu um sínodo em Roma que reafirmou " +
      "a fé nicena mas ignorou Constantinopla. O 'Tomo de " +
      "Dâmaso' não menciona o concílio de 381 e rejeita " +
      "implicitamente o Cânon 3 (primazia de Constantinopla). " +
      "Roma insiste na primazia petrina e na ordem " +
      "Roma → Alexandria → Antioquia.",
    importancia:
      "Primeira rejeição ocidental. Início da tensão " +
      "Roma-Constantinopla que durará séculos.",
  },
  {
    periodo: "383",
    titulo: "Colóquio Imperial com as Seitas",
    descricao:
      "Teodósio tentou um último esforço de reconciliação: " +
      "convocou representantes de todas as seitas (arianos, " +
      "eunomianos, macedonianos) para um colóquio em " +
      "Constantinopla. Cada grupo apresentou sua confissão " +
      "de fé por escrito. Teodósio leu todas, rasgou as " +
      "heréticas e manteve apenas a nicena. O colóquio " +
      "fracassou em converter os hereges, mas reforçou " +
      "a posição imperial.",
    importancia:
      "Última tentativa de diálogo. A partir de então, " +
      "Teodósio partiu para a repressão pura (éditos " +
      "de 391-392 contra o paganismo e a heresia).",
  },
  {
    periodo: "431",
    titulo: "Concílio de Éfeso — Primeira Citação",
    descricao:
      "O Concílio de Éfeso (3º ecumênico) citou o Credo " +
      "de Constantinopla e o usou como base para condenar " +
      "Nestório. O Cânon 7 de Éfeso proibiu a composição " +
      "de 'outro credo' além do de Niceia — mas interpretou " +
      "'Niceia' como incluindo as adições de Constantinopla.",
    importancia:
      "Primeira vez que um concílio ecumênico subsequente " +
      "reconhece a autoridade de Constantinopla I.",
  },
  {
    periodo: "451",
    titulo: "Concílio de Calcedônia — Reconhecimento como Ecumênico",
    descricao:
      "O Concílio de Calcedônia (4º ecumênico) reconheceu " +
      "formalmente Constantinopla I como o 2º Concílio " +
      "Ecumênico e reafirmou seu Credo e seus cânones. " +
      "O Cânon 28 de Calcedônia reafirmou o Cânon 3 de " +
      "Constantinopla (primazia de Constantinopla), " +
      "provocando o protesto furioso do Papa Leão I.",
    importancia:
      "Reconhecimento oficial da ecumenicidade — 70 anos " +
      "depois! Mas a reafirmação do Cânon 3 azedou " +
      "ainda mais as relações com Roma.",
  },

  // =============================================
  // SÉCULOS VI-VIII: CONSOLIDAÇÃO E FILIOQUE
  // =============================================
  {
    periodo: "553",
    titulo: "Concílio de Constantinopla II — Confirmação",
    descricao:
      "O 5º Concílio Ecumênico (Constantinopla II, 553) " +
      "confirmou os quatro primeiros concílios (Niceia, " +
      "Constantinopla, Éfeso, Calcedônia) como os " +
      "'quatro pilares' da fé ortodoxa.",
    importancia:
      "Constantinopla I agora faz parte do 'cânon' " +
      "conciliar indiscutível da Igreja.",
  },
  {
    periodo: "589",
    titulo: "Sínodo de Toledo — Inserção do Filioque",
    descricao:
      "O 3º Sínodo de Toledo (589), presidido pelo rei " +
      "Recaredo (que acabara de se converter do arianismo " +
      "ao catolicismo), inseriu o Filioque ('e do Filho') " +
      "no Credo Niceno-Constantinopolitano. A intenção " +
      "era reforçar a divindade do Filho contra os " +
      "arianos visigodos.",
    importancia:
      "Início da controvérsia do Filioque, que se tornará " +
      "a principal causa teológica do Grande Cisma de 1054. " +
      "O Credo de Constantinopla, que dizia 'procede do Pai', " +
      "passou a dizer 'procede do Pai e do Filho' no Ocidente.",
  },
  {
    periodo: "680–681",
    titulo: "Concílio de Constantinopla III — Confirmação",
    descricao:
      "O 6º Concílio Ecumênico confirmou os cinco anteriores " +
      "e definiu as duas vontades de Cristo (contra o " +
      "monotelismo). O Credo de Constantinopla I continuou " +
      "sendo a base da fé trinitária.",
    importancia:
      "Consolidação definitiva do Credo como padrão dogmático.",
  },
  {
    periodo: "787",
    titulo: "Concílio de Niceia II — O Credo como Critério",
    descricao:
      "O 7º Concílio Ecumênico (Niceia II, 787) usou o " +
      "Credo Niceno-Constantinopolitano como critério de " +
      "ortodoxia na questão dos ícones. Quem professava " +
      "o Credo integral era ortodoxo; quem o alterava " +
      "era suspeito.",
    importancia:
      "O Credo de 381 se torna o 'teste de ortodoxia' " +
      "universal da cristandade.",
  },
  {
    periodo: "809–810",
    titulo: "Papa Leão III e as Placas de Prata",
    descricao:
      "O Papa Leão III (795–816) recusou-se a adicionar " +
      "o Filioque ao Credo romano, apesar da pressão de " +
      "Carlos Magno. Mandou gravar o Credo SEM o Filioque " +
      "em duas placas de prata (uma em grego, uma em latim) " +
      "e as colocou na Basílica de São Pedro com a inscrição: " +
      "'Haec Leo posui amore et cautela orthodoxae fidei' " +
      "('Eu, Leão, coloquei isto por amor e cautela à fé " +
      "ortodoxa').",
    importancia:
      "Último papa a resistir ao Filioque. Após Leão III, " +
      "a pressão franca se tornou irresistível.",
  },

  // =============================================
  // SÉCULOS IX-XI: O GRANDE CISMA
  // =============================================
  {
    periodo: "867",
    titulo: "Fócio de Constantinopla e a Encíclica Anti-Filioque",
    descricao:
      "O Patriarca Fócio de Constantinopla emitiu uma " +
      "encíclica condenando o Filioque como heresia e " +
      "acusando o Ocidente de violar o Credo de " +
      "Constantinopla. A 'Encíclica de Fócio' é o " +
      "primeiro documento oficial que faz do Filioque " +
      "a questão central da disputa Oriente-Ocidente.",
    importancia:
      "O Credo de 381 se torna o campo de batalha " +
      "da maior divisão da história do cristianismo.",
  },
  {
    periodo: "1014",
    titulo: "Inserção Oficial do Filioque no Credo Romano",
    descricao:
      "O Papa Bento VIII, a pedido do imperador " +
      "Henrique II, inseriu oficialmente o Filioque " +
      "no Credo da missa romana. As placas de prata " +
      "de Leão III foram ignoradas.",
    importancia:
      "O Credo de Constantinopla agora é rezado de " +
      "forma diferente no Oriente ('do Pai') e no " +
      "Ocidente ('do Pai e do Filho'). A divisão " +
      "é irreversível.",
  },
  {
    periodo: "1054",
    titulo: "O Grande Cisma — A Ruptura Definitiva",
    descricao:
      "O legado papal Humberto de Silva Candida " +
      "depositou uma bula de excomunhão sobre o altar " +
      "de Santa Sofia em Constantinopla. O Patriarca " +
      "Miguel Cerulário excomungou os legados. " +
      "Entre as causas do Cisma, o Filioque (a " +
      "alteração do Credo de 381) era a principal " +
      "questão teológica.",
    importancia:
      "O Credo de Constantinopla I, que deveria " +
      "unir a cristandade, tornou-se o símbolo " +
      "de sua divisão.",
  },

  // =============================================
  // SÉCULOS XII-XX: TENTAIVAS DE REUNIÃO
  // =============================================
  {
    periodo: "1274",
    titulo: "Concílio de Lyon II — União Fracassada",
    descricao:
      "O imperador bizantino Miguel VIII Paleólogo " +
      "aceitou o Filioque e a primazia papal em Lyon " +
      "para obter apoio militar contra os turcos. " +
      "A união foi rejeitada pelo clero e pelo povo " +
      "bizantino e não sobreviveu à morte de Miguel.",
    importancia:
      "Mostra que a questão do Credo (Filioque) era " +
      "mais do que teológica — era identitária.",
  },
  {
    periodo: "1439",
    titulo: "Concílio de Florença — Última Tentativa",
    descricao:
      "O Concílio de Florença tentou resolver o " +
      "Filioque com a fórmula 'procede do Pai e do " +
      "Filho como de um só princípio'. Os gregos " +
      "assinaram sob pressão (Constantinopla estava " +
      "cercada pelos turcos), mas a união foi " +
      "rejeitada pelo povo ao retornarem.",
    importancia:
      "Última tentativa séria de reconciliação " +
      "sobre o Credo antes da era moderna.",
  },
  {
    periodo: "1965",
    titulo: "Levantamento Mútuo das Excomunhões",
    descricao:
      "O Papa Paulo VI e o Patriarca Atenágoras I " +
      "levantaram mutuamente as excomunhões de 1054. " +
      "O gesto foi simbólico e não resolveu as " +
      "diferenças teológicas sobre o Filioque.",
    importancia:
      "Início do diálogo ecumênico moderno. " +
      "O Credo de 381 continua sendo o ponto " +
      "de referência para as discussões.",
  },

  // =============================================
  // ERA MODERNA
  // =============================================
  {
    periodo: "1978–2003",
    titulo: "Diálogo Católico-Ortodoxo sobre o Filioque",
    descricao:
      "A Comissão Mista Internacional para o Diálogo " +
      "Teológico entre Católicos e Ortodoxos discutiu " +
      "o Filioque extensivamente. Em 2003, o Pontifício " +
      "Conselho para a Promoção da Unidade dos Cristãos " +
      "publicou 'As Tradições Grega e Latina sobre a " +
      "Processão do Espírito Santo', reconhecendo a " +
      "legitimidade de ambas as tradições.",
    importancia:
      "Pela primeira vez, Roma reconhece que o Credo " +
      "original de 381 ('do Pai') é teologicamente " +
      "legítimo e que o Filioque é uma 'explicação' " +
      "ocidental, não uma correção.",
  },
 
];

export const resumoRecepcao =
  "A recepção de Constantinopla I foi lenta e conflituosa. " +
  "Rejeitado pelo Ocidente em 382, reconhecido como ecumênico " +
  "apenas em 451, seu Credo foi alterado pelo Filioque no " +
  "Ocidente a partir de 589, gerando o Grande Cisma de 1054. " +
  "Hoje, 1600 anos depois, o Credo de Constantinopla é o " +
  "documento que une (e divide) a cristandade mundial.";