const fs = require('fs');
const html = fs.readFileSync('e:/REA/index_scraped.html', 'utf8');

// Find all sections
const matches = [...html.matchAll(/<section[\s\S]*?<\/section>/g)];
console.log('Total sections in index_scraped.html:', matches.length);

matches.forEach((m, idx) => {
  const preview = m[0].substring(0, 150).replace(/\n/g, ' ');
  const aria = m[0].match(/aria-labelledby="([^"]+)"/)?.[1] || '';
  const id = m[0].match(/id="([^"]+)"/)?.[1] || '';
  console.log(`Section ${idx + 1}: id="${id}" aria="${aria}" | ${preview}`);
});

