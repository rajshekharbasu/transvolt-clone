const fs = require('fs');
const content = fs.readFileSync('scratch/index.js', 'utf8');

const terms = ['/shifts', '/event-master', '/vehicle-types', '/event-policies', '/item-categories', '/checklist-templates', '/checklist-categories', '/questions'];
terms.forEach(t => {
  let idx = 0;
  while ((idx = content.indexOf(t, idx)) !== -1) {
    console.log(`--- Match for "${t}" at index ${idx} ---`);
    console.log(content.substring(Math.max(0, idx - 100), Math.min(content.length, idx + 200)));
    console.log('\n');
    idx += t.length;
  }
});
