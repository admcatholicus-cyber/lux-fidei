// Loader que resolve o conteúdo de um livro pelo seu slug.
// Usa importações dinâmicas para que cada livro seja tree-shakeável.
import type { BookData } from './types';

type BookModule = Record<string, unknown>;
type Loader = () => Promise<BookModule>;

const loaders: Record<string, Loader> = {
  "genesis":           () => import('./genesis'),
  "exodo":             () => import('./exodo'),
  "levitico":          () => import('./levitico'),
  "numeros":           () => import('./numeros'),
  "deuteronomio":      () => import('./deuteronomio'),
  "josue":             () => import('./josue'),
  "juizes":            () => import('./juizes'),
  "rute":              () => import('./rute'),
  "1reis":             () => import('./1reis'),
  "2reis":             () => import('./2reis'),
  "3reis":             () => import('./3reis'),
  "4reis":             () => import('./4reis'),
  "1paralipomenos":    () => import('./1paralipomenos'),
  "2paralipomenos":    () => import('./2paralipomenos'),
  "1esdras":           () => import('./1esdras'),
  "2esdras":           () => import('./2esdras'),
  "tobias":            () => import('./tobias'),
  "judite":            () => import('./judite'),
  "ester":             () => import('./ester'),
  "jo":                () => import('./jo'),
  "salmos":            () => import('./salmos'),
  "proverbios":        () => import('./proverbios'),
  "eclesiastes":       () => import('./eclesiastes'),
  "cantico":           () => import('./cantico'),
  "sabedoria":         () => import('./sabedoria'),
  "eclesiastico":      () => import('./eclesiastico'),
  "isaias":            () => import('./isaias'),
  "jeremias":          () => import('./jeremias'),
  "lamentacoes":       () => import('./lamentacoes'),
  "baruc":             () => import('./baruc'),
  "ezequiel":          () => import('./ezequiel'),
  "daniel":            () => import('./daniel'),
  "oseias":            () => import('./oseias'),
  "joel":              () => import('./joel'),
  "amos":              () => import('./amos'),
  "abdias":            () => import('./abdias'),
  "jonas":             () => import('./jonas'),
  "miqueias":          () => import('./miqueias'),
  "naum":              () => import('./naum'),
  "habacuc":           () => import('./habacuc'),
  "sofonias":          () => import('./sofonias'),
  "ageu":              () => import('./ageu'),
  "zacarias":          () => import('./zacarias'),
  "malaquias":         () => import('./malaquias'),
  "1macabeus":         () => import('./1macabeus'),
  "2macabeus":         () => import('./2macabeus'),
  "mateus":            () => import('./mateus'),
  "marcos":            () => import('./marcos'),
  "lucas":             () => import('./lucas'),
  "joao":              () => import('./joao'),
  "atos":              () => import('./atos'),
  "romanos":           () => import('./romanos'),
  "1corintios":        () => import('./1corintios'),
  "2corintios":        () => import('./2corintios'),
  "galatas":           () => import('./galatas'),
  "efesios":           () => import('./efesios'),
  "filipenses":        () => import('./filipenses'),
  "colossenses":       () => import('./colossenses'),
  "1tessalonicenses":  () => import('./1tessalonicenses'),
  "2tessalonicenses":  () => import('./2tessalonicenses'),
  "1timoteo":          () => import('./1timoteo'),
  "2timoteo":          () => import('./2timoteo'),
  "tito":              () => import('./tito'),
  "filemon":           () => import('./filemon'),
  "hebreus":           () => import('./hebreus'),
  "tiago":             () => import('./tiago'),
  "1pedro":            () => import('./1pedro'),
  "2pedro":            () => import('./2pedro'),
  "1joao":             () => import('./1joao'),
  "2joao":             () => import('./2joao'),
  "3joao":             () => import('./3joao'),
  "judas":             () => import('./judas'),
  "apocalipse":        () => import('./apocalipse'),
};

/** Verifica se um valor tem a forma de BookData */
function isBookData(value: unknown): value is BookData {
  return (
    value !== null &&
    typeof value === 'object' &&
    'slug' in value &&
    'pages' in value &&
    Array.isArray((value as BookData).pages)
  );
}

/** Extrai o BookData de um módulo importado dinamicamente */
function extractBookData(mod: BookModule, slug: string): BookData | null {
  // 1. Tenta o export canônico: `<slug>Book` (ex: "genesisBook")
  const canonical = `${slug}Book`;
  if (isBookData(mod[canonical])) return mod[canonical] as BookData;

  // 2. Tenta o export `default`
  if (isBookData(mod['default'])) return mod['default'] as BookData;

  // 3. Fallback: primeiro export válido
  for (const value of Object.values(mod)) {
    if (isBookData(value)) return value as BookData;
  }

  return null;
}

export async function loadBook(slug: string): Promise<BookData | null> {
  const load = loaders[slug];
  if (!load) return null;

  try {
    const mod = await load();
    return extractBookData(mod, slug);
  } catch (err) {
    console.error(`[loadBook] Falha ao carregar livro "${slug}":`, err);
    return null;
  }
}

export const bookSlugs = Object.keys(loaders) as Array<keyof typeof loaders>;