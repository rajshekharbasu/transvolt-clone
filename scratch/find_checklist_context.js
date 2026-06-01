const fs = require('fs');
const content = fs.readFileSync('scratch/index.js', 'utf8');

const regex = /checklist-templates/gi;
let match;
while ((match = regex.exec(content)) !== null) {
  const index = match.index;
  const start = Math.max(0, index - 150);
  const end = Math.min(content.length, index + 150);
  console.log(`--- Match at index ${index} ---`);
  console.log(content.substring(start, end));
  console.log('\n');
}
