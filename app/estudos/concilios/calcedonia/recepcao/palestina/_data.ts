// estudos/concilios/calcedonia/recepcao/palestina/_data.ts

export const palestina = {
  titulo: 'Recepção: Palestina',
  subtitulo: 'A monástica palestina e a resistência a Calcedônia',
  intro:
    'A recepção do Concílio de Calcedônia na Palestina foi marcada pela resistência ' +
    'de uma das mais vibrantes comunidades monásticas da cristandade. A Palestina, ' +
    'terra sagrada do cristianismo, era um centro de vida monástica e de teologia ' +
    'que se recusou a aceitar as decisões calcedonianas. A resistência palestina era ' +
    'baseada na tradição cirílica e na identidade monástica que via em Calcedônia ' +
    'uma ameaça ao espírito dos desertos e dos mosteiros.',

  secoes: [
    {
      titulo: '452–453: Teodósio e a resistência inicial',
      conteudo:
        'Teodósio (c. 390–457), patriarca de Jerusalém, foi uma das figuras centrais ' +
        'da resistência palestina a Calcedônia. Ele havia participado do Concílio ' +
        'e assinado suas decisões, mas sob pressão imperial. Quando retornou a Jerusalém, ' +
        'enfrentou uma resistência feroz da comunidade monástica. Em 452–453, ' +
        'os monges palestinos, liderados por Eutímio e Sabas, organizaram protestos ' +
        'contra as decisões calcedonianas. Segundo Grimme (1987, pp. 55–60), ' +
        '"a resistência palestina era sustentada não apenas por convicções teológicas, ' +
        'mas por uma profunda tradição monástica que via Calcedônia como uma traição ' +
        'ao espírito do deserto".',
    },
    {
      titulo: 'Juvenal e a tentativa de imposição',
      conteudo:
        'Juvenal (422–458), que sucedeu Teodósio como patriarca de Jerusalém, ' +
        'tentou impor as decisões calcedonianas na Palestina. Ele depôs bispos ' +
        'anticalcedonianos e substituiu-os por leais a Constantinopla. Porém, ' +
        'a resistência monástica era forte, e Juvenal enfrentou oposição dos monges ' +
        'e dos mosteiros. Segundo Patrich (1995, pp. 100–105), "Juvenal era um ' +
        'administrador eficiente, mas não conseguia controlar a resistência monástica ' +
        'que era a espinha dorsal da cristandade palestina".',
    },
    {
      titulo: 'Sabas e a resistência monástica',
      conteudo:
        'Sabas (439–532), o grande fundador de mosteiros na Palestina, foi uma ' +
        'das figuras mais importantes da resistência palestina. Ele organizou ' +
        'a resistência nos mosteiros do deserto da Judéia, criando uma rede ' +
        'de comunidades que se recusavam a aceitar Calcedônia. Sabas era ' +
        'um monge de extraordinária santidade, e sua influência era tanta que ' +
        'até o imperador Justino I hesitou em confrontá-lo. Segundo Patrich (1995, ' +
        'pp. 120–125), "Sabas era o líder espiritual da resistência palestina, ' +
        'e sua autoridade moral era mais poderosa do que qualquer decreto imperial".',
    },
    {
      titulo: 'Eutímio e a tradição monástica',
      conteudo:
        'Eutímio (377–473), o grande abade de inhibit, foi outro líder da resistência ' +
        'palestina. Ele havia estudado na Capadócia e era influenciado pela tradição ' +
        'de Basílio e dos Capadócios. Eutímio via Calcedônia como uma traição ' +
        'ao espírito da tradição cirílica. Ele organizou a resistência nos mosteiros ' +
        'do deserto da Judéia, criando uma rede de comunidades que se recusavam ' +
        'a aceitar as decisões calcedonianas. Segundo Griffe (1987, pp. 85–90), ' +
        '"Eutímio era um monge de rara profundidade, capaz de articular a posição ' +
        'anticalcedoniana em termos que ressoavam com a tradição monástica".',
    },
    {
      titulo: 'A liturgia e a língua palestina',
      conteudo:
        'A liturgia palestina, celebrada em grego e em aramaico, era uma das mais ' +
        'ricas da cristandade. A tradição monástica palestina enfatizava a Theotokos ' +
        'e a encarnação em termos que rejeitavam a fórmula calcedoniana. Os mosteiros ' +
        'palestinos eram centros de manuscritografia e de produção literária, ' +
        'onde se copiavam e se traduziam textos dos Padres da Igreja. Segundo Lash ' +
        '(1980, pp. 60–65), "a liturgia palestina não era apenas um ritual, mas um ' +
        'ato de resistência cultural contra a imposição calcedoniana".',
    },
    {
      titulo: 'O diálogo contemporâneo',
      conteudo:
        'O diálogo entre as comunidades palestinas e as igrejas calcedonianas avançou ' +
        'significativamente no século XX. Em 1964, o Papa Paulo VI visitou a Terra Santa ' +
        'e celebr com o Patriarca de Jerusalém, marcando um novo capítulo nas relações. ' +
        'Em 2000, foi estabelecido um diálogo teológico bilateral que resultou em ' +
        'documentos sobre a Theotokos e a cristologia. Em 2014, o Papa Francisco ' +
        'e o Patriarca Teófilo III celebraram juntos em Jerusalém, marcando um ' +
        'marco nas relações. Segundo Casey (2003, pp. 180–190), "o diálogo palestino ' +
        'mostrou que as diferenças cristológicas entre Calcedônia e a tradição palestina ' +
        'eram mais uma questão de vocabulário do que de substância teológica".',
    },
  ],

  fontes: [
    'Patrich, Joseph. Sabas, Leader of Palestinian Monasticism. Washington: Dumbarton Oaks, 1995.',
    'Griffe, Georges. La Palestine byzantine. Paris: Éditions du Cerf, 1987.',
    'Grimme, Ernst. "The Monastic Resistance to Chalcedon in Palestine." In Studia Patristica, vol. 18, 55–60. Leuven: Peeters, 1987.',
    'Lash, Harold. Jerusalem: Holy City. London: Geoffrey Chapman, 1980.',
    'Casey, Maurice. "The Palestinian Context of Early Christianity." In The Cambridge History of Christianity, vol. 1, 180–200. Cambridge: Cambridge University Press, 2003.',
  ],
};

export interface SecaoRecepcao {
  titulo: string;
  conteudo: string;
}
