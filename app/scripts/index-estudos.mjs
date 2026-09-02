/**
 * ================================================================
 * SCRIPT DE INDEXAÇÃO AUTOMÁTICA DE ESTUDOS
 * ================================================================
 * Lê todos os arquivos page.tsx dentro de app/estudos/**
 * Extrai o texto visível e gera um search-index.json
 * 
 * Uso: node scripts/index-estudos.mjs
 * ================================================================
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ⚙️ CONFIGURAÇÃO
const ESTUDOS_DIR = path.join(__dirname, '..', 'app', 'estudos');
const OUTPUT_FILE = path.join(ESTUDOS_DIR, 'search-index.json');
const ROOT_PAGE = path.join(ESTUDOS_DIR, 'page.tsx'); // ignora a página principal

/* ================================================================
   HELPERS
   ================================================================ */

/** Percorre recursivamente encontrando todos os page.tsx */
function findAllPages(dir, pages = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      findAllPages(fullPath, pages);
    } else if (entry.isFile() && entry.name === 'page.tsx') {
      // Ignora a page.tsx raiz de estudos
      if (fullPath !== ROOT_PAGE) {
        pages.push(fullPath);
      }
    }
  }

  return pages;
}

/** Converte caminho absoluto do arquivo em rota do Next.js */
function filePathToRoute(filePath) {
  const relative = path.relative(path.join(__dirname, '..', 'app'), filePath);
  const withoutFile = relative.replace(/[\\/]page\.tsx$/, '');
  const route = '/' + withoutFile.split(path.sep).join('/');
  return route;
}

/** Gera ID amigável a partir da rota */
function routeToId(route) {
  return route
    .replace(/^\/estudos\//, '')
    .replace(/\//g, '-')
    .toLowerCase();
}

/**
 * Extrai texto visível de um arquivo TSX
 * — Remove imports, exports, funções, hooks, tags JSX
 * — Preserva strings de texto, conteúdo entre tags e literais
 */
function extractTextFromTSX(content) {
  let text = content;

  // 1. Remove comentários /* ... */ e //
  text = text.replace(/\/\*[\s\S]*?\*\//g, ' ');
  text = text.replace(/\/\/.*$/gm, ' ');

  // 2. Remove imports e exports statement
  text = text.replace(/^import\s+.*?from\s+['"].*?['"];?\s*$/gm, ' ');
  text = text.replace(/^export\s+(default\s+)?/gm, ' ');

  // 3. Extrai strings de conteúdo (dentro de aspas duplas, simples, template literals)
  const strings = [];
  
  // Template literals `...`
  const templateRegex = /`([^`\\]*(?:\\.[^`\\]*)*)`/g;
  let match;
  while ((match = templateRegex.exec(text)) !== null) {
    strings.push(match[1]);
  }

  // Strings entre aspas duplas "..."
  const doubleQuoteRegex = /"([^"\\]*(?:\\.[^"\\]*)*)"/g;
  while ((match = doubleQuoteRegex.exec(text)) !== null) {
    strings.push(match[1]);
  }

  // Strings entre aspas simples '...'
  const singleQuoteRegex = /'([^'\\]*(?:\\.[^'\\]*)*)'/g;
  while ((match = singleQuoteRegex.exec(text)) !== null) {
    strings.push(match[1]);
  }

  // 4. Extrai texto entre tags JSX >texto<
  const jsxTextRegex = />([^<>{}\n]+)</g;
  while ((match = jsxTextRegex.exec(text)) !== null) {
    const cleaned = match[1].trim();
    if (cleaned.length > 2) {
      strings.push(cleaned);
    }
  }

  // 5. Junta tudo
  let combined = strings.join(' ');

  // 6. Filtra ruído (nomes de classes CSS, paths, URLs, imports)
  const noise = [
    /\.module\.css/gi,
    /styles\.\w+/g,
    /className/g,
    /^\/[\w\-\/]+\.(png|jpg|jpeg|svg|gif|webp)$/gim,
    /https?:\/\/\S+/g,
    /\b(useState|useEffect|useMemo|useRef|useCallback)\b/g,
    /\bconst\b|\blet\b|\bvar\b|\breturn\b|\bfunction\b/g,
  ];
  noise.forEach((regex) => (combined = combined.replace(regex, ' ')));

  // 7. Limpa espaços múltiplos e caracteres residuais
  combined = combined
    .replace(/\\n/g, ' ')
    .replace(/\\t/g, ' ')
    .replace(/[{}]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return combined;
}

/** Extrai o título (primeiro h1/h2 ou nome do arquivo) */
function extractTitle(content, fallback) {
  const h1 = content.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  if (h1) return h1[1].trim();

  const h2 = content.match(/<h2[^>]*>([^<]+)<\/h2>/i);
  if (h2) return h2[1].trim();

  // Formata fallback: "primeira-comunhao" → "Primeira Comunhao"
  return fallback
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/** Extrai primeiro parágrafo/descrição */
function extractDescription(fullText, maxLen = 200) {
  if (fullText.length <= maxLen) return fullText;

  // Tenta cortar no fim de uma frase
  const truncated = fullText.slice(0, maxLen);
  const lastPeriod = truncated.lastIndexOf('.');

  if (lastPeriod > 100) {
    return truncated.slice(0, lastPeriod + 1);
  }

  return truncated + '...';
}

/* ================================================================
   MAIN
   ================================================================ */

console.log('\n🔍 Indexando estudos...\n');
console.log(`📂 Diretório: ${ESTUDOS_DIR}\n`);

if (!fs.existsSync(ESTUDOS_DIR)) {
  console.error(`❌ Diretório não encontrado: ${ESTUDOS_DIR}`);
  process.exit(1);
}

const pageFiles = findAllPages(ESTUDOS_DIR);
console.log(`✅ Encontrados ${pageFiles.length} arquivos de estudo\n`);

const index = [];

for (const filePath of pageFiles) {
  try {
    const relPath = path.relative(process.cwd(), filePath);
    const content = fs.readFileSync(filePath, 'utf8');

    const route = filePathToRoute(filePath);
    const id = routeToId(route);
    const folderName = path.basename(path.dirname(filePath));

    const fullText = extractTextFromTSX(content);
    const title = extractTitle(content, folderName);
    const description = extractDescription(fullText);

    // Detecta categoria pela pasta
    const parts = route.split('/').filter(Boolean);
    const category = parts[1] || 'geral'; // /estudos/CATEGORIA/...

    const entry = {
      id,
      title,
      route,
      description,
      category,
      // Conteúdo completo para busca profunda (limitado a 10k chars por estudo)
      content: fullText.slice(0, 10000),
      // Metadados úteis
      wordCount: fullText.split(/\s+/).length,
      indexedAt: new Date().toISOString(),
    };

    index.push(entry);
    console.log(`  ✓ [${category}] ${title}`);
    console.log(`    → ${route} (${entry.wordCount} palavras)\n`);
  } catch (err) {
    console.error(`  ✗ Erro em ${filePath}:`, err.message);
  }
}

// Salva o índice
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(index, null, 2), 'utf8');

console.log('\n' + '═'.repeat(60));
console.log(`✅ ÍNDICE GERADO COM SUCESSO!`);
console.log('═'.repeat(60));
console.log(`📄 Arquivo: ${OUTPUT_FILE}`);
console.log(`📊 Total: ${index.length} estudos indexados`);
console.log(`📦 Tamanho: ${(fs.statSync(OUTPUT_FILE).size / 1024).toFixed(2)} KB`);
console.log('═'.repeat(60) + '\n');