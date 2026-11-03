const fs = require('fs');
const html = fs.readFileSync('e:/REA/index_scraped.html', 'utf8');

const regex = /<section[^>]*>/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log('Section:', m[0]);
}

const idRegex = /id="([^"]+)"/g;
const ids = [];
while ((m = idRegex.exec(html)) !== null) {
  ids.push(m[1]);
}
console.log('All IDs:', ids);
