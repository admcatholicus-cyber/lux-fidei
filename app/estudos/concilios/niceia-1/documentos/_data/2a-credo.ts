/* ═══════════════════════════════════════════════════════════
   2A. O CREDO DE NICEIA (325) & GENEALOGIA DOS CREDOS
   Fontes: Urk. 22 §4; Niceia 325; De syn. 23, 11, 8, 30;
   Calcedônia, 2ª sessão (texto de 381).
═══════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────────
   1. ESTRUTURA DO CREDO EXIGIDA PELO PAGE.TSX
───────────────────────────────────────────────────────────── */
export const credoDossie = {
  titulo: 'O Símbolo de Fé de Niceia (325 d.C.) e Anátemas',
  textos: {
    grego:
      'Πιστεύομεν εἰς ἕνα Θεὸν Πατέρα παντοκράτορα, πάντων ὁρατῶν τε καὶ ἀοράτων ποιητήν· καὶ εἰς ἕνα Κύριον Ἰησοῦν Χριστόν, τὸν Υἱὸν τοῦ Θεοῦ, γεννηθέντα ἐκ τοῦ Πατρὸς μονογενῆ, τουτέστιν ἐκ τῆς οὐσίας τοῦ Πατρός, Θεὸν ἐκ Θεοῦ, Φῶς ἐκ Φωτός, Θεὸν ἀληθινὸν ἐκ Θεοῦ ἀληθινοῦ, γεννηθέντα, οὐ ποιηθέντα, ὁμοούσιον τῷ Πατρί, δι᾿ οὗ τὰ πάντα ἐγένετο, τά τε ἐν τῷ οὐρανῷ καὶ τὰ ἐπὶ τῆς γῆς, τὸν δι᾿ ἡμᾶς τοὺς ἀνθρώπους καὶ διὰ τὴν ἡμετέραν σωτηρίαν κατελθόντα καὶ σαρκωθέντα καὶ ἐνανθρωπήσαντα, παθόντα, καὶ ἀναστάντα τῇ τρίτῃ ἡμέρᾳ, ἀνελθόντα εἰς τοὺς οὐρανούς, ἐρχόμενον κρῖναι ζῶντας καὶ νεκρούς. Καὶ εἰς τὸ Ἅγιον Πνεῦμα. Τοὺς δὲ λέγοντας· «Ἦν ποτε ὅτε οὐκ ἦν», καὶ «Πρὶν γεννηθῆναι οὐκ ἦν», καὶ ὅτι «Ἐξ οὐκ ὄντων ἐγένετο», ἢ ἐξ ἑτέρας ὑποστάσεως ἢ οὐσίας φάσκοντας εἶναι, ἢ κτιστόν, ἢ τρεπτόν, ἢ ἀλλοιωτὸν τὸν Υἱὸν τοῦ Θεοῦ, τούτους ἀναθεματίζει ἡ καθολικὴ καὶ ἀποστολικὴ ἐκκλησία.',
    latim:
      'Credimus in unum Deum Patrem omnipotentem, omnium visibilium et invisibilium factorem. Et in unum Dominum Jesum Christum Filium Dei, natum de Patre unigenitum, hoc est de substantia Patris, Deum de Deo, Lumen de Lumine, Deum verum de Deo vero, natum non factum, consubstantialem Patri (quod Graece dicunt homoousion), per quem omnia facta sunt quae in caelo et in terra sunt; qui propter nos homines et propter nostram salutem descendit, incarnatus est, homo factus est, passus est, et resurrexit tertia die, ascendit in caelos, venturus iudicare vivos et mortuos. Et in Spiritum Sanctum. Eos autem qui dicunt: «Erat quando non erat», et «Antequam nasceretur non erat», et quod «De nihilo factus est», aut ex alia substantia vel essentia dicentes esse, aut convertibilem aut mutabilem Filium Dei, hos anathematizat catholica et apostolica ecclesia.',
    portugues:
      'Cremos em um só Deus, Pai Todo-Poderoso, Criador de todas as coisas visíveis e invisíveis. E em um só Senhor Jesus Cristo, o Filho de Deus, gerado do Pai como unigênito, isto é, da substância do Pai, Deus de Deus, Luz da Luz, Deus verdadeiro de Deus verdadeiro, gerado, não feito, consubstancial ao Pai (homoousios), por meio de quem todas as coisas foram feitas, tanto as do céu como as da terra; o qual, por nós homens e pela nossa salvação, desceu, encarnou-se e fez-se homem; padeceu e ressuscitou ao terceiro dia, subiu aos céus, e virá para julgar os vivos e os mortos. E no Espírito Santo. E àqueles que dizem: «Houve um tempo em que ele não existia», e «Antes de nascer ele não existia», e que «Foi feito do nada», ou os que afirmam que o Filho de Deus é de outra hipóstase ou substância (ousia), ou que é criado, mutável ou sujeito a alterações, a estes a Igreja católica e apostólica anatematiza.',
  },
  notasFilologicas: [
    {
      termo: 'ἐκ τῆς οὐσίας τοῦ Πατρός',
      transcricao: 'ek tēs ousías toû Patrós',
      traducao: 'da substância da essência do Pai',
      explicacao: 'Exclui que a geração do Filho seja um ato de vontade externa da criação; o Filho procede do próprio ser divino do Pai.',
    },
    {
      termo: 'ὁμοούσιον τῷ Πατρί',
      transcricao: 'homoousion tō Patrí',
      traducao: 'consubstancial / da mesma substância que o Pai',
      explicacao: 'O termo filosófico-chave que impediu os arianos de reinterpretarem a filiação em sentido metafórico ou subordinado.',
    },
    {
      termo: 'γεννηθέντα, οὐ ποιηθέντα',
      transcricao: 'gennēthénta, ou poiēthénta',
      traducao: 'gerado, não feito / não criado',
      explicacao: 'Distingue categoricamente geração eterna (gennesis) de fabricação/criação temporal (poiesis/ktisis).',
    },
  ],
  anatemas: [
    {
      termo: 'Ἦν ποτε ὅτε οὐκ ἦν',
      traducao: 'Houve um tempo em que ele não existia',
      analise: 'Condena a tese ariana de que o Filho é temporal e teve um início antes do qual não existia.',
    },
    {
      termo: 'Ἐξ οὐκ ὄντων ἐγένετο',
      traducao: 'Foi feito a partir do nada',
      analise: 'Condena a assimilação do Filho às criaturas criadas ex nihilo.',
    },
    {
      termo: 'Ἐξ ἑτέρας ὑποστάσεως ἢ οὐσίας',
      traducao: 'De outra hipóstase ou substância',
      analise: 'Niceia trata hypostasis e ousia como sinônimos práticos, rejeitando que o Filho tenha essência distinta do Pai.',
    },
    {
      termo: 'Τρεπτὸν ἢ ἀλλοιωτόν',
      traducao: 'Mutável ou sujeito a alterações',
      analise: 'Rejeita que o Logos divino pudesse pecar ou mudar moral/ontologicamente por livre-arbítrio.',
    },
  ],
  testemunhos: {
    descricao: 'O texto original do Símbolo de 325 nos chegou preservado nas atas conciliares e nas obras dos bispos contemporâneos:',
    fontes: [
      { autor: 'Eusébio de Cesareia', local: 'Epistula ad Caesarienses (Urk. 22)', nota: 'Relato enviado à sua diocese imediatamente após o encerramento do Concílio.' },
      { autor: 'Atanásio de Alexandria', local: 'De decretis Nicaenae synodi', nota: 'Apresentação detalhada da defesa da terminologia nicena contra as objeções.' },
      { autor: 'Hilário de Poitiers', local: 'De synodis 84', nota: 'Principal canal de transmissão latina no Ocidente.' },
    ],
  },
}

