// app/estudos/concilios/constantinopla-2/_data/sessoes.ts

export interface DocumentoLido {
  titulo: string;
  origem: string;
  conteudo: string;
}

export interface EventoSessao {
  titulo: string;
  descricao: string;
  desdobramento: string;
}

export interface SessaoConciliar {
  numero: number;
  fase: string;
  data: string;
  local: string;
  titulo: string;
  presidente: string;
  clima: string;
  resumo: string;
  eventos: EventoSessao[];
  resultado: string;
  documentosLidos: DocumentoLido[];
  debates: string;
  decisoes: string;
  implicacoes: string;
}

export interface Sessoes {
  introducao: string;
  lista: SessaoConciliar[];
  notaFinal: string;
}

export const resumoSessoes =
  'O Segundo Concílio de Constantinopla reuniu-se em oito sessões plenárias entre 5 de maio e 2 de junho de 553, no Secretarium da Grande Igreja de Hagia Sophia, sob a presidência formal do patriarca Eutíquio de Constantinopla e a supervisão efetiva do imperador Justiniano I. A ausência do Papa Vigílio conferiu aos trabalhos um caráter marcadamente oriental: dos 165 bispos signatários da sentença final, apenas 6 eram ocidentais. As sessões seguiram um roteiro preparado pela chancelaria imperial, destinado a demonstrar que os Três Capítulos eram incompatíveis com a fé de Calcedônia e com os Doze Capítulos de Cirilo de Alexandria.';

export const linhaDoTempoSessoes = [
  { data: '5 de maio de 553', evento: 'Primeira sessão — Abertura solene e leitura da carta imperial de Justiniano' },
  { data: '8 de maio de 553', evento: 'Segunda sessão — Recusa definitiva de Vigílio em presidir o concílio' },
  { data: '9 de maio de 553', evento: 'Terceira sessão — Início do exame das blasfêmias de Teodoro de Mopsuéstia' },
  { data: '12 de maio de 553', evento: 'Quarta sessão — Condenação preliminar de Teodoro de Mopsuéstia' },
  { data: '17 de maio de 553', evento: 'Quinta sessão — Exame dos escritos de Teodoreto de Ciro contra Cirilo' },
  { data: '19 de maio de 553', evento: 'Sexta sessão — Condenação da Epístola de Ibas de Edessa a Maris' },
  { data: '26 de maio de 553', evento: 'Sétima sessão — Leitura das cartas secretas de Vigílio e remoção de seu nome dos dípticos' },
  { data: '2 de junho de 553', evento: 'Oitava sessão — Sentença Final: proclamação dos 14 Anátemas e encerramento' },
];

