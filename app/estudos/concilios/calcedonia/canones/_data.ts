// estudos/concilios/calcedonia/canones/_data.ts

import { canones as canonesPT, notaIntrodutoria, analiseCanon28 } from '../_data/canones';

export { notaIntrodutoria, analiseCanon28 };

export interface CanonTrilingue {
  numero: number;
  titulo: string;
  tema: string;
  latim: string;
  pt: string;
  grego?: string;
  observacao?: string;
  recepcaoDionysiana?: string;
  recepcaoHispana?: string;
}

const stubLatim = (n: number): string =>
  `A VERIFICAR: latim do Cânon ${n} em PL67 Dionysiana`;

export const canonesTrilingues: CanonTrilingue[] = canonesPT.map((c) => ({
  numero: c.numero,
  titulo: c.titulo,
  tema: c.tema,
  latim: stubLatim(c.numero),
  pt: c.texto,
  observacao: c.observacao,
  recepcaoDionysiana:
    c.numero <= 27
      ? `Presente na Coleção Dionysiana (PL 67), cânones 1–27.`
      : undefined,
  recepcaoHispana:
    c.numero <= 27
      ? `Presente na Coleção Hispana (PL 84), cânones 1–27.`
      : undefined,
}));

export const canon28Especial = {
  titulo: 'Cânon 28 — Discussão especial',
  subsecoes: [
    {
      titulo: 'Protesto dos legados papais',
      conteudo:
        'Os legados papais Paschasinus, Lucêncio e Bonifácio estiveram ausentes da Sessão 16 ' +
        '(31 de outubro de 451), na qual o Cânon 28 foi aprovado. Na Sessão 17 (1º de novembro), ' +
        'protestaram formalmente contra a aprovação, exigindo a leitura pública do cânon 6 de ' +
        'Niceia na versão latina interpolada, que trazia o preâmbulo "Ecclesia Romana semper ' +
        'habuit primatum". Anatólio de Constantinopla respondeu que nada havia sido feito contra ' +
        'Roma.',
    },
    {
      titulo: 'Rejeição por Leão Magno (Epp. 104–106)',
      conteudo:
        'Leão Magno recebeu as actas ao final de 451 ou início de 452 e reagiu com três cartas: ' +
        'Epistula 104 a Marciano, Epistula 105 a Pulquéria e Epistula 106 a Anatólio. Nelas Leão: ' +
        '(1) aprova integralmente as decisões dogmáticas de Calcedônia; (2) anula formalmente o ' +
        'Cânon 28, declarando-o nulo por falta de autoridade e por violar os cânones de Niceia; ' +
        '(3) reafirma que a primazia de Roma vem de Pedro, não da grandeza da cidade — "aliud est ' +
        'ratio rerum saecularium, aliud divinarum".',
    },
    {
      titulo: 'Isa presbeia (ἰσοπρεσβεία)',
      conteudo:
        'A expressão grega isa presbeia ("privilégios iguais" ou "igualdade de honra") é o ponto ' +
        'nevrálgico do Cânon 28. O cânon declara que Constantinopla deve ter "os mesmos privilégios ' +
        'que a antiga Roma" por ser a Nova Roma — cidade imperial e sede do senado. Para Leão, isso ' +
        'era inaceitável porque equiparava a primazia petrina romana a um privilégio meramente ' +
        'político. Para o Oriente, a isa presbeia era uma consequência natural da correspondência ' +
        'entre ordem eclesiástica e ordem política. Esta divergência hermenêutica persiste até hoje.',
    },
  ],
};
