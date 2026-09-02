// src/app/hierarquia/data.ts

export interface Cargo {
  nome: string;
  subtitulo: string;
  tags: string[];
  corpo: string;
}

export interface Nivel {
  id: string;
  titulo: string;
  subtitulo: string;
  icone: string;
  cor: string;
  maxWidth: string;
  cargos: Cargo[];
}

export interface Secao {
  id: string;
  numero: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  tipo: "piramide" | "grid" | "lista";
  icone: string;
  cor: string;
  niveis: Nivel[];
}

/* ══════════════════════════════════════════════════════
   SEÇÃO 1 — HIERARQUIA SACRAMENTAL (PIRÂMIDE)
   A única hierarquia propriamente dita: os três graus
   do Sacramento da Ordem (Episcopado, Presbiterado,
   Diaconado) + o Papado como primado jurisdicional.
══════════════════════════════════════════════════════ */
const hierarquiaSacramental: Secao = {
  id: "sacramental", numero: "I",
  titulo: "Hierarquia Sacramental",
  subtitulo: "Os Três Graus do Sacramento da Ordem",
  descricao:
    "A única hierarquia em sentido teológico estrito. O Sacramento da Ordem possui três graus — Episcopado, Presbiterado e Diaconado — instituídos por Cristo. O Papado é o primado de jurisdição sobre toda a Igreja, conferido ao Bispo de Roma como sucessor de Pedro.",
  tipo: "piramide",
  icone: "✝️",
  cor: "#8b1a1a",
  niveis: [
    {
      id: "papado",
      titulo: "Papado",
      subtitulo: "Primado de Pedro — Cabeça visível da Igreja",
      icone: "✝️",
      cor: "#8b1a1a",
      maxWidth: "440px",
      cargos: [
        {
          nome: "Papa",
          subtitulo: "Bispo de Roma · Vigário de Cristo",
          tags: ["Magistério Supremo", "Infalibilidade", "Primado de Pedro"],
          corpo: `<p>O Papa é o <strong>Bispo de Roma</strong> e sucessor do apóstolo Pedro, a quem Jesus conferiu o primado: <em>"Tu és Pedro, e sobre esta pedra edificarei a minha Igreja"</em> (Mt 16,18).</p>
          <p>Possui <strong>autoridade suprema, plena e universal</strong> sobre toda a Igreja em matéria de fé, moral e governo. Quando fala <em>ex cathedra</em> sobre fé e moral, goza do carisma da <strong>infalibilidade</strong>, definido dogmaticamente no Concílio Vaticano I (1870).</p>
          <p>É eleito pelo <strong>Colégio dos Cardeais</strong> em conclave. Seus títulos incluem: Bispo de Roma, Vigário de Jesus Cristo, Sumo Pontífice da Igreja Universal, Patriarca do Ocidente, Soberano do Estado da Cidade do Vaticano e Servo dos Servos de Deus.</p>`,
        },
        {
          nome: "Papa Emérito",
          subtitulo: "Papa renunciante · Título honorífico",
          tags: ["Renúncia", "Cânon 332 §2", "Precedente Histórico"],
          corpo: `<p>O Código de Direito Canônico (c. 332 §2) prevê a renúncia do Papa, mas o título de <strong>Papa Emérito</strong> não existia na prática até 2013, quando Bento XVI renunciou — o primeiro em quase 600 anos.</p>
          <p>Manteve o nome papal, o hábito branco e viveu em clausura no Vaticano até sua morte em 2022. Criou uma situação <strong>teologicamente inédita</strong>: dois papas vivos simultaneamente, embora apenas um no exercício da função.</p>`,
        },
      ],
    },
    {
      id: "episcopado",
      titulo: "Episcopado",
      subtitulo: "Plenitude do Sacramento da Ordem",
      icone: "⛪",
      cor: "#7a2020",
      maxWidth: "560px",
      cargos: [
        {
          nome: "Cardeal",
          subtitulo: "Príncipe da Igreja · Eleitor do Papa",
          tags: ["Colégio dos Cardeais", "Conclave", "Dignidade"],
          corpo: `<p>Os cardeais formam o <strong>Colégio dos Cardeais</strong>, o mais alto órgão consultivo do Papa. Usam vestes <strong>vermelhas</strong>, símbolo da disposição ao martírio.</p>
          <p>A principal função dos cardeais com menos de 80 anos é <strong>eleger o novo Papa</strong> em conclave. São nomeados pelo Papa e existem em três ordens: cardeais bispos, presbíteros e diáconos. Note: a dignidade cardinalícia <strong>não é um grau sacramental</strong> — é uma honra jurisdicional. Um cardeal pode ser bispo, padre ou (raramente) não ordenado.</p>`,
        },
        {
          nome: "Patriarca",
          subtitulo: "Cabeça de Igreja Particular Sui Iuris",
          tags: ["Igrejas Orientais", "Rito Próprio", "Origem Apostólica"],
          corpo: `<p>Patriarcas presidem <strong>Igrejas Patriarcais</strong> — comunidades de origem apostólica com rito, liturgia e direito canônico próprios, em plena comunhão com Roma.</p>
          <p>Os patriarcados históricos: Roma, Constantinopla, Alexandria, Antioquia e Jerusalém. Na Igreja Católica, governam igrejas como a Maronita, Melquita e Copta. Alguns títulos (como Patriarca de Lisboa) são puramente honoríficos.</p>`,
        },
        {
          nome: "Arcebispo Metropolitano",
          subtitulo: "Cabeça de Província Eclesiástica",
          tags: ["Pálio", "Província Eclesiástica", "Sé Metropolitana"],
          corpo: `<p>Governa uma <strong>arquidiocese</strong> e preside uma <strong>província eclesiástica</strong> (grupo de dioceses vizinhas). Recebe do Papa o <strong>pálio</strong> — faixa de lã branca com cruzes negras — símbolo da autoridade metropolitana.</p>
          <p>Não tem jurisdição direta sobre as dioceses sufragâneas, mas pode inspecioná-las em caso de negligência.</p>`,
        },
        {
          nome: "Bispo Diocesano",
          subtitulo: "Pastor Ordinário de uma Diocese",
          tags: [
            "Sucessão Apostólica",
            "Magistério Local",
            "Plenitude da Ordem",
          ],
          corpo: `<p>O bispo diocesano é o <strong>pastor ordinário</strong> de uma diocese. Governa com autoridade própria, ordinária e imediata — não como delegado do Papa, mas por direito próprio.</p>
          <p>É o principal celebrante dos sacramentos, guardião da fé ortodoxa, ordenador dos padres. Todas as missas da diocese são celebradas em seu nome. É ordenado por <strong>pelo menos três bispos</strong>, garantindo a sucessão apostólica ininterrupta.</p>`,
        },
        {
          nome: "Bispo Auxiliar",
          subtitulo: "Auxiliar sem direito de sucessão",
          tags: ["Sé Titular", "Apoio Pastoral", "Formação Episcopal"],
          corpo: `<p>Ordenado para <strong>assistir</strong> o bispo diocesano em dioceses grandes. Não tem direito automático de sucessão. Recebe uma sé titular simbólica (diocese histórica extinta).</p>
          <p>Muitos são futuros bispos diocesanos — o cargo serve de formação para o episcopado pleno.</p>`,
        },
        {
          nome: "Bispo Coadjutor",
          subtitulo: "Sucessor designado com direito de sucessão",
          tags: [
            "Direito de Sucessão",
            "Transição Planejada",
            "Nomeação Papal",
          ],
          corpo: `<p>Nomeado pelo Papa com <strong>direito de sucessão automática</strong>. Quando o bispo diocesano renunciar ou morrer, o coadjutor assume sem nova nomeação.</p>
          <p>Designado quando há necessidade de transição planejada — saúde do titular, necessidade de reforma ou preparação para mudanças na diocese.</p>`,
        },
        {
          nome: "Bispo Emérito",
          subtitulo: "Renunciou ao governo, conserva o episcopado",
          tags: ["Renúncia aos 75", "Conserva a Ordem", "Serviço Voluntário"],
          corpo: `<p>Todo bispo deve apresentar renúncia ao Papa ao completar <strong>75 anos</strong>. Aceita, torna-se emérito — conserva a dignidade e poderes da ordem (pode celebrar, confirmar, ordenar com licença), mas sem governo jurisdicional.</p>`,
        },
      ],
    },
    {
      id: "presbiterado",
      titulo: "Presbiterado",
      subtitulo: "Segundo grau do Sacramento da Ordem",
      icone: "🕯️",
      cor: "#6b3a2a",
      maxWidth: "660px",
      cargos: [
        {
          nome: "Pároco",
          subtitulo: "Pastor de uma Paróquia · Cura de Almas",
          tags: ["Cura Animarum", "Paróquia", "Face da Igreja"],
          corpo: `<p>O pároco é o pastor responsável por uma <strong>paróquia</strong> — a menor unidade territorial da Igreja. Sua missão é a <em>cura animarum</em>: a salvação eterna dos fiéis confiados a ele.</p>
          <p>Administra os sacramentos, prega, catequiza, visita enfermos, registra batismos, casamentos e funerais. É a face mais próxima da Igreja para a maioria dos católicos. Nomeado pelo bispo com estabilidade no cargo.</p>`,
        },
        {
          nome: "Vigário Paroquial",
          subtitulo: "Padre colaborador do pároco",
          tags: ["Assistente", "Formação Pastoral", "Subordinado ao Pároco"],
          corpo: `<p>Antigo "padre coadjutor" — o padre que <strong>auxilia o pároco</strong> na pastoral. Age sob direção do pároco, sem autonomia plena.</p>
          <p>Frequentemente é padre jovem em formação pastoral ou experiente enviado para apoiar paróquias com grande número de fiéis.</p>`,
        },
        {
          nome: "Capelão",
          subtitulo: "Padre de serviço institucional especializado",
          tags: ["Hospital", "Militar", "Escola", "Prisão"],
          corpo: `<p>Designado para <strong>serviço espiritual em instituição específica</strong>: hospital, universidade, presídio, quartel, aeroporto. Não governa paróquia, serve uma comunidade delimitada.</p>
          <p>Capelães militares formam o <strong>Ordinariato Militar</strong>, diocese especial das forças armadas. O capelão hospitalar é frequentemente o único sacerdote presente na hora da morte.</p>`,
        },
        {
          nome: "Padre Religioso",
          subtitulo: "Sacerdote membro de Instituto de Vida Consagrada",
          tags: ["Votos Religiosos", "Obediência ao Superior", "Carisma"],
          corpo: `<p>Diferente do padre diocesano (que obedece ao bispo local), o padre religioso pertence a um <strong>instituto de vida consagrada</strong> — franciscanos, dominicanos, jesuítas, salesianos etc.</p>
          <p>Faz votos de pobreza, castidade e obediência ao seu Superior. Pode ser enviado para qualquer lugar do mundo segundo as necessidades do instituto. O Padre Geral dos Jesuítas é chamado coloquialmente de "Papa Negro" por sua influência histórica.</p>`,
        },
      ],
    },
    {
      id: "diaconado",
      titulo: "Diaconado",
      subtitulo: "Primeiro grau do Sacramento da Ordem",
      icone: "📖",
      cor: "#3a4a6a",
      maxWidth: "720px",
      cargos: [
        {
          nome: "Diácono Permanente",
          subtitulo: "Ordenado para o serviço — pode ser casado",
          tags: [
            "Restaurado pelo Vaticano II",
            "Pode Ser Casado",
            "Cristo-Servo",
          ],
          corpo: `<p>Restaurado pelo <strong>Concílio Vaticano II</strong> (1965). É o único grau da Ordem que pode ser conferido a <strong>homens casados</strong> (desde que o casamento preceda a ordenação).</p>
          <p>Pode batizar, assistir casamentos, presidir funerais, pregar homilias, distribuir a Eucaristia. <strong>Não pode</strong> presidir a Missa, ouvir confissões ou administrar a Unção dos Enfermos. Simboliza Cristo-Servo; usa estola transversal e dalmática.</p>`,
        },
        {
          nome: "Diácono Transitório",
          subtitulo: "Última etapa antes da ordenação presbiteral",
          tags: ["Etapa Formativa", "Celibato Assumido", "Pré-Sacerdócio"],
          corpo: `<p>Etapa imediatamente anterior ao sacerdócio. O seminarista é ordenado diácono (assumindo publicamente o celibato) e serve nessa condição por seis meses a um ano.</p>
          <p>Período de experiência ministerial — celebrações da Palavra, batismos, funerais — antes de assumir plenamente o presbiterado.</p>`,
        },
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════
   SEÇÃO 2 — GOVERNO E JURISDIÇÃO
   Cargos administrativos e jurisdicionais que não
   correspondem a graus sacramentais.
══════════════════════════════════════════════════════ */
const governoJurisdicao: Secao = {
  id: "governo", numero: "II",
  titulo: "Governo e Jurisdição",
  subtitulo: "Cargos de administração eclesiástica",
  descricao:
    "Funções de governo que não constituem graus sacramentais próprios. São ofícios jurisdicionais — posições de autoridade administrativa dentro da estrutura da Igreja, exercidas por bispos ou padres em virtude de nomeação, não de ordenação.",
  tipo: "grid",
  icone: "⚖️",
  cor: "#5a4a2a",
  niveis: [
    {
      id: "curia_governo",
      titulo: "Cúria e Governo Diocesano",
      subtitulo: "Administração da diocese e da Igreja universal",
      icone: "🏛️",
      cor: "#5a4a2a",
      maxWidth: "780px",
      cargos: [
        {
          nome: "Vigário Geral",
          subtitulo: "Alter ego do bispo na diocese",
          tags: [
            "Poder Ordinário Vicário",
            "Segundo Comando",
            "Direito Canônico",
          ],
          corpo: `<p>Principal colaborador do bispo. Possui <strong>poder ordinário vicário</strong> — age em nome do bispo em toda a diocese, com a mesma autoridade, exceto atos reservados ao bispo pessoalmente.</p>
          <p>Pode assinar documentos diocesanos, conceder licenças, resolver questões administrativas. Cada diocese tem apenas um Vigário Geral.</p>`,
        },
        {
          nome: "Vigário Episcopal",
          subtitulo: "Vigário para uma área ou assunto específico",
          tags: [
            "Jurisdição Limitada",
            "Territorial ou Temático",
            "Nomeado pelo Bispo",
          ],
          corpo: `<p>Diferente do Vigário Geral (que tem jurisdição sobre toda a diocese), o Vigário Episcopal é nomeado para uma <strong>região específica</strong> da diocese ou para um <strong>assunto determinado</strong> (clero religioso, pastoral da saúde, etc.).</p>`,
        },
        {
          nome: "Chanceler Diocesano",
          subtitulo: "Responsável pela chancelaria e documentos oficiais",
          tags: ["Arquivo Diocesano", "Documentos Oficiais", "Notário"],
          corpo: `<p>O Chanceler é o <strong>notário principal</strong> da diocese — responsável por autenticar, arquivar e expedir todos os documentos oficiais da cúria diocesana: decretos, rescisões, cartas pastorais, processos canônicos.</p>`,
        },
        {
          nome: "Ecônomo Diocesano",
          subtitulo: "Administrador dos bens temporais da diocese",
          tags: [
            "Finanças",
            "Patrimônio",
            "Conselho de Assuntos Econômicos",
          ],
          corpo: `<p>Administra os <strong>bens temporais da diocese</strong> sob autoridade do bispo. Gerencia orçamentos, patrimônio imobiliário, investimentos e folha de pagamento do clero. Trabalha junto ao Conselho Diocesano de Assuntos Econômicos.</p>`,
        },
        {
          nome: "Cônego",
          subtitulo: "Membro do Cabido Catedralício",
          tags: [
            "Capítulo Catedralício",
            "Liturgia Coral",
            "Tradição Medieval",
          ],
          corpo: `<p>Os cônegos formam o <strong>Cabido Catedralício</strong> — comunidade de padres que assiste o bispo e celebra o Ofício Divino coletivamente na catedral.</p>
          <p>Historicamente viviam em comunidade. Hoje o título é frequentemente honorífico, concedido a padres beneméritos. O Deão preside o Cabido.</p>`,
        },
        {
          nome: "Monsenhor",
          subtitulo: "Título honorífico pontifício",
          tags: [
            "Honra Pessoal",
            "Três Graus",
            "Restringido por Francisco",
          ],
          corpo: `<p><em>Monsignore</em> é <strong>título honorífico</strong> concedido pelo Papa a padres distintos. Não é ordenação nem cargo — é honra pessoal.</p>
          <p>Três graus: Capelão de Sua Santidade, Prelado de Honra e Protonotário Apostólico. Em 2013, Francisco restringiu a concessão apenas a padres com mais de 65 anos.</p>`,
        },
      ],
    },
    {
      id: "primazias",
      titulo: "Primazias e Títulos Históricos",
      subtitulo: "Dignidades de honra herdadas da tradição",
      icone: "👑",
      cor: "#6b5a3a",
      maxWidth: "780px",
      cargos: [
        {
          nome: "Arcebispo Primaz",
          subtitulo: "Primeiro entre os arcebispos de uma nação",
          tags: ["Primazia de Honra", "Tradição Nacional", "Sem Jurisdição"],
          corpo: `<p>Título histórico do arcebispo que detém <strong>primazia de honra</strong> sobre todos os bispos de um país. Reconhece a primeira sé evangelizada no território.</p>
          <p>No Brasil, o Arcebispo de Salvador é Primaz. Em Portugal, o de Braga é Primaz das Espanhas. A primazia é <strong>de honra, não de jurisdição</strong>.</p>`,
        },
        {
          nome: "Arcebispo Titular",
          subtitulo: "Bispo sem diocese residencial",
          tags: ["Sé Titular", "Nuncios", "Cúria Romana"],
          corpo: `<p>Recebeu consagração episcopal mas não governa diocese real. Nomeado para uma <strong>sé titular</strong> — diocese histórica extinta.</p>
          <p>São arcebispos titulares: nuncios apostólicos, secretários de dicastérios, bispos auxiliares de grandes arquidioceses.</p>`,
        },
        {
          nome: "Arquidiácono",
          subtitulo: "Cargo histórico — extinto na prática",
          tags: ["Medieval", "Extinto", "Influência Histórica"],
          corpo: `<p>Na Igreja medieval, figura de enorme poder — supervisionava diáconos e administrava territórios em nome do bispo. Em certas épocas rivalizou com os próprios bispos.</p>
          <p>Extinto gradualmente com o crescimento do poder episcopal e criação dos vigários gerais. Hoje só existe em igrejas anglicanas e ortodoxas.</p>`,
        },
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════
   SEÇÃO 3 — VIDA CONSAGRADA
══════════════════════════════════════════════════════ */
const vidaConsagrada: Secao = {
  id: "consagrada", numero: "III",
  titulo: "Vida Consagrada",
  subtitulo: "Vocações de entrega radical a Deus",
  descricao:
    "A vida consagrada não é um 'terceiro grau' entre clero e leigos — é uma forma de seguimento radical de Cristo através dos conselhos evangélicos (pobreza, castidade, obediência). Inclui monges, freiras, irmãos leigos, virgens consagradas e eremitas.",
  tipo: "grid",
  icone: "✨",
  cor: "#5a3a6a",
  niveis: [
    {
      id: "contemplativos",
      titulo: "Vida Contemplativa",
      subtitulo: "Clausura, silêncio e oração contínua",
      icone: "🕊️",
      cor: "#5a3a6a",
      maxWidth: "780px",
      cargos: [
        {
          nome: "Monge / Monja",
          subtitulo: "Vida em mosteiro — Ora et Labora",
          tags: [
            "Clausura",
            "Liturgia das Horas",
            "Estabilidade",
            "São Bento",
          ],
          corpo: `<p>Vivem em <strong>comunidade estável e fechada</strong> (mosteiro), dedicados à oração litúrgica coletiva, trabalho manual e estudo sagrado. Votos de pobreza, castidade, obediência — e, na tradição beneditina, <strong>estabilidade</strong> (permanência no mesmo mosteiro).</p>
          <p>A clausura papal impede saídas e limita visitas. Mosteiros são ilhas de contemplação autossuficientes.</p>`,
        },
        {
          nome: "Abade / Prior",
          subtitulo: "Superior de comunidade monástica",
          tags: [
            "Eleito pelos Monges",
            "Insígnias Episcopais",
            "Pai da Comunidade",
          ],
          corpo: `<p>O <strong>Abade</strong> (do aramaico <em>Abba</em>, "pai") governa uma Abadia — mosteiro autônomo. Eleito pelos monges e confirmado pelo bispo ou Papa. Usa mitra, báculo e anel mesmo sem ser bispo.</p>
          <p>O <strong>Prior</strong> governa um Priorado (mosteiro menor ou dependente). O Prior Claustral é segundo em comando da Abadia.</p>`,
        },
        {
          nome: "Eremita / Anacoreta",
          subtitulo: "Solidão radical dedicada à oração contínua",
          tags: [
            "Cânon 603",
            "Forma Mais Antiga",
            "Santo Antão do Deserto",
          ],
          corpo: `<p>Vive a consagração fora de qualquer comunidade, em <strong>solidão radical</strong> dedicada à oração contínua. Pode ser padre ou leigo. Faz profissão nas mãos do bispo diocesano.</p>
          <p>Forma mais antiga de vida consagrada — São Paulo de Tebas e Santo Antão do Deserto são os pais desta tradição.</p>`,
        },
      ],
    },
    {
      id: "ativos",
      titulo: "Vida Apostólica e Ativa",
      subtitulo: "Consagrados a serviço do mundo",
      icone: "🌍",
      cor: "#4a3a6a",
      maxWidth: "780px",
      cargos: [
        {
          nome: "Freira / Irmã Religiosa",
          subtitulo: "Vida consagrada feminina — contemplativa ou ativa",
          tags: ["Votos Perpétuos", "Congregações Femininas", "Apostolado"],
          corpo: `<p>Distinção técnica: <strong>Freira</strong> = contemplativa com votos solenes em clausura. <strong>Irmã</strong> = vida ativa (educação, saúde, missão) com votos simples. Na linguagem popular "freira" abrange ambas.</p>
          <p>Vivem em comunidade sob uma Superiora. Dezenas de congregações com espiritualidades e missões distintas.</p>`,
        },
        {
          nome: "Irmão Leigo",
          subtitulo: "Religioso não ordenado em instituto masculino",
          tags: ["Sem Ordenação", "Votos Plenos", "Testemunho de Vida"],
          corpo: `<p>Membro de instituto religioso masculino com votos plenos mas <strong>sem ordens sacras</strong>. Não é padre nem diácono — é consagrado que serve pelo testemunho e apostolado.</p>
          <p>Em ordens como franciscanos, dominicanos ou jesuítas, irmãos leigos exercem ensino, saúde, administração e missões.</p>`,
        },
        {
          nome: "Virgem Consagrada",
          subtitulo: "Leiga consagrada pelo bispo — vive no mundo",
          tags: ["Cânon 604", "No Século", "Esposa de Cristo"],
          corpo: `<p>Faz <strong>profissão pública de virgindade</strong> nas mãos do bispo diocesano. Não entra em mosteiro, não usa hábito, permanece no mundo — mas totalmente dedicada a Deus.</p>
          <p>Forma de vida consagrada de origem muito antiga, prevista no Código de Direito Canônico (c. 604). Vinculada ao bispo e à diocese local.</p>`,
        },
        {
          nome: "Oblato / Terceiro Secular",
          subtitulo: "Leigo associado espiritualmente a uma ordem",
          tags: [
            "Terceira Ordem",
            "Espiritualidade Partilhada",
            "Sem Votos Plenos",
          ],
          corpo: `<p>Oblatos (beneditinos), Terciários (franciscanos, dominicanos, carmelitas), Cooperadores (salesianos) — <strong>leigos que participam da espiritualidade de uma ordem</strong> sem votos plenos nem vida comunitária.</p>
          <p>Fazem promessa de seguir a espiritualidade da ordem na vida cotidiana. São associados espirituais, não membros plenos.</p>`,
        },
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════
   SEÇÃO 4 — FORMAÇÃO (CAMINHO AO SACRAMENTO)
══════════════════════════════════════════════════════ */
const formacao: Secao = {
  id: "formacao", numero: "IV",
  titulo: "Formação e Seminário",
  subtitulo: "O caminho até a ordenação",
  descricao:
    "O sacramento da Ordem não é conferido de improviso. Exige anos de formação humana, espiritual, intelectual e pastoral — vividos no Seminário ou em programas diaconais. Cada etapa prepara o candidato para a entrega total.",
  tipo: "lista",
  icone: "🎓",
  cor: "#5a6a3a",
  niveis: [
    {
      id: "seminario",
      titulo: "Etapas da Formação",
      subtitulo: "Do ingresso à ordenação",
      icone: "📚",
      cor: "#5a6a3a",
      maxWidth: "780px",
      cargos: [
        {
          nome: "Propedêutico",
          subtitulo: "Ano introdutório de discernimento",
          tags: [
            "Ratio Fundamentalis 2016",
            "Discernimento Inicial",
            "Vida Comunitária",
          ],
          corpo: `<p>Desde a <em>Ratio Fundamentalis</em> de 2016, muitas dioceses adotaram o <strong>ano propedêutico</strong> — período introdutório antes da filosofia, dedicado ao discernimento vocacional, amadurecimento humano e iniciação à vida comunitária.</p>`,
        },
        {
          nome: "Seminarista Filosófico",
          subtitulo: "Primeiros anos do Seminário Maior",
          tags: ["Filosofia", "Formação Humana", "Discernimento"],
          corpo: `<p>Anos dedicados à <strong>formação filosófica</strong> — lógica, metafísica, ética, epistemologia, história da filosofia. Período de aprofundamento intelectual e discernimento.</p>
          <p>Vida em comunidade com horário rigoroso de oração, estudo e trabalho pastoral, sob orientação de um padre formador.</p>`,
        },
        {
          nome: "Seminarista Teológico",
          subtitulo: "Anos de Teologia e ministérios instituídos",
          tags: [
            "Teologia",
            "Estágio Paroquial",
            "Leitorado e Acolitado",
          ],
          corpo: `<p>Estudo de <strong>teologia dogmática, moral, bíblica, litúrgica, patrística e direito canônico</strong>. Nesse período recebe a instituição como Leitor e Acólito.</p>
          <p>Estágios paroquiais nos fins de semana. No último ano é ordenado diácono transitório.</p>`,
        },
        {
          nome: "Candidato ao Diaconado Permanente",
          subtitulo: "Formação específica para o diaconado — 3 a 5 anos",
          tags: [
            "Não Residencial",
            "Com a Esposa",
            "Teologia e Pastoral",
          ],
          corpo: `<p>Programa próprio de 3 a 5 anos em regime não residencial. Candidatos continuam trabalhando e vivendo com suas famílias.</p>
          <p>O candidato casado participa da formação <strong>junto com a esposa</strong>, cuja aceitação é condição para a ordenação.</p>`,
        },
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════
   SEÇÃO 5 — MINISTÉRIOS INSTITUÍDOS E SERVIÇOS
══════════════════════════════════════════════════════ */
const ministerios: Secao = {
  id: "ministerios", numero: "V",
  titulo: "Ministérios e Serviços Litúrgicos",
  subtitulo: "Funções dos fiéis na liturgia e na missão",
  descricao:
    "A liturgia é ação de todo o Povo de Deus, não só do clero. Diversos ministérios — uns instituídos formalmente pelo bispo, outros exercidos de fato por qualquer batizado — expressam a participação ativa dos fiéis na vida da Igreja.",
  tipo: "grid",
  icone: "📜",
  cor: "#3a5a4a",
  niveis: [
    {
      id: "instituidos",
      titulo: "Ministérios Instituídos",
      subtitulo: "Conferidos por rito formal do bispo",
      icone: "📜",
      cor: "#3a5a4a",
      maxWidth: "780px",
      cargos: [
        {
          nome: "Leitor (Lector)",
          subtitulo: "Ministro instituído da Palavra",
          tags: [
            "Rito de Instituição",
            "Aberto a Mulheres (2021)",
            "Ministério Estável",
          ],
          corpo: `<p>Instituído pelo bispo para <strong>proclamar a Palavra de Deus</strong> nas celebrações. Desde 2021, aberto também às mulheres.</p>
          <p>Diferente do leitor ocasional — recebe rito especial e é reconhecido como ministro estável. Passo importante na formação dos seminaristas.</p>`,
        },
        {
          nome: "Acólito",
          subtitulo: "Ministro instituído do altar",
          tags: [
            "Eucaristia",
            "Exposição do Santíssimo",
            "Aberto a Mulheres (2021)",
          ],
          corpo: `<p><strong>Ministro estável do altar</strong> — auxilia o sacerdote, distribui a Comunhão, expõe o Santíssimo para adoração. Diferente do coroinha ou do ministro extraordinário.</p>
          <p>Recebe rito formal de instituição. Desde 2021, aberto às mulheres.</p>`,
        },
        {
          nome: "Catequista Instituído",
          subtitulo: "Ministério criado por Francisco em 2021",
          tags: [
            "Comunidades Missionárias",
            "Celebração Dominical",
            "Compromisso Estável",
          ],
          corpo: `<p>Criado em 2021 para <strong>comunidades missionárias com escassez de sacerdotes</strong>. Não é voluntário — recebe rito formal e assume compromisso estável.</p>
          <p>Pode liderar celebrações dominicais sem sacerdote, presidir funerais e ser responsável pelo anúncio do Evangelho em comunidades isoladas.</p>`,
        },
      ],
    },
    {
      id: "servicos",
      titulo: "Serviços Litúrgicos",
      subtitulo: "Funções exercidas por qualquer fiel batizado",
      icone: "🙏",
      cor: "#4a6a5a",
      maxWidth: "780px",
      cargos: [
        {
          nome: "Ministro Extraordinário da Eucaristia",
          subtitulo: "Leigo autorizado a distribuir a Comunhão",
          tags: [
            "Extraordinário",
            "Aprovação Diocesana",
            "Visita a Enfermos",
          ],
          corpo: `<p>Fiel leigo autorizado pelo bispo a distribuir a Comunhão quando há grande número de fiéis ou em visita a doentes. É <strong>extraordinário</strong> — não substitui o sacerdote, complementa.</p>`,
        },
        {
          nome: "Coroinha",
          subtitulo: "Criança ou jovem que serve ao altar",
          tags: [
            "Tradição Milenar",
            "Vocação",
            "São João Paulo II foi coroinha",
          ],
          corpo: `<p>Serve ao altar auxiliando o sacerdote: cruz processional, turíbulo, círios, sino da consagração. Primeiro contato de muitas crianças com o serviço litúrgico.</p>
          <p>Historicamente, caminho de entrada para o seminário. Muitos papas, bispos e santos foram coroinhas.</p>`,
        },
        {
          nome: "Cantor / Salmista",
          subtitulo: "Ministro da música litúrgica",
          tags: [
            "Salmo Responsorial",
            "Sacrosanctum Concilium",
            "Música Sacra",
          ],
          corpo: `<p>Proclama o <strong>Salmo Responsorial</strong> — função litúrgica com raízes nos levitas do Templo. A música sagrada é parte integral da liturgia, não decoração.</p>
          <p>O cantor não "anima" a missa — ele a <strong>celebra</strong> musicalmente.</p>`,
        },
        {
          nome: "Leitor Ocasional",
          subtitulo: "Fiel que proclama as leituras",
          tags: [
            "Qualquer Batizado",
            "Formação Recomendada",
            "Serviço à Assembleia",
          ],
          corpo: `<p>Qualquer fiel batizado e preparado pode proclamar a Primeira e Segunda Leitura. Diferente do Leitor Instituído — sem rito formal, mas função litúrgica real.</p>`,
        },
        {
          nome: "Acolhedor",
          subtitulo: "Ministério de hospitalidade",
          tags: [
            "Primeira Impressão",
            "Hospitalidade",
            "Frequentemente Subestimado",
          ],
          corpo: `<p>Receber os fiéis na entrada, distribuir folhetos, orientar visitantes. Ministério de enorme importância pastoral frequentemente subestimado.</p>
          <p>Em muitas comunidades é o <strong>primeiro contato</strong> de alguém com a Igreja. Pode fazer a diferença entre alguém que volta ou nunca mais aparece.</p>`,
        },
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════
   SEÇÃO 6 — FIÉIS LEIGOS
══════════════════════════════════════════════════════ */
const fieisLeigos: Secao = {
  id: "leigos", numero: "VI",
  titulo: "Vocação dos Fiéis Leigos",
  subtitulo: "A base e o coração da Igreja no mundo",
  descricao:
    "O leigo não é um cristão de segunda categoria nem um 'padre frustrado'. O Concílio Vaticano II reafirmou: a vocação laical é santificar o mundo de dentro — família, trabalho, política, cultura, ciência. Todo batizado participa do sacerdócio comum dos fiéis.",
  tipo: "grid",
  icone: "✟",
  cor: "#2a4a5a",
  niveis: [
    {
      id: "vocacoes_laicais",
      titulo: "Vocações e Missões dos Leigos",
      subtitulo: "Cada batizado tem uma missão",
      icone: "✟",
      cor: "#2a4a5a",
      maxWidth: "780px",
      cargos: [
        {
          nome: "Fiel Batizado",
          subtitulo: "Todo membro da Igreja pelo Batismo",
          tags: ["Sacerdócio Comum", "Tria Munera", "Dignidade Batismal"],
          corpo: `<p>O Batismo é, em si mesmo, uma consagração. O batizado participa do <strong>sacerdócio comum dos fiéis</strong>, profetiza pela fé que professa e governa servindo ao mundo.</p>
          <p>O Vaticano II reafirmou: a vocação do leigo é <strong>santificar o mundo de dentro</strong> — família, trabalho, política, cultura, ciência.</p>`,
        },
        {
          nome: "Pai e Mãe de Família",
          subtitulo: "Igreja doméstica — primeira escola da fé",
          tags: [
            "Ecclesia Domestica",
            "Matrimônio Sacramento",
            "Educação da Fé",
          ],
          corpo: `<p>A família é a <strong>"Igreja doméstica"</strong>. O lar cristão é o primeiro lugar onde a fé é transmitida e testemunhada. Os pais são os primeiros catequistas.</p>
          <p>O sacramento do Matrimônio confere a missão de ser sinal do amor de Cristo pela Igreja. Vocação específica, não inferior à do padre ou religioso.</p>`,
        },
        {
          nome: "Catequista Voluntário",
          subtitulo: "Leigo que transmite a fé às novas gerações",
          tags: ["Testemunho", "Mistagogia", "Pilar Invisível da Igreja"],
          corpo: `<p>Pilar invisível da Igreja — o leigo que doa tempo e fé para ensinar crianças, jovens e adultos. Catequese não é instrução; é <strong>mistagogia</strong> — introdução ao mistério de Deus.</p>
          <p>O Diretório para a Catequese (2020) afirma: o catequista é antes de tudo <strong>testemunha</strong>. Nenhum manual substitui o testemunho pessoal.</p>`,
        },
        {
          nome: "Membro de Movimento Eclesial",
          subtitulo: "Leigo em comunidade de espiritualidade própria",
          tags: [
            "Opus Dei",
            "Focolare",
            "Neocatecumenato",
            "Renovação Carismática",
          ],
          corpo: `<p>Movimentos eclesiais renovaram a vida dos leigos no século XX: Opus Dei, Comunhão e Libertação, Focolare, Neocatecumenato, Renovação Carismática, Schönstatt, Legião de Maria.</p>
          <p>Cada um tem espiritualidade, carisma e missão próprios. Francisco insiste na <strong>sinodalidade</strong> entre todos eles e com as paróquias.</p>`,
        },
        {
          nome: "Jovem em Discernimento",
          subtitulo: "Buscando a vocação pessoal",
          tags: ["Vocação", "Espírito Santo", "Liberdade Interior"],
          corpo: `<p>O discernimento vocacional é processo, não momento. Todo jovem cristão é chamado a perguntar: <strong>Para quê Deus me criou?</strong></p>
          <p>Sacerdócio, vida religiosa, matrimônio, vida consagrada no século — vocações igualmente dignas, cada uma com sua beleza e exigência.</p>`,
        },
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════
   EXPORTAÇÃO
══════════════════════════════════════════════════════ */
export const secoes: Secao[] = [
  hierarquiaSacramental,
  governoJurisdicao,
  vidaConsagrada,
  formacao,
  ministerios,
  fieisLeigos,
];

export const coresLegendaPiramide = [
  { cor: "#8b1a1a", label: "Papado" },
  { cor: "#7a2020", label: "Episcopado" },
  { cor: "#6b3a2a", label: "Presbiterado" },
  { cor: "#3a4a6a", label: "Diaconado" },
];