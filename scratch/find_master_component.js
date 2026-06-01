const fs = require('fs');
const content = fs.readFileSync('scratch/index.js', 'utf8');

const regex = /([a-zA-Z0-9_]+)\s*=\s*z\.lazy\(\(\)=>Ae\(\(\)=>import\("\.\/Master/gi;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log(match[0]);
}

const regexD9 = /D9\s*=/gi;
let matchD9;
if ((matchD9 = regexD9.exec(content)) !== null) {
  const index = matchD9.index;
  console.log("D9 context:");
  console.log(content.substring(index - 100, index + 300));
}
