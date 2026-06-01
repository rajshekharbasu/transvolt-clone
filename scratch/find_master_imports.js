const fs = require('fs');
const content = fs.readFileSync('scratch/index.js', 'utf8');

const regex = /import\("\.\/Master[^"]*"\)/gi;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log(match[0]);
}

// Search for any lazy load mappings in index.js for D9, F9, b9, T9, P9, O9, L9, N9, I9, z9
const variables = ['D9', 'F9', 'b9', 'T9', 'P9', 'O9', 'L9', 'N9', 'I9', 'z9'];
variables.forEach(v => {
  const r = new RegExp(v + '\\s*=\\s*z\\.lazy\\(\\(\\)=>Ae\\(\\(\\)=>import\\("([^"]+)"\\)', 'i');
  const m = r.exec(content);
  if (m) {
    console.log(`${v} loads ${m[1]}`);
  }
});
