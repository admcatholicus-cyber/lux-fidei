/**
 * Formatadores compartilhados por leitores e listas.
 */

const MESES_PT: Record<number, string> = {
  1: "janeiro",
  2: "fevereiro",
  3: "março",
  4: "abril",
  5: "maio",
  6: "junho",
  7: "julho",
  8: "agosto",
  9: "setembro",
  10: "outubro",
  11: "novembro",
  12: "dezembro",
};

/**
 * "380-01-01" → "1 de janeiro de 380"
 */
export function formatarDataISO(iso: string | null): string | null {
  if (!iso) return null;
  const [ano, mes, dia] = iso.split("-").map(Number);
  if (!ano || !mes || !dia) return null;
  return `${dia} de ${MESES_PT[mes]} de ${ano}`;
}

/**
 * Numeração romana simples (I–L).
 */
export function romano(n: number): string {
  const map: Array<[number, string]> = [
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let resto = n;
  let out = "";
  for (const [valor, simbolo] of map) {
    while (resto >= valor) {
      out += simbolo;
      resto -= valor;
    }
  }
  return out;
}

/**
 * Slug seguro a partir de texto (para URLs de tema).
 */
export function slugify(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Capitaliza primeira letra.
 */
export function capitalizar(texto: string): string {
  if (!texto) return texto;
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

/* ── Referências bíblicas EN → PT-BR ── */

const REFERENCIAS_BIBLICAS: Array<[RegExp, string]> = [
  [/Judges\s+(\d+:\d+)/gi, "Jz $1"],
  [/1\s*Corinthians\s+(\d+:\d+)/gi, "1Cor $1"],
  [/2\s*Corinthians\s+(\d+:\d+)/gi, "2Cor $1"],
  [/Numbers\s+(\d+:\d+)/gi, "Nm $1"],
  [/Luke\s+(\d+:\d+)/gi, "Lc $1"],
  [/John\s+(\d+:\d+)/gi, "Jo $1"],
  [/Matthew\s+(\d+:\d+)/gi, "Mt $1"],
  [/Isaiah\s+(\d+:\d+)/gi, "Is $1"],
  [/Song\s+of\s+Songs\s+(\d+:\d+)/gi, "Ct $1"],
  [/Deuteronomy\s+(\d+:\d+)/gi, "Dt $1"],
  [/Sirach\s+(\d+:\d+)/gi, "Eclo $1"],
  [/Genesis\s+(\d+:\d+)/gi, "Gn $1"],
  [/Exodus\s+(\d+:\d+)/gi, "Ex $1"],
  [/Leviticus\s+(\d+:\d+)/gi, "Lv $1"],
  [/Deuteronomy\s+(\d+:\d+)/gi, "Dt $1"],
  [/Psalms?\s+(\d+:\d+)/gi, "Sl $1"],
  [/Proverbs\s+(\d+:\d+)/gi, "Pr $1"],
  [/Ecclesiastes\s+(\d+:\d+)/gi, "Ecl $1"],
  [/Jeremiah\s+(\d+:\d+)/gi, "Jr $1"],
  [/Ezekiel\s+(\d+:\d+)/gi, "Ez $1"],
  [/Daniel\s+(\d+:\d+)/gi, "Dn $1"],
  [/Romans\s+(\d+:\d+)/gi, "Rm $1"],
  [/Galatians\s+(\d+:\d+)/gi, "Gl $1"],
  [/Ephesians\s+(\d+:\d+)/gi, "Ef $1"],
  [/Philippians\s+(\d+:\d+)/gi, "Fl $1"],
  [/Colossians\s+(\d+:\d+)/gi, "Cl $1"],
  [/1\s*Thessalonians\s+(\d+:\d+)/gi, "1Ts $1"],
  [/2\s*Thessalonians\s+(\d+:\d+)/gi, "2Ts $1"],
  [/1\s*Timothy\s+(\d+:\d+)/gi, "1Tm $1"],
  [/2\s*Timothy\s+(\d+:\d+)/gi, "2Tm $1"],
  [/Titus\s+(\d+:\d+)/gi, "Tt $1"],
  [/Hebrews\s+(\d+:\d+)/gi, "Hb $1"],
  [/James\s+(\d+:\d+)/gi, "Tg $1"],
  [/1\s*Peter\s+(\d+:\d+)/gi, "1Pd $1"],
  [/2\s*Peter\s+(\d+:\d+)/gi, "2Pd $1"],
  [/1\s*John\s+(\d+:\d+)/gi, "1Jo $1"],
  [/2\s*John\s+(\d+:\d+)/gi, "2Jo $1"],
  [/3\s*John\s+(\d+:\d+)/gi, "3Jo $1"],
  [/Jude\s+(\d+:\d+)/gi, "Jd $1"],
  [/Revelation\s+(\d+:\d+)/gi, "Ap $1"],
  [/Acts\s+(\d+:\d+)/gi, "At $1"],
  [/1\s*Samuel\s+(\d+:\d+)/gi, "1Sm $1"],
  [/2\s*Samuel\s+(\d+:\d+)/gi, "2Sm $1"],
  [/1\s*Kings\s+(\d+:\d+)/gi, "1Rs $1"],
  [/2\s*Kings\s+(\d+:\d+)/gi, "2Rs $1"],
  [/1\s*Chronicles\s+(\d+:\d+)/gi, "1Cr $1"],
  [/2\s*Chronicles\s+(\d+:\d+)/gi, "2Cr $1"],
  [/Ezra\s+(\d+:\d+)/gi, "Ed $1"],
  [/Nehemiah\s+(\d+:\d+)/gi, "Ne $1"],
  [/Job\s+(\d+:\d+)/gi, "Jó $1"],
];

/* ── Versículos em inglês que vazaram para o campo PT ── */

const VERSICULOS_INGLES: Array<[string, string]> = [
  [
    "They drank of that rock that followed them, and that rock was Christ.",
    "Beberam daquela rocha espiritual que os acompanhava, e essa rocha era Cristo.",
  ],
  [
    "For the people lusted an evil lust, and said, Who shall give us flesh to eat?",
    "Pois o povo entregou-se a um mau desejo e disse: Quem nos dará carne a comer?",
  ],
  [
    "I have come to send fire upon the earth.",
    "Vim lançar fogo sobre a terra.",
  ],
  [
    "had refused the fountain of living water,",
    "haviam recusado a fonte de água viva,",
  ],
  [
    "I will command My clouds that they rain not upon that vineyard.",
    "Ordenarei às minhas nuvens que não chovam sobre essa vinha.",
  ],
  [
    "He came down like rain upon a fleece, and like drops that drop upon the earth.",
    "Ele desceu como a chuva sobre a relva, como as gotas que regam a terra.",
  ],
  [
    "Are you for us, or for our adversaries?",
    "És dos nossos ou dos nossos adversários?",
  ],
  [
    "For the harvest is plenteous, but the labourers are few;",
    "A colheita é grande, mas os trabalhadores são poucos;",
  ],
  [
    "the Son of Man came not to be ministered unto, but to minister.",
    "o Filho do Homem não veio para ser servido, mas para servir.",
  ],
  [
    "If I wash not your feet you will have no part with Me.",
    "Se eu não te lavar, não terás parte comigo.",
  ],
  [
    "By night I have put off my coat, how shall I put it on? I have washed my feet, how shall I defile them?",
    "Já me despi da minha túnica; como hei de vesti-la outra vez? Já lavei os meus pés; como os hei de sujar?",
  ],
  [
    "You call Me Master and Lord, and you do well, for so I am. If, then, I the Lord and Master have washed your feet, you ought also to wash one another's feet.",
    "Vós me chamais Mestre e Senhor, e dizeis bem, porque eu o sou. Se eu, pois, sendo Senhor e Mestre, vos lavei os pés, vós deveis também lavar os pés uns aos outros.",
  ],
  [
    "What I do you know not now, but shall know hereafter.",
    "O que eu faço, não o sabes agora, mas compreendê-lo-ás mais tarde.",
  ],
];

/**
 * Sanitiza texto em português: converte referências bíblicas
 * residuais em inglês para formato PT-BR, traduz versículos
 * que vazaram em inglês dentro de citações destacadas e
 * padroniza todas as referências para o padrão católico brasileiro
 * com parênteses e vírgula como separador.
 */
export function formatarTextoPortugues(texto: string): string {
  if (!texto) return "";

  let resultado = texto;

  // 1. Substituições de livros bíblicos EN → PT
  for (const [padrao, substituicao] of REFERENCIAS_BIBLICAS) {
    resultado = resultado.replace(padrao, substituicao);
  }

  // 2. Tradução de versículos inteiros que vazaram em inglês
  for (const [ingles, portugues] of VERSICULOS_INGLES) {
    resultado = resultado.replace(ingles, portugues);
  }

  // 3. Referências soltas sem parênteses: "Mt 20:28" → "(Mt 20,28)"
  const livros =
    "(?:1Rs|2Rs|1Cr|2Cr|1Sm|2Sm|1Cor|2Cor|1Ts|2Ts|1Tm|2Tm|1Pd|2Pd|1Jo|2Jo|3Jo|Jz|Nm|Lc|Jo|Mt|Is|Ct|Dt|Eclo|Jó|Gn|Ex|Lv|Sl|Pr|Ecl|Jr|Ez|Dn|Rm|Gl|Ef|Fl|Cl|Tt|Hb|Tg|Jd|Ap|At|Ed|Ne)";
  const regexSolta = new RegExp(
    `(?<!\\w)(\\d?\\.?\\s*${livros})\\s+(\\d+):(\\d+(?:-\\d+)?)\\b(?!\\))`,
    "g",
  );
  resultado = resultado.replace(regexSolta, "($1 $2,$3)");

  // 4. Referências entre parênteses ainda com dois-pontos: "(Mt 20:28)" → "(Mt 20,28)"
  const regexParenteses = new RegExp(
    `\\((\\d?\\.?\\s*${livros})\\s+(\\d+):(\\d+(?:-\\d+)?)\\)`,
    "g",
  );
  resultado = resultado.replace(regexParenteses, "($1 $2,$3)");

  return resultado;
}
