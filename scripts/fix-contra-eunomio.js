const fs = require('fs');
const path = require('path');

const filePath = 'app/biblioteca/sao-gregorio-nissa/data/contra-eunomio.ts';
const originalContent = fs.readFileSync(filePath, 'utf8');

// Strategy: Use a proper brace-counting parser to extract each chapter object,
// then rebuild the file cleanly.

function findMatchingBrace(text, startIdx) {
  let depth = 0;
  let inString = false;
  let escape = false;
  for (let i = startIdx; i < text.length; i++) {
    const ch = text[i];
    if (escape) { escape = false; continue; }
    if (ch === '\\') { escape = true; continue; }
    if (ch === '"') { inString = !inString; continue; }
    if (inString) continue;
    if (ch === '{') depth++;
    if (ch === '}') {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

// Find each top-level object in the array
const arrayStart = originalContent.indexOf('[');
let pos = arrayStart + 1;
const objects = [];

while (pos < originalContent.length) {
  // Skip whitespace and commas
  while (pos < originalContent.length && /[\s,]/.test(originalContent[pos])) pos++;
  if (originalContent[pos] !== '{') break;
  
  const objStart = pos;
  const objEnd = findMatchingBrace(originalContent, pos);
  if (objEnd === -1) {
    console.error('Unmatched brace at position', pos);
    break;
  }
  
  const objText = originalContent.substring(objStart, objEnd + 1);
  objects.push(objText);
  pos = objEnd + 1;
}

console.log('Found', objects.length, 'chapter objects');

// Now parse each object and fix issues
const ptText = fs.readFileSync(path.join(process.env.TEMP || process.env.TMP || '.', 'opencode', 'portuguese-text.txt'), 'utf8').trim();
const fixedObjects = [];

for (let idx = 0; idx < objects.length; idx++) {
  let obj = objects[idx];
  
  // Check if "tradutor" is inside "original" (wrong place)
  // Find the "original" block
  const origStart = obj.indexOf('"original": {');
  if (origStart !== -1) {
    const origObjStart = obj.indexOf('{', origStart);
    const origObjEnd = findMatchingBrace(obj, origObjStart);
    if (origObjEnd !== -1) {
      const origBlock = obj.substring(origObjStart, origObjEnd + 1);
      if (origBlock.includes('"tradutor"')) {
        // Remove tradutor from original
        const fixedOrig = origBlock.replace(/\s*"tradutor":\s*"Projeto Lux Fidei",?\s*/g, '');
        obj = obj.substring(0, origObjStart) + fixedOrig + obj.substring(origObjEnd + 1);
        console.log('Chapter', idx + 1, ': removed tradutor from original');
      }
    }
  }
  
  // Check if portugues exists
  const ptStart = obj.indexOf('"portugues": {');
  if (ptStart === -1) {
    // Missing portugues - add it after original
    const origStart2 = obj.indexOf('"original": {');
    if (origStart2 !== -1) {
      const origObjStart2 = obj.indexOf('{', origStart2);
      const origObjEnd2 = findMatchingBrace(obj, origObjStart2);
      if (origObjEnd2 !== -1) {
        // Check if this is the last chapter (ii-15)
        const idMatch = obj.match(/"id":\s*"(.*?)"/);
        const id = idMatch ? idMatch[1] : '';
        
        let insertText;
        if (id.includes('ii-15')) {
          insertText = '\n    "portugues": {\n      "texto": ' + JSON.stringify(ptText) + ',\n      "tradutor": "Projeto Lux Fidei"\n    },';
        } else {
          insertText = '\n    "portugues": {\n      "texto": "",\n      "tradutor": "Projeto Lux Fidei"\n    },';
        }
        
        obj = obj.substring(0, origObjEnd2 + 1) + insertText + obj.substring(origObjEnd2 + 1);
        console.log('Chapter', idx + 1, '(' + id + '): added portugues');
      }
    }
  } else {
    // portugues exists - check for duplicate
    const ptObjStart = obj.indexOf('{', ptStart);
    const ptObjEnd = findMatchingBrace(obj, ptObjStart);
    if (ptObjEnd !== -1) {
      const ptBlock = obj.substring(ptObjStart, ptObjEnd + 1);
      // Check if portugues has both texto and tradutor
      if (!ptBlock.includes('"tradutor"')) {
        // Missing tradutor - add it before closing brace
        const fixedPt = ptBlock.replace(/\}(\s*)$/, ',\n      "tradutor": "Projeto Lux Fidei"\n    }$1');
        obj = obj.substring(0, ptObjStart) + fixedPt + obj.substring(ptObjEnd + 1);
        console.log('Chapter', idx + 1, ': added tradutor to portugues');
      }
      
      // Check for duplicate portugues blocks
      const afterFirstPt = obj.substring(ptObjEnd + 1);
      const secondPtStart = afterFirstPt.indexOf('"portugues": {');
      if (secondPtStart !== -1) {
        // Found duplicate - remove it
        const secondPtObjStart = obj.indexOf('{', ptObjEnd + 1 + secondPtStart);
        const secondPtObjEnd = findMatchingBrace(obj, secondPtObjStart);
        if (secondPtObjEnd !== -1) {
          // Also remove trailing comma/newline
          let removeEnd = secondPtObjEnd + 1;
          while (removeEnd < obj.length && /[\s,]/.test(obj[removeEnd])) removeEnd++;
          obj = obj.substring(0, ptObjEnd + 1) + obj.substring(removeEnd);
          console.log('Chapter', idx + 1, ': removed duplicate portugues');
        }
      }
    }
  }
  
  fixedObjects.push(obj);
}

// Rebuild the file
const preamble = originalContent.substring(0, arrayStart + 1);
const postamble = originalContent.substring(originalContent.lastIndexOf('];'));

let output = preamble + '\n';
for (let i = 0; i < fixedObjects.length; i++) {
  output += fixedObjects[i];
  if (i < fixedObjects.length - 1) {
    output += ',\n';
  } else {
    output += '\n';
  }
}
output += postamble;

fs.writeFileSync(filePath, output, 'utf8');
console.log('File rebuilt successfully');

// Verify bracket balance
let depth = 0;
for (let i = 0; i < output.length; i++) {
  if (output[i] === '{') depth++;
  if (output[i] === '}') depth--;
}
console.log('Bracket depth:', depth);
