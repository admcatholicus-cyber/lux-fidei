export const fichaConcilio = {
  nome: "Concílio de Constantinopla III",
  nomeGrego: "Ἡ ἕκτη οἰκουμενικὴ σύνοδος",
  nomeLatim: "Concilium Constantinopolitanum Tertium",
  numeroEcumenico: "VI",

  data: {
    inicio: "7 de novembro de 680",
    fim: "16 de setembro de 681",
    duracao: "10 meses e 9 dias (18 sessões)",
    sessoes: 18,
  },

  local: {
    edificio: "Palácio de Trullo (Sala do Domo)",
    cidade: "Constantinopla",
    imperio: "Império Bizantino (Dinastia Heráclida)",
  },

  convocador: {
    nome: "Constantino IV Pogonato",
    titulo: "Imperador dos Romanos (Basileu)",
    reinado: "668–685",
    dinastia: "Heráclida",
  },

  participantes: {
    total: "~174 bispos",
    origem: "Predominantemente orientais; legados papais do Ocidente",
    observacao:
      "O Papa Agatão I não compareceu pessoalmente, mas enviou legados com autoridade plenipotenciária e carta dogmática. A presença ocidental foi numericamente pequena mas teologicamente decisiva. As sedes de Alexandria e Jerusalém, sob domínio árabe, foram representadas por legados.",
  },

  presidentes: [
    {
      periodo: "Sessões 1–11",
      nome: "Imperador Constantino IV + Legados Papais",
      obs: "O imperador presidiu pessoalmente as primeiras 11 sessões como presidente honorário, sentado em um trono elevado. Os legados papais (Teodoro, Jorge, João) ocuparam os lugares de honra à direita. O patriarca Jorge I de Constantinopla sentou-se à esquerda.",
    },
    {
      periodo: "Sessões 12–18",
      nome: "Legados Papais + Patriarcas Orientais",
      obs: "Após a morte de Agatão I (10 de janeiro de 681), o concílio prosseguiu sob a presidência dos legados. O novo Papa Leão II (consagrado em agosto de 682) confirmou retroativamente todas as decisões.",
    },
  ],

  tipo: "Concílio Ecumênico",
  reconhecimento: {
    comoEcumenico:
      "Reconhecido como VI Concílio Ecumênico pela Igreja Católica, Igreja Ortodoxa, Igreja Anglicana e principais denominações protestantes. Confirmado pelo Papa Leão II em 682 e reafirmado por Niceia II (787)",
    aceito: [
      "Igreja Católica Romana",
      "Igreja Ortodoxa",
      "Igreja Ortodoxa Oriental (parcialmente)",
      "Anglicanismo",
      "Luteranismo",
    ],
    controversias:
      "O anátema contra o Papa Honório I (625–638) gerou debates perenes sobre a infalibilidade papal, especialmente durante o Concílio Vaticano I (1870). A atribuição dos cânones disciplinares ao concílio de 681 (vs. Trullo de 692) também é debatida.",
  },

  contextoResumido:
    "Após mais de meio século de disputas sobre o monoenergismo e o monotelismo — tentativas imperiais de reconciliar calcedonianos e não-calcedonianos por meio de fórmulas de compromisso —, o VI Concílio Ecumênico foi convocado para resolver definitivamente a questão das vontades e operações em Cristo. O monotelismo, que fora política oficial do Império Bizantino por cerca de 40 anos, foi condenado como heresia, e a doutrina das duas vontades naturais e duas operações naturais em Cristo foi proclamada como dogma de fé.",

  resultadosPrincipais: [
    "Condenação dogmática do monotelismo (doutrina de uma só vontade em Cristo)",
    "Condenação dogmática do monoenergismo (doutrina de uma só operação/energia em Cristo)",
    "Definição das duas vontades naturais (dyo thelemata) e duas operações naturais (dyo energeiai) em Cristo, sem divisão, sem mudança, sem separação, sem confusão",
    "Promulgação do Horos (definição de fé) que completa e aperfeiçoa a cristologia de Calcedônia (451)",
    "Anátema contra os heresiarcas: Sérgio, Pirro, Paulo II e Pedro de Constantinopla, Ciro de Alexandria, Teodoro de Farã e Macário de Antioquia",
    "Anátema póstumo contra o Papa Honório I (625–638) por sua carta a Sérgio — o único papa anatematizado por um concílio ecumênico",
    "Reafirmação solene dos cinco concílios ecumênicos anteriores e do Tomo de Leão Magno",
    "Restauração da plena comunhão entre Roma e Constantinopla após décadas de tensão",
  ],
}