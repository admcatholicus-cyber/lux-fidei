import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://lux-fidei.vercel.app';
const APP_DIR = path.join(process.cwd(), 'app');
const OUTPUT_FILE = path.join(APP_DIR, 'sitemap.ts');

// 1. Escaneia páginas normais e rotas no formato Next.js (tsx, jsx, js, ts, page.mdx)
function escanearRotasPagina(dir, rotaAtual = '') {
  let rotas = [];
  if (!fs.existsSync(dir)) return rotas;
  const itens = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of itens) {
    if (item.isDirectory()) {
      if (item.name.startsWith('_') || item.name.startsWith('@') || item.name.startsWith('api') || item.name === 'scripts') continue;

      let segmento = item.name;
      if (segmento.startsWith('(') && segmento.endsWith(')')) segmento = '';

      const proximaRota = segmento ? `${rotaAtual}/${segmento}` : rotaAtual;
      rotas.push(...escanearRotasPagina(path.join(dir, item.name), proximaRota));
    } else if (item.isFile() && /^page\.(tsx|jsx|js|ts|mdx)$/.test(item.name)) {
      if (!rotaAtual.includes('[')) {
        rotas.push(rotaAtual === '' ? '/' : rotaAtual);
      }
    }
  }
  return rotas;
}

// 2. Escaneia todos os arquivos .mdx soltos (para capturar páginas de santos/estudos)
function escanearArquivosMdx(dir, rotaBase = '') {
  let rotas = [];
  if (!fs.existsSync(dir)) return rotas;
  const itens = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of itens) {
    if (item.isDirectory()) {
      if (item.name.startsWith('_') || item.name.startsWith('.')) continue;
      rotas.push(...escanearArquivosMdx(path.join(dir, item.name), `${rotaBase}/${item.name}`));
    } else if (item.isFile() && item.name.endsWith('.mdx')) {
      const nomeSemExtensao = item.name.replace(/\.mdx$/, '');
      if (nomeSemExtensao !== 'page') {
        rotas.push(`${rotaBase}/${nomeSemExtensao}`);
      }
    }
  }
  return rotas;
}

// Executa as varreduras
const rotasPaginas = escanearRotasPagina(APP_DIR);

// Procura por .mdx em /app e também na raiz (caso tenha pastas como /content ou /data)
const rootDir = process.cwd();
const rotasMdxApp = escanearArquivosMdx(APP_DIR, '');
const rotasMdxContent = escanearArquivosMdx(path.join(rootDir, 'content'), '');
const rotasMdxData = escanearArquivosMdx(path.join(rootDir, 'data'), '');

// Junta todas as rotas sem duplicatas e ignora parâmetros dinâmicos de rota [slug]
const todasRotas = Array.from(new Set([
  ...rotasPaginas,
  ...rotasMdxApp,
  ...rotasMdxContent,
  ...rotasMdxData
]))
.filter(r => r && !r.includes('['))
.sort();

// Monta o arquivo sitemap.ts
const itensSitemap = todasRotas.map((r) => `    {
      url: \`\${baseUrl}${r === '/' ? '' : r}\`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: ${r === '/' ? '1.0' : '0.8'},
    }`).join(',\n');

const conteudoFinal = `import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = '${BASE_URL}'

  return [
${itensSitemap}
  ]
}
`;

fs.writeFileSync(OUTPUT_FILE, conteudoFinal, 'utf-8');
console.log('✅ Sitemap atualizado com sucesso!');
console.log(`Total de rotas encontradas: ${todasRotas.length}`);
console.log(todasRotas);