const fs = require('fs');
const path = require('path');
const c = fs.readFileSync('app/biblioteca/sao-gregorio-nissa/data/contra-eunomio.ts','utf8');
const outDir = path.join(process.env.TEMP || process.env.TMP || '.', 'opencode');
fs.mkdirSync(outDir, { recursive: true });

// Find the last entry's texto by extracting between the last "texto": " and the closing before "tradutor"
const lastTextoStart = c.lastIndexOf('"texto": "');
const lastTradutorIdx = c.lastIndexOf('"tradutor": "Projeto Lux Fidei"');
const textoContent = c.substring(lastTextoStart + 10, lastTradutorIdx - 6).trim();
// Remove trailing quote and newline artifacts
const cleanText = textoContent.replace(/"$/, '');
fs.writeFileSync(path.join(outDir, 'english-text.txt'), cleanText, 'utf8');
console.log('Saved English text, length:', cleanText.length);
console.log('First 200 chars:', cleanText.substring(0, 200));
console.log('Last 200 chars:', cleanText.substring(cleanText.length - 200));
