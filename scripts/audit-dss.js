const fs = require('fs');
const content = fs.readFileSync('app/biblioteca/santo-ambrosio/data/de-spiritu-sancto.ts', 'utf8');

// Find all § markers and their positions
const sections = [...content.matchAll(/§(\d+)/g)];
console.log('Total § markers:', sections.length);

// Count occurrences of each section number
const counts = {};
sections.forEach(m => {
  const num = m[1];
  counts[num] = (counts[num] || 0) + 1;
});

// Show duplicates
console.log('\nDuplicate sections:');
Object.entries(counts)
  .filter(([k, v]) => v > 1)
  .forEach(([k, v]) => {
    console.log(`  §${k}: ${v} occurrences`);
    // Find positions
    const positions = [];
    let idx = 0;
    while ((idx = content.indexOf(`§${k}`, idx)) !== -1) {
      positions.push(idx);
      idx++;
    }
    positions.forEach(pos => {
      const context = content.substring(Math.max(0, pos - 20), pos + 60);
      console.log(`    At pos ${pos}: ...${context.replace(/\n/g, '\\n')}...`);
    });
  });

// Check for empty texto fields
const emptyOriginal = [...content.matchAll(/"texto":\s*""\s*\n/g)];
console.log('\nEmpty texto fields:', emptyOriginal.length);
emptyOriginal.forEach(m => {
  const before = content.substring(Math.max(0, m.index - 100), m.index);
  const idMatch = before.match(/"id":\s*"(de-spiritu-sancto-\d+)"/);
  if (idMatch) console.log(`  In chapter: ${idMatch[1]}`);
});

// Check for > in text
const gtMarkers = [...content.matchAll(/\\n\\n\s*>/g)];
console.log('\n\\n\\n> markers:', gtMarkers.length);

// Check for ** markers
const boldMarkers = [...content.matchAll(/\*\*/g)];
console.log('Bold ** markers:', boldMarkers.length);

// Check for * markers (not **)
const italicMarkers = [...content.matchAll(/(?<!\*)\*(?!\*)/g)];
console.log('Italic * markers:', italicMarkers.length);

// Check for English biblical references in Portuguese text
const enRefs = [...content.matchAll(/(John|Romans|Galatians|1 Corinthians|2 Corinthians|Hebrews|1 John|2 John|3 John|James|1 Peter|2 Peter|Jude|Revelation|Matthew|Mark|Luke|Acts|Ephesians|Philippians|Colossians|1 Thessalonians|2 Thessalonians|1 Timothy|2 Timothy|Titus|Philemon)\s+\d+:\d+/g)];
console.log('\nEnglish biblical references:', enRefs.length);
enRefs.slice(0, 5).forEach(m => {
  const before = content.substring(Math.max(0, m.index - 30), m.index);
  console.log(`  ${m[0]} at pos ${m.index}`);
});
