const fs = require('fs');
const path = require('path');

const dir = 'scratch';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));

files.forEach(file => {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  if (content.includes('onboarding/counts') || content.includes('recent-activities')) {
    console.log(`Found onboarding references in: ${file}`);
  }
});
