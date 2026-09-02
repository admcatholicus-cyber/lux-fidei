/**
 * ================================================================
 * SCRIPT DE INDEXAÇÃO — VERSÃO RIGOROSA
 * Extrai APENAS texto visível ao usuário (entre tags JSX)
 * Ignora código, imports, paths, URLs, classes, props
 * ================================================================
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ESTUDOS_DIR = path.join(__dirname, '..', 'app', 'estudos');
const OUTPUT_FILE = path.join(ESTUDOS_DIR, 'search-index.json');
const ROOT_PAGE = path.join(ESTUDOS_DIR, 'page.tsx');

/* ================================================================
   BLACKLIST — palavras técnicas que NUNCA devem aparecer na busca
   ================================================================ */
const CODE_KEYWORDS = new Set([
  'true', 'false', 'null', 'undefined', 'const', 'let', 'var', 'function',
  'return', 'import', 'export', 'default', 'from', 'async', 'await',
  'class', 'extends', 'new', 'this', 'super', 'try', 'catch', 'throw',
  'if', 'else', 'for', 'while', 'switch', 'case', 'break', 'continue',
  'useState', 'useEffect', 'useMemo', 'useRef', 'useCallback', 'useContext',
  'className', 'onClick', 'onChange', 'onSubmit', 'onKeyDown', 'onFocus',
  'onBlur', 'onMouseEnter', 'onMouseLeave', 'onMouseDown', 'onMouseUp',
  'style', 'src', 'alt', 'href', 'target', 'rel', 'type', 'value',
  'placeholder', 'disabled', 'checked', 'selected', 'key', 'ref', 'id',
  'name', 'title', 'aria', 'role', 'tabIndex', 'width', 'height',
  'px', 'rem', 'em', 'vh', 'vw', 'rgba', 'rgb', 'hex',
  'div', 'span', 'section', 'article', 'header', 'footer', 'nav',
  'main', 'aside', 'button', 'input', 'form', 'label', 'img', 'svg',
  'flex', 'grid', 'block', 'inline', 'absolute', 'relative', 'fixed',
  'smooth', 'auto', 'none', 'hidden', 'visible', 'scroll',
  'translateX', 'translateY', 'translate', 'rotate', 'scale', 'transform',
  'slug', 'url', 'path', 'href', 'link', 'route', 'params', 'props',
  'children', 'render', 'component', 'element', 'node', 'fragment',
  'setState', 'setPage', 'setActive', 'setOpen', 'setClose',
  'window', 'document', 'localStorage', 'sessionStorage',
  'map', 'filter', 'reduce', 'forEach', 'find', 'includes', 'length',
  'toString', 'toLowerCase', 'toUpperCase', 'trim', 'split', 'join',
  'Math', 'Number', 'String', 'Array', 'Object', 'Boolean', 'Date',
  'JSON', 'parse', 'stringify', 'console', 'log', 'error', 'warn',
  'lang', 'dir', 'ltr', 'rtl', 'utf', 'iso',
  'png', 'jpg', 'jpeg', 'svg', 'gif', 'webp', 'ico', 'mp4', 'webm',
  'client', 'server', 'use', 'strict', 'module', 'exports',
  'rot', 'deg', 'offset', 'gap', 'lado', 'index', 'idx', 'item',
  'estudos', 'frase', 'nav', 'principal', 'btn', 'abrir', 'fechar',
]);

/* ================================================================
   EXTRAÇÃO DE TEXTO VISÍVEL
   ================================================================ */

/**
 * Extrai APENAS texto que fica visível na tela (entre tags JSX abertas/fechadas).
 * Ignora completamente:
 *  - imports/exports
 *  - código JavaScript
 *  - atributos JSX (className, src, href, etc)
 *  - strings usadas em código
 *  - URLs, paths, extensões
 */