export const sessoes: Sessoes = {
  introducao:
    "O Segundo Concílio de Constantinopla reuniu-se em oito sessões plenárias entre 5 de maio e 2 de junho de 553, no Secretarium (skeuophylakion) da Grande Igreja de Hagia Sophia, sob a presidência formal do patriarca Eutíquio de Constantinopla e a supervisão efetiva do imperador Justiniano I, que embora não comparecesse pessoalmente às sessões, dirigia os trabalhos por meio de comissários imperiais (basilikoi) e de cartas lidas em plenário. A ausência do Papa Vigílio — que recusou o convite para presidir o concílio e permaneceu confinado no Palácio de Placídia — conferiu aos trabalhos um caráter marcadamente oriental: dos 151 bispos signatários da sentença final, apenas 6 eram ocidentais, todos da África bizantina recém-reconquistada. As sessões seguiram um roteiro meticulosamente preparado pela chancelaria imperial, destinado a demonstrar, por meio da leitura exaustiva de fontes patrísticas e heresiográficas, que os Três Capítulos eram incompatíveis com a fé de Calcedônia e com os Doze Capítulos de Cirilo de Alexandria.",

  lista: [
    {
      numero: 1,
      fase: "Sessão 1",
      data: "5 de maio de 553",
      local: "Secretarium da Hagia Sophia, Constantinopla",
      titulo: "Abertura solene e leitura da carta imperial de Justiniano",
      presidente: "Eutíquio de Constantinopla",
      clima: "Protocolar e cerimonial, com aclamações unânimes e ausência notável de Vigílio",
      resumo:
        "A primeira sessão foi essencialmente protocolar e programática. O patriarca Eutíquio, ladeado pelos patriarcas Apolinário de Alexandria, Domnino de Antioquia e Eustóquio de Jerusalém (os quatro patriarcas da pentarquia presentes, à exceção de Roma), abriu os trabalhos com uma profissão de fé trinitária e cristológica. Em seguida, os comissários imperiais — o quaestor Constantino e o magister officiorum Pedro — leram a longa carta de Justiniano ao concílio, que funcionava como verdadeiro programa teológico e roteiro processual. A carta imperial recapitulava toda a controvérsia desde o Édito dos Três Capítulos (544/545), reafirmava a condenação das proposições nestorianas e origenistas, e ordenava ao concílio que examinasse e julgasse os escritos de Teodoro de Mopsuéstia, Teodoreto de Ciro e Ibas de Edessa à luz da fé calcedonense e ciriliana. Justiniano insistia que a condenação dos Três Capítulos não contradizia Calcedônia, mas a 'purificava' de interpretações ambíguas que os miáfisitas exploravam para rejeitar o concílio de 451.",
      eventos: [
        { titulo: "Profissão de fé de Eutíquio", descricao: "Declaração trinitária e cristológica alinhada com o neocalcedonianismo.", desdobramento: "A assembleia aclamou a profissão com as fórmulas rituais 'Assim cremos!' e 'Assim confessamos!'." },
        { titulo: "Leitura da carta imperial de Justiniano", descricao: "O imperador expõe a gênese da controvérsia e ordena o exame dos Três Capítulos.", desdobramento: "A carta foi aceita como programa de trabalho e base jurídica para as deliberações." },
        { titulo: "Constituição da comissão de exame", descricao: "Foi constituída uma comissão de doze bispos e quatro teólogos para preparar a análise documental.", desdobramento: "A comissão iniciou imediatamente o trabalho de compilação dos dossiês sobre os Três Capítulos." },
      ],
      resultado:
        "O concílio aceitou formalmente a carta imperial como programa de trabalho e constituiu uma comissão de exame documental (exetastai) composta por doze bispos e quatro teólogos para preparar a análise dos escritos de Teodoro de Mopsuéstia. Ficou decidido que a segunda sessão trataria da questão da participação papal antes de iniciar o exame de mérito dos Três Capítulos.",
      documentosLidos: [
        {
          titulo: "Profissão de fé do patriarca Eutíquio",
          origem: "Patriarcado de Constantinopla",
          conteudo:
            "Declaração trinitária e cristológica alinhada com o neocalcedonianismo, reafirmando a fórmula 'uma das pessoas da Trindade padeceu na carne' (heis tēs Triados peponten sarki) e a compatibilidade entre o Tomo de Leão e os Doze Capítulos de Cirilo.",
        },
        {
          titulo: "Carta imperial de Justiniano ao Santo Concílio",
          origem: "Chancelaria do Sacrum Palatium, Constantinopla",
          conteudo:
            "Extenso documento (c. 4.000 palavras no original grego) no qual o imperador expõe a gênese da controvérsia, cita extensamente os Padres Capadócios e Cirilo de Alexandria, e ordena o exame dos Três Capítulos. A carta inclui a célebre declaração de que 'a fé dos quatro concílios ecumênicos é uma e indivisível' e que qualquer escrito contrário a ela, independentemente de seu autor, deve ser anatematizado.",
        },
        {
          titulo: "Édito imperial contra os Três Capítulos (544/545)",
          origem: "Sacrum Palatium",
          conteudo:
            "Releitura integral do édito original que iniciara a controvérsia, agora apresentado como base jurídica e teológica para as deliberações conciliares.",
        },
      ],
      debates:
        "Não houve debate substantivo na primeira sessão. Os bispos presentes aclamaram unanimemente a carta imperial com as fórmulas rituais 'Assim cremos!', 'Assim confessamos!' e 'Viva o imperador ortodoxo!' (Eis polla etē tō orthodoxō basilei!). A única nota dissonante foi a ausência notável de Vigílio, cuja recusa em comparecer já era conhecida e foi mencionada com pesar diplomático por Eutíquio. Alguns bispos ilírios presentes manifestaram desconforto com a rapidez dos procedimentos, mas foram silenciados pela maioria oriental.",
      decisoes:
        "O concílio aceitou formalmente a carta imperial como programa de trabalho e constituiu uma comissão de exame documental (exetastai) composta por doze bispos e quatro teólogos para preparar a análise dos escritos de Teodoro de Mopsuéstia. Ficou decidido que a segunda sessão trataria da questão da participação papal antes de iniciar o exame de mérito dos Três Capítulos.",
      implicacoes:
        "A primeira sessão estabeleceu o tom teopolítico de todo o concílio: a ortodoxia seria definida pela convergência entre a vontade imperial e o consenso episcopal oriental, com a Sé de Roma reduzida a espectadora relutante. A leitura da carta de Justiniano como documento normativo equiparava de facto a autoridade imperial à autoridade conciliar, um precedente que os canonistas ocidentais posteriores contestariam vigorosamente.",
    },
    {
      numero: 2,
      fase: "Sessão 2",
      data: "8 de maio de 553",
      local: "Secretarium da Hagia Sophia, Constantinopla",
      titulo: "A questão da participação papal e a recusa definitiva de Vigílio",
      presidente: "Eutíquio de Constantinopla",
      clima: "Tenso e acalorado, com murmúrios de indignação entre os bispos orientais",
      resumo:
        "A segunda sessão foi inteiramente dedicada à espinhosa questão da ausência de Vigílio. O patriarca Eutíquio relatou que, nos dias anteriores, uma delegação composta por três patriarcas orientais e dezesseis bispos havia visitado o papa no Palácio de Placídia para convidá-lo formalmente a presidir os trabalhos. Vigílio recusou, alegando que o concílio era desproporcionalmente oriental e que a presença de apenas seis bispos ocidentais (africanos) tornava impossível uma deliberação verdadeiramente ecumênica. O papa propôs, como alternativa, que o exame dos Três Capítulos fosse realizado em uma comissão separada (tractatus) sob sua presidência, com representação paritária de latinos e gregos — proposta que Justiniano rejeitou por considerá-la dilatória. A sessão leu então as atas das três visitas da delegação conciliar ao papa, documentando cada recusa.",
      documentosLidos: [
        {
          titulo: "Relato da primeira visita da delegação a Vigílio (6 de maio)",
          origem: "Delegação patriarcal",
          conteudo:
            "Registro da audiência no Palácio de Placídia em que Eutíquio, Apolinário e Domnino convidaram Vigílio a comparecer à Hagia Sophia. O papa respondeu que 'não poderia participar de um concílio no qual os bispos do Ocidente, cujas sés foram fundadas por apóstolos, estão quase totalmente ausentes'.",
        },
        {
          titulo: "Relato da segunda visita (7 de maio)",
          origem: "Delegação patriarcal ampliada",
          conteudo:
            "Segunda tentativa, agora com dezesseis bispos adicionais. Vigílio reiterou sua recusa e apresentou por escrito a proposta do tractatus separado. O documento papal foi lido em plenário e provocou murmúrios de indignação entre os bispos orientais.",
        },
        {
          titulo: "Relato da terceira visita (8 de maio, manhã)",
          origem: "Comissários imperiais e delegação conciliar",
          conteudo:
            "Última tentativa, acompanhada pelos comissários imperiais Constantino e Pedro. Vigílio manteve sua posição e declarou que 'a Sé Apostólica não pode ser coagida por multidões'. A delegação retornou ao concílio e declarou esgotadas as vias de negociação.",
        },
      ],
      debates:
        "O debate foi acalorado. O bispo de Amaseia, Estêvão, argumentou que 'a ausência de um membro não paralisa o corpo da Igreja quando a cabeça — Cristo — está presente'. O patriarca Eutíquio citou o precedente do Concílio de Éfeso (431), que prosseguira sem a delegação romana de Celestino I durante as sessões iniciais. Vozes mais moderadas, como a do bispo de Cízico, sugeriram um novo adiamento, mas foram sobrepujadas pela maioria, que votou por prosseguir os trabalhos sem o papa. A decisão foi fundamentada no princípio de que a autoridade de um concílio ecumênico deriva da convocação imperial e da presença da maioria do episcopado, não da participação obrigatória do bispo de Roma.",
      eventos: [
        { titulo: "Relato das três visitas da delegação a Vigílio", descricao: "Três tentativas de convencer o papa a presidir o concílio, todas recusadas.", desdobramento: "Vigílio propôs um tractatus paritário, que foi rejeitado por Justiniano." },
        { titulo: "Debate sobre a ausência papal", descricao: "O bispo Estêvão de Amaseia argumentou que a ausência de um membro não paralisa o corpo da Igreja.", desdobramento: "O precedente do Concílio de Éfeso (431) foi invocado para justificar a continuidade dos trabalhos." },
        { titulo: "Decisão de prosseguir sem o papa", descricao: "O concílio votou por prosseguir os trabalhos sem a presença de Vigílio.", desdobramento: "A decisão foi comunicada a Justiniano, que a ratificou imediatamente." },
      ],
      resultado:
        "O concílio decidiu, por aclamação quase unânime, prosseguir os trabalhos sem a presença de Vigílio, registrando formalmente que 'a porta permanece aberta para o santíssimo papa de Roma, caso deseje juntar-se a nós no Espírito Santo'. A decisão foi comunicada a Justiniano, que a ratificou imediatamente por meio de uma breve nota imperial (sacra) lida ao final da sessão.",
      implicacoes:
        "A segunda sessão consumou a ruptura de facto entre o papado e o concílio, criando a situação canônica inédita de um concílio ecumênico operando contra a vontade expressa do bispo de Roma. Essa circunstância seria invocada durante séculos tanto pelos defensores do conciliarismo (que viam em Constantinopla II a prova de que a Igreja pode funcionar sem o papa) quanto pelos ultramontanos (que argumentavam que o concílio só se tornou verdadeiramente ecumênico após a ratificação posterior de Vigílio no Constitutum II de 554).",
    },
    {
      numero: 3,
      fase: "Sessão 3",
      data: "9 de maio de 553",
      local: "Secretarium da Hagia Sophia, Constantinopla",
      titulo: "Início do exame das blasfêmias de Teodoro de Mopsuéstia — Parte I",
      presidente: "Eutíquio de Constantinopla",
      clima: "Acusatório e inquisitorial, com confronto entre as tradições antioquena e ciriliana",
      resumo:
        "A terceira sessão marcou o início do exame substantivo do primeiro e mais importante dos Três Capítulos: os escritos cristológicos de Teodoro de Mopsuéstia (c. 350–428), o 'Pai do Nestorianismo' segundo a tradição ciriliana. A sessão foi dominada pela leitura metódica de trechos selecionados das obras de Teodoro, organizados tematicamente pela comissão de exetastai para demonstrar a incompatibilidade de sua cristologia com a fé de Calcedônia. Os textos foram confrontados com passagens paralelas dos Doze Capítulos de Cirilo de Alexandria e do Tomo de Leão, numa estrutura de acusação que lembrava um processo judicial romano (cognitio extraordinaria).",
      documentosLidos: [
        {
          titulo: "Excertos do Comentário de Teodoro ao Evangelho de João",
          origem: "Teodoro de Mopsuéstia (c. 390–400)",
          conteudo:
            "Passagens nas quais Teodoro distingue radicalmente entre o Logos divino e o 'homem assumido' (ho proslephtheis anthrōpos), utilizando linguagem que os acusadores interpretaram como nestoriana: 'O Logos habitou no homem Jesus como em um templo' e 'Aquele que nasceu de Maria não é o Logos por natureza, mas por graça de união'.",
        },
        {
          titulo: "Excertos do Tratado Sobre a Encarnação de Teodoro",
          origem: "Teodoro de Mopsuéstia (Peri tēs enanthrōpēseōs)",
          conteudo:
            "Fragmentos do tratado perdido (preservados em citações de Facundo de Hermiane e Leôncio de Bizâncio) nos quais Teodoro rejeita o título Theotokos ('Mãe de Deus') para Maria, preferindo Christotokos ('Mãe de Cristo'), e argumenta que 'o Logos não pode ser sujeito a sofrimento, pois a natureza divina é impassível por essência'.",
        },
        {
          titulo: "Doze Capítulos de Cirilo de Alexandria (430)",
          origem: "Cirilo de Alexandria, Terceira Carta a Nestório",
          conteudo:
            "Leitura integral dos Doze Anátemas cirilianos como régua dogmática para avaliar os textos de Teodoro. Particular ênfase no Capítulo IV ('Se alguém divide as expressões dos Evangelhos entre duas pessoas ou hipóstases...') e no Capítulo XII ('Se alguém não confessa que o Logos de Deus padeceu na carne...').",
        },
      ],
      debates:
        "O debate centrou-se na questão hermenêutica de como interpretar a linguagem de Teodoro. Os bispos antioquenos presentes — herdeiros da tradição exegetica de Teodoro — argumentaram que suas expressões deviam ser lidas no contexto da polêmica contra Apolinário de Laodiceia, e que a distinção entre as duas naturezas era ortodoxa quando compreendida corretamente. A maioria ciriliana, liderada pelo patriarca Eutíquio, contra-argumentou que a linguagem de Teodoro era objetivamente nestoriana independentemente da intenção do autor, pois 'as palavras têm significado próprio além da mente de quem as profere' (kata lexin, ou kata dianoian). O bispo de Amida, João, produziu uma comparação sinóptica entre Teodoro e Nestório que provocou exclamações de horror na assembleia.",
      eventos: [
        { titulo: "Leitura dos escritos de Teodoro de Mopsuéstia", descricao: "Passagens do Comentário ao João e do Tratado Sobre a Encarnação foram lidas em plenário.", desdobramento: "As expressões nestorianas de Teodoro provocaram exclamações de horror na assembleia." },
        { titulo: "Leitura dos Doze Capítulos de Cirilo", descricao: "Os Doze Anátemas cirilianos foram lidos como régua dogmática para avaliar os textos de Teodoro.", desdobramento: "A maioria concluiu que os escritos de Teodoro eram objetivamente incompatíveis com a fé ciriliana." },
        { titulo: "Debate sobre a hermenêutica dos textos", descricao: "Bispos antioquenos defenderam a leitura contextualista; a maioria ciriliana insistiu na ortodoxia objetiva.", desdobramento: "O princípio kata lexin (pela letra) prevaleceu sobre kata dianoian (pela intenção)." },
      ],
      resultado:
        "O concílio decidiu, por maioria esmagadora, que os escritos de Teodoro de Mopsuéstia continham proposições heréticas incompatíveis com a fé de Calcedônia e com os Doze Capítulos de Cirilo. A condenação formal foi adiada para a sessão seguinte, quando o exame documental seria completado. Os bispos antioquenos que defenderam Teodoro foram advertidos de que a persistência na defesa de textos heréticos poderia resultar em sanções canônicas.",
      implicacoes:
        "A terceira sessão sinalizou que o concílio não se limitaria a condenar proposições abstratas (como Vigílio propunha no Constitutum I), mas procederia à condenação nominal e pessoal dos autores, incluindo os mortos. A rejeição da defesa contextualista dos antioquenos estabeleceu um precedente hermenêutico de longo alcance: a ortodoxia de um texto seria julgada por seu conteúdo objetivo (kata lexin), não pela intenção subjetiva do autor (kata dianoian).",
    },
    {
      numero: 4,
      fase: "Sessão 4",
      data: "12 de maio de 553",
      local: "Secretarium da Hagia Sophia, Constantinopla",
      titulo: "Conclusão do exame de Teodoro de Mopsuéstia e condenação preliminar",
      presidente: "Eutíquio de Constantinopla",
      clima: "Impiedoso contra Teodoro, com horror generalizado diante das proposições citadas",
      resumo:
        "A quarta sessão completou o exame dos escritos de Teodoro de Mopsuéstia com a leitura de novos trechos, desta vez extraídos de suas obras exegéticas sobre o Antigo Testamento e de seus comentários às Epístolas Paulinas. A comissão de exetastai apresentou um dossiê de 71 proposições extraídas de Teodoro, organizadas em três categorias: (1) negação da união hipostática, (2) rejeição da Theotokos e (3) doutrina da 'inhabitação' (enoikēsis) do Logos no homem Jesus como mera união moral (kata schesin) e não ontológica (kath' hypostasin). A sessão culminou com a leitura de uma florilegium patrístico demonstrando que todos os grandes Padres — Atanásio, Basílio, Gregório de Nazianzo, Ambrósio, Agostinho e Leão — haviam ensinado o oposto de Teodoro.",
      documentosLidos: [
        {
          titulo: "Dossiê das 71 proposições de Teodoro de Mopsuéstia",
          origem: "Comissão de exetastai do concílio",
          conteudo:
            "Compilação sistemática de citações extraídas de pelo menos oito obras de Teodoro, acompanhadas de referências cruzadas com Nestório e com os Doze Capítulos de Cirilo. O dossiê foi organizado para demonstrar uma linha contínua de pensamento nestoriano desde Teodoro até Nestório e seus sucessores.",
        },
        {
          titulo: "Excertos do Comentário de Teodoro ao Salmo 8 e ao Salmo 44",
          origem: "Teodoro de Mopsuéstia",
          conteudo:
            "Passagens nas quais Teodoro interpreta os salmos messiânicos como referindo-se primariamente ao 'homem Jesus' e apenas secundariamente ao Logos, reforçando a acusação de que sua cristologia dividia Cristo em dois sujeitos de predicação.",
        },
        {
          titulo: "Florilegium patrístico contra Teodoro",
          origem: "Compilação conciliar",
          conteudo:
            "Antologia de 38 citações de Padres orientais e ocidentais (Atanásio, Cirilo, Leão, Ambrósio, Agostinho, João Crisóstomo, Gregório de Nissa) demonstrando o consenso patrístico sobre a união hipostática, a comunicação de idiomas (communicatio idiomatum) e a legitimidade do título Theotokos.",
        },
      ],
      debates:
        "O debate mais significativo da sessão girou em torno da questão de anatematizar os mortos. Os bispos de origem palestina e egípcia, fortemente influenciados pela tradição ciriliana, argumentaram que a heresia não prescreve com a morte do herege e que a Igreja tem o dever de proteger os fiéis de textos corruptores independentemente da data de sua composição. Os bispos sírios e mesopotâmicos, muitos dos quais veneravam Teodoro como 'o Intérprete' (ho exēgētēs) por excelência, protestaram que anatematizar um bispo que morrera na comunhão da Igreja há 125 anos era um ato sem precedente e canonicamente ilegítimo. O patriarca Eutíquio resolveu a questão citando o precedente do Concílio de Éfeso (431), que anatematizara Nestório ainda em vida, e o Sínodo de Constantinopla (543), que condenara o já falecido Orígenes.",
      eventos: [
        { titulo: "Dossiê das 71 proposições de Teodoro", descricao: "Compilação sistemática de citações extraídas de pelo menos oito obras de Teodoro.", desdobramento: "O dossiê demonstrou uma linha contínua de pensamento nestoriano desde Teodoro até Nestório." },
        { titulo: "Leitura dos salmos messiânicos de Teodoro", descricao: "Passagens nas quais Teodoro interpreta os salmos como referindo-se ao 'homem Jesus' e não ao Logos.", desdobramento: "Reforçou a acusação de que a cristologia de Teodoro dividia Cristo em dois sujeitos." },
        { titulo: "Florilegium patrístico contra Teodoro", descricao: "Antologia de 38 citações de Padres orientais e ocidentais demonstrando o consenso ciriliano.", desdobramento: "O consenso patrístico foi apresentado como irrefutável contra as defesas de Teodoro." },
      ],
      resultado:
        "O concílio declarou formalmente que Teodoro de Mopsuéstia era herege e que seus escritos deviam ser anatematizados em bloco. A sentença definitiva foi reservada para a oitava sessão, mas a condenação de princípio já estava estabelecida. Os bispos que persistiram na defesa de Teodoro foram instados a subscrever a condenação sob pena de deposição.",
      implicacoes:
        "A condenação de Teodoro representou a vitória definitiva da cristologia ciriliana sobre a tradição antioquena no Oriente bizantino. A escola exegética de Antioquia, que já estava em declínio desde o século V, recebeu um golpe do qual nunca se recuperaria plenamente. No Ocidente, contudo, a condenação foi recebida com perplexidade: Teodoro era praticamente desconhecido fora dos círculos teológicos especializados, e muitos bispos latinos consideraram o anátema de um morto como um perigoso precedente de revisionismo dogmático.",
    },
    {
      numero: 5,
      fase: "Sessão 5",
      data: "17 de maio de 553",
      local: "Secretarium da Hagia Sophia, Constantinopla",
      titulo: "Exame dos escritos de Teodoreto de Ciro contra Cirilo de Alexandria",
      presidente: "Eutíquio de Constantinopla",
      clima: "Juridicamente sofisticado, com o debate mais técnico de todo o concílio",
      resumo:
        "A quinta sessão abordou o segundo dos Três Capítulos: os escritos de Teodoreto de Ciro (c. 393–c. 460) dirigidos contra os Doze Capítulos de Cirilo de Alexandria e contra o Concílio de Éfeso (431). A situação de Teodoreto era canonicamente mais complexa que a de Teodoro, pois ele havia sido pessoalmente reabilitado pelo Concílio de Calcedônia (451) após anatematizar Nestório em plenário. O concílio de 553 precisava, portanto, demonstrar que a reabilitação calcedonense aplicava-se à pessoa de Teodoreto e não aos seus escritos anticyrilianos, que nunca haviam sido formalmente aprovados. A sessão leu trechos do Eranistes (O Mendigo), da Refutação dos Doze Capítulos de Cirilo e da Apologia de Diodoro e Teodoro.",
      documentosLidos: [
        {
          titulo: "Excertos da Refutação dos Doze Capítulos de Cirilo",
          origem: "Teodoreto de Ciro (c. 431–432)",
          conteudo:
            "Passagens nas quais Teodoreto acusa Cirilo de apolinarismo velado e de confundir as duas naturezas de Cristo numa 'mistura' (krasis) monofisita. Teodoreto argumenta que o Capítulo XII de Cirilo ('o Logos padeceu na carne') é blasfemo, pois 'atribui à divindade impassível o que pertence exclusivamente à humanidade assumida'.",
        },
        {
          titulo: "Excertos do Eranistes (Polymorphos)",
          origem: "Teodoreto de Ciro (c. 447)",
          conteudo:
            "Trechos do diálogo teológico em três livros nos quais Teodoreto, por meio de personagens alegóricos (Orthodoxos vs. Eranistes), defende a imutabilidade do Logos e rejeita a communicatio idiomatum em sua forma ciriliana, argumentando que 'as propriedades de cada natureza permanecem inconfundidas mesmo após a união'.",
        },
        {
          titulo: "Atas da Sessão IV do Concílio de Calcedônia (451) — Reabilitação de Teodoreto",
          origem: "Concílio de Calcedônia",
          conteudo:
            "Leitura das atas calcedonenses que registraram a reabilitação de Teodoreto, incluindo sua declaração pública: 'Anatematizo Nestório e todos os que não confessam que a Santa Virgem é Theotokos.' O concílio de 553 leu este documento para demonstrar que a reabilitação fora condicional à condenação de Nestório, não à aprovação dos escritos anticyrilianos.",
        },
      ],
      debates:
        "O debate foi o mais juridicamente sofisticado de todo o concílio. A questão central era: Calcedônia havia aprovado os escritos de Teodoreto ou apenas sua pessoa? Os defensores de Teodoreto argumentaram que a reabilitação implicava a aprovação de toda a sua obra teológica, pois os legados papais em 451 haviam declarado 'Teodoreto é ortodoxo' sem ressalvas. A maioria conciliar, seguindo a argumentação preparada pela chancelaria imperial, contra-argumentou que (1) os legados papais não haviam lido os escritos anticyrilianos de Teodoreto e, portanto, não podiam tê-los aprovado; (2) a reabilitação fora um ato de economia pastoral (oikonomia), não de julgamento dogmático; (3) os próprios escritos de Teodoreto contra Cirilo eram anteriores a Calcedônia e não haviam sido submetidos ao exame do concílio. O bispo de Cízico citou o princípio jurídico romano 'quod non est in actis, non est in mundo' ('o que não está nas atas não existe no mundo') para argumentar que a ausência de menção aos escritos anticyrilianos nas atas calcedonenses significava que eles não haviam sido julgados.",
      eventos: [
        { titulo: "Leitura dos escritos de Teodoreto contra Cirilo", descricao: "Passagens da Refutação dos Doze Capítulos e do Eranistes foram apresentadas.", desdobramento: "Teodoreto acusava Cirilo de apolinarismo e de confundir as duas naturezas." },
        { titulo: "Leitura das atas de Calcedônia (451)", descricao: "As atas da reabilitação de Teodoreto foram lidas para determinar seu alcance.", desdobramento: "O debate central: Calcedônia aprovou a pessoa ou os escritos de Teodoreto?" },
        { titulo: "Debate jurídico sobre a distinção persona/syngrammata", descricao: "O bispo de Cízico citou o princípio 'quod non est in actis, non est in mundo'.", desdobramento: "A maioria concluiu que a reabilitação calcedonense aplicava-se apenas à pessoa." },
      ],
      resultado:
        "O concílio decidiu que os escritos de Teodoreto contra Cirilo de Alexandria e contra o Concílio de Éfeso eram heréticos e deviam ser anatematizados, sem que isso implicasse a condenação da pessoa de Teodoreto (já falecido na comunhão da Igreja) nem a invalidação de sua reabilitação calcedonense. A distinção entre pessoa e escritos (prosōpon vs. syngrammata) foi formalmente registrada nas atas como princípio hermenêutico.",
      implicacoes:
        "A quinta sessão produziu a distinção canônica mais influente de todo o concílio: a separação entre a ortodoxia pessoal de um autor e a ortodoxia de seus escritos individuais. Essa distinção permitiu ao concílio condenar os textos de Teodoreto sem desautorizar Calcedônia — uma manobra que, embora logicamente coerente, foi rejeitada pelo Ocidente como sofisma jurídico. A decisão também consolidou a supremacia da teologia ciriliana como critério normativo de ortodoxia no Império Bizantino.",
    },
    {
      numero: 6,
      fase: "Sessão 6",
      data: "19 de maio de 553",
      local: "Secretarium da Hagia Sophia, Constantinopla",
      titulo: "Leitura e condenação da Epístola de Ibas de Edessa a Maris o Persa",
      presidente: "Eutíquio de Constantinopla",
      clima: "O mais tenso de todo o concílio, com reservas explícitas dos bispos africanos",
      resumo:
        "A sexta sessão examinou o terceiro e mais controverso dos Três Capítulos: a célebre Epístola de Ibas de Edessa a Maris (c. 433–435), um documento que havia sido lido e declarado ortodoxo pela Sessão X do Concílio de Calcedônia (451). A carta de Ibas continha críticas severas a Cirilo de Alexandria (a quem Ibas chamava de 'herege' e 'apolinariano') e elogios a Teodoro de Mopsuéstia. O concílio de 553 enfrentava aqui seu maior desafio canônico: como condenar um documento que Calcedônia havia explicitamente aprovado? A estratégia adotada foi argumentar que a Sessão X de Calcedônia havia examinado a carta apenas no contexto do processo pessoal de Ibas contra seus acusadores miáfisitas, e não como pronunciamento dogmático sobre o conteúdo teológico do documento.",
      documentosLidos: [
        {
          titulo: "Texto integral da Epístola de Ibas a Maris o Persa",
          origem: "Ibas de Edessa (c. 433–435)",
          conteudo:
            "Leitura da carta em sua totalidade (versão grega traduzida do siríaco). Passagens-chave incluem: a acusação de que Cirilo 'introduziu a confusão das naturezas' (synchysis tōn physeōn); o elogio a Teodoro como 'o grande doutor da Igreja'; e a afirmação de que 'o Concílio de Éfeso de 431 foi uma assembleia de bandidos' (latrocinium).",
        },
        {
          titulo: "Atas da Sessão X de Calcedônia (451) — Caso de Ibas",
          origem: "Concílio de Calcedônia",
          conteudo:
            "Leitura das atas calcedonenses que registraram a absolvição de Ibas. Os legados papais Pascásio e Lucêncio declararam: 'A carta de Ibas é ortodoxa e ele é inocente de todas as acusações.' O concílio de 553 leu estas atas para reinterpretá-las à luz de sua nova argumentação.",
        },
        {
          titulo: "Contradições internas da Epístola de Ibas",
          origem: "Comissão de exetastai",
          conteudo:
            "Dossiê comparativo demonstrando que a carta de Ibas contradizia não apenas os Doze Capítulos de Cirilo, mas também o próprio Tomo de Leão (que Ibas supostamente defendia) e as definições de Calcedônia. A comissão argumentou que, se a carta fosse realmente ortodoxa, não teria sido necessário que Ibas anatematizasse Nestório para ser reabilitado.",
        },
      ],
      debates:
        "O debate foi o mais tenso de todo o concílio, pois tocava diretamente na autoridade de Calcedônia. Os bispos ocidentais presentes (os seis africanos) manifestaram reservas explícitas pela primeira vez, argumentando que condenar uma carta aprovada por Calcedônia equivalia a 'destruir o concílio pela raiz'. O patriarca Eutíquio respondeu com o argumento que se tornaria a posição oficial: 'Calcedônia aprovou a pessoa de Ibas, não a carta; a carta foi lida como evidência processual, não como documento dogmático.' O bispo de Ancira, Teodoto, reforçou: 'Se a carta fosse dogma, por que Ibas precisou anatematizar Nestório? A aprovação da carta e a condenação de Nestório são logicamente incompatíveis.' O argumento era engenhoso, mas os canonistas ocidentais posteriores o rejeitariam como casuística.",
      eventos: [
        { titulo: "Leitura integral da Epístola de Ibas a Maris", descricao: "A carta foi lida em sua totalidade, incluindo as críticas severas a Cirilo.", desdobramento: "Passagens como 'latrocinium' para Éfeso provocaram indignação na assembleia." },
        { titulo: "Leitura das atas de Calcedônia sobre o caso de Ibas", descricao: "Os legados papais Pascásio e Lucêncio haviam declarado a carta 'ortodoxa'.", desdobramento: "O concílio reinterpretou a aprovação como ato processual, não dogmático." },
        { titulo: "Reservas dos bispos africanos", descricao: "Os seis bispos ocidentais presentes manifestaram reservas explícitas pela primeira vez.", desdobramento: "A maioria oriental sobrepujou as reservas com o argumento da distinção pessoa/escritos." },
      ],
      resultado:
        "O concílio declarou que a Epístola de Ibas a Maris era herética, nestoriana em seu conteúdo e incompatível com a fé de Calcedônia. A aprovação calcedonense foi reinterpretada como ato processual (krisis dikastikē) e não como definição dogmática (horos dogmatikos). A carta foi formalmente anatematizada, e sua leitura pública foi proibida em toda a Igreja.",
      implicacoes:
        "A condenação da Epístola de Ibas foi o ato mais contestado do concílio e a principal causa do Cisma Tricapitulino no Ocidente. Para os bispos latinos, a reinterpretação das atas de Calcedônia era uma falsificação histórica que destruía a credibilidade de todos os concílios ecumênicos. A questão de se um concílio posterior pode 'reinterpretar' as decisões de um concílio anterior permaneceria como um dos problemas mais espinhosos da eclesiologia cristã até os dias atuais.",
    },
    {
      numero: 7,
      fase: "Sessão 7",
      data: "26 de maio de 553",
      local: "Secretarium da Hagia Sophia, Constantinopla",
      titulo: "Cartas secretas de Vigílio e remoção de seu nome dos dípticos",
      presidente: "Eutíquio de Constantinopla",
      clima: "Dramaticamente política, com indignação generalizada após a leitura das cartas secretas",
      resumo:
        "A sétima sessão foi a mais dramaticamente política de todo o concílio e a que produziu as consequências mais duradouras para a história do papado. Justiniano, furioso com a recusa de Vigílio em comparecer e com a emissão do Constitutum I (14 de maio), ordenou a leitura pública de um dossiê de cartas secretas que o papa havia trocado com a corte imperial e com o patriarca Menas nos anos anteriores. Essas cartas, obtidas pela polícia imperial (agentes in rebus) mediante busca e apreensão no Palácio de Placídia, demonstravam que Vigílio havia prometido repetidamente condenar os Três Capítulos — inclusive em juramento escrito a Teodora — e que suas recusas atuais eram motivadas por cálculo político, não por convicção teológica. A sessão culminou com a decisão de remover o nome de Vigílio dos dípticos eucarísticos, ato equivalente à excomunhão pessoal.",
      documentosLidos: [
        {
          titulo: "Carta secreta de Vigílio a Justiniano (c. 547)",
          origem: "Arquivo do Sacrum Palatium",
          conteudo:
            "Documento no qual Vigílio, pouco após sua chegada a Constantinopla, promete ao imperador que 'examinará os Três Capítulos com mente aberta e os condenará se os encontrar contrários à fé'. A carta foi lida como prova de que o papa havia inicialmente concordado com a posição imperial.",
        },
        {
          titulo: "Juramento de Vigílio a Teodora (c. 536)",
          origem: "Arquivo imperial",
          conteudo:
            "Cópia do juramento prestado por Vigílio antes de sua eleição papal, no qual ele se comprometia a 'trabalhar pela reconciliação com os irmãos orientais e pela restauração da unidade da fé'. O documento foi lido para demonstrar que a resistência atual de Vigílio constituía perjúrio.",
        },
        {
          titulo: "Correspondência entre Vigílio e o patriarca Menas (547–548)",
          origem: "Arquivo patriarcal de Constantinopla",
          conteudo:
            "Série de cartas nas quais Vigílio e Menas discutem os termos do Iudicatum. As cartas revelam que Vigílio havia originalmente concordado com uma condenação mais ampla dos Três Capítulos e que a cláusula de salvaguarda de Calcedônia fora inserida como concessão de última hora.",
        },
        {
          titulo: "Constitutum I de Vigílio (14 de maio de 553)",
          origem: "Cúria papal",
          conteudo:
            "Leitura integral do decreto papal que recusava a condenação nominal dos Três Capítulos. O concílio ouviu o documento em silêncio e, ao final, o patriarca Eutíquio declarou que 'este escrito é contrário à fé dos santos padres e às decisões deste santo concílio'.",
        },
      ],
      debates:
        "O debate foi breve e unilateral. Após a leitura das cartas secretas, que provocaram indignação generalizada, o patriarca Eutíquio propôs que o nome de Vigílio fosse removido dos dípticos. O bispo de Amaseia, Estêvão, pronunciou um discurso inflamado no qual acusou Vigílio de 'jogar com a fé como um dado' e de 'trair a Sé de Pedro por covardia'. Alguns bispos mais moderados sugeriram uma última embaixada ao papa, mas a proposta foi rejeitada pela maioria. A única voz significativamente dissidente foi a do bispo de Cartago, Primásio, que se absteve da votação final — um gesto de protesto silencioso que não foi registrado nas atas oficiais.",
      eventos: [
        { titulo: "Leitura das cartas secretas de Vigílio", descricao: "Cartas obtidas pela polícia imperial demonstravam que Vigílio havia prometido condenar os Três Capítulos.", desdobramento: "As cartas revelaram que as recusas públicas de Vigílio eram motivadas por cálculo político." },
        { titulo: "Leitura do Constitutum I de Vigílio", descricao: "O decreto papal que recusava a condenação nominal foi lido em plenário.", desdobramento: "O patriarca Eutíquio declarou que o escrito era 'contrário à fé dos santos padres'." },
        { titulo: "Proposta de remoção dos dípticos", descricao: "O patriarca Eutíquio propôs a remoção do nome de Vigílio dos dípticos eucarísticos.", desdobramento: "O bispo Primásio de Cartago se absteve da votação em protesto silencioso." },
      ],
      resultado:
        "O concílio decretou, por aclamação, a remoção do nome de Vigílio dos dípticos eucarísticos de todas as igrejas do Império. A sentença incluiu a declaração crucial: 'Não nos separamos da comunhão com a Sé Apostólica de Roma, mas apenas da pessoa de Vigílio, que se separou a si mesmo da unidade da Igreja ao recusar a comunhão com este santo concílio e ao defender proposições contrárias à fé.' O decreto foi comunicado a Justiniano, que o ratificou por sacra imperial no mesmo dia.",
      implicacoes:
        "A sétima sessão produziu o ato mais radical de todo o concílio: a excomunhão de facto de um papa reinante por um concílio ecumênico. A distinção persona/sedes, embora canonicamente engenhosa, não convenceu o Ocidente, que interpretou o ato como uma agressão sem precedentes à autoridade petrina. O Cisma Tricapitulino intensificou-se dramaticamente após esta sessão, e a reconciliação plena entre Roma e as dioceses do norte da Itália levaria mais de 150 anos. A sessão também consolidou o modelo de cesaropapismo justinianeu, demonstrando que o imperador podia instrumentalizar um concílio para disciplinar o papado.",
    },
    {
      numero: 8,
      fase: "Sessão 8",
      data: "2 de junho de 553",
      local: "Secretarium da Hagia Sophia, Constantinopla",
      titulo: "Sentença Final: proclamação dos 14 Anátemas e encerramento do concílio",
      presidente: "Eutíquio de Constantinopla",
      clima: "Solene e triunfal, com aclamação litúrgica e subscrição nominal de todos os bispos",
      resumo:
        "A oitava e última sessão foi o clímax teológico e jurídico do concílio. Diante de 165 bispos (o número máximo de participantes em qualquer sessão), o patriarca Eutíquio leu a Sentença Final (horos tēs synodou), um extenso documento que recapitulava toda a argumentação das sessões anteriores e proclamava formalmente os quatorze anátemas contra os Três Capítulos e contra as proposições heréticas associadas. A sentença foi estruturada como uma confissão de fé positiva seguida de anátemas negativos, seguindo o modelo dos concílios de Niceia (325) e Constantinopla I (381). Após a leitura, cada bispo foi chamado nominalmente a subscrever o documento, num processo que durou várias horas. A sessão encerrou-se com a aclamação litúrgica e a comunicação da sentença ao imperador, que a promulgou como lei do Império (nomos) no dia seguinte.",
      documentosLidos: [
        {
          titulo: "Sentença Final do Santo Concílio (Horos)",
          origem: "Concílio Ecumênico de Constantinopla II",
          conteudo:
            "Documento de c. 6.000 palavras no original grego, contendo: (1) uma profissão de fé trinitária e cristológica alinhada com os quatro concílios anteriores; (2) a condenação dos Três Capítulos com fundamentação teológica detalhada; (3) os quatorze anátemas contra proposições nestorianas, origenistas e tricapitulinas; (4) a declaração de que a condenação não contradiz Calcedônia; (5) a exortação final à unidade da Igreja.",
        },
        {
          titulo: "Os 14 Anátemas (Anathematismoi)",
          origem: "Concílio Ecumênico de Constantinopla II",
          conteudo:
            "Lista formal dos catorze anátemas, cobrindo: a Trindade e a encarnação (1–5), a Theotokos e a comunicação de idiomas (6–8), a fórmula teopasquista (9–10), a condenação de Teodoro de Mopsuéstia (11), a condenação dos escritos de Teodoreto contra Cirilo (12), a condenação da Epístola de Ibas (13), e o anátema geral contra todos os defensores dos Três Capítulos (14).",
        },
        {
          titulo: "Lista de subscrições episcopais",
          origem: "Secretariado conciliar",
          conteudo:
            "Registro nominal dos 165 bispos que subscreveram a Sentença Final, organizados por província eclesiástica. A lista inclui os quatro patriarcas orientais, 12 arcebispos metropolitanos e 149 bispos sufragâneos, dos quais apenas 6 eram ocidentais (todos da África Proconsular).",
        },
      ],
      debates:
        "Não houve debate na oitava sessão, que foi inteiramente dedicada à proclamação e subscrição da Sentença Final. A única intervenção notável foi a do patriarca Eutíquio, que, antes de iniciar a leitura, declarou: 'O que foi decidido por este santo e ecumênico concílio é a voz do Espírito Santo, e quem o rejeita rejeita o próprio Cristo.' A aclamação final — 'Esta é a fé dos apóstolos! Esta é a fé dos padres! Esta é a fé dos ortodoxos! Anátema a quem não crê assim!' — foi repetida três vezes por toda a assembleia.",
      eventos: [
        { titulo: "Proclamação da Sentença Final (Horos)", descricao: "O patriarca Eutíquio leu o documento de c. 6.000 palavras contendo a confissão de fé e os 14 anátemas.", desdobramento: "A Sentença Final foi recebida com aclamação litúrgica por todos os bispos presentes." },
        { titulo: "Subscrição nominal dos 165 bispos", descricao: "Cada bispo foi chamado individualmente a subscrever a sentença.", desdobramento: "O processo durou várias horas e confirmou o consenso quase unânime da assembleia." },
        { titulo: "Comunicação ao imperador", descricao: "A sentença foi comunicada a Justiniano, que a promulgou como lei imperial no dia seguinte.", desdobramento: "A promulgação como nomos imperial deu às decisões conciliares força de lei no Império." },
      ],
      resultado:
        "O concílio promulgou definitivamente: (1) a condenação de Teodoro de Mopsuéstia e de todos os seus escritos; (2) a condenação dos escritos de Teodoreto de Ciro contra Cirilo de Alexandria e contra o Concílio de Éfeso; (3) a condenação da Epístola de Ibas a Maris o Persa; (4) os quatorze anátemas como norma de fé vinculante para toda a Igreja; (5) a reafirmação da autoridade dos quatro concílios ecumênicos anteriores (Niceia, Constantinopla I, Éfeso, Calcedônia) como 'quatro pilares da fé'; (6) a fórmula teopasquista 'Um da Trindade padeceu na carne' como expressão legítima da fé calcedonense.",
      implicacoes:
        "A oitava sessão encerrou formalmente o concílio, mas suas decisões provocaram ondas de choque que reverberaram por séculos. No Oriente, a condenação dos Três Capítulos foi recebida com satisfação pelos miáfisitas moderados, embora não tenha produzido a reconciliação desejada por Justiniano (os miáfisitas radicais rejeitaram Calcedônia independentemente da condenação de Teodoro). No Ocidente, a Sentença Final foi recebida como uma traição à memória de Calcedônia e ao primado romano, precipitando o Cisma Tricapitulino que dividiria a cristandade latina por mais de um século. Teologicamente, os quatorze anátemas consolidaram o neocalcedonianismo como a interpretação oficial da cristologia de Calcedônia no Império Bizantino, influenciando profundamente o desenvolvimento da teologia ortodoxa até os dias atuais.",
    },
  ],

  notaFinal:
    "As oito sessões do Segundo Concílio de Constantinopla estenderam-se por 29 dias (5 de maio a 2 de junho de 553) e produziram um corpus documental de extraordinária complexidade teológica e jurídica. A ausência do Papa Vigílio durante todas as sessões — e sua oposição ativa por meio do Constitutum I — conferiu ao concílio um caráter paradoxal: simultaneamente ecumênico (por convocação imperial e participação da maioria do episcopado oriental) e contestado (por falta de aquiescência papal inicial). A recepção posterior das decisões conciliares variou dramaticamente entre Oriente e Ocidente, e o debate sobre a legitimidade canônica de Constantinopla II permanece aberto na historiografia teológica contemporânea. As atas originais (Acta Concilii Oecumenici, series IV) foram preservadas em versões grega e latina, sendo a edição crítica de Richard Price (2009) a referência acadêmica mais atualizada.",
};