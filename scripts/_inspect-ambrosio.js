const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../app/biblioteca/santo-ambrosio/data/de-spiritu-sancto.ts');
const content = fs.readFileSync(filePath, 'utf8').replace(new RegExp('^' + String.fromCharCode(0xfeff)), '');
const codeClean = content.replace(/^import\s+.*$/gm, '').replace(/export\s+const\s+\w+\s*:\s*CapituloAmbrosio\[\]\s*=\s*/, 'return ');
const data = eval(`(function(){ ${codeClean} })()`);
console.log('total', data.length);
const ids = data.map(c => c.id);
console.log('dups', ids.filter((v, i) => ids.indexOf(v) !== i));
console.log('ii-14/15 present:', ids.includes('de-spiritu-sancto-ii-14'), ids.includes('de-spiritu-sancto-ii-15'));
const cap = data.find(c => c.id === 'de-spiritu-sancto-i-1');
for (const lang of ['original', 'portugues']) {
  console.log('=== ' + lang + ' ===');
  console.log(cap[lang].texto.split('\n\n').map(p => p.slice(0, 110)).join('\n'));
}
console.log('iii-12', data.find(c => c.id === 'de-spiritu-sancto-iii-12').titulo);
console.log('iii-13', data.find(c => c.id === 'de-spiritu-sancto-iii-13').titulo);