function extractVisibleText(content) {
  let text = content;

  // 1. Remove comentários
  text = text.replace(/\/\*[\s\S]*?\*\//g, ' ');
  text = text.replace(/\/\/.*$/gm, ' ');

  // 2. Remove blocos inteiros de código (imports, exports, funções no topo)
  text = text.replace(/^import\s+[\s\S]*?from\s+['"][^'"]+['"];?\s*$/gm, ' ');
  text = text.replace(/^\s*['"]use\s+(client|server)['"];?\s*$/gm, ' ');

  // 3. Remove atributos JSX inteiros (name={...} ou name="...")
  // Ex: className="..." src={...} onClick={() => ...}
  text = text.replace(/\s+[a-zA-Z_][\w-]*\s*=\s*\{[^}]*\}/g, ' ');
  text = text.replace(/\s+[a-zA-Z_][\w-]*\s*=\s*"[^"]*"/g, ' ');
  text = text.replace(/\s+[a-zA-Z_][\w-]*\s*=\s*'[^']*'/g, ' ');

  // 4. Coleta APENAS texto entre tags: >TEXTO_AQUI<
  const visibleTexts = [];
  const jsxTextRegex = />([^<>{}]+)</g;
  let match;
  while ((match = jsxTextRegex.exec(text)) !== null) {
    const cleaned = match[1]
      .replace(/\s+/g, ' ')
      .trim();
    if (cleaned.length > 2 && !isNoise(cleaned)) {
      visibleTexts.push(cleaned);
    }
  }

  // 5. Coleta strings de arrays de dados (ex: title: "...", description: "...")
  // Muito comum em estudos que têm arrays de conteúdo
  const dataStringRegex = /(?:title|description|texto|content|conteudo|nome|titulo|paragrafo|frase)\s*:\s*['"`]([^'"`]{5,})['"`]/gi;
  while ((match = dataStringRegex.exec(text)) !== null) {
    const cleaned = match[1].replace(/\s+/g, ' ').trim();
    if (cleaned.length > 5 && !isNoise(cleaned)) {
      visibleTexts.push(cleaned);
    }
  }

  // 6. Coleta template literals grandes (parágrafos entre crases)
  const templateRegex = /`([^`]{20,})`/g;
  while ((match = templateRegex.exec(text)) !== null) {
    const cleaned = match[1].replace(/\s+/g, ' ').trim();
    // Só aceita se parecer texto natural (tem espaços, não tem muitos símbolos)
    if (
      cleaned.length > 20 &&
      cleaned.includes(' ') &&
      !cleaned.includes('${') &&
      !cleaned.includes('=>') &&
      !isNoise(cleaned)
    ) {
      visibleTexts.push(cleaned);
    }
  }

  // 7. Junta tudo, deduplica, filtra palavra a palavra
  let combined = visibleTexts.join(' ');

  // Remove símbolos técnicos residuais
  combined = combined
    .replace(/[{}()<>\[\]]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // Filtra palavras da blacklist
  const words = combined.split(/\s+/).filter((w) => {
    const lower = w.toLowerCase().replace(/[.,;:!?]/g, '');
    if (CODE_KEYWORDS.has(lower)) return false;
    if (/^\d+$/.test(w)) return false; // só números soltos
    if (w.length < 2) return false;
    return true;
  });

  return words.join(' ');
}

/** Detecta se um trecho é "ruído" (path, url, código, etc) */
function isNoise(text) {
  if (/\.(png|jpg|jpeg|svg|gif|webp|css|js|tsx|ts|json)/i.test(text)) return true;
  if (/^https?:\/\//i.test(text)) return true;
  if (/^\/[\w\-\/]+$/.test(text)) return true; // paths tipo /estudos/xxx
  if (/^[a-z]+-[a-z0-9-]+$/i.test(text) && !text.includes(' ')) return true; // slugs
  if (/=>/.test(text)) return true; // arrow functions
  if (/^\$\{/.test(text)) return true;
  return false;
}

/* ================================================================
   HELPERS DE ARQUIVO
   ================================================================ */

function findAllPages(dir, pages = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findAllPages(fullPath, pages);
    } else if (entry.isFile() && entry.name === 'page.tsx') {
      if (fullPath !== ROOT_PAGE) pages.push(fullPath);
    }
  }
  return pages;
}

function filePathToRoute(filePath) {
  const relative = path.relative(path.join(__dirname, '..', 'app'), filePath);
  const withoutFile = relative.replace(/[\\/]page\.tsx$/, '');
  return '/' + withoutFile.split(path.sep).join('/');
}

function routeToId(route) {
  return route.replace(/^\/estudos\//, '').replace(/\//g, '-').toLowerCase();
}

function extractTitle(content, fallback) {
  const h1 = content.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  if (h1) return h1[1].trim();
  const h2 = content.match(/<h2[^>]*>([^<]+)<\/h2>/i);
  if (h2) return h2[1].trim();
  return fallback
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/**
 * Divide o conteúdo em SEÇÕES pesquisáveis.
 * Cada seção terá um texto + posição/âncora para o link direto.
 */
function extractSections(content, visibleText) {
  const sections = [];

  // Tenta extrair headings + texto
  const headingRegex = /<(h[1-6])[^>]*>([^<]+)<\/\1>/gi;
  let match;
  const headings = [];
  while ((match = headingRegex.exec(content)) !== null) {
    headings.push({
      level: match[1],
      text: match[2].trim(),
      index: match.index,
    });
  }

  // Cria seções baseadas em headings
  headings.forEach((h, i) => {
    const start = h.index;
    const end = i < headings.length - 1 ? headings[i + 1].index : content.length;
    const sectionRaw = content.slice(start, end);
    const sectionText = extractVisibleText(sectionRaw);

    if (sectionText.length > 10) {
      sections.push({
        heading: h.text,
        anchor: slugify(h.text),
        text: sectionText.slice(0, 2000),
      });
    }
  });

  // Se não achou headings, cria uma seção única
  if (sections.length === 0) {
    sections.push({
      heading: null,
      anchor: null,
      text: visibleText.slice(0, 3000),
    });
  }

  return sections;
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/* ================================================================
   MAIN
   ================================================================ */

console.log('\n🔍 Indexando estudos (modo rigoroso)...\n');
console.log(`📂 Diretório: ${ESTUDOS_DIR}\n`);

if (!fs.existsSync(ESTUDOS_DIR)) {
  console.error(`❌ Diretório não encontrado: ${ESTUDOS_DIR}`);
  process.exit(1);
}

const pageFiles = findAllPages(ESTUDOS_DIR);
console.log(`✅ Encontrados ${pageFiles.length} arquivos de estudo\n`);

if (pageFiles.length === 0) {
  fs.writeFileSync(OUTPUT_FILE, '[]', 'utf8');
  console.log('⚠️  Nenhum arquivo encontrado. JSON vazio criado.\n');
  process.exit(0);
}

const index = [];

for (const filePath of pageFiles) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const route = filePathToRoute(filePath);
    const id = routeToId(route);
    const folderName = path.basename(path.dirname(filePath));

    const visibleText = extractVisibleText(content);
    const title = extractTitle(content, folderName);
    const sections = extractSections(content, visibleText);

    const parts = route.split('/').filter(Boolean);
    const category = parts[1] || 'geral';

    const description =
      visibleText.length > 200
        ? visibleText.slice(0, 200).replace(/\s+\S*$/, '') + '...'
        : visibleText;

    const entry = {
      id,
      title,
      route,
      description,
      category,
      content: visibleText.slice(0, 15000),
      sections, // ⭐ NOVO: seções com âncoras para link direto
      wordCount: visibleText.split(/\s+/).length,
      indexedAt: new Date().toISOString(),
    };

    index.push(entry);
    console.log(`  ✓ [${category}] ${title}`);
    console.log(`    → ${route} (${entry.wordCount} palavras, ${sections.length} seções)\n`);
  } catch (err) {
    console.error(`  ✗ Erro em ${filePath}:`, err.message);
  }
}

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(index, null, 2), 'utf8');

console.log('\n' + '='.repeat(60));
console.log(`✅ ÍNDICE GERADO COM SUCESSO!`);
console.log('='.repeat(60));
console.log(`📄 Arquivo: ${OUTPUT_FILE}`);
console.log(`📊 Total: ${index.length} estudos indexados`);
console.log(`📦 Tamanho: ${(fs.statSync(OUTPUT_FILE).size / 1024).toFixed(2)} KB`);
console.log('='.repeat(60) + '\n');