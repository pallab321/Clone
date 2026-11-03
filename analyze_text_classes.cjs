const fs = require('fs');
const css = fs.readFileSync('e:/REA/extracted/css/25a6deac18c12061.css', 'utf8');

const textClasses = css.match(/\.text-[^{]+?\{[^}]+\}/g);
console.log('Sample text classes:');
textClasses.slice(0, 30).forEach(tc => console.log(tc));

