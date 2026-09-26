export const fichaConcilio = {
  nome: "Concílio de Constantinopla I",
  nomeLatim: "Concilium Constantinopolitanum Primum",
  nomeGrego: "Αʹ Σύνοδος Κωνσταντινουπόλεως",
  numero: 2,
  tipo: "Ecumênico",
  data: {
    inicio: "Maio de 381 d.C.",
    fim: "Julho de 381 d.C.",
    duracao: "Aproximadamente 2 meses",
  },
  local: {
    cidade: "Constantinopla",
    edificio: "Igreja de Santa Irene (Hagia Eirene)",
    imperio: "Império Romano do Oriente",
  },
  convocador: {
    nome: "Teodósio I (o Grande)",
    titulo: "Imperador Romano do Oriente",
    reinado: "379–395 d.C.",
  },
  presidentes: [
    {
      nome: "Melécio de Antioquia",
      periodo: "Fase 1 (maio 381)",
      obs: "Faleceu durante o concílio",
    },
    {
      nome: "Gregório de Nazianzo",
      periodo: "Fase 2 (junho 381)",
      obs: "Renunciou dramaticamente",
    },
    {
      nome: "Nectário de Constantinopla",
      periodo: "Fase 3 (julho 381)",
      obs: "Leigo batizado às pressas para assumir o patriarcado",
    },
  ],
  participantes: {
    total: "~150 bispos",
    origem: "Exclusivamente do Oriente",
    observacao:
      "O episcopado ocidental (Papa Dâmaso I, Ambrósio de Milão) não foi convocado e não participou.",
  },
  heresiasCondenadas: [
    {
      nome: "Arianismo",
      lider: "Ário (já falecido)",
      erro: "O Filho é criatura, não consubstancial ao Pai",
    },
    {
      nome: "Eunomianismo (Anomeísmo)",
      lider: "Eunômio de Cízico",
      erro: "O Filho é totalmente diferente (anomoios) do Pai em essência",
    },
    {
      nome: "Pneumatomachianismo (Macedonianismo)",
      lider: "Macedônio I de Constantinopla (já falecido)",
      erro: "O Espírito Santo é criatura e servo, não Deus",
    },
    {
      nome: "Apolinarismo",
      lider: "Apolinário de Laodiceia",
      erro: "Cristo não possui mente humana racional (nous); o Logos a substitui",
    },
    {
      nome: "Marcelianismo",
      lider: "Marcelo de Ancira",
      erro: "Modalismo — as Pessoas da Trindade são modos temporários",
    },
    {
      nome: "Fotinianismo",
      lider: "Fotino de Sirmium",
      erro: "Adocionismo — Jesus era mero homem adotado por Deus",
    },
    {
      nome: "Sabelianismo",
      lider: "Sabélio (século III)",
      erro: "Modalismo clássico — Pai, Filho e ES são máscaras de uma só Pessoa",
    },
  ],
  resultadosPrincipais: [
    "Promulgação do Credo Niceno-Constantinopolitano (o Credo que rezamos hoje)",
    "Definição dogmática da divindade do Espírito Santo",
    "Reafirmação da consubstancialidade (homoousios) do Filho",
    "Condenação de 7 heresias",
    "7 Cânones disciplinares (4 universalmente aceitos, 3 debatidos)",
    "Cânon 3: primazia de honra de Constantinopla após Roma",
  ],
  reconhecimento: {
    comoEcumenico: "Confirmado pelo Concílio de Calcedônia (451 d.C.)",
    aceito: ["Igreja Católica", "Igreja Ortodoxa", "Igrejas Orientais", "Protestantismo (o Credo)"],
    controversias:
      "O Cânon 3 (primazia de Constantinopla) foi rejeitado por Roma até o Grande Cisma de 1054.",
  },
  contextoResumido:
    "Convocado 56 anos após Niceia, o concílio completou a obra trinitária: se Niceia definiu a divindade do Filho, Constantinopla definiu a divindade do Espírito Santo, fechando o dogma da Santíssima Trindade.",
};

export type FichaConcilio = typeof fichaConcilio;