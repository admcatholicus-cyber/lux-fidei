/* ─────────────────────────────────────────────────────────────
   DOSSIÊ DOCUMENTAL: 2J. LISTAS DE ASSINATURAS E PROVÍNCIAS
   Fontes críticas:
   - H. Gelzer, H. Hilgenfeld, O. Cuntz, Patrum Nicaenorum Nomina (Leipzig, 1898)
   - Ernest Honigmann, "La liste originale des Pères de Nicée" (Byzantion 14, 1939)
   - C. H. Turner, Ecclesiae Occidentalis Monumenta Iuris Antiquissima (EOMIA)
   - Giorgio Fedalto, Hierarchia Ecclesiastica Orientalis (Padova, 1988)
───────────────────────────────────────────────────────────── */

export interface ProvinciaAssinatura {
  id: string
  provincia: string
  dioceseOuRegiao: string
  numeroBisposReconstruido: number
  bisposNotaveis: string[]
  observacaoHistorica: string
}

export interface TradicaoManuscritaLista {
  lingua: string
  testemunhosPrincipais: string
  dataTraducao: string
  valorCritico: string
}

export const provinciasAssinaturasData: ProvinciaAssinatura[] = [
  {
    id: 'aegyptus-thebais-libya',
    provincia: 'Aegyptus, Thebais et Libya (Egito, Tebaida e Líbia)',
    dioceseOuRegiao: 'Diocese do Egito (Patriarcado de Alexandria)',
    numeroBisposReconstruido: 30,
    bisposNotaveis: [
      'Alexandre de Alexandria (Patriarca)',
      'Atanásio (Diácono e Secretário)',
      'Pafnúcio da Tebaida (Confessor mutilado)',
      'Potamon de Heracleópolis (Confessor)',
      'Secundo de Ptolemaida (Ariano/Exilado)',
      'Teona de Marmárica (Ariano/Exilado)'
    ],
    observacaoHistorica:
      'Representou o núcleo do conflito. Alexandria mantinha jurisdição tradicional sobre o Egito e a Pentápole Líbia, confirmada pelo Cânone 6.'
  },
  {
    id: 'palaestina',
    provincia: 'Palaestina (Palestina I e II)',
    dioceseOuRegiao: 'Diocese do Oriente (Cesareia / Jerusalém)',
    numeroBisposReconstruido: 18,
    bisposNotaveis: [
      'Eusébio de Cesareia (Historiador e Metropolita)',
      'Macário de Jerusalém (Aelia Capitolina)',
      'Germano de Neápolis (Siquém)',
      'Januário de Jericó'
    ],
    observacaoHistorica:
      'Tensão entre o primado de honra concedido a Jerusalém (Cânone 7) e a autoridade metropolitana de Eusébio de Cesareia.'
  },
  {
    id: 'phoenice',
    provincia: 'Phoenice (Fenícia Marítima e Libanense)',
    dioceseOuRegiao: 'Diocese do Oriente',
    numeroBisposReconstruido: 10,
    bisposNotaveis: [
      'Anatólio de Emesa',
      'Zenão de Tiro',
      'Eneias de Ptolemaida (Acre)',
      'Marino de Berito (Beirute)'
    ],
    observacaoHistorica:
      'Região dividida entre a influência alexandrina e o apoio aos subordinacionistas por intermédio de Paulino de Tiro.'
  },
  {
    id: 'syria-coele',
    provincia: 'Syria Coele e Syria Euphratensis',
    dioceseOuRegiao: 'Diocese do Oriente (Patriarcado de Antioquia)',
    numeroBisposReconstruido: 22,
    bisposNotaveis: [
      'Eustácio de Antioquia (Patriarca e Líder Niceno)',
      'Paulo de Neocesareia (Confessor com mãos queimadas)',
      'Pipério de Samósata',
      'Heliodoro de Laodiceia'
    ],
    observacaoHistorica:
      'Antioquia funcionou como o centro de resistência antiariana sob a liderança de Eustácio.'
  },
  {
    id: 'cilicia',
    provincia: 'Cilicia (Cilícia I e II)',
    dioceseOuRegiao: 'Diocese do Oriente',
    numeroBisposReconstruido: 11,
    bisposNotaveis: [
      'Tarcondimanto de Egas',
      'Macedônio de Mopsuéstia',
      'Narciso de Nerônias (Condenado em Antioquia)'
    ],
    observacaoHistorica:
      'Forte presença de bispos simpatizantes do arianismo inicial.'
  },
  {
    id: 'cappadocia-armenia-minor',
    provincia: 'Cappadocia, Armenia Minor e Diospontus',
    dioceseOuRegiao: 'Diocese do Ponto',
    numeroBisposReconstruido: 12,
    bisposNotaveis: [
      'Leôncio de Cesareia da Capadócia',
      'Eutíquio de Tiana',
      'Eulálio de Amaseia'
    ],
    observacaoHistorica:
      'Cesareia da Capadócia tornar-se-ia, décadas depois, a sé do grande Capadócio Basílio Magno.'
  },
  {
    id: 'bithynia',
    provincia: 'Bithynia (Bitínia)',
    dioceseOuRegiao: 'Diocese do Ponto (Província anfitriã de Niceia)',
    numeroBisposReconstruido: 11,
    bisposNotaveis: [
      'Eusébio de Nicomédia (Líder Político Ariano)',
      'Teógnis de Niceia (Bispo local anfitrião)',
      'Maris de Calcedônia'
    ],
    observacaoHistorica:
      'A província anfitriã. Os bispos de Nicomédia, Niceia e Calcedônia formavam o triunvirato de apoio incondicional a Ário.'
  },
  {
    id: 'galatia',
    provincia: 'Galatia (Galácia)',
    dioceseOuRegiao: 'Diocese do Ponto',
    numeroBisposReconstruido: 5,
    bisposNotaveis: [
      'Marcelo de Ancira (Niceno Radical)',
      'Pancrácio de Pessinunte'
    ],
    observacaoHistorica:
      'Ancira seria o local original do concílio antes da transferência imperial para Niceia.'
  },
  {
    id: 'asia-phrygia-lydia-caria',
    provincia: 'Asia, Phrygia, Lydia, Caria et Insulae',
    dioceseOuRegiao: 'Diocese da Ásia (Ásia Menor Ocidental)',
    numeroBisposReconstruido: 32,
    bisposNotaveis: [
      'Artemidoro de Éfeso',
      'Teonas de Cízico',
      'Menófanto de Éfeso (Ariano)'
    ],
    observacaoHistorica:
      'Região com a maior densidade de comunidades cristãs antigas desde o século I.'
  },
  {
    id: 'pamphylia-pisidia-lycia',
    provincia: 'Pamphylia, Pisidia et Lycia',
    dioceseOuRegiao: 'Diocese da Ásia',
    numeroBisposReconstruido: 20,
    bisposNotaveis: [
      'Nicolau de Mira (Lícia: São Nicolau)',
      'Eutíquio de Selêucia',
      'Acácio de Antioquia da Pisídia'
    ],
    observacaoHistorica:
      'Origem da tradição hagiográfica de São Nicolau de Mira.'
  },
  {
    id: 'isauria-lycaonia',
    provincia: 'Isauria et Lycaonia',
    dioceseOuRegiao: 'Diocese do Oriente / Ásia',
    numeroBisposReconstruido: 17,
    bisposNotaveis: [
      'Estêvão de Icônio',
      'Silvano de Isaurópolis'
    ],
    observacaoHistorica:
      'Região montanhosa com presença de bispos confessores ascéticos.'
  },
  {
    id: 'mesopotamia',
    provincia: 'Mesopotamia (Mesopotâmia Romana)',
    dioceseOuRegiao: 'Diocese do Oriente (Fronteira com o Império Sassânida)',
    numeroBisposReconstruido: 5,
    bisposNotaveis: [
      'Tiago de Nísibis (asceta e confessor)',
      'Antíoco de Resaina'
    ],
    observacaoHistorica:
      'A fronteira oriental do Império Romano. Nísibis funcionava como baluarte teológico e militar.'
  },
  {
    id: 'extra-limites',
    provincia: 'Regiões Extra-Limites (Fora do Império Romano)',
    dioceseOuRegiao: 'Pérsia, Índia, Gótia e Armênia Maior',
    numeroBisposReconstruido: 4,
    bisposNotaveis: [
      'João "da Pérsia e da Grande Índia"',
      'Teófilo dos Godos (Bispo da Cítia/Crimeia)',
      'Aristaces da Armênia (Filho de Gregório, o Iluminador)'
    ],
    observacaoHistorica:
      'Demonstra a dimensão verdadeiramente "ecumênica" (para além das fronteiras políticas do Império Romano).'
  },
  {
    id: 'occidens-illyricum',
    provincia: 'Occidens et Illyricum (Europa Ocidental, África e Bálcãs)',
    dioceseOuRegiao: 'Prefeitura da Itália, Gália, Hispania, Illyricum e África',
    numeroBisposReconstruido: 8,
    bisposNotaveis: [
      'Ósio de Córdova (Hispania: Presidente Teológico)',
      'Ceciliano de Cartago (África Proconsular)',
      'Marcos da Calábria (Itália)',
      'Nicásio de Die (Gália)',
      'Domno de Estridão (Dalmácia/Panônia)',
      'Vítor e Vincêncio (Presbíteros Legados do Papa Silvestre I de Roma)',
      'Protógenes de Sárdica (Dácia/Sófia)',
      'Pisto de Marcianópolis (Mésia)'
    ],
    observacaoHistorica:
      'A pequena minoria ocidental que representou todo o Ocidente latino e a Sede de Roma.'
  }
]

