/* ─────────────────────────────────────────────────────────────
   DOSSIÊ DOCUMENTAL: 2C. DOCUMENTOS OFICIAIS EMANADOS DE NICEIA I
   Fontes críticas:
   - Opitz, Urkunden zur Geschichte des Arianischen Streites (Urk. 23 e 24)
   - Sócrates Escolástico, Historia Ecclesiastica I.9
   - Teodoreto de Ciro, Historia Ecclesiastica I.9
   - Atanásio de Alexandria, De decretis 36 / Apologia contra Arianos 71
───────────────────────────────────────────────────────────── */

export const cartaSinodalEgipcios = {
  id: 'carta-sinodal-egipcios',
  titulo: 'Carta Sinodal do Concílio de Niceia aos bispos do Egito, Líbia e Pentápole',
  numeroOpitz: 'Urk. 23',
  fontesAntigas: [
    'Sócrates Escolástico, Historia Ecclesiastica I.9',
    'Teodoreto de Ciro, Historia Ecclesiastica I.9',
    'Atanásio de Alexandria, De decretis Nicaenae Synodi 36',
    'Gelásio de Cízico, Syntagma II.34'
  ],
  termoChaveGrego: 'χειροτονίᾳ μυστικωτέρᾳ βεβαιωθέντας (cheirotonia mystikōtera bebaiōthentas)',
  introducao:
    'A Carta Sinodal aos Egípcios é o único documento oficial direto e inconteste emanado do próprio plenário dos Padres de Niceia que sobreviveu na íntegra. Foi enviada à Igreja de Alexandria e aos bispos do Egito, Líbia e Pentápole para promulgar formalmente as decisões doutrinárias, disciplinares e pascais do concílio.',
  
  textoIntegralPortugues: [
    'Os bispos reunidos em Niceia, constituindo o grande e santo sínodo, à santa e grande Igreja dos Alexandrinos e aos amados irmãos espalhados pelo Egito, Líbia e Pentápole, saudações no Senhor.',
    'Sendo que, pela graça de Deus e pelo amor de Nosso Senhor Jesus Cristo, o imperador Constantino, amigo de Deus, nos convocou de diversas províncias e cidades para nos reunirmos em Niceia, pareceu absolutamente necessário que uma carta vos fosse enviada em nome de todo o sínodo, para que saibais o que foi proposto, examinado, decretado e estabelecido.',
    'Em primeiro lugar, examinou-se a impiedade e a iniquidade de Ário e de seus seguidores, na presença de nosso imperador Constantino, amado de Deus. E, por consenso unânime, decretou-se que a sua doutrina ímpia seja anatemizada, bem como as palavras e expressões blasfemas que ele usava para ultrajar o Filho de Deus, dizendo que "Ele veio do nada", que "Antes de ser gerado Ele não existia", que "Houve um tempo em que Ele não era", e que por seu livre arbítrio Ele era capaz de virtude ou de vício. Tudo isso o santo sínodo anatematizou, não suportando sequer ouvir essa doutrina ímpia e insensata e tamanha loucura.',
    'Das coisas que lhe dizem respeito, vós já ouvistes ou ouvireis o desfecho, para que não pareçamos insultar um homem que já recebeu a paga condigna de seus próprios pecados. A tal ponto a sua impiedade prevaleceu que ele arrastou consigo para a perdição Teona de Marmárica e Secundo de Ptolemaida, os quais sofreram a mesma sentença de condenação.',
    'Mas, uma vez que a graça de Deus nos libertou dessa ímpia heresia e blasfêmia, e daqueles homens que ousaram causar divisão e discórdia entre um povo que vivia em paz, restavam ainda as decisões a respeito da contumácia de Melécio e daqueles que por ele foram ordenados. Declaramos a vós, amados irmãos, qual foi a decisão do sínodo sobre esta questão.',
    'Movido de humanidade para com Melécio — embora, rigorosamente falando, ele não merecesse perdão —, o sínodo determinou que ele permaneça em sua própria cidade (Licópolis), mas sem qualquer autoridade de jurisdição ou de ordenar clérigos, e que não vá a nenhuma outra cidade ou região sob esse pretexto, conservando apenas o título nu de bispo.',
    'Quanto àqueles que foram por ele estabelecidos como clérigos, uma vez confirmados por uma ordenação/imposição de mãos mais sagrada e mística (cheirotonia mystikōtera bebaiōthentas), eles poderão ser admitidos à comunhão sob a condição de manterem sua dignidade e ministério, mas ocupando o segundo lugar em todos os aspectos em relação a todos os clérigos de cada diocese e igreja que foram previamente ordenados por nosso amado colega Alexandre.',
    'Eles não terão autoridade para promover os candidatos de sua escolha, nem de propor nomes, nem de fazer qualquer coisa sem o consentimento do bispo da Igreja Católica sob a autoridade de Alexandre. Contudo, se algum clérigo da Igreja Católica falecer, ser-lhes-á permitido suceder ao lugar do falecido, desde que sejam julgados dignos e o povo os escolha, com a confirmação e aprovação do bispo de Alexandria.',
    'A mesma regra aplica-se a Melécio pessoalmente. Todavia, por causa de sua contumácia habitual e da precipitação de sua índole, o sínodo decidiu não lhe conceder qualquer autoridade ou poder, para que não venha a causar novamente as mesmas perturbações.',
    'Anunciamos-vos também as boas-novas sobre a harmonia a respeito da nossa santíssima Páscoa, pois, mediante as vossas orações, esta questão foi igualmente resolvida. Todos os irmãos do Oriente que anteriormente seguiam o costume dos judeus agora celebrarão a Páscoa em unissonância com os romanos, convosco e com todos nós que desde o princípio a guardamos juntamente convosco.',
    'Alegrando-vos, pois, por essas felizes realizações, pela paz e harmonia universais e pelo extirpar de toda heresia, acolhei com maior honra e amor o vosso bispo e nosso colega Alexandre, que nos alegrou com sua presença e que, em idade avançada, suportou imenso trabalho para que a paz fosse restabelecida entre vós. Orai por todos nós, para que as nossas decisões permaneçam firmes e inabaláveis, estabelecidas pela vontade do Deus Todo-Poderoso e de seu Filho Jesus Cristo, no Espírito Santo. Amém.'
  ]
}

