/* ─────────────────────────────────────────────────────────────
   TABELA DE CONCORDÂNCIA DAS URKUNDEN DE OPITZ E DOKUMENTE DE BRENNECKE
   Edições de referência:
   - H.-G. Opitz, Athanasius Werke III/1 (1934–35) [Urk. 1–34]
   - H. C. Brennecke et al., Athanasius Werke III/1.3 (2007) [Dok. 1–72]
   - S. Fernández, Fontes Nicaenae Synodi (Brill, 2024) [FNS]
───────────────────────────────────────────────────────────── */

export interface UrkundeConcordancia {
  numeroOpitz: string
  numeroBrennecke?: string  // Dokument na ed. crítica AW III/1.3 (2007)
  tituloDocumento: string
  autorODestinatario: string
  dataAproximada: string
  fontePrimariaAntiga: string
  edicaoCritica: string
  referenciaTraducaoOnline: string
  resumoConteudo: string
  notaCritica?: string
}

export const tabelaConcordanciaUrkunden: UrkundeConcordancia[] = [
  {
    numeroOpitz: 'Urk. 1',
    numeroBrennecke: 'Dok. 15',
    tituloDocumento: 'Carta de Ário a Eusébio de Nicomédia',
    autorODestinatario: 'Ário → Eusébio de Nicomédia',
    dataAproximada: 'c. 318',
    fontePrimariaAntiga: 'Teodoreto, HE I.5.1–4; Epifânio, Pan. 69.6',
    edicaoCritica: 'Opitz, AW III/1, pp. 1–3 · AW III/1.3, Dok. 15',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-1',
    resumoConteudo: 'Ário pede apoio contra Alexandre, expõe sua doutrina do Filho como criatura.'
  },
  {
    numeroOpitz: 'Urk. 2',
    numeroBrennecke: 'Dok. 16',
    tituloDocumento: 'Carta de Eusébio de Nicomédia a Ário (fragmento)',
    autorODestinatario: 'Eusébio de Nicomédia → Ário',
    dataAproximada: 'c. 318',
    fontePrimariaAntiga: 'Atanásio, De syn. 17',
    edicaoCritica: 'Opitz, AW III/1, pp. 3 · AW III/1.3, Dok. 16',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-2',
    resumoConteudo: 'Resposta encorajadora, aprovação da fórmula ariana.'
  },
  {
    numeroOpitz: 'Urk. 3',
    numeroBrennecke: 'Dok. 17',
    tituloDocumento: 'Carta de Eusébio de Cesareia a Eufração de Balaneia',
    autorODestinatario: 'Eusébio de Cesareia → Eufrácion',
    dataAproximada: 'c. 318/9',
    fontePrimariaAntiga: 'Actas do II Niceia (787), sessão VI',
    edicaoCritica: 'Opitz, AW III/1, pp. 4–6 · AW III/1.3, Dok. 17',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-3',
    resumoConteudo: 'Eusébio defende Ário e critica a fórmula do Filho como "verdadeiro Deus do verdadeiro Deus".'
  },
  {
    numeroOpitz: 'Urk. 4a',
    numeroBrennecke: 'Dok. 2.1',
    tituloDocumento: 'Alexandre ao seu clero (com a deposição de Ário)',
    autorODestinatario: 'Alexandre de Alexandria → clero alexandrino',
    dataAproximada: 'c. 319',
    fontePrimariaAntiga: 'Atanásio, De decretis 34 / De synodis 16',
    edicaoCritica: 'Opitz, AW III/1, pp. 6–11 · AW III/1.3, Dok. 2.1',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-4a',
    resumoConteudo: 'Deposição formal de Ário e seus seguidores após o sínodo alexandrino.'
  },
  {
    numeroOpitz: 'Urk. 4b',
    numeroBrennecke: 'Dok. 2.2',
    tituloDocumento: 'Encíclica Henos Sōmatos de Alexandre a todos os bispos',
    autorODestinatario: 'Alexandre de Alexandria → todos os bispos',
    dataAproximada: 'c. 319',
    fontePrimariaAntiga: 'Sócrates, HE I.6',
    edicaoCritica: 'Opitz, AW III/1, pp. 6–11 · AW III/1.3, Dok. 2.2',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-4b',
    resumoConteudo: 'Denúncia pública das heresias arianas. Cronologia relativa a Urk. 14 é debatida (Opitz/Heil: 4b antes; Williams: 14 antes; Parvis: circularam juntas).'
  },
  {
    numeroOpitz: 'Urk. 5',
    numeroBrennecke: 'Dok. 3',
    tituloDocumento: 'Sumário da circular do sínodo da Bitínia (pró-Ário)',
    autorODestinatario: 'Sínodo da Bitínia (Eusébio de Nicomédia)',
    dataAproximada: 'c. 320',
    fontePrimariaAntiga: 'Sozomeno, HE I.15',
    edicaoCritica: 'Opitz, AW III/1, pp. 12 · AW III/1.3, Dok. 3',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-5',
    resumoConteudo: 'Sínodo convocado por Eusébio de Nicomédia em apoio a Ário; sumário sobrevive apenas em referência.'
  },
  {
    numeroOpitz: 'Urk. 6',
    numeroBrennecke: 'Dok. 1',
    tituloDocumento: 'Profissão de fé de Ário e companheiros a Alexandre',
    autorODestinatario: 'Ário et al. → Alexandre de Alexandria',
    dataAproximada: 'c. 320',
    fontePrimariaAntiga: 'Atanásio, De syn. 16; Epifânio, Pan. 69.7',
    edicaoCritica: 'Opitz, AW III/1, pp. 12–13 · AW III/1.3, Dok. 1',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-6',
    resumoConteudo: 'Ário apresenta sua fé para reabilitação; documento-chave do vocabulário ariano primitivo.'
  },
  {
    numeroOpitz: 'Urk. 7',
    numeroBrennecke: 'Dok. 19',
    tituloDocumento: 'Carta de Eusébio de Cesareia a Alexandre',
    autorODestinatario: 'Eusébio de Cesareia → Alexandre',
    dataAproximada: 'c. 320',
    fontePrimariaAntiga: 'Actas do II Niceia (787)',
    edicaoCritica: 'Opitz, AW III/1, pp. 14–15 · AW III/1.3, Dok. 19',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-7',
    resumoConteudo: 'Eusébio defende os arianos e critica a exegese de Alexandre.'
  },
  {
    numeroOpitz: 'Urk. 8',
    numeroBrennecke: 'Dok. 4',
    tituloDocumento: 'Carta de Eusébio de Nicomédia a Paulino de Tiro',
    autorODestinatario: 'Eusébio de Nicomédia → Paulino de Tiro',
    dataAproximada: 'c. 320/1',
    fontePrimariaAntiga: 'Teodoreto, HE I.6',
    edicaoCritica: 'Opitz, AW III/1, pp. 15–17 · AW III/1.3, Dok. 4',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-8',
    resumoConteudo: 'Eusébio de Nicomédia solicita a Paulino que escreva em apoio a Ário.'
  },
  {
    numeroOpitz: 'Urk. 9',
    numeroBrennecke: 'Dok. 5',
    tituloDocumento: 'Fragmento de Paulino de Tiro',
    autorODestinatario: 'Paulino de Tiro',
    dataAproximada: 'c. 320/1',
    fontePrimariaAntiga: 'Eusébio de Cesareia, Contra Marcellum I.4',
    edicaoCritica: 'Opitz, AW III/1, pp. 17–18 · AW III/1.3, Dok. 5',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-9',
    resumoConteudo: 'Resposta afirmativa de Paulino à requisição de Eusébio.'
  },
  {
    numeroOpitz: 'Urk. 10',
    numeroBrennecke: 'Dok. 6',
    tituloDocumento: 'Sumário da circular do sínodo da Palestina (pró-Ário)',
    autorODestinatario: 'Bispos da Palestina',
    dataAproximada: 'c. 321/2',
    fontePrimariaAntiga: 'Sozomeno, HE I.15',
    edicaoCritica: 'Opitz, AW III/1, pp. 18 · AW III/1.3, Dok. 6',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-10',
    resumoConteudo: 'Sínodo palestinense em apoio a Ário, permitindo que continue exercendo o ministério.'
  },
  {
    numeroOpitz: 'Urk. 11',
    numeroBrennecke: 'Dok. 7',
    tituloDocumento: 'Carta de Atanásio de Anazarbo a Alexandre',
    autorODestinatario: 'Atanásio de Anazarbo → Alexandre',
    dataAproximada: 'c. 322',
    fontePrimariaAntiga: 'Atanásio, De syn. 17',
    edicaoCritica: 'Opitz, AW III/1, pp. 18–19 · AW III/1.3, Dok. 7',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-11',
    resumoConteudo: 'Bispo pró-ariano da Cilícia critica Alexandre por rejeitar a doutrina de que o Filho é criatura.'
  },
  {
    numeroOpitz: 'Urk. 12',
    numeroBrennecke: 'Dok. 8',
    tituloDocumento: 'Presbítero Jorge (futuro bispo de Laodiceia) a Alexandre',
    autorODestinatario: 'Jorge, presbítero → Alexandre',
    dataAproximada: 'c. 322',
    fontePrimariaAntiga: 'Atanásio, De syn. 17',
    edicaoCritica: 'Opitz, AW III/1, pp. 19 · AW III/1.3, Dok. 8',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-12',
    resumoConteudo: 'Jorge defende Ário perante Alexandre com argumentos escriturísticos.'
  },
  {
    numeroOpitz: 'Urk. 13',
    numeroBrennecke: 'Dok. 9',
    tituloDocumento: 'Presbítero Jorge aos arianos de Alexandria',
    autorODestinatario: 'Jorge → arianos de Alexandria',
    dataAproximada: 'c. 322',
    fontePrimariaAntiga: 'Atanásio, De syn. 17',
    edicaoCritica: 'Opitz, AW III/1, pp. 19–20 · AW III/1.3, Dok. 9',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-13',
    resumoConteudo: 'Jorge escreve aos arianos de Alexandria oferecendo consolo e argumentos apologéticos.'
  },
  {
    numeroOpitz: 'Urk. 14',
    numeroBrennecke: 'Dok. 17',
    tituloDocumento: 'Encíclica Hē philarchos de Alexandre a Alexandre de Tessalônica',
    autorODestinatario: 'Alexandre de Alexandria → Alexandre de Tessalônica',
    dataAproximada: 'c. 324',
    fontePrimariaAntiga: 'Teodoreto, HE I.4',
    edicaoCritica: 'Opitz, AW III/1, pp. 19–29 · AW III/1.3, Dok. 17',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-14',
    resumoConteudo: 'Longa exposição doutrinal e denúncia dos arianos. Cronologia relativa a 4b é debatida.'
  },
  {
    numeroOpitz: 'Urk. 15',
    numeroBrennecke: 'Dok. 10',
    tituloDocumento: 'Carta fragmentária de Alexandre a todos os bispos',
    autorODestinatario: 'Alexandre → todos os bispos (fragm.)',
    dataAproximada: 'c. 324',
    fontePrimariaAntiga: 'Referências em fontes posteriores',
    edicaoCritica: 'Opitz, AW III/1, pp. 30 · AW III/1.3, Dok. 10',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-15',
    resumoConteudo: 'Fragmento com denúncia contra Ário e apelo por unidade doutrinária.'
  },
  {
    numeroOpitz: 'Urk. 16',
    numeroBrennecke: 'Dok. 11',
    tituloDocumento: 'Notícia de carta de Alexandre ao Papa Silvestre',
    autorODestinatario: 'Alexandre → Silvestre de Roma',
    dataAproximada: 'c. 324',
    fontePrimariaAntiga: 'Hilário de Poitiers, Collectanea Antiariana Parisina, B.II.1 (CSEL 65, p. 141)',
    edicaoCritica: 'Opitz, AW III/1, pp. 30 · AW III/1.3, Dok. 11',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-16',
    resumoConteudo: 'Notícia de comunicação com o bispo de Roma preservada nos fragmentos históricos de Hilário.'
  },
  {
    numeroOpitz: 'Urk. 17',
    numeroBrennecke: 'Dok. 12',
    tituloDocumento: 'Carta de Constantino a Alexandre e Ário',
    autorODestinatario: 'Constantino I → Alexandre e Ário',
    dataAproximada: 'out. 324',
    fontePrimariaAntiga: 'Eusébio, VC II.64–72',
    edicaoCritica: 'Opitz, AW III/1, pp. 32–35 · AW III/1.3, Dok. 12',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-17',
    resumoConteudo: 'Constantino tenta reconciliar as partes, considerando a controvérsia como disputa filosófica menor.'
  },
  {
    numeroOpitz: 'Urk. 18',
    numeroBrennecke: 'Dok. 20',
    tituloDocumento: 'Encíclica do sínodo de Antioquia (início 325)',
    autorODestinatario: 'Sínodo de Antioquia (pres. Ósio de Córdova)',
    dataAproximada: 'início 325',
    fontePrimariaAntiga: 'Paris. syr. 62; Vat. syr. 148 (ed. Schwartz 1905)',
    edicaoCritica: 'Opitz, AW III/1, pp. 36–41 · AW III/1.3, Dok. 20',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-18',
    resumoConteudo: 'Sínodo antioqueno que excomungou provisoriamente Eusébio de Cesareia e outros dois bispos.',
    notaCritica: 'Autenticidade defendida por Schwartz, Chadwick, Abramowski; contestada por Seeck, Harnack. Consenso atual: autêntica.'
  },
  {
    numeroOpitz: 'Urk. 19',
    numeroBrennecke: 'Dok. 21',
    tituloDocumento: 'Fragmento de Narciso de Nerônias a Cresto, Eufrônio e Eusébio',
    autorODestinatario: 'Narciso de Nerônias → Cresto et al. (fragm.)',
    dataAproximada: '325',
    fontePrimariaAntiga: 'Eusébio de Cesareia, Contra Marcellum I.4.39 (GCS 14, p. 25)',
    edicaoCritica: 'Opitz, AW III/1, pp. 41 · AW III/1.3, Dok. 21',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-19',
    resumoConteudo: 'Fragmento de correspondência entre bispos pró-arianos conservado por Eusébio.'
  },
  {
    numeroOpitz: 'Urk. 20',
    numeroBrennecke: 'Dok. 22',
    tituloDocumento: 'Constantino convoca o sínodo para Niceia (transferência)',
    autorODestinatario: 'Constantino I → bispos',
    dataAproximada: '325',
    fontePrimariaAntiga: 'Manuscrito siríaco BM Add. 14528 (ed. Cowper 1857); Eusébio, VC III.6',
    edicaoCritica: 'Opitz, AW III/1, pp. 41–42 · AW III/1.3, Dok. 22',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-20',
    resumoConteudo: 'Transferência do concílio previsto para Ancira para Niceia da Bitínia.'
  },
  {
    numeroOpitz: 'Urk. 21',
    numeroBrennecke: 'Dok. 23',
    tituloDocumento: 'Eusébio de Nicomédia ao sínodo de Niceia (fragm.)',
    autorODestinatario: 'Eusébio de Nicomédia → sínodo (fragm.)',
    dataAproximada: 'jun. 325',
    fontePrimariaAntiga: 'Ambrósio, De fide III.15',
    edicaoCritica: 'Opitz, AW III/1, pp. 42 · AW III/1.3, Dok. 23',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-21',
    resumoConteudo: 'Fragmento em que Eusébio nega o homoousios; provocou a reação favorável ao termo.'
  },
  {
    numeroOpitz: 'Urk. 22',
    numeroBrennecke: 'Dok. 24',
    tituloDocumento: 'Carta de Eusébio de Cesareia à sua igreja',
    autorODestinatario: 'Eusébio de Cesareia → igreja de Cesareia',
    dataAproximada: 'jun. 325',
    fontePrimariaAntiga: 'Atanásio, De decr. 33; Sócrates, HE I.8; Teodoreto, HE I.12',
    edicaoCritica: 'Opitz, AW III/1, pp. 42–47 · AW III/1.3, Dok. 24',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-22',
    resumoConteudo: 'Justificativa de Eusébio por ter assinado o credo niceno, incluindo o texto do Credo de Cesareia.'
  },
  {
    numeroOpitz: 'Urk. 23',
    numeroBrennecke: 'Dok. 25',
    tituloDocumento: 'Carta do sínodo de Niceia à Igreja do Egito',
    autorODestinatario: 'Sínodo de Niceia → Igreja do Egito',
    dataAproximada: 'jun. 325',
    fontePrimariaAntiga: 'Sócrates, HE I.9; Teodoreto, HE I.9',
    edicaoCritica: 'Opitz, AW III/1, pp. 47–51 · AW III/1.3, Dok. 25',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-23',
    resumoConteudo: 'Encíclica sinodal anunciando as decisões contra Ário, sobre a Páscoa e o cisma meleciano.'
  },
  {
    numeroOpitz: 'Urk. 24',
    numeroBrennecke: 'Dok. 26',
    tituloDocumento: 'Credo de Niceia',
    autorODestinatario: 'Concílio de Niceia (Símbolo de Fé)',
    dataAproximada: '19 jun. 325',
    fontePrimariaAntiga: 'Atanásio, De decr. 37; Basílio, Ep. 125; Actas conciliares',
    edicaoCritica: 'Opitz, AW III/1, pp. 51–52 · AW III/1.3, Dok. 26',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-24',
    resumoConteudo: 'Texto oficial do Credo Niceno com os anátemas contra as posições arianas.'
  },
  {
    numeroOpitz: 'Urk. 25',
    numeroBrennecke: 'Dok. 27',
    tituloDocumento: 'Constantino à igreja de Alexandria',
    autorODestinatario: 'Constantino I → igreja de Alexandria',
    dataAproximada: 'jun. 325',
    fontePrimariaAntiga: 'Sócrates, HE I.9.1–14; Gelásio, HE II.27',
    edicaoCritica: 'Opitz, AW III/1, pp. 52–54 · AW III/1.3, Dok. 27',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-25',
    resumoConteudo: 'Constantino anuncia oficialmente a condenação de Ário e a vitória da fé nicena.'
  },
  {
    numeroOpitz: 'Urk. 26',
    numeroBrennecke: 'Dok. 29',
    tituloDocumento: 'Constantino às igrejas (data da Páscoa)',
    autorODestinatario: 'Constantino I → todas as igrejas',
    dataAproximada: 'jun. 325',
    fontePrimariaAntiga: 'Eusébio, VC III.17–20; Sócrates, HE I.9; Teodoreto, HE I.10',
    edicaoCritica: 'Opitz, AW III/1, pp. 54–57 · AW III/1.3, Dok. 29',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-26',
    resumoConteudo: 'Determinação unificada para o cálculo da Páscoa, rejeitando o costume judaico quartodecimano.'
  },
  {
    numeroOpitz: 'Urk. 27',
    numeroBrennecke: 'Dok. 31',
    tituloDocumento: 'Constantino aos nicomedianos (contra Eusébio e Teógnis)',
    autorODestinatario: 'Constantino I → cidade de Nicomédia',
    dataAproximada: 'nov./dez. 325',
    fontePrimariaAntiga: 'Atanásio, De decr. app.; Gelásio, HE III',
    edicaoCritica: 'Opitz, AW III/1, pp. 58–62 · AW III/1.3, Dok. 31',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-27',
    resumoConteudo: 'Deposição e exílio de Eusébio de Nicomédia e Teógnis de Niceia por não subscreverem plenamente as decisões.'
  },
  {
    numeroOpitz: 'Urk. 28',
    numeroBrennecke: 'Dok. 32',
    tituloDocumento: 'Constantino a Teódoto de Laodiceia',
    autorODestinatario: 'Constantino I → Teódoto de Laodiceia',
    dataAproximada: 'nov./dez. 325',
    fontePrimariaAntiga: 'Gelásio, HE III',
    edicaoCritica: 'Opitz, AW III/1, pp. 62–63 · AW III/1.3, Dok. 32',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-28',
    resumoConteudo: 'Advertência a Teódoto para não seguir o exemplo dos arianos exilados.'
  },
  {
    numeroOpitz: 'Urk. 29',
    numeroBrennecke: 'Dok. 34',
    tituloDocumento: 'Constantino a Ário (convite à corte)',
    autorODestinatario: 'Constantino I → Ário',
    dataAproximada: '27 nov. 327',
    fontePrimariaAntiga: 'Sócrates, HE I.25',
    edicaoCritica: 'Opitz, AW III/1, pp. 63–64 · AW III/1.3, Dok. 34',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-29',
    resumoConteudo: 'Convocação de Ário para a corte imperial visando sua possível reabilitação.'
  },
  {
    numeroOpitz: 'Urk. 30',
    numeroBrennecke: 'Dok. 35',
    tituloDocumento: 'Ário e Euzoio a Constantino (profissão de fé)',
    autorODestinatario: 'Ário e Euzoio → Constantino I',
    dataAproximada: 'fim de 327',
    fontePrimariaAntiga: 'Sócrates, HE I.26; Sozomeno, HE II.27',
    edicaoCritica: 'Opitz, AW III/1, pp. 64 · AW III/1.3, Dok. 35',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-30',
    resumoConteudo: 'Profissão de fé submetida por Ário buscando reabilitação, sem usar o termo homoousios.'
  },
  {
    numeroOpitz: 'Urk. 31',
    numeroBrennecke: 'Dok. 36',
    tituloDocumento: 'Eusébio de Nicomédia e Teógnis pedem readmissão',
    autorODestinatario: 'Eusébio de Nicomédia e Teógnis → "segundo sínodo de Niceia"',
    dataAproximada: 'fim de 327',
    fontePrimariaAntiga: 'Sócrates, HE I.14; Sozomeno, HE II.16',
    edicaoCritica: 'Opitz, AW III/1, pp. 65 · AW III/1.3, Dok. 36',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-31',
    resumoConteudo: 'Retratação formal dos dois bispos exilados, pedindo restabelecimento em suas sés.'
  },
  {
    numeroOpitz: 'Urk. 32',
    numeroBrennecke: 'Dok. 37',
    tituloDocumento: 'Constantino a Alexandre sobre a reintegração de Ário (fragm.)',
    autorODestinatario: 'Constantino I → Alexandre (fragm.)',
    dataAproximada: 'início 328',
    fontePrimariaAntiga: 'Atanásio, Apologia contra Arianos 59.6',
    edicaoCritica: 'Opitz, AW III/1, pp. 65–66 · AW III/1.3, Dok. 37',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-32',
    resumoConteudo: 'Instrução imperial para que Alexandre readmitisse Ário à comunhão eucarística.'
  },
  {
    numeroOpitz: 'Urk. 33',
    numeroBrennecke: 'Dok. 28',
    tituloDocumento: 'Edito imperial contra Ário e os "porfirianos"',
    autorODestinatario: 'Constantino I (edito público)',
    dataAproximada: '325 (Sócrates I.9; AW 3.3) / 333 (Opitz) / fim de 325 (Fernández)',
    fontePrimariaAntiga: 'Sócrates, HE I.9; Gelásio, HE II.36',
    edicaoCritica: 'Opitz, AW III/1, pp. 66–68 · AW III/1.3, Dok. 28',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-33',
    resumoConteudo: 'Ordem de queima dos escritos arianos; equiparação de arianos a "porfirianos" (seguidores de Porfírio).',
    notaCritica: 'Opitz 333 · AW 3.3 (2007) Dok. 28 data em 325 · Fernández (FNS) data do fim de 325 · Sócrates I.9 coloca em 325.'
  },
  {
    numeroOpitz: 'Urk. 34',
    numeroBrennecke: 'Dok. 27',
    tituloDocumento: 'Constantino a Ário e companheiros',
    autorODestinatario: 'Constantino I → Ário e seus seguidores',
    dataAproximada: '333 (Opitz) / 334 (Fernández)',
    fontePrimariaAntiga: 'Atanásio, De decretis; Gelásio, HE III',
    edicaoCritica: 'Opitz, AW III/1, pp. 68–75 · AW III/1.3, Dok. 27',
    referenciaTraducaoOnline: 'fourthcentury.com/urkunde-34',
    resumoConteudo: 'Longa carta invectiva imperial denunciando Ário como novo Porfírio.',
    notaCritica: 'Opitz 333 · AW 3.3 (2007) Dok. 27 · Fernández (FNS) data em 334.'
  }
]