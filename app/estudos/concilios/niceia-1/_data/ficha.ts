/* ─────────────────────────────────────────────────────────────
   FICHA TÉCNICA DO CONCÍLIO DE NICEIA I (325)
   Dados sintéticos, rigorosos e alinhados com a historiografia crítica moderna.
───────────────────────────────────────────────────────────── */

export interface ConcilioSeguinte {
  nome: string
  slug: string
  ano: string
}

export interface FichaTecnica {
  nome: string
  nomeGrafiaAntiga: string
  nomeGrego: string
  nomeLatim: string
  ano: string
  dataAbertura: {
    tradicional: string
    nota: string
  }
  dataEncerramento: string
  local: string
  localDetalhe: string
  convocador: string
  presidencia: string
  papa: string
  participantes: string
  temaPrincipal: string
  documentos: string[]
  resultado: string
  reconhecimento: {
    catolica: string
    ortodoxa: string
    orientais: string
    protestante: string
  }
  numeracao: string
  festaLiturgica: string
  edicoesReferencia: string
  concilioSeguinte: ConcilioSeguinte
}

export const fichaTecnica: FichaTecnica = {
  nome: 'Concílio de Niceia I',
  nomeGrafiaAntiga: 'Nicéia (grafia pré-2009)',
  nomeGrego: 'Νικαία Αʹ · ἡ ἐν Νικαίᾳ σύνοδος (hē en Nikaíā sýnodos)',
  nomeLatim: 'Concilium Nicaenum Primum',
  ano: '325 d.C.',
  dataAbertura: {
    tradicional: '20 de maio de 325',
    nota: 'Hipótese corrente: sessões preliminares a partir de 20/05 e sessão solene com assinatura do Credo em 19/06.',
  },
  dataEncerramento: 'c. 25 jul. (banquete das vicennalia) – ago. 325; a data de 25/08 é tradicional, sem fonte antiga',
  local: 'Niceia, Bitínia (atual İznik, Turquia)',
  localDetalhe: 'Edifício central do Palácio Imperial de Niceia',
  convocador: 'Imperador Constantino I (Flavius Valerius Constantinus)',
  presidencia: 'Ósio de Córdova (Ossius) para as deliberações teológicas e canônicas, com a participação de Eustácio de Antioquia e Alexandre de Alexandria; Constantino I presidiu o protocolo imperial de abertura.',
  papa: 'Silvestre I (ausente por avançada idade e saúde; representado oficialmente pelos presbíteros romanos Vítor e Vincêncio, cujas assinaturas encabeçam o catálogo sinodal logo após a de Ósio)',
  participantes: 'c. 250–318 bispos (a tradição eclesiástica fixou simbolicamente em 318, evocando os 318 servos de Abraão em Gn 14,14; reconstrução moderna de listas: Gelzer–Hilgenfeld–Cuntz; Honigmann)',
  temaPrincipal: 'A controvérsia ariana sobre a divindade e consubstancialidade (homoousios) do Filho, a unificação do cálculo da Páscoa e a resolução do Cisma Meleciano',
  documentos: [
    'Símbolo Niceno (Credo de Fé com os Anátemas antiarianos originais)',
    '20 Cânones Disciplinares e Eclesiásticos Universais',
    'Carta Sinodal aos Egípcios (preservada por Sócrates e Teodoreto)',
    'Decreto/Carta sobre a Celebração Unificada da Páscoa',
    'Resolução disciplinar sobre o Cisma Meleciano no Egito e Breviarium Melitii',
  ],
  resultado:
    'Condenação doutrinária de Ário; definição dogmática do Filho como consubstancial (homoousios) ao Pai; promulgação dos 20 cânones disciplinares universais; e consolidação institucional do modelo do Concílio Ecumênico.',
  reconhecimento: {
    catolica: '1.º dos 21 Concílios Ecumênicos reconhecidos',
    ortodoxa: '1.º dos 7 Concílios Ecumênicos reconhecidos',
    orientais: 'Aceito plenamente e celebrado pelas Igrejas Não-Calcedonianas (Copta, Armênia, Síria, Etiópica)',
    protestante: 'Aceito integralmente pelo Protestantismo Histórico (Luteranismo, Calvinismo, Anglicanismo — Confissão de Augsburgo Art. I; 39 Artigos Art. VIII; Confissão de Westminster Cap. VIII)',
  },
  numeracao:
    '1.º dos 21 concílios ecumênicos (Igreja Católica); 1.º dos 7 (Igrejas Ortodoxas e Católicas Orientais); reconhecido também pelas Igrejas Ortodoxas Orientais (copta, armênia, siríaca, etíope, malankara) e pela Igreja Assíria do Oriente.',
  festaLiturgica: 'Rito bizantino: 7.º Domingo da Páscoa e 29 de maio · Rito copta: 9 de Hathor',
  edicoesReferencia:
    'DH 125–130 · Tanner/Alberigo, COD I, 1–19 · Opitz, Urk. 1–34 / AW III/1.3, Dok. 1–44 / Fernández, FNS 1–80',
  concilioSeguinte: {
    nome: 'Constantinopla I (381)',
    slug: 'constantinopla-1',
    ano: '381 d.C.',
  },
}