export interface BispoMeleciano {
  numero: number
  nome: string
  seEpiscopal: string
  regiao: string
  
}

export const breviariumMelitii = {
  id: 'breviarium-melitii',
  titulo: 'O Breviarium Melitii — Memorial e lista dos bispos melecianos entregues a Alexandre',
  numeroOpitz: 'Urk. 24',
  fonteAntiga: 'Atanásio de Alexandria, Apologia contra Arianos (Apologia secunda) 71',
  contextoHistorico:
    'Pouco tempo após o encerramento do Concílio de Niceia (c. 325/326), Melécio de Licópolis cumpriu a determinação conciliar e entregou ao Patriarca Alexandre de Alexandria um memorando oficial (<em>Breviarium</em>) contendo a lista de suas ordenações paralelas no Egito. O documento foi preservado por Atanásio em sua obra polêmica para provar a duplicidade meleciana posterior.',
  
  listaBispos: [
    { numero: 1, nome: 'Melécio', seEpiscopal: 'Licópolis (Asyut)', regiao: 'Alto Egito (Tebaida)' },
    { numero: 2, nome: 'Melécio', seEpiscopal: 'Sebastopol', regiao: 'Egito' },
    { numero: 3, nome: 'João', seEpiscopal: 'Dióspolis (Lúcifer)', regiao: 'Tebaida' },
    { numero: 4, nome: 'Pinfestos', seEpiscopal: 'Hermópolis Magna', regiao: 'Tebaida' },
    { numero: 5, nome: 'Gênios', seEpiscopal: 'Antínoo (Antinoópolis)', regiao: 'Tebaida' },
    { numero: 6, nome: 'Alexandre', seEpiscopal: 'Cynopolis Superior', regiao: 'Tebaida' },
    { numero: 7, nome: 'Sócio', seEpiscopal: 'Hypsele', regiao: 'Tebaida' },
    { numero: 8, nome: 'Atanásio', seEpiscopal: 'Alabastrine', regiao: 'Tebaida' },
    { numero: 9, nome: 'Cornélio', seEpiscopal: 'Ptolemaida de Tebaida', regiao: 'Tebaida' },
    { numero: 10, nome: 'Perpétuo', seEpiscopal: 'Oxyrhynchus', regiao: 'Arsinoita/Tebaida' },
    { numero: 11, nome: 'Apolônio', seEpiscopal: 'Oxyrhynchus (segunda sé)', regiao: 'Tebaida' },
    { numero: 12, nome: 'Teodoro', seEpiscopal: 'Coptos', regiao: 'Tebaida' },
    { numero: 13, nome: 'Heliodoro', seEpiscopal: 'Cynopolis Inferior', regiao: 'Baixo Egito' },
    { numero: 14, nome: 'Caius', seEpiscopal: 'Thmuis', regiao: 'Delta do Nilo' },
    { numero: 15, nome: 'Marcos', seEpiscopal: 'Pharbitus', regiao: 'Delta do Nilo' },
    { numero: 16, nome: 'Athanasios', seEpiscopal: 'Busiris', regiao: 'Delta do Nilo' },
    { numero: 17, nome: 'Tyranos', seEpiscopal: 'Bubastis', regiao: 'Delta do Nilo' },
    { numero: 18, nome: 'Plusianos', seEpiscopal: 'Lychnos', regiao: 'Delta do Nilo' },
    { numero: 19, nome: 'Nemesion', seEpiscopal: 'Sais', regiao: 'Delta do Nilo' },
    { numero: 20, nome: 'Proba', seEpiscopal: 'Athribis', regiao: 'Delta do Nilo' },
    { numero: 21, nome: 'Hermæon', seEpiscopal: 'Cynopolis', regiao: 'Delta do Nilo' },
    { numero: 22, nome: 'Isaque', seEpiscopal: 'Cleopatris (Suez)', regiao: 'Egito/Mar Vermelho' },
    { numero: 23, nome: 'Eutychios', seEpiscopal: 'Sebennytos', regiao: 'Delta do Nilo' },
    { numero: 24, nome: 'Ision', seEpiscopal: 'Athribis (segunda sé)', regiao: 'Delta do Nilo' },
    { numero: 25, nome: 'Serapion', seEpiscopal: 'Naucratis', regiao: 'Delta do Nilo' },
    { numero: 26, nome: 'Kolluthos', seEpiscopal: 'Tamiathis (Damietta)', regiao: 'Delta do Nilo' },
    { numero: 27, nome: 'Pelágio', seEpiscopal: 'Lucium', regiao: 'Líbia/Pentápole' },
    { numero: 28, nome: 'Peter', seEpiscopal: 'Gaza', regiao: 'Palestina' },
    { numero: 29, nome: 'Amônio', seEpiscopal: 'Dio', regiao: 'Líbia' }
  ] as const
}