const fs = require('fs');
const css = fs.readFileSync('e:/REA/extracted/css/25a6deac18c12061.css', 'utf8');

// Find :root definition
const rootMatch = css.match(/:root\s*\{[^}]+\}/g);
console.log('--- ROOT DEFINITIONS ---');
if (rootMatch) {
  rootMatch.forEach(r => console.log(r));
}

// Find all --fs- definitions
const fsMatches = css.match(/--fs-[a-z0-9]+:[^;]+;/g);
console.log('--- FONT SIZE VARIABLES ---');
if (fsMatches) {
  console.log([...new Set(fsMatches)]);
}

// Find body style
const bodyMatch = css.match(/body\s*\{[^}]+\}/g);
console.log('--- BODY STYLES ---');
if (bodyMatch) {
  bodyMatch.forEach(b => console.log(b));
}

// Find .wrap style
const wrapMatch = css.match(/\.wrap[^{]*\{[^}]+\}/g);
console.log('--- WRAP STYLES ---');
if (wrapMatch) {
  wrapMatch.forEach(w => console.log(w));
}