/* ─────────────────────────────────────────────────────────────
   2. ITEM 85 — GENEALOGIA DOS CREDOS (CLÁUSULA A CLÁUSULA)
───────────────────────────────────────────────────────────── */
export interface ClausulaGenealogia {
  id: string
  clausula: string
  cesareia: string
  niceia325: string
  antioquia341: string
  sirmium357: string
  credoDatado359: string
  nike360: string
  constantinopla381: string
  nota?: string
}

export const genealogiaCredosMeta = {
  id: 'genealogia-credos',
  titulo: 'Genealogia dos credos (cláusula a cláusula)',
  intro:
    'Comparação sinótica das fórmulas que marcam a crise pós-nicena. O eixo não é o aparato filológico do Símbolo de 325 (já acima), mas o que cada sínodo acrescenta, omite ou proíbe em relação a Niceia e entre si. O texto de 381 é o lido na 2ª sessão de Calcedônia (451).',
  colunas: [
    { id: 'cesareia', label: 'Cesareia', fonte: 'Urk. 22 §4 (Eusébio)' },
    { id: 'niceia325', label: 'Niceia 325', fonte: 'Símbolo + anátemas' },
    { id: 'antioquia341', label: 'Antioquia 341', fonte: '2ª fórmula (De syn. 23)' },
    { id: 'sirmium357', label: 'Sirmium 357', fonte: '“Blasfêmia” (De syn. 11)' },
    { id: 'credoDatado359', label: 'Credo Datado', fonte: '22 mai. 359 (De syn. 8)' },
    { id: 'nike360', label: 'Niké / CP 360', fonte: 'De syn. 30' },
    { id: 'constantinopla381', label: 'Constantinopla 381', fonte: 'Calcedônia, 2ª sessão' },
  ] as const,
  legenda: [
    { etapa: '341', marca: 'Acrescenta “imagem exata da ousía” do Pai; evita homoousios.' },
    { etapa: '357', marca: 'Proíbe ousía, homoousios e homoiousios.' },
    { etapa: '359', marca: '“Semelhante em tudo” ao Pai (kata panta hómoios), ainda com residual de ousía sob pressão.' },
    { etapa: '360', marca: '“Semelhante segundo as Escrituras”; expurga ousía da linguagem oficial.' },
    { etapa: '381', marca: 'Retoma a linha nicena e amplia Espírito Santo, Igreja, batismo, ressurreição (→ ✝️ item 40).' },
  ],
}

