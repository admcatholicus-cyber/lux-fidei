// estudos/concilios/calcedonia/glossario/_verbetes.ts
// Glossário teológico do Concílio de Calcedônia — mínimo 40 verbetes.
// Cada verbete: lema, transliteração, tradução, 60–120 palavras, ver-também.

export interface Verbeta {
  lema: string;
  transliteracao: string;
  traducao: string;
  definicao: string;
  verTambem: string[];
}

export const verbetes: Verbeta[] = [
  // ═══════════════════════════════════════════════════════════════
  // TERMOS FUNDAMENTAIS
  // ═══════════════════════════════════════════════════════════════
  {
    lema: 'Physis',
    transliteracao: 'φύσις',
    traducao: 'Natureza',
    definicao:
      'Na terminologia calcedoniana, physis designa o conjunto de propriedades essenciais ' +
      'que definem o que algo é. Aplicada a Cristo, a "natureza" pode ser humana ou divina ' +
      'conforme o aspecto considerado. A Definição distingue duas naturezas em Cristo ' +
      '(δύο φύσεις) —.divina e humana — sem confusão, mudança, divisão ou separação. ' +
      'O termo opõe-se à physis composta (miafisismo) que reduziria as duas a uma só ' +
      'natureza híbrida, e ao diofisismo que as dividiria em duas pessoas.',
    verTambem: ['Hypostasis', 'Ousia', 'Miafisismo', 'Diofisismo'],
  },
  {
    lema: 'Hypostasis',
    transliteracao: 'ὑπόστασις',
    traducao: 'Hipóstase / Pessoa',
    definicao:
      'Hipóstase designa a concretude individual de uma natureza — o "aquilo que subsiste ' +
      'por si mesmo". Em Cristo, há uma só hipóstase (uma só pessoa) que subsiste em duas ' +
      'naturezas. O Concílio de Constantinopla I (381) já distinguira hypostasis de ousia ' +
      '(essência), atribuindo a primeira ao indivíduo concreto e a segunda à substância ' +
      'comum. A Definição de Calcedônia afirma que Cristo é "um só e mesmo Filho, Senhor ' +
      'e Unigênito, em duas naturezas, sem confusão, sem mudança, sem divisão, sem ' +
      'separação, em uma hipóstase e em uma prosopon".',
    verTambem: ['Prosōpon', 'Ousia', 'Henōsis'],
  },
  {
    lema: 'Prosōpon',
    transliteracao: 'πρόσωπον',
    traducao: 'Face / Pessoa',
    definicao:
      'Prosōpon, literalmente "face" ou "máscara teatral", adquiriu em cristologia o ' +
      'sentido de "pessoa" ou "persona". Na Definição de Calcedônia, aparece como sinônimo ' +
      'de hypostasis: Cristo é reconhecido "em uma hipóstase e em um prosopon" (μιᾷ ' +
      'ὑποστάσει καὶ ἑνὶ προσώπῳ). Para os antioquenos, prosōpon era a palavra preferida ' +
      'por enfatizar a unidade do sujeito que age em duas naturezas. Os alexandrinos ' +
      'prefiriam hypostasis por sua precisão ontológica.',
    verTambem: ['Hypostasis', 'Henōsis', 'Nestorianismo'],
  },
  {
    lema: 'Ousia',
    transliteracao: 'οὐσία',
    traducao: 'Essência / Substância',
    definicao:
      'Ousia designa a essência ou substância compartilhada por todos os membros de uma ' +
      'mesma espécie. O homoousios (consubstancial) do Credo niceniano afirma que o Filho ' +
      'tem a mesma ousia que o Pai. Na cristologia calcedoniana, as duas naturezas de Cristo ' +
      'não se confundem porque preservam suas respectivas ousiai — a divina e a humana. ' +
      'A distinção entre ousia (comum) e hypostasis (individual) foi fixada em Constantinopla I (381) ' +
      'por Basílio de Cesareia e sua escola.',
    verTambem: ['Hypostasis', 'Homoousios'],
  },
  {
    lema: 'Homoousios',
    transliteracao: 'ὁμοούσιος',
    traducao: 'Consubstancial',
    definicao:
      'Homoousios ("mesma substância") é o termo técnico aprovado em Niceia I (325) para ' +
      'expressar que o Filho é da mesma natureza que o Pai — não similar (homoiousios), ' +
      'não diferente, mas idêntico em substância divina. Calcedônia não introduziu esse termo ' +
      'em cristologia, mas o pressupôs: as duas naturezas de Cristo não se confundem porque ' +
      'cada uma preserva sua physis plena, enquanto a unidade se dá na hipóstase. O homoousios ' +
      'é o alicerce que torna a Definição possível.',
    verTambem: ['Ousia', 'Physis', 'Niceia'],
  },
  {
    lema: 'Theotokos',
    transliteracao: 'Θεοτόκος',
    traducao: 'Mãe de Deus',
    definicao:
      'Theotokos ("aquela que deu à luz a Deus") foi o título mariano proclamado em Éfeso (431) ' +
      'contra Néstorio, que preferia Christotokos ("Mãe de Cristo"). A aprovação do Theotokos ' +
      'implica que Maria gerou não apenas a natureza humana de Cristo, mas a pessoa divina ' +
      'do Filho — confirmando a união hipostática. Calcedônia reafirma o Theotokos como ' +
      'consequência lógica da Definição: se há uma só pessoa em Cristo, aquela que pariu ' +
      'essa pessoa pariu o Deus-Homem.',
    verTambem: ['Henōsis', 'Nestorianismo', 'Éfeso'],
  },
  {
    lema: 'Henōsis',
    transliteracao: 'ἕνωσις',
    traducao: 'União',
    definicao:
      'Henōsis designa o modo como as duas naturezas se unem em Cristo. A Definição não ' +
      'usa o termo henōsis φυσική (união natural), preferindo a formulação "em duas naturezas, ' +
      'sem confusão, sem mudança, sem divisão, sem separação". A união calcedoniana é ' +
      'hipostática: não é uma fusão de substâncias nem uma justaposição moral, mas a ' +
      'subsistência de duas naturezas completas em uma só pessoa divina. Cirilo de Alexandria ' +
      'havia usado henōsis para descrever a relação entre as naturezas.',
    verTambem: ['Physis', 'Hypostasis', 'Teleion'],
  },
  {
    lema: 'Teleion',
    transliteracao: 'τέλειον',
    traducao: 'Perfeito / Completo',
    definicao:
      'Teleion ("perfeito", "completo") é o adjetivo usado na Definição para qualificar ' +
      'cada natureza: "em Cristo reconhecemos as duas naturezas perfeitas (τελείας), cada ' +
      'uma em sua própria plenitude, sem deficiência nem excesso". A palavra é teologicamente ' +
      'decisiva: implica que a humanidade de Cristo não é diluída pela divindade, nem a ' +
      'divindade comprometida pela humanidade. Ambas são plenas, sem concorrência.',
    verTambem: ['Physis', 'Communicatio idiomatum'],
  },
  {
    lema: 'Gnōrizomenon',
    transliteracao: 'γνωριζόμενον',
    traducao: 'Reconhecido / Distinguível',
    definicao:
      'Gnōrizomenon ("reconhecido", "distinguível") aparece na Definição como verbo que ' +
      'exprime o reconhecimento intelectual das duas naturezas. Cristo é "reconhecido (γνωριζόμενον) ' +
      'em duas naturezas" —, isto é, a mente humana pode distinguir, no kerygma teológico, ' +
      'os atributos divinos e humanos sem, contudo, dividi-los na realidade. O verbo implica ' +
      'um ato cognitivo: não que Cristo seja "dividido" em duas partes, mas que a teologia ' +
      'reconhece em sua pessoa dois conjuntos de propriedades.',
    verTambem: ['Physis', 'Communicatio idiomatum'],
  },
  {
    lema: 'Asynchytōs',
    transliteracao: 'ἀσυγχύτως',
    traducao: 'Sem confusão',
    definicao:
      'Asynchytōs ("sem confusão", "sem fusão") é um dos quatro adverbios negativos da ' +
      'Definição. Exprime que as duas naturezas de Cristo não se misturaram nem formaram ' +
      'uma terceira natureza híbrida. A humanidade não absorveu a divindade, nem a ' +
      'divindade aniquilou a humanidade. Cada natureza preserva sua identidade ontológica ' +
      'distinta. Contra o eutiquianismo (que propunha a absorção da humana pela divina), ' +
      'asynchytōs garante a plenitude de ambas.',
    verTambem: ['Atreptōs', 'Adiairetōs', 'Achōristōs', 'Eutiquianismo'],
  },
  {
    lema: 'Atreptōs',
    transliteracao: 'ἀτρέπτως',
    traducao: 'Sem mudança',
    definicao:
      'Atreptōs ("sem mudança", "sem transformação") afirma que nenhuma das duas naturezas ' +
      'foi alterada pela encarnação. A divindade não se tornou humana (anti-arianismo) nem a ' +
      'humanidade se tornou divina (anti-aporitismo). A união hipostática não implica ' +
      'transformação de essências. O verbo trepō (mudar, transformar) indica uma alteração ' +
      'de estado que não ocorreu: Cristo permaneceu o que era — plenamente Deus e plenamente ' +
      'homem — antes, durante e depois da encarnação.',
    verTambem: ['Asynchytōs', 'Adiairetōs', 'Achōristōs'],
  },
  {
    lema: 'Adiairetōs',
    transliteracao: 'ἀδιαιρέτως',
    traducao: 'Sem divisão',
    definicao:
      'Adiairetōs ("sem divisão") exprime que as duas naturezas não estão separadas como ' +
      'partes de um todo que poderia ser decomposto. Não existe uma "metade divina" e uma ' +
      '"metade humana" de Cristo; há duas naturezas inteiras subsistentes em uma pessoa. ' +
      'O termo é antitético ao diofisismo radical que, ao exagerar a distinção das naturezas, ' +
      'acabaria por duplicar a pessoa. A Definição mantém o equilíbrio: reconhece a distinção ' +
      'real das naturezas sem permitir que essa distinção divida o sujeito.',
    verTambem: ['Achōristōs', 'Diofisismo'],
  },
  {
    lema: 'Achōristōs',
    transliteracao: 'ἀχωρίστως',
    traducao: 'Sem separação',
    definicao:
      'Achōristōs ("sem separação") é o quarto dos quatro adverbios negativos. Enquanto ' +
      'adiairetōs proíbe a divisão lógica das naturezas, achōristōs proíbe a separação ' +
      'real — a ideia de que as naturezas existissem independentemente uma da outra. As duas ' +
      'naturezas não estão separadas no tempo (Cristo não deixou de ser humano nem de ser ' +
      'divino), no espaço (ambas estão presentes em cada ato de Cristo) ou na ontologia ' +
      '(são realmente distintas, mas inseparáveis na pessoa).',
    verTambem: ['Adiairetōs', 'Henōsis'],
  },

  // ═══════════════════════════════════════════════════════════════
  // TERMOS CRISTOLÓGICOS TÉCNICOS
  // ═══════════════════════════════════════════════════════════════
  {
    lema: 'Communicatio idiomatum',
    transliteracao: 'communicatio idiomatum (latim)',
    traducao: 'Comunicação dos idiomas (propriedades)',
    definicao:
      'A comunicatio idiomatum exprime que, na pessoa de Cristo, as propriedades de cada ' +
      'natureza são atribuíveis à pessoa inteira. Assim, pode-se dizer que "Deus morreu na ' +
      'cruz" ou que "o homem Jesus criou o mundo" — não porque a natureza humana seja divina ' +
      'ou vice-versa, mas porque a pessoa que age é a mesma. A Definição calcedoniana ' +
      'presupõe a comunicatio idiomatum sem desenvolvê-la explicitamente, pois seu objetivo ' +
      'era definir a união, não explorar suas consequências lógicas.',
    verTambem: ['Gnōrizomenon', 'Hypostasis', 'Theotokos'],
  },
  {
    lema: 'Miafisismo',
    transliteracao: 'μονοφυσισμός (termo polemico)',
    traducao: 'Monofisismo / Miafisismo',
    definicao:
      'O miafisismo (ou monofisismo, no sentido calcedoniano) é a posição que afirma ' +
      'uma só natureza (μία φύσις) de Cristo após a encarnação. Contrário ao que se ' +
      'pensa, o miafisismo não é simplesmente o monofisismo de Eutiques, que propunha ' +
      'a absorção da humana pela divina. A maioria dos miafisitas (como Severo de Antioquia) ' +
      'defendia que, embora Cristo tenha duas naturezas "antes da união", na união elas ' +
      'formam uma natureza composta (φύσις σύνθετος). Calcedônia condenou ambas as versões.',
    verTambem: ['Eutiquianismo', 'Physis', 'Severus'],
  },
  {
    lema: 'Monofisismo',
    transliteracao: 'μονοφυσισμός',
    traducao: 'Monofisismo',
    definicao:
      'Monofisismo, no uso estritamente calcedoniano, designa a posição de Eutiques ' +
      'que, antes da união, Cristo teria duas naturezas, mas após a união apenas uma. ' +
      'Esse sentido é restrito e polemico: os próprios miafisitas rejeitavam o rótulo ' +
      '"monofisita" e preferiam "miafisita" ou "henofisita". O debate terminológico ' +
      'reflete a complexidade da recepção: para Calcedônia, todo miafisismo é herético; ' +
      'para os miafisitas, Calcedônia excessiva em sua formulação.',
    verTambem: ['Miafisismo', 'Eutiquianismo', 'Diofisismo'],
  },
  {
    lema: 'Nestorianismo',
    transliteracao: 'νεστοριανισμός',
    traducao: 'Nestorianismo',
    definicao:
      'Nestorianismo é a posição atribuída a Néstorio (embora sua própria doutrina seja ' +
      'mais sutil) que, ao insistir na distinção das naturezas, acabava por duplicar a ' +
      'pessoa de Cristo. Néstorio rejeitou o Theotokos e propôs o Christotokos, sugerindo ' +
      'duas hipóstases — uma divina e uma humana — unidas apenas moralmente. Éfeso (431) ' +
      'condenou Néstorio, mas o debate sobre as consequências lógicas do diofisismo persistiu ' +
      'até Calcedônia, que buscou um equilíbrio entre o nestorianismo e o miafisismo.',
    verTambem: ['Theotokos', 'Diofisismo', 'Éfeso'],
  },
  {
    lema: 'Apolinarismo',
    transliteracao: 'ἀπολιναρισμός',
    traducao: 'Apolinarismo',
    definicao:
      'Apolinarismo, proposto por Apolinário de Laodicéia (m. 390), afirmava que Cristo ' +
      'assumiu um corpo humano com uma alma sensitiva, mas não com um νοῦς (nous, mente ' +
      'racional) — esse seria substituído pelo Logos divino. A Igreja rejeitou o apolinarismo ' +
      'porque uma humanidade sem razão não seria humana plenamente, comprometendo a ' +
      'redenção. Calcedônia pressupõe a condenação do apolinarismo ao afirmar a plenitude ' +
      'de ambas as naturezas (τελείας).',
    verTambem: ['Teleion', 'Physis'],
  },
  {
    lema: 'Diofisismo',
    transliteracao: 'δυοφυσισμός',
    traducao: 'Diofisismo',
    definicao:
      'Diofisismo é a posição que afirma duas naturezas (δύο φύσεις) em Cristo. No sentido ' +
      'calcedoniano, o diofisismo é ortodoxo: Cristo é plenamente Deus e plenamente homem. ' +
      'No sentido radical (cuíosoi), o diofisismo pode caminhar para o nestorianismo ao ' +
      'exagerar a separação das naturezas. Calcedônia adotou um diofisismo "moderado", ' +
      'temperado pelos quatro adverbios negativos e pela afirmação da união hipostática.',
    verTambem: ['Nestorianismo', 'Miafisismo', 'Physis'],
  },
  {
    lema: 'Eutiquianismo',
    transliteracao: 'εὐτυχιανισμός',
    traducao: 'Eutiquianismo',
    definicao:
      'Eutiquianismo é a posição de Eutiques (m. ~456), arquimandrita de Constantinopla, ' +
      'que sustentava que Cristo, antes da encarnação, tinha duas naturezas, mas na união ' +
      'as duas se fundiam em uma natureza divina que "não era a mesma que a dos escravos" ' +
      '(a natureza humana seria como uma gota de mel no oceano). Calcedônia condenou ' +
      'Eutiques por negar a plenitude da natureza humana de Cristo (abiura em 449, mas ' +
      'reabilitado no Latrocínio).',
    verTambem: ['Miafisismo', 'Eutiques', 'Asynchytōs'],
  },
  {
    lema: 'Teopasquismo',
    transliteracao: 'Θεοπάσχειν (fórmula)',
    traducao: 'Deus padeceu na carne',
    definicao:
      'Teopasquismo é a formulação "Deus padeceu na carne" (Θεὸς πέποθεν κατὰ τήν σάρκα), ' +
      'que/autores como Aprencyous usavam para expressar a identidade entre o Deus-Homem ' +
      'e o Cristo que sofreu. A formulação é aceitável na medida em que reconhece a ' +
      'comunicação de propriedades, mas é perigosa se interpretada como se a natureza ' +
      'divina em si mesma pudesse sofrer. Calcedônia não proibiu o teopasquismo, mas ' +
      'equilibrou-o com a afirmação das duas naturezas.',
    verTambem: ['Communicatio idiomatum', 'Asynchytōs'],
  },
  {
    lema: 'Enhypostatos',
    transliteracao: 'ἐνυπόστατος',
    traducao: 'Inhipostático',
    definicao:
      'Enhypostatos ("em-subsistente", "inhipostático") descreve a natureza humana de ' +
      'Cristo: ela não tem sua própria hipóstase (pessoa), mas subsiste (ἐν) na hipóstase ' +
      'divina do Logos. A natureza humana de Cristo não é uma pessoa independente; é ' +
      'inhipostaticamente unida à pessoa do Filho. O termo permite dizer que a humanidade ' +
      'de Cristo não tem hypostasis própria, mas está "vestida" na hypostasis do Logos.',
    verTambem: ['Hypostasis', 'Henōsis', 'Prosōpon'],
  },
  {
    lema: 'Thelēma',
    transliteracao: 'θέλημα',
    traducao: 'Vontade',
    definicao:
      'Thelēma ("vontade") é crucial para o debate monotelita. Se Cristo tem duas naturezas, ' +
      'tem duas vontades? Calcedônia não resolveu a questão, mas o monotelismo (uma só ' +
      'vontade) foi condenado no III Concílio de Constantinopla (681). A posição calcedoniana ' +
      'ortodoxa é que Cristo tem duas vontades (divina e humana), mas a humana está ' +
      'sempre subordinada à divina — "não como a do servo, mas como a do Senhor".',
    verTambem: ['Monoenergismo', 'Monotelismo'],
  },
  {
    lema: 'Energeia',
    transliteracao: 'ἐνέργεια',
    traducao: 'Energia / Atividade',
    definicao:
      'Energeia designa a atividade ou operação de uma natureza. O debate sobre se Cristo ' +
      'tem uma ou duas energias (monoenergismo) surgiu no século VII com Sérvio de Antioquia. ' +
      'Embora Calcedônia não tenha discutido a questão diretamente, a distinção entre ' +
      'natureza e energia é implícita na Definição: as duas naturezas são "sem confusão", ' +
      'mas a pessoa que opera é uma só.',
    verTambem: ['Monoenergismo', 'Monotelismo', 'Thelēma'],
  },
  {
    lema: 'Monoenergismo',
    transliteracao: 'μονενεργισμός',
    traducao: 'Monoenergismo',
    definicao:
      'Monoenergismo é a posição que afirma uma só energia (atividade) em Cristo. Proposto ' +
      'por Sérvio de Antioquia no século VII, buscava uma fórmula de compromisso entre ' +
      'os calcedonianos e os miafisitas. Foi condenado no III Concílio de Constantinopla ' +
      '(681) junto com o monotelismo, por comprometer a plenitude da natureza humana.',
    verTambem: ['Monotelismo', 'Energeia', 'Thelēma'],
  },
  {
    lema: 'Monotelismo',
    transliteracao: 'μονοθελητισμός',
    traducao: 'Monotelismo',
    definicao:
      'Monotelismo é a posição que afirma uma só vontade (θέλημα) em Cristo — a divina, ' +
      'absorvendo a humana. Foi condenado no III Concílio de Constantinopla (681) como ' +
      'heresia, pois compromete a plenitude da natureza humana. Calcedônia não tratou ' +
      'da questão explicitamente, mas a lógica da Definição — duas naturezas perfeitas — ' +
      'implica necessariamente duas vontades.',
    verTambem: ['Monoenergismo', 'Thelēma', 'Constantinopla III'],
  },
  {
    lema: 'Aftartodocetismo',
    transliteracao: 'ἀφθαρτοδοκητισμός',
    traducao: 'Aftartodocetismo',
    definicao:
      'Aftartodocetismo é a posição de Juliano de Halicarnasso (julianistas) que sustentava ' +
      'que o corpo de Cristo era incorruptível (ἀφθαρτος) desde a concepção —, isto é, ' +
      'não sofreu decaimento humano real. Posição semelhante ao docetismo, pois reduz ' +
      'a realidade da paixão. Severo de Antioquia opôs-se vigorosamente ao aftartodocetismo, ' +
      'defendendo a corruptibilidade real do corpo humano de Cristo.',
    verTambem: ['Docetismo', 'Julianismo', 'Severus'],
  },

  // ═══════════════════════════════════════════════════════════════
  // TERMOS CONTROVERTIDOS E PARTIDOS
  // ═══════════════════════════════════════════════════════════════
  {
    lema: 'Triteísmo',
    transliteracao: 'τριθεϊσμός',
    traducao: 'Triteísmo',
    definicao:
      'Triteísmo é a acusação teológica de que a doutrina da Trindade levaria à adoração ' +
      'de três deuses. Embora Calcedônia não tenha tratado do triteísmo diretamente, a ' +
      'questão está implicitamente ligada ao debate cristológico: se a natureza divina de ' +
      'Cristo é realmente divina (como afirma a Definição), a adoração a Cristo não é ' +
      'idolatria. O Cânon 4 de Calcedôria confirma a plenitude de culto a Cristo.',
    verTambem: ['Homoousios', 'Theotokos'],
  },
  {
    lema: 'Acéfalos',
    transliteracao: 'ἀκέφαλοι',
    traducao: 'Acéfalos ("sem cabeça")',
    definicao:
      'Acéfalos são os bispos orientais que se recusaram a assinar a Definição de Calcedônia ' +
      'e que, por não terem bispo-líder reconhecido pela comunidade, eram chamados de "sem ' +
      'cabeça". Incluíam oposição diversa: algunos seguindo Eutiques, outros Teodóscio de ' +
      'Alexandria, outros Timóteo Aeluros. Não constituíram um partido coerente, mas uma ' +
      'coalizão oposicionista que persistiu por décadas.',
    verTambem: ['Miafisismo', 'Severus', 'Eutiquianismo'],
  },
  {
    lema: 'Severianos',
    transliteracao: 'Σευηριανοί',
    traducao: 'Severianos (partido de Severo de Antioquia)',
    definicao:
      'Severianos são os seguidores de Severo de Antioquia (m. 538), patriarca miafisita ' +
      'de 512 a 518. Diferentemente de Eutiques, Severo aceitava duas naturezas "antes da ' +
      'união" e apenas uma natureza composta "após a união". Sua teologia é mais sofisticada ' +
      'e muitos estudiosos modernos reconhecem sua Ortodoxia cristológica. os Severianos ' +
      'formaram o partido miafisita mais influente no século VI.',
    verTambem: ['Miafisismo', 'Acéfalos', 'Aftartodocetismo'],
  },
  {
    lema: 'Julianistas',
    transliteracao: 'Ἰουλιανισταί',
    traducao: 'Julianistas (partido de Juliano de Halicarnasso)',
    definicao:
      'Julianistas são os seguidores de Juliano de Halicarnasso (fl. 510–518), bispo ' +
      'miafisita que defendia o aftartodocetismo — a incorruptibilidade do corpo de Cristo. ' +
      'Juliano rompeu com Severo de Antioquia precisamente nessa questão: Severo defendia ' +
      'a corruptibilidade real da carne de Cristo, enquanto Juliano a negava. Os julianistas ' +
      'foram um sub-grupo minoritário que se extinguiu no século VII.',
    verTambem: ['Aftartodocetismo', 'Severus'],
  },
  {
    lema: 'Henotikon',
    transliteracao: 'Ἓνωσιν (ὄρον)',
    traducao: 'Henotikon (Fórmula de União)',
    definicao:
      'Henotikon é o édito imperial do imperador Zenão (482) que tentou reconciliar ' +
      'calcedonianos e miafisitas mediante uma fórmula ambiguamente cristológica. Reproduzia ' +
      'os Credos de Niceia e Constantinopla e condenava Néstorio e Eutiques, mas evitava ' +
      'a Definição de Calcedônia. Roma e o Ocidente rejeitaram o Henotikon, exacerbando ' +
      'a divisão. É um exemplo clássico de cesaropapismo: a tentativa imperial de resolver ' +
      'uma questão teológica por meio do poder político.',
    verTambem: ['Cesaropapismo', 'Zenão', 'Miafisismo'],
  },
  {
    lema: 'Ecthesis',
    transliteracao: 'Ἔκθεσις',
    traducao: 'Ecthesis (Exposição)',
    definicao:
      'A Ecthesis é o édito imperial do imperador Heraclius (638) que propunha ' +
      'o monotelismo como solução de compromisso entre calcedonianos e miafisitas. ' +
      'Reconhecia uma só vontade em Cristo, gerando forte oposição no Ocidente. ' +
      'Foi condenada pelo Papa Honório (embora sua posição seja controversa) e pelos ' +
      'concílios subsequentes.',
    verTambem: ['Monotelismo', 'Monoenergismo'],
  },
  {
    lema: 'Typos',
    transliteracao: 'Τύπος',
    traducao: 'Typos (Tipo/Modelo)',
    definicao:
      'O Typos é o édito imperial do imperador Constans II (648) que proibia ' +
      'a discussão pública sobre a questão das vontades (monotelismo e diothelismo). ' +
      'Em vez de resolver a controvérsia, silenciou-a, gerando forte oposição em Roma ' +
      'e no Ocidente. O Papa Martinho I e Maximus, o Confessor, foram condenados por ' +
      'sua resistência ao Typos.',
    verTambem: ['Ecthesis', 'Monotelismo'],
  },
  {
    lema: 'Latrocinium',
    transliteracao: 'Latrocinium (latim)',
    traducao: 'Latrocínio / Bando de assaltantes',
    definicao:
      'Latrocinium ("latrocínio", "bando de assaltantes") é o termo que Leão Magno e ' +
      'o Ocidente aplicaram ao concílio de Éfeso de 449, presidido por Dioscoro de ' +
      'Alexandria. O termo implica que o concílio foi uma reunião ilegal, violenta e ' +
      'ilegítima. Calcedônia rejeitou formalmente os atos do Latrocínio em suas sessões ' +
      '13 e 14, e restaurou os bispos depostos por ele.',
    verTambem: ['Dioscorus', 'Éfeso', 'Flaviano'],
  },
  {
    lema: 'Symphonia',
    transliteracao: 'συμφωνία',
    traducao: 'Simfonia (harmonia)',
    definicao:
      'Symphonia designa o ideal de harmonia entre as autoridades imperiais e eclesiásticas ' +
      'no Império Bizantino. Na prática, a simfonia nunca foi perfeita: o imperador frequentemente ' +
      'interferia em assuntos doutrinais (como no Henotikon e no Latrocínio), e os bispos ' +
      'resistiam quando a interferência comprometia a ortodoxia. Calcedônia exemplifica ' +
      'tanto a simfonia (Marciano apoiou a Definição) quanto seus limites (o Cânon 28 ' +
      'foi anulado por Leão Magno).',
    verTambem: ['Cesaropapismo', 'Pentarquia'],
  },
  {
    lema: 'Cesaropapismo',
    transliteracao: 'cæsaropapismus (neolatim)',
    traducao: 'Cesaropapismo',
    definicao:
      'Cesaropapismo designa a subordinação da autoridade eclesiástica à autoridade imperial. ' +
      'No contexto de Calcedônia, o cesaropapismo se manifesta na convocação imperial do ' +
      'concílio, na imposição do Latrocínio por Teodósio II, no apoio de Marciano à Definição ' +
      'e nas tentativas imperiais de solução (Henotikon, Ecthesis, Typos). Calcedônia é ' +
      'o exemplo mais dramático da tensão entre poder espiritual e poder temporal.',
    verTambem: ['Symphonia', 'Pentarquia'],
  },
  {
    lema: 'Pentarquia',
    transliteracao: 'πενταρχία',
    traducao: 'Pentarquia',
    definicao:
      'A pentarquia é o modelo de organização eclesiástica que reconhece cinco sedes ' +
      'patriarcais com primazia de honra: Roma, Constantinopla, Alexandria, Antioquia e ' +
      'Jerusalém. Calcedônia (Cânon 28) elevou Constantinopla ao mesmo nível de honra que ' +
      'Roma, gerando o maior conflito eclesiástico-político do século V. A pentarquia ' +
      'persistiu como modelo até o Cisma de 1054.',
    verTambem: ['Cânon 28', 'Apocrisiário', 'Cesaropapismo'],
  },
  {
    lema: 'Apocrisiário',
    transliteracao: 'ἀποκρισιάριος',
    traducao: 'Apocrisiário (representante)',
    definicao:
      'O apocrisiário era o representante permanente de um patriarca junto à corte imperial ' +
      'ou a outro patriarca. Em Constantinopla, os apocrisiários dos patriarcas de ' +
      'Alexandria, Antioquia e Jerusalém eram figuras poderosas, servindo como intermediários ' +
      'teológicos e diplomáticos. O apocrisiário romano (apud Sanctam Sedem) era ' +
      'o representante permanente do Papa em Constantinopla.',
    verTambem: ['Pentarquia', 'Arquimandrita'],
  },
  {
    lema: 'Arquimandrita',
    transliteracao: 'ἀρχιμανδρίτης',
    traducao: 'Arquimandrita (superior de mosteiros)',
    definicao:
      'O arquimandrita era o superior de um grande mosteiro (μανδρά, "curral") e ' +
      'exercia autoridade sobre comunidades monásticas menores. Em Constantinopla, ' +
      'os arquimandritas tinham assento no sínodo e influência teológica significativa. ' +
      'Eutiques, cuja condenação precipitou Calcedônia, era arquimandrita do mosteiro ' +
      'de Santo Acácio em Constantinopla.',
    verTambem: ['Eutiques', 'Apocrisiário'],
  },
  {
    lema: 'Endēmousa',
    transliteracao: 'ἐνδημοῦσα',
    traducao: 'Residente (sínodo em presença do imperador)',
    definicao:
      'A sínodo endēmousa ("residente") era a assembléia permanente do sínodo de ' +
      'Constantinopla que funcionava na presença do imperador. Diferia da sínodo joierna ' +
      '(ἐπιδημοῦσα), que era convocada para ocasiões especiais. A sínodo endēmousa ' +
      'era o principal órgão de legislação eclesiástica no Império Bizantino, ' +
      'e suas decisões tinham força de lei imperial quando ratificadas.',
    verTambem: ['Cesaropapismo', 'Pentarquia'],
  },
  {
    lema: 'Martyrium',
    transliteracao: 'μαρτύριον',
    traducao: 'Martírio (túmulo/igreja de mártir)',
    definicao:
      'O martyrium era a igreja ou capela erguida sobre o túmulo de um mártir. Em Calcedônia, ' +
      'o martyrium de Santo Eufêmia serviu como local das sessões conciliares. O Concílio ' +
      'se reuniu na igreja de Santo Eufêmia, e os bispos juraram fidelidade à Definição ' +
      'perante as relíquias da mártir. A escolha de um martyrium como local conciliar ' +
      'reforçava a continuidade entre a fé dos mártires e as decisões do Concílio.',
    verTambem: ['Eufêmia', 'Calcedônia'],
  },
  {
    lema: 'Actio',
    transliteracao: 'actio (latim)',
    traducao: 'Ato / Sessão (acta concilia)',
    definicao:
      'Actio designa formalmente cada sessão do concílio. As Actas Conciliares (ACO) ' +
      'organizam-se em actiones, cada uma correspondendo a uma sessão plenária. ' +
      'Calcedônia teve dezesseis actiones, numeradas de I a XVI. As actiones incluem ' +
      'discursos, leituras de documentos, interrogatórios, votações e aclamações. ' +
      'A edição crítica de Schwartz é o referencial para a numeração das actiones.',
    verTambem: ['ACO', 'Sessões'],
  },
  {
    lema: 'Anátema',
    transliteracao: 'ἀνάθεμα',
    traducao: 'Anátema (maldição/excomunhão)',
    definicao:
      'Anátema é a sentença de excomunhão pronunciada contra hereges e seus ensinamentos. ' +
      'Calcedônia pronunciou anátema sobre Eutiques, Dioscoro de Alexandria e os autores ' +
      'de heresias passadas (Arius, Macedônio, Néstorio, etc.). O anátema calcedoniano ' +
      'não é apenas uma punição eclesiástica; é uma declaração teológica de que o ensinamento ' +
      'condenado é incompatível com a fé cristã.',
    verTambem: ['Eutiques', 'Dioscorus', 'Néstorio'],
  },
  {
    lema: 'Aclamações',
    transliteracao: 'acclamationes (latim)',
    traducao: 'Aclamações',
    definicao:
      'As aclamações são expressões coletivas de aprovação ou rejeição proferidas pelos ' +
      'participantes do concílio durante as sessões. Em Calcedônia, as aclamações são ' +
      'frequentes e vigorosas: "Anátema sobre Néstorio!", "Seja a Definição a lei!", ' +
      '"Marciano augusto, vitorioso!". As aclamações documentadas nas actas revelam ' +
      'o caráter litúrgico e imperial do concílio, e seu significado jurídico como ' +
      'manifestação da vontade coletiva.',
    verTambem: ['Actio', 'Marciano'],
  },
  {
    lema: 'Subscrições',
    transliteracao: 'subscriptiones (latim)',
    traducao: 'Subscrições (assinaturas)',
    definicao:
      'As subscrições são as assinaturas dos bispos ao final das actas, confirmando ' +
      'sua adesão às decisões conciliares. Calcedônia teve cerca de 520 assinaturas ' +
      '(embora o número exato varie entre as tradições). A subscrição era um ato ' +
      'jurídico e teológico: o bispo declarava publicamente aceitar a Definição e ' +
      'anatematizar seus adversários. Bispos ausentes podiam assinar posteriormente.',
    verTambem: ['Actio', 'Anátema'],
  },
  {
    lema: 'Exarca',
    transliteracao: 'ἔξαρχος',
    traducao: 'Exarca (governador)',
    definicao:
      'O exarca era o governador civil e militar de uma província do Império Bizantino. ' +
      'No contexto de Calcedônia, os exarcas representavam o poder imperial nas províncias ' +
      'e tinham a responsabilidade de garantir a implementação das decisões conciliares. ' +
      'O exarca de Ravena (Itália) e o exarca de Cartago (África) eram figuras-chave ' +
      'na recepção ocidental da Definição.',
    verTambem: ['Pentarquia', 'Cesaropapismo'],
  },
  {
    lema: 'Catolicós',
    transliteracao: 'καθολικός',
    traducao: 'Catolicós (universal)',
    definicao:
      'Catolicós ("universal") era o título usado por alguns patriarcas orientais — ' +
      'especialmente o patriarca da Igreja do Oriente (Assíria) — para indicar sua ' +
      'autoridade universal sobre toda a Igreja. O título rivalizava com o de "papa" ' +
      'usado em Roma e com o de "ecumênico" que Constantinopla reivindicava. ' +
      'Calcedônia não resolveu a questão dos títulos patriarcais, deixando-a para o ' +
      'debate futuro.',
    verTambem: ['Pentarquia', 'Cânon 28'],
  },
];
