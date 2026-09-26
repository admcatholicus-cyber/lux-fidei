const fs = require('fs');

const filePath = 'app/biblioteca/sao-gregorio-nissa/data/a-vida-de-moises.ts';
const content = fs.readFileSync(filePath, 'utf8');

const EN_FINAL =
  'As he followed those who were leading him to the king of that nation, he learned by the voice of his ass that his journey was not prosperous, for the ass spoke with a human voice and reproved the mad intent of the prophet. Then Balaam himself, moved by a divine impulse rather than by demonic power, uttered prophecy and became an interpreter of the divine will.\n\nAfter this, when the people had been led into licentiousness through foreign women, and the zeal of Phinehas had stayed the wrath of God against the sinners, and after the destruction of the Midianites, Moses reached the end of his life. Ascending the mountain, he looked upon the promised land from afar; he did not enter it, but died there. Yet no man knew his sepulchre, for he was buried by divine hands.\n\nScripture testifies concerning him that time did not dim his eyes, nor did his natural vigor abate, nor was the beauty of his face marred. He preserved his beauty untouched by time and his vision clear until his departure.\n\nSuch, then, is the historical account of the life of Moses, which we have briefly set forth. Having thus considered what we may learn from the literal story, let us now adapt these things to the virtuous life, so that by spiritual contemplation we may discover the divine lesson contained therein. Let us now begin this exposition.';

const PT_FINAL =
  'Ao seguir aqueles que o conduziam ao rei daquela nação, aprendeu pela voz do seu jumento que o caminho não lhe era propício, pois a jumenta falou com voz humana e repreendeu a insensata intenção do profeta. Então o próprio Balaão, movido por impulso divino em vez de poder demoníaco, proferiu profecia e tornou-se intérprete da vontade divina.\n\nDepois disso, tendo o povo sido levado à licenciosidade por meio das mulheres estrangeiras, e tendo o zelo de Fineias aplacado a ira de Deus contra os pecadores, e após a destruição dos midianitas, Moisés alcançou o fim de sua vida. Subindo ao monte, contemplou de longe a terra prometida; não entrou nela, mas ali morreu. Contudo, ninguém soube do seu sepulcro, pois foi sepultado por mãos divinas.\n\nA Escritura testemunha a seu respeito que o tempo não escureceu seus olhos, nem o seu vigor natural diminuiu, nem se estragou a beleza do seu rosto. Ele conservou a sua beleza intocada pelo tempo e sua visão clara até a sua partida.\n\nTal é, portanto, o relato histórico da vida de Moisés, que expusemos brevemente. Tendo assim considerado o que podemos aprender da história literal, adaptemos agora estas coisas à vida virtuosa, para que pela contemplação espiritual descubramos a lição divina nela contida. Comecemos agora essa exposição.';

const EN_TRUNCATED_TAIL =
  'As he followed those who were leading him to the king of that nation, he learned by the voice of his';
const PT_TRUNCATED_TAIL =
  'Ao seguir aqueles que o conduziam ao rei daquela nação, aprendeu pela voz do seu...';

function findMatchingBrace(text, startIdx) {
  let depth = 0;
  let inString = false;
  let escape = false;
  for (let i = startIdx; i < text.length; i++) {
    const ch = text[i];
    if (escape) {
      escape = false;
      continue;
    }
    if (ch === '\\') {
      escape = true;
      continue;
    }
    if (ch === '"') {
      inString = !inString;
      continue;
    }
    if (inString) continue;
    if (ch === '{') depth++;
    if (ch === '}') {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function extractRawValue(objText, ownerKey) {
  const ownerIdx = objText.indexOf(ownerKey);
  if (ownerIdx === -1) throw new Error('Owner key not found: ' + ownerKey);
  const textoKey = '"texto": "';
  const textoIdx = objText.indexOf(textoKey, ownerIdx);
  if (textoIdx === -1) throw new Error('texto not found under ' + ownerKey);
  const valueStart = textoIdx + textoKey.length;

  let i = valueStart;
  let escape = false;
  while (i < objText.length) {
    const ch = objText[i];
    if (escape) {
      escape = false;
      i++;
      continue;
    }
    if (ch === '\\') {
      escape = true;
      i++;
      continue;
    }
    if (ch === '"') break;
    i++;
  }
  if (i >= objText.length) throw new Error('Unterminated string for ' + ownerKey);
  return { valueStart, valueEnd: i, raw: objText.substring(valueStart, i) };
}

function repairText(decoded, finalText, expectedTail, label) {
  const marker = '\n\n74. ';
  const markerIdx = decoded.lastIndexOf(marker);
  if (markerIdx === -1) throw new Error(label + ': section 74 marker not found');

  const cutAt = markerIdx + marker.length;
  const tail = decoded.substring(cutAt);
  if (tail !== expectedTail) {
    throw new Error(
      label + ': unexpected truncated tail: ' + JSON.stringify(tail.slice(-80))
    );
  }

  const repaired = decoded.substring(0, cutAt) + finalText;
  const paras = repaired.split('\n\n').length;
  console.log(
    label + ': repaired (74-77 restored); paragraphs: ' +
      decoded.split('\n\n').length + ' -> ' + paras
  );
  return { repaired, paras };
}

const idToken = '"id": "a-vida-de-moises-1"';
const idIdx = content.indexOf(idToken);
if (idIdx === -1) throw new Error('Object a-vida-de-moises-1 not found');
const objStart = content.lastIndexOf('{', idIdx);
const objEnd = findMatchingBrace(content, objStart);
if (objEnd === -1) throw new Error('Unmatched brace for a-vida-de-moises-1');
let objText = content.substring(objStart, objEnd + 1);

const enRaw = extractRawValue(objText, '"original"');
const ptRaw = extractRawValue(objText, '"portugues"');

const enDecoded = JSON.parse('"' + enRaw.raw + '"');
const ptDecoded = JSON.parse('"' + ptRaw.raw + '"');

const en = repairText(enDecoded, EN_FINAL, EN_TRUNCATED_TAIL, 'original.texto (EN)');
const pt = repairText(ptDecoded, PT_FINAL, PT_TRUNCATED_TAIL, 'portugues.texto (PT)');

if (en.paras !== pt.paras) {
  throw new Error(
    'Paragraph mismatch: EN ' + en.paras + ' vs PT ' + pt.paras
  );
}
console.log('Paragraph counts identical: ' + en.paras);

// Re-encode and splice back. Re-extract positions because original was first.
const enEnc = JSON.stringify(en.repaired).slice(1, -1);
objText =
  objText.substring(0, enRaw.valueStart) +
  enEnc +
  objText.substring(enRaw.valueEnd);

const ptRaw2 = extractRawValue(objText, '"portugues"');
const ptEnc = JSON.stringify(pt.repaired).slice(1, -1);
objText =
  objText.substring(0, ptRaw2.valueStart) +
  ptEnc +
  objText.substring(ptRaw2.valueEnd);

// Sanity: object still parses as balanced and contains the new endings.
if (!objText.includes('Let us now begin this exposition.')) {
  throw new Error('EN ending missing after splice');
}
if (!objText.includes('Comecemos agora essa exposição.')) {
  throw new Error('PT ending missing after splice');
}

const newContent =
  content.substring(0, objStart) + objText + content.substring(objEnd + 1);

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('File saved: ' + filePath);
