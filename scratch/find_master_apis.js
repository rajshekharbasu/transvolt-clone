const fs = require('fs');
const content = fs.readFileSync('scratch/index.js', 'utf8');

const regex = /"master\/[^"]*"/gi;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log(`Double quotes match: ${match[0]}`);
}

const regexSingle = /'master\/[^']*'/gi;
let matchSingle;
while ((matchSingle = regexSingle.exec(content)) !== null) {
  console.log(`Single quotes match: ${matchSingle[0]}`);
}

const regexBacktick = /`master\/[^`]*`/gi;
let matchBacktick;
while ((matchBacktick = regexBacktick.exec(content)) !== null) {
  console.log(`Backticks match: ${matchBacktick[0]}`);
}
