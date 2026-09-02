
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'app', 'santos', '_content');
const OUT_FILE = path.join(
  ROOT,
  'app',
  'santos',
  '_lib',
  'santos-manifest.generated.ts',
);

type MetaShape = {
  nome?: string;
  categoria?: string;
  slug?: string;
  abas?: Array<{ slug?: string; id?: string }>;
};

function log(msg: string) {
  console.log(`[santos-manifest] ${msg}`);
}

async function listMetaFiles(dir: string): Promise<string[]> {
  const out: string[] = [];

  async function walk(current: string) {
    let entries;
    try {
      entries = await fs.readdir(current, { withFileTypes: true });
    } catch (err) {
      log(`ERRO ao ler: ${current} → ${err}`);
      return;
    }

    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (entry.name.startsWith('.')) continue;
        await walk(full);
      } else if (
        entry.isFile() &&
        (entry.name === 'meta.ts' ||
          entry.name === 'meta.tsx' ||
          entry.name === 'meta.js')
      ) {
        out.push(full);
      }
    }
  }

  await walk(dir);
  return out;
}

function parseMetaFromSource(source: string): MetaShape | null {
  const nome = source.match(/nome:\s*['"`]([^'"`]+)['"`]/)?.[1];
  const categoria = source.match(/categoria:\s*['"`]([^'"`]+)['"`]/)?.[1];
  const slug = source.match(/slug:\s*['"`]([^'"`]+)['"`]/)?.[1];

  const abasStart = source.search(/abas\s*:\s*\[/);
  let primeiraAba: string | undefined;

  if (abasStart >= 0) {
    const fromAbas = source.slice(abasStart, abasStart + 3000);
    primeiraAba =
      fromAbas.match(/slug\s*:\s*['"`]([^'"`]+)['"`]/)?.[1] ??
      fromAbas.match(/id\s*:\s*['"`]([^'"`]+)['"`]/)?.[1];
  }

  if (!primeiraAba) return null;

  return {
    nome,
    categoria,
    slug,
    abas: [{ slug: primeiraAba }],
  };
}

function deriveCategoriaSlug(
  metaPath: string,
): { categoria: string; slug: string } | null {
  const rel = path.relative(CONTENT_DIR, path.dirname(metaPath));
  const parts = rel.split(path.sep).filter(Boolean);
  if (parts.length < 2) return null;
  return { categoria: parts[0], slug: parts[1] };
}

async function main() {
  log('Iniciando…');
  log(`CONTENT_DIR = ${CONTENT_DIR}`);
  log(`OUT_FILE    = ${OUT_FILE}`);

  try {
    await fs.access(CONTENT_DIR);
  } catch {
    log(`ERRO: _content não existe: ${CONTENT_DIR}`);
    process.exit(1);
  }

  const files = await listMetaFiles(CONTENT_DIR);
  log(`Encontrados ${files.length} meta.ts`);

  const entries: Array<{
    key: string;
    categoria: string;
    slug: string;
    nome: string;
    primeiraAba: string;
  }> = [];

  for (const file of files) {
    const rel = path.relative(ROOT, file);
    const derived = deriveCategoriaSlug(file);
    if (!derived) {
      log(`Ignorado (caminho): ${rel}`);
      continue;
    }

    let meta: MetaShape | null = null;
    try {
      const source = await fs.readFile(file, 'utf8');
      meta = parseMetaFromSource(source);
    } catch (err) {
      log(`Falha ao ler ${rel}: ${err}`);
      continue;
    }

    if (!meta) {
      log(`Ignorado (sem abas[0].slug): ${rel}`);
      continue;
    }

    const categoria = meta.categoria ?? derived.categoria;
    const slug = meta.slug ?? derived.slug;
    const primeiraAba = meta.abas?.[0]?.slug ?? meta.abas?.[0]?.id;

    if (!primeiraAba) {
      log(`Ignorado (primeira aba vazia): ${rel}`);
      continue;
    }

    const key = `${categoria}/${slug}`;
    entries.push({
      key,
      categoria,
      slug,
      nome: meta.nome ?? slug,
      primeiraAba,
    });
    log(`OK  ${key} → /${primeiraAba}`);
  }

  entries.sort((a, b) => a.key.localeCompare(b.key, 'pt-BR'));

  const body = entries
    .map(
      (e) =>
        `  ${JSON.stringify(e.key)}: {\n` +
        `    categoria: ${JSON.stringify(e.categoria)},\n` +
        `    slug: ${JSON.stringify(e.slug)},\n` +
        `    nome: ${JSON.stringify(e.nome)},\n` +
        `    primeiraAba: ${JSON.stringify(e.primeiraAba)},\n` +
        `  }`,
    )
    .join(',\n');

  const now = new Date().toISOString();

  const fileContent = `// ⚠️ GERADO AUTOMATICAMENTE — NÃO EDITAR
// ${now}
// npm run generate:santos

export type SantoManifestEntry = {
  categoria: string;
  slug: string;
  nome: string;
  primeiraAba: string;
};

export const SANTOS_MANIFEST = {
${body}
} as const satisfies Record<string, SantoManifestEntry>;

export type SantoManifestKey = keyof typeof SANTOS_MANIFEST;

export const MANIFEST_GENERATED_AT = ${JSON.stringify(now)} as const;

export function getPrimeiraAba(categoria: string, slug: string): string | null {
  const key = \`\${categoria}/\${slug}\`;
  const entry = (SANTOS_MANIFEST as Record<string, SantoManifestEntry>)[key];
  return entry?.primeiraAba ?? null;
}
`;

  await fs.mkdir(path.dirname(OUT_FILE), { recursive: true });
  await fs.writeFile(OUT_FILE, fileContent, 'utf8');

  log('────────────────────────────────────');
  log(`${entries.length} santo(s) → ${path.relative(ROOT, OUT_FILE)}`);
  log('────────────────────────────────────');

  if (entries.length === 0) process.exitCode = 1;
}

main().catch((err) => {
  console.error('[santos-manifest] FALHA:', err);
  process.exit(1);
});