export const genealogiaCredos: ClausulaGenealogia[] = [
  {
    id: 'pai',
    clausula: 'Deus Pai / criação',
    cesareia: 'Um Deus Pai todo-poderoso, Criador de todas as coisas visíveis e invisíveis.',
    niceia325: 'Um Deus Pai todo-poderoso, criador de todas as coisas visíveis e invisíveis.',
    antioquia341: 'Um Deus Pai todo-poderoso, Criador e Artífice de todas as coisas.',
    sirmium357: 'Um Deus Pai; linguagem de criação mantida, sem metafísica de ousía.',
    credoDatado359: 'Um Deus Pai todo-poderoso, Criador e Artífice.',
    nike360: 'Um Deus Pai todo-poderoso, de quem é nomeado todo o ser.',
    constantinopla381: 'Um Deus Pai todo-poderoso, criador do céu e da terra, de todas as coisas visíveis e invisíveis.',
    nota: '381 explicitamente “céu e terra”; o núcleo monoiteísta permanece estável de Cesareia a 381.',
  },
  {
    id: 'filho-titulo',
    clausula: 'Jesus Cristo — títulos',
    cesareia: 'Um Senhor Jesus Cristo, Verbo de Deus, Deus de Deus, Luz de Luz, Vida de Vida, Filho unigênito, primogênito de toda a criação.',
    niceia325: 'Um Senhor Jesus Cristo, Filho de Deus, unigênito, gerado do Pai.',
    antioquia341: 'Um Senhor Jesus Cristo, Filho unigênito, gerado antes de todos os séculos.',
    sirmium357: 'Filho unigênito, Senhor e Deus, segundo as Escrituras — sem definir o “de quê” da geração.',
    credoDatado359: 'Filho unigênito, gerado antes de todos os séculos.',
    nike360: 'Filho unigênito, Deus de Deus, Luz de Luz — “semelhante ao Pai que o gerou”.',
    constantinopla381: 'Um Senhor Jesus Cristo, Filho unigênito de Deus, nascido do Pai antes de todos os séculos.',
    nota: 'Cesareia já tem “Deus de Deus / Luz de Luz”; Niceia aperta com “da ousía do Pai”. 360 reutiliza títulos e esvazia a ontologia.',
  },
  {
    id: 'geracao-ousia',
    clausula: 'Geração e relação com a ousía do Pai',
    cesareia: 'Gerado do Pai antes de todos os séculos; “Vida de Vida”; sem homoousios.',
    niceia325: 'Gerado do Pai unigênito, isto é, da ousía do Pai; gerado, não feito; homoousios ao Pai.',
    antioquia341: 'Gerado do Pai; “imagem exata da divindade, da ousía, da vontade, do poder e da glória do Pai” — sem homoousios.',
    sirmium357: 'Proíbe-se discutir ousía (e homoousios / homoiousios): “ninguém deve pregar ousía a respeito do Pai, do Filho e do Espírito”.',
    credoDatado359: 'Semelhante ao Pai “em tudo” (kata panta), como dizem as Escrituras e os Padres; ousía ainda mencionada sob reserva.',
    nike360: 'Semelhante ao Pai segundo as Escrituras; o termo ousía deve ser retirado por ser não escriturístico e escândalo ao povo.',
    constantinopla381: 'Luz de Luz, Deus verdadeiro de Deus verdadeiro, gerado, não criado, consubstancial (homoousios) ao Pai.',
    nota: 'Nó da genealogia: Niceia fixa ek tēs ousías + homoousios → 341 fala ousía sem homoousios (“imagem exata”) → 357 proíbe ousía → 359 “semelhante em tudo” → 360 “semelhante segundo as Escrituras” → 381 restaura homoousios.',
  },
  {
    id: 'mediacao',
    clausula: 'Mediação na criação',
    cesareia: 'Por quem tudo veio a ser.',
    niceia325: 'Por quem todas as coisas foram feitas, no céu e na terra.',
    antioquia341: 'Por quem tudo veio a ser — no céu e na terra.',
    sirmium357: 'Por quem são todas as coisas (fórmula breve).',
    credoDatado359: 'Por quem são todas as coisas.',
    nike360: 'Por quem são todas as coisas.',
    constantinopla381: 'Por quem todas as coisas foram feitas.',
    nota: 'Cláusula estável; varia só a ênfase “céu e terra” (Niceia / 341).',
  },
  {
    id: 'economia',
    clausula: 'Encarnação, paixão, ressurreição, parusia',
    cesareia: 'Por nossa salvação encarnou, viveu entre os homens, sofreu, ressuscitou ao terceiro dia, subiu ao Pai; virá em glória julgar vivos e mortos.',
    niceia325: 'Por nós homens e por nossa salvação desceu, encarnou-se e fez-se homem, sofreu, ressuscitou ao terceiro dia, subiu aos céus, virá julgar vivos e mortos.',
    antioquia341: 'Economia completa (encarnação–parusia), formulação antioquena ampla.',
    sirmium357: 'Economia confessada de modo sintético, sem desenvolver a ontologia da união.',
    credoDatado359: 'Desceu, nasceu de Maria Virgem, foi crucificado, ressuscitou, subiu, virá julgar.',
    nike360: 'Economia similar ao Datado; ênfase na conformidade às Escrituras.',
    constantinopla381: 'Desceu dos céus, encarnou do Espírito Santo e de Maria Virgem e se fez homem; crucificado sob Pôncio Pilatos, padeceu e foi sepultado; ressuscitou; subiu; está sentado à direita do Pai; de novo virá em glória; e o seu reino não terá fim.',
    nota: '381 acrescenta: Maria Virgem + Espírito Santo, Pilatos, sepultura, sessio à direita, “reino sem fim” (anti-marceliano). → ✝️ item 40.',
  },
  {
    id: 'espirito',
    clausula: 'Espírito Santo',
    cesareia: 'Cremos também num Espírito Santo (artigo breve, estilo batismal local).',
    niceia325: 'E no Espírito Santo. (apenas isto no corpo do símbolo)',
    antioquia341: 'E no Espírito Santo (ainda breve; o peso está no Filho).',
    sirmium357: 'Espírito Santo como Paráclito; sem teología de processão desenvolvida.',
    credoDatado359: 'Espírito Santo, o Paráclito, Espírito de verdade.',
    nike360: 'Espírito Santo, Paráclito, à semelhança da linha homoiana.',
    constantinopla381: 'O Senhor e doador da vida, que procede do Pai, que com o Pai e o Filho é adorado e glorificado, que falou pelos profetas.',
    nota: 'Maior acréscimo de 381: pneumatologia plena. Niceia 325 deixa o artigo mínimo de propósito.',
  },
  {
    id: 'igreja-fim',
    clausula: 'Igreja, batismo, escatologia',
    cesareia: '— (não no recorte de Urk. 22 §4 como artigos finais litúrgicos)',
    niceia325: '— (não no símbolo de 325; disciplina e fé ficam noutros atos)',
    antioquia341: '—',
    sirmium357: '—',
    credoDatado359: '—',
    nike360: '—',
    constantinopla381: 'Uma santa Igreja católica e apostólica; um batismo para remissão dos pecados; ressurreição dos mortos; vida do século vindouro.',
    nota: 'Bloco eclesiológico-escatológico é acréscimo estrutural de 381 (recepção litúrgica posterior), não de Niceia 325.',
  },
  {
    id: 'anatema-ou-proibicoes',
    clausula: 'Anátemas / proibições terminológicas',
    cesareia: 'Sem anátemas sinodais anexos no texto enviado por Eusébio.',
    niceia325: 'Anátemas: “houve quando não era”; “antes de nascer não era”; “do nada”; outra hipóstase/ousía; Filho criável/mutável.',
    antioquia341: 'Sem o pacote de anátemas nicenos; linha “imagem da ousía” como substituto positivo.',
    sirmium357: 'Não anátema niceno: interdito de ousía / homoousios / homoiousios.',
    credoDatado359: 'Fórmula de compromisso: semelhança “em tudo”; pressão para silenciar a disputa de ousía.',
    nike360: 'Ousía banida da pregação; semelhança “segundo as Escrituras”.',
    constantinopla381: 'Sem os anátemas literais de 325 no texto litúrgico; cân. 1 confirma a fé dos 318 e condena as seitas nomeadas no decreto sinodal.',
    nota: '325 condena teses arianas; 357–360 condenam o vocabulário niceno; 381 restaura a fé nicena por recepção e expansão, não por copiar os anátemas no credo cantado.',
  },
]

export const genealogiaCredosResumoPorColuna: Record<string, string> = {
  cesareia: 'Credo local de Eusébio; base batismal sem homoousios.',
  niceia325: 'ek tēs ousías + homoousios + anátemas antiarianos.',
  antioquia341: '“Imagem exata da ousía”; evita homoousios.',
  sirmium357: 'Proíbe ousía e os compostos homo-*.',
  credoDatado359: 'hómoios kata panta (“semelhante em tudo”).',
  nike360: 'hómoios kata tas graphas; ousía expulsa.',
  constantinopla381: 'Homoousios restaurado + artigos do Espírito e da Igreja (→ item 40).',
}