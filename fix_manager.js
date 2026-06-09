const fs = require('fs');

let content = fs.readFileSync('src/manager.html', 'utf8');

// 1. Fix tag alignment by adding shrink-0 whitespace-nowrap to the pill tags
content = content.replace(/<span class="rounded-full([^>]*? uppercase tracking-wider[^>]*?)">/g, '<span class="rounded-full shrink-0 whitespace-nowrap$1">');

// 2. Add flex-wrap to the h4 title container to allow wrapping
content = content.replace(/<h4 class="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3">/g, '<h4 class="text-2xl font-black text-gray-900 dark:text-white flex flex-wrap items-center gap-3">');

// 3. Add gooey filter
const filterHTML = `
          <div x-data="{ filterType: 'All' }" class="mb-8">
            <div class="col-span-1 sm:col-span-2 mb-4 overflow-x-auto no-scrollbar pb-2">
              <div class="relative flex items-center h-12 w-max rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm px-1">
                
                <!-- Gooey Background Layer -->
                <div class="absolute inset-0 pointer-events-none rounded-full overflow-hidden" style="filter: url('#goo');">
                  <div class="absolute top-1 h-10 bg-brand-500 rounded-full transition-all duration-[600ms] z-0"
                       style="transition-timing-function: cubic-bezier(0.68, -0.2, 0.26, 1.3);"
                       :style="
                         filterType === 'All' ? 'width: 50px; transform: translateX(4px);' :
                         filterType === 'Quick Clean' ? 'width: 104px; transform: translateX(58px);' :
                         filterType === 'Overnight Clean' ? 'width: 134px; transform: translateX(166px);' :
                         'width: 100px; transform: translateX(304px);'
                       ">
                  </div>
                </div>

                <!-- Foreground Interactive Buttons -->
                <div class="relative flex items-center h-full z-10">
                  <button @click="filterType = 'All'" class="w-[50px] h-10 rounded-full font-bold text-sm transition-colors duration-300" :class="filterType === 'All' ? 'text-white' : 'text-gray-600 dark:text-gray-300 hover:text-brand-500 dark:hover:text-brand-400'">All</button>
                  <button @click="filterType = 'Quick Clean'" class="w-[104px] h-10 rounded-full font-bold text-sm transition-colors duration-300 ml-1" :class="filterType === 'Quick Clean' ? 'text-white' : 'text-gray-600 dark:text-gray-300 hover:text-brand-500 dark:hover:text-brand-400'">Quick Clean</button>
                  <button @click="filterType = 'Overnight Clean'" class="w-[134px] h-10 rounded-full font-bold text-sm transition-colors duration-300 ml-1" :class="filterType === 'Overnight Clean' ? 'text-white' : 'text-gray-600 dark:text-gray-300 hover:text-brand-500 dark:hover:text-brand-400'">Overnight Clean</button>
                  <button @click="filterType = 'Deep Clean'" class="w-[100px] h-10 rounded-full font-bold text-sm transition-colors duration-300 ml-1" :class="filterType === 'Deep Clean' ? 'text-white' : 'text-gray-600 dark:text-gray-300 hover:text-brand-500 dark:hover:text-brand-400'">Deep Clean</button>
                </div>
              </div>
            </div>
`;

// Insert the filter HTML after the QA & Dispatch Overview title and before Top Stats
content = content.replace(/(<h2 class="text-title-md2 font-bold text-gray-800 dark:text-white\/90">\s*QA & Dispatch Overview\s*<\/h2>\s*<\/div>)/, '$1\n' + filterHTML);

// Close the x-data div just before </main>
content = content.replace(/<\/main>/, '          </div>\n      </main>');

// 4. Add SVG filter if not present
if (!content.includes('id="goo"')) {
    const svgFilter = `
  <svg style="visibility: hidden; position: absolute;" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
      <filter id="goo" x="-50%" y="-50%" width="200%" height="300%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
        <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
      </filter>
    </defs>
  </svg>
</body>`;
    content = content.replace(/<\/body>/, svgFilter);
}

// 5. Add x-show to cards if possible (basic string manipulation)
content = content.replace(/<!-- Ready for QA Card -->\s*<div x-data="\{ status: 'qa' \}" x-show="status === 'qa'"/g, `<!-- Ready for QA Card -->\n              <div x-data="{ status: 'qa' }" x-show="status === 'qa' && (filterType === 'All' || filterType === 'Quick Clean')"`);
content = content.replace(/<!-- Ready for QA Card 2 -->\s*<div x-data="\{ status: 'qa' \}" x-show="status === 'qa'"/g, `<!-- Ready for QA Card 2 -->\n              <div x-data="{ status: 'qa' }" x-show="status === 'qa' && (filterType === 'All' || filterType === 'Overnight Clean')"`);
content = content.replace(/<!-- Ready for QA Card 3 -->\s*<div x-data="\{ status: 'qa' \}" x-show="status === 'qa'"/g, `<!-- Ready for QA Card 3 -->\n              <div x-data="{ status: 'qa' }" x-show="status === 'qa' && (filterType === 'All' || filterType === 'Deep Clean')"`);

fs.writeFileSync('src/manager.html', content);
console.log('Fixed manager.html');
