/* ─────────────────────────────────────────────────────────────
   DOSSIÊ DOCUMENTAL: 2I. HISTORIADORES ANTIGOS E TESTEMUNHOS
   Aparato crítico comparativo das fontes primárias históricas.
   Tabela: Autor × Obra × Data × Viés/Perspectiva × Proprium
───────────────────────────────────────────────────────────── */

export interface HistoriadorAntigo {
  id: string
  autor: string
  obra: string
  dataComposicao: string
  viesOuPerspectiva: string
  proprium: string // O que só ele traz ou preservou
  documentosPreservados: string[]
}

export const historiadoresAntigosData: HistoriadorAntigo[] = [
  {
    id: 'eusebio-cesareia',
    autor: 'Eusébio de Cesareia',
    obra: 'Vita Constantini (Vida de Constantino) II.61–III.24',
    dataComposicao: 'c. 337–339 d.C.',
    viesOuPerspectiva:
      'Panegírico imperial e autodefesa. Escreveu para glorificar Constantino como o "bispo universal de fora" e justificar sua própria assinatura do homoousios. Omite sua própria excomunhão no Sínodo de Antioquia de 325.',
    proprium:
      'Relato presencial e minucioso da cerimônia de abertura, das vestes do imperador, dos abraços e beijos de Constantino nas feridas dos bispos confessores (Pafnúcio) e do banquete dos vinte anos de reinado (vicennalia).',
    documentosPreservados: [
      'Carta de Constantino a Alexandre e Ário (Urk. 17)',
      'Carta de Constantino sobre a data da Páscoa (Urk. 26)',
      'Carta de Constantino sobre o Santo Sepulcro',
      'Carta de Constantino encomendando as 50 Bíblias'
    ]
  },
  {
    id: 'atanasio-alexandria',
    autor: 'Atanásio de Alexandria',
    obra: 'De decretis Nicaenae Synodi; De synodis; Apologia contra Arianos; Historia Arianorum',
    dataComposicao: 'c. 350–368 d.C.',
    viesOuPerspectiva:
      'Polemicista e líder niceno militante. Escreveu durante o exílio para provar que Niceia era a única rocha inabalável da fé apostólica e desmascarar a facção eusebiana.',
    proprium:
      'O único historiador que preservou os fragmentos da Thalia de Ário, a lista oficial do Breviarium Melitii (29 bispos melecianos) e a descrição psicológica dos eusebianos "piscando e acenando entre si" no plenário.',
    documentosPreservados: [
      'Carta e Profissão de Fé de Ário a Alexandre (Urk. 6)',
      'Fragmentos da Thalia de Ário',
      'Breviarium Melitii (Urk. 24)',
      'Sínodo de Roma sob o Papa Dionísio (262)'
    ]
  },
  {
    id: 'epifanio-salamina',
    autor: 'Epifânio de Salamina',
    obra: 'Panarion (Refutação de todas as heresias) 68–69',
    dataComposicao: 'c. 374–377 d.C.',
    viesOuPerspectiva:
      'Heresiólogo caçador de erros dogmáticos. Severo, detalhista e zeloso pela ortodoxia tradicional.',
    proprium:
      'O ÚNICO autor antigo que preservou o retrato físico e comportamental detalhado de Ário: homem de estatura muito alta, semblante grave e ascético, vestindo túnica curta de monge e manto (colobium), de modos suaves e voz cativante, capaz de seduzir mulheres e bispos.',
    documentosPreservados: [
      'Cópia da Carta de Ário a Eusébio de Nicomédia (Urk. 1)',
      'Cópia da Carta de Ário a Alexandre (Urk. 6)',
      'Versão "interpolada" do Credo de Niceia no Ancoratus'
    ]
  },
  {
    id: 'rufino-aquileia',
    autor: 'Rufino de Aquileia',
    obra: 'Historia Ecclesiastica X.1–6 (Continuação de Eusébio em latim)',
    dataComposicao: 'c. 402 d.C.',
    viesOuPerspectiva:
      'Perspectiva ocidental latina, monástica e edificante. Traduziu e expandiu Eusébio para o público de língua latina.',
    proprium:
      'Preservou a famosa narrativa do filósofo pagão/ariano convertido por um simples bispo confessor analfabeto que professou a fé sem retórica, e o relato dramático de Constantino queimando os papiros de denúncias (libelli) na fogueira.',
    documentosPreservados: [
      'Tradição latina dos debates de Niceia',
      'Cânones de Niceia em versão latina antiga'
    ]
  },
  {
    id: 'filostorgio',
    autor: 'Filostórgio de Borisso',
    obra: 'Historia Ecclesiastica I.7–10 (Preservada na Epitome de Fócio no séc. IX)',
    dataComposicao: 'c. 425–430 d.C.',
    viesOuPerspectiva:
      'Heterousiano / Eunomiano (Ariano Radical). A ÚNICA História Eclesiástica antiga escrita da perspectiva do partido ariano vencido.',
    proprium:
      'Acusa Alexandre de Alexandria e Ósio de Córdova de terem feito um pacto secreto em Nicomédia antes do concílio; afirma que a maioria dos bispos assinou o homoousios sob chantagem de exílio imperial; relata a morte de Ário sob suspeita de envenenamento ou magia por Atanásio.',
    documentosPreservados: [
      'Tradição historiográfica ariana alternativa',
      'Detalhes da vida de Úlfilas e da missão entre os góticos'
    ]
  },
  {
    id: 'socrates-escolastico',
    autor: 'Sócrates Escolástico (Sócrates de Constantinopla)',
    obra: 'Historia Ecclesiastica I.7–14',
    dataComposicao: 'c. 439–440 d.C.',
    viesOuPerspectiva:
      'Advogado (Scholastikos) em Constantinopla. Historiador altamente objetivo, moderado, crítico e documentalmente rigoroso.',
    proprium:
      'A fonte historiográfica mais valiosa para a reconstrução documental de Niceia. Pesquisou os arquivos de Constantinopla e reproduziu cartas integrais na sua obra.',
    documentosPreservados: [
      'Carta Sinodal aos Egípcios (Urk. 23)',
      'Edito de Constantino contra os Porfirianos (Urk. 33)',
      'Carta de Eusébio de Cesareia à sua diocese (Urk. 22)',
      'Carta de Constantino convidando Ário (Urk. 29)',
      'Profissão de fé de Ário e Euzoio (Urk. 30)'
    ]
  },
  {
    id: 'sozomeno',
    autor: 'Salamínio Hermias Sozômeno',
    obra: 'Historia Ecclesiastica I.16–25',
    dataComposicao: 'c. 440–443 d.C.',
    viesOuPerspectiva:
      'Advogado em Constantinopla com forte inclinação monástica e hagiográfica. Escreveu em paralelo com Sócrates, mas com estilo mais literário.',
    proprium:
      'Detalha minuciosamente a intervenção do bispo e confessor egípcio Pafnúcio no plenário para impedir a imposição do celibato obrigatório aos clérigos casados (Cânone 3).',
    documentosPreservados: [
      'Relato expandido das sessões disciplinares',
      'Detalhes sobre os confessores mutilados em Niceia'
    ]
  },
  {
    id: 'teodoreto-ciro',
    autor: 'Teodoreto de Ciro',
    obra: 'Historia Ecclesiastica I.6–13',
    dataComposicao: 'c. 448–450 d.C.',
    viesOuPerspectiva:
      'Bispo de Ciro e teólogo da Escola de Antioquia. Foco na tradição antioquena e na defesa da ortodoxia oriental.',
    proprium:
      'Preservou o fragmento dramático de Eustácio de Antioquia descrevendo o documento ariano rasgado no plenário, a carta de Ário a Eusébio de Nicomédia (`Urk. 1`) e a carta de Constantino a Teódoto de Laodiceia (`Urk. 28`).',
    documentosPreservados: [
      'Carta de Ário a Eusébio de Nicomédia (Urk. 1)',
      'Encíclica Hē philarchos de Alexandre (Urk. 14)',
      'Carta de Eusébio de Nicomédia a Paulino de Tiro (Urk. 8)',
      'Carta de Constantino aos Nicomedianos (Urk. 27)'
    ]
  },
  {
    id: 'gelasio-cizico',
    autor: 'Gelásio de Cízico',
    obra: 'Syntagma / Historia Concilii Nicaeni (PG 85)',
    dataComposicao: 'c. 475 d.C.',
    viesOuPerspectiva:
      'Compilador do século V na Bitínia. Utilizou documentos autênticos misturados a tradições lendárias e apócrifas posteriores.',
    proprium:
      'Origem das pseudo-atas dos debates de Niceia e do famoso debate filosófico formal entre os Padres Conciliares e o filósofo ariano Fédon.',
    documentosPreservados: [
      'Compilação tardia de cartas imperiais',
      'Diálogos teológicos apócrifos de Niceia'
    ]
  },
  {
    id: 'jeronimo-estricao',
    autor: 'Jerônimo de Estridão',
    obra: 'Chronicon; Dialogus contra Luciferianos 19; De Viris Illustribus',
    dataComposicao: 'c. 380–393 d.C.',
    viesOuPerspectiva:
      'Erudito latino e tradutor da Vulgata. Defensor apaixonado da ortodoxia nicena no Ocidente.',
    proprium:
      'Cunhou a célebre frase sobre o rescaldo de Niceia após Rimini-Selêucia (359): "Ingemuit totus orbis et Arianum se esse miratus est" ("O mundo inteiro gemeu e descobriu, atônito, que se tornara ariano").',
    documentosPreservados: [
      'Notícias cronológicas sobre as datas dos exílios de Atanásio',
      'Catálogo de autores antiarianos latinos'
    ]
  },
  {
    id: 'synodicon-vetus',
    autor: 'Compilador Anônimo Bizantino',
    obra: 'Synodicon Vetus (cap. 35)',
    dataComposicao: 'Séc. IX (c. 887 d.C.)',
    viesOuPerspectiva:
      'Compilação canônica e hagiográfica bizantina tardia.',
    proprium:
      'Origem da lenda medieval de que os livros canônicos e apócrifos foram colocados sobre o altar e que, após a oração dos bispos, os livros apócrifos/heréticos caíram sozinhos no chão (lenda popularizada por Voltaire no séc. XVIII).',
    documentosPreservados: [
      'Tradições lendárias tardias sobre os concílios ecumênicos'
    ]
  },
  {
    id: 'eutiquio-alexandria',
    autor: 'Eutíquio de Alexandria (Saʿīd ibn Baṭrīq)',
    obra: 'Nazm al-Jawhar (Anais de Eutíquio em árabe)',
    dataComposicao: 'Séc. X (c. 937–940 d.C.)',
    viesOuPerspectiva:
      'Patriarca Melquita (Ortodoxo) de Alexandria de língua árabe.',
    proprium:
      'Preservou a famosa tradição oriental-árabe de que 2.048 bispos reuniram-se inicialmente em Niceia, divididos em inúmeras facções, e que o imperador Constantino selecionou apenas os 318 bispos ortodoxos que concordavam na fé consubstancial.',
    documentosPreservados: [
      'Tradição histórica melquita de língua árabe sobre o concílio'
    ]
  },
  {
    id: 'tradicoes-orientais',
    autor: 'Igrejas Coptas, Etiópicas, Armênias e Siríacas',
    obra: 'Coleções Canônicas Orientais e Crônicas (ex: João de Niciu, séc. VII)',
    dataComposicao: 'Séc. V ao X d.C.',
    viesOuPerspectiva:
      'Tradições das Igrejas Orientais Não-Calcedonianas.',
    proprium:
      'Preservação dos "80 Cânones Árabes de Niceia" e dos "73 Cânones Siríacos" (pseudo-cânones atribuídos a Niceia que formaram o direito eclesiástico oriental) e liturgias em língua ge\'ez, copta e armênia celebrando os 318 Padres.',
    documentosPreservados: [
      'Traduções orientais antigas dos Cânones autênticos e pseudo-nicenos'
    ]
  }
]