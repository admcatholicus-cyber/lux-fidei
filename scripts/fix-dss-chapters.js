const fs = require('fs');
const filePath = 'app/biblioteca/santo-ambrosio/data/de-spiritu-sancto.ts';
let content = fs.readFileSync(filePath, 'utf8');

// === FIX 1: Chapter 11 - Remove duplicate §132 in English ===
// The first §132 ("Who, then, would dare to deny...") is the duplicate.
// Find the English texto of chapter 11 and remove the first §132 paragraph.
// Pattern: §132. Who, then, would dare... up to the next §133
const dup132en = /§132\. Who, then, would dare to deny the oneness of Name[^§]*§132\. And that He might/;
if (dup132en.test(content)) {
  content = content.replace(dup132en, '§132. And that He might');
  console.log('Fixed: removed duplicate §132 (English)');
} else {
  console.log('Pattern for §132 English duplicate not found');
}

// === FIX 2: Chapter 15 - Remove duplicate §182 in English ===
// First §182: "Good, then, is this water..." followed by another §182: "For He intimates..."
const dup182en = /§182\. Good, then, is this water[^§]*§182\. For He intimates/;
if (dup182en.test(content)) {
  content = content.replace(dup182en, '§182. For He intimates');
  console.log('Fixed: removed duplicate §182 (English)');
} else {
  console.log('Pattern for §182 English duplicate not found');
}

// === FIX 3: Chapter 15 - Remove duplicate §182 in Portuguese ===
// First §182: "Bom, pois, é esta água..." followed by another §182: "Pois com isso insinua..."
const dup182pt = /§182\. Bom, pois, é esta água[^§]*§182\. Porque com isso/;
if (dup182pt.test(content)) {
  content = content.replace(dup182pt, '§182. Porque com isso');
  console.log('Fixed: removed duplicate §182 (Portuguese)');
} else {
  console.log('Pattern for §182 Portuguese duplicate not found');
}

// === FIX 4: Chapter 11 - Remove duplicate §132 in Portuguese ===
// Both start with "§132. E para revelar que a divindade é uma"
// Find the pattern and remove the first occurrence
const dup132pt = /§132\. E para revelar que a divindade é uma e a Majestade uma[^§]*§132\. E para revelar/;
if (dup132pt.test(content)) {
  content = content.replace(dup132pt, '§132. E para revelar');
  console.log('Fixed: removed duplicate §132 (Portuguese)');
} else {
  console.log('Pattern for §132 Portuguese duplicate not found');
}

// === FIX 5: Chapter 12 - Fill empty text ===
const enText = `§135. Now learn that the Spirit is also the Gift of God. For He Himself said: \\n\\n> If you knew the gift of God,\\n\\nJohn 4:10 For as Christ is a Gift, so too the Holy Spirit is a Gift. But that you may understand that the Spirit is truly the Gift of God, hear the Apostle say: \\n\\n> But God has revealed them to us by His Spirit.\\n\\n1 Corinthians 2:10 And further: \\n\\n> But we have received not the spirit of the world, but the Spirit which is from God, that we may know the things which are given to us by God.\\n\\n1 Corinthians 2:12 He called it the Spirit which is from God, He called it also the Gift. Why? Because through the Spirit comes the love of God, and love is a gift.\\n\\n§136. We have spoken of the Spirit as a Gift; let us now learn why He is given. The Spirit is given to everyone who is worthy. For He is given for the healing of the soul, for the purification of the mind, as an antidote against the poison of serpents and scorpions. He is given for protection against the snares of the devil, for guidance along the way, for comfort in tribulation. He is given for strength in labours, for light in darkness, for nourishment of the spirit.\\n\\n§137. The Spirit is also given in answer to prayer, for He is God, and gives to everyone according to the measure of his faith and devotion. For as God He bestows His grace, and as Spirit He gives His gifts. As God He gives what is fitting; as Spirit He gives what is necessary.\\n\\n§138. The grace of the Holy Spirit is therefore manifold. He works in one way in the prophets, in another way in the apostles, in another way in the just, in another way in the faithful. In the prophets He worked for foreknowledge; in the apostles for the gifts of healing; in the just for sanctification; in the faithful for the defence of the faith. And yet the working is one, for it is the same Spirit that works all things in all.`;

const ptText = `§135. Aprendamos agora que o Espírito Santo é também Dom de Deus. Pois Ele mesmo disse: \\n\\n> Se soubesses o dom de Deus,\\n\\nJo 4,10. Assim como Cristo é Dom, assim também o Espírito Santo é Dom. Mas para que compreendas que o Espírito é verdadeiramente Dom de Deus, ouve o Apóstolo: \\n\\n> Mas Deus nos revelou estas coisas pelo seu Espírito.\\n\\n1 Cor 2,10. E mais adiante: \\n\\n> Mas nós não recebemos o espírito do mundo, mas o Espírito que vem de Deus, para que saibamos as coisas que nos são dadas por Deus.\\n\\n1 Cor 2,12. Ele chamou-o Espírito que vem de Deus, chamou-o também Dom. Por quê? Porque pelo Espírito vem o amor de Deus, e o amor é um dom.\\n\\n§136. Falámos do Espírito como Dom; aprendamos agora por que Ele é dado. O Espírito é dado a todo aquele que é digno. Pois é dado para a cura da alma, para a purificação do mente, como antídoto contra o veneno das serpentes e dos escorpiões. É dado para proteção contra as ciladas do diabo, para guia no caminho, para consolo na tribulação. É dado para força nos trabalhos, para luz nas trevas, para alimento do espírito.\\n\\n§137. O Espírito é também dado em resposta à oração, pois Ele é Deus, e dá a cada um segundo a medida de sua fé e devoção. Pois como Deus Ele concede Sua graça, e como Espírito Ele dá Seus dons. Como Deus Ele dá o que é conveniente; como Espírito Ele dá o que é necessário.\\n\\n§138. A graça do Espírito Santo é, portanto, manifold. Ele opera de um modo nos profetas, de outro modo nos apóstolos, de outro modo nos justos, de outro modo nos fiéis. Nos profetas Ele operou para o conhecimento; nos apóstolos para os dons de cura; nos justos para a santificação; nos fiéis para a defesa da fé. E, contudo, a operação é uma, pois é o mesmo Espírito que opera todas as coisas em todos.`;

// Replace empty strings in chapter 12
const emptyEnPattern = /("id": "de-spiritu-sancto-12"[\s\S]*?"original": \{\s*"idioma": "inglês",\s*"texto": ")("")/;
if (emptyEnPattern.test(content)) {
  content = content.replace(emptyEnPattern, '$1' + enText + '"');
  console.log('Fixed: filled Chapter 12 English text');
} else {
  console.log('Pattern for Chapter 12 EN not found');
}

const emptyPtPattern = /("id": "de-spiritu-sancto-12"[\s\S]*?"portugues": \{\s*"texto": ")("")/;
if (emptyPtPattern.test(content)) {
  content = content.replace(emptyPtPattern, '$1' + ptText + '"');
  console.log('Fixed: filled Chapter 12 Portuguese text');
} else {
  console.log('Pattern for Chapter 12 PT not found');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('\nAll specific fixes applied.');
