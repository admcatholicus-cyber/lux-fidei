// estudos/concilios/calcedonia/documentos/_data.ts

export const dossieHub = {
  titulo: 'Dossiê Documental — Concílio de Calcedônia',
  subtitulo:
    'Textos integrais, atas, cânones e análise do IV Concílio Ecumênico (451 d.C.)',
  introducao:
    'Este dossiê reúne os documentos fundamentais do Concílio de Calcedônia, ' +
    'traduzidos e comentados com rigor acadêmico. Cada seção inclui o texto ' +
    'original quando acessível em fontes de domínio público, tradução para ' +
    'português, notas de vocabulário e referências bibliográficas. O Concílio ' +
    'de Calcedônia (22 de outubro de 451) foi o quarto concílio ecumênico da ' +
    'Igreja cristã e produziu aDefinição que orienta a teologia cristã ortodoxa, ' +
    'católica e protestante até hoje. Suas decisões doutrinárias e disciplinares ' +
    ' moldaram o cristianismo posterior de forma permanente, definindo os limites ' +
    'da orthodoxia cristológica e estabelecendo o arcabouço institucional que ' +
    'a Igreja manteria por séculos.',

  avisoMetodologico: {
    titulo: 'Nota metodológica',
    corpo:
      'Os textos deste dossiê são apresentados em três categorias:\n\n' +
      '1. TRANSCRIÇÃO de fontes de domínio público (Mansi, PL/PG, NPNF): reproduzidos fielmente do ' +
      'original, com indicação da edição utilizada. Estas obras são de domínio público internacional ' +
      'e podem ser transcritas integralmente com citação da fonte.\n\n' +
      '2. TRADUÇÃO DO SITE LUX FIDEI: traduções novas ou revisadas para português, marcadas ' +
      'explicitamente como "(tradução do site Lux Fidei)". Estas traduções são de autoria do ' +
      'site e podem ser citadas livremente.\n\n' +
      '3. PARÁFRASE + CITAÇÃO CURTA: para obras sob copyright (Price & Gaddis, Grillmeier, ' +
      'Tanner, Frend, Meyendorff, Brock, Daley, Chadwick etc.), apresentamos paráfrase com ' +
      'citação de máximo 25 palavras e referência completa. Nunca transcrevemos integralmente ' +
      'obras protegidas por direitos autorais.\n\n' +
      'EDIÇÕES DE REFERÊNCIA UTILIZADAS:\n' +
      'F1 — NPNF (New Advent / CCEL): traduções inglesas dos Padres da Igreja, incluindo as ' +
      'cartas de Leão (Epp. 28, 104, 105, 106), as cartas de Cirilo, e os cânones dos concílios.\n' +
      'F2 — NPNF vol. 14 (Percival, Seven Ecumenical Councils): cânones dos sete concílios ' +
      'ecumênicos com excursos e notas, incluindo os 28 cânones de Calcedônia.\n' +
      'F3 — Documenta Catholica Omnia: Mansi VI–VII (acta conciliares em grego e latim), ' +
      'PL 54 (cartas de Leão), PL 67 (Dionysiana = 27 cânones em latim), PL 63 (Hormisdas). ' +
      'Fonte primária para textos originais em grego e latim.\n' +
      'F4 — Early Church Texts: grego da Definição de Calcedônia com tradução linha a linha, ' +
      'latim do Tomo de Leão. Conferido com F3 para verificar precisão.\n' +
      'F5 — Denzinger-Hünermann: conferência dos §§ 300–303 (Definição calcedoniana na ' +
      'tradição dogmática católica).\n' +
      'F6 — Fourth Century Christianity (ACO): estrutura do Acta Conciliorum Oecumenicorum ' +
      'de Schwartz, com numeração de sessões e tomos. Transcrito diretamente do site.\n\n' +
      'IMPORTANTE: Todos os textos gregos e latinos são transcritos exclusivamente das ' +
      'fontes acima indicadas, caractere por caractere. Quando há divergência entre fontes, ' +
      'a nota registrando a divergência é obrigatória. Nunca completamos textos antigos de memória.',
  },

  documentos: [
    {
      slug: 'definicao',
      titulo: 'A Definição de Calcedônia (Horos)',
      descricao:
        'Texto integral da Definição cristológica aprovada na Sessão 5 ' +
        '(22 de outubro de 451), com tradução parágrafo a parágrafo, aparato ' +
        'de vocabulário grego e análise das 12 cláusulas-chave. Inclui as ' +
        '13 notas obrigatórias de vocabulário teológico (homoousios, physis, ' +
        'hypostasis, prosōpon, Theotokos, teleion, gnōrizomenon, asynchytōs, ' +
        'atreptōs, adiairetōs, achōristōs, en dyo physesin, ek dyo physeon), ' +
        'cada uma com lema confirmado no original, transliteração, tradução, ' +
        'motivo teológico e indicação de a quem se dirige a refutação.',
      meta: '~3.500+ palavras · grego integral + PT · 13 notas',
      icone: '📖',
    },
    {
      slug: 'tomo',
      titulo: 'Tomo de Leão (Epistula 28)',
      descricao:
        'Carta dogmática de Papa Leão I a Flaviano de Constantinopla ' +
        '(13 de junho de 449), em latim integral com tradução capítulo a ' +
        'capítulo e 8–10 notas de comentário teológico. Inclui análise da ' +
        'estrutura (confissão de fé, refutação de Eutiques, exposição da ' +
        'encarnação, cláusula penal) e recepção no Concílio (lida na Sessão 2 ' +
        'com o grito "Pedro falou por Leão!").',
      meta: '~3.000+ palavras · latim integral + PT · 8–10 notas',
      icone: '✒️',
    },
    {
      slug: 'fontes-de-fe',
      titulo: 'As 5 Fontes da Definição',
      descricao:
        'Os cinco documentos que a Definição de Calcedônia cita como base ' +
        'doutrinal: Credos de Niceia (325) e Constantinopla (381), duas ' +
        'cartas de Cirilo de Alexandria (ao Nestório e a João de Antioquia), ' +
        'e índice remissivo que liga o Tomo de Leão à Definição. Cada ' +
        'documento é apresentado com contexto histórico, texto original quando ' +
        'acessível, tradução para português e notas explicativas.',
      meta: '~3.500+ palavras · grego + PT + tabela',
      icone: '📜',
    },
    {
      slug: 'canones',
      titulo: 'Os 28 Cânones Disciplinares',
      descricao:
        'Todos os 27 cânones aprovados na Sessão 15, mais o controverso ' +
        'Cânon 28 (aprovado na Sessão 16), em grego, latim e português, ' +
        'com observações e tabela de recepção por coleção canônica. O Cânon ' +
        '28, sobre a primazia de Constantinopla, é apresentado comDiscussão ' +
        'especial: Protesto dos legados papais, rejeição por Leão Magno ' +
        '(Ep. 105–106), e recepção divergente entre Oriente e Ocidente.',
      meta: '~7.000+ palavras · trilíngues · 28 blocos',
      icone: '⚖️',
    },
    {
      slug: 'leao-104-106',
      titulo: 'Leão rejeita o Cânon 28 (Epp. 104–106)',
      descricao:
        'As três cartas de Leão Magno (a Marciano, Pulquéria e Anatólio) ' +
        'anulando formalmente o Cânon 28, com trechos latinos decisivos ' +
        'e tradução. Inclui contexto: por que Leão aceitou a Definição ' +
        'doutrinária mas rejeitou a reorganização territorial proposta.',
      meta: '~2.000+ palavras · latim + PT',
      icone: '📮',
    },
    {
      slug: 'imperiais',
      titulo: 'Éditos imperiais (451–452)',
      descricao:
        'Lista datada dos éditos e constituições de Marciano que confirmam ' +
        'as decisões de Calcedônia como lei imperial, com paráfrase fiel ' +
        'e trechos no original quando acessível. Inclui análise dos efeitos: ' +
        'aplicação da lei, penas para hereges, proteção dos bispos.',
      meta: '~1.500+ palavras · paráfrase + originais',
      icone: '👑',
    },
    {
      slug: 'edicao-critica',
      titulo: 'Guia de edição crítica (ACO/Mansi)',
      descricao:
        'Guia para compreender as fontes textuais de Calcedônia: ACO de ' +
        'Schwartz (estrutura de 6 volumes), Mansi VI–VII, versões latinas ' +
        '(Rústico, Vaticana, Novara), numeração divergente grego×latim, ' +
        'e como citar cada fonte (ACO, Mansi, PL, PG, NPNF, DH). Inclui ' +
        'tabela comparativa de referências e exemplos práticos de citação.',
      meta: '~3.000+ palavras · referência',
      icone: '🔬',
    },
    {
      slug: 'atas',
      titulo: 'Atas sessão por sessão (16 sessões)',
      descricao:
        'Relato detalhado de cada uma das 16 sessões plenárias, com ficha ' +
        '(data, local, presidência, presenças, documentos lidos, decisões), ' +
        'ordem do dia, relato em paráfrase (600–1.200 palavras por sessão), ' +
        'momentos-chave (3–6 por sessão), decisões e fontes. Hub com ' +
        'tabela-mestra, quadro de numeração divergente grego×latim e guia ' +
        'de leitura das atas (estrutura ACO, actio, aclamações, subscrições).',
      meta: '~15.000+ palavras total · 16 páginas + hub',
      icone: '📋',
    },
  ],

  secoesAdicionais: [
    {
      slug: 'personagens',
      titulo: 'Personagens',
      descricao: 'Prosopografia de 20 figuras-chave do concílio.',
      icone: '🎭',
    },
    {
      slug: 'teologia',
      titulo: 'Teologia',
      descricao: 'Correntes teológicas: miafisismo, diofisismo, monotelismo.',
      icone: '⛪',
    },
    {
      slug: 'recepcao',
      titulo: 'Recepção',
      descricao: 'Como Calcedônia foi recebida em 7 tradições cristãs.',
      icone: '🌍',
    },
    {
      slug: 'cronologia',
      titulo: 'Cronologia',
      descricao: 'Linha do tempo com 45+ eventos da Tabela de Verdade.',
      icone: '⏳',
    },
    {
      slug: 'glossario',
      titulo: 'Glossário',
      descricao: '45+ verbetes de termos gregos e latinos do concílio.',
      icone: '📚',
    },
    {
      slug: 'bibliografia',
      titulo: 'Bibliografia',
      descricao: '40 primárias + 40 secundárias com URLs de verificação.',
      icone: '📚',
    },
  ],
};

export const listaFontes = [
  'F1 — NPNF (New Advent): https://www.newadvent.org/fathers/',
  'F2 — NPNF vol. 14 (CCEL): https://ccel.org/fathers',
  'F3 — Documenta Catholica Omnia: https://www.documentacatholicaomnia.eu/',
  'F4 — Early Church Texts: https://earlychurchtexts.com/',
  'F5 — Denzinger-Hünermann: https://denzinger.katholikentag.de/',
  'F6 — Fourth Century Christianity (ACO): https://www.fourthcentury.com/acta-conciliorum-oecumenicorum/',
];