export const tradicoesLinguisticasListas: TradicaoManuscritaLista[] = [
  {
    lingua: 'Grego (Original)',
    testemunhosPrincipais: 'Codex Vaticanus Gr. 1168; Codex Parisinus Gr. 510; Nomocânon em XIV Títulos',
    dataTraducao: 'Séc. IV (Texto original)',
    valorCritico: 'A base primária. As listas gregas sobreviventes dividem-se em duas famílias: a versão curta (c. 220 nomes) e a versão expandida com a adição das províncias da comitiva imperial.'
  },
  {
    lingua: 'Latim',
    testemunhosPrincipais: 'Collectio Frisingensis; Collectio Ingolstadiensis; Dionysiana (Turner, EOMIA I)',
    dataTraducao: 'Séc. IV ao VI',
    valorCritico: 'Preserva a ortografia latina exata das províncias e sés ocidentais. Dionísio, o Exíguo, realizou a revisão técnica mais precisa no ano 500.'
  },
  {
    lingua: 'Siríaco',
    testemunhosPrincipais: 'Codex Syriacus Mus. Brit. Add. 14.528; Cod. Vat. Syr. 135',
    dataTraducao: 'c. 500 d.C.',
    valorCritico: 'Excepcional valor histórico para a reconstrução das Sés da Mesopotâmia, Fenícia, Pérsia e Síria.'
  },
  {
    lingua: 'Copta (Sahídico e Bohairico)',
    testemunhosPrincipais: 'Manuscritos do Museu Egípcio de Turim e Biblioteca Borgia',
    dataTraducao: 'Séc. V',
    valorCritico: 'Indispensável para o mapeamento das dioceses rurais da Tebaida e do Alto Egito.'
  },
  {
    lingua: 'Armênio',
    testemunhosPrincipais: 'Manuscritos de Echmiadzin e do Patriarcado Armênio de Jerusalém',
    dataTraducao: 'Séc. V–VI',
    valorCritico: 'Preserva a memória da delegação da Armênia Maior sob Aristaces.'
  },
  {
    lingua: 'Árabe',
    testemunhosPrincipais: 'Anales de Eutíquio de Alexandria; Coleções Canônicas Melquitas e Coptas',
    dataTraducao: 'Séc. IX–X',
    valorCritico: 'Transmite tradições orientais tardias e a contagem popular dos "2048 bispos".'
  }
]

export const analiseCriticaNumero318 = {
  id: 'simbolismo-318-padres',
  titulo: 'O Número Simbólico "318" vs. O Número Histórico Reconstruído',
  explicacao:
    'Embora a tradição eclesiástica e litúrgica celebre os "318 Santos Padres de Niceia", a crítica textual e a historiografia moderna (Gelzer, Honigmann, Hanson) demonstram que o número real de bispos presentes ficou entre 250 e 300. A primeira vez em que o número exacto "318" (τ̄ηʹ em numeração grega) aparece na literatura antiga é em meados da década de 360, citado por Hilário de Poitiers (De synodis 86) e por Atanásio na sua carta Ad Afros (c. 369). Os Padres adotaram o número 318 por causa de seu profundo simbolismo bíblico: é exatamente o número dos servos de Abraão que venceram os reis pagãos para resgatar Ló em Gênesis 14,14. Além disso, em numeração grega, 318 escreve-se TIĒ: T simboliza a Cruz de Cristo, e IĒ representa as duas primeiras letras do nome de Jesus (ΙΗΣΟΥΣ).'